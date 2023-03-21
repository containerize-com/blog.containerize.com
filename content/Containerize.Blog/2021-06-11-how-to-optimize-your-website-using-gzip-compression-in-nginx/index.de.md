---
title: "So optimieren Sie Ihre Website mithilfe der GZIP -Komprimierung in Nginx" 
seoTitle: "So optimieren Sie Ihre Website mithilfe der GZIP -Komprimierung in Nginx" 
description: "In diesem Artikel werden wir eine Methode zur Optimierung Ihrer Website -Übertragungsgeschwindigkeiten diskutieren, indem die Dateigrößen durch GZIP -Komprimierung in Nginx reduziert werden." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Dieses Tutorial leitet Sie dazu, wie Sie Ihre Website -Leistung optimieren und sie schnell durchführen, indem Sie die Dateigrößen mithilfe der GZIP -Komprimierung in Nginx reduzieren." 
url: /de/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Dieses Tutorial leitet Sie dazu, wie Sie Ihre Website -Leistung optimieren und die Dateigrößen mithilfe der GZIP -Komprimierung in NGINX reduzieren können.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="So aktivieren Sie die GZIP -Komprimierung in Nginx">}}

Dieser Artikel befindet sich in Fortsetzung unserer Tutorials über Nginx. Bisher haben wir abgedeckt, wie nginx als Lastausgleiche verwendet wird, wie nginx als Reverse -Proxy verwendet wird. Und nun deckt dieses Tutorial eine weitere anspruchsvolle Frage „So optimieren Sie Ihre Website mithilfe der Gzip -Komprimierung in Nginx“ ab. In diesem Tutorial leiten wir Ihnen Schritt für Schritt, wie Sie die Gzip-Komprimierung in Nginx aktivieren. Also lasst uns anfangen!
  * [Website -Optimierung mit Komprimierung][1]
  * [Was ist GZIP -Komprimierung?][2]
  * [Wie funktioniert die Gzip -Komprimierung?][3]
  * [Aktivieren Sie die GZIP -Kompression in nginx][4]
  * [Überprüfen Sie die GZIP -Komprimierung][5]
  * [Schlussfolgerung][6]

## Website -Optimierung mit Komprimierung   {#optimize}
Die Leistung einer Website hängt von einer Reihe von Faktoren ab. Einer der Faktoren, von denen es teilweise abhängt, ist die Größe aller Dateien, die der Browser eines Benutzers von Ihrem Server herunterladen muss. Durch Reduzieren oder Komprimieren der Größe dieser übertragenen Dateien kann Ihre Website für den Benutzer schneller geladen werden. Es kann auch die Rechnung für Ihre Website reduzieren, falls Sie für die Bandbreitennutzung für gemessene Verbindungen bezahlen. Komprimierung kann also eine sehr wichtige Rolle bei Ihrer Website -Optimierung spielen.
Da Google und andere Suchmaschinen die Benutzererfahrung einer Website (UX) als entscheidende Faktor in ihren Ranking -Algorithmen in Betracht ziehen. Es ist wichtiger geworden, Ihre Website für Top -Bewertungen zu verbessern und zu optimieren. Zu den wichtigsten Faktoren, auf die Sie achten sollten, gehören die Seitengeschwindigkeit und die Ladezeiten. Der schnellste und einfachste Weg, um die Geschwindigkeit und Leistung Ihrer Website zu verbessern, besteht darin, die Gzip -Komprimierung auf Ihrer Website zu ermöglichen.

## Was ist GZIP -Komprimierung?   {#What-Gzip}
GZIP ist ein **Dateiformat und eine Softwareanwendung** , die für die Dateikomprimierung und Dekompression verwendet wird. Webserver oder andere Software verwenden die GZIP -Komprimierung, um Datendateien zu komprimieren, bevor sie an die Browser der Benutzer gesendet werden. Dies verkürzt die Download -Zeit für die Datei, die Ihre Website schneller macht. Alle modernen Browser unterstützen die GZIP -Komprimierung.
Es ist auch wichtig zu beachten, dass die GZIP -Komprimierung auf Ihrem Webserver aktiviert werden muss, bevor Sie die Datei- und Ordnerkomprimierung aktivieren können. In Kürze werden wir sehen, wie die Gzip -Komprimierung in Nginx aktiviert werden kann.

## Wie funktioniert die Gzip -Komprimierung?   {#how-gzip}
GZIP, die beliebteste Komprimierungsmethode, wird von Webservern und Browsern verwendet, um den Inhalt zu komprimieren und zu dekomprimieren, wenn sie über das Internet übertragen werden. Es wird hauptsächlich in Code- und Textdateien verwendet. GZIP kann die Größe von JavaScript-, CSS- und HTML -Dateien um bis zu 90%verringern.
Standardmäßig komprimiert die GZIP -Komprimierung keine Bilder oder Videos. Aus diesem Grund empfehlen die meisten Tools für die Speed ​​-Test -Test -Testtests von Google PageSpeed ​​dringend, die GZIP -Komprimierung zu aktivieren.
Wenn ein Webserver eine Anfrage für eine Webseite erhält, überprüft der Webserver den Kopfzeilen der Anfrage, um zu überprüfen, ob der Browser GZIP unterstützt. In diesem Fall generiert der Server das Markup für die Seite, bevor Sie GZIP anwenden. GZIP wandelt das HTML-Markup in eine komprimierte Daten um, die dann an den Endbenutzer zugeführt wird. Wenn der Endbenutzer die komprimierten Daten empfängt, dekomprimiert sein Browser sie.

## Aktivieren Sie die GZIP-Komprimierung in nginx   {#enable-gzip}
Um die Nginx -GZIP -Konfiguration zu ändern, öffnen Sie die Hauptnginx -Konfigurationsdatei in „_vi_“ oder in Ihrem bevorzugten Texteditor:
```
sudo vi /etc/nginx/nginx.conf
```
Suchen Sie den Abschnitt _gzip_ Einstellungen, der so aussieht:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Wie Sie sehen können, ist GZIP standardmäßig mit _gzip aktiviert; _, aber es gibt andere kommentierte GZIP -Einstellungen.
Wir können _gzip_types_ aktivieren, um die Komprimierung auf Dateitypen zu aktivieren, die wir komprimieren möchten. Zum Beispiel
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Starten Sie nun Nginx neu, um neue Einstellungen in Kraft zu setzen.

## Überprüfen Sie die GZIP -Komprimierung   {#Verify}
Nachdem wir die GZIP -Komprimierung aktiviert haben, lassen Sie es uns überprüfen.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Die Antwort bleibt gleich, da die Komprimierung für diesen Filetyp bereits aktiviert wurde:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Schlussfolgerung   {#Conclusion}
In diesem Artikel haben wir erfahren, dass Sie das Nginx -GZIP -Modul verwenden können, um Dateiübertragungen zu beschleunigen. Wir haben Ihnen Schritt für Schritt gezeigt, wie Sie die GZIP -Komprimierung in Nginx mithilfe des GZIP -Moduls aktivieren können. In der offiziellen Dokumentation für [GZIP -Modul][7] werden andere Konfigurationsanweisungen aufgeführt, die Sie sich möglicherweise ansehen möchten. Ich hoffe, dieses Tutorial hilft Ihnen bei der Optimierung Ihrer Website -Leistung und -geschwindigkeit.

## Erkunden
  * [So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu][8]
  * [So richten und konfigurieren Sie Nginx als Reverse Proxy][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
