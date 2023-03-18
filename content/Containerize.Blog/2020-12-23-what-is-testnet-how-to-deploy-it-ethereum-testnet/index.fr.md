---
title: "Qu'est-ce que TestNet et comment le déployer | Ethereum testnet '" 
seoTitle: "Qu'est-ce que TestNet et comment le déployer | Ethereum testnet" 
description: "Qu'est-ce que TestNet? Ce guide concerne la façon de configurer le nœud Ethereum sur localhost. La blockchain est un réseau de nœuds qui maintiennent l'historique de toutes les transactions." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum est un réseau de blockchain open source de nœuds connectés. Apprenons à déployer et à interagir avec le nœud Ethereum sur un serveur local." 
url: /fr/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum est un réseau de blockchain open source de nœuds connectés. Apprenons à déployer et à interagir avec le nœud Ethereum sur un serveur local.

{{< figure align=center src="images/ether.png" alt="Qu'est-ce que TestNet">}}

Dans nos précédents articles de blog, nous avons écrit sur plusieurs sujets qui incluent [Blockchain Technology for Business] [1], [Rédaction d'un contrat intelligent de base] [2] et [Posty Blockchain Plateformes] [3]. Il y a d'autres sujets sur lesquels nous écrirons dans un avenir proche car ** la technologie du grand livre décentralisé ** obtient un rythme avec le temps. Les gens commencent maintenant à s'intéresser aux plateformes de gestion des actifs numériques en raison de la sécurité et de la transparence. De plus, les transactions numériques sont traçables, immuables et de tels facteurs donnent confiance aux personnes concernant la fiabilité de cette technologie. Il existe trois types de blockchain publics, privés et autorisés. Cependant, les utilisateurs peuvent adopter n'importe quel type en fonction de leur cas d'utilisation.
L'avènement de cette technologie a apporté un énorme changement dans le secteur bancaire car elle a changé la voie des transactions financières. Dans cet article de blog, nous parlerons de la blockchain Ethereum concernant la mise en place du nœud Ethereum sur LocalHost et nous verrons comment interagir avec le réseau de test. Nous couvrirons les points clés suivants.
  * ** Qu'est-ce que TestNet? **
  * ** [Comment configurer Ethereum Blockchain?] [4] **
  * ** [Comment interagir avec Ethereum Blockchain?] [5] **
  * ** [Conclusion] [6] **

## Qu'est-ce que TestNet? {#tetstnet}
Dans cet article de blog, nous allons déployer un nœud Ethereum sur localhost. Ethereum a plusieurs réseaux, le réseau de production est appelé mainnet et le réseau utilisé à des fins de test est appelé testNet. La plupart des applications décentralisées sont basées sur [Ethereum] [7] Blockchain. Le contrat intelligent fait partie intégrante de cette infrastructure distribuée. De plus, Blockchain est un réseau d'ordinateurs appelés «nœuds». Cependant, chaque nœud contient une copie de la blockchain et participe donc au réseau. Ethereum Blockchain a également sa propre crypto-monnaie appelée «éther». Toutes les transactions sont sécurisées cryptographiquement. De plus, il s'agit d'une technologie complète du grand livre qui ne s'arrête jamais ou n'est pas corrompue. Il vous permet d'écrire des contrats intelligents et des applications décentralisées (DAPP) qui fonctionnent sur les nœuds blockchain Etherum.
Ce réseau blockchain distribué open source utilise un algorithme de consensus appelé preuve de travail (POW). En outre, l'architecture d'Ethereum comprend cinq couches telles que Ethereum Virtual Machine, Ethereum Client API, Smart Contracts, Ethereum nœuds et les applications utilisateur final. Ethereum Virtual Machine propose le logiciel et l'architecture qui reconnaissent les contrats intelligents. Les contrats intelligents sont le logiciel qui régit les transactions. Il y a un fort soutien pour Ethereum Blockchain et Fortune 500 que les entreprises ont montré un grand intérêt pour faire du développement à plus grande échelle en utilisant cette technologie. De plus, Ethereum est écrit dans la langue Go et son code source est disponible sur [GitHub] [8]. Toute la documentation est disponible concernant le déploiement et le développement car il a une communauté dynamique.

## Comment configurer Ethereum Blockchain? {#installation}
Maintenant, nous sommes conscients de ce qui est TestNet. Dans cette section, nous installerons le nœud Ethereum sur notre machine locale. Avant d'aller plus loin, assurez-vous d'avoir installé les conditions préalables suivantes.
  * [Homebrew] [9] (pour macOS)

  * [Go7] (brew install go)
Une fois les conditions préalables en place, veuillez exécuter la commande suivante pour cloner le code source:
```
git clone https://github.com/ethereum/go-ethereum
```
Sur un clone réussi, allez dans le répertoire:
```
cd go-ethereum
```
Maintenant, exécutez la commande suivante pour construire le programme Geth:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Note
{{_LINE_34_}}
  En cas d'erreur, veuillez installer Xcode en exécutant Xcode-Select - installer et réessayer
{{_LINE_36_}}
Ainsi, vous avez configuré toutes les conditions préalables et le code source. Par conséquent, exécutez la commande suivante pour démarrer le nœud:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Nœud Ethereum">}}


## Comment interagir avec Ethereum Blockchain? {#interagir}
Cette section parle de l'interaction avec un nœud Ethereum en cours d'exécution qui est entièrement synchronisé avec la blockchain. Nous pouvons utiliser le logiciel GETH pour interagir et envoyer des commandes au réseau de test.
Pour cela, incluons la variable Build / Bin / Geth dans $ Path Environment en exécutant les commandes suivantes:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Après cela, arrêtez le serveur que vous avez évoqué au-dessus et exécutez le réseau de test avec les indicateurs suivants:
Geth --TESTNET - rpc - rpcapi = "db, eth, net, web3, personnel, web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Qu'est-ce que TestNet">}}

