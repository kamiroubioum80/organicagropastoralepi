"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, ShoppingCart, Truck, Users, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            ORGANIC AGRO-PASTORAL PI (OAPPi)
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Organic Agro-Pastoral Pi (OAPPi) est une application intégrée à l'écosystème Pi Network, 
            dédiée à la promotion, la protection et la commercialisation des produits agro-pastoraux biologiques.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            Elle connecte les producteurs locaux aux consommateurs grâce à une marketplace digitale 
            simple et sécurisée, avec paiement en Pi pour un commerce équitable et transparent.
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
            onClick={() => window.location.href = "https://organicagropasto1207.pinet.com"}
          >
            Accéder à la plateforme complète OAPPi
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace Digitale</h3>
              <p className="text-muted-foreground">
                Plateforme de vente en ligne connectant producteurs bio et consommateurs avec paiements en Pi
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logistique Intégrée</h3>
              <p className="text-muted-foreground">
                Transport et distribution des produits biologiques dans toute l'Afrique de l'Ouest
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financement Producteurs</h3>
              <p className="text-muted-foreground">
                Subventions en machines, camions et appuis financiers pour les producteurs bio
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Commerce Équitable</h3>
              <p className="text-muted-foreground">
                Prix justes garantis et transparence totale grâce à la blockchain Pi Network
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Produits Certifiés Bio</h3>
              <p className="text-muted-foreground">
                Légumes, fruits, viandes, produits laitiers et céréales 100% biologiques certifiés
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact Social</h3>
              <p className="text-muted-foreground">
                Soutien aux communautés rurales et développement de l'agriculture durable
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi choisir OAPPi ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Paiements en Pi Network</h3>
                <p className="text-muted-foreground">Transactions sécurisées et sans frais bancaires</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Traçabilité Complète</h3>
                <p className="text-muted-foreground">Suivez vos produits du champ à votre table</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Support Local</h3>
                <p className="text-muted-foreground">Soutenez directement les producteurs de votre région</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Qualité Garantie</h3>
                <p className="text-muted-foreground">Produits certifiés biologiques et contrôlés</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-2">
          <h2 className="text-2xl font-bold mb-4">Rejoignez la révolution bio dès aujourd'hui</h2>
          <p className="text-muted-foreground mb-6">
            Connectez-vous avec Pi Network et découvrez tous nos services : marketplace, wallet, 
            système de tokens, et bien plus encore.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
            onClick={() => window.location.href = "https://organicagropasto1207.pinet.com"}
          >
            Accéder à la plateforme complète OAPPi
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-2">Organic Agro-Pastoralpi.pi (OAPPi)</p>
          <p className="text-xs text-muted-foreground">
            Promotion • Transport • Commercialisation • Financement des producteurs bio
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Propulsé par Pi Network • Commerce Équitable • Afrique de l'Ouest
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <a href="/privacy" className="text-primary hover:underline">Politique de Confidentialité</a>
            <span className="text-muted-foreground">•</span>
            <a href="/terms" className="text-primary hover:underline">Conditions d'Utilisation</a>
            <span className="text-muted-foreground">•</span>
            <a href="mailto:kamiroubioum98@gmail.com" className="text-primary hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}
