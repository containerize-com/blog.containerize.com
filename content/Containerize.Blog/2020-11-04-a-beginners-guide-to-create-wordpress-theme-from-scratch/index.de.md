---
title: "Ein Anfängerleitfaden zum Erstellen von WordPress -Thema von Grund auf neu" 
seoTitle: "Ein Anfängerleitfaden zum Erstellen von WordPress -Thema von Grund auf neu" 
description: "Erfahren Sie, wie Sie WordPress -Thema von Grund auf schmerzlos erstellen. In diesem Tutorial haben wir den Prozess in einfachen Schritten erläutert." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Schritt 5: styles.css -Datei" 
url: /de/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Ein Anfängerleitfaden zum Erstellen von WordPress -Thema von Grund auf neu">}}

So erstellen Sie das WordPress -Thema unter den Top -Abfragen in der Google -Suche. Das Erstellen eines WordPress -Themas kann einfach sein, wenn Sie grundlegende HTML, CSS und JavaScript kennen. Wenn Sie jedoch neu bei WordPress sind, ist dieses Tutorial genau das Richtige für Sie. Alles, was Sie tun müssen, ist die genannten Schritte zu befolgen. Lassen Sie uns diesen Leitfaden lesen und lernen, wie Sie WordPress -Thema von Grund auf neu erstellen.
  * [Anforderungen][1]
  * [Schritt -für -Schritt -Handbuch][2]


### Anforderungen {#requirements}

Erstens und wichtigste, was Sie tun müssen, ist, WordPress zu installieren. WordPress ist für die einfache Installation bekannt. Es ist ein einfacher Prozess und kann einfach von sich selbst durch die [Handbuch][3] durchgeführt werden.


### Wie man WordPress -Thema erstellt; Schritt für Schritt Anleitung {#guide}

Für WordPress -Thema wird alles nur im Verzeichnis  **wp_content**  erledigt. Machen Sie einfach einen neuen Themenunterordner im Ordner**wp_content → Themes.
Die zweite Sache ist, das Layout des Themas zu entscheiden. Hier zeigt das Tutorial das grundlegende Layout aus  **Header, Hauptbereich, Fußzeile, Seitenleiste**  .
Grundsätzlich benötigt WordPress nur 2 Dateien, d. H. Style.css und index.php. Für dieses Layout benötigen Sie jedoch wie folgt  **5 Dateien**  ;
*  **Header.php -**  Enthält den Code für den Header -Abschnitt des Themas.
*  **index.php -**  enthält den Code für den Hauptbereich und gibt an, wo die anderen Dateien enthalten sind. Dies ist die Hauptdatei des Themas.
*  **Sidebar.php -**  Enthält die Informationen über die Seitenleiste.
*  **footer.php -**  behandelt den Fußzeilenabschnitt.
*  **style.css -**  Verantwortlich für das Styling Ihres Themas.
*  **Bootstrap.css -**  Es ist kein separater CSS -Code erforderlich; sehr reaktionsschnell.
*  **bootstrap.js -**  stellt seine eigenen JS für die Navigationsleiste oder Registerkarten usw. zur Verfügung.
 **bootstrap.js** und** bootstrap.css
Hier sind die Schritte, die zum Einrichten von Thema folgen,

### Schritt 1: Header.php -Datei
Geben Sie den folgenden Code in Header.php -Datei ein.
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
Diese Datei Header.php enthält den Code für den Header -Teil, in dem die JS- und Style -Datei verknüpft ist. Es zeigt den Header der Seite an.

### Schritt 2: Index.php Datei
Setzen Sie den folgenden Code in den Hauptdatei index.php ein
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
Der obige Code zeigt den Hauptinhalt der Post, der Seitenleiste und der Fußzeile an.

### Schritt 3: SideBar.php -Datei
Fügen Sie den folgenden Code in SideBar.php hinzu
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Im obigen Code werden interne WordPress -Funktionen aufgerufen, um verschiedene Kategorien und Archive der Beiträge anzuzeigen.

### Schritt 4: footer.php -Datei
Fügen Sie die folgenden Codezeilen der Datei foote.php hinzu:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Schritt 5: styles.css -Datei
Fügen Sie der Datei style.css die folgenden Zeilen hinzu
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
Nachdem Sie alle oben genannten Schritte befolgt haben, haben Sie ein grundlegendes WordPress -Thema. Sie können es weiter ändern, um es schöner zu machen und für Ihre Anforderungen zu passen.

### Abschluss
In diesem Tutorial haben wir erklärt, wie man WordPress -Thema in einfachen und einfachen Schritten erstellt. Nach dem Lesen und Ausführen der Schritte ist das Erstellen eines WordPress -Themas jetzt keine schwierigere Aufgabe. Offensichtlich bleibt dieses Tutorial bei sehr einfachem Setup und um darüber zu verbessern, dass Sie mehr über HTML, CSS, JS und PHP erfahren müssen.



 [1]: #requirements
 [2]: #guide
 [3]: https://products.containerize.com/blogging/wordpress
