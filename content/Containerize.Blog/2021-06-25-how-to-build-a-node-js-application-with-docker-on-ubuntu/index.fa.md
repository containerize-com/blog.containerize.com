---
title: "نحوه ساخت یک برنامه node.js با docker در اوبونتو" 
seoTitle: "نحوه ساخت یک برنامه node.js با docker در اوبونتو" 
description: "اگر به Node.js علاقه دارید و می خواهید از Docker استفاده کنید. این آموزش شما را طی می کند ، چگونه می توانید یک برنامه NodeJS را با Docker بسازید." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "در این مقاله نحوه ساخت یک برنامه NodeJS با کانتینر سازی Docker برای شما توضیح داده خواهد شد. Docker اجازه می دهد تا برنامه ها را به عنوان ظروف بسته بندی و اجرا کنید." 
url: /fa/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="نحوه ساخت برنامه nodejs با docker">}}


## این مقاله برای شما توضیح می دهد که چگونه می توانید یک برنامه NodeJS را با کانتینر سازی Docker بسازید. Docker اجازه می دهد تا برنامه ها را به عنوان ظروف بسته بندی و اجرا کنید.
امروز ما یک سری آموزش در مورد ابزارهای توسعه نرم افزار را شروع می کنیم. و این مقاله اول نحوه کانتینر کردن یک برنامه Node.js را با استفاده از Docker پوشش می دهد. Docker به توسعه دهندگان کمک می کند تا برنامه ها را به عنوان ظروف بسته بندی و اجرا کنند. از آنجا که این ظرف یک فرآیند جدا شده و یک جایگزین سبک برای ماشین های مجازی است. در این مقاله نحوه ساخت یک برنامه NodeJS با کانتینر سازی Docker توضیح داده شده است. بیا شروع کنیم!
* [ **داکر چیست** ][1]
* **[پیش نیاز][2]** 
* [ **node.js setup node.js** ][3]
* [ **نوشتن dockerfile** ][4]
* [ **ساخت تصویر و اجرای ظرف Docker Container** ][5]
* [ **نتیجه گیری** ][6]

## داکر چیست {#docker}

Docker مجموعه ای از پلتفرم به عنوان محصولات خدماتی است که از مجازی سازی سطح سیستم عامل برای ارائه نرم افزار در بسته های به نام ظروف استفاده می کند. این یک بستر باز برای توسعه ، حمل و نقل و اجرای برنامه ها است. Docker شما را قادر می سازد تا برنامه های خود را از زیرساخت های خود جدا کنید تا بتوانید به سرعت نرم افزار را تحویل دهید.
Docker از یک معماری مشتری-سرور استفاده می کند. مشتری Docker با Docker Daemon صحبت می کند ، که بالا بردن سنگین ساختمان ، دویدن و توزیع ظروف Docker شما را انجام می دهد. مشتری Docker و Daemon با استفاده از API REST ، بیش از سوکت های UNIX یا یک رابط شبکه ارتباط برقرار می کنند. در اینجا نمودار معماری Docker است.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="معماری داکر">}}


## پیش نیازها {#prereq}

  * سرور اوبونتو
  * Docker نصب شده روی سرور
  * node.js npm نصب شده است

## Node.js Setup Node.js {#setup}

برای ایجاد تصویر خود ، ابتدا باید پرونده های برنامه خود را تهیه کنید ، که می توانید سپس روی ظرف خود کپی کنید. این پرونده ها شامل محتوای استاتیک ، کد و وابستگی های برنامه شما هستند.
ابتدا دایرکتوری برای پروژه خود در فهرست خانه کاربر غیر ریشه خود ایجاد کنید. سپس در یک پوشه جدید که ایجاد کرده اید ، دستور زیر را اجرا کنید.
```
npm init -y
npm i -s express
```
دستور فوق یک برنامه node.js را با Express Framework که به عنوان وابستگی نصب شده است ، تنظیم می کند. بیایید کد زیر را به پرونده **app.js** اضافه کنیم.
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
برنامه را با node app.js شروع کنید
```
node app.js
```
مرورگر خود را به http: // خود \ _server \ _ip: 3000 حرکت دهید. صفحه فرود زیر را مشاهده خواهید کرد.
اکنون یک برنامه کاربردی و در حال اجرا دارید. اکنون می توانیم برای ایجاد Dockerfile حرکت کنیم که به ما امکان می دهد تا این برنامه را مجدداً بازآفرینی و مقیاس کنیم.

