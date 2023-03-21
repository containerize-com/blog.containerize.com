---
title: "Architecture basée sur la multi-location et les conteneurs de Kubernetes" 
seoTitle: "Architecture multi-tenue et conteneur" 
description: "Suivez ce guide pour apprendre à obtenir plusieurs tenues dans une architecture basée sur les conteneurs. Kubernetes Multi-Response fait référence aux ressources partagées" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "Suivez ce guide pour apprendre à obtenir plusieurs tenues dans une architecture basée sur les conteneurs. Kubernetes Multi-Response fait référence aux ressources partagées" 
url: /fr/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

## Les ressources en cluster Kubernetes sont partagées entre tous les locataires. Implémentez l'approche des hôtes de conteneurs multi-locataires pour déployer des applications optimisées et économiques de ressources.

{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Architecture basée sur Kubernetes Multi-Rencury & Container " caption="Kubernetes Multi-Tenancy & Container-Based Architecture" >}}


## Aperçu
Nous sommes ici avec un autre article de blog passionnant dans la série de tenues multiples. Dans notre précédent [Article][1], nous avons abordé le concept de base derrière les applications multi-locataires, les avantages et les inconvénients et les types d'architecture multi-locataires. Puisqu'il est grand temps de servir plusieurs utilisateurs / locataires, gérez et utilisez des ressources de manière efficace. Ainsi, la multi-location est la première approche pour construire une infrastructure qui gère simultanément divers clients / locataires. Cependant, notre plus récent [article de blog][2] a démontré l'architecture sans serveur, la conteneurisation et [Kubernetes][3]. Par conséquent, dans cet article, nous explorerons l'architecture multi-tenue et basée sur les conteneurs. De plus, nous verrons comment vous pouvez atteindre la multi-location dans vos applications [conteneurisées][4].
Les points suivants doivent être couverts dans cet article:
  * **[Hôtes de conteneurs multi-locataires][5]**
  * **[Kubernetes Multi-Renancy][6]**

## Hôtes de conteneurs multi-locataires   {#multi-tenueur-contrainer-hôtes}
Le déploiement d'applications multi-locataires est une tâche critique en matière d'hébergement. Vous savez tous que les conteneurs sont légers par rapport aux machines virtuelles. Le déploiement des applications ne prend que quelques millisecondes pour terminer le déploiement alors qu'il pourrait être en quelques secondes à quelques minutes dans le cas des machines virtuelles.
Cependant, la réalisation de la multi-location dans une architecture basée sur les conteneurs est assez simple. Chaque locataire est hébergé par un conteneur séparé avec une isolation complète et une confidentialité des données. Cela signifie que le nombre de conteneurs dépend du nombre de locataires. De plus, les outils suivants seront utilisés pour réaliser cette approche:
  * Docker et Docker composent
  * Nginx
  * Instance de base de données
  * Serveur d'application
Vous utiliserez Docker pour construire l'image qui est un modèle pour construire le conteneur. De plus, vous utiliserez Docker Compose pour tourner plusieurs hôtes de conteneurs. De plus, vous utiliserez Nginx pour rediriger les demandes entrantes vers le locataire approprié. Ainsi, chaque hôte de conteneur contient l'application et les instances de base de données en hausse et en exécution. Cette méthode**Hosts de conteneurs multi-locataires**n'est pas à forte intensité de ressources et offre une robustesse dans la gestion de divers locataires et la garantie d'isolement et de sécurité des données.

## Kubernetes Multi-Tenancy   {#Kubernetes-Multi-Tenancy-}
Kubernetes contient de nombreux composants dans son architecture tels que les nœuds, le cluster, le plan de contrôle, etc. Fondamentalement, il n'y a pas de tenue multiples intégrée à Kubernetes mais vous pouvez y parvenir. Ainsi, il existe plusieurs applications / locataires en cours d'exécution et partageant le cluster Kubernetes et le plan de contrôle. D'un autre côté, dans des applications unique, une seule instance de l'application occupe l'ensemble du cluster Kubernetes.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes multi-tenue" >}}

De plus, aller un peu plus profondément nous fera découvrir l'hébergement des locataires dans le cluster Kubernetes. Chaque locataire est associé à un espace de noms Kubernetes qui organise le code et empêche les collisions de noms. Il existe trois approches pour atteindre la multi-location à Kubernetes. Le premier est l'espace de noms en tant que service, le second est le cluster en tant que service, et le troisième est les plans de contrôle en tant que service.
De façon assez parlant, Kubernetes Multi-Renancy offre une solution rentable à l'organisation traitant de plusieurs interfaces utilisateur. En fait, vous pouvez faire face à certains défis tels que la gestion des utilisateurs et une meilleure gestion des ressources. Néanmoins, cela dépend totalement du cas d'utilisation et de la nature de l'application que vous visez.

## Conclusion
Cela nous amène à la fin de ce billet de blog. Nous avons parcouru**Architecture basée sur la multi-location et les conteneurs Kubernetes**pour atteindre la multi-tenue. De plus, il existe de nombreuses bibliothèques tierces disponibles pour combler les applications multi-locataires avec Kubernetes. Ce billet de blog vous aidera à comprendre le concept des**hôtes de conteneurs multi-locataires**. Il existe d'autres articles de blog intéressants que vous pouvez trouver dans la section "Voir aussi".

## Connecte-toi avec nous
Enfin, [Containerize.com][7] propose des articles de blog en cours sur divers produits et sujets open source. Vous pouvez rester dans la boucle en nous suivant sur nos plateformes de médias sociaux, notamment [Facebook][8], [LinkedIn][9] et [Twitter][10].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][11].

## FAQS
**Qu'est-ce que la multi-tenue à Kubernetes?**?
Suivez ce [lien][6] pour connaître la multi-tenue de Kubernetes.
**Qu'est-ce qu'un cluster multi-locataire vs un seul locataire?**
Dans un cluster multi-locataire, tous les locataires / clients partagent le cluster Kubernetes alors que, dans un cluster unique, il existe un cluster distinct pour chaque locataire.

## Voir également
  * [Qu'est-ce que l'informatique sans serveur? | Architecture sans serveur][12]
  * [Qu'est-ce que la multiplication? | Pourquoi une approche multi-locataire?][13]
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative][14]
  * [Comment intégrer le chatppt avec Google Sheets][15]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode gpt][16]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution de l'IA][17]
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que l'AI?][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
