---
title: "Intégration continue et déploiement continu à partir du serveur de contrôle source" 
seoTitle: "Intégration continue et déploiement continu à partir du serveur de contrôle source" 
description: "L'outil de déploiement gratuit aide les équipes de développement à automatiser les workflows de livraison de logiciels. Créer rapidement, tester, déployer des logiciels avec Jenkins et le référentiel GitHub." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Automatiser les workflows de développement à l'aide de l'outil de déploiement gratuit. Nous apprendrons comment configurer CI / CD avec Jenkins Automation Server et GitHub pour le déploiement de logiciels." 
url: /fr/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Automatiser les workflows de développement à l'aide de l'outil de déploiement gratuit. Nous apprendrons comment configurer CI / CD avec Jenkins Automation Server et GitHub pour le déploiement de logiciels.

{{< figure align=center src="images/ci-cd-post.png" alt="Intégration continue et déploiement continu">}}

Les équipes de développement utilisent différentes méthodes pour le déploiement de logiciels tels que FTP, tirant du code du référentiel et bien d'autres. Toutes ces méthodes sont effectuées manuellement et nécessitent beaucoup d'efforts. Nous pouvons voir que davantage d'équipes suivent la méthodologie Agile pour le développement de logiciels. Ainsi, ils publient fréquemment de nouvelles fonctionnalités et la fixation des bogues. Par conséquent, l'automatisation des workflows de livraison de logiciels aide les équipes pour lancer rapidement de nouvelles versions et sans erreurs. Nous apprendrons à utiliser ** CI / CD avec Jenkins ** et GitHub pour automatiser le processus de livraison du logiciel. Nous couvrirons les sections suivantes dans cet article.
  * [** Qu'est-ce que Jenkins? **][1]
  * [** Intégration continue **][2]
  * [** Déploiement continu **][3]
  * [** Configurer Jenkins **][4]
  * [** Créer Jenkins Job **][5]

## Qu'est-ce que Jenkins? {#Jenkins}
** Jenkins ** est un puissant outil de déploiement gratuit ** pour l'automatisation du processus de livraison du logiciel. Il s'agit d'un serveur d'automatisation open source pour la construction, les tests et le déploiement. Jenkins utilise l'architecture maître-esclave. Cela permet aux équipes logicielles d'exécuter simultanément plusieurs builds et tests de logiciels. De plus, il existe de nombreux plugins disponibles et les équipes peuvent les utiliser au besoin. Vous pouvez visiter la page [** Jenkins **][6] pour plus d'informations et d'installation. De plus, vous pouvez trouver le code source dans le référentiel Jenkins [** github **][7].

## Intégration continue {#ci}
** L'intégration continue ** est une pratique de développement qui oblige les développeurs à intégrer fréquemment le code dans un référentiel partagé. Chaque intégration / poussée du code dans le référentiel peut être vérifiée par build et tests automatisés. Il permet également aux développeurs d'identifier facilement les problèmes dans le code.

## Déploiement continu {#cd}
** Déploiement continu ** est l'étape suivante après l'intégration continue. Il permettrait aux équipes de déployer en continu le code sur le serveur. De plus, il aide les développeurs à réduire les tâches répétitives et à augmenter l'agilité.

## Configure Jenkins {#configure}
Suivez ci-dessous les directives étape par étape pour la configuration dans Jenkins.
  * Ouvrez votre site Jenkins et connectez-vous.
  * Installez le plugin «Publier sur SSH». Vous pouvez le rechercher en naviguant pour «gérer Jenkins → Gérer les plugins → Disponible».
  * Générez la clé SSH sur le serveur de construction en tant que «Jenkins» de l'utilisateur comme indiqué ci-dessous.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Connectez-vous au serveur cible / déploiement à l'aide de SSH. Exécutez la commande ci-dessous et collez le contenu du fichier pub sur le serveur Target.
```
$ cd .ssh
$ nano authorized_keys
```
  * Naviguez pour gérer «Jenkins → Configurer le système → Publier sur SSH».
  * Ajoutez une touche SSH soit en localisant le chemin du fichier ou collez le même contenu que pour le serveur de déploiement.
  * Ajoutez un serveur SSH en cliquant sur le bouton "Ajouter" à côté des "serveurs SSH".
  * Entrez le nom, le nom d'hôte, le nom d'utilisateur et le répertoire distant du serveur de déploiement / cible.
  * Cliquez sur le bouton de configuration de test pour vous assurer que Jenkins peut se connecter au serveur de déploiement.
  * Enfin, cliquez sur le bouton Enregistrer pour stocker les informations.

## Créer Jenkins Job {#create}
Vous pouvez utiliser ces étapes pour créer un travail Jenkins.
  * Ouvrez le tableau de bord Jenkins et cliquez sur le bouton «nouvel élément».
  * Entrez le nom du projet et choisissez «Freestyle Job».
  * Entrez l'URL du référentiel GitHub sous «Fenêtre de configuration».
  * Dans la section «Build Environment», vérifiez ces options «Supprimer l'espace de travail avant le démarrage de la construction» et «Envoyer des fichiers ou exécuter des commandes sur SSH après l'exécution de la construction».
  * Entrez le nom, les fichiers source et le répertoire distant dans l'environnement de construction.
  * Enregistrez le travail et construisez-le.
  * Connectez-vous au serveur de déploiement et assurez-vous que le code est là.

## Conclusion
Nous avons discuté du ** Jenkins Server **, ** Intégration continue **, et ** Déploiement continu ** dans cet article. Nous avons également appris à configurer le ** outil de déploiement gratuit ** et à créer un travail Jenkins pour le déploiement à l'aide de GitHub. L'outil CI / CD gratuit permet à l'équipe de développement d'automatiser les workflows de livraison de logiciels et de garder l'accent sur les emplois importants. Nous couvrirons d'autres outils de déploiement dans les prochains articles.
Enfin, [** contenerize.com **][8] publiera des articles sur d'autres outils de déploiement open source. Par conséquent, veuillez rester en contact avec [** les outils de déploiement **][9] Catégorie pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * ** [Jenkins][6] **
  * [** Drone **][10]
  * [** Déploieur **][11]
  * [** Capistrano **][12]
  * [** Rancher **][13]
  * [** hall **][14]
  * [** ANSIBLE **][15]
  * [** gocd **][16]
  * [** Top 5 des outils de déploiement open source en 2021 **][17]
  * [** Automatiser le déploiement des applications PHP avec le déploieur **][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
