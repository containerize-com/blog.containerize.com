---
title: "如何開發Osticket插件|它可以幫助數據庫軟件" 
seoTitle: "如何開發Osticket插件|它可以幫助數據庫軟件" 
description: "請按照本教程學習如何開發Osticket插件。它可以幫助演說家軟件管理客戶通信並自動化問題解決方案。" 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "創建一個osticket插件，以將功能添加到您的托賽安裝中。這種開源票務系統可幫助企業有效地處理客戶。" 
url: /zh-hant/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## 創建一個osticket插件，以將功能添加到您的術中安裝中。這種開源票務系統可幫助企業有效地處理客戶。

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="它可以幫助DESKSK軟件">}}


## 概述
歡迎來到[Helpdesk票務軟件]系列中的另一篇有趣的博客文章[1]。我們已經發表了一些有關主題的博客文章，例如[流行的基於HelpDesk和客戶服務系統的免費票務][2]，[使用WordPress和Osticket自動售票系統][3]等等。但是，Osticket是一種基於開源票務的Helpdesk系統，旨在客戶報告其查詢和投訴以支持員工。此免費支持系統提供了易於使用的查詢管理模塊，該模塊將來自電話，電子郵件和表格的查詢轉換為基於Web的門票。它提供了廣泛的功能和選項，使員工能夠為客戶提供令人難以置信的客戶支持體驗。
此開源票務系統（Osticket）是一個完全靈活的支持票務框架，提供了許多選項，可幫助定制客戶支持的所有部分，例如發送給客戶，頁面和通知的消息。在他的文章中，我們將學習Osticket插件開發，以根據我們的需求增強功能。為此，我們將介紹以下主題：
  * [為什麼使用插件？][4]
  * [要求][5]
  * [如何開發Osticket的插件？][6]
  * [結論][7]

## 為什麼要使用插件？   {#為什麼}
在此主題中，我們將學習如何創建一個簡單的插件來擴展此**的核心功能**軟件**（osticket）。插件是一塊軟件，可擴展任何應用程序/軟件的核心功能。此外，還有許多企業級開源軟件具有大量擴展功能的插件。此外，這些受歡迎的開源軟件包括WordPress，Joomla等。最重要的是，充滿活力和活著的社區根據需求支持和開發插件。但是，框架提供了有關插件開發的全面文檔。以下是應用程序支持插件的一些原因：
  *它允許第三方開發人員創建擴展應用程序功能的軟件組件。
  *插件允許輕鬆整合新功能。
  *另外，它不會增加應用程序的大小和復雜性。
  *以及開發人員可以將插件代碼與核心應用程序分開保存和管理。

## 要求 {#requirements}
**的這一部分HERSEDESK軟件**指南描述了開發Osticket插件所需的要求。
  * PHP版本5.6或更高版本
  * Osticket安裝
  *基本的PHP知識

## 如何開發Osticket的插件？   {#如何}
在本節中，我們將仔細研究此開源票務系統（Osticket）的插件開發步驟。
  *在 /include /插件目錄中創建插件夾。在本教程中，我們將創建一個演示插件，該插件將 **Osticket System** 與Redmine集成在一起。
  *它應該具有以下必要的文件：plugin.php和config.php。
  * plugin.php文件包含插件的常規描述。在plugin.php文件中使用以下示例代碼：
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
  *然後從上述代碼中替換ID，名稱，作者名稱和插件類名稱。
  *之後，我們需要在Osticket的後端顯示插件配置選項。將以下示例代碼添加到config.php文件中。
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
  *結果，這將在配置頁面上創建用戶名和密碼字段，如下所示：

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="開發Osticket插件的初學者指南">}}

  *以下是可用的類字段的列表，它們在“ [install_root]/include/class.forms.php`：：
      * TextboxField  - 文本框
      * Textareafield  - 文本區域
      * threadentryfield  - 豐富的文本區域，用於討論線程
      * DateTimeField  -  jQuery DatePicker
      * Phonefield  - 針對電話號碼優化的文本框
      *布爾菲爾德 - 複選框
      * ChoiceField  - 下拉選擇字段
      * Section Breakfield  - 水平部分休息
  *之後，我們需要創建將定義插件功能的文件。
  *文件名應該與plugin.php文件中定義的名稱相同。即redmine.php。
  *這將必須保持Dynabicredmineplugin級。查看以下示例代碼：
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
  *此代碼獲取配置值，您可以在功能中使用這些值。在此文件中，您可以將插件的功能添加為您的要求。

## 結論 {#conclusion}
這使我們進入了此博客文章的結尾。 Osticket是一種票務管理軟件，可為開發人員提供插件結構，因此他們可以根據需求添加新功能。插件是擴展任何應用程序/軟件的核心功能的組件。在他的文章中，我們討論了此**客戶支持系統**（Osticket）的插件開發，該系統可幫助開發人員根據其要求添加自定義功能和增強功能。因此，如果您想為您的業務部署**幫助桌子軟件**，則此博客文章確實會為您提供幫助。此外，下面的“ Explore”部分中提到的其他 **HelpDesk票務軟件** 和文章。
最後，[Containerize.com][8]不斷地撰寫有關進一步開源產品和主題的博客文章。因此，請與常規更新的[HelpDesk票務軟件][1]類別保持聯繫。此外，您可以在我們的社交媒體帳戶[Facebook][9]，[LinkedIn][10]和[Twitter][11]上關注我們。

## 探索
您可能會發現以下鏈接相關：
  * [uvdesk][12]
  * [Zammad][13]
  * [freescout][14]
  * [helpy][15]
  * [最佳開源和免費IT幫助台軟件][16]
  * [流行的基於免費售票員的服務台和客戶服務系統][2]
  * [如何使用osticket設置在線幫助台軟件][17]
  * [如何在osticket中實現多租賃][18]
  * [使用WordPress和Osticket自動票務系統][3]
  * [使用免費和開源軟件自動化業務運營][19]

  
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
