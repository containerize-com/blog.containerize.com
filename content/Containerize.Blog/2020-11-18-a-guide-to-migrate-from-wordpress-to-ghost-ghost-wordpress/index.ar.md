---
title: "دليل للترحيل من WordPress إلى Ghost | WordPress Ghost" 
seoTitle: "دليل للترحيل من WordPress إلى Ghost | WordPress Ghost" 
description: "هذا البرنامج التعليمي يدور حول كيفية الترحيل من WordPress إلى Ghost. سنتعلم كيفية ترحيل مشاركاتك وصفحاتك إلى Ghost من موقع WordPress الحالي." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost و WordPress هما من منصات نشر محتوى مفتوحة المصدر. في هذا البرنامج التعليمي ، سوف نتعلم كيفية ترحيل المحتوى من WordPress إلى Ghost." 
url: /ar/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost و WordPress هما من منصات نشر محتوى مفتوحة المصدر. في هذا البرنامج التعليمي ، سوف نتعلم كيفية ترحيل المحتوى من WordPress إلى Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="ترحيل من WordPress إلى Ghost">}}


## ملخص
في الماضي ، نشرنا العديد من المقالات حول مواضيع مثل [تعزيز خيوطك مع تكامل CivIcrm WordPress المجاني][1] ، [كيفية دمج منتدى الخطاب مع WordPress][2] ، وغيرها الكثير. Ghost هي منصة تدوين مفتوحة المصدر ناشئة. إنها Node.js CMS لنشر المحتوى وتأتي مع واجهة بسيطة ونظيفة تجعلها سهلة الاستخدام. إنها منصة رائعة للمبتدئين لأنها تركز على تخفيض الطلب بدلاً من تحرير WYSIWYG. قوة وسرعة node.js تجعل الأشباح بسرعة كبيرة. بسبب بساطة النظام الأساسي ، يتحول الكثير من المستخدمين من منصات أخرى. نظرًا لأن WordPress هو النظام الأساسي الأول لإدارة المحتوى.
وبالتالي ، المزيد من المستخدمين **ترحيل من WordPress إلى Ghost** . هناك الكثير من المحتوى الذي يتضمن ملفات الوسائط والتعليقات والمنشورات وما إلى ذلك. هناك مكونات إضافية تساعدك على ترحيل المحتوى من WordPress إلى Ghost. الفائدة الرئيسية لتبني Ghost هي أنه يركز على تحسين محرك البحث. في برنامج WordPress Ghost Tutorial ، سنخوض جميع خطوات الترحيل باستخدام البرنامج المساعد الرسمي لـ WordPress Export.
* **[مقدمة briedf من WordPress][3]** 
* **[ما هو الشبح؟][4]** 
* **[المتطلبات][5]** 
* **[محتويات التصدير من wrodpress باستخدام البرنامج المساعد][6]** 
* **[استيراد محتويات إلى شبح][7]** 
* **[الخلاصة][8]** 

## **مقدمة briedf من WordPress** {#wp}

[WordPress][9] هي منصة تدوين مفتوحة المصدر رائدة قامت بتشغيل عدد كبير من المواقع الإلكترونية. برنامج التدوين المجاني هذا يستضيف ذاتيًا ومتعددة اللغات ويوفر الدعم للعديد من اللغات. علاوة على ذلك ، فإن مجتمع تطوير WordPress نابض بالحياة للغاية وقد طور مجموعة ضخمة من المكونات الإضافية المفيدة المتوفرة بسهولة. تتناول هذه الإضافات تقريبًا كل حالة استخدام لموقع عملك. بالإضافة إلى ذلك ، يتم كتابته في PHP ويأتي مع وثائق شاملة فيما يتعلق بالتنمية والنشر. كل رمز المصدر متاح على جيثب. علاوة على ذلك ، فإن منصة التدوين هذه قابلة للتمديد للغاية وقابلة للتكوين وتوفر عمليات تكامل مع تطبيقات الطرف الثالث. هناك لوحة معلومات منطقية وسهلة الفهم حيث يمكن للمستخدمين سحب وإسقاط العناصر لتعديل مظهر ومظهر مواقع الويب الخاصة بهم.

## **ما هو الشبح؟** {#ghost}

[Ghost][10] هي منصة تدوين شهيرة مفتوحة المصدر. هذه واحدة من أكثر منصات نشر المحتوى المستخدمة على نطاق واسع والتي يتم تبنيها بشكل كبير من قبل المطورين وأصحاب المواقع. بالإضافة إلى ذلك ، فإن Ghost صديق للغاية لكبار المسئولين الاقتصاديين ويأتي مع موضوعات مدمجة ، ونماذج ، والنشرات الإخبارية للبريد الإلكتروني ، والاشتراكات. يتم كتابة برنامج التدوين المجاني هذا في JavaScript وجميع الوثائق متاحة فيما يتعلق بالتطوير والنشر.

## متطلبات {#requirements}

في قسم البرنامج التعليمي WordPress Ghost ، سنرى المتطلبات اللازمة للترحيل من WordPress إلى Ghost. باستخدام البرنامج المساعد الرسمي لتصدير WordPress ، يمكنك بسهولة ترحيل المحتوى الخاص بك من WordPress إلى Ghost. في هذا البرنامج التعليمي ، سنرشدك حول كيفية تصدير المحتوى الخاص بك من WordPress إلى موقع الأشباح. لذلك ، يجب أن يكون لديك تثبيت عمل لـ WordPress و WordPress **Export Plugin** .

