---
title: "如何设置和配置为反向代理" 
seoTitle: "如何设置和配置为反向代理" 
description: "本教程是关于如何设置和配置NGINX作为反向代理的。 NGINX被认为是最受欢迎的开源反向代理网络服务器之一。" 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "NGINX是一款开源Web服务器，也可以充当反向代理。本教程将帮助您学习如何设置和配置NGINX作为反向代理。" 
url: /zh/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx是一款开源Web服务器，也可以充当反向代理。本教程将帮助您学习如何设置和配置NGINX作为反向代理。

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="使用nginx作为反向代理服务器">}}


## 概述：
Nginx和Apache是​​两个流行的开源Web服务器**经常与PHP一起使用。反向代理或网关充当客户端和服务器之间的连接。客户端和服务器交换信息彼此连续有效地工作。最常见的反向代理是**nginx和apache** ，并且在托管多个网站时都可以在同一虚拟机上配置。反向代理保护Web服务器免受攻击，并且连接网关出现在客户端，就像普通的Web服务器一样，不需要特殊的反向代理Nginx配置。客户在反向代理决定传递请求的信息，然后将最终输出结果传递给客户端时发送请求。
在对Redis教程的系列文章表示赞赏之后，我们收到了很多要求在NGINX教程上启动系列的请求。因此，上周我们从如何将[NGINX反向代理负载平衡器][1]用于应用程序的教程开始。这个简单的NGINX反向代理配置示例提供了许多可靠性和NGINX反向代理性能优势。 NGINX简单反向代理是Internet上使用的最积极使用的开源Nginx代理服务器。在本教程中，我们将**配置和探索如何将NGINX用作反向代理**以及如何将其设置为单个服务器上的反向代理。所以，让我们开始吧！
  *什么是代理服务器？
  *向前与反向代理
  *配置反向代理
  * NGINX反向代理的优点是什么？
  * 结论

## 什么是代理服务器？
**代理服务器**充当您和Internet之间的网关。这是一个中介服务器，将最终用户与浏览的网站分开。根据您的用例或公司策略，代理服务器提供不同级别的功能，安全性和隐私。
借助代理服务器，Internet流量在代理服务器的路上流向您要求的地址。然后，请求通过同一代理服务器（主要）返回，然后代理服务器将从网站收到的数据转发给您。

## 向前与反向代理：

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx作为反向代理服务器">}}

通常，当我们谈论代理时，大多数时候我们是指向前代理。 **前锋代理**非常适合避免国家限制，例如中国的大防火墙。客户只需通过向前代理连接到阻止资源。正向代理可以通过更改其IP地址来隐藏用户的身份。因此，基本上是nginx作为远期代理位于客户端和Internet之间，因此End Server不知道实际客户端。

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx作为反向代理">}}

**反向代理**也充当中介机构，但它们位于连接的另一侧。反向代理在**负载平衡**，Web优化和安全性方面非常出色。反向代理通常用于在几个服务器之间分配负载，无缝显示来自不同网站的内容，或将处理请求传递给使用HTTP以外的协议的应用程序服务器。

## 将nginx配置为反向代理：
当NGINX代理请求时，它将请求发送到指定的代理服务器，获取响应并将其发送回客户端。可以使用指定的协议代理HTTP服务器或非HTTP服务器的请求。支持的协议包括**fastcgi，uwsgi，scgi和memcached** 。
要将请求传递给HTTP代理服务器，**Proxy_pass **指令在** 位置**内指定。例如：
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
此NGINX反向代理示例配置会导致在指定地址将其在此位置处理的所有请求传递给代理服务器。该地址可以指定为域名或IP地址。该地址还可以包括一个端口：
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
您甚至可以将修改后的或自定义的标头传递到nginx **代理服务器**代理服务器\ _set \ _header **示例中的主机。
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx还支持缓冲，有助于改善性能。使用启用缓冲的情况下，只要客户端需要下载，NGINX就会存储从代理服务器接收的响应。
您还可以**设置多个后端服务器**，而不是将所有请求代理到单个服务器，而是让NGINX平衡负载之间的负载。我们已经在有关[nginx负载平衡][1]的教程中介绍了这一点。

## Nginx反向代理的优点是什么？
以下是设置NGINX反向代理服务器的好处：
  *nginx是最受欢迎的**开源网络服务器**，也是最受欢迎的代理工具。 NGINX反向代理配置非常易于实现，因为它为用户提供了针对DDOS和DOS Web服务器攻击的高端安全性。
  *它有助于在高流量网站和后端服务器之间创建平衡的负载，例如**Dropbox，Netflix和Zynga** 。
  *它为较慢的后端服务器和高流量站点提供了缓存机制，以设置nginx反向代理虚拟主机。它不需要从客户端为每个Web请求设置新过程。
  *它还充当了多种协议的反向代理服务器，例如HTTP，HTTPS，TCP，UDP，SMTP，IMAP和POP3。
  *nginx可以**处理超过10000个连接**，具有低内存足迹，并且可以在单个IP地址上操作多个Web服务器。
  *它还有助于缓存页面内容并执行SSL加密以降低Web主机服务器的负载。 NGINX是通过压缩静态内容并增加加载时间来改善静态内容性能的最佳Web服务器之一。
  *它是多个服务器环境的绝佳工具，也可用于不同任务，例如保持单个服务器匿名。

## 结论：
在此 **nginx反向代理教程** 中，我们探索了什么是nginx代理服务器并设置nginx反向代理。向前与反向代理服务器Nginx之间的区别。我们还通过示例学习了如何将NGINX设置为反向代理。现在，您充分了解如何安装 **nginx反向代理配置逐步** 。上述教程可帮助您开始进行反向代理设置。在即将到来的教程中，我们将讨论有关NGINX的更多有趣主题。
_您最喜欢的_reverse proxy_服务器是什么，简单，动态且功能齐全？您对http和tcp **基于http的负载平衡器的reverse prox__y有任何疑问，_ reverse prox__y，基于http **的加载平衡器_？

## 探索
您可能会发现以下更多的文章
  * [如何将Apache配置为Ubuntu/Debian的反向代理][3]
  * [通过在Ubuntu 20.04上加密的安全nginx][4]
  * [如何将NGINX用作应用程序的负载平衡器][1]
  * [如何在Ubuntu上使用nginx安装和保护PhpMyAdmin][5]
  * [在Ubuntu/debian上配置http/2支持nginx][6]
  * [在Ubuntu上使用nginx安装多个PHP版本][7]
  * [在AWS生产服务器上使用乘客的设置Nginx][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
