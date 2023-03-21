---
title: "كيفية إعداد شبكة Quorum blockchain على المستوى المحلي" 
seoTitle: "كيفية إعداد شبكة Quorum blockchain على المستوى المحلي" 
description: "اتبع هذا الدليل للتعرف على عملية التثبيت لـ Consensys Quorum blockchain على المضيف المحلي. Consensys Quorum هو blockchain القائم على الأثير المصدر." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "إنشاء شبكة blockchain العامة/الخاصة الخاصة بك لإدارة ومراقبة المعاملات الرقمية التجارية. دعونا نتعلم كيفية إعداد Consensys Quorum على المضيف المحلي." 
url: /ar/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## إنشاء شبكة blockchain العامة/الخاصة الخاصة بك لإدارة ومراقبة المعاملات الرقمية التجارية. دعونا نتعلم كيفية إعداد Consensys Quorum على المضيف المحلي.

{{< figure align=center src="images/quorum.png" alt="consensys النصاب">}}


## ملخص
في الماضي القريب ، نشرنا منشورات المدونة حول بعض الموضوعات المتعلقة بالفواصل مثل [أفضل 5 منصات blockchain مفتوحة المصدر في عام 2020][1] ، [دليل أساسي حول كيفية إنشاء العقد الذكي Ethereum][2] ، [كيف لا مركزية تقوم التكنولوجيا بترقية استراتيجية عملك][3] ، و [دليل المبتدئين لإعداد عقدة Ethereum على المضيف المحلي][4]. في هذه المقالة ، سنرى كيفية إعداد شبكة consensys quorum blockchain على مضيف محلي من خلال تغطية النقاط التالية.
  * **[مقدمة موجزة لـ Consensys Quorum][5]**
  * **[ما هي إجراءات التثبيت المسبقة و  **** ؟][6]**
  * **[كيف تبدأ الشبكة؟][7]**
  * **[الخلاصة][8]**

##  **مقدمة موجزة لـ Consensys Quorum**    {#Introduction}
[Consensys Quorum][9] عبارة عن منصة مفتوحة المصدر تعتمد على **تقنية دفتر الأستاذ اللامركزية **. ومع ذلك ، فإنه يوفر بيئة صديقة للمطورين بالكامل لإنشاء تطبيقات قائمة على blockchain تتعامل مع معاملات سريعة وعالية الإنتاجية. إنه  **ethereum **  ، قابل للتمديد ، ويقدم العديد من الإضافات. علاوة على ذلك ، يأتي هذا النظام الموزع المصدر المفتوح مع معايير أمان وخصوصية عالية. بالإضافة إلى ذلك ، هناك العديد من الميزات القوية مثل واجهات برمجة تطبيقات الإذن والمراقبة. علاوة على ذلك ، يتم استضافة منصة ** DLT هذه**  وتوفر وثائق مفصلة فيما يتعلق بالتطوير والنشر. يتوفر الكود المصدري لهذا البرنامج المجاني في [Github][10].
يوفر Consensys Quorum الميزات المهمة التالية:
  * الهندسة المعمارية قابلة للتجميع
  * Ethereum على أساس
  * يؤمن
  * مستضافة ذاتي
  * الشبكة العامة/الخاصة
[تعرف على المزيد حول Consensys Quorum][11]

## ** **ما هي المتطلبات المسبقة وإجراءات التثبيت؟** **   {#المتطلبات المسبقة}
في هذا القسم ، سنقوم بتثبيت التبعيات المطلوبة وإعداد البيئة المحلية. قبل الذهاب إلى الخطوة التالية ، تأكد من تثبيت المتطلبات المسبقة التالية:
  * nodejs v10+
  * دوكر
  * Docker-corm
بمجرد تثبيت المتطلبات المسبقة ، قم بتشغيل الأمر التالي لبدء الأداة المساعدة QuickStart المستندة إلى CLI.
```
npx quorum-dev-quickstart
```
ومع ذلك ، أجب على الأسئلة لإكمال التثبيت كما هو موضح في الصورة أدناه.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="consensys النصاب">}}


## ** **كيف تبدأ الشبكة؟** **   {#start}
الآن ، لدينا رمز المصدر في مكانه. لذلك ، فإن الخطوة التالية هي جعل الشبكة مباشرة.
قم بتشغيل الأمر التالي للوصول إلى دليل الجذر.
```
cd quorum-test-network
```
بعد ذلك ، قم بتشغيل الأمر التالي لبدء جميع حاويات Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="consensys النصاب">}}

بمجرد تشغيل جميع حاويات Docker ، يمكنك الوصول إلى Block Explorer على العنوان التالي:
```
http://localhost:25000
```
[] ()
علاوة على ذلك ، يمكنك التفاعل مع مستكشف الكتلة كما هو موضح في الصورة أدناه.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="نظام موزع مفتوح المصدر">}}

وبالمثل ، يمكنك إيقاف الشبكة بأكملها عن طريق تشغيل الأمر التالي:
```
./stop.sh 
```

## الخاتمة   {#conclusion}
هذه هي نهاية هذا البرنامج التعليمي. قبل كل شيء ، CONSENSYS QUORUM القائمة على Ethereum هي تقنية مالية رقمية** تم تطويرها خصيصًا لحالات الاستخدام المالي. لديها خوارزمية الإجماع القائمة على التصويت. ومع ذلك ، فإن الدافع الرئيسي لهذه التكنولوجيا اللامركزية هو بناء حلول فعالة للمؤسسات.
أخيرًا ، نشر [Containerize.com][12] العديد من منشورات المدونات الفنية والبرامج التعليمية حول منتجات المصادر الشهيرة الشهيرة على [blog.containerize.com][13]. لذلك ، التمسك بفئة [blockchain منصات][14] للتحديثات العادية.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [Ethereum][15]
  * [نسيج hyperledger][16]
  * [OpenChain][17]
  * [تموج][18]
  * [Multichain][19]
  * [consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
