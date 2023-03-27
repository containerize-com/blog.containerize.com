---
title: "Was ist Multitenancy? | Warum ein Multi-Mieter-Ansatz?" 
seoTitle: "Was ist Multitenancy? | Warum ein Multi-Mieter-Ansatz?" 
description: "Was ist Multitenancy? Folgen Sie diesem Blog-Beitrag, um das tatsächliche Konzept für Multi-Messen zu erfahren und skalierbare Multi-Mandanten-Anwendungen aufzubauen." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Entwerfen Sie eine Multi-Mandanten-Anwendungsarchitektur und erfüllen Sie die Anforderungen Ihres Benutzers effizient. Lassen Sie uns untersuchen, wie mit Multitenancy Sie skalierbare Software erstellen können." 
url: /de/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Entwerfen Sie eine Multi-Mandanten-Anwendungsarchitektur und erfüllen Sie die Anforderungen Ihres Benutzers effizient. Lassen Sie uns untersuchen, wie mit Multitenancy Sie skalierbare Software erstellen können.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Überblick
Willkommen zu einem anderen Blog -Beitrag in der Kategorie von [Programmierung][1]. Wir werden eine Multi-Mieter-Anwendungsarchitektur diskutieren. Tatsächlich hat [Containerize.com][2] eine breite Palette von Multi-Tenant-Apps in seinem Open-Source-Produktstapel. Die Open-Source-Multi-Mieter-Anwendungen umfassen [Form.io][3], [Botpress][4] und mehr. Darüber hinaus gibt es eine vollständige [Dokumentation][5] in Bezug auf die Architektur, Bereitstellung, Entwicklung und Verwendung dieser Open-Source-Software. Der Grund für das Schreiben dieses Artikels besteht darin, das Konzept für Multi-Tenancy in der Softwareentwicklung zu verstehen. Lassen Sie uns also herausfinden, was Multitenancy ist?
Die folgenden Punkte werden in diesem Beitrag erörtert:
  * [Was ist Multitenancy? Multi-Tenant gegen Single-Tenant][6]
  * [Arten von Anwendungsarchitekturen mit mehreren Mietern][7]
  * [Geschäftsvorteile der Multi-Mieter-App][8]
  * [Nachteile in Multi-Messen][9]

## Was ist Multitenancy? Multi-Tenant gegen Single-Tenant {#What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant}

Multitenancy bezieht sich auf eine einzelne Serverinstanz, die mehrere vor allem bekannte Mieter bedient. Immer wenn Sie auf eine Multi-Mandanten-Software stoßen, teilen Sie Ihrem Gehirn nur mit, dass diese Software eine einzelne Instanz eines gemeinsam genutzten Servers ausführt und mehrere Mieter (Clients) mit verschiedenen Brandings mit dieser Instanz verbunden sind.
So serviert Software, die für eine Universität erstellt wurde, verschiedene Abteilungen mit unterschiedlichen Front-End-Marken und Programmdaten. Grundsätzlich gibt es eine einzelne Instanz des Servers, das alle Mieter ausgeführt und bedient. Darüber hinaus gibt es bei allen Mietern Datentrennung und Datenschutz. Darüber hinaus hat jeder Mieter seine eigene Geschäftslogik und holt seine Daten an einem einzigen, aber privaten/isolierten Ort ab.

{{< figure align=center src="images/multi-tenant-1.png" alt="Multi-Mieter-Architektur">}}

Schauen wir uns nun einen kurzen Blick auf die Single-Mieter-Architektur an. In der Einzelmietarchitektur gibt es eine Serverinstanz pro Mieter. Nehmen wir erneut ein Beispiel für Universitätssoftware. Der Single-Tenant-Ansatz bezieht sich auf eine Serverinstanz pro Abteilung und die Anzahl der Instanzen hängt von der Anzahl der Abteilungen (Mieter) ab.

{{< figure align=center src="images/single-tenant-2.png" alt="Einzelmietarchitektur">}}


## Arten von Multi-Mieter-Anwendungsarchitektur {#Types-of-Multi-Tenant-Application-Architecture}

Bisher haben Sie ein Verständnis für Multi-Messen und jetzt werden wir seine verschiedenen Typen durchlaufen.
 **Eine Datenbank-eine App-Instanz** : Dieser Ansatz ist sehr beliebt und wurde häufig zum Erstellen von Multi-Mandanten-Apps verwendet. Gemäß diesem Ansatz wird eine Anwendungsinstanz mit einer einzelnen Datenbank ausgeführt. Darüber hinaus gibt es ein gemeinsames Schema und die Daten des Mieters werden an einem einzigen Ort gegen ihre eindeutige ID gespeichert.
 **Multiple Datenbank-Eine App-Instanz:**  In dieser Multi-Mieter-Anwendungsarchitektur wird nur eine Instanz der Anwendung mit mehreren Datenbanken ausgeführt. Jeder Mieter hat ein eigenes Datenbankschema, bei dem alle Informationen pro Mieter separat gespeichert werden.
 **Mehrere Datenbank - Mehrere App -Instanzen** : Der dritte Ansatz bezieht sich auf das Ausführen mehrerer Serverinstanzen zusammen mit mehreren Datenbanken. Es gibt nichts geteilt und jeder Mieter hat eine vollständige Isolation und es gibt keine Abhängigkeit von den Mietern.

