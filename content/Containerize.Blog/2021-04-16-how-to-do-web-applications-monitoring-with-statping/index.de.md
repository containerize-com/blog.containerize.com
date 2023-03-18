---
title: "So führen Sie die Überwachung von Webanwendungen mit Stating durch" 
seoTitle: "So führen Sie die Überwachung von Webanwendungen mit Stating durch" 
description: "Stating ist eines der besten Website -Überwachungstools, mit denen Sie alle Dienste überwachen können. Rendern Sie die schöne Statusseite für die Verfügbarkeit von Showcase -Diensten." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Überwachen Sie Ihre Websites, Webanwendungen, APIs automatisch mit kostenlosen Überwachungstools und präsentieren Sie die Verfügbarkeit von Diensten mit einem Open -Source -Status -Seitensystem." 
url: /de/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Überwachen Sie Ihre Websites, Webanwendungen, APIs automatisch mit kostenlosen Überwachungstools und präsentieren Sie die Verfügbarkeit von Diensten mit einem Open -Source -Status -Seitensystem.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Webanwendungen Überwachung">}}

Stating ist eine ** Open -Source -Status -Seiten -Software ** und ein der besten Website -Überwachungstool **. Es wird auch zur Überwachung von Diensten wie HTTP-, TCP-, UDP-, ICMP- und GRPC -Diensten verwendet. Stating holt automatisch die Dienste ab, überwacht sie und macht die schöne Statusseite. Es ist plattformübergreifend und Sie können es auf LIUNX-, MAC- und Windows-Betriebssystemen installieren. Darüber hinaus ermöglicht es die Verwendung von MySQL, Postgres oder SQLite -Datenbanksystem zum Speichern von Informationen. Darüber hinaus wird es mit mobilen Box -Anwendungen für iPhone- und Android -Geräte ausgestattet.
Schauen wir uns die Kernfunktionen der Stating an.
  *** Dienste Überwachung ** - Mit Stating können Sie alle HTTP-, TCP-, UDP-, GRPC- und ICMP -Dienste problemlos verfolgen.
  *** Benachrichtigungen **-Stating unterstützt die meisten wichtigsten Anträge von Drittanbietern für den Empfang von Benachrichtigungen.
  *** Mobile App ** - Verwenden Sie kostenlose App für iPhone- und Android -Geräte und verwalten Sie alles unterwegs.
  *** OAuth Authenticatio ** n - unterstützt die OAuth -Authentifizierung für beliebte Dienste wie Github, Google, Slack und Custom OpenID -Anbieter. Verwenden Sie diese Funktion und erhöhen Sie die Sicherheit.
Wir werden die folgenden Themen in diesem Tutorial behandeln.
  * [Installation unter Linux] [1]
  * [Systemd Service konfigurieren] [2]
  * [Dienst für die Überwachung erstellen] [3]
  * [Schlussfolgerung] [4]

## Installation auf Linux {#installing}
Ausführen unten für die Stating -Installation.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Konfigurieren von Systemd Service {#Configure}
Das Einrichten eines Systemd -Dienstes ist eine hervorragende Möglichkeit, um sicherzustellen, dass Ihr Stating -Server bei Bedarf automatisch neu starten kann. Befolgen Sie die folgenden Schritte, um einen Systemd -Dienst zu erstellen.
  * Führen Sie zunächst den Befehl unten aus, um eine neue Datei zu erstellen.
```
sudo nano /etc/systemd/system/statping.service
```
  * Kopieren Sie den folgenden Code und fügen Sie es ein.
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
  * Verwenden Sie schließlich die folgenden Befehle, um den Systemd Service zu aktivieren und zu starten.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Erstellen des Dienstes zur Überwachung {#create}
  * Öffnen Sie Ihren Browser und geben Sie die URL ein, um sich bei Ihrer Stating -Installation anzumelden.
  * Klicken Sie auf den Link der Dienste in der Top -Navigation. Es zeigt Ihnen die Serviceseite, die wie unter einem aussieht.

{{< figure align=center src="images/statping-dashboard.png" alt="Liste der Webdienstüberwachung">}}

  * Klicken Sie auf die Schaltfläche Erstellen, um einen neuen Service zur Überwachung hinzuzufügen. Füllen Sie die erforderlichen Felder wie Dienstnamen, Service -Typ, Überprüfen Sie das Intervall, den Serviceendpunkt (URL) usw. aus.

## Schlussfolgerung {#Conclusion}
Wir haben über Stating gelernt, wie man es unter Linux installiert und wie man in diesem Tutorial einen Systemd -Dienst erstellt. Darüber hinaus haben wir einen neuen Service erstellt, um Ihnen verschiedene Funktionen zu überwachen und vorzustellen. Wir hoffen, dass dieser Leitfaden Sie dabei unterstützen wird, die Stating für die Durchführung von ** Webdienstüberwachung zu verwenden ** und ** Webanwendungen Überwachung **.
Schließlich befindet sich [** containerize.com **] [5] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher finden Sie in Kontakt mit dieser Kategorie [** Status **] [6] für die neuesten Updates.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[** Top 5 Open Source -Status -Seiten -Software für 2020 **] [7]
  *[** Stating **] [8]
  *[** Cachet **] [9]
  *[** Monitoror **] [10]
  *[** Aufenthalt **] [11]
  *[** UPPTIME **] [12]
  *[** Statusfy **] [13]
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
