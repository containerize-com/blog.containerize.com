---
title: "如何实施多重租赁" 
seoTitle: "如何实施多重租赁" 
description: "Mautic是一种开源营销自动化解决方案。实施多重租赁可降低成本，提高效率和安全性。" 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "通过在Mautic中实施多租户来节省成本并最大化资源使用情况。多租赁有助于代码自定义，应用程序更新，提高生产率和易于维护。" 
url: /zh/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## 通过在Mautic中实施多租户来节省成本并最大化资源使用情况。多租赁有助于代码自定义，应用程序更新，提高生产率和易于维护。

{{< figure align=center src="images/Mautic-multitenancy.png" alt="如何实施多重租赁">}}

Mautic是一种免费的开源营销自动化解决方案，可让您完全控制营销电子邮件，着陆页，工作流以及营销活动的措施。我们将在本教程中介绍以下各节：
  * [什么是多租户] [1]
  * [什么是Mautic] [2]
  * [在Mautic中实施多租户] [3]
  * [结论] [4]

## 什么是多租户{#多租户}
在多租户软件体系结构中，软件应用程序的一个实例为多个租户提供服务。每个租户数据都与共享同一应用程序实例的其他租户隔离。这些租户在逻辑上是孤立的，但物理整合。这样可以确保所有租户的数据安全和隐私。从单个应用程序实例中创建多个租户需要更少的内存。租户共享资源并降低软件维护，基础架构和数据中心操作的成本。成本往往低于单租户基础设施的成本。

## 什么是mautic {#mautic}
[Mautic] [5]是一种免费的开源营销软件。使用Mautic自动化重复的营销任务，例如营销活动，潜在客户生成，联系细分等。它具有令人震惊的功能，包括潜在客户生成，竞选活动，联系细分，电子邮件构建器，A/B测试，页面构建器，潜在客户培养等等。 Mautic还支持与所有流行的社交平台的集成，例如Facebook，Twitter，LinkedIn。所有这些令人难以置信的功能都可以帮助您提高整体客户体验并改善业务营销自动化。

## 在Mautic {#implement}中实现多重租赁
  *创建一个名为“ main_db”的新的空数据库。
  *然后创建名为“租户”的表格，该表将保留有关所有租户的详细信息。
  *它将有3个字段，包括站点\ _name，url和db \ _name，如图所示

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="如何实施多重租赁">}}

  *之后，打开Mautic/app/paths.php文件并添加此代码：
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  *这将根据URL路径选择相应的配置文件。
  *然后复制当前Mautic安装的数据库，并将其用于新租户。
  *之后，创建Mautic/app/config/local.php的副本，然后将其重命名为[site_name] .php。
  *最终根据新数据库更新数据库名称，主机，密码和用户。

## 结论{#conclusion}
Mautic是一种免费，功能丰富且面向质量的营销自动化解决方案。它使您可以创建营销活动，细分市场，表格，报告等。实施多重租赁可降低成本，提高效率，可扩展性和安全性。轻松地从一个安装中创建数百个租户。

## 探索
要了解有关Mautic和Facebook的更多信息，请访问：
  * [Mautic |开源内容营销技术平台] [5]
  * [如何使用广告系列制造商设置MAUTIC广告系列] [6]
  * [Drupal Mautic整合以自动化铅培养] [7]
  * [与Mautic和WooCommerce集成的营销自动化] [8]
  * [整合Mautic＆Joomla进行数字营销自动化] [9]
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
