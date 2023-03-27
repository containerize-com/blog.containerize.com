---
title: "Automatisieren Sie das Ticketing -System mit WordPress und Osticket" 
seoTitle: "Automatisieren Sie das Ticketing -System mit WordPress und Osticket" 
description: "Die Osticket-Wort-Integration bietet Kunden die Möglichkeit, Support-Tickets von WordPress-Site zu generieren und sie über Osticket-Dashboard zu verwalten." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Automatisieren Sie den Helpdesk -Prozess mit nahtloser WordPress- und Osticket -Integration. Verwandeln Sie die Anfragen der Kunden über webbasierte Formulare in Support-Tickets." 
url: /de/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Automatisieren Sie den Helpdesk -Prozess mit nahtloser WordPress und Osticket -Integration. Verwandeln Sie die Anfragen der Kunden über webbasierte Formulare in Support-Tickets.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Osticket-Wortpress-Integration zur Automatisierung des Ticketing-Systems">}}

Ihre Kunden können Fragen zu Ihren Produkten/Dienstleistungen haben. Sie werden ihre Anfragen über verschiedene Formulare auf Ihrer WordPress -Site senden. Die Integration von Osticket-Wordpress hilft, diese Abfragen in Tickets umzuwandeln. Es sendet Daten über API an Osticket -Helpdesk -System.
Osticket ist ein Open-Source- und kostenloses Helpdesk-Ticket-System. Kunden können Tickets bezüglich ihrer Anfragen zu Osticket erstellen. Dieses Helpdesk -System macht es jeder Organisation sehr einfach, die von ihren Kunden stehenden Fragen zu verwalten. Der Administrator kann Abteilungen und Teams erstellen und Tickets gemäß der Art der erstellten Tickets Tickets zuweisen. Dieses kostenlose Open-Source-System wird die Probleme im Auge behalten. Es ermöglicht sowohl Kunden als auch Agenten, das Ticket zu kommentieren, um den Fortschritt zu besprechen. Wir werden die folgenden Abschnitte in diesem Blog -Beitrag behandeln:
  * [Integrationsprozess][1]
  * [WordPress Plugin Installation][2]
  * [Authentifizierungsverfahren][3]
  * [Schlussfolgerung][4]

## Integrationsprozess: {#integration}

Die Integration von Osticket und WordPress erfordert ein Kontaktformular auf WordPress -Site mit folgenden Feldern
  1. Hilfesthema
  2. E -Mail
  3. Vollständiger Name
  4. Betreff
  5. Nachricht
Das Kontaktformular muss E -Mails senden, da dieser Plugin die Funktion WP_MAIL hängt, um die Daten der Formulare abzurufen.

## WordPress -Plugin -Installation: {#wordpress}

  1. Gehen Sie zu Admin -Dashboard Ihrer WordPress -Site.
  2. Gehen Sie als nächstes zum Abschnitt "Plugins".
  3. Dann installieren Sie dieses [Plugin][5].
  4. Aktivieren Sie danach das Plugin.
  5. und gehen Sie zu "Einstellung" -> "Osticket -Anschluss".
  6. Geben Sie dann die URL Ihrer Osticket -Site ein, d. H. [http: //your.domain/api/tickets.json][6]
  7. Geben Sie den API -Schlüssel ein, der aus dem Osticket -Administratorbereich erstellt wurde (erläutert im nächsten Abschnitt).
  8. Füllen Sie am Ende alle Felder aus, um Daten aus Ihrem Kontaktformular in die Ticketfelder von Osticket abzubilden.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Osticket-Wortpress-Integration zur Automatisierung des Ticketing-Systems">}}


## Authentifizierungsverfahren: {#auth}

Die API -Authentifizierung erfolgt über API -Schlüssel, die in der Administratorpanel von Osticket konfiguriert sind. API -Tasten werden generiert und mit einer Quell -IP -Adresse verknüpft, die gegen die Quell -IP von HTTP -API -Anforderungen überprüft wird. So erstellen Sie den API -Schlüssel
  1. Gehen Sie zu Admin -Panel von Osticket.
  2. Klicken Sie auf "Verwalten".
  3. Gehen Sie zum Sub -Menü "API -Schlüssel".
  4. Klicken Sie auf "Neue API -Taste hinzufügen".
  5. Setzen Sie "Status" auf aktiv.
  6. Überprüfen Sie das Kontrollkästchen "Kann Ticket erstellen".
  7. Geben Sie die IP -Adresse Ihrer WordPress -Site ein und klicken Sie auf "Taste hinzufügen".

{{< figure align=center src="images/osticket-1024x729.png" alt="Osticket-Wortpress-Integration zur Automatisierung des Ticketing-Systems">}}


## Abschluss: {#conclusion}

Die Integration von Osticket-Wordpress wird den Ticketing-Prozess automatisieren. Daher wird es dem Support -Team das Leben erleichtern. Anfragen auf der WordPress -Website werden automatisch in Support -Tickets für Osticket umgewandelt. Damit das Support -Team alle Anfragen der Kunden einfacher und effizient verwalten kann. Support -Agenten werden per E -Mail -Benachrichtigungen benachrichtigt. Daher können Agenten die Anfragen der Kunden rechtzeitig lösen. Der Kommentarbereich über Osticket hilft sowohl Kunden als auch Support -Agenten, effektiv und zeitnah zu kommunizieren. Es erleichtert es den Managern auch, den Fortschritt für jedes Ticket zu verfolgen.

## Erkunden:
Um mehr über Osticket und WordPress zu erfahren, lesen Sie bitte die folgenden Seiten:
  * [Osticket - kostenloses Open -Source -Helpdesk -Ticket -System][7]
  * [WordPress - Kostenlose Open Source und am weitesten verbreitete CMS- und Blogging -Tool][8]
  * [So einrichten Sie Online -Helpdesk -Software mit Osticket][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
