---
title: "نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان" 
seoTitle: "نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان" 
description: "پیکربندی پروکسی معکوس Apache مرحله به مرحله به شما امکان می دهد یک یا چند سرور انتهایی پشت را در پشت سرور پروکسی با MOD_PROXY در Ubuntu/Debian Linux اجرا کنید." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "پروکسی معکوس Apache به شما امکان می دهد یک یا چند سرور پشتی را در پشت سرور پروکسی اجرا کنید. در اینجا نحوه پیکربندی پروکسی معکوس Apache در سیستم اوبونتو/دبیان آورده شده است." 
url: /fa/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## آپاچی معکوس پروکسی به شما امکان می دهد یک یا چند سرور پشتی را در پشت سرور پروکسی اجرا کنید. در اینجا نحوه پیکربندی پروکسی معکوس Apache در سیستم اوبونتو/دبیان آورده شده است.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="پروکسی معکوس Apache را نصب و پیکربندی کنید">}}


##  **بررسی اجمالی**  
پروکسی معکوس Apache به همه ترافیک اجازه می دهد و آن را به جلو منتقل می کند تا یک یا چند سرور یا ظروف پس زمینه را در پشت سرور پروکسی اجرا کند ، بدون اینکه آنها را به صورت عمومی قرار دهد. سرور وب پشتی می تواند یک سرور دیگر Apache2 یا منبع باز HTTP مانند NGINX باشد. سرور Apache2 HTTP یکی از محبوب ترین سرور وب منبع باز است که امروزه مورد استفاده قرار می گیرد.
دلایل زیادی برای نصب و پیکربندی سرور پروکسی وجود دارد. به عنوان مثال ، پروکسی معکوس می تواند به شما در اضافه کردن امنیت ، برای تعادل بار ، محدود کردن دسترسی به مکانهای خاص برای جلوگیری از حملات و موارد دیگر کمک کند. در این مقاله نحوه نصب و پیکربندی پیکربندی پروکسی معکوس آپاچی مرحله به مرحله برای سرور HTTPS در اوبونتو/دبیان توضیح داده شده است:
  * نصب Apache2
  * پیکربندی Apache2
  * ماژول های پروکسی خود را فعال کنید
  * SSL را فعال کنید
  * راه اندازی مجدد apache2
  * نتیجه

## مرحله 1: Apache2 را نصب کنید
نصب Apache2 بسیار ساده و آسان است. برای انجام نصب ، دستورات زیر را به سادگی اجرا کنید:
به روزرسانی سودو
sudo apt-get نصب apache2
{{_LINE_25_}}
پس از نصب Apache2 بر روی سیستم خود ، از دستورات SystemCtl زیر در نسخه Debian Linux یا Ubuntu Linux Ubuntu استفاده کنید تا متوقف ، شروع ، فعال و راه اندازی مجدد Apache2 شود تا همیشه در هنگام بوت شدن سرور دوباره راه اندازی شود.
Sudo Systemctl Stop Apache2.Service
sudo systemctl شروع apache2.service
sudo systemctl Apache2.Service را فعال کنید
sudo systemctl راه اندازی مجدد apache2.service
{{_LINE_31_}}
می توانید وضعیت سرور وب را با استفاده از دستور زیر مشاهده کنید:
sudo systemctl status apache2.service
{{_LINE_34_}}
برای بررسی تنظیمات Apache2 ، مرورگر خود را باز کرده و به نام میزبان سرور یا آدرس IP سیستم خود مرور کنید و باید همانطور که در زیر آمده است ، صفحه تست پیش فرض Apache2 را مشاهده کنید. وقتی این را می بینید ، پس از آن Apache2 همانطور که انتظار می رود کار می کند. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="پروکسی پروکسی معکوس Apache را برای اوبونتو نصب و پیکربندی کنید">}}


