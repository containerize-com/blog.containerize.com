---
title: "آموزش Synfig | یک نرم افزار انیمیشن منبع باز 2D" 
seoTitle: "آموزش Synfig | یک نرم افزار انیمیشن منبع باز 2D" 
description: "ایجاد انیمیشن های 2D با Synfig یک فرآیند رایگان ، یکپارچه و سریع است. در این راهنما تمام اطلاعات مورد نیاز برای شروع کار را پیدا خواهید کرد." 
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: "ایجاد انیمیشن های 2D با Synfig یک فرآیند رایگان ، یکپارچه و سریع است. در این راهنما تمام اطلاعات مورد نیاز برای شروع کار را پیدا خواهید کرد." 
url: /fa/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']
---

## ایجاد انیمیشن های 2D با Synfig یک فرآیند رایگان ، یکپارچه و سریع است. در این راهنما تمام اطلاعات مورد نیاز برای شروع کار را پیدا خواهید کرد.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

  * [synfig چیست؟][1]
  * [چگونه synfig را نصب کنیم؟][2]
  * [نمای کلی رابط کاربردی][3]
  * [چگونه می توان یک انیمیشن اساسی با Synfig ایجاد کرد؟][4]
  * [نتیجه گیری][5]

## Synfig چیست؟ {#what}

Synfig یکی از بهترین نرم افزارهای انیمیشن 2D است که برای هنرمندان انفرادی یا تیم های کوچک برای مدیریت گردش کار و پروژه های انیمیشن خود طراحی شده است. به عنوان یک نرم افزار انیمیشن منبع باز ، Synfig از یک سیستم انیمیشن "Tweenless" استفاده می کند که نه تنها زمان لازم برای پردازش یک انیمیشن را کاهش می دهد ، بلکه به انیماتورها امکان اضافه کردن قاب نقاشی را نیز می دهد.
وقتی صحبت از SynFig می شود ، واقعاً یک نرم افزار انیمیشن سریع و پردازش سریع است که می تواند علاوه بر این یک خط لوله تصویربرداری از هر هنرمندی باشد که به صورت انفرادی یا در یک تیم کوچک کار می کند. علاوه بر این ، جامعه Synfig مکانی فعال برای یافتن نه تنها آموزش های مربوط به استفاده از برنامه نرم افزار است ، بلکه از منابع برای کمک به شما در یافتن راه حل ها در صورت کار در یک راه راه.
به راحتی می توانید از SynFig در چندین سیستم عامل از جمله ویندوز ، سیستم عامل Mac و Linux استفاده کنید. لطفاً به خاطر داشته باشید که هنگام استفاده از Synfig ، سیستم شما باید داشته باشد:
  * حداقل 2 گیگابایت رم یا بیشتر
  * یک پردازنده هسته دوگانه در 2 گیگاهرتز یا بیشتر
Synfig برای انیمیشن کردن بسیاری از پروژه های محبوب از جمله MoreVNA: Demo Project ، Deadline by Morevna ، کارآگاه قطبی توسط Cyan Los و بسیاری از پروژه های تجاری دیگر مورد استفاده قرار گرفته است. این نشان می دهد که دامنه Synyfig را نشان می دهد زیرا می تواند برای پروژه های تجاری و شخصی نیز استفاده شود. این که آیا شما در دنیای انیمیشن تازه وارد هستید یا در حرفه خود پیشرفت کرده اید ، Synfig می تواند نسخه خوبی را برای مهارت شما ایجاد کند و به شما در ایجاد یک انیمیشن های شگفت انگیز 2D کمک کند. اگر به دنبال کسب اطلاعات بیشتر در مورد سایر برنامه های نرم افزاری انیمیشن هستید ، می توانید سایر راهنماها و آموزش هایی را که ما برای شما ساخته ایم بررسی کنید.

## چگونه synfig را نصب کنیم؟ {#how-to-install}

به منظور نصب نرم افزار انیمیشن Synfig 2D بر روی یک دستگاه لینوکس ، می توانید مستقیماً فایل نصب را از صفحه اصلی اصلی Synfig بارگیری کنید. گزینه ای برای بارگیری پرونده تصویری 32 بیتی یا 64 بیتی دریافت خواهید کرد ، مطابق با سیستم خود را انتخاب کنید.
پس از بارگیری ، خط فرمان خود را باز کنید و دستورات زیر را تایپ کنید:
```
sudo apt-get update
```
```
sudo apt-get install synfigstudio
```
اکنون باید بتوانید به راحتی به استودیوی Synfig دسترسی پیدا کنید.

## نمای کلی رابط کاربردی {#application-interface}

