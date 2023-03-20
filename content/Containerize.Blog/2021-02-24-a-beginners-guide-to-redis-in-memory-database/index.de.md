---
title: "Eine Anfängerleitfaden zur Datenbank zur Redis-In-Memory-Datenbank" 
seoTitle: "Eine Anfängerleitfaden zur Datenbank zur Redis-In-Memory-Datenbank" 
description: "Die Redis-In-Memory-Datenbank ist ein Open-Source-Key-Wert-Store. Es wird auch als NoSQL -Datenbank bezeichnet. Dieses Redis -Tutorial führt Sie zu Kernkonzepten von Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Dieses Tutorial hilft Ihnen dabei, die Datenbank für Redis-In-Memory zu erfahren. Es ist Open-Source und auch als Schlüsselwertspeicher bezeichnet, was eine Art von Datenbank nicht relational ist." 
url: /de/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Dieses Tutorial hilft Ihnen dabei, die Datenbank für Redis-In-Memory zu erfahren. Es ist Open-Source und auch als Schlüsselwertspeicher bezeichnet, was eine Art von Datenbank nicht relational ist.

{{< figure align=center src="images/redis-in-memory-database.png" alt="In-Memory-Datenbank Redis">}}

** Redis ** steht tatsächlich für "** re ** mote ** di ** ctionary ** s ** erver". Database Redis ist ein Open-Source-Key-Wert-Store. Es unterstützt mehrere Datentypen: Zeichenfolgen, Hashes, Listen, Sets und sortierte Sets. Aus diesem Grund wird es oft als Datenstrukturserver bezeichnet. Redis ist in C geschrieben. Dieses Redis-Tutorial bietet ein gutes Verständnis der Datenbankkonzepte für Redis-In-Memory.
  *** [Was ist eine NoSQL -Datenbank][1] **
  *** [Ist Redis eine NoSQL -Datenbank?][2] **
  *** [Wann verwendet Redis?][3] **
  *** [Redis gegen andere Schlüsselwertspeicher][4] **
  *** [Install Redis auf Ubuntu][5] **
  *** [Schlussfolgerung][6] **

## Was ist eine NoSQL -Datenbank {#nosql}
NoSQL -Datenbanken sind sehr beliebt geworden. Große Unternehmen verlassen sich darauf, Hunderte von Petabyte Daten zu speichern und Millionen von Abfragen pro Sekunde zu führen. Aber was ist eine NoSQL -Datenbank? Wie funktioniert es und warum skaliert es so viel besser als herkömmliche relationale Datenbanken? Beginnen wir damit, das Problem mit relationalen Datenbanken wie MySQL, Mariadb, SQL Server schnell zu erklären.
Relationale Datenbanken sind so erstellt, dass relationale Daten so effizient wie möglich gespeichert werden. Sie können eine Tabelle für Kunden, Bestellungen und Produkte haben, die logisch miteinander verknüpfen. Diese enge Organisation eignet sich hervorragend für die Verwaltung Ihrer Daten, ist jedoch mit Kosten einer geringen Skalierbarkeit kosten. Sie müssen diese Beziehungen aufrechterhalten, und das ist ein intensiver Prozess, der viel Gedächtnis und Berechnung der Leistung erfordern.
NoSQL -Datenbanken können sowohl vertikal als auch horizontal skalieren. Sie können dies mit einem Gebäude vergleichen. Vertikal Skalierung bedeutet, dass ein vorhandenes Gebäude mehr Böden hinzugefügt wird, während horizontale Skalierung mehr Gebäude hinzufügen bedeutet. Die Schemaveränderung ist eine der größten Herausforderungen in relationalen Datenbanken. NoSQL -Datenbanken erfordern kein festes Schema, das leicht skalieren, dass große Datenmengen und hohe Benutzerlasten skaliert werden.

## Ist Redis eine NoSQL -Datenbank? {#isnosql}
Dies ist eine der beliebtesten Fragen, die im Internet in der Entwicklergemeinschaft gestellt werden. Die einfache Antwort lautet Ja. Redis ist ein Open-Source-In-Memory-Datenstrukturspeicher.
Es gibt tatsächlich 4 verschiedene Arten von NoSQL-Datenbanktypen, darunter: Dokumentdatenbanken, Schlüsselwertspeicher, Wide-Säulen-Stores und Grafikspeicher. Die Server-Redis-In-Memory-Datenbank ist also ein Schlüsselwertspeicher in die Kategorie NoSQL-Datenbank.

