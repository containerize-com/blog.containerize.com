---
title: "如何在WordPress中启用GZIP压缩| Gzip WordPress" 
seoTitle: "如何在WordPress中启用GZIP压缩| Gzip WordPress" 
description: "您是否要在WordPress中启用GZIP压缩以加快您的网站？在此博客文章中，我们将学习如何在WordPress中启用压缩。" 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "页面速度和加载时间是搜索引擎中更好排名的关键因素。 GZIP压缩可以使其实现并提供竞争优势。" 
url: /zh/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## 页面速度和加载时间是搜索引擎中更好排名的关键因素。 GZIP压缩可以使其实现并提供竞争优势。

{{< figure align=center src="images/Asset-1.png" alt="启用GZIP压缩">}}


## 概述
由于Google和其他搜索引擎正在考虑网站的用户体验（UX）是其排名算法的关键因素。改进和优化您的网站以获得最高评分变得越来越重要。要注意的最重要的因素之一是页面速度和加载时间。而且，提高站点速度和性能的最快，最简单的方法是在您的网站上启用GZIP压缩。您的Web主机有可能自动为您启用GZIP压缩。如果没有，您必须自己执行这项关键任务。
在本文中，我们将向您展示如何轻松启用WordPress中的GZIP压缩。让我们开始吧！
  *[**什么是GZIP压缩**？][1]
  *[ **GZIP压缩如何工作？** ][2]
  ***[如何验证是否启用GZIP压缩？][3]** 
  ***[启用WordPress中的GZIP压缩][4]** 
  ***[结论][5]** 

## 什么是GZIP压缩？   {#什么}
GZIP是**文件格式，并且用于文件压缩和减压的软件应用程序**。 Web服务器或其他软件使用GZIP压缩将数据文件发送到用户浏览器之前。这减少了文件下载时间，这使您的网站更快。所有现代浏览器都支持GZIP压缩。
同样重要的是要注意，必须在Web服务器上启用GZIP压缩，然后才能启用文件和文件夹压缩。不久，我们将看看如何验证您的Web服务器是否已启用了GZIP。

## GZIP压缩如何工作？   {#工作}
GZIP是最流行的压缩方法，由Web服务器和浏览器使用，以通过Internet传输时压缩和解压缩内容。它主要用于代码和文本文件，GZIP可以将JavaScript，CSS和HTML文件的大小减少多达90％。默认情况下，GZIP压缩不会压缩图像或视频。为此，您需要在WordPress网站上优化Web的图像。这就是为什么大多数网站速度测试工具（例如Google PagesPeed Insights）强烈建议启用GZIP压缩。
当Web服务器收到网页请求时，Web服务器会检查请求的标题，以检查浏览器是否支持GZIP。如果是这样，服务器在应用GZIP之前会生成页面的标记。 GZIP将HTML标记转换为压缩数据，然后将其传递到最终用户。当最终用户收到压缩数据时，他们的浏览器将其解压缩。

## **如何验证是否启用了GZIP压缩？**   {#verify}
默认情况下，您的Web主机可能会在WordPress中启用压缩。但是，情况并非总是如此。您可以确定使用Chrome'DevTools是否已经启用了GZIP压缩。
在Chrome浏览器中打开您的网站，然后右键单击页面上的任何位置，然后选择**检查**以**打开开发人员工具**。
接下来，导航到**网络**选项卡，然后从“名称”部分单击网站的主URL。选择**标题**选项卡，然后向下滚动以找到**响应标头**部分：

{{< figure align=center src="images/gzip-determine.gif" alt="验证内容编码">}}

在那里，您会看到是否启用了GZIP压缩。

## 在WordPress中启用GZIP压缩 {#enable}
如果您确定 **WordPress GZIP压缩尚未启用** ，则可以使用多种方法来运行它。最简单的方法是使用一些WordPress插件，例如[WP Rocket][6]，[WP Super Cache][7]或[W3 Total Cache][8]。但是，您可以通过.htaccess文件或更新Nginx配置在服务器级别手动执行此操作。

## # 通过编辑.htaccess文件
启用WordPress GZIP压缩的最常见方法之一是**编辑您的_.htaccess_文件**。但是，这涉及破坏某事的风险。这是一个敏感的服务器文件，一个错误的举动可能会导致很多问题。
为了降低风险，请确保**保存原始文件的副本**，然后进行任何更改。 _.htaccess_文件应位于网站的**根文件夹中**。打开_.htaccess_之后，在下面添加以下代码`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**保存文件**并将其上传到您网站的服务器。完成后，请检查GZIP是否使用Chrome的DevTools启用了GZIP，如上所述。

## 启用nginx中的GZIP压缩
为了**启用压缩**，包括与on参数的**gzip **指令。  **gzip **  on;默认情况下， **nginx**  仅使用MIME类型文本/HTML压缩响应。要使用其他MIME类型来压缩响应，请包括GZIP_TYPES指令，并列出其他类型。
您可以通过**打开_nginx.conf_文件**并添加以下代码：
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## 结论 {#conclusion}
这是该GZIP WordPress教程的终点。有很多方法可以优化您的网站以换取速度和性能。在此GZIP WordPress教程中，我们仔细研究了GZIP压缩，GZIP压缩的重要性及其安装步骤。此外，下面的“探索”部分中提到了许多相关链接。
最后，[Containerize.com][9]正在撰写有关进一步开源产品的文章。因此，请与[Blogging][10]类别保持联系以进行常规新闻和更新。

## 探索
  * [MATOMO][11]
  * [合理][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [如何用docker构成WordPress][15]
  * [免费业务分析工具如何为您的业务提供帮助][16]
  * [前5名开源商业智能工具2021][17]
  * [如何在WordPress中安装插件|香草论坛][18]
  * [通过免费的civicrm wordpress集成增强潜在客户][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
