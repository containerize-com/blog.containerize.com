---
title: "كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu" 
seoTitle: "كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu" 
description: "PhpmyAdmin هو برنامج إدارة قاعدة بيانات مفتوح المصدر مكتوب في PHP. سنتعلم كيفية تثبيت phpmyadmin مع nginx وإدارة mySQL من خلال phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpmyAdmin هي أداة إدارة قاعدة بيانات ويب ويب مفتوحة المصدر مكتوبة في PHP. في هذا البرنامج التعليمي ، سنتعلم كيفية تثبيت phpmyadmin مع Nginx." 
url: /ar/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadmin مفتوح المصدر أداة إدارة قاعدة بيانات ويب ويب مكتوبة في PHP. في هذا البرنامج التعليمي ، سنتعلم كيفية تثبيت phpmyadmin مع Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="كيفية تثبيت وتأمين phpmyadmin مع nginx على ubuntu">}}


## **ملخص** 
PhpmyAdmin هي أداة إدارة قاعدة بيانات مجانية ومفتوحة المصدر توفر للمستخدمين واجهة ويب لإدارة خوادم MySQL أو MariaDB من خلال واجهة بديهية. هذا هو أحد البرامج المدعومة على نطاق واسع التي يقدمها معظم مقدمي الاستضافة الشهيرة للسماح لمسؤولي الويب بإنشاء قاعدة بيانات في PhpmyAdmin وإدارة قواعد البيانات ، وتنفيذ تصميمات SQL ، والاستيراد والتصدير بسهولة. ستتمكن من الوصول إلى قواعد بيانات MySQL أو MARIADB في PhpmyAdmin مع NGINX من خلال واجهة ويب رسومية بسهولة ، تعمل إلى جانب بيئة تطوير PHP.
في هذا الدليل ، سنصف خطوات كيفية تثبيت وتأمين phpmyadmin مع Nginx على Ubuntu 20.04. ستحتاج إلى تثبيت وتكوين phpmyadmin على خادم Ubuntu للسماح لها بالعمل مع قواعد بيانات وجداول MySQL بسهولة. لذلك ، دعونا نتعلم كيفية تثبيت وتأمين phpmyadmin مع Nginx على Ubuntu 20.04 / 20.10:
  * المتطلبات الأساسية
  * تثبيت phpmyadmin
  * تكوين قاعدة البيانات
  * إنشاء رابط رمزي
  * الوصول إلى phpmyadmin
  * إنشاء mysql superuser
  * تأمين phpmyadmin
  * خاتمة

## الخطوة 1: المتطلبات الأساسية {#id-prerequisites}

لمتابعة هذا الدليل ، ستحتاج إلى خادم Ubuntu 20.04 الذي يعمل على جهاز الكمبيوتر المحلي أو على خادم بعيد مع المتطلبات المسبقة.
  * يجب عليك الوصول إلى الخادم كمستخدم غير الجذر مع امتيازات SUDO وتمكين جدار الحماية UFW.
  * من المفترض أنك قمت بالفعل بتثبيت Nginx و MySQL و PHP على Ubuntu.
  * نظرًا لأن PhpmyAdmin يستخدم بيانات اعتماد MySQL للمصادقة بحيث يجب عليك أيضًا تثبيت شهادات SSL/TLS لتمكين حركة المرور المشفرة بين الخادم والعميل.
مع ذلك ، دعنا نبدأ في تثبيت وتأمين PhpmyAdmin للاتصال بخادم MySQL للوصول إلى قاعدة البيانات من خلال واجهة الويب.

## الخطوة 2: تثبيت phpmyadmin {#id-1-install-phpmyadmin}

تأكد من تثبيت جميع المتطلبات المسبقة على نظامك بنجاح قبل تثبيت PhpmyAdmin على Ubuntu 20.04. ابدأ بتحديث قائمة الحزم:
```
sudo apt update 
```
الآن ، قم بتشغيل الأمر التالي لتثبيت حزمة PhpmyAdmin من مستودعات Ubuntu الافتراضية على Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
اضغط على **y**و **أدخل** عندما يُطلب منهم المتابعة. إذا تمت مطالبتك باختيار خادم ويب ، حيث لا يوجد خيار لـ **nginx** كما هو موضح أدناه ، اضغط على**Tab** لتحديد موافق ثم إدخال**للمتابعة دون تحديد خادم ويب.

