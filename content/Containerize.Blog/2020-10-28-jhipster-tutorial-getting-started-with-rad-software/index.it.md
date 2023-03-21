---
title: "Tutorial Jhipster | Introduzione con il software RAD" 
seoTitle: "Tutorial Jhipster | Introduzione con il software RAD" 
description: "Un tutorial Jhipster passo-passo per i principianti per iniziare. Segui questo articolo per impostare la prima applicazione con il software Jhipster Rad open source." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Ci immerciamo in un generatore di codice sorgente. Offre funzionalità out-of-the-box per generare applicazioni reattive basate sul Web con API REST ben documentata." 
url: /it/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## immergiamole in un generatore di codice sorgente. Offre funzionalità out-of-the-box per generare applicazioni reattive basate sul Web con API REST ben documentata.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Tutorial Jhipster">}}


Panoramica ## :
Di recente abbiamo pubblicato un [post sul blog][1] sull'importanza di [RAD Software][2] nei tempi attuali. La tecnologia si sta evolvendo a un ritmo molto alto. I requisiti e le esigenze aziendali stanno cambiando di giorno in giorno. C'è una corsa per sviluppare soluzioni in un arco di tempo più breve. D'altra parte, ogni azienda vuole catturare il mercato lanciando il prodotto il prima possibile. Pertanto, la comunità open source ha sviluppato molti software basati sullo sviluppo di software****. Questi software gratuiti di sviluppo di applicazioni rapidi facilitano gli utenti con funzionalità di sviluppo di prototipazioni rapide. Ti consente di creare e avviare la versione iniziale del tuo prodotto e quindi è possibile sviluppare ulteriori rilasci con l'input del feedback degli utenti. Inoltre, questi software sono progettati per assorbire qualsiasi cambiamento in qualsiasi fase del progetto.
Nel frattempo, i team di sviluppo del software accelerano i loro processi di sviluppo e assicurano che le consegne precedenti. In effetti, è conveniente, risparmiando tempo e dà soddisfazione per sviluppatori e utenti. Lo sviluppo rapido dell'applicazione è abbastanza flessibile da non aver bisogno di scadenze pianificate e rigorose. Costruisci ciò di cui i tuoi consumatori finali hanno bisogno. In questo tutorial di Jhipster, esamineremo come impostare [Jhipter][3] e creare la nostra prima applicazione con esso coprendo i seguenti punti:
  * [Che cos'è Jhipster e come installarlo?][4]
  * [Come generare ed eseguire un'applicazione di base?][5]
  * [Esplora la dashboard di amministrazione dell'app generata][6]
  * [Conclusione][7]

## Che cos'è Jhipster e come installarlo?   {#installare}
[Jhipster][3] è un software RAD open source che viene utilizzato per generare applicazioni Web aziendali. Questo costruttore di applicazioni open source offre un framework di avvio a molla basato su Java sul lato server e le popolari tecnologie front-end come Angular, Vue.js e React.JS. Questo generatore di codice sorgente include una solida architettura di microservizi con più meccanismi di autenticazione utente come OAuth.20, JWTS e Autenticazione della sessione HTTP. Inoltre, fornisce una versione online in cui gli utenti possono esplorare tutte le funzionalità. Questo**strumento di prototipazione open source**è scritto in JavaScript con un piccolo input di TypeScript. Pertanto, è disponibile una documentazione completa per quanto riguarda lo sviluppo e la distribuzione. Gli sviluppatori possono trovare il codice sorgente nel repository [github][8]. Esiste un supporto completo per eseguire test utilizzando framework di test popolari come gatling e protrattore. Inoltre, è robusto, sicuro, multipiattaforma e supporta integrazioni di terze parti.
In questo**tutorial Jhipster,**esploreremo Jhipster per quanto riguarda la sua configurazione e l'uso. [Jhipster][3] è gratuito e costruito sopra il modello di sviluppo rapido dell'applicazione. Fornisce un ecosistema adatto agli sviluppatori che è abbastanza promettente e presenta potenti strumenti di sviluppo di applicazioni Web rapidi.
Vediamo come possiamo installare questo costruttore di applicazioni open source. Innanzitutto, installeremo i seguenti prerequisiti.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Una volta completata l'installazione, aprire il terminale ed eseguire il comando seguente.
`NPM Installa -g Generator -Jhipster`
Questo comando potrebbe richiedere qualche minuto e, dopo il completamento con successo, Jhipster verrà installato sulla macchina.
È possibile controllare il seguente comando per controllare l'installazione.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Installazione di Jhipster">}}


## Come generare ed eseguire un'applicazione di base?   {#correre}
Nella sezione di questo**tutorial jhipster**, impareremo come generare la nostra prima applicazione utilizzando questo software RAD open source.
Torna alla finestra del terminale, esegui i seguenti comandi:
`mkdir 1stappcd 1stapp/`
Dopo aver realizzato directory, eseguire il seguente comando menzionato di seguito:
`jhipster`
Questo comando avvierà il processo. Rispondi a tutte le domande relative alle preferenze tecnologiche dell'applicazione come tecnologie front -end e back -end, database, framework di test e altro come puoi vedere nell'immagine qui sotto.

{{< figure align=center src="images/qst-1024x474.png" alt="Tutorial Jhipster">}}

Dopo aver risposto a tutte le domande, questo generatore di codice sorgente genererà file di codice nella cartella.
Ora, esegui l'applicazione generata con il seguente comando:
`./mvnw`
Nota: questo comando funzionerà se hai scelto Maven come automazione build per il backend.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Tutorial Jhipster">}}

Accedi all'applicazione nel browser su http: // localhost: 8080/.

## Esplora la dashboard di amministrazione dell'app generata   {#dashboard}
Una volta colpito http: // localhost: 8080/nel tuo browser, vedrai la seguente schermata.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="generatore di codici">}}

È possibile utilizzare le credenziali menzionate per accedere come amministratore. Jhipster fornisce due ruoli utente predefiniti. Dopo un accordo con successo, avrai le seguenti disposizioni mostrate nell'immagine.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="software RAD open source">}}

Jhipster fornisce una gestione completa degli utenti in cui è possibile gestire i tuoi utenti come puoi vedere nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Gestione utente di Jhipster">}}

L'opzione Health ti fornisce informazioni sullo spazio e sul database del disco.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Tutorial Jhipster">}}

È disponibile un sistema di registrazione completo nella dashboard di amministratore Jhipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="software RAD open source">}}

Il cruscotto admin di questo costruttore di applicazioni open source fornisce anche endpoint di riposo di funzionalità integrate e personalizzate.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster open source">}}


## conclusione   {#con}
Questa è la fine di questo tutorial Jhipster. Esistono molte piattaforme RAD open source che forniscono**sviluppo di app istantanei**. C'è una comunità molto vivace che è sempre viva per rispondere ai problemi e alle loro soluzioni. La metodologia RAD sta guadagnando fama a causa di molti fattori. In primo luogo, non è necessario avere una completa comprensione dei requisiti. In secondo luogo, il consumatore finale è coinvolto durante il ciclo di vita dello sviluppo del software. In terzo luogo, il fattore di rischio è molto inferiore poiché tutte le parti interessate sono a bordo. Tuttavia, il software RAD è adattabile, adatto agli sviluppatori e flessibile ai cambiamenti. Risparmia molto tempo poiché i generatori di codice risparmiano un tempo immenso di riscrivere gli script ripetitivi. Questo articolo**[Jhipster][3] tutorial**ha messo in evidenza alcune importanti intuizioni. È leggero e facile da configurare con alcuni semplici comandi di shell.
Sentiti libero di installare questo costruttore di applicazioni open source oggi se stai seriamente cercando una piattaforma di sviluppo di applicazioni rapide open source. Infine, [containerize.com][11] è pronto a migliorare la sua base di tutorial con alcuni tutorial più interessanti. Si prega di rimanere in contatto con questa categoria [sviluppo rapido dell'applicazione][2] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Cuba Platform][12]
  * [Quickapp][13]
  * [Jhipster][3]
  * [Li3][14]
  * [Apache Isis][15]
  * [Top 5 software gratuito di sviluppo di applicazioni rapide nel 2021][16]
  * [Software di sviluppo delle applicazioni rapido per le imprese | Rad][17]
  * [Cose da rivedere prima di optare sul software open source nel 2021][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
