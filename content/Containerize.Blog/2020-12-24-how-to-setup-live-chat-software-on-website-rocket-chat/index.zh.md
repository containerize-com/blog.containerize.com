---
title: "如何在网站上设置实时聊天软件|火箭" 
seoTitle: "如何在网站上设置实时聊天软件|火箭" 
description: "Rocket.Chat易于设置，帮助团队和客户进行有效的沟通。该实时聊天软件是开源，跨平台和自托管的。" 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "实时聊天支持软件为提供客户支持带来便利和效率。让我们学习如何在您的业务网站上安装Rocket.Chat。" 
url: /zh/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## 实时聊天支持软件在提供客户支持方面带来了便利和效率。让我们学习如何在您的业务网站上安装Rocket.Chat。

{{< figure align=center src="images/rocketchat-1.png" alt="实时聊天软件">}}


## 概述
我们已经发布了一些与开源实时聊天软件相关的博客文章，例如[网站上的前5个免费客户支持聊天软件][1]，[使用rocket.chat.chat][2]等[WordPress即时消息传递，等等。在这篇博客文章中，我们将浏览最高领先的客户支持软件Rocket.Chat。随着在线流量的巨大增加，企业发现很难按时进行大量查询。访问者来您的网站，倾向于获取与产品或服务有关的一些信息，并在没有收到响应的情况下离开您的网站。因此，实时聊天支持可以帮助您在客户浏览您的网站时积极地向客户致意。或者，如果他们需要一些帮助和澄清来做出购买决定。
实时聊天支持会增加您将访客转换为客户的机会。有很多开源**实时聊天支持软件**可用。但是，Rocket.Chat由于其特征而获得了很多吸引力。它被视为Slack和Microsoft Team等行业领先的聊天软件的替代方法。在本文中，我们将学习如何在服务器上安装Rocket.Chat，然后如何在您的网站上进行配置。因此，让我们开始介绍以下几点。
  *[**什么是Rocket.cha ** t？][3]
  *** [如何安装Rocket.Chat？iptrace [4]
  ***[启用实时聊天功能][5]** 
  ***[在您的网站上安装实时聊天小部件][6]** 
  ***[结论][7]** 

## what是rocket.chat   {#intro}
[Rocket.Chat][8]是流行的**实时聊天软件之一。它具有免费的实时聊天版本，作为社区版，以及具有私人内部聊天功能的大型公司的付费托管实时聊天版本。 Rocket.Chat支持实时聊天客户支持以及团队聊天功能。它是跨平台，并为几乎所有流行的平台（例如Windows，Mac，Linux和移动应用程序）提供了支持。这个**客户支持软件**是安全的，可扩展的，并与第三方流行应用程序（例如Trello，Google Drive等）提供了集成。 Rocket提供了许多强大的功能。Chat提供了多个房间，私人聊天室和团体，通知，表情符号，LDAP身份验证和RESTFUL界面。此外，此免费工具易于部署，并具有自托管功能。此外，它提供了一个逻辑且用户友好的界面，用户可以在其中修改黑暗，光或黑色等主题。
此**聊天支持软件**用JavaScript编写，所有文档均可用于开发和部署。因此，您可以在[github][9]上找到所有源代码。有关更多详细信息，您可以阅读有关Rocket.Chat [此处][10]的信息。

## 如何安装Rocket.Chat   {#install}
因此，我们知道什么是Rocket.Chat，在本节中，我们将学习如何安装此实时聊天软件。您可以从各种市场上安装Rocket.Chat，例如Ubuntu快照，Dockerhub，或将其安装在您自己的服务器上。在本文中，我们将重点介绍Rocket.Chat通过Ubuntu上的快照的安装。这是最快的安装方法。
快照是安全的。 Rocket.Chat及其所有依赖项都与您的其余部分隔离。当有新版本时，快照也会自动更新。
首先，在Ubuntu上，安装以下命令安装snap
```
sudo apt-get install snapd
```
然后通过sn​​ap命令安装rocket.chat服务器。
```
sudo snap install rocketchat-server
```
快照已经启动并运行。浏览到http：// localhost：3000并设置Rocket.Chat。您可以将NGINX代理配置为rocket.chat实例与您的域。

## 启用实时聊天功能 {#enable}
一旦Rocket.Chat软件安装和配置，下一步就是启用其功能。博客文章的这一部分介绍了如何在您的网站上启用**聊天支持软件**。要启用Rocket.Chat实例上的LiveChat功能：
1.去**管理**

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat管理">}}

2.在**设置**中搜索“ **OmnichAnnel** ”并启用它。

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat搜索Amini">}}

启用后，管理员将可以在左上角下拉菜单上通过称为Omnichannel的新菜单访问Omnichannel面板设置。

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini频道">}}

然后配置实时聊天小部件的外观和感觉

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat Livechat小部件">}}


## **在您的网站上安装实时聊天小部件**   {#widget}
在本节中，我们将在业务网站上安装实时聊天小部件。现在，要访问 **livechat安装** 设置：
转到全渠道面板设置中的LiveChat安装**，如下所示，并复制给定的代码。

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="火箭。chat小部件">}}

并且，将此代码粘贴在您网站上的最后一个标签之上；实时聊天小部件将出现在网页的右下角。如下所示，根据您的实时聊天配置。
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="实时聊天软件">}}

{{_LINE_48_}}

## 结论 {#conclusion}
这使我们进入了此博客文章的结尾。在本文中，我们已经浏览了Rocket.Chat，如何安装Rocket.Chat，我们还向您展示了如何通过Ubuntu Snaps在自己的服务器上安装它。我们还学会了如何启用实时聊天功能并在您的网站上安装小部件。此外，由于我们上面讨论的某些因素，**客户支持软件**已成为任何业务网站的必备部分。但是，如果您希望在您的业务网站上部署开源实时聊天软件，那么这篇博客文章确实会为您提供帮助。此外，您可以在下面的“探索”部分中提供了许多其他**聊天支持软件**和文章，您可以查看。
最后，[**containerize.com **][11]是在进一步的开源** 开源聊天应用程序上撰写文章。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][13]，[LinkedIn][14]和[Twitter][15]。

## 探索
您可能会发现以下链接相关。
  * [Zulip][16]
  * [Lets-Chat][17]
  * [botpress][18]
  * [如何使用Botpress为您的业务创建基于AI的FAQ机器人][19]
  * [网站的前5个免费客户支持聊天软件][1]
  * [WordPress使用Rocket.Chat即时消息][2]
  * [使用免费和开源软件自动化业务运营][20]
  * [如何使用botpress在Rocket.Chat中创建和运行一个bot][21]
  * [使用免费和开源软件自动化业务运营][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
