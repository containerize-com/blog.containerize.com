---
title: "نحوه نصب NextCloud با Apache در سرور اوبونتو" 
seoTitle: "نحوه نصب NextCloud با Apache در سرور اوبونتو" 
description: "NextCloud یک راه حل ذخیره سازی ابری منبع باز است که در PHP نوشته شده است. در این مقاله نحوه نصب NextCloud با Apache در اوبونتو نشان داده شده است." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud نرم افزار هماهنگ سازی و همکاری فایل های منبع باز خود میزبان است. این آموزش نحوه نصب NextCloud را با Apache در اوبونتو نشان می دهد." 
url: /fa/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud نرم افزار هماهنگ سازی و همکاری فایل های منبع باز خود میزبان است. این آموزش نحوه نصب NextCloud را با Apache در اوبونتو نشان می دهد.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="نحوه نصب NextCloud با Apache در Ubuntn">}}


## **بررسی اجمالی** 
**[NextCloud][1] **یک راه حل ذخیره سازی ابری رایگان و ایمن است** که به زبان برنامه نویسی PHP نوشته شده است. این دسترسی به داده ها را با استفاده از رابط وب و عملکردی مشابه Dropbox فراهم می کند. راه حل های ذخیره سازی ابری اختصاصی مانند Dropbox و Google Drive راحت هستند اما می توان از آنها برای جمع آوری داده های شخصی استفاده کرد زیرا پرونده های شما در سیستم های آنها ذخیره می شوند. اگر به راه حل همگام سازی و اشتراک فایل ایمن ، ایمن و سازگار نیاز دارید ، می توانید به سرور NextCloud Source Open Source بروید. راه اندازی NextCloud را می توان بر روی سرورهای خانگی خصوصی یا سرور خصوصی مجازی نصب کرد.
منبع باز NextCloud **رمزگذاری پایان به پایان** را فراهم می کند ، به این معنی است که پرونده ها می توانند قبل از بارگذاری در سرور ، روی دستگاه مشتری رمزگذاری شوند. همچنین می تواند با یک مجموعه اداری آنلاین مانند Collobora ، OnlyOffice NextCloud یکپارچه شود تا بتوانید پرونده های Doc ، PPT ، XLS خود را مستقیماً از NextCloud Client ایجاد و ویرایش کنید. می توانید بعد از بارگیری مشتری NextCloud ، یک یا چند فایل و پوشه را در رایانه خود با سرور NextCloud خود به اشتراک بگذارید و هماهنگ کنید. بارگیری Desktop NextCloud و مشتری های تلفن همراه گزینه هایی را برای همگام سازی و به اشتراک گذاری در کلیه دستگاه های تحت کنترل شما ارائه می دهند. پرونده های داده را در دایرکتوری های مشترک محلی خود قرار دهید ، و این پرونده ها بلافاصله با استفاده از مشتری Sync Desktop NextCloud ، برنامه iOS یا دستگاه های Android با سرور و سایر دستگاه ها همزمان می شوند.
این آموزش به شما کمک می کند تا NextCloud را در سیستم عامل Ubuntu 20.04 LTS Linux با Apache نصب کنید.
* **پیش نیازها (پشته لامپ) را نصب کنید** 
* **دانلود بایگانی NextCloud در اوبونتو** 
**ایجاد پایگاه داده mysql** 
* **نصب NextCloud Web Installer** 
* **بسته شدن** 

## مرحله 1: پیش نیازها (پشته لامپ) را نصب کنید
اولین مورد برای نصب NextCloud در اوبونتو این است که شما باید در حال اجرا **LAMP Server**در سیستم Ubuntu LTS خود باشید. وارد سیستم خود شوید و به پنجره ترمینال دسترسی پیدا کنید. اگر قبلاً در حال اجرا هستید**لامپ پشته** این مرحله دیگر از دستورات زیر برای نصب وابستگی های لازم استفاده کنید.

### PHP را نصب کنید
بیایید با نصب نسخه PHP نسخه 5.6 یا نسخه بالاتر در سرور اوبونتو خود شروع کنیم:
به روزرسانی سودو
sudo apt-get install -y php-gd php-curl php-zip php-xml php-mbstring
می توانید نسخه PHP را با استفاده از دستور زیر تأیید کنید:
php -v
{{_LINE_29_}}

### نصب apache2
بعد ، آپاچی را با دستور نصب کنید:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl راه اندازی مجدد apache2
{{_LINE_34_}}

