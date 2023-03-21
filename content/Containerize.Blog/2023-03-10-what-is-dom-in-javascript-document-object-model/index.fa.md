---
title: "DOM در JavaScript چیست؟ | مدل شیء" 
seoTitle: "DOM در JavaScript چیست؟" 
description: "DOM در JavaScript چیست؟ این راهنما مدل شیء سند ، خصوصیات DOM ، سطح DOM و نحوه دسترسی به عناصر DOM را نشان می دهد." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "DOM در JavaScript چیست؟ این راهنما مدل شیء سند ، خصوصیات DOM ، سطح DOM و نحوه دسترسی به عناصر DOM را نشان می دهد." 
url: /fa/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## بازنمایی یک سند HTML در داخل یک مرورگر وب به عنوان یک درخت HTML DOM درمان می شود. این یک سری از اشیاء است و ساختار یک صفحه وب را تعریف می کند.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="DOM در JavaScript چیست؟?">}}


## بررسی اجمالی
به یک پست وبلاگ هیجان انگیز دیگر در سری [برنامه نویسی JavaScript] خوش آمدید [1]. در این مقاله ، ما می خواهیم به یک مفهوم بسیار اساسی اما اساسی در مورد توسعه وب بپردازیم. بله ، ما قصد داریم مدل Object Document را در JavaScript پوشش دهیم. در گذشته ، ما آموزش های JavaScript را منتشر کرده ایم که برای شروع توسعه با استفاده از زبان JavaScript اجباری است. بنابراین ، ما پیشنهاد می کنیم این پست وبلاگ را کاملاً بخوانید تا چیزی در رابطه با این مفهوم مهم از دست ندهید. بیایید این راهنما را شروع کنیم و دریابیم که  **DOM در JavaScript**  ، ویژگی های DOM و چگونگی تعامل با آن به صورت برنامه ای است.
ما موضوعات زیر را در این راهنمای JavaScript پوشش خواهیم داد:
  * **[مدل Object Model (DOM) چیست؟][2]**
  * **[سطح DOM][3]**
  * **[خصوصیات DOM چیست و چگونه به آنها دسترسی پیدا کنید؟][4]**

## مدل Object Document (DOM) چیست؟   {#What-Document-Object-Model}
DOM مخفف است؟  **مدل Object Model (DOM)**  بازنمایی یک صفحه وب در داخل یک مرورگر وب است. به سادگی ، بازنمایی سلسله مراتبی عناصر یک سند HTML در یک مرورگر به عنوان مدل شیء Document شناخته می شود. این به شکل درختی شکل می گیرد که در واقع توسط مرورگر وب تولید می شود. این شامل گره های مختلفی است که به یکدیگر وصل می شوند و شکل درخت را تشکیل می دهند. علاوه بر این ، عناصر DOM دارای ویژگی ها و وقایع متصل به آنها هستند.
در حقیقت ، DOM یک رابط برنامه نویسی است که ساختار منطقی یک صفحه وب را تدوین می کند و راه دسترسی به عناصر صفحه را دیکته می کند. در اصل ، JavaScript برچسب های HTML مانند عنوان ، H1 و غیره را تشخیص نمی دهد. بنابراین ، هنگامی که یک سند HTML در یک مرورگر وب بارگیری شود ، DOM ایجاد می شود که باعث می شود JavaScript بتواند عناصر سند را درک کند.

## سطح DOM   {#DOM-LEVELS
در این بخش سطوح مختلف DOM نشان می دهد. ابتدا یک شیء پنجره در یک مرورگر وجود دارد که همیشه در بالا است ، و سپس یک گره سند وجود دارد. بیایید نگاهی به تصویر زیر بیندازیم:

{{< figure align=center src="images/DOM.png" alt="سطح دامنه">}}

خوب ، می توانید عناصر DOM را در تصویر بالا مشاهده کنید. پنجره و سند اشیاء مرورگر سطح بالا هستند و سپس عنصر HTML را به عنوان ریشه در اختیار داریم. در حال حرکت ، گره های سر و بدن داریم ، گره عنوان متعلق به گره سر است و گره بدن شامل تمام گره هایی است که در مرورگر وب ارائه شده و قابل مشاهده هستند. علاوه بر این ، عناصر بدن حاوی ویژگی هایی است که می توانیم در تصویر مانند برچسب لنگر حاوی ویژگی "HREF" مشاهده کنیم. به همین ترتیب ، سایر گره های DOM حاوی ویژگی های مختلفی مانند IMG ، متا و موارد دیگر هستند.

