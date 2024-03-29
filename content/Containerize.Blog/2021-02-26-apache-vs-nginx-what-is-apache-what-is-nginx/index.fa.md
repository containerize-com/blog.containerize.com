---
title: "Apache vs nginx | آپاچی چیست؟ | nginx چیست؟" 
seoTitle: "Apache vs nginx | آپاچی چیست؟ | nginx چیست؟" 
description: "این مقاله در مورد مقایسه Apache vs Nginx است. هر دو سرور وب منبع باز ، قابل تنظیم و بیش از نیمی از ترافیک اینترنت جهان هستند." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache از یک رویکرد فرآیند محور استفاده می کند و NGINX برای پردازش درخواست های کاربر از رویکرد رویداد محور استفاده می کند. بیایید تفاوت بین Apache و Nginx را بررسی کنیم." 
url: /fa/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache از یک رویکرد فرآیند محور استفاده می کند و NGINX از رویکرد رویداد محور برای پردازش درخواست های کاربر استفاده می کند. بیایید تفاوت بین Apache و Nginx را بررسی کنیم.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## بررسی اجمالی
اگرچه Apache و Nginx دارای بسیاری از خصوصیات هستند ، اما نباید کاملاً قابل تعویض در نظر گرفته شود. هر دو سرور وب منبع باز با یکدیگر متفاوت هستند و باید با توجه به نیازهای برنامه های وب شما انتخاب شوند. در این مقاله ، ما در مورد مقایسه با جزئیات **Apache vs Nginx** بحث خواهیم کرد.
  * [آپاچی چیست؟][1]
  * [nginx چیست؟][2]
  * [مقایسه Apache vs nginx][3]
  * [nginx بهتر از آپاچی است][4]
  * [نتیجه گیری][5]
  * [کاوش][6]

## آپاچی چیست؟ {#whatisapache}

سرور وب آپاچی یکی از محبوب ترین سرورهای اینترنت است و بیش از 27 ٪ وب سایت ها را ارائه می دهد. Apache بیشتر به دلیل انعطاف پذیری ، قدرت و همچنین پشتیبانی گسترده و مستندات دقیق ، اولین انتخاب توسعه دهندگان است. این ماژول های قابل بارگیری پویا را پشتیبانی می کند که به توسعه دهندگان اجازه می دهد تا عملکرد خود را به راحتی گسترش دهند.

## nginx چیست؟ {#whatisnginx}

این مقاله در مورد مقایسه Apache vs Nginx است. هر دو سرور وب منبع باز ، قابل تنظیم و بیش از نیمی از ترافیک اینترنت جهان هستند.

## مقایسه Apache vs nginx {#apachevsnginx}

در این بخش ، اجازه دهید Apache و Nginx را بر اساس پشتیبانی ، مستندات ، نوع محتوا و ساختار پیکربندی مقایسه کنیم.

#### معماری
Apache چندین فرآیند سرور را برای به اشتراک گذاشتن بار کار در زمان بوت شروع می کند. یک فرآیند والدین و بسیاری از فرآیندهای کودک وجود دارد. هر فرآیند کودک مسئول ایجاد موضوعات سرور است که درخواست های ورودی را کنترل می کنند. Apache از ماژول چند پردازش برای اختصاص فرآیندهای کودک برای پذیرش درخواست ها و اتصال پورت های شبکه استفاده می کند. در مقابل ، Nginx دارای یک معماری رویداد محور است. NGINX یک فرآیند اصلی دارد که اتصال پورت و خواندن پیکربندی را کنترل می کند. فرآیند کارشناسی ارشد فرآیندهای فرعی را مطابق با یک مدل فرآیند قابل پیش بینی ایجاد می کند ، بر خلاف Apache که به سرور NGINX اجازه می دهد تا از منابع کارآمدتر استفاده کند. برای هر درخواست جدید ، NGINX یک رویداد را آغاز می کند و توصیف کننده پرونده ای را ایجاد می کند که فقط یک حافظه فرآیند کوچک را به خود اختصاص می دهد. این باعث می شود Nginx مقیاس پذیر تر از Apache باشد. آپاچی برای هر اتصال حافظه فرآیند بیشتری مصرف می کند.

#### ماژول ها
هر دو Apache و Nginx به منظور گسترش یا اصلاح عملکرد اصلی خود ، توانایی ماژول ها را دارند. اجرای ماژول ها برای هر دو Apache و Nginx متفاوت است و تفاوت اصلی بارگذاری ماژول ها است. در مورد آپاچی ، ماژول ها فقط در صورت نیاز به آنها به صورت پویا بارگیری می شوند. در مقابل ، ماژول های Nginx در هسته ادغام شده و حتی اگر به آنها احتیاج ندارید ، روی بوت بارگذاری می شوند. به این معنا ، Apache یک بستر قابل تنظیم تر برای توسعه دهندگان نسبت به NGINX است. این یک محدودیت برای کاربران در مورد انعطاف پذیری است اما از نظر مثبت ، این به معنای امنیت بهتر است زیرا ماژول های پویا می توانند نگرانی های امنیتی را ایجاد کنند.

