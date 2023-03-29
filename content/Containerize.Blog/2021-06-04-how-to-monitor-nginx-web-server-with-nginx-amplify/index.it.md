---
title: "Come monitorare il server Web Nginx con Nginx Amplify" 
seoTitle: "Come monitorare il server Web Nginx con Nginx Amplify" 
description: "Nginx Amplify è un agente di monitoraggio gratuito per le applicazioni NGINX Web Server e PHP. Questo articolo riguarda come monitorare il server Web Nginx con Nginx Amplify" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Monitorare le applicazioni NGINX, PHP, il sistema operativo con NGINX amplificare e migliorare la configurazione. Questo articolo ti guida a configurare e configurare Nginx Amplify." 
url: /it/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor NGINX, applicazioni PHP, sistema operativo con NGINX Amplificare e migliorare la configurazione. Questo articolo ti guida a configurare e configurare Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Monitora il server Web Nginx con Nginx Amplify">}}


## Panoramica {#Install}

**Monitoraggio del server Web**È molto importante per i siti Web ad alto traffico. L'agente di monitoraggio****registrerà regolarmente le metriche essenziali sul server Web. Tali metriche critiche possono essere utilizzate per ottimizzare la configurazione NGINX. Ti aiuterà a migliorare le prestazioni del tuo server Web e dell'applicazione.
In questo post sul blog, tratteremo le seguenti sezioni per il monitoraggio **NGINX** Strumento open source.
  * [Nginx Web Server][1]
  * [Nginx amplify][2]
  * [Installa nginx amplify][3]
  * [Metriche di monitoraggio][4]

## Server Web Nginx {#Nginx}

[Nginx][5] è un server Web gratuito e open source. È semplice, leggero e facile da configurare di Apache. NGINX Web Server funziona anche come proxy inverso, bilanciamento del carico, proxy di posta e cache HTTP. Funziona per protocolli HTTP, HTTPS, SMTP, POP3 e IMAP. Nginx è un server Web ad alta velocità, affidabile ed efficiente in memoria che migliora le prestazioni delle applicazioni. Inoltre, è cresciuto in popolarità ed è ora considerato il server Web più popolare. Inoltre, Nginx è adatto a qualsiasi tipo di sito Web, inclusi siti e applicazioni ad alto traffico. Può essere installato e configurato su quasi tutti i sistemi operativi.

### Installa nginx
  * Esegui comandi sotto per installare Nginx Web Server.
```
sudo apt update
sudo apt install nginx
```
  * Una volta terminato l'installazione, apri il browser e digita "http: // ip \ _of \ _your_server". Vedrai la pagina di benvenuto seguente.

{{< figure align=center src="images/nginx-home.png" alt="Benvenuti a nginx!">}}


## Nginx amplify {#Amplify}

Nginx Amplify è uno strumento di monitoraggio gratuito per NGINX Open Source, Nginx Plus e PHP-FPM. È uno strumento basato su SAAS per il monitoraggio e le applicazioni del server Nginx. Gli utenti possono facilmente tenere traccia delle risorse dell'infrastruttura, monitorare le prestazioni e regolare la configurazione. Fornisce informazioni complete che gli utenti possono utilizzare per ottimizzare la configurazione del server Web e dell'applicazione. Agisce da agente sul server che ospita le applicazioni NGINX e PHP. Nginx Amplify è un leggero, push log e monitoraggio dei dati per amplificare i server senza compromettere le prestazioni. È possibile visualizzare le metriche sulla dashboard Amplifica. L'agente è disponibile per tutti i sistemi operativi primari come RHEL, CentOS, Ubuntu, Debian, Fedora e FreeBSD. Nginx Amplify ha tre componenti principali come Nginx Amplify Agent, Nginx Amplify Web UI e NGINX Amplify Backend.
* **NGINX AMPLIFICA AGENTE** - Funziona sul sistema monitorato. Tutta la comunicazione è crittografata usando SSL/TLS.
* **Nginx Amplifica l'interfaccia utente Web** - L'interfaccia utente Web mostra le metriche per server Web, applicazioni e sistemi operativi.
* **NGINX amplifica backend** - È un componente chiave che viene implementato come SaaS ed è responsabile della raccolta di metriche, della manutenzione di un database, dell'esecuzione di un motore di analisi e della fornitura di un'API di base.

