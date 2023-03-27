---
title: "Erste Schritte mit einem HTML -Formulargenerator | Formbuilder" 
seoTitle: "Erste Schritte mit einem HTML -Formulargenerator | Formbuilder" 
description: "FormBuilder ist ein kostenloser und mehrsprachiger HTML -Formulargenerator mit Drag & Drop -Benutzeroberfläche. Folgen Sie diesem Tutorial, um zu erfahren, wie Sie es auf Localhost einrichten." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript Powered Open Source Formeditor mit mehreren Konfigurationen, konfigurierbaren Formularvorlagen und benutzerdefinierten Steuerelementen. Lassen Sie uns lernen, wie Sie Formenbauer einrichten." 
url: /de/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript Powered Open Source -Formulareditor mit mehreren Konfigurationen, konfigurierbaren Formularvorlagen und benutzerdefinierten Steuerelementen. Lassen Sie uns lernen, wie Sie Formenbauer einrichten.

{{< figure align=center src="images/formbuilder.png" alt="HTML Form Generator">}}


## **Überblick** 
Wir haben kürzlich einige Artikel zu Themen wie [wie man Bootstrap Form Creator Form.io auf Localhost][1] und [Top 5 Open -Source -Online -Formularbauer im Jahr 2020][2] einrichten. Der erste Blog -Beitrag ist ein Tutorial -Artikel, in dem der Einrichtungsvorgang und die Funktionen eines Bootstrap -Formbuilders [Form.io][3] demonstriert. Der zweite Artikel spricht über die weit verbreiteten Open -Source -Formbauer. Zum aktuellen Zeitpunkt ist die Zwei-Wege-Interaktion das Wichtigste zwischen Dienstleistern und Serviceverbrauchern. Unternehmen erhalten in der Regel ein konsequentes Feedback zu ihren Dienstleistungen und formulieren dann zukünftige Geschäftsstrategien. Formulare sind jedoch die Sammeln und Speichern von Informationen von den Kunden. Unternehmen erstellen eine Reihe von Formen, um Daten über verschiedene laufende Vorgänge zu sammeln, und es gibt viele Arten von Formen, von denen einige einzelne Seiten und einige von ihnen mehrseitige Formulare sind. Einige Unternehmen haben Formulare in ihrem Online -Portal eingebettet oder einige von ihnen verwenden E -Mails oder andere Arten von Medien, um ihre Formulare für die Datenerfassung aufzudecken.
Daher sind viele Open -Source -Formulare und Datenverwaltungssoftware mit reichhaltigen Formbuilder -Funktionen verfügbar. In diesem Artikel werden wir den kostenlosen HTML -Formulargenerator **[Formbuilder][4]** untersuchen, indem wir die folgenden Punkte abdecken.
* **[Was ist FormBuilder?][5]** 
* [ **wie man eingerichtet?** ][6]
* [ **Wie erstelle ich Formulare mit FormBuilder?** ][7]
* **[Fazit][8]** 

## Was ist Formbuilder? {#what}

[Formbuilder][4] ist ein Open -Source -Formulardesigner, mit dem Benutzer interaktive Formulare erstellen können. Es ist sicher, erweiterbar und verfügt über Selbsthostfunktionen. Dieser HTML -Formulargenerator ist mehrsprachig und bietet Unterstützung für mehrere Sprachen. Es gibt eine benutzerfreundliche Benutzeroberfläche, in der Benutzer Formularelemente ziehen können, um die erforderliche Formularvorlage zu formulieren. Darüber hinaus bietet es reichhaltige Steuerelemente und konfigurierbare Formvorlagen. Darüber hinaus können Benutzer in der Benutzeroberfläche mehrere Registerkarten erstellen, um Multi -Seiten -Formulare zu erstellen. Vor allem können Benutzer sich um diesen kostenlosen Formular -Builder neigen, indem sie ihre Plugins entwickeln. Es ist alle Dokumentationen zur Entwicklung und Bereitstellung verfügbar. Es ist in node.js geschrieben und der gesamte Quellcode ist in [Github][9] verfügbar.
Hier sind die oberen Highlights der Form.io.io
  * i18n integriert
  * Multi-Seiten-Formulare
  * Erweiterbar
  * Unterstützung für beliebte JavaScript -Front -End -Frontworks
  * Drag & Drop UI

## Wie stellt man das ein? {#setup}

In diesem Abschnitt des Formular Builder -Tutorials wird angezeigt, wie Sie FormBuilder auf der lokalen Maschine einrichten.
Bevor Sie weiter gehen, stellen Sie sicher, dass Sie die folgenden Voraussetzungen installiert haben.
  * Node.js> = 10.9.0
  * npm
  * Git
