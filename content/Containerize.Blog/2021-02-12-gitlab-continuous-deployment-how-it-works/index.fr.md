---
title: "Déploiement continu Gitlab | Comment ça fonctionne?" 
seoTitle: "Déploiement continu Gitlab | Comment ça fonctionne?" 
description: "Dans ce tutoriel, nous allons créer un pipeline de déploiement continu avec GitLab. Le déploiement continu GitLab aide les DevOps à effectuer le déploiement automatisé." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Le déploiement automatisé rationalise votre flux de travail & amp; processus. Ce didacticiel GitLab vous aide à apprendre à configurer un pipeline de déploiement continu à l'aide de GitLab CI / CD." 
url: /fr/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Le déploiement automatisé rationalise votre flux de travail et vos processus. Ce didacticiel GitLab vous aide à apprendre à configurer un pipeline de déploiement continu à l'aide de GitLab CI / CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Déploiement continu Gitlab">}}


## Aperçu
Dans les derniers articles, nous avons appris les [bases du contrôle des versions] [1], puis nous avons amélioré nos connaissances en apprenant différents [modèles de branchement] [2] et les flux de travail. Le système de contrôle des versions a apporté son efficacité dans le monde du développement, du déploiement et de l'intégration. Les développeurs trouvent super facile de commettre le code source sans se soucier des versions et des tests. L'industrie du logiciel a gagné en confiance et un avantage concurrentiel car cette approche a démarré les déploiements.
** Déploiement continu Gitlab ** et l'intégration aide à trouver facilement les problèmes. De plus, les développeurs peuvent suivre les bogues et autres manuploises MISS dans une période plus courte. Tout ce processus d'automatisation donne l'absence des tâches qui se déroulent fréquemment et réduit la main-d'œuvre et les chances d'erreurs. Aujourd'hui, dans cet article de blog, nous explorerons sur le pipeline de déploiement continu avec GitLab CI / CD. Alors, commençons par couvrir les points suivants!
  * ** [Qu'est-ce que CI & CD] [3] **
  * ** [Qu'est-ce que GitLab Runner] [4] **
  * ** [. Fichier Gitlab-Ci.yml] [5] **
  * ** [Créer une exemple de base de l'application] [6] **
  * ** [Conclusion] [7] **

## Qu'est-ce que CI & CD {#cicd}
L'intégration continue (CI) est l'une des meilleures pratiques DevOps pour automatiser l'intégration des changements de code de plusieurs contributeurs dans un seul projet logiciel. Cela permet aux développeurs de fusionner fréquemment les changements de code en un référentiel central où les builds et les tests sont ensuite exécutés. Le déploiement continu (CD) va plus loin en déploiant automatiquement du code dans l'environnement cible (production ou mise en scène) après que chaque code s'engage et se construit.
Avant de commencer, assurez-vous d'avoir un projet à GitLab pour lequel vous souhaitez utiliser CI / CD. Et vous devriez avoir un accès au maintien ou au propriétaire au projet.

## Qu'est-ce que GitLab Runner {#Runner}
Après avoir compris ** le déploiement continu Gitlab **, GitLab Runner est un petit programme léger écrit en Go qui exécute des travaux liés à l'intégration continue (CI) sur votre machine locale et envoie les résultats à Gitlab pour qu'il examine les modifications. Il s'agit d'un seul binaire exécutable qui peut être installé sur n'importe quel système d'exploitation majeur.
Avant d'aller de l'avant avec le GitLab CI / CD, vous devez vous assurer que les coureurs sont disponibles pour exécuter vos tâches. Vous pouvez suivre le guide officiel pour [installer] [8] et [Register] [9] GitLab Runner.

## .gitLab-ci.yml Fichier {#yml}
Le **. Gitlab-Ci.yml ** est un fichier où vous configurez des instructions spécifiques pour GitLab CI / CD. Il est placé à la racine de votre référentiel et contient des définitions de la façon dont votre projet doit être construit. Chaque fois que nous poussons un engagement sur notre instance GitLab, Gitlab invoquerait un coureur pour construire et tester le projet comme indiqué à l'intérieur de ce fichier.

## Créer un exemple d'application {#sample}
Dans la section de ce didacticiel ** gitlab **, nous créerons un exemple d'application. En supposant que vous avez déjà créé un référentiel GitLab, créons un exemple d'application et nous configurerons un processus CI / CD pour l'application.
Tout d'abord, créez un fichier package.json à la racine de votre projet
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Créez maintenant une app.js à l'origine de votre projet
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Dans la dernière étape du déploiement continu GitLab, ** Créez un ** dockerfile ** et ajoutez-y le contenu suivant:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile contient le processus de construction de cette application. Il s'agit de créer un conteneur de nœud et d'installer les dépendances.
Nous devons maintenant créer un fichier **. Gitlab-ci.yml **. Ce fichier contiendrait les instructions pour construire notre projet. Chaque fois que nous poussons un engagement dans notre référentiel GitLab, Gitlab invoquerait un coureur pour construire le projet.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Nous n'avons qu'une seule construction et il n'a que ** npm install ** en tant que script. Il s'agit d'une commande que vous devrez exécuter manuellement chaque fois qu'un changement arrive à votre projet. Et c'est là que le coureur Gitlab arrive et le ferait automatiquement pour vous chaque fois que vous vous engagez.
En supposant maintenant que vous avez déjà installé le coureur Gitlab et que vous l'avez également enregistré avec votre instance GitLab, nous pouvons tester le GitLab CI / CD en action en faisant un simple engagement dans l'application et en le poussant vers GitLab.
Vous pouvez ensuite ouvrir votre projet dans GitLab, accéder à My-Project → Pipeline et vous verrez une étiquette disant «passé» à côté de l'engagement que vous avez fait. Les commits suivants auront également des balises.

## Conclusion {#conclusion}
Cela nous amène à la fin de ce ** tutoriel Gitlab **. Dans cet article, nous avons appris les bases de l'intégration continue de Gitlab, ** Qu'est-ce que CI & CD **, ** Qu'est-ce que Gitlab Runner ** et le déploiement continu. De plus, nous avons étudié ce qui est l'utilisation des coureurs dans le flux de travail CI / CD global. Nous avons également créé un exemple de projet qui explique comment configurer un déploiement continu à l'aide de GitLab. Ce didacticiel GitLab vous aidera vraiment si vous recherchez ** GitLab Continuous Deployment **. Cependant, il existe de nombreuses autres ressources mentionnées dans la section «Explorer» ci-dessous que vous pouvez consulter. De plus, les articles concernent ** les systèmes de contrôle de version ** qui sont open source, auto-hébergés et extensibles.
Enfin, [contenerize.com] [10] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [] [] [11] [logiciel de contrôle de version] [12] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook] [13], [LinkedIn] [14] et [Twitter] [15].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Automatiser les workflows de développement de logiciels avec des actions GitHub] [16]
  * [Comprendre et apprendre les branches et tirer les demandes dans GIT] [2]
  * [Logiciel de gestion des codes source | Qu'est-ce que Git?] [17]
  * [Top 5 des systèmes de contrôle de version open source en 2021] [18]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source] [19]
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
