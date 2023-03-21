---
title: "إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows '" 
seoTitle: "إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows" 
description: "Keepass هو مدير كلمة المرور الشائعة والآمنة والمجانية والمفتوحة. سيساعد هذا الدليل مستخدمي Windows في إعداد وإدارة كلمات المرور باستخدام KeepAss." 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass هو مدير كلمة المرور الشائعة والآمنة والمجانية والمفتوحة. سيساعد هذا الدليل مستخدمي Windows في إعداد وإدارة كلمات المرور باستخدام KeepAss." 
url: /ar/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepass هو مدير كلمة المرور الشائعة والآمنة والمجانية والمصدر. سيساعد هذا الدليل مستخدمي Windows في إعداد وإدارة كلمات المرور باستخدام KeepAss.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}


## نظرة عامة   {#overview}
إن تذكر جميع مجموعات كلمة المرور المختلفة لمواقع الويب والتطبيقات المختلفة ليست مهمة سهلة ، وبينما يمكن أن تبدو كتابتها على قطعة من الورق بمثابة حل سهل. لا يوجد الكثير من الأمان في هذه الطريقة ، حيث يمكنك أن تفقده بسهولة أو يمكن أن تقع في أيدي الشخص الخطأ.  **Keepass Password Manager**  لنظام التشغيل Windows هو أحد الحلول لهذه المشكلات.
من ناحية أخرى ، يسهل على المستخدمين تخزين جميع كلمات المرور الخاصة بهم في مكان واحد والوصول إليها كلما احتاجوا إليها. KeepAss هو  **أحد أفضل مديري كلمة المرور مفتوح المصدر**  هناك ، وهذا ليس فقط مجانيًا للتنزيل ، ولكن أيضًا محمولًا وكذلك يمكنك تخزين ملف كلمة المرور على USB أو تحميله إلى Dropbox أو Google Drive خيار التخزين السحابي. مع تشفير نهاية إلى نهاية ، يمكن لمالك كلمات المرور فقط الوصول إلى ملف كلمة المرور باستخدام المفتاح الرئيسي ، الذي يضمن الأمان. نظرًا لأن مدير كلمة المرور المفتوح المصدر ، يتيح Keepass للمستخدمين مع المعرفة التقنية أيضًا فحص الكود المصدري بأنفسهم لضمان عدم وجود ميزات أمان مفقودة.
  * [Setup Keepass on Windows][1]
  * [إدارة كلمات المرور باستخدام Keepass][2]
  * [الخلاصة][3]

## Setup Keepass على Windows   {#setup}
**تحميل ملف التثبيت**
قبل تثبيت برنامج KeepAss ، تأكد من أنك تستخدم Windows 7 أو 8 أو 10 ، ولديك أحدث إصدار من Keepass Password Manager. يمكنك تنزيل برنامج Windows Installer بالانتقال والنقر فوق  **Keepass 2.47**  لنظام التشغيل Windows.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="قم بإعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

بعد اكتمال التنزيل ، قم بتشغيل المثبت وسيتم مطالبتك بتمكين أو تعطيل الشيكات التلقائية للحصول على آخر تحديثات KeepAss Manager. هذا لا يعني أنه سيقوم تلقائيًا بتنزيل أو تثبيت أحدث الإصدارات دون إذن. تم ترخيص برنامج Server Open Server Open Server بموجب GNU GPL. بعد التثبيت ، سترى الآن نافذة فارغة على النحو التالي:

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="قم بإعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

**إنشاء قاعدة بيانات جديدة**
الآن سنبدأ في إنشاء قاعدة بيانات لتخزين كلمات المرور الخاصة بك ، وهنا الخطوات. انقر على ملف ****. حدد  **جديد **  من خلاله سيتم إنشاء قاعدة بيانات. سترى موجه أدناه. انقر فوق ** حسنًا.** 

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="قم بإعداد وإدارة Keepass Password Manager لنظام التشغيل Windows Open New DB">}}

سيُطلب منك هنا حفظ**. تأكد من حفظه في نفس المجلد حيث يوجد Keepass for Teams على جهاز الكمبيوتر الخاص بك.

## إدارة كلمات المرور باستخدام Keepass   {#Manage}
**إنشاء كلمة مرور رئيسية**
الآن سيتعين عليك إنشاء مفتاح رئيسي سيكون كلمة المرور التي يمكنك من خلالها الوصول إلى ملف .kdbx. تأكد من أن كلمة المرور تحتوي على مزيج من الأحرف الكبيرة ، والأحربات الصغيرة ، والأحرف الخاصة ، والأرقام ، وما إلى ذلك. إن إنشاء مفتاح رئيسي قوي لا يمكن الوصول إليه أمرًا مهمًا للغاية لأنه سيحدد أمان قاعدة بيانات كلمة المرور الخاصة بك. سيقدم Manager Free Password Manager أيضًا مؤشرًا على مدى قوة مفتاحك الرئيسي أو الضعيف.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="قم بإعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

