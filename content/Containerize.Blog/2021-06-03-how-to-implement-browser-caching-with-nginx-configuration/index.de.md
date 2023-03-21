---
title: "So implementieren Sie das Browser -Caching mit Nginx -Konfiguration" 
seoTitle: "So implementieren Sie das Browser -Caching mit Nginx -Konfiguration" 
description: "Je schneller eine Website lädt, desto wahrscheinlicher ist ein Besucher. In diesem Tutorial implementieren wir das Browser -Caching mit Nginx -Konfiguration." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Je schneller eine Website lädt, desto wahrscheinlicher ist ein Besucher. Dieser Artikel leitet Sie mit der Implementierung des Browser -Caching mit Nginx -Konfigurationen." 
url: /de/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Je schneller eine Website lädt, desto wahrscheinlicher bleibt ein Besucher. Dieser Artikel leitet Sie mit der Implementierung des Browser -Caching mit Nginx -Konfigurationen.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="So implementieren Sie Browsr Caching mit Nginx -Konfiguration">}}

In der Tutorial -Serie unserer NGINX -Reihe haben wir [wie man Nginx als Lastbalancer verwendet][1], [Konfigurieren von Nginx als Reverse Proxy][2], [verwenden Sie mehrere PHP Regeln für Nginx -Schreibrichtlinien][4]. In dem heutigen Artikel berichten wir über ein sehr wichtiges Thema, das Unternehmen hilft, die Erfahrung ihres Benutzers zu verbessern, indem ein Browser -Caching eingesetzt wird. In diesem Tutorial werden Sie Sie mithilfe des Browser -Caching mit der NGINX -Konfiguration mit dem Headermodul von NGINX implementieren. Lass uns anfangen!
  ***[Hebelbrowser -Caching][5]** 
  *[**nginx Header -Modul** ][6]
  *[**E-Tage und If-None-Match** ][7]
  *[**Hebelbrowser -Caching mit Nginx -Konfiguration** ][8]
  *[**Schlussfolgerung** ][9]

## Hebelbrowser Caching   {#Browser-Caching}
Je schneller eine Website lädt, desto wahrscheinlicher ist es, dass ein Besucher auf der Website bleibt. Websites mit vielen Bildern und interaktiven Inhalten werden im Hintergrund geladen, und die Website eröffnet eine komplexe Aufgabe. Es besteht darin, viele verschiedene Dateien vom Server einzeln anzufordern. Das Minimieren der Menge dieser Anfragen ist eine Möglichkeit, Ihre Website zu beschleunigen.
Eine Methode zur Verbesserung der Website -Leistung ist _leveraging Browser Caching_. Browser Caching spielt eine große Rolle im Cache -Mechanismus, um die Seitengeschwindigkeit zu erhöhen. Statische Dateien wie CSS, JS, JPEG, PNG usw., die für die Website verwendet werden, können auf dem Computer des Besuchers für den zukünftigen Zugriff gespeichert werden. Immer wenn der Besucher auf eine neue Seite auf Ihrer Website trifft, können auf die oben genannten Dateien vom Computer des Besuchers anstelle Ihres bereitgestellten Servers zugegriffen werden, wodurch die Seitenlastgeschwindigkeit enorm erhöht wird.

