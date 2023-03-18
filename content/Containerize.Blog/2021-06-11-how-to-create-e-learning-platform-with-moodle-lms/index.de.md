---
title: "So erstellen Sie eine E-Learning-Website mit Moodle LMS" 
seoTitle: "So erstellen Sie eine E-Learning-Website mit Moodle LMS" 
description: "Moodle LMS ist eine kostenlose und Open-Source-E-Learning-Lösung zum Erstellen einer Online-Lernplattform. Schauen Sie sich den Leitfaden an, um sich damit vertraut zu machen." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Erstellen Sie eine Online-Lernplattform mit Open-Source-E-Learning-Plattform. In diesem Artikel wird erläutert, wie Sie Moodle LMS verwenden, um eine Fernlernweite zu erstellen." 
url: /de/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Erstellen Sie eine Online-Lernplattform mit Open Source E-Learning-Plattform. In diesem Artikel wird erläutert, wie Sie Moodle LMS verwenden, um eine Fernlernweite zu erstellen.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Wir sind seit über einem Jahr von Covid 19 betroffen. Jeder Teil der Welt wurde unter Sperre gestellt. Es wirkt sich negativ auf das Leben und Unternehmen der Menschen auf der ganzen Welt aus. Noch wichtiger ist, dass es einen großen Einfluss auf unser Bildungssystem hat. Bildungseinrichtungen müssen den Übergang zum Online -Lernen durchführen, damit die Schüler ihre Ausbildung bequem von ihren eigenen Häusern fortsetzen können. Ohne eine solide und sichere E-Learning-Plattform ist Online-Lernen unmöglich. In diesem Artikel werden wir uns mit dem ** Moodle Open Source ** -Projekt befassen, mit dem Lehrer und Schüler von überall kommunizieren und lernen können.
Wir werden die folgenden Abschnitte in diesem Artikel abdecken, um die E-Learning-Website ** mit Moodle zu erstellen.
  * [Voraussetzungen] [1]
  * [Was ist Moodle?] [2]
  * [Merkmale von Moodle] [3]
  * [Moodle Installation] [4]
  * [Schlussfolgerung] [5]

## Voraussetzungen {#Voraussetzungen}
Wenn Sie es noch nicht getan haben, müssen Sie die LAMP -Umgebung auf Ihrem Server installieren und konfigurieren.

## Was ist Moodle? {#Was}
[** Moodle **] [6] ist eine freie und Open-Source-E-Learning-Lösung. Moodle steht für modulare objektorientierte dynamische Lernumgebung. Es wurde erstellt, um Pädagogen, Administratoren und Lernenden eine E-Learning-Plattform zu geben, um individuelle Lernumgebungen zu schaffen und zu liefern. Darüber hinaus ist Moodle ein geeignetes ** LMS für Schulen **, Universitäten und professionelle Ausbildungskurse in Unternehmen. Es ist eine der beliebten ** Fernunterricht ** Lösungen, um eine LMS -Website zu erstellen. Darüber hinaus bietet Moodle Lehrern und Schülern reichhaltige Tools und kollaborative Lernumgebungen. Moodle verfügt über eine mobile App für iPhone-, Android- und Windows -Telefone und Tablets. Die mobile App kann von jedem Ort auf der ganzen Welt aus verwendet werden. Dieser ** selbst gehostete LMS ** ist in PHP geschrieben und speichert Daten in MySQL/PostgreSQL-Datenbanken. Es wird mit umfangreichen Dokumentation von Benutzern und Entwickler geliefert. Der gesamte Quellcode ist unter [** Github **] [7] verfügbar. Die Lizenz für diese Open Source ** E-Learning-Lösung ** lautet GPLV3+.

## Merkmale von Moodle {#Features}
Moodle hat viele Funktionen. In diesem Artikel werden wir jedoch einige der folgenden Schlüsselfunktionen durchgehen.
** Kollaborative Tools und Aktivitäten **: Foren, Wikis, Glossare, Datenbankaktivitäten und andere Tools ermöglichen es Benutzern, zusammenzuarbeiten und gemeinsam zu lernen. Eine Gruppe von Elementen in einem Moodle -Kurs wird als Aktivität bezeichnet. Eine Aktivität ist in der Regel etwas, das ein Schüler macht, in dem er oder sie mit anderen Schülern und/oder dem Lehrer interagiert.
** Verfolgen Sie den Fortschritt **: Pädagogen und Schüler können ihre Fortschritte und ihren Abschluss mit einer Vielzahl von Tools zur Verfolgung bestimmter Aktivitäten oder Materialien sowie auf Kursebene verfolgen. Es gibt verschiedene Möglichkeiten, den Fortschritt der Schüler in Moodle wie Noten, Kompetenzen, Aktivitätsabschluss, Kursabschluss, Abzeichen, Kursberichte und Analysen zu verfolgen.
** Plugins -Management **: Mit Plugins können Sie die grundlegenden Funktionen von Moodle durch Hinzufügen neuer Funktionen erweitern. Benutzer können Plugins für eine Vielzahl von Aufgaben hinzufügen, z. B. zusätzliche Aktivitäten, neue Quiz -Fragetypen, neue Berichte, Systemverbinder und vieles mehr. Eine Admin -Schnittstelle kann zum Installieren und Deaktivieren von Plugins verwendet werden.
** Kursmanagement **: Erstellen und Verwalten von Kursen, die eine Vielzahl von Anforderungen erfüllen. Auslernungsklassen, selbstverständliche Klassen, Blended-Kurse und vollständig Online-Kurse sind alles Optionen.
** Peer und Selbsteinschätzung **: Workshops und Umfragen sind eingebaute Aktivitäten, die die Schüler dazu ermutigen, ihre eigene und andere Klassenkameraden als Gruppe zu betrachten, zu nutzen und zu überprüfen.

