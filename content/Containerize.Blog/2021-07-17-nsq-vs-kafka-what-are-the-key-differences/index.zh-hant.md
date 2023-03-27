---
title: "NSQ vs Kafka |什麼是主要區別？" 
seoTitle: "NSQ vs Kafka |什麼是主要區別？" 
description: "消息傳遞隊列平台提供了一種異步通信的方法。本文是關於NSQ和KAFKA分佈式消息隊列系統差異的。" 
date: Sat, 17 Jul 2021 03:54:59 +0000
author: yasir saeed
summary: "消息傳遞隊列平台提供了一種在提高性能和可擴展性的同時進行溝通的方法。本文涉及NSQ和KAFKA比較。" 
url: /zh-hant/nsq-vs-kafka-what-are-the-key-differences/
categories: ['Backup and Sync Software']
---

##消息傳遞隊列平台提供了一種在提高性能和可伸縮性的同時進行溝通的方法。本文涉及NSQ和KAFKA比較。

{{< figure align=center src="images/nsq-vs-kafka.png" alt="NSQ vs Kafka |有什麼區別？|NSQ vs Kafka |有什麼區別？?">}}


##  **概述**  
隨著系統的增長，分佈式消息系統構成了大數據流，雲本機應用程序和微服務體系結構的核心。對內置消息隊列平台的需求日益增長，可靠，可擴展性和容忍度為實時應用程序延遲較低。消息傳遞隊列平台提供了交流和協調異步的方式，同時提高性能，可靠性和可擴展性。
分佈式消息傳遞系統現在廣泛並且正在不斷發展。有多個現代消息隊列系統都有自己的優點和缺點。最佳開源消息隊列系統形成了用於大數據流，微服務和基於雲的應用程序的中間件基礎架構。對於業務公司決定哪種消息系統最適合特定應用程序已成為問題。需要深入了解，以確定消息系統的哪些功能滿足特定應用程序的需求。
這篇博客文章概述了現代消息隊列平台NSQ與Kafka。本文提供了有關分佈式消息傳遞系統NSQ與Kafka的信息，《比較功能以促進用戶為實時應用做出明智的決定，並為未來的研究和開發鋪平了道路。
* 什麼是卡夫卡？
* 什麼是NSQ？
* 比較NSQ與Kafka
* 為什麼要在NSQ上進行卡夫卡？
  * 結論

## 1.什麼是卡夫卡？
[KAFKA][1]是一個開源分佈式事件流平台，用LinkedIn開發的Scala語言編寫。它是發布訂閱消息系統，並且具有處理大量消息的能力。 Kafka是“分佈式，耐用，容忍度，高通用酒吧式通訊系統”，您可以使用Kafka進行實時和批處理處理。它是跨節點的分佈式，分區，複製的提交日誌消息服務，並在JVM上運行。 Kafka最佳消息隊列易於使用，並提供消息隊列系統的功能，但具有獨特的設計。
分佈式消息隊列Kafka服務器被稱為經紀人，它們形成了Kafka群集。 Zookeeper負責集群中所有經紀人之間的協調。 Apache Kafka消息經紀人由Unicorn初創公司，健康和頂級金融組織（如LinkedIn，FB，Netflix，America，America，Chase Bank，Yahoo，Twitter等）使用。開源消息隊列軟件KAFKA架構由生產者，消費者，經紀人，Zookeeper，主題，分區，記錄和日誌組成。

## 2.什麼是NSQ？ {#ce62}

[NSQ][2]是一個開源實時分佈式消息平台，它是SimpleQueue的後繼產品。開發人員將NSQ描述為Bitly構建的“實時分佈式消息平台”。開源消息經紀SoftWarensq是設計和操作的非常簡單的消息平台，每天處理數十億條消息。這是一個傳統的緩衝消息系統，可促進沒有單點故障的分散拓撲。它可實現容錯和高可用性，並加上可靠的消息傳遞系統。
NSQ提供高可用性拓撲，可最大程度地減少SPOF。它通過為NSQD和NSQLOOKUPD設置多個實例來增加可用性。此外，它可以保證消息至少以一定程度的持久性傳遞一次，並且易於配置。最佳消息經紀人NSQ更加靈活，並且支持消息持久性。它具有閃亮的管理儀表板。 NSQ隊列消息傳遞系統具有19.9k GitHub星和2.6K GitHub叉。

