---
title: Introduction to Redis Pub/Sub and How Does It Work?
seoTitle: Introduction to Redis Pub/Sub and How Does It Work?
description: Redis Pub/Sub is a flexible, reliable, real-time messaging service for independent applications to publish and subscribe to asynchronous events.
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: Redis Pub/Sub implements a real-time messaging system, where publishers, publish to a channel/topic and several clients can subscribe to that channel/topic.
url: /database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

categories: ['Database Management Software']

---
## Redis Pub/Sub implements a real-time messaging system, where publishers, publish to a channel/topic and several clients can subscribe to that channel/topic.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}  

In our last tutorial “**[A Beginner’s Guide to Redis In-Memory Database][1]**” we learned about Redis as an in-memory database. And, how this competes with the NoSQL Databases. We also learned where to use Redis and where its use is not optimal. Now building on top of that knowledge base, in this tutorial we’ll learn about Redis Pub/Sub, how does it work, and what the best use of the Redis Publish/Subscribe System. Let’s get started.

  * **[What is Publish/Subscribe Pattern?][2]**
  * **[How Does the Pub/Sub Work?][3]**
  * **[When Should you Use Pub/Sub?][4]**
  * **[How to use Redis Pub/Sub?][5]**
  * **[Conclusion][6]**

## What is Publish/Subscribe Pattern? {#what}

Publish/Subscribe or in short Pub/Sub is a messaging pattern where the sender and receiver of the messages don’t exchange those messages directly. Rather, the sender of the message publishes it to a channel/topic. And, all those who want to receive those messages will subscribe to the channel/topic. So, that was more of a technical explanation. In our daily life, we do use this publish-subscribe model quite often while using social media platforms like Youtube, Twitter, Facebook, or Instagram. Where the content producers produce the content and those who are interested will Follow / Subscribe to the content. So this is what exactly Pub/Sub Pattern does in the Software Architecture as well.

## How does the Pub/Sub Work? {#how}

In software development emphasis on reusability is very high. And all the design patterns are based on building reusable components or modules. So to understand the Pub/Sub you first need to look at where this idea came from and how the developers found it as a pattern. 

As the software architectures evolved and more module-based they became, more communication / messaging increased between the modules and components. Like, think of a module as a processing unit that takes some input and provides some output. And each input is actually a message on which the processing unit processes and generates another message as output. Which will be an input to some other module. So, this increase of messaging required special attention, as to have scalable applications there was a requirement that modules and components can work independently without dependencies. Hence, came the Publish/Subscribe pattern. 

In many pub/sub systems, publishers post messages to an intermediary message broker or event bus, and subscribers register subscriptions with that broker, letting the broker perform the filtering. The broker normally performs a store and forward function to route messages from publishers to subscribers. In addition, the broker may prioritize messages in a queue before routing.

## **When Should you Use Pub/Sub?** {#when}

Chat applications are a classic use case of the Pub/Sub pattern. In a chat application, participants can subscribe to chat rooms which have a designated Pub/Sub topic. When a user sends a message to a chat room, her chat app instance publishes the message on that chat room’s topic. Subscribers of the topic receive the message.

Message Queue Service / Message Queuing or batch processing applications can also use the pub/sub pattern. Where all those who want a particular task done will publish the message to a queue and processing units who have subscribed to that queue will receive the message to process the job.

Lets discuss some of the advantages of the Pub/Sub Pattern

  * Loose Coupling Between System Components
  * Better View of the System-wide Workflow
  * Enables Better & Faster Integration
  * Ensures Smoother Scalability
  * Guaranteed Consistent Reliability
  * Builds Elasticity
  * Software Modularization
  * Language Agnostic Software Development
  * The clarity in Business Logic
  * Improves Responsiveness

## How to use Redis Pub/Sub {#redis-pubsub}

For the Redis Installation, you can refer to my [last tutorial][1]. This example explains how the publisher and subscriber concept works. In the following example, one client subscribes to a channel named ‘redisChat’.


```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```


Now, two clients are publishing the messages on the same channel named ‘redisChat’ and the above-subscribed client is receiving messages.


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


## Conclusion {#conclusion}

In this tutorial, we learned about the Publish/Subscribe design pattern. And explored how the Redis pub/sub works. We also explored what are the best use cases of Redis pub/sub, real-time messaging. In my upcoming tutorial, we’ll explore the Redis further and explain how we can use Redis Pub/Sub with Node.js to build a real-time chat application.

 [1]: https://blog.containerize.com/2021/02/24/a-beginners-guide-to-redis-in-memory-database/
 [2]: #what
 [3]: #how
 [4]: #when
 [5]: #redis-pubsub
 [6]: #conclusion