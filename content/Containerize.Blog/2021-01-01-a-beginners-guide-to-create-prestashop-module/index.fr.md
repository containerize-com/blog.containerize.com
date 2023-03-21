---
title: "Un guide des débutants pour créer un module Prestashop" 
seoTitle: "Un guide des débutants pour créer un module Prestashop" 
description: "Prestashop est un logiciel de commerce électronique open source efficace et rentable pour configurer la boutique en ligne. Les addons Prestashop aident les propriétaires de magasin à étendre les fonctionnalités." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Les modules Prestashop sont de petits programmes qui vous permettent d'améliorer la fonctionnalité de votre boutique. Nous apprendrons à créer un module de base dans ce tutoriel." 
url: /fr/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Les modules Prestashop sont de petits programmes qui vous permettent d'améliorer la fonctionnalité de votre boutique. Nous apprendrons à créer un module de base dans ce tutoriel.

{{< figure align=center src="images/prestashop-module.png" alt="Module prestashop">}}

 **Prestashop **  est un logiciel de commerce électronique 100% gratuit et open source. Cela permet aux propriétaires de magasins de mettre en place facilement leur présence en ligne et de mettre à l'échelle les affaires à grande échelle. Prestashop est livré avec des fonctionnalités par défaut et vous pouvez avoir besoin de plus de fonctionnalités pour les besoins de votre entreprise occasionnellement. Le marché de Prestashop est un endroit fantastique pour trouver des fonctionnalités supplémentaires qui peuvent être utilisées pour étendre les fonctionnalités des magasins. De plus, vous pouvez trouver des modules gratuits et payants sur Marketplace. Cependant, vous pouvez également créer un module personnalisé à partir de zéro.
Nous discuterons en détail des sujets ci-dessous pour  **créer le module Prestashop ** .
  * [Exigences][1]
  * [Bases du développement des modules][2]
  * [Créez notre module Prestashop][3]
  * [Conclusion][4]

## exigences   {#req}
  * Installez Prestashop 1.6 ou plus.
  * Familier avec Prestashop.
  * Compréhension de PHP.

## bases du développement des modules   {#basics}
Avant de commencer à coder, il est vraiment important de connaître les concepts de base du développement du module  **prestashop ** . Il vous permettra de construire et de gérer rapidement votre module.
 **Configuration **  - La configuration vous permet d'enregistrer des données dans la base de données de l'atelier sans nécessiter de table spécifique au module. La table de configuration contient une liste des propriétés de valeur de clé qui peuvent être accessibles de n'importe où.
 **Hooks **  - Les crochets sont un moyen de connecter des événements de Prestashop particuliers avec votre code. Vous pouvez utiliser des crochets pour placer votre code en pages et pour des actions spécifiques comme l'envoi d'e-mails sur certains événements.
 **widgets **  - Les développeurs de modules utilisent des widgets pour afficher le contenu si nécessaire.
 **Doctrine **  - La doctrine est ORM vous permet de gérer vos données de base de données via des objets. Cela fournit une couche abstraite qui vous permet d'effectuer des actions d'insert / mise à jour avec un appel simple.

## Créez notre module Prestashop   {#create}
  * Créer un répertoire de module nommé  **MyFirstModule **  dans  **modules **  Répertoire de votre installation Prestashop. Placez tous les fichiers dans votre répertoire de module.
  * Créez un fichier principal avec le nom  **myfirstmodule.php **  et copiez le code suivant.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  * Créer  **install () **  et  **uninstall () **  Méthodes. Ajoutez les méthodes suivantes dans le fichier  **myfirstmodule.php ** .
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Appelez des méthodes spéciales pour activer nos crochets enregistrés. Nous utiliserons ces méthodes pour afficher «Hello World!» Texte aux barres latérales. Ajoutez le code suivant dans le fichier  **myfirstmodule.php ** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  * Enfin, ouvrez la section Administrateur, téléchargez et  **Installer le module Prestashop ** .

## Conclusion   {#conclusion}
Nous avons discuté des concepts de base pour construire le module  **prestashop **  dans ce tutoriel. De plus, nous avons développé un module de base qui peut être utilisé comme point de départ pour plus de modules d'avance. [contenerize.com][5] travaille toujours sur de nouveaux articles de blog de tutoriel. Pour les dernières mises à jour, veuillez rester en contact avec la catégorie [Logiciel de panier][6].

## Explorer
Vous pouvez trouver les liens suivants utiles en plus du  **Tutoriel de création du module PRESTASHOP ** .
  * [Prestashop - Logiciel de panier d'achat gratuit][7]
  * [Top 5 du logiciel de panier d'achat open source en 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
