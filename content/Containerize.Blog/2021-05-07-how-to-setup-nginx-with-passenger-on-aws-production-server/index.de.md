---
title: "So richten Sie Nginx mit Passagier auf AWS Production Server ein" 
seoTitle: "So richten Sie Nginx mit Passagier auf AWS Production Server ein" 
description: "Dieser Blog -Beitrag beschreibt Schritte für die Installation von Nginx mit Passagier über das Ubuntu 20.04 LTS -Betriebssystem nach der APT -Methode." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Dieser Blog -Beitrag beschreibt die Schritte für die Installation von Nginx mit Passagier über das Ubuntu 20.04 LTS -Betriebssystem nach APT -Methode." 
url: /de/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Dieser Blog -Beitrag beschreibt die Schritte für die Installation von Nginx mit Passagier über das Ubuntu 20.04 LTS -Betriebssystem nach APT -Methode.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Setup nginx mit Passagier auf AWS Production Server einrichten">}}


## **Überblick**:
Sie müssen **nginx mit Passagier auf AWS Production**  Server installieren und konfigurieren, bevor Sie Ihre Anwendung auf dem Produktionsserver bereitstellen.
**Open Source Phusion Passagier**  bietet eine Menge Anpassungs- und Funktionsoptionen. Passagier Einige Funktionen werden zur Verbesserung der Leistungsmerkmale der Anwendung verwendet. Ein Teil der Anpassung beeinflussen Anwendungs- oder Verbindungshandhabungsverhalten usw. Zwei Konfigurationsoptionen für Passagier müssen in Nginx eingerichtet werden, der als Passagier \ _enabled und Passagier \ _root bezeichnet wird. In diesem Installationsprozess werden beide Optionen automatisch eingerichtet.
In diesem Blog -Artikel werden wir einige der wesentlichen Konfigurationsschritte für die Installation des Webanwendungsservers auf dem Ubuntu -Betriebssystem folgen **APT -Methode**  abdecken. Sie können Webanwendungen, die in Node.js, Python und Ruby geschrieben wurden, nach dem Lesen und der folgenden Anleitung bereitstellen und verwalten.
  ***Was ist Nginx und Passagier?** 
  ***Installieren Sie Nginx und Passagierpakete** 
  ***Aktivieren Sie das Passagier -Nginx -Modul und starten Sie Nginx neu** 
  ***Installationen validieren** 
  ***System- und Passagier -Updates** 
  ***Die besten Open Source -Webserver** 
  * **Abschluss**

## 1. Was ist Nginx und Passagier?   {#STEP-4: -Update-regulär}
**[Was ist Nginx Server?][1]  **nginx ist eine kostenlose und Open-Source-Webserver-Software für Web als Reverse Proxy, HTTP-Lade-Balancer, Media Streaming, HTTP-Cache und E-Mail-Proxy für IMAP, POP3 und SMTP. Es ist sehr skalierbar und für maximale Leistung und Stabilität ausgelegt. Nginx ist eine leistungsstarke asynchrone, nicht-thread-und ereignisgesteuerte Webserver, die die Verarbeitung mehrerer Client-Anforderungen gleichzeitig ermöglicht. Es wurde von Igor Sysoev geschrieben, das 2004 unter den Bestimmungen der 2-Klausel-BSD-Lizenz veröffentlicht wurde. **  Nginx führt 2,5 -mal schneller aus**  als Apache und verbrauchte weniger Speicher gemäß einem Benchmark -Test.
**[Was ist Passagier?][2]  **Phusion Passagier auch als Mod \ _Rails und Mod \ _rack bekannt, ist ein kostenloser Webserver und ein Open -Source -Webanwendungsserver. Es ist so konzipiert, dass es schnell, robust, fehlerreich und leicht ist und sich in Apache und Nginx integriert. Es verbessert auch die Sicherheit, Zuverlässigkeit und Skalierbarkeit für Anwendungen. Es ermöglicht Administratoren, Einblicke in Webanwendungsoperationen und Serverleistung zu erhalten. Der Passagier-App-Server wird Ihre Webanwendungen leicht ausgeführt und automatisch verwaltet. Es kann auch mehrere Anwendungen erhalten**   gleichzeitig mit mehreren Mietern und Standalone. Es kann HTTP -Anfragen bewältigen, Prozesse und Ressourcen verwaltet und die Diagnose von Verwaltungsaufgaben, Überwachung und Problemen ermöglicht. Phusion Passagier ist ein kostenloser Anwendungsserver mit Unterstützung für die Bereitstellung und Verwaltung von Meteor-, Ruby -auf -Rails Nginx -Passagier, JavaScript, Python und Node.js -Anwendungen.

