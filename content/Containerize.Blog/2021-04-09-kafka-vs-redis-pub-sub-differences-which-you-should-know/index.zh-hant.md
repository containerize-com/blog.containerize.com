---
title: "kafka vs redis pub-sub，您應該知道的差異" 
seoTitle: "kafka vs redis pub-sub，您應該知道的差異" 
description: "如果您正在尋找管理大量數據並在Kafka和Redis之間感到困惑的工具。本文Kafka vs Redis Pub-Sub將為您提供幫助。" 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis和Kafka是兩種不同的工具，它們以自己的方式從事類似的工作。 Kafka vs redis比較為您提供了您應該知道的見解。" 
url: /zh-hant/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="kafka vs redis pub sub">}}


## Redis和Kafka是兩個不同的工具，它們以自己的方式從事類似的工作。 Kafka vs redis比較為您提供了您應該知道的見解。
在有關“ redis”的一系列文章中，我們了解了[Redis的基礎][1]，然後我們探討了[Redis Pub/sub Works][2]以及這如何與NOSQL數據庫競爭。在今天的系列系列中，我們將與Redis與Kafka進行比較，Kafka是其各種任務中的競爭對手之一。在本文Kafka vs Redis Pub-Sub中，我們將探討Kafka與Redis有什麼不同，以及它們的相似之處是什麼。因此，讓我們開始。
* 什麼是卡夫卡？
* 什麼是Redis？
* 主要區別是什麼？
* 什麼時候使用哪個？
  * 結論

##什麼是卡夫卡？
Apache Kafka是一個開源分佈式事件流平台。它用於高性能數據管道和流分析。 Kafka充當[Publish-Subscribe消息系統][3]。這樣，您可以處理新數據，因為它以高速生成，並且還可以將其保存到某些數據庫中。
Kafka是一個分佈式系統，由 **服務器**和**客戶端** 組成。它可以在本地和雲環境中的裸機硬件，虛擬機和容器中部署。

##什麼是Redis？
Redis是一家開源的高級鑰匙值商店。它支持幾種數據類型：字符串，哈希，列表，集合和排序集。這就是為什麼通常將其稱為數據結構服務器的原因。
REDIS也被視為NOSQL數據庫。有關He Redis的詳細討論以及它的工作原理，您可以參考我們的文章“ [REDIS REDIS內存數據庫的初學者指南][1]”。

##主要區別是什麼？
**redis** pub-sub大多就像是燃燒系統的系統，在該系統中，您生成的所有消息都將立即傳遞給所有消費者，並且數據不會存儲在任何地方。您對Redis有內存的局限性。此外，生產者和消費者的數量可能會影響Redis的性能。
另一方面， **kafka** 是可以用作隊列的高吞吐量，分佈式日誌。它還為通過隊列發送的消息提供了持久性。
**redis**支持** 基於推動的消息。這意味著將所有消息推向REDIS都將自動傳遞給所有訂戶。
**kafka**，但是，支持** 基於拉的消息。意思是發布給Kafka的消息不會自動分發給訂戶。相反，消費者準備食用這些消息時要求提供消息。
**redis **不存儲消息，而是立即將消息傳遞給所有消費者，然後刪除。但是，** kafka**是日誌，您始終有消息。您可以通過制定保留政策說7天** 保留**來監控這一點。

##何時使用哪個？

### redis
* 如果您想要一種燃燒的系統，其中所有產生的消息都會立即傳遞給消費者。
* 如果 **速度** 最關心。
* 如果 **存儲** 並不重要，並且您不希望您的系統持有已發送的消息
* 將要處理的數據量並不大。

### Kafka
* 如果您想要 **可靠性** 。
* 如果您希望您的系統即使在消費後也有發送的消息副本。
* 如果 **速度** 不是一個大問題。
* 您的數據大小很大。

## 結論
在此教程Kafka vs Redis Pub-Sub中，我們探索了Kafka和Redis。他們的差異和相似之處是什麼？我們還了解到您何時應該重新使用kafka，何時又有好事。在即將到來的教程中，我們將探討有關Kafka和深入分析的更多信息。



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

＃什麼
