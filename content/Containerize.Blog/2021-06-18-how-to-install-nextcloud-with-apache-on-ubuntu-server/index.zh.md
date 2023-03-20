---
title: "如何在Ubuntu Server上使用Apache安装NextCloud" 
seoTitle: "如何在Ubuntu Server上使用Apache安装NextCloud" 
description: "NextCloud是用PHP编写的开源自托管云存储解决方案。本文将展示如何在Ubuntu上使用Apache安装NextCloud。" 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud是自托管的开源文件同步和协作软件。本教程将显示如何在Ubuntu上使用Apache安装NextCloud。" 
url: /zh/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud是自托管的开源文件同步和协作软件。本教程将显示如何在Ubuntu上使用Apache安装NextCloud。

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="如何在Ubuntn上使用Apache安装NextCloud">}}


## **概述**
** [nextCloud][1] **是一种免费的安全**自托管云存储解决方案**用PHP编程语言编写。它使用Web界面提供数据访问，并且在功能上与Dropbox相似。专有云存储解决方案（例如Dropbox和Google Drive）很方便，但可以用于收集个人数据，因为您的文件存储在其系统上。如果您需要安全，安全和兼容的文件同步和共享解决方案，则可以切换到开源NextCloud服务器。 NextCloud设置可以安装在您的私人家庭服务器或虚拟专用服务器上。
NextCloud开源提供**端到端加密**，意味着可以在上传到服务器之前在客户端设备上加密文件。它也可以与Collobora，BeansOffice NextCloud等在线办公室套件集成在一起，因此您可以直接从NextCloud Client创建和编辑DOC，PPT，XLS文件。您可以在下载shexCloud客户端下载后与NextCloud Server在计算机上共享并同步一个或多个文件和文件夹。 NextCloud Desktop下载和移动客户端提供选项，可以在您控制下的所有设备上进行同步和共享。将数据文件放入您的本地共享目录中，这些文件立即使用NextCloud桌面同步客户端，iOS应用程序或Android设备同步到服务器和其他设备。
本教程将帮助您在带有Apache的Ubuntu 20.04 LTS Linux操作系统上安装NextCloud。
  ***安装先决条件（灯泡）**
  ***下载ubuntu上的nextcloud存档**
  ***创建MySQL数据库**
  ***运行NextCloud Web安装程序**
  * **包起来**

## 步骤1：安装先决条件（灯泡）
在Ubuntu上安装NextCloud的第一件事是，您必须在Ubuntu LTS系统上运行**灯服务器**。登录您的系统并访问终端窗口。如果您已经运行**灯泡**跳过此步骤，则使用以下命令安装必要的依赖项。

### 安装php
让我们从Ubuntu服务器上的PHP版本5.6或更高版本开始：
sudo apt-get更新
sudo apt-get安装-y php php-GD php-curl php-zip php-xml php-mbstring
您可以使用以下命令来验证PHP版本：
php -v
{{_LINE_29_}}

### 安装apache2
接下来，使用命令安装Apache：
sudo apt-get安装-y apache2 libapache2-mod-php
sudo systemctl restart apache2
{{_LINE_34_}}

### 安装mysql
随着依赖关系的范围，要处理的下一步是确保MySQL数据库服务器。通过运行：
sudo apt-get安装-y mysql-server php-mysql
{{_LINE_38_}}

## 步骤2：在Ubuntu上下载NextCloud存档
在撰写本文时，NextCloud最新版本为22.0.0beta5。成功配置了系统上的LAMP服务器后，让我们从其[官方网站][2]中下载NextCloud。
CD /TMP
WGET https://download.nextcloud.com/server/releases/nextcloud-22.0.0.0beta5.zip
{{_LINE_43_}}
NextCloud Server下载完成后，请在网站文档root下提取下载的存档，并在文件和目录上设置www-data的NextCloud目录的所有权。
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data：www-data nextcloud
sudo chmod -r 755 NextCloud
{{_LINE_49_}}
现在，删除下载的存档文件。
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## 步骤3：创建MySQL数据库
提取源代码后，让我们创建一个用于配置NextCloud的NextCloud MySQL数据库和用户帐户。使用以下命令集登录到MySQL Server，创建NextCloud数据库，用户并从MySQL控制台退出。
mysql -u root -p
输入密码：
mysql>创建数据库NextCloud;
mysql>在NextCloud上授予所有授予。
mysql>冲洗特权；
mysql>退出
{{_LINE_61_}}

## 步骤4：运行NextCloud Web安装程序
此时，NextCloud已成功安装Ubuntu 20.04并配置。现在，在下面的Web浏览器中打开NextCloud配置目录，然后输入URL http://your-domain.com。将本地主机更改为您的服务器IP地址或域名。您将看到以下屏幕：
http：// localhost/nextcloud/或http：// your_domain_name/nextCloud/
{{_LINE_65_}}
输入新的管理凭据来创建管理员帐户并提供数据文件夹的位置。
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="如何在Ubuntu Linux服务器上使用Apache安装NextCloud">}}

{{_LINE_69_}}
现在，向下滑动页面并输入数据库名称，数据库用户名，密码，然后单击**完成设置**按钮。
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="如何使用Apache安装NextCloud Ubuntu 20.04">}}

{{_LINE_73_}}
安装完成后，您应该在下面的屏幕上看到NextCloud Admin仪表板。在这里，您可以创建一个用户，组，分配权限等。
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="使用Apache在Ubuntu上安装NextCloud">}}

{{_LINE_77_}}
恭喜，您在Ubuntu LTS系统上有一个可行的NextCloud本地云解决方案。现在，您可以开始自定义云服务器，以完美满足您的需求。

## **总结：** {#4a1a}
恭喜！您已经成功地**使用Apache **在Ubuntu Server上配置并安装了NextCloud。您已经学会了如何创建私有云。 NextCloud Ubuntu Server是一个了不起的云存储协作平台，几乎可以满足任何人的私人或混合云存储需求。现在，您知道如何在Ubuntu上安装NextCloud，并且您的数据在自托管云中安全可靠。在即将到来的教程中，我们将讨论与Web服务器解决方案堆栈有关的更多有趣的主题。
_您喜欢什么基于云的自托管存储解决方案？如果您有任何疑问，请[联系][3] ._

## 探索：
您可能喜欢遵循与服务器日常管理有关的文章。
  * [如何在Ubuntu上使用Apache安装和配置OllCloud][4]
  * [如何将Apache配置为Ubuntu或Debian的反向代理][5]
  * [在Ubuntu上使用Nginx安装并保护PhpMyAdmin][6]
  * [安全和加密nginx与让我们在Ubuntu上加密20.04][7]
  * [在Ubuntu/debian上配置http/2支持nginx][8]
  * [在AWS生产服务器上设置带有乘客的设置NGINX][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
