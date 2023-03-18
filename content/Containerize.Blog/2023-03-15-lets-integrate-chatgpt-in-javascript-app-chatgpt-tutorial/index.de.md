---
title: "Lassen Sie uns Chatgpt in die JavaScript -App | integrieren | Chatgpt -Tutorial" 
seoTitle: "Integrieren Sie ChatGPT in die JavaScript -App" 
description: "Führen Sie einfach \"NPM I CHATGPT\" aus und verwenden Sie Openai Chatbot in Ihrer Anwendung node.js. Folgen Sie dieser Anleitung, um zu erfahren, wie Sie ChatGPT in die JavaScript -App integrieren." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Führen Sie einfach \"NPM I CHATGPT\" aus und verwenden Sie Openai Chatbot in Ihrer Anwendung node.js. Folgen Sie dieser Anleitung, um zu erfahren, wie Sie ChatGPT in die JavaScript -App integrieren." 
url: /de/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## Optimieren Sie Ihre Business-Software, indem Sie einen GPT-3-basierten viralen Chatbot integrieren. In diesem ChatGPT -Tutorial wird die Integrationsschritte und das Code -Snippet gezeigt.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Integrieren Sie ChatGPT in die JavaScript -App">}}


## Überblick
Hallo Leser! Vielen Dank für Ihre überwältigende Antwort auf die Blog -Beiträge, die wir in [CHATGPT] [1] Integrationen veröffentlicht haben. Wir sind hier mit einem weiteren nützlichen**CHATGPT -Tutorial**nach Ihrem Interesse. Darüber hinaus werden wir in einer Schleife sein, um Artikel zu veröffentlichen, die für Ihre Akademiker und Ihre Karriere von Vorteil sind. Wir haben jedoch eine [Serie] [20] von JavaScript -Tutorials gestartet, daher ist es der beste Zeitpunkt, um einen Leitfaden zu schreiben, der zeigt, wie Chatgpt in JavaScript AQPP**programmatisch integriert wird. Darüber hinaus werden wir den Code-Snippet schreiben, um diese GPT-3-basierte**virale Chatbot**-Funktionalität zu erstellen. Zu diesem Zweck ermöglichen wir die ChatGPT -Funktionalität in einer Node.js -App. Daher ist ein grundlegendes Maß an Vorkenntnis von Node.js ein Plus, wenn Sie diesen Leitfaden durchlaufen.
Die folgenden Abschnitte werden in diesem ChatGPT -Tutorial behandelt:
***[Voraussetzungen - Chatgpt JavaScript -Wrapper] [2]**
***[CHATGPT -Integration mit node.js Anwendung] [3]**

## Voraussetzungen-Chatgpt JavaScript-Wrapper {#Voraussetzungen --- Chatgpt-Javascript-Wrapper-}
Dieser Abschnitt zeigt die Anforderungen, die erforderlich sind, um die ChatGPT-Integration in eine node.js-basierte Anwendung zu ermöglichen. Die Anforderungen sind unkompliziert und einfach auf Ihrem System zu installieren.
Im Folgenden finden Sie die Voraussetzungen, um diese Chatgpt-JavaScript-Integration zu üben:

 * [Nodejs4](>= 18)

 * [NPM5](>=9)
Sobald die oben genannten Voraussetzungen installiert sind, besteht der nächste Schritt darin, einen OpenAI -API -Schlüssel zu erhalten. Dieser Schlüssel wird verwendet, um API -Anfragen programmgesteuert an das ChatGPT zu stellen. Bitte besuchen Sie diesen [Link] [6], um zu erfahren, wie Sie den OpenAI -API -Schlüssel erhalten, falls Sie das Verfahren nicht kennen.
Bitte halten Sie Ihren API -Schlüssel an einem sicheren Ort und das ist alles für die Anforderungensphase.

## CHATGPT-Integration mit node.js Anwendung {#Chatgpt-Integration-with-node.js-Application}
Jetzt sind wir alle auf**in die JavaScript -App integrieren.**Öffnen Sie zuerst den Terminal und führen Sie den folgenden Befehl aus:
```
npm i chatgpt
```
Befolgen Sie nach erfolgreichem Ausführen die folgenden Schritte und den Code-Snippet, um eine Anfrage an das GPT-3-Modell zu stellen, um mit ChatGPT programmgesteuert zu interagieren:
 * Importieren Sie den Chatgptapi.
 * Initialisieren Sie den Konstruktor mit Ihrem OpenAI -API -Schlüssel.
 * Rufen Sie die SendMessage-Methode auf, um eine Nachricht an das GPT-3-Modell zu senden und die Antwort zu empfangen.
 * Zeigen Sie die Antwort an.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Kopieren Sie den obigen Code -Snippet in Ihre Hauptserverdatei und führen Sie den folgenden Befehl in Ihr Terminal aus:
```
node index.js
```
* * HINWEIS**: Bitte hinzufügen ("Typ": "Modul",) in Ihre Paket.json -Datei, falls Sie einen Fehler erhalten "keine Importanweisung außerhalb eines Moduls" verwenden kann ".
Sie können die Ausgabe im Bild unten sehen:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="Chatgpt -Tutorial">}}

Mit diesem Chatgpt-JavaScript-Wrapper können Sie außerdem Konversationen verfolgen und Follow-up-Nachrichten senden. Das einzige, was Sie tun müssen, ist, "privateMessageId" in der Anforderungsbehörde zu übergeben, wie im Code -Snippet unten gezeigt:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Ebenso können Sie viele andere angebotene Methoden untersuchen [hier] [7]. Diese OpenAI-Chatbot-Integration kann Ihrer Anwendung auf Unternehmensebene einen Wettbewerbsvorteil verleihen.

## Abschluss
Dieser Punkt bringt uns zum Ende dieses**CHATGPT -Tutorials**. Wir hoffen, Sie haben gelernt, wie man Chatgpt in JavaScript App**programmatisch integriert. Darüber hinaus haben Sie den Arbeitscode -Snippet, den Sie auf Ihrem lokalen Computer testen können. Dieser Blog -Beitrag ist ein Kapital, wenn Sie in Ihrer Node.js -Anwendung**Chatgpt -Integration**gedeihen.

## Verbinde dich mit uns
Schließlich schreibt [containerize.com] [8] kontinuierlich Blog -Beiträge zu verschiedenen Themen. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook] [9], [LinkedIn] [10] und [Twitter] [11] folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum] [12] informieren.

## FAQs
* * Wie kann ich Chatgpt in JavaScript integrieren?**
Bitte folgen Sie diesem ChatGPT [Tutorial] [2], um die Schritte und den Code -Snippet zu erlernen, um ChatGPT programmatisch in die JavaScript -App zu integrieren.

## Siehe auch
  * [Eine Einführung in die künstliche Intelligenz | Was ist ai?] [13]
  * [So integrieren Sie Chatgpt in Google Sheets] [14]
  * [So verwenden Sie Chatgpt in VSCODE | Der VSCODE -Erweiterungscode GPT] [15]
  * [Was ist Openai Chatbot GPT-3 | CHATGPT Eine AI -Revolution] [16]
  * [Google docs Integration in Chatgpt | OpenAI GPT-3] [17]
  * [Was sind die Top 5 Open-Source-AI-Frameworks] [18]
  * [Was ist generative AI | Generative künstliche Intelligenz] [19]
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
