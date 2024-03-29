---
title: "TestNet چیست و چگونه می توان آن را مستقر کرد | Ethereum testnet '" 
seoTitle: "TestNet چیست و چگونه می توان آن را مستقر کرد | Ethereum testnet" 
description: "testnet چیست؟ این راهنما در مورد نحوه تنظیم گره Ethereum در LocalHost است. blockchain شبکه ای از گره ها است که سابقه کلیه معاملات را حفظ می کند." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum یک شبکه بازرگانی با منبع باز از گره های متصل است. بیایید یاد بگیریم که چگونه با گره Ethereum در یک سرور محلی مستقر و تعامل برقرار کنیم." 
url: /fa/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum یک شبکه بازرگانی با منبع باز از گره های متصل است. بیایید یاد بگیریم که چگونه با گره Ethereum در یک سرور محلی مستقر و تعامل برقرار کنیم.

{{< figure align=center src="images/ether.png" alt="testnet چیست">}}

در پست های قبلی وبلاگ ما ، ما در مورد موضوعات مختلفی نوشتیم که شامل [فناوری blockchain برای تجارت][1] ، [نوشتن یک قرارداد هوشمند اساسی][2] و [سیستم عامل های محبوب blockchain][3] است. مباحث دیگری وجود دارد که ما در آینده نزدیک خواهیم نوشت زیرا  **فناوری Ledger غیر متمرکز**  با گذشت زمان سرعت می یابد. اکنون مردم به دلیل امنیت و شفافیت ، به سیستم عامل های مدیریت دارایی دیجیتال توجه می کنند. علاوه بر این ، معاملات دیجیتالی قابل ردیابی است ، تغییر ناپذیر و چنین عواملی در مورد قابلیت اطمینان این فناوری به مردم اعتماد به نفس می بخشد. سه نوع از blockchain عمومی ، خصوصی و مجاز وجود دارد. با این حال ، کاربران بسته به مورد استفاده از آنها می توانند هر نوع را اتخاذ کنند.
ظهور این فناوری باعث تغییر عظیمی در بخش بانکی شده است زیرا روش معاملات مالی را تغییر داده است. در این پست وبلاگ ، ما در مورد Ethereum blockchain در مورد راه اندازی گره Ethereum در LocalHost صحبت خواهیم کرد و خواهیم دید که چگونه با شبکه آزمایش ارتباط برقرار کنیم. ما نکات کلیدی زیر را پوشش خواهیم داد.
*  **testnet چیست؟**  
*  **[چگونه می توان blockchain Ethereum را تنظیم کرد؟][4]**  
*  **[چگونه با blockchain ethereum ارتباط برقرار کنیم؟][5]**  
*  **[نتیجه گیری][6]**  

## testnet چیست؟ {#tetstnet}

در این پست وبلاگ ، ما قصد داریم یک گره اتریوم را در LocalHost مستقر کنیم. Ethereum دارای چندین شبکه است ، شبکه تولید به آن MainNet گفته می شود و شبکه ای که برای اهداف آزمایش استفاده می شود ، TestNet نامیده می شود. بیشتر برنامه های غیر متمرکز بر اساس [Ethereum][7] blockchain است. قرارداد هوشمند یک مؤلفه جدایی ناپذیر از این زیرساخت های توزیع شده است. علاوه بر این ، blockchain شبکه ای از رایانه ها به نام "گره" است. با این حال ، هر گره حاوی یک کپی از blockchain است و بنابراین در شبکه شرکت می کند. Ethereum Blockchain همچنین رمزنگاری خود را به نام "اتر" دارد. تمام معاملات به صورت رمزنگاری تضمین می شوند. علاوه بر این ، این یک فناوری لجر کامل است که هرگز خاموش نمی شود یا خراب نمی شود. این امکان را به شما می دهد تا قراردادهای هوشمند و برنامه های غیر متمرکز (DAPP) بنویسید که روی گره های blockchain Etherum اجرا می شوند.
این شبکه blockchain توزیع شده منبع باز از یک الگوریتم اجماع به نام اثبات کار (POW) استفاده می کند. علاوه بر این ، معماری اتریوم شامل پنج لایه مانند دستگاه مجازی Ethereum ، API های مشتری Ethereum ، قراردادهای هوشمند ، گره های اتریوم و برنامه های نهایی کاربر است. دستگاه مجازی Ethereum نرم افزار و معماری را ارائه می دهد که قراردادهای هوشمند را تشخیص می دهد. قراردادهای هوشمند نرم افزاری هستند که معاملات را اداره می کنند. پشتیبانی جدی برای شرکت های Ethereum blockchain و Fortune 500 علاقه زیادی به انجام توسعه در مقیاس بزرگتر با استفاده از این فناوری نشان داده اند. علاوه بر این ، اتریوم به زبان Go نوشته شده است و کد منبع آن در [GitHub][8] در دسترس است. تمام اسناد مربوط به استقرار و توسعه در دسترس است زیرا جامعه ای پر جنب و جوش دارد.

## چگونه می توان blockchain Ethereum را تنظیم کرد؟ {#setup}

