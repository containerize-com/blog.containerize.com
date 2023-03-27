---
title: "ما هو DOM في JavaScript؟ | طراز كائن المستند" 
seoTitle: "ما هو DOM في JavaScript؟" 
description: "ما هو DOM في JavaScript؟ سيوضح هذا الدليل نموذج كائن المستند ، وخصائص DOM ، ومستويات DOM ، وكيفية الوصول إلى عناصر DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "ما هو DOM في JavaScript؟ سيوضح هذا الدليل نموذج كائن المستند ، وخصائص DOM ، ومستويات DOM ، وكيفية الوصول إلى عناصر DOM." 
url: /ar/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## يتم التعامل مع تمثيل مستند HTML داخل متصفح الويب كشجرة HTML DOM. إنها سلسلة من الكائنات وتحدد بنية صفحة الويب.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="ما هو DOM في JavaScript؟?">}}


## ملخص
مرحبًا بك في منشور آخر مثير في المدونة في سلسلة [JavaScript Programming][1]. في هذه المقالة ، سوف نتطرق إلى مفهوم أساسي ولكن أساسي لتطوير الويب. نعم ، سنقوم بتغطية نموذج كائن المستند في JavaScript. في الماضي ، قمنا بنشر دروس في JavaScript والتي تعتبر إلزامية لبدء التطوير باستخدام لغة JavaScript. لذلك ، نقترح عليك قراءة منشور المدونة هذا بدقة حتى لا تفوت أي شيء يتعلق بهذا المفهوم المهم. لنبدأ هذا الدليل واكتشف  **ما هو DOM في JavaScript**  ، خصائص DOM ، وكيف يمكنك التفاعل معه برمجيًا.
سنغطي الموضوعات التالية في دليل JavaScript هذا:
*  **[ما هو نموذج كائن المستند (DOM)؟][2]**  
*  **[مستويات DOM][3]**  
*  **[ما هي خصائص DOM وكيفية الوصول إليها؟][4]**  

## ما هو نموذج كائن المستند (DOM)؟ {#What-is-Document-Object-Model}

دوم يقف ل؟  **نموذج كائن المستند (DOM)**  هو تمثيل صفحة ويب داخل متصفح الويب. ببساطة ، يُعرف التمثيل الهرمي لعناصر وثيقة HTML في المتصفح كنموذج كائن المستند. يتم تشكيله في شكل شجرة يتم إنشاؤه بالفعل بواسطة متصفح الويب. يتكون من مختلف العقد المتصلة ببعضها البعض لتشكيل شكل شجرة. بالإضافة إلى ذلك ، فإن عناصر DOM لها سمات وأحداث مرتبطة بها.
في الواقع ، DOM هي واجهة برمجة تقوم بتكوين الهيكل المنطقي لصفحة الويب ويملي الطريق للوصول إلى عناصر الصفحة. في الأساس ، لا يتعرف JavaScript على علامات HTML مثل العنوان ، H1 و E.

## مستويات DOM {#DOM-levels}

سوف يوضح هذا القسم مستويات مختلفة من DOM. أولاً ، يوجد كائن نافذة في متصفح موجود دائمًا في الأعلى ، ثم هناك عقدة مستند. دعونا نلقي نظرة على الصورة أدناه:

{{< figure align=center src="images/DOM.png" alt="مستويات DOM">}}

حسنًا ، يمكنك رؤية عناصر DOM في الصورة أعلاه. النافذة والمستند هما كائنات المتصفح ذات المستوى الأعلى ، ثم لدينا عنصر HTML كجذر. عند الانتقال ، لدينا عقد الرأس والجسم ، وتنتمي عقدة العنوان إلى عقدة الرأس وعقدة الجسم تحتوي على جميع العقد التي يتم تقديمها ومرئية في متصفح الويب. علاوة على ذلك ، تحتوي عناصر الجسم على سمات يمكننا رؤيتها في الصورة مثل سمة "HREF" التي تحتوي على "HREF". وبالمثل ، تحتوي عقد DOM الأخرى على سمات مختلفة مثل IMG و META والمزيد.

