---
title: "Una guida per principianti per utilizzare l'applicazione di fatturazione del cratere" 
seoTitle: "Una guida per principianti per utilizzare l'applicazione di fatturazione del cratere" 
description: "Un tutorial per iniziare con un sistema di fattura open source. Questa linea guida di Cratere ti aiuta a familiarizzare con i concetti e le caratteristiche fondamentali." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Questo tutorial ti aiuterà a conoscere le applicazioni di fatturazione dei crater. È un sistema di fatture open source per le piccole imprese." 
url: /it/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Questo tutorial ti aiuterà a conoscere le applicazioni di fatturazione dei crater. È un sistema di fatture open source per le piccole imprese.

{{< figure align=center src="images/blog-crater.png" alt="Sistema di fattura open source">}}

Ogni azienda ha bisogno di una sorta di sistema per la gestione di fatture, spese, pagamenti e molti altri. Il software per la fatturazione ti aiuta a gestirlo in modo da poter eseguire facilmente attività di fatturazione e concentrarti su altre cose importanti. In questo post, impareremo come impostare il cratere e usarlo per la gestione delle operazioni di contabilità per l'azienda.
  * [Introduzione sul cratere][1]
  * [Procedura di installazione del cratere][2]
  * [Feature Exploration][3]
  * [Conclusione][4]

## Introduzione sul cratere {#Introduction}

[Cratere][5] è un'applicazione di fatturazione gratuita e open source. È assolutamente gratuito e puoi aggiornarlo facilmente alle versioni più recenti. È un sistema di contabilità gratuito per piccole imprese e liberi professionisti. È anche una soluzione di fatturazione completa, che consente di tenere traccia delle spese e dei pagamenti, calcolare le tasse e produrre stime e fatture. Inoltre, viene fornito con le applicazioni mobili fuori dalla scatola per i dispositivi iPhone e Android. Ti permetterà di gestirlo da qualsiasi luogo. Poiché Crater è un software di fatturazione basato sul Web, l'applicazione Web è progettata con Laravel e Vuejs e le app mobili sono costruite con React Native. Tutta la documentazione relativa allo sviluppo e alla distribuzione è disponibile. Il codice sorgente completo è disponibile su [github][6].

## Procedura di installazione del cratere {#Installation}

Discuteremo come installare Crater con il metodo manuale e usare Docker in questa sezione.

### installazione manuale
  * Scarica l'ultima versione da.
  * Carica il file zip scaricato sul tuo server ed estrailo.
  * Punta il tuo dominio alla cartella del directory pubblica all'interno del cratere.
  * Passa alla radice del tuo progetto ed esegui il comando "Sudo chmod -r 775 ./" per assegnare privilegi appropriati.
  * Apri il tuo sito nel browser e segui la procedura guidata di installazione.

### Installazione Docker
  * Installa Docker sul tuo server :.
  * Installa Docker Composition seguendo questa guida :.
  * Repository clone cratere utilizzando questo comando.
```
git clone https://github.com/bytefury/crater
```
  * Esegui i comandi sotto uno per uno per installare il cratere.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Apri il sito del cratere nel browser e segui la procedura guidata di installazione.

## Esplorazione delle caratteristiche {#Feature}

In questa sezione, esploreremo le caratteristiche principali di questa applicazione di fatturazione open source. Una volta terminato l'installazione, apri il tuo sito http://example.com e accedi nell'applicazione.
*  **Dashboard**  - Dopo aver effettuato l'accesso, verrai portato alla dashboard, che visualizza l'intera vista dell'app.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **Impostazioni**  - Ora vai alla pagina Impostazioni e aggiungi varie impostazioni dell'applicazione Web come impostazioni dell'account, informazioni dell'azienda, preferenze, personalizzazioni, notifiche, moduli di pagamento e così via.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **Articoli**  - La scheda Articoli è accessibile dal menu della barra laterale. Da questa scheda, puoi gestire i tuoi elementi. È possibile utilizzare gli articoli durante la creazione di stime e fatture.
*  **Stima**  - Crea un preventivo completo che includa tariffe, sconti, inventario e altro ancora. Uno dei tre modelli incorporati può essere utilizzato per creare una stima. Ulteriori tasse possono essere aggiunte alla stima e possono anche essere aggiunte come imposta composta.
*  **Fatture**  - Crea fatture professionali e inviale ai tuoi clienti. È possibile utilizzare modelli disponibili per generare fattura. È possibile aggiungere ulteriori tasse alla fattura, nonché una tassa composta. Inoltre, puoi fornire una percentuale o uno sconto a valore fisso ai tuoi clienti. Inoltre, è possibile applicare sconti ai singoli articoli e all'importo complessivo della fattura.
*  **Pagamenti**  - Questo modulo ti aiuta a mantenere il monitoraggio dei pagamenti che hai dai tuoi clienti.
*  **Spese**  - Il modulo Spese ti aiuta a tenere traccia di quanto spendi per diversi servizi.
*  **Tasse**  - Usando questa funzione, puoi facilmente gestire le tue tasse. È possibile aggiungere più tasse sull'importo totale della fattura o sull'articolo individuale.
*  **Rapporti**  - Ottieni informazioni complete su tutte le fatture, sia per uno o più clienti. I supporti del cratere includono quattro tipi di report come rapporto di vendita, rapporto profitti e perdite, rapporto sulle spese e tasse.

## Conclusione {#Conclusione}

Abbiamo imparato a conoscere Crater e come impostarlo manualmente e con Docker. Abbiamo anche esaminato alcune delle funzionalità che ogni software di fatturazione contabile dovrebbe fornire. Spero che questa guida possa aiutarti a implementare rapidamente un sistema di fattura open source per la tua attività.
Infine, [containerize.com][7] è in costante scrittura di post sul blog su ulteriori prodotti e argomenti open source. Pertanto, rimani in contatto con la categoria [fatturazione][8] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Cratere - Sistema di contabilità gratuita per le piccole imprese][5]
  * [Top 5 software di contabilità open source nell'anno 2021][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
