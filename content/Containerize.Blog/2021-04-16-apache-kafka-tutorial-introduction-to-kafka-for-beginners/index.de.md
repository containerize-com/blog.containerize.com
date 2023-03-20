---
title: "Apache Kafka Tutorial -Einführung in Kafka für Anfänger" 
seoTitle: "Apache Kafka Tutorial -Einführung in Kafka für Anfänger" 
description: "Apache Kafka ist eine Open-Source-Distributed Event-Streaming-Plattform. Dieses Tutorial ist ein Anfängerleitfaden, um Apache Kafka Grund zu verstehen." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka ist eine Open-Source-Distributed Event-Streaming-Plattform. Dieses Tutorial bietet Ihnen eine Einführung in Kafka aus der Sicht eines Anfängers." 
url: /de/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka ist eine Open-Source-Streaming-Plattform. Dieses Tutorial bietet Ihnen eine Einführung in Kafka aus Sicht eines Anfängers.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka Open Source Tutorial">}}

Kürzlich haben wir einen Artikel über „Kafka vs Redis Pub-Sub“ geschrieben, der die Unterschiede zwischen Kafka und Redis Pub-Sub erklärt. In diesem Artikel haben wir in Kürze über den Kafka Message Broker selbst erklärt. In diesem Artikel gibt es nun mehr Einblick in die Apache Kafka Open Source Distributed Event Streaming -Plattform und gibt Ihnen alle notwendigen Einführungen, um mit der Kafka -Verteilungswarteschlange zu beginnen. Also lasst uns anfangen.
  * [Einführung in Apache Kafka][1]
  * [Was ist ein Messaging -System?][2]
  * [Grundlegende Begriffe][3]
  * [Installationsschritte][4]
  * [Erstellen Sie ein Thema][5]
  * [Nachricht in Thema schreiben][6]
  * [Nachrichten aus dem Thema lesen][7]
  * [Schlussfolgerung][8]

## Einführung in Apache Kafka {#Intro}
Apache Kafka Open Source Message Broker wurde bei LinkedIn gestartet und wurde später zu einem Open -Source -Apache -Projekt. Die Kafka Message Broker -Software wird in Scala und Java entwickelt. Apache Kafka Broker ist ein Messaging-System des Publish-Subscribe, mit dem auch Daten zwischen Anwendungen, Servern und Prozessoren ausgetauscht werden können. Es ist schnell, skalierbar und von Design verteilt. Es ist in der Lage, Millionen von Daten oder Nachrichten pro Sekunde zu bearbeiten. Es wirkt als Mediator zwischen dem Quellsystem (Produzenten) und dem Ziel (Verbraucher). Organisationen wie Netflix, Uber und Tausende solcher Unternehmen nutzen Apache Kafka Echtzeit -Streaming. Im Vergleich zu anderen Messaging-Systemen verfügt die Kafka Message Queue Software über einen besseren Durchsatz, eine integrierte Partitionierung, Replikation und inhärente Fehlertoleranz. Dies ist gut geeignet zu großen Nachrichtenverarbeitungsanwendungen.

## Was ist ein Messaging -System? {#Messaging}
Ein Messaging -System ist ein einfacher Austausch von Nachrichten zwischen zwei oder mehr Personen, Geräten usw. Es ist für die Datenübertragung von einer Anwendung zu einer anderen verantwortlich, sodass sich die Anwendungen auf Daten konzentrieren können, aber keine Sorgen darüber machen, wie sie sie teilen.
Eine Art von Messaging -System ist „Point to Point Messaging System“. In diesem System werden Nachrichten in einer Warteschlange gespeichert, wenn sie vom Produzenten gesendet werden. Nur ein Verbraucher kann zu einem bestimmten Zeitpunkt eine Nachricht konsumieren. Und sobald die Nachricht verbraucht ist, wird sie aus der Warteschlange entfernt. Eines der Beispiele dieses Systems ist das Auftragsverarbeitungssystem. Wobei nur ein Prozess die Bestellung produzieren kann.
Eine andere Art von Messaging-System ist das Pub-Sub-Messaging-System, mit dem ein Absender die Nachricht und einen Empfänger senden können, um diese Nachricht zu lesen. In Apache Kafka Messaging ist ein Absender als Produzent bekannt, der Nachrichten veröffentlicht, und ein Empfänger wird als Verbraucher bekannt, der diese Nachricht konsumiert, indem er sie abonniert. Ein Beispiel für dieses System ist Ihr Kabelfernseher, das viele Kanäle veröffentlicht, und jeder kann seine Auswahl an Kanälen abonnieren und sie erhalten, wenn seine abonnierten Kanäle verfügbar sind.

