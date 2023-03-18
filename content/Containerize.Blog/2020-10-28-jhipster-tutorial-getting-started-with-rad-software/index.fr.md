---
title: "Tutoriel Jhipster | Début avec le logiciel RAD" 
seoTitle: "Tutoriel Jhipster | Début avec le logiciel RAD" 
description: "Un tutoriel Jhipster étape par étape pour les débutants pour commencer. Suivez cet article pour configurer la première application avec le logiciel Open Source Jhipster RAD." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Plongeons-nous dans un générateur de code source. Il propose des fonctionnalités prêtes à l'emploi pour générer des applications réactives basées sur le Web avec une API REST bien documentée." 
url: /fr/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Plongeons-nous dans un générateur de code source. Il propose des fonctionnalités prêtes à l'emploi pour générer des applications réactives basées sur le Web avec une API REST bien documentée.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="tutoriel Jhipster">}}


## Aperçu:
Nous avons récemment publié un [article de blog] [1] sur l'importance du [logiciel RAD] [2] à l'époque actuelle. La technologie évolue à un rythme très élevé. Les exigences et les besoins de l'entreprise changent de jour en jour. Il y a une race pour développer des solutions dans une période plus courte. D'un autre côté, chaque entreprise souhaite capturer le marché en lançant le produit dès que possible. Par conséquent, la communauté open source a développé de nombreux logiciels basés sur ** Agile Software Development **. Ces logiciels de développement d'applications rapides gratuits facilitent les utilisateurs avec des capacités de développement de prototypage rapide. Il vous permet de créer et de lancer la version initiale de votre produit et, par conséquent, vous pouvez développer d'autres versions avec la saisie des commentaires des utilisateurs. De plus, ces logiciels sont conçus pour absorber tout changement à tout stade du projet.
Pendant ce temps, les équipes de développement de logiciels accélèrent leurs processus de développement et s'assurent des livraisons antérieures. En fait, il est rentable, économe en temps et donne satisfaction aux développeurs et aux utilisateurs. Le développement rapide des applications est suffisamment flexible pour que vous n'ayez pas besoin de planifier et de stricter des délais. Vous construisez ce dont vos consommateurs finaux ont besoin. Dans ce didacticiel Jhipster, nous examinerons comment configurer [Jhipster] [3] et créer notre première application avec elle en couvrant les points suivants:
  * [Qu'est-ce que Jhipster et comment l'installer?] [4]
  * [Comment générer et exécuter une application de base?] [5]
  * [Explorez le tableau de bord administratif de l'application générée] [6]
  * [Conclusion] [7]

## Qu'est-ce que Jhipster et comment l'installer? {#installer}
[Jhipster] [3] est un logiciel RAD open source qui est utilisé pour générer des applications Web d'entreprise. Ce constructeur d'applications open source propose un framework de démarrage Spring basé sur Java sur les technologies frontales côté serveur et populaires telles que Angular, Vue.js et React.js. Ce générateur de code source comprend une architecture de microservice robuste avec plusieurs mécanismes d'authentification utilisateur tels que OAuth.20, JWTS et l'authentification de session HTTP. De plus, il fournit une version en ligne où les utilisateurs peuvent explorer toutes les fonctionnalités. Cet outil de prototypage open source ** est écrit en JavaScript avec une petite entrée de TypeScript. Par conséquent, une documentation complète est disponible concernant le développement et le déploiement. Les développeurs peuvent trouver le code source du repo [github] [8]. Il y a une prise en charge complète pour exécuter des tests à l'aide de frameworks de test populaires tels que Gatling et ProTractor. De plus, il est robuste, sécurisé, multiplateforme et prend en charge les intégrations tierces.
Dans ce tutoriel ** Jhipster, ** Nous explorerons Jhipster concernant sa configuration et son utilisation. [Jhipster] [3] est gratuit et construit au-dessus du modèle de développement des applications rapides. Il fournit un écosystème adapté aux développeurs qui est assez prometteur et propose de puissants outils de développement d'applications Web rapides.
Voyons comment pouvons-nous installer ce constructeur d'applications open source. Tout d'abord, nous installerons les conditions préalables suivantes.
  * [Java 11 JDK] [9]
  * [Node.js 10.20.1 +] [10]
Une fois l'installation terminée, ouvrez le terminal et exécutez la commande suivante.
`NPM Install -g Generator-Jhipster`
Cette commande peut prendre quelques minutes, et après avoir réussi, Jhipster sera installé sur votre machine.
Vous pouvez vérifier la commande suivante pour vérifier l'installation.
`JHIPSTER -VERSION`

{{< figure align=center src="images/install-1024x564.png" alt="Installation de Jhipster">}}


## Comment générer et exécuter une application de base? {#courir}
Dans la section de ce ** tutoriel Jhipster **, nous apprendrons à générer notre première application à l'aide de ce logiciel RAD open source.
Retournez à la fenêtre du terminal, exécutez les commandes suivantes:
`MKDIR 1STAPPCD 1STAPP /`
Après avoir fait des répertoires, exécutez la commande suivante mentionnée ci-dessous:
`Jhipster»
Cette commande lancera le processus. Répondez à toutes les questions concernant les préférences technologiques des applications telles que les technologies frontales et back-end, la base de données, le framework de test, et plus encore comme vous pouvez le voir dans l'image ci-dessous.

{{< figure align=center src="images/qst-1024x474.png" alt="tutoriel Jhipster">}}

Après avoir répondu à toutes les questions, ce générateur de code source générera des fichiers de code dans votre dossier.
Maintenant, exécutez l'application générée avec la commande suivante:
`. / mvnw`
Remarque: cette commande fonctionnera si vous avez choisi Maven comme build Automation pour le backend.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="tutoriel Jhipster">}}

Accédez à votre application dans le navigateur de http: // localhost: 8080 /.

## Explorez le tableau de bord d'administration de l'application générée {#dashboard}
Une fois que vous avez frappé http: // localhost: 8080 / Dans votre navigateur, vous verrez l'écran suivant.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="générateur de code">}}

Vous pouvez utiliser les informations d'identification mentionnées pour vous connecter en tant qu'administrateur. Jhipster offre deux rôles utilisateur par défaut. Après une connexion réussie, vous aurez les dispositions suivantes indiquées dans l'image.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Logiciel RAD open source">}}

Jhipster fournit une gestion complète des utilisateurs où vous pouvez gérer vos utilisateurs comme vous pouvez le voir dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Gestion des utilisateurs de Jhipster">}}

L'option de santé vous donne des informations sur votre espace disque et votre base de données.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="tutoriel Jhipster">}}

Il existe un système de journalisation complet disponible dans le tableau de bord de l'administration Jhipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Logiciel RAD open source">}}

Le tableau de bord d'administration de ce générateur d'applications open source fournit également des points de terminaison de repos des fonctionnalités intégrées et personnalisées.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster open source">}}


## Conclusion {#con}
C'est la fin de ce tutoriel Jhipster. Il existe de nombreuses plates-formes RAD open source qui fournissent ** le développement instantané des applications **. Il existe une communauté très dynamique qui est toujours vivante pour répondre aux problèmes et à leurs solutions. La méthodologie RAD gagne la renommée en raison de nombreux facteurs. Premièrement, il n'est pas nécessaire d'avoir une compréhension complète des exigences. Deuxièmement, le consommateur final est impliqué tout au long du cycle de vie du développement logiciel. Troisièmement, le facteur de risque est très moins car toutes les parties prenantes sont à bord. Cependant, les logiciels RAD sont adaptables, adaptés aux développeurs et flexibles aux changements. Il fait gagner beaucoup de temps car les générateurs de code permettent d'économiser un immense temps de réécriture des scripts répétitifs. Cet article ** [Jhipster] [3] Tutoriel ** L'article a mis en évidence quelques idées importantes. Il est léger et facile à configurer avec quelques commandes de shell simples.
N'hésitez pas à installer ce constructeur d'applications open source dès aujourd'hui si vous recherchez sérieusement une plate-forme de développement d'applications rapides open source. Enfin, [contenerize.com] [11] est prêt pour améliorer sa base de tutoriels avec des tutoriels plus intéressants. Veuillez rester connecté avec cette catégorie [développement rapide des applications] [2] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Plate-forme Cuba] [12]
  * [QuickApp] [13]
  * [Jhipster] [3]
  * [li3] [14]
  * [Apache Isis] [15]
  * [Top 5 des logiciels de développement d'applications rapides gratuits en 2021] [16]
  * [Logiciel rapide de développement des applications pour les entreprises | Rad] [17]
  * [Choses à revoir avant d'opter les logiciels open source en 2021] [18]
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
