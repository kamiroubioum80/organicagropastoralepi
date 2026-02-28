"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, ShoppingCart, CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface PaymentResult {
  success: boolean
  transactionId?: string
  amount?: number
  error?: string
}

declare global {
  interface Window {
    Pi: {
      createPayment: (payment: {
        amount: number
        memo: string
        metadata: Record<string, string>
      }, callbacks: {
        onReadyForServerApproval: (paymentId: string) => void
        onReadyForServerCompletion: (paymentId: string, txid: string) => void
        onCancel: (paymentId: string) => void
        onError: (error: Error, payment?: { paymentId: string }) => void
      }) => void
    }
  }
}

const TEST_PRODUCTS = [
  {
    id: "prod_1",
    name: "Panier de Légumes Bio",
    description: "Assortiment de légumes frais biologiques",
    price: 0.5,
    image: "🥕"
  },
  {
    id: "prod_2",
    name: "Miel Naturel 500g",
    description: "Miel pur et naturel des ruches locales",
    price: 1.0,
    image: "🍯"
  },
  {
    id: "prod_3",
    name: "Œufs Fermiers (12)",
    description: "Œufs frais de poules élevées en plein air",
    price: 0.3,
    image: "🥚"
  },
  {
    id: "prod_4",
    name: "Fromage de Chèvre",
    description: "Fromage artisanal au lait de chèvre bio",
    price: 2.0,
    image: "🧀"
  }
]

export function PaymentTestSection() {
  const [paymentResults, setPaymentResults] = useState<PaymentResult[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<string>("")

  const handleTestPayment = async (product: typeof TEST_PRODUCTS[0]) => {
    if (typeof window.Pi === "undefined") {
      setPaymentResults([
        {
          success: false,
          error: "Pi SDK non chargé. Veuillez vous authentifier d'abord."
        },
        ...paymentResults
      ])
      return
    }

    setIsProcessing(true)
    setCurrentProduct(product.name)

    try {
      const payment = {
        amount: product.price,
        memo: `Achat: ${product.name}`,
        metadata: {
          productId: product.id,
          productName: product.name,
          orderId: `order_${Date.now()}`
        }
      }

      window.Pi.createPayment(payment, {
        onReadyForServerApproval: (paymentId) => {
          console.log("[v0] Payment approved, ID:", paymentId)
          // Ici vous appelleriez votre backend pour approuver le paiement
        },
        onReadyForServerCompletion: (paymentId, txid) => {
          console.log("[v0] Payment completed, TX ID:", txid)
          setPaymentResults([
            {
              success: true,
              transactionId: txid,
              amount: product.price
            },
            ...paymentResults
          ])
          setIsProcessing(false)
          setCurrentProduct("")
        },
        onCancel: (paymentId) => {
          console.log("[v0] Payment cancelled:", paymentId)
          setPaymentResults([
            {
              success: false,
              error: "Paiement annulé par l'utilisateur"
            },
            ...paymentResults
          ])
          setIsProcessing(false)
          setCurrentProduct("")
        },
        onError: (error, payment) => {
          console.error("[v0] Payment error:", error, payment)
          setPaymentResults([
            {
              success: false,
              error: error.message || "Erreur de paiement"
            },
            ...paymentResults
          ])
          setIsProcessing(false)
          setCurrentProduct("")
        }
      })
    } catch (error) {
      console.error("[v0] Payment initialization error:", error)
      setPaymentResults([
        {
          success: false,
          error: error instanceof Error ? error.message : "Erreur inconnue"
        },
        ...paymentResults
      ])
      setIsProcessing(false)
      setCurrentProduct("")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-emerald-100">
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-primary" />
            Test de Paiements Pi Network (Test Net)
          </CardTitle>
          <CardDescription>
            Testez les transactions avec la crypto-monnaie Pi en mode Test Net
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Mode Test Net</AlertTitle>
            <AlertDescription>
              Ces transactions utilisent des Pi de test. Aucun vrai Pi ne sera débité.
              Vous devez être connecté avec votre compte Pi Network.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Produits Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TEST_PRODUCTS.map((product) => (
                  <Card key={product.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{product.image}</div>
                          <div>
                            <CardTitle className="text-base">{product.name}</CardTitle>
                            <CardDescription className="text-xs mt-1">
                              {product.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
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
              <h3 className="text-lg font-semibold mb-4">Historique des Transactions</h3>
              {paymentResults.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <p>Aucune transaction pour le moment</p>
                    <p className="text-xs mt-2">Testez un achat pour voir l'historique</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {paymentResults.map((result, index) => (
                    <Card key={index} className={result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          {result.success ? (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              {result.success ? "Transaction réussie" : "Transaction échouée"}
                            </p>
                            {result.success ? (
                              <div className="text-xs text-muted-foreground mt-1 space-y-1">
                                <p className="font-mono break-all">
                                  ID: {result.transactionId}
                                </p>
                                <p>Montant: {result.amount} Pi</p>
                              </div>
                            ) : (
                              <p className="text-xs text-red-700 mt-1">{result.error}</p>
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
          <CardTitle className="text-base">Instructions de Test</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Assurez-vous d'être connecté à votre compte Pi Network</li>
            <li>Sélectionnez un produit et cliquez sur "Acheter"</li>
            <li>Suivez les instructions dans la fenêtre Pi Network</li>
            <li>Approuvez le paiement dans l'application Pi</li>
            <li>Consultez l'historique des transactions ci-dessus</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
