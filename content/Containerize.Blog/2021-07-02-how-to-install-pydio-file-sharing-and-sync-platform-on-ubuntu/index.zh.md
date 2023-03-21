---
title: "如何在Ubuntu上安装PYDIO文件共享和同步平台" 
seoTitle: "如何在Ubuntu上安装PYDIO文件共享和同步平台" 
description: "Pydio是一个开源文件共享和自托管协作文档共享软件。让我们查看如何安装PYDIO文件共享和同步工具。" 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio是一个基于云的文件共享和同步平台，可在任何设备和任何设备上访问所有数据。本教程是关于如何在Ubuntu上安装Pydio的。" 
url: /zh/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio是一个基于云的文件共享和同步平台，可在任何设备和任何设备上访问所有数据。本教程是关于如何在Ubuntu上安装Pydio的。

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="如何在Ubuntu上安装PYDIO文件共享和同步平台">}}


## **概述**
Pydio单元格是一种开源文件共享和同步软件。它提供了对所有数据存储的单个访问点，它是OwnCloud和NextCloud的替代方案，可提供存储服务，文件共享和同步。 Pydio是类似于Dropbox和其他存储平台的企业开源文件共享平台。它可以帮助您在一个平台上安全地连接所有文件和设备。
Pydio单元格是一个基于云的文件同步和协作平台。该开源软件在您的个人IT基础架构上运行，并帮助您的员工保护和监视您的业务数据。您可以使用移动应用程序，桌面软件或Web浏览器使用PYDIO单元格同步数据并从任何地方访问它。 PYDIO单元格最佳文件共享应用程序基于微服务架构，并使用Golang编程语言编写。
本教程将帮助您在Ubuntu LTS系统上安装和配置PYDIO自托管文件共享软件和同步平台。
  * 入门
  *安装灯服务器
  *在Ubuntu上安装pydio
  *创建PYDIO数据库和用户
  *在您的浏览器上访问pydio
  * 结论

## 步骤1：入门
在安装之前，您需要确保系统正在运行最新的软件包。使用下面的命令更新您的Ubuntu 20.04服务器。
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
更新后，始终建议重新启动服务器以进行新的更改以生效。
```
sudo reboot
```

## 步骤2：安装灯服务器
要设置Pydio安全企业文件共享服务器以及如何创建开源私有云，我们首先需要设置运行灯服务器。如果您已经安装并运行灯堆栈，请跳过此步骤，请使用以下命令在Ubuntu系统上设置灯。

## # 安装php
您可以通过运行命令在Ubuntu或Debian系统上安装PHP：
sudo apt-get安装python-software-properties
sudo附加措施PPA：ondrej/php
sudo apt-get安装-y php php-GD php-curl php-zip php-dom php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # 安装apache2
Apache是​​使用最广泛的开源Web服务器软件。接下来，通过运行在Ubuntu上安装Apache Web服务器：
sudo apt-get安装-y apache2 libapache2-mod-php
{{_LINE_38_}}

## # 安装mysql
MySQL开源关系数据库管理系统是LAMP Web应用程序软件堆栈等的组成部分。现在通过在下面运行在Ubuntu上安装mySQL：
sudo apt-get安装-y mysql-server php-mysql
{{_LINE_42_}}
安装完成后，打开**php.ini** 配置文件进行编辑。使用您首选的文件编辑器。
如下所示，对php.ini文件进行更改。打开两个文件并进行更改，如图所示
```
sudo vim /etc/php/7.4/apache2/php.ini
```
进行以下更改
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
保存并关闭文件，然后继续编辑其他php.ini文件
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## 步骤3：在Ubuntu上安装Pydio
首先，您需要将PYDIO最佳文件共享软件存储库添加到Ubuntu 20.04服务器，因为它尚不可用。另外，为业务公钥添加PYDIO最佳文件共享系统，然后继续更新您的系统存储库。
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
现在是时候安装PYDIO EFSS和文档共享软件了。如图所示运行命令
```
sudo apt install -y pydio pydio-all
```
使用下面显示的命令启用Apache重写模块，然后重新启动并启用Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
确认Apache服务使用以下命令运行：
```
sudo systemctl status apache2
```
如果安装正确完成，则应如图所示，表明Apache2服务正在运行。

## 步骤4：创建PYDIO数据库和用户
提取代码后，现在创建一个MySQL数据库和用户帐户，以配置Pydio。使用以下命令集登录到MySQL Server来创建Ajaxplorer Shareync或Pydio数据库和用户。
mysql -u root -p
输入密码：
mysql>创建数据库pydio;
mysql>在pydio上授予全部。
mysql>冲洗特权；
mysql>退出
{{_LINE_69_}}
接下来，我们需要从Web界面上安装Ubuntu上的Pydio来创建一个私有云。

## 步骤5：浏览器上的pydio访问
打开浏览器并键入url _http：/// pydio_。您应该看到一个页面，如图所示
PYDIO私有云文件共享和业务文件共享软件现已安装和配置，现在该访问其Web界面了。
打开浏览器并键入url http：// your -server -ip / pydio。您将被重定向到以下页面：

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio安装程序">}}

确认所有控件，然后单击**继续安装pydio **按钮。您应该看到以下页面：

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio设置向导">}}

选择您的语言，然后单击**开始向导**。您应该看到以下页面：

{{< figure align=center src="images/Starting-the-setting.png" alt="启动PYDIO设置">}}

输入程序名称并欢迎消息。然后单击按钮**下一个**。您应该看到以下页面：

{{< figure align=center src="images/Enter-the-application-name.png" alt="输入PYDIO应用程序">}}

接下来，输入您的管理员帐户，然后单击**下一个**按钮。您应该看到以下页面：

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL数据库设置">}}

然后输入您的数据库详细信息，例如数据库名称，用户名和密码。然后单击**测试DB连接**按钮。您应该看到以下页面：

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="PYDIO高级选项">}}

接下来，单击**安装pydio **按钮。一旦安装成功完成。您将被重定向到以下页面：

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio登录">}}

然后输入管理员的用户名和密码。然后单击[Enter]按钮。您应该看到以下页面：

是的！完成。现在，您知道如何在Ubuntu上完全安装PYDIO自托管文件同步和开源文件共享软件，以逐步构建私有云，类似于Dropbox或Google Drive。

## **结论：**   {#4a1a}
在本教程中，您已成功地在Ubuntu系统上成功安装了Pydio单元格开源文件共享。您可以使用本文来创建用于存储，保护和共享文件中的云基础架构中的云基础架构。使用PYDIO协作文档共享和最佳免费文件共享应用程序，以获得更多的数据控制，并确保在业务组织中有效协作。在即将到来的教程中，我们将讨论开源云存储解决方案和文件共享协作工具的更多有趣主题。
_您可以加入我们的[Twitter][1]，[LinkedIn][2]和我们的[Facebook][3]页面。您在线使用哪种基于云的_开源_File共享平台？如果您有任何疑问，请_ [联系][4]。

## 探索：
我们还有其他几篇与您的服务器日常管理有关的文章。
  * [如何将Apache配置为Ubuntu/Debian的反向代理][5]
  * [如何在Ubuntu上使用nginx安装和保护PhpMyAdmin][6]
  * [安全和加密nginx与让我们在Ubuntu上加密20.04][7]
  * [在Ubuntu/debian上配置http/2支持nginx][8]
  * [在AWS生产服务器上设置带有乘客的设置NGINX][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
