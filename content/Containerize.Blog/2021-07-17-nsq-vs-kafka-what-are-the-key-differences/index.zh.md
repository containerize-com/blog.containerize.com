---
title: "NSQ vs Kafka |什么是主要区别？" 
seoTitle: "NSQ vs Kafka |什么是主要区别？" 
description: "消息传递队列平台提供了一种异步通信的方法。本文是关于NSQ和KAFKA分布式消息队列系统差异的。" 
date: Sat, 17 Jul 2021 03:54:59 +0000
author: yasir saeed
summary: "消息传递队列平台提供了一种在提高性能和可扩展性的同时进行沟通的方法。本文涉及NSQ和KAFKA比较。" 
url: /zh/nsq-vs-kafka-what-are-the-key-differences/
categories: ['Backup and Sync Software']
---

## 消息传递队列平台提供了一种在提高性能和可伸缩性的同时进行沟通的方法。本文涉及NSQ和KAFKA比较。

{{< figure align=center src="images/nsq-vs-kafka.png" alt="NSQ vs Kafka |有什么区别？|NSQ vs Kafka |有什么区别？?">}}


## **概述**
随着系统的增长，分布式消息系统构成了大数据流，云本机应用程序和微服务体系结构的核心。对内置消息队列平台的需求日益增长，可靠，可扩展性和容忍度为实时应用程序延迟较低。消息传递队列平台提供了交流和协调异步的方式，同时提高性能，可靠性和可扩展性。
分布式消息传递系统现在广泛并且正在不断发展。有多个现代消息队列系统都有自己的优点和缺点。最佳开源消息队列系统形成了用于大数据流，微服务和基于云的应用程序的中间件基础架构。对于业务公司决定哪种消息系统最适合特定应用程序已成为问题。需要深入了解，以确定消息系统的哪些功能满足特定应用程序的需求。
这篇博客文章概述了现代消息队列平台NSQ与Kafka。本文提供了有关分布式消息传递系统NSQ与Kafka的信息，《比较功能以促进用户为实时应用做出明智的决定，并为未来的研究和开发铺平了道路。
  *什么是卡夫卡？
  *什么是NSQ？
  *比较NSQ与Kafka
  *为什么要在NSQ上进行卡夫卡？
  * 结论

## 1.什么是卡夫卡？
[KAFKA][1]是一个开源分布式事件流平台，用LinkedIn开发的Scala语言编写。它是发布订阅消息系统，并且具有处理大量消息的能力。 Kafka是“分布式，耐用，容忍度，高通用酒吧式通讯系统”，您可以使用Kafka进行实时和批处理处理。它是跨节点的分布式，分区，复制的提交日志消息服务，并在JVM上运行。 Kafka最佳消息队列易于使用，并提供消息队列系统的功能，但具有独特的设计。
分布式消息队列Kafka服务器被称为经纪人，它们形成了Kafka群集。 Zookeeper负责集群中所有经纪人之间的协调。 Apache Kafka消息经纪人由Unicorn初创公司，健康和顶级金融组织（如LinkedIn，FB，Netflix，America，America，Chase Bank，Yahoo，Twitter等）使用。开源消息队列软件KAFKA架构由生产者，消费者，经纪人，Zookeeper，主题，分区，记录和日志组成。

## 2.什么是NSQ？   {#CE62}
[NSQ][2]是一个开源实时分布式消息平台，它是SimpleQueue的后继产品。开发人员将NSQ描述为Bitly构建的“实时分布式消息平台”。开源消息经纪SoftWarensq是设计和操作的非常简单的消息平台，每天处理数十亿条消息。这是一个传统的缓冲消息系统，可促进没有单点故障的分散拓扑。它可实现容错和高可用性，并加上可靠的消息传递系统。
NSQ提供高可用性拓扑，可最大程度地减少SPOF。它通过为NSQD和NSQLOOKUPD设置多个实例来增加可用性。此外，它可以保证消息至少以一定程度的持久性传递一次，并且易于配置。最佳消息经纪人NSQ更加灵活，并且支持消息持久性。它具有闪亮的管理仪表板。 NSQ队列消息传递系统具有19.9k GitHub星和2.6K GitHub叉。

## 3.比较NSQ与Kafka   {#CE62}
NSQ和KAFKA两人都有一种独特的方式来定义其体系结构以及经纪人的工作方式，但是在几个方面，这可能是您想要哪个平台的考虑：
  * 可用性
如果NSQD服务器不得不崩溃，则可能会丢失数据。 Kafka支持复制和分区内置，使其具有更高的可用性和更可靠性。由于复制因子N，KAFKA可以忍受N-1服务器故障而不会丢失任何数据记录。
  *持久性
如果消费者已经发送了消息的完成信号，则NSQ将删除消息。
Kafka提供的持久性在分布式消息队列中似乎极为罕见。从传递的那一刻起，消息在特定的时间或大小之后持续存在。
  *可重播消息
NSQ提供了简单的消息归档，但不支持任何本机重播能力。
另一方面，Kafka具有记录的持久存储系统，并且只要将消息存储在系统上，它们就可以一遍又一遍地重复该消息的能力。
  *消息顺序
由于NSQD的多个实例不会相互通信，并且总是有可能发出无序的消息。尽管Kafka使用结构化的记录序列维护每个分区。 Kafka将始终提供分区中消息的确切顺序。

## 4.为什么要在NSQ上进行卡夫卡？   {#CE62}
高通量是开发人员考虑Kafka对竞争对手的主要原因，而在Golang中，将其视为选择NSQ消息队列MQ的关键因素。 NSQ和KAFKA都是消息排队服务。但是主要的区别是，kafka的结构是有序的日志，但NSQ不是。 Kafka以其严格的保证和对数据丢失的可靠性而闻名，而NSQ则更简单，更容易部署消息队列。
NSQ在Github上带有20k GitHub星和2.6K叉子似乎比Kafka更受欢迎，具有19.4k Github星和10.3k Github叉。根据StackShare社区的数据，Kafka得到了更广泛的认可，在509 Company Stacks和470个开发人员堆栈中提到；与NSQ相比，NSQ在21个公司堆栈和8个开发人员堆栈中列出。

## 结论： {#4a1a}
本文对流行消息框架的工作进行了简要比较 -  NSQ和KAFKA。文章功能比较围绕消息队列吞吐量，持久性，可靠性，延迟，可扩展性和可用性进行了比较。这些参数对于确定实时应用程序的框架的适用性很重要。因此，选择正确的框架是一篇很好的文章。消息传递队列软件是市场上未来技术的骨干，可以处理高处理。在即将到来的教程中，我们将讨论与开源消息平台有关的更多有趣的主题。
_您可以在[Twitter][3]，[LinkedIn][4]和我们的[Facebook][5]页面上加入我们。您在线使用什么消息队列平台？如果您有任何疑问，请_ [联系][6]。

## 探索：
我们还有其他几篇与您的服务器日常管理有关的文章。
  * [用于背景处理的重新支持的排队系统][7]
  * [最快的背景工作处理系统][8]
  * [如何将Apache配置为Ubuntu/Debian的反向代理][9]
  * [如何在Ubuntu上使用nginx安装和保护PhpMyAdmin][10]
  * [安全和加密NGINX与Let's Encrypt在Ubuntu 20.04][11]

  
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
