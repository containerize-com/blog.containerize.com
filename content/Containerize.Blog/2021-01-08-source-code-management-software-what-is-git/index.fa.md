---
title: "نرم افزار مدیریت کد منبع | git چیست؟" 
seoTitle: "نرم افزار مدیریت کد منبع | git چیست؟" 
description: "git چیست؟ GIT یک نرم افزار مدیریت کد منبع رایگان است که به شما امکان می دهد تغییرات را در پرونده های منبع خود ضبط کرده و به طور مؤثر پروژه ها را مدیریت کنید." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "در این مقاله ، ما بررسی خواهیم کرد که Git & amp ؛ GIT چگونه کار می کند؟ GIT یک سیستم کنترل نسخه است که برای مدیریت کد منبع ، Track & Amp طراحی شده است. نسخه های ورود به سیستم" 
url: /fa/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## در این مقاله ، ما بررسی خواهیم کرد که git و چگونه git کار می کند؟ GIT یک سیستم کنترل نسخه است که برای مدیریت کد منبع ، نسخه های پیگیری و ورود به سیستم طراحی شده است.

{{< figure align=center src="images/version-control-banner.png" alt="نرم افزار مدیریت کد منبع">}}


## بررسی اجمالی
شما را به عنوان یک توسعه دهنده نرم افزاری که روی یک پروژه کار می کند تصور کنید. شما بیش از یک نفر روی آن کار می کنید. و ، یک پرونده واحد وجود دارد که حاوی کد منبع است. از آنجا که همه آنها در کد تغییراتی ایجاد می کنند ، هر بار که تغییر ایجاد می کنند ، نسخه های مختلفی از پرونده را خواهند داشت. بنابراین ، اکنون چگونه می توانیم نسخه های مختلف همان پرونده را مدیریت کنیم؟ این جایی است که نرم افزار مدیریت کد منبع وارد می شود. این به شما کمک می کند نسخه های مختلف همان پرونده را مدیریت و ادغام کنید. و حتی به شما اجازه می دهد تاریخ تغییر را پیگیری کنید. و همیشه می توانید مطمئن باشید که چه کسی تغییراتی را در پرونده ایجاد کرده است و این تغییرات چیست.
در این مقاله ، ما در مورد سیستم کنترل نسخه GIT آشنا خواهیم شد. چگونه می توانید از آن برای مدیریت پرونده های کد منبع توسعه نرم افزار یا هر پرونده دیگر استفاده کنید. بنابراین بیایید شروع کنیم.
*  **[سیستم کنترل نسخه چیست][1]**  
*  **[git چیست][2]**  
*  **[چگونه git کار می کند][3]**  
*  **[نصب git][4]**  
*  **[تنظیم مخزن][5]**  
*  **[ذخیره تغییرات در مخزن][6]**  
 **[وضعیت مخزن را بررسی کنید][7]** 
*  **[تغییرات را برگردانید یا تغییر دهید][8]**  
*  **[نتیجه گیری][9]**  

## سیستم کنترل نسخه چیست {#version-control}

کنترل نسخه سیستمی است که با گذشت زمان تغییر در یک پرونده یا مجموعه ای از پرونده ها را ثبت می کند تا بتوانید بعداً نسخه های خاص را به یاد بیاورید. اگر شما یک توسعه دهنده نرم افزار هستید و می خواهید نسخه های پرونده کد منبع را نگه دارید ، نرم افزار مدیریت کد منبع یک چیز بسیار مفید برای شما است. این امکان را به شما می دهد تا پرونده های منتخب را به حالت قبلی برگردانید ، کل پروژه را به حالت قبلی برگردانید ، تغییرات را با گذشت زمان مقایسه کنید ، ببینید چه کسی آخرین چیزی است که ممکن است باعث ایجاد مشکل شود ، چه کسی یک مسئله را معرفی کرده است و چه زمانی و بیشتر. استفاده از کنترل نسخه به این معنی است که شما هرگز نگران از دست دادن کار خود نیستید.

## گیت چیست {#git}

GIT یک سیستم کنترل نسخه رایگان و باز است که برای رسیدگی به همه چیز از پروژه های کوچک تا بسیار بزرگ با سرعت و کارآیی طراحی شده است. بر خلاف سیستم های کنترل نسخه متمرکز قدیمی مانند SVN و CVS ، کنترل نسخه GIT توزیع می شود. هر توسعه دهنده سابقه کامل مخزن کد خود را به صورت محلی دارد. اگرچه ، این کلون اولیه را کمی کند می کند. اما ، پس از آن ، تمام تعهدات و سایر عملیات بسیار سریع است. GIT به شما امکان می دهد چندین شاخه محلی داشته باشید که می تواند کاملاً مستقل از یکدیگر باشد.

## چگونه git کار می کند {#how}

با استفاده از GIT می توانید در مخزن محلی خود تغییراتی ایجاد کرده و آن را به یک ابزار میزبانی فشار دهید. یا می توانید تغییرات دیگران را از ابزار میزبانی به دستگاه محلی خود بکشید. در اینجا یک مرور کلی در مورد نحوه عملکرد نرم افزار مدیریت کد منبع (GIT) ارائه شده است.
  1. یک "مخزن" با هر ابزار میزبانی (مانند GitHub ، GitLab یا Bitbucket) ایجاد کنید
  2. مخزن را به دستگاه محلی خود کلون کنید
  3. پرونده ای را به مخزن محلی خود اضافه کنید
  4- تغییر (مرتکب) تغییر در مخزن محلی خود
  5. تغییرات خود را به شعبه استاد خود در میزبانی از راه دور "فشار دهید"
  6. با یک ابزار میزبانی GIT تغییر در پرونده خود ایجاد کنید و مرتکب شوید
  7. تغییرات در دستگاه محلی خود را "بکشید"
  8. ایجاد یک "شاخه" (نسخه) ، تغییر ، مرتکب تغییر
  9. "درخواست کشش" را باز کنید (پیشنهاداتی را در شعبه مستر پیشنهاد دهید)
 10. شعبه خود را به شعبه استاد "ادغام کنید"

