---
title: "So installieren Sie PyDio -Dateifreigabe und Synchronisationsplattform auf Ubuntu" 
seoTitle: "So installieren Sie PyDio -Dateifreigabe und Synchronisationsplattform auf Ubuntu" 
description: "Pydio ist eine Open -Source -Dateifreigabe und eine selbst gehostete Collaborative -Dokumenten -Sharing -Software. Lassen Sie uns überprüfen, wie Sie die PyDIO -Dateifreigabe und das Synchronisierungs -Tool installieren." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio ist eine Cloud-basierte Dateifreigabe und Synchronisationsplattform, um überall und auf jedem Gerät auf alle Daten zugreifen zu können. In diesem Tutorial geht es darum, wie man Pydio auf Ubuntu installiert." 
url: /de/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio ist eine Cloud-basierte Dateifreigabe und eine Synchronisierungsplattform, um alle Daten überall und auf jedem Gerät zuzugreifen. In diesem Tutorial geht es darum, wie man Pydio auf Ubuntu installiert.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="So installieren Sie PyDio -Dateifreigabe und Synchronisationsplattform auf Ubuntu">}}


## **Überblick**
Pydio Cells ist eine Open -Source -Datei -Sharing- und Synchronisierungssoftware. Es bietet einen einzelnen Zugriff auf alle Ihre Datenspeicher und ist eine Alternative zu OwnCloud und Nextcloud, die Speicherdienste, Dateifreigabe und Synchronisierung anbieten. Pydio ist eine Enterprise Open Source -Datei -Sharing -Plattform ähnlich wie bei Dropbox und anderen Speicherplattformen. Es hilft Ihnen, alle Dateien und Geräte in einer Plattform sicher zu verbinden.
Pydio Cells ist eine Cloud-basierte Dateien, die Synchronisierungs- und Zusammenarbeitsplattform für die Kollaboration ist. Diese Open -Source -Software wird auf Ihrer persönlichen IT -Infrastruktur ausgeführt und hilft Ihren Mitarbeitern beim Schutz und Überwachung Ihrer Geschäftsdaten. Sie können Ihre Daten mithilfe einer mobilen App, einer Desktop -Software oder einem Webbrowser mithilfe von Pydio -Zellen aus überall auf sie zugreifen. Die beste App-App-App Pydio Cells basiert auf einer Mikro-Service-Architektur und wird unter Verwendung der Golang-Programmiersprache geschrieben.
Dieses Tutorial hilft Ihnen bei der Installation und Konfiguration von Pydio -Self -Hosted -Dateifreigabe -Software und Synchronisierungsplattform auf Ubuntu LTS -Systemen.
  * Einstieg
  * Lampenserver installieren
  * Installieren Sie Pydio auf Ubuntu
  * Erstellen Sie die PYDIO -Datenbank und der Benutzer
  * Greifen Sie in Ihrem Browser auf Pydio zu
  * Abschluss

## Schritt 1: Erste Schritte
Vor den Installationen müssen Sie sicherstellen, dass Ihr System die neuesten Pakete ausführt. Verwenden Sie den folgenden Befehl, um Ihren Ubuntu 20.04 -Server zu aktualisieren.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Nach dem Update wird immer empfohlen, Ihren Server neu zu starten, damit die neuen Änderungen wirksam werden.
```
sudo reboot
```

## Schritt 2: Lampenerserver installieren
Um Pydio Secure Enterprise Datei Sharing -Server und das Erstellen einer privaten Open -Source -Cloud zu erstellen, müssen wir zunächst einen laufenden Lampenserver einrichten. Wenn Sie bereits einen Lampenstapel installiert und ausgeführt haben, überspringen Sie diesen Schritt an. Verwenden Sie die folgenden Befehle, um die Lampe auf Ihrem Ubuntu -System einzurichten.

## # PHP installieren
Sie können PHP auf Ihrem Ubuntu- oder Debian -System installieren, indem Sie Befehle ausführen:
sudo apt-get installieren Sie Python-Software-Properties
sudo add-apt-Repository PPA: Ondrej/PHP
sudo APT-Get-Installation -y-php-GD-php-curl php-zip php-dom php-xml php-Simplexml php-mbstring
{{_LINE_34_}}

## # apache2 installieren
Apache ist die am häufigsten verwendete Open-Source-Webserversoftware. Installieren Sie als Nächstes den Apache -Webserver auf Ubuntu, indem Sie ausführen:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # Installieren Sie MySQL
MySQL Open-Source Relational Database Management System ist ein Bestandteil des LAMP-Webanwendungssoftware-Stacks und anderer. Installieren Sie nun MySQL auf Ubuntu, indem Sie unten ausgeführt werden:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Sobald die Installation abgeschlossen ist, öffnen Sie **php.ini**  Konfigurationsdatei zum Bearbeiten. Verwenden Sie Ihren bevorzugten Datei -Editor.
Nehmen Sie Änderungen an der unten stehenden Php.ini -Datei vor. Öffnen Sie zwei Dateien und nehmen Sie die Änderungen wie gezeigt vor
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Die folgenden Änderungen vornehmen
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Speichern und schließen Sie die Datei und bearbeiten Sie die andere Php.ini -Datei
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Schritt 3: Installieren Sie Pydio auf Ubuntu
Zuerst müssen Sie Ihrem Ubuntu 20.04 -Server Pydio bestes kostenloses Dateifreigabe -Software -Repository hinzufügen, da es noch nicht verfügbar ist. Fügen Sie außerdem das beste Dateifreigabesystem für den öffentlichen Schlüssel für das Pydio hinzu und aktualisieren Sie Ihr System -Repository.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Es ist jetzt an der Zeit, Pydio EFSS und Dokumentheilungssoftware zu installieren. Führen Sie den Befehl wie gezeigt aus
```
sudo apt install -y pydio pydio-all
```
Aktivieren Sie das Apache -Umschreiben mit den folgenden Befehlen und neu starten Sie sie neu und aktivieren Sie Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Bestätigen Sie, dass der Apache -Dienst mit dem folgenden Befehl ausgeführt wird:
```
sudo systemctl status apache2
```
Die Ausgabe sollte wie angezeigt werden, wenn die Installation ordnungsgemäß durchgeführt wurde, wodurch der Apache2 -Dienst ausgeführt wird.

