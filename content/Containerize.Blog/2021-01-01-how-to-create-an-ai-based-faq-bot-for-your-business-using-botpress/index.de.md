---
title: "So erstellen Sie einen KI-basierten FAQ-Bot für Ihr Unternehmen mit BotPress" 
seoTitle: "So erstellen Sie einen KI-basierten FAQ-Bot für Ihr Unternehmen mit BotPress" 
description: "In diesem Blog-Beitrag lernen wir, wie Sie Ihre Kundenanfragen mithilfe eines KI-basierten FAQ-Bots mit BotPress auf Ihrer Website automatisieren." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Unternehmen benötigen bessere Kundensupport -Plattformen, um ihre Abfragen effizient zu lösen. In diesem Tutorial lernen wir, wie Sie mit BotPress einen AI-basierten FAQ-Bot erstellen" 
url: /de/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Unternehmen benötigen bessere Kundensupport -Plattformen, um ihre Abfragen effizient zu beheben. In diesem Tutorial lernen wir, wie Sie einen AI-basierten FAQ-Bot mit BotPress erstellen

{{< figure align=center src="images/botpress-banner.png" alt="FAQ Bot für Ihr Unternehmen mit BotPress">}}

Die FAQ -Automatisierung besteht darin, die Erfahrung Ihres Kunden online zu verbessern, indem Sie Chatbots verwenden, um häufig gestellte Fragen zu beantworten. Angesichts der Fortschritte in der künstlichen Intelligenz und des maschinellen Lernens hat die Nachfrage nach KI-basierten Konversations-Chatbots viel Popularität und Nachfrage gewonnen. Und dies liegt hauptsächlich daran, dass das gesamte Geschäft sein Kundenerlebnis auch dann verbessern möchte, wenn das Unternehmen offline ist. Konversations-Chatbots haben dies den Unternehmen ermöglicht, ihren Kunden die gewünschten Stillgänge mit hohem Top-Support zu bieten. Der Zweck dieses Blog-Beitrags ist es, Ihnen bei der Einrichtung eines AI-basierten FAQ-Bots mit BotPress bei der Einrichtung eines AI-basierten FAQ-Bots zu helfen.
In diesem Artikel erfahren wir das NLU -Modul des BotPress und darüber, wie das Verständnis / die Verarbeitung des natürlichen Sprachens funktioniert und Unternehmen helfen kann, ein hohes Kundenzufriedenheit zu erreichen. Lass uns anfangen!
* **[Was ist natürliche Sprachverarbeitung][1]** 
* [ **Ihren Anwendungsfall bestimmen** ][2]
* [ **BotPress installieren** ][3]
* [ **Erstellen Sie einen neuen Bot** ][4]
* [ **trainieren Sie Ihren Q & A Bot** ][5]
* [ **Schlussfolgerung** ][6]

## Was ist natürliche Sprachverarbeitung {#nlu}

Natürliche Sprachverarbeitung (NLP) ist ein Zweig der künstlichen Intelligenz, der Computern hilft, menschliche Sprache zu verstehen, zu interpretieren und zu manipulieren. NLP hilft Computern, mit Menschen in ihrer eigenen Sprache zu kommunizieren. Und ermöglicht es Computern, einen Text zu lesen, Sprache zu hören, ihn zu interpretieren, das Gefühl zu messen.
Die grundlegende Aufgabe von NLP umfasst Tokenisierung und Analyse, Stamm, Teil der Sprache, Spracherkennung und Identifizierung semantischer Beziehungen.
NLU ist das Modul von BotPress, das jede eingehende Nachricht verarbeitet und eine Absichtsklassifizierung, Sprachidentifizierung, Entitätsextraktion und Slot -Tagging durchführt.

## Bestimmen Sie Ihren Anwendungsfall {#case}

Wenn Sie einen FAQ -AI -Chatbot erstellen möchten, müssen Sie einen Anwendungsfall für Ihr Unternehmen haben. Für dieses Tutorial möchten wir, dass unsere Benutzer zufällige Frage in Bezug auf die Preisgestaltung unseres Produkts und unseres Geschäftszeitpunkts stellen.

## BotPress installieren {#install}

Um BotPress zu installieren, besuchen Sie ihre [Website][7], klicken Sie auf "Kostenlos herunterladen" und wählen Sie Ihre Plattform aus. Für dieses Tutorial verwende ich die Mac -Version. Sobald der Download abgeschlossen ist, können Sie die ZIP -Datei extrahieren und den folgenden Befehl in Ihrem Terminal ausführen, indem Sie in den richtigen Ordner gehen.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="BotPress Start">}}


## Erstellen Sie einen neuen Bot {#create}

Jetzt möchten wir unseren ersten Bot erstellen, indem wir auf **Bot erstellen**und dann **neuer Bot** auswählen. Ich rufe unseren Bot den FAQ -Bot an und dann werde ich als Bot -Vorlage **leerer Bot** wählen, bevor ich auf**Bot erstellen** .

{{< figure align=center src="images/create-bot.gif" alt="Erstellen Sie New-Bot">}}

Jetzt werden wir diesen Bot in BotPress Studio Editor bearbeiten.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Botpress bearbeiten in Studio">}}

Jetzt, im Studio, haben Sie eine Reihe von Menüs entlang der linken Seitenleiste. Aus Einfachheit halber halten wir uns jedoch nur an den Q & A -Abschnitt.
Klicken Sie auf das Symbol „Q & A“ und fügen Sie mögliche / häufig gestellte Fragen und deren entsprechende Antworten hinzu.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress Q & A">}}


## Trainieren Sie Ihren FAQ -Bot {#train}

Sobald Sie jetzt fertig sind, müssen Sie Ihren FAQ -Bot trainieren, indem Sie auf die Schaltfläche "Chatbot" in der unteren rechten Ecke des Q & A -Abschnitts klicken.

{{< figure align=center src="images/train-bot.gif" alt="Botpress Zug Bot">}}

Nach dem Training können Sie Ihren FAQ-Bot mithilfe des integrierten Emulator-Tools testen.

{{< figure align=center src="images/test-faq-bot.gif" alt="Testen Sie Ihren FAQ -Bot">}}

Jetzt, da Sie Ihren FAQ -Bot bereit haben, können Sie diesen Bot auf Ihrer Website bereitstellen, indem Sie dem [offiziellen Einbettung][8] -Reitbuch von BotPress folgen.

## Abschluss {#conclusion}

In diesem Blog -Beitrag haben wir natürliche Sprachverarbeitung gelernt und verstehen. Wir werden auch mit dem Bot-Erstellungsprozess praktisch. Wir haben einen einfachen FAQ -Bot geschult, der Ihren Kunden über Ihre Geschäftszeiten und Zahlungspläne informiert wird. Der Zweck des Tutorials war es, Anfängern zu helfen, schnell mit einem AI-basierten FAQ-Bot mit BotPress zu beginnen.



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
