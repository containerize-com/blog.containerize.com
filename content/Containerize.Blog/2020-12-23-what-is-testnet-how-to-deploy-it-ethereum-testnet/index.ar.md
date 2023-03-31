---
title: "ما هو testnet وكيفية نشره | ethereum testnet '" 
seoTitle: "ما هو testnet وكيفية نشره | Ethereum testnet" 
description: "ما هو testnet؟ هذا الدليل يدور حول كيفية إعداد عقدة Ethereum على المضيف المحلي. blockchain هي شبكة من العقد التي تحافظ على تاريخ جميع المعاملات." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum عبارة عن شبكة نظير إلى نظير من blockchain مفتوحة المصدر من العقد المتصلة. دعونا نتعلم كيفية النشر والتفاعل مع عقدة Ethereum على خادم محلي." 
url: /ar/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum عبارة عن شبكة نظير إلى نظير من Blockchain مفتوحة المصدر من العقد المتصلة. دعونا نتعلم كيفية النشر والتفاعل مع عقدة Ethereum على خادم محلي.

{{< figure align=center src="images/ether.png" alt="ما هو testnet">}}

في منشورات المدونة السابقة لدينا ، كتبنا عن موضوعات متعددة تتضمن [blockchain technology for business][1] ، [كتابة عقد ذكي أساسي][2] ، و [منصات blockchain الشعبية][3]. هناك مواضيع أخرى سنكتبها في المستقبل القريب حيث أن تقنية دفتر الأستاذ اللامركزية**تكتسب وتيرة مع مرور الوقت. بدأ الأشخاص الآن في الاهتمام بمنصات إدارة الأصول الرقمية بسبب الأمان والشفافية. بالإضافة إلى ذلك ، فإن المعاملات الرقمية قابلة للتتبع ، ولا تقابل هذه العوامل الثقة للأشخاص فيما يتعلق بموثوقية هذه التكنولوجيا. هناك ثلاثة أنواع من blockchain العامة والخاصة والذات. ومع ذلك ، يمكن للمستخدمين تبني أي نوع اعتمادًا على حالة استخدامهم.
جلب ظهور هذه التكنولوجيا تغييرًا كبيرًا في القطاع المصرفي لأنه غير طريق المعاملات المالية. في منشور المدونة هذا ، سنتحدث عن Ethereum blockchain فيما يتعلق بإعداد عقدة Ethereum على المضيف المحلي وسنرى كيفية التفاعل مع شبكة الاختبار. سوف نغطي النقاط الرئيسية التالية.
*  **ما هو testnet؟**  
*  **[كيفية إعداد ethereum blockchain؟][4]**  
*  **[كيف تتفاعل مع ethereum blockchain؟][5]**  
*  **[الخلاصة][6]**  

## ما هو testnet؟ {#tetstnet}

في منشور المدونة هذا ، سنقوم بنشر عقدة Ethereum على المضيف المحلي. يحتوي Ethereum على شبكات متعددة ، وتسمى شبكة الإنتاج mainnet ، وتسمى الشبكة المستخدمة لأغراض الاختبار TestNet. تعتمد معظم التطبيقات اللامركزية على [Ethereum][7] blockchain. العقد الذكي هو عنصر لا يتجزأ من هذه البنية التحتية الموزعة. علاوة على ذلك ، Blockchain هي شبكة من أجهزة الكمبيوتر تسمى "العقد". ومع ذلك ، تحتوي كل عقدة على نسخة من blockchain وبالتالي تشارك في الشبكة. Ethereum blockchain لديها أيضا عملة مشفرة خاصة بها تسمى "الأثير". جميع المعاملات مضمونة تشفيرا. بالإضافة إلى ذلك ، إنها تقنية دفتر الأستاذ الكاملة التي لا تغلق أبدًا أو تفسد. يتيح لك كتابة العقود الذكية والتطبيقات اللامركزية (DAPPs) التي تعمل على العقد الأثير blockchain.
تستخدم شبكة blockchain الموزعة المصدر المفتوحة هذه خوارزمية إجماع تسمى إثبات العمل (POW). علاوة على ذلك ، فإن بنية Ethereum تتألف من خمس طبقات مثل الجهاز الظاهري Ethereum ، وواجهة برمجة تطبيقات عميل Ethereum ، والعقود الذكية ، وعقد Ethereum ، وتطبيقات المستخدم النهائي. يقدم Machine Ethereum Virtual البرنامج والهندسة المعمارية التي تتعرف على العقود الذكية. العقود الذكية هي البرنامج الذي يحكم المعاملات. هناك دعم قوي لشركات Ethereum Blockchain و Fortune 500 أظهرت اهتمامًا كبيرًا للقيام بالتطوير على نطاق أوسع باستخدام هذه التكنولوجيا. علاوة على ذلك ، يتم كتابة Ethereum بلغة GO ويتوفر رمز المصدر الخاص به على [github][8]. جميع الوثائق متاحة فيما يتعلق بالنشر والتطوير لأنها لديها مجتمع نابض بالحياة.

## كيفية إعداد Ethereum blockchain؟ {#setup}

