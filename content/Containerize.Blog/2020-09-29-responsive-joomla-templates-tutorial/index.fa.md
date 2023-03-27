---
title: "راهنمای توسعه الگوی جوملا برای مبتدیان" 
seoTitle: "راهنمای توسعه الگوی جوملا برای مبتدیان" 
description: "توسعه الگوی جوملا ، نحوه تنظیم طرح های پاسخگو برای موارد مختلف استفاده را بیاموزید. مجموعه ای از پرونده هایی که لایه طراحی یک وب سایت تجاری را تعریف می کنند." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "الگوهای بسیار حرفه ای و قابل تنظیم جوملا را بسازید که مجموعه ای از ویژگی ها مانند طرح های رنگی چند زبانه ، SEO / کاربر پسند و غنی را ارائه می دهد." 
url: /fa/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## قالب های جوملا بسیار حرفه ای و قابل تنظیم را بسازید که مجموعه ای از ویژگی ها مانند طرح های رنگی چند زبانه ، سئو / کاربر پسند و غنی را ارائه می دهد. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="توسعه الگوی جوملا">}}


## بررسی اجمالی
یک وب سایت تجاری به خوبی طراحی شده نقش مهمی را برای آوردن و حفظ بازدید کنندگان با سهولت ناوبری به آنها نشان می دهد. **کامل جوملا** کاربران خود را با تعدادی از طرح های پاسخگو و توسعه الگوی جوملا که کنترل زیبایی شناسی یک وب سایت تجاری را کنترل می کند ، تسهیل می کند.
در مرحله توسعه ، قرار دادن عناصر طراحی برای به دست آوردن بسیار مهم است:
  * ثبات
  * ناوبری آسان
  * سادگی
  * سازگاری تلفن همراه
  * خوانایی
در اینجا قالب های **جوملا** آمده است. این نرم افزار منبع باز فراهم می کند تا به جای نوشتن کد برای هر صفحه به طور جداگانه ، از طرح های پاسخگو از پیش تعریف شده برای همه صفحات وب استفاده کند.
در این پست وبلاگ ، موارد زیر را در مورد نحوه ایجاد و تنظیم یک الگوی دوستانه کاربر**در جوملا یاد خواهیم گرفت.
* [ **طرح های جوملا چیست؟** ][2]
* [ **چگونه می توان یک الگوی پاسخگو ساده در جوملا ایجاد کرد؟** ][3]
* [ **چگونه یک الگوی جوملا را نصب کنیم؟** ][4]
* [ **نتیجه گیری** ][5]

## طرح های جوملا چیست؟ {#what}

جوملا قالب هایی را برای قسمت جلویی و همچنین برای انتهای عقب ارائه می دهد. این برنامه با بسیاری از الگوهای آماده ساخته شده است و به توسعه دهندگان می دهد تا**مضامین بوت استرپ پاسخگو را با توجه به موارد استفاده خود بسازند. دو نوع الگو در جوملا وجود دارد.
**الگوهای جلویی:**  مربوط به کاربر با بخشی از یک وب سایت تجاری است.
**الگوهای برگشتی:**  این الگوها با منطق تجارت یک سایت مرتبط هستند.

## چگونه می توان یک الگوی پاسخگو ساده در جوملا ایجاد کرد؟ {#how}

در این بخش مراحل این آموزش الگوی جوملا را پوشش خواهیم داد.
قبل از پرش به این بخش ، اطمینان حاصل کنید که درک موارد زیر را دارید:
  * HTML
  * CSS
  * جاوا اسکریپت
  * PHP
بنابراین ، ایجاد الگوهای سفارشی در جوملا هرگز اینقدر سخت و پیچیده نبوده است. با این حال ، بیایید شروع به ایجاد اولین الگوی جوملا کنیم.

## **ساختار دایرکتوری تنظیم** 
اول از همه ، پوشه ای به نام " **mytemplate**" را در داخل پوشه "**الگوهای** " ایجاد کنید.
پرونده های زیر را در داخل پوشه " **mytemplate** " ایجاد کنید:
* **index.php** : این پرونده اصلی است که حاوی کد HTML و PHP برای کل صفحات الگو است.
**templeateetails.xml** : این پرونده حاوی داده های متا الگو است و برای توجه به جوملا اجباری است.
اکنون ، سه پوشه را در داخل پوشه " **mytemplate** " با نام های زیر ایجاد کنید:
* **JS** : این پوشه شامل تمام پرونده های JavaScript مورد نیاز برای الگو خواهد بود
* **CSS** : تمام پرونده های CSS برای یک ظاهر طراحی شده به این پوشه وارد می شوند
* **تصاویر** : تصاویر استفاده شده توسط این الگو در این پوشه ساکن هستند
یک پرونده CSS با نام " **template.css**" در داخل پوشه "**css** " ایجاد کنید.
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
سرانجام ، اینگونه است که ساختار فهرست به نظر می رسد.

