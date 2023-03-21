---
title: "دليل خطوة بخطوة لإعداد لقاء Jitsi مفتوح المصدر" 
seoTitle: "دليل خطوة بخطوة لإعداد لقاء Jitsi مفتوح المصدر" 
description: "تعلم كيفية إعداد Jitsi لقاء. إنه برنامج مؤتمرات فيديو مفتوح المصدر مصمم لتلبية احتياجات الاتصالات عن بُعد ويوفر ميزات قوية" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "يجمع Jitsi Meet الناس عن بعد لإجراء اجتماعات فعالة. دعنا نتعلم كيفية إعداد برنامج مؤتمرات الفيديو هذا واستكشاف ميزاته" 
url: /ar/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## يجمع Jitsi الأشخاص عن بُعد لإجراء اجتماعات فعالة. دعنا نتعلم كيفية إعداد برنامج مؤتمرات الفيديو هذا واستكشاف ميزاته

{{< figure align=center src="images/jitsi-bannerF.png" alt="برنامج مؤتمرات الفيديو">}}


## ملخص
لقد نشرنا مؤخرًا [منشور المدونة][1] يتحدث عن تأثير [برنامج مؤتمرات الفيديو][2] في قطاع الشركات. ومع ذلك ، في هذه المقالة ، سوف نغطي النقاط التالية.
  * [مقدمة موجزة عن لقاء Jitsi][3]
  * [كيفية إعداد Jitsi لقاء؟][4]
  * [Jitsi تلبية الميزات استكشاف][5]
  * [الخلاصة][6]

## مقدمة موجزة لـ Jitsi Meet   {#Intro}
[Jitsi Meet][7] عبارة عن برنامج تعاون عبر الفيديو آمن وقابل للتطوير مجاني تمامًا. يوفر العديد من الميزات الشائعة مثل مؤتمرات الفيديو متعددة الأحزاب مع التشفير الكامل ودعم EtherPad وتسجيل الفيديو/الصوت. يتيح لك برنامج WEBRTC المتوافق هذا دعوة أكبر عدد ممكن من المستخدمين في اجتماع فيديو.
بدأ ظهور الاجتماعات الافتراضية في الآونة الأخيرة ويعتقد الناس أن التواصل من خلال مكالمات الفيديو/الصوت أكثر فاعلية وتعاونًا. قبل كل شيء ، لا تعمل هذه الفئة من البرامج على أجهزة الكمبيوتر المحمولة/أجهزة الكمبيوتر المكتبية فحسب ، بل تمكن المشاركين أيضًا من حضور اجتماعات الفيديو المضمونة وجهاً لوجه من خلال هاتفهم المحمول.

## كيفية إعداد Jitsi لقاء؟   {#يثبت}
في هذا القسم ، سوف ندخل في عملية التثبيت في Jitsi لقاء. أولاً ، تأكد من تثبيت المتطلبات المسبقة التالية.
  * [Docker][8]
بمجرد تثبيت Docker ، قم بتنزيل ملف zip للرمز المصدر من هذا [الرابط][9].
افتح الجهاز وقم بتشغيل الأمر التالي
`cd docker-jitsi-meet`
بعد ذلك ، قم بتشغيل الأمر التالي لإنشاء ".env`
`cp env.example .env`
الآن ، قم بتشغيل الأمر التالي لإنشاء الدلائل المطلوبة.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt ، النصوص ، prosody/config ، prosody/prosody-plugins-custom ، jicofo ، jvb ، jigasi ، jibri}` ``
أخيرًا ، قم بتشغيل هذا الأمر لتدوير صورة Docker والوصول إلى التطبيق في عنوان URL هذا في المتصفح.
`docker -cormpose up`

## jitsi تلبية الميزات استكشاف   {#features}
يوفر برنامج الدردشة المرئية المجانية هذا العديد من الميزات الغنية. هذه هي الصفحة الرئيسية التي سيتم عرضها أولاً.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="مؤتمرات الفيديو">}}

اكتب التسمية التوضيحية للاجتماع واضغط على "Go" وسوف تهبط إلى نافذة دفق الفيديو التالي.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="برنامج مفتوح المصدر">}}

يمكنك دعوة الأشخاص إلى الاجتماع من خلال مشاركة الرابط الموضح في النافذة المنبثقة. علاوة على ذلك ، يمكنك تضمين دفق الفيديو في أي مكان عن طريق الحصول على الرمز.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="برنامج مفتوح المصدر">}}

يمنحك خيارًا لمشاركة شاشتك مع مشاركين آخرين.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="دردشة الفيديو">}}

من الزاوية اليمنى العليا ، يمكنك رؤية تفاصيل اتصال الفيديو الخاص بك.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="دردشة فيديو مجانية">}}

تقدم Jitsi Meet Chat متكاملة مع الرموز التعبيرية.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="برنامج اجتماعات الفيديو">}}


## الخاتمة   {#con}
في هذه المقالة ، مررنا ببرنامج اتصال عن بُعد مذهل وعملية التثبيت. علاوة على ذلك ، فقد حان الوقت لاختيار أفضل الحلول لمزامنة احتياجات العمل مع التقنيات المتطورة. في النهاية ، يعمل [Containerize.com][10] على توسيع قائمة برامج مؤتمرات الفيديو. لذلك ، يرجى البقاء على اتصال مع فئة [برنامج مؤتمرات الفيديو][2] للتحديثات العادية.

## صفحات المنتج ذات الصلة
قد تجد الروابط التالية ذات الصلة:
  * [لقاء Jitsi][7]
  * [bigbluebutton][11]
  * [OpenVidu][12]
  * [عنصر][13]
  * [سلك][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
