---
title: "So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu" 
seoTitle: "So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu" 
description: "ouscloud ist Open-Source-Client-Server-Software zum Erstellen von Dateihosting-Diensten. In diesem Tutorial lernen wir, wie Sie OwnCloud auf Ubuntu installieren und konfigurieren" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud ist eine Open-Source-Sammlung von Client-Server-Software zum Erstellen von Dateihosting-Servern. In diesem Tutorial geht es darum, wie man OwnCloud auf Ubuntu konfiguriert." 
url: /de/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## owncloud ist eine Open-Source-Sammlung von Client-Server-Software zum Erstellen von Dateihosting-Servern. In diesem Tutorial geht es darum, wie man OwnCloud auf Ubuntu konfiguriert.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Überblick**
OwnCloud ist kostenlos und beliebte robuste Open -Source -Unternehmenswebanwendung, die in PHP geschrieben wurden und für die Datensynchronisation und Dateifreigabe verwendet werden. Außerdem können Sie Datendateien, Kontakte, Kalender, Listen und vieles mehr einfach verwalten. Es ist eine großartige Alternative zu den beliebtesten Cloud -Plattformen wie Google Drive, Dropbox, iCloud und anderen Cloud -Speicherdiensten. Im Gegensatz zu den anderen Cloud -Speicherdiensten kann OwnCloud Self -Hosted eigene Host -Cloud erstellen.
OwnCloud ist eine private Cloud -Software von Open Source, die Datenzugriff über Weboberfläche zum Erstellen einer privaten Cloud bietet. Es ermöglicht es Ihnen, einen eigenen Server für die Freigabe von Dateien zu erstellen, auf dem Sie Kalender, Archive, Bilder, Aufnahmen, Aufgaben, Adressbücher mit Lesezeichen, ähnlich wie bei Dropbox und Google Drive, einfach anzeigen und synchronisieren können. Es bietet auch Optionen zum Synchronisieren und Freigeben von Daten über Geräte, die alle unter Ihrer Kontrolle sind. Installieren und Konfigurieren von OwnCloud unterstützt Ihre Daten, die für Desktop -Clients sowie mobile App -Geräte synchronisiert sind. Darüber hinaus können Sie Benutzer- und Gruppenzugriffsbeschränkungen für Dateien pro Benutzer problemlos mit OwnCloud auf Ubuntu implementieren. Opper Source Personal Storage Server ist eine Cross -Plattform -Anwendung und kann auf allen beliebten Betriebssystemen installiert werden.
In diesem Tutorial können Sie OwnCloud einrichten und OwnCloud auf Ubuntu LTS -Systemen konfigurieren.
  * Lampenserver installieren
  * OwnCloud herunterladen
  * Erstellen Sie die MySQL -Datenbank und der Benutzer
  * Installieren Sie OwnCloud
  * Was sind die besten Alternativen zu OwnCloud?
  * Abschluss

## Schritt 1: Lampenserver installieren
Um den eigenen Cloud -Server und das Erstellen einer privaten Cloud einzurichten, müssen wir zunächst einen laufenden Lampenserver einrichten. Wenn Sie bereits einen Lampenstapel installiert und ausgeführt haben, überspringen Sie diesen Schritt an. Verwenden Sie die folgenden Befehle, um die Lampe auf Ihrem Ubuntu -System einzurichten.

### PHP installieren
Sie können PHP 5.6 oder höhere Version auf Ihrem Ubuntu- oder Debian -System installieren, indem Sie Befehle ausführen:
sudo apt-get installieren Sie Python-Software-Properties
sudo add-apt-Repository PPA: Ondrej/PHP
sudo apt-Get-Update
sudo apt -Get Upgrade -y
sudo APT-Get-Installation -y-php-GD-php-curl php-zip php-dom php-xml php-Simplexml php-mbstring
{{_LINE_31_}}

### apache2 installieren
Apache ist die am häufigsten verwendete Open-Source-Webserversoftware. Installieren Sie als Nächstes den Apache -Webserver auf Ubuntu, um Ihren eigenen Cloud -Server einzurichten, indem Sie ausführen:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Installieren Sie MySQL
MySQL Open-Source Relational Database Management System ist ein Bestandteil des LAMP-Webanwendungssoftware-Stacks und anderer. Installieren Sie nun MySQL auf Ubuntu, indem Sie unten ausgeführt werden:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Schritt 2: Owncloud auf Ubuntu herunterladen
Nachdem Sie den LAMP -Server auf Ihrem Ubuntu -System erfolgreich konfiguriert haben, laden wir die neueste OwnCloud Private Cloud -Speicherlösung von der [offiziellen Website][1] herunter.
CD /TMP
wGet https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Nachdem das Download OwnCloud Server -Software abgeschlossen wurde, extrahieren Sie nun das heruntergeladene Archiv unter Website -Dokumentroot und erstellen Sie die entsprechenden Berechtigungen für Dateien und Verzeichnisse, indem Sie OwnCloud auf Ubuntu ausführen.
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
Entfernen Sie nun die Archivdatei und starten Sie den Apache -Server neu.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl starten Sie Apache2 neu

