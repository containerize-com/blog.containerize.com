---
title: "ادغام مداوم و استقرار مداوم از سرور کنترل منبع" 
seoTitle: "ادغام مداوم و استقرار مداوم از سرور کنترل منبع" 
description: "ابزار استقرار رایگان به تیم های توسعه کمک می کند تا گردش کار تحویل نرم افزار را خودکار کنند. به سرعت ساخت ، تست ، استقرار نرم افزار با مخزن جنکینز و GitHub." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "گردش کار توسعه با استفاده از ابزار استقرار رایگان. ما یاد می گیریم که چگونه CI/CD را با سرور اتوماسیون Jenkins و GitHub برای استقرار نرم افزار تنظیم کنیم." 
url: /fa/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## گردش کار توسعه با استفاده از ابزار استقرار رایگان. ما یاد می گیریم که چگونه CI/CD را با سرور اتوماسیون Jenkins و GitHub برای استقرار نرم افزار تنظیم کنیم.

{{< figure align=center src="images/ci-cd-post.png" alt="ادغام مداوم و استقرار مداوم">}}

تیم های توسعه از روش های مختلفی برای استقرار نرم افزار مانند FTP ، کشیدن کد از مخزن و موارد دیگر استفاده می کنند. همه این روش ها به صورت دستی انجام می شود و به تلاش زیادی نیاز دارد. ما می توانیم ببینیم که تیم های بیشتری از روش های چابک برای توسعه نرم افزار پیروی می کنند. بنابراین ، آنها ویژگی های جدید و رفع اشکال را به طور مکرر منتشر می کنند. بنابراین ، خودکار سازی گردش کار تحویل نرم افزار به تیم ها کمک می کند تا نسخه های جدید را به سرعت و بدون خطا راه اندازی کنند. ما یاد می گیریم که چگونه از **CI/CD با جنکینز** و Github برای خودکارسازی فرآیند تحویل نرم افزار استفاده کنیم. بخش های زیر را در این مقاله پوشش خواهیم داد.
* [ **جنکینز چیست؟** ][1]
* [ **ادغام مداوم** ][2]
* [ **استقرار مداوم** ][3]
* [ **پیکربندی جنکینز** ][4]
* [ **ایجاد شغل جنکینز** ][5]

## جنکینز چیست؟ {#Jenkins}

**جنکینز **یک ابزار قدرتمند** استقرار رایگان **برای خودکار سازی فرایند تحویل نرم افزار است. این یک سرور اتوماسیون منبع باز برای ساخت ، آزمایش و استقرار است. جنکینز از معماری استاد برده استفاده می کند. این به تیم های نرم افزاری اجازه می دهد تا چندین ساخت و آزمایش را برای نرم افزار به طور همزمان اجرا کنند. علاوه بر این ، افزونه های زیادی در دسترس است و تیم ها می توانند در صورت لزوم از آنها استفاده کنند. برای اطلاعات بیشتر و نصب می توانید به [** Jenkins Page**][6] مراجعه کنید. علاوه بر این ، می توانید کد منبع را در جنکینز [** github**][7] مخزن پیدا کنید.

## ادغام مداوم {#CI}

**ادغام مداوم** یک عمل توسعه است که به توسعه دهندگان نیاز دارد تا مرتباً کد را در یک مخزن مشترک ادغام کنند. هر ادغام/فشار کد به مخزن را می توان با ساخت و آزمایش خودکار تأیید کرد. همچنین به توسعه دهندگان این امکان را می دهد تا مشکلات موجود در کد را به راحتی شناسایی کنند.

## استقرار مداوم {#CD}

**استقرار مداوم** مرحله بعدی پس از ادغام مداوم است. این امکان را به تیم ها می دهد که به طور مداوم کد را روی سرور مستقر کنند. علاوه بر این ، به توسعه دهندگان کمک می کند تا کارهای تکراری را کاهش داده و چابکی را افزایش دهند.

## جنکینز را پیکربندی کنید {#Configure}

