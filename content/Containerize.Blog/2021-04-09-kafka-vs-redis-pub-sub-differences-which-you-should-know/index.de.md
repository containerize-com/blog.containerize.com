---
title: "Kafka gegen Redis Pub-Sub, Unterschiede, die Sie wissen sollten" 
seoTitle: "Kafka gegen Redis Pub-Sub, Unterschiede, die Sie wissen sollten" 
description: "Wenn Sie nach Tools suchen, um eine große Datenmenge zu verwalten und zwischen Kafka und Redis zu verwechseln. Dieser Artikel Kafka vs Redis Pub-Sub hilft Ihnen." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis und Kafka sind zwei verschiedene Tools, die zufällig ähnliche Jobs auf ihre eigene Weise machen. Kafka gegen Redis -Vergleich gibt Ihnen Einblicke, die Sie kennen sollten." 
url: /de/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka gegen Redis Pub Sub">}}


## Redis und Kafka sind zwei verschiedene Tools, die zufällig ähnliche Jobs auf ihre eigene Weise machen. Kafka gegen Redis -Vergleich gibt Ihnen Einblicke, die Sie kennen sollten.
In unserer Reihe von Artikeln über „Redis“ haben wir über die [Grundlagen von Redis][1] gelernt, dann untersuchten wir [wie Redis Pub/Sub funktioniert][2] und wie dies mit den NOSQL -Datenbanken konkurriert. In unserer heutigen Reihe werden wir Redis mit Kafka vergleichen, einer seiner Konkurrenten in verschiedenen Aufgaben. In diesem Artikel werden Kafka vs Redis Pub-Sub untersuchen, was Kafka ist, wie es sich von Redis unterscheidet und welche Ähnlichkeiten in ihnen sind. Also lasst uns anfangen.
  * Was ist Kafka?
  * Was ist Redis?
  * Was sind die Hauptunterschiede?
  * Wann kann man welches verwenden?
  * Abschluss

## Was ist Kafka?
Apache Kafka ist eine Open-Source-Distributed Event-Stream-Plattform. Es wird für Hochleistungsdatenpipelines und Streaming-Analysen verwendet. Kafka fungiert als [veröffentlichtes Messaging-System][3]. Damit können Sie neue Daten verarbeiten, die mit hohen Geschwindigkeiten generiert werden und zusätzlich auch in einer Datenbank speichern können.
Kafka ist ein verteiltes System, das aus **Servern**und**Clients** besteht. Es kann auf Hardware mit nacktem Metall, virtuellen Maschinen und Containern in lokalen und Cloud-Umgebungen bereitgestellt werden.

## Was ist Redis?
Redis ist ein Open-Source-Store-Wert. Es unterstützt mehrere Datentypen: Zeichenfolgen, Hashes, Listen, Sets und sortierte Sets. Aus diesem Grund wird es oft als Datenstrukturserver bezeichnet.
Redis wird auch als NoSQL -Datenbank betrachtet. Für eine detaillierte Diskussion über He Redis und eine Art und Weise, wie es funktioniert, können Sie sich auf unseren Artikel "[eine Anfängerleitfaden für die Datenbank in Memory" [1] "beziehen.

## Was sind die Hauptunterschiede?
**Redis** Pub-Sub ist hauptsächlich wie ein Feuer-und-vergünstigter System, in dem alle von Ihnen erstellten Nachrichten an alle Verbraucher gleichzeitig übermittelt werden und die Daten nirgendwo gespeichert werden. Sie haben Einschränkungen im Speicher in Bezug auf Redis. Auch die Anzahl der Hersteller und Verbraucher kann die Leistung von Redis beeinflussen.
Andererseits ist **Kafka** ein hoher Durchsatz, verteiltes Protokoll, das als Warteschlange verwendet werden kann. Es bietet auch Beharrlichkeit für die Nachrichten, die über die Warteschlange gesendet werden.
**Redis**unterstützt** Push-basierte**Zustellung von Nachrichten. Dies bedeutet, dass jede Nachricht, die auf Redis gedrückt wurde, automatisch an alle Abonnenten geliefert wird.
**Kafka**unterstützt jedoch** Pull-basiert**Zustellung von Nachrichten. Bedeutung Nachrichten, die an Kafka veröffentlicht wurden, werden nicht automatisch an die Abonnenten verteilt. Stattdessen fragen Verbraucher nach den Nachrichten, wenn sie bereit sind, diese Nachrichten zu konsumieren.
**Redis **speichert stattdessen keine Nachrichten, Nachrichten werden sofort an alle Verbraucher übermittelt und dann entfernt.** Kafka**Wenn Sie jedoch ein Protokoll sind, haben Sie immer Nachrichten. Sie können dies überwachen, indem Sie eine Aufbewahrungsrichtlinie festlegen, die 7 Tage** Retention**.

## Wann verwenden Sie welches?

### Redis
  * Wenn Sie ein System von Fire-and-Forget-Systems wünschen, in dem alle Nachrichten, die Sie erstellen, sofort an die Verbraucher übermittelt werden.
* Wenn **Geschwindigkeit** am meisten besorgt ist.
* Wenn **Speicher** nicht wichtig ist und Sie nicht möchten, dass Ihr System die gesendete Nachricht enthält
  * Die Datenmenge, die behandelt wird, ist nicht riesig.

### Kafka
* Wenn Sie wollen **Zuverlässigkeit** .
  * Wenn Sie möchten, dass Ihr System über eine Kopie von Nachrichten verfügt, die auch nach dem Verbrauch gesendet wurden.
* Wenn **Geschwindigkeit** kein großes Problem ist.
  * Und Ihre Datengröße ist riesig.

## Abschluss
In diesem Tutorial Kafka vs Redis Pub-Sub haben wir Kafka und Redis untersucht. Was sind ihre Unterschiede und Ähnlichkeiten? Wir haben auch gelernt, wann Sie wieder entlassen werden sollten und wann es gut ist, Kafka zu verwenden. In unseren bevorstehenden Tutorials werden wir mehr über Kafka und eingehende Analyse untersuchen.



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Was
