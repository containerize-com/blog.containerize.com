---
title: "نحوه تنظیم MAUTIC - ادغام فیس بوک" 
seoTitle: "نحوه تنظیم MAUTIC - ادغام فیس بوک" 
description: "MAUTIC - ادغام فیس بوک می تواند به همگام سازی منجر به فیس بوک شما به سیستم مائوتیک بدون هیچ مشکلی کمک کند و سپس از آنها در کمپین های بازاریابی استفاده کنید." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook منجر به Mautic می شود ، مخاطبین را به یک بخش اضافه کرده و کمپین های ایمیل را اجرا می کنید. همچنین از این مخاطبین برای ایجاد مخاطبان سفارشی برای تبلیغات فیس بوک استفاده کنید." 
url: /fa/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook منجر به Mautic می شود ، مخاطبین را به یک بخش اضافه کرده و کمپین های ایمیل را اجرا کنید. همچنین از این مخاطبین برای ایجاد مخاطبان سفارشی برای تبلیغات فیس بوک استفاده کنید.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="نحوه تنظیم MAUTIC - ادغام فیس بوک">}}

MAUTIC یک نرم افزار اتوماسیون بازاریابی است و کنترل کاملی بر روی ایمیل های بازاریابی ، صفحات فرود و گردش کار برای فعالیت های بازاریابی می دهد. کمپین های قطره ای Mautic به درگیر کردن مخاطبان هدف و به روزرسانی آنها در مورد محصولات شما کمک می کند. ادغام Mautic Facebook راهی را برای اضافه شدن منجر به Mautic فراهم می کند. با استفاده از این ادغام Mautic - Facebook ، منجر به کمپین فیس بوک شما به طور خودکار به Mautic اضافه می شود.
ما بخش های زیر را در این آموزش پوشش خواهیم داد:
  * [پیکربندی حساب توسعه دهنده فیس بوک][1]
  * [پیکربندی برنامه توسعه دهنده فیس بوک][2]
  * [پیکربندی افزونه Mautic][3]
  * [نتیجه گیری][4]

## حساب توسعه دهنده فیس بوک را پیکربندی کنید {#account}

  * برای توسعه دهندگان به [فیس بوک] بروید [5]
  * اگر یکی از آنها را ندارید ، حساب خود را ثبت کنید.
  * برای ثبت یک حساب جدید ، به "شروع" از گوشه بالا سمت راست بروید و کلیک کنید.
  * پس از آن ، حساب Facebook خود را انتخاب کرده و به "ادامه" ضربه بزنید.
  * سپس از پنجره پنجره ، روی دکمه "توسعه دهنده" کلیک کنید.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="MAUTIC - ادغام فیس بوک - ثبت حساب سازنده را ثبت کنید">}}


## برنامه توسعه دهنده فیس بوک را پیکربندی کنید {#app}

  * روی "ایجاد برنامه اول" کلیک کنید

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="MAUTIC - ادغام فیس بوک - ایجاد اولین برنامه">}}

  * روی "مدیریت ادغام های تجاری" کلیک کرده و به "ادامه" ضربه بزنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="MAUTIC - ادغام فیس بوک - هدف را انتخاب کنید">}}

  * در پنجره بعدی ، نام برنامه را وارد کنید و هدف برنامه را انتخاب کنید. روی دکمه "ایجاد برنامه" کلیک کنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="MAUTIC - ادغام فیس بوک - فرم را برای ایجاد برنامه پر کنید">}}

  * مرحله بعدی تنظیم ورود به سیستم فیس بوک است. از صفحه محصولات ، روی دکمه "تنظیم" در زیر جعبه "Facebook Login" کلیک کنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="MAUTIC - ادغام فیس بوک - ورود به سیستم FB">}}

  * از منوی سمت چپ ، روی "تنظیمات" در زیر محصولات -> ورود به سیستم فیس بوک کلیک کنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="MAUTIC - ادغام فیس بوک - پیکربندی ورود به سیستم FB">}}

  * URL وب سایت Mautic خود را وارد کنید. "ورود به سیستم مشتری OAUTH" و "Web OAuth Login" را روی "بله" تنظیم کنید.
  * اکنون به تنظیمات بروید -> تنظیمات اساسی. از پایین صفحه ، روی دکمه "+ افزودن پلتفرم" کلیک کنید. پس از آن یک پنجره پنجره باز می شود. URL وب سایت خود را وارد کرده و تغییرات را ذخیره کنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="MAUTIC - ادغام فیس بوک - وب سایت را به عنوان بستر اضافه کنید">}}


## پیکربندی افزونه Mautic {#configuration}

  * به داشبورد ماوتیک بروید.
  * سپس از گوشه بالا سمت راست به "تنظیمات" بروید.
  * روی "افزونه ها" کلیک کنید.
  * پس از آن ، تنظیمات افزونه "Facebook" را باز کنید.
  * سپس شناسه مشتری و راز مشتری را وارد کنید. این کلیدها را از برنامه توسعه دهندگان Facebook که تازه در بالا مراحل بالا ایجاد کرده اید دریافت کنید.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="MAUTIC - ادغام فیس بوک - پیکربندی افزونه FB را در MAUTIC پیکربندی کنید">}}

  * دکمه "مجوز برنامه" را بزنید.
  * پس از آن ، یک پنجره مجوز جدید فیس بوک باز خواهد شد. برای تکمیل مجوز برنامه ، درخواست های خود را دنبال کنید.
  * پس از مجوز موفقیت آمیز ، از افزونه فیس بوک Mautic به برگه "تماس با نقشه برداری" بروید.
  * در اینجا می توانید زمینه های تماس خود را در قسمت های فیس بوک نقشه برداری کنید.
  * سرانجام ، تنظیمات را منتشر کنید و خوب هستید که بروید.

## نتیجه {#conclusion}

MAUTIC - ادغام فیس بوک می تواند به همگام سازی منجر به فیس بوک شما به سیستم Mautic بدون هیچ مشکلی کمک کند. در برنامه Mautic ، می توانید تمام این موارد را به یک بخش اضافه کنید. می توانید کمپین های بازاریابی ایمیل را روی آنها اجرا کنید. این واقعاً می تواند به تجارت شما در رشد ، بازاریابی و فروش محصولات/خدمات به مخاطبان هدف بسیار بزرگتر کمک کند.

## کاوش کنید
برای کسب اطلاعات بیشتر در مورد Mautic و Facebook ، لطفاً بازدید کنید:
  * [Mautic | پلت فرم فناوری بازاریابی محتوای منبع باز][6]
  * [نحوه راه اندازی کمپین های MAUTIC با استفاده از کمپین سازنده][7]
  * [ادغام ماوتیک دروپال برای خودکارسازی تغذیه سرب][8]
  * [اتوماسیون بازاریابی با ادغام Mautic و WooCommerce][9]
  * [ادغام Mautic & Joomla برای اتوماسیون بازاریابی دیجیتال][10]



[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
