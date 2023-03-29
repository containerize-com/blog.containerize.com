---
title: "Redis Pub/sub的简介及其如何工作？" 
seoTitle: "Redis Pub/sub的简介及其如何工作？" 
description: "Redis Pub/sub是一种灵活，可靠的实时消息服务，用于独立应用程序发布和订阅异步事件。" 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/sub启动了一个实时消息系统，在该系统中，发布者，发布到频道/主题，几个客户可以订阅该频道/主题。" 
url: /zh/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## redis pub/sub启动了一个实时消息系统，在该系统中，发布者，发布到频道/主题，几个客户可以订阅该频道/主题。

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

在我们的上一个教程中，“ **[REDIS REDIS内存数据库的初学者指南][1]** ”，我们了解了Redis作为内存数据库。并且，这是如何与NOSQL数据库竞争的。我们还学会了在哪里使用redis以及它的使用在哪里不是最佳的。现在，在本知识库之上，在本教程中，我们将了解Redis Pub/sub，它如何工作以及对REDIS发布/订阅系统的最佳利用。让我们开始吧。
* **[什么是发布/订阅模式？][2]** 
* **[酒吧/子如何工作？][3]** 
* **[什么时候应该使用pub/sub？][4]** 
* **[如何使用redis pub/sub？][5]** 
* **[结论][6]** 

## 什么是发布/订阅模式？ {#what}

发布/订阅或简短的Pub/sub是一个消息传递模式，消息的发件人和接收器不会直接交换这些消息。相反，消息的发件人将其发布到频道/主题。而且，所有想要接收这些消息的人都将订阅频道/主题。因此，这更多是技术解释。在我们的日常生活中，我们确实经常使用此Publish-Subscribe模型，同时使用YouTube，Twitter，Facebook或Instagram等社交媒体平台。内容生产者生产内容的地方，感兴趣的人将遵循 /订阅内容。因此，这也是Pub/sub模式在软件体系结构中的究竟所做的。

## 酒吧/子如何工作？ {#how}

在软件开发中，强调可重复使用性非常高。所有设计模式均基于构建可重复使用的组件或模块。因此，要了解酒吧/潜艇，您首先需要查看这个想法的来源以及开发人员如何将其视为模式。
随着软件体系结构的发展和更多基于模块的发展，模块和组件之间的通信 /消息传递增加了。就像，将一个模块视为处理一些输入并提供一些输出的处理单元。每个输入实际上是处理单元处理并生成另一个消息作为输出的消息。这将是对其他模块的输入。因此，消息传递的增加需要特别关注，以便具有可扩展的应用程序，需要模块和组件可以在没有依赖项的情况下独立工作。因此，出版/订阅模式来了。
在许多Pub/Sub Systems中，出版商将消息发布到中间消息代理或事件总线，订阅者在该经纪人中注册订阅，让经纪人执行过滤。经纪人通常会执行商店和转发功能，以将消息从发布者到订户路由。此外，经纪人可以在路由前在队列中优先考虑消息。

## **您什么时候应该使用pub/sub？** {#when}

聊天应用程序是酒吧/子模式的经典用例。在聊天应用程序中，参与者可以订阅具有指定的酒吧/子主题的聊天室。当用户将消息发送到聊天室时，她的聊天应用程序实例将在聊天室的主题上发布消息。该主题的订阅者会收到消息。
消息队列服务 /消息队列或批处理处理应用程序也可以使用酒吧 /子模式。所有想完成特定任务的人都会将消息发布给订阅该队列的队列和处理单元，将收到处理工作的消息。
让我们讨论酒吧/子模式的一些优点
* 系统组件之间的松散耦合
* 更好的全系统工作流程视图
* 启用更好，更快的集成
* 确保更光滑的可伸缩性
* 保证一致的可靠性
* 建立弹性
* 软件模块化
* 语言不可知软件开发
* 商业逻辑的清晰度
* 提高响应能力

## 如何使用Redis Pub/sub {#redis-pubsub}

对于Redis安装，您可以参考我的[最后教程][1]。此示例说明了发布者和订阅者概念的工作方式。在下面的示例中，一个客户订阅了一个名为“ Redischat”的频道。
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
现在，两个客户端在名为“ Redischat”的同一频道上发布消息，上述客户端正在接收消息。
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## 结论 {#conclusion}

在本教程中，我们了解了发布/订阅设计模式。并探讨了Redis Pub/Sub的工作原理。我们还探索了什么是Redis Pub/Sub，实时消息的最佳用例。在我即将举行的教程中，我们将进一步探索Redis，并解释如何将Redis Pub/sub与Node.js一起构建实时聊天应用程序。



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
