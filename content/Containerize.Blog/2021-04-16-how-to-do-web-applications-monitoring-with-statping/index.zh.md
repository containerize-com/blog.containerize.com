---
title: "如何使用statping进行Web应用程序监视" 
seoTitle: "如何使用statping进行Web应用程序监视" 
description: "Statping是最佳的网站监视工具之一，使您能够监视所有服务。渲染优美的状态页面，用于展示服务正常运行时间。" 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "自动监视您的网站，Web应用程序，使用免费监视工具的API，并使用开源状态页面系统显示正常运行时间。" 
url: /zh/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## 自动监视您的网站，Web应用程序，带有免费监视工具的API，并使用开源状态页面系统显示正常运行时间。

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Web应用程序监视">}}

Statping是**开源状态页软件**，也是**最佳网站监视工具之一**。它还用于监视HTTP，TCP，UDP，ICMP和GRPC服务等服务。 Statping会自动获取服务，监视它们并渲染美丽的状态页面。它是跨平台，您可以将其安装在Liunx，Mac和Windows操作系统上。此外，它允许使用MySQL，Postgres或SQLite数据库系统来存储信息。此外，它随身携带了iPhone和Android设备的移动应用程序。
让我们来看看Statping的核心功能。
  ***服务监视**  -  Statping使您可以轻松跟踪所有HTTP，TCP，UDP，GRPC和ICMP服务。
  ***通知**  -  Statping支持接收通知的大多数主要第三方申请。
  ***移动应用程序**  - 用于iPhone和Android设备的免费应用程序，并在旅途中管理所有内容。
  *** oauth authenticatio ** n  - 支持诸如GitHub，Google，Slack，Slack和Custom OpenID提供商等流行服务的OAuth身份验证。使用此功能并提高安全性。
我们将在本教程中介绍以下主题。
  * [在Linux上安装] [1]
  * [配置SystemD服务] [2]
  * [创建用于监视的服务] [3]
  * [结论] [4]

## 在linux上安装{#installing}
在下面的命令下运行符号安装。
```
curl -o- -L https://statping.com/install.sh | bash
```

## 配置Systemd Service {#configure}
设置SystemD服务是确保您的Statping服务器可以在必要时自动重新启动的绝佳方法。要创建SystemD服务，请按照以下步骤操作。
  *首先，在命令下运行以创建新文件。
```
sudo nano /etc/systemd/system/statping.service
```
  *复制下面的代码并粘贴其中。
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  *最后，使用以下命令启用并启动SystemD服务。
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## 创建用于监视{#create}的服务
  *打开浏览器，输入URL以登录到您的Stats安装。
  *单击顶部导航中的服务链接。它将向您显示在一个下方的服务页面。

{{< figure align=center src="images/statping-dashboard.png" alt="Web服务监视列表">}}

  *单击创建按钮以添加新的服务以进行监视。填写所需字段，例如服务名称，服务类型，检查间隔，服务端点（URL）等。

## 结论{#conclusion}
我们了解了statping，如何在Linux上安装它以及如何在本教程中创建SystemD服务。此外，我们创建了一项新服务，以监视和向您介绍不同的功能。我们希望本指南将帮助您开始使用stating来执行** Web服务监视**和** Web应用程序监视**。
最后，[** containerize.com **] [5]正在始终如一地编写有关更多最新开源产品的博客文章。因此，与此[**状态页面**] [6]类别保持联系以获取最新更新。

## 探索
您可能会发现以下链接相关：
  *[** 2020年的前5个开源状态页面软件**] [7]
  *[** statping **] [8]
  *[** cachet **] [9]
  *[**监视器**] [10]
  *[** Staytus **] [11]
  *[** upptime **] [12]
  *[** statusfy **] [13]
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
