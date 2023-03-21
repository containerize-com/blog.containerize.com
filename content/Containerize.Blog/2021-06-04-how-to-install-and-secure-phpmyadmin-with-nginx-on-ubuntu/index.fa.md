---
title: "نحوه نصب و ایمن کردن phpmyadmin با nginx در اوبونتو" 
seoTitle: "نحوه نصب و ایمن کردن phpmyadmin با nginx در اوبونتو" 
description: "phpmyadmin نرم افزار مدیریت پایگاه داده منبع باز است که در PHP نوشته شده است. ما یاد خواهیم گرفت که چگونه phpmyadmin را با nginx نصب کنیم و mysql را از طریق phpmyadmin اداره کنیم" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "phpmyadmin ابزار مدیریت پایگاه داده رابط وب گرافیکی منبع باز است که در PHP نوشته شده است. در این آموزش ، ما می آموزیم که چگونه phpmyadmin را با nginx نصب کنیم." 
url: /fa/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadmin ابزار مدیریت پایگاه داده رابط وب گرافیکی منبع باز است که در PHP نوشته شده است. در این آموزش ، ما می آموزیم که چگونه phpmyadmin را با nginx نصب کنیم.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="نحوه نصب و ایمن کردن phpmyadmin با nginx در اوبونتو">}}


## **بررسی اجمالی**
PhpMyAdmin یک ابزار مدیریت پایگاه داده آزاد و منبع باز است که به کاربران یک رابط وب برای مدیریت سرورهای MySQL یا MARIADB از طریق یک رابط بصری ارائه می دهد. این یکی از نرم افزارهای پشتیبانی شده ای است که توسط اکثر ارائه دهندگان محبوب میزبان ارائه شده است تا به مدیران وب برای ایجاد پایگاه داده در phpmyadmin و مدیریت پایگاه داده ها ، اجرای SQL-Statements ، واردات و صادرات به راحتی. شما می توانید از طریق یک رابط وب گرافیکی به راحتی ، به پایگاه داده های MySQL یا MARIADB در Phpmyadmin با NGINX دسترسی پیدا کنید و در کنار یک محیط توسعه PHP اجرا کنید.
در این راهنما ، ما قصد داریم مراحل را برای نصب و ایمن کردن phpmyadmin با nginx در اوبونتو 20.04 توصیف کنیم. شما نیاز به نصب و پیکربندی phpmyadmin در سرور اوبونتو دارید تا به راحتی با پایگاه داده ها و جداول MySQL کار کند. بنابراین ، بیایید یاد بگیریم که چگونه phpmyadmin را با nginx در اوبونتو 20.04 / 20.10 نصب و ایمن کنیم:
  * پیش نیازها
  * phpmyadmin را نصب کنید
  * پایگاه داده را پیکربندی کنید
  * پیوند نمادین ایجاد کنید
  * دسترسی به phpmyadmin
  * Superuser MySQL را ایجاد کنید
  * phpmyadmin امن
  * نتیجه

## مرحله 1: پیش نیازها   {#id-prerequisites}
برای دنبال کردن این راهنما ، به سرور اوبونتو 20.04 در رایانه محلی خود یا در سرور از راه دور با پیش نیازها نیاز دارید.
  * شما باید به عنوان یک کاربر غیر ریشه با امتیازات sudo به سرور دسترسی پیدا کنید و فایروال UFW را فعال کنید.
  * فرض بر این است که شما قبلاً nginx ، mysql و php را در اوبونتو نصب کرده اید.
  * همانطور که phpmyadmin از اعتبار MYSQL برای تأیید اعتبار استفاده می کند ، بنابراین باید گواهینامه های SSL/TLS را نیز نصب کنید تا ترافیک رمزگذاری شده بین سرور و مشتری را فعال کنید.
با این کار ، اجازه دهید شروع به نصب و ایمن کردن PhpMyAdmin برای اتصال به MySQL Server برای دسترسی به پایگاه داده از طریق رابط وب کنیم.

## مرحله 2: phpmyadmin   {#id-1-install-phpmyadmin} را نصب کنید
اطمینان حاصل کنید که قبل از نصب phpmyadmin در اوبونتو 20.04 ، تمام پیش نیازهای موجود در سیستم خود را با موفقیت نصب کرده اید. با به روزرسانی لیست بسته ها شروع کنید:
```
sudo apt update 
```
اکنون دستور زیر را برای نصب بسته phpmyadmin از مخازن پیش فرض اوبونتو در اوبونتو 20.04 / 20.10 اجرا کنید:
```
sudo apt install phpmyadmin

```
هنگامی که از شما خواسته شد ادامه دهید  **y **  و  **را وارد کنید. اگر از شما خواسته می شود یک سرور وب را انتخاب کنید ، زیرا گزینه ای برای **  nginx  **مانند زیر وجود ندارد ، **  Tab  **را فشار دهید تا OK را انتخاب کنید و سپس **  ** را وارد کنید تا بدون انتخاب سرور وب ادامه یابد.

