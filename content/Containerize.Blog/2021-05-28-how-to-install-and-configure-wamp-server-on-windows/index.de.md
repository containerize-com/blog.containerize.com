---
title: "So installieren und konfigurieren Sie den Wamp Server unter Windows" 
seoTitle: "So installieren und konfigurieren Sie den Wamp Server unter Windows" 
description: "Installieren Sie WampServer unter Windows und entwickeln Sie schnell PHP-basierte Webanwendungen. Wamp Server ist sowohl für Windows 32 als auch für 64 Bit verfügbar." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Richten Sie eine Webentwicklungsumgebung ein, um Webanwendungen mit Apache2, PHP und MySQL zu erstellen. In diesem Artikel können Sie WAMP Server unter Windows installieren." 
url: /de/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Richten Sie eine Webentwicklungsumgebung ein, um Webanwendungen mit Apache2, PHP und MySQL zu erstellen. In diesem Artikel können Sie WAMP Server unter Windows installieren.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Wamp Server">}}

Jeder Entwickler muss über die erforderliche Software auf seinem Computer installiert sein, bevor er das Programm schreibt. In den frühen Tagen mussten Entwickler jede Software separat installieren und sie dann so konfigurieren, dass sie zusammenarbeiten. **WampServer**  und andere Weblösung -Stack -Software sind jetzt verfügbar, die alle erforderlichen Software in ein Paket einbündet. Sie müssen nur ein Paket installieren, um Ihre Entwicklungsumgebung in Betrieb zu nehmen.
In diesem Blog -Beitrag werden wir die folgenden Abschnitte behandeln.
  *[**Was ist Wampserver?** ][1]
  *[**WAMP -Installation** ][2]
  *[**WAMP -Konfiguration** ][3]
  *[**Zugriff auf phpmyadmin** ][4]

## Was ist Wampserver?   {#Was}
WampServer ist ein kostenloser Lösungsstapel für die Einrichtung der Webentwicklungsumgebung für PHP-basierte Anwendungen. WAMP steht für (W - Windows, A - Apache, M - Mysql und P - PHP). Darüber hinaus wird auch PhpMyAdmin und Adminer für die Verwaltung der Datenbank geliefert. Wamp ist eines der beliebten Werkzeuge und Sie können es schnell einrichten. Darüber hinaus können Sie den WAMP -Server aus dem Bedienfeld konfigurieren. Es bietet eine vollständige Webentwicklungsumgebung zum Erstellen und Testen von Anwendungen. WampServer besteht aus mehreren Komponenten, die Sie während der Installation entsprechend Ihren Anforderungen auswählen können. WampServer verfügt über mehrere Versionen von PHP. Sie können die PHP -Version problemlos gemäß Ihren Projektanforderungen ändern. Außerdem können Sie das DBMS (Datenbankverwaltungssystem) aus dem WampServer -Bedienfeld ändern.

## WAMP -Installation   {#installation}
Befolgen Sie die folgende Schritt-für-Schritt-Anleitung, um den Wamp Server unter Windows zu installieren.
  ***Download Wampserver**  von der offiziellen Website

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *Wählen Sie einen **Wampserver 32 Bit  **oder **  Wampserver 64 Bit**  Version des Installationsprogramms gemäß Ihrem Betriebssystem.
  *Suchen Sie den **WAMP-Download**  Datei und doppelklicken Sie darauf, um den Installationsprozess auszuführen.
  * Wählen Sie die Sprache aus und drücken Sie dann die OK -Taste.
  * Wählen Sie das Kontrollkästchen I akzeptieren und klicken Sie dann auf die nächste Schaltfläche.
  * Lesen Sie die wichtigen Informationen zur Installation von Wampserver und klicken Sie auf die Schaltfläche Weiter, um fortzufahren.
  * Wählen Sie einen Ordner aus, in dem Sie den WAMP -Server installieren möchten, und klicken Sie auf die Schaltfläche Weiter.
  * Sie müssen die Komponenten auswählen, die Sie wie im folgenden Screenshot gezeigt installieren möchten. Sie können alle PHP -Versionen und wechseln während der Entwicklung auswählen. Außerdem können Sie sowohl MySQL als auch Mariadb installieren.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Wählen Sie die Verknüpfung für WampServer und klicken Sie auf die Schaltfläche Weiter.
  * Klicken Sie auf die Schaltfläche Installieren, um WampServer zu installieren.
  * Wählen Sie nun den Standardbrowser und den Standardtexteditor für den WAMP -Server aus.
  * Ihre Installation ist abgeschlossen. Klicken Sie auf die Schaltfläche Fertigstellen, um den Assistenten der Wamp Server -Installation zu beenden.
  * Öffnen Sie Ihren Browser und geben Sie Lokalhost ein, um darauf zuzugreifen. Sie sehen unten.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## WAMP -Konfiguration   {#Configuration}
