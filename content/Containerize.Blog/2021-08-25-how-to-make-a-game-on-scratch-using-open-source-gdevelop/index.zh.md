---
title: "如何使用开源Gdevelop在划痕上制作游戏" 
seoTitle: "如何使用开源Gdevelop在划痕上制作游戏" 
description: "如何从头开始制作游戏？ Gdevelop提供了一个逻辑UI，充满了许多组件和行为，用于构建用于网络，桌面，iOS和Android的视频游戏。" 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "该游戏开发教程解释了构建卡车赛车游戏的基础知识。您可以安装它或使用其在线应用程序来构建令人兴奋的视频游戏。" 
url: /zh/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## 该游戏开发教程解释了建立卡车赛车游戏的基础知识。您可以安装它或使用其在线应用程序来构建令人兴奋的视频游戏。

{{< figure align=center src="images/gdevelop-game.png" alt="如何在刮擦上做游戏">}}


## **概述**
在近乎过去，我们发表了许多有关开源免费游戏开发软件的博客文章，例如[2021年前5个免费游戏开发软件][1]开发教程| Gdevelop中的玩家运动][3]，[HTML5视频游戏程序员的游戏开发教程][4]，[4]，[全球游戏行业如何利用开源软件][5]和[Gdevelop for Tutement for Thinking for Think forking othins for Homining forneking tonk instrains fromploy forking tonk inst启动游戏开发][6 ]。互联网时代的最新进步带来了视频游戏行业的新趋势。一个开源游戏构建平台提供了一个完整的生态系统，可以独立开发游戏，然后根据需求成熟该平台。在这篇博客文章中，我们将通过涵盖以下几点来学习如何使用[gdevelop][7]在刮擦上制作游戏。
  *** [为什么我们应该使用gdevelop？][8] **
  *** [设置项目][9] **
  *** [如何准备背景和对象？][10] **
  *** [将律师添加到对象中][11] **
  *** [运行游戏][12] **
  *** [结论][13] **

## 为什么我们应该使用gdevelop？ {#为什么}
[Gdevelop][7]是一种开源游戏软件。它具有自我托管能力，并且本质上是跨平台。您可以下载并安装它，也可以使用其在线版本进行播放。用户不需要获得任何编程知识来使用此游戏构建器。最重要的是，它提供了带有预构建的游戏行为，模板和对象的拖放用户界面。这个免费的游戏开发软件可配置高度，并提供与第三方库的集成。有关此免费工具的更多信息，您可以检查此链接以进一步了解其功能和设置过程。

## 设置项目{#setting}
在本节中，我们将创建我们的项目，以构建具有一些基本功能的卡车赛车游戏。如果要在本地计算机上设置，请遵循此[链接][6]，或者可以通过转到此[link][14]来使用在线版本。
因此，一旦单击“创建新项目”，然后单击“空游戏”，您将找到以下屏幕。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="如何在刮擦上做游戏">}}

您可以看到窗口左侧的菜单栏。现在，单击“场景”，然后双击“单击以添加场景”按钮。之后，您将降落在游戏屏幕上，可以在其中创建游戏对象，背景和行为。向前迈进，单击右侧面板上放置的“添加新对象”，您将看到以下窗口。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Gdevelop教程">}}


## 如何准备背景和对象？ {#准备}
在搜索栏中，查找卡车对象，然后双击它，然后在结果中添加“添加到游戏”。重复两个车轮和平台对象的此步骤。现在，右键单击绿色对象并进行编辑。

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="游戏开发教程">}}


## 向对象添加behviors {#add}
接下来，将绿色的基础拖到游戏屏幕上，并根据您的愿望调整其高度和宽度。将卡车对象拖动并将其放在游戏屏幕上，然后将其放在车轮对象上。向前移动，右键单击卡车主体并击中“编辑对象卡车机构”，单击行为，单击“向对象添加行为”，然后单击“物理引擎2.0”，您将看到以下窗口。

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="如何在刮擦上做游戏">}}

在此窗口中，您可以修改配置，例如密度，宽度和高度。现在，重复绿色对象的相同过程，但请保留类型的“静态”并点击“应用”按钮。同样，编辑卡车机构对象，点击“编辑点”，点击“ EDD点”，然后插入前轮的名称（即本教程中的FW）。将在对象上创建一个点，只需将该点拖到车轮位置即可。还要重复后轮的过程，并将X和Y到0进行，如下图所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="游戏开发教程">}}

之后，编辑两个轮子对象并调整其点。此外，再次转到轮子的编辑选项，点击“行为”选项卡，选择“ Physics Engine 2.0”，并设置类型，半径和密度的值，如下图所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="游戏设计软件">}}

现在，单击“新场景”选项卡，点击“添加新事件”，点击“添加条件”，搜索“在场景开始时”，然后点击“确定”。然后，点击“添加动作”搜索“相机中心X位置”，然后设置以下配置。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="免费游戏开发软件">}}

现在，复制操作，但请确保将复制的操作设置为“ Y”。添加另一个名为“ Change Camera Zoom”的动作，将其设置为0.4，然后将此动作拖到顶部。添加另一个动作，搜索“添加车轮接头”，并为两个车轮设置配置，如下所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="游戏开发指南">}}

之后，添加一个新条件，搜索“按键”并将其设置为左。现在，添加操作，选择第一个轮子，搜索线性速度X”，修改标志以“减去”并设置值50。重复此步骤的正确键，但请确保添加中的修改符号如下所示。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="游戏开发教程">}}


## 运行游戏{#run}
完成所有步骤后。现在是时候按下放置在左上角的按钮来运行游戏了。它将将游戏启动到新窗口。

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="如何在刮擦上做游戏">}}


## 结论{#conclusion}
这是这篇博客文章的结尾，您肯定知道如何在刮擦上制作游戏。但是，由于该行业越来越受欢迎和需求，市场上有许多免费的**游戏设计软件**。其背后有几个原因，例如开源软件可扩展，可配置，具有成本效益且易于维护。此外，随着开发人员发现在所有流行平台（例如Android，iOS，Web和桌面）上运行的游戏非常舒适，对跨平台游戏制造商的需求正在增加。另一方面，大流行的出现改变了人们的生活，现在他们更喜欢留在室内。因此，人们倾向于在闲暇时间玩电子游戏。
最后，[Containerize.com][15]都将通过一些更有趣的**游戏开发教程**增强其教程基础。请与此[游戏开发软件][16]类别保持联系，以进行常规更新。

## 探索
  *** [gdevelop][7] **
  *** [godot][17] **
  *** [超能力][18] **
  *** [可可创作者][19] **
  *** [panda3d][20] **
  *** [PlayCanvas][21] **
  *** [使用超能力开始游戏开发][2] **
  *** [游戏开发教程| gdevelop的球员运动][3] **
  *** [HTML5视频游戏程序员游戏开发教程][4] **
  *** [全球游戏行业如何利用开源软件][5] **
  *** [gdevelop for初学者开始游戏开发的教程][6] **
  *[** 2021年的前5名免费游戏开发软件**][1]

  
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
