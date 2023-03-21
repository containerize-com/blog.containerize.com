---
title: "Un guide des débutants pour créer un thème WordPress à partir de zéro" 
seoTitle: "Un guide des débutants pour créer un thème WordPress à partir de zéro" 
description: "Apprenez à créer un thème WordPress à partir de zéro sans douleur. Dans ce tutoriel, nous avons expliqué le processus en étapes faciles." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Étape 5: fichier de styles.css" 
url: /fr/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Un guide des débutants pour créer un thème WordPress à partir de zéro">}}

Comment créer le thème WordPress fait partie des principales requêtes de Google Search. La création d'un thème WordPress peut être simple si vous connaissez HTML, CSS et JavaScript de base. Cependant, si vous êtes nouveau sur WordPress, ce tutoriel est pour vous. Tout ce que vous avez à faire est de suivre les étapes mentionnées. Alors, lisons ce guide et apprenons à créer un thème WordPress à partir de zéro.
  * [Exigences][1]
  * [Guide étape par étape][2]

### exigences   {#Requirements}
La première et la plus importante que vous devez faire est d'installer WordPress. WordPress est bien connu pour sa facilité d'installation. C'est un processus simple et peut être fait facilement par vous-même en suivant le [guide][3].

### Comment créer un thème WordPress; Guide étape par étape   {#guide}
Pour le thème WordPress, tout sera fait dans le répertoire **wp_content  **uniquement. Faites simplement un nouveau sous-dossier de thème dans le dossier **  wp_content → thèmes.  **Supposons que vous l'appelez **  "CustomTheme"** .
La deuxième chose est de décider de la mise en page du thème. Ici, le tutoriel montre la disposition de base composée de **en-tête, zone principale, pied de page, barre latérale** .
Fondamentalement, WordPress n'a besoin que de 2 fichiers, c'est-à-dire Style.css et index.php. Mais, pour cette mise en page, vous avez besoin de **5 fichiers** , comme suit;
  * **header.php -**  contient le code de la section d'en-tête du thème.
  * **index.php -**  contient le code de la zone principale et spécifiera où les autres fichiers seront inclus. Ceci est le fichier principal du thème.
  * **Sidebar.php -**  contient les informations sur la barre latérale.
  * **footter.php -**  gère la section de pied de page.
  * **style.css -**  Responsable du style de votre thème.
  * **bootstrap.css -**  Aucun code CSS séparé n'est requis; Très réactif.
  * **bootstrap.js -**  fournit son propre js pour la barre de navigation ou les onglets, etc.
**bootstrap.js  **et **  bootstrap.css  **doit être téléchargé à partir du package bootstrap et copié dans le dossier **  thème** .
Voici les étapes à suivre pour configurer le thème

### Étape 1: fichier en tête.php
Mettez le code suivant dans le fichier en-tête.php.
```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```
Ce fichier header.php contient le code de la partie d'en-tête dans laquelle le fichier JS et Style est lié. Il affiche l'en-tête de la page.

### Étape 2: fichier index.php
Mettez le code suivant dans le fichier principal index.php
```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```
Le code ci-dessus affiche le contenu principal de la publication, de la barre latérale et du pied de page.

### Étape 3: Fichier Sidebar.php
Ajouter le code suivant dans la barre latérale.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Dans le code ci-dessus, les fonctions WordPress internes sont appelées pour afficher différentes catégories, archives de publications.

### Étape 4: fichier de pied.php
Ajoutez les lignes de code ci-dessous dans le fichier Footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Étape 5: fichier styles.css
Ajoutez les lignes suivantes dans le fichier style.css
```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```
Après avoir suivi toutes les étapes ci-dessus, vous aurez un thème WordPress de base. Vous pouvez davantage le modifier pour le rendre plus beau et adapté à vos besoins.

### Conclusion
Dans ce tutoriel, nous avons expliqué comment créer un thème WordPress en étapes simples et faciles. Après avoir lu et suivi les étapes, la création d'un thème WordPress n'est plus difficile maintenant. Mais, évidemment, ce tutoriel vous convient à une configuration très basique et à améliorer le dessus, vous devrez en savoir plus sur HTML, CSS, JS et PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
