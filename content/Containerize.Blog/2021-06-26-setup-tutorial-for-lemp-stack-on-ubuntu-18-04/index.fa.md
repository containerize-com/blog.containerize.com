---
title: "آموزش راه اندازی LEMP Stack در اوبونتو 18.04" 
seoTitle: "آموزش راه اندازی LEMP Stack در اوبونتو 18.04" 
description: "پشته LEMP یک پشته نرم افزاری است که برای توسعه و استقرار برنامه های وب استفاده می شود. بیاموزید که چگونه NGINX ، MySQL و PHP را در Ubuntu 18.04 نصب کنید." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "نصب & amp ؛ پیکربندی LEMP را برای توسعه و استقرار برنامه های وب پیکربندی کنید. این راهنما به شما کمک می کند تا NGINX ، MySQL و PHP را در Ubuntu 18.04 نصب کنید." 
url: /fa/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## نصب و پیکربندی پشته LEMP برای توسعه و استقرار برنامه های وب. این راهنما به شما کمک می کند تا NGINX ، MySQL و PHP را در Ubuntu 18.04 نصب کنید.

{{< figure align=center src="images/lemp-banner.png" alt="پشته LEMP را روی اوبونتو نصب کنید">}}


## بررسی اجمالی {#Prerequisites}

در این راهنما ، ما NGINX ، MYSQL و PHP (LEMP پشته) را برای توسعه و استقرار برنامه های وب نصب خواهیم کرد. ما همچنین یک سرور وب را به برنامه PHP سرور در سرور اوبونتو 18.04 پیکربندی خواهیم کرد. بخش های زیر را در این آموزش پوشش خواهیم داد.
* [  **پیش نیاز**  ][1]
* [  **لیمپ پشته چیست؟**  ][2]
* [  **نصب LEMP**  ][3]
* [  **نتیجه گیری**  ][4]

## پیش نیازها {#پیش نیازها}

قبل از نصب نرم افزار ، باید شرایط زیر را برآورده کنید.
  * سرور با سیستم عامل اوبونتو
* کاربر غیر ریشه با  **sudo**  امتیازات

## LEMP Stack چیست؟ {#What}

 **LEMP Stack** مجموعه ای از نرم افزاری است که می تواند برای اجرای برنامه های وب مبتنی بر PHP استفاده شود. LEMP مخفف Linux ، Nginx ، MySQL و PHP است. پشته LEMP نوعی از پشته لامپ است. هر دو LAMP و LEMP پشته های نرم افزاری محبوب برای توسعه و استقرار برنامه های وب هستند. یک تفاوت بین این دو پشته نرم افزار وجود دارد. لامپ از سرور وب Apache استفاده می کند ، در حالی که سرور LEMP از سرور وب Nginx استفاده می کند.

## نصب LEMP {#Installation}

در این بخش ، ما به نحوه نصب NGINX ، MYSQL و PHP در اوبونتو 18.04 توجه خواهیم کرد. اول از همه ، ما باید بسته های سرور را با اجرای دستور زیر به روز کنیم.
```
$ sudo apt update
```

### نصب سرور وب nginx
* دستور زیر را به  **نصب NGINX را در Ubuntu**  اجرا کنید.
```
$ sudo apt install nginx
```
  * پس از نصب NGINX ، مرورگر وب خود را باز کرده و آدرس IP سرور خود را تایپ کنید. این صفحه خوش آمدید پیش فرض سرور وب Nginx را به شما نشان می دهد.

{{< figure align=center src="images/nginx-home-1.png" alt="صفحه پیش فرض سرور Nginx">}}


### نصب mysql
اکنون ، برای مدیریت داده های برنامه خود باید سرور پایگاه داده MySQL را نصب کنید.
* دستور زیر را اجرا کنید تا  **MySQL را در Ubuntu**  نصب کنید.
```
$ sudo apt install mysql-server
```
  * برای تأمین نصب MySQL ، دستور زیر را اجرا کنید.
```
$ sudo mysql_secure_installation
```
* از شما خواسته می شود یا می خواهید افزونه رمز عبور را فعال کنید**یا نه. بهتر است که آن را فعال نکنید ، N را تایپ کرده و Enter را فشار دهید تا در مرحله بعدی حرکت کنید.
  * در مرحله بعد ، همانطور که در زیر آمده است ، چند سؤال از شما می پرسد. شما باید به تمام سوالات پاسخ دهید.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * اکنون ، MySQL Server در حال اجرا است. می توانید آن را با دستور زیر آزمایش کنید. رمز عبور حساب root root خود را وارد کنید ، نه MySQL یکی در صورت بروز رمز عبور.
```
$ sudo mysql
```
  * دستور زیر را برای خروج از MySQL وارد کنید.
```
mysql> exit
```

