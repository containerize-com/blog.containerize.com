---
title: "كيفية إعداد خادم البريد باستخدام البريد على Ubuntu" 
seoTitle: "كيفية إعداد خادم البريد باستخدام البريد على Ubuntu" 
description: "إرسال رسائل بريد إلكتروني من تطبيقات الويب الخاصة بك مع خادم بريد المصدر المفتوح. تمكنك Postal من إرسال رسائل بريد إلكتروني باستخدام SMTP & HTTP API ، ومراقبة حركة البريد الإلكتروني أيضًا." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "إرسال واستقبال رسائل البريد الإلكتروني مع خادم بريد مفتوح المصدر. ستساعدك هذه المقالة في تثبيت وتكوين خادم البريد البريدي لشركتك." 
url: /ar/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## إرسال واستقبال رسائل البريد الإلكتروني مع خادم بريد مفتوح المصدر. ستساعدك هذه المقالة في تثبيت وتكوين خادم البريد البريدي لشركتك.

{{< figure align=center src="images/postal-banner.png" alt="خادم بريد مفتوح المصدر">}}

يعد إرسال رسائل البريد الإلكتروني على أنواع مختلفة من الأحداث ضروريًا للتطبيقات الحديثة. كل عمل يحتاج إلى خادم بريد ** ****  لرسائل البريد الإلكتروني الصادرة. علاوة على ذلك ، تحتاج الشركات إلى خادم بريد لإرسال رسائل البريد الإلكتروني السائبة للحملات التسويقية والنشرات الإخبارية والعديد من المهام الأخرى. هناك العديد من خادم البريد المفتوح المصدر ** متاح لهذا. ومع ذلك ، سنناقش الخادم البريدي**  بالتفصيل في هذا المنشور وتغطية الموضوعات التالية.
  * [ما هو خادم البريد البريدي؟][1]
  * [ميزات البريد][2]
  * [التثبيت البريدي][3]
  * [الخلاصة][4]

## ما هو خادم البريد البريدي؟   {#بريدي}
[**postal **][5] هو خادم بريد مجاني و  **مفتوح المصدر ** . إنه خادم بريد كامل الميزة لمواقع الويب وتطبيقات الويب. يعد خادم البريد البريدي بديلاً لخادم البريد  **المشهور **  مثل SendGrid و MailGun.  **Postal **  عبارة عن منصة توصيل بريد إلكتروني قوية وآمنة وقابلة للتطوير مفتوح المصدر. تتوفر جميع التعليمات البرمجية والوثائق المصدر على [ **github**  ][6]. يمكنك تنزيله وتثبيته على خادمك الخاص والاحتفاظ بالتحكم الكامل عليه. يمكنك أيضًا تحسينه وتحسينه وفقًا لاحتياجات العمل. بالإضافة إلى ذلك ، يدعم خادم البريد البريدي** منظمات متعددة.
يمكن للمستخدمين عرض الرسوم البيانية والإحصائيات التي توضح حجم رسائل البريد الواردة والصادرة. بالإضافة إلى ذلك ، يمكنك الوصول إلى قائمة انتظار الرسائل الصادرة والوازلة الكاملة. يوفر خادم البريد البريدي وظائف لـ WebHooks. يمكنك إعداد Webhooks لتلقي معلومات حية حول معلومات التسليم في الوقت الفعلي. كما يوفر الاحتفاظ بالرسائل الذي يتيح لك تخزين وفحص جميع الرسائل المرسلة والمستلمة. يعد تسليم البريد الإلكتروني مهمًا جدًا في العمل لضمان حصول المستخدمين على البريد الإلكتروني. ومع ذلك ، في بعض الأحيان يتم تسليم البريد الإلكتروني إلى المستخدم وعليك أن تحقق المشكلة. يوفر خادم البريد الوارد والصادر **** أيضًا تسجيلات وأدوات كاملة لإجراء التحقيق.

## ميزات postal   {#features}
يقدم خادم البريد البريدي الكثير من الميزات. ومع ذلك ، سنناقش الميزات الرئيسية التالية في هذه المقالة.
**إرسال رسائل البريد الإلكتروني**: يوفر خادم البريد البريدي تقنيتين لرسائل البريد الإلكتروني الصادرة بما في ذلك HTTP API و SMTP. يمكنك بسهولة استخدام HTTP API للتكامل مع تطبيقات الويب. يمكنك أيضًا استخدام خادم SMTP للتكامل مع التطبيقات والأنظمة الحالية.
**رسائل البريد الإلكتروني الواردة **: **يمكن إعادة توجيه البريد الوارد  **إلى نقطة نهاية HTTP ،**   SMTP Server** ، وعناوين البريد الإلكتروني الأخرى باستخدام خادم البريد البريدي.
**فحص البريد العشوائي والفيروس**: يمكن دمج SPAMASSASIN و CLAMAV مع البريدي لمسح الرسائل الواردة والصادرة تلقائيًا أثناء مرورها عبر خوادم البريد. يتم إيقاف هذه الميزة أيضًا بشكل افتراضي.
**انقر وفتح تتبع**: يمكن تتبع فتحات البريد الإلكتروني والنقرات مع البريد. ستقوم البريد بمسح رسائلك الصادرة واستبدال أي روابط برابط جديد يسافر عبر خادم الويب البريدي. عندما ينقر المستخدم على الرابط ، يسجل البريد الإجراء ويعيد توجيهه على الفور إلى عنوان URL الأصلي. ومع ذلك ، لا يتم تنشيط هذا افتراضيًا.
**IP Pools**: تتيح لك البريد إرسال رسائل من مجموعة متنوعة من عناوين IP. يتيح لك ذلك تعيين عناوين IP متعددة لخوادم بريد مختلفة أو إرسال من IPs مختلفة بناءً على عناوين المرسل أو العناوين.

## التثبيت البريدي   {#installation}
اتبع الدليل أدناه خطوة بخطوة لتثبيت برنامج خادم البريد  **** ** على Ubuntu 18.04.
  * أولاً ، تحتاج إلى توصيل الخادم الخاص بك فيس SSH. قم بتشغيل الأمر التالي لتحديث النظام بأحدث الحزم المتاحة.
```
sudo apt-get update
```

## # قم بتثبيت خادم قاعدة بيانات MariaDB
  * قم بتشغيل الأمر لتثبيت MariaDB.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * بمجرد الانتهاء من التثبيت. الآن ، تحتاج إلى تأمينه عن طريق تشغيل الأمر أدناه.
```
mysql_secure_installation
```
  * بعد ذلك ، سوف يطرح عليك سؤالين كما هو موضح أدناه. تحتاج إلى الإجابة على جميع الأسئلة.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * الاتصال بخادم MariaDB مع الأمر التالي.
```
mysql -u root -p
```
  * إنشاء قاعدة بيانات للبريد.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * بعد ذلك ، قم بإنشاء مستخدم قاعدة بيانات يسمى "Postaluser" بكلمة مرور جديدة.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * بعد ذلك ، امنح المستخدم الوصول الكامل إلى قاعدة بيانات "postaluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * بعد ذلك ، قم بتدفق الامتيازات والخروج من قذيفة Mariadb مع الأمر التالي.
```
FLUSH PRIVILEGES;
EXIT;
```

## # تثبيت Ruby
  * أولاً ، أضف PPA التابع لجهة خارجية لتثبيت Ruby. تشغيل الأوامر التالية.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * تحديث حزم أوبونتو.
```
sudo apt update
```
  * تثبيت Ruby عن طريق تشغيل الأمر أدناه.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

## # تثبيت rabbitmq
  * مطلوب Erlang لتثبيت RabbitMQ ، لذلك ، تحتاج إلى تثبيته أيضًا. أضف مفتاح مستودع Erlang إلى Ubuntu مع الأمر أدناه.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * بعد ذلك ، أضف مستودع Erlang مع الأمر التالي.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * قم بتشغيل الأوامر التالية لتثبيت Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * بمجرد الانتهاء من تثبيت Erlang ، يمكنك المتابعة لتثبيت RabbitMQ. أضف مستودع RabbitMQ إلى Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * أضف مفتاح RabbitMQ GPG مع الأمر التالي.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * قم بتشغيل الأوامر أدناه لتثبيت حزمة RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * قم بتشغيل الأمر أدناه لتمكين RabbitMQ ، لذلك يبدأ دائمًا عند تمهيد النظام.