## 2. Installieren Sie Nginx- und Passagierpakete:   {#Schritt 1: -Install-Passenger-Packages}
Jetzt ist es Zeit, Passagier und Nginx zu installieren. Sie können einen der beliebten Webserver, die diesem Handbuch folgen, einfach bereitstellen können. Nach unten aufgeführten Befehlen werden Passagier und Nginx über das passende Repository von PHusion installiert. Wenn Sie bereits Nginx installiert haben, werden diese Befehle Nginx auf die Version von PHUSION mit Passagier zusammengestellt.
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Aktivieren Sie das Passagier-Nginx-Modul und starten Sie Nginx neu:   {#Schritt-2: -Enable-the-Passager-Nginx-Module und -Restart-nginx}}
Edit /etc/nginx/nginx.conf und unkontrollieren inclycment /etc/nginx/pasger.conf;. Zum Beispiel können Sie Folgendes sehen:
```
# include /etc/nginx/passenger.conf;
```
Entfernen Sie die Charaktere "#" wie diese:
```
include /etc/nginx/passenger.conf;
```
Wenn Sie keine kommentierte Version von include /etc/nginx/passenger.conf sehen; In Nginx.conf müssen Sie es selbst einfügen. Fügen Sie es in /etc/nginx/nginx.conf im HTTP -Block ein.
http {
    include /etc/nginx/pasger.conf;
    ...
}
Wenn Sie mit diesem Schritt fertig sind, starten Sie Nginx neu **:
```
$ sudo service nginx restart
```

## 4. Installationen validieren:   {#STEP-3: -CHeck-Installation}
Überprüfen Sie nach der Installation die Installation im Terminal, indem Sie den Befehl "sudo/usr/bin/passger-konfigurieren validatinstall" ausführen:
```
sudo /usr/bin/passenger-config validate-install
```
Alle Schecks sollten bestehen. Wenn einer der Schecks nicht bestehen, folgen Sie bitte den Vorschlägen auf dem Bildschirm.
Überprüfen Sie schließlich, ob Nginx die Passagierkernprozesse gestartet hat. Rennen Sie `sudo/usr/sbin/passger-memory-stats`. Sie sollten sowohl Nginx -Prozesse als auch Passagierprozesse sehen. Zum Beispiel wie unten:
```
sudo /usr/sbin/passenger-memory-stats
```
Wenn Sie keine NGINX -Prozesse oder Passagierprozesse sehen, haben Sie wahrscheinlich eine Art Installationsproblem oder Konfigurationsproblem. Weitere Informationen finden Sie in der [Fehlerbehebung][3].

## 5. System- und Passagier-Updates:   {#Schritt 4: -Update-regulär}
NGINX -Updates, Passagier -Updates und Systemaktualisierungen werden regelmäßig über den **APT -Paketmanager**  geliefert. Sie sollten den folgenden Befehl regelmäßig ausführen, um sie auf dem neuesten Stand zu halten:
sudo apt-Get-Update
sudo apt-get upgrade
Nach einem Update müssen Sie Web oder Anwendung nicht neu starten und nach einem Update auch keine Konfigurationsdateien ändern. Das alles wird für Sie von APT automatisch gepflegt.

## 6. **Die besten Open-Source-Webserver** :   {#STEP-4: -Update-regular}}
** Was ist ein Open-Source-Webserver? Grundsätzlich verarbeitet es Anforderungen über das HTTP -Netzwerkprotokoll, um Informationen im World Wide Web zu verteilen.
Mehr als 80% der Webanwendungen und Websites werden von Open Source -Webservern betrieben. Hier habe ich einige der beliebtesten Open -Source -Webservers ** aufgelistet und Sie können einfach eines dieser beliebten Webserver selbst bereitstellen.
  ***Apache HTTP Server** 
  ***LightTPD Web Server** 
  ***OpenLiteSespeed Web Server** 
  ***Apache Tomcat Web Server** 
  ***Caddy Web Server** 

## [][4] Schlussfolgerung:   {#Nächster Schritt}
Herzlichen Glückwunsch, Sie haben NGINX erfolgreich installiert und konfiguriert mit Passagier auf **AWS Production Server  **für Ihre Webanwendung. Bitte werfen Sie einen Blick auf die verschiedenen Leitfäden in der [Passagierbibliothek][5], um den Passagier -Anwendungsserver vollständig zu beherrschen. Möglicherweise interessieren Sie sich besonders für die [Automatisierung der Bereitstellung][6] Ihre Ruby -Anwendung über **  Capistrano** , wodurch Sie beigebracht werden, wie Sie zukünftige Anwendungsaktualisierungen automatisch ohne so viel manuelle Arbeit bereitstellen. Jetzt sind Sie bereit, Ihre Webanwendung in den AWS -Produktionsinstanzen bereitzustellen.
_What Free Web Server und Open Source Web Application Server_ Bevorzugen Sie für **Webentwicklung oder Hosting**  Bedarf_?. Haben Sie Fragen zu kostenlosen Webserver und Open -Source -Webanwendungsserver?

## Erkunden
Möglicherweise finden Sie die folgenden relevanten Blog -Beiträge:
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian][8]
  * [Installieren und sicherer phpmyadmin mit nginx auf Ubuntu][9]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian][10]
  * [Sicher und verschlüsseln Nginx mit lass uns auf Ubuntu 20.04][11]
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
