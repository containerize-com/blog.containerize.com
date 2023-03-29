---
title: "如何在AWS生产服务器上使用乘客设置NGINX" 
seoTitle: "如何在AWS生产服务器上使用乘客设置NGINX" 
description: "这篇博客文章描述了通过APT方法安装Nginx，并通过Ubuntu 20.04 LTS操作系统安装NGINX。" 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "这篇博客文章介绍了通过APT方法安装乘客在Ubuntu 20.04 LTS操作系统中安装NGINX的步骤。" 
url: /zh/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## 此博客文章介绍了通过APT方法安装Nginx，并通过Ubuntu 20.04 LTS操作系统安装NGINX的步骤。

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="带有AWS生产服务器上乘客的设置NGINX">}}


## **概述** ：
您需要在AWS Production **服务器上安装和配置** nginx在生产服务器上部署应用程序之前。
**开源Phusion乘客**提供了许多自定义和功能选项。乘客一些功能用于改善应用程序的性能特征。一些自定义影响应用程序或连接处理行为等。需要在Nginx中设置两个乘客的配置选项，称为乘客\ _Enabled和乘客\ _Root。此安装过程将自动设置这两个选项。
在此博客文章中，我们将介绍在 **APT方法** 的Ubuntu操作系统上安装Web应用程序服务器的一些基本配置步骤。在阅读和以下指南之后，您将能够部署和管理用Node.js，Python和Ruby编写的Web应用程序。
* **什么是nginx和乘客？** 
* **安装nginx和乘客软件包** 
* **启用乘客nginx模块并重新启动nginx** 
* **验证安装** 
* **系统和乘客更新** 
* **最好的开源网络服务器** 
  * **结论** 

## 1.什么是Nginx和乘客？ {#step-4:-update-regularly}

**[什么是nginx服务器？和SMTP。它是高度可扩展的，设计为最大的性能和稳定性。 NGINX是高性能异步，非线程和事件驱动的Web服务器，可同时处理多个客户端请求。它是由Igor Sysoev撰写的，2004年以2条规定BSD许可的条款发布。**nginx的执行速度比Apache快2.5倍，并且根据基准测试而消耗的内存更少。
**[什么是乘客？][2] **Phusion乘客也称为mod \ _rails和mod \ _rack，是免费的Web服务器和开源Web Application Server。它被设计为与Apache和Nginx集成的快速，健壮，功能丰富和轻量级。它还提高了应用程序的安全性，可靠性和可扩展性。它允许管理员深入了解Web应用程序操作，服务器性能。乘客应用程序服务器可以轻松运行并自动管理您的Web应用程序。它还可以** 服务多个应用程序**同时是多租户和独立的。它可以处理HTTP请求，管理流程和资源，并实现管理任务，监视和问题诊断。 Phusion乘客是一家免费的应用程序服务器，支持部署和管理流星，Raby on Rails nginx乘客，JavaScript，Python和Node.js应用程序。

## 2.安装NGINX和乘客软件包： {#step-1:-install-passenger-packages}

现在是时候安装乘客和NGINX了。您将能够轻松地在本指南后轻松部署一个流行的Web服务器之一。下面列出的命令将通过Phusion的APT存储库安装乘客和NGINX。如果您已经安装了NGINX，则这些命令将升级为phusion的版本，并编译乘客：
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3.启用乘客nginx模块并重新启动nginx： {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

edit/etc/nginx/nginx.conf and uncomment incupper/etc/nginx/passenger.conf;。例如，您可能会看到以下内容：
```
# include /etc/nginx/passenger.conf;
```
删除像这样的“#”字符：
```
include /etc/nginx/passenger.conf;
```
如果您看不到include/etc/nginx/passenger.conf的评论版本；在nginx.conf中，您需要自己插入它。将其插入http块中的/etc/nginx/nginx.conf。
http {
    包括/etc/nginx/passenger.conf;
    ...
}
完成此步骤后， **restart nginx** ：
```
$ sudo service nginx restart
```

## 4.验证安装： {#step-3:-check-installation}

安装后，请通过运行命令`sudo/usr/bin/castenger-config validate-install“：：
```
sudo /usr/bin/passenger-config validate-install
```
所有检查都应通过。如果任何支票未通过，请按照屏幕上的建议。
最后，检查NGINX是否启动了乘客核心进程。运行`sudo/usr/sbin/乘客内存stats。您应该看到NGINX流程以及乘客流程。例如以下：
```
sudo /usr/sbin/passenger-memory-stats
```
如果您看不到任何NGINX进程或乘客进程，则可能会有某种安装问题或配置问题。请参阅[故障排除指南][3]。

## 5.系统和乘客更新： {#step-4:-update-regularly}

NGINX更新，乘客更新和系统更新定期通过 **APT软件包管理器** 提供。您应该定期运行以下命令，以使其保持最新状态：
sudo apt-get更新
sudo apt-get升级
更新后，您无需重新启动Web或应用程序，也不需要在更新后修改任何配置文件。这一切都是由APT自动为您照顾的。

## 6. **最好的开源Web服务器** ： {#step-4:-update-regularly}

**什么是开源网络服务器？基本上，它通过HTTP网络协议处理请求，以在万维网上分发信息。
超过80％的Web应用程序和网站由开源Web服务器提供动力。在这里，我列出了一些 **最受欢迎的开源网络服务器** ，您可以轻松地自己部署其中一个流行的Web服务器。
* **Apache HTTP服务器** 
* **LightTPD Web服务器** 
* **OpenLitespeed Web服务器** 
* **Apache Tomcat Web服务器** 
* **Caddy Web服务器** 

## [][4。结论： {#next-step}

恭喜，您已经成功安装和配置了Nginx，并在 **AWS Production Server上为Web应用程序提供了乘客。请查看[乘客库][5]中的各种指南，以完全掌握乘客应用程序服务器。您可能对通过** Capistrano**的Ruby应用程序的[自动部署][6]指南特别感兴趣，该指南教会您如何在没有太多手动工作的情况下自动部署未来的应用程序更新。现在，您准备在AWS生产实例上部署Web应用程序。
_您更喜欢 **Web开发或托管** 需求_？您对免费的Web服务器和开源Web应用程序服务器有任何疑问吗？

## 探索
您可能会找到以下相关博客文章：
  * [如何将Apache配置为Ubuntu/Debian的反向代理][8]
  * [在Ubuntu上使用Nginx安装并保护PhpMyAdmin][9]
  * [在Ubuntu/debian上配置http/2支持nginx][10]
  * [安全和加密NGINX与Let's Encrypt在Ubuntu 20.04][11]
  * [如何在Ubuntu上使用Apache安装和配置OllCloud][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