### mysql را نصب کنید
با وجود وابستگی های خارج از راه ، قدم بعدی که باید از آن مراقبت شود ، امنیت سرور پایگاه داده MySQL است. سرور پایگاه داده MySQL را با اجرا نصب کنید:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## مرحله 2: آرشیو NextCloud را در اوبونتو بارگیری کنید
در زمان نوشتن این مقاله ، آخرین نسخه NextCloud 22.0.0beta5 است. پس از پیکربندی موفقیت آمیز سرور LAMP بر روی سیستم خود ، اجازه دهید NextCloud را از [وب سایت رسمی] خود بارگیری کنیم [2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
پس از اتمام بارگیری سرور NextCloud ، بایگانی بارگیری شده را تحت ریشه سند وب سایت استخراج کرده و مالکیت دایرکتوری NextCloud را در WWW-DATA در پرونده ها و دایرکتوری ها تنظیم کنید.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 NextCloud
{{_LINE_49_}}
اکنون پرونده بایگانی بارگیری شده را حذف کنید.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## مرحله 3: ایجاد پایگاه داده MySQL
پس از استخراج کد منبع ، اجازه دهید یک پایگاه داده NextCloud MySQL و حساب کاربری برای پیکربندی NextCloud ایجاد کنیم. از مجموعه دستور زیر برای ورود به سرور MySQL ، ایجاد پایگاه داده NextCloud ، کاربر و خروج از کنسول MySQL استفاده کنید.
mysql -u root -p
رمز عبور را وارد کنید:
MySQL> ایجاد پایگاه داده NextCloud ؛
mysql> همه را در NextCloud اعطا کنید.
mysql> امتیازات گرگرفتگی ؛
mysql> ترک
{{_LINE_61_}}

## مرحله 4: نصب NextCloud Web Web را اجرا کنید
در این مرحله ، NextCloud Ubuntu 20.04 را با موفقیت نصب کرده و پیکربندی کرد. اکنون دایرکتوری پیکربندی NextCloud را در مرورگر وب مانند زیر باز کنید و URL http://your-domain.com را تایپ کنید. LocalHost را به آدرس IP سرور یا نام دامنه خود تغییر دهید. صفحه زیر را مشاهده خواهید کرد:
http: // localhost/nextCloud/یا http: // your_domain_name/nextCloud/
{{_LINE_65_}}
برای ایجاد یک حساب مدیر و ارائه مکان پوشه داده ، اعتبارنامه های جدید مدیر را وارد کنید.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="نحوه نصب NextCloud با Apache در سرور Ubuntu Linux">}}

{{_LINE_69_}}
اکنون صفحه خود را به سمت پایین بکشید و نام پایگاه داده ، نام کاربری پایگاه داده ، رمز عبور را وارد کرده و روی دکمه **Finish Setup** کلیک کنید.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="نحوه نصب NextCloud Ubuntu 20.04 با Apache">}}

{{_LINE_73_}}
پس از اتمام نصب ، باید داشبورد Admin NextCloud را در صفحه زیر مشاهده کنید. در اینجا می توانید یک کاربر ، گروه ها ایجاد کنید ، به آنها مجوزها و غیره اختصاص دهید.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="نصب NextCloud در اوبونتو با آپاچی">}}

{{_LINE_77_}}
تبریک می گویم ، شما یک راه حل Cloud Cloud Cloud NextCloud را در سیستم LTS Ubuntu خود دارید. اکنون می توانید سفارشی سازی سرور ابر خود را برای پاسخگویی کامل نیازهای خود شروع کنید.

## **بسته بندی:**  {#4a1a}

تبریک می گویم! شما با موفقیت **NextCloud را روی سرور اوبونتو با Apache** تنظیم و نصب کرده اید. شما یاد گرفته اید که چگونه یک ابر خصوصی ایجاد کنید. NextCloud Server Ubuntu یک پلتفرم شگفت انگیز همکاری ابری است که می تواند تقریباً در مورد نیازهای ذخیره سازی ابری خصوصی یا ترکیبی هر کسی باشد. اکنون می دانید که چگونه NextCloud را در اوبونتو نصب کنید و داده های شما در ابر خود میزبان ایمن و ایمن است. در آموزش های آینده ما ، در مورد موضوعات جالب تر مربوط به پشته های راه حل سرور وب بحث خواهیم کرد.
_ چه راه حل ذخیره سازی مبتنی بر ابر را ترجیح می دهید؟ اگر سوالی دارید ، لطفاً [با ما در تماس باشید][3] ._

## کاوش:
ممکن است دوست داشته باشید مقالات مربوط به مدیریت روزانه سرور خود را دنبال کنید.
  * [نحوه نصب و پیکربندی OwnCloud با Apache در اوبونتو][4]
  * [نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو یا دبیان][5]
  * [phpmyadmin را با nginx در اوبونتو نصب و ایمن کنید][6]
  * [ایمن و رمزگذاری nginx با Let's Enderspt در اوبونتو 20.04][7]
  * [پیکربندی پشتیبانی HTTP/2 در NGINX در Ubuntu/Debian][8]
  * [Setup nginx با مسافر در سرور تولید AWS][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
