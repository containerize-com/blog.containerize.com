---
title: "botpressを使用してあなたのビジネスのためにAIベースのFAQボットを作成する方法" 
seoTitle: "botpressを使用してあなたのビジネスのためにAIベースのFAQボットを作成する方法" 
description: "このブログ投稿では、WebサイトでBoTpressを使用してAIベースのFAQボットを使用して顧客クエリを自動化する方法を学びます。" 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "企業は、クエリを効率的に解決するために、より良いカスタマーサポートプラットフォームを必要としています。このチュートリアルでは、botpressを使用してAIベースのFAQボットを作成する方法を学びます" 
url: /ja/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## 企業は、クエリを効率的に解決するために、より良いカスタマーサポートプラットフォームを必要としています。このチュートリアルでは、botpressを使用してAIベースのFAQボットを作成する方法を学びます

{{< figure align=center src="images/botpress-banner.png" alt="Botpressを使用したビジネスのFAQボット">}}

FAQオートメーションは、チャットボットを使用してよくある質問に答えることにより、クライアントのエクスペリエンスをオンラインで改善することで構成されています。人工知能と機械学習の進歩により、AIベースの会話チャットボットの需要は多くの人気と需要を獲得しています。そして、これは主に、ビジネスがオフラインであっても、すべてのビジネスが顧客体験を強化したいと考えているからです。会話のチャットボットにより、企業は顧客に常に利用可能なハイタッチサポートを提供することができました。このブログ投稿の目的は、BoTpressを使用してAIベースのFAQボットをセットアップするのに役立つことです。
この記事では、ボットプレスのNLUモジュールと、自然言語の理解 /処理がどのように機能するかについて学び、企業が高い顧客満足度を達成するのに役立ちます。始めましょう！
* **[自然言語処理とは][1]** 
* [ **ユースケースを決定** ][2]
* [ **botpress** ][3]をインストールする
* [ **新しいボットを作成** ][4]
* [ **Q＆Aボットをトレーニング** ][5]
* [ **結論** ][6]

## 自然言語処理とは何ですか {#nlu}

自然言語処理（NLP）は、コンピューターが人間の言語の理解、解釈、操作を支援する人工知能の分野です。 NLPは、コンピューターが自分の言語で人間と通信するのを支援します。そして、コンピューターがテキストを読み、スピーチを聞き、それを解釈し、感情を測定することを可能にします。
NLPの基本的なタスクには、トークン化と解析、幹、スピーチの一部のタグ付け、言語検出、およびセマンティック関係の識別が含まれます。
NLUは、すべての着信メッセージを処理し、意図的な分類、言語識別、エンティティ抽出、およびスロットタグを実行するボットプレスのモジュールです。

## ユースケースを決定します {#case}

FAQ AIチャットボットを作成したい場合は、ビジネスのユースケースが必要です。このチュートリアルのために、私たちは、製品の価格設定とビジネスのタイミングに関連するランダムな質問をユーザーに尋ねてもらいたいです。

## ボットプレスをインストールします {#install}

BotPressをインストールするには、[Webサイト][7]に移動し、「無料でダウンロード」をクリックし、プラットフォームを選択します。このチュートリアルでは、Macバージョンを使用しています。ダウンロードが完了したら、zipファイルを抽出し、右ターミナルで次のコマンドを実行して、右のフォルダーに移動できます。
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="ボットプレス開始">}}


## 新しいボットを作成します {#create}

ここで、 **ボット**を作成してから **新しいボット** を選択して、実際に最初のボットを作成したいと考えています。ボットをFAQボットと呼び、ボットテンプレートとして、[ボットを作成]をクリックする前に**空のボット** を選択します。

{{< figure align=center src="images/create-bot.gif" alt="new-botを作成します">}}

次に、Botpress Studioエディターでこのボットを編集します。

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Studioでbotpress編集">}}

今、スタジオには、左サイドバーに沿って多くのメニューがあります。しかし、簡単にするために、Q＆Aセクションに固執します。
「Q＆A」アイコンをクリックして、可能な /よくある質問と適切な回答を追加します。

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="ボットプレスQ＆A">}}


## FAQボットを訓練します {#train}

今すぐ完了したら、Q＆Aセクションの右下隅にある「トレインチャットボット」ボタンをクリックして、FAQボットをトレーニングする必要があります。

{{< figure align=center src="images/train-bot.gif" alt="ボットプレストレインボット">}}

トレーニングが完了したら、組み込みのエミュレータツールを使用してFAQボットをテストできます。

{{< figure align=center src="images/test-faq-bot.gif" alt="FAQボットをテストします">}}

これで、FAQボットの準備ができたので、[公式埋め込み][8]ボットプレスガイドに従ってこのボットをウェブサイトに展開できます。

## 結論 {#conclusion}

このブログ投稿では、自然言語処理を学び、理解しています。また、ボット作成プロセスを実践しています。私たちは、顧客がビジネスのタイミングと支払い計画について知るのに役立つ簡単なFAQボットを訓練しました。チュートリアルの目的は、初心者がBoTpressを使用したAIベースのFAQボットをすぐに始めるのを支援することでした。



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
