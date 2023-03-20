---
title: "So konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian" 
seoTitle: "So konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian" 
description: "HTTP2 oder H2 ist ein binäres Protokoll und eine verbesserte Version des HTTP -Protokolls, mit der die Geschwindigkeit der Site -Seiten nach Nginx -Aktivierung erhöht werden kann. Aktivieren Sie die HTTP2 -Unterstützung" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 ist ein robustes Multiplex -Protokoll zur Verbesserung der Seitenlastgeschwindigkeit und -sicherheit. In diesem Tutorial lernen wir, wie Sie Nginx mit HTTP/2 -Unterstützung einrichten." 
url: /de/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 ist ein robustes Multiplex -Protokoll zur Verbesserung der Seitenlastgeschwindigkeit und -sicherheit. In diesem Tutorial lernen wir, wie Sie Nginx mit HTTP/2 -Unterstützung einrichten.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx aktivieren die HTTP2 -Unterstützung für Ubuntu und Debian">}}


## **Überblick**
Nginx ist ein schneller und zuverlässiger Webserver von Open Source. Es erlangte aufgrund seines geringen Speichers, des Lastausgleichs, der hohen Skalierbarkeit, des Zwischenspeichens, der Unterstützung der Mehrheit der Protokolle und dem Umkehrtriebwerk beliebt. Lassen Sie uns nun darüber sprechen, wie Nginx das HTTP2 -Protokoll aktiviert.
Eines der von Nginx unterstützten Protokolle ist HTTP/2, das im Mai 2015 veröffentlicht wurde. Der Hauptvorteil von HTTP/2 ist die hohe Übertragungsgeschwindigkeit für inhaltliche Websites, reduziert die Last auf dem Webserver und kann mehrere parallele Anforderungen einleiten können in einer einzelnen TCP -Verbindung. Nginx Enable HTTP2 ist eine verbesserte Version des HTTP -Protokolls. Bevor wir anfangen, benötigen wir ein paar Ubuntu- oder Debian -Server mit SSL -Zertifikat. In diesem Tutorial führen wir Ihnen Schritt für Schritt an, wie Nginx HTTP2 auf Ubuntu aktiviert.
  * Aktualisieren Sie die Pakete und installieren Sie Nginx
  * Aktivieren von HTTP/2 -Unterstützung
  * Hinzufügen des Servernamens
  * Hinzufügen der SSL -Zertifikate
  * Entfernen der Chiffren
  * Alle HTTP -Anforderungen an HTTPS umleiten
  * Starten Sie Nginx neu
  * Abschluss

