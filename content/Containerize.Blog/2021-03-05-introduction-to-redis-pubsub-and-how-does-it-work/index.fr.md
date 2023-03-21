---
title: "Introduction à Redis Pub / Sub et comment cela fonctionne-t-il?" 
seoTitle: "Introduction à Redis Pub / Sub et comment cela fonctionne-t-il?" 
description: "Redis Pub / Sub est un service de messagerie flexible, fiable et en temps réel pour les applications indépendantes pour publier et s'abonner à des événements asynchrones." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub / Sous implémente un système de messagerie en temps réel, où les éditeurs, publient sur un canal / sujet et plusieurs clients peuvent s'abonner à ce canal / sujet." 
url: /fr/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub / Sous implémente un système de messagerie en temps réel, où les éditeurs, publient sur un canal / sujet et plusieurs clients peuvent s'abonner à ce canal / sujet.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

Dans notre dernier tutoriel «**[A débutant’s Guide to Redis en mémoire de données][1]** », nous avons appris Redis en tant que base de données en mémoire. Et, comment cela rivalise avec les bases de données NOSQL. Nous avons également appris où utiliser Redis et où son utilisation n'est pas optimale. Maintenant, en s'appuyant sur cette base de connaissances, dans ce tutoriel, nous allons apprendre Redis Pub / Sub, comment fonctionne-t-il et quelle est la meilleure utilisation du système Redis Publish / Subscribe. Commençons.
  * **[Qu'est-ce que le modèle de publication / d'abonnement?][2]** 
  * **[Comment fonctionne le pub / sous-marin?][3]** 
  * **[Quand devriez-vous utiliser Pub / Sub?][4]** 
  * **[Comment utiliser Redis Pub / Sub?][5]** 
  * **[Conclusion][6]** 

## Qu'est-ce que le modèle de publication / d'abonnement?   {#quoi}
Publier / abonner ou dans un court pub / sub est un modèle de messagerie où l'expéditeur et le récepteur des messages n'échangent pas ces messages directement. L'expéditeur du message le publie plutôt sur un canal / un sujet. Et tous ceux qui souhaitent recevoir ces messages souscrivent à la chaîne / à la rubrique. C'était donc plus une explication technique. Dans notre vie quotidienne, nous utilisons très souvent ce modèle de publication-subscription tout en utilisant des plateformes de médias sociaux comme YouTube, Twitter, Facebook ou Instagram. Où les producteurs de contenu produisent le contenu et ceux qui sont intéressés suivront / abonneront au contenu. C'est donc ce que fait exactement ce que fait Pub / Sub dans l'architecture logicielle.

## Comment fonctionne le pub / sous-marin?   {#comment}
Dans le développement de logiciels, l'accent mis sur la réutilisabilité est très élevé. Et tous les modèles de conception sont basés sur des composants ou des modules réutilisables de construction. Donc, pour comprendre le pub / sub, vous devez d'abord voir d'où vient cette idée et comment les développeurs l'ont trouvé comme un modèle.
Au fur et à mesure que les architectures logicielles ont évolué et plus basées sur des modules, elles sont devenues, plus de communication / messagerie a augmenté entre les modules et les composants. Par exemple, pensez à un module comme une unité de traitement qui prend des entrées et fournit une sortie. Et chaque entrée est en fait un message sur lequel l'unité de traitement traite et génère un autre message en sortie. Qui sera une entrée pour un autre module. Ainsi, cette augmentation de la messagerie nécessitait une attention particulière, afin d'avoir des applications évolutives, il était nécessaire que les modules et les composants puissent fonctionner de manière indépendante sans dépendances. Par conséquent, est venu le modèle de publication / d'abonnement.
Dans de nombreux systèmes pub / sous, les éditeurs publient des messages à un courtier de messages intermédiaires ou à un bus d'événements, et les abonnés enregistrent des abonnements auprès de ce courtier, permettant au courtier effectuer le filtrage. Le courtier exécute normalement une boutique et une fonction transmise pour acheminer les messages des éditeurs aux abonnés. De plus, le courtier peut hiérarchiser les messages dans une file d'attente avant le routage.

## **Quand devriez-vous utiliser Pub / Sub?**    {#When}
Les applications de chat sont un cas d'utilisation classique du modèle pub / sous. Dans une application de chat, les participants peuvent s'abonner aux salles de chat qui ont un sujet de pub / sous-subdimenté. Lorsqu'un utilisateur envoie un message à une salle de chat, son instance d'application de chat publie le message sur le sujet de cette salle de chat. Les abonnés du sujet reçoivent le message.
La file d'attente de messages / la file d'attente de messages ou les applications de traitement par lots peuvent également utiliser le modèle pub / sous. Lorsque tous ceux qui souhaitent une tâche particulière effectueront le message dans une file d'attente et des unités de traitement qui se sont abonnés à cette file d'attente recevront le message pour traiter le travail.
Discutons certains des avantages du Pub / Sub Modèle
  * Couplage lâche entre les composants du système
  * Meilleure vue du flux de travail à l'échelle du système
  * Active une intégration meilleure et plus rapide
  * Assure une évolutivité plus fluide
  * Fiabilité cohérente garantie
  * Construit l'élasticité
  * Modularisation du logiciel
  * Développement de logiciels agnostiques linguistiques
  * La clarté de la logique commerciale
  * Améliore la réactivité

## Comment utiliser redis pub / sub   {# redis-pubsub}
Pour l'installation Redis, vous pouvez vous référer à mon [dernier tutoriel][1]. Cet exemple explique comment fonctionne le concept de l'éditeur et de l'abonné. Dans l'exemple suivant, un client s'abonne à un canal nommé «Redischat».
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Désormais, deux clients publient les messages sur le même canal nommé «Redischat» et le client ci-dessus reçoit des messages.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## Conclusion   {#conclusion}
Dans ce didacticiel, nous avons appris le modèle de conception de publication / d'abonnement. Et exploré comment fonctionne le redis pub / sub. Nous avons également exploré quels sont les meilleurs cas d'utilisation de Redis Pub / Sub, messagerie en temps réel. Dans mon prochain tutoriel, nous explorerons davantage le Redis et expliquerons comment nous pouvons utiliser Redis Pub / Sub avec Node.js pour créer une application de chat en temps réel.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
