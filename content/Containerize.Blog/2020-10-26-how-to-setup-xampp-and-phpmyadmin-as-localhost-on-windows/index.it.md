---
title: "Imposta XAMPP e PhpMyAdmin come localhost su Windows" 
seoTitle: "Imposta XAMPP e PhpMyAdmin come localhost su Windows" 
description: "Imposta XAMPP e PhpMyAdmin come localhost su Windows. Crea il tuo ambiente di test locale gratuito e open source per testare e creare app Web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Imposta un ambiente di sviluppo con Solution Solution Solution (XAMPP) e software di gestione del database (PHPMyAdmin)" 
url: /it/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Imposta un ambiente di sviluppo con soluzione di soluzione Web Server gratuita e open source (XAMPP) e software di gestione del database (PHPMyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP e PhpMyAdmin come localhost">}}

XAMPP e PhpMyAdmin come LocalHost fornisce agli sviluppatori un server locale per testare e creare app Web. XAMPP è un server locale installato su personal computer/laptop. Fornisce un ambiente locale per creare, eseguire e testare le applicazioni PHP prima di distribuirle sui server in diretta.
Tratteremo le seguenti sezioni in questo post sul blog:
  * [Descrizione][1]
  * [Installazione XAMPP][2]
  * [PhpMyAdmin Dashboard][3]
  * [Pensieri finali][4]

## Descrizione: {#description}

XAMPP è uno stack di soluzione server Web open source. Contiene Apache, Mysql, MariaDB, PHP e Perl. XAMPP è disponibile per i sistemi operativi Windows. È estremamente facile da installare e utilizzare. Ecco perché è l'ambiente di sviluppo PHP più popolare. XAMPP e PhpMyAdmin come LocalHost forniscono un ambiente completo per lo sviluppo e i test delle app Web.
Gli alfabeti in XAMPP sta per:
* **x** -piattaforma cross (supporta più sistemi operativi tra cui Linux, Windows e Mac OS)
* **A** - Apache HTTP Server
* **M** - MariaDB (database)
* **p** - php
* **P** - Perl

## Installazione XAMPP {#xampp}

  * Scarica XAMPP da [qui][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP come localhost">}}

  * Installa il file eseguibile.
  * Quindi fai clic su "Avanti".
  * Scegli i componenti che desideri installare.

{{< figure align=center src="images/xampp2.png" alt="XAMPP come LocalHost Step 2">}}

  * Per la maggior parte delle app Web hai solo bisogno di _apache_, _mysql_, _PHP_ e _PHPMyAdmin_.
  * Selezionare la directory di installazione in cui si desidera installare XAMPP.
  * Ti verrà mostrato un avviso di sicurezza di Windows. È necessario verificare la seguente opzione: "_Private Networks, come la mia casa o la rete di lavoro" _.
  * Finalmente fare clic su "Finitura" per completare l'installazione.

{{< figure align=center src="images/xampp4.png" alt="XAMPP come LocalHost Step 3">}}

  * Dopo un'installazione riuscita, apri il pannello di controllo XAMPP.
  * Avvia i servizi "apache" e "mysql".

{{< figure align=center src="images/xampp5.png" alt="XAMPP come LocalHost Step 4">}}


## PhpMyAdmin Dashboard: {#phpmyadmin}

Per accedere a PhpMyAdmin Dashboard, fai clic sul pulsante "Admin" accanto al servizio MySQL. Puoi anche accedere a PhpMyAdmin visitando http: // localhost/phpmyadmin dal tuo browser. Qui puoi creare database. Seguire questi passaggi per creare un nuovo database.
  * Dalla dashboard, fare clic sulla scheda "Database".

{{< figure align=center src="images/db1.png" alt="phpmyadmin al passaggio di localhost 1">}}

  * Immettere il nome del database e fare clic sul pulsante "Crea". Questo creerà semplicemente un nuovo database vuoto.

{{< figure align=center src="images/db2.png" alt="phpmyadmin al passaggio Localhost 2">}}

  * Successivamente è possibile creare tabelle selezionando il database appena creato.
  * Immettere il nome della tabella in "Crea tabella".

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin al passaggio locale 3">}}

  * Selezionare il numero di colonne.
  * Quindi fare clic sul pulsante "GO".
  * Dopodiché è necessario compilare il modulo nella pagina successiva per terminare la creazione di tabella.

{{< figure align=center src="images/db4-1024x564.png" alt="Phpmyadmin al passaggio di località 4">}}


## Pensieri finali: {#final}

L'installazione di XAMPP è semplice e semplice. Non ci vogliono più di 15 minuti al server XAMPP di configurazione. Una volta installato, gli sviluppatori possono creare e testare le loro app Web basate su PHP anche senza una connessione Internet. Invece di testare i progetti direttamente su un server Web live, è semplice e risparmiando il tempo testarli a livello locale. È un'ottima piattaforma per i principianti da imparare, testare e lucidare le loro capacità PHP, Perl e del database.

## Esplorare:
[Stack di soluzione del server Web open source per sviluppatori PHP e Perl][6]
[Migliori opzioni di stack di soluzione del server Web open source][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
