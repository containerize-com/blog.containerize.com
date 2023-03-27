---
title: "Introduzione con un generatore di moduli HTML | Formbuilder" 
seoTitle: "Introduzione con un generatore di moduli HTML | Formbuilder" 
description: "FormBuilder è un generatore di moduli HTML gratuito e multilingue con interfaccia utente Drag & Drop. Segui questo tutorial per imparare a configurarlo su LocalHost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "Editor di moduli open source alimentato JavaScript con più configurazioni, modelli di modulo configurabile e controlli personalizzati. Impariamo come impostare FormBuilder." 
url: /it/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## Editor dei moduli open source alimentati JavaScript con più configurazioni, modelli di forma configurabile e controlli personalizzati. Impariamo come impostare FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="Generatore di moduli HTML">}}


Panoramica ##****
Di recente abbiamo pubblicato alcuni articoli su argomenti come [come configurare il creatore di moduli bootstrap form.io su localhost][1] e [i 5 costruttori di moduli online open source nell'anno 2020][2]. Il primo post sul blog è un articolo di tutorial che dimostra il processo di configurazione e le caratteristiche di un builder Bootstrap Form [Form.io][3]. Il secondo articolo parla dei costruttori di moduli open source ampiamente utilizzati. Nel momento attuale, l'interazione a due vie è la cosa più importante tra i fornitori di servizi e i consumatori di servizi. Le organizzazioni tendono a ricevere feedback coerenti sui loro servizi e quindi formulano strategie aziendali future. Tuttavia, i moduli sono per raccogliere e archiviare informazioni dai clienti. Le aziende producono una serie di forme per raccogliere dati su varie operazioni in corso e ci sono molti tipi di forme che alcune di esse sono pagine singole e alcune di esse sono forme di più pagine. Alcune aziende hanno forme incorporate sul loro portale online o alcune di esse utilizzano e -mail o altri tipi di medium per esporre i loro moduli per la raccolta dei dati.
Pertanto, ci sono molti moduli open source e software di gestione dei dati disponibili con funzionalità ricche del costruttore. In questo articolo, esploreremo il generatore di moduli HTML gratuito **[FormBuilder][4]** coprendo i seguenti punti.
* **[Cos'è FormBuilder?][5]** 
* [ **Come configurare?** ][6]
* [ **Come creare forme usando formbuilder?** ][7]
* **[Conclusione][8]** 

## Cos'è FormBuilder? {#what}

[FormBuilder][4] è un designer di moduli open source che consente agli utenti di creare forme interattive. È sicuro, estensibile e viene fornito con capacità di auto-osting. Questo generatore di moduli HTML è multilingue e offre supporto per più lingue. Esiste un'interfaccia utente intuitiva in cui gli utenti possono trascinare e rilasciare elementi del modulo per formulare il modello di forma richiesto. Inoltre, fornisce controlli ricchi e modelli di forma configurabili. Inoltre, gli utenti possono creare più schede sull'interfaccia utente per creare moduli multi -pagina. Soprattutto, gli utenti possono tendere a questo costruttore di moduli gratuito sviluppando i suoi plugin. Ha tutta la documentazione disponibile per quanto riguarda lo sviluppo e la distribuzione. È scritto in node.js e tutto il codice sorgente è disponibile su [github][9].
Ecco i punti salienti principali di Form.io
  * I18n integrato
  * Forme multi-pagine
  * Estensibile
  * Supporto per i famosi framework di front -end Javascript
  * Drag and drop Ui

## Come impostare? {#setup}

Questa sezione del tutorial del Builder Form ti mostrerà come impostare FormBuilder sulla macchina locale.
Prima di andare oltre, assicurati di aver installato i seguenti pre-requisiti.
  * Node.js> = 10.9.0
  * npm
  * Idiota
Dopo aver installato i prerequisiti, eseguire il comando seguente per clonare il codice sorgente di questa applicazione:
```
git clone https://github.com/kevinchappell/formBuilder
```
Quindi, eseguire i seguenti comandi per installare le dipendenze:
```
cd form-builder<br>npm install 
```
Successivamente, è possibile avviare l'applicazione eseguendo il seguente comando:
```
npm start
```
Infine, il comando sopra aprirà l'applicazione nel browser al seguente indirizzo:
```
http://localhost:8080/
```

## Come creare forme usando FormBuilder? {#how}

In questa sezione, esploreremo le caratteristiche di questo generatore di moduli HTML e impareremo come possiamo creare forme.
La seguente interfaccia utente verrà visualizzata una volta avviata il server.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Generatore di moduli HTML">}}

Andando avanti, puoi vedere la barra dei menu sul lato destro. Contiene elementi del modulo come pulsanti, caselle di controllo, campi di testo, campi di dati, intestazione, paragrafo e altro ancora. Tuttavia, è possibile trascinare questi elementi e cadere nell'area centrale (droppable) dello schermo. Nell'angolo in alto a sinistra, esiste un'opzione per abilitare la versione bootstrap dell'app. Nell'angolo in alto a sinistra, c'è un discesa in cui gli utenti possono selezionare qualsiasi lingua disponibile.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Form Editor">}}

Successivamente, possiamo trascinare e rilasciare qualsiasi elemento di modulo nell'area droppable. Inoltre, possiamo modificare le configurazioni di qualsiasi elemento come mostrato nell'immagine sopra. Esiste un'opzione per creare una copia dell'elemento esistente. Possiamo cambiare il posizionamento degli elementi tra loro.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Generatore di moduli HTML">}}

Una volta che hai finito con l'edificio del modulo, è possibile rendere il modulo premendo il pulsante "Render" posizionato sul centro superiore. Inoltre, ci sono varie opzioni di forma in cui gli utenti possono ottenere l'HTML generato dietro i moduli. Esistono anche altre opzioni come il modulo utente di caricamento, mostra i dati dell'utente, il modulo utente di rendering e il modulo di cancellazione dell'utente. Insieme a queste funzionalità, ci sono molte azioni di modulo disponibili come "getfieldTypes" che restituiscono i tipi di campo registrati per il modulo. Allo stesso modo, ci sono molte altre azioni come Show Data, Get XML, Imposta dati, Attiva edifica e altre. Tuttavia, ci sono molte altre cose che puoi controllarti. Poiché è open source, puoi modificarlo secondo le tue esigenze.

## Conclusione {#Conclusione}

Questa è la fine del post sul blog. Speriamo che questo tutorial ti aiuti davvero se stai cercando di distribuire un generatore di moduli HTML open source. Questo articolo ha coperto molti aspetti di FormBuilder in modo da poter facilmente fare una scelta considerando le tue esigenze aziendali. Questi costruttori di moduli open source gratuiti sono economici e risparmiati nel tempo. Questi strumenti gratuiti non solo forniscono funzionalità di costruzione di forme, ma forniscono anche forme e gestione dei dati. È possibile configurare i moduli con applicazioni Web di terze parti. Inoltre, rimuove la seccatura di creare forme diverse per diverse applicazioni aziendali che gli imprenditori possono creare qualsiasi tipo di forma utilizzando questi costruttori di moduli open source. Inoltre, ci sono plugin disponibili per questi editor di moduli che gli sviluppatori possono modificare secondo i requisiti. Pertanto, è giunto il momento di automatizzare tali attività ripetitive utilizzando un buon generatore di moduli HTML gratuito.
Infine, [containerize.com][10] sta scrivendo articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con la categoria [Forms][11] per notizie e aggiornamenti regolari.

## Esplorare
* **[Form.io][3]** 
* **[Orbeon][12]** 
* **[Ohmyform][13]** 
* **[Webiny][14]** 
* **[FormTools][15]** 
* **[FormBuilder][4]** 
* **[Alpaca Forms][16]** 
* [ **Come configurare Bootstrap Form Creator Form.io su localhost** ][1]
* [ **automatizza le operazioni aziendali utilizzando software gratuito e open source** ][17]
* [ **Top 5 costruttori di moduli online open source nell'anno 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
