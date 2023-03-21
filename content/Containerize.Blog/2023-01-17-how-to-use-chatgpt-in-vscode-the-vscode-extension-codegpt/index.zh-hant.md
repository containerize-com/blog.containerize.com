---
title: "如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT" 
seoTitle: "如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT" 
description: "讓人工智能使用OpenAI API編寫並優化源代碼。 VSCODE擴展代碼GPT由GPT-3供電，GPT-3是開源NLP模型。" 
date: Tue, 17 Jan 2023 10:26:29 +0000
author: muhammadmustafa
summary: "本文將介紹VSCODE的ChatGpt。 OpenAI代碼生成器代碼GPT基於開源人工智能驅動的GPT-3模型。" 
url: /zh-hant/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
categories: ['Artificial intelligence']
---

## **本文將為VSCODE介紹CHATGPT。 OpenAI代碼生成器代碼GPT基於開源人工智能驅動的GPT-3型號。**

{{< figure align=center src="images/How-to-use-ChatGPT-in-VSCode-The-VSCode-Extension-CodeGPT-1.png" alt="VSCODE擴展代碼GPT">}}


## 概述
認為您是初學者或經驗豐富的程序員，並且您一直在從事開發項目。那麼，如果[人工智能供電][1] **VSCODE擴展代碼GPT** 幫助您以任何編程語言來編寫源代碼？例如，如果您要求AI編寫HTML輸入元素的代碼，並且AI返回“”。驚人的？
是的，這不僅令人驚訝，而且發人深省的事情是AI會生成我們軟件的源代碼。好吧，這篇博客文章將演示一個[OpenAi][2]**代碼生成器**名為[Code GPT][3]，該版本由[Open-Source][4]**GPT-3 **提供動力。我們將進行安裝，並設置此VSCODE擴展代碼GPT的過程。此外，我們還將探索它對開發商和社區提供的產品。但是，如果您跳過了我們最近的博客文章**  [chatgpt][5]**，則必須訪問此[link][6]以獲取此 **AI ChatBot的詳細概述。** 
我們將介紹以下幾點：
  *[**什麼是代碼GPT？**][7]
  *[**如何安裝VSCODE擴展代碼GPT？**][8]
  *[**檢索OpenAI API鍵並配置代碼GPT**][9]
  *[**開始使用代碼GPT  -  AI驅動的OpenAI Code Generator**][10]

## 什麼是代碼GPT？   {#什麼is-codegpt}
[代碼GPT][3]是一個 **Visual Studio代碼擴展** ，可讓您從編輯器中的純文本生成代碼段。此 **OpenAI代碼生成器** 基於OpenAI API來處理和生成自然語言的響應。但是，代碼GPT建立在GPT-3的頂部，該模型是預培訓的模型，因此GPT-3對代碼GPT的每個請求都進行了處理，並且該模型足夠聰明，可以採用多種情況。此外，此 **VSCODE擴展** 可讓您折射和改進代碼片段以及代碼生成。實際上，整個環境使您確切地感覺到您在Visual Studio代碼編輯器中使用[ChatGpt][11]。

## 如何安裝VSCODE擴展代碼GPT？   {#操作式安裝 -  vscode-extension-codgpt}
在本節中，我們將詳細介紹 **VSCODE擴展代碼GPT。** 為此，請確保您已經在計算機上安裝了Visual Studio代碼。您可以輕鬆地從 **[vscode Marketplace][12]** 安裝此擴展程序。
打開VSCODE編輯器，進入“擴展”，然後將代碼GPT鍵入搜索欄。名稱Codegpt將有許多擴展程序，但您必須安裝擴展名，如下圖所示：

{{< figure align=center src="images/codegpt-installation-1024x640.png" alt="代碼GPT安裝">}}

如果您遇到兼容性錯誤，請將VSCODE更新為最新版本。此外，這種VSCODE擴展在一致的發展之下，因此無法省略異常行為的機會。

## 檢索OpenAI API鍵＆配置代碼gpt   {#retirevie-openai-api-key-key-configure-coddpt-}
安裝完成後，下一步是從OpenAI [網站][13]中獲取API密鑰。您需要此API鍵來啟用**代碼GPT擴展**的功能。要獲取API，請訪問此[鏈接][13]，並創建一個帳戶，如果未創建。

