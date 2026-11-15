
"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Coins,
  ShoppingCart,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { BACKEND_URLS } from "@/lib/system-config"

interface PaymentResult {
  success: boolean
  transactionId?: string
  amount?: number
  error?: string
}

declare global {
  interface Window {
    Pi?: {
      createPayment: (
        payment: {
          amount: number
          memo: string
          metadata: Record<string, string>
        },
        callbacks: {
          onReadyForServerApproval: (paymentId: string) => void | Promise<void>
          onReadyForServerCompletion: (
            paymentId: string,
            txid: string
          ) => void | Promise<void>
          onCancel: (paymentId: string) => void
          onError: (
            error: Error,
            payment?: { paymentId: string }
          ) => void
        }
      ) => void
    }
  }
}

const TEST_PRODUCTS = [
  {
    id: "prod_1",
    name: "Panier de Légumes Bio",
    description: "Assortiment de légumes frais biologiques",
    price: 0.5,
    image: "🥕",
  },
  {
    id: "prod_2",
    name: "Miel Naturel 500g",
    description: "Miel pur et naturel des ruches locales",
    price: 1.0,
    image: "🍯",
  },
  {
    id: "prod_3",
    name: "Œufs Fermiers (12)",
    description: "Œufs frais de poules élevées en plein air",
    price: 0.3,
    image: "🥚",
  },
  {
    id: "prod_4",
    name: "Fromage de Chèvre",
    description: "Fromage artisanal au lait de chèvre bio",
    price: 2.0,
    image: "🧀",
  },
]

async function getBackendError(response: Response): Promise<string> {
  const responseText = await response.text()

  if (!responseText) {
    return `Erreur du serveur (HTTP ${response.status})`
  }

  try {
    const data = JSON.parse(responseText)
    return (
      data.error ||
      data.message ||
      `Erreur du serveur (HTTP ${response.status})`
    )
  } catch {
    return responseText
  }
}

