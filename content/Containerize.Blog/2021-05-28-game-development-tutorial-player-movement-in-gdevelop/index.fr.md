---
title: "Tutoriel de développement du jeu | Mouvement des joueurs dans GDEVELOP" 
seoTitle: "Tutoriel de développement du jeu | Mouvement des joueurs dans GDEVELOP" 
description: "Suivez ce didacticiel de développement du jeu pour en savoir plus sur les fonctions de jeu de base. GDELEVELAG est un logiciel de création de jeu gratuit pour la construction et la publication de jeux." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Le déplacement d'objets à l'écran est une partie cruciale de tout jeu. Dans ce guide de développement de jeux, nous apprendrons à contrôler et à déplacer des objets de jeu dans GDELAVELAG." 
url: /fr/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Les objets en mouvement à l'écran sont une partie cruciale de tout jeu. Dans ce guide de développement de jeux, nous apprendrons à contrôler et à déplacer des objets de jeu dans GDELAVELAG.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Tutoriel de développement du jeu">}}


## **Aperçu**
La communauté open source émerge avec le passage de chaque minute. Il y a des jeux multiplateformes, des jeux mobiles et des jeux de bureau. Divers types de jeux comprennent des jeux d'action, des jeux d'aventure, des jeux de rôle, des jeux de sport, des jeux de puzzle, des jeux de simulation et bien d'autres. Par conséquent, tous ces différents types de jeux ont donné une immense augmentation du trafic car les utilisateurs de tous les groupes d'âge ont tendance à jouer à ces jeux.
De plus, la pandémie a apporté un changement massif dans le style de vie des personnes vivant dans le monde entier. Les gens ont maintenant plus de temps. Toutes les activités hors ligne sont devenues en ligne. Par conséquent, ils ont tendance à opter pour des logiciels en ligne pour effectuer des tâches professionnelles et des jeux vidéo en cas de divertissement. Pour toutes ces raisons, cette industrie a acquis la durabilité et le soutien des utilisateurs et des développeurs. Dans le passé récent, nous avons écrit sur des sujets tels que [HTML5 Game Development Tutorial pour les programmeurs de jeux vidéo] [1], [comment l'industrie mondiale des jeux en tirant parti des logiciels open source] [2], et [Tutoriel GDEVELAP pour les débutants pour commencer le développement de jeux] [3]. Dans ce didacticiel de développement de jeux, nous couvrirons les points suivants.
  * ** [présente l'exploration de gdevelop] [4] **
  * ** [Travailler sur un jeu] [5] **
  * ** [Conclusion] [6] **

## présente l'exploration de gdevelop {#Features}
[GDELAPELL] [7] est une plate-forme de construction de jeux open source. Il est très extensible et offre une interface logique où les utilisateurs peuvent naviguer facilement. Ce logiciel gratuit est écrit en C ++, TypeScript et JavaScript. De plus, il existe une documentation complète sur le développement et le déploiement. Tout le code source est disponible chez GitHub. De plus, il existe de nombreuses fonctionnalités qui rendent ce logiciel de jeu de jeu. Voyons certaines des principales fonctionnalités.
** Cross-plateform **: Cette plate-forme de création de jeux est multiplateforme et peut être déployée sur presque tous les systèmes d'exploitation populaires tels que MacOS, Linux et Windows.
** Options d'exportation **: GDEVELOPELL permet aux utilisateurs d'exporter des jeux développés en un seul clic pour Android, iOS et Web. Les propriétaires de jeux peuvent afficher des publicités vidéo sur leurs jeux et cela peut être possible avec le soutien d'Admob.
** Rich Game Objets **: Ce fabricant de jeux open source fournit une large gamme d'objets de jeu tels que des sprites avec des animations, des explosions de feu et d'autres effets à l'aide d'émetteurs de particules. Le texte formaté, les vidéos intégrées et les formes personnalisées sont disponibles pour apporter des effets accrocheurs dans les jeux.
** Comportements polyvalents **: Dans cet article de base de développement de jeux, nous vous montrerons comment nous pouvons ajouter différents comportements aux objets de jeu. Il existe plusieurs comportements disponibles qui sont prêts à l'emploi et les utilisateurs peuvent se développer davantage selon les exigences. Tout se passe en quelques clics de souris.
** Interface avancée **: Dans ce didacticiel de conception de jeu, nous verrons l'interface utilisateur de ce moteur de jeu 3D. Les utilisateurs peuvent faire glisser et supprimer divers éléments et objets de jeu.

## travaillant sur un jeu {#working}
Cette section du didacticiel de développement de jeux élabore le développement de jeu de base avec GDEVEVELOP. Avant d'aller plus loin, assurez-vous que vous avez installé GDELAVELOVELLORALS localement sur votre machine.
Vous pouvez visiter ce didacticiel [GDELELAPELL TUTORAL pour les débutants pour commencer le développement de jeux] [3] pour acquérir la mise en place de cet éditeur de jeu sur LocalHost.
Maintenant, ouvrez l'éditeur et créez un nouveau projet. Dans ce tutoriel, nous créerons un dossier sur Google Drive pour enregistrer les fichiers de jeu. Cliquez maintenant sur le «Créer un nouveau projet», il ouvrira une nouvelle boîte de dialogue, sélectionnez l'option «jeu vide» pour commencer à construire un nouveau jeu.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Tutoriel de développement du jeu">}}

Dans la barre de menu du projet de gauche, cliquez sur «Enregistrer sous» pour enregistrer le jeu.
Tout d'abord, ajoutons une scène. Pour cela, cliquez sur l'option «Scènes» et renommez-la par exemple «première scène» dans ce didacticiel indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" plate-forme de construction de jeux">}}