Führen Sie nach der Installation der Voraussetzungen den folgenden Befehl aus, um den Quellcode dieser Anwendung zu klonen:
```
git clone https://github.com/kevinchappell/formBuilder
```
Führen Sie als nächstes die folgenden Befehle aus, um die Abhängigkeiten zu installieren:
```
cd form-builder<br>npm install 
```
Danach können Sie die Anwendung starten, indem Sie den folgenden Befehl ausführen:
```
npm start
```
Schließlich öffnet der obige Befehl die Anwendung unter der folgenden Adresse im Browser:
```
http://localhost:8080/
```

## Wie erstelle ich Formulare mit Formbuilder? {#how}

In diesem Abschnitt werden wir die Funktionen dieses HTML -Formulargenerators untersuchen und lernen, wie wir Formulare erstellen können.
Die folgende Benutzeroberfläche wird angezeigt, sobald Sie den Server starten.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="HTML Form Generator">}}

Wenn Sie sich vorwärts bewegen, können Sie die Menüleiste auf der rechten Seite sehen. Es enthält die Formularelemente wie Schaltflächen, Kontrollkästchen, Textfelder, Datenfelder, Header, Absatz und mehr. Sie können diese Elemente jedoch ziehen und in den mittleren Bereich (abfallen) des Bildschirms fallen. In der oberen linken Ecke gibt es eine Option, um die Bootstrap -Version der App zu aktivieren. In der oberen linken Ecke gibt es einen Dropdown, bei dem Benutzer jede verfügbare Sprache auswählen können.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Formeditor">}}

Als nächstes können wir jedes Formularelement in den abstoßbaren Bereich ziehen und fallen lassen. Darüber hinaus können wir die Konfigurationen eines beliebigen Elements bearbeiten, wie im obigen Bild gezeigt. Es gibt eine Option, um eine Kopie des vorhandenen Elements zu erstellen. Wir können die Platzierung der Elemente miteinander ändern.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="HTML Form Generator">}}

Sobald Sie mit dem Formulargebäude fertig sind, können Sie das Formular durch Drücken der Taste „Render“ in der oberen Mitte rendern. Darüber hinaus gibt es verschiedene Formularoptionen, bei denen Benutzer die HTML hinter den Formularen erzeugen können. Es gibt auch andere Optionen, z. B. Benutzerformular laden, Benutzerdaten anzeigen, Benutzerformular rendern und das Benutzerformular löschen. Neben diesen Funktionen gibt es viele Formularaktionen wie „Getfieldtype“, die die registrierten Feldtypen für das Formular zurückgeben. In ähnlicher Weise gibt es viele andere Aktionen wie Daten anzeigen, XML abrufen, Daten festlegen, bearbeiten und einige weitere. Es gibt jedoch viele andere Dinge, die Sie selbst überprüfen können. Da es sich um Open Source handelt, können Sie es gemäß Ihren Anforderungen ändern.

## Abschluss {#Abschluss}

Dies ist das Ende des Blog -Beitrags. Wir hoffen, dass dieses Tutorial Ihnen wirklich helfen wird, wenn Sie einen Open -Source -HTML -Formulargenerator bereitstellen möchten. Dieser Artikel hat viele Aspekte von Formenbuilder behandelt, sodass Sie unter Berücksichtigung Ihrer geschäftlichen Anforderungen problemlos eine Wahl treffen können. Diese kostenlosen Open-Source-Formbauer sind kostengünstig und zeitsparend. Diese kostenlosen Tools bieten nicht nur Funktionen für Formbuilding, sondern bieten auch Formulare und Datenmanagement. Sie können die Formulare mit Webanwendungen von Drittanbietern konfigurieren. Darüber hinaus wird der Aufwand, verschiedene Formen für verschiedene Geschäftsanwendungen zu erstellen, und Unternehmer können mithilfe dieser Open -Source -Formbauer jede Art von Form erstellen. Darüber hinaus stehen diesen Formeditoren Plugins zur Verfügung, die Entwickler gemäß den Anforderungen ändern können. Daher ist es höchste Zeit, solche sich wiederholenden Aufgaben zu automatisieren, indem ein guter kostenloser HTML -Formulargenerator verwendet wird.
Schließlich schreibt [containerize.com][10] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie mit der Kategorie [Formulare][11] in Kontakt, um regelmäßige Nachrichten und Updates zu erhalten.

## Erkunden
* **[Form.io][3]** 
* **[Orbeon][12]** 
* **[ohmyform][13]** 
* **[Webiny][14]** 
* **[formtools][15]** 
* **[FormBuilder][4]** 
* **[Alpaca Formen][16]** 
* [ **So richten Sie Bootstrap Form Creator Form.io auf Localhost** ][1]
* [ **Geschäftsvorgänge automatisieren mit kostenloser und Open -Source -Software** ][17]
* [ **Top 5 Open Source Online -Formularbauer im Jahr 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
