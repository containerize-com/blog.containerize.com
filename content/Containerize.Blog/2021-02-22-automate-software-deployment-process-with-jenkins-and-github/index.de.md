---
title: "Kontinuierliche Integration und kontinuierliche Bereitstellung vom Quellungssteuerserver" 
seoTitle: "Kontinuierliche Integration und kontinuierliche Bereitstellung vom Quellungssteuerserver" 
description: "Das kostenlose Bereitstellungstool hilft Entwicklungsteams bei der Automatisierung von Workflows von Software -Zustellungen. Erstellen, testen Sie schnell, Software mit Jenkins und Github -Repository bereitet." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Automatisieren Sie Entwicklungsworkflows mit kostenlosen Bereitstellungstool. Wir werden lernen, wie Sie CI/CD mit Jenkins Automation Server und GitHub für die Softwarebereitstellung einrichten." 
url: /de/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Automatisieren Sie Entwicklungsworkflows mit kostenlosen Bereitstellungstool. Wir werden lernen, wie Sie CI/CD mit Jenkins Automation Server und GitHub für die Softwarebereitstellung einrichten.

{{< figure align=center src="images/ci-cd-post.png" alt="Kontinuierliche Integration und kontinuierliche Bereitstellung">}}

Entwicklungsteams verwenden verschiedene Methoden für die Softwarebereitstellung wie FTP, den Code aus dem Repository und vieles mehr. Alle diese Methoden werden manuell durchgeführt und erfordern viel Aufwand. Wir können sehen, dass mehr Teams agile Methodik für die Softwareentwicklung folgen. Sie veröffentlichen also häufig neue Funktionen und Fehlerbehebungen. Die Automatisierung von Workflows der Software -Lieferung hilft daher den Teams, neue Versionen schnell und ohne Fehler zu starten. Wir werden lernen, wie man **CI/CD mit Jenkins** und GitHub verwendet, um den Software -Zustellungsprozess zu automatisieren. Wir werden die folgenden Abschnitte in diesem Artikel behandeln.
* [ **Was ist Jenkins?** ][1]
* [ **Kontinuierliche Integration** ][2]
* [ **kontinuierliche Bereitstellung** ][3]
* [ **Konfigurieren Sie Jenkins** ][4]
* [ **Jenkins Job erstellen** ][5]

## Was ist Jenkins? {#Jenkins}

