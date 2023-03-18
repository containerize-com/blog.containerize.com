---
title: "Was ist vielversprechend in JavaScript? | JavaScript -Tutorial" 
seoTitle: "Was ist vielversprechend in JavaScript?" 
description: "Was ist vielversprechend in JavaScript? Ein Versprechen ist ein Codeblock, der das Endergebnis einer asynchronen Operation wie ausstehend, abgeschlossen oder abgelehnt ergibt." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Was ist vielversprechend in JavaScript? Ein Versprechen ist ein Codeblock, der das Endergebnis einer asynchronen Operation wie abgeschlossen oder abgelehnt ergibt." 
url: /de/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Haben Sie Probleme, das Konzept von JavaScript -Versprechen zu lernen? In diesem Artikel wird erklärt, wie wir ein Versprechen erstellen können, warum wir Promise in JavaScript und mehr verwenden.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Überblick
Wir hoffen, dass Sie ein besseres Verständnis von [JavaScript -Datentypen] [1] haben. Dies ist ein weiterer Blog -Beitrag in der Kategorie [Programmierung] [2]. In diesem JavaScript -Tutorial werden wir in JavaScript**das versprechen, und zusammen mit diesem werden wir auch sehen, was asynchrone Operationen sind, die Verwendung von Versprechen und wie man Versprechungen in JavaScript erstellt. Erstens ist ein asynchroner Prozess/Betrieb einer, das in Bezug auf andere Prozesse unabhängig ausgeführt wird und keine Blockade erzeugt. Daher müssen Sie asynchrone Operationen abwickeln, da sonst möglicherweise Abnormalitäten in Ihrem JavaScript -Code erzeugen. Wir werden also untersuchen, wie wir mit asynchronen Operationen mit Versprechungen umgehen können.
Wir werden die folgenden Punkte in diesem JavaScript -Tutorial behandeln:
***[Was ist vielversprechend in JavaScript? Versprechen erklärt] [3]**
***[Warum verwenden wir Versprechen in JavaScript?] [4]**
***[Wie vielversprechend funktioniert in JavaScript?] [5]**
***[Wie kann man ein Versprechen erstellen?] [6]**

## Was ist in JavaScript vielversprechend? Versprechen erklärt {#What-is-Promise-in-JavaScript-Versprechen-erläutert}
Ein Versprechen ist ein Objekt, das einen Wert eines asynchronen Betriebswetters darstellt, das es gelöst, abgelehnt oder im anstehenden Zustand befindet. In einfacheren Worten werden Versprechen verwendet, um einen Wert zurückzugeben, der noch von einem asynchronen Codeblock erzeugt werden muss. Tatsächlich gibt es drei**Versprechenszustände**und es kann in einem der folgenden Zustände sein:
* * Ausstehend**: Das Versprechen befindet sich in einem ausstehenden Zustand, was bedeutet, dass es sich in der Startphase befindet und derzeit ausgeführt wird.
* * erfüllt**: Versprechen wird gelöst und der Wert wurde zurückgegeben.
* * Abgelehnt**: Dies ist der Zustand, der durch einen Fehler verursacht wird, was bedeutet, dass das Versprechen abgelehnt wurde.
Eine wichtige Sache, die hier zu berücksichtigen ist, ist, dass der von dem Versprechen zurückgegebene Wert/Zustand unveränderlich ist und nicht geändert werden kann, was bedeutet, dass Versprechen sicherstellen, dass es kein ungewöhnliches Verhalten gibt.

## Warum verwenden wir Promise in JavaScript? {#Warum wir haben in JavaScript}}}
Wenn Sie**Callback Hell**nicht kennen, lassen Sie mich teilen, was es ist. Erstens ist ein Rückruf eine Funktion in einer anderen Funktion. Grundsätzlich wird eine Rückruffunktion als zweites Argument in einer Funktion übergeben, die nach Erhaltsergebnisse ausgeführt wird. In vielen Szenarien müssen Sie also eine Rückruffunktion nisten und mit zunehmendem Nesting nahezu unmöglich zu handhaben. Daher nennen wir diese lange Verschachtelung von Rückruffunktionen**Callback Hell**.
Ein Versprechen ist also eine Möglichkeit, eine Callback -Höllensituation zu vermeiden. Die Verwendung von Versprechen bietet eine bessere Lesbarkeit und eine verbesserte Fehlerbehandlung. Darüber hinaus können Sie asynchrone Operationen besser ausführen, indem Sie den zurückgegebenen Wert abrufen und diesen Wert an die nächste Funktion in der Kette weitergeben.

