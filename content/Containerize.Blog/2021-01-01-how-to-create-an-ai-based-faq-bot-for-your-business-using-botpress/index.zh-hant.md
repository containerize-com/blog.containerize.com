---
title: "如何使用Botpress為您的業務創建基於AI的常見問題機器人" 
seoTitle: "如何使用Botpress為您的業務創建基於AI的常見問題機器人" 
description: "在此博客文章中，我們將學習如何使用基於AI的常見問題機器人使用Botpress自動化客戶查詢。" 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "企業需要更好的客戶支持平台才能有效解決其查詢。在本教程中，我們將學習如何使用Botpress創建基於AI的常見問題機器人" 
url: /zh-hant/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

##企業需要更好的客戶支持平台才能有效解決其查詢。在本教程中，我們將學習如何使用Botpress創建基於AI的常見問題機器人

{{< figure align=center src="images/botpress-banner.png" alt="使用Botpress的FAQ機器人為您的業務">}}

FAQ自動化包括通過使用聊天機器人回答常見問題來改善客戶的在線體驗。隨著人工智能和機器學習的進步，對基於AI的對話聊天機器人的需求已獲得了很多流行和需求。這主要是因為即使業務離線，所有企業也希望增強他們的客戶體驗。對話聊天機器人使企業成為可能，為客戶提供他們想要的始終可用的高點支持。此博客文章的目的是幫助您使用Botpress設置基於AI的常見問題機器人。
在本文中，我們將了解Botpress的NLU模塊，以及自然語言理解 /處理如何有效，並可以幫助企業達到高客戶滿意度。讓我們開始吧！
* **[什麼是自然語言處理][1]** 
* [ **確定您的用例** ][2]
* [ **安裝botpress** ][3]
* [ **創建一個新的機器人** ][4]
* [ **訓練您的問答機器人** ][5]
* [ **結論** ][6]

## 什麼是自然語言處理 {#nlu}

自然語言處理（NLP）是人工智能的一個分支，可幫助計算機理解，解釋和操縱人類語言。 NLP可以幫助計算機用自己的語言與人類交流。並且，計算機可以閱讀文本，聽到語音，解釋，衡量情感。
NLP的基本任務包括令牌化和解析，詞幹，詞性標記，語言檢測和語義關係的識別。
NLU是botpress的模塊，它處理每個傳入的消息並執行意圖分類，語言標識，實體提取和插槽標記。

## 確定您的用例 {#case}

如果您想創建一個常見問題AI ChatBot，則需要為您的業務提供用例。為了本教程，我們希望用戶提出與產品定價和業務時機有關的任何隨機問題。

## 安裝Botpress {#install}

要安裝Botpress，請轉到他們的[網站][7]，單擊“免費下載”，然後選擇您的平台。對於本教程，我正在使用Mac版本。下載完成後，您可以提取ZIP文件並通過進入正確的文件夾在終端上運行以下命令。
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="botpress開始">}}


## 創建一個新機器人 {#create}

現在，我們想通過單擊 **創建bot**實際創建第一個機器人，然後選擇 **新bot** 。我將將我們的機器人稱為常見問題機器人，然後將其稱為機器人模板，在單擊 **創建bot** 之前，我將選擇**空的機器人** 。

{{< figure align=center src="images/create-bot.gif" alt="創建新機器人">}}

現在，我們將在Botpress Studio編輯器中編輯此機器人。

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="botpress在Studio中編輯">}}

現在，在錄音室中，您的左側欄上有許多菜單。但是為了簡單起見，我們將堅持問答部分。
單擊“問答”圖標，添加可能的 /常見問題及其適當的答案。

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress問答">}}


## 訓練您的常見問題機器人 {#train}

現在完成後，您必須通過單擊Q＆A部分右下角的“火車聊天機器人”按鈕來訓練您的常見問題機器人。

{{< figure align=center src="images/train-bot.gif" alt="Botpress火車機器人">}}

訓練完成後，您可以使用內置的仿真器工具測試常見問題機器人。

{{< figure align=center src="images/test-faq-bot.gif" alt="測試您的常見問題機器人">}}

現在，您已經準備好了常見問題機器人，可以通過遵循[官方嵌入][8] Botpress指南，可以在網站上部署此機器人。

## 結論 {#conclusion}

在這篇博客文章中，我們了解並了解自然語言處理。我們還通過機器人創建過程獲得動手實踐。我們培訓了一個簡單的常見問題機器人，該機器人可以幫助您的客戶了解您的業務時間和付款計劃。本教程的目的是幫助初學者快速使用Botpress的基於AI的常見問題機器人開始。



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
