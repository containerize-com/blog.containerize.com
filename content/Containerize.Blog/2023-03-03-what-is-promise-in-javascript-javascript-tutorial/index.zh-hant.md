---
title: "JavaScript中有什麼希望？ | JavaScript教程" 
seoTitle: "JavaScript中有什麼希望？" 
description: "JavaScript中有什麼希望？承諾是代碼塊，它給出了異步操作（例如待處理，完成或拒絕）的最終結果。" 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中有什麼希望？承諾是代碼塊，它給出了異步操作（例如已完成或拒絕）的最終結果。" 
url: /zh-hant/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

##您是否在努力學習JavaScript承諾的概念？本文將解釋如何創造承諾，為什麼我們在JavaScript中使用Promise等等。

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## 概述
我們希望您對[JavaScript數據類型][1]有更好的了解。現在，這是[編程][2]類別中的另一篇博客文章。在本JavaScript教程中，我們將通過JavaScript **的承諾進行**，隨之而來的是，我們還將看到什麼是異步操作，承諾的使用以及如何在JavaScript中創造承諾。首先，異步過程/操作是相對於其他過程獨立執行的，並且不會造成任何阻塞。因此，您需要處理異步操作，否則可能會在JavaScript代碼中造成異常。因此，我們將探索如何使用承諾處理異步操作。
我們將在本JavaScript教程中介紹以下幾點：
  * **[JavaScript中的承諾是什麼？解釋的承諾][3]**
  * **[為什麼我們在JavaScript中使用Promise？][4]**
  * **[Promise如何在JavaScript中起作用？][5]**
  * **[如何創造諾言？][6]**

## JavaScript中有什麼希望？承諾解釋了 {#in-is-promise in-javascript-promises-supplated}
承諾是代表異步操作天氣值的對象，其解決，拒絕或處於待處理狀態。用更簡單的話來說，承諾用於返回一個尚未由異步代碼塊產生的值。實際上，有三種**的諾言狀態**，可以在以下任何狀態下：
**待處理**：承諾處於待處理狀態，這意味著它處於起始階段，並且目前處於執行狀態。
**滿足**：已解決承諾並返回價值。
**拒絕**：這是由任何錯誤引起的狀態，這意味著承諾已被拒絕。
這裡要考慮的重要一件事是，承諾返回的價值/狀態是不可變的，不能改變，這意味著諾言確保沒有異常行為。

##為什麼我們在JavaScript中使用Promise？   {#為什麼WE-使用promise-in-javaScript}
如果您不知道**回調地獄**，那麼讓我分享它的本質。首先，回調是另一個功能中的功能。基本上，在接收結果後執行的函數中將回調函數作為第二個參數傳遞。因此，在許多情況下，您需要嵌套回調功能，並且隨著嵌套的增加，它幾乎無法處理。因此，我們稱這是回調功能的長嵌套**回調地獄**。
因此，諾言是避免回調地獄情況的一種方式。承諾的使用可提供更好的可讀性和改善的錯誤處理。此外，您可以通過檢索返回的值並將該值傳遞給鏈中的下一個功能來更好地處理異步操作。

## Promise如何在JavaScript中起作用？   {#promise-works-in-javaScript}
現在，讓我們了解承諾背後的工作機制。請查看下面提到的圖。

{{< figure align=center src="images/what-is-a-promise.png" alt="承諾如何在JavaScript中起作用？?" >}}

根據上述工作流程，實現細節非常明確。承諾在其創建時開始執行，並處於等待響應的等待狀態。有兩個選項要么會有數據，要么在處理結束時會出現錯誤。接收到數據後，它進入.CACT（）塊，並在錯誤時進入.catch（）塊。

##如何創造諾言？   {#操作方法create-a-promise}
到目前為止，我們已經涵蓋了承諾的基本概念。現在，我們將探索如何在JavaScript中創建諾言。讓我們使用以下承諾構造函數來創造諾言。
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise構造函數將函數作為一個參數，該論點再次首先採用兩個參數，解決方案，另一個拒絕。在成功的情況下，它調用resolve（）方法，並在錯誤或拒絕時進入拒絕（）塊。
讓我們深入研究，探索諾言的創造。
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
在上面的代碼段中，您可以在Resolve（）塊中進一步撥打API調用。
現在，讓我們看看JavaScript承諾的執行模式。
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
以下是上述代碼段的輸出：
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
因此，承諾主體內部的代碼同步工作，因此打印了“同步執行”。接下來，.then（）block的工作異步並等待直到生成結果，但是程序執行並不能停止，這就是為什麼打印“ Hello Word”並將承諾執行推遲。之後，。然後。然後塊執行並返回其承諾的值。這就是JavaScript承諾的故事。同樣，由於JavaScript是單線螺紋，因此承諾用於以非阻滯方式處理異步操作。

## 結論
這是此 **JavaScript教程** 的結尾。希望您對JavaScript承諾有一個好主意。我們已經介紹了 **JavaScript ** 的承諾，為什麼我們在JavaScript中使用Promise， **Promise如何在JavaScript ** 中起作用，以及如何創造諾言。此外，我們將更多地介紹有關其高級用法和規定的主題。因此，請仔細閱讀本文，以防您為面試做準備。

## 聯繫我們
最後，[containerize.com][7]提供了有關各種令人興奮的主題的持續JavaScript教程。您可以通過在我們的社交媒體平台上關注我們，包括[Facebook][8]，[LinkedIn][9]和[Twitter][10]。

## 問一個問題
您可以在我們的[論壇][11]上讓我們知道您的問題或查詢。

##常見問題解答
**JavaScript中有什麼承諾？**
請按照此[鏈接][3]知道JavaScript中的承諾。

## 也可以看看
  * [什麼是JavaScript數據類型？ |初學者指南][1]
  * [Kubernetes多租賃和基於容器的體系結構][12]
  * [什麼是無服務器計算？ |無服務器體系結構][13]
  * [什麼是多差？ |為什麼要採用多租戶？][14]
  * [什麼是JavaScript數據類型？ |初學者指南][15]

  
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
