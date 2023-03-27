---
title: "如何使用nginx中的GZIP压缩来优化网站" 
seoTitle: "如何使用nginx中的GZIP压缩来优化网站" 
description: "在本文中，我们将讨论一种方法，通过通过NGINX中的GZIP压缩降低文件大小来优化您的网站传输速度。" 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "该教程指导您如何优化网站性能，并通过使用NGINX中的GZIP压缩来减少文件大小来快速实现。" 
url: /zh/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## 该教程指导您如何优化网站性能并通过使用NGINX中的GZIP压缩减少文件大小来快速地进行。

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="如何在Nginx中启用GZIP压缩">}}

本文是延续我们有关Nginx的系列教程。到目前为止，我们已经介绍了如何使用NGINX作为负载平衡器，如何使用NGINX作为反向代理。现在，本教程涵盖了另一个要求的问题：“如何使用NGINX中的GZIP压缩来优化您的网站”。在本教程中，我们将指导您逐步介绍如何在NGINX中启用GZIP压缩。所以，让我们开始吧！
  * [压缩的网站优化][1]
  * [什么是GZIP压缩？][2]
  * [GZIP压缩如何工作？][3]
  * [启用nginx中的GZIP压缩][4]
  * [验证GZIP压缩][5]
  * [结论][6]

## 网站优化和压缩 {#optimize}

网站的性能取决于许多因素。部分取决于部分的因素之一是用户浏览器必须从服务器下载的所有文件的大小。减少或压缩这些传输文件的大小可以使用户更快地加载您的网站加载。如果您支付计量连接的带宽使用费，它还可以减少网站的账单。因此，压缩可以在您的网站优化中发挥非常重要的作用。
由于Google和其他搜索引擎正在考虑网站的用户体验（UX）是其排名算法的关键因素。改进和优化您的网站以获得最高评分变得越来越重要。要注意的最重要的因素之一是页面速度和加载时间。而且，提高网站速度和性能的最快和最简单方法是在您的网站上启用GZIP压缩。

## 什么是GZIP压缩？ {#what-gzip}

GZIP是用于文件压缩和解压缩的 **文件格式和软件应用程序** 。 Web服务器或其他软件使用GZIP压缩将数据文件发送到用户浏览器之前。这减少了文件下载时间，这使您的网站更快。所有现代浏览器都支持GZIP压缩。
同样重要的是要注意，必须在Web服务器上启用GZIP压缩，然后才能启用文件和文件夹压缩。不久，我们将看到如何在NGINX中启用GZIP压缩。

## GZIP压缩如何工作？ {#how-gzip}

GZIP是最流行的压缩方法，由Web服务器和浏览器使用，以通过Internet传输时压缩和解压缩内容。它主要用于代码和文本文件，GZIP可以将JavaScript，CSS和HTML文件的大小减少多达90％。
默认情况下，GZIP压缩不会压缩图像或视频。这就是为什么大多数网站速度测试工具（例如Google PagesPeed Insights）强烈建议启用GZIP压缩。
当Web服务器收到网页请求时，Web服务器会检查请求的标题，以检查浏览器是否支持GZIP。如果是这样，服务器在应用GZIP之前会生成页面的标记。 GZIP将HTML标记转换为压缩数据，然后将其传递到最终用户。当最终用户收到压缩数据时，他们的浏览器将其解压缩。

## 在Nginx中启用GZIP压缩 {#enable-gzip}

要更改Nginx GZIP配置，请在“ _VI_”或您喜欢的文本编辑器中打开主Nginx配置文件：
```
sudo vi /etc/nginx/nginx.conf
```
查找_gzip_设置部分，看起来像这样：
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
如您所见，默认情况下启用了gzip，并使用_gzip on; _ _ _ _ _ _ _ _ _ _ _，但是还有其他注释的gzip设置。
我们可以启用_gzip_types_设置以在要压缩的文件类型上启用压缩。例如
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
现在，重新启动NGINX以进行新的设置。

## 验证GZIP压缩 {#verify}

现在，我们已经启用了GZIP压缩，让我们对其进行验证。
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
响应将保持不变，因为该文件类型已经启用了压缩：
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## 结论 {#conclusion}

在本文中，我们了解到您可以使用Nginx GZIP模块加快文件传输。我们向您展示了如何使用GZIP模块在NGINX中启用GZIP压缩的逐步向您展示。 [GZIP模块][7]的官方文档列出了您可能想查看的其他配置指令。希望本教程可以帮助您优化网站性能和速度。

## 探索
  * [如何在Ubuntu上使用Nginx安装多个PHP版本][8]
  * [如何设置和配置nginx作为反向代理][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
