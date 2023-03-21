---
title: "如何使用phplist创建和发送新闻通讯" 
seoTitle: "如何使用phplist创建和发送新闻通讯" 
description: "Phplist是用于电子邮件营销的领先的开源通讯软件。这是创建和发送新闻通讯活动的初学者指南。" 
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: "使用开源phplist创建和发送新闻通讯，并触及数百万订户。通过产品更新，促销和新功能来增强客户的参与度。" 
url: /zh/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']
---

## 使用开源phplist创建和发送新闻通讯，并触及数百万订户。通过产品更新，促销和新功能来增强客户的参与度。

{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="使用phplist创建并发送新闻通讯">}}

营销是任何在线或离线业务的重要组成部分。电子邮件营销是最简单的营销工具之一，并向大量受众传达信息。您可以手动向几百个订户发送电子邮件，但很难向数千甚至数百万的电子邮件发送电子邮件。因此，有很多开源电子邮件营销工具可以自动化它。
Phplist是用于管理列表和新闻通讯的最受欢迎的开源软件。该广告系列是Phplist的核心组成部分，使您可以将消息传递到一个或多个列表中。您可以轻松地将其用于设计和发送广告系列，向数百万订户进行广告系列。 Phplist提出了令人印象深刻的功能集，例如广告系列和列表经理，插件，REST API等。
在这篇博客文章中，我们将专注于phplist设计和发送电子邮件活动。我们将介绍以下主题。
  * [创建新闻通讯/广告系列][2]
  * [调度活动][3]
  * [分配列表到广告系列][4]
  * [终结运动][5]
  * [进程队列][6]
  * [结论][7]

## **创建广告系列/新闻**   {#create}
  *登录到您的phplist安装的管理接口。单击**启动或继续活动**仪表板上的按钮，或在左侧导航中的广告系列下发送活动链接。
  *单击“开始新的广告系列”按钮。
  *如下图所示，将字段填充诸如主题，线，内容和页脚等选项。

{{< figure align=center src="images/create-campaign.png" alt="phplist的设计新闻通讯">}}


## **调度活动**   {#schedule}
  *调度允许您在要启动广告系列时选择日期。广告系列将不会在选定日期之前/之后发送。
  *如果您想立即发送广告系列，则无需更改日期。

{{< figure align=center src="images/scheduling.png" alt="安排phplist的新闻通讯">}}


## **将列表分配给广告系列**   {#list}
所有列表将在列表选项卡下显示，选择适当的列表。广告系列将仅分配列表。但是，在创建/更新列表时，您可以将列表公开或私有。

{{< figure align=center src="images/lists.png" alt="将列表分配给Phplist的新闻通讯">}}


## **完成活动**   {#finish}
完成是广告系列创建过程的最后一步。您可以添加电子邮件以进行通知，添加Google Analytics（分析）跟踪代码。单击**发送活动**按钮以开始向订户发送消息。现在，您已经完成了新闻通讯设计和广告系列过程。但是，您需要处理队列，并且可以在下一节中阅读有关它的更多信息。

## **处理队列**   {#queue}
流程队列是开始发送活动的过程。您可以使用命令行脚本手动启动进程或创建CRON作业。对于几个猎人的订户，手动处理队列很容易。但是，如果您有成千上万/数百万的订阅者，则最好将Cron Job进行排队。您可以访问Phplist官方[网站][8]以获取信息以创建Cron作业。

## **结论**   {#conclusion}
Phplist是想要使用开源新闻通讯软件进行电子邮件营销的企业的理想工具。我们已经详细描述了设计和发送广告系列的过程。您可以为下一个新闻通讯遵循它，并享受phplist的真正力量。
最后，有了一些更引人入胜的教程，[Containerize.com][9]都可以增强其教程基础。有关定期更新，请与[新闻通讯][10]类别保持联系。

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #create
[3]: #schedule
[4]: #list
[5]: #finish
[6]: #queue
[7]: #conclusion
[8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/newsletter/
