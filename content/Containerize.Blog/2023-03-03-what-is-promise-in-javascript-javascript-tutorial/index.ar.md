---
title: "ما هو الوعد في جافا سكريبت؟ | تعليمي جافا سكريبت" 
seoTitle: "ما هو الوعد في جافا سكريبت؟" 
description: "ما هو الوعد في جافا سكريبت؟ الوعد هو كتلة من الكود التي تعطي النتيجة النهائية لعملية غير متزامنة مثل معلق أو مكتملة أو رفض." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "ما هو الوعد في جافا سكريبت؟ الوعد هو كتلة من الكود الذي يعطي النتيجة النهائية لعملية غير متزامنة مثل الانتهاء أو رفض." 
url: /ar/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## هل تكافح لتعلم مفهوم وعود JavaScript؟ ستشرح هذه المقالة كيفية إنشاء وعد ، لماذا نستخدم الوعد في JavaScript والمزيد.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## ملخص
نأمل أن يكون لديك فهم أفضل لأنواع بيانات JavaScript][1]. الآن ، هذا منشور آخر في المدونة في فئة [البرمجة][2]. في هذا البرنامج التعليمي JavaScript ، سنذهب إلى **ما هو الوعد في JavaScript** ، بالإضافة إلى ذلك ، سنرى أيضًا العمليات غير المتزامنة ، واستخدام الوعود ، وكيفية إنشاء وعود في JavaScript. أولاً ، عملية/عملية غير متزامنة هي تلك التي تنفذ بشكل مستقل فيما يتعلق بالعمليات الأخرى ولا تخلق أي انسداد. لذلك ، تحتاج إلى التعامل مع العمليات غير المتزامنة وإلا فإنها قد تخلق تشوهات في رمز JavaScript الخاص بك. لذلك ، سوف نستكشف كيف يمكننا التعامل مع العمليات غير المتزامنة باستخدام الوعود.
سنغطي النقاط التالية في هذا البرنامج التعليمي JavaScript:
* **[ما هو الوعد في جافا سكريبت؟ أوضح الوعود][3]** 
* **[لماذا نستخدم الوعد في JavaScript؟][4]** 
* **[كيف يعمل الوعد في JavaScript؟][5]** 
* **[كيفية خلق وعد؟][6]** 

## ما هو الوعد في جافا سكريبت؟ أوضح الوعود {#What-is-promise-in-JavaScript-Promises-Explained}

الوعد هو كائن يمثل قيمة للطقس غير المتزامن الذي يتم حله أو رفضه أو في حالة معلقة. بكلمات أكثر بساطة ، يتم استخدام الوعود لإرجاع قيمة لم يتم إنتاجها بعد بواسطة كتلة غير متزامنة من الكود. في الواقع ، هناك ثلاث حالات وعد****ويمكن أن تكون في أي من الحالات التالية:
**معلقة** : الوعد في حالة معلقة مما يعني أنه في مرحلة البدء وهو في الوقت الحالي في التنفيذ.
**تم الوفاء به** : تم حل الوعد وتم إرجاع القيمة.
**تم رفضه** : هذه هي الحالة الناجمة عن أي خطأ مما يعني أن الوعد قد تم رفضه.
الشيء المهم الذي يجب مراعاته هنا هو أن القيمة/الحالة التي يتم إرجاعها بواسطة الوعد غير قابلة للتغيير ولا يمكن تغييرها ، مما يعني أن الوعود تتأكد من عدم وجود سلوك غير عادي.

## لماذا نستخدم الوعد في JavaScript؟ {#Why-we-use-promise-in-JavaScript}

إذا لم تكن على دراية بـ **Callback Hell**ثم دعني أشارك ما هو عليه. أولاً ، رد الاتصال هو وظيفة داخل وظيفة أخرى. في الأساس ، يتم تمرير وظيفة رد الاتصال كوسيطة ثانية في وظيفة تنفذ عند تلقي النتائج. لذلك ، في العديد من السيناريوهات ، تحتاج إلى تعشق وظيفة رد الاتصال ومع زيادة التعشيش ، يصبح من المستحيل التعامل معه. وبالتالي ، نسمي هذا التعشيش الطويل لوظائف رد الاتصال**Callback Hell** .
لذلك ، الوعد هو وسيلة لتجنب وضع الجحيم رد الاتصال. يعطي استخدام الوعود أفضل قابلية للقراءة وتحسين معالجة الأخطاء. علاوة على ذلك ، يمكنك التعامل بشكل أفضل مع العمليات غير المتزامنة عن طريق استرداد القيمة التي تم إرجاعها وتمرير هذه القيمة إلى الوظيفة التالية في السلسلة.

