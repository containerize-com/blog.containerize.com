---
title: "So einrichten" 
seoTitle: "So einrichten" 
description: "Restic ist eine schnelle, sichere und eine der besten Open-Source-Backup-Software. Es unterstützt AWS S3, Microsoft Azure, Google Cloud und andere Backend -Optionen." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Nehmen Sie die Backup mit Open -Source -Backup -Software und speichern Sie sie lokal oder auf externen Backends. Restic ist plattformübergreifend und unterstützt mehrere Speichertypen." 
url: /de/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Backup mit Open -Source -Backup -Software und speichern Sie sie lokal oder auf externen Backends. Restic ist plattformübergreifend und unterstützt mehrere Speichertypen.

{{< figure align=center src="images/restic-post-banner.png" alt="Open Source Backup -Software">}}

Ein Backup -System ist sowohl für Unternehmen als auch für Einzelpersonen sehr wichtig. Daten können aus verschiedenen Gründen wie Cyberangriff, Systemausfall, versehentlichem Entfernen und vielem mehr verloren gehen. Sie sollten eine gute Sicherungsstrategie haben, damit Sie Ihre Daten schnell wiederherstellen können. In dieser Anleitung wird angezeigt, wie Sie die ** Open Source Backup -Software ** RESTIC auf Ihrem Ubuntu -Server installieren und verwenden.
Wir haben die folgenden Abschnitte in diesem Tutorial behandelt.
  *[** Voraussetzungen **][1]
  *[** Was ist restlich? **][2]
  *[** restliche Installation **][3]
  *[** restliche Konfiguration **][4]
  *[** Alternativen zu Restic **][5]
  *** [Schlussfolgerung][6] **

## Voraussetzungen {#Voraussetzungen}
Das Restic Backup -Softwareprogramm unterstützt die drei Hauptbetriebssysteme Linux, MacOS und Windows. Vor der Installation ** restlicher Sicherung ** sollten Sie die folgenden Systemanforderungen erfüllen.
  * Maschinen- oder Desktop -System mit Ubuntu -Betriebssystem, in dem die Daten untergebracht sind, die gesichert werden sollen
  * Eine neueste Ubuntu -Serverinstanz
  * SSH -Schlüsselauthentifizierung zwischen dem beiden Client und dem Server konfiguriert
  * Nicht-Root-Benutzer mit Sudo-Berechtigungen
Lassen Sie uns mit diesen Teilen in der Hand bewegen und uns an die Arbeit machen.

## Was ist Restic? {#Restisch}
[** restic **][7] ist ein fantastisches ** Open Source -Backup -Tool **. Es ist ein kostenloses Backup -Dienstprogramm **, das schnell, sicher und effizient ist. Es handelt sich um ein plattformübergreifendes Backup-Programm, sodass es unter Linux, BSD, Mac OS X und Windows ausgeführt wird. RESTIC Best Open Source Backup -Software ist einfach auszuführen und benötigt keinen Server oder eine komplizierte Konfiguration. Es erstellt eine Sicherung der geänderten Daten und ermöglicht es Benutzern, diese bei Bedarf wiederherzustellen. Darüber hinaus bietet es eine Vielzahl von Speicheroptionen, einschließlich Selbst gehosteter und Internetspeicher. Darüber hinaus verwendet der restliche Open -Source -Self -Hosted -Cloud -Speicher robuste kryptografische Techniken, um Ihre Daten zu schützen.
Restic ist kein einfaches Dateikopierprogramm. Es basiert in erster Linie auf zwei Konzepten: Schnappschüsse und Repositorys. ** RESTIC ** Open Source Backup -Lösung speichert die Informationen als Schnappschuss, der dann in einem Repository gespeichert wird. Es ist in der Go -Programmiersprache geschrieben. RESTIC GO -basiertes Backup -Dienstprogramm und Open -Source -Backup -Anwendung funktioniert reibungslos mit vielen Cloud- und lokalen Backend -Speichersystemen. Der Quellcode der restlichen Open -Source -Dateisicherungssoftware ist unter [** Github **][8] verfügbar. Sie können jedoch detailliert [** Dokumentation **][9] für die Installation und Verwendung finden.
Restic Self Hosted Cloud Backup unterstützt die folgenden Backends für den Sicherungsspeicher.
  * Lokales Verzeichnis
  * SFTP -Server (über SSH)
  * Restserver
  * AWS S3
  * Minio -Server
  * Wasabi
  * Alibaba Cloud
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob -Speicher
  * Google Cloud -Speicher
Sie können [** rclone **][10] für verschiedene Backends verwenden, zusätzlich zu den oben aufgeführten.

## restliche Installation {#installation}
Es gibt verschiedene Möglichkeiten, restlich bester selbst gehostete Cloud -Speicher auf Ihrem Ubuntu -Betriebssystem zu installieren. Wir werden die Installation des restlichen selbsthosteten Dateispeichers mithilfe von Ubuntu -Paket, Docker und Quellcode abdecken.

### Installieren mit Paket
  * Führen Sie den folgenden Befehl aus, um den restlichen Open -Source -Backup -Server unter Ubuntu -Betriebssystem zu installieren.
