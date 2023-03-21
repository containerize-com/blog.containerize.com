---
title: "Come installare la piattaforma di condivisione e sincronizzazione di file Pydio su Ubuntu" 
seoTitle: "Come installare la piattaforma di condivisione e sincronizzazione di file Pydio su Ubuntu" 
description: "Pydio è una condivisione di file open source e un software di condivisione di documenti collaborativi autonomi. Esaminiamo come installare lo strumento di condivisione e sincronizzazione dei file PYDIO." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio è una piattaforma di condivisione e sincronizzazione di file basata su cloud per accedere a tutti i dati ovunque e su qualsiasi dispositivo. Questo tutorial riguarda come installare Pydio su Ubuntu." 
url: /it/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## PYDIO è una piattaforma di condivisione e sincronizzazione basata su cloud per accedere a tutti i dati ovunque e su qualsiasi dispositivo. Questo tutorial riguarda come installare Pydio su Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Come installare la piattaforma di condivisione e sincronizzazione di file Pydio su Ubuntu">}}


Panoramica ## ****
PYDIO CELLE è un software di condivisione di file e sincronizzazione open source. Fornisce un unico punto di accesso a tutta l'archiviazione dei dati ed è un'alternativa a OwnCloud e NextCloud che forniscono servizi di archiviazione, condivisione di file e sincronizzazione. Pydio è una piattaforma di condivisione di file open source aziendale simile a Dropbox e altre piattaforme di archiviazione. Ti aiuta a collegare in modo sicuro tutti i tuoi file e dispositivi in ​​una piattaforma.
PYDIO Celle è una piattaforma di sincronizzazione e collaborazione di file basata su cloud. Questo software open source funziona sulla tua infrastruttura IT personale e aiuta il personale a proteggere e monitorare i dati aziendali. Puoi sincronizzare i tuoi dati e accedervi da qualsiasi luogo utilizzando un'app mobile, un software desktop o un browser Web utilizzando celle PYDIO. La migliore app di condivisione di file di Pydio celle si basa su un'architettura di micro-servizio ed è scritta utilizzando il linguaggio di programmazione Golang.
Questo tutorial ti aiuterà a installare e configurare il software di condivisione di file e la piattaforma di sincronizzazione di Pydio su Ubuntu LTS.
  * Iniziare
  * Installa la lampada server
  * Installa Pydio su Ubuntu
  * Crea database e utente PYDIO
  * Accedi Pydio sul tuo browser
  * Conclusione

## Passaggio 1: iniziare
Prima delle installazioni, è necessario assicurarsi che il sistema stia eseguendo i pacchetti più recenti. Utilizzare il comando qui sotto per aggiornare il server Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Dopo l'aggiornamento, si consiglia sempre di riavviare il server per le nuove modifiche per avere effetto.
```
sudo reboot
```

## Passaggio 2: installa la lampada server
Per configurare Pydio Secure Enterprise File Sharing Server e come creare un cloud privato open source, dobbiamo prima impostare un server di lampade in esecuzione. Se hai già installato e funzionante lo stack della lampada, salta questo passaggio altro, utilizzare i comandi di following per impostare la lampada sul tuo sistema Ubuntu.

## # Installa PHP
Puoi installare PHP sul tuo sistema Ubuntu o Debian eseguendo comandi:
sudo apt-get installa python-software-prroperties
Sudo ADD-APP-Repository PPA: Ondrej/PHP
SUDO APT-OGT Installa -y PHP PHP-GD PHP-CURL PHP-ZIP PHP-DOM PHP-XML PHP-SIMPLEXML PHP-MBString
{{_LINE_34_}}

## # Installa Apache2
Apache è il software Web Server open source più utilizzato. Quindi, installa il server Web Apache su Ubuntu eseguendo:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # Installa mysql
Il sistema di gestione del database relazionale open source MySQL è un componente dello stack del software per applicazioni Web LAMP e altri. Ora installa MySQL su Ubuntu in esecuzione di seguito:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Una volta completato l'installazione, apri  **Php.ini**  File di configurazione da modificare. Usa il tuo editor di file preferito.
Apportare modifiche al file php.ini come di seguito. Apri due file e apporta le modifiche come mostrato
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Apportare le seguenti modifiche
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Salva e chiudi il file e procedi per modificare l'altro file php.ini
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Passaggio 3: installa Pydio su Ubuntu
Per prima cosa è necessario aggiungere il miglior repository di software di condivisione file gratuiti di Pydio al server Ubuntu 20.04 perché non è già disponibile. Aggiungi anche Pydio il miglior sistema di condivisione di file per la chiave pubblica aziendale e vai avanti per aggiornare il repository di sistema.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Ora è il momento di installare PYDIO EFSS e software di condivisione dei documenti. Esegui il comando come mostrato
```
sudo apt install -y pydio pydio-all
```
Abilita il modulo di riscrittura Apache utilizzando i comandi mostrati seguenti e riavvia e abilita Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Conferma che il servizio Apache è in esecuzione utilizzando il comando seguente:
```
sudo systemctl status apache2
```
L'output dovrebbe essere mostrato se l'installazione è stata eseguita correttamente, mostrando che il servizio APACHE2 è in esecuzione.

