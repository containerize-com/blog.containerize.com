---
title: "چگونه می توان با استفاده از منبع باز GDEVELL یک بازی را در ابتدا انجام داد" 
seoTitle: "چگونه می توان با استفاده از منبع باز GDEVELL یک بازی را در ابتدا انجام داد" 
description: "چگونه می توان بازی را از ابتدا انجام داد؟ GDevelop یک UI منطقی و پر از بسیاری از مؤلفه ها و رفتارها برای ساخت بازی های ویدیویی برای وب ، دسک تاپ ، iOS و Android ارائه می دهد." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "این آموزش توسعه بازی اصول اولیه ساخت یک بازی مسابقه کامیون را توضیح می دهد. می توانید آن را نصب کنید یا از برنامه آنلاین آن برای ساختن یک بازی ویدیویی هیجان انگیز استفاده کنید." 
url: /fa/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## این آموزش توسعه بازی اصول اولیه ساخت یک بازی مسابقه کامیون را توضیح می دهد. می توانید آن را نصب کنید یا از برنامه آنلاین آن برای ساختن یک بازی ویدیویی هیجان انگیز استفاده کنید.

{{< figure align=center src="images/gdevelop-game.png" alt="چگونه می توان یک بازی را در ابتدا انجام داد">}}


## **بررسی اجمالی** 
در گذشته نزدیک ، ما بسیاری از پست های وبلاگ را در مورد نرم افزار توسعه بازی بدون منبع آزاد مانند [5 نرم افزار برتر توسعه بازی رایگان در سال 2021][1] منتشر کردیم ، [شروع به کار با توسعه بازی با استفاده از ابرقدرت ها][2] ، [بازی آموزش توسعه | حرکت پخش کننده در GDevelop][3] ، [آموزش توسعه بازی HTML5 برای برنامه نویسان بازی های ویدیویی][4] ، [چگونه صنعت بازی جهانی با استفاده از نرم افزار منبع باز][5] و [آموزش GDevelop برای شروع توسعه بازی]][6 ]. آخرین پیشرفت در عصر اینترنت روندهای جدیدی را در صنعت بازی های ویدیویی به ارمغان آورده است. یک پلت فرم ساخت و ساز بازی منبع باز یک اکوسیستم کامل برای توسعه بازی ها به طور مستقل فراهم می کند و توسعه دهندگان سپس با توجه به نیازهای آن ، آن پلتفرم را بالغ می کنند. در این پست وبلاگ ، ما می آموزیم که چگونه با پوشش دادن نکات زیر ، با استفاده از [GDevelop][7] بازی را در ابتدا انجام دهیم.
* **[چرا باید از GDEVELL استفاده کنیم؟][8]** 
* **[تنظیم پروژه][9]** 
* **[چگونه می توان زمینه و شی را تهیه کرد؟][10]** 
* **[اضافه کردن behviors به ​​شی][11]** 
* **[اجرای بازی][12]** 
* **[نتیجه گیری][13]** 

## چرا باید از GDEVELL استفاده کنیم؟ {#why}

[GDevelop][7] یک نرم افزار بازی منبع باز است. این قابلیت از خود میزبان است و از نظر طبیعت متقاطع است. می توانید آن را بارگیری و نصب کنید ، یا می توانید از نسخه آنلاین آن برای بازی با آن استفاده کنید. کاربران برای استفاده از این سازنده بازی نیازی به کسب دانش برنامه نویسی ندارند. مهمتر از همه ، این یک رابط کاربری درگ و رها کردن را ارائه می دهد که با رفتارها ، الگوهای و اشیاء از پیش ساخته شده ارائه می شود. این نرم افزار توسعه بازی رایگان بسیار قابل تنظیم است و با کتابخانه های شخص ثالث ادغام می کند. برای کسب اطلاعات بیشتر در مورد این ابزار رایگان ، می توانید این لینک را بررسی کنید تا در مورد ویژگی های آن و روند تنظیم بیشتر بدانید.

## راه اندازی پروژه {#setting}

