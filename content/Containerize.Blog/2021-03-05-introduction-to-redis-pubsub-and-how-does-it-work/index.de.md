---
title: "Einführung in Redis Pub/Sub und wie funktioniert es?" 
seoTitle: "Einführung in Redis Pub/Sub und wie funktioniert es?" 
description: "Redis Pub/Sub ist ein flexibler, zuverlässiger Echtzeit-Messaging-Service für unabhängige Anwendungen, um asynchrone Ereignisse zu veröffentlichen und abonnieren." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub implementiert ein Echtzeit-Messaging-System, in dem Verlage in einem Kanal/Thema veröffentlichen und mehrere Clients diesen Kanal/Thema abonnieren können." 
url: /de/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub implementiert ein Echtzeit-Messaging-System, in dem Verlage in einem Kanal/Thema veröffentlichen und mehrere Clients diesen Kanal/Thema abonnieren können.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

In unserem letzten Tutorial " **[Ein Anfängerleitfaden für die Datenbank in Memory][1]** " haben wir als In-Memory-Datenbank etwas über Redis erfahren. Und wie dies mit den NoSQL -Datenbanken konkurriert. Wir haben auch gelernt, wo Redis verwendet werden und wo seine Verwendung nicht optimal ist. In diesem Tutorial aufbauen wir nun über diese Wissensbasis und erfahren Sie mehr über Redis Pub/Sub. Lass uns anfangen.
* **[Was ist das Muster veröffentlichen/abonnieren?][2]** 
* **[Wie funktioniert die Kneipe/Sub?][3]** 
* **[Wann sollten Sie Pub/Sub verwenden?][4]** 
* **[Wie verwendet ich Redis Pub/Sub?][5]** 
* **[Fazit][6]** 

## Was ist das Veröffentlichung/Abonnement -Muster? {#what}

Veröffentlichen/Abonnieren oder in einem kurzen Pub/Sub ist ein Messaging -Muster, bei dem der Absender und der Empfänger der Nachrichten diese Nachrichten nicht direkt austauschen. Der Absender der Nachricht veröffentlicht sie vielmehr an einem Kanal/einem Thema. Und alle, die diese Nachrichten erhalten möchten, abonnieren den Kanal/das Thema. Das war also eher eine technische Erklärung. In unserem täglichen Leben nutzen wir dieses Veröffentlichungs-Subscribe-Modell ziemlich oft, während wir Social-Media-Plattformen wie YouTube, Twitter, Facebook oder Instagram verwenden. Wenn die Inhaltsproduzenten den Inhalt produzieren und diejenigen, die interessiert sind, folgen / abonnieren die Inhalte. Dies ist also genau das, was genau Pub/Sub -Muster in der Softwarearchitektur tut.

## Wie funktioniert die Kneipe/Sub? {#how}

In der Softwareentwicklung ist der Schwerpunkt auf Wiederverwendbarkeit sehr hoch. Und alle Entwurfsmuster basieren auf der Erstellung wiederverwendbarer Komponenten oder Module. Um das Pub/Sub zu verstehen, müssen Sie zuerst prüfen, woher diese Idee stammt und wie die Entwickler sie als Muster fanden.
Als sich die Software-Architekturen entwickelten und modulbasiert wurden, wurden sie zwischen den Modulen und Komponenten zu mehr Kommunikation / Messaging. Stellen Sie sich ein Modul als eine Verarbeitungseinheit vor, die einen Eingang nimmt und eine gewisse Ausgabe liefert. Und jede Eingabe ist tatsächlich eine Nachricht, auf der die Verarbeitungseinheit verarbeitet und eine andere Nachricht als Ausgabe generiert. Dies wird ein Eingang in ein anderes Modul sein. Diese Erhöhung der Messaging erforderte also besondere Aufmerksamkeit, um skalierbare Anwendungen zu haben, da Module und Komponenten ohne Abhängigkeiten unabhängig funktionieren können. Daher kam das Veröffentlichung/Abonnement -Muster.
In vielen Pub/Sub -Systemen veröffentlichen Verlage Nachrichten an einen Vermittlermörder oder Eventbus, und Abonnenten registrieren Abonnements mit diesem Broker, sodass der Broker die Filterung durchführen lässt. Der Broker führt normalerweise einen Speicher und eine Weiterleitungsfunktion aus, um Nachrichten von Verlegern an Abonnenten weiterzugeben. Darüber hinaus kann der Broker Nachrichten in einer Warteschlange vor dem Routing priorisieren.

## **Wann sollten Sie Pub/Sub verwenden?** {#when}

CHAT -Anwendungen sind ein klassischer Anwendungsfall des Pub/Sub -Musters. In einer Chat -Anwendung können die Teilnehmer Chatrooms mit einem bestimmten Pub/Sub -Thema abonnieren. Wenn ein Benutzer eine Nachricht an einen Chat -Raum sendet, veröffentlicht ihre Chat -App -Instanz die Nachricht im Thema des Chatraums. Abonnenten des Themas erhalten die Nachricht.
Message Warteschlangenservice / Nachrichtenwarteschlange oder Stapelverarbeitung Anwendungen können auch das Pub / Sub -Muster verwenden. Wenn alle, die eine bestimmte Aufgabe erledigen möchten, die Nachricht an eine Warteschlange und Verarbeitungseinheiten veröffentlichen, die diese Warteschlange abonniert haben, erhalten die Nachricht, um den Job zu verarbeiten.
Lassen Sie uns einige der Vorteile des Pub/Sub -Musters diskutieren
  * Lose Kopplung zwischen Systemkomponenten
  * Bessere Sicht auf den systemweiten Workflow
  * Ermöglicht eine bessere und schnellere Integration
  * Sorgt für eine glattere Skalierbarkeit
  * Garantierte konsistente Zuverlässigkeit
  * Baut Elastizität auf
  * Software -Modularisierung
  * Sprache Agnostische Softwareentwicklung
  * Die Klarheit in der Geschäftslogik
  * Verbessert die Reaktionsfähigkeit

## So verwenden Sie Redis Pub/Sub {#redis-pubsub}

Für die Redis -Installation können Sie sich auf mein [letztes Tutorial][1] beziehen. In diesem Beispiel wird erläutert, wie das Verleger- und Abonnentenkonzept funktioniert. Im folgenden Beispiel unterschreibt ein Client einen Kanal mit dem Namen "Redischat".
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Jetzt veröffentlichen zwei Clients die Nachrichten auf demselben Kanal mit dem Namen "Redischat", und der oben genannte Client empfängt Nachrichten.
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

## Abschluss {#conclusion}

In diesem Tutorial haben wir das Veröffentlichung/Abonnement -Designmuster erfahren. Und erkundete, wie das Redis Pub/Sub funktioniert. Wir haben auch untersucht, was die besten Anwendungsfälle von Redis Pub/Sub, Echtzeit-Nachrichten sind. In meinem bevorstehenden Tutorial werden wir die Redis weiter untersuchen und erklären, wie wir Redis Pub/Sub mit Node.js verwenden können, um eine Echtzeit-Chat-Anwendung zu erstellen.



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
