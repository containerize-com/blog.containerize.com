---
title: "设置phplist中的高级反弹管理和反弹规则" 
seoTitle: "设置phplist中的高级反弹管理和反弹规则" 
description: "在phplist中启用高级弹跳管理，并处理弹跳电子邮件。创建反弹规则并自动化过程，以对返回的消息采取各种操作。" 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "根据MTA返回的弹跳错误代码类型，高级反弹管理允许自动执行不同的操作。" 
url: /zh/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## 根据MTA返回的弹跳错误代码类型，高级弹跳管理允许自动执行不同的操作。

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="设置phplist中的高级反弹管理和反弹规则">}}

在我们的[先前][1]教程中，我们已经解决了  **phplist弹跳处理** 。如果您不熟悉Bounce处理，则可以阅读它。您可以使用Bounce处理下载未传递的电子邮件将其下载到您的phplist项目。您如何处理下载的电子邮件？不知道，让我们看一下预先反弹管理，使您可以整理 **弹跳电子邮件**  。每个返回的电子邮件都有MTA（邮件传输代理）返回的错误代码。此外，您可以查看返回的消息电子邮件头，其中包含沿错误代码的所有信息。
  * [启用高级反弹处理][2]
  * [添加弹跳规则][3]
  * [列表弹跳规则][4]
  * [结论][5]

## 启用高级弹跳处理 {#Enable}

首先，首先，通过在config.php文件中复制下面的代码来启用高级  **弹跳处理**  。
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
之后，导航到  **系统>管理弹跳>列表弹跳规则**  用于创建弹跳规则。
您可以根据正则表达式创建弹跳规则。您可以找到为什么  **电子邮件弹回**  的原因，然后将其用于正则表达式。此外，根据错误代码或正则表达式选择适当的操作。 Phplist支持以下操作。行动声明是自我解释的，因此我们不需要详细介绍。
* 删除订户
* 未经证实的订户
* 黑名单订户
* 黑名单电子邮件地址
* 删除订户并弹跳
* 未经确定的订户并删除弹跳
* 将订阅者添加到do-non-not列表中并删除弹跳
* 将电子邮件地址添加到do-non-not列表中并删除弹跳
* 删除反弹

## 添加弹跳规则 {#Add}

让我们创建我们的第一个反弹规则。
* 首先，输入正则表达式（如  **）（帐户已被暂停|不可用的帐户）**  
* 之后，选择适当的动作
* 最后，为规则添加注释/备忘录

{{< figure align=center src="images/add-bounce-rule.png" alt="在phplist中创建弹跳规则">}}

您可以出于以下原因添加反弹规则，并选择适当的操作来处理弹跳。但是，您可以搜索SMTP响应并在列表中添加更多规则。
* 存档的收件人
  * type = mx：找不到主机
  * 抱歉，没有那个名字的邮箱
* 禁用邮箱
  * 帐户已被禁用
* 由于不活动而阻止了此邮箱
  * 用户未知
* 没有这样的收件人
  * 等等 …
 **注意:**  您必须在括号中包裹弹跳原因，并使用管道符号 **|**或**  或**语句，如果您想在一个弹跳规则中添加多个原因。

## 列出反弹规则 {#List}

创建数量的规则后，您的  **弹跳规则**  列表将如下屏幕截图所示。您可以在此页面上执行其他操作，例如订单更改和删除。

{{< figure align=center src="images/bounce-regular-expressions.png" alt="弹跳规则清单">}}


## 结论 {#结论}

在本教程中，我们了解了Advanced  **Bounce Management**  ，并制定了必要的弹跳规则。允许使用此功能将是很棒的，以便您可以自动化清除列表中的无效电子邮件地址的过程。它还允许您维护最低返回电子邮件的水平。此外，您的列表将具有合法的订户。
此外，[Containerize.com][6]正在以多种语言和框架来增强开源产品的堆栈。有关定期更新，请继续关注[新闻通讯][7]类别，以获取更多有趣的文章。

## 探索
您可能会发现以下链接相关：
  * [PHPLIST  - 开源通讯和电子邮件营销软件][8]
  * [如何使用phplist创建和发送新闻通讯][9]
  * [如何在phplist中设置和处理弹跳][1]
  * [开发Phplist插件的初学者指南][10]



 [1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
 [2]: #Enable
 [3]: #Add
 [4]: #List
 [5]: #Conclusion
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/newsletter/
 [8]: https://products.containerize.com/newsletter/phplist
 [9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
 [10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
