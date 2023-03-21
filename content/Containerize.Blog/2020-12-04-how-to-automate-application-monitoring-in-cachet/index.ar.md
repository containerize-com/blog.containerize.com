---
title: "كيفية أتمتة مراقبة تطبيق الويب في cachet" 
seoTitle: "كيفية أتمتة مراقبة تطبيق الويب في cachet" 
description: "يساعد Cachet في مراقبة جميع خدماتك وإخطار المشتركين على الفور. تدور هذه المقالة حول دمج البرنامج المساعد لجهات خارجية لأتمتة المراقبة." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "تتيح صفحة حالة cachet الشركات من الحصول على إشعارات فورية حول تعطل الخدمة. سوف نتعلم كيفية أتمتة مراقبة تطبيق الويب في Cachet." 
url: /ar/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## صفحة حالة cachet تمكن الشركات من الحصول على إشعارات فورية حول تعطل الخدمة. سوف نتعلم كيفية أتمتة مراقبة تطبيق الويب في Cachet.

{{< figure align=center src="images/cachet-monitor.png" alt="مراقبة تطبيق الويب">}}

تعد مراقبة التطبيقات والخدمات جزءًا مهمًا جدًا من الأعمال التجارية عبر الإنترنت. يعمل موقع الويب الخاص بك على مدار 24 × 7 ويمكنك أن تخطئ في أي لحظة. لا يمكنك معرفة أي من الموقع يعمل أو لا حتى زيارته. علاوة على ذلك ، لن يكون لدى العملاء معلومات حول هذه المشكلة. قد يتصلون بفريق الدعم الخاص بك للتوقف عن الخدمة. علاوة على ذلك ، قد يؤدي هذا إلى أن يصبح عملاؤك بخيبة أمل. ومع ذلك ، يمكنك تقليل وقت تعطل الخدمة عن طريق تكوين نظام صفحة الحالة. سيقوم نظام صفحة الحالة بمراقبة جميع خدماتك على مدار الساعة وإرسال الإخطارات إلى فريقك وعملائك على الفور. سيتيح لك ذلك اتخاذ خطوات سريعة لإصلاح المشكلة وسيتم تحديث العملاء على التقدم. في منشور المدونة هذا ، سوف تتعلم كيفية دمج مكتبة الطرف الثالث مع**cachet**لـ**أتمتة المراقبة**.
  * [المتطلبات][1]
  * [المكون الإضافي لمراقبة الإعداد][2]
  * [إنشاء خدمة Linux][3]
  * [الخلاصة][4]

## المتطلبات   {#Requirements}
  * تثبيت أحدث إصدار من cachet.
  * على دراية بخدمات Linux.

## Setup Monitoring Plugin   {#Plugin}
فيما يلي خطوات لتثبيت المكون الإضافي وتكوينه للمراقبة على Ubuntu.
  * تنزيل ثنائي من [صفحة الإصدار][5].
  * أعد تسمية الملف إلى Cachet-Monitor.
  * اجعل الملف قابل للتنفيذ مع الأمر.
```
sudo chmod +x cachet-monitor
```
  * ضع التنفيذ في دليل المسار ، بحيث يمكنك الوصول إليه مباشرة عبر المحطة الطرفية. لذلك ، أقترح عليك التحرك تحت**/usr/local/bin**.
  * إنشاء ملف config.json عن طريق تشغيل الأمر التالي.
```
sudo nano config.json
```
  * انسخ الكود أدناه وحفظ الملف.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check**failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * الآن ، اختبر التكوين الخاص بك مع هذا الأمر.
```
cachet-monitor -c config.json
```
  * إذا كان كل شيء يعمل بشكل جيد ، فانتقل إلى القسم التالي وإنشاء خدمة Linux.

## إنشاء خدمة Linux   {#Service}
فيما يلي خطوات لإنشاء خدمة Linux وبدءها لأتمتة عملية المراقبة.
* إنشاء خدمة**ملف cachet-monitor.service**.
```
sudo nano cachet-monitor.service
```
  * انسخ الكود أدناه وحفظ الملف.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * تحديث تكوين النظام عن طريق تشغيل الأمر.
```
sudo systemctl daemon-reload
```
  * تمكين خدمة Cachet-Monitor عن طريق تشغيل الأمر ، بحيث يمكن تحميلها على بدء تشغيل النظام.
```
sudo systemctl enable cachet-monitor.service
```

## الخاتمة   {#conclusion}
Cachet A مجاني و**نظام الحالة المفتوحة المصدر**نظام. ومع ذلك ، فإنه لا يوفر ميزة المربع لمراقبة تطبيق الويب****. بدلاً من ذلك ، يحتوي على واجهة برمجة تطبيقات قوية يمكن استخدامها لأداء إجراءات مثل الحوادث والمكونات والمجموعات وغيرها الكثير. في هذه المقالة ، استخدمنا المكون الإضافي لجهات خارجية لأتمتة مراقبة التطبيق في Cachet. قبل كل شيء ، يمكنك تطوير البرنامج المساعد الخاص بك أو استخدام أي مكون إضافي آخر للقيام بالمهمة.
علاوة على ذلك ، [Containerize.com][6] في الطريق لتحسين كومة المنتجات المفتوحة المصدر بلغات وأطر متعددة. للحصول على تحديثات منتظمة ، يرجى ترقبنا إلى [صفحة الحالة][7] فئة لمقالات أكثر إثارة للاهتمام.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [أفضل أنظمة صفحة الحالة المفتوحة المصدر][8]
  * [CACHET - برنامج صفحة الحالة المجانية والمفتوحة المصدر][9]
  * [Top 5 Open Sound Page Software لعام 2020][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
