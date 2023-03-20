---
title: "Qu'est-ce que le multittenance? | Pourquoi une approche multi-locataire?" 
seoTitle: "Qu'est-ce que le multittenance? | Pourquoi une approche multi-locataire?" 
description: "Qu'est-ce que le multittenance? Suivez cet article de blog pour apprendre le concept réel derrière la multi-location et commencer à créer des applications multi-locataires évolutives." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Concevez une architecture d'application multi-locataires et répondez efficacement aux exigences de votre utilisateur. Explorons comment la multitension vous permet de créer un logiciel évolutif." 
url: /fr/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Concevez une architecture d'application multi-locataire et répondez efficacement aux exigences de votre utilisateur. Explorons comment la multi-fonds vous permet de créer des logiciels évolutifs.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Aperçu
Bienvenue dans un autre article de blog dans la catégorie de [programmation][1]. Nous allons discuter d'une architecture d'application multi-locataire. En fait, [contenerize.com][2] a une large gamme d'applications multi-locataires dans sa pile de produits open source. Les applications multi-locataires open source incluent [form.io][3], [botpress][4], et plus encore. De plus, il existe une [documentation][5] complète concernant l'architecture, le déploiement, le développement et l'utilisation de ces logiciels open source. La raison de la rédaction de cet article est de comprendre le concept derrière la multi-location dans le développement de logiciels. Alors, découvrons**Qu'est-ce que le multitténance?
Les points suivants seront discutés dans cet article:
  * [Qu'est-ce que la multiplication? Multi-locataire vs un seul tension][6]
  * [Types d'architecture d'application multi-locataire][7]
  * [Avantages commerciaux de l'application multi-locataire][8]
  * [Inconvénients en multi-tension][9]

## Qu'est-ce que la multittenance? Multi-locataire vs unique {# what-est-est-multiditenancy-multi-tenant-vs-single-tenant}
La multitension fait référence à une instance de serveur unique desservant plusieurs locataires frontaux en particulier connus. Chaque fois que vous rencontrez un logiciel multi-locataire, dites simplement à votre cerveau que ce logiciel exécute une seule instance d'un serveur partagé et plusieurs locataires (clients) sont connectés à cette instance avec différentes marques.
Par exemple, des logiciels construits pour une université sert différents départements ayant différentes marques frontales et données de programme. Fondamentalement, il y a une seule instance du serveur exécutant et servant tous les locataires. De plus, il y a la séparation des données et la confidentialité des données parmi tous les locataires. De plus, chaque locataire a sa propre logique commerciale et récupère et stocke ses données dans un emplacement unique mais privé / isolé.

{{< figure align=center src="images/multi-tenant-1.png" alt="architecture multi-locataire">}}

Maintenant, jetons un coup d'œil à l'architecture unique. Dans l'architecture unique, il y a une instance de serveur par locataire. Encore une fois, prenons un exemple de logiciel universitaire. L'approche unique se réfère à une instance de serveur par département et le nombre d'instances dépend du nombre de départements (locataires).

{{< figure align=center src="images/single-tenant-2.png" alt="architecture unique">}}


## Types d'architecture d'applications multi-locataires {# Types de Multi-Tenant-Application-Architecture}
Jusqu'à présent, vous comprenez la multi-tension et maintenant nous passerons par ses différents types.
**Base de données - une instance d'une application**: Cette approche est très populaire et a été largement utilisée pour créer des applications multi-locataires. Selon cette approche, il existe une instance d'application en cours d'exécution avec une seule base de données. De plus, il existe un schéma partagé et les données du locataire sont stockées dans un seul endroit contre leur identifiant unique.
**Base de données multiples - Une instance d'application:**Dans cette architecture d'application multi-locataire, une seule instance de l'application s'exécute avec plusieurs bases de données. Chaque locataire a son propre schéma de base de données où toutes les informations sont enregistrées par chaque locataire séparément.
**Base de données multiples - plusieurs instances d'applications**: La troisième approche fait référence à l'exécution de plusieurs instances de serveur ainsi que de plusieurs bases de données. Il n'y a rien de partagé et chaque locataire a une isolation complète et il n'y a pas de dépendance parmi les locataires.

## Avantages commerciaux de l'application multi-locataire {# Business-Benefits-of-Multi-Tenant-App}
Dans cette section, nous allons passer par des avantages importants pour opter pour le multittenance. Bien que nous puissions aller longtemps en discutant des avantages, mais voyons les points suivants:
**Évolutivité**: Il est facile de mettre à l'échelle une architecture multi-locataire. Vous pouvez évoluer horizontalement ou verticalement quel que soit le type que vous avez choisi.
**rentable**: Opter pour le multitenancier permet d'économiser vos coûts opérationnels. Il existe des ressources partagées, il est donc toujours rentable d'élargir les ressources.
**Efficacité et flexibilité**: Dans un environnement multitienant, vous atteignez l'efficacité du développement et du déploiement. Par exemple, vous pouvez exécuter un script sur un schéma de base de données partagé pour mettre à jour tous les locataires.
**Better Resource Management**: L'ajout et la suppression des ressources sont simples. De plus, cette architecture offre une infrastructure améliorée et bien gérée. De plus, chaque locataire est privé et sécurisé et a accès à une base de données partagée / non partagée.

# Al
Le but de ce billet de blog est de donner un bon sens de l'architecture multi-locataires.
**Mécanisme d'authentification complexe**: En raison de la nature partagée de l'allocation des ressources dans le multittenance, il existe des protocoles stricts pour les points d'accès aux données.
**Réflexion du serveur:**C'est un point majeur à considérer lors de la sélection de l'architecture d'application multi-locataire. Tous les locataires deviennent non fonctionnels chaque fois que le serveur est en panne pour une raison.
**Risque de confidentialité**: Dans une architecture multi-locataires, il y a une violation à haut risque de sécurité. En fait, les données de tous les locataires sont stockées dans une base de données partagée afin que toute invasion de tiers puisse entraîner une corruption ou un vol de données.

## Conclusion
Nous terminons ce billet de blog ici. Cet article a-t-il la réponse à vos questions telles que**Qu'est-ce que le multitténance**? De plus, nous avons également exploré l'infrastructure**multi-locataire vs un seul locataire**. De plus, ce guide vous aidera lorsque vous optez pour l'architecture d'application multi-locataire ou un seul locataire. Surtout, le multittenance est le premier choix si vous construisez un SaaS. Il existe d'autres articles de blog intéressants que vous pouvez trouver dans la section «Voir aussi» qui vous donnera les dernières informations sur le monde de la technologie.
Enfin, [contenerize.com][2] écrit continuellement des articles de blog sur d'autres produits et sujets open-source. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][10], [LinkedIn][11] et [Twitter][12].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][13].

## FAQS
**Qu'est-ce que le multi-locataire avec l'exemple?**
Veuillez visiter ce [lien][6] pour savoir ce qu'est la multiplication. Il y a des détails avec des exemples.
**Quelle est la signification de l'architecture multi-locataire?**
Une**Architecture d'application multi-locataire**signifie une seule instance d'un serveur sert plusieurs locataires (clients). Veuillez accéder à ce [lien][7] pour plus de détails.

## Voir également
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative][14]
  * [Comment intégrer le chatppt avec Google Sheets][15]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode gpt][16]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution de l'IA][17]
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que l'AI?][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
