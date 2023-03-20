---
title: "Comment faire un jeu sur Scratch en utilisant Open Source Gdevelop" 
seoTitle: "Comment faire un jeu sur Scratch en utilisant Open Source Gdevelop" 
description: "Comment faire un jeu à partir de zéro? GDELEVELOP propose une interface utilisateur logique remplie de nombreux composants et comportements pour créer des jeux vidéo pour le Web, le bureau, iOS et Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Ce didacticiel de développement de jeux explique les bases de la construction d'un jeu de course de camions. Vous pouvez l'installer ou utiliser son application en ligne pour créer un jeu vidéo passionnant." 
url: /fr/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Ce didacticiel de développement de jeux explique les bases de la construction d'un jeu de course de camions. Vous pouvez l'installer ou utiliser son application en ligne pour créer un jeu vidéo passionnant.

{{< figure align=center src="images/gdevelop-game.png" alt="Comment faire un jeu à zéro">}}


## **Aperçu**
Dans un proche passé, nous avons publié de nombreux articles de blog sur des logiciels de développement de jeux gratuits open source tels que [les 5 meilleurs logiciels de développement de jeux gratuits en 2021][1], [Début avec le développement de jeux à l'aide de super-pouvoirs][2], [jeu Tutoriel de développement | Mouvement des joueurs dans GDELAVELAGE][3], [HTML5 Game Development Tutorial pour les programmeurs de jeux vidéo][4], [Comment l'industrie mondiale des jeux tirant parti des logiciels open source][5], et [Tutoriel GDEVELAP pour les débutants pour commencer le développement du jeu][6 ]. Les dernières avancées à l'ère d'Internet ont apporté de nouvelles tendances dans l'industrie des jeux vidéo. Une plate-forme de construction de jeux open source fournit un écosystème complet pour développer des jeux indépendamment et les développeurs mûrissent, puis mature selon les besoins. Dans ce billet de blog, nous apprendrons à faire un jeu sur Scratch en utilisant [GDELAPELLE][7] en couvrant les points suivants.
  * ** [Pourquoi devrions-nous utiliser gdevelop?][8] **
  * ** [Configuration du projet][9] **
  * ** [Comment préparer l'arrière-plan et l'objet?][10] **
  * ** [Ajout de Behviors à l'objet][11] **
  * ** [exécuter le jeu][12] **
  * ** [Conclusion][13] **

## Pourquoi devrions-nous utiliser GDEVELOPE? {#pourquoi}
[GDELAPELL][7] est un logiciel de jeu open source. Il est livré avec des capacités d'auto-hébergement et est de nature multiplateforme. Vous pouvez le télécharger et l'installer, ou vous pouvez utiliser sa version en ligne pour jouer avec. Les utilisateurs n'ont pas besoin de gagner des connaissances en programmation pour utiliser ce constructeur de jeux. Surtout, il propose une interface utilisateur Drag & Drop qui propose des comportements, des modèles et des objets prédéfinis. Ce logiciel de développement de jeu gratuit est hautement configurable et propose des intégrations avec des bibliothèques tierces. Pour plus d'informations sur cet outil gratuit, vous pouvez vérifier ce lien pour en savoir plus sur ses fonctionnalités et le processus de configuration.

## Configuration du projet {#setting}
Dans cette section, nous créerons notre projet pour construire un jeu de course de camions avec quelques fonctionnalités de base. Suivez ce [lien][6] si vous souhaitez configurer votre machine locale ou si vous pouvez utiliser la version en ligne en accédant à ce [lien][14].
Ainsi, vous trouverez l'écran suivant une fois que vous avez cliqué sur «Créer un nouveau projet», puis cliquez sur «Jeu ​​vide».

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Comment faire un jeu à zéro">}}

Vous pouvez voir la barre de menu sur le côté gauche de la fenêtre. Maintenant, cliquez sur les scènes "puis double-cliquez sur le bouton" Cliquez pour ajouter une scène ". Après cela, vous atterrirez sur l'écran du jeu où vous pouvez créer des objets de jeu, des arrière-plans et des comportements. À l'avenir, cliquez sur «Ajouter un nouvel objet» placé sur le panneau du côté droit et vous verrez la fenêtre suivante.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Tutoriel GDELAPEL">}}


## Comment préparer l'arrière-plan et l'objet? {#préparer}
Dans la barre de recherche, recherchez l'objet du camion et double-cliquez-le et appuyez sur «Ajouter au jeu» une fois qu'il est arrivé dans les résultats. Répétez cette étape pour les deux roues et un objet de plate-forme. Maintenant, cliquez avec le bouton droit sur l'objet Greenfloor et modifiez.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="tutoriel de développement du jeu">}}


