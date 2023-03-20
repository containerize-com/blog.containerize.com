---
title: "Tutoriel de contrat intelligent | Développement de la blockchain Ethereum" 
seoTitle: "Tutoriel de contrat intelligent | Développement de la blockchain Ethereum" 
description: "Ce tutoriel de contrat intelligent élabore les étapes de base pour créer des contrats intelligents Ethereum. Ethereum est un réseau blockchain open source, sécurisé et distribué." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum est une plate-forme mature pour créer des contrats intelligents et des applications décentralisées (DAPP). Suivez ces étapes pour créer, tester et déployer des contrats intelligents." 
url: /fr/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum est une plate-forme mature pour créer des contrats intelligents et des applications décentralisées (DAPP). Suivez ces étapes pour créer, tester et déployer des contrats intelligents.

{{< figure align=center src="images/contract.png" alt="tutoriel de contrat intelligent">}}


## Aperçu
Dans le passé récent, nous avons publié un [article de blog][1] qui met en évidence l'impact et l'importance de la technologie de la blockchain. Il y a un autre article de blog intéressant [Qu'est-ce que NFT? | Des jetons non fongibles expliqués][2]. La technologie du grand livre distribué est basée sur certains concepts de base tels que les contrats intelligents, les nœuds, l'exploitation minière, les algorithmes de consensus, les transactions numériques et les réseaux entre pairs. Comme il est open source, il existe donc une énorme fenêtre pour une extension concernant les cas d'utilisation. En fait, il existe de nombreuses plateformes de gestion des actifs numériques open source et gratuites qui sont distribuées et nécessitent un logiciel pour régir les transactions.
Dans ce tutoriel de contrat intelligent, nous apprendrons à créer un contrat intelligent Ethereum en couvrant les puces suivantes.
  * [** Qu'est-ce qu'un contrat intelligent? **][3]
  * [** Comment créer un contrat intelligent de base? **][4]
  * [** Comment exécuter et déployer un contrat intelligent? **][5]
  * [** Conclusion **][6]

## Qu'est-ce qu'un contrat intelligent? {#quoi}
Un contrat intelligent est un programme qui s'exécute sur la blockchain pour régir les transactions numériques. Ce morceau de code contient les règles et procédures définies qui s'assurent la transparence d'une transaction. Chaque contrat intelligent contient une adresse et cette adresse est utilisée pour accéder à toute fonction d'un contrat intelligent particulier. De plus, les contrats intelligents apportent la transparence, la confiance et la sécurité dans le réseau de blockchain. Ces pièces de code s'exécutent automatiquement une fois que certaines conditions sont remplies.
Cependant, tout développeur peut rédiger un contrat intelligent et le déployer sur le réseau. De plus, les contrats intelligents rendent les processus assez robustes car il n'y a pas de dépendance impliquée dans l'exécution de ces pièces de code. De plus, les contrats intelligents stockent les informations nécessaires liées à chaque transaction que les participants peuvent récupérer et vérifier. De nombreuses industries telles que Healthcare, Banking, adoptent fortement cette technologie de registre distribué. Les institutions gouvernementales souhaitent également déployer des applications décentralisées (DAPP) pour apporter l'authenticité et la transparence dans le système électoral. Il existe de nombreuses [plates-formes de blockchain][7] comme [Ethereum][8], [Ripple][9], [Corda][10], et encore plus, cependant, dans ce guide, nous créerons notre premier contrat intelligent sur Ethereum.

## Comment créer un contrat intelligent de base? {#construire}
Dans cette section du tutoriel de contrat intelligent, nous verrons les étapes pour configurer l'environnement pour notre premier contrat intelligent.
Les contrats intelligents peuvent être écrits en plusieurs langues, mais nous utiliserons [Solidity][11] qui est un langage de haut niveau pour rédiger des contrats intelligents.
Nous utiliserons [Ethereum Studio][12] qui est un IDE basé sur le Web. Il est utilisé pour rédiger des contrats intelligents ainsi que des applications décentralisées pour interagir avec les contrats intelligents. Il fournit des modèles de projet prédéfinis où vous pouvez commencer à écrire votre logique immédiatement.
Alors, ouvrez le [Ethereum Studio][12] IDE dans le navigateur et vous verrez l'interface suivante.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Tutoriel de contrat intelligent">}}

Choisissons l'option «Hello World» et créons notre premier projet. Vous pouvez voir la structure du répertoire. De plus, il y a une fenêtre de sortie sur le côté droit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Tutoriel de contrat intelligent">}}

Il y a deux dossiers «application» et «contrats».
Le dossier de l'application appartient à l'application Web et contient les fichiers suivants.
  * ** app.css **: pour le style de mise en page
  * ** app.html **: pour la page d'accueil
  * ** app.js **: contient la logique métier pour connecter le front-end avec le contrat intelligent
De même, le dossier Contracts contient le fichier source du contrat.
Maintenant, ouvrons le fichier helloworld.sol qui peut être trouvé dans des fichiers / contrats / helloworld.sol. Fondamentalement, il s'agit du fichier principal qui contient le code du contrat intelligent écrit en solidité. Vous pouvez modifier le code si vous le souhaitez, nous le laisserons tel quel.

## Comment exécuter et déployer un contrat intelligent? {#déployer}
Dans cette section du tutoriel de contrat intelligent, nous verrons comment exécuter et déployer un contrat intelligent. Ethereum Studio compile le code de solidité en code d'octets. Par conséquent, enregistrez le code et déployons notre premier contrat intelligent.
Sur le panneau de gauche, appuyez sur l'icône de fusée.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Qu'est-ce qu'un contrat intelligent">}}

Vous pouvez configurer et définir les valeurs initiales de votre contrat intelligent comme indiqué ci-dessous.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Contrat intelligent Ethereum">}}

Appuyez sur le bouton «Enregistrer» et appuyez sur le bouton «Déployer» pour déployer le contrat intelligent. Vous verrez la sortie suivante et un message dans la fenêtre de la console en bas. La fenêtre de la console donne des détails tels que l'adresse du contrat intelligent, nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Qu'est-ce qu'un contrat intelligent">}}

Après cela, il y a une autre option sur le panneau sur le côté gauche et c'est l'option Interact. Cette option vous permet d'interagir avec votre contrat intelligent en appelant sa fonction et en passant des valeurs.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Qu'est-ce qu'un contrat intelligent">}}

De plus, il existe une application frontale qui permet aux utilisateurs d'interagir avec le contrat intelligent du navigateur. Cette application Web est appelée une application décentralisée. Vous pouvez passer la valeur et voir la fenêtre de la console.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Qu'est-ce qu'un contrat intelligent">}}


## Conclusion {#con}
Cela nous amène à la fin de ce tutoriel de contrat intelligent. J'espère que cet article vous a aidé à comprendre les étapes clés de la construction et du déploiement du contrat intelligent Ethereum. Alors que la technologie de la blockchain évolue à un rythme élevé, il est temps d'obtenir une forte pratique pratique sur le système d'écho de la blockchain. Cette technologie de registre distribuée est hautement configurable et extensible. Ce billet de blog vous aidera vraiment si vous êtes prêt à apprendre le développement de contrats intelligents. De plus, il existe de nombreux tutoriels utiles et plates-formes de gestion des actifs numériques open source mentionnées dans la section «Explorer» ci-dessous.
En fin de compte, [contenerize.com][13] est entièrement dédié à la compilation de la liste des logiciels open source. Il existe de nombreux tutoriels et articles de blog sur les logiciels open source et un certain nombre de articles de blog sont en cours. Par conséquent, veuillez rester en contact avec la catégorie [plates-formes blockchain][7] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Ethereum][8]
  * [Tissu hyperledger][14]
  * [OpenChain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [CONSENSYS Quorum][18]
  * [Qu'est-ce que NFT? | Jetons non fongibles expliqués][2]
  * [Comment configurer le réseau de blockchain au quorum consensys localement][19]
  * [Top 5 des plates-formes de blockchain open source en 2020][20]
  * [Un guide de base sur la façon de créer un contrat intelligent Ethereum][21]
  * [Comment la technologie décentralisée améliore votre stratégie commerciale][22]
  * [Comment configurer le réseau de blockchain au quorum consensys localement][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
