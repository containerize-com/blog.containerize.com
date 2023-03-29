---
title: "Come configurare la rete di blockchain quorum di consenso a livello locale" 
seoTitle: "Come configurare la rete di blockchain quorum di consenso a livello locale" 
description: "Segui questa guida per conoscere il processo di installazione delle consenzieri Blockchain Quorum su LocalHost. Consensys Quorum è blockchain a base di Etherum open source." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Stabilisci la propria rete blockchain pubblica/privata per gestire e monitorare le transazioni digitali aziendali. Impariamo come configurare il Quorum di consenso su Localhost." 
url: /it/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Stabilisci la propria rete blockchain pubblica/privata per gestire e monitorare le transazioni digitali aziendali. Impariamo come configurare il quorum di consenso su Localhost.

{{< figure align=center src="images/quorum.png" alt="Consensys Quorum">}}


Panoramica ##
Nel recente passato, abbiamo pubblicato post sul blog su alcuni argomenti relativi alla blockchain come [le 5 piattaforme blockchain open source nel 2020][1], [una guida di base su come creare un contratto Ethereum Smart][2], [come decentralizzato La tecnologia aggiorna la tua strategia aziendale][3] e [una guida per principianti per configurare il nodo Ethereum su LocalHost][4]. In questo articolo, vedremo come impostare la rete Blockchain di Consensys Quorum su LocalHost coprendo i seguenti punti.
* **[Una breve introduzione di consenzieri Quorum][5]** 
* **[Quali sono i prerequisiti e**Procedura di installazione**?][6]** 
* **[Come avviare la rete?][7]** 
* **[Conclusione][8]** 

## **Una breve introduzione di consenzieri quorum** {#Introduction}

[Consensys Quorum][9] è una piattaforma open source basata sulla tecnologia di contabilità **decentralizzata**. Tuttavia, fornisce un ambiente completamente adatto agli sviluppatori per creare applicazioni basate su blockchain che gestiscono transazioni rapide e ad alto rendimento. È **Ethereum** basato, estensibile e offre molti plugin. Inoltre, questo sistema distribuito open source è dotato di elevati standard di sicurezza e privacy. Inoltre, ci sono molte potenti caratteristiche come le API di autorizzazione e il monitoraggio. Inoltre, questa piattaforma**DLT** è ospitata da soli e fornisce una documentazione dettagliata per quanto riguarda lo sviluppo e la distribuzione. Il codice sorgente di questo software gratuito è disponibile su [GitHub][10].
Consensys Quorum offre le seguenti caratteristiche importanti:
  * Architettura collegabile
  * Basato su Ethereum
  * Sicuro
  * Autosufficiente
  * Rete pubblica/privata
[Scopri di più su Consensys Quorum][11]

##* ***Quali sono i prerequisiti e la procedura di installazione?****{#pre-requisites}

In questa sezione, installeremo le dipendenze richieste e imposteremo l'ambiente locale. Prima di andare al passaggio successivo, assicurati di aver installato i seguenti prerequisiti:
  * Nodejs v10+
  * Docker
  * Docker-compose
Una volta installati i prerequisiti, eseguire il comando seguente per avviare l'utilità QuickStart basata su CLI.
```
npx quorum-dev-quickstart
```
Tuttavia, rispondi alle domande per completare l'installazione come mostrato nell'immagine seguente.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys Quorum">}}


##* ***Come avviare la rete?****{#start}

Ora abbiamo il codice sorgente in atto. Quindi, il prossimo passo è rendere la rete in vita.
Esegui il comando seguente per entrare nella directory principale.
```
cd quorum-test-network
```
Successivamente, esegui il comando seguente per avviare tutti i contenitori Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys Quorum">}}

Una volta che tutti i contenitori Docker sono attivi e in esecuzione, è possibile accedere a Block Explorer al seguente indirizzo:
```
http://localhost:25000
```
[] ()
Inoltre, puoi interagire con Block Explorer come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Sistema distribuito open source">}}

Allo stesso modo, puoi fermare l'intera rete eseguendo il comando seguente:
```
./stop.sh 
```

## Conclusione {#Conclusione}

Questa è la fine di questo tutorial. Soprattutto, il Quorum di consenso basato su Ethereum è una **tecnologia finanziaria digitale** appositamente sviluppata per i casi di uso finanziario. Ha un algoritmo di consenso basato sul voto. Tuttavia, il motivo principale di questa tecnologia decentralizzata è quello di creare soluzioni efficienti per le imprese.
Infine, [containerize.com][12] ha pubblicato molti post e tutorial di blog tecnici sui popolari prodotti open source su [blog.containerize.com][13]. Pertanto, attenersi alla categoria [Blockchain Platforms][14] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Ethereum][15]
  * [Tessuto hyperledger][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [Consensys Quorum][9]



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
