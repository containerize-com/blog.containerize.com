---
title: "كيفية تأمين nginx مع دعنا نشحن على Ubuntu 20.04" 
seoTitle: "كيفية تأمين nginx مع دعنا نشحن على Ubuntu 20.04" 
description: "كيفية إعداد وتشفير وتأمين NGINX مع دعنا نشحن على Ubuntu. دعنا نتشفير العميل لإنشاء شهادات لتكوين NGINX تلقائيًا." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "تشمل مواقع الويب تشفير SSL/TLS لنطاقها لجذب الزوار. تشرح هذه المقالة استخدام الأداة المساعدة CERTBOT للحصول على شهادات TLS/SSL لـ NGINX." 
url: /ar/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

تتضمن مواقع الويب ## تشفير SSL/TLS لمجالها لجذب الزوار. تشرح هذه المقالة استخدام الأداة المساعدة CERTBOT للحصول على شهادات TLS/SSL لـ NGINX.

{{< figure align=center src="images/nginxletsencrypt.png" alt="تأمين nginx مع دعنا نشط على ubuntu">}}


##**ملخص**
أي موقع ويب يسعى إلى جذب الزوار يحتاج إلى تضمين تشفير TLS/SSL لنطاقه. تضمن شهادات SSL مجانًا وجود اتصال آمن بين خادم الويب الخاص بك مثل تشفير وتأمين متصفحات NGINX ومتصفحات التطبيق. دعنا ننشرف هي سلطة شهادة مجانية ومفتوحة ومفتوحة تتيح لك إعداد هذه الحماية لـ NGINX SSL Letsencrypt. دعنا نُثبت شهادات SSL المجانية من قبل جميع المتصفحات الرئيسية وصالح لمدة 90 يومًا القادمة من تاريخ العدد.
يشرح منشور المدونة هذا أبسط طريقة لتشفير وتأمين خادم الويب الذي يعمل على تشغيل NGINX على Ubuntu 20.04 / 18.04 من خلال الحصول على شهادات Nginx HTTPS Letsencrypt باستخدام أداة Nginx Certbot وإعداد شهاداتك لتجديدها تلقائيًا. لنبدأ وإعداد تكوينات ubuntu nginx.
  * التبعيات والمتطلبات الأساسية
  * تثبيت أداة CertBot
  * تأكيد تكوين Nginx
  * السماح لـ HTTPS من خلال جدار الحماية
  * الحصول على شهادة SSL
  * خاتمة

## أول الأشياء أولاً: التبعيات والمتطلبات الأساسية   {#prereveries}
من أجل اتباع هذه المقالة ، ستحتاج إلى متابعة التبعيات والمتطلبات الأساسية لتثبيت أدوات LetSencrypt Ubuntu nginx:
  * مستخدم لا يدعم SUDO غير الجذر أو الجذر على الآلات المحلية/عن بُعد.
  * نظام يعمل Ubuntu 20.04 أو Ubuntu 18.04
  * الوصول إلى محطة سطر الأوامر
  * امتيازات sudo أو الجذر على الآلات المحلية/البعيدة
  * تثبيت Nginx وإعداده
  * اسم مجال مسجل يشير إلى IP العام
  * كتلة خادم تم تكوينها لاسم المجال هذا
  * تم تكوين جدار الحماية لقبول الاتصالات على المنافذ 80 و 443.

## الخطوة 1-تثبيت certbot   {#step-1---- التثبيت-certbot}
الخطوة الأولى لتأمين NGINX وتشفير NGINX مع Let's Encrypt هي تثبيت NGINX CERTBOT محتملة بالكامل وسهلة الاستخدام للحصول على شهادات SSL وتجديدها على الخادم الخاص بك. للقيام بذلك ، ابدأ بفتح محطة على Ubuntu وتحديث المستودع المحلي. اكتب y وأدخل إذا طُلب.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
الآن دعنا نتحقق من بعض إعدادات التكوين الآمنة Nginx.

## الخطوة 2-تأكيد تكوين NGINX   {#Step-2---تأكيد nginx-39-s-configuration}
كما هو موضح في قسم التبعيات والمتطلبات المسبقة ، يجب أن يكون لديك بالفعل مجال مسجل ويجب أن تكون CertBot قادرًا على العثور على كتلة خادم Nginx الصحيحة لهذا المجال لتكوين SSL تلقائيًا. على سبيل المثال ، يستخدم منشور المدونة هذا المجال المدونة.
للتأكيد ، افتح ملف التكوين لمجالك باستخدام Nano أو محرر النصوص المفضل لديك:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
ابحث عن سطر توجيه Server_Name الحالي في ملف /etc/nginx/sites-available/blog.containerize.com. يجب أن تبدو هذه:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
تحقق الآن من بناء جملة ملفات تكوين NGINX الخاصة بك وإعادة تحميل خادم NGINX لتحميل إعدادات التكوين الجديدة:
```
sudo nginx -t
sudo systemctl reload nginx

```
يمكن لـ CertBot Utility الآن العثور على التوجيه الصحيح لخادم Nginx لتأمين Nginx وتحديثه تلقائيًا. في الخطوة التالية ، دعنا نقوم بتحديث جدار الحماية للسماح بحركة HTTPS.

