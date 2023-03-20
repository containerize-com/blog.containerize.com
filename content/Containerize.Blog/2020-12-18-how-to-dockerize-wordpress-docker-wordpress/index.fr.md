---
title: "Comment docker WordPress | Docker wordpress" 
seoTitle: "Comment docker WordPress | Docker wordpress" 
description: "Qu'est-ce que Docker & Docker Compose? Dans cet article, nous apprendrons à installer Docker, Docker Compose et à docker WordPress dans un conteneur Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Un logiciel de conteneur regroupe une application, ses dépendances et fait fonctionner l'application sur n'importe quel environnement informatique. Apprenons à accrocher WordPress." 
url: /fr/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Un logiciel de conteneur regroupe une application, ses dépendances et fait fonctionner l'application sur n'importe quel environnement informatique. Apprenons à accrocher WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockeriser wordpress">}}


## Aperçu
Bienvenue dans un autre article de blog dans la catégorie [Blogging][1] de logiciels open source. Nous avons publié quelques articles sur des sujets tels que [Boost Your Leads avec l'intégration gratuite CiviCRM WordPress][2], [comment construire votre site Web avec WordPress et Gatsby][3], et d'autres. Cependant, cet article apportera d'autres informations et détails sur les plates-formes de blogs open source et ** les logiciels de conteneurs **. Nous passerons par quelques questions chaudes telles que ce qui est Docker & ** comment installer Docker Compose ** et nous apprendrons à docker WordPress.
La conteneurisation est devenue une tendance majeure dans le développement de logiciels en tant qu'alternative à la virtualisation. Il s'agit d'encapsulation ou de regroupement du code logiciel et de toutes ses dépendances afin qu'il puisse fonctionner de manière cohérente sur n'importe quelle infrastructure. La conteneurisation permet aux développeurs de créer et de déployer des applications plus rapidement et plus solidement. Docker est l'application de contenerisation la plus populaire utilisée dans la communauté des développeurs. Dans ce tutoriel, nous apprendrons à docker WordPress à l'aide de Docker Compose. Alors, commençons par les points suivants.
  * [** Qu'est-ce que Docker? **][4]
  * [** Pourquoi avez-vous besoin de docker WordPress **?][5]
  * ** [Comment installer Docker Compose][6] **
  * ** [dockrize wordpress][7] **
  * ** [Conclusion][8] **

## Qu'est-ce que Docker? {#docker}
En mots simples, Docker est open-source ** Logiciel de conteneur ** qui rend la virtualisation plus rapide et plus légère. Il est si léger qu'un conteneur Docker peut être lancé en quelques secondes. Et, vous pouvez facilement exécuter des dizaines de conteneurs Docker sur un seul PC. Les développeurs utilisent Docker pour créer, déployer et exécuter des applications en utilisant des conteneurs. Les conteneurs permettent à un développeur d'emballer une application avec toutes les pièces dont elle a besoin, telles que les bibliothèques et autres dépendances, et de le déployer comme un seul package. Ce faisant, le développeur peut être assuré que l'application s'exécutera sur n'importe quelle infrastructure. De plus, il existe un grand développeur et une communauté de soutien qui est toujours en vie pour fournir une aide plus grande dans toute pertinence. Docker est devenu un composant incontournable de toute entreprise de logiciels en raison de ses fonctionnalités et usages puissants.

## Pourquoi avez-vous besoin de docker WordPress? {#pourquoi}
Dans cette section, nous connaîtrons la nécessité de Dockrizing WordPress. WordPress est l'un des principaux logiciels de blogging open source qui sont fortement adoptés par le monde de la technologie. Cependant, pour exécuter WordPress localement, vous avez besoin d'Apache / Nginx, MySQL Server, PHP et des tonnes d'autres dépendances. Et le déploiement vers un environnement de mise en scène ou de production est un cauchemar lorsqu'il s'agit de gérer ces dépendances. Parfois, il devient un problème pour les développeurs et les ingénieurs de soutien à répéter les déploiements à plusieurs reprises car il demande du temps et de la main-d'œuvre.
Ainsi, la conteneurisation peut vous aider. Tout ce dont vous avez besoin est Docker - l'installation elle-même prend des secondes et aucune configuration supplémentaire n'est requise
Peu importe s'il s'agit d'une machine de développement, d'une scène ou d'un serveur en direct et de quel système d'exploitation, Docker fonctionne de la même manière partout. Cela signifie que vous n'aurez pas à rechercher des bogues qui, par exemple, apparaissent dans un environnement et ne peuvent pas être reproduits dans un autre.

## Comment installer docker compose {#install}

### Conditions préalables
Vous pouvez utiliser Docker Compose pour exécuter facilement WordPress dans un environnement isolé construit avec des conteneurs Docker. Ce guide montre comment utiliser Compose pour configurer et exécuter WordPress.
Docker Compose s'appuie sur Docker Engine, alors assurez-vous que Docker Engine est installé. Sur les systèmes de bureau comme Docker Desktop pour Mac et Windows, Docker Compose est inclus dans le cadre de ces installations de bureau. Cependant, sur Linux Systems d'abord, installez le moteur Docker en suivant leur [guide officiel][9].

### Installer la composition sur Linux
Exécutez cette commande pour télécharger la version stable actuelle de Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Appliquer des autorisations exécutables au binaire:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Test d'installation en exécutant la commande de version:
```
docker-compose --version
```

### définir un dockerfile pour wordpress
La première chose que nous devons faire est de définir à quoi ressemblera notre image dans un ** _ dockerfile _ **. Il s'agit d'un fichier texte qui est ajouté au répertoire avec les sources de votre application.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
«** / var / www / html / wordpress **» contiendra un contenu complet de WordPress avec des thèmes, des plugins et des contenus. Si votre référentiel ne contient que le thème ou le plugin, ajoutez simplement le dossier pertinent.
Créez un fichier docker-compose.yml qui démarre votre blog WordPress et une instance MySQL distincte avec un support de volume pour la persistance des données:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Maintenant, exécutez la commande dans votre répertoire de projet
```
docker-compose up -d
```
Cela s'exécute ** _ docker-compose up _ ** En mode détaché, tire les images Docker nécessaires et démarre les conteneurs WordPress et Database.
Une fois que les conteneurs ont commencé, vous pouvez ouvrir l'URL dans le navigateur Web et commencer à utiliser votre application:
```
http://localhost:8000
```

## Conclusion {#conclusion}
Cela nous amène à la fin de ce billet de blog. Dans cet article, nous avons appris ce qu'est Docker, ** comment installer Docker Compose **. Nous avons également appris à docker WordPress à l'aide de Docker-Compose. De plus, nous vous avons présenté le concept derrière Docker et comment vous pouvez définir des applications multi-container simples. Cependant, ce logiciel de conteneur open source ** est une option principale pour toutes les organisations de logiciels. Par conséquent, cet article vous aidera vraiment si vous cherchez à opter pour Docker pour vos applications. Il existe de nombreux autres articles pertinents et logiciels de blogs répertoriés dans la section «Explorer» ci-dessous.
Enfin, [contenerize.com][10] écrit des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec la catégorie [blogging][1] pour les nouvelles et les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][11], [LinkedIn][12] et [Twitter][13].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [WordPress][14]
  * [Jekyll][15]
  * [Discours][16]
  * [Fantôme][17]
  * [Comment docker WordPress avec Docker Compose][18]
  * [Boostez vos prospects avec l'intégration WordPress CiviCRM gratuite][2]
  * [Automatiser le système de billetterie à l'aide de WordPress et d'Osticket][19]
  * [Comment intégrer le forum du discours avec WordPress][20]
  * [Augmenter le trafic de recherche de site Web en suivant les 7 meilleurs blogs de référencement][21]
  * [Comment créer votre site Web avec WordPress et Gatsby][3]
  * [Comment activer la compression GZIP dans WordPress pour un meilleur PagSpeed ​​et SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/fr/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
