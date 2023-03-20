---
title: "Comment configurer le formulaire de cootstrap Form Créateur Form.Io sur localhost" 
seoTitle: "Comment configurer le formulaire de cootstrap Form Créateur Form.Io sur localhost" 
description: "Parcourez cet article et apprenez à configurer Formio sur localhost. Ce créateur de formulaire bootstrap est gratuit, extensible et propose des intégrations tierces." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Créez des formulaires spécifiques à la tâche et personnalisables à l'aide d'un générateur de formulaire HTML DRAG et déposez. Foro est auto-hébergé, axé sur l'API, fournit des formulaires et une gestion des données." 
url: /fr/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Créer des formulaires spécifiques à la tâche et personnalisables à l'aide d'un générateur de formulaire HTML DRAG et déposez. Foro est auto-hébergé, axé sur l'API, fournit des formulaires et une gestion des données.

{{< figure align=center src="images/formio-1.png" alt="Créateur de formulaire bootstrap">}}


## **Aperçu**
Dans les besoins commerciaux à croissance rapide, il existe de nombreuses opérations qui appartiennent directement à la transaction publique et à l'engagement. Cet engagement pourrait être physique ou virtuel. Parfois, il s'agit de fournir des services et parfois il s'agit de collecter des données ou des commentaires. D'un autre côté, les organisations d'entreprise ont tendance à collecter les données des clients sur leurs produits et services. Par conséquent, la quantité de données dépend de la portée du public compétent. Ensuite, la gestion des données est une autre tâche essentielle et elle demande une immense attention.
Cependant, les secteurs d'entreprise utilisent des formulaires en ligne pour répondre aux besoins liés à la collecte de données. Il existe de nombreux sites Web qui peuvent contenir de nombreux formulaires tels que le formulaire de contact, le formulaire de plainte, le formulaire de rétroaction client, le formulaire d'admission, etc. Maintenant, il devient un problème à construire, à gérer ces formulaires et les données de soumission. Voici [form.io][1]. Form.io est un créateur de formulaire bootstrap open source qui fournit des capacités de création de formulaire et de gestion des données. Dans le passé récent, nous avons publié un article qui couvrait les [constructeurs de formulaires en ligne open source du Top 5 en 2020][2]. Dans cet article de blog, nous explorerons ce créateur de formulaire bootstrap avec son processus de configuration sur localhost en couvrant les points suivants.
  * ** [Qu'est-ce que Form.io?
  * ** [Comment configurer Form.io sur localhost?][4] **
  * ** [Comment fonctionne Form.io?][5] **
  * ** [Conclusion][6] **

## Qu'est-ce que Form.io? {#quoi}
Form.io est un générateur de formulaire open source gratuit. Il s'agit d'un logiciel auto-hébergé, multilingue et multi-locataire. Ce ** HTML Form Creator ** offre des autorisations basées sur des rôles pour les utilisateurs et les formulaires. Form.io fournit une authentification OAuth et permet aux utilisateurs de se connecter à l'aide de fournisseurs d'identité populaires tels que Google et Facebook. De plus, ce générateur de formulaire HTML est basé sur une architecture sans serveur, et les utilisateurs peuvent générer et intégrer des formulaires dans les autres applications en plaçant simplement une seule ligne de code. En ce qui concerne l'interface utilisateur, il propose une interface utilisateur logique avec les fonctionnalités de glisser-déposer. Il existe différents éléments HTML d'un côté que les utilisateurs peuvent faire glisser et déposer pour construire le formulaire nécessaire. Les utilisateurs peuvent injecter JavaScript personnalisé pour une fonctionnalité améliorée. De plus, les utilisateurs peuvent modifier l'apparence et la sensation du formulaire à l'aide de CSS. Il existe des dispositions pour contrôler la soumission et l'accès des formulaires. Cependant, ce fabricant de formulaires HTML gratuit est écrit en JavaScript et tout le code source est disponible chez [GitHub][7].
Form.io fournit une large gamme de fonctionnalités. Les fonctionnalités clés sont répertoriées ci-dessous.
  * Soumission de formulaire de messagerie
  * Gestion de données
  * Provideurs OAuth
  * Formes intégrées
  * Disposition amicale

## Comment configurer Form.io sur localhost? {#LocalHost}
Dans cette section du ** Form Builder Tutorial **, nous verrons comment configurer Form.io sur localhost. Il est facile à configurer car il fournit une documentation complète concernant le déploiement et le développement.
Avant d'aller plus loin, assurez-vous d'avoir installé les pré-requis suivants.
  * Git
  * Nodejs
  * MongoDB
Une fois les pré-requis ci-dessus installés, ouvrez le terminal Exécutez les commandes suivantes:
```
mkdir formio<br>cd formio
```
Maintenant, exécutez la commande suivante pour cloner le code source de cette application:
```
git clone https://github.com/formio/formio.git
```
Sur un clone réussi, exécutez les commandes suivantes pour installer les dépendances:
```
cd formio <br>npm install
```
Après cela, exécutez l'application avec la commande suivante:
```
npm start 
```
Cette commande affichera la sortie suivante avec certaines invites utilisateur:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Tutoriel de création de formulaire">}}

Vous pouvez accéder à l'application dans le navigateur à l'adresse suivante.
```
http://localhost:3001 
```
Il ouvrira la page de connexion. Vous pouvez vous connecter avec les informations d'identification que vous avez entrées pendant le processus d'installation.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Créateur de formulaire bootstrap">}}


## Comment fonctionne Form.io? {#travailler}
Ce segment décrit le mécanisme de travail de [form.io][1]. L'ensemble de l'écosystème de ce concepteur de formulaire est basé sur des composants et des développeurs. Il est extensible et fournit une interface reposante pour les applications tierces. Voyons donc comment créer des formulaires dans ce ** Form Builder **.
Après la connexion, vous atterrirez sur la page suivante.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Faire glisser et déposer un formulaire de formulaire HTML">}}

Maintenant, cliquez sur le bouton «Nouveau formulaire» et créez le premier formulaire. La page suivante sera affichée. Vous pouvez voir qu'il y a un panneau sur le côté gauche qui contient l'élément HTML pour les formulaires. Il contient les quatre sections telles que les «composants de base», les «composants spéciaux» et plus encore.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="Créateur de formulaire HTML">}}

