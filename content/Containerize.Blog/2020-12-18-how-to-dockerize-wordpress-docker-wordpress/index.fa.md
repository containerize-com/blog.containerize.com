---
title: "نحوه dockerize WordPress | داکر وردپرس" 
seoTitle: "نحوه dockerize WordPress | داکر وردپرس" 
description: "Docker & Docker آهنگسازی چیست؟ در این مقاله ، ما یاد خواهیم گرفت که چگونه Docker ، Docker Compose را نصب کنیم و چگونه وردپرس را در یک ظرف Docker Dockerize کنیم." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "یک نرم افزار کانتینر یک برنامه ، وابستگی های آن را جمع می کند و باعث می شود برنامه در هر محیط محاسباتی اجرا شود. بیایید یاد بگیریم که چگونه وردپرس را dockerize کنیم." 
url: /fa/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## یک نرم افزار کانتینر یک برنامه ، وابستگی های آن را جمع می کند و باعث می شود برنامه در هر محیط محاسباتی اجرا شود. بیایید یاد بگیریم که چگونه وردپرس را dockerize کنیم.

{{< figure align=center src="images/dockerwordpress.png" alt="وردپرس را dockerize">}}


## بررسی اجمالی
به یک پست وبلاگ دیگر در گروه [وبلاگ نویسی][1] نرم افزار منبع باز خوش آمدید. ما مقالاتی را در مورد موضوعاتی از قبیل [تقویت سربهای شما با ادغام رایگان Civicrm WordPress][2] ، [نحوه ساخت وب سایت خود با وردپرس و گتسبی][3] و موارد دیگر منتشر کرده ایم. با این حال ، این مقاله بینش و جزئیات بیشتری در مورد سیستم عامل های وبلاگ نویسی منبع باز و **نرم افزار کانتینر**به ارمغان می آورد. ما سؤالات داغ مانند آنچه Docker &**نحوه نصب Docker Compose** را طی خواهیم کرد ، خواهیم پرداخت و یاد خواهیم گرفت که چگونه وردپرس را dockerize کنیم.
کانتینریزاسیون به عنوان جایگزینی برای مجازی سازی به یک روند اصلی در توسعه نرم افزار تبدیل شده است. این شامل محصور کردن یا بسته بندی کد نرم افزار و تمام وابستگی های آن است تا بتواند به طور مداوم در هر زیرساخت اجرا شود. کانتینریزاسیون به توسعه دهندگان این امکان را می دهد تا برنامه های کاربردی را سریعتر و ایمن تر ایجاد و مستقر کنند. Docker محبوب ترین برنامه کانتینر سازی است که در سراسر جامعه توسعه دهنده استفاده می شود. در این آموزش ، ما یاد خواهیم گرفت که چگونه وردپرس را با استفاده از آهنگسازی Docker Dockerize کنیم. بنابراین ، بیایید با نکات زیر شروع کنیم.
* [ **داکر چیست؟** ][4]
* [ **چرا شما نیاز به dockerize wordpress** ؟][5]
* **[نحوه نصب آهنگسازی Docker][6]** 
* **[dockerize wordpress][7]** 
* **[نتیجه گیری][8]** 

## داکر چیست؟ {#docker}

به عبارت ساده ، Docker منبع باز **نرم افزار کانتینر** است که مجازی سازی را سریعتر و سبک تر انجام می دهد. آنقدر سبک است که یک ظرف Docker فقط در چند ثانیه قابل راه اندازی است. و به راحتی می توانید ده ها کانتینر Docker را روی یک رایانه شخصی اجرا کنید. توسعه دهندگان از Docker برای ایجاد ، استقرار و اجرای برنامه ها با استفاده از ظروف استفاده می کنند. ظروف به یک توسعه دهنده اجازه می دهد تا با تمام قطعات مورد نیاز خود ، مانند کتابخانه ها و سایر وابستگی ها ، یک برنامه را بسته بندی کند و آن را به عنوان یک بسته مستقر کند. با این کار ، توسعه دهنده می تواند اطمینان داشته باشد که برنامه در هر زیرساختی اجرا می شود. علاوه بر این ، یک جامعه توسعه دهنده و پشتیبانی عظیمی وجود دارد که همیشه زنده است تا در هر ارتباطی حداکثر کمک کند. Docker به دلیل ویژگی ها و کاربردهای قدرتمند خود به یک مؤلفه ضروری از هر شرکت نرم افزاری تبدیل شده است.

## چرا شما نیاز به dockerize WordPress دارید؟ {#why}

