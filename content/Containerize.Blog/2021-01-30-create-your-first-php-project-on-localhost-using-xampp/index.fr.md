---
title: "Créez votre premier projet PHP sur LocalHost en utilisant XAMPP '" 
seoTitle: "Créez votre premier projet PHP sur LocalHost en utilisant XAMPP" 
description: "Configurez l'environnement de développement Web à l'aide du serveur Web gratuit et open source XAMPP. Créez et testez vos projets PHP sur LocalHost en suivant quelques étapes faciles." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Configurez l'environnement de développement Web à l'aide du serveur XAMPP gratuit et open source. Apprenez, créez et testez vos projets PHP sur localhost en suivant quelques étapes faciles." 
url: /fr/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Configuration de l'environnement de développement Web à l'aide du serveur XAMPP gratuit et open source. Apprenez, créez et testez vos projets PHP sur localhost en suivant quelques étapes faciles.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Créez votre premier projet PHP avec le serveur Web Open Source XAMPP">}}

XAMPP est un serveur Web open source qui fournit un environnement local pour créer, exécuter et tester un projet PHP avant de le déployer sur des serveurs en direct. Il fournit un serveur local aux développeurs pour tester et créer des applications Web. Nous couvrirons les sections suivantes dans cet article de blog:
  * [Exigences][2]
  * [Qu'est-ce que XAMPP][3]
  * [Créer un script php][4]
  * [Exécuter et tester le script php][5]
  * [Conclusion][6]

## exigences   {#Requirements}
  * Installation XAMPP
  * Application de l'éditeur de code
  * Connaissances PHP de base
  * Connaissances de base HTML et JavaScript

## Qu'est-ce que XAMPP?   {#xampp}
XAMPP est une pile de solutions de serveur Web open source. Il contient Apache, MySQL, MariaDB, PHP et Perl. Il est extrêmement facile à installer et à utiliser. C’est pourquoi c’est l’environnement de développement PHP le plus populaire. Le serveur XAMPP fournit un environnement complet pour le développement d'applications Web PHP. Si vous n'avez pas déjà l'installation de travail XAMPP, suivez ce guide pour installer XAMPP:
[Configuration de XAMPP et PhpMyAdmin en tant que localhost sur Windows][7]

## Créer un script php   {#php}
  * En supposant que vous avez déjà installé XAMPP en suivant le didacticiel ci-dessus, créons maintenant un script PHP simple et le testons sur XAMPP.
  * Ouvrez d'abord votre éditeur. Si vous n'avez pas d'éditeur de programmation, ouvrez simplement le bloc-notes.
  * Entrez le code suivant
```
<?php
echo "This is my first PHP project";
?>
```
  * Cliquez sur «Fichier» dans le coin supérieur droit.
  * Appuyez sur le bouton «Enregistrer sous».
  * Entrez le nom avec l'extension «.php».
  * Pour «Enregistrer sous le type», sélectionnez «Tous les fichiers (\ *. \ *)».
  * Et enfin appuyez sur le bouton «Enregistrer».

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Créez votre premier projet PHP avec le serveur Web Open Source XAMPP">}}


## Exécuter et tester le script php   {#test}
  * Copiez ce script PHP dans le dossier HTDOCS dans votre installation XAMPP. Le dossier HTDOCS principalement réside ici: C: \ XAMPP \ HTDOCS
  * Ouvrez votre navigateur.
  * Aller à localhost / mon \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Créez votre premier projet PHP avec le serveur Web Open Source XAMPP">}}

Toutes nos félicitations! Vous venez de créer votre premier projet PHP.

## Conclusion   {#conclusion}
Créer un premier projet Web est toujours très excitant pour un débutant. Cela se sent bien lorsque vous concevez votre premier script dynamique, l'exécutez et affichez-le en travaillant sur votre navigateur. J'espère que ce guide simple vous a aidé à créer et à exécuter votre premier projet PHP avec le serveur Web Open Source XAMPP.

## Explorer
Pour en savoir plus sur XAMPP et PHPMYADMIN, Vérifiez les guides suivants:
[Configuration de XAMPP et PhpMyAdmin en tant que localhost sur Windows][7]
[Pile de solutions de serveur Web gratuit pour les développeurs PHP & Perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
