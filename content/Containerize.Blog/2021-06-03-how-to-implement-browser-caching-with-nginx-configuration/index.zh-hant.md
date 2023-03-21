---
title: "如何使用NGINX配置實現瀏覽器緩存" 
seoTitle: "如何使用NGINX配置實現瀏覽器緩存" 
description: "網站加載的速度越快，訪客越可能留下來。在本教程中，我們將通過NGINX配置實現瀏覽器緩存。" 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "網站加載的速度越快，訪客越可能留下來。本文指導您如何使用NGINX配置實現瀏覽器緩存。" 
url: /zh-hant/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

##網站加載的速度越快，訪問者留下的可能性就越大。本文指導您如何使用NGINX配置實現瀏覽器緩存。

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="如何使用Nginx配置實現Browsr緩存">}}

在我們的NGINX的教程系列中，我們介紹了[如何將NGINX用作負載平衡器][1][1]，[將nginx作為反向代理][2][2]，[使用多個PHP版本與Nginx][3]和[轉換HTACCESS重新寫入NGINX重寫指令的規則][4]。在今天的文章中，我們介紹了一個非常重要的主題，該主題可以通過利用瀏覽器緩存來幫助企業改善用戶的體驗。在本教程中，我們將指導您如何使用NGINX的標頭模塊實現Nginx配置的瀏覽器緩存。讓我們開始吧！
  * **[槓桿瀏覽器緩存][5]**
  *[ **nginx標頭模塊** ][6]
  *[**e-tage and if-none-Match** ][7]
  *[**使用nginx配置槓桿瀏覽器緩存**][8]
  *[**結論**][9]

##利用瀏覽器緩存 {#瀏覽器 -  caching}
網站加載的速度越快，訪問者越有可能留在網站上。具有大量圖像和交互式內容的網站在後台加載使網站打開一個複雜的任務。它包括從服務器一一請求許多不同的文件。最小化這些請求的數量是加快網站的一種方法。
提高網站性能的一種方法是_LEVERALE瀏覽器緩存_。瀏覽器緩存在​​提高頁面速度的緩存機制中起著巨大的作用。用於網站的靜態文件，例如CSS，JS，JPEG，PNG等，可以保存在訪問者的計算機上以供將來訪問。每當訪問者在您的網站上遇到新頁面時，可以從訪問者的計算機而不是提供的服務器訪問上述文件，這將大大提高頁面負載速度。

## nginx的標頭模塊 {#header-module}
_ngx \ _http \ _headers_module_模塊允許添加“ _expires_”和“ _cache-control_”標頭字段和任意字段，並將其添加到響應標題中。我們可以使用標頭模塊設置這些HTTP標頭。標題模塊是核心NGINX模塊，這意味著不需要單獨安裝即可使用。
示例配置看起來像這樣：
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag和if-none-match   {#etage}
假設我們有一些帶有不同擴展的測試文件，例如test.html，test.jpg，test.css和test.js。默認情況下，所有文件都具有相同的默認緩存行為。要使用以下命令檢查文件的響應標頭，以從我們的本地NGINX服務器請求文件，並顯示響應標頭：
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
在第二到最後一行中，您會找到_etag_頭，其中包含了該請求文件的此特定修訂版的唯一標識符。如果您重複執行最後一個_curl_命令，則會找到完全相同的ETAG值。
使用Web瀏覽器時，當用戶出於任何原因而需要瀏覽頁面或相同的文件時，將存儲_etag_值並使用_if-none-match_請求標頭髮送回服務器。
我們可以使用以下命令在命令行上模擬這一點。
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
注意唯一標識符，它必須與我們從上一個_curl_調用中獲得的響應值匹配。這次的響應將有所不同：
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
這次，nginx將以 **304的響應未修改** 。它不會再次通過網絡發送文件；相反，它將告訴瀏覽器，它可以重複使用已在本地下載的文件。這很有用，因為它減少了網絡流量。但是瀏覽器仍然必須進行HTTP調用以從服務器中獲取響應，這仍然需要一些時間。

##使用nginx配置槓桿瀏覽器緩存 {#nginx-configuration}
在我們的上一個示例中，我們解釋了電子標籤和無需匹配如何幫助您減少網絡流量。但是``eTag''的問題是瀏覽器總是向服務器發送請求，詢問它是否可以重複使用其緩存文件。而且這仍然需要時間來提出請求並接收回复。
現在，借助Nginx的標頭模塊，我們將使瀏覽器在本地緩存某些文件而無需明確詢問服務器。
在您的nginx配置文件中添加以下3行到nginx中的緩存靜態內容
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
第一行指示NGINX在客戶端瀏覽器中緩存30天（30d）。在此期間之後，用戶的任何新請求都將導致緩存重新驗證並從客戶端瀏覽器進行更新。
您可以將上述行放在_location_，_server_或_http_塊中。
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
當您將它們放置在位置塊中時，只有該位置提供的內容將被緩存。在上述情況下，只有對 /靜態 /的請求將被緩存。
如果要緩存特定的文件類型，則可以使用位置塊進行操作。
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
在上面的示例中，我們正在緩存各種文件類型，例如JS，JPG，CSS等。
同樣，您可以將緩存配置放在_server_塊中，然後在任何位置塊之前。在這種情況下，該服務器的所有響應都將被緩存。或者，您可以將其放在_http_塊中，在這種情況下，Nginx配置文件支持的所有服務器請求將被緩存。

##結論 {#conclusion}
NGINX的標頭模塊可用於將任何任意標頭添加到響應中，但是正確設置高速緩存控制標頭是其最有用的應用程序之一。它可以幫助您提高網站的性能，尤其是對於具有較高延遲的網絡的用戶，例如移動運營商網絡。在本教程中，我們學會瞭如何利用NGINX配置來利用瀏覽器緩存。希望這將幫助您改善用戶在網站上的體驗。

## 探索
  * [如何在Ubuntu上使用NGINX安裝多個PHP版本][3]
  * [如何設置和配置為反向代理][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
