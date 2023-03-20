---
title: "So richten und verarbeiten Sie die Sprungbrüche in Phplisten" 
seoTitle: "So richten und verarbeiten Sie die Sprungbrüche in Phplisten" 
description: "Phplist ist eine leistungsstarke selbst gehostete Mailingliste und Newsletter-Manager. Es hilft Unternehmen, Newsletter -Kampagnen zu senden und die Spulen leicht zu verarbeiten." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Senden Sie die Kampagne mit Open Source Newsletter und E -Mail -Marketing -Software. Setup Bounce Management in Phplist und automatisieren Sie die Bounce -Verarbeitung für gesunde Mailinglisten." 
url: /de/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Senden Sie die Kampagne mit Open Source Newsletter und E -Mail -Marketing -Software. Setup Bounce Management in Phplist und automatisieren Sie die Bounce -Verarbeitung für gesunde Mailinglisten.

{{< figure align=center src="images/phplist-2.png" alt="Process hüpft Phplisten">}}

Wir haben Artikel zur Implementierung von [Multi-Messen][1] und [Senden von Newsletter-Kampagnen][2] in Phplist geschrieben. In diesem Artikel werden wir diese Punkte im Detail über die Verfahren in Phplisten abdecken.
  * [Was ist Phplist?][3]
  * [Was ist Bounce?][4]
  * [Setup Bounce Management][5]
  * [Wie man Bounces verarbeitet?][6]
  * [Schlussfolgerung][7]

## Was ist Phplist? {#Phplist}
Phplist ist am beliebtesten kostenlosen und Open -Source -Newsletter -Senden von Software. Phplist ermöglicht Unternehmen, Marketing -E -Mails, Produktaktualisierungen und Ankündigungen an Abonnenten zu senden. Es hilft Unternehmen für die Verwaltung von Auflistung, Entwerfen von Beautiful Newsletter, Zeitplankampagne und Bounce Management. [Lesen Sie mehr][8]

## Was ist Bounce? {#prallen}
Ein Sprungbrett ist eine E -Mail -Nachricht, die aus Anzahl von Gründen nicht zugestellt werden kann und zum Absender zurückkehrt. Wir können Gründe wie Mailbox haben, die E -Mail -Adresse nicht mehr zu gültigem oder falscher E -Mail -Adresse. Aus diesem Grund müssen Sie Bounces verarbeiten, damit Sie keine E -Mails an ungültige E -Mail -Adressen senden.

## Setup Bounce Management {#setup}
Um die Bounce -Verwaltung einzurichten, müssen Sie die folgenden Einstellungen in der Datei config.php konfigurieren.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Sprungverarbeitungsmanagement">}}

Wir werden in den folgenden Schritten mehr über diese Konfigurationen erklären.
  * Zunächst müssen Sie eine E -Mail -Adresse hinzufügen, an der Sie Sprungnachrichten erhalten möchten. Sie finden ** message_envelope ** variable und fügen Sie Ihre E -Mail -Adresse hinzu.
  *Phplist kann über zwei Protokolle E -Mails aus der Bounce -Mailbox abrufen, ** Mbox und POP3 **. Finden Sie also ** bounce_protocol ** Variable und ändern Sie es in Ihrer Umgebung.
  *Wenn Sie ** mbox ** Prototcol festgelegt haben, müssen Sie das Dateiformat dafür definieren. Finden Sie also ** bounce_mailbox ** und setzen Sie den Pfad wie "/var/spool/mail/listBounces".
  *Für den Fall, dass Sie ** POP3 ** Protokoll verwendet haben, müssen Sie ** Host, Benutzername und Passwort für den Mailbox konfigurieren. Sie können diese Einstellung oben in Sreenshot sehen.
  *Zusätzlich zu den oben genannten Einstellungen für ** POP3 ** Protokoll müssen Sie möglicherweise Port und Verschlüsselung hinzufügen.

## Wie man Bounces verarbeitet? {#Verfahren}
Phplist unterstützt zwei Methoden für Prozesspressen: manuell und automatisiert. Sie müssen Cron Job erstellen, um die Bounce -Verarbeitung zu automatisieren. Sie können auch manuell mit den Spulen verarbeiten, indem Sie ** System> Prozess -Bounces ** Seite besuchen. Daher müssen Sie zuerst die Einstellungen für Ihre Anforderungen \ _process \ _Bounces ** manuell ändern. Sie können [Phplist Docs][9] besuchen, um Cron -Jobs für Prozesspräparate einzurichten.

## Schlussfolgerung {#Conclusion}
In diesem Beitrag haben wir gelernt, wie man die Bounce -E -Mail -Adresse und die Verarbeitung von Bounces konfigurieren. Sie können problemlos mit manueller Methode verarbeiten, wenn Sie weniger Abonnenten haben. Sie müssen jedoch einen automatischen Bounce -Handhabungsprozess für große Listen verwenden. Es speichert Ihre Zeit und hilft Ihnen dabei, saubere und gültige Abonnentenlisten zu erstellen.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
