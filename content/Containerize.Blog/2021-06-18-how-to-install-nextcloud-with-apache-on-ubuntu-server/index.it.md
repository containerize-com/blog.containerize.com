---
title: "Come installare NextCloud con Apache su Ubuntu Server" 
seoTitle: "Come installare NextCloud con Apache su Ubuntu Server" 
description: "NextCloud è una soluzione di archiviazione cloud autonome open source scritta in PHP. Questo articolo mostrerà come installare NextCloud con Apache su Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud è un software di sincronizzazione e collaborazione di file open source. Questo tutorial mostrerà come installare NextCloud con Apache su Ubuntu." 
url: /it/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud è un software di sincronizzazione e collaborazione di file open source autosucchiati. Questo tutorial mostrerà come installare NextCloud con Apache su Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Come installare NextCloud con Apache su Ubuntn">}}


Panoramica ##  **** 
**[NextCloud][1]**è una soluzione di archiviazione cloud auto-ospitata gratuita e sicura**  scritta in linguaggio di programmazione PHP. Fornisce l'accesso ai dati utilizzando l'interfaccia Web e funzionalmente simile a Dropbox. Le soluzioni proprietarie di archiviazione cloud come Dropbox e Google Drive sono convenienti ma possono essere utilizzate per raccogliere dati personali perché i file sono archiviati sui loro sistemi. Se hai bisogno di soluzione di sincronizzazione e condivisione dei file sicuri, sicuri e conformi, è possibile passare al server Open Source NextCloud. La configurazione NextCloud può essere installata sui server di casa privata o su un server privato virtuale.
NextCloud Open Source fornisce **Crittografia end-to-end** , il significato dei file può essere crittografato sul dispositivo client prima di caricare sul server. Può anche essere integrato con una suite di uffici online come Collobora, OnlyOffice NextCloud in modo da poter creare e modificare i file DOC, PPT, XLS direttamente dal client NextCloud. Puoi condividere e sincronizzare uno o più file e cartelle sul tuo computer con il tuo server NextCloud dopo il download del client NextCloud. Il download desktop NextCloud e i client mobili forniscono opzioni per sincronizzare e condividere su tutti i dispositivi sotto il tuo controllo. Posizionare i file di dati nelle directory condivise locali e tali file vengono immediatamente sincronizzati con il server e su altri dispositivi utilizzando il client Desktop Sync di NextCloud, l'app iOS o i dispositivi Android.
Questo tutorial ti aiuterà a installare NextCloud su Ubuntu 20.04 LTS Linux Operating System con Apache.
  ***Installa i prerequisiti (pila lampada)** 
  ***Scarica NextCloud Archive su Ubuntu** 
  ***Crea database mysql** 
  ***Esegui il programma Web NextCloud** 
  * **Avvolgendo**

## PASSAGGIO 1: Installa i prerequisiti (pila lampada)
La prima cosa per l'installazione di NextCloud su Ubuntu è che devi avere il server di lampade in esecuzione **sul tuo sistema Ubuntu LTS. Accedi al sistema e alla finestra del terminale di accesso. Se hai già in esecuzione  **lampada stack**   salta questo passaggio altro, utilizzare i seguenti comandi per installare le dipendenze necessarie.

### Installa PHP
Cominciamo con l'installazione della versione PHP versione 5.6 o superiore sul server Ubuntu:
Sudo Apt-get Aggiornamento
SUDO APT-OGT Installa
È possibile verificare la versione PHP utilizzando il comando seguente:
php -v
{{_LINE_29_}}

### Installa Apache2
Quindi, installa Apache con il comando:
sudo apt-get install -y apache2 libapache2-mod-php
Sudo SystemCtl Riavvia Apache2
{{_LINE_34_}}

### Installa mysql
Con le dipendenze fuori mano, il passo successivo di cui essere curato è proteggere il server di database MySQL. Installa il server di database MySQL eseguendo:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Passaggio 2: Scarica Archivio NextCloud su Ubuntu
Al momento della stesura di questo articolo, l'ultima versione di NextCloud è 22.0.0beta5. Dopo aver configurato correttamente Lamp Server sul sistema, scarichiamo NextCloud dal suo [sito Web ufficiale][2].
CD /TMP
Wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Una volta completato il download di NextCloud Server, estratto Archivio scaricato sotto Radice del documento del sito Web e impostare la proprietà della directory NextCloud su WWW-DATA su file e directory.
CD/VAR/WWW/HTML
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
Ora rimuovi il file di archivio scaricato.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Passaggio 3: Crea database MySQL
Dopo aver estratto il codice sorgente, creiamo un database MySQL NextCloud e un account utente per la configurazione di NextCloud. Utilizzare il seguente set di comando per accedere a MySQL Server, creare il database NextCloud, l'utente ed esci dalla console MySQL.
mysql -u root -p
Inserire la password:
mysql> crea il database nextcloud;
mysql> concedi tutto su nextcloud.* a 'nextcloud'@'localhost' identificato da 'yasir_pa $$ w0rd_';
Mysql> Privilegi a filo;
mysql> smettila
{{_LINE_61_}}

## Passaggio 4: esegui il programma Web NextCloud
A questo punto, NextCloud installa Ubuntu 20.04 correttamente e configurato. Ora, apri la directory di configurazione NextCloud nel browser Web come sotto e digita l'URL http://your-domain.com. Cambia LocalHost nell'indirizzo IP del server o nel nome di dominio. Vedrai la seguente schermata:
http: // localhost/nextcloud/o http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Immettere nuove credenziali di amministrazione per creare un account amministratore e fornire la posizione della cartella dati.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Come installare NextCloud con Apache su Ubuntu Linux Server">}}

{{_LINE_69_}}
Ora fai scorrere la pagina verso il basso e inserisci il nome del database, il nome utente del database, la password e fare clic sul pulsante **Finish Setup** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Come installare NextCloud Ubuntu 20.04 con Apache">}}

{{_LINE_73_}}
Una volta terminata l'installazione, dovresti vedere la dashboard di amministrazione NextCloud nella schermata seguente. Qui puoi creare un utente, gruppi, assegnare loro autorizzazioni, ecc.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Installazione di NextCloud su Ubuntu con Apache">}}

{{_LINE_77_}}
Congratulazioni, hai una soluzione cloud NextCloud in prima persona per il tuo sistema Ubuntu LTS. Ora puoi iniziare a personalizzare il tuo server cloud per soddisfare perfettamente le tue esigenze.

## **Avvolgimento:**    {#4a1a}
Congratulazioni! Hai configurato e installato correttamente **NextCloud su Ubuntu Server con Apache** . Hai imparato a creare un cloud privato. NextCloud Ubuntu Server è un'incredibile piattaforma di collaborazione per l'archiviazione cloud che può servire solo sulle esigenze di archiviazione cloud privata o ibrida di chiunque. Ora sai come installare NextCloud su Ubuntu e i tuoi dati sono sicuri e sicuri nel tuo cloud autosufficiente. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti relativi agli stack di soluzione del server Web.
_ Quale soluzione di archiviazione autosufficiente basata su cloud preferisci?. Se hai domande, per favore [mettiti in contatto][3] ._

## Esplorare:
Potrebbe piacere seguire articoli relativi alla gestione quotidiana del tuo server.
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][4]
  * [Come configurare Apache come proxy inverso per Ubuntu o Debian][5]
  * [Installa e fissa phpmyadmin con nginx su ubuntu][6]
  * [Secure and Cript Nginx con let's Crypt su Ubuntu 20.04][7]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][8]
  * [Imposta nginx con passeggero su AWS Production Server][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
