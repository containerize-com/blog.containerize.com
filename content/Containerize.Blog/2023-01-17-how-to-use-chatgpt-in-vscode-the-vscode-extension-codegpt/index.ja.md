---
title: "vscodeでchatgptの使用方法| VSCODE拡張コードGPT" 
seoTitle: "vscodeでchatgptの使用方法| VSCODE拡張コードGPT" 
description: "OpenAI APIを使用して、人工知能を書き込み＆最適化します。 VSCODE拡張コードGPTは、オープンソースNLPモデルであるGPT-3を搭載しています。" 
date: Tue, 17 Jan 2023 10:26:29 +0000
author: muhammadmustafa
summary: "この記事では、VSCODE用のChatGptを紹介します。 OpenAIコードジェネレーターコードGPTは、オープンソースの人工知能を搭載したGPT-3モデルに基づいています。" 
url: /ja/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
categories: ['Artificial intelligence']
---

##**この記事では、vscodeのchatgptを紹介します。 OpenAIコードジェネレーターコードGPTは、オープンソースの人工知能を搭載したGPT-3モデルに基づいています。**

{{< figure align=center src="images/How-to-use-ChatGPT-in-VSCode-The-VSCode-Extension-CodeGPT-1.png" alt="vscode拡張コードgpt">}}


## 概要
あなたは初心者または経験豊富なレベルのプログラマであり、開発プロジェクトに取り組んでいると思います。では、[人工知能搭載][1]**vscode拡張コードgpt**が、プログラミング言語でソースコードを書くのを支援する場合はどうなりますか？たとえば、HTML入力要素のコードを作成するようにAIを要求し、AIが「」を返す場合。すばらしい？
はい、それは驚くべきことではありませんが、考えさせられることは、AIがソフトウェアのソースコードを生成することです。さて、このブログ投稿では、[openai][2]**コードジェネレーター**[コードgpt][3]という名前を示します。インストールを検討し、このVSCODE拡張コードGPTのプロセスをセットアップします。さらに、開発者とコミュニティに提供するものも探求します。ただし、**[chatgpt][5]**に関する最近のブログ投稿をスキップした場合は、この[リンク][6]にアクセスして、この**aiチャットボットの詳細な概要を取得する必要があります。****
次のポイントをカバーします。
* [**コードgptとは？**][7]
* [**vscode拡張コードgpt？**][8]のインストール方法
* [**Openai APIキーを取得し、コードgpt**][9]を設定します
* [**コードGPTの使用を開始 -  AI搭載のOpenAIコードジェネレーター**][10]

## コードGPTとは何ですか？   {#whatis-codegpt}
[Code GPT][3]は、編集者内のプレーンテキストからコードスニペットを生成できる**ビジュアルスタジオコード拡張機能**です。この**OpenAIコードジェネレーター**は、自然言語の応答を処理および生成するためのOpenAI APIに基づいています。ただし、コードGPTは事前に訓練されたモデルであるGPT-3の上に構築されているため、コードGPTに行われたすべての要求はGPT-3によって処理され、このモデルは複数の状況を採用するのに十分賢いです。さらに、この**vscode拡張機能**を使用すると、コード生成とともにコードスニペットを屈折させ、改善できます。実際、環境全体が、ビジュアルスタジオコードエディターで[chatgpt][11]を使用しているという正確な感触を提供します。

## VSCODE拡張コードGPTをインストールする方法は？   {#how-to-install-the-vscode-extension-codegpt}
このセクションでは、**vScode拡張コードgpt。**インストールする手順を実行します。**[vscode Marketplace][12]**からこの拡張機能を簡単にインストールできます。
VSCODEエディターを開き、「拡張機能」に移動し、検索バーにコードGPTを入力します。 codegptという名前には多くの拡張機能がありますが、以下の画像に示すように拡張機能をインストールする必要があります。

{{< figure align=center src="images/codegpt-installation-1024x640.png" alt="コードGPTインストール">}}

互換性エラーが発生した場合に備えて、VSCODEを最新バージョンに更新してください。さらに、このVSCODE拡張は一貫した開発中であるため、異常な挙動の可能性を省略できません。

## Openai APIキーを取得＆Configure code gpt   {#retaine-openai-api-key-configure-codegpt-}
インストールが完了したら、次のステップは、Openaiの[Webサイト][13]からAPIキーを取得することです。**コードGPT拡張機能**の機能を有効にするには、このAPIキーが必要です。 APIを取得するには、この[リンク][13]にアクセスし、まだ作成されていない場合はアカウントを作成します。

