---
title: "Come installare e configurare proprie con Apache su Ubuntu" 
seoTitle: "Come installare e configurare proprie con Apache su Ubuntu" 
description: "OwnCloud è un software client-server open source per la creazione di servizi di hosting di file. In questo tutorial, impareremo come installare e configurare OwnCloud su Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud è una raccolta open source di software client-server per la creazione di server di hosting di file. Questo tutorial riguarda come configurare OwnCloud su Ubuntu." 
url: /it/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud è una raccolta open source di software client-server per la creazione di server di hosting di file. Questo tutorial riguarda come configurare OwnCloud su Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


Panoramica ##  **** 
OwnCloud è un'applicazione Web Enterprise open source gratuita e popolare scritta in PHP utilizzata per la sincronizzazione dei dati e la condivisione di file. Inoltre, consente di gestire facilmente file di dati, contatti, calendari, per fare elenchi e molti altri. È un'ottima alternativa alle piattaforme cloud più popolari come Google Drive, Dropbox, iCloud e altri servizi di archiviazione cloud là fuori. Ma a differenza degli altri servizi di archiviazione cloud, OwnCloud Self Hosted è gratuito per creare il proprio cloud host.
OwnCloud è un software cloud privato open source che fornisce l'accesso ai dati utilizzando l'interfaccia Web per creare un cloud privato. Ti consente di creare il tuo server di condivisione di file in cui puoi facilmente visualizzare e sincronizzare eventi di calendario, archivi, immagini, registrazioni, attività, libri di indirizzi con segnalibri, simili a Dropbox e Google Drive. Fornisce inoltre opzioni per sincronizzare e condividere i dati su tutti i dispositivi sotto il controllo. Installa e configura OwnCloud supporta i dati sincronizzati per i client desktop e per i dispositivi di app mobile. Inoltre, è possibile implementare facilmente le restrizioni di accesso agli utenti e al gruppo sui file per utente utilizzando OwnCloud su Ubuntu. OPENCLOUD Open Source Personal Storage Server è un'applicazione incrociata e può essere installato su tutti i sistemi operativi popolari.
Questo tutorial ti aiuterà a configurare OwnCloud e configurare OwnCloud sui sistemi Ubuntu LTS.
  * Installa la lampada server
  * Scarica OwnCloud
  * Crea database MySQL e utente
  * Installa OwnCloud
  * Quali sono le migliori alternative a Owncloud?
  * Conclusione

## PASSAGGIO 1: installa il server lampada
Per configurare il proprio server cloud e come creare un cloud privato, dobbiamo prima impostare un server di lampade in esecuzione. Se hai già installato e funzionante lo stack della lampada, salta questo passaggio altro, utilizzare i comandi di following per impostare la lampada sul tuo sistema Ubuntu.

### Installa PHP
È possibile installare la versione PHP 5.6 o superiore sul tuo sistema Ubuntu o Debian eseguendo comandi:
sudo apt-get installa python-software-prroperties
Sudo ADD-APP-Repository PPA: Ondrej/PHP
Sudo Apt-get Aggiornamento
SUDO APT -EGT Aggiornamento -y
SUDO APT-OGT Installa -y PHP PHP-GD PHP-CURL PHP-ZIP PHP-DOM PHP-XML PHP-SIMPLEXML PHP-MBString
{{_LINE_31_}}

### Installa Apache2
Apache è il software Web Server open source più utilizzato. Quindi, installa il server Web Apache su Ubuntu per la configurazione del tuo server cloud eseguendo:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Installa mysql
Il sistema di gestione del database relazionale open source MySQL è un componente dello stack del software per applicazioni Web LAMP e altri. Ora installa MySQL su Ubuntu in esecuzione di seguito:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Passaggio 2: Scarica OwnCloud su Ubuntu
Dopo aver configurato correttamente Lamp Server sul tuo sistema Ubuntu, scarichiamo l'ultima soluzione di archiviazione cloud privata proprietaria dal suo [sito Web ufficiale][1].
CD /TMP
Wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Dopo il download di OwnCloud Server, il software è stato completato, ora estrarre l'archivio scaricato con il root del documento del sito Web e configurare le autorizzazioni appropriate su file e directory eseguendo l'installazione di Ownecloud su Ubuntu.
CD/VAR/WWW/HTML
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data proprietario
sudo chmod -r 755 proprietario
{{_LINE_50_}}
Ora rimuovi il file di archivio e riavvia Apache Server.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
Sudo SystemCtl Riavvia Apache2

