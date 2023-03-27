---
title: "تعلم مفاهيم JavaScript الأساسية للمساعدة في حياتك المهنية" 
seoTitle: "JavaScript المفاهيم الأساسية" 
description: "اتبع هذا البرنامج التعليمي JavaScript لتعلم مفاهيم JavaScript الأساسية. تعد النطاقات والرفع والإغلاق مفاهيم أساسية للغاية ولكنها إلزامية في JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "اتبع هذا البرنامج التعليمي JavaScript لتعلم مفاهيم JavaScript الأساسية. تعد النطاقات والرفع والإغلاق مفاهيم أساسية للغاية ولكنها إلزامية في JavaScript." 
url: /ar/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## دعنا نتعلم بعض أساسيات JavaScript الأساسية التي يجب على المطور أن يعرفها. تستخدم لغة البرمجة المفسرة هذه على نطاق واسع لتطوير تطبيقات على مستوى المؤسسة.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript المفاهيم الأساسية">}}


## ملخص
JavaScript هي لغة نصية تستخدم لتطوير تطبيقات ديناميكية على الويب. نستخدم HTML و CSS لإنشاء مواقع ويب ثابتة بينما يتم استخدام JavaScript لإضافة التفاعل. في منشور المدونة السابق لدينا ، قمنا بتغطية [نموذج كائن الوثيقة][1] والآن سنغطي بعض المفاهيم الأساسية المهمة الأخرى  **JavaScript**  . يميل مطورو الويب إلى اختيار لغة البرمجة النصية هذه بسبب ميزاتها والأطر الغنية. بالإضافة إلى ذلك ، يمكنك القيام بالتطوير في النهاية الأمامية والخلفية من خلال تعلم JavaScript. ومع ذلك ، لا يمكنك تطوير تطبيقات الويب فقط وأيضًا تطبيقات الهاتف المحمول. سيساعدك هذا البرنامج التعليمي JavaScript إذا كنت تستعد لجلسة مقابلة. ومع ذلك ، فإن هذا الدليل يستحق القراءة لإضافة المزيد إلى دلو معرفتك.
سنغطي النقاط التالية في هذه المقالة:
*  **[ما هو الرفع في JavaScript][2]**  
*  **[النطاقات في جافا سكريبت][3]**  
*  **[إغلاق JavaScript][4]**  

## ما هو الرفع في جافا سكريبت {#What-is-hoisting-in-JavaScript}

تُعرف ظاهرة أخذ الوظيفة أو الإعلان المتغير أعلى النطاق الحالي باسم الرفع. هذا مفهوم حاسم للغاية ومعظم مطوري JavaScript ليسوا على دراية به. ومع ذلك ، فإن الشيء المهم الذي يجب ملاحظته هنا هو أن التصريحات الوظيفية/المتغيرة فقط يتم أخذها إلى الأعلى ، وليس الوظيفة/التهيئة المتغيرة.
لنأخذ مثالاً ونرى مقتطف الرمز أدناه ؛
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
في مثال الرمز أعلاه ، قمنا بإجراء استدعاء الوظيفة قبل إعلان الوظيفة ، ولكن على الرغم من أن الكود ينفذ بنجاح ويرجع ذلك إلى رفع جافا سكريبت. في الأساس ، خلال وقت الترجمة ، يقوم مترجم JavaScript بمسح الكود ، ويجمع جميع الوظائف/المتغيرات ، ووضعها في ذاكرة تسمى البيئة المعجمية. نفس الشيء يحدث مع المتغيرات.
```
name = "mustafa";
console.log(name);
var name;

```
وبالمثل ، تم إجراء التهيئة المتغيرة للاسم قبل إعلانها ، ويعمل الرمز دون أي خطأ. مرة أخرى ، خلال فترة الترجمة ، نظر مترجم JS في البيئة المعجمية للعثور على الإعلان المتغير وبالتالي نفذ الرمز.
لذلك ، إذا أعلنت المتغيرات مع الكلمات الرئيسية Let و Const ، فإن JavaScript ستقوم برفعها بشكل مختلف قليلاً.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
حدث الخطأ في مقتطف الرمز أعلاه. والسبب هو أن التهيئة لم يتم أثناء رفع هذا المتغير. قصة قصيرة طويلة ، تتم تهيئة جميع الإعلانات مع "غير محدد" بينما يتم الإعلان عن المتغيرات مع "Let" أو "const" في الرفع.

