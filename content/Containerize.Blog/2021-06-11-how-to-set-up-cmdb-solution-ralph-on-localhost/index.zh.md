---
title: "如何在Local主机上设置CMDB解决方案" 
seoTitle: "如何在Local主机上设置CMDB解决方案" 
description: "本教程是关于在Localhost上设置Ralph。 Ralph是一种免费的CMDB解决方案，可为跟踪资产和配置提供功能。" 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "IT资产管理解决方案降低了运营成本并提高效率。本文介绍了如何在本地计算机上设置CMDB软件Ralph。" 
url: /zh/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## IT资产管理解决方案降低了运营成本并提高效率。本文介绍了如何在本地计算机上设置CMDB软件Ralph。

{{< figure align=center src="images/ralph.png" alt="CMDB解决方案">}}


##  **概述**  
在当前的时间点，组织正在蓬勃发展，通过采用庞大的IT基础架构来满足技术的步伐。接下来，管理如此巨大的环境不仅仅是一个挑战。它需要人力和技术力量才能完成此类关键任务。有时，制定过程和过程来处理包括打印机，台式计算机，扫描仪，手机和其他IT配件的系统网络的过程和过程变得麻烦。同样，这些节点的配置也很重要，因为网络中任何机器的停机时间很高。因此，应该对这些配置进行一致的检查。
但是，有许多开源和免费软件可保留资产跟踪和记录。该软件称为配置管理数据库软件（CMDB）。最近，[Containerize.com][1]发布了CMDB解决方案[Ralph][2]，该解决方案为更好的资产和配置管理提供了许多功能。在这篇博客文章中，我们将通过介绍以下几点来探索拉尔夫。
*  **[简要介绍CMDB软件资产管理Ralph][3]**  
*  **[Ralph的功能][4]**  
*  **[如何在local主机上设置ralph？][5]**  
*  **[结论][6]**  

## 简要介绍CMDB软件资产管理Ralph {#intro}

拉尔夫是一种免费的开源IT资产管理解决方案。它是跨平台，具有自托管功能。有一个完整的实时资产跟踪生态系统。因此，用户可以执行报告分析。它使用户能够记录有关其生命周期的资产细节。此外，此开源数字资产管理软件为存储有关数据中心资产的信息提供了空间。另一方面，该CMDB解决方案还为管理软件，许可证，证书和其他合同提供了支持。拉尔夫不仅支持资产管理，而且还提供了对这些资产采取行动的规定。但是，这些动作与部署主机，生成发票，域跟踪或库存管理有关。
此IT资产管理解决方案提出了一个安息的接口。开发人员可以使用此开源免费工具所示的API端点来集成许多第三方应用程序。此外，拉尔夫（Ralph）与HTML，CSS和JavaScript的输入一起编写。因此，有有关开发和部署的全面文件。该股票管理解决方案的源代码可在[GitHub][7]上获得。

## 拉尔夫的特征 {#features}

拉尔夫提供了许多功能。但是，我们将提及以下一些关键功能。
 **可扩展** ：此开源数字资产管理软件非常可扩展。开发人员可以根据需求将其部署在场所或云上。
 **支持数据中心:**  拉尔夫还为数据仓库，数据中心房间，服务器和机架提供支持。用户可以跟踪所有组件，其网络和配置。
 **REST API** ：此免费的CMDB软件非常可自定义。实际上，它为第三方集成提供了REST API。开发人员可以根据他们的要求将其扩展。
 **直观的用户界面:**  此CMDB解决方案中有一个逻辑用户界面，用户可以轻松导航。此外，管理仪表板提供了各种小部件，这些小部件可实时显示数据。
 **命令行界面** ：Ralph提出了一个命令行接口，该接口提供了一个设施，可以发现用于部署主机的MAC地址。
 **支持非物理资产** ：本设备管理解决方案不仅为物理资产提供支持，还可以管理域，软件和许可等非物理资源。

## 如何在Localhost上设置Ralph？ {#setup}

在本节中，我们将在本地计算机上介绍Ralph资源管理软件的安装过程。设置和使用非常容易。
移至下一节之前，请确保您已经安装了以下先决条件。
  * [Docker-Compose][8]
  * [Docker][9]
大多数开源软件都为各种平台上的部署提供码头图像。它使开发人员轻松并加快开发和部署过程。
安装先决条件后，打开Docker。现在，打开终端并运行以下命令以制作一个空目录：
```
mkdir ralph<br>cd ralph
```
之后，制作一个名为“ Docker-compose.yml”的新文件，并使用以下数据填充它。
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
现在，保存文件并运行以下命令以进行构建：
```
docker-compose build

```
成功构建后，运行数据库的以下命令：
```
docker-compose run –rm web /root/init.sh

```
如果一切顺利，请运行以下命令来旋转Docker的容器：
```
docker-compose up -d
```
运行该命令后，Docker容器将按照下图所示启动并运行：

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB解决方案">}}

最后，打开浏览器并在此地址访问应用程序http://127.0.0.1。
它将显示登录页面，如下图所示：

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB解决方案">}}


## 结论 {#结论}

经过此CMDB教程博客文章后，很明显，如果没有良好的CMDB解决方案，资产管理几乎是不可能的。资源管理软件在管理和跟踪资产，配置及其关系中具有特定的作用。有一些规定跟踪几乎没有在数字或物理资产上进行的更改。这些免费工具易于设置，使用，并提供详细的文档和指导。最后，[  **containerize.com** ][1]旨在撰写有关进一步开源产品的文章。因此，请与此[][10] **[CMDB软件][11]**  类别保持联系。

## 探索
*  **[CMDB软件][11]**  
*  **[Ralph][2]**  
* [  **使用免费和开源软件自动化业务操作**  ][12]
*  **[在2021年要注意的软件开发趋势][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
