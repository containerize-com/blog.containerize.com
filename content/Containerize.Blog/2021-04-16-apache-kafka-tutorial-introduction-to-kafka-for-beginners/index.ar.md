---
title: "Apache Kafka Tutorial -Introduction to Kafka للمبتدئين" 
seoTitle: "Apache Kafka Tutorial -Introduction to Kafka للمبتدئين" 
description: "Apache Kafka هي منصة تدفق الأحداث الموزعة مفتوحة المصدر. هذا البرنامج التعليمي هو دليل مبتدئ لفهم Apache Kafka." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka هي منصة تدفق الأحداث الموزعة مفتوحة المصدر. يمنحك هذا البرنامج التعليمي مقدمة إلى كافكا من منظور المبتدئين." 
url: /ar/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka هو منصة تدفق الأحداث الموزعة مفتوحة المصدر. يمنحك هذا البرنامج التعليمي مقدمة إلى كافكا من منظور المبتدئين.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="تعليمي Apache Kafka Open Source">}}

لقد كتبنا مؤخرًا مقالًا عن "Kafka vs redis pub-sub" الذي يشرح حول الاختلافات بين Kafka و Redis Pub-Sub. في هذا المقال ، شرحنا قريبًا عن وسيط رسائل Kafka نفسه. لذا ، تمنحك هذه المقالة الآن مزيدًا من البصيرة على منصة دفق الأحداث المفتوحة لمصدر Apache Kafka وتمنحك كل ما هو ضروري لبدء بدء قائمة انتظار الرسائل الموزعة Kafka. اذا هيا بنا نبدأ.
  * [مقدمة إلى أباتشي كافكا][1]
  * [ما هو نظام المراسلة؟][2]
  * [المصطلحات الأساسية][3]
  * [خطوات التثبيت][4]
  * [إنشاء موضوع][5]
  * [اكتب رسالة إلى الموضوع][6]
  * [اقرأ الرسائل من الموضوع][7]
  * [الخلاصة][8]

## مقدمة إلى Apache Kafka   {#Intro}
بدأ وسيط الرسائل المفتوح Apache Kafka في LinkedIn وأصبح فيما بعد مشروع Apache مفتوح المصدر. تم تطوير برنامج Kafka Message Broker في Scala و Java. Apache Kafka Broker هو نظام مراسلة نشر النشر يتيح لتبادل البيانات بين التطبيقات والخوادم والمعالجات أيضًا. إنه سريع وقابل للتطوير وتوزيعه حسب التصميم. إنه قادر على التعامل مع ملايين البيانات أو الرسائل في الثانية. يعمل كوسيط بين نظام المصدر (المنتج) ونظام الهدف (المستهلك). تستفيد منظمات مثل Netflix و Uber وآلاف هذه الشركات من تدفق Apache Kafka في الوقت الفعلي. بالمقارنة مع أنظمة المراسلة الأخرى ، فإن برنامج قائمة انتظار رسائل Kafka لديه إنتاجية أفضل ، وتقسيم مدمج ، وتكرار ، وتسامح الأعطال المتأصلة. هذا يجعله مناسبًا لتطبيقات معالجة الرسائل على نطاق واسع.

## ما هو نظام المراسلة؟   {#Messaging}
نظام المراسلة هو تبادل بسيط للرسائل بين شخصين أو أكثر أو أجهزة ، إلخ. إنه مسؤول عن نقل البيانات من تطبيق إلى آخر ، بحيث يمكن للتطبيقات التركيز على البيانات ، ولكن لا تقلق بشأن كيفية مشاركتها.
نوع واحد من نظام المراسلة هو "نظام المراسلة النقطة إلى نقطة". في هذا النظام يتم تخزين رسائل في قائمة انتظار عند إرسالها من قبل المنتج. يمكن لمستهلك واحد فقط استهلاك رسالة في أي وقت معين. وبمجرد استهلاك الرسالة ، ستتم إزالتها من قائمة الانتظار. أحد مثال هذا النظام هو نظام معالجة الطلبات. حيث يمكن لعملية واحدة فقط الحصول على الطلب.
نوع آخر من نظام المراسلة هو نظام المراسلة الحانة الذي يسمح للمرسل بإرسال الرسالة وجهاز الاستقبال لقراءة هذه الرسالة. في Apache Kafka Messaging ، يُعرف المرسل بالمنتج الذي ينشر الرسائل ، ويعرف المتلقي كمستهلك يستهلك هذه الرسالة من خلال الاشتراك فيها. مثال على هذا النظام هو تلفزيون الكابل الذي ينشر العديد من القنوات ، ويمكن لأي شخص الاشتراك في اختيار القنوات والحصول عليها كلما كانت قنواتها المشتركة متوفرة.