export function PaymentTestSection() {
  const [paymentResults, setPaymentResults] = useState<PaymentResult[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentProduct, setCurrentProduct] = useState("")

  const addPaymentResult = (result: PaymentResult) => {
    setPaymentResults((previous) => [result, ...previous])
  }

  const finishProcessing = () => {
    setIsProcessing(false)
    setCurrentProduct("")
  }

  const handleTestPayment = (product: (typeof TEST_PRODUCTS)[number]) => {
    if (typeof window === "undefined" || !window.Pi) {
      addPaymentResult({
        success: false,
        error: "Pi SDK non chargé. Ouvrez la plateforme dans Pi Browser et vérifiez votre connexion.",
      })
      return
    }

    if (isProcessing) {
      return
    }

    setIsProcessing(true)
    setCurrentProduct(product.name)

    const payment = {
      amount: product.price,
      memo: `Achat test OAPPI : ${product.name}`,
      metadata: {
        productId: product.id,
        productName: product.name,
        orderId: `order_${Date.now()}`,
      },
    }

    try {
      window.Pi.createPayment(payment, {
        // Étape 1 : approbation côté serveur
        onReadyForServerApproval: async (paymentId) => {
          try {
            const response = await fetch(
              BACKEND_URLS.APPROVE_PAYMENT(paymentId),
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
              }
            )

            if (!response.ok) {
              const message = await getBackendError(response)

              addPaymentResult({
                success: false,
                error: `Approbation du paiement impossible : ${message}`,
              })
            }
          } catch (error) {
            addPaymentResult({
              success: false,
              error:
                error instanceof Error
                  ? `Erreur d'approbation : ${error.message}`
                  : "Impossible de contacter le serveur d'approbation.",
            })
          }
        },

        // Étape 2 : finalisation côté serveur
        onReadyForServerCompletion: async (paymentId, txid) => {
          try {
            const response = await fetch(
              BACKEND_URLS.COMPLETE_PAYMENT(paymentId),
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ txid }),
              }
            )

            if (!response.ok) {
              const message = await getBackendError(response)

              addPaymentResult({
                success: false,
                error: `Finalisation du paiement impossible : ${message}`,
              })

              return
            }

            // Le paiement est affiché comme réussi
            // uniquement après confirmation du backend.
            addPaymentResult({
              success: true,
              transactionId: txid,
              amount: product.price,
            })

            finishProcessing()
          } catch (error) {
            addPaymentResult({
              success: false,
              error:
                error instanceof Error
                  ? `Erreur de finalisation : ${error.message}`
                  : "Impossible de confirmer le paiement auprès du serveur.",
            })
          }
        },

        // Étape 3 : annulation par l'utilisateur
        onCancel: (paymentId) => {
          console.log("Paiement annulé :", paymentId)

          addPaymentResult({
            success: false,
            error: "Paiement annulé par l'utilisateur.",
          })

          finishProcessing()
        },

        // Étape 4 : erreur Pi Network
        onError: (error, paymentInfo) => {
          console.error("Erreur de paiement Pi :", error, paymentInfo)

          addPaymentResult({
            success: false,
            error: error.message || "Une erreur est survenue pendant le paiement.",
          })

          finishProcessing()
        },
      })
    } catch (error) {
      console.error("Erreur d'initialisation du paiement :", error)

      addPaymentResult({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue lors de l'initialisation du paiement.",
      })

      finishProcessing()
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-emerald-100">
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-primary" />
            Test de Paiements Pi Network (Testnet)
          </CardTitle>

          <CardDescription>
            Testez les transactions Pi sur le réseau de test.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Réseau de test</AlertTitle>
            <AlertDescription>
              Cette section est destinée aux essais de paiement.
              Vérifiez que votre application Pi est effectivement configurée
              sur Testnet avant toute transaction.
              Vous devez être connecté à votre compte Pi Network.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Produits disponibles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TEST_PRODUCTS.map((product) => (
                  <Card
                    key={product.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="text-4xl">{product.image}</div>

                        <div>
                          <CardTitle className="text-base">
                            {product.name}
                          </CardTitle>

                          <CardDescription className="text-xs mt-1">
                            {product.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="secondary" className="text-base px-3 py-1">
                          <Coins className="w-4 h-4 mr-1" />
                          {product.price} Pi
                        </Badge>

                        <Button
                          onClick={() => handleTestPayment(product)}
                          disabled={isProcessing}
                          className="bg-primary hover:bg-primary/90"
                          size="sm"
                        >
                          {isProcessing && currentProduct === product.name ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Traitement...
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Acheter
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Historique des transactions
              </h3>

              {paymentResults.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <p>Aucune transaction pour le moment.</p>
                    <p className="text-xs mt-2">
                      Effectuez un achat test pour afficher l'historique.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {paymentResults.map((result, index) => (
                    <Card
                      key={`${result.transactionId || result.error}-${index}`}
                      className={
                        result.success
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }
                    >
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          {result.success ? (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}

                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              {result.success
                                ? "Transaction confirmée par le serveur"
                                : "Transaction non confirmée"}
                            </p>

                            {result.success ? (
                              <div className="text-xs text-muted-foreground mt-1 space-y-1">
                                <p className="font-mono break-all">
                                  ID : {result.transactionId}
                                </p>
                                <p>Montant : {result.amount} Pi</p>
                              </div>
                            ) : (
                              <p className="text-xs text-red-700 mt-1 break-words">
                                {result.error}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-base">
            Instructions de test
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Connectez-vous à votre compte Pi Network.</li>
            <li>Sélectionnez un produit et cliquez sur Acheter.</li>
            <li>Suivez les instructions dans Pi Browser.</li>
            <li>Confirmez le paiement dans l'application Pi.</li>
            <li>Attendez la confirmation du serveur.</li>
            <li>Consultez l'historique des transactions.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

