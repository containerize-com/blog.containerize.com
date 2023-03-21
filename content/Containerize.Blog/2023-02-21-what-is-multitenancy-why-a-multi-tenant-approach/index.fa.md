---
title: "چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟" 
seoTitle: "چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟" 
description: "چندتایی چیست؟ برای یادگیری مفهوم واقعی در پشت چند اجاره ، این پست وبلاگ را دنبال کنید و شروع به ساختن برنامه های چند مستاجر مقیاس پذیر کنید." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "یک معماری برنامه چند مستاجر را طراحی کنید و نیازهای کاربر خود را به طور موثر برآورده کنید. بیایید بررسی کنیم که چگونه Multitenancy به شما امکان می دهد نرم افزار مقیاس پذیر بسازید." 
url: /fa/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## یک معماری برنامه چند مستاجر را طراحی کرده و نیازهای کاربر خود را به طور موثر برآورده کنید. بیایید بررسی کنیم که چگونه Multitenancy به شما امکان می دهد نرم افزار مقیاس پذیر بسازید.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## بررسی اجمالی
به یک پست وبلاگ دیگر در گروه [برنامه نویسی][1] خوش آمدید. ما قصد داریم در مورد یک معماری کاربردی چند مستاجر بحث کنیم. در حقیقت ، [Containerize.com][2] دارای طیف گسترده ای از برنامه های چند مستاجر در پشته محصول منبع باز است. برنامه های چند مستاجر منبع باز شامل [form.io][3] ، [botpress][4] و موارد دیگر است. علاوه بر این ، [مستندات][5] کامل در مورد معماری ، استقرار ، توسعه و استفاده از این نرم افزار منبع باز وجود دارد. دلیل نوشتن این مقاله ، درک این مفهوم در مورد چند اجاره در توسعه نرم افزار است. بنابراین ، بیایید دریابیم که** چندتایی چیست؟
نکات زیر در این پست مورد بحث قرار خواهد گرفت:
  * [چندتایی چیست؟ چند مستاجر در مقابل یک مستاجر][6]
  * [انواع معماری کاربرد چند مستاجر][7]
  * [مزایای تجاری برنامه چند مستاجر][8]
  * [اشکالاتی در چند اجاره][9]

## چندتایی چیست؟ چند مستاجر در مقابل یک مستاجر   {#چه چیزی- multitenancy-multi-مستاجر-مستاجر}
Multitenancy به یک نمونه سرور واحد اشاره دارد که چندین مستاجر به ویژه شناخته شده را ارائه می دهد. هر وقت با یک نرم افزار چند مستاجر روبرو شدید ، فقط به مغز خود بگویید که این نرم افزار یک نمونه از یک سرور مشترک را اجرا می کند و مستاجرین های متعدد (مشتری) با مارک های مختلف به این نمونه متصل می شوند.
به عنوان مثال ، نرم افزار ساخته شده برای یک دانشگاه در خدمت بخش های مختلفی است که دارای مارک های مختلف جلو و داده های برنامه هستند. در اصل ، یک نمونه واحد از سرور در حال اجرا و خدمت به همه مستاجران است. علاوه بر این ، جداسازی داده ها و حریم خصوصی داده ها در بین همه مستاجران وجود دارد. علاوه بر این ، هر مستاجر منطق کسب و کار خاص خود را دارد و داده های خود را در یک مکان واحد اما خصوصی/منزوی ذخیره می کند.

{{< figure align=center src="images/multi-tenant-1.png" alt="معماری چند مستأجر">}}

حال ، بیایید نگاهی گذرا به معماری تک مستاجر بیندازیم. در معماری تک مستاجر ، یک نمونه سرور در هر مستاجر وجود دارد. باز هم ، بیایید نمونه ای از نرم افزار دانشگاه را بگیریم. رویکرد تک مستاجر به یک نمونه سرور در هر بخش اشاره دارد و تعداد نمونه ها به تعداد ادارات (مستاجران) بستگی دارد.

{{< figure align=center src="images/single-tenant-2.png" alt="معماری تکملایه">}}


## انواع معماری کاربردی چند مستاج
تاکنون ، شما درک چند اجاره ای دارید و اکنون انواع مختلفی از آن را طی خواهیم کرد.
**یک پایگاه داده-یک نمونه برنامه**: این رویکرد کاملاً محبوب است و به طور گسترده برای ساخت برنامه های چند مستاجر استفاده شده است. طبق این روش ، یک نمونه برنامه با یک پایگاه داده واحد در حال اجرا است. علاوه بر این ، یک طرح مشترک وجود دارد و داده های مستاجر در یک مکان واحد در برابر شناسه منحصر به فرد آنها ذخیره می شود.
**چندین پایگاه داده-یک نمونه برنامه:** در این معماری برنامه چند مستاجر ، فقط یک نمونه از برنامه با چندین پایگاه داده اجرا می شود. هر مستاجر طرح پایگاه داده خود را دارد که تمام اطلاعات در هر مستاجر به طور جداگانه ذخیره می شود.
**چندین پایگاه داده - چندین نمونه برنامه**: رویکرد سوم به اجرای چندین نمونه سرور به همراه چندین پایگاه داده اشاره دارد. هیچ چیز مشترک نیست و هر مستاجر انزوای کاملی دارد و هیچ وابستگی بین مستاجران وجود ندارد.

