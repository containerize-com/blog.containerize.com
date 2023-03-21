---
title: "نحوه پیکربندی پشتیبانی http/2 در nginx در اوبونتو/دبیان" 
seoTitle: "نحوه پیکربندی پشتیبانی http/2 در nginx در اوبونتو/دبیان" 
description: "HTTP2 یا H2 یک پروتکل باینری و نسخه بهبود یافته پروتکل HTTP است که امکان افزایش سرعت صفحات سایت را پس از NGINX فعال کردن پشتیبانی HTTP2 فراهم می کند" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 یک پروتکل چند برابر قوی برای بهبود سرعت بار و امنیت صفحه است. در این آموزش ، ما می آموزیم که چگونه NGINX را با پشتیبانی HTTP/2 تنظیم کنیم." 
url: /fa/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 یک پروتکل چند برابر قوی برای بهبود سرعت بار و امنیت صفحه است. در این آموزش ، ما می آموزیم که چگونه NGINX را با پشتیبانی HTTP/2 تنظیم کنیم.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx پشتیبانی HTTP2 را در اوبونتو و دبیان فعال کنید">}}


## **بررسی اجمالی**
NGINX یک سرور وب سریع و قابل اعتماد منبع باز است. این محبوبیت به دلیل ردپای کم حافظه ، تعادل بار ، مقیاس پذیری بالا ، ذخیره سازی ، پشتیبانی از اکثر پروتکل ها و پروکسینگ معکوس به دست آمد. حال بیایید در مورد چگونگی فعال کردن NGINX پروتکل HTTP2 صحبت کنیم.
یکی از پروتکل های پشتیبانی شده توسط NGINX HTTP/2 است که در ماه مه 2015 منتشر شده است. مزیت اصلی HTTP/2 سرعت انتقال بالای آن برای وب سایت های غنی از محتوا است ، بار را در سرور وب کاهش می دهد و می تواند چندین درخواست موازی را آغاز کند در یک اتصال TCP واحد. nginx فعال کردن http2 یک نسخه بهبود یافته از پروتکل HTTP است. قبل از شروع کار ، به چند سرور اوبونتو یا دبیان با گواهی SSL نیاز خواهیم داشت. در این آموزش ، ما شما را گام به گام راهنمایی خواهیم کرد که چگونه می توانید http2 را در اوبونتو فعال کنید.
  * به روزرسانی بسته ها و نصب nginx
  * پشتیبانی HTTP/2
  * اضافه کردن نام سرور
  * اضافه کردن گواهینامه های SSL
  * حذف رمزها
  * تمام درخواست های HTTP را به HTTPS تغییر دهید
  * nginx را مجدداً راه اندازی کنید
  * نتیجه

