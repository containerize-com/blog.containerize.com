---
title: "كيفية تكوين دعم HTTP/2 في Nginx على Ubuntu/Debian" 
seoTitle: "كيفية تكوين دعم HTTP/2 في Nginx على Ubuntu/Debian" 
description: "HTTP2 أو H2 هو بروتوكول ثنائي ونسخة محسّنة من بروتوكول HTTP الذي يسمح بزيادة سرعة صفحات الموقع بعد تمكين NGINX دعم HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 هو بروتوكول متعدد الإرسال قوي لتحسين سرعة تحميل الصفحة والأمان. في هذا البرنامج التعليمي ، سوف نتعلم كيفية إعداد NGINX باستخدام دعم HTTP/2." 
url: /ar/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 هو بروتوكول قوي متعدد الإرسال لتحسين سرعة تحميل الصفحة والأمان. في هذا البرنامج التعليمي ، سوف نتعلم كيفية إعداد NGINX باستخدام دعم HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="NGINX تمكين دعم HTTP2 على Ubuntu و Debian">}}


## **ملخص**
NGINX هو خادم ويب سريع مفتوح المصدر وموثوق به. اكتسبت شعبية بسبب انخفاض بصمة الذاكرة ، وموازنة التحميل ، وارتفاع التوسع ، والتخزين المؤقت ، ودعم غالبية البروتوكولات والوكالة العكسية. الآن دعنا نتحدث عن كيفية تمكين NGINX من بروتوكول HTTP2.
أحد البروتوكولات التي تدعمها NGINX هي HTTP/2 التي تم نشرها في مايو 2015. الميزة الرئيسية لـ HTTP/2 هي سرعة نقلها العالية لمواقع الويب الغنية بالمحتوى ، وتقلل من الحمل على خادم الويب ويمكنه بدء طلبات متوازية متعددة في اتصال TCP واحد. NGINX تمكين HTTP2 هو نسخة محسنة من بروتوكول HTTP. قبل أن نبدأ ، سنحتاج إلى عدد قليل من خادم Ubuntu أو Debian مع شهادة SSL. في هذا البرنامج التعليمي ، سنوجهك خطوة بخطوة حول كيفية تمكين NGINX HTTP2 على Ubuntu.
  * تحديث الحزم وتثبيت nginx
  * تمكين دعم HTTP/2
  * إضافة اسم الخادم
  * إضافة شهادات SSL
  * إزالة الأصفار
  * إعادة توجيه جميع طلبات HTTP إلى HTTPS
  * إعادة تشغيل nginx
  * خاتمة

## الخطوة 1: تحديث الحزم وتثبيت nginx   {#4597}
الخطوة الأولى هي تحديث وترقية المستودعات في نظام التغليف APT. سيقوم استخدام التحديث بتنزيل أحدث حزم الإصدار وسيقوم الترقية بتثبيت أحدث إصدار من الحزم في القائمة. قم بتشغيل أمر APT أدناه لتحديث الحزم وترقيتها.
```
sudo apt-get update && apt-get upgrade
```
والخطوة التالية هي تثبيت أحدث إصدار من حزمة Nginx. تم تقديم دعم بروتوكول HTTP/2 في الإصدار 1.9.5 NGINX وما فوق. لذلك ، سيتعين علينا تثبيت أحدث إصدار من حزمة Nginx. قم بتشغيل الأمر أدناه ، استخدم الأمر apt install لتثبيت حزم nginx:
```
sudo apt-get install nginx
```
سيُطلب منك تأكيد عملية تثبيت الخطوة بخطوة. حدد خيار نعم وإنهاء عملية التثبيت. بعد انتهاء عملية التثبيت ، تتمثل الخطوة التالية في التحقق من إصدار الحزمة سواء قمنا بتثبيت الإصدار الصحيح أم لا. يمكنك التحقق من إصدار خادم الويب Nginx عن طريق كتابة الأمر:
```
sudo nginx -v
```
يجب أن يكون أمر التحقق من إخراج الإصدار أعلاه مشابهًا لما يلي:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## الخطوة 2: تمكين http/2 دعم   {#f4d2}
بعد تثبيت حزمة NGINX ، نحتاج إلى تمكين HTTP2 NGINX. يتعين على المستخدم تغيير منفذ الاستماع من 80 إلى 443. دعنا نفتح ملف تكوين NGINX:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
يمكنك رؤية القيمة الافتراضية لـ Nginx تم تعيينها للاستماع هي المنفذ 80.
الاستماع 80 default_server ؛
استمع [::]: 80 Default_server ؛
كما ترون أن هناك متغيران مختلفان للاستماع. أول متغير الاستماع هو لجميع IPv4connections والثاني هو لاتصالات IPv6. سوف نمكّن التشفير لكلا المتغيرين. قم بتغيير رقم منفذ الاستماع إلى 443 وأضف اتصال SSL لبروتوكول HTTPS كما هو موضح أدناه:
الاستماع 443 SSL HTTP2 Default_server ؛
استمع [::]: 443 SSL HTTP2 Default_server ؛
لاحظ أنه بالإضافة إلى SSL ، أضفنا أيضًا HTTP2. Nginx الآن قادر على استخدام المتصفحات التي تدعم بروتوكول HTTP/2.

