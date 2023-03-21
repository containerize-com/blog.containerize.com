---
title: "Guide du débutant pour créer un modèle Joomla de base" 
seoTitle: "Guide du débutant pour créer un modèle Joomla de base" 
description: "Joomla est un système populaire de gestion de contenu open source. Dans ce didacticiel, nous expliquerons pas à pas comment créer un modèle Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla est l'un des systèmes de gestion de contenu open source les plus populaires. Ce tutoriel vous guidera à travers les étapes nécessaires pour créer un modèle Joomla à partir de zéro." 
url: /fr/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla est l'un des systèmes de gestion de contenu open source les plus populaires. Ce tutoriel vous guidera à travers les étapes nécessaires pour créer un modèle Joomla à partir de zéro.

{{< figure align=center src="images/joomla-templates-2.png" alt="Modèle de base Joomla">}}

À cette époque numérique, un système de gestion de contenu est une nécessité fondamentale de toute entreprise pour tous leurs besoins de création de contenu. Et, il existe un certain nombre de logiciels CMS open-source et payants disponibles sur le marché. Nous avons également [répertorié][1] certains des meilleurs logiciels de gestion de contenu open source pour les entreprises. Joomla est l'un des logiciels CMS open source les plus populaires et dans ce tutoriel, nous vous guiderons étape par étape et expliquer comment créer un modèle Joomla à partir de zéro. Alors, commençons!
**Remarque: nous supposons que la version Joomla 2.5 est installée** 
  * **[Structure du répertoire de configuration][2]** 
  * **[Créez un fichier de base templatedetails.xml][3]** 
  * **[Créer un fichier index.php de base][4]** 
  * **[Modèle de découverte et d'installation][5]** 
  * **[Package le modèle][6]** 
  * **[Conclusion][7]** 

## Structure du répertoire de configuration   {#SetUp}
Pour créer d'abord un modèle Joomla très basique, créez un nouveau dossier dans le dossier Modèles. Nommez le dossier comme vous voulez appeler votre modèle, par exemple «**myNewTemplate** ».
Utilisation de votre éditeur de texte préféré Créez les fichiers **index.php  **et **  TemplatedEtails.xml **. Pour gérer vos images et vos feuilles de style, faites 2 nouveaux dossiers appelés  **images **  et  **CSS ** . À l'intérieur du dossier  **CSS **  Créez un fichier appelé  **template.css**  .
Votre structure d'annuaire ressemblera à ceci

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Structure du répertoire de modèle Joomla">}}


## Créer un fichier de base templatedetails.xml   {#xml}
Le fichier **templatedetails.xml**  contient toutes les métadonnées sur votre modèle. Et, ce fichier est essentiel sans cela, votre modèle ne sera pas vu par Joomla !.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Les contenus du modèleEtails.xml sont explicites. Vous pouvez simplement copier le contenu de modifier les bits nécessaires.
Laissez les positions telles qu'elles sont - ce sont un ensemble commun, vous pourrez donc passer facilement à partir des modèles standard.

## Créer un fichier de base index.php   {#php}
L'index.php devient le fichier bootstrap principal de chaque page que Joomla! délivre. Cette page affichera le code nu prêt pour que vous puissiez couper et coller dans votre propre conception.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Découvrez et installez le modèle   {#install}
Vous devez d'abord dire à Joomla! que vous avez créé un nouveau modèle. Cette fonction est appelée extensions de découverte et peut être accessible via
```
Extensions -> Extension Manager -> Discover
```
Cliquez sur le bouton Découvrez pour découvrir votre modèle, puis sélectionnez-le et cliquez sur Installer pour l'installer. Maintenant, votre modèle doit apparaître dans le modèle de modèle (styles), accessible via
```
Extensions -> Template Manager
```

## Package le modèle   {#packge}
Un répertoire dézippé avec plusieurs fichiers n'est pas une bonne méthode de distribution. Ainsi, par souci de distribution, nous devons créer un package de notre modèle. Le package peut être au format zip (avec une extension .zip).
Si votre modèle est dans un répertoire MyTemplate / Ensuite pour créer le package, vous pouvez vous connecter à ce répertoire et utiliser des commandes comme:
```
zip -r ..\mytemplate.zip .
```

## Conclusion   {#conclusion}
Dans cet article, nous avons appris le modèle Joomla. Nous avons parcouru étape par étape sur la façon de créer un modèle Joomla. Ce n'est qu'un tutoriel très basique pour commencer avec la création de modèle. Bien sûr, vous pouvez construire un modèle très personnalisé et amélioré basé sur cette structure nue.

## Pages de produits pertinents
Vous pouvez trouver les liens suivants pertinents:
  * [Guide de développement du modèle Joomla pour les débutants][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
