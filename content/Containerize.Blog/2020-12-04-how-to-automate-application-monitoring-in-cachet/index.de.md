---
title: "So automatisieren Sie die Überwachung der Webanwendungen in der Gütesiegel" 
seoTitle: "So automatisieren Sie die Überwachung der Webanwendungen in der Gütesiegel" 
description: "Das Cachet hilft, alle Ihre Dienste zu überwachen und Abonnenten sofort zu benachrichtigen. In diesem Artikel geht es darum, ein Plugin von Drittanbietern zur Automatisierung der Überwachung zu integrieren." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Mit der Cachet -Status -Seite können Unternehmen sofortige Benachrichtigungen über Serviceausfallzeiten erhalten. Wir lernen, wie Sie die Überwachung der Webanwendungen in der Gründung automatisieren." 
url: /de/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

Mit ## Cachet Status -Seite können Unternehmen sofortige Benachrichtigungen über Serviceausfallzeiten erhalten. Wir lernen, wie Sie die Überwachung der Webanwendungen in der Gründung automatisieren.

{{< figure align=center src="images/cachet-monitor.png" alt="Webanwendungsüberwachung">}}

Die Überwachung von Anwendungen und Diensten ist ein sehr wichtiger Bestandteil des Online -Geschäfts. Ihre Website läuft 24x7 und Sie können es jederzeit falsch machen. Sie können nicht wissen, dass entweder die Website funktioniert oder nicht, wenn Sie sie besuchen. Darüber hinaus haben Kunden keine Informationen zu diesem Problem. Sie können sich an Ihr Support -Team für Service -Ausfallzeiten wenden. Darüber hinaus könnte dies dazu führen, dass Ihre Kunden enttäuscht werden. Sie können jedoch die Ausfallzeiten für die Dienstleistung reduzieren, indem Sie Status -Seitensysteme konfigurieren. Das Status -Seitensystem überwacht alle Ihre Dienste rund um die Uhr und sendet sofort Benachrichtigungen an Ihr Team und Ihre Kunden. Auf diese Weise können Sie schnelle Schritte unternehmen, um das Problem zu beheben, und die Kunden werden über den Fortschritt auf dem Laufenden bleiben. In diesem Blog-Beitrag erfahren Sie, wie Sie die Bibliothek von Drittanbietern mit ** Cachet ** für ** Automatisierung der Überwachung ** integrieren.
  * [Anforderungen][1]
  * [Setup Monitoring Plugin][2]
  * [Linux -Dienst erstellen][3]
  * [Schlussfolgerung][4]

## Anforderungen {#Requirements}
  * Installieren Sie die neueste Version des Cachets.
  * Mit den Linux -Diensten vertraut.

## Setup Monitoring Plugin {#Plugin}
Im Folgenden finden Sie Schritte zur Installation und Konfiguration des Plugins zur Überwachung auf Ubuntu.
  * Download Binary von [Release -Seite][5].
  * Benennen Sie die Datei in den Cachet-Monitor um.
  * Machen Sie die Datei mit dem Befehl ausführbar.
```
sudo chmod +x cachet-monitor
```
  * Stellen Sie die ausführbare Datei in ein Pfadverzeichnis ein, damit Sie über Terminal direkt darauf zugreifen können. Ich schlage also vor, Sie bewegen sich unter **/usr/local/bin **.
  * Erstellen Sie eine config.json -Datei, indem Sie den folgenden Befehl ausführen.
```
sudo nano config.json
```
  * Kopieren Sie den folgenden Code ein und speichern Sie die Datei.
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
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
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
  * Testen Sie nun Ihre Konfiguration mit diesem Befehl.
```
cachet-monitor -c config.json
```
  * Wenn alles gut funktioniert, wechseln Sie zum nächsten Abschnitt und erstellen Sie einen Linux -Dienst.

## Linux -Dienst erstellen {#Service}
Im Folgenden finden Sie Schritte zum Erstellen und Starten eines Linux -Dienstes zur Automatisierung des Überwachungsprozesses.
  *Erstellen Sie einen Dienst ** Cachet-Monitor.Service ** Datei.
```
sudo nano cachet-monitor.service
```
  * Kopieren Sie den folgenden Code ein und speichern Sie die Datei.
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
  * Aktualisieren Sie die Systemd -Konfiguration, indem Sie den Befehl ausführen.
```
sudo systemctl daemon-reload
```
  * Aktivieren Sie den Cachet-Monitor-Service, indem Sie den Befehl ausführen, damit er das Systemstart laden kann.
```
sudo systemctl enable cachet-monitor.service
```

## Schlussfolgerung {#Conclusion}
Das Cachet A ist kostenlos und ** Open Source Status -Seite ** System. Es wird jedoch nicht außerhalb der Box -Funktion für die Überwachung der Webanwendungen ** veröffentlicht. Stattdessen verfügt es über eine leistungsstarke REST -API, mit der Aktionen wie Vorfälle, Komponenten, Gruppen und vieles mehr durchgeführt werden können. In diesem Artikel haben wir das Drittanbieter-Plugin verwendet, um die Anwendungsüberwachung in der Gründung zu automatisieren. Vor allem können Sie Ihr eigenes Plugin entwickeln oder ein anderes vorhandenes Plugin verwenden, um den Job zu erledigen.
Darüber hinaus ist [Containerize.com][6] auf dem Weg, den Stapel von Open -Source -Produkten in mehreren Sprachen und Frameworks zu verbessern. Für reguläre Updates finden Sie bitte auf [Status -Seite][7] Kategorie für interessantere Artikel.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Best Open Source Status Page Systems][8]
  * [Cachet - kostenlose und Open -Source -Status -Seiten -Software][9]
  * [Top 5 Open -Source -Status -Seiten -Software für 2020][10]

  
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
