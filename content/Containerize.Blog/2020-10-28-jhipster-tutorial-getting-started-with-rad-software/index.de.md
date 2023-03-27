---
title: "Jhipster Tutorial | Erste Schritte mit RAD -Software" 
seoTitle: "Jhipster Tutorial | Erste Schritte mit RAD -Software" 
description: "Ein Schritt-für-Schritt-Jhipster-Tutorial für Anfänger, um loszulegen. Folgen Sie diesem Artikel, um die erste Anwendung mit Open Source Jhipster RAD -Software einzurichten." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Tauchen wir in einen Quellcodegenerator ein. Es bietet optimale Funktionen, um webbasierte reaktionsschnelle Anwendungen mit gut dokumentierter REST-API zu generieren." 
url: /de/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Lassen Sie uns in einen Quellcodegenerator eintauchen. Es bietet optimale Funktionen, um webbasierte reaktionsschnelle Anwendungen mit gut dokumentierter REST-API zu generieren.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Jhipster Tutorial">}}


## Überblick:
Wir haben kürzlich in der aktuellen Zeit einen [Blog -Beitrag][1] über die Bedeutung von [RAD -Software][2] veröffentlicht. Die Technologie entwickelt sich in einem sehr hohen Tempo. Die Geschäftsanforderungen und -bedürfnisse ändern sich von Tag zu Tag. Es gibt ein Rennen, um Lösungen in kürzerer Zeitspanne zu entwickeln. Auf der anderen Seite möchte jedes Unternehmen den Markt erfassen, indem er das Produkt so schnell wie möglich auf den Markt bringt. Daher hat Open Source Community viele Software entwickelt, die auf  **agilen Softwareentwicklung**  basieren. Diese kostenlose Software für schnelle Anwendungsentwicklung erleichtert den Benutzern schnelle Prototyping -Entwicklungsfunktionen. Sie können die erste Version Ihres Produkts erstellen und starten. Daher können Sie weitere Freisetzungen mit der Eingabe des Benutzer -Feedbacks entwickeln. Darüber hinaus sind diese Software so konzipiert, dass sie in jeder Phase des Projekts jede Veränderung absorbieren.
In der Zwischenzeit beschleunigen die Softwareentwicklungsteams ihre Entwicklungsprozesse und sorgen für frühere Lieferungen. Tatsächlich ist es kostengünstig, zeitsparend und bietet Entwicklern und Benutzern zufrieden. Die schnelle Anwendungsentwicklung ist flexibel genug, dass Sie keine geplanten und strengen Fristen benötigen. Sie bauen das auf, was Ihre Endverbraucher brauchen. In diesem JHIPster -Tutorial werden wir uns ansehen, wie [JHIPster][3] eingerichtet wird und unsere erste Anwendung mit ihm erstellt, indem wir die folgenden Punkte abdecken:
  * [Was ist Jhipster und wie installiert man es?][4]
  * [Wie generiere und führe ich eine grundlegende Anwendung aus?][5]
  * [Erforschen Sie das Admin -Dashboard der generierten App][6]
  * [Schlussfolgerung][7]

## Was ist Jhipster und wie installiert man es? {#install}

[Jhipster][3] ist eine Open -Source -RAD -Software, mit der Enterprise -Webanwendungen generiert werden. Dieser Open-Source-Anwendungsbauer bietet ein Java-basierter Spring-Boot-Framework für die serverseitigen und beliebten Front-End-Technologien wie Angular, Vue.js und React.js. Dieser Quellcodegenerator enthält eine robuste Microservice -Architektur mit mehreren Benutzerauthentifizierungsmechanismen wie OAuth.20, JWTS und HTTP -Sitzungsauthentifizierung. Darüber hinaus bietet es eine Online -Version, in der Benutzer alle Funktionen erkunden können. Dieses  **Open -Source -Prototyping -Tool**  ist in JavaScript mit einer kleinen Eingabe von TypeScript geschrieben. Daher ist eine umfassende Dokumentation in Bezug auf Entwicklung und Bereitstellung verfügbar. Entwickler können den Quellcode im [GitHub][8] Repo finden. Es gibt eine vollständige Unterstützung bei der Ausführung von Tests mit beliebten Test -Frameworks wie Gatling und Prospractor. Darüber hinaus ist es robust, sicher, plattformübergreifend und unterstützt Integrationen von Drittanbietern.
In diesem**Jhipster -Tutorial werden wir JHIPster bezüglich des Setups und seiner Verwendung untersuchen. [JHIPSTER][3] ist kostenlos und basiert auf dem Modell der schnellen Anwendungsentwicklung. Es bietet ein Entwickler-freundliches Ökosystem, das vielversprechend ist und leistungsstarke Tools für die Entwicklung von Rapid-Webanwendungen entwickelt.
Sehen wir uns an, wie wir diesen Open Source Application Builder installieren können. Zunächst werden wir die folgenden Voraussetzungen installieren.
  * [Java 11 Jdk][9]
  * [Node.js 10.20.1+][10]
Öffnen Sie nach Abschluss der Installation das Terminal und führen Sie den folgenden Befehl aus.
`npm install -g Generator -Jhipster`
Dieser Befehl kann einige Minuten dauern, und nach erfolgreicher Fertigstellung wird Jhipster auf Ihrem Computer installiert.
Sie können den folgenden Befehl überprüfen, um die Installation zu überprüfen.
`Jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Jhipster -Installation">}}


## Wie generiere und führe ich eine grundlegende Anwendung aus? {#run}

Im Abschnitt dieses Tutorials  **Jhipster**  lernen wir, wie Sie unsere erste Anwendung mit dieser Open -Source -RAD -Software generieren.
Gehen Sie zurück zum Terminalfenster und führen Sie die folgenden Befehle aus:
`mkdir 1Stappcd 1Stapp/`
Führen Sie nach der Erstellung von Verzeichnissen den folgenden folgenden Befehl aus:
`Jhipster`
Dieser Befehl initiiert den Prozess. Beantworten Sie alle Fragen zu technischen Einstellungen für Anwendungen wie Front -End- und Back -End -Technologien, Datenbank, Testen von Framework und mehr, wie Sie im Bild unten sehen können.

{{< figure align=center src="images/qst-1024x474.png" alt="Jhipster Tutorial">}}

Nach der Beantwortung aller Fragen generiert dieser Quellcodegenerator Codedateien in Ihrem Ordner.
Führen Sie nun die generierte Anwendung mit dem folgenden Befehl aus:
`./mvnw`
Hinweis: Dieser Befehl funktioniert, wenn Sie Maven als Build -Automatisierung für das Backend ausgewählt haben.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Jhipster Tutorial">}}

Greifen Sie auf Ihre Anwendung in den Browser unter http: // localhost: 8080/zu.

## Entdecken Sie das Admin -Dashboard der generierten App {#dashboard}

Sobald Sie auf http: // localhost: 8080/in Ihrem Browser getroffen haben, sehen Sie den folgenden Bildschirm.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="Code Generator">}}

Sie können die genannten Anmeldeinformationen verwenden, um sich als Administrator anzumelden. JHIPster bietet zwei Standardbenutzerrollen. Nach einer erfolgreichen Anmeldung haben Sie die folgenden Bestimmungen im Bild.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Open Source RAD -Software">}}

JHIPster bietet eine vollständige Benutzerverwaltung, bei der Sie Ihre Benutzer verwalten können, wie Sie im Bild unten sehen können.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Jhipster User Management">}}

Die Gesundheitsoption gibt Ihnen Informationen zu Ihrem Festplattenraum und Ihrer Datenbank.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Jhipster Tutorial">}}

Im Jhipster Admin -Dashboard gibt es ein komplettes Protokollierungssystem.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Open Source RAD -Software">}}

Admin-Dashboard dieses Open Source Application Builders bietet außerdem REST-Endpunkte für integrierte und benutzerdefinierte Funktionen.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Open Source Jhipster">}}


## Abschluss {#con}

Dies ist das Ende dieses Jhipster -Tutorials. Es gibt viele Open -Source -RAD -Plattformen, die  **Instant App -Entwicklung** bieten. Es gibt eine sehr lebendige Gemeinschaft, die immer lebendig ist, um auf die Probleme und ihre Lösungen zu reagieren. Die RAD -Methodik gewinnt aufgrund vieler Faktoren Ruhm. Erstens ist es nicht erforderlich, die Anforderungen vollständig zu verstehen. Zweitens ist der Endverbraucher während des gesamten Lebenszyklus der Softwareentwicklung beteiligt. Drittens ist der Risikofaktor sehr geringer, da alle Stakeholder an Bord sind. Die RAD-Software ist jedoch anpassungsfähig, Entwicklerfreundlichkeit und flexibel für die Änderungen. Es spart viel Zeit, da die Codegeneratoren eine immense Zeit der Umschreibung der sich wiederholenden Skripte sparen. Dieser **[Jhipster][3] Tutorial**  Artikel hat einige wichtige Erkenntnisse hervorgehoben. Es ist leicht und einfach mit ein paar einfachen Shell -Befehlen eingerichtet.
Sie können diesen Open -Source -Anwendungsbauer noch heute installieren, wenn Sie ernsthaft nach einer Open -Source -Rapid -Anwendungsentwicklungsplattform suchen. Schließlich ist [containerize.com][11] bereit, seine Tutorialbasis mit einigen interessanteren Tutorials zu verbessern. Bitte bleiben Sie mit dieser Kategorie [Rapid Anwendungsentwicklung][2] in Verbindung, um regelmäßige Aktualisierungen zu erzielen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Kuba -Plattform][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [li3][14]
  * [Apache ISIS][15]
  * [Top 5 Free Rapid Application Development Software im Jahr 2021][16]
  * [Rapid Application Development Software für Business | Rad][17]
  * [Dinge zu überprüfen, bevor die Open -Source -Software im Jahr 2021 entscheidet][18]



 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