## Geschäftsvorteile der Multi-Mieter-App {#Business-Benefits-of-Multi-Tenant-App}

In diesem Abschnitt werden wir einige herausragende Vorteile der Entscheidung für Multitenancy erzielen. Obwohl wir lange über die Vorteile diskutieren können, aber sehen wir die folgenden Punkte:
 **Skalierbarkeit** : Es ist einfach, eine Multi-Mieter-Architektur zu skalieren. Sie können horizontal oder vertikal skalieren, unabhängig von dem von Ihnen gewählten Typ.
 **Kosteneffektiv** : Die Entscheidung für Multitenancy spart Ihre Betriebskosten. Es gibt gemeinsame Ressourcen, daher ist es immer kostengünstig, die Ressourcen zu skalieren.
 **Effizienz und Flexibilität** : In einer Vielzahl von Multitenants erreichen Sie Effizienz in der Entwicklung und Bereitstellung. Sie können beispielsweise ein Skript in einem gemeinsam genutzten Datenbankschema ausführen, um alle Mieter zu aktualisieren.
 **Besseres Ressourcenmanagement** : Hinzufügen und Entfernen von Ressourcen ist unkompliziert. Darüber hinaus bietet diese Architektur eine verbesserte und gut verwaltete Infrastruktur. Darüber hinaus ist jeder Mieter privat und sicher und hat Zugriff auf eine gemeinsam genutzte/nicht stammende Datenbank.

## Nachteile in Multi-Messen {#Drawbacks-in-Multi-Tenancy}

Der Zweck dieses Blog-Beitrags ist es, ein angemessenes Gefühl für die Architektur von Multi-Mieter zu vermitteln.
 **Komplexer Authentifizierungsmechanismus** : Aufgrund der gemeinsamen Art der Ressourcenzuweisung in Multitenancy gibt es strenge Protokolle für Datenzugriffspunkte.
 **Server-Aufschlüsselung:**  Es ist ein wichtiger Punkt zu berücksichtigen, wenn Sie die Multi-Mieter-Anwendungsarchitektur auswählen. Alle Mieter werden nicht funktionsfähig, wenn der Server aus irgendeinem Grund sinkt.
 **Datenschutzrisiko** : In einer Multi-Mieter-Architektur besteht ein hohes Risiko von Sicherheitsverletzungen. Tatsächlich werden die Daten aller Mieter in einer gemeinsam genutzten Datenbank gespeichert, sodass jede Invasion von Drittanbietern zu Datenbeschädigungen oder Diebstahl führen kann.

## Abschluss
Wir beenden diesen Blog -Beitrag hier. Hat dieser Artikel die Antwort auf Ihre Fragen wie  **Was ist Multitenancy**  ? Darüber hinaus haben wir auch**Multi-Mieter-gegen-Single-Tenant-Infrastruktur untersucht. Darüber hinaus hilft Ihnen dieser Leitfaden bei der Entscheidung für die Anwendungsarchitektur mit mehreren Mietern oder einen einzelnen Mieter. Multitenancy ist vor allem die erste Wahl, wenn Sie eine SaaS bauen. Es gibt andere interessante Blog -Beiträge, die Sie möglicherweise im Abschnitt „Siehe auch“ finden, die Ihnen die neuesten Einblicke in die Tech -Welt erhalten.
Schließlich schreibt [Containerize.com][2] ständig Blog-Beiträge zu weiteren Open-Source-Produkten und -Themen. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][10], [LinkedIn][11] und [Twitter][12] folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum][13] informieren.

## FAQs
 **Was ist Multi-Mieter mit Beispiel?** 
Bitte besuchen Sie diesen [Link][6], um zu wissen, was Multitenancy ist. Es gibt Details sowie Beispiele.
 **Was bedeutet Architektur mit mehreren Mietern?** 
A  **Multi-Mieter-Anwendungsarchitektur**  bedeutet, dass eine einzelne Instanz eines Servers mehrere Mieter (Clients) bedient. Bitte navigieren Sie zu diesem [Link][7] für weitere Details.

## Siehe auch
  * [Was ist generative AI | Generative künstliche Intelligenz][14]
  * [So integrieren Sie Chatgpt in Google Sheets][15]
  * [So verwenden Sie Chatgpt in VSCODE | Der VSCODE -Erweiterungscode GPT][16]
  * [Was ist Openai Chatbot GPT-3 | CHATGPT Eine AI -Revolution][17]
  * [Eine Einführung in die künstliche Intelligenz | Was ist ai?][18]



 [1]: https://blog.containerize.com/category/programming/
 [2]: https://www.containerize.com/
 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/live-chat/botpress/
 [5]: https://products.containerize.com/
 [6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
 [7]: #Types-of-Multi-Tenant-Application-Architecture
 [8]: #Business-Benefits-of-Multi-Tenant-App
 [9]: #Drawbacks-in-Multi-Tenancy
 [10]: https://web.facebook.com/containerize
 [11]: https://www.linkedin.com/company/containerize/
 [12]: https://twitter.com/containerize_co
 [13]: https://forum.containerize.com/
 [14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
