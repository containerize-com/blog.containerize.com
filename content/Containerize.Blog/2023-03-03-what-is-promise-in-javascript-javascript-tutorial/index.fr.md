---
title: "Qu'est-ce que la promesse en JavaScript? | Tutoriel javascript" 
seoTitle: "Qu'est-ce que la promesse en JavaScript?" 
description: "Qu'est-ce que la promesse en JavaScript? Une promesse est un bloc de code qui donne le résultat final d'une opération asynchrone telle que l'attente, terminée ou rejetée." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Qu'est-ce que la promesse en JavaScript? Une promesse est un bloc de code qui donne le résultat final d'une opération asynchrone telle que terminée ou rejetée." 
url: /fr/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Avez-vous du mal à apprendre le concept de promesses JavaScript? Cet article expliquera comment créer une promesse, pourquoi nous utilisons la promesse en javascript et plus encore.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Aperçu
Nous espérons que vous avez une meilleure compréhension des [types de données JavaScript][1]. Maintenant, il s'agit d'un autre article de blog dans la catégorie [Programmation][2]. Dans ce didacticiel JavaScript, nous passerons par **ce qui est prometteur dans JavaScript** , et avec cela, nous verrons également quelles sont les opérations asynchrones, l'utilisation des promesses et comment créer des promesses en JavaScript. Premièrement, un processus / opération asynchrone est celui qui s'exécute indépendamment par rapport à d'autres processus et ne crée aucun blocage. Par conséquent, vous devez gérer les opérations asynchrones, sinon elle peut créer des anomalies dans votre code JavaScript. Ainsi, nous explorerons comment pouvons-nous gérer les opérations asynchrones en utilisant des promesses.
Nous couvrirons les points suivants dans ce tutoriel JavaScript:
  * **[Qu'est-ce que la promesse dans JavaScript? Promesses expliquées][3]** 
  * **[Pourquoi utilisons-nous la promesse en javascript?][4]** 
  * **[Comment la promesse fonctionne dans JavaScript?][5]** 
  * **[Comment créer une promesse?][6]** 

## Qu'est-ce que la promesse en JavaScript? Promesses expliquées {#What-is-promise-in-JavaScript-Promises-Explained}

Une promesse est un objet qui représente une valeur d'une météo de l'opération asynchrone, il est résolu, rejeté ou est en attente. En mots plus simples, les promesses sont utilisées pour renvoyer une valeur qui n'a pas encore été produite par un bloc de code asynchrone. En fait, il y a trois **états de promesse** et il peut être dans l'un des états suivants:
**En attente** : la promesse est dans un état en attente, ce qui signifie qu'il est en phase de départ et est actuellement en exécution.
**FALUPLÉ** : La promesse est résolue et la valeur a été renvoyée.
**Rejeté** : C'est l'état qui est causé par toute erreur qui signifie que la promesse a été rejetée.
Une chose importante à considérer ici est que la valeur / l'état renvoyé par la promesse est immuable et ne peut pas être modifié, ce qui signifie que les promesses s'assurent qu'il n'y a pas de comportement inhabituel.

## Pourquoi utilisons-nous Promise en JavaScript? {#Why-we-use-promise-in-JavaScript}

Si vous n'êtes pas au courant de **Rappel Hell**, permettez-moi de partager ce que c'est. Tout d'abord, un rappel est une fonction dans une autre fonction. Fondamentalement, une fonction de rappel est passé comme un deuxième argument dans une fonction qui s'exécute lors de la réception des résultats. Ainsi, dans de nombreux scénarios, vous devez nicher une fonction de rappel et à mesure que la nidification augmente, il devient presque impossible à gérer. Par conséquent, nous appelons cette longue nidification des fonctions de rappel**Hellback Hell** .
Ainsi, une promesse est un moyen d'éviter une situation d'enfer de rappel. L'utilisation des promesses donne une meilleure lisibilité et une amélioration des erreurs. De plus, vous pouvez mieux gérer les opérations asynchrones en récupérant la valeur renvoyée et en passant cette valeur à la fonction suivante de la chaîne.

## Comment la promesse fonctionne dans JavaScript? {#How-promise-works-in-JavaScript}

Maintenant, comprenons le mécanisme de travail derrière les promesses. Veuillez consulter le diagramme mentionné ci-dessous.

{{< figure align=center src="images/what-is-a-promise.png" alt="Comment la promesse fonctionne dans JavaScript??" >}}

Selon le flux de travail mentionné ci-dessus, les détails de mise en œuvre sont assez clairs. Promise démarre l'exécution sur sa création et est dans l'état en attente en attente de la réponse. Il y a deux options, soit il y aura des données, soit il y aura une erreur à la fin du traitement. Lors de la réception de données, il va dans le bloc. Ensuite () et il va dans le bloc .catch () en cas d'erreur.

## Comment créer une promesse? {#How-to-create-a-promise}

Jusqu'à présent, nous avons couvert le concept de base de la promesse. Maintenant, nous allons explorer comment pouvons-nous créer une promesse en JavaScript. Utilisons le constructeur de promesses suivant pour créer une promesse.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor prend une fonction comme un argument qui prend à nouveau deux arguments en premier, résout et l'autre rejet. Il invoque la méthode Resolve () en cas de succès et il va dans le bloc Reject () en cas d'erreur ou de rejet.
Allons un peu profondément et explorons la création de promesses un peu plus loin.
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
Dans l'extrait de code ci-dessus, vous pouvez en outre passer des appels API dans le bloc Resolve ().
Maintenant, voyons le modèle d'exécution d'une promesse JavaScript.
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
Voici la sortie de l'extrait de code ci-dessus:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Ainsi, le code à l'intérieur du corps de promesse fonctionne de manière synchrone afin que «l'exécution synchrone» soit imprimée. Ensuite, le bloc .then () fonctionne de manière asynchrone et attend que le résultat ait été généré, mais l'exécution du programme ne s'arrête pas, c'est pourquoi "Hello Word" est imprimé et que l'exécution de promesse a été différée. Après cela, le bloc .then () exécute et renvoie les valeurs qu'elle a promises. C'est l'histoire des promesses JavaScript. Encore une fois, puisque JavaScript est simple, les promesses sont utilisées pour gérer les opérations asynchrones de manière non bloquant.

## Conclusion
Ceci est la fin de ce **tutoriel javascript**. J'espère que vous avez une bonne idée des promesses JavaScript. Nous avons couvert **ce qui est prometteur dans JavaScript** , pourquoi nous utilisons la promesse dans JavaScript,**Comment la promesse fonctionne dans JavaScript** , et comment créer une promesse. De plus, nous couvrirons davantage ce sujet concernant son utilisation et ses provisions avancées. Par conséquent, passez par cet article dans le cas où vous vous préparez à une session d'entrevue.

## Connecte-toi avec nous
Enfin, [contenerize.com][7] propose des tutoriels JavaScript en cours sur divers sujets passionnants. Vous pouvez rester dans la boucle en nous suivant sur nos plateformes de médias sociaux, notamment [Facebook][8], [LinkedIn][9] et [Twitter][10].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][11].

## FAQS
**Quelles sont les promesses en javascript avec l'exemple?** 
Veuillez suivre ce [lien][3] pour savoir quelles sont les promesses en JavaScript.

## Voir également
  * [Quels sont les types de données JavaScript? | Un guide du débutant][1]
  * [Architecture basée sur Kubernetes Multi-Renancy & Container][12]
  * [Qu'est-ce que l'informatique sans serveur? | Architecture sans serveur][13]
  * [Qu'est-ce que la multiplication? | Pourquoi une approche multi-locataire?][14]
  * [Quels sont les types de données JavaScript? | Un guide du débutant][15]



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
