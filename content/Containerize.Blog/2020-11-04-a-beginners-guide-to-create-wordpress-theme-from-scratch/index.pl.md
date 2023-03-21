---
title: "Przewodnik dla początkujących, aby stworzyć motyw WordPress od zera" 
seoTitle: "Przewodnik dla początkujących, aby stworzyć motyw WordPress od zera" 
description: "Dowiedz się, jak bezbolesnie tworzyć motyw WordPress. W tym samouczku wyjaśniliśmy ten proces w łatwych krokach." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Krok 5: Plik styles.css" 
url: /pl/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Przewodnik dla początkujących, aby stworzyć motyw WordPress od zera">}}

Jak utworzyć motyw WordPress, należy do najważniejszych zapytań w wyszukiwarce Google. Tworzenie motywu WordPress może być proste, jeśli znasz podstawowe HTML, CSS i JavaScript. Jeśli jednak jesteś nowy w WordPress, ten samouczek jest dla Ciebie. Wszystko, co musisz zrobić, to postępować zgodnie z wymienionymi krokami. Przeczytajmy więc ten przewodnik i dowiedzmy się, jak tworzyć motyw WordPress od zera.
  * [Wymagania][1]
  * [Przewodnik po kroku][2]

### wymagania   {#Requirements}
Pierwszą i najważniejszą rzeczą, którą musisz zrobić, jest zainstalowanie WordPress. WordPress jest dobrze znany ze swojej łatwości instalacji. Jest to prosty proces i można go łatwo wykonać sam, śledząc [przewodnik][3].

### Jak tworzyć motyw WordPress; Podręcznik kroku po kroku   {#Guide}
W przypadku motywu WordPress wszystko zostanie zrobione tylko w katalogu**WP_Content**. Po prostu zrób nowy podfolder motywu w folderze**WP_Content → Motywy.**Załóżmy, że nazywasz go**„Customtheme”**.
Drugą rzeczą jest decydowanie o układzie tematu. Tutaj samouczek pokazuje podstawowy układ składający się z**nagłówka, głównego obszaru, stopki, paska bocznego**.
Zasadniczo WordPress potrzebuje tylko 2 plików, tj. Style.css i index.php. Ale w tym układzie potrzebujesz**5 plików**, w następujący sposób;
***Header.php -**zawiera kod sekcji nagłówka motywu.
***index.php -**zawiera kod głównego obszaru i określi, gdzie zostaną uwzględnione pozostałe pliki. To jest główny plik motywu.
***Sidebar.php -**zawiera informacje o pasku bocznym.
***stopa.php -**radzi sobie z sekcją stopki.
***Style.css -**Odpowiedzialny za styl motywu.
***Bootstrap.css -**Nie jest wymagany odrębny kod CSS; wysoce responsywny.
***Bootstrap.js -**zapewnia własne JS dla paska nawigacyjnego lub zakładek itp.
* * Bootstrap.js**i**bootstrap.css**należy pobrać z pakietu Bootstrap i skopiować do folderu**motyw**.
Oto kroki, które należy śledzić, aby skonfigurować motyw

### Krok 1: Plik nagłówkowy.php
Umieść następujący kod w pliku Header.php.
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
Ten plik nagłówkowy Wyświetla nagłówek strony.

### Krok 2: Plik index.php
Umieść następujący kod w głównym indeksowaniu plików.php
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
Powyższy kod wyświetla główną zawartość postu, paska bocznego i stopki.

### Krok 3: Plik boibar.php
Dodaj następujący kod w Sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
W powyższym kodzie wywoływane są wewnętrzne funkcje WordPress w celu wyświetlania różnych kategorii, archiwa postów.

### Krok 4: Plik stopki.php
Dodaj poniższe wiersze kodu do pliku stopa.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Krok 5: Plik Styles.css
Dodaj następujące wiersze do pliku style.css
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
Po wykonaniu wszystkich powyższych kroków będziesz mieć podstawowy działający motyw WordPress. Możesz go dalej zmodyfikować, aby był piękniejszy i pasuje do twoich wymagań.

### Wniosek
W tym samouczku wyjaśniliśmy, jak tworzyć motyw WordPress w prostych i łatwych krokach. Po przeczytaniu i wykonaniu kroków tworzenia motywu WordPress nie jest teraz trudniejszym zadaniem. Ale oczywiście ten samouczek trzyma się bardzo podstawowej konfiguracji i aby ulepszyć go, musisz dowiedzieć się więcej o HTML, CSS, JS i PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
