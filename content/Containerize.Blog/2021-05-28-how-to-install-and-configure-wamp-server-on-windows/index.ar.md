---
title: "كيفية تثبيت وتكوين خادم WAMP على Windows" 
seoTitle: "كيفية تثبيت وتكوين خادم WAMP على Windows" 
description: "قم بتثبيت WampServer على Windows وابدأ بسرعة في تطوير تطبيقات الويب المستندة إلى PHP. يتوفر Wamp Server لكل من Windows 32 و 64 بت." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "قم بإعداد بيئة تطوير الويب لإنشاء تطبيقات الويب باستخدام APACH2 و PHP و MYSQL. تساعدك هذه المقالة على تثبيت WAMP Server على Windows." 
url: /ar/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## قم بإعداد بيئة تطوير الويب لإنشاء تطبيقات الويب باستخدام APACH2 و PHP و MYSQL. تساعدك هذه المقالة على تثبيت WAMP Server على Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="خادم WAMP">}}

يجب أن يكون لدى كل مطور البرنامج المطلوب مثبت على جهاز الكمبيوتر الخاص به قبل كتابة البرنامج. في الأيام الأولى ، كان على المطورين تثبيت كل برنامج بشكل منفصل ثم تكوينه للعمل معًا.  **تتوفر الآن Wampserver**  وبرامج مكدس حلول الويب الأخرى ، والتي تحدد جميع البرامج اللازمة في حزمة واحدة. تحتاج فقط إلى تثبيت حزمة واحدة للحصول على بيئة التطوير الخاصة بك.
في منشور المدونة هذا ، سنغطي الأقسام التالية.
  *[ **ما هو Wampserver؟** ][1]
  *[ **تثبيت Wamp** ][2]
  *[ **تكوين Wamp** ][3]
  *[ **Access phpmyadmin** ][4]

## ما هو Wampserver؟   {#ماذا}
Wampserver هي عبارة عن حلقة حرة لإعداد بيئة تطوير الويب للتطبيقات المستندة إلى PHP. يرمز WAMP إلى (W - Windows ، A - Apache ، M - MySQL ، و P - PHP). بالإضافة إلى ذلك ، فإنه يأتي أيضًا مع phpmyadmin ومسؤول لإدارة قاعدة البيانات. WAMP هي واحدة من الأدوات الشائعة ويمكنك إعدادها بسرعة. علاوة على ذلك ، يمكنك تكوين خادم WAMP من لوحة التحكم. يوفر بيئة تطوير ويب كاملة لإنشاء التطبيقات واختبارها. يتكون WampServer من عدة مكونات يمكنك تحديدها أثناء التثبيت وفقًا لاحتياجاتك. يأتي Wampserver مع إصدارات متعددة من PHP. يمكنك بسهولة تغيير إصدار PHP وفقًا لمتطلبات المشروع. أيضًا ، يمكنك تغيير DBMS (نظام إدارة قاعدة البيانات) من لوحة التحكم في Wampserver.

## تثبيت Wamp   {#Installation}
اتبع الدليل أدناه خطوة بخطوة لتثبيت خادم WAMP على Windows.
  * **قم بتنزيل Wampserver**  من الموقع الرسمي

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *اختر **Wampserver 32 بت  **أو**   Wampserver 64 بت** إصدار التثبيت وفقًا لنظام التشغيل الخاص بك.
  *حدد موقع ملف  **wamp**  وانقر نقرًا مزدوجًا عليه لتشغيل عملية التثبيت.
  * حدد اللغة ثم اضغط على زر موافق.
  * اختر مربع الاختيار اتفاقية اتفاق ثم انقر فوق الزر التالي.
  * اقرأ المعلومات المهمة حول تثبيت WampServer وانقر فوق الزر التالي للمتابعة.
  * حدد مجلد حيث تريد تثبيت خادم WAMP وانقر فوق الزر التالي.
  * يجب عليك تحديد المكونات التي تريد تثبيتها كما هو موضح في لقطة الشاشة أدناه. يمكنك تحديد جميع إصدارات PHP والتبديل أثناء التطوير. أيضًا ، يمكنك تثبيت كل من MySQL و MariaDB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * حدد اختصار WampServer وانقر فوق الزر التالي.
  * انقر فوق زر التثبيت لتثبيت WampServer.
  * الآن ، حدد المتصفح الافتراضي ومحرر النص الافتراضي لخادم WAMP.
  * التثبيت الخاص بك اكتمل. انقر فوق الزر "الانتهاء" للخروج من معالج تثبيت خادم WAMP.
  * افتح متصفحك واكتب المضيف المحلي للوصول إليه. سترى الصفحة أدناه.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## تكوين Wamp   {#Configuration}
