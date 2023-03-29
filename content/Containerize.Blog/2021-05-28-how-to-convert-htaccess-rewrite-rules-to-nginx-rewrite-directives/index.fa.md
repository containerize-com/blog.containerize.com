---
title: "نحوه تبدیل قوانین بازنویسی HTACCESS به دستورالعمل های بازنویسی NGINX" 
seoTitle: "نحوه تبدیل قوانین بازنویسی HTACCESS به دستورالعمل های بازنویسی NGINX" 
description: "Nginx از قوانین بازنویسی .htaccess پشتیبانی نمی کند ، بنابراین توسعه دهندگان باید این قوانین را به دستورالعمل های بازنویسی NGINX تبدیل کنند. بیایید یاد بگیریم که چگونه این تبدیل را انجام دهیم." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX از قوانین بازنویسی HTACCESS پشتیبانی نمی کند ، و توسعه دهندگان نیاز دارند که این قوانین را به دستورالعمل های بازنویسی NGINX تبدیل کنند. بیایید یاد بگیریم که چگونه این تبدیل را انجام دهیم." 
url: /fa/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## NGINX از قوانین بازنویسی HTACCESS پشتیبانی نمی کند ، و توسعه دهندگان نیاز دارند که این قوانین را به دستورالعمل های بازنویسی NGINX تبدیل کنند. بیایید یاد بگیریم که چگونه این تبدیل را انجام دهیم.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="تبدیل قوانین بازنویسی .htaccess به دستورالعمل های NGINX">}}

در آخرین آموزش ما ، ما یاد گرفتیم [چگونه می توان چندین نسخه PHP را با NGINX در اوبونتو نصب کرد][1]. Apache یکی از محبوب ترین وب سایت ها است اما اخیراً ، Nginx خود را به عنوان رقیب آپاچی تأسیس کرده است. اما Nginx از قوانین بازنویسی HTACCESS پشتیبانی نمی کند. بنابراین ، در این مقاله ، ما یاد خواهیم گرفت که چگونه می توان قوانین بازنویسی HTACCESS را به دستورالعمل های بازنویسی NGINX تبدیل کرد. بیا شروع کنیم!
*  **[nginx قوانین را بازنویسی می کند][2]**  
* [  **. htaccess قوانین را بازنویسی می کند**  ][3]
* [  **تبدیل .HTACCESS قوانین را به دستورالعمل های بازنویسی nginx بازنویسی می کند**  ][4]
* [  **نتیجه گیری**  ][5]

## Nginx قوانین را بازنویسی می کند {#nginx}

