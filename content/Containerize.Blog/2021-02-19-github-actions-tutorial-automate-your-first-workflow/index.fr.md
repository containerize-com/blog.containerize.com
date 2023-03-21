---
title: "Tutoriel des actions GitHub | Automatisez votre premier workflow" 
seoTitle: "Tutoriel des actions GitHub | Automatisez votre premier workflow" 
description: "Suivez ce didacticiel GitHub Actions pour explorer que comment pouvons-nous utiliser des actions GitHub pour automatiser et exécuter nos flux de travail de développement de logiciels à partir de notre référentiel." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub a introduit des actions GitHub qui vous permettent de configurer l'intégration continue & amp; Déploiement continu à l'aide d'un fichier de configuration directement dans votre dépôt GitHub." 
url: /fr/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub a introduit des actions GitHub qui vous permettent de configurer l'intégration continue et le déploiement continu à l'aide d'un fichier de configuration directement dans votre repo GitHub.

{{< figure align=center src="images/github-actions-workflows.png" alt="tutoriel des actions github">}}


## Aperçu
L'une des meilleures façons d'augmenter la productivité d'un projet logiciel est d'automatiser tout ce qui est manuel ou répétitif. Et vous pourriez être surpris de voir à quel point l'automatisation est facile d'implémenter lorsque vous utilisez un outil génial comme  **GitHub Actions ** . Depuis les derniers articles, j'écris sur [GIT][1], [Contrôle de version][1], et [Automation of Software Development Workflows][2], et sur [l'intégration continue et la livraison continue][3 ]. J'espère donc que maintenant, vous êtes bien conscient des référentiels et de la façon de les utiliser.
Dans le tutoriel  **GitHub Actions d'aujourd'hui ** , nous explorerons les actions GitHub et comment vous pouvez l'utiliser pour l'automatisation, la personnalisation des applications et pour exécuter vos workflows de développement logiciel dans votre référentiel. Alors, commençons
  *  **[Review Workflows CI / CD][4] ** 
  *  **[Quelles sont les actions GitHub][5] ** 
  *  **[Comprendre la syntaxe YAML][6] ** 
  *  **[Création de votre premier flux de travail][7] ** 
  *  **[Conclusion][8] ** 

## CI / CD Workflows   {#cicd}
CI / CD est une méthode de déploiements fréquents de vos projets de développement logiciel aux utilisateurs finaux à différentes étapes à l'aide de l'automatisation.  **L'intégration continue et le déploiement continu **  est plus une philosophie et l'une des meilleures pratiques pour les équipes DevOps à mettre en œuvre, pour fournir des changements de code plus fréquemment et de manière fiable.
 **L'intégration continue **  est un ensemble de pratiques qui encourage les équipes de développement à vérifier fréquemment le code de contrôle des versions. Et, pour chaque poussée vers le référentiel, vous pouvez créer un ensemble de scripts pour créer et tester automatiquement votre application. Ces scripts aident à réduire les chances d'introduire des erreurs dans votre application.
 **Déploiement continu **  est une longueur d'avance dans vos workflows CI / CD. Il a non seulement construit et teste votre application chaque fois qu'une modification de code est poussée vers la base de code, mais l'application est également déployée en continu sur votre serveur.

## Quelles sont les actions github   {# github-actions}
Dans la section de ce didacticiel GitHub Actions, nous saurons quelles sont les actions  **GitHub ** . Cependant, GitHub Actions est une API pour la cause et l'effet sur GitHub. Il est facile d'automatiser tous vos flux de travail logiciels, maintenant avec CI / CD. Vous pouvez concevoir n'importe quel flux de travail, basé sur n'importe quel événement, par exemple (push to a Branch, Pull Demande, etc.), tandis que GitHub gère l'exécution. Cependant, vous n'avez pas besoin d'écrire les actions par vous-même. Github a un marché intégré où les gens peuvent trouver des actions créées par d'autres personnes et les réutiliser si cela correspond à leurs besoins. GitHub Actions prend en charge Node.js, Python, Java, Ruby, Php, Go, Rust, .NET, et plus encore. Créer, tester et déployer des applications dans votre langue de choix.

