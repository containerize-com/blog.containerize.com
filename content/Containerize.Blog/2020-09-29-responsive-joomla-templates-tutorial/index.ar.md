---
title: "دليل تطوير قوالب Joomla للمبتدئين" 
seoTitle: "دليل تطوير قوالب Joomla للمبتدئين" 
description: "تعلم تطوير قالب Joomla ، كيفية إعداد تخطيطات متجاورة لمختلف حالات الاستخدام. مجموعة من الملفات التي تحدد طبقة التصميم لموقع الأعمال." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "قم ببناء قوالب Joomla احترافية للغاية وقابلة للتخصيص التي تقدم مجموعة من الميزات مثل مخططات ألوان متعددة اللغات وكبار المسئولين الاقتصاديين / الاستخدام والغني." 
url: /ar/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## قم ببناء قوالب Joomla الاحترافية للغاية والقابلة للتخصيص التي تقدم مجموعة من الميزات مثل SEO / SEO / سهلة الاستخدام ، وألوان غنية. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="تطوير قالب جملة">}}


## ملخص
يلعب موقع الويب الذي تم تصميمه جيدًا جزءًا حيويًا لجلب الزوار والاحتفاظ بهم من خلال منحهم سهولة التنقل.**يميّر Joomla**مستخدميها الكامل مع عدد من التخطيطات المستجيبة وتطوير قالب Joomla الذي يتحكم في جمالية موقع تجاري.
خلال مرحلة التطوير ، يعد وضع عناصر التصميم أمرًا بالغ الأهمية للحصول على:
  * تناسق
  * ملاحة سهلة
  * البساطة
  * توافق الهاتف المحمول
  * مقروئية
هنا يأتي**قوالب Joomla**. يمنح هذا البرنامج مفتوح المصدر حكمًا لتطوير أو استخدام تخطيطات مستجيبة محددة مسبقًا لجميع صفحات الويب بدلاً من كتابة التعليمات البرمجية لكل صفحة بشكل منفصل.
في منشور المدونة هذا ، سوف نتعلم الأشياء التالية حول كيفية إنشاء وإعداد قالب**سهل الاستخدام**في Joomla.
* [**ما هي تخطيطات Joomla؟**][2]
* [**كيفية إنشاء قالب مستجيب بسيط في Joomla؟**][3]
* [**كيفية تثبيت قالب جملة؟**][4]
* [**الخلاصة**][5]

## ما هي تخطيطات Joomla؟   {#ماذا}
يوفر Joomla قوالب للواجهة الأمامية وكذلك للنهاية الخلفية. إنه يأتي مع العديد من القوالب الجاهزة المصنوعة ، ويوفر للمطورين بناء سمات Bootstrap المجانية المستجيبة**وفقًا لحالات استخدامهم. هناك نوعان من القوالب في Joomla.
* * القوالب الأمامية:**تتعلق بالمستخدم الذي يواجه جزءًا من موقع الويب.
* * القوالب الخلفية:**ترتبط هذه القوالب بمنطق العمل للموقع.

## كيفية إنشاء قالب مستجيب بسيط في Joomla؟   {#كيف}
في هذا القسم ، سنغطي خطوات هذا البرنامج التعليمي لقالب Joomla.
قبل القفز إلى هذا القسم ، تأكد من فهم ما يلي:
  * لغة البرمجة
  * CSS
  * جافا سكريبت
  * بي أتش بي
لذلك ، لم يكن إنشاء قوالب مخصصة في Joomla صعبة ومعقدة أبدًا. ومع ذلك ، دعنا نبدأ في إنشاء قالب Joomla الأول.

##**هيكل دليل الإعداد**
بادئ ذي بدء ، قم بإنشاء مجلد اسمه "**mytemplate**" داخل مجلد "**Templates**".
قم بإنشاء الملفات التالية داخل مجلد "**mytemplate**":
***index.php**: هذا هو الملف الأساسي الذي يحتوي على رمز HTML و PHP لصفحات القالب بأكملها.
***templatedetails.xml**: يحتوي هذا الملف على بيانات meta للقالب وهو إلزامي لتلاحظه Joomla.
الآن ، قم بإنشاء ثلاثة مجلدات داخل مجلد "**mytemplate**" مع الأسماء التالية:
***JS**: سيحتوي هذا المجلد على جميع ملفات JavaScript اللازمة للقالب
***CSS**: ستدخل جميع ملفات CSS للتصميم في هذا المجلد
***الصور**: الصور المستخدمة بواسطة القالب ستقيم في هذا المجلد
قم بإنشاء ملف CSS يسمى "**template.css**" داخل مجلد "**CSS**".
```
* mytemplate/
**css/
*** template.css
**images/
**js/
**index.php
**templateDetails.xml
```
في النهاية ، هذا هو كيف سيبدو هيكل الدليل.