**احفظ كلمات المرور الخاصة بك**
بعد إنشاء مفتاح رئيسي ، سيتم فتح قاعدة البيانات حيث يمكنك البدء في حفظ كلمات المرور. يوفر Keepass إدخالات كلمة مرور كإعداد افتراضي ، يمكنك حذفها والبدء في إضافة خاص بك.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

لإنشاء إدخال جديد ، انقر فوق أيقونة المفتاح الأصفر لإنشاء إدخال كلمة مرور جديدة. سيتم فتح شاشة جديدة حيث سيُطلب منك إدخال كلمة المرور الخاصة بك ، وتكرارها ، وتوفير عنوان URL الذي سيتم استخدام كلمة المرور هذه واسم المستخدم والمزيد. أثناء إدخال كلمة المرور ، سيتم إخفاؤها بواسطة النقاط ، ويمكن الكشف عنها من خلال النقر على أيقونة  **Three Dots**  على اليمين.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

**تسجيل الدخول باستخدام Keepass**
لتسجيل الدخول باستخدام كلمات المرور المحفوظة في قاعدة البيانات:
  *انقر بزر الماوس الأيمن على إدخال كلمة المرور وحدد  **copy username**  قم الآن بصق اسم المستخدم هذا في حقل موقع المستخدم.
  *الآن انقر بزر الماوس الأيمن على نفس الإدخال في Keepass Password Manager ، وحدد  **Copy Password**  ولصقه مرة أخرى في موقع الويب حيث يوجد حقل كلمة المرور.
  * يرجى ملاحظة أنه يجب أن تكون سريعًا مع نسخك ولصقه ، حيث تتم إزالة كلمة المرور من الحافظة الخاصة بك بواسطة Keepass بعد 12 ثانية. يمكن تغيير القيد في هذه المرة من خلال Keepass Password Safe Manager.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows">}}

**خيارات مدير كلمة المرور الأخرى للنظر في:**
هناك العشرات من مديري كلمة المرور المفتوحة المصدر الآخرين المتاحة في السوق. يمكنك الحفاظ على آمنة بيانات اعتماد حساباتك من خلال استخدام مديري كلمة المرور الآمنة والشعبية والمستضافة ذاتيا ومفتوح المصدر لتخزين كلمات مرور فريدة ومعقدة. فيما يلي مدراء عدد قليل من مديري كلمة المرور:
  *[ **Padloc** ][4] تم تصميمه على أنه مدير كلمات مرور بسيط وآمن وإدارة البيانات للعائلات والفرق.
  *[ **passbolt** ][5] عبارة عن مدير كلمة المرور سهلة الاستضافة سهلة الاستضافة مصممة لاحتياجات فرق Agile و DevOps.
  *[ **كلمة مرور آمنة** ][6] هو برنامج مدير كلمة المرور مفتوح المصدر مع واجهة آمنة وبسيطة وسهلة الفهم.
  *[ **Bitwarden** ][7] هو حل آمن ومجاني للتنزيل ومفتوح المصدر المتكامل لإدارة كلمة المرور.
  *[ **PSONO** ][8] هو بيانات اعتماد مستضافة ذاتيا ومدير كلمة المرور للفرق. ويوفر تشفير متعدد الطبقات لتحقيق أقصى قدر من الأمان.

## الخاتمة   {#conclusion}
Keepass هي طريقة سهلة وآمنة ومحمولة لإدارة كلمات المرور الخاصة بك. يتيح لك تخصيص كلمات المرور الخاصة بك ، وإنشاء مجموعات آمنة ، وحفظ إدخالات كلمة مرور متعددة لمواقع الويب المختلفة مع اسم المستخدم. يعد استخدام Best Password Manager Keepass آمنًا أيضًا لأنه يستخدم آلية التشفير النهائية إلى النهاية ويعتمد على وظيفة التجزئة SH-256 لتحقيق أقصى قدر من الأمان.
علاوة على ذلك ، [**Containerize.com **][9] في الطريق لتحسين كومة المنتجات مفتوحة المصدر بلغات وأطر متعددة. للحصول على تحديثات منتظمة ، يرجى ترقبنا على ** [إدارة كلمة المرور][10]**  فئة لمقالات أكثر إثارة للاهتمام.

## يستكشف
ناقشنا في هذه المقالة كيفية إعداد وإدارة Keepass Password Manager لنظام التشغيل Windows. قد تجد الروابط التالية ذات الصلة:
  * **[أفضل 5 مديري كلمة مرور مفتوحة المصدر في 2021][11]**
  * **[أفضل برامج إدارة كلمة مرور مفتوحة المصدر][12]**
  * **[Keepass | مدير كلمة المرور الآمنة والمحمولة والمفتوحة المصدر][13]**

  
[1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
[2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
[3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
[4]: https://padloc.app/
[5]: https://products.containerize.com/password-management/passbolt/
[6]: https://products.containerize.com/password-management/password-safe/
[7]: https://products.containerize.com/password-management/bitwarden/
[8]: https://products.containerize.com/password-management/psono/
[9]: https://www.containerize.com/
[10]: https://blog.containerize.com/category/password-management/
[11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
[12]: https://products.containerize.com/password-management/
[13]: https://products.containerize.com/password-management/keepass
