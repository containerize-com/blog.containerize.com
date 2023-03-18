---
title: A Beginner’s Guide to Redis In-Memory Database
seoTitle: A Beginner’s Guide to Redis In-Memory Database
description: "Redis in-memory database is an open-source, key-value store. It's also called a NoSQL database. This redis tutorial guides you about core concepts of redis."
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: This tutorial helps you learn about Redis In-Memory Database. It is open-source and also called a key-value store, which is a type of database non-relational.
url: /a-beginners-guide-to-redis-in-memory-database/

categories: ['Database Management Software']

---
## This tutorial helps you learn about Redis In-Memory Database. It is open-source and also called a key-value store, which is a type of database non-relational.

{{< figure align=center src="images/redis-in-memory-database.png" alt="In-Memory Database Redis">}}  

**Redis** actually stands for “**RE**mote **DI**ctionary **S**erver”. Database Redis is an open-source, advanced key-value store. It supports several data types: Strings, Hashes, Lists, Sets, and Sorted Sets. That’s why it is often referred to as a data structure server. Redis is written in C. This Redis tutorial provides a good understanding of Redis in-memory database concepts. 

  * **[What is a NoSQL Database][1]**
  * **[Is Redis a NoSQL Database?][2]**
  * **[When to Use Redis?][3]**
  * **[Redis vs Other Key-Value Stores][4]**
  * **[Install Redis on Ubuntu][5]**
  * **[Conclusion][6]**

## What is a NoSQL Database {#nosql}

NoSQL databases have become very popular. Big companies rely on them to store hundreds of petabytes of data and run millions of queries per second. But what is a NoSQL database? How does it work, and why does it scale so much better than traditional, relational databases? Let’s start by quickly explaining the problem with relational databases like MySQL, MariaDB, SQL Server. 

Relational Databases are built to store relational data as efficiently as possible. You can have a table for customers, orders, and products, linking together logically. This tight organization is great for managing your data, but it comes at a cost of low scalability. They have to maintain these relationships, and that’s an intensive process, requiring a lot of memory and compute power. 

Whereas NoSQL databases can scale both vertically and horizontally. You can compare this to a building, vertically scaling means adding more floors to an existing building, while horizontal scaling means adding more buildings. Schema modification is one of the biggest challenges in Relational Databases. NoSQL databases don’t require a fixed schema which means scale easily with large amounts of data and high user loads.

## Is Redis a NoSQL Database? {#isnosql}

This is one of the most popular questions asked across the developer community on the internet. The simple answer is yes. Redis is an open-source in-memory data structure store. 

There are actually 4 different kinds of NoSQL database types, which include: Document Databases, Key-Value Stores, Wide-Column Stores, and Graph Stores. So, Server Redis in-memory database, being a Key-Value store fall under the NoSQL Database category.

## When to use Redis?  {#when}

Every technology has its merits and demerits. So, with so many options available in databases. It becomes important to understand when and when not to use a particular technology. Always pick the right tool for the job.

For stable, predictable, and relational data pick a relational database. For temporary, highly dynamic data pick a NoSQL database. Schema for database Is one of the biggest challenges in relational databases and can take forever in big database relational. 

If you have highly dynamic data that changes frequently, and you don’t have to make complex queries, rather want to store the data as key-value pairs, then Redis can be a potentially good choice. If you need a more featured document-oriented database that allows you to perform range queries, regular expression searches, indexing, and MapReduce you should check MongoDB, CouchDB, or similar.

Some example use cases of Redis in-memory database are as follows:

  * **Access Logger**: When you need to log lots of activities at fast pace, Redis is a good solution.
  * **Maintaining Counters**: You can use Redis to maintain different counts, e.g. Download Counters
  * **User’s Presence**: Due to the speed, you can use it to store User’s “online / offline” status. 
  * **Queues**: You can use Redis to maintain temporary queues to process background jobs.

## Redis vs Other Key-Value Stores {#other}

Redis in-memory database is very fast and can perform about 110000 SETs per second, about 81000 GETs per second. It supports several data types: Strings, Hashes, Lists, Sets, and Sorted Sets. Redis is single-threaded which allows it to be ACID compliant (Atomicity, Consistency, Isolation, and Durability). Other NoSQL databases generally don’t provide ACID compliance, or they provide it partially.

## Install Redis on Ubuntu {#install}

To install Redis on Ubuntu, go to the terminal and type the following commands


```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```


Following command will start the redis server


```
$ redis-server
```


To verify if the Redis server is running you can use the **redis-cli** command to connect to it.


```
$ redis-cli 
```


This command will give you the following output, which means the server is running and now you are connected.


```
redis 127.0.0.1:6379>
```


Now type the following **PING** command, and you’ll get a response from the server as **PONG**.


```
redis 127.0.0.1:6379> ping
PONG
```


## Conclusion {#conclusion}

In this Redis tutorial, we learned about Redis in-memory database. We explored the main difference between relational and non-relational (NoSQL) databases. Also, learned when should we use Redis and what are the best use cases. This tutorial is a part of an ongoing series of tutorials. In the upcoming articles, we’ll further explore Redis’s specific use cases.

 [1]: #nosql
 [2]: #isnosql
 [3]: #when
 [4]: #other
 [5]: #install
 [6]: #conclusion