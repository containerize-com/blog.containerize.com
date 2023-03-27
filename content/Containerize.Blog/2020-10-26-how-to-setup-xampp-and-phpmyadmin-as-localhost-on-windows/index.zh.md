---
title: "将XAMPP和PHPMYADMIN设置为Windows上的本地主机" 
seoTitle: "将XAMPP和PHPMYADMIN设置为Windows上的本地主机" 
description: "将XAMPP和PHPMYADMIN设置为Windows上的本地主机。创建自己的免费和开源本地测试环境，以测试和构建Web应用程序。" 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "使用免费和开源Web服务器解决方案堆栈（XAMPP）和数据库管理软件（PHPMYADMIN）设置开发环境" 
url: /zh/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## 设置带有免费和开源Web服务器解决方案堆栈（XAMPP）和数据库管理软件（PHPMYADMIN）的开发环境

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp和phpmyadmin作为Localhost">}}

XAMPP和PHPMYADMIN作为Localhost提供了本地服务器，供开发人员测试和构建Web应用程序。 XAMPP是安装在个人计算机/笔记本电脑上的本地服务器。它提供了一个本地环境来创建，运行和测试PHP应用程序，然后再将其部署在实时服务器上。
我们将在此博客文章中介绍以下各节：
  * [描述][1]
  * [XAMPP安装][2]
  * [phpmyadmin仪表板][3]
  * [最终想法][4]

## 描述： {#description}

XAMPP是免费的，开源Web服务器解决方案堆栈。它包含Apache，MySQL，Mariadb，PHP和Perl。 XAMPP可用于Windows操作系统。它非常容易安装和使用。这就是为什么它是最受欢迎的PHP开发环境。 Xampp和PhpMyAdmin作为Localhost为Web应用程序开发和测试提供了一个完整的环境。
Xampp中的字母代表：
* **X**  - 跨平台（支持Linux，Windows和Mac OS在内的多个操作系统）
* **A**  -  Apache HTTP服务器
* **m**  -  Mariadb（数据库）
* **P**  -  PHP
* **P**  -  Perl

## XAMPP安装 {#xampp}

* 从[此处][5]下载XAMPP。

{{< figure align=center src="images/xampp1.png" alt="Xampp为Localhost">}}

* 安装可执行文件。
* 然后单击“下一步”。
* 选择要安装的组件。

{{< figure align=center src="images/xampp2.png" alt="XAMPP作为Local主机步骤2">}}

* 对于大多数Web应用程序，您只需要_apache_，_mysql_，_php_和_phpmyadmin_。
* 选择要安装XAMPP的安装目录。
* 将向您显示Windows安全警报。您必须检查以下选项：“ _私有网络，例如我的家庭或工作网络” _。
* 最后单击“完成”以完成安装。

{{< figure align=center src="images/xampp4.png" alt="XAMPP作为Local主机步骤3">}}

* 成功安装后，打开XAMPP控制面板。
* 启动“ Apache”和“ MySQL”服务。

{{< figure align=center src="images/xampp5.png" alt="XAMPP作为Local主机步骤4">}}


## phpmyadmin仪表板： {#phpmyadmin}

要访问phpmyadmin仪表板，请单击MySQL服务旁边的“管理”按钮。您也可以通过访问浏览器访问http：// localhost/phpmyadmin来访问phpmyadmin。在这里，您可以创建数据库。请按照以下步骤创建一个新的数据库。
* 从仪表板中，单击“数据库”选项卡。

{{< figure align=center src="images/db1.png" alt="Local主机的PHPMYADMIN步骤1">}}

* 输入数据库名称，然后单击“创建”按钮。这将仅创建一个新的空数据库。

{{< figure align=center src="images/db2.png" alt="Local主机的PHPMYADMIN步骤2">}}

* 接下来，您可以通过选择新创建的数据库来创建表。
* 在“创建表”下输入表名。

{{< figure align=center src="images/db3-1024x234.png" alt="Local主机的PHPMYADMIN步骤3">}}

* 选择列数。
* 然后单击“ GO”按钮。
* 之后，您需要在下一页上填写表格才能完成创建表。

{{< figure align=center src="images/db4-1024x564.png" alt="Local主机的PHPMYADMIN步骤4">}}


## 最后的想法： {#final}

XAMPP安装简单明了。设置XAMPP服务器的设置不超过15分钟。安装后，即使没有Internet连接，开发人员也可以构建和测试基于PHP的Web应用程序。与其直接在实时Web服务器上测试项目，不如在本地测试它们是简单且节省时间的。对于初学者来说，这是一个很好的平台，可以学习，测试和抛光其PHP，PERL和数据库技能。

## 探索：
[PHP和PERL开发人员的开源Web服务器解决方案堆栈][6]
[最佳开源Web服务器解决方案堆栈选项][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
