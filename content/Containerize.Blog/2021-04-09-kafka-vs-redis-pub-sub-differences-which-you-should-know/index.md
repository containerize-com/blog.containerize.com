---
title: Kafka vs Redis Pub-Sub, Differences which you should know
seoTitle: Kafka vs Redis Pub-Sub, Differences which you should know
description: If you are looking for tools to manage a large amount of data and confuse between Kafka and Redis. This article Kafka vs Redis Pub-Sub will help you.
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: Redis and Kafka are two different tools that happen to be doing similar jobs in their own ways. Kafka vs Redis comparison gives you insight which you should know.
url: /kafka-vs-redis-pub-sub-differences-which-you-should-know/

categories: ['Database Management Software']

---
{{< figure align=center src="images/kafka-vs-redis.png" alt="kafka vs redis pub sub">}} 

## Redis and Kafka are two different tools that happen to be doing similar jobs in their own ways. Kafka vs Redis comparison gives you insight which you should know.

In our series of articles about “Redis” we learned about the [basics of Redis][1], then we explored [how Redis Pub/Sub works][2] and how this competes with the NoSQL databases. Moving forward in our series of Today we’ll compare Redis with Kafka which is one of its competitors in various tasks. In this article Kafka vs Redis Pub-Sub, we’ll explore what Kafka is how it’s different from Redis, and what are the similarities in them. So, let’s get started.

  * What is Kafka?
  * What is Redis?
  * What are the Main Differences?
  * When to use Which?
  * Conclusion

## What is Kafka?

Apache Kafka is an open-source distributed event stream platform. Its used for high-performance data pipelines, and streaming analytics. Kafka acts as a [publish-subscribe messaging system][3]. With this, you can process new data as its generated at high speeds and additionally can save it to some database as well. 

Kafka is a distributed system consisting of **servers** and **clients**. It can be deployed on bare-metal hardware, virtual machines, and containers in on-premise as well as cloud environments.

## What is Redis?

Redis is an open-source, advanced key-value store. It supports several data types: Strings, Hashes, Lists, Sets, and Sorted Sets. That’s why it is often referred to as a data structure server. 

Redis is also consider as a NoSQL database. For a detailed discussion about he Redis and a how it works you can refer to our article “[A Beginner’s Guide to Redis In-Memory Database][1]“.

## What are the Main Differences?

**Redis** pub-sub is mostly like a fire-and-forget system where all the messages you produced will be delivered to all the consumers at once and the data is not stored anywhere. You have limitations in memory with respect to Redis. Also, the number of producers and consumers can affect the performance of Redis.

On the other hand, **Kafka** is a high throughput, distributed log that can be used as a queue. It also provides persistence for the messages sent through the queue.

**Redis** supports **push-based** delivery of messages. This means every message pushed to Redis will be delivered automatically to all the subscribers.

**Kafka**, however, supports **pull-based** delivery of messages. Meaning messages published to Kafka don’t get distributed to the subscribers automatically. Instead, consumers ask for the messages when they are ready to consume those messages.

**Redis** does not store messages instead, messages are delivered at once to all the consumers and then removed. However, **Kafka** being a log, you always have messages. You can monitor this by setting a retention policy say 7 days **retention**.

## When to use Which?

### Redis

  * If you want a fire-and-forget kind of system, where all the messages that you produce are delivered instantly to consumers.
  * If **speed** is most concerned.
  * If **storage** is not important, and you don’t want your system to hold the message that has been sent
  * The amount of data that is gonna be dealt with is not huge.

### Kafka

  * If you want **reliability**.
  * If you want your system to have a copy of messages that have been sent even after consumption.
  * If **Speed** is not a big concern.
  * And your data size is huge.

## Conclusion

In this tutorial Kafka vs Redis Pub-Sub, we explored Kafka and Redis. What are their differences and similarities? We also learned when you should Redis and when it’s good to use Kafka. In our upcoming tutorials, we’ll explore more about Kafka and in-depth analysis.

 [1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/

 [2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

 [3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
#what