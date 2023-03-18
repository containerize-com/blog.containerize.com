---
title: "游戏开发教程| gdevelop的球员运动" 
seoTitle: "游戏开发教程| gdevelop的球员运动" 
description: "遵循本游戏开发教程以了解基本游戏功能。 Gdevelop是用于构建和发布游戏的免费游戏创建软件。" 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "屏幕上的对象是任何游戏的关键部分。在本游戏开发指南中，我们将学习如何控制和移动Gdevelop中的游戏对象。" 
url: /zh/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## 屏幕上移动对象是任何游戏的关键部分。在本游戏开发指南中，我们将学习如何控制和移动Gdevelop中的游戏对象。

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="游戏开发教程">}}


## **概述**
开源社区每分钟都在出现。有跨平台游戏，手机游戏和桌面游戏。各种类型的游戏包括动作游戏，冒险游戏，角色扮演游戏，体育游戏，益智游戏，仿真游戏等。因此，所有这些不同的游戏类型都给了所有年龄段的用户倾向于玩这些游戏，从而给予了巨大的交通。
此外，大流行带来了居住全球生活方式的巨大变化。人们现在有更多的时间。所有离线活动都已在线。因此，他们倾向于选择在线软件来执行专业职责和视频游戏，以防娱乐。由于所有这些原因，该行业已获得可持续性和用户和开发人员的支持。在最近的过去，我们撰写了诸如视频游戏程序员的[HTML5游戏开发教程] [1]，[1]，[全球游戏行业如何利用开源软件] [2]和[Gdeveloping for初学者开始游戏开发]] [3]。在本游戏开发教程中，我们将介绍以下几点。
  *** [gdevelop的特征探索] [4] **
  *** [在游戏中工作] [5] **
  *** [结论] [6] **

## 特征gdevelop {#features}的探索}
[Gdevelop] [7]是一个开源游戏平台。它是高度扩展的，并提供了一个逻辑接口，用户可以轻松导航。此免费软件用C ++，Typescript和JavaScript编写。此外，还有有关开发和部署的全面文件。所有源代码均可在GitHub上找到。此外，有许多功能使该游戏使软件突出。让我们看看一些关键功能。
**跨平台**：此游戏创建平台是乘数的，并且可以部署在MacOS，Linux和Windows等几乎所有流行的操作系统上。
**导出选项**：gdevelops允许用户只需单击Android，iOS和Web即可导出开发的游戏。游戏所有者可以在他们的游戏中显示视频广告，并且在Admob的支持下可能是可能的。
**丰富的游戏对象**：这家开源游戏制造商提供了各种游戏对象，例如具有动画，火灾爆炸和其他效果的精灵对象，并借助粒子发射器。格式的文本，嵌入式视频和绘制自定义形状可用于在游戏中引起醒目的效果。
**多功能行为**：在这篇基本的游戏开发文章中，我们将向您展示如何在游戏对象中添加不同的行为。有多种可用的行为可以使用，用户可以根据要求进一步发展。这一切都发生在几个鼠标点击的情况下。
**高级接口**：在此游戏设计教程中，我们将看到此3D游戏引擎的用户界面。用户可以拖放各种游戏元素和对象。

## 在游戏{#working}上工作
游戏开发教程的这一部分详细阐述了Gdevelop的基本游戏开发。在进一步前进之前，请确保您已在机器上安装了Gdevelpent。
您可以访问本教程[GDEVELED教程，供初学者开始游戏开发] [3]，以了解在Localhost上设置该游戏编辑器的知识。
现在，打开编辑器并创建一个新项目。在本教程中，我们将在Google Drive上创建一个文件夹以保存游戏文件。现在，单击“创建一个新项目”，它将打开一个新的对话框，选择“空游戏”选项以开始构建新游戏。

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="游戏开发教程">}}

在左侧项目菜单栏上，单击“另存为”以保存游戏。
首先，让我们添加一个场景。为此，单击“场景”选项，并将其重命名为下图所示的本教程中的“第一个场景”。

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" 游戏构建平台">}}

创建场景后，将其打开并添加一个对象。对于添加对象，请单击右侧面板上显示的“添加新对象”。最终，它将打开一个包含不同资产的新对话框。但是，让我们选择对象“红色船”命中“添加到游戏”，然后关闭对话框。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" 游戏开发指南">}}

接下来，您将看到一个物体出现在左侧面板上。将其拖到主屏幕上，然后按左上角出现的按钮启动游戏。因此，它将将游戏打开到下图中所示的新窗口。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="游戏开发教程">}}

到现在为止，您无法使用此对象，因为没有添加行为。因此，让我们在此对象中添加行为。为此，单击船体对象，然后点击“编辑对象”。它将打开一个新的对话框，导航到“行为”选项卡，选择“自上而下的运动”并点击“应用”。现在，预览游戏，您将看到可以使用键盘箭头键在屏幕上移动船舶对象。现在，您会注意到船对象从屏幕上脱离。因此，要解决此问题，让我们编辑对象并导航到行为。单击“将行为添加到对象”。现在，导航到“搜索新行为”，并在搜索栏中寻找“留在屏幕上”的行为，如下图所示。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gdevelop">}}

接下来，选择它并将其安装到项目中，然后按应用。另一件事是调整对象的中心点。因此，让我们再次进入对象属性，然后在底部出现“编辑点”。您将降落在以下屏幕上。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="游戏设计教程">}}

因此，拖动出现在对象中心的左上角上的标记，然后关闭并应用。现在，如果重新启动游戏，您将看到更改。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="游戏开发教程">}}


## 结论{#conclusion}
这是本游戏开发教程的结尾。希望这篇博客文章对游戏开发人员有帮助。本教程使您可以使用游戏对象并添加行为。将来，Containerize.com将在其他开源视频游戏设计软件上发布博客文章和教程文章。因此，请在[Containerize.com] [9]上与此[游戏开发软件] [8]类别保持联系，以进行常规更新。

## 探索
  * [gdevelop] [7]
  * [godot] [10]
  * [超能力] [11]
  * [可可创造者] [12]
  * [panda3d] [13]
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/zh/game-development-tutorial-player-movement-in-gdevelop/
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
