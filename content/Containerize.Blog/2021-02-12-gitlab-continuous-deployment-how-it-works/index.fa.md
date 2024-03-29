---
title: "استقرار مداوم Gitlab | چگونه کار می کند؟" 
seoTitle: "استقرار مداوم Gitlab | چگونه کار می کند؟" 
description: "در این آموزش ، ما یک خط لوله استقرار مداوم با GitLab ایجاد خواهیم کرد. استقرار مداوم Gitlab به DevOps کمک می کند تا استقرار خودکار را انجام دهد." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "استقرار خودکار جریان کار شما را ساده تر می کند. فرآیندها این آموزش GITLAB به شما کمک می کند تا با استفاده از GitLab CI/CD ، یک خط لوله استقرار مداوم را تنظیم کنید." 
url: /fa/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## استقرار خودکار گردش کار و فرآیندهای شما را ساده تر می کند. این آموزش GITLAB به شما کمک می کند تا با استفاده از GitLab CI/CD ، یک خط لوله استقرار مداوم را تنظیم کنید.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="استقرار مداوم Gitlab">}}


## بررسی اجمالی
در چند مقاله اخیر ، ما در مورد [مبانی کنترل نسخه][1] آموختیم و سپس دانش خود را با یادگیری در مورد مدل های مختلف [شاخه های][2] و گردش کار تقویت کردیم. سیستم کنترل نسخه کارآیی را در دنیای توسعه ، استقرار و ادغام به ارمغان آورده است. توسعه دهندگان بدون نگرانی در مورد ساخت و آزمایش ، مرتکب کد منبع بسیار آسان می شوند. صنعت نرم افزار اعتماد به نفس و حاشیه ای رقابتی کسب کرده است زیرا این رویکرد استقرار را به خود اختصاص داده است.
**استقرار مداوم Gitlab** و ادغام به یافتن آسان مسائل کمک می کند. علاوه بر این ، توسعه دهندگان می توانند اشکالات و سایر دست زدن به خانم را در مدت زمان کوتاه تری ردیابی کنند. این فرآیند اتوماسیون از کارهایی که به طور مکرر اتفاق می افتد آزادی می دهد و نیروی انسانی و احتمال خطا را کاهش می دهد. امروز در این پست وبلاگ ما در مورد خط لوله استقرار مداوم با Gitlab CI/CD بررسی خواهیم کرد. بنابراین ، بیایید با پوشش نکات زیر شروع کنیم!
* **[CI و CD چیست][3]** 
* **[دونده گیتلب چیست][4]** 
* **[. پرونده gitlab-ci.yml][5]** 
* **[ایجاد برنامه نمونه اصلی][6]** 
* **[نتیجه گیری][7]** 

## CI و CD چیست {#cicd}

ادغام مداوم (CI) یکی از بهترین شیوه های DevOps برای خودکارسازی ادغام تغییرات کد از چندین همکار به یک پروژه نرم افزاری واحد است. این به توسعه دهندگان این امکان را می دهد تا مرتباً تغییرات کد را در یک مخزن مرکزی که در آن ساخت و آزمایش انجام می شود ، ادغام کنند. استقرار مداوم (CD) پس از هر کد تعهد و ساخت ، یک قدم فراتر از استقرار خودکار کد به محیط هدف (تولید یا مرحله بندی) حرکت می کند.
قبل از شروع ، حتماً یک پروژه در GitLab داشته باشید که دوست دارید از CI/CD برای آن استفاده کنید. و شما باید نگهدارنده یا دسترسی به سطح مالک به پروژه داشته باشید.

## دونده Gitlab چیست {#runner}

پس از درک **استقرار مداوم Gitlab** ، GitLab Runner یک برنامه سبک وزن کوچک است که در GO نوشته شده است که مشاغل مربوط به ادغام مداوم (CI) را در دستگاه محلی شما اجرا می کند و نتایج را به GitLab برای آن ارسال می کند تا تغییرات را در نظر بگیرد. این یک باینری واحد است که می تواند در هر سیستم عامل اصلی نصب شود.
قبل از اینکه با GitLab CI / CD به جلو حرکت کنیم ، باید مطمئن شوید که دونده ها را برای انجام وظایف خود در دسترس دارید. می توانید راهنمای رسمی [نصب][8] و [ثبت][9] Gitlab Runner را دنبال کنید.

## پرونده gitlab-ci.yml {#yml}

