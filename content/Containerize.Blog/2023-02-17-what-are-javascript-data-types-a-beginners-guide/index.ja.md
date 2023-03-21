---
title: "JavaScriptデータ型とは何ですか？ |初心者のガイド" 
seoTitle: "JavaScriptデータ型とは何ですか？ |初心者のガイド" 
description: "JavaScriptデータ型とは何ですか？この初心者のガイドに従って、JavaScript番号、文字列、ブールン、ヌル、未定義な​​どで使用される7つのデータ型を学習します。" 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "JavaScriptの人気は、その適応性のために止められません。このJavaScriptの初心者向けガイドに従って、JSスタックの専門知識の育成を開始してください。" 
url: /ja/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## JavaScriptの人気は、その適応性のために止められません。このJavaScriptの初心者向けガイドに従って、JSスタックの専門知識の育成を開始してください。

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |JavaScriptデータ型とは何ですか？ |初心者のガイド">}}


## 概要
あなたが平凡なレベルであろうと経験豊富な開発者であろうと、開発の仕事中にあなたの問題の解決策を得るでしょう。 [containerize.com][1]は、プログラミングカテゴリにチュートリアルブログ投稿の執筆を開始し、**javascript初心者向けガイド**から始めています。私たちが始めているので、この記事はJavaScriptデータ型に関するものです。**JavaScriptデータ型**とは何か、ソースコードで効率的に使用する方法の例をご覧ください。したがって、この初心者向けガイドを徹底的に進めて、**JavaScriptデータ型**を十分に理解できるようにします。
次のポイントをカバーしています。
  * [データ型とは？][2]
  * [JavaScriptデータ型とは？][3]

## データ型説明|データ型とは何ですか？   {#whatis-a-data-type}
データ型は、データを解釈またはコンパイルする方法をコンパイラに伝えることです。データ型の使用は重要であり、賢明に使用する必要があります。簡単に言えば、それは数字、文字列、ブールンなどのデータの形式に関するものです。ただし、データ型のプリミティブデータ型と非適合データ型には2つのカテゴリがあります。次のセクションで説明する8つのプリミティブデータ型があります。

## JavaScriptデータ型とは何ですか？   {#what-are-javascript-data-types}
実際、JavaScriptは緩やかに型付けされた言語であるため、変数タイプを明示的に定義する必要はありません。任意の値を変数に割り当てることができ、その変数はString、BigInt、Booleanなどなどの値を保存します。

{{< figure align=center src="images/web-development.png" alt="JavaScriptの初心者向けガイド">}}


#### プリミティブデータ型
プリミティブデータ型は不変であり、作成と初期化後に変更することはできません。ただし、新しい値を再割り当てすることはできますが、既存の値を変異させることはできません。
例えば：
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
上記の例では、文字列は原始的なデータ型であり、古い値は新しい値に置き換えられていますが、既存の値の変化は反映されていません。したがって、「私の名前が変更された」ではなく、まだ「私の名前が変更されている」ことがわかります。

#### 非プリミティブデータ型
プリミティブデータ型とは反対の単純な単語では、非プライティブデータ型は可変です。
例えば：
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
さらに、プリミティブデータ型は値によって比較され、非プライティブデータ型は常に参照によって比較されます。
例えば：
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
次に、データ型を1つずつ見てみましょう。 6つのプリミティブデータ型と1つの非適合データ型があります。
**プリミティブデータ型は次のとおりです。**
***文字列**：このデータ型は、引用符に囲まれた文字のシーケンスで構成されるテキストデータを表します。
***number**：10進数/非決定的なデータ、特に整数またはフロートを表します。
***boolean**：Trueまたはfalseの論理値の表現。
***シンボル**：シンボルは一意の値を保持するために使用されます。
***未定義**：値または未知の変数のない変数。
***null**：値がないことはnullと見なされます。
**非プライティブデータ型には以下が含まれます：**
**オブジェクト**：キー価値のペアで構成されるデータの収集を保存するために使用されます。

## 結論
これは、この**JavaScript初心者向けガイド**の終わりです。**JavaScriptデータ型**は何ですか？さらに、一言で言えば、データ型とは何かを調査しました。 JavaScriptでは、非プライティブデータ型と**プリミティブデータ型**をよりよく理解する必要があります。このブログ投稿は、就職の面接の準備をしたい場合に本当に役立ちます。
最後に、[containerize.com][1]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。さらに、ソーシャルメディアアカウント[Facebook][4]、[LinkedIn][5]、および[Twitter][6]でフォローできます。

## 質問する
[フォーラム][7]での質問や質問についてお知らせください。

## FAQ
**8つのJavaScriptデータ型は何ですか？**
8つのJavaScriptデータ型を知るには、この[リンク][3]にアクセスしてください。

## 参照
  * [無料およびオープンソースで人気のあるJavaScriptフレームワーク][8]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][9]
  * [2022年に学習するトップ10のオープンソーステクノロジー][10]

  
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