## مرحله 2: Apache2 را به عنوان پروکسی معکوس پیکربندی کنید
Apache2 با موفقیت نصب شده و آماده استفاده است. اکنون می توانید Apache2 را پیکربندی کنید تا به عنوان یک پروکسی معکوس Apache2 Ubuntu کار کند. عملکرد ماژول Proxy2 Proxy2  **و**proxypassreverse** عملکرد یک پروکسی معکوس را ارائه می دهد. برای استفاده از **proxypass** و **proxypassreverse** ، ابتدا باید بدانید که در کجا می خواهید ترافیک سایت را هدایت کنید.
سرور پروکسی معکوس Apache2 برای همه ترافیک در درگاه پیش فرض HTTP ، که پورت 80 در یک تنظیم ساده است ، گوش می دهد. سرور پشتی که میزبان محتوای وب سایت است ، در یک درگاه سفارشی گوش می دهد و به احتمال زیاد پورت 8080 است.
در این مقاله وبلاگ ، ما قصد داریم APACH2 را برای گوش دادن به پورت 80 تنظیم کنیم و سپس ترافیک را به سرور Back-End که در پورت 8080 گوش می دهد ، مستقیماً اجرا کنید. برای ایجاد یک فایل VirtualHost Proxy به نام Apache2Proxy.conf در زیر دستور اجرا کنید.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
سپس بلوک زیر کدها را در پرونده Apache2Proxy.conf اضافه کرده و سپس آن را ذخیره کنید.
{{_LINE_43_}}
        servername مثال. com
        ServerAlias ​​www.example.com
        serverAdmin webmaster@example.com
        errorLog $ {apache_log_dir}/error.log
        CustomLog $ {apache_log_dir}/ACCESS.LOG ترکیبی
        ProxyRequests خاموش
{{_LINE_50_}}
          سفارش انکار ، اجازه دهید
          اجازه از همه
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        proxypassreverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          سفارش اجازه دهید ، انکار کنید
          اجازه از همه
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
پرونده apache2proxy.conf شامل نام سرور شما و همچنین proxy_pass است که در آن هنگام دریافت توسط سرور پروکسی HTTP ، ترافیک هدایت می شود.

## مرحله 3: پروکسی Apache2 را فعال کنید
Apache2 Web Server اکنون با موفقیت نصب و تنظیم شده است. آپاچی بسیاری از ماژول های بسته بندی شده موجود در آن را دارد. این ماژول ها در نصب Apache2 تازه فعال نیستند. ابتدا باید ماژول هایی را که لازم داریم برای پشتیبانی از پروتکل های مختلف شبکه ، ماژول Apache mod_proxy و چندین ماژول افزودنی آن را فعال کنیم. دستورات ذکر شده در زیر را اجرا کنید تا ماژول های پروکسی HTTP خود را فعال کنید.
پروکسی sudo a2enmod
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
اکنون سایت VirtualHost را فعال کرده و Apache2 را مجدداً راه اندازی کنید تا تنظیم مجدد تنظیمات ماژول های Apache2 را فعال کنید.
sudo a2ensite apache2proxy.conf
sudo systemctl راه اندازی مجدد apache2.service
یک مرورگر وب مورد نظر خود را راه اندازی کنید و مانند مثال. com به نام میزبان سرور خود بروید. اکنون شما در پورت پیش فرض یعنی 8080 به سرور Apache2 خود مجدداً مجاور خواهید شد.

## مرحله 4: SSL را فعال کنید {#block-07b86d83-dca0-4924-b991-206719c342eb}

اگر می خواهید ماژول Proxy SSL Proxy Reverse Proxy Reverse را فعال کنید ، دستور زیر را اجرا کنید تا Proxy Proxy Proxy Apache معکوس را فعال کنید:
sudo a2enmod ssl
این امر باعث می شود HTTP Proxy Red Apache معکوس به HTTPS به سرورهای باطن پشتیبانی شود.

## مرحله 5: Apache2 را مجدداً راه اندازی کنید {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}

برای اجرای این تغییرات ، با اجرای دستور زیر Apache را مجدداً راه اندازی کنید:
sudo systemctl راه اندازی مجدد apache2.service
تبریک می گویم! شما با موفقیت پروکسی معکوس Apache2 را در سیستم لینوکس خود نصب و پیکربندی کرده اید.

##  **نتیجه:**   {#4a1a}

در این آموزش ، ما مورد بررسی و بحث قرار دادیم که یک سرور پروکسی و پیکربندی نمونه پروکسی معکوس آپاچی مرحله به مرحله چیست. ما همچنین یاد گرفتیم که چگونه Apache2 را به عنوان یک پروکسی معکوس در سیستم لینوکس تنظیم و پیکربندی کنیم. در آموزش های آینده ما ، ما در مورد موضوعات جالب تر در مورد Apache و سایر پشته های راه حل سرور وب بحث خواهیم کرد.

## کاوش کنید
همچنین ممکن است مقالات زیر را در زیر دوست داشته باشید:
  * [چگونه][1][phpmyadmin را با nginx در اوبونتو نصب و ایمن کنید][2]
  * [نحوه تنظیم NGINX با مسافر در سرور تولید AWS][3]
  * [پیکربندی پشتیبانی HTTP/2 در Nginx در اوبونتو/دبیان][4]
  * [ایمن و رمزگذاری nginx با Let's Enderspt on Ubuntu 20.04][5]
  * [نحوه نصب و پیکربندی OwnCloud با Apache در اوبونتو][6]



 [1]: https://blog.containerize.com/web-server-solution-stack/fa/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
 [6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
