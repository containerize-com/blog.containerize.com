---
title: "نحوه فعال کردن فشرده سازی GZIP در وردپرس | gzip wordpress" 
seoTitle: "نحوه فعال کردن فشرده سازی GZIP در وردپرس | gzip wordpress" 
description: "آیا می خواهید فشرده سازی GZIP را در وردپرس فعال کنید تا وب سایت خود را سرعت بخشد؟ در این پست وبلاگ ، ما یاد می گیریم که چگونه فشرده سازی را در وردپرس فعال کنیم." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "سرعت صفحه و زمان بار عوامل اصلی برای رتبه بندی بهتر در موتورهای جستجو است. فشرده سازی GZIP می تواند این اتفاق را انجام دهد و حاشیه رقابتی را فراهم کند." 
url: /fa/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## سرعت و زمان بار صفحه عوامل اصلی برای رتبه بندی بهتر در موتورهای جستجو است. فشرده سازی GZIP می تواند این اتفاق را انجام دهد و حاشیه رقابتی را فراهم کند.

{{< figure align=center src="images/Asset-1.png" alt="فشرده سازی GZIP را فعال کنید">}}


## بررسی اجمالی
از آنجا که گوگل و سایر موتورهای جستجوگر تجربه کاربری یک وب سایت (UX) را در نظر می گیرند ، یک عامل مهم در الگوریتم های رتبه بندی آنها است. بهبود و بهینه سازی وب سایت شما برای رتبه های برتر از اهمیت بیشتری برخوردار شده است. از مهمترین عواملی که باید به آنها توجه کنید ، سرعت صفحه و زمان بارگذاری هستند. و سریعترین و ساده ترین راه برای بهبود سرعت و عملکرد سایت ، فعال کردن فشرده سازی GZIP در وب سایت شما است. این احتمال وجود دارد که میزبان وب شما به طور خودکار فشرده سازی GZIP را برای شما امکان پذیر کند. اگر اینطور نیست ، شما باید خودتان این کار مهم را انجام دهید.
در این مقاله ، ما دقیقاً به شما نشان خواهیم داد که چگونه می توانید فشرده سازی GZIP را در وردپرس به راحتی فعال کنید. بیا شروع کنیم!
* [ **فشرده سازی GZIP** ؟][1]
* [ **فشرده سازی GZIP چگونه کار می کند؟** ][2]
* **[چگونه می توان تأیید کرد که آیا فشرده سازی GZIP فعال است؟][3]** 
* **[فعال کردن فشرده سازی GZIP در وردپرس][4]** 
* **[نتیجه گیری][5]** 

## فشرده سازی GZIP چیست؟ {#what}

GZIP یک فرمت فایل **و یک برنامه نرم افزاری** برای فشرده سازی پرونده و رفع فشار استفاده می شود. سرورهای وب یا سایر نرم افزارها از فشرده سازی GZIP برای فشرده سازی پرونده های داده قبل از ارسال به مرورگرهای کاربران استفاده می کنند. این باعث کاهش زمان بارگیری فایل می شود که وب سایت شما را سریعتر می کند. همه مرورگرهای مدرن از فشرده سازی GZIP پشتیبانی می کنند.
همچنین لازم به ذکر است که فشرده سازی GZIP قبل از فعال کردن فشرده سازی پرونده و پوشه باید در سرور وب شما فعال شود. به زودی ، ما خواهیم دید که چگونه سرور وب شما GZIP را فعال کرده است یا خیر.

## فشرده سازی GZIP چگونه کار می کند؟ {#work}

GZIP ، محبوب ترین روش فشرده سازی ، توسط سرورهای وب و مرورگرها برای فشرده سازی و فشرده سازی محتوا در هنگام انتقال از طریق اینترنت استفاده می شود. این ماده بیشتر در پرونده های کد و متنی استفاده می شود ، GZIP می تواند اندازه پرونده های JavaScript ، CSS و HTML را تا 90 ٪ کاهش دهد. به طور پیش فرض ، فشرده سازی GZIP تصاویر یا فیلم ها را فشرده نمی کند. برای این کار ، باید تصاویر را برای وب در سایت وردپرس خود بهینه کنید. به همین دلیل است که اکثر ابزارهای تست سرعت وب سایت مانند Google Pagespeed Insights بسیار توصیه می کنند که فشرده سازی GZIP را فعال کنید.
هنگامی که یک سرور وب درخواستی برای صفحه وب دریافت می کند ، Weberver هدر درخواست را بررسی می کند تا بررسی کند که آیا مرورگر از GZIP پشتیبانی می کند یا خیر. در این صورت ، سرور قبل از استفاده از GZIP ، نشانه گذاری صفحه را ایجاد می کند. GZIP نشانه HTML را به داده های فشرده تبدیل می کند که سپس به کاربر نهایی تحویل داده می شود. هنگامی که کاربر نهایی داده های فشرده شده را دریافت می کند ، مرورگر آنها آن را فشرده می کند.

