---
title: "Come automatizzare il monitoraggio dell'applicazione Web nella cache" 
seoTitle: "Come automatizzare il monitoraggio dell'applicazione Web nella cache" 
description: "La cache aiuta a monitorare tutti i tuoi servizi e avvisare istantaneamente gli abbonati. Questo articolo riguarda l'integrazione del plug-in di terze parti per automatizzare il monitoraggio." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "La pagina dello stato della cache consente alle aziende di ricevere notifiche istantanee sui tempi di inattività del servizio. Impareremo come automatizzare il monitoraggio delle applicazioni Web nella cache." 
url: /it/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Pagina di stato della cache consente alle aziende di ricevere notifiche istantanee sui tempi di inattività del servizio. Impareremo come automatizzare il monitoraggio delle applicazioni Web nella cache.

{{< figure align=center src="images/cachet-monitor.png" alt="Monitoraggio delle applicazioni Web">}}

Il monitoraggio di applicazioni e servizi è una parte molto importante del business online. Il tuo sito Web esegue 24x7 e puoi sbagliare in qualsiasi momento. Non si può sapere che nessuno dei due sito funziona o no fino a quando non lo visiti. Inoltre, i clienti non avranno informazioni sul problema. Possono contattare il tuo team di supporto per i tempi di inattività del servizio. Inoltre, ciò potrebbe portare i tuoi clienti a rimanere delusi. Tuttavia, è possibile ridurre i tempi di inattività del servizio configurando il sistema di pagina di stato. Il sistema di pagina di stato monitorerà tutti i tuoi servizi tutto il giorno e invierà immediatamente notifiche al tuo team e ai clienti. Ciò ti consentirà di adottare rapidi passi per risolvere il problema e i clienti rimarranno aggiornati sui progressi. In questo post sul blog, avrai imparare a integrare la libreria di terze parti con**Cachet**per**Automatizzare il monitoraggio**.
  * [Requisiti][1]
  * [Plug -in di monitoraggio di configurazione][2]
  * [Creazione di servizi Linux][3]
  * [Conclusione][4]

Requisiti ##  {#Requirements}
  * Installa l'ultima versione della cache.
  * Famoso con i servizi Linux.

Plug -in di monitoraggio di configurazione ##  {#plugin}
Di seguito sono riportati i passaggi per l'installazione e la configurazione del plug -in per il monitoraggio su Ubuntu.
  * Scarica binario da [pagina di rilascio][5].
  * Rinomina il file in cachetto-monitor.
  * Rendi eseguibile il file con il comando.
```
sudo chmod +x cachet-monitor
```
  * Metti l'eseguibile in una directory del percorso, in modo da poter accedervi direttamente tramite terminale. Quindi, ti suggerisco di muoverti sotto**/usr/local/bin**.
  * Crea un file config.json eseguendo il comando seguente.
```
sudo nano config.json
```
  * Copia il codice seguente in esso e salva il file.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check**failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Ora, prova la tua configurazione con questo comando.
```
cachet-monitor -c config.json
```
  * Se tutto funziona bene, passa alla sezione successiva e crea un servizio Linux.

## Creazione del servizio Linux   {#Service}
Di seguito sono riportati i passaggi per creare e avviare un servizio Linux per automatizzare il processo di monitoraggio.
* Crea un servizio**File cachet-monitor.service**.
```
sudo nano cachet-monitor.service
```
  * Copia il codice seguente in esso e salva il file.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Aggiorna la configurazione SystemD eseguendo il comando.
```
sudo systemctl daemon-reload
```
  * Abilita il servizio di cachetto-monitor eseguendo il comando, in modo che possa caricare all'avvio del sistema.
```
sudo systemctl enable cachet-monitor.service
```

## conclusioni   {#conclusion}
La cache A è gratuita e**Pagina di stato open source**Sistema. Tuttavia, non fornisce funzionalità fuori dalla scatola per**Monitoraggio delle applicazioni Web**. Invece, ha una potente API REST che può essere utilizzata per eseguire azioni come incidenti, componenti, gruppi e molti altri. In questo articolo, abbiamo utilizzato il plug-in di terze parti per automatizzare il monitoraggio dell'applicazione nella cache. Soprattutto, puoi sviluppare il tuo plug -in o utilizzare qualsiasi altro plug -in esistente per fare il lavoro.
Inoltre, [containerize.com][6] è sulla buona strada per migliorare lo stack di prodotti open source in più lingue e framework. Per aggiornamenti regolari, rimanete sintonizzati su [Pagina di stato][7] per articoli più interessanti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Migliori sistemi di pagina di stato open source][8]
  * [Cachet - Software di stato di stato gratuito e open source][9]
  * [Top 5 Software di stato di stato open source per 2020][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