Jetzt werden wir uns mit wenigen Konfigurationen befassen, die Ihnen während der Entwicklung und Prüfung der Webanwendungen helfen. Sie können jetzt den Wampserver starten, indem Sie auf das Wampserver-Symbol auf Ihrem Desktop auf das Wampserver-Symbol doppelklicken.
  ***Services** -Sie können die Optionen sehen, alle Dienste zu starten, anzuhalten und neu zu starten, indem Sie mit der linken Maustaste auf das Wampserver-Symbol klicken.
  ***Datenbank ändern** -Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Tools aus und klicken Sie auf "Standard DBMS Mariadb MySQL invertieren". Der Wamp Server startet automatisch neu und Sie können die Standarddatenbank sehen, indem Sie Localhost in Ihrem Browser öffnen.
  ***PHP-Version ändern** -Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Tools aus und ändern Sie die PHP -CLI -Version und klicken Sie auf die gewünschte PHP -Version.
  ***Virtueller Host**  - Sie können problemlos einen virtuellen Host über die Weboberfläche von Wampserver hinzufügen. Öffnen Sie LOCALHOST in Ihrem Browser und klicken Sie im Abschnitt "Virtuelle Host hinzufügen". Geben Sie "Name des virtuellen Hosts wie dev.example.com" ein und geben Sie den absoluten Pfad des Projekts ein. Klicken Sie auf die Schaltfläche „Erstellung von VirtualHost“. Starten Sie den Apache -Server neu, um den neu erstellten virtuellen Host zu laden.
  ***Apache -Port ändern**  - Standardmäßig wird der Apache -Webserver auf Port 80 ausgeführt. Wenn Sie einen anderen Port für Apache verwenden möchten, können Sie dies aus dem WampServer -Bedienfeld tun. Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Tools aus und klicken Sie auf "Verwenden Sie einen anderen Port als 80". Geben Sie im Dialogfeld eine neue Portnummer ein und klicken Sie auf die Schaltfläche OK.
  ***DBMS -Port ändern**  - Standardmäßig wird der Datenbankserver auf Port 3306 ausgeführt. Wenn Sie einen anderen Port für den Datenbankserver verwenden möchten, können Sie dies aus dem WampServer -Bedienfeld tun. Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Tools aus und klicken Sie auf "Verwenden Sie einen anderen Port als 3306". Geben Sie die neue Portnummer im Dialogfeld ein und klicken Sie auf die Schaltfläche OK.
  ***leere Protokolle**  - WAMSERVER bietet Funktionen zum Löschen von Protokollen aus dem Bedienfeld. Sie können Protokolle wie PHP -Fehlerprotokoll, Apache -Fehlerprotokoll, Apache -Zugriffsprotokoll, MySQL -Protokoll und MariADB -Protokoll leeren. Auch Sie können alle Protokolle gleichzeitig löschen. Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Tools aus und wählen Sie leere Protokolle. Sie finden alle Optionen zum Entfernen von Protokollen.
  ***Sprache ändern**  - Sie können Sprache für das Wampserver -Bedienfeld. Klicken Sie mit der rechten Maustaste auf das WAMP-Symbol, um das Dialogfeld "Tools" zu öffnen. Wählen Sie Sprache und klicken Sie auf die erforderliche Sprache. Sie sehen das Bedienfeld in der neu ausgewählten Sprache.

## Zugriff auf phpmyadmin   {#phpmyadmin}
Sie können auf **PhpMyAdmin**  zugreifen, um Ihre Datenbanken zu verwalten, indem Sie Lokalhost in Ihrem Browser öffnen und dann auf den Link phpmyadmin auf der WampServer -Begrüßungsseite klicken. Außerdem können Sie darauf zugreifen, indem Sie http: // localhost/phpmyadmin URL besuchen.

## Abschluss
Wir haben den WampServer besprochen und eine vollständige Schritt-für-Schritt-Anleitung für **WampServer  **an Windows erfasst. Sie können **  wampserver**  einfach installieren und konfigurieren, indem Sie dieses Tutorial folgen und sofort mit dem Codieren beginnen. Weitere Optionen für Lösungsstapel -Software können die Links im Abschnitt "Links" besuchen.
Schließlich befindet sich [**containerize.com **][5] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher finden Sie in Kontakt mit dieser Kategorie [ **Web Server -Lösung**  ][6], um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[**Best Open Source Web Server Solution Stack Optionen** ][7]
  *[**Setup XAMPP und PhpMyAdmin als Lokalhost unter Windows** ][8]

  
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