**Jenkins **ist ein leistungsstarkes** kostenloser Bereitstellungstool **zum automatischen Zustellung des Software -Zustellung. Es ist ein Open -Source -Automatisierungsserver zum Erstellen, Testen und Bereitstellungen. Jenkins verwendet Master-Slave-Architektur. Auf diese Weise können Software -Teams mehrere Builds und Tests für Software gleichzeitig ausführen. Darüber hinaus sind viele Plugins verfügbar und Teams können sie bei Bedarf verwenden. Sie können die Seite [** Jenkins "**][6] für weitere Informationen und Installation besuchen. Darüber hinaus finden Sie Quellcode bei Jenkins [** Github**][7] Repository.

## Kontinuierliche Integration {#CI}

**Continuous Integration** ist eine Entwicklungspraxis, in der Entwickler den Code häufig in ein gemeinsam genutztes Repository integrieren müssen. Jede Integration/COSE -PUSCH in das Repository kann durch automatisierte Build und Tests überprüft werden. Es ermöglicht Entwicklern auch, Probleme im Code leicht zu identifizieren.

## Kontinuierliche Bereitstellung {#CD}

**Continuous Bereitstellung** ist der nächste Schritt nach der kontinuierlichen Integration. Es würde es Teams ermöglichen, Code auf dem Server kontinuierlich bereitzustellen. Darüber hinaus hilft es Entwicklern, sich wiederholende Aufgaben zu reduzieren und die Beweglichkeit zu erhöhen.

## Konfigurieren Sie Jenkins {#Configure}

Folgen Sie den folgenden Schritt -für -Schritt -Richtlinien für die Konfiguration in Jenkins.
  * Öffnen Sie Ihre Jenkins -Website und loggen Sie sich an.
  * Installieren Sie das Plugin "Over SSH". Sie können es durchsuchen, indem Sie navigieren, um „Jenkins verwalten → Plugins verwalten → verfügbar“.
  * Generieren Sie den SSH -Schlüssel auf Build Server als Benutzer „Jenkins“, wie unten gezeigt.
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
  * Stellen Sie mit SSH eine Verbindung zum Ziel-/Bereitstellungsserver her. Führen Sie den Befehl unten aus und fügen Sie den Pub -Dateiinhalt auf den Zielserver ein.
```
$ cd .ssh
$ nano authorized_keys
```
  * Navigieren Sie, um „Jenkins → System konfigurieren → über SSH veröffentlichen“.
  * Fügen Sie die SSH -Taste hinzu, indem Sie entweder den Dateipfad suchen, oder fügen Sie denselben Inhalt wie für den Bereitstellungsserver ein.
  * Fügen Sie einen SSH -Server hinzu, indem Sie auf die Schaltfläche "SSH -Server" auf die Schaltfläche "Hinzufügen" klicken.
  * Geben Sie den Namen, den Hostnamen, den Benutzernamen und das Remote -Verzeichnis für den Bereitstellungs-/Zielserver ein.
  * Klicken Sie auf die Schaltfläche Testkonfiguration, um sicherzustellen, dass Jenkins eine Verbindung zum Bereitstellungsserver herstellen kann.
  * Klicken Sie schließlich auf die Schaltfläche Speichern, um Informationen zu speichern.

## Erstellen Sie Jenkins Job {#Create}

Sie können diese Schritte verwenden, um Jenkins Job zu erstellen.
  * Öffnen Sie Jenkins Dashboard und klicken Sie auf die Schaltfläche „Neue Artikeln“.
  * Geben Sie den Projektnamen ein und wählen Sie "Freestyle Job".
  * GitHub Repository -URL unter "Konfigurationsfenster" eingeben.
  * Überprüfen Sie im Abschnitt "Umgebungsumgebung" diese Optionen "Arbeitsbereich vor dem Erstellen löschen" und "Dateien senden oder Befehle nach SSH nach dem Build -Ausführen ausführen".
  * Geben Sie den Namen, die Quelldateien und das Remote -Verzeichnis in der Build -Umgebung ein.
  * Speichern Sie den Job und bauen Sie ihn auf.
  * Stellen Sie eine Verbindung zum Bereitstellungsserver her und stellen Sie sicher, dass der Code vorhanden ist.

## Abschluss
Wir haben in diesem Artikel den **Jenkins -Server**, **Continuous Integration** und **Continuous Deployment** besprochen. Wir haben auch gelernt, wie man das**Free Deployment Tool** konfiguriert und mit GitHub einen Jenkins -Job für die Bereitstellung erstellt. Das kostenlose CI/CD -Tool ermöglicht es dem Entwicklungsteam, Software -Bereitstellungsworkflows zu automatisieren und sich auf wichtige Jobs zu konzentrieren. Wir werden in den kommenden Beiträgen andere Bereitstellungswerkzeuge abdecken.
Schließlich veröffentlichen [ **containerize.com**][8] Artikel zu weiteren Open -Source -Bereitstellungswerkzeugen. Bitte bleiben Sie in Kontakt mit [**Bereitstellungswerkzeugen** ][9] Kategorie für regelmäßige Aktualisierungen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
* **[Jenkins][6]** 
* [ **Drohne** ][10]
* [ **Deploymer** ][11]
* [ **Capistrano** ][12]
* [ **Rancher** ][13]
* [ **Concourse** ][14]
* [ **Ansible** ][15]
* [ **GOCD** ][16]
* [ **Top 5 Open Source -Bereitstellungswerkzeuge in 2021** ][17]
* [ **Automatisieren Sie die PHP -Anwendungsbereitstellung mit Deploymer** ][18]



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
