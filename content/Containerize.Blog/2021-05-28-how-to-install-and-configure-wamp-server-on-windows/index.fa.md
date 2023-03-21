---
title: "نحوه نصب و پیکربندی سرور WAMP در ویندوز" 
seoTitle: "نحوه نصب و پیکربندی سرور WAMP در ویندوز" 
description: "Wampserver را روی ویندوز نصب کرده و به سرعت شروع به توسعه برنامه های وب مبتنی بر PHP کنید. سرور WAMP برای هر دو ویندوز 32 و 64 بیت در دسترس است." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "یک محیط توسعه وب را برای ایجاد برنامه های وب با Apache2 ، PHP و MySQL تنظیم کنید. این مقاله به شما کمک می کند تا سرور WAMP را روی ویندوز نصب کنید." 
url: /fa/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## یک محیط توسعه وب را برای ایجاد برنامه های وب با Apache2 ، PHP و MySQL تنظیم کنید. این مقاله به شما کمک می کند تا سرور WAMP را روی ویندوز نصب کنید.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="سرور WAMP">}}

هر توسعه دهنده باید قبل از نوشتن برنامه ، نرم افزار لازم را روی رایانه خود نصب کند. در روزهای اولیه ، توسعه دهندگان مجبور بودند هر نرم افزار را به طور جداگانه نصب کنند و سپس آنها را پیکربندی کنند تا با هم کار کنند.  **Wampserver**  و سایر نرم افزارهای پشته راه حل وب در حال حاضر در دسترس هستند که تمام نرم افزارهای لازم را در یک بسته قرار می دهد. شما فقط باید یک بسته را نصب کنید تا محیط توسعه خود را به کار بگیرید.
در این پست وبلاگ بخش های زیر را پوشش خواهیم داد.
  *[ **Wampserver چیست؟** ][1]
  *[ **نصب WAMP** ][2]
  *[ **پیکربندی WAMP** ][3]
  *[ **دسترسی به phpmyadmin** ][4]

## Wampserver چیست؟   {#چی}
Wampserver یک پشته راه حل رایگان برای تنظیم محیط توسعه وب برای برنامه های مبتنی بر PHP است. WAMP مخفف (W - Windows ، A - Apache ، M - MySQL و P - PHP) است. علاوه بر این ، همچنین برای مدیریت بانک اطلاعاتی با Phpmyadmin و Adminer همراه است. WAMP یکی از ابزارهای محبوب است و می توانید به سرعت آن را تنظیم کنید. علاوه بر این ، می توانید سرور WAMP را از کنترل پنل پیکربندی کنید. این یک محیط کامل توسعه وب برای ایجاد و آزمایش برنامه ها فراهم می کند. Wampserver از چندین مؤلفه تشکیل شده است که می توانید در حین نصب مطابق نیاز خود انتخاب کنید. Wampserver با نسخه های متعدد PHP همراه است. شما می توانید به راحتی نسخه PHP را مطابق با نیاز پروژه خود تغییر دهید. همچنین ، می توانید DBMS (سیستم مدیریت پایگاه داده) را از صفحه کنترل Wampserver تغییر دهید.

## نصب WAMP   {#Installation}
برای نصب سرور WAMP در ویندوز ، راهنمای مرحله به مرحله زیر را دنبال کنید.
   **بارگیری Wampserver**  از وب سایت رسمی

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *یک **Wampserver 32 بیت  **یا**   Wampserver 64 بیت** نسخه نصب کننده را با توجه به سیستم عامل خود انتخاب کنید.
  *فایل  **بارگیری**  را پیدا کنید و روی آن دوبار کلیک کنید تا فرآیند نصب را اجرا کنید.
  * زبان را انتخاب کرده و سپس دکمه OK را فشار دهید.
  * کادر انتخاب I I Peeping Teaking را انتخاب کنید و سپس روی دکمه بعدی کلیک کنید.
  * اطلاعات مهم در مورد نصب Wampserver را بخوانید و برای ادامه روی دکمه بعدی کلیک کنید.
  * پوشه ای را انتخاب کنید که می خواهید سرور WAMP را نصب کنید و روی دکمه بعدی کلیک کنید.
  * شما باید مؤلفه هایی را که می خواهید نصب کنید همانطور که در تصویر زیر نشان داده شده است انتخاب کنید. می توانید تمام نسخه های PHP را انتخاب کرده و در طول توسعه تغییر دهید. همچنین ، می توانید MySQL و MariaDB را نصب کنید.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * میانبر را برای Wampserver انتخاب کرده و روی دکمه بعدی کلیک کنید.
  * برای نصب Wampserver روی دکمه نصب کلیک کنید.
  * اکنون ، مرورگر پیش فرض و ویرایشگر متن پیش فرض را برای سرور WAMP انتخاب کنید.
  * نصب شما کامل است. برای خروج از Wizard نصب WAMP Server ، روی دکمه Finish کلیک کنید.
  * مرورگر خود را باز کنید و برای دسترسی به آن ، LocalHost را تایپ کنید. صفحه زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## پیکربندی WAMP   {#configuration}