#### پشتیبانی و مستندات
اگر ما آن را بر اساس پشتیبانی و اسناد و مدارک مقایسه کنیم ، زیرا این مدت طولانی در بازار بوده است. یک کتابخانه بزرگ از مستندات موجود برای سرور Apache وجود دارد. به طور مقایسه ای ، NGINX به دلیل عملکرد بالا و استفاده از منابع ، محبوبیت زیادی پیدا می کند و از این رو پشتیبانی و مستندات آن به سرعت در حال رشد است.

#### استاتیک در مقابل محتوای پویا
Apache به تنهایی به محتوای استاتیک و همچنین پویا خدمت می کند. از طرف دیگر ، Nginx توانایی ارائه محتوای پویا را ندارد ، بنابراین آن درخواست ها را به نرم افزار شخص ثالث منتقل می کند. سرورهای Apache با استفاده از روشهای مبتنی بر پرونده معمولی ، محتوای استاتیک را کنترل می کنند.

#### پرونده در مقابل تفسیر مبتنی بر URI
Apache Server توانایی تفسیر یک درخواست را به عنوان یک منبع فیزیکی در سیستم فایل یا به عنوان یک مکان URI دارد. از طرف دیگر ، NGINX برای کار به عنوان یک سرور وب و یک سرور پروکسی نیز طراحی شده است. با توجه به معماری مورد نیاز برای این دو نقش ، در درجه اول با URIS کار می کند و در صورت لزوم به سیستم پرونده ترجمه می شود. NGINX پیکربندی را برای دایرکتوری سیستم فایل مشخص نمی کند و در عوض ، خود URI را تجزیه می کند.

پیکربندی ####
Apache توانایی توسعه دهندگان را برای تنظیم پیکربندی در سطح دایرکتوری با استفاده از پرونده ای که به عنوان .htaccess گفته می شود ، فراهم می کند. اما در مورد NGINX ، چنین مکانیسمی برای تنظیم پیکربندی در سطح دایرکتوری وجود ندارد. Apache از نظر تنظیمات انعطاف پذیری بیشتری نسبت به NGINX فراهم می کند.

## آیا nginx بهتر از آپاچی است؟ {#nginx}

Nginx برای ارائه محتوای استاتیک سریعتر از Apache است. بنابراین اگر برنامه وب شما محتوای استاتیک زیادی را ارائه می دهد ، بله Nginx بهتر و سریعتر از Apache است. در مورد محتوای پویا ، هر دو سرور وب تقریباً عملکرد یکسانی را ارائه می دهند ، بنابراین هیچ برنده مشخصی در اینجا وجود ندارد. هر دو Apache و Nginx تقریباً در تمام سیستم عامل ها اجرا می شوند ، اما عملکرد Nginx در ویندوز نسبت به Apache به خوبی نیست. اگر سیستم عامل شما یک سیستم مانند یونیکس است و برنامه وب شما بسیار مهم است ، بله ، Nginx بهتر از Apache است.

## نتیجه {#conclusion}

هر دو Apache و Nginx به روش های خاص خود قادر هستند. ما در مورد مقایسه Apache vs nginx بحث کرده ایم ، آپاچی چیست ، با جزئیات nginx و تفاوت بین آپاچی و nginx چیست. انتخاب یکی از این دو سرور محبوب وب کاملاً به الزامات برنامه های وب شما بستگی دارد. انتخاب بستگی به انتظارات شما با عملکرد ، استفاده از منابع ، سرعت ، مقیاس پذیری و پشتیبانی از یک سرور وب دارد. هر دو مزایای خاص خود را دارند. هیچ سرور یک اندازه ای با اندازه وجود ندارد ، بنابراین از راه حلی استفاده کنید که مناسب اهداف و انتظارات شما باشد.
سرانجام ، [Containerize.com][7] به طور مداوم در حال نوشتن پست های وبلاگ در مورد محصولات و موضوعات منبع باز بیشتر است. بنابراین ، لطفاً برای به روزرسانی های منظم با گروه [سرورهای وب منبع باز][8] در تماس باشید. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][9] ، [LinkedIn][10] و [توییتر][11] دنبال کنید.

## کاوش کردن {#explore}

ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [5 پشته راه حل وب سرور منبع باز در سال 2021][12]
  * [Setup XAMPP و PHPMYADMIN به عنوان LocalHost در ویندوز][13]
  * [xampp | پشته راه حل سرور وب رایگان و منبع باز][14]
  * [nginx | سرور وب سبک و با کارایی بالا][15]
  * [آموزش تنظیم برای LEMP Stack در اوبونتو 18.04][16]



[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
