---
title: "دليل المبتدئين لتطوير البرنامج المساعد phplist" 
seoTitle: "دليل المبتدئين لتطوير البرنامج المساعد phplist" 
description: "احصل على التعرف على بنية Phplist Plugin وتعلم كيفية إنشاء مكون إضافي أساسي. يساعدك هذا المبدأ التوجيهي على تخصيص وظائف phplist وتعزيزها." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "يتيح Phplist Plugins للمطورين تخصيص المنتج وتعزيز وظائفه. في هذا المنشور ، سوف نتعلم كيفية إنشاء البرنامج المساعد الأساسي في phplist." 
url: /ar/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## يتيح المكونات الإضافية للمطورين تخصيص المنتج وتعزيز وظائفه. في هذا المنشور ، سوف نتعلم كيفية إنشاء البرنامج المساعد الأساسي في phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="البرنامج المساعد phplist">}}

يعد دعم البرنامج المساعد جزءًا أساسيًا من البرنامج ، خاصة بالنسبة للأنظمة المصدر المفتوح. يتيح ذلك للمطورين إنشاء مكون إضافي جديد لتوسيع الميزات.**phplist**يشجع تطوير الإضافات بحيث يمكن للمطورين استخدامها لإضافة ميزات جديدة وفقًا لمتطلبات أعمالهم. المكوّن الإضافي Phplist هو مجموعة رمز مستقلة تحتوي على رمز لـ PHP و HTML و CSS و JavaScript.
تدعم التطبيقات الإضافات بسبب العديد من الأسباب وبعضها:
  * لا تعدل الوظائف الأساسية.
  * السماح للمطورين بإنشاء ميزات جديدة.
  * تقليل حجم البرنامج.
سنناقش الموضوعات أدناه بالتفصيل في هذا البرنامج التعليمي.
* [**المتطلبات الأساسية**][2]
* [**أساسيات تطوير البرنامج المساعد phplist**][3]
* [**إنشاء البرنامج المساعد phplist لدينا**][4]
* [**الخلاصة**][5]

## المتطلبات الأساسية   {#REQ}
  * أحدث إصدار من phplist.
  * على دراية phplist و php.
  * فهم HTML / CSS و JavaScript.

## أساسيات تطوير البرنامج المساعد phplist   {#basics}
ستعمل الطرق التالية على تحسين وظائف البرنامج المساعد phplist.
***الصفحات**- قم بإنشاء صفحات لأنشطة مثل التقارير والإحصائيات وعرض المعلومات وغيرها الكثير.
***الخطافات**- يتيح لك ذلك استدعاء الوظائف في أماكن محددة.
هناك ثلاثة أنواع من الإضافات الخاصة لـ Phplist. يمكن تمكين مكون إضافي واحد من كل نوع فقط.
***Plugin Plugin**- يتيح تنفيذ محرر لتحرير الحملات أو القوالب.
***المكون الإضافي للمصادقة**- يسمح هذا بإضافة آلية جديدة لمصادقة المسؤولين.
***مكون البريد الإلكتروني للمرسل**-يسمح بتنفيذ طريقة جديدة لإرسال البريد الإلكتروني بدلاً من الوظائف المدمجة.

## قم بإنشاء البرنامج المساعد phplist   {#create}
بادئ ذي بدء ، تحتاج إلى تمديد فئة phplistplugin الأساسية. لإنشاء مكون إضافي ، تحتاج إلى إنشاء دليل يسمى "HelloWorld" ضمن البرنامج المساعد \ _Rootdir وإنشاء ملف يسمى HelloWorld.php في جذر Plugins Directory. يمكنك التحقق من ملف config.php للعثور على قيمة متغير البرنامج المساعد \ _Rootdir. نسخ كود أدناه في ملف helloWorld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
يجب عليك تعيين $ coderoot على دليل البرنامج المساعد الخاص بك. للتأكد من تهيئة المكون الإضافي بشكل صحيح ، يجب عليك استدعاء مُنشئ الأصل. قم بإنشاء ملف main.php ووضعه في دليل البرنامج المساعد. انسخ الرمز التالي فيه.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
ضع ملف فئة HelloWorld.php ودليل المكون الإضافي الخاص بك في Plugin Rootdir لتثبيت البرنامج المساعد. لتنشيط مكون إضافي ، انقر فوق علامة تبويب التكوين في شريط القائمة ، ثم انقر فوق "إدارة الإضافات". ستعرض لك صفحة البرنامج المساعد قائمة بالمكونات الإضافية المتوفرة ويمكنك تمكين/تعطيل نموذج البرنامج المساعد هناك.
يمكنك الوصول إلى البرنامج المساعد الخاص بك من خلال عنوان URL التالي مثل http://example.com/admin/؟page=main&pi=helloworld. استبدل example.com باسم المجال الخاص بك.

## الخاتمة   {#con}
لقد تعلمنا أساسيات**Phplist Plugin**Development وأنشأت عينة مكون إضافي. كنقطة انطلاق ، يمكنك متابعة هذا المبدأ التوجيهي واستكشاف تطوير البرنامج المساعد لتعزيز الوظائف.
أخيرًا ، [**Containerize.com**][6] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذه النشرات الإخبارية [****][7] لأحدث التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة.
* [**phplist**][8]
* [**Mailtrain**][9]
* [**listmonk**][10]
* [**Moonmail**][11]
* [**Mailman**][12]
* [**Top 5 Open Source Newsletter Software في 2021**][13]
* [**كيفية تكوين تطبيقات متعددة المستأجرين في phplist**][14]
* [**كيفية إنشاء وإرسال النشرة الإخبارية باستخدام phplist**][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
