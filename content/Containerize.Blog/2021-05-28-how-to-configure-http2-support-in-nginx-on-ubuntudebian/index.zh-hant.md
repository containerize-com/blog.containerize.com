---
title: "如何在ubuntu/debian上配置nginx中的http/2支持" 
seoTitle: "如何在ubuntu/debian上配置nginx中的http/2支持" 
description: "HTTP2或H2是二進制協議，並改進了HTTP協議的版本，它允許在NGINX啟用http2支持後提高站點頁面的速度" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2是一種可靠的多路復用協議，用於提高頁面加載速度和安全性。在本教程中，我們將學習如何使用HTTP/2支持設置NGINX。" 
url: /zh-hant/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2是一種可靠的多重協議，用於提高頁面負載速度和安全性。在本教程中，我們將學習如何使用HTTP/2支持設置NGINX。

{{< figure align=center src="images/nginx-enable-http2.png" alt="nginx啟用ubuntu和debian的HTTP2支持">}}


## **概述**
NGINX是一個快速可靠的Web服務器。由於其記憶範圍較低，負載平衡，高可擴展性，緩存，對大多數協議的支持和反向代理，因此獲得了受歡迎程度。現在，讓我們談談NGINX如何啟用HTTP2協議。
NGINX支持的協議之一是2015年5月發布的HTTP/2。HTTP/2的主要優點是其內容豐富的網站的高傳輸速度，減少Web服務器上的負載，並且可以啟動多個並行請求。在單個TCP連接中。 nginx enable HTTP2是HTTP協議的改進版本。在開始之前，我們將需要一些帶有SSL證書的Ubuntu或Debian服務器。在本教程中，我們將指導您介紹如何在Ubuntu上啟用HTTP2的nginx。
  *更新軟件包並安裝nginx
  *啟用HTTP/2支持
  *添加服務器名稱
  *添加SSL證書
  *刪除密碼
  *將所有HTTP請求重定向到HTTP
  *重新啟動nginx
  * 結論

## 步驟1：更新軟件包並安裝nginx   {#4597}
第一步是更新和升級APT包裝系統中的存儲庫。使用更新將下載最新版本軟件包，升級將在列表中安裝最新版本的軟件包。運行下面的APT命令以更新和升級軟件包。
```
sudo apt-get update && apt-get upgrade
```
下一步是安裝最新版本的NGINX軟件包。在NGINX版本1.9.5及以上引入了對HTTP/2協議的支持。因此，我們將必須安裝最新版本的NGINX軟件包。運行以下使用APT安裝命令來安裝NGINX軟件包：
```
sudo apt-get install nginx
```
將提示您確認逐步安裝過程。選擇“是”選項並完成安裝過程。安裝過程完成後，下一步是檢查軟件包的版本，無論我們是否安裝了正確的版本。您可以通過鍵入命令來檢查NGINX Web服務器的版本：
```
sudo nginx -v
```
上述版本檢查命令的輸出應類似於以下內容：
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## 步驟2：啟用http/2支持 {#f4d2}
安裝NGINX軟件包後，我們需要啟用HTTP2 NGINX。用戶必須將收聽端口從80更改為443。讓我們打開Nginx配置文件：
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
您可以看到默認情況下的nginx值設置為偵聽是端口80。
聽80 default_server;
聽[::]：80 default_server;
如您所見，有兩個不同的偵聽變量。第一個偵聽變量用於所有IPv4Connections，第二個是用於IPv6連接的。我們將啟用兩個變量的加密。將收聽端口號更改為443，並為HTTPS協議添加SSL連接，如下所示：
收聽443 SSL HTTP2 DEFAULT_SERVER;
聽[::]：443 SSL HTTP2 DEFAULT_SERVER;
請注意，除SSL外，我們還添加了HTTP2。 NGINX現在能夠使用支持HTTP/2協議的瀏覽器。

