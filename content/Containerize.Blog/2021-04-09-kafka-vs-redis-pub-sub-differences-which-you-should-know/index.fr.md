---
title: "Kafka vs redis pub-sub, différences que vous devez connaître" 
seoTitle: "Kafka vs redis pub-sub, différences que vous devez connaître" 
description: "Si vous recherchez des outils pour gérer une grande quantité de données et confondre entre Kafka et Redis. Cet article Kafka vs Redis Pub-Sub vous aidera." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis et Kafka sont deux outils différents qui font des emplois similaires à leur manière. La comparaison Kafka vs Redis vous donne un aperçu que vous devez connaître." 
url: /fr/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="kafka vs redis pub sub">}}


## Redis et Kafka sont deux outils différents qui font des emplois similaires à leur manière. La comparaison Kafka vs Redis vous donne un aperçu que vous devez connaître.
Dans notre série d'articles sur «Redis», nous avons appris les [Basics of Redis][1], puis nous avons exploré [comment Redis Pub / Sub Works][2] et comment cela rivalise avec les bases de données NOSQL. Pour aller de l'avant dans notre série d'aujourd'hui, nous comparerons Redis avec Kafka qui est l'un de ses concurrents dans diverses tâches. Dans cet article Kafka vs Redis Pub-Sub, nous explorerons ce que Kafka est en quoi il est différent de Redis et quelles sont les similitudes. Alors, commençons.
  * Qu'est-ce que Kafka?
  * Qu'est-ce que Redis?
  * Quelles sont les principales différences?
  * Quand utiliser lequel?
  * Conclusion

## Qu'est-ce que Kafka?
Apache Kafka est une plate-forme de flux d'événements distribué open source. Il est utilisé pour les pipelines de données haute performance et les analyses en streaming. Kafka agit comme un [Système de messagerie de publication sur la souscription][3]. Avec cela, vous pouvez traiter de nouvelles données en fonction de sa génération à grande vitesse et peut également les enregistrer dans une base de données.
Kafka est un système distribué composé de **serveurs  **et **  clients** . Il peut être déployé sur du matériel nu, des machines virtuelles et des conteneurs sur site ainsi que des environnements cloud.

## Qu'est-ce que Redis?
Redis est un magasin de valeurs clés avancé open source. Il prend en charge plusieurs types de données: chaînes, hachages, listes, ensembles et ensembles triés. C’est pourquoi il est souvent appelé serveur de structure de données.
Redis est également considéré comme une base de données NoSQL. Pour une discussion détaillée sur HE Redis et un comment cela fonctionne, vous pouvez vous référer à notre article «[A débutant’s Guide to Redis en mémoire de données][1]».

## Quelles sont les principales différences?
**redis**  pub-sub est principalement comme un système d'incendie et d'offre où tous les messages que vous avez produits seront livrés à tous les consommateurs à la fois et les données ne sont pas stockées nulle part. Vous avez des limites de mémoire en ce qui concerne Redis. De plus, le nombre de producteurs et de consommateurs peut affecter les performances de Redis.
D'un autre côté, **Kafka**  est un journal distribué à haut débit qui peut être utilisé comme file d'attente. Il offre également de la persistance des messages envoyés dans la file d'attente.
**redis  **prend en charge **  Push-based**  Livraison des messages. Cela signifie que chaque message poussé vers Redis sera livré automatiquement à tous les abonnés.
**Kafka **, cependant, prend en charge  **la livraison **  basée sur Pull**  des messages. Cela signifie que les messages publiés sur Kafka ne sont pas distribués automatiquement aux abonnés. Au lieu de cela, les consommateurs demandent les messages lorsqu'ils sont prêts à consommer ces messages.
**redis  **ne stockait pas les messages à la place, les messages sont livrés en même temps à tous les consommateurs puis supprimés. Cependant, **  kafka  **étant un journal, vous avez toujours des messages. Vous pouvez surveiller cela en définissant une politique de rétention disons 7 jours **  Rétention** .

## Quand utiliser lequel?

### redis
  * Si vous voulez un type de système d'incendie et d'offre, où tous les messages que vous produisez sont livrés instantanément aux consommateurs.
  * Si  **Speed ​​**  est le plus inquiet.
  * Si **Storage**  n'est pas important, et que vous ne voulez pas que votre système ait le message qui a été envoyé
  * La quantité de données qui sera traitée n'est pas énorme.

### Kafka
  * Si vous voulez **fiabilité** .
  * Si vous souhaitez que votre système ait une copie des messages qui ont été envoyés même après la consommation.
  * Si  **Speed ​​**  n'est pas une grande préoccupation.
  * Et votre taille de données est énorme.

## Conclusion
Dans ce tutoriel Kafka vs Redis Pub-Sub, nous avons exploré Kafka et Redis. Quelles sont leurs différences et leurs similitudes? Nous avons également appris quand vous devriez redis et quand il est bon d'utiliser Kafka. Dans nos prochains tutoriels, nous explorerons plus sur Kafka et une analyse approfondie.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#quoi