## الخطوة 3-السماح لـ HTTPS من خلال جدار الحماية   {#step-3---السماح بـ https-though-the-firewall}
كما هو موصى به في هذه المقالة ، ستحتاج إلى ضبط الإعدادات للسماح بحركة HTTPS. للتأكد من تمكين جدار الحماية الخاص بك ونشطه ، قم بتشغيل الأمر أدناه:
```
sudo ufw status

```
يجب أن يخبرك الإخراج بأن UFW نشط ويمنحك قائمة بالقواعد المحددة. يظهر فقط أن حركة مرور HTTP مسموح بها لخادم الويب. للسماح بحركة المرور المشفرة ، يمكنك إما إضافة ملف تعريف Nginx HTTPS أو استخدام NGINX بالكامل وحذف قاعدة NGINX HTTP الحالية. السماح لحركة المرور Nginx HTTPS عن طريق كتابة الأمر:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
تحقق من قاعدة HTTPS التي تسمح بحركة HTTPS عن طريق كتابة أمر حالة UFW:
```
sudo ufw status

```
بعد ذلك ، دعنا ندير CERTBOT ونحضر شهاداتنا.

## الخطوة 4-الحصول على شهادة SSL   {#step-4---الحصول على an-ssl-certificate}
سيعتني المكون الإضافي لـ NGINX لـ CERTBOT بإعادة تكوين NGINX وإعادة تحميل تكوينه عند الضرورة. لذلك ، تحتاج فقط إلى إنشاء شهادات باستخدام Nginx Plug - من خلال تنفيذ الأمر التالي:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
إذا كانت هذه هي المرة الأولى التي تقوم فيها بتشغيل أداة CertBot ، فإن CertBot تطلب منك تكوين إعدادات HTTPS الخاصة بك. سيُطلب منك إدخال عنوان بريد إلكتروني والموافقة على شروط الخدمة. بعد الوصول إلى Enter ، سيتم تحديث التكوين ، وسيتم إعادة تحميل Nginx لالتقاط الإعدادات الجديدة. أخيرًا ، سيتم عرض Certbot برسالة تخبرك أنه تم إنشاء شهادة بنجاح ومكان تخزين شهاداتك.
يتم تنزيل شهاداتك وتثبيتها وتحميلها مع شهادة Nginx SSL تكوينات Letsencrypt. حاول إعادة تحميل موقع الويب الخاص بك باستخدام https: // وألاحظ مؤشر أمان المتصفح. يجب أن يشير إلى أن الموقع مضمون بشكل صحيح ، عادةً مع أيقونة القفل. إذا قمت باختبار الخادم الخاص بك باستخدام اختبار SSL Labs Server ، فسيحصل على درجة لـ NGINX و LetsenCrypt.
دعنا ننتهي من خلال اختبار عملية التجديد.

## الخطوة 5-التحقق من CertBot Auto-Renewal   {#Step-5---- التحقق
نظرًا لأن شهادات Let's Encrypt تنتهي صلاحيتها في كل تسعين (90) يومًا و Nginx SSL يتيح أن يشجع المستخدمون على إعداد المستخدمين وتجديدهم التلقائي. أولاً ، افتح ملف تكوين Crontab للمستخدم الحالي:
```
sudo crontab -e
```
إضافة وظيفة CRON التي تدير أمر CERTBOT ، يقوم CERTBOT RENECH NGINX بتجديد الشهادة إذا اكتشفت أن الشهادة ستنتهي في غضون 30 يومًا. جدولةها لتشغيلها يوميًا في وقت محدد ، على سبيل المثال 05:00 صباحًا.
```
sudo certbot renew --dry-run

```
يجب أن تتضمن مهمة CRON أيضًا السمة -Quiet ، كما في الأمر أعلاه. هذا يرشط شهادة NGINX REWSL SSL عدم تضمين أي إخراج بعد أداء المهمة. تمكين تجديد الشهادة التلقائي. بمجرد إضافة مهمة CRON ، احفظ التغييرات ، والخروج من الملف.

## الخاتمة   {#conclusion}
في هذه المقالة ، تعلمنا كيفية تثبيت NGINX شهادة LETSENCRYPT SSL. قمنا بتنزيل شهادات SSL لنطاقك وتكوين Nginx لاستخدام هذه الشهادات. بالإضافة إلى ذلك ، يجب أن تكون قد قمت بتمكين CertBot من تجديد الشهادات تلقائيًا لـ SSL Nginx Letsencrypt. في البرامج التعليمية القادمة ، سنناقش موضوعات أكثر إثارة للاهتمام حول كيفية تأمين خادم ويب مع تقنية أمان قياسية تتيح الاتصال المشفر بين متصفح الويب وخادم الويب.
_ يمكنك الانضمام إلينا على [Twitter][1] ، [LinkedIn][2] وصفحة [Facebook][3]. ما هو بروتوكول التشفير الذي تستخدمه لتوفير أمان الاتصالات عبر شبكة الكمبيوتر؟ إذا كان لديك أي أسئلة ، يرجى _ [الاتصال][4].

## يستكشف
قد تجد الروابط التالية ذات الصلة لمراقبة أداء الخادم وضمان موثوقيته وأمانه:
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][5]
  * [كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu][6]
  * [تكوين HTTP/2 دعم في NGINX على Ubuntu/Debian][7]
  * [Setup Nginx مع Passenger on AWS Production Server][8]
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
