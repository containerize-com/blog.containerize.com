---
title: "JavaScriptのDOMとは何ですか？ |ドキュメントオブジェクトモデル" 
seoTitle: "JavaScriptのDOMとは何ですか？" 
description: "JavaScriptのDOMとは何ですか？このガイドでは、ドキュメントオブジェクトモデル、DOMのプロパティ、DOMのレベル、およびDOM要素にアクセスする方法を示します。" 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScriptのDOMとは何ですか？このガイドでは、ドキュメントオブジェクトモデル、DOMのプロパティ、DOMのレベル、およびDOM要素にアクセスする方法を示します。" 
url: /ja/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Webブラウザー内のHTMLドキュメントの表現は、HTML DOMツリーとして扱われます。これは一連のオブジェクトであり、Webページの構造を定義します。

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="JavaScriptのDOMとは何ですか？?">}}


## 概要
[JavaScriptプログラミング] [1]のシリーズの別のエキサイティングなブログ投稿へようこそ。この記事では、Web開発の非常に基本的で本質的な概念に触れます。はい、JavaScriptのドキュメントオブジェクトモデルをカバーします。過去には、JavaScript言語を使用して開発を開始するために必須のJavaScriptチュートリアルを公開してきました。したがって、この重要な概念に関連するものを見逃さないように、このブログ投稿を徹底的に読むことをお勧めします。このガイドを始めて、**JavaScript**、Dom PropertiesのDOMとは何か、およびプログラムでどのように対話できるかを見つけましょう。
このJavaScriptガイドでは、次のトピックについて説明します。
***[ドキュメントオブジェクトモデル（dom）とは？] [2]**
***[domレベル] [3]**
***[DOMプロパティとは何ですか？それらにアクセスする方法は？] [4]**

## ドキュメントオブジェクトモデル（DOM）とは何ですか？ {#what-is-document-object-model}
domは？**ドキュメントオブジェクトモデル（DOM）**は、Webブラウザー内のWebページの表現です。簡単に言えば、ブラウザ内のHTMLドキュメントの要素の階層表現は、ドキュメントオブジェクトモデルとして知られています。これは、実際にWebブラウザーによって生成されるツリー形状で形成されます。これは、互いに接続されているさまざまなノードで構成されており、ツリー形状を形成します。さらに、DOM要素には属性とイベントが付属しています。
実際、DOMは、Webページの論理構造を策定し、ページ要素にアクセスする方法を決定するプログラミングインターフェイスです。基本的に、JavaScriptはタイトル、H1などのHTMLタグを認識しません。したがって、HTMLドキュメントがWebブラウザーにロードされると、DOMが作成され、JavaScriptがドキュメント要素を理解できるようになります。

## DOMレベル{#DOM-LEVELS}
このセクションでは、さまざまなレベルのDOMを示します。まず、ブラウザには常に上にあるウィンドウオブジェクトがあり、次にドキュメントノードがあります。下の画像を見てみましょう。

{{< figure align=center src="images/DOM.png" alt="DOMレベル">}}

さて、上の写真にDOM要素を見ることができます。ウィンドウとドキュメントは、トップレベルのブラウザオブジェクトであり、ルートとしてHTML要素があります。次に移動すると、ヘッドとボディノードがあり、タイトルノードはヘッドノードに属し、ボディノードにはWebブラウザーでレンダリングされて表示されるすべてのノードが含まれています。さらに、ボディ要素には、「HREF」属性を含むアンカータグなど、画像に表示できる属性が含まれています。同様に、他のDOMノードには、IMG、METAなどのさまざまな属性が含まれています。

## domプロパティとは何ですか？それらにアクセスする方法は何ですか？ {#what-are-dom-propertiesとhow-to-access-them}
これまでのところ、JavaScriptのDOMとDOMレベルへの答えを考え出し、DOMノードも通過しました。このセクションでは、DOMプロパティを通過し、それらとどのように対話できるかを確認します。すべてのDOM要素には、「P」タグにはテキストプロパティ、IMGタグには画像などがあるなど、それにリンクされた値があります。 JavaScriptメソッドは、ノードの値にアクセスするために使用されます。さらに、イベントリスナーをDOM要素に追加/削除できます。
次の**domプロパティを見つけることができます**：
* * innerhtml**：このプロパティは、DomノードのHTMLコンテンツを設定または取得するために使用されます。
```
let htmlContent = document.getElementById("customID").innerHTML;
```
* * InnerText**：このDOMプロパティを使用して、HTML要素のテキストコンテンツにアクセスまたは設定します。
```
let textualContent = document.getElementById("customID").innerText;
```
* * ParentElement**：このプロパティを使用して、要素の親ノードにアクセスできます。
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
* *スタイル**：要素のスタイル属性を更新します。
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
* * title**：このプロパティを使用して、DOMのタイトル要素を更新します。
```
document.getElementById("customID").title= "this is a web page";
```
 以下は、JavaScript DOMと対話するために使用できる方法の一部です。
* * AddEventListener（）**：このDOMメソッドは、イベントハンドラーを要素に接続するために使用されます。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * getAttribute（）**：このDOMメソッドは、イベントハンドラーを要素に接続するために使用されます。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * getElementById（）**：指定された「ID」で特定の要素を取得する方法。
```
let element = document.getElementById("myID");
```
* * querySelector（）**：この方法を使用して、CSSセレクターと一致している最初の子要素を取得します。
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
* * toString（）**：この方法を使用して、要素を文字列に変換できます。
同様に、他にも多くの方法やプロパティがあります。

## 結論
ここでこのJavasxcriptのチュートリアルを終了しています。また、**DOM、DOMレベル、HTML DOMツリー、DOMプロパティ**を通過しました。このブログ投稿は、Javascritの概念を強く把握しようとしている初心者にとって非常に不可欠です。さらに、「参照」セクションで見つけることができる他の関連記事があります。

## 私達と接続
最後に、[containerize.com] [5]は、さまざまなエキサイティングなトピックに関する継続的なJavaScriptチュートリアルを提供しています。 [Facebook] [6]、[LinkedIn] [7]、[Twitter] [8]など、ソーシャルメディアプラットフォームでフォローしてループにとどまることができます。

## 質問する
[フォーラム] [9]での質問や質問についてお知らせください。

## FAQ
* * JavaScriptで使用されるDOMは何ですか？**
この[リンク] [2]にアクセスして、この質問に対する詳細な答えを得ることができます。

## 参照
  * [JavaScriptの約束とは何ですか？ | JavaScriptチュートリアル] [10]
  * [サーバーレスコンピューティングとは何ですか？ |サーバーレスアーキテクチャ] [11]
  * [マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチ？] [12]
  * [生成AI |とは何ですか生成人工知能] [13]
  * [JavaScriptでAsyncが待っているのは何ですか？ | JavaScriptガイド] [14]
  * [vscodeでchatgptの使用方法| VSCODE拡張コードGPT] [15]
  * [Openai Chatbot gpt-3 | ai革命をchatgpt] [16]
  * [人工知能の紹介| AIとは？] [17]
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