## مرحله 1: به روزرسانی بسته ها و نصب NGINX   {#4597
اولین قدم به روزرسانی و به روزرسانی مخازن در سیستم بسته بندی APT است. با استفاده از بروزرسانی آخرین بسته های نسخه را بارگیری می کند و به روزرسانی آخرین نسخه بسته های موجود در لیست را نصب می کند. دستور زیر را برای به روزرسانی و به روزرسانی بسته ها اجرا کنید.
```
sudo apt-get update && apt-get upgrade
```
مرحله بعدی نصب آخرین نسخه بسته NGINX است. پشتیبانی از پروتکل HTTP/2 در نسخه NGINX 1.9.5 و بالاتر معرفی شد. بنابراین ، ما باید آخرین نسخه از بسته NGINX را نصب کنیم. برای نصب بسته های NGINX ، دستور نصب زیر را اجرا کنید:
```
sudo apt-get install nginx
```
از شما خواسته می شود فرآیند نصب مرحله به مرحله را تأیید کنید. گزینه YES را انتخاب کنید و فرآیند نصب را تمام کنید. پس از اتمام مراحل نصب ، مرحله بعدی بررسی نسخه بسته است که آیا ما نسخه مناسب را نصب کرده ایم یا خیر. با تایپ کردن دستور می توانید نسخه سرور وب Nginx را بررسی کنید:
```
sudo nginx -v
```
خروجی دستور چک نسخه فوق باید مشابه موارد زیر باشد:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## مرحله 2: فعال کردن HTTP/2 پشتیبانی   {#F4D2}
پس از نصب بسته NGINX ، باید HTTP2 NGINX را فعال کنیم. کاربر باید پورت گوش دادن را از 80 به 443 تغییر دهد. بیایید پرونده پیکربندی NGINX را باز کنیم:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
می توانید مقدار پیش فرض NGINX را برای گوش دادن به بندر 80 تنظیم کنید.
گوش دادن به 80 Default_Server ؛
گوش دهید [::]: 80 Default_Server ؛
همانطور که می بینید که دو متغیر گوش مختلف وجود دارد. اولین متغیر گوش دادن برای همه IPv4Connections و مورد دوم برای اتصالات IPv6 است. ما رمزگذاری را برای هر دو متغیر فعال خواهیم کرد. شماره پورت گوش دادن را به 443 تغییر داده و اتصال SSL را برای پروتکل HTTPS همانطور که در زیر آمده است اضافه کنید:
گوش دادن 443 SSL HTTP2 DEFAULT_SERVER ؛
گوش دهید [::]: 443 SSL HTTP2 DEFAULT_SERVER ؛
توجه کنید که علاوه بر SSL ، ما HTTP2 را نیز اضافه کردیم. NGINX اکنون قادر به استفاده از مرورگرهایی است که از پروتکل HTTP/2 پشتیبانی می کند.

## مرحله 3: اضافه کردن نام سرور   {#A745
مرحله بعدی تغییر سرور \ _name است تا نام سرور با نام دامنه در ارتباط باشد. کاربر فقط باید نام سرور را در پرونده پیکربندی تغییر دهد. ورود به سرور \ _name را در پرونده پیکربندی پیدا کنید و _ را به دامنه واقعی خود تغییر دهید ، مانند این:
```
server_name example.com www.example.com;
```
فایل پیکربندی سرور را با ویرایش در ویرایشگر متن ذخیره کنید. می توانید پیکربندی NGINX را برای خطاهای نحوی با دستور بررسی کنید:
```
sudo nginx -t
```
اگر نحو بدون خطا باشد ، خروجی زیر را مشاهده خواهید کرد:
nginx: پرونده پیکربندی /etc/nginx/nginx.conf نحو خوب است
Nginx: File File /etc/nginx/nginx.conf موفقیت آمیز است