## Schritt 1: Aktualisieren der Pakete und Installation von Nginx {#4597}
Der erste Schritt besteht darin, die Repositories im APT -Verpackungssystem zu aktualisieren und zu aktualisieren. Durch die Verwendung von Update wird die neuesten Versionspakete heruntergeladen und das Upgrade wird die neueste Version der Pakete in der Liste installiert. Führen Sie den folgenden APT -Befehl aus, um die Pakete zu aktualisieren und zu aktualisieren.
```
sudo apt-get update && apt-get upgrade
```
Der nächste Schritt besteht darin, die neueste Version des Nginx -Pakets zu installieren. Die Unterstützung des HTTP/2 -Protokolls wurde in Nginx Version 1.9.5 und höher eingeführt. Daher müssen wir die neueste Version des Nginx -Pakets installieren. Führen Sie den Befehl am folgenden APT -Installation aus, um die Nginx -Pakete zu installieren:
```
sudo apt-get install nginx
```
Sie werden aufgefordert, den Schritt -für -Schritt -Installationsprozess zu bestätigen. Wählen Sie die Option "Ja" und beenden Sie den Installationsprozess. Nach Abschluss des Installationsprozesses besteht der nächste Schritt darin, die Version des Pakets zu überprüfen, unabhängig davon, ob wir die richtige Version installiert haben oder nicht. Sie können die Version des NGINX -Webservers überprüfen, indem Sie Befehl eingeben:
```
sudo nginx -v
```
Der Ausgang des obigen Versionsprüfungsbefehls sollte dem folgenden ähnlich sein:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Schritt 2: Aktivieren von http/2 Unterstützung {#f4d2}
Nach der Installation des Nginx -Pakets müssen wir HTTP2 NGINX aktivieren. Der Benutzer muss den Hörport von 80 auf 443 ändern. Öffnen wir die Nginx -Konfigurationsdatei:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Sie können sehen, dass der standardmäßige Wert von Nginx so eingestellt ist, dass das Hören Port 80 ist.
Hören Sie 80 default_server;
Hören [::]: 80 default_server;
Wie Sie sehen können, dass es zwei verschiedene Hörvariablen gibt. Die erste Listen -Variable ist für alle IPv4Connections und die zweite für IPv6 -Verbindungen. Wir werden die Verschlüsselung für beide Variablen aktivieren. Ändern Sie die Höranschlussnummer in 443 und fügen Sie die SSL -Verbindung für das HTTPS -Protokoll hinzu, wie unten gezeigt:
Hören Sie 443 SSL HTTP2 default_server;
Hören [::]: 443 SSL http2 default_server;
Beachten Sie, dass wir zusätzlich zu SSL auch HTTP2 hinzugefügt haben. Nginx ist jetzt in der Lage, Browser zu verwenden, das das HTTP/2 -Protokoll unterstützt.

## Schritt 3: Hinzufügen des Servernamens {#A745}
Der nächste Schritt besteht darin, den Server \ _name so zu ändern, dass der Servername dem Domänennamen zugeordnet ist. Der Benutzer muss nur den Servernamen in der Konfigurationsdatei ändern. Suchen Sie den Server \ _name -Eintrag in der Konfigurationsdatei und ändern Sie _ in Ihrer tatsächlichen Domäne wie folgt:
```
server_name example.com www.example.com;
```
Speichern Sie die Serverkonfigurationsdatei, indem Sie im Texteditor bearbeiten. Sie können die NGINX -Konfiguration auf Syntaxfehler mit dem Befehl überprüfen:
```
sudo nginx -t
```
Wenn die Syntax fehlerfrei ist, sehen Sie die folgende Ausgabe:
nginx: Die Konfigurationsdatei /etc/nginx/nginx.conf Syntax ist in Ordnung
Nginx: Konfigurationsdatei /etc/nginx/nginx.conf -Test ist erfolgreich

## Schritt 4: Hinzufügen der SSL -Zertifikate {#37c0}
Der nächste Schritt besteht darin, die NGINX -HTTPS -Konfiguration für die Verwendung Ihres SSL -Zertifikats zu aktivieren. Sie können ein selbst signiertes Zertifikat erstellen oder [ein kostenloses Zertifikat von Let's Encrypt][1] installieren. Wenn Sie kein SSL -Zertifikat haben, befolgen Sie bitte dieses Tutorial. Fügen Sie Ihre SSL -Zertifikate in das NGINX -Konfigurationsverzeichnis hinzu, ähnlich wie folgt:
```
sudo mkdir /etc/nginx/ssl
```
Kopieren Sie Ihr Zertifikat und den privaten Schlüssel an diesen Ort und ersetzen Sie example.com durch Ihren tatsächlichen Domain -Namen:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Öffnen Sie nun die Konfigurationsdatei von Nginx Server erneut. Fügen Sie neue SSL -Zeilen im NGINX -Serverblock mit dem Speicherort Ihrer Zertifikate hinzu und konfigurieren Sie neue SSL -Zeilen, um die NGINX -SSL -Konfiguration zu aktivieren:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Speichern Sie die Datei nginx -Datei und beenden Sie den Texteditor.

## Schritt 5: Entfernen der Chiffren {#D291}
Cipher ist ein Algorithmus, der in der Kryptographie zur Datenverschlüsselung und Entschlüsselung verwendet wird. Cipher -Suiten sind eine Reihe von kryptografischen Algorithmen, die zur Sicherung von Netzwerkverbindungen verwendet werden. HTTP/2 hat eine riesige schwarze Liste unsicherer Chiffren, die entfernt werden müssen. Hier verwenden wir ein beliebtes Cipher -Set, das von Internet Giants Cloudflare genehmigt wurde.
Öffnen Sie die folgende nginx -Konfigurationsdatei /etc/nginx/nginx.conf und fügen Sie die folgenden Zeilen kurz nach ** SSL \ _Prefer \ _server_ciphers auf hinzu. ** Diese Zeilen enthalten die Liste der neuesten Chiffren, die HTTP2 -Browser verstehen.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Sie können GZIP auf OFF einstellen und Proxy \ _max \ _temp \ _file \ _size 0 hinzufügen; Um ERR \ _HTTP2 \ _PROTOCOL_ERROR NGINX -Fehler zu vermeiden.

## Schritt 6: Alle HTTP -Anforderungen an https {#b387} umleiten
Jetzt sollten wir Nginx HTTP2 -Proxy mitteilen, was er den Inhalt nur über HTTPS bedienen soll, wenn der Server eine HTTP -Anforderung empfängt. Wenn Sie abschließend kommentierte Zeilen ignorieren, sollte Ihre Nginx-Konfigurationsdatei /etc/nginx/sites-available/domain-name.com ähnlich aussehen:
Server {Listen 443 SSL HTTP2 default_server; Hören [::]: 443 SSL http2 default_server; root/var/www/html; index index.html index.htm index.nginx-debian.html; server_name example.com; location/{try_files $ uri $ uri/= 404 ; } SSL_Certificate /etc/nginx/ssl/example.com.crt;ssl_Certificate_key /etc/nginx/ssl/example.tey;ssl_dhparam/ Hören Sie [::]: 80; server_name Beispiel.com; Rückgabe 301 https: // $ server_name $ request_uri;}
Speichern Sie die Datei /etc/nginx/sites-available/domain-name.com und beenden Sie dann. Überprüfen Sie die Konfigurationen für Syntaxfehler:
```
sudo nginx -t
```

## Schritt 7: Nginx neu starten {#e687}
Um alle Änderungen anzuwenden, starten Sie den Nginx HTTP2 Reverse Proxy -Server neu und überprüfen Sie den Konfigurationsstatus.
sudo systemctl starten nginx neu
sudo systemctl Status nginx

## ** Fazit: ** {#4A1a}
Herzlichen Glückwunsch, Sie haben erfolgreich gelernt, wie Sie die NGINX -Konfiguration HTTP2 -Unterstützung auf Ubuntu Server einrichten. Ihre Nginx HTTP2 -Einstellungen serviert jetzt HTTP/2 -Seiten und löscht auch die Differenz zwischen HTTP/1- und HTTP/2 -Protokollen. Wenn Sie noch Konfigurationsprobleme haben, teilen Sie uns im Kommentarbereich mit.
Haben Sie Fragen zu HTTP2 Multiplexed -Protokoll? _, Bitte_ [in Kontakt][2].

## Erkunden
Möglicherweise mögen Sie auch unten Artikel:
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian][3]
  * [Wie zu][3][Installieren und sicherer phpmyadmin mit nginx auf Ubuntu][4]
  * [So richten Sie Nginx mit Passagier auf AWS Production Server][5]
  * [Sicher und verschlüsseln nginx mit lasst uns auf Ubuntu 20.04][1]
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
