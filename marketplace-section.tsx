"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Truck, Coins, HandHeart } from "lucide-react"

export function MarketplaceSection() {
  const services = [
    {
      icon: Package,
      title: "Marketplace Digitale",
      description: "Plateforme connectant producteurs bio et consommateurs avec paiement Pi Network",
      badge: "En ligne",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Truck,
      title: "Logistique Intégrée",
      description: "Transport et distribution physique des produits agro-pastoraux biologiques",
      badge: "Livraison",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: HandHeart,
      title: "Financement Producteurs",
      description: "Subventions (machines, camions, appuis financiers) pour les agriculteurs bio",
      badge: "Solidaire",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Coins,
      title: "Paiement Pi Network",
      description: "Transactions sécurisées avec la crypto-monnaie Pi pour un commerce équitable",
      badge: "Pi Network",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="w-full space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Nos Services OAPPi</h2>
        <p className="text-muted-foreground text-sm">
          Solution complète pour l'agriculture biologique en Afrique de l'Ouest
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {service.badge}
                </Badge>
              </div>
              <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Commerce Équitable & Bio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                OAPPi finance l'ONG en percevant un pourcentage des récoltes des producteurs subventionnés. Un modèle
                gagnant-gagnant pour un développement durable.
              </p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90">
              En savoir plus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