در این بخش ، ما پروژه خود را برای ساختن یک بازی مسابقه کامیون با برخی از ویژگی های اساسی ایجاد خواهیم کرد. اگر می خواهید دستگاه محلی خود را تنظیم کنید ، این [Link][6] را دنبال کنید یا می توانید با مراجعه به این [پیوند][14] از نسخه آنلاین استفاده کنید.
بنابراین ، هنگامی که روی "ایجاد یک پروژه جدید" کلیک کنید ، صفحه زیر را پیدا خواهید کرد و سپس روی "بازی خالی" کلیک کنید.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="چگونه می توان یک بازی را در ابتدا انجام داد">}}

می توانید نوار منو را در سمت چپ پنجره مشاهده کنید. اکنون ، روی "صحنه ها" کلیک کنید و سپس بر روی دکمه "کلیک کنید تا یک صحنه" کلیک کنید. پس از آن ، شما روی صفحه بازی قرار خواهید گرفت که می توانید اشیاء بازی ، پیش زمینه ها و رفتارهای بازی را ایجاد کنید. با حرکت به جلو ، روی "اضافه کردن یک شی جدید" که در پانل سمت راست قرار دارد کلیک کنید و پنجره زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="آموزش gdevelop">}}


## چگونه زمینه و شیء را تهیه کنیم؟ {#prepare}

در نوار جستجو ، به دنبال شیء کامیون باشید و دو بار روی آن کلیک کنید و پس از رسیدن به نتایج ، "اضافه کردن به بازی" را فشار دهید. این مرحله را برای دو چرخ و یک شیء سکو تکرار کنید. اکنون ، روی شیء Greenfloor کلیک راست کرده و ویرایش کنید.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="آموزش توسعه بازی">}}


## اضافه کردن behviors به ​​جسم {#add}

در مرحله بعد ، Greenfloor را به صفحه بازی بکشید و رها کنید و مطابق میل خود ارتفاع و عرض آن را تنظیم کنید. شیء کامیون را بکشید و آن را روی صفحه بازی و سپس اشیاء چرخ رها کنید. حرکت به جلو ، کلیک راست بر روی بدنه کامیون و ضربه زدن به "ویرایش Object Truckbody" ، روی رفتارها کلیک کنید ، روی "اضافه کردن یک رفتار به شی" کلیک کنید و روی "فیزیک موتور 2.0" کلیک کنید و پنجره زیر را مشاهده خواهید کرد.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="چگونه می توان یک بازی را در ابتدا انجام داد">}}

در این پنجره می توانید تنظیمات مانند چگالی ، عرض و ارتفاع را تغییر دهید. اکنون ، همان فرآیند را برای شیء GreenFloor تکرار کنید اما نوع "استاتیک" را نگه دارید و دکمه "Apply" را بزنید. مجدداً ، شیء Truckbody را ویرایش کنید ، به "ویرایش نقاط" ضربه بزنید ، به "EDD Points" ضربه بزنید و سپس نام چرخ جلوی خود را وارد کنید (یعنی FW در این آموزش). یک نقطه روی جسم ایجاد می شود ، فقط آن نقطه را به محل چرخ بکشید. این روند را برای چرخ عقب نیز تکرار کنید و همانطور که در تصویر زیر نشان داده شده است ، x و y را به 0 بسازید.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="آموزش توسعه بازی">}}

پس از آن ، هر دو شیء چرخ را ویرایش کرده و نقاط آنها را تنظیم کنید. بعلاوه ، دوباره به گزینه ویرایش چرخ ها بروید ، به برگه "رفتار" ضربه بزنید ، "فیزیک موتور 2.0" را انتخاب کنید و مقادیر نوع ، شعاع و چگالی را همانطور که در تصویر زیر نشان داده شده است تنظیم کنید.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="نرم افزار طراحی بازی">}}

