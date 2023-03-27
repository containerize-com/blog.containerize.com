---
title: "如何將NGINX用作應用程序的負載平衡器" 
seoTitle: "如何將NGINX用作應用程序的負載平衡器" 
description: "NGINX是流行的開源Web服務器。它以高性能和可擴展性而聞名。在本教程中，我們將學習使用Nginx作為負載平衡器" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx以其高性能和可擴展性而受歡迎。這是＃1開源Web服務器。在本教程中，我們將學習使用NGINX作為負載平衡器。" 
url: /zh-hant/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx以其高性能和可擴展性而受歡迎。這是＃1開源Web服務器。在本教程中，我們將學習使用NGINX作為負載平衡器。

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="如何使用nginx作為負載平衡器">}}

現代高流量網站為數十萬，在某些情況下為用戶或客戶的數百萬個並發請求，並以快速可靠的方式返回正確的文本，圖像，視頻或應用程序數據。為了滿足這些大量量的需求和計算功率，您需要更多的服務器。使用更多的服務器，您需要一種方法來平衡這些服務器之間的流量。在此博客教程中，我們將探討什麼是負載平衡器以及如何將NGINX用作負載平衡器。
要將NGINX負載平衡配置為先決條件，您將需要至少有兩個帶有Web服務器軟件的主機，以查看與NGINX的負載平衡的優勢。如果您已經設置了一個運行的Web主機，請通過創建自定義圖像並將其部署到新的Web服務器上來複製它。因此，讓我們學習如何為雲服務器逐步設置NGINX負載平衡配置。
* **[nginx Web服務器][1]** 
* **[負載平衡器][2]** 
* **[設置nginx作為負載平衡器（round Robin）][3]** 
* **[關於不同的上游指令][4]** 
* **[結論][5]** 

## Nginx Web服務器 {#webserver}

NGINX是高性能的開源Web服務器。除了其HTTP服務器功能外，NGINX還可以用作電子郵件（IMAP，POP3和SMTP）的代理服務器和反向代理，並為HTTP，TCP和UDP服務器加載餘額NGINX。它可以提高應用程序的性能，可靠性和安全性。它以豐富的功能集，簡單的配置和低資源消耗而受歡迎。
Nginx如何工作？ NGINX通常用作NGINX反向代理負載平衡器作為在多個單獨服務器上工作的分佈式Web應用程序的單個入口點。它使用異步，事件驅動的方法提供低內存使用和高並發性。您可以閱讀有關nginx [此處][6]的更多信息。

## 負載平衡器 {#loadbalancer}

負載平衡是在多個服務器上分配網絡流量的過程。執行此分配過程的“軟件”或“硬件”稱為負載平衡器。負載平衡器就像一個站在服務器前的“流量警察”，並在所有服務器上路由客戶端請求。它確保您的應用程序仍在運行中，即使其中一台服務器下降也是如此。

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx作為負載平衡器">}}

負載平衡器的主要功能如下：
* 在多個服務器上有效分發客戶端請求或網絡加載
* 僅通過向在線的服務器發送請求來確保高可用性和可靠性
* 提供了根據需求要求添加或減去服務器的靈活性

## 設置nginx作為負載平衡器 {#setup}

在設置NGINX循環負載平衡之前，您應該在服務器上安裝NGINX。您可以使用Apt-Get快速安裝它：
```
sudo apt-get install nginx
```
為了設置圓形載荷負載平衡器，我們需要使用Nginx上游模塊。我們將將NGINX負載平衡器配置更新為NGINX設置。讓我們打開您的網站的配置。為了此示例，我正在使用默認配置文件
```
sudo vi /etc/nginx/sites-available/default
```
我們需要將負載平衡配置添加到文件中，以使用nginx配置負載平衡器。
首先，我們需要包括Nginx上游負載平衡的上游模塊，該模塊看起來像這樣：
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
在服務器塊中使用此後遊此後端作為您的代理端點：
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
重新啟動nginx
```
sudo service nginx restart
```
只要您將所有服務器都設在適當的位置，您現在應該發現NGINX開源負載平衡器將開始平等地將訪問者分配給服務器。這種相等的分佈稱為旋轉載荷負載平衡。

## 上游指令 {#upstream}

在上一個示例中，我們使用了一個簡單的上游模塊來進行圓形載荷負載平衡，以在服務器之間平均分配流量。但是，有很多原因為什麼這可能不是處理流量的最有效方法。我們可以使用多個指令來更有效地引導現場訪問者。

＃## 重量
開始將用戶分配給服務器的一種方法是將特定的重量分配給某些機器。 NGINX允許我們分配一個指定應向每個服務器的流量比例的數字。
包含服務器重量的負載平衡設置看起來像這樣：
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
默認重量為1。重量為2，後端2.例將發送的流量是後端1的兩倍，而後端3的重量為4，將處理兩倍的流量，是後端2的兩倍，是後端的兩倍。 1。

###哈希
IP Hash允許服務器根據其IP地址對客戶端響應，每次訪問時將訪問者返回相同的VP（除非該服務器停止）。如果已知服務器不活動，則應將其標記為向下。然後將所有應該路由到Down服務器路由的IP都定向到替代服務器。
下面的配置提供了一個示例：
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max失敗
根據默認的循環機器設置，即使服務器未響應，NGINX應用程序負載平衡器也將繼續向虛擬專用服務器發送數據。 Max Fails可以自動通過在設定的時間內渲染不響應的服務器來自動防止這種情況。
最大失敗有兩個因素：最大\ _fails和fall \ _timeout。 Max Fails是指在被視為無活動之前應發生的最大嘗試連接到應該發生的服務器的嘗試。 fall_timeout指定服務器的長度被認為是不起作用的。一旦時間到期，到達服務器的新嘗試將再次啟動。默認超時值為10秒。
樣本配置可能看起來像這樣：
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## 結論： {#conclusion}

在此NGINX負載平衡教程中，我們了解了NGNIX，負載平衡以及如何設置NGINX負載平衡器以將您的流量分配給多個服務器。我們還探索了不同的負載平衡算法，例如圓形旋轉，哈希和Max失敗。如果您正在運行具有大音量的應用程序，並且需要在不同的服務器上分配負載，則NGINX是最適合您的選擇之一。最重要的是，它是100％免費和開源網絡服務器。
_您可以加入我們的[Twitter][7]，[LinkedIn][8]和我們的[Facebook][9]頁面。哪些其他強大的負載平衡器可以改善您的服務器資源可用性和效率__您使用？ 。如果您有任何疑問或反饋，請_ [聯繫][10]。

## 探索
您可能會發現以下更多的文章
  * [如何使用Let's Encrypt在Ubuntu 20.04上保護和加密NGINX][11]
  * [Apache vs nginx  -  2021年的詳細比較][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
