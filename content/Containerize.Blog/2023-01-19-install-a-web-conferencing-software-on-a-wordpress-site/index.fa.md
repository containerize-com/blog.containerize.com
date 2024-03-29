---
title: "یک نرم افزار کنفرانس وب را در یک سایت وردپرس نصب کنید" 
seoTitle: "یک نرم افزار کنفرانس وب را در یک سایت وردپرس نصب کنید" 
description: "این راهنما را دنبال کنید تا در مورد یک نرم افزار کنفرانس وب منبع باز BigBlueButton بیاموزید. بیایید نحوه نصب افزونه BigBlueButton را در وردپرس بررسی کنیم." 
date: Thu, 19 Jan 2023 20:06:03 +0000
author: muhammadmustafa
summary: "افزونه BigBlueButton را در وب سایت تجاری مبتنی بر وردپرس خود نصب کنید تا جلسات مجازی برگزار شود. این منبع رایگان ، منبع باز است و طیف گسترده ای از ویژگی ها را ارائه می دهد." 
url: /fa/install-a-web-conferencing-software-on-a-wordpress-site/
categories: ['Blogging', 'Video Conferencing Software']
---

## افزونه BigBlueButton را در وب سایت تجاری مبتنی بر وردپرس خود نصب کنید تا جلسات مجازی برگزار شود. این منبع رایگان ، منبع باز است و طیف گسترده ای از ویژگی ها را ارائه می دهد.

{{< figure align=center src="images/Install-a-Web-Conferencing-Software-on-a-WordPress-Site.png" alt="نرم افزار کنفرانس وب در یک سایت وردپرس">}}


## بررسی اجمالی
ما در اینجا با یک پست وبلاگ دیگر در گروه [نرم افزار کنفرانس ویدیویی منبع باز] قرار داریم [1]. روشهای خاصی از ارتباطات از راه دور مانند ایمیل و تماس های ویدیویی وجود دارد. با این حال ، جلسات چهره به چهره همیشه مؤثرتر و راحت تر از ایمیل یا چت است. در این دنیای سریع در حال رشد ، مردم واقعاً به زمان و مکان اهمیتی نمی دهند. اکنون ، سازمان های کوچک/عظیم شروع به استفاده از ابزارهای همکاری از راه دور  **برای اجرای کنفرانس های مجازی کرده اند. اگرچه بسیاری از سیستم عامل های جلسات وب وجود دارند که ابزارهای قدرتمندی برای اجرای کنفرانس های ویدیویی ارائه می دهند ، اما همه آنها پرداخت می شوند. بنابراین ، با سنجش این نیاز ، جامعه منبع باز برخی از راه حل های سطح سازمانی را برای** خدمات کنفرانس وب **تدوین کرده است. علاوه بر این ، این سیستم عامل های رایگان با یک بازار عظیم روبرو هستند و توسط یک جامعه توسعه دهندگان پر جنب و جوش پشتیبانی می شوند. در این پست وبلاگ ، ما یاد خواهیم گرفت که چگونه نرم افزار کنفرانس وب**  را در یک سایت [وردپرس][2] نصب کنیم.
نکات زیر در این مقاله پوشش داده می شود:
* [  **bigbluebutton چیست؟**  ][3]
* [  **یک مقدمه مختصر به وردپرس**  ][4]
 **[چگونه می توان افزونه BigBlueButton را در وردپرس نصب کرد؟][5]** 

##  **bigbluebutton چیست؟**  {#What-is-BigBlueButton}

[BigBlueButton][6] یک نرم افزار همکاری ویدیویی رایگان منبع باز  **با پشته عظیمی از ویژگی های سطح شرکت است. این نرم افزار منبع باز بسیار گسترده است و با بسیاری از برنامه های محبوب مانند وردپرس ، [Redmine][7] ، [Schoology][8] ، [دروپال][9] و بوم ادغام می کند. علاوه بر این ، یک تخته سفید مشترک ، ارسال پیام های عمومی/خصوصی ، HD Audio ، HD Electronic ، به همراه ابزارهای ارائه غنی را ارائه می دهد. علاوه بر این ،**  BigBlueButton**HTML5 پشتیبانی می شود و در همه مرورگرهای محبوب وب خوب کار می کند.
علاوه بر این ، این نرم افزار کنفرانس وب****دارای یک جامعه توسعه دهنده بزرگ و زنده است. آمار بسیار خوبی در مورد [Github repo][10] با 7.8K ستاره و چنگال 5.8K وجود دارد. BigBlueButton در JavaScript همراه با ورودی از دیگر زبانهای دیگر مانند جاوا و روبی نوشته شده است. در حقیقت ، توسعه دهندگان می توانند مستندات جامع در مورد توسعه ، استقرار و استفاده پیدا کنند. بنابراین ، می توانید این نرم افزار خود میزبان را به راحتی بر روی یک سرور محلی یا ابر تنظیم کنید.

