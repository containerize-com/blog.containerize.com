---
title: "كيفية إعداد Mautic - تكامل Facebook" 
seoTitle: "كيفية إعداد Mautic - تكامل Facebook" 
description: "Mautic - يمكن أن يساعد تكامل Facebook في مزامنة خيوط Facebook الخاصة بك في نظام Mautic دون أي صعوبة ثم استخدامها في الحملات التسويقية." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "يؤدي Fetch Facebook إلى Mautic ، وإضافة جهات اتصال إلى شريحة وتشغيل حملات البريد الإلكتروني. استخدم أيضًا جهات الاتصال هذه لإنشاء جمهور مخصص لإعلانات Facebook." 
url: /ar/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## جلب Facebook يؤدي إلى Mautic ، إضافة جهات اتصال إلى قطاع وتشغيل حملات البريد الإلكتروني. استخدم أيضًا جهات الاتصال هذه لإنشاء جمهور مخصص لإعلانات Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="كيفية إعداد Mautic - تكامل Facebook">}}

Mautic هو برنامج أتمتة التسويق ويوفر تحكمًا كاملاً في رسائل البريد الإلكتروني التسويقية والصفحات المقصودة وسير العمل لأنشطة التسويق. تساعد حملات Mautic للتنقيط على إشراك الجمهور المستهدف والحفاظ على تحديثها حول منتجاتك. يوفر تكامل Mautic Facebook وسيلة لإضافتها إلى Mautic. مع هذا التكامل بين Mautic - Facebook ، سيتم إضافة خيوط من حملتك على Facebook تلقائيًا إلى Mautic.
سنغطي الأقسام التالية في هذا البرنامج التعليمي:
  * [تكوين حساب مطور Facebook][1]
  * [تكوين تطبيق مطور Facebook][2]
  * [تكوين المكون الإضافي mautic][3]
  * [الخلاصة][4]

## تكوين حساب مطور Facebook   {#Account}
  * انتقل إلى [Facebook للمطورين][5]
  * سجل حسابك إذا لم يكن لديك حساب.
  * لتسجيل حساب جديد ، انتقل إلى "ابدأ" من أعلى الزاوية اليمنى.
  * بعد ذلك ، حدد حساب Facebook الخاص بك واضغط على "متابعة".
  * ثم من النافذة المنبثقة ، انقر فوق الزر "مطور".

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Integration Facebook - سجل المطور">}}


## تكوين تطبيق مطور Facebook   {#app}
  * انقر فوق "إنشاء التطبيق الأول"

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Integration Facebook - إنشاء تطبيق أولي">}}

  * انقر على "إدارة تكامل الأعمال" واضغط على "متابعة".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - تكامل Facebook - اختر الغرض">}}

  * في النافذة التالية ، أدخل اسم التطبيق وحدد غرض التطبيق. انقر فوق الزر "إنشاء التطبيق".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Integration Facebook - ملء لإنشاء تطبيق">}}

  * الخطوة التالية هي إعداد تسجيل الدخول إلى Facebook. من صفحة المنتجات ، انقر فوق الزر "إعداد" تحت مربع "Facebook Login".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Integration Facebook - إعداد تسجيل الدخول إلى FB">}}

  * من القائمة اليسرى ، انقر فوق "الإعدادات" ضمن المنتجات -> تسجيل الدخول إلى Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - تكامل Facebook - تكوين تسجيل الدخول إلى FB">}}

  * أدخل عنوان URL لموقع Mautic الخاص بك. قم بتعيين "Client Oauth Login" و "Web Oauth Login" إلى "نعم".
  * انتقل الآن إلى الإعدادات -> الإعدادات الأساسية. من أسفل الصفحة ، انقر فوق الزر "+ إضافة منصة". بعد ذلك سيفتح نافذة منبثقة. أدخل عنوان URL لموقع الويب الخاص بك وحفظ التغييرات.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Integration Facebook - أضف موقع الويب كمنصة">}}


## تكوين المكون الإضافي Mautic   {#Configuration}
  * اذهب إلى لوحة القيادة Mautic.
  * ثم انتقل إلى "الإعدادات" من أعلى الزاوية اليمنى.
  * انقر على "الإضافات".
  * بعد ذلك ، افتح إعدادات البرنامج المساعد "Facebook".
  * ثم أدخل معرف العميل وسرية العميل. احصل على هذه المفاتيح من تطبيق مطوري Facebook الذي أنشأته للتو الخطوات المذكورة أعلاه.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Integration Facebook - تكوين المكون الإضافي FB على Mautic">}}

  * اضغط على زر "Authorize App".
  * بعد ذلك ، سيتم فتح نافذة ترخيص Facebook جديدة. اتبع المطالبات لإكمال إذن التطبيق.
  * بعد الترخيص الناجح ، انتقل إلى علامة التبويب "Contact Mapping" من البرنامج المساعد لـ Mautic's Facebook.
  * هنا يمكنك تعيين حقول الاتصال الخاصة بك إلى حقول Facebook.
  * أخيرًا ، انشر الإعدادات وأنت على ما يرام.

## الخاتمة   {#conclusion}
Mautic - يمكن أن يساعد تكامل Facebook في مزامنة خيوط Facebook الخاصة بك في نظام Mautic دون أي صعوبة. في تطبيق Mautic ، يمكنك إضافة كل هذه الخيوط إلى مقطع. يمكنك تشغيل حملات التسويق عبر البريد الإلكتروني عليها. يمكن أن يساعد هذا حقًا عملك على النمو وتسويق وبيع المنتجات/الخدمات إلى جمهور مستهدف أكبر بكثير.

## يستكشف
لمعرفة المزيد عن Mautic و Facebook ، يرجى زيارة:
  * [Mautic | منصة تكنولوجيا تسويق المحتوى مفتوحة المصدر][6]
  * [كيفية إعداد حملات mautic باستخدام منشئ الحملة][7]
  * [تكامل Drupal Mautic لأتمتة رعاية الرصاص][8]
  * [أتمتة التسويق مع تكامل Mautic و WooCommerce][9]
  * [دمج Mautic & Joomla لأتمتة التسويق الرقمي][10]

  
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
