---
title: "كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu" 
seoTitle: "كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu" 
description: "تشرح المقالة كيفية تثبيت إصدارات متعددة من PHP مع Nginx على Ubuntu. سنذهب إلى تعليمات خطوة بخطوة حول كيفية تثبيت PHP مع Nginx." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "إذا كنت تتطلع إلى استخدام إصدارات متعددة من PHP مع NGINX ، فسوف نوجهك في هذه المقالة خطوة بخطوة حول كيفية تثبيت PHP مع NGINX على Ubuntu." 
url: /ar/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP مع إصدارات Nginx متعددة PHP">}}


## إذا كنت تتطلع إلى استخدام إصدارات متعددة من PHP مع Nginx ، فسنرشدك في هذه المقالة خطوة بخطوة حول كيفية تثبيت PHP مع Nginx على Ubuntu.
هذه المقالة في استمرار سلسلةنا على البرامج التعليمية حول Nginx. لقد قمنا حتى الآن بتغطية كيفية استخدام Nginx كموازن تحميل ، وكيفية استخدام Nginx كبديل عكسي. والآن يغطي هذا البرنامج التعليمي سؤالًا آخر يتطلب "كيفية استخدام إصدارات متعددة من PHP مع Nginx". في هذا البرنامج التعليمي ، سنرشدك خطوة بخطوة حول كيفية تثبيت PHP على Ubuntu ، وكيفية تكوين PHP مع Nginx ، وأخيراً كيف يمكنك تثبيت إصدارات متعددة من PHP مع NGINX. اذا هيا بنا نبدأ!
  * [تثبيت nginx][1]
  * [تثبيت إصدارات متعددة PHP][2]
  * [إنشاء مواقع ويب متعددة مع PHP][3]
  * [تكوين nginx لتشغيل إصدارات مختلفة لمواقع الويب][4]
  * [الخلاصة][5]

## تثبيت nginx   {#nginx}
NGINX (وضوحا باسم "Engine-X") هو خادم ويب مفتوح المصدر يستخدم غالبًا كوكيل عكسي أو ذاكرة التخزين المؤقت HTTP. وهي متوفرة لـ Linux مجانًا.
لتثبيت nginx ، استخدم الأمر التالي:
```
sudo apt update
sudo apt install nginx
```
بعد الانتهاء من التثبيت ، يمكنك فتح "http: // localhost" في متصفحك ولديك كل الإعداد.

{{< figure align=center src="images/php-with-nginx-install.png" alt="تثبيت PHP مع nginx">}}


## قم بتثبيت إصدارات PHP متعددة   {#php}
**PHP **(اختصار متكرر لـ ** PHP: معالج النص التشعبي** ) هي لغة نصية مفتوحة ومصدر شهيرة للأغراض العامة والتي تستخدم على نطاق واسع وتناسب مواقع الويب والتطبيقات القائمة على الويب. إنها لغة برمجة من جانب الخادم يمكن تضمينها في HTML.
حاليًا ، هناك ثلاثة إصدارات مدعومة من **php  **، أي **  php 5.6  **، **  7.0 ،  **و **  8.0 **. المعنى  **PHP 5.3 **  ،  **5.4 ، **  و ** 5.5**  لقد وصلوا جميعًا إلى نهاية الحياة ؛ لم تعد مدعومة بتحديثات الأمان. لذلك دعونا أولاً نثبت PHP 7.0 و PHP 7.2 مع PHP-FPM.
في الواقع قبل أن نتحرك مع التثبيت ، يتيح أولاً أن يقلم ما هو PHP-FPM. **PHP-FPM  **(اختصار لـ**   Fastcgi Process Manager**) هو تطبيق FastCGI بديل شهير. يتضمن PHP-FPM العديد من الميزات التي يمكن أن تكون مفيدة لمواقع الويب التي تتلقى حركة المرور بأحجام كبيرة بشكل متكرر.
لتثبيت PHP 7.0 و 7.2 أولاً ، ستحتاج إلى إضافة مستودع PHP إلى الخادم الخاص بك لتثبيت إصدارات متعددة من PHP. يمكنك إضافة مستودع ondrej php مع الأمر التالي:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
بمجرد تحديث المستودع ، قم بتثبيت PHP 7.0 و PHP 7.2 و PHP-FPM مع الأمر التالي:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
بمجرد اكتمال التثبيت ، تحقق من حالة PHP-FPM مع الأمر التالي:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## إنشاء مواقع ويب متعددة مع php   {#web}
يتم وضع الصفحة الافتراضية في/var/www/html/الموقع. يمكنك وضع صفحاتك الثابتة هنا ، أو استخدام المضيف الظاهري ووضعه في موقع آخر
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
بعد ذلك ، قم بإنشاء ملف نموذج index.php لـ Site1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
الآن قم بإنشاء ملف نموذج index.php لـ Site2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
ثم ، قم بتغيير ملكية كلا المواقع الإلكترونية إلى www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## تكوين nginx   {#configure}
بعد ذلك ، ستحتاج إلى إنشاء ملف مضيف افتراضي NGINX لـ DOMAIN SITE1.CONTAINERIZE.com الذي يستخدم PHP 7.0. والآخر لـ site2.containerize.com الذي يستخدم PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
أضف الأسطر التالية:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
الآن قم بإنشاء الملف الثاني لـ site2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
ثم ، قم بتمكين كل من ملفات المضيف الافتراضية مع الأمر التالي:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
أخيرًا ، أعد تشغيل خدمة Nginx و PHP-FPM لتطبيق جميع تغييرات التكوين:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## الخاتمة   {#conclusion}
في هذا البرنامج التعليمي ، اكتشفنا كيفية إصدارات PHP متعددة على Ubuntu. لقد تعلمنا كيفية تثبيت nginx. ثم اكتشفنا كيفية إعداد موقعين مختلفين في Nginx. وأخيراً تعلمنا كيفية تكوين موقعين مختلفين مع إصدارات مختلفة من PHP مع NGINX. آمل أن يكون البرنامج التعليمي ساعدك.

## يستكشف
  * [كيفية إعداد وتكوين Nginx كوكيل عكسي][6]
  * [كيفية استخدام nginx كموازن تحميل لتطبيقك][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
