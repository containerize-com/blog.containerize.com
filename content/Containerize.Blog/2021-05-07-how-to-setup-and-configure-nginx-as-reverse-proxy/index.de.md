---
title: "So richten und konfigurieren Sie Nginx als Reverse -Proxy" 
seoTitle: "So richten und konfigurieren Sie Nginx als Reverse -Proxy" 
description: "In diesem Tutorial geht es darum, Nginx als Reverse -Proxy einzurichten und zu konfigurieren. Nginx gilt als eine der beliebtesten Open-Source Reverse-Proxy-Webserver." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx ist ein Open-Source-Webserver, der auch als Reverse Proxy fungieren kann. In diesem Tutorial können Sie lernen, wie Sie Nginx als Reverse -Proxy einrichten und konfigurieren." 
url: /de/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx ist ein Open-Source-Webserver, der auch als Reverse Proxy fungieren kann. In diesem Tutorial können Sie lernen, wie Sie Nginx als Reverse -Proxy einrichten und konfigurieren.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Verwenden Sie Nginx als Reverse Proxy -Server">}}


## Überblick:
Nginx und Apache sind zwei am meisten ** beliebte Open -Source -Webserver **, die häufig mit PHP verwendet werden. Ein Reverse -Proxy oder ein Gateway fungiert als Verbindung zwischen dem Client und dem Server. Der Client und der Server tauschen Informationen miteinander aus, um kontinuierlich und effizient zu arbeiten. Die meisten häufigsten Reverse -Proxys sind ** nginx und Apache ** und beide können auf demselben virtuellen Computer konfiguriert werden, wenn mehrere Websites gehostet werden. Ein Reverse -Proxy schützt Webserver vor Angriffen und Connection Gateway erscheint dem Client wie ein gewöhnlicher Webserver, auf dem keine speziellen Reverse -Proxy -Nginx -Konfigurationen erforderlich sind. Der Client sendet eine Anfrage, während der Reverse Proxy entscheidet, wo die angeforderten Informationen weitergegeben werden sollen, und dann das endgültige Ausgabeergebnis an den Client liefert.
Nach viel Anerkennung für unsere Serie über Redis -Tutorials erhielten wir viele Anfragen, eine Serie zu Nginx -Tutorials zu starten. Letzte Woche haben wir mit einem Tutorial über die Verwendung von [Nginx Reverse Proxy Last Balancer] [1] für Ihre Anwendungen begonnen. Dieses einfache Beispiel für Nginx Reverse Proxy Config bietet viele Vorteile für Zuverlässigkeit und Nginx Reverse Proxy. Nginx Simple Reverse Proxy ist der am aktivsten verwendete Open Source Nginx -Proxy -Server im Internet. In diesem Tutorial werden wir ** konfigurieren und untersuchen, wie Nginx als Reverse -Proxy ** verwendet wird und wie Sie es als Reverse -Proxy auf einem einzelnen Server einrichten. Also lasst uns anfangen!
  * Was ist ein Proxy -Server?
  * Vorwärts gegen Reverse Proxy
  * Reverse Proxy konfigurieren
  * Was sind die Vorteile von Nginx Reverse Proxy?
  * Abschluss

## Was ist ein Proxy -Server?
** Ein Proxy -Server ** fungiert als Gateway zwischen Ihnen und dem Internet. Es handelt sich um einen Zwischenserver, der Endbenutzer von den Websites trennt, die sie durchsuchen. Proxy -Server bieten unterschiedliche Ebenen an Funktionen, Sicherheit und Privatsphäre gemäß Ihrem Anwendungsfall oder in der Unternehmensrichtlinie.
Mit einem Proxy -Server fließt der Internetverkehr über den Proxy -Server auf dem Weg zu der von Ihnen angeforderten Adresse. Die Anfrage erfolgt dann (meistens) durch denselben Proxy -Server, und dann leitet der Proxy -Server die von der Website empfangenen Daten weiter weiter.

## Vorwärts gegen Reverse Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="Nginx als Reverse Proxy Server">}}

Im Allgemeinen, wenn wir vom Stellvertreter sprechen, meinen wir die meiste Zeit den Vorwärtsbekannten. ** Forward -Proxies ** eignen sich hervorragend zum Vermeiden von Länderbeschränkungen wie der Großen Firewall Chinas. Der Client stellt sich lediglich über den Vorwärtsproxy mit blockierten Ressourcen her. Weiterleitende Proxys können die Identität des Benutzers verbergen, indem sie ihre IP -Adresse ändern. Im Grunde genommen sitzt Nginx als Forward -Proxy zwischen dem Client und dem Internet, sodass der Endserver des tatsächlichen Clients nicht bekannt ist.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx als umgekehrter Proxy">}}

** Reverse -Proxies ** fungieren auch als Vermittler, sitzen jedoch auf der anderen Seite der Verbindung. Reverse Proxies sind bei ** Lastausgleich **, Weboptimierung und Sicherheit hervorragend. Reverse Proxying wird normalerweise verwendet, um die Last auf mehrere Server zu verteilen, Inhalte nahtlos von verschiedenen Websites anzuzeigen oder Anforderungen für die Verarbeitung an Anwendungsserver über andere Protokolle als HTTP weiterzugeben.

