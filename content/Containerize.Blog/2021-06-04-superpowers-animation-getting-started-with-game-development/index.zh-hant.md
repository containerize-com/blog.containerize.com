---
title: "使用超級大國開始遊戲開發" 
seoTitle: "使用超級大國開始遊戲開發" 
description: "SuperPowers是一家具有實時協作的開源3D遊戲製造商。本教程是關於使用超級大國開始遊戲開發的開始。" 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "遊戲對象的行為和運動由動畫控制。在本遊戲開發教程中，我們將學習如何使遊戲角色動畫。" 
url: /zh-hant/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## 遊戲對象的行為和運動由動畫控制。在本遊戲開發教程中，我們將學習如何使遊戲角色動畫。

{{< figure align=center src="images/super.png" alt="開始遊戲開發">}}


## **概述**
在我們的開源遊戲開發的教程系列中，我們發表了有關一些流行主題的博客文章，例如[遊戲開發教程| Gdevelop的玩家運動][1]，[HTML5視頻遊戲程序員的遊戲開發教程][2]，[2]，[全球遊戲行業如何利用開源軟件][3]和[Gdevelop Tutorial for Thinking for Think forne fornek forking tich othins fromister for tonk invine forighting forighters啟動遊戲開發][4 ]。這篇教程文章是關於使用免費開源[Superpowers][5]開始遊戲開發的開始，涵蓋以下幾點。
  * **[遊戲動畫的類型][6]**
  * **[如何創建精靈？][7]**
  * **[使用場景][8]**
  * **[在Localhost上啟動遊戲][9]**
  * **[結論][10]**
有許多針對初學者的開源遊戲開發軟件，這些軟件具有自託管功能。但是，[Superpowers][5]是跨平台2D和3D遊戲創建軟件。它提供內置的庫和遊戲示例，使遊戲開發人員容易遊戲開發。這個免費的遊戲設計應用程序是用打字稿編寫的，所有文檔都可以在[Github][11]上獲得有關開發和部署的信息。在這篇博客文章中，我們將探索超級大國的用法。

## 遊戲動畫類型 {#types}
動畫是視頻遊戲的重要組成部分。遊戲中的角色必須響應用戶的操作，動畫應該平穩且突然。這是關於管理多個幀和動畫師完善這些幀以產生移動效果。此外，在2D和3D動畫中，對像似乎在三維空間中移動。遊戲開發人員和圖形設計師創建了3D模型。動畫取決於遊戲的性質，最常見的類型如下。
**步行動畫：**步行動畫是關於步行過程的創建，在該過程中，角色在每個步驟中都動畫並提供步行插圖。
**空閒動畫：**這是一種非常重要的動畫類型，其中字符不做任何事情，因為用戶不按任何控制器。
**運行動畫**：運行動畫是遊戲對象執行運行週期的每個遊戲的一部分。這種類型是最常見的類型，需要從開發人員那裡得到更多關注。
**戰鬥動畫**：在格鬥遊戲中，多個遊戲角色彼此戰鬥。
**跳躍動畫**：這種動畫需要更好的技能和專業知識。角色壓縮並釋放身體以執行跳躍插圖。

## 如何創建精靈？   {#sprites}
遊戲製作指南的這一部分允許用戶創建項目並開始為遊戲創建精靈。精靈是非靜態圖像或圖形，不僅在遊戲中使用，而且是網頁設計的一部分。這些通常是在不斷刷新的背景中繪製的。
繼續前進之前，請確保您已經在計算機上設置了超級大國。您可以按照此鏈接[視頻遊戲程序員的HTML5遊戲開發教程][2]來設置此免費遊戲創建平台。
首先，將應用程序打開到瀏覽器中，讓我們創建一個新的空項目。如下圖所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="開始遊戲開發">}}

創建新的空項目後，您將登陸項目空間。左側面板有菜單選項。因此，單擊“+”按鈕以打開資產對話框。選擇Sprite選項並點擊創建。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="遊戲製作指南">}}

現在，上傳將添加行為的圖像。您可以通過單擊放置在右上角的按鈕來做到這一點。該面板是關於對象的配置。
接下來，您可以根據自己的選擇設置網格大小。畫布有兩部分。上部顯示了整個表格，下部顯示了我們打算應用動畫的選定部分。您可以通過按下右側面板的按鈕“設置”來完成此操作，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="遊戲開發教程">}}

之後，讓我們創建動畫。我們可以通過單擊“動畫”選項卡中的“新”按鈕來做到這一點。您可以看到下面的圖像。

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="初學者的遊戲開發軟件">}}


## 使用場景 {#scenes}
在本節中，我們將為遊戲添加一個場景。為此，再次打開“資產”對話框，然後選擇“場景”，然後按創建按鈕。現在，通過單擊右上角的星按鈕來創建演員，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="如何為初學者製作遊戲">}}

之後，通過單擊放置在右側面板上的“新組件”按鈕來創建新組件。選擇“ Sprite Renderer”並點擊創建。然後，將創建的精靈從左側面板拖動，然後將其放在Sprite渲染器部分下方。此外，創建另一個名為“相機”的演員，同樣，創建一個名為“相機”的新組件。
您可以更改相機模式，因此將其更改為“拼字法”模式，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="開始遊戲開發，">}}

在左下角，導航到“設置”選項並將其打開。在“ Sprite”和“ Tile Map”部分下，插入16個針對“單位像素”。然後在“默認相機模式”中，在“場景”部分下選擇2D。此外，在“瓷磚地圖”部分，默認寬度36，默認高度28和瓷磚集網格大小16中。沒有必要保存它，而是所有內容都在AutoSave上。

## 在localhost   {#local}上啟動遊戲
因此，我們將接近推出第一場遊戲的超能力動畫。但是，再次轉到“設置”選項卡，然後從左側面板拖動場景，然後將其放在“啟動場景”上，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="如何為初學者製作遊戲">}}

現在，單擊“播放器”，然後在“ Sprite Renderer”組件下，選擇動畫來針對“動畫”屬性。最後，通過單擊放置在左上角的按鈕來啟動應用程序。新標籤將在屏幕上顯示移動對象。

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="開始遊戲開發">}}


## 結論 {#conclusion}
這是本教程的結尾，我們學會瞭如何為初學者製作遊戲。因此，當有可用的遊戲開發軟件文檔詳細文檔時，開始遊戲開髮變得容易。最後，[**containerize.com** ][12]正處於撰寫有關進一步開源主題和產品的文章的一致過程中。因此，請與此[遊戲開發軟件][13]類別保持聯繫，以進行常規更新。

## 探索
  * [gdevelop][14]
  * [godot][15]
  * [超能力][5]
  * [可可創造者][16]
  * [panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