الآن ، نحن على دراية بما هو testnet. في هذا القسم ، سنقوم بإعداد عقدة Ethereum على جهازنا المحلي. قبل المضي قدمًا ، تأكد من تثبيت المتطلبات الأساسية التالية.
  * [homebrew][9] (لماكوس)

  * [GO7] (brew install go)
بمجرد وجود المتطلبات الأساسية ، يرجى تشغيل الأمر التالي لاستنساخ الرمز المصدري:
```
git clone https://github.com/ethereum/go-ethereum
```
عند استنساخ ناجح ، انتقل إلى الدليل:
```
cd go-ethereum
```
الآن ، قم بتشغيل الأمر التالي لبناء برنامج GETH:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    ملحوظة
{{_LINE_34_}}
  في حالة حدوث أي خطأ ، يرجى تثبيت Xcode عن طريق تشغيل Xcode-Select-مثبت ومحاولة مرة أخرى
{{_LINE_36_}}
لذلك ، قمت بإعداد جميع المتطلبات المسبقة والرمز المصدر. لذلك ، قم بتشغيل الأمر التالي لبدء العقدة:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="عقدة Ethereum">}}


## كيف تتفاعل مع Ethereum blockchain؟ {#interact}

يتحدث هذا القسم عن التفاعل مع عقدة Ethereum قيد التشغيل التي تتم مزامنتها بالكامل مع blockchain. يمكننا استخدام برنامج GETH للتفاعل وإرسال الأوامر إلى شبكة الاختبار.
لذلك ، دعنا ندرج البناء/bin/geth في متغير بيئة المسار $ عن طريق تشغيل الأوامر التالية:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
بعد ذلك ، أوقف الخادم الذي رفعته أعلاه وقم بتشغيل شبكة الاختبار مع الأعلام التالية:
Geth -testnet -RPC -RPCAPI = "DB ، ETH ، Net ، Web3 ، Personal ، Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="ما هو testnet">}}

بعد ذلك ، تحتاج إلى فتح نافذة طرفية جديدة وإرفاق الأمر Geth بالعقدة عن طريق تشغيل الأمر التالي:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="منصة إدارة الأصول الرقمية">}}

سيفتح Geth نافذة وحدة تحكم حيث يمكنك التفاعل مع شبكة الاختبار. سيقوم الأمر التالي بإنشاء حساب يحمل العملة الافتراضية وزوج المفتاح العام/الخاص:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="تقنية دفتر الأستاذ اللامركزية">}}

للتحقق من حسابك ، يمكنك تشغيل الأمر التالي:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="ما هو testnet">}}

وبالمثل ، هناك العديد من الأوامر التي يمكنك استخدامها للتفاعل مع Ethereum blockchain.

## خاتمة {#خاتمة}

هنا تأتي نهاية هذا البرنامج التعليمي. لقد تعلمنا  **ما هو testnet** وعملية إعداد عقدة Ethereum على الجهاز المحلي. Ethereum blockchain هو حل معمم لمعظم التطبيقات اللامركزية. تميل معظم الشركات والإدارات الحكومية إلى تبني هذه التكنولوجيا لجلب المتانة والشفافية والتوافر والمساءلة. بالإضافة إلى ذلك ، سيساعدك هذا البرنامج التعليمي  **blockchain**  حقًا إذا كنت تخطط لبدء التطوير على Ethereum blockchain لأنه يعمل على الاستفادة من العقود الذكية. Etheruem blockchain أكثر استقرارًا وشعبية لأنها تحتوي على الآلاف من العقد الحية. علاوة على ذلك ، يمكن للمؤسسات بسهولة تطوير ونشر شبكات ethereum blockchain دون قضاء أي وقت إضافي. العامل الآخر وراء موثوقية Ethereum هو أنه يوفر تطوير العقود الذكية بطريقة لا تقدمها **منصات إدارة الأصول الرقمية الأخرى**  .
جعلت آخر التحديثات في شبكة Ethereum الشبكة أكثر فعالية من حيث التكلفة وفعالة. في الواقع ، هناك الكثير من المواد المتاحة على السحابة التي توضح الجوانب المهمة لـ Etheruem فيما يتعلق بأغراض الاستثمار والتنمية. بالنسبة للمطورين ، فإنه يوفر نظامًا بيئيًا مناسبًا للمطور مع أدوات مساعدة مسبقة الصنع. بالنسبة للعاملين ، هناك مكافأة في شكل الأثير كلما قاموا بإخراج كتلة جديدة في blockchain. علاوة على ذلك ، [Containerize.com][10] نشر العديد من منشورات المدونات الفنية والبرامج التعليمية حول المنتجات الشهيرة المصدر المفتوح على [blog.containerize.com][11]. لذلك ، ابق على اتصال مع فئة [blockchain platforms][12] للتحديثات العادية.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [نسيج hyperledger][13]
  * [OpenChain][14]
  * [تموج][15]
  * [Multichain][16]
  * [consensys Quorum][17]
  * [كيفية إعداد شبكة Quorum blockchain Network محليًا][18]
  * [أفضل 5 منصات blockchain مفتوحة المصدر في عام 2020][3]
  * [دليل أساسي حول كيفية إنشاء العقد الذكي Ethereum][2]
  * [كيف تقوم التكنولوجيا اللامركزية بترقية استراتيجية عملك][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
 [20]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
