---
title: "كيفية تطوير البرنامج المساعد Osticket | انها برنامج HELPDESK" 
seoTitle: "كيفية تطوير البرنامج المساعد Osticket | انها برنامج HELPDESK" 
description: "اتبع هذا البرنامج التعليمي لمعرفة كيفية تطوير البرنامج المساعد Osticket. يدير برنامج HESERDESDESK اتصالات العملاء ويؤدي أتمتة حل المشكلات." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "قم بإنشاء مكون إضافي Osticket لإضافة ميزات إلى تثبيت Osticket الخاص بك. يساعد نظام التذاكر مفتوح المصدر الشركات على التعامل مع العملاء بكفاءة." 
url: /ar/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## قم بإنشاء مكون إضافي Osticket لإضافة ميزات إلى تثبيت Osticket الخاص بك. يساعد نظام التذاكر مفتوح المصدر الشركات على التعامل مع العملاء بكفاءة.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="انها برنامج HELPDESK">}}


## ملخص
مرحبًا بك في منشور آخر للاهتمام في سلسلة من [برنامج التذاكر "[1]. لقد نشرنا بعض منشورات المدونة حول مواضيع مثل [Helpdesk المعتمدة على التذاكر المجانية ونظام خدمة العملاء][2] ، [أتمتة نظام التذاكر باستخدام WordPress و Osticket][3] ، والبعض الآخر. ومع ذلك ، فإن Osticket هو نظام مساعدة مفتوح المصدر يعتمد على التذاكر مصممًا للعملاء للإبلاغ عن استفساراتهم وشكاوىهم لدعم الموظفين. يوفر نظام الدعم المجاني هذا وحدة إدارة الاستفسارات سهلة الاستخدام التي تحول الاستفسارات القادمة من الهاتف والبريد الإلكتروني والنماذج إلى تذاكر على الويب. إنه يوفر مجموعة واسعة من الميزات والخيارات التي تمكن موظفي الدعم من توفير تجربة دعم عميل لا تصدق للعملاء.
يعد نظام التذاكر المفتوح المصدر (Osticket) إطارًا مرنًا للتذاكر الدعم مرنًا يوفر العديد من الخيارات للمساعدة في تصميم جميع أجزاء دعم العميل مثل الرسائل المرسلة إلى العملاء والصفحات والإخطارات. في مقالته ، سوف نتعلم تطوير البرنامج المساعد Osticket لتعزيز الوظائف وفقًا لاحتياجاتنا. للقيام بذلك ، سوف نغطي الموضوعات التالية:
  * [لماذا تستخدم الإضافات؟][4]
  * [المتطلبات][5]
  * [كيفية تطوير البرنامج المساعد Osticket؟][6]
  * [الخلاصة][7]

## لماذا تستخدم الإضافات؟ {#why}

في هذا الموضوع ، سوف نتعلم كيفية إنشاء مكون إضافي بسيط لتوسيع الوظائف الأساسية لهذا البرنامج  **IT Helpdesk**  (Osticket). البرنامج المساعد هو جزء من البرنامج ، يمتد الوظائف الأساسية لأي تطبيق/برنامج. بالإضافة إلى ذلك ، هناك العديد من البرامج المفتوحة المصدر على مستوى المؤسسة والتي تحتوي على مجموعة كبيرة من المكونات الإضافية التي تمد الوظائف. علاوة على ذلك ، فإن برنامج المصدر المفتوح الشهير يشمل WordPress و Joomla وغيرها الكثير. قبل كل شيء ، تدعم المجتمعات النابضة بالحياة والحيوية وتطوير الإضافات حسب الاحتياجات. ومع ذلك ، تقدم الأطر وثائق شاملة فيما يتعلق بتطوير المكونات الإضافية. فيما يلي بعض الأسباب لتطبيقات دعم الإضافات:
  * يسمح لمطوري الطرف الثالث بإنشاء مكونات برامج تمدد وظائف التطبيق.
  * يسمح الإضافات بدمج ميزات جديدة بسهولة.
  * كما أنه لا يزيد من حجم وتعقيد التطبيق.
  * بالإضافة إلى أن المطورين يمكنهم الاحتفاظ وإدارة رمز الإضافات بشكل منفصل عن التطبيق الأساسي.

## متطلبات {#requirements}

يصف هذا القسم من برنامج  **HELPDESK**  دليل المتطلبات اللازمة لتطوير المكون الإضافي Osticket.
  * الإصدار PHP 5.6 أو أعلى
  * تثبيت Osticket
  * المعرفة الأساسية PHP

## كيفية تطوير البرنامج المساعد Osticket؟ {#how}

في هذا القسم ، سوف نمر بخطوات تطوير البرنامج المساعد لنظام التذاكر مفتوح المصدر (Osticket).
  * إنشاء مجلد البرنامج المساعد في /تضمين /ملحقات الإضافات. في هذا البرنامج التعليمي ، سنقوم بإنشاء مكون إضافي تجريبي يدمج نظام  **Osticket**  مع Redmine.
  * يجب أن يكون لها الملفات اللازمة التالية: plugin.php و config.php.
  * يحتوي ملف Plugin.php على وصف عام للمكون الإضافي. استخدم ما يلي رمز في ملف plugin.php:
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
  * ثم استبدل المعرف والاسم واسم المؤلف وأسماء فئة البرنامج المساعد من الرمز أعلاه.
  * بعد ذلك ، نحتاج إلى عرض خيارات تكوين البرنامج المساعد في الواجهة الخلفية لـ Osticket. إضافة رمز العينة التالي في ملف config.php.
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
  * نتيجة لذلك ، سيؤدي ذلك إلى إنشاء حقول اسم المستخدم وكلمة المرور على صفحة التكوين كما هو موضح هنا:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="دليل المبتدئين لتطوير البرنامج المساعد Osticket">}}

  * ما يلي عبارة
      * Textboxfield - مربع نص
      * TextAreefield - منطقة النص
      * Threadentryfield - منطقة نصية غنية ، تستخدم لخيوط المناقشة
      * DateTimefield - Jquery DatePicker
      * Phonefield - مربع نص محسن لأرقام الهواتف
      * Booleanfield - مربع الاختيار
      * Choicefield-حقل تحديد المنسدلة
      * SectionBreakfield - استراحة القسم الأفقي
  * بعد ذلك ، نحتاج إلى إنشاء ملف حيث سيتم تحديد وظيفة المكون الإضافي.
  * يجب أن يكون اسم الملف نفسه كما هو محدد في ملف plugin.php. أي redmine.php.
  * يجب أن يحمل هذا الفصل dynabicredmineplugin. تحقق من رمز العينة التالي:
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
  * جلب هذا الرمز قيم التكوين ويمكنك استخدام هذه القيم في وظائفك. في هذا الملف ، يمكنك إضافة وظيفة المكون الإضافي الخاص بك كمتطلباتك.

