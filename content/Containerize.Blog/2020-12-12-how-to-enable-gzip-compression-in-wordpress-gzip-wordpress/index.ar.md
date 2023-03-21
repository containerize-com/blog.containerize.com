---
title: "كيفية تمكين ضغط GZIP في WordPress | Gzip WordPress" 
seoTitle: "كيفية تمكين ضغط GZIP في WordPress | Gzip WordPress" 
description: "هل تريد تمكين ضغط GZIP في WordPress لتسريع موقع الويب الخاص بك؟ في منشور المدونة هذا ، سنتعلم كيفية تمكين الضغط في WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "سرعة الصفحة وأوقات التحميل هي العوامل الرئيسية لتصنيف أفضل في محركات البحث. يمكن أن يحدث ضغط GZIP ويوفر ميزة تنافسية." 
url: /ar/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## سرعة الصفحة وأوقات التحميل هي العوامل الرئيسية لتصنيف أفضل في محركات البحث. يمكن أن يحدث ضغط GZIP ويوفر ميزة تنافسية.

{{< figure align=center src="images/Asset-1.png" alt="تمكين ضغط GZIP">}}


## ملخص
نظرًا لأن Google ومحركات البحث الأخرى تدرس تجربة مستخدم موقع الويب (UX) عاملاً حاسمًا في خوارزميات التصنيف الخاصة بهم. لقد أصبح من المهم تحسين موقع الويب الخاص بك وتحسينه للحصول على أعلى التصنيفات. من بين أهم العوامل التي يجب الانتباه إليها ، سرعة الصفحة وأوقات التحميل. وأسرع وأسهل طريقة لتحسين سرعة الموقع والأداء هي تمكين ضغط GZIP على موقع الويب الخاص بك. هناك فرصة لتمكين مضيف الويب تلقائيًا من ضغط GZIP لك. إذا لم يكن الأمر كذلك ، يجب عليك القيام بهذه المهمة الحاسمة بنفسك.
في هذه المقالة ، سنعرض لك بالضبط كيفية تمكين ضغط GZIP بسهولة في WordPress. هيا بنا نبدأ!
* [**ما هو ضغط GZIP**؟][1]
* [**كيف يعمل ضغط GZIP؟**][2]
* **[كيفية التحقق مما إذا تم تمكين ضغط GZIP؟][3]**
* **[تمكين ضغط GZIP في WordPress][4]**
* **[الخلاصة][5]**

## ما هو ضغط GZIP؟   {#ماذا}
GZIP هو تنسيق ملف**وتطبيق برنامج**يستخدم لضغط الملف وإزالة الضغط. تستخدم خوادم الويب أو غيرها من البرامج ضغط GZIP لضغط ملفات البيانات قبل إرسالها إلى متصفحات المستخدمين. هذا يقلل من وقت تنزيل الملف الذي يجعل موقع الويب الخاص بك أسرع. جميع المتصفحات الحديثة تدعم ضغط GZIP.
من المهم أيضًا ملاحظة أن ضغط GZIP يجب تمكينه على خادم الويب الخاص بك قبل أن تتمكن من تمكين ضغط الملف ومجلد. بعد فترة وجيزة ، سنرى كيفية التحقق مما إذا كان خادم الويب الخاص بك قد تم تمكين GZIP.

## كيف يعمل ضغط GZIP؟   {#عمل}
يتم استخدام GZIP ، وهي طريقة الضغط الأكثر شعبية ، من خلال خوادم الويب والمتصفحات لضغط المحتوى وإلغاء ضغطه أثناء نقله عبر الإنترنت. يتم استخدامه في الغالب على الكود والملفات النصية ، يمكن لـ GZIP تقليل حجم ملفات JavaScript و CSS و HTML بنسبة تصل إلى 90 ٪. بشكل افتراضي ، لا يضغط ضغط GZIP على الصور أو مقاطع الفيديو. لذلك ، ستحتاج إلى تحسين الصور للويب على موقع WordPress الخاص بك. هذا هو السبب في أن معظم أدوات اختبار سرعة الموقع مثل Google PageSpeed ​​Insights توصي بشدة بتمكين ضغط GZIP.
عندما يتلقى خادم الويب طلبًا للحصول على صفحة ويب ، يقوم خادم الويب بفحص رأس الطلب للتحقق مما إذا كان المتصفح يدعم GZIP. إذا كان الأمر كذلك ، يقوم الخادم بإنشاء علامة على الصفحة قبل تطبيق GZIP. يحول GZIP علامة HTML إلى بيانات مضغوطة يتم تسليمها بعد ذلك إلى المستخدم النهائي. عندما يتلقى المستخدم النهائي البيانات المضغوطة ، يقوم متصفحه بإلغاء ضغطها.

