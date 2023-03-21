---
title: "Cos'è l'amministratore? | Strumento di gestione del database open source" 
seoTitle: "Cos'è l'amministratore? | Strumento di gestione del database open source" 
description: "Cos'è l'amministratore? Un sistema di gestione del database basato sul Web con un'interfaccia per gli sviluppatori. Discutiamo di come gestire i database con un amministratore open source." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Amministratore è un sistema di gestione del database basato sul Web open source per gestire i database. Impariamo come impostare l'amministratore su localhost e rivedere le sue caratteristiche chiave." 
url: /it/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Administrar è un sistema di gestione del database basato sul Web open source per gestire i database. Impariamo come impostare l'amministratore su localhost e rivedere le sue caratteristiche chiave.
{{_LINE_11_}}

Panoramica ##
Le attività relative ai dati sono molto più critiche ora che mai. Lo strumento di gestione del database è diventato parte integrante di qualsiasi azienda. Tuttavia, esistono molti sistemi di gestione dei database basati sul Web che offrono soluzioni a tali compiti impegnativi. Le imprese stanno generando tonnellate di dati su base giornaliera e diventano difficili da mantenere. Inoltre, le organizzazioni tendono a semplificare l'accesso ai dati e il controllo dei dati. Questi strumenti gratuiti aiutano a ridurre la ridondanza dei dati, rendere efficienti e affidabili i database. Inoltre, abbiamo pubblicato post sul blog su argomenti come [Top Open Source DBMS Software Strumenti][1] e altri.
Pertanto, la comunità open source ha sviluppato amministratore che è uno strumento di gestione del database gratuito a livello aziendale. In questo tutorial amministratore, copriremo i seguenti punti.
  * [Cos'è l'amministratore?][2]
  * [Caratteristiche importanti di amministratore][3]
  * [Amministratore vs phpmyadmin][4]
  * [Gestisci database con amministratore][5]
  * [Conclusione][6]

## Cos'è l'amministratore?   {#Che cosa}
Quando si tratta di strumento di gestione del database MySQL leggero, intuitivo, ad alte prestazioni, l'amministratore ha guadagnato un'ampia popolarità e offre molti miglioramenti rispetto a PhpMyAdmin. Inizialmente, questo strumento di gestione del database è stato sviluppato da Jakub Vrana nel 2007 in alternativa a PhpMyAdmin, in modo che tutto ciò che devi fare sia scaricare e installare un singolo file PHP leggero sul database dell'applicazione.
Come strumento di gestione del database open source, è anche gratuito ed è scritto in PHP. Ciò che distingue questo sistema di gestione del database basato sul Web è un buon design dell'interfaccia utente per un'esperienza utente senza soluzione di continuità, nonché forti funzionalità di sicurezza per proteggere i dati da eventuali attacchi o tentativi di hacking dannosi. Questo strumento di gestione del database è facile da configurare e richiede requisiti semplici come Ubuntu e lampada. Gli utenti possono trovare una documentazione completa in merito allo sviluppo e alla distribuzione. Pertanto, è possibile trovare file di origine di questo sistema di gestione del database basato sul Web su [GitHub][7].

## Caratteristiche importanti di amministratore   {#important}
Alcune caratteristiche di base ma importanti di questo strumento di gestione del database includono:
  * Ha molte funzioni di database tra cui selezionare il database, le tabelle di modifica, i dati di inserimento/modifica nelle tabelle e la ricerca/ricerca di dati in più colonne
  * Supporta più database tra cui: database MySQL, PostgreSQL, SQLite, MS SQL, Oracle e SimpledB e altro ancora
  * È disponibile in 43 lingue tra cui inglese, arabo, persiano, polacco, olandese ecc.
  * È possibile modificare facilmente oggetti di database come viste, trigger, procedure memorizzate, autorizzazioni utente e altro ancora.
  * L'amministratore fornisce inoltre misure di sicurezza contro l'iniezione SQL, il furto di sessioni, gli attacchi software di script del sito incrociato (XSS) e anche altri attacchi.

