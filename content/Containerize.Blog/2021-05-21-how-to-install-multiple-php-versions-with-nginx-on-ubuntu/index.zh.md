---
title: "如何在Ubuntu上使用NGINX安装多个PHP版本" 
seoTitle: "如何在Ubuntu上使用NGINX安装多个PHP版本" 
description: "本文介绍了如何在Ubuntu上使用NGINX安装多个版本的PHP。我们将逐步进行有关如何使用NGINX安装PHP的分步说明。" 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "如果您希望使用Nginx使用多个版本的PHP，那么在本文中，我们将指导您如何在Ubuntu上使用Nginx安装PHP。" 
url: /zh/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="具有NGINX多个PHP版本的PHP">}}


## 如果您想将多个版本的PHP与NGINX一起使用，则在本文中，我们将指导您如何在Ubuntu上使用Nginx安装PHP。
本文是我们关于Nginx教程的系列文章的延续。到目前为止，我们已经介绍了如何使用NGINX作为负载平衡器，如何使用NGINX作为反向代理。现在，本教程涵盖了另一个要求的问题：“如何使用nginx使用多个版本的PHP”。在本教程中，我们将逐步指导您如何在Ubuntu上安装PHP，如何使用NGINX配置PHP，最后如何使用Nginx安装多个版本的PHP。所以，让我们开始吧！
  * [安装nginx][1]
  * [安装多个PHP版本][2]
  * [使用PHP创建多个网站][3]
  * [配置nginx以运行网站的不同版本][4]
  * [结论][5]

## install nginx {#nginx}
NGINX（发音为“ Engine-X”）是一种开源Web服务器，通常用作反向代理或HTTP缓存。它可以免费提供Linux。
要安装NGINX，请使用以下命令：
```
sudo apt update
sudo apt install nginx
```
安装完成后，您可以在浏览器中打开“ http：// localhost”，并且所有设置。

{{< figure align=center src="images/php-with-nginx-install.png" alt="使用nginx安装php">}}


## 安装多个PHP版本{#php}
** php **（** php：超文本预处理器**的递归首字母缩写）是一种开源的，流行的通用脚本语言，广泛使用，最适合开发网站和基于Web的应用程序。这是一种可以嵌入HTML中的服务器端脚本语言。
当前，有三个支持版本的** php **，即** php 5.6 **，** 7.0，**和** 8.0 **。含义** php 5.3 **，** 5.4，**和** 5.5 **都达到了生命的尽头；他们不再支持安全更新。因此，让我们首先使用PHP-FPM安装PHP 7.0和PHP 7.2。
实际上，在我们使用安装移动之前，首先让PHP-FPM是什么。 ** php-fpm **（** FastCGI Process Manager **的首字母缩写词）是极大的替代PHP（超文本处理器）FastCGI实现。 PHP-FPM包含许多功能，这些功能可以证明对经常接收流量的网站有益。
要首先安装PHP 7.0和7.2，您需要将PHP存储库添加到服务器中以安装多个版本的PHP。您可以使用以下命令添加Ondrej PHP存储库：
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
存储库最新后，请使用以下命令安装PHP 7.0，PHP 7.2和PHP-FPM：
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
安装完成后，使用以下命令检查PHP-FPM的状态：
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## 使用PHP {#web}创建多个网站
默认页面放置在/var/www/html/位置。您可以将静态页面放置在此处，或使用虚拟主机并将其放置在其他位置
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
接下来创建一个site 1的示例索引.php文件1：
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
现在，为site 2创建一个sample index.php文件2：
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
然后，将两个网站的所有权更改为www-data：
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## configure nginx {#configure}
接下来，您需要为使用PHP 7.0的domain site1.containerize.com创建一个Nginx虚拟主机文件。另一个用于使用php 7.2的site2.containerize.com。
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
现在为site2.containerize.com创建第二个文件
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
然后，使用以下命令启用两个虚拟主机文件：
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
最后，重新启动NGINX和PHP-FPM服务以应用所有配置更改：
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## 结论{#conclusion}
在本教程中，我们探索了如何在Ubuntu上使用多个PHP版本。我们学会了如何安装nginx。然后，我们探索了如何在NGINX中设置两个不同的网站。最后，我们学会了如何用Nginx使用不同版本的PHP配置两个不同的网站。希望该教程对您有帮助。

## 探索
  * [如何设置和配置为反向代理][6]
  * [如何将NGINX用作应用程序的负载平衡器][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
