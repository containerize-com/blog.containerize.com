---
title: "使用火山口发票应用的初学者指南" 
seoTitle: "使用火山口发票应用的初学者指南" 
description: "从开源发票系统入门的教程。这项火山口准则可以帮助您熟悉核心概念和功能。" 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "本教程将帮助您了解火山口发票应用程序。它是一个免费的小型企业的免费开源发票系统。" 
url: /zh/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## 本教程将帮助您了解火山口发票应用程序。它是一个免费的小型企业的免费开源发票系统。

{{< figure align=center src="images/blog-crater.png" alt="开源发票系统">}}

每个企业都需要某种系统来管理发票，费用，付款等。发票软件可以帮助您管理它，以便您可以轻松执行计费任务并将关注点关注其他重要内容。在这篇文章中，我们将学习如何设置火山口并将其用于处理企业的会计操作。
  * [关于火山口的介绍][1]
  * [火山口的安装程序][2]
  * [功能探索][3]
  * [结论][4]

## 关于火山口的介绍 {#Introduction}

[火山口][5]是一个免费的开源计费申请。它是绝对免费的，您可以轻松地将其更新为最新版本。它是针对小型企业和自由职业者的免费会计系统。这也是一个完整的发票解决方案，使您可以跟踪费用和付款，计算税收并产生估计和发票。此外，它带有用于iPhone和Android设备的开箱即用的移动应用程序。它将允许您从任何地方进行管理。由于火山口是一种基于Web的计费软件，因此Web应用程序采用Laravel和Vuejs设计，并且移动应用程序由React Antial构建。所有与开发和部署有关的文档都可以使用。完整的源代码可以在[GitHub][6]上找到。

## 火山口安装程序 {#Installation}

我们将讨论如何使用手动方法安装火山口并在本节中使用Docker。

### 手动安装
* 从中下载最新版本。
* 将下载的ZIP文件上传到您的服务器并提取。
* 将您的域名指向火山口文件夹中的公共目录。
* 导航到项目的根部，并执行“ sudo chmod -r 775 ./”命令，以分配适当的特权。
* 在浏览器中打开您的网站，然后关注安装向导。

### Docker安装
* 在您的服务器上安装Docker：。
* 通过以下本指南安装Docker组成：。
* 使用此命令使用克隆火山口存储库。
```
git clone https://github.com/bytefury/crater
```
* 在下面运行命令以一个命令安装火山口。
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
* 打开浏览器中的火山口站点，然后遵循安装向导。

## 功能探索 {#Feature}

在本节中，我们将探讨此开源计费应用程序的核心功能。完成安装后，打开网站http://example.com并登录到应用程序。
*  **仪表板**   - 登录后，您将被带到仪表板，其中显示了应用程序的整个视图。

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **设置**   - 现在导航到设置页面，并添加各种Web应用程序设置，例如帐户设置，公司信息，偏好，自定义，通知，付款模块等。

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **项目**   - 从侧边栏菜单可访问“项目”选项卡。在此选项卡中，您可以管理项目。您可以在创建估算和发票时使用项目。
*  **估计**   - 创建一个全面的报价，其中包括费率，折扣，库存等。三个内置模板之一可以用于创建估计值。可以将其他税收添加到估算中，也可以作为复合税添加。
*  **发票**   - 制作专业发票并将其发送给您的客户。您可以使用可用的模板来生成发票。您可以向发票以及复合税添加其他税款。此外，您可以为客户提供百分比或固定值折扣。此外，您可以对单个项目以及整体发票金额应用折扣。
*  **付款**   - 此模块可帮助您跟踪您从客户那里获得的付款。
*  **费用**   - 费用模块可帮助您跟踪您在不同服务上的支出。
* **税**  - 使用此功能，您可以轻松管理税收。您可以对总发票金额或单个项目添加多个税款。
*  **报告**   - 获取有关您所有发票的全面信息，无论是给一个或几个客户。火山口支持带有四种类型的报告，例如销售报告，损益报告，费用报告和税收报告。

## 结论 {#结论}

我们了解了火山口以及如何手动和Docker设置它。我们还研究了每个会计计费软件应提供的一些功能。希望本指南可以帮助您快速为您的业务实施开源发票系统。
最后，[Containerize.com][7]不断地撰写有关进一步开源产品和主题的博客文章。因此，请与[8]类别保持联系以进行常规更新。

## 探索
您可能会发现以下链接相关：
  * [火山口 - 小型企业的免费会计系统][5]
  * [2021年的前5个开源会计软件][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