اکنون ، ما به چند پیکربندی خواهیم پرداخت که در طول توسعه و آزمایش برنامه های وب به شما کمک می کند. اکنون می توانید Wampserver را با دوبار کلیک کردن روی نماد میانبر Wampserver روی دسک تاپ خود شروع کنید.
  * **خدمات** -می توانید گزینه های شروع ، متوقف کردن و راه اندازی مجدد کلیه خدمات را با کلیک چپ بر روی نماد Wampserver مشاهده کنید.
   **تغییر پایگاه داده** -بر روی نماد WAMP راست کلیک کنید تا کادر گفتگوی Tools را باز کنید. ابزارها را انتخاب کرده و روی "Invert Default DBMS Mariadb MySQL" کلیک کنید. WAMP Server به طور خودکار مجدداً راه اندازی می شود و می توانید با باز کردن LocalHost در مرورگر خود ، پایگاه داده پیش فرض را مشاهده کنید.
   **نسخه PHP را تغییر دهید** -بر روی نماد WAMP راست کلیک کنید تا کادر گفتگوی Tools را باز کنید. ابزارها را انتخاب کرده و نسخه PHP CLI را تغییر داده و روی نسخه PHP مورد نظر خود کلیک کنید.
  * **میزبان مجازی**  - شما به راحتی می توانید یک میزبان مجازی را از طریق رابط وب Wampserver اضافه کنید. LocalHost را در مرورگر خود باز کنید و روی "اضافه کردن یک میزبان مجازی" در زیر بخش Tools کلیک کنید. "نام میزبان مجازی مانند dev.example.com" را وارد کرده و مسیر مطلق پروژه را وارد کنید. بر روی دکمه "شروع ایجاد VirtualHost" کلیک کنید. سرور Apache را مجدداً راه اندازی کنید تا میزبان مجازی تازه ایجاد شده را بارگیری کنید.
   **تغییر پورت Apache**  - به طور پیش فرض ، سرور وب Apache روی پورت 80 اجرا می شود. اگر می خواهید از درگاه دیگری برای Apache استفاده کنید ، می توانید آن را از صفحه کنترل Wampserver انجام دهید. برای باز کردن کادر گفتگوی Tools بر روی نماد WAMP راست کلیک کنید. ابزارها را انتخاب کرده و روی "استفاده از پورت غیر از 80" کلیک کنید. یک شماره پورت جدید را در کادر گفتگو وارد کرده و روی دکمه OK کلیک کنید.
   **تغییر پورت DBMS**  - به طور پیش فرض ، سرور پایگاه داده در پورت 3306 اجرا می شود. اگر می خواهید از درگاه دیگری برای سرور پایگاه داده استفاده کنید ، می توانید آن را از صفحه کنترل Wampserver انجام دهید. برای باز کردن کادر گفتگوی Tools بر روی نماد WAMP راست کلیک کنید. ابزارها را انتخاب کرده و روی "استفاده از پورت غیر از 3306" کلیک کنید. شماره پورت جدید را در کادر گفتگو وارد کرده و روی دکمه OK کلیک کنید.
  * **سیاهههای مربوطه**  - Wamserver عملکردی را برای پاک کردن سیاهههای مربوط به صفحه کنترل فراهم می کند. می توانید سیاهههای مربوط به ورود به سیستم خطای PHP ، ورود به سیستم خطای Apache ، ورود به سیستم Apache Access ، MySQL Log و MariaDB Log را خالی کنید. حتی می توانید همه سیاهههای مربوط را به یکباره پاک کنید. برای باز کردن کادر گفتگوی Tools بر روی نماد WAMP راست کلیک کنید. ابزارها را انتخاب کرده و سیاهههای مربوطه را انتخاب کنید ، تمام گزینه های حذف سیاهههای مربوط را پیدا خواهید کرد.
  * **تغییر زبان**  - شما می توانید برای کنترل پنل Wampserver زبان. برای باز کردن کادر گفتگوی Tools بر روی نماد WAMP راست کلیک کنید. زبان را انتخاب کنید و روی زبان مورد نیاز کلیک کنید. کنترل پنل را به زبان تازه انتخاب شده مشاهده خواهید کرد.

## دسترسی به phpmyadmin   {#phpmyadmin}
با باز کردن LocalHost در مرورگر خود می توانید به  **phpmyadmin**  برای مدیریت پایگاه داده های خود دسترسی پیدا کرده و سپس روی پیوند phpmyadmin در صفحه خوش آمدید Wampserver کلیک کنید. همچنین ، می توانید با مراجعه به آدرس http: // localhost/phpmyadmin به آن دسترسی پیدا کنید.

## نتیجه
ما در مورد Wampserver بحث کرده ایم و راهنمای کامل گام به گام را برای **نصب Wampserver  **آن را در ویندوز پوشش داده ایم. با دنبال کردن این آموزش می توانید به راحتی نصب و پیکربندی کنید**   Wampserver** و بلافاصله کدگذاری را شروع کنید. برای گزینه های بیشتر در مورد نرم افزار Solution Stack می توانید از لینک های زیر اکتشاف بازدید کنید.
سرانجام ، [**Containerize.com **][5] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [**  Web Server Solution Stack**][6] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  *[ **بهترین گزینه های راه حل سرور وب منبع باز** ][7]
  *[ **Setup XAMPP و PHPMYADMIN به عنوان LocalHost در ویندوز** ][8]

  
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/