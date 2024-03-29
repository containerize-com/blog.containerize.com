---
title: "آموزش Jhipster | شروع با نرم افزار RAD" 
seoTitle: "آموزش Jhipster | شروع با نرم افزار RAD" 
description: "یک آموزش گام به گام Jhipster برای شروع مبتدیان. این مقاله را دنبال کنید تا اولین برنامه با نرم افزار منبع باز Jhipster RAD تنظیم شود." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "بیایید به یک ژنراتور کد منبع شیرجه بزنیم. این ویژگی های خارج از جعبه را برای تولید برنامه های پاسخگو مبتنی بر وب با API استراحت خوب ارائه می دهد." 
url: /fa/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## بیایید به یک ژنراتور کد منبع شیرجه بزنیم. این ویژگی های خارج از جعبه را برای تولید برنامه های پاسخگو مبتنی بر وب با API استراحت خوب ارائه می دهد.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="آموزش jhipster">}}


## بررسی اجمالی:
ما به تازگی [پست وبلاگ][1] را در مورد اهمیت [نرم افزار RAD][2] در زمان های فعلی منتشر کرده ایم. فناوری با سرعت بسیار بالایی در حال تحول است. نیازها و نیازهای تجاری روز به روز در حال تغییر است. مسابقه ای برای توسعه راه حل ها در مدت زمان کوتاه تر وجود دارد. از طرف دیگر ، هر شغلی می خواهد با راه اندازی محصول در اسرع وقت ، بازار را ضبط کند. بنابراین ، جامعه منبع باز نرم افزارهای بسیاری را توسعه داده است که مبتنی بر  **توسعه نرم افزار چابک**  است. این نرم افزار توسعه سریع برنامه کاربردی رایگان کاربران را با قابلیت توسعه سریع نمونه سازی اولیه تسهیل می کند. این امکان را به شما می دهد تا نسخه اولیه محصول خود را بسازید و راه اندازی کنید و از این رو ، می توانید با ورود به بازخورد کاربر نسخه های دیگری را تهیه کنید. علاوه بر این ، این نرم افزارها برای جذب هرگونه تغییر در هر مرحله از پروژه طراحی شده اند.
در همین حال ، تیم های توسعه نرم افزار فرایندهای توسعه خود را سرعت می بخشند و مطمئن می شوند که تحویل های قبلی را انجام می دهند. در حقیقت ، مقرون به صرفه ، صرفه جویی در وقت است و به توسعه دهندگان و کاربران رضایت می بخشد. توسعه سریع برنامه به اندازه کافی انعطاف پذیر است که نیازی به مهلت برنامه ریزی و سختگیرانه ندارید. شما آنچه را که مصرف کنندگان نهایی شما به آن احتیاج دارند ، می سازید. در این آموزش jhipster ، ما به چگونگی تنظیم [jhipster][3] خواهیم پرداخت و اولین برنامه خود را با آن با پوشش نکات زیر ایجاد خواهیم کرد:
  * [jhipster چیست و چگونه می توان آن را نصب کرد؟][4]
  * [چگونه می توان یک برنامه اصلی تولید و اجرا کرد؟][5]
  * [داشبورد مدیر برنامه تولید شده را کاوش کنید][6]
  * [نتیجه گیری][7]

## jhipster چیست و چگونه آن را نصب کنیم؟ {#install}

[jhipster][3] یک نرم افزار RAD منبع باز است که برای تولید برنامه های وب سازمانی استفاده می شود. این سازنده برنامه منبع باز یک چارچوب بوت بهار مبتنی بر جاوا را در سمت سرور و فن آوری های جلوی محبوب مانند Angular ، Vue.js و React.js ارائه می دهد. این ژنراتور کد منبع شامل معماری قوی میکروسرویس با مکانیسم احراز هویت کاربر مانند OAuth.20 ، JWTS و تأیید اعتبار جلسه HTTP است. علاوه بر این ، این یک نسخه آنلاین را فراهم می کند که در آن کاربران می توانند تمام ویژگی ها را کشف کنند. این ابزار نمونه سازی منبع باز****در JavaScript با کمی ورودی از TypeScript نوشته شده است. بنابراین ، مستندات جامع در مورد توسعه و استقرار در دسترس است. توسعه دهندگان می توانند کد منبع را در [GitHub][8] repo پیدا کنند. پشتیبانی کاملی برای اجرای تست ها با استفاده از چارچوب های تست محبوب مانند گاتلینگ و پیشرو وجود دارد. علاوه بر این ، آن را محکم ، ایمن ، متقابل پلتفرم و از ادغام های شخص ثالث پشتیبانی می کند.
در این آموزش  **Jhipster ،**  ما Jhipster را در مورد تنظیم و استفاده از آن کشف خواهیم کرد. [jhipster][3] رایگان و در بالای مدل توسعه سریع برنامه ساخته شده است. این یک اکوسیستم سازگار با توسعه دهنده را فراهم می کند که کاملاً امیدوار کننده است و ابزارهای قدرتمند توسعه برنامه وب سریع را ارائه می دهد.
بیایید ببینیم چگونه می توانیم این سازنده برنامه منبع باز را نصب کنیم. ابتدا پیش نیازهای زیر را نصب خواهیم کرد.
  * [جاوا 11 jdk][9]
  * [node.js 10.20.1+][10]