## Passaggio 3: crea il database e l'utente di OwnCloud
Dopo aver estratto il codice, ora creiamo un database MySQL e un account utente per la configurazione di OwnCloud Personal Cloud Storage Server. Utilizzare i seguenti set di comandi per accedere a MySQL Server per creare il database e l'utente di OwnCloud.
mysql -u root -p
Inserire la password:
mysql> crea il database proprietario;
mysql> concedi tutto su proprietario.* a 'proprietario'@'localhost' identificato da '_password_';
Mysql> Privilegi a filo;
mysql> smettila
{{_LINE_62_}}
Successivamente, dobbiamo installare OwnCloud su Ubuntu dall'interfaccia Web per creare un cloud privato.

## Passaggio 4: Installa OwnCloud su Ubuntu
Ora accedi alla migliore directory del pannello Web del server cloud personale su un browser Web. Cambia LocalHost nell'indirizzo IP del server o nel nome di dominio.
http: // localhost/proprietario/
{{_LINE_67_}}
Dovresti vedere la pagina di accesso open source OwnCloud. Immettere nuove credenziali di nome utente e password di amministrazione per creare un account amministratore e fornire la posizione della cartella dati. Se tutto va bene, quindi dovresti ottenere la pagina Web in questo modo.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Installa OwnCloud con Apache su Ubuntu">}}

{{_LINE_71_}}
Ora fai scorrere la tua pagina verso il basso. Nel modulo seguente è necessario inserire nome utente e password per gestire il miglior pannello Cloud Server Personal Cloud Cloud. Fornire anche il database insieme a nome utente e password per connettere il server OwnCloud con il server di database, la posizione della cartella dati e fare clic su **FINIL IMPOSTAZIONE** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Configura OwnCloud su Ubuntu">}}

{{_LINE_75_}}
Dopo aver completato l'installazione, riceverai la dashboard di amministrazione. Dove è possibile creare utenti, gruppi e assegnare loro autorizzazioni, ecc.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Installa la propria dashboard">}}

{{_LINE_79_}}
Sì! Abbiamo finito con la guida di installazione di OwnCloud per creare archiviazione cloud personale. Ora sai come installare completamente OwnCloud su Ubuntu per la costruzione di un cloud privato passo per passo simile a Dropbox o Google Drive.

## **Quali sono le migliori alternative a proprietario?**    {#4a1a}
Di seguito sono riportate le alternative di OwnedCloud e il software di hosting di file di concorrenti.
  ***Seafile**  è un sistema software di hosting multipiattaforma open source
  ***NextCloud**  è gratuita e open source Cloud Storage Platform
  ***Resilio Sync**  è l'applicazione di sincronizzazione del file peer a peer open source
  ***celle Pydio**  è un software di condivisione di file e sincronizzazione open source
  ***Sincronizzazione**  È gratuito e open source Applicazione di sincronizzazione dei file peer-to-peer

## **CONCLUSIONE:**    {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}
Congratulazioni! Hai installato e configurato correttamente OwnCloud per creare il tuo cloud privato con Apache su Ubuntu Machine. Ora i tuoi dati non sono mai nelle mani di terze parti e possono essere gestiti privatamente in Cloud privato virtuale OwnCloud Ubuntu Server Storage. Molte aziende scelgono di creare i propri server Cloud con molte informazioni vitali a causa di molti problemi con la privacy dei dati. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti degli stack di soluzione del server Web.
_ Il tuo può unirsi a noi su [Twitter][2], [LinkedIn][3] e la nostra pagina [Facebook][4]. Quale soluzione di archiviazione basata su cloud usi online?. In caso di domande, per favore_ [mettiti in contatto][5].

## Esplorare:
Abbiamo anche molti altri articoli relativi alla gestione quotidiana del tuo server.
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][6]
  * [Come installare e fissare PhpMyAdmin con nginx su Ubuntu][7]
  * [Sicuro e crittografico nginx con let's crittograpt su ubuntu 20.04][8]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][9]
  * [Imposta nginx con il passeggero sul server di produzione AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
