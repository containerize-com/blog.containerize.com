---
title: "نحوه توسعه افزونه Osticket | IT HelpDesk نرم افزار" 
seoTitle: "نحوه توسعه افزونه Osticket | IT HelpDesk نرم افزار" 
description: "برای یادگیری نحوه توسعه افزونه Osticket ، این آموزش را دنبال کنید. این نرم افزار IT HelpDesk ارتباطات مشتری را مدیریت می کند و وضوح مسئله را خودکار می کند." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "یک افزونه Osticket ایجاد کنید تا ویژگی های خود را در نصب Osticket اضافه کنید. این سیستم بلیط فروشی منبع باز به مشاغل کمک می کند تا مشتریان را به طور کارآمد اداره کنند." 
url: /fa/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## یک افزونه Osticket ایجاد کنید تا ویژگی های خود را در نصب استیکت اضافه کنید. این سیستم بلیط فروشی منبع باز به مشاغل کمک می کند تا مشتریان را به طور کارآمد اداره کنند.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="IT HelpDesk نرم افزار">}}


## بررسی اجمالی
به یک پست وبلاگ جالب دیگر در مجموعه [نرم افزار بلیط راهنمایدسک] خوش آمدید [1]. ما برخی از پست های وبلاگ را در موضوعاتی از قبیل [محبوبیت رایگان مبتنی بر بلیط فروشی و سیستم مراقبت از مشتری] منتشر کرده ایم [2] ، [سیستم بلیط فروشی با استفاده از وردپرس و استیکت][3] و برخی دیگر. با این حال ، Osticket یک سیستم HelpDesk مبتنی بر منبع باز است که برای مشتریان طراحی شده است تا نمایش داده ها و شکایات خود را برای پشتیبانی از کارمندان گزارش دهند. این سیستم پشتیبانی رایگان ماژول مدیریت پرس و جو را آسان می کند که سوالات حاصل از تلفن ، ایمیل و فرم ها را به بلیط های مبتنی بر وب تبدیل می کند. این برنامه طیف گسترده ای از ویژگی ها و گزینه ها را ارائه می دهد که کارکنان پشتیبانی را قادر می سازد یک تجربه پشتیبانی باورنکردنی مشتری را برای مشتریان ارائه دهند.
این سیستم بلیط بلیط منبع باز (OSTICKET) یک چارچوب بلیط پشتیبانی کاملاً انعطاف پذیر است که گزینه های بی شماری را برای کمک به خیاط بخش های بخش پشتیبانی از مشتری مانند پیام های ارسال شده به مشتری ، صفحات و اعلان ها ارائه می دهد. در مقاله خود ، ما توسعه افزونه Osticket را برای تقویت عملکرد با توجه به نیازهای خود یاد خواهیم گرفت. برای انجام این کار ، ما موضوعات زیر را پوشش خواهیم داد:
  * [چرا از پلاگین ها استفاده می کنیم؟][4]
  * [الزامات][5]
  * [چگونه افزونه Osticket را توسعه دهیم؟][6]
  * [نتیجه گیری][7]

## چرا از افزونه ها استفاده می کنیم؟   {#چرا}
در این موضوع ، ما یاد خواهیم گرفت که چگونه یک افزونه ساده ایجاد کنیم تا عملکرد اصلی این نرم افزار  **IT HelpDesk**  (Osticket) را گسترش دهد. افزونه یک قطعه نرم افزار است که عملکرد اصلی هر برنامه/نرم افزار را گسترش می دهد. علاوه بر این ، بسیاری از نرم افزارهای منبع باز در سطح شرکت وجود دارد که دارای پشته های عظیمی از افزونه ها است که قابلیت های آن را گسترش می دهد. علاوه بر این ، این نرم افزار محبوب منبع باز شامل وردپرس ، جوملا و موارد دیگر است. مهمتر از همه ، جوامع پر جنب و جوش و زنده طبق نیازها از افزونه ها پشتیبانی و توسعه می دهند. با این حال ، چارچوب ها مستندات جامع در مورد توسعه افزونه ها را ارائه می دهند. در زیر برخی از دلایل برنامه ها برای پشتیبانی از افزونه ها آورده شده است:
  * به توسعه دهندگان شخص ثالث اجازه می دهد تا مؤلفه های نرم افزاری ایجاد کنند که عملکرد یک برنامه را گسترش می دهد.
  * افزونه ها به راحتی می توانند ویژگی های جدید را ادغام کنند.
  * همچنین اندازه و پیچیدگی یک برنامه را افزایش نمی دهد.
  * و همچنین توسعه دهندگان می توانند کد افزونه ها را به طور جداگانه از برنامه اصلی نگه دارند و مدیریت کنند.

## الزامات   {#Requirements
این بخش از راهنمای  **IT HelpDesk**  راهنمای مورد نیاز برای توسعه افزونه Osticket را شرح می دهد.
  * نسخه PHP 5.6 یا بالاتر
  * نصب استیکت
  * دانش اساسی PHP

