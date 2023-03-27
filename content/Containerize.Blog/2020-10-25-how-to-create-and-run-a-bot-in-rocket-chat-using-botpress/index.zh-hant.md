---
title: "如何使用botpress在Rocket.Chat中創建和運行bot" 
seoTitle: "如何使用botpress在Rocket.Chat中創建和運行bot" 
description: "本指南會教您簡單簡便的步驟，即如何使用Botpress創建機器人，並與Rocket.Chat集成。" 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "在本教程中，我們將指導您如何使用botpress創建一個機器人，並與rocket.chat集成" 
url: /zh-hant/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

##在本教程中，我們將指導您如何使用botpress創建一個機器人，並與rocket.chat集成

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="如何使用botpress在Rocket.Chat中創建和運行bot">}}

聊天機器人是旨在模擬人類對話的計算機程序。您可能在零售網站Facebook Messenger上遇到了一個。從技術上講，機器人是旨在執行特定任務的自動化程序。
Rocket.Chat鼓勵聊天機器人和消息自動化集成。因此，擁有全面的文檔來指導您完成機器人製造過程。
在本文中，我們將指導您如何使用Botpress創建機器人。並且，如何用botpress配置rocket.chat。
  * [Rocket.Chat][1]
  * [botpress][2]
  * [在Rocket.Chat中創建一個bot用戶][3]
  * [使用botpress代碼機器人][4]
  * [結論][5]


##＃Rocket.Chat {#rocketchat}

Rocket.Chat是流行的實時聊天軟件之一，部分是開源實時聊天項目。它具有免費的實時聊天版本作為社區版。以及具有私人內部聊天功能的大型公司的付費託管實時聊天版本。此實時聊天應用程序在瀏覽器中運行，但也可以安裝在您自己的服務器上。 [閱讀更多][6]


##＃botpress {#botpress}

對話聊天機器人使企業成為可能的始終提供他們想要的高觸摸支持。 Botpress是具有內置自然語言處理的最受歡迎的開源機器人創建工具之一。 Botpress的NLU技術使其比Botkit，Dialogflow和Microsoft Bot Framework等領域的競爭對手領先。 [閱讀更多][7]


##＃在Rocket.Chat中創建一個bot用戶 {#createbotuser}

為了與您的聊天機器人交談，必須在rompot.chat服務器上預先配置一個用戶帳戶，該器機器人可以登錄。
要創建帳戶，您需要擁有管理特權：
  1.在TopBar中，單擊三個點（選項），然後單擊  **管理**  
  2.從左側欄中選擇  **用戶**  
  3.單擊右側欄中的+`（添加用戶）按鈕
  4.在出現的配置文件窗口中，填寫_name_，_username_，_email_和_password_字段
  5.啟用_verified_在_email _字段下切換
  6.禁用_require密碼更改_ password _字段下的切換
  7.從“添加角色”下拉菜單中選擇“ bot”
  8.禁用_ join默認頻道_和_ send歡迎電子郵件_複選框
  9.單擊_save_
保存後，將在步驟4上使用用戶名和密碼配置該機器人。您可以使用“ Rocketchat \ _user”和“ Rocketchat \ _Password”環境變量，以使用此用戶名和密碼對登錄Rocket.Chat服務器。


##＃使用Botpress編碼機器人 {#codebot}

botpress是一個node.js軟件包，可與節點和npm一起使用。
從botpress開始的最快方法是使用[botpress-kick-starter][8]存儲庫，該存儲庫已經通過[botpress-channel connector][9]集成了rocket.chat。
導航到您想要與機器人一起工作的文件夾，並繼續執行以下步驟：
 **安裝Botpress軟件包** 
```
npm init -y
npm install botpress@10.40.0
```
 **創建一個機器人** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
“ Botpress Init”命令啟動了一個嚮導，該嚮導將幫助您創建初始配置。您應該看到以下內容：
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
 **安裝botpress連接器和機器人依賴關係** 
```
npm install
npm install botpress-channel-rocketchat
```
配置機器人
打開“ config”文件夾，並使用以下內容創建“ channel-rocketchat.json”文件：
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
 **運行機器人** 
```
npm start
```
 **與您的機器人交談** 
在服務器上，作為常規用戶（而不是機器人用戶）登錄，轉到通用房間，然後與您新創建的bot交談。


##＃ 結論 {#conclusion}

在本文中，我們學會瞭如何在Botpress中創建一個機器人。並且，如何用rought.Chat配置它。 Botpress使用戶非常容易構建創新的自動化工作流。並且，與Rocket.Chat的集成使您可以以對話方式控制它們。



 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat
