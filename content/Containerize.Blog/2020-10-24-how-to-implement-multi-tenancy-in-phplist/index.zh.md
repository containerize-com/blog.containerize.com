---
title: "如何在phplist中配置多租户应用程序" 
seoTitle: "如何在phplist中配置多租户应用程序" 
description: "PHPLIST是一种免费的开源通讯软件。配置多租户应用程序，并在共享环境中运行多个应用程序。" 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "在Phplist中开发多租户应用的教程。多租户功能使用单个安装用于多个主机来降低托管成本。" 
url: /zh/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## 教程在Phplist中开发多租户应用程序。多租户功能使用单个安装用于多个主机来降低托管成本。

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="多租户应用程序phplist">}}

在本文中，我们将介绍 **多租金**以及如何在phplist中配置**多租户应用程序** 。

## 什么是phplist？
在决定营销策略时，电子邮件营销是每个在线数字公司的关键部分。 Phplist使企业能够吸引大量受众。 phplist被广泛使用 **开源通讯软件** 用于管理列表和发送新闻通讯。它可以帮助公司创建，安排，发送和分析新闻通讯广告系列。 Phplist支持分析，分割，弹跳处理，插件，API等功能。

## 什么是多租户？
多租户是一个体系结构，其中许多客户/站点由软件应用程序的单个实例表示。在多租户中，该地点被认为是租户。每个租户都有特定的功能，例如配置，主题，SMTP。
云计算的一个主要方面是多租赁。 **多租户架构** 通过降低维护成本和快速的租户更新来帮助企业实现更好的投资回报率。同样，在多租户架构上设计的应用程序可以轻松扩展。
我们可以使用以下方法来实现多租赁。
* 共享所有租户的数据库。
* 为每个租户分开数据库。
我们将为每种租户方法使用单独的数据库来实现PHPLIST中的多租户。
  * [处理请求流][1]
  * [房客的设置数据库][2]
  * [租户配置nginx][3]

## 处理请求流 {#request}

* 备份您的config.php文件，您可以在配置目录下找到它。
* 创建一个新的config.php文件，并在其处理站点/租户中添加以下代码。
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
用您的域名替换example.com。您还需要为每个租户创建一个配置文件。复制config.php的备份文件，并使用诸如config.example.com.php之类的新名称保存。

## 房客的设置数据库 {#database}

* 备份现有的phplist数据库。使用它为新租户创建数据库。
* 打开config.example.com.php文件。根据您的环境更改数据库凭据和任何其他设置。

## 为房客配置NGINX {#Nginx}

* 转到nginx目录 **cd/etc/nginx/sites-abailable** 。
* 复制默认config.php文件，然后将其保存在您的站点名称（例如example.com）中。
* 用 **sudo nano example.com** 打开example.com配置。
* 更改根路径，server_name和任何其他设置。
* 使用 **sudo nginx -t** 测试配置
* 最后，通过执行 **sudo ln -s/etc/nginx/sites-available/example.com/etc/etc/nginx/stites-enabled/** 来创建符号链接。
* 通过运行 **sudo systemctl restart nginx** 重新启动nginx Web服务器，因此它可以加载新创建的配置文件。

## 结论
与单租户应用相比，多租户软件具有一些优势，例如降低维护成本，有效的资源使用和易于安装更新。如果要构建SaaS（软件作为服务）软件，则可以遵循多租赁体系结构并享受其真正的力量。

## 探索
您可能会发现以下链接相关：
  * [PHPLIST  - 开源通讯和电子邮件营销软件][4]
  * [如何使用phplist创建和发送新闻通讯][5]
  * [如何在phplist中设置和过程弹跳][6]
  * [开发Phplist插件的初学者指南][7]
  * [设置高级反弹管理和弹跳规则][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
