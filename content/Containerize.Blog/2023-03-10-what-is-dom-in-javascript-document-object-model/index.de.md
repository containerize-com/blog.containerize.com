---
title: "Was ist DOM in JavaScript? | Dokumentobjektmodell" 
seoTitle: "Was ist DOM in JavaScript?" 
description: "Was ist DOM in JavaScript? Dieser Leitfaden demonstriert das Dokumentobjektmodell, die Eigenschaften von DOM, die DOM -Ebenen und den Zugriff auf DOM -Elemente." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Was ist DOM in JavaScript? Dieser Leitfaden demonstriert das Dokumentobjektmodell, die Eigenschaften von DOM, die DOM -Ebenen und den Zugriff auf DOM -Elemente." 
url: /de/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Die Darstellung eines HTML -Dokuments in einem Webbrowser wird als HTML -DOM -Baum behandelt. Es ist eine Reihe von Objekten und definiert die Struktur einer Webseite.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Was ist DOM in JavaScript??">}}


## Überblick
Willkommen zu einem weiteren aufregenden Blog -Beitrag in der Serie von [JavaScript -Programmierung][1]. In diesem Artikel werden wir ein sehr grundlegendes, aber wesentliches Konzept der Webentwicklung ansprechen. Ja, wir werden das Dokumentobjektmodell in JavaScript abdecken. In der Vergangenheit haben wir JavaScript -Tutorials veröffentlicht, die für die Entwicklung von JavaScript -Sprache obligatorisch sind. Daher empfehlen wir Ihnen, diesen Blog -Beitrag gründlich zu lesen, damit Sie nichts mit diesem wichtigen Konzept verpassen. Beginnen wir diese Anleitung und finden Sie heraus**Was ist DOM in JavaScript**, DOM -Eigenschaften und wie Sie programmatisch damit interagieren können.
Wir werden die folgenden Themen in diesem JavaScript -Handbuch behandeln:
***[Was ist Dokumentobjektmodell (DOM)?][2]**
***[DOM -Ebene][3]**
***[Was sind DOM -Eigenschaften und wie kann man darauf zugreifen?][4]**

## Was ist Dokumentobjektmodell (DOM)? {#What-is-dokument-Object-Model}}
Dom steht für?**Dokumentobjektmodell (DOM)**ist die Darstellung einer Webseite in einem Webbrowser. Die hierarchische Darstellung der Elemente eines HTML -Dokuments in einem Browser wird einfach als Dokumentobjektmodell bezeichnet. Es wird in einer Baumform gebildet, die tatsächlich vom Webbrowser generiert wird. Es besteht aus verschiedenen Knoten, die miteinander verbunden sind und eine Baumform bilden. Darüber hinaus haben DOM -Elemente Attribute und Ereignisse an sie.
Tatsächlich ist DOM eine Programmierschnittstelle, die die logische Struktur einer Webseite formuliert und den Weg zum Zugriff auf Seitenelemente diktiert. Grundsätzlich erkennt JavaScript keine HTML -Tags wie Titel, H1 und usw. Daher wird DOM erstellt, sobald ein HTML -Dokument in einen Webbrowser geladen wurde, was es dann ermöglicht, JavaScript die Dokumentelemente zu verstehen.

## DOM Levels {#DOM-Levels}
In diesem Abschnitt wird die verschiedenen DOM -Ebenen demonstriert. Zuerst gibt es ein Fensterobjekt in einem Browser, das immer oben ist, und dann gibt es einen Dokumentknoten. Schauen wir uns das Bild unten an:

{{< figure align=center src="images/DOM.png" alt="DOM -Ebenen">}}

Nun, Sie können die DOM -Elemente im obigen Bild sehen. Fenster und Dokument sind die obersten Browserobjekte und dann haben wir das HTML-Element als Stamm. Wenn wir weitermachen, haben wir die Kopf- und Körperknoten, der Titelknoten gehört zum Kopfknoten und der Körperknoten enthält alle im Webbrowser gerendeten und sichtbaren Knoten. Darüber hinaus enthalten Körperelemente Attribute, die wir im Bild wie das Anker -Tag mit "href" -attribut sehen können. In ähnlicher Weise enthalten andere DOM -Knoten verschiedene Attribute wie IMG, Meta und mehr.

