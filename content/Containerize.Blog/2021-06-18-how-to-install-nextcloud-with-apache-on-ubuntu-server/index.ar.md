---
title: "كيفية تثبيت NextCloud مع Apache على خادم Ubuntu" 
seoTitle: "كيفية تثبيت NextCloud مع Apache على خادم Ubuntu" 
description: "NextCloud هو حل تخزين سحابة مفتوح المصدر ذاتيًا مكتوبًا في PHP. ستظهر هذه المقالة كيفية تثبيت NextCloud مع Apache على Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud هو برنامج مزامنة وتعاون مصادر مفتوحة المستضافة ذاتيا. سيوضح هذا البرنامج التعليمي كيفية تثبيت NextCloud مع Apache على Ubuntu." 
url: /ar/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud هو برنامج مزامنة وتعاون المصدر المستضيف ذاتيًا. سيوضح هذا البرنامج التعليمي كيفية تثبيت NextCloud مع Apache على Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="كيفية تثبيت NextCloud مع Apache على Ubuntn">}}


## **ملخص** 
**[NextCloud][1] **هو حل تخزين سحابة مجاني وآمن****مكتوب بلغة برمجة PHP. يوفر الوصول إلى البيانات باستخدام واجهة الويب ويشبه وظيفيًا Dropbox. حلول تخزين السحابة الخاصة مثل Dropbox و Google Drive مريحة ولكن يمكن استخدامها لجمع البيانات الشخصية لأن ملفاتك مخزنة على أنظمتها. إذا كنت بحاجة إلى حل مزامنة ومشاركة آمنة ومتوافقة ومتوافقة ، فيمكنك التبديل لفتح Source NextCloud Server. يمكن تثبيت إعداد NextCloud على خوادم منزلك الخاصة أو على خادم خاص افتراضي.
يوفر NextCloud Open Source **تشفيرًا من طرف إلى طرف** ، يعني أن الملفات يمكن تشفيرها على جهاز العميل قبل تحميلها على الخادم. يمكن أيضًا دمجها مع جناح Office عبر الإنترنت مثل Collobora ، فقط Effice NextCloud حتى تتمكن من إنشاء ملفات المستند الخاصة بك وتحريرها مباشرة من عميل NextCloud. يمكنك مشاركة ومزامنة ملف أو أكثر من الملفات والمجلدات على جهاز الكمبيوتر الخاص بك مع خادمك NextCloud بعد تنزيل عميل NextCloud. يوفر NextCloud Desktop Download وعملاء الأجهزة المحمولة خيارات لمزامنة ومشاركة جميع الأجهزة تحت سيطرتك. ضع ملفات البيانات في الدلائل المشتركة المحلية ، ويتم مزامنة هذه الملفات على الفور مع الخادم وللأجهزة الأخرى باستخدام عميل Sync Sync Next Cloid أو تطبيق iOS أو أجهزة Android.
سيساعدك هذا البرنامج التعليمي على تثبيت NextCloud على نظام التشغيل Ubuntu 20.04 LTS Linux مع Apache.
* **تثبيت المتطلبات الأساسية (مكدس المصباح)** 
* **قم بتنزيل أرشيف NextCloud على Ubuntu** 
* **إنشاء قاعدة بيانات MySQL** 
* **قم بتشغيل مثبت ويب NextCloud** 
  * **تغليف** 

## الخطوة 1: تثبيت المتطلبات الأساسية (مكدس المصباح)
أول شيء لتثبيت NextCloud على Ubuntu هو أنه يجب أن يكون لديك تشغيل **خادم المصباح**على نظام Ubuntu LTS الخاص بك. قم بتسجيل الدخول إلى نظامك وإمكانية الوصول إلى نافذة محطة الوصول. إذا كان لديك بالفعل Running**Lamp Stack** تخطي هذه الخطوة الأخرى ، فاستخدم الأوامر التالية لتثبيت التبعيات اللازمة.

### تثبيت PHP
لنبدأ بتثبيت إصدار PHP 5.6 أو إصدار أعلى على خادم Ubuntu الخاص بك:
Sudo APT-GET UPDATE
sudo app-get install -y php php-gd php-curl php-zip php-xml php-mbstring
يمكنك التحقق من إصدار PHP باستخدام الأمر التالي:
PHP -V
{{_LINE_29_}}

### تثبيت Apache2
بعد ذلك ، قم بتثبيت Apache مع الأمر:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl إعادة تشغيل Apache2
{{_LINE_34_}}

### تثبيت MySQL
مع التبعيات من الطريق ، فإن الخطوة التالية التي يجب الاعتناء بها هي تأمين خادم قاعدة بيانات MySQL. قم بتثبيت خادم قاعدة بيانات MySQL عن طريق التشغيل:
Sudo APT-get install -y mysql-server php-mysql
{{_LINE_38_}}

