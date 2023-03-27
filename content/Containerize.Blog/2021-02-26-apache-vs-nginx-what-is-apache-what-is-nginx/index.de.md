---
title: "Apache vs nginx | Was ist Apache? | Was ist Nginx?" 
seoTitle: "Apache vs nginx | Was ist Apache? | Was ist Nginx?" 
description: "In diesem Artikel handelt es sich um einen Vergleich von Apache gegen Nginx. Beide Webserver sind Open-Source, konfigurierbar und verarbeiten mehr als die Hälfte des Internetverkehrs der Welt." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache verwendet einen prozessorientierten Ansatz und Nginx verwendet einen ereignisorientierten Ansatz, um Benutzeranforderungen zu verarbeiten. Erforschen wir den Unterschied zwischen Apache und Nginx." 
url: /de/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache verwendet einen prozessorientierten Ansatz und Nginx verwendet einen ereignisorientierten Ansatz, um Benutzeranforderungen zu verarbeiten. Erforschen wir den Unterschied zwischen Apache und Nginx.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## Überblick
Obwohl Apache und Nginx viele Eigenschaften haben, sollten sie nicht vollständig austauschbar angesehen werden. Beide Open -Source -Webserver unterscheiden sich voneinander und sollten entsprechend den Anforderungen Ihrer Webanwendungen ausgewählt werden. In diesem Artikel werden wir **apache vs nginx** im Detail diskutieren.
  * [Was ist Apache?][1]
  * [Was ist nginx?][2]
  * [Apache gegen Nginx -Vergleich][3]
  * [Ist nginx besser als Apache][4]
  * [Schlussfolgerung][5]
  * [Erforschen][6]

## Was ist Apache? {#whatisapache}

Der Apache -Webserver ist einer der beliebtesten Server im Internet und dient mehr als 27% der Websites. Apache ist hauptsächlich die erste Wahl der Entwickler aufgrund seiner Flexibilität, Leistung sowie weit verbreiteter Unterstützung und detaillierter Dokumentation. Es unterstützt dynamisch ladbare Module, mit denen Entwickler ihre Funktionalität problemlos erweitern können.

## Was ist Nginx? {#whatisnginx}

In diesem Artikel handelt es sich um einen Vergleich von Apache gegen Nginx. Beide Webserver sind Open-Source, konfigurierbar und verarbeiten mehr als die Hälfte des Internetverkehrs der Welt.

## Apache gegen Nginx -Vergleich {#apachevsnginx}

Vergleichen wir in diesem Abschnitt Apache und Nginx auf der Grundlage von Unterstützung, Dokumentation, Inhaltstyp und Konfigurationsstruktur.

#### Die Architektur
Apache startet mehrere Serverprozesse, um die Workload zum Startzeit zu teilen. Es gibt einen übergeordneten Prozess und viele Kinderprozesse. Jeder untergeordnete Prozess ist für das Erstellen von Server -Threads verantwortlich, die eingehende Anforderungen verarbeiten. Apache verwendet das Multi-Processing-Modul, um untergeordnete Prozesse zuzuweisen, um Anforderungen zu akzeptieren und Netzwerkports zu binden. Im Gegenteil, Nginx verfügt über eine ereignisorientierte Architektur. Nginx verfügt über einen Master -Prozess, der die Portbindung und Konfigurationsablesung steuert. Der Master-Prozess erstellt Unterprozesse gemäß einem vorhersehbaren Prozessmodell, im Gegensatz zu Apache, mit dem der NGINX-Server Ressourcen effizienter verwenden kann. Für jede neue Anfrage initiiert Nginx ein Ereignis und erstellt einen Dateideskriptor, der nur einen kleinen Prozessspeicher in Anspruch nimmt. Dies macht Nginx skalierbarer als Apache. Apache verbraucht für jede Verbindung viel mehr Prozessspeicher.

#### Module
Sowohl Apache als auch Nginx können Module modulieren, um seine Kernfunktionalität zu erweitern oder zu ändern. Die Implementierung für Module unterscheidet sich sowohl für Apache als auch für Nginx, und der Hauptunterschied ist das Laden von Modulen. Bei Apache werden Module nur dann dynamisch geladen, wenn sie benötigt werden. Im Gegenteil, Nginx -Module sind in den Kern integriert und auch dann auf dem BOOT geladen, wenn Sie sie nicht benötigen. In diesem Sinne ist Apache eine anpassbarere Plattform für Entwickler im Vergleich zu Nginx. Dies ist eine Einschränkung für Benutzer in Bezug auf die Flexibilität, aber im positiven Hinweis bedeutet dies eine bessere Sicherheit, da dynamische Module Sicherheitsbedenken aussprechen können.

