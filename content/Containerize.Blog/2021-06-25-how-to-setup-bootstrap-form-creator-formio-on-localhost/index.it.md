---
title: "Come configurare il creatore di bootstrap form.io su localhost" 
seoTitle: "Come configurare il creatore di bootstrap form.io su localhost" 
description: "Passa attraverso questo articolo e impara a configurare Formio su LocalHost. Questo creatore di moduli Bootstrap è gratuito, estensibile e offre integrazioni di terze parti." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Costruisci moduli specifici per attività e personalizzabili utilizzando un costruttore di moduli HTML di trascinamento. Formio è ospitato da soli, guidato dall'API, fornisce forme e gestione dei dati." 
url: /it/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Crea moduli specifici per attività e personalizzabili utilizzando un costruttore di moduli HTML di trascinamento. Formio è ospitato da soli, guidato dall'API, fornisce forme e gestione dei dati.

{{< figure align=center src="images/formio-1.png" alt="Creatore di moduli Bootstrap">}}


Panoramica ## **** 
Nelle esigenze aziendali in rapida crescita, ci sono molte operazioni che appartengono direttamente al settore pubblico e al coinvolgimento. Questo impegno potrebbe essere fisico o virtuale. A volte si tratta di fornire servizi e talvolta si tratta di raccogliere dati o feedback. D'altra parte, le organizzazioni aziendali tendono a raccogliere i dati dei clienti sui loro prodotti e servizi. Pertanto, la quantità di dati dipende dalla portata del pubblico pertinente. Successivamente, la gestione dei dati è un altro compito critico e richiede un'enorme attenzione.
Tuttavia, i settori aziendali utilizzano i moduli online per soddisfare le esigenze relative alla raccolta dei dati. Esistono molti siti Web che possono contenere molti moduli come il modulo di contatto, il modulo di reclamo, il modulo di feedback dei clienti, il modulo di ammissione e altro ancora. Ora diventa una seccatura costruire, gestire questi moduli e i dati di invio. Here Comes [Form.io][1]. Form.io è un creatore di moduli bootstrap open source che fornisce funzionalità di costruzione e gestione dei dati. Nel recente passato, abbiamo pubblicato un articolo che ha coperto i [migliori costruttori di moduli online open source nell'anno 2020][2]. In questo post sul blog, esploreremo questo creatore di moduli Bootstrap insieme al suo processo di configurazione su LocalHost coprendo i seguenti punti.
  * **[What is form.io?
  * **[come impostare form.io su localhost?][4]**
  * **[come funziona form.io?][5]**
  * **[Conclusione][6]**

## Cos'è forma.io?   {#Che cosa}
Form.io è un costruttore di moduli open source gratuito. È software autoprodotto, multilingue e multi-tenant. Questo  **HTML Form Creator **  offre autorizzazioni basate su ruolo per utenti e moduli. Form.io fornisce l'autenticazione OAuth e consente agli utenti di accedere utilizzando provider di identità popolari come Google e Facebook. Inoltre, questo costruttore di moduli HTML si basa sull'architettura senza server e gli utenti possono generare e incorporare i moduli nelle altre applicazioni semplicemente posizionando una singola riga di codice. Per quanto riguarda l'interfaccia utente, offre un'interfaccia utente logica con le funzionalità di trascinamento. Esistono vari elementi HTML da un lato che gli utenti possono trascinare e rilasciare per creare il modulo necessario. Gli utenti possono iniettare JavaScript personalizzati per funzionalità migliorate. Inoltre, gli utenti possono modificare l'aspetto del modulo usando CSS. Esistono disposizioni per controllare l'invio e l'accesso dei moduli. Tuttavia, questo produttore di moduli HTML gratuito è scritto in JavaScript e tutto il codice sorgente è disponibile su [GitHub][7].
Form.io fornisce funzionalità ad ampio raggio. Le caratteristiche chiave sono elencate di seguito.
  * Presentazione del modulo e -mail
  * Gestione dati
  * Fornitori di oauth
  * Forme incorporabili
  * Layout Friendly

## come impostare form.io su localhost?   {#localhost}
In questa sezione del  **Tutorial del costruttore di moduli ** , vedremo come impostare form.io su localhost. È facile da configurare in quanto fornisce una documentazione completa in merito alla distribuzione e allo sviluppo.
Prima di andare oltre, assicurati di aver installato i seguenti pre-requisiti.
  * Idiota
  * Nodejs
  * MongoDB
Una volta installati i pre-requisiti sopra, aprire il terminale eseguire i seguenti comandi:
```
mkdir formio<br>cd formio
```
Ora, esegui il comando seguente per clonare il codice sorgente di questa applicazione:
```
git clone https://github.com/formio/formio.git
```
Su un clone di successo, eseguire i seguenti comandi per installare le dipendenze:
```
cd formio <br>npm install
```
Successivamente, esegui l'applicazione con il seguente comando:
```
npm start 
```
Questo comando mostrerà il seguente output con alcuni istruzioni utente:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Form Builder Tutorial">}}

È possibile accedere all'applicazione nel browser al seguente indirizzo.
```
http://localhost:3001 
```
Aprirà la pagina di accesso. È possibile accedere con le credenziali che hai inserito durante il processo di installazione.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Creatore di moduli Bootstrap">}}


## come funziona form.io?   {#lavoro}
Questo segmento descrive il meccanismo di lavoro di [Form.io][1]. L'intero ecosistema di questo designer di forme si basa su componenti e amichevoli per gli sviluppatori. È estensibile e fornisce un'interfaccia riposante per le app di terze parti. Quindi, vediamo come creare forme in questo  **costruttore di moduli ** .
Dopo l'accesso, atterrerai nella pagina seguente.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Drag and drop HTML Form Builder">}}

Ora, fai clic sul pulsante "Nuovo modulo" e crea il primo modulo. Verrà visualizzata la pagina seguente. Puoi vedere che c'è un pannello sul lato sinistro che contiene l'elemento HTML per i moduli. Contiene le quattro sezioni come "componenti di base", "componenti speciali" e altro ancora.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="Creatore di forma HTML">}}

