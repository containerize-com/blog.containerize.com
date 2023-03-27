---
title: "أتمتة نشر تطبيق PHP مع النشر" 
seoTitle: "أتمتة نشر تطبيق PHP مع النشر" 
description: "نشر تطبيق PHP مع أداة نشر المصدر مفتوح المصدر وأتمتة سير عمل النشر. تحرير الميزات بسهولة وتراجع إلى الإصدار السابق." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "أتمتة عملية نشر تطبيق PHP مع أداة نشر PHP. سوف نتعلم كيفية إعداد Deployer واستخدامه لنشر تطبيق PHP." 
url: /ar/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## أتمتة عملية نشر تطبيق PHP باستخدام أداة نشر PHP. سوف نتعلم كيفية إعداد Deployer واستخدامه لنشر تطبيق PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="أداة نشر PHP">}}

إنها مهمة حاسمة للغاية لنشر التطبيق على الخادم بعد التطوير. غالبًا ما يتم إصدار ميزات جديدة وإصلاحات الأخطاء من قبل الفرق. لذلك ، من الأفضل للفرق التخلص من العمل اليدوي وأتمتة عملية نشر البرامج*  ***. سيسمح لفرق البرمجيات بالتركيز على المهام الأكثر أهمية. هناك العديد من أداة نشر المصدر المفتوح** هناك ، لكننا سنركز على **PHP Deployer**  في هذا البرنامج التعليمي. سنغطي القسم التالي في هذا المنشور.
* [  **ما هو النشر**  ][1]
* [  **تثبيت Deployer**  ][2]
* [  **نشر تطبيق PHP**  ][3]
* [  **الخلاصة**  ][4]

## ما هو النشر {#What}

[  **Deployer** ][5] عبارة عن أداة نشر مجانية ومفتوحة المصدر  **PHP**  . يتيح فرق البرمجيات لأتمتة سير عمل النشر للتطبيقات المستندة إلى PHP. من السهل جدًا التثبيت وسهل الاستخدام. يمكن لأي شخص من المبتدئين إلى الخبرة على مستوى الخبراء استخدامه بسرعة لنشر تطبيقات PHP. يأتي Deployer مع وصفات/نصوص خارج الصندوق لأطر PHP الشهيرة ، CMS ، وبرامج عربة التسوق. علاوة على ذلك ، يمكنك القيام بنشر  **لارافيل**  مع أداة نشر المصدر المفتوحة هذه  **. يمكن للمطور استخدام وصفات مدمجة لمشاريعه واستخدامها للنشر. علاوة على ذلك ، يمكنك بسهولة إنشاء البرنامج النصي للتثبيت/النشر باستخدام معالج**  PHP **. علاوة على ذلك ، توفر أداة النشر المجانية هذه**  ميزات ممتازة مثل عمليات النشر صفرًا ، وتراجعًا إلى الإصدار السابق ، SSH ، التنفيذ الموازي ، وغيرها الكثير.

## تثبيت Deployer {#Installing}

  * النشر يعتمد على PHP. يجب عليك التأكد من أن PHP يعمل على الخادم الخاص بك. ومع ذلك ، يمكنك استخدام الأمر أدناه لتثبيت PHP على Ubuntu.
```
sudo apt-get install php
```
  * قم بتشغيل الأوامر أدناه واحدة تلو الأخرى لتثبيت Deployer.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## نشر تطبيق PHP {#Deploy}

اتبع الإرشادات خطوة بخطوة إلى  **نشر تطبيق PHP**  مع النشر.
  * قم بإنشاء دليل للنشر وانتقل إلى الدليل الذي تم إنشاؤه حديثًا.
```
sudo mkdir deployer
cd deployer
```
  * قم بتشغيل الأمر أدناه لإنشاء برنامج نصي للتثبيت
