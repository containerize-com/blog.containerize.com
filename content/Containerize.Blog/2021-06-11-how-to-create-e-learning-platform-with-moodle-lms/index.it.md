---
title: "Come creare un sito Web di e-learning con Moodle LMS" 
seoTitle: "Come creare un sito Web di e-learning con Moodle LMS" 
description: "Moodle LMS è una soluzione di e-learning gratuita e open source per la creazione di una piattaforma di apprendimento online. Dai un'occhiata alla guida per familiarizzare con essa." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Costruisci una piattaforma di apprendimento online con piattaforma di e-learning open source. Questo articolo spiega come utilizzare Moodle LMS per creare un sito di apprendimento a distanza." 
url: /it/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Costruisci una piattaforma di apprendimento online con piattaforma di e-learning open source. Questo articolo spiega come utilizzare Moodle LMS per creare un sito di apprendimento a distanza.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Siamo stati affetti da Covid 19 da oltre un anno. Ogni parte del mondo è stata messa sotto blocco. Ha un impatto negativo sulla vita e le imprese delle persone in tutto il mondo. Ancora più importante, ha un impatto notevole sul nostro sistema educativo. Le istituzioni educative devono effettuare il passaggio all'apprendimento online in modo che gli studenti possano continuare la propria istruzione dal comfort delle proprie case. Senza una piattaforma di e-learning solida e sicura, l'apprendimento online è impossibile. In questo articolo, esamineremo il progetto  **Moodle Open Source** , che consente agli insegnanti e agli studenti di comunicare e imparare da qualsiasi luogo.
Tratteremo le seguenti sezioni in questo articolo per  **Creare il sito Web di e-learning**  usando Moodle.
  * [Prerequisiti][1]
  * [Cos'è Moodle?][2]
  * [Caratteristiche di Moodle][3]
  * [Installazione di Moodle][4]
  * [Conclusione][5]

## Prerequisites   {#Prerequisites}
Se non l'hai già fatto, è necessario installare e configurare l'ambiente della lampada sul tuo server.

## Cos'è Moodle?   {#Che cosa}
[**Moodle **][6] è una soluzione di e-learning libera e open source. Moodle sta per un ambiente di apprendimento dinamico orientato agli oggetti modulare. È stato creato per offrire a educatori, amministratori e studenti una piattaforma di e-learning per creare e fornire ambienti di apprendimento personalizzati. Inoltre, Moodle è un  **LMS adatto per le scuole ** , università e corsi di formazione professionale nelle aziende. È una delle soluzioni popolari di apprendimento a distanza  **per creare un sito Web LMS. Inoltre, Moodle offre agli insegnanti e agli studenti strumenti ricchi e ambienti di apprendimento collaborativo. Moodle ha un'app mobile per iPhone, Android e telefoni e tablet Windows. L'app mobile può essere utilizzata da qualsiasi posizione in tutto il mondo. Questo **  LMS-hosted LMS  **è scritto in PHP e memorizza i dati nei database MySQL/PostgreSQL. Viene fornito con una vasta documentazione per utenti e sviluppatori. Tutto il codice sorgente è disponibile su [**  github **][7]. La licenza per questa soluzione open source ** e-learning**  è GPLV3+.

## Caratteristiche di Moodle   {#Features}
Moodle ha molte funzionalità. Tuttavia, in questo articolo, esamineremo alcune delle seguenti caratteristiche chiave.
**Strumenti e attività collaborativi**: forum, wiki, glossari, attività di database e altri strumenti consentono agli utenti di collaborare e apprendere insieme. Un gruppo di elementi in un corso di Moodle viene definito un'attività. Un'attività è in genere qualcosa che uno studente fa in cui interagisce con altri studenti e/o l'insegnante.
**Traccia progressi**: gli educatori e gli studenti possono tenere traccia dei loro progressi e completamento utilizzando una varietà di strumenti per monitorare attività o materiali specifici, nonché a livello di corso. Esistono diversi modi per tracciare i progressi degli studenti in Moodle come voti, competenze, completamento delle attività, completamento del corso, badge, report dei corsi e analisi.
**Gestione plugin**: i plugin consentono di estendere la funzionalità fondamentale di Moodle aggiungendo nuove funzionalità. Gli utenti possono aggiungere plugin per una varietà di attività come attività aggiuntive, nuovi tipi di domande a quiz, nuovi report, connettori di sistema e molti altri. Un'interfaccia di amministrazione può essere utilizzata per installare e disabilitare i plugin.
**Gestione dei corsi**: creare e gestire corsi che soddisfano una varietà di esigenze. Le lezioni guidate dall'istruttore, lezioni di auto-tocco, lezioni miscelate e lezioni completamente online sono tutte opzioni.
**Peer e autovalutazione**: Workshop e sondaggi sono attività integrate che incoraggiano gli studenti a visualizzare, valutare e rivedere il lavoro dei propri e di altri compagni di classe come gruppo.

## moodle installation   {#Moodle}
Seguire la guida passo-passo seguente per installare Moodle LMS su Ubuntu 18.04.
  * Innanzitutto, esegui i comandi di seguito per modificare Directlory Scarica e scarica Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Esegui i seguenti comandi Crea la directory di dati e imposta le autorizzazioni.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Crea file di configurazione Nginx per il sito Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Aggiungi il codice sotto e salva il file.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Crea symlink per abilitare il sito appena creato.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Riavvia il server Web Nginx.
```
sudo systemctl restart nginx
```
  * Successivamente, apri il browser e digita http://example.com. Sostituisci "Esempio.com" con il nome di dominio o IP effettivo del server.
  * Ora, puoi vedere la procedura guidata di installazione. Seleziona una lingua e fai clic sul pulsante Avanti.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Scegli una lingua">}}

  * Devi rivedere e assicurarsi che l'URL del sito, la directory di radice Moodle e i percorsi della directory dei dati siano corretti. È inoltre possibile modificare il percorso della "directory dei dati" e dovrebbe essere al di fuori della directory del codice Moodle per la sicurezza. Fai clic sul pulsante Avanti.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Imposta percorso della directory dati">}}

  * Scegli un driver di database in questo passaggio. Tuttavia, è possibile utilizzare quello già selezionato e fare clic sul pulsante successivo.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle: scegli il driver del database">}}

  * Fornire impostazioni di database come host di database, nome del database, utente del database, password del database e prefisso della tabella. Fai clic sul pulsante Avanti.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Impostazioni del database">}}

  * Fare clic sul pulsante Conferma per accettare con termini e condizioni.
  * Puoi vedere un elenco di estensioni PHP richieste. Tuttavia, dovrai installare eventuali componenti aggiuntivi mancanti. Fare clic sul pulsante Continua per spostare il passaggio successivo.
  * A questo punto, è necessario compilare i dati dell'amministratore per creare un account. Fai clic sul pulsante "Aggiorna profilo".
  * Fornire informazioni per il tuo sito come nome completo, nome corto per il sito, riepilogo FrontPage, fuso orario predefinito e e-mail senza riferimento. Fai clic sul pulsante "Salva modifiche".
  * Completa la registrazione del sito fornendo informazioni come nome del sito, lingua, regione, indirizzo e -mail, ecc.

## conclusioni   {#conclusion}
Abbiamo imparato a conoscere Moodle e le sue caratteristiche principali in questo articolo. Abbiamo anche esaminato un approccio passo-passo per la creazione di **Moodle LMS  **per **  Creare il sito Web di e-learning **. Puoi rivedere la [**  documentazione ufficiale**][8] di Moodle per sentirsi più a tuo agio con varie funzioni come corsi, registrazione degli studenti, monitoraggio dei progressi e così via. Spero che tu abbia trovato questo post utile nella creazione di un sito Web LMS.
Infine, [**Containerize.com **][9] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, rimani in contatto con questa categoria [**  Apprending Management System**][10] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  *[ **Strumenti LMS open source** ][11]
  *[ **Moodle-E-Learning System** ][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
