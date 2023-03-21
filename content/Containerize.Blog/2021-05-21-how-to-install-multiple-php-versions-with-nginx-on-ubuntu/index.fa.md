---
title: "نحوه نصب چندین نسخه PHP با NGINX در اوبونتو" 
seoTitle: "نحوه نصب چندین نسخه PHP با NGINX در اوبونتو" 
description: "در این مقاله نحوه نصب چندین نسخه از PHP با NGINX در اوبونتو توضیح داده شده است. ما دستورالعمل های گام به گام در مورد نحوه نصب PHP با NGINX را طی خواهیم کرد." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "اگر به دنبال استفاده از چندین نسخه PHP با NGINX هستید ، در این مقاله شما را گام به گام در مورد نحوه نصب PHP با NGINX در اوبونتو راهنمایی می کنیم." 
url: /fa/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP با نسخه های چند PHP Nginx">}}


## اگر به دنبال استفاده از چندین نسخه از PHP با NGINX هستید ، در این مقاله شما را به صورت مرحله به مرحله راهنمایی می کنیم که چگونه PHP را با NGINX در اوبونتو نصب کنید.
این مقاله در ادامه سریال ما در مورد آموزش های مربوط به NGINX است. تاکنون ما نحوه استفاده از NGINX را به عنوان Balancer Load ، نحوه استفاده از NGINX به عنوان پروکسی معکوس پوشش داده ایم. و اکنون این آموزش یک سؤال خواستار دیگر "نحوه استفاده از چندین نسخه از PHP با nginx" را در بر می گیرد. در این آموزش ، ما شما را گام به گام راهنمایی می کنیم که چگونه PHP را در اوبونتو نصب کنید ، نحوه پیکربندی PHP با NGINX و در آخر اینکه چگونه می توانید چندین نسخه از PHP را با NGINX نصب کنید. بنابراین ، بیایید شروع کنیم!
  * [نصب nginx][1]
  * [چندین نسخه PHP را نصب کنید][2]
  * [ایجاد چندین وب سایت با PHP][3]
  * [پیکربندی nginx برای اجرای نسخه های مختلف برای وب سایت ها][4]
  * [نتیجه گیری][5]

## نصب nginx   {#nginx
NGINX (به عنوان "Engine-X" تلفظ می شود) یک سرور وب با منبع باز است که اغلب به عنوان پروکسی معکوس یا حافظه نهان HTTP استفاده می شود. برای لینوکس به صورت رایگان در دسترس است.
برای نصب nginx ، از دستور زیر استفاده کنید:
```
sudo apt update
sudo apt install nginx
```
پس از انجام نصب می توانید "http: // localhost" را در مرورگر خود باز کنید و همه راه اندازی را دارید.

{{< figure align=center src="images/php-with-nginx-install.png" alt="PHP را با nginx نصب کنید">}}


## چندین نسخه PHP را نصب کنید   {#php}
**PHP **(مخفف بازگشتی برای ** PHP: Hypertext Preprocessor** ) یک زبان اسکریپتیک با هدف عمومی با منبع باز و محبوب است که بسیار مورد استفاده قرار می گیرد و برای توسعه وب سایت ها و برنامه های مبتنی بر وب مناسب است. این یک زبان برنامه نویسی سمت سرور است که می تواند در HTML تعبیه شود.
در حال حاضر ، سه نسخه پشتیبانی شده از **php  **، یعنی **  php 5.6  **، **  7.0 ،  **و **  8.0  **وجود دارد. معنی **  php 5.3  **، **  5.4 ،  **و**   5.5** همه به پایان زندگی رسیده اند. آنها دیگر با به روزرسانی های امنیتی پشتیبانی نمی شوند. بنابراین بیایید ابتدا PHP 7.0 و PHP 7.2 را با PHP-FPM نصب کنیم.
در واقع قبل از اینکه با نصب حرکت کنیم ، ابتدا به زیر می پردازیم که PHP-FPM چیست. **PHP-FPM  **(مخفف مخفف**   مدیر فرآیند FASTCGI**) یک PHP جایگزین بسیار محبوب (پردازنده HyperText) اجرای FASTCGI است. PHP-FPM شامل ویژگی های بیشماری است که می تواند برای وب سایت های دریافت کننده ترافیک در حجم های بزرگ به طور مکرر مفید باشد.
برای نصب PHP 7.0 و 7.2 ابتدا ، برای نصب چندین نسخه از PHP ، باید مخزن PHP را به سرور خود اضافه کنید. می توانید مخزن ONDREJ PHP را با دستور زیر اضافه کنید:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
پس از به روز بودن مخزن ، PHP 7.0 ، PHP 7.2 و PHP-FPM را با دستور زیر نصب کنید:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
پس از اتمام نصب ، وضعیت PHP-FPM را با دستور زیر بررسی کنید:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## چندین وب سایت با PHP   {#web} ایجاد کنید
صفحه پیش فرض در/var/www/html/مکان قرار داده شده است. می توانید صفحات استاتیک خود را در اینجا قرار دهید ، یا از میزبان مجازی استفاده کرده و مکان دیگری را قرار دهید
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
بعدی یک پرونده نمونه index.php برای سایت 1 ایجاد کنید:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
اکنون یک پرونده نمونه index.php برای site2 ایجاد کنید:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
سپس ، مالکیت هر دو وب سایت را به WWW-Data تغییر دهید:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## پیکربندی nginx   {#configure}
در مرحله بعد ، شما نیاز به ایجاد یک فایل میزبان مجازی NGINX برای Site1.Containerize.com دارید که از PHP 7.0 استفاده می کند. و دیگری برای Site2.containerize.com که از PHP 7.2 استفاده می کند.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
خطوط زیر را اضافه کنید:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
اکنون پرونده دوم را برای site2.containerize.com ایجاد کنید
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
سپس ، هر دو پرونده میزبان مجازی را با دستور زیر فعال کنید:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
سرانجام ، سرویس NGINX و PHP-FPM را مجدداً راه اندازی کنید تا تمام تغییرات پیکربندی را اعمال کنید:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## نتیجه گیری   {#conclusion}
در این آموزش ما به بررسی چگونگی چندین نسخه PHP در اوبونتو پرداختیم. ما یاد گرفتیم که چگونه nginx را نصب کنیم. سپس ما نحوه تنظیم دو وب سایت مختلف را در NGINX بررسی کردیم. و سرانجام یاد گرفتیم که چگونه دو وب سایت مختلف را با نسخه های مختلف PHP با NGINX پیکربندی کنیم. امیدوارم که این آموزش به شما کمک کند.

## کاوش کنید
  * [نحوه تنظیم و پیکربندی nginx به عنوان پروکسی معکوس][6]
  * [نحوه استفاده از NGINX به عنوان Balancer Load برای برنامه خود][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
