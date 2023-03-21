---
title: "如何开发Osticket插件|它可以帮助数据库软件" 
seoTitle: "如何开发Osticket插件|它可以帮助数据库软件" 
description: "请按照本教程学习如何开发Osticket插件。它可以帮助演说家软件管理客户通信并自动化问题解决方案。" 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "创建一个osticket插件，以将功能添加到您的托赛安装中。这种开源票务系统可帮助企业有效地处理客户。" 
url: /zh/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## 创建一个osticket插件，以将功能添加到您的术中安装中。这种开源票务系统可帮助企业有效地处理客户。

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="它可以帮助数据库软件">}}


## 概述
欢迎来到[Helpdesk票务软件]系列中的另一篇有趣的博客文章[1]。我们已经发表了一些有关主题的博客文章，例如[流行的基于HelpDesk和客户服务系统的免费票务][2]，[使用WordPress和Osticket自动售票系统][3]等等。但是，Osticket是一种基于开源票务的Helpdesk系统，旨在客户报告其查询和投诉以支持员工。此免费支持系统提供了易于使用的查询管理模块，该模块将来自电话，电子邮件和表格的查询转换为基于Web的门票。它提供了广泛的功能和选项，使员工能够为客户提供令人难以置信的客户支持体验。
此开源票务系统（Osticket）是一个完全灵活的支持票务框架，提供了许多选项，可帮助定制客户支持的所有部分，例如发送给客户，页面和通知的消息。在他的文章中，我们将学习Osticket插件开发，以根据我们的需求增强功能。为此，我们将介绍以下主题：
  * [为什么使用插件？][4]
  * [要求][5]
  * [如何开发Osticket的插件？][6]
  * [结论][7]

## 为什么要使用插件？   {#为什么}
在此主题中，我们将学习如何创建一个简单的插件来扩展此**的核心功能**软件**（osticket）。插件是一块软件，可扩展任何应用程序/软件的核心功能。此外，还有许多企业级开源软件具有大量扩展功能的插件。此外，这些受欢迎的开源软件包括WordPress，Joomla等。最重要的是，充满活力和活着的社区根据需求支持和开发插件。但是，框架提供了有关插件开发的全面文档。以下是应用程序支持插件的一些原因：
  *它允许第三方开发人员创建扩展应用程序功能的软件组件。
  *插件允许轻松整合新功能。
  *另外，它不会增加应用程序的大小和复杂性。
  *以及开发人员可以将插件代码与核心应用程序分开保存和管理。

## 要求 {#requirements}
**的这一部分HERSEDESK软件**指南描述了开发Osticket插件所需的要求。
  * PHP版本5.6或更高版本
  * Osticket安装
  *基本的PHP知识

## 如何开发Osticket的插件？   {#如何}
在本节中，我们将仔细研究此开源票务系统（Osticket）的插件开发步骤。
  *在 /include /插件目录中创建插件夹。在本教程中，我们将创建一个演示插件，该插件将**Osticket System** 与Redmine集成在一起。
  *它应该具有以下必要的文件：plugin.php和config.php。
  * plugin.php文件包含插件的常规描述。在plugin.php文件中使用以下示例代码：
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
  *然后从上述代码中替换ID，名称，作者名称和插件类名称。
  *之后，我们需要在Osticket的后端显示插件配置选项。将以下示例代码添加到config.php文件中。
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
  *结果，这将在配置页面上创建用户名和密码字段，如下所示：

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="开发Osticket插件的初学者指南">}}

  *以下是可用的类字段的列表，它们在“ [install_root]/include/class.forms.php`：：
      * TextboxField  - 文本框
      * Textareafield  - 文本区域
      * threadentryfield  - 丰富的文本区域，用于讨论线程
      * DateTimeField  -  jQuery DatePicker
      * Phonefield  - 针对电话号码优化的文本框
      *布尔菲尔德 - 复选框
      * ChoiceField  - 下拉选择字段
      * Section Breakfield  - 水平部分休息
  *之后，我们需要创建将定义插件功能的文件。
  *文件名应该与plugin.php文件中定义的名称相同。即redmine.php。
  *这将必须保持Dynabicredmineplugin级。查看以下示例代码：
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
  *此代码获取配置值，您可以在功能中使用这些值。在此文件中，您可以将插件的功能添加为您的要求。

## 结论 {#conclusion}
这使我们进入了此博客文章的结尾。 Osticket是一种票务管理软件，可为开发人员提供插件结构，因此他们可以根据需求添加新功能。插件是扩展任何应用程序/软件的核心功能的组件。在他的文章中，我们讨论了此**客户支持系统**（Osticket）的插件开发，该系统可帮助开发人员根据其要求添加自定义功能和增强功能。因此，如果您想为您的业务部署**帮助桌子软件**，则此博客文章确实会为您提供帮助。此外，下面的“ Explore”部分中提到的其他 **HelpDesk票务软件** 和文章。
最后，[Containerize.com][8]不断地撰写有关进一步开源产品和主题的博客文章。因此，请与常规更新的[HelpDesk票务软件][1]类别保持联系。此外，您可以在我们的社交媒体帐户[Facebook][9]，[LinkedIn][10]和[Twitter][11]上关注我们。

## 探索
您可能会发现以下链接相关：
  * [uvdesk][12]
  * [Zammad][13]
  * [freescout][14]
  * [helpy][15]
  * [最佳开源和免费IT帮助台软件][16]
  * [流行的基于免费售票员的服务台和客户服务系统][2]
  * [如何使用osticket设置在线帮助台软件][17]
  * [如何在osticket中实现多租赁][18]
  * [使用WordPress和Osticket自动票务系统][3]
  * [使用免费和开源软件自动化业务运营][19]

  
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
