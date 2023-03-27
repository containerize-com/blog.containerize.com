---
title: "Intégrer Mautic & Joomla pour l'automatisation du marketing numérique '" 
seoTitle: "Intégrez Mautic & Joomla pour l'automatisation du marketing numérique" 
description: "L'intégration Mautic et Joomla peut aider votre entreprise à l'automatisation du marketing numérique. Il aide à commercialiser des produits par le biais de campagnes Mautic." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "L'intégration Mautic et Joomla peut aider votre entreprise à l'automatisation du marketing numérique. Il aide à commercialiser des produits par le biais de campagnes Mautic en ligne." 
url: /fr/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## L'intégration Mautic et Joomla peut aider votre entreprise à l'automatisation du marketing numérique. Il aide à commercialiser des produits par le biais de campagnes Mautic en ligne.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Intégration Mautic et Joomla">}}


## Comment cette intégration peut aider votre entreprise:
L'intégration Mautic et Joomla vous permettra de commercialiser vos produits / services de manière très facile mais efficace. Mautic, une solution de marketing open source gratuite vous donne un grand contrôle sur les campagnes de marketing et il est très simple de poursuivre la campagne Drip selon la situation. Par exemple: il vous donne les informations selon lesquelles le client a lu l'e-mail ou visité vos pages de produits. En utilisant ces informations, vous pouvez configurer des campagnes pour décider de continuer à envoyer ou non les prochains e-mails pour ce client. Cette intégration aidera à l'automatisation du marketing numérique. Ce billet de blog vous guidera avec les sections suivantes:
  * [Présentation][1]
  * [Installation du plugin Joomla][2]
  * [Configuration Mautic][3]
  * [Conclusion][4]

## Aperçu: {#overview}

Mautic est un système d'automatisation du marketing open source. Il s'agit d'un logiciel marketing gratuit. Vous pouvez l'utiliser pour créer des campagnes illimitées pour envoyer des e-mails marketing aux clients ciblés.
Joomla est également un système gratuit de gestion de contenu open source pour développer des sites Web. Il est très facile de configurer vos sites Web d'entreprise sur Joomla. Il a des milliers d'extensions qui peuvent être utilisées en fonction de vos besoins.

## Installation du plugin Joomla: {#plugin}

  * Téléchargez le [plugin][5].
  * Ensuite, allez aux extensions -> Gérer -> Installer.
  * Entrez l'URL Mautique.
  * Il insérera 1 image GIF PX chargée à partir de votre instance Mautic.
  * Intégrer les formulaires dans le contenu Joomla à l'aide d'un extrait de code suivant: {Mautic type = ”Form” ID}
  * Ensuite, vous pouvez créer le formulaire dans votre application Mautic et obtenir l'ID à partir de l'URL.
  * Le contenu dynamique peut également être ajouté en utilisant le code suivant Snippt: {Mautic Type = ”Content” slot = ”slot_name”} Contenu par défaut ici. {/ Mautic}
  * SLOT_NAME est l'identifiant de la machine à sous que vous avez spécifiée lors de l'ajout d'une décision de «contenu dynamique» à votre campagne.
Après l'installation, vous devez créer et intégrer des formulaires sur votre site Joomla. Ces formulaires enverront les informations de contacts à Mautic. Une fois que vous avez terminé la configuration du plugin sur Joomla, la prochaine étape sera de la configurer sur Mautic.

## Configuration Mautic: {#mautic}

  * Allez sur votre site Mautic, passez aux paramètres.
  * Cliquez sur la configuration.
  * À partir des paramètres de l'API, activez l'API.
  * Pour connecter Mautic à Joomla, vous devez avoir un certificat SSL sur vos sites.
  * Ensuite, vous devez aller aux informations d'identification de l'API.
  * Si votre site Web n'a pas de SSL (donc vous allez sur **http**: //yourjoomlasite.com), sélectionnez OAuth1. Si vous avez un SSL sur votre site (donc vous allez sur**https** : //yourjoomlasite.com), sélectionnez OAuth2.
  * Cliquez sur Nouveau, fournissez un nom (peut être tout ce que vous voulez) et l'URL complète de votre Joomla! site ([https://yourjoomlasite.com][6])
  * Cliquez sur Enregistrer et fermer.
  * Ici, vous pouvez obtenir des clés publiques et privées.
  * Allez sur votre site Joomla et trouvez le plugin Mautic que vous avez installé plus tôt.
  * Entrez des clés publiques et secrètes que vous avez créées à partir de votre site Mautic.
  * Sélectionnez OAuth1 ou OAuth2 (le même que vous avez sélectionné dans Mautic) et définissez Envoyer des utilisateurs enregistrés à OUI.
  * Enregistrer et publier le plugin.
  * Après cela, vous pourrez autoriser votre site Joomla.
  * Joomla redirigera à l'instance Mautic à l'autorisation.
  * Cliquez sur «Autoriser» et c'est tout.
  * Vous commencerez à obtenir des contacts dans votre site Mautic.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Intégration Mautic et Joomla">}}


## Conclusion: {#conclusion}

Dans cet article, nous avons discuté de la façon dont Mautic et Joomla ensemble peuvent aider à l'automatisation du marketing numérique. Cette solution de marketing sans open source vous permettra de regrouper tous les contacts provenant du site Joomla et de créer des campagnes marketing en les utilisant. Mautic vous permet de créer des segments, afin que vous puissiez exécuter différentes campagnes sur différents segments en fonction de vos besoins. Veuillez consulter [Joomla][7] et [Mautic][8] Blogs pour un aperçu détaillé.

## Explorer:
Vous pouvez trouver des liens suivants pertinents:
  * [Joomla][7]
  * [Mautic][8]
  * [Comment configurer Mautic - Intégration Facebook][9]
  * [Drupal Mautic Integration pour automatiser le nourrisson de plomb][10]
  * [Automatisation marketing à l'aide de Mautic et WordPress WooCommerce][11]
  * [Comment configurer des campagnes de marketing dans Mautic][12]



[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
