---
title: "Setup Advanced Bounce Management und Bounce -Regeln in Phplist einrichten" 
seoTitle: "Setup Advanced Bounce Management und Bounce -Regeln in Phplist einrichten" 
description: "Aktivieren Sie das erweiterte Bounce -Management in Phplisten und behandeln Sie Bounce -E -Mails. Erstellen Sie Bounce -Regeln und automatisieren Sie den Prozess, um verschiedene Aktionen für zurückgegebene Nachrichten zu ergreifen." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Abhängig von der Art des Absprungfehlercode, der vom MTA zurückgegeben wird, ermöglicht das Advanced Bounce Management die automatisierte Ausführung verschiedener Aktionen." 
url: /de/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## Abhängig von der Art des Absprungfehler -Code, der vom MTA zurückgegeben wird, ermöglicht das Advanced Bounce Management die automatisierte Ausführung verschiedener Aktionen.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Setup Advanced Bounce Management und Bounce -Regeln in Phplist einrichten">}}

In unserem [vorherigen][1] Tutorial hatten wir bereits **Phplist Bounce Processing  **angesprochen. Wenn Sie nicht mit der Bounce -Verarbeitung vertraut sind, können Sie sie lesen. Sie können nicht zugestellte E -Mails mit der Bounce -Verarbeitung in Ihr Phplist -Projekt herunterladen. Wie gehen Sie mit heruntergeladenen E -Mails um? Keine Ahnung, schauen wir uns das Advance Bounce -Management an, mit dem Sie **  Bounce -E -Mails**  aussortieren können. Jede zurückgegebene E -Mail -Nachricht hat einen Fehlercode, der vom MTA (Mail Transfer Agent) zurückgegeben wird. Darüber hinaus können Sie die zurückgegebene Nachrichten -E -Mail -Header überprüfen und alle Informationen entlang der Fehlercode enthält.
  * [Aktivieren Sie die Handhabung des erweiterten Bounce][2]
  * [Fügen Sie die Bounce -Regel hinzu][3]
  * [List Bounce -Regeln][4]
  * [Schlussfolgerung][5]

## Aktivieren Sie die erweiterte Bounce -Handhabung   {#Enable}
Erstens zuerst aktivieren Sie die erweiterte **Bounce -Handhabung** , indem Sie den folgenden Code in config.php -Datei kopieren.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Navigieren Sie danach zu **System> Bounces> List Bounces Regeln** , um Absprungregeln zu erstellen.
Sie können Absprungregeln erstellen, die auf regulären Ausdrücken basieren. Sie können den Grund finden, warum ** E -Mail zurück in den Header abspritzt und ihn für den regulären Ausdruck verwenden. Wählen Sie außerdem die entsprechenden Aktionen basierend auf dem Fehlercode oder dem regulären Ausdruck aus. Phplist unterstützt die folgenden Aktionen. Die Aktionserklärung ist selbsterklärend, sodass wir nicht im Detail gehen müssen.
  * Abonnenten löschen
  * Unkonstant Abonnent
  * Blacklist -Abonnent
  * Blacklist -E -Mail -Adresse
  * Abonnenten löschen und springen
  * Unbestätigter Abonnent und Absprung löschen
  * Fügen Sie Abonnent in die DO-nicht-Send-Liste hinzu und löschen Sie Bounce
  * Fügen Sie der DO-nicht-Send-Liste eine E-Mail-Adresse hinzu und löschen Sie Bounce
  * Sprunglöschen

## Bounce -Regel   {#add} hinzufügen
Erstellen wir unsere erste Absprungregel.
  *Geben Sie zunächst den regulären Ausdruck wie **ein (das Konto wurde ausgesetzt | Konto nicht verfügbar)** 
  * Wählen Sie anschließend die entsprechende Aktion aus
  * Schließlich fügen Sie Notiz/Memo für die Regel hinzu

{{< figure align=center src="images/add-bounce-rule.png" alt="Erstellen Sie in Phplist eine Bounce -Regel">}}

Aus folgenden Gründen können Sie Absprungregeln hinzufügen und entsprechende Maßnahmen für die Behandlung von Bounces auswählen. Sie können jedoch nach SMTP -Antworten suchen und der Liste weitere Regeln hinzufügen.
  * Archiviertes Empfänger
  * Typ = MX: Host nicht gefunden
  * Entschuldigung, kein Mailbox hier mit diesem Namen
  * Mailbox deaktiviert
  * Konto ist deaktiviert
  * Diese Mailbox wurde aufgrund von Inaktivität blockiert
  * Benutzer unbekannt
  * Kein solcher Empfänger
  * usw …
**HINWEIS:  **Sie müssen Absprunggrund in die Klammung einwickeln und das Rohrsymbol verwenden **  |  **oder **  oder**  Anweisung, wenn Sie mehrere Gründe in einer Sprungregel hinzufügen möchten.

## List Bounce Regeln   {#List}
Nachdem Ihre Anzahl von Regeln erstellt hat, sieht Ihre **Bounce -Regeln**  wie in den folgenden Screenshot aus. Sie können andere Aktionen wie Auftragsänderungen und Löschen auf dieser Seite ausführen.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Liste der Absprungregeln">}}


## Schlussfolgerung   {#Conclusion}
In diesem Tutorial haben wir etwas über Advanced **Bounce Management**  erfuhren und die erforderlichen Absprungregeln entwickelt. Es wäre großartig, diese Funktion so zu ermöglichen, dass Sie den Prozess der Reinigung ungültiger E -Mail -Adressen von Ihren Listen automatisieren können. Sie können auch das Mindestniveau der zurückgegebenen E -Mails beibehalten. Darüber hinaus haben Ihre Listen legitime Abonnenten.
Darüber hinaus ist [Containerize.com][6] auf dem Weg, den Stapel von Open -Source -Produkten in mehreren Sprachen und Frameworks zu verbessern. Für regelmäßige Updates finden Sie bitte in der Kategorie [Newsletter][7] für interessantere Artikel.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Phplist - Open -Source -Newsletter und E -Mail -Marketing -Software][8]
  * [So erstellen und senden Sie den Newsletter mit Phplist][9]
  * [So richten und verarbeiten Sie in Phplisten][1]
  * [Anfängerleitfaden zur Entwicklung von Phplist -Plugin][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
