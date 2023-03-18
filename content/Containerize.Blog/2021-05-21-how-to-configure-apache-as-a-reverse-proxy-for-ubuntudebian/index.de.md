---
title: "So konfigurieren Sie Apache als Reverse Proxy für Ubuntu/Debian" 
seoTitle: "So konfigurieren Sie Apache als Reverse Proxy für Ubuntu/Debian" 
description: "Mit Apache Reverse Proxy -Konfiguration Schritt für Schritt können Sie ein oder mehrere Back -End -Server hinter einem Proxy -Server mit mod_proxy unter Ubuntu/Debian Linux ausführen." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Mit Apache Reverse Proxy können Sie ein oder mehrere Back-End-Server hinter einem Proxy-Server ausführen. So konfigurieren Sie Apache Reverse Proxy auf Ubuntu/Debian -System." 
url: /de/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy ermöglicht es Ihnen, einen oder mehrere Back-End-Server hinter einem Proxy-Server auszuführen. So konfigurieren Sie Apache Reverse Proxy auf Ubuntu/Debian -System.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Installieren und konfigurieren Sie Apache Reverse Proxy">}}


## **Überblick**
Apache Reverse Proxy ermöglicht es allen Datenverkehr und leitet ihn weiter, um einen oder mehrere Backend -Server oder -Container hinter einem Proxy -Server auszuführen, ohne sie öffentlich auszustellen. Der Back-End-Webserver kann entweder ein weiterer Apache2- oder Open-Source-HTTP-Server wie Nginx sein. Apache2 HTTP Server ist einer der beliebtesten Open -Source -Webserver, der heute verwendet wird.
Es gibt viele Gründe, einen Proxy -Server zu installieren und zu konfigurieren. Beispielsweise kann Reverse Proxy Ihnen helfen, Sicherheit für den Ausgleich von Ladungen hinzuzufügen, den Zugriff auf bestimmte Standorte einzuschränken, um Angriffe und viele weitere zu verhindern. In diesem Artikel wird erläutert, wie Sie die Konfiguration von Apache Reverse Proxy Schritt für Schritt für den HTTPS -Server auf Ubuntu/Debian installieren und konfigurieren:
  * Apache2 installieren
  * Apache2 konfigurieren
  * Aktivieren Sie seine Proxy -Module
  * Aktivieren Sie die SSL
  * Starten Sie Apache2 neu
  * Abschluss

## Schritt 1: Installieren Sie Apache2
Die Installation von Apache2 ist sehr einfach und einfach auszuführen. Um Installationen durchzuführen, führen Sie die folgenden Befehle einfach aus:
sudo apt-Get-Update
sudo apt-get install apache2
{{_LINE_25_}}
Verwenden Sie nach der Installation von Apache2 in Ihrem System die folgenden SystemCTL -Befehle auf Debian Linux oder Ubuntu Linux -Version Ubuntu, um Apache2 zu stoppen, zu starten, zu aktivieren und neu zu starten, um immer neu zu starten, wenn sich der Server startet.
sudo systemctl stop apache2.service stop
sudo systemctl starten apache2.service
sudo systemctl aktivieren apache2.service
sudo systemctl starten Sie Apache2.service neu
{{_LINE_31_}}
Sie können den Status des Webservers mit dem folgenden Befehl anzeigen:
sudo systemctl status apache2.service
{{_LINE_34_}}
Um Apache2 Setup zu überprüfen, öffnen Sie Ihren Browser und durchsuchen Sie den Server -Hostnamen oder Ihre System -IP -Adresse. Sie sollten die APACHE2 -Standard -Testseite wie unten gezeigt sehen. Wenn Sie das sehen, funktioniert Apache2 wie erwartet. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Installieren und konfigurieren Sie Apache Reverse Proxy Proxy für Ubuntu">}}


