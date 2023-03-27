---
title: "如何在phplist中设置和处理弹跳" 
seoTitle: "如何在phplist中设置和处理弹跳" 
description: "Phplist是强大的自托管邮件列表和新闻通讯经理。它可以帮助企业轻松发送新闻通讯活动并轻松弹跳。" 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "使用开源通讯和电子邮件营销软件发送广告系列。 phplist中的设置弹跳管理和自动化弹跳处理以获取健康邮件列表。" 
url: /zh/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## 发送带有开源新闻和电子邮件营销软件的广告系列。 phplist中的设置弹跳管理和自动化弹跳处理以获取健康邮件列表。

{{< figure align=center src="images/phplist-2.png" alt="过程弹跳phplist">}}

我们撰写了用于实施[多租户][1]和[发送新闻通讯活动][2]的文章。在本文中，我们将详细介绍有关PHPLIST中的过程弹跳的要点。
  * [什么是phplist？][3]
  * [什么是弹跳？][4]
  * [设置反弹管理][5]
  * [如何处理弹跳？][6]
  * [结论][7]

## 什么是phplist？ {#phplist}

Phplist是最受欢迎的免费和开源新闻通讯发送软件。 Phplist使企业能够向订户发送营销电子邮件，产品更新和公告。它可以帮助企业管理上市，设计精美的新闻通讯，计划活动和弹跳管理。 [阅读更多][8]

## 什么是弹跳？ {#bounce}

弹跳是一条电子邮件，由于许多原因而无法传递并返回发件人。我们可能有邮箱已满的原因，电子邮件地址不再有效或不正确的电子邮件地址。因此，您必须处理弹跳，以免将电子邮件发送到无效的电子邮件地址。

## 设置反弹管理 {#setup}

为了设置弹跳管理，您需要在config.php文件中配置以下设置。

{{< figure align=center src="images/bounce-handling-phplist.png" alt="phplist-弹​​跳处理管理">}}

我们将在以下步骤中解释有关这些配置的更多信息。
* 首先，您需要添加要接收弹跳消息的电子邮件地址。您可以找到 **Message_envelope** 变量并添加您的电子邮件地址。
* phplist可以通过两个协议（ **Mbox和pop3**）从弹跳邮箱中获取电子邮件。因此，找到**bounce_protocol** 变量并根据您的环境更改它。
* 如果您设置了 **mbox**prototcol，则需要为其定义文件格式。因此，查找**bounce_mailbox** 并设置路径，例如“/var/spool/mail/listBounces”。
* 如果您已经使用了 **POP3**协议，则需要配置**主机，用户名和密码** 邮箱。您可以在上面的Sreenshot中看到这些设置。
* 除了上述 **POP3** 协议的设置外，您可能需要添加端口和加密。

## 如何处理弹跳？ {#process}

phplist支持两种用于过程弹跳的方法：手动和自动化。您将不得不创建CRON作业以自动化反弹处理。您也可以通过访问 **系统>流程弹跳**页面手动处理弹跳。因此，首先，您需要根据您的要求手动更改**手动\ _Process \ _bounces** 设置。您可以访问[phplist文档][9]来设置cron作业以进行弹跳。

## 结论 {#conclusion}

在这篇文章中，我们学会了如何配置弹跳电子邮件地址和过程弹跳。如果您的订户量较少，则可以轻松地使用手动方法处理弹跳。但是，您必须将自动弹跳处理过程用于大列表。它将节省您的时间，并帮助您创建干净有效的订户列表。



[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