```
sudo systemctl enable rabbitmq-server
```
  * بعد ذلك ، ستحتاج إلى إنشاء RabbitMQ VHOST والمستخدم للبشر. قم بتشغيل الأمر التالي إليه.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

## # تثبيت nodejs
  * إضافة مستودع NodeJS مع الأمر التالي.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * بعد ذلك ، قم بتشغيل الأمر أدناه لتثبيت Nodejs.
```
sudo apt-get install nodejs
```

## # تثبيت خادم البريد البريدي
  * أولاً ، تحتاج إلى إنشاء مستخدم لخادم البريد البريدي. أنشئه مع الأمر التالي.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * بعد ذلك ، اسمح لـ Ruby بالاستماع إلى منافذ الويب.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * تثبيت جميع الأحجار الكريمة المطلوبة مع الأوامر التالية.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * إنشاء بنية دليل للبريد.
```
sudo mkdir -p /opt/postal/app
```
  * بعد ذلك ، قم بتنزيل أحدث إصدار من البريد.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * استخراج الملف الذي تم تنزيله مع الأمر التالي.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * بعد ذلك ، تغيير ملكية الدليل البريدي.
```
sudo chown -R postal:postal /opt/postal
```
  * قم بإنشاء Symlink لـ Postal Binary عن طريق تشغيل الأمر أدناه.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * تثبيت جميع التبعيات المطلوبة.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * قم بتشغيل الأمر أدناه لتهيئة التكوينات البريدية.
```
sudo postal initialize-config
```
  * بعد ذلك ، قم بتشغيل الأمر التالي لفتح ملف التكوين البريدي.
```
sudo nano /opt/postal/config/postal.yml
```
  * قم بإجراء التغييرات المشار إليها بالخط العريض وحفظ الملف.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * تشغيل الأمر لتهيئة قاعدة البيانات.
```
sudo postal initialize
```
  * إنشاء مستخدم المسؤول للبريد.
```
sudo postal make-user
```
  * بعد ذلك ، ستحتاج إلى توفير تفاصيل حساب المستخدم كما هو موضح أدناه.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :*********

User has been created with e-mail address admin@example.com
```
  * أخيرًا ، قم بتشغيل الأمر التالي للبدء والتحقق من حالة التطبيق البريدي.
```
sudo -u postal postal start
sudo -u postal postal status
```

## # تثبيت nginx
  * قم بتشغيل الأمر أدناه لتثبيت Nginx Web Server.
```
sudo apt install nginx
```
  * بعد ذلك ، انسخ تكوين NGINX البريدي لاستخدامه كمضيف افتراضي.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * إنشاء شهادة SSL موقعة ذاتيا.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * بعد ذلك ، ستحتاج إلى الإجابة على الأسئلة.
  * افتح ملف المضيف الظاهري Nginx الافتراضي.
  * تغيير قيمة server_name وحفظ الملف.
  * أخيرًا ، أعد تشغيل خادم الويب Nginx عن طريق تشغيل الأمر أدناه.
```
sudo systemctl restart nginx
```
  * أخيرًا ، افتح متصفحك واكتب عنوان URL https://postal.example.com. سيتم إعادة توجيهك إلى صفحة تسجيل الدخول.

## الخاتمة   {#conclusion}
لقد تجاوزنا المقدمة والميزات الأساسية لخادم البريد البريدي بعمق كبير. لقد قمنا أيضًا بتضمين إرشادات خطوة بخطوة لإعداد وكيل نقل البريد ****. علاوة على ذلك ، قدمنا ​​بعض نظرة ثاقبة على الإعداد. يعد إعداد خادم البريد البريدي عملية بسيطة. آمل أن تكون هذه المقالة مفيدة بالفعل في إعداد وتكوين خادم بريد بريدي لعملك.
أخيرًا ، [**Containerize.com **][7] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذا [**  Excessactional البريد الإلكتروني**][8] لآخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  *[ **برنامج بريد إلكتروني أعلى معاملات** ][9]
  *[ **Potal - Open Source Mail Server** ][5]
  *[ **5 أفضل برنامج خادم بريد مفتوح المصدر للشركات في عام 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
