---
title: "مفاهیم اساسی JavaScript را برای کمک به حرفه خود بیاموزید" 
seoTitle: "مفاهیم اساسی جاوا اسکریپت" 
description: "برای یادگیری مفاهیم اساسی JavaScript این آموزش JavaScript را دنبال کنید. دامنه ها ، بلند کردن و بسته شدن مفاهیم بسیار اساسی اما اجباری در جاوا اسکریپت است." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "برای یادگیری مفاهیم اساسی JavaScript این آموزش JavaScript را دنبال کنید. دامنه ها ، بلند کردن و بسته شدن مفاهیم بسیار اساسی اما اجباری در جاوا اسکریپت است." 
url: /fa/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## بیایید برخی از اصول اصلی JavaScript را بیاموزیم که یک توسعه دهنده باید بداند. این زبان برنامه نویسی تفسیر شده به طور گسترده ای برای توسعه برنامه های سطح شرکت استفاده می شود.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="مفاهیم اساسی جاوا اسکریپت">}}


## بررسی اجمالی
JavaScript یک زبان برنامه نویسی است که برای توسعه برنامه های مبتنی بر وب پویا استفاده می شود. ما از HTML و CSS برای ساخت وب سایت های استاتیک استفاده می کنیم در حالی که JavaScript برای افزودن تعامل استفاده می شود. در پست وبلاگ قبلی ما ، [مدل شیء سند][1] را پوشش دادیم و اکنون برخی از مفاهیم مهم JavaScript را پوشش خواهیم داد**. توسعه دهندگان وب به دلیل ویژگی ها و چارچوب های غنی خود تمایل به انتخاب این زبان اسکریپت دارند. علاوه بر این ، شما می توانید با یادگیری JavaScript در انتهای جلو و انتهای جلو انجام دهید. با این حال ، شما فقط نمی توانید برنامه های وب بلکه برنامه های تلفن همراه را نیز تهیه کنید. اگر خود را برای یک جلسه مصاحبه آماده می کنید ، این آموزش JavaScript به شما کمک می کند. با این وجود ، این راهنما ارزش خواندن دارد تا بیشتر به سطل دانش شما اضافه شود.
ما در این مقاله نکات زیر را پوشش خواهیم داد:
*  **[آنچه در جاوا اسکریپت بلند می شود][2]**  
*  **[Scopes in JavaScript][3]**  
*  **[بسته شدن جاوا اسکریپت][4]**  

## آنچه در جاوا اسکریپت بالا می رود {#What-is-hoisting-in-JavaScript}

پدیده گرفتن عملکرد یا اعلامیه متغیر در بالای دامنه فعلی به عنوان بالا بردن شناخته می شود. این یک مفهوم بسیار مهم است و بیشتر توسعه دهندگان جاوا اسکریپت از آن آگاه نیستند. با این حال ، نکته مهمی که باید در اینجا توجه داشته باشید این است که فقط اعلامیه های عملکرد/متغیر به بالا منتقل می شوند ، نه اولیه سازی عملکرد/متغیر.
بیایید یک مثال بزنیم و قطعه کد را در زیر مشاهده کنیم.
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
در مثال کد فوق ، ما قبل از اعلام عملکرد ، تماس عملکرد را انجام دادیم اما حتی اگر کد با موفقیت اجرا شود و این به دلیل بالا بردن جاوا اسکریپت است. در اصل ، در طول زمان کامپایل ، مترجم JavaScript کد را اسکن می کند ، تمام توابع/متغیرها را جمع می کند و آنها را به نام محیط واژگانی قرار می دهد. همین اتفاق با متغیرها رخ می دهد.
```
name = "mustafa";
console.log(name);
var name;

```
به طور مشابه ، اولیه سازی متغیر نام قبل از اعلام آن انجام شده است و کد بدون هیچ گونه خطایی کار می کند. باز هم ، در زمان کامپایل ، مترجم JS برای یافتن اعلامیه متغیر به محیط واژگانی نگاه کرد و از این رو کد را اجرا کرد.
بنابراین ، اگر متغیرهایی را با کلمات کلیدی let و const اعلام کنید ، JavaScript آنها را کمی متفاوت بلند می کند.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
خطای موجود در قطعه کد فوق رخ داده است. دلیل این امر این است که اولیه سازی هنگام بلند کردن این متغیر انجام نشده است. داستان کوتاه ، همه اعلامیه ها با "تعریف نشده" آغاز می شوند در حالی که متغیرهای اعلام شده با "اجازه" یا "const" در بالا بردن آغاز نمی شوند.

## دامنه در جاوا اسکریپت {#Scopes-in-JavaScript}

