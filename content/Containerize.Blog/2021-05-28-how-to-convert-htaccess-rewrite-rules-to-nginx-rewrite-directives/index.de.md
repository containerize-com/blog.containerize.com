---
title: "So konvertieren Sie HTAccess -Regeln in Nginx -Umschreiben von Richtlinien" 
seoTitle: "So konvertieren Sie HTAccess -Regeln in Nginx -Umschreiben von Richtlinien" 
description: "Nginx unterstützt nicht .Htaccess -Umschreiben von Regeln, sodass Entwickler diese Regeln in Nginx -Umschreiben -Richtlinien umwandeln müssen. Lassen Sie uns lernen, wie Sie diese Konvertierung durchführen." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX unterstützt keine HTAccess -Umschreiben von Regeln, und Entwickler müssen diese Regeln in Nginx -Umschreiben -Richtlinien umwandeln. Lassen Sie uns lernen, wie man diese Konvertierung durchführt." 
url: /de/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx unterstützt keine HTAccess -Umschreiben von Regeln, und Entwickler müssen diese Regeln in Nginx -Umschreiben -Richtlinien umwandeln. Lassen Sie uns lernen, wie diese Konvertierung durchführt.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Konvertieren Sie .htaccess -Regeln in Nginx -Richtlinien um">}}

In unserem letzten Tutorial haben wir gelernt [wie man mehrere PHP -Versionen mit Nginx auf Ubuntu installiert][1]. Apache ist einer der beliebtesten Webserver, aber in letzter Zeit hat sich Nginx als Konkurrent von Apache etabliert. Nginx unterstützt jedoch keine HTAccess -Umschreiben von Regeln. In diesem Artikel werden wir also lernen, wie man HTaccess -Regeln in Nginx -Umschreiben von Richtlinien umwandelt. Lass uns anfangen!
  ***[Nginx Regeln umschreiben][2]** 
  *[**.
  *[**konvertieren .htaccess -Regeln in Nginx -Schreibanweisungen** ][4]
  *[**Fazit** ][5]

## nginx schreibe Regeln   {#nginx} neu
Schreiben Sie Regeln um, ändern Sie einen Teil oder die gesamte URL in einer Kundenanfrage, um Kunden normalerweise darüber zu informieren, dass die Ressource, die sie jetzt verlangt, an einem anderen Ort liegt, oder um den Verarbeitungsfluss innerhalb von NGINX zu steuern. Zum Beispiel, um Anforderungen an einen Anwendungsserver weiterzuleiten, wenn der Inhalt dynamisch generiert werden muss. Die Anweisung try_files wird häufig für diesen Zweck verwendet.
Die beiden Anweisungen für allgemeine Nginx -Umschreibungen sind _return_ und _rewrite_, und die _try_files -Direktive_ ist ein praktischer Weg, um Anforderungen an Anwendungsserver zu lenken.
Die Rendite -Richtlinie ist einfacher der beiden Richtlinien für allgemeine Purpose. Sie legen die Rückgabe in einen Server- oder Standortkontext ein.
Hier ist beispielsweise ein sehr einfaches Beispiel, das Client
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Aber was ist, wenn Sie komplizierte Unterschiede zwischen URLs durchführen, Elemente in der ursprünglichen URL erfassen oder Elemente auf dem Pfad ändern oder hinzufügen müssen? Sie können in solchen Fällen die _rewrite_ -Anweisung verwenden.
Hier ist eine Muster -Nginx -Umschreiben -Regel, die die Umschreiben -Anweisung verwendet. Es entspricht URLs, die mit der String /Songs beginnen und dann später im Pfad das /Media /oder /Audio /Verzeichnis enthält. Es ersetzt diese Elemente durch / mp3 / und fügt die entsprechende Dateierweiterung .mp3 oder .ra hinzu. Die Variablen $ 1 und $ 2 erfassen die nicht ändernden Pfadelemente. Als Beispiel wird/download/cdn-west/media/file1 wird/download/cdn-west/mp3/file1.mp3. Wenn der Dateiname (z. B. .flv) eine Erweiterung gibt, streift der Ausdruck ihn aus und ersetzt ihn durch .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess schreibe Regeln   {#APache} um.
Die .htaccess -Datei steuert eine Reihe von Möglichkeiten, wie auf eine Website zugegriffen, blockiert und umgeleitet werden kann. Dies erfolgt mit einer Reihe von einer oder mehreren .htaccess -Umschreiben von Regeln. Diese Umschreibungen werden vom Modul von Apache von Mod_rewrite ausgeführt.
Mod_rewrite bietet eine Möglichkeit, eingehende URL -Anforderungen dynamisch auf der Grundlage regulärer Expressionsregeln zu ändern. Auf diese Weise können Sie alle URLs auf Ihre interne URL -Struktur auf eine Weise zuordnen, die Sie möchten. Dies wird auch verwendet, um Ihre externen URLs sauber zu machen und sie dann auf hässlich aussehende interne URLs zuzuordnen.
Zum Beispiel führt die Rewrite -Regel .htaccess um.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## konvertieren .htaccess -Regeln in nginx -Umschreiben   {#Convert} Umschreiben
Wie wir in unserem obigen Beispiel für die Umleitung einer nicht-www-URL in eine WWW-URL gezeigt haben, wenden wir dieselbe .htaccess-Umschreiben-Regel in die Nginx-Umschreiben-Richtlinie um.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Also haben wir hier zwei separate _server_blöcke erstellt, eine für _yourdomain.com_ und die andere für _www.yourdomain.com_. Und im _server_ block für _yourdomain.com_ wir verwenden die _return_-Anweisung, um nicht-www-URL zu www URL umzuleiten.
Die gleiche Umleitung, die wir mit der Return -Richtlinie durchgeführt haben, kann auch mit der Umschreiben -Richtlinie durchgeführt werden, wird jedoch nicht empfohlen.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Um die WordPress Htaccess -Regeln in die Nginx Try_files -Anweisung umzuwandeln.
[WordPress.org verteilt][6] Ein grundlegender Standard **. Htaccess ** Datei mit Folgendes. Htaccess -Regeln umschreiben Sie die REMALINKS:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Hier ist die konvertierte Nginx try_files -Anweisung
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Schlussfolgerung   {#Conclusion}
In diesem Tutorial haben wir Apache's .htaccess -Umschreiben von Regeln und darüber untersucht, wie wir diese .htaccess -Regeln in Nginx -Umschreibungsrichtlinien umwandeln können. Wir haben verschiedene NGINX -Direktiven weiter untersucht, mit denen URLs neu geschrieben werden können. Wir haben auch Beispiele für Nginx und Apache neu geschrieben. Ich hoffe, das Tutorial ist hilfreich für Sie.

## Erkunden
  * [So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu][1]
  * [So richten und konfigurieren Sie Nginx als Reverse -Proxy][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
