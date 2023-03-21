---
title: "Tutorial di contratto intelligente | Ethereum Blockchain Development" 
seoTitle: "Tutorial di contratto intelligente | Ethereum Blockchain Development" 
description: "Questo tutorial sul contratto intelligente elabora i passaggi di base per creare contratti intelligenti Ethereum. Ethereum è una rete blockchain open source, sicura e distribuita." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum è una piattaforma matura per creare contratti intelligenti e applicazioni decentralizzate (DAPPS). Seguire questi passaggi per creare, testare e distribuire contratti intelligenti." 
url: /it/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum è una piattaforma matura per creare contratti intelligenti e applicazioni decentralizzate (DAPPS). Seguire questi passaggi per creare, testare e distribuire contratti intelligenti.

{{< figure align=center src="images/contract.png" alt="Tutorial contrattuale intelligente">}}


Panoramica ## 
Nel recente passato, abbiamo pubblicato un [post sul blog][1] che evidenzia l'impatto e l'importanza della tecnologia blockchain. C'è un altro post interessante sul blog [che cos'è NFT? | I token non fungibili hanno spiegato][2]. La tecnologia di contabilità distribuita si basa su alcuni concetti fondamentali come contratti intelligenti, nodi, mining, algoritmi di consenso, transazioni digitali e reti peer-to-peer. Poiché è open source, quindi, esiste un'enorme finestra per un'estensione relativa ai casi d'uso. In effetti, ci sono molte piattaforme di gestione delle risorse digitali open source e gratuite che sono distribuite e richiedono alcuni software per governare le transazioni.
In questo tutorial sul contratto intelligente, impareremo come costruire un contratto intelligente Ethereum coprendo i seguenti punti elenco.
* [**Cos'è un contratto intelligente?**][3]
* [**Come creare un contratto intelligente di base?**][4]
* [**Come eseguire e distribuire contratto intelligente?**][5]
* [**conclusione**][6]

## Cos'è un contratto intelligente?   {#Che cosa}
Un contratto intelligente è un programma che funziona sulla blockchain per governare le transazioni digitali. Questo pezzo di codice contiene le regole e le procedure definite che assicurano la trasparenza di una transazione. Ogni contratto intelligente contiene un indirizzo e quell'indirizzo viene utilizzato per accedere a qualsiasi funzione di un particolare contratto intelligente. Inoltre, i contratti intelligenti portano trasparenza, fiducia e sicurezza nella rete blockchain. Questi pezzi di codice eseguono automaticamente una volta soddisfatte determinate condizioni.
Tuttavia, qualsiasi sviluppatore può scrivere un contratto intelligente e distribuirlo sulla rete. Inoltre, i contratti intelligenti rendono i processi abbastanza robusti in quanto non vi è alcuna dipendenza nell'esecuzione di questi pezzi di codice. Inoltre, i contratti intelligenti archiviano le informazioni necessarie relative a ogni transazione che i partecipanti possono recuperare e verificare. Molte industrie come l'assistenza sanitaria, bancarie, stanno adottando fortemente questa tecnologia di contabilità distribuita. Le istituzioni governative sono inoltre desiderose di distribuire applicazioni decentralizzate (DAPPS) per portare autenticità e trasparenza nel sistema elettorale. Esistono molte [piattaforme blockchain][7] come [Ethereum][8], [Ripple][9], [Corda][10] e altre, tuttavia, in questa guida, costruiremo il nostro primo contratto intelligente su Ethereum.

## Come creare un contratto intelligente di base?   {#costruire}
In questa sezione del tutorial sul contratto intelligente, vedremo i passaggi per impostare l'ambiente per il nostro primo contratto intelligente.
I contratti intelligenti possono essere scritti in molte lingue, ma useremo [Solidità][11] che è una lingua di alto livello per scrivere contratti intelligenti.
Useremo [Ethereum Studio][12] che è un IDE basato sul web. Viene utilizzato per scrivere contratti intelligenti e app decentralizzate per interagire con contratti intelligenti. Fornisce alcuni modelli di progetto pre-costruiti in cui puoi iniziare a scrivere subito la tua logica.
Quindi, apri l'IDE [Ethereum Studio][12] nel browser e vedrai la seguente interfaccia.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Tutorial contrattuale intelligente">}}

Scegliamo l'opzione "Hello World" e crea il nostro primo progetto. Puoi vedere la struttura della directory. Inoltre, c'è una finestra di uscita sul lato destro.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Tutorial contrattuale intelligente">}}

Ci sono due cartelle "app" e "contratti".
La cartella dell'app appartiene all'app Web e contiene i seguenti file.
***app.css**: per lo stile del layout
***app.html**: per la home page
***app.js**: contiene la logica aziendale per collegare il front -end con il contratto intelligente
Allo stesso modo, la cartella dei contratti contiene il file di origine del contratto.
Ora, apriamo il file Helloworld.sol che può essere trovato su file/contratti/helloworld.sol. Fondamentalmente, questo è il file principale che contiene il codice per il contratto intelligente scritto in solidità. Puoi modificare il codice se lo desideri, lo lasceremo così com'è.

## Come eseguire e distribuire un contratto intelligente?   {#deploy}
In questa sezione del tutorial sul contratto intelligente, vedremo come eseguire e distribuire un contratto intelligente. Ethereum Studio compila il codice di solidità nel codice byte. Pertanto, salva il codice e distribuiamo il nostro primo contratto intelligente.
Sul pannello laterale sinistro, premere l'icona del razzo.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Cos'è un contratto intelligente">}}

È possibile configurare e impostare i valori iniziali per il contratto intelligente come mostrato di seguito.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereum Smart Contract">}}

Premi il pulsante "Salva" e premere il pulsante "Distribuite" per distribuire il contratto intelligente. Vedrai il seguente output e un messaggio nella finestra della console nella parte inferiore. La finestra della console fornisce dettagli come l'indirizzo del contratto intelligente, nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Cos'è un contratto intelligente">}}

Successivamente, c'è un'altra opzione sul pannello sul lato sinistro e questa è l'opzione di interazione. Questa opzione consente di interagire con il tuo contratto intelligente chiamando la sua funzione e passando valori.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Cos'è un contratto intelligente">}}

Inoltre, esiste un'app front-end che consente agli utenti di interagire con il contratto intelligente dal browser. Questa app basata sul web è chiamata app decentralizzata. Puoi passare il valore e vedere la finestra della console.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Cos'è un contratto intelligente">}}


## conclusione   {#con}
Questo ci porta alla fine di questo tutorial sul contratto intelligente. Spero che questo articolo ti abbia aiutato a comprendere i passaggi chiave della costruzione e della distribuzione del contratto intelligente Ethereum. Poiché la tecnologia blockchain si sta evolvendo a un ritmo elevato, è tempo di ottenere una forte pratica pratica sul sistema di eco di blockchain. Questa tecnologia di contabilità distribuita è altamente configurabile ed estensibile. Questo post sul blog ti aiuterà davvero se sei disposto a imparare lo sviluppo del contratto intelligente. Inoltre, ci sono molti tutorial utili e piattaforme di gestione delle risorse digitali open source menzionate nella sezione "Esplora" di seguito.
Alla fine, [containerize.com][13] è completamente dedicato alla compilazione dell'elenco del software open source. Ci sono molti tutorial e post di blog sul software open source e numerosi post sul blog sono in cantiere. Pertanto, rimani in contatto con la categoria [Blockchain Platforms][7] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Ethereum][8]
  * [Tessuto hyperledger][14]
  * [OpenChain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [Consensys Quorum][18]
  * [Cos'è NFT? | Token non fungibili spiegati][2]
  * [Come configurare la rete di blockchain quorum di consenso a livello locale][19]
  * [Top 5 piattaforme blockchain open source nel 2020][20]
  * [Una guida di base su come creare un contratto intelligente Ethereum][21]
  * [Come la tecnologia decentralizzata aggiorna la tua strategia aziendale][22]
  * [Come configurare la rete di blockchain quorum di consenso a livello locale][19]

  
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
