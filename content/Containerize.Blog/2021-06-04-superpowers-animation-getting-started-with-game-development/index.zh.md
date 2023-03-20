---
title: "使用超级大国开始游戏开发" 
seoTitle: "使用超级大国开始游戏开发" 
description: "SuperPowers是一家具有实时协作的开源3D游戏制造商。本教程是关于使用超级大国开始游戏开发的开始。" 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "游戏对象的行为和运动由动画控制。在本游戏开发教程中，我们将学习如何使游戏角色动画。" 
url: /zh/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## 游戏对象的行为和运动由动画控制。在本游戏开发教程中，我们将学习如何使游戏角色动画。

{{< figure align=center src="images/super.png" alt="开始游戏开发">}}


## **概述**
在我们的开源游戏开发的教程系列中，我们发表了有关一些流行主题的博客文章，例如[游戏开发教程| Gdevelop的玩家运动][1]，[HTML5视频游戏程序员的游戏开发教程][2]，[2]，[全球游戏行业如何利用开源软件][3]和[Gdevelop Tutorial for Thinking for Think forne fornek forking tich othins fromister for tonk invine forighting forighters启动游戏开发][4 ]。这篇教程文章是关于使用免费开源[Superpowers][5]开始游戏开发的开始，涵盖以下几点。
  *** [游戏动画的类型][6] **
  *** [如何创建精灵？][7] **
  *** [使用场景][8] **
  *** [在Localhost上启动游戏][9] **
  *** [结论][10] **
有许多针对初学者的开源游戏开发软件，这些软件具有自托管功能。但是，[Superpowers][5]是跨平台2D和3D游戏创建软件。它提供内置的库和游戏示例，使游戏开发人员容易游戏开发。这个免费的游戏设计应用程序是用打字稿编写的，所有文档都可以在[Github][11]上获得有关开发和部署的信息。在这篇博客文章中，我们将探索超级大国的用法。

## 游戏动画类型{#types}
动画是视频游戏的重要组成部分。游戏中的角色必须响应用户的操作，动画应该平稳且突然。这是关于管理多个帧和动画师完善这些帧以产生移动效果。此外，在2D和3D动画中，对象似乎在三维空间中移动。游戏开发人员和图形设计师创建了3D模型。动画取决于游戏的性质，最常见的类型如下。
**步行动画：**步行动画是关于步行过程的创建，在该过程中，角色在每个步骤中都动画并提供步行插图。
**空闲动画：**这是一种非常重要的动画类型，其中字符不做任何事情，因为用户不按任何控制器。
**运行动画**：运行动画是游戏对象执行运行周期的每个游戏的一部分。这种类型是最常见的类型，需要从开发人员那里得到更多关注。
**战斗动画**：在格斗游戏中，多个游戏角色彼此战斗。
**跳跃动画**：这种动画需要更好的技能和专业知识。角色压缩并释放身体以执行跳跃插图。

## 如何创建精灵？ {#sprites}
游戏制作指南的这一部分允许用户创建项目并开始为游戏创建精灵。精灵是非静态图像或图形，不仅在游戏中使用，而且是网页设计的一部分。这些通常是在不断刷新的背景中绘制的。
继续前进之前，请确保您已经在计算机上设置了超级大国。您可以按照此链接[视频游戏程序员的HTML5游戏开发教程][2]来设置此免费游戏创建平台。
首先，将应用程序打开到浏览器中，让我们创建一个新的空项目。如下图所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="开始游戏开发">}}

创建新的空项目后，您将登陆项目空间。左侧面板有菜单选项。因此，单击“+”按钮以打开资产对话框。选择Sprite选项并点击创建。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="游戏制作指南">}}

现在，上传将添加行为的图像。您可以通过单击放置在右上角的按钮来做到这一点。该面板是关于对象的配置。
接下来，您可以根据自己的选择设置网格大小。画布有两部分。上部显示了整个表格，下部显示了我们打算应用动画的选定部分。您可以通过按下右侧面板的按钮“设置”来完成此操作，如下图所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="游戏开发教程">}}

之后，让我们创建动画。我们可以通过单击“动画”选项卡中的“新”按钮来做到这一点。您可以看到下面的图像。

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="初学者的游戏开发软件">}}


## 使用场景{#scenes}
在本节中，我们将为游戏添加一个场景。为此，再次打开“资产”对话框，然后选择“场景”，然后按创建按钮。现在，通过单击右上角的星按钮来创建演员，如下图所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="如何为初学者制作游戏">}}

之后，通过单击放置在右侧面板上的“新组件”按钮来创建新组件。选择“ Sprite Renderer”并点击创建。然后，将创建的精灵从左侧面板拖动，然后将其放在Sprite渲染器部分下方。此外，创建另一个名为“相机”的演员，同样，创建一个名为“相机”的新组件。
您可以更改相机模式，因此将其更改为“拼字法”模式，如下图所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="开始游戏开发，">}}

在左下角，导航到“设置”选项并将其打开。在“ Sprite”和“ Tile Map”部分下，插入16个针对“单位像素”。然后在“默认相机模式”中，在“场景”部分下选择2D。此外，在“瓷砖地图”部分，默认宽度36，默认高度28和瓷砖集网格大小16中。没有必要保存它，而是所有内容都在AutoSave上。

## 在localhost {#local}上启动游戏
因此，我们将接近推出第一场游戏的超能力动画。但是，再次转到“设置”选项卡，然后从左侧面板拖动场景，然后将其放在“启动场景”上，如下图所示。

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="如何为初学者制作游戏">}}

现在，单击“播放器”，然后在“ Sprite Renderer”组件下，选择动画来针对“动画”属性。最后，通过单击放置在左上角的按钮来启动应用程序。新标签将在屏幕上显示移动对象。

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="开始游戏开发">}}


## 结论{#conclusion}
这是本教程的结尾，我们学会了如何为初学者制作游戏。因此，当有可用的游戏开发软件文档详细文档时，开始游戏开发变得容易。最后，[** containerize.com **][12]正处于撰写有关进一步开源主题和产品的文章的一致过程中。因此，请与此[游戏开发软件][13]类别保持联系，以进行常规更新。

## 探索
  * [gdevelop][14]
  * [godot][15]
  * [超能力][5]
  * [可可创造者][16]
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
