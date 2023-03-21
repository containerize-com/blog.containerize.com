---
title: "دليل المبتدئين لإنشاء وحدة بريستاشوب" 
seoTitle: "دليل المبتدئين لإنشاء وحدة بريستاشوب" 
description: "Prestashop هو برنامج تجارة إلكترونية مفتوح المصدر فعال وفعال من حيث التكلفة لإعداد المتجر عبر الإنترنت. تساعد Prestashop Addons أصحاب المتجر على توسيع الوظائف." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "وحدات Prestashop هي برامج صغيرة تتيح لك تحسين وظائف متجرك. سنتعلم كيفية إنشاء وحدة أساسية في هذا البرنامج التعليمي." 
url: /ar/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## وحدات بريستاشوب هي برامج صغيرة تتيح لك تحسين وظائف متجرك. سنتعلم كيفية إنشاء وحدة أساسية في هذا البرنامج التعليمي.

{{< figure align=center src="images/prestashop-module.png" alt="وحدة بريستاشوب">}}

**Prestashop ** هو برنامج التجارة الإلكترونية التي هي مجانية ومفتوحة بنسبة 100 ٪. يمكّن ذلك أصحاب المتاجر من إعداد تواجدهم عبر الإنترنت بسهولة وتوسيع نطاق الأعمال على نطاق واسع. يأتي Prestashop مع ميزات افتراضية ويمكنك الحاجة إلى مزيد من الوظائف لمتطلبات عملك من حين لآخر. يعد Marketplace لـ Prestashop مكانًا رائعًا للعثور على ميزات إضافية يمكن استخدامها لتوسيع وظائف المتجر. علاوة على ذلك ، يمكنك العثور على وحدات مجانية ومدفوعة في Marketplace. ومع ذلك ، يمكنك إنشاء وحدة مخصصة من نقطة الصفر أيضًا.
سنناقش الموضوعات أدناه بالتفصيل إلى  **إنشاء وحدة بريستاشوب ** .
  * [المتطلبات][1]
  * [أساسيات تطوير الوحدة النمطية][2]
  * [إنشاء وحدة بريستاشوب لدينا][3]
  * [الخلاصة][4]

## المتطلبات   {#REQ}
  * تثبيت prestashop 1.6 أو أكثر.
  * على دراية بريستاشوب.
  * فهم PHP.

## أساسيات تطوير الوحدة النمطية   {#basics}
قبل البدء في الترميز ، من المهم حقًا معرفة المفاهيم الأساسية لتطوير وحدة Prestashop  **** . سوف يسمح لك ببناء وإدارة الوحدة الخاصة بك بسرعة.
**التكوين ** - يتيح لك التكوين حفظ البيانات في قاعدة بيانات المتجر دون الحاجة إلى جدول محدد للوحدة. يحتوي جدول التكوين على قائمة بخصائص القيمة الرئيسية التي يمكن الوصول إليها من أي مكان.
**Hooks ** - السنانير هي وسيلة لتوصيل أي أحداث Prestashop معينة مع الكود الخاص بك. يمكنك استخدام السنانير لوضع الكود الخاص بك في الصفحات وللإجراءات المحددة مثل إرسال البريد الإلكتروني في حدث معين.
**عناصر واجهة المستخدم ** - يستخدم مطورو الوحدات أجهزة واجهة المستخدم لعرض المحتوى عند الاقتضاء.
**عقيدة ** - تتيح لك العقيدة ORM إدارة بيانات قاعدة البيانات الخاصة بك من خلال الكائنات. يوفر هذا طبقة مجردة تتيح لك إجراء إجراءات إدراج/تحديث باستخدام مكالمة بسيطة.

## قم بإنشاء وحدة PrestAshop   {#Create}
  *إنشاء دليل الوحدة النمطية المسماة  **myfirstmodule **  في  **وحدات **  دليل تثبيت prestashop الخاص بك. ضع جميع الملفات في دليل الوحدة النمطية.
  *قم بإنشاء ملف رئيسي مع الاسم  **myfirstmodule.php **  ونسخ الكود التالي فيه.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  *إنشاء  **تثبيت () **  و  **Uninstall () **  طرق. أضف الطرق التالية في ملف  **myfirstmodule.php ** .
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * استدعاء أساليب خاصة لتفعيل السنانير المسجلة لدينا. سوف نستخدم هذه الطرق لعرض "Hello World!" نص على الأشرطة الجانبية. أضف الكود التالي في ملف  **myfirstmodule.php ** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *أخيرًا ، قسم المسؤول المفتوح ، تحميل و  **تثبيت وحدة بريستاشوب ** .

## الخاتمة   {#conclusion}
لقد ناقشنا المفاهيم الأساسية لبناء وحدة  **prestashop **  في هذا البرنامج التعليمي. علاوة على ذلك ، قمنا بتطوير الوحدة الأساسية التي يمكن استخدامها كنقطة انطلاق لمزيد من الوحدات النمطية المتقدمة. [Containerize.com][5] يعمل باستمرار على منشورات المدونة التعليمية الجديدة. للحصول على آخر التحديثات ، يرجى البقاء على اتصال مع فئة [برنامج التسوق][6].

## يستكشف
يمكنك العثور على الروابط التالية مفيدة بالإضافة إلى البرنامج التعليمي  **Prestashop Create Tutorial ** .
  * [Prestashop - برنامج عربة التسوق المجانية][7]
  * [أفضل 5 برامج عربة التسوق مفتوحة المصدر في عام 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
