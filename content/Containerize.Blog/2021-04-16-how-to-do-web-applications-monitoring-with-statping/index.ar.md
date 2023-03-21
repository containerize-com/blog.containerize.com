---
title: "كيفية القيام بمراقبة تطبيقات الويب مع الإحصاء" 
seoTitle: "كيفية القيام بمراقبة تطبيقات الويب مع الإحصاء" 
description: "Stating هي واحدة من أفضل أدوات مراقبة المواقع التي تمكنك من مراقبة جميع الخدمات. تقديم صفحة حالة جميلة لخدمات العرض." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "رصد مواقع الويب الخاصة بك وتطبيقات الويب تلقائيًا واجهات برمجة التطبيقات مع أدوات المراقبة المجانية ووقت عرض الخدمات مع نظام صفحة الحالة مفتوحة المصدر." 
url: /ar/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## مراقبة مواقع الويب الخاصة بك تلقائيًا وتطبيقات الويب وواجهة برمجة التطبيقات مع أدوات المراقبة المجانية وعرض وقت تشغيل الخدمات مع نظام صفحة الحالة مفتوحة المصدر.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="مراقبة تطبيقات الويب">}}

Stating هو برنامج صفحة الحالة المفتوح المصدر **وواحد من أفضل أداة مراقبة موقع الويب **** . كما أنه يستخدم لمراقبة الخدمات مثل HTTP و TCP و UDP و ICMP و GRPC. يقوم Stating تلقائيًا بإحضار الخدمات ، ومراقبتها ، وتقديم صفحة الحالة الجميلة. إنه منصة متقاطعة ويمكنك تثبيته على أنظمة تشغيل Liunx و Mac و Windows. علاوة على ذلك ، فإنه يسمح باستخدام نظام قاعدة بيانات MySQL أو Postgres أو SQLite لتخزين المعلومات. علاوة على ذلك ، فإنه يأتي مع Out of the Box Mobile Applications لأجهزة iPhone و Android.
دعونا نلقي نظرة على الميزات الأساسية للاستوديوهات.
  ***مراقبة الخدمات**  - تتيح لك Stating تتبع جميع خدمات HTTP و TCP و UDP و GRPC و ICMP بسهولة.
  ***الإخطارات** -تدعم STATING معظم طلبات الطرف الثالث الرئيسي لتلقي الإخطارات.
  **تطبيق Mobile**  - استخدم تطبيقًا مجانيًا لأجهزة iPhone & Android وإدارة كل شيء أثناء التنقل.
  ***Oauth Authenticatio**  N - يدعم مصادقة OAUTH للخدمات الشعبية مثل GitHub و Google و Slack و OpenID مخصص. استخدم هذه الميزة وزيادة الأمن.
سوف نغطي الموضوعات التالية في هذا البرنامج التعليمي.
  * [التثبيت على Linux][1]
  * [تكوين خدمة النظام][2]
  * [إنشاء خدمة للمراقبة][3]
  * [الخلاصة][4]

## التثبيت على Linux   {#Installing}
تشغيل الأمر أدناه لتثبيت stating.
```
curl -o- -L https://statping.com/install.sh | bash
```

## تكوين SystemD Service   {#Configure}
يعد إعداد خدمة SystemD طريقة ممتازة للتأكد من أنه يمكن لخادم Statping إعادة التشغيل تلقائيًا عند الضرورة. لإنشاء خدمة SystemD ، اتبع الخطوات أدناه.
  * أولاً ، قم بتشغيل الأمر أدناه لإنشاء ملف جديد.
```
sudo nano /etc/systemd/system/statping.service
```
  * نسخ أدناه الرمز والصقه فيه.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * أخيرًا ، استخدم الأوامر أدناه لتمكين وبدء خدمة SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## إنشاء خدمة لمراقبة   {#create}
  * افتح متصفحك ، أدخل عنوان URL لتسجيل الدخول إلى تثبيت stating الخاص بك.
  * انقر على رابط الخدمات في Top Mavigation. سوف تظهر لك صفحة الخدمات التي تبدو أدناه واحدة.

{{< figure align=center src="images/statping-dashboard.png" alt="قائمة مراقبة خدمة الويب">}}

  * انقر فوق الزر "إنشاء" لإضافة خدمة جديدة للمراقبة. املأ الحقول المطلوبة مثل اسم الخدمة ، ونوع الخدمة ، والتحقق من الفاصل الزمني ، ونقطة نهاية الخدمة (URL) إلخ.

## الخاتمة   {#conclusion}
لقد تعلمنا عن الإحصاء ، وكيفية تثبيته على Linux ، وكيفية إنشاء خدمة SystemD في هذا البرنامج التعليمي. علاوة على ذلك ، أنشأنا خدمة جديدة لمراقبة وتعريفك بميزات مختلفة. نأمل أن يساعدك هذا الدليل في البدء في استخدام STATING لأداء مراقبة خدمة الويب ** **و **  مراقبة الويب** .
أخيرًا ، [**Containerize.com **][5] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذه [ **صفحة الحالة**  ][6] فئة لآخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  *[**أفضل 5 برنامج صفحة الحالة المفتوحة المصدر لعام 2020** ][7]
  *[**stating** ][8]
  *[**cachet** ][9]
  *[**مراقبة** ][10]
  *[**Staytus** ][11]
  *[**Upptime** ][12]
  *[**statusfy** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
