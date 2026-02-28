"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Milk, Egg, Apple, ShoppingCart } from "lucide-react"

export function ProductsShowcase() {
  const products = [
    {
      icon: Apple,
      name: "Fruits & Légumes Bio",
      description: "Produits frais cultivés sans pesticides ni engrais chimiques",
      price: "5-20 Pi",
      badge: "Disponible",
      image: "/placeholder.svg?height=200&width=200",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Milk,
      name: "Produits Laitiers",
      description: "Lait, fromage et yaourt issus d'élevages biologiques",
      price: "8-25 Pi",
      badge: "Populaire",
      image: "/placeholder.svg?height=200&width=200",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Egg,
      name: "Oeufs Biologiques",
      description: "Oeufs de poules élevées en plein air avec alimentation bio",
      price: "3-12 Pi",
      badge: "Frais",
      image: "/placeholder.svg?height=200&width=200",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Leaf,
      name: "Céréales & Graines",
      description: "Mil, sorgho, riz et graines cultivés selon pratiques durables",
      price: "10-30 Pi",
      badge: "Nouveau",
      image: "/placeholder.svg?height=200&width=200",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ]

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Nos Produits Biologiques</h2>
        <p className="text-muted-foreground">
          Des produits 100% bio, cultivés avec soin par nos producteurs certifiés
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center`}>
                  <product.icon className={`w-6 h-6 ${product.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {product.badge}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <CardDescription className="text-sm leading-relaxed mb-3">{product.description}</CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Commander
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="pt-6 pb-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Paiement avec Pi Network</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tous nos produits peuvent être achetés avec la crypto-monnaie Pi. Un commerce équitable et transparent
              pour soutenir nos producteurs locaux.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
