export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Conditions d'Utilisation</h1>
        <p className="text-muted-foreground mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant OrganicAgropastoralepi.pi (« l'Application »), vous acceptez d'être lié 
              par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser 
              l'Application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description du service</h2>
            <p>
              OrganicAgropastoralepi.pi est une marketplace digitale intégrée à Pi Network qui connecte les 
              producteurs de produits agro-pastoraux biologiques aux consommateurs. L'Application offre :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Achat et vente de produits biologiques</li>
              <li>Paiements en Pi Network</li>
              <li>Système de tokens de fidélité OAPPi</li>
              <li>Assistant chatbot pour conseils</li>
              <li>Gestion de contrats et licences</li>
              <li>Services de logistique et distribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Conditions d'utilisation</h2>
            
            <h3 className="text-xl font-semibold mb-2">3.1 Éligibilité</h3>
            <p className="mb-4">
              Vous devez avoir au moins 18 ans et disposer d'un compte Pi Network actif pour utiliser cette Application.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.2 Compte utilisateur</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vous devez fournir des informations exactes et à jour</li>
              <li>Vous êtes responsable de la sécurité de votre compte Pi Network</li>
              <li>Vous devez nous informer immédiatement de toute utilisation non autorisée</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Utilisation interdite</h3>
            <p className="mb-2">Vous acceptez de ne pas :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violer les lois applicables</li>
              <li>Frauder ou tromper d'autres utilisateurs</li>
              <li>Publier du contenu offensant ou inapproprié</li>
              <li>Tenter d'accéder aux systèmes de manière non autorisée</li>
              <li>Utiliser l'Application à des fins commerciales non autorisées</li>
              <li>Manipuler les prix ou créer de fausses transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Transactions et paiements</h2>
            
            <h3 className="text-xl font-semibold mb-2">4.1 Paiements Pi Network</h3>
            <p>
              Toutes les transactions sont traitées via Pi Network. Nous utilisons le Test Net pour les tests 
              et le Mainnet pour les transactions réelles. Les paiements sont définitifs et non remboursables 
              sauf en cas d'erreur avérée.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4.2 Tokens OAPPi</h3>
            <p>
              Les tokens OAPPi sont des jetons de fidélité internes à l'Application. Ils n'ont pas de valeur 
              monétaire en dehors de l'écosystème OAPPi et peuvent être utilisés pour des réductions ou avantages.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4.3 Prix et disponibilité</h3>
            <p>
              Les prix des produits peuvent varier. Nous nous réservons le droit de modifier les prix à tout 
              moment. La disponibilité des produits n'est pas garantie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Produits biologiques</h2>
            <p>
              Nous nous efforçons de garantir que tous les produits vendus sont biologiques et certifiés. 
              Cependant, la responsabilité de la certification incombe aux producteurs. Nous encourageons 
              les utilisateurs à vérifier les certifications avant l'achat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
            <p>
              Tous les contenus de l'Application (textes, graphiques, logos, icônes, images) sont la propriété 
              de OrganicAgropastoralepi.pi ou de ses concédants de licence et sont protégés par les lois sur 
              la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation de responsabilité</h2>
            <p className="mb-4">
              L'Application est fournie "en l'état" sans garantie d'aucune sorte. Nous ne garantissons pas que :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'Application sera toujours disponible ou sans erreur</li>
              <li>Les produits répondront à vos attentes</li>
              <li>Les transactions seront exemptes d'erreurs</li>
              <li>Les producteurs livreront dans les délais</li>
            </ul>
            <p className="mt-4">
              En aucun cas OAPPi ne sera responsable des dommages indirects, accessoires, spéciaux ou consécutifs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Résiliation</h2>
            <p>
              Nous nous réservons le droit de suspendre ou de résilier votre accès à l'Application à tout moment, 
              sans préavis, en cas de violation de ces conditions ou pour toute autre raison jugée nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Modifications des conditions</h2>
            <p>
              Nous pouvons modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur 
              publication sur cette page. Votre utilisation continue de l'Application après ces modifications 
              constitue votre acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Loi applicable</h2>
            <p>
              Ces conditions sont régies par les lois applicables en Afrique de l'Ouest et les règlements de 
              Pi Network. Tout litige sera résolu par arbitrage conformément aux règles de Pi Network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
            <p>Pour toute question concernant ces conditions, contactez-nous :</p>
            <ul className="list-none pl-0 mt-4 space-y-2">
              <li><strong>Email :</strong> kamiroubioum98@gmail.com</li>
              <li><strong>Application :</strong> OrganicAgropastoralepi.pi</li>
              <li><strong>URL :</strong> https://organicagropasto1207.pinet.com</li>
            </ul>
          </section>

          <section className="mt-8 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              En utilisant OrganicAgropastoralepi.pi, vous reconnaissez avoir lu, compris et accepté ces 
              conditions d'utilisation dans leur intégralité.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
