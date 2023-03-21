---
title: "Webサイトでライブチャットソフトウェアをセットアップする方法| Rocket.chat" 
seoTitle: "Webサイトでライブチャットソフトウェアをセットアップする方法| Rocket.chat" 
description: "Rocket.chatはセットアップが簡単で、チームや顧客が効率的にコミュニケーションをとるのに役立ちます。このライブチャットソフトウェアは、オープンソース、クロスプラットフォーム、自己ホストです。" 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "ライブチャットサポートソフトウェアは、カスタマーサポートを提供する上で利便性と効率をもたらします。 Rocket.chatをビジネスウェブサイトにインストールする方法を学びましょう。" 
url: /ja/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## ライブチャットサポートソフトウェアは、カスタマーサポートを提供する上で利便性と効率をもたらします。 Rocket.chatをビジネスWebサイトにインストールする方法を学びましょう。

{{< figure align=center src="images/rocketchat-1.png" alt="ライブチャットソフトウェア">}}


## 概要
[Webサイト用の上位5つの無料カスタマーサポートチャットソフトウェア][1]、[WordPress Instantメッセージングを使用したWordPressインスタントメッセージング][2]など、オープンソースのライブチャットソフトウェアに関連するいくつかのブログ投稿を公開しています。このブログ投稿では、トップの主要なカスタマーサポートソフトウェアRocket.chatを通過します。オンライントラフィックが大幅に増加するにつれて、企業は時間通りに多くの問い合わせを楽しませるのが難しいと感じています。訪問者はあなたのサイトに来て、製品またはサービスに関連するいくつかの情報を取得する傾向があり、応答がない場合にサイトを離れます。したがって、ライブチャットサポートは、顧客があなたのウェブサイトを通過している間、顧客に積極的に挨拶するのに役立ちます。または、購入決定を下すために何らかの助けと説明が必要な場合。
ライブチャットサポートは、訪問者を顧客に変換する可能性を高めます。オープンソース**ライブチャットサポートソフトワール** eがたくさんあります。しかし、Rocket.chatはその機能のために多くの魅力を獲得しています。また、SlackやMicrosoftチームなど、業界をリードするチャットソフトウェアの代替として扱われています。この記事では、サーバーにrocket.chatをインストールする方法と、ウェブサイトでそれを構成する方法を学びます。それでは、次のポイントをカバーして始めましょう。
  *[**Rocket.cha**  t？][3]
  *** [rocket.chat？]をインストールする方法
  ***[ライブチャット機能を有効にする][5]** 
  ***[ウェブサイトにライブチャットウィジェットをインストール][6]** 
  ***[結論][7]** 

## rocket.chatとは {#intro}
[Rocket.chat][8]は、人気のある**ライブチャットソフトウェア**の1つです。コミュニティエディションとして無料のライブチャットバージョンと、プライベート内部チャット機能を備えた大企業向けの有料ホストライブチャットバージョンがあります。 Rocket.chatは、チームチャット機能とともにライブチャットカスタマーサポートをサポートしています。クロスプラットフォームであり、Windows、Mac、Linux、モバイルアプリなど、ほぼすべての人気のあるプラットフォームもサポートしています。この**カスタマーサポートソフトウェア**は安全で拡張可能であり、Trello、Google Driveなどのサードパーティの人気アプリとの統合を提供します。複数の部屋、プライベートチャットルームとグループ、通知、絵文字、LDAP認証、Restfulインターフェイスなど、Rocket.Chatが提供する多くの強力な機能があります。さらに、この無料ツールは展開が簡単で、自己ホスティング機能が備わっています。さらに、ユーザーがダーク、ライト、ブラックなどのテーマを変更できる論理的でユーザーフレンドリーなインターフェイスを提供します。
この**チャットサポートソフトウェア**はJavaScriptで記述されています。すべてのドキュメントは、開発と展開に関して入手できます。したがって、[github][9]のすべてのソースコードを見つけることができます。詳細については、Rocket.Chat [こちら][10]について読むことができます。

