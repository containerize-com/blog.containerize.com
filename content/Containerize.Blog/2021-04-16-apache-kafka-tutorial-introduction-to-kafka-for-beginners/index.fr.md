---
title: "Tutorial Apache Kafka -Introduction à Kafka pour les débutants" 
seoTitle: "Tutorial Apache Kafka -Introduction à Kafka pour les débutants" 
description: "Apache Kafka est une plate-forme de streaming d'événements distribuée open source. Ce tutoriel est un guide débutant pour comprendre Apache Kafka Ground Up." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka est une plate-forme de streaming d'événements distribuée open source. Ce tutoriel vous donne une introduction à Kafka du point de vue d'un débutant." 
url: /fr/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka est une plate-forme de streaming d'événements distribuée à source ouverte. Ce tutoriel vous donne une introduction à Kafka du point de vue d'un débutant.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Tutoriel open source Apache Kafka">}}

Récemment, nous avons écrit un article sur «Kafka vs Redis Pub-Sub» qui explique les différences entre Kafka et Redis Pub-Sub. Dans cet article, nous avons rapidement expliqué le courtier de messages Kafka lui-même. Ainsi, maintenant cet article vous donne plus de compréhension de la plate-forme de streaming d'événements distribuée open source d'Apache Kafka et vous donne toutes les introductions nécessaires pour démarrer avec la file d'attente de messages distribuée de Kafka. Alors, commençons.
  * [Introduction à Apache Kafka][1]
  * [Qu'est-ce qu'un système de messagerie?][2]
  * [Termes fondamentaux][3]
  * [Étapes d'installation][4]
  * [Créer un sujet][5]
  * [Écrivez le message dans le sujet][6]
  * [Lire les messages du sujet][7]
  * [Conclusion][8]

## Introduction à Apache Kafka {#intro}

Le courtier de messages open source d'Apache Kafka a été lancé sur LinkedIn et est devenu plus tard un projet APACHE open source. Le logiciel Kafka Message Broker est développé à Scala et Java. Apache Kafka Broker est un système de messagerie de publication-subscription qui permet également l'échange de données entre les applications, les serveurs et les processeurs. Il est rapide, évolutif et distribué par conception. Il est capable de gérer des millions de données ou de messages par seconde. Il fonctionne comme médiateur entre le système source (producteur) et le système cible (consommateur). Des organisations telles que Netflix, Uber et des milliers de ces entreprises utilisent le streaming en temps réel Apache Kafka. Par rapport à d'autres systèmes de messagerie, le logiciel de file d'attente de messages Kafka a un meilleur débit, un partitionnement intégré, une réplication et une tolérance aux pannes inhérente. Cela en fait un bon ajustement pour les applications de traitement de messages à grande échelle.

## Qu'est-ce qu'un système de messagerie? {#messaging}

Un système de messagerie est un simple échange de messages entre deux ou plusieurs personnes, dispositifs, etc. Il est responsable du transfert de données d'une application à une autre, afin que les applications puissent se concentrer sur les données, mais ne pas s'inquiéter de la façon de les partager.
Un type de système de messagerie est le «système de messagerie point à point». Dans ce système, les messages sont stockés dans une file d'attente lorsqu'ils sont envoyés par le producteur. Un seul consommateur peut consommer un message à tout moment. Et, une fois le message consommé, il sera supprimé de la file d'attente. L'un des exemple de ce système est le système de traitement des commandes. Où un seul processus peut procéder à la commande.
Un autre type de système de messagerie est le système de messagerie Pub-Sub qui permet à un expéditeur d'envoyer le message et un récepteur pour lire ce message. Dans la messagerie Apache Kafka, un expéditeur est connu comme un producteur qui publie des messages, et un récepteur est connu comme un consommateur qui consomme ce message en s'y abonnement. Un exemple de ce système est votre télévision par câble qui publie de nombreuses chaînes, et n'importe qui peut s'abonner à son choix de chaînes et les obtenir chaque fois que leurs chaînes abonnées sont disponibles.

## Termes fondamentaux {#terms}

Avant de parler davantage de la meilleure file d'attente de messages Apache Kafka, vous devez comprendre certains des termes.
  * **Sujets** : Un flux de messages appartenant à une catégorie particulière est appelé un sujet.
  * **Partition** : Les sujets peuvent avoir de nombreuses partitions, afin qu'ils puissent gérer une quantité arbitraire de données.
  * **Offset de partition** : Chaque message partitionné a un ID de séquence unique appelé «Offset».
  * **répliques de partition** : les répliques sont des sauvegardes d'une partition. Ils sont utilisés pour empêcher la perte de données.
  * **Brokers** : sont responsables du maintien des données publiées.
  * **Kafka Cluster** : Kafka a plus d'un courtier s'appelle Kafka Cluster.
  * **Producteurs** : Les éditeurs sont-ils des messages à un ou plusieurs sujets.
  * **Consommations** : Le lecteur est le lecteur des données des courtiers. Ils souscrivent à plusieurs sujets et consomment chaque fois qu'il y a un message dans le sujet.
  * **leader** : Le nœud est-il responsable de toutes les lectures et écrit pour une partition donnée.
  * **Follower** : Node qui suit les instructions de leader est appelé adepte.

## Étapes d'installation {#steps}


### Étape 1 - Vérification de l'installation de Java
J'espère que vous avez déjà installé Java sur votre machine dès maintenant, vous le vérifiez donc simplement en utilisant la commande suivante.
```
$ java -version
```
Si Java est installé avec succès sur votre machine, vous pouvez voir la version du Java installé. Sinon, vous devez d'abord installer Java.

### Étape 2 - Installation du framework Zookeeper
Visitez le lien suivant et téléchargez la dernière version de Zookeeper.
{{_LINE_46_}}
Une fois que vous avez terminé avec l'installation et la configuration, vous pouvez démarrer le Zookeeper avec la commande suivante
```
$ bin/zkServer.sh start
```
Puis utilisez la commande suivante pour se connecter à Zookeeper à partir de la CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Une fois connecté, vous devriez voir quelque chose comme ça
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Étape 3 - Installation d'Apache Kafka
Téléchargez la dernière version de Kafka Best Message Broker et extraire de l'URL suivante
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Exécutez les commandes suivantes afin de démarrer tous les services dans le bon ordre:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Ouvrez une autre session de terminal et exécutez:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Créer un sujet {#create}

Pour écrire vos messages ou événements sur des sujets, vous devez d'abord créer un sujet. Pour créer un sujet, ouvrez votre terminal et exécutez la commande suivante:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Maintenant, nous avons créé un sujet avec le nom «Weather-Updates» où nous publierons des informations sur la météo et les consommateurs consommeront ces messages.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Écrire un message dans le sujet {#write}

Exécutez le client du producteur de console pour écrire quelques événements sur votre sujet. Par défaut, chaque ligne que vous entrez entraînera un événement distinct sur le sujet.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Lire les messages de la rubrique {#read}

Ouvrez une autre session de terminal et exécutez le client du consommateur de console pour lire les événements que vous venez de créer:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
N'hésitez pas à expérimenter: par exemple, revenez à votre terminal de producteur (étape précédente) pour écrire des événements supplémentaires et voir comment les événements apparaissent immédiatement dans votre terminal de consommation.

## Conclusion {#conclusion}

Dans ce tutoriel, nous avons appris les bases de l'utilisation d'Apache Kafka. Nous avons installé le service de mise en file d'attente de Kafka, puis l'avons configuré. Nous avons également appris à créer des sujets dans Kafka, à envoyer des messages à des sujets et à lire les messages à partir des sujets. J'espère que cet article vous a été utile. Revenons dans l’article suivant.
_Quelle plate-forme de streaming d'événements distribuée à source open source utilisez-vous ?. Avez-vous des questions ?, s'il vous plaît_ [contacte][9].

## Explorer
Vous pouvez trouver des liens suivants pertinents:
  * [Le meilleur logiciel de file d'attente de messages gratuits et open source (MQ)][10]
  * [Kafka vs redis pub-sub, différences que vous devez connaître][11]
  * [Introduction à Redis Pub / Sub et comment cela fonctionne-t-il?][12]



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
