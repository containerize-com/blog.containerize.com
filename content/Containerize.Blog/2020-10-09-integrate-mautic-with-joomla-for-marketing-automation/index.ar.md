---
title: "دمج Mautic & Joomla لأتمتة التسويق الرقمي " 
seoTitle: "دمج Mautic & Joomla لأتمتة التسويق الرقمي" 
description: "يمكن أن يساعد تكامل Mautic و Joomla عملك في أتمتة التسويق الرقمي. إنه يساعد على تسويق المنتجات من خلال حملات Mautic." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "يمكن أن يساعد تكامل Mautic و Joomla عملك في أتمتة التسويق الرقمي. يساعد على تسويق المنتجات من خلال حملات mautic عبر الإنترنت." 
url: /ar/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## يمكن أن يساعد تكامل Mautic و Joomla عملك في أتمتة التسويق الرقمي. يساعد على تسويق المنتجات من خلال حملات mautic عبر الإنترنت.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="تكامل Mautic و Joomla">}}


## كيف يمكن أن يساعد هذا التكامل عملك:
سيسمح لك تكامل Mautic و Joomla بتسويق منتجاتك/خدماتك بطريقة سهلة للغاية ولكنها فعالة. يمنحك Mautic حل التسويق المجاني مفتوح المصدر سيطرة كبيرة على حملات التسويق وبسيطة للغاية لمواصلة حملة التنقيط وفقًا للوضع. على سبيل المثال: يمنحك المعلومات التي إذا قرأ العميل البريد الإلكتروني أو زار صفحات المنتج الخاصة بك. باستخدام هذه المعلومات ، يمكنك إعداد الحملات لتحديد ما إذا كنت ستستمر إرسال رسائل البريد الإلكتروني التالية لهذا العميل أم لا. سيساعد هذا التكامل في أتمتة التسويق الرقمي. سوف يرشدك منشور المدونة هذا مع الأقسام التالية:
  * [نظرة عامة][1]
  * [تثبيت المكون الإضافي Joomla][2]
  * [تكوين mautic][3]
  * [الخلاصة][4]

## ملخص: {#overview}

Mautic هو نظام أتمتة التسويق مفتوح المصدر. إنه برنامج تسويقي مجاني. يمكنك استخدامه لإنشاء حملات غير محدودة لإرسال رسائل البريد الإلكتروني التسويقية للعملاء المستهدفين.
يعد Joomla أيضًا نظامًا مجانيًا لإدارة المحتوى مفتوح المصدر لتطوير مواقع الويب. من السهل جدًا إعداد مواقع الويب الخاصة بك على Joomla. لديها الآلاف من الامتدادات التي يمكن استخدامها وفقا لمتطلباتك.

## تثبيت Plugin Joomla: {#plugin}

  * قم بتنزيل [البرنامج المساعد][5].
  * ثم انتقل إلى الامتدادات -> إدارة -> تثبيت.
  * أدخل عنوان URL Mautic.
  * سيتم إدراج صورة GIF 1 بكسل محملة من مثيل Mautic الخاص بك.
  * التضمين النماذج في محتوى Joomla باستخدام مقتطف الرمز التالي: {mautic type = "form" id}
  * ثم يمكنك إنشاء النموذج الموجود في تطبيق Mautic والحصول على المعرف من عنوان URL.
  * يمكن أيضًا إضافة المحتوى الديناميكي باستخدام Snippt Code التالي: {mautic type = "content" slot = "slot_name"} المحتوى الافتراضي هنا. {/mautic}
  * slot_name هو معرف الفتحة التي حددتها عند إضافة قرار "طلب محتوى ديناميكي" لحملتك.
بعد التثبيت ، تحتاج إلى إنشاء وتضمين نماذج على موقع Joomla الخاص بك. سترسل هذه النماذج معلومات جهات الاتصال إلى Mautic. بمجرد الانتهاء من تكوين البرنامج المساعد على Joomla ، ستكون الخطوة التالية هي تكوينه على Mautic.

## تكوين mautic: {#mautic}

  * انتقل إلى موقع mautic الخاص بك ، انتقل إلى الإعدادات.
  * انقر على التكوين.
  * من إعدادات API ، تمكين API.
  * لتوصيل Mautic مع Joomla يجب أن يكون لديك شهادة SSL على مواقعك.
  * بعد ذلك ، تحتاج إلى الذهاب إلى بيانات اعتماد API.
* إذا لم يكن موقع الويب الخاص بك يحتوي على SSL (لذلك تذهب إلى **http**: //yourjoomlasite.com) ، حدد OAuth1. إذا كان لديك SSL على موقعك (لذلك انتقل إلى**https** : //yourjoomlasite.com) ، حدد OAuth2.
  * انقر فوق جديد ، ووفر اسمًا (يمكن أن يكون أي شيء تريده) وعنوان URL الكامل لـ Joomla! الموقع ([https://yourjoomlasite.com][6])
  * انقر فوق حفظ وأغلق.
  * هنا يمكنك الحصول على مفاتيح عامة وخاصة.
  * انتقل إلى موقع Joomla الخاص بك وابحث عن المكون الإضافي Mautic الذي قمت بتثبيته مسبقًا.
  * أدخل المفاتيح العامة والسرية التي قمت بإنشائها من موقع Mautic الخاص بك.
  * حدد إما OAUTH1 أو OAUTH2 (كما حددته في Mautic) وقم بتعيين مستخدمين مسجلين إلى نعم.
  * حفظ ونشر البرنامج المساعد.
  * بعد ذلك ستتمكن من تفويض موقع Joomla الخاص بك.
  * سوف يعيد Joomla توجيه مثيل Mautic إلى التفويض.
  * انقر فوق "تفويض" وهذا كل شيء.
  * ستبدأ في الحصول على جهات اتصال في موقع mautic الخاص بك.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="تكامل Mautic و Joomla">}}


## خاتمة: {#conclusion}

في هذه المقالة ناقشنا كيف يمكن أن يساعد Mautic و Joomla معًا في أتمتة التسويق الرقمي. سيسمح لك حل التسويق المجاني مفتوح المصدر بتجميع جميع جهات الاتصال القادمة من موقع Joomla وإنشاء حملات تسويقية باستخدامها. يتيح لك Mautic إنشاء شرائح ، بحيث يمكنك تشغيل حملات مختلفة على شرائح مختلفة وفقًا لاحتياجاتك. يرجى التحقق من [Joomla][7] و [Mautic][8] المدونات للحصول على نظرة عامة مفصلة.

## يستكشف:
قد تجد الروابط التالية ذات الصلة:
  * [Joomla][7]
  * [mautic][8]
  * [كيفية إعداد تكامل Mautic - Facebook][9]
  * [تكامل Drupal Mautic لأتمتة رعاية الرصاص][10]
  * [الأتمتة التسويقية باستخدام Mautic و WordPress WooCommerce][11]
  * [كيفية إعداد حملات التسويق في Mautic][12]



[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
