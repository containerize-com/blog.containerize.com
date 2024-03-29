---
title: "دليل المبتدئين لاستخدام تطبيق الفواتير في الحفرة" 
seoTitle: "دليل المبتدئين لاستخدام تطبيق الفواتير في الحفرة" 
description: "برنامج تعليمي للبدء مع نظام فاتورة مفتوح المصدر. يساعدك هذا المبدأ التوجيهي لـ Crater على التعرف على المفاهيم والميزات الأساسية." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "سيساعدك هذا البرنامج التعليمي على التعرف على تطبيقات فواتير Crater. إنه نظام فاتورة مجاني ومفتوح المصدر للشركات الصغيرة." 
url: /ar/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## سيساعدك هذا البرنامج التعليمي على التعرف على تطبيقات فواتير Crater. إنه نظام فاتورة مجاني ومفتوح المصدر للشركات الصغيرة.

{{< figure align=center src="images/blog-crater.png" alt="نظام فاتورة مفتوح المصدر">}}

كل عمل يحتاج إلى نوع من نظام لإدارة الفواتير والنفقات والمدفوعات وغيرها الكثير. يساعدك برنامج الفواتير في إدارته حتى تتمكن من أداء مهام الفواتير بسهولة والحفاظ على التركيز على الأشياء المهمة الأخرى. في هذا المنشور ، سوف نتعلم كيفية إعداد Crater واستخدامه للتعامل مع عمليات المحاسبة للشركة.
  * [مقدمة حول الحفرة][1]
  * [إجراء تثبيت الحفرة][2]
  * [استكشاف الميزة][3]
  * [الخلاصة][4]

## مقدمة عن الحفرة {#Introduction}

[CRATER][5] هو تطبيق فواتير مجاني ومفتوح المصدر. إنه مجاني تمامًا ، ويمكنك تحديثه بسهولة إلى أحدث الإصدارات. إنه نظام محاسبة مجاني للشركات الصغيرة والمستقلة. إنه أيضًا حل فواتير كامل ، مما يتيح لك تتبع النفقات والمدفوعات وحساب الضرائب وإنتاج تقديرات وفواتير. علاوة على ذلك ، فإنه يأتي مع تطبيقات الهاتف المحمول خارج الصندوق لأجهزة iPhone و Android. سوف يسمح لك بإدارته من أي مكان. نظرًا لأن Crater عبارة عن برنامج فواتير على شبكة الإنترنت ، فقد تم تصميم تطبيق الويب باستخدام Laravel و Vuejs ، وتم تصميم تطبيقات الهاتف المحمول مع React Native. تتوفر جميع الوثائق المتعلقة بالتطوير والنشر. يمكن العثور على رمز المصدر الكامل في [github][6].

## إجراء تثبيت الحفرة {#Installation}

سنناقش كيفية تثبيت Crater مع الطريقة اليدوية واستخدام Docker في هذا القسم.

### التثبيت اليدوي
  * قم بتنزيل أحدث إصدار من.
  * قم بتحميل ملف zip الذي تم تنزيله إلى الخادم الخاص بك واستخراجه.
  * قم بإشارة مجالك إلى الدليل العام داخل مجلد Crater.
  * انتقل إلى جذر مشروعك وتنفيذ أمر "sudo chmod -r 775 ./" لتعيين الامتيازات المناسبة.
  * افتح موقعك في المتصفح واتبع معالج التثبيت.

### تثبيت Docker
  * تثبيت Docker على الخادم الخاص بك :.
  * تثبيت Docker تأليف باتباع هذا الدليل :.
  * استنساخ مستودع الحفرة باستخدام هذا الأمر.
```
git clone https://github.com/bytefury/crater
```
  * تشغيل الأوامر أدناه واحدة تلو الأخرى لتثبيت الحفرة.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * افتح موقع الحفرة في متصفحك واتبع معالج التثبيت.

## ميزة الاستكشاف {#Feature}

في هذا القسم ، سوف نستكشف الميزات الأساسية لتطبيق الفواتير مفتوح المصدر. بمجرد الانتهاء من التثبيت ، افتح موقعك http://example.com وقم بتسجيل الدخول إلى التطبيق.
 ****لوحة القيادة**  - بعد تسجيل الدخول ، سيتم نقلك إلى لوحة القيادة ، التي تعرض العرض بالكامل للتطبيق.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **الإعدادات**  - انتقل الآن إلى صفحة الإعدادات وإضافة إعدادات تطبيقات الويب المختلفة مثل إعدادات الحساب ومعلومات الشركة والتفضيلات والتخصيصات والإشعارات ووحدات الدفع وما إلى ذلك.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

 **العناصر** - يمكن الوصول إلى علامة تبويب العناصر من قائمة الشريط الجانبي. من علامة التبويب هذه ، يمكنك إدارة العناصر الخاصة بك. يمكنك استخدام العناصر أثناء إنشاء التقديرات والفواتير.
*  **تقديرات**  - قم بإنشاء عرض أسعار شامل يتضمن المعدلات والخصومات والمخزون والمزيد. يمكن استخدام أحد القوالب الثلاثة المبنية لإنشاء تقدير. يمكن إضافة ضرائب إضافية إلى التقدير ، ويمكن أيضًا إضافتها كضريبة مركبة.
 **الفواتير** - قم بعمل فواتير احترافية وأرسلها إلى عملائك. يمكنك استخدام القوالب المتاحة لإنشاء فاتورة. يمكنك إضافة ضرائب إضافية إلى الفاتورة ، بالإضافة إلى ضريبة مركبة. علاوة على ذلك ، يمكنك تقديم نسبة مئوية أو خصم ذي قيمة ثابتة لعملائك. علاوة على ذلك ، يمكنك تطبيق خصومات على العناصر الفردية وكذلك مبلغ الفاتورة الإجمالي.
 **المدفوعات** - تساعدك هذه الوحدة على متابعة تتبع المدفوعات التي حصلت عليها من عملائك.
 **النفقات** - وحدة النفقات تساعدك على تتبع مقدار ما تنفقه على خدمات مختلفة.
*  **الضرائب**  - باستخدام هذه الميزة ، يمكنك بسهولة إدارة الضرائب الخاصة بك. يمكنك إضافة ضرائب متعددة على إجمالي مبلغ الفاتورة أو على عنصر فردي.
*  **تقارير**  - احصل على معلومات شاملة عن جميع فواتيرك ، سواء كانت لعملاء أو عدة عملاء. يأتي دعم CRATER مع أربعة أنواع من التقارير مثل تقرير المبيعات وتقرير الأرباح والخسارة وتقرير النفقات وتقرير الضرائب.

## خاتمة {#خاتمة}

لقد تعلمنا عن Crater وكيفية إعداده يدويًا ومع Docker. لقد بحثنا أيضًا في بعض الميزات التي يجب أن يوفرها كل برنامج للفوترة المحاسبية. نأمل أن يساعدك هذا الدليل في تنفيذ نظام فاتورة مفتوح المصدر بسرعة.
أخيرًا ، [Containerize.com][7] يكتب بشكل مستمر منشورات المدونة على منتجات ومواضيع مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع فئة [الفواتير][8] للتحديثات العادية.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [Crater - نظام محاسبة مجاني للأعمال التجارية الصغيرة][5]
  * [أفضل 5 برامج محاسبة مفتوحة المصدر في عام 2021][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
