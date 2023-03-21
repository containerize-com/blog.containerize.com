---
title: "Ubuntu上的LEMP堆棧設置教程18.04" 
seoTitle: "Ubuntu上的LEMP堆棧設置教程18.04" 
description: "LEMP堆棧是用於開發和部署Web應用程序的軟件堆棧。了解如何在Ubuntu 18.04上安裝NGINX，MySQL和PHP。" 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "安裝＆amp;配置LEMP堆棧用於開發和部署Web應用程序。本指南將幫助您在Ubuntu 18.04上安裝NGINX，MYSQL和PHP。" 
url: /zh-hant/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## 安裝和配置LEMP堆棧用於開發和部署Web應用程序。本指南將幫助您在Ubuntu 18.04上安裝NGINX，MYSQL和PHP。

{{< figure align=center src="images/lemp-banner.png" alt="在Ubuntu上安裝LEMP堆棧">}}


## 概述 {#prerequisites}
在本指南中，我們將安裝NGINX，MySQL和PHP（LEMP堆棧）進行開發和部署Web應用程序。我們還將在Ubuntu Server上配置Web服務器與Server PHP應用程序18.04。我們將介紹本教程中的以下各節。
  *[**先決條件**][1]
  *[**什麼是LEMP堆棧？**][2]
  *[ **LEMP安裝** ][3]
  *[**結論**][4]

## 先決條件 {#prerequisites}
在安裝軟件之前，您應該滿足以下要求。
  *帶有Ubuntu操作系統的服務器
  *與 **sudo** 特權的非根本用戶

## 什麼是LEMP堆棧？   {#什麼}
**LEMP堆棧**是一個軟件集合，可用於運行基於PHP的Web應用程序。 LEMP代表Linux，Nginx，MySQL和PHP。 LEMP堆棧是燈泡的變體。 LAMP和LEMP都是用於開發和部署Web應用程序的流行軟件堆棧。這兩個軟件堆棧之間有一個區別。 LAMP利用Apache Web服務器，而LEMP服務器則利用Nginx Web服務器。

## LEMP安裝 {#installation}
在本節中，我們將重點介紹如何在Ubuntu 18.04上安裝NGINX，MySQL和PHP。首先，我們需要通過運行以下命令來更新服務器軟件包。
```
$ sudo apt update
```

## #安裝Nginx Web服務器
  *將下面的命令運行到**在Ubuntu**上安裝nginx。
```
$ sudo apt install nginx
```
  *完成NGINX安裝後，打開Web瀏覽器並輸入服務器IP地址。它將向您顯示NGINX Web服務器默認的歡迎頁面。

{{< figure align=center src="images/nginx-home-1.png" alt="Nginx Web服務器默認頁面">}}


## #安裝mysql
現在，您需要安裝MySQL數據庫服務器來管理應用程序數據。
  *將下面的命令運行**在Ubuntu**上安裝mysql。
```
$ sudo apt install mysql-server
```
  *要保護MySQL安裝，請運行以下命令。
```
$ sudo mysql_secure_installation
```
  *您將被要求您要啟用**驗證密碼插件**是否。最好不要啟用它，然後鍵入n並按Enter以行駛下一步。
  *接下來，它將問您幾個問題，如下所示。您需要回答所有問題。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  *現在，MySQL Server正在啟動並運行。您可以使用以下命令對其進行測試。輸入您的Ubuntu root帳戶密碼，而不是MySQL，以防該密碼提示密碼。
```
$ sudo mysql
```
  *輸入下面的命令以從MySQL退出。
```
mysql> exit
```

## #安裝PHP
我們將介紹用於處理PHP的PHP-FPM的安裝。 PHP-FPM代表FastCGI Process Manager。 NGINX Web服務器沒有任何用於處理PHP的內置功能，因此，我們將使用PHP-FPM。此外，我們將安裝用於與MySQL通信數據管理的PHP-MYSQL。
  *將下面的命令運行到**在Ubuntu**上安裝PHP。
```
$ sudo apt install php-fpm php-mysql
```
  *現在，您已經完成了PHP安裝和LEMP堆棧的所有所需軟件以運行Web應用程序。
  *在此步驟中，我們將創建NGINX配置文件，以告訴NGINX將PHP處理器用於動態內容。運行下面的命令以創建nginx配置文件。
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  *將代碼複製到Nginx配置文件中並保存。
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  *讓我們簡要介紹一下這些指令和位置塊，以便您可以獲取基本信息。
     ***聽**：您可以定義nginx的端口。使用HTTP的端口80，將443用於HTTPS協議。
      * **root** ：為項目定義根目錄。 Nginx將使用它為網站或Web應用程序服務。
     ***索引**：定義應提供文件的順序。當調用索引文件時，NGINX將提供index.php文件。
      * **server_name** ：定義服務器的域名或公共IP。
      ***位置 /**：此位置塊具有 **try_block** 指令，並與請求的URI匹配。 nginx返回404錯誤，如果找不到請求的文件。
      ***位置〜.php $**：此位置塊處理PHP處理。
      ***位置〜 /.htxy：nginx不處理**。htaccess**文件，此位置阻止與之處理。 nginx通過定義**所有**指令不使用.htaccess文件。
  *為新創建的Nginx配置文件創建SYMLINK以啟用它。
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  *運行以下命令來測試語法錯誤的NGINX配置文件。
```
$ sudo nginx -t
```
  *重新啟動NGINX Web服務器。
```
$ sudo systemctl restart nginx
```

## #測試PHP
  *為了確保NGINX正確提供PHP頁面，我們將創建用於測試配置的PHP文件。
  *通過運行以下命令，在NGINX Web服務器的根目錄中創建info.php文件。
```
$ sudo nano /var/www/html/info.php
```
  *將以下代碼添加到其中並保存文件。
```
<?php
phpinfo();
```
  *打開您的Web瀏覽器和鍵入域名或服務器公共IP，然後是php文件名，例如http：// server \ _ip \ _or_domain/info.php。您將看到以下頁面。

{{< figure align=center src="images/info-php.png" alt="PHP信息頁面">}}


## 結論 {#conclusion}
在本教程中，我們討論瞭如何安裝和配置 **LEMP堆棧** 。如您所見，配置軟件堆棧組件真的很容易。此外，您可以在幾分鐘內開始創建和服務Web應用程序。
最後，[ **containerize.com** ][5]正在始終如一地編寫有關更多最新開源產品的博客文章。因此，與此[ **Web服務器解決方案堆棧** ][6]類別保持聯繫以進行最新更新。

## 探索
您可能會發現以下鏈接相關：
  *[**最佳開源Web服務器解決方案堆棧**][7]
  * **[最受歡迎的開源數字法醫工具][8]**
  * **[2021年的前5個開源消息隊列（MQ）軟件][9]**
  * **[最佳開源雲存儲和文件共享軟件][10]**
  *[**如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin**][11]
  *[**如何在Ubuntu上使用Nginx安裝多個PHP版本**][12]
  *[**最受歡迎的OSI批准的2021年的OSI批准的開源許可證**][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
