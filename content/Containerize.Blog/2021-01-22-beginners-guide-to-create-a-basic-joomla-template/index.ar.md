---
title: "دليل المبتدئين لإنشاء قالب جملة أساسي" 
seoTitle: "دليل المبتدئين لإنشاء قالب جملة أساسي" 
description: "Joomla هو نظام شهير لإدارة المحتوى مفتوح المصدر. في هذا البرنامج التعليمي ، سنشرح خطوة بخطوة كيفية إنشاء قالب جملة." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "تعتبر Joomla واحدة من أكثر أنظمة إدارة المحتوى مفتوحة المصدر. سوف يسير هذا البرنامج التعليمي خلال الخطوات اللازمة لإنشاء قالب جملة من نقطة الصفر." 
url: /ar/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla هي واحدة من أكثر أنظمة إدارة المحتوى مفتوحة المصدر. سوف يسير هذا البرنامج التعليمي خلال الخطوات اللازمة لإنشاء قالب جملة من نقطة الصفر.

{{< figure align=center src="images/joomla-templates-2.png" alt="قالب جملة أساسي">}}

في هذا العصر الرقمي ، يعد نظام إدارة المحتوى ضرورة أساسية لأي عمل تجاري لجميع احتياجات إنشاء المحتوى الخاصة بهم. وهناك عدد من برامج CMS مفتوحة المصدر المتاحة في السوق. لدينا أيضًا [المدرجة][1] بعض برامج إدارة المحتوى المفتوحة المصدر للشركات. تعد Joomla واحدة من أكثر برامج CMS مفتوحة المصدر ، وفي هذا البرنامج التعليمي ، سنمر بك في خطوة بخطوة ونشرح كيفية إنشاء قالب Joomla من نقطة الصفر. اذا هيا بنا نبدأ!
**ملاحظة: نفترض أن لديك نسخة Joomla 2.5 مثبتة**
  * **[هيكل دليل الإعداد][2]**
  * **[إنشاء ملف أساسي templatedetails.xml][3]**
  * **[إنشاء ملف index.php أساسي][4]**
  * **[اكتشف وتثبيت قالب][5]**
  * **[حزمة القالب][6]**
  * **[الخلاصة][7]**

## هيكل دليل الإعداد   {#setup}
لإنشاء قالب Joomla أساسي للغاية ، قم بإنشاء مجلد جديد في مجلد Templates. قم بتسمية المجلد كل ما تريد أن تسميه قالبك ، على سبيل المثال " **myNewTemplate** ".
باستخدام محرر النص المفضل لديك ، قم بإنشاء الملفات **index.php  **و **  templatedetails.xml **. لإدارة صورك وأوراق الأنماط ، قم بعمل مجلدان جديدان يسمى  **صور **  و  **CSS ** . داخل المجلد  **CSS **  إنشاء ملف يسمى ** template.css** .
سيبدو هيكل الدليل الخاص بك شيئًا كهذا

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="هيكل دليل قالب قالات Joomla">}}


## قم بإنشاء ملف tampleatedetails.xml أساسي   {#xml}
يحمل ملف  **templatedetails.xml**  جميع البيانات الوصفية حول القالب الخاص بك. وهذا الملف ضروري بدونه ، لن يرى Joomla القالب الخاص بك!.
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
محتويات templateetails.xml هي الذات. يمكنك فقط نسخ المحتويات تعديل البتات اللازمة.
اترك المواقع كما هي - هذه مجموعة شائعة ، لذا ستتمكن من التبديل بسهولة من القوالب القياسية.

## إنشاء ملف index.php أساسي   {#php}
يصبح index.php هو ملف bootstrap الرئيسي لكل صفحة joomla! يسلم. ستعرض هذه الصفحة رمز العارية الجاهز لك لقطع ولصقه في التصميم الخاص بك.
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

## اكتشف وتثبيت قالب   {#install}
تحتاج أولاً إلى إخبار جوملا! أنك قد أنشأت قالبًا جديدًا. تسمى هذه الميزة امتدادات اكتشاف ويمكن الوصول إليها عبر
```
Extensions -> Extension Manager -> Discover
```
انقر فوق الزر "اكتشف" لاكتشاف القالب الخاص بك ، ثم حدده وانقر فوق تثبيته لتثبيته. الآن يجب أن يظهر القالب الخاص بك في مدير القالب (الأنماط) ، يمكن الوصول إليه عبر
```
Extensions -> Template Manager
```

## حزمة القالب   {#packge}
الدليل غير المصقول مع عدة ملفات ليس وسيلة جيدة للتوزيع. لذلك ، من أجل التوزيع ، يجب علينا إنشاء حزمة من القالب الخاص بنا. يمكن أن تكون الحزمة بتنسيق مضغوط (مع امتداد .zip).
إذا كان القالب الخاص بك في دليل myTemplate/ ثم لإنشاء الحزمة ، يمكنك الاتصال بهذا الدليل واستخدام أوامر مثل:
```
zip -r ..\mytemplate.zip .
```

## الخاتمة   {#conclusion}
في هذه المقالة ، تعلمنا عن قالب جملة. مررنا خطوة بخطوة حول كيفية إنشاء قالب جملة. هذا مجرد برنامج تعليمي أساسي للغاية للبدء في إنشاء القالب. بالطبع ، يمكنك بناء قالب مخصص ومُحسّن للغاية بناءً على هذا الهيكل العاري.

## صفحات المنتج ذات الصلة
قد تجد الروابط التالية ذات الصلة:
  * [دليل تطوير قالب Joomla للمبتدئين][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
