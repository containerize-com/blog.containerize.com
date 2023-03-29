---
title: "كيفية تحسين موقع الويب الخاص بك باستخدام ضغط GZIP في Nginx" 
seoTitle: "كيفية تحسين موقع الويب الخاص بك باستخدام ضغط GZIP في Nginx" 
description: "في هذه المقالة ، سنناقش طريقة لتحسين سرعات نقل موقع الويب الخاص بك عن طريق تقليل أحجام الملفات من خلال ضغط GZIP في Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "يرشدك هذا البرنامج التعليمي حول كيفية تحسين أداء موقع الويب الخاص بك وجعله سريعًا عن طريق تقليل أحجام الملفات باستخدام ضغط GZIP في Nginx." 
url: /ar/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## يرشدك هذا البرنامج التعليمي حول كيفية تحسين أداء موقع الويب الخاص بك وجعله سريعًا عن طريق تقليل أحجام الملفات باستخدام ضغط GZIP في NGINX.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="كيفية تمكين ضغط GZIP في Nginx">}}

هذه المقالة في استمرار سلسلة الدروس الخاصة بنا حول Nginx. لقد قمنا حتى الآن بتغطية كيفية استخدام Nginx كموازن تحميل ، وكيفية استخدام Nginx كبديل عكسي. والآن يغطي هذا البرنامج التعليمي سؤالًا آخر يتطلب "كيفية تحسين موقع الويب الخاص بك باستخدام ضغط GZIP في Nginx". في هذا البرنامج التعليمي ، سنوجهك خطوة بخطوة حول كيفية تمكين ضغط GZIP في Nginx. اذا هيا بنا نبدأ!
  * [تحسين الموقع مع الضغط][1]
  * [ما هو ضغط GZIP؟][2]
  * [كيف يعمل ضغط GZIP؟][3]
  * [تمكين ضغط GZIP في Nginx][4]
  * [تحقق من ضغط GZIP][5]
  * [الخلاصة][6]

## تحسين الموقع مع الضغط {#optimize}

يعتمد أداء موقع الويب على عدد من العوامل. أحد العوامل التي يعتمد عليها جزئيًا هو حجم جميع الملفات التي يجب على متصفح المستخدم تنزيلها من الخادم الخاص بك. يمكن أن يؤدي تقليل أو ضغط حجم هذه الملفات المرسلة إلى جعل موقع الويب الخاص بك يتم تحميله بشكل أسرع للمستخدم. يمكن أن يقلل أيضًا من فاتورة موقع الويب الخاص بك في حالة دفع استخدام النطاق الترددي على الاتصالات المقننة. لذلك يمكن أن يلعب الضغط دورًا حيويًا للغاية في تحسين موقع الويب الخاص بك.
نظرًا لأن Google ومحركات البحث الأخرى تدرس تجربة مستخدم موقع الويب (UX) عاملاً حاسمًا في خوارزميات التصنيف الخاصة بهم. لقد أصبح من المهم تحسين موقع الويب الخاص بك وتحسينه للحصول على أعلى التصنيفات. من بين أهم العوامل التي يجب الانتباه إليها ، سرعة الصفحة وأوقات التحميل. وأسرع وأسهل طريقة لتحسين سرعة موقع الويب الخاص بك وأدائها هي تمكين ضغط GZIP على موقع الويب الخاص بك.

## ما هو ضغط GZIP؟ {#what-gzip}

GZIP هو تنسيق ملف **وتطبيق البرنامج** المستخدم لضغط الملف وإزالة الضغط. تستخدم خوادم الويب أو غيرها من البرامج ضغط GZIP لضغط ملفات البيانات قبل إرسالها إلى متصفحات المستخدمين. هذا يقلل من وقت تنزيل الملف الذي يجعل موقع الويب الخاص بك أسرع. جميع المتصفحات الحديثة تدعم ضغط GZIP.
من المهم أيضًا ملاحظة أن ضغط GZIP يجب تمكينه على خادم الويب الخاص بك قبل أن تتمكن من تمكين ضغط الملف ومجلد. بعد فترة وجيزة ، سنرى كيفية تمكين ضغط GZIP في Nginx.

## كيف يعمل ضغط GZIP؟ {#how-gzip}

يتم استخدام GZIP ، وهي طريقة الضغط الأكثر شعبية ، من خلال خوادم الويب والمتصفحات لضغط المحتوى وإلغاء ضغطه أثناء نقله عبر الإنترنت. يتم استخدامه في الغالب على الكود والملفات النصية ، يمكن لـ GZIP تقليل حجم ملفات JavaScript و CSS و HTML بنسبة تصل إلى 90 ٪.
بشكل افتراضي ، لا يضغط ضغط GZIP على الصور أو مقاطع الفيديو. هذا هو السبب في أن معظم أدوات اختبار سرعة الموقع مثل Google PageSpeed ​​Insights توصي بشدة بتمكين ضغط GZIP.
عندما يتلقى خادم الويب طلبًا للحصول على صفحة ويب ، يقوم خادم الويب بفحص رأس الطلب للتحقق مما إذا كان المتصفح يدعم GZIP. إذا كان الأمر كذلك ، يقوم الخادم بإنشاء علامة على الصفحة قبل تطبيق GZIP. يحول GZIP علامة HTML إلى بيانات مضغوطة يتم تسليمها بعد ذلك إلى المستخدم النهائي. عندما يتلقى المستخدم النهائي البيانات المضغوطة ، يقوم متصفحه بإلغاء ضغطها.

## تمكين ضغط Gzip في Nginx {#enable-gzip}

لتغيير تكوين NGINX GZIP ، افتح ملف تكوين NGINX الرئيسي في "_VI_" أو محرر النص المفضل لديك:
```
sudo vi /etc/nginx/nginx.conf
```
ابحث عن قسم إعدادات _gzip_ ، والذي يبدو هكذا:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
كما ترون ، يتم تمكين GZIP افتراضيًا مع _gzip ON ؛ _ ولكن هناك إعدادات أخرى معلنة GZIP.
يمكننا تمكين إعداد _gzip_types_ لتمكين الضغط على أنواع الملفات التي نريد ضغطها. على سبيل المثال
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
الآن أعد تشغيل Nginx لاتخاذ إعدادات جديدة سارية.

## تحقق من ضغط GZIP {#verify}

الآن وقد قمنا بتمكين ضغط GZIP دعنا نتحقق منه.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
ستبقى الاستجابة كما هي لأن الضغط قد تم تمكينه بالفعل لتلك filetype:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## خاتمة {#conclusion}

لقد تعلمنا في هذه المقالة أنه يمكنك استخدام وحدة Nginx GZIP لتسريع عمليات نقل الملفات. لقد أظهرنا لك خطوة بخطوة كيفية تمكين ضغط GZIP في NGINX باستخدام وحدة GZIP. يسرد الوثائق الرسمية لـ [GZIP Module][7] توجيهات التكوين الأخرى التي قد ترغب في إلقاء نظرة عليها. آمل أن يساعدك هذا البرنامج التعليمي على تحسين أداء موقع الويب الخاص بك وسرعة.

## يستكشف
  * [كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu][8]
  * [كيفية إعداد وتكوين Nginx كوكيل عكسي][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
