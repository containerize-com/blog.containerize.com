---
title: "So sichern Sie Nginx mit Let's Encrypt auf Ubuntu 20.04" 
seoTitle: "So sichern Sie Nginx mit Let's Encrypt auf Ubuntu 20.04" 
description: "So richten Sie und sichern Sie Nginx mit Let's verschlüsseln Sie Ubuntu. Lassen Sie uns den Client so verschlüsseln, dass Zertifikate zum automatischen Konfigurieren von NGINX generiert werden." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Websites enthalten SSL/TLS -Verschlüsselung für seine Domain, um Besucher anzulocken. In diesem Artikel wird die Verwendung von CertBot -Dienstprogramm zur Ermittlung von TLS/SSL -Zertifikaten für NGINX erläutert." 
url: /de/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## Websites enthalten SSL/TLS -Verschlüsselung für seine Domain, um Besucher anzulocken. In diesem Artikel wird die Verwendung von CertBot -Dienstprogramm zur Ermittlung von TLS/SSL -Zertifikaten für NGINX erläutert.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Sichern nginx mit lass verschlüsseln auf ubuntu">}}


## **Überblick**
Jede Website, die Besucher anzieht, muss die TLS/SSL -Verschlüsselung für ihre Domain enthalten. SSL -kostenlose Zertifikate sorgen für eine sichere Verbindung zwischen Ihrem Webserver, um NGINX und Anwendungsbrowser zu verschlüsseln und zu sichern. Lassen Sie uns eine kostenlose, automatisierte und offene Zertifikatsbehörde vergrößern, mit der Sie einen solchen Schutz für Nginx SSL LetSencrypt einrichten können. Lassen Sie uns kostenlose SSL -Zertifikate verschlüsseln, die von allen großen Browsern vertrauen und für die nächsten 90 Tage ab dem Ausgabedatum gültig sind.
In diesem Blog -Beitrag wird die einfachste Möglichkeit erläutert, NGINX auf Ubuntu 20.04 / 18.04 zu verschlüsseln und zu sichern, indem Nginx HTTPS -LetSencrypt -Zertifikate mit dem Nginx CertBot -Dienstprogramm erhalten und Ihre Zertifikate eingerichtet werden, um es automatisch zu erneuern. Lassen Sie uns starten und ein Setup letscrypt Ubuntu nginx -Konfigurationen.
  * Abhängigkeiten und Voraussetzungen
  * Installieren des Dienstprogramms für das Zertifikat
  * Bestätigung der Konfiguration von NGINX
  * HTTPS durch die Firewall zulassen
  * Erhalten Sie ein SSL -Zertifikat
  * Abschluss

Zuerst die ersten Dinge: Abhängigkeiten und Voraussetzungen
Um diesem Artikel zu folgen, müssen Sie Abhängigkeiten und Voraussetzungen für die Installation von LetSencrypt Ubuntu Nginx -Dienstprogramme benötigen:
  * Ein sudo-fähiger Nicht-Root- oder Root-Benutzer auf lokalen/Remote-Maschinen.
  * Ein System, das Ubuntu 20.04 oder Ubuntu 18.04 ausführt
  * Zugriff auf einen Befehlszeilenterminal
  * Sudo- oder Root -Privilegien auf lokalen/entfernten Maschinen
  * Nginx installiert und einrichten
  * Ein registrierter Domainname, der auf öffentliche IP zeigt
  * Ein Serverblock, der für diesen Domänennamen konfiguriert ist
  * Firewall ist so konfiguriert, dass sie Verbindungen an den Ports 80 und 443 akzeptieren.

## Schritt 1-Installieren von Certbot   {#Schritt-1 --- Installationszertifikat}}
Der erste Schritt zur Sicherung von Nginx und zur Verschlüsselung von Nginx mit Let's Encrypt besteht darin, Nginx CertBot vollständig durchzuführen und einfach zu verwenden, um Paket zum Abrufen und Erneuerungs-Let's Encrypt-SSL-Zertifikaten auf Ihrem Server zu verwenden. Beginnen Sie dazu, zunächst ein Terminal für Ubuntu zu öffnen und das lokale Repository zu aktualisieren. Geben Sie y ein und geben Sie ein, wenn Sie aufgefordert werden.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Überprüfen wir nun einige der NGINX Secure Configuration -Einstellungen.

## Schritt 2-Bestätigung der Konfiguration von NGINX   {#Schritt-2---Bestätigen Nginx-39-S-Configuration}
Wie im Abschnitt Abhängigkeiten und Voraussetzungen erläutert, sollten Sie bereits über eine registrierte Domäne verfügen, und Certbot muss in der Lage sein, den richtigen Nginx -Serverblock für diese Domäne zu finden, um SSL automatisch zu konfigurieren. In diesem Blog-Beitrag wird bei diesem Blog den Domain-Blog.Containerize.com und den Serverblock für Ihre Domain unter /etc/nginx/sites-available/blog.containerize.com verwendet.
Öffnen Sie zur Bestätigung die Konfigurationsdatei für Ihre Domain mit Nano oder Ihrem bevorzugten Texteditor:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Suchen Sie die vorhandene Server_Name-Direktivzeile in Datei /etc/nginx/sites-available/blog.containerize.com. Es sollte so aussehen:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Überprüfen Sie nun die Syntax Ihrer NGINX -Konfigurationsdateien und laden Sie den NGINX -Server neu, um die neuen Konfigurationseinstellungen zu laden:
```
sudo nginx -t
sudo systemctl reload nginx

```
CertBot Utility finden jetzt die korrekte NGINX -Server -Blockanweisung, um NGINX zu sichern und automatisch zu aktualisieren. Lassen Sie uns im nächsten Schritt die Firewall aktualisieren, um den HTTPS -Verkehr zu ermöglichen.

