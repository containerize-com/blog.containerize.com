---
title: "So richten Sie CMDB -Lösung Ralph auf Localhost ein" 
seoTitle: "So richten Sie CMDB -Lösung Ralph auf Localhost ein" 
description: "In diesem Tutorial geht es darum, Ralph auf Localhost einzurichten. Ralph ist eine kostenlose CMDB -Lösung, die Funktionen zum Verfolgen von Assets und Konfigurationen bietet." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "Die IT -Lösung zur Vermögensverwaltung reduziert die Betriebskosten und erhöht die Effizienz. In diesem Artikel geht es darum, CMDB Software Ralph auf Ihrem lokalen Computer einzurichten." 
url: /de/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## IT Asset Management -Lösung reduziert die Betriebskosten und erhöht die Effizienz. In diesem Artikel geht es darum, CMDB Software Ralph auf Ihrem lokalen Computer einzurichten.

{{< figure align=center src="images/ralph.png" alt="CMDB -Lösung">}}


## **Überblick**
Gegenwärtig gedeihen Organisationen, um das Technologiestempo zu erfüllen, indem sie eine riesige IT -Infrastruktur einsetzen. Als nächstes ist es nicht weniger als eine Herausforderung, so große Umgebungen zu verwalten. Es erfordert Arbeitskräfte und technische Macht, um solche kritischen Aufgaben zu erfüllen. Manchmal wird es zu einem Problem, Prozesse und Verfahren zu formulieren, um komplexe Netzwerke von Systemen zu verarbeiten, die Drucker, Desktop -Computer, Scanner, Telefone und andere IT -Zubehör umfassen. Ebenso sind Konfigurationen dieser Knoten wichtig, da es hohe Chancen auf die Ausfallzeit einer Maschine im Netzwerk gibt. Daher sollte es eine konsistente Überprüfung dieser Konfigurationen geben.
Es gibt jedoch viele Open -Source- und kostenlose Software, um Vermögenswerte zu verfolgen und aufzuzeichnen. Diese Software wird als Konfigurationsverwaltungsdatenbanksoftware (CMDB) bezeichnet. Kürzlich veröffentlichte [Containerize.com] [1] eine CMDB -Lösung [Ralph] [2], die viele Funktionen für bessere Assets und Konfigurationsmanagement bietet. In diesem Blog -Beitrag werden wir Ralph untersuchen, indem wir die folgenden Punkte abdecken.
  *** [kurze Einführung von CMDB Software Asset Management Ralph] [3] **
  *** [Merkmale von Ralph] [4] **
  *** [Wie richte ich Ralph auf Localhost ein?] [5] **
  *** [Schlussfolgerung] [6] **

## kurze Einführung von CMDB Software Asset Management Ralph {#Intro}
Ralph ist eine kostenlose Open -Source -IT -Asset -Management -Lösung. Es ist plattformübergreifend und bietet Selbsthostfunktionen. Es gibt ein komplettes Ökosystem der Echtzeit -Asset -Tracking. Daher können Benutzer eine Analyse für die Berichterstattung durchführen. Es ermöglicht Benutzern, Details zu Vermögenswerten über ihren Lebenszyklus aufzuzeichnen. Darüber hinaus bietet diese Open -Source -Software für digitale Asset -Management -Software Platz zum Speichern von Informationen zu Assets für Rechenzentren. Andererseits bietet diese CMDB -Lösung auch Unterstützung für die Verwaltung von Software, Lizenz, Zertifikaten und anderen Verträgen. Ralph unterstützt nicht nur das Vermögensverwaltung, sondern bietet auch Bestimmungen zur Durchführung von Maßnahmen zu diesen Vermögenswerten. Die Aktionen beziehen sich jedoch mit der Bereitstellung eines Hosts, der Generierung von Rechnungen, Domänenverfolgung oder Bestandsverwaltung zusammen.
Diese IT -Asset -Management -Lösung erstellt eine erholsame Schnittstelle. Entwickler können viele Anwendungen von Drittanbietern unter Verwendung der API-Endpunkte integrieren, die von diesem freien Tool von Open-Source ausgesetzt sind. Darüber hinaus ist Ralph zusammen mit der Eingabe von HTML, CSS und JavaScript in Python geschrieben. Daher gibt es umfassende Dokumentationen bezüglich Entwicklung und Bereitstellung. Der Quellcode dieser Aktienverwaltungslösung ist unter [Github] [7] verfügbar.

