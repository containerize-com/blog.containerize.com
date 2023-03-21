---
title: "نحوه ایجاد و اجرای یک ربات در Rocket.Chat با استفاده از Botpress" 
seoTitle: "نحوه ایجاد و اجرای یک ربات در Rocket.Chat با استفاده از Botpress" 
description: "این راهنما مراحل ساده و آسان را به شما می آموزد که نحوه ایجاد ربات با استفاده از Botpress و ادغام آن با Rocket.Chat است." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "در این آموزش ، ما شما را در مورد چگونگی ایجاد ربات با استفاده از Botpress راهنمایی خواهیم کرد و این با Rocket.Chat ادغام است." 
url: /fa/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## در این آموزش ، ما شما را در مورد چگونگی ایجاد ربات با استفاده از Botpress راهنمایی خواهیم کرد و این یکپارچه سازی با Rocket.Chat است

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="نحوه ایجاد و اجرای یک ربات در Rocket.Chat با استفاده از Botpress">}}

chatbot یک برنامه رایانه ای است که برای شبیه سازی مکالمه انسانی طراحی شده است. احتمالاً در فیس بوک مسنجر ، یک وب سایت خرده فروشی با یکی از آنها روبرو شده اید. از نظر فنی ، رباتها برنامه های خودکار هستند که برای انجام یک کار خاص طراحی شده اند.
Rocket.Chat ادغام اتوماسیون Chatbot و پیام رسانی را تشویق می کند. بنابراین ، مستندات کاملی برای هدایت شما در فرآیند ساخت ربات دارد.
در این مقاله ، ما شما را از طریق نحوه ایجاد ربات با استفاده از Botpress راهنمایی خواهیم کرد. و نحوه پیکربندی Rocket.Chat با Botpress.
  * [Rocket.Chat][1]
  * [botpress][2]
  * [ایجاد یک کاربر ربات در Rocket.Chat][3]
  * [ربات خود را با استفاده از Botpress][4]
  * [نتیجه گیری][5]

## # ROCKET.CHAT   {#ROCOCTETCHAT}
Rocket.Chat یکی از نرم افزارهای محبوب چت زنده است که تا حدودی یک پروژه چت زنده منبع باز است. این یک نسخه گپ زنده رایگان به عنوان یک نسخه جامعه است. و همچنین ، یک نسخه چت زنده میزبان پرداخت شده برای شرکت های بزرگ با ویژگی های چت داخلی خصوصی. این برنامه چت زنده در مرورگر اجرا می شود اما می تواند بر روی سرور شخصی شما نیز نصب شود. [بیشتر بخوانید][6]

## # botpress   {#botpress}
Chatbots مکالمه این امکان را برای مشاغل فراهم کرده است تا بتوانند به مشتریان خود همیشه پشتیبانی بالایی را که می خواهند در دسترس داشته باشند. Botpress یکی از محبوب ترین ابزار ایجاد ربات منبع باز با پردازش زبان طبیعی داخلی است. فناوری NLU Botpress آن را گامی جلوتر از رقبای خود در این زمینه مانند BOTKIT ، DIALOGFLOW و Microsoft Bot Framework می کند. [بیشتر بخوانید][7]

## # ایجاد یک کاربر ربات در Rocket.chat   {#CreateBotuser
برای صحبت با Chatbot خود باید یک حساب کاربری از پیش تنظیم شده در سرور موشک وجود داشته باشد.
برای ایجاد حساب باید امتیازات مدیر را داشته باشید:
  1. در Topbar ، روی سه نقطه (گزینه ها) کلیک کنید و سپس روی**مدیریت**کلیک کنید
  2.**کاربران**را از نوار کناری سمت چپ انتخاب کنید
  3. روی دکمه `+` (اضافه کردن کاربر) در نوار کناری سمت راست کلیک کنید
  4. در پنجره نمایه که ظاهر می شود ، _name_ ، _username_ ، _email_ و _password_ را پر کنید
  5. _Verified_ را در زیر قسمت _email_ فعال کنید
  6. غیرفعال کردن رمز عبور _Require تغییر_ ضامن زیر قسمت _Password_
  7. `bot` را از منوی کشویی` Add Mare` انتخاب کرده و روی دکمه _ADD نقش_ در سمت راست کلیک کنید
  8. غیرفعال کردن کانال های پیش فرض _join and _send خوش آمدید ایمیل_ کادر انتخاب
  9. روی _save_ کلیک کنید
پس از ذخیره ، ربات با نام کاربری و رمز عبور تنظیم شده در مرحله 4 پیکربندی می شود. می توانید از متغیرهای محیطی "Rocketchat \ _user" و "Rocketchat \ _password" استفاده کنید تا با این نام کاربری و رمز عبور به سرور موشک وارد شوید.

## # ربات خود را با استفاده از Botpress   {#codebot} کد کنید
Botpress یک بسته Node.js است و با گره و NPM کار می کند.
سریعترین راه برای شروع با Botpress استفاده از مخزن [Botpress-kick-starter][8] است که از قبل با موشک یکپارچه شده است. Chat از طریق [کانکتور کانال Botpress][9].
به پوشه ای که می خواهید با ربات کار کنید بروید و مراحل زیر را ادامه دهید:
* * بسته Botpress را نصب کنید**
```
npm init -y
npm install botpress@10.40.0
```
* * ایجاد یک ربات**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
دستور "Botpress Init" جادوگری را راه اندازی می کند که به شما در ایجاد پیکربندی اولیه کمک می کند. شما باید چیزی را به شرح زیر ببینید:
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
* * نصب Botpress Connector و BOT وابستگان**
```
npm install
npm install botpress-channel-rocketchat
```
ربات را پیکربندی کنید
پوشه "پیکربندی" را باز کنید و پرونده "کانال-rocketchat.json" را با محتوای زیر ایجاد کنید:
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
* * ربات را اجرا کنید**
```
npm start
```
* * با ربات خود صحبت کنید**
در سرور ، به عنوان یک کاربر معمولی وارد شوید (نه کاربر ربات) ، به اتاق عمومی بروید و با ربات تازه ایجاد شده خود صحبت کنید.

## # نتیجه گیری   {#conclusion}
در این مقاله ، ما یاد گرفته ایم که چگونه یک ربات در Botpress ایجاد کنیم. و نحوه پیکربندی آن با Rocket.Chat. Botpress ساخت گردش کار خودکار نوآورانه را برای کاربران بسیار آسان می کند. و ادغام با Rocket.Chat به شما امکان می دهد تا آنها را به صورت مکالمه کنترل کنید.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
