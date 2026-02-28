"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, User, Bot, Leaf, Package, GraduationCap, ShoppingCart, Info, MessageCircle, Coins, Wallet, Users, FileText, Scale } from "lucide-react"
import { useChatbot } from "@/hooks/use-chatbot"
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom"
import { APP_CONFIG } from "@/lib/app-config"
import { MarketplaceSection } from "@/components/marketplace-section"
import { ProductsShowcase } from "@/components/products-showcase"
import { AboutSection } from "@/components/about-section"
import { TokensSection } from "@/components/tokens-section"
import { PaymentTestSection } from "@/components/payment-test-section"
import { WalletSection } from "@/components/wallet-section"
import { ShareholdersSection } from "@/components/shareholders-section"
import { ContractsSection } from "@/components/contracts-section"
import { LegalDocumentsSection } from "@/components/legal-documents-section"
import { LandingPage } from "@/components/landing-page"
import { useState, useEffect } from "react"

export default function ChatBot() {
  const [mounted, setMounted] = useState(false)
  const { messages, input, isLoading, isAuthenticated, authMessage, sendMessage, handleKeyPress, handleInputChange } =
    useChatbot()

  const { bottomRef } = useScrollToBottom([messages])
  const [activeTab, setActiveTab] = useState("chat")
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    console.log("[v0] Component mounted")
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log("[v0] Auth status:", { isAuthenticated, authMessage })
  }, [isAuthenticated, authMessage])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <p className="text-lg font-semibold text-foreground">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    console.log("[v0] Rendering LandingPage")
    return <LandingPage />
  }

  console.log("[v0] Rendering main app")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{APP_CONFIG.NAME}</h1>
              <p className="text-xs text-muted-foreground">Afrique de l'Ouest - Commerce Équitable Bio</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6 bg-white shadow-sm">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              <span className="hidden lg:inline">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden lg:inline">Produits</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              <span className="hidden lg:inline">Test Pi</span>
            </TabsTrigger>
            <TabsTrigger value="tokens" className="flex items-center gap-2">
              <Coins className="w-4 h-4" />
              <span className="hidden lg:inline">Tokens</span>
            </TabsTrigger>
            <TabsTrigger value="shareholders" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden lg:inline">Actionnaires</span>
            </TabsTrigger>
            <TabsTrigger value="contracts" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden lg:inline">Contrats</span>
            </TabsTrigger>
            <TabsTrigger value="legal" className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              <span className="hidden lg:inline">Légal</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden lg:inline">Services</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden lg:inline">À propos</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-6">
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-4xl h-[600px] flex flex-col shadow-xl border-2">
                <CardHeader className="bg-gradient-to-r from-primary to-emerald-600 text-white rounded-t-xl">
                  <CardTitle className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Bot className="w-5 h-5" />
                      <span className="text-lg font-semibold">Assistant Bio</span>
                    </div>
                    {APP_CONFIG.DESCRIPTION && (
                      <div className="text-xs opacity-90 mt-2 font-normal leading-relaxed">
                        {APP_CONFIG.DESCRIPTION}
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-green-50/30 to-white">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-gray-600 to-gray-700 text-white"
                            : "bg-gradient-to-br from-primary to-emerald-600 text-white"
                        }`}
                      >
                        {message.sender === "user" ? <User size={18} /> : <Bot size={18} />}
                      </div>
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-gray-600 to-gray-700 text-white"
                            : message.id === "thinking"
                              ? "bg-muted text-muted-foreground italic border border-border"
                              : "bg-white text-foreground border border-border"
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</div>
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </CardContent>

                <CardFooter className="p-4 border-t bg-white">
                  <div className="flex w-full gap-2">
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Posez vos questions sur les produits bio..."
                      disabled={isLoading}
                      className="flex-1 border-2 focus-visible:ring-primary rounded-xl"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={isLoading || !input.trim()}
                      className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 rounded-xl px-4"
                      size="icon"
                    >
                      <Send size={18} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <WalletSection />
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <ProductsShowcase />
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <PaymentTestSection />
          </TabsContent>

          <TabsContent value="tokens" className="space-y-6">
            <TokensSection />
          </TabsContent>

          <TabsContent value="shareholders" className="space-y-6">
            <ShareholdersSection />
          </TabsContent>

          <TabsContent value="contracts" className="space-y-6">
            <ContractsSection />
          </TabsContent>

          <TabsContent value="legal" className="space-y-6">
            <LegalDocumentsSection />
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <MarketplaceSection />
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <AboutSection />
          </TabsContent>
        </Tabs>

        <div className="w-full mt-8 pt-6 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-foreground">Organic Agro-Pastoralpi.pi (OAPPi)</p>
            <p className="text-xs text-muted-foreground">
              Promotion • Transport • Commercialisation • Financement des producteurs bio
            </p>
            <p className="text-xs text-muted-foreground">Propulsé par Pi Network • Commerce Équitable • Afrique de l'Ouest</p>
          </div>
        </div>
      </div>
    </div>
  )
}
