---
title: "Was sind JavaScript -Designmuster? | Ratgeber für Anfänger" 
seoTitle: "JavaScript -Designmuster" 
description: "In dieser JavaScript -Anfängerhandbuch wird JavaScript -Designmuster erläutert. Nehmen Sie Ihre Entwicklung auf die nächste Ebene, indem Sie die besten Codemuster übernehmen." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "In dieser JavaScript -Anfängerhandbuch wird JavaScript -Designmuster erläutert. Nehmen Sie Ihre Entwicklung auf die nächste Ebene, indem Sie die besten Codemuster übernehmen." 
url: /de/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

## Entwickler zeigen eine positive Absicht beim Lernen von JavaScript -Designmustern. JS -Designmuster geben Ihrem Quellcode ein Design, um es effizient und wartbar zu machen.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="JavaScript -Designmuster">}}


## Überblick
Eine große Anzahl von JavaScript -Programmierern ist unklar über **JavaScript -Designmuster** und diese Lücke sollte gefüllt werden. In dieser Reihe von [JavaScript -Tutorials][1] schreiben wir diesen Blog -Beitrag, der die am häufigsten verwendeten JavaScript -Designmuster wie das Moduldesign -Muster, das Beobachtermuster und mehr abdecken. Darüber hinaus werden wir versuchen, Codebeispiele mit Codebeispielern zu demonstrieren, sodass Sie keine Unklarheiten im Kopf haben. Dieses Thema ist sehr wichtig, wenn Sie eine Karriere in JavaScript verfolgen. Bleiben Sie daher in diesem Artikel in Verbindung und am Ende dieses Blog -Beitrags sollten Sie ein starkes Verständnis der JS -Designmuster haben.
Die folgenden Punkte sind in diesem Leitfaden für JavaScript -Anfänger behandelt:
* **[Was sind JavaScript -Designmuster?][2]** 
* **[Modul Designmuster][3]** 
* **[Fabrikmuster JavaScript][4]** 
* **[Singleton -Muster JavaScript][5]** 
* **[Beobachtermuster JavaScript][6]** 

## Was sind JavaScript -Designmuster? {#What-are-JavaScript-design-patterns}

JavaScript -Designmuster sind Lösungen in Form von Vorlagen, die effiziente Lösungen für die gemeinsamen Probleme liefern, die beim Schreiben von Quellcode wiederholt auftreten. In einfachen Worten sind Designmuster vordefinierte Stile/Bestellungen, um Wartungsbetriebe und überschaubarer Javasciprt-Code zu schreiben.
In kleinen Organisationen achten die meisten Entwickler nicht auf Designmuster, aber es wird zu einem kritischen Thema, wenn Sie groß angelegte Business-Software aufbauen. Grundsätzlich gibt es eine Reihe von Entwicklern, die für Software auf Unternehmensebene arbeiten, die über einen eigenen Schreibstil verfügen. Daher entscheiden Sie sich für ein Entwurfsmuster, um wiederholte Probleme zu verhindern, wiederverwendbare Codeblöcke zu erstellen und die App -Entwicklung zu beschleunigen.

## Moduldesignmuster {#Module-design-pattern}

Dies ist das häufigste und kaufmännische Designmuster, für das Entwickler entscheiden. Gemäß diesem Entwurfsmuster werden die Anwendungscodeblöcke in Form von Modulen getrennt voneinander gestellt. Dieses JavaScript -Designmuster bietet Isolation und Kapselung. Darüber hinaus können Sie öffentliche/private Funktionen und Attribute erfüllen, auf die Sie nicht von außerhalb des Moduls zugreifen können. Module im modularen Entwurfsmuster geben vor allem immer ein Objekt zurück.
Sie können dieses Entwurfsmuster verwenden, falls Sie eine Reiche auf Unternehmensebene erstellen. Sie können also ein separates Modul für jede Funktion erstellen, um Unabhängigkeit zu bringen.
Der folgende Code -Snippet zeigt das modulare Entwurfsmuster:
```
const student = (function () {
  // Private
  let name = "mustafa";
  let program = "computer science";
  const getStudentName = () => name;
  const getStudentProgram = () => program;

  // Public
  return {
    name,
    program,
    getName: () => getStudentName(),
    getStudentProgram: () => getStudentProgram(),
  };
})();

student.name;
student.program;
student.getStudentProgram();
```

## Fabrikmuster JavaScript {#Factory-pattern-JavaScript}

