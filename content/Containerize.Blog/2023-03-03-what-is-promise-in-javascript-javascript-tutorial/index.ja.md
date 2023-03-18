---
title: "JavaScriptの約束とは何ですか？ | JavaScriptチュートリアル" 
seoTitle: "JavaScriptの約束とは何ですか？" 
description: "JavaScriptの約束とは何ですか？約束とは、保留中、完了、拒否などの非同期操作の最終結果を与えるコードのブロックです。" 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScriptの約束とは何ですか？約束とは、完了または拒否などの非同期操作の最終結果を与えるコードのブロックです。" 
url: /ja/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## あなたはJavaScriptの約束の概念を学ぶのに苦労していますか？この記事では、約束を作成する方法、JavaScriptなどで約束を使用する理由について説明します。

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## 概要
[JavaScriptデータ型] [1]をよりよく理解できることを願っています。現在、これは[プログラミング] [2]カテゴリの別のブログ投稿です。このJavaScriptチュートリアルでは、**JavaScript**の約束とは何かを通過します。それに加えて、非同期操作、約束の使用、JavaScriptで約束を作成する方法も確認します。第一に、非同期プロセス/操作は、他のプロセスに関して独立して実行され、閉塞を作成しないものです。したがって、非同期操作を処理する必要があります。そうしないと、JavaScriptコードに異常を作成する可能性があります。そのため、約束を使用して非同期操作をどのように処理できるかを探ります。
このJavaScriptチュートリアルでは、次のポイントについて説明します。
***[JavaScriptの約束とは何ですか？説明された約束] [3]**
***[なぜJavaScriptで約束を使用するのですか？] [4]**
***[JavaScriptで約束がどのように機能しますか？] [5]**
***[約束の作成方法？] [6]**

## JavaScriptの約束とは何ですか？約束が説明された{#what-is-promise-in-javascript-promises-xplained}
約束とは、解決、拒否された、または保留状態にある非同期操作の天候の値を表すオブジェクトです。より単純な言葉では、約束は、コードの非同期ブロックによってまだ生成されていない値を返すために使用されます。実際、約束の3つの状態があり、次のいずれかの状態にある可能性があります。
* *保留中**：約束は保留中の状態にあります。つまり、開始段階にあり、現在実行中です。
* *満たされた**：約束が解決され、価値が返されました。
* *拒否**：これは、約束が拒否されたことを意味するエラーによって引き起こされる状態です。
ここで考慮すべき重要なことは、約束によって返された価値/状態が不変であり、変更できないということです。つまり、約束は異常な行動がないことを確認することを意味します。

## なぜJavaScriptで約束を使用するのですか？ {#なぜwe-use-promise-in-javascript}
* *コールバックヘル**に気付いていない場合は、それが何であるかを共有させてください。まず、コールバックは別の関数内の関数です。基本的に、コールバック関数は、結果の受信時に実行される関数の2番目の引数として渡されます。したがって、多くのシナリオでは、コールバック関数をネストする必要があり、ネストが増加するにつれて、処理することはほぼ不可能になります。したがって、コールバック関数のこの長いネスティング**コールバックHELL**と呼びます。
したがって、約束は、コールバックの地獄の状況を避ける方法です。約束の使用により、読みやすさが向上し、エラー処理が改善されます。さらに、返された値を取得し、その値をチェーン内の次の関数に渡すことにより、非同期操作をより適切に処理できます。

## JavaScriptでどのように約束が機能しますか？ {#how-promise-works-in-javascript}
それでは、約束の背後にある作業メカニズムを理解しましょう。以下の図をご覧ください。

{{< figure align=center src="images/what-is-a-promise.png" alt="JavaScriptで約束がどのように機能しますか？?" >}}

上記のワークフローによると、実装の詳細は非常に明確です。約束はその作成時に実行を開始し、応答を待っている保留中の状態にあります。データがあるか、処理の終了時にエラーが発生する2つのオプションがあります。データを受信すると、.then（）ブロックになり、エラーが発生した場合に.catch（）ブロックになります。

## 約束を作成する方法は？ {#How-to-create-a-promise}
これまでのところ、私たちは約束の基本的な概念をカバーしてきました。さて、JavaScriptで約束を作成する方法を探ります。次の約束コンストラクターを使用して、約束を作成しましょう。
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructorは、最初に2つの引数を再び実行し、他の議論を拒否する議論として関数を取ります。成功した場合にResolve（）メソッドを呼び出し、エラーまたは拒否の場合にreject（）ブロックになります。
少し深く行き、さらに約束の創造をもう少し探求しましょう。
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
上記のコードスニペットでは、Resolve（）ブロックでAPI呼び出しをさらに作成できます。
それでは、JavaScriptの約束の実行パターンを見てみましょう。
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
以下は、上記のコードスニペットの出力です。
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
したがって、Promise Body内のコードは同期して動作するため、「同期実行」が印刷されます。次に、.then（）ブロックは非同期に動作し、結果が生成されるまで待機しますが、プログラムの実行が停止しないため、「ハローワード」が印刷され、約束の実行が延期されました。その後、.then（）ブロックは、それが約束した値を実行して返します。それがJavaScriptの約束の物語です。繰り返しますが、JavaScriptは単一のスレッドであるため、約束が非ブロッキング方法で非同期操作を処理するために使用されます。

## 結論
これは、この**JavaScriptチュートリアル**の終わりです。 JavaScriptの約束について良いアイデアがあることを願っています。 JavaScript**の約束とは何か、JavaScriptで約束を使用する理由**JavaScript**で約束がどのように機能するか、そして約束を作成する方法をカバーしました。さらに、このトピックについては、その高度な使用法と規定について詳しく説明します。したがって、インタビューセッションの準備をしている場合に備えて、この記事をご覧ください。

## 私達と接続
最後に、[containerize.com] [7]は、さまざまなエキサイティングなトピックに関する継続的なJavaScriptチュートリアルを提供しています。 [Facebook] [8]、[LinkedIn] [9]、[Twitter] [10]など、ソーシャルメディアプラットフォームでフォローしてループにとどまることができます。

## 質問する
[フォーラム] [11]での質問や質問についてお知らせください。

## FAQ
* * JavaScriptの約束とは何ですか？**
JavaScriptの約束とは何かを知るために、この[リンク] [3]に従ってください。

## 参照
  * [JavaScriptのデータ型とは何ですか？ |初心者向けガイド] [1]
  * [Kubernetesマルチテナンシーとコンテナベースのアーキテクチャ] [12]
  * [サーバーレスコンピューティングとは何ですか？ |サーバーレスアーキテクチャ] [13]
  * [マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチ？] [14]
  * [JavaScriptのデータ型とは何ですか？ |初心者のガイド] [15]
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
