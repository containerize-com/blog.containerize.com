---
title: "Smart Contract Tutorial | Ethereum Blockchain -Entwicklung" 
seoTitle: "Smart Contract Tutorial | Ethereum Blockchain -Entwicklung" 
description: "Dieses Smart Contract -Tutorial erarbeitet die grundlegenden Schritte zur Erstellung von Ethereum Smart Contracts. Ethereum ist ein offenes, sicheres, verteiltes Blockchain -Netzwerk." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum ist eine ausgereifte Plattform, um intelligente Verträge und dezentrale Anwendungen (DApps) zu erstellen. Befolgen Sie diese Schritte, um intelligente Verträge zu erstellen, zu testen und bereitzustellen." 
url: /de/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum ist eine ausgereifte Plattform, um intelligente Verträge und dezentrale Anwendungen (DApps) zu erstellen. Befolgen Sie diese Schritte, um intelligente Verträge zu erstellen, zu testen und bereitzustellen.

{{< figure align=center src="images/contract.png" alt="Smart Contract Tutorial">}}


## Überblick
In der jüngeren Vergangenheit haben wir einen [Blog -Beitrag][1] veröffentlicht, der die Auswirkungen und Bedeutung der Blockchain -Technologie hervorhebt. Es gibt noch einen interessanten Blog -Beitrag [Was ist NFT? | Nicht fungible Token erklärten][2]. Die verteilte Ledger-Technologie basiert auf einigen Kernkonzepten wie intelligenten Verträgen, Knoten, Bergbau, Konsensalgorithmen, digitalen Transaktionen und Peer-to-Peer-Netzwerken. Da es sich um Open Source handelt, gibt es daher ein großes Fenster für eine Erweiterung in Bezug auf Anwendungsfälle. Tatsächlich gibt es viele Open Source- und Free Digital Asset Management -Plattformen, die verteilt sind und einige Software benötigen, um die Transaktionen zu regeln.
In diesem Smart Contract -Tutorial lernen wir, wie Sie einen Ethereum -Smart -Vertrag erstellen, indem wir die folgenden Aufzählungszeichen abdecken.
* [ **Was ist ein intelligenter Vertrag?** ][3]
* [ **Wie erbaut man einen grundlegenden intelligenten Vertrag?** ][4]
* [ **Wie man Smart Contract ausführt und bereitstellt?** ][5]
* [ **Schlussfolgerung** ][6]

## Was ist ein intelligenter Vertrag? {#what}

Ein intelligenter Vertrag ist ein Programm, das auf der Blockchain ausführt, um digitale Transaktionen zu regeln. Dieser Code enthält die definierten Regeln und Verfahren, die sicherstellen, dass die Transparenz einer Transaktion. Jeder Smart -Vertrag enthält eine Adresse und diese Adresse wird verwendet, um auf eine Funktion eines bestimmten Smart -Vertrags zuzugreifen. Darüber hinaus bringen Smart Contracts Transparenz, Vertrauen und Sicherheit in das Blockchain -Netzwerk. Diese Code -Teile werden automatisch ausgeführt, sobald bestimmte Bedingungen erfüllt sind.
Jeder Entwickler kann jedoch einen intelligenten Vertrag schreiben und ihn über das Netzwerk bereitstellen. Darüber hinaus machen intelligente Verträge die Prozesse ziemlich robust, da die Ausführung dieser Codesteile nicht abhängig ist. Darüber hinaus speichern Smart Contracts die erforderlichen Informationen zu jeder Transaktion, die die Teilnehmer abrufen und überprüfen können. Viele Branchen wie das Gesundheitswesen und das Bankgeschäft übernehmen diese verteilte Hauptbuchentechnologie sehr. Regierungsinstitutionen möchten auch dezentrale Anwendungen (DApps) einsetzen, um Authentizität und Transparenz in das Wahlsystem zu bringen. Es gibt viele [Blockchain -Plattformen][7] wie [Ethereum][8], [Ripple][9], [Corda][10], und einige weitere in diesem Leitfaden werden wir unseren ersten intelligenten Vertrag aufbauen auf Ethereum.

## Wie baue ich einen grundlegenden intelligenten Vertrag auf? {#build}

In diesem Abschnitt des Smart Contract -Tutorials werden wir die Schritte zur Einrichtung der Umgebung für unseren ersten Smart -Vertrag sehen.
Smart Contracts können in vielen Sprachen geschrieben werden, aber wir werden [Solidität][11] verwenden, was eine hochrangige Sprache ist, um intelligente Verträge zu schreiben.
Wir werden [Ethereum Studio][12] eine webbasierte IDE verwenden. Es wird verwendet, um Smart Contracts sowie dezentrale Apps zu schreiben, um mit intelligenten Verträgen zu interagieren. Es bietet einige vorgefertigte Projektvorlagen, bei denen Sie sofort mit dem Schreiben Ihrer Logik beginnen können.
Öffnen Sie also das [Ethereum Studio][12] IDE in den Browser und Sie werden die folgende Schnittstelle sehen.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Smart Contract Tutorial">}}

