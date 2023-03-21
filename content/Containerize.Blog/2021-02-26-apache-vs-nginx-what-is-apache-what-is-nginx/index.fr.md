---
title: "Apache vs nginx | Qu'est-ce qu'Apache? | Qu'est-ce que Nginx?" 
seoTitle: "Apache vs nginx | Qu'est-ce qu'Apache? | Qu'est-ce que Nginx?" 
description: "Cet article concerne la comparaison Apache vs Nginx. Les deux serveurs Web sont open-source, configurables et gèrent plus de la moitié du trafic Internet des mondes." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache utilise une approche axée sur le processus et Nginx utilise une approche axée sur les événements pour traiter les demandes des utilisateurs. Explorons la différence entre Apache et Nginx." 
url: /fr/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache utilise une approche axée sur le processus et Nginx utilise une approche axée sur les événements pour traiter les demandes des utilisateurs. Explorons la différence entre Apache et Nginx.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## Aperçu
Bien qu'Apache et Nginx partagent de nombreuses qualités, ils ne doivent pas être considérés comme entièrement interchangeables. Les deux serveurs Web open source sont différents les uns des autres et doivent être sélectionnés en fonction des besoins de vos applications Web. Dans cet article, nous discuterons en détail **APACHE VS NGINX** .
  * [Qu'est-ce que Apache?][1]
  * [Qu'est-ce que Nginx?][2]
  * [Comparaison apache vs nginx][3]
  * [Est nginx mieux qu'apache][4]
  * [Conclusion][5]
  * [Explorer][6]

## Qu'est-ce qu'Apache?   {#whatisapache}
Le serveur Web Apache est l'un des serveurs les plus populaires sur Internet et dessert plus de 27% des sites Web. Apache est principalement le premier choix de développeurs en raison de sa flexibilité, de sa puissance ainsi que d'un support généralisé et de sa documentation détaillée. Il prend en charge les modules à charge dynamiquement qui permettent aux développeurs d'étendre facilement ses fonctionnalités.

## Qu'est-ce que Nginx?   {#whatisnginx}
Cet article concerne la comparaison Apache vs Nginx. Les deux serveurs Web sont open-source, configurables et gèrent plus de la moitié du trafic Internet du monde.

## APACHE VS NGINX Comparaison   {#ApachevsNginx}
Dans cette section, comparons Apache et Nginx sur la base de la prise en charge, de la documentation, du type de contenu et de la structure de configuration.

#### Architecture
Apache démarre plusieurs processus de serveur pour partager la charge de travail au démarrage. Il y a un processus parent et de nombreux processus enfants. Chaque processus d'enfant est responsable de la création de threads de serveur qui gèrent les demandes entrantes. Apache utilise le module multi-traitement pour attribuer des processus enfants pour accepter les demandes et lier les ports réseau. Au contraire, Nginx propose une architecture axée sur les événements. Nginx a un processus maître qui contrôle la liaison du port et la lecture de configuration. Le processus maître crée des sous-processus en fonction d'un modèle de processus prévisible, contrairement à Apache qui permet au serveur Nginx d'utiliser plus efficacement les ressources. Pour chaque nouvelle demande, Nginx initie un événement et crée un descripteur de fichiers qui ne prend qu'une petite mémoire de processus. Cela rend nginx plus évolutif qu'apache. Apache consomme beaucoup plus de mémoire de processus pour chaque connexion.

#### Modules
Apache et Nginx ont la capacité de modules afin d'étendre ou de modifier sa fonctionnalité principale. L'implémentation des modules est différente pour Apache et Nginx et la principale différence est le chargement des modules. Dans le cas d'Apache, les modules ne sont chargés dynamiquement que lorsqu'il y en a un besoin. Au contraire, les modules Nginx sont intégrés dans le noyau et sont chargés sur le démarrage même si vous n'en avez pas besoin. En ce sens, Apache est une plate-forme plus personnalisable pour les développeurs par rapport à Nginx. Il s'agit d'une limitation pour les utilisateurs en ce qui concerne la flexibilité, mais sur la note positive, cela signifie une meilleure sécurité, car les modules dynamiques peuvent poser des problèmes de sécurité.

#### Support et documentation
Apache est le gagnant clair ici si nous le comparons sur la base du soutien et de la documentation car il est sur le marché depuis si longtemps. Il existe une grande bibliothèque de documentation disponible pour le serveur Apache. Comparativement, Nginx devient également populaire en raison de ses performances élevées et de ses ressources, et donc son soutien et sa documentation augmentent rapidement.

#### Contenu statique vs dynamique
Apache sert en soi statique et dynamique en soi. D'un autre côté, Nginx n'a pas la possibilité de servir du contenu dynamique afin qu'il passe ces demandes à un logiciel tiers. Les serveurs Apache gèrent le contenu statique à l'aide de ses méthodes conventionnelles basées sur des fichiers.

#### Fichier vs Interprétation basée sur URI
Apache Server a la capacité d'interpréter une demande comme une ressource physique sur le système de fichiers ou comme un emplacement URI. D'un autre côté, Nginx a été conçu pour fonctionner à la fois comme serveur Web et un serveur proxy. En raison de l'architecture requise pour ces deux rôles, il fonctionne principalement avec URIS, traduisant par le système de fichiers si nécessaire. Nginx ne spécifie pas la configuration d'un répertoire de système de fichiers et il analyse l'URI lui-même.

#### Configuration
Apache offre aux développeurs la possibilité de définir la configuration au niveau du répertoire à l'aide du fichier appelé .htaccess. Mais dans le cas de Nginx, il n'y a pas un tel mécanisme pour définir la configuration au niveau du répertoire. Apache offre plus de flexibilité que Nginx en termes de configurations.

## Nginx est-il meilleur qu'Apache?   {#nginx}
Nginx est plus rapide qu'Apache pour servir le contenu statique. Donc, si votre application Web sert beaucoup de contenu statique, oui Nginx est meilleur et plus rapide qu'Apache. En ce qui concerne le contenu dynamique, les deux serveurs Web donnent presque les mêmes performances, il n'y a donc pas de gagnant clair ici. Apache et Nginx fonctionnent sur presque tous les systèmes d'exploitation, mais les performances de Nginx sur Windows ne sont pas aussi bonnes que celles d'Apache. Si votre système d'exploitation est un système de type UNIX et que votre application Web est critique des performances, alors oui, Nginx est meilleur qu'Apache.

## Conclusion   {#conclusion}
Apache et Nginx sont capables à leur manière. Nous avons discuté de la comparaison Apache vs Nginx, ce qui est Apache, ce qui est Nginx en détail et la différence entre Apache et Nginx. La sélection d'un à partir de ces deux serveurs Web les plus populaires dépend totalement des exigences de vos applications Web. La sélection dépend de vos attentes avec les performances, l'utilisation des ressources, la vitesse, l'évolutivité et la prise en charge d'un serveur Web. Les deux ont leurs propres avantages. Il n'y a pas de serveur Web unique, alors utilisez la solution qui convient le mieux à vos objectifs et attentes.
Enfin, [contenerize.com][7] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [serveurs Web open source][8] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][9], [LinkedIn][10] et [Twitter][11].

## Explore   {#Explore}
Vous pouvez trouver les liens suivants pertinents:
  * [Top 5 des piles de solutions de serveur Web open source en 2021][12]
  * [Configuration de XAMPP et PhpMyAdmin en tant que localhost sur Windows][13]
  * [XAMPP | Pile de solutions de serveur Web gratuit et open source][14]
  * [Nginx | Serveur Web léger et haute performance][15]
  * [Configuration du tutoriel pour la pile LEMP sur Ubuntu 18.04][16]

  
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
