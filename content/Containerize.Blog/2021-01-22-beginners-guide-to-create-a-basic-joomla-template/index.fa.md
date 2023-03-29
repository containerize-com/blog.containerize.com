---
title: "راهنمای مبتدی برای ایجاد یک الگوی اساسی جوملا" 
seoTitle: "راهنمای مبتدی برای ایجاد یک الگوی اساسی جوملا" 
description: "جوملا یک سیستم مدیریت محتوای منبع باز است. در این آموزش ، گام به گام نحوه ایجاد یک الگوی جوملا را توضیح خواهیم داد." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "جوملا یکی از محبوب ترین سیستم های مدیریت محتوای منبع باز است. این آموزش شما را در مراحل لازم برای ایجاد یک الگوی جوملا از ابتدا طی می کند." 
url: /fa/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## جوملا یکی از محبوب ترین سیستم های مدیریت محتوای منبع باز است. این آموزش شما را در مراحل لازم برای ایجاد یک الگوی جوملا از ابتدا طی می کند.

{{< figure align=center src="images/joomla-templates-2.png" alt="الگوی اصلی جوملا">}}

در این عصر دیجیتال ، یک سیستم مدیریت محتوا یک ضرورت اساسی برای هر مشاغل برای تمام نیازهای ایجاد محتوای آنها است. و تعدادی از نرم افزار منبع باز و همچنین CMS با پرداخت موجود در بازار وجود دارد. ما همچنین [ذکر شده][1] برخی از نرم افزار برتر مدیریت محتوای منبع باز برای مشاغل را داریم. جوملا یکی از محبوب ترین نرم افزار CMS با منبع باز است و در این آموزش ما شما را به مرحله به مرحله طی می کنیم و نحوه ایجاد یک الگوی جوملا را از ابتدا توضیح خواهیم داد. بنابراین بیایید شروع کنیم!
 **توجه: ما فرض می کنیم که شما نسخه جوملا 2.5 را نصب کرده اید** 
 **[ساختار دایرکتوری تنظیم][2]** 
*  **[ایجاد یک پرونده اصلی templeateTails.xml][3]**  
*  **[ایجاد یک index.php اصلی][4]**  
*  **[الگوی کشف و نصب][5]**  
*  **[بسته الگو][6]**  
*  **[نتیجه گیری][7]**  

## ساختار دایرکتوری تنظیم {#setup}

برای ایجاد یک الگوی بسیار اساسی جوملا ابتدا ، یک پوشه جدید در پوشه قالب ایجاد کنید. پوشه را هرچه می خواهید با الگوی خود بنامید ، به عنوان مثال "  **MyNewTemplate**  " نامگذاری کنید.
با استفاده از ویرایشگر متن مورد علاقه خود ، پرونده ها  **index.php** و  **templeateetails.xml**  را ایجاد کنید. برای مدیریت تصاویر و برگه های سبک خود ، 2 پوشه جدید به نام  **تصاویر**  و  **CSS**  درست کنید. در داخل پوشه  **CSS**  پرونده ای به نام **template.css**  ایجاد کنید.
ساختار دایرکتوری شما چیزی شبیه به این خواهد بود

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="ساختار فهرست الگوی جوملا">}}


## یک فایل اصلی templeateTails.xml ایجاد کنید {#xml}

پرونده  **templeateTails.xml**  تمام ابرداده در مورد الگوی شما را در خود جای داده است. و ، این پرونده بدون آن ضروری است ، الگوی شما توسط جوملا دیده نمی شود!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
محتوای الگوهای .xml خود توضیحی است. فقط می توانید محتویات را اصلاح کنید تا بیت های لازم را اصلاح کنید.
موقعیت ها را همانطور که هست ترک کنید - این یک مجموعه مشترک است ، بنابراین شما قادر خواهید بود به راحتی از الگوهای استاندارد تغییر دهید.

## یک پرونده اصلی index.php ایجاد کنید {#php}

index.php به پرونده اصلی بوت استرپ هر صفحه تبدیل می شود که جوملا! تحویل می دهد در این صفحه کد استخوان های برهنه آماده برای برش و چسباندن به طراحی خود شما نشان می دهد.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## الگوی را کشف و نصب کنید {#install}

شما ابتدا باید به جوملا بگویید! که شما یک الگوی جدید ایجاد کرده اید. این ویژگی Discover Extensions نامیده می شود و از طریق قابل دسترسی است
```
Extensions -> Extension Manager -> Discover
```
برای کشف الگوی خود ، روی دکمه Discover کلیک کنید ، سپس آن را انتخاب کرده و برای نصب آن روی نصب کلیک کنید. اکنون الگوی شما باید در Manager Template (سبک ها) نشان داده شود ، از طریق
```
Extensions -> Template Manager
```

## بسته بندی الگوی {#packge}

یک دایرکتوری از بین رفته با چندین پرونده روش خوبی برای توزیع نیست. بنابراین ، به خاطر توزیع ، باید بسته ای از الگوی خود را ایجاد کنیم. این بسته می تواند در قالب zip (با پسوند .zip) باشد.
اگر الگوی شما در یک MyTemplate Directory قرار دارد/ سپس می توانید بسته را به آن فهرست متصل کنید و از دستوراتی مانند:
```
zip -r ..\mytemplate.zip .
```

## نتیجه {#conclusion}

در این مقاله ، ما در مورد الگوی جوملا آموختیم. ما قدم به قدم در مورد چگونگی ایجاد یک الگوی جوملا رفتیم. این فقط یک آموزش بسیار اساسی برای شروع با ایجاد الگو است. البته ، شما می توانید بر اساس این ساختار برهنه ، یک الگوی بسیار سفارشی و پیشرفته بسازید.

## صفحات محصول مربوطه
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [راهنمای توسعه الگوی جوملا برای مبتدیان][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
