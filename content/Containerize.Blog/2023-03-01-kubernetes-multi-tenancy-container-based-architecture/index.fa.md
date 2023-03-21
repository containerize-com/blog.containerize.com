---
title: "Kubernetes Multi-Tenancy & Architecture مبتنی بر کانتینر" 
seoTitle: "معماری چند اجاره ای و مبتنی بر کانتینر" 
description: "برای یادگیری نحوه به دست آوردن چند اجاره در یک معماری مبتنی بر کانتینر ، این راهنما را دنبال کنید. Kubernetes چند اجاره به منابع مشترک اشاره دارد" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "برای یادگیری نحوه به دست آوردن چند اجاره در یک معماری مبتنی بر کانتینر ، این راهنما را دنبال کنید. Kubernetes چند اجاره به منابع مشترک اشاره دارد" 
url: /fa/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

## Kubernetes منابع خوشه ای در بین همه مستاجران مشترک است. برای استقرار برنامه های بهینه شده و صرفه جویی در منابع ، رویکرد میزبان کانتینر چند مستاجر را اجرا کنید.


{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Kubernetes معماری چند اجاره ای و معماری مبتنی بر کانتینر " caption="Kubernetes Multi-Tenancy & Container Architecture" >}}

## بررسی اجمالی
ما در اینجا با یک پست وبلاگ هیجان انگیز دیگر در سری چند اجاره هستیم. در [مقاله][1] قبلی ، ما به مفهوم اصلی برنامه های چند مستاجر ، جوانب مثبت و منفی و انواع معماری چند مستاجر اشاره کردیم. از آنجا که زمان آن رسیده است که به چندین کاربر/مستاجر خدمت کنیم ، منابع را به روشی کارآمد مدیریت و استفاده کنیم. بنابراین ، Multi-Tenancy رویکرد برتر برای ساختن زیرساخت هایی است که به طور همزمان مشتری ها/مستاجران مختلف را کنترل می کند. با این حال ، جدیدترین [پست وبلاگ][2] معماری بدون سرور ، کانتینر شدن و [Kubernetes][3] را نشان داد. بنابراین ، در این مقاله ، معماری چند اجاره ای و مبتنی بر کانتینر را کشف خواهیم کرد. علاوه بر این ، خواهیم دید که چگونه می توانید در برنامه های [Containerized][4] خود به چند اجاره دست یابید.
نکات زیر در این مقاله پوشش داده می شود:
  * **[میزبان کانتینر چند مستاجر][5]**
  * **[Kubernetes multi-tenancy][6]**

## میزبان کانتینر چند مستاجر   {#میزبان چند مستاجر}
استقرار برنامه های چند مستاجر در مورد سیستم های میزبانی یک کار مهم است. همه شما می دانید که ظروف در مقایسه با ماشین های مجازی سبک هستند. استقرار درخواست فقط چند میلی ثانیه برای تکمیل استقرار طول می کشد ، در حالی که می تواند در مورد ماشینهای مجازی چند ثانیه تا دقیقه باشد.
با این حال ، دستیابی به چند اجاره در یک معماری مبتنی بر کانتینر کاملاً ساده است. هر مستاجر توسط یک ظرف جداگانه با انزوا کامل و حریم خصوصی داده ها میزبانی می شود. این بدان معناست که تعداد ظروف به تعداد مستاجران بستگی دارد. علاوه بر این ، از ابزارهای زیر برای دستیابی به این رویکرد استفاده می شود:
  * Docker and Docker آهنگسازی می کند
  * nginx
  * نمونه بانک اطلاعاتی
  * برنامه ی سرور
شما از Docker برای ساخت تصویری استفاده خواهید کرد که الگویی برای ساخت ظرف است. علاوه بر این ، شما از Docker Compose برای چرخش میزبان های چند ظرف استفاده خواهید کرد. علاوه بر این ، شما از NGINX برای هدایت درخواست های ورودی به مستاجر مناسب استفاده خواهید کرد. بنابراین ، هر میزبان کانتینر حاوی نمونه های برنامه و بانک اطلاعاتی است و در حال اجرا است. این روش  **میزبان کانتینر چند مستاجر **  روش منابع بسیار زیاد نیست و در مدیریت مستاجران مختلف و اطمینان از انزوا و امنیت داده ها ، استحکام ارائه می دهد.

## kubernetes multi-tenancy   {#kubernetes-multi-tenancy-}
Kubernetes شامل بسیاری از مؤلفه های معماری خود مانند گره ها ، خوشه ها ، هواپیمای کنترل و موارد دیگر است. در اصل ، هیچ چند اجاره داخلی در Kubernetes وجود ندارد اما می توانید به آن دست یابید. بنابراین ، چندین برنامه کاربردی/مستاجر در حال اجرا و به اشتراک گذاری خوشه Kubernetes و هواپیمای کنترل وجود دارد. از طرف دیگر ، در برنامه های تک مستاجر ، یک نمونه واحد از برنامه کل خوشه Kubernetes را اشغال می کند.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes چند اجاره" >}}

علاوه بر این ، رفتن کمی عمیق تر باعث می شود که ما در مورد میزبانی مستاجر در خوشه Kubernetes بیاموزیم. هر مستاجر با یک فضای نام Kubernetes همراه است که کد را سازماندهی می کند و از برخورد نام جلوگیری می کند. سه رویکرد برای دستیابی به چند اجاره در Kubernetes وجود دارد. مورد اول فضای نام به عنوان یک سرویس است ، دوم به عنوان یک سرویس خوشه ای است و سوم آن هواپیماهای کنترل به عنوان یک سرویس است.
با توجه به عادلانه ، Kubernetes Multi-Tenancy یک راه حل مقرون به صرفه را برای سازمان ارائه می دهد که با چندین رابط کاربر سروکار دارد. در واقع ، شما می توانید با برخی از چالش ها مانند مدیریت کاربر و مدیریت بهتر منابع روبرو شوید. با این وجود ، این کاملاً به مورد استفاده و ماهیت برنامه مورد نظر شما بستگی دارد.

## نتیجه
این ما را به پایان این پست وبلاگ می رساند. ما از طریق  **Kubernetes چند اجاره و معماری مبتنی بر کانتینر **  برای دستیابی به چند اجاره. علاوه بر این ، بسیاری از کتابخانه های شخص ثالث برای ایجاد برنامه های چند مستاجر با Kubernetes در دسترس هستند. این پست وبلاگ به شما در درک مفهوم  **میزبان کانتینر چند مستاجر **  کمک خواهد کرد. پست های جالب وبلاگ دیگری وجود دارد که ممکن است در بخش "همچنین ببینید".

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][7] پست های وبلاگ در حال انجام را در مورد محصولات و موضوعات مختلف منبع باز ارائه می دهد. شما می توانید با دنبال کردن ما در سیستم عامل های رسانه های اجتماعی ما ، از جمله [Facebook][8] ، [LinkedIn][9] و [توییتر][10] در حلقه بمانید.

## سوالی بپرسید
شما می توانید در مورد سوالات یا سؤالات خود در مورد [Forum][11] به ما اطلاع دهید.

## سؤالات متداول
**چند اجاره در Kubernetes چیست؟ **؟
این [Link][6] را دنبال کنید تا Kubernetes Multi-Tenancy را بدانید.
**خوشه چند مستاجر در مقابل یک مستاجر چیست؟ **
در یک خوشه چند مستاجر ، همه مستاجران/مراجعان خوشه Kubernetes را به اشتراک می گذارند ، در حالی که ، در یک خوشه تک مستاجر ، یک خوشه جداگانه برای هر مستاجر وجود دارد.

## همچنین ببینید
  * [محاسبات بدون سرور چیست؟ | معماری بدون سرور][12]
  * [چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟][13]
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][14]
  * [نحوه ادغام chatgpt با برگه های Google][15]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][16]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][17]
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
