---
title: "逐步指南來設置開源Jitsi Meet" 
seoTitle: "逐步指南來設置開源Jitsi Meet" 
description: "了解如何設置Jitsi見面。這是一種開源視頻會議軟件，旨在滿足遠程通信需求，並提供強大的功能" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet將偏遠的人聚在一起進行有效的會議。讓我們學習如何設置此視頻會議軟件並探索其功能" 
url: /zh-hant/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet將偏遠的人聚在一起進行有效的會議。讓我們學習如何設置此視頻會議軟件並探索其功能

{{< figure align=center src="images/jitsi-bannerF.png" alt="視頻會議軟件">}}


## 概述
我們最近發表了[博客文章][1]，該[1]討論了[視頻會議軟件][2]對公司行業的影響。但是，在本文中，我們將介紹以下幾點。
  * [簡要介紹Jitsi Meet][3]
  * [如何設置Jitsi見面？][4]
  * [jitsi符合功能探索][5]
  * [結論][6]

## 簡短介紹Jitsi聚會 {#intro}

[Jitsi Meet][7]是一個完全免費的開源，安全可擴展的視頻協作軟件。它提供了幾個流行的功能，例如帶有完整加密，對以太賽車的支持以及視頻/音頻錄製的多方視頻會議。此WEBRTC兼容軟件使您可以邀請盡可能多的用戶參加視頻會議。
虛擬會議的興起始於最近，人們認為通過視頻/音頻通話的溝通更有效和協作。最重要的是，這類軟件不僅可以在筆記本電腦/台式機上使用，而且還使參與者可以通過手機面對安全的視頻會議。

## 如何設置Jitsi見面？ {#setup}

在本節中，我們將進入Jitsi Meet的安裝過程。首先，確保您已經安裝了以下先決條件。
  * [Docker][8]
安裝Docker後，從此[鏈接][9]下載源代碼的zip文件。
打開終端並運行以下命令
`cd docker-jitsi-meet`
之後，運行以下命令創建一個.env'
`cp env.example .env`
現在，運行以下命令以創建所需的目錄。
`mkdir -p〜/.jitsi-meet-cfg/{web/letsencrypt，成績單，韻律/config/config，trosody/trosody-plugins-custom，jicofo，jicofo，jvb，jigasi}`}
最後，運行此命令以旋轉Docker映像並在瀏覽器中的此URL處訪問應用程序。
`docker -compose -d`

## jitsi滿足功能探索 {#features}

這個免費的視頻聊天軟件提供了許多豐富的功能。這是將首先顯示的主頁。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="視頻會議">}}

輸入會議的標題並點擊“ GO”，您將降落到以下視頻流窗口。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="開源軟件">}}

您可以通過共享彈出窗口中顯示的鏈接來邀請人們參加會議。此外，您可以通過獲取代碼在任何地方嵌入視頻流。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="開源軟件">}}

它為您提供與其他參與者共享屏幕的選項。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="視頻聊天">}}

從右上角，您可以看到視頻連接的詳細信息。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="免費視頻聊天">}}

Jitsi Meet提供與表情符號的集成聊天。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="視頻會議軟件">}}


## 結論 {#con}

在本文中，我們瀏覽了令人驚嘆的遠程通信軟件及其安裝過程。此外，現在是時候選擇最佳解決方案與不斷發展的技術同步業務需求了。最後，[Containerize.com][10]一直在努力擴展視頻會議軟件的列表。因此，請與常規更新的[視頻會議軟件][2]類別保持聯繫。

##相關產品頁面
您可能會發現以下鏈接相關：
  * [Jitsi Meet][7]
  * [BigBlueButton][11]
  * [OpenVidu][12]
  * [元素][13]
  * [電線][14]



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