## rocket.chatをインストールする方法 {#install}
したがって、Rocket.Chatとは何かを知っており、このセクションでは、このライブチャットソフトウェアをインストールする方法を学びます。 Ubuntu Snaps、DockerHubなど、さまざまな市場からRocket.chatをインストールするか、独自のサーバーにインストールできます。この記事では、Ubuntuのスナップを介してRocket.chatのインストールに焦点を当てます。これは、インストールの最速方法です。
スナップは安全です。 Rocket.chatおよびそのすべての依存関係は、システムの残りの部分から分離されています。新しいリリースがある場合、スナップも自動アップデートします。
最初にubuntuで、次のコマンドでスナップをインストールします
```
sudo apt-get install snapd
```
次に、Snapコマンドを介してRocket.chatサーバーをインストールします。
```
sudo snap install rocketchat-server
```
スナップはすでに稼働しています。 http：// localhost：3000を閲覧し、rocket.chatをセットアップします。 nginxプロキシを構成して、rocket.chatインスタンスをドメインにマッピングできます。

## ライブチャット機能を有効にする {#Enable}
Rocket.chatソフトウェアがインストールされ、構成されたら、次のステップは機能を有効にすることです。ブログ投稿のこのセクションでは、Webサイトで**チャットサポートソフトウェア**を有効にする方法について説明します。 Rocket.chatインスタンスでLiveChat機能を有効にするには：
1. **管理**に移動します

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.chat管理">}}

2.「**omnichannel **」で「** 設定**」を検索し、有効にします。

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat検索Omini">}}

有効になると、管理者は、左上コーナードロップダウンメニューにあるオムニチャネルと呼ばれる新しいメニューを介して、オムニチャネルパネル設定にアクセスできます。

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Ominiチャンネル">}}

そして、ライブチャットウィジェットのルックアンドフィールを構成します

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat LiveChatウィジェット">}}


##  **Webサイトにライブチャットウィジェットをインストール** {#Widget}
このセクションでは、ビジネスWebサイトにライブチャットウィジェットをインストールします。ここで、 **liveChatインストール** 設定にアクセスするには：
以下に示すように、Omnichannelパネル設定の **liveChatインストール** に移動し、指定されたコードをコピーします。

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Rocket.chatウィジェット">}}

また、サイトの最後のタグの上にこのコードを貼り付けます。ライブチャットウィジェットは、Webページの右下隅に表示されます。ライブチャット構成に従って以下に示すように。
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="ライブチャットソフトウェア">}}

{{_LINE_48_}}

## 結論 {#conclusion}
これにより、このブログ投稿の最後になります。この記事では、Rocket.Chat、Rocket.Chatのインストール方法を説明しました。また、Ubuntu Snapsを介して自分のサーバーにインストールする方法も示しました。また、ライブチャット機能を有効にし、ウェブサイトにウィジェットをインストールする方法も学びました。さらに、**カスタマーサポートソフトウェア**は、上記で説明した特定の要因により、あらゆるビジネスWebサイトの必須コンポーネントになりました。ただし、このブログ投稿は、ビジネスWebサイトにオープンソースのライブチャットソフトウェアを展開しようとしている場合に本当に役立ちます。さらに、他の多くの**チャットサポートソフトウェア**＆記事があります。以下の「探索」セクションには、チェックアウトできます。
最後に、[**containerize.com **][11]は、さらなるオープンソースに関する記事を書いています** オープンソースチャットアプリ。**定期的な更新については、[ライブチャット][12]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook][13]、[LinkedIn][14]、および[Twitter][15]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [Zulip][16]
  * [lets-chat][17]
  * [botpress][18]
  * [botpressを使用してあなたのビジネスのためにAIベースのFAQボットを作成する方法][19]
  * [ウェブサイトのためのトップ5無料のカスタマーサポートチャットソフトウェア][1]
  * [Rocket.chatを使用したWordPressインスタントメッセージング][2]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][20]
  * [botpressを使用してrocket.chatでボットを作成して実行する方法][21]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][20]

  
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