در این بخش ، ما در مورد نیاز پشت dockerizing WordPress اطلاع خواهیم داشت. وردپرس یک نرم افزار برتر پیشرو در زمینه وبلاگ نویسی منبع باز است که توسط دنیای فناوری بسیار پذیرفته شده است. با این حال ، برای اجرای وردپرس به صورت محلی ، شما به Apache/Nginx ، MySQL Server ، PHP و تن وابستگی های دیگر نیاز دارید. و استقرار در مرحله بندی یا محیط تولید ، کابوس است که در مورد مدیریت آن وابستگی ها می آید. بعضی اوقات ، این یک دردسر برای توسعه دهندگان و مهندسان پشتیبانی می شود تا اعزام ها را بارها و بارها تکرار کنند زیرا خواستار زمان و نیروی انسانی است.
بنابراین ، کانتینریزاسیون می تواند در این زمینه به شما کمک کند. تمام آنچه شما نیاز دارید Docker است - نصب خود ثانیه طول می کشد و هیچ پیکربندی اضافی لازم نیست
مهم نیست که آیا این یک دستگاه Dev ، Stage یا Live Server است و چه سیستم عامل ای دارد ، Docker در همه جا یکسان است. این بدان معناست که شما لازم نیست به دنبال اشکالات باشید که مثلاً در یک محیط ظاهر می شوند و نمی توانند در دیگری تولید شوند.

## نحوه نصب آهنگسازی Docker {#install}


### پیش نیازها
شما می توانید از Docker Compose استفاده کنید تا به راحتی وردپرس را در یک محیط جدا شده ساخته شده با ظروف داکر اجرا کنید. این راهنما نحوه استفاده از آهنگسازی برای تنظیم و اجرای وردپرس را نشان می دهد.
Docker Compose به Docker Engine متکی است ، بنابراین مطمئن شوید که موتور Docker نصب شده است. در سیستم های دسک تاپ مانند Docker Desktop برای Mac و Windows ، Docker Compose به عنوان بخشی از آن نصب های دسک تاپ گنجانده شده است. با این حال ، ابتدا در سیستم های لینوکس ، موتور Docker را با دنبال کردن [راهنمای رسمی آنها] نصب کنید [9].

### نصب را در لینوکس نصب کنید
این دستور را برای بارگیری نسخه پایدار فعلی Docker Compose اجرا کنید:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
مجوزهای اجرایی را روی باینری اعمال کنید:
```
sudo chmod +x /usr/local/bin/docker-compose
```
تست نصب با اجرای دستور نسخه:
```
docker-compose --version
```

### یک dockerfile را برای وردپرس تعریف کنید
اولین کاری که ما باید انجام دهیم این است که تعریف کنیم که تصویر ما چگونه در یک Dockerfile _**به نظر می رسد. این یک فایل متنی است که با منابع برنامه شما به فهرست اضافه می شود.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
" **/var/www/html/wordpress** " حاوی محتویات کامل وردپرس به همراه مضامین ، افزونه ها و محتویات است. اگر مخزن شما فقط حاوی موضوع یا افزونه است ، فقط پوشه مربوطه را اضافه کنید.
یک فایل docker-compose.yml ایجاد کنید که وبلاگ وردپرس شما را شروع می کند و یک نمونه جداگانه mySQL با یک حجم حجم برای تداوم داده ها:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
اکنون دستور را در فهرست پروژه خود اجرا کنید
```
docker-compose up -d
```
این کار **_ docker-compose up _** در حالت جدا شده ، تصاویر docker مورد نیاز را می کشد و ظروف وردپرس و پایگاه داده را شروع می کند.
پس از شروع ظروف ، می توانید URL را در مرورگر وب باز کرده و از برنامه خود استفاده کنید:
```
http://localhost:8000
```

## نتیجه {#conclusion}

این ما را به پایان این پست وبلاگ می رساند. در این مقاله ، ما در مورد آنچه Docker است ، **نحوه نصب Docker Compose**مطلع شدیم. ما همچنین یاد گرفتیم که چگونه وردپرس را با استفاده از docker-compose dockerize کنیم. علاوه بر این ، ما شما را با مفهوم پشت Docker آشنا کردیم و چگونه می توانید برنامه های ساده چندگانه را تعریف کنید. با این حال ، این منبع باز**نرم افزار کانتینر** گزینه اصلی برای همه سازمان های نرم افزاری است. بنابراین ، اگر به دنبال انتخاب Docker برای برنامه های خود هستید ، این مقاله واقعاً به شما کمک می کند. بسیاری از مقاله های مرتبط دیگر و نرم افزار وبلاگ نویسی در بخش "کاوش" در زیر ذکر شده است.
سرانجام ، [Containerize.com][10] در حال نوشتن مقالاتی در مورد محصولات منبع باز بیشتر است. بنابراین ، لطفاً برای اخبار و به روزرسانی های منظم با گروه [وبلاگ نویسی][1] در تماس باشید. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][11] ، [LinkedIn][12] و [Twitter][13] دنبال کنید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [وردپرس][14]
  * [جکیل][15]
  * [گفتمان][16]
  * [شبح][17]
  * [چگونه می توان وردپرس را با آهنگسازی docker dockerize کرد][18]
  * [هدایت خود را با ادغام رایگان Civicrm WordPress][2]
  * [سیستم بلیط فروشی با استفاده از وردپرس و استیکت][19]
  * [نحوه ادغام انجمن گفتمان با وردپرس][20]
  * [افزایش ترافیک جستجوی وب سایت با دنبال کردن 7 وبلاگ برتر سئو][21]
  * [نحوه ساخت وب سایت خود با وردپرس و گتسبی][3]
  * [چگونه می توان فشرده سازی GZIP را در WordPress برای Pagspeed بهتر و SEO فعال کرد][22]



[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/fa/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
