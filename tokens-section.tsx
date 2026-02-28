"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, Gift, Award, TrendingUp, ArrowRight } from "lucide-react"
import { useState } from "react"

export function TokensSection() {
  const [userTokens] = useState(150)

  const rewards = [
    {
      icon: Gift,
      title: "Bonus Bienvenue",
      tokens: 50,
      description: "Recevez 50 tokens gratuits à l'inscription",
      action: "Réclamer",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      title: "Achat Produit",
      tokens: 10,
      description: "Gagnez 10 tokens pour chaque achat effectué",
      action: "Acheter",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Parrainage",
      tokens: 25,
      description: "Obtenez 25 tokens pour chaque ami parrainé",
      action: "Parrainer",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  const benefits = [
    {
      tokens: 100,
      reward: "Réduction de 5 Pi sur votre prochain achat",
      badge: "Populaire",
    },
    {
      tokens: 250,
      reward: "Livraison gratuite pour un mois",
      badge: "Premium",
    },
    {
      tokens: 500,
      reward: "Accès VIP et produits exclusifs",
      badge: "Exclusif",
    },
  ]

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Programme de Tokens OAPPi</h2>
        <p className="text-muted-foreground">Gagnez des tokens et échangez-les contre des avantages exclusifs</p>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="pt-6 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-sm text-muted-foreground mb-1">Votre Solde</div>
              <div className="flex items-center gap-3">
                <Coins className="w-10 h-10 text-primary" />
                <div className="text-4xl font-bold text-primary">{userTokens}</div>
                <div className="text-lg text-muted-foreground">Tokens</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90">
                Échanger mes tokens
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">Voir l'historique</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Comment gagner des tokens</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rewards.map((reward, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${reward.bgColor} flex items-center justify-center mb-3`}>
                  <reward.icon className={`w-6 h-6 ${reward.color}`} />
                </div>
                <CardTitle className="text-lg">{reward.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">+{reward.tokens}</span>
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <Button size="sm" variant="outline">
                    {reward.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Récompenses disponibles</h3>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 pb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Coins className="w-5 h-5 text-primary" />
                      <span className="text-xl font-bold text-primary">{benefit.tokens}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{benefit.reward}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">
                      {benefit.badge}
                    </Badge>
                    <Button
                      size="sm"
                      disabled={userTokens < benefit.tokens}
                      className="bg-gradient-to-r from-primary to-emerald-600"
                    >
                      Échanger
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
        <CardContent className="pt-6 pb-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Échangez tokens contre Pi</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convertissez vos tokens OAPPi en Pi Network pour un maximum de flexibilité. Taux de conversion : 100
              tokens = 1 Pi
            </p>
            <Button variant="outline" className="mt-2 bg-transparent">
              Convertir maintenant
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