پس از اتمام نصب ، ترمینال را باز کرده و دستور زیر را اجرا کنید.
`NPM نصب -G ژنراتور -جیپستر`
این دستور ممکن است چند دقیقه طول بکشد و پس از اتمام موفقیت آمیز ، Jhipster روی دستگاه شما نصب می شود.
برای بررسی نصب ، می توانید دستور زیر را بررسی کنید.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="نصب Jhipster">}}


## چگونه می توان یک برنامه اصلی تولید و اجرا کرد؟ {#run}

در بخش این آموزش  **Jhipster**  ، ما یاد خواهیم گرفت که چگونه اولین برنامه خود را با استفاده از این نرم افزار منبع باز RAD تولید کنیم.
به پنجره ترمینال برگردید ، دستورات زیر را اجرا کنید:
`mkdir 1stappcd 1stapp/`
پس از ساخت دایرکتوری ، دستور زیر را که در زیر ذکر شد اجرا کنید:
`jhipster`
این دستور روند را آغاز می کند. به تمام سؤالات مربوط به تنظیمات مربوط به برنامه های کاربردی مانند فن آوری های انتهای جلو و عقب ، پایگاه داده ، چارچوب آزمایش و موارد دیگر پاسخ دهید ، همانطور که در تصویر زیر مشاهده می کنید.

{{< figure align=center src="images/qst-1024x474.png" alt="آموزش jhipster">}}

پس از پاسخ دادن به تمام سوالات ، این ژنراتور کد منبع پرونده های کد را در پوشه شما تولید می کند.
اکنون برنامه تولید شده را با دستور زیر اجرا کنید:
`./mvnw`
توجه: اگر شما Maven را به عنوان اتوماسیون ساخت برای پس زمینه انتخاب کرده اید ، این دستور کار خواهد کرد.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="آموزش jhipster">}}

دسترسی به برنامه خود به مرورگر در http: // localhost: 8080/.

## داشبورد مدیر برنامه تولید شده را کاوش کنید {#dashboard}

پس از برخورد به http: // localhost: 8080/در مرورگر خود ، صفحه زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="سازنده ی کد">}}

می توانید از اعتبار ذکر شده برای ورود به عنوان مدیر استفاده کنید. Jhipster دو نقش کاربر پیش فرض را ارائه می دهد. پس از ورود به سیستم موفق ، مقررات زیر را در تصویر نشان می دهید.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="نرم افزار RAD منبع باز">}}

Jhipster مدیریت کامل کاربر را فراهم می کند که در آن می توانید کاربران خود را همانطور که در تصویر زیر مشاهده می کنید ، مدیریت کنید.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="مدیریت کاربر Jhipster">}}

گزینه Health اطلاعاتی در مورد فضای دیسک و پایگاه داده خود به شما می دهد.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="آموزش jhipster">}}

یک سیستم ورود به سیستم کامل در داشبورد مدیر Jhipster وجود دارد.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="نرم افزار RAD منبع باز">}}

داشبورد مدیر این سازنده برنامه منبع باز همچنین نقاط پایانی عملکردهای داخلی و سفارشی را ارائه می دهد.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="منبع باز جیپستر">}}


## نتیجه {#con}

این پایان این آموزش Jhipster است. بسیاری از سیستم عامل های RAD منبع باز وجود دارد که  **توسعه برنامه فوری** را ارائه می دهد. یک جامعه بسیار پر جنب و جوش وجود دارد که همیشه زنده است تا به موضوعات و راه حل های آنها پاسخ دهد. روش RAD به دلیل عوامل زیادی به شهرت می رسد. در مرحله اول ، نیازی به درک کامل از الزامات نیست. ثانیا ، مصرف کننده نهایی در طول چرخه زندگی توسعه نرم افزار درگیر است. ثالثاً ، عامل خطر بسیار کمتر است زیرا همه ذینفعان در هواپیما هستند. با این حال ، نرم افزار RAD سازگار ، سازگار با توسعه دهنده و انعطاف پذیر با تغییرات است. این باعث صرفه جویی در وقت زیادی می شود زیرا ژنراتورهای کد در مدت زمان زیادی برای بازنویسی اسکریپت های تکراری صرفه جویی می کنند. این **[jhipster][3] آموزش**  مقاله بینش های مهم را برجسته کرد. این سبک وزن است و با چند دستور پوسته ساده تنظیم می شود.
اگر به طور جدی به دنبال یک پلت فرم توسعه برنامه سریع منبع باز هستید ، امروز این سازنده برنامه منبع باز را نصب کنید. سرانجام ، [Containerize.com][11] همه تنظیم شده است که پایه آموزش خود را با برخی از آموزش های جالب تر تقویت کند. لطفاً برای به روزرسانی های منظم با این [توسعه سریع برنامه][2] در ارتباط باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [سکوی کوبا][12]
  * [QuickApp][13]
  * [jhipster][3]
  * [li3][14]
  * [آپاچی داعش][15]
  * [5 نرم افزار توسعه سریع کاربردی سریع در سال 2021][16]
  * [نرم افزار توسعه سریع برنامه برای تجارت | rad][17]
  * [چیزهایی که باید قبل از انتخاب نرم افزار منبع باز در سال 2021 بررسی کنید][18]



 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
