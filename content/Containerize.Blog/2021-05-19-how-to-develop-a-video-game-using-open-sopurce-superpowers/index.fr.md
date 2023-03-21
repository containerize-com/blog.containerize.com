---
title: "Comment développer un jeu vidéo à l'aide de superpuissances ouvertes" 
seoTitle: "Comment développer un jeu vidéo à l'aide de superpuissances ouvertes" 
description: "Comment développer un jeu vidéo? Les SuperPowers sont un développement de jeux HTML5 open source. Il est transformable et permet aux utilisateurs de créer des jeux 2D et 3D animés." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Logiciel gratuit de conception de jeux vidéo pour le développement de jeux vidéo avec un mode hors ligne. Host-host, créez un animé 2D & amp; Jeux 3D avec des effets sonores et des polices." 
url: /fr/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Logiciel de conception de jeux vidéo gratuits pour le développement de jeux vidéo avec un mode hors ligne. Host-host, créez des jeux 2D et 3D animés avec des effets sonores et des polices.

{{< figure align=center src="images/superpowers.png" alt="Comment développer un jeu vidéo">}}


## Aperçu
Dans un autre passé, certains articles ont été publiés sur la catégorie [du logiciel de développement de jeux][1] qui comprend la façon dont l'industrie mondiale du jeu tirant parti des logiciels open source et du tutoriel GDELAVELAGE pour les débutants pour commencer le développement de jeux. Le développement de jeux vidéo est tellement plus répandu à travers le monde avec la demande croissante de jeux divertissants. Cependant, cela implique l'idée, le développement de conception, les tests continus, les versions et la rétroaction. En d'autres termes, il implique des concepteurs, des architectes de logiciels, des programmeurs, des testeurs et des ressources de support. De plus, il existe de nombreux types de jeux tels que des jeux d'action, des jeux de puzzle, des jeux de course, des jeux cognitifs et d'autres autres.
Par conséquent, un bon guide de développement de jeux est indispensable pour commencer à démarrer avec n'importe quel constructeur de jeux 3D. La communauté open source a développé de nombreux logiciels de développement de jeux qui offrent des fonctionnalités et des services publics au niveau de l'entreprise pour développer des jeux 3D et 2D. Ce didacticiel de développement de jeux HTML5 explorera comment développer un jeu vidéo à l'aide du logiciel de développement de jeux vidéo gratuit **SuperPowers**  en couvrant les points suivants.
  * **[Qu'est-ce que les superpuissances][2]** 
  * **[Comment configurer sur localhost?][3]** 
  * **[Tableau de bord des superpuissances?][4]** 
  * **[Conclusion][5]** 

## Qu'est-ce que les super-pouvoirs   {#intro}
[SuperPowers][6] est un logiciel open source pour le développement de jeux vidéo. Il est flexible, robuste et extensible. Cependant, il offre une prise en charge des animations, des modèles 3D et un large éventail d'exemples de jeux. De plus, il est également livré avec une version hors ligne où les utilisateurs peuvent créer des jeux sans aucune connectivité Internet. Publier n'importe quel projet est incroyablement facile et tout ce qui se passe en un seul clic. Il existe un tableau de bord intuitif pour les utilisateurs où les utilisateurs peuvent facilement naviguer dans divers éléments. Surtout, il y a un rapport d'erreur en direct très cool où il montre l'erreur au développeur pour éviter toute ambiguïté ou bug. Les super-pouvoirs sont faciles à configurer et nécessitent des exigences faciles pour héberger davantage sur les serveurs, ce constructeur de jeux 3D est écrit en typeScript et est livré avec toutes les documents concernant le développement et le déploiement. Par conséquent, tout le code source est disponible chez [GitHub][7].
SuperPowers propose les points clés suivants:
  * Rapports d'erreur en direct
  * Multilingue
  * Multiplateforme
  * Police riche et effets sonores
  * Hostomé

## Comment installer sur localhost?   {#installation}
Si vous vous demandez toujours comment développer un jeu vidéo, alors dans cette partie de l'article, nous apprendrons à créer des superpuissances sur localhost. Dans cette section, ce **Guide de développement du jeu**  va développer le processus de mise en place de l'environnement de développement du jeu.
Tout d'abord, assurez-vous d'avoir installé les pré-requis suivants avant de commencer le développement de jeux vidéo:
  * Git
  * npm
  * Node.js
Les exigences susmentionnées sont faciles et très connues, ce ne sera donc pas une tâche difficile pour les débutants. Une fois les exigences ci-dessus installées, ouvrez le terminal et exécutez la commande suivante pour cloner le code source:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Après un clone réussi, allez dans le répertoire téléchargé en exécutant la commande suivante:
```
cd superpowers/core
```
Maintenant, exécutez la commande suivante pour cloner le système de jeux SuperPowers:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Après cela, exécutez la commande suivante pour faire la construction:
```
npm run build
```
Lors d'une version réussie, démarrez le serveur en exécutant la commande suivante:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="Tutoriel de développement du jeu HTML5">}}

Ouvrez maintenant le navigateur et accédez à l'application au lien suivant:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Tableau de bord des superpuissances?   {#caractéristiques}
En frappant l'URL ci-dessus, vous verrez la page d'accueil suivante. Il existe des options pour modifier ou créer un nouveau projet de plateforme vide ou 2D.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Développement de jeux vidéo">}}

Pour aller de l'avant sur la question de savoir comment développer un jeu vidéo, vous verrez l'écran suivant après avoir créé un jeu de plateforme 2D. Vous pouvez voir les options sur le côté gauche de la fenêtre, comme la création de scènes, la définition de la tuile, la carte de jeu et le lecteur. Il existe une option de codage en direct où vous pouvez coder le comportement de l'utilisateur.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="développement de jeux vidéo">}}

De plus, il y a une barre de réglage sur le côté gauche où vous pouvez définir les animations, rendre, télécharger ou télécharger l'image. Sur le côté gauche, il existe une option pour ajouter plus d'actifs à votre projet comme indiqué dans l'image ci-dessous. Il comprend un modèle 3D CUBIC, l'option FINT si souhaite modifier la police. De plus, les utilisateurs peuvent ajouter d'autres scènes, scripts, shaders et sprites. De plus, ce constructeur de jeux Open Source 3D vous permet également d'ajouter divers effets sonores aux jeux pour attirer les joueurs avec les meilleurs effets sonores possibles. Enfin et surtout, il vous permet également d'ajouter des ensembles de carreaux et de carreaux.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="conception de jeux vidéo">}}

De même, après avoir parcouru cet article de jeu, vous pouvez l'explorer davantage et utiliser toutes les fonctionnalités. De plus, vous pourrez comprendre comment aller de l'avant à l'aide de SuperPowers Video Game Builder. Il existe un support en ligne disponible pour ce logiciel de développement de jeux.

## **Conclusion** {#conclusion}
Cela met fin à ce guide de développement de jeux HTML5. J'espère que ce billet de blog vous aidera si vous souhaitez commencer le développement de jeux vidéo. Nous avons exploré ce qui est des superpuissances, comment développer un jeu vidéo, qui est un constructeur de jeux 3D open source et nous avons également suivi sa procédure d'installation sur LocalHost. Il existe de nombreuses applications de conception de jeux vidéo open source ** qui permettent aux utilisateurs de construire des jeux à partir de zéro. Les programmeurs de jeux vidéo utilisent des principes de conception de jeux essentiels pour construire des jeux de haute qualité. Vous en apprendrez plus sur la construction de jeux 2D et 3D dans nos prochains articles sur [Blog.Containerize.com][8]. Il existe d'autres constructeurs de jeux 3D auto-hébergés et des articles pertinents mentionnés dans la section «Explorer» ci-dessous.
Enfin, Containerize.com écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [développement de jeux vidéo][9][][10] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][11], [LinkedIn][12] et [Twitter][13].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [][14][gdevelop][14]
  * [][14][Godot][15]
  * [][14][SuperPowers][6]
  * [][14][Cocos Creator][16]
  * [][14][panda3d][17]
  * **[Début avec le développement de jeux en utilisant des superpuissances][18]** 
  * **[Tutoriel de développement du jeu | Mouvement des joueurs dans gdevelop][19]** 
  * [**Comment faire un jeu sur Scratch en utilisant Open Source GDevelop** ][20]
  * **[Comment l'industrie mondiale des jeux en tirant parti des logiciels open source][21]** 
  11
  * [**Top 5 logiciels de développement de jeu gratuit en 2021** ][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
