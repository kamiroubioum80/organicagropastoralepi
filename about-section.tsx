"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, TrendingUp, Globe } from "lucide-react"

export function AboutSection() {
  const stats = [
    { label: "Producteurs Partenaires", value: "500+", icon: Users, color: "text-green-600" },
    { label: "Tonnes de Produits Bio", value: "1000+", icon: TrendingUp, color: "text-blue-600" },
    { label: "Régions Couvertes", value: "5", icon: Globe, color: "text-amber-600" },
    { label: "Taux de Satisfaction", value: "98%", icon: Target, color: "text-emerald-600" },
  ]

  const values = [
    {
      title: "Notre Mission",
      description:
        "Connecter les producteurs bio aux consommateurs via une marketplace digitale et un réseau de distribution physique. Promouvoir une agriculture durable et un commerce équitable en Afrique de l'Ouest.",
      badge: "Vision",
    },
    {
      title: "Modèle Innovant",
      description:
        "OAPPi finance les producteurs (machines, camions, formations) et perçoit un pourcentage des récoltes. Un système gagnant-gagnant qui assure la croissance de l'agriculture biologique.",
      badge: "Économie",
    },
    {
      title: "Technologies",
      description:
        "Première plateforme agro-pastorale en Afrique intégrant Pi Network comme moyen de paiement. Une solution blockchain pour un commerce transparent et sécurisé.",
      badge: "Innovation",
    },
  ]

  return (
    <div className="w-full space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">À Propos d'OAPPi</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Organic Agro-Pastoralpi.pi est une entreprise spécialisée dans la promotion, le transport et la
          commercialisation des produits biologiques en Afrique de l'Ouest.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-2 text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 pb-6">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map((value, index) => (
          <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {value.badge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50">
        <CardContent className="pt-6 pb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">Impact Social</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                En soutenant OAPPi, vous contribuez au développement de l'agriculture biologique, à la création
                d'emplois ruraux et à la protection de l'environnement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous reversons une partie de nos bénéfices à l'ONG OAPPi pour financer des programmes de formation et
                d'équipement des producteurs.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                <div>
                  <div className="text-3xl font-bold text-white">15%</div>
                  <div className="text-xs text-white/90">Reversé à l'ONG</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
