"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, DollarSign, PieChart, Award, Building } from "lucide-react"

export function ShareholdersSection() {
  const shareholders = [
    { name: "Fondateurs OAPPi", shares: 40, investment: "50,000 Pi", role: "Fondateurs" },
    { name: "Investisseurs Privés", shares: 25, investment: "31,250 Pi", role: "Investisseurs" },
    { name: "Coopératives Agricoles", shares: 20, investment: "25,000 Pi", role: "Partenaires" },
    { name: "Communauté Pi Network", shares: 15, investment: "18,750 Pi", role: "Communauté" },
  ]

  const governance = [
    { title: "Conseil d'Administration", members: 5, description: "Direction stratégique de l'entreprise" },
    { title: "Comité Exécutif", members: 3, description: "Gestion opérationnelle quotidienne" },
    { title: "Comité d'Audit", members: 3, description: "Contrôle financier et conformité" },
    { title: "Comité Agricole", members: 4, description: "Supervision des pratiques bio" },
  ]

  const dividends = [
    { quarter: "Q4 2025", amount: "2,500 Pi", distributed: true },
    { quarter: "Q1 2026", amount: "3,200 Pi", distributed: false },
    { quarter: "Q2 2026 (Prévu)", amount: "4,000 Pi", distributed: false },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Structure Actionnariale</h2>
        <p className="text-muted-foreground">
          Organic Agro-Pastoralpi.pi (OAPPi) - Transparence et Gouvernance
        </p>
      </div>

      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="governance">Gouvernance</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Répartition du Capital
              </CardTitle>
              <CardDescription>Capital total: 125,000 Pi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {shareholders.map((shareholder, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{shareholder.name}</p>
                      <p className="text-sm text-muted-foreground">{shareholder.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{shareholder.shares}%</p>
                      <p className="text-sm text-muted-foreground">{shareholder.investment}</p>
                    </div>
                  </div>
                  <Progress value={shareholder.shares} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Actionnaires Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">47</div>
                <p className="text-xs text-muted-foreground mt-1">+5 ce trimestre</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Valeur par Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">26.6 Pi</div>
                <p className="text-xs text-green-600 mt-1">+12% ce mois</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Capitalisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">125k Pi</div>
                <p className="text-xs text-muted-foreground mt-1">Valorisation actuelle</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Structure de Gouvernance
              </CardTitle>
              <CardDescription>Organes de direction et comités</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {governance.map((committee, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {committee.members}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{committee.title}</h3>
                    <p className="text-sm text-muted-foreground">{committee.description}</p>
                    <Badge variant="outline" className="mt-2">
                      {committee.members} membres
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Droits des Actionnaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Droit de vote</p>
                    <p className="text-sm text-muted-foreground">
                      Un vote par action lors des assemblées générales
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Dividendes</p>
                    <p className="text-sm text-muted-foreground">
                      Distribution trimestrielle des bénéfices proportionnelle aux parts
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Accès à l'information</p>
                    <p className="text-sm text-muted-foreground">
                      Rapports financiers et stratégiques trimestriels
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Historique des Dividendes
              </CardTitle>
              <CardDescription>Distribution aux actionnaires</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {dividends.map((dividend, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-border"
                >
                  <div>
                    <p className="font-medium text-foreground">{dividend.quarter}</p>
                    <p className="text-sm text-muted-foreground">
                      {dividend.distributed ? "Distribué" : "En attente"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{dividend.amount}</p>
                    <Badge variant={dividend.distributed ? "default" : "secondary"}>
                      {dividend.distributed ? "Payé" : "Prévu"}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">ROI Moyen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">18.5%</div>
                <p className="text-sm text-muted-foreground mt-1">Retour sur investissement annuel</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Croissance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">+42%</div>
                <p className="text-sm text-muted-foreground mt-1">Augmentation de valeur 2025</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
