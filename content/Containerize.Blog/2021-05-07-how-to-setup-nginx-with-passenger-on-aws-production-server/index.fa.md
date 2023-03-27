---
title: "نحوه تنظیم NGINX با مسافر در سرور تولید AWS" 
seoTitle: "نحوه تنظیم NGINX با مسافر در سرور تولید AWS" 
description: "این پست وبلاگ مراحل نصب NGINX را با مسافر از طریق سیستم عامل Ubuntu 20.04 LTS به دنبال روش مناسب توصیف می کند." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "این پست وبلاگ مراحل نصب NGINX را با مسافر از طریق سیستم عامل Ubuntu 20.04 LTS به دنبال روش APT شرح می دهد." 
url: /fa/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## این پست وبلاگ مراحل نصب NGINX را با مسافر از طریق سیستم عامل Ubuntu 20.04 LTS به دنبال روش مناسب توصیف می کند.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Setup nginx با مسافر در سرور تولید AWS">}}


## **بررسی اجمالی** :
قبل از استقرار برنامه خود در سرور تولید ، باید **nginx را با مسافر در تولید AWS** سرور نصب و پیکربندی کنید.
**SOURCE SOURCE PHUSION SPUSE** گزینه های شخصی سازی و ویژگی های زیادی را ارائه می دهد. برخی از ویژگی ها برای بهبود ویژگی های عملکرد برنامه استفاده می شود. برخی از برنامه های کاربردی تأثیرگذاری یا رفتار کنترل اتصال و غیره. دو گزینه پیکربندی برای مسافر لازم است که در NGINX تنظیم شوند ، که به عنوان مسافر \ _abled و مسافر \ _root نامگذاری شده است. این فرآیند نصب هر دو گزینه را بطور خودکار تنظیم می کند.
در این مقاله وبلاگ ، ما می خواهیم برخی از مراحل پیکربندی اساسی را برای نصب سرور برنامه وب در سیستم عامل اوبونتو به دنبال روش **روش مناسب** پوشش دهیم. شما قادر خواهید بود برنامه های وب را که در Node.js ، Python و Ruby نوشته شده و پس از خواندن و راهنمای زیر در زیر ، مستقر و مدیریت کنید.
**nginx و مسافر چیست؟** 
**بسته های NGINX و مسافر را نصب کنید** 
* **ماژول Nginx مسافر را فعال کرده و nginx را مجدداً راه اندازی کنید** 
* **اعتبار را تأیید کنید** 
* **به روزرسانی های سیستم و مسافر** 
* **بهترین سرورهای وب منبع باز** 
  * **نتیجه** 

## 1. nginx و مسافر چیست؟ {#step-4:-update-regularly}

**[سرور nginx چیست؟][1] **NGINX یک نرم افزار وب سرور رایگان و باز برای سرویس وب به عنوان یک پروکسی معکوس ، HTTP Load Balancer ، پخش رسانه ، حافظه نهان HTTP و پروکسی ایمیل برای IMAP ، POP3 است. ، و SMTP. بسیار مقیاس پذیر است ، برای حداکثر عملکرد و ثبات طراحی شده است. NGINX با کارایی بالا سرور ناهمزمان ، غیر ضبط شده و رویداد محور است که پردازش درخواست های متعدد مشتری را همزمان امکان پذیر می کند. توسط ایگور سیوف ، که در سال 2004 تحت شرایط مجوز BSD 2 بند منتشر شد ، نوشته شده است.** Nginx 2.5 برابر سریعتر از آپاچی انجام می دهد و مطابق تست معیار حافظه کمتری مصرف می کند.
**[مسافر چیست؟][2] **مسافر Phusion همچنین به عنوان mod \ _rails و mod \ _rack شناخته می شود ، یک سرور وب رایگان و سرور برنامه وب منبع باز است. این برنامه به گونه ای طراحی شده است که سریع ، قوی ، غنی از ویژگی و سبک وزن باشد که با Apache و Nginx ادغام می شود. همچنین امنیت ، قابلیت اطمینان و مقیاس پذیری برنامه ها را بهبود می بخشد. این اجازه می دهد تا به مدیران بینش در مورد عملکرد برنامه های وب ، عملکرد سرور بپردازند. سرور برنامه مسافر به راحتی برنامه های وب شما را اجرا می کند و به طور خودکار مدیریت می کند. همچنین می تواند** چندین برنامه کاربردی**را در همان زمان چند مستاجر و مستقل داشته باشد. این می تواند درخواست های HTTP را انجام دهد ، فرایندها و منابع را مدیریت کند ، و وظایف مدیریت ، نظارت و تشخیص مشکلات را امکان پذیر می کند. Phusion Persenger یک سرور برنامه کاربردی رایگان با پشتیبانی برای استقرار و مدیریت Meteor ، Ruby on Rails Nginx مسافر ، جاوا اسکریپت ، پایتون و Node.js است.

## 2. بسته های NGINX و مسافر را نصب کنید: {#step-1:-install-passenger-packages}

اکنون وقت آن رسیده است که مسافر و Nginx را نصب کنیم. شما قادر خواهید بود به راحتی یکی از سرورهای وب محبوب را به دنبال این راهنما مستقر کنید. در زیر دستورات ذکر شده مسافر و NGINX را از طریق مخزن APT Phusion نصب می کنند. اگر قبلاً NGINX نصب کرده اید ، این دستورات NGINX را به نسخه Phusion با مسافر گردآوری شده در:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. ماژول مسافر nginx را فعال کرده و nginx را مجدداً راه اندازی کنید: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

