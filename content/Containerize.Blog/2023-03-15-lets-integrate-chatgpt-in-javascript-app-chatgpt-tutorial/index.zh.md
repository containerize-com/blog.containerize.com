---
title: "让我们将ChatGpt集成到JavaScript应用中| chatgpt教程" 
seoTitle: "将chatgpt集成到JavaScript应用中" 
description: "只需运行“ npm i chatgpt”，然后开始在您的node.js应用程序中使用openai chatbot。请按照本指南了解如何将Chatgpt集成到JavaScript应用程序中。" 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "只需运行“ npm i chatgpt”，然后开始在您的node.js应用程序中使用openai chatbot。请按照本指南了解如何将Chatgpt集成到JavaScript应用程序中。" 
url: /zh/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## 通过集成基于GPT-3的病毒聊天机器人来简化业务软件。该CHATGPT教程演示了集成步骤和代码段。

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="将chatgpt集成到JavaScript应用中">}}


## 概述
你好读者！非常感谢您对我们在[chatgpt][1]集成上发表的博客文章的压倒性回应。我们在这里有另一个有用的**chatgpt教程**您的兴趣。此外，我们将循环发表有益于您的学者和职业的文章。但是，我们已经启动了JavaScript教程的[系列][20][20]，因此是编写指南的最佳时机，该指南以编程方式将如何**整合在JavaScript AQPP**中。此外，我们将编写代码段，以使此基于GPT-3的**病毒聊天机器人**功能。为此，我们将在node.js应用中启用chatgpt功能。因此，在浏览本指南时，Node.js的先验知识的基本水平是一个加号。
以下各节将在本chatgpt教程中介绍：
* **[前提条件-Chatgpt JavaScript包装器][2]**
* **[与node.js应用程序集成][3]**

## 前提条件-Chatgpt JavaScript包装器 {#Pre-Requisites --- Chatgpt-Javascript-Wrapper-}
本节演示了在基于node.js的应用程序中启用chatgpt集成所需的要求。要求很简单且易于在系统上安装。
以下是练习此Chatgpt JavaScript集成的预要求：

 * [nodejs4](>= 18)

 * [NPM5](>=9)
一旦安装了上述先决条件，下一步就是获取OpenAI API键。此键用于以编程方式向ChatGPT提出API请求。因此，请访问此[链接][6]，以了解如何获取OpenAI API密钥，以防您不知道该过程。
请将您的API密钥保持在安全的位置，这就是需求阶段的全部。

## chatgpt与node.js应用程序集成 {#chatgpt-integration-with-node.js-application}
现在，我们都将**整合在JavaScript应用程序中。**首先，打开终端并运行以下命令：
```
npm i chatgpt
```
成功运行后，请按照以下步骤和代码片段向GPT-3模型提出请求，以编程与CHATGPT进行编程：
* 导入chatgptapi。
* 使用OpenAI API键初始化构造函数。
* 调用SendMessage方法将消息发送到GPT-3模型并接收响应。
* 显示响应。
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
将上述代码段复制并粘贴到主服务器文件中，然后将以下命令运行到您的终端：
```
node index.js
```
**注意**：请添加（“ type”：“模块”，）到您的软件包。
您可以在下图中看到输出：

{{< figure align=center src="images/chatgpt_tutorial.png" alt="chatgpt教程">}}

此外，此Chatgpt JavaScript包装器可让您跟踪对话并发送后续消息。您唯一需要做的就是在请求正文中传递“ parentMessageId”，如下所示：
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
同样，您可以探索[此处][7]提供的许多其他方法。这种OpenAI聊天机器人集成可以为您的企业级应用程序带来竞争优势。

## 结论
这一点使我们到了这个**chatgpt教程的结尾**。我们希望您学会了如何**在JavaScript应用中整合ChatGpt**。此外，您拥有可以在本地计算机上测试的工作代码段。如果您想在Node.js应用程序中学习**ChatGpt Integration**，则此博客文章是一项资产。

## 联系我们
最后，[containerize.com][8]不断写有关不同主题的博客文章。此外，您可以在我们的社交媒体帐户[Facebook][9]，[LinkedIn][10]和[Twitter][11]上关注我们。

## 问一个问题
您可以在[论坛][12]上让我们知道您的问题或查询。

## 常见问题解答
**如何将Chatgpt与JavaScript集成？**
请按照此ChatGpt [教程][2]学习步骤和代码段，以编程在JavaScript应用程序中集成Chatgpt。

## 也可以看看
  * [人工智能简介|什么是AI？][13]
  * [如何将Chatgpt与Google床单整合][14]
  * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT][15]
  * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
  * [Google文档与Chatgpt集成| Openai GPT-3][17]
  * [什么是前5个开源AI框架][18]
  * [什么是生成的ai |生成人工智能][19]
  

  
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
