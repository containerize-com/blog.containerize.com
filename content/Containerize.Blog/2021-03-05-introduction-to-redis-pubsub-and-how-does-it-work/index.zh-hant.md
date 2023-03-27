---
title: "Redis Pub/sub的簡介及其如何工作？" 
seoTitle: "Redis Pub/sub的簡介及其如何工作？" 
description: "Redis Pub/sub是一種靈活，可靠，實時消息服務，用於獨立應用程序發布和訂閱異步事件。" 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/sub啟動了一個實時消息系統，在該系統中，發布者，發佈到頻道/主題，幾個客戶可以訂閱該頻道/主題。" 
url: /zh-hant/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## redis pub/sub啟動了一個實時消息系統，發布者，發佈到頻道/主題，幾個客戶可以訂閱該頻道/主題。

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

在我們的上一個教程中，“ **[REDIS REDIS內存數據庫的初學者指南][1]** ”，我們了解了Redis作為內存數據庫。並且，這是如何與NOSQL數據庫競爭的。我們還學會了在哪裡使用redis以及它的使用在哪裡不是最佳的。現在，在本知識庫之上，在本教程中，我們將了解Redis Pub/sub，它如何工作以及對REDIS發布/訂閱系統的最佳利用。讓我們開始吧。
* **[什麼是發布/訂閱模式？][2]** 
* **[酒吧/子如何工作？][3]** 
* **[什麼時候應該使用pub/sub？][4]** 
* **[如何使用redis pub/sub？][5]** 
* **[結論][6]** 

## 什麼是發布/訂閱模式？ {#what}

發布/訂閱或簡短的Pub/sub是一個消息傳遞模式，消息的發件人和接收器不會直接交換這些消息。相反，消息的發件人將其發佈到頻道/主題。而且，所有想要接收這些消息的人都將訂閱頻道/主題。因此，這更多是技術解釋。在我們的日常生活中，我們確實經常使用此Publish-Subscribe模型，同時使用YouTube，Twitter，Facebook或Instagram等社交媒體平台。內容生產者生產內容的地方，感興趣的人將遵循 /訂閱內容。因此，這也是Pub/sub模式在軟件體系結構中的究竟所做的。

## 酒吧/子如何工作？ {#how}

在軟件開發中，強調可重複使用性非常高。所有設計模式均基於構建可重複使用的組件或模塊。因此，要了解酒吧/潛艇，您首先需要查看這個想法的來源以及開發人員如何將其視為模式。
隨著軟件體系結構的發展和更多基於模塊的發展，模塊和組件之間的通信 /消息傳遞增加了。就像，將一個模塊視為處理一些輸入並提供一些輸出的處理單元。每個輸入實際上是處理單元處理並生成另一個消息作為輸出的消息。這將是對其他模塊的輸入。因此，消息傳遞的增加需要特別關注，以便具有可擴展的應用程序，需要模塊和組件可以在沒有依賴項的情況下獨立工作。因此，出版/訂閱模式來了。
在許多Pub/Sub Systems中，出版商將消息發佈到中間消息代理或事件總線，訂閱者在該經紀人中註冊訂閱，讓經紀人執行過濾。經紀人通常會執行商店和轉發功能，以將消息從發布者到訂戶路由。此外，經紀人可以在路由前在隊列中優先考慮消息。

## **您什麼時候應該使用pub/sub？** {#when}

聊天應用程序是酒吧/子模式的經典用例。在聊天應用程序中，參與者可以訂閱具有指定的酒吧/子主題的聊天室。當用戶將消息發送到聊天室時，她的聊天應用程序實例將在聊天室的主題上發布消息。該主題的訂閱者會收到消息。
消息隊列服務 /消息隊列或批處理處理應用程序也可以使用酒吧 /子模式。所有想完成特定任務的人都會將消息發布給訂閱該隊列的隊列和處理單元，將收到處理工作的消息。
讓我們討論酒吧/子模式的一些優點
* 系統組件之間的鬆散耦合
* 更好的全系統工作流程的視圖
* 啟用更好，更快的集成
* 確保更光滑的可伸縮性
* 保證一致的可靠性
* 建立彈性
* 軟件模塊化
* 語言不可知軟件開發
* 商業邏輯的清晰度
* 提高響應能力

## 如何使用Redis Pub/sub {#redis-pubsub}

對於Redis安裝，您可以參考我的[最後教程][1]。此示例說明了發布者和訂閱者概念的工作方式。在下面的示例中，一個客戶訂閱了一個名為“ Redischat”的頻道。
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
現在，兩個客戶端在名為“ Redischat”的同一頻道上發布消息，上述客戶端正在接收消息。
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

## 結論 {#conclusion}

在本教程中，我們了解了發布/訂閱設計模式。並探討了Redis Pub/Sub的工作原理。我們還探索了什麼是Redis Pub/Sub，實時消息的最佳用例。在我即將舉行的教程中，我們將進一步探索Redis，並解釋如何將Redis Pub/sub與Node.js一起構建實時聊天應用程序。



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
