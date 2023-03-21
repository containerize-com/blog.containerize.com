---
title: "如何使用nginx放大监视Nginx Web服务器" 
seoTitle: "如何使用nginx放大监视Nginx Web服务器" 
description: "Nginx Amplify是Nginx Web服务器和PHP应用程序的免费监视代理。本文是关于如何使用Nginx Amplify监视Nginx Web服务器的" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "监视NGINX，PHP应用程序，具有NGINX扩增和改进配置的操作系统。本文指导您设置和配置nginx扩增。" 
url: /zh/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor NGINX，PHP应用程序，具有NGINX扩增的操作系统并改善配置。本文指导您设置和配置nginx扩增。

{{< figure align=center src="images/nginx-post.png" alt="使用nginx放大监视Nginx Web服务器">}}


## 概述 {#install}
**Web服务器监视**对于高流量网站非常重要。 **监视代理** 将定期记录有关Web服务器的基本指标。这些关键指标可用于优化NGINX配置。它将帮助您改善Web服务器和应用程序的性能。
在此博客文章中，我们将介绍 **nginx监视** 开源工具的以下各节。
  * [NGINX Web服务器][1]
  * [nginx扩增][2]
  * [安装nginx扩增][3]
  * [监视指标][4]

## nginx Web服务器 {#nginx}
[NGINX][5]是一家免费的开源Web服务器。它比Apache简单，轻巧且易于配置。 NGINX Web服务器还可以作为反向代理，加载平衡器，邮件代理和HTTP缓存。它适用于HTTP，HTTP，SMTP，POP3和IMAP协议。 NGINX是一款高速，可靠和内存效率的Web服务器，可改善应用程序的性能。此外，它已经越来越受欢迎，现在被视为最受欢迎的Web服务器。此外，NGINX适用于任何类型的网站，包括高流量网站和应用程序。它可以在几乎所有操作系统上安装和配置。

### 安装nginx
  *运行以下命令以安装NGINX Web服务器。
```
sudo apt update
sudo apt install nginx
```
  *完成安装后，打开浏览器，然后键入“ http：// ip \ _of \ _your_server”。您将看到以下欢迎页面。

{{< figure align=center src="images/nginx-home.png" alt="欢迎来到nginx！">}}


## nginx amplify   {#amplify}
Nginx Amplify是Nginx开源，Nginx Plus和PHP-FPM的免费监视工具。这是用于NGINX服务器监视和应用程序的基于SAAS的工具。用户可以轻松跟踪基础架构资产，监视性能并调整配置。它提供了用户可以利用的全面信息来优化Web服务器和应用程序配置。它充当托管NGINX和PHP应用程序的服务器上的代理。 Nginx Amplify是一种轻巧的，按日志和监视数据以放大服务器而不会损害性能。您可以在放大仪表板上查看指标。该代理可用于所有主要操作系统，例如RHEL，CentOS，Ubuntu，Debian，Fedora和FreeBSD。 Nginx Amplify具有三个主要组件，例如Nginx Amplify Agent，Nginx Amplify Web UI和Nginx Amplify Backend。
  * **nginx扩增代理**   - 它在正在监视的系统上运行。使用SSL/TLS对所有通信进行加密。
  ***nginx Amplify Web UI**   -  Web UI显示了Web服务器，应用程序和操作系统的指标。
  * **nginx放大后端**   - 它是一个关键组件，可作为SaaS实现，并负责收集指标，维护数据库，运行分析引擎并提供核心API。

## 安装nginx amplify   {#install}
请遵循下面的逐步指南，以在Ubuntu上安装NGINX放大。
  *首先，您需要在nginx [网站][6]上创建一个帐户。
  *登录后，您将在Nginx Amplify网站上看到下面的屏幕。现在，通过SSH连接到服务器，并使用以下步骤中给出的命令。

{{< figure align=center src="images/amplify-1.png" alt="安装nginx放大">}}

  *运行以下命令以下载代理。
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  *执行以下命令以在服务器上安装nginx扩增。用实际的API键替换XXXXX。您可以在nginx放大仪表板上找到它。
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  *完成安装后，您可以使用以下命令检查状态。
```
$ sudo service amplify-agent status
```
  *现在，您需要配置nginx扩增代理以查看指标。

{{< figure align=center src="images/amplify-2-1.png" alt="NGINX监视配置">}}

  *使用Stub_status配置创建一个新文件。
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  *将以下代码复制到其中并保存文件。
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  *重新启动NGINX Web服务器以激活stub_status模块。
```
$ sudo service nginx restart
```
  *现在，使用以下命令打开nginx配置文件。
```
$ sudo nano /etc/nginx/nginx.conf
```
  *将以下代码添加到其中并保存。
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  *重新启动NGINX服务以应用所有更改。
```
$ sudo service nginx restart
```
  *接下来，导航以放大仪表板，然后单击“完成”按钮。您应该看到以下页面。

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Web服务器监视">}}

  *您可以通过单击**概述**选项卡，以更简单和可读的格式看到统计信息。看起来如下所示。

{{< figure align=center src="images/amplify-overview.png" alt="NGINX监视统计数据">}}


## 监视指标 {#monitoring}
nginx扩增代理收集以下类型的数据：
  * **NGINX指标**   - 它从ub_status，日志文件和过程状态收集各种与Nginx相关的指标。
  ***系统指标**  -  NGINX扩增监视各种系统指标，例如CPU使用，内存使用情况，网络流量等。
  * **PHP-FPM指标**   - 如果它标识了运行的PHP-FPM主进程，则它将从PHP-FPM池状态获得指标。
  * **MySQL指标**   - 代理可以使用MySQL全局变量集合集来收集指标。
  * **nginx元数据**   - 代理收集有关NGINX实例，例如软件包数据，构建信息，二进制路径，构建配置设置等的数据。
  ***系统元数据**  - 代理收集操作系统的数据，包括主机名，正常运行时间，OS风味和其他详细信息。

## 结论
我们已经详细介绍了NGINX Web服务器和NGINX Amplify高级监视代理。 Nginx Amplify非常易于设置和配置。此外，我们已经介绍了关键指标NGINX Amplify可以跟踪**监视nginx **。这些重要的指标可用于改善NGINX Web服务器和应用程序的配置。
最后，[Containerize.com][7]正处于一个始终如一的过程中，撰写有关更多最新开源产品的博客文章。因此，与此[Web Server解决方案堆栈][8]类别保持联系以进行最新更新。

## 探索
您可能会发现以下链接相关：
  * [如何将nginx用作应用程序的负载平衡器][9]
  * [如何设置和配置为反向代理][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
