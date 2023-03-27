---
title: "Come eseguire il monitoraggio delle applicazioni Web con Statping" 
seoTitle: "Come eseguire il monitoraggio delle applicazioni Web con Statping" 
description: "Statting è uno dei migliori strumenti di monitoraggio del sito Web che consente di monitorare tutti i servizi. Render Beautiful Status Page per i servizi di vetrina Uptime." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Monitorare automaticamente i tuoi siti Web, applicazioni Web, API con strumenti di monitoraggio gratuiti e mostrare i servizi di uptime con un sistema di pagina di stato open source." 
url: /it/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

Monitora automaticamente i tuoi siti Web, applicazioni Web, API con strumenti di monitoraggio gratuiti e mostra i servizi di uptime con un sistema di pagina di stato open source.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Monitoraggio delle applicazioni Web">}}

Statting è un **software di pagina di stato open source** e uno dei migliori strumenti di monitoraggio del sito Web**. Utilizza anche per il monitoraggio di servizi come servizi HTTP, TCP, UDP, ICMP e GRPC. Stamping recupera automaticamente i servizi, monitorali e rendering una bella pagina di stato. È multipiattaforma e puoi installarlo su sistemi operativi Liunx, Mac e Windows. Inoltre, consente di utilizzare il sistema di database MySQL, Postgres o SQLite per la memorizzazione di informazioni. Inoltre, viene fornito con applicazioni mobili fuori dagli schemi per i dispositivi iPhone e Android.
Diamo un'occhiata alle caratteristiche fondamentali delle stamping.
* **Monitoraggio dei servizi** - STATPING ti consente di tracciare facilmente tutti i servizi HTTP, TCP, UDP, GRPC e ICMP.
* **Notifiche** -Stating supporta la maggior parte delle principali applicazioni di terze parti per le notifiche di ricezione.
* **App mobile** - Usa l'app gratuita per i dispositivi iPhone e Android e gestisci tutto in viaggio.
* **OAuth Authenticatio** N - Supporta l'autenticazione OAuth per servizi popolari come Github, Google, Slack e Provider OpenID personalizzato. Usa questa funzione e aumenta la sicurezza.
Tratteremo i seguenti argomenti in questo tutorial.
  * [Installazione su Linux][1]
  * [Configura SystemD Service][2]
  * [Crea servizio per il monitoraggio][3]
  * [Conclusione][4]

## Installazione su Linux {#Installing}

Esegui il comando sotto per l'installazione di Statping.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Configurare il servizio SystemD {#Configure}

La configurazione di un servizio SystemD è un modo eccellente per garantire che il server Statping possa riavviare automaticamente quando necessario. Per creare un servizio SystemD, seguire i passaggi seguenti.
  * Innanzitutto, esegui il comando sotto per creare un nuovo file.
```
sudo nano /etc/systemd/system/statping.service
```
  * Copia sotto il codice e incolla in esso.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Infine, utilizzare i comandi di seguito per abilitare e avviare il servizio SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Crea un servizio per il monitoraggio {#Create}

  * Apri il browser, inserisci l'URL per accedere all'installazione di statping.
  * Fare clic sul collegamento Servizio in Top Navigation. Ti mostrerà la pagina dei servizi che assomiglia a uno.

{{< figure align=center src="images/statping-dashboard.png" alt="Elenco del monitoraggio del servizio Web">}}

  * Fare clic sul pulsante Crea per aggiungere un nuovo servizio per il monitoraggio. Riempire i campi richiesti come nome del servizio, tipo di servizio, intervallo di controllo, endpoint di servizio (URL) ecc.

## Conclusione {#Conclusione}

Abbiamo imparato a conoscere Statping, come installarlo su Linux e come creare un servizio SystemD in questo tutorial. Inoltre, abbiamo creato un nuovo servizio per monitorare e conoscere diverse funzionalità. Speriamo che questa guida ti aiuterà a iniziare a utilizzare le stamping per l'esecuzione di **Monitoraggio del servizio Web**e**Monitoraggio delle applicazioni Web** .
Infine, [ **Containerize.com**][5] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, resta in contatto con questa categoria [**Status Page** ][6] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
* [ **top 5 software di stato di stato open source per 2020** ][7]
* [ **STATPING** ][8]
* [ **Cachet** ][9]
* [ **Monitor** ][10]
* [ **soggiorno** ][11]
* [ **Upptime** ][12]
* [ **statusfy** ][13]



[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
