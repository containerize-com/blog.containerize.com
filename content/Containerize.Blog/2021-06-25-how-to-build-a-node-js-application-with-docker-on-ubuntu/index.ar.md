---
title: "كيفية إنشاء تطبيق Node.js مع Docker على Ubuntu" 
seoTitle: "كيفية إنشاء تطبيق Node.js مع Docker على Ubuntu" 
description: "إذا كنت مهتمًا بـ Node.js وتريد استخدام Docker. سوف يسير هذا البرنامج التعليمي ، وكيفية إنشاء تطبيق NodeJS مع Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "ستشرح لك هذه المقالة كيفية إنشاء تطبيق NodeJS باستخدام حاوية Docker. يسمح Docker بتعبئة وتشغيل التطبيقات كحاويات." 
url: /ar/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="كيفية إنشاء تطبيق NodeJS مع Docker">}}


## ستشرح لك هذه المقالة كيفية إنشاء تطبيق NodeJS مع حاوية Docker. يسمح Docker بتعبئة وتشغيل التطبيقات كحاويات.
نبدأ اليوم سلسلة من البرامج التعليمية حول أدوات تطوير البرمجيات. وتغطي هذه المقالة الأولى كيفية تحريك تطبيق Node.js باستخدام Docker. يساعد Docker المطورين على حزم وتشغيل التطبيقات كحاويات. نظرًا لأن الحاوية عبارة عن عملية معزولة وبديل خفيف الوزن للأجهزة الافتراضية. تشرح هذه المقالة كيفية إنشاء تطبيق NodeJS مع حاوية Docker. هيا بنا نبدأ!
* [ **ما هو Docker** ][1]
* **[المتطلبات الأساسية][2]** 
* [ **SETUP NODE.JS Application** ][3]
* [ **اكتب dockerfile** ][4]
* [ **بناء الصورة وتشغيل حاوية Docker** ][5]
* [ **الخلاصة** ][6]

## ما هو دوكر {#docker}

Docker عبارة عن مجموعة من النظام الأساسي كمنتجات خدمة تستخدم المحاكاة الافتراضية على مستوى OS لتسليم البرامج في حزم تسمى الحاويات. إنها منصة مفتوحة لتطوير التطبيقات والشحن وتشغيلها. يمكّنك Docker من فصل تطبيقاتك عن البنية التحتية الخاصة بك حتى تتمكن من توصيل البرامج بسرعة.
يستخدم Docker الهندسة المعمارية لخادم العميل. يتحدث عميل Docker إلى Docker Daemon ، الذي يقوم بالرفع الثقيل لبناء حاويات Docker وتوزيعها. يتواصل عميل Docker و Daemon باستخدام API REST أو عبر مآخذ UNIX أو واجهة الشبكة. هنا هو مخطط هندسة Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="العمارة دوكر">}}


## المتطلبات الأساسية {#prereq}

  * خادم Ubuntu
  * Docker مثبت على الخادم
  * Node.js NPM مثبت

## إعداد Node.js تطبيق {#setup}

لإنشاء صورتك ، ستحتاج أولاً إلى إنشاء ملفات التطبيق الخاصة بك ، والتي يمكنك بعد ذلك نسخها إلى الحاوية الخاصة بك. ستتضمن هذه الملفات المحتوى الثابت والرمز والتبعيات للتطبيق.
أولاً ، قم بإنشاء دليل لمشروعك في الدليل الرئيسي لمستخدمك غير الجذر. ثم ، قم بتنفيذ الأمر أدناه في مجلد جديد قمت بإنشائه.
```
npm init -y
npm i -s express
```
سيقوم الأمر أعلاه بإعداد تطبيق Node.js مع تثبيت إطار عمل Express كاعتماد. دعنا نضيف الرمز التالي إلى ملف **app.js** .
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
ابدأ التطبيق باستخدام Node App.js
```
node app.js
```
انتقل متصفحك إلى http: // الخاص بك \ _server \ _ip: 3000. سترى الصفحة المقصودة التالية.
الآن لديك تطبيق وتشغيل. يمكننا الآن الانتقال إلى إنشاء Dockerfile الذي سيسمح لنا بإعادة إنشاء هذا التطبيق وتوسيع نطاقه.

## اكتب Dockerfile {#dockerfile}

باستخدام DockerFile ، يمكنك تحديد ما سيتم تضمينه في حاوية التطبيق عند تنفيذه وبيئة الحاوية.
بادئ ذي بدء ، قم بإنشاء Dockerfile مع الأمر التالي في جذر مشروعك.
```
vi Dockerfile
```
أضف ما يلي **من التعليمات** لتعيين الصورة الأساسية للتطبيق:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    يمكنك إضافة ملف .Dockerignore لإزالة الملفات التي لا تنتمي إلى صورة Docker.
{{_LINE_46_}}
{{_LINE_47_}}
دعنا ننشئ **Node_Modules** دليل فرعي في /الصفحة الرئيسية /العقدة مع دليل التطبيق. سيضمن ذلك أن لديهم الأذونات المطلوبة ، والتي ستكون مهمة عندما نقوم بإنشاء وحدات عقدة محلية في الحاوية مع تثبيت NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
بعد ذلك ، قم بتعيين دليل العمل للتطبيق على/Home/Node/App:
```
...
WORKDIR /home/node/app
```
بعد ذلك ، انسخ الحزمة.
```
...
COPY package*.json ./
USER node
RUN npm install
```
انسخ رمز التطبيق الخاص بك مع الأذونات المناسبة إلى دليل التطبيق على الحاوية
```
...
COPY --chown=node:node . .
```
فضح الأمر لفضح الميناء:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
يجب أن تبدو النسخة النهائية من Dockerfile مثل هذا:
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

## بناء الصورة وتشغيل الحاوية {#build}

قم بتشغيل الأمر التالي لإنشاء صورة Docker الخاصة بك
```
docker build -t <<image_name>> .
```
سيؤدي ذلك إلى إنشاء صورة _docker التي يمكنك التحقق منها باستخدام أمر Docker Images. أصبح من الممكن الآن إنشاء حاوية مع هذه الصورة باستخدام الأمر التالي:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
سيبدأ هذا الحاوية التي يمكنك التحقق منها عن طريق تشغيل أمر Docker PS. الآن في متصفحك إذا قمت بالوصول إلى http: // localhost: 3000 سترى تطبيق Node.js يعمل. ومع ذلك ، هذه المرة الآن تعمل من حاوية Docker الخاصة بك.

## خاتمة {#conclusion}

التنمية مع حاوية Docker بسيطة للغاية وسهلة. يساعد Docker المطورين على حزم وتشغيل التطبيقات كحاويات. في هذا البرنامج التعليمي ، تعلمنا كيفية إنشاء تطبيق Node.js باستخدام حاوية Docker على Ubuntu. في المقالات القادمة ، سنكتب عن المزيد من استخدامات Docker ونناقش أيضًا أدوات أخرى.

## يستكشف
  * [كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu][7]
  * [كيفية إعداد وتكوين Nginx كوكيل عكسي][8]



[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