## git را نصب کنید {#install}

روش های مختلفی برای نصب GIT در رایانه شما وجود دارد. می توانید آن را به صورت بسته یا از طریق یک نصب کننده دیگر نصب کنید ، یا کد منبع را بارگیری کرده و خودتان کامپایل کنید.

### نصب در لینوکس
اگر می خواهید ابزارهای اصلی GIT را از طریق یک نصب کننده باینری نصب کنید ، می توانید به طور کلی این کار را از طریق ابزار مدیریت بسته ای که همراه با توزیع شما است انجام دهید. برای فدورا (یا هر توزیع مبتنی بر RPM از نزدیک ، مانند RHEL یا CentOS) ، می توانید از "DNF" استفاده کنید
```
$ sudo dnf install git-all
```
اگر در توزیع مبتنی بر دبیان ، مانند اوبونتو ، "مناسب" را امتحان کنید
```
$ sudo apt install git-all
```

### نصب در MACO
روش های مختلفی برای نصب Git در Mac وجود دارد. ساده ترین کار نصب ابزارهای خط فرمان XCode است. در Mavericks (10.9) یا بالاتر می توانید این کار را به سادگی با تلاش برای اجرای  **git**  از ترمینال برای اولین بار انجام دهید.
```
$ git --version
```
اگر قبلاً آن را نصب نکرده اید ، باعث می شود که آن را نصب کنید.

## تنظیم مخزن {#init}

مخزن GIT ذخیره سازی مجازی برای پرونده های کد شماست. این امکان را به شما می دهد تا نسخه های مختلفی از کد خود را ذخیره کنید که در صورت لزوم می توانید به آنها دسترسی پیدا کنید.
برای ایجاد یک repo جدید ، از دستور  **git init** استفاده خواهید کرد. Git init یک دستور یک بار است که در طول تنظیم اولیه یک repo جدید از آن استفاده می کنید. اجرای این دستور یک زیر مجموعه جدید .git در فهرست کار فعلی شما ایجاد می کند. این همچنین یک شعبه جدید **Master**  ایجاد می کند.

{{< figure align=center src="images/git-init-2.gif" alt="گیت چیست">}}


## تغییرات در مخزن را ذخیره کنید {#commit}

اکنون که یک مخزن اولیه دارید ، می توانید تغییرات نسخه پرونده را به آن انجام دهید.

{{< figure align=center src="images/git-add-commit-1.gif" alt="GIT تعهد">}}


## وضعیت مخزن را بررسی کنید {#status}

فرماندهی  **GIT وضعیت** وضعیت فهرست کار و منطقه مرحله بندی را نشان می دهد. این امکان را به شما می دهد تا ببینید که چه تغییراتی روی هم قرار گرفته است ، که آنها نیستند ، و کدام پرونده ها توسط نرم افزار مدیریت کد منبع (GIT) ردیابی نمی شوند. خروجی وضعیت هیچ اطلاعاتی در مورد تاریخچه متعهد پروژه به شما نشان نمی دهد. برای این کار ، شما باید از **git log**  استفاده کنید.

{{< figure align=center src="images/git-status-2.gif" alt="نرم افزار مدیریت کد منبع">}}

ورود به سیستم GIT خروجی را به شما نشان می دهد
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## تغییرات خود را برگردانید {#revert}

می توانید از دستور Git Revert برای خنثی کردن تغییری که قبلاً در repo خود مرتکب شده اید استفاده کنید. ابتدا از دستور "git log" برای دریافت لیست تعهدات استفاده کنید
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
سپس ، تصمیم بگیرید که کدام متعهد را می خواهید برگردانید. و ، از دستور git revert مانند زیر استفاده کنید
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
همانطور که می بینید Git Revert تعهد جدیدی ایجاد کرد که تغییراتی را که در "تعهد دوم" ایجاد شده است ، خنثی می کند.

## نتیجه
اکنون که کل مقاله را خوانده اید ، جایی که ما بحث کردیم که GIT و چگونه GIT کار می کند ، باید از نرم افزار مدیریت کد منبع آگاه باشید. هدف از آن چیست و چرا به آن احتیاج دارید. ما بررسی کردیم که چگونه GIT می تواند به شما در مدیریت کد منبع پروژه کمک کند. و ما همچنین در مورد نحوه استفاده از دستورات مختلف GIT برای اولیه سازی و مخزن ، ذخیره تغییرات خود و نحوه خنثی کردن تغییرات استفاده کردیم. در آموزش های آینده ما ، ما GIT را بیشتر بررسی خواهیم کرد و چگونه می توانیم از دستورات مختلف برای مدیریت بهتر کد شما استفاده کنیم.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
* [  **اتوماسیون گردش کار توسعه نرم افزار با اقدامات GitHub**  ][10]
*  **[نحوه تنظیم خط لوله استقرار مداوم با Gitlab CI/CD][11]**  
*  **[شاخه ها را درک کنید و یاد بگیرید و درخواست ها را در git بکشید][12]**  
 **[5 سیستم کنترل نسخه منبع باز در سال 2021][13]** 



 [1]: #version-control
 [2]: #git
 [3]: #how
 [4]: #install
 [5]: #init
 [6]: #commit
 [7]: #status
 [8]: #revert
 [9]: #conclusion
 [10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
 [11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
 [12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
 [13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/