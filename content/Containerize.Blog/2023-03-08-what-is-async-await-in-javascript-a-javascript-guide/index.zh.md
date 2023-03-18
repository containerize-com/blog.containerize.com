---
title: "JavaScript中的异步正在等待什么？ | JavaScript指南" 
seoTitle: "JavaScript中的异步正在等待什么？" 
description: "JavaScript中的异步正在等待什么？与JavaScript中的传统承诺相比，异步和等待关键字用于操作异步操作。" 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中的异步正在等待什么？与JavaScript中的传统承诺相比，异步和等待关键字用于操作异步操作。" 
url: /zh/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017引入了JavaScript异步/等待，这是周围的包装纸。异步/等待以现代和最简单的方式消费基于承诺的API。

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="JavaScript中的异步正在等待什么？?">}}


## 概述
我们在以前的博客文章中介绍了[JavaScript Probors] [1]，如果您想清楚地了解JavaScript承诺背后的概念，则必须访问。在这一系列的[JavaScript教程] [2]中，我们在这里提供了另一份JavaScript指南，该指南将展示JavaScript异步/等待的现代特征。这篇博客文章适用于那些对JavaScript承诺的知识的人。此外，我们将尝试介绍JavaScript中的异步/等待的**，以及当我们需要使用异步/等待时。此外，我们还将用异步/等待的方式介绍处理错误。因此，对此**JavaScript异步/等待教程**进行详尽的阅读，以标记已检查的概念。
我们将在此JavaScript异步中详细介绍以下各节：等待教程：
***[javaScript中的异步/等待|异步等待语法] [3]**
***[何时使用异步/等待？] [4]**
***[使用异步/等待的错误处理] [5]**

## 什么是异步/等待JavaScript |异步等待语法{#what-is-asyncawait in javascript-async-await-syntax}
ECMAScript 2017发布了JavaScript的新功能，Async/等待是这些功能中使用最广泛的功能之一。异步/等待是建立在承诺之上的，实际上是处理JavaScript承诺的现代方式。
让我们看看如何在JavaScript代码中使用async/等待关键字：
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
好吧，函数开始时的异步关键字意味着此函数将返回承诺。因此，等待关键字始终在异步函数的主体内部使用，以暂停该函数的执行，直到承诺解决。这里要注意的重要一点是，您无法在常规功能的身体内部使用等待关键字。但是，您只能使用与异步关键字声明的异步函数一起使用。

## 何时使用异步/等待？ {#何时使用 -  assyncawait}
到目前为止，您可以回答**在JavaScript**中等待什么是异步。由于这只是围绕传统JavaScript承诺的包装纸，因此您最好使用这种新的方式来以更清洁，更可读性的方式创建和处理承诺。此外，您可以摆脱多个Promise.then（）使用异步/等待的呼叫，这最终使源代码更易于管理和可维护。等待的关键字将.ly（）语句封装到一行中。

## 使用异步/等待的错误处理{#错误处理与assyncawait}
在企业级软件开发方面，错误处理是一项关键任务。有多种方法可以在异步/等待方法中捕获错误。

{{< figure align=center src="images/async-await.png" alt="尝试捕获异步等待JavaScript">}}

* *尝试捕获异步等待JavaScript**：这种错误处理方法没有什么新鲜感。但是，您可以在异步函数中使用try/catch块，如下所示：
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
使用Try/Catch块，您可以在异步功能的体内捕获异常。
鉴于，还有另一种处理错误的方法，您可以在函数调用结束时附加.catch（）块。由于异步/等待返回承诺，因此您在.catch（）块中捕获错误。
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

## 结论
我们正在结束这个**JavaScript异步等待教程**。希望您对**在JavaScript中等待什么是异步**。此外，我们已经浏览了JavaScript异步等待语法，从而使源代码不那么复杂。由于其丰富的使用和性能，该JavaScript功能被广泛使用。在接下来的几天里，我们将进一步撰写有关JavaScript功能和概念，以便您可以对JS概念获得强大的命令。此外，“另见”部分中提到了其他一些有趣的文章。

## 联系我们
最后，[Containerize.com] [6]提供了有关各种令人兴奋的主题的持续JavaScript教程。您可以通过在我们的社交媒体平台上关注我们，包括[Facebook] [7]，[LinkedIn] [8]和[Twitter] [9]。

## 问一个问题
您可以在我们的[论坛] [10]上让我们知道您的问题或查询。

## 常见问题解答
* *示例中的JavaScript中有什么异步？**
您可以访问此[链接] [3]，以了解异步等待的概念。
* *什么是异步等待与承诺？**
* 异步/等待使源代码与承诺链接可以使源代码变得混乱的承诺相比，源代码更清晰和可读。
* 错误处理在两种方法中都非常相似。
* 在异步等待中调试不那么困难。
* 承诺维持诸如待处理，解决或拒绝的国家。而异步/等待的是解决或拒绝。

## 也可以看看
  * [JavaScript中的承诺是什么？ | JavaScript教程] [1]
  * [什么是无服务器计算？ |无服务器体系结构] [11]
  * [什么是多差？ |为什么要采用多租户？] [12]
  * [什么是生成的ai |生成人工智能] [13]
  * [如何将Chatgpt与Google床单整合] [14]
  * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT] [15]
  * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命] [16]
  * [人工智能简介|什么是AI？] [17]
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
