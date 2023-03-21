---
title: "Un guide des débutants pour utiliser l'application de facturation du cratère" 
seoTitle: "Un guide des débutants pour utiliser l'application de facturation du cratère" 
description: "Un tutoriel pour commencer avec un système de factures open source. Cette directive de Crater vous aide à vous familiariser avec les concepts et fonctionnalités de base." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Ce tutoriel vous aidera à en savoir plus sur les applications de facturation du cratère. Il s'agit d'un système de factures gratuit et open source pour les petites entreprises." 
url: /fr/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Ce tutoriel vous aidera à en savoir plus sur les applications de facturation du cratère. Il s'agit d'un système de factures gratuit et open source pour les petites entreprises.

{{< figure align=center src="images/blog-crater.png" alt="Système de facture open source">}}

Chaque entreprise a besoin d'une sorte de système pour la gestion des factures, des dépenses, des paiements et bien d'autres. Le logiciel de facturation vous aide à le gérer afin que vous puissiez facilement effectuer des tâches de facturation et garder l'accent sur d'autres choses importantes. Dans cet article, nous apprendrons à configurer le cratère et à l'utiliser pour gérer les opérations comptables pour l'entreprise.
  * [Introduction sur le cratère][1]
  * [Procédure d'installation du cratère][2]
  * [Exploration des caractéristiques][3]
  * [Conclusion][4]

## Introduction sur le cratère   {#introduction}
[CRATER][5] est une application de facturation gratuite et open source. Il est absolument gratuit et vous pouvez facilement le mettre à jour vers les versions les plus récentes. Il s'agit d'un système comptable gratuit pour les petites entreprises et les pigistes. Il s'agit également d'une solution complète de facturation, vous permettant de suivre les dépenses et les paiements, de calculer les impôts et de produire des estimations et des factures. De plus, il est livré avec les applications mobiles prêtes à l'emploi pour les appareils iPhone et Android. Cela vous permettra de le gérer depuis n'importe quel endroit. Étant donné que Crater est un logiciel de facturation sur le Web, l'application Web est conçue avec Laravel et Vuejs, et les applications mobiles sont conçues avec React Native. Toutes les documents liés au développement et au déploiement sont disponibles. Le code source complet peut être trouvé sur [github][6].

## Procédure d'installation du cratère   {#installation}
Nous discuterons de la façon d'installer Crater avec la méthode manuelle et d'utiliser Docker dans cette section.

## # Installation manuelle
  * Téléchargez la dernière version depuis.
  * Téléchargez le fichier zip téléchargé sur votre serveur et extraire.
  * Pointez votre domaine vers le répertoire public à l'intérieur du dossier Crater.
  * Accédez à la racine de votre projet et exécutez la commande «Sudo Chmod -R 775 ./» pour attribuer des privilèges appropriés.
  * Ouvrez votre site dans le navigateur et suivez l'assistant d'installation.

Installation ## # Docker
  * Installez Docker sur votre serveur :.
  * Installez Docker Compose en suivant ce guide :.
  * Clone Crater Repository en utilisant cette commande.
```
git clone https://github.com/bytefury/crater
```
  * Exécutez les commandes ci-dessous une par une pour installer Crater.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Ouvrez le site Crater dans votre navigateur et suivez l'assistant d'installation.

## Exploration des fonctionnalités   {#Feature}
Dans cette section, nous explorerons les caractéristiques de base de cette application de facturation open source. Une fois que vous avez terminé l'installation, ouvrez votre site http://example.com et connectez-vous dans l'application.
  * **Tableau de bord**  - Après la connexion, vous serez emmené au tableau de bord, qui affiche la vue entière de l'application.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  * **Paramètres**  - Accédez maintenant à la page des paramètres et ajoutez divers paramètres d'application Web tels que les paramètres de compte, les informations de l'entreprise, les préférences, les personnalisations, les notifications, les modules de paiement, etc.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  * **Éléments**  - L'onglet des éléments est accessible dans le menu de la barre latérale. À partir de cet onglet, vous pouvez gérer vos articles. Vous pouvez utiliser des éléments tout en créant des estimations et des factures.
  * **Estimations**  - Créez une citation complète qui comprend les tarifs, les remises, les stocks, etc. L'un des trois modèles intégrés peut être utilisé pour créer une estimation. Des taxes supplémentaires peuvent être ajoutées à l'estimation, et elles peuvent également être ajoutées en tant que taxe composée.
  * **Factures**  - Faites des factures professionnelles et envoyez-les à vos clients. Vous pouvez utiliser des modèles disponibles pour générer une facture. Vous pouvez ajouter des taxes supplémentaires à la facture, ainsi qu'une taxe composée. De plus, vous pouvez fournir un pourcentage de réduction à valeur fixe à vos clients. De plus, vous pouvez appliquer des réductions aux articles individuels ainsi que le montant global de la facture.
  * **Paiements**  - Ce module vous aide à suivre le suivi des paiements que vous avez de vos clients.
  * **dépenses**  - Le module de dépenses vous aide à suivre la quantité que vous dépensez pour différents services.
  * **Taxes**  - En utilisant cette fonctionnalité, vous pouvez facilement gérer vos impôts. Vous pouvez ajouter plusieurs taxes sur le montant total de la facture ou sur l'article individuel.
  * **Rapports**  - Obtenez des informations complètes sur toutes vos factures, qu'elles soient pour un ou plusieurs clients. Les supports CRATER comportent quatre types de rapports tels que le rapport des ventes, le rapport sur les bénéfices et les pertes, le rapport des dépenses et le rapport des taxes.

## Conclusion   {#conclusion}
Nous avons appris Crater et comment le configurer manuellement et avec Docker. Nous avons également examiné certaines des fonctionnalités que chaque logiciel de facturation comptabilité devrait fournir. J'espère que ce guide peut vous aider à mettre rapidement en œuvre un système de factures open source pour votre entreprise.
Enfin, [contenerize.com][7] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [facturation][8] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Crater - Système comptable gratuit pour les petites entreprises][5]
  * [Top 5 du logiciel de comptabilité open source en 2021][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
