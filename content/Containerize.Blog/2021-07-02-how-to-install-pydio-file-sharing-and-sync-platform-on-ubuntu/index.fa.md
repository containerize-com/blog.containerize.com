---
title: "نحوه نصب پلت فرم اشتراک و همگام سازی فایل Pydio در اوبونتو" 
seoTitle: "نحوه نصب پلت فرم اشتراک و همگام سازی فایل Pydio در اوبونتو" 
description: "Pydio یک اشتراک فایل منبع باز و نرم افزار اشتراک گذاری اسناد مشترک خود میزبان است. بیایید نحوه نصب ابزار اشتراک و همگام سازی فایل Pydio را مرور کنیم." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio یک سیستم عامل اشتراک و همگام سازی فایل مبتنی بر ابر برای دسترسی به تمام داده ها در هر نقطه و در هر دستگاه است. این آموزش در مورد نحوه نصب Pydio در اوبونتو است." 
url: /fa/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio یک سیستم عامل اشتراک و همگام سازی فایل مبتنی بر ابر است تا به همه داده ها در هر نقطه و هر دستگاه دسترسی پیدا کند. این آموزش در مورد نحوه نصب Pydio در اوبونتو است.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="نحوه نصب پلت فرم اشتراک و همگام سازی فایل Pydio در اوبونتو">}}


##**بررسی اجمالی**
سلولهای Pydio یک نرم افزار اشتراک گذاری و هماهنگ سازی فایل منبع باز است. این یک نقطه دسترسی به کلیه ذخیره سازی داده های شما را فراهم می کند و جایگزینی برای OwnCloud و NextCloud است که خدمات ذخیره سازی ، اشتراک فایل و همگام سازی را ارائه می دهد. Pydio یک بستر اشتراک گذاری فایل منبع باز شرکت شبیه به Dropbox و سایر سیستم عامل های ذخیره سازی است. این به شما کمک می کند تا تمام پرونده ها و دستگاه های خود را در یک سیستم عامل ایمن وصل کنید.
سلولهای Pydio یک پرونده همگام سازی و همکاری فایلهای مبتنی بر ابر است. این نرم افزار منبع باز روی زیرساخت های شخصی فناوری اطلاعات شما اجرا می شود و به کارکنان شما کمک می کند تا از داده های تجاری خود محافظت و نظارت کنند. می توانید داده های خود را همگام سازی کرده و از هر مکانی با استفاده از یک برنامه تلفن همراه ، نرم افزار دسک تاپ یا یک مرورگر وب با استفاده از سلولهای Pydio به آن دسترسی پیدا کنید. برنامه به اشتراک گذاری فایل بهترین سلول های Pydio بر اساس یک معماری میکرو سرویس است و با استفاده از زبان برنامه نویسی Golang نوشته شده است.
این آموزش به شما کمک می کند تا نرم افزار اشتراک فایل میزبان Pydio Self را در سیستم های Ubuntu LTS نصب و پیکربندی کنید.
  * شروع شدن
  * سرور لامپ را نصب کنید
  * Pydio را در اوبونتو نصب کنید
  * ایجاد پایگاه داده Pydio و کاربر
  * به Pydio در مرورگر خود دسترسی پیدا کنید
  * نتیجه

## مرحله 1: شروع کار
قبل از نصب ، باید اطمینان حاصل کنید که سیستم شما آخرین بسته ها را اجرا می کند. برای به روزرسانی سرور اوبونتو 20.04 خود از دستور زیر استفاده کنید.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
پس از بروزرسانی ، همیشه توصیه می شود سرور خود را برای تغییر تغییرات جدید دوباره راه اندازی کنید.
```
sudo reboot
```

## مرحله 2: سرور لامپ را نصب کنید
برای تنظیم سرور اشتراک فایل شرکت Pydio Secure Enterprise و نحوه ایجاد یک ابر خصوصی منبع باز ، ابتدا باید یک سرور لامپ در حال اجرا را تنظیم کنیم. اگر قبلاً پشته لامپ را نصب و اجرا کرده اید ، از این مرحله استفاده کنید و از دستورات زیر استفاده کنید تا لامپ را روی سیستم اوبونتو تنظیم کنید.