## Installa Nginx Amplify {#Install}

Segui di seguito la guida passo passo per l'installazione di Nginx Amplifica su Ubuntu.
  * Innanzitutto, è necessario creare un account su NGINX [sito Web][6].
  * Dopo l'accesso, vedrai la schermata di seguito sul sito Web Nginx Amplify. Ora, connettiti al server tramite SSH e usa i comandi indicati nei passaggi seguenti.

{{< figure align=center src="images/amplify-1.png" alt="Installa Nginx Amplify">}}

  * Esegui il comando seguente per scaricare l'agente.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Eseguire il seguente comando per installare Nginx Amplifica sul server. Sostituire XXXXX con la chiave API effettiva. Puoi trovarlo su NGINX Amplificare la dashboard.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Una volta terminato l'installazione, è possibile controllare lo stato con il comando seguente.
```
$ sudo service amplify-agent status
```
  * Ora, è necessario configurare NGINX Amplificare l'agente per visualizzare le metriche.

{{< figure align=center src="images/amplify-2-1.png" alt="Configurazione di monitoraggio NGINX">}}

  * Crea un nuovo file con la configurazione Stub_Status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Copia il codice seguente in esso e salva il file.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Riavvia il server Web Nginx per attivare il modulo Stub_Status.
```
$ sudo service nginx restart
```
  * Ora, apri il file di configurazione Nginx con il seguente comando.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Aggiungi il codice seguente e salvalo.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Riavvia il servizio NGINX per applicare tutte le modifiche.
```
$ sudo service nginx restart
```
  * Successivamente, navigare per amplificare la dashboard e fare clic sul pulsante "finitura". Dovresti vedere la pagina seguente.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Monitoraggio del server Web">}}

* Puoi vedere le statistiche in formato più semplice e leggibile facendo clic sulla scheda **Panoramica** . Sembra che come mostrato di seguito.

{{< figure align=center src="images/amplify-overview.png" alt="Statistiche di monitoraggio Nginx">}}


## Monitoraggio delle metriche {#Monitoring}

Nginx Amplify Agent raccoglie i seguenti tipi di dati:
* **METRICI NGINX** -Raccoglie varie metriche correlate a Nginx da Stub_Status, file di registri e dallo stato di processo.
* **Metriche di sistema** - Nginx Amplify monitora una varietà di metriche di sistema come l'utilizzo della CPU, l'utilizzo della memoria, il traffico di rete e molti altri.
* **Metriche PHP-FPM** -Se identifica un processo principale in esecuzione PHP-FPM, ottiene le metriche dallo stato del pool PHP-FPM.
* **Metriche mysql** - L'agente può essere utilizzato dall'agente il set di status globale MySQL può essere utilizzato per raccogliere le metriche.
* **Metadati Nginx** - L'agente raccoglie i dati sulle istanze Nginx come dati sui pacchetti, informazioni di build, percorso binario, crediti le impostazioni di configurazione e molti altri.
* **Metadati di sistema** - L'agente raccoglie i dati sul sistema operativo, inclusi nome host, tempo di attività, sapore del sistema operativo e altri dettagli.

## Conclusione
Abbiamo superato il server Web Nginx e Nginx amplifica l'agente di monitoraggio avanzato in modo molto dettagliato. Nginx amplify è abbastanza semplice da configurare e configurare. Inoltre, abbiamo superato le metriche critiche che Nginx amplify può tracciare per **monitorare nginx** . Queste metriche importanti possono essere utilizzate per migliorare la configurazione del server Web NGINX e delle app.
Infine, [Containerize.com][7] è in un processo coerente di post sul blog su altri ultimi prodotti open source. Pertanto, resta in contatto con questa categoria [Solution Solution Solution Web][8] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Come utilizzare nginx come bilanciamento del carico per l'applicazione][9]
  * [Come configurare e configurare Nginx come proxy inverso][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
