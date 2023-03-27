---
title: "So installieren Sie NextCloud mit Apache auf Ubuntu Server" 
seoTitle: "So installieren Sie NextCloud mit Apache auf Ubuntu Server" 
description: "NextCloud ist eine selbst gehostete Open-Source-Cloud-Speicherlösung, die in PHP geschrieben wurde. In diesem Artikel wird angezeigt, wie NextCloud mit Apache auf Ubuntu installiert wird." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud ist selbst gehostete Open-Source-Dateien Synchronisierungs- und Zusammenarbeitssoftware. In diesem Tutorial wird angezeigt, wie NextCloud mit Apache auf Ubuntu installiert wird." 
url: /de/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud ist selbst gehostete Open-Source-Dateien Synchronisation und Collaboration Software. In diesem Tutorial wird angezeigt, wie NextCloud mit Apache auf Ubuntu installiert wird.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="So installieren Sie Nextcloud mit Apache auf Ubuntn">}}


## **Überblick** 
**[Nextcloud][1] **ist eine kostenlose und sichere** selbst gehostete Cloud-Speicherlösung**in PHP-Programmiersprache geschrieben. Es bietet Datenzugriff über die Weboberfläche und ähnlich wie bei Dropbox. Proprietäre Cloud -Speicherlösungen wie Dropbox und Google Drive sind bequem, können jedoch zum Sammeln personenbezogener Daten verwendet werden, da Ihre Dateien auf ihren Systemen gespeichert sind. Wenn Sie sichere, sichere und konforme Datei -Synchronisation und Freigabelösung benötigen, können Sie auf Open Source NextCloud Server wechseln. NextCloud Setup kann auf Ihren privaten Heimservern oder auf einem virtuellen privaten Server installiert werden.
Nextcloud Open Source bietet **End-to-End-Verschlüsselung** , was bedeutet, dass Dateien auf dem Client-Gerät verschlüsselt werden können, bevor sie auf den Server hochgeladen werden. Es kann auch in eine Online -Office -Suite wie Collobora, nur intelligente, integriert werden, sodass Sie Ihren DOC-, PPT-, XLS -Dateien direkt vom nächsten Client erstellen und bearbeiten können. Sie können nach dem Download von NextCloud -Client eine oder mehrere Dateien und Ordner auf Ihrem Computer mit Ihrem NextCloud -Server freigeben und synchronisieren. NextCloud Desktop -Download und mobile Clients bieten Optionen zur Synchronisierung und Freigabe auf allen Geräten unter Ihrer Kontrolle. Platzieren Sie Datendateien in Ihren lokalen gemeinsam genutzten Verzeichnissen, und diese Dateien werden sofort mit dem NextCloud -Desktop -Sync -Client, iOS -App oder Android -Geräten mit dem Server und anderen Geräten synchronisiert.
In diesem Tutorial können Sie NextCloud auf Ubuntu 20.04 LTS Linux -Betriebssystem mit Apache installieren.
* **Voraussetzungen installieren (Lampenstapel)** 
* **Download NextCloud Archive auf Ubuntu** 
* **MySQL -Datenbank erstellen** 
* **NEXTCLOUD -Webinstallateur ausführen** 
* **einpackt** 

## Schritt 1: Voraussetzungen installieren (Lampenstapel)
Das erste, um NextCloud auf Ubuntu zu installieren, ist, dass Sie auf Ihrem Ubuntu LTS -System ausgeführt werden müssen. Melden Sie sich in Ihr System an und greifen Sie zu einem Terminalfenster zu. Wenn Sie bereits ausgeführt werden **Lampenstapel** Überspringen Sie diesen Schritt an. Verwenden Sie die folgenden Befehle, um die erforderlichen Abhängigkeiten zu installieren.

### PHP installieren
Beginnen wir mit der Installation der PHP -Version 5.6 oder einer höheren Version auf Ihrem Ubuntu -Server:
sudo apt-Get-Update
sudo APT-Get-Installation -y-Php-PHP-GD-PHP-CURL-PHP-ZIP-PHP-XML-PHP-MBString
Sie können die PHP -Version mit dem folgenden Befehl überprüfen:
PHP -v
{{_LINE_29_}}

### apache2 installieren
Installieren Sie Apache als nächstes mit dem Befehl:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl starten Sie Apache2 neu
{{_LINE_34_}}

