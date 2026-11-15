
"use client"

import { useState, useEffect, useRef } from "react"
import { PI_NETWORK_CONFIG, BACKEND_URLS } from "@/lib/system-config"

interface PiAuthResult {
  accessToken: string
  user: {
    uid: string
    username: string
  }
}

declare global {
  interface Window {
    Pi: {
      init: (config: {
        version: string
        sandbox?: boolean
      }) => Promise<void>
      authenticate: (scopes: string[]) => Promise<PiAuthResult>
    }
  }
}

// Promesses partagées pour éviter les chargements et connexions en double.
let piSdkPromise: Promise<void> | null = null
let piAuthFlowPromise: Promise<string> | null = null

const loadPiSDK = (): Promise<void> => {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Le SDK Pi doit être chargé dans le navigateur."),
    )
  }

  if (window.Pi) {
    return Promise.resolve()
  }

  if (!PI_NETWORK_CONFIG.SDK_URL) {
    return Promise.reject(new Error("L'adresse du SDK Pi est manquante."))
  }

  if (!piSdkPromise) {
    piSdkPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script")

      script.src = PI_NETWORK_CONFIG.SDK_URL
      script.async = true

      script.onload = () => {
        if (window.Pi) {
          console.log("SDK Pi chargé avec succès.")
          resolve()
        } else {
          reject(new Error("Le SDK est chargé, mais Pi reste indisponible."))
        }
      }

      script.onerror = () => {
        reject(new Error("Impossible de charger le SDK Pi."))
      }

      document.head.appendChild(script)
    })
  }

  return piSdkPromise.catch((error) => {
    piSdkPromise = null
    throw error
  })
}

const authenticateWithPi = async (): Promise<string> => {
  if (piAuthFlowPromise) {
    return piAuthFlowPromise
  }

  const flow = (async () => {
    await loadPiSDK()

    if (typeof window.Pi === "undefined") {
      throw new Error("Le service Pi n'est pas disponible.")
    }

    // Initialisation du SDK : configuration existante conservée.
    await window.Pi.init({
      version: "2.0",
      sandbox: PI_NETWORK_CONFIG.SANDBOX,
    })

    // Nom d'utilisateur et autorisation des paiements Pi.
    const piAuthResult = await window.Pi.authenticate([
      "username",
      "payments",
    ])

    if (!piAuthResult?.accessToken) {
      throw new Error("Pi n'a pas fourni de jeton d'accès.")
    }

    // Vérification de la connexion auprès du backend OAPPI.
    const loginRes = await fetch(BACKEND_URLS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pi_auth_token: piAuthResult.accessToken,
      }),
    })

    if (!loginRes.ok) {
      throw new Error(
        `La connexion au serveur a échoué (erreur ${loginRes.status}).`,
      )
    }

    console.log("Connexion au backend réussie.")

    return piAuthResult.accessToken
  })()

  piAuthFlowPromise = flow

  try {
    return await flow
  } finally {
    if (piAuthFlowPromise === flow) {
      piAuthFlowPromise = null
    }
  }
}

export const usePiNetworkAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authMessage, setAuthMessage] = useState(
    "Initialisation du réseau Pi...",
  )
  const [piAccessToken, setPiAccessToken] = useState<string | null>(null)

  const mountedRef = useRef(false)

  const initializePiAndAuthenticate = async (): Promise<void> => {
    try {
      setIsAuthenticated(false)
      setAuthMessage("Chargement du SDK Pi Network...")

      const token = await authenticateWithPi()

      if (!mountedRef.current) return

      setPiAccessToken(token)
      setIsAuthenticated(true)
      setAuthMessage("Connexion à Pi Network réussie.")
    } catch (error) {
      console.error("Échec de l'authentification Pi :", error)

      if (!mountedRef.current) return

      setIsAuthenticated(false)
      setPiAccessToken(null)

      const message =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue."

      setAuthMessage(`Échec de la connexion : ${message}`)
    }
  }

  useEffect(() => {
    mountedRef.current = true

    void initializePiAndAuthenticate()

    return () => {
      mountedRef.current = false
    }
  }, [])

  return {
    isAuthenticated,
    authMessage,
    piAccessToken,
    reinitialize: initializePiAndAuthenticate,
  }
}
