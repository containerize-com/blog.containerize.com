---
title: "استقرار برنامه PHP را با Diployer خودکار کنید" 
seoTitle: "استقرار برنامه PHP را با Diployer خودکار کنید" 
description: "استقرار برنامه PHP با ابزار استقرار منبع باز و اتوماسیون گردش کار. به راحتی ویژگی ها و بازگرداندن نسخه قبلی را منتشر کنید." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "فرآیند استقرار برنامه PHP را با ابزار استقرار PHP خودکار کنید. ما یاد می گیریم که چگونه Diplener را تنظیم کرده و از آن برای استقرار برنامه PHP استفاده کنیم." 
url: /fa/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## فرآیند استقرار برنامه PHP با ابزار استقرار PHP. ما یاد می گیریم که چگونه Diplener را تنظیم کرده و از آن برای استقرار برنامه PHP استفاده کنیم.

{{< figure align=center src="images/deployer-blog-post.png" alt="ابزار استقرار PHP">}}

این یک کار بسیار مهم برای استقرار برنامه در سرور پس از توسعه است. ویژگی های جدید و رفع اشکال اغلب توسط تیم ها منتشر می شود. بنابراین ، برای تیم ها ترجیح داده می شود که کار دستی را از بین ببرند و فرآیند استقرار نرم افزار  **را به صورت خودکار انجام دهند. این امر به تیم های نرم افزاری اجازه می دهد تا روی کارهای مهم تر تمرکز کنند. چندین ابزار استقرار منبع باز** در آنجا وجود دارد اما ما در این آموزش روی استقرار **PHP**  تمرکز خواهیم کرد. بخش زیر را در این پست پوشش خواهیم داد.
* [  **استقرارگر**  ][1]
* [  **نصب مستقر**  ][2]
* [  **برنامه PHP را مستقر کنید**  ][3]
* [  **نتیجه گیری**  ][4]

## مستقل چیست {#What}

[  **Diventeer** ][5] یک ابزار رایگان و منبع باز است  **ابزار استقرار PHP**  . این امکان را برای تیم های نرم افزاری برای خودکارسازی گردش کار استقرار برای برنامه های مبتنی بر PHP فراهم می کند. نصب بسیار ساده و استفاده آسان است. هرکسی از تجربه سطح مبتدی تا متخصص می تواند به سرعت از آن برای استقرار برنامه های PHP استفاده کند. Divelipleer با دستور العمل های خارج از جعبه/اسکریپت برای چارچوب های محبوب PHP ، CMS و نرم افزار سبد خرید همراه است. علاوه بر این ، شما می توانید با استفاده از این ابزار استقرار منبع باز*  ***استقرار Laravel**  را انجام دهید. توسعه دهنده می تواند از دستور العمل های داخلی برای پروژه های خود استفاده کند و از آنها برای استقرار استفاده کند. علاوه بر این ، شما می توانید به راحتی Script Install/Deploy را با Wizard Diventioner **PHP ایجاد کنید. علاوه بر این ، این**  ابزار استقرار رایگان**ویژگی های عالی مانند استقرار صفر پایین ، بازگرداندن به نسخه قبلی ، SSH ، اجرای موازی و موارد دیگر را ارائه می دهد.

## نصب مستقل {#Installing}

  * استقرارگر به PHP بستگی دارد. شما باید اطمینان حاصل کنید که PHP روی سرور شما اجرا می شود. با این حال ، می توانید از دستور زیر برای نصب PHP در اوبونتو استفاده کنید.
```
sudo apt-get install php
```
  * در زیر دستورات یک به یک را برای نصب Diventeer اجرا کنید.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## استقرار برنامه PHP {#Deploy}

دستورالعمل های گام به گام را برای  **استقرار برنامه PHP**  با Deployer دنبال کنید.
  * یک دایرکتوری برای استقرار ایجاد کرده و به دایرکتوری تازه ایجاد شده بروید.
```
sudo mkdir deployer
cd deployer
```
  * دستور زیر را برای تولید اسکریپت نصب اجرا کنید
```
dep init
```
  * با صفحه زیر از شما خواسته می شود. این یک جادوگر مستقل برای ایجاد اسکریپت نصب اساسی است.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * ابتدا باید با وارد کردن یک شماره ، نوع پروژه را انتخاب کنید. اگر در مورد نوع پروژه مطمئن نیستید یا فقط با Diverseer آشنا نمی شوید ، می توانید 0 را وارد کنید.
  * ثانیا ، شما باید یک مسیر مخزن GIT را ارائه دهید. این یک مرحله اختیاری است ، می توانید از آن پرش کنید و بعداً مسیری را اضافه کنید.
  * در آخرین مرحله ، شما می توانید با انتخاب بله یا وارد NO شوید تا از آن استفاده کنید.
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
شما باید متغیرهای زیر را برای استقرار برنامه PHP خود تغییر دهید.
 **تنظیم ("برنامه" ، "my_project") ؛** - نام برنامه را تنظیم کنید.
 **مجموعه ("مخزن" ، ") ؛** -تنظیم مسیر مخزن git مانند‘ git@github.com: masood/first-app-with-deployer.git '. شما باید کلید Deploy را در مخزن GitHub خود تنظیم کنید. اگر با آن آشنا نیستید ، ممکن است نحوه ایجاد یک کلید SSH را در سرور جستجو کنید.
** میزبان ("project.com")
    -> set (‘Deploy_Path" ، ‘~/{{Application}} ') ؛**-نام پروژه را تنظیم کنید و مسیری را که می خواهید پرونده ها را برای برنامه خود ذخیره کنید تعریف کنید. به نظر می رسد مانند/var/www/html/desplipleer.
در آخر ، دستور زیر را برای استقرار برنامه PHP خود اجرا کنید.
```
dep deployer
```
اگر در مورد نسخه جدید مشکلی پیدا کردید و می خواهید تغییرات برگشتی را تغییر دهید. شما می توانید این کار را با اجرای دستور زیر انجام دهید.
```
dep rollback
```

## نتیجه {#نتیجه}

ما در مورد Diverseer و نحوه نصب آن در این آموزش بحث کرده ایم. علاوه بر این ، ما دستورالعمل کاملی را برای استقرار برنامه مبتنی بر PHP از مخزن GitHub ایجاد کرده ایم. امیدوارم این پست وبلاگ به شما کمک کند تا  **برنامه PHP را با استقرار مستقر کنید. علاوه بر این ، ما در مورد این ابزار استقرار**  PHP**در آموزش های آینده بیشتر خواهیم نوشت.
سرانجام ، [  **Containerize.com** ][6] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [ **ابزارهای استقرار**  ][7] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
* [  **Diventeer**  ][8]
* [  **جنکینز**  ][9]
* [  **هواپیماهای بدون سرنشین**  ][10]
* [  **capistrano**  ][11]
* [  **رانچر**  ][12]
* [  **Concourse**  ][13]
* [  **ansible**  ][14]
* [  **GOCD**  ][15]
* [  **5 ابزار برتر استقرار منبع باز در سال 2021**  ][16]
* [  **ادغام مداوم و استقرار مداوم از سرور کنترل منبع**  ][17]



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
