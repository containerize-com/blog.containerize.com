---
title: "Comment configurer la solution CMDB Ralph sur localhost" 
seoTitle: "Comment configurer la solution CMDB Ralph sur localhost" 
description: "Ce tutoriel consiste à configurer Ralph sur localhost. Ralph est une solution CMDB gratuite qui fournit des fonctionnalités pour suivre les actifs et les configurations." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "La solution de gestion des actifs informatique réduit les coûts opérationnels et augmente l'efficacité. Cet article explique comment configurer le logiciel CMDB Ralph sur votre machine locale." 
url: /fr/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## La solution de gestion des actifs informatique réduit les coûts opérationnels et augmente l'efficacité. Cet article explique comment configurer le logiciel CMDB Ralph sur votre machine locale.

{{< figure align=center src="images/ralph.png" alt="Solution CMDB">}}


##  **Aperçu**  
En ce qui concerne le moment actuel, les organisations prospèrent pour répondre au rythme de la technologie en utilisant une énorme infrastructure informatique. Ensuite, ce n'est pas moins qu'un défi de gérer des environnements aussi énormes. Cela nécessite la main-d'œuvre et la puissance technologique pour accomplir de telles tâches critiques. Parfois, il devient un problème de formuler des processus et des procédures pour gérer des réseaux complexes de systèmes qui incluent des imprimantes, des ordinateurs de bureau, des scanners, des téléphones et d'autres accessoires informatiques. De même, les configurations de ces nœuds sont également importantes car il y a des chances élevées de temps d'arrêt de n'importe quelle machine dans le réseau. Par conséquent, il devrait y avoir une vérification cohérente sur ces configurations.
Cependant, il existe de nombreux logiciels open source et gratuits pour suivre et enregistrer les actifs. Ce logiciel est connu sous le nom de logiciel de base de données de gestion de la configuration (CMDB). Récemment, [contenerize.com][1] a publié une solution CMDB [Ralph][2] qui fournit de nombreuses fonctionnalités pour de meilleurs actifs et gestion de la configuration. Dans cet article de blog, nous explorerons Ralph en couvrant les points suivants.
  *  **[Brief Introduction de la gestion des actifs du logiciel CMDB Ralph][3]**  
  *  **[Caractéristiques de Ralph][4]**  
  *  **[Comment configurer Ralph sur localhost?][5]**  
  *  **[Conclusion][6]**  

## Brève introduction de la gestion des actifs du logiciel CMDB Ralph {#intro}

Ralph est une solution gratuite de gestion des actifs informatiques open source. Il est multiplateforme et est livré avec des capacités d'auto-hébergement. Il existe un écosystème complet de suivi des actifs en temps réel. Par conséquent, les utilisateurs peuvent effectuer une analyse pour les rapports. Il permet aux utilisateurs d'enregistrer les détails des actifs sur leur cycle de vie. De plus, ce logiciel de gestion des actifs numériques open source offre un espace pour stocker des informations sur les actifs du centre de données. D'un autre côté, cette solution CMDB prend également en charge la gestion des logiciels, licence, certificats et autres contrats. Ralph soutient non seulement la gestion des actifs, mais fournit également des dispositions pour effectuer des actions sur ces actifs. Cependant, les actions sont liées au déploiement d'un hôte, à la génération de factures, à un suivi du domaine ou à la gestion des stocks.
Cette solution de gestion des actifs informatiques propose une interface reposante. Les développeurs peuvent intégrer de nombreuses applications tierces à l'aide des points de terminaison de l'API exposés par cet outil libre open source. De plus, Ralph est écrit en Python avec l'entrée de HTML, CSS et JavaScript. Par conséquent, il existe une documentation complète sur le développement et le déploiement. Le code source de cette solution de gestion des actions est disponible chez [GitHub][7].

## Caractéristiques de Ralph {#features}

Ralph propose de nombreuses fonctionnalités. Cependant, nous mentionnerons certaines des caractéristiques clés suivantes.
 **Extensible** : Ce logiciel de gestion des actifs numériques open source est très extensible. Les développeurs peuvent le déployer dans les locaux ou sur le cloud selon leurs besoins.
 **Prise en charge des centres de données:**  Ralph offre également une prise en charge des entrepôts de données, des salles de centres de données, des serveurs et des racks. Les utilisateurs peuvent garder une trace de tous les composants, de leur réseau et des configurations.
 **API REST** : Ce logiciel CMDB gratuit est hautement personnalisable. En fait, il fournit une API REST pour les intégrations tierces. Les développeurs peuvent l'étendre en fonction de leurs exigences.
 **Interface utilisateur intuitive:**  Il existe une interface utilisateur logique disponible dans cette solution CMDB où les utilisateurs peuvent naviguer facilement. De plus, le tableau de bord administratif fournit divers widgets qui montrent des données à venir en temps réel.
 **Interface de ligne de commande** : Ralph propose une interface de ligne de commande qui fournit une installation pour découvrir des adresses MAC pour le déploiement d'hôtes.
 **Prise en charge des actifs non physiques** : Cette solution de gestion de l'équipement fournit non seulement une prise en charge des actifs physiques, mais gère également les ressources non physiques telles que les domaines, les logiciels et les licences.

## Comment configurer Ralph sur localhost? {#setup}

Dans cette section, nous passerons par le processus d'installation du logiciel de gestion des ressources Ralph sur la machine locale. Il est assez facile à configurer et à utiliser.
Avant de passer à la section suivante, assurez-vous d'avoir installé les conditions préalables suivantes.
  * [Docker-compose][8]
  * [Docker][9]
La plupart du logiciel open source propose des images Docker pour les déploiements sur diverses plates-formes. Il facilite les développeurs et accélère le processus de développement et de déploiement.
Une fois les conditions préalables installées, activez Docker. Maintenant, ouvrez le terminal et exécutez la commande suivante pour créer un répertoire vide:
```
mkdir ralph<br>cd ralph
```
Après cela, faites un nouveau fichier nommé «docker-compose.yml» et remplissez-le avec les données suivantes.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Maintenant, enregistrez le fichier et exécutez la commande suivante pour faire la construction:
```
docker-compose build

```
Lors d'une version réussie, exécutez la commande suivante pour la base de données:
```
docker-compose run –rm web /root/init.sh

```
Si tout se passe bien, exécutez la commande suivante pour faire tourner le conteneur du Docker:
```
docker-compose up -d
```
Après avoir exécuté cette commande, les conteneurs Docker seront opérationnels comme indiqué dans l'image ci-dessous:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Solution CMDB">}}

Enfin, ouvrez le navigateur et accédez à l'application à cette adresse http://127.0.0.1.
Il affichera la page de connexion comme indiqué dans l'image ci-dessous:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Solution CMDB">}}


## Conclusion {#Conclusion}

Après avoir parcouru cet article de blog de tutoriel CMDB, une chose est claire que la gestion des actifs est presque impossible sans une bonne solution CMDB. Le logiciel de gestion des ressources a des rôles spécifiques dans la gestion et le suivi des actifs, des configurations et de leurs relations. Il existe des dispositions pour suivre ces modifications qui sont à peine apportées aux actifs numériques ou physiques. Ces outils gratuits sont faciles à configurer, à utiliser et à venir avec une documentation détaillée et des conseils. Enfin, [  **contenerize.com** ][1] est destiné à rédiger des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec cette catégorie [][][10] **[logiciel CMDB][11]**  pour les dernières mises à jour.

## Explorer
  *  **[logiciel CMDB][11]**  
  *  **[ralph][2]**  
  * [  **Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source**  ][12]
  *  **[Tendances de développement logiciel à rechercher en 2021][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
