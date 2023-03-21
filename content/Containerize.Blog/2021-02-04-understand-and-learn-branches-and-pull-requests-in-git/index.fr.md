---
title: "Comprendre et apprendre les succursales et tirer les demandes de Git" 
seoTitle: "Comprendre et apprendre les succursales et tirer les demandes de Git" 
description: "Git est l'un des systèmes de contrôle de version les plus populaires. Dans cette EWE, vous comprendrez comment utiliser les branches Git et les demandes de traction." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch est la composante fondamentale du système de contrôle de version GIT. Nous explorerons différents modèles de branchement dans ce tutoriel" 
url: /fr/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## Git Branch est le composant fondamental du système de contrôle de version GIT. Nous allons explorer différents modèles de branchement dans ce tutoriel

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git Pull Demande les branches">}}

Dans notre [dernier article][1], nous avons appris les bases des systèmes de contrôle GIT et de version. Nous avons passé par étape par étape et avons appris à configurer un référentiel GIT. De plus, nous avons appris à ajouter des modifications à une branche et à les revenir au cas où vous voudriez annuler vos modifications. Maintenant que nous comprenons les bases des systèmes de contrôle des versions, en particulier Git. Donc, dans cet article de blog, nous allons discuter de la façon d'utiliser les succursales GIT et de tirer les demandes. Nous apprendrons différents flux de travail. Alors, commençons!
  * **[Quelles sont les branches git][2]** 
  * **[Créer / modifier les branches Git][3]** 
  * **[Qu'est-ce qu'une demande de traction][4]** 
  * **[Modèles de ramification Git populaires][5]** 
  * [**Conclusion** ][6]

## Quelles sont les branches git   {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="branches git">}}

Parlons des succursales et pourquoi avons-nous besoin de succursales et quelles sont les stratégies de branchement que nous pouvons utiliser pour travailler efficacement avec notre code. Comme son nom l'indique, une branche  ****  représente une ligne de développement indépendante à partir d'une racine.
Lorsque vous créez un référentiel, vous créez également une branche, que nous pouvons appeler une branche maître (ou par défaut). Nous pouvons commettre des modifications à notre branche principale. Mais au cas où vous auriez besoin de travailler sur une fonctionnalité et que vous ne souhaitez pas séparer votre code de la branche maître. C'est donc là que les branches vous aident. Ils vous ont permis de vous brancher puis de fusionner plus tard.

## Créer / Modifier les branches GIT   {#create}
```
git branch
```
La commande vous permet de créer, lister, renommer et supprimer les branches. Cela ne vous permet pas de basculer entre les branches, pour cela, nous devons utiliser la commande de caisse GIT. Ou si vous souhaitez fusionner vos modifications à une branche, vous devez utiliser la commande **git Merge** .
Il est important de comprendre que les succursales ne sont que des conseils pour les engagements. Lorsque vous créez une branche, tout ce que GIT doit faire est de créer un nouveau pointeur, il ne modifie aucune autre manière.
Utilisez la commande suivante pour créer une branche
```
git branch <branch-name>
```
Une fois que vous avez fini de travailler sur une branche et de l'avoir fusionné dans la base de code principale, vous êtes libre de supprimer la branche sans perdre d'historique en utilisant la commande suivante
```
git branch -d <branch-name>
```

## Qu'est-ce qu'une demande de traction   {#pull}
Une demande de traction est un moyen de soumettre une contribution à un projet logiciel à l'aide d'un système de contrôle de version tel que GIT. Les développeurs utilisent des demandes de traction pour proposer des modifications à une base de code. Une fois une demande de traction ouverte, vous pouvez discuter et consulter les changements potentiels avec les collaborateurs et ajouter des commits de suivi avant que vos modifications ne soient fusionnées dans la branche de base.
Lorsqu'un développeur ouvre une demande de traction, tout ce qu'il fait est de demander à un autre développeur, tire une branche de son référentiel dans son référentiel. Cela signifie qu'il doit fournir 4 valeurs d'entrée pour créer une demande de traction: le référentiel source, la branche source, le référentiel de destination et la branche de destination.

## Modèles de branchement populaires   {#Model}
Il existe un certain nombre de flux de travail de ramification qui sont utilisés par la communauté des développeurs dans le monde entier. Mais nous discuterons des trois modèles de branchement les plus populaires un par un

## # git flow
Gitflow Workflow est un flux de travail GIT qui aide à développer des logiciels continus et à mettre en œuvre des pratiques DevOps. Le flux GIT est le flux de travail le plus connu de cette liste. Il a été créé par [Vincent Driessen en 2010][7] et il est basé sur deux branches principales avec une vie infinie, ainsi que d'autres branches de support comme des fonctionnalités - \ *, hotfixes - \ * qui fusionnent ensuite dans la branche de développement en tant qu'individu Les articles sont terminés.
  * **Master**  - Cette branche contient du code de production. Tout le code de développement est fusionné dans la branche principale une fois prêt à être poussé à la production.
  * **Développer**  - Cette branche contient du code de pré-production. Lorsque les fonctionnalités sont terminées, ils sont fusionnés dans le développement.
Gitflow est parfaitement adapté aux projets qui ont un cycle de libération prévu. Cependant, l'histoire du GIT devient illisible.

## # glithub flow
Le flux GitHub est un flux de travail léger. Il a été créé par [Github][8] en 2011 et se concentre principalement sur le modèle Agile, où vous n'attendez pas un cycle de libération. Au lieu de cela, vous poussez les modifications à la production quotidiennement à mesure que les fonctionnalités sont complètes.
Github Flow suit les directeurs suivants:
  * Tout dans la branche «Master» est déployable.
  * Pour travailler sur quelque chose de nouveau, créez une branche séparée de Off Master avec un nom de description, par exemple le «téléchargement d'image»
  * Engagez-vous dans cette branche localement et poussez régulièrement votre travail vers la branche de même nom sur le serveur.
  * Lorsque vous avez besoin de commentaires ou d'aide, ou que vous pensez que la branche est prête à fusionner, ouvrez une [demande de traction][4]
  * Après son examiné et signé sur la fonctionnalité, vous pouvez le fusionner dans le maître
  * Une fois qu'il est fusionné et poussé vers «Master», il peut être déployé en production.

## # Flow Gitlab
Le Gitlab Flow est un workflow créé par Gitlab en 2014. Gitlab Flow est une alternative plus simple à Gitflow et combine le développement basé sur les fonctionnalités et les branches de fonctionnalités avec le suivi des problèmes. La principale différence entre l'écoulement Gitlab et le flux de github est l'utilisation de branches environnementales.
Les développeurs créent une branche **de développement**  et font de la défaut, tandis que GitLab Flow fonctionne immédiatement avec la branche «principale». Gitlab Flow intègre plusieurs branches de pré-production. Et ceux-ci peuvent être utilisés pour tester les trucs à différents niveaux. Par exemple, de la branche de test à l'acceptation, puis de l'acceptation à la production.

## Conclusion   {#conclusion}
Dans cet article, nous avons appris les succursales GIT et les demandes de traction. Nous avons étudié l'importance des demandes de traction et comment elles peuvent être utilisées dans divers workflows GIT. Nous avons également exploré brièvement différents modèles de ramification GIT.

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