## Schritt 3-Https durch die Firewall   {#STEP-3 ----HTTPPS-THE-THE-ERFIREWALL} zulassen
Wie in diesem Artikel empfohlen, müssen Sie die Einstellungen anpassen, um den HTTPS -Verkehr zu ermöglichen. Um sicherzustellen, dass Ihre Firewall aktiviert und aktiv ist, führen Sie den folgenden Befehl aus:
```
sudo ufw status

```
Die Ausgabe sollte Ihnen mitteilen, dass UFW aktiv ist, und geben Sie eine Liste der festgelegten Regeln. Es zeigt nur, dass HTTP -Verkehr dem Webserver erlaubt ist. Um verschlüsseltem Verkehr zuzulassen, können Sie entweder das Nginx HTTPS -Profil hinzufügen oder Nginx voll verwenden und die vorhandene Nginx HTTP -Regel löschen. Ermöglichen Sie den Nginx HTTPS -Verkehr, indem Sie den Befehl eingeben:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Überprüfen Sie die HTTPS -Regel, die den HTTPS -Verkehr durch Eingeben des Befehls UFW ermöglicht:
```
sudo ufw status

```
Lassen Sie uns als nächstes Certbot ausführen und unsere Zertifikate abrufen.

## Schritt 4-Erhalten Sie ein SSL-Zertifikat   {#STEP-4 ----AN-SSL-Zertifikat}}
Das NGINX -Plugin für CertBot kümmert sich um die Neukonfiguration von Nginx und lädt seine Konfiguration bei Bedarf neu. Daher müssen Sie nur Zertifikate mit dem Nginx -Plug -in generieren, indem Sie den folgenden Befehl ausführen:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Wenn dies zum ersten Mal mit dem Dienstprogramm für das Certbot -Dienstprogramm ausgeführt wird, bittet CertBot Sie, Ihre HTTPS -Einstellungen zu konfigurieren. Sie werden aufgefordert, eine E -Mail -Adresse einzugeben und den Nutzungsbedingungen zuzustimmen. Nach der Eingabetaste wird die Konfiguration aktualisiert, und Nginx wird neu geladen, um die neuen Einstellungen abzuholen. Schließlich wird Certbot mit einer Nachricht angezeigt, die Ihnen zeigt, dass ein Zertifikat erfolgreich generiert wurde und wo Ihre Zertifikate gespeichert werden.
Ihre Zertifikate werden heruntergeladen, installiert und mit Nginx SSL Certificate LetSencrypt -Konfigurationen geladen. Laden Sie Ihre Website mithilfe von https: // neu und beachten Sie den Sicherheitsindikator Ihres Browsers. Es sollte darauf hinweisen, dass die Site ordnungsgemäß gesichert ist, normalerweise mit einem Schlossymbol. Wenn Sie Ihren Server mit dem SSL Labs Server -Test testen, wird eine A -Note für Nginx und LetSencrypt erhalten.
Lassen Sie uns mit dem Testen des Erneuerungsprozesses abschließen.

## Schritt 5-Überprüfung von Certbot Auto-Renewal   {#STEP-5 -----ceRtbot-auto-renewal}}
Da Encrypt -Zertifikate alle neunzig (90) Tage ablaufen und Nginx SSL LetSencrypt Benutzer ermutigt, die Einrichtung und automatische Erneuerung des Cron -Jobs einzurichten. Öffnen Sie zunächst die Crontab -Konfigurationsdatei für den aktuellen Benutzer:
```
sudo crontab -e
```
Fügen Sie einen Cron -Job hinzu, der den Befehl certbot ausführt. Certbot erneuert nginx das Zertifikat, wenn er feststellt, dass das Zertifikat innerhalb von 30 Tagen ausfällt. Planen Sie es, täglich zu einer bestimmten Zeit zu laufen, z. B. 05:00 Uhr.
```
sudo certbot renew --dry-run

```
Der Cron -Job sollte auch das –quiet -Attribut enthalten, wie im obigen Befehl. Dadurch wird das Nginx Renew -SSL -Zertifikat angewiesen, nach der Ausführung der Aufgabe keine Ausgabe einzuschließen. Aktivieren Sie die Erneuerung der automatischen Zertifikat. Sobald Sie den Cron -Job hinzugefügt haben, speichern Sie die Änderungen und beenden Sie die Datei.

## Schlussfolgerung   {#Conclusion}
In diesem Artikel haben wir gelernt, wie NGINX -Installation von LetSencrypt SSL -Zertifikat installiert wird. Wir haben SSL -Zertifikate für Ihre Domäne heruntergeladen und NGINX so konfiguriert, dass diese Zertifikate verwendet werden. Darüber hinaus sollten Sie CertBot ermöglicht haben, Zertifikate automatisch für SSL Nginx LetSencrypt zu erneuern. In unseren bevorstehenden Tutorials werden wir über interessanere Themen darüber diskutieren, wie Sie einen Webserver mit Standard -Sicherheitstechnologie sichern können, mit dem eine verschlüsselte Kommunikation zwischen einem Webbrowser und einem Webserver ermöglicht werden kann.
Sie können sich uns auf [Twitter][1], [linkedIn][2] und unserer [Facebook][3] -Seite anschließen. Mit welchem ​​kryptografischen Protokoll können Sie Kommunikationssicherheit über ein Computernetzwerk bereitstellen? Wenn Sie Fragen haben, bitte_ [Kontakt aufnehmen][4].

## Erkunden
Möglicherweise finden Sie die folgenden relevanten Links, um die Serverleistung zu überwachen und die Zuverlässigkeit und Sicherheit zu gewährleisten:
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian][5]
  * [So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu][6]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian][7]
  * [Setup Nginx mit Passagier auf AWS Production Server][8]
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
