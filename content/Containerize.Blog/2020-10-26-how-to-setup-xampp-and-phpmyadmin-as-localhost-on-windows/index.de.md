---
title: "Setup XAMPP und Phpmyadmin als Lokalhost unter Windows" 
seoTitle: "Setup XAMPP und Phpmyadmin als Lokalhost unter Windows" 
description: "Setup XAMPP und PhpMyAdmin als Lokalhost unter Windows. Erstellen Sie Ihre eigene kostenlose und open-Source-Testumgebung, um Web-Apps zu testen und zu erstellen." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Richten Sie eine Entwicklungsumgebung mit kostenloser und Open Source Web Server Solution Stack (XAMPP) und Datenbankverwaltungssoftware (PHPMYADMIN) ein" 
url: /de/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Eine Entwicklungsumgebung mit kostenloser und Open Source Web Server Solution Stack (XAMPP) und Datenbankverwaltungssoftware (PHPMYADMIN) einrichten

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp und phpmyadmin als localhost">}}

XAMPP und PHPMYADMIN AS LOCALHOST bieten einen lokalen Server für Entwickler, um Web -Apps zu testen und zu erstellen. XAMPP ist ein lokaler Server, der auf PCs/Laptops installiert ist. Es bietet eine lokale Umgebung zum Erstellen, Ausführen und Testen von PHP -Anwendungen, bevor sie auf Live -Servern bereitgestellt werden.
Wir werden die folgenden Abschnitte in diesem Blog -Beitrag behandeln:
  * [Beschreibung][1]
  * [XAMPP -Installation][2]
  * [phpmyadmin Dashboard][3]
  * [Letzte Gedanken][4]

## Beschreibung: {#Description}
XAMPP ist kostenlos und Open Source Web Server Solution Stack. Es enthält Apache, MySQL, Mariadb, PHP und Perl. XAMPP ist für Windows -Betriebssysteme verfügbar. Es ist extrem einfach zu installieren und zu verwenden. Deshalb ist es die beliebteste PHP -Entwicklungsumgebung. XAMPP und PHPMYADMIN AS LOCALHOST bieten eine vollständige Umgebung für die Entwicklung und das Testen von Web -Apps.
Alphabete in xampp stehen für:
  *** x **-plattformübergreifend (unterstützt mehrere Betriebssysteme, einschließlich Linux, Windows und Mac OS)
  *** a ** - Apache HTTP -Server
  *** m ** - Mariadb (Datenbank)
  *** p ** - php
  *** p ** - Perl

## XAMPP -Installation {#xampp}
  * Laden Sie XAMPP von [hier][5] herunter.

{{< figure align=center src="images/xampp1.png" alt="Xampp als Lokalhost">}}

  * Installieren Sie die ausführbare Datei.
  * Klicken Sie dann auf "Weiter".
  * Wählen Sie die Komponenten, die Sie installieren möchten.

{{< figure align=center src="images/xampp2.png" alt="Xampp als Lokalhost Schritt 2">}}

  * Für die meisten Web -Apps benötigen Sie nur _apache_, _mysql_, _php_ und _phpmyadmin_.
  * Wählen Sie das Installationsverzeichnis, in dem Sie XAMPP installieren möchten.
  * Sie erhalten eine Windows -Sicherheitswarnung. Sie müssen die folgende Option überprüfen: „_private Netzwerke wie mein Heim- oder Arbeitsnetzwerk“ _.
  * Klicken Sie schließlich auf "Fertig stellen", um die Installation abzuschließen.

{{< figure align=center src="images/xampp4.png" alt="Xampp als Lokalhost Schritt 3">}}

  * Nach erfolgreicher Installation öffnen Sie das XAMPP -Bedienfeld.
  * Starten Sie "Apache" und "MySQL" -Dienste.

{{< figure align=center src="images/xampp5.png" alt="Xampp als Lokalhost Schritt 4">}}


## phpmyadmin Dashboard: {#phpmyadmin}
Klicken Sie auf die Schaltfläche „Admin“ neben dem MySQL -Dienst, um auf PhpMyAdmin -Dashboard zuzugreifen. Sie können auch auf PhpMyAdmin zugreifen, indem Sie http: // localhost/phpmyadmin aus Ihrem Browser besuchen. Hier können Sie Datenbanken erstellen. Befolgen Sie diese Schritte, um eine neue Datenbank zu erstellen.
  * Klicken Sie aus dem Dashboard auf Registerkarte "Datenbanken".

{{< figure align=center src="images/db1.png" alt="phpmyadmin bei Localhost Schritt 1">}}

  * Geben Sie den Datenbanknamen ein und klicken Sie auf die Schaltfläche "Erstellen". Dadurch wird einfach eine neue leere Datenbank erstellt.

{{< figure align=center src="images/db2.png" alt="phpmyadmin bei Localhost Schritt 2">}}

  * Als nächstes können Sie Tabellen erstellen, indem Sie die neu erstellte Datenbank auswählen.
  * Geben Sie den Tabellennamen unter "Tabelle erstellen" ein.

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin bei Localhost Schritt 3">}}

  * Wählen Sie die Anzahl der Spalten aus.
  * Klicken Sie dann auf die Schaltfläche „GO“.
  * Danach müssen Sie das Formular auf der nächsten Seite ausfüllen, um das Erstellen der Tabelle zu beenden.

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin bei Localhost Schritt 4">}}


## Schluss Gedanken: {#final}
Die XAMPP -Installation ist einfach und direkt. Der Setup XAMPP -Server dauert nicht mehr als 15 Minuten. Sobald es installiert ist, können Entwickler ihre PHP -basierten Web -Apps auch ohne Internetverbindung erstellen und testen. Anstatt Projekte direkt auf einem Live-Webserver zu testen, ist es einfach und zeitsparend, sie lokal zu testen. Es ist eine großartige Plattform für Anfänger, um ihre Fertigkeiten von PHP-, Perl- und Datenbank zu testen, zu testen und zu polieren.

## Erkunden:
[Open Source Web Server Solution Stack für PHP- und Perl -Entwickler][6]
[Beste Open Source Web Server Solution Stack Optionen][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