## Merkmale von Ralph {#Features}
Ralph bietet viele Funktionen. Wir werden jedoch einige der folgenden Schlüsselfunktionen erwähnen.
** Extensible **: Diese Open Source Digital Asset Management -Software ist hoch erweiterbar. Entwickler können es in Räumlichkeiten oder Cloud entsprechend ihren Anforderungen einsetzen.
** Unterstützung für Rechenzentren: ** Ralph bietet auch Unterstützung für Data Warehouses, Rechenzentrumräume, Server und Racks. Benutzer können alle Komponenten, ihr Netzwerk und die Konfigurationen im Auge behalten.
** REST -API **: Diese kostenlose CMDB -Software ist sehr anpassbar. Tatsächlich bietet es eine REST-API für Integrationen von Drittanbietern. Entwickler können es nach ihren Anforderungen erweitern.
** Intuitive Benutzeroberfläche: ** In dieser CMDB -Lösung ist eine logische Benutzeroberfläche verfügbar, in der Benutzer problemlos navigieren können. Darüber hinaus bietet das Admin-Dashboard verschiedene Widgets, die Daten in Echtzeit anzeigen.
** Befehlszeilenschnittstelle **: Ralph erstellt eine Befehlszeilenschnittstelle, die eine Möglichkeit bietet, MAC-Adressen für die Bereitstellung von Hosts zu entdecken.
** Unterstützung für nicht-physische Vermögenswerte **: Diese Gerätemanagementlösung bietet nicht nur Unterstützung für physische Vermögenswerte, sondern verwaltet auch nicht-physische Ressourcen wie Domänen, Software und Lizenzen.

## Wie räste ich Ralph auf Localhost? {#aufstellen}
In diesem Abschnitt werden wir den Installationsprozess der Ressourcenverwaltungssoftware Ralph auf der lokalen Maschine durchlaufen. Es ist ziemlich einfach, einzurichten und zu verwenden.
Stellen Sie vor dem nächsten Abschnitt sicher, dass Sie die folgenden Voraussetzungen installiert haben.
  * [Docker-Compose] [8]
  * [Docker] [9]
Die meisten Open -Source -Software bieten Docker -Bilder für die Bereitstellungen auf verschiedenen Plattformen an. Es gibt den Entwicklern Leichtigkeit und beschleunigt den Entwicklungs- und Bereitstellungsprozess.
Sobald die Voraussetzungen installiert sind, schalten Sie Docker ein. Öffnen Sie nun das Terminal und führen Sie den folgenden Befehl aus, um ein leeres Verzeichnis zu erstellen:
```
mkdir ralph<br>cd ralph
```
Machen Sie danach eine neue Datei mit dem Namen "Docker-compose.yml" und füllen Sie sie mit den folgenden Daten aus.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Speichern Sie nun die Datei und führen Sie den folgenden Befehl aus, um den Build zu erstellen:
```
docker-compose build

```
Führen Sie bei einem erfolgreichen Build den folgenden Befehl für die Datenbank aus:
```
docker-compose run –rm web /root/init.sh

```
Wenn alles gut geht, führen Sie den folgenden Befehl aus, um den Container des Dockers zu verbessern:
```
docker-compose up -d
```
Nach dem Ausführen dieses Befehls werden Docker -Container wie im folgenden Bild gezeigten in Betrieb sein:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB -Lösung">}}

Öffnen Sie schließlich den Browser und greifen Sie auf die Anwendung unter dieser Adresse zu http://127.0.0.1.
Es wird die Anmeldeseite angezeigt, wie im Bild unten gezeigt:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB -Lösung">}}


## Schlussfolgerung {#Conclusion}
Nach diesem CMDB -Tutorial -Blog -Beitrag ist klar, dass das Vermögensverwaltung ohne eine gute CMDB -Lösung nahezu unmöglich ist. Die Ressourcenverwaltungssoftware spielt eine spezielle Rolle bei der Verwaltung und Verfolgung von Assets, Konfigurationen und ihrer Beziehungen. Es gibt Bestimmungen, um die Änderungen zu verfolgen, die kaum auf digitalen oder physischen Vermögenswerten vorgenommen werden. Diese kostenlosen Tools sind einfach einzurichten, zu verwenden und detaillierte Dokumentationen und Anleitungen zu verwenden. Schließlich soll [** Containerize.com **] [1] Artikel über weitere Open -Source -Produkte schreiben. Bitte bleiben Sie mit dieser [] [10] ** [CMDB -Software] [11] ** für die neuesten Updates.

## Erkunden
  *** [CMDB -Software] [11] **
  *** [Ralph] [2] **
  *[** Geschäftsabläufe automatisieren mit kostenloser und Open -Source -Software **] [12]
  *** [Softwareentwicklungstrends, auf die Sie im Jahr 2021 achten sollten] [13] **
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