Après avoir créé la scène, ouvrez-la et ajoutez un objet. Pour ajouter un objet, cliquez sur «Ajouter un nouvel objet» apparaissant sur le panneau du côté droit. Finalement, il ouvrira une nouvelle boîte de dialogue contenant différents actifs. Cependant, sélectionnons l'objet «Red Ship» frappez «Ajouter au jeu» et fermons la boîte de dialogue.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Guide de développement du jeu">}}

Ensuite, vous verrez un objet apparaître sur le panneau de gauche. Faites-le glisser sur l'écran principal et appuyez sur le bouton apparaissant dans le coin supérieur gauche pour lancer le jeu. Par conséquent, il ouvrira le jeu dans une nouvelle fenêtre comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Tutoriel de développement du jeu">}}

Jusqu'à présent, vous ne pouvez pas jouer avec cet objet car aucun comportement ne lui est ajouté. Alors, ajoutons un comportement à cet objet. Pour cela, cliquez sur l'objet Ship et appuyez sur «Modifier l'objet». Il ouvrira une nouvelle boîte de dialogue, accédera à l'onglet Comportements, sélectionnez «Mouvement descendant» et appuyez sur «Appliquer». Maintenant, prévisualisez le jeu et vous verrez que vous pouvez déplacer l'objet Ship sur l'écran à l'aide de vos touches de flèche de clavier. Maintenant, vous remarquerez que l'objet Ship sort de l'écran. Par conséquent, pour résoudre ce problème, modifiez l'objet et naviguez vers les comportements. Cliquez sur «Ajouter un comportement à l'objet». Maintenant, accédez à «Rechercher de nouveaux comportements» et recherchez le comportement «restez à l'écran» dans la barre de recherche comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Enveloppement GDE">}}

Ensuite, sélectionnez-le et installez-le dans le projet et appuyez sur Appliquer. Une autre chose est d'ajuster le point central de l'objet. Alors, allons à nouveau aux propriétés de l'objet et «modifier les points» apparaissant en bas. Vous atterrirez sur l'écran suivant.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="tutoriel de conception de jeu">}}

Donc, faites glisser la marque apparaissant dans le coin supérieur gauche jusqu'au centre de l'objet puis fermez-vous et appliquez. Maintenant, si vous relancez le jeu, vous verrez les changements.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Tutoriel de développement du jeu">}}


## Conclusion {#conclusion}
C'est la fin de ce tutoriel de développement de jeux. Espérons que ce billet de blog serait utile pour les développeurs de jeux. Ce tutoriel vous a permis de travailler avec les objets de jeu et d'ajouter des comportements. À l'avenir, Containerize.com publiera des articles de blog et des articles de tutoriels sur d'autres logiciels de conception de jeux vidéo open source. Par conséquent, veuillez rester connecté avec cette catégorie [logiciel de développement de jeux] [8] sur [contenerize.com] [9] pour les mises à jour régulières.

## Explorer
  * [Gdevelop] [7]
  * [Godot] [10]
  * [Super pouvoirs] [11]
  * [Cocos Creator] [12]
  * [Panda3d] [13]
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/fr/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
