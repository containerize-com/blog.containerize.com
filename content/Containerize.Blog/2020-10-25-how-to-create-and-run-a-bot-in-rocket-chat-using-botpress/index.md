---
title: How to Create and Run a Bot in Rocket.Chat using Botpress
seoTitle: How to Create and Run a Bot in Rocket.Chat using Botpress
description: This guide teaches you with simple and easy steps that how to create bot using Botpress and it’s integration with Rocket.Chat.
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: In this tutorial, we’ll guide you on how to create a bot using Botpress and it’s integration with Rocket.Chat
url: /how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/

categories: ['Live Chat']

---
## In this tutorial, we’ll guide you on how to create a bot using Botpress and it’s integration with Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="How to Create and Run a Bot in Rocket.Chat using Botpress">}}  

A chatbot is a computer program designed to simulate human conversation. You’ve probably encountered one on Facebook Messenger, a retail website. Technically speaking, bots are automated programs designed to perform a specific task.

Rocket.Chat encourages chatbot and messaging automation integrations. Therefore, has comprehensive documentation to guide you through the bot-making process.

In this article, we’ll guide you through how to create a bot using Botpress. And, how to configure Rocket.Chat with Botpress. 

  * [Rocket.Chat][1]
  * [Botpress][2]
  * [Create a bot user in Rocket.Chat][3]
  * [Code your bot using Botpress][4]
  * [Conclusion][5]

### Rocket.Chat {#rocketchat}

Rocket.Chat is amongst the popular live chat software partly an open source live chat project. It has a free live chat version as a community edition. As well as, a paid hosted live chat version for large companies with private internal chat features. This live chat application runs in the browser but can be installed on your own server as well. [Read More][6]

### Botpress {#botpress}

Conversational chatbots have made this possible for businesses to give their customers the always available high touch support they want. Botpress is one of the most popular open source bot creation tool with built-in natural language processing. Botpress’s NLU technology makes it a step ahead of its competitors in the field like Botkit, Dialogflow, and Microsoft Bot Framework. [Read More][7]

### Create a bot user in Rocket.Chat {#createbotuser}

In order to talk to your chatbot there must be a user account pre-configured on the Rocket.Chat server that the bot can log in to.

To create the account you need to have admin privileges:

  1. In the topbar, click the three dots (Options) and then click **Administration**
  2. Select **Users** from the left sidebar
  3. Click `+` (Add User) button in the right sidebar
  4. In the profile window that appears, fill in _Name_, _Username_, _Email_ and _Password_ fields
  5. Enable _Verified_ toggle under the _Email_ field
  6. Disable _Require password change_ toggle under the _Password_ field
  7. Select `bot` from the `Add Role` dropdown menu and click _Add Role_ button to the right
  8. Disable _Join default channels_ and _Send welcome email_ checkboxes
  9. Click _Save_

Once saved, the bot will be configured with the username and password set on step 4. You can use “ROCKETCHAT\_USER” and “ROCKETCHAT\_PASSWORD” <a>environmental variables</a> to log in to Rocket.Chat server with this username and password pair.

### Code your bot using Botpress {#codebot}

Botpress is a Node.js package and works with Node and npm.

The fastest way to start with Botpress is using [botpress-kick-starter][8] repository that is already integrated with Rocket.Chat via [botpress-channel connector][9].

Navigate to the folder where you want to work with the bot and proceed with the following steps:

**Install botpress package**


```
npm init -y
npm install botpress@10.40.0
```


**Create a bot**


```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```


“botpress init” command launches a wizard that will help you create the initial configuration. You should see something as follows:


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


**Install botpress connector and bot dependencies**


```
npm install
npm install botpress-channel-rocketchat
```


configure the bot

Open “config” folder and create “channel-rocketchat.json” file with the following content:


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


**Run the bot**


```
npm start
```


**Talk to your bot**

On the server, login as a regular user (not the BOT user), go to general room, and talk to your newly created bot.

### Conclusion {#conclusion}

In this article, we have learned how to create a bot in Botpress. And, how to configure it with Rocket.Chat. Botpress makes it very easy for users to build innovative automated workflows. And, integration with Rocket.Chat allows you to control them in a conversational manner.

 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat