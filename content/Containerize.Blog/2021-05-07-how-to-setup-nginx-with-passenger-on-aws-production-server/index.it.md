---
title: "Come configurare nginx con il passeggero sul server di produzione AWS" 
seoTitle: "Come configurare nginx con il passeggero sul server di produzione AWS" 
description: "Questo post sul blog descrive i passaggi per l'installazione di NGINX con il passeggero attraverso il sistema operativo Ubuntu 20.04 LTS seguendo il metodo APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Questo post sul blog descrive i passaggi per l'installazione di NGINX con il passeggero attraverso il sistema operativo Ubuntu 20.04 LTS seguendo il metodo APT." 
url: /it/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Questo post sul blog descrive i passaggi per l'installazione di NGINX con il passeggero attraverso il sistema operativo Ubuntu 20.04 LTS seguendo il metodo APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Imposta nginx con il passeggero sul server di produzione AWS">}}


Panoramica ## **** :
È necessario installare e configurare **nginx con il passeggero sulla produzione AWS**  Server prima di distribuire l'applicazione sul server di produzione.
**Il passeggero di Phusion open source ** offre molte opzioni di personalizzazione e funzionalità. Passenger Alcune funzionalità vengono utilizzate per migliorare le caratteristiche delle prestazioni dell'applicazione. Alcune delle applicazioni di personalizzazione influenzano l'applicazione o il comportamento di gestione della connessione ecc. Due opzioni di configurazione per il passeggero sono necessarie per essere impostate in Nginx, denominate come passeggero \ _enabled e passeggeri \ _root. Questo processo di installazione imposterà automaticamente entrambe queste opzioni.
In questo articolo del blog, tratteremo alcune delle fasi di configurazione essenziali per l'installazione di Web Application Server sul sistema operativo Ubuntu che segue **Metodo APT** . Sarai in grado di distribuire e amministrare le applicazioni Web scritte in node.js, python e Ruby dopo aver letto e seguito la guida di seguito.
  ***Che cos'è nginx e passeggero?** 
  ***Installa pacchetti nginx e passeggeri** 
  ***Abilita il modulo nginx passeggero e riavvia nginx** 
  ***Convalida installazioni** 
  ***Aggiornamenti di sistema e passeggeri** 
  ***I migliori server Web open source** 
  * **Conclusione**

