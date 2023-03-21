---
title: "如何使用開源Gdevelop在划痕上製作遊戲" 
seoTitle: "如何使用開源Gdevelop在划痕上製作遊戲" 
description: "如何從頭開始製作遊戲？ Gdevelop提供了一個邏輯UI，充滿了許多組件和行為，用於構建用於網絡，桌面，iOS和Android的視頻遊戲。" 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "該遊戲開發教程解釋了構建卡車賽車遊戲的基礎知識。您可以安裝它或使用其在線應用程序來構建令人興奮的視頻遊戲。" 
url: /zh-hant/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

##該遊戲開發教程解釋了建立卡車賽車遊戲的基礎知識。您可以安裝它或使用其在線應用程序來構建令人興奮的視頻遊戲。

{{< figure align=center src="images/gdevelop-game.png" alt="如何在刮擦上做遊戲">}}


## **概述**
在近乎過去，我們發表了許多有關開源免費遊戲開發軟件的博客文章，例如[2021年前5個免費遊戲開發軟件][1]開發教程| Gdevelop中的玩家運動][3]，[HTML5視頻遊戲程序員的遊戲開發教程][4]，[4]，[全球遊戲行業如何利用開源軟件][5]和[Gdevelop for Tutement for Thinking for Think forking othins for Homining forneking tonk instrains fromploy forking tonk inst啟動遊戲開發][6 ]。互聯網時代的最新進步帶來了視頻遊戲行業的新趨勢。一個開源遊戲構建平台提供了一個完整的生態系統，可以獨立開發遊戲，然後根據需求成熟該平台。在這篇博客文章中，我們將通過涵蓋以下幾點來學習如何使用[gdevelop][7]在刮擦上製作遊戲。
  * **[為什麼我們應該使用gdevelop？][8]**
  * **[設置項目][9]**
  * **[如何準備背景和對象？][10]**
  * **[將律師添加到對像中][11]**
  * **[運行遊戲][12]**
  * **[結論][13]**

##為什麼我們應該使用gdevelop？   {#為什麼}
[Gdevelop][7]是一種開源遊戲軟件。它具有自我託管能力，並且本質上是跨平台。您可以下載並安裝它，也可以使用其在線版本進行播放。用戶不需要獲得任何編程知識來使用此遊戲構建器。最重要的是，它提供了帶有預構建的遊戲行為，模板和對象的拖放用戶界面。這個免費的遊戲開發軟件可配置高度，並提供與第三方庫的集成。有關此免費工具的更多信息，您可以檢查此鏈接以進一步了解其功能和設置過程。

##設置項目 {#setting}
在本節中，我們將創建我們的項目，以構建具有一些基本功能的卡車賽車遊戲。如果要在本地計算機上設置，請遵循此[鏈接][6]，或者可以通過轉到此[link][14]來使用在線版本。
因此，一旦單擊“創建新項目”，然後單擊“空遊戲”，您將找到以下屏幕。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="如何在刮擦上做遊戲">}}

您可以看到窗口左側的菜單欄。現在，單擊“場景”，然後雙擊“單擊以添加場景”按鈕。之後，您將降落在遊戲屏幕上，可以在其中創建遊戲對象，背景和行為。向前邁進，單擊右側面板上放置的“添加新對象”，您將看到以下窗口。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Gdevelop教程">}}


##如何準備背景和對象？   {#準備}
在搜索欄中，查找卡車對象，然後雙擊它，然後在結果中添加“添加到遊戲”。重複兩個車輪和平台對象的此步驟。現在，右鍵單擊綠色對象並進行編輯。

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="遊戲開發教程">}}


##向對象添加behviors   {#add}
接下來，將綠色的基礎拖到遊戲屏幕上，並根據您的願望調整其高度和寬度。將卡車對象拖動並將其放在遊戲屏幕上，然後將其放在車輪對像上。向前移動，右鍵單擊卡車主體並擊中“編輯對象卡車機構”，單擊行為，單擊“向對象添加行為”，然後單擊“物理引擎2.0”，您將看到以下窗口。

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="如何在刮擦上做遊戲">}}

在此窗口中，您可以修改配置，例如密度，寬度和高度。現在，重複綠色對象的相同過程，但請保留類型的“靜態”並點擊“應用”按鈕。同樣，編輯卡車機構對象，點擊“編輯點”，點擊“ EDD點”，然後插入前輪的名稱（即本教程中的FW）。將在對像上創建一個點，只需將該點拖到車輪位置即可。還要重複後輪的過程，並將X和Y到0進行，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="遊戲開發教程">}}

之後，編輯兩個輪子對象並調整其點。此外，再次轉到輪子的編輯選項，點擊“行為”選項卡，選擇“ Physics Engine 2.0”，並設置類型，半徑和密度的值，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="遊戲設計軟件">}}

現在，單擊“新場景”選項卡，點擊“添加新事件”，點擊“添加條件”，搜索“在場景開始時”，然後點擊“確定”。然後，點擊“添加動作”搜索“相機中心X位置”，然後設置以下配置。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="免費遊戲開發軟件">}}

現在，複製操作，但請確保將復制的操作設置為“ Y”。添加另一個名為“ Change Camera Zoom”的動作，將其設置為0.4，然後將此動作拖到頂部。添加另一個動作，搜索“添加車輪接頭”，並為兩個車輪設置配置，如下所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="遊戲開髮指南">}}

之後，添加一個新條件，搜索“按鍵”並將其設置為左。現在，添加操作，選擇第一個輪子，搜索線性速度X”，修改標誌以“減去”並設置值50。重複此步驟的正確鍵，但請確保添加中的修改符號如下所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="遊戲開發教程">}}


##運行遊戲 {#run}
完成所有步驟後。現在是時候按下放置在左上角的按鈕來運行遊戲了。它將將游戲啟動到新窗口。

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="如何在刮擦上做遊戲">}}


##結論 {#conclusion}
這是這篇博客文章的結尾，您肯定知道如何在刮擦上製作遊戲。但是，由於該行業越來越受歡迎和需求，市場上有許多免費的**遊戲設計軟件**。其背後有幾個原因，例如開源軟件可擴展，可配置，具有成本效益且易於維護。此外，隨著開發人員發現在所有流行平台（例如Android，iOS，Web和桌面）上運行的遊戲非常舒適，對跨平台遊戲製造商的需求正在增加。另一方面，大流行的出現改變了人們的生活，現在他們更喜歡留在室內。因此，人們傾向於在閒暇時間玩電子遊戲。
最後，[Containerize.com][15]都將通過一些更有趣的**遊戲開發教程**增強其教程基礎。請與此[遊戲開發軟件][16]類別保持聯繫，以進行常規更新。

## 探索
  * **[gdevelop][7]**
  * **[godot][17]**
  * **[超能力][18]**
  * **[可可創作者][19]**
  * **[panda3d][20]**
  * **[PlayCanvas][21]**
  * **[使用超能力開始遊戲開發][2]**
  * **[遊戲開發教程| gdevelop的球員運動][3]**
  * **[HTML5視頻遊戲程序員遊戲開發教程][4]**
  * **[全球遊戲行業如何利用開源軟件][5]**
  * **[gdevelop for初學者開始遊戲開發的教程][6]**
  *[ **2021年的前5名免費遊戲開發軟件** ][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
