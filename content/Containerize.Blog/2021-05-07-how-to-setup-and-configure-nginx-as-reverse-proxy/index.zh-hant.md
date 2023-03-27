---
title: "如何設置和配置為反向代理" 
seoTitle: "如何設置和配置為反向代理" 
description: "本教程是關於如何設置和配置NGINX作為反向代理的。 NGINX被認為是最受歡迎的開源反向代理網絡服務器之一。" 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "NGINX是一款開源Web服務器，也可以充當反向代理。本教程將幫助您學習如何設置和配置NGINX作為反向代理。" 
url: /zh-hant/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx是一款開源Web服務器，也可以充當反向代理。本教程將幫助您學習如何設置和配置NGINX作為反向代理。

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="使用nginx作為反向代理服務器">}}


## 概述：
Nginx和Apache是​​兩個流行的開源Web服務器 **經常與PHP一起使用。反向代理或網關充當客戶端和服務器之間的連接。客戶端和服務器交換信息彼此連續有效地工作。最常見的反向代理是** nginx和apache**，並且在託管多個網站時都可以在同一虛擬機上配置。反向代理保護Web服務器免受攻擊，並且連接網關出現在客戶端，就像普通的Web服務器一樣，不需要特殊的反向代理Nginx配置。客戶在反向代理決定傳遞請求的信息，然後將最終輸出結果傳遞給客戶端時發送請求。
在對Redis教程的系列文章表示讚賞之後，我們收到了很多要求在NGINX教程上啟動系列的請求。因此，上週我們從如何將[NGINX反向代理負載平衡器][1]用於應用程序的教程開始。這個簡單的NGINX反向代理配置示例提供了許多可靠性和NGINX反向代理性能優勢。 NGINX簡單反向代理是Internet上使用的最積極使用的開源Nginx代理服務器。在本教程中，我們將 **配置和探索如何將NGINX用作反向代理** 以及如何將其設置為單個服務器上的反向代理。所以，讓我們開始吧！
* 什麼是代理服務器？
* 向前與反向代理
* 配置反向代理
  * NGINX反向代理的優點是什麼？
  * 結論

##什麼是代理服務器？
**代理服務器**充當您和Internet之間的網關。這是一個中介服務器，將最終用戶與瀏覽的網站分開。根據您的用例或公司策略，代理服務器提供不同級別的功能，安全性和隱私。
借助代理服務器，Internet流量在代理服務器的路上流向您要求的地址。然後，請求通過同一代理服務器返回（主要是），然後代理服務器將從網站收到的數據轉發給您。

##向前與反向代理：

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx作為反向代理服務器">}}

通常，當我們談論代理時，大多數時候我們是指向前代理。 **前鋒代理** 非常適合避免國家限制，例如中國的大防火牆。客戶只需通過向前代理連接到阻止資源。正向代理可以通過更改其IP地址來隱藏用戶的身份。因此，基本上是nginx作為遠期代理位於客戶端和Internet之間，因此End Server不知道實際客戶端。

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx作為反向代理">}}

**反向代理 **也充當中介機構，但它們位於連接的另一側。反向代理在** 負載平衡**，Web優化和安全性方面非常出色。反向代理通常用於在幾個服務器之間分配負載，無縫顯示來自不同網站的內容，或將處理請求傳遞給使用HTTP以外的協議的應用程序服務器。

##將nginx配置為反向代理：
當NGINX代理請求時，它將請求發送到指定的代理服務器，獲取響應並將其發送回客戶端。可以使用指定的協議代理HTTP服務器或非HTTP服務器的請求。支持的協議包括 **fastcgi，uwsgi，scgi和memcached** 。
要將請求傳遞給HTTP代理服務器， **Proxy_pass**指令在**位置** 內指定。例如：
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
此NGINX反向代理示例配置會導致在該位置處理的所有請求傳遞給指定地址的代理服務器。該地址可以指定為域名或IP地址。該地址還可以包括一個端口：
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
您甚至可以將修改後的或自定義的標頭傳遞到nginx **代理服務器** 代理服務器\ _set \ _header**示例中的主機。
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx還支持緩衝，有助於改善性能。使用啟用緩衝的情況下，只要客戶端需要下載，NGINX就會存儲從代理服務器接收的響應。
您還可以 **設置多個後端服務器** ，而不是將所有請求代理到單個服務器，而是讓NGINX平衡負載之間的負載。我們已經在有關[nginx負載平衡][1]的教程中介紹了這一點。

## Nginx反向代理的優點是什麼？
以下是設置NGINX反向代理服務器的好處：
* nginx是最受歡迎的 **開源網絡服務器** ，也是最受歡迎的代理工具。 NGINX反向代理配置非常易於實現，因為它為用戶提供了針對DDOS和DOS Web服務器攻擊的高端安全性。
* 它有助於在高流量網站和後端服務器之間創建平衡的負載，例如 **Dropbox，Netflix和Zynga** 。
* 它為較慢的後端服務器和高流量站點提供了緩存機制，以設置nginx反向代理虛擬主機。它不需要從客戶端為每個Web請求設置新過程。
* 它還充當了多種協議的反向代理服務器，例如HTTP，HTTPS，TCP，UDP，SMTP，IMAP和POP3。
* nginx可以 **處理超過10000個連接** ，具有低內存足跡，並且可以在單個IP地址上操作多個Web服務器。
* 它還有助於緩存頁面內容並執行SSL加密以降低Web主機服務器的負載。 NGINX是通過壓縮靜態內容並增加加載時間來改善靜態內容性能的最佳Web服務器之一。
* 它是多個服務器環境的絕佳工具，也可用於不同任務，例如保持單個服務器匿名。

## 結論：
在此 **nginx反向代理教程**中，我們探索了什麼是nginx代理服務器並設置nginx反向代理。向前與反向代理服務器Nginx之間的區別。我們還通過示例學習瞭如何將NGINX設置為反向代理。現在，您充分了解如何安裝**nginx反向代理配置逐步** 。上述教程可幫助您開始進行反向代理設置。在即將到來的教程中，我們將討論有關NGINX的更多有趣主題。
_您最喜歡的_reverse proxy_服務器是什麼，簡單，動態且功能齊全？您對http和tcp **基於http的負載平衡器的reverse prox__y有任何疑問，_ reverse prox__y，基於http** 的加載平衡器_？

## 探索
您可能會發現以下更多的文章
  * [如何將Apache配置為Ubuntu/Debian的反向代理][3]
  * [通過在Ubuntu 20.04上加密的安全nginx][4]
  * [如何將NGINX用作應用程序的負載平衡器][1]
  * [如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin][5]
  * [在Ubuntu/debian上配置http/2支持nginx][6]
  * [在Ubuntu上使用nginx安裝多個PHP版本][7]
  * [在AWS生產服務器上使用乘客的設置NGINX][8]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
