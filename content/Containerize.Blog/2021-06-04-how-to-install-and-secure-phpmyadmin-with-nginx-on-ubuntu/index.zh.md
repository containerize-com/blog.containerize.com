---
title: "如何在Ubuntu上使用Nginx安装和保护PhpMyAdmin" 
seoTitle: "如何在Ubuntu上使用Nginx安装和保护PhpMyAdmin" 
description: "PHPMYADMIN是用PHP编写的开源数据库管理软件。我们将学习如何使用nginx安装phpmyadmin并通过phpmyadmin管理mysql" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMYADMIN是用PHP编写的开源图形Web界面数据库管理工具。在本教程中，我们将学习如何使用nginx安装phpmyadmin。" 
url: /zh/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PHPMYADMIN是用PHP编写的开源图形Web界面数据库管理工具。在本教程中，我们将学习如何使用nginx安装phpmyadmin。

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="如何在Ubuntu上使用Nginx安装和保护PhpMyAdmin">}}


## **概述**
PHPMYADMIN是一种免费的开源数据库管理工具，可通过直觉界面为用户提供Web界面来管理MySQL或MariadB服务器。这是大多数受欢迎的托管提供商提供的广泛支持的软件之一，以使Web管理员在PhpMyAdmin中创建数据库并管理数据库，执行SQL故事，可轻松导入和导出数据。您将能够通过图形Web界面轻松地访问phpmyadmin中的MySQL或Mariadb数据库，并与PHP开发环境一起运行。
在本指南中，我们将描述如何在Ubuntu上使用NGINX安装和保护PhpMyAdmin 20.04。您将需要在Ubuntu Server上安装和配置PhpMyAdmin，以使其可以轻松地与MySQL数据库和表一起使用。因此，让我们学习如何在Ubuntu上使用NGINX安装和保护PhpMyAdmin 20.04 / 20.10：
  *先决条件
  *安装phpmyadmin
  *配置数据库
  *创建符号链接
  *访问phpmyadmin
  *创建MySQL超级用户
  *固定phpmyadmin
  * 结论

## 步骤1：先决条件{#id-prerquisites}
要遵循本指南，您需要在本地计算机或具有先决条件的远程服务器上运行的Ubuntu 20.04服务器。
  *您应该以具有sudo特权并启用的UFW防火墙的非root用户访问服务器。
  *假定您已经在Ubuntu上安装了Nginx，MySQL和PHP。
  *由于PhpMyAdmin使用MySQL凭据进行身份验证，因此您还应该安装SSL/TLS证书以启用服务器和客户端之间的加密流量。
这样一来，让我们开始开始安装并保护PhpMyAdmin，以连接到MySQL Server，以通过Web界面访问数据库。

## 步骤2：安装phpmyadmin {#id-1-install-phpmyadmin}
在Ubuntu 20.04上安装PhpMyAdmin之前，请确保您已成功安装了系统上的所有先决条件。首先更新软件包列表：
```
sudo apt update 
```
现在，运行以下命令以在Ubuntu上的默认Ubuntu存储库中安装PhpMyAdmin包20.04 / 20.10：
```
sudo apt install phpmyadmin

```
当要求继续时，按** y **，然后**输入**。如果提示您选择Web服务器，因为没有选择** nginx **的选项，请按** tab **选择“确定”，然后**输入**在不选择Web服务器的情况下继续**。

{{< figure align=center src="images/mysql-setup.png" alt="在Ubuntu上安装并确保nginx的phpMyAdmin 20.04">}}


## 步骤2：配置数据库{#id-1-install-phpmyadmin}
接下来，选择**是**，然后按**输入**安装和设置数据库，并使用dbconfig-common工具：

{{< figure align=center src="images/phpmyadmin-install2.png" alt="如何与phpmyadmin配置mysql">}}

PhpMyAdmin在内部使用MySQL应用程序密码与MySQL数据库进行通信。输入phpmyadmin dbms的新密码以注册为新数据库，选择“确定”，然后按Enter继续进行。

{{< figure align=center src="images/phpmyadmin-install3.png" alt="如何为phpmyadmin配置mysql">}}

将提示您确认密码，输入相同的密码，选择** **，然后按** Enter **。恭喜！ PHPMYADMIN已成功安装在您的系统上。