### نصب PHP
ما نصب PHP-FPM را برای پردازش PHP پوشش خواهیم داد. PHP-FPM مخفف مدیر فرآیند FastCGI است. سرور وب Nginx هیچ قابلیت ساخت و ساز برای پردازش PHP ندارد ، بنابراین ، ما از PHP-FPM برای آن استفاده خواهیم کرد. علاوه بر این ، ما PHP-MYSQL را برای برقراری ارتباط PHP با MYSQL برای مدیریت داده نصب خواهیم کرد.
* دستور زیر را برای  **نصب PHP در Ubuntu**  اجرا کنید.
```
$ sudo apt install php-fpm php-mysql
```
  * اکنون ، شما با نصب PHP و تمام نرم افزارهای مورد نیاز LEMP Stack برای اجرای برنامه وب انجام شده است.
  * در این مرحله ، ما فایل پیکربندی NGINX را ایجاد خواهیم کرد تا به NGINX بگوییم از پردازنده PHP برای محتوای پویا استفاده کند. دستور زیر را برای ایجاد فایل پیکربندی nginx اجرا کنید.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * کد را در پرونده پیکربندی nginx کپی کرده و آن را ذخیره کنید.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * بیایید نگاهی کوتاه به این دستورالعمل ها و بلوک موقعیت مکانی بیندازیم ، بنابراین می توانید اطلاعات اساسی داشته باشید.
*  **گوش دهید**  : می توانید پورت NGINX را تعریف کنید. از پورت 80 برای HTTP و 443 برای پروتکل های HTTPS استفاده کنید.
*  **root**  : فهرست اصلی پروژه خود را تعریف کنید. NGINX از آن برای خدمت به وب سایت یا برنامه وب استفاده خواهد کرد.
*  **index**  : ترتیب ارائه پرونده ها را تعریف کنید. هنگامی که پرونده فهرست نامیده می شود ، NGINX پرونده index.php را تحویل می دهد.
*  **server_name**  : نام دامنه یا IP عمومی سرور خود را تعریف کنید.
*  **موقعیت مکانی /** : این بلوک مکان دارای **try_block**  دستورالعمل است و با URI درخواست شده مطابقت دارد. اگر پرونده درخواست شده را پیدا نکند ، Nginx خطای 404 را برمی گرداند.
*  **مکان ~ .php $**  : این بلوک مکان پردازش PHP را کنترل می کند.
*  **موقعیت مکانی ~ /.htmn: nginx پرونده** را پردازش نمی کند. nginx با تعریف **انکار همه بخشنامه**  ، پرونده .htaccess را ارائه نمی دهد.
  * Symlink را برای پرونده پیکربندی NGINX تازه ایجاد شده ایجاد کنید تا آن را فعال کنید.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * دستور زیر را برای آزمایش فایل پیکربندی nginx برای خطاهای نحوی اجرا کنید.
```
$ sudo nginx -t
```
  * سرور وب Nginx را مجدداً راه اندازی کنید.
```
$ sudo systemctl restart nginx
```

### تست PHP
  * برای اطمینان از اینکه NGINX به درستی در صفحات PHP خدمت می کند ، ما برای آزمایش تنظیمات ، فایل PHP را ایجاد خواهیم کرد.
  * با اجرای دستور زیر ، فایل info.php را در فهرست اصلی سرور وب NGINX ایجاد کنید.
```
$ sudo nano /var/www/html/info.php
```
  * کد زیر را به آن اضافه کرده و پرونده را ذخیره کنید.
```
<?php
phpinfo();
```
  * مرورگر وب خود را باز کنید و نام دامنه یا IP عمومی سرور را تایپ کنید و به دنبال آن نام پرونده PHP مانند http: // سرور \ _ip \ _or_domain/info.php. صفحه زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/info-php.png" alt="صفحه اطلاعات PHP">}}


## نتیجه {#نتیجه}

در این آموزش ، ما در مورد نحوه نصب و پیکربندی  **LEMP پشته**  بحث کردیم. همانطور که مشاهده می کنید ، پیکربندی اجزای پشته نرم افزار بسیار آسان است. علاوه بر این ، شما می توانید در عرض چند دقیقه ایجاد و خدمت به برنامه های وب را شروع کنید.
سرانجام ، [  **Containerize.com** ][5] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [ **Web Server Solution Stack**  ][6] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
* [  **بهترین راه حل راه حل سرور منبع باز**  ][7]
 **[محبوب ترین ابزارهای پزشکی قانونی دیجیتال منبع باز][8]** 
*  **[5 نرم افزار برتر صفحه منبع باز (MQ) در سال 2021][9]**  
 **[بهترین نرم افزار ذخیره سازی ابر منبع باز و به اشتراک گذاری پرونده][10]** 
* [  **نحوه نصب و ایمن phpmyadmin با nginx در اوبونتو**  ][11]
* [  **نحوه نصب چندین نسخه PHP با nginx در اوبونتو**  ][12]
* [  **5 محبوب ترین مجوزهای منبع باز تأیید شده توسط OSI از 2021**  ][13]



 [1]: #Prerequisites
 [2]: #What
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
 [9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
 [10]: https://products.containerize.com/backup-and-sync/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
