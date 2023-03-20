---
title: "Ubuntu上的LEMP堆栈设置教程18.04" 
seoTitle: "Ubuntu上的LEMP堆栈设置教程18.04" 
description: "LEMP堆栈是用于开发和部署Web应用程序的软件堆栈。了解如何在Ubuntu 18.04上安装NGINX，MySQL和PHP。" 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "安装＆amp;配置LEMP堆栈用于开发和部署Web应用程序。本指南将帮助您在Ubuntu 18.04上安装NGINX，MYSQL和PHP。" 
url: /zh/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## 安装和配置LEMP堆栈用于开发和部署Web应用程序。本指南将帮助您在Ubuntu 18.04上安装NGINX，MYSQL和PHP。

{{< figure align=center src="images/lemp-banner.png" alt="在Ubuntu上安装LEMP堆栈">}}


## 概述{#prerequisites}
在本指南中，我们将安装NGINX，MySQL和PHP（LEMP堆栈）进行开发和部署Web应用程序。我们还将在Ubuntu Server上配置Web服务器与Server PHP应用程序18.04。我们将介绍本教程中的以下各节。
  *[**先决条件**][1]
  *[**什么是LEMP堆栈？**][2]
  *[** LEMP安装**][3]
  *[**结论**][4]

## 先决条件{#prerequisites}
在安装软件之前，您应该满足以下要求。
  *带有Ubuntu操作系统的服务器
  *与** sudo **特权的非根本用户

## 什么是LEMP堆栈？ {#什么}
** LEMP堆栈**是一个软件集合，可用于运行基于PHP的Web应用程序。 LEMP代表Linux，Nginx，MySQL和PHP。 LEMP堆栈是灯泡的变体。 LAMP和LEMP都是用于开发和部署Web应用程序的流行软件堆栈。这两个软件堆栈之间有一个区别。 LAMP利用Apache Web服务器，而LEMP服务器则利用Nginx Web服务器。

## LEMP安装{#installation}
在本节中，我们将重点介绍如何在Ubuntu 18.04上安装NGINX，MySQL和PHP。首先，我们需要通过运行以下命令来更新服务器软件包。
```
$ sudo apt update
```

### 安装Nginx Web服务器
  *将下面的命令运行到**在Ubuntu **上安装nginx。
```
$ sudo apt install nginx
```
  *完成NGINX安装后，打开Web浏览器并输入服务器IP地址。它将向您显示NGINX Web服务器默认的欢迎页面。

{{< figure align=center src="images/nginx-home-1.png" alt="Nginx Web服务器默认页面">}}


### 安装mysql
现在，您需要安装MySQL数据库服务器来管理应用程序数据。
  *将下面的命令运行**在Ubuntu **上安装mysql。
```
$ sudo apt install mysql-server
```
  *要保护MySQL安装，请运行以下命令。
```
$ sudo mysql_secure_installation
```
  *您将被要求您要启用**验证密码插件**是否。最好不要启用它，然后键入n并按Enter以行驶下一步。
  *接下来，它将问您几个问题，如下所示。您需要回答所有问题。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  *现在，MySQL Server正在启动并运行。您可以使用以下命令对其进行测试。输入您的Ubuntu root帐户密码，而不是MySQL，以防该密码提示密码。
```
$ sudo mysql
```
  *输入下面的命令以从MySQL退出。
```
mysql> exit
```

### 安装PHP
我们将介绍用于处理PHP的PHP-FPM的安装。 PHP-FPM代表FastCGI Process Manager。 NGINX Web服务器没有任何用于处理PHP的内置功能，因此，我们将使用PHP-FPM。此外，我们将安装用于与MySQL通信数据管理的PHP-MYSQL。
  *将下面的命令运行到**在Ubuntu **上安装PHP。
```
$ sudo apt install php-fpm php-mysql
```
  *现在，您已经完成了PHP安装和LEMP堆栈的所有所需软件以运行Web应用程序。
  *在此步骤中，我们将创建NGINX配置文件，以告诉NGINX将PHP处理器用于动态内容。运行下面的命令以创建nginx配置文件。
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  *将代码复制到Nginx配置文件中并保存。
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
  *让我们简要介绍一下这些指令和位置块，以便您可以获取基本信息。
      ***听**：您可以定义nginx的端口。使用HTTP的端口80，将443用于HTTPS协议。
      *** root **：为项目定义根目录。 Nginx将使用它为网站或Web应用程序服务。
      ***索引**：定义应提供文件的顺序。当调用索引文件时，NGINX将提供index.php文件。
      *** server_name **：定义服务器的域名或公共IP。
      ***位置 /**：此位置块具有** try_block **指令，并与请求的URI匹配。 nginx返回404错误，如果找不到请求的文件。
      ***位置〜.php $ **：此位置块处理PHP处理。
      ***位置〜 /.htxy：nginx不处理**。htaccess **文件，此位置阻止与之处理。 nginx通过定义**所有**指令不使用.htaccess文件。
  *为新创建的Nginx配置文件创建SYMLINK以启用它。
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  *运行以下命令来测试语法错误的NGINX配置文件。
```
$ sudo nginx -t
```
  *重新启动NGINX Web服务器。
```
$ sudo systemctl restart nginx
```

### 测试PHP
  *为了确保NGINX正确提供PHP页面，我们将创建用于测试配置的PHP文件。
  *通过运行以下命令，在NGINX Web服务器的根目录中创建info.php文件。
```
$ sudo nano /var/www/html/info.php
```
  *将以下代码添加到其中并保存文件。
```
<?php
phpinfo();
```
  *打开您的Web浏览器和键入域名或服务器公共IP，然后是php文件名，例如http：// server \ _ip \ _or_domain/info.php。您将看到以下页面。

{{< figure align=center src="images/info-php.png" alt="PHP信息页面">}}


## 结论{#conclusion}
在本教程中，我们讨论了如何安装和配置** LEMP堆栈**。如您所见，配置软件堆栈组件真的很容易。此外，您可以在几分钟内开始创建和服务Web应用程序。
最后，[** containerize.com **][5]正在始终如一地编写有关更多最新开源产品的博客文章。因此，与此[** Web服务器解决方案堆栈**][6]类别保持联系以进行最新更新。

## 探索
您可能会发现以下链接相关：
  *[**最佳开源Web服务器解决方案堆栈**][7]
  *** [最受欢迎的开源数字法医工具][8] **
  *** [2021年的前5个开源消息队列（MQ）软件][9] **
  *** [最佳开源云存储和文件共享软件][10] **
  *[**如何在Ubuntu上使用nginx安装和保护PhpMyAdmin **][11]
  *[**如何在Ubuntu上使用Nginx安装多个PHP版本**][12]
  *[**最受欢迎的OSI批准的2021年的OSI批准的开源许可证**][13]

  
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
