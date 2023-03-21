---
title: "نحوه پیکربندی برنامه چند مستاجر در Phplist" 
seoTitle: "نحوه پیکربندی برنامه چند مستاجر در Phplist" 
description: "Phplist یک نرم افزار خبرنامه منبع آزاد و آزاد است. برنامه چند مستاجر را پیکربندی کرده و چندین نمونه از یک برنامه را در یک محیط مشترک اجرا کنید." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "آموزش برای تهیه یک برنامه چند مستاجر در PHPLIST. ویژگی چند مستاجر برای کاهش هزینه های میزبانی از یک نصب واحد برای چندین میزبان استفاده می کند." 
url: /fa/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## آموزش برای تهیه یک برنامه چند مستاجر در Phplist. ویژگی چند مستاجر برای کاهش هزینه های میزبانی از یک نصب واحد برای چندین میزبان استفاده می کند.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="برنامه چند مستاجر Phplist">}}

در این مقاله ، ما**چند اجاره**را پوشش خواهیم داد و چگونه می توانیم**برنامه چند مستاجر**را در Phplist پیکربندی کنیم.

## Phplist چیست؟
هنگام تصمیم گیری در مورد استراتژی بازاریابی ، بازاریابی ایمیل بخش مهمی از هر شرکت دیجیتال آنلاین است. Phplist مشاغل را قادر می سازد تا به مخاطبان زیادی برسند. Phplist به طور گسترده ای از نرم افزار خبرنامه منبع باز**برای مدیریت لیست ها و ارسال خبرنامه استفاده می شود. این به شرکت ها کمک می کند تا کمپین های خبرنامه را ایجاد ، برنامه ریزی و تجزیه و تحلیل کنند. Phplist از ویژگی هایی مانند تجزیه و تحلیل ، تقسیم بندی ، پردازش گزاف گویی ، افزونه ها ، API ها و موارد دیگر پشتیبانی می کند.

## چند اجاره چیست؟
Multi-Tenancy معماری است که در آن بسیاری از مشتریان/سایت ها توسط یک نمونه واحد از یک نرم افزار ارائه می شوند. در چند اجاره ، این سایت مستاجر محسوب می شود. هر مستاجر دارای ویژگی های خاصی مانند پیکربندی ، مضامین ، SMTP است.
جنبه اصلی محاسبات ابری چند اجاره است. معماری**چند مستاجر**به مشاغل کمک می کند تا با کاهش هزینه های نگهداری و به روزرسانی سریع مستاجر ، به ROI بهتر برسند. همچنین ، برنامه هایی که در معماری چند مستاجر طراحی شده اند می توانند به راحتی مقیاس پذیر باشند.
ما می توانیم با استفاده از رویکردهای زیر چند اجاره را پیاده سازی کنیم.
  * پایگاه داده مشترک برای همه مستاجران.
  * پایگاه داده جداگانه برای هر مستاجر.
ما برای اجرای چند اجاره در PHPLIS از یک بانک اطلاعاتی جداگانه برای هر رویکرد مستاجر استفاده خواهیم کرد.
  * [جریان درخواست جریان][1]
  * [پایگاه داده تنظیم برای مستاجر][2]
  * [پیکربندی nginx برای مستاجر][3]

## جریان درخواست جریان   {#Request}
  * از پرونده Config.php خود نسخه پشتیبان تهیه کنید و می توانید آن را در زیر فهرست پیکربندی پیدا کنید.
  * یک فایل جدید Config.php ایجاد کرده و کد زیر را در آن برای اداره سایت ها/مستاجران اضافه کنید.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
به عنوان مثال با نام دامنه خود جایگزین کنید. همچنین برای هر مستاجر باید یک فایل پیکربندی ایجاد کنید. پرونده پشتیبان Config.php را کپی کرده و آن را با نام جدیدی مانند Config.Example.com.php ذخیره کنید.

## پایگاه داده تنظیم برای مستاجر   {#Database
  * از پایگاه داده Phplist موجود پشتیبان تهیه کنید. از آن برای ایجاد یک پایگاه داده برای مستاجر جدید استفاده کنید.
  * پرونده Config.example.com.php را باز کنید. اعتبار پایگاه داده و هر تنظیمات دیگر را مطابق با محیط خود تغییر دهید.

## nginx را برای مستاجر   {#nginx تنظیم کنید
* به دایرکتوری nginx بروید**CD/etc/nginx/سایت های موجود در دسترس**.
  * پرونده پیش فرض Config.php را کپی کرده و آن را با نام سایت خود مانند مثال. com ذخیره کنید.
* پیکربندی Open Sexal.com با**sudo nano به عنوان مثال com**.
  * مسیر ریشه ، server_name و هر تنظیمات دیگر را تغییر دهید.
* تنظیمات تست با**sudo nginx -t**
* سرانجام ، با اجرای**sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-enabled/**ایجاد Symlink ایجاد کنید.
* سرور وب Nginx را با اجرای**sudo systemctl راه اندازی مجدد nginx**راه اندازی مجدد کنید ، بنابراین می تواند پرونده پیکربندی تازه ایجاد شده را بارگیری کند.

## نتیجه
نرم افزار چند اجاره ای در مقایسه با برنامه های تک اجاره ای از جمله کاهش هزینه های نگهداری ، استفاده مؤثر از منابع و نصب آسان به روزرسانی ها ، مزایایی دارد. اگر می خواهید نرم افزار SaaS (نرم افزار را به عنوان یک سرویس) بسازید ، می توانید معماری چند اجاره ای را دنبال کرده و از قدرت واقعی آن لذت ببرید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [Phplist - خبرنامه منبع باز و نرم افزار بازاریابی ایمیل][4]
  * [نحوه ایجاد و ارسال خبرنامه با استفاده از Phplist][5]
  * [نحوه تنظیم و پردازش پرش در Phplist][6]
  * [راهنمای مبتدیان برای توسعه افزونه Phplist][7]
  * [تنظیم قوانین پیشرفته مدیریت و گزاف گویی در Phplist][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/