---
title: "إعداد xampp و phpmyadmin كضيف محلي على Windows" 
seoTitle: "إعداد xampp و phpmyadmin كضيف محلي على Windows" 
description: "إعداد XAMPP و PHPMYADMIN كضيف محلي على Windows. قم بإنشاء بيئة اختبار محلية مجانية ومفتوحة المصدر لاختبار وإنشاء تطبيقات الويب." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "قم بإعداد بيئة تطوير مع مكدس حل خادم الويب المجاني والمفتوح المصدر (XAMPP) وبرنامج إدارة قاعدة البيانات (PhpmyAdmin)" 
url: /ar/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## قم بإعداد بيئة تطوير مع مكدس حل خادم الويب المجاني والمفتوح المصدر (XAMPP) وبرنامج إدارة قاعدة البيانات (PhpmyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP و PHPMYADMIN كما هو مضيف محلي">}}

يوفر XAMPP و PhpmyAdmin كخادم محلي للمطورين اختبار وإنشاء تطبيقات الويب. XAMPP هو خادم محلي مثبت على أجهزة الكمبيوتر الشخصية/أجهزة الكمبيوتر المحمولة. يوفر بيئة محلية لإنشاء تطبيقات PHP وتشغيلها واختبارها قبل نشرها على الخوادم الحية.
سنغطي الأقسام التالية في منشور المدونة هذا:
  * [الوصف][1]
  * [تثبيت XAMPP][2]
  * [لوحة معلومات PhpmyAdmin][3]
  * [الأفكار النهائية][4]

## الوصف:   {#description}
XAMPP مجانية ومفتوحة المصدر مكدس Server Web Server. أنه يحتوي على Apache و MySQL و Mariadb و PHP و Perl. XAMPP متاح لأنظمة تشغيل Windows. من السهل للغاية التثبيت والاستخدام. لهذا السبب هي بيئة تطوير PHP الأكثر شعبية. يوفر XAMPP و PhpmyAdmin كـ LocalHost بيئة كاملة لتطوير واختبار تطبيق الويب.
الحروف الهجائية في XAMPP تقف ل:
***x**-منصة التبادلية (يدعم أنظمة التشغيل المتعددة بما في ذلك Linux و Windows و Mac OS)
***A**- Apache HTTP Server
***M**- MariaDB (قاعدة البيانات)
***P**- PHP
***p**- بيرل

## تثبيت xampp   {#xampp}
  * قم بتنزيل xampp من [هنا][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP كما المضيف المحلي">}}

  * تثبيت الملف القابل للتنفيذ.
  * ثم انقر فوق "التالي".
  * اختر المكونات التي تريد تثبيتها.

{{< figure align=center src="images/xampp2.png" alt="XAMPP كخطوة 2">}}

  * بالنسبة لمعظم تطبيقات الويب ، تحتاج فقط إلى _apache_ و _mysql_ و _php_ و _phpmyadmin_.
  * حدد دليل التثبيت حيث تريد تثبيت XAMPP.
  * سيتم عرض تنبيه أمان Windows. يجب عليك التحقق من الخيار التالي: "_ شبكات خاصة ، مثل منزلي أو شبكة العمل" _.
  * انقر أخيرًا على "الانتهاء" لإكمال التثبيت.

{{< figure align=center src="images/xampp4.png" alt="XAMPP كخطوة 3 محلية">}}

  * بعد التثبيت الناجح ، افتح لوحة التحكم XAMPP.
  * ابدأ خدمات "Apache" و "MySQL".

{{< figure align=center src="images/xampp5.png" alt="XAMPP كخطوة محلية 4">}}


## phpmyadmin dashboard:   {#phpmyadmin}
للوصول إلى لوحة معلومات phpmyadmin ، انقر فوق الزر "المسؤول" بجوار خدمة MySQL. يمكنك أيضًا الوصول إلى phpmyadmin من خلال زيارة http: // localhost/phpmyadmin من متصفحك. هنا يمكنك إنشاء قواعد بيانات. اتبع هذه الخطوات لإنشاء قاعدة بيانات جديدة.
  * من لوحة القيادة ، انقر فوق علامة التبويب "قواعد البيانات".

{{< figure align=center src="images/db1.png" alt="phpmyadmin في LocalHost الخطوة 1">}}

  * أدخل اسم قاعدة البيانات وانقر فوق الزر "إنشاء". سيؤدي هذا ببساطة إلى إنشاء قاعدة بيانات فارغة جديدة.

{{< figure align=center src="images/db2.png" alt="phpmyadmin في LocalHost الخطوة 2">}}

  * التالي يمكنك إنشاء جداول عن طريق تحديد قاعدة البيانات التي تم إنشاؤها حديثًا.
  * أدخل اسم الجدول ضمن "إنشاء جدول".

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin في LocalHost الخطوة 3">}}

  * حدد عدد الأعمدة.
  * ثم انقر على زر "GO".
  * بعد ذلك تحتاج إلى ملء النموذج في الصفحة التالية لإنهاء إنشاء جدول.

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin في LocalHost الخطوة 4">}}


## الأفكار النهائية:   {#final}
تثبيت XAMPP بسيط ومباشر للأمام. لا يستغرق الأمر أكثر من 15 دقيقة إلى Setup Xampp Server. بمجرد تثبيته ، يمكن للمطورين إنشاء واختبار تطبيقات الويب المستندة إلى PHP حتى بدون اتصال بالإنترنت. بدلاً من اختبار المشاريع مباشرة على خادم الويب المباشر ، من البسيط والتوفير للوقت اختبارها محليًا. إنها منصة رائعة للمبتدئين للتعلم واختبار وتلميع مهاراتهم في PHP و Perl و Database.

## يستكشف:
[مكدس حل خادم الويب مفتوح المصدر لمطوري PHP & Perl][6]
[أفضل خيارات مكدس حل خادم الويب مفتوح المصدر][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
