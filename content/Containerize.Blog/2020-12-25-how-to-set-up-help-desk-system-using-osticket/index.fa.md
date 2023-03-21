---
title: "نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET" 
seoTitle: "نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET" 
description: "تمام درخواست های پشتیبانی خود را در یک مکان با استفاده از میز راهنما Osticket مدیریت کنید. سوالات ایجاد شده از طریق ایمیل ، تلفن و فرم ها را به بلیط های مبتنی بر وب تبدیل کنید." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "تمام درخواست های پشتیبانی خود را در یک مکان با استفاده از Osticket مدیریت کنید. سوالات ایجاد شده از طریق ایمیل ، تلفن و فرم ها را به بلیط های ساده مبتنی بر وب تبدیل کنید." 
url: /fa/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## تمام درخواست های پشتیبانی خود را در یک مکان با استفاده از Osticket مدیریت کنید. سوالات ایجاد شده از طریق ایمیل ، تلفن و فرم ها را به بلیط های ساده مبتنی بر وب تبدیل کنید.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET">}}

OSTICKET یک راه حل نرم افزار میز راهنمای آنلاین منبع باز است. Osticket HelpDesk یک جایگزین رایگان برای سیستم های پشتیبانی بالا و پیچیده مشتری است. این ساده ، سبک ، قابل اعتماد ، مبتنی بر وب و تنظیم و استفاده آسان است. بهترین قسمت این است که کاملاً رایگان است. ما بخش های زیر را در این آموزش پوشش خواهیم داد:
  * [استیکت چیست؟][1]
  * [جوانب مثبت و منفی استیک][2]
  * [چگونه استیکت را تنظیم کنیم؟][3]
  * [نتیجه گیری][4]

## استیکت چیست؟   {#osticket}
Osticket یک صفحه کنترل دوستانه کاربر و یک مؤلفه گزارش دهی در زمان واقعی را ارائه می دهد. کاربران فقط می توانند وارد سیستم شوند و بلیط ها را در چند مرحله آسان ایجاد کنند. آنها می توانند از طریق وب سایت ، ایمیل یا تلفن شما بلیط ایجاد کنند. بلیط های ورودی پس از آن ذخیره و به نمایندگان اختصاص می یابد. نمایندگان اعلان های ایمیل دریافت می کنند و برای کمک به حل مشکلات آنها به سؤالات پاسخ می دهند. مشتریان و نمایندگان می توانند در مورد جزئیات و پیشرفت در بخش نظرات بحث کنند. مشتریان می توانند درخواست ها و پیشرفت های خود را از طریق پورتال مشتری داخلی ارائه شده توسط این نرم افزار میز کمک آنلاین پیگیری کنند.

## جوانب مثبت و منفی Osticket   {#pros}

#### طرفداران
  * Osticket هم برای کاربران نهایی و هم برای نمایندگان پشتیبانی بسیار کاربر پسند است.
  * همراه با ویژگی های غنی ، استیکت هر آنچه را که شما نیاز دارید بدون اینکه بیش از حد پیچیده باشد ، دارد.
  * استیکت کاملاً رایگان و نرم افزار مدیریت بلیط منبع باز است.
  * این نرم افزار سبک ، ایمن ، قابل اعتماد و آسان برای نصب نرم افزار مدیریت میز راهنما است.
  * اجرای همه سرورهای وب محبوب از جمله Apache ، Nginx ، LightTPD و IIS و غیره انعطاف پذیر است.

#### منفی
  * Osticket جزئیات مربوط به تجزیه و تحلیل بلیط و آمار مانند سایر سیستم های میز کمک پرداخت شده را ارائه نمی دهد.
  * این رابط کاربری بسیار ساده و اساسی است که با سایر سیستم های پشتیبانی مقایسه می شود.

## چگونه استیکت را نصب کنیم؟   {#چگونه}
این مراحل را برای نصب Osticket با Nginx در Ubuntu 18.04 LTS دنبال کنید.
  * یک دایرکتوری جدید برای Osticket ایجاد کنید.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * آخرین راه اندازی Osticket را با استفاده از دستورات زیر بارگیری کنید.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * پس از آن ، با استفاده از این دستورات ، فایل پیکربندی را از پرونده نمونه ایجاد کنید.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * سپس مالکیت فهرست وب Osticket را به کاربر و گروه "WWW-Data" تغییر دهید.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * پس از آن ، فایل پیکربندی میزبان مجازی جدید ایجاد کنید.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * سپس کد پیکربندی را درون آن بچسبانید.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * نام سرور را طبق نام دامنه خود تغییر دهید. پرونده را ذخیره کرده و خارج شوید.
  * اکنون این پرونده میزبان مجازی را با استفاده از دستور زیر به پوشه فعال شده به سایت ها پیوند دهید
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * آزمایش هرگونه خطای پیکربندی با استفاده از دستور زیر
```
nginx -t
```
  * اکنون سرویس Nginx را با استفاده از دستور زیر مجدداً راه اندازی کنید
```
sudo systemctl restart nginx

```
  * اکنون نام دامنه خود را در هر مرورگر وب وارد کنید تا جادوگر نصب را شروع کنید همانطور که در شکل زیر نشان داده شده است

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET">}}

  * برنامه های افزودنی مورد نیاز را از php.ini فعال کنید و روی "ادامه" کلیک کنید.
* تمام اطلاعات مورد نیاز را پر کرده و روی دکمه "**نصب"**کلیک کنید.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET">}}

  * در تنظیمات پایگاه داده ، DBName ، نام کاربری و رمز عبور را وارد کنید.
  * در آخر روی دکمه "نصب اکنون" کلیک کنید
  * پس از اتمام نصب ، صفحه را با پیام موفقیت نشان می دهد.
  * در مرحله بعد ، مجوز OST-config.php را تغییر دهید تا با اجرای دستور زیر دسترسی به نوشتن را حذف کنید:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## نتیجه گیری   {#conclusion}
Osticket برای شرکت هایی که بودجه کم دارند یا افرادی که می خواهند یک سیستم میز راهنما ساده و پیچیده نباشند ، مناسب است. این نرم افزار ساده ، سبک وزن ، قابل اعتماد ، منبع باز و کاملاً رایگان است. که استیکت جایگزین خوبی برای سیستم های پشتیبانی مشتری با هزینه بالاتر می کند. برای کسب اطلاعات بیشتر در مورد ویژگی های Osticket و راهنمای نصب ، لطفاً آموزش زیر را بررسی کنید.

## کاوش کنید
[بهترین منبع باز و نرم افزار میز راهنما IT رایگان][5]
[راهنمای محبوب و مبتنی بر بلیط و سیستم مراقبت از مشتری][6]
[راهنمای مبتدی برای توسعه افزونه Osticket][7]
[نحوه اجرای چند اجاره در استیک][8]
[سیستم بلیط فروشی با استفاده از وردپرس و استیکت][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