الآن ، سنبحث في تكوينات قليلة تساعدك أثناء تطوير واختبار تطبيقات الويب. يمكنك الآن بدء تشغيل Wampserver بالنقر المزدوج على أيقونة Wampserver المختصرة على سطح المكتب.
  * **الخدمات** -يمكنك رؤية الخيارات للبدء وإيقاف وإعادة تشغيل جميع الخدمات عن طريق النقر اليسرى على أيقونة Wampserver.
  * **قم بتغيير قاعدة البيانات** -انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد الأدوات وانقر على "Invert DBMS DBMS MARIADB MYSQL". سيتم إعادة تشغيل Wamp Server تلقائيًا ويمكنك رؤية قاعدة البيانات الافتراضية عن طريق فتح المضيف المحلي في متصفحك.
  * **قم بتغيير إصدار PHP** -انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد الأدوات وتغيير إصدار PHP CLI وانقر فوق إصدار PHP الذي تريده.
  * **المضيف الظاهري**  - يمكنك بسهولة إضافة مضيف افتراضي عبر واجهة الويب الخاصة بـ Wampserver. افتح LocalHost في متصفحك وانقر على "إضافة مضيف افتراضي" ضمن قسم الأدوات. أدخل "اسم المضيف الظاهري مثل dev.example.com" وأدخل المسار المطلق للمشروع. انقر على زر "ابدأ إنشاء VirtualHost". أعد تشغيل خادم Apache لتحميل المضيف الظاهري الذي تم إنشاؤه حديثًا.
  * **قم بتغيير منفذ Apache**  - بشكل افتراضي ، يعمل خادم الويب Apache على المنفذ 80. إذا كنت تريد استخدام منفذ مختلف لـ Apache ، فيمكنك القيام بذلك من لوحة التحكم في Wampserver. انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد الأدوات وانقر فوق "استخدم منفذًا بخلاف 80". أدخل رقم منفذ جديد في مربع الحوار وانقر فوق الزر "موافق".
  * **قم بتغيير منفذ DBMS**  بشكل افتراضي ، يعمل خادم قاعدة البيانات على المنفذ 3306. إذا كنت ترغب في استخدام منفذ مختلف لخادم قاعدة البيانات ، فيمكنك القيام بذلك من لوحة التحكم في Wampserver. انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد الأدوات وانقر فوق "استخدم منفذًا بخلاف 3306". أدخل رقم المنفذ الجديد في مربع الحوار وانقر فوق الزر "موافق".
  * **سجلات فارغة**  - يوفر Wamserver وظائف لمسح سجلات من لوحة التحكم. يمكنك تفريغ السجلات مثل سجل خطأ PHP ، وسجل خطأ Apache ، وسجل الوصول إلى Apache ، وسجل MySQL ، وسجل MariaDB. حتى يمكنك مسح جميع السجلات في وقت واحد. انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد الأدوات وحدد سجلات فارغة ، ستجد جميع الخيارات لإزالة السجلات.
  * **تغيير اللغة**  - يمكنك لغة لوحة التحكم في Wampserver. انقر بزر الماوس الأيمن على رمز WAMP لفتح مربع الحوار أدوات. حدد اللغة وانقر على اللغة المطلوبة. سترى لوحة التحكم باللغة المحددة حديثًا.

## Access phpmyadmin   {#phpmyadmin}
يمكنك الوصول إلى  **phpmyadmin**  لإدارة قواعد البيانات الخاصة بك عن طريق فتح مضيف محلي في متصفحك ثم انقر فوق رابط phpmyadmin على صفحة ترحيب Wampserver. أيضًا ، يمكنك الوصول إليه من خلال زيارة عنوان URL HTTP: // LocalHost/PhpmyAdmin.

## خاتمة
لقد ناقشنا دليل Wampserver ودليلًا كاملًا خطوة بخطوة إلى **تثبيت Wampserver  **على Windows. يمكنك بسهولة تثبيت وتكوين**   Wampserver** باتباع هذا البرنامج التعليمي والبدء في الترميز على الفور. يمكنك زيارة الروابط ضمن قسم Explore لمزيد من الخيارات على برنامج مكدس الحلول.
أخيرًا ، [**Containerize.com **][5] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذه الفئة [**  Web Server Solution**][6] للحصول على آخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  *[ **أفضل خيارات مكدس حل خادم الويب مفتوحة المصدر** ][7]
  *[ **Setup Xampp و PhpmyAdmin كضوف محلي على Windows** ][8]

  
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/