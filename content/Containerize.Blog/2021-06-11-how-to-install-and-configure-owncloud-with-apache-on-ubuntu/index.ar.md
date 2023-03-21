---
title: "كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu" 
seoTitle: "كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu" 
description: "OwnCloud هو برنامج خادم عميل مفتوح المصدر لإنشاء خدمات استضافة الملفات. في هذا البرنامج التعليمي ، سنتعلم كيفية تثبيت وتكوين OwnCloud على Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud هي مجموعة مفتوحة المصدر من برامج خادم العميل لإنشاء خوادم استضافة الملفات. هذا البرنامج التعليمي يدور حول كيفية تكوين OwnCloud على Ubuntu." 
url: /ar/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud هي مجموعة مفتوحة المصدر من برامج خادم العميل لإنشاء خوادم استضافة الملفات. هذا البرنامج التعليمي يدور حول كيفية تكوين OwnCloud على Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **ملخص**
OwnCloud هو تطبيق ويب مفتوح المصدر مجانيًا وشعبيًا مكتوبًا في PHP يستخدم لمزامنة البيانات ومشاركة الملفات. كما يتيح لك إدارة ملفات البيانات بسهولة وجهات الاتصال والتقويمات ، للقيام بالقوائم وغيرها الكثير. إنه بديل رائع للمنصات السحابية الأكثر شعبية مثل Google Drive و Dropbox و ICLOUD وخدمات التخزين السحابية الأخرى الموجودة هناك. ولكن على عكس خدمات التخزين السحابية الأخرى ، فإن OwnCloud Self Hosted مجاني لإنشاء سحابة مضيفة خاصة.
OwnCloud هو برنامج سحابة خاص مفتوح المصدر يوفر الوصول إلى البيانات باستخدام واجهة الويب لإنشاء سحابة خاصة. يمكّنك من إنشاء خادم مشاركة الملفات الخاص بك حيث يمكنك بسهولة عرض أحداث التقويم ومزامنتها ، والمحفوظات ، والصور ، والتسجيلات ، والمهام ، وأتباع العناوين مع الإشارات المرجعية ، على غرار Dropbox و Google Drive. كما يوفر خيارات لمزامنة البيانات ومشاركتها عبر الأجهزة جميعها تحت سيطرتك. يدعم تثبيت وتكوين OwnCloud بياناتك المزامنة لعملاء سطح المكتب وكذلك أجهزة تطبيقات الهاتف المحمول. علاوة على ذلك ، يمكنك بسهولة تنفيذ قيود الوصول إلى المستخدم والمجموعة على الملفات لكل مستخدم باستخدام OwnCloud على Ubuntu. OwnCloud Open Source Scoring Server هو تطبيق عرضي من النظام الأساسي ويمكن تثبيته على جميع أنظمة التشغيل الشائعة.
سيساعدك هذا البرنامج التعليمي على إعداد OwnCloud وتكوين OwnCloud على أنظمة Ubuntu LTS.
  * تثبيت خادم المصباح
  * تنزيل ownCloud
  * إنشاء قاعدة بيانات MySQL والمستخدم
  * تثبيت ownCloud
  * ما هي أفضل البدائل لـ OwnCloud؟
  * خاتمة

## الخطوة 1: تثبيت خادم المصباح
لإعداد الخادم السحابي الخاص وكيفية إنشاء سحابة خاصة ، نحتاج أولاً إلى إعداد خادم مصباح قيد التشغيل. إذا كنت قد قمت بتثبيت مكدس المصباح وتشغيله بالفعل ، فاختر هذه الخطوة الأخرى ، استخدم أوامر التالية لإعداد المصباح على نظام Ubuntu الخاص بك.

### تثبيت PHP
يمكنك تثبيت PHP 5.6 أو إصدار أعلى على نظام Ubuntu أو Debian عن طريق تشغيل الأوامر:
Sudo APT-GET تثبيت Python-software-properties
sudo add-appt-repository ppa: ondrej/php
Sudo APT-GET UPDATE
Sudo APT -GET UPGRADE -Y
sudo app-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### تثبيت Apache2
Apache هو أكثر برنامج خادم الويب مفتوح المصدر. بعد ذلك ، قم بتثبيت خادم الويب Apache على Ubuntu لإعداد خادم السحابة الخاص بك عن طريق التشغيل:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### تثبيت MySQL
MySQL Open Source Management System Management Relational Management هو مكون من مكدس برامج تطبيق Web Lamp وغيرهم. الآن تثبيت MySQL على Ubuntu عن طريق التشغيل أدناه:
Sudo APT-get install -y mysql-server php-mysql
{{_LINE_39_}}

## الخطوة 2: تنزيل OwnCloud على Ubuntu
بعد تكوين خادم المصباح بنجاح على نظام Ubuntu الخاص بك ، دعنا نقوم بتنزيل أحدث حل لتخزين السحابة الخاصة OwnCloud من [موقع الويب الرسمي][1].
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
بعد تنزيل برنامج OwnCloud Server ، استخرج الآن الأرشيف الذي تم تنزيله ضمن جذر وثيقة الموقع وإعداد الأذونات المناسبة على الملفات والدلائل عن طريق التشغيل لتثبيت OwnCloud على Ubuntu.
CD/VAR/WWW/HTML
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
الآن ، قم بإزالة ملف الأرشيف وأعد تشغيل خادم Apache.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl إعادة تشغيل Apache2