##  **یک مقدمه مختصر به وردپرس**  {#A-brief-intro-to-WordPress}

[وردپرس][2] یکی از بهترین سیستم عامل های وبلاگ نویسی منبع باز**در دسته نرم افزار وب سایت است. این نرم افزار منبع باز کاربر پسند است حتی یک توسعه دهنده وب مبتدی می تواند ساختمان سایت را انجام دهد و آن را راه اندازی کند. علاوه بر این ، وردپرس بسیار قابل تنظیم است و می توانید آن را مطابق با نیازهای تجاری خود سفارشی کنید. مهمتر از همه ، این یک [بازار][11] عظیم است که می توانید تعدادی از افزونه ها را پیدا کنید.
این نرم افزار وبلاگ نویسی**با قابلیت های خود میزبانی همراه است و پشتیبانی کاملی برای چندین زبان در دسترس است. علاوه بر این ، آمار بسیار خوبی در repo [github][12] وجود دارد و می توانید کد منبع را بارگیری کرده و به راحتی تنظیم کنید. علاوه بر این ، می توانید یک افزونه را برای هرگونه عملکردی در وب سایت وردپرس خود نصب کنید. در واقع ، شما ممکن است افزونه هایی را برای سایت های متعلق به هر گروه پیدا کنید. این ماده به طور عمده در PHP نوشته شده است و می توانید دستورالعمل های کاملی در مورد توسعه ، استقرار و استفاده پیدا کنید.

##  **چگونه افزونه BigBlueButton را در وردپرس نصب کنیم؟**  {#How-to-install-BigBlueButton-plugin-in-WordPress}

در این بخش نحوه نصب  **نصب نرم افزار کنفرانس وب در یک سایت وردپرس**  نشان داده شده است. علاوه بر این ، ما همچنین افزونه BigBlueButton را کمی بیشتر کشف خواهیم کرد. قبل از حرکت بیشتر ، حتماً وردپرس را روی دستگاه خود نصب کرده اید و یک وب سایت تجاری و در حال اجرا دارید.
لطفاً در صورت عدم نصب وردپرس ، به این [لینک][2] مراجعه کنید ، می توانید دستورالعمل های نصب کامل را پیدا کنید.
بیایید روند نصب BigBlueButton [افزونه][13] را در وردپرس شروع کنیم.
به داشبورد وردپرس بروید و گزینه "افزونه ها" را باز کرده و "اضافه کردن جدید" را فشار دهید. BigBlueButton را در نوار جستجو بنویسید ، و افزونه ای را پیدا خواهید کرد که مکان 1 را در جستجو همانطور که در تصویر زیر نشان داده شده است نشان می دهد:
{{_LINE_29_}}
اکنون برای نصب این نرم افزار  **کنفرانس وب**  به دکمه "Instal Now" ضربه بزنید و برای فعال کردن افزونه "فعال" بزنید. پس از زنده بودن فعال شدن ، می توانید از این نرم افزار کنفرانس ویدیویی استفاده کنید. در حال حرکت به جلو ، می توانید اضافه جدیدی از منو "اتاق" را در صفحه سمت چپ پنجره مشاهده کنید ، همانطور که در تصویر زیر نشان داده شده است.

{{< figure align=center src="images/bigbluebutton-plugin-1024x516.png" alt="افزونه BigBlueButton">}}

بنابراین اکنون ، می توانید با ایجاد و انتشار اتاق هایی که می توانید جلسات ویدیویی را با همسران خود برگزار کنید ، اتاق های جلسات ایجاد کنید. علاوه بر این ، می توانید با تغییر رنگ پس زمینه و بارگذاری آرم برند ، ظاهر و احساس اتاق ها را سفارشی کنید. در تصویر زیر می بینید که ما یک جلسه ایجاد کرده ایم و رابط کاربری اتاق جلسه با ویژگی هایی مانند یک گپ زنده و یادداشت های مشترک بسیار غنی است.

