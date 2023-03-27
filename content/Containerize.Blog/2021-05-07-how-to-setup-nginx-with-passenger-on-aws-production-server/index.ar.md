---
title: "كيفية إعداد Nginx مع ركاب على خادم إنتاج AWS" 
seoTitle: "كيفية إعداد Nginx مع ركاب على خادم إنتاج AWS" 
description: "يصف منشور المدونة هذا الخطوات لتركيب NGINX مع الركاب من خلال نظام التشغيل Ubuntu 20.04 LTS بعد طريقة APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "يصف منشور المدونة هذا الخطوات الخاصة بتثبيت Nginx مع الركاب من خلال نظام التشغيل Ubuntu 20.04 LTS بعد طريقة APT." 
url: /ar/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## يصف منشور المدونة هذا خطوات تثبيت Nginx مع الركاب من خلال نظام التشغيل Ubuntu 20.04 LTS بعد طريقة APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="قم بإعداد Nginx مع خادم إنتاج AWS AWS">}}


## **ملخص** :
تحتاج إلى تثبيت وتكوين **NGINX مع Passenger on AWS Production** Server قبل نشر التطبيق الخاص بك على خادم الإنتاج.
**يوفر Open Source Phusion Passenger** الكثير من خيارات التخصيص والميزات. الراكب يتم استخدام بعض الميزات لتحسين خصائص أداء التطبيق. تؤثر بعض التخصيص على التطبيق أو سلوك معالجة الاتصال وما إلى ذلك. هناك حاجة إلى إعداد خيارين للمسافرين في Nginx ، المسمى على أنه ركاب \ _enabled و Passenger \ _ROOT. ستقوم عملية التثبيت هذه بإعداد كلا الخيارين تلقائيًا.
في مقالة المدونة هذه ، سنقوم بتغطية بعض خطوات التكوين الأساسية لتثبيت خادم تطبيق الويب على نظام تشغيل Ubuntu التالي **APT** . ستتمكن من نشر تطبيقات الويب وإدارتها المكتوبة في Node.js و Python و Ruby بعد القراءة وما يلي الدليل.
* **ما هو nginx والركاب؟** 
* **قم بتثبيت حزم Nginx وركابك** 
* **تمكين وحدة Nginx للركاب وإعادة تشغيل nginx** 
* **التحقق من صحة المنشآت** 
**تحديثات النظام والركاب** 
* **أفضل خوادم الويب مفتوحة المصدر** 
  * **خاتمة** 

## 1. ما هو Nginx والركاب؟ {#step-4:-update-regularly}

**[ما هو Nginx Server؟][1] **NGINX هو برنامج خادم ويب مجاني ومفتوح المصدر لمخدم الويب بمثابة وكيل عكسي ، HTTP Load Balancer ، تدفق الوسائط ، ذاكرة التخزين المؤقت HTTP ، وكيل البريد الإلكتروني لـ IMAP ، POP3 و SMTP. إنه قابل للتطوير للغاية ، مصمم لتحقيق أقصى قدر من الأداء والاستقرار. NGINX هو خادم ويب غير متزامن غير متزامن ، غير متزامن ، والذي يحركه الأحداث والذي يتيح معالجة طلبات العميل المتعددة في نفس الوقت. كتبه إيغور سيسوفيف ، الذي تم إصداره في عام 2004 بموجب شروط ترخيص BSD الباقي.** يقوم Nginx بإجراء 2.5 مرة أسرع**من Apache ويستهلك ذاكرة أقل وفقًا للاختبار القياسي.
**[ما هو الراكب؟][2] **Phusion Passenger المعروف أيضًا باسم Mod \ _ _ _ _rack ، هو خادم ويب مجاني وخادم تطبيق ويب مفتوح المصدر. إنه مصمم ليكون سريعًا وقويًا ومتعلقًا بالميزات وخفيفة الوزن يتكامل مع Apache و Nginx. كما أنه يحسن الأمان والموثوقية وقابلية التوسع للتطبيقات. يسمح للمسؤولين باكتساب نظرة ثاقبة على عمليات تطبيق الويب وأداء الخادم. يعمل خادم تطبيق الركاب ويدير تطبيقات الويب الخاصة بك بسهولة. يمكن أيضًا أن يخدم** تطبيقات متعددة**في نفس الوقت كونها متعددة المستأجرين ومتاحة. يمكنه التعامل مع طلبات HTTP ، وإدارة العمليات والموارد ، وتمكين مهام الإدارة والمراقبة وتشخيص المشكلات. Phusion Passenger هو خادم تطبيق مجاني يحمل دعمًا لنشر وإدارة نيزك ، Ruby on Rails Nginx Passenger و JavaScript و Python و Node.js.

## 2. قم بتثبيت حزم Nginx وركاب: {#step-1:-install-passenger-packages}

حان الوقت الآن لتثبيت الركاب و Nginx. ستتمكن من نشر أحد خوادم الويب الشهيرة التي تتبع هذا الدليل بسهولة. سيتم تثبيت الأوامر المدرجة أدناه للركاب و Nginx من خلال مستودع Phusion’s APT. إذا قمت بالفعل بتثبيت NGINX ، فستقوم هذه الأوامر بترقية Nginx إلى إصدار Phusion مع تجميع الركاب في:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. تمكين وحدة Nginx للركاب وإعادة تشغيل nginx: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

