---
title: "Que sont les types de données JavaScript? | Un guide pour débutant" 
seoTitle: "Que sont les types de données JavaScript? | Un guide pour débutant" 
description: "Que sont les types de données JavaScript? Suivez ce guide de débutant pour apprendre 7 types de données utilisés dans le numéro JavaScript, String, Boolean, Null, Undefined, et plus encore." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "La popularité de JavaScript est imparable en raison de son adaptabilité. Suivez ce guide du débutant JavaScript et commencez à nourrir votre expertise dans JS Stack." 
url: /fr/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## La popularité de JavaScript est imparable en raison de son adaptabilité. Suivez ce guide du débutant JavaScript et commencez à nourrir votre expertise dans JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Que sont les types de données JavaScript? | Un guide pour débutant">}}


## Aperçu
Peu importe que vous soyez un développeur médiocre ou un développeur expérimenté, vous obtiendrez les solutions à vos problèmes à venir pendant les emplois de développement. [contenerize.com] [1] a commencé à écrire des articles de blog de tutoriel dans la catégorie de programmation et nous commençons par un**JavaScript Beginner’s Guide**. Puisque nous commençons, cet article concerne les types de données JavaScript. Explorons**quels sont les types de données JavaScript**et voyons des exemples de la façon de les utiliser dans le code source efficacement. Par conséquent, parcourez soigneusement le guide de ce débutant afin que vous puissiez avoir une bonne compréhension des types de données JavaScript**.
Nous couvrons le point suivant:
  * [Qu'est-ce qu'un type de données?] [2]
  * [Quels sont les types de données JavaScript?] [3]

## Types de données expliqués | Qu'est-ce qu'un type de données? {# What-is-a-data-type}
Un type de données consiste à dire au compilateur comment interpréter ou compiler les données. L'utilisation des types de données est critique et doit être utilisée judicieusement. En termes simples, il s'agit du format des données telles que le nombre, la chaîne, le booléen et plus encore. Cependant, il existe deux catégories de types de données types de données primitifs et types de données non primitives. Il existe huit types de données primitifs que nous allons passer dans la section suivante.

## Quels sont les types de données JavaScript? {# What-are-javascript-data-type}
En fait, JavaScript est un langage dactylographié vaguement, ce qui signifie que vous n'avez pas à définir explicitement le type de variable. Vous pouvez attribuer n'importe quelle valeur à une variable et cette variable stockera cette valeur telle que String, BigInt, Boolean ou plus.

{{< figure align=center src="images/web-development.png" alt="Guide du débutant JavaScript">}}


#### Types de données primitives
Les types de données primitifs sont ceux qui sont immuables et ne peuvent pas être modifiés après la création et l'initialisation. Cependant, vous pouvez réaffecter une nouvelle valeur mais ne peut pas muter la valeur existante.
Par exemple:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Dans l'exemple ci-dessus, String est un type de données primitif et l'ancienne valeur est remplacée par la nouvelle valeur, mais la variation de la valeur existante n'est pas reflétée. Donc, nous pouvons voir que c'est toujours «mon nom est modifié» et non «mon nom est changé»;

#### Types de données non primitives
Les types de données non primitifs sont mutables, en mots simples en face des types de données primitifs.
Par exemple:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
De plus, les types de données primitifs sont comparés par valeur et les types de données non primitifs sont toujours comparés par référence.
Par exemple:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Maintenant, passons par les types de données un par un. Il existe 6 types de données primitifs et 1 type de données non primitif.
* * Les types de données primitifs incluent:**
  ***String**: Ce type de données représente des données textuelles qui consistent en une séquence de caractères entourée de citations.
  ***Numéro**: il représente des données décimales / non-décimales, en particulier entier ou flottante.
  ***Boolean**: Représentation des valeurs logiques vraies ou fausses.
  ***Symbole**: le symbole est utilisé pour contenir des valeurs uniques.
  ***Undefined**: une variable sans aucune valeur ou une variable non initialisée.
  ***NULL**: L'absence de toute valeur est considérée comme nul.
* * Le type de données non primitif comprend:**
* * Objet**: Il est utilisé pour stocker la collecte de données composées de paires de valeurs clés.

## Conclusion
Ceci est la fin de ce**Guide du débutant JavaScript**. Nous avons parcouru**Quels sont les types de données JavaScript**? De plus, nous avons exploré ce qui est un type de données en un mot. Vous devriez avoir une meilleure compréhension des types de données non primitifs et**Primitive**en JavaScript. Ce billet de blog vous aidera vraiment si vous cherchez à vous préparer à un entretien d'embauche.
Enfin, [contenerize.com] [1] écrit continuellement des articles de blog sur d'autres produits et sujets open-source. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook] [4], [LinkedIn] [5] et [Twitter] [6].

## Poser une question
Vous pouvez nous informer de vos questions ou de vos questions sur notre [Forum] [7].

## FAQS
* * Quels sont les 8 types de données JavaScript?**
Veuillez visiter ce [lien] [3] pour connaître les 8 types de données JavaScript.

## Voir également
  * [Frameworks JavaScript populaires gratuits et open source] [8]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source] [9]
  * [Top 10 des technologies open source à apprendre en 2022] [10]
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