## Nginxs Header-Modul   {#Header-Modul}}
Das _ngx \ _http \ _Headers_Module_-Modul ermöglicht das Hinzufügen der Headerfelder "_expires_" und "_cache-control_" und beliebige Felder zu einem Antwortkopf. Wir können das Header -Modul verwenden, um diese HTTP -Header zu setzen. Das Header -Modul ist ein Kern -Nginx -Modul, was bedeutet, dass es nicht separat installiert werden muss, um verwendet zu werden.
Beispielkonfiguration sieht so aus:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## E-Tag und If-None-Match   {#etage}
Nehmen wir an, wir haben einige Testdateien mit unterschiedlichen Erweiterungen, z. B. test.html, test.jpg, test.css und test.js. Standardmäßig haben alle Dateien das gleiche Standard -Caching -Verhalten. So überprüfen Sie die Antwort -Header einer Datei mit dem folgenden Befehl, um eine Datei von unserem lokalen NGINX -Server anzufordern, und zeigt die Antwortheader an:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
In der zweiten bis zuletzten Zeile finden Sie den Header _ETAG_, der eine eindeutige Kennung für diese spezielle Überarbeitung der angeforderten Datei enthält. Wenn Sie den letzten _curl_ -Befehl wiederholt ausführen, finden Sie genau den gleichen ETAG -Wert.
Bei Verwendung eines Webbrowsers wird der Wert _etag_ gespeichert und mit dem Header _if-none-match_ an den Server zurückgesendet, wenn der Benutzer die Seite oder dieselbe Datei vom Browser aus irgendeinem Grund aktualisiert.
Wir können dies in der Befehlszeile mit dem folgenden Befehl simulieren.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Beachten Sie die eindeutige Kennung, sie muss mit dem Antwortwert übereinstimmen, den wir aus unserem vorherigen _curl_ call erhalten haben. Die Antwort wird diesmal anders sein:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Dieses Mal antwortet Nginx mit **304 nicht geändert** . Es wird die Datei nicht erneut über das Netzwerk gesendet. Stattdessen wird der Browser angegeben, dass die Datei, die er bereits lokal heruntergeladen hat, wiederverwenden kann. Dies ist nützlich, da es den Netzwerkverkehr reduziert. Der Browser muss jedoch noch einen HTTP -Anruf tätigen, um eine Antwort vom Server zu erhalten, die noch einige Zeit dauert.

## Hebelbrowser-Caching mit Nginx-Konfiguration   {#Nginx-Konfiguration}
In unserem vorherigen Beispiel haben wir erklärt, wie Sie mit dem E-Tag und dem If-None-Match den Netzwerkverkehr reduzieren können. Das Problem mit "etag" ist jedoch, dass der Browser immer eine Anfrage an den Server sendet, in dem er gefragt wird, ob er seine zwischengespeicherte Datei wiederverwenden kann. Dies braucht immer noch Zeit, um die Anfrage zu stellen und die Antwort zu erhalten.
Mit Hilfe des Header -Moduls von NGINX werden wir den Browser dazu erstellen, einige Dateien lokal vorzulegen, ohne den Server explizit zu fragen.
Fügen Sie die folgenden 3 Zeilen in Ihre Nginx -Konfigurationsdatei hinzu, um den statischen Inhalt in nginx zu cache
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
Die erste Zeile weist Nginx an, 30 Tage lang im Client -Browser in den Clientbrowser zu kommen (30D). Nach diesem Zeitraum führt eine neue Anfrage des Benutzers zu einer Neubewertung und dem Update des Clientbrowsers.
Sie können die obigen Zeilen in _location_, _server_ oder _http_blöcken platzieren.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Wenn Sie sie in Standortblockaden platzieren, wird nur der von diesem Ort bediente Inhalt zwischengespeichert. Im obigen Fall werden nur Anfragen an / static / zwischengespeichert.
Wenn Sie bestimmte Dateitypen zwischenspeichern möchten, können Sie dies mit dem Standortblock erledigen.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Im obigen Beispiel zwischen verschiedenen Dateitypen wie JS, JPG, CSS usw. zwischengespeichert wir.
In ähnlicher Weise können Sie die Cache -Konfiguration in _server_ Block vor einem Standortblock platzieren. In diesem Fall werden alle Antworten dieses Servers zwischengespeichert. Oder Sie können es im Block _http_ platzieren. In diesem Fall werden alle von der Nginx -Konfigurationsdatei unterstützten Serveranforderungen zwischengespeichert.

## Schlussfolgerung   {#Conclusion}
Mit dem Header-Modul des NGINX kann die Reaktion beliebige Headers hinzufügen. Die richtige Einstellung von Cache-Kontroll-Headern ist jedoch eine der nützlichsten Anwendungen. Es hilft Ihnen, die Leistung der Website zu verbessern, insbesondere für Benutzer in Netzwerken mit höherer Latenz wie mobilen Carrier -Netzwerken. In diesem Tutorial haben wir gelernt, wie man das Browser -Caching mit Nginx -Konfiguration nutzt. Ich hoffe, dies hilft Ihnen dabei, die Erfahrung Ihres Benutzers auf Ihrer Website zu verbessern.

## Erkunden
  * [So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu][3]
  * [So richten und konfigurieren Sie Nginx als Reverse -Proxy][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