بازنویسی قوانین تغییر بخش یا کلیه URL در درخواست مشتری ، معمولاً برای آگاه سازی به مشتریان که منبعی که اکنون درخواست می کنند در یک مکان متفاوت قرار دارد یا کنترل جریان پردازش در NGINX است. به عنوان مثال برای ارسال درخواست ها به سرور برنامه در هنگام نیاز به تولید دینامیکی. دستورالعمل try_files اغلب برای این منظور استفاده می شود.
دو دستورالعمل برای بازنویسی NGINX با هدف عمومی _return_ و _rewrite_ است ، و دستورالعمل _try_files_ روشی مفید برای هدایت درخواست ها به سرورهای برنامه است.
بخشنامه بازگشت ساده تر از دو دستورالعمل هدف عمومی است. بازده را در یک سرور یا زمینه مکان محصور می کنید.
به عنوان مثال ، در اینجا یک مثال بسیار ساده وجود دارد که با استفاده از دستورالعمل _return_ ، مشتری ها را به نام دامنه جدید هدایت می کند
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
اما اگر شما نیاز به انجام تمایزهای پیچیده بین URL ها ، ضبط عناصر در URL اصلی یا تغییر یا اضافه کردن عناصر در مسیر دارید ، چه می کنید؟ در چنین مواردی می توانید از دستورالعمل _rewrite_ استفاده کنید.
در اینجا یک قانون بازنویسی نمونه NGINX وجود دارد که از دستورالعمل بازنویسی استفاده می کند. با URL هایی که با رشته /آهنگ ها شروع می شوند مطابقت دارد و سپس شامل /رسانه /یا / / /دایرکتوری در جایی بعد در مسیر است. این عناصر را با / mp3 / جایگزین می کند و پسوند پرونده مناسب ، .mp3 یا .ra را اضافه می کند. متغیرهای 1 و 2 دلار عناصر مسیری را که تغییر نمی کنند ضبط می کنند. به عنوان نمونه ،/بارگیری/cdn-west/media/file1 می شود/download/cdn-west/mp3/file1.mp3. اگر در نام پرونده (مانند .FLV) پسوند وجود داشته باشد ، عبارت آن را خاموش می کند و آن را با .mp3 جایگزین می کند.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess قوانین را بازنویسی کنید {#apache}

پرونده .htaccess تعدادی از راه های دسترسی ، مسدود و هدایت به یک وب سایت را کنترل می کند. این کار را با استفاده از یک سری از یک یا چند قانون بازنویسی .htaccess انجام می دهد. این بازنویسی ها توسط ماژول Mod_Rewrite Apache اجرا می شوند.
mod_rewrite راهی برای اصلاح درخواست های URL ورودی ، به صورت پویا ، بر اساس قوانین بیان منظم فراهم می کند. این به شما امکان می دهد هر URL را بر روی ساختار URL داخلی خود به هر روشی که دوست دارید نقشه برداری کنید. این همچنین برای تمیز کردن URL های خارجی شما و سپس نقشه برداری آنها بر روی URL های داخلی زشت به نظر می رسد.
به عنوان مثال ، پس از بازنویسی .htaccess قانون ، URL غیر WWW را به یک URL WWW بازنویسی می کند.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## تبدیل قوانین بازنویسی .htaccess به دستورالعمل های بازنویسی nginx {#convert}

همانطور که در مثال بالا برای تغییر مسیر URL غیر WWW به یک URL WWW نشان دادیم ، اجازه دهید همان قانون بازنویسی HTACCESS را به بخشنامه بازنویسی NGINX تبدیل کنیم.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
بنابراین در اینجا ما دو بلوک جداگانه _server_ ایجاد کردیم ، یکی برای _yourdomain.com_ و دیگری برای _www.yourdomain.com_. و در بلوک _server_ برای _yourdomain.com_ ما از دستورالعمل _return_ برای هدایت URL غیر www به URL www استفاده می کنیم.
همان تغییر مسیر که با دستورالعمل بازگشت انجام دادیم ، می تواند با بخشنامه بازنویسی نیز انجام شود اما توصیه نمی شود.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
به خاطر وضوح بیشتر ، بیایید قوانین HTACCESS WordPress را به بخشنامه nginx try_files تبدیل کنیم.
[wordpress.org توزیع][6] یک پرونده پیش فرض اساسی  **. htaccess**  با موارد زیر. HTACCESS قوانینی را بازنویسی می کند که لینک های ثابت را قادر می سازد:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
در اینجا دستورالعمل تبدیل شده nginx try_files است
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## نتیجه {#conclusion}

در این آموزش ، ما به بررسی قوانین بازنویسی .htaccess Apache و چگونگی تبدیل آن قوانین بازنویسی .htaccess در بخشنامه های بازنویسی NGINX می پردازیم. ما در ادامه دستورالعمل های مختلف NGINX را نیز مورد بررسی قرار دادیم که می تواند برای بازنویسی URL ها استفاده شود. ما همچنین به عنوان مثال قوانین بازنویسی را برای Nginx و Apache ارائه دادیم. امیدوارم که این آموزش برای شما مفید باشد.

## کاوش کنید
  * [نحوه نصب چندین نسخه PHP با NGINX در اوبونتو][1]
  * [نحوه تنظیم و پیکربندی nginx به عنوان پروکسی معکوس][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
