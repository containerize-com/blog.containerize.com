---
title: "如何使用开放式超级大国开发视频游戏" 
seoTitle: "如何使用开放式超级大国开发视频游戏" 
description: "如何开发电子游戏？ SuperPowers是一种开源HTML5游戏开发。它是跨平台，允许用户构建动画2D和3D游戏。" 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "免费的视频游戏设计软件，用于视频游戏开发具有离线模式。自助主机，创建动画2D＆amp;具有声音效果和字体的3D游戏。" 
url: /zh/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## 通过离线模式免费的视频游戏设计软件，用于视频游戏开发。自助主机，创建具有声音效果和字体的动画2D和3D游戏。

{{< figure align=center src="images/superpowers.png" alt="如何开发电子游戏">}}


## 概述
在近乎过去，一些文章发表在[游戏开发软件][1]类别上，其中包括全球游戏行业如何利用开源软件和Gdevelop教程为初学者开始游戏开发。随着对娱乐游戏的需求不断增长，视频游戏开发在全球范围内传播得更多。但是，它涉及想法，设计发展，持续测试，发布和反馈。换句话说，它涉及设计师，软件架构师，程序员，测试人员和支持资源。此外，还有许多类型的游戏，例如动作游戏，益智游戏，赛车游戏，认知游戏等。
因此，为了开始使用任何3D游戏构建器开始启动，迫切需要一个好的游戏开发指南。开源社区开发了许多游戏开发软件，可提供企业级功能和实用程序来开发3D和2D游戏。该HTML5游戏开发教程将探讨如何使用免费的视频游戏开发软件**SuperPowers** 开发视频游戏，以介绍以下几点。
  ***[什么是超级大国][2]** 
  ***[如何在Local主机上设置？][3]** 
  ***[超级大国的仪表板？][4]** 
  ***[结论][5]** 

## 什么是超级大国 {#intro}
[Superpowers][6]是用于视频游戏开发的开源软件。它是灵活的，健壮的和可扩展的。但是，它为动画，3D模型和广泛的游戏示例提供了支持。此外，它还配备了一个离线版本，用户可以在没有任何Internet连接的情况下构建游戏。发布任何项目都非常容易，并且单击一次。有一个直观的仪表板适合用户，用户可以轻松地浏览各种元素。最重要的是，有一个非常酷的是实时错误报告，它在其中向开发人员显示错误以避免任何歧义或错误。超级大国很容易设置，并且需要简单的要求才能进一步托管，这款3D游戏构建器用打字稿编写，并随附有关开发和部署的所有文档。因此，所有源代码均可在[GitHub][7]上获得。
超级大国提供以下要点：
  *现场错误报告
  *多语言
  *跨平台
  *丰富的字体和声音效果
  *自我托管

## 如何在Localhost上设置？   {#设置}
如果您仍然想知道如何开发视频游戏，那么在本文的这一部分中，我们将学习如何在Localhost上设置超级大国。在本节中，该**游戏开发指南**将详细介绍设置游戏开发环境的过程。
首先，请确保您在开始视频游戏开发之前已经安装了以下先决条件：
  * git
  * npm
  * node.js
上述要求很容易且非常众所周知，因此对于初学者来说，这将不是一项艰巨的任务。安装上述要求后，打开终端并运行以下命令以克隆源代码：
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
成功克隆后，通过运行以下命令进入下载的目录：
```
cd superpowers/core
```
现在，运行以下命令来克隆超级大国游戏系统：
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
之后，运行以下命令进行构建：
```
npm run build
```
成功构建后，通过运行以下命令来启动服务器：
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5游戏开发教程">}}

现在打开浏览器并在以下链接中访问应用程序：
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## 超级大国的仪表板？   {#特征}
击中上述URL后，您将看到以下主页。有一些可以修改或创建新的空或2D平台项目的选项。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="视频游戏开发">}}

提出有关如何开发视频游戏的问题，您将在创建2D平台之后看到以下屏幕。您可以在窗口的左侧看到选项，例如创建场景，设置瓷砖，游戏地图和玩家。有一个实时编码选项，您可以在其中编码用户的行为。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="视频游戏开发">}}

此外，左侧有一个设置栏，您可以在其中设置动画，渲染，上传或下载图像。在左侧，可以选择为您的项目添加更多资产，如下图所示。它包括一个3D模型立方模型，如果要修改字体，则包括FINT选项。此外，用户可以添加更多场景，脚本，着色器和精灵。此外，这款开源3D游戏构建器还使您可以在游戏中添加各种声音效果，以吸引游戏玩家，具有最佳的游戏声音效果。最后但并非最不重要的一点是，它还可以添加瓷砖地图和瓷砖集。

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="视频游戏设计">}}

同样，在浏览了这篇游戏文章之后，您可以进一步探索并使用所有功能。此外，您将能够了解如何使用SuperPowers视频游戏构建器继续进行。此游戏开发软件有在线支持。

## **结论**   {#conclusion}
这将结束本HTML5游戏开发指南。希望，如果您渴望开始视频游戏开发，这篇博客文章将为您提供帮助。我们已经探索了什么是超级大国，如何开发视频游戏，这是一个开源3D游戏构建器，我们也在Localhost上完成了其安装程序。有许多开源**视频游戏设计应用程序**可以让用户从头开始构建游戏。视频游戏程序员使用基本的游戏设计原理来构建高质量的游戏。您将在[Blog.Containerize.com][8]中了解有关构建2D和3D游戏的更多信息。下面的“ Explore”部分中提到的其他开源，自托管的3D游戏制造商和相关文章。
最后，Containerize.com正在不断撰写有关进一步开源产品和主题的博客文章。因此，请与常规更新的[9][][10]类别保持联系。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
您可能会发现以下链接相关：
  * [][14][gdevelop][14]
  * [][14][Godot][15]
  * [][14][超能力][6]
  * [][14][可可创造者][16]
  * [][14][PANDA3D][17]
  ***[使用超能力开始游戏开发][18]** 
  ***[游戏开发教程| gdevelop的球员运动][19]** 
  *[**如何使用开源Gdevelop **在刮擦上制作游戏**][20]
  ***[全球游戏行业如何利用开源软件][21]** 
  ***[初学者开始游戏开发的gdevelop教程][22]** 
  *[ **2021年的前5名免费游戏开发软件** ][23]

  
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
