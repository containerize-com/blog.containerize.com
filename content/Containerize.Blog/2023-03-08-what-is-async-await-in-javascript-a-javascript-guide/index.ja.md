---
title: "JavaScriptでAsyncが待っているのは何ですか？ | JavaScriptガイド" 
seoTitle: "JavaScriptでAsyncが待っているのは何ですか？" 
description: "JavaScriptでAsyncが待っているのは何ですか？ Async＆Awaitキーワードは、JavaScriptの従来の約束よりも非同期操作をよりよく運用するために使用されます。" 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScriptでAsyncが待っているのは何ですか？ Async＆Awaitキーワードは、JavaScriptの従来の約束よりも非同期操作をよりよく運用するために使用されます。" 
url: /ja/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017はJavaScript Async/待望を導入しました。これは約束に関するラッパーです。 Async/awaitは、プロミスベースのAPIを最新の最も簡単な方法で消費するために使用されます。

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="JavaScriptでAsyncが待っているのは何ですか？?">}}


## 概要
以前のブログ投稿で[JavaScript Promises] [1]を取り上げました。JavaScriptの約束の背後にある概念を明確に理解したい場合は、訪問する必要があります。このシリーズの[JavaScriptチュートリアル] [2]では、JavaScript Async/待ち望の最新の特徴を示す別のJavaScriptガイドと一緒にいます。このブログ投稿は、JavaScriptの約束の事前知識を持っている人向けです。さらに、JavaScript**でasync/async/async/async/async/async/awaitを使用する必要がある場合をカバーしようとします。さらに、Async/awaitを使用したハンドリングエラーもカバーします。したがって、この概念を確認するには、この**javaScript async/awaitチュートリアル**を徹底的に読んでください。
このJavaScript Asyncを待っているチュートリアルの次のセクションを説明します。
***[JavaScriptでAsync/待ち望んでいるものAsyncは構文を待っています] [3]**
***[いつasync/awaitを使用するのか？] [4]**
***[async/awaitでのエラー処理] [5]**

## JavaScriptでAsync/async/awaintとは何ですか| async await syntax {#what-is-asyncawait-in-javascript-async-await-syntax}
ECMAScript 2017は、JavaScriptの新機能をリリースし、Async/Awaitはこれらの機能の中で最も広く使用されているものの1つです。 Async/awaitは約束の上に構築されており、実際にはJavaScriptの約束を処理するための最新の方法です。
JavaScriptコードでAsync/async/awaitキーワードを使用する方法を見てみましょう。
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
さて、関数の開始時のAsyncキーワードは、この関数が約束を返すことを意味します。したがって、待望のキーワードは、Async関数の本体内で常に使用され、約束が解決するまで関数の実行を一時停止します。ここで注意すべき重要なことは、通常の関数のボディ内で待望のキーワードを使用できないことです。ただし、Asyncキーワードで宣言された非同期関数でのみ待ちを使用できます。

## いつasync/awaitを使用するのですか？ {#いつ使用するのかasyncawait}
これまでのところ、JavaScript**でAsyncが待っているものへの答えがあります。これは伝統的なJavaScriptの約束をめぐるラッパーであるため、この新しい方法を使用して、よりクリーンで読みやすい方法で約束を作成および処理することをお勧めします。さらに、複数のPromise.then（）呼び出しを削除することができます。 awaitキーワードは、.then（）ステートメントを単一行にカプセル化します。

## async/awaitを使用したエラー処理{#エラーハンドリング - アジンコウェイト}
エラー処理は、エンタープライズレベルのソフトウェア開発に関して重要なタスクです。 Async/awaitアプローチでエラーをキャッチするには、複数の方法があります。

{{< figure align=center src="images/async-await.png" alt="async asyncを待ってみてくださいjavascript">}}

* * async asyncを待ってみてくださいjavascript**：このエラー処理アプローチでは新しいものはありません。ただし、以下のコードスニペットに示すように、非同期関数内でトライ/キャッチブロックを使用できます。
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Try/Catchブロックを使用して、非同期関数のボディ内の例外をキャッチできます。
一方、関数呼び出しの最後に.catch（）ブロックを追加できるエラーを処理する別のアプローチがあります。 Async/awaitが約束を返すため、.catch（）ブロックのエラーをキャッチします。
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## 結論
これを終了しています**JavaScript async async awaintチュートリアル**。 JavaScript**でAsyncが待っていることをよりよく理解できることを願っています**。さらに、Source Codeの複雑さを軽減するJavaScript Asyncを待っています。このJavaScript機能は、その豊富な使用とパフォーマンスのために広く使用されています。今後数日では、JavaScriptの機能と概念についてさらに書き込み、JSの概念よりも強力なコマンドを獲得できるようにします。さらに、「参照」セクションで言及されている他の興味深い記事がいくつかあります。

## 私達と接続
最後に、[containerize.com] [6]は、さまざまなエキサイティングなトピックに関する継続的なJavaScriptチュートリアルを提供しています。 [Facebook] [7]、[LinkedIn] [8]、[Twitter] [9]など、ソーシャルメディアプラットフォームでフォローすることで最新情報を入手できます。

## 質問する
[フォーラム] [10]での質問や質問についてお知らせください。

## FAQ
* * JavaScriptでasyncが待っているのは例ですか？**
この[リンク] [3]にアクセスして、Async待ちの概念を理解できます。
* * Asyncは何を待っているのか約束しますか？**
 * ASYNC/待ち望は、約束がソースコードを混乱させることができる約束と比較して、ソースコードをより明確で読みやすくします。
* エラー処理は両方のアプローチでかなり似ています。
 * Async待ち行為では、デバッグはそれほど難しくありません。
* 約束は、保留中、解決、または拒否などの州を維持します。一方、非同期/待ち声は解決または拒否されます。

## 参照
  * [JavaScriptの約束とは何ですか？ | JavaScriptチュートリアル] [1]
  * [サーバーレスコンピューティングとは何ですか？ |サーバーレスアーキテクチャ] [11]
  * [マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチ？] [12]
  * [生成AI |とは何ですか生成人工知能] [13]
  * [ChatGptをGoogleシートと統合する方法] [14]
  * [vscodeでchatgptの使用方法| VSCODE拡張コードGPT] [15]
  * [Openai Chatbot gpt-3 | ai革命をchatgpt] [16]
  * [人工知能の紹介| AIとは？] [17]
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
