---
title: "نحوه نظارت بر سرور وب Nginx با تقویت NGINX" 
seoTitle: "نحوه نظارت بر سرور وب Nginx با تقویت NGINX" 
description: "NGINX Amplify یک عامل نظارت رایگان برای برنامه های وب NGINX و برنامه های PHP است. این مقاله در مورد نحوه نظارت بر سرور وب Nginx با تقویت NGINX است" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "نظارت بر برنامه های NGINX ، PHP ، سیستم عامل با تقویت NGINX و تنظیم پیکربندی. در این مقاله شما را به تنظیم و پیکربندی تقویت NGINX راهنمایی می کند." 
url: /fa/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## مانیتور NGINX ، برنامه های PHP ، سیستم عامل با NGINX تقویت و بهبود پیکربندی. در این مقاله شما را به تنظیم و پیکربندی تقویت NGINX راهنمایی می کند.

{{< figure align=center src="images/nginx-post.png" alt="نظارت بر سرور وب nginx با تقویت nginx">}}


## بررسی اجمالی {#Install}

**نظارت بر سرور وب**برای وب سایت های پر ترافیک بسیار مهم است. عامل نظارت****به طور مرتب معیارهای اساسی در مورد سرور وب را ضبط می کند. از این معیارهای مهم می توان برای بهینه سازی پیکربندی NGINX استفاده کرد. این به شما در بهبود عملکرد سرور وب و برنامه خود کمک می کند.
در این پست وبلاگ ، بخش های زیر را برای **NGINX Monitoring** ابزار منبع باز پوشش خواهیم داد.
  * [سرور وب Nginx][1]
  * [nginx تقویت][2]
  * [نصب nginx تقویت][3]
  * [معیارهای نظارت][4]

## سرور وب Nginx {#Nginx}

[nginx][5] یک سرور وب رایگان و منبع باز است. این ساده ، سبک و پیکربندی آسان از Apache است. سرور وب NGINX همچنین به عنوان یک پروکسی معکوس ، Balancer Load ، Proxy Mail و HTTP Cache کار می کند. این پروتکل های HTTP ، HTTPS ، SMTP ، POP3 و IMAP کار می کند. NGINX یک سرور وب با سرعت ، قابل اعتماد و با حافظه است که عملکرد برنامه های شما را بهبود می بخشد. علاوه بر این ، محبوبیت زیادی پیدا کرده و اکنون به عنوان محبوب ترین سرور وب در نظر گرفته می شود. علاوه بر این ، NGINX برای هر نوع وب سایت از جمله سایت ها و برنامه های پر ترافیک مناسب است. تقریباً در تمام سیستم عامل ها قابل نصب و تنظیم است.

### نصب nginx
  * برای نصب سرور وب NGINX در زیر دستورات را اجرا کنید.
```
sudo apt update
sudo apt install nginx
```
  * پس از اتمام کار ، مرورگر خود را باز کنید و "http: // ip \ _of \ _your_server" را تایپ کنید. صفحه خوش آمدید زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/nginx-home.png" alt="خوش آمدید به انجیناکس!">}}


## nginx تقویت می شود {#Amplify}

Nginx Amplify یک ابزار نظارت رایگان برای منبع باز NGINX ، NGINX PLUS و PHP-FPM است. این یک ابزار مبتنی بر SaaS برای نظارت و برنامه های کاربردی سرور NGINX است. کاربران به راحتی می توانند دارایی های زیرساختی را پیگیری کنند ، عملکرد را تحت نظر داشته و پیکربندی را تنظیم کنند. این اطلاعات جامع را ارائه می دهد که کاربران ممکن است از آنها برای بهینه سازی سرور وب و پیکربندی برنامه استفاده کنند. به عنوان یک عامل در سرور که میزبان برنامه های NGINX و PHP است عمل می کند. NGINX Amplify یک سبک وزن ، فشار فشار و نظارت بر داده ها برای تقویت سرورها بدون به خطر انداختن عملکرد است. می توانید معیارها را در داشبورد تقویت کننده مشاهده کنید. این عامل برای کلیه سیستم عامل های اولیه مانند RHEL ، Centos ، Ubuntu ، Debian ، Fedora و FreeBSD در دسترس است. NGINX Amplify دارای سه مؤلفه اصلی مانند NGINX Amplify Agent ، NGINX Amplify Web UI و NGINX تقویت کننده است.
* **NGINX Amplify Agent** - بر روی سیستم کنترل می شود. تمام ارتباطات با استفاده از SSL/TLS رمزگذاری می شود.
* **nginx ui وب** را تقویت کنید - UI وب معیارهای مربوط به سرورهای وب ، برنامه ها و سیستم عامل ها را نشان می دهد.
* **nginx تقویت کننده****- این یک مؤلفه کلیدی است که به عنوان SaaS اجرا می شود و وظیفه جمع آوری معیارها ، حفظ یک بانک اطلاعاتی ، اجرای موتور تحلیلی و تهیه API اصلی را بر عهده دارد.

