---
title: "كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian" 
seoTitle: "كيفية تكوين Apache كوكيل عكسي لـ Ubuntu/Debian" 
description: "تتيح لك Apache Reverse Proxy تكوين خطوة بخطوة تشغيل خوادم واحدة أو أكثر من الخوادم الخلفية خلف خادم وكيل مع mod_proxy على Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "يتيح لك Apache Reverse Proxy تشغيل خوادم خلفية واحدة أو أكثر خلف خادم وكيل. إليك كيفية تكوين وكيل Apache العكسي على نظام Ubuntu/Debian." 
url: /ar/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## يتيح لك الوكيل العكسي Apache تشغيل خوادم خلفية واحدة أو أكثر خلف خادم وكيل. إليك كيفية تكوين وكيل Apache العكسي على نظام Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="تثبيت وتكوين الوكيل العكسي Apache">}}


##**ملخص**
يتيح Apache Reverse Proxy جميع حركة المرور وإعادة توجيهه لتشغيل خوادم أو أكثر من الخوادم الخلفية أو الحاويات خلف خادم وكيل ، دون تعريضها علنًا. يمكن أن يكون خادم الويب الخلفي إما Apache2 أو خادم HTTP مفتوح المصدر مثل Nginx. يعد Apache2 HTTP Server أحد أكثر خادم الويب مفتوح المصدر شيوعًا الذي يتم استخدامه اليوم.
هناك العديد من الأسباب لتثبيت وتكوين خادم وكيل. على سبيل المثال ، يمكن أن يساعدك الوكيل العكسي في إضافة الأمان ، لموازنة التحميل ، وقصر الوصول إلى مواقع معينة من أجل منع الهجمات وغيرها الكثير. تشرح هذه المقالة كيفية تثبيت وتكوين تكوين الوكيل العكسي Apache خطوة بخطوة لخادم HTTPS على Ubuntu/Debian:
  * تثبيت Apache2
  * تكوين Apache2
  * تمكين وحدات الوكيل الخاصة به
  * تمكين SSL
  * إعادة تشغيل Apache2
  * خاتمة

## الخطوة 1: تثبيت Apache2
تثبيت Apache2 بسيط للغاية وسهل التشغيل. للقيام بالتركيبات ، قم بتشغيل الأوامر أدناه ببساطة:
Sudo APT-GET UPDATE
sudo apt-get تثبيت apache2
{{_LINE_25_}}
بعد تثبيت APACH2 على نظامك ، استخدم أوامر SystemCTL التالية على إصدار Debian Linux أو Ubuntu Linux Ubuntu للتوقف والبدء وتمكين وإعادة تشغيل Apache2 لإعادة تشغيله دائمًا عند رفع الخادم.
sudo systemctl توقف apache2.service
sudo systemctl ابدأ Apache2.Service
Sudo SystemCTL تمكين Apache2.Service
sudo systemctl إعادة تشغيل Apache2.Service
{{_LINE_31_}}
يمكنك عرض حالة خادم الويب باستخدام الأمر التالي:
sudo systemctl status Apache2.Service
{{_LINE_34_}}
للتحقق من إعداد APACH2 ، افتح متصفحك وتصفح اسم مضيف الخادم أو عنوان IP الخاص بنظامك ، ويجب أن ترى صفحة الاختبار الافتراضية APACH2 كما هو موضح أدناه. عندما ترى ذلك ، فإن Apache2 يعمل كما هو متوقع. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="قم بتثبيت وتكوين وكيل Apache العكسي لـ Ubuntu">}}


