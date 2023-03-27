---
title: "如何在Ubuntu上使用NGINX安裝多個PHP版本" 
seoTitle: "如何在Ubuntu上使用NGINX安裝多個PHP版本" 
description: "本文介紹瞭如何在Ubuntu上使用NGINX安裝多個版本的PHP。我們將逐步進行有關如何使用NGINX安裝PHP的分步說明。" 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "如果您希望使用Nginx使用多個版本的PHP，那麼在本文中，我們將指導您如何在Ubuntu上使用Nginx安裝PHP。" 
url: /zh-hant/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="具有NGINX多個PHP版本的PHP">}}


##如果您想將多個版本的PHP與NGINX一起使用，則在本文中，我們將指導您如何在Ubuntu上使用Nginx安裝PHP。
本文是我們關於Nginx教程的系列文章的延續。到目前為止，我們已經介紹瞭如何使用NGINX作為負載平衡器，如何使用NGINX作為反向代理。現在，本教程涵蓋了另一個要求的問題：“如何使用nginx使用多個版本的PHP”。在本教程中，我們將指導您逐步指導如何在Ubuntu上安裝PHP，如何使用NGINX配置PHP，最後如何使用NGINX安裝多個版本的PHP。所以，讓我們開始吧！
  * [安裝nginx][1]
  * [安裝多個PHP版本][2]
  * [使用PHP創建多個網站][3]
  * [配置nginx以運行網站的不同版本][4]
  * [結論][5]

## 安裝nginx {#nginx}

NGINX（發音為“ Engine-X”）是一種開源Web服務器，通常用作反向代理或HTTP緩存。它可以免費提供Linux。
要安裝NGINX，請使用以下命令：
```
sudo apt update
sudo apt install nginx
```
安裝完成後，您可以在瀏覽器中打開“ http：// localhost”，並且所有設置。

{{< figure align=center src="images/php-with-nginx-install.png" alt="使用nginx安裝php">}}


## 安裝多個PHP版本 {#php}

 **php** （ **php：超文本預處理器** 的遞歸首字母縮寫）是一種開源的，流行的通用腳本語言，廣泛使用，最適合開發網站和基於Web的應用程序。這是一種服務器端腳本語言，可以嵌入HTML中。
當前，有三個支持版本的  **php** ，即  **php 5.6**  ，  **7.0，**  和  **8.0**  。含義  **php 5.3**  ，  **5.4，**  和 **5.5**  都達到了生命的盡頭；他們不再支持安全更新。因此，讓我們首先使用PHP-FPM安裝PHP 7.0和PHP 7.2。
實際上，在我們使用安裝移動之前，首先讓PHP-FPM是什麼。  **php-fpm** （ **FastCGI Process Manager**  的首字母縮寫詞）是極大的替代PHP（超文本處理器）FastCGI實現。 PHP-FPM包含許多功能，這些功能可以證明對經常接收流量的網站有益。
要首先安裝PHP 7.0和7.2，您需要將PHP存儲庫添加到服務器中以安裝多個版本的PHP。您可以使用以下命令添加Ondrej PHP存儲庫：
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
存儲庫最新後，請使用以下命令安裝PHP 7.0，PHP 7.2和PHP-FPM：
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
安裝完成後，使用以下命令檢查PHP-FPM的狀態：
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## 使用PHP創建多個網站 {#web}

默認頁面放置在/var/www/html/位置。您可以將靜態頁面放置在此處，或使用虛擬主機並將其放置在其他位置
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
接下來創建一個site 1的sample index.php文件1：
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
現在，為site 2創建一個sample index.php文件2：
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
然後，將兩個網站的所有權更改為www-data：
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## 配置nginx {#configure}

接下來，您需要為使用PHP 7.0的domain site1.containerize.com創建一個Nginx虛擬主機文件。另一個用於使用php 7.2的site2.containerize.com。
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
添加以下行：
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
現在為site2.containerize.com創建第二個文件
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
然後，使用以下命令啟用兩個虛擬主機文件：
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
最後，重新啟動NGINX和PHP-FPM服務以應用所有配置更改：
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## 結論 {#conclusion}

在本教程中，我們探索瞭如何在Ubuntu上使用多個PHP版本。我們學會瞭如何安裝nginx。然後，我們探索瞭如何在NGINX中設置兩個不同的網站。最後，我們學會瞭如何用Nginx使用不同版本的PHP配置兩個不同的網站。希望該教程對您有幫助。

## 探索
  * [如何設置和配置為反向代理][6]
  * [如何將NGINX用作應用程序的負載平衡器][7]



 [1]: #nginx
 [2]: #php
 [3]: #web
 [4]: #configure
 [5]: #conclusion
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
