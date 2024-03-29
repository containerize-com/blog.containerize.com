---
title: "وعده در جاوا اسکریپت چیست؟ | آموزش جاوا اسکریپت" 
seoTitle: "وعده در جاوا اسکریپت چیست؟" 
description: "وعده در جاوا اسکریپت چیست؟ یک وعده ، بلوک کد است که نتیجه نهایی یک عملیات ناهمزمان مانند در انتظار ، تکمیل یا رد شده را ارائه می دهد." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "وعده در جاوا اسکریپت چیست؟ یک وعده ، بلوک کد است که نتیجه نهایی یک عملیات ناهمزمان مانند تکمیل یا رد شده را ارائه می دهد." 
url: /fa/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## آیا شما در حال یادگیری مفهوم وعده های جاوا اسکریپت هستید؟ در این مقاله نحوه ایجاد یک وعده توضیح داده شده است ، چرا ما در جاوا اسکریپت و موارد دیگر از وعده استفاده می کنیم.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## بررسی اجمالی
امیدواریم که شما درک بهتری از [انواع داده های جاوا اسکریپت] داشته باشید [1]. اکنون ، این یکی دیگر از پست های وبلاگ در گروه [برنامه نویسی][2] است. در این آموزش JavaScript ، ما در جاوا اسکریپت **قول می دهیم** و در کنار آن ، ما همچنین خواهیم دید که عملیات ناهمزمان ، استفاده از وعده ها و نحوه ایجاد وعده ها در جاوا اسکریپت چیست. اول ، یک فرآیند/عملیات ناهمزمان عملی است که با توجه به سایر فرآیندهای دیگر به طور مستقل اجرا می شود و هیچ انسداد ایجاد نمی کند. بنابراین ، شما باید عملیات ناهمزمان را کنترل کنید ، در غیر این صورت ممکن است ناهنجاری ها را در کد جاوا اسکریپت ایجاد کند. بنابراین ، ما بررسی خواهیم کرد که چگونه می توانیم با استفاده از وعده ها عملیات ناهمزمان را انجام دهیم.
ما در این آموزش JavaScript نکات زیر را پوشش خواهیم داد:
* **[قول در جاوا اسکریپت چیست؟ وعده های توضیح داده شده][3]** 
* **[چرا ما در جاوا اسکریپت از وعده استفاده می کنیم؟][4]** 
* **[چگونه وعده در جاوا اسکریپت کار می کند؟][5]** 
* **[چگونه یک وعده ایجاد کنیم؟][6]** 

## وعده در جاوا اسکریپت چیست؟ وعده ها توضیح داده شد {#What-is-promise-in-JavaScript-Promises-Explained}

یک وعده یک شیء است که نشان دهنده یک مقدار آب و هوای عملیاتی ASYNC است که برطرف می شود ، رد می شود یا در حالت در انتظار است. با کلمات ساده تر ، از وعده ها برای بازگشت مقداری استفاده می شود که هنوز توسط یک بلوک کد ناهمزمان تولید نمی شود. در واقع ، سه حالت **وعده** وجود دارد و می تواند در هر یک از ایالات زیر باشد:
**در انتظار** : وعده در حالت تعلیق است و این بدان معنی است که در مرحله شروع است و در حال حاضر در حال اجرا است.
**برآورده شده** : قول برطرف شده و ارزش بازگردانده شده است.
**رد شده** : این وضعیتی است که در اثر خطایی ایجاد می شود و این بدان معنی است که قول رد شده است.
نکته مهمی که در اینجا باید در نظر بگیرید این است که ارزش/وضعیتی که توسط قول داده می شود تغییر ناپذیر است و نمی تواند تغییر کند به این معنی که وعده ها اطمینان حاصل کنید که هیچ رفتار غیرمعمول وجود ندارد.

## چرا ما در جاوا اسکریپت از وعده استفاده می کنیم؟ {#Why-we-use-promise-in-JavaScript}

اگر از **بازگشت به جهنم آگاه نیستید**، پس بگذارید آنچه را که هست به اشتراک بگذارم. اول ، پاسخ به تماس یک تابع در یک عملکرد دیگر است. در اصل ، یک عملکرد پاسخ به تماس به عنوان یک آرگومان دوم در عملکردی که با دریافت نتایج انجام می شود ، منتقل می شود. بنابراین ، در بسیاری از سناریوها ، شما باید یک عملکرد پاسخ به تماس را لانه کنید و با افزایش لانه سازی ، رسیدگی به آن نزدیک می شود. از این رو ، ما این لانه سازی طولانی از توابع پاسخ به تماس را می نامیم**بازگشت به تماس جهنم** .
بنابراین ، یک وعده راهی برای جلوگیری از وضعیت جهنم پاسخ به تماس است. استفاده از وعده ها خوانایی بهتری و بهبود خطای را بهبود می بخشد. علاوه بر این ، شما می توانید با بازیابی مقدار برگشتی و انتقال آن مقدار به عملکرد بعدی در زنجیره ، عملکردهای ناهمزمان را انجام دهید.

