---
title: "كيفية مرسومة WordPress | Docker WordPress" 
seoTitle: "كيفية مرسومة WordPress | Docker WordPress" 
description: "ما هو Docker & Docker Compens؟ في هذه المقالة ، سوف نتعلم كيفية تثبيت Docker ، Docker Compose ، وكيفية التهوية WordPress في حاوية Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "يقوم برنامج الحاويات بتجميع التطبيق وتبعياته وجعل التطبيق يعمل على أي بيئة حوسبة. دعونا نتعلم كيفية مرسومة WordPress." 
url: /ar/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## يقوم برنامج حاوية بتجميع التطبيق وتبعياته وجعل التطبيق يعمل على أي بيئة حوسبة. دعونا نتعلم كيفية مرسومة WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## ملخص
مرحبًا بك في منشور مدونة آخر في فئة [المدونات][1] من البرامج المفتوحة المصدر. لقد نشرنا بعض المقالات حول مواضيع مثل [تعزيز خيوطك مع تكامل WordPress المجاني CivIcrm][2] ، [كيفية بناء موقع الويب الخاص بك مع WordPress و Gatsby][3] ، والبعض الآخر. ومع ذلك ، فإن هذه المقالة ستجلب المزيد من الأفكار والتفاصيل حول منصات التدوين مفتوحة المصدر وبرامج الحاوية****. سوف نمر ببعض الأسئلة الساخنة مثل ما هو Docker &**كيفية تثبيت Docker Compose**وسنتعلم كيفية التخلص من WordPress.
أصبحت الحاويات اتجاهًا رئيسيًا في تطوير البرمجيات كبديل للمحاكاة الافتراضية. يتضمن تغليف أو تجميع رمز البرمجيات وجميع تبعياته بحيث يمكن تشغيله على أي بنية تحتية باستمرار. يتيح الحاوية للمطورين إنشاء ونشر التطبيقات بشكل أسرع وأكثر أمانًا. Docker هو تطبيق الحاويات الأكثر شعبية المستخدم في مجتمع المطورين. في هذا البرنامج التعليمي ، سوف نتعلم كيفية مرسومة WordPress باستخدام Docker Compose. لذلك ، دعنا نبدأ بالنقاط التالية.
* [**ما هو Docker؟**][4]
* [**لماذا تحتاج إلى مرسومة WordPress**؟][5]
* **[كيفية تثبيت Docker Compose][6]**
* **[Dockerize WordPress][7]**
* **[الخلاصة][8]**

## ما هو Docker؟   {#عامل ميناء}
بعبارة بسيطة ، Docker هو برنامج حاوية مفتوح المصدر****الذي يعمل بشكل افتراضي بشكل أسرع وأخف وزناً. إنه خفيف جدًا بحيث يمكن إطلاق حاوية Docker في بضع ثوانٍ فقط. ويمكنك تشغيل عشرات حاويات Docker بسهولة على جهاز كمبيوتر واحد. يستخدم المطورون Docker لإنشاء التطبيقات ونشرها وتشغيلها باستخدام الحاويات. تتيح الحاويات للمطوّر حزم تطبيقًا مع جميع الأجزاء التي يحتاجها ، مثل المكتبات والتبعيات الأخرى ، ونشره كحزمة واحدة. من خلال القيام بذلك ، يمكن للمطور أن يطمئن إلى أن التطبيق سيعمل على أي بنية تحتية. بالإضافة إلى ذلك ، هناك مطور كبير ومجتمع دعم على قيد الحياة دائمًا لتقديم أقصى درجات المساعدة في أي صلة. أصبحت Docker مكونًا لا بد منه في أي مؤسسة برمجيات بسبب ميزاته القوية والاستخدامات.

## لماذا تحتاج إلى مرسومة WordPress؟   {#لماذا}
في هذا القسم ، سنعرف عن الحاجة وراء قيادة WordPress. يعد WordPress أفضل برنامج تدوين مفتوح المصدر يعتمد بشكل كبير من قبل عالم التكنولوجيا. ومع ذلك ، لتشغيل WordPress محليًا ، تحتاج إلى Apache/Nginx ، MySQL Server ، PHP ، وأطنان من التبعيات الأخرى. يعد النشر على التدريج أو بيئة الإنتاج كابوسًا عندما يتعلق الأمر بإدارة تلك التبعيات. في بعض الأحيان ، يصبح من المتاعب للمطورين ومهندسي الدعم تكرار عمليات النشر مرارًا وتكرارًا لأنها تتطلب الوقت والقوى العاملة.
لذلك ، يمكن أن تساعدك الحاوية في هذا. كل ما تحتاجه هو Docker - التثبيت نفسه يستغرق ثوانٍ ولا يلزم تكوين إضافي
بغض النظر عما إذا كان جهاز DEV أو مرحلة أو خادم مباشر ونظام التشغيل ، يعمل Docker كما هو الحال في كل مكان. هذا يعني أنه لن تضطر إلى البحث عن الأخطاء التي ، على سبيل المثال ، تظهر في بيئة واحدة ولا يمكن استنساخها في أخرى.

