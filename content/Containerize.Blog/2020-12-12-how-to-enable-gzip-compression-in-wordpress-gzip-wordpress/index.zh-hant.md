---
title: "如何在WordPress中啟用GZIP壓縮| Gzip WordPress" 
seoTitle: "如何在WordPress中啟用GZIP壓縮| Gzip WordPress" 
description: "您是否要在WordPress中啟用GZIP壓縮以加快您的網站？在此博客文章中，我們將學習如何在WordPress中啟用壓縮。" 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "頁面速度和加載時間是搜索引擎中更好排名的關鍵因素。 GZIP壓縮可以使其實現並提供競爭優勢。" 
url: /zh-hant/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

##頁面速度和加載時間是搜索引擎中更好排名的關鍵因素。 GZIP壓縮可以使其實現並提供競爭優勢。

{{< figure align=center src="images/Asset-1.png" alt="啟用GZIP壓縮">}}


## 概述
由於Google和其他搜索引擎正在考慮網站的用戶體驗（UX）是其排名算法的關鍵因素。改進和優化您的網站以獲得最高評分變得越來越重要。要注意的最重要的因素之一是頁面速度和加載時間。而且，提高站點速度和性能的最快，最簡單的方法是在您的網站上啟用GZIP壓縮。您的Web主機有可能自動為您啟用GZIP壓縮。如果沒有，您必須自己執行這項關鍵任務。
在本文中，我們將向您展示如何輕鬆啟用WordPress中的GZIP壓縮。讓我們開始吧！
* [ **什麼是GZIP壓縮** ？][1]
* [ **GZIP壓縮如何工作？** ][2]
* **[如何驗證是否啟用GZIP壓縮？][3]** 
* **[啟用WordPress中的GZIP壓縮][4]** 
* **[結論][5]** 

## 什麼是GZIP壓縮？ {#what}

GZIP是 **文件格式，並且用於文件壓縮和減壓的軟件應用程序** 。 Web服務器或其他軟件使用GZIP壓縮將數據文件發送到用戶瀏覽器之前。這減少了文件下載時間，這使您的網站更快。所有現代瀏覽器都支持GZIP壓縮。
同樣重要的是要注意，必須在Web服務器上啟用GZIP壓縮，然後才能啟用文件和文件夾壓縮。不久，我們將看看如何驗證您的Web服務器是否已啟用了GZIP。

## GZIP壓縮如何工作？ {#work}

GZIP是最流行的壓縮方法，由Web服務器和瀏覽器使用，以通過Internet傳輸時壓縮和解壓縮內容。它主要用於代碼和文本文件，GZIP可以將JavaScript，CSS和HTML文件的大小減少多達90％。默認情況下，GZIP壓縮不會壓縮圖像或視頻。為此，您需要在WordPress網站上優化Web的圖像。這就是為什麼大多數網站速度測試工具（例如Google PagesPeed Insights）強烈建議啟用GZIP壓縮。
當Web服務器收到網頁請求時，Web服務器會檢查請求的標題，以檢查瀏覽器是否支持GZIP。如果是這樣，服務器在應用GZIP之前會生成頁面的標記。 GZIP將HTML標記轉換為壓縮數據，然後將其傳遞到最終用戶。當最終用戶收到壓縮數據時，他們的瀏覽器將其解壓縮。

## **如何驗證是否啟用了GZIP壓縮？** {#verify}

默認情況下，您的Web主機可能會在WordPress中啟用壓縮。但是，情況並非總是如此。您可以確定使用Chrome'DevTools是否已經啟用了GZIP壓縮。
在Chrome瀏覽器中打開您的網站，然後右鍵單擊頁面上的任何位置，然後選擇 **Inspect****打開開發人員工具**。
接下來，導航到 **網絡**選項卡，然後從“名稱”部分單擊網站的主URL。選擇 **標題** 選項卡，然後向下滾動以找到**響應標頭** 部分：

{{< figure align=center src="images/gzip-determine.gif" alt="驗證內容編碼">}}

在那裡，您會看到是否啟用了GZIP壓縮。

## 在WordPress中啟用GZIP壓縮 {#enable}

如果您確定 **WordPress GZIP壓縮尚未啟用** ，則可以使用多種方法來運行它。最簡單的方法是使用一些WordPress插件，例如[WP Rocket][6]，[WP Super Cache][7]或[W3 Total Cache][8]。但是，您可以通過.htaccess文件或更新Nginx配置在服務器級別手動執行此操作。

###通過編輯.htaccess文件
啟用WordPress GZIP壓縮的最常見方法之一是 **編輯您的_.htaccess_文件** 。但是，這涉及破壞某事的風險。這是一個敏感的服務器文件，一個錯誤的舉動可能會導致很多問題。
為了降低風險，請確保 **保存原始文件的副本**，然後進行任何更改。 _.htaccess_文件應位於網站的**根文件夾中** 。打開_.htaccess_之後，在下面添加以下代碼`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**保存文件**並將其上傳到您網站的服務器。完成後，請檢查GZIP是否使用Chrome的DevTools啟用了GZIP，如上所述。

##啟用nginx中的GZIP壓縮
為了 **啟用壓縮**，包括與on參數的 **gzip** 指令。 **gzip** on;默認情況下，**nginx** 僅使用MIME類型文本/HTML壓縮響應。要使用其他MIME類型來壓縮響應，請包括GZIP_TYPES指令，並列出其他類型。
您可以通過 **打開_nginx.conf_文件** 並添加以下代碼：
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## 結論 {#conclusion}

這是該GZIP WordPress教程的終點。有很多方法可以優化您的網站以換取速度和性能。在此GZIP WordPress教程中，我們仔細研究了GZIP壓縮，GZIP壓縮的重要性及其安裝步驟。此外，下面的“探索”部分中提到了許多相關鏈接。
最後，[Containerize.com][9]正在撰寫有關進一步開源產品的文章。因此，請與[Blogging][10]類別保持聯繫以進行常規新聞和更新。

## 探索
  * [MATOMO][11]
  * [合理][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [如何用docker構成WordPress][15]
  * [免費業務分析工具如何為您的業務提供幫助][16]
  * [前5名開源商業智能工具2021][17]
  * [如何在WordPress中安裝插件|香草論壇][18]
  * [通過免費的civicrm wordpress集成增強潛在客戶][19]



[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
