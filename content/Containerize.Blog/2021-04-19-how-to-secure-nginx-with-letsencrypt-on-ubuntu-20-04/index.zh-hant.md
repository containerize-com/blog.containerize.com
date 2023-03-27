---
title: "如何使用Let's Encrypt在Ubuntu 20.04上保護Nginx" 
seoTitle: "如何使用Let's Encrypt在Ubuntu 20.04上保護Nginx" 
description: "如何通過在Ubuntu上加密設置，加密和安全nginx。讓我們加密客戶端生成證書以自動配置nginx。" 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "網站包括SSL/TLS對其域吸引訪問者的加密。本文解釋了使用Certbot實用程序來獲取NGINX的TLS/SSL證書。" 
url: /zh-hant/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

##網站包括SSL/TLS加密，以吸引訪問者。本文解釋了使用Certbot實用程序來獲取NGINX的TLS/SSL證書。

{{< figure align=center src="images/nginxletsencrypt.png" alt="通過在Ubuntu上加密固定nginx">}}


##  **概述**  
任何尋求吸引訪問者的網站都需要包括TLS/SSL加密的域名。 SSL免費證書可確保您的Web服務器之間的安全連接，例如加密和安全的NGINX和應用程序瀏覽器。讓我們加密是一個免費的，自動化和開放的證書授權機構，使您可以為Nginx SSL Letsencrypt設置此類保護。讓我們加密免費的SSL證書均受到所有主要瀏覽器的信任，並且在發行日期以來的接下來的90天有效。
這篇博客文章說明了使用Nginx Certbot實用程序獲得NGINX HTTPS LETSENCRYPT證書，以在Ubuntu 20.04 / 18.04上對運行Web Server的NGINX運行Web服務器進行加密的最簡單方法，並設置您的證書自動續訂IT證書。讓我們開始並設置LETSENCRYPT UBUNTU NGINX配置。
* 依賴和先決條件
* 安裝certbot實用程序
* 確認Nginx的配置
* 允許HTTP通過防火牆
* 獲得SSL證書
  * 結論

## 首先：依賴和先決條件 {#prerequisites}

為了遵循本文，您需要以下依賴項和先決條件來安裝letsencrypt ubuntu nginx實用程序：
* 在本地/遠程計算機上啟用了啟用SUDO的非根或根用戶。
* 運行Ubuntu 20.04或Ubuntu的系統18.04
* 訪問命令行終端
* 本地/遠程機器上的sudo或根特權
  * NGINX已安裝並設置
* 指向公共IP的註冊域名
* 為該域名配置的服務器塊
* 防火牆配置為接受端口80和443上的連接。

## 步驟1  - 安裝CERTBOT {#step-1-—-installing-certbot}

確保NGINX和使用Let's Encrypt加密NGINX的第一步是安裝nginx certbot完整的且易於使用的軟件包，以獲取和續訂服務器上的加密SSL證書。為此，首先要在Ubuntu上打開終端並更新本地存儲庫。輸入y並輸入（如果提示）。
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
現在，讓我們驗證一些NGINX安全配置設置。

## 步驟2  - 確認Nginx的配置 {#step-2-—-confirming-nginx-39-s-configuration}

如依賴項和先決條件部分中所述，您應該已經有一個註冊的域，Certbot需要能夠找到該域的正確NGINX服務器塊以自動配置SSL。例如，此博客文章使用domain blog.containerize.com和服務器塊，用於您的域，at /etc/nginx/sites-available/blog.containerize.com，並使用已正確設置的server_name指令。
要確認，請使用Nano或您喜歡的文本編輯器打開域的配置文件：
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
在file /etc/nginx/sites-available/blog.containerize.com中找到現有的server_name指令行。看起來應該這樣：
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
現在，驗證您的nginx配置文件的語法和重新加載nginx服務器以加載新的配置設置：
```
sudo nginx -t
sudo systemctl reload nginx

```
Certbot實用程序現在可以找到正確的NGINX服務器塊指令，以保護NGINX並自動更新它。在下一步中，讓我們更新防火牆以允許HTTPS流量。

## 第3步 - 允許HTTP通過防火牆 {#step-3-—-allowing-https-through-the-firewall}

根據本文的建議，您需要調整設置以允許HTTPS流量。為了確保啟用防火牆並活躍，請運行以下命令：
```
sudo ufw status

```
輸出應告訴您UFW處於活動狀態，並為您提供設置規則的列表。它僅顯示允許HTTP流量到Web服務器。為了允許加密的流量，您可以添加nginx https配置文件或使用nginx Full並刪除現有的Nginx HTTP規則。通過鍵入命令允許NGINX HTTPS流量：
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
驗證通過鍵入UFW狀態命令來允許HTTPS流量的HTTPS規則：
```
sudo ufw status

```
接下來，讓我們運行certbot並獲取我們的證書。

## 步驟4  - 獲得SSL證書 {#step-4-—-obtaining-an-ssl-certificate}

NGINX的certbot插件將在必要時重新配置NGINX並重新加載其配置。因此，只有您需要通過執行以下命令來生成使用NGINX插件的證書：
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
如果這是您第一次運行certbot實用程序，則certbot要求您配置您的HTTPS設置。將提示您輸入電子郵件地址並同意服務條款。命中輸入後，將更新配置，Nginx將重新加載以拾取新設置。最後，Certbot將顯示一條消息，告訴您證書已成功生成以及您的證書存儲何處。
您的證書已下載，安裝和加載Nginx SSL證書LetSencrypt配置。嘗試使用https：//重新加載您的網站，並註意瀏覽器的安全指標。它應該表明該站點通常使用鎖圖標正確固定。如果您使用SSL Labs服務器測試測試服務器，則它將獲得Nginx和Letsencrypt的A等級。
讓我們通過測試續訂過程來完成。

## 步驟5  - 驗證Certbot自動續訂 {#step-5-—-verifying-certbot-auto-renewal}

因為讓我們加密證書每90（90）天到期，並且NGINX SSL LETSENCRYPT鼓勵用戶設置和自動更新Cron Job。首先，為當前用戶打開crontab配置文件：
```
sudo crontab -e
```
添加一個運行certbot命令的CRON作業，如果檢測證書將在30天內續簽，則續簽nginx續簽證書。安排它在指定的時間每天運行，例如上午5:00
```
sudo certbot renew --dry-run

```
如上所述，cron作業還應包括–quiet屬性。這指示NGINX續訂SSL證書在執行任務後不包括任何輸出。啟用自動證書更新。添加Cron作業後，保存更改並退出文件。

## 結論 {#conclusion}

在本文中，我們學會瞭如何nginx安裝letsencrypt SSL證書。我們為您的域下載了SSL證書，並配置了NGINX使用這些證書。此外，您應該啟用Certbot自動續訂SSL NGINX LETSENCRYPT的證書。在即將到來的教程中，我們將討論有關如何使用標準安全技術保護Web服務器的更多有趣主題，該技術可以在Web瀏覽器和Web服務器之間進行加密通信。
_您可以加入我們的[Twitter][1]，[LinkedIn][2]和我們的[Facebook][3]頁面。您使用哪種加密協議在計算機網絡上提供通信安全性？如果您有任何疑問，請_ [聯繫][4]。

## 探索
您可能會找到以下相關鏈接來監視服務器性能並確保其可靠性和安全性：
  * [如何將Apache配置為Ubuntu/Debian的反向代理][5]
  * [如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin][6]
  * [在Ubuntu/debian上配置http/2支持nginx][7]
  * [在AWS生產服務器上使用乘客的設置NGINX][8]
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][9]



 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
