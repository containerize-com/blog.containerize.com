---
title: "Wie man WordPress | docerize | Docker WordPress" 
seoTitle: "Wie man WordPress | docerize | Docker WordPress" 
description: "Was ist Docker & Docker Compose? In diesem Artikel lernen wir, wie Sie Docker, Docker Compose und WordPress in einen Docker -Container installieren." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Eine Container -Software bündelt eine Anwendung, ihre Abhängigkeiten und sorgt für die App in jeder Computerumgebung. Lassen Sie uns lernen, wie Sie WordPress docken." 
url: /de/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Ein Container -Software bündelt eine Anwendung, ihre Abhängigkeiten und lass die App in jeder Computerumgebung ausgeführt werden. Lassen Sie uns lernen, wie Sie WordPress docken.

{{< figure align=center src="images/dockerwordpress.png" alt="WordPress dockerize">}}


## Überblick
Willkommen in einem anderen Blog -Beitrag in der Kategorie [Blogging][1] Open -Source -Software. Wir haben einige Artikel zu Themen wie [Förderung Ihrer Leads mit kostenloser BürgerwordPress -Integration][2] veröffentlicht, [wie Sie Ihre Website mit WordPress und Gatsby erstellen][3] und einige weitere. Dieser Artikel bringt jedoch weitere Erkenntnisse und Details zu Open -Source -Blogging -Plattformen und ** Container -Software ** ein. Wir werden einige heiße Fragen wie Docker & ** wie man Docker komponieren ** durchlaufen, und wir lernen, wie man WordPress dockerisiert.
Die Containerisierung ist zu einem wesentlichen Trend in der Softwareentwicklung als Alternative zur Virtualisierung geworden. Dazu gehört es, Softwarcode und alle ihre Abhängigkeiten einzukapseln oder zu bündeln, damit er auf jeder Infrastruktur konsequent ausgeführt werden kann. Durch die Containerisierung können Entwickler Anwendungen schneller und sicherer erstellen und bereitstellen. Docker ist die beliebteste Containerisierungsanwendung, die in der Entwicklergemeinschaft verwendet wird. In diesem Tutorial lernen wir mithilfe von Docker Compose, wie man WordPress doktiert. Beginnen wir also mit den folgenden Punkten.
  *[** Was ist Docker? **][4]
  *[** Warum müssen Sie WordPress docken **?][5]
  *** [So installieren Sie Docker komponieren][6] **
  *** [Dockerize WordPress][7] **
  *** [Fazit][8] **

## Was ist Docker? {#Docker}
In einfachen Worten ist Docker Open-Source ** Container-Software **, die die Virtualisierung schneller und leichter macht. Es ist so leicht, dass ein Docker -Container in wenigen Sekunden gestartet werden kann. Und Sie können problemlos Dutzende von Docker -Containern auf einem einzigen PC ausführen. Entwickler verwenden Docker, um Anwendungen mithilfe von Containern zu erstellen, bereitzustellen und auszuführen. Container ermöglichen es einem Entwickler, eine Anwendung mit allen Teilen zu verpacken, die er benötigt, z. B. Bibliotheken und andere Abhängigkeiten, und sie als ein Paket bereitstellen. Auf diese Weise kann der Entwickler sicher sein, dass die Anwendung auf jeder Infrastruktur ausgeführt wird. Darüber hinaus gibt es einen riesigen Entwickler und eine Unterstützungsgemeinschaft, die immer lebendig ist, um bei jeder Relevanz größte Unterstützung zu bieten. Docker ist aufgrund seiner leistungsstarken Funktionen und Verwendungen zu einem Must-Have-Bestandteil eines Software-Unternehmens geworden.

## Warum müssen Sie WordPress docken? {#Warum}
In diesem Abschnitt werden wir die Notwendigkeit hinter dem Dockieren von WordPress kennen. WordPress ist eine führende Open -Source -Blogging -Software, die von der Welt der Technologie stark übernommen wird. Um WordPress lokal auszuführen, benötigen Sie Apache/Nginx, MySQL Server, PHP und Tonnen anderer Abhängigkeiten. Der Einsatz in Staging- oder Produktionsumgebung ist ein Albtraum, wenn es darum geht, diese Abhängigkeiten zu verwalten. Manchmal wird es für die Entwickler und die Unterstützung der Ingenieure zu einem Problem, die Einsätze wiederholt zu wiederholen, da sie Zeit und Arbeitskräfte verlangt.
Containerisierung kann Ihnen damit helfen. Alles, was Sie benötigen, ist Docker - die Installation selbst dauert Sekunden und es ist keine zusätzliche Konfiguration erforderlich
Egal, ob es sich um eine Entwicklungsmaschine, eine Bühne oder ein Live -Server handelt und wie ein Betriebssystem es ist, Docker arbeitet überall gleich. Dies bedeutet, dass Sie nicht nach Fehler suchen müssen, die beispielsweise in einer Umgebung erscheinen und nicht in einer anderen reproduziert werden können.