### Installieren Sie MySQL
Wenn die Abhängigkeiten aus dem Weg geräumt sind, ist der nächste Schritt, um den MySQL -Datenbankserver zu sichern. Installieren Sie den MySQL -Datenbankserver durch Ausführen:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Schritt 2: Laden Sie das NEXTCLOUD -Archiv auf Ubuntu herunter
Zum Zeitpunkt des Schreibens dieses Artikels ist die neueste Version von NextCloud 22.0.0beta5. Nachdem Sie den LAMP -Server auf Ihrem System erfolgreich konfiguriert haben, laden wir NextCloud von seiner [offiziellen Website][2] herunter.
CD /TMP
wGet https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Sobald der NextCloud-Server-Download abgeschlossen ist, extrahieren Sie das heruntergeladene Archiv unter Website-Dokumentenroamm und richten Sie den Eigentum an dem NextCloud-Verzeichnis auf www-data für Dateien und Verzeichnisse ein.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data Nextcloud
sudo chmod -r 755 NEXTCLOUD
{{_LINE_49_}}
Entfernen Sie nun die heruntergeladene Archivdatei.
sudo rm -f/tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Schritt 3: Erstellen Sie die MySQL -Datenbank
Lassen Sie uns nach dem Extrahieren von Quellcode eine NextCloud MySQL -Datenbank und ein Benutzerkonto zum Konfigurieren von Nextcloud erstellen. Verwenden Sie den folgenden Befehlssatz, um sich bei MySQL Server anzumelden, die Datenbank für die Nextcloud zu erstellen, Benutzer und beenden Sie aus der MySQL -Konsole.
Mysql -u root -p
Passwort eingeben:
MySQL> Datenbank NextCloud erstellen;
MySQL> Geben Sie alle auf NextCloud an.
MySQL> Flush -Privilegien;
MySQL> Hör
{{_LINE_61_}}

## Schritt 4: NEXTCLOUD -Webinstallationsprogramm ausführen
Zu diesem Zeitpunkt installieren Nextcloud Ubuntu 20.04 erfolgreich und konfiguriert. Öffnen Sie nun das NextCloud-Konfigurationsverzeichnis im Webbrowser wie unten und geben Sie die URL http://your-domain.com ein. Ändern Sie Lokalhost in Ihre Server -IP -Adresse oder Domänenname. Sie sehen den folgenden Bildschirm:
http: // localhost/nextcloud/oder http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Geben Sie neue Admin -Anmeldeinformationen ein, um ein Administratorkonto zu erstellen, und geben Sie den Speicherort des Datenordners an.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="So installieren Sie NextCloud mit Apache auf Ubuntu Linux Server">}}

{{_LINE_69_}}
Schieben Sie nun Ihre Seite nach unten und geben Sie den Datenbanknamen, den Datenbank -Benutzernamen und den Kennwort ein und klicken Sie auf **Setup beenden** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="So installieren Sie NextCloud Ubuntu 20.04 mit Apache">}}

{{_LINE_73_}}
Sobald die Installation abgeschlossen ist, sollten Sie das NextCloud Admin -Dashboard im folgenden Bildschirm sehen. Hier können Sie einen Benutzer erstellen, Gruppen, ihm Berechtigungen usw. zuweisen.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Installieren von Nextcloud auf Ubuntu mit Apache">}}

{{_LINE_77_}}
Herzlichen Glückwunsch, Sie haben eine arbeitende Cloud-Lösung von Nextcloud in Ihrem Ubuntu-LTS-System. Sie können jetzt Ihren Cloud -Server so anpassen, dass Sie Ihren Anforderungen perfekt entsprechen.

## **einpacken:**  {#4a1a}

Glückwunsch! Sie haben erfolgreich **Konfiguriert und installiert NextCloud auf Ubuntu Server mit Apache** . Sie haben gelernt, wie man eine private Cloud erstellt. NextCloud Ubuntu Server ist eine erstaunliche Plattform für Cloud -Speicher -Kollaboration, die nahezu jeden privaten oder hybriden Cloud -Speicheranforderungen erfüllt. Jetzt wissen Sie, wie Sie NextCloud auf Ubuntu installieren, und Ihre Daten sind in Ihrer selbst gehosteten Cloud sicher und sicher. In unseren bevorstehenden Tutorials werden wir über interessante Themen im Zusammenhang mit Webserver -Lösungsstapeln besprechen.
_What Cloud-basierte selbst gehostete Speicherlösung bevorzugen Sie? Wenn Sie Fragen haben, setze dich bitte an [3] ._

## Erkunden:
Möglicherweise folgen Sie Artikeln, die sich auf die tägliche Verwaltung Ihres Servers beziehen.
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu][4]
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu oder Debian][5]
  * [Installieren und sicherer phpmyadmin mit nginx auf Ubuntu][6]
  * [Sicher und verschlüsseln Nginx mit lass uns auf Ubuntu 20.04][7]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian][8]
  * [Setup nginx mit Passagier auf AWS Production Server][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
