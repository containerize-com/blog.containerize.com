---
title: "apache kafka教程 - 对Kafka的介绍初学者" 
seoTitle: "apache kafka教程 - 对Kafka的介绍初学者" 
description: "Apache Kafka是一个开源分布式事件流平台。本教程是理解Apache Kafka接地的初学者指南。" 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka是一个开源分布式事件流平台。本教程使您从初学者的角度介绍了Kafka。" 
url: /zh/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka是一个开源分布式事件流平台。本教程为您从初学者的角度介绍了Kafka。

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka开源教程">}}

最近，我们写了一篇有关“ Kafka vs redis Pub-Sub”的文章，其中解释了Kafka和Redis Pub-Sub之间的差异。在这篇文章中，我们简短地解释了Kafka消息经纪人本身。因此，现在本文使您可以更深入地了解Apache Kafka开源分布式事件流平台，并为您提供所有必要的介绍，以启动Kafka分布式消息队列。因此，让我们开始。
  * [Apache Kafka简介][1]
  * [什么是消息系统？][2]
  * [基本术语][3]
  * [安装步骤][4]
  * [创建一个主题][5]
  * [将消息写入主题][6]
  * [读取主题的消息][7]
  * [结论][8]

## Apache Kafka简介{#intro}
Apache Kafka开源消息经纪在LinkedIn启动，后来成为一个开源Apache项目。 Kafka消息代理软件是在Scala和Java中开发的。 Apache Kafka经纪人是一个发布订阅消息系统，它也可以在应用程序，服务器和处理器之间交换数据。它是快速，可扩展的，并且按设计分发。它能够每秒处理数百万个数据或消息。它是源（生产者）系统和目标（消费者）系统之间的调解人。 Netflix，Uber和数千家公司等组织使用Apache Kafka实时流媒体。与其他消息系统相比，KAFKA消息队列软件具有更好的吞吐量，内置分区，复制和固有的容错公差。这使其非常适合大规模消息处理应用程序。

## 什么是消息系统？ {#messaging}
消息系统是两个或多个人，设备等之间的消息简单交换。它负责从一个应用程序到另一个应用程序的数据传输，因此应用程序可以专注于数据，但不必担心如何共享。
一种类型的消息传递系统是“点到点消息系统”。在此系统中，生产者发送时将存储在队列中。只有一个消费者可以在任何给定时间消耗消息。而且，一旦消耗消息，它将从队列中删除。该系统的示例之一是订单处理系统。只有一个进程可以收取订单。
消息系统的另一种类型是Pub-sub消息系统，该系统允许发件人发送消息和接收器来读取该消息。在Apache Kafka消息传递中，发件人被称为发布消息的生产者，并且接收器被称为消费者，通过订阅该消息，可以消费该消息。该系统的一个示例是您的有线电视发布许多频道，任何人都可以订阅他们选择的频道，并在订阅的频道可用时获得。

## 基本术语{#terms}
在我们谈论最佳消息队列Apache Kafka之前，您必须了解一些术语。
  ***主题**：属于特定类别的消息流称为主题。
  ***分区**：主题可能具有许多分区，因此他们可以处理任意数量的数据。
  ***分区偏移**：每个分区消息都有一个唯一的序列ID，称为“偏移”。
  ***分区的复制品**：副本是分区的备份。它们用于防止数据丢失。
  ***经纪人**：负责维护已发布的数据。
  *** kafka群集**：Kafka拥有多个经纪人被称为Kafka群集。
  ***生产者**：是一个或多个主题的消息的发布者。
  ***消费者**：是经纪人数据的读者。他们订阅多个主题，并在主题中有消息时消费。
  ***领导者**：是负责所有给定分区的所有读取和写入的节点。
  ***追随者**：遵循领导说明的节点称为追随者。

## 安装步骤{#steps}

### 步骤1  - 验证Java安装
希望您现在已经在计算机上安装了Java，因此您只需使用以下命令对其进行验证。
```
$ java -version
```
如果Java已成功安装在计算机上，则可以看到已安装的Java的版本。如果没有，则应首先安​​装Java。

### 步骤2  -  Zookeeper框架安装
访问以下链接并下载最新版本的Zookeeper。
{{_LINE_46_}}
完成安装和配置后，您可以使用以下命令启动Zookeeper
```
$ bin/zkServer.sh start
```
然后使用以下命令从CLI连接到Zookeeper
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
一旦连接，您应该看到这样的东西
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### 步骤3  -  Apache Kafka安装
下载最新的Kafka最佳消息经纪版本并从以下URL中提取它
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
运行以下命令以按正确的顺序启动所有服务：
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
打开另一个终端会话并运行：
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## 创建一个主题{#create}
要将您的消息或事件写入主题，您必须首先创建一个主题。创建一个主题打开您的终端并运行以下命令：
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
现在，我们创建了一个名称为“ Weather-Rupates”的主题，我们将在其中发布有关天气的信息，消费者将消耗这些消息。
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## 将消息写入主题{#write}
运行控制台生产者客户端以将一些事件写入您的主题。默认情况下，您输入的每一行都将导致将单独的事件写入主题。
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## 从主题{#read}读取消息
打开另一个终端会话并运行控制台消费者客户端以阅读您刚创建的事件：
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
随意进行实验：例如，切换回您的生产者终端（上一步）以编写其他事件，并查看这些事件如何立即显示在您的消费者终端中。

## 结论{#conclusion}
在本教程中，我们了解了Apache Kafka使用的基础知识。我们安装了Kafka排队服务，然后配置了它。我们还学习了如何在Kafka中创建主题，将消息发送到主题以及如何读取主题的消息。我希望这篇文章对您有用。让我们在下一篇文章中见面。
_您使用什么开源分布式事件流平台？您有任何疑问吗？

## 探索
您可能会发现以下链接相关：
  * [最佳免费和开源消息队列（MQ）软件][10]
  * [kafka vs redis pub-sub，您应该知道的差异][11]
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
