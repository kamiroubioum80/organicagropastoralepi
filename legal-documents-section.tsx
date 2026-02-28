"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Eye, Shield, Scale, BookOpen, Copy, Download } from "lucide-react"

export function LegalDocumentsSection() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Documents Légaux</h2>
        <p className="text-muted-foreground">
          Statuts, règlement intérieur et documents officiels d'OAPPi
        </p>
      </div>

      <Tabs defaultValue="statuts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
          <TabsTrigger value="statuts">Statuts</TabsTrigger>
          <TabsTrigger value="reglement">Règlement Intérieur</TabsTrigger>
          <TabsTrigger value="licenses">Licences</TabsTrigger>
        </TabsList>

        <TabsContent value="statuts" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    Statuts de l'Entreprise OAPPi
                  </CardTitle>
                  <CardDescription>
                    Version 2.0 • Dernière mise à jour: 01/01/2026
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => {
                    const text = document.querySelector('[data-document="statuts"]')?.textContent || '';
                    navigator.clipboard.writeText(text).then(() => alert('Document copié dans le presse-papier'));
                  }}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copier le Texte
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                <div className="space-y-6 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      STATUTS DE ORGANIC AGRO-PASTORALPI.PI (OAPPi)
                    </h3>
                    <Badge variant="secondary">Société Anonyme</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TITRE I - FORME, DÉNOMINATION, SIÈGE, OBJET, DURÉE</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 1 - Forme</p>
                        <p>
                          Il est constitué une société anonyme dénommée "Organic Agro-Pastoralpi.pi" (OAPPi),
                          régie par les lois en vigueur et les présents statuts.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 2 - Dénomination</p>
                        <p>
                          La société a pour dénomination sociale : ORGANIC AGRO-PASTORALPI.PI
                          Nom commercial : OAPPi • Domaine Pi Network : organicagropasto1207.pinet.com
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 3 - Siège social</p>
                        <p>
                          Le siège social est établi en Afrique de l'Ouest. Il peut être transféré en tout
                          autre lieu par décision du Conseil d'Administration.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 4 - Objet</p>
                        <p>La société a pour objet :</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>La promotion, le transport et la commercialisation de produits agro-pastoraux biologiques</li>
                          <li>La connexion entre producteurs bio et consommateurs via marketplace digitale</li>
                          <li>Le financement et l'accompagnement des producteurs biologiques</li>
                          <li>La formation aux pratiques agricoles durables et biologiques</li>
                          <li>L'intégration de la monnaie Pi Network comme moyen de paiement</li>
                          <li>Toutes opérations commerciales, financières, mobilières ou immobilières se rattachant directement ou indirectement à cet objet</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">Article 5 - Durée</p>
                        <p>
                          La durée de la société est fixée à 99 ans à compter de son immatriculation au
                          registre du commerce, sauf dissolution anticipée ou prorogation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TITRE II - CAPITAL SOCIAL</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 6 - Capital social</p>
                        <p>
                          Le capital social est fixé à 125,000 Pi (cent vingt-cinq mille Pi),
                          divisé en 4,700 actions de 26.6 Pi de valeur nominale.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 7 - Modification du capital</p>
                        <p>
                          Le capital social peut être augmenté ou réduit conformément aux dispositions
                          légales en vigueur, sur décision de l'Assemblée Générale Extraordinaire.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 8 - Actions</p>
                        <p>
                          Les actions sont nominatives. Elles donnent droit à une quote-part des bénéfices
                          et de l'actif social proportionnelle au nombre d'actions détenues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TITRE III - ADMINISTRATION ET DIRECTION</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 9 - Conseil d'Administration</p>
                        <p>
                          La société est administrée par un Conseil d'Administration composé de 3 à 9 membres
                          élus par l'Assemblée Générale Ordinaire pour une durée de 6 ans.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 10 - Direction Générale</p>
                        <p>
                          La Direction Générale de la société est assumée par le Président du Conseil
                          d'Administration ou par un Directeur Général nommé par le Conseil.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TITRE IV - ASSEMBLÉES GÉNÉRALES</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 11 - Assemblées Générales</p>
                        <p>
                          Les Assemblées Générales sont Ordinaires ou Extraordinaires. Elles sont convoquées
                          dans les conditions prévues par la loi.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 12 - Droit de vote</p>
                        <p>
                          Chaque action donne droit à une voix. Le droit de vote attaché aux actions est
                          proportionnel au capital qu'elles représentent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">TITRE V - EXERCICE SOCIAL, RÉPARTITION DES BÉNÉFICES</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 13 - Exercice social</p>
                        <p>
                          L'exercice social commence le 1er janvier et se termine le 31 décembre de chaque année.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 14 - Bénéfices</p>
                        <p>
                          Les bénéfices distribuables sont répartis après prélèvement de la réserve légale
                          (5% jusqu'à 10% du capital), selon décision de l'Assemblée Générale.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      Fait à [Ville], le 01/01/2026 • Signatures des Fondateurs et Administrateurs
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reglement" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Règlement Intérieur OAPPi
                  </CardTitle>
                  <CardDescription>
                    Version 1.0 • En vigueur depuis le 01/01/2026
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => {
                    const text = document.querySelector('[data-document="reglement"]')?.textContent || '';
                    navigator.clipboard.writeText(text).then(() => alert('Règlement intérieur copié dans le presse-papier'));
                  }}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copier le Texte
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                <div className="space-y-6 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      RÈGLEMENT INTÉRIEUR - OAPPi
                    </h3>
                    <p className="text-muted-foreground">
                      Le présent règlement intérieur complète les statuts et définit les règles de
                      fonctionnement au sein de l'entreprise Organic Agro-Pastoralpi.pi
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE I - DISPOSITIONS GÉNÉRALES</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 1 - Objet</p>
                        <p>
                          Le règlement intérieur a pour objet de préciser les règles relatives à
                          l'organisation du travail, la discipline, la sécurité et les relations entre
                          l'entreprise et ses collaborateurs.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 2 - Champ d'application</p>
                        <p>
                          Le présent règlement s'applique à l'ensemble du personnel d'OAPPi, qu'il soit
                          permanent, temporaire, stagiaire ou volontaire.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 3 - Diffusion</p>
                        <p>
                          Le règlement intérieur est porté à la connaissance de tous les collaborateurs
                          lors de leur embauche et est accessible sur la plateforme digitale de l'entreprise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE II - ORGANISATION DU TRAVAIL</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 4 - Horaires de travail</p>
                        <p>
                          La durée hebdomadaire du travail est fixée conformément à la législation en vigueur.
                          Les horaires peuvent varier selon les services et activités de l'entreprise.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 5 - Télétravail et flexibilité</p>
                        <p>
                          OAPPi favorise le travail flexible et à distance lorsque les fonctions le permettent.
                          Les modalités sont définies dans les contrats de travail individuels.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 6 - Absences</p>
                        <p>
                          Toute absence doit être justifiée et signalée à la hiérarchie dans les meilleurs délais.
                          Les congés sont attribués conformément à la législation et aux accords d'entreprise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE III - DISCIPLINE ET COMPORTEMENT</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 7 - Respect mutuel</p>
                        <p>
                          Tous les collaborateurs doivent faire preuve de respect, de courtoisie et de
                          professionnalisme envers leurs collègues, partenaires et clients.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 8 - Éthique professionnelle</p>
                        <p>
                          Les collaborateurs s'engagent à respecter les valeurs d'OAPPi : agriculture biologique,
                          commerce équitable, développement durable et transparence.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 9 - Confidentialité</p>
                        <p>
                          Chaque collaborateur est tenu au secret professionnel concernant les informations
                          confidentielles de l'entreprise, de ses partenaires et clients.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 10 - Sanctions</p>
                        <p>
                          Tout manquement aux règles peut entraîner des sanctions proportionnées allant de
                          l'avertissement au licenciement, selon la gravité de la faute.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE IV - SÉCURITÉ ET HYGIÈNE</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 11 - Sécurité au travail</p>
                        <p>
                          L'entreprise s'engage à assurer la sécurité et la santé de ses collaborateurs.
                          Chacun doit respecter les consignes de sécurité et signaler tout danger.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 12 - Normes bio et qualité</p>
                        <p>
                          Tous les collaborateurs impliqués dans la manipulation de produits biologiques doivent
                          respecter strictement les normes d'hygiène et de certification bio.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE V - UTILISATION DES RESSOURCES</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 13 - Utilisation de la plateforme Pi Network</p>
                        <p>
                          Les transactions en Pi Network doivent être effectuées conformément aux procédures
                          établies et aux réglementations de Pi Network.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 14 - Matériel et équipements</p>
                        <p>
                          Le matériel mis à disposition (véhicules, machines, équipements informatiques) doit
                          être utilisé avec soin et dans le cadre professionnel uniquement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CHAPITRE VI - DROITS DES COLLABORATEURS</h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium">Article 15 - Droit d'expression</p>
                        <p>
                          Les collaborateurs ont le droit de s'exprimer sur leurs conditions de travail et
                          de proposer des améliorations.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 16 - Formation et développement</p>
                        <p>
                          OAPPi s'engage à favoriser le développement des compétences de ses collaborateurs
                          par des formations régulières en agriculture bio et gestion.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Article 17 - Participation aux bénéfices</p>
                        <p>
                          Les collaborateurs peuvent bénéficier de primes ou d'intéressement selon les
                          résultats de l'entreprise et leur performance individuelle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      Adopté le 01/01/2026 • Direction OAPPi
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="licenses" className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Licences et Certifications
              </CardTitle>
              <CardDescription>
                Documents officiels et autorisations d'exploitation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Certification Bio Africaine</h4>
                      <p className="text-sm text-muted-foreground">Numéro: BIO-AF-2025-789</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valide</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Certifie que OAPPi respecte les normes d'agriculture biologique
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Émis le: 01/01/2025 • Expire le: 31/12/2026
                  </p>
                  <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Licence Commerce Équitable</h4>
                      <p className="text-sm text-muted-foreground">Numéro: FT-WA-2025-456</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valide</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Autorise la pratique du commerce équitable et éthique
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Émis le: 15/02/2025 • Expire le: 15/02/2027
                  </p>
                  <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Pi Network Business License</h4>
                      <p className="text-sm text-muted-foreground">App: organicagropasto1207</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Approuvée</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Autorise les transactions commerciales sur Pi Network
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Émis le: 01/12/2025 • Statut: Active
                  </p>
                  <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir sur Pi Browser
                  </Button>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Permis de Transport</h4>
                      <p className="text-sm text-muted-foreground">Numéro: TRP-AO-2025-321</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valide</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Autorise le transport de produits alimentaires biologiques
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Émis le: 10/03/2025 • Expire le: 10/03/2026
                  </p>
                  <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