## مزایای تجاری برنامه چند مستاج
در این بخش ، ما برخی از مزایای برجسته انتخاب چند جانبه را طی خواهیم کرد. اگرچه ، ما می توانیم در مورد Perks صحبت کنیم اما نکات زیر را ببینیم:
**مقیاس پذیری**: مقیاس معماری چند مستاجر آسان است. شما می توانید بدون توجه به نوع انتخابی که انتخاب کرده اید ، به صورت افقی یا عمودی مقیاس کنید.
**مقرون به صرفه**: انتخاب چند جانبه باعث صرفه جویی در هزینه های عملیاتی شما می شود. منابع مشترک وجود دارد ، بنابراین مقیاس بندی منابع همیشه مقرون به صرفه است.
**کارآیی و انعطاف پذیری**: در یک محیط چند منظوره ، شما در توسعه و استقرار به کارآیی می رسید. به عنوان مثال ، می توانید یک اسکریپت را در یک طرحواره پایگاه داده مشترک اجرا کنید تا همه مستاجران به روز شوید.
**مدیریت بهتر منابع**: اضافه کردن و حذف منابع ساده است. علاوه بر این ، این معماری زیرساخت های بهبود یافته و به خوبی را ارائه می دهد. علاوه بر این ، هر مستاجر خصوصی و ایمن است و به یک پایگاه داده مشترک/غیر مشترک دسترسی دارد.

## اشکالاتی در چند اجاره   {#اشکالا
هدف از این پست وبلاگ ، ارائه حس عادلانه ای از معماری چند مستاجر است.** بنابراین ، اجازه دهید برخی از موارد منفی را که به چند اجاره متصل شده اند ، کشف کنیم.
**مکانیسم احراز هویت پیچیده**: با توجه به ماهیت مشترک تخصیص منابع در چندتایی ، پروتکل های دقیق برای نقاط دسترسی به داده ها وجود دارد.
**تجزیه سرور:** نکته اصلی در هنگام انتخاب معماری برنامه چند مستاجر در نظر گرفته شده است. همه مستاجران هر زمان که سرور به هر دلیلی کاهش یابد ، غیر کاربردی می شوند.
**خطر حفظ حریم خصوصی**: در یک معماری چند مستاجر ، نقض امنیتی پرخطر وجود دارد. در حقیقت ، داده های همه مستاجران در یک پایگاه داده مشترک ذخیره می شوند تا هرگونه حمله شخص ثالث بتواند منجر به فساد یا سرقت داده شود.

## نتیجه
ما در اینجا به این پست وبلاگ پایان می دهیم. آیا این مقاله به سؤالات شما مانند **چندتایی  **پاسخ می دهد؟ علاوه بر این ، ما همچنین**   زیرساخت های چند مستاجر** را بررسی کرده ایم. علاوه بر این ، این راهنما هنگام انتخاب معماری کاربردی چند مستاجر یا یک مستاجر واحد به شما کمک می کند. مهمتر از همه ، اگر شما در حال ساخت SaaS هستید ، اولین انتخاب است. پست های جالب دیگر وبلاگ وجود دارد که ممکن است در بخش "See" نیز پیدا کنید که آخرین بینش در مورد دنیای فناوری را به شما می دهد.
سرانجام ، [Containerize.com][2] به طور مداوم در حال نوشتن پست های وبلاگ در مورد محصولات و موضوعات منبع باز بیشتر است. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][10] ، [LinkedIn][11] و [Twitter][12] دنبال کنید.

## سوالی بپرسید
شما می توانید در مورد سؤالات یا سؤالات خود در مورد [انجمن][13] به ما اطلاع دهید.

## سؤالات متداول
**چند مستاجر با مثال چیست؟**
لطفاً به این [پیوند][6] مراجعه کنید تا بدانید چند منظوره چیست. جزئیات همراه با مثال وجود دارد.
**معنی معماری چند مستاجر چیست؟**
A  **معماری برنامه چند مستاجر**  به معنای یک نمونه واحد از سرور است که به چندین مستاجر (مشتری) خدمت می کند. لطفاً برای جزئیات بیشتر به این [لینک][7] بروید.

## همچنین ببینید
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][14]
  * [نحوه ادغام chatgpt با برگه های Google][15]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][16]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][17]
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/