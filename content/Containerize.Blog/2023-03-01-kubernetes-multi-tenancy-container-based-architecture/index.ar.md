---
title: "Kubernetes Multi-Benancy & Container Architecture" 
seoTitle: "الهندسة المعمارية المتعددة المستأجرة والحاويات" 
description: "اتبع هذا الدليل لمعرفة كيفية الحصول على مستأجر متعدد في بنية قائمة على الحاويات. يشير Kubernetes Multi-Benancy إلى الموارد المشتركة" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "اتبع هذا الدليل لمعرفة كيفية الحصول على مستأجر متعدد في بنية قائمة على الحاويات. يشير Kubernetes Multi-Benancy إلى الموارد المشتركة" 
url: /ar/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

## يتم مشاركة موارد العنقودية Kubernetes بين جميع المستأجرين. قم بتنفيذ نهج مضيفات الحاويات متعددة المستأجرين لنشر التطبيقات المحسنة وتوفير الموارد.


{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Kubernetes Multi-Benancy & Continer القائم على الحاويات " caption="Kubernetes Multi-Benancy & Contains Architecture" >}}

## ملخص
نحن هنا مع منشور مدونة مثير آخر في سلسلة من المستأجرين. فينا [المقالة] السابقة [1] ، تطرقت إلى المفهوم الأساسي وراء التطبيقات المتعددة المستأجرين ، والإيجابيات ، والسلبيات ، وأنواع الهندسة المعمارية متعددة المستأجرين. نظرًا لأن الوقت قد حان لخدمة العديد من المستخدمين/المستأجرين ، إدارة الموارد واستخدامها بطريقة فعالة. لذا ، فإن Multi-Benancy هو النهج الأعلى لبناء بنية تحتية تعالج العديد من العملاء/المستأجرين في وقت واحد. ومع ذلك ، أظهر أحدث [منشور المدونة][2] الهندسة المعمارية بدون خادم ، وحاويات ، و [Kubernetes][3]. لذلك ، في هذه المقالة ، سوف نستكشف الهندسة المعمارية المتعددة المستندة إلى الحاويات. بالإضافة إلى ذلك ، سنرى كيف يمكنك تحقيق مستأجر متعدد في تطبيقات [الحاويات][4].
يجب تغطية النقاط التالية في هذه المقالة:
  * **[مضيفات حاوية متعددة المستأجرين][5]**
  * **[Kubernetes Multi-Tenancy][6]**

## مضيفات حاوية متعددة المستأجرين   {#مستشفى متعدد المستأجرين}
يعد نشر التطبيقات متعددة المستأجرين مهمة مهمة عندما يتعلق الأمر باستضافة منصات. تعلمون جميعًا أن الحاويات خفيفة الوزن مقارنة بالأجهزة الافتراضية. لا يستغرق نشر التطبيق سوى بضعة مللي ثانية لإكمال النشر في حين أن الأمر قد يتراوح من ثوانٍ إلى دقائق في حالة الأجهزة الافتراضية.
ومع ذلك ، فإن تحقيق مستأجر متعدد في بنية قائمة على الحاويات أمر واضح ومباشر. يتم استضافة كل مستأجر بواسطة حاوية منفصلة مع عزل كامل وخصوصية البيانات. وهذا يعني أن عدد الحاويات يعتمد على عدد المستأجرين. علاوة على ذلك ، سيتم استخدام الأدوات التالية لتحقيق هذا النهج:
  * يؤلف Docker و Docker
  * nginx
  * مثيل قاعدة البيانات
  * خادم التطبيق
سوف تستخدم Docker لإنشاء الصورة التي هي قالب لإنشاء الحاوية. بالإضافة إلى ذلك ، سوف تستخدم Docker Compose لتدوير مضيفي الحاويات المتعددة. علاوة على ذلك ، سوف تستخدم Nginx لإعادة توجيه الطلبات الواردة إلى المستأجر المناسب. لذلك ، يحتوي كل مضيف حاوية على مثيلات التطبيق وقاعدة البيانات. هذه الأسلوب  **مضيفي الحاوية متعددة المستأجرين **  ليست كثيفة الموارد وتوفر المتانة في إدارة مختلف المستأجرين والتأكد من عزل البيانات والأمان.

## Kubernetes Multi-Tenancy   {#kubernetes-multi-enancy-}
يحتوي Kubernetes على العديد من المكونات في بنيةها مثل العقد والمجموعة وطائرة التحكم والمزيد. في الأساس ، لا يوجد مستأجر مدمج في Kubernetes ولكن يمكنك تحقيق ذلك. لذلك ، هناك العديد من التطبيقات/المستأجرين الذين يديرون ويشاركون مجموعة Kubernetes وطائرة التحكم. من ناحية أخرى ، في تطبيقات المستأجرة الواحدة ، تحتل مثيل واحد للتطبيق مجموعة Kubernetes بأكملها.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes Multi-Benancy" >}}

علاوة على ذلك ، فإن التعمق أكثر قليلاً سيجعلنا نتعرف على استضافة المستأجر في مجموعة Kubernetes. يرتبط كل مستأجر بمساحة اسم Kubernetes التي تنظم التعليمات البرمجية وتمنع تصادم الأسماء. هناك ثلاثة طرق لتحقيق استئجار متعدد في Kubernetes. الأول هو مساحة الاسم كخدمة ، والثاني هو الكتلة كخدمة ، والثالثة هي طائرات التحكم كخدمة.
إلى حد ما ، تقدم Kubernetes Multi-Tenancy حلاً فعالًا من حيث التكلفة للمؤسسة التي تتعامل مع واجهات المستخدم المتعددة. في الواقع ، يمكنك مواجهة بعض التحديات مثل إدارة المستخدم وإدارة الموارد الأفضل. ومع ذلك ، فإنه يعتمد تمامًا على حالة الاستخدام وطبيعة التطبيق الذي تهدف إليه.

## خاتمة
هذا يقودنا إلى نهاية منشور المدونة هذا. لقد مررنا  **Kubernetes Multi-Benancy & Container القائمة على الهندسة المعمارية **  لتحقيق استئجار متعدد. بالإضافة إلى ذلك ، هناك العديد من مكتبات الطرف الثالث المتاحة لسد التطبيقات متعددة المستأجرين مع Kubernetes. سيساعدك منشور المدونة هذا في فهم مفهوم  **مضيفي الحاويات متعددة المستأجرين ** . هناك منشورات مدونة أخرى مثيرة للاهتمام قد تجدها في قسم "انظر أيضًا".

## اتصل بنا
أخيرًا ، يقدم [Containerize.com][7] منشورات مدونة مستمرة على مختلف المنتجات والمواضيع مفتوحة المصدر. يمكنك البقاء في الحلقة من خلال متابعتنا على منصات الوسائط الاجتماعية لدينا ، بما في ذلك [Facebook][8] و [LinkedIn][9] و [Twitter][10].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][11].

## الأسئلة الشائعة
**ما هي المستأجر المتعدد في Kubernetes؟ **؟
اتبع هذا [الرابط][6] لمعرفة Kubernetes Multi-Benancy.
**ما هي مجموعة مستأجرة متعددة مقابل مستأجر واحد؟ **
في مجموعة متعددة المستأجرين ، يشارك جميع المستأجرين/العملاء مجموعة Kubernetes بينما ، في مجموعة مستأجرة واحدة ، هناك مجموعة منفصلة واحدة تعمل لكل مستأجر.

## أنظر أيضا
  * [ما هي الحوسبة بدون خادم؟ | الهندسة المعمارية بدون خادم][12]
  * [ما هو التعدد؟ | لماذا نهج متعدد المستأجرين؟][13]
  * [ما هو التوليد الذكاء الاصطناعي | الذكاء الاصطناعي التوليدي][14]
  * [كيفية دمج chatgpt مع أوراق Google][15]
  * [كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT][16]
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][17]
  * [مقدمة للذكاء الاصطناعي | ما هو الذكاء الاصطناعي؟][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