## Schritt 3: Erstellen Sie die Datenbank und der Benutzer
Nach dem Extrahieren von Code erstellen wir nun eine MySQL -Datenbank und ein Benutzerkonto zum Konfigurieren von OwnCloud Personal Cloud Storage Server. Verwenden Sie den folgenden Befehlssatz, um sich bei MySQL Server anzumelden, um die OWDCOUD -Datenbank und Benutzer zu erstellen.
Mysql -u root -p
Passwort eingeben:
MySQL> Database OwnCloud erstellen;
MySQL> Geben Sie alle auf owncloud.
MySQL> Flush -Privilegien;
MySQL> Hör
{{_LINE_62_}}
Als nächstes müssen wir Overcloud auf Ubuntu von der Weboberfläche installieren, um eine private Cloud zu erstellen.

## Schritt 4: Installieren Sie OwnCloud auf Ubuntu
Greifen Sie nun in einem Webbrowser auf das beste persönliche Cloud -Server -Webpanelverzeichnis zu. Ändern Sie Lokalhost in Ihre Server -IP -Adresse oder Domänenname.
http: // localhost/owncloud/
{{_LINE_67_}}
Sie sollten die Open Source OwnCloud -Anmeldeseite sehen. Geben Sie einen neuen Administrator -Benutzernamen und Kennwortangaben ein, um ein Administratorkonto zu erstellen, und geben Sie den Speicherort des Datenordners an. Wenn alles in Ordnung ist, sollten Sie die Webseite so erhalten.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Installieren Sie Overcloud mit Apache auf Ubuntu">}}

{{_LINE_71_}}
Schieben Sie jetzt Ihre Seite nach unten. In dem folgenden Formular müssen Sie Benutzername und Kennwort in das Beste Personal Cloud Server OwnCloud -Panel eingeben. Geben Sie auch die Datenbank zusammen mit Benutzername und Kennwort an, um den OwnCloud -Server mit dem Datenbankserver zu verbinden, den Speicherort des Datenordners und klicken Sie auf **Setup beenden** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Konfigurieren Sie OwnCloud auf Ubuntu">}}

{{_LINE_75_}}
Nach Abschluss des Setups erhalten Sie das Admin -Dashboard. Wo Sie Benutzer, Gruppen erstellen und ihnen Berechtigungen zugewiesen haben usw.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Installieren Sie OwnCloud Dashboard">}}

{{_LINE_79_}}
Ja! Wir sind mit dem OwnCloud Installation Guide abgeschlossen, um den persönlichen Cloud -Speicher zu erstellen. Sie wissen jetzt, wie Sie OwnCloud auf Ubuntu vollständig installieren, um eine private Cloud -Cloud -Cloud schrittweise ähnlich wie bei Dropbox oder Google Drive zu erstellen.

## **Was sind die besten Alternativen zu OwnCloud?** {#4a1a}
Im Folgenden finden Sie die selbst gehosteten OwnCloud Alternatives and Competitors Datei Hosting -Software.
  ***Seafile**  ist Open-Source-Plattform-Datei-Hosting-Softwaresystem
  ***NextCloud**  ist kostenlos und Open -Source -Cloud -Speicherplattform
  ***Resilio Sync**  ist Open Source Peer to Peer -Datei -Synchronisationsanwendung
  ***Pydio -Zellen**  ist Open -Source -Datei -Sharing- und Synchronisierungssoftware
  ***syncthing**  ist kostenlos und Open-Source-Peer-to-Peer-Datei-Synchronisierungsanwendung

## **Fazit:** {#Block-DD1258F4-E0C5-4AC9-BE18-7DD2A700F09E}
Glückwunsch! Sie haben OwnCloud erfolgreich installiert und konfiguriert, um Ihre eigene private Cloud mit Apache auf Ubuntu -Maschine zu erstellen. Jetzt liegen Ihre Daten nie in den Händen von Dritten und können privat im virtuellen Speicher für private Cloud OwnCloud Ubuntu Server in privat verwaltet werden. Viele Unternehmen entscheiden sich aufgrund vieler Probleme mit der Privatsphäre von Daten, um ihre Owncloud -Server mit vielen wichtigen Informationen zu erstellen. In unseren bevorstehenden Tutorials werden wir mehr interessante Themen von Webserver -Lösungsstapeln besprechen.
Sie können sich uns auf [Twitter][2], [LinkedIn][3] und unserer [Facebook][4] -Seite anschließen. Welche Cloud-basierte Speicherlösung verwenden Sie online? Wenn Sie Fragen haben, bitte_ [in Kontakt][5].

## Erkunden:
Wir haben auch mehrere andere Artikel, die sich auf die tägliche Verwaltung Ihres Servers beziehen.
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian][6]
  * [So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu][7]
  * [Sicher und verschlüsseln Sie Nginx mit Let's verschlüsseln auf Ubuntu 20.04][8]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian][9]
  * [Setup Nginx mit Passagier auf AWS Production Server][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
