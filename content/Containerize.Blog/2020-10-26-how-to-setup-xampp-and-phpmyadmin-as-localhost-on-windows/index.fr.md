---
title: "Configurer XAMPP et PhpMyAdmin en tant que localhost sur Windows" 
seoTitle: "Configurer XAMPP et PhpMyAdmin en tant que localhost sur Windows" 
description: "Configurez XAMPP et PHPMYADMIN comme localhost sur Windows. Créez votre propre environnement de test local gratuit et open source pour tester et créer des applications Web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Configurer un environnement de développement avec la pile de solutions de serveurs Web gratuits et open source (XAMPP) et le logiciel de gestion de la base de données (PhpMyAdmin)" 
url: /fr/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Configurer un environnement de développement avec une pile de solutions de serveurs Web gratuits et open source (XAMPP) et un logiciel de gestion de base de données (PhpMyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP et phpmyadmin comme localhost">}}

XAMPP et PhpMyAdmin en tant que localhost fournit un serveur local pour que les développeurs testent et créent des applications Web. XAMPP est un serveur local installé sur des ordinateurs personnels / ordinateurs portables. Il fournit un environnement local pour créer, exécuter et tester les applications PHP avant de les déployer sur des serveurs en direct.
Nous couvrirons les sections suivantes dans cet article de blog:
  * [Description] [1]
  * [Installation XAMPP] [2]
  * [tableau de bord phpmyadmin] [3]
  * [Réflexions finales] [4]

## Description: {#Description}
XAMPP est une pile de solution de serveur Web gratuite et open source. Il contient Apache, MySQL, MariaDB, PHP et Perl. XAMPP est disponible pour les systèmes d'exploitation Windows. Il est extrêmement facile à installer et à utiliser. C’est pourquoi c’est l’environnement de développement PHP le plus populaire. XAMPP et PhpMyAdmin en tant que localhost fournit un environnement complet pour le développement et les tests d'applications Web.
Les alphabets dans XAMPP représentent:
  * ** X ** - Plate-plateforme (prend en charge plusieurs systèmes d'exploitation, notamment Linux, Windows et Mac OS)
  * ** A ** - Server Apache HTTP
  * ** M ** - MariaDB (base de données)
  * ** P ** - PHP
  * ** P ** - Perl

## Installation XAMPP {#XAMPP}
  * Téléchargez XAMPP depuis [ici] [5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP comme localhost">}}

  * Installez le fichier exécutable.
  * Puis cliquez sur «Suivant».
  * Choisissez les composants que vous souhaitez installer.

{{< figure align=center src="images/xampp2.png" alt="XAMPP comme localhost Étape 2">}}

  * Pour la plupart des applications Web, vous n'avez besoin que de _APACHE_, _MYSQL_, _PHP_ et _PHPMYADMIN_.
  * Sélectionnez le répertoire d'installation où vous souhaitez installer XAMPP.
  * Vous recevrez une alerte de sécurité Windows. Vous devez vérifier l'option suivante: «_private Networks, tels que mon réseau de maisons ou de travail» _.
  * Enfin, cliquez sur «Terminer» pour terminer l'installation.

{{< figure align=center src="images/xampp4.png" alt="XAMPP comme localhost Étape 3">}}

  * Après une installation réussie, ouvrez le panneau de commande XAMPP.
  * Démarrez les services «Apache» et «MySQL».

{{< figure align=center src="images/xampp5.png" alt="XAMPP comme localhost Étape 4">}}


## PhpMyAdmin Dashboard: {#phpmyadmin}
Pour accéder au tableau de bord PHPMYADMIN, cliquez sur le bouton «Admin» à côté du service MySQL. Vous pouvez également accéder à phpmyadmin en visitant http: // localhost / phpmyadmin de votre navigateur. Ici, vous pouvez créer des bases de données. Suivez ces étapes pour créer une nouvelle base de données.
  * À partir du tableau de bord, cliquez sur l'onglet «Bases de données».

{{< figure align=center src="images/db1.png" alt="phpmyadmin à la localhost Étape 1">}}

  * Entrez le nom de la base de données et cliquez sur le bouton «Créer». Cela créera simplement une nouvelle base de données vide.

{{< figure align=center src="images/db2.png" alt="phpmyadmin à la localhost Étape 2">}}

  * Ensuite, vous pouvez créer des tables en sélectionnant la base de données nouvellement créée.
  * Entrez le nom de la table sous «Créer une table».

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin à la localhost Étape 3">}}

  * Sélectionnez le nombre de colonnes.
  * Ensuite, cliquez sur le bouton «Go».
  * Après cela, vous devez remplir le formulaire à la page suivante pour terminer la création de table.

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin à la localhost Étape 4">}}


## Réflexions finales: {#Final}
L'installation de XAMPP est simple et simple. Il ne prend pas plus de 15 minutes au serveur de configuration XAMPP. Une fois installé, les développeurs peuvent créer et tester leurs applications Web basées sur PHP même sans connexion Internet. Au lieu de tester des projets directement sur un serveur Web en direct, il est simple et économe en temps de les tester localement. C'est une excellente plate-forme pour les débutants pour apprendre, tester et polir leurs compétences PHP, Perl et Database.

## Explorer:
[Pile de solution de serveur Web Open Source pour les développeurs PHP & Perl] [6]
[Meilleures options de pile de solutions de serveur Web open source] [7]
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