## كيفية تثبيت Docker Compose   {#Install}

## # المتطلبات الأساسية
يمكنك استخدام Docker Compose لتشغيل WordPress بسهولة في بيئة معزولة مصممة بحاويات Docker. يوضح هذا الدليل كيفية استخدام Compose لإعداد وتشغيل WordPress.
يعتمد Docker Compose على محرك Docker ، لذا تأكد من تثبيت محرك Docker. على أنظمة سطح المكتب مثل Docker Desktop لنظام التشغيل Mac و Windows ، يتم تضمين Docker Compose كجزء من عمليات تثبيت سطح المكتب هذه. ومع ذلك ، على أنظمة Linux أولاً ، قم بتثبيت محرك Docker باتباع [الدليل الرسمي][9].

## # تثبيت على Linux
قم بتشغيل هذا الأمر لتنزيل الإصدار المستقر الحالي لـ Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
تطبيق الأذونات القابلة للتنفيذ على الثنائي:
```
sudo chmod +x /usr/local/bin/docker-compose
```
اختبار التثبيت عن طريق تشغيل أمر الإصدار:
```
docker-compose --version
```

## # تحديد dockerfile لـ WordPress
أول شيء نحتاج إلى فعله هو تحديد كيف ستبدو صورتنا في**_ dockerfile _**. إنه ملف نصي يتم إضافته إلى الدليل مع مصادر التطبيق الخاص بك.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
"**/var/www/html/wordpress**" سيحتوي على محتويات كاملة من WordPress جنبًا إلى جنب مع المواضيع والإضافات والمحتويات. إذا كان مستودعك يحتوي فقط على السمة أو المكون الإضافي ، فما عليك سوى إضافة المجلد ذي الصلة.
قم بإنشاء ملف Docker-corm.yml الذي يبدأ مدونة WordPress الخاصة بك ومثال MySQL منفصل مع حامل وحدة تخزين لاستمرار البيانات:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
الآن ، قم بتشغيل الأمر في دليل المشروع الخاص بك
```
docker-compose up -d
```
يتم تشغيل هذا**_ Docker-Cormpose _**في الوضع المنفصل ، ويسحب صور Docker المطلوبة ، ويبدأ حاويات WordPress وقاعدة البيانات.
بمجرد بدء الحاويات ، يمكنك فتح عنوان URL في متصفح الويب والبدء في استخدام تطبيقك:
```
http://localhost:8000
```

## الخاتمة   {#conclusion}
هذا يقودنا إلى نهاية منشور المدونة هذا. في هذه المقالة ، تعلمنا ما هو Docker ،**كيفية تثبيت Docker Compose**. لقد تعلمنا أيضًا كيفية مرسومة WordPress باستخدام Docker-Cormse. بالإضافة إلى ذلك ، قمنا بتقديمك للمفهوم وراء Docker وكيف يمكنك تحديد تطبيقات بسيطة متعددة المونتي. ومع ذلك ، فإن برنامج حاوية المصدر المفتوح****هو خيار رائد لجميع مؤسسات البرامج. لذلك ، ستساعدك هذه المقالة حقًا إذا كنت تتطلع إلى اختيار Docker لتطبيقاتك. هناك العديد من المقالات الأخرى ذات الصلة وبرامج التدوين المدرجة في قسم "استكشاف" أدناه.
أخيرًا ، [Containerize.com][10] يكتب مقالات حول منتجات أخرى مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع فئة [التدوين][1] للأخبار والتحديثات العادية. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][11] و [LinkedIn][12] و [Twitter][13].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [WordPress][14]
  * [Jekyll][15]
  * [الخطاب][16]
  * [شبح][17]
  * [كيفية مرسومة WordPress مع Docker Compose][18]
  * [تعزيز خيوطك مع تكامل WordPress المجاني CivIcrm][2]
  * [أتمتة نظام التذاكر باستخدام WordPress و Osticket][19]
  * [كيفية دمج منتدى الخطاب مع WordPress][20]
  * [زيادة حركة البحث على موقع الويب باتباع أفضل 7 مدونات SEO][21]
  * [كيفية بناء موقع الويب الخاص بك باستخدام WordPress و Gatsby][3]
  * [كيفية تمكين ضغط GZIP في WordPress لتحسين الوصاية و SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/ar/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
