---
title: "Logiciel de gestion des codes source | Qu'est-ce que Git?" 
seoTitle: "Logiciel de gestion des codes source | Qu'est-ce que Git?" 
description: "Qu'est-ce que Git? Git est un logiciel gratuit de gestion des codes source qui vous permet d'enregistrer, d'examiner les modifications de vos fichiers source et de gérer efficacement les projets." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "Dans cet article, nous explorerons ce qu'est Git & amp; Comment fonctionne Git? Git est un système de contrôle de version conçu pour gérer le code source, la piste & amp; Log versions." 
url: /fr/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## Dans cet article, nous explorerons ce que Git et comment fonctionne Git? Git est un système de contrôle de version conçu pour gérer les versions du code source, de la piste et du journal.

{{< figure align=center src="images/version-control-banner.png" alt="Logiciel de gestion du code source">}}


## Aperçu
Imaginez-vous en tant que développeur de logiciels travaillant sur un projet. Vous avez plus d'une personne qui y travaille. Et, il y a un seul fichier contenant le code source. Comme ils apportent tous des modifications au code, ils auront différentes versions du fichier chaque fois qu'ils apporteront une modification. Alors, maintenant, comment gérions-nous différentes versions du même fichier? C'est là que le logiciel de gestion des codes source entre en jeu. Il vous aide à gérer et à fusionner différentes versions du même fichier. Et même vous laisser reprendre l'historique du changement. Et vous pouvez toujours être sûr qui a apporté les modifications au fichier et quelles sont ces modifications.
Dans cet article, nous découvrirons le système de contrôle de version GIT. Comment vous pouvez l'utiliser pour gérer vos fichiers de code source de développement logiciel ou tout autre fichier. Alors, commençons.
  * ** [Qu'est-ce que le système de contrôle de version] [1] **
  * ** [Qu'est-ce que Git] [2] **
  * ** [Comment Git fonctionne] [3] **
  * ** [installer git] [4] **
  * ** [Configuration d'un référentiel] [5] **
  * ** [Enregistrer les modifications au référentiel] [6] **
  * ** [Vérifier le statut du référentiel] [7] **
  11
  * ** [Conclusion] [9] **

## Qu'est-ce que le système de contrôle de version {# version-contrôle}
Le contrôle de la version est un système qui enregistre les modifications d'un fichier ou d'un ensemble de fichiers au fil du temps afin que vous puissiez rappeler des versions spécifiques plus tard. Si vous êtes un développeur de logiciels et que vous souhaitez conserver les versions du fichier de code source, le logiciel de gestion des codes source est une chose très utile pour vous. Il vous permet de réintégrer les fichiers sélectionnés à un état précédent, de revenir à l'ensemble du projet à un état précédent, de comparer les modifications au fil du temps, de voir qui a modifié quelque chose qui pourrait causer un problème, qui a introduit un problème et quand, et plus encore. L'utilisation du contrôle de version signifie que vous n'avez jamais à vous soucier de perdre votre travail.

## Qu'est-ce que Git {#git}
Git est un système de contrôle de version libre et open-source conçu pour gérer tout, des petits à très grands projets avec vitesse et efficacité. Contrairement aux anciens systèmes de contrôle de version centralisée tels que SVN et CVS, le contrôle de version GIT est distribué. Chaque développeur a l'historique complet de son référentiel de code localement. Cependant, cela rend le clone initial un peu lent. Mais, après cela, tous les commits et autres opérations sont très rapides. Git vous permet d'avoir plusieurs branches locales qui peuvent être entièrement indépendantes les unes des autres.

## Comment fonctionne Git {#How}
À l'aide de GIT, vous pouvez apporter des modifications à votre référentiel local et le pousser vers un outil d'hébergement. Ou vous pouvez tirer les modifications des autres de l'outil d'hébergement à votre machine locale. Voici un aperçu de base du fonctionnement du logiciel de gestion de code source (GIT).
  1. Créez un «référentiel» avec un git n'importe quel outil d'hébergement (comme GitHub, GitLab ou Bitbucket)
  2. Clone le référentiel de votre machine locale
  3. Ajoutez un fichier à votre référentiel local
  4. Enregistrer (engager) les modifications de votre référentiel local
  5. «Poussez» vos modifications à votre branche principale sur un hébergement à distance
  6. Apportez une modification à votre fichier avec un outil d'hébergement GIT et engagez-vous
  7. «Tirez» les modifications de votre machine locale
  8. Créez une «branche» (version), effectuez un changement, engagez le changement
  9. Ouvrez une «demande de traction» (proposer des modifications à la branche maître)
 10. «fusionner» votre branche vers la branche principale

## installer git {#install}
Il existe différentes méthodes disponibles pour installer GIT sur votre ordinateur. Vous pouvez l'installer en tant que package ou via un autre installateur, ou télécharger le code source et le compiler vous-même.

### Installation sur Linux
Si vous souhaitez installer les outils Git de base sur Linux via un installateur binaire, vous pouvez généralement le faire via l'outil de gestion des packages fournis avec votre distribution. Pour Fedora (ou toute distribution basée sur le RPM liée, comme Rhel ou Centos), vous pouvez utiliser «DNF»
```
$ sudo dnf install git-all
```
Si vous êtes sur une distribution basée à Debian, comme Ubuntu, essayez "APT"
```
$ sudo apt install git-all
```

### Installation sur macOS
Il existe plusieurs façons d'installer GIT sur un Mac. Le plus simple est probablement d'installer les outils de ligne de commande Xcode. Sur Mavericks (10.9) ou plus, vous pouvez le faire simplement en essayant d'exécuter ** git ** du terminal la toute première fois.
```
$ git --version
```
Si vous ne l'avez pas déjà installé, cela vous invitera à l'installer.

## Configuration d'un référentiel {#Init}
Un référentiel GIT est un stockage virtuel pour vos fichiers de code. Il vous permet de stocker différentes versions de votre code, auxquelles vous pouvez accéder en cas de besoin.
Pour créer un nouveau dépôt, vous utiliserez la commande ** git init **. Git init est une commande unique que vous utilisez lors de la configuration initiale d'un nouveau dépôt. L'exécution de cette commande créera un nouveau sous-répertoire .git dans votre répertoire de travail actuel. Cela créera également une nouvelle branche ** maître **.

{{< figure align=center src="images/git-init-2.gif" alt="Qu'est-ce que Git">}}


## Enregistrer les modifications du référentiel {#Commit}
Maintenant que vous avez initialisé un référentiel, vous pouvez commettre des modifications de version de fichier.

{{< figure align=center src="images/git-add-commit-1.gif" alt="git engager">}}


## Vérifier le statut du référentiel {#Status}
La commande ** git status ** affiche l'état du répertoire de travail et la zone de stadification. Il vous permet de voir quels changements ont été mis en scène, qui ne l'ont pas fait et quels fichiers ne sont pas suivis par le logiciel de gestion des codes source (GIT). La sortie d'état ne vous montre aucune information concernant l'historique du projet engagé. Pour cela, vous devez utiliser le journal ** git **.

{{< figure align=center src="images/git-status-2.gif" alt="Logiciel de gestion du code source">}}

Git Log vous montrera la sortie suivante
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Retournez vos modifications {#revert}
Vous pouvez utiliser la commande GIT REVERT pour annuler un changement que vous avez déjà commis dans votre dépôt. Tout d'abord, utilisez la commande «Git Log» pour obtenir la liste des commits
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Ensuite, décidez quel engagement vous souhaitez revenir. Et, utilisez la commande git revert comme ci-dessous
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Comme vous pouvez le voir, Git Revert a créé un nouvel engagement qui annule les modifications qui ont été apportées dans le «deuxième engagement».

## Conclusion
Maintenant que vous avez lu l'intégralité de l'article où nous avons discuté de ce qui est Git et comment Git fonctionne, vous devez être conscient du logiciel de gestion des codes source. Quel est le but et pourquoi en avez-vous besoin. Nous avons exploré comment le GIT peut vous aider à gérer le code source de votre projet. Et, nous avons également appris à utiliser différentes commandes GIT pour initialiser et le référentiel, enregistrer vos modifications et comment annuler les modifications. Dans nos prochains tutoriels, nous explorerons davantage le GIT et partagerons comment nous pouvons utiliser différentes commandes pour mieux gérer votre code.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [** Automatiser les workflows de développement de logiciels avec des actions GitHub **] [10]
  * ** [Comment configurer un pipeline de déploiement continu avec GitLab CI / CD] [11] **
  * ** [Comprendre et apprendre les branches et tirer les demandes dans Git] [12] **
  * ** [Top 5 des systèmes de contrôle de version open source en 2021] [13] **
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
