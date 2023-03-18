---
title: "So richten Sie Bootstrap Form Creator Form.io auf Localhost ein" 
seoTitle: "So richten Sie Bootstrap Form Creator Form.io auf Localhost ein" 
description: "Gehen Sie diesen Artikel durch und lernen Sie, wie man das Äußer auf Localhost einrichtet. Dieser Bootstrap Form Creator ist kostenlos, erweiterbar und bietet Integrationen von Drittanbietern." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Erstellen Sie aufgabenspezifische und anpassbare Formulare mit einem Drag & Drop-HTML-Formularbuilder. Das Employio ist selbst gehostet, API gesteuert, bietet Formulare und Datenmanagement." 
url: /de/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Aufgabenspezifische und anpassbare Formulare mit einem Drag & Drop-HTML-Formular Builder. Das Employio ist selbst gehostet, API gesteuert, bietet Formulare und Datenmanagement.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap Form Creator">}}


## **Überblick**
In den schnell wachsenden Geschäftsbedürfnissen gibt es viele Operationen, die direkt zum öffentlichen Handel und Engagement gehören. Dieses Engagement könnte entweder physisch oder virtuell sein. Manchmal geht es darum, Dienste anzubieten, und manchmal geht es darum, Daten oder Feedback zu sammeln. Auf der anderen Seite sammeln Unternehmensorganisationen dazu, Kundendaten zu ihren Produkten und Dienstleistungen zu sammeln. Daher hängt die Datenmenge von der Reichweite des zuständigen Publikums ab. Als nächstes ist das Datenmanagement eine weitere kritische Aufgabe und erfordert immense Aufmerksamkeit.
Unternehmenssektoren verwenden jedoch Online -Formulare, um die Anforderungen zur Datenerfassung zu erfüllen. Es gibt viele Websites, die viele Formulare enthalten können, z. B. Kontaktformular, Beschwerdeformular, Kundenfeedback -Formular, Zulassungsformular und mehr. Jetzt wird es zu einem Problem, diese Formulare und die Einreichungsdaten zu erstellen, zu verwalten. Hier kommt [Form.io] [1]. Form.io ist ein Open -Source -Bootstrap -Formular für Erstellung von Formularen und Datenverwaltungsfunktionen. In der jüngeren Vergangenheit haben wir einen Artikel veröffentlicht, in dem die [Top 5 Open Source Online -Formulierer im Jahr 2020] [2] behandelt wurden. In diesem Blog -Beitrag werden wir diesen Ersteller des Bootstrap -Formulars zusammen mit seinem Einrichtungsvorgang auf Localhost untersuchen, indem wir die folgenden Punkte abdecken.
  *** [Was ist Form.io?][ ]****
  *** [Wie richte ich Form.io auf localhost?] [4] **
  *** [Wie funktioniert Form.io?] [5] **
  *** [Schlussfolgerung] [6] **

## Was ist Form.io? {#Was}
Form.io ist ein kostenloser Open -Source -Formular Builder. Es ist selbst gehostete, mehrsprachige und Mehrmesser-Software. Dieses ** HTML-Formsteller ** bietet rollenbasierte Berechtigungen für Benutzer und Formulare. Form Darüber hinaus basiert dieser HTML -Formular Builder auf serverloser Architektur, und Benutzer können Formulare generieren und in die anderen Anwendungen einbetten, indem sie nur eine einzelne Codezeile platzieren. In Bezug auf die Benutzeroberfläche bietet sie eine logische Benutzeroberfläche mit Drag & Drop -Funktionen. Es gibt verschiedene HTML -Elemente auf einer Seite, die Benutzer ziehen und fallen können, um das erforderliche Formular zu erstellen. Benutzer können benutzerdefinierte JavaScript für die verbesserte Funktionalität injizieren. Darüber hinaus können Benutzer das Erscheinungsbild des Formulars mit CSS ändern. Es gibt Bestimmungen, um die Einreichung und den Zugang der Formulare zu kontrollieren. Dieser kostenlose HTML -Formularhersteller ist jedoch in JavaScript geschrieben und der gesamte Quellcode ist unter [Github] [7] verfügbar.
Form.IO bietet eine breite Funktionsweise. Die wichtigsten Funktionen sind unten aufgeführt.
  * Einreichung von E -Mail -Formular
  * Datenmanagement
  * OAuth -Anbieter
  * Einbettbare Formen
  * Layout freundlich

## Wie richte ich Form.io auf Localhost ein? {#LocalHost}
In diesem Abschnitt des ** Form Builder Tutorial ** werden wir sehen, wie sie Form.io auf Localhost einrichten. Es ist einfach eingerichtet, da es umfassende Dokumentation zu Bereitstellungen und Entwicklung bietet.
Bevor Sie weiter gehen, stellen Sie sicher, dass Sie die folgenden Voraussetzungen installiert haben.
  * Git
  * Nodejs
  * MongoDB