اکنون ، روی برگه "صحنه جدید" کلیک کنید ، به "اضافه کردن رویدادهای جدید" ضربه بزنید ، به "اضافه کردن شرایط" ضربه بزنید ، "در ابتدای صحنه" را جستجو کنید و به "OK" ضربه بزنید. سپس به جستجوی "Add Action" برای "موقعیت Camera Center X" بروید و تنظیمات زیر را تنظیم کنید.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="نرم افزار توسعه بازی رایگان">}}

اکنون ، عمل را کپی کنید اما اطمینان حاصل کنید که عمل کپی شده روی "Y" تنظیم شده است. یک عمل دیگر به نام "تغییر دوربین بزرگنمایی" را اضافه کنید ، آن را روی 0.4 تنظیم کنید و این عمل را به بالا بکشید. یک عمل دیگر اضافه کنید ، "Add A Costrate Wheel" را جستجو کنید و تنظیمات را برای هر دو چرخ مطابق شکل زیر تنظیم کنید.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="راهنمای توسعه بازی">}}

پس از آن ، یک شرط جدید اضافه کنید ، "کلید را فشار داده شده" جستجو کنید و آن را به سمت چپ تنظیم کنید. اکنون ، اکشن را اضافه کنید ، چرخ اول را انتخاب کنید ، به دنبال خطی Linear Velocity X "، علامت اصلاح برای" تفریق "و مقدار 50 را تنظیم کنید. این مرحله را برای کلید مناسب تکرار کنید اما مطمئن شوید که علامت اصلاح در افزودن همانطور که در زیر نشان داده شده است.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="آموزش توسعه بازی">}}


## اجرای بازی {#run}

پس از اتمام تمام مراحل. وقت آن است که با فشار دادن دکمه قرار داده شده در گوشه سمت چپ بالا ، بازی را اجرا کنیم. این بازی را به پنجره جدید راه اندازی می کند.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="چگونه می توان یک بازی را در ابتدا انجام داد">}}


## نتیجه {#نتیجه}

این پایان این پست وبلاگ است و مطمئناً می دانید که چگونه می توانید یک بازی را در ابتدا انجام دهید. با این حال ، بسیاری از نرم افزار طراحی بازی رایگان****در بازار موجود است زیرا این صنعت در حال افزایش محبوبیت و تقاضا است. دلایل مختلفی در پشت آن وجود دارد مانند نرم افزار منبع باز مقیاس پذیر ، قابل تنظیم ، مقرون به صرفه و آسان برای نگهداری است. علاوه بر این ، تقاضا برای سازندگان بازی های متقابل پلت فرم در حال افزایش است زیرا توسعه دهندگان برای ساختن یک بازی که در تمام سیستم عامل های محبوب مانند Android ، iOS ، Web و Desktop اجرا می شود ، راحت می شوند. از طرف دیگر ، ظهور همه گیر زندگی مردم را تغییر داده است و اکنون آنها ترجیح می دهند در داخل خانه بمانند. بنابراین ، مردم تمایل دارند در اوقات فراغت خود بازی های ویدیویی انجام دهند.
سرانجام ، [Containerize.com][15] همه تنظیم شده است که پایه آموزش خود را با برخی از آموزش های جالب تر توسعه بازی**تقویت کند. لطفاً برای به روزرسانی های منظم با این [نرم افزار توسعه بازی][16] در ارتباط باشید.

## کاوش کنید
* **[gdevelop][7]** 
* **[GODOT][17]** 
* **[ابرقدرت ها][18]** 
* **[خالق Cocos][19]** 
* **[panda3d][20]** 
* **[playcanvas][21]** 
* **[شروع با توسعه بازی با استفاده از ابرقدرت ها][2]** 
**[آموزش توسعه بازی | حرکت بازیکن در gdevelop][3]**
* **[آموزش توسعه بازی HTML5 برای برنامه نویسان بازی های ویدیویی][4]** 
**[چگونه صنعت بازی جهانی از نرم افزار منبع باز بهره می برد][5]**
* **[آموزش gdevelop برای مبتدیان برای شروع توسعه بازی][6]** 
* [ **5 نرم افزار برتر توسعه بازی رایگان در سال 2021** ][1]



[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