## 步骤4：创建符号链接{#id-2-create-symbolic-link}
有几种方法如何配置NGINX来服务PhpMyAdmin文件。如果已经设置了域的服务器块以服务PHP请求，则必须从phpmyadmin nginx安装文件/usr/share/phpmyadmin到您的域文档root目录创建一个符号链接。 ubuntu 20.04/20.10中的nginx文档root的默认位置应为/var/www/html/，并且根据您的INS设置可能有所不同。您的文档根可能位于/var/www/example.com/public_html中。
接下来，我们将创建一个符号链接，从phpmyadmin目录/usr/share/phpmyadmin到您的文档root。在这里，我们将假设我们的文档root是/var/www/html/，我们只需将phpmyadmin添加到其中即可。这将使我们能够在url example.com/phpmyadmin上访问phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## 步骤5：访问phpmyadmin {#id-3-test-phpmyadmin}
现在，您应该能够通过访问您喜欢的Web浏览器中的domain.com/phpmyadmin，然后访问服务器的主机/域名或公共IP地址，访问PhpMyAdmin Web界面。例如http://example.com/phpmyadmin或http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
在使用MySQL 5.7运行的Ubuntu服务器上，您将无法使用MySQL默认的根帐户登录免费的PhpMyAdmin数据库，并且会遇到一个错误，例如_“访问用户'root'@local'@localhost’” _ _ _ _ _。取而代之的是，您应该为PhpMyAdmin创建一个新的Superuser帐户。接下来，我们将创建MySQL root帐户以登录phpmyadmin。

## 步骤6：创建MySQL超级用户{#
在终端中，首先使用您的MySQL root密码登录MySQL，当您第一次安装PhpMyAdmin MySQL数据库时，您可能已经创建了一个root密码。
```
sudo mysql -u root -p
```
登录到MySQL后，使用您选择的用户名添加一个新的MySQL Superuser。在此示例中，我们称其为yasiradmin。 [单击此处生成一个强密码][2]，然后在下面替换新的\ _Password \ _。
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
现在，将Superuser特权授予我们的新用户Yasiradmin。
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
现在退出MySQL会话。现在，您应该能够使用这种新的Superuser凭据访问PhpMyAdmin。

{{< figure align=center src="images/image.png" alt="如何在Ubuntu上登录phpmyadmin 20.04">}}

强烈建议您为PhpMyAdmin设置一些额外的安全性，以确保PhpMyAdmin Nginx。您应该能够更改并访问phpmyadmin URL到晦涩的URL之类的东西。

## 步骤7：安全phpmyadmin {#id-6-Secure-PhpMyAdmin-Recordend}
接下来，我们要在NGINX中设置身份验证，以提供额外的安全层。现在，我们将安装Apache2-Utils，该Utils可以生成可与Nginx和Apache2服务器一起使用的.htpasswd文件。
```
sudo apt install apache2-utils
```
安装后，我们可以生成.htpasswd文件。更改您选择的用户名。 [生成密码][3]并保持安全。
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
现在将有一个.htpasswd文件，其中包含您的用户名和加密密码。您可以使用以下命令进行检查：
```
cat /etc/nginx/.htpasswd
```
您应该看到诸如用户名之类的东西：$ apr1sdfsdf4435sdtsklfwmmg1sfdsdgg4
现在，我们需要将2个指令添加到我们的NGINX配置文件中。配置文件的位置可能会根据您的安装而有所不同，尽管默认文件路径通常位于/etc/nginx/stite-abailable/default。如果您设置了多个域，则配置文件可能位于/etc/nginx/sites-available/example.com之类的某个地方
在此示例中，我们将假设NGINX配置文件在/etc/nginx/stites-abailable/default。打开文件以编辑它。
```
sudo nano /etc/nginx/sites-available/default
```
向下滚动并查找位置块，然后在其下面的一个新块中粘贴，并用遮盖的phpmyadmin文件夹的名称，在此示例Aspose_hidden中。
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
保存文件并退出（按CTRL + X，按Y，然后按Enter）。检查NGINX配置文件是否有效，否则服务器可能会在Running Command上重新启动时崩溃。
```
sudo nginx -t
```
如果有效，请重新加载nginx config。
```
sudo service nginx reload
```
现在，当访问example.com/aspose_hidden时，应该为您提供身份验证窗口。

{{< figure align=center src="images/auth3.png" alt="如何确保phpmyadmin">}}

您已经完成了Ubuntu Server上的phpmyadmin安装。

## 结论：{#id-what-next}
恭喜，您已经成功安装了phpmyadmin，for Ubuntu 20.04 / 20.10服务器，现在可以通过phpmyadmin管理mysql。现在，您可以开始创建MySQL数据库，用户，表，执行MySQL查询和其他各种操作。
如果您有疑问，请随时在评论部分告诉我。

## 探索
您可能还喜欢以下更多相关文章：
  * [如何将Apache配置为Ubuntu/Debian的反向代理][4]
  * [如何使用我们加密在Ubuntu 20.04上保护和加密Nginx][5]
  * [如何在Ubuntu/debian上配置nginx中的http/2支持][6]
  * [如何在AWS生产服务器上使用乘客设置NGINX][7]
  * [如何在Ubuntu上使用Apache安装和配置OllCloud][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
