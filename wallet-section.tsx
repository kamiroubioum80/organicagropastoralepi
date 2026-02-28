"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Wallet,
  Send,
  Download,
  Copy,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

type Transaction = {
  id: string
  type: "received" | "sent" | "payment" | "reward"
  amount: number
  description: string
  date: string
  status: "completed" | "pending" | "failed"
}

export function WalletSection() {
  const { toast } = useToast()
  const [piBalance] = useState(45.75)
  const [tokensBalance] = useState(150)
  const [walletAddress] = useState("GACB...XYZ123")

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "received",
      amount: 10.5,
      description: "Paiement reçu de Jean Dupont",
      date: "2024-01-24 14:30",
      status: "completed",
    },
    {
      id: "2",
      type: "payment",
      amount: -5.25,
      description: "Achat Légumes Bio x3",
      date: "2024-01-24 12:15",
      status: "completed",
    },
    {
      id: "3",
      type: "reward",
      amount: 2.0,
      description: "Bonus de parrainage",
      date: "2024-01-23 18:45",
      status: "completed",
    },
    {
      id: "4",
      type: "sent",
      amount: -8.0,
      description: "Paiement à OAPPi Supply",
      date: "2024-01-23 10:20",
      status: "completed",
    },
    {
      id: "5",
      type: "payment",
      amount: -3.5,
      description: "Achat Miel Organic x1",
      date: "2024-01-22 16:00",
      status: "pending",
    },
  ])

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    toast({
      title: "Adresse copiée",
      description: "L'adresse du wallet a été copiée dans le presse-papiers",
    })
  }

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "received":
        return <ArrowDownRight className="w-4 h-4 text-green-600" />
      case "sent":
        return <ArrowUpRight className="w-4 h-4 text-red-600" />
      case "payment":
        return <ArrowUpRight className="w-4 h-4 text-red-600" />
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
        <h2 className="text-3xl font-bold text-foreground mb-2">Mon Portefeuille</h2>
        <p className="text-muted-foreground">Gérez vos Pi et tokens OAPPi en toute sécurité</p>
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
                <div className="text-4xl font-bold text-primary mb-1">{piBalance.toFixed(2)} π</div>
                <div className="text-sm text-muted-foreground">Équivalent: ~${(piBalance * 2.5).toFixed(2)} USD</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-emerald-600">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
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
                <div className="text-4xl font-bold text-amber-600 mb-1">{tokensBalance}</div>
                <div className="text-sm text-muted-foreground">Équivalent: ~{(tokensBalance / 100).toFixed(2)} π</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Convertir en Pi
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Échanger
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg">Adresse du Wallet</CardTitle>
          <CardDescription>Votre adresse publique Pi Network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Input value={walletAddress} readOnly className="flex-1 font-mono text-sm" />
            <Button size="icon" variant="outline" onClick={copyAddress}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-900">
              <strong>Note:</strong> Cette adresse est unique et peut être partagée pour recevoir des paiements Pi.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg">Historique des Transactions</CardTitle>
          <CardDescription>Toutes vos transactions récentes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div key={transaction.id}>
                {index > 0 && <Separator className="my-3" />}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{transaction.description}</div>
                      <div className="text-xs text-muted-foreground">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          transaction.amount > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {Math.abs(transaction.amount).toFixed(2)} π
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        {getStatusIcon(transaction.status)}
                        <span className="text-xs text-muted-foreground">{getStatusLabel(transaction.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">+12.5 π</div>
              <div className="text-xs text-muted-foreground">Revenus ce mois</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-red-600">-8.25 π</div>
              <div className="text-xs text-muted-foreground">Dépenses ce mois</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-xs text-muted-foreground">Transactions totales</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
        <CardContent className="pt-6 pb-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Sécurité du Wallet</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Votre wallet est protégé par la blockchain Pi Network avec authentification à deux facteurs. Ne partagez
              jamais vos clés privées.
            </p>
            <Button variant="outline" size="sm" className="mt-2 bg-transparent">
              En savoir plus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
