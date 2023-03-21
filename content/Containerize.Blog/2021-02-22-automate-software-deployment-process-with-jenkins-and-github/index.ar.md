---
title: "التكامل المستمر والنشر المستمر من خادم التحكم في المصدر" 
seoTitle: "التكامل المستمر والنشر المستمر من خادم التحكم في المصدر" 
description: "تساعد أداة النشر المجانية على تطوير فرق تطوير سير عمل توصيل البرامج. بناء بسرعة واختبار ونشر البرامج مع مستودع Jenkins و Github." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "أتمتة تطوير سير العمل باستخدام أداة النشر المجانية. سوف نتعلم كيفية إعداد CI/CD مع خادم أتمتة Jenkins و GitHub لنشر البرامج." 
url: /ar/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## أتمتة سير عمل التطوير باستخدام أداة النشر المجانية. سوف نتعلم كيفية إعداد CI/CD مع خادم أتمتة Jenkins و GitHub لنشر البرامج.

{{< figure align=center src="images/ci-cd-post.png" alt="التكامل المستمر والنشر المستمر">}}

تستخدم فرق التطوير طرقًا مختلفة لنشر البرامج مثل FTP ، وسحب الرمز من المستودع ، وغيرها الكثير. يتم تنفيذ كل هذه الطرق يدويًا وتتطلب الكثير من الجهد. يمكننا أن نرى أن المزيد من الفرق تتبع منهجية Agile لتطوير البرمجيات. لذلك ، يطلقون ميزات جديدة وتثبيت الأخطاء بشكل متكرر. لذلك ، يساعد أتمتة سير عمل توصيل البرامج الفرق على إطلاق إصدارات جديدة بسرعة ودون أخطاء. سوف نتعلم كيفية استخدام  **CI/CD مع Jenkins **  و Github لأتمتة عملية توصيل البرامج. سنقوم بتغطية الأقسام التالية في هذه المقالة.
  *[ **ما هو جنكينز؟ ** ][1]
  *[ **التكامل المستمر ** ][2]
  *[ **النشر المستمر ** ][3]
  *[ **تكوين Jenkins ** ][4]
  *[ **إنشاء Jenkins Job ** ][5]

## ما هو جنكينز؟   {#jenkins}
**Jenkins  **هي أداة نشر مجانية **   **لأتمتة عملية توصيل البرامج. إنه خادم أتمتة مفتوح المصدر لبناء واختبار ونشر. يستخدم جنكينز الهندسة المعمارية الرقيق. يتيح ذلك لفرق البرمجيات تشغيل بنيات واختبارات متعددة للبرامج في وقت واحد. بالإضافة إلى ذلك ، هناك الكثير من الإضافات المتاحة ويمكن للفرق استخدامها حسب الحاجة. يمكنك زيارة صفحة [**  Jenkins **][6] لمزيد من المعلومات والتثبيت. علاوة على ذلك ، يمكنك العثور على رمز المصدر في Jenkins [ **Github ** ][7] مستودع.

## التكامل المستمر   {#ci}
**التكامل المستمر ** هو ممارسة تطوير تتطلب من المطورين دمج الكود بشكل متكرر في مستودع مشترك. يمكن التحقق من كل تكامل/دفع رمز في المستودع عن طريق الإنشاء والاختبارات الآلية. كما يسمح للمطورين بتحديد المشكلات في الكود بسهولة.

## النشر المستمر   {#cd}
**النشر المستمر ** هو الخطوة التالية بعد التكامل المستمر. سيسمح للفرق بنشر التعليمات البرمجية بشكل مستمر على الخادم. علاوة على ذلك ، فإنه يساعد المطورين على تقليل المهام المتكررة وزيادة خفة الحركة.

## تكوين Jenkins   {#Configure}
اتبع المبدأ التوجيهي خطوة بخطوة للتكوين في جنكينز.
  * افتح موقع Jenkins الخاص بك وتسجيل الدخول.
  * قم بتثبيت "Publish Over SSH". يمكنك البحث عنها من خلال التنقل إلى "إدارة Jenkins → Manage Plugins → Available".
  * قم بإنشاء مفتاح SSH على خادم البناء كمستخدم "Jenkins" كما هو موضح أدناه.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * الاتصال بخادم الهدف/النشر باستخدام SSH. قم بتشغيل الأمر أدناه ولصق محتويات ملف الحانة على الخادم الهدف.
```
$ cd .ssh
$ nano authorized_keys
```
  * انتقل لإدارة "Jenkins → تكوين النظام → نشر عبر SSH".
  * أضف مفتاح SSH إما عن طريق تحديد موقع مسار الملف أو لصق نفس المحتويات كما تم إجراؤه لخادم النشر.
  * إضافة خادم SSH بالنقر فوق الزر "إضافة" بجوار "خوادم SSH".
  * أدخل الاسم واسم المضيف واسم المستخدم والدليل البعيد لخادم النشر/الهدف.
  * انقر فوق زر تكوين الاختبار للتأكد من أنه يمكن لـ Jenkins الاتصال بخادم النشر.
  * أخيرًا ، انقر فوق زر حفظ لتخزين المعلومات.

## إنشاء Jenkins Job   {#Create}
يمكنك استخدام هذه الخطوات لإنشاء وظيفة Jenkins.
  * افتح لوحة معلومات Jenkins وانقر على زر "عنصر جديد".
  * أدخل اسم المشروع واختر "Freestyle Job".
  * أدخل عنوان URL لمستودع GitHub ضمن "نافذة التكوين".
  * في قسم "Build Environment" ، تحقق من هذه الخيارات "حذف مساحة العمل قبل بدء التشغيل" و "إرسال الملفات أو تنفيذ الأوامر عبر SSH بعد تشغيل البناء".
  * أدخل الاسم والملفات المصدر والدليل عن بُعد ضمن بيئة الإنشاء.
  * حفظ الوظيفة وبناءها.
  * الاتصال بخادم النشر وتأكد من وجود الرمز.

## خاتمة
لقد ناقشنا  **Jenkins Server **  ،  **التكامل المستمر **  ، و  **النشر المستمر **  في هذه المقالة. لقد تعلمنا أيضًا كيفية تكوين أداة النشر المجانية ** وإنشاء وظيفة Jenkins للنشر باستخدام GitHub. تتيح أداة CI/CD المجانية لفريق التطوير أتمتة سير عمل توصيل البرامج والحفاظ على التركيز على الوظائف المهمة. سنقوم بتغطية أدوات النشر الأخرى في المنشورات القادمة.
أخيرًا ، [ **Containerize.com ** ][8] ستنشر مقالات حول أدوات نشر المصادر المفتوحة الإضافية. لذلك ، يرجى البقاء على اتصال مع [ **أدوات النشر ** ][9] فئة للتحديثات العادية.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * **[جنكينز][6]**
  *[ **بدون طيار ** ][10]
  *[ **Deployer ** ][11]
  *[ **Capistrano ** ][12]
  *[ **Rancher ** ][13]
  *[ **concourse ** ][14]
  *[ **Ansible ** ][15]
  *[ **GOCD ** ][16]
  *[ **أفضل 5 أدوات نشر المصدر المفتوح في 2021 ** ][17]
  *[ **أتمتة نشر تطبيق PHP مع Deployer ** ][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
