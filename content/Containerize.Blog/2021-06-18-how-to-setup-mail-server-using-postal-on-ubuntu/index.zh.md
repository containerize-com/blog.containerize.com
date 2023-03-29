---
title: "如何使用Ubuntu上的邮政设置邮件服务器" 
seoTitle: "如何使用Ubuntu上的邮政设置邮件服务器" 
description: "使用开源邮件服务器从您的Web应用程序发送电子邮件。邮政使您可以使用SMTP和HTTP API发送电子邮件，并还监视电子邮件流量。" 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "使用开源邮件服务器发送和接收电子邮件。本文将帮助您为公司安装和配置邮政邮件服务器。" 
url: /zh/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## 通过开源邮件服务器发送和接收电子邮件。本文将帮助您为公司安装和配置邮政邮件服务器。

{{< figure align=center src="images/postal-banner.png" alt="开源邮件服务器">}}

对于现代应用程序，需要发送有关不同类型事件的电子邮件。每个企业都需要一个可靠的  **邮件服务器** ，以进行发出的电子邮件。此外，公司需要邮件服务器来发送批量电子邮件，以进行营销活动，新闻通讯和许多其他任务。有几个  **开源邮件服务器**  可用。但是，我们将在本文中详细讨论 **邮政服务器**  ，并介绍以下主题。
  * [什么是邮政邮件服务器？][1]
  * [邮政的功能][2]
  * [邮政安装][3]
  * [结论][4]

## 什么是邮政邮件服务器？ {#Postal}

[  **邮政** ][5]是免费的  **开源邮件服务器**  。它是用于网站和Web应用程序的功能齐全的邮件服务器。邮政邮件服务器是现有流行  **邮件服务器**  的替代方法，例如sendgrid和mailgun。  **邮政**  是一个健壮，安全且可扩展的开源电子邮件传递平台。所有源代码和文档均可在[  **github**  ][6]上获得。您可以下载，将其安装在专用服务器上，并全面控制它。您还可以根据业务需求改进和增强它。此外， **邮政服务器**  支持多个组织。
用户可以查看显示传入和发出邮件的量的图形和统计数据。此外，您可以访问完整的外传和传入的消息队列。邮政邮件服务器为Webhooks提供功能。您可以设置Webhooks，以实时接收有关送货信息的实时信息。它还提供消息保留，使您可以存储和检查所有发送和接收的消息。电子邮件交付在业务中非常重要，以确保用户收到电子邮件。但是，有时电子邮件确实会将其发送给用户，您必须调查问题。  **传入和发出的邮件服务器**  还提供了完成调查的完整日志记录和工具。

## 邮政的功能 {#Features}

邮政邮件服务器提供许多功能。但是，我们将讨论本文中的以下关键功能。
 **发送电子邮件** ：邮政邮件服务器提供两种技术，用于传出电子邮件，包括HTTP API和SMTP。您可以轻松地使用HTTP API与Web应用程序集成。您还可以使用SMTP服务器与现有应用程序和系统集成。
 **传入的电子邮件** ： **传入的邮件** 可以使用邮政邮件服务器转发到HTTP Endpoint， **SMTP服务器** 和其他电子邮件地址。
 **垃圾邮件和病毒检查** ：可以将Spamassassin和Clamav与邮政集成在一起，以自动扫描传入并通过邮件服务器传递消息。默认情况下也关闭此功能。
 **单击并打开跟踪** ：可以通过邮政跟踪电子邮件开口和点击。邮政将扫描您的传出消息，并用传递邮政Web服务器的新链接替换所有链接。当用户单击链接时，邮政记录操作并立即将其重定向到原始URL。但是，默认情况下不会激活这。
 **IP池** ：邮政允许您从各种IP地址发送消息。这使您可以根据发件人或收件人地址将多个IP地址分配给不同的邮件服务器或从不同的IP发送。

## 邮政安装 {#Installation}

请按照以下分步指南安装Ubuntu上的邮政  **邮件服务器软件**  。
* 首先，您需要连接服务器vis ssh。运行以下命令以更新系统，并使用最新的可用软件包。
```
sudo apt-get update
```

### 安装MariaDB数据库服务器
* 运行命令以安装MariadB。
```
sudo apt install mariadb-server libmysqlclient-dev
```
* 完成安装后。现在，您需要通过运行以下命令来保护它。
```
mysql_secure_installation
```
* 接下来，它将问您几个问题，如下所示。您需要回答所有问题。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
* 使用以下命令连接到MariadB服务器。
```
mysql -u root -p
```
* 为邮政创建数据库。
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
* 接下来，使用新密码创建一个名为“ Postaluser”的数据库用户。
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
* 之后，授予用户完全访问“ Postaluser”数据库。
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
* 接下来，用以下命令冲洗特权并退出MariaDB Shell。
```
FLUSH PRIVILEGES;
EXIT;
```

