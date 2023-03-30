---
title: "ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم" 
seoTitle: "ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم" 
description: "أتمتة البنية التحتية للواجهة الخلفية ، انسى متاعب إدارة وصيانة الخوادم. اختر بنية الخادم لتبسيط تطوير البرمجيات." 
date: Fri, 24 Feb 2023 12:48:19 +0000
author: muhammadmustafa
summary: "أتمتة البنية التحتية الخلفية ، وننسى متاعب إدارة & amp ؛ الحفاظ على الخوادم. اختر بنية الخادم لتبسيط تطوير البرمجيات." 
url: /ar/what-is-serverless-computing-serverless-architecture/
categories: ['Programming']
---

## أتمتة البنية التحتية للواجهة الخلفية ، وتنسى متاعب إدارة الخوادم والصيانة. اختر بنية الخادم لتبسيط تطوير البرمجيات.

{{< figure align=center src="images/What-is-Serverless-computing-Serverless-Architecture.png" alt="What is Serverless computing? ">}}


## ملخص
مزايا بدون خادم حقيقية. دعنا نقول أن عملك [Software][1] ينمو بوتيرة عالية وستجد منصة تتحمل مسؤولية إدارة موارد خادم البرنامج وصيانتها وتوسيع نطاقها. سيكون سيناريو رائع حيث ستجد نفسك مسترخيًا من إدارة الواجهة الخلفية والتركيز على مزيد من التطورات في التطبيقات. تميل المؤسسات المشاركة في [تطوير التطبيقات السريعة (RAD)][2] إلى اختيار بنية الخادم. لذلك ، سنذهب للعثور على إجابة على **ما هو الحوسبة بدون خادم**وستحاول أيضًا تغطية جوانبها الأخرى. بحلول نهاية منشور المدونة هذا ، سيكون لديك فهم قوي للهندسة المعمارية**بدون خادم** وحالات الاستخدام الخاصة به وامتيازاتها.
ستتم مناقشة الأقسام التالية في هذا الدليل:
* **[ما هي الحوسبة بدون خادم؟][3]** 
* [ **Serverless vs Containers و Kubernetes** ][4]
* **[حالات الاستخدام بدون خادم][5]** 
* **[فوائد أعمال الحوسبة بدون خادم][6]** 

## ما هي الحوسبة بدون خادم؟ {#What-is-serverless-computing}

تعد الحوسبة/الهندسة المعمارية بدون خادم طريقة للمطورين لإنشاء برنامج على مستوى المؤسسة. في هذه الطريقة ، لا يلزم المشاركة في إدارة وتثبيت موارد الواجهة الخلفية بدلاً من أن يظلوا مركزين على بناء منطق أعمال التطبيق. لذلك ، يقوم أي مزود خدمة سحابة بإدارة وصيانة الموارد الخلفية. وفقًا لهذا النموذج ، فإنك تدفع مقابل هذه الخدمات ويعتمد الدفع على الاستخدام. هذا النهج قابل للتكيف بسهولة ويحصل على شعبية بين المطورين.

{{< figure align=center src="images/server.png" alt="الهندسة المعمارية بدون خادم">}}

في الواقع ، هناك تطورات سريعة لوحظت في أدوات وتقنيات تطوير البرمجيات. يمكنك الاستفادة من خيار السقالات الغني الذي يسرع عمليات التطوير. لذلك ، توصل مختلف مقدمي الخدمات السحابية إلى بنية **بدون خادم** مما يمنح الحرية للمطورين فيما يتعلق بإدارة الخادم. بالإضافة إلى ذلك ، يولي المطورون أقصى درجات الاهتمام لكتابة منطق العمل للتطبيق وكتابة طرق الواجهة الخلفية لرسم خريطة للطلبات إلى النظام الأساسي بدون خادم.

## حاويات الخوادم و kubernetes {#Serverless-vs-Containers}

الحاوية هي مثيل لصورة Docker التي تدير التطبيق. إن حاوية أي تطبيق يقلل من النفقات العامة لنشر التطبيق. ومع ذلك ، يتم تشغيل تطبيق الحاويات على أي منصة بطريقة موحدة ويمكنك نقل الحاويات إلى أي منصة أخرى دون القلق بشأن البنية التحتية الأساسية.
**بنية الخادم** وتقدم الحاويات بعض الأحكام المماثلة للمطورين. كل من البيئات ناقص متاعب نشر التطبيق. علاوة على ذلك ، تعتبر هذه النظم الإيكولوجية أفضل من الأجهزة الافتراضية (VMS). بالإضافة إلى ذلك ، يتم تحجيم الموارد على أساس الاستخدام في الخادم ، بينما يتعين عليك توسيع نطاق موارد الخادم يدويًا في الحاوية.
دعنا نتحدث عن [kubernetes][7] وهو برنامج مفتوح المصدر الذي يعمل أتمتة إدارة الحاويات ونشره. في العديد من السيناريوهات ، تقوم الحاويات بتشغيل تطبيقات بدون خادم ولكن [Kubernetes][7] لا تتعامل مباشرة مع الحاويات التي تعمل على تشغيل تطبيقات الخادم. ومع ذلك ، هناك امتدادات تدمج [Kubernetes][7] مع مزودي الخدمة السحابية والتعامل مع التحجيم ، وتوجيه الشبكة ، والمزيد.

