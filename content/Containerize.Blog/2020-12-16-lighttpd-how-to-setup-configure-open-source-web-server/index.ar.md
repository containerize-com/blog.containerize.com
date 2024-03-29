---
title: "Lighttpd | كيفية إعداد وتكوين خادم الويب مفتوح المصدر " 
seoTitle: "Lighttpd | كيفية إعداد وتكوين خادم الويب مفتوح المصدر" 
description: "اتبع هذه المقالة لمعرفة كيفية إعداد وتكوين خادم الويب مفتوح المصدر. LightTPD هو خادم ويب متوافق يأتي مع التحكم القوي في تحميل وحدة المعالجة المركزية." 
date: Wed, 16 Dec 2020 12:53:41 +0000
author: bilalahmed
summary: "تكوين خادم ويب آمن وخفيف الوزن ومفتوح المصدر. LightTPD هو خادم ويب مجاني على مستوى المؤسسة وأفضل ملاءمة للمواقع الإلكترونية ذات الأداء العالي." 
url: /ar/lighttpd-how-to-setup-configure-open-source-web-server/
categories: ['Web Server Solution Stack']
---

## تكوين خادم ويب آمن وخفيف الوزن ومفتوح المصدر. LightTPD هو خادم ويب مجاني على مستوى المؤسسة وأفضل ملاءمة للمواقع الإلكترونية ذات الأداء العالي.

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Websites.png" alt="خادم الويب مفتوح المصدر">}}

مرحبًا بك في منشور مدونة آخر في فئة [Web Server Solution Cack][1]. لقد نشرنا العديد من المقالات مثل [[Setup Xampp و PhpmyAdmin كضيف محلي على Windows][2]][3] ، [Top 5 Open Open Web Server Congls في 2021][4] ، وبعض الآخرين. أظهرت هذه المقالات عمليات الإعداد لخوادم الويب المفتوحة المصدر المختلفة جنبًا إلى جنب مع مقالات التوجيه التفصيلية. في الواقع ، تم تقديم خادم ويب في التسعينيات الخلفية ، ومنذ ذلك الحين اكتسبت أقصى درجات شعبية في العالم الرقمي. هناك العديد من العوامل المرتبطة بتقديم المحتوى عبر الإنترنت أو الإنترانت. ومع ذلك ، يتم إرفاق جزء كبير من الصناعة الرقمية بالشركات أو المجتمعات التي تحافظ على حلول خادم الويب. لذلك ، فإن عوامل مثل المتانة والأمان والموثوقية والتخزين وتحسين البيانات وبعض العوامل الأخرى هي الأعمدة الرئيسية للنظام الرقمي على مستوى المؤسسة.
بالإضافة إلى ذلك ، طورت Community Open Source العديد من خوادم الويب مفتوحة المصدر وخوادم ويب ويب لتمكين قطاع الشركات من إنشاء خوادم الويب الخاصة بهم لاستضافة مواقع وبرامج الأعمال. Web LightTPD عبارة عن مكدس حلول ويب مجاني ومفتوح المصدر ، مصمم خصيصًا لآلات Linux. في منشور المدونة هذا ، سنذهب عبر LightTPD من خلال تغطية النقطة التالية.
  * [ما هو Lighttpd؟][5]
  * [فوائد Lighttpd][6]
  * [كيفية تكوين LightTPD؟][7]
  * [الخلاصة][8]

## ما هو Lighttpd؟ {#what}

بالمقارنة مع خوادم الويب الأخرى مثل Apache و Nginx ، يحتوي خادم Web LightTPD على بصمة ذاكرة صغيرة ، لذلك يوفر إدارة فعالة لحمل وحدة المعالجة المركزية. يوفر خادم الويب الخفيف الوزن هذا مجموعات ميزات متقدمة بما في ذلك FastCGI و SCGI و AUTH وضغط الإخراج وتكتسب عنوان URL ، وما إلى ذلك. يسمح بتطبيقات الويب المكتوبة في أي لغة برمجة لاستخدامها مع الخادم. يمكن تكوين FastCGI من LightTPD لدعم PHP. بخلاف PHP ، فإنه يدعم أيضًا لغات البرمجة الأخرى بما في ذلك Python و Perl و Ruby وغيرها الكثير.
هناك العديد من خوادم الويب مفتوحة المصدر وخوادم ويب ويب ولكن LightTPD في أعلى القائمة التي يتم استخدامها على نطاق واسع. من السهل جدًا إعداد حل خادم الويب هذا ويتطلب متطلبات بسيطة مثل Ubuntu 18.04. علاوة على ذلك ، يمكن لأولئك الذين يرغبون في نشر حل مفتوح المصدر تنزيل أحدث إصدار من هذا [الرابط][9]. قبل كل شيء ، يدعم العديد من اللغات بخلاف PHP مثل Python و Ruby و Perl والمزيد. بالإضافة إلى ذلك ، تتوفر جميع الوثائق فيما يتعلق بالتطوير والنشر. لذلك ، يمكن للمطورين العثور على رمز المصدر على [github][10].

## فوائد LightPD {#benefits}