È possibile impostare il nome del modulo insieme ad altri attributi. Ora, se scegli un elemento di forma dal lato sinistro e lo lasci cadere al centro, vedrai la seguente finestra di dialogo.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Creatore di moduli Bootstrap">}}

Puoi vedere che ti consente di modificare il tema del modulo, la convalida e altre modifiche. Una volta costruito il tuo modulo, premi il pulsante "Crea" e atterrerai nella forma generata.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Drag and drop HTML Form Builder">}}

Il modulo generato viene fornito con varie opzioni in cui è possibile modificare il modulo e visualizzare i dati inviati. Nella scheda "Azioni del modulo" è possibile impostare i ganci di invio pre o post modulo come e -mail, webhook e altro ancora. Soprattutto, ogni modulo generato viene fornito con un'API e gli utenti possono accedervi passando l'ID del modulo.

## conclusioni   {#conclusion}
Questa è la fine di questo tutorial del costruttore di forme. Spero che tu abbia imparato a conoscere questo creatore di moduli bootstrap in merito alle sue caratteristiche, distribuzione e utilizzo. Inoltre, ci sono molti costruttori di forme open source che forniscono una vasta gamma di funzionalità. Tuttavia, è molto importante scegliere il miglior prodotto che soddisfi le tue esigenze aziendali. Pertanto, in questo post sul blog, abbiamo osservato che Form.io fornisce personalizzazioni riguardanti funzionalità, layout e stile. Ti consente di generare moduli multiuso che puoi ospitare sui tuoi siti Web dal vivo. In effetti, puoi raccogliere dati in modo ben organizzato nel proprio database o in qualsiasi altra opzione di archiviazione.
Infine, [ **containerize.com ** ][8] è in un processo coerente di scrittura su ulteriori argomenti e prodotti open source. Pertanto, rimani in contatto con questa categoria [Modulo][9] per aggiornamenti regolari.

## Esplorare
  * **[Form.io][1]**
  * **[Orbeon][10]**
  * **[ohmyform][11]**
  * **[Webiny][12]**
  * **[FormTools][13]**
  * **[FormBuilder][14]**
  * **[Alpaca Forms][15]**
  *[ **automatizza le operazioni aziendali utilizzando software gratuito e open source ** ][16]
  *[ **Top 5 costruttori di moduli online open source nell'anno 2020 ** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