## Wann verwendet Redis? {#Wenn}
Jede Technologie hat ihre Verdienste und Nachteile. Also, mit so vielen Optionen in Datenbanken. Es wird wichtig zu verstehen, wann und wann keine bestimmte Technologie verwendet wird. Wählen Sie immer das richtige Werkzeug für den Job aus.
Für stabile, vorhersehbare und relationale Daten wählen Sie eine relationale Datenbank. Für temporäre, hochdynamische Daten wählen Sie eine NoSQL -Datenbank. Das Schema für Datenbank ist eine der größten Herausforderungen in relationalen Datenbanken und kann in der großen Datenbank relational ewig dauern.
Wenn Sie hochdynamische Daten haben, die sich häufig ändern und keine komplexen Abfragen vornehmen müssen, möchten die Daten eher als Schlüsselwertpaare speichern, dann kann Redis eine potenziell gute Wahl sein. Wenn Sie eine dokumentorientierte Datenbank benötigen, mit der Sie Reichweite, regelmäßige Ausdrucksuche, Indexierung und MapReduce durchführen können, sollten Sie MongoDB, CouchDB oder ähnliches überprüfen.
Einige beispielhafte Anwendungsfälle von Redis-In-Memory-Datenbank sind wie folgt:
  *** Zugriff auf Logger **: Wenn Sie in schnellem Tempo viele Aktivitäten protokollieren müssen, ist Redis eine gute Lösung.
  *** Aufrechterhaltung der Zähler **: Sie können Redis verwenden, um unterschiedliche Zählungen beizubehalten, z. Zähler herunterladen
  *** Benutzerpräsenz **: Aufgrund der Geschwindigkeit können Sie sie verwenden, um den Status "Online / Offline" des Benutzers zu speichern.
  *** Warteschlangen **: Sie können Redis verwenden, um vorübergehende Warteschlangen zu erhalten, um Hintergrundjobs zu verarbeiten.

## Redis gegen andere Schlüsselwertspeicher {#OTHER}}
Die Datenbank in der Memory-In-Memory ist sehr schnell und kann etwa 110000 Sätze pro Sekunde ausführen, etwa 81000 erhalten pro Sekunde. Es unterstützt mehrere Datentypen: Zeichenfolgen, Hashes, Listen, Sets und sortierte Sets. Redis ist Single-Threaden, was es ermöglicht, säure konform zu sein (Atomizität, Konsistenz, Isolation und Haltbarkeit). Andere NoSQL -Datenbanken bieten im Allgemeinen keine Säure -Compliance oder diese teilweise.

## Redis auf Ubuntu {#install} installieren
Um Redis auf Ubuntu zu installieren, gehen Sie zum Terminal und geben Sie die folgenden Befehle ein
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Der folgende Befehl startet den Redis -Server
```
$ redis-server
```
Um zu überprüfen, ob der Redis-Server ausgeführt wird, können Sie den Befehl ** redis-cli ** verwenden, um eine Verbindung dazu herzustellen.
```
$ redis-cli 
```
Mit diesem Befehl erhalten Sie die folgende Ausgabe, was bedeutet, dass der Server ausgeführt wird und Sie jetzt verbunden sind.
```
redis 127.0.0.1:6379>
```
Geben Sie nun den folgenden ** ping ** -Befehl ein und Sie erhalten eine Antwort vom Server als ** pong **.
```
redis 127.0.0.1:6379> ping
PONG
```

## Schlussfolgerung {#Conclusion}
In diesem Redis-Tutorial haben wir über die Datenbank für die Redis-In-Memory erfahren. Wir untersuchten den Hauptunterschied zwischen relationalen und nicht-relationalen Datenbanken (NoSQL). Lernte auch, wann wir Redis verwenden sollten und was die besten Anwendungsfälle sind. Dieses Tutorial ist Teil einer laufenden Reihe von Tutorials. In den kommenden Artikeln werden wir die spezifischen Anwendungsfälle von Redis weiter untersuchen.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
