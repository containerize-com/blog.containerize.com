---
title: "كيفية تثبيت منصة مشاركة ملفات Pydio ومزامنتها على Ubuntu" 
seoTitle: "كيفية تثبيت منصة مشاركة ملفات Pydio ومزامنتها على Ubuntu" 
description: "Pydio هو مشاركة ملفات مفتوحة المصدر وبرامج مشاركة المستندات التعاونية المستضافة ذاتيا. دعنا نراجع كيفية تثبيت أداة مشاركة ملفات Pydio ومزامنتها." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio عبارة عن منصة مشاركة الملفات المستندة إلى مجموعة النظراء ومزامنتها للوصول إلى جميع البيانات في أي مكان وعلى أي جهاز. هذا البرنامج التعليمي يدور حول كيفية تثبيت Pydio على Ubuntu." 
url: /ar/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio عبارة عن نظام أساسي لمشاركة الملفات ومزامنة الملفات السحابية للوصول إلى جميع البيانات في أي مكان وعلى أي جهاز. هذا البرنامج التعليمي يدور حول كيفية تثبيت Pydio على Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="كيفية تثبيت منصة مشاركة ملفات Pydio ومزامنتها على Ubuntu">}}


## **ملخص**
خلايا Pydio هي برنامج مشاركة الملفات والمزامنة مفتوحة المصدر. يوفر نقطة وصول واحدة إلى جميع تخزين البيانات الخاص بك ، وهو بديل لـ OwnCloud و NextCloud الذي يوفر خدمات التخزين ومشاركة الملفات والمزامنة. Pydio هو منصة مشاركة ملفات مفتوحة المصدر للمؤسسة مماثلة لنظام Dropbox ومنصات التخزين الأخرى. يساعدك على توصيل جميع ملفاتك وأجهزتك بشكل آمن.
خلايا Pydio هي منصة مزامنة الملفات والتعاون المستندة إلى مجموعة النظراء. يعمل هذا البرنامج المفتوح المصدر على البنية التحتية الخاصة بتكنولوجيا المعلومات الشخصية ويساعد موظفيك على حماية ومراقبة بيانات عملك. يمكنك مزامنة البيانات الخاصة بك والوصول إليها من أي مكان باستخدام تطبيق الهاتف المحمول أو برنامج سطح المكتب أو متصفح الويب باستخدام خلايا Pydio. يعتمد تطبيق Pydio Cells Best File Sharing على بنية الخدمة الصغيرة ويتم كتابتها باستخدام لغة برمجة Golang.
سيساعدك هذا البرنامج التعليمي على تثبيت وتكوين برامج مشاركة الملفات المستضافة ذاتيا Pydio وتوليفها على أنظمة Ubuntu LTS.
  * ابدء
  * تثبيت خادم المصباح
  * تثبيت Pydio على Ubuntu
  * إنشاء قاعدة بيانات Pydio والمستخدم
  * الوصول إلى Pydio على متصفحك
  * خاتمة

## الخطوة 1: البدء
قبل التثبيتات ، تحتاج إلى التأكد من تشغيل نظامك أحدث الحزم. استخدم الأمر أدناه لتحديث خادم Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
بعد التحديث ، يُنصح دائمًا بإعادة تشغيل الخادم الخاص بك للتغييرات الجديدة.
```
sudo reboot
```

## الخطوة 2: تثبيت خادم المصباح
لإعداد خادم مشاركة ملفات Pydio Secure Enterprise وكيفية إنشاء سحابة خاصة مفتوحة المصدر ، نحتاج أولاً إلى إعداد خادم مصباح قيد التشغيل. إذا كنت قد قمت بتثبيت مكدس المصباح وتشغيله بالفعل ، فاختر هذه الخطوة الأخرى ، استخدم أوامر التالية لإعداد المصباح على نظام Ubuntu الخاص بك.

## # تثبيت PHP
يمكنك تثبيت PHP على نظام Ubuntu أو Debian عن طريق تشغيل الأوامر:
Sudo APT-GET تثبيت Python-software-properties
sudo add-appt-repository ppa: ondrej/php
sudo app-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # تثبيت Apache2
Apache هو أكثر برنامج خادم الويب مفتوح المصدر. بعد ذلك ، قم بتثبيت خادم الويب Apache على Ubuntu عن طريق التشغيل:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # تثبيت MySQL
MySQL Open Source Management System Management Relational Management هو مكون من مكدس برامج تطبيق Web Lamp وغيرهم. الآن تثبيت MySQL على Ubuntu عن طريق التشغيل أدناه:
Sudo APT-get install -y mysql-server php-mysql
{{_LINE_42_}}
بمجرد اكتمال التثبيت ، افتح **ملف التكوين ** php.ini**  لتحريره. استخدم محرر الملف المفضل لديك.
قم بإجراء تغييرات على ملف php.ini على النحو التالي. افتح ملفين وقم بإجراء التغييرات كما هو موضح
```
sudo vim /etc/php/7.4/apache2/php.ini
```
قم بإجراء التغييرات التالية
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
احفظ الملف وأغلقه وانتقل إلى تحرير ملف php.ini الآخر
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## الخطوة 3: تثبيت Pydio على Ubuntu
تحتاج أولاً إلى إضافة مستودع برامج مشاركة الملفات المجاني لـ Pydio إلى خادم Ubuntu 20.04 لأنه غير متوفر بالفعل. أضف أيضًا نظام مشاركة الملفات الأفضل لـ Pydio لـ Business Public Key والمضي قدماً في تحديث مستودع النظام الخاص بك.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
لقد حان الوقت الآن لتثبيت برنامج Pydio EFSS وبرامج مشاركة المستندات. قم بتشغيل الأمر كما هو موضح
```
sudo apt install -y pydio pydio-all
```
تمكين وحدة إعادة كتابة Apache باستخدام الأوامر الموضحة أدناه وإعادة تشغيل وتمكين Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
تأكد من أن خدمة Apache تعمل باستخدام الأمر أدناه:
```
sudo systemctl status apache2
```
يجب أن يكون الإخراج كما هو موضح إذا تم التثبيت بشكل صحيح ، مما يوضح أن خدمة APACH2 قيد التشغيل.

