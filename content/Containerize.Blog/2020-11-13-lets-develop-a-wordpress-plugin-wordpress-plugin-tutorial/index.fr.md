---
title: "Développer un plugin WordPress | Tutoriel de plugin wordpress" 
seoTitle: "Développer un plugin WordPress | Tutoriel de plugin wordpress" 
description: "Intéressé par le développement des plugins WordPress? Suivez ce tutoriel de plugin WordPress qui décrit les étapes complètes pour créer un plugin WordPress de base." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "Le plugin WordPress est un module que vous activez sur votre site Web pour fournir une série de fonctionnalités ou d'éléments. Ces plugins sont optimisés SEO et offrent l'automatisation." 
url: /fr/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## Le plugin WordPress est un module que vous activez sur votre site Web pour fournir une série de fonctionnalités ou d'éléments. Ces plugins sont optimisés SEO et offrent l'automatisation.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="tutoriel de plugin wordpress">}}


## Aperçu
WordPress est une plate-forme de blogging open source de niveau d'entreprise. Un plugin ** wordpress ** est un ensemble autonome de code qui améliore et étend les fonctionnalités de WordPress. En utilisant n'importe quelle combinaison de PHP, HTML, CSS, JavaScript / jQuery. Un plugin peut ajouter de nouvelles fonctionnalités à n'importe quelle partie de votre site Web.
La fonctionnalité que vous pouvez ajouter à votre site Web dépend de ce que chaque plugin spécifique a été créé. Un plugin WordPress peut être développé pour faire n'importe quoi. D'une petite tâche à une application complète qui effectue un certain nombre d'opérations et a ses propres interfaces. Les plugins sont différents de votre thème et fonctionnent de manière indépendante, en utilisant des crochets, des filtres, des codes, des widgets et du code personnalisé pour effectuer leurs fonctionnalités.
Dans ce tutoriel de plugin WordPress, nous apprendrons à créer notre premier plugin WordPress. La raison la plus importante de créer un plugin est qu'elle vous permet de séparer votre propre code du code de base WordPress.
  * ** [exigences] [1] **
  * ** [Bases du développement des plugins] [2] **
  * ** [Comment créer un plugin WP?] [3] **
  * ** [Conclusion] [4] **

## exigences {#Requirements}
  * Dernière version de WordPress
  * Compréhension de PHP / MySQL
  * Compréhension de HTML / CSS et JavaScript

## bases du développement des plugins {#basics}
Prenons un moment pour parler de certains aspects clés du développement des plugins. Une solide compréhension du fonctionnement de ces concepts vous aidera à créer des fonctionnalités faciles à utiliser et maintenables.

### Actions
** Les crochets d'action ** sont un outil très utile dans ** WordPress ** ** Plugin ** et ils sont utilisés pour effectuer des fonctions (** Actions **) dans des lieux spécifiques d'un thème ou d'un plugin. WordPress possède des dizaines d'actions définies tout au long de sa fonctionnalité principale, chaque action composée d'un nom unique. Pour plus de détails [lire] [5].

Filtres ###
Un filtre WordPress est un crochet qui accepte une variable (ou une série de variables) et les renvoie après avoir été modifiés. Ces filtres sont souvent utilisés afin que vous ayez un moyen de manipuler les informations par défaut. Pour plus de détails [lire] [6].

### shortcodes
Les raccourcis sont des macros qui peuvent être utilisées pour effectuer des interactions dynamiques avec le contenu. c'est-à-dire la création d'une galerie à partir d'images jointes au post ou rendu une vidéo. En conséquence, ils sont un moyen précieux de garder le contenu propre et sémantique tout en permettant aux utilisateurs finaux une certaine capacité à modifier par programme la présentation de leur contenu. Pour plus de détails [lire] [7].

Widgets ###
Les widgets sont importants car ils vous donnent un autre moyen d'exécuter le code de votre plugin tout en fournissant une interface facile à utiliser. Car la plupart des thèmes soutiendront une ou plusieurs barres latérales; L'ajout de vos propres widgets vous donnera un accès rapide pour afficher vos informations dans le thème.

## ** Comment créer un plugin WP? ** {#create}
Dans cette section du tutoriel de plugin WordPress, il vous suffit de créer un dossier, puis de créer un seul fichier avec une ligne de contenu. Accédez au dossier ** WP-CONTENT / PLINGINS ** et créez un nouveau dossier nommé ** MyTestPlugin **. À l'intérieur de ce nouveau dossier, créez un fichier nommé ** mytestplugin.php **. Ouvrez le fichier dans un éditeur de texte et collez les informations suivantes:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Maintenant, vous pouvez aller dans l'arrière pour activer votre plugin. C’est tout, bien que ce plugin ne fasse rien. Mais c'est un plugin actif et fonctionnel. La meilleure pratique lors du développement d'un plugin est de séparer soigneusement votre code en fichiers et dossiers appropriés.
Pour démontrer, ajoutons des fonctionnalités à notre plugin de test qui suit la popularité de nos articles en stockant le nombre de fois où chaque message a été visualisé.

### Stockage des pages vues
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Jusqu'à présent, tout va bien dans ce tutoriel de plugin WordPress. Mais cette fonction n'est jamais appelée, donc elle ne sera pas réellement utilisée. C'est là que les crochets entrent en jeu. Vous pouvez entrer dans les fichiers de votre thème et appeler la fonction manuellement à partir de là. Mais alors vous perdriez cette fonctionnalité si vous modifiiez le thème, battant ainsi le but entier. Un crochet, nommé ** wp_head **, qui s'exécute juste avant que la balise ne soit présente dans la plupart des thèmes, nous pouvons donc simplement définir notre fonction pour s'exécuter chaque fois que ** WP_head ** s'exécute, comme ainsi:
```
add_action("wp_head", "add_page_views");
```

### montrant les pages vues
Nous allons maintenant créer une autre fonction qui renvoie les vues de pages que nous avons déjà stockées dans la fonction ci-dessus. Jetons un coup d'œil au code:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Jusqu'à présent, nous venons de récupérer le nombre de vues. Maintenant, montrons-le. Vous pensez peut-être que cela doit être complexe. Mais c'est très simple comme ceci:
```
echo get_page_views() . “view(s)”
```

## Conclusion {#conclusion}
Ceci est la fin de ce tutoriel de plugin WordPress. En suivant cet article et en utilisant seulement une poignée de fonctions, nous avons créé un plugin de base pour suivre nos articles les plus populaires. Nous pouvons beaucoup l'améliorer, mais le but était simplement de vous mettre à l'aise avec les bases. De plus, en apprenant certains modèles de développement WordPress (plugins, crochets, etc.), vous acquérez également des compétences qui vous serviront également dans des environnements non mot-mot. Il existe de nombreux autres articles de blog liés aux plates-formes de blogs open source et aux CMS open source. que vous pouvez trouver dans la section Explorer ci-dessous. Ce billet de blog peut vraiment vous aider si vous cherchez à déployer une plateforme de blogs open source pour votre entreprise.
Enfin, [contenerize.com] [8] écrit des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec les catégories [Blogging] [9] et [Business Intelligence Software] [10] pour les nouvelles et les mises à jour régulières

## Explorer
  * [Comment installer Matomo pour WordPress | Tutoriel WordPress] [11]
  * [Boostez vos prospects avec l'intégration WordPress CiviCRM gratuite] [12]
  * [Comment installer le plugin dans WordPress | Forum de vanille] [13]
  * [Joomla vs Drupal | Comparaison CMS en 2021] [14]
  * [Choses à revoir avant d'opter les logiciels open source en 2021] [15]
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
