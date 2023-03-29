---
title: "كيفية تثبيت Webmin مع SSL على Ubuntu 20.04" 
seoTitle: "كيفية تثبيت Webmin مع SSL على Ubuntu 20.04" 
description: "Webmin هي أداة إدارة النظام على الويب للأنظمة التي تشبه UNIX. في هذه المقالة سوف نتعلم كيفية تثبيت Webmin مع SSL على Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "WebMin هي أداة إدارة النظام المستندة إلى الويب والتي تعد بديلاً بسيطًا لإدارة نظام سطر الأوامر. توجه هذه المقالة كيفية تثبيت خدمة الويب" 
url: /ar/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="كيفية تثبيت webmin">}}


## Webmin هي أداة إدارة النظام المستندة إلى الويب والتي تعد بديلاً بسيطًا لإدارة نظام خط الأوامر. توجه هذه المقالة كيفية تثبيت خدمة الويب
مع هذه المقالة "كيفية تثبيت Webmin مع SSL على Ubuntu 20.04" ، بدأنا سلسلة جديدة من البرامج التعليمية على برامج وأدوات استضافة الويب. باستخدام Webmin ، يمكنك إعداد حسابات المستخدمين ، وتمكين مشاركة الملفات ، وتكوين إعدادات Apache ، و DNS ، وأداء العديد من المهام المتعلقة باستضافة الويب. يسمح لك بإدارة خادم استضافة الويب بأكمله. إنه يلغي مشكلة تحرير ملفات تكوين Linux يدويًا. لذلك دعونا نتعلم كيفية تثبيت Webmin باستخدام SSL.
* **[مقدمة إلى Webmin][1]** 
* [ **الميزات المميزة** ][2]
* [ **أنظمة التشغيل المدعومة** ][3]
* [ **تثبيت Webmin على Ubuntu** ][4]
* [ **قم بتثبيت Apache باستخدام Webmin** ][5]
* [ **الخلاصة** ][6]

## مقدمة إلى WebMin {#intro}

Webmin هي واجهة على الويب لإدارة النظام لـ Linux. يساعدك على إدارة خادم الاستضافة الخاص بك عن بعد من أي متصفح ويب حديث. باستخدام Webmin ، يمكنك تكوين نظام التشغيل الداخلي مثل حسابات المستخدمين ، و Apache ، و DNS ، ومشاركة الملفات ، وأكثر من ذلك بكثير. يسمح Webmin أيضًا بالتحكم في العديد من الآلات من خلال واجهة واحدة ، أو تسجيل دخول سلس على مضيفي Webmin الأخرى على نفس الشبكة الفرعية أو الشبكة المحلية. تعمل Webmin ، استنادًا إلى Perl ، كعملية خاصة بها وخادم الويب. وأفضل جزء في WebMin هو 100 ٪ خالية ومفتوحة المصدر ولديه مجتمع مطور مزدهر للغاية.

## ميزات مميزة {#features}

  * يسمح لك بإنشاء وتحرير المجالات وسجلات DNS وخيارات ربط ومسافات طرق العرض.
  * يساعد في تكوين جدار الحماية عن طريق إنشاء قواعد وتحريرها باستخدام IPFW.
  * دعنا نقلك إعداد البرامج النصية ليتم تشغيلها في وقت التمهيد من /etc/init.d أو /etc/rc.local
  * يمكنك جدولة نقل الملف من الخادم إلى خوادم متعددة
  * يتيح لك تثبيت حزم RPM و Debian و Solaris عبر خوادم متعددة من مصدر واحد
  * يوفر الوصول إلى تقارير مثل استخدام النطاق الترددي ، التحميلات ، التنزيلات ، الزوار ، إلخ.
  * يمكنك إنشاء وظائف cron مجدولة تعمل على خوادم متعددة في وقت واحد
  * يتيح لك تشغيل الأوامر على خوادم متعددة مرة واحدة
  * يسمح لك بإعداد وتحرير حصص قرص المستخدم أو المجموعة لأنظمة الملفات المحلية
  * يتضمن النسخ الاحتياطي واستعادة أنظمة الملفات باستخدام تفريغ واستعادة عائلة الأوامر
  * باستخدام مدير ملفات مشابه لنظام التشغيل Windows ، يمكنك عرض الأذونات وتحريرها وتغييرها على الملفات والأدلة على الخادم الخاص بك
  * يمكنك تكوين خادم بروتوكول موقع الخدمة
  * عرض الأذونات وتحريرها وتغييرها على الملفات والأدلة على نظامك مع مدير ملفات يشبه Windows
  * يساعد في إعداد أنفاق SSL لتشفير الخدمات مثل POP3 و IMAP ، وذلك باستخدام المذهل من Inetd.

## أنظمة التشغيل المدعومة {#support}

نظرًا لأن أنظمة التشغيل المختلفة التي تشبه UNIX وتوزيعات Linux تستخدم مواقع مختلفة لملفات التكوين المختلفة الخاصة بها ، يمكن أن تدعم Webmin أنظمة فقط التي تم تكوينها. يتم دعم أنظمة التشغيل التالية من خلال الإصدار 1.979 من Webmin:
  * Almalinux Linux
  * Alphacore Linux
  * أمازون لينكس
  * aplinux
  * Asianux
  * خادم Asianux
  * bigblock
  * BSDI
  * كايكسا ماجيكا
  * Caldera OpenLinux
  * Caldera Openlinux Eserver
  * Caos Linux
  * Cendio LBS Linux
  * Centos Linux
  * Citrix Hypervisor
  * Cloudlinux
  * Cloudrouter Linux
  * كوبالت لينكس
  * Linux التكنولوجيا المتماسكة
  * Conectiva Linux
  * Corel Linux
  * كورفوس لاتينيس
  * سيجوين
  * داروين
  * ديبيان لينكس
  * ديسمبر/compaq OSF/1
  * ديفوان لينكس
  * اليعسوب BSD
  * جدار الحماية الإنديان لينكس
  * فيدورا لينكس
  * FreeBsd
  * عام Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * لانثان لينكس
  * لينكس النعناع
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * ماكوس كاتالينا
  * ماكوس هاي سييرا
  * ماكوس موهافي
  * ماكوس سييرا
  * Mageia Linux
  * ماندريك لينكس
  * خادم شركة ماندريك لينكس
  * ماندريفا لينكس
  * خادم Mandriva Linux Enterprise
  * Mepis Linux
  * في الغالب
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBsd
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * يفتح نوم لينكس
  * Oracle Enterprise Linux
  * أوراكل لينكس
  * أوراكل VM
  * OS X.
  * باردوس لينكس
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * روكي لينكس
  * سانجوما لينكس
  * SCI Linux
  * Linux العلمي
  * SCO OpenServer
  * SCO Unixware
  * تأمين Linux
  * SGI IRIX
  * Slackware Linux
  * slamd64 Linux
  * Smartos
  * سول لينكس
  * Springdale Linux
  * Startcom Linux
  * نظام سطح المكتب Sun Java
  * صن سولاريس
  * suse Linux
  * suse openexchange linux
  * suse sles linux
  * Synology DSM
  * تاو لينكس
  * Tawie Server Linux
  * Thizlinux سطح المكتب
  * thizserver
  * Tinysofa Linux
  * ثقة
  * ثقة SE
  * turbolinux
  * Ubuntu Linux
  * يونايتد لينكس
  * Ute Linux
  * Virtuozzo Linux
  * LINEX WHITE DWARF
  * Whitebox Linux
  * Wind River Linux
  * شبابيك
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  * Yellow Dog Linux
  * يوبر لينكس
الأنظمة الأفضل دعمًا في الوقت الحالي هي Solaris و Linux (Redhat على وجه الخصوص) و FreeBSD.

## تثبيت Webmin على Ubuntu {#install}

لتثبيت Webmin ، ستحتاج إلى الوصول إلى مستخدم مع امتيازات **Root**. يوصى بإعداد مستخدم غير جذر مع**Sudo** Access.
أول ssh في الخادم الخاص بك باستخدام الأمر التالي
```
ssh user@server_IP_address
```
لتثبيت Webmin عبر _apt-get_ ، يجب أولاً إضافة مستودع Webmin إلى ملف _sources.list_. على الخادم الخاص بك ، افتح ملف _sources.list_ في محرر النص المفضل لديك. سوف نستخدم VIM في هذا البرنامج التعليمي:
```
sudo vi /etc/apt/sources.list
```
بمجرد فتح الملف ، أضف الأسطر التالية في نهاية الملف.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
أضف الآن مفتاح Webmin GPG إلى APT ، وبالتالي سيتم الوثوق بمستودع المصدر الذي أضفته. هذا الأمر سيفعل ذلك:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
قبل تثبيت Webmin ، يجب عليك تحديث قوائم حزمة APT-GET:
```
sudo apt-get update
```
قم الآن بتشغيل هذا الأمر APT-GET لتثبيت Webmin:
```
sudo apt-get install webmin 
```
أدخل Y لتأكيد التثبيت. بعد اكتمال التثبيت ، ستبدأ خدمة خدمة الويب تلقائيًا. وسيتم تشغيل واجهة الويب على المنفذ 10000. يمكنك الوصول إلى الواجهة باستخدام عنوان URL التالي.
```
https://server_IP_address:10000
```
سيُطلب منك تحذيرًا يقول إن شهادة SSL الخاصة بالخادم غير موثوق بها. وذلك لأن WebMin يقوم تلقائيًا بإنشاء وتثبيت شهادة SSL بعد التثبيت ، ولم يتم إصدار الشهادة من قبل سلطة شهادة يثق بها جهاز الكمبيوتر الخاص بك. لا بأس بالمتابعة. قم بتوجيه متصفح الويب الخاص بك للثقة في الشهادة.
في هذه المرحلة ، سترى شاشة تسجيل الدخول إلى Webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="تثبيت Webmin">}}

عندما تقوم بتسجيل الدخول لأول مرة في Webmin ، سيتم نقلك إلى صفحة **المعلومات** . يمنحك نظرة عامة على موارد نظامك وغيرها من المعلومات المتنوعة.

{{< figure align=center src="images/install-webmin-system-info.png" alt="تثبيت معلومات نظام Webmin">}}


## تثبيت Apache باستخدام Webmin {#install-apache}

يأتي Webmin مع مجموعة كبيرة ومتنوعة من الوحدات النمطية التي تدير حزم البرامج المختلفة. لتثبيت Apache باستخدام Webmin اتبع الإرشادات أدناه
**الخطوة 1 **: في قائمة التنقل ، انقر فوق** الوحدات غير المستخدمة**لتوسيع الفئة ، ثم انقر فوق** Apache WebServer**.
إذا لم يكن لديك Apache مثبتًا على الخادم الخاص بك ، فستقوم الوحدة بإعلامك وتوفر لك طريقة لتثبيت Apache.
**الخطوة 2**: استخدم** انقر هنا**رابط (في الجملة الأخيرة) لتثبيت Apache عبر APT-GET من خلال Webmin.
بعد اكتمال تثبيت Apache ، سيتم تشغيل الخادم الخاص بك خادم Apache الافتراضي.

## خاتمة {#conclusion}

تناقش هذه المقالة بإيجاز العديد من الأشياء التي يمكن أن تقوم بها Webmin ، تعد WebMin واحدة من أفضل الأدوات لإدارة خوادم Linux/UNIX. في هذا البرنامج التعليمي ، تعلمنا أيضًا كيفية تثبيت Webmin على Ubuntu ، كما ناقشنا كيفية تثبيت Apache على الخادم الخاص بك باستخدام Webmin.

## يستكشف
  * [كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu][7]
  * [كيفية إعداد وتكوين Nginx كوكيل عكسي][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
