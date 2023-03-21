---
title: "Руководство для начинающих, чтобы создать тему WordPress с нуля" 
seoTitle: "Руководство для начинающих, чтобы создать тему WordPress с нуля" 
description: "Узнайте, как создавать тему WordPress из безболезной. В этом уроке мы объяснили процесс в простых шагах." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Шаг 5: файл styles.css" 
url: /ru/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Руководство для начинающих, чтобы создать тему WordPress с нуля">}}

Как создать тему WordPress является одним из лучших запросов в поиске Google. Создание темы WordPress может быть простым, если вы знаете основные HTML, CSS и JavaScript. Однако, если вы новичок в WordPress, то этот урок для вас. Все, что вам нужно сделать, это выполнить упомянутые шаги. Итак, давайте прочитаем это руководство и узнаем, как создавать тему WordPress с нуля.
  * [Требования][1]
  * [Пошаговое руководство][2]

## # Требования   {#Requirements}
Первое и самое важное, что вам нужно сделать, это установить WordPress. WordPress хорошо известен своей простотой установки. Это простой процесс, и он может быть легко выполнен самостоятельно, следуя [Руководству][3].

## # Как создать тему WordPress; Пошаговое руководство   {#Guide}
Для темы WordPress все будет сделано только в каталоге **WP_Content **. Просто сделайте новую подпалку темы в папке  **WP_Content → Themes. **  Давайте предположим, что вы назовите ее  **«Customtheme»**  .
Второе - решить макет темы. Здесь учебник показывает базовую планировку, состоящую из **заголовка, основной области, нижней части, боковой панели** .
По сути, WordPress требует всего 2 файла, то есть style.css и index.php. Но для этого макета вам нужно **5 файлов** , следующим образом;
  ***header.php -**  Содержит код для раздела заголовка темы.
  ***index.php -**  содержит код для основной области и укажет, где будут включены другие файлы. Это основной файл темы.
  ***sidebar.php -**  содержит информацию о боковой панели.
  ***cool.php -**  обрабатывает раздел нижней колонны.
  ***style.css -**  Отвечает за стиль вашей темы.
  ***bootstrap.css -**  Не требуется отдельный код CSS; очень отзывчивый.
  ***bootstrap.js -**  предоставляет свой собственный JS для навигационной панели или вкладок и т. Д.
**bootstrap.js  **и **  bootstrap.css  **нужно загрузить из пакета Bootstrap и скопировать в папку ** ** .
Вот шаги, чтобы выполнить тему настройки

## # Шаг 1: файл header.php
Поместите следующий код в файл header.php.
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
Этот файл header.php содержит код для части заголовка, в которой связан файл JS и стиля. Он отображает заголовок страницы.

## # Шаг 2: файл index.php
Поместите следующий код в основной файл index.php
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
Приведенный выше код отображает основное содержание сообщения, боковой панели и нижнего колонтитула.

## # Шаг 3: файл sidebar.php
Добавьте следующий код в sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
В приведенном выше коде функции внутренних WordPress вызываются для отображения различных категорий, архивов постов.

## # Шаг 4: Файл файла mooter.php
Добавьте приведенные ниже строки кода в файл cooler.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Шаг 5: файл styles.css
Добавьте следующие строки в файл style.css
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
После выполнения всех шагов выше, у вас будет основная рабочая тема WordPress. Вы можете дополнительно изменить его, чтобы сделать его более красивым и подходить для ваших требований.

## # Заключение
В этом уроке мы объяснили, как создать тему WordPress в простых и легких шагах. После прочтения и выполнения шагов, создавая тему WordPress, сейчас не более сложная задача. Но, очевидно, этот учебник придерживается очень базовой настройки, и для улучшения его необходимо узнать больше о HTML, CSS, JS и PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
