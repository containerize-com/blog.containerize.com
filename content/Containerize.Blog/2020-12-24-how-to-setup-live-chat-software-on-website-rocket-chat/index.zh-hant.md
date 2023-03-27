---
title: "如何在網站上設置實時聊天軟件|火箭" 
seoTitle: "如何在網站上設置實時聊天軟件|火箭" 
description: "Rocket.Chat易於設置，幫助團隊和客戶進行有效的溝通。該實時聊天軟件是開源，跨平台和自託管的。" 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "實時聊天支持軟件為提供客戶支持帶來便利和效率。讓我們學習如何在您的業務網站上安裝Rocket.Chat。" 
url: /zh-hant/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

##實時聊天支持軟件在提供客戶支持方面帶來了便利和效率。讓我們學習如何在您的業務網站上安裝Rocket.Chat。

{{< figure align=center src="images/rocketchat-1.png" alt="實時聊天軟件">}}


## 概述
我們已經發布了一些與開源實時聊天軟件相關的博客文章，例如[網站上的前5個免費客戶支持聊天軟件][1]，[使用rocket.chat.chat][2]等[WordPress即時消息傳遞，等等。在這篇博客文章中，我們將瀏覽最高領先的客戶支持軟件Rocket.Chat。隨著在線流量的巨大增加，企業發現很難按時進行大量查詢。訪問者來您的網站，傾向於獲取與產品或服務有關的一些信息，並在沒有收到響應的情況下離開您的網站。因此，實時聊天支持可以幫助您在客戶瀏覽您的網站時積極地向客戶致意。或者，如果他們需要一些幫助和澄清來做出購買決定。
實時聊天支持會增加您將訪客轉換為客戶的機會。有很多開源  **實時聊天支持軟件**  可用。但是，Rocket.Chat由於其特徵而獲得了很多吸引力。它被視為Slack和Microsoft Team等行業領先的聊天軟件的替代方法。在本文中，我們將學習如何在服務器上安裝Rocket.Chat，然後如何在您的網站上進行配置。因此，讓我們開始介紹以下幾點。
* [  **什麼是Rocket.cha**  t？][3]
***[如何安裝Rocket.Chat？iptrace [4]
*  **[啟用實時聊天功能][5]**  
*  **[在您的網站上安裝實時聊天小部件][6]**  
*  **[結論][7]**  

## 什麼是rought.chat {#intro}

[Rocket.Chat][8]是流行的  **實時聊天軟件之一。它具有免費的實時聊天版本，作為社區版，以及具有私人內部聊天功能的大型公司的付費託管實時聊天版本。 Rocket.Chat支持實時聊天客戶支持以及團隊聊天功能。它是跨平台，並為幾乎所有流行的平台（例如Windows，Mac，Linux和移動應用程序）提供了支持。這個**  客戶支持軟件**是安全的，可擴展的，並與第三方流行應用程序（例如Trello，Google Drive等）提供了集成。 Rocket提供了許多強大的功能。Chat提供了多個房間，私人聊天室和團體，通知，表情符號，LDAP身份驗證和RESTFUL界面。此外，此免費工具易於部署，並具有自託管功能。此外，它提供了一個邏輯且用戶友好的界面，用戶可以在其中修改黑暗，光或黑色等主題。
此  **聊天支持軟件**  用JavaScript編寫，所有文檔均可用於開發和部署。因此，您可以在[github][9]上找到所有源代碼。有關更多詳細信息，您可以閱讀有關Rocket.Chat [此處][10]的信息。

## 如何安裝火箭。 {#install}

因此，我們知道什麼是Rocket.Chat，在本節中，我們將學習如何安裝此實時聊天軟件。您可以從各種市場上安裝Rocket.Chat，例如Ubuntu快照，Dockerhub，或將其安裝在您自己的服務器上。在本文中，我們將重點介紹Rocket.Chat通過Ubuntu上的快照的安裝。這是最快的安裝方法。
快照是安全的。 Rocket.Chat及其所有依賴項都與您的其餘部分隔離。當有新版本時，快照也會自動更新。
首先，在Ubuntu上，安裝以下命令安裝snap
```
sudo apt-get install snapd
```
然後通過snap命令安裝rocket.chat服務器。
```
sudo snap install rocketchat-server
```
快照已經啟動並運行。瀏覽到http：// localhost：3000並設置Rocket.Chat。您可以將NGINX代理配置為rocket.chat實例與您的域。

## 啟用實時聊天功能 {#enable}

一旦Rocket.Chat軟件安裝和配置，下一步就是啟用其功能。博客文章的這一部分介紹瞭如何在您的網站上啟用  **聊天支持軟件**  。要啟用Rocket.Chat實例上的LiveChat功能：
1.去  **管理**  

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat管理">}}

2.在  **設置** 中搜索“ **OmnichAnnel**  ”並啟用它。

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat搜索Amini">}}

啟用後，管理員將可以在左上角下拉菜單上通過稱為Omnichannel的新菜單訪問Omnichannel面板設置。

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini頻道">}}

然後配置實時聊天小部件的外觀和感覺

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat Livechat小部件">}}


##  **在您的網站上安裝實時聊天小部件**  {#widget}

在本節中，我們將在業務網站上安裝實時聊天小部件。現在，要訪問  **livechat安裝**  設置：
轉到全渠道面板設置中的LiveChat安裝**，如下所示，並複制給定的代碼。

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="火箭。chat小部件">}}

並且，將此代碼粘貼在您網站上的最後一個標籤之上；實時聊天小部件將出現在網頁的右下角。如下所示，根據您的實時聊天配置。
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="實時聊天軟件">}}

{{_LINE_48_}}

## 結論 {#conclusion}

這使我們進入了此博客文章的結尾。在本文中，我們已經瀏覽了Rocket.Chat，如何安裝Rocket.Chat，我們還向您展示瞭如何通過Ubuntu Snaps在自己的服務器上安裝它。我們還學會瞭如何啟用實時聊天功能並在您的網站上安裝小部件。此外，由於我們上面討論的某些因素，  **客戶支持軟件** 已成為任何業務網站的必備部分。但是，如果您希望在您的業務網站上部署開源實時聊天軟件，那麼這篇博客文章確實會為您提供幫助。此外，您可以在下面的“探索”部分中提供了許多其他 **聊天支持軟件**  和文章，您可以查看。
最後，[  **containerize.com**  ][11]是在進一步的開源**開源聊天應用程序上撰寫文章。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][13]，[LinkedIn][14]和[Twitter][15]。

## 探索
您可能會發現以下鏈接相關。
  * [Zulip][16]
  * [Lets-Chat][17]
  * [botpress][18]
  * [如何使用Botpress為您的業務創建基於AI的FAQ機器人][19]
  * [網站的前5個免費客戶支持聊天軟件][1]
  * [WordPress使用Rocket.Chat即時消息][2]
  * [使用免費和開源軟件自動化業務運營][20]
  * [如何使用botpress在Rocket.Chat中創建和運行一個bot][21]
  * [使用免費和開源軟件自動化業務運營][20]



[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
