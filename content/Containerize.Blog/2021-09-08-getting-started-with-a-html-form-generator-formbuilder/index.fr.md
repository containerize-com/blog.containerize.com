---
title: "Commencer avec un générateur de formulaire HTML | Amateur de formulaire" 
seoTitle: "Commencer avec un générateur de formulaire HTML | Amateur de formulaire" 
description: "FormBuilder est un générateur de formulaire HTML gratuit et multilingue avec interface utilisateur DRAG & DROP. Suivez ce tutoriel pour apprendre à le configurer sur localhost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "Éditeur de formulaire open source alimenté par JavaScript avec plusieurs configurations, modèles de formulaires configurables et contrôles personnalisés. Apprenons à configurer Formbuilder." 
url: /fr/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## Éditeur de formulaire open source alimenté par JavaScript avec plusieurs configurations, modèles de formulaires configurables et contrôles personnalisés. Apprenons à configurer Formbuilder.

{{< figure align=center src="images/formbuilder.png" alt="Générateur de formulaires HTML">}}


## **Aperçu** 
Nous avons récemment publié des articles sur des sujets tels que [comment configurer le formulaire de formulaire de bootstrap Form.io sur localhost][1] et [Top 5 des constructeurs de formulaires en ligne open source en l'an 2020][2]. Le premier article de blog est un article de tutoriel qui démontre le processus de configuration et les fonctionnalités d'un générateur de formulaire bootstrap [form.io][3]. Le deuxième article parle des constructeurs de formulaires open source largement utilisés. En ce qui concerne l'interaction bidirectionnelle, l'interaction bidirectionnelle est la chose la plus importante entre les fournisseurs de services et les consommateurs de services. Les organisations ont tendance à recevoir des commentaires cohérents sur leurs services, puis ils formulent de futures stratégies commerciales. Cependant, les formulaires sont les informations à collecter et à stocker les informations des clients. Les entreprises produisent un certain nombre de formulaires pour collecter des données sur diverses opérations en cours et il existe de nombreux types de formulaires dont certains sont des pages uniques et certaines d'entre elles sont des formes de plusieurs pages. Certaines entreprises ont des formulaires intégrés sur leur portail en ligne ou certains d'entre eux utilisent des e-mails ou d'autres types de supports pour exposer leurs formulaires pour la collecte de données.
Par conséquent, il existe de nombreux formulaires open source et logiciels de gestion des données avec riches capacités de générateur de formulaires. Dans cet article, nous explorerons le générateur de formulaire HTML gratuit **[Formbuilder][4]** en couvrant les points suivants.
  * **[Qu'est-ce que Formbuilder?][5]** 
  * [ **Comment configurer?** ][6]
  * [ **Comment créer des formulaires à l'aide de formBuilder?** ][7]
  * **[Conclusion][8]** 

## Qu'est-ce que Formbuilder? {#what}

[FormBuilder][4] est un concepteur de formulaire open source qui permet aux utilisateurs de créer des formulaires interactifs. Il est sécurisé, extensible et est livré avec des capacités d'auto-hébergement. Ce générateur de formulaire HTML est multilingue et offre une prise en charge de plusieurs langues. Il existe une interface utilisateur conviviale où les utilisateurs peuvent faire glisser et supprimer des éléments de formulaire pour formuler le modèle de formulaire requis. De plus, il fournit des commandes riches et des modèles de formulaires configurables. En outre, les utilisateurs peuvent créer plusieurs onglets sur l'interface utilisateur pour créer des formulaires multi-pages. Surtout, les utilisateurs peuvent tendre à ce constructeur de formulaire gratuit en développant ses plugins. Il a toute la documentation disponible sur le développement et le déploiement. Il est écrit en node.js et tout le code source est disponible sur [github][9].
Voici les meilleurs moments forts du formulaire.io
  * I18N intégré
  * Formulaires de plusieurs pages
  * Extensible
  * Prise en charge des frameworks frontaux JavaScript populaires
  * Glisser et déposer une ui

## Comment configurer? {#setup}

Cette section du didacticiel de génération de formulaire vous montrera comment configurer Formbuilder sur la machine locale.
Avant d'aller plus loin, assurez-vous d'avoir installé les pré-requis suivants.
  * Node.js> = 10.9.0
  * npm
  * Git
Après avoir installé les pré-réquisites, exécutez la commande suivante pour cloner le code source de cette application:
```
git clone https://github.com/kevinchappell/formBuilder
```
Ensuite, exécutez les commandes suivantes pour installer les dépendances:
```
cd form-builder<br>npm install 
```
Après cela, vous pouvez démarrer l'application en exécutant la commande suivante:
```
npm start
```
Enfin, la commande ci-dessus ouvrira l'application dans le navigateur à l'adresse suivante:
```
http://localhost:8080/
```

## Comment créer des formulaires en utilisant FormBuilder? {#how}

Dans cette section, nous explorerons les fonctionnalités de ce générateur de formulaire HTML et nous apprendreons comment créer des formulaires.
L'interface utilisateur suivante apparaîtra une fois que vous aurez démarré le serveur.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Générateur de formulaires HTML">}}

À l'avenir, vous pouvez voir la barre de menu sur le côté droit. Il contient les éléments de formulaire tels que les boutons, les cases, les champs de texte, les champs de données, l'en-tête, le paragraphe, etc. Cependant, vous pouvez faire glisser ces éléments et tomber dans la zone centrale (droppable) de l'écran. Dans le coin supérieur gauche, il existe une option pour activer la version bootstrap de l'application. Dans le coin supérieur gauche, il y a une liste déroulante où les utilisateurs peuvent sélectionner n'importe quelle langue disponible.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="éditeur de formulaire">}}

Ensuite, nous pouvons faire glisser et déposer n'importe quel élément de formulaire dans la zone droppable. De plus, nous pouvons modifier les configurations de n'importe quel élément comme indiqué dans l'image ci-dessus. Il existe une option pour créer une copie de l'élément existant. Nous pouvons changer le placement des éléments entre eux.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Générateur de formulaires HTML">}}

Une fois que vous avez terminé le bâtiment du formulaire, vous pouvez rendre le formulaire en appuyant sur le bouton «Render» placé au milieu supérieur. De plus, il existe différentes options de formulaire où les utilisateurs peuvent obtenir le HTML généré derrière les formulaires. Il existe également d'autres options telles que le formulaire utilisateur de chargement, afficher les données de l'utilisateur, rendre le formulaire utilisateur et effacer le formulaire utilisateur. Parallèlement à ces fonctionnalités, de nombreuses actions de formulaire sont disponibles telles que «GetFieldTypes» qui renvoie les types de champ enregistrés pour le formulaire. De même, il existe de nombreuses autres actions telles que Show Data, Get XML, Set Data, Toggle Edit et encore plus. Cependant, il y a beaucoup d'autres choses que vous pouvez vérifier vous-même. Comme il est open source, vous pouvez le modifier conformément à vos besoins.

## Conclusion {#Conclusion}

C'est la fin du billet de blog. Nous espérons que ce tutoriel vous aidera vraiment si vous cherchez à déployer un générateur de formulaire HTML open source. Cet article a couvert de nombreux aspects de Formbuilder afin que vous puissiez facilement faire un choix en considérant vos besoins commerciaux. Ces constructeurs de formulaires open source gratuits sont rentables et permettent de gagner du temps. Ces outils gratuits fournissent non seulement des capacités de création de formulaires, mais fournissent également des formulaires et une gestion des données. Vous pouvez configurer les formulaires avec des applications Web tierces. De plus, il supprime les tracas de créer différentes formes pour différentes applications commerciales, mais les propriétaires d'entreprise peuvent faire n'importe quel type de formulaire en utilisant ces constructeurs de formulaires open source. De plus, il existe des plugins disponibles pour ces éditeurs de formulaire que les développeurs peuvent modifier selon les exigences. Par conséquent, il est grand temps d'automatiser ces tâches répétitives en utilisant un bon générateur de formulaire HTML gratuit.
Enfin, [contenerize.com][10] écrit des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec la catégorie [formulaires][11] pour les nouvelles et les mises à jour régulières.

## Explorer
  * **[form.io][3]** 
  * **[Orbeon][12]** 
  * **[ohmyform][13]** 
  * **[Webiny][14]** 
  * **[FormTools][15]** 
  * **[formbuilder][4]** 
  * **[formulaires alpaca][16]** 
  * [ **comment configurer le formulaire bootstrap form form.io sur localhost** ][1]
  * [ **Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source** ][17]
  * [ **Top 5 des constructeurs de formulaires en ligne open source en l'année 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
