---
title: "Comment configurer le réseau de blockchain de consensys au quorum localement" 
seoTitle: "Comment configurer le réseau de blockchain de consensys au quorum localement" 
description: "Suivez ce guide pour en savoir plus sur le processus d'installation de la blockchain de consensys quorum sur localhost. Ansensys Quorum est la blockchain open source basée sur Etherum." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Établissez votre propre réseau de blockchain public / privé pour gérer et surveiller les transactions numériques commerciales. Apprenons à configurer le quorum consensys sur localhost." 
url: /fr/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Établissez votre propre réseau de blockchain public / privé pour gérer et surveiller les transactions numériques commerciales. Apprenons à configurer CONSENSYS Quorum sur LocalHost.

{{< figure align=center src="images/quorum.png" alt="CONSENSYS Quorum">}}


## Aperçu
Dans le passé récent, nous avons publié des articles de blog sur certains sujets liés à la blockchain tels que [Top 5 Open Source Blockchain Plateformes en 2020][1], [un guide de base sur la façon de créer un contrat intelligent Ethereum][2], [comment décentralisé La technologie améliore votre stratégie commerciale][3] et [un guide débutant pour configurer le nœud Ethereum sur localhost][4]. Dans cet article, nous verrons comment configurer le réseau Blockchain Quorum Ansensys sur LocalHost en couvrant les points suivants.
  * **[Une brève introduction de consensys quorum][5]** 
  * **[Quelles sont les pré-requis et  **Procédure d'installation ** ?][6]** 
  * **[Comment démarrer le réseau?][7]** 
  * **[Conclusion][8]** 

## **Une brève introduction de consensys quorum** {#introduction}
[CONSENSYS Quorum][9] est une plate-forme open source basée sur **Decentralized Ledger Technology **. Cependant, il fournit un environnement complet adapté aux développeurs pour construire des applications basées sur la blockchain qui gèrent les transactions rapides et à haut débit. Il est basé sur  **Ethereum ** , extensible et propose de nombreux plugins. De plus, ce système distribué open source est livré avec des normes de haute sécurité et de confidentialité. De plus, il existe de nombreuses fonctionnalités puissantes telles que les API d'autorisation et la surveillance. De plus, cette  **plate-forme DLT**   est auto-hébergée et fournit une documentation détaillée concernant le développement et le déploiement. Le code source de ce logiciel libre est disponible chez [GitHub][10].
Ansensys Quorum offre les caractéristiques importantes suivantes:
  * Architecture enfichable
  * Basé sur Ethereum
  * Sécurisé
  * Hostomé
  * Réseau public / privé
[En savoir plus sur le consensys quorum][11]

## ****Quelles sont les pré-requis et la procédure d'installation? **** {#Pre-Requisites}
Dans cette section, nous installerons les dépendances requises et configurerons l'environnement local. Avant d'aller à l'étape suivante, assurez-vous que vous avez installé les pré-requis suivants:
  * Nodejs v10 +
  * Docker
  * Docker-Compose
Une fois les conditions préalables à l'installation, exécutez la commande suivante pour démarrer l'utilitaire QuickStart basé sur CLI.
```
npx quorum-dev-quickstart
```
Cependant, répondez aux questions pour compléter l'installation comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="CONSENSYS Quorum">}}


## ****Comment démarrer le réseau? **** {#Start}
Maintenant, nous avons le code source en place. Ainsi, la prochaine étape consiste à rendre le réseau en direct.
Exécutez la commande suivante pour accéder au répertoire racine.
```
cd quorum-test-network
```
Après cela, exécutez la commande suivante pour démarrer tous les conteneurs Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="CONSENSYS Quorum">}}

Une fois que tous les conteneurs Docker sont opérationnels, vous pouvez accéder à l'explorateur de blocs à l'adresse suivante:
```
http://localhost:25000
```
[] ()
De plus, vous pouvez interagir avec l'explorateur de blocs comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Système distribué open source">}}

De même, vous pouvez arrêter l'ensemble du réseau en exécutant la commande suivante:
```
./stop.sh 
```

## Conclusion   {#conclusion}
C'est la fin de ce tutoriel. Surtout, le Consensys Quorum basé sur Ethereum est une **technologie financière numérique**  spécialement développé pour les cas d'utilisation financière. Il a un algorithme de consensus basé sur le vote. Cependant, le principal motif de cette technologie décentralisée est de créer des solutions efficaces pour les entreprises.
Enfin, [Containerize.com][12] a publié de nombreux articles de blog techniques et tutoriels sur les produits open source populaires sur [blog.Containerize.com][13]. Par conséquent, respectez la catégorie [plates-formes blockchain][14] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Ethereum][15]
  * [Tissu hyperlédger][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [CONSENSYS Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
