---
title: "So richten Sie das Quorum Blockchain -Netzwerk konsensys lokal ein" 
seoTitle: "So richten Sie das Quorum Blockchain -Netzwerk konsensys lokal ein" 
description: "Folgen Sie diesem Leitfaden, um den Installationsprozess von Consensys Quorum Blockchain auf Localhost zu erfahren. Consensys Quorum ist Open-Source-Etherum-basierte Blockchain." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Richten Sie Ihr eigenes öffentliches/privates Blockchain -Netzwerk ein, um digitale Geschäftstransaktionen zu verwalten und zu überwachen. Lassen Sie uns lernen, wie Sie Consensys Quorum auf Localhost einrichten." 
url: /de/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Erstellen Sie Ihr eigenes öffentliches/privates Blockchain -Netzwerk, um digitale Geschäftstransaktionen zu verwalten und zu überwachen. Lassen Sie uns lernen, wie Sie Consensys Quorum auf Localhost einrichten.

{{< figure align=center src="images/quorum.png" alt="Konsensys Quorum">}}


## Überblick
In der jüngsten Vergangenheit haben wir Blog-Beiträge zu einigen Blockchain-Themen wie [Top 5 Open-Source-Blockchain-Plattformen im Jahr 2020][1][1][eine grundlegende Anleitung zum Erstellen von Ethereum Smart Contract][2], veröffentlicht. Die Technologie verbessert Ihre Geschäftsstrategie][3] und [ein Anfängerleitfaden zum Einrichten von Ethereum -Knoten auf Localhost][4]. In diesem Artikel werden wir sehen, wie das Consensys Quorum Blockchain -Netzwerk auf Localhost eingerichtet wird, indem Sie die folgenden Punkte abdecken.
  ***[Eine kurze Einführung von Consenssys Quorum][5]** 
  ***[Was sind die Voraussetzungen und  **Installationsverfahren ** ?][6]** 
  ***[Wie starten Sie das Netzwerk?][7]** 
  ***[Fazit][8]** 

## **Eine kurze Einführung von Consenssys Quorum** {#Intertroduction}
[Consensys Quorum][9] ist eine Open -Source -Plattform, die auf **dezentralen Ledger -Technologie  **basiert. Es bietet jedoch eine vollständig Entwicklerfreundliche Umgebung, um Blockchain-basierte Anwendungen zu erstellen, die schnelle und hohe Durchsatztransaktionen verarbeiten. Es ist **  Ethereum  **basiert, erweiterbar und bietet viele Plugins. Darüber hinaus verfügt dieses Open -Source -verteilte System mit hohen Sicherheits- und Datenschutzstandards. Darüber hinaus gibt es viele leistungsstarke Merkmale wie APIs und Überwachung. Darüber hinaus ist diese **  DLT-Plattform**  selbst gehostet und bietet detaillierte Dokumentation zu Entwicklung und Bereitstellung. Der Quellcode dieser kostenlosen Software ist unter [Github][10] verfügbar.
Consensys Quorum bietet die folgenden wichtigen Funktionen:
  * Steckbare Architektur
  * Ethereum basiert
  * Sicher
  * Selbst veranstaltet
  * Öffentliches/privates Netzwerk
[Erfahren Sie mehr über Consensys Quorum][11]

## ****Was sind die Voraussetzungen und Installationsverfahren? **** {#Voraussetzungen}
In diesem Abschnitt werden wir die erforderlichen Abhängigkeiten installieren und die lokale Umgebung einrichten. Bevor Sie zum nächsten Schritt gehen, stellen Sie sicher, dass Sie die folgenden Voraussetzungen installiert haben:
  * Nodejs v10+
  * Docker
  * Docker-Compose
Wenn die Voraussetzungen installiert sind, führen Sie den folgenden Befehl aus, um das CLI-basierte QuickStart-Dienstprogramm zu starten.
```
npx quorum-dev-quickstart
```
Beantworten Sie jedoch die Fragen, um die Installation wie im folgenden Bild gezeigt zu vervollständigen.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Konsensys Quorum">}}


## ****Wie starte ich das Netzwerk? **** {#Start}
Jetzt haben wir den Quellcode vorhanden. Der nächste Schritt besteht also darin, das Netzwerk live zu gestalten.
Führen Sie den folgenden Befehl aus, um in das Stammverzeichnis zu gelangen.
```
cd quorum-test-network
```
Führen Sie danach den folgenden Befehl aus, um alle Docker -Container zu starten:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Konsensys Quorum">}}

Sobald alle Docker -Container in Betrieb sind, können Sie unter der folgenden Adresse auf den Block Explorer zugreifen:
```
http://localhost:25000
```
[] ())
Darüber hinaus können Sie mit dem Block -Explorer interagieren, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Open -Source -Verteilungssystem">}}

In ähnlicher Weise können Sie das gesamte Netzwerk anhalten, indem Sie den folgenden Befehl ausführen:
```
./stop.sh 
```

## Schlussfolgerung   {#Conclusion}
Dies ist das Ende dieses Tutorials. Vor allem ist der in Ethereum basierende Konsensys Quorum eine **digitale Finanztechnologie**  speziell für finanzielle Anwendungsfälle entwickelt. Es hat einen stimmberechneten Konsensalgorithmus. Das Hauptmotiv dieser dezentralen Technologie besteht jedoch darin, effiziente Lösungen für Unternehmen aufzubauen.
Schließlich hat [Containerize.com][12] viele technische Blog -Beiträge und Tutorials über beliebte Open -Source -Produkte unter [blog.containerize.com][13] veröffentlicht. Halten Sie sich daher für regelmäßige Aktualisierungen an die Kategorie [Blockchain -Plattformen][14].

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [Konsensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