## دعنا نضع بعض التعليمات البرمجية
ضع هذا الرمز في ملف**templatedetails.xml**.
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
كما ذكرنا سابقًا ، يحتوي هذا الملف على البيانات الوصفية حول التخطيطات المستجيبة التي يتم تعريفها بين علامات الترميز. ومع ذلك ، يمكنك تغيير المعلومات العامة مثل الاسم والمؤلف والوصف.
يحتوي هذا الملف أيضًا على معلومات حول الملفات والمجلدات الأخرى التي يستخدمها القالب.
الآن ، افتح ملف**index.php**وابدأ في وضع الرمز التالي:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
سيبدأ هذا الملف بهذا السطر الذي يمنع الآخرين من قراءة رمز PHP الخاص بك.
```
<!DOCTYPE html>
```
هذا هو السماح للمتصفح بمعرفة نوع المستند.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
تبدأ مستندات HTML بهذا السطر وتروي سمة**XMLNS**مساحة اسم XML للمستند.
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
السطر الأول بعد أن يطلب العلامة Joomla وضع معلومات رأس مثل معلومات البيانات الوصفية وعنوان الصفحة.
يوجد رابط إلى ورقة النمط الخارجي في السطر الثاني وربط السطر الثالث ملف JavaScript الخارجي.
تمكن بقية الملفات من bootstrap في القالب.
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
يبدأ قسم الجسم بعد أن يحتوي قسم الرأس على جميع البيانات التي ستنعك في القالب للمستخدم لعرضه والتنقل.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
يسمى هذا البيان بيان JDOC الذي يتم استخدامه لتوجيه Joomla لإضافة وحدة نمطية تسمى "الموضع 7". هناك العديد من عبارات JDOC التي يتم استخدامها بشكل متكرر في تطوير قالب Joomla**.
هذا هو الملف النهائي الكامل**index.php**مع جميع الكود المطلوب لقالب Joomla الأساسي.
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
كل شيء في مكانه لقالب أساسي للغاية. الآن ، حان الوقت لتثبيته على خادم Joomla ومعرفة كيف يحدث.

## كيفية تثبيت قالب جملة؟   {#ثَبَّتَ}
عملية تثبيت قالب Joomla مستقيمة وسهلة للغاية. هناك الخطوات التالية للتثبيت:
انتقل إلى "الامتدادات -> إدارة -> تثبيت

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla تثبيت صورة إعداد">}}

هنا يمكنك رؤية قالب Joomla المطور حديثًا في القائمة كما هو موضح في الصورة أدناه.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="قائمة قوالب جملة">}}

الآن ، حدد القالب ، واضغط على "تثبيت" وستظهر رسالة نجاح حول التثبيت الناجح.
بعد تثبيت القالب ، يمكنك الوصول إلى ملفات القالب وتعديلها داخل لوحة التحكم في Joomla ومعاينة التغييرات من خيار "معاينة القالب".

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="جملة">}}

الآن ، يمكنك عرض قالب Joomla الأول في المتصفح!

## الخاتمة   {#conclusion}
قالب جيد وسريع الاستجابة هو الأساس لنمذجة الموقع الشاملة.**تخطيطات مستجيبة**في Joomla هي متعددة الوظائف ويمكن استخدامها لمشاريع مختلفة. من كتابة التعليمات البرمجية إلى تطوير قالب Joomla يصبح بسيطًا جدًا بمساعدة لوحة معلومات المشرف البديهية. يوفر Joomla تحكمًا كاملاً في تطوير القالب لتلبية رغبات المستخدم.
كبرنامج**CMS**فئة تحت تحسينات متسقة وسيتم إضافة المزيد من البرامج التعليمية حول أنظمة إدارة المحتوى الأخرى إلى القائمة ، يرجى البقاء على اتصال مع قسم [نظام إدارة المحتوى][6] للتحديثات العادية.

## صفحات المنتج ذات الصلة
قد تجد الروابط التالية ذات الصلة:
  * [Joomla][1]
  * [دروبال][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [الجاذبية][12]
  * [حرفة][13]
  * [كونتو][14]
  * [شوكة][15]
  * [مصفاة CMS][16]
  * [locomotivecms][17]

  
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