همانطور که در بالا به آن اشاره کردیم ، Synfig Studio یک نرم افزار انیمیشن منبع باز است که به کاربران امکان می دهد انیمیشن های 2D بدون یکپارچه ، پردازش سریع ، بین المللی را ایجاد کنند. به منظور درک ابزارها و ویژگی ها ، در اینجا هنگام شروع استفاده از آن ، سریعاً از استودیوی Synfig آورده شده است.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

* **بوم:** بوم الگوی شطرنجی خاکستری در وسط است که می توانید انیمیشن خود را ترسیم کرده و جلوه ها ، لایه ها ، فریم ها و ویرایش ها را اعمال کنید. در اینجا بوم های احاطه شده توسط دکمه های سمت راست **قفل/باز کردن** کلید ، سوئیچ به **حالت انیمیشن ،** یک مثلث سیاه کوچک در گوشه سمت چپ فوقانی به نام**CATET** ، و جدول زمانی در صورتی که یک انیمیشن غیر صفر را تعریف کرده اید.
* **ابزارها:**  جعبه ابزار یکی از مهمترین مؤلفه های SYNFIG است که در آن تمام ابزارهایی را که برای دستکاری اشیاء لازم دارید پیدا خواهید کرد. از اندازه های قلم مو ، رنگ ها ، استفاده از شیب ، پاک کردن انیمیشن ها ، استفاده از متون و موارد دیگر ، تمام آنچه را که برای ایجاد انیمیشن ها ایجاد می کنید پیدا خواهید کرد و آنها را در پانل جعبه ابزار در سمت چپ بالا ویرایش می کنید.
* **پانل آهنگ زمان:**  هنگام ایجاد انیمیشن ، زمان بندی مهم است و با استفاده از پانل Time Track می توانید کلید های کلید و هر نقطه راه را تنظیم کنید (نمادهای گرافیکی که در پانل Time Time ظاهر می شوند تا تنظیم را نشان دهند از هر پارامتر) که درگیر است.
* **پانل پارامتر:**  در اینجا تمام گزینه ها و تنظیمات مفصل را برای عناصر فعال در انیمیشن خود مانند رنگ ، عرض ، کدورت و موارد دیگر پیدا خواهید کرد. این یکی از مؤلفه های اصلی Synfig است.
اکنون اجازه می دهیم تا یک انیمیشن با Synfig Studios ایجاد کنیم.

## چگونه می توان یک انیمیشن اساسی با Synfig ایجاد کرد؟ {#create-animation}

در این بخش از پست ، ما یک آموزش گام به گام در مورد چگونگی ایجاد یک انیمیشن اساسی با استودیوی Synfig به شما ارائه خواهیم داد. شروع کنیم.
{{_LINE_40_}}
{{_LINE_41_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_43_}}
{{_LINE_44_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_46_}}
{{_LINE_47_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_49_}}
{{_LINE_50_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_52_}}
{{_LINE_53_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_55_}}
{{_LINE_56_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_58_}}
{{_LINE_59_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_61_}}
{{_LINE_62_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="آموزش Synfig یک نرم افزار انیمیشن منبع باز 2D">}}

{{_LINE_64_}}
{{_LINE_65_}}
و در آنجا شما یک آموزش اساسی در مورد نحوه ایجاد انیمیشن در استودیوی Synfig دارید.

## نتیجه {#conclusion}

اگر قبلاً از نرم افزار انیمیشن برای کار خود استفاده کنید ، استفاده از نرم افزار انیمیشن Synfig 2D بسیار ساده و آسان است. حتی اگر در صنعت انیمیشن تازه کار هستید ، درک رابط کار ساده ای است. امیدواریم این آموزش را مفید داشته باشید و می توانید انیمیشن های 2D را برای پروژه های مختلف دانشگاهی ، تجاری یا شخصی برای ایجاد یک نمونه کارها ایجاد کنید.
_ مورد علاقه ترین نرم افزار انیمیشن منبع باز شما چیست؟ آیا در مورد نرم افزار انیمیشن سوالی دارید؟ ، لطفا_ [با هم تماس بگیرید][6].

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [بهترین نرم افزار انیمیشن منبع باز][7]
  * [Synfig | مجموعه انیمیشن 2D بر اساس بردار آزاد و آزاد][8]
  * [نحوه ایجاد انیمیشن با نرم افزار انیمیشن Pencil2D][9]
  * [راهنمای مبتدی برای شروع ویرایش تصویر رایگان با استفاده از Digikam][10]



[1]: #what
[2]: #how-to-install
[3]: #application-interfae
[4]: #create-animation
[5]: #conclusion
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/animation-software/
[8]: https://products.containerize.com/animation-software/synfig/
[9]: https://blog.containerize.com/animation-software/how-to-create-animations-with-pencil2d-animation-software/
[10]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