## Was sind DOM -Eigenschaften und wie können Sie darauf zugreifen? {#What-Are-Dom-Properties-and-How-to-Access-tthem}
Bisher haben wir eine Antwort auf das, was DOM in JavaScript und DOM -Level ist, ausgedacht und auch DOM -Knoten durchlaufen. In diesem Abschnitt werden wir DOM -Eigenschaften durchlaufen und sehen, wie wir mit ihnen interagieren können. Jedes DOM -Element hat einen mit ihm verknüpften Wert wie "P" -Tag hat eine Texteigenschaft, das IMG -Tag hat das Bild und so weiter. JavaScript -Methoden werden verwendet, um auf die Werte von Knoten zuzugreifen. Darüber hinaus können Sie Ereignishörer zu den DOM -Elementen hinzufügen/entfernen.
Sie finden die folgenden**DOM -Eigenschaften**:
**Innerhtml**: Diese Eigenschaft wird zum Festlegen oder Abholen des HTML -Inhalts eines DOM -Knotens verwendet.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnerText**: Verwenden Sie diese DOM -Eigenschaft, um auf den Textinhalt eines HTML -Elements zuzugreifen oder festzulegen.
```
let textualContent = document.getElementById("customID").innerText;
```
**Parentelement**: Sie können diese Eigenschaft verwenden, um auf den übergeordneten Knoten des Elements zuzugreifen.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Stil**: Aktualisieren Sie das Stilattribut eines Elements.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Titel**: Verwenden Sie diese Eigenschaft, um das Titelelement von DOM zu aktualisieren.
```
document.getElementById("customID").title= "this is a web page";
```
 Im Folgenden sind einige der Methoden aufgeführt, mit denen wir mit JavaScript DOM interagieren können:
**addEventListener ()**: Diese DOM -Methode wird verwendet, um einen Ereignishandler an ein Element anzuhängen.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAtTribute ()**: Diese DOM -Methode wird verwendet, um einen Ereignishandler an ein Element anzuhängen.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: Methode, um ein bestimmtes Element mit der angegebenen "ID" zu erhalten.
```
let element = document.getElementById("myID");
```
**querySelector ()**: Verwenden Sie diese Methode, um das erste untergeordnete Element zu erhalten, das mit einem CSS -Selektor übereinstimmt.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: Mit dieser Methode können Sie ein Element in eine Zeichenfolge umwandeln.
Ebenso gibt es viele andere Methoden und Eigenschaften, die Sie untersuchen können.

## Abschluss
Wir beenden dieses Javasxcript -Tutorial hier mit der Hoffnung, dass Sie ein gutes Verständnis für**Was ist DOM in JavaScript**. Wir haben auch**DOM, DOM -Ebenen, HTML -DOM -Baum und DOM -Eigenschaften**durchgesehen. Dieser Blog -Beitrag ist sehr wichtig für Neulinge, die sich stark an Javascrit -Konzepten auswirken möchten. Darüber hinaus gibt es andere relevante Artikel, die Sie im Abschnitt "Siehe auch" finden können.

## Verbinde dich mit uns
Schließlich bietet [Containerize.com][5] laufende JavaScript -Tutorials zu verschiedenen aufregenden Themen. Sie können in der Schleife bleiben, indem Sie uns auf unseren Social -Media -Plattformen, einschließlich [Facebook][6], [LinkedIn][7] und [Twitter][8], folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum][9] informieren.

## FAQs
**Was wird DOM in JavaScript verwendet?**
Sie können diesen [Link][2] besuchen, um eine detaillierte Antwort auf diese Frage zu erhalten.

## Siehe auch
  * [Was ist vielversprechend in JavaScript? | JavaScript Tutorial][10]
  * [Was ist serverloses Computer? | Serverlose Architektur][11]
  * [Was ist Multitenancy? | Warum ein Multi-Mieter-Ansatz?][12]
  * [Was ist generative AI | Generative künstliche Intelligenz][13]
  * [Was ist Async in JavaScript? | Ein JavaScript -Handbuch][14]
  * [So verwenden Sie Chatgpt in VSCODE | Der VSCODE -Erweiterungscode GPT][15]
  * [Was ist Openai Chatbot GPT-3 | CHATGPT Eine AI -Revolution][16]
  * [Eine Einführung in die künstliche Intelligenz | Was ist ai?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
