---
title: "Cos'è TestNet e come distribuirlo | Ethereum Testnet '" 
seoTitle: "Cos'è TestNet e come distribuirlo | Ethereum Testnet" 
description: "Cos'è Testnet? Questa guida riguarda come impostare il nodo Ethereum su LocalHost. Blockchain è una rete di nodi che mantengono una cronologia di tutte le transazioni." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum è una rete peer-to-peer blockchain open source di nodi connessi. Impariamo come distribuire e interagire con il nodo Ethereum su un server locale." 
url: /it/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum è una rete peer-to-peer blockchain open source di nodi connessi. Impariamo come distribuire e interagire con il nodo Ethereum su un server locale.

{{< figure align=center src="images/ether.png" alt="Cos'è Testnet">}}

Nei nostri precedenti post sul blog, abbiamo scritto su più argomenti che includono [Blockchain Technology for Business][1], [Scrivere un contratto intelligente di base][2] e [Popoli piattaforme blockchain][3]. Ci sono ulteriori argomenti su cui scriveremo nel prossimo futuro mentre  **Tecnologia di contabilità decentralizzata**  sta guadagnando il passo con il passare del tempo. Le persone stanno ora iniziando ad interessarsi alle piattaforme di gestione delle risorse digitali a causa della sicurezza e della trasparenza. Inoltre, le transazioni digitali sono rintracciabili, immutabili e tali fattori danno fiducia alle persone in merito all'affidabilità di questa tecnologia. Esistono tre tipi di blockchain pubblico, privato e autorizzato. Tuttavia, gli utenti possono adottare qualsiasi tipo a seconda del caso d'uso.
L'avvento di questa tecnologia ha portato un enorme cambiamento nel settore bancario in quanto ha cambiato il modo di transazioni finanziarie. In questo post sul blog, parleremo di Ethereum Blockchain per quanto riguarda la creazione di nodo Ethereum su LocalHost e vedremo come interagire con la rete di test. Copriremo i seguenti punti chiave.
*  **Cos'è TestNet?**  
*  **[Come configurare Blockchain Ethereum?][4]**  
*  **[Come interagire con Ethereum Blockchain?][5]**  
*  **[Conclusione][6]**  

## Cos'è Testnet? {#tetstnet}

In questo post del blog, distribuiremo un nodo Ethereum su LocalHost. Ethereum ha più reti, la rete di produzione è chiamata Mainnet e la rete utilizzata per scopi di test è chiamata TestNet. La maggior parte delle applicazioni decentralizzate si basano sulla blockchain [Ethereum][7]. Il contratto intelligente è un componente integrale di questa infrastruttura distribuita. Inoltre, Blockchain è una rete di computer chiamati "nodi". Tuttavia, ogni nodo contiene una copia della blockchain e quindi partecipa alla rete. Ethereum Blockchain ha anche la sua criptovaluta chiamata "Ether". Tutte le transazioni sono crittograficamente protette. Inoltre, è una tecnologia di contabilità completa che non si spegne mai o si danneggia. Ti consente di scrivere contratti intelligenti e applicazioni decentralizzate (DAPPS) che eseguono i nodi blockchain di Etherum.
Questa rete blockchain distribuita open source utilizza un algoritmo di consenso chiamato Proof of Work (POW). Inoltre, l'architettura di Ethereum comprende cinque livelli come Ethereum Virtual Machine, API client Ethereum, contratti intelligenti, nodi Ethereum e applicazioni utente finali. Ethereum Virtual Machine offre il software e l'architettura che riconoscono i contratti intelligenti. I contratti intelligenti sono il software che regola le transazioni. Esiste un forte supporto per la blockchain di Ethereum e le aziende Fortune 500 hanno mostrato un grande interesse a fare sviluppo su una scala più ampia utilizzando questa tecnologia. Inoltre, Ethereum è scritto in lingua GO e il suo codice sorgente è disponibile su [GitHub][8]. Tutta la documentazione è disponibile per quanto riguarda la distribuzione e lo sviluppo in quanto ha una comunità vibrante.

## Come configurare Blockchain Ethereum? {#setup}