Sobald die oben genannten Voraussetzungen installiert sind, öffnen Sie den Terminal die folgenden Befehle:
```
mkdir formio<br>cd formio
```
Führen Sie nun den folgenden Befehl aus, um den Quellcode dieser Anwendung zu klonen:
```
git clone https://github.com/formio/formio.git
```
Führen Sie auf einem erfolgreichen Klon die folgenden Befehle aus, um die Abhängigkeiten zu installieren:
```
cd formio <br>npm install
```
Führen Sie danach die Anwendung mit dem folgenden Befehl aus:
```
npm start 
```
Dieser Befehl zeigt die folgende Ausgabe mit einigen Benutzereingaben an:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Form Builder Tutorial">}}

Sie können auf die Anwendung im Browser unter der folgenden Adresse zugreifen.
```
http://localhost:3001 
```
Es wird die Anmeldeseite geöffnet. Sie können sich mit den Anmeldeinformationen anmelden, die Sie während des Installationsprozesses eingegeben haben.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap Form Creator">}}


## Wie funktioniert Form.io? {#arbeiten}
Dieses Segment beschreibt den Arbeitsmechanismus von [Form.io] [1]. Das gesamte Ökosystem dieses Formulardesigners basiert auf Komponenten und Entwicklerfreundlichkeit. Es ist erweiterbar und bietet eine erholsame Schnittstelle für Apps von Drittanbietern. Lassen Sie uns also sehen, wie Sie Formulare in diesem ** Formbuilder ** erstellen.
Nach dem Anmeldung landen Sie auf der folgenden Seite.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Drag & Drop HTML Form Builder">}}

Klicken Sie nun auf die Schaltfläche „Neues Formular“ und erstellen Sie das erste Formular. Die folgende Seite wird angezeigt. Sie können sehen, dass auf der linken Seite ein Panel vorhanden ist, das das HTML-Element für die Formulare enthält. Es enthält die vier Abschnitte wie „Grundkomponenten“, „spezielle Komponenten“ und mehr.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="HTML Form Creator">}}

Sie können den Formularnamen zusammen mit anderen Attributen festlegen. Wenn Sie nun ein Formularelement von der linken Seite auswählen und in die Mitte fallen lassen, sehen Sie das folgende Dialogfeld.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap Form Creator">}}

Sie können sehen, dass Sie das Formthema, die Validierung und andere Änderungen ändern können. Sobald Sie Ihr Formular erstellt haben, klicken Sie auf die Schaltfläche „Erstellen“ und Sie werden auf dem erzeugten Formular landen.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Drag & Drop HTML Form Builder">}}

Das generierte Formular verfügt über verschiedene Optionen, bei denen Sie das Formular bearbeiten und die eingereichten Daten anzeigen können. In der Registerkarte "Formulionen" können Sie die Vor- oder Post -Einreichungshaken wie E -Mail, Webhook und mehr festlegen. Vor allem jede generierte Form enthält eine API und Benutzer können darauf zugreifen, indem sie die Formular -ID übergeben.

## Schlussfolgerung {#Conclusion}
Dies ist das Ende dieses Formularbuilder -Tutorials. Ich hoffe, Sie haben von diesem Schöpfer des Bootstrap -Formulars über seine Funktionen, Bereitstellungen und Nutzung erfahren. Darüber hinaus gibt es viele Open -Source -Formbauer, die eine breite Palette von Funktionen bieten. Es ist jedoch sehr wichtig, das beste Produkt auszuwählen, das Ihre Geschäftsanforderungen erfüllt. In diesem Blog -Beitrag haben wir daher festgestellt, dass Form.io Anpassungen zu Funktionen, Layout und Stil bietet. Sie können Mehrzweckformulare generieren, die Sie auf Ihren Live-Websites hosten können. Tatsächlich können Sie Daten in Ihrer eigenen Datenbank oder in jeder anderen Speicheroption gut organisiert sammeln.
Schließlich befindet sich [** Containerize.com **] [8] in einem konsistenten Prozess, Artikel zu weiteren Open -Source -Themen und -produkten zu schreiben. Bitte bleiben Sie mit dieser Kategorie [9] [9] in Kontakt, um regelmäßige Aktualisierungen zu erzielen.

## Erkunden
  *** [Form.io] [1] **
  *** [Orbeon] [10] **
  *** [ohmyform] [11] **
  *** [Webiny] [12] **
  *** [formtools] [13] **
  *** [FormBuilder] [14] **
  *** [Alpaka Formen] [15] **
  *[** Geschäftsvorgänge automatisieren mit kostenloser und Open -Source -Software **] [16]
  *[** Top 5 Open Source Online -Formularbauer im Jahr 2020 **] [2]
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
