# OrganicAgropastoralepi.pi 🌱

> Marketplace agro-pastorale biologique intégrée à Pi Network

[![Pi Network](https://img.shields.io/badge/Pi%20Network-Integrated-purple)](https://minepi.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://organicagropasto1207.pinet.com)

## 📋 Description

**OrganicAgropastoralepi.pi (OAPPi)** est une application Pi Network dédiée à l'agriculture et à l'élevage biologiques. L'application connecte les producteurs locaux de produits agro-pastoraux biologiques aux consommateurs via une marketplace digitale simple et sécurisée.

### 🎯 Mission

- Promouvoir une alimentation saine et biologique
- Soutenir les producteurs locaux d'Afrique de l'Ouest
- Développer un modèle économique durable dans l'écosystème Pi Network
- Faciliter le commerce équitable et transparent

## ✨ Fonctionnalités

### 🛒 Marketplace
- Catalogue de produits biologiques (légumes, fruits, viandes, produits laitiers)
- Système de paiement en Pi Network
- Gestion des commandes et livraisons

### 💰 Wallet & Tokens
- Portefeuille Pi intégré
- Système de tokens de fidélité OAPPi
- Historique des transactions
- Récompenses pour les achats

### 🤖 Assistant Intelligent
- Chatbot pour conseils sur les produits bio
- Informations sur l'agriculture biologique
- Support client en temps réel

### 📊 Gestion d'Entreprise
- Tableau de bord actionnaires
- Génération de contrats automatique
- Documents légaux (statuts, règlement intérieur)
- Licences et certifications bio

### 🧪 Test Net
- Module de test des paiements Pi
- Simulation de transactions
- Environnement de développement sécurisé

## 🚀 Technologies

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + Tailwind CSS
- **Composants**: shadcn/ui
- **Blockchain**: Pi Network SDK
- **Langue**: TypeScript
- **Déploiement**: Vercel

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/organicagropastoralepi.git

# Installer les dépendances
cd organicagropastoralepi
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés Pi Network

# Lancer en développement
npm run dev
```

## 🔧 Configuration

### Variables d'environnement requises

```env
# Pi Network
NEXT_PUBLIC_PI_APP_ID=your_app_id
PI_API_KEY=your_api_key

# Backend (optionnel)
NEXT_PUBLIC_BACKEND_URL=https://backend.appstudio-u7cm9zhmha0ruwv8.piappengine.com
```

## 🌍 Utilisation

1. **Connexion**: Authentifiez-vous avec votre compte Pi Network
2. **Exploration**: Parcourez les produits biologiques disponibles
3. **Achat**: Ajoutez des produits au panier et payez en Pi
4. **Tokens**: Gagnez des tokens OAPPi pour chaque achat
5. **Support**: Utilisez le chatbot pour toute question

## 📱 Accès

- **URL Production**: [https://organicagropasto1207.pinet.com](https://organicagropasto1207.pinet.com)
- **Pi Browser**: Recherchez "OrganicAgropastoralepi.pi" dans l'App Store Pi

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Documentation

- [Politique de Confidentialité](https://organicagropasto1207.pinet.com/privacy)
- [Conditions d'Utilisation](https://organicagropasto1207.pinet.com/terms)
- [Guide Utilisateur](docs/USER_GUIDE.md)
- [Documentation API](docs/API.md)

## 🏢 Structure du Projet

```
organicagropastoralepi/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Page principale
│   ├── privacy/           # Politique de confidentialité
│   └── terms/             # Conditions d'utilisation
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── landing-page.tsx  # Page d'accueil
│   ├── wallet-section.tsx
│   └── ...
├── hooks/                 # Custom React hooks
│   ├── use-chatbot.ts
│   └── use-pi-network-authentication.ts
├── lib/                   # Utilitaires
│   ├── app-config.ts
│   └── system-config.ts
└── public/               # Assets statiques
```

## 📊 Roadmap

- [x] Authentification Pi Network
- [x] Marketplace produits bio
- [x] Système de paiement Pi
- [x] Wallet et tokens OAPPi
- [x] Chatbot assistant
- [x] Gestion contractuelle
- [ ] Application mobile native
- [ ] Intégration logistique GPS
- [ ] Système de notation producteurs
- [ ] Programme de parrainage

## 📧 Contact

**Email**: kamiroubioum98@gmail.com  
**Application**: OrganicAgropastoralepi.pi  
**Website**: https://organicagropasto1207.pinet.com

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Pi Network pour l'écosystème blockchain
- La communauté des producteurs biologiques d'Afrique de l'Ouest
- Tous les contributeurs du projet

---

**Fait avec ❤️ pour une agriculture durable et un commerce équitable**

*OrganicAgropastoralepi.pi - Connecter la nature au futur*
