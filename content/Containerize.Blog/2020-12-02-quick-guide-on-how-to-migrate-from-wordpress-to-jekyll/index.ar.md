---
title: "كيفية الترحيل من WordPress إلى Jekyll" 
seoTitle: "كيفية الترحيل من WordPress إلى Jekyll" 
description: "في هذا البرنامج التعليمي ، سوف نتعلم كيفية ترحيل موقعك من WordPress إلى Jekyll في خطوات سريعة وسهلة. هيا بنا نبدأ!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "في هذا البرنامج التعليمي ، سنتعلم كيفية ترحيل موقع الويب الخاص بك من WordPress إلى Jekyll واستضافته مع Github مجانًا" 
url: /ar/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## في هذا البرنامج التعليمي ، سنتعلم كيفية ترحيل موقع الويب الخاص بك من WordPress إلى Jekyll واستضافته مع Github مجانًا

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress إلى Jekyll">}}

Jeykll هو مولد موقع ثابت مفتوح المصدر. إنه يحول نصك العادي إلى مواقع ويب ومدونات ثابتة. يأخذ نصًا مكتوبًا في لغة الترميز المفضل لديك (Markdown ، Liquid ، HTML / CSS) ويستخدم تخطيطات لإنشاء موقع ويب ثابت. Jekyll هي مدونة مدرك والرابط والفئات والصفحات والمنشورات والتخطيطات المخصصة كلها مواطنون من الدرجة الأولى. واحدة من أكبر فوائد Jekyll هي أنه يمكنك استضافة موقع الويب الثابت الخاص بك على صفحات GitHub وتشغيل موقع الويب الخاص بك أو مدونته مجانًا. لذلك ، يمكن أن تساعدك WordPress to Jekyll Migration على تحسين أداء موقع الويب الخاص بك وسرعته.
في منشور المدونة هذا ، سنذهب إلى كيفية ترحيل موقع الويب أو المدونة الحالية من WordPress إلى Jekyll لتحسين السرعة والأداء. اذا هيا بنا نبدأ!
*  **[لماذا تهاجر؟][1]**  
*  **[التثبيت][2]**  
*  **[استيراد منشورات ووردبريس إلى][3]**  
*  **[نشر مع صفحات جيثب][4]**  
*  **[الخلاصة][5]**  

## لماذا تهاجر؟ {#why}

في Jekyll ، يمكنك الحصول على 100/100 [نقاط منارة][6] لأنه لا توجد تفاعلات قاعدة بيانات. وجميع المحتوى يتم معالجته مسبقًا وحفظه كملفات HTML. وسيقوم Jekyll فقط بتقديم كمية ضئيلة من طلبات HTTP. وبالتالي ، فهو سريع للغاية.

## التثبيت وإعداد jekyll {#install}

Jekyll مكتوب في روبي. لذلك ، يجب عليك تثبيته أولاً على جهاز الكمبيوتر الخاص بك. يفترض هذا الدليل أنك قمت بالفعل بتثبيت Ruby على جهاز الكمبيوتر الخاص بك. إذا لم يكن الأمر كذلك ، يمكنك متابعة [الدليل الرسمي][7].
أولاً ، سنقوم "  **Jekyl** " و "  **Bundler**  " Gems باستخدام الأمر " **GEM**  " الذي سيكون متاحًا بعد تثبيت Ruby. افتح سطر الأوامر وقم بتشغيل الرمز التالي.
```
gem install jekyll bundler
```
ثم ، قم بتشغيل الأمر التالي لإنشاء موقع جديد. سيؤدي هذا إلى إنشاء مجلد  **myblog**  .
```
jekyll new myblog
```
بمجرد التثبيت ، يمكنك إنشاء الموقع وتوفيره على خادم محلي.
```
bundle exec jekyll serve
```
سيكون الموقع متاحًا على http: // localhost: 4000. كما أنه يولد مجلد "  **_ site**  " في المجلد الخاص بك وهذا ما هو الإخراج النهائي للموقع.

## استيراد صفحات ومشاركات WordPress {#import}

يتوفر أيضًا مكون إضافي غير رسمي لـ WordPress ، لكننا سنتبع الطريقة الرسمية في هذا البرنامج التعليمي. إذا كنت ترغب في إعطاء البرنامج المساعد WordPess Exporter A ، يمكنك [الذهاب إلى هنا][8].
لاستيراد مشاركاتك من موقع WordPress المستضافة ذاتيًا ، قم بتشغيل الأمر التالي على المحطة الخاصة بك.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
هذا فقط يستورد بيانات النشر والصفحة والمحتوى. هذا المستورد يحول مشاركاتك فقط ويقوم بإنشاء YAML الأمامي. لا يستورد أي تخطيطات أو تصميم أو ملفات خارجية (الصور ، CSS ، إلخ).

##  **النشر مع صفحات جيثب**  {#deploy}

حتى الآن ، أنشأنا مدونة Jekyll محليًا. الآن سنقوم بنشره على جيثب. بادئ ذي بدء ، علينا أن نتحكم في موقعنا باستخدام [git][9]. قم بتشغيل الأوامر التالية في مجلد الموقع.
```
git init
git add .
git commit -m "Initial Commit"
```
عند تثبيت jekyll ، يجب أن يقوم تلقائيًا بإنشاء ملف "  **. Gitignore**  " في الجذر مع المحتوى التالي على الأقل.
ثم ، قم بتسجيل الدخول إلى github وإنشاء مستودع جديد yourname.github.io
بعد ذلك ، انسخ عنوان URL HTTPS للمستودع.

{{< figure align=center src="images/github-img.png" alt="Github HTTPS URL">}}

ثم ، أضف المستودع البعيد وادفع الرمز.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
منتهي! يجب أن يكون موقعك الآن متاحًا على yourname.github.io

## خاتمة {#conclusion}

في هذه المقالة ، تعلمنا كيفية بناء مدونة ثابتة مع مواقع Jekyll. بعد ذلك ، تعلمنا كيفية تصدير مشاركاتك وصفحاتك من WordPress إلى Jekyll. وأخيراً ، نشرنا الموقع النهائي على صفحات جيثب.



 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/