## ما هي خصائص DOM وكيفية الوصول إليها؟ {#What-are-DOM-properties-and-how-to-access-them}

حتى الآن ، توصلنا إلى إجابة لما هو DOM في JavaScript ، ومستويات DOM ، وقد مررنا أيضًا بعقد DOM. في هذا القسم ، سنذهب إلى خصائص DOM وسنرى كيف يمكننا التفاعل معها. يحتوي كل عنصر DOM على قيمة مرتبطة بها مثل علامة "P" لها خاصية نصية ، وتتميز علامة IMG بالصورة وما إلى ذلك. يتم استخدام طرق JavaScript للوصول إلى قيم العقد. علاوة على ذلك ، يمكنك إضافة/إزالة مستمعي الأحداث إلى عناصر DOM.
يمكنك العثور على خصائص DOM****:
 **innerhtml** : يتم استخدام هذه الخاصية لتعيين أو جلب محتوى HTML لعقدة DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
 **innertext** : استخدم خاصية DOM هذه للوصول إلى المحتوى النصي لعنصر HTML أو تعيينه.
```
let textualContent = document.getElementById("customID").innerText;
```
 **ParentElement** : يمكنك استخدام هذه الخاصية للوصول إلى العقدة الأصل للعنصر.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
 **النمط** : قم بتحديث سمة النمط لعنصر ما.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
 **العنوان** : استخدم هذه الخاصية لتحديث عنصر عنوان DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 فيما يلي بعض الطرق التي يمكننا استخدامها للتفاعل مع JavaScript DOM:
 **AddEventListener ()** : يتم استخدام طريقة DOM هذه لإرفاق معالج الحدث بعنصر.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getAttribute ()** : يتم استخدام طريقة DOM هذه لإرفاق معالج الحدث بعنصر.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getElementById ()** : طريقة للحصول على عنصر محدد مع "المعرف" المعطى.
```
let element = document.getElementById("myID");
```
 **QuerySelector ()** : استخدم هذه الطريقة للحصول على عنصر الطفل الأول الذي يتم مطابقته مع محدد CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
 **ToString ()** : يمكنك استخدام هذه الطريقة لتحويل عنصر إلى سلسلة.
وبالمثل ، هناك العديد من الأساليب والخصائص الأخرى التي يمكنك استكشافها.

## خاتمة
ننهي هذا البرنامج التعليمي Javasxcript هنا على أمل أن يكون لديك فهم جيد لـ  **ما هو DOM في JavaScript** . لقد مررنا أيضًا بـ **DOM ، مستويات DOM ، HTML DOM Tree و DOM Properties**  . يعد منشور المدونة هذا ضروريًا للغاية للمبتدئين الذين يتطلعون إلى قبضة قوية على مفاهيم Javascrit. بالإضافة إلى ذلك ، هناك مقالات أخرى ذات صلة يمكنك العثور عليها في قسم "انظر أيضًا".

## اتصل بنا
أخيرًا ، يقدم [Containerize.com][5] دروسًا مستمرة في جافا سكريبت حول مختلف الموضوعات المثيرة. يمكنك البقاء في الحلقة من خلال متابعتنا على منصات الوسائط الاجتماعية لدينا ، بما في ذلك [Facebook][6] و [LinkedIn][7] و [Twitter][8].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][9].

## الأسئلة الشائعة
 **ما هو DOM المستخدم في JavaScript؟** 
يمكنك زيارة هذا [الرابط][2] للحصول على إجابة مفصلة على هذا السؤال.

## أنظر أيضا
  * [ما هو الوعد في جافا سكريبت؟ | تعليمي JavaScript][10]
  * [ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم][11]
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][12]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][13]
  * [ما هو async في انتظار JavaScript؟ | دليل JavaScript][14]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][15]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][16]
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][17]



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
