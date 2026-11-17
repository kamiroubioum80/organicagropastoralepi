

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Wallet,
  Send,
  Download,
  Copy,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Transaction = {
  id: string
  type: "received" | "sent" | "payment" | "reward"
  amount: number
  description: string
  date: string
  status: "completed" | "pending" | "failed"
}

interface WalletSectionProps {
  walletAddress: string | null
}

export function WalletSection({ walletAddress }: WalletSectionProps) {
  const { toast } = useToast()

  const hasWalletAddress = Boolean(walletAddress?.trim())

  // Les données réelles de solde et de transactions
  // seront connectées ultérieurement à une source blockchain.
  const transactions: Transaction[] = []

  const copyAddress = async () => {
    if (!hasWalletAddress || !walletAddress) {
      toast({
        title: "Adresse indisponible",
        description: "Connectez-vous à Pi Network pour récupérer votre adresse publique.",
        variant: "destructive",
      })
      return
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Presse-papiers indisponible")
      }

      await navigator.clipboard.writeText(walletAddress)

      toast({
        title: "Adresse copiée",
        description: "Votre adresse publique Pi a été copiée.",
      })
    } catch {
      toast({
        title: "Copie impossible",
        description: "Votre navigateur n'a pas autorisé l'accès au presse-papiers.",
        variant: "destructive",
      })
    }
  }

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "received":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "sent":
      case "payment":
        return <Send className="w-4 h-4 text-red-600" />
      case "reward":
        return <TrendingUp className="w-4 h-4 text-blue-600" />
    }
  }

  const getStatusIcon = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-amber-600" />
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-600" />
    }
  }

  const getStatusLabel = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "Complété"
      case "pending":
        return "En attente"
      case "failed":
        return "Échoué"
    }
  }

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Mon Portefeuille
        </h2>
        <p className="text-muted-foreground">
          Gérez vos Pi et tokens OAPPi en toute sécurité
        </p>
        <div className="mt-3">
          <Badge variant={hasWalletAddress ? "default" : "secondary"}>
            {hasWalletAddress
              ? "Adresse Pi récupérée"
              : "Connexion au wallet en attente"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-violet-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Solde Pi Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">
                  Non disponible
                </div>
                <div className="text-sm text-muted-foreground">
                  Le solde réel n'est pas encore connecté à la blockchain.
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1"
                  disabled
                  title="Fonction d'envoi à connecter"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  disabled
                  title="Fonction de réception à connecter"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Recevoir
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              Tokens OAPPi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  Non disponible
                </div>
                <div className="text-sm text-muted-foreground">
                  Le solde des tokens doit être connecté au système OAPPi.
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  disabled
                >
                  Convertir en Pi
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  disabled
                >
                  Échanger
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg">
            Adresse du Wallet
          </CardTitle>
          <CardDescription>
            Votre adresse publique Pi Network
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2">
            <Input
              value={hasWalletAddress ? walletAddress ?? "" : "Adresse Pi indisponible"}
              readOnly
              className="flex-1 font-mono text-sm"
            />

            <Button
              size="icon"
              variant="outline"
              onClick={copyAddress}
              disabled={!hasWalletAddress}
              aria-label="Copier l'adresse publique Pi"
              title="Copier l'adresse"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-900">
              <strong>Information :</strong> cette adresse est votre adresse
              publique Pi Network. Elle peut être partagée pour recevoir des
              paiements. Ne partagez jamais votre phrase secrète ni vos clés
              privées.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg">
            Historique des Transactions
          </CardTitle>
          <CardDescription>
            Historique réel à connecter à la blockchain Pi Network
          </CardDescription>
        </CardHeader>

        <CardContent>
          {transactions.length === 0 ? (
            <div className="text-center py-8 space-y-2">
              <Wallet className="w-10 h-10 mx-auto text-muted-foreground" />
              <p className="font-medium text-foreground">
                Aucun historique disponible
              </p>
              <p className="text-sm text-muted-foreground">
                Les transactions apparaîtront ici lorsque leur récupération
                sera connectée.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div key={transaction.id}>
                  {index > 0 && (
                    <div className="my-3 border-t border-border" />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {getTransactionIcon(transaction.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">
                          {transaction.description}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {transaction.date}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <div>
                        <div
                          className={`text-sm font-bold ${
                            transaction.amount > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {Math.abs(transaction.amount).toFixed(2)} π
                        </div>

                        <div className="flex items-center gap-1 justify-end">
                          {getStatusIcon(transaction.status)}
                          <span className="text-xs text-muted-foreground">
                            {getStatusLabel(transaction.status)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-xl font-bold text-green-600">
                Non disponible
              </div>
              <div className="text-xs text-muted-foreground">
                Revenus du mois
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-xl font-bold text-red-600">
                Non disponible
              </div>
              <div className="text-xs text-muted-foreground">
                Dépenses du mois
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-xl font-bold text-blue-600">
                {transactions.length}
              </div>
              <div className="text-xs text-muted-foreground">
                Transactions récupérées
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
        <CardContent className="pt-6 pb-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Sécurité du Wallet
            </h3>

            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Utilisez uniquement les mécanismes officiels de Pi Network
              pour accéder à votre portefeuille et effectuer vos paiements.
              Ne communiquez jamais votre phrase secrète ou vos clés privées.
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-2 bg-transparent"
              disabled
            >
              Informations de sécurité à venir
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}