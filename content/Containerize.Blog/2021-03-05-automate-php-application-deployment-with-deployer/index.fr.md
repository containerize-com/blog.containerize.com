---
title: "Automatiser le déploiement des applications PHP avec le déploieur" 
seoTitle: "Automatiser le déploiement des applications PHP avec le déploieur" 
description: "Déployez l'application PHP avec l'outil de déploiement open source et automatiser les workflows de déploiement. Libérez facilement les fonctionnalités et le retour à la version précédente." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Automatisez le processus de déploiement des applications PHP avec l'outil de déploiement PHP. Nous apprendrons comment configurer le déploieur et l'utiliser pour déployer une application PHP." 
url: /fr/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Automatiser le processus de déploiement des applications PHP avec l'outil de déploiement PHP. Nous apprendrons comment configurer le déploieur et l'utiliser pour déployer une application PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Outil de déploiement PHP">}}

C'est un travail très critique pour déployer une application sur le serveur après le développement. De nouvelles fonctionnalités et correctifs de bogues sont souvent publiés par les équipes. Ainsi, il est préférable pour les équipes d'éliminer les travaux manuels et d'automatiser le processus  **de déploiement du logiciel** . Cela permettrait aux équipes logicielles de se concentrer sur des tâches plus importantes. Il existe plusieurs  **Open Source Deployment Tool**  là-bas, mais nous nous concentrerons sur **PHP Deployeur**  dans ce tutoriel. Nous couvrirons la section suivante dans cet article.
  * [  **Qu'est-ce que le déploieur**  ][1]
  * [  **Installation de déploieur**  ][2]
  * [  **Déployer l'application PHP**  ][3]
  * [  **Conclusion**  ][4]

## Qu'est-ce que le déploieur {#What}

[  **Deployeur** ][5] est un outil de déploiement PHP gratuit et open-source  **. Il permet aux équipes logicielles d'automatiser les workflows de déploiement pour les applications basées sur PHP. Il est très simple à installer et facile à utiliser. Quiconque, du débutant au niveau d'experts, peut rapidement l'utiliser pour déployer des applications PHP. Le déploieur est livré avec des recettes / scripts prêts à l'emploi pour les cadres PHP populaires, les CMS et les logiciels de panier. De plus, vous pouvez faire**  Laravel Deployment  **avec cet outil de déploiement open source**  . Le développeur peut utiliser des recettes intégrées pour leurs projets et les utiliser pour le déploiement. De plus, vous pouvez facilement créer un script d'installation / déploiement avec l'assistant  **PHP Deployeur**  . De plus, cet **outil de déploiement gratuit**  offre d'excellentes fonctionnalités telles que les déploiements à zéro-inverse, le retour à la version précédente, SSH, parallèle d'exécution et bien d'autres.

## Installation du déploieur {#Installing}

  * Le déploiement dépend de PHP. Vous devez vous assurer que PHP s'exécute sur votre serveur. Cependant, vous pouvez utiliser la commande ci-dessous pour installer PHP sur Ubuntu.
```
sudo apt-get install php
```
  * Exécutez les commandes ci-dessous une par une pour installer le déploieur.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Déployer l'application PHP {#Deploy}

Suivez les directives étape par étape pour  **déployer l'application PHP**  avec le déploiement.
  * Créez un répertoire pour le déploiement et accédez au répertoire nouvellement créé.
```
sudo mkdir deployer
cd deployer
```
  * Exécutez la commande ci-dessous pour générer un script d'installation
```
dep init
```
  * Vous serez invité avec l'écran ci-dessous. Il s'agit d'un assistant de déploiement pour créer un script d'installation de base.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Tout d'abord, vous devez sélectionner le type de projet en entrant un numéro. Vous pouvez entrer 0, si vous n'êtes pas sûr du type de projet ou de vous familiariser simplement avec le déploiement.
  * Deuxièmement, vous devez fournir un chemin de référentiel GIT. C'est une étape facultative, vous pouvez le sauter et ajouter un chemin plus tard.
  * Dans la dernière étape, vous pouvez partager des informations avec la communauté de déploieurs en sélectionnant oui ou entrez non pour le sauter.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
Vous devez modifier les variables suivantes pour déployer votre application PHP.
  *  **set («Application», «my_project»);**  - Définissez le nom de l'application.
  *  **set («Repository» »,»);**  - Set Git Repository Path comme «git@github.com: masood / premier-appo --with-deployer.git». Vous devez définir la clé de déploiement dans votre référentiel GitHub. Vous pouvez rechercher comment créer une clé SSH sur Server, si vous ne le savez pas.
  ***hôte («project.com»)
    -> set (‘deploy_path’, ‘~ / {{application}}’);**- définir le nom du projet et définir le chemin où vous souhaitez stocker des fichiers pour votre application. Il ressemblerait à / var / www / html / déploieur.
Enfin, exécutez la commande ci-dessous pour déployer votre application PHP.
```
dep deployer
```
Si vous trouvez des problèmes avec la nouvelle version et que vous souhaitez reculer les modifications. Vous pouvez le faire en exécutant simplement la commande ci-dessous.
```
dep rollback
```

## Conclusion {#Conclusion}

Nous avons discuté du déploiement et de la façon de l'installer dans ce tutoriel. De plus, nous avons créé des directives complètes pour le déploiement d'applications basées sur PHP à partir du référentiel GitHub. Espérons que ce billet de blog vous aidera à démarrer  **Déployer l'application PHP**  avec le déploieur. De plus, nous écrivons plus sur cet outil de déploiement PHP****dans les didacticiels à venir.
Enfin, [  **contenerize.com** ][6] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [ **outils de déploiement**  ][7] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [  **Déploieur**  ][8]
  * [  **Jenkins**  ][9]
  * [  **Drone**  ][10]
  * [  **Capistrano**  ][11]
  * [  **Rancher**  ][12]
  * [  **hall**  ][13]
  * [  **ANSIBLE**  ][14]
  * [  **gocd**  ][15]
  * [  **Top 5 des outils de déploiement open source en 2021**  ][16]
  * [  **Intégration continue et déploiement continu à partir du serveur de contrôle source**  ][17]



 [1]: #What
 [2]: #Installing
 [3]: #Deploy
 [4]: #Conclusion
 [5]: https://deployer.org/
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/deployment-tools/
 [8]: https://products.containerize.com/deployment-tools/deployer
 [9]: https://products.containerize.com/deployment-tools/jenkins/
 [10]: https://products.containerize.com/deployment-tools/drone/
 [11]: https://products.containerize.com/deployment-tools/capistrano/
 [12]: https://products.containerize.com/deployment-tools/rancher/
 [13]: https://products.containerize.com/deployment-tools/concourse/
 [14]: https://products.containerize.com/deployment-tools/ansible/
 [15]: https://products.containerize.com/deployment-tools/gocd/
 [16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
 [17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
