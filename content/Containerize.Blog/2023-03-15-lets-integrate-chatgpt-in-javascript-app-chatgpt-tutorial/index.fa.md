---
title: "بیایید Chatgpt را در برنامه JavaScript ادغام کنیم | آموزش chatgpt" 
seoTitle: "یکپارچه سازی چت در برنامه JavaScript" 
description: "به سادگی \"NPM I Chatgpt\" را اجرا کنید و از OpenAI Chatbot در برنامه Node.js خود استفاده کنید. برای یادگیری نحوه ادغام chatgpt در برنامه JavaScript این راهنما را دنبال کنید." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "به سادگی \"NPM I Chatgpt\" را اجرا کنید و از OpenAI Chatbot در برنامه Node.js خود استفاده کنید. برای یادگیری نحوه ادغام chatgpt در برنامه JavaScript این راهنما را دنبال کنید." 
url: /fa/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## نرم افزار کسب و کار خود را با ادغام یک چت بابات ویروسی مبتنی بر GPT-3 ساده کنید. این آموزش chatgpt مراحل ادغام و قطعه کد را نشان می دهد.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="chatgpt را در برنامه JavaScript ادغام کنید">}}


## بررسی اجمالی
سلام خوانندگان! از پاسخ بیش از حد شما به پست های وبلاگ که ما در ادغام [chatgpt][1] منتشر کردیم بسیار سپاسگزارم. ما در اینجا با یکی دیگر از آموزش های مفید **chatgpt  **به دنبال علاقه شما هستیم. علاوه بر این ، ما در یک حلقه برای انتشار مقالات مفید برای دانشگاهیان و حرفه شما خواهیم بود. با این حال ، ما یک [سری][20] از آموزش های JavaScript را شروع کرده ایم ، بنابراین بهترین زمان برای نوشتن راهنما است که نشان می دهد چگونه **  chatgpt را در JavaScript AQPP  **به صورت برنامه ای ادغام می کند. علاوه بر این ، ما قطعه کد را برای ساخت این عملکرد GPT-3 بر اساس**   ویروسی chatbot** می نویسیم. برای این منظور ، ما عملکرد ChatGPT را در یک برنامه node.js فعال خواهیم کرد. بنابراین ، یک سطح اساسی دانش قبلی Node.js یک مزیت است در حالی که این راهنما را طی می کنید.
بخش های زیر در این آموزش chatgpt پوشش داده می شود:
  * **[پیش نیازها - بسته بندی JavaScript Chatgpt][2]**
  * **[ادغام chatgpt با برنامه node.js][3]**

## پیش نیازها-بسته بندی JavaScript Chatgpt   {#پیش نیاز --- chatgpt-javascript-wrapper-}
در این بخش الزامات لازم برای فعال کردن ادغام chatGPT در یک برنامه مبتنی بر node.js نشان داده شده است. مورد نیاز ساده و نصب روی سیستم شما آسان است.
در زیر پیش نیازهای لازم برای تمرین این ادغام chatgpt javaScript:

 * [nodejs4](>= 18)

 * [NPM5](>=9)
پس از نصب پیش نیازهای فوق ، مرحله بعدی دریافت یک کلید API OpenAI است. این کلید برای ایجاد درخواست های API به برنامه نویسی ChatGPT استفاده می شود. بنابراین ، لطفاً برای یادگیری نحوه به دست آوردن کلید API OpenAI در صورت عدم اطلاع از این روش ، به این [لینک][6] مراجعه کنید.
لطفاً کلید API خود را در یک مکان امن نگه دارید و این همه برای مرحله مورد نیاز است.

## chatgpt یکپارچه سازی با برنامه node.js   {#chatgpt-integration- با node.js-application}
اکنون ، همه ما روی  **ادغام Chatgpt در برنامه JavaScript به صورت برنامه ای تنظیم شده ایم.**  ابتدا ترمینال را باز کنید و دستور زیر را اجرا کنید:
```
npm i chatgpt
```
پس از اجرای موفقیت آمیز ، مراحل زیر و قطعه کد را دنبال کنید تا درخواست مدل GPT-3 را برای تعامل با ChatGPT به صورت برنامه ای انجام دهید:
 * chatgptapi را وارد کنید.
 * سازنده را با کلید API OpenAI خود اولیه کنید.
 * برای ارسال پیام به مدل GPT-3 و دریافت پاسخ ، از روش SendMessage استفاده کنید.
 * پاسخ را نمایش دهید.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
قطعه کد فوق را در پرونده سرور اصلی خود کپی و چسبانده و دستور زیر را در ترمینال خود اجرا کنید:
```
node index.js
```
**توجه داشته باشید**: لطفاً ("نوع": "ماژول" ،) را به پرونده بسته خود اضافه کنید. در صورت بروز خطایی "نمی توانید از بیانیه واردات خارج از ماژول استفاده کنید".
می توانید خروجی را در تصویر زیر مشاهده کنید:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="آموزش chatgpt">}}

علاوه بر این ، این بسته بندی JavaScript Chatgpt به شما امکان می دهد مکالمات را پیگیری کرده و پیام های پیگیری را ارسال کنید. تنها کاری که شما باید انجام دهید این است که "ParentMessageId" را در بدنه درخواست همانطور که در قطعه کد زیر نشان داده شده است ، منتقل کنید:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
به همین ترتیب ، می توانید بسیاری از روشهای دیگر ارائه شده [اینجا][7] را کشف کنید. این ادغام chatbot OpenAi می تواند یک رقابت رقابتی به برنامه سطح سازمانی شما بدهد.

## نتیجه
این نکته ما را به پایان این آموزش **chatgpt  **می رساند. امیدواریم که شما یاد گرفته باشید که چگونه **  chatgpt را در برنامه JavaScript  **به صورت برنامه ای ادغام کنید. علاوه بر این ، شما قطعه کد کار را دارید که می توانید در دستگاه محلی خود تست کنید. اگر شما در حال یادگیری**   ادغام chatgpt** در برنامه node.js خود هستید ، این پست وبلاگ دارایی است.

## با ما ارتباط برقرار کنید
سرانجام ، [Containerize.com][8] به طور مداوم پست های وبلاگ را در موضوعات مختلف می نویسد. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][9] ، [LinkedIn][10] و [توییتر][11] دنبال کنید.

## سوالی بپرسید
شما می توانید در مورد سؤالات یا سؤالات خود در مورد [انجمن][12] به ما اطلاع دهید.

## سؤالات متداول
**چگونه chatgpt را با JavaScript ادغام کنیم؟**
لطفاً برای یادگیری مراحل و قطعه کد برای ادغام ChatGPT در برنامه JavaScript به صورت برنامه ای ، این chatgpt [آموزش][2] را دنبال کنید.

## همچنین ببینید
  * [مقدمه ای بر هوش مصنوعی | AI چیست؟][13]
  * [نحوه ادغام chatgpt با برگه های Google][14]
  * [نحوه استفاده از ChatGPT در VScode | کد پسوند vScode GPT][15]
  * [OpenAi Chatbot GPT-3 چیست | chatgpt یک انقلاب ai][16]
  * [Google Docs ادغام با ChatGPT | Openai GPT-3][17]
  * [5 چارچوب بالای منبع باز منبع باز][18]
  * [AI تولیدی چیست | هوش مصنوعی تولیدی][19]

  
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
