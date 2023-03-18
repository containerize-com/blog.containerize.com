---
title: "Apache vs nginx |什么是Apache？ |什么是nginx？" 
seoTitle: "Apache vs nginx |什么是Apache？ |什么是nginx？" 
description: "本文是关于Apache vs nginx比较的。这两个Web服务器都是开源，可配置的，并且可以处理世界上一半以上的互联网流量。" 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache使用流程驱动的方法，NGINX使用事件驱动的方法来处理用户请求。让我们探索Apache和Nginx之间的区别。" 
url: /zh/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache使用过程驱动的方法，而NGINX使用事件驱动的方法来处理用户请求。让我们探索Apache和Nginx之间的区别。

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## 概述
尽管Apache和Nginx具有许多素质，但不应将它们视为完全可以互换。这两个开源Web服务器彼此不同，应根据您的Web应用程序的需求选择。在本文中，我们将详细讨论** apache vs nginx **比较。
  * [什么是Apache？] [1]
  * [什么是nginx？] [2]
  * [apache vs nginx比较] [3]
  * [比Apache好] [4]
  * [结论] [5]
  * [探索] [6]

## 什么是Apache？ {#whatisapache}
Apache Web服务器是Internet上最受欢迎的服务器之一，为27％的网站提供服务。 Apache主要是开发人员的首选，因为其灵活性，功率以及广泛的支持和详细的文档。它支持动态加载的模块，使开发人员可以轻松扩展其功能。

## 什么是nginx？ {#whatisnginx}
本文是关于Apache vs nginx比较的。这两个Web服务器都是开源，可配置的，并且可以处理世界上一半以上的互联网流量。

## apache vs nginx比较{#apachevsnginx}
在本节中，让我们根据支持，文档，内容类型和配置结构比较Apache和Nginx。

#### 建筑学
Apache启动了多个服务器进程以在启动时共享工作负载。有一个父母过程和许多子过程。每个子进程都负责创建处理传入请求的服务器线程。 Apache使用多处理模块来分配子进程以接受请求并绑定网络端口。相反，NGINX具有事件驱动的体系结构。 Nginx具有控制端口绑定和配置读数的主过程。主过程根据可预测的过程模型创建子过程，与Apache不同，Apache允许Nginx服务器更有效地使用资源。对于每个新请求，NGINX启动事件，并创建一个仅占用少量过程内存的文件描述符。这使NGINX比Apache更可扩展。 Apache为每个连接消耗更多的过程内存。

#### 模块
Apache和Nginx都具有模块的能力，以扩展或修改其核心功能。对于Apache和Nginx而言，模块的实现都是不同的，主要区别是模块的加载。如果是Apache，则仅在需要它们时动态加载模块。相反，即使您不需要它们，NGINX模块也集成到核心中，即使您不需要它们。从这个意义上讲，与Nginx相比，Apache是​​开发人员的更具自定义平台。就灵活性而言，这是用户的一个限制，但就积极而言，这意味着更好的安全性，因为动态模块可以提出安全问题。

#### 支持和文档
如果我们根据支持和文档进行比较，那么Apache是​​这里的明显赢家，因为它已经在市场上了很长时间。 Apache服务器有一个可用的文档库。相比之下，NGINX由于其高性能和资源利用率而变得流行，因此其支持和文档正在迅速增长。

#### 静态与动态内容
Apache独立提供静态和动态内容。另一方面，NGINX无法提供动态内容，因此将这些请求传递给第三方软件。 Apache服务器使用其常规基于文件的方法处理静态内容。

#### 文件与基于URI的解释
Apache Server可以将请求解释为文件系统上的物理资源或URI位置。另一方面，NGINX旨在作为Web服务器和代理服务器工作。由于这两个角色所需的架构，它主要与URI一起使用，并在必要时转换为文件系统。 NGINX未为文件系统目录指定配置，而是解析URI本身。

#### 配置
Apache提供了开发人员使用称为.htaccess的文件在目录级别设置配置的能力。但是对于NGINX，没有这样的机制可以在目录级别设置配置。就配置而言，Apache提供的灵活性比NGINX更具灵活性。

## nginx比Apache好吗？ {#nginx}
对于服务静态内容而言，NGINX比Apache快。因此，如果您的Web应用程序提供了很多静态内容，那么是的Nginx比Apache更好，更快。就动态内容而言，两个网络服务器几乎都提供相同的性能，因此这里没有明确的赢家。 Apache和Nginx几乎在所有操作系统上都运行，但是与Apache相比，NGINX在Windows上的性能不佳。如果您的操作系统是一个类似于Unix的系统，并且您的Web应用程序至关重要，那么NGINX比Apache更好。

## 结论{#conclusion}
Apache和Nginx都有自己的方式。我们已经讨论了Apache与Nginx比较，什么是Apache，什么是Nginx以及Apache和Nginx之间的差异。从这两个最受欢迎的Web服务器中选择一个完全取决于您的Web应用程序的要求。选择取决于您对Web服务器的性能，资源利用，速度，可扩展性和支持的期望。两者都有自己的利益。没有一种适合所有Web服务器的尺寸，因此请使用最适合您的目标和期望的解决方案。
最后，[Containerize.com] [7]不断地撰写有关进一步开源产品和主题的博客文章。因此，请与常规更新的[开源Web服务器] [8]类别保持联系。此外，您可以在我们的社交媒体帐户[Facebook] [9]，[LinkedIn] [10]和[Twitter] [11]上关注我们。

## 探索{#Explore}
您可能会发现以下链接相关：
  * [2021年的前5个开源Web服务器解决方案堆栈] [12]
  * [设置XAMPP和PHPMYADMIN作为Windows上的Localhost] [13]
  * [XAMPP |免费和开源Web服务器解决方案堆栈] [14]
  * [nginx |轻量级和高性能网络服务器] [15]
  * [ubuntu上的LEMP堆栈的设置教程18.04] [16]
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
