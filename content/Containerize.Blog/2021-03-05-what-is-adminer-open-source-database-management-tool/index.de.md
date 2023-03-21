---
title: "Was ist Administrator? | Open-Source-Datenbankmanagement-Tool" 
seoTitle: "Was ist Administrator? | Open-Source-Datenbankmanagement-Tool" 
description: "Was ist Administrator? Ein webbasiertes Datenbankverwaltungssystem mit einer Entwickler-freundlichen Schnittstelle. Lassen Sie uns diskutieren, wie Datenbanken mit einem Open-Source-Administrator verwaltet werden." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer ist ein webbasiertes Open-Source-Datenbankverwaltungssystem zum Verwalten von Datenbanken. Lassen Sie uns erfahren, wie Sie den Administrator auf Localhost einrichten und die wichtigsten Funktionen überprüfen." 
url: /de/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer ist ein webbasiertes Open-Source-Datenbankverwaltungssystem zum Verwalten von Datenbanken. Lassen Sie uns erfahren, wie Sie den Administrator auf Localhost einrichten und die wichtigsten Funktionen überprüfen.
{{_LINE_11_}}

## Überblick
Datenbezogene Aufgaben sind jetzt viel kritischer als je zuvor. Das Datenbankmanagement -Tool ist ein wesentlicher Bestandteil eines Unternehmens geworden. Es gibt jedoch viele webbasierte Datenbankverwaltungssysteme, die Lösungen für solche herausfordernden Aufgaben anbieten. Unternehmen generieren täglich unzählige Daten und sind immer schwer zu warten. Darüber hinaus vereinfacht Organisationen dazu, den Datenzugriff und die Datenkontrolle zu vereinfachen. Diese kostenlosen Tools reduzieren die Redundanz von Daten und machen Datenbanken effizient und zuverlässig. Darüber hinaus haben wir Blog -Beiträge zu Themen wie [Top Open Source DBMS -Softwaretools][1] und einige weitere veröffentlicht.
Daher hat Open Source Community den Administrator entwickelt, bei dem es sich um ein kostenloses Datenbankmanagement-Tool auf Unternehmensebene handelt. In diesem Verwaltungs -Tutorial werden wir die folgenden Punkte abdecken.
  * [Was ist Administrator?][2]
  * [Wichtige Merkmale des Administrators][3]
  * [Adminer gegen phpmyadmin][4]
  * [Datenbanken mit Administrator verwalten][5]
  * [Schlussfolgerung][6]

## Was ist Administrator?   {#Was}
Wenn es um leichtes, benutzerfreundliches und leistungsstarkes MySQL-Datenbankmanagement-Tool geht, hat Adminer eine große Beliebtheit gewonnen und bietet im Vergleich zu PHPMYADMIN viele Verbesserungen. Anfangs wurde dieses Datenbankverwaltungs -Tool 2007 von Jakub Vrana als Alternative zu PHPMYADMIN entwickelt, sodass Sie eine einzige leichte PHP -Datei in der Datenbank Ihrer Anwendung herunterladen und installieren müssen.
Als Open -Source -Datenbankverwaltungs -Tool kann es auch kostenlos verwendet werden und in PHP geschrieben. Was dieses webbasierte Datenbankverwaltungssystem auszeichnet, ist ein gutes Design der Benutzeroberfläche für ein nahtloses Benutzererlebnis sowie starke Sicherheitsfunktionen, um Daten vor Angriffen oder böswilligen Hacking-Versuchen sicher zu halten. Dieses Datenbankverwaltungs -Tool ist einfach einzurichten und erfordert einfache Anforderungen wie Ubuntu und Lampe. Benutzer können umfassende Dokumentation zu Entwicklung und Bereitstellung finden. Daher finden Sie Quelldateien dieses webbasierten Datenbankverwaltungssystems auf [GitHub][7].

## Wichtige Merkmale von Adminer   {#Important}
Einige grundlegende, aber wichtige Funktionen dieses Datenbankverwaltungs -Tools sind:
  * Es verfügt über viele Datenbankfunktionen, einschließlich der Auswahl der Datenbank, der Bearbeitung von Tabellen, zum Einfügen/Bearbeiten von Daten in Tabellen und Sortieren/Durchsuchen von Daten in mehreren Spalten
  * Unterstützt mehrere Datenbank, einschließlich: MySQL, PostgreSQL, SQLite, MS SQL, Oracle und SimpledB -Datenbanken und mehr
  * Es ist in 43 Sprachen erhältlich, darunter Englisch, Arabisch, Persisch, Politur, Niederländisch usw.
  * Sie können Datenbankobjekte wie Ansichten, Auslöser, gespeicherte Prozeduren, Benutzerberechtigungen und mehr problemlos bearbeiten.
  * Der Adminer bietet auch Sicherheitsmaßnahmen gegen SQL -Injektion, Session -Diebstahl, Softwareangriffe (Cross Site Scripting) und andere Angriffe.

