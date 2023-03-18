---
title: "คู่มือผู้เริ่มต้นเพื่อสร้างธีม WordPress ตั้งแต่เริ่มต้น" 
seoTitle: "คู่มือผู้เริ่มต้นเพื่อสร้างธีม WordPress ตั้งแต่เริ่มต้น" 
description: "เรียนรู้วิธีสร้างธีม WordPress จากรอยขีดข่วนอย่างไม่เจ็บปวด ในบทช่วยสอนนี้เราได้อธิบายกระบวนการในขั้นตอนง่าย ๆ" 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "ขั้นตอนที่ 5: ไฟล์ styles.css" 
url: /th/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="คู่มือผู้เริ่มต้นเพื่อสร้างธีม WordPress ตั้งแต่เริ่มต้น">}}

วิธีการสร้างธีม WordPress เป็นหนึ่งในการสืบค้นชั้นนำในการค้นหาของ Google การสร้างธีม WordPress นั้นง่ายหากคุณรู้จัก HTML, CSS และ JavaScript พื้นฐาน อย่างไรก็ตามหากคุณยังใหม่กับ WordPress บทช่วยสอนนี้เหมาะสำหรับคุณ สิ่งที่คุณต้องทำคือทำตามขั้นตอนที่กล่าวถึง ดังนั้นให้อ่านคู่มือนี้และเรียนรู้วิธีสร้างธีม WordPress ตั้งแต่เริ่มต้น
  * [ข้อกำหนด] [1]
  * [คู่มือทีละขั้นตอน] [2]

### ข้อกำหนด {#Requirements}
สิ่งแรกและสำคัญที่สุดที่คุณต้องทำคือติดตั้ง WordPress WordPress เป็นที่รู้จักกันดีสำหรับความสะดวกในการติดตั้ง เป็นกระบวนการที่ง่ายและสามารถทำได้อย่างง่ายดายด้วยตัวเองโดยทำตาม [คู่มือ] [3]

### วิธีสร้างธีม WordPress; คู่มือทีละขั้นตอน {#Guide}
สำหรับธีม WordPress ทุกอย่างจะทำในไดเรกทอรี ** WP_CONTENT ** เท่านั้น เพียงทำโฟลเดอร์ย่อยธีมใหม่ในโฟลเดอร์ ** wp_content →ธีม ** สมมติว่าคุณตั้งชื่อมัน **“ CustomTheme” **
สิ่งที่สองคือการตัดสินใจเลย์เอาต์ของธีม ที่นี่การสอนกำลังแสดงเค้าโครงพื้นฐานซึ่งประกอบด้วยส่วนหัว **, พื้นที่หลัก, ส่วนท้าย, แถบด้านข้าง **
โดยพื้นฐานแล้ว WordPress ต้องการเพียง 2 ไฟล์คือ style.css และ index.php แต่สำหรับเค้าโครงนี้คุณต้องการ ** 5 ไฟล์ ** ดังนี้
  *** header.php - ** มีรหัสสำหรับส่วนส่วนหัวของชุดรูปแบบ
  *** index.php - ** มีรหัสสำหรับพื้นที่หลักและจะระบุตำแหน่งที่จะรวมไฟล์อื่น ๆ ไว้ นี่คือไฟล์หลักของธีม
  *** sidebar.php - ** มีข้อมูลเกี่ยวกับแถบด้านข้าง
  *** footer.php - ** จัดการส่วนท้าย
  *** style.css - ** รับผิดชอบในการออกแบบธีมของคุณ
  *** bootstrap.css - ** ไม่จำเป็นต้องใช้รหัส CSS แยกต่างหาก ตอบสนองสูง
  *** bootstrap.js - ** ให้ JS ของตัวเองสำหรับแถบการนำทางหรือแท็บ ฯลฯ
** bootstrap.js ** และ ** bootstrap.css ** จำเป็นต้องดาวน์โหลดจากแพ็คเกจ bootstrap และคัดลอกลงในธีม ** โฟลเดอร์ **
นี่คือขั้นตอนในการติดตามเพื่อตั้งค่าธีม

### ขั้นตอนที่ 1: ไฟล์ header.php
ใส่รหัสต่อไปนี้ในไฟล์ header.php
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
ส่วนหัวไฟล์นี้ php มีรหัสสำหรับส่วนส่วนหัวที่มีการเชื่อมโยงไฟล์ js และสไตล์ มันแสดงส่วนหัวของหน้า

### ขั้นตอนที่ 2: ไฟล์ index.php
ใส่รหัสต่อไปนี้ในไฟล์หลัก index.php
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
รหัสด้านบนแสดงเนื้อหาหลักของโพสต์แถบด้านข้างและส่วนท้าย

### ขั้นตอนที่ 3: ไฟล์ sidebar.php
เพิ่มรหัสต่อไปนี้ใน sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
ในรหัสด้านบนฟังก์ชั่น WordPress ภายในถูกเรียกให้แสดงหมวดหมู่ที่แตกต่างกันจดหมายเหตุของโพสต์

### ขั้นตอนที่ 4: footer.php ไฟล์
เพิ่มบรรทัดรหัสด้านล่างลงในไฟล์ footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## ขั้นตอนที่ 5: ไฟล์ styles.css
เพิ่มบรรทัดต่อไปนี้ในไฟล์ style.css
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
หลังจากทำตามขั้นตอนทั้งหมดข้างต้นคุณจะมีธีม WordPress ทำงานพื้นฐาน คุณสามารถแก้ไขเพิ่มเติมเพื่อให้สวยงามและเหมาะสมกับความต้องการของคุณ

### บทสรุป
ในบทช่วยสอนนี้เราได้อธิบายวิธีการสร้างธีม WordPress ในขั้นตอนที่ง่ายและง่าย หลังจากอ่านและทำตามขั้นตอนการสร้างธีม WordPress ไม่ใช่งานที่ยากอีกต่อไป แต่เห็นได้ชัดว่าบทช่วยสอนนี้ติดอยู่กับการตั้งค่าขั้นพื้นฐานมากและเพื่อปรับปรุงด้านบนคุณจะต้องเรียนรู้เพิ่มเติมเกี่ยวกับ HTML, CSS, JS และ PHP
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