## خصوصیات DOM چیست و چگونه به آنها دسترسی پیدا کنیم؟   {#آنچه-های-dom-properties-and-how-access-them}
تاکنون ، ما پاسخی به آنچه DOM در JavaScript و سطح DOM وجود دارد ، ارائه داده ایم و همچنین گره های DOM را پشت سر گذاشته ایم. در این بخش ، ما از ویژگی های DOM عبور خواهیم کرد و خواهیم دید که چگونه می توانیم با آنها ارتباط برقرار کنیم. هر عنصر DOM دارای مقداری است که به آن مرتبط است مانند برچسب "P" دارای ویژگی متن ، برچسب IMG دارای تصویر و غیره است. از روشهای JavaScript برای دسترسی به مقادیر گره ها استفاده می شود. علاوه بر این ، می توانید شنوندگان رویداد را به عناصر DOM اضافه یا حذف کنید.
می توانید موارد زیر  **DOM را پیدا کنید** :
**innerhtml**: از این ویژگی برای تنظیم یا واکشی محتوای HTML یک گره DOM استفاده می شود.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**Innertext**: از این ویژگی DOM برای دسترسی یا تنظیم محتوای متنی یک عنصر HTML استفاده کنید.
```
let textualContent = document.getElementById("customID").innerText;
```
**والدین**: شما می توانید از این ویژگی برای دسترسی به گره والدین عنصر استفاده کنید.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**سبک**: ویژگی سبک یک عنصر را به روز کنید.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**عنوان**: از این ویژگی برای به روزرسانی عنصر عنوان DOM استفاده کنید.
```
document.getElementById("customID").title= "this is a web page";
```
 موارد زیر برخی از روشهایی است که می توانیم برای تعامل با JavaScript Dom استفاده کنیم:
**addEventListener ()**: این روش DOM برای اتصال یک کنترل کننده رویداد به یک عنصر استفاده می شود.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: از این روش DOM برای اتصال یک کنترل کننده رویداد به یک عنصر استفاده می شود.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: روش برای به دست آوردن یک عنصر خاص با "شناسه" داده شده.
```
let element = document.getElementById("myID");
```
**queryselector ()**: از این روش برای به دست آوردن عنصر اول کودک که با یک انتخاب کننده CSS مطابقت دارد استفاده کنید.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: شما می توانید از این روش برای تبدیل یک عنصر به یک رشته استفاده کنید.
به همین ترتیب ، بسیاری از روش ها و خواص دیگر وجود دارد که می توانید آنها را کشف کنید.

## نتیجه
ما با این امید که شما درک خوبی از **DOM در JavaScript  **داشته باشید ، این آموزش Javasxcript را در اینجا پایان می دهیم. ما همچنین از**   DOM ، سطح DOM ، HTML DOM Tree و DOM Properties** عبور کرده ایم. این پست وبلاگ برای تازه کار هایی که به دنبال داشتن یک درک قوی در مفاهیم Javascrit هستند بسیار ضروری است. علاوه بر این ، مقالات مرتبط دیگری نیز وجود دارد که می توانید در بخش "همچنین ببینید".

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][5] آموزش های جاوای اسکریپت مداوم را در مورد موضوعات مختلف هیجان انگیز ارائه می دهد. شما می توانید با دنبال کردن ما در سیستم عامل های رسانه های اجتماعی ما ، از جمله [Facebook][6] ، [LinkedIn][7] و [توییتر][8] در حلقه بمانید.

## سوالی بپرسید
شما می توانید در مورد سوالات یا سؤالات خود در مورد [انجمن][9] به ما اطلاع دهید.

## سؤالات متداول
**DOM در JavaScript استفاده می شود؟**
برای دریافت پاسخ دقیق به این سؤال می توانید از این [لینک][2] بازدید کنید.

## همچنین ببینید
  * [قول در جاوا اسکریپت چیست؟ | آموزش JavaScript][10]
  * [محاسبات بدون سرور چیست؟ | معماری بدون سرور][11]
  * [چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟][12]
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][13]
  * [Async در JavaScript در انتظار چیست؟ | راهنمای جاوا اسکریپت][14]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][15]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][16]
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
