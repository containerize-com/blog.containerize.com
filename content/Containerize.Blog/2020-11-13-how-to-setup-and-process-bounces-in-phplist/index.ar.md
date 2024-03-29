---
title: "كيفية الإعداد والمعالجة يرتد في phplist" 
seoTitle: "كيفية الإعداد والمعالجة يرتد في phplist" 
description: "Phplist هي قائمة بريدية قوية مستضافة ذاتيا ومدير إخباري. إنها تساعد الشركات على إرسال حملات إخبارية وعملية ترتد بسهولة." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "أرسل الحملة مع النشرة الإخبارية المفتوحة المصدر وبرامج التسويق عبر البريد الإلكتروني. الإعداد إدارة ترتد في phplist وأتمتة معالجة الارتداد لقوائم بريدية صحية." 
url: /ar/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## إرسال حملة مع النشرة الإخبارية مفتوحة المصدر وبرامج التسويق عبر البريد الإلكتروني. الإعداد إدارة ترتد في phplist وأتمتة معالجة الارتداد لقوائم بريدية صحية.

{{< figure align=center src="images/phplist-2.png" alt="العملية ترتد phplist">}}

لقد كتبنا مقالات لتنفيذ [مستأجر متعدد][1] و [إرسال النشرة الإخبارية][2] في Phplist. في هذه المقالة ، سوف نغطي هذه النقاط بالتفصيل حول ترتد العملية في Phplist.
  * [ما هو phplist؟][3]
  * [ما هو الارتداد؟][4]
  * [إدارة ترتد الإعداد][5]
  * [كيف ترتد؟][6]
  * [الخلاصة][7]

## ما هو phplist؟ {#phplist}

Phplist هي الأكثر شعبية النشرة الإخبارية المجانية والمفتوحة المصدر إرسال البرمجيات. يمكّن PhPlist الشركات لإرسال رسائل البريد الإلكتروني التسويقية وتحديثات المنتج والإعلانات للمشتركين. يساعد الشركات على إدارة القائمة ، وتصميم النشرة الإخبارية الجميلة ، وحملة الجدول الزمني ، وإدارة الارتداد. [اقرأ المزيد][8]

## ما هو الارتداد؟ {#bounce}

الارتداد هو رسالة بريد إلكتروني لا يمكن تسليمها بسبب عدد الأسباب والعودة إلى المرسل. قد يكون لدينا أسباب مثل صندوق البريد ممتلئ ، ولم يعد عنوان البريد الإلكتروني صالحًا أو غير صحيح. ولهذا السبب ، يجب أن تقوم بمعالجة الارتداد حتى لا ترسل رسائل بريد إلكتروني إلى عناوين بريد إلكتروني غير صالحة.

## الإعداد إدارة الارتداد {#setup}

من أجل إعداد إدارة ترتد ، تحتاج إلى تكوين الإعدادات التالية في ملف config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - إدارة معالجة الارتداد">}}

سنشرح في خطوات أدناه أكثر حول هذه التكوينات.
  * أولاً ، تحتاج إلى إضافة عنوان بريد إلكتروني حيث تريد تلقي رسائل ترتد. يمكنك العثور على **message_envelope** متغير وإضافة عنوان بريدك الإلكتروني.
* يمكن لـ Phplist جلب رسائل البريد الإلكتروني من صندوق بريد الارتداد عبر بروتوكولين ، **Mbox و Pop3**. لذلك ، ابحث عن**Bounce_protocol** المتغير وقم بتغييره وفقًا لبيئتك.
* إذا قمت بتعيين **Mbox**PrototCol ، فأنت بحاجة إلى تحديد تنسيق الملف لذلك. لذلك ، ابحث عن**Bounce_Mailbox** وضبط المسار مثل "/var/spool/mail/listbounces '.
* في حال كنت قد استخدمت **POP3**بروتوكول ، تحتاج إلى تكوين المضيف**، اسم المستخدم ، كلمة المرور** لمربع البريد. يمكنك رؤية هذه الإعداد في Sreenshot أعلاه.
* بالإضافة إلى الإعدادات أعلاه لبروتوكول **pop3** ، قد تحتاج إلى إضافة المنفذ والتشفير.

## كيفية معالجة الارتداد؟ {#process}

يدعم Phplist طريقتين لترتد العملية: يدوي وآلي. سيكون عليك إنشاء وظيفة cron لأتمتة معالجة الارتداد. يمكنك أيضًا معالجة الارتداد يدويًا عن طريق زيارة **نظام> ترتد العملية**. لذلك ، تحتاج أولاً إلى تغيير**يدويًا \ _process \ _bounces** إعدادات وفقًا لمتطلباتك. يمكنك زيارة [مستندات phplist][9] لإعداد وظيفة cron لترتد العملية.

## خاتمة {#conclusion}

في هذا المنشور ، تعلمنا كيفية تكوين عنوان البريد الإلكتروني المرتفع وترتد العملية. يمكنك بسهولة معالجة الارتداد بالطريقة اليدوية ، إذا كان لديك عدد أقل من المشتركين. ومع ذلك ، يجب استخدام عملية معالجة الارتداد الأتمتة لقوائم كبيرة. سيوفر وقتك ويساعدك على إنشاء قوائم مشترك نظيفة وصالحة.



[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