## Schritt 2: Konfigurieren Sie Apache2 als Reverse Proxy
Apache2 ist erfolgreich installiert und verwendet. Sie können jetzt Apache2 so konfigurieren, dass sie als Apache2 Reverse Proxy Ubuntu arbeiten. APache2 Proxy -Modul ** Proxypass ** und ** ProxypassReverse ** FUNKTIONEN EINEN RECORE Proxy. Um ** Proxypass ** und ** Proxypassreverse ** zu verwenden, müssen Sie zunächst wissen, dass Sie den Datenverkehr leiten möchten.
Der Apache2 Reverse Proxy -Server hört auf dem Standard -HTTP -Port, der Port 80 in einem einfachen Setup befindet, auf alle Datenverkehr. Der Back-End-Server, auf dem die Website-Inhalte auf einem benutzerdefinierten Port angehört werden, ist höchstwahrscheinlich Port 8080.
In diesem Blog-Artikel werden Apache2 eingerichtet, um Port 80 anzuhören und dann den Datenverkehr auf den Back-End-Server zu lenken, der auf Port 8080 hört. Führen Sie den Befehl unten aus, um eine Proxy-VirtualHost-Datei namens apache2Proxy.conf zu erstellen.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Fügen Sie dann den folgenden Codes -Block in die Datei apache2Proxy.conf hinzu und speichern Sie sie dann.
{{_LINE_43_}}
        Servername Beispiel.com
        Serveralias www.example.com
        Serveradmin webmaster@example.com
        ERROLLOG $ {apache_log_dir} /Error.log
        CustomLog $ {apache_log_dir} /access.log kombiniert
        ProxyRequests ab
{{_LINE_50_}}
          Bestellen leugnen, erlauben
          Von allen erlauben
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        Proxypassreverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Bestellen lassen, leugnen, leugnen
          Von allen erlauben
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Die Datei apache2Proxy.conf enthält Ihren Servernamen sowie den Proxy_Pass, wobei der Datenverkehr unterrichtet wird, wenn sie vom HTTP -Proxy -Server empfangen werden.

## Schritt 3: APache2 Proxy aktivieren
Apache2 Web Server ist jetzt installiert und erfolgreich eingerichtet. Apache verfügt über viele verfügbare gebündelte Module. Diese Module sind in der frischen Apache2 -Installation nicht aktiviert. Zunächst müssen wir die Module aktivieren, die wir benötigen, um das erforderliche Apache Mod_proxy-Modul und einige seiner Add-On-Module zur Unterstützung verschiedener Netzwerkprotokolle zu aktivieren. Führen Sie die unten aufgeführten Befehle aus, um die HTTP -Proxy -Module zu aktivieren.
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbMethod_byrequests
{{_LINE_69_}}
Aktivieren Sie nun die VirtualHost -Site und starten Sie Apache2 neu, um die Konfiguration der Apache2 -Module neu zu laden.
sudo a2ensit apache2proxy.conf
sudo systemctl starten Sie Apache2.service neu
Starten Sie einen Webbrowser Ihrer Wahl und navigieren Sie zu Ihrem Server -Hostnamen wie Beispiel.com. Sie werden jetzt auf dem Standard -Port, d. H. 8080, auf Ihrem Apache2 -Server vergrößert.

## Schritt 4: Aktivieren Sie die SSL {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Wenn Sie das Apache Reverse Proxy SSL -Modul aktivieren möchten, führen Sie den folgenden Befehl aus, um Apache Reverse Proxy HTTPS -Proxy -Pass zu aktivieren:
sudo a2enmod ssl
Dadurch wird Backend -Server sicherer Apache Reverse Proxy HTTP für die Unterstützung von HTTPS zur Verfügung gestellt.

## Schritt 5: apache2 {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7} neu starten Sie
Um diese Änderungen in Kraft zu setzen, starten Sie Apache neu, indem Sie den folgenden Befehl ausführen:
sudo systemctl starten Sie Apache2.service neu
Glückwunsch! Sie haben Apache2 Reverse -Proxy erfolgreich installiert und konfiguriert auf Ihrem Linux -System.

## ** Fazit: ** {#4A1a}
In diesem Tutorial haben wir Schritt für Schritt untersucht und diskutiert, was ein Proxy -Server und ein Apache -Reverse -Proxy -Beispiel für die Konfiguration ist. Wir haben auch gelernt, Apache2 als Reverse -Proxy auf einem Linux -System einzurichten und zu konfigurieren. In unseren bevorstehenden Tutorials werden wir mehr interessante Themen zu Apache und anderen Webserver -Lösungsstapeln besprechen.

## Erkunden
Möglicherweise mögen Ihnen auch die folgenden verwandten Artikel:
  * [Wie zu] [1] [Installieren und sicherer phpmyadmin mit nginx auf Ubuntu] [2]
  * [So richten Sie Nginx mit Passagier auf AWS Production Server] [3]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian] [4]
  * [Sicher und verschlüsseln Sie Nginx mit lasst uns auf Ubuntu 20.04] [5]
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu] [6]
[1]: https://blog.containerize.com/web-server-solution-stack/de/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
