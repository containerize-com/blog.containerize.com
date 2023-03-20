---
title: "如何在Ubuntu上使用Apache安装和配置OllCloud" 
seoTitle: "如何在Ubuntu上使用Apache安装和配置OllCloud" 
description: "OwnCloud是用于创建文件托管服务的开源客户端服务器软件。在本教程中，我们将学习如何在ubuntu上安装和配置owncloud" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud是用于创建文件托管服务器的客户端服务器软件的开源集合。本教程是关于如何在Ubuntu上配置owncloud的。" 
url: /zh/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud是一个开源的客户端服务器软件集合，用于创建文件托管服务器。本教程是关于如何在Ubuntu上配置owncloud的。

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **概述**
OwnCloud是免费且流行的开源企业Web应用程序，该应用程序用PHP编写，用于数据同步和文件共享。它还使您可以轻松地管理数据文件，联系人，日历，进行列表等等​​。它是最受欢迎的云平台的绝佳选择，例如Google Drive，Dropbox，iCloud和其他云存储服务。但是，与其他云存储服务不同，OwnCloud自托管可以免费创建自己的主机云。
OwnCloud是一种开源的私有云软件，可使用Web界面提供数据访问来创建私有云。它使您可以创建自己的文件共享服务器，在其中您可以轻松查看和同步日历事件，档案，图片，录音，任务，带有书签的地址，类似于Dropbox和Google Drive。它还提供了在您控制下的所有设备上同步和共享数据的选项。安装和配置OwnCloud支持您的数据同步桌面客户端以及移动应用程序设备。此外，您可以使用ubuntu上的owncloud轻松地实现对每个用户文件的用户访问限制。 OwnCloud开源个人存储服务器是一个跨平台应用程序，可以安装在所有流行的操作系统上。
本教程将帮助您在Ubuntu LTS系统上设置OwnCloud和配置OwnCloud。
  *安装灯服务器
  *下载ownCloud
  *创建MySQL数据库和用户
  *安装ownCloud
  * OwnCloud的最佳选择是什么？
  * 结论

## 步骤1：安装灯服务器
要设置自己的云服务器以及如何创建私有云，我们首先需要设置运行灯服务器。如果您已经安装并运行灯堆栈，请跳过此步骤，请使用以下命令在Ubuntu系统上设置灯。

### 安装php
您可以通过运行命令在Ubuntu或Debian系统上安装PHP 5.6或更高版本：
sudo apt-get安装python-software-properties
sudo附加措施PPA：ondrej/php
sudo apt-get更新
sudo apt -get升级-y
sudo apt-get安装-y php php-GD php-curl php-zip php-dom php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### 安装apache2
Apache是​​使用最广泛的开源Web服务器软件。接下来，在Ubuntu上安装Apache Web服务器，以通过运行来设置自己的云服务器：
sudo apt-get安装-y apache2 libapache2-mod-php
{{_LINE_35_}}

### 安装mysql
MySQL开源关系数据库管理系统是LAMP Web应用程序软件堆栈等的组成部分。现在通过在下面运行在Ubuntu上安装mySQL：
sudo apt-get安装-y mysql-server php-mysql
{{_LINE_39_}}

## 步骤2：在ubuntu上下载owncloud
在Ubuntu系统上成功配置LAMP服务器后，让我们从其[官方网站][1]下载最新的OllCloud私有云存储解决方案。
CD /TMP
WGET https://download.owncloud.org/community/owncloud-10.4.0.4.0.tar.bz2
{{_LINE_44_}}
下载OwnCloud Server软件已完成后，现在通过在Ubuntu上安装ownCloud来提取网站文档root下载的存档，并在文件和目录上设置适当的权限。
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data：www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
现在，删除存档文件并重新启动Apache服务器。
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2

## 步骤3：创建OwnCloud数据库和用户
提取代码后，现在创建一个MySQL数据库和用户帐户，以配置OwnCloud个人云存储服务器。使用以下命令集登录到MySQL Server来创建OwnCloud数据库和用户。
mysql -u root -p
输入密码：
mysql>创建数据库owncloud;
mysql>在ownCloud上授予全部。
mysql>冲洗特权；
mysql>退出
{{_LINE_62_}}
接下来，我们需要从Web界面上安装Ubuntu上的OllCloud来创建一个私有云。

## 步骤4：在ubuntu上安装owncloud
现在，访问Web浏览器上的最佳个人Cloud Server Web面板目录。将本地主机更改为您的服务器IP地址或域名。
http：// localhost/owncloud/
{{_LINE_67_}}
您应该查看开源OllCloud登录页面。输入新的管理用户名和密码凭据以创建管理帐户并提供数据文件夹的位置。如果一切正常，那么您就应该获得这样的网页。
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="在ubuntu上安装apache">}}

{{_LINE_71_}}
现在向下滑动页面。在下面的形式中，您需要将用户名和密码输入到管理器最佳个人云服务器ownCloud面板。还可以提供数据库以及用户名和密码，以将OwnCloud服务器与数据库服务器，数据文件夹的位置连接，然后单击**完成设置**。
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="在ubuntu上配置owncloud">}}

{{_LINE_75_}}
完成设置后，您将获得管理仪表板。您可以在哪里创建用户，组并分配权限，等等。
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="安装ownCloud仪表板">}}

{{_LINE_79_}}
是的！我们使用OwnCloud安装指南来构建个人云存储。现在，您知道如何在Ubuntu上完全安装owncloud，以逐步构建类似于Dropbox或Google Drive的私有云。

## ** owncloud的最佳替代方案是什么？** {#4a1a}
以下是自托管的ownCloud替代方案和竞争对手文件托管软件。
  *** Seafile **是开源跨平台文件托管软件系统
  *** NextCloud **是免费的，开源云存储平台
  *** resilio Sync **是开源对等文件同步应用程序
  *** Pydio单元**是开源文件共享和同步软件
  ***同步**是免费的，开源对等文件同步应用程序

## **结论：** {#Block-DD1258F4-E0C5-4AC9-BE18-7DD2A700F09E}
恭喜！您已经成功安装和配置了OwnCloud，以使用Ubuntu Machine上的Apache构建自己的私有云。现在，您的数据永远不会掌握在第三方手中，并且可以在虚拟的私有云Ollcloud Ubuntu Server存储中私下管理。由于数据隐私的许多问题，许多公司选择使用许多重要信息来创建自己的云服务器。在即将到来的教程中，我们将讨论Web服务器解决方案堆栈的更多有趣主题。
_您可以在[Twitter][2]，[LinkedIn][3]和我们的[Facebook][4]页面上加入我们。您在线使用哪种基于云的存储解决方案？如果您有任何疑问，请_ [联系][5]。

## 探索：
我们还有其他几篇与您的服务器日常管理有关的文章。
  * [如何将Apache配置为Ubuntu/Debian的反向代理][6]
  * [如何在Ubuntu上使用nginx安装和保护PhpMyAdmin][7]
  * [安全和加密nginx与让我们在Ubuntu上加密20.04][8]
  * [在Ubuntu/debian上配置http/2支持nginx][9]
  * [在AWS生产服务器上使用乘客的设置Nginx][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