## نصب nginx را نصب کنید {#Install}

در زیر راهنمای گام به گام برای نصب NGINX Amplify در اوبونتو دنبال کنید.
  * ابتدا باید یک حساب کاربری در NGINX [وب سایت][6] ایجاد کنید.
  * پس از ورود به سیستم ، صفحه زیر را در وب سایت Nginx Amplify مشاهده خواهید کرد. اکنون ، از طریق SSH به سرور خود وصل شوید و از دستورات داده شده در مراحل زیر استفاده کنید.

{{< figure align=center src="images/amplify-1.png" alt="نصب nginx را نصب کنید">}}

  * دستور زیر را برای بارگیری عامل اجرا کنید.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * دستور زیر را برای نصب NGINX Amplify روی سرور اجرا کنید. XXXXX را با کلید API واقعی جایگزین کنید. می توانید آن را در Dashboard Amplify Nginx پیدا کنید.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * پس از اتمام کار با نصب ، می توانید وضعیت را با دستور زیر بررسی کنید.
```
$ sudo service amplify-agent status
```
  * اکنون ، برای مشاهده معیارها ، نیاز به پیکربندی عامل تقویت کننده NGINX دارید.

{{< figure align=center src="images/amplify-2-1.png" alt="پیکربندی مانیتورینگ Nginx">}}

  * یک فایل جدید با پیکربندی stub_status ایجاد کنید.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * کد زیر را در آن کپی کرده و پرونده را ذخیره کنید.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * برای فعال کردن ماژول stub_status ، سرور وب Nginx را مجدداً راه اندازی کنید.
```
$ sudo service nginx restart
```
  * اکنون ، فایل پیکربندی NGINX را با دستور زیر باز کنید.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * کد زیر را به آن اضافه کرده و ذخیره کنید.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * سرویس NGINX را مجدداً راه اندازی کنید تا تمام تغییرات را اعمال کنید.
```
$ sudo service nginx restart
```
  * در مرحله بعد ، برای تقویت داشبورد حرکت کنید و روی دکمه "پایان" کلیک کنید. شما باید صفحه زیر را ببینید.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="نظارت بر سرور وب">}}

* می توانید با کلیک بر روی برگه **بررسی** ، آمار را با فرمت آسان تر و قابل خواندن مشاهده کنید. مانند شکل زیر به نظر می رسد.

{{< figure align=center src="images/amplify-overview.png" alt="آمار نظارت Nginx">}}


## معیارها {#Monitoring}

NGINX APPLIFY عامل انواع زیر را جمع آوری می کند:
* **معیارهای nginx** -معیارهای مختلف مربوط به nginx را از stub_status ، پرونده های ثبت و از حالت فرآیند جمع آوری می کند.
**معیارهای سیستم** - تقویت کننده NGINX انواع معیارهای سیستم مانند استفاده از پردازنده ، استفاده از حافظه ، ترافیک شبکه و موارد دیگر را کنترل می کند.
* **معیارهای PHP-FPM** -اگر یک فرآیند اصلی PHP-FPM را در حال اجرا مشخص کند ، از وضعیت استخر PHP-FPM معیارهایی می شود.
* **MySQL Metrics** - مجموعه متغیرهای وضعیت جهانی MySQL را می توان توسط نماینده برای جمع آوری معیارها استفاده کرد.
* **metadata nginx** - نماینده داده های مربوط به نمونه های nginx مانند داده های بسته ، اطلاعات ساخت ، مسیر باینری ، ایجاد تنظیمات پیکربندی و موارد دیگر را جمع می کند.
**ابرداده سیستم** - عامل داده های مربوط به سیستم عامل ، از جمله نام میزبان ، به موقع ، عطر و طعم سیستم عامل و سایر جزئیات را جمع آوری می کند.

## نتیجه
ما از طریق سرور وب Nginx و NGINX با جزئیات بسیار زیاد ، عامل نظارت پیشرفته را تقویت کرده ایم. تنظیم NGINX برای تنظیم و پیکربندی بسیار ساده است. علاوه بر این ، ما به آن رفته ایم که معیارهای بحرانی NGINX می تواند به **نظارت بر nginx** را ردیابی کند. از این معیارهای مهم می توان برای بهبود پیکربندی سرور وب و برنامه های NGINX استفاده کرد.
سرانجام ، [Containerize.com][7] در یک فرآیند مداوم برای نوشتن پست های وبلاگ در آخرین محصولات منبع باز بیشتر است. بنابراین ، برای آخرین به روزرسانی ها با این [پشته راه حل وب سرور][8] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [نحوه استفاده از NGINX به عنوان بالانسر بار برای برنامه خود][9]
  * [نحوه تنظیم و پیکربندی nginx به عنوان پروکسی معکوس][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
