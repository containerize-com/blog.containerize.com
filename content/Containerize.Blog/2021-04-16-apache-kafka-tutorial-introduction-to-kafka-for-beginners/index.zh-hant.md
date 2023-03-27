---
title: "apache kafka教程 - 對Kafka的介紹初學者" 
seoTitle: "apache kafka教程 - 對Kafka的介紹初學者" 
description: "Apache Kafka是一個開源分佈式事件流平台。本教程是理解Apache Kafka接地的初學者指南。" 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka是一個開源分佈式事件流平台。本教程使您從初學者的角度介紹了Kafka。" 
url: /zh-hant/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka是一個開源分佈式事件流平台。本教程為您從初學者的角度介紹了Kafka。

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka開源教程">}}

最近，我們寫了一篇有關“ Kafka vs redis Pub-Sub”的文章，其中解釋了Kafka和Redis Pub-Sub之間的差異。在這篇文章中，我們簡短地解釋了Kafka消息經紀人本身。因此，現在本文使您可以更深入地了解Apache Kafka開源分佈式事件流平台，並為您提供所有必要的介紹，以啟動Kafka分佈式消息隊列。因此，讓我們開始。
  * [Apache Kafka簡介][1]
  * [什麼是消息系統？][2]
  * [基本術語][3]
  * [安裝步驟][4]
  * [創建一個主題][5]
  * [將消息寫入主題][6]
  * [讀取主題的消息][7]
  * [結論][8]

## Apache Kafka簡介 {#intro}

Apache Kafka開源消息經紀在LinkedIn啟動，後來成為一個開源Apache項目。 Kafka消息代理軟件是在Scala和Java中開發的。 Apache Kafka經紀人是一個發布訂閱消息系統，它也可以在應用程序，服務器和處理器之間交換數據。它是快速，可擴展的，並且按設計分發。它能夠每秒處理數百萬個數據或消息。它是源（生產者）系統和目標（消費者）系統之間的調解人。 Netflix，Uber和數千家公司等組織使用Apache Kafka實時流媒體。與其他消息系統相比，KAFKA消息隊列軟件具有更好的吞吐量，內置分區，複製和固有的容錯公差。這使其非常適合大規模消息處理應用程序。

## 什麼是消息系統？ {#messaging}

消息系統是兩個或多個人，設備等之間的消息簡單交換。它負責從一個應用程序到另一個應用程序的數據傳輸，因此應用程序可以專注於數據，但不必擔心如何共享。
一種類型的消息傳遞系統是“點到點消息系統”。在此系統中，生產者發送時將存儲在隊列中。只有一個消費者可以在任何給定時間消耗消息。而且，一旦消耗消息，它將從隊列中刪除。該系統的示例之一是訂單處理系統。只有一個進程可以收取訂單。
消息系統的另一種類型是Pub-sub消息系統，該系統允許發件人發送消息和接收器來讀取該消息。在Apache Kafka消息傳遞中，發件人被稱為發布消息的生產者，並且接收器被稱為消費者，通過訂閱該消息，可以消費該消息。該系統的一個示例是您的有線電視發布許多頻道，任何人都可以訂閱他們選擇的頻道，並在訂閱的頻道可用時獲得。

## 基本條款 {#terms}

在我們談論最佳消息隊列Apache Kafka之前，您必須了解一些術語。
* **主題** ：屬於特定類別的消息流稱為主題。
* **分區** ：主題可能具有許多分區，因此他們可以處理任意數量的數據。
* **分區偏移** ：每個分區消息都有一個唯一的序列ID，稱為“偏移”。
* **分區的複製品** ：副本是分區的備份。它們用於防止數據丟失。
* **經紀人** ：負責維護已發布的數據。
* **kafka群集** ：Kafka擁有多個經紀人被稱為Kafka群集。
* **生產者** ：是一個或多個主題的消息的發布者。
* **消費者** ：是經紀人數據的讀者。他們訂閱多個主題，並在主題中有消息時消費。
* **領導者** ：是負責所有給定分區的所有讀取和寫入的節點。
* **追隨者** ：遵循領導說明的節點稱為追隨者。

## 安裝步驟 {#steps}


###步驟1  - 驗證Java安裝
希望您現在已經在計算機上安裝了Java，因此您只需使用以下命令對其進行驗證。
```
$ java -version
```
如果Java已成功安裝在計算機上，則可以看到已安裝的Java的版本。如果沒有，則應首先安裝Java。

###步驟2  -  Zookeeper框架安裝
訪問以下鏈接並下載最新版本的Zookeeper。
{{_LINE_46_}}
完成安裝和配置後，您可以使用以下命令啟動Zookeeper
```
$ bin/zkServer.sh start
```
然後使用以下命令從CLI連接到Zookeeper
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
一旦連接，您應該看到這樣的東西
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

###步驟3  -  Apache Kafka安裝
下載最新的Kafka最佳消息經紀版本並從以下URL中提取它
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
運行以下命令以按正確的順序啟動所有服務：
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
打開另一個終端會話並運行：
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## 創建一個主題 {#create}

要將您的消息或事件寫入主題，您必須首先創建一個主題。創建一個主題打開您的終端並運行以下命令：
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
現在，我們創建了一個名稱為“ Weather-Rupates”的主題，我們將在其中發布有關天氣的信息，消費者將消耗這些消息。
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## 將消息寫入主題 {#write}

運行控制台生產者客戶端以將一些事件寫入您的主題。默認情況下，您輸入的每一行都將導致將單獨的事件寫入主題。
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## 從主題讀取消息 {#read}

打開另一個終端會話並運行控制台消費者客戶端以閱讀您剛創建的事件：
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
隨意進行實驗：例如，切換回您的生產者終端（上一步）以編寫其他事件，並查看這些事件如何立即顯示在您的消費者終端中。

## 結論 {#conclusion}

在本教程中，我們了解了Apache Kafka使用的基礎知識。我們安裝了Kafka排隊服務，然後配置了它。我們還學習瞭如何在Kafka中創建主題，將消息發送到主題以及如何讀取主題的消息。我希望這篇文章對您有用。讓我們在下一篇文章中見面。
_您使用什麼開源分佈式事件流平台？您有任何疑問嗎？

## 探索
您可能會發現以下鏈接相關：
  * [最佳免費和開源消息隊列（MQ）軟件][10]
  * [kafka vs redis pub-sub，您應該知道的差異][11]
  * [Redis Pub/Sub及其如何工作？][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
