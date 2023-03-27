---
title: "Was ist testNet & wie bereitet es bereit? Ethereum testnet '" 
seoTitle: "Was ist testNet & wie bereitet es bereit? Ethereum testnet" 
description: "Was ist TestNet? In diesem Leitfaden geht es darum, wie der Ethereum -Knoten auf Localhost eingerichtet wird. Blockchain ist ein Netzwerk von Knoten, die eine Geschichte aller Transaktionen aufrechterhalten." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum ist ein Open-Source-Blockchain-Peer-to-Peer-Netzwerk von verbundenen Knoten. Lassen Sie uns erfahren, wie Sie den Ethereum -Knoten auf einem lokalen Server bereitstellen und mit dem Knoten interagieren." 
url: /de/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum ist ein Open-Source-Blockchain-Peer-to-Peer-Netzwerk von verbundenen Knoten. Lassen Sie uns erfahren, wie Sie den Ethereum -Knoten auf einem lokalen Server bereitstellen und mit dem Knoten interagieren.

{{< figure align=center src="images/ether.png" alt="Was ist TestNet">}}

In unseren vorherigen Blog -Beiträgen haben wir über mehrere Themen geschrieben, die [Blockchain -Technologie für Business][1], [Schreiben eines intelligenten Vertrags][2] und [beliebte Blockchain -Plattformen][3] enthalten. Es gibt weitere Themen, über die wir in naher Zukunft schreiben werden, da die dezentrale Ledger -Technologie**mit dem Lauf der Zeit an Tempo gewinnt. Die Menschen interessieren sich jetzt aufgrund von Sicherheit und Transparenz, um sich für digitale Vermögensverwaltungsplattformen zu interessieren. Darüber hinaus sind digitale Transaktionen nachvollziehbar, unveränderlich und solche Faktoren verleihen den Menschen in Bezug auf die Zuverlässigkeit dieser Technologie. Es gibt drei Arten der Blockchain -Öffentlichkeit, Privat und Erlaubnis. Benutzer können jedoch je nach Anwendungsfall jeden Typ einnehmen.
Das Aufkommen dieser Technologie hat im Bankensektor eine enorme Veränderung geführt, da sie den Weg der Finanztransaktionen verändert hat. In diesem Blog -Beitrag werden wir über Ethereum Blockchain über die Einrichtung von Ethereum -Knoten auf Localhost sprechen und sehen, wie sie mit dem Testnetzwerk interagieren. Wir werden die folgenden Schlüsselpunkte abdecken.
*  **Was ist TestNet?**  
*  **[Wie man Ethereum Blockchain einrichtet?][4]**  
*  **[Wie kann man mit Ethereum Blockchain interagieren?][5]**  
*  **[Fazit][6]**  

## Was ist TestNet? {#tetstnet}

In diesem Blog -Beitrag werden wir einen Ethereum -Knoten auf Localhost bereitstellen. Ethereum verfügt über mehrere Netzwerke, das Produktionsnetzwerk wird als Mainnet bezeichnet und das für Testzwecke verwendete Netzwerk wird als TestNet bezeichnet. Die meisten dezentralen Anwendungen basieren auf [Ethereum][7] Blockchain. Smart Contract ist ein integraler Bestandteil dieser verteilten Infrastruktur. Darüber hinaus ist Blockchain ein Netzwerk von Computern, die als "Knoten" bezeichnet werden. Jeder Knoten enthält jedoch eine Kopie der Blockchain und nimmt daher am Netzwerk teil. Ethereum Blockchain hat auch eine eigene Kryptowährung als „Äther“. Alle Transaktionen sind kryptografisch gesichert. Darüber hinaus handelt es sich um eine komplette Hauptbuchentechnologie, die nie heruntergefahren oder beschädigt wird. Sie können intelligente Verträge und dezentrale Anwendungen (DApps) schreiben, die auf Etherum -Blockchain -Knoten ausgeführt werden.
Dieses Open Source Distributed Blockchain -Netzwerk verwendet einen Konsensalgorithmus, der als Proof of Work (POW) bezeichnet wird. Darüber hinaus umfasst die Architektur von Ethereum fünf Ebenen wie Virtual Machine, Ethereum -Client -APIs, Smart Contracts, Ethereum -Knoten und Endbenutzeranwendungen. Ethereum Virtual Machine bietet die Software und Architektur an, die intelligente Verträge erkennen. Smart Contracts sind die Software, die die Transaktionen regelt. Ethereum Blockchain und Fortune 500 -Unternehmen haben eine starke Unterstützung für die Entwicklung von Fortune -500 -Unternehmen für die Entwicklung in größerem Maßstab mit dieser Technologie. Darüber hinaus ist Ethereum in der GO -Sprache geschrieben und sein Quellcode ist in [Github][8] verfügbar. Die gesamte Dokumentation ist zur Bereitstellung und Entwicklung verfügbar, da sie eine lebendige Community hat.

## Wie richte ich Ethereum Blockchain ein? {#setup}

