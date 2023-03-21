---
title: "كيفية إنشاء وتشغيل روبوت في Rocket.Chat باستخدام botpress" 
seoTitle: "كيفية إنشاء وتشغيل روبوت في Rocket.Chat باستخدام botpress" 
description: "يعلمك هذا الدليل بخطوات بسيطة وسهلة كيفية إنشاء BOT باستخدام botpress وتكامله مع Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "في هذا البرنامج التعليمي ، سنرشدك حول كيفية إنشاء روبوت باستخدام botpress وتكامله مع Rocket.Chat" 
url: /ar/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## في هذا البرنامج التعليمي ، سنوجهك حول كيفية إنشاء روبوت باستخدام botpress وتكامله مع Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="كيفية إنشاء وتشغيل روبوت في Rocket.Chat باستخدام botpress">}}

chatbot هو برنامج كمبيوتر مصمم لمحاكاة المحادثة البشرية. من المحتمل أن تكون قد واجهت واحدة على موقع Facebook Messenger ، وهو موقع ويب للبيع بالتجزئة. من الناحية الفنية ، فإن الروبوتات هي برامج آلية مصممة لأداء مهمة محددة.
يشجع Rocket.Chat تكاملات أتمتة chatbot وأتمتة المراسلة. لذلك ، لديه وثائق شاملة لإرشادك من خلال عملية صنع الروبوت.
في هذه المقالة ، سنرشدك من خلال إنشاء روبوت باستخدام botpress. وكيفية تكوين Rocket.Chat مع botpress.
  * [Rocket.Chat][1]
  * [botpress][2]
  * [إنشاء مستخدم روبوت في Rocket.Chat][3]
  * [رمز الروبوت الخاص بك باستخدام botpress][4]
  * [الخلاصة][5]

### Rocket.Chat   {#Rocketchat}
Rocket.Chat هو من بين برنامج الدردشة الحية الشهيرة جزئياً مشروع دردشة مباشر مفتوح المصدر. لديها نسخة دردشة مباشرة مجانية كإصدار مجتمعي. بالإضافة إلى إصدار دردشة مباشرة مدفوعة الأجر للشركات الكبيرة ذات ميزات الدردشة الداخلية الخاصة. يعمل تطبيق الدردشة المباشرة هذا في المتصفح ولكن يمكن تثبيته على الخادم الخاص بك أيضًا. [اقرأ المزيد][6]

### botpress   {#botpress}
جعلت محادثة chatbots هذا ممكنًا للشركات لمنح عملائها دعمًا كبيرًا لللمس المتاحون دائمًا. تعد Botpress واحدة من أكثر أدوات إنشاء الروبوت المفتوحة شعبية مع معالجة اللغة الطبيعية المدمجة. تجعل تقنية NLU من Botpress خطوة إلى الأمام على منافسيها في هذا المجال مثل Botkit و DialogFlow و Microsoft Bot Framework. [اقرأ المزيد][7]

### قم بإنشاء مستخدم روبوت في Rocket.Chat   {#CreateBotuser}
من أجل التحدث إلى chatbot ، يجب أن يكون هناك حساب مستخدم تم تكوينه مسبقًا على Rocket.Chat Server الذي يمكن لـ BOT تسجيل الدخول إليه.
لإنشاء الحساب الذي تحتاج إلى امتيازات المسؤول:
  1. في Topbar ، انقر فوق النقاط الثلاثة (الخيارات) ثم انقر فوق**الإدارة**
  2. حدد**المستخدمين**من الشريط الجانبي الأيسر
  3. انقر فوق الزر "+` (إضافة مستخدم) في الشريط الجانبي الأيمن
  4. في نافذة الملف الشخصي الذي يظهر ، املأ _name_ و _username_ و _email_ و _password_ الحقول
  5. تمكين _verified_ التبديل تحت حقل _email_
  6. تعطيل _Require Password Change_ التبديل ضمن حقل _password_
  7. حدد "بوت" من قائمة "إضافة دور" المنسد
  8. تعطيل _join القنوات الافتراضية _ و _send ترحيب البريد الإلكتروني_ مربعات الاختيار
  9. انقر فوق _save_
بمجرد حفظها ، سيتم تكوين الروبوت باستخدام اسم المستخدم وكلمة المرور المحددة في الخطوة 4. يمكنك استخدام متغيرات "Rocketchat \ _User" و "Rocketchat \ _password" لتسجيل الدخول إلى Rocket.Chat Server مع زوج المستخدم وكلمة المرور هذا.

### رمز الروبوت الخاص بك باستخدام botpress   {#codebot}
Botpress هي حزمة Node.js وتعمل مع Node و NPM.
إن أسرع طريقة للبدء بـ Botpress هي استخدام مستودع [Botpress-Kick-Starter][8] المدمج بالفعل مع Rocket.Chat عبر [موصل القناة البوتس][9].
انتقل إلى المجلد حيث تريد العمل مع الروبوت والمضي قدمًا في الخطوات التالية:
* * تثبيت حزمة botpress**
```
npm init -y
npm install botpress@10.40.0
```
* * إنشاء روبوت**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
يقوم الأمر "Botpress init" بتشغيل معالج سيساعدك على إنشاء التكوين الأولي. يجب أن ترى شيئًا على النحو التالي:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
* * تثبيت موصل botpress وتبعيات الروبوت****
```
npm install
npm install botpress-channel-rocketchat
```
تكوين الروبوت
افتح مجلد "config" وإنشاء ملف "channel-rocketchat.json" مع المحتوى التالي:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
* * قم بتشغيل الروبوت**
```
npm start
```
* * تحدث إلى روبتك**
على الخادم ، قم بتسجيل الدخول كمستخدم منتظم (وليس مستخدم BOT) ، انتقل إلى General Room ، وتحدث إلى الروبوت الذي تم إنشاؤه حديثًا.

### الاستنتاج   {#Conclusion}
في هذه المقالة ، تعلمنا كيفية إنشاء bot في botpress. وكيفية تكوينه باستخدام Rocket.Chat. يجعل Botpress من السهل جدًا على المستخدمين إنشاء مهام سير عمل آلية مبتكرة. والتكامل مع Rocket.Chat يسمح لك بالسيطرة عليها بطريقة محادثة.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
