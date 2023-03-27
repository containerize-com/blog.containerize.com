---
title: "Async در JavaScript چه چیزی در انتظار است؟ | یک راهنمای جاوا اسکریپت" 
seoTitle: "Async در JavaScript چه چیزی در انتظار است؟" 
description: "Async در JavaScript چه چیزی در انتظار است؟ کلمات کلیدی Async & Await برای انجام عملیات ناهمزمان بهتر از وعده های سنتی در JavaScript استفاده می شود." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Async در JavaScript چه چیزی در انتظار است؟ کلمات کلیدی Async & Await برای انجام عملیات ناهمزمان بهتر از وعده های سنتی در JavaScript استفاده می شود." 
url: /fa/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 JavaScript Async را معرفی کرد/در انتظار است که یک بسته بندی پیرامون وعده ها است. Async/Await برای مصرف API های مبتنی بر وعده به روش مدرن و ساده ترین استفاده می شود.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Async در JavaScript چه چیزی در انتظار است؟?">}}


## بررسی اجمالی
ما در پست وبلاگ قبلی خود [وعده های JavaScript][1] را پوشش دادیم و اگر می خواهید درک روشنی از مفهوم وعده های JavaScript داشته باشید ، باید بازدید کنید. در این سری از [آموزش های JavaScript][2] ، ما با یک راهنمای JavaScript دیگری در اینجا هستیم که ویژگی های مدرن JavaScript Async/Await را نشان می دهد. این پست وبلاگ برای کسانی است که دانش قبلی در مورد وعده های جاوا اسکریپت دارند. علاوه بر این ، ما سعی خواهیم کرد  **آنچه را که در JavaScript** در انتظار است ، بپوشانیم ، و هنگامی که نیاز به استفاده از Async/Await داریم. علاوه بر این ، ما همچنین خطاهای حمل و نقل را با Async/Await پوشش خواهیم داد. بنابراین ، برای این مفهوم که بررسی شده است ، به این **Async/Await Tutorial**  async/await بخوانید.
ما بخش های زیر را در این آموزش JavaScript Async در انتظار آموزش خواهیم گذراند:
*  **[در JavaScript چه Async/منتظر است | async در انتظار نحو][3]**  
*  **[چه موقع از async/انتظار استفاده کنید؟][4]**  
*  **[رسیدگی به خطا با async/await][5]**  

## چه چیزی در JavaScript Async/منتظر است | async در انتظار نحو است {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

ECMAScript 2017 ویژگی های جدیدی از JavaScript و Async/Await را منتشر کرد یکی از گسترده ترین مورد استفاده در این ویژگی ها است. Async/Await در بالای وعده ها ساخته شده است و در واقع یک روش مدرن برای رسیدگی به وعده های JavaScript است.
بیایید ببینیم که چگونه از کلمات کلیدی Async/Await در کد JavaScript استفاده کنید:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
خوب ، کلمه کلیدی ASYNC در شروع عملکرد دلالت بر این دارد که این عملکرد یک وعده را برمی گرداند. بنابراین ، در انتظار کلمه کلیدی همیشه در بدن عملکرد ASYNC استفاده می شود تا مکث اجرای عملکرد را تا زمان برطرف شدن قول مکث کند. نکته مهمی که در اینجا باید به آن توجه داشته باشید این است که شما نمی توانید از کلمه کلیدی منتظر در بدن یک عملکرد منظم استفاده کنید. با این حال ، شما می توانید فقط با توابع ناهمزمان اعلام شده با کلمه کلیدی Async از انتظار استفاده کنید.

## چه موقع از Async/Await استفاده کنیم؟ {#When-to-use-AsyncAwait}

تا کنون ، شما جواب  **را دارید که Async در JavaScript**  در انتظار است. از آنجا که این تنها یک بسته بندی در اطراف وعده های سنتی JavaScript است ، بنابراین شما بهتر است از این روش جدید برای ایجاد و رسیدگی به وعده ها به روشی پاک تر و قابل خواندن استفاده کنید. علاوه بر این ، شما می توانید از چندین وعده خلاص شوید. () () () تماس با استفاده از ASYNC/AWAIT که در نهایت باعث می شود کد منبع قابل کنترل تر و حفظ شود. کلمه کلیدی AWAIT عبارت .Then () را در یک خط واحد قرار می دهد.

