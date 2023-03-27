---
title: "راهنمای مبتدیان برای ایجاد موضوع وردپرس از ابتدا" 
seoTitle: "راهنمای مبتدیان برای ایجاد موضوع وردپرس از ابتدا" 
description: "بیاموزید که چگونه موضوع وردپرس را از خراش بدون درد ایجاد کنید. در این آموزش ما این روند را در مراحل آسان توضیح داده ایم." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "مرحله 5: پرونده styles.css" 
url: /fa/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="راهنمای مبتدیان برای ایجاد موضوع وردپرس از ابتدا">}}

نحوه ایجاد موضوع وردپرس جزء بهترین نمایش داده شدگان در جستجوی Google است. اگر می دانید HTML اساسی ، CSS و JavaScript ایجاد یک موضوع WordPress می تواند ساده باشد. با این حال ، اگر تازه وارد وردپرس هستید ، این آموزش برای شما مناسب است. تمام کاری که شما باید انجام دهید این است که مراحل ذکر شده را دنبال کنید. بنابراین ، بیایید این راهنما را بخوانیم و یاد بگیریم که چگونه وردپرس را از ابتدا ایجاد کنیم.
  * [الزامات][1]
  * [راهنمای گام به گام][2]


### الزامات {#requirements}

اول و مهمترین کاری که شما باید انجام دهید این است که وردپرس را نصب کنید. وردپرس به دلیل سهولت در نصب مشهور است. این یک فرآیند ساده است و با پیروی از [راهنمای][3] می توانید به راحتی توسط خودتان انجام دهید.


### نحوه ایجاد موضوع وردپرس ؛ راهنمای گام به گام {#guide}

برای موضوع وردپرس ، همه چیز فقط در فهرست  **wp_content** انجام می شود. فقط یک زیر پوشه موضوع جدید را در پوشه  **WP_CONTENT → THEMES ایجاد کنید.**  بگذارید فرض کنیم شما آن را نامگذاری کنید **"سفارشی"**  .
نکته دوم تصمیم گیری در مورد طرح موضوع است. در اینجا ، این آموزش طرح اصلی متشکل از هدر  **، منطقه اصلی ، پاورقی ، نوار کناری**  را نشان می دهد.
در اصل ، وردپرس فقط به 2 پرونده نیاز دارد. اما ، برای این طرح ، به  **5 پرونده**  نیاز دارید ، به شرح زیر ؛
*  **header.php -**  حاوی کد برای بخش هدر موضوع است.
 **index.php -** حاوی کد برای منطقه اصلی است و مشخص می کند که سایر پرونده ها در کجا گنجانده شده اند. این پرونده اصلی موضوع است.
 **Sidebar.php -** حاوی اطلاعات مربوط به نوار کناری است.
*  **pooter.php -**  بخش پاورقی را کنترل می کند.
*  **style.css -**  مسئول یک ظاهر طراحی شده موضوع شما.
*  **bootstrap.css -**  هیچ کد CSS جداگانه ای لازم نیست. بسیار پاسخگو
*  **bootstrap.js -**  JS خود را برای نوار ناوبری ، یا زبانه ها و غیره فراهم می کند.
 **bootstrap.js** و **bootstrap.css** باید از بسته bootstrap بارگیری شود و در پوشه **موضوع** کپی شود.
در اینجا مراحل دنبال کردن موضوع تنظیم شده است

### مرحله 1: پرونده header.php
کد زیر را در پرونده header.php قرار دهید.
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
این پرونده header.php حاوی کد مربوط به قسمت هدر است که در آن پرونده JS و Style در ارتباط است. این عنوان صفحه را نشان می دهد.

### مرحله 2: index.php پرونده
کد زیر را در index.php اصلی پرونده قرار دهید
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
کد فوق محتوای اصلی پست ، نوار کناری و پاورقی را نشان می دهد.

### مرحله 3: پرونده sidebar.php
کد زیر را در sidebar.php اضافه کنید
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
در کد فوق ، توابع داخلی وردپرس برای نمایش دسته های مختلف ، بایگانی پست ها فراخوانی می شود.

### مرحله 4: پرونده pooter.php
خطوط کد زیر را به پرونده pooter.php اضافه کنید:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## مرحله 5: پرونده styles.css
خطوط زیر را به پرونده style.css اضافه کنید
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
پس از دنبال کردن تمام مراحل فوق ، یک موضوع اساسی وردپرس کار خواهید داشت. شما می توانید آن را بیشتر اصلاح کنید تا آن را زیباتر و متناسب با نیازهای خود باشد.

### نتیجه
در این آموزش نحوه ایجاد موضوع وردپرس را در مراحل ساده و آسان توضیح داده ایم. پس از خواندن و پیروی از مراحل ایجاد یک موضوع وردپرس اکنون کار دشوارتر نیست. اما ، بدیهی است که این آموزش به تنظیمات بسیار اساسی می چسبد و برای پیشرفت در بالای آن باید در مورد HTML ، CSS ، JS و PHP اطلاعات بیشتری کسب کنید.



 [1]: #requirements
 [2]: #guide
 [3]: https://products.containerize.com/blogging/wordpress