## Syntaxe YAML   {#YAML}
Faisons d'abord familiariser avec les syntaxes et les terminologies des  **actions github ** .
  *  **Workflow: **  Étant donné que l'action GitHub fournit l'installation pour créer de bout en bout  **Intégration continue et déploiement continu **  Capacités, ce terme fait référence à ce point lorsque le flux commence à s'exécuter par l'outil CI.
  *  **Job ** : Ce terme fait référence à toutes les tâches dans un seul flux de travail. Un workflow contient plus d'un travail et il est nécessaire à tous de terminer leur exécution pour éviter l'échec.
  *  **Étape: **  Pour qu'un travail termine son exécution, il doit effectuer toutes les étapes intégrées.
  *  **Action: **  L'action est le sous-ensemble principal de l'étape et le plus petit sous-ensemble de workflow. Chaque étape se compose de plusieurs actions qui doivent être exécutées avec succès.
Comme vous pouvez le voir Workflow, Job, Step et Action sont interdépendants, et une exécution réussie de tout est nécessaire pour la réussite du pipeline CI / CD.

## Créer un workflow   {#workflow}
Dans un projet de développement de logiciels, l'un des problèmes de développement auxquels les équipes de développement sont confrontés est le format du code source et l'application des meilleures pratiques. Ce problème est plus évident pour les grandes équipes. Car ils impliquent plus de développeurs et tout le monde a son propre style de codes d'écriture. L'utilisation de packages Linter est donc très courante dans les équipes. Mais maintenant, avec  **GitHub Actions ** , vous pouvez réellement appliquer le linter chaque fois que quelqu'un pousse le code au repo GitHub.
Dans ce didacticiel GitHub Actions, vous ajouterez un workflow qui peluche plusieurs langages de codage à l'aide de l'action [GitHub Super-Linter][9]. Le workflow utilise Super-Linter pour valider votre code source chaque fois qu'un nouveau commit est poussé vers votre référentiel.
Depuis votre référentiel sur GitHub, créez un nouveau fichier dans le répertoire **. GitHub / Workflows  **nommé **  Superlinter.yml ** et copiez le contenu suivant dedans
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Pour exécuter votre flux de travail, engagez et poussez les modifications dans votre référentiel GitHub. Cet événement push déclenchera le flux de travail Superlinter. Et maintenant, vous pouvez voir les résultats de votre flux de travail en entrant dans l'onglet de l'action

{{< figure align=center src="images/actions-tab.png" alt="Tutoriel des actions github">}}

Dans la barre latérale gauche, cliquez sur le flux de travail que vous souhaitez voir.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="GitHub Actions Workflow">}}

Le flux de travail Super-Linter que vous venez d'ajouter des exécutions chaque fois que le code est poussé vers votre référentiel pour vous aider à trouver des problèmes dans votre code. Votre référentiel peut avoir plusieurs workflows qui déclenchent différents travaux en fonction de différents événements. Les actions GitHub peuvent vous aider à automatiser presque tous les aspects de vos processus de développement d'applications. Ce n'était qu'une introduction de base aux actions GitHub. Il existe des tonnes de [ressources][10] disponibles pour une connaissance approfondie des actions GitHub, que vous pouvez utiliser.

## Conclusion   {#conclusion}
Dans ce didacticiel  **GitHub Actions ** , nous avons appris  **Intégration continue et déploiement continu **  et  **Quelles sont les actions GitHub ** . Et, nous avons également exploré comment nous pouvons utiliser  **GitHub Actions **  pour créer un flux de travail CI / CD. Nous avons utilisé un simple flux de travail super-ligne à partir du marché des actions GitHub, pour découvrir toutes les incohérences dans notre base de code. Dans les prochains articles, nous explorerons les actions GitHub plus en profondeur. De plus, vous pouvez trouver d'autres articles de blog liés au  **Système de contrôle de version **  mentionné dans la section «Explorer» ci-dessous.
Enfin, [contenerize.com][11] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [logiciel de contrôle de version][12] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][13], [LinkedIn][14] et [Twitter][15].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Déploiement continu Gitlab | Comment ça marche?][16]
  * [Comprendre et apprendre les branches et tirer les demandes dans GIT][2]
  * [Logiciel de gestion des codes source | Qu'est-ce que Git?][17]
  * [Top 5 des systèmes de contrôle de version open source en 2021][18]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
