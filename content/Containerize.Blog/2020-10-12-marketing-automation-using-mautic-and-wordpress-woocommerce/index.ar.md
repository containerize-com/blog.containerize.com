---
title: "أتمتة التسويق مع تكامل Mautic و WooCommerce" 
seoTitle: "أتمتة التسويق مع تكامل Mautic و WooCommerce" 
description: "يتيح تكامل Mautic و WooCommerce إرسال معلومات الاتصال من مواقع WordPress إلى Mautic. وهذا يساعد على تسويق المنتجات من خلال تطبيق Mautic." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "تفاخر المبيعات باستخدام Mautic و WordPress WooCommerce معًا. أتمتة عملية التسويق عن طريق جلب بيانات العملاء من WordPress إلى Mautic." 
url: /ar/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## تفاخر المبيعات باستخدام WordPress WooCommerce معًا. أتمتة عملية التسويق من خلال جلب بيانات العملاء من WordPress إلى Mautic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="أتمتة التسويق باستخدام تكامل Mautic-Woocommerce">}}


## ملخص:
يوفر تكامل Mautic-Woocommerce طريقة سهلة للحصول على جميع جهات الاتصال في تطبيق Mautic. ثم باستخدام جهات الاتصال هذه ، يمكنك إنشاء حملات تسويقية وفقًا لمتطلباتك. Mautic هي أداة تسويقية رائعة تمنحك التحكم الكامل في حملاتك التسويقية.
Mautic هو حل أتمتة التسويق مفتوح المصدر. يتم استخدامه لإنشاء حملات تسويقية ، شرائح ، نماذج ، تقارير وأكثر من ذلك بكثير.
WooCommerce هو البرنامج المساعد للتجارة الإلكترونية مفتوحة المصدر لـ WordPress. إنه حل التجارة الإلكترونية المستخدمة في جميع أنحاء العالم في هذه المرحلة. هناك المئات من الوظائف الإضافية المتاحة لـ WooCommerce والتي يمكن استخدامها وفقًا لاحتياجاتك.
هناك مكون إضافي متوفر لـ Mautic و WordPress يوفر حل أتمتة التسويق. يرجى اتباع هذه الخطوات لدمج WooCommerce مع Mautic باستخدام المكون الإضافي [التكامل مع Mautic لـ WooCommerce - أتمتة التسويق المفتوح المصدر.][1]
ستغطي هذه المدونة الأقسام التالية:
  * [تكوين البرنامج المساعد WordPress][2]
  * [تكوين mautic][3]
  * [الأفكار النهائية][4]

## تكوين المكون الإضافي WordPress   {#WordPress}
  1. انتقل إلى الإضافات.
  2. انقر فوق "إضافة جديد".
  3. ابحث عن "**تكامل مع Mautic لـ WooCommerce**".
  4. بمجرد العثور على البرنامج المساعد ، انقر على "تثبيت الآن".
  5. بعد التثبيت ، انقر فوق "تنشيط".
  6. ثم انتقل إلى WooCommerce -> Mautic -> Connect Tab.
  7. املأ النموذج بالبيانات التالية:
      * عنوان URL الأساسي.
      * معرف العميل.
      * معرف سري.
  8. ستأتي كل هذه الحقول بعد التكوين على تطبيق Mautic ، والذي تم شرحه في القسم التالي.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="تكامل Mautic و WordPress">}}


## تكوين Mautic:   {#Mautic}
  1. من موقع mautic الخاص بك ، انتقل إلى الإعدادات.
  2. انتقل إلى التكوينات.
  3. تمكين API من إعدادات API.
  4. اذهب إلى بيانات اعتماد API.
  5. انقر فوق "جديد" ، أدخل أي اسم تريده وعنوان URL الكامل لموقع WordPress الخاص بك ، أي [http://yourwordpresssite.com/wp-admin/admin.php 'Budap55]
  6. ضرب حفظ وإغلاق.
  7. سوف يخلق مفاتيح عامة وخاصة.
  8. انتقل إلى موقع WordPress الخاص بك وابحث عن المكون الإضافي Mautic الذي قمت بتثبيته مسبقًا.
  9. أدخل المفاتيح العامة والسرية التي أنشأتها من موقع Mautic الخاص بك.
 10. حدد إما OAuth1 أو OAUTH2 (كما حددته في Mautic) وقم بتعيين مستخدمين مسجلين إلى نعم.
 11. حفظ ونشر البرنامج المساعد.
 12. بعد ذلك ستتمكن من تفويض موقع WordPress الخاص بك.
 13. سوف يعيد WordPress توجيه مثيل Mautic إلى التفويض.
 14. انقر فوق "تفويض" وهذا كل شيء.
 15. ستبدأ في الحصول على جهات اتصال في موقع Mautic الخاص بك.

{{< figure align=center src="images/mautic-1024x622.png" alt="خطوات تكامل Mautic و WordPress">}}


## الأفكار النهائية:   {#final}
يمكن أن يساعدك تكامل Mautic-Woocommerce معًا على تحقيق أهدافك التسويقية. هذا التكامل هو أحد أفضل الحلول لأتمتة تسويق التجارة الإلكترونية. باستخدام WordPress ، يمكنك بسهولة الحصول على الكثير من العملاء ، ثم مع Mautic ، يمكنك إنشاء حملات غير محدودة لاستهداف هؤلاء العملاء والحفاظ على تحديثهم فيما يتعلق بمنتجاتك/خدماتك ، والتي ستفاخر المبيعات بالتأكيد.

## يستكشف:
قد تجد الروابط التالية ذات الصلة:
  * [Wodpress][6]
  * [mautic][7]
  * [كيفية إعداد تكامل Mautic - Facebook][8]
  * [تكامل Drupal Mautic لأتمتة رعاية الرصاص][9]
  * [أتمتة التسويق باستخدام WOOCOMMERCE MAUTIC و WORDPRESS][10]
  * [كيفية إعداد حملات التسويق في Mautic][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/ar/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