في هذا القسم ، سوف نمر بالفوائد والتوفير الذي يوفره خادم الويب مفتوح المصدر. لذلك ، إذا كنت تبحث عن خادم ويب سريع وفعال وآمن ، فإن خادم الويب LightTPD هو الخيار الأفضل لك. لا يتطلب الكثير من الذاكرة واستخدام وحدة المعالجة المركزية. مما يجعلها واحدة من الأفضل لأي مشروع يحتاج إلى السرعة والأداء العالي. يمكن LightTPD التعامل مع ما يصل إلى 10000 اتصال بالتوازي على خادم واحد. LightTPD هو الحل الأمثل لكل خادم يعاني من مشكلات السرعة أو الأداء. هذا الحل المجاني فعال من حيث التكلفة وفعال الموارد.
علاوة على ذلك ، يقدم حل خادم الويب هذا الدعم لجميع المنصات الشائعة تقريبًا مثل Windows و Linux و Solaris و MacOS. وبالمثل ، يعد LightTPD الكثير من الأنظمة المدمجة ولديه القدرة على تقديم محتوى ثابت وديناميكي لعدة مستخدمين حتى مع موارد محدودة. تشتهر LightTPD بأمانها وسرعة وامتثالها ومرونتها ، تعيد تعريف كفاءة خادم الويب بسرعة.
يوفر LightTPD الفوائد البارزة التالية:
  * دعم HTTP/2
  * دعم واجهات FastCgi و SCGI و CGI
  * TLS OCSP تدبيب
  * mod_proxy يقدم طلبات HTTP/1.1 للتراجع (التغيير من HTTP/1.0)
  * دعم استخدام chroot و mod_rewrite

## كيفية تكوين LightTPD؟ {#configure}

في هذا القسم من منشور المدونة هذا ، نستكشف خطوات تكوين LightTPD. تثبيت LightTPD على Ubuntu بسيط للغاية ومباشر. فقط استخدم الأمر التالي وأنت على ما يرام
```
$ sudo apt install lighttpd
```
يمكنك أيضًا تثبيت LightTPD مباشرة من المصدر. للتثبيت من GIT ، استخدم هذه الأوامر
```
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
cd lighttpd1.4
./autogen.sh
```
للتثبيت من SVN ، استخدم هذه الأوامر
```
svn checkout https://github.com/lighttpd/lighttpd1.4/trunk lighttpd1.4
```
استخدم هذا الأمر لجلب التحديثات
```
svn update
```
لتثبيت التبعيات ، قم بتشغيل هذا الأمر
```
apt-get build-dep lighttpd
```
بعد ذلك ، استخدم الأمر التكوين على النحو التالي
```
./configure --help
```
بناء باستخدام أمر جعل
```
make
```
بعد بناء ناجح ، قم الآن بتثبيت الحزمة
```
su make install
```
تحقق مما إذا تم تكوين LightTPD وتثبيته بشكل صحيح عن طريق زيارة عنوان URL [http: // your-server-ip][11]. يجب أن ترى الصفحة التالية

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Web-1024x506.png" alt="كيفية إعداد وتكوين LightTPD لمواقع الويب عالية الأداء">}}


## خاتمة {#conclusion}

هذا يقودنا إلى نهاية منشور المدونة هذا. لقد مررنا ما هو Lighttpd؟ كيفية تكوين LightTPD؟ وإعداد الإجراء. LightTPD هو خادم ويب مجاني وعالي الأداء ومفتوح المصدر مصمم للبيئات الحرجة للسرعة. تجعل بصمة الذاكرة المنخفضة ، وحمل وحدة المعالجة المركزية الصغيرة ، وتحسينات السرعة مناسبة للخوادم التي تعاني من مشاكل في الحمل. إنه خفيف الوزن وآمن وسريع مقارنة بخوادم الويب الأخرى ، مما يجعلها واحدة من أفضل الخيارات لمواقع الويب عالية الأداء والسرعة. يحتوي LightTPD على مجتمع حي ونابض بالحياة يوفر الدعم للمشكلات والاستعلامات. هناك العديد من منتجات Oper Open Source ومشاركات المدونة ذات الصلة التي يمكنك مرورها والتي تم ذكرها في قسم "Explore" أدناه. لذلك ، يمكن أن تساعدك هذه المقالة حقًا إذا كنت تتطلع إلى اختيار خادم ويب مفتوح المصدر لعملك.
أخيرًا ،  **[Containerize.com][12]**  كتبت على المزيد من المنتجات مفتوحة المصدر. يرجى البقاء على اتصال مع فئة [Web Server Solution Stack][1] لتحديثات منتظمة. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][13] و [LinkedIn][14] و [Twitter][15].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [xampp][16]
  * [nginx][17]
  * [العلبة][18]
  * [Lighttpd | حل خادم الويب مفتوح المصدر وخادم ويب خفيف الوزن][19]
  * [أفضل خيارات مكدس حل خادم الويب مفتوح المصدر][1]
  * [Top 5 Open Source Web Server Congles في 2021][4]
  * [إعداد XAMPP و PHPMYADMIN كضيف محلي على Windows][2]



 [1]: https://products.containerize.com/solution-stack/
 [2]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
 [3]: https://blog.containerize.com/2020/12/16/setup-and-configure-lighttpd-web-server-for-high-performance-websites/
 [4]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
 [5]: #what
 [6]: #benefits
 [7]: #configure
 [8]: #conclusion
 [9]: http://www.lighttpd.net/download/
 [10]: https://github.com/lighttpd/lighttpd1.4
 [11]: http://your-server-ip/
 [12]: https://www.containerize.com/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://products.containerize.com/solution-stack/xampp/
 [17]: https://products.containerize.com/solution-stack/nginx/
 [18]: https://products.containerize.com/solution-stack/caddy/
 [19]: https://products.containerize.com/solution-stack/lighttpd