## الخطوة 4: إنشاء قاعدة بيانات Pydio والمستخدم
بعد استخراج التعليمات البرمجية ، دعنا الآن إنشاء قاعدة بيانات MySQL وحساب المستخدم لتكوين Pydio. استخدم مجموعة الأوامر التالية لتسجيل الدخول إلى MySQL Server لإنشاء قاعدة بيانات AjaxPlorer SarkSync أو Pydio والمستخدم.
mysql -u root -p
أدخل كلمة المرور:
mysql> إنشاء قاعدة بيانات pydio ؛
mysql> Grane All on Pydio.* to 'pydio'@'localhost' التي تم تحديدها بواسطة '_password_' ؛
mysql> امتيازات التدفق ؛
mysql> استقال
{{_LINE_69_}}
بعد ذلك ، نحتاج إلى تثبيت Pydio على Ubuntu من واجهة الويب لإنشاء سحابة خاصة.

## الخطوة 5: الوصول إلى Pydio على متصفحك
افتح متصفحك واكتب عنوان URL _http: /// pydio_. يجب أن ترى صفحة كما هو موضح
تم الآن تثبيت وتكوين ملفات مشاركة ملفات Pydio الخاصة ومشاركة ملفات الأعمال ، وقد حان الوقت للوصول إلى واجهة الويب الخاصة بهم.
افتح متصفحك واكتب url http: // your -server -IP / pydio. سيتم إعادة توجيهك إلى الصفحة التالية:

{{< figure align=center src="images/Pydio-Installer.png" alt="مثبت Pydio">}}

قم بتأكيد جميع عناصر التحكم وانقر فوق  **تابع إلى زر تثبيت Pydio** . يجب أن ترى الصفحة التالية:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="معالج إعداد Pydio">}}

حدد لغتك وانقر فوق  **ابدأ معالج** . يجب أن ترى الصفحة التالية:

{{< figure align=center src="images/Starting-the-setting.png" alt="ابدأ إعدادات Pydio">}}

أدخل اسم البرنامج ورسالة الترحيب. ثم انقر فوق الزر  **التالي** . يجب أن ترى الصفحة التالية:

{{< figure align=center src="images/Enter-the-application-name.png" alt="أدخل تطبيق Pydio">}}

بعد ذلك ، أدخل حساب المسؤول الخاص بك وانقر فوق الزر  **التالي** . يجب أن ترى الصفحة التالية:

{{< figure align=center src="images/MySQL-database-settings.png" alt="إعدادات قاعدة بيانات MySQL">}}

ثم أدخل تفاصيل قاعدة البيانات الخاصة بك ، مثل اسم قاعدة البيانات واسم المستخدم وكلمة المرور. ثم انقر فوق الزر  **Test DB Connection** . يجب أن ترى الصفحة التالية:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="خيارات Pydio المتقدمة">}}

بعد ذلك ، انقر فوق الزر  **تثبيت Pydio** . بمجرد الانتهاء من التثبيت بنجاح. سيتم إعادة توجيهك إلى الصفحة التالية:

{{< figure align=center src="images/Pydio-Login.png" alt="تسجيل الدخول Pydio">}}

ثم أدخل اسم المستخدم وكلمة المرور للمسؤول. ثم انقر فوق الزر [إدخال]. يجب أن ترى الصفحة التالية:

نعم! تم التنفيذ. أنت تعرف الآن كيفية تثبيت Pydio Self Hosted File Sync وبرامج مشاركة الملفات مفتوحة المصدر على Ubuntu لإنشاء سحابة خاصة خطوة بخطوة مماثلة لـ Dropbox أو Google Drive.

##  **الخلاصة:**    {#4A1A}
في هذا البرنامج التعليمي ، قمت بنجاح بتثبيت مشاركة ملفات Pydio Cells Open Secure على نظام Ubuntu الخاص بك. يمكنك استخدام هذه المقالة لإنشاء بنية تحتية سحابية لتخزين وتأمين ومشاركة ملفاتك في السحابة المستضافة ذاتيا. استخدم مشاركة المستندات التعاونية في PYDIO وأفضل تطبيق لمشاركة الملفات المجاني للحصول على مزيد من التحكم في بياناتك وضمان تعاون فعال في مؤسسة عملك. في دروسنا القادمة ، سنناقش موضوعات أكثر إثارة للاهتمام لحلول تخزين السحابة المفتوحة المصدر وأدوات تعاون مشاركة الملفات.
_ يمكنك الانضمام إلينا على [Twitter][1] ، [LinkedIn][2] وصفحة [Facebook][3]. ما هو النظام الأساسي للمشاركة _file المستند إلى Cloud_ -file التي تستخدمها عبر الإنترنت؟. إذا كان لديك أي أسئلة ، يرجى _ [الاتصال][4].

## يستكشف:
لدينا أيضًا العديد من المقالات الأخرى المتعلقة بالإدارة اليومية لخادمك.
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][5]
  * [كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu][6]
  * [تأمين وتشفير nginx مع دعنا نشحن على Ubuntu 20.04][7]
  * [تكوين HTTP/2 دعم في Nginx على Ubuntu/Debian][8]
  * [Setup Nginx مع ركاب على خادم إنتاج AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
