---
title: "Comment installer et configurer le serveur WAMP sur Windows" 
seoTitle: "Comment installer et configurer le serveur WAMP sur Windows" 
description: "Installez Wampserver sur Windows et commencez rapidement à développer des applications Web basées sur PHP. Le serveur WAMP est disponible pour les Windows 32 et 64 bits." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Configurer un environnement de développement Web pour créer des applications Web avec Apache2, PHP et MySQL. Cet article vous aide à installer Wamp Server sur Windows." 
url: /fr/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Configurer un environnement de développement Web pour créer des applications Web avec Apache2, PHP et MySQL. Cet article vous aide à installer Wamp Server sur Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Serveur WAMP">}}

Chaque développeur doit avoir le logiciel requis installé sur son ordinateur avant d'écrire le programme. Au début, les développeurs ont dû installer tous les logiciels séparément, puis les configurer pour travailler ensemble. ** Wampserver ** et d'autres logiciels de pile de solutions Web sont maintenant disponibles, qui regroupent tous les logiciels nécessaires en un seul package. Il vous suffit d'installer un seul package pour mettre votre environnement de développement opérationnel.
Dans cet article de blog, nous couvrirons les sections suivantes.
  * [** Qu'est-ce que Wampserver? **] [1]
  * [** Installation WAMP **] [2]
  * [** Configuration WAMP **] [3]
  * [** Access PhpMyAdmin **] [4]

## Qu'est-ce que Wampserver? {#Quoi}
Wampserver est une pile de solutions gratuite pour configurer l'environnement de développement Web pour les applications basées sur PHP. Wamp signifie (W - Windows, A - Apache, M - MySQL et P - PHP). De plus, il est également livré avec PhpMyAdmin et l'administration pour la gestion de la base de données. Wamp est l'un des outils populaires et vous pouvez rapidement le configurer. De plus, vous pouvez configurer le serveur WAMP à partir du panneau de configuration. Il fournit un environnement de développement Web complet pour la création et le test des applications. Wampserver se compose de plusieurs composants que vous pouvez sélectionner lors de l'installation en fonction de vos besoins. Wampserver est livré avec plusieurs versions de PHP. Vous pouvez facilement modifier la version PHP conformément aux exigences de votre projet. En outre, vous pouvez modifier les SGBD (système de gestion de la base de données) à partir du panneau de configuration Wampserver.

## Installation WAMP {#installation}
Suivez le guide étape par étape ci-dessous pour installer le serveur WAMP sur Windows.
  * ** Télécharger Wampserver ** sur le site officiel

{{< figure align=center src="images/wamp-download.png" alt="">}}

  * Choisissez un ** Wampserver 32 bits ** ou ** Wampserver 64 bits ** Version du programme d'installation en fonction de votre système d'exploitation.
  * Localisez le fichier ** wamp Download ** et double-cliquez dessus pour exécuter le processus d'installation.
  * Sélectionnez la langue, puis appuyez sur le bouton OK.
  * Choisissez la case à cocher I Accepter l'accord, puis cliquez sur le bouton Suivant.
  * Lisez les informations importantes sur l'installation de Wampserver et cliquez sur le bouton Suivant pour continuer.
  * Sélectionnez un dossier dans lequel vous souhaitez installer le serveur WAMP et cliquez sur le bouton Suivant.
  * Vous devez sélectionner les composants que vous souhaitez installer comme indiqué dans la capture d'écran ci-dessous. Vous pouvez sélectionner toutes les versions PHP et changer pendant le développement. Vous pouvez également installer MySQL et MariADB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Sélectionnez le raccourci pour Wampserver et cliquez sur le bouton Suivant.
  * Cliquez sur le bouton Installer pour installer Wampserver.
  * Maintenant, sélectionnez le navigateur par défaut et l'éditeur de texte par défaut pour le serveur WAMP.
  * Votre installation est complète. Cliquez sur le bouton Terminer pour quitter l'assistant d'installation du serveur WAMP.
  * Ouvrez votre navigateur et tapez localhost pour y accéder. Vous verrez la page ci-dessous.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Configuration WAMP {#configuration}
Maintenant, nous allons examiner quelques configurations qui vous aident pendant le développement et les tests des applications Web. Vous pouvez maintenant démarrer le Wampserver en double-cliquant sur l'icône Wampserver de raccourci sur votre bureau.
  * ** Services ** - Vous pouvez voir les options pour démarrer, arrêter et redémarrer tous les services en cliquant sur l'icône Wampserver.
  * ** Modifier la base de données ** - cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez des outils et cliquez sur «Inverser le SGBD par défaut MariADB MySQL». WAMP Server redémarrera automatiquement et vous pouvez voir la base de données par défaut en ouvrant LocalHost dans votre navigateur.
  * ** Modifiez la version PHP ** - cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez des outils et modifiez la version CLI PHP et cliquez sur la version PHP que vous souhaitez.
  * ** Hôte virtuel ** - Vous pouvez facilement ajouter un hôte virtuel via l'interface Web de Wampserver. Ouvrez LocalHost dans votre navigateur et cliquez sur «Ajouter un hôte virtuel» dans la section des outils. Entrez «Nom de l'hôte virtuel comme dev.example.com» et entrez le chemin absolu du projet. Cliquez sur le bouton «Démarrer la création de VirtualHost». Redémarrez le serveur Apache pour charger l'hôte virtuel nouvellement créé.
  * ** Modifier le port Apache ** - Par défaut, le serveur Web Apache s'exécute sur le port 80. Si vous souhaitez utiliser un port différent pour Apache, vous pouvez le faire à partir du panneau de configuration Wampserver. Cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez des outils et cliquez sur «Utiliser un port autre que 80». Entrez un nouveau numéro de port dans la boîte de dialogue et cliquez sur le bouton OK.
  * ** Modifier le port SGBD ** - Par défaut, le serveur de base de données s'exécute sur le port 3306. Si vous souhaitez utiliser un port différent pour le serveur de base de données, vous pouvez le faire à partir du panneau de configuration Wampserver. Cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez des outils et cliquez sur «Utiliser un port autre que 3306». Entrez le nouveau numéro de port dans la boîte de dialogue et cliquez sur le bouton OK.
  * ** Journaux vides ** - WAMSERVER fournit des fonctionnalités pour effacer les journaux du panneau de configuration. Vous pouvez vider les journaux tels que le journal d'erreur PHP, le journal d'erreur Apache, le journal d'accès Apache, le journal MySQL et le journal MariADB. Même vous pouvez effacer tous les journaux à la fois. Cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez des outils et sélectionnez les journaux vides, vous trouverez toutes les options pour supprimer les journaux.
  * ** Changer la langue ** - vous pouvez le langage pour le panneau de configuration Wampserver. Cliquez avec le bouton droit sur l'icône WAMP pour ouvrir la boîte de dialogue des outils. Sélectionnez la langue et cliquez sur la langue requise. Vous verrez un panneau de commande dans la langue nouvellement sélectionnée.

## Access PhpMyAdmin {#phpmyAdmin}
Vous pouvez accéder à ** phpMyAdmin ** pour la gestion de vos bases de données en ouvrant LocalHost dans votre navigateur, puis cliquez sur le lien PHPMYADMIN sur la page de bienvenue Wampserver. En outre, vous pouvez y accéder en visitant l'URL http: // localhost / phpmyadmin.

## Conclusion
Nous avons discuté du Wampserver et couvert le guide étape par étape complet pour ** installer Wampserver ** sur Windows. Vous pouvez facilement installer et configurer ** wampserver ** en suivant ce tutoriel et commencer à coder immédiatement. Vous pouvez visiter les liens sous la section Explorer pour plus d'options sur le logiciel de pile de solutions.
Enfin, [** contenerize.com **] [5] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [** de solution de serveur Web **] [6] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [** Open Source Web Server Server Options de pile de solutions **] [7]
  * [** Configuration XAMPP et PhpMyAdmin en tant que localhost sur Windows **] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