## 3.比較NSQ與Kafka {#ce62}

NSQ和KAFKA兩人都有一種獨特的方式來定義其體系結構以及經紀人的工作方式，但是在幾個方面，這可能是您想要哪個平台的考慮：
  * 可用性
如果NSQD服務器不得不崩潰，則可能會丟失數據。 Kafka支持複製和分區內置，使其具有更高的可用性和更可靠性。由於復制因子N，KAFKA可以忍受N-1服務器故障而不會丟失任何數據記錄。
* 持久性
如果消費者已經發送了消息的完成信號，則NSQ將刪除消息。
Kafka提供的持久性在分佈式消息隊列中似乎極為罕見。從傳遞的那一刻起，消息在特定的時間或大小之後持續存在。
* 可重播消息
NSQ提供了簡單的消息歸檔，但不支持任何本機重播能力。
另一方面，Kafka具有記錄的持久存儲系統，並且只要將消息存儲在系統上，它們就可以一遍又一遍地重複該消息的能力。
* 消息順序
由於NSQD的多個實例不會相互通信，並且總是有可能發出無序的消息。儘管Kafka使用結構化的記錄序列維護每個分區。 Kafka將始終提供分區中消息的確切順序。

## 4.為什麼要在NSQ上進行卡夫卡？ {#ce62}

高通量是開發人員考慮Kafka對競爭對手的主要原因，而在Golang中，將其視為選擇NSQ消息隊列MQ的關鍵因素。 NSQ和KAFKA都是消息排隊服務。但是主要的區別是，kafka的結構是有序的日誌，但NSQ不是。 Kafka以其嚴格的保證和對數據丟失的可靠性而聞名，而NSQ則更簡單，更容易部署消息隊列。
NSQ在Github上帶有20k GitHub星和2.6K叉子似乎比Kafka更受歡迎，具有19.4k Github星和10.3k Github叉。根據StackShare社區的數據，Kafka得到了更廣泛的認可，在509 Company Stacks和470個開發人員堆棧中提到；與NSQ相比，NSQ在21個公司堆棧和8個開發人員堆棧中列出。

## 結論： {#4a1a}

本文對流行消息框架的工作進行了簡要比較 -  NSQ和KAFKA。文章功能比較圍繞消息隊列吞吐量，持久性，可靠性，延遲，可擴展性和可用性進行了比較。這些參數對於確定實時應用程序的框架的適用性很重要。因此，選擇正確的框架是一篇很好的文章。消息傳遞隊列軟件是市場上未來技術的骨幹，可以處理高處理。在即將到來的教程中，我們將討論與開源消息平台有關的更多有趣的主題。
_您可以在[Twitter][3]，[LinkedIn][4]和我們的[Facebook][5]頁面上加入我們。您在線使用什麼消息隊列平台？如果您有任何疑問，請_ [聯繫][6]。

## 探索：
我們還有其他幾篇與您的服務器日常管理有關的文章。
  * [用於背景處理的重新支持的排隊系統][7]
  * [最快的背景工作處理系統][8]
  * [如何將Apache配置為Ubuntu/Debian的反向代理][9]
  * [如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin][10]
  * [安全和加密NGINX與Let's Encrypt在Ubuntu 20.04][11]



 [1]: https://kafka.apache.org/
 [2]: https://nsq.io/
 [3]: https://twitter.com/containerize_co
 [4]: https://www.linkedin.com/company/containerize/
 [5]: http://facebook.com/containerize
 [6]: mailto:yasir.saeed@aspose.com
 [7]: https://products.containerize.com/message-queue-software/resque/
 [8]: https://products.containerize.com/message-queue-software/sidekiq/
 [9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [10]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