## الخطوة 2: تكوين Apache2 كوكيل عكسي
يتم تثبيت APACH2 بنجاح وجاهز للاستخدام. يمكنك الآن تكوين APACH2 للعمل كوكيل عكسي APACH2 OBUNTU. توفر Apache2 Proxy Module **proxypass  **و **  proxypassreverse  **وظيفة عكسية. لاستخدام **  proxypass  **و**   proxypassreverse** ، يجب أولاً أن تعرف أنه حيث تريد توجيه حركة مرور الموقع.
سيستمع خادم الوكيل APACH2 العكسي لجميع حركة المرور على منفذ HTTP الافتراضي ، وهو المنفذ 80 في إعداد بسيط. سيستمع الخادم الخلفي الذي يستضيف محتوى الموقع على منفذ مخصص ، وعلى الأرجح المنفذ 8080.
في مقالة المدونة هذه ، سنقوم بإعداد APACH2 للاستماع إلى المنفذ 80 ثم توجيه حركة المرور إلى الخادم الخلفي الذي يستمع إلى المنفذ 8080. قم بتشغيل الأمر أدناه لإنشاء ملف VirtualHost الوكيل يسمى APACH2PROXY.CONF.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
ثم أضف الكتلة التالية من الرموز في ملف Apache2Proxy.conf ثم احفظه.
{{_LINE_43_}}
        serverName example.com
        serveralias www.example.com
        serveradmin webmaster@example.com
        errorlog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir}/Access.log مجتمعة
        Proxyrequests قبالة
{{_LINE_50_}}
          أمر إنكار ، اسمح
          السماح من الجميع
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        proxypassreverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          أمر السماح ، إنكار
          السماح من الجميع
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
يحتوي ملف Apache2Proxy.conf على اسم الخادم الخاص بك بالإضافة إلى Proxy_pass حيث سيتم توجيه حركة المرور عند استلامها بواسطة خادم وكيل HTTP.

## الخطوة 3: تمكين وكيل Apache2
تم تثبيت خادم الويب APACHE2 الآن وإعداده بنجاح. يحتوي Apache على العديد من الوحدات المجمعة المتاحة المجمعة فيه. لا يتم تمكين هذه الوحدات في تثبيت Apache2 الطازج. أولاً ، سنحتاج إلى تمكين الوحدات النمطية التي نحتاجها لتمكين وحدة Apache Mod_Proxy المطلوبة والعديد من وحدات الإضافات الخاصة بها لدعم بروتوكولات الشبكة المختلفة. قم بتشغيل الأوامر المدرجة أدناه لتمكين وحدات وكيل HTTP الخاصة بها.
Sudo A2enmod Proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
قم الآن بتمكين موقع VirtualHost وإعادة تشغيل APACH2 لتمكين إعادة تحميل تكوين وحدات APACH2.
sudo a2ensite apache2proxy.conf
sudo systemctl إعادة تشغيل Apache2.Service
قم بتشغيل متصفح ويب من اختيارك وانتقل إلى اسم مضيف الخادم الخاص بك مثل example.com. سيتم الآن تقديمه إلى خادم Apache2 الخاص بك على المنفذ الافتراضي ، أي 8080.

## الخطوة 4: تمكين SSL   {#block-07b86d83-DCA0-4924-B991-206719C342EB}
إذا كنت ترغب في تمكين وحدة SSL الوكيل Apache ، فقم بتشغيل الأمر أدناه لتمكين APACHER ESPANCY PROXY HTTPS PROXY PASS:
Sudo A2enmod SSL
سيوفر ذلك دعم Apache Apache HTTP الآمن لدعم HTTPS لخوادم الخلفية.

## الخطوة 5: إعادة تشغيل Apache2   {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}
لإجراء هذه التغييرات في تأثيرها ، أعد تشغيل Apache عن طريق تشغيل الأمر أدناه:
sudo systemctl إعادة تشغيل Apache2.Service
تهانينا! لقد قمت بتثبيت وتكوين الوكيل APACH2 العكسي بنجاح على نظام Linux الخاص بك.

##  **الخلاصة:**    {#4A1A}
في هذا البرنامج التعليمي ، قمنا باستكشاف وناقش ما هو خادم وكيل و Apache عكسي مثال تكوين الوكيل خطوة بخطوة. لقد تعلمنا أيضًا كيفية إعداد وتكوين APACH2 كوكيل عكسي على نظام Linux. في البرامج التعليمية القادمة ، سنناقش مواضيع أكثر إثارة للاهتمام حول مداخن حلول Apache وغيرها من محاليل Web Server.

## يستكشف
قد يعجبك أيضًا المقالات الأكثر صلة أدناه:
  * [كيفية][1][تثبيت وتأمين phpmyadmin مع nginx على ubuntu][2]
  * [كيفية إعداد nginx مع ركاب على خادم إنتاج AWS][3]
  * [تكوين HTTP/2 دعم في Nginx على Ubuntu/Debian][4]
  * [تأمين وتشفير nginx مع دعنا نش تشفير على Ubuntu 20.04][5]
  * [كيفية تثبيت وتكوين OwnCloud مع Apache على Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/ar/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