```
$ sudo apt-get install restic
```

### Installieren mit Docker
  * Holen Sie sich das restliche Bild von DockerHub.
```
$ docker pull restic/restic
```

### Installieren mit der Quelle
  * Zuerst müssen Sie die Go -Programmiersprache installieren, um Restic aus der Quelle einzurichten. Sie können die offizielle [** Golang -Website **][11] besuchen, um die Anweisungen zu installieren.
  * Führen Sie als nächstes die folgenden Befehle aus, um die restliche inkrementelle Sicherung zu installieren.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Durch Angeben von Target OS im Befehl können Sie schnell Restic für alle unterstützten Plattformen kompilieren. Hier sind einige Beispiele.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## restliche Konfiguration {#Configuration}
Wie wir bereits erwähnt haben, basiert das restliche Open -Source -Backup -System auf Schnappschüssen und Repositorys für die Sicherung. Schauen wir uns an, wie Sie ein Repository einrichten, einen Schnappschuss machen und dann das Backup wiederherstellen können.

### Repository erstellen
  * Führen Sie den folgenden Befehl aus, um das Repository zu initialisieren. Sie müssen auch ein Passwort für das Repository festlegen.
```
$ restic init --repo /tmp/
```

### Sicherungsdaten in ein lokales Verzeichnis
  * Im ersten Schritt haben wir ein Repository zum Speichern der Daten erstellt. Jetzt werden wir dem Repository Daten zur Sicherung hinzufügen. Führen Sie den folgenden Befehl aus.
```
$ restic --repo /tmp/backup backup ~/work
```

### Wiederherstellen Sie das Backup wieder
  * Der Befehl restore stellt Dateien und Verzeichnisse wieder her. Die Dateien werden nicht an ihren ursprünglichen Speicherort wiederhergestellt, während sie Restic Open Source Cloud -Backup verwenden. Sie müssen einen Zielort auswählen, damit die Dateien durch Restic wiederhergestellt werden können.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Sie können jedoch den neuesten Snapshot wiederherstellen, ohne die Snapshot -ID anzugeben. Sie müssen den neuesten Parameter im Befehl wie unten hinzufügen.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Arbeit mit Schnappschüssen
In diesem Abschnitt werden wir uns einige der Funktionen der Schnappschüsse ansehen.
  * Führen Sie den folgenden Befehl aus, um die Snaphosts aufzulisten.
```
$ restic snapshots -r /tmp/backup
```
  * Sie können zwei Schnappschüsse mit dem folgenden Befehl vergleichen.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Möglicherweise müssen Sie ein altes Backup löschen, um den Speicherplatz freizugeben. Um einen Schnappschuss zu entfernen, führen Sie den Befehl unten aus.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Alternativen zur Restlichkeit
Restic ist die beliebteste Open -Source -Backup -Softwareanwendung und garantiert die Vertraulichkeit und Integrität Ihrer wichtigen Dateien. Im Folgenden finden Sie die beliebtesten Alternativen und Top -Konkurrenten des Tools zur Sicherung von restlichen Daten.
  * Amazon Gletscher
  * Reproduzieren
  * Runrestic
  * Afi
  * Rainyday Backup
  * Borg
  * Veeam Backup
  * AWS Storage Gateway
  * Zusammensetzung

## Abschluss
In diesem Artikel haben wir die restliche ** kostenlose Open -Source -Backup -Software ** behandelt. Wir haben auch mehrere Installationstechniken sowie die Erstellung eines Backups und die Wiederherstellung der Backups besprochen. Es gibt viele andere Formen des Datensicherungsspeichers und wir haben gerade einen in diesem Artikel angesprochen. Die verbleibenden Backend -Speichertypen werden in zukünftigen Veröffentlichungen behandelt. Wir hoffen, dass dieses Tutorial als Ausgangspunkt für Sie für Sie das restliche Best -Source -Backup -Tool für die Einnahme und Wiederherstellung von Backups dient.
Schließlich befindet sich [** containerize.com **][12] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher bleiben Sie mit dieser Kategorie [** Backup -Software **][13] in Kontakt, um die neuesten Updates zu erhalten.
_Was sind Ihre favorisierste kostenlose und Open -Source -Sicherungssoftware?. Haben Sie Fragen zur Open -Source -Backup -Software?

## Erkunden:
Wir haben auch mehrere andere verwandte Informationen von OSS Watch:
  * [Top 5 Open Source Cloud Storage -Software in 2021][15]
  * [So installieren Sie NextCloud mit Apache auf Ubuntu Server][16]
  * [Installieren und konfigurieren OwnCloud mit Apache auf Ubuntu][17]
  * [So installieren Sie die Pydio -Dateifreigabe und die Synchronisierungsplattform auf Ubuntu][18]
  * [NSQ gegen Kafka | Was sind die wichtigsten Unterschiede?][19]
  * [Nextcloud gegen OwnCloud | Was sind die Unterschiede?][20]
  * [Beste Open -Source -Cloud -Speicher- und Dateifreigabe -Software][21]

  
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