```
dep init
```
  * سيُطلب منك مع الشاشة أدناه. هذا هو معالج النشر لإنشاء برنامج نصي للتثبيت الأساسي.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * أولاً ، تحتاج إلى تحديد نوع المشروع عن طريق إدخال رقم. يمكنك إدخال 0 ، إذا لم تكن متأكدًا من نوع المشروع أو مجرد التعرف على النشر.
  ثانياً ، تحتاج إلى توفير مسار مستودع GIT. إنها خطوة اختيارية ، يمكنك تخطيها وإضافة مسار لاحقًا.
  * في الخطوة الأخيرة ، يمكنك مشاركة المعلومات مع مجتمع Deployer عن طريق اختيار نعم أو إدخال لا لتخطيها.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
يجب عليك تغيير المتغيرات التالية لنشر تطبيق PHP الخاص بك.
*  **تعيين ("التطبيق" ، "My_Project") ؛**  - تعيين اسم التطبيق.
*  **SET ('RESPOSTORY' ، ") ؛**  -قم بتعيين مسار مستودع git مثل" git@github.com: masood/first-app-with-deployer.git '. يجب عليك تعيين مفتاح النشر على مستودع GitHub الخاص بك. يمكنك البحث عن كيفية إنشاء مفتاح SSH في الخادم ، إذا لم تكن على دراية به.
***المضيف ("project.com")
    -> SET ("deploy_path" ، "~/{{application}} ') ؛**-تعيين اسم المشروع وتحديد المسار حيث تريد تخزين الملفات لتطبيقك. سيبدو مثل/var/www/html/deployer.
أخيرًا ، قم بتشغيل الأمر أدناه لنشر تطبيق PHP الخاص بك.
```
dep deployer
```
إذا وجدت أي مشكلات مع الإصدار الجديد وترغب في التراجع عن التغييرات. يمكنك القيام بذلك عن طريق تشغيل الأمر أدناه.
```
dep rollback
```

## خاتمة {#خاتمة}

لقد ناقشنا حول النشر وكيفية تثبيته في هذا البرنامج التعليمي. علاوة على ذلك ، قمنا بإنشاء مبادئ توجيهية كاملة لنشر التطبيق المستند إلى PHP من مستودع GitHub. نأمل أن يساعدك منشور المدونة هذا على بدء  **نشر تطبيق PHP**  مع Deployer. علاوة على ذلك ، سنكتب المزيد عن أداة نشر PHP**في البرامج التعليمية القادمة.
أخيرًا ، [  **Containerize.com** ][6] في عملية ثابتة لكتابة منشورات المدونة على أحدث منتجات مفتوحة المصدر. لذلك ، ابق على اتصال مع هذه الفئة [ **الأدوات النشر هذه**  ][7] لآخر التحديثات.

## يستكشف
قد تجد الروابط التالية ذات الصلة:
* [  **Deployer**  ][8]
* [  **Jenkins**  ][9]
* [  **بدون طيار**  ][10]
* [  **Capistrano**  ][11]
* [  **Rancher**  ][12]
* [  **concourse**  ][13]
* [  **Ansible**  ][14]
* [  **GOCD**  ][15]
* [  **أفضل 5 أدوات نشر المصدر المفتوح في 2021**  ][16]
* [  **التكامل المستمر والنشر المستمر من خادم التحكم في المصدر**  ][17]



 [1]: #What
 [2]: #Installing
 [3]: #Deploy
 [4]: #Conclusion
 [5]: https://deployer.org/
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/deployment-tools/
 [8]: https://products.containerize.com/deployment-tools/deployer
 [9]: https://products.containerize.com/deployment-tools/jenkins/
 [10]: https://products.containerize.com/deployment-tools/drone/
 [11]: https://products.containerize.com/deployment-tools/capistrano/
 [12]: https://products.containerize.com/deployment-tools/rancher/
 [13]: https://products.containerize.com/deployment-tools/concourse/
 [14]: https://products.containerize.com/deployment-tools/ansible/
 [15]: https://products.containerize.com/deployment-tools/gocd/
 [16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
 [17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
