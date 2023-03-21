---
title: "kafka vs redis pub-sub，您应该知道的差异" 
seoTitle: "kafka vs redis pub-sub，您应该知道的差异" 
description: "如果您正在寻找管理大量数据并在Kafka和Redis之间感到困惑的工具。本文Kafka vs Redis Pub-Sub将为您提供帮助。" 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis和Kafka是两种不同的工具，它们以自己的方式从事类似的工作。 Kafka vs redis比较为您提供了您应该知道的见解。" 
url: /zh/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="kafka vs redis pub sub">}}


## Redis和Kafka是两个不同的工具，它们以自己的方式从事类似的工作。 Kafka vs redis比较为您提供了您应该知道的见解。
在有关“ redis”的一系列文章中，我们了解了[Redis的基础][1]，然后我们探讨了[Redis Pub/sub Works][2]以及这如何与NOSQL数据库竞争。在今天的系列系列中，我们将与Redis与Kafka进行比较，Kafka是其各种任务中的竞争对手之一。在本文Kafka vs Redis Pub-Sub中，我们将探讨Kafka与Redis有什么不同，以及它们的相似之处是什么。因此，让我们开始。
  *什么是卡夫卡？
  *什么是Redis？
  *主要区别是什么？
  *什么时候使用哪个？
  * 结论

## 什么是卡夫卡？
Apache Kafka是一个开源分布式事件流平台。它用于高性能数据管道和流分析。 Kafka充当[Publish-Subscribe消息系统][3]。这样，您可以处理新数据，因为它以高速生成，并且还可以将其保存到某些数据库中。
Kafka是一个分布式系统，由**服务器**和**客户端**组成。它可以在本地和云环境中的裸机硬件，虚拟机和容器中部署。

## 什么是Redis？
Redis是一家开源的高级钥匙值商店。它支持几种数据类型：字符串，哈希，列表，集合和排序集。这就是为什么通常将其称为数据结构服务器的原因。
REDIS也被视为NOSQL数据库。有关He Redis的详细讨论以及它的工作原理，您可以参考我们的文章“ [REDIS REDIS内存数据库的初学者指南][1]”。

## 主要区别是什么？
**redis**  pub-sub大多就像是燃烧系统的系统，在该系统中，您生成的所有消息都将立即传递给所有消费者，并且数据不会存储在任何地方。您对Redis有内存的局限性。此外，生产者和消费者的数量可能会影响Redis的性能。
另一方面，**kafka** 是可以用作队列的高吞吐量，分布式日志。它还为通过队列发送的消息提供了持久性。
**redis **支持** 基于推动的消息。这意味着将所有消息推向REDIS都将自动传递给所有订户。
**kafka **，但是，支持** 基于拉的消息。意思是发布给Kafka的消息不会自动分发给订户。相反，消费者准备食用这些消息时要求提供消息。
**redis **不存储消息，而是立即将消息传递给所有消费者，然后删​​除。但是， **kafka**  是日志，您始终有消息。您可以通过制定保留政策说7天**保留**来监控这一点。

## 何时使用哪个？

### redis
  *如果您想要一种燃烧的系统，其中所有产生的消息都会立即传递给消费者。
  *如果**速度**最关心。
  *如果**存储**并不重要，并且您不希望您的系统持有已发送的消息
  *将要处理的数据量并不大。

### Kafka
  *如果您想要**可靠性**。
  *如果您希望您的系统即使在消费后也有发送的消息副本。
  *如果**速度**不是一个大问题。
  *您的数据大小很大。

## 结论
在此教程Kafka vs Redis Pub-Sub中，我们探索了Kafka和Redis。他们的差异和相似之处是什么？我们还了解到您何时应该重新使用kafka，何时又有好事。在即将到来的教程中，我们将探讨有关Kafka和深入分析的更多信息。

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

# 什么
