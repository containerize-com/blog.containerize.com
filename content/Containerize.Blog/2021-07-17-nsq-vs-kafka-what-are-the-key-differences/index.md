---
title: NSQ vs Kafka | What Are The Key Differences?
seoTitle: NSQ vs Kafka | What Are The Key Differences?
description: Messaging queue platform offers a way to communicate asynchronously. This article is about NSQ and Kafka distributed message queue system differences.
date: Sat, 17 Jul 2021 03:54:59 +0000
author: yasir saeed
summary: Messaging queue platform offers a way to communicate asynchronously while improving performance and scalability. This article is about NSQ and Kafka comparison.
url: /backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
aliases: 
    -  /2021/07/17/nsq-vs-kafka-what-are-the-key-differences/
categories: ['Backup and Sync Software']

---
## Messaging queue platform offers a way to communicate asynchronously while improving performance and scalability. This article is about NSQ and Kafka comparison.

{{< figure align=center src="images/nsq-vs-kafka.png" alt="NSQ vs Kafka | What Are The Differences?">}}| What Are The Differences?">  

## **Overview**

Distributed messaging systems form the core of big data streaming, cloud native applications and microservice architecture as the system grows bigger. There is a growing need for built in messaging queue platform that is reliable, scalable and fault tolerant with low latency for real time applications. Messaging queue platform offers way to communicate and coordinate asynchronously while improving performance, reliability, and scalability.

Distributed messaging systems are now widespread and are constantly evolving. There are multiple modern message queue systems that have come up all with their own pros and cons. Best open source message queue systems form the middleware infrastructure for big data streaming, micro-services and cloud-based applications. This has become problematic for the business companies to decide which messaging system is the most suitable for a specific application. A deep understanding is required to decide which features of a messaging system meet the needs of a specific application.

This blog article outlines the modern messaging queue platform NSQ vs Kafka. The article provides information about distributed messaging systems NSQ vs Kafka, comparison of features to facilitate users to make an informed decision for real time application and also pave way for future research and development.

  * What is Kafka?
  * What is NSQ?
  * Comparison NSQ vs Kafka
  * Why Kafka over NSQ?
  * Conclusion

## 1. What is Kafka?

[Kafka][1] is an open source distributed event streaming platform, written in Scala language developed by LinkedIn. It is publish subscribe messaging system and has the ability to handle a high volume of messages. Kafka is “Distributed, durable, fault tolerant, high throughput pub-sub messaging system” and you can do both real-time and batch processing with Kafka. It is a distributed, partitioned, replicated commit log messaging service across nodes and runs on JVM. Kafka best message queue is simple to use and provides the functionality of a messaging queue system but with a unique design.

Distributed message queue kafka servers are known as brokers and these form a Kafka cluster. A zookeeper is responsible for coordination between all the brokers in a cluster. Apache kafka message broker is used by Unicorn startups, health and top financial organizations like LinkedIn, FB, Netflix, Bank OF America, Chase Bank, yahoo, twitter and others. Open source message queue software Kafka architecture consists of producers, consumers, brokers, zookeeper, topics, partitions, records and logs.

## 2. What is NSQ? {#ce62}

[NSQ][2] is an open source realtime distributed messaging platform which is a successor of simplequeue. Developer describe NSQ as “A realtime distributed messaging platform” built by Bitly. Open source message broker softwareNSQ is incredibly simple messaging platform designed and operates at a scale, handling billions of messages per day. It is a traditional buffered messaging system which promotes decentralized topologies without single points of failure. It enables fault tolerance and high availability coupled with a reliable message delivery system.

NSQ offers high availability topology that minimizes SPOF. It increase the availability by setting up multiple instances for nsqd and nsqlookupd. Moreover, it guarantees that the message is delivered at least once with certain degree of persistence and is easy to configure. Best message broker NSQ is more flexible and it supports message persistence. It has a shiny admin dashboard. NSQ queue messaging system has 19.9K GitHub stars and 2.6K GitHub forks.

## 3. Comparison NSQ vs Kafka {#ce62}

NSQ and Kafka both messaging queue have a unique way of defining their architecture and how their broker works, but in several points, this might be a consideration which platform you would like to prefer:

  * Availability

If the NSQD server crashes ungracefully then there might be a possible loss of data. Kafka supports built in replication and partitioning which make it have a higher availability and more reliability. Due to replication factor N, Kafka could tolerate N-1 server failures without losing any data records.

  * Persistence

NSQ will delete the message if the consumer have already sent the finish signal for the message.  
Kafka offers persistence which seems extremely rare in distributed message queue. Messages persist after a certain specified time or size from the moment they are delivered.

  * Replay-able messages

NSQ provides dead simple archiving of messages but doesn’t support any native replay ability.  
On the other hand, Kafka has the persistence storage system of the records and they provide the capability of effective replaying the message over and over again as long as it is stored on the system.

  * Order of the message

Since multiple instances of NSQD doesn’t communicate with each other and there is always a possibility of an unordered message. While Kafka maintains each of their partitions with a structured sequence of records. Kafka will always provide an exact order of the messages in a partition.

## 4. Why Kafka over NSQ? {#ce62}

High-throughput is the primary reason why developers consider Kafka over the competitors, whereas It’s in golang was stated as the key factor in picking NSQ message queue mq. NSQ and Kafka are both message queuing service. But primary difference is that Kafka is structured as an ordered log but NSQ is not. Kafka is known for its strict guarantees and reliability regarding data loss, while NSQ is a simpler and more easy to deploy message queue.

NSQ with 20K GitHub stars and 2.6K forks on GitHub appears to be more popular than Kafka with 19.4K GitHub stars and 10.3K GitHub forks. According to the StackShare community, Kafka has a broader approval, being mentioned in 509 company stacks & 470 developers stacks; compared to NSQ, which is listed in 21 company stacks and 8 developer stacks.

## Conclusion: {#4a1a}

This article provided a brief comparison on the working of popular messaging frameworks – NSQ and Kafka. Article feature comparisons revolved around message queue throughput, persistence, reliability, latency, scalability and availability. These parameters are important to decide the suitability of a framework for a real time application. Hence, it is a good article for a thorough understanding to choose the right framework. Messaging queue software are the backbone of the future technology in the market that can handle high processing. In our upcoming tutorials, we’ll discuss about more interesting topics related to open source messaging platforms.

_Your can join us on [Twitter][3], [LinkedIn][4] and our [Facebook][5] page. What message queue platform do you use online?. If you have any questions, please_ [get in touch][6].

## Explore:

We also have several other articles relating to the day-to-day management of your server.

  * [Redis-backed Queuing System For Background Processing][7]
  * [Fastest Background Job Processing System][8]
  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][9]
  * [How To Install and Secure phpMyAdmin with Nginx on Ubuntu][10]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][11]

 [1]: https://kafka.apache.org/
 [2]: https://nsq.io/
 [3]: https://twitter.com/containerize_co
 [4]: https://www.linkedin.com/company/containerize/
 [5]: http://facebook.com/containerize
 [6]: mailto:yasir.saeed@aspose.com
 [7]: https://products.containerize.com/message-queue-software/resque/
 [8]: https://products.containerize.com/message-queue-software/sidekiq/
 [9]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [10]: https://blog.containerize.com/2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [11]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/