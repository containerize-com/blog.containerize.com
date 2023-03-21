---
title: "讓我們將ChatGpt集成到JavaScript應用中| chatgpt教程" 
seoTitle: "將chatgpt集成到JavaScript應用中" 
description: "只需運行“ npm i chatgpt”，然後開始在您的node.js應用程序中使用openai chatbot。請按照本指南了解如何將Chatgpt集成到JavaScript應用程序中。" 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "只需運行“ npm i chatgpt”，然後開始在您的node.js應用程序中使用openai chatbot。請按照本指南了解如何將Chatgpt集成到JavaScript應用程序中。" 
url: /zh-hant/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## 通過集成基於GPT-3的病毒聊天機器人來簡化業務軟件。該CHATGPT教程演示了集成步驟和代碼段。

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="將chatgpt集成到JavaScript應用中">}}


## 概述
你好讀者！非常感謝您對我們在[chatgpt][1]集成上發表的博客文章的壓倒性回應。我們在這裡有另一個有用的 **chatgpt教程** 您的興趣。此外，我們將循環發表有益於您的學者和職業的文章。但是，我們已經啟動了JavaScript教程的[系列][20][20]，因此是編寫指南的最佳時機，該指南以編程方式將如何**整合在JavaScript AQPP**中。此外，我們將編寫代碼段，以使此基於GPT-3的**病毒聊天機器人**功能。為此，我們將在node.js應用中啟用chatgpt功能。因此，在瀏覽本指南時，Node.js的先驗知識的基本水平是一個加號。
以下各節將在本chatgpt教程中介紹：
  * **[前提條件-Chatgpt JavaScript包裝器][2]**
  * **[與node.js應用程序集成][3]**

## 前提條件-Chatgpt JavaScript包裝器 {#Pre-Requisites -------------------------------------
本節演示了在基於node.js的應用程序中啟用chatgpt集成所需的要求。要求很簡單且易於在系統上安裝。
以下是練習此Chatgpt JavaScript集成的預要求：

 * [nodejs4](>= 18)

 * [NPM5](>=9)
一旦安裝了上述先決條件，下一步就是獲取OpenAI API鍵。此鍵用於以編程方式向ChatGPT提出API請求。因此，請訪問此[鏈接][6]，以了解如何獲取OpenAI API密鑰，以防您不知道該過程。
請將您的API密鑰保持在安全的位置，這就是需求階段的全部。

## chatgpt與node.js應用程序集成 {#chatgpt-integration-with-node.js-application}
現在，我們都將**整合在JavaScript應用程序中。**首先，打開終端並運行以下命令：
```
npm i chatgpt
```
成功運行後，請按照以下步驟和代碼片段向GPT-3模型提出請求，以編程與CHATGPT進行編程：
 *導入chatgptapi。
 *使用OpenAI API鍵初始化構造函數。
 *調用SendMessage方法將消息發送到GPT-3模型並接收響應。
 *顯示響應。
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
將上述代碼段複製並粘貼到主服務器文件中，然後將以下命令運行到您的終端：
```
node index.js
```
**注意**：請添加（“ type”：“模塊”，）到您的軟件包。
您可以在下圖中看到輸出：

{{< figure align=center src="images/chatgpt_tutorial.png" alt="chatgpt教程">}}

此外，此Chatgpt JavaScript包裝器可讓您跟踪對話並發送後續消息。您唯一需要做的就是在請求正文中傳遞“ parentMessageId”，如下所示：
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
同樣，您可以探索[此處][7]提供的許多其他方法。這種OpenAI聊天機器人集成可以為您的企業級應用程序帶來競爭優勢。

## 結論
這一點使我們到了這個**chatgpt教程的結尾**。我們希望您學會瞭如何**在JavaScript應用中整合ChatGpt **。此外，您擁有可以在本地計算機上測試的工作代碼段。如果您想在Node.js應用程序中學習**  ChatGpt Integration**，則此博客文章是一項資產。

## 聯繫我們
最後，[containerize.com][8]不斷寫有關不同主題的博客文章。此外，您可以在我們的社交媒體帳戶[Facebook][9]，[LinkedIn][10]和[Twitter][11]上關注我們。

## 問一個問題
您可以在[論壇][12]上讓我們知道您的問題或查詢。

## 常見問題解答
**如何將Chatgpt與JavaScript集成？**
請按照此ChatGpt [教程][2]學習步驟和代碼段，以編程在JavaScript應用中集成Chatgpt。

## 也可以看看
  * [人工智能簡介|什麼是AI？][13]
  * [如何將Chatgpt與Google床單整合][14]
  * [如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT][15]
  * [什麼是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
  * [Google文檔與Chatgpt集成| Openai GPT-3][17]
  * [什麼是前5個開源AI框架][18]
  * [什麼是生成的ai |生成人工智能][19]

  
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
