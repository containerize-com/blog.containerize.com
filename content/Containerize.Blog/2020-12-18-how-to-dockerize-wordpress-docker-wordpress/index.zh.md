---
title: "如何停止WordPress | Docker WordPress" 
seoTitle: "如何停止WordPress | Docker WordPress" 
description: "什么是Docker＆Docker组成？在本文中，我们将学习如何安装Docker，Docker组成，以及如何将WordPress Dockerize将其置于Docker容器中。" 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "容器软件捆绑了应用程序，其依赖项，并使应用程序在任何计算环境上运行。让我们学习如何停止WordPress。" 
url: /zh/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## 一个容器软件捆绑了一个应用程序，其依赖关系，并使应用程序在任何计算环境上运行。让我们学习如何停止WordPress。

{{< figure align=center src="images/dockerwordpress.png" alt="dockerize wordpress">}}


## 概述
欢迎使用开源软件的[Blogging][1]类别中的另一篇博客文章。我们已经发表了一些有关主题的文章，例如[通过免费的civicrm wordpress集成增强潜在客户][2]，[如何使用WordPress和Gatsby和Gatsby][3]等。但是，本文将提供有关开源博客平台和**容器软件**的进一步见解和详细信息。我们将讨论一些热门问题，例如什么是Docker＆**如何安装Docker组成**，我们将学习如何停泊WordPress。
容器化已成为软件开发的主要趋势，以替代虚拟化。它涉及封装或捆绑软件代码及其所有依赖性，以便它可以始终如一地在任何基础架构上运行。容器化允许开发人员更快，更安全地创建和部署应用程序。 Docker是在开发人员社区中使用的最受欢迎的集装箱应用程序。在本教程中，我们将学习如何使用Docker撰写来模拟WordPress。因此，让我们从以下几点开始。
  *[**什么是Docker？**][4]
  *[**为什么您需要停靠WordPress **？][5]
  ***[如何安装Docker组成][6]** 
  ***[dockerize wordpress][7]** 
  ***[结论][8]** 

## 什么是Docker？   {#docker}
简而言之，Docker是开源**容器软件**，可以更快，更轻。它是如此轻，以至于可以在短短几秒钟内启动一个码头容器。而且，您可以在一台PC上轻松运行数十个Docker容器。开发人员使用Docker使用容器来创建，部署和运行应用程序。容器允许开发人员将应用程序包装到所需的所有零件（例如库和其他依赖项）中，并将其部署为一个软件包。通过这样做，开发人员可以放心，该应用程序将在任何基础架构上运行。此外，还有一个庞大的开发人员和支持社区，它始终活着，可以在任何相关性上提供最大的帮助。由于其强大的功能和用法，Docker已成为任何软件企业的必备部分。

## 为什么您需要停靠WordPress？   {#为什么}
在本节中，我们将了解Dockerizing WordPress背后的需求。 WordPress是领先的开源博客软件，该软件被技术界高度采用。但是，要在本地运行WordPress，您需要Apache/nginx，MySQL Server，PHP和其他许多依赖关系。在管理这些依赖性方面，部署到分期或生产环境是一场噩梦。有时，这会成为开发人员和支持工程师的麻烦，以便在需要时间和人力的情况下反复重复部署。
因此，容器化可以为您提供帮助。您需要的是Docker  - 安装本身需要几秒钟，不需要其他配置
无论它是开发机，舞台还是实时服务器，以及它是什么操作系统，Docker到处都可以工作。这意味着您不必寻找出现在一个环境中并且不能在另一个环境中复制的错误。

## 如何安装Docker组成 {#install}

### 先决条件
您可以使用Docker组合在使用Docker容器构建的孤立环境中轻松运行WordPress。本指南演示了如何使用组合来设置和运行WordPress。
Docker撰写的依赖于Docker Engine，因此请确保您安装了Docker Engine。在台式机系统（例如用于Mac和Windows的Docker Desktop）上，将包括Docker Compose作为这些台式机安装的一部分。但是，首先，在Linux系统上，按照其[官方指南][9]安装Docker引擎。

### 在Linux上安装撰写
运行此命令以下载Docker当前稳定版本组成：
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
将可执行的权限应用于二进制文件：
```
sudo chmod +x /usr/local/bin/docker-compose
```
通过运行版本命令进行测试安装：
```
docker-compose --version
```

### 定义WordPress的Dockerfile
我们需要做的第一件事是定义在**_ dockerfile _** 中的图像的样子。这是一个文本文件，并添加到了您的应用程序源中的目录中。
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“ **/var/www/html/wordpress **”将包含WordPress的完整内容以及主题，插件和内容。如果您的存储库仅包含主题或插件，则只需添加相关文件夹即可。
创建一个启动您的WordPress博客的Docker-compose.yml文件，并具有一个单独的MySQL实例，其中具有用于数据持久性的音量安装：
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
现在，在项目目录中运行命令
```
docker-compose up -d
```
这将在分离模式下运行**_ docker-compose _** ，拉动所需的docker映像，然后启动WordPress和数据库容器。
容器启动后，您可以在Web浏览器中打开URL并开始使用您的应用程序：
```
http://localhost:8000
```

## 结论 {#conclusion}
这使我们进入了此博客文章的结尾。在本文中，我们了解了什么是Docker，**如何安装Docker组成**。我们还学会了如何使用Docker-Compose对WordPress进行扩展。此外，我们向您介绍了Docker背后的概念，以及如何定义简单的多容器应用程序。但是，此开源**容器软件**是所有软件组织的领先选择。因此，如果您希望选择用于应用程序的Docker，那么本文将为您提供帮助。下面的“探索”部分中列出了许多其他相关文章和博客软件。
最后，[Containerize.com][10]正在撰写有关进一步开源产品的文章。因此，请与[Blogging][1]类别保持联系以进行常规新闻和更新。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
您可能会发现以下链接相关：
  * [WordPress][14]
  * [Jekyll][15]
  * [话语][16]
  * [鬼][17]
  * [如何用Docker组成WordPress][18]
  * [通过免费的civicrm wordpress集成增强潜在客户][2]
  * [使用WordPress和Osticket自动票务系统][19]
  * [如何将话语论坛与WordPress整合][20]
  * [通过关注前7个SEO博客来增加网站搜索流量][21]
  * [如何使用WordPress和Gatsby构建网站][3]
  * [如何在WordPress中启用GZIP压缩以获得更好的PAGSPEED和SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/zh/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