## Wie vielversprechend in JavaScript funktioniert? {#How-Promise-Ore-in-JavaScript}
Lassen Sie uns nun den Arbeitsmechanismus hinter Verheißungen verstehen. Bitte schauen Sie sich das unten erwähnte Diagramm an.

{{< figure align=center src="images/what-is-a-promise.png" alt="Wie vielversprechend funktioniert in JavaScript??" >}}

Gemäß dem oben genannten Workflow sind die Implementierungsdetails ziemlich klar. Versprechen beginnt mit der Ausführung nach seiner Erstellung und wartet im anhängigen Zustand, der auf die Antwort wartet. Es gibt zwei Optionen, entweder gibt es Daten, oder es wird am Ende der Verarbeitung ein Fehler vorliegen. Nach Empfang von Daten geht es in .then () -Block und in den Block .Catch () im Falle eines Fehlers.

## Wie kann man ein Versprechen erstellen? {#How-to-Create-A-A-Promise}
Bisher haben wir das grundlegende Konzept des Versprechens behandelt. Jetzt werden wir untersuchen, wie wir in JavaScript ein Versprechen schaffen können. Lassen Sie uns den folgenden Versprechen -Konstruktor verwenden, um ein Versprechen zu schaffen.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor nimmt eine Funktion als Argument an, die zuerst zwei Argumente, Auflösungen und die andere Ablehnung einnimmt. Es ruft die Resolve () -Methode im Erfolgsfall auf und geht in den Fall von Fehler oder Abstoßung in den Block von Reject () auf.
Lassen Sie uns ein wenig tief gehen und die Verheißung ein wenig weiter erkunden.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
Im obigen Code -Snippet können Sie API -Aufrufe im Resolve () -Block weiter tätigen.
Lassen Sie uns nun das Ausführungsmuster eines JavaScript -Versprechens sehen.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
Im Folgenden finden Sie die Ausgabe des oben genannten Codesausschnitts:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Der Code im Versprechungskörper funktioniert also synchron, sodass die "synchrone Ausführung" gedruckt wird. Als nächstes funktioniert Block asynchron und wartet, bis das Ergebnis generiert wurde, aber die Programmausführung hört nicht auf, deshalb wird das "Hallo -Wort" gedruckt und die Ausführung von Versprechen wurde verschoben. Danach führt und gibt .then () Block die von ihm versprochenen Werte aus. Das ist die Geschichte von JavaScript -Versprechen. Da JavaScript ein einzelnes Thread ist, werden Versprechen verwendet, um asynchrone Operationen auf nicht blockierende Weise zu verarbeiten.

## Abschluss
Dies ist das Ende dieses**JavaScript -Tutorials**. Ich hoffe, Sie haben eine gute Vorstellung von JavaScript -Versprechen. Wir haben in JavaScript**, warum wir in JavaScript versprechen, in JavaScript**behandelt, wie vielversprechend in JavaScript**und wie man ein Versprechen erstellt. Darüber hinaus werden wir dieses Thema mehr über seine fortgeschrittenen Nutzung und Bestimmungen behandeln. Gehen Sie daher diesen Artikel durch, falls Sie sich auf eine Interviewsitzung vorbereiten.

## Verbinde dich mit uns
Schließlich bietet [Containerize.com] [7] laufende JavaScript -Tutorials zu verschiedenen aufregenden Themen. Sie können in der Schleife bleiben, indem Sie uns auf unseren Social -Media -Plattformen, einschließlich [Facebook] [8], [LinkedIn] [9] und [Twitter] [10], folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum] [11] informieren.

## FAQs
* * Was sind Versprechen in JavaScript mit Beispiel?**
Bitte folgen Sie diesem [Link] [3], um zu wissen, was Versprechen in JavaScript sind.

## Siehe auch
  * [Was sind JavaScript -Datentypen? | Ein Anfängerleitfaden] [1]
  * [Kubernetes Multi-Tenancy & Container-basierte Architektur] [12]
  * [Was ist serverloses Computer? | Serverlose Architektur] [13]
  * [Was ist Multitenancy? | Warum ein Multi-Mieter-Ansatz?] [14]
  * [Was sind JavaScript -Datentypen? | Ein Anfängerleitfaden] [15]
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
