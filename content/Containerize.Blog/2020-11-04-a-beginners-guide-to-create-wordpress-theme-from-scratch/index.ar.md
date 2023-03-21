---
title: "دليل المبتدئين لإنشاء سمة WordPress من الصفر" 
seoTitle: "دليل المبتدئين لإنشاء سمة WordPress من الصفر" 
description: "تعلم كيفية إنشاء موضوع WordPress من الصفر بلا مؤلم. في هذا البرنامج التعليمي ، شرحنا العملية بخطوات سهلة." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "الخطوة 5: ملف styles.css" 
url: /ar/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="دليل المبتدئين لإنشاء سمة WordPress من الصفر">}}

كيفية إنشاء موضوع WordPress هو من بين أفضل الاستعلامات في بحث Google. يمكن أن يكون إنشاء موضوع WordPress بسيطًا إذا كنت تعرف HTML الأساسي و CSS و JavaScript. ومع ذلك ، إذا كنت جديدًا على WordPress ، فإن هذا البرنامج التعليمي يناسبك. كل ما عليك فعله هو اتباع الخطوات المذكورة. لذلك ، دعنا نقرأ هذا الدليل ونتعلم كيفية إنشاء موضوع WordPress من نقطة الصفر.
  * [المتطلبات][1]
  * [دليل خطوة بخطوة][2]

## # متطلبات   {#Requirements}
الشيء الأول والأهم الذي عليك فعله هو تثبيت WordPress. WordPress معروف بسهولة التثبيت. إنها عملية بسيطة ويمكن القيام بها بسهولة من خلال اتباع [دليل][3].

## # كيفية إنشاء موضوع WordPress ؛ دليل خطوة بخطوة   {#guide}
بالنسبة لموضوع WordPress ، سيتم إجراء كل شيء في دليل**WP_Content**فقط. ما عليك سوى جعل المجلد الفرعي الجديد موضوعًا في مجلد**wp_content → temes.**دعنا نفترض أن تسميه**"CustomTheme"**.
الشيء الثاني هو تحديد تخطيط الموضوع. هنا ، يظهر البرنامج التعليمي التصميم الأساسي الذي يتكون من**رأس ، المنطقة الرئيسية ، تذييل ، الشريط الجانبي**.
في الأساس ، يحتاج WordPress فقط إلى ملفان فقط ، أي style.css و index.php. ولكن ، بالنسبة لهذا التصميم ، تحتاج إلى**5 ملفات**، على النحو التالي ؛
***header.php -**يحتوي على رمز قسم الرأس للموضوع.
***index.php -**يحتوي على رمز المنطقة الرئيسية وسيحدد مكان تضمين الملفات الأخرى. هذا هو الملف الرئيسي للموضوع.
***sidebar.php -**يحتوي على معلومات حول الشريط الجانبي.
***footer.php -**يتولى قسم التذييل.
***style.css -**مسؤولة عن تصميم موضوعك.
***bootstrap.css -**لا يلزم رمز CSS منفصل ؛ استجابة للغاية.
***bootstrap.js -**يوفر JS الخاص به لشريط التنقل ، أو علامات التبويب ، إلخ.
* * bootstrap.js**و**bootstrap.css**يجب تنزيلها من حزمة bootstrap ونسخها في المجلد****.
فيما يلي خطوات متابعة موضوع الإعداد

## # الخطوة 1: ملف header.php
ضع الكود التالي في ملف Headerer.php.
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
يحتوي header.php هذا على الرمز الخاص بجزء الرأس الذي يرتبط فيه ملف JS و Style. يعرض رأس الصفحة.

## # الخطوة 2: ملف index.php
ضع الكود التالي في ملف الملف الرئيسي index.php
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
يعرض الرمز أعلاه المحتوى الرئيسي للنشر والشريط الجانبي وتذييل.

## # الخطوة 3: ملف sidebar.php
أضف الرمز التالي في sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
في الكود أعلاه ، يتم استدعاء وظائف WordPress الداخلية لعرض فئات مختلفة ، أرشيفات المنشورات.

## # الخطوة 4: ملف footer.php
أضف خطوط التعليمات البرمجية أدناه إلى ملف footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## الخطوة 5: ملف STYLES.CSS
أضف الأسطر التالية إلى ملف style.css
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
بعد اتباع جميع الخطوات المذكورة أعلاه ، سيكون لديك موضوع WordPress عمل أساسي. يمكنك مزيد من تعديلها لجعلها أكثر جمالا وتناسب متطلباتك.

## # خاتمة
في هذا البرنامج التعليمي ، شرحنا كيفية إنشاء موضوع WordPress في خطوات بسيطة وسهلة. بعد قراءة الخطوات واتباعها ، ليست مهمة WordPress مهمة أكثر صعوبة الآن. ولكن من الواضح أن هذا البرنامج التعليمي يتصرف بالإعداد الأساسي للغاية ولتعزيزه ، يجب عليك معرفة المزيد حول HTML و CSS و JS و PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
