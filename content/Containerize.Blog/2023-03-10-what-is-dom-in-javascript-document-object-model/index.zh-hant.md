---
title: "JavaScript中的DOM是什麼？ |文檔對像模型" 
seoTitle: "JavaScript中的DOM是什麼？" 
description: "JavaScript中的DOM是什麼？本指南將演示文檔對像模型，DOM的屬性，DOM級別以及如何訪問DOM元素。" 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中的DOM是什麼？本指南將演示文檔對像模型，DOM的屬性，DOM級別以及如何訪問DOM元素。" 
url: /zh-hant/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Web瀏覽器中HTML文檔的表示為HTML DOM樹。它是一系列對象，並定義了網頁的結構。

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="JavaScript中的DOM是什麼？?">}}


## 概述
歡迎來到[JavaScript編程]系列中的另一篇令人興奮的博客文章[1]。在本文中，我們將涉及網絡開發的非常基本但必不可少的概念。是的，我們將在JavaScript中介紹文檔對像模型。過去，我們發布了使用JavaScript語言開始開發的JavaScript教程。因此，我們建議您詳細閱讀此博客文章，以免您錯過與這個重要概念有關的任何內容。讓我們開始本指南，找出 **JavaScript** ，dom屬性中的dom是什麼，以及如何以編程方式與IT進行交互。
我們將在本JavaScript指南中介紹以下主題：
  * **[什麼是文檔對像模型（DOM）？][2]**
  * **[DOM級別][3]**
  * **[什麼是域屬性以及如何訪問它們？][4]**

##什麼是文檔對像模型（DOM）？   {#什麼is-document-Object-Model}
DOM代表？**文檔對像模型（DOM）**是Web瀏覽器中網頁的表示。簡而言之，瀏覽器中HTML文檔元素的分層表示稱為文檔對像模型。它是由Web瀏覽器實際生成的樹狀形成的。它由各種節點組成，它們相互連接，形成樹狀。此外，DOM元素還附帶了屬性和事件。
實際上，DOM是一個編程界面，該界面旨在製定網頁的邏輯結構，並決定訪問頁面元素的方式。基本上，JavaScript無法識別HTML標籤，例如標題，H1和等。因此，一旦將HTML文檔加載到Web瀏覽器中，創建了DOM，則可以使JavaScript了解文檔元素。

## dom Level   {#dom-levels}
本節將展示DOM的各個級別。首先，瀏覽器中的窗口對象總是在頂部，然後有一個文檔節點。讓我們看一下下圖：

{{< figure align=center src="images/DOM.png" alt="DOM級別">}}

好吧，您可以看到上圖中的DOM元素。窗口和文檔是頂級瀏覽器對象，然後我們將HTML元素作為根。繼續前進，我們有頭部和身體節點，標題節點屬於頭節點，並且身體節點包含在Web瀏覽器中呈現和可見的所有節點。此外，身體元素包含我們可以在圖像中看到的屬性，例如包含“ HREF”屬性的錨標記。同樣，其他DOM節點包含各種屬性，例如IMG，META等。

##什麼是dom屬性以及如何訪問它們？   {#什麼 -  dom-properties and-wow-wow-wow-wow-to-access-them}
到目前為止，我們已經對JavaScript和DOM級別中的DOM提出了答案，並且我們也經歷了DOM節點。在本節中，我們將瀏覽DOM屬性，並將看到如何與它們進行交互。每個DOM元素都有一個鏈接到它的值，例如“ P”標籤具有文本屬性，IMG標籤具有圖像等。 JavaScript方法用於訪問節點的值。此外，您可以將/刪除事件偵聽器添加到DOM元素中。
您可以找到以下 **dom屬性** ：
**innerhtml**：此屬性用於設置或獲取DOM節點的HTML內容。
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**innertext**：使用此DOM屬性訪問或設置HTML元素的文本內容。
```
let textualContent = document.getElementById("customID").innerText;
```
**parentElement**：您可以使用此屬性訪問元素的父節點。
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**樣式**：更新元素的樣式屬性。
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**標題**：使用此屬性更新DOM的標題元素。
```
document.getElementById("customID").title= "this is a web page";
```
 以下是我們可以用來與JavaScript Dom交互的一些方法：
**AddEventListener（）**：此DOM方法用於將事件處理程序附加到元素上。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute（）**：此DOM方法用於將事件處理程序附加到元素上。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById（）**：獲得具有給定“ ID”的特定元素的方法。
```
let element = document.getElementById("myID");
```
**querySelector（）**：使用此方法獲取與CSS選擇器匹配的第一個子元素。
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString（）**：您可以使用此方法將元素轉換為字符串。
同樣，您可以探索許多其他方法和屬性。

## 結論
我們在這裡結束此Javasxcript教程，希望您對 **javascript** 有一個很好的理解。我們還經歷了 **DOM，DOM級別，HTML DOM樹和Dom屬性** 。這篇博客文章對於那些希望對JavasCrit概念有很強的掌握的新手來說至關重要。此外，您還可以在“另見”部分中找到其他相關文章。

## 聯繫我們
最後，[containerize.com][5]提供了有關各種令人興奮的主題的持續JavaScript教程。您可以通過在我們的社交媒體平台上關注我們，包括[Facebook][6]，[LinkedIn][7]和[Twitter][8]。

## 問一個問題
您可以在我們的[論壇][9]上讓我們知道您的問題或查詢。

##常見問題解答
**JavaScript中使用了什麼？**
您可以訪問此[鏈接][2]，以獲取此問題的詳細答案。

## 也可以看看
  * [JavaScript中的承諾是什麼？ | JavaScript教程][10]
  * [什麼是無服務器計算？ |無服務器體系結構][11]
  * [什麼是多差？ |為什麼要採用多租戶？][12]
  * [什麼是生成的ai |生成人工智能][13]
  * [JavaScript中的異步等待什麼？ | JavaScript指南][14]
  * [如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT][15]
  * [什麼是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
  * [人工智能簡介|什麼是AI？][17]

  
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