## Konfigurieren Sie Nginx als Reverse Proxy:
Wenn Nginx eine Anforderung stellt, wird die Anforderung an einen angegebenen Proxied -Server gesendet, die Antwort abgerufen und an den Client zurückgesendet. Es ist möglich, Anforderungen an einen HTTP-Server oder einen Nicht-HTTP-Server mit einem angegebenen Protokoll an einen HTTP-Server oder einen Nicht-HTTP-Server zu erhalten. Unterstützte Protokolle umfassen ** Fastcgi, UWSGI, SCGI und Memcached **.
Um eine Anfrage an einen HTTP -Proxied -Server zu übergeben, wird die Anweisung ** proxy_pass ** in einem ** Standort ** angegeben. Zum Beispiel:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Diese Konfiguration von Nginx Reverse Proxy -Beispiel führt dazu, alle an diesem Ort verarbeiteten Anforderungen an den Proxied -Server an der angegebenen Adresse zu übergeben. Diese Adresse kann als Domänenname oder IP -Adresse angegeben werden. Die Adresse kann auch einen Port enthalten:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Sie können sogar modifizierte oder benutzerdefinierte Header an den Proxied -Server in nginx ** proxy \ _set \ _Header ** Host unten im Beispiel übergeben.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx unterstützt auch die Pufferung, um die Leistung zu verbessern. Mit der pufferend aktivierten NGINX speichert die Antwort, die er vom Proxied -Server erhält, solange der Client es heruntergeladen benötigt.
Anstatt alle Anforderungen an einen einzelnen Server zu starten, können Sie auch mehrere Backend -Server einrichten ** und die Nginx -Balance zwischen diesen stellvertretenden Servern laden lassen. Wir haben dies bereits in unserem Tutorial über [Nginx Load Balancing] [1] behandelt.

## Was sind die Vorteile von Nginx Reverse Proxy?
Im Folgenden finden Sie die Vorteile des Einrichtens des Nginx Reverse Proxy Server:
  *Nginx ist eines der beliebtesten ** Open Source -Webserver **, das auch das beliebteste Proxy -Tool ist. Nginx Reverse Proxy -Konfiguration ist sehr einfach zu implementieren, da sie dem Benutzer High -End -Sicherheit gegen DDOS- und DOS -Webserver -Angriffe bietet.
  *Es hilft, eine ausgewogene Last zwischen Websites mit hohem Verkehr und Backend -Servern wie ** Dropbox, Netflix und Zynga ** zu erstellen.
  * Es bietet Caching-Mechanismus für einen langsameren Back-End-Server und hochverkehrsberuflichen Websites, um Nginx Reverse Proxy Virtual Host einzurichten. Für jede Webanforderung von der Clientseite muss kein neuer Prozess eingerichtet werden.
  * Es fungiert auch als Reverse -Proxy -Server für mehrere Protokolle wie HTTP, HTTPS, TCP, UDP, SMTP, IMAP und POP3 usw.
  *Nginx kann ** mehr als 10000 Verbindungen mit einem Fußspeicher -Fußabdruck verwandeln und mehrere Webserver unter einer einzelnen IP -Adresse bedienen.
  * Es hilft auch dabei, den Inhalt von Seiten zu zwischenstrahlen und die SSL -Verschlüsselung durchzuführen, um das Last vom Webhostserver zu senken. Nginx ist einer der besten Webserver, um die Leistung statischer Inhalte zu verbessern, indem sie komprimiert und die Ladezeit erhöht.
  * Es ist ein hervorragendes Tool für eine Mehrfachserver -Umgebung und kann auch für verschiedene Aufgaben nützlich sein, wie beispielsweise für ein einzelnes Server anonym.

## Abschluss:
In diesem Tutorial ** nginx Reverse Proxy ** haben wir untersucht, was ein Nginx -Proxy -Server ist und Nginx Reverse Proxy eingerichtet hat. Differenz zwischen Vorwärts- und Reverse Proxy Server Nginx. Wir haben auch mit Beispielen gelernt, wie Nginx als Reverse -Proxy eingerichtet wird. Jetzt verstehen Sie voll und ganz, wie Sie die Konfiguration von ** nginx Reverse Proxy Schritt für Schritt ** installieren. Das obige Tutorial hilft Ihnen dabei, mit einem Reverse -Proxy eingerichtet zu werden. In unseren bevorstehenden Tutorials werden wir weitere interessante Themen zu Nginx diskutieren.
_Was ist Ihr bevorzugter _reverse Proxy_-Server, der einfach, dynamisch und voll ausgestattet ist? Haben Sie Fragen zu Leading_ _open Source _reverse Prox__Y, ** Last Balancer für http und tcp ** basierte Anwendungen_?

## Erkunden
Möglicherweise finden Sie die mehr verwandten unteren Artikel
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian] [3]
  * [Secure Nginx mit Let's verschlüsseln auf Ubuntu 20.04] [4]
  * [So verwenden Sie Nginx als Lastausgleich für Ihre Anwendung] [1]
  * [So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu] [5]
  * [Konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian] [6]
  * [Installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu] [7]
  * [Setup Nginx mit Passagier auf AWS Production Server] [8]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