{{< figure align=center src="images/bigbluebutton-plugin-ui-1024x532.png" alt="افزونه bigbluebutton ui">}}


## بسته بندی
این ما را به پایان این پست وبلاگ می رساند. امیدواریم که شما یاد گرفته باشید که چگونه نرم افزار کنفرانس وب  **را در یک سایت وردپرس نصب کنید. علاوه بر این ، ما همچنین روند ایجاد اتاق جلسات را پشت سر گذاشته ایم.** افزونه BigBlueButton **هنگام برگزاری جلسات مجازی چهره به چهره ، چیزهای زیادی را ارائه می دهد. از آنجا که این نرم افزار کنفرانس وب** **منبع باز است ، بنابراین می توانید آن را سفارشی کنید تا نیازهای تجاری خود را برآورده کنید. علاوه بر این ، ممکن است مقالات واقعاً جالبی را در بخش "ببینید" نیز پیدا کنید.
سرانجام ، [Containerize.com][14] به طور مداوم در حال نوشتن پست های وبلاگ در مورد محصولات و موضوعات منبع باز بیشتر است. بنابراین ، لطفاً برای به روزرسانی های منظم با [[نرم افزار کنفرانس ویدیویی][1] و [سیستم عامل های وبلاگ نویسی][15][16] در تماس باشید. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [فیس بوک][17] ، [LinkedIn][18] و [توییتر][19] دنبال کنید.

## سوالی بپرسید
شما می توانید در مورد سؤالات یا سؤالات خود در مورد [انجمن][20] به ما اطلاع دهید.

## سؤالات متداول
 **چگونه می توانم یک تماس ویدیویی به سایت وردپرس خود اضافه کنم؟** 
می توانید با استفاده از این BigBlueButton [پلاگین][13] ، نرم افزار کنفرانس وب را به سایت [وردپرس][2] اضافه کنید. این نرم افزار منبع باز است و ویژگی های بسیاری را برای برقراری تماس های ویدیویی چهره به چهره ارائه می دهد.
 **چگونه می توانم BigBlueButton را به وردپرس اضافه کنم؟** 
برای یادگیری نصب و تنظیم فرآیند در [WordPress][2] این [Link][5] را دنبال کنید.

## همچنین ببینید
  * [جیتسی با افزونه وردپرس چیست و چگونه آن را نصب کنیم؟][21]
  * [5 نرم افزار کنفرانس ویدیویی منبع باز 2021][22]
  * [راهنمای گام به گام برای تنظیم منبع آزاد Jitsi Meet][23]



 [1]: https://products.containerize.com/video-conferencing/
 [2]: https://products.containerize.com/blogging/wordpress/
 [3]: #What-is-BigBlueButton
 [4]: #A-brief-intro-to-WordPress
 [5]: #How-to-install-BigBlueButton-plugin-in-WordPress
 [6]: https://products.containerize.com/video-conferencing/bigbluebutton/
 [7]: https://products.containerize.com/project-management/redmine/
 [8]: https://app.schoology.com/login
 [9]: https://products.containerize.com/content-management/drupal/
 [10]: https://github.com/bigbluebutton/bigbluebutton
 [11]: https://wordpress.org/plugins/
 [12]: https://github.com/WordPress/WordPress
 [13]: https://wordpress.org/plugins/video-conferencing-with-bbb/
 [14]: https://www.containerize.com/
 [15]: https://products.containerize.com/blogging/
 [16]: https://products.containerize.com/social-network-platforms/
 [17]: https://web.facebook.com/containerize
 [18]: https://www.linkedin.com/company/containerize/
 [19]: https://twitter.com/containerize_co
 [20]: https://forum.containerize.com/
 [21]: https://blog.containerize.com/blogging/what-is-jitsi-meet-wordpress-plugin-and-how-to-install-it/
 [22]: https://blog.containerize.com/video-conferencing-software/top-5-open-source-video-conferencing-software-of-2021/
 [23]: https://blog.containerize.com/video-conferencing-software/how-to-set-up-open-source-jitsi-meet/