## **چگونه می توان تأیید کرد که آیا فشرده سازی GZIP فعال است؟** {#verify}

میزبان وب شما ممکن است به طور پیش فرض فشرده سازی را در وردپرس فعال کند. با این حال ، این همیشه اینگونه نیست. می توانید تعیین کنید که آیا در حال حاضر فشرده سازی GZIP را با استفاده از Devtools Chrome فعال کرده اید یا خیر.
سایت خود را در یک مرورگر Chrome باز کنید ، سپس بر روی هر نقطه در صفحه کلیک راست کرده و **بازرسی**را انتخاب کنید تا**ابزارهای توسعه دهنده** را باز کنید.
در مرحله بعد ، به برگه **شبکه**بروید و از بخش "Name" روی URL اصلی وب سایت کلیک کنید. برگه****** را انتخاب کنید ، و سپس به پایین بروید تا بخش های پاسخ****را پیدا کنید:

{{< figure align=center src="images/gzip-determine.gif" alt="رمزگذاری محتوا را تأیید کنید">}}

در آنجا ، خواهید دید که آیا فشرده سازی GZIP فعال است یا خیر.

## فشرده سازی GZIP را در وردپرس فعال کنید {#enable}

اگر مشخص کرده اید که **فشرده سازی وردپرس GZIP هنوز فعال نشده است** ، روش های مختلفی وجود دارد که می توانید برای اجرای آن استفاده کنید. ساده ترین راه استفاده از برخی از افزونه های وردپرس مانند [WP Rocket][6] ، [WP Super Cache][7] یا [W3 Total Cache][8] است. با این حال ، شما می توانید این کار را به صورت دستی در سطح سرور یا توسط پرونده .htaccess یا با به روزرسانی پیکربندی NGINX انجام دهید.

### با ویرایش پرونده .htaccess
یکی از متداول ترین روش های فعال کردن فشرده سازی GZIP وردپرس ، ویرایش **پرونده _.htaccess_ شما** است. با این حال ، این شامل خطر شکستن چیزی است. این یک فایل سرور حساس است و یک حرکت اشتباه می تواند مشکلات زیادی ایجاد کند.
برای کاهش خطر ، قبل از ایجاد هرگونه تغییر ، حتماً یک نسخه از پرونده اصلی **را ذخیره کنید. پرونده _.htaccess_ باید در پوشه** root وب سایت شما باشد**. پس از باز کردن _.htaccess_ ، کد زیر را در زیر بخش های مشخص شده توسط برچسب های "## stear wordpress" و## WordPress 'اضافه کنید
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
** پرونده را ذخیره کرده و آن را در سرور سایت خود بارگذاری کنید. پس از اتمام کار ، بررسی کنید که آیا GZIP با استفاده از devtools Chrome همانطور که در بالا توضیح داده شده فعال است یا خیر.

## فشرده سازی GZIP را در nginx فعال کنید
برای **فعال کردن فشرده سازی**، دستورالعمل **GZIP** را با پارامتر ON وارد کنید. **gzip** on ؛ به طور پیش فرض ،**nginx** پاسخ ها را فقط با متن نوع mime/html فشرده می کند. برای فشرده سازی پاسخ ها با سایر انواع MIME ، دستورالعمل GZIP_TYPES را درج کنید و انواع اضافی را ذکر کنید.
شما می توانید فشرده سازی GZIP را در وردپرس با **باز کردن پرونده _nginx.conf_** و اضافه کردن کد زیر فعال کنید:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## نتیجه {#conclusion}

این پایان این آموزش GZIP WordPress است. روش های زیادی برای بهینه سازی وب سایت شما برای سرعت و عملکرد وجود دارد. در این آموزش GZIP WordPress ، ما آنچه را که فشرده سازی GZIP ، اهمیت فشرده سازی GZIP و مراحل نصب آن است ، طی کرده ایم. علاوه بر این ، بسیاری از پیوندهای مرتبط در بخش "کاوش" در زیر ذکر شده است.
سرانجام ، [Containerize.com][9] در حال نوشتن مقالاتی در مورد محصولات منبع باز بیشتر است. بنابراین ، لطفاً برای اخبار و به روزرسانی های منظم با گروه [وبلاگ نویسی][10] در تماس باشید.

## کاوش کنید
  * [ماتومو][11]
  * [قابل قبول][12]
  * [وردپرس][13]
  * [جکیل][14]
  * [چگونه می توان وردپرس را با آهنگسازی docker dockerize کرد][15]
  * [چگونه ابزارهای تجزیه و تحلیل تجاری رایگان به تجارت شما کمک می کنند][16]
  * [5 ابزار برتر اطلاعات کسب و کار منبع باز 2021][17]
  * [نحوه نصب افزونه در وردپرس | انجمن وانیل][18]
  * [هدایت خود را با ادغام رایگان Civicrm WordPress][19]



[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