## محتويات التصدير من WordPress {#export}

بادئ ذي بدء ، سيتعين عليك تثبيت البرنامج المساعد. اتبع الخطوات التالية لتثبيت البرنامج المساعد
* انقر فوق "مكونات"**من قائمة الشريط الجانبي
* انقر فوق **إضافة**جديد واستخدم حقل البحث في الزاوية اليمنى العليا للبحث عن**Ghost Export** 
* **تثبيت**و **تنشيط** المكون الإضافي بواسطة "**Ghost Foundation** "

{{< figure align=center src="images/ghost-activate-plugin.png" alt="قم بتثبيت وتفعيل البرنامج المساعد الشبح لـ WordPress">}}

* بمجرد تنشيط المكون الإضافي ، انتقل إلى **أدوات** من القائمة الجانبية
* انقر فوق **التصدير إلى Ghost** مع قائمة الشريط الجانبي.
  * سيتم تزويدك بدليل حول كيفية إعداد محتوى WordPress الخاص بك لـ Ghost.
  * منذ ذلك الحين ، يستخدم Ghost العلامات بدلاً من الفئات ، لذا سيساعدك البرنامج المساعد في تحويل الفئات إلى علامات.
{{_LINE_37_}}
{{_LINE_38_}}
    ستغير الخطوات التالية بشكل دائم بنية محتوى موقع WordPress الخاص بك. إذا لم تكن متأكدًا من إجراء هذا التغيير ، فيرجى استخدام أداة تصدير WordPress القياسية ضمن الأدوات> التصدير لإنشاء نسخة احتياطية كاملة لجميع المحتوى الخاص بك.
{{_LINE_40_}}
{{_LINE_41_}}
* انتقل إلى **استيراد** في قائمة الشريط الجانبي
* انقر فوق **تشغيل المستورد** ضمن محول التصنيف****استيراد عنصر.
  * استخدم مربعات الاختيار لتحديد الفئات التي تريد استيرادها إلى العلامات الخاصة بك وبالتالي إلى موقع شبحك.
* ثم انقر فوق **تحويل الفئات إلى العلامات** .
* انتقل مرة أخرى إلى **التصدير إلى Ghost**داخل**أدوات** في قائمة الشريط الجانبي.
* انقر فوق الزر **تنزيل Ghost File** . ستقوم بتنزيل ملف مضغوط يحتوي على جميع المحتوى الخاص بك.

## استيراد المحتويات إلى شبح {#import}

في هذا القسم من البرنامج التعليمي WordPress Ghost ، سنقوم بتنفيذ الخطوات لاستيراد المحتويات إلى Ghost.
* قم بتسجيل الدخول إلى مسؤول الأشباح وانتقل إلى **Labs** عرض.
* انقر فوق الزر "اختر الملف **" ضمن خيار** استيراد المحتوى**وحدد ملف zip الذي تم تصديره
* انقر فوق **استيراد** . سيتم بعد ذلك استيراد جميع المحتوى الخاص بك إلى موقع Ghost.
في هذا الوقت ، ليس لدى Ghost أي نظام تعليق مدمج. البديل الأكثر شعبية هو Disqus.

## خاتمة {#conclusion}

هذا يقودنا إلى نهاية منشور المدونة هذا. في هذا البرنامج التعليمي WordPress Ghost ، تعلمنا كيفية إعداد محتوى WordPress الخاص بك جاهز للترحيل إلى Ghost. استخدمنا المكون الإضافي الرسمي لـ Ghost Migration بواسطة Ghost Foundation لأداء الترحيل. بالإضافة إلى ذلك ، سيساعدك منشور المدونة هذا بالتأكيد إذا كنت تتطلع إلى الترحيل من WordPress إلى Ghost حيث قمنا بتغطية جميع الخطوات اللازمة. علاوة على ذلك ، هناك العديد من منصات نشر المحتوى مفتوح المصدر والمقالات التعليمية المذكورة في قسم "استكشاف" أدناه. ومع ذلك ، فإن كل من منصات التدوين المفتوحة المصدر هذه هي أفضل البرامج الرائدة التي تقدم ميزات على مستوى المؤسسة لتلبية احتياجات مواقع الويب الخاصة بك.
أخيرًا ، [Containerize.com][11] يكتب منشورات مدونة جديدة على برامج أخرى مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع [هذا][12] من أجل التحديثات العادية.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [WordPress][9]
  * [Jekyll][13]
  * [الخطاب][14]
  * [شبح][10]
  * [كيفية مرسومة WordPress مع Docker Compose][15]
  * [كيفية تمكين ضغط GZIP في WordPress لتحسين الوصاية و SEO][16]
  * [تعزيز خيوطك مع تكامل WordPress المجاني CivIcrm][1]
  * [أتمتة نظام التذاكر باستخدام WordPress و Osticket][17]
  * [كيفية دمج منتدى الخطاب مع WordPress][2]
  * [زيادة حركة البحث على الموقع الإلكتروني باتباع أفضل 7 مدونات SEO][18]
  * [كيفية بناء موقع الويب الخاص بك باستخدام WordPress و Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