در زیر دستورالعمل مرحله به مرحله برای پیکربندی در جنکینز را دنبال کنید.
  * سایت Jenkins خود را باز کرده و وارد شوید.
  * افزونه "Publish Over SSH" را نصب کنید. می توانید با پیمایش در "مدیریت جنکینز → مدیریت افزونه ها → موجود" ، آن را جستجو کنید.
  * همانطور که در زیر آمده است ، کلید SSH را در ساخت سرور به عنوان کاربر "جنکینز" ایجاد کنید.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * با استفاده از SSH به سرور هدف/استقرار وصل شوید. در زیر فرمان اجرا کنید و محتوای فایل میخانه را روی سرور هدف قرار دهید.
```
$ cd .ssh
$ nano authorized_keys
```
  * برای مدیریت "جنکینز → سیستم پیکربندی → انتشار از طریق SSH" حرکت کنید.
  * کلید SSH را یا با قرار دادن مسیر پرونده اضافه کنید یا همان محتویات را که برای سرور استقرار انجام شده است ، چسبانده کنید.
  * با کلیک بر روی دکمه "افزودن" در کنار "سرورهای SSH" یک سرور SSH اضافه کنید.
  * نام ، نام میزبان ، نام کاربری و دایرکتوری از راه دور را برای سرور استقرار/هدف وارد کنید.
  * بر روی دکمه پیکربندی تست کلیک کنید تا اطمینان حاصل شود که جنکینز می تواند به سرور استقرار متصل شود.
  * در آخر ، برای ذخیره اطلاعات ، روی دکمه ذخیره کلیک کنید.

## ایجاد شغل جنکینز {#Create}

می توانید از این مراحل برای ایجاد شغل جنکینز استفاده کنید.
  * داشبورد جنکینز را باز کنید و روی دکمه "مورد جدید" کلیک کنید.
  * نام پروژه را وارد کنید و "کار آزاد" را انتخاب کنید.
  * URL مخزن GitHub را تحت "پنجره پیکربندی" وارد کنید.
  * در بخش "ساخت محیط" ، این گزینه ها را بررسی کنید "فضای کاری را قبل از شروع ساخت" حذف کنید و "ارسال پرونده ها یا اجرای دستورات از طریق SSH پس از اجرای ساخت".
  * نام ، پرونده های منبع و دایرکتوری از راه دور را در زیر محیط Build وارد کنید.
  * کار را ذخیره کنید و آن را بسازید.
  * به سرور استقرار وصل شوید و مطمئن شوید که کد در آنجا وجود دارد.

## نتیجه
ما در این مقاله با سرور **جنکینز**، **ادغام مداوم** و**استقرار مداوم** بحث کرده ایم. ما همچنین یاد گرفته ایم که چگونه می توان ابزار استقرار رایگان**را پیکربندی کرد و یک کار جنکینز را برای استقرار با استفاده از GitHub ایجاد کرد. ابزار رایگان CI/CD به تیم توسعه اجازه می دهد تا گردش کار تحویل نرم افزار را به صورت خودکار انجام دهد و تمرکز خود را روی مشاغل مهم نگه دارد. ما سایر ابزارهای استقرار را در پست های آینده پوشش خواهیم داد.
سرانجام ، [ **Containerize.com**][8] مقالاتی را در مورد ابزارهای بیشتر استقرار منبع باز منتشر می کند. بنابراین ، لطفاً برای به روزرسانی های منظم با [**ابزارهای استقرار** ][9] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
* **[جنکینز][6]** 
* [ **هواپیماهای بدون سرنشین** ][10]
* [ **Diventeer** ][11]
* [ **capistrano** ][12]
* [ **رانچر** ][13]
* [ **Concourse** ][14]
* [ **ansible** ][15]
* [ **GOCD** ][16]
* [ **5 ابزار برتر استقرار منبع باز در سال 2021** ][17]
* [ **AUTOMATE AUTOMATE APPLICATE PHP با استقرار** ][18]



[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/