---
title: "قم بإنشاء أول مشروع PHP الخاص بك على مضيف محلي باستخدام XAMPP" 
seoTitle: "قم بإنشاء أول مشروع PHP الخاص بك على المضيف المحلي باستخدام XAMPP" 
description: "إعداد بيئة تطوير الويب باستخدام خادم الويب المجاني والمفتوح المصدر XAMPP. قم بإنشاء واختبار مشاريع PHP الخاصة بك على المضيف المحلي باتباع بعض الخطوات السهلة." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "إعداد بيئة تطوير الويب باستخدام خادم XAMPP مجاني ومفتوح المصدر. تعلم وإنشاء واختبار مشاريع PHP الخاصة بك على المضيف المحلي باتباع بعض الخطوات السهلة." 
url: /ar/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## إعداد بيئة تطوير الويب باستخدام خادم XAMPP المجاني والمفتوح. تعلم وإنشاء واختبار مشاريع PHP الخاصة بك على المضيف المحلي باتباع بعض الخطوات السهلة.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="قم بإنشاء أول مشروع PHP الخاص بك مع خادم الويب Open Source Open">}}

XAMPP هو خادم ويب مفتوح المصدر يوفر بيئة محلية لإنشاء مشروع PHP وتشغيله واختباره قبل نشره على الخوادم المباشرة. يوفر خادمًا محليًا للمطورين لاختبار وإنشاء تطبيقات الويب. سنغطي الأقسام التالية في منشور المدونة هذا:
  * [المتطلبات][2]
  * [ما هو xampp][3]
  * [إنشاء نص PHP][4]
  * [تشغيل واختبار البرنامج النصي PHP][5]
  * [الخلاصة][6]

## المتطلبات   {#Requirements}
  * XAMPP التثبيت
  * تطبيق محرر الرمز
  * المعرفة الأساسية PHP
  * المعرفة الأساسية HTML و JavaScript

## ما هو xampp؟   {#xampp}
XAMPP هي مكدس حل خادم الويب مفتوح المصدر. أنه يحتوي على Apache و MySQL و Mariadb و PHP و Perl. من السهل للغاية التثبيت والاستخدام. لهذا السبب هي بيئة تطوير PHP الأكثر شعبية. يوفر XAMPP Server بيئة كاملة لتطوير تطبيق الويب PHP. إذا لم يكن لديك بالفعل تثبيت عمل XAMPP ، فاتبع هذا الدليل لتثبيت XAMPP:
[Setup Xampp و Phpmyadmin كضيف محلي على Windows][7]

## قم بإنشاء نص php   {#php}
  * على افتراض أنك قمت بالفعل بتثبيت XAMPP من خلال اتباع البرنامج التعليمي أعلاه ، دعنا الآن إنشاء برنامج نصي PHP بسيط واختباره على XAMPP.
  * افتح المحرر أولاً. إذا لم يكن لديك محرر برمجة ، فما عليك سوى فتح المفكرة.
  * أدخل الرمز التالي
```
<?php
echo "This is my first PHP project";
?>
```
  * انقر فوق "ملف" في أعلى الزاوية اليمنى.
  * اضغط على زر "حفظ AS".
  * أدخل الاسم مع الامتداد ".php".
  *من أجل "حفظ AS type" ، حدد خيار "All Files (\*. \*)".
  * وأخيرا اضغط على زر "حفظ".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="قم بإنشاء أول مشروع PHP الخاص بك مع خادم الويب Open Source Open">}}


## تشغيل واختبار PHP Script   {#Test}
  * انسخ هذا البرنامج النصي PHP إلى مجلد HTDOCS داخل تثبيت XAMPP الخاص بك. يتواجد مجلد Htdocs في الغالب: C: \ xampp \ htdocs
  * افتح متصفحك.
  * انتقل إلى LocalHost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="قم بإنشاء أول مشروع PHP الخاص بك مع خادم الويب Open Source Open">}}

تهانينا! لقد قمت للتو بإنشاء أول مشروع PHP الخاص بك.

## الخاتمة   {#conclusion}
يعد إنشاء مشروع الويب الأول دائمًا مثيرًا للغاية للمبتدئين. إنه شعور رائع عند تصميم البرنامج النصي الديناميكي الأول ، وقم بتشغيله وعرضه على العمل على متصفحك. آمل أن يكون هذا الدليل البسيط قد ساعدك في إنشاء وتشغيل أول مشروع PHP الخاص بك مع خادم Web Open Source Open Server XAMPP.

## يستكشف
لمعرفة المزيد حول Xampp و Phpmyadmin ، الخروج بعد أدلة:
[Setup Xampp و Phpmyadmin كضيف محلي على Windows][7]
[مكدس حل خادم الويب المجاني لمطوري PHP & Perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