### PHP را نصب کنید
با اجرای دستورات می توانید PHP را بر روی سیستم اوبونتو یا دبیان خود نصب کنید:
sudo apt-get نصب python-software-properties
SUDO Add-App-Repository PPA: ONDREJ/PHP
نصب sudo apt-get -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### نصب apache2
Apache پرکاربردترین نرم افزار سرور وب منبع باز است. در مرحله بعد ، سرور وب Apache را بر روی اوبونتو نصب کنید:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

### mysql را نصب کنید
سیستم مدیریت پایگاه داده رابطه ای با منبع باز MySQL جزء پشته نرم افزار برنامه وب LAMP و سایر موارد است. اکنون با اجرای زیر MySQL را در اوبونتو نصب کنید:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
پس از اتمام نصب ، پرونده پیکربندی  **php.ini**  را باز کنید تا ویرایش شود. از ویرایشگر پرونده مورد نظر خود استفاده کنید.
مانند زیر در پرونده PHP.ini تغییراتی ایجاد کنید. دو پرونده را باز کنید و همانطور که نشان داده شده تغییرات را ایجاد کنید
```
sudo vim /etc/php/7.4/apache2/php.ini
```
تغییرات زیر را ایجاد کنید
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
فایل را ذخیره و ببندید و به ویرایش پرونده دیگر Php.ini ادامه دهید
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## مرحله 3: Pydio را روی اوبونتو نصب کنید
ابتدا باید مخزن نرم افزار اشتراک فایل رایگان Pydio را به سرور Ubuntu 20.04 خود اضافه کنید زیرا در حال حاضر در دسترس نیست. همچنین سیستم اشتراک گذاری فایل Pydio بهترین را برای کلید Public Business اضافه کرده و برای به روزرسانی مخزن سیستم خود پیش بروید.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
اکنون زمان آن رسیده است که Pydio EFSS و نرم افزار اشتراک گذاری اسناد را نصب کنیم. همانطور که نشان داده شده دستور را اجرا کنید
```
sudo apt install -y pydio pydio-all
```
ماژول بازنویسی Apache را با استفاده از دستورات زیر نشان داده شده و راه اندازی مجدد و فعال کردن Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
تأیید کنید که سرویس Apache با استفاده از دستور زیر در حال اجرا است:
```
sudo systemctl status apache2
```
خروجی باید همانطور که در صورت نصب به درستی انجام شده است نشان داده شود ، نشان می دهد که سرویس Apache2 در حال اجرا است.

## مرحله 4: ایجاد پایگاه داده Pydio و کاربر
پس از استخراج کد ، اکنون اجازه دهید یک پایگاه داده MySQL و حساب کاربری برای پیکربندی Pydio ایجاد کنیم. از مجموعه دستورات زیر برای ورود به MySQL Server برای ایجاد پایگاه داده AJAXPLORER SHARESYNC یا PYDIO و کاربر استفاده کنید.
mysql -u root -p
رمز عبور را وارد کنید:
mysql> ایجاد پایگاه داده pydio ؛
mysql> همه را به pydio اعطا کنید.* به "pydio"@"localhost" شناسایی شده توسط "_password_" ؛
mysql> امتیازات فلش ؛
mysql> ترک
{{_LINE_69_}}
در مرحله بعد ، برای ایجاد یک ابر خصوصی ، باید Pydio را در اوبونتو از رابط وب نصب کنیم.

## مرحله 5: به Pydio در مرورگر خود دسترسی پیدا کنید
مرورگر خود را باز کنید و URL _http: /// pydio_ را تایپ کنید. شما باید صفحه ای را که نشان داده شده است مشاهده کنید
اکنون نرم افزار اشتراک گذاری فایل ابری خصوصی Pydio اکنون نصب و پیکربندی شده است ، زمان آن رسیده است که به رابط وب خود دسترسی پیدا کنیم.
مرورگر خود را باز کنید و URL را http: // -server -ip / pydio خود را تایپ کنید. شما به صفحه زیر هدایت خواهید شد:

{{< figure align=center src="images/Pydio-Installer.png" alt="نصب کننده Pydio">}}

همه کنترل ها را تأیید کرده و روی دکمه نصب  **Pydio**  کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="جادوگر راه اندازی پییدو">}}

زبان خود را انتخاب کرده و روی  **شروع جادوگر**  کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

{{< figure align=center src="images/Starting-the-setting.png" alt="تنظیمات Pydio را شروع کنید">}}

نام برنامه و پیام خوش آمدید را وارد کنید. سپس روی دکمه  **بعدی**  کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

{{< figure align=center src="images/Enter-the-application-name.png" alt="برنامه Pydio را وارد کنید">}}

بعد ، حساب Administrator خود را وارد کرده و روی دکمه  **بعدی**  کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

{{< figure align=center src="images/MySQL-database-settings.png" alt="تنظیمات پایگاه داده MySQL">}}

سپس جزئیات پایگاه داده خود را مانند نام پایگاه داده ، نام کاربری و رمز عبور وارد کنید. سپس روی دکمه  **تست DB Connection**  کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="گزینه های پیشرفته Pydio">}}

بعد ، روی دکمه  **نصب Pydio**  کلیک کنید. پس از اتمام نصب با موفقیت. شما به صفحه زیر هدایت خواهید شد:

{{< figure align=center src="images/Pydio-Login.png" alt="ورود به سیستم">}}

سپس نام کاربری و رمز عبور خود را برای مدیر وارد کنید. سپس بر روی دکمه [Enter] کلیک کنید. شما باید صفحه زیر را مشاهده کنید:

آره انجام شد. اکنون می دانید که چگونه می توانید همگام سازی فایل میزبان Pydio Self و نرم افزار اشتراک گذاری فایل منبع باز را در اوبونتو برای ساختن یک ابر خصوصی به صورت مرحله به مرحله مشابه Dropbox یا Google Drive نصب کنید.

##  **نتیجه گیری:**    {#4a1a}
در این آموزش ، شما با موفقیت به اشتراک گذاری پرونده Secure Secure Cells Pydio در سیستم اوبونتو خود را با موفقیت نصب کرده اید. می توانید از این مقاله برای ایجاد زیرساخت ابری برای ذخیره ، ایمن سازی و به اشتراک گذاری پرونده های خود در ابر خود میزبان استفاده کنید. برای به دست آوردن کنترل بیشتر در مورد داده های خود و اطمینان از همکاری کارآمد در سازمان تجاری خود ، از به اشتراک گذاری سند مشترک Pydio و بهترین برنامه اشتراک گذاری فایل رایگان استفاده کنید. در آموزش های آینده ما ، ما در مورد موضوعات جالب تر راه حل های ذخیره سازی ابر منبع باز و ابزارهای همکاری به اشتراک گذاری پرونده بحث خواهیم کرد.
_ شما می توانید در [توییتر][1] ، [LinkedIn][2] و صفحه [Facebook][3] ما به ما بپیوندید. از چه بستر اشتراک گذاری Cloud_ Source _File Service استفاده می کنید؟ اگر سوالی دارید ، لطفاً [با شما در تماس باشید][4].

## کاوش:
ما همچنین چندین مقاله دیگر در رابطه با مدیریت روزانه سرور شما داریم.
  * [نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان][5]
  * [نحوه نصب و ایمن phpmyadmin با nginx در اوبونتو][6]
  * [ایمن و رمزگذاری nginx با Let's Encrypt on Ubuntu 20.04][7]
  * [پیکربندی پشتیبانی HTTP/2 در NGINX در Ubuntu/Debian][8]
  * [Setup nginx با مسافر در سرور تولید AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
