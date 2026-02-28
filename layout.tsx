import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_CONFIG } from "@/lib/app-config";
import { NavigationMenuOAPPi } from "@/components/navigation-menu-oappi";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const appName = APP_CONFIG.NAME;
const appDescription = APP_CONFIG.DESCRIPTION;

export const metadata: Metadata = {
  title: "OrganicAgropastoralepi.pi - Marketplace Bio sur Pi Network",
  description: "Marketplace agro-pastorale biologique intégrée à Pi Network pour connecter producteurs et consommateurs.",
  keywords: ["Pi Network", "Agriculture", "Marketplace", "Sustainability", "Produits bio", "Commerce équitable", "Afrique de l'Ouest", "OAPPi"],
  authors: [{ name: "OAPPi", email: "kamiroubioum98@gmail.com" }],
  category: "Agriculture / Marketplace / Sustainability",
  alternates: {
    canonical: "https://organicagropasto1207.pinet.com",
  },
  openGraph: {
    type: "website",
    title: "OrganicAgropastoralepi.pi",
    description: "Marketplace agro-pastorale biologique intégrée à Pi Network pour connecter producteurs et consommateurs.",
    siteName: "OrganicAgropastoralepi.pi",
    url: "https://organicagropasto1207.pinet.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrganicAgropastoralepi.pi",
    description: "Marketplace agro-pastorale biologique intégrée à Pi Network pour connecter producteurs et consommateurs.",
  },
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavigationMenuOAPPi />
        {children}
      </body>
    </html>
  );
}