## Moodle Installation {#Moodle}
Folgen Sie der folgenden Schritt-für-Schritt-Anleitung, um Moodle LMS auf Ubuntu 18.04 zu installieren.
  * Führen Sie zunächst die folgenden Befehle aus, um den DirectLory -Download zu ändern und Moodle herunterzuladen.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Führen Sie die folgenden Befehle aus, die das Datenverzeichnis erstellen und Berechtigungen festlegen.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Erstellen Sie die Nginx -Konfigurationsdatei für die Moodle -Site.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Fügen Sie den folgenden Code hinzu und speichern Sie die Datei.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Erstellen Sie Symlink, um eine neu erstellte Site zu aktivieren.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Starten Sie den Nginx -Webserver neu.
```
sudo systemctl restart nginx
```
  * Öffnen Sie als nächstes Ihren Browser und geben Sie http://example.com ein. Ersetzen Sie "example.com" durch den tatsächlichen Domänennamen oder die IP Ihres Servers.
  * Jetzt können Sie den Installationsassistenten sehen. Wählen Sie eine Sprache aus und klicken Sie auf die nächste Schaltfläche.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Wählen Sie eine Sprache">}}

  * Sie müssen überprüfen und sicherstellen, dass die URL-, das Moodle -Root -Verzeichnis und die Datenverzeichnispfade korrekt sind. Sie können auch den Pfad „Datenverzeichnis“ ändern und es sollte sich für Sicherheit außerhalb des Moodle -Code -Verzeichnisses befinden. Klicken Sie auf die nächste Schaltfläche.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Datenverzeichnispfad setzen">}}

  * Wählen Sie in diesem Schritt einen Datenbanktreiber. Sie können jedoch die bereits ausgewählte Verwendung verwenden und auf die nächste Schaltfläche klicken.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Datenbanktreiber wählen">}}

  * Geben Sie Datenbankeinstellungen wie Datenbankhost, Datenbankname, Datenbankbenutzer, Datenbankkennwort und Tabellenpräfix an. Klicken Sie auf die nächste Schaltfläche.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Datenbankeinstellungen">}}

  * Klicken Sie auf die Schaltfläche Bestätigen, um den Allgemeinen Geschäftsbedingungen zuzustimmen.
  * Sie können eine Liste der erforderlichen PHP -Erweiterungen sehen. Sie müssen jedoch fehlende Add-Ons installieren. Klicken Sie auf die Schaltfläche Weiter, um den nächsten Schritt zu verschieben.
  * Zu diesem Zeitpunkt müssen Sie die Administratordaten ausfüllen, um ein Konto zu erstellen. Klicken Sie auf die Schaltfläche "Profil aktualisieren".
  * Geben Sie Informationen für Ihre Website an, z. B. den vollständigen Site-Namen, einen kurzen Namen für die Site, die Zusammenfassung der FrontPage, die Standardzeitzone und keine E-Mail. Klicken Sie auf die Schaltfläche "Änderungen speichern".
  * Vervollständigen Sie Ihre Site -Registrierung, indem Sie Informationen wie Site -Name, Sprache, Region, E -Mail -Adresse usw. bereitstellen.

## Schlussfolgerung {#Conclusion}
Wir haben in diesem Artikel etwas über Moodle und seine Hauptmerkmale gelernt. Wir haben auch einen Schritt-für-Schritt-Ansatz übernommen, um ** Moodle LMS ** zu erstellen, um die E-Learning-Website ** zu erstellen. Sie können die [** offiziellen Dokumentation **] [8] überprüft, um sich mit verschiedenen Funktionen wie Kursen, der Registrierung von Studenten, der Verfolgung des Fortschritts usw. bequem zu machen. Ich hoffe, Sie haben diesen Beitrag als nützlich für die Erstellung einer LMS -Website gefunden.
Schließlich befindet sich [** containerize.com **] [9] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher bleiben Sie mit dieser Kategorie [** Lernmanagement -System **] [10] in Kontakt, um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[** Open Source LMS Tools **] [11]
  *[** Moodle-E-Learning-System **] [12]
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