{{< figure align=center src="images/mysql-setup.png" alt="تثبيت وتأمين phpmyadmin ل nginx على ubuntu 20.04">}}


## الخطوة 2: تكوين قاعدة البيانات {#id-1-install-phpmyadmin}

بعد ذلك ، حدد **نعم**واضغط على**أدخل** لتثبيت وإعداد قاعدة البيانات باستخدام أداة DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="كيفية تكوين MySQL مع phpmyadmin">}}

يتم استخدام كلمة مرور تطبيق MySQL داخليًا بواسطة PhpmyAdmin للتواصل مع قاعدة بيانات MySQL. أدخل كلمة مرور جديدة لـ PhpmyAdmin DBMs للتسجيل كقاعدة بيانات جديدة ، حدد موافق واضغط على Enter للمتابعة.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="كيفية تكوين MySQL ل phpmyadmin">}}

سيُطلب منك تأكيد كلمة المرور ، وإدخال نفس كلمة المرور ، حدد **موافق**واضغط على**إدخال** . تهانينا! تم تثبيت phpmyadmin بنجاح على نظامك.

## الخطوة 4: إنشاء رابط رمزي {#id-2-create-symbolic-link}

هناك عدة طرق كيفية تكوين nginx لخدمة ملفات phpmyadmin. إذا تم إعداد كتلة خادم المجال الخاصة بك بالفعل لخدمة طلبات PHP ، فيجب عليك إنشاء رابط رمزي من ملفات تثبيت PhpmyAdmin Nginx/usr/share/phpmyadmin إلى دليل جذر مستند المجال الخاص بك. يجب أن يكون الموقع الافتراضي لجذر مستند Nginx في Ubuntu 20.04/20.10/var/www/html/ويمكن أن يكون مختلفًا اعتمادًا على إعداد INS الخاص بك. قد يكون جذر المستند الخاص بك موجودًا على سبيل المثال في /var/www/example.com/public_html.
بعد ذلك ، سنقوم بإنشاء رابط رمزي من دليل PhpmyAdmin/usr/share/phpmyadmin إلى جذر المستند الخاص بك. سنفترض هنا أن جذر المستند هو/var/www/html/وسنضيف ببساطة phpmyadmin إلى نهاية هذا. سيسمح لنا هذا بالوصول إلى phpmyadmin على url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## الخطوة 5: الوصول إلى phpmyadmin {#id-3-test-phpmyadmin}

يجب أن تكون قادرًا الآن على الوصول إلى واجهة ويب PhpMyAdmin من خلال زيارة اسم مضيف/نطاق الخادم الخاص بك أو عنوان IP العام متبوعًا بـ domain.com/phpmyadmin في متصفح الويب المفضل لديك. على سبيل المثال http://example.com/phpmyadmin أو http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
على خوادم Ubuntu التي تعمل مع MySQL 5.7 ، وبعد ذلك ، لن تتمكن من تسجيل الدخول إلى قاعدة بيانات PhpmyAdmin المجانية باستخدام حساب الجذر الافتراضي MySQL وسيحصل على خطأ مثل _ "Access تم رفضه للمستخدم@'@' localhost '" _. بدلاً من ذلك ، يجب عليك إنشاء حساب Superuser جديد فقط لـ PhpmyAdmin. بعد ذلك ، سنقوم بإنشاء حساب جذر MySQL لتسجيل الدخول إلى phpmyadmin.

## الخطوة 6: إنشاء mysql superuser {#id-4-create-mysql-superuser}

في Terminal ، ابدأ بتسجيل الدخول إلى MySQL باستخدام كلمة مرور الجذر MySQL الخاصة بك والتي قد تكون قد قمت بإنشاء كلمة مرور الجذر عند تثبيت قاعدة بيانات PhpmyAdmin MySQL لأول مرة.
```
sudo mysql -u root -p
```
بعد تسجيل الدخول إلى MySQL ، أضف mysql superuser جديد مع اسم المستخدم الذي تختاره. في هذا المثال ، نسميها Yasiradmin. [انقر هنا لإنشاء كلمة مرور قوية][2] واستبدل new \ _password \ _ _ يلي.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
الآن منح امتيازات Superuser لمستخدمنا الجديد Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
الآن الخروج من جلسة MySQL. يجب أن تكون قادرًا الآن على الوصول إلى PhpmyAdmin باستخدام بيانات اعتماد Superuser الجديدة هذه.

