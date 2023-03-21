---
title: "إعداد البرنامج التعليمي ل LEMP Stack على Ubuntu 18.04" 
seoTitle: "إعداد البرنامج التعليمي ل LEMP Stack على Ubuntu 18.04" 
description: "مكدس Lemp هو مكدس برامج يتم استخدامه لتطوير ونشر تطبيقات الويب. تعلم كيفية تثبيت Nginx و MySQL و PHP على Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "تثبيت & amp ؛ تكوين مكدس LEMP لتطوير ونشر تطبيقات الويب. سيساعدك هذا الدليل على تثبيت Nginx و MySQL و PHP على Ubuntu 18.04." 
url: /ar/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## تثبيت وتكوين مكدس LEMP لتطوير ونشر تطبيقات الويب. سيساعدك هذا الدليل على تثبيت Nginx و MySQL و PHP على Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="تثبيت lemp stack على Ubuntu">}}


## نظرة عامة   {#prereveries}
في هذا الدليل ، سنقوم بتثبيت Nginx و MySQL و PHP (مكدس LEMP) لتطوير ونشر تطبيقات الويب. سنقوم أيضًا بتكوين خادم ويب إلى تطبيق PHP الخادم على خادم Ubuntu 18.04. سنقوم بتغطية الأقسام التالية في هذا البرنامج التعليمي.
  *[ **المتطلبات الأساسية** ][1]
  *[ **ما هو lemp stack؟** ][2]
  *[ **تثبيت LEMP** ][3]
  *[ **الخلاصة** ][4]

## المتطلبات الأساسية   {#prereveries}
قبل تثبيت البرنامج ، يجب عليك تلبية المتطلبات التالية.
  * خادم مع نظام التشغيل Ubuntu
  *مستخدم غير جذر مع  **Sudo**  امتيازات

## ما هو lemp stack؟   {#ماذا}
**Lemp Stack** هي مجموعة من البرامج التي يمكن استخدامها لتشغيل تطبيقات الويب المستندة إلى PHP. Lemp يرمز إلى Linux و Nginx و MySQL و PHP. مكدس Lemp هو متغير من مكدس المصباح. يعد كل من LAMP و LEMP مكدسات برامج شائعة لتطوير ونشر تطبيقات الويب. هناك فرق واحد بين هذين مداخن البرنامج. يستخدم المصباح خادم الويب Apache ، في حين يستخدم Lemp Server خادم الويب Nginx.

## تثبيت LEMP   {#installation}
في هذا القسم ، سوف نركز على كيفية تثبيت Nginx و MySQL و PHP على Ubuntu 18.04. بادئ ذي بدء ، نحتاج إلى تحديث حزم الخادم عن طريق تشغيل الأمر أدناه.
```
$ sudo apt update
```

## # تثبيت خادم الويب Nginx
  *قم بتشغيل الأمر أدناه إلى  **تثبيت Nginx على Ubuntu** .
```
$ sudo apt install nginx
```
  * بمجرد الانتهاء من تثبيت NGINX ، افتح متصفح الويب الخاص بك واكتب عنوان IP لخادمك. سيعرض لك صفحة الترحيب الافتراضية لخادم الويب Nginx.

{{< figure align=center src="images/nginx-home-1.png" alt="الصفحة الافتراضية لخادم الويب Nginx">}}


## # تثبيت MySQL
الآن ، تحتاج إلى تثبيت خادم قاعدة بيانات MySQL لإدارة بيانات التطبيق الخاصة بك.
  *قم بتشغيل الأمر أدناه إلى  **تثبيت MySQL على Ubuntu** .
```
$ sudo apt install mysql-server
```
  * لتأمين تثبيت MySQL ، قم بتشغيل الأمر التالي.
```
$ sudo mysql_secure_installation
```
  *سيُطلب منك إما أنك تريد تمكين  **التحقق من مكونات كلمة المرور**  أو لا. من الأفضل عدم تمكينه ، اكتب N واضغط على Enter للانتقال إلى الخطوة التالية.
  * بعد ذلك ، سوف يطرح عليك سؤالين كما هو موضح أدناه. تحتاج إلى الإجابة على جميع الأسئلة.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * الآن ، يعمل خادم MySQL. يمكنك اختباره مع الأمر التالي. أدخل كلمة مرور حساب حساب Ubuntu ، وليس MySQL في حالة مطالبة كلمة مرور.
```
$ sudo mysql
```
  * أدخل الأمر أدناه للخروج من MySQL.
```
mysql> exit
```

