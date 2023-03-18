---
title: "JavaScriptアプリにchatgptを統合しましょうChatGptチュートリアル" 
seoTitle: "JavaScriptアプリにChatGPTを統合します" 
description: "「npm i chatgpt」を実行して、node.jsアプリケーションでopenaiチャットボットの使用を開始するだけです。このガイドに従って、chatGPTをJavaScriptアプリに統合する方法を学びます。" 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "「npm i chatgpt」を実行して、node.jsアプリケーションでopenaiチャットボットの使用を開始するだけです。このガイドに従って、chatGPTをJavaScriptアプリに統合する方法を学びます。" 
url: /ja/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## GPT-3ベースのウイルスチャットボットを統合して、ビジネスソフトウェアを合理化します。このChatGPTチュートリアルでは、統合ステップとコードスニペットを示しています。

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="JavaScriptアプリにChatGPTを統合します">}}


## 概要
こんにちは読者！ [chatgpt] [1]統合で公開したブログ投稿への圧倒的な応答をありがとうございました。私たちは、あなたの興味に従って、別の便利な**chatgptチュートリアル**とここにいます。さらに、私たちはあなたの学者やキャリアに有益な記事を公開するためにループになります。ただし、JavaScriptチュートリアルの[シリーズ] [20]を開始したため、プログラムでJavaScript AQPP**にChatGPTを統合する方法を示すガイドを作成するのに最適な時期です。さらに、このGPT-3ベースの**Viral Chatbot**機能を作成するために、コードスニペットを書き込みます。この目的のために、node.jsアプリでchatgpt機能を有効にします。したがって、node.jsの事前知識の基本レベルは、このガイドを通過しながらプラスです。
次のセクションについては、このChatGPTチュートリアルで説明します。
***[前提条件-ChatGptJavaScriptラッパー] [2]**
***[node.jsアプリケーションとのchatgpt統合] [3]**

## Pre-Requisites-chatgpt javascript wrapper {#pre-Requisites --- chatgpt-javascript-wrapper-}
このセクションでは、node.jsベースのアプリケーションでchatgpt統合を有効にするために必要な要件を示します。要件は簡単で、システムに簡単にインストールできます。
以下は、このchatgpt javascriptの統合を練習するための事前要求です。

 * [nodejs4](>= 18)

 * [NPM5](>=9)
上記の前提条件がインストールされたら、次のステップはOpenAI APIキーを取得することです。このキーは、APIリクエストをプログラムでChatGPTに作成するために使用されます。したがって、この[リンク] [6]にアクセスして、手順がわからない場合に備えて、OpenAI APIキーを取得する方法を学習してください。
APIキーを安全な場所に保管してください。これですべて要件フェーズのためです。

## chatgpt node.jsアプリケーションとの統合{#chatgpt-integration with-node.js-application}
これで、私たちはすべて、javascriptアプリにプログラムママでchatgptを統合するように設定されています。**最初に、端末を開き、次のコマンドを実行します。
```
npm i chatgpt
```
実行が成功したら、次の手順とコードスニペットに従って、GPT-3モデルにプログラムで対話するようにリクエストを行います。
 * chatgptapiをインポートします。
 * OpenAI APIキーでコンストラクターを初期化します。
 * sendmessageメソッドを呼び出して、GPT-3モデルにメッセージを送信し、応答を受け取ります。
* 応答を表示します。
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
上記のコードスニペットをメインサーバーファイルにコピーして貼り付け、次のコマンドを端末に実行します。
```
node index.js
```
* *注**：（ "Type"： "module"など）をpackage.jsonファイルに追加してください。エラーが表示された場合、「モジュールの外でインポートステートメントを使用できません」。
以下の画像に出力を見ることができます。

{{< figure align=center src="images/chatgpt_tutorial.png" alt="ChatGptチュートリアル">}}

さらに、このChatGpt JavaScriptラッパーを使用すると、会話を追跡し、フォローアップメッセージを送信できます。あなたがする必要がある唯一のことは、以下のコードスニペットに示すように、リクエスト本体に「parentmessageid」を渡すことです。
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
同様に、提供される他の多くの方法[ここ] [7]を探ることができます。このOpenAIチャットボット統合は、エンタープライズレベルのアプリケーションに競争力を与えることができます。

## 結論
このポイントは、この**chatgptチュートリアル**の終わりに私たちをもたらします。 javascriptアプリ**プログラムでchatgptを統合する方法を学んだことを願っています。さらに、ローカルマシンでテストできる作業コードスニペットがあります。このブログ投稿は、node.jsアプリケーションで**chatgpt Integration**を学習するために繁栄している場合の資産です。

## 私達と接続
最後に、[containerize.com] [8]は、さまざまなトピックに関するブログ投稿を継続的に執筆しています。さらに、ソーシャルメディアアカウント[Facebook] [9]、[LinkedIn] [10]、および[Twitter] [11]でフォローできます。

## 質問する
[フォーラム] [12]での質問や質問についてお知らせください。

## FAQ
* * chatgptをjavascriptと統合する方法？**
このchatgpt [チュートリアル] [2]に従って、ステップとコードスニペットを学習して、javascriptアプリにプログラムでchatgptを統合してください。

## 参照
  * [人工知能の紹介| aiとは？] [13]
  * [ChatGptをGoogleシートと統合する方法] [14]
  * [vscodeでchatgptの使用方法| VSCODE拡張コードGPT] [15]
  * [Openai Chatbot gpt-3 | ai革命をchatgpt] [16]
  * [chatgptとの統合をGoogleドキュメント| Openai GPT-3] [17]
  * [トップ5のオープンソースAIフレームワークは何ですか] [18]
  * [生成AI |とは何ですか生成人工知能] [19]
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