{{< figure align=center src="images/mysql-setup.png" alt="phpmyadmin را برای nginx در اوبونتو 20.04 نصب و ایمن کنید">}}


## مرحله 2: پیکربندی پایگاه داده   {#id-1-install-phpmyadmin}
در مرحله بعد ،  **بله **  را انتخاب کنید و  **را وارد کنید **  برای نصب و تنظیم پایگاه داده با استفاده از ابزار dbconfig-common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="نحوه پیکربندی mysql با phpmyadmin">}}

رمز عبور برنامه MySQL توسط Phpmyadmin برای برقراری ارتباط با پایگاه داده MySQL در داخل استفاده می شود. برای ثبت نام به عنوان پایگاه داده جدید ، یک رمز عبور جدید برای Phpmyadmin DBMS وارد کنید ، OK را انتخاب کرده و Enter را فشار دهید تا ادامه یابد.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="نحوه پیکربندی mysql برای phpmyadmin">}}

از شما خواسته می شود رمز عبور را تأیید کنید ، همان رمز عبور را وارد کنید ،  **OK **  را انتخاب کنید و  **را وارد کنید ** . تبریک می گویم! phpmyadmin با موفقیت بر روی سیستم شما نصب شده است.

## مرحله 4: پیوند نمادین ایجاد کنید   {#ID-2-Sreate-Symbolic-Link}
روش های مختلفی برای پیکربندی nginx برای ارائه پرونده های phpmyadmin وجود دارد. اگر بلوک سرور دامنه شما در حال حاضر برای ارائه درخواست های PHP تنظیم شده است ، باید یک پیوند نمادین را از پرونده های نصب Phpmyadmin nginx/usr/share/phpmyadmin به دایرکتوری ریشه اسناد دامنه خود ایجاد کنید. محل پیش فرض ریشه سند Nginx در اوبونتو 20.04/20.10 باید/var/www/html/باشد و بسته به تنظیم INS شما می تواند متفاوت باشد. ریشه سند شما ممکن است به عنوان مثال در /var/www/example.com/public_html قرار داشته باشد.
در مرحله بعد ، ما یک پیوند نمادین از فهرست Phpmyadmin/usr/share/phpmyadmin به ریشه اسناد شما ایجاد خواهیم کرد. در اینجا فرض خواهیم کرد که ریشه سند ما/var/www/html/است و ما به سادگی phpmyadmin را به پایان این کار اضافه خواهیم کرد. این به ما امکان می دهد تا به phpmyadmin در url به عنوان مثال. com/phpmyadmin دسترسی پیدا کنیم
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## مرحله 5: دسترسی به phpmyadmin   {#id-3-test-phpmyadmin}
اکنون باید با مراجعه به نام میزبان/دامنه سرور خود یا آدرس IP عمومی و به دنبال آن Domain.com/phpmyadmin در مرورگر وب مورد علاقه خود ، به رابط وب phpmyadmin دسترسی پیدا کنید. به عنوان مثال http://example.com/phpmyadmin یا http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
در سرورهای اوبونتو که با MySQL 5.7 و بعد از آن کار می کنند ، شما نمی توانید با استفاده از حساب root پیش فرض MySQL به پایگاه داده Phpmyadmin رایگان وارد شوید و خطایی مانند _ "دسترسی برای کاربر" root "@" localhost "" را دریافت خواهید کرد. در عوض ، شما باید یک حساب Superuser جدید فقط برای Phpmyadmin ایجاد کنید. در مرحله بعد ، ما حساب Root MySQL را برای ورود به phpmyadmin ایجاد خواهیم کرد.

## مرحله 6: ایجاد superuser mysql   {#id-4-create-mysql-superuser}
در ترمینال ، با استفاده از رمز عبور Root MySQL که ممکن است هنگام نصب پایگاه داده phpmyadmin mysql برای اولین بار ، یک رمز عبور ریشه ایجاد کرده اید ، با ورود به mysql شروع کنید.
```
sudo mysql -u root -p
```
پس از ورود به MySQL ، با نام کاربری مورد نظر خود ، یک Superuser MySQL جدید اضافه کنید. در این مثال ما آن را یاسیرادمین می نامیم. [برای ایجاد یک رمز عبور قوی اینجا را کلیک کنید][2] و جایگزین جدید \ _password \ _here در زیر با آن.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
اکنون امتیازات Superuser را به کاربر جدید Yasiradmin ما اعطا کنید.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
اکنون از جلسه MySQL خارج شوید. اکنون باید با استفاده از این اعتبار جدید Superuser بتوانید به Phpmyadmin دسترسی پیدا کنید.

