---
title: "Qu'est-ce que Async attend en JavaScript? | Un guide JavaScript" 
seoTitle: "Qu'est-ce que Async attend en JavaScript?" 
description: "Qu'est-ce que Async attend en JavaScript? Les mots clés asynchronisés et attend sont utilisés pour faire fonctionner mieux les opérations asynchrones que les promesses traditionnelles en JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Qu'est-ce que Async attend en JavaScript? Les mots clés asynchronisés et attend sont utilisés pour faire fonctionner mieux les opérations asynchrones que les promesses traditionnelles en JavaScript." 
url: /fr/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 a présenté JavaScript Async / Await qui est un emballage autour des promesses. Async / Await est utilisé pour consommer des API basées sur les promesses de la manière moderne et la plus simple.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Qu'est-ce que Async attend en JavaScript??">}}


## Aperçu
Nous avons couvert [JavaScript promises][1] dans notre précédent article de blog et que vous devez visiter si vous souhaitez comprendre clairement le concept derrière les promesses JavaScript. Dans cette série de [tutoriels JavaScript][2], nous sommes ici avec un autre guide JavaScript qui démontrera les fonctionnalités modernes de JavaScript Async / Await. Ce billet de blog est destiné à ceux qui ont une connaissance préalable des promesses JavaScript. De plus, nous essaierons de couvrir**ce qui est async / attendu dans JavaScript**, et lorsque nous devons utiliser Async / Await. De plus, nous couvrirons également les erreurs de manipulation avec async / attendre. Alors, donnez une lecture approfondie à ce**tutoriel Async / Await JavaScript**pour marquer ce concept vérifié.
Nous passerons par les sections suivantes dans ce tutoriel Async Awaits JavaScript:
  ***[Qu'est-ce que l'async / attendre en javascript | Async attend syntaxe][3]**
  ***[Quand utiliser async / attend?][4]**
  ***[Gestion des erreurs avec Async / Await][5]**

## Qu'est-ce que l'async / attendre en javascript | Async attend syntaxe {# what-is-asyncawait-in-javascript-async-await-syntax}
ECMAScript 2017 a publié de nouvelles fonctionnalités de JavaScript et Async / Await est l'une des plus utilisées parmi ces fonctionnalités. Async / Await est construit au-dessus des promesses et est en fait une façon moderne de gérer les promesses JavaScript.
Voyons comment utiliser les mots clés Async / Await dans le code JavaScript:
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
Eh bien, le mot-clé asynchronisé au début de la fonction implique que cette fonction renvoie une promesse. Ainsi, l'attente du mot clé est toujours utilisée à l'intérieur du corps de la fonction asynchrone pour suspendre l'exécution de la fonction jusqu'à ce que la promesse se résout. La chose importante à noter ici est que vous ne pouvez pas utiliser un mot-clé AWAIT dans le corps d'une fonction régulière. Cependant, vous pouvez utiliser Await uniquement avec des fonctions asynchrones déclarées avec le mot-clé asynchrone.

## Quand utiliser Async / Await? {# Quand user-asyncawait}
Jusqu'à présent, vous avez la réponse à**ce qui est asynchronisé en javascript**. Comme ce n'est qu'un emballage autour des promesses JavaScript traditionnelles, vous mieux utiliser cette nouvelle façon de créer et de gérer les promesses d'une manière plus propre et plus lisible. De plus, vous pouvez vous débarrasser de multiples promesses. Ensuite, les appels en utilisant Async / Await qui rendent finalement le code source plus gérable et maintenable. Le mot-clé Await résume l'instruction .Then () en une seule ligne.

## Gestion des erreurs avec async / attendre {# Erreur-mangeur avec-asyncawait}
La gestion des erreurs est une tâche critique en ce qui concerne le développement de logiciels au niveau de l'entreprise. Il existe plusieurs façons d'attraper des erreurs dans l'approche asynchrone / attendre.

{{< figure align=center src="images/async-await.png" alt="Essayez Catch Async attendre javascript">}}

**Essayez Catch Async Await JavaScript**: Rien de nouveau avec cette approche de gestion des erreurs. Cependant, vous pouvez utiliser un bloc Try / Catch à l'intérieur d'une fonction asynchrone comme indiqué dans l'extrait de code ci-dessous:
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
À l'aide du bloc Try / Catch, vous pouvez assister aux exceptions à l'intérieur du corps d'une fonction asynchrone.
Alors qu'il existe une autre approche pour gérer les erreurs dans lesquelles vous pouvez ajouter le bloc .catch () à la fin de l'appel de fonction. Puisque Async / Await renvoie une promesse, vous attrapez donc les erreurs dans le bloc .catch ().
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

## Conclusion
Nous terminons ce**JavaScript Async Await Tutorial**. J'espère que vous avez une meilleure compréhension de**ce que l'async attend en JavaScript**. De plus, nous avons parcouru JavaScript Async Await Syntax qui rend le code source moins complexe. Cette fonction JavaScript est largement utilisée en raison de sa riche utilisation et de ses performances. Dans les prochains jours, nous écrire plus loin sur les fonctionnalités et les concepts JavaScript afin que vous puissiez obtenir une commande solide sur les concepts JS. De plus, il existe d'autres articles intéressants mentionnés dans la section "Voir aussi".

## Connecte-toi avec nous
Enfin, [Containerize.com][6] propose des tutoriels JavaScript en cours sur divers sujets passionnants. Vous pouvez rester à jour en nous suivant sur nos plateformes de médias sociaux, notamment [Facebook][7], [LinkedIn][8] et [Twitter][9].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][10].

## FAQS
**Qu'est-ce qu'Async attend en javascript avec l'exemple?**
Vous pouvez visiter ce [lien][3] pour comprendre le concept d'Async attend.
**Qu'est-ce qu'Async attend par rapport à la promesse?**
 * Async / Await rend le code source plus clair et plus lisible par rapport aux promesses dans lesquelles le chaînage de promesses peut faire du code source un gâchis.
 * La gestion des erreurs est assez similaire dans les deux approches.
 * Le débogage est moins difficile en asynchronisation.
 * Les promesses maintiennent les États tels que en attente, résolu ou rejeté. Tandis que l'async / attendre est résolu ou rejeté.

## Voir également
  * [Qu'est-ce que la promesse dans JavaScript? | Tutoriel javascript][1]
  * [Qu'est-ce que l'informatique sans serveur? | Architecture sans serveur][11]
  * [Qu'est-ce que la multiplication? | Pourquoi une approche multi-locataire?][12]
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative][13]
  * [Comment intégrer Chatgpt avec Google Sheets][14]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode GPT][15]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution AI][16]
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que l'AI?][17]

  
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