## كيف يعمل الوعد في JavaScript؟ {#How-promise-works-in-JavaScript}

الآن ، دعونا نفهم آلية العمل وراء الوعود. يرجى إلقاء نظرة على الرسم البياني المذكور أدناه.

{{< figure align=center src="images/what-is-a-promise.png" alt="كيف يعمل الوعد في JavaScript؟?" >}}

وفقًا لسير العمل المذكور أعلاه ، تكون تفاصيل التنفيذ واضحة تمامًا. يبدأ الوعد في التنفيذ عند إنشائها وهو في حالة معلقة في انتظار الرد. هناك خياران إما سيكون هناك بيانات أو سيكون هناك خطأ في نهاية المعالجة. عند استلام البيانات ، يذهب إلى. ثم كتلة () ويذهب إلى كتلة .catch () في حالة وجود خطأ.

## كيف تخلق وعد؟ {#How-to-create-a-promise}

حتى الآن ، قمنا بتغطية مفهوم الوعد الأساسي. الآن ، سوف نستكشف كيف يمكننا إنشاء وعد في JavaScript. دعنا نستخدم مُنشئ الوعد التالي لإنشاء وعد.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
يأخذ مُنشئ الوعود وظيفة كحجة تأخذ مرة أخرى وسيطتين أولاً ، ويحل والآخر رفض. إنه يستدعي طريقة Resolve () في حالة النجاح وتذهب إلى كتلة الرفض () في حالة الخطأ أو الرفض.
دعنا نذهب عميقا قليلا ونستكشف خلق الوعد أبعد قليلا.
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
في مقتطف الكود أعلاه ، يمكنك إجراء مكالمات API في كتلة Resolve ().
الآن ، دعونا نرى نمط تنفيذ وعد JavaScript.
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
فيما يلي إخراج مقتطف الرمز أعلاه:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
لذلك ، فإن الكود الموجود داخل هيئة الوعد يعمل بشكل متزامن بحيث يتم طباعة "التنفيذ المتزامن". بعد ذلك ، يعمل. then () بشكل غير متزامن وينتظر حتى يتم إنشاء النتيجة ولكن تنفيذ البرنامج لا يتوقف ولهذا السبب تم طباعة "Hello Word" وتأجيل تنفيذ الوعد. بعد ذلك ، ينفذ كتلة. ثم) القيم التي وعدت بها. هذه هي قصة وعود JavaScript. مرة أخرى ، نظرًا لأن JavaScript متلازمة واحدة ، يتم استخدام الوعود للتعامل مع العمليات غير المتزامنة بطريقة غير حظر.

## خاتمة
هذه هي نهاية هذا **JavaScript البرنامج التعليمي**. آمل أن يكون لديك فكرة جيدة عن وعود جافا سكريبت. لقد قمنا بتغطية **ما هو الوعد في JavaScript** ، لماذا نستخدم الوعد في JavaScript ،**كيف يعمل الوعد في JavaScript** ، وكيفية إنشاء وعد. علاوة على ذلك ، سوف نغطي هذا الموضوع أكثر فيما يتعلق باستخدامه المتقدم وأحكامه. لذلك ، اذهب من خلال هذا المقال في حال كنت تستعد لجلسة المقابلة.

## اتصل بنا
أخيرًا ، يقدم [Containize.com][7] دروسًا مستمرة في جافا سكريبت حول مختلف الموضوعات المثيرة. يمكنك البقاء في الحلقة من خلال متابعتنا على منصات الوسائط الاجتماعية لدينا ، بما في ذلك [Facebook][8] و [LinkedIn][9] و [Twitter][10].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][11].

## الأسئلة الشائعة
**ما هي الوعود في جافا سكريبت مع مثال؟** 
يرجى اتباع هذا [الرابط][3] لمعرفة الوعود في JavaScript.

## أنظر أيضا
  * [ما هي أنواع بيانات JavaScript؟ | دليل المبتدئين][1]
  * [Kubernetes Multi-Benancy & Contains القائم على الحاويات][12]
  * [ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم][13]
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][14]
  * [ما هي أنواع بيانات JavaScript؟ | دليل المبتدئين][15]



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