## چگونه وعده در جاوا اسکریپت کار می کند؟ {#How-promise-works-in-JavaScript}

اکنون ، مکانیسم کار پشت وعده ها را درک کنیم. لطفاً نگاهی به نمودار ذکر شده در زیر بیندازید.

{{< figure align=center src="images/what-is-a-promise.png" alt="چگونه وعده در جاوا اسکریپت کار می کند؟?" >}}

طبق گردش کار ذکر شده در بالا ، جزئیات اجرای کاملاً واضح است. وعده اعدام را بر اثر خلقت خود آغاز می کند و در حالت تعلیق در انتظار پاسخ است. دو گزینه وجود دارد یا داده وجود خواهد داشت یا در پایان پردازش خطایی رخ خواهد داد. پس از دریافت داده ها ، در صورت بروز خطا به بلوک () ()) می رود و به بلوک .catch () می رود.

## چگونه یک وعده ایجاد کنیم؟ {#How-to-create-a-promise}

تاکنون ، ما مفهوم اساسی وعده را پوشش داده ایم. اکنون ، ما می خواهیم بررسی کنیم که چگونه می توانیم در جاوا اسکریپت یک وعده ایجاد کنیم. بیایید از سازنده وعده زیر برای ایجاد یک وعده استفاده کنیم.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
سازنده وعده به عنوان استدلالی که ابتدا دو آرگومان را انجام می دهد ، برطرف می شود و دیگری رد می کند. در صورت موفقیت ، روش حل () را فراخوانی می کند و در صورت بروز خطا یا رد به بلوک رد () می رود.
بیایید کمی عمیق برویم و کمی بیشتر آفرینش را کشف کنیم.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
در قطعه کد در بالا ، می توانید بیشتر تماس های API را در بلوک حل () انجام دهید.
حال ، بیایید الگوی اجرای یک وعده جاوا اسکریپت را ببینیم.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
در زیر خروجی قطعه کد فوق:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
بنابراین ، کد داخل بدن وعده همزمان کار می کند تا "اجرای همزمان" چاپ شود. در مرحله بعد ، بلوک () () به صورت غیر همزمان کار می کند و منتظر می ماند تا نتیجه حاصل شود اما اجرای برنامه متوقف نمی شود به همین دلیل "سلام کلمه" چاپ شده و قول اجرای آن را به تعویق می اندازد. پس از آن ، بلوک () مقادیر وعده داده شده را اجرا می کند و برمی گرداند. این داستان وعده های جاوا اسکریپت است. باز هم ، از آنجا که JavaScript یک موضوع واحد است ، از وعده ها برای انجام عملیات ناهمزمان به روش غیر مسدود کننده استفاده می شود.

## نتیجه
این پایان این آموزش **JavaScript**است. امیدوارم ایده خوبی از وعده های JavaScript داشته باشید. ما در جاوا اسکریپت**قول داده ایم ، چرا ما در جاوا اسکریپت از وعده استفاده می کنیم ،** چگونه وعده در جاوا اسکریپت**و چگونگی ایجاد یک وعده. علاوه بر این ، ما این موضوع را بیشتر در مورد استفاده و مقررات پیشرفته آن پوشش خواهیم داد. بنابراین ، در صورت آماده شدن خود برای یک جلسه مصاحبه ، این مقاله را طی کنید.

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][7] آموزش های جاوای اسکریپت مداوم را در مورد موضوعات مختلف هیجان انگیز ارائه می دهد. شما می توانید با دنبال کردن ما در سیستم عامل های رسانه های اجتماعی ما ، از جمله [Facebook][8] ، [LinkedIn][9] و [توییتر][10] در حلقه بمانید.

## سوالی بپرسید
شما می توانید در مورد سوالات یا سؤالات خود در مورد [Forum][11] به ما اطلاع دهید.

## سؤالات متداول
**وعده هایی در جاوا اسکریپت با مثال چیست؟** 
لطفاً این [لینک][3] را دنبال کنید تا بدانید وعده های موجود در JavaScript چیست.

## همچنین ببینید
  * [انواع داده های جاوا اسکریپت چیست؟ | راهنمای مبتدی][1]
  * [Kubernetes Multi-Tenancy & Architecture مبتنی بر کانتینر][12]
  * [محاسبات بدون سرور چیست؟ | معماری بدون سرور][13]
  * [چندتایی چیست؟ | چرا یک رویکرد چند مستاجر؟][14]
  * [انواع داده های جاوا اسکریپت چیست؟ | راهنمای مبتدی][15]



[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
