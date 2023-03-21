---
title: "如何使用開放式超級大國開發視頻遊戲" 
seoTitle: "如何使用開放式超級大國開發視頻遊戲" 
description: "如何開發電子遊戲？ SuperPowers是一種開源HTML5遊戲開發。它是跨平台，允許用戶構建動畫2D和3D遊戲。" 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "免費的視頻遊戲設計軟件，用於視頻遊戲開發具有離線模式。自助主機，創建動畫2D＆amp;具有聲音效果和字體的3D遊戲。" 
url: /zh-hant/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## 通過離線模式免費的視頻遊戲設計軟件，用於視頻遊戲開發。自助主機，創建具有聲音效果和字體的動畫2D和3D遊戲。

{{< figure align=center src="images/superpowers.png" alt="如何開發電子遊戲">}}


## 概述
在近乎過去，一些文章發表在[遊戲開發軟件][1]類別上，其中包括全球遊戲行業如何利用開源軟件和Gdevelop教程為初學者開始遊戲開發。隨著對娛樂遊戲的需求不斷增長，視頻遊戲開發在全球範圍內傳播得更多。但是，它涉及想法，設計發展，持續測試，發布和反饋。換句話說，它涉及設計師，軟件架構師，程序員，測試人員和支持資源。此外，還有許多類型的遊戲，例如動作遊戲，益智遊戲，賽車遊戲，認知遊戲等。
因此，為了開始使用任何3D遊戲構建器開始啟動，迫切需要一個好的遊戲開髮指南。開源社區開發了許多遊戲開發軟件，可提供企業級功能和實用程序來開發3D和2D遊戲。該HTML5遊戲開發教程將探討如何使用免費的視頻遊戲開發軟件 **SuperPowers** 開發視頻遊戲，以介紹以下幾點。
  * **[什麼是超級大國][2]**
  * **[如何在Local主機上設置？][3]**
  * **[超級大國的儀表板？][4]**
  * **[結論][5]**

## 什麼是超級大國 {#intro}
[Superpowers][6]是用於視頻遊戲開發的開源軟件。它是靈活的，健壯的和可擴展的。但是，它為動畫，3D模型和廣泛的遊戲示例提供了支持。此外，它還配備了一個離線版本，用戶可以在沒有任何Internet連接的情況下構建遊戲。發布任何項目都非常容易，並且單擊一次。有一個直觀的儀表板適合用戶，用戶可以輕鬆地瀏覽各種元素。最重要的是，有一個非常酷的是實時錯誤報告，它在其中向開發人員顯示錯誤以避免任何歧義或錯誤。超級大國很容易設置，並且需要簡單的要求才能進一步託管，這款3D遊戲構建器用打字稿編寫，並隨附有關開發和部署的所有文檔。因此，所有源代碼均可在[GitHub][7]上獲得。
超級大國提供以下要點：
  *現場錯誤報告
  *多語言
  *跨平台
  *豐富的字體和聲音效果
  *自我託管

## 如何在Localhost上設置？   {#設置}
如果您仍然想知道如何開發視頻遊戲，那麼在本文的這一部分中，我們將學習如何在Localhost上設置超級大國。在本節中，該**遊戲開髮指南**將詳細介紹設置遊戲開發環境的過程。
首先，請確保您在開始視頻遊戲開發之前已經安裝了以下先決條件：
  * git
  * npm
  * node.js
上述要求很容易且非常眾所周知，因此對於初學者來說，這將不是一項艱鉅的任務。安裝上述要求後，打開終端並運行以下命令以克隆源代碼：
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
成功克隆後，通過運行以下命令進入下載的目錄：
```
cd superpowers/core
```
現在，運行以下命令來克隆超級大國遊戲系統：
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
之後，運行以下命令進行構建：
```
npm run build
```
成功構建後，通過運行以下命令來啟動服務器：
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5遊戲開發教程">}}

現在打開瀏覽器並在以下鏈接中訪問應用程序：
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## 超級大國的儀表板？   {#特徵}
擊中上述URL後，您將看到以下主頁。有一些可以修改或創建新的空或2D平台項目的選項。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="視頻遊戲開發">}}

提出有關如何開發視頻遊戲的問題，您將在創建2D平台之後看到以下屏幕。您可以在窗口的左側看到選項，例如創建場景，設置瓷磚，遊戲地圖和玩家。有一個實時編碼選項，您可以在其中編碼用戶的行為。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="視頻遊戲開發">}}

此外，左側有一個設置欄，您可以在其中設置動畫，渲染，上傳或下載圖像。在左側，可以選擇為您的項目添加更多資產，如下圖所示。它包括一個3D模型立方模型，如果要修改字體，則包括FINT選項。此外，用戶可以添加更多場景，腳本，著色器和精靈。此外，這款開源3D遊戲構建器還使您可以在遊戲中添加各種聲音效果，以吸引遊戲玩家，具有最佳的遊戲聲音效果。最後但並非最不重要的一點是，它還可以添加瓷磚地圖和瓷磚集。

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="視頻遊戲設計">}}

同樣，在瀏覽了這篇遊戲文章之後，您可以進一步探索並使用所有功能。此外，您將能夠了解如何使用SuperPowers視頻遊戲構建器繼續進行。此遊戲開發軟件有在線支持。

## **結論**   {#conclusion}
這將結束本HTML5遊戲開髮指南。希望，如果您渴望開始視頻遊戲開發，這篇博客文章將為您提供幫助。我們已經探索了什麼是超級大國，如何開發視頻遊戲，這是一個開源3D遊戲構建器，我們也在Localhost上完成了其安裝程序。有許多開源**視頻遊戲設計應用程序**可以讓用戶從頭開始構建遊戲。視頻遊戲程序員使用基本的遊戲設計原理來構建高質量的遊戲。您將在[Blog.Containerize.com][8]中了解有關構建2D和3D遊戲的更多信息。下面的“ Explore”部分中提到的其他開源，自託管的3D遊戲製造商和相關文章。
最後，Containerize.com正在不斷撰寫有關進一步開源產品和主題的博客文章。因此，請與常規更新的[9][][10]類別保持聯繫。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
您可能會發現以下鏈接相關：
  * [][14][gdevelop][14]
  * [][14][Godot][15]
  * [][14][超能力][6]
  * [][14][可可創造者][16]
  * [][14][PANDA3D][17]
  * **[使用超能力開始遊戲開發][18]**
  * **[遊戲開發教程| gdevelop的球員運動][19]**
  *[**如何使用開源Gdevelop**在刮擦上製作遊戲**][20]
  * **[全球遊戲行業如何利用開源軟件][21]**
  * **[初學者開始遊戲開發的gdevelop教程][22]**
  *[ **2021年的前5名免費遊戲開發軟件** ][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