## حالات الاستخدام بدون خادم {#Serverless-use-cases}

هناك العديد من السيناريوهات التي تجعل الاختيار من أجل الخادم بدون خادم يجعل التطوير والنشر سهلة. بعض حالات الاستخدام البارزة هي كما يلي:
**تطوير واجهات برمجة التطبيقات** : تعتبر الهندسة المعمارية بدون خادم الأولوية القصوى للمطورين عندما يتعلق الأمر ببناء واجهة برمجة تطبيقات مريحة لبرنامج عملك. يركز المطورون فقط على بناء طرق API والباقي ينتمي إلى مزود الخدمة.
**بناء برامج متعددة اللغات:**  اختيار لغة البرمجة هو خطوة مهمة في تطوير البرمجيات. ومع ذلك ، توفر الهندسة المعمارية بدون خادم بيئة يمكنك من خلالها الذهاب مع أي لغة لبدء التطوير.
**المهام المستندة إلى الأحداث** : يمكن للمطورين كتابة وظائف بدون خادم للتعامل مع الإجراءات المستندة إلى الأحداث. على سبيل المثال ، قد يؤدي تحميل صورة المستخدم إلى حدوث حدث مثل تحديث قاعدة بيانات المستخدم. لذلك ، يمكن التعامل مع كل ذلك بشكل جيد من قبل مزود الخدمة في بنية تحتية بدون خادم.
**التطبيقات المستندة إلى مجموعة النظراء:** تحتاج إلى الذهاب مع** Architecture Architecture**إذا كنت تقوم بإنشاء تطبيقات ويب قابلة للتطوير. علاوة على ذلك ، فإن البيئات بدون خادم تجعل التطوير سلسًا وفي الوقت المناسب وفعالة من حيث التكلفة من حيث ساعات الإنسان والنشر.
**عمليات خلفية الوزن الثقيل** : البنية التحتية بدون خادم هي الخيار الأفضل لحالة الاستخدام هذه. البرنامج الذي يكون الواجهة الخلفية مسؤولاً عن التعامل مع مهام وحدة المعالجة المركزية الواسعة هو المرشح المناسب لهذه الهندسة المعمارية. بالإضافة إلى ذلك ، يمكنك فقط العناية بمهام التطوير الأساسية وتتوقف عن القلق بشأن صيانة الخادم ووظائف التحجيم.

## فوائد العمل للحوسبة بدون خادم {#Business-benefits-of-Serverless-Computing}

في هذا القسم ، سنتحدث عن المزايا الأساسية التالية المرفقة بهذا الحوسبة **بدون خادم:**  
**النشر الخالي من المتاعب:**  نشر البرنامج هو وظيفة مناسبة. لذلك ، توفر الهندسة المعمارية بدون خادم عمليات نشر تطبيقات قوية تستغرق دقائق أو ساعات فقط.
**كفاءة التطوير** : نظرًا لأن صيانة الواجهة الخلفية يتم تنفيذها من قبل مطوري مزودي الخدمة السحابية ، فإنهم يستخدمون وقتهم في تطوير البرمجيات.
**على نطاق تلقائي** : كلما كانت هناك حاجة لتوسيع نطاق الخادم ، يتم ذلك بواسطة مزود الخدمة السحابية. مرة أخرى الإغاثة ل Devs.
**فعالة من حيث التكلفة**:**  بنية الخادم**فعالة من حيث التكلفة حيث تدفع فقط مقابل ما ومتى تستخدمه. تعتمد فاتورتك المالية على المدة الزمنية عند تشغيل وظائف.

## خاتمة
هذا كل شيء لهذا المنشور المدونة. لقد مررنا **ما هو الحوسبة بدون خادم**وكيف تستفيد من عالم التكنولوجيا. بالإضافة إلى ذلك ، قمنا باستكشاف **حالات الاستخدام بدون خادم** وفوائد **من الحوسبة بدون خادم** ، وقد تطرقت أيضًا إلى**حاويات الخادم مقابل الحاويات** . سيساعدك منشور المدونة هذا حقًا إذا كنت على استعداد لاختيار بنية بدون خادم.

## اتصل بنا
أخيرًا ، [Containerize.com][8] يكتب باستمرار منشورات المدونة على منتجات ومواضيع أخرى مفتوحة المصدر. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][9] و [LinkedIn][10] و [Twitter][11].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][12].

## الأسئلة الشائعة
**ما هي الحوسبة بدون خادم** ؟
يرجى اتباع هذا [الرابط][3] لمعرفة ما هو خادم وكيف يمكن أن يجلب الكفاءة في تطوير التطبيق ونشره.

## أنظر أيضا
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][13]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][14]
  * [كيفية دمج chatgpt مع أوراق Google][15]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][16]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][17]
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][18]



[1]: https://products.containerize.com/
[2]: https://products.containerize.com/rad/
[3]: #What-is-serverless-computing
[4]: #Serverless-vs-Containers
[5]: #Serverless-use-cases
[6]: #Business-benefits-of-Serverless-Computing
[7]: https://products.containerize.com/devops/kubernetes/
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/