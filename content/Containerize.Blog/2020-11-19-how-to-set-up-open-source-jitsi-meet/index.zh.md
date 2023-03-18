---
title: "逐步指南来设置开源Jitsi Meet" 
seoTitle: "逐步指南来设置开源Jitsi Meet" 
description: "了解如何设置Jitsi见面。这是一种开源视频会议软件，旨在满足远程通信需求，并提供强大的功能" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet将偏远的人聚在一起进行有效的会议。让我们学习如何设置此视频会议软件并探索其功能" 
url: /zh/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet将偏远的人聚在一起进行有效的会议。让我们学习如何设置此视频会议软件并探索其功能

{{< figure align=center src="images/jitsi-bannerF.png" alt="视频会议软件">}}


## 概述
我们最近发表了[博客文章] [1]，该[1]讨论了[视频会议软件] [2]对公司行业的影响。但是，在本文中，我们将介绍以下几点。
  * [简要介绍Jitsi Meet] [3]
  * [如何设置Jitsi见面？] [4]
  * [jitsi符合功能探索] [5]
  * [结论] [6]

## 简短介绍Jitsi Meet {#intro}
[Jitsi Meet] [7]是一个完全免费的开源，安全可扩展的视频协作软件。它提供了几个流行的功能，例如带有完整加密，对以太赛车的支持以及视频/音频录制的多方视频会议。此WEBRTC兼容软件使您可以邀请尽可能多的用户参加视频会议。
虚拟会议的兴起始于最近，人们认为通过视频/音频通话的沟通更有效和协作。最重要的是，这类软件不仅可以在笔记本电脑/台式机上使用，而且还使参与者可以通过手机面对安全的视频会议。

## 如何设置Jitsi见面？ {#设置}
在本节中，我们将进入Jitsi Meet的安装过程。首先，确保您已经安装了以下先决条件。
  * [Docker] [8]
安装Docker后，从此[链接] [9]下载源代码的zip文件。
打开终端并运行以下命令
`cd docker-jitsi-meet`
之后，运行以下命令创建一个.env'
`cp env.example .env`
现在，运行以下命令以创建所需的目录。
`mkdir -p〜/.jitsi-meet-cfg/{web/letsencrypt，成绩单，韵律/config/config，trosody/trosody-plugins-custom，jicofo，jicofo，jvb，jigasi}`}
最后，运行此命令以旋转Docker映像并在浏览器中的此URL处访问应用程序。
`docker -compose -d`

## jitsi满足功能探索{#features}
这个免费的视频聊天软件提供了许多丰富的功能。这是将首先显示的主页。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="视频会议">}}

输入会议的标题并点击“ GO”，您将降落到以下视频流窗口。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="开源软件">}}

您可以通过共享弹出窗口中显示的链接来邀请人们参加会议。此外，您可以通过获取代码在任何地方嵌入视频流。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="开源软件">}}

它为您提供与其他参与者共享屏幕的选项。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="视频聊天">}}

从右上角，您可以看到视频连接的详细信息。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="免费视频聊天">}}

Jitsi Meet提供与表情符号的集成聊天。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="视频会议软件">}}


## 结论{#con}
在本文中，我们浏览了令人惊叹的远程通信软件及其安装过程。此外，现在是时候选择最佳解决方案与不断发展的技术同步业务需求了。最后，[Containerize.com] [10]一直在努力扩展视频会议软件的列表。因此，请与常规更新的[视频会议软件] [2]类别保持联系。

## 相关产品页面
您可能会发现以下链接相关：
  * [Jitsi Meet] [7]
  * [BigBlueButton] [11]
  * [OpenVidu] [12]
  * [元素] [13]
  * [电线] [14]
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