## خاتمة {#conclusion}

هذا يقودنا إلى نهاية منشور المدونة هذا. Osticket هو برنامج لإدارة التذاكر يوفر بنية مكونات إضافية للمطورين حتى يتمكنوا من إضافة وظائف جديدة وفقًا للمتطلبات. المكونات الإضافية هي المكونات التي تمد الوظيفة الأساسية لأي تطبيق/برنامج. في مقالته ، ناقشنا تطوير البرنامج المساعد لنظام دعم العملاء*  ***(Osticket) ، والذي يساعد المطورين على إضافة ميزات مخصصة وتحسينات وفقًا لمتطلباتهم. لذلك ، سيساعدك منشور المدونة هذا حقًا إذا كنت تتطلع إلى نشر برنامج** IT Helpdesk **لعملك. علاوة على ذلك ، هناك برنامج آخر**  HelpDesk التذاكر**والمقالات المذكورة في قسم "استكشاف" أدناه.
أخيرًا ، [Containerize.com][8] يكتب بشكل مستمر منشورات المدونة على منتجات ومواضيع مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع فئة [HelpDesk Ticketing Software][1] للتحديثات العادية. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][9] و [LinkedIn][10] و [Twitter][11].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [uvdesk][12]
  * [زماد][13]
  * [freescout][14]
  * [مساعدة][15]
  * [أفضل برنامج مفتوح المصدر ومجاني لتكنولوجيا المعلومات][16]
  * [Helpdeskning Free Properies Free Tickets القائمة على التذاكر ونظام خدمة العملاء][2]
  * [كيفية إعداد برنامج مكتب المساعدة عبر الإنترنت باستخدام Osticket][17]
  * [كيفية تنفيذ مستأجر متعدد في Osticket][18]
  * [أتمتة نظام التذاكر باستخدام WordPress و Osticket][3]
  * [أتمتة العمليات التجارية باستخدام برنامج مجاني ومفتوح المصدر][19]



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
