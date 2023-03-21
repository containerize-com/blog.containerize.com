---
title: "اولین پروژه PHP خود را در LocalHost با استفاده از XAMPP ایجاد کنید" 
seoTitle: "اولین پروژه PHP خود را در LocalHost با استفاده از XAMPP ایجاد کنید" 
description: "تنظیم محیط توسعه وب با استفاده از سرور وب رایگان و منبع باز XAMPP. با دنبال کردن چند مرحله آسان ، پروژه های PHP خود را در LocalHost ایجاد و آزمایش کنید." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "محیط توسعه وب را با استفاده از سرور XAMPP آزاد و منبع باز تنظیم کنید. با دنبال کردن چند مرحله آسان ، پروژه های PHP خود را در LocalHost بیاموزید ، ایجاد کنید و آزمایش کنید." 
url: /fa/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## تنظیم محیط توسعه وب با استفاده از سرور XAMPP رایگان و منبع باز. با دنبال کردن چند مرحله آسان ، پروژه های PHP خود را در LocalHost بیاموزید ، ایجاد کنید و آزمایش کنید.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="اولین پروژه PHP خود را با سرور منبع باز XAMPP ایجاد کنید">}}

XAMPP یک سرور وب با منبع باز است که یک محیط محلی را برای ایجاد ، اجرای و آزمایش یک پروژه PHP قبل از استقرار آن در سرورهای زنده فراهم می کند. این یک سرور محلی برای توسعه دهندگان برای آزمایش و ساخت برنامه های وب فراهم می کند. ما بخش های زیر را در این پست وبلاگ پوشش خواهیم داد:
  * [الزامات][2]
  * [XAMPP چیست][3]
  * [ایجاد اسکریپت PHP][4]
  * [اجرا و آزمایش اسکریپت PHP][5]
  * [نتیجه گیری][6]

## الزامات   {#Requirements
  * نصب XAMPP
  * برنامه ویرایشگر کد
  * دانش اساسی PHP
  * دانش اساسی HTML و JavaScript

## xampp چیست؟   {#xampp}
XAMPP یک پشته راه حل سرور منبع باز است. این شامل Apache ، MySQL ، Mariadb ، PHP و Perl است. نصب و استفاده از آن بسیار آسان است. به همین دلیل محبوب ترین محیط توسعه PHP است. سرور XAMPP یک محیط کامل برای توسعه برنامه وب PHP فراهم می کند. اگر قبلاً نصب XAMPP را ندارید ، این راهنما را برای نصب XAMPP دنبال کنید:
[Setup XAMPP و PHPMYADMIN به عنوان LocalHost در ویندوز][7]

## ایجاد اسکریپت php   {#php}
  * با فرض اینکه شما قبلاً XAMPP را با دنبال کردن آموزش فوق نصب کرده اید ، اکنون یک اسکریپت PHP ساده ایجاد کرده و آن را در XAMPP تست کنیم.
  * ابتدا ویرایشگر خود را باز کنید. اگر ویرایشگر برنامه نویسی ندارید ، به سادگی دفترچه یادداشت را باز کنید.
  * کد زیر را وارد کنید
```
<?php
echo "This is my first PHP project";
?>
```
  * روی "پرونده" در گوشه بالا سمت راست کلیک کنید.
  * دکمه "ذخیره به عنوان" را بزنید.
  * نام را با پسوند ".php" وارد کنید.
  *برای "ذخیره به عنوان نوع" ، گزینه "All Files (\*. \*)" را انتخاب کنید.
  * و در آخر دکمه "ذخیره" را بزنید.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="اولین پروژه PHP خود را با سرور منبع باز XAMPP ایجاد کنید">}}


## اجرا و تست اسکریپت PHP   {#Test}
  * این اسکریپت PHP را در پوشه HTDOCS در داخل نصب XAMPP خود کپی کنید. بیشتر پوشه HTDOCS در اینجا ساکن است: C: \ xampp \ htdocs
  * مرورگر خود را باز کنید.
  * بروید به localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="اولین پروژه PHP خود را با سرور منبع باز XAMPP ایجاد کنید">}}

تبریک می گویم! شما به تازگی اولین پروژه PHP خود را ایجاد کرده اید.

## نتیجه گیری   {#conclusion}
ایجاد اولین پروژه وب همیشه برای یک مبتدی بسیار هیجان انگیز است. وقتی اولین اسکریپت پویا خود را طراحی می کنید ، آن را اجرا کنید و آن را روی مرورگر خود مشاهده کنید ، بسیار عالی است. امیدوارم این راهنمای ساده به شما در ایجاد و اجرای اولین پروژه PHP خود با سرور وب منبع باز XAMPP کمک کرده باشد.

## کاوش کنید
برای کسب اطلاعات بیشتر در مورد XAMPP و PHPMYADMIN ، راهنماهای زیر را پرداخت کنید:
[Setup XAMPP و PHPMYADMIN به عنوان LocalHost در ویندوز][7]
[پشته راه حل وب سرور رایگان برای توسعه دهندگان PHP و PERL][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