{{< figure align=center src="images/image.png" alt="نحوه ورود phpmyadmin در اوبونتو 20.04">}}

بسیار توصیه می شود که امنیت اضافی را برای phpmyadmin برای تأمین امنیت phpmyadmin nginx تنظیم کنید. شما باید بتوانید URL phpmyadmin را به چیزی مانند URL مبهم تغییر داده و دسترسی پیدا کنید.

## مرحله 7: امن phpmyadmin   {#id-6-secure-phpmyadmin-reconded
در مرحله بعد ، ما می خواهیم احراز هویت را در NGINX تنظیم کنیم تا یک لایه امنیتی اضافی فراهم شود. اکنون ما Apache2-Utils را نصب خواهیم کرد ، که می تواند پرونده .htpasswd را که با هر دو سرورهای NGINX و APACHE2 کار می کند ، تولید کند.
```
sudo apt install apache2-utils
```
پس از نصب ، می توانیم پرونده .htpasswd را تولید کنیم. نام کاربری مورد نظر خود را تغییر دهید. [یک رمز عبور ایجاد کنید][3] و آن را ایمن نگه دارید.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
اکنون یک پرونده .htpasswd وجود دارد که حاوی نام کاربری و رمز ورود شما است. می توانید این کار را با دستور زیر بررسی کنید:
```
cat /etc/nginx/.htpasswd
```
شما باید چیزی مانند نام کاربری را ببینید: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
اکنون باید 2 دستورالعمل را به پرونده پیکربندی NGINX اضافه کنیم. محل پرونده پیکربندی بسته به نصب شما ممکن است متفاوت باشد ، اگرچه مسیر پرونده پیش فرض معمولاً در/etc/nginx/سایت های موجود در دسترس/پیش فرض است. اگر چندین دامنه را تنظیم کنید ، ممکن است پرونده پیکربندی شما در جایی مانند /etc/nginx/sites-available/example.com قرار داشته باشد
در این مثال ، فرض خواهیم کرد که پرونده پیکربندی nginx در/etc/nginx/سایت های موجود/پیش فرض است. پرونده را برای ویرایش آن باز کنید.
```
sudo nano /etc/nginx/sites-available/default
```
به پایین بروید و به دنبال بلوک های موقعیت مکانی و چسباندن در یک بلوک جدید در زیر آنها با نام پوشه مبهم Phpmyadmin خود باشید ، در این مثال Aspose_Hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
ذخیره فایل و خروج (Ctrl + X را فشار دهید ، y را فشار داده و سپس Enter را فشار دهید). بررسی کنید که فایل پیکربندی Nginx معتبر است ، در غیر این صورت سرور می تواند با اجرای دستور در راه اندازی مجدد خراب شود.
```
sudo nginx -t
```
اگر معتبر است ، تنظیم مجدد NGINX را بارگیری کنید.
```
sudo service nginx reload
```
اکنون هنگام بازدید از مثال. com/aspose_hidden ، باید با یک پنجره تأیید اعتبار ارائه شود.

{{< figure align=center src="images/auth3.png" alt="نحوه اطمینان از phpmyadmin">}}

همه شما با تاسیسات phpmyadmin در سرور اوبونتو انجام شده اید.

## نتیجه گیری:   {#id-what-next}
تبریک می گویم ، شما با موفقیت phpmyadmin را با NGINX برای سرور اوبونتو 20.04 / 20.10 نصب کرده اید و اکنون می توانید MySQL را از طریق phpmyadmin اداره کنید. اکنون ، می توانید شروع به ایجاد پایگاه داده های MySQL ، کاربران ، جداول ، انجام نمایش داده های MySQL و سایر موارد دیگر کنید.
اگر سوالی دارید ، در بخش نظرات در زیر به من بگویید.

## کاوش کنید
همچنین ممکن است مقالات زیر را در زیر دوست داشته باشید:
  * [نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان][4]
  * [نحوه ایمن و رمزگذاری nginx با اجازه رمزگذاری در اوبونتو 20.04][5]
  * [نحوه پیکربندی پشتیبانی http/2 در nginx در اوبونتو/دبیان][6]
  * [نحوه تنظیم NGINX با مسافر در سرور تولید AWS][7]
  * [نحوه نصب و پیکربندی OwnCloud با Apache در اوبونتو][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