## 1. Che cos'è Nginx e Passenger?   {#step-4: -update-regolare}
**[Che cos'è Nginx Server?][1]**Nginx è un software server Web gratuito e open source per il servizio Web come proxy inverso, bilanciamento del carico HTTP, streaming multimediale, cache HTTP e proxy e-mail per IMAP, POP3 e Smtp. È altamente scalabile, progettato per le massime prestazioni e stabilità. Nginx è un server Web asincrono, non Throded ed eventi ad alte prestazioni che consente l'elaborazione di più richieste client contemporaneamente. È stato scritto da Igor Sysoev, rilasciato nel 2004 ai sensi della licenza BSD a 2 clausole.  **Nginx esegue 2,5 volte più veloce**   di Apache e consumato meno memoria secondo un test di riferimento.
**[Che cos'è il passeggero?][2]**Phusion Passenger noto anche come mod \ _rails e mod \ _rack, è un server Web gratuito e un server di applicazioni Web open source. È progettato per essere veloce, robusto, ricco di funzionalità e leggero che si integra con Apache e Nginx. Migliora anche la sicurezza, l'affidabilità e la scalabilità per le applicazioni. Consente agli amministratori di ottenere informazioni sulle operazioni delle applicazioni Web, sulle prestazioni del server. Il server delle app passeggeri esegue e gestisce automaticamente le tue applicazioni Web. Può anche  **servire più applicazioni**   allo stesso tempo essere multi-tenant e autonomo. Può gestire le richieste HTTP, gestisce processi e risorse e consente le attività di amministrazione, il monitoraggio e la diagnosi di problemi. Phusion Passenger è un server di applicazioni gratuito con supporto per distribuire e amministrare Meteor, Ruby on Rails Nginx Passenger, JavaScript, Python e Node.js Applicazioni.

## 2. Installa pacchetti NGINX e passeggeri:   {#Step-1: -Install-Passenger-Packages}
Ora è il momento di installare passeggeri e nginx. Sarai in grado di distribuire facilmente uno dei popolari server Web dopo questa guida. Di seguito i comandi elencati installeranno Passenger e NGINX tramite il repository APT di Phusion. Se hai già installato Nginx, questi comandi aggiorneranno Nginx alla versione di Phusion con il passeggero compilato in:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Abilita il modulo NGINX passeggeri e riavvia Nginx:   {#Step-2: -Enable-The-Passenger-Nginx-Modulo-and-Restart-Nginx}
Modifica /etc/nginx/nginx.conf e dismenment includono /etc/nginx/passenger.conf;. Ad esempio, potresti vedere questo:
```
# include /etc/nginx/passenger.conf;
```
Rimuovi i personaggi "#", in questo modo:
```
include /etc/nginx/passenger.conf;
```
Se non vedi una versione commentata di include /etc/nginx/passenger.conf; All'interno di nginx.conf, quindi devi inserirlo da solo. Inseriscilo in /etc/nginx/nginx.conf all'interno del blocco HTTP.
http {
    includere /etc/nginx/passenger.conf;
    ...
}
Quando hai finito con questo passaggio, **Riavvia Nginx** :
```
$ sudo service nginx restart
```

## 4. Convalida Installations:   {#Step-3: -Check-Installation}
Dopo l'installazione, si prega di convalidare l'installazione nel terminale eseguendo il comando `sudo/usr/bin/passeggeri-config Convalida-Install`:
```
sudo /usr/bin/passenger-config validate-install
```
Tutti i controlli dovrebbero passare. Se uno qualsiasi dei controlli non passa, seguire i suggerimenti sullo schermo.
Infine, controlla se Nginx ha avviato i processi del core passeggeri. Esegui `sudo/usr/sbin/passeggeri-memory-stats`. Dovresti vedere i processi NGINX e i processi passeggeri. Ad esempio come di seguito:
```
sudo /usr/sbin/passenger-memory-stats
```
Se non si vedono alcun processo NGINX o processi passeggeri, probabilmente hai un qualche tipo di problema di installazione o problema di configurazione. Fare riferimento alla [Guida alla risoluzione dei problemi][3].

## 5. Aggiornamenti di sistema e passeggeri:   {#step-4: -update-regolare}
Gli aggiornamenti Nginx, gli aggiornamenti dei passeggeri e gli aggiornamenti di sistema vengono consegnati regolarmente tramite il **Apt Package Manager** . Dovresti eseguire regolarmente il seguente comando per tenerli aggiornati:
Sudo Apt-get Aggiornamento
SUDO APT-OPGRADO
Non è necessario riavviare Web o applicazione dopo un aggiornamento e non è necessario modificare alcun file di configurazione dopo un aggiornamento. Questo è tutto curato automaticamente per te da APT.

## 6. **I migliori server Web open source** :   {#step-4: -update-regolare}
**Che cos'è un server Web open source? ** Un software di server Web open source è un software a dominio pubblico progettato per fornire pagine Web su Internet World Wide Web. Fondamentalmente elabora le richieste tramite protocollo di rete HTTP per distribuire informazioni sul World Wide Web.
Oltre l'80% delle applicazioni Web e dei siti Web sono alimentati da server Web open source. Qui ho elencato alcuni dei **Server Web open source più popolari**  e puoi facilmente distribuire da solo uno di questi popolari server Web.
  ***Apache HTTP Server** 
  ***Server Web Lighttpd** 
  ***Server Web OpenLiTepeed** 
  ***Apache Tomcat Web Server** 
  ***Server Web Caddy** 

## [][4] Conclusione:   {#Next Step}
Congratulazioni, hai installato e configurato correttamente Nginx con Passenger su **AWS Production Server  **per la tua applicazione Web. Si prega di dare un'occhiata alle varie guide nella [libreria passeggeri][5] per padroneggiare completamente il server delle applicazioni passeggeri. Potresti essere particolarmente interessato alla guida [Automation Deployment][6] della tua applicazione Ruby tramite **  Capistrano** , che ti insegna come distribuire automaticamente gli aggiornamenti delle applicazioni futuri senza così tanto lavoro manuale. Ora sei pronto a distribuire l'applicazione Web sulle istanze di produzione AWS.
_ CHE SERVER Web GRATUITO E APPLICAZIONE Web open source_ Preferisci per **Sviluppo Web o hosting**  Needs_?. Hai domande sul server Web gratuito e sul server delle applicazioni Web open source?, Per favore_ [mettiti in contatto][7].

## Esplorare
Potresti trovare i seguenti post sul blog pertinenti:
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][8]
  * [Installa e fissa phpmyadmin con nginx su ubuntu][9]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][10]
  * [Sicuro e crittografico nginx con let's crittograpt su ubuntu 20.04][11]
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