## چگونه افزونه Osticket را توسعه دهیم؟   {#چگونه}
در این بخش ، مراحل توسعه افزونه این سیستم بلیط منبع باز (OSTICKET) را طی خواهیم کرد.
  * پوشه افزونه را در فهرست /شامل /افزونه ها ایجاد کنید. در این آموزش یک افزونه نسخه ی نمایشی ایجاد خواهیم کرد که  **سیستم Osticket**  را با Redmine ادغام می کند.
  * باید پرونده های لازم را دنبال کند: plugin.php و config.php.
  * پرونده plugin.php حاوی توضیحات کلی از افزونه است. از کد نمونه زیر در پرونده plugin.php استفاده کنید:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * سپس شناسه ، نام ، نام نویسنده و نام کلاس افزونه را از کد بالا جایگزین کنید.
  * پس از آن ، ما باید گزینه های پیکربندی افزونه را در پس زمینه Osticket نمایش دهیم. کد نمونه زیر را به پرونده config.php اضافه کنید.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * در نتیجه ، این امر باعث ایجاد زمینه های نام کاربری و رمز عبور در صفحه پیکربندی همانطور که در اینجا نشان داده شده است ، ایجاد می شود:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="راهنمای مبتدی برای توسعه افزونه Osticket">}}

  * در زیر لیستی از قسمتهای کلاس موجود است ، آنها در `[install_root]/شامل/class.forms.php` تعریف شده اند:
      * TextBoxfield - جعبه متن
      * Textareafield - منطقه متن
      * Threadentryfield - منطقه متن غنی ، برای موضوعات بحث استفاده می شود
      * DateTimefield - jQuery DatePicker
      * Fonefield - جعبه متن برای شماره تلفن بهینه شده است
      * Booleanfield - کادر انتخاب
      * Leokfield-زمینه انتخاب کشویی
      * Seadbreakfield - بخش افقی
  * پس از آن ، ما باید پرونده ای را ایجاد کنیم که عملکرد افزونه تعریف شود.
  * نام پرونده باید مطابق با پرونده plugin.php باشد. یعنی redmine.php.
  * این باید کلاس DynabicRedminePlugin را نگه دارد. کد نمونه زیر را بررسی کنید:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * این کد مقادیر پیکربندی را بدست آورد و می توانید از این مقادیر در توابع خود استفاده کنید. در این پرونده می توانید عملکرد افزونه خود را به عنوان نیاز خود اضافه کنید.

## نتیجه گیری   {#conclusion}
این ما را به پایان این پست وبلاگ می رساند. Osticket یک نرم افزار مدیریت بلیط است که ساختار افزونه ها را برای توسعه دهندگان ارائه می دهد تا بتوانند مطابق با نیاز ، عملکرد جدیدی را اضافه کنند. افزونه ها مؤلفه هایی هستند که عملکرد اصلی هر برنامه/نرم افزار را گسترش می دهند. در مقاله خود ، ما در مورد توسعه پلاگین این سیستم پشتیبانی مشتری ** **(OSTICKET) بحث کرده ایم ، که به توسعه دهندگان کمک می کند تا با توجه به نیازهای آنها ، ویژگی ها و پیشرفت های سفارشی را اضافه کنند. بنابراین ، اگر به دنبال استقرار یک نرم افزار **  IT HelpDesk ** برای تجارت خود هستید ، این پست وبلاگ واقعاً به شما کمک می کند. علاوه بر این ، نرم افزار بلیط های HelpDesk**  و مقالاتی که در بخش "اکتشاف" در زیر ذکر شده است ، وجود دارد.
سرانجام ، [Containerize.com][8] به طور مداوم در حال نوشتن پست های وبلاگ در مورد محصولات و موضوعات منبع باز بیشتر است. بنابراین ، لطفاً برای به روزرسانی های منظم با دسته [نرم افزار بلیط راهنمای HelpDesk][1] در تماس باشید. علاوه بر این ، شما می توانید ما را در حساب های رسانه های اجتماعی [Facebook][9] ، [LinkedIn][10] و [توییتر][11] دنبال کنید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [uvdesk][12]
  * [Zammad][13]
  * [freescout][14]
  * [کمک][15]
  * [بهترین منبع باز و نرم افزار میز راهنما IT رایگان][16]
  * [راهنمای کمکهای مالی رایگان مبتنی بر بلیط و سیستم مراقبت از مشتری][2]
  * [نحوه راه اندازی نرم افزار میز راهنما آنلاین با استفاده از OSTICKET][17]
  * [نحوه اجرای چند اجاره در استیک][18]
  * [سیستم بلیط فروشی با استفاده از وردپرس و استیکت][3]
  * [عملکردهای تجاری را با استفاده از نرم افزار منبع آزاد و آزاد][19]

  
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
