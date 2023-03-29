---
title: "Come installare e configurare WAMP Server su Windows" 
seoTitle: "Come installare e configurare WAMP Server su Windows" 
description: "Installa Wampserver su Windows e inizia rapidamente a sviluppare applicazioni Web basate su PHP. WAMP Server è disponibile sia per Windows 32 che per 64 bit." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Imposta un ambiente di sviluppo web per la creazione di applicazioni Web con APACHE2, PHP e MySQL. Questo articolo ti aiuta a installare WAMP Server su Windows." 
url: /it/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Imposta un ambiente di sviluppo web per la creazione di applicazioni Web con Apache2, PHP e MySQL. Questo articolo ti aiuta a installare WAMP Server su Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Server WAMP">}}

Ogni sviluppatore deve avere il software richiesto installato sul proprio computer prima di scrivere il programma. All'inizio, gli sviluppatori dovevano installare tutti i software separatamente e quindi configurarli per lavorare insieme.  **Wampserver**  e altri software Stack Web Solution sono ora disponibili, che raggruppa tutto il software necessario in un unico pacchetto. Devi solo installare un pacchetto per far funzionare il tuo ambiente di sviluppo.
In questo post sul blog, tratteremo le seguenti sezioni.
* [  **Cos'è Wampserver?**  ][1]
* [  **Installazione WAMP**  ][2]
* [  **Configurazione WAMP**  ][3]
* [  **Accedi PhpMyAdmin**  ][4]

## Cos'è Wampserver? {#What}

Wampserver è uno stack di soluzione gratuito per la configurazione dell'ambiente di sviluppo web per le applicazioni basate su PHP. WAMP sta per (W - Windows, A - Apache, M - Mysql e P - PHP). Inoltre, viene fornito anche con PhpMyAdmin e amministratore per la gestione del database. WAMP è uno degli strumenti popolari e puoi configurarlo rapidamente. Inoltre, è possibile configurare il server WAMP dal pannello di controllo. Fornisce un ambiente di sviluppo web completo per la creazione e il test delle applicazioni. Wampserver è costituito da diversi componenti che puoi selezionare durante l'installazione in base alle tue esigenze. Wampserver viene fornito con più versioni di PHP. Puoi facilmente modificare la versione PHP secondo i requisiti del tuo progetto. Inoltre, è possibile modificare DBMS (sistema di gestione del database) dal pannello di controllo Wampserver.

## Installazione WAMP {#Installation}

Seguire la guida passo-passo seguente per installare WAMP Server su Windows.
*  **Scarica Wampserver**  dal sito ufficiale

{{< figure align=center src="images/wamp-download.png" alt="">}}

* Scegli un  **Wampserver 32 bit** o **Wampserver 64 bit**  Versione dell'installatore secondo il sistema operativo.
* Individuare  **Download WAMP**  File e fare doppio clic su di esso per eseguire il processo di installazione.
  * Seleziona la lingua e quindi premere il pulsante OK.
  * Scegli la casella di controllo Accetto Accetto e quindi fai clic sul pulsante Avanti.
  * Leggi le informazioni importanti sull'installazione di Wampserver e fai clic sul pulsante Avanti per procedere.
  * Seleziona una cartella in cui si desidera installare il server WAMP e fare clic sul pulsante Avanti.
  * Devi selezionare i componenti che si desidera installare come mostrato nello screenshot seguente. È possibile selezionare tutte le versioni PHP e cambiare durante lo sviluppo. Inoltre, puoi installare sia MySQL che MariaDB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Selezionare il collegamento per Wampserver e fare clic sul pulsante Avanti.
  * Fare clic sul pulsante Installa per installare Wampserver.
  * Ora, selezionare il browser predefinito e l'editor di testo predefinito per il server WAMP.
  * La tua installazione è completa. Fare clic sul pulsante Fine per uscire dalla procedura guidata di installazione del server WAMP.
  * Apri il browser e digita LocalHost per accedervi. Vedrai di seguito la pagina.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Configurazione WAMP {#Configuration}

Ora esamineremo alcune configurazioni che ti aiuteranno durante lo sviluppo e il test delle applicazioni Web. Ora puoi avviare Wampserver facendo doppio clic sull'icona Wampserver di scelta rapida sul desktop.
*  **Servizi**  -Puoi vedere le opzioni per iniziare, fermare e riavviare tutti i servizi facendo clic con il pulsante sinistro del mouse sull'icona Wampserver.
*  **Modifica database**  -Fare clic con il tasto destro sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona gli strumenti e fai clic su "Inverti DBMS predefinito MariaDB MySQL". WAMP Server si riavvierà automaticamente e puoi vedere il database predefinito aprendo LocalHost nel browser.
*  **Cambia la versione PHP**  -Fare clic con il tasto destro sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona Strumenti e modifica la versione CLI PHP e fai clic sulla versione PHP desiderata.
*  **Host virtuale**  : è possibile aggiungere facilmente un host virtuale tramite l'interfaccia Web di Wampserver. Apri LocalHost nel browser e fai clic su "Aggiungi un host virtuale" nella sezione Strumenti. Immettere "Nome dell'host virtuale come dev.example.com" e inserisci il percorso assoluto del progetto. Fai clic sul pulsante "Avvia la creazione di VirtualHost". Riavvia il server Apache per caricare l'host virtuale appena creato.
*  **Modifica la porta Apache**  - Per impostazione predefinita, il server Web Apache funziona sulla porta 80. Se si desidera utilizzare una porta diversa per Apache, è possibile farlo dal pannello di controllo Wampserver. Fare clic con il pulsante destro del mouse sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona gli strumenti e fai clic su "Usa una porta diversa da 80". Immettere un nuovo numero di porta nella finestra di dialogo e fare clic sul pulsante OK.
*  **Modifica porta DBMS**  - Per impostazione predefinita, il server di database viene eseguito sulla porta 3306. Se si desidera utilizzare una porta diversa per il server di database, è possibile farlo dal pannello di controllo Wampserver. Fare clic con il pulsante destro del mouse sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona gli strumenti e fai clic su "Usa una porta diversa da 3306". Immettere il nuovo numero di porta nella finestra di dialogo e fare clic sul pulsante OK.
*  **Registrazione vuota**  - Wamserver fornisce funzionalità per cancellare i registri dal pannello di controllo. È possibile svuotare registri come log di errore PHP, log di errore Apache, registro Apache Access, registro MySQL e registro MARIADB. Anche puoi cancellare tutti i registri contemporaneamente. Fare clic con il pulsante destro del mouse sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona strumenti e seleziona i registri vuoti, troverai tutte le opzioni per la rimozione dei registri.
*  **Cambia lingua**  - Puoi la lingua per il pannello di controllo Wampserver. Fare clic con il pulsante destro del mouse sull'icona WAMP per aprire la finestra di dialogo Strumenti. Seleziona la lingua e fai clic sulla lingua richiesta. Vedrai il pannello di controllo nella lingua appena selezionata.

## Accedi PhpMyAdmin {#phpMyAdmin}

Puoi accedere a  **PhpMyAdmin**  per la gestione dei database aprendo LocalHost nel browser e quindi fare clic sul collegamento PhpMyAdmin sulla pagina di benvenuto di Wampserver. Inoltre, puoi accedervi visitando http: // URL localhost/phpmyadmin.

## Conclusione
Abbiamo discusso di Wampserver e coperto la guida completa passo-passo per  **Installare Wampserver** su Windows. È possibile installare e configurare facilmente **Wampserver**  seguendo questo tutorial e iniziare subito la codifica. È possibile visitare i link nella sezione Explora per ulteriori opzioni sul software Stack Solution.
Infine, [  **Containerize.com** ][5] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, rimani in contatto con questa categoria [ **Web Server Solution Stack**  ][6] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
* [  **Le migliori opzioni di stack della soluzione del server Web open source**  ][7]
* [  **Imposta XAMPP e PhpMyAdmin come LocalHost su Windows**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
