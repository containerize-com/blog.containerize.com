---
title: "如何使用Botpress为您的业务创建基于AI的常见问题机器人" 
seoTitle: "如何使用Botpress为您的业务创建基于AI的常见问题机器人" 
description: "在此博客文章中，我们将学习如何使用基于AI的常见问题机器人使用Botpress自动化客户查询。" 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "企业需要更好的客户支持平台才能有效解决其查询。在本教程中，我们将学习如何使用Botpress创建基于AI的常见问题机器人" 
url: /zh/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## 企业需要更好的客户支持平台才能有效解决其查询。在本教程中，我们将学习如何使用Botpress创建基于AI的常见问题机器人

{{< figure align=center src="images/botpress-banner.png" alt="使用Botpress为您的业务的常见问题机器人">}}

FAQ自动化包括通过使用聊天机器人回答常见问题来改善客户的在线体验。随着人工智能和机器学习的进步，对基于AI的对话聊天机器人的需求已获得了很多流行和需求。这主要是因为即使业务离线，所有企业也希望增强他们的客户体验。对话聊天机器人使企业成为可能，为客户提供他们想要的始终可用的高点支持。此博客文章的目的是帮助您使用Botpress设置基于AI的常见问题机器人。
在本文中，我们将了解Botpress的NLU模块，以及自然语言理解 /处理如何有效，并可以帮助企业达到高客户满意度。让我们开始吧！
  *** [什么是自然语言处理] [1] **
  *[**确定您的用例**] [2]
  *[**安装botpress **] [3]
  *[**创建一个新的机器人**] [4]
  *[**训练您的问答机器人**] [5]
  *[**结论**] [6]

## 什么是自然语言处理{#nlu}
自然语言处理（NLP）是人工智能的一个分支，可帮助计算机理解，解释和操纵人类语言。 NLP可以帮助计算机用自己的语言与人类交流。并且，计算机可以阅读文本，听到语音，解释，衡量情感。
NLP的基本任务包括令牌化和解析，词干，词性标记，语言检测以及语义关系的识别。
NLU是botpress的模块，它处理每个传入的消息并执行意图分类，语言标识，实体提取和插槽标记。

## 确定您的用例{#case}
如果您想创建一个常见问题AI ChatBot，则需要为您的业务提供用例。为了本教程，我们希望用户提出与产品定价和业务时机有关的任何随机问题。

## 安装botpress {#install}
要安装Botpress，请转到他们的[网站] [7]，单击“免费下载”，然后选择您的平台。对于本教程，我正在使用Mac版本。下载完成后，您可以提取ZIP文件并通过进入正确的文件夹在终端上运行以下命令。
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="botpress开始">}}


## 创建一个新的bot {#create}
现在，我们想通过单击**创建bot **实际创建第一个机器人，然后选择**新bot **。我将将我们的机器人称为常见问题机器人，然后将其称为机器人模板，在单击**创建bot **之前，我将选择**空的机器人**。

{{< figure align=center src="images/create-bot.gif" alt="创建新机器人">}}

现在，我们将在Botpress Studio编辑器中编辑此机器人。

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="botpress在Studio中编辑">}}

现在，在录音室中，您的左侧栏上有许多菜单。但是为了简单起见，我们将坚持问答部分。
单击“问答”图标，添加可能的 /常见问题及其适当的答案。

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress问答">}}


## 训练您的常见问题机器人{#train}
现在完成后，您必须通过单击Q＆A部分右下角的“火车聊天机器人”按钮来训练您的常见问题机器人。

{{< figure align=center src="images/train-bot.gif" alt="Botpress火车机器人">}}

训练完成后，您可以使用内置的仿真器工具测试常见问题机器人。

{{< figure align=center src="images/test-faq-bot.gif" alt="测试您的常见问题机器人">}}

现在，您已经准备好了常见问题机器人，可以通过遵循[官方嵌入] [8] Botpress指南，将此机器人部署在网站上。

## 结论{#conclusion}
在这篇博客文章中，我们了解并了解自然语言处理。我们还通过机器人创建过程获得动手实践。我们培训了一个简单的常见问题机器人，该机器人可以帮助您的客户了解您的业务时间和付款计划。本教程的目的是帮助初学者快速使用Botpress的基于AI的常见问题机器人开始。
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
