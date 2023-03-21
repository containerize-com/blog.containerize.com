---
title: "如何使用nginx中的GZIP壓縮來優化網站" 
seoTitle: "如何使用nginx中的GZIP壓縮來優化網站" 
description: "在本文中，我們將討論一種方法，通過通過NGINX中的GZIP壓縮降低文件大小來優化您的網站傳輸速度。" 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "該教程指導您如何優化網站性能，並通過使用NGINX中的GZIP壓縮來減少文件大小來快速實現。" 
url: /zh-hant/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

##該教程指導您如何優化網站性能並通過使用NGINX中的GZIP壓縮減少文件大小來快速地進行。

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="如何在Nginx中啟用GZIP壓縮">}}

本文是延續我們有關Nginx的系列教程。到目前為止，我們已經介紹瞭如何使用NGINX作為負載平衡器，如何使用NGINX作為反向代理。現在，本教程涵蓋了另一個要求的問題：“如何使用NGINX中的GZIP壓縮來優化您的網站”。在本教程中，我們將指導您逐步介紹如何在NGINX中啟用GZIP壓縮。所以，讓我們開始吧！
  * [壓縮的網站優化][1]
  * [什麼是GZIP壓縮？][2]
  * [GZIP壓縮如何工作？][3]
  * [啟用nginx中的GZIP壓縮][4]
  * [驗證GZIP壓縮][5]
  * [結論][6]

##網站優化， {#optimize}
網站的性能取決於許多因素。部分取決於部分的因素之一是用戶瀏覽器必須從服務器下載的所有文件的大小。減少或壓縮這些傳輸文件的大小可以使用戶更快地加載您的網站加載。如果您支付計量連接的帶寬使用費，它還可以減少網站的賬單。因此，壓縮可以在您的網站優化中發揮非常重要的作用。
由於Google和其他搜索引擎正在考慮網站的用戶體驗（UX）是其排名算法的關鍵因素。改進和優化您的網站以獲得最高評分變得越來越重要。要注意的最重要的因素之一是頁面速度和加載時間。而且，提高網站速度和性能的最快和最簡單方法是在您的網站上啟用GZIP壓縮。

##什麼是GZIP壓縮？   {#什麼gzip}
GZIP是用於文件壓縮和解壓縮的**文件格式和軟件應用程序**。 Web服務器或其他軟件使用GZIP壓縮將數據文件發送到用戶瀏覽器之前。這減少了文件下載時間，這使您的網站更快。所有現代瀏覽器都支持GZIP壓縮。
同樣重要的是要注意，必須在Web服務器上啟用GZIP壓縮，然後才能啟用文件和文件夾壓縮。不久，我們將看到如何在NGINX中啟用GZIP壓縮。

## GZIP壓縮如何工作？   {#how-gzip}
GZIP是最流行的壓縮方法，由Web服務器和瀏覽器使用，以通過Internet傳輸時壓縮和解壓縮內容。它主要用於代碼和文本文件，GZIP可以將JavaScript，CSS和HTML文件的大小減少多達90％。
默認情況下，GZIP壓縮不會壓縮圖像或視頻。這就是為什麼大多數網站速度測試工具（例如Google PagesPeed Insights）強烈建議啟用GZIP壓縮。
當Web服務器收到網頁請求時，Web服務器會檢查請求的標題，以檢查瀏覽器是否支持GZIP。如果是這樣，服務器在應用GZIP之前會生成頁面的標記。 GZIP將HTML標記轉換為壓縮數據，然後將其傳遞到最終用戶。當最終用戶收到壓縮數據時，他們的瀏覽器將其解壓縮。

##啟用nginx中的gzip壓縮 {#enable-gzip}
要更改Nginx GZIP配置，請在“ _VI_”或您喜歡的文本編輯器中打開主Nginx配置文件：
```
sudo vi /etc/nginx/nginx.conf
```
查找_gzip_設置部分，看起來像這樣：
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
如您所見，默認情況下啟用了gzip，並使用_gzip on; _ _ _ _ _ _ _ _ _ _ _，但是還有其他註釋的gzip設置。
我們可以啟用_gzip_types_設置以在要壓縮的文件類型上啟用壓縮。例如
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
現在，重新啟動NGINX以進行新的設置。

##驗證GZIP壓縮 {#verify}
現在，我們已經啟用了GZIP壓縮，讓我們對其進行驗證。
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
響應將保持不變，因為該文件類型已經啟用了壓縮：
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

##結論 {#conclusion}
在本文中，我們了解到您可以使用Nginx GZIP模塊加快文件傳輸。我們向您展示瞭如何使用GZIP模塊在NGINX中啟用GZIP壓縮的逐步向您展示。 [GZIP模塊][7]的官方文檔列出了您可能想查看的其他配置指令。希望本教程可以幫助您優化網站性能和速度。

## 探索
  * [如何在Ubuntu上使用Nginx安裝多個PHP版本][8]
  * [如何設置和配置nginx作為反向代理][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
