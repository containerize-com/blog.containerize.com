---
title: "JavaScriptの基本的な概念を学び、あなたのキャリアを支援してください" 
seoTitle: "JavaScriptの基本概念" 
description: "このJavaScriptチュートリアルに従って、JavaScriptの基本概念を学びます。 Scopes、Hoisting、および閉鎖は、JavaScriptの非常に基本的な概念ですが、必須の概念です。" 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "このJavaScriptチュートリアルに従って、JavaScriptの基本概念を学びます。 Scopes、Hoisting、および閉鎖は、JavaScriptの非常に基本的な概念ですが、必須の概念です。" 
url: /ja/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## 開発者が知っておくべきコアJavaScriptの基礎を学びましょう。この解釈されたプログラミング言語は、エンタープライズレベルのアプリを開発するために広く使用されています。

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScriptの基本概念">}}


## 概要
JavaScriptは、動的なWebベースのアプリケーションを開発するために使用されるスクリプト言語です。 HTMLとCSSを使用して静的Webサイトを構築しますが、JavaScriptはインタラクティブ性を追加するために使用されます。以前のブログ投稿では、[ドキュメントオブジェクトモデル] [1]について説明しましたが、他の重要な**JavaScriptの基本概念を取り上げます**。 Web開発者は、その豊富な機能とフレームワークのために、このスクリプト言語を選択する傾向があります。さらに、JavaScriptを学習することにより、フロントエンドとバックエンドで開発を行うことができます。ただし、Webアプリだけでなくモバイルアプリも開発することはできません。このJavaScriptチュートリアルは、インタビューセッションの準備をしている場合に役立ちます。それにもかかわらず、このガイドはあなたの知識バケツにさらに追加するために読む価値があります。
この記事では、次のポイントについて説明します。
***[JavaScriptで巻き上げられているもの] [2]**
***[JavaScriptのスコープ] [3]**
***[JavaScriptクロージャー] [4]**

## javascriptでホイストしている{#何javascript}
現在のスコープの上に関数または可変宣言の現象は、巻き上げとして知られています。これは非常に重要な概念であり、ほとんどのJavaScript開発者はそれを認識していません。ただし、ここで注意すべき重要なことは、関数/変数宣言のみが関数/変数の初期化ではなく、上部に取られることです。
例を見て、以下のコードスニペットを見てみましょう。
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
上記のコードの例では、関数宣言の前に関数呼び出しを行いましたが、コードが正常に実行され、JavaScriptが編成されているためです。基本的に、コンパイル時間中に、JavaScriptインタープリターはコードをスキャンし、すべての機能/変数を収集し、それらを語彙環境と呼ばれるメモリに入れます。変数でも同じことが起こります。
```
name = "mustafa";
console.log(name);
var name;

```
同様に、名前変数の初期化は宣言の前に行われており、コードはエラーなしで機能します。繰り返しになりますが、コンパイル時間中、JSインタープリターは語彙環境を調べて変数宣言を見つけ、コードを実行しました。
したがって、LETおよびconstキーワードを使用して変数を宣言すると、JavaScriptはそれらを少し違った方法で巻き上げます。
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
上記のコードスニペットのエラーが発生しました。その理由は、この変数を巻き上げている間に初期化が行われなかったからです。短い話の短いことには、すべての宣言は「未定義」で初期化され、「let」または「const」で宣言された変数は巻き上げで初期化されません。

## javascriptのスコープ{#scopes-in-javascript}
範囲は、開発者が知っておくべきJavaScriptの基本概念の1つです。ただし、JavaScriptスコープを使用することは簡単ではなく、少し違います。したがって、JavaScriptには3種類のスコープがあり、これらは次のとおりです。
* *ブロックレベル**：「let」または「const」で宣言された変数には、ブロックレベルのスコープが含まれています。
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
変数「A」は、ブロックレベルのスコープを備えているため、巻き毛のブレース{}の外側にアクセスできません。
* *関数レベル**：JavaScript関数内で宣言された変数にはローカルスコープがあります。
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
ここで注意すべき重要なことは、「let」「const」と「var」で宣言された変数が関数本文内に関数スコープを持っていることです。
* *グローバルレベル**：関数の外側で宣言された変数はグローバル変数になります。 「let」、「const」、または「var」キーワードを使用してそれらを宣言したとしても。さらに、以下のコードスニペットに示すように、キーワードを使用せずに宣言された場合、変数はグローバル変数になります。
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## javascriptクロージャー{#javascript-closures}
これは、スコープとデータのカプセル化に関するJavaScriptの知識を強化するもう1つの重要な概念です。最も単純な形式では、関数内の関数は閉鎖として知られています。内部関数を閉鎖と呼ぶことができます。この内部関数には、3種類の範囲があります。
* 独自のブロックレベルの範囲があります。
* 親の変数にアクセスできます。
* グローバルスコープの変数も閉鎖内でアクセスできます。
 閉鎖を作成する方法を見てみましょう：
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
変数first_nameはinnerfuncという名前の関数内でアクセス可能ですが、親関数はlast_name変数にアクセスできません。この動作により、プログラマーはスコープチェーンにプライベート変数を作成できます。

## 結論
ここでこのJavaScriptガイドを終了し、**JavaScriptの基本概念をよりよく理解できることを願っています**。さらに、**JavaScriptの閉鎖、JavaScript**のスコープ、および巻き上げも行いました。初心者には必須の他の多くの重要な概念があります。したがって、この記事は、JavaScriptの概念を改善または更新するために繁栄している場合に役立ちます。さらに、「参照」セクションで説明されているブログ投稿をご覧ください。

## 私達と接続
最後に、[containerize.com] [5]は、さまざまなエキサイティングなトピックに関する継続的なJavaScriptチュートリアルを提供しています。 [Facebook] [6]、[LinkedIn] [7]、[Twitter] [8]など、ソーシャルメディアプラットフォームでフォローしてループにとどまることができます。

## 質問する
[フォーラム] [9]での質問や質問についてお知らせください。

## FAQ
* * JavaScriptで学ぶための重要な概念は何ですか？**
JavaScriptの基本概念を知るために、このJavaScriptの初心者の[ガイド] [2]に従ってフォローしてください。

## 参照
  * [JavaScriptのDOMとは何ですか？ |ドキュメントオブジェクトモデル] [1]
  * [JavaScriptの約束とは何ですか？ | JavaScriptチュートリアル] [10]
  * [サーバーレスコンピューティングとは何ですか？ |サーバーレスアーキテクチャ] [11]
  * [マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチ？] [12]
  * [生成AI |とは何ですか生成人工知能] [13]
  * [JavaScriptでAsyncが待っているのは何ですか？ | JavaScriptガイド] [14]
  * [vscodeでchatgptの使用方法| VSCODE拡張コードGPT] [15]
  * [Openai Chatbot gpt-3 | ai革命をchatgpt] [16]
  * [人工知能の紹介| AIとは？] [17]
  * [JavaScriptでAsyncが待っているのは何ですか？ | JavaScriptガイド] [18]
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