## # تثبيت بي اتش بي
سوف نغطي تثبيت PHP-FPM لمعالجة PHP. PHP-FPM تعني مدير عملية FastCGI. لا يحتوي Nginx Web Server على أي وظيفة مصممة لمعالجة PHP لذلك ، سنستخدم PHP-FPM لذلك. بالإضافة إلى ذلك ، سنقوم بتثبيت PHP-MYSQL للتواصل مع MySQL لإدارة البيانات.
  *قم بتشغيل الأمر أدناه إلى  **تثبيت PHP على Ubuntu** .
```
$ sudo apt install php-fpm php-mysql
```
  * الآن ، يتم الانتهاء من تثبيت PHP وجميع البرامج المطلوبة لـ LEMP Stack لتشغيل تطبيق الويب.
  * في هذه الخطوة ، سنقوم بإنشاء ملف تكوين NGINX من أجل إخبار NGINX باستخدام معالج PHP للمحتوى الديناميكي. قم بتشغيل الأمر أدناه لإنشاء ملف تكوين nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * انسخ الرمز في ملف تكوين NGINX وحفظه.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * دعنا نلقي نظرة قصيرة على هذه التوجيهات وكتلة الموقع ، حتى تتمكن من الحصول على معلومات أساسية.
      * **استمع** : يمكنك تحديد المنفذ لـ NGINX. استخدم المنفذ 80 لـ HTTP و 443 لبروتوكولات HTTPS.
      * **الجذر** : حدد دليل الجذر لمشروعك. سيستخدمه Nginx لخدمة موقع الويب أو تطبيق الويب.
      * **الفهرس** : حدد الترتيب الذي يجب تقديم الملفات به. عند استدعاء ملف الفهرس ، سيقوم Nginx بتسليم ملف INDEX.PHP.
      * **server_name** : تحديد اسم المجال أو IP العام للخادم الخاص بك.
      ***الموقع /**: تحتوي كتلة الموقع هذه على ** TRAIN_BLOCK**  التوجيه وتطابق URI المطلوبة. يقوم Nginx بإرجاع خطأ 404 ، إذا لم يجد الملف المطلوب.
      * **الموقع ~ .php $** : يعالج كتلة الموقع معالجة PHP.
      * **الموقع ~ /.ht** : لا يعالج nginx**. لا يخدم NGINX.
  * قم بإنشاء Symlink لملف تكوين NGINX الذي تم إنشاؤه حديثًا لتمكينه.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * قم بتشغيل الأمر التالي لاختبار ملف تكوين NGINX لأخطاء بناء الجملة.
```
$ sudo nginx -t
```
  * أعد تشغيل خادم الويب Nginx.
```
$ sudo systemctl restart nginx
```

## # اختبار PHP
  * من أجل التأكد من أن Nginx يخدم صفحات PHP بشكل صحيح ، سنقوم بإنشاء ملف PHP لاختبار التكوينات.
  * إنشاء ملف info.php في الدليل الجذر لخادم الويب Nginx عن طريق تشغيل الأمر أدناه.
```
$ sudo nano /var/www/html/info.php
```
  * أضف الكود أدناه فيه وحفظ الملف.
```
<?php
phpinfo();
```
  * افتح متصفح الويب الخاص بك ونوع اسم المجال أو IP الخادم العام متبوعًا باسم ملف PHP مثل http: // server \ _ip \ _or_domain/info.php. سترى الصفحة أدناه.

{{< figure align=center src="images/info-php.png" alt="صفحة معلومات PHP">}}


## الخاتمة   {#conclusion}
في هذا البرنامج التعليمي ، ناقشنا حول كيفية تثبيت وتكوين  **Lemp Stack** . كما ترون ، فإن تكوين مكونات مكدس البرامج أمر سهل حقًا. بالإضافة إلى ذلك ، يمكنك البدء في إنشاء وخدمة تطبيقات الويب في دقائق.
أخيرًا ، [**Containerize.com **][5] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذه الفئة [**  Web Server Solution**][6] للحصول على آخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  *[ **أفضل مكدس حل خادم الويب مفتوح المصدر** ][7]
   ****  [أكثر أدوات الطب الشرعي الرقمية مفتوحة المصدر شعبية][8]**
  * **[Top 5 Open Source Message Programs (MQ) في 2021][9]**
  * **[أفضل برنامج تخزين السحابة ومشاركة الملفات مفتوح المصدر][10]**
  *[ **كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu** ][11]
  *[ **كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu** ][12]
  *[ **أفضل 5 تراخيص OSI-AP-OP-OPEN المعتمدة من 2021** ][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