## 步驟3：添加服務器名稱 {#A745}
下一步是更改服務器\ _名稱，以便服務器名稱與域名關聯。用戶只需要更改配置文件中的服務器名稱即可。在配置文件中找到服務器\ _name條目，然後將_更改為您的實際域，如下：
```
server_name example.com www.example.com;
```
通過在文本編輯器中編輯保存服務器配置文件。您可以使用命令檢查nginx配置是否為語法錯誤：
```
sudo nginx -t
```
如果語法沒有錯誤，則您將看到以下輸出：
nginx：配置文件/ETC/NGINX/NGINX.CONF語法是可以的
nginx：configuration file /etc/nginx/nginx.conf測試成功

## 步驟4：添加SSL證書 {#37C0}
下一步是啟用NGINX HTTPS配置使用您的SSL證書。您可以生成自簽名證書或[從Let's Encrypt中安裝免費證書][1]。如果您沒有SSL證書，請遵循本教程。在NGINX配置目錄中添加您的SSL證書類似：
```
sudo mkdir /etc/nginx/ssl
```
將您的證書和私鑰複製到此位置，還將example.com替換為您的實際域名：
sudo cp/path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp/path/to/your/private.key /etc/nginx/ssl/example.com.key
現在，再次打開Nginx服務器配置文件。使用證書的位置添加並配置NGINX服務器塊內部的新SSL線路，以啟用NGINX SSL配置：
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
保存文件nginx文件並退出文本編輯器。

## 步驟5：刪除密碼 {#D291}
密碼是一種用於數據加密和解密的加密術中的算法。密碼套件是用於保護網絡連接的一堆密碼算法。 HTTP/2具有巨大的不安全密碼黑名單，需要刪除。在這裡，我們將使用由Internet Giants Cloudflare批准的流行密碼集。
打開以下nginx配置文件/etc/nginx/nginx.conf，然後在** ssl \ _prefer \ _server_ciphers上添加以下行。
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
您可以將GZIP設置為OFF並添加代理\ _max \ _temp \ _file \ _size 0;為了避免err \ _http2 \ _protocol_error nginx錯誤。

## 步驟6：將所有http請求重定向到https   {#b387}
現在，我們應該告訴NGINX HTTP2代理，僅當服務器收到HTTP請求時，它應該通過HTTPS提供內容。最後，忽略評論的行，您的nginx配置文件/etc/nginx/sites-available/domain-name.com應該看起來與此相似：
服務器{收聽443 SSL HTTP2 DEFAULT_SERVER;聽[::]：443 SSL HTTP2 default_server; root/var/var/www/html; index index index.html index.htm index.htm index.nginx-debian.html; server_name example.com; locaty/location/locess/{ ; } ssl_certificate /etc/nginx/ssl/example.com.crt; sssl_certificate_key /etc/nginx/nginx/ssl/ssl/example.com.ykey；聽[::]：80; server_name example.com;返回301 https：// $ server_name $ request_uri;}
保存文件/etc/nginx/sites-available/domain-name.com，然後退出。檢查語法錯誤的配置：
```
sudo nginx -t
```

## 步驟7：RESTART NGINX   {#E687}
要應用所有更改，請重新啟動NGINX HTTP2反向代理服務器並檢查配置狀態。
sudo systemctl restart nginx
sudo systemctl狀態nginx

## **結論：**   {#4a1a}
恭喜，您已經成功地學習瞭如何在Ubuntu Server上設置Nginx Config Http2支持。您的NGINX HTTP2設置現在為HTTP/2頁提供，並且還清除了HTTP/1和HTTP/2協議之間的差異。如果您仍然遇到任何配置問題，請在評論部分中告訴我們。
您對HTTP2多路復用協議有任何疑問嗎？_，請_ [獲得聯繫][2]。

## 探索
您也可能喜歡以下文章：
  * [如何將Apache配置為Ubuntu/Debian的反向代理][3]
  * [如何][3][在Ubuntu上使用Nginx安裝並固定PhpMyAdmin][4]
  * [如何在AWS生產服務器上使用乘客設置NGINX][5]
  * [安全和加密nginx與讓我們在Ubuntu上加密20.04][1]
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
