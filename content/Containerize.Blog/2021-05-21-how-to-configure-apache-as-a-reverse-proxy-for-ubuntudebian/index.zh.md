---
title: "如何将Apache配置为Ubuntu/Debian的反向代理" 
seoTitle: "如何将Apache配置为Ubuntu/Debian的反向代理" 
description: "Apache反向代理配置逐步使您可以在Ubuntu/Debian Linux上使用MOD_PROXY在代理服务器后面运行一个或多个后端服务器。" 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache反向代理允许您在代理服务器后面运行一个或多个后端服务器。这是在Ubuntu/Debian系统上配置Apache反向代理的方法。" 
url: /zh/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache反向代理允许您在代理服务器后面运行一个或多个后端服务器。这是在Ubuntu/Debian系统上配置Apache反向代理的方法。

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="安装和配置Apache反向代理">}}


## **概述**
Apache反向代理允许所有流量并将其转发到代理服务器后面的一个或多个后端服务器或容器，而无需公开公开。后端Web服务器可以是另一台Apache2或开源HTTP服务器，例如Nginx。 Apache2 HTTP服务器是当今正在使用的最流行的开源Web服务器之一。
安装和配置代理服务器的原因很多。例如，反向代理可以帮助您添加安全性，用于负载平衡，限制对某些位置的访问，以防止攻击等等。本文说明了如何在Ubuntu/debian上逐步安装和配置Apache反向代理配置：
  *安装apache2
  *配置Apache2
  *启用其代理模块
  *启用SSL
  *重新启动apache2
  * 结论

## 步骤1：安装apache2
安装Apache2非常简单易于运行。要进行安装，请简单地运行以下命令：
sudo apt-get更新
sudo apt-get安装apache2
{{_LINE_25_}}
在系统上安装Apache2后，请使用Debian Linux或Ubuntu Linux版本上的以下SystemCTL命令Ubuntu停止，启动，启用，启用和重新启动Apache2在服务器启动时始终重新启动。
sudo systemctl stop apache2.Service
sudo systemctl启动apache2.Service
sudo systemctl启用apache2.Service
sudo systemctl restart apache2.Service
{{_LINE_31_}}
您可以使用以下命令查看Web服务器状态：
sudo systemctl status apache2.Service
{{_LINE_34_}}
要检查Apache2设置，请打开浏览器并浏览到服务器主机名或系统IP地址，您应该看到Apache2默认测试页面，如下所示。当您看到这一点时，Apache2将按预期工作。 http：// localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="安装和配置Ubuntu的Apache反向代理代理">}}


## 步骤2：将Apache2配置为反向代理
Apache2已成功安装并准备使用。现在，您可以将Apache2配置为Apache2反向代理Ubuntu。 Apache2代理模块的** ProxyPass **和** ProxyPassReverse **功能提供了反向代理。要使用** proxypass **和** ProxypassReverse **，您必须首先知道要在哪里引导网站流量。
Apache2反向代理服务器将收听默认HTTP端口上的所有流量，该端口是简单设置中的端口80。托管网站内容的后端服务器将在自定义端口上收听，并且很可能是端口8080。
在此博客文章中，我们将设置Apache2以在端口80上收听，然后将流量直接转到端口服务器，该服务器在端口8080上倾听。在下面命令下运行以创建一个名为apache2proxy.conf的代理virtualHost文件。
sudo nano /etc/apache2/sites-apache2proxy.conf
然后在apache2proxy.conf文件中添加以下代码块，然后保存。
{{_LINE_43_}}
        Servername示例..com
        Serveralias www.example.com
        serveradmin webmaster@example.com
        errorlog $ {apache_log_dir}/error.log
        CustomLog $ {apache_log_dir}/access.log合并
        proxyrequest off
{{_LINE_50_}}
          命令拒绝，允许
          从所有人那里允许
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        ProxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          订单允许，拒绝
          从所有人那里允许
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
apache2proxy.conf文件包含您的服务器名称以及proxy_pass，在HTTP代理服务器接收时将指示流量。

## 步骤3：启用Apache2代理
Apache2 Web服务器现在已成功安装和设置。 Apache在其中包含许多与其中捆绑在一起的捆绑模块。这些模块未在Fresh Apache2安装中启用。首先，我们需要启用所需的模块，以启用所需的apache mod_proxy模块及其几个附加模块以支持不同的网络协议。运行下面列出的命令以启用其HTTP代理模块。
sudo a2enmod代理
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
现在，启用VirtualHost网站并重新启动Apache2启用重新加载Apache2模块配置。
sudo a2ensite apache2proxy.conf
sudo systemctl restart apache2.Service
启动您选择的Web浏览器，然后导航到您的服务器主机名（例如example.com）。现在，您将在默认端口（即8080）上代理您的Apache2服务器。

## 步骤4：启用SSL {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
如果要启用Apache反向代理SSL模块，请运行以下命令以启用Apache反向代理https proxy Pass：
Sudo A2enmod SSL
这将为HTTPS支持提供安全的Apache反向代理HTTP，以提供后端服务器。

## 步骤5：RESTART APACHE2 {#BLOCK-836BB4FF-17AD-4317-8ECB-153104BD28A7}
为了实施这些更改，请通过运行以下命令重新启动Apache：
sudo systemctl restart apache2.Service
恭喜！您已经在Linux系统上成功安装和配置了Apache2反向代理。

## **结论：** {#4a1a}
在本教程中，我们探索并讨论了什么是代理服务器和Apache反向代理示例配置逐步进行。我们还学会了如何在Linux系统上设置和配置Apache2作为反向代理。在即将到来的教程中，我们将讨论有关Apache和其他Web服务器解决方案堆栈的更多有趣主题。

## 探索
您可能还喜欢以下更多相关文章：
  * [如何][1][安装并在Ubuntu上使用nginx的phpmyadmin [2]
  * [如何在AWS生产服务器上使用乘客设置NGINX][3]
  * [在Ubuntu/debian上配置http/2支持nginx][4]
  * [安全和加密nginx与让我们在Ubuntu上加密20.04][5]
  * [如何在Ubuntu上使用Apache安装和配置OllCloud][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/zh/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
