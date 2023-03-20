---
title: "Apprenez les concepts de base JavaScript pour aider votre carrière" 
seoTitle: "Concepts de base javascript" 
description: "Suivez ce didacticiel JavaScript pour apprendre les concepts de base JavaScript. Les portées, le hissage et les fermetures sont des concepts très basiques mais obligatoires en JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Suivez ce didacticiel JavaScript pour apprendre les concepts de base JavaScript. Les portées, le hissage et les fermetures sont des concepts très basiques mais obligatoires en JavaScript." 
url: /fr/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Apprenons certains fondamentaux de base JavaScript qu'un développeur doit connaître. Ce langage de programmation interprété est largement utilisé pour développer des applications de niveau d'entreprise.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Concepts de base javascript">}}


## Aperçu
JavaScript est un langage de script utilisé pour développer des applications Web dynamiques. Nous utilisons HTML et CSS pour créer des sites Web statiques tandis que JavaScript est utilisé pour ajouter de l'interactivité. Dans notre article de blog précédent, nous avons couvert [Document Object Model] [1] et maintenant nous couvrirons d'autres concepts de base importants**JavaScript**. Les développeurs Web ont tendance à opter pour ce langage de script en raison de ses riches fonctionnalités et cadres. De plus, vous pouvez faire du développement à l'avant et à l'arrière en apprenant JavaScript. Cependant, vous ne pouvez pas développer seulement des applications Web mais aussi des applications mobiles. Ce tutoriel JavaScript vous aidera si vous vous préparez à une session d'entrevue. Néanmoins, ce guide vaut la peine d'être lu pour ajouter plus à votre seau de connaissances.
Nous couvrirons les points suivants de cet article:
  ***[Qu'est-ce que le hissage en javascript] [2]**
  ***[Scopes en javascript] [3]**
  ***[fermetures JavaScript] [4]**

## Qu'est-ce que le hissage en javascrip
Le phénomène de prise de fonction ou de déclaration variable en plus de la portée actuelle est connu sous le nom de levage. Il s'agit d'un concept très critique et la plupart des développeurs JavaScript n'en sont pas conscients. Cependant, une chose importante à noter ici est que seules les déclarations de fonction / variables sont prises en haut, et non l'initialisation de la fonction / variable.
Prenons un exemple et voyons l'extrait de code ci-dessous;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
Dans l'exemple de code ci-dessus, nous avons fait l'appel de la fonction avant la déclaration de la fonction, mais même si le code s'exécute avec succès et cela est dû à la levée JavaScript. Fondamentalement, pendant le temps de compilation, l'interprète JavaScript scanne le code, rassemble toutes les fonctions / variables et les met dans la mémoire appelée environnement lexical. La même chose se produit avec les variables.
```
name = "mustafa";
console.log(name);
var name;

```
De même, l'initialisation de la variable de nom a été effectuée avant sa déclaration, et le code fonctionne sans aucune erreur. Encore une fois, pendant le temps de compilation, l'interprète JS a examiné l'environnement lexical pour trouver la déclaration variable et donc exécuté le code.
Donc, si vous déclarez des variables avec des mots clés LET et const, JavaScript les hissera un peu différemment.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
L'erreur dans l'extrait de code ci-dessus s'est produite. La raison en est que l'initialisation n'a pas été effectuée lors du hissage de cette variable. Pour faire court, toutes les déclarations sont initialisées avec "non définies" tandis que les variables déclarées avec "LET" ou "const" ne sont pas initialisées dans le levé.

## Scopes en javascript {# Scopes-in-Javascript}
La portée est l'un des concepts de base JavaScript qu'un développeur doit connaître. Cependant, travailler avec JavaScript Scopes n'est pas simple et est un peu différent. Par conséquent, il existe trois types de lunettes en JavaScript et celles-ci sont les suivantes:
* * Block-Level**: Variables déclarées avec "Let" ou "const" contient la portée au niveau du bloc.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
La variable "A" n'est pas accessible en dehors des accolades bouclées {} car il a une portée au niveau du bloc.
* * au niveau de la fonction**: Les variables déclarées à l'intérieur de la fonction JavaScript ont la portée locale.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Une chose importante à noter ici est que les variables déclarées avec "let" "const" et "var" ont la portée de la fonction à l'intérieur du corps de la fonction.
* * Global-Level**: les variables déclarées en dehors de la fonction devient des variables globales. Peu importe si vous les avez déclarés en utilisant des mots clés "Let", "const" ou "var". De plus, une variable devient une variable globale si elle est déclarée sans utiliser de mot-clé comme indiqué dans l'extrait de code ci-dessous:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## fermetures JavaScript {# javascript-closures}
Il s'agit d'un autre concept important qui renforce vos connaissances en JavaScript sur les lunettes et l'encapsulation des données. Dans la forme la plus simple, une fonction à l'intérieur d'une fonction est connue sous le nom de fermeture. Vous pouvez appeler la fonction intérieure une fermeture. Cette fonction intérieure a trois types de portée:
 * Il a sa propre portée au niveau du bloc.
 * Il a accès aux variables des parents.
 * Les variables dans la portée globale sont également accessibles à l'intérieur de la fermeture.
 Voyons comment créer une fermeture:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
La variable First_name est accessible à l'intérieur de la fonction nommée innerFunc, mais la fonction parent ne peut pas avoir accès à la variable Last_name. Ce comportement permet aux programmeurs de créer des variables privées dans la chaîne de portée.

## Conclusion
Nous terminons ce guide JavaScript ici et espérons que vous avez une meilleure compréhension des concepts de base JavaScript****. De plus, nous avons également traversé**les fermetures JavaScript, les étendues en javascript**et le histin. Il existe de nombreux autres concepts importants obligatoires pour les débutants. Ainsi, cet article vous aidera si vous prospérez pour améliorer ou actualiser vos concepts JavaScript. De plus, vous pouvez parcourir les articles de blog mentionnés dans la section "Voir aussi".

## Connecte-toi avec nous
Enfin, [contenerize.com] [5] propose des tutoriels JavaScript en cours sur divers sujets passionnants. Vous pouvez rester dans la boucle en nous suivant sur nos plateformes de médias sociaux, y compris [Facebook] [6], [LinkedIn] [7] et [Twitter] [8].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum] [9].

## FAQS
* * Quels sont les concepts importants à apprendre en javascript?**
Veuillez suivre ce [guide] [2] de ce débutant JavaScript pour connaître les concepts de base JavaScript.

## Voir également
  * [Qu'est-ce que DOM dans JavaScript? | Modèle d'objet de document] [1]
  * [Qu'est-ce que la promesse dans JavaScript? | Tutoriel javascript] [10]
  * [Qu'est-ce que l'informatique sans serveur? | Architecture sans serveur] [11]
  * [Qu'est-ce que la multiplication? | Pourquoi une approche multi-locataire?] [12]
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative] [13]
  * [Qu'est-ce que Async attend en javascript? | Un guide JavaScript] [14]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode GPT] [15]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution AI] [16]
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que l'AI?] [17]
  * [Qu'est-ce que Async attend en javascript? | Un guide JavaScript] [18]
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
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
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