{{< figure align=center src="images/openai-key-1024x630.png" alt="oepnai api">}}

上の画像では、「新しいシークレットキーの作成」ボタンを見ることができます。このボタンをクリックすると、キーが安全なスペースに保管されます。ここで、最後のステップは、この秘密の鍵を**vscode拡張コードgpt。**の設定に配置することです。それを達成するには、次の手順を実行します。
* 「コマンド+シフト+P」を押します
* コードgptを書き、「codegpt：apiキーを設定」を選択します
* 最後に、下の画像に示すようにキーを挿入し、「Enter」を押します。

{{< figure align=center src="images/openai-API-1024x606.png" alt="vscode用のchatgpt">}}

すべてが正常に完了すると、Visual Studioコードに**コードGPT拡張機能**がインストールされます。次のセクションでは、このVSCODE拡張機能によって提供される機能をさらに詳しく調べます。

## Code GPTの使用を開始 -  AI搭載Openaiコードジェネレーター {#Start-Using-Codegpt --- An-Ai-Powenai-Code-Generator}
これまでに、Visual StudioコードでコードGPT拡張機能を設定しています。この**vscode拡張コードgpt**を活用するには、「コマンド+シフト+p」を押して、「codegpt」という質問を選択し、「htmlの入力要素のコードを書き込む」などの入力フィールドに質問を書きます。下の画像に示すように、サイドバーでの応答：

{{< figure align=center src="images/chatgpt-for-vscode-1024x522.png" alt="vscode用のchatgpt">}}

さらに、コードを選択して、選択したコードを説明するようにcodegptを尋ねることができます。たとえば、コードスニペットを選択し、VSCODE拡張子「このコードスニペットの説明」を尋ねると、下の写真に示すように、応答がサイドパネルに示されています。

{{< figure align=center src="images/VSCode-Extension-Code-GPT-1024x398.png" alt="Openapiコードジェネレーター、">}}

基本的に、この応答は生成され、**オープンソースGPT-3モデル**によって返されます。同様に、このVSCODE拡張機能がどれほどクールであるかを見てきましたが、VSCODEのChatGPTに似ています。

## ラッピング
結論として、Visual Studioコードエディターは**AIを搭載したOpenAIコードジェネレーターで濃縮しました。さらに、**vscode拡張コードgpt**にソースコードの特定の部分を説明するように依頼することができます。とりわけ、選択したコードスニペットに添付された問題を見つけることができ、このVSCODE拡張機能によって提案された改善をもたらすことができます。最後に、「も参照」セクションにリストされている非常に関連する記事がいくつかあります。
最後に、[containerize.com][4]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。さらに、ソーシャルメディアアカウント[Facebook][14]、[LinkedIn][15]、および[Twitter][16]でフォローできます。

## 質問する
[フォーラム][17]での質問や質問についてお知らせください。

## FAQ
**コードGPTは何に使用されていますか？**
[コードGPT][3]は、人工知能ベースのコード生成と最適化拡張です。これは、OpenAIを搭載したオープンソースGPT-3の上に構築されています。詳細については、このリンクをご覧ください。
**コードGPTをvscodeと統合する方法？**
この[リンク][9]にアクセスして、このAIを搭載したVSCODE拡張機能をインストールしてください。

## 参照
  * [Openai Chatbot gpt-3 | ai革命をchatgpt][6]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][18]

  
[1]: https://blog.containerize.com/category/artificial-intelligence/
[2]: https://openai.com/
[3]: https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3
[4]: https://www.containerize.com/
[5]: https://en.wikipedia.org/wiki/GPT-3
[6]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[7]: #What-is-CodeGPT
[8]: #How-to-install-the-VSCode-extension-CodeGPT
[9]: #Retrieve-OpenAI-API-Key-configure-CodeGPT-
[10]: #Start-using-CodeGPT---an-AI-Powered-OpenAI-Code-Generator
[11]: https://openai.com/blog/chatgpt/
[12]: https://marketplace.visualstudio.com/vscode
[13]: https://beta.openai.com/account/api-keys
[14]: https://web.facebook.com/containerize
[15]: https://www.linkedin.com/company/containerize/
[16]: https://twitter.com/containerize_co
[17]: https://forum.containerize.com/
[18]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