## نطاقات في جافا سكريبت {#Scopes-in-JavaScript}

النطاق هو أحد مفاهيم JavaScript الأساسية التي يجب على المطور معرفتها. ومع ذلك ، فإن العمل مع JavaScript Scopes ليس واضحًا ومختلف قليلاً. لذلك ، هناك ثلاثة أنواع من النطاقات في JavaScript وهذه هي كما يلي:
 **على مستوى الكتلة** : يحتوي المتغيرات المعلنة بـ "Let" أو "const" على نطاق مستوى الكتلة.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
لا يمكن الوصول إلى المتغير "A" خارج أقواس مجعد {} لأنه يحتوي على نطاق على مستوى الكتلة.
 **على مستوى الوظيفة** : المتغيرات المعلنة داخل وظيفة JavaScript لها النطاق المحلي.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
الشيء المهم الذي يجب ملاحظته هنا هو أن المتغيرات المعلنة بـ "Let" "const" و "var" لها نطاق الوظيفة داخل جسم الوظيفة.
 **على المستوى العالمي** : تصبح المتغيرات المعلنة خارج الوظيفة متغيرات عالمية. بغض النظر عما إذا كنت قد أعلنتهم باستخدام "Let" أو "const" أو "var" الكلمات الرئيسية. علاوة على ذلك ، يصبح المتغير متغيرًا عالميًا إذا تم الإعلان عنه دون استخدام أي كلمة رئيسية كما هو موضح في مقتطف الرمز أدناه:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## إغلاق JavaScript {#JavaScript-Closures}

هذا مفهوم مهم آخر يعزز معرفتك JavaScript حول النطاقات وتغليف البيانات. في أبسط أشكال ، تُعرف وظيفة داخل دالة باسم الإغلاق. يمكنك استدعاء الوظيفة الداخلية إغلاق. هذه الوظيفة الداخلية لها ثلاثة أنواع من النطاق:
 * لديها نطاقها الخاص على مستوى الكتلة.
 * يمكنه الوصول إلى متغيرات الوالدين.
 * المتغيرات في النطاق العالمي يمكن الوصول إليها أيضًا داخل الإغلاق.
 دعونا نرى كيفية إنشاء إغلاق:
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
يمكن الوصول إلى المتغير first_name داخل الوظيفة المسمى innerfunc ولكن لا يمكن للدالة الأصل الوصول إلى متغير Last_Name. يتيح هذا السلوك للمبرمجين إنشاء متغيرات خاصة في سلسلة النطاق.

## خاتمة
ننهي دليل JavaScript هذا هنا ونأمل أن يكون لديك فهم أفضل للمفاهيم الأساسية JavaScript  **. علاوة على ذلك ، فقد مررنا أيضًا من خلال إغلاق JavaScript ، والنطاقات في JavaScript**  ، ورفع. هناك العديد من المفاهيم المهمة الأخرى التي تعتبر إلزامية للمبتدئين. لذلك ، ستساعدك هذه المقالة إذا كنت تزدهر لتحسين أو تحديث مفاهيم JavaScript الخاصة بك. بالإضافة إلى ذلك ، يمكنك الذهاب إلى منشورات المدونة المذكورة في قسم "انظر أيضًا".

## اتصل بنا
أخيرًا ، يقدم [Containerize.com][5] دروسًا مستمرة في جافا سكريبت حول مختلف الموضوعات المثيرة. يمكنك البقاء في الحلقة من خلال متابعتنا على منصات الوسائط الاجتماعية لدينا ، بما في ذلك [Facebook][6] و [LinkedIn][7] و [Twitter][8].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][9].

## الأسئلة الشائعة
 **ما هي المفاهيم المهمة التي يجب تعلمها في JavaScript؟** 
يرجى اتباع هذا [دليل JavaScript [دليل][2] لمعرفة مفاهيم JavaScript الأساسية.

## أنظر أيضا
  * [ما هو DOM في JavaScript؟ | نموذج كائن الوثيقة][1]
  * [ما هو الوعد في جافا سكريبت؟ | تعليمي JavaScript][10]
  * [ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم][11]
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][12]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][13]
  * [ما هو async في انتظار JavaScript؟ | دليل JavaScript][14]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][15]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][16]
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][17]
  * [ما هو async في انتظار JavaScript؟ | دليل JavaScript][18]



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