##**كيفية التحقق مما إذا تم تمكين ضغط GZIP؟** {#verify}
قد يمكّن مضيف الويب الخاص بك الضغط في WordPress افتراضيًا. ومع ذلك ، هذا ليس هو الحال دائمًا. يمكنك تحديد لمعرفة ما إذا كان لديك بالفعل ضغط GZIP باستخدام DevTools Chrome.
افتح موقعك في متصفح Chrome ، ثم انقر بزر الماوس الأيمن على الصفحة على الصفحة وحدد**فحص**إلى**افتح أدوات المطور**.
بعد ذلك ، انتقل إلى علامة التبويب "شبكة****" وانقر فوق عنوان URL الرئيسي لموقع الويب من قسم "الاسم". حدد علامة التبويب**رؤوس**، ثم قم بالتمرير لأسفل للعثور على رؤوس الاستجابة****: القسم:

{{< figure align=center src="images/gzip-determine.gif" alt="تحقق من ترميز المحتوى">}}

هناك ، سترى ما إذا كان ضغط GZIP قد تم تمكينه أم لا.

## تمكين ضغط GZIP في WordPress   {#enable}
إذا كنت قد حددت أن**WordPress GZIP Pecression لم يتم تمكينه بعد**، فهناك طرق متعددة يمكنك استخدامها لتشغيلها. أسهل طريقة هي استخدام بعض الإضافات WordPress مثل [WP Rocket][6] ، [WP Super Cache][7] ، أو [W3 Total Cache][8]. ومع ذلك ، يمكنك القيام بذلك يدويًا على مستوى الخادم إما بواسطة ملف .htaccess أو عن طريق تحديث تكوين Nginx.

### عن طريق التحرير .htaccess ملف
واحدة من أكثر الطرق شيوعًا لتمكين ضغط WordPress GZIP هي**تحرير ملف _.htaccess_**. ومع ذلك ، فإن هذا ينطوي على خطر كسر شيء ما. هذا هو ملف خادم حساس ، وقد تتسبب خطوة خاطئة واحدة في الكثير من المشاكل.
لتقليل المخاطر ، تأكد من**حفظ نسخة من الملف الأصلي**قبل إجراء أي تغييرات. يجب أن يكون ملف _.htaccess_ في المجلد الجذر**لموقع الويب الخاص بك**. بعد فتح _.htaccess_ ، أضف الكود التالي أسفل الأقسام التي تحمل علامات "# ابدأ WordPress` و"# end WordPress`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
* * احفظ الملف**وقم بتحميله على خادم موقعك. عند الانتهاء من ذلك ، تحقق مما إذا تم تمكين GZIP باستخدام DevTools من Chrome كما هو موضح أعلاه.

## تمكين ضغط GZIP في Nginx
لتمكين الضغط**، قم بتضمين توجيه**GZIP**مع المعلمة ON.**gzip**on ؛ بشكل افتراضي ،**nginx**يضغط الاستجابات فقط مع نص نوع mime/html. لضغط الاستجابات مع أنواع MIME الأخرى ، قم بتضمين توجيه GZIP_TYPES وسرد الأنواع الإضافية.
يمكنك تمكين ضغط GZIP في WordPress عن طريق**فتح ملف _nginx.conf_**وإضافة الكود التالي:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## الخاتمة   {#conclusion}
هذه هي نهاية هذا البرنامج التعليمي GZIP WordPress. هناك العديد من الطرق لتحسين موقع الويب الخاص بك للسرعة والأداء. في هذا البرنامج التعليمي GZIP WordPress ، مررنا بما هو ضغط GZIP ، وأهمية ضغط GZIP ، وخطوات التثبيت. بالإضافة إلى ذلك ، هناك العديد من الروابط ذات الصلة المذكورة في قسم "استكشاف" أدناه.
أخيرًا ، [Containerize.com][9] يكتب مقالات حول منتجات أخرى مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال بفئة [التدوين][10] للأخبار والتحديثات العادية.

## يستكشف
  * [ماتومو][11]
  * [معقول][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [كيفية مرسومة WordPress مع Docker Compose][15]
  * [كيف تساعد أدوات تحليلات الأعمال المجانية عملك][16]
  * [أفضل 5 أدوات ذكاء الأعمال المفتوح المصدر لعام 2021][17]
  * [كيفية تثبيت البرنامج المساعد في WordPress | منتدى الفانيليا][18]
  * [تعزيز خيوطك مع تكامل WordPress المجاني CivIcrm][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