### 安装Ruby
* 首先，添加第三方PPA以安装Ruby。运行以下命令。
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
* 更新Ubuntu软件包。
```
sudo apt update
```
* 通过运行以下命令安装Ruby。
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### 安装兔子
  * Erlang必须安装RabbitMQ，因此您也需要安装它。使用以下命令将Erlang存储库密钥添加到Ubuntu。
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
* 接下来，使用以下命令添加Erlang存储库。
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
* 运行以下命令以安装Erlang。
```
sudo apt-get update
sudo apt-get install erlang
```
* 完成ERLANG安装后，您可以继续安装RabbitMQ。将RabbitMQ存储库添加到Ubuntu。
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
* 使用以下命令添加RabbitMQ GPG密钥。
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
* 运行下面的命令以安装RabbitMQ软件包。
```
sudo apt update
sudo apt install rabbitmq-server
```
* 运行以下命令以启用RabbitMQ，因此当系统引导时始终启动。
```
sudo systemctl enable rabbitmq-server
```
* 接下来，您将需要为邮政创建RabbitMQ VHOST和用户。运行以下命令。
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### 安装nodejs
* 使用以下命令添加nodejs存储库。
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
* 接下来，运行下面的命令以安装nodejs。
```
sudo apt-get install nodejs
```

### 安装邮政邮件服务器
* 首先，您需要为邮政邮件服务器创建用户。使用以下命令创建它。
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
* 接下来，让Ruby在Web端口上收听。
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
* 使用以下命令安装所有必需的宝石。
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
* 为邮政创建目录结构。
```
sudo mkdir -p /opt/postal/app
```
* 接下来，下载最新版本的邮政。
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
* 使用以下命令提取下载的文件。
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
* 接下来，更改邮政目录的所有权。
```
sudo chown -R postal:postal /opt/postal
```
* 通过运行以下命令为邮政二进制创建符号链接。
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
* 安装所有必需的依赖项。
```
sudo postal bundle /opt/postal/vendor/bundle
```
* 运行以下命令以初始化邮政配置。
```
sudo postal initialize-config
```
* 接下来，运行以下命令以打开邮政配置文件。
```
sudo nano /opt/postal/config/postal.yml
```
* 进行大胆指示的更改并保存文件。
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
* 运行命令以初始化数据库。
```
sudo postal initialize
```
* 为邮政创建管理用户。
```
sudo postal make-user
```
* 接下来，您需要提供如下所示的用户帐户详细信息。
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :  ****** ***

User has been created with e-mail address admin@example.com
```
* 最后，运行以下命令以启动并检查邮政应用程序的状态。
```
sudo -u postal postal start
sudo -u postal postal status
```

### 安装nginx
* 运行下面的命令以安装NGINX Web服务器。
```
sudo apt install nginx
```
* 接下来，复制邮政nginx配置将其用作虚拟主机。
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
* 创建一个自签名的SSL证书。
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
* 之后，您需要回答问题。
* 打开nginx默认虚拟主机文件。
* 更改server_name的值并保存文件。
* 最后，通过运行以下命令重新启动NGINX Web服务器。
```
sudo systemctl restart nginx
```
* 最后，打开浏览器并键入URL https://postal.example.com。您将被重定向到登录页面。

## 结论 {#结论}

我们已经深入了解了邮政邮件服务器的介绍和主要功能。我们还提供了用于设置此  **邮件传输代理**  的分步说明。此外，我们对设置有了一些洞察力。设置邮政邮件服务器是一个简单的过程。我希望本文确实有助于为您的业务设置和配置邮政邮件服务器。
最后，[  **containerize.com** ][7]正处于撰写有关更多最新开源产品的博客文章的一致过程中。因此，与此[ **交易电子邮件**  ][8]类别保持联系以获取最新更新。

## 探索
您可能会发现以下链接相关：
* [  **顶级交易电子邮件软件**  ][9]
* [  **POTAL  - 开源邮件服务器**  ][5]
* [  **5 2020年最佳企业的开源邮件服务器软件**  ][10]



 [1]: #Postal
 [2]: #Features
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://products.containerize.com/transactional-email/postal/
 [6]: https://github.com/postalhq/postal
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/transactional-email/
 [9]: https://products.containerize.com/transactional-email/
 [10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
