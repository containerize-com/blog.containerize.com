---
title: "Apache vs nginx |什麼是Apache？ |什麼是nginx？" 
seoTitle: "Apache vs nginx |什麼是Apache？ |什麼是nginx？" 
description: "本文是關於Apache vs nginx比較的。這兩個Web服務器都是開源，可配置的，並且可以處理世界上一半以上的互聯網流量。" 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache使用流程驅動的方法，NGINX使用事件驅動的方法來處理用戶請求。讓我們探索Apache和Nginx之間的區別。" 
url: /zh-hant/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache使用過程驅動的方法，而NGINX使用事件驅動的方法來處理用戶請求。讓我們探索Apache和Nginx之間的區別。

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## 概述
儘管Apache和Nginx具有許多素質，但不應將它們視為完全可以互換。這兩個開源Web服務器彼此不同，應根據您的Web應用程序的需求選擇。在本文中，我們將詳細討論 **apache vs nginx** 比較。
  * [什麼是Apache？][1]
  * [什麼是nginx？][2]
  * [apache vs nginx比較][3]
  * [比Apache好][4]
  * [結論][5]
  * [探索][6]

## 什麼是Apache？ {#whatisapache}

Apache Web服務器是Internet上最受歡迎的服務器之一，為27％的網站提供服務。 Apache主要是開發人員的首選，因為其靈活性，功率以及廣泛的支持和詳細的文檔。它支持動態加載的模塊，使開發人員可以輕鬆擴展其功能。

## 什麼是nginx？ {#whatisnginx}

本文是關於Apache vs nginx比較的。這兩個Web服務器都是開源，可配置的，並且可以處理世界上一半以上的互聯網流量。

## apache vs nginx比較 {#apachevsnginx}

在本節中，讓我們根據支持，文檔，內容類型和配置結構比較Apache和Nginx。

＃＃## 建築學
Apache啟動了多個服務器進程以在啟動時共享工作負載。有一個父母過程和許多子過程。每個子進程都負責創建處理傳入請求的服務器線程。 Apache使用多處理模塊來分配子進程以接受請求並綁定網絡端口。相反，NGINX具有事件驅動的體系結構。 Nginx具有控制端口綁定和配置讀數的主過程。主過程根據可預測的過程模型創建子過程，與Apache不同，Apache允許Nginx服務器更有效地使用資源。對於每個新請求，NGINX啟動事件，並創建一個僅佔用少量過程內存的文件描述符。這使NGINX比Apache更可擴展。 Apache為每個連接消耗更多的過程內存。

####模塊
Apache和Nginx都具有模塊的能力，以擴展或修改其核心功能。對於Apache和Nginx而言，模塊的實現都是不同的，主要區別是模塊的加載。如果是Apache，則僅在需要它們時動態加載模塊。相反，即使您不需要它們，NGINX模塊也集成到核心中，即使您不需要它們。從這個意義上講，與Nginx相比，Apache是​​開發人員的更具自定義平台。就靈活性而言，這是用戶的一個限制，但就積極而言，這意味著更好的安全性，因為動態模塊可以提出安全問題。

####支持和文檔
如果我們根據支持和文檔進行比較，那麼Apache是​​這裡的明顯贏家，因為它已經在市場上了很長時間。 Apache服務器有一個可用的文檔庫。相比之下，NGINX由於其高性能和資源利用率而變得流行，因此其支持和文檔正在迅速增長。

####靜態與動態內容
Apache獨立提供靜態和動態內容。另一方面，NGINX無法提供動態內容，因此將這些請求傳遞給第三方軟件。 Apache服務器使用其常規基於文件的方法處理靜態內容。

####文件與基於URI的解釋
Apache Server可以將請求解釋為文件系統上的物理資源或URI位置。另一方面，NGINX旨在作為Web服務器和代理服務器工作。由於這兩個角色所需的架構，它主要與URI一起使用，並在必要時轉換為文件系統。 NGINX未為文件系統目錄指定配置，而是解析URI本身。

＃＃## 配置
Apache提供了開發人員使用稱為.htaccess的文件在目錄級別設置配置的能力。但是對於NGINX，沒有這樣的機制可以在目錄級別設置配置。就配置而言，Apache提供的靈活性比NGINX更具靈活性。

## Nginx比Apache好嗎？ {#nginx}

對於服務靜態內容而言，NGINX比Apache快。因此，如果您的Web應用程序提供了很多靜態內容，那麼是的Nginx比Apache更好，更快。就動態內容而言，兩個網絡服務器幾乎都提供相同的性能，因此這裡沒有明確的贏家。 Apache和Nginx幾乎在所有操作系統上都運行，但是與Apache相比，NGINX在Windows上的性能不佳。如果您的操作系統是一個類似於Unix的系統，並且您的Web應用程序至關重要，那麼NGINX比Apache更好。

## 結論 {#conclusion}

Apache和Nginx都有自己的方式。我們已經討論了Apache與Nginx比較，什麼是Apache，什麼是Nginx以及Apache和Nginx之間的差異。從這兩個最受歡迎的Web服務器中選擇一個完全取決於您的Web應用程序的要求。選擇取決於您對Web服務器的性能，資源利用，速度，可擴展性和支持的期望。兩者都有自己的利益。沒有一種適合所有Web服務器的尺寸，因此請使用最適合您的目標和期望的解決方案。
最後，[Containerize.com][7]不斷地撰寫有關進一步開源產品和主題的博客文章。因此，請與常規更新的[開源Web服務器][8]類別保持聯繫。此外，您可以在我們的社交媒體帳戶[Facebook][9]，[LinkedIn][10]和[Twitter][11]上關注我們。

## 探索 {#explore}

您可能會發現以下鏈接相關：
  * [2021年的前5個開源Web服務器解決方案堆棧][12]
  * [設置XAMPP和PHPMYADMIN作為Windows上的Localhost][13]
  * [XAMPP |免費和開源Web服務器解決方案堆棧][14]
  * [nginx |輕量級和高性能網絡服務器][15]
  * [ubuntu上的LEMP堆棧的設置教程18.04][16]



[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
