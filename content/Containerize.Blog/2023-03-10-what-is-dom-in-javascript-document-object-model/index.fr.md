---
title: "Qu'est-ce que DOM dans JavaScript? | Modèle de document d'objet" 
seoTitle: "Qu'est-ce que DOM dans JavaScript?" 
description: "Qu'est-ce que DOM dans JavaScript? Ce guide démontrera le modèle d'objet de document, les propriétés de DOM, les niveaux de DOM et comment accéder aux éléments DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Qu'est-ce que DOM dans JavaScript? Ce guide démontrera le modèle d'objet de document, les propriétés de DOM, les niveaux de DOM et comment accéder aux éléments DOM." 
url: /fr/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## La représentation d'un document HTML à l'intérieur d'un navigateur Web est traitée comme un arbre DOM HTML. Il s'agit d'une série d'objets et définit la structure d'une page Web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Qu'est-ce que DOM dans JavaScript??">}}


## Aperçu
Bienvenue dans un autre article de blog passionnant dans la série de [JavaScript Programming] [1]. Dans cet article, nous allons aborder un concept très basique mais essentiel de développement Web. Oui, nous allons couvrir le modèle d'objet de document dans JavaScript. Dans le passé, nous avons publié des tutoriels JavaScript qui sont obligatoires pour démarrer le développement à l'aide du langage JavaScript. Par conséquent, nous vous suggérons de lire à fond cet article de blog afin de ne rien manquer lié à ce concept important. Commençons ce guide et découvrons**ce que Dom dans JavaScript**, les propriétés DOM et comment vous pouvez interagir avec elle par programme.
Nous couvrirons les sujets suivants dans ce guide JavaScript:
  ***[Qu'est-ce que le modèle d'objet de document (DOM)?] [2]**
  ***[niveaux de Dom] [3]**
  ***[Quelles sont les propriétés DOM et comment y accéder?] [4]**

## Qu'est-ce que le modèle d'objet de document (DOM)? {# What-is-Document-Object-Model}
Dom représente?**Document Object Model (DOM)**est la représentation d'une page Web dans un navigateur Web. Simplement, la représentation hiérarchique des éléments d'un document HTML dans un navigateur est connue sous le nom de modèle d'objet de document. Il est formé dans une forme d'arbre qui est réellement générée par le navigateur Web. Il se compose de divers nœuds connectés les uns aux autres en formant une forme d'arbre. De plus, les éléments DOM ont des attributs et des événements qui leur sont attachés.
En fait, DOM est une interface de programmation qui formule la structure logique d'une page Web et explique la voie à accéder aux éléments de la page. Fondamentalement, JavaScript ne reconnaît pas les balises HTML telles que le titre, H1 et etc.

## niveaux DOM {# DOM-levels}
Cette section démontrera les différents niveaux de DOM. Tout d'abord, il y a un objet de fenêtre dans un navigateur qui est toujours en haut, puis il y a un nœud de document. Jetons un coup d'œil à l'image ci-dessous:

{{< figure align=center src="images/DOM.png" alt="Niveaux DOM">}}

Eh bien, vous pouvez voir les éléments DOM de l'image ci-dessus. La fenêtre et le document sont les objets de navigateur de niveau supérieur, puis nous avons l'élément HTML comme racine. En continuant, nous avons les nœuds de tête et de carrosserie, le nœud de titre appartient au nœud de tête et le nœud corporel contient tous les nœuds qui sont rendus et visibles dans le navigateur Web. De plus, les éléments corporels contiennent des attributs que nous pouvons voir dans l'image telle que la balise d'ancrage contenant l'attribut "href". De même, d'autres nœuds DOM contiennent divers attributs tels que IMG, META, etc.

## Quelles sont les propriétés DOM et comment y accéder? Ot
Jusqu'à présent, nous avons trouvé une réponse à ce qui est DOM dans JavaScript et aux niveaux DOM, et nous avons également parcouru les nœuds DOM. Dans cette section, nous passerons par les propriétés DOM et verrons comment pouvons-nous interagir avec eux. Chaque élément DOM a une valeur liée à celui-ci, comme la balise "P", la propriété texte, la balise IMG a l'image et ainsi de suite. Les méthodes JavaScript sont utilisées pour accéder aux valeurs des nœuds. De plus, vous pouvez ajouter / supprimer les écouteurs d'événements aux éléments DOM.
Vous pouvez trouver les Propriétés**DOM suivantes**:
* * InnerHtml**: Cette propriété est utilisée pour définir ou récupérer le contenu HTML d'un nœud DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
* * InnerText**: Utilisez cette propriété DOM pour accéder ou définir le contenu textuel d'un élément HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
* * Parentement**: Vous pouvez utiliser cette propriété pour accéder au nœud parent de l'élément.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
* * Style**: Mettez à jour l'attribut de style d'un élément.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
* * Titre**: Utilisez cette propriété pour mettre à jour l'élément de titre de Dom.
```
document.getElementById("customID").title= "this is a web page";
```
 Voici quelques-unes des méthodes que nous pouvons utiliser pour interagir avec JavaScript DOM:
* * addEventListener ()**: Cette méthode DOM est utilisée pour attacher un gestionnaire d'événements à un élément.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * getAttribute ()**: Cette méthode DOM est utilisée pour attacher un gestionnaire d'événements à un élément.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * GetElementById ()**: Méthode pour obtenir un élément spécifique avec le "ID" donné.
```
let element = document.getElementById("myID");
```
* * QuerySelector ()**: Utilisez cette méthode pour obtenir le premier élément enfant qui est apparié avec un sélecteur CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
* * toString ()**: Vous pouvez utiliser cette méthode pour convertir un élément en chaîne.
De même, il existe de nombreuses autres méthodes et propriétés que vous pouvez explorer.

## Conclusion
Nous terminons ce tutoriel Javasxcript ici avec l'espoir que vous avez une bonne compréhension de**ce qui est DOM dans JavaScript**. Nous avons également parcouru**les niveaux de DOM, DOM, les propriétés HTML DOM Tree et Dom**. Ce billet de blog est très essentiel pour les débutants qui cherchent à avoir une forte prise sur les concepts Javascrit. De plus, vous pouvez trouver d'autres articles pertinents dans la section "Voir aussi".

## Connecte-toi avec nous
Enfin, [contenerize.com] [5] propose des tutoriels JavaScript en cours sur divers sujets passionnants. Vous pouvez rester dans la boucle en nous suivant sur nos plateformes de médias sociaux, y compris [Facebook] [6], [LinkedIn] [7] et [Twitter] [8].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum] [9].

## FAQS
* * Qu'est-ce que Dom est utilisé dans JavaScript?**
Vous pouvez visiter ce [lien] [2] pour obtenir une réponse détaillée à cette question.

## Voir également
  * [Qu'est-ce que la promesse dans JavaScript? | Tutoriel javascript] [10]
  * [Qu'est-ce que l'informatique sans serveur? | Architecture sans serveur] [11]
  * [Qu'est-ce que la multiplication? | Pourquoi une approche multi-locataire?] [12]
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative] [13]
  * [Qu'est-ce que Async attend en javascript? | Un guide JavaScript] [14]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode GPT] [15]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution AI] [16]
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que l'AI?] [17]
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
