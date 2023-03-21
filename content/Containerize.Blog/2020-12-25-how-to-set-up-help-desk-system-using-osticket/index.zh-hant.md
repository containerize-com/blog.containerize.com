---
title: "如何使用osticket設置在線幫助台軟件" 
seoTitle: "如何使用osticket設置在線幫助台軟件" 
description: "使用Osticket幫助台在一個地方管理您的所有支持請求。將通過電子郵件，電話和表格創建的查詢轉換為基於Web的門票。" 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "使用Osticket在一個地方管理所有支持請求。將通過電子郵件，電話和表單創建的查詢轉換為基於Web的簡單門票。" 
url: /zh-hant/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## 使用Osticket在一個地方管理您的所有支持請求。將通過電子郵件，電話和表單創建的查詢轉換為基於Web的簡單門票。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="如何使用osticket設置在線幫助台軟件">}}

Osticket是開源在線幫助台軟件解決方案。 Osticket Helpdesk是高成本和復雜客戶支持系統的免費替代品。它是簡單，輕巧，可靠，基於網絡且易於設置和使用。最好的部分是，它是完全免費的。我們將在本教程中介紹以下各節：
  * [什麼是osticket？][1]
  * [osticket的優缺點][2]
  * [如何設置Osticket？][3]
  * [結論][4]

## 什麼是osticket？   {#osticket}
Osticket提供了用戶友好的控制面板和實時報告組件。用戶可以只需幾個簡單的步驟即可登錄並創建門票。他們可以通過您的網站，電子郵件或電話創建門票。然後，即將到來的門票將保存並分配給代理商。代理商將收到電子郵件通知，並會響應查詢以幫助解決他們的問題。客戶和代理商可以討論評論部分的詳細信息和進度。客戶可以通過此在線幫助台軟件提供的內置客戶門戶網站跟踪他們的要求和進度。

## osticket   {#pros}的優點和缺點

## ## 專業人士
  * Osticket對最終用戶和支持代理人都非常友好。
* 與豐富的功能捆綁在一起，Osticket擁有您所需的一切，而不會過於復雜。
  * Osticket是完全免費的開源票務管理軟件。
* 它輕巧，安全，可靠且易於安裝幫助辦公桌管理軟件。
* 可以在所有流行的Web服務器上運行，包括Apache，Nginx，LightTPD和IIS等。

## ## cons
  * Osticket不如其他付費服務台系統提供詳細信息的門票分析和統計信息。
* 與其他支持系統相比，它的用戶界面非常簡單且基本。

## 如何安裝Osticket？   {#如何}
請按照以下步驟在Ubuntu 18.04 LTS上安裝Nginx。
* 為Osticket創建一個新目錄。
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
* 使用以下命令下載最新的Osticket設置。
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
* 之後，使用這些命令從示例文件中創建配置文件。
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
* 然後將Osticket Web目錄的所有權更改為“ www-data”用戶和組。
```
sudo chown -R www-data:www-data /var/www/osticket/

```
* 之後，創建新的虛擬主機配置文件。
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
* 然後將配置代碼粘貼到其中。
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
* 根據您的域名更改服務器名稱。保存文件並退出。
* 現在使用以下命令將此虛擬主機文件鏈接到啟用站點的文件夾
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
* 使用以下命令測試任何配置錯誤
```
nginx -t
```
* 現在使用以下命令重新啟動NGINX服務
```
sudo systemctl restart nginx

```
* 現在在任何Web瀏覽器中輸入您的域名以開始安裝嚮導，如下圖所示

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="如何使用osticket設置在線幫助台軟件">}}

* 從php.ini啟用所需的擴展名，然後單擊“繼續”。
* 填寫所有必需的信息，然後單擊“現在安裝”**按鈕。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="如何使用osticket設置在線幫助台軟件">}}

* 在數據庫設置中，輸入dbname，用戶名和密碼。
* 最後單擊“立即安裝”按鈕
* 安裝完成後，它將顯示帶有成功消息的頁面。
* 接下來，通過運行以下命令來更改ost-config.php的許可以刪除寫入訪問：
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## 結論 {#conclusion}
Osticket最適合預算低的公司或那些想要一個簡單的服務台系統而不是複雜的公司。它是簡單，輕巧，可靠，開源和完全免費的在線幫助台軟件。這使Osticket成為更高成本客戶支持系統的絕佳選擇。要了解有關Osticket功能和安裝指南的更多信息，請在教程之後查看。

## 探索
[最佳開源和免費IT幫助台軟件][5]
[流行的基於免費售票員的服務台和客戶服務系統][6]
[開發Osticket插件的初學者指南][7]
[如何在Osticket中實施多租賃][8]
[使用WordPress和Osticket自動票務系統][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
