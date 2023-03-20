---
title: "如何使用botpress在Rocket.Chat中创建和运行bot" 
seoTitle: "如何使用botpress在Rocket.Chat中创建和运行bot" 
description: "本指南会教您简单简便的步骤，即如何使用Botpress创建机器人，并与Rocket.Chat集成。" 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "在本教程中，我们将指导您如何使用botpress创建一个机器人，并与rocket.chat集成" 
url: /zh/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## 在本教程中，我们将指导您如何使用botpress创建一个机器人，并与rocket.chat集成

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="如何使用botpress在Rocket.Chat中创建和运行bot">}}

聊天机器人是旨在模拟人类对话的计算机程序。您可能在零售网站Facebook Messenger上遇到了一个。从技术上讲，机器人是旨在执行特定任务的自动化程序。
Rocket.Chat鼓励聊天机器人和消息自动化集成。因此，拥有全面的文档来指导您完成机器人制造过程。
在本文中，我们将指导您如何使用Botpress创建机器人。并且，如何用botpress配置rocket.chat。
  * [Rocket.Chat][1]
  * [botpress][2]
  * [在Rocket.Chat中创建一个bot用户][3]
  * [使用botpress代码机器人][4]
  * [结论][5]

### Rocket.Chat {#rocketchat}
Rocket.Chat是流行的实时聊天软件之一，部分是开源实时聊天项目。它具有免费的实时聊天版本作为社区版。以及具有私人内部聊天功能的大型公司的付费托管实时聊天版本。此实时聊天应用程序在浏览器中运行，但也可以安装在您自己的服务器上。 [阅读更多][6]

### botpress {#botpress}
对话聊天机器人使企业成为可能的始终提供他们想要的高触摸支持。 Botpress是具有内置自然语言处理的最受欢迎的开源机器人创建工具之一。 Botpress的NLU技术使其比Botkit，Dialogflow和Microsoft Bot Framework等领域的竞争对手领先。 [阅读更多][7]

### 在Rocket.Chat {#createbotuser}中创建一个bot用户
为了与您的聊天机器人交谈，必须在rompot.chat服务器上预先配置一个用户帐户，该器机器人可以登录。
要创建帐户，您需要拥有管理特权：
  1.在TopBar中，单击三个点（选项），然后单击**管理**
  2.从左侧栏中选择**用户**
  3.单击右侧栏中的+`（添加用户）按钮
  4.在出现的配置文件窗口中，填写_name_，_username_，_email_和_password_字段
  5.启用_verified_在_email _字段下切换
  6.禁用_require密码更改_ password _字段下的切换
  7.从“添加角色”下拉菜单中选择“ bot”
  8.禁用_join默认频道_和_ send欢迎电子邮件_复选框
  9.单击_save _
保存后，将使用步骤4的用户名和密码配置该机器人。您可以使用“ Rocketchat \ _user”和“ Rocketchat \ _Password”环境变量，以使用此用户名和密码对登录Rocket.Chat服务器。

### 使用botpress {#codebot}代码机器人代码
botpress是一个node.js软件包，可与节点和npm一起使用。
从botpress开始的最快方法是使用[botpress-kick-starter][8]存储库，该存储库已经通过[botpress-channel connector][9]集成了rocket.chat。
导航到您想要与机器人一起工作的文件夹，并继续执行以下步骤：
**安装Botpress软件包**
```
npm init -y
npm install botpress@10.40.0
```
**创建一个机器人**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
“ Botpress Init”命令启动了一个向导，该向导将帮助您创建初始配置。您应该看到以下内容：
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
**安装botpress连接器和机器人依赖关系**
```
npm install
npm install botpress-channel-rocketchat
```
配置机器人
打开“ config”文件夹并创建具有以下内容的“ channel-rocketchat.json”文件：
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
**运行机器人**
```
npm start
```
**与您的机器人交谈**
在服务器上，作为常规用户（不是机器人用户）登录，转到通用房间，然后与您新创建的bot交谈。

### 结论{#conclusion}
在本文中，我们学会了如何在Botpress中创建一个机器人。并且，如何用rought.Chat配置它。 Botpress使用户非常容易构建创新的自动化工作流。并且，与Rocket.Chat的集成使您可以以对话方式控制它们。

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
