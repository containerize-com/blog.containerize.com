---
title: "So verwenden Sie Nginx als Lastausgleich für Ihre Anwendung" 
seoTitle: "So verwenden Sie Nginx als Lastausgleich für Ihre Anwendung" 
description: "Nginx ist ein beliebter Open-Source-Webserver. Es ist bekannt für hohe Leistung und Skalierbarkeit. In diesem Tutorial lernen wir, Nginx als Lastausgleicher zu verwenden" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx ist beliebt für seine hohe Leistung und Skalierbarkeit. Es ist der Nr. 1 Open Source -Webserver. In diesem Tutorial lernen wir, Nginx als Lastausgleicher zu verwenden." 
url: /de/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## nginx ist beliebt für seine hohe Leistung und Skalierbarkeit. Es ist der Nr. 1 Open Source -Webserver. In diesem Tutorial lernen wir, Nginx als Lastausgleicher zu verwenden.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="So verwenden Sie Nginx als Lastausgleicher">}}

Moderne Websites für hohe Verkehrsdaten bedienen Hunderttausende und in einigen Fällen Millionen von gleichzeitigen Anfragen von Benutzern oder Clients und geben die richtigen Text-, Bilder-, Video- oder Anwendungsdaten schnell und zuverlässig zurück. Um die Bedürfnisse dieser hohen Volumina und der Rechenleistung zu erfüllen, benötigen Sie mehr Server. Mit mehr Servern benötigen Sie eine Möglichkeit, den Verkehr zwischen diesen Servern auszugleichen. In diesem Blog -Tutorial werden wir untersuchen, was ein Lastausgleich ist und wie wir Nginx als Lastbalancer verwenden können.
Um Nginx Load Balancing als Voraussetzung zu konfigurieren, müssen Sie mindestens zwei Hosts mit einer Webserver -Software installiert und konfiguriert haben, um die Vorteile des Lastausgleichs mit NGINX anzuzeigen. Wenn Sie bereits über einen ausführenden Webhost einrichten, werden Sie es doppelten, indem Sie ein benutzerdefiniertes Bild erstellen und auf einem neuen Webserver bereitstellen. Lernen wir also, wie Sie die Konfiguration des NGINX -Lastausgleichs Schritt für Schritt für Ihre Cloud -Server einrichten.
  ***[Nginx Web Server][1]** 
  ***[Lastausgleich][2]** 
  ***[Setup nginx als Lastausgleich (Round Robin)][3]** 
  ***[über verschiedene Upstream -Richtlinien][4]** 
  ***[Schlussfolgerung][5]** 

## Nginx Web Server   {#Webserver}
Nginx ist ein Hochleistungs-Webserver, Open-Source-Webserver. Zusätzlich zu den Funktionen des HTTP -Servers kann NGINX auch als Proxy -Server für E -Mail (IMAP, POP3 und SMTP) und als Reverse -Proxy fungieren und das Gleichgewicht NGINX für HTTP-, TCP- und UDP -Server laden. Es verbessert die Leistung, Zuverlässigkeit und Sicherheit Ihrer Anwendungen. Es ist beliebt für seine reichhaltige Feature -Set, einfache Konfiguration und einen geringen Ressourcenverbrauch.
Wie funktioniert Nginx? Nginx wird üblicherweise als Nginx Reverse Proxy Last Balancer als einzelne Einstiegspunkt für eine verteilte Webanwendung verwendet, die auf mehreren separaten Servern arbeitet. Es verwendet einen asynchronen, ereignisgesteuerten Ansatz, um einen geringen Speicherverbrauch und eine hohe Parallelität zu bieten. Sie können mehr über Nginx [hier][6] lesen.

## laden Balancer   {#loadBalancer}
Lastausgleich ist der Prozess, den Netzwerkverkehr auf mehrere Server verteilen. Und die „Software“ oder „Hardware“, die diesen Verteilungsvorgang ausführt, wird als Last Balancer bezeichnet. Ein Lastausgleich ist wie ein „Traffic Cop“, der vor Ihren Servern steht und Client -Anfragen auf allen Servern routet. Es stellt sicher, dass Ihre Bewerbung auch dann in Betrieb bleibt, auch wenn eines der Server ausfällt.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx als Lastausgleicher">}}

Hauptfunktionen eines Lastausgleichs folgen:
  * Verteilt Clientanforderungen oder Netzwerklast effizient auf mehrere Server
  * Gewährleistet eine hohe Verfügbarkeit und Zuverlässigkeit, indem Anfragen nur an Server gesendet werden, die online sind
  * Bietet die Flexibilität, Server nach Bedarf hinzuzufügen oder zu subtrahieren

## Setup Nginx als Ladeausgleicher   {#setup}
Bevor Sie Nginx Round Robin Load Balancing einrichten, sollten Sie Nginx auf Ihrem Server installieren lassen. Sie können es schnell mit APT-Get installieren:
```
sudo apt-get install nginx
```
Um einen Round-Robin-Last-Balancer einzurichten, müssen wir das Nginx-Upstream-Modul verwenden. Wir werden die NGINX -Last -Balancer -Konfiguration in die Nginx -Einstellungen aktualisieren. Öffnen wir die Konfiguration Ihrer Website. Für dieses Beispiel verwende ich die Standardkonfigurationsdatei
```
sudo vi /etc/nginx/sites-available/default
```
Wir müssen die Ladeausgleichskonfiguration zur Datei hinzufügen, um Last Balancer mit Nginx zu konfigurieren.
Zunächst müssen wir das Upstream -Modul für Nginx -Upstream -Lastausgleich einbeziehen, das so aussieht:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Verwenden Sie dieses Backend -Upstream als Ihren Proxy -Endpunkt in Ihrem Serverblock:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Starten Sie Nginx neu
```
sudo service nginx restart
```
Solange Sie alle Server vorhanden haben, sollten Sie nun feststellen, dass der Nginx Open Source -Lastausgleich, die Besucher gleichermaßen auf die Server verteilen. Diese gleiche Verteilung wird als Round-Robin-Lastausgleich bezeichnet.

## Upstream -Anweisungen   {#Upstream}
In unserem letzten Beispiel haben wir ein einfaches Upstream-Modul verwendet, um einen Rund-Robin-Lastausgleich durchzuführen, um den Verkehr gleichermaßen auf die Server zu verteilen. Es gibt jedoch viele Gründe, warum dies möglicherweise nicht die effizienteste Möglichkeit ist, mit dem Verkehr zu arbeiten. Es gibt mehrere Anweisungen, mit denen wir Besucher effektiver auf Site -Besucher leiten können.

## # Gewicht
Eine Möglichkeit, Benutzern Servern mit mehr Präzision zuzuweisen, besteht darin, bestimmte Maschinen ein bestimmtes Gewicht zuzuweisen. Mit Nginx können wir eine Nummer zuweisen, die den Anteil des Datenverkehrs angibt, der an jeden Server gerichtet werden sollte.
Ein ausbalanciertes Setup, das das Servergewicht enthielt, könnte wie folgt aussehen:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Das Standardgewicht beträgt 1. mit einem Gewicht von 2, Backend2. Beispiel wird doppelt so viel Verkehr wie Backend1 gesendet, und Backend3 mit einem Gewicht von 4 wird doppelt so viel Verkehr wie Backend 2 und viermal so viel wie Backend handeln wie Backend 1.

## # Hash
Mit IP Hash können Server nach ihrer IP -Adresse auf Clients reagieren und die Besucher jedes Mal, wenn sie besuchen, an dieselbe VPS zurücksendet (es sei denn, dieser Server ist nicht mehr ausgefallen). Wenn ein Server als inaktiv bekannt ist, sollte er als Down markiert werden. Alle IPs, die zum Down -Server wechseln sollten, werden dann auf eine alternative Weise gerichtet.
Die folgende Konfiguration enthält ein Beispiel:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

## # max fällt aus
Gemäß den Standardeinstellungen für Round-Robin-Einstellungen sendet NGINX Application Load Balancer weiterhin Daten an die virtuellen privaten Server, auch wenn die Server nicht antworten. MAX FAIL kann dies automatisch verhindern, indem sie nicht reagierende Server für einen festgelegten Zeitraum nicht reagieren.
Es gibt zwei Faktoren, die mit dem maximalen Fehlschlag verbunden sind: max \ _fails und fallen \ _timeout. MAX fails bezieht sich auf die maximale Anzahl fehlgeschlagener Versuche, eine Verbindung zu einem Server herzustellen, der auftreten sollte, bevor er als inaktiv angesehen wird. Fall_timeout gibt an, wie lange der Server als inoperativ angesehen wird. Sobald die Zeit abgelaufen ist, werden neue Versuche, den Server zu erreichen, erneut gestartet. Der Standard -Timeout -Wert beträgt 10 Sekunden.
Eine Beispielkonfiguration könnte so aussehen:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Schlussfolgerung:   {#Conclusion}
In diesem Nginx -Lastausgleichstutorial haben wir etwas über NGNIX, Lastausgleich und die Einrichtung von Nginx -Last -Balancer gelernt, um Ihren Verkehr auf mehrere Server zu verteilen. Wir haben auch verschiedene Lastausgleichsalgorithmen wie Round-Robin, Hash und Max Fails untersucht. Wenn Sie eine Anwendung mit hohem Volumen ausführen und die Last auf verschiedene Server verteilen müssen, ist Nginx eine der besten Optionen für Sie. Und vor allem ist es 100% kostenlos und Open-Source-Webserver.
Sie können sich uns auf [Twitter][7], [LinkedIn][8] und unserer [Facebook][9] -Seite anschließen. Welcher andere leistungsstarke Lastausgleiche, um die Verfügbarkeit und Effizienz der Server zu verbessern, verwenden Sie? . Wenn Sie Fragen oder Feedback haben, bitte_ [Kontakt aufnehmen][10].

## Erkunden
Möglicherweise finden Sie die mehr verwandten unteren Artikel
  * [So sichern und verschlüsseln Sie Nginx mit uns auf Ubuntu 20.04][11]
  * [Apache vs nginx - Detaillierter Vergleich in 2021][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
