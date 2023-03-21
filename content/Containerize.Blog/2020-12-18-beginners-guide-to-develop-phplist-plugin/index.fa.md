---
title: "راهنمای مبتدیان برای توسعه افزونه Phplist" 
seoTitle: "راهنمای مبتدیان برای توسعه افزونه Phplist" 
description: "با معماری افزونه Phplist آشنا شوید و یاد بگیرید که چگونه یک افزونه اصلی Phplist ایجاد کنید. این راهنما به شما کمک می کند تا عملکرد PHPLIST را شخصی سازی و تقویت کنید." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "افزونه های Phplist به توسعه دهندگان این امکان را می دهد تا محصول را سفارشی کنند و عملکرد آن را تقویت کنند. در این پست یاد خواهیم گرفت که چگونه افزونه اصلی را در Phplist ایجاد کنیم." 
url: /fa/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## افزونه های Phplist به توسعه دهندگان این امکان را می دهد تا محصول را سفارشی کنند و عملکرد آن را تقویت کنند. در این پست یاد خواهیم گرفت که چگونه افزونه اصلی را در Phplist ایجاد کنیم.

{{< figure align=center src="images/phplist-plugin.png" alt="افزونه Phplist">}}

پشتیبانی از افزونه بخش مهمی از نرم افزار ، به ویژه برای سیستم های منبع باز است. این به توسعه دهندگان اجازه می دهد تا افزونه جدیدی را برای گسترش ویژگی ها بسازند.**Phplist**توسعه افزونه ها را تشویق می کند تا توسعه دهندگان بتوانند از آنها برای اضافه کردن ویژگی های جدید با توجه به نیازهای تجاری خود استفاده کنند. افزونه Phplist یک مجموعه کد مستقل است که حاوی کد برای PHP ، HTML ، CSS و JavaScript است.
برنامه ها به دلایل زیادی از افزونه ها پشتیبانی می کنند و برخی از آنها عبارتند از:
  * عملکرد اصلی را تغییر ندهید.
  * به توسعه دهندگان اجازه می دهد تا ویژگی های جدیدی ایجاد کنند.
  * اندازه نرم افزار را کاهش دهید.
ما در این آموزش در مورد موضوعات زیر به تفصیل بحث خواهیم کرد.
* [**پیش نیاز**][2]
* [**مبانی توسعه افزونه Phplist**][3]
* [**افزونه phplist ما را ایجاد کنید**][4]
* [**نتیجه گیری**][5]

## پیش نیازها   {#req}
  * آخرین نسخه Phplist.
  * آشنا با phplist و php.
  * درک HTML / CSS و JavaScript.

## مبانی توسعه افزونه Phplist   {#Basics
روشهای زیر عملکرد یک افزونه Phplist را بهبود می بخشد.
***صفحات**- صفحاتی را برای فعالیت هایی مانند گزارش ، آمار ، نمایش اطلاعات و موارد دیگر ایجاد کنید.
***قلاب**- این به شما امکان می دهد تا در مکان های خاص از عملکرد استفاده کنید.
سه نوع افزونه ویژه برای Phplist وجود دارد. یک افزونه از هر نوع فقط می تواند فعال شود.
* * افزونه ویرایشگر**- اجازه می دهد تا ویرایشگر برای ویرایش کمپین ها یا الگوهای ویرایش.
* * افزونه تأیید اعتبار**- این امکان اضافه کردن مکانیسم جدید برای تأیید اعتبار مدیران را فراهم می کند.
* * افزونه فرستنده ایمیل**-اجازه می دهد تا به جای عملکرد داخلی ، یک روش جدید برای ارسال ایمیل را اجرا کنید.

## افزونه phplist ما   {#Create} ایجاد کنید
اول از همه ، شما باید کلاس هسته Phplistplugin را گسترش دهید. برای ایجاد یک افزونه ، باید یک دایرکتوری به نام "Helloworld" را در زیر افزونه \ _rootdir ایجاد کنید و پرونده ای به نام Helloworld.php را در Root of Plugins Directory ایجاد کنید. برای یافتن مقدار افزونه \ _rootdir می توانید پرونده config.php را بررسی کنید. در زیر کد را در پرونده helloworld.php کپی کنید.
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
شما باید $ coderoot را روی فهرست افزونه خود تنظیم کنید. برای اطمینان از اینکه این افزونه به درستی اولیه است ، باید با سازنده والدین تماس بگیرید. یک فایل main.php ایجاد کنید و آن را در فهرست افزونه خود قرار دهید. کد زیر را در آن کپی کنید.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
پرونده کلاس Helloworld.php و فهرست افزونه خود را در افزونه Rootdir قرار دهید تا افزونه نصب شود. برای فعال کردن یک افزونه ، بر روی برگه پیکربندی در نوار منو کلیک کرده و سپس بر روی مدیریت افزونه ها کلیک کنید. صفحه افزونه لیستی از افزونه های موجود را به شما نشان می دهد و می توانید فرم افزونه خود را در آنجا فعال یا غیرفعال کنید.
شما می توانید با آدرس URL زیر مانند http://example.com/admin/؟page=main&pi=helloworld به افزونه خود دسترسی پیدا کنید. به عنوان مثال با نام دامنه خود جایگزین کنید.

## نتیجه گیری   {#con}
ما اصول اولیه افزونه**phplist**را یاد گرفته ایم و یک افزونه نمونه ایجاد کرده ایم. به عنوان یک نقطه شروع ، می توانید از این دستورالعمل پیروی کرده و توسعه افزونه را بیشتر برای تقویت عملکرد کشف کنید.
سرانجام ، [**Containerize.com**][6] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [**خبرنامه ها**][7] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید.
* [**phplist**][8]
* [**mailtrain**][9]
* [**listmonk**][10]
* [**moonmail**][11]
* [**Mailman**][12]
* [**5 نرم افزار خبرنامه منبع باز در سال 2021**][13]
* [**نحوه پیکربندی برنامه چند مستاجر در phplist**][14]
* [**نحوه ایجاد و ارسال خبرنامه با استفاده از phplist**][15]

  
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
