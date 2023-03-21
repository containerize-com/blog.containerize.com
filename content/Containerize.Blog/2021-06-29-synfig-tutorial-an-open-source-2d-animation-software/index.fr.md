---
title: "Tutoriel Synfig | Un logiciel d'animation 2D open source" 
seoTitle: "Tutoriel Synfig | Un logiciel d'animation 2D open source" 
description: "La création d'animations 2D avec Synfig est un processus gratuit, sans couture et rapide. Dans ce guide, vous trouverez toutes les informations dont vous avez besoin pour commencer." 
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: "La création d'animations 2D avec Synfig est un processus gratuit, sans couture et rapide. Dans ce guide, vous trouverez toutes les informations dont vous avez besoin pour commencer." 
url: /fr/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']
---

## La création d'animations 2D avec Synfig est un processus gratuit, sans couture et rapide. Dans ce guide, vous trouverez toutes les informations dont vous avez besoin pour commencer.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

  * [Qu'est-ce que Synfig?][1]
  * [Comment installer Synfig?][2]
  * [Présentation de l'interface d'application][3]
  * [Comment créer une animation de base avec Synfig?][4]
  * [Conclusion][5]

## Qu'est-ce que Synfig?   {#quoi}
Synfig est l'un des meilleurs logiciels d'animation 2D conçus pour les artistes solo ou les petites équipes pour gérer leurs flux de travail et projets d'animation. En tant que logiciel d'animation open source, Synfig utilise un système d'animation «inutile» qui non seulement réduit le temps qu'il faut à une animation pour traiter, mais il donne également aux animateurs la possibilité d'ajouter un cadre de dessin.
Lorsqu'il s'agit d'utiliser Synfig, c'est vraiment un logiciel d'animation léger et rapide qui peut être un excellent ajout au pipeline illustrant de tout artiste travaillant en solo ou dans une petite équipe. De plus, la communauté Synfig est un endroit actif pour trouver non seulement des tutoriels sur l'utilisation de l'application logicielle, mais aussi des ressources pour vous aider à trouver des solutions au cas où vous rencontreriez un barrage routier.
Vous pouvez facilement utiliser Synfig sur plusieurs systèmes d'exploitation, notamment Windows, Mac OS et Linux. Veuillez garder à l'esprit que lors de l'utilisation de Synfig, votre système devrait avoir:
  * Au moins 2 Go de RAM ou plus
  * Un CPU double noyau à 2 GHz ou plus
Synfig a été utilisé pour animer de nombreux projets populaires, notamment Morevna: Demo Project, The Deadline by Morevna, The Polar Detective Prologue de Cyan Los et de nombreux autres projets commerciaux. Cela montre la portée de Synyfig car il peut également être utilisé pour les projets commerciaux et personnels. Que vous soyez nouveau dans le monde de l'animation ou que vous soyez avancé dans votre carrière, Synfig peut faire une belle édition à vos compétences et vous aider à développer une portée étroite sur la création d'animations 2D incroyables. Si vous cherchez à en savoir plus sur d'autres logiciels d'animation, vous pouvez consulter d'autres guides et tutoriels que nous avons faits pour vous.

## Comment installer Synfig?   {#comment installer}
Afin d'installer le logiciel d'animation Synfig 2D sur un périphérique Linux, vous pouvez télécharger directement le fichier d'installation à partir de la page d'accueil principale de Synfig. Vous obtiendrez une option pour télécharger le fichier image 32 bits ou 64 bits, choisissez selon votre système.
Une fois téléchargé, ouvrez votre ligne de commande et saisissez les commandes suivantes:
```
sudo apt-get update
```
```
sudo apt-get install synfigstudio
```
Vous devez maintenant pouvoir accéder facilement à Synfig Studio.

## Présentation de l'interface d'application   {#Application-Interface}
Comme nous l'avons mentionné ci-dessus, Synfig Studio est un logiciel d'animation open source qui permet aux utilisateurs de créer des animations 2D de traitement rapide et rapides. Afin de comprendre les outils et les fonctionnalités, voici un aperçu rapide du studio Synfig lorsque vous commencez à l'utiliser.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

  * **Canvas:  **La toile est le motif à carreaux gris au milieu où vous pouvez esquisser votre animation et appliquer des effets, des couches, des cadres et des modifications. Ici, vous trouverez la toile entourée de boutons à droite pour **  verrouiller / déverrouiller  **les images clés, passer en mode d'animation ** ,  **un petit triangle noir dans le coin supérieur gauche appelé **  caret** , et le Chronologie au cas où vous auriez défini une animation non nulle.
  * **Outils:**  La boîte à outils est l'un des principaux composants de Synfig où vous trouverez tous les outils dont vous aurez besoin pour manipuler des objets. De la taille des brosses, des couleurs, de l'application de gradients, de l'effacement des animations, de l'application de textes et plus encore, vous trouverez tout ce dont vous avez besoin pour créer des animations et les modifier dans le panneau de la boîte d'outils en haut à gauche.
  * **Panneau de piste temporelle:**  Lors de la création d'une animation, le timing est la clé, et avec le panneau de piste temporelle, vous pouvez ajuster les images clés et tous les waypoints (les symboles graphiques qui apparaissent sur le panneau de piste temporelle pour indiquer le réglage de tout paramètre) impliquée.
  * **Panneau des paramètres:**  Vous trouverez ici toutes les options et paramètres détaillés pour les éléments actifs sur votre animation comme la couleur, la largeur, l'opacité, etc. C'est l'un des composants principaux de Synfig.
Passons maintenant à la création d'une animation avec Synfig Studios.

## Comment créer une animation de base avec Synfig?   {#create-animation}
Dans cette partie de l'article, nous vous donnerons un tutoriel étape par étape sur la façon de créer une animation de base avec Synfig Studio. Commençons.
{{_LINE_40_}}
{{_LINE_41_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_43_}}
{{_LINE_44_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_46_}}
{{_LINE_47_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_49_}}
{{_LINE_50_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_52_}}
{{_LINE_53_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_55_}}
{{_LINE_56_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_58_}}
{{_LINE_59_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_61_}}
{{_LINE_62_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="Synfig Tutorial Un logiciel d'animation 2D open source">}}

{{_LINE_64_}}
{{_LINE_65_}}
Et là, vous avez un tutoriel de base sur la façon de créer une animation dans Synfig Studio.

## Conclusion   {#conclusion}
L'utilisation du logiciel d'animation Synfig 2D est assez simple et facile si vous utilisez déjà un logiciel d'animation pour votre travail. Même si vous êtes nouveau dans l'industrie de l'animation, la compréhension de l'interface est une tâche facile. Nous espérons que vous avez trouvé ce tutoriel utile et que vous pouvez créer des animations 2D pour différents projets académiques, commerciaux ou personnels pour créer un portfolio.
_ Quel est votre logiciel d'animation open source le plus préféré ?. Avez-vous des questions sur les logiciels d'animation ?, s'il vous plaît_ [contacter][6].

## Explorer
Vous pouvez trouver des liens suivants pertinents:
  * [Meilleur logiciel d'animation open source][7]
  * [Synfig | Suite d'animation 2D Vector gratuite et open source][8]
  * [Comment créer des animations avec un logiciel d'animation crayon2d][9]
  * [Guide du débutant pour démarrer l'édition d'image gratuite à l'aide de digikam][10]

  
[1]: #what
[2]: #how-to-install
[3]: #application-interfae
[4]: #create-animation
[5]: #conclusion
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/animation-software/
[8]: https://products.containerize.com/animation-software/synfig/
[9]: https://blog.containerize.com/animation-software/how-to-create-animations-with-pencil2d-animation-software/
[10]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
