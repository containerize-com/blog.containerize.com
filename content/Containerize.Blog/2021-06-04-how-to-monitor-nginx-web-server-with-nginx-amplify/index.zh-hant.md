---
title: "如何使用nginx放大監視Nginx Web服務器" 
seoTitle: "如何使用nginx放大監視Nginx Web服務器" 
description: "Nginx Amplify是Nginx Web服務器和PHP應用程序的免費監視代理。本文是關於如何使用Nginx Amplify監視Nginx Web服務器的" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "監視NGINX，PHP應用程序，具有NGINX擴增和改進配置的操作系統。本文指導您設置和配置nginx擴增。" 
url: /zh-hant/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor NGINX，PHP應用程序，具有NGINX擴增和改進配置的操作系統。本文指導您設置和配置nginx擴增。

{{< figure align=center src="images/nginx-post.png" alt="使用nginx放大監視Nginx Web服務器">}}


## 概述 {#install}
**Web服務器監視**對於高流量網站非常重要。 **監視代理**將定期記錄有關Web服務器的基本指標。這些關鍵指標可用於優化NGINX配置。它將幫助您改善Web服務器和應用程序的性能。
在此博客文章中，我們將介紹 **nginx監視** 開源工具的以下各節。
  * [NGINX Web服務器][1]
  * [nginx擴增][2]
  * [安裝nginx擴增][3]
  * [監視指標][4]

## nginx Web服務器 {#nginx}
[NGINX][5]是一家免費的開源Web服務器。它比Apache簡單，輕巧且易於配置。 NGINX Web服務器還可以作為反向代理，加載平衡器，郵件代理和HTTP緩存。它適用於HTTP，HTTP，SMTP，POP3和IMAP協議。 NGINX是一款高速，可靠和內存效率的Web服務器，可改善應用程序的性能。此外，它已經越來越受歡迎，現在被視為最受歡迎的Web服務器。此外，NGINX適用於任何類型的網站，包括高流量網站和應用程序。它可以在幾乎所有操作系統上安裝和配置。

###安裝nginx
  *運行以下命令以安裝NGINX Web服務器。
```
sudo apt update
sudo apt install nginx
```
  *完成安裝後，打開瀏覽器，然後鍵入“ http：// ip \ _of \ _your_server”。您將看到以下歡迎頁面。

{{< figure align=center src="images/nginx-home.png" alt="歡迎來到nginx！">}}


## nginx amplify   {#amplify}
Nginx Amplify是Nginx開源，Nginx Plus和PHP-FPM的免費監視工具。這是用於NGINX服務器監視和應用程序的基於SAAS的工具。用戶可以輕鬆跟踪基礎架構資產，監視性能並調整配置。它提供了用戶可以利用的全面信息來優化Web服務器和應用程序配置。它充當託管NGINX和PHP應用程序的服務器上的代理。 Nginx Amplify是一種輕巧的，按日誌和監視數據以放大服務器而不會損害性能。您可以在放大儀表板上查看指標。該代理可用於所有主要操作系統，例如RHEL，CentOS，Ubuntu，Debian，Fedora和FreeBSD。 Nginx Amplify具有三個主要組件，例如Nginx Amplify Agent，Nginx Amplify Web UI和Nginx Amplify Backend。
  * **nginx擴增代理**   - 它在正在監視的系統上運行。使用SSL/TLS對所有通信進行加密。
  ***nginx Amplify Web UI**   -  Web UI顯示了Web服務器，應用程序和操作系統的指標。
  * **nginx放大後端**   - 它是一個關鍵組件，可作為SaaS實現，並負責收集指標，維護數據庫，運行分析引擎並提供核心API。

## 安裝nginx amplify   {#install}
請遵循下面的逐步指南，以在Ubuntu上安裝NGINX放大。
  *首先，您需要在nginx [網站][6]上創建一個帳戶。
  *登錄後，您將在Nginx Amplify網站上看到下面的屏幕。現在，通過SSH連接到服務器，並使用以下步驟中給出的命令。

{{< figure align=center src="images/amplify-1.png" alt="安裝nginx放大">}}

  *運行以下命令以下載代理。
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  *執行以下命令以在服務器上安裝nginx擴增。用實際的API鍵替換XXXXX。您可以在nginx放大儀表板上找到它。
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  *完成安裝後，您可以使用以下命令檢查狀態。
```
$ sudo service amplify-agent status
```
  *現在，您需要配置nginx擴增代理以查看指標。

{{< figure align=center src="images/amplify-2-1.png" alt="NGINX監視配置">}}

  *使用Stub_status配置創建一個新文件。
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  *將以下代碼複製到其中並保存文件。
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  *重新啟動NGINX Web服務器以激活stub_status模塊。
```
$ sudo service nginx restart
```
  *現在，使用以下命令打開nginx配置文件。
```
$ sudo nano /etc/nginx/nginx.conf
```
  *將以下代碼添加到其中並保存。
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  *重新啟動NGINX服務以應用所有更改。
```
$ sudo service nginx restart
```
  *接下來，導航以放大儀表板，然後單擊“完成”按鈕。您應該看到以下頁面。

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Web服務器監視">}}

  *您可以通過單擊**概述**選項卡，以更簡單和可讀的格式看到統計信息。看起來如下所示。

{{< figure align=center src="images/amplify-overview.png" alt="NGINX監視統計數據">}}


## 監視指標 {#monitoring}
nginx擴增代理收集以下類型的數據：
  * **NGINX指標**   - 它從ub_status，日誌文件和過程狀態收集各種與Nginx相關的指標。
  ***系統指標**  -  NGINX擴增監視各種系統指標，例如CPU使用，內存使用情況，網絡流量等。
  * **PHP-FPM指標**   - 如果它標識了運行的PHP-FPM主進程，則它將從PHP-FPM池狀態獲得指標。
  * **MySQL指標**   - 代理可以使用MySQL全局變量集合集來收集指標。
  * **nginx元數據**   - 代理收集有關NGINX實例，例如軟件包數據，構建信息，二進制路徑，構建配置設置等的數據。
  ***系統元數據**  - 代理收集操作系統的數據，包括主機名，正常運行時間，OS風味和其他詳細信息。

## 結論
我們已經詳細介紹了NGINX Web服務器和NGINX Amplify高級監視代理。 Nginx Amplify非常易於設置和配置。此外，我們已經介紹了關鍵指標NGINX Amplify可以跟踪**監視nginx **。這些重要的指標可用於改善NGINX Web服務器和應用程序的配置。
最後，[Containerize.com][7]正處於一個始終如一的過程中，撰寫有關更多最新開源產品的博客文章。因此，與此[Web Server解決方案堆棧][8]類別保持聯繫以進行最新更新。

## 探索
您可能會發現以下鏈接相關：
  * [如何將nginx用作應用程序的負載平衡器][9]
  * [如何設置和配置為反向代理][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
