---
title: "Un guide pour débutant sur la base de données en mémoire de Redis" 
seoTitle: "Un guide pour débutant sur la base de données en mémoire de Redis" 
description: "La base de données Redis en mémoire est une boutique de valeurs clés open source. Il s'appelle également une base de données NoSQL. Ce tutoriel Redis vous guide sur les concepts de base de Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Ce tutoriel vous aide à découvrir la base de données Redis en mémoire. Il est open-source et également appelé magasin de valeurs clés, qui est un type de base de données non relationnelle." 
url: /fr/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Ce tutoriel vous aide à découvrir la base de données Redis en mémoire. Il est open-source et également appelé magasin de valeurs clés, qui est un type de base de données non relationnelle.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Redis de base de données en mémoire">}}

** redis ** représente en fait «** re ** mote ** di ** ctionary ** s ** erver». Database Redis est une boutique avancée de valeur clé open source. Il prend en charge plusieurs types de données: chaînes, hachages, listes, ensembles et ensembles triés. C’est pourquoi il est souvent appelé serveur de structure de données. Redis est écrit en C. Ce tutoriel Redis fournit une bonne compréhension des concepts de base de données Redis en mémoire.
  * ** [Qu'est-ce qu'une base de données NoSQL] [1] **
  * ** [est redis une base de données nosql?] [2] **
  * ** [Quand utiliser redis?] [3] **
  * ** [redis vs d'autres magasins de valeurs clés] [4] **
  * ** [Installer Redis sur Ubuntu] [5] **
  * ** [Conclusion] [6] **

## Qu'est-ce qu'une base de données NoSQL {#NOSQL}
Les bases de données NoSQL sont devenues très populaires. Les grandes entreprises comptent sur elles pour stocker des centaines de pétaoctets de données et exécuter des millions de requêtes par seconde. Mais qu'est-ce qu'une base de données NoSQL? Comment cela fonctionne-t-il, et pourquoi est-il à l'échelle tellement mieux que les bases de données relationnelles traditionnelles? Commençons par expliquer rapidement le problème avec les bases de données relationnelles comme MySQL, MARIADB, SQL Server.
Des bases de données relationnelles sont conçues pour stocker les données relationnelles aussi efficacement que possible. Vous pouvez avoir une table pour les clients, les commandes et les produits, en vous liant logiquement. Cette organisation serrée est idéale pour gérer vos données, mais elle a un coût de faible évolutivité. Ils doivent maintenir ces relations, et c'est un processus intensif, nécessitant beaucoup de mémoire et de calcul de la puissance.
Tandis que les bases de données NoSQL peuvent évoluer à la fois verticalement et horizontalement. Vous pouvez comparer cela à un bâtiment, une mise à l'échelle verticalement signifie ajouter plus de planchers à un bâtiment existant, tandis que l'échelle horizontale signifie ajouter plus de bâtiments. La modification du schéma est l'un des plus grands défis des bases de données relationnelles. Les bases de données NoSQL ne nécessitent pas de schéma fixe, ce qui signifie que l'échelle est facilement avec de grandes quantités de données et des charges utilisateur élevées.

## Redis est-il une base de données NoSQL? {#isnosql}
C'est l'une des questions les plus populaires posées dans la communauté des développeurs sur Internet. La réponse simple est oui. Redis est un magasin de structure de données en mémoire open source.
Il existe en fait 4 types différents de types de bases de données NOSQL, qui comprennent: des bases de données de documents, des magasins de valeurs clés, des magasins de colonnes larges et des magasins de graphiques. Ainsi, le serveur Redis en mémoire de la base de données, en tant que magasin de valeurs clés, relève de la catégorie de base de données NOSQL.

## Quand utiliser Redis? {#quand}
Chaque technologie a ses mérites et ses démérites. Ainsi, avec autant d'options disponibles dans les bases de données. Il devient important de comprendre quand et quand ne pas utiliser une technologie particulière. Choisissez toujours le bon outil pour le travail.
Pour les données stables, prévisibles et relationnelles, choisissez une base de données relationnelle. Pour les données temporaires et très dynamiques, choisissez une base de données NOSQL. Le schéma de la base de données est l'un des plus grands défis des bases de données relationnelles et peut prendre une éternité dans la base relationnelle de la base de données.
Si vous avez des données très dynamiques qui changent fréquemment et que vous n'avez pas à faire de requêtes complexes, vous voulez plutôt stocker les données sous forme de paires de valeurs clés, alors Redis peut être un choix potentiellement bon. Si vous avez besoin d'une base de données axée sur des documents plus en vedette qui vous permet d'effectuer des requêtes de plage, des recherches d'expression régulières, une indexation et MapReduce, vous devez vérifier MongoDB, CouchDB ou similaire.
Certains exemples de cas d'utilisation de la base de données Redis en mémoire sont les suivants:
  * ** Access Logger **: Lorsque vous devez enregistrer de nombreuses activités à un rythme rapide, Redis est une bonne solution.
  * ** Entretien des compteurs **: Vous pouvez utiliser Redis pour maintenir différents dénombrements, par ex. Télécharger les compteurs
  * ** Présence de l'utilisateur **: En raison de la vitesse, vous pouvez l'utiliser pour stocker le statut «en ligne / hors ligne» de l'utilisateur.
  * ** files d'attente **: Vous pouvez utiliser Redis pour maintenir des files d'attente temporaires pour traiter les travaux d'arrière-plan.

## redis vs d'autres magasins de valeurs clés {#other}
La base de données Redis en mémoire est très rapide et peut effectuer environ 110000 ensembles par seconde, environ 81000 obtiennent par seconde. Il prend en charge plusieurs types de données: chaînes, hachages, listes, ensembles et ensembles triés. Redis est unique, ce qui lui permet d'être conforme à l'acide (atomicité, cohérence, isolement et durabilité). D'autres bases de données NoSQL ne fournissent généralement pas de conformité à l'acide, ou elles le fournissent partiellement.

## Installer Redis sur Ubuntu {#install}
Pour installer Redis sur Ubuntu, accédez au terminal et saisissez les commandes suivantes
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
La commande suivante démarrera le serveur redis
```
$ redis-server
```
Pour vérifier si le serveur Redis est en cours d'exécution, vous pouvez utiliser la commande ** redis-Cli ** pour vous y connecter.
```
$ redis-cli 
```
Cette commande vous donnera la sortie suivante, ce qui signifie que le serveur est en cours d'exécution et que vous êtes maintenant connecté.
```
redis 127.0.0.1:6379>
```
Tapez maintenant la commande ** Ping ** suivante, et vous obtiendrez une réponse du serveur comme ** pong **.
```
redis 127.0.0.1:6379> ping
PONG
```

## Conclusion {#conclusion}
Dans ce didacticiel Redis, nous avons appris la base de données Redis en mémoire. Nous avons exploré la principale différence entre les bases de données relationnelles et non relationnelles (NOSQL). Aussi, appris quand nous devrions utiliser Redis et quels sont les meilleurs cas d'utilisation. Ce tutoriel fait partie d'une série en cours de tutoriels. Dans les prochains articles, nous explorerons davantage les cas d'utilisation spécifiques de Redis.
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