## Adminer gegen phpmyadmin   {#Adminer}}
Wenn wir also darüber sprechen, was Administrator ist, wäre es interessant, den Vergleich zwischen Adminer mit PhpMyAdmin zu kennen. Wenn es darum geht, zwischen Adminer und PhpMyAdmin zu wählen, ist Adminer für die flexiblen Funktionen und die leichten Datei hochgeladen, die er bietet. In ähnlicher Weise unterstützt es im Vergleich zu PhpMyAdmin mehrere Datenbanken, darunter MySQL, SQLite und viele andere. In ähnlicher Weise ist es intuitiver und schlauer als phpmyadmin, wenn es darum geht, zusätzliche Felder hinzuzufügen, die der Administrator automatisch durchführt oder gleichzeitig mit allen Indizes manipuliert wird.

## Datenbanken mit Adminer   {#Manage} verwalten
Im Abschnitt dieses Adminer -Tutorials werden wir mit dem Administrator die Datenbanken verwalten.
**System Anforderungen**
Damit Adminer auf Ihrem System ausgeführt werden kann, ist es wichtig, dass Sie die folgenden Anforderungen auf Ihrem Server bereits festlegen:
  * PHP Version 5, 7 oder 8
  * Ein Datenbanktreiber wie MySQL, SQLite, PostgreSQL usw.
**Installation**
Wenn Sie diese beiden Systemanforderungen überprüfen lassen, laden Sie einfach die Datei von [][8] herunter und beginnen Sie mit dem Hochladen der PHP -Datei auf Ihren Server. Benennen Sie für den XAMPP -Server die heruntergeladene Datei als "adminer.php" um und setzen Sie diese Datei in den HTDOCS -Ordner ein.
**Zugriff auf Benutzeroberfläche** 
Was ist Administrator nach dem Durchlaufen? Greifen Sie nun von http auf diese App zu: your-ip-adress/adminer.php wie gezeigt:
{{_LINE_42_}}
**Verbinden zum Server**
Melden Sie sich bei diesem kostenlosen Datenbankverwaltungs -Tool mit dem Benutzernamen und Kennwort Ihres Servers an. Wenn Sie nun nur auf eine Datenbank zugreifen möchten, geben Sie ihren Namen ein. Sie können dieses Feld leer lassen, um auf alle Datenbanken zuzugreifen, die bereits auf dem Server vorhanden sind.
**Datenbanken verwalten** 
Nach dem Anmeldung sehen Sie eine Liste aller aktuellen Datenbanken. Klicken Sie auf eine beliebige Datenbank, um sie zu verwalten.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Verwalten Sie Datenbanken mit dem Adminer -Datenbankverwaltungs -Tool">}}

Auf dem nächsten Bildschirm sehen Sie die Liste aller Tabellen ausgewählter Datenbanken. Von hier aus können Sie die Datenbank oder ihre Tabellen exportieren, Tabellen/Spalten hinzufügen oder bearbeiten, Daten über SQL -Abfragen und vieles mehr wie hier gezeigt ändern:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Datenbankverwaltungstool">}}

**Erstellen Sie eine neue Datenbank** 
Um eine neue Datenbank zu erstellen, klicken Sie auf "Datenbank erstellen", geben Sie den Datenbanknamen ein und klicken Sie auf "Speichern".

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Datenbankverwaltungstool">}}

**Einfügen/Aktualisieren von Datensätzen** 
Das Hinzufügen neuer Datensätze zu einer Tabelle ist ziemlich einfach. Klicken Sie auf den neuen Elementlink, mit dem Sie zum Einfügenbildschirm umgeleitet werden. Hier können Sie zusammen mit dem Datentyp neue Daten für alle Spalten in der Tabelle hinzufügen, sodass das Hinzufügen neuer Daten ein kurzer Prozess ist.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Administrator gegen phpmyadmin">}}


## Schlussfolgerung   {#Conclusion}
Dies bringt uns zum Ende dieses Verwaltungs -Tutorials. Wir haben einige wichtige Themen wie das, was Administrator, Adminer gegenüber PhpMyAdmin und andere Aspekte dieses webbasierten Datenbankverwaltungssystems für Open-Source-Datenbasis durchlaufen hat. Hoffentlich hilft Ihnen dieser Blog -Beitrag sicherlich, wenn Sie ein Open -Source -Datenbankverwaltungs -Tool installieren möchten. Es ist eine intuitive, intelligente und benutzerfreundliche Oberfläche, die es zu einem sehr beliebten Datenbankmanagement-Tool macht. Darüber hinaus unterstützt es viele Datenbanken, darunter MySQL, SQLite, MongoDB und vieles mehr sowie Sicherheitsmaßnahmen, um böswillige Hacking -Ereignisse zu schützen und zu verhindern. Alles in allem ist dieses Datenbankverwaltungs -Tool nicht nur Open Source, sondern auch kostenlos zu verwenden.
Schließlich schreibt [Containerize.com][9] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie für regelmäßige Aktualisierungen in Kontakt mit den Tools für [Datenbankverwaltung][10]. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][11], [LinkedIn][12] und [Twitter][13] folgen.

## Erkunden
Weitere Informationen zu kostenlosen webbasierten Datenbankverwaltungs-Tools finden Sie in den folgenden Seiten:
  * [Adminer | Kostenloses webbasiertes Datenbankverwaltungssystem][14]
  * [Top Open Source DBMS -Software -Tools][1]
  * [Top 5 Open -Source -Datenbankverwaltungs -Tools in 2021][15]
  * [Automatisieren Sie den Geschäftsbetrieb mit kostenloser und Open -Source -Software][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