Wählen wir "Hello World" -Option und erstellen Sie unser erstes Projekt. Sie können die Verzeichnisstruktur sehen. Darüber hinaus befindet sich auf der rechten Seite ein Ausgangsfenster.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Smart Contract Tutorial">}}

Es gibt zwei Ordner "App" und "Verträge".
Der App -Ordner gehört zur Web -App und enthält die folgenden Dateien.
* **app.css** : Zum Layout -Styling
* **app.html** : Für die Homepage
* **app.js** : Enthält die Geschäftslogik, um das Frontend mit dem Smart -Vertrag zu verbinden
In ähnlicher Weise enthält der Ordner Contracts die Quelldatei des Vertrags.
Öffnen wir nun die Datei helloWorld.sol, die bei Dateien/Verträgen/helloWorld.sol gefunden werden kann. Grundsätzlich ist dies die Hauptdatei, die den Code für den in Solidität geschriebenen Smart -Vertrag enthält. Sie können den Code ändern, wenn Sie möchten, wir werden ihn so lassen, wie er ist.

## Wie reite und bereitet ich einen intelligenten Vertrag aus und setze ich aus? {#deploy}

In diesem Abschnitt des Smart Contract -Tutorials werden wir sehen, wie Sie einen Smart -Vertrag ausführen und bereitstellen. Ethereum Studio erstellt den Soliditätscode in Byte -Code. Speichern Sie daher den Code und setzen Sie unseren ersten intelligenten Vertrag bereit.
Drücken Sie auf der linken Seitenplatte das Raketensymbol.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Was ist ein intelligenter Vertrag">}}

Sie können die Anfangswerte für Ihren Smart -Vertrag wie unten gezeigt konfigurieren und festlegen.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereum Smart Contract">}}

Klicken Sie auf die Taste „Speichern“ und drücken Sie die Taste „Bereitstellung“, um den Smart -Vertrag bereitzustellen. Sie sehen die folgende Ausgabe und eine Nachricht im Konsolenfenster unten. Das Konsolenfenster enthält Details wie Smart Contract Adresse, Nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Was ist ein intelligenter Vertrag">}}

Danach gibt es eine weitere Option auf der Panel auf der linken Seite und das ist die Interaktionsoption. Mit dieser Option können Sie mit Ihrem Smart -Vertrag interagieren, indem Sie seine Funktion aufrufen und Werte übergeben.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Was ist ein intelligenter Vertrag">}}

Darüber hinaus gibt es eine Front-End-App, mit der Benutzer mit dem Smart-Vertrag aus dem Browser interagieren können. Diese webbasierte App wird als dezentrale App bezeichnet. Sie können den Wert übergeben und das Konsolenfenster sehen.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Was ist ein intelligenter Vertrag">}}


## Abschluss {#con}

Dies bringt uns zum Ende dieses Smart Contract -Tutorials. Ich hoffe, dieser Artikel hat Ihnen geholfen, die wichtigsten Schritte beim Erstellen und Bereitstellen von Ethereum -Smart -Vertrag zu verstehen. Da sich die Blockchain-Technologie in hohem Maße weiterentwickelt, ist es Zeit, über das Echo-Blockchain-System stark praktische Praxis zu erhalten. Diese verteilte Ledger -Technologie ist sehr konfigurierbar und erweiterbar. Dieser Blog -Beitrag hilft Ihnen wirklich, wenn Sie bereit sind, intelligente Vertragsentwicklung zu lernen. Darüber hinaus gibt es viele hilfreiche Tutorials und Open Source Digital Asset Management -Management -Plattformen, die im folgenden Abschnitt „Explore“ erwähnt wurden.
Am Ende ist [containerize.com][13] vollständig dafür eingesetzt, die Liste der Open -Source -Software zu erstellen. Es gibt viele Tutorials und Blog -Beiträge zu Open -Source -Software und eine Reihe von Blog -Posts befinden sich in der Pipeline. Bitte bleiben Sie mit der Kategorie [Blockchain][7] in Kontakt mit der Kategorie [Blockchain].

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Ethereum][8]
  * [What is Ethereum? (ETH)][23]
  * [Hyperledger Fabric][14]
  * [OpenChain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [Konsensys Quorum][18]
  * [Was ist NFT? | Nicht fungible Token erklärt][2]
  * [So richten Sie Consensys Quorum Blockchain -Netzwerk lokal ein][19]
  * [Top 5 Open -Source -Blockchain -Plattformen im Jahr 2020][20]
  * [Eine grundlegende Anleitung zum Erstellen von Ethereum Smart Contract][21]
  * [Wie dezentrale Technologie Ihre Geschäftsstrategie aktualisiert][22]
  * [So richten Sie Consensys Quorum Blockchain -Netzwerk lokal ein][19]



[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[23]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