**. gitlab-ci.yml**پرونده ای است که در آن دستورالعمل های خاصی را برای Gitlab CI/CD پیکربندی می کنید. در ریشه مخزن شما قرار گرفته است و شامل تعاریفی از نحوه ساخت پروژه شما است. هر بار که ما به نمونه GitLab خود متعهد می شویم ، Gitlab از یک دونده برای ساخت و آزمایش این پروژه طبق دستورالعمل این پرونده دعوت می کند.

## یک برنامه نمونه ایجاد کنید {#sample}

در بخش این آموزش **gitlab** ، ما یک برنامه نمونه ایجاد خواهیم کرد. با فرض اینکه شما قبلاً یک مخزن GitLab ایجاد کرده اید ، اجازه دهید یک نمونه نمونه ایجاد کنیم و ما یک فرآیند CI / CD را برای برنامه تنظیم خواهیم کرد.
اول از همه ، پرونده pack.json را در ریشه پروژه خود ایجاد کنید
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
اکنون یک App.js را در ریشه پروژه خود ایجاد کنید
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
در آخرین مرحله از استقرار مداوم **gitlab ،** یک dockerfile**را ایجاد کنید و مطالب زیر را به آن اضافه کنید:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile شامل فرآیند ساخت این برنامه است. این شامل ایجاد یک ظرف گره و نصب وابستگی ها است.
حال ما باید یک پرونده **gitlab-ci.yml** ایجاد کنیم. این پرونده شامل دستورالعمل های ساخت پروژه ما است. هر بار که به مخزن Gitlab خود متعهد می شویم ، Gitlab برای ساخت این پروژه از یک دونده استفاده می کند.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
ما فقط یک مرحله ساختیم و فقط**NPM را به عنوان یک اسکریپت نصب کرده است. این یک فرمان است که شما باید هر بار که تغییر به پروژه شما می رسد ، به صورت دستی اجرا کنید. و این جایی است که دونده GitLab وارد می شود و هر بار که مرتکب شوید ، این کار را برای شما انجام می دهد.
اکنون با فرض اینکه شما قبلاً GitLab Runner را نصب کرده اید و همچنین آن را در نمونه GitLab خود ثبت کرده ایم ، می توانیم با انجام یک تعهد ساده به برنامه و فشار دادن آن به GitLab ، Gitlab CI / CD را در عمل آزمایش کنیم.
سپس می توانید پروژه خود را در Gitlab باز کنید ، به خط لوله My-Project → بروید و یک برچسب را مشاهده خواهید کرد که می گوید "گذشت" در کنار تعهدی که انجام داده اید. تعهدات بعدی نیز دارای برچسب خواهد بود.

## نتیجه {#conclusion}

این ما را به پایان این آموزش **gitlab**می رساند. در این مقاله ، ما در مورد اصول اولیه ادغام Gitlab ، **CI & CD** ، **Gitlab Runner** و استقرار مداوم چیست. علاوه بر این ، ما مطالعه کردیم که استفاده از دوندگان در گردش کار کلی CI / CD چیست. ما همچنین یک پروژه نمونه ایجاد کردیم که نحوه تنظیم استقرار مداوم با استفاده از GITLAB را توضیح می دهد. اگر به دنبال استقرار مداوم**Gitlab** هستید ، این آموزش GitLab به شما کمک می کند. با این حال ، بسیاری از منابع دیگر که در بخش "کاوش" ذکر شده در زیر وجود دارد که می توانید بررسی کنید. علاوه بر این ، مقالات مربوط به سیستم های کنترل نسخه****است که منبع باز ، خود میزبان و قابل گسترش هستند.
سرانجام ، [Containerize.com][10] به طور مداوم در حال نوشتن پست های وبلاگ در مورد محصولات و موضوعات منبع باز بیشتر است. بنابراین ، لطفاً برای به روزرسانی های منظم با [][11][نرم افزار کنترل نسخه][12] در تماس باشید. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][13] ، [LinkedIn][14] و [Twitter][15] دنبال کنید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [اتوماسیون گردش کار توسعه نرم افزار با اقدامات GitHub][16]
  * [شاخه ها را درک کنید و یاد بگیرید و درخواست ها را در GIT بکشید][2]
  * [نرم افزار مدیریت کد منبع | git چیست؟][17]
  * [5 سیستم کنترل نسخه منبع باز در سال 2021][18]
  * [عملکردهای تجاری را با استفاده از نرم افزار منبع آزاد و آزاد][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