## Ajout de behviors à l'objet {#add}
Ensuite, faites glisser et déposez le Greenfloor sur l'écran du jeu et ajustez sa hauteur et sa largeur en fonction de votre souhait. Faites glisser l'objet du camion et déposez-le sur l'écran du jeu, puis les objets de roue. À l'avenir, cliquez avec le bouton droit sur le corps du camion et appuyez sur «Modifier le camion de camion», cliquez sur les comportements, cliquez sur «Ajouter un comportement à l'objet» et cliquez sur «Physics Engine 2.0» et vous verrez la fenêtre suivante.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Comment faire un jeu à zéro">}}

Dans cette fenêtre, vous pouvez modifier les configurations telles que la densité, la largeur et la hauteur. Maintenant, répétez le même processus pour l'objet Greenfloor, mais gardez le type «statique» et appuyez sur le bouton «Appliquer». Encore une fois, modifiez l'objet TruckBody, appuyez sur «Modifier les points», appuyez sur «Edd Points», puis insérez le nom de votre roue avant (c'est-à-dire FW dans ce tutoriel). Un point sera créé sur l'objet, faites simplement glisser ce point vers l'emplacement de la roue. Répétez également ce processus pour la roue arrière et faites le X et Y à 0 comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="tutoriel de développement du jeu">}}

Après cela, modifiez les deux objets de roue et ajustez leurs points. En outre, accédez à nouveau à l'option d'édition des roues, appuyez sur l'onglet «comportement», sélectionnez «Physics Engine 2.0» et définissez les valeurs de type, de rayon et de densité comme indiqué dans l'image ci-dessous.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Logiciel de conception de jeux">}}

Maintenant, cliquez sur l'onglet «Nouvelle scène», appuyez sur «Ajouter de nouveaux événements», appuyez sur «Ajouter une condition», recherchez «au début de la scène» et appuyez sur «OK». Ensuite, appuyez sur «Ajouter une action» Recherchez «Position du centre de la caméra X» et définissez les configurations suivantes.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Logiciel de développement de jeu gratuit">}}

Maintenant, copiez l'action, mais assurez-vous que l'action copiée est définie sur «Y». Ajoutez une autre action nommée «Changer le zoom de la caméra», définissez-la sur 0,4 et faites glisser cette action vers le haut. Ajoutez une autre action, recherchez le «Ajouter un joint de roue» et définissez les configurations pour les deux roues comme indiqué ci-dessous.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Guide de développement du jeu">}}

Après cela, ajoutez une nouvelle condition, recherchez la «touche pressée» et définissez-la à gauche. Maintenant, ajoutez l'action, sélectionnez la première roue, recherchez la vitesse linéaire x ", signe de modification pour" soustraire "et définissez la valeur 50. Répétez cette étape pour la bonne touche, mais assurez-vous que le signe de modification ajoute comme indiqué ci-dessous.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="tutoriel de développement du jeu">}}


## exécuter le jeu {#run}
Une fois toutes les étapes terminées. Il est temps d'exécuter le jeu en appuyant sur le bouton placé dans le coin supérieur gauche. Il lancera le jeu dans la nouvelle fenêtre.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Comment faire un jeu à zéro">}}


## Conclusion {#conclusion}
C'est la fin de ce billet de blog et vous avez sûrement appris à faire un jeu à zéro. Cependant, il existe de nombreux logiciels de conception de jeu gratuits ** disponibles sur le marché, car cette industrie gagne en popularité et en demande. Il y a plusieurs raisons derrière cela, comme les logiciels open source sont évolutifs, configurables, rentables et faciles à entretenir. De plus, la demande de constructeurs de jeux multiplateformes augmente à mesure que les développeurs trouvent à l'aise de construire un jeu qui fonctionne sur toutes les plateformes populaires telles que Android, iOS, Web et Desktop. D'un autre côté, l'avènement de la pandémie a changé la vie des gens et ils préfèrent maintenant rester à l'intérieur. Ainsi, les gens ont tendance à jouer à des jeux vidéo dans leur temps libre.
Enfin, [contenerize.com][15] est prêt pour améliorer sa base de tutoriels avec des tutoriels de développement de jeu plus intéressants **. Veuillez rester connecté avec cette catégorie [logiciel de développement de jeux][16] pour les mises à jour régulières.

## Explorer
  * ** [gdevelop][7] **
  * ** [Godot][17] **
  * ** [Superpuissances][18] **
  * ** [Cocos Creator][19] **
  * ** [panda3d][20] **
  * ** [playCanvas][21] **
  * ** [Début avec le développement de jeux à l'aide de superpuissances][2] **
  * ** [Tutoriel de développement du jeu | Mouvement des joueurs dans gdevelop][3] **
  * ** [HTML5 Tutoriel de développement du jeu pour les programmeurs de jeux vidéo][4] **
  * ** [Comment l'industrie mondiale du jeu tirant parti des logiciels open source][5] **
  11
  * [** Top 5 logiciels de développement de jeu gratuit en 2021 **][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