Jetzt sind wir uns bewusst, was TestNet ist. In diesem Abschnitt werden wir den Ethereum -Knoten auf unserer lokalen Maschine einrichten. Bevor Sie weiter gehen, stellen Sie sicher, dass Sie die folgenden Voraussetzungen installiert haben.
  * [Homebrew][9] (für macOS)

  * [Go7] (brew install go)
Sobald die Voraussetzungen vorhanden sind, führen Sie bitte den folgenden Befehl aus, um den Quellcode zu klonen:
```
git clone https://github.com/ethereum/go-ethereum
```
Gehen Sie nach einem erfolgreichen Klon in das Verzeichnis:
```
cd go-ethereum
```
Führen Sie nun den folgenden Befehl aus, um das GETH -Programm zu erstellen:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Notiz
{{_LINE_34_}}
  Installieren Sie bei einem Fehler Xcode, indem Sie Xcode-Select-Installation ausführen und erneut versuchen Sie es erneut
{{_LINE_36_}}
Sie haben also alle Voraussetzungen und Quellcode eingerichtet. Führen Sie daher den folgenden Befehl aus, um den Knoten zu starten:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Ethereumknoten">}}


## Wie kann man mit Ethereum Blockchain interagieren? {#interact}

In diesem Abschnitt geht es um die Interaktion mit einem laufenden Ethereum -Knoten, der vollständig mit der Blockchain synchronisiert ist. Wir können die GETH -Software verwenden, um Befehle zu interagieren und an das Testnetzwerk zu senden.
Lassen Sie uns dazu Build/Bin/Geth in $ Path -Umgebungsvariable einschließen, indem wir die folgenden Befehle ausführen:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Stoppen Sie den Server, den Sie über oben genommen haben, und führen Sie das Testnetzwerk mit den folgenden Flags aus:
GETH --TESTNET - -RPC - -RPCAPI = "DB, ETH, NET, Web3, Personal, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Was ist TestNet">}}

Als nächstes müssen Sie ein neues Terminalfenster öffnen und den Befehl Geth an den Knoten anschließen, indem Sie den folgenden Befehl ausführen:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="Plattform für digitale Asset Management">}}

Geth öffnet ein Konsolenfenster, in dem Sie mit dem Testnetzwerk interagieren können. Der folgende Befehl erstellt ein Konto, das die virtuelle Währung und das öffentliche/private Schlüsselpaar enthält:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Dezentrale Ledger -Technologie">}}

Um Ihr Konto zu überprüfen, können Sie den folgenden Befehl ausführen:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Was ist TestNet">}}

Ebenso gibt es viele Befehle, mit denen Sie mit der Ethereum -Blockchain interagieren können.

## Abschluss {#Abschluss}

Hier kommt das Ende dieses Tutorials. Wir haben gelernt  **Was ist testNet** und den Einrichtungsprozess des Ethereum -Knotens auf der lokalen Maschine. Ethereum Blockchain ist eine verallgemeinerte Lösung für die meisten dezentralen Anwendungen. Die meisten Unternehmen und Regierungsabteilungen neigen dazu, diese Technologie zu übernehmen, um Robustheit, Transparenz, Verfügbarkeit und Rechenschaftspflicht zu erzielen. Darüber hinaus hilft Ihnen dieses  **Blockchain -Tutorial**  wirklich, wenn Sie planen, die Entwicklung von Ethereum Blockchain zu beginnen, da es intelligente Verträge nutzt. Etheruem Blockchain ist stabiler und beliebter, da es Tausende von lebenden Knoten hat. Darüber hinaus können Unternehmen Ethereum Blockchain -Netzwerke problemlos entwickeln und bereitstellen, ohne zusätzliche Zeit zu verbringen. Der andere Faktor für die Zuverlässigkeit von Ethereum besteht darin, dass es die Entwicklung von intelligenten Verträgen auf eine Weise bietet, die andere **Digital Asset Management -Plattformen**  nicht anbieten.
Die neuesten Updates im Ethereum-Netzwerk haben das Netzwerk kostengünstiger und effizienter gemacht. Tatsächlich gibt es in der Cloud viel mehr Material verfügbar, das die wichtigen Aspekte von Etheruem in Bezug auf Investitions- und Entwicklungszwecke demonstriert. Für Entwickler bietet es ein Entwickler-freundliches Ökosystem mit vorgefertigten Versorgungsunternehmen. Für Bergleute gibt es eine Prämie in Form eines Äthers, wenn sie einen neuen Block in die Blockchain abbauen. Darüber hinaus hat [Containerize.com][10] viele technische Blog -Beiträge und Tutorials über beliebte Open -Source -Produkte unter [blog.containerize.com][11] veröffentlicht. Daher bleiben Sie für regelmäßige Aktualisierungen mit der Kategorie [Blockchain -Plattformen][12] in Verbindung.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Ethereum][7]
  * [Hyperledger Fabric][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Konsensys Quorum][17]
  * [So richten Sie Consensys Quorum Blockchain -Netzwerk lokal ein][18]
  * [Top 5 Open -Source -Blockchain -Plattformen im Jahr 2020][3]
  * [Eine grundlegende Anleitung zum Erstellen von Ethereum Smart Contract][2]
  * [Wie dezentrale Technologie Ihre Geschäftsstrategie aktualisiert][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
