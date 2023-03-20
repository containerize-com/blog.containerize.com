---
title: "Début avec le développement de jeux à l'aide de superpuissances" 
seoTitle: "Début avec le développement de jeux à l'aide de superpuissances" 
description: "SuperPowers est un fabricant de jeux 3D open source avec collaboration en temps réel. Ce tutoriel vise à commencer le développement de jeux à l'aide de super-pouvoirs." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Le comportement et le mouvement des objets de jeu sont contrôlés par des animations. Dans ce didacticiel de développement de jeux, nous apprendrons à animer les personnages de jeux." 
url: /fr/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Le comportement et le mouvement des objets de jeu sont contrôlés par des animations. Dans ce didacticiel de développement de jeux, nous apprendrons à animer les personnages de jeux.

{{< figure align=center src="images/super.png" alt="Début avec le développement du jeu">}}


## **Aperçu**
Dans notre série de didacticiels de développement de jeux open source, nous avons publié des articles de blog sur certains sujets populaires tels que [Game Development Tutorial | Mouvement des joueurs dans GDELAVELAGE][1], [HTML5 Game Development Tutorial pour les programmeurs de jeux vidéo][2], [Comment l'industrie mondiale des jeux en tirant parti des logiciels open source][3], et [Tutoriel GDELAVELAP pour les débutants pour commencer le développement du jeu][4 ]. Cet article de tutoriel concerne le développement du jeu de jeux en utilisant une open source gratuite [SuperPowers][5] en couvrant les points suivants.
  * ** [Types d'animations de jeu][6] **
  * ** [Comment créer des sprites?][7] **
  * ** [Travailler avec des scènes][8] **
  * ** [Lancement du jeu sur localhost][9] **
  * ** [Conclusion][10] **
Il existe de nombreux logiciels de développement de jeux open source pour les débutants disponibles qui sont livrés avec des capacités d'auto-hébergement. Cependant, [SuperPowers][5] est un logiciel de création de jeu 2D et 3D multiplateforme. Il fournit des bibliothèques intégrées et des exemples de jeux qui facilitent le développement de jeux pour les développeurs de jeux. Cette application gratuite de conception de jeux est écrite en dactylographie et toute la documentation est disponible chez [GitHub][11] concernant le développement et le déploiement. Dans cet article de blog, nous explorerons les superpuissances concernant leur utilisation.

## Types d'animations de jeu {#Types}
Les animations sont une partie vitale des jeux vidéo. Les personnages des jeux doivent répondre aux actions de l'utilisateur, l'animation doit être fluide et brutale. Il s'agit de gérer plusieurs images et animateurs affiner ces cadres pour produire des effets en mouvement. De plus, il y a des animations 2D et 3D où les objets semblent se déplacer dans un espace tridimensionnel. Les développeurs de jeux et les graphistes créent des modèles 3D. Les animations dépendent de la nature du jeu et les types les plus courants sont les suivants.
** Walk Animation: ** Walk Animation concerne la création d'un processus de marche dans lequel les personnages animent chaque étape et donnent des illustrations de marche.
** Animation inactive: ** Il s'agit d'un type d'animation très important dans lequel le personnage ne fait rien car l'utilisateur n'appuie aucun contrôleur.
** Run Animation **: Run Animation fait partie de chaque jeu dans lequel l'objet de jeu effectue le cycle d'exécution. Ce type est le type le plus courant et nécessite plus d'attention du développeur.
** Fighting Animation **: Dans les jeux de combat, plusieurs personnages de jeux se battent les uns avec les autres.
** Jump Animation **: Ce type d'animation nécessite de meilleures compétences et expertise. Le caractère comprime et libère le corps pour effectuer l'illustration de saut.

## Comment créer des sprites? {#sprites}
Cette section du guide de fabrication de jeux permet aux utilisateurs de créer des projets et de commencer à créer des sprites pour le jeu. Les sprites sont des images ou des graphiques non statiques qui sont non seulement utilisés dans les jeux mais aussi dans la conception Web. Ceux-ci sont normalement dessinés sur un arrière-plan qui est constamment actualisé.
Avant de continuer, assurez-vous d'avoir configuré des superpuissances sur votre machine. Vous pouvez suivre ce lien [Tutoriel de développement de jeux HTML5 pour les programmeurs de jeux vidéo][2] pour configurer cette plate-forme de création de jeu gratuite.
Tout d'abord, ouvrez l'application dans le navigateur et créons un nouveau projet vide. comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Début avec le développement du jeu">}}

Vous atterrirez dans l'espace du projet après avoir créé le nouveau projet vide. Il existe des options de menu dans le panneau de gauche. Donc, cliquez sur le bouton «+» pour ouvrir la boîte de dialogue Asset. Sélectionnez l'option Sprite et appuyez sur Créer.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Guide de fabrication de jeux">}}

Maintenant, téléchargez l'image sur laquelle nous allons ajouter un comportement. Vous pouvez le faire en cliquant sur le bouton placé dans le coin supérieur droit. Ce panneau concerne la configuration de l'objet.
Ensuite, vous pouvez définir la taille de la grille selon votre choix. Il y a deux parties de la toile. La partie supérieure montre la feuille complète où la partie inférieure montre la partie sélectionnée sur laquelle nous sommes destinés à appliquer l'animation. Vous pouvez le faire en appuyant sur le bouton «Configuration» au panneau du côté droit comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="tutoriel de développement du jeu">}}

Après cela, créons des animations. Nous pouvons le faire en cliquant sur le bouton «nouveau» dans l'onglet Animation. Vous pouvez voir l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Logiciel de développement de jeux pour les débutants">}}


## Travailler avec des scènes {#Scenes}
Dans cette section, nous ajouterons une scène à notre jeu. Pour cela, ouvrez à nouveau la boîte de dialogue Assets et sélectionnez «Scène» et appuyez sur le bouton Créer. Créez maintenant un acteur en cliquant sur le bouton étoile disponible dans le coin supérieur droit comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Comment faire un jeu sur zéro pour les débutants">}}

Après cela, créez un nouveau composant en cliquant sur le bouton «Nouveau composant» placé sur le panneau du côté droit. Sélectionnez «Sprite Renderer» et appuyez sur Créer. Ensuite, faites glisser le sprite créé à partir du panneau de gauche et déposez-le sous la section Sprite Renderer. De plus, créez un autre acteur nommé «Camera» et créez également un nouveau composant nommé Camera.
Vous pouvez modifier le mode de la caméra, alors changez-le en mode «orthographique» comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="commencer avec le développement du jeu,">}}

