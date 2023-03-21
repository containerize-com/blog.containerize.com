---
title: "從WordPress遷移到Ghost的指南| WordPress鬼" 
seoTitle: "從WordPress遷移到Ghost的指南| WordPress鬼" 
description: "本教程是關於如何從WordPress遷移到幽靈的。我們將學習如何將您的帖子和頁面從現有的WordPress網站遷移到幽靈。" 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost和WordPress是兩個領先的開源內容髮布平台。在本教程中，我們將學習如何將內容從WordPress遷移到Ghost。" 
url: /zh-hant/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost和WordPress是兩個領先的開源內容髮布平台。在本教程中，我們將學習如何將內容從WordPress遷移到Ghost。

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="從WordPress遷移到幽靈">}}


## 概述
過去，我們發表了許多有關主題的文章，例如[通過免費的civicrm wordpress集成增強潛在客戶][1][1]，[如何將話語論壇與WordPress][2]相結合，等等。 Ghost是一個新興的開源博客平台。它是一個用於內容髮布的Node.js CMS，並具有簡單乾淨的界面，使其易於使用。對於初學者來說，這是一個很棒的平台，因為它專注於降價而不是Wysiwyg編輯。 Node.js的功率和速度使幽靈非常快。由於平台的簡單性，許多用戶正在從其他平台切換。由於WordPress是內容管理的第一平台。
因此，更多的用戶**從WordPress遷移到Ghost**。有很多內容包括媒體文件，評論，帖子等。有可用的插件可幫助您將內容從WordPress遷移到Ghost。採用幽靈的主要好處是它專注於搜索引擎優化。在此WordPress Ghost教程中，我們將使用官方WordPress導出插件仔細介紹所有遷移步驟。
* **[WordPress的Briedf簡介][3]**
* **[什麼是鬼？][4]**
* **[要求][5]**
* **[使用插件從wrodpress導出內容][6]**
* **[導入到幽靈中][7]**
* **[結論][8]**

##**WordPress的Briedf介紹** {#wp}
[WordPress][9]是一個領先的開源博客平台，為大量網站提供了動力。這個免費的博客軟件是自託管的，多語言的，並為許多語言提供了支持。此外，WordPress的開發社區非常活躍，並且已經開發了一個巨大的有用插件，可以輕鬆使用。這些插件幾乎介紹了您的業務網站的所有用例。此外，它是用PHP編寫的，並附有有關開發和部署的全面文件。所有源代碼均可在GitHub上找到。此外，此博客平台非常可擴展，可配置，並提供了與第三方應用程序的集成。有一個非常合乎邏輯且易於理解的儀表板，用戶可以在其中拖動元素來修改其網站的外觀和感覺。

##**什麼是鬼？** {#ghost}
[Ghost][10]是另一個流行的開源博客平台。這是開發人員和網站所有者高度採用的最廣泛使用的內容髮布平台之一。此外，Ghost非常友好，並帶有內置主題，表格，電子郵件新聞通訊和訂閱。這個免費的博客軟件是用JavaScript編寫的，所有文檔都可以使用有關開發和部署的信息。

##要求 {#requirements}
在WordPress Ghost教程的部分中，我們將看到從WordPress遷移到Ghost所需的要求。使用官方的WordPress導出插件，您可以輕鬆地將內容從WordPress遷移到Ghost。在本教程中，我們將指導您如何將內容從WordPress導出到幽靈站點。因此，您必須安裝WordPress和WordPress**導出插件**的工作安裝。

##從WordPress   {#Export}導出內容
首先，您必須安裝插件。按照以下步驟安裝插件
* 單擊**插件**從側欄菜單中
* 單擊**添加新**並使用右上角的搜索字段搜索**ghost Export**
***安裝**和**激活**插件“**Ghost Foundation**”

{{< figure align=center src="images/ghost-activate-plugin.png" alt="安裝並激活WordPress的幽靈插件">}}

* 激活插件後導航到**工具**從側菜單中
* 單擊**帶有側邊欄菜單的Ghost**。
* 將為您提供有關如何為幽靈準備WordPress內容的指南。
* 由於Ghost使用標籤而不是類別，因此插件將幫助您將類別轉換為標籤。
{{_LINE_37_}}
{{_LINE_38_}}
    以下步驟將永久更改WordPress網站的內容結構。如果您不確定此更改，請使用工具>導出的標準WordPress導出工具來創建所有內容的完整備份。
{{_LINE_40_}}
{{_LINE_41_}}
* 在側欄菜單中導航到**導入**
* 單擊**在**分類轉換器下的運行進口商**導入項目。
* 使用複選框選擇要導入標籤的類別，從而選擇您的幽靈站點。
* 然後單擊**將類別轉換為標籤**。
* 導航到**在“側欄”菜單中**工具**內的ghost**。
* 單擊**下載Ghost File**按鈕。您將下載一個包含所有內容的zip文件。

##導入內容到ghost   {#import}
在WordPress Ghost教程的這一部分中，我們將實施將內容導入Ghost的步驟。
* 登錄Ghost Admin並導航到**實驗室**視圖。
* 單擊**選擇文件**import content**選項中的文件**按鈕，然後選擇導出的zip文件
* 單擊**導入**。然後，您的所有內容將被導入您的幽靈網站。
目前，Ghost沒有任何內置的評論系統。最受歡迎的選擇是Disqus。

##結論 {#conclusion}
這使我們進入了此博客文章的結尾。在這個WordPress Ghost教程中，我們學會瞭如何準備您的WordPress內容，準備遷移到幽靈。我們使用Ghost Foundation的官方幽靈遷移插件來執行遷移。此外，如果您希望從WordPress遷移到Ghost，那麼本博客文章肯定會為您提供幫助，因為我們涵蓋了所需的所有步驟。此外，下面的“探索”部分中提到的許多開源內容髮布平台和教程文章。但是，這兩個開源博客平台都是提供企業級功能以滿足您業務網站需求的最佳領先軟件。
最後，[containerize.com][11]一直在撰寫有關進一步開源軟件的新博客文章。因此，請與[this][12]平台保持聯繫以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [WordPress][9]
  * [Jekyll][13]
  * [話語][14]
  * [鬼][10]
  * [如何用docker構成WordPress][15]
  * [如何在WordPress中啟用GZIP壓縮以獲得更好的PAGSPEED和SEO][16]
  * [通過免費的civicrm wordpress集成增強潛在客戶][1]
  * [使用WordPress和Osticket自動票務系統][17]
  * [如何將話語論壇與WordPress整合][2]
  * [通過遵循前7個SEO博客來增加網站搜索流量][18]
  * [如何使用WordPress和Gatsby構建您的網站][19]

  
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
