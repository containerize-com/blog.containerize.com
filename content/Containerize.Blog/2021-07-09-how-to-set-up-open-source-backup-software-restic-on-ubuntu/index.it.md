---
title: "Come impostare il software di backup open source Restic su Ubuntu" 
seoTitle: "Come impostare il software di backup open source Restic su Ubuntu" 
description: "Restic è un software di backup open source. Supporta AWS S3, Microsoft Azure, Google Cloud e altre opzioni di backend." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Prendi il backup con il software di backup open source e memorizzalo a livello locale o su backend esterni. Resic è multipiattaforma e supporta più tipi di archiviazione." 
url: /it/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Prendi il backup con software di backup open source e memorizzalo a livello locale o su backend esterni. Resic è multipiattaforma e supporta più tipi di archiviazione.

{{< figure align=center src="images/restic-post-banner.png" alt="Software di backup open source">}}

Un sistema di backup è davvero importante sia per le aziende che per gli individui. I dati possono essere persi per vari motivi come un attacco informatico, fallimento del sistema, rimozione accidentale e molti altri. Dovresti avere una buona strategia di backup in atto in modo da poter ripristinare rapidamente i tuoi dati. Questa guida ti mostrerà come installare e utilizzare il software di backup open source**Restic sul tuo server Ubuntu.
Abbiamo coperto le seguenti sezioni in questo tutorial.
* [ **prerequisiti** ][1]
* [ **Cos'è Resic?** ][2]
* [ **Installazione restale** ][3]
* [ **Configurazione restabile** ][4]
* [ **Alternative a Restic** ][5]
* **[Conclusione][6]** 

## Prerequisiti {#Prerequisiti}

Resic Backup Software Program supporta i tre principali sistemi operativi Linux, MacOS e Windows. Prima di installare **Resic Backup** , è necessario soddisfare i seguenti requisiti di sistema.
  * Sistema macchina o desktop con un sistema operativo Ubuntu che ospita i dati da eseguire il backup
  * Un'ultima istanza del server Ubuntu
  * Autenticazione chiave SSH configurata tra i due client e il server
  * Utente non root con privilegi sudo
Con questi bit in mano, muoviamo e mettiamoci al lavoro.

## Cos'è Resic? {#Restic}

[ **Restic**][7] è un fantastico strumento di backup open source**. È un'utilità di backup****che è veloce, sicura ed efficiente. È un programma di backup multipiattaforma, quindi funzionerà su Linux, BSD, Mac OS X e Windows. Il miglior software di backup open source è facile da eseguire e non richiede un server o una configurazione complicata. Crea un backup dei dati modificati e consente agli utenti di ripristinarli quando necessario. Inoltre, fornisce una varietà di opzioni di archiviazione, tra cui autoprodotta e archiviazione Internet. Inoltre, il resic Cloud Storage autonomo open source utilizza solide tecniche crittografiche per proteggere i tuoi dati.
Resic non è un'utilità di copia di file semplice. È basato principalmente su due concetti: istantanee e repository. **Resic**La soluzione di backup open source salva le informazioni come snapshot, che viene quindi salvata in un repository. È scritto nel linguaggio di programmazione Go. L'utilità di backup basata su GO e l'applicazione di backup open source funzionano senza intoppi con molti sistemi di archiviazione del back -end cloud e locali. Il codice sorgente del software di backup del file open source Resic è disponibile su [**GitHub** ][8]. Tuttavia, è possibile trovare una documentazione dettagliata [****][9] per l'installazione e l'utilizzo.
Resic autosostato da sé il backup del cloud supporta i backend fuori dalla scatola per l'archiviazione di backup.
  * Directory locale
  * Server SFTP (tramite SSH)
  * Server di riposo
  * AWS S3
  * MINIO SERVER
  * Wasabi
  * Cloud Alibaba
  * OpenStack Swift
  * Backblaze B2
  * Archiviazione BLOB Microsoft Azure
  * Google Cloud Storage
È possibile utilizzare [ **rclone** ][10] per vari backend oltre a quelli sopra elencati.

## Installazione restiale {#Installation}

Esistono vari modi per installare la migliore memoria cloud autosufficiente sul tuo sistema operativo Ubuntu. Copriremo l'installazione di archiviazione di file autosullati resistenti utilizzando il pacchetto Ubuntu, il docker e il codice sorgente.

### Installazione utilizzando il pacchetto
  * Esegui il comando di seguito per installare un server backup open source sul sistema operativo Ubuntu.
```
$ sudo apt-get install restic
```

### Installazione utilizzando Docker
  * Ottieni l'immagine restale da Dockerhub.
```
$ docker pull restic/restic
```

### Installazione utilizzando la sorgente
  * Innanzitutto, è necessario installare un linguaggio di programmazione GO per configurare Resic dalla fonte. È possibile visitare il sito Web ufficiale [ **Golang** ][11] per le istruzioni da installare.
  * Successivamente, eseguire i comandi seguenti per installare un backup incrementale resistente.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Specificando il sistema operativo target nel comando, è possibile compilare rapidamente Resic per tutte le piattaforme supportate. Ecco alcuni esempi.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Configurazione resta {#Configuration}

Come abbiamo già menzionato sopra, il report di backup open source si basa su istantanee e repository per il backup. Diamo un'occhiata a come impostare un repository, dare un'istantanea e quindi ripristinare il backup.

### Crea repository
  * Esegui il comando seguente per inizializzare il repository. È inoltre necessario impostare una password per il repository.
```
$ restic init --repo /tmp/
```

### Dati di backup a una directory locale
  * Nel primo passaggio, abbiamo creato un repository per archiviare i dati. Ora aggiungeremo dati al repository per il backup. Eseguire il seguente comando.
```
$ restic --repo /tmp/backup backup ~/work
```

### ripristina il backup
  * Il comando Restore ripristina file e directory. I file non vengono ripristinati nella loro posizione originale durante l'utilizzo di un reggispio di backup cloud open source. È necessario scegliere una posizione di destinazione affinché i file siano ripristinati da Resic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Tuttavia, è possibile ripristinare l'ultima snapshot senza specificare l'ID snapshot. È necessario aggiungere il parametro più recente nel comando come di seguito.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Lavorare con le istantanee
In questa sezione, esamineremo alcune delle funzionalità delle istantanee.
  * Esegui il comando seguente per elencare gli snaphost.
```
$ restic snapshots -r /tmp/backup
```
  * Puoi confrontare due istantanee con il seguente comando.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Potrebbe essere necessario eliminare un vecchio backup per liberare spazio di archiviazione. Per rimuovere un'istantanea, eseguire il comando sotto.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## alternative a Resic
Restic è l'applicazione software di backup open source più popolare e garantisce la riservatezza e l'integrità dei dati di file importanti. Di seguito sono riportate le alternative più popolari e i principali concorrenti allo strumento di backup dei dati resi.
  * Glacier Amazon
  * Replica
  * runrestic
  * Afi
  * Backup di Rainyday
  * Borg
  * Backup veeam
  * AWS Storage Gateway
  * Cohesity

## Conclusione
In questo articolo, abbiamo coperto il restante software di backup open source gratuito**. Abbiamo anche discusso di diverse tecniche di installazione, nonché come creare un backup e come ripristinare il backup. Esistono molte altre forme di archiviazione di backup dei dati e ne abbiamo appena affrontata una in questo articolo. I restanti tipi di archiviazione backend saranno trattati in future pubblicazioni. Speriamo che questo tutorial sarà un punto di partenza per utilizzare il miglior strumento di backup open source per eseguire e ripristinare i backup.
Infine, [ **Containerize.com**][12] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, rimani in contatto con questa categoria [**Backup Software** ][13] per gli ultimi aggiornamenti.
_ Quali sono il tuo software di backup gratuito e open source preferito?. Hai domande sul software di backup open source?, Per favore_ [mettiti in contatto][14].

## Esplorare:
Abbiamo anche diverse altre informazioni correlate da OSS Watch:
  * [Top 5 software di archiviazione cloud open source nel 2021][15]
  * [Come installare NextCloud con Apache su Ubuntu Server][16]
  * [Installa e configura OwnCloud con Apache su Ubuntu][17]
  * [Come installare la piattaforma di condivisione e sincronizzazione dei file Pydio su Ubuntu][18]
  * [NSQ vs Kafka | Quali sono le differenze chiave?][19]
  * [NextCloud vs OwnCloud | Quali sono le differenze?][20]
  * [Il miglior software di archiviazione e condivisione di file open source][21]



[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