## الخطوة 2: تنزيل أرشيف NextCloud على Ubuntu
في وقت كتابة هذا المقال ، فإن أحدث إصدار من NextCloud هو 22.0.0beta5. بعد تكوين خادم المصباح بنجاح على نظامك ، دعنا نقوم بتنزيل NextCloud من [موقع الويب الرسمي][2].
CD /TMP
wget https://download.nextcloud.com/server/release/nextCloud-22.0.0beta5.zip
{{_LINE_43_}}
بمجرد الانتهاء من تنزيل خادم NextCloud ، تم تنزيل الأرشيف الذي تم تنزيله ضمن جذر وثيقة الموقع وإعداد ملكية دليل NextCloud إلى www-data على الملفات والدلائل.
CD/VAR/WWW/HTML
sudo unsip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextCloud
Sudo chmod -r 755 NextCloud
{{_LINE_49_}}
الآن ، قم بإزالة ملف الأرشيف الذي تم تنزيله.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## الخطوة 3: إنشاء قاعدة بيانات MySQL
بعد استخراج التعليمات البرمجية المصدر ، دعنا ننشئ قاعدة بيانات NextCloud MySQL وحساب المستخدم لتكوين NextCloud. استخدم مجموعة الأمر التالي لتسجيل الدخول إلى خادم MySQL ، قم بإنشاء قاعدة بيانات NextCloud والمستخدم والخروج من وحدة التحكم MySQL.
mysql -u root -p
أدخل كلمة المرور:
MySQL> إنشاء قاعدة بيانات NextCloud ؛
mysql> منح الكل على NextCloud.* إلى 'nextCloud'@'localhost' الذي تم تحديده بواسطة 'yasir_pa $$ w0rd_' ؛
mysql> امتيازات التدفق ؛
mysql> استقال
{{_LINE_61_}}

## الخطوة 4: قم بتشغيل مثبت ويب NextCloud
في هذه المرحلة ، قام NextCloud بتثبيت Ubuntu 20.04 بنجاح وتكوينه. الآن ، افتح دليل التكوين التالي في متصفح الويب كما هو موضح أدناه واكتب عنوان URL http://your-domain.com. قم بتغيير المضيف المحلي إلى عنوان IP الخادم الخاص بك أو اسم المجال. سترى الشاشة التالية:
http: // localhost/nextcloud/أو http: // your_domain_name/nextCloud/
{{_LINE_65_}}
أدخل بيانات اعتماد المسؤول الجديدة لإنشاء حساب المسؤول وتوفير موقع مجلد البيانات.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="كيفية تثبيت NextCloud مع Apache على خادم Ubuntu Linux">}}

{{_LINE_69_}}
الآن قم بتشغيل صفحتك لأسفل وأدخل اسم قاعدة البيانات واسم مستخدم قاعدة البيانات وكلمة المرور وانقر فوق الزر **إنهاء الإعداد** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="كيفية تثبيت NextCloud Ubuntu 20.04 مع Apache">}}

{{_LINE_73_}}
بمجرد الانتهاء من التثبيت ، يجب أن ترى لوحة معلومات Admin NextLoud في الشاشة التالية. هنا يمكنك إنشاء مستخدم ، مجموعات ، تعيين أذونات لهم ، إلخ.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="تثبيت NextCloud على Ubuntu مع Apache">}}

{{_LINE_77_}}
تهانينا ، لديك حل سحابة في NextCloud يعمل على نظام Ubuntu LTS الخاص بك. يمكنك الآن البدء في تخصيص خادم السحابة الخاص بك لتلبية احتياجاتك تمامًا.

## **تغليف:**  {#4a1a}

تهانينا! لقد نجحت في تكوين وتثبيت NextCloud على خادم Ubuntu مع Apache**. لقد تعلمت كيفية إنشاء سحابة خاصة. NextCloud Ubuntu Server هو منصة تعاون مذهلة لتخزين السحابة يمكن أن تخدم فقط احتياجات تخزين السحابة الخاصة أو الهجينة. أنت الآن تعرف كيفية تثبيت NextCloud على Ubuntu وبياناتك آمنة وآمنة في السحابة المستضافة ذاتيا. في البرامج التعليمية القادمة ، سنناقش حول الموضوعات الأكثر إثارة للاهتمام المتعلقة بمداخل حلول خادم الويب.
_ ما هو حل التخزين المستضيف ذاتيا القائم على السحابة هل تفضل؟. إذا كان لديك أي أسئلة ، يرجى [الاتصال][3] ._

## يستكشف:
قد ترغب في اتباع المقالات المتعلقة بالإدارة اليومية لخادمك.
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][4]
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu أو Debian][5]
  * [تثبيت وتأمين phpmyadmin مع nginx على ubuntu][6]
  * [تأمين وتشفير nginx مع دعنا نشحن على Ubuntu 20.04][7]
  * [تكوين HTTP/2 دعم في Nginx على Ubuntu/Debian][8]
  * [Setup Nginx مع ركاب على خادم إنتاج AWS][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
