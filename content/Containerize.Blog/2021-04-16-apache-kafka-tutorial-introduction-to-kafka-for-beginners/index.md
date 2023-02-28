---
title: Apache Kafka Tutorial -Introduction to Kafka for Beginners
seoTitle: Apache Kafka Tutorial -Introduction to Kafka for Beginners
description: Apache Kafka is an open-source distributed event streaming platform. This tutorial is a beginner guide to understand Apache Kafka Ground Up.
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka is an open-source distributed event streaming platform. This tutorial gives you an introduction to Kafka from a beginner's perspective. "
url: /message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/

categories: ['Message Queue Software']

---
## Apache Kafka is an open-source distributed event streaming platform. This tutorial gives you an introduction to Kafka from a beginner’s perspective. 

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka Open Source Tutorial ">}}  

Recently we wrote an article about “Kafka vs Redis Pub-Sub” which explains about the differences between Kafka and Redis Pub-Sub. In that article we shortly explained about the Kafka message broker itself. So, now this article gives you more insight into the Apache Kafka open source distributed event streaming platform and gives you all the necessary introduce to kick start with Kafka distributed message queue. So, let’s get started.

  * [Introduction to Apache Kafka][1]
  * [What is a Messaging System?][2]
  * [Fundamental Terms][3]
  * [Installation Steps][4]
  * [Create a Topic][5]
  * [Write Message into Topic][6]
  * [Read Messages from Topic][7]
  * [Conclusion][8]

## Introduction to Apache Kafka {#intro}

Apache Kafka open source message broker was started at LinkedIn and later became an open source Apache project. Kafka message broker software is developed in Scala and Java. Apache Kafka broker is a publish-subscribe messaging system that let exchanging of data between applications, servers, and processors as well. It is fast, scalable, and distributed by design. It is capable of handling millions of data or messages per second. It works as a mediator between the source (producer) system and the target (consumer) system. Organizations such as NETFLIX, UBER, and thousands of such firms make use of Apache Kafka real time streaming. In comparison to other messaging systems, Kafka message queue software has better throughput, built-in partitioning, replication, and inherent fault tolerance. This makes it a good fit for large-scale message processing applications.

## What is a Messaging System? {#messaging}

A messaging system is a simple exchange of messages between two or more persons, devices, etc. It is responsible for data transfer from one application to another, so the applications can focus on data, but not worry about how to share it. 

One type of messaging system is “Point to Point Messaging System”. In this system messages are stored in a queue when sent by the producer. Only one consumer can consume a message at any given time. And, once the message is consumed it’ll be removed from the queue. One of the example of this system is Order Processing System. Where only one process can proces the order.

Another type of messaging system is the pub-sub messaging system that allows a sender to send the message and a receiver to read that message. In Apache Kafka messaging, a sender is known as a producer who publishes messages, and a receiver is known as a consumer who consumes that message by subscribing to it. An example of this system is your cable tv which publishes many channels, and anyone can subscribe to their choice of channels and get them whenever their subscribed channels are available.

## Fundamental Terms {#terms}

Before we talk more about best message queue Apache Kafka, you must understand some of the terms.

  * **Topics**: A stream of messages belonging to a particular category is called a topic.
  * **Partition**: Topics may have many partitions, so they can handle an arbitrary amount of data.
  * **Partition offset**: Each partitioned message has a unique sequence id called “offset”.
  * **Replicas of partition**: Replicas are backups of a partition. They are used to prevent data loss.
  * **Brokers**: are responsible for maintaining published data. 
  * **Kafka Cluster**: Kafka’s having more than one broker is called Kafka cluster.
  * **Producers**: are the publishers of the messages to one or more topics.
  * **Consumers**: are the reader of the data from brokers. They subscribe to multiple topics and consume whenever there is a message in the topic.
  * **Leader**: is the node responsible for all reads and writes for any given partition.
  * **Follower**: Node which follows leader instructions are called followers.

## Installation Steps {#steps}

### Step 1 – Verifying Java Installation

Hopefully you have already installed java on your machine right now, so you just verify it using the following command.


```
$ java -version
```


If java is successfully installed on your machine, you could see the version of the installed Java. If not then you should first install Java.

### Step 2 – ZooKeeper Framework Installation

Visit the following link and download the latest version of ZooKeeper.

<https://zookeeper.apache.org/doc/r3.7.0/zookeeperStarted.html>

Once you are done with installation and configuration you can start the ZooKeeper with following command


```
$ bin/zkServer.sh start
```


And then use following command to connect to ZooKeeper from the cli


```
$ bin/zkCli.sh -server 127.0.0.1:2181
```


once connected you should see somthing like this


```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```


### Step 3 – Apache Kafka Installation

Download the latest Kafka best message broker release and extract it from following url

<https://www.apache.org/dyn/closer.cgi?path=/kafka/2.7.0/kafka_2.13-2.7.0.tgz>


```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```


Run the following commands in order to start all services in the correct order:


```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```


Open another terminal session and run:


```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```


## Create a Topic {#create}

To write your messages or events into topics you must first create a topic. To create a topic open your terminal and run the following command:


```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```


Now we have created a topic with the name “weather-updates” where we’ll publish information about weather and consumers will consume those messages.


```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```


## Write Message into Topic {#write}

Run the console producer client to write a few events into your topic. By default, each line you enter will result in a separate event being written to the topic.


```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```


## Read Messages from Topic {#read}

Open another terminal session and run the console consumer client to read the events you just created:


```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```


Feel free to experiment: for example, switch back to your producer terminal (previous step) to write additional events, and see how the events immediately show up in your consumer terminal.

## Conclusion {#conclusion}

In this tutorial we have learned about the basics of Apache Kafka use. We installed the Kafka queuing service and then configured it. We also learned how to create topics in Kafka, send messages to topics and how to read messages from the topics. I hope this article was useful for you. Let’s meet in next article.

_What open source distributed event streaming platform do you use?. Do you have any questions?, Please_ [get in touch][9].

## Explore

You may find following links relevant:

  * [Best Free and Open Source Message Queue (MQ) Software][10]
  * [Kafka vs Redis Pub-Sub, Differences which you should know][11]
  * [Introduction to Redis Pub/Sub and How Does It Work?][12]

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
 [11]: https://blog.containerize.com/2021/04/09/kafka-vs-redis-pub-sub-differences-which-you-should-know/
 [12]: https://blog.containerize.com/2021/03/05/introduction-to-redis-pubsub-and-how-does-it-work/