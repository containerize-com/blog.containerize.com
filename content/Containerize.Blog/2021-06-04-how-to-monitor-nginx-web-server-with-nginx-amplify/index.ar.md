---
title: "كيفية مراقبة خادم الويب Nginx مع تضخيم Nginx" 
seoTitle: "كيفية مراقبة خادم الويب Nginx مع تضخيم Nginx" 
description: "Nginx Amplify هو وكيل مراقبة مجاني لخادم الويب Nginx وتطبيقات PHP. تدور هذه المقالة حول كيفية مراقبة خادم الويب Nginx مع Amplify Nginx" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "مراقبة NGINX ، تطبيقات PHP ، نظام التشغيل مع NGINX تضخيم وتحسين التكوين. توجهك هذه المقالة إلى إعداد وتكوين Nginx Amplify." 
url: /ar/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## مراقبة NGINX ، تطبيقات PHP ، نظام التشغيل مع NGINX تضخيم وتحسين التكوين. توجهك هذه المقالة إلى إعداد وتكوين Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="مراقبة خادم الويب Nginx مع تضخيم Nginx">}}


## ملخص {#Install}

**مراقبة خادم الويب**مهم جدًا للمواقع الإلكترونية ذات العبور العالية. سيقوم وكيل المراقبة****بتسجيل المقاييس الأساسية حول خادم الويب بانتظام. يمكن استخدام هذه المقاييس الحرجة لتحسين تكوين NGINX. سيساعدك ذلك في تحسين أداء خادم الويب والتطبيق.
في منشور المدونة هذا ، سنغطي الأقسام التالية لـ **nginx Monitoring** Open Source Tool.
  * [Nginx Web Server][1]
  * [Nginx Amplify][2]
  * [تثبيت Nginx Amplify][3]
  * [مقاييس المراقبة][4]

## Nginx Web Server {#Nginx}

[NGINX][5] هو خادم ويب مجاني ومفتوح المصدر. إنه بسيط وخفيف الوزن وسهل التكوين من Apache. يعمل Nginx Web Server أيضًا كوكيل عكسي ، وموازن تحميل ، وكيل البريد ، وذاكرة التخزين المؤقت HTTP. إنه يعمل لبروتوكولات HTTP و HTTPS و SMTP و POP3 و IMAP. Nginx هو خادم ويب عالي السرعة وموثوق به وفعال الذاكرة يعمل على تحسين أداء تطبيقاتك. علاوة على ذلك ، نمت شعبية ويعتبر الآن خادم الويب الأكثر شعبية. علاوة على ذلك ، فإن NGINX مناسب لأي نوع من المواقع بما في ذلك المواقع والتطبيقات ذات الحركة العالية. يمكن تثبيته وتكوينه على جميع أنظمة التشغيل تقريبًا.

### تثبيت nginx
  * قم بتشغيل الأوامر أدناه لتثبيت Nginx Web Server.
```
sudo apt update
sudo apt install nginx
```
  * بمجرد الانتهاء من التثبيت ، افتح متصفحك واكتب "http: // ip \ _of \ _your_server". سترى صفحة الترحيب أدناه.

{{< figure align=center src="images/nginx-home.png" alt="مرحبا بكم في إنجن إكس!">}}


## Nginx تضخيم {#Amplify}

Nginx Amplify هي أداة مراقبة مجانية لـ Nginx Open Source و Nginx Plus و PHP-FPM. إنها أداة قائمة على SAAS لمراقبة وتطبيقات خادم Nginx. يمكن للمستخدمين بسهولة تتبع أصول البنية التحتية ، ومراقبة الأداء ، وضبط التكوين. يعطي معلومات شاملة قد يستخدمها المستخدمون لتحسين تكوين خادم الويب وتطبيق. يعمل كوكيل على الخادم الذي يستضيف تطبيقات NGINX و PHP. Nginx Amplify عبارة عن سجلات خفيفة الوزن وضغط ومراقبة البيانات لتضخيم الخوادم دون المساومة على الأداء. يمكنك عرض المقاييس على لوحة القيادة Amplify. الوكيل متاح لجميع أنظمة التشغيل الأولية مثل Rhel و Centos و Ubuntu و Debian و Fedora و FreeBSD. يحتوي Nginx Amplify على ثلاثة مكونات رئيسية مثل Nginx Amplify Agent ، و Nginx Amplify Web UI ، و Nginx Amplify الخلفية.
* **Nginx Amplify Agent** - يعمل على النظام الذي يتم مراقبه. يتم تشفير جميع الاتصالات باستخدام SSL/TLS.
* **Nginx Amplify Web UI** - يعرض واجهة المستخدم الويب مقاييس خوادم الويب والتطبيقات وأنظمة التشغيل.
* **Nginx Amplify Backend** - إنه مكون رئيسي يتم تنفيذه باعتباره SaaS وهو مسؤول عن جمع المقاييس ، والحفاظ على قاعدة بيانات ، وتشغيل محرك تحليلات ، وتوفير واجهة برمجة تطبيقات أساسية.

## تثبيت Nginx تضخيم {#Install}

اتبع دليل خطوة بخطوة لتثبيت Nginx Amplify على Ubuntu.
  * أولاً ، تحتاج إلى إنشاء حساب في Nginx [موقع الويب][6].
  * بعد تسجيل الدخول ، سترى أدناه الشاشة على موقع Nginx Amplify. الآن ، قم بالتواصل مع الخادم الخاص بك عبر SSH واستخدم الأوامر الواردة في الخطوات أدناه.

{{< figure align=center src="images/amplify-1.png" alt="تثبيت Nginx تضخيم">}}

  * قم بتشغيل الأمر أدناه لتنزيل الوكيل.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * قم بتنفيذ الأمر التالي لتثبيت Nginx Amplify على الخادم. استبدل xxxxx بمفتاح API الفعلي. يمكنك العثور عليه في Nginx Amplify Dashboard.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * بمجرد الانتهاء من التثبيت ، يمكنك التحقق من الحالة مع الأمر التالي.
```
$ sudo service amplify-agent status
```
  * الآن ، تحتاج إلى تكوين وكيل Amplify Nginx لعرض المقاييس.

{{< figure align=center src="images/amplify-2-1.png" alt="تكوين مراقبة NGINX">}}

  * إنشاء ملف جديد مع تكوين Stub_Status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * انسخ الكود أدناه وحفظ الملف.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * أعد تشغيل خادم الويب NGINX لتنشيط وحدة Stub_Status.
```
$ sudo service nginx restart
```
  * الآن ، افتح ملف تكوين nginx مع الأمر التالي.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * أضف الكود أدناه فيه وحفظه.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * أعد تشغيل خدمة Nginx لتطبيق جميع التغييرات.
```
$ sudo service nginx restart
```
  * بعد ذلك ، انتقل إلى Amplify Dashboard وانقر على زر "الانتهاء". يجب أن ترى الصفحة التالية.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="مراقبة خادم الويب">}}

* يمكنك رؤية الإحصائيات بتنسيق أكثر سهولة وقابلة للقراءة من خلال النقر على علامة التبويب **نظرة عامة** . سوف يبدو كما هو موضح أدناه.

{{< figure align=center src="images/amplify-overview.png" alt="احصائيات مراقبة NGINX">}}


## مراقبة المقاييس {#Monitoring}

يقوم Amblify Amplify Agent بجمع الأنواع التالية من البيانات:
* **مقاييس nginx** -يجمع مختلف المقاييس المتعلقة بـ NGINX من ملفات stub_status ، وملفات سجلات ، ومن حالة العملية.
* **مقاييس النظام** - يراقب Nginx Amplify مجموعة متنوعة من مقاييس النظام مثل استخدام وحدة المعالجة المركزية ، واستخدام الذاكرة ، وحركة الشبكة ، وغيرها الكثير.
* **مقاييس PHP-FPM** -إذا كانت تحدد عملية Master PHP-FPM ، فإنها تحصل على مقاييس من حالة تجمع PHP-FPM.
* **MySQL Metrics** - يمكن للوكيل استخدام مجموعة الحالة العالمية لـ MySQL من قبل العميل لجمع المقاييس.
****NGINX METADATA**  - يجمع الوكيل بيانات حول مثيلات NGINX مثل بيانات الحزمة ، والمعلومات ، والمسار الثنائي ، وإعدادات التكوين ، وغيرها الكثير.
* **البيانات الوصفية للنظام** - يقوم الوكيل بجمع البيانات على نظام التشغيل ، بما في ذلك اسم المضيف ، ووقت التشغيل ، ونكهة نظام التشغيل ، وغيرها من التفاصيل.

## خاتمة
لقد تجاوزنا خادم الويب Nginx و Nginx Amplify Advanced Monitoring Agent بتفصيل كبير. Amplify Nginx بسيط للغاية لإعداده وتكوينه. بالإضافة إلى ذلك ، لقد تجاوزنا أي مقاييس مهمة يمكن لـ Nginx Amplify تتبع **Monitor Nginx** . يمكن استخدام هذه المقاييس المهمة لتحسين تكوين خادم ويب Nginx وتطبيقاتها.
أخيرًا ، [Containerize.com][7] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع فئة [Web Server Solution Stack][8] للحصول على آخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [كيفية استخدام nginx كموازن تحميل لتطبيقك][9]
  * [كيفية إعداد وتكوين Nginx كوكيل عكسي][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