## So installieren Sie Docker Compose {#install}

### Voraussetzungen
Sie können Docker Compose verwenden, um WordPress in einer isolierten Umgebung mit Docker -Containern problemlos auszuführen. Diese Anleitung zeigt, wie Sie mit Kompose zum Einrichten und Ausführen von WordPress verwendet werden.
Docker Compose basiert auf Docker Engine. Stellen Sie daher sicher, dass Sie Docker Engine installiert haben. Auf Desktop -Systemen wie Docker Desktop für Mac und Windows ist Docker Compose als Teil dieser Desktop -Installationen enthalten. Installieren Sie jedoch zunächst bei Linux Systems die Docker -Engine, indem Sie ihren [offiziellen Leitfaden][9] folgen.

### Installieren Sie komponieren unter Linux
Führen Sie diesen Befehl aus, um die aktuelle stabile Version von Docker Compose herunterzuladen:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Über ausführbare Berechtigungen auf die Binärdatei anwenden:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Testinstallation durch Ausführen von Versionsbefehl:
```
docker-compose --version
```

### Definieren Sie eine Dockerfile für WordPress
Das erste, was wir tun müssen, ist zu definieren, wie unser Bild in einer ** _ Dockerfile _ ** aussehen wird. Es handelt sich um eine Textdatei, die dem Verzeichnis mit den Quellen Ihrer Anwendung hinzugefügt wird.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
"**/var/www/html/WordPress **" enthält einen vollständigen Inhalt von WordPress zusammen mit Themen, Plugins und Inhalten. Wenn Ihr Repository nur das Thema oder das Plugin enthält, fügen Sie einfach den entsprechenden Ordner hinzu.
Erstellen Sie eine Docker-compose.yml-Datei, die Ihr WordPress-Blog und eine separate MySQL-Instanz mit einem Volumenmontage für die Datenpersistenz startet:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Führen Sie nun den Befehl in Ihrem Projektverzeichnis aus
```
docker-compose up -d
```
Dies läuft ** _ Docker-compose _ ** im abgetrennten Modus, zieht die benötigten Docker-Bilder und startet die WordPress- und Datenbankbehälter.
Sobald die Container begonnen haben, können Sie die URL im Webbrowser öffnen und mit Ihrer Anwendung beginnen:
```
http://localhost:8000
```

## Schlussfolgerung {#Conclusion}
Dies bringt uns zum Ende dieses Blog -Beitrags. In diesem Artikel haben wir erfahren, was Docker ist, ** Wie man Docker Compose ** installiert. Wir haben auch gelernt, wie man WordPress mit Docker-Compose dockerisiert. Darüber hinaus haben wir Sie in das Konzept hinter Docker und wie Sie einfache Multi-Container-Anwendungen definieren. Diese Open Source ** Container -Software ** ist jedoch eine führende Option für alle Softwareorganisationen. Daher hilft Ihnen dieser Artikel wirklich, wenn Sie sich für Docker für Ihre Bewerbungen entscheiden möchten. Es gibt viele andere relevante Artikel und Blogging -Software, die im Abschnitt „Explore“ aufgeführt sind.
Schließlich schreibt [containerize.com][10] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie mit der Kategorie [Blogging][1] in Kontakt, um regelmäßige Nachrichten und Updates zu erhalten. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][11], [LinkedIn][12] und [Twitter][13] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [WordPress][14]
  * [Jekyll][15]
  * [Diskurs][16]
  * [Ghost][17]
  * [Wie man WordPress mit Docker komponieren][18]
  * [Steigern Sie Ihre Leads mit kostenloser BürgerwordPress -Integration][2]
  * [Automatisieren Sie das Ticketing -System mit WordPress und Osticket][19]
  * [So integrieren Sie das Diskursforum in WordPress][20]
  * [Suchverkehr erhöhen, indem Sie Top 7 SEO -Blogs folgen][21]
  * [So erstellen Sie Ihre Website mit WordPress und Gatsby][3]
  * [So aktivieren Sie die Gzip -Komprimierung in WordPress für bessere Pagspeed und SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/de/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
