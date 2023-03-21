---
title: "كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket" 
seoTitle: "كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket" 
description: "إدارة جميع طلبات الدعم الخاصة بك في مكان واحد باستخدام مكتب مساعدة Osticket. قم بتحويل الاستفسارات التي تم إنشاؤها عبر البريد الإلكتروني والهاتف والنماذج إلى تذاكر على الويب." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "إدارة جميع طلبات الدعم الخاصة بك في مكان واحد باستخدام Osticket. قم بتحويل الاستفسارات التي تم إنشاؤها عبر البريد الإلكتروني والهاتف والنماذج إلى تذاكر بسيطة قائمة على الويب." 
url: /ar/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## إدارة جميع طلبات الدعم الخاصة بك في مكان واحد باستخدام Osticket. قم بتحويل الاستفسارات التي تم إنشاؤها عبر البريد الإلكتروني والهاتف والنماذج إلى تذاكر بسيطة قائمة على الويب.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket">}}

Osticket هو حل برنامج مكتب مساعدة مفتوح المصدر عبر الإنترنت. Osticket Helpdesk هو بديل مجاني لأنظمة دعم العملاء المرتفعة والمعقدة. إنها بسيطة وخفيفة الوزن وموثوقة وقائمة على الويب وسهلة الإعداد والاستخدام. أفضل جزء هو أنه مجاني تمامًا. سنغطي الأقسام التالية في هذا البرنامج التعليمي:
  * [ما هو Osticket؟][1]
  * [إيجابيات وسلبيات Osticket][2]
  * [كيفية إعداد Osticket؟][3]
  * [الخلاصة][4]

## ما هو Osticket؟   {#osticket}
يوفر Osticket لوحة تحكم سهلة الاستخدام ومكون للإبلاغ في الوقت الفعلي. يمكن للمستخدمين فقط تسجيل الدخول وإنشاء التذاكر في بضع خطوات سهلة. يمكنهم إنشاء تذاكر عبر موقع الويب الخاص بك أو البريد الإلكتروني أو الهاتف. ثم سيتم حفظ التذاكر الواردة وتعيين الوكلاء. سيحصل الوكلاء على إخطارات البريد الإلكتروني وسيستجيبون للاستفسارات للمساعدة في حل مشكلاتهم. يمكن للعملاء والوكلاء مناقشة التفاصيل والتقدم في قسم التعليقات. يمكن للعملاء تتبع طلباتهم والتقدم عبر بوابة العملاء المضمنة التي يوفرها برنامج مكتب المساعدة عبر الإنترنت.

## إيجابيات وسلبيات Osticket   {#pros}

#### Pros
  * Osticket سهل الاستخدام للغاية لكل من المستخدمين النهائيين ووكلاء الدعم.
  * مجمعة مع ميزات غنية ، Osticket لديه كل ما تحتاجه دون التعقيد بشكل مفرط.
  * Osticket هو برنامج إدارة التذاكر مفتوح المصدر بالكامل.
  * إنه خفيف الوزن وآمن وموثوق وسهل تثبيت برنامج إدارة مكتب المساعدة.
  * من المرونة تشغيل جميع خوادم الويب الشهيرة بما في ذلك Apache و Nginx و LightTPD و IIS ، إلخ.

#### سلبيات
  * OSTICKET لا تقدم تفاصيل تحليلات التذاكر وإحصائيات مثل أنظمة مكتب المساعدة المدفوعة الأخرى.
  * واجهة المستخدم بسيطة للغاية وبشكل أساسي بالمقارنة مع أنظمة الدعم الأخرى.

## كيفية تثبيت Osticket؟   {#كيف}
اتبع هذه الخطوات لتثبيت Osticket مع Nginx على Ubuntu 18.04 LTS.
  * إنشاء دليل جديد لـ Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * قم بتنزيل أحدث إعداد Osticket باستخدام أوامر التالية.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * بعد ذلك ، قم بإنشاء ملف config من ملف نموذج باستخدام هذه الأوامر.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * ثم قم بتغيير ملكية دليل الويب Osticket إلى مستخدم ومجموعة "www-data".
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * بعد ذلك ، قم بإنشاء ملف تكوين مضيف افتراضي جديد.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * ثم الصق رمز التكوين فيه.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * تغيير اسم الخادم حسب اسم المجال الخاص بك. احفظ الملف واخرج.
  * اربط الآن ملف المضيف الظاهري هذا إلى المجلد الذي يدعم المواقع باستخدام الأمر التالي
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * اختبار أي أخطاء تكوين باستخدام الأمر التالي
```
nginx -t
```
  * الآن أعد تشغيل خدمة nginx باستخدام الأمر التالي
```
sudo systemctl restart nginx

```
  * الآن أدخل اسم المجال الخاص بك في أي متصفح ويب لبدء معالج التثبيت كما هو موضح في الشكل التالي

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket">}}

  * تمكين الامتدادات المطلوبة من php.ini وانقر فوق "متابعة".
* املأ جميع المعلومات المطلوبة وانقر فوق "تثبيت الآن"**.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket">}}

  * في إعدادات قاعدة البيانات ، أدخل DBNAME ، اسم المستخدم وكلمة المرور.
  * أخيرًا انقر فوق الزر "تثبيت الآن"
  * بعد اكتمال التثبيت ، سيعرض الصفحة برسالة نجاح.
  * بعد ذلك ، قم بتغيير إذن OST-CONFIG.PHP لإزالة الوصول إلى الكتابة عن طريق تشغيل الأمر التالي:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## الخاتمة   {#conclusion}
يعتبر Osticket الأنسب للشركات ذات الميزانية المنخفضة أو الذين يريدون نظام مكتب مساعدة بسيط وليس معقدًا. إنها بسيطة وخفيفة الوزن وموثوقة ومفتوحة المصدر وبرنامج مكتب مساعدة عبر الإنترنت مجاني تمامًا. مما يجعل Osticket بديلاً رائعًا لأنظمة دعم العملاء ذات التكلفة العالية. لمعرفة المزيد حول ميزات Osticket ودليل التثبيت ، يرجى مراجعة البرنامج التعليمي التالي.

## يستكشف
[أفضل مصدر مفتوح ومجاني لمكتب مساعدة تكنولوجيا المعلومات][5]
[HELPDESDESK المجاني الشهير ونظام خدمة العملاء][6]
[دليل المبتدئين لتطوير البرنامج المساعد Osticket][7]
[كيفية تنفيذ مستأجر متعدد في Osticket][8]
[أتمتة نظام التذاكر باستخدام WordPress و Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
