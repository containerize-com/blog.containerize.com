---
title: "遊戲開發教程| gdevelop的球員運動" 
seoTitle: "遊戲開發教程| gdevelop的球員運動" 
description: "遵循本遊戲開發教程以了解基本遊戲功能。 Gdevelop是用於構建和發布遊戲的免費遊戲創建軟件。" 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "屏幕上的對像是任何遊戲的關鍵部分。在本遊戲開髮指南中，我們將學習如何控制和移動Gdevelop中的遊戲對象。" 
url: /zh-hant/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## 屏幕上移動對像是任何遊戲的關鍵部分。在本遊戲開髮指南中，我們將學習如何控制和移動Gdevelop中的遊戲對象。

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="遊戲開發教程">}}


## **概述**
開源社區每分鐘都在出現。有跨平台遊戲，手機遊戲和桌面遊戲。各種類型的遊戲包括動作遊戲，冒險遊戲，角色扮演遊戲，體育遊戲，益智遊戲，仿真遊戲等。因此，所有這些不同的遊戲類型都給了所有年齡段的用戶傾向於玩這些遊戲，從而給予了巨大的交通。
此外，大流行帶來了居住全球生活方式的巨大變化。人們現在有更多的時間。所有離線活動都已在線。因此，他們傾向於選擇在線軟件來執行專業職責和視頻遊戲，以防娛樂。由於所有這些原因，該行業已獲得可持續性和用戶和開發人員的支持。在最近的過去，我們撰寫了諸如視頻遊戲程序員的[HTML5遊戲開發教程][1]，[1]，[全球遊戲行業如何利用開源軟件][2]和[Gdeveloping for初學者開始遊戲開發]][3]。在本遊戲開發教程中，我們將介紹以下幾點。
  * **[gdevelop的特徵探索][4]**
  * **[在遊戲中工作][5]**
  * **[結論][6]**

## 特徵gdevelop   {#features}的探索}
[Gdevelop][7]是一個開源遊戲平台。它是高度擴展的，並提供了一個邏輯接口，用戶可以輕鬆導航。此免費軟件用C ++，Typescript和JavaScript編寫。此外，還有有關開發和部署的全面文件。所有源代碼均可在GitHub上找到。此外，有許多功能使該遊戲使軟件突出。讓我們看看一些關鍵功能。
**跨平台**：這個遊戲創建平台是乘數的，並且可以部署在MacOS，Linux和Windows等幾乎所有流行的操作系統上。
**導出選項**：gdevelops允許用戶只需單擊Android，iOS和Web即可導出開發的遊戲。遊戲所有者可以在他們的遊戲中顯示視頻廣告，並且在Admob的支持下可能是可能的。
**豐富的遊戲對象**：這家開源遊戲製造商提供了各種遊戲對象，例如具有動畫，火災爆炸和其他效果的精靈對象，並藉助粒子發射器。格式的文本，嵌入式視頻和繪製自定義形狀可用於在遊戲中引起醒目的效果。
**多功能行為**：在這篇基本的遊戲開發文章中，我們將向您展示如何在遊戲對像中添加不同的行為。有多種可用的行為可以使用，用戶可以根據要求進一步發展。這一切都發生在幾個鼠標點擊的情況下。
**高級接口**：在此遊戲設計教程中，我們將看到此3D遊戲引擎的用戶界面。用戶可以拖放各種遊戲元素和對象。

## 在遊戲 {#working}上工作
遊戲開發教程的這一部分詳細闡述了Gdevelop的基本遊戲開發。在進一步前進之前，請確保您已在機器上安裝了Gdevelpent。
您可以訪問本教程[GDEVELED教程，供初學者開始遊戲開發][3]，以了解在Localhost上設置該遊戲編輯器的知識。
現在，打開編輯器並創建一個新項目。在本教程中，我們將在Google Drive上創建一個文件夾以保存遊戲文件。現在，單擊“創建一個新項目”，它將打開一個新的對話框，選擇“空遊戲”選項以開始構建新遊戲。

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="遊戲開發教程">}}

在左側項目菜單欄上，單擊“另存為”以保存遊戲。
首先，讓我們添加一個場景。為此，單擊“場景”選項，並將其重命名為下圖所示的本教程中的“第一個場景”。

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" 遊戲構建平台">}}

創建場景後，將其打開並添加一個對象。對於添加對象，請單擊右側面板上顯示的“添加新對象”。最終，它將打開一個包含不同資產的新對話框。但是，讓我們選擇對象“紅色船”命中“添加到遊戲”，然後關閉對話框。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" 遊戲開髮指南">}}

接下來，您將看到一個物體出現在左側面板上。將其拖到主屏幕上，然後按左上角出現的按鈕啟動遊戲。因此，它將將游戲打開到下圖中所示的新窗口。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="遊戲開發教程">}}

到現在為止，您無法使用此對象，因為沒有添加行為。因此，讓我們在此對像中添加行為。為此，單擊船體對象，然後點擊“編輯對象”。它將打開一個新的對話框，導航到“行為”選項卡，選擇“自上而下的運動”並點擊“應用”。現在，預覽遊戲，您將看到可以使用鍵盤箭頭鍵在屏幕上移動船舶對象。現在，您會注意到船對像從屏幕上脫離。因此，要解決此問題，讓我們編輯對象並導航到行為。單擊“將行為添加到對象”。現在，導航到“搜索新行為”，並在搜索欄中尋找“留在屏幕上”的行為，如下圖所示。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gdevelop">}}

接下來，選擇它並將其安裝到項目中，然後按應用。另一件事是調整對象的中心點。因此，讓我們再次進入對象屬性，然後在底部出現“編輯點”。您將降落在以下屏幕上。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="遊戲設計教程">}}

因此，拖動出現在對像中心的左上角上的標記，然後關閉並應用。現在，如果重新啟動遊戲，您將看到更改。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="遊戲開發教程">}}


## 結論 {#conclusion}
這是本遊戲開發教程的結尾。希望這篇博客文章對遊戲開發人員有幫助。本教程使您可以使用遊戲對象並添加行為。將來，Containerize.com將在其他開源視頻遊戲設計軟件上發布博客文章和教程文章。因此，請在[Containerize.com][9]上與此[遊戲開發軟件][8]類別保持聯繫，以進行常規更新。

## 探索
  * [gdevelop][7]
  * [godot][10]
  * [超能力][11]
  * [可可創造者][12]
  * [panda3d][13]

  
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/zh-hant/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