## Schritt 4: Erstellen Sie die PYDIO -Datenbank und den Benutzer
Nach dem Extrahieren von Code erstellen wir nun eine MySQL -Datenbank und ein Benutzerkonto zum Konfigurieren von Pydio. Verwenden Sie den folgenden Befehlssatz, um sich bei MySQL Server anzumelden, um Ajaxplorer Sharesync- oder PyDIO -Datenbank und Benutzer zu erstellen.
Mysql -u root -p
Passwort eingeben:
MySQL> Datenbank erstellen Pydio;
MySQL> Geben Sie alle auf Pydio.
MySQL> Flush -Privilegien;
MySQL> Hör
{{_LINE_69_}}
Als nächstes müssen wir Pydio auf Ubuntu von der Weboberfläche installieren, um eine private Cloud zu erstellen.

## Schritt 5: Greifen Sie in Ihrem Browser auf Pydio zu
Öffnen Sie Ihren Browser und geben Sie die URL _http: /// Pydio_ ein. Sie sollten eine Seite wie gezeigt sehen
Pydio private Cloud -Dateifreigabe und Geschäftsdatei -Software für die Freigabe von Geschäftsdateien ist jetzt installiert und konfiguriert. Es ist an der Zeit, auf ihre Weboberfläche zuzugreifen.
Öffnen Sie Ihren Browser und geben Sie URL http: // your -server -ip / pydio ein. Sie werden auf die folgende Seite umgeleitet:

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio Installer">}}

Bestätigen Sie alle Steuerelemente und klicken Sie auf die Schaltfläche **weiter mit der Pydio -Installation** . Sie sollten die folgende Seite sehen:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio Setup Assistent">}}

Wählen Sie Ihre Sprache aus und klicken Sie auf **Start Assistent** . Sie sollten die folgende Seite sehen:

{{< figure align=center src="images/Starting-the-setting.png" alt="Starten Sie die Pydio -Einstellungen">}}

Geben Sie den Programmnamen und die Begrüßungsnachricht ein. Klicken Sie dann auf die Schaltfläche **Weiter** . Sie sollten die folgende Seite sehen:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Geben Sie die Pydio -Anwendung ein">}}

Geben Sie anschließend Ihr Administratorkonto ein und klicken Sie auf die Schaltfläche **Weiter** . Sie sollten die folgende Seite sehen:

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL -Datenbankeinstellungen">}}

Geben Sie dann Ihre Datenbankdetails ein, z. B. den Datenbanknamen, den Benutzernamen und das Passwort. Klicken Sie dann auf die Schaltfläche **Test DB -Verbindung** . Sie sollten die folgende Seite sehen:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Pydio erweiterte Optionen">}}

Klicken Sie anschließend auf die Schaltfläche **pydio**  installieren. Sobald die Installation erfolgreich abgeschlossen wurde. Sie werden auf die folgende Seite umgeleitet:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Login">}}

Geben Sie dann Ihren Benutzernamen und Ihr Passwort für den Administrator ein. Klicken Sie dann auf die Schaltfläche [ENTER]. Sie sollten die folgende Seite sehen:

Ja! Es ist fertig. Sie wissen nun, wie Sie PYDIO Self -Hosted -Datei -Synchronisierungs- und Open -Source -Datei -Sharing -Software auf Ubuntu vollständig installieren, um einen privaten Cloud -Cloud zu erstellen, der bei Dropbox oder Google Drive ähnlich ist.

## **Fazit:** {#4A1a}
In diesem Tutorial haben Sie die Open -Source -Dateifreigabe von Pydio Cells in Ihrem Ubuntu -System erfolgreich installiert. Sie können diesen Artikel verwenden, um eine Cloud-Infrastruktur zum Speichern, Sichern und Teilen Ihrer Dateien in der selbst gehosteten Cloud zu erstellen. Verwenden Sie die Pydio Collaborative Document Sharing und die beste kostenlose Dateifreigabe -App, um mehr Kontrolle über Ihre Daten zu erhalten und eine effiziente Zusammenarbeit in Ihrer Unternehmensorganisation zu gewährleisten. In unseren bevorstehenden Tutorials werden wir weitere interessante Themen von Open -Source -Cloud -Speicherlösungen und den Tattyp zur Kollaboration von Dateien zur Kollaboration erörtert.
Sie können sich uns auf [Twitter][1], [linkedIn][2] und unserer [Facebook][3] -Seite anschließen. Welche Cloud-basierte Open Source _file Share-Plattform verwenden Sie online? Wenn Sie Fragen haben, bitte_ [Kontakt aufnehmen][4].

## Erkunden:
Wir haben auch mehrere andere Artikel, die sich auf die tägliche Verwaltung Ihres Servers beziehen.
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian][5]
  * [So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu][6]
  * [Sicher und verschlüsseln Nginx mit lass uns auf Ubuntu 20.04][7]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian][8]
  * [Setup nginx mit Passagier auf AWS Production Server][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