edit /etc/nginx/nginx.conf وتشمل uncomment /etc/nginx/passenger.conf ؛. على سبيل المثال ، قد ترى هذا:
```
# include /etc/nginx/passenger.conf;
```
قم بإزالة أحرف "#" ، مثل هذا:
```
include /etc/nginx/passenger.conf;
```
إذا كنت لا ترى نسخة معلقة من insly /etc/nginx/passenger.conf ؛ داخل nginx.conf ، فأنت بحاجة إلى إدراجها بنفسك. أدخله في /etc/nginx/nginx.conf داخل كتلة HTTP.
http {
    تشمل /etc/nginx/passenger.conf ؛
    ...
}
عند الانتهاء من هذه الخطوة ، **إعادة تشغيل nginx** :
```
$ sudo service nginx restart
```

## 4. التحقق من الصحة: {#step-3:-check-installation}

بعد التثبيت ، يرجى التحقق من صحة التثبيت في المحطة عن طريق تشغيل الأمر `sudo/usr/bin/passenger-config التحقق من صحة:
```
sudo /usr/bin/passenger-config validate-install
```
يجب أن تمر جميع الشيكات. إذا لم تمر أي من عمليات الشيكات ، فيرجى اتباع الاقتراحات على الشاشة.
أخيرًا ، تحقق مما إذا كان Nginx قد بدأ عمليات الركاب الأساسية. قم بتشغيل `sudo/usr/sbin/passenger-memory-stats` يجب أن ترى عمليات nginx وكذلك عمليات الركاب. على سبيل المثال مثل أدناه:
```
sudo /usr/sbin/passenger-memory-stats
```
إذا لم ترى أي عمليات NGINX أو عمليات الركاب ، فربما يكون لديك نوع من مشكلة التثبيت أو مشكلة التكوين. يرجى الرجوع إلى [دليل استكشاف الأخطاء وإصلاحها][3].

## 5. تحديثات النظام والركاب: {#step-4:-update-regularly}

يتم تسليم تحديثات NGINX وتحديثات الركاب وتحديثات النظام من خلال **APT Package Manager** بانتظام. يجب عليك تشغيل الأمر التالي بانتظام للحفاظ على تحديثه:
Sudo APT-GET UPDATE
Sudo APT-GET UPGRADE
لا تحتاج إلى إعادة تشغيل الويب أو التطبيق بعد التحديث ، ولا تحتاج أيضًا إلى تعديل أي ملفات تكوين بعد التحديث. كل هذا يتم الاعتناء به تلقائيًا من قِبل APT.

## 6. **أفضل خوادم ويب مفتوحة المصدر** : {#step-4:-update-regularly}

**ما هو خادم الويب مفتوح المصدر؟** برنامج خادم الويب مفتوح المصدر هو برنامج للمجال العام مصمم لتسليم صفحات الويب عبر الإنترنت على شبكة الإنترنت. تقوم تكنولوجيا المعلومات بشكل أساسي بمعالجة الطلبات عبر بروتوكول شبكة HTTP لتوزيع المعلومات على شبكة الويب العالمية.
يتم تشغيل أكثر من 80 ٪ من تطبيقات الويب ومواقع الويب بواسطة خوادم الويب مفتوحة المصدر. لقد أدرجت هنا بعضًا من خوادم الويب المفتوحة المصدر الأكثر شعبية**ويمكنك بسهولة نشر واحدة من خوادم الويب الشهيرة هذه بنفسك.
* **خادم Apache HTTP** 
* **خادم ويب Lightttpd** 
* **OpenLiteSpeed ​​Web Server** 
* **خادم الويب Apache Tomcat** 
* **خادم ويب العلبة** 

## [][4. الخلاصة: {#next-step}

تهانينا ، لقد قمت بتثبيت NGINX وتكوينها بنجاح مع خادم الإنتاج AWS **AWS**لتطبيق الويب الخاص بك. يرجى إلقاء نظرة على الأدلة المختلفة في [مكتبة الركاب][5] لاستقبال خادم تطبيق الركاب بالكامل. قد تكون مهتمًا بشكل خاص بدليل [النشر الأتمتة][6] لتطبيق Ruby الخاص بك من خلال**Capistrano** ، والذي يعلمك كيفية نشر تحديثات التطبيق المستقبلية تلقائيًا دون الكثير من العمل اليدوي. أنت الآن مستعد لنشر تطبيق الويب الخاص بك على مثيلات إنتاج AWS.
_ ما هو خادم الويب المجاني و Open Source Web Application Server_ هل تفضل **تطوير الويب أو استضافة** احتياجات_؟. هل لديك أي أسئلة حول خادم الويب المجاني وخادم تطبيق الويب مفتوح المصدر؟

## يستكشف
قد تجد منشورات المدونة ذات الصلة التالية:
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][8]
  * [تثبيت وتأمين phpmyadmin مع nginx على ubuntu][9]
  * [تكوين HTTP/2 دعم في NGINX على Ubuntu/Debian][10]
  * [تأمين وتشفير nginx مع دعنا نشحن على Ubuntu 20.04][11]
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
