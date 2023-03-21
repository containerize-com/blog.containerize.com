---
title: "將Mautic＆Joomla整合為數字營銷自動化" 
seoTitle: "將Mautic＆Joomla集成以進行數字營銷自動化" 
description: "Mautic和Joomla集成可以幫助您的業務進行數字營銷自動化。它有助於通過惡劣的運動​​推銷產品。" 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic和Joomla集成可以幫助您的業務進行數字營銷自動化。它有助於通過在線卑鄙的活動來推銷產品。" 
url: /zh-hant/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Mautic和Joomla Integration可以通過數字營銷自動化幫助您的業務。它有助於通過在線卑鄙的活動來推銷產品。

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Mautic和Joomla整合">}}


##這種集成如何幫助您的業務：
Mautic和Joomla集成將使您以非常簡單但高效的方式推銷產品/服務。 Mautic一種免費的開源營銷解決方案使您可以很好地控制營銷活動，並且根據情況繼續進行滴水活動非常簡單。例如：它為您提供信息，即如果客戶已閱讀了電子郵件或訪問了您的產品頁面。使用該信息，您可以設置廣告系列，以決定是否繼續向該客戶發送下一封電子郵件。這種集成將有助於數字營銷自動化。這篇博客文章將指導您以下各節：
  * [概述][1]
  * [JOOMLA插件安裝][2]
  * [Mautic配置][3]
  * [結論][4]

##概述： {#overview}
Mautic是一種開源營銷自動化系統。這是一個免費的營銷軟件。您可以使用它來創建無限的廣告系列，以向目標客戶發送營銷電子郵件。
Joomla還是用於開發網站的免費開源內容管理系統。在Joomla上設置您的業務網站非常容易。它具有數千個擴展名，可根據您的要求使用。

## Joomla插件安裝： {#plugin}
* 下載[插件][5]。
* 然後轉到擴展名 - >管理 - >安裝。
* 輸入Mautic URL。
* 它將插入從您的Mautic實例中加載的1個PX GIF圖像。
* 使用以下代碼段中的joomla內容嵌入表單：{mautic type =“ form” id}
* 然後，您可以在Mautic應用中創建表單並從URL獲取ID。
* 也可以使用以下代碼snippt添加動態內容：{mautic type =“ content” slot =“ slot_name”}默認內容。{/mautic}
  * slot_name是您在廣告系列中添加“請求動態內容”決定時指定的插槽的標識符。
安裝後，您需要在Joomla網站上創建和嵌入表單。這些表格將把聯繫人信息發送到Mautic。在Joomla上配置插件後，下一步將是在Mautic上進行配置。

## Mautic配置： {#mautic}
* 訪問您的網站，轉到設置。
* 單擊配置。
* 從API設置，啟用API。
* 要將Mautic與Joomla連接起來，您必須在網站上擁有SSL證書。
* 接下來，您需要轉到API憑據。
* 如果您的網站沒有SSL（因此您轉到**http**：//yourjoomlasite.com），請選擇OAuth1。如果您在網站上確實有一個SSL（因此，請轉到**https**：//yourjoomlasite.com），請選擇OAuth2。
* 單擊新的，提供一個名稱（可以是您想要的任何東西）和Joomla的完整URL！站點（[https://yourjoomlasite.com][6]）
* 單擊保存並關閉。
* 在這裡，您可以獲取公共和私鑰。
* 轉到您的Joomla網站，找到您之前安裝的Mautic插件。
* 輸入您從Mautic網站創建的公共和秘密密鑰。
* 選擇oauth1或oauth2（與您在Mautic中選擇的相同），然後將註冊用戶發送給是。
* 保存並發布插件。
* 之後，您將能夠授權您的Joomla網站。
  * Joomla將重新指導到Mautic實例授予授權。
* 單擊“授權”，僅此而已。
* 您將開始接觸到您的Mautic網站。

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Mautic和Joomla整合">}}


##結論： {#conclusion}
在本文中，我們討論了Mautic和Joomla如何共同幫助數字營銷自動化。這種開源的免費營銷解決方案將使您可以將來自Joomla網站的所有聯繫人分組，並使用它們進行營銷活動。 Mautic允許您創建細分市場，因此您可以根據需要在不同的細分市場上運行不同的廣告系列。請檢查[Joomla][7]和[Mautic][8]博客以獲取詳細概述。

## 探索：
您可能會發現以下鏈接相關：
  * [JOOMLA][7]
  * [Mautic][8]
  * [如何設置Mautic  -  Facebook集成][9]
  * [Drupal Mautic整合以自動化鉛培養][10]
  * [使用Mautic和WordPress WooCommerce的營銷自動化][11]
  * [如何在Mautic中設置營銷活動][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
