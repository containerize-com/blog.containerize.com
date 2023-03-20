---
title: "Guide des débutants pour développer un plugin phplist" 
seoTitle: "Guide des débutants pour développer un plugin phplist" 
description: "Rendez-vous familiarisez avec l'architecture du plugin PHPLIST et découvrez comment créer un plugin PHPLIST de base. Cette directive vous aide à personnaliser et à améliorer les fonctionnalités PHPLIST." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Les plugins PHPLIST permet aux développeurs de personnaliser le produit et d'améliorer ses fonctionnalités. Dans cet article, nous apprendrons à créer un plugin de base dans PHPLIST." 
url: /fr/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Les plugins PHPLIST permet aux développeurs de personnaliser le produit et d'améliorer sa fonctionnalité. Dans cet article, nous apprendrons à créer un plugin de base dans PHPLIST.

{{< figure align=center src="images/phplist-plugin.png" alt="plugin phplist">}}

La prise en charge du plugin est une partie essentielle du logiciel, en particulier pour les systèmes open source. Cela permet aux développeurs de créer un nouveau plugin pour étendre les fonctionnalités. ** PHPLIST ** Encourage le développement de plugins afin que les développeurs puissent les utiliser pour ajouter de nouvelles fonctionnalités en fonction de leurs besoins commerciaux. Un plugin phplist est une collection de code autonome contenant du code pour PHP, HTML, CSS et JavaScript.
Les applications prennent en charge les plugins pour de nombreuses raisons et certaines d'entre elles sont:
  * Ne modifiez pas les fonctionnalités de base.
  * Permettez aux développeurs de créer de nouvelles fonctionnalités.
  * Réduisez la taille du logiciel.
Nous discuterons des sujets ci-dessous en détail dans ce tutoriel.
  * [** Prérequis **][2]
  * [** Bases du développement du plugin PHPLIST **][3]
  * [** Créer notre plugin phplist **][4]
  * [** Conclusion **][5]

## Prérequis {#req}
  * Dernière version de PHPLIST.
  * Familier avec phplist et php.
  * Compréhension de HTML / CSS et JavaScript.

## bases du développement du plugin phplist {#basics}
Les méthodes suivantes amélioreront les fonctionnalités d'un plugin phplist.
  * ** Pages ** - Créez des pages pour des activités telles que les rapports, les statistiques, pour afficher des informations et bien d'autres.
  * ** Hooks ** - Cela vous permet d'invoquer des fonctionnalités dans des endroits spécifiques.
Il existe trois types de plugins spéciaux pour phplist. Un plugin de chaque type peut être activé uniquement.
  * ** Plugin de l'éditeur ** - permet d'implémenter l'éditeur pour l'édition de campagnes ou de modèles.
  * ** Plugin d'authentification ** - Cela permet d'ajouter un nouveau mécanisme pour l'authentification des administrateurs.
  * ** Plugin de l'expéditeur par e-mail ** - Permet d'implémenter une nouvelle méthode d'envoi d'e-mails au lieu des fonctionnalités intégrées.

## Créer notre plugin phplist {#create}
Tout d'abord, vous devez prolonger la classe Core PhplistPlugin. Pour créer un plugin, vous devez créer un répertoire nommé «Helloworld» sous Plugin \ _rootdir et créer un fichier nommé helloworld.php au répertoire des plugins. Vous pouvez vérifier le fichier config.php pour trouver la valeur de la variable plugin \ _rootdir. Copiez ci-dessous le code dans le fichier helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Vous devez définir $ coderoot dans le répertoire de votre plugin. Pour vous assurer que le plugin est correctement initialisé, vous devez appeler le constructeur parent. Créez un fichier main.php et placez-le dans votre répertoire de plugin. Copiez le code suivant.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Placez le fichier de classe Helloworld.php et votre répertoire de plugin dans le plugin rootdir pour installer le plugin. Pour activer un plugin, cliquez sur l'onglet Configuration dans la barre de menu, puis cliquez sur les plugins Gérer. La page du plugin vous affichera une liste des plugins disponibles et vous pouvez activer / désactiver votre formulaire de plugin là-bas.
Vous pouvez accéder à votre plugin par l'URL suivante comme http://example.com/admin/?page=main&pi=helowlorld. Remplacez l'exemple.com par votre nom de domaine.

## Conclusion {#con}
Nous avons appris les bases de ** PHPLIST PLUGIN ** Development et créé un exemple de plugin. En tant que point de départ, vous pouvez suivre cette directive et explorer davantage le développement du plugin pour améliorer la fonctionnalité.
Enfin, [** contenerize.com **][6] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [** newsletters **][7] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents.
  * [** phplist **][8]
  * [** Mailtrain **][9]
  * [** listMonk **][10]
  * [** MoonMail **][11]
  * [** Mailman **][12]
  * [** Top 5 du logiciel de newsletter open source en 2021 **][13]
  * [** Comment configurer l'application multi-locataire dans phplist **][14]
  * [** Comment créer et envoyer une newsletter à l'aide de phplist **][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