## الخطوة 3: إضافة اسم الخادم   {#a745}
الخطوة التالية هي تغيير الخادم \ _name بحيث يرتبط اسم الخادم باسم المجال. يحتاج المستخدم فقط إلى تغيير اسم الخادم في ملف التكوين. حدد موقع إدخال الخادم \ _name في ملف التكوين وتغيير _ إلى مجالك الفعلي ، مثل هذا:
```
server_name example.com www.example.com;
```
احفظ ملف تكوين الخادم عن طريق التحرير في محرر النصوص. يمكنك التحقق من تكوين NGINX لأخطاء بناء الجملة مع الأمر:
```
sudo nginx -t
```
إذا كان بناء الجملة خاليًا من الأخطاء ، فسترى الإخراج أدناه:
NGINX: بناء ملف التكوين/etc/nginx/nginx.conf على ما يرام
NGINX: اختبار التكوين/etc/nginx/nginx.conf ناجح

## الخطوة 4: إضافة شهادات SSL   {#37C0}
الخطوة التالية هي تمكين تكوين NGINX HTTPS لاستخدام شهادة SSL الخاصة بك. يمكنك إنشاء شهادة موقعة ذاتية أو [تثبيت شهادة مجانية من Let's Encrypt][1]. إذا لم يكن لديك شهادة SSL ، فيرجى اتباع هذا البرنامج التعليمي. أضف شهادات SSL الخاصة بك داخل دليل تكوين NGINX على غرار:
```
sudo mkdir /etc/nginx/ssl
```
انسخ شهادتك والمفتاح الخاص إلى هذا الموقع وأيضًا استبدال example.com باسم المجال الفعلي:
sudo cp/path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp/path/to/your/private.key /etc/nginx/ssl/example.com.key
افتح الآن ملف تكوين خادم Nginx مرة أخرى. إضافة وتكوين خطوط SSL جديدة داخل كتلة خادم Nginx مع موقع شهاداتك لتمكين تكوين NGINX SSL:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt ؛
ssl_certificate_key /etc/nginx/ssl/example.com.key ؛
احفظ ملف NGINX والخروج من محرر النصوص.

## الخطوة 5: إزالة الأصفار   {#d291}
الشفرات هي خوارزمية تستخدم في التشفير لتشفير البيانات وفك التشفير. أجنحة الشفرات هي مجموعة من خوارزميات التشفير المستخدمة لتأمين اتصالات الشبكة. يحتوي HTTP/2 على قائمة سوداء ضخمة من الأصفار غير الآمنة التي تحتاج إلى إزالتها. سنستخدم هنا مجموعة مشفرة شهيرة ، معتمدة من قبل عمالقة الإنترنت CloudFlare.
افتح ملف تكوين nginx التالي/etc/nginx/nginx.conf وأضف الأسطر أدناه مباشرة بعد **ssl \ _prefer \ _server_ciphers على.**  تتضمن هذه الأسطر قائمة أحدث الأصفار التي يفهمها متصفحات HTTP2.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
يمكنك تعيين GZIP على OFF وإضافة proxy \ _max \ _temp \ _file \ _size 0 ؛ لتجنب err \ _http2 \ _protocol_error خطأ nginx.

## الخطوة 6: إعادة توجيه جميع طلبات HTTP إلى https   {#b387}
الآن يجب أن نخبر Nginx HTTP2 Proxy ما الذي يجب أن يخدم المحتوى من خلال HTTPS فقط إذا تلقى الخادم طلب HTTP. أخيرًا ، تجاهل الخطوط المعلقة ، يجب أن يبدو ملف تكوين nginx الخاص بك/etc/nginx/sites-available/domain-name.com يشبه هذا:
Server {annist 443 SSL HTTP2 Default_server ؛ استمع [::]: 443 SSL http2 default_server ؛ root/var/www/html ؛ index.html index.htm index.nginx-debian.html ؛ server_name example.com ؛ location/{try_files $ uri/= 404 ؛ } ssl_certificate /etc/nginx/ssl/example.com.crt؛ssl_certificate_key /etc/nginx/ssl/example.com.key؛ssl_dhparam /etc/nginx/ssl/dhparam.pem ؛) استمع [::]: 80 ؛ server_name example.com ؛ إرجاع 301 https: // $ server_name $ request_uri ؛}
احفظ ملف /etc/nginx/sites-available/domain-name.com ثم الخروج. تحقق من تكوينات أخطاء بناء الجملة:
```
sudo nginx -t
```

## الخطوة 7: إعادة تشغيل nginx   {#e687}
لتطبيق جميع التغييرات ، أعد تشغيل خادم الوكيل العكسي NGINX HTTP2 والتحقق من حالة التكوين.
sudo systemctl إعادة تشغيل nginx
sudo systemctl حالة nginx

## **الخلاصة:**    {#4A1A}
تهانينا ، لقد تعلمت بنجاح كيفية إعداد دعم Nginx Config HTTP2 على خادم Ubuntu. تقوم إعدادات NGINX HTTP2 الخاصة بك الآن بتقديم صفحات HTTP/2 ، كما تم مسح الفرق بين بروتوكولات HTTP/1 و HTTP/2. إذا كنت لا تزال تواجه أي مشكلات تكوين ، فأخبرنا في قسم التعليقات.
هل لديك أي أسئلة حول بروتوكول HTTP2 Multiplexed؟ _ ، من فضلك _ [الاتصال باللمس][2].

## يستكشف
قد تحب أيضًا المقالات أدناه:
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][3]
  * [كيفية][3][تثبيت وتأمين phpmyadmin مع nginx على ubuntu][4]
  * [كيفية إعداد nginx مع ركاب على خادم إنتاج AWS][5]
  * [تأمين وتشفير nginx مع دعنا نش تشفير على Ubuntu 20.04][1]
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
