---
title: "راهنمای مبتدیان برای ایجاد ماژول prestashop" 
seoTitle: "راهنمای مبتدیان برای ایجاد ماژول prestashop" 
description: "Prestashop یک نرم افزار تجارت الکترونیکی منبع باز و کارآمد برای راه اندازی فروشگاه آنلاین است. افزونه های Prestashop به صاحبان فروشگاه کمک می کند تا عملکرد را گسترش دهند." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "ماژول های Prestashop برنامه های کوچکی هستند که به شما امکان می دهد عملکرد فروشگاه خود را بهبود بخشید. ما یاد خواهیم گرفت که چگونه یک ماژول اساسی را در این آموزش بسازیم." 
url: /fa/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## ماژول های Prestashop برنامه های کوچکی هستند که به شما امکان می دهد عملکرد فروشگاه خود را بهبود بخشید. ما یاد خواهیم گرفت که چگونه یک ماژول اساسی را در این آموزش بسازیم.

{{< figure align=center src="images/prestashop-module.png" alt="ماژول پرستاشوپ">}}

**Prestashop ** نرم افزار تجارت الکترونیک است که 100 ٪ رایگان و منبع باز است. این امر به صاحبان مغازه ها این امکان را می دهد تا به راحتی حضور آنلاین خود را تنظیم کرده و تجارت را در مقیاس وسیع انجام دهند. Prestashop با ویژگی های پیش فرض همراه است و شما می توانید گاهی اوقات به نیازهای بیشتری برای نیازهای تجاری خود نیاز داشته باشید. بازار Prestashop مکانی فوق العاده برای یافتن ویژگی های افزودنی است که می تواند برای گسترش عملکرد فروشگاه استفاده شود. علاوه بر این ، شما می توانید ماژول های رایگان و پرداخت شده را در Marketplace پیدا کنید. با این حال ، می توانید ماژول سفارشی را از ابتدا ایجاد کنید.
ما در مورد مباحث زیر با جزئیات در مورد  **ایجاد ماژول prestashop **  بحث خواهیم کرد.
  * [الزامات][1]
  * [اصول توسعه ماژول][2]
  * [ماژول prestashop ما را ایجاد کنید][3]
  * [نتیجه گیری][4]

## الزامات   {#REQ}
  * Prestashop 1.6 یا بیشتر را نصب کنید.
  * آشنا با prestashop.
  * درک PHP.

## اصول توسعه ماژول   {#Basics}
قبل از شروع برنامه نویسی ، دانستن در مورد مفاهیم اصلی برای توسعه ماژول Prestashop ** بسیار مهم است. این به شما امکان می دهد ماژول خود را به سرعت بسازید و مدیریت کنید.
**پیکربندی ** - پیکربندی به شما امکان می دهد بدون نیاز به جدول خاص ماژول ، داده ها را در پایگاه داده فروشگاه ذخیره کنید. جدول پیکربندی شامل لیستی از خصوصیات ارزش کلیدی است که از هر کجا قابل دسترسی است.
**قلاب ** - قلاب ها راهی برای اتصال هرگونه رویداد خاص Prestashop با کد شما هستند. می توانید از قلاب ها برای قرار دادن کد خود در صفحات و برای اقدامات خاص مانند ارسال ایمیل در رویداد خاص استفاده کنید.
**ابزارک ** - توسعه دهندگان ماژول از ابزارک ها برای نمایش محتوا در صورت لزوم استفاده می کنند.
**دکترین ** - دکترین ORM به شما امکان می دهد داده های پایگاه داده خود را از طریق اشیاء مدیریت کنید. این یک لایه انتزاعی را فراهم می کند که به شما امکان می دهد اقدامات درج/به روزرسانی را با تماس ساده انجام دهید.

## ماژول prestashop ما را ایجاد کنید   {#Create.
  *دایرکتوری ماژول به نام  **myfirstmodule **  در  **ماژول ها **  دایرکتوری نصب prestashop خود را ایجاد کنید. تمام پرونده ها را در فهرست ماژول خود قرار دهید.
  *فایل اصلی را با نام  **myfirstmodule.php **  ایجاد کنید و کد زیر را در آن کپی کنید.
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
  *ایجاد  **نصب () **  و  **حذف () **  روش ها. روشهای زیر را در پرونده  **myfirstmodule.php **  اضافه کنید.
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
  * برای فعال کردن قلاب های ثبت شده ما با روش های ویژه تماس بگیرید. ما از این روشها برای نمایش "سلام جهان!" متن به نوارهای جانبی. کد زیر را در پرونده  **myfirstmodule.php **  اضافه کنید.
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
  *سرانجام ، بخش Administrator را باز کنید ، بارگذاری کنید و  **ماژول Prestashop **  را نصب کنید.

## نتیجه گیری   {#conclusion}
ما در این آموزش مفاهیم اصلی برای ساخت ماژول  **prestashop **  را مورد بحث قرار داده ایم. علاوه بر این ، ما ماژول اساسی را توسعه داده ایم که می تواند به عنوان نقطه شروع برای ماژول های پیشرفته بیشتر استفاده شود. [Containerize.com][5] به طور مداوم روی پست های وبلاگ آموزش جدید کار می کند. برای آخرین به روزرسانی ها ، لطفاً با گروه [نرم افزار سبد خرید][6] در تماس باشید.

## کاوش کنید
علاوه بر آموزش  **Prestashop Module Creation **  ، می توانید پیوندهای زیر را نیز پیدا کنید.
  * [Prestashop - نرم افزار سبد خرید رایگان][7]
  * [5 نرم افزار سبد خرید منبع باز در سال 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
