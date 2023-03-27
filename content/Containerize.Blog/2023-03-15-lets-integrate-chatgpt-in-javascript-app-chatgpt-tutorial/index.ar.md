---
title: "دعنا ندمج ChatGpt في JavaScript App | تعليمي ChatGPT" 
seoTitle: "دمج chatgpt في تطبيق JavaScript" 
description: "ما عليك سوى تشغيل \"NPM I ChatGPT\" وابدأ في استخدام Openai chatbot في تطبيق Node.js الخاص بك. اتبع هذا الدليل لمعرفة كيفية دمج chatgpt في تطبيق JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "ما عليك سوى تشغيل \"NPM I ChatGPT\" وابدأ في استخدام Openai chatbot في تطبيق Node.js الخاص بك. اتبع هذا الدليل لمعرفة كيفية دمج chatgpt في تطبيق JavaScript." 
url: /ar/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## تبسيط برنامج عملك من خلال دمج chatbot الفيروسي GPT-3. يوضح هذا البرنامج التعليمي ChatGPT خطوات التكامل ومقتطف الكود.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="دمج chatgpt في تطبيق JavaScript">}}


## ملخص
مرحبا القراء! شكرًا جزيلاً على ردك الساحق على منشورات المدونة التي نشرناها على [chatgpt][1]. نحن هنا مع تعليمي آخر مفيد  **ChatGpt** بعد اهتمامك. بالإضافة إلى ذلك ، سنكون في حلقة لنشر مقالات مفيدة لأكاديميك وحياتك المهنية. ومع ذلك ، فقد بدأنا [سلسلة][20] من البرامج التعليمية JavaScript ، لذا فهو أفضل وقت لكتابة دليل يوضح كيفية دمج ChatGPT في JavaScript AQPP  **برمجيًا. علاوة على ذلك ، سوف نكتب مقتطف الكود لجعل وظيفة chatbot الفيروسية** ****. لهذا الغرض ، سنمكّن وظائف chatgpt في تطبيق Node.js. لذلك ، فإن المستوى الأساسي من المعرفة السابقة لـ Node.js هو زائد أثناء المرور بهذا الدليل.
سيتم تغطية الأقسام التالية في هذا البرنامج التعليمي chatgpt:
*  **[المتطلبات المسبقة - ChatGpt JavaScript Wrapper][2]**  
*  **[chatgpt integration مع تطبيق node.js][3]**  

## المتطلبات المسبقة - chatgpt javaScript Wrapper {#Pre-requisites---ChatGPT-JavaScript-wrapper-}

يوضح هذا القسم المتطلبات اللازمة لتمكين تكامل ChatGPT في تطبيق Node.js. المتطلبات واضحة وسهلة التثبيت على نظامك.
فيما يلي المدى المسبق لممارسة تكامل chatgpt JavaScript هذا:

 * [NodeJS4](>= 18)

 * [NPM5](>=9)
 
بمجرد تثبيت المتطلبات المسبقة أعلاه ، فإن الخطوة التالية هي الحصول على مفتاح Openai API. يتم استخدام هذا المفتاح لتقديم طلبات API إلى ChatGPT برمجيًا. لذلك ، يرجى زيارة هذا [الرابط][6] لمعرفة كيفية الحصول على مفتاح Openai API في حالة عدم معرفة الإجراء.
يرجى الاحتفاظ بمفتاح API الخاص بك في مكان آمن وهذا كل شيء لمرحلة المتطلبات.

## chatgpt تكامل مع تطبيق node.js {#ChatGPT-integration-with-Node.js-application}

الآن ، تم تعييننا جميعًا على  **دمج chatgpt في تطبيق JavaScript برمجيًا.**  أولاً ، افتح الجهاز وتشغيل الأمر التالي:
```
npm i chatgpt
```
عند التشغيل الناجح ، اتبع الخطوات التالية ومقتطف الرمز لتقديم طلب إلى نموذج GPT-3 للتفاعل مع ChatGPT برمجيًا:
 * استيراد chatgptapi.
 * تهيئة المنشئ باستخدام مفتاح Openai API الخاص بك.
 * استدعاء طريقة sendMessage لإرسال رسالة إلى نموذج GPT-3 واستلام الاستجابة.
 * عرض الاستجابة.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
انسخ والصق مقتطف الرمز أعلاه في ملف الخادم الرئيسي الخاص بك وقم بتشغيل الأمر التالي إلى المحطة الخاصة بك:
```
node index.js
```
 **ملاحظة** : الرجاء إضافة ("type": "الوحدة النمطية" ،) في ملف package.json الخاص بك في حالة حصولك على خطأ "لا يمكن استخدام عبارة الاستيراد خارج وحدة نمطية".
يمكنك رؤية الإخراج في الصورة أدناه:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="تعليمي ChatGPT">}}

بالإضافة إلى ذلك ، يتيح لك Wrapper chatgpt JavaScript تتبع المحادثات وإرسال رسائل المتابعة. الشيء الوحيد الذي عليك القيام به هو تمرير "ParentMessageId" في هيئة الطلب كما هو موضح في مقتطف الرمز أدناه:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
وبالمثل ، يمكنك استكشاف العديد من الطرق الأخرى المعروضة [هنا][7]. يمكن أن يعطي تكامل Openai chatbot ميزة تنافسية لتطبيق مستوى المؤسسة.

## خاتمة
هذه النقطة تقودنا إلى نهاية هذا البرنامج التعليمي  **ChatGPT** . نأمل أن تكون قد تعلمت كيفية دمج ChatGPT في تطبيق JavaScript **برمجيًا. علاوة على ذلك ، لديك مقتطف رمز العمل الذي يمكنك اختباره على الجهاز المحلي الخاص بك. يعد منشور المدونة هذا أحد الأصول إذا كنت تزدهر لتعلم**  تكامل ChatGPT**في تطبيق Node.js الخاص بك.

## اتصل بنا
أخيرًا ، [Containerize.com][8] يكتب باستمرار منشورات المدونة حول مواضيع مختلفة. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][9] و [LinkedIn][10] و [Twitter][11].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][12].

## الأسئلة الشائعة
 **كيفية دمج chatgpt مع JavaScript؟** 
يرجى اتباع ChatGPT [البرنامج التعليمي][2] لمعرفة الخطوات ومقتطف الرمز لدمج ChatGPT في تطبيق JavaScript برمجيًا.

## أنظر أيضا
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][13]
  * [كيفية دمج chatgpt مع أوراق Google][14]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][15]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][16]
  * [تكامل مستندات Google مع ChatGPT | Openai GPT-3][17]
  * [ما هي أفضل 5 أطر AI مفتوحة المصدر][18]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][19]



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