{{< figure align=center src="images/image.png" alt="كيفية تسجيل الدخول phpmyadmin على Ubuntu 20.04">}}

يوصى بشدة بإعداد بعض الأمان الإضافي لـ phpmyadmin لتأمين phpmyadmin nginx. يجب أن تكون قادرًا على تغيير عنوان URL PhpmyAdmin والوصول إليه إلى شيء مثل عنوان URL الغامض.

## الخطوة 7: تأمين phpmyadmin {#id-6-secure-phpmyadmin-recommended}

بعد ذلك ، نريد إعداد المصادقة في Nginx لتوفير طبقة إضافية من الأمان. سنقوم الآن بتثبيت Apache2-Utils ، والتي يمكن أن تنشئ ملف .htpasswd الذي يعمل مع كل من خوادم Nginx و Apache2.
```
sudo apt install apache2-utils
```
بمجرد التثبيت ، يمكننا إنشاء ملف .htpasswd. تغيير اسم المستخدم الذي تختاره. [قم بإنشاء كلمة مرور][3] والحفاظ عليها آمنة.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
سيكون هناك الآن ملف .htpasswd يحتوي على اسم المستخدم الخاص بك وكلمة المرور المشفرة. يمكنك التحقق من ذلك مع الأمر أدناه:
```
cat /etc/nginx/.htpasswd
```
يجب أن ترى شيئًا مثل اسم المستخدم: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
نحتاج الآن إلى إضافة توجيهين إلى ملف تكوين NGINX الخاص بنا. قد يختلف موقع ملف التكوين وفقًا للتثبيتات الخاصة بك ، على الرغم من أن مسار الملف الافتراضي عادةً ما يكون في/etc/nginx/مواقع متاحة/افتراضي. إذا قمت بإعداد مجالات متعددة ، فقد يكون ملف التكوين الخاص بك موجودًا في مكان ما مثل /etc/nginx/sites-available/example.com
في هذا المثال ، سنفترض أن ملف تكوين NGINX هو AT/etc/nginx/مواقع متاحة/افتراضي. افتح الملف لتحريره.
```
sudo nano /etc/nginx/sites-available/default
```
قم بالتمرير لأسفل وابحث عن كتل الموقع واللصق في كتلة جديدة تحتها باسم مجلد PhpmyAdmin الغامض ، في هذا المثال Aspose_Hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
احفظ الملف والخروج (اضغط على Ctrl + X ، اضغط على Y ثم اضغط على Enter). تحقق من أن ملف تكوين NGINX صالح ، وإلا يمكن أن يعطل الخادم عند إعادة التشغيل عن طريق تشغيل الأمر.
```
sudo nginx -t
```
إذا كان صالحا ، إعادة تحميل التكوين nginx.
```
sudo service nginx reload
```
الآن عند زيارة example.com/aspose_hidden ، يجب تقديم نافذة مصادقة.

{{< figure align=center src="images/auth3.png" alt="كيفية تأمين phpmyadmin">}}

لقد انتهيت جميعًا من خلال تثبيت PhpmyAdmin على خادم Ubuntu.

## خاتمة: {#id-what-next}

تهانينا ، لقد نجحت في تثبيت phpmyadmin مع Nginx لخادم Ubuntu 20.04 / 20.10 والآن يمكنك إدارة MySQL من خلال phpmyadmin. الآن ، يمكنك البدء في إنشاء قواعد بيانات MySQL ، والمستخدمين ، والجداول ، وإجراء استعلامات MySQL والعديد من العمليات الأخرى.
إذا كانت لديك أسئلة ، فلا تتردد في إخباري أدناه في قسم التعليقات.

## يستكشف
قد يعجبك أيضًا المقالات الأكثر صلة أدناه:
  * [كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian][4]
  * [كيفية تأمين وتشفير nginx مع دعنا نش تشفير على Ubuntu 20.04][5]
  * [كيفية تكوين دعم HTTP/2 في Nginx على Ubuntu/Debian][6]
  * [كيفية إعداد nginx مع ركاب على خادم إنتاج AWS][7]
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][8]



[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
