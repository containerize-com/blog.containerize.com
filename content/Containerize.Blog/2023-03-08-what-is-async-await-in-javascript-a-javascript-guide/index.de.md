---
title: "Was ist Async in JavaScript? | Ein JavaScript -Handbuch" 
seoTitle: "Was ist Async in JavaScript?" 
description: "Was ist Async in JavaScript? Async & Aused -Keywords werden verwendet, um asynchrone Operationen besser auszuführen als herkömmliche Versprechen in JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Was ist Async in JavaScript? Async & Aused -Keywords werden verwendet, um asynchrone Operationen besser auszuführen als herkömmliche Versprechen in JavaScript." 
url: /de/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 führte JavaScript Async/Auseait ein, was eine Verpackung um Versprechen darstellt. Async/Warte wird verwendet, um versprochene APIs auf moderne und einfachste Weise zu konsumieren.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Was ist Async in JavaScript??">}}


## Überblick
Wir haben [JavaScript Versprechen][1] in unserem vorherigen Blog -Beitrag behandelt und Sie müssen besuchen, wenn Sie ein klares Verständnis des Konzepts hinter JavaScript -Versprechen erhalten möchten. In dieser Reihe von [JavaScript -Tutorials][2] sind wir hier mit einem weiteren JavaScript -Handbuch, der die modernen Merkmale von JavaScript Async/Awit demonstrieren. Dieser Blog -Beitrag richtet sich an diejenigen, die über JavaScript -Versprechen vorhanden sind. Darüber hinaus werden wir versuchen, in JavaScript**zu decken, was asynchronisiert/wartet, und wenn wir Async/Wartee verwenden müssen. Darüber hinaus werden wir auch mit Async/Auseait Handhabungsfehler abdecken. Lesen Sie also diese**JavaScript async/warten Sie ein Tutorial**, um dieses Konzept zu markieren.
Wir werden die folgenden Abschnitte in diesem JavaScript -Async Aused Tutorial durchlaufen:
* **[Was ist asynchron/wartet in JavaScript | Async wartet Syntax][3]**
* **[Wann verwendet asynchron/wartet?][4]**
* **[Fehlerbehandlung mit Async/Awit][5]**

## Was ist asynchron/wartet in JavaScript | Async wartet Syntax   {#What-is-asyncawait-in-JavaScript-async-Await-Syntax}
ECMAScript 2017 veröffentlichte neue Funktionen von JavaScript und Async/Awit ist eines der am häufigsten verwendeten unter diesen Funktionen. Async/Auseit basiert auf Versprechen und ist tatsächlich eine moderne Art, JavaScript -Versprechen zu bewältigen.
Lassen Sie uns sehen, wie Sie Async/Warted -Schlüsselwörter im JavaScript -Code verwenden:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Nun, das asynchrische Schlüsselwort zu Beginn der Funktion impliziert, dass diese Funktion ein Versprechen zurückgibt. Warten Sie also, dass das Schlüsselwort immer im Körper der asynchronen Funktion verwendet wird, um die Ausführung der Funktion zu pausieren, bis sich das Versprechen auflöst. Das Wichtigste, was Sie hier beachten sollten, ist, dass Sie nicht das Schlüsselwort im Körper einer regulären Funktion verwenden können. Sie können jedoch nur mit asynchronen Funktionen erwarten, die mit dem asynchronen Schlüsselwort deklariert sind.

## Wann asynchronisiert/wartet?   {#Wenn es zu verwenden-asyncawait}
Bisher haben Sie die Antwort auf**Was ist Async in JavaScript**. Da dies nur ein Wrapper um die traditionellen JavaScript -Versprechen ist, nutzen Sie diese neue Art, Versprechungen auf sauberere und lesbare Weise besser zu erstellen und umzugehen. Darüber hinaus können Sie mehrere Versprechen beseitigen. Anschließend () Anrufe mit Async/Assait, die den Quellcode schließlich verwaltbarer und gewaltbarer machen. Das Keyword ist die Anweisung .then () in eine einzelne Zeile zusammenfasst.

