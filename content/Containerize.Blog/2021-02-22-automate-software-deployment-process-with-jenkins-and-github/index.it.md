---
title: "Integrazione continua e distribuzione continua dal server di controllo sorgente" 
seoTitle: "Integrazione continua e distribuzione continua dal server di controllo sorgente" 
description: "Lo strumento di distribuzione gratuito aiuta i team di sviluppo ad automatizzare i flussi di lavoro di consegna del software. Crea rapidamente, testare, distribuire software con Jenkins e Github Repository." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Automatizzare i flussi di lavoro di sviluppo utilizzando lo strumento di distribuzione gratuito. Impareremo come configurare CI/CD con Jenkins Automation Server e GitHub per la distribuzione del software." 
url: /it/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## automatizza i flussi di lavoro di sviluppo utilizzando lo strumento di distribuzione gratuito. Impareremo come configurare CI/CD con Jenkins Automation Server e GitHub per la distribuzione del software.

{{< figure align=center src="images/ci-cd-post.png" alt="Integrazione continua e distribuzione continua">}}

I team di sviluppo utilizzano metodi diversi per la distribuzione di software come FTP, estrazione del codice dal repository e molti altri. Tutti questi metodi vengono eseguiti manualmente e richiedono molto sforzo. Possiamo vedere che più team seguono la metodologia agile per lo sviluppo del software. Quindi, rilasciano nuove funzionalità e fissati di bug frequentemente. Pertanto, l'automazione dei flussi di consegna del software aiuta i team per il lancio di nuove versioni rapidamente e senza errori. Impareremo come utilizzare  **CI/CD con Jenkins **  e GitHub per l'automazione del processo di consegna del software. Tratteremo le seguenti sezioni in questo articolo.
  *[ **Cos'è Jenkins? ** ][1]
  *[ **Integrazione continua ** ][2]
  *[ **Distribuzione continua ** ][3]
  *[ **Configura Jenkins ** ][4]
  *[ **Crea lavoro Jenkins ** ][5]

## Che cos'è Jenkins?   {#Jenkins}
**Jenkins  **è un potente strumento di distribuzione gratuito **  per automatizzare il processo di consegna del software. È un server di automazione open source per la costruzione, il test e la distribuzione. Jenkins usa l'architettura Master-Slave. Ciò consente ai team di software di eseguire più build e test per il software contemporaneamente. Inoltre, ci sono molti plugin disponibili e i team possono usarli secondo necessità. È possibile visitare la pagina [ **Jenkins ** ][6] per ulteriori informazioni e installazione. Inoltre, puoi trovare il codice sorgente su Jenkins [ **github ** ][7] repository.

## integrazione continua   {#ci}
**Integrazione continua ** è una pratica di sviluppo che richiede agli sviluppatori di integrare frequentemente il codice in un repository condiviso. Ogni integrazione/spinta del codice nel repository può essere verificata mediante build e test automatizzati. Inoltre, consente agli sviluppatori di identificare facilmente i problemi nel codice.

## distribuzione continua   {#cd}
**La distribuzione continua ** è il prossimo passo dopo l'integrazione continua. Consentirebbe ai team di distribuire continuamente il codice sul server. Inoltre, aiuta gli sviluppatori a ridurre le attività ripetitive e ad aumentare l'agilità.

## Configura Jenkins   {#Configure}
Seguire la linea guida passo passo di seguito per la configurazione in Jenkins.
  * Apri il tuo sito Jenkins e accedi.
  * Installa il plug -in "Pubblica tramite SSH". Puoi cercarlo navigando per "Gestisci Jenkins → Gestisci plugin → Disponibile".
  * Genera la chiave SSH sul server build come utente "Jenkins" come mostrato di seguito.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Connettiti al server Target/Deployment utilizzando SSH. Esegui il comando sotto e incolla il contenuto del file pub sul server di destinazione.
```
$ cd .ssh
$ nano authorized_keys
```
  * Naviga per gestire "Jenkins → Configura sistema → Pubblica su SSH".
  * Aggiungi il tasto SSH individuando il percorso del file o incolla lo stesso contenuto fatto per il server di distribuzione.
  * Aggiungi un server SSH facendo clic sul pulsante "Aggiungi" accanto a "server SSH".
  * Immettere il nome, il nome host, il nome utente e la directory remota per il server di distribuzione/target.
  * Fare clic sul pulsante di configurazione del test per assicurarti che Jenkins possa connettersi al server di distribuzione.
  * Infine, fai clic sul pulsante Salva per archiviare le informazioni.

## Crea lavoro Jenkins   {#create}
È possibile utilizzare questi passaggi per la creazione del lavoro Jenkins.
  * Apri la dashboard Jenkins e fai clic sul pulsante "Nuovo elemento".
  * Inserisci il nome del progetto e scegli "lavoro freestyle".
  * Immettere l'URL del repository GitHub nella "finestra di configurazione".
  * Nella sezione "Build Environment", controllare queste opzioni "Elimina l'area di lavoro prima dell'avvio di build" e "Invia file o eseguire comandi su SSH dopo l'esecuzione della build".
  * Immettere il nome, i file di origine e la directory remota in ambiente build.
  * Salva lavoro e costruiscilo.
  * Connettiti al server di distribuzione e assicurati che il codice sia lì.

## Conclusione
Abbiamo discusso del server  **Jenkins ** ,  **Integrazione continua **  e  **distribuzione continua **  In questo articolo. Abbiamo anche imparato come configurare lo strumento di distribuzione  **gratuito **  e creato un lavoro Jenkins per la distribuzione utilizzando GitHub. Lo strumento CI/CD gratuito consente al team di sviluppo di automatizzare i flussi di lavoro di consegna del software e mantenere l'attenzione su lavori importanti. Copriremo altri strumenti di distribuzione nei prossimi post.
Infine, [ **containerize.com ** ][8] pubblicherà articoli su ulteriori strumenti di distribuzione open source. Pertanto, rimani in contatto con [ **Strumenti di distribuzione ** ][9] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * **[Jenkins][6]**
  *[ **drone ** ][10]
  *[ **Deployer ** ][11]
  *[ **Capistrano ** ][12]
  *[ **rancher ** ][13]
  *[ **Concourse ** ][14]
  *[ **ansible ** ][15]
  *[ **GOCD ** ][16]
  *[ **Top 5 strumenti di distribuzione open source nel 2021 ** ][17]
  *[ **Automatizza la distribuzione dell'applicazione PHP con Deployer ** ][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