دامنه یکی از مفاهیم اساسی JavaScript است که یک توسعه دهنده باید آن را بداند. با این حال ، کار با Scopes JavaScript ساده نیست و کمی متفاوت است. بنابراین ، سه نوع دامنه در جاوا اسکریپت وجود دارد و این موارد به شرح زیر است:
 **سطح بلوک** : متغیرهای اعلام شده با "اجازه" یا "const" حاوی دامنه سطح بلوک هستند.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
متغیر "A" در خارج از بریس های فرفری قابل دسترسی نیست زیرا دامنه سطح بلوک دارد.
 **سطح عملکرد** : متغیرهای اعلام شده در عملکرد JavaScript دامنه محلی دارند.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
نکته مهمی که باید در اینجا توجه داشته باشید این است که متغیرهای اعلام شده با "اجازه" "const" و "var" دامنه عملکرد را در بدن عملکرد دارند.
 **سطح جهانی** : متغیرهای اعلام شده در خارج از عملکرد متغیرهای جهانی می شوند. مهم نیست که آنها آنها را با استفاده از کلمات کلیدی "LET" ، "CONST" یا "VAR" اعلام کرده اید. علاوه بر این ، اگر بدون استفاده از هر کلمه کلیدی همانطور که در قطعه کد زیر نشان داده شده است ، یک متغیر به یک متغیر جهانی تبدیل شود:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## بسته شدن جاوا اسکریپت {#JavaScript-Closures}

این یکی دیگر از مفهوم مهم است که دانش جاوا اسکریپت شما را در مورد دامنه ها و محاصره داده ها تقویت می کند. در ساده ترین شکل ، یک عملکرد در داخل یک تابع به عنوان بسته شدن شناخته می شود. ممکن است عملکرد داخلی را بسته بندی کنید. این عملکرد داخلی سه نوع دامنه دارد:
 * دامنه سطح بلوک خاص خود را دارد.
 * به متغیرهای والدین دسترسی دارد.
 * متغیرهای موجود در دامنه جهانی نیز در داخل بسته شدن قابل دسترسی هستند.
 بیایید ببینیم چگونه می توان بسته شد:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
متغیر first_name در داخل تابعی که به نام innerfunc نامیده می شود قابل دسترسی است اما عملکرد والدین نمی تواند به متغیر last_name دسترسی داشته باشد. این رفتار به برنامه نویسان اجازه می دهد تا متغیرهای خصوصی را در زنجیره دامنه ایجاد کنند.

## نتیجه
ما در اینجا به این راهنمای JavaScript پایان می دهیم و امیدواریم که درک بهتری از مفاهیم اساسی JavaScript  **داشته باشید. علاوه بر این ، ما همچنین بسته های جاوا اسکریپت ، دامنه های جاوا اسکریپت**  و بلند کردن را طی کرده ایم. بسیاری از مفاهیم مهم دیگر وجود دارد که برای مبتدیان اجباری است. بنابراین ، این مقاله به شما کمک می کند اگر در حال پیشرفت یا تازه کردن مفاهیم JavaScript خود هستید. علاوه بر این ، شما ممکن است پست های وبلاگ ذکر شده در بخش "ببینید همچنین" را طی کنید.

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][5] آموزش های جاوای اسکریپت مداوم را در مورد موضوعات مختلف هیجان انگیز ارائه می دهد. شما می توانید با دنبال کردن ما در سیستم عامل های رسانه های اجتماعی ما ، از جمله [Facebook][6] ، [LinkedIn][7] و [توییتر][8] در حلقه بمانید.

## سوالی بپرسید
شما می توانید در مورد سوالات یا سؤالات خود در مورد [انجمن][9] به ما اطلاع دهید.

## سؤالات متداول
 **مفاهیم مهم برای یادگیری در JavaScript چیست؟** 
لطفاً برای دانستن مفاهیم اساسی JavaScript این جاوا اسکریپت مبتدی [2] را دنبال کنید.

## همچنین ببینید
  * [DOM در JavaScript چیست؟ | مدل شیء سند][1]
  * [قول در جاوا اسکریپت چیست؟ | آموزش JavaScript][10]
  * [محاسبات بدون سرور چیست؟ | معماری بدون سرور][11]
  * [چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟][12]
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][13]
  * [Async در JavaScript در انتظار چیست؟ | راهنمای جاوا اسکریپت][14]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][15]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][16]
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][17]
  * [Async در JavaScript در انتظار چیست؟ | راهنمای جاوا اسکریپت][18]



 [1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
 [2]: #What-is-hoisting-in-JavaScript
 [3]: #Scopes-in-JavaScript
 [4]: #JavaScript-Closures
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
 [18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
