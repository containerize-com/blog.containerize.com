---
title: "Osticket-Anpassung-Implementieren Sie Multi-Messen in Osticket" 
seoTitle: "Osticket-Anpassung-Implementieren Sie Multi-Messen in Osticket" 
description: "Durch die Implementierung von Multi-Messen in Osticket können Kosten und Ressourcenauslastung einsparen. In diesem Artikel werden wir eine Osticket-Anpassung durchführen, um Multi-Mieter zu erreichen." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Mit Multi-Tenant-Osticket-Helpdesk können Sie mehrere Mieter aus einer einzigen Installation erstellen. Dies führt zu einer optimalen Verwendung von Webserverressourcen." 
url: /de/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Tenant-Osticket-Helpdesk ermöglicht es Ihnen, mehrere Mieter aus einer einzigen Installation zu erstellen. Dies führt zu einer optimalen Verwendung von Webserverressourcen.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticket -Anpassung - Implementieren Sie Multi -Messen in Osticket">}}

In diesem Artikel werden wir diskutieren, wie die Osticket-Anpassung zur Implementierung von Multi-Messen vorgenommen wird. Dieser Beitrag behandelt folgende Themen:
  * [Osticketübersicht][1]
  * [Übersicht über Multi-Messen][2]
  * [Vorteile der Multi-Messen][3]
  * [Implementierung][3]
  * [Schlussfolgerung][4]

## Osticketübersicht: {#osticket}

[Osticket][5] ist eine webbasierte Helpdesk -Software von Open Source -Online -Kundendienst. Es bietet ein intuitives Bedienfeld und eine Echtzeit-Berichtskomponente. Es ist einfach zu verwenden, Anfragemanagementmodul zu verwenden. Auf diese Weise können Sie Anfragen aus Telefon-, E-Mail- und webbasierten Formularen erstellen. Dies bietet zahlreiche Optionen, um alle Teile der Kundenunterstützungserfahrung wie Kommentare und E -Mail -Benachrichtigungen anzupassen.

## Überblick über Multi-Messen: {#multitenancy}

Multi-Menancy bezieht sich auf die Implementierung, bei der mehrere unabhängige Instanzen einer App in einer gemeinsamen Umgebung arbeiten. Die Instanzen (Mieter) sind logisch isoliert, aber physisch integriert. Eine Organisation kann möglicherweise mehrere Abteilungen haben. So können sie mehrere Mieter/Instanzen derselben App erstellen. In unserem Fall kann beispielsweise ein Helpdesk -System für verschiedene Domänen derselben Organisation konfiguriert werden. Es könnte Hunderte von Mietern geben, aber alle verwenden dieselben Dateien und damit denselben Speicher. Dies senkt die Speicherkosten, und es wird die Upgrades leichter machen. Entwickler müssen die Dateien nur von einem Ort von einem Ort aktualisieren, anstatt Änderungen für jede Website separat vorzunehmen.

## Was sind die Vorteile von Multi-Messen? {#benefits}

Hier sind einige entscheidende Vorteile von Multi-Messen
*  **Ressourcenoptimierung:**   Eine Maschine, die für einen Mieter reserviert ist, ist nicht effizient. Weil ein Mieter wahrscheinlich nicht die gesamte Rechenleistung der Maschine verwendet. Die Freigabe von Maschinen maximiert die Verfügbarkeit von Ressourcen.
*  **Niedrigere Kosten:**   Bei mehreren Mietern, die die gleichen Ressourcen teilen, kostet viel niedriger als wenn jeder Mieter seine eigene dedizierte Infrastruktur benötigte.
*  **Effizientes Hosting:**   Auch Multi-Tenant-Osticket senkt die Hosting-Kosten in einer gemeinsamen Umgebung auf ein Minimum.
*  **Sicherheit:**   Mit geringerer Interaktion mit der Außenwelt wird die Exposition gegenüber böswilliger Software reduziert.
*  **Easy Upgrade**  : Upgrade von Dateien nur an einem Ort aktualisieren, anstatt sie separat zu aktualisieren. Dies spart viel Zeit und Mühe.

## Implementierung von Osticket mit mehreren Mietern: {#implementation}

  * Erstellen Sie einen neuen leeren Datenbanknamen als "main_db".
  * Erstellen Sie dann Tabelle mit dem Namen "Mieter", die Details zu allen Mietern enthält.
  * Es wird folgende Felder haben:
  1. Site_NAME
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticket -Anpassung - Implementieren Sie Multi -Messen in Osticket">}}

  * Site \ _Name -Feld hält den Namen des Mieters. Das URL -Feld hält die vollständige URL des Mieters. Das DB \ _Name -Feld enthält den Namen der Datenbank, die für den neuen Mieter erstellt wird.
  * Danach Open /include/ost-config.php Datei und fügen Sie den folgenden Code hinzu
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Dieser Code aktualisiert die Standard -Datenbankkonnektivität. Es wird zuerst die URL des aktuellen Mieters bekommen. Dann wird der Name der Datenbank entsprechend dieser URL erhalten. Auf diese Weise weiß die App, mit der sie eine Verbindung herstellen sollen. Jeder Mieter hat eine separate Datenbank. Die Datenbank wird auf der Grundlage der Mieter -URL ausgewählt.
  * Für die Erstellung eines neuen Mieters richten Sie einfach eine neue Mieterdomäne auf Nginx Server ein. Kopieren Sie danach einfach die aktuelle Osticket -Datenbank und benennen Sie sie um. Fügen Sie schließlich den Eintrag in "Mieter" -Tabelle der Datenbank "main_db" hinzu.

## Abschluss: {#conclusion}

Osticket ist eine kostenlose und Open -Source -IT -Helpdesk -Management -Software. Wir haben gelernt, wie Osticket-Anpassungen zur Implementierung von Multi-Mieter-in-Osticket-Anpassungen Kosten sparen, die App optimieren und die Anforderungen der Ressourcen senken können. Es wird den Entwicklern das Leben erleichtern, in wenigen einfachen Schritten neue Mieter zu schaffen. Erstellen Sie daher mehrere Osticket -Mieter aus derselben Installation.

## Erkunden:
Bitte überprüfen Sie die folgende Seite, um mehr über Osticket zu erfahren:
  * [Osticket - Eine kostenlose Open -Source -Helpdesk -Software][5]
  * [Ein Anfängerleitfaden zur Entwicklung von Osticket -Plugin][6]
  * [So einrichten Sie Online -Helpdesk -Software mit Osticket][7]
  * [Automatisieren Sie das Ticketing -System mit WordPress und Osticket][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