edit /etc/nginx/nginx.conf و Undument شامل /etc/nginx/passenger.conf ؛. به عنوان مثال ، شما ممکن است این را ببینید:
```
# include /etc/nginx/passenger.conf;
```
شخصیت های "#" را مانند این حذف کنید:
```
include /etc/nginx/passenger.conf;
```
اگر نسخه اظهار نظر از جمله /etc/nginx/passenger.conf را مشاهده نمی کنید ؛ در داخل nginx.conf ، سپس باید خودتان آن را وارد کنید. آن را در /etc/nginx/nginx.conf در داخل بلوک HTTP قرار دهید.
http {
    شامل /etc/nginx/passenger.conf ؛
    ...
}
هنگامی که با این مرحله به پایان رسید ، **راه اندازی nginx** :
```
$ sudo service nginx restart
```

## 4- اعتبار را تأیید کنید: {#step-3:-check-installation}

پس از نصب ، لطفاً نصب را در ترمینال با اجرای فرمان `SUDO/USR/BIN/مسافر-Config Validate-Install` تأیید کنید:
```
sudo /usr/bin/passenger-config validate-install
```
همه چک ها باید عبور کنند. اگر هر یک از چک ها عبور نمی کند ، لطفاً پیشنهادات موجود در صفحه را دنبال کنید.
سرانجام ، بررسی کنید که آیا Nginx فرآیندهای اصلی مسافر را شروع کرده است یا خیر. اجرای `sudo/usr/sbin/memory-memory-stats '. شما باید فرآیندهای Nginx و همچنین فرآیندهای مسافر را ببینید. به عنوان مثال مانند زیر:
```
sudo /usr/sbin/passenger-memory-stats
```
اگر هیچ فرآیند nginx یا فرآیندهای مسافر را مشاهده نمی کنید ، احتمالاً نوعی مشکل نصب یا مشکل پیکربندی دارید. لطفاً به [راهنمای عیب یابی] مراجعه کنید [3].

## 5. به روزرسانی های سیستم و مسافر: {#step-4:-update-regularly}

به روزرسانی های NGINX ، به روزرسانی های مسافر و به روزرسانی های سیستم از طریق مدیر بسته**APT به طور مرتب تحویل داده می شود. شما باید دستور زیر را مرتباً اجرا کنید تا آنها را به روز نگه دارید:
به روزرسانی سودو
به روزرسانی سودو
نیازی به راه اندازی مجدد وب یا برنامه پس از بروزرسانی ندارید ، و همچنین نیازی به تغییر هیچ فایل پیکربندی پس از بروزرسانی ندارید. این همه به طور خودکار برای شما مراقبت می شود.

## 6. **بهترین سرورهای وب منبع باز** : {#step-4:-update-regularly}

**یک سرور وب منبع باز چیست؟** یک نرم افزار وب سرور منبع باز یک نرم افزار دامنه عمومی است که برای ارائه صفحات وب از طریق اینترنت جهانی وب طراحی شده است. در اصل این درخواست ها را از طریق پروتکل شبکه HTTP برای توزیع اطلاعات در شبکه جهانی وب پردازش می کند.
بیش از 80 ٪ برنامه های وب و وب سایت ها توسط سرورهای وب منبع باز تغذیه می شوند. در اینجا من برخی از محبوب ترین سرورهای وب منبع باز**را ذکر کرده ام و می توانید خودتان به راحتی یکی از این سرورهای وب محبوب را مستقر کنید.
* **سرور HTTP Apache** 
* **سرور وب LightTPD** 
**سرور وب OpenLitEspeed** 
* **سرور وب Apache Tomcat** 
* **سرور وب Caddy** 

## [][4. نتیجه گیری: {#next-step}

تبریک می گویم ، شما NGINX را با موفقیت با مسافر در سرور تولید **AWS**برای برنامه وب خود نصب و پیکربندی کرده اید. لطفاً برای تسلط کامل به سرور برنامه مسافر ، به راهنماهای مختلف در [کتابخانه مسافر][5] نگاهی بیندازید. ممکن است شما به خصوص به راهنمای [AUTOMATING DEPLEENCENTY][6] برنامه Ruby خود از طریق**Capistrano** علاقه مند باشید ، که به شما می آموزد که چگونه به طور خودکار به روزرسانی های برنامه های آینده را بدون آنکه کار بسیار دستی داشته باشید ، مستقر کنید. اکنون شما آماده استقرار برنامه وب خود در موارد تولید AWS هستید.
_ چه سرور وب رایگان و برنامه وب منبع باز سرور_ آیا شما برای **توسعه وب یا میزبانی** نیاز دارید**need_؟. آیا در مورد سرور وب رایگان و سرور برنامه وب منبع باز سؤالی دارید؟ ، لطفا_ [تماس بگیرید][7].

## کاوش کنید
ممکن است پست های مربوط به وبلاگ مربوطه را پیدا کنید:
  * [نحوه پیکربندی آپاچی به عنوان یک پروکسی معکوس برای اوبونتو/دبیان][8]
  * [phpmyadmin را با nginx در اوبونتو نصب و ایمن کنید][9]
  * [پیکربندی پشتیبانی HTTP/2 در Nginx در اوبونتو/دبیان][10]
  * [ایمن و رمزگذاری nginx با Let's Enderspt در اوبونتو 20.04][11]
  * [نحوه نصب و پیکربندی OwnCloud با Apache در اوبونتو][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