## اجازه می دهد تا مقداری کد قرار دهیم
این کد را در پرونده **templeateTails.xml** قرار دهید.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
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
همانطور که قبلاً ذکر شد ، این پرونده حاوی ابرداده در مورد طرح های پاسخگو است که بین برچسب های نشانه گذاری تعریف شده است. با این حال ، می توانید اطلاعات کلی مانند نام ، نویسنده و توضیحات را تغییر دهید.
این پرونده همچنین حاوی اطلاعاتی در مورد سایر پرونده ها و پوشه هایی است که توسط این الگوی استفاده می شود.
اکنون ، پرونده **index.php** را باز کنید و کد زیر را شروع کنید:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
این پرونده با این خط شروع می شود که مانع از خواندن کد PHP شما می شود.
```
<!DOCTYPE html>
```
این به منظور اطلاع مرورگر در مورد نوع سند است.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
اسناد HTML با این خط شروع می شود و ویژگی **xmlns** به فضای نام XML برای سند می گوید.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
خط اول پس از برچسب به جوملا می گوید اطلاعات عنوان مانند اطلاعات ابرداده و عنوان صفحه را قرار دهد.
پیوندی به برگه سبک خارجی در خط دوم وجود دارد و خط سوم پرونده JavaScript خارجی را پیوند می دهد.
بقیه پرونده ها بوت استرپ را در الگوی فعال می کنند.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
بخش بدنه پس از شروع بخش سر ، شامل تمام داده هایی است که در الگوی برای مشاهده و حرکت کاربر منعکس می شود.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
این بیانیه عبارت JDOC نام دارد که برای آموزش جوملا برای اضافه کردن ماژول به نام "موقعیت 7" استفاده می شود. چندین جمله JDOC وجود دارد که اغلب در توسعه الگوی **جوملا** مورد استفاده قرار می گیرد.
این پرونده نهایی کامل **index.php** با تمام کد مورد نیاز برای یک الگوی اساسی جوملا است.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
همه چیز برای یک الگوی بسیار اساسی وجود دارد. اکنون زمان آن رسیده است که آن را بر روی سرور جوملا نصب کنید و ببینید که چگونه ادامه می یابد.

## چگونه الگوی جوملا را نصب کنیم؟ {#install}

فرآیند نصب الگوی جوملا کاملاً مستقیم و آسان است. مراحل زیر برای نصب وجود دارد:
به "برنامه های افزودنی -> مدیریت -> نصب بروید

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="جوملا نصب تصویر راه اندازی">}}

در اینجا می توانید الگوی تازه توسعه یافته جوملا خود را در لیست مشاهده کنید ، همانطور که در تصویر زیر نشان داده شده است.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="لیست الگوهای جوملا">}}

اکنون ، الگو را انتخاب کنید ، "نصب" را بزنید و یک پیام موفقیت در مورد نصب موفقیت آمیز ظاهر می شود.
پس از نصب الگو ، می توانید به پرونده های الگو در صفحه کنترل جوملا دسترسی پیدا کرده و اصلاح کنید و تغییرات را از گزینه "الگوی پیش نمایش" پیش نمایش کنید.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="جوملا">}}

اکنون ، می توانید اولین الگوی جوملا خود را به مرورگر مشاهده کنید!

## نتیجه {#نتیجه}

یک الگوی خوب و پاسخگو پایه و اساس مدل سازی کلی سایت است. **طرح های پاسخگو** در جوملا چند منظوره هستند و می توانند برای پروژه های مختلف مورد استفاده قرار گیرند. از نوشتن کد گرفته تا توسعه الگوی جوملا با کمک یک داشبورد مدیر بصری بسیار ساده می شود. جوملا برای برآورده کردن خواسته های کاربر ، کنترل کاملی بر توسعه الگوی فراهم می کند.
به عنوان **نرم افزار CMS** گروه تحت پیشرفت های مداوم قرار دارد و آموزش های بیشتری در مورد سایر سیستم های مدیریت محتوا به لیست اضافه می شود ، لطفاً برای به روزرسانی های منظم با بخش [سیستم مدیریت محتوا][6] در تماس باشید.

## صفحات محصول مربوطه
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [جوملا][1]
  * [دروپال][7]
  * [پیرو][8]
  * [CMS Django][9]
  * [umbraco cms][10]
  * [Concrete5][11]
  * [Grav][12]
  * [صنایع دستی][13]
  * [Contao][14]
  * [چنگال][15]
  * [CMS پالایشگاه][16]
  * [LocomotiveCms][17]



[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