اکنون ، ما از آنچه Testnet است آگاه هستیم. در این بخش گره Ethereum را روی دستگاه محلی خود تنظیم خواهیم کرد. قبل از ادامه کار ، اطمینان حاصل کنید که پیش نیازهای زیر را نصب کرده اید.
  * [homebrew][9] (برای macOS)

  * [go7] (brew install go)
هنگامی که پیش نیازها وجود دارد ، لطفاً دستور زیر را برای کلون کردن کد منبع اجرا کنید:
```
git clone https://github.com/ethereum/go-ethereum
```
پس از یک کلون موفق ، وارد فهرست شوید:
```
cd go-ethereum
```
اکنون ، دستور زیر را برای ساخت برنامه GETH اجرا کنید:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    توجه داشته باشید
{{_LINE_34_}}
  در صورت بروز هرگونه خطایی ، لطفاً XCode را با اجرای XCode-Select-نصب کنید و دوباره امتحان کنید
{{_LINE_36_}}
بنابراین ، شما تمام پیش نیازها و کد منبع را تنظیم کرده اید. بنابراین ، دستور زیر را برای شروع گره اجرا کنید:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="گره">}}


## چگونه می توان با Ethereum blockchain تعامل داشت؟ {#interact}

در این بخش در مورد تعامل با یک گره اتریوم در حال اجرا که کاملاً با blockchain هماهنگ شده است ، صحبت می شود. ما می توانیم از نرم افزار GETH برای تعامل و ارسال دستورات به شبکه تست استفاده کنیم.
برای این کار ، با اجرای دستورات زیر ، ساخت/سطل/GETH را در متغیر محیط $ مسیر قرار می دهیم:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
پس از آن سرور را که در بالا آورده اید متوقف کنید و شبکه تست را با پرچم های زیر اجرا کنید:
Geth -Testnet -RPC -RPCAPI = "DB ، ETH ، NET ، WEB3 ، Personal ، Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="testnet چیست">}}

در مرحله بعد ، شما باید یک پنجره ترمینال جدید را باز کنید و با اجرای دستور زیر دستور GETH را به گره وصل کنید:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="بستر مدیریت دارایی دیجیتال">}}

GETH یک پنجره کنسول را باز می کند که در آن می توانید با شبکه تست ارتباط برقرار کنید. دستور زیر حسابی ایجاد می کند که ارز مجازی و جفت کلید عمومی/خصوصی را در خود جای داده است:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="فناوری دفترچه غیر متمرکز">}}

برای بررسی حساب خود ، می توانید دستور زیر را اجرا کنید:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="testnet چیست">}}

به همین ترتیب ، دستورات زیادی وجود دارد که می توانید برای تعامل با Ethereum blockchain استفاده کنید.

## نتیجه {#نتیجه}

در اینجا پایان این آموزش می آید. ما یاد گرفتیم که TestNet  **و روند تنظیم گره Ethereum در دستگاه محلی چیست. blockchain Ethereum یک راه حل عمومی برای اکثر برنامه های غیر متمرکز است. بیشتر مشاغل و ادارات دولتی تمایل دارند این فناوری را اتخاذ کنند تا استحکام ، شفافیت ، در دسترس بودن و پاسخگویی را به وجود آورند. علاوه بر این ، این آموزش** blockchain **در صورتی که قصد شروع به توسعه در Ethereum blockchain را دارید ، به شما کمک می کند زیرا از قراردادهای هوشمند استفاده می کند. Blockchain Etheruem با داشتن هزاران گره زنده ، با ثبات تر و محبوب تر است. علاوه بر این ، شرکت ها می توانند بدون صرف وقت اضافی ، شبکه های blockchain Ethereum را توسعه داده و مستقر کنند. عامل دیگر قابلیت اطمینان اتریوم این است که توسعه قراردادهای هوشمند را به شکلی ارائه می دهد که سایر سیستم عامل های مدیریت دارایی دیجیتال**  ارائه نمی دهند.
آخرین به روزرسانی ها در شبکه اتریوم باعث شده است که شبکه مقرون به صرفه تر و کارآمدتر شود. در حقیقت ، مطالب بسیار بیشتری در ابر وجود دارد که جنبه های مهم اترییم را در مورد اهداف سرمایه گذاری و توسعه نشان می دهد. برای توسعه دهندگان ، یک اکوسیستم سازگار با توسعه دهنده را با برنامه های از پیش ساخته فراهم می کند. برای معدنچیان ، هر زمان که آنها یک بلوک جدید را در داخل محفظه قرار دهند ، به شکل اتر وجود دارد. علاوه بر این ، [Containerize.com][10] بسیاری از پست های وبلاگ فنی و آموزش های مربوط به محصولات منبع باز محبوب را در [blog.containerize.com] منتشر کرده است [11]. بنابراین ، برای به روزرسانی های منظم با دسته [سیستم عامل های blockchain][12] در ارتباط باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [پارچه Hyperledger][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [multichain][16]
  * [Consensys Quorum][17]
  * [نحوه تنظیم شبکه blockchain quorum consensys به صورت محلی][18]
  * [5 سیستم عامل blockchain منبع باز در سال 2020][3]
  * [یک راهنمای اساسی در مورد چگونگی ایجاد قرارداد هوشمند Ethereum][2]
  * [چگونه فناوری غیر متمرکز استراتژی کسب و کار شما را به روز می کند][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
 [20]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
