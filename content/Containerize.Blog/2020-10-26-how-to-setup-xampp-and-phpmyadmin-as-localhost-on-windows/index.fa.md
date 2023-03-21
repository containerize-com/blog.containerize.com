---
title: "XAMPP و PHPMYADMIN را به عنوان LocalHost در ویندوز تنظیم کنید" 
seoTitle: "XAMPP و PHPMYADMIN را به عنوان LocalHost در ویندوز تنظیم کنید" 
description: "XAMPP و PHPMYADMIN را به عنوان LocalHost در ویندوز تنظیم کنید. برای آزمایش و ساخت برنامه های وب ، محیط تست محلی رایگان و منبع باز خود را ایجاد کنید." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "تنظیم یک محیط توسعه با پشته راه حل سرور وب رایگان و منبع باز (XAMPP) و نرم افزار مدیریت پایگاه داده (PHPMYADMIN)" 
url: /fa/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## تنظیم یک محیط توسعه با پشته سرور وب رایگان و منبع باز (XAMPP) و نرم افزار مدیریت پایگاه داده (PHPMYADMIN)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="xampp و phpmyadmin به عنوان localhost">}}

XAMPP و PHPMYADMIN به عنوان LocalHost یک سرور محلی را برای توسعه دهندگان فراهم می کند تا برنامه های وب را آزمایش و بسازند. XAMPP یک سرور محلی است که بر روی رایانه های شخصی/لپ تاپ نصب شده است. این محیط محلی را برای ایجاد ، اجرای و آزمایش برنامه های PHP قبل از استقرار آنها در سرورهای زنده فراهم می کند.
ما بخش های زیر را در این پست وبلاگ پوشش خواهیم داد:
  * [توضیحات][1]
  * [نصب xampp][2]
  * [داشبورد phpmyadmin][3]
  * [افکار نهایی][4]

## توضیحات:   {#description
XAMPP رایگان و پشته راه حل سرور وب منبع باز است. این شامل Apache ، MySQL ، Mariadb ، PHP و Perl است. XAMPP برای سیستم عامل های ویندوز در دسترس است. نصب و استفاده از آن بسیار آسان است. به همین دلیل محبوب ترین محیط توسعه PHP است. XAMPP و PHPMYADMIN به عنوان LocalHost محیطی کامل را برای توسعه و آزمایش برنامه های وب فراهم می کند.
الفبای موجود در XAMPP برای:
***X**-Cross-Platform (از چندین سیستم عامل از جمله لینوکس ، ویندوز و سیستم عامل MAC پشتیبانی می کند)
***A**- سرور HTTP Apache
***m**- mariadb (پایگاه داده)
***p**- php
***p**- perl

## نصب xampp   {#xampp}
  * بارگیری XAMPP را از [اینجا][5] بارگیری کنید.

{{< figure align=center src="images/xampp1.png" alt="xampp به عنوان localhost">}}

  * پرونده اجرایی را نصب کنید.
  * سپس روی "Next" کلیک کنید.
  * مؤلفه هایی را که می خواهید نصب کنید انتخاب کنید.

{{< figure align=center src="images/xampp2.png" alt="xampp به عنوان مرحله 2 localhost">}}

  * برای اکثر برنامه های وب فقط به _apache_ ، _mysql_ ، _php_ و _phpmyadmin_ نیاز دارید.
  * فهرست نصب را در جایی که می خواهید XAMPP را نصب کنید انتخاب کنید.
  * به شما هشدار امنیتی ویندوز نشان داده می شود. شما باید گزینه زیر را بررسی کنید: "_ شبکه های خصوصی ، مانند خانه من یا شبکه کار من" _.
  * در آخر برای تکمیل نصب ، روی "پایان" کلیک کنید.

{{< figure align=center src="images/xampp4.png" alt="XAMPP به عنوان LocalHost مرحله 3">}}

  * پس از نصب موفقیت آمیز ، صفحه کنترل XAMPP را باز کنید.
  * خدمات "Apache" و "MySQL" را شروع کنید.

{{< figure align=center src="images/xampp5.png" alt="XAMPP به عنوان LocalHost مرحله 4">}}


## داشبورد phpmyadmin:   {#phpmyadmin}
برای دسترسی به داشبورد phpmyadmin ، روی دکمه "مدیر" در کنار سرویس MySQL کلیک کنید. همچنین می توانید با مراجعه به http: // localhost/phpmyadmin از مرورگر خود به phpmyadmin دسترسی پیدا کنید. در اینجا می توانید پایگاه داده ایجاد کنید. برای ایجاد یک پایگاه داده جدید ، این مراحل را دنبال کنید.
  * از داشبورد ، روی برگه "پایگاه داده" کلیک کنید.

{{< figure align=center src="images/db1.png" alt="phpmyadmin at localhost مرحله 1">}}

  * نام پایگاه داده را وارد کرده و روی دکمه "ایجاد" کلیک کنید. این به سادگی یک پایگاه داده خالی جدید ایجاد می کند.

{{< figure align=center src="images/db2.png" alt="phpmyadmin at localhost مرحله 2">}}

  * در مرحله بعد می توانید با انتخاب پایگاه داده تازه ایجاد شده جداول ایجاد کنید.
  * نام جدول را تحت "ایجاد جدول" وارد کنید.

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin at localhost مرحله 3">}}

  * تعداد ستون ها را انتخاب کنید.
  * سپس بر روی دکمه "Go" کلیک کنید.
  * پس از آن برای به پایان رساندن جدول ، باید فرم را در صفحه بعد پر کنید.

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin at localhost مرحله 4">}}


## افکار نهایی:   {#final}
نصب XAMPP ساده و مستقیم به جلو است. بیش از 15 دقیقه به سرور تنظیم XAMPP طول نمی کشد. پس از نصب ، توسعه دهندگان می توانند برنامه های وب مبتنی بر PHP خود را حتی بدون اتصال به اینترنت بسازند و آزمایش کنند. به جای آزمایش مستقیم پروژه ها بر روی یک سرور وب زنده ، آزمایش آنها در محلی ساده و صرفه جویی در وقت است. این یک بستر عالی برای مبتدیان است که مهارت های PHP ، PERL و پایگاه داده خود را یاد بگیرند.

## کاوش:
[پشته راه حل سرور منبع باز برای توسعه دهندگان PHP و PERL][6]
[بهترین گزینه های راه حل راه حل سرور منبع باز][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