## الخطوة 3: إنشاء قاعدة بيانات OwnCloud والمستخدم
بعد استخراج التعليمات البرمجية ، دعنا الآن إنشاء قاعدة بيانات MySQL وحساب المستخدم لتكوين خادم تخزين السحابة الشخصية الخاصة. استخدم مجموعة الأوامر التالية لتسجيل الدخول إلى MySQL Server لإنشاء قاعدة بيانات OwnCloud والمستخدم.
mysql -u root -p
أدخل كلمة المرور:
MySQL> إنشاء قاعدة بيانات OwnCloud ؛
mysql> منح جميع على ownCloud.* إلى "owncloud '@' localhost" التي تم تحديدها بواسطة '_password_' ؛
mysql> امتيازات التدفق ؛
mysql> استقال
{{_LINE_62_}}
بعد ذلك ، نحتاج إلى تثبيت OwnCloud على Ubuntu من واجهة الويب لإنشاء سحابة خاصة.

## الخطوة 4: تثبيت owncloud على Ubuntu
الآن قم بالوصول إلى دليل لوحة ويب Cloud Cloud Best Personal Cloud على متصفح الويب. قم بتغيير المضيف المحلي إلى عنوان IP الخادم الخاص بك أو اسم المجال.
http: // localhost/ownCloud/
{{_LINE_67_}}
يجب أن ترى صفحة تسجيل دخول OwnCloud مفتوحة المصدر. أدخل بيانات اعتماد اسم المستخدم وكلمة المرور الجديدة لإنشاء حساب المسؤول وتوفير موقع مجلد البيانات. إذا كان كل شيء على ما يرام ، فعليك الحصول على صفحة الويب مثل هذا.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="قم بتثبيت owncloud مع Apache على Ubuntu">}}

{{_LINE_71_}}
الآن حرك صفحتك لأسفل. في النموذج أدناه ، تحتاج إلى إدخال اسم المستخدم وكلمة المرور إلى إدارة أفضل لوحة Cloud Server OwnCloud. قم أيضًا بتوفير قاعدة البيانات جنبًا إلى جنب مع اسم المستخدم وكلمة المرور لتوصيل خادم OwnCloud بخادم قاعدة البيانات ، وموقع مجلد البيانات وانقر فوق **Finish Setup** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="تكوين OwnCloud على Ubuntu">}}

{{_LINE_75_}}
بعد الانتهاء من الإعداد ، ستحصل على لوحة معلومات المسؤول. حيث يمكنك إنشاء المستخدمين والمجموعات وتعيين أذوناتهم ، إلخ.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="تثبيت OwnCloud Dashboard">}}

{{_LINE_79_}}
نعم! لقد انتهينا من دليل تثبيت OwnCloud لبناء التخزين السحابي الشخصي. أنت تعرف الآن كيفية تثبيت OwnCloud بالكامل على Ubuntu لإنشاء سحابة خاصة خطوة بخطوة مماثلة لـ Dropbox أو Google Drive.

## **ما هي أفضل البدائل لـ OwnCloud؟**    {#4A1A}
فيما يلي بدائل الاستضافة الخاصة بالملفات والمنافسين المستضافة ذاتيا.
  ***seafile**  هو نظام برامج استضافة الملفات المفتوح المصدر
  ***NextCloud**  منصة تخزين السحابة المجانية والمفتوحة المصدر
  ***Resilio Sync**  هو نظير مفتوح المصدر لتطبيق مزامنة ملفات النظراء
  **خلايا Pydio**  هي برنامج مشاركة الملفات والمزامنة مفتوحة المصدر
  ***Syncthing**  تطبيق مزامنة ملفات الأقران المجانية والمفتوحة المصدر

## **الخلاصة:**    {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}
تهانينا! لقد قمت بتثبيت وتكوين OwnCloud بنجاح لإنشاء سحابة خاصة بك مع Apache على جهاز Ubuntu. الآن لا تكون بياناتك أبدًا في أيدي أطراف ثالثة ويمكن إدارتها بشكل خاص في تخزين خادم Ubuntu الخاص بـ Cloud الخاص بـ Cloud الخاص. تختار العديد من الشركات إنشاء خوادمها الخاصة مع الكثير من المعلومات الحيوية بسبب العديد من المشكلات المتعلقة بخصوصية البيانات. في دروسنا القادمة ، سنناقش مواضيع أكثر إثارة للاهتمام من مداخن حلول خادم الويب.
_ يمكنك الانضمام إلينا على [Twitter][2] و [LinkedIn][3] وصفحة [Facebook][4]. ما هو حل التخزين المستند إلى مجموعة النظراء التي تستخدمها عبر الإنترنت؟. إذا كان لديك أي أسئلة ، يرجى _ [الاتصال][5].

## يستكشف:
لدينا أيضًا العديد من المقالات الأخرى المتعلقة بالإدارة اليومية لخادمك.
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][6]
  * [كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu][7]
  * [تأمين وتشفير nginx مع دعنا نش تشفير على Ubuntu 20.04][8]
  * [تكوين HTTP/2 دعم في Nginx على Ubuntu/Debian][9]
  * [Setup Nginx مع ركاب على خادم إنتاج AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
