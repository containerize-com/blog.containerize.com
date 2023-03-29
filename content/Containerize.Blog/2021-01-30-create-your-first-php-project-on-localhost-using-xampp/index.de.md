---
title: "Erstellen Sie Ihr erstes PHP -Projekt auf Localhost mit XAMPP '" 
seoTitle: "Erstellen Sie Ihr erstes PHP -Projekt auf Localhost mit XAMPP" 
description: "Setup Web Development -Umgebung mit kostenlosen und Open Source Web Server XAMPP. Erstellen und testen Sie Ihre PHP -Projekte auf Localhost, indem Sie einige einfache Schritte befolgen." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Setup Web Development -Umgebung mit dem kostenlosen und Open -Source -XAMPP -Server. Lernen, erstellen und testen Sie Ihre PHP -Projekte auf Localhost, indem Sie einige einfache Schritte befolgen." 
url: /de/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Web -Development -Umgebung mit kostenloser und open Source XAMPP -Server. Lernen, erstellen und testen Sie Ihre PHP -Projekte auf Localhost, indem Sie einige einfache Schritte befolgen.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Erstellen Sie Ihr erstes PHP -Projekt mit XAMPP Open Source Web Server">}}

XAMPP ist ein Open -Source -Webserver, der eine lokale Umgebung bietet, um ein PHP -Projekt zu erstellen, auszuführen und zu testen, bevor es auf Live -Servern bereitgestellt wird. Es bietet einen lokalen Server für Entwickler, um Web -Apps zu testen und zu erstellen. Wir werden die folgenden Abschnitte in diesem Blog -Beitrag behandeln:
  * [Anforderungen][2]
  * [Was ist xampp][3]
  * [PHP -Skript erstellen][4]
  * [PHP -Skript ausführen und testen][5]
  * [Schlussfolgerung][6]

## Anforderungen {#requirements}

  * XAMPP -Installation
  * Code -Editor -Anwendung
  * Grundlegendes PHP -Wissen
  * Grundlegendes HTML- und JavaScript -Wissen

## Was ist XAMPP? {#xampp}

XAMPP ist ein Open Source Web Server -Lösungsstapel. Es enthält Apache, MySQL, Mariadb, PHP und Perl. Es ist extrem einfach zu installieren und zu verwenden. Deshalb ist es die beliebteste PHP -Entwicklungsumgebung. XAMPP Server bietet eine vollständige Umgebung für die Entwicklung von PHP -Web -Apps. Wenn Sie noch keine XAMPP -Arbeitsanlagen haben, befolgen Sie diese Anleitung, um XAMPP zu installieren:
[Setup XAMPP und Phpmyadmin als Lokalhost unter Windows][7]

## Erstellen Sie PHP -Skript {#php}

  * Unter der Annahme, dass Sie XAMPP bereits mit dem folgenden Tutorial installiert haben, erstellen wir nun ein einfaches PHP -Skript und testen Sie es auf XAMPP.
  * Öffnen Sie zuerst Ihren Redakteur. Wenn Sie keinen Programmiereditor haben, öffnen Sie einfach den Notepad.
  * Geben Sie den folgenden Code ein
```
<?php
echo "This is my first PHP project";
?>
```
  * Klicken Sie oben rechts auf "Datei".
  * Klicken Sie auf die Schaltfläche "AS".
  * Geben Sie den Namen mit Erweiterung ".php" ein.
* Wählen Sie für "als Typ speichern" "alle Dateien (\*. \*)" Option.
  * Und drücken Sie schließlich die Schaltfläche "Speichern".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Erstellen Sie Ihr erstes PHP -Projekt mit XAMPP Open Source Web Server">}}


## PHP -Skript ausführen und testen {#test}

  * Kopieren Sie dieses PHP -Skript in HTDOCS -Ordner in Ihrer XAMPP -Installation. Meistens befindet sich HTDOCS -Ordner hier: C: \ xampp \ htdocs
  * Öffnen Sie Ihren Browser.
  * Gehen Sie zu Localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Erstellen Sie Ihr erstes PHP -Projekt mit XAMPP Open Source Web Server">}}

Glückwunsch! Sie haben gerade Ihr erstes PHP -Projekt erstellt.

## Abschluss {#conclusion}

Das Erstellen eines ersten Webprojekts ist für Anfänger immer sehr aufregend. Es fühlt sich großartig an, wenn Sie Ihr erstes dynamisches Skript entwerfen, ausführen und es in Ihrem Browser betrachten. Ich hoffe, diese einfache Anleitung hat Ihnen beim Erstellen und Ausführen Ihres ersten PHP -Projekts mit XAMPP Open Source Web Server geholfen.

## Erkunden
Weitere Informationen zu XAMPP und PhpMyAdmin finden Sie in den folgenden Anleitungen:
[Setup XAMPP und Phpmyadmin als Lokalhost unter Windows][7]
[Free Web Server Solution Stack für PHP- und Perl -Entwickler][1]



[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