{{< figure align=center src="images/openai-key-1024x630.png" alt="OEPNAI API">}}

在上圖中，您可以看到“創建新的秘密密鑰”按鈕。單擊此按鈕，您將獲得鑰匙，請將其保留在安全的空間中。現在，最後一步是將此秘密密鑰放在 **vscode擴展代碼GPT的設置中。** 為了實現這一目標，執行以下步驟：
  *按“命令+shift+p”
  *編寫代碼GPT，然後選擇“ Codegpt：設置API密鑰”
  *最後，插入鍵，然後按下“輸入”，如下圖所示：

{{< figure align=center src="images/openai-API-1024x606.png" alt="vscode的chatgpt">}}

一旦成功完成，您最終將在Visual Studio代碼中安裝**代碼GPT擴展**。在下一部分中，我們將進一步探討此VSCODE擴展程序提供的功能。

## 開始使用代碼GPT  -  AI驅動的OpenAI Code Generator   {#start-using-used-codegpt ---- an-ai-Powered-openai-code-enerator}
到目前為止，我們已經在Visual Studio代碼中設置了代碼GPT擴展名。要利用此 **vscode擴展代碼GPT** ，請按“命令+shift+p”選擇“ ask codegpt”，然後在輸入字段中寫下您的問題，例如“ html中的輸入元素的代碼”，您將獲得該問題側欄中的響應如下圖所示：

{{< figure align=center src="images/chatgpt-for-vscode-1024x522.png" alt="vscode的chatgpt">}}

此外，您可以選擇一塊代碼，並要求Codegpt解釋所選的代碼。例如，我們選擇了代碼段，並提出了VSCODE擴展名為“解釋此代碼段”，並且響應顯示在側面面板中，如下圖所示。

{{< figure align=center src="images/VSCode-Extension-Code-GPT-1024x398.png" alt="OpenAPI代碼生成器，">}}

基本上，此響應是由**開源GPT-3模型**生成和返回的。同樣，您已經看到了此VSCODE擴展名的酷，它更像是Vscode的Chatgpt。

## 包起來
總而言之，我們已經用 **ai驅動的OpenAI代碼生成器豐富了視覺工作室代碼編輯器。此外，您可以要求**  VSCODE擴展代碼GPT**解釋源代碼的特定部分。最重要的是，您可以找到所選代碼段附加的問題，該問題可以帶來該VSCODE擴展名建議的改進。最後，“另見”部分中列出了一些非常相關的文章。
最後，[Containerize.com][4]不斷地撰寫有關進一步開源產品和主題的博客文章。此外，您可以在我們的社交媒體帳戶[Facebook][14]，[LinkedIn][15]和[Twitter][16]上關注我們。

## 問一個問題
您可以在我們的[論壇][17]上讓我們知道您的問題或查詢。

## 常見問題解答
**代碼GPT是用什麼？**
[代碼GPT][3]是基於人工智能的代碼生成和優化擴展。這是建立在由OpenAI驅動的開源GPT-3之上的。有關更多詳細信息，請訪問此鏈接。
**如何將代碼GPT與VSCODE集成？**
請訪問此[鏈接][9]以安裝此AI驅動的VSCODE擴展名。

## 也可以看看
  * [什麼是OpenAi ChatBot GPT-3 | Chatgpt AI革命][6]
  * [使用免費和開源軟件自動化業務運營][18]

  
[1]: https://blog.containerize.com/category/artificial-intelligence/
[2]: https://openai.com/
[3]: https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3
[4]: https://www.containerize.com/
[5]: https://en.wikipedia.org/wiki/GPT-3
[6]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[7]: #What-is-CodeGPT
[8]: #How-to-install-the-VSCode-extension-CodeGPT
[9]: #Retrieve-OpenAI-API-Key-configure-CodeGPT-
[10]: #Start-using-CodeGPT---an-AI-Powered-OpenAI-Code-Generator
[11]: https://openai.com/blog/chatgpt/
[12]: https://marketplace.visualstudio.com/vscode
[13]: https://beta.openai.com/account/api-keys
[14]: https://web.facebook.com/containerize
[15]: https://www.linkedin.com/company/containerize/
[16]: https://twitter.com/containerize_co
[17]: https://forum.containerize.com/
[18]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