## Passaggio 4: Crea database PYDIO e utente
Dopo aver estratto il codice, ora creiamo un database MySQL e un account utente per la configurazione di PYDIO. Utilizzare il seguente set di comandi per accedere a MySQL Server per creare il database e l'utente di Ajaxplorer ShareSync o PYDIO.
mysql -u root -p
Inserire la password:
mysql> Crea database pydio;
mysql> concedi tutto su pydio.* a 'pydio'@'localhost' identificato da '_password_';
Mysql> Privilegi a filo;
mysql> smettila
{{_LINE_69_}}
Successivamente, dobbiamo installare Pydio su Ubuntu dall'interfaccia Web per creare un cloud privato.

## Passaggio 5: Accedi Pydio sul browser
Apri il browser e digita l'URL _http: /// pydio_. Dovresti vedere una pagina come mostrato
Il software PYDIO Private Cloud Sharing e Business File Sharing Software sono ora installati e configurati, è tempo di accedere alla propria interfaccia Web.
Apri il browser e digita URL http: // your -server -ip / pydio. Verrai reindirizzato alla pagina seguente:

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio Installer">}}

Conferma tutti i controlli e fai clic sul pulsante  **Continua l'installazione di Pydio** . Dovresti vedere la pagina seguente:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio Setup Wizard">}}

Seleziona la tua lingua e fai clic su  **Avvia la procedura guidata** . Dovresti vedere la pagina seguente:

{{< figure align=center src="images/Starting-the-setting.png" alt="Avvia le impostazioni Pydio">}}

Immettere il nome del programma e il messaggio di benvenuto. Quindi fai clic sul pulsante  **Avanti** . Dovresti vedere la pagina seguente:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Immettere l'applicazione Pydio">}}

Quindi, inserisci il tuo account amministratore e fai clic sul pulsante  **Avanti** . Dovresti vedere la pagina seguente:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Impostazioni del database MySQL">}}

Quindi immettere i dettagli del database, come nome del database, nome utente e password. Quindi fare clic sul pulsante  **Test DB Connection** . Dovresti vedere la pagina seguente:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Opzioni avanzate Pydio">}}

Quindi, fare clic sul pulsante  **Installa Pydio** . Una volta che l'installazione è stata completata correttamente. Verrai reindirizzato alla pagina seguente:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Login">}}

Quindi immettere il nome utente e la password per l'amministratore. Quindi fare clic sul pulsante [Invio]. Dovresti vedere la pagina seguente:

Sì! E 'fatto. Ora sai come installare completamente la sincronizzazione dei file di Pydio Self Hosd e il software di condivisione di file open source su Ubuntu per la costruzione di un cloud privato passo per passo simile a Dropbox o Google Drive.

##  **Conclusione:** {#4a1a}
In questo tutorial, hai installato correttamente la condivisione di file sicuri open source Pydio celle sul tuo sistema Ubuntu. Puoi utilizzare questo articolo per creare un'infrastruttura cloud per archiviare, proteggere e condividere i tuoi file nel cloud autonomo. Utilizzare la condivisione di documenti collaborativi PYDIO e la migliore app di condivisione di file gratuita per ottenere un maggiore controllo dei tuoi dati e garantire una collaborazione efficiente nella propria organizzazione aziendale. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti di soluzioni di archiviazione cloud open source e strumenti di collaborazione della condivisione di file.
_ Il tuo può unirsi a noi su [Twitter][1], [LinkedIn][2] e la nostra pagina [Facebook][3]. Quale piattaforma di condivisione _file open source_ cloud usi online?. In caso di domande, per favore_ [mettiti in contatto][4].

## Esplorare:
Abbiamo anche molti altri articoli relativi alla gestione quotidiana del tuo server.
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][5]
  * [Come installare e fissare PhpMyAdmin con Nginx su Ubuntu][6]
  * [Secure and Cript Nginx con let's Crypt su Ubuntu 20.04][7]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][8]
  * [Imposta nginx con passeggero su AWS Production Server][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