Ora siamo a conoscenza di ciò che è TestNet. In questa sezione, imposteremo il nodo Ethereum sulla nostra macchina locale. Prima di andare oltre, assicurati di aver installato i seguenti prerequisiti.
  * [Homebrew][9] (per macOS)

  * [Go7] (brew install go)
Una volta che i prerequisiti sono in atto, eseguire il seguente comando per clonare il codice sorgente:
```
git clone https://github.com/ethereum/go-ethereum
```
Su un clone di successo, vai nella directory:
```
cd go-ethereum
```
Ora, esegui il seguente comando per creare il programma GETH:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Nota
{{_LINE_34_}}
  In caso di errore, installa Xcode eseguendo Xcode-Select-Installa e riprova
{{_LINE_36_}}
Quindi, hai impostato tutti i prerequisiti e il codice sorgente. Pertanto, eseguire il seguente comando per avviare il nodo:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Nodo Ethereum">}}


## Come interagire con la blockchain Ethereum? {#interact}

Questa sezione parla dell'interazione con un nodo Ethereum in esecuzione completamente sincronizzato con la blockchain. Possiamo utilizzare il software GETH per interagire e inviare comandi alla rete di test.
Per questo, includiamo build/bin/geth nella variabile di ambiente $ path eseguendo i seguenti comandi:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Successivamente, interrompere il server che hai sollevato sopra ed esegui la rete di test con le seguenti flag:
GETH -TESTNET - -RPC - -RPCAPI = "DB, ETH, NET, Web3, PERSONALE, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Cos'è Testnet">}}

Successivamente, è necessario aprire una nuova finestra del terminale e allegare il comando GETH al nodo eseguendo il comando seguente:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="piattaforma di gestione delle risorse digitali">}}

GETH aprirà una finestra della console in cui è possibile interagire con la rete di test. Il comando seguente creerà un account che contiene la valuta virtuale e la coppia di chiave pubblica/privata:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Tecnologia di contabilità decentralizzata">}}

Per controllare il tuo account, puoi eseguire il seguente comando:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Cos'è Testnet">}}

Allo stesso modo, ci sono molti comandi che puoi usare per interagire con Ethereum Blockchain.

## Conclusione {#Conclusione}

Ecco la fine di questo tutorial. Abbiamo imparato  **cos'è TestNet** e il processo di configurazione del nodo Ethereum sulla macchina locale. Ethereum Blockchain è una soluzione generalizzata per la maggior parte delle applicazioni decentralizzate. La maggior parte delle imprese e dei dipartimenti governativi tende ad adottare questa tecnologia per portare robustezza, trasparenza, disponibilità e responsabilità. Inoltre, questo tutorial di blockchain **ti aiuterà davvero se hai intenzione di iniziare lo sviluppo sulla blockchain Ethereum mentre sfrutta i contratti intelligenti. Etheruem Blockchain è più stabile e popolare in quanto ha migliaia di nodi vivi. Inoltre, le aziende possono facilmente sviluppare e distribuire reti di blockchain Ethereum senza dedicare tempo extra. L'altro fattore alla base dell'affidabilità di Ethereum è che offre lo sviluppo di contratti intelligenti in un modo che altre**  piattaforme di gestione delle risorse digitali**non offrono.
Gli ultimi aggiornamenti nella rete Ethereum hanno reso la rete più conveniente ed efficiente. In effetti, c'è molto più materiale disponibile sul cloud che dimostra gli aspetti importanti di Etheruem in merito agli scopi di investimento e sviluppo. Per gli sviluppatori, fornisce un ecosistema a misura di sviluppatore con utility pre-fatte. Per i minatori, c'è una generosità sotto forma di un etere ogni volta che estraggono un nuovo blocco nella blockchain. Inoltre, [containerize.com][10] ha pubblicato molti post e tutorial di blog tecnici sui popolari prodotti open source su [blog.containerize.com][11]. Pertanto, rimanete connessi con la categoria [Blockchain Platforms][12] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Ethereum][7]
  * [Tessuto hyperledger][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Consensys Quorum][17]
  * [Come configurare la rete di blockchain quorum di consenso a livello locale][18]
  * [Top 5 piattaforme blockchain open source nel 2020][3]
  * [Una guida di base su come creare un contratto intelligente Ethereum][2]
  * [Come la tecnologia decentralizzata aggiorna la tua strategia aziendale][19]



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