#### Support & Dokumentation
Apache ist hier der klare Gewinner, wenn wir ihn auf der Grundlage von Unterstützung und Dokumentation vergleichen, weil es so lange auf dem Markt ist. Für den Apache -Server gibt es eine große Bibliothek mit verfügbarer Dokumentation. Im Vergleich dazu wird Nginx aufgrund seiner hohen Leistung und Ressourcennutzung ebenfalls populär, und daher wachsen seine Unterstützung und Dokumentation rasch.

#### statischer vs dynamischer Inhalt
Apache dient sowohl statischen als auch dynamischen Inhalten für sich. Auf der anderen Seite kann Nginx nicht dynamischen Inhalten bedienen, sodass diese Anfragen an Software von Drittanbietern weitergeleitet werden. Apache-Server verwalten statische Inhalte mithilfe seiner herkömmlichen dateibasierten Methoden.

#### Datei gegen URI-basierte Interpretation
Apache Server kann eine Anforderung als physische Ressource im Dateisystem oder als URI -Speicherort interpretieren. Andererseits wurde Nginx so konzipiert, dass sie sowohl als Webserver als auch als Proxy -Server arbeitet. Aufgrund der für diese beiden Rollen erforderlichen Architektur funktioniert es hauptsächlich mit URIs und übersetzt bei Bedarf in das Dateisystem. Nginx gibt keine Konfiguration für ein Dateisystemverzeichnis an und analysiert stattdessen den URI selbst.

#### Aufbau
Apache bietet Entwicklern die Möglichkeit, die Konfiguration auf Verzeichnisebene mithilfe der als .htaccess bezeichneten Datei festzulegen. Bei NGINX gibt es jedoch keinen solchen Mechanismus, um die Konfiguration auf Verzeichnisebene festzulegen. Apache bietet mehr Flexibilität als Nginx in Bezug auf Konfigurationen.

## Ist Nginx besser als Apache? {#nginx}

Nginx ist schneller als Apache, um statische Inhalte zu bedienen. Wenn Ihre Webanwendung viele statische Inhalte bedient, ist ja nginx besser und schneller als Apache. In Bezug auf dynamische Inhalte bieten beide Webserver fast die gleiche Leistung, so dass es hier keinen klaren Gewinner gibt. Sowohl Apache als auch Nginx werden auf fast allen Betriebssystemen ausgeführt, aber die Leistung von NGINX unter Windows ist im Vergleich zu Apache nicht so gut. Wenn Ihr Betriebssystem ein Unix-ähnliches System ist und Ihre Webanwendung leistungskritisch ist, dann ist Nginx besser als Apache.

## Abschluss {#conclusion}

Sowohl Apache als auch Nginx sind auf ihre eigene Weise fähig. Wir haben Apache vs Nginx -Vergleich, was Apache, was Nginx im Detail und den Unterschied zwischen Apache und Nginx diskutiert. Die Auswahl einer aus diesen beiden beliebtesten Webservern hängt vollständig von den Anforderungen Ihrer Web -Apps ab. Die Auswahl hängt von Ihren Erwartungen mit Leistung, Ressourcenauslastung, Geschwindigkeit, Skalierbarkeit und Unterstützung eines Webservers ab. Beide haben ihre eigenen Vorteile. Es gibt keinen einheitlichen Webserver. Verwenden Sie daher die Lösung, die Ihren Zielen und Erwartungen am besten entspricht.
Schließlich schreibt [Containerize.com][7] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [Open Source Web Server][8] in Kontakt, um regelmäßige Aktualisierungen zu erzielen. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][9], [LinkedIn][10] und [Twitter][11] folgen.

## Erkunden {#explore}

Möglicherweise finden Sie die folgenden Links relevant:
  * [Top 5 Open Source Web Server -Lösungsstapel in 2021][12]
  * [Setup XAMPP und Phpmyadmin als Lokalhost unter Windows][13]
  * [Xampp | Kostenloser und Open Source Web Server Solution Stack][14]
  * [Nginx | Leichter und Hochleistungs -Webserver][15]
  * [Setup -Tutorial für Lemp Stack auf Ubuntu 18.04][16]



[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
