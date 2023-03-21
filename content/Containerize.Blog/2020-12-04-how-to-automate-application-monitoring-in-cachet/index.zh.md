---
title: "如何在Cachet中自动化Web应用程序监视" 
seoTitle: "如何在Cachet中自动化Web应用程序监视" 
description: "Cachet有助于监视您的所有服务并立即通知订户。本文是关于集成第三方插件以自动监视的。" 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "CACHET状态页面使企业能够即时通知服务停机时间。我们将学习如何在Cachet中自动化Web应用程序监视。" 
url: /zh/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Cachet状态页面使企业能够即时通知服务停机时间。我们将学习如何在Cachet中自动化Web应用程序监视。

{{< figure align=center src="images/cachet-monitor.png" alt="Web应用程序监视">}}

监视应用程序和服务是在线业务中非常重要的一部分。您的网站运行24x7，您随时都可以弄错它。在访问它之前，您不知道任何一个网站都在工作。此外，客户将没有有关此问题的信息。他们可能会联系您的支持团队以进行停机时间。此外，这可能会导致您的客户感到失望。但是，您可以通过配置状态页面系统来减少服务停机时间。状态页系统将全天监视您的所有服务，并立即向您的团队和客户发送通知。这将使您能够快速解决问题，并且客户将继续最新进展。在此博客文章中，您将学习如何将第三方库与**cachet **整合在一起，以供** 自动监视**。
  * [要求][1]
  * [设置监视插件][2]
  * [创建Linux服务][3]
  * [结论][4]

## 要求 {#requirements}
  *安装最新版本的Cachet。
  *熟悉Linux服务。

## 设置监视插件 {#plugin}
以下步骤是在Ubuntu上安装和配置用于监视的插件。
  *从[发行页][5]下载二进制文件。
  *将文件重命名为cachet-monitor。
  *通过命令使文件可执行。
```
sudo chmod +x cachet-monitor
```
  *将可执行文件放在路径目录中，以便您可以通过终端直接访问它。因此，我建议您在**/usr/local/bin **下移动。
  *通过运行以下命令创建一个config.json文件。
```
sudo nano config.json
```
  *将以下代码复制到其中并保存文件。
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  *现在，使用此命令测试您的配置。
```
cachet-monitor -c config.json
```
  *如果一切正常，请移至下一节并创建Linux服务。

## 创建Linux服务 {#Service}
以下步骤是创建和启动Linux服务以自动化监视过程。
  *创建服务**cachet-monitor.service** 文件。
```
sudo nano cachet-monitor.service
```
  *将以下代码复制到其中并保存文件。
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  *通过运行命令更新SystemD配置。
```
sudo systemctl daemon-reload
```
  *通过运行命令启用cachet-monitor服务，以便它可以在系统启动上加载。
```
sudo systemctl enable cachet-monitor.service
```

## 结论 {#conclusion}
Cachet A是免费的，并且**开源状态页**系统。但是，它没有为 **Web应用程序监视** 提供开箱即用的功能。取而代之的是，它具有强大的REST API，可用于执行诸如事件，组件，组等之类的动作。在本文中，我们使用第三方插件来自动化CACHET的应用程序监视。最重要的是，您可以开发自己的插件或使用任何其他现有插件来完成这项工作。
此外，[Containerize.com][6]正在以多种语言和框架来增强开源产品的堆栈。有关定期更新，请继续关注[状态页][7]类别，以获取更多有趣的文章。

## 探索
您可能会发现以下链接相关：
  * [最佳开源状态页面系统][8]
  * [Cachet  - 免费和开源状态页面软件][9]
  * [2020年的前5个开源状态页面软件][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
