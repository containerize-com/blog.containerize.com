---
title: "Que sont les modèles de conception JavaScript? | Guide du débutant" 
seoTitle: "Modèles de conception javascript" 
description: "Ce guide JavaScript Beginners explique les modèles de conception JavaScript. Faites passer votre développement au niveau supérieur en adoptant les meilleurs modèles de code." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "Ce guide JavaScript Beginners explique les modèles de conception JavaScript. Faites passer votre développement au niveau supérieur en adoptant les meilleurs modèles de code." 
url: /vi/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

## Les développeurs montrent une intention positive dans l'apprentissage des modèles de conception JavaScript. Les modèles de conception JS donnent à votre code source une conception pour le rendre efficace et maintenu.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="Modèles de conception javascript">}}


## Aperçu
Un grand nombre de programmeurs JavaScript ne sont pas clairs sur **les modèles de conception JavaScript** et cet écart doit être comblé. Dans cette série de [tutoriels JavaScript][1], nous écrivons cet article de blog qui couvrira les modèles de conception JavaScript les plus utilisés tels que le modèle de conception du module, le modèle d'observateur, etc. De plus, nous essaierons de démontrer l'utilisation d'exemples de code afin qu'il ne reste plus d'ambiguïté dans votre esprit. Ce sujet est très important si vous poursuivez une carrière en JavaScript. Par conséquent, restez connecté tout au long de cet article, et à la fin de cet article de blog, vous devriez avoir une forte compréhension des modèles de conception JS.
Les points suivants doivent être couverts dans ce guide pour débutant JavaScript:
  * **[Que sont les modèles de conception JavaScript?][2]** 
  * **[modèle de conception du module][3]** 
  * **[Modèle d'usine javascript][4]** 
  * **[singleton motif javascript][5]** 
  * **[Modèle d'observateur javascript][6]** 

## Que sont les modèles de conception JavaScript? {#What-are-JavaScript-design-patterns}

Les modèles de conception JavaScript sont des solutions sous la forme de modèles qui fournissent des solutions efficaces aux problèmes courants qui se produisent à plusieurs reprises dans la rédaction du code source. En mots plus simples, les modèles de conception sont des styles / commandes prédéfinis pour écrire le code Javasciprt gérable et gérable.
Dans les petites organisations, la plupart des développeurs ne prêtent pas attention aux modèles de conception, mais cela devient un sujet critique lorsque vous créez des logiciels commerciaux à grande échelle. Fondamentalement, il existe un certain nombre de développeurs travaillant pour des logiciels de niveau d'entreprise qui ont leur propre style d'écriture de code. Par conséquent, vous optez pour un modèle de conception pour éviter les problèmes de répétition, créer des blocs de code réutilisables et accélérer le développement d'applications.

## Modèle de conception du module {#Module-design-pattern}

C'est le modèle de conception le plus courant et le plus incontournable pour lesquels les développeurs optent. Selon ce modèle de conception, les blocs de code d'application sont placés séparément les uns des autres sous forme de modules. Ce modèle de conception JavaScript fournit l'isolement et l'encapsulation. De plus, vous pouvez faire des fonctions et des attributs publics / privés auxquels vous ne pouvez pas accéder à l'extérieur du module. Surtout, les modules du modèle de conception modulaire renvoient toujours un objet.
Vous pouvez utiliser ce modèle de conception au cas où vous construisez une application commerciale riche en entreprise de niveau d'entreprise. Ainsi, vous pouvez créer un module séparé pour chaque fonctionnalité pour apporter l'indépendance.
L'extrait de code suivant montre le modèle de conception modulaire:
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

## Modèle d'usine javascript {#Factory-pattern-JavaScript}

Selon ce modèle de conception, vous créez des objets à l'aide d'une interface plutôt que d'appeler le constructeur avec le nouveau opérateur****. En fait, nous spécifions un type d'objet et l'usine crée une instance et nous renvoie pour une utilisation. De plus, ce modèle de conception JavaScript donne un contrôle complet sur la création d'objets. De plus, vous pouvez choisir ce modèle de conception pour gérer des objets simples et complexes et il est également sage d'utiliser le modèle d'usine pour le découplage.
Écrivons un extrait de code pour une exploration plus approfondie.
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

## Singleton motif javascript {#Singleton-pattern-JavaScript}

Ce modèle de conception est très populaire qui restreint l'instanciation d'une classe à un seul objet. Le service dans le framework JavaScript Angular suit ce modèle où il ne crée qu'une seule instance du service et cet objet est accessible à tous les modules. De plus, tout le client connecté à l'objet unique partage les mêmes ressources et niveaux d'accès.
La démonstration du modèle **singleton** est la suivante:
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

## Modèle d'observateur javascript {#Observer-pattern-JavaScript}

Le modèle d'observateur est très utile pour créer des applications commerciales évolutives. Un mécanisme de notification est impliqué dans ce modèle de code. Chaque fois qu'il y a un changement, il déclenche un événement qui informe d'autres abonnements dépendants. Ainsi, ce modèle diffuse le dernier état vers d'autres objets à travers les modules. En fait, il s'agit d'informer automatiquement la modification des abonnés.
Les exemples de code suivants suivent le modèle d'observateur:
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

## Conclusion
C’est tout pour les modèles de conception JavaScript* ***. Nous espérons que vous avez apprécié ce** tutoriel JavaScript**et appris les concepts des modèles de conception. Nous avons couvert les modèles de code les plus couramment utilisés tels que les modèles de conception de modules, les singleton, l'observateur et les modèles de conception d'usine. Cet article vous donnera une image claire avec l'aide des extraits de code. De plus, il existe d'autres articles de blog très pertinents que vous pouvez trouver dans la section «voir aussi» ci-dessous.

## Connecte-toi avec nous
Enfin, [contenerize.com][7] est dans un processus cohérent d'écriture de publications JavaScript sur de nouveaux sujets. Vous pouvez rester dans la boucle en nous suivant sur nos plateformes de médias sociaux, notamment [Facebook][8], [LinkedIn][9] et [Twitter][10].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][11].

## FAQS
**Quels sont les modèles de conception les plus populaires en javascript?**
Les motifs du module, de l'observateur, de l'usine et du singleton sont largement utilisés dans la programmation JavaScript. Veuillez suivre ce [lien][2] pour explorer davantage.

## Voir également
 * [Apprenez les concepts de base JavaScript pour aider votre carrière][12]
 * [Une introduction à l'intelligence artificielle | Qu'est-ce que AI?][13]
 * [Comment intégrer Chatgpt avec Google Sheets][14]
 * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode gpt][15]
 * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution AI][16]
 * [Google Docs Intégration avec Chatgpt | Openai GPT-3][17]
 * [Quels sont les 5 meilleurs cadres d'IA open source][18]
 * [Qu'est-ce que Generative Ai | Intelligence artificielle générative][19]



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