## Fehlerbehandlung mit Async/Warte   {#Fehlerhandling mit Asyncawait}
Fehlerbehandlung ist eine kritische Aufgabe, wenn es um Softwareentwicklung auf Unternehmensebene geht. Es gibt mehrere Möglichkeiten, Fehler im Async/Warted -Ansatz zu erfassen.

{{< figure align=center src="images/async-await.png" alt="Versuchen Sie, Async zu fangen, der auf JavaScript warten">}}

**Versuchen Sie, Async zu fangen, wartet auf JavaScript**: Nichts Neues mit diesem Fehlerbehandlungsansatz. Sie können jedoch einen Try/Catch -Block in einer asynchronisierten Funktion verwenden, wie im folgenden Code -Snippet gezeigt:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Mit dem Try/Catch -Block können Sie die Ausnahmen innerhalb des Körpers einer asynchronen Funktion fangen.
Während es einen weiteren Ansatz für den Umgang mit Fehlern gibt, bei denen Sie den Block .Catch () am Ende des Funktionsaufrufs anhängen können. Da Async/Auseait ein Versprechen zurückgibt, fangen Sie die Fehler im Block .Catch () auf.
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Abschluss
Wir beenden dieses**JavaScript Async warten Tutorial**. Ich hoffe, Sie haben ein besseres Verständnis von**Was ist Async in JavaScript**. Darüber hinaus haben wir JavaScript Async Ause Ause Ause Aused Syntax durchlaufen, die den Quellcode weniger komplex machen. Diese JavaScript -Funktion wird aufgrund ihrer reichhaltigen Verwendung und Leistung häufig verwendet. In den kommenden Tagen werden wir weiter über JavaScript -Funktionen und -konzepte schreiben, damit Sie einen starken Befehl über JS -Konzepte erhalten können. Darüber hinaus gibt es einige andere interessante Artikel, die im Abschnitt "Siehe auch" erwähnt werden.

## Verbinde dich mit uns
Schließlich bietet [Containerize.com][6] laufende JavaScript -Tutorials zu verschiedenen aufregenden Themen. Sie können auf dem Laufenden bleiben, indem Sie uns auf unseren Social -Media -Plattformen folgen, einschließlich [Facebook][7], [LinkedIn][8] und [Twitter][9].

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum][10] informieren.

## FAQs
**Was ist Async in JavaScript mit Beispiel?**
Sie können diesen [Link][3] besuchen, um das Konzept von Async zu verstehen.
**Was ist asynchronisiert gegen Versprechen?**
 * Async/Awit macht den Quellcode klarer und lesbarer im Vergleich zu Versprechen, in denen das Versprechenketten Quellcode zum Durcheinander machen kann.
 * In beiden Ansätzen ist die Handhabung des Fehlers ziemlich ähnlich.
 * Debugging ist in Async weniger schwierig.
 * Versprechen behalten die Staaten wie ausstehend, gelöst oder abgelehnt. Während asynchronisiert/wartet entweder aufgelöst oder abgelehnt wird.

## Siehe auch
  * [Was ist vielversprechend in JavaScript? | JavaScript Tutorial][1]
  * [Was ist serverloses Computer? | Serverlose Architektur][11]
  * [Was ist Multitenancy? | Warum ein Multi-Mieter-Ansatz?][12]
  * [Was ist generative AI | Generative künstliche Intelligenz][13]
  * [So integrieren Sie Chatgpt in Google Sheets][14]
  * [So verwenden Sie Chatgpt in VSCODE | Der VSCODE -Erweiterungscode GPT][15]
  * [Was ist Openai Chatbot GPT-3 | CHATGPT Eine AI -Revolution][16]
  * [Eine Einführung in die künstliche Intelligenz | Was ist ai?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
