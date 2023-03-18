---
title: "Comment configurer Mautic - Intégration Facebook" 
seoTitle: "Comment configurer Mautic - Intégration Facebook" 
description: "Mautic - L'intégration Facebook peut aider à synchroniser vos prospects Facebook dans le système Mautic sans aucune difficulté, puis à les utiliser dans des campagnes de marketing." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook mène à Mautic, ajouter des contacts dans un segment et exécuter des campagnes par e-mail. Utilisez également ces contacts pour créer un public personnalisé pour les publicités Facebook." 
url: /fr/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook mène à Mautic, ajouter des contacts dans un segment et exécuter des campagnes par e-mail. Utilisez également ces contacts pour créer un public personnalisé pour les publicités Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Comment configurer Mautic - Intégration Facebook">}}

Mautic est un logiciel d'automatisation du marketing et donne un contrôle complet sur les e-mails marketing, les pages de destination et les workflows pour les activités marketing. Les campagnes goutte à goutte de Mautic aident à engager le public cible et à les tenir au courant de vos produits. L'intégration de Mautic Facebook fournit un moyen pour que de nouvelles pistes soient ajoutées à Mautic. Avec cette intégration Mautic - Facebook, les fils de votre campagne Facebook seront automatiquement ajoutés à Mautic.
Nous couvrirons les sections suivantes dans ce tutoriel:
  * [Configurer le compte de développeur Facebook] [1]
  * [Configurer l'application du développeur Facebook] [2]
  * [Configuration du plugin Mautic] [3]
  * [Conclusion] [4]

## Configurer le compte de développeur Facebook {#Account}
  * Allez sur [Facebook pour les développeurs] [5]
  * Enregistrez votre compte si vous n'en avez pas.
  * Pour enregistrer un nouveau compte, accédez à et cliquez sur «Démarrer» à partir du coin supérieur droit.
  * Après cela, sélectionnez votre compte Facebook et appuyez sur «Continuer».
  * Ensuite, à partir de la fenêtre contextuelle, cliquez sur le bouton «développeur».

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Intégration Facebook - Registre le compte de développeur">}}


## Configurer l'application du développeur Facebook {#App}
  * Cliquez sur «Créer une première application»

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Intégration Facebook - Créez la première application">}}

  * Cliquez sur «Gérer les intégrations commerciales» et appuyez sur «Continuer».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Intégration Facebook - Choisissez un objectif">}}

  * Dans la fenêtre suivante, entrez le nom de l'application et sélectionnez Out de l'application. Cliquez sur le bouton «Créer l'application».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Intégration Facebook - Formulaire pour créer une application">}}

  * La prochaine étape consiste à configurer la connexion Facebook. À partir de la page des produits, cliquez sur le bouton «Configurer» sous la case «Facebook Login».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Intégration Facebook - Configuration de la connexion FB">}}

  * À partir du menu de gauche, cliquez sur «Paramètres» sous Products -> Connexion Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Intégration Facebook - Configurer FB Connexion">}}

  * Entrez l'URL de votre site Web Mautic. Définissez «Client OAuth Login» et «Web OAuth Login» sur «Oui».
  * Accédez maintenant aux paramètres -> Paramètres de base. Depuis le bas de la page, cliquez sur le bouton «Ajouter une plate-forme». Après cela, une fenêtre contextuelle s'ouvrira. Entrez l'URL de votre site Web et enregistrez les modifications.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Intégration Facebook - Ajouter le site Web en tant que plate-forme">}}


## Configuration du plugin Mautic {#configuration}
  * Allez au tableau de bord Mautic.
  * Ensuite, passez aux «Paramètres» du coin supérieur droit.
  * Cliquez sur «Plugins».
  * Après cela, ouvrez les paramètres du plugin «Facebook».
  * Entrez ensuite l'ID client et le secret client. Obtenez ces clés à partir de l'application Facebook Developers que vous venez de créer en suivant les étapes ci-dessus.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Facebook Intégration - Configurer le plugin FB sur Mautic">}}

  * Appuyez sur le bouton «Autoriser l'application».
  * Après cela, une nouvelle fenêtre d'autorisation Facebook s'ouvrira. Suivez les invites pour terminer l'autorisation de l'application.
  * Après une autorisation réussie, passez à l'onglet «Mappage de contacts» du plugin Facebook de Mautic.
  * Ici, vous pouvez cartographier vos champs de contact dans les champs Facebook.
  * Enfin, publiez les paramètres et vous êtes prêt à partir.

## Conclusion {#conclusion}
Mautic - L'intégration Facebook peut aider à synchroniser vos prospects Facebook dans le système Mautic sans aucune difficulté. Dans l'application Mautic, vous pouvez ajouter tous ces fils dans un segment. Vous pouvez exécuter des campagnes de marketing par e-mail sur eux. Cela peut vraiment aider votre entreprise à développer, commercialiser et vendre des produits / services à un public cible beaucoup plus important.

## Explorer
Pour en savoir plus sur Mautic et Facebook, veuillez visiter:
  * [Mautic | Plateforme de technologie de marketing de contenu open source] [6]
  * [Comment configurer des campagnes Mautic à l'aide de Campaign Builder] [7]
  * [Drupal Mautic Integration pour automatiser le nourrisson de plomb] [8]
  * [Automatisation du marketing avec l'intégration Mautic et WooCommerce] [9]
  * [Intégrer Mautic & Joomla pour l'automatisation du marketing numérique] [10]
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
