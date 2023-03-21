---
title: "نحوه تنظیم شبکه blockchain quorum consensys به صورت محلی" 
seoTitle: "نحوه تنظیم شبکه blockchain quorum consensys به صورت محلی" 
description: "این راهنما را دنبال کنید تا در مورد فرآیند نصب Blockchain quorum Consensys quorum در LocalHost بیاموزید. Consensys Quorum blockchain مبتنی بر اتر منبع باز است." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "برای مدیریت و نظارت بر معاملات دیجیتال تجاری ، شبکه blockchain عمومی/خصوصی خود را ایجاد کنید. بیایید یاد بگیریم که چگونه Consensys Quorum را در LocalHost تنظیم کنیم." 
url: /fa/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## شبکه blockchain عمومی/خصوصی خود را برای مدیریت و نظارت بر معاملات دیجیتال تجاری ایجاد کنید. بیایید یاد بگیریم که چگونه Consensys Quorum را در LocalHost تنظیم کنیم.

{{< figure align=center src="images/quorum.png" alt="کوئور">}}


## بررسی اجمالی
در گذشته اخیر ، ما پست های وبلاگ را در برخی از مباحث مربوط به blockchain مانند [5 سیستم عامل برتر منبع باز در سال 2020][1] ، [یک راهنمای اساسی در مورد چگونگی ایجاد قرارداد هوشمند Ethereum][2] ، [2] ، [چگونه غیر متمرکز شده است. فناوری استراتژی کسب و کار شما را به روز می کند][3] ، و [راهنمای مبتدی برای تنظیم گره Ethereum در LocalHost][4]. در این مقاله خواهیم دید که چگونه می توان شبکه Blockchain Consensys Quorum را در LocalHost با پوشش دادن نکات زیر تنظیم کرد.
   **[مقدمه مختصری از Quorum Consensys][5]** 
  * **[پیش نیازها و روش نصب  **** ؟][6]**
  * **[چگونه شبکه را شروع کنیم؟][7]**
  * **[نتیجه گیری][8]**

##  **مقدمه مختصری از Quorum Consensys**    {#introduction
[Consensys Quorum][9] یک بستر منبع باز است که بر اساس **فناوری Ledger غیر متمرکز  **** . با این حال ، این محیط کاملاً سازگار با توسعه دهنده برای ساخت برنامه های مبتنی بر blockchain که معاملات سریع و با توان بالا را انجام می دهند ، فراهم می کند. این  **Ethereum **  مبتنی بر ، قابل گسترش است و بسیاری از افزونه ها را ارائه می دهد. علاوه بر این ، این سیستم توزیع شده منبع باز دارای استانداردهای امنیتی و حریم خصوصی بالایی است. علاوه بر این ، بسیاری از ویژگی های قدرتمند مانند API های اجازه و نظارت وجود دارد. علاوه بر این ، این پلت فرم ** DLT**  خود میزبان است و مستندات مفصلی در مورد توسعه و استقرار ارائه می دهد. کد منبع این نرم افزار رایگان در [GitHub][10] در دسترس است.
Consensys Quorum ویژگی های مهم زیر را ارائه می دهد:
  * معماری قابل انعطاف
  * مبتنی بر اتریوم
  * امن است
  * خودساختار
  * شبکه عمومی/خصوصی
[درباره quorum Consensys بیشتر بدانید][11]

## ** **روشهای پیش نیاز و نصب چیست؟** **   {#پیش نیازها
در این بخش ، وابستگی های لازم را نصب می کنیم و محیط محلی را تنظیم می کنیم. قبل از رفتن به مرحله بعدی اطمینان حاصل کنید که پیش نیازهای زیر را نصب کرده اید:
  * nodejs v10+
  * داکر
  * docker-compose
پس از نصب پیش نیازها ، دستور زیر را اجرا کنید تا ابزار QuickStart مبتنی بر CLI را شروع کنید.
```
npx quorum-dev-quickstart
```
با این حال ، برای تکمیل نصب همانطور که در تصویر زیر نشان داده شده است ، به سؤالات پاسخ دهید.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="کوئور">}}


## ** **چگونه شبکه را شروع کنیم؟** **   {#Start}
اکنون ، کد منبع را در جای خود داریم. بنابراین ، مرحله بعدی زندگی کردن شبکه است.
دستور زیر را اجرا کنید تا وارد فهرست root شوید.
```
cd quorum-test-network
```
پس از آن ، دستور زیر را اجرا کنید تا تمام ظروف Docker را شروع کنید:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="کوئور">}}

هنگامی که تمام ظروف Docker به پایان رسید و در حال اجرا هستند ، می توانید در آدرس زیر به Block Explorer دسترسی پیدا کنید:
```
http://localhost:25000
```
[] ()
علاوه بر این ، شما می توانید همانطور که در تصویر زیر نشان داده شده است با Block Explorer ارتباط برقرار کنید.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="سیستم توزیع شده منبع باز">}}

به همین ترتیب ، می توانید با اجرای دستور زیر کل شبکه را متوقف کنید:
```
./stop.sh 
```

## نتیجه گیری   {#conclusion}
این پایان این آموزش است. مهمتر از همه ، Quorum Consensys مبتنی بر اتریوم یک فناوری مالی دیجیتال** است که به ویژه برای موارد استفاده مالی تهیه شده است. این یک الگوریتم اجماع مبتنی بر رای گیری است. با این حال ، انگیزه اصلی این فناوری غیرمتمرکز ، ایجاد راه حل های کارآمد برای شرکت ها است.
سرانجام ، [Containerize.com][12] بسیاری از پست های وبلاگ فنی و آموزش های مربوط به محصولات منبع باز محبوب را در [blog.containerize.com][13] منتشر کرده است. بنابراین ، برای به روزرسانی های منظم ، به گروه [blockchain platforms][14] بچسبید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [Ethereum][15]
  * [پارچه Hyperledger][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [multichain][19]
  * [Consensys quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
