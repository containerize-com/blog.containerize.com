---
title: "ما هو ASYNC في انتظار JavaScript؟ | دليل JavaScript" 
seoTitle: "ما هو ASYNC في انتظار JavaScript؟" 
description: "ما هو ASYNC في انتظار JavaScript؟ يتم استخدام الكلمات الرئيسية Async & Await لتشغيل العمليات غير المتزامنة بشكل أفضل من الوعود التقليدية في JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "ما هو ASYNC في انتظار JavaScript؟ يتم استخدام الكلمات الرئيسية Async & Await لتشغيل العمليات غير المتزامنة بشكل أفضل من الوعود التقليدية في JavaScript." 
url: /ar/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 قدمت JavaScript Async/في انتظار وهو غلاف حول الوعود. يتم استخدام Async/Await لاستهلاك واجهات برمجة التطبيقات القائمة على الوعود بطريقة حديثة وأبسط.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="ما هو ASYNC في انتظار JavaScript؟?">}}


## ملخص
لقد غطينا [وعود JavaScript][1] في منشور المدونة السابق لدينا ويجب عليك زيارتك إذا كنت ترغب في الحصول على فهم واضح للمفهوم وراء وعود JavaScript. في هذه السلسلة من البرامج التعليمية [JavaScript][2] ، نحن هنا مع دليل JavaScript آخر من شأنه أن يوضح الميزات الحديثة لـ JavaScript Async/في انتظار. منشور المدونة هذا مخصص لأولئك الذين لديهم معرفة مسبقة بوعود JavaScript. علاوة على ذلك ، سنحاول تغطية  **ما هو غير متزامن/ننتظر في JavaScript** ، وعندما نحتاج إلى استخدام Async/الانتظار. بالإضافة إلى ذلك ، سنقوم أيضًا بتغطية الأخطاء مع Async/في انتظار. لذلك ، قم بإعطاء قراءة شاملة لهذا **JavaScript Async/في انتظار البرنامج التعليمي**  لتحديد هذا المفهوم الذي تم فحصه.
سنذهب من خلال الأقسام التالية في هذا التعليمي في JavaScript Async:
*  **[ما هو غير متزامن/في انتظار JavaScript | بناء الجملة Asyait Asyait][3]**  
*  **[متى تستخدم Async/في انتظار؟][4]**  
*  **[خطأ معالجة مع Async/Await][5]**  

## ما هو async/في انتظار JavaScript | Async في انتظار بناء الجملة {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

تم إصدار ECMASCRIPT 2017 ميزات جديدة لـ JavaScript و Async/Await هي واحدة من أكثر هذه الميزات استخدامًا على نطاق واسع. تم بناء Async/Await على رأس الوعود وهي في الواقع وسيلة حديثة للتعامل مع وعود JavaScript.
دعونا نرى كيفية استخدام الكلمات الرئيسية ASYNC/في انتظار رمز JavaScript:
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
حسنًا ، تعني الكلمة الرئيسية Async في بداية الوظيفة أن هذه الوظيفة ستعود إلى الوعد. لذلك ، يتم استخدام الكلمة الرئيسية في انتظار دائمًا داخل جسم وظيفة Async لإيقاف تنفيذ الوظيفة حتى يحل الوعد. الشيء المهم الذي يجب ملاحظته هنا هو أنه لا يمكنك استخدام كلمة في انتظار الكلمة الرئيسية داخل نص وظيفة منتظمة. ومع ذلك ، يمكنك استخدام الانتظار فقط مع الوظائف غير المتزامنة المعلنة مع الكلمة الرئيسية Async.

## متى تستخدم Async/في انتظار؟ {#When-to-use-AsyncAwait}

حتى الآن ، لديك إجابة على  **ما الذي ينتظره المتزامن في JavaScript**  . نظرًا لأن هذا ليس سوى غلاف حول JavaScript التقليدي ، لذا يمكنك استخدام هذه الطريقة الجديدة لإنشاء وعودًا بطريقة أكثر نظافة وقابلة للقراءة. بالإضافة إلى ذلك ، يمكنك التخلص من العديد من الوعد. تُغلف الكلمة الرئيسية في انتظار بيان .Then () في سطر واحد.

## خطأ مع ذلك مع Async/في انتظار {#Error-handling-with-AsyncAwait}

تعتبر معالجة الأخطاء مهمة مهمة عندما يتعلق الأمر بتطوير البرمجيات على مستوى المؤسسة. هناك طرق متعددة لالتقاط الأخطاء في نهج Async/الانتظار.

{{< figure align=center src="images/async-await.png" alt="جرب Catch Async في انتظار JavaScript">}}

 **جرب Catch Async في انتظار JavaScript** : لا شيء جديد مع نهج معالجة الأخطاء هذا. ومع ذلك ، يمكنك استخدام كتلة Try/Catch داخل وظيفة Async كما هو موضح في مقتطف الرمز أدناه:
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
باستخدام كتلة Try/Catch ، يمكنك التقاط الاستثناءات داخل جسم وظيفة Async.
بينما ، هناك نهج آخر للتعامل مع الأخطاء التي يمكنك من خلالها إلحاق كتلة .catch () في نهاية استدعاء الوظيفة. نظرًا لأن Async/في انتظار الوعد ، لذلك يمكنك التقاط الأخطاء في كتلة .catch ().
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

## خاتمة
نحن ننهي هذا  **JavaScript Async في انتظار البرنامج التعليمي** . آمل أن يكون لديك فهم أفضل لـ **ما الذي ينتظره المتزامن في JavaScript**  . بالإضافة إلى ذلك ، لقد مررنا ببناء JavaScript Async ينتظر بناء جملة المصدر أقل تعقيدًا. يتم استخدام ميزة JavaScript هذه على نطاق واسع بسبب استخدامها الغني وأدائه. في الأيام المقبلة ، سنكتب المزيد من ميزات ومفاهيم JavaScript حتى تتمكن من الحصول على أمر قوي على مفاهيم JS. علاوة على ذلك ، هناك بعض المقالات الأخرى المثيرة للاهتمام المذكورة في قسم "انظر أيضا".

## اتصل بنا
أخيرًا ، يقدم [Containerize.com][6] دروسًا مستمرة في جافا سكريبت حول مواضيع مثيرة مختلفة. يمكنك البقاء على اطلاع بمتابعتنا على منصات الوسائط الاجتماعية لدينا ، بما في ذلك [Facebook][7] و [LinkedIn][8] و [Twitter][9].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][10].

## الأسئلة الشائعة
 **ما هو async في انتظار javaScript مع مثال؟** 
يمكنك زيارة هذا [الرابط][3] لفهم مفهوم Async في انتظار.
 **ما الذي ينتظره المتزامن مقابل الوعد؟** 
 * ASYNC/AFT يجعل رمز المصدر أكثر وضوحًا وقابلة للقراءة بالمقارنة مع الوعود التي يمكن أن تجعل التسلسل للوعود رمز المصدر في حالة من الفوضى.
 * معالجة الأخطاء تشبه إلى حد كبير في كلا النهجين.
 * تصحيح الأخطاء أقل صعوبة في Async في انتظار.
 * الوعود الحفاظ على الدول مثل معلق ، حل ، أو رفض. في حين أن Async/الانتظار إما حل أو رفض.

## أنظر أيضا
  * [ما هو الوعد في جافا سكريبت؟ | تعليمي JavaScript][1]
  * [ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم][11]
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][12]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][13]
  * [كيفية دمج chatgpt مع أوراق Google][14]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][15]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][16]
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][17]



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
