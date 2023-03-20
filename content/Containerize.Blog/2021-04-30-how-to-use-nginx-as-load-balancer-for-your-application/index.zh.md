---
title: "如何将NGINX用作应用程序的负载平衡器" 
seoTitle: "如何将NGINX用作应用程序的负载平衡器" 
description: "NGINX是流行的开源Web服务器。它以高性能和可扩展性而闻名。在本教程中，我们将学习使用Nginx作为负载平衡器" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx以其高性能和可扩展性而受欢迎。这是#1开源Web服务器。在本教程中，我们将学习使用NGINX作为负载平衡器。" 
url: /zh/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx以其高性能和可扩展性而受欢迎。这是#1开源Web服务器。在本教程中，我们将学习使用NGINX作为负载平衡器。

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="如何使用nginx作为负载平衡器">}}

现代高流量网站为数十万，在某些情况下为用户或客户的数百万个并发请求，并以快速可靠的方式返回正确的文本，图像，视频或应用程序数据。为了满足这些大量量的需求和计算功率，您需要更多的服务器。使用更多的服务器，您需要一种方法来平衡这些服务器之间的流量。在此博客教程中，我们将探讨什么是负载平衡器以及如何将NGINX用作负载平衡器。
要将NGINX负载平衡配置为先决条件，您将需要至少有两个带有Web服务器软件的主机，以查看与NGINX的负载平衡的优势。如果您已经设置了一个运行的Web主机，请通过创建自定义图像并将其部署到新的Web服务器上来复制它。因此，让我们学习如何为云服务器逐步设置NGINX负载平衡配置。
  *** [nginx Web服务器][1] **
  *** [负载平衡器][2] **
  *** [设置nginx作为负载平衡器（Round Robin）][3] **
  *** [关于不同的上游指令][4] **
  *** [结论][5] **

## nginx Web服务器{#webserver}
NGINX是高性能的开源Web服务器。除了其HTTP服务器功能外，NGINX还可以用作电子邮件（IMAP，POP3和SMTP）的代理服务器和反向代理，并为HTTP，TCP和UDP服务器加载余额NGINX。它可以提高应用程序的性能，可靠性和安全性。它以丰富的功能集，简单的配置和低资源消耗而受欢迎。
Nginx如何工作？ NGINX通常用作NGINX反向代理负载平衡器作为在多个单独服务器上工作的分布式Web应用程序的单个入口点。它使用异步，事件驱动的方法提供低内存使用和高并发性。您可以阅读有关nginx [此处][6]的更多信息。

## 加载平衡器{#loadbalancer}
负载平衡是在多个服务器上分配网络流量的过程。执行此分配过程的“软件”或“硬件”称为负载平衡器。负载平衡器就像一个站在服务器前的“流量警察”，并在所有服务器上路由客户端请求。它确保您的应用程序仍在运行中，即使其中一台服务器下降也是如此。

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx作为负载平衡器">}}

负载平衡器的主要功能如下：
  *在多个服务器上有效分发客户端请求或网络加载
  *仅通过向在线的服务器发送请求来确保高可用性和可靠性
  *提供了根据需求要求添加或减去服务器的灵活性

## 设置nginx作为负载平衡器{#setup}
在设置NGINX循环负载平衡之前，您应该在服务器上安装NGINX。您可以使用Apt-Get快速安装它：
```
sudo apt-get install nginx
```
为了设置圆形载荷负载平衡器，我们需要使用Nginx上游模块。我们将将NGINX负载平衡器配置更新为NGINX设置。让我们打开您的网站的配置。为了此示例，我正在使用默认配置文件
```
sudo vi /etc/nginx/sites-available/default
```
我们需要将负载平衡配置添加到文件中，以使用nginx配置负载平衡器。
首先，我们需要包括Nginx上游负载平衡的上游模块，该模块看起来像这样：
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
在服务器块中使用此后游此后端作为您的代理端点：
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
重新启动nginx
```
sudo service nginx restart
```
只要您将所有服务器都设在适当的位置，您现在应该发现NGINX开源负载平衡器将开始平等地将访问者分配给服务器。这种相等的分布称为旋转载荷负载平衡。

## 上游指令{#upstream}
在上一个示例中，我们使用了一个简单的上游模块来进行圆形载荷负载平衡，以在服务器之间平均分配流量。但是，有很多原因为什么这可能不是处理流量的最有效方法。我们可以使用多个指令来更有效地引导现场访问者。

### 重量
开始将用户分配给服务器的一种方法是将特定的重量分配给某些机器。 NGINX允许我们分配一个指定应向每个服务器的流量比例的数字。
包含服务器重量的负载平衡设置看起来像这样：
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
默认重量为1。重量为2，后端2.例将发送的流量是后端1的两倍，而后端3的重量为4，将处理两倍的流量，是后端2的两倍，是后端的两倍。 1。

### 哈希
IP Hash允许服务器根据其IP地址响应客户端，每次访问时将访问者返回相同的VP（除非该服务器降低）。如果已知服务器不活动，则应将其标记为向下。然后将所有应该路由到Down服务器路由的IP都定向到替代服务器。
下面的配置提供了一个示例：
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max失败
根据默认的循环设置，即使服务器未响应，NGINX应用程序负载平衡器也将继续向虚拟专用服务器发送数据。 Max Fails可以自动通过在设定的时间内渲染不响应的服务器来自动防止这种情况。
最大失败有两个因素：最大\ _fails和fall \ _timeout。 Max Fails是指在被视为无活动之前应发生的最大尝试连接到应该发生的服务器的尝试。 fall_timeout指定服务器的长度被认为是不起作用的。一旦时间到期，到达服务器的新尝试将再次启动。默认超时值为10秒。
样本配置可能看起来像这样：
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## 结论：{#conclusion}
在此NGINX负载平衡教程中，我们了解了NGNIX，负载平衡以及如何设置NGINX负载平衡器以将您的流量分配给多个服务器。我们还探索了不同的负载平衡算法，例如圆形旋转，哈希和Max失败。如果您正在运行具有大音量的应用程序，并且需要在不同的服务器上分配负载，则NGINX是最适合您的选择之一。最重要的是，它是100％免费和开源网络服务器。
_您可以加入我们的[Twitter][7]，[LinkedIn][8]和我们的[Facebook][9]页面。哪些其他强大的负载平衡器可以改善您的服务器资源可用性和效率__您使用？ 。如果您有任何疑问或反馈，请_ [联系][10]。

## 探索
您可能会发现以下更多的文章
  * [如何使用Let's Encrypt在Ubuntu 20.04上保护和加密NGINX][11]
  * [Apache vs nginx  -  2021年的详细比较][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
