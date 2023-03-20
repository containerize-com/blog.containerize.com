---
title: "JavaScript中的DOM是什么？ |文档对象模型" 
seoTitle: "JavaScript中的DOM是什么？" 
description: "JavaScript中的DOM是什么？本指南将演示文档对象模型，DOM的属性，DOM级别以及如何访问DOM元素。" 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中的DOM是什么？本指南将演示文档对象模型，DOM的属性，DOM级别以及如何访问DOM元素。" 
url: /zh/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Web浏览器中HTML文档的表示为HTML DOM树。它是一系列对象，并定义了网页的结构。

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="JavaScript中的DOM是什么？?">}}


## 概述
欢迎来到[JavaScript编程]系列中的另一篇令人兴奋的博客文章[1]。在本文中，我们将涉及网络开发的非常基本但必不可少的概念。是的，我们将在JavaScript中介绍文档对象模型。过去，我们发布了使用JavaScript语言开始开发的JavaScript教程。因此，我们建议您详细阅读此博客文章，以免您错过与这个重要概念有关的任何内容。让我们开始本指南，找出**JavaScript**，dom属性中的dom是什么，以及如何以编程方式与IT进行交互。
我们将在本JavaScript指南中介绍以下主题：
***[什么是文档对象模型（DOM）？][2]**
***[DOM级别][3]**
***[什么是域属性以及如何访问它们？][4]**

## 什么是文档对象模型（DOM）？ {#什么is-document-Object-Model}
DOM代表？**文档对象模型（DOM）**是Web浏览器中网页的表示。简而言之，浏览器中HTML文档元素的分层表示称为文档对象模型。它是由Web浏览器实际生成的树状形成的。它由各种节点组成，它们相互连接，形成树状。此外，DOM元素还附带了属性和事件。
实际上，DOM是一个编程界面，该界面旨在制定网页的逻辑结构，并决定访问页面元素的方式。基本上，JavaScript无法识别HTML标签，例如标题，H1和等。因此，一旦将HTML文档加载到Web浏览器中，创建了DOM，则可以使JavaScript了解文档元素。

## dom Level {#dom-levels}
本节将展示DOM的各个级别。首先，浏览器中的窗口对象总是在顶部，然后有一个文档节点。让我们看一下下图：

{{< figure align=center src="images/DOM.png" alt="DOM级别">}}

好吧，您可以看到上图中的DOM元素。窗口和文档是顶级浏览器对象，然后我们将HTML元素作为根。继续前进，我们有头部和身体节点，标题节点属于头节点，并且身体节点包含在Web浏览器中呈现和可见的所有节点。此外，身体元素包含我们可以在图像中看到的属性，例如包含“ HREF”属性的锚标记。同样，其他DOM节点包含各种属性，例如IMG，META等。

## 什么是dom属性以及如何访问它们？ {#什么 -  dom-properties and-wow-wow-wow-wow-to-access-them}
到目前为止，我们已经对JavaScript和DOM级别中的DOM提出了答案，并且我们也经历了DOM节点。在本节中，我们将浏览DOM属性，并将看到如何与它们进行交互。每个DOM元素都有一个链接到它的值，例如“ P”标签具有文本属性，IMG标签具有图像等。 JavaScript方法用于访问节点的值。此外，您可以将/删除事件侦听器添加到DOM元素中。
您可以找到以下**dom属性**：
**innerhtml**：此属性用于设置或获取DOM节点的HTML内容。
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**innertext**：使用此DOM属性访问或设置HTML元素的文本内容。
```
let textualContent = document.getElementById("customID").innerText;
```
**parentElement**：您可以使用此属性访问元素的父节点。
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**样式**：更新元素的样式属性。
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**标题**：使用此属性更新DOM的标题元素。
```
document.getElementById("customID").title= "this is a web page";
```
 以下是我们可以用来与JavaScript Dom交互的一些方法：
**AddEventListener（）**：此DOM方法用于将事件处理程序附加到元素上。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute（）**：此DOM方法用于将事件处理程序附加到元素上。
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById（）**：获得具有给定“ ID”的特定元素的方法。
```
let element = document.getElementById("myID");
```
**querySelector（）**：使用此方法获取与CSS选择器匹配的第一个子元素。
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString（）**：您可以使用此方法将元素转换为字符串。
同样，您可以探索许多其他方法和属性。

## 结论
我们在这里结束此Javasxcript教程，希望您对**javascript**有一个很好的理解。我们还经历了**DOM，DOM级别，HTML DOM树和Dom属性**。这篇博客文章对于那些希望对JavasCrit概念有很强的掌握的新手来说至关重要。此外，您还可以在“另见”部分中找到其他相关文章。

## 联系我们
最后，[containerize.com][5]提供了有关各种令人兴奋的主题的持续JavaScript教程。您可以通过在我们的社交媒体平台上关注我们，包括[Facebook][6]，[LinkedIn][7]和[Twitter][8]。

## 问一个问题
您可以在我们的[论坛][9]上让我们知道您的问题或查询。

## 常见问题解答
**JavaScript中使用了什么？**
您可以访问此[链接][2]，以获取此问题的详细答案。

## 也可以看看
  * [JavaScript中的承诺是什么？ | JavaScript教程][10]
  * [什么是无服务器计算？ |无服务器体系结构][11]
  * [什么是多差？ |为什么要采用多租户？][12]
  * [什么是生成的ai |生成人工智能][13]
  * [JavaScript中的异步等待什么？ | JavaScript指南][14]
  * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT][15]
  * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
  * [人工智能简介|什么是AI？][17]

  
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