## amministratore vs phpmyadmin   {#adminer}
Quindi, quando parliamo di ciò che è amministratore, sarebbe interessante conoscere il confronto tra amministratore vs phpmyadmin. Quando si tratta di scegliere tra amministratore e phpmyadmin, l'amministratore è in cima per le caratteristiche flessibili e il caricamento dei file di luce che fornisce. Allo stesso modo, rispetto a PhpMyAdmin, supporta più database tra cui MySQL, SQLite e molti altri. Allo stesso modo, è più intuitivo e più intelligente di PhpMyAdmin quando si tratta di aggiungere campi aggiuntivi che l'amministratore esegue automaticamente o manipolazione con tutti gli indici contemporaneamente.

## Gestisci database con amministratore   {#Manage}
Nella sezione di questo tutorial amministratore, passeremo come possiamo gestire i database con amministratore.
**Requisiti di sistema**
Affinché l'amministratore venga eseguito sul sistema, è importante avere i seguenti requisiti già impostati sul server:
  * PHP versione 5, 7 o 8
  * Un driver di database come mysql, sqlite, postgresql ecc.
**Installazione**
Se hai controllato questi due requisiti di sistema, quindi scarica semplicemente il file da [][8] e inizia caricando il file PHP sul tuo server. Per il server XAMPP, rinominare il file scaricato come "Administra.php" e inserisci questo file nella cartella HTDOCS.
**Accedi Interfaccia utente**
Dopo aver attraversato quello che cos'è l'amministratore? Ora accedi a questa app da HTTP: Your-Ip-Address/Administra.php come mostrato:
{{_LINE_42_}}
**Connettiti al server**
Accedi a questo strumento di gestione del database gratuito utilizzando il nome utente e la password del tuo server. Ora se si desidera accedere a un solo database, inserisci il suo nome. È possibile lasciare questo campo vuoto per accedere a tutti i database che esistono già sul server.
**Gestisci database**
Dopo l'accesso, vedrai un elenco dei tuoi database tutti gli attuali. Fare clic su qualsiasi database per gestirlo.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Gestire i database con lo strumento di gestione del database amministratore">}}

Nella schermata successiva, vedrai l'elenco di tutte le tabelle dei database selezionati. Da qui è possibile esportare il database o le sue tabelle, aggiungere o modificare la tabella/colonne, modificare i dati tramite query SQL e molto altro come mostrato qui:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Strumento di gestione del database">}}

**Crea nuovo database**
Per creare un nuovo database, fare clic su "Crea database", immettere il nome del database e fare clic su "Salva".

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Strumento di gestione del database">}}

**INSERT/AGGIORNAMENTO RECORD**
L'aggiunta di nuovi record a una tabella è piuttosto semplice. Fai clic sul nuovo collegamento elemento che ti reindirizzerà alla schermata Insert. Qui sarai in grado di aggiungere nuovi dati per tutte le colonne nella tabella, insieme al tipo di dati, quindi l'aggiunta di nuovi dati è un processo rapido.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Amministratore vs phpmyadmin">}}


## conclusioni   {#conclusion}
Questo ci porta alla fine di questo tutorial amministratore. Abbiamo esaminato alcuni argomenti importanti come quello che è amministratore, amministratore contro phpmyadmin e altri aspetti di questo sistema di gestione del database basato sul Web open source. Spero che questo post sul blog ti aiuti sicuramente se stai cercando di installare uno strumento di gestione del database open source. È intuitivo, intelligente e facile da usare l'interfaccia lo rende uno strumento di gestione del database molto popolare. Inoltre, supporta molti database tra cui MySQL, SQLite, MongoDB e molto altro, insieme a misure di sicurezza per proteggere e prevenire eventuali eventi di hacking dannosi. Tutto sommato, questo strumento di gestione del database non è solo open source ma anche gratuito.
Infine, [containerize.com][9] scrive continuamente post di blog su ulteriori prodotti e argomenti open source. Pertanto, rimani in contatto con la categoria [Strumenti di gestione del database][10] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][11], [LinkedIn][12] e [Twitter][13].

## Esplorare
Per ulteriori informazioni sugli strumenti di gestione del database basati sul Web gratuiti, controlla le seguenti pagine:
  * [Amministratore | Sistema di gestione del database basato su Web gratuito][14]
  * [Top Open Source DBMS Strumenti software][1]
  * [Top 5 strumenti di gestione del database open source nel 2021][15]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