## المصطلحات الأساسية   {#Terms}
قبل أن نتحدث أكثر عن أفضل قائمة انتظار رسالة Apache Kafka ، يجب أن تفهم بعض المصطلحات.
  ***الموضوعات** : يسمى دفق من الرسائل التي تنتمي إلى فئة معينة موضوعًا.
  ***القسم** : قد يكون للمواضيع العديد من الأقسام ، حتى يتمكنوا من التعامل مع كمية تعسفية من البيانات.
  ***إزاحة القسم** : كل رسالة مقسمة لها معرف تسلسل فريد يسمى "الإزاحة".
  ***النسخ المتماثلة من التقسيم** : النسخ المتماثلة هي النسخ الاحتياطية للقسم. يتم استخدامها لمنع فقدان البيانات.
  ***الوسطاء** : مسؤولون عن الحفاظ على البيانات المنشورة.
  ***Kafka Cluster** : يسمى Kafka’s Wazing أكثر من وسيط واحد Kafka Cluster.
  **المنتجين** : هل ناشري الرسائل إلى موضوع واحد أو أكثر.
  ***المستهلكين** : هل قارئ البيانات من الوسطاء. يشتركون في مواضيع متعددة ويستهلكون كلما كانت هناك رسالة في الموضوع.
  ***القائد** : هل العقدة المسؤولة عن جميع القراءات وتكتب لأي قسم معين.
  ***أتباع** : العقدة التي تتبع تعليمات القائد تسمى المتابعين.

## التثبيت خطوات   {#steps}

### الخطوة 1 - التحقق من تثبيت Java
نأمل أن تكون قد قمت بالفعل بتثبيت Java على جهازك الآن ، لذلك يمكنك التحقق من ذلك باستخدام الأمر التالي.
```
$ java -version
```
إذا تم تثبيت Java بنجاح على جهازك ، فيمكنك رؤية إصدار Java المثبتة. إذا لم يكن الأمر كذلك ، فيجب عليك أولاً تثبيت Java.

### الخطوة 2 - تثبيت إطار Zookeeper
تفضل بزيارة الرابط التالي وقم بتنزيل أحدث إصدار من Zookeeper.
{{_LINE_46_}}
بمجرد الانتهاء من التثبيت والتكوين ، يمكنك بدء تشغيل zookeeper مع الأمر التالي
```
$ bin/zkServer.sh start
```
ثم استخدم الأمر التالي للاتصال بـ Zookeeper من CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
بمجرد الاتصال ، يجب أن ترى شيئًا مثل هذا
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### الخطوة 3 - تثبيت Apache Kafka
قم بتنزيل أحدث إصدار من Kafka Best Message Broker واستخراجه من عنوان URL التالي
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
قم بتشغيل الأوامر التالية من أجل بدء جميع الخدمات بالترتيب الصحيح:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
افتح جلسة طرفية أخرى وتشغيلها:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## إنشاء موضوع   {#create}
لكتابة رسائلك أو الأحداث في موضوعات ، يجب عليك أولاً إنشاء موضوع. لإنشاء موضوع افتح المحطة الخاصة بك وتشغيل الأمر التالي:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
لقد أنشأنا الآن موضوعًا باسم "تحديثات الطقس" حيث سننشر معلومات حول الطقس والمستهلكين سوف يستهلكون هذه الرسائل.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## اكتب رسالة إلى الموضوع   {#write}
قم بتشغيل عميل منتج وحدة التحكم لكتابة بعض الأحداث في موضوعك. بشكل افتراضي ، سيؤدي كل سطر إدخاله إلى كتابة حدث منفصل للموضوع.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## اقرأ الرسائل من الموضوع   {#Read}
افتح جلسة طرفية أخرى وقم بتشغيل عميل مستهلك وحدة التحكم لقراءة الأحداث التي أنشأتها للتو:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
لا تتردد في التجربة: على سبيل المثال ، عد إلى محطة المنتج الخاصة بك (الخطوة السابقة) لكتابة أحداث إضافية ، ومعرفة كيف تظهر الأحداث على الفور في محطة المستهلك الخاصة بك.

## الخاتمة   {#conclusion}
في هذا البرنامج التعليمي ، تعلمنا عن أساسيات استخدام Apache Kafka. قمنا بتثبيت خدمة طابور Kafka ثم قمنا بتكوينها. لقد تعلمنا أيضًا كيفية إنشاء مواضيع في كافكا ، وإرسال الرسائل إلى الموضوعات وكيفية قراءة الرسائل من الموضوعات. آمل أن يكون هذا المقال مفيدًا لك. دعنا نلتقي في المقالة التالية.
_ ما هو نظام دفق الأحداث المفتوح المصدر الذي تستخدمه؟. هل لديك أي أسئلة؟ ، من فضلك_ [الاتصال][9].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [أفضل برنامج قائمة انتظار الرسائل المجانية والمفتوحة المصدر (MQ)][10]
  * [Kafka vs redis pub-sub ، الاختلافات التي يجب أن تعرفها][11]
  * [مقدمة إلى Redis Pub/Sub وكيف تعمل؟][12]

  
[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