## Dockerfile را بنویسید {#dockerfile}

با استفاده از Dockerfile ، می توانید هنگام اجرای آن و محیط کانتینر ، آنچه را که در ظرف برنامه خود گنجانده شده است ، مشخص کنید.
اول از همه Dockerfile را با دستور زیر در ریشه پروژه خود ایجاد کنید.
```
vi Dockerfile
```
برای تنظیم تصویر پایه برنامه ، **را از** دستورالعمل اضافه کنید:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    برای حذف پرونده هایی که متعلق به تصویر Docker نیستند ، می توانید پرونده .dockerignore را اضافه کنید.
{{_LINE_46_}}
{{_LINE_47_}}
بیایید **node_modules** subdirectory in /home /node را به همراه فهرست برنامه ایجاد کنیم. این امر اطمینان حاصل می کند که آنها مجوزهای لازم را دارند ، که هنگام ایجاد ماژول های گره محلی در ظرف با نصب NPM ، مهم خواهد بود.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
در مرحله بعد ، فهرست کار برنامه را روی/صفحه اصلی/گره/برنامه تنظیم کنید:
```
...
WORKDIR /home/node/app
```
در مرحله بعد ، Package.Json و Package-Lock.json را کپی کنید ، پرونده پروژه را به یک "گره" کاربر غیر ریشه اختصاص دهید و سپس نصب NPM را اجرا کنید
```
...
COPY package*.json ./
USER node
RUN npm install
```
کد درخواست خود را با مجوزهای مناسب در فهرست برنامه روی ظرف کپی کنید
```
...
COPY --chown=node:node . .
```
دستور را برای افشای بندر در معرض نمایش قرار دهید:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
نسخه نهایی Dockerfile باید به این شکل باشد:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## ساخت تصویر و اجرای کانتینر {#build}

دستور زیر را اجرا کنید تا تصویر Docker خود را تولید کنید
```
docker build -t <<image_name>> .
```
با این کار _docker image_ ایجاد می شود که می توانید با استفاده از دستور Docker Images بررسی کنید. اکنون با استفاده از دستور زیر می توان یک ظرف با این تصویر ایجاد کرد:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
با این کار با اجرای دستور Docker PS ، ظرفی را که می توانید آن را تأیید کنید ، شروع می شود. اکنون اگر به http: // localhost: 3000 دسترسی دارید ، در مرورگر خود قرار دارید ، برنامه Node.js خود را در حال اجرا خواهید دید. با این حال این بار اکنون از ظرف Docker شما در حال اجرا است.

## نتیجه {#conclusion}

توسعه با ظرف Docker بسیار ساده و آسان است. Docker به توسعه دهندگان کمک می کند تا برنامه ها را به عنوان ظروف بسته بندی و اجرا کنند. در این آموزش یاد گرفتیم که چگونه می توان یک برنامه node.js را با استفاده از کانتینر Docker در اوبونتو ساخت. در مقالات آینده ما در مورد کاربردهای بیشتر Docker خواهیم نوشت و همچنین در مورد ابزارهای دیگر بحث خواهیم کرد.

## کاوش کنید
  * [نحوه نصب چندین نسخه PHP با NGINX در اوبونتو][7]
  * [نحوه تنظیم و پیکربندی nginx به عنوان پروکسی معکوس][8]



[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