Gemäß diesem Entwurfsmuster erstellen Sie Objekte mithilfe einer Schnittstelle, anstatt den Konstruktor mit dem **neuen** -Operator aufzurufen. Tatsächlich geben wir eine Art von Objekt an, und die Fabrik erstellt eine Instanz und sendet uns zur Verwendung zurück. Darüber hinaus gibt dieses JavaScript -Designmuster eine vollständige Kontrolle über die Erstellung von Objekten. Darüber hinaus können Sie dieses Entwurfsmuster für den Umgang mit einfachen und komplexen Objekten auswählen, und es ist auch ratsam, das Werksmuster zur Entkopplung zu verwenden.
Schreiben wir einen Code -Snippet zur weiteren Erkundung.
```
// sandwich.js
const Sandwich = function({name }) {
  this.name = name || "";
};
module.exports = Sandwich;
```
```
// burger.js
const Burger = function({name }) {
    this.name = name || "";
};
module.exports = Burger;
```
```
// gadFoodFactory.js
const Sandwich = require("./sandwich");
const Burger = require("./burger");
const food = { Burger, Sandwich };
module.exports = {
    createFood(type, attributes) {
        const GadFoodType = food[type];
        return new GadFoodType(attributes);
    }
};
```
```
// index.js
const gadFoodFactory = require("./gadFoodFactory");
const mySandwich = gadFoodFactory.createFood("Sandwich", {
    name: "Chicken"
});
const myBurger = gadFoodFactory.createFood("Burger", {
    name: "Grilled",
});
console.log(mySandwich);
console.log(myBurger);
```

## Singleton Muster JavaScript {#Singleton-pattern-JavaScript}

Dieses Designmuster ist sehr beliebt, das die Instanziierung einer Klasse auf ein einzelnes Objekt einschränkt. Der Dienst im JavaScript -Framework Angular folgt diesem Muster, in dem nur eine Instanz des Dienstes erstellt wird und dass das Objekt für alle Module zugänglich ist. Darüber hinaus teilt der gesamte mit dem einzelnen Objekt verbundene Client die gleichen Ressourcen und Zugriffsstufen.
Die Demonstration des **Singleton -Musters** lautet wie folgt:
```
let singletonPattern = new (function () {

  let name = "mustafa";

  this.printName = function() {
      console.log(name);
  }
})();

singletonPattern.printName();

// output: mustafa
```

## Beobachtermuster JavaScript {#Observer-pattern-JavaScript}

Das Beobachtermuster ist sehr hilfreich beim Aufbau skalierbarer Geschäfts -Apps. Ein Benachrichtigungsmechanismus ist an diesem Codemuster beteiligt. Immer wenn es eine Änderung gibt, löst es ein Ereignis aus, das andere abhängige Abonnements benachrichtigt. Dieses Muster überträgt also den neuesten Status an andere Objekte in den Modulen. Tatsächlich geht es darum, die Änderung der Abonnenten automatisch zu informieren.
Die folgenden Codebeispiele folgen dem Beobachtermuster:
```
function ObserverFunc() {
this.observerArray = [];
}

ObserverFunc.prototype.subscribe = function (ele) {
this.observerArray.push(ele);
}

ObserverFunc.prototype.unsubscribe = function (element) {
const elementIndex = this.observerArray.indexOf(element);
if (elementIndex &gt; -1) {
this.observerArray.splice(elementIndex, 1);
}
}

ObserverFunc.prototype.notifyAll = function (element) {
this.observerArray.forEach(function (observerElement) {
observerElement(element);
});
}
```

## Abschluss
Das ist alles für die JavaScript -Designmuster **. Wir hoffen, Sie haben dieses JavaScript -Tutorial** genossen und die Konzepte von Designmustern gelernt. Wir haben die am häufigsten verwendeten Codemuster wie Moduldesignmuster, Singleton, Beobachter und Fabrikdesign -Muster behandelt. In diesem Artikel wird Ihnen ein klares Bild mit Hilfe von Code -Snippets erhalten. Darüber hinaus gibt es andere sehr relevante Blog -Beiträge, die Sie im Abschnitt „Siehe auch“ finden.

## Verbinde dich mit uns
Schließlich befindet sich [containerize.com][7] in einem konsistenten Prozess des Schreibens von JavaScript -Posts zu neuen Themen. Sie können in der Schleife bleiben, indem Sie uns auf unseren Social -Media -Plattformen, einschließlich [Facebook][8], [LinkedIn][9] und [Twitter][10], folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum][11] informieren.

## FAQs
**Was sind die beliebtesten Designmuster in JavaScript?**
Modulmuster, Beobachter, Fabrik- und Singleton -Muster werden in der JavaScript -Programmierung häufig verwendet. Bitte folgen Sie diesem [Link][2], um weiter zu untersuchen.

## Siehe auch
 * [Lernen Sie JavaScript -Grundkonzepte, um Ihrer Karriere zu helfen][12]
 * [Eine Einführung in die künstliche Intelligenz | Was ist ai?][13]
 * [So integrieren Sie Chatgpt in Google Sheets][14]
 * [So verwenden Sie Chatgpt in VSCODE | Der VSCODE -Erweiterungscode GPT][15]
 * [Was ist Openai Chatbot GPT-3 | CHATGPT Eine AI -Revolution][16]
 * [Google docs Integration in Chatgpt | OpenAI GPT-3][17]
 * [Was sind die Top 5 Open-Source-AI-Frameworks][18]
 * [Was ist generative AI | Generative künstliche Intelligenz][19]



[1]: https://blog.containerize.com/categories/programming/
[2]: #What-are-JavaScript-design-patterns
[3]: #Module-design-pattern
[4]: #Factory-pattern-JavaScript
[5]: #Singleton-pattern-JavaScript
[6]: #Observer-pattern-JavaScript
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
