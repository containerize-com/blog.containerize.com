---
title: "Ein Anfänger -Leitfaden zur Verwendung von Krater -Rechnungsanwendung" 
seoTitle: "Ein Anfänger -Leitfaden zur Verwendung von Krater -Rechnungsanwendung" 
description: "Ein Tutorial zum Einstieg mit einem Open -Source -Rechnungssystem. Diese Kraterrichtlinie hilft Ihnen, sich mit den Kernkonzepten und -funktionen vertraut zu machen." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Dieses Tutorial hilft Ihnen dabei, über Krater -Rechnungsanwendungen zu erfahren. Es ist ein kostenloses und Open -Source -Rechnungssystem für die kleinen Unternehmen." 
url: /de/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Dieses Tutorial hilft Ihnen dabei, über Crater -Rechnungsanwendungen zu erfahren. Es ist ein kostenloses und Open -Source -Rechnungssystem für die kleinen Unternehmen.

{{< figure align=center src="images/blog-crater.png" alt="Open Source -Rechnungssystem">}}

Jedes Unternehmen benötigt eine Art System für die Verwaltung von Rechnungen, Ausgaben, Zahlungen und vielem mehr. Durch die Rechnungssoftware können Sie sie verwalten, damit Sie problemlos Abrechnungsaufgaben ausführen und sich auf andere wichtige Dinge konzentrieren können. In diesem Beitrag lernen wir, wie man Krater einrichtet und es zur Behandlung von Buchhaltungsoperationen für das Unternehmen verwendet.
  * [Einführung über Krater][1]
  * [Installationsverfahren des Kraters][2]
  * [Feature Exploration][3]
  * [Schlussfolgerung][4]

## Einführung über Krater {#Introduction}

[Crater][5] ist eine kostenlose und Open -Source -Abrechnungsanwendung. Es ist absolut kostenlos und Sie können es problemlos auf die neuesten Versionen aktualisieren. Es ist ein kostenloses Buchhaltungssystem für kleine Unternehmen und Freiberufler. Es handelt sich auch um eine vollständige Rechnungslösung, mit der Sie Ausgaben und Zahlungen im Auge behalten, Steuern berechnen und Schätzungen und Rechnungen erstellen können. Darüber hinaus wird die ausgelösten mobilen Anwendungen für iPhone- und Android-Geräte geliefert. Dadurch können Sie es von jedem Ort aus verwalten. Da Crater eine webbasierte Abrechnungssoftware ist, wurde die Webanwendung mit Laravel und VueJs entwickelt und die mobilen Apps sind mit React Native erstellt. Alle Dokumentationen im Zusammenhang mit Entwicklung und Bereitstellung sind verfügbar. Der vollständige Quellcode finden Sie unter [Github][6].

## Installationsverfahren des Kraters {#Installation}

Wir werden diskutieren, wie das Krater mit der manuellen Methode und Docker in diesem Abschnitt installiert wird.

### Manuelle Installation
  * Laden Sie die neueste Version von.
  * Laden Sie die heruntergeladene ZIP -Datei auf Ihren Server hoch und extrahieren Sie sie.
  * Zeigen Sie Ihre Domain in das öffentliche Verzeichnis im Kraterordner.
  * Navigieren Sie zum Root Ihres Projekts und führen Sie den Befehl „sudo chmod -r 775 ./“ aus, um geeignete Berechtigungen zuzuweisen.
  * Öffnen Sie Ihre Website im Browser und befolgen Sie den Installationsassistenten.

### Docker Installation
  * Installieren Sie Docker auf Ihrem Server :.
  * Installieren Sie Docker Compose, indem Sie diese Anleitung folgen :.
  * Klonkrater -Repository mit diesem Befehl.
```
git clone https://github.com/bytefury/crater
```
  * Führen Sie unter den Befehlen nacheinander aus, um das Krater zu installieren.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Öffnen Sie die Kraterstelle in Ihrem Browser und folgen Sie dem Installationsassistenten.

## Feature Exploration {#Feature}

In diesem Abschnitt werden wir die Kernfunktionen dieser Open -Source -Abrechnungsanwendung untersuchen. Wenn Sie mit der Installation fertig sind, öffnen Sie Ihre Website http://example.com und melden Sie sich bei der Anwendung an.
*  **Dashboard**  - Nach dem Anmelden werden Sie zum Dashboard gebracht, in dem die gesamte Ansicht der App angezeigt wird.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **Einstellungen**  - Navigieren Sie nun zur Seite der Einstellungen und fügen Sie verschiedene Webanwendungseinstellungen hinzu, z. B. Kontoeinstellungen, Unternehmensinformationen, Einstellungen, Anpassungen, Benachrichtigungen, Zahlungsmodule usw.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **Elemente**  - Die Registerkarte "Elemente" ist im Sidebar -Menü zugegriffen. Auf dieser Registerkarte können Sie Ihre Artikel verwalten. Sie können Elemente verwenden, während Sie Schätzungen und Rechnungen erstellen.
*  **Schätzungen**  - Erstellen Sie ein umfassendes Angebot, das Preise, Rabatte, Inventar und mehr enthält. Eine der drei integrierten Vorlagen kann verwendet werden, um eine Schätzung zu erstellen. Der Schätzung können zusätzliche Steuern hinzugefügt werden und sie können auch als Verbindungssteuer hinzugefügt werden.
*  **Rechnungen**  - Machen Sie professionelle Rechnungen und senden Sie sie an Ihre Kunden. Sie können verfügbare Vorlagen verwenden, um eine Rechnung zu generieren. Sie können der Rechnung zusätzliche Steuern sowie eine zusammengesetzte Steuer hinzufügen. Darüber hinaus können Sie Ihren Kunden einen prozentualen oder festen Wertrabatt gewähren. Darüber hinaus können Sie Rabatte auf einzelne Artikel sowie den Gesamtbetrag der Rechnungsbetrag beantragen.
*  **Zahlungen**  - Dieses Modul hilft Ihnen, die Zahlungen, die Sie von Ihren Kunden erhalten, weiter nachzuverfolgen.
*  **Ausgaben**  - Das Ausgabenmodul hilft Ihnen, den Überblick zu behalten, wie viel Sie für verschiedene Dienste ausgeben.
*  **Steuern**  - Mit dieser Funktion können Sie Ihre Steuern problemlos verwalten. Sie können mehrere Steuern auf den gesamten Rechnungsbetrag oder für den einzelnen Artikel hinzufügen.
*  **Berichte**  - Erhalten Sie umfassende Informationen zu all Ihren Rechnungen, egal ob sie für einen oder mehrere Kunden sind. Crater Supports verfügt über vier Arten von Berichten wie Verkaufsbericht, Gewinn- und Verlustbericht, Ausgabenbericht und Steuern.

## Abschluss {#Abschluss}

Wir haben von Krater und wie man es manuell und mit Docker eingerichtet. Wir haben uns auch einige der Funktionen angesehen, die jede Rechnungslegungs -Abrechnungssoftware bereitstellen sollte. Hoffentlich kann dieser Leitfaden Sie bei der schnellen Implementierung eines Open -Source -Rechnungssystems für Ihr Unternehmen unterstützen.
Schließlich schreibt [Containerize.com][7] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [Rechnungsstellung][8] in Kontakt, um regelmäßige Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Krater - kostenloses Buchhaltungssystem für Kleinunternehmen][5]
  * [Top 5 Open -Source -Buchhaltungssoftware im Jahr 2021][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
