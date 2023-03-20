---
title: "Osticket自定义 - 在Osticket中实现多租赁" 
seoTitle: "Osticket自定义 - 在Osticket中实现多租赁" 
description: "实施多租金可以节省成本和资源利用率。在本文中，我们将进行Osticket自定义以实现多租赁。" 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "多租户式托运服务台可让您从单个安装中创建多个租户。这使得最佳使用Web服务器资源。" 
url: /zh/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Tenant Osticket Helpdesk使您可以通过单个安装创建多个租户。这使得最佳使用Web服务器资源。

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticket自定义 - 在Osticket中实现多租赁">}}

在本文中，我们将讨论如何制作Osticket自定义以实施多租户。这篇文章将涵盖以下主题：
  * [osticket概述][1]
  * [多租期概述][2]
  * [多租期的好处][3]
  * [实施][3]
  * [结论][4]

## osticket概述：{#osticket}
[Osticket][5]是开源在线客户支持网络的服务台软件。它提供了直观的控制面板和一个实时报告组件。它易于使用查询管理模块。这使您可以通过手机，电子邮件和基于Web的表单创建查询。它提供了许多选项，以帮助定制客户支持经验的所有部分，例如评论和电子邮件通知。

## 多租户概述：{#multitenancy}
多租赁是指实施，其中应用程序的多个独立实例在共享环境中运行。实例（租户）在逻辑上是孤立的，但物理整合。组织可能有多个部门。因此他们可以创建同一应用程序的多个租户/实例。例如，在我们的情况下，可以为同一组织的不同域配置服务台系统。可能有数百个租户，但他们都将使用相同的文件，因此将使用相同的存储空间。这将降低存储成本，并更容易升级。开发人员只需要从一个地方更新文件，而不是分别为每个站点进行更改。

## 多租户有什么好处？ {#好处}
这是多租户的一些关键好处
  ***资源优化：**一台为一个租户保留的机器并不有效。因为一个租户不太可能使用机器的所有计算能力。共享机器将最大化资源可用性。
  ***较低的成本：**拥有共享相同资源的多个租户的成本将比每个租户需要自己的专用基础设施低得多。
  ***有效的托管：**同样，多租户的托运将在共享环境中将托管成本降低到最低。
  ***安全性：**与外界的互动较少，降低了恶意软件的暴露。
  ***轻松升级**：仅在一个地方升级文件，而不是单独更新它们。这将节省大量的时间和精力。

## 多租户Osticket的实现：{#implementation}
  *创建一个新的空数据库名称为“ main_db”。
  *然后创建名为“租户”的表格，该表将保留有关所有租户的详细信息。
  *它将有以下字段：
  1. site_name
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticket自定义 - 在Osticket中实现多租赁">}}

  *站点\ _name字段将保留租户的名称。 URL字段将保存租户的完整URL。 db \ _name字段将保留将为新租户创建的数据库的名称。
  *之后，打开 /include/ost-config.php文件并添加以下代码
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  *此代码将更新默认数据库连接。它将首先获得当前租户的URL。然后，它将根据该URL获取数据库的名称。这就是该应用程序将知道要连接到哪个数据库的方式。每个租户都会有一个单独的数据库。数据库将根据租户URL选择。
  *为了创建新的房客，只需在Nginx服务器上设置新的房客域即可。之后，只需复制当前的Osticket数据库并将其重命名。最后将条目添加到“ main_db”数据库的“租户”表中。

## 结论：{#conclusion}
Osticket是一个免费的开源IT帮助办公桌管理软件。我们已经了解了如何制作Osticket自定义以在osticket中实现多租赁，以节省成本，优化应用程序并降低资源需求。这将使开发人员的生活更轻松，可以通过几个简单的步骤创建新的租户。因此，从同一安装中创建多个托运租户。

## 探索：
请查看以下页面以了解有关Osticket的更多信息：
  * [osticket  - 免费的开源服务台软件][5]
  * [开发Osticket插件的初学者指南][6]
  * [如何使用Osticket设置在线帮助台软件][7]
  * [使用WordPress和Osticket自动票务系统][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