## مرحله 4: اضافه کردن گواهینامه های SSL   {#37C0
مرحله بعدی فعال کردن پیکربندی NGINX HTTPS برای استفاده از گواهی SSL شما است. شما می توانید یک گواهینامه امضا شده خود را تولید کنید یا [یک گواهی رایگان را از Let's Encrypt نصب کنید][1]. اگر گواهی SSL ندارید ، لطفاً این آموزش را دنبال کنید. گواهینامه های SSL خود را در فهرست پیکربندی NGINX مشابه: اضافه کنید:
```
sudo mkdir /etc/nginx/ssl
```
گواهینامه و کلید خصوصی خود را در این مکان کپی کرده و همچنین به عنوان مثال با نام دامنه واقعی خود جایگزین کنید:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
اکنون یک بار دیگر پرونده پیکربندی سرور Nginx را باز کنید. خطوط SSL جدید را در داخل بلوک سرور NGINX با محل گواهینامه های خود اضافه و پیکربندی کنید تا پیکربندی NGINX SSL را فعال کنید:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt ؛
ssl_certificate_key /etc/nginx/ssl/example.com.key ؛
فایل nginx پرونده را ذخیره کرده و از ویرایشگر متن خارج شوید.

## مرحله 5: حذف رمزهای   {#D291}
Cipher یک الگوریتم است که در رمزنگاری برای رمزگذاری داده ها و رمزگشایی استفاده می شود. Cipher Suites مجموعه ای از الگوریتم های رمزنگاری است که برای ایمن سازی اتصالات شبکه استفاده می شود. HTTP/2 دارای لیست سیاه عظیمی از رمزهای ناامن است که باید برداشته شوند. در اینجا ما از یک مجموعه رمزگذاری محبوب ، تأیید شده توسط غول های اینترنتی CloudFlare استفاده خواهیم کرد.
پرونده پیکربندی nginx زیر/etc/nginx/nginx.conf را باز کنید و خطوط زیر را درست پس از **SSL \ _prefer \ _server_ciphers اضافه کنید.**  این خطوط شامل لیست جدیدترین رمزهای موجود است که مرورگرهای http2 درک می کنند.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
شما می توانید GZIP را خاموش کنید و پروکسی \ _max \ _temp \ _file \ _size 0 را اضافه کنید. برای جلوگیری از خطا \ _http2 \ _protocol_error nginx.

## مرحله 6: تمام درخواست های HTTP را به HTTPS   {#B387 تغییر دهید
حال باید در صورت دریافت سرور درخواست HTTP ، به NGINX HTTP2 Proxy بگوییم که چه چیزی باید از طریق HTTPS در خدمت باشد. سرانجام ، نادیده گرفتن خطوط اظهار نظر ، پرونده پیکربندی nginx شما /etc/nginx/sites-available/domain-name.com باید شبیه به این باشد:
سرور {گوش دادن 443 SSL http2 default_server ؛ گوش دهید [::]: 443 SSL http2 default_server ؛ root/var/www/html ؛ index index.html index.htm index.nginx-debian.html ؛ server_name مثال. ؛ } ssl_certificate /etc/nginx/ssl/example.com.crt ؛ssl_certificate_key /etc/nginx/ssl/example.com.key ؛ssl_dhparam /etc/nginx/ssl/dhparam.pem ؛ }Server {گوش دادن به 80 ؛ گوش دهید [::]: 80 ؛ server_name مثال. com ؛ بازگشت 301 https: // $ server_name $ درخواست_uri ؛}
File /etc/nginx/sites-available/domain-name.com را ذخیره کرده و سپس از آن خارج شوید. تنظیمات خطاهای نحوی را بررسی کنید:
```
sudo nginx -t
```

## مرحله 7: راه اندازی مجدد nginx   {#e687}
برای اعمال همه تغییرات ، سرور پروکسی معکوس Nginx HTTP2 را مجدداً راه اندازی کنید و وضعیت پیکربندی را بررسی کنید.
sudo systemctl راه اندازی nginx
sudo systemctl وضعیت nginx

## **نتیجه گیری:** {#4a1a}
تبریک می گویم ، شما با موفقیت آموخته اید که چگونه NGINX CONFIG HTTP2 را در سرور اوبونتو تنظیم کنید. تنظیمات nginx http2 شما اکنون در حال ارائه صفحات HTTP/2 است و همچنین تفاوت بین پروتکل های HTTP/1 و HTTP/2 را پاک می کند. اگر هنوز با هرگونه مشکل پیکربندی روبرو هستید ، در بخش نظرات به ما اطلاع دهید.
آیا در مورد پروتکل چند برابر شده HTTP2 سؤالی دارید؟ _ ، لطفا_ [تماس بگیرید][2].

## کاوش کنید
همچنین ممکن است مقالات زیر را دوست داشته باشید:
  * [نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان][3]
  * [چگونه][3][phpmyadmin را با nginx در اوبونتو نصب و ایمن کنید][4]
  * [نحوه تنظیم NGINX با مسافر در سرور تولید AWS][5]
  * [ایمن و رمزگذاری nginx با Let's Endstt در اوبونتو 20.04][1]
  * [نحوه نصب و پیکربندی OwnCloud با Apache در اوبونتو][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
