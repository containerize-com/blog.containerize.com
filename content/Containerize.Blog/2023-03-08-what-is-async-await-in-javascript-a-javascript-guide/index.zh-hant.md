---
title: "JavaScript中的異步正在等待什麼？ | JavaScript指南" 
seoTitle: "JavaScript中的異步正在等待什麼？" 
description: "JavaScript中的異步正在等待什麼？與JavaScript中的傳統承諾相比，異步和等待關鍵字用於操作異步操作。" 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中的異步正在等待什麼？與JavaScript中的傳統承諾相比，異步和等待關鍵字用於操作異步操作。" 
url: /zh-hant/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017引入了JavaScript異步/等待，這是周圍的包裝紙。異步/等待以現代和最簡單的方式消費基於承諾的API。

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="JavaScript中的異步正在等待什麼？?">}}


## 概述
我們在以前的博客文章中介紹了[JavaScript Probors][1]，如果您想清楚地了解JavaScript承諾背後的概念，則必須訪問。在這一系列的[JavaScript教程][2]中，我們在這裡提供了另一份JavaScript指南，該指南將展示JavaScript異步/等待的現代特徵。這篇博客文章適用於那些對JavaScript承諾的知識的人。此外，我們將嘗試介紹JavaScript中的異步/等待的  **，以及當我們需要使用異步/等待時。此外，我們還將用異步/等待的方式介紹處理錯誤。因此，對此**  JavaScript異步/等待教程**進行詳盡的閱讀，以標記已檢查的概念。
我們將在此JavaScript異步中詳細介紹以下各節：等待教程：
*  **[javaScript中的異步/等待|異步等待語法][3]**  
*  **[何時使用異步/等待？][4]**  
*  **[使用異步/等待的錯誤處理][5]**  

## JavaScript中的異步/等待什麼是|異步等待語法 {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

ECMAScript 2017發布了JavaScript的新功能，Async/等待是這些功能中使用最廣泛的功能之一。異步/等待是建立在承諾之上的，實際上是處理JavaScript承諾的現代方式。
讓我們看看如何在JavaScript代碼中使用async/等待關鍵字：
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
好吧，函數開始時的異步關鍵字意味著此函數將返回承諾。因此，等待關鍵字始終在異步函數的主體內部使用，以暫停該函數的執行，直到承諾解決。這裡要注意的重要一點是，您無法在常規功能的身體內部使用等待關鍵字。但是，您只能使用與異步關鍵字聲明的異步函數一起使用。

## 何時使用異步/等待？ {#When-to-use-AsyncAwait}

到目前為止，您可以回答  **在JavaScript**  中等待什麼是異步。由於這只是圍繞傳統JavaScript承諾的包裝紙，因此您最好使用這種新的方式來以更清潔，更可讀性的方式創建和處理承諾。此外，您可以擺脫多個Promise.then（）使用異步/等待的呼叫，這最終使源代碼更易於管理和可維護。等待的關鍵字將.ly（）語句封裝到一行中。

## 與異步/等待的錯誤處理 {#Error-handling-with-AsyncAwait}

在企業級軟件開發方面，錯誤處理是一項關鍵任務。有多種方法可以在異步/等待方法中捕獲錯誤。

{{< figure align=center src="images/async-await.png" alt="嘗試捕獲異步等待JavaScript">}}

 **嘗試捕獲異步等待JavaScript** ：這種錯誤處理方法沒有什麼新鮮感。但是，您可以在異步函數中使用try/catch塊，如下所示：
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
使用Try/Catch塊，您可以在異步功能的體內捕獲異常。
鑑於，還有另一種處理錯誤的方法，您可以在函數調用結束時附加.catch（）塊。由於異步/等待返回承諾，因此您在.catch（）塊中捕獲錯誤。
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
我們正在結束這個  **JavaScript異步等待教程** 。希望您對 **在JavaScript中等待什麼是異步**  。此外，我們已經瀏覽了JavaScript異步等待語法，從而使源代碼不那麼複雜。由於其豐富的使用和性能，該JavaScript功能被廣泛使用。在接下來的幾天裡，我們將進一步撰寫有關JavaScript功能和概念，以便您可以對JS概念獲得強大的命令。此外，“另見”部分中提到了其他一些有趣的文章。

## 聯繫我們
最後，[Containerize.com][6]提供了有關各種令人興奮的主題的持續JavaScript教程。您可以通過在我們的社交媒體平台上關注我們，包括[Facebook][7]，[LinkedIn][8]和[Twitter][9]。

## 問一個問題
您可以在我們的[論壇][10]上讓我們知道您的問題或查詢。

##常見問題解答
 **示例中的JavaScript中有什麼異步？** 
您可以訪問此[鏈接][3]，以了解異步等待的概念。
 **什麼是異步等待與承諾？** 
* 異步/等待使源代碼與承諾鏈接可以使源代碼變得混亂的承諾相比，源代碼更清晰和可讀。
* 錯誤處理在兩種方法中都非常相似。
* 在異步等待中調試不那麼困難。
* 承諾維持諸如待處理，解決或拒絕的國家。而異步/等待的是解決或拒絕。

## 也可以看看
  * [JavaScript中的承諾是什麼？ | JavaScript教程][1]
  * [什麼是無服務器計算？ |無服務器體系結構][11]
  * [什麼是多差？ |為什麼要採用多租戶？][12]
  * [什麼是生成的ai |生成人工智能][13]
  * [如何將Chatgpt與Google床單整合][14]
  * [如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT][15]
  * [什麼是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
  * [人工智能簡介|什麼是AI？][17]



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
