---
title: "botpressを使用してrocket.chatでボットを作成して実行する方法" 
seoTitle: "botpressを使用してrocket.chatでボットを作成して実行する方法" 
description: "このガイドは、Botpressを使用してボットを作成する方法とRocket.chatとの統合をシンプルで簡単な手順で教えてくれます。" 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "このチュートリアルでは、botpressを使用してボットを作成する方法と、Rocket.chatとの統合について説明します。" 
url: /ja/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## このチュートリアルでは、botpressを使用してボットを作成する方法とrocket.chatとの統合について紹介します。

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="botpressを使用してrocket.chatでボットを作成して実行する方法">}}

チャットボットは、人間の会話をシミュレートするために設計されたコンピュータープログラムです。おそらく、小売WebサイトであるFacebook Messengerで遭遇したでしょう。技術的に言えば、ボットは特定のタスクを実行するように設計された自動化されたプログラムです。
Rocket.chatは、チャットボットとメッセージングの自動化統合を奨励しています。したがって、ボット製造プロセスをガイドするための包括的なドキュメントがあります。
この記事では、botpressを使用してボットを作成する方法をご案内します。そして、BotpressでRocket.chatを構成する方法。
  * [Rocket.chat][1]
  * [botpress][2]
  * [Rocket.chat][3]でボットユーザーを作成する
  * [ボットプレスを使用してボットをコード][4]
  * [結論][5]

### Rocket.Chat {#Rocketchat}
Rocket.chatは、人気のあるライブチャットソフトウェアの一部であり、一部はオープンソースのライブチャットプロジェクトです。コミュニティエディションとして無料のライブチャットバージョンがあります。同様に、プライベート内部チャット機能を備えた大企業向けの有料のホストライブチャットバージョン。このライブチャットアプリケーションはブラウザで実行されますが、独自のサーバーにもインストールできます。 [続きを読む][6]

### botpress {#botpress}
会話のチャットボットにより、企業は顧客に常に利用可能なハイタッチサポートを提供できるようになりました。 Botpressは、自然言語処理が組み込まれた最も人気のあるオープンソースボット作成ツールの1つです。 BotpressのNLUテクノロジーは、Botkit、Dialogflow、Microsoft Bot Frameworkなどの分野での競合他社よりも一歩進んでいます。 [続きを読む][7]

### rocket.chat {#createbotuser}でボットユーザーを作成します
チャットボットに相談するには、ボットがログインできるRocket.chatサーバーに事前に構成されたユーザーアカウントが必要です。
アカウントを作成するには、管理者特権を持つ必要があります。
  1.トップバーで、3つのドット（オプション）をクリックしてから[管理] **をクリックします**
  2.左側のサイドバーから**ユーザー**を選択します
  3.右側のサイドバーの[ユーザーの追加]ボタンをクリックします
  4.表示されるプロファイルウィンドウで、_name_、_username_、_email_、_password_フィールドに記入します
  5. _email_フィールドの下で_verified_トグルを有効にします
  6. _password_フィールドの下で_ Requireパスワードchange _トグル
  7. [ロールの追加]メニューから[ボット]を選択し、右側の[_add role_ボタン]ボタンをクリックします
  8. _join default channels_および_sendを無効にすること
  9. _save_をクリックします
保存すると、ボットはステップ4に設定されたユーザー名とパスワードで構成されます。「Rocketchat \ _user」および「Rocketchat \ _Password」環境変数を使用して、このユーザー名とパスワードペアでRocket.chatサーバーにログインします。

### botpressを使用してボットをコードします{#codebot}
botpressはnode.jsパッケージであり、ノードとnpmで動作します。
ボットプレスから始める最速の方法は、[botpress-kick-starter][8]リポジトリを使用することです。
ボットで作業するフォルダーに移動し、次の手順を進めます。
**ボットプレスパッケージをインストール**
```
npm init -y
npm install botpress@10.40.0
```
**ボットを作成**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
「Botpress init」コマンドは、初期構成を作成するのに役立つウィザードを起動します。次のようなものが表示されます。
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
**ボットプレスコネクタとボット依存関係**
```
npm install
npm install botpress-channel-rocketchat
```
ボットを構成します
「構成」フォルダーを開き、次のコンテンツで「Channel-Rocketchat.json」ファイルを作成します。
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
**ボットを実行**
```
npm start
```
**あなたのボットと話す**
サーバーでは、通常のユーザー（ボットユーザーではなく）としてログインし、一般的な部屋に移動し、新しく作成したボットに相談してください。

### 結論{#conclusion}
この記事では、ボットプレスでボットを作成する方法を学びました。そして、Rocket.chatでそれを構成する方法。 BotPressにより、ユーザーは革新的な自動化されたワークフローを簡単に作成できます。また、Rocket.Chatとの統合により、会話的な方法でそれらを制御できます。

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