Dans le coin inférieur gauche, accédez à l'option Paramètres et ouvrez-la. Sous les sections «sprite» et «carreau», insérez 16 contre «pixel par unité». Ensuite, dans le mode «Caméra par défaut», sélectionnez 2D dans la section «Scène». De plus, dans le cadre de la section «Carte de carreaux», la largeur par défaut 36, la hauteur par défaut 28 et la taille de la grille de set de carreaux 16. Il n'est pas nécessaire de l'enregistrer, plutôt que tout est sur la vague automatique.

## Lancement du jeu sur localhost {#Local}
Donc, nous sommes sur le point de lancer l'animation des superpuissances de notre premier jeu. Cependant, accédez à nouveau à l'onglet Paramètres et faites glisser la scène à partir du panneau de gauche et déposez-le contre la «scène de démarrage» comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Comment faire un jeu sur zéro pour les débutants">}}

Maintenant, cliquez sur «lecteur» et sous le composant «Sprite Renderer», sélectionnez Animation contre l'attribut «Animation». Enfin, lancez l'application en cliquant sur le bouton placé dans le coin supérieur gauche. Le nouvel onglet affichera les objets en mouvement à l'écran.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Début avec le développement du jeu">}}


## Conclusion {#conclusion}
C'est la fin du tutoriel dans lequel nous avons appris à faire un jeu à zéro pour les débutants. Par conséquent, le début du développement de jeux devient facile lorsqu'il existe une documentation détaillée des logiciels de développement de jeux disponibles. Enfin, [** contenerize.com **][12] est dans un processus cohérent d'écriture d'articles sur d'autres sujets et produits open source. Par conséquent, veuillez rester en contact avec cette catégorie [logiciel de développement de jeux][13] pour les mises à jour régulières.

## Explorer
  * [Gdevelop][14]
  * [Godot][15]
  * [Superpuissances][5]
  * [Cocos Creator][16]
  * [Panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