## رسیدگی به خطا با Async/Await {#Error-handling-with-AsyncAwait}

رسیدگی به خطا در هنگام توسعه نرم افزار در سطح شرکت یک کار مهم است. روش های مختلفی برای گرفتن خطا در رویکرد ASYNC/AIRAIT وجود دارد.

{{< figure align=center src="images/async-await.png" alt="سعی کنید Async را در انتظار جاوا اسکریپت کنید">}}

 **سعی کنید Async را در انتظار JavaScript** : با این رویکرد رسیدگی به خطا چیز جدیدی نیست. با این حال ، شما می توانید از یک بلوک Try/Catch در داخل یک عملکرد ASYNC استفاده کنید ، همانطور که در قطعه کد زیر نشان داده شده است:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
با استفاده از بلوک Try/Catch می توانید استثنائات را در بدن یک عملکرد Async بگیرید.
در حالی که ، رویکرد دیگری برای رسیدگی به خطاها وجود دارد که در آن می توانید بلوک .catch () را در انتهای تماس عملکرد اضافه کنید. از آنجا که Async/در انتظار یک وعده را برمی گرداند ، بنابراین خطاها را در بلوک .catch () می گیرید.
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## نتیجه
ما در حال پایان دادن به این  **JavaScript Async در انتظار آموزش** هستیم. امیدوارم که شما درک بهتری از **آنچه Async در JavaScript**  در انتظار است ، داشته باشید. علاوه بر این ، ما از طریق JavaScript Async در انتظار نحو هستیم که کد منبع را پیچیده تر می کند. این ویژگی JavaScript به دلیل استفاده و عملکرد غنی از آن به طور گسترده ای استفاده می شود. در روزهای آینده ، ما در مورد ویژگی ها و مفاهیم JavaScript بیشتر خواهیم نوشت تا بتوانید یک دستور قوی نسبت به مفاهیم JS بدست آورید. علاوه بر این ، برخی از مقاله های جالب دیگر که در بخش "همچنین ببینید" نیز ذکر شده است.

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][6] آموزش های جاوای اسکریپت مداوم را در مورد موضوعات مختلف هیجان انگیز ارائه می دهد. شما می توانید با دنبال کردن ما در سیستم عامل های رسانه های اجتماعی ما ، از جمله [Facebook][7] ، [LinkedIn][8] و [توییتر][9] به روز شوید.

## سوالی بپرسید
می توانید در مورد سؤالات یا سؤالات خود در مورد [انجمن] ما به ما اطلاع دهید.

## سؤالات متداول
 **Async در JavaScript با مثال در انتظار چیست؟** 
برای درک مفهوم Async در انتظار ، ممکن است از این [پیوند][3] بازدید کنید.
 **Async در انتظار وعده چیست؟** 
 * Async/Await باعث می شود کد منبع در مقایسه با وعده هایی که در آن زنجیره ای می تواند کد منبع را به یک آشفتگی تبدیل کند ، واضح تر و قابل خواندن تر شود.
 * رسیدگی به خطا در هر دو رویکرد کاملاً مشابه است.
 * اشکال زدایی در Async در انتظار کمتر دشوار است.
 * وعده ها ایالات مانند در انتظار ، حل و فصل یا رد را حفظ می کنند. در حالی که ، Async/Await یا برطرف شده یا رد می شود.

## همچنین ببینید
  * [قول در جاوا اسکریپت چیست؟ | آموزش JavaScript][1]
  * [محاسبات بدون سرور چیست؟ | معماری بدون سرور][11]
  * [چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟][12]
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][13]
  * [نحوه ادغام chatgpt با برگه های Google][14]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][15]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][16]
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][17]



 [1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [2]: https://blog.containerize.com/categories/programming/
 [3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
 [4]: #When-to-use-AsyncAwait
 [5]: #Error-handling-with-AsyncAwait
 [6]: https://www.containerize.com/
 [7]: https://web.facebook.com/containerize
 [8]: https://www.linkedin.com/company/containerize/
 [9]: https://twitter.com/containerize_co
 [10]: https://forum.containerize.com/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