Vous pouvez définir le nom de formulaire avec d'autres attributs. Maintenant, si vous choisissez un élément de formulaire dans le côté gauche et déposez-le au milieu, vous verrez la boîte de dialogue suivante.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Créateur de formulaire bootstrap">}}

Vous pouvez voir qu'il vous permet de modifier le thème du formulaire, la validation et d'autres modifications. Une fois que vous avez construit votre formulaire, appuyez sur le bouton «Créer» et vous atterrirez sur le formulaire généré.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Faire glisser et déposer un formulaire de formulaire HTML">}}

Le formulaire généré est livré avec diverses options où vous pouvez modifier le formulaire et afficher les données soumises. Dans l'onglet «Form Actions», vous pouvez définir les crochets de soumission pré ou publier comme le courrier électronique, le webhook et plus encore. Surtout, chaque formulaire généré est livré avec une API et les utilisateurs peuvent y accéder en passant l'ID de formulaire.

## Conclusion {#conclusion}
Ceci est la fin de ce formulaire de générateur de formulaires. J'espère que vous avez appris ce créateur de formulaire bootstrap concernant ses fonctionnalités, son déploiement et son utilisation. De plus, il existe de nombreux constructeurs de formulaires open source qui fournissent une large gamme de fonctionnalités. Cependant, il est très important de choisir le meilleur produit qui répond à vos besoins commerciaux. Par conséquent, dans cet article de blog, nous avons observé que Form.io fournit des personnalisations concernant les fonctionnalités, la mise en page et le style. Il vous permet de générer des formulaires polyvalents que vous pouvez héberger sur vos sites Web en direct. En fait, vous pouvez collecter des données de manière bien organisée dans votre propre base de données ou dans toute autre option de stockage.
Enfin, [** contenerize.com **][8] est dans un processus cohérent d'écriture d'articles sur d'autres sujets et produits open source. Par conséquent, veuillez rester en contact avec cette catégorie [formulaire][9] pour les mises à jour régulières.

## Explorer
  * ** [form.io][1] **
  * ** [Orbeon][10] **
  * ** [ohmyform][11] **
  * ** [Webiny][12] **
  * ** [FormTools][13] **
  * ** [formbuilder][14] **
  * ** [formulaires alpaca][15] **
  * [** Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source **][16]
  * [** Top 5 des constructeurs de formulaires en ligne open source en l'année 2020 **][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
