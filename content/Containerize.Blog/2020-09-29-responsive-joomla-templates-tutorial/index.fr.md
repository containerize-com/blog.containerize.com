---
title: "Guide de développement de modèles Joomla pour les débutants" 
seoTitle: "Guide de développement de modèles Joomla pour les débutants" 
description: "Apprenez le développement du modèle Joomla, comment configurer des dispositions réactives pour divers cas d'utilisation. Ensemble de fichiers qui définissent la couche de conception d'un site Web d'entreprise." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Créez des modèles Joomla hautement professionnels et personnalisables qui offrent un tas de fonctionnalités telles que des schémas de couleurs multilingues, SEO / conviviaux et riches." 
url: /fr/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Créez des modèles Joomla hautement professionnels et personnalisables qui offrent un tas de fonctionnalités telles que des schémas de couleurs multilingues, SEO / conviviaux et riches. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Développement du modèle Joomla">}}


## Aperçu
Un site Web d'entreprise bien conçu joue une partie vitale pour apporter et conserver les visiteurs en leur donnant une facilité de navigation. **Full en vedette Joomla**  Facilite ses utilisateurs avec un certain nombre de dispositions réactives et le développement de modèles Joomla qui contrôlent l'esthétique d'un site Web d'entreprise.
Pendant la phase de développement, le placement des éléments de conception est très essentiel à obtenir:
  * Cohérence
  * Navigation facile
  * Simplicité
  * Compatibilité mobile
  * Lisibilité
Voici les modèles **joomla** . Ce logiciel open source donne une disposition pour développer ou utiliser des dispositions réactives prédéfinies pour toutes les pages Web plutôt que d'écrire du code pour chaque page séparément.
Dans cet article de blog, nous apprendrons les choses suivantes sur la façon de créer et de configurer un modèle **convivial**  dans Joomla.
  * [**Quelles sont les dispositions de Joomla?** ][2]
  * [**Comment créer un modèle réactif simple dans Joomla?** ][3]
  * [**Comment installer un modèle Joomla?** ][4]
  * [**Conclusion** ][5]

## Quelles sont les dispositions de Joomla?   {#quoi}
Joomla fournit des modèles pour l'avant ainsi que pour l'arrière. Il est livré avec de nombreux modèles prêts et il offre aux développeurs de construire **des thèmes de bootstrap réactifs gratuits**  selon leurs cas d'utilisation. Il existe deux types de modèles à Joomla.
**Modèles frontaux:**  liés à l'utilisateur confronté à une partie d'un site Web d'entreprise.
**Modèles back-end:**  Ces modèles sont liés à la logique métier d'un site.

## Comment créer un modèle réactif simple dans Joomla?   {#comment}
Dans cette section, nous couvrirons les étapes de ce didacticiel de modèle Joomla.
Avant de sauter dans cette section, assurez-vous d'avoir une compréhension des éléments suivants:
  * Html
  * CSS
  * Javascript
  * Php
Ainsi, la création de modèles personnalisés à Joomla n'a jamais été aussi dure et complexe. Cependant, commençons à créer notre premier modèle Joomla.

## **Structure du répertoire de configuration** 
Tout d'abord, créez un dossier nommé «**mytemplate **» dans le dossier « **modèles**  ».
Créer des fichiers suivants dans le dossier «**mytemplate** »:
  * **index.php** : Il s'agit du fichier central qui contient du code HTML et PHP pour les pages de modèle entières.
  * **TemplatedEtails.xml** : Ce fichier contient les méta-données du modèle et est obligatoire pour être remarqué par Joomla.
Maintenant, créez trois dossiers à l'intérieur du dossier «**mytemplate** » avec les noms suivants:
  * **JS** : Ce dossier contiendra tous les fichiers JavaScript nécessaires pour le modèle
  * **CSS** : Tous les fichiers CSS pour le style entreront dans ce dossier
  * **Images** : Les images utilisées par le modèle résideront dans ce dossier
Créez un fichier CSS nommé «**template.css **» dans le dossier « **css**  ».
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Finalement, c'est à quoi ressemblera la structure du répertoire.

## Permet de mettre du code
Mettez ce code dans le fichier **TemplatedEtails.xml** .
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
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
Comme mentionné précédemment, ce fichier contient les métadonnées sur les dispositions réactives qui sont définies entre les balises de balisage. Cependant, vous pouvez modifier les informations générales comme le nom, l'auteur et la description.
Ce fichier contient également des informations sur les autres fichiers et dossiers utilisés par le modèle.
Maintenant, ouvrez le fichier **index.php**  et commencez à mettre le code suivant:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Ce fichier commencera par cette ligne qui empêche les autres de lire votre code PHP.
```
<!DOCTYPE html>
```
Il s'agit de faire connaître le type de document.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Les documents HTML commencent par cette ligne et l'attribut **xmlns**  indique à l'espace de noms XML du document.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
La première ligne après la balise indique à Joomla de mettre des informations d'en-tête comme les informations sur les métadonnées et le titre de page.
Il existe un lien vers la feuille de style externe dans la deuxième ligne et la troisième ligne lie le fichier JavaScript externe.
Le reste des fichiers permettent le bootstrap dans le modèle.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
La section Body commence après que la section Head contient toutes les données qui seront reflétées au modèle pour que l'utilisateur puisse afficher et naviguer.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Cette déclaration est appelée instruction JDOC qui est utilisée pour demander à Joomla d'ajouter un module nommé «Position-7». Il existe plusieurs instructions JDOC qui sont fréquemment utilisées dans le développement du modèle **Joomla** .
Il s'agit du fichier final complet **index.php**  avec tout le code requis pour un modèle Joomla de base.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Tout est en place pour un modèle très basique. Maintenant, il est temps de l'installer sur le serveur Joomla et de voir comment cela se passe.

## Comment installer le modèle Joomla?   {#installer}
Le processus d'installation du modèle Joomla est assez droit et facile. Il y a les étapes suivantes à installer:
Allez dans «Extensions -> Gérer -> Installer

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Image de configuration d'installation de Joomla">}}

Ici, vous pouvez voir votre modèle Joomla nouvellement développé dans la liste comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Liste des modèles Joomla">}}

Maintenant, sélectionnez le modèle, appuyez sur «Installer» et un message de réussite apparaîtra sur l'installation réussie.
Une fois le modèle installé, vous pouvez accéder et modifier les fichiers de modèle dans le panneau de configuration de Joomla et prévisualiser l'option de modifications de l'option «Aperçu du modèle».

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Maintenant, vous pouvez voir votre premier modèle Joomla dans le navigateur!

## Conclusion   {#conclusion}
Un modèle bon et réactif est le fondement de la modélisation globale du site. **Les dispositions réactives**  chez Joomla sont multifonctionnelles et peuvent être utilisées pour divers projets. De l'écriture de code au développement du modèle Joomla devient très simple à l'aide d'un tableau de bord d'administration intuitif. Joomla fournit un contrôle complet sur le développement du modèle pour répondre aux désirs de l'utilisateur.
Comme la catégorie **CMS Software**  est sous des améliorations cohérentes et que d'autres tutoriels concernant d'autres systèmes de gestion de contenu seront ajoutés à la liste, veuillez rester en contact avec la section [Système de gestion de contenu][6] pour les mises à jour régulières.

## Pages de produits pertinents
Vous pouvez trouver les liens suivants pertinents:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Artisanat][13]
  * [Contao][14]
  * [Fork][15]
  * [CMS de raffinerie][16]
  * [Locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
