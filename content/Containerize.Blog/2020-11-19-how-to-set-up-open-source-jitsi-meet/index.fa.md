---
title: "یک راهنمای گام به گام برای تنظیم منبع باز Jitsi Meet" 
seoTitle: "یک راهنمای گام به گام برای تنظیم منبع باز Jitsi Meet" 
description: "بیاموزید که چگونه Jitsi Meet را تنظیم کنید. این یک نرم افزار کنفرانس ویدیویی با منبع باز است که برای تأمین نیازهای ارتباطی از راه دور طراحی شده و ویژگی های قدرتمندی را ارائه می دهد" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet افراد از راه دور را برای برگزاری جلسات مؤثر جمع می کند. بیایید یاد بگیریم که چگونه این نرم افزار کنفرانس ویدیویی را تنظیم کنیم و ویژگی های آن را کشف کنیم" 
url: /fa/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet افراد از راه دور را برای برگزاری جلسات مؤثر جمع می کند. بیایید یاد بگیریم که چگونه این نرم افزار کنفرانس ویدیویی را تنظیم کنیم و ویژگی های آن را کشف کنیم

{{< figure align=center src="images/jitsi-bannerF.png" alt="نرم افزار کنفرانس ویدیویی">}}


## بررسی اجمالی
ما به تازگی [پست وبلاگ][1] منتشر کرده ایم که در مورد تأثیر [نرم افزار کنفرانس ویدیویی][2] در بخش شرکت صحبت می کند. با این حال ، در این مقاله نکات زیر را پوشش خواهیم داد.
  * [معرفی مختصر از Jitsi Meet][3]
  * [چگونه Jitsi Meet را تنظیم کنیم؟][4]
  * [Jitsi ملاقات با ویژگی های اکتشافی][5]
  * [نتیجه گیری][6]

## معرفی مختصر از Jitsi Meet   {#intro}
[Jitsi Meet][7] یک منبع باز کاملاً رایگان ، نرم افزار همکاری ویدیویی ایمن و مقیاس پذیر است. این چندین ویژگی محبوب مانند کنفرانس ویدیویی چند منظوره با رمزگذاری کامل ، پشتیبانی از EtherPad و ضبط ویدیو/صوتی را ارائه می دهد. این نرم افزار سازگار با WEBRTC به شما امکان می دهد تا به همان اندازه کاربران را که می خواهید در یک جلسه ویدیویی دعوت کنید.
ظهور جلسات مجازی در زمان های اخیر آغاز شد و مردم معتقدند که ارتباطات از طریق تماس های ویدئویی/صوتی مؤثرتر و مشارکتی است. مهمتر از همه ، این دسته از نرم افزارها نه تنها روی لپ تاپ/دسک تاپ کار می کنند بلکه شرکت کنندگان را نیز قادر می سازد تا از طریق تلفن همراه خود در جلسات ویدیویی ایمن در چهره شرکت کنند.

## چگونه Jitsi Meet را تنظیم کنیم؟   {#برپایی}
در این بخش ، ما وارد فرآیند نصب Jitsi Meet خواهیم شد. ابتدا اطمینان حاصل کنید که پیش نیازهای زیر را نصب کرده اید.
  * [Docker][8]
پس از نصب Docker ، پرونده ZIP کد منبع را از این [پیوند][9] بارگیری کنید.
ترمینال را باز کنید و دستور زیر را اجرا کنید
`CD Docker-Jitsi-Meet`
پس از آن ، دستور زیر را اجرا کنید تا یک ".env" ایجاد کنید
`cp env.example .env`
اکنون دستور زیر را برای ایجاد دایرکتوری های مورد نیاز اجرا کنید.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt ، رونوشت ، prosody/config ، prosody/prosody-plugins-custom ، jicofo ، jvb ، jigasi ، jibri}` `
سرانجام ، این دستور را اجرا کنید تا تصویر Docker را بچرخانید و به برنامه در این URL در مرورگر دسترسی پیدا کنید.
`docker -compose up -d`

## jitsi ملاقات با ویژگی های اکتشاف   {#features}
این نرم افزار چت ویدیویی رایگان بسیاری از ویژگی های غنی را ارائه می دهد. این صفحه اصلی است که ابتدا نشان داده می شود.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="کنفرانس ویدیویی">}}

عنوان جلسه را تایپ کرده و به "GO" ضربه بزنید و به پنجره جریان ویدیوی زیر می روید.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="نرم افزار منبع باز">}}

می توانید با به اشتراک گذاشتن پیوند نشان داده شده در پنجره پنجره ، افراد را به جلسه دعوت کنید. علاوه بر این ، می توانید با دریافت کد ، جریان ویدیو را در هر نقطه تعبیه کنید.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="نرم افزار منبع باز">}}

این گزینه به شما امکان می دهد صفحه خود را با سایر شرکت کنندگان به اشتراک بگذارید.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="گپ ویدیویی">}}

از گوشه بالا سمت راست ، می توانید جزئیات اتصال ویدیویی خود را مشاهده کنید.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="گپ ویدیویی رایگان">}}

Jitsi Meet چت یکپارچه با ایموجی ها را ارائه می دهد.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="نرم افزار جلسه ویدیویی">}}


## نتیجه گیری   {#con}
در این مقاله ، ما یک نرم افزار ارتباطی از راه دور خیره کننده و فرآیند نصب آن را طی کردیم. علاوه بر این ، زمان آن رسیده است که بهترین راه حل ها را برای همگام سازی نیازهای تجاری با فناوری های در حال تحول انتخاب کنیم. در پایان ، [Containerize.com][10] در تلاش است تا لیست نرم افزارهای کنفرانس ویدیویی را گسترش دهد. بنابراین ، لطفاً برای به روزرسانی های منظم با [نرم افزار کنفرانس ویدیویی][2] در ارتباط باشید.

## صفحات محصول مربوطه
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [جیتسی ملاقات][7]
  * [bigbluebutton][11]
  * [OpenVidu][12]
  * [عنصر][13]
  * [سیم][14]

  
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
