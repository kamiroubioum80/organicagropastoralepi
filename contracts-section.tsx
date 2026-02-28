"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Eye,
  CheckCircle,
  Clock,
  FileSignature,
  Plus,
  Search,
  Filter,
} from "lucide-react"

export function ContractsSection() {
  const [contractType, setContractType] = useState("")
  const [clientName, setClientName] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const contractTemplates = [
    {
      id: 1,
      name: "Contrat de Producteur Bio",
      description: "Pour les agriculteurs rejoignant le réseau OAPPi",
      category: "Production",
      fields: ["Nom", "Superficie", "Type de culture", "Durée"],
    },
    {
      id: 2,
      name: "Accord de Distribution",
      description: "Pour les distributeurs et revendeurs",
      category: "Distribution",
      fields: ["Entreprise", "Zone géographique", "Commission", "Durée"],
    },
    {
      id: 3,
      name: "Contrat de Financement",
      description: "Subventions et prêts aux producteurs",
      category: "Financement",
      fields: ["Bénéficiaire", "Montant Pi", "Remboursement", "Garanties"],
    },
    {
      id: 4,
      name: "Accord de Partenariat",
      description: "Partenariats stratégiques avec organisations",
      category: "Partenariat",
      fields: ["Organisation", "Objectifs", "Contributions", "Durée"],
    },
  ]

  const existingContracts = [
    {
      id: "CNT-2026-001",
      client: "Coopérative Kaolack",
      type: "Producteur Bio",
      status: "Signé",
      date: "15/01/2026",
      amount: "5,000 Pi",
    },
    {
      id: "CNT-2026-002",
      client: "Distribution Dakar",
      type: "Distribution",
      status: "En attente",
      date: "20/01/2026",
      amount: "2,500 Pi",
    },
    {
      id: "CNT-2026-003",
      client: "Ferme Bio Thiès",
      type: "Financement",
      status: "Signé",
      date: "10/01/2026",
      amount: "8,000 Pi",
    },
    {
      id: "CNT-2026-004",
      client: "ONG Agro-Écologie",
      type: "Partenariat",
      status: "En cours",
      date: "25/01/2026",
      amount: "N/A",
    },
  ]

  const handleGenerateContract = () => {
    if (contractType && clientName) {
      alert(`Contrat "${contractType}" généré pour ${clientName}`)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Signé":
        return "bg-green-100 text-green-800 border-green-300"
      case "En attente":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "En cours":
        return "bg-blue-100 text-blue-800 border-blue-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Gestion des Contrats</h2>
        <p className="text-muted-foreground">
          Génération, signature et suivi des contrats OAPPi
        </p>
      </div>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
          <TabsTrigger value="create">Créer</TabsTrigger>
          <TabsTrigger value="templates">Modèles</TabsTrigger>
          <TabsTrigger value="existing">Contrats</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Nouveau Contrat
              </CardTitle>
              <CardDescription>
                Générez un contrat personnalisé en remplissant les informations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contract-type">Type de Contrat</Label>
                <select
                  id="contract-type"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                >
                  <option value="">Sélectionner un type</option>
                  <option value="Producteur Bio">Contrat de Producteur Bio</option>
                  <option value="Distribution">Accord de Distribution</option>
                  <option value="Financement">Contrat de Financement</option>
                  <option value="Partenariat">Accord de Partenariat</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="client-name">Nom du Client/Partenaire</Label>
                <Input
                  id="client-name"
                  placeholder="Entrez le nom"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Montant (en Pi)</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée du Contrat</Label>
                <Input id="duration" placeholder="Ex: 12 mois, 2 ans..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="terms">Termes et Conditions Spécifiques</Label>
                <Textarea
                  id="terms"
                  placeholder="Détails supplémentaires, clauses particulières..."
                  rows={4}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerateContract}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={!contractType || !clientName}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Générer le Contrat
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <FileSignature className="w-4 h-4 mr-2" />
                  Prévisualiser
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {contractTemplates.map((template) => (
              <Card key={template.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Champs requis:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {template.fields.map((field, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-1" />
                      Utiliser
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      Voir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="existing" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Contrats Existants</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher..."
                      className="pl-8 w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon" className="bg-transparent">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {existingContracts.map((contract) => (
                  <div
                    key={contract.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{contract.client}</p>
                        <p className="text-sm text-muted-foreground">
                          {contract.id} • {contract.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-foreground">{contract.amount}</p>
                        <p className="text-sm text-muted-foreground">{contract.date}</p>
                      </div>
                      <Badge className={getStatusColor(contract.status)} variant="outline">
                        {contract.status === "Signé" && <CheckCircle className="w-3 h-3 mr-1" />}
                        {contract.status === "En attente" && <Clock className="w-3 h-3 mr-1" />}
                        {contract.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