Ensuite, vous devez ouvrir une nouvelle fenêtre de terminal et attacher la commande GETH au nœud en exécutant la commande suivante:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="Plateforme de gestion des actifs numériques">}}

Geth ouvrira une fenêtre de console où vous pouvez interagir avec le réseau de test. La commande suivante créera un compte qui contient la devise virtuelle et la paire de clés publiques / privées:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Technologie du grand livre décentralisé">}}

Pour vérifier votre compte, vous pouvez exécuter la commande suivante:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Qu'est-ce que TestNet">}}

De même, il existe de nombreuses commandes que vous pouvez utiliser pour interagir avec Ethereum Blockchain.

## Conclusion {#conclusion}
Voici la fin de ce tutoriel. Nous avons appris ** ce qui est TestNet ** et le processus de configuration du nœud Ethereum sur la machine locale. Ethereum Blockchain est une solution généralisée pour la plupart des applications décentralisées. La plupart des entreprises et des services gouvernementaux ont tendance à adopter cette technologie pour apporter la robustesse, la transparence, la disponibilité et la responsabilité. De plus, ce ** tutoriel de la blockchain ** vous aidera vraiment si vous prévoyez de commencer le développement sur Ethereum Blockchain car il exploite les contrats intelligents. Etheruem Blockchain est plus stable et populaire car il a des milliers de nœuds vivants. De plus, les entreprises peuvent facilement développer et déployer des réseaux de blockchain Ethereum sans passer du temps supplémentaire. L'autre facteur derrière la fiabilité d'Ethereum est qu'il offre le développement de contrats intelligents d'une manière que d'autres plates-formes de gestion d'actifs numériques ** n'offrent pas.
Les dernières mises à jour du réseau Ethereum ont rendu le réseau plus rentable et efficace. En fait, il y a beaucoup plus de matériel disponible sur le cloud qui démontre les aspects importants de Etheruem en ce qui concerne l'investissement et le développement. Pour les développeurs, il fournit un écosystème adapté aux développeurs avec des services publics préfabriqués. Pour les mineurs, il y a une prime sous la forme d'un éther chaque fois qu'ils exploitent un nouveau bloc dans la blockchain. En outre, [contenerize.com] [10] a publié de nombreux articles de blog techniques et tutoriels sur les produits open source populaires sur [blog.containerize.com] [11]. Par conséquent, restez connecté avec la catégorie [plates-formes blockchain] [12] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Ethereum] [7]
  * [Tissu hyperledger] [13]
  * [OpenChain] [14]
  * [Ripple] [15]
  * [Multichain] [16]
  * [CONSENSYS Quorum] [17]
  * [Comment configurer le réseau de blockchain de consensys localement] [18]
  * [Top 5 des plates-formes de blockchain open source en 2020] [3]
  * [Un guide de base sur la façon de créer un contrat intelligent Ethereum] [2]
  * [Comment la technologie décentralisée améliore votre stratégie commerciale] [19]
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[4]: #setup
[5]: #interact
[6]: #Conclusion
[7]: https://products.containerize.com/blockchain-platforms/ethereum
[8]: https://github.com/ethereum/go-ethereum
[9]: https://brew.sh/
[10]: https://www.containerize.com/
[11]: https://blog.containerize.com/
[12]: https://products.containerize.com/blockchain-platforms/
[13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[14]: https://products.containerize.com/blockchain-platforms/openchain
[15]: https://products.containerize.com/blockchain-platforms/ripple
[16]: https://products.containerize.com/blockchain-platforms/multichain
[17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