## Fundamental Begriffe {#terms}
Bevor wir mehr über die beste Meldungswarteschlange Apache Kafka sprechen, müssen Sie einige der Begriffe verstehen.
  *** Themen **: Ein Strom von Nachrichten, die zu einer bestimmten Kategorie gehören, wird als Thema bezeichnet.
  *** Partition **: Themen können viele Partitionen haben, sodass sie eine willkürliche Datenmenge bewältigen können.
  *** Partition Offset **: Jede partitionierte Nachricht hat eine eindeutige Sequenz -ID mit dem Namen "Offset".
  *** Repliken der Partition **: Repliken sind Backups einer Partition. Sie werden verwendet, um Datenverlust zu verhindern.
  *** Makler **: sind für die Aufrechterhaltung veröffentlichter Daten verantwortlich.
  *** Kafka Cluster **: Kafka hat mehr als einen Broker Kafka Cluster.
  *** Produzenten **: Sind die Verlage der Nachrichten zu einem oder mehreren Themen.
  *** Verbraucher **: Sind der Leser der Daten von Makler. Sie abonnieren mehrere Themen und konsumieren immer dann, wenn es eine Nachricht im Thema gibt.
  *** Anführer **: Ist der Knoten für alle Lese- und Schreibvorgänge für eine bestimmte Partition verantwortlich.
  *** Nachfolger **: Knoten, der den Anweisungen der Führer folgt, werden als Follower bezeichnet.

## Installationsschritte {#steps}

### Schritt 1 - Überprüfung der Java -Installation
Hoffentlich haben Sie Java bereits jetzt auf Ihrem Computer installiert, sodass Sie es einfach mit dem folgenden Befehl überprüfen.
```
$ java -version
```
Wenn Java erfolgreich auf Ihrem Computer installiert ist, können Sie die Version des installierten Java sehen. Wenn nicht, sollten Sie zuerst Java installieren.

### Schritt 2 - Installation von Zookeeper Framework
Besuchen Sie den folgenden Link und laden Sie die neueste Version von Zookeeper herunter.
{{_LINE_46_}}
Sobald Sie mit Installation und Konfiguration fertig sind, können Sie den Zookeeper mit dem folgenden Befehl starten
```
$ bin/zkServer.sh start
```
Und verwenden Sie dann den folgenden Befehl, um eine Verbindung zu Zookeeper aus der CLI herzustellen
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Sobald Sie verbunden sind, sollten Sie so etwas sehen
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Schritt 3 - Apache Kafka Installation
Laden Sie die neueste Kafka Best Message Broker Release herunter und extrahieren Sie sie aus der folgenden URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Führen Sie die folgenden Befehle aus, um alle Dienste in der richtigen Reihenfolge zu starten:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Öffnen Sie eine weitere Terminalsitzung und führen Sie aus:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Erstellen Sie ein Thema {#create}
Um Ihre Nachrichten oder Ereignisse in Themen zu schreiben, müssen Sie zuerst ein Thema erstellen. So erstellen Sie ein Thema, öffnen Sie Ihr Terminal und führen Sie den folgenden Befehl aus:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Jetzt haben wir ein Thema mit dem Namen "Wetter-Updates" erstellt, bei dem wir Informationen über das Wetter veröffentlichen und die Verbraucher diese Nachrichten konsumieren.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Meldung in das Thema {#Write} schreiben
Führen Sie den Konsolenproduzenten -Kunden aus, um ein paar Ereignisse in Ihr Thema zu schreiben. Standardmäßig führt jede Zeile, die Sie eingeben, zu einem separaten Ereignis an das Thema.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Lesen Sie Nachrichten aus dem Thema {#Read}
Öffnen Sie eine weitere Terminalsitzung und führen Sie den Konsolen -Verbraucher -Client aus, um die von Ihnen erstellten Ereignisse zu lesen:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Fühlen Sie sich frei zu experimentieren: Wechseln Sie beispielsweise wieder zu Ihrem Produzenten -Terminal (vorheriger Schritt), um zusätzliche Ereignisse zu schreiben, und sehen Sie, wie die Ereignisse sofort in Ihrem Verbraucherterminal angezeigt werden.

## Schlussfolgerung {#Conclusion}
In diesem Tutorial haben wir die Grundlagen der Verwendung von Apache Kafka kennengelernt. Wir haben den Kafka -Warteschlangendienst installiert und ihn dann konfiguriert. Wir haben auch gelernt, wie man Themen in Kafka erstellt, Nachrichten an Themen sendet und wie Sie Nachrichten aus den Themen lesen. Ich hoffe, dieser Artikel war nützlich für Sie. Treffen wir uns im nächsten Artikel.
_What Open Source Distributed Event Streaming Platform verwenden Sie?. Haben Sie Fragen?

## Erkunden
Sie können die folgenden Links relevant finden:
  * [Beste Free und Open Source Message Queue (MQ) -Software][10]
  * [Kafka vs Redis Pub-Sub, Unterschiede, die Sie wissen sollten][11]
  * [Einführung in Redis Pub/Sub und wie funktioniert es?][12]

  
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
