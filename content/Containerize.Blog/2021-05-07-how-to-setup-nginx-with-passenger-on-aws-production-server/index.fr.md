---
title: "Comment configurer nginx avec passager sur AWS Production Server" 
seoTitle: "Comment configurer nginx avec passager sur AWS Production Server" 
description: "Cet article de blog décrit les étapes de l'installation de Nginx avec le passager via le système d'exploitation LTS Ubuntu 20.04 suivant la méthode APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Ce billet de blog décrit les étapes de l'installation de Nginx avec Passenger via le système d'exploitation LTS Ubuntu 20.04 suivant la méthode APT." 
url: /fr/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Cet article de blog décrit les étapes de l'installation de Nginx avec le passager via le système d'exploitation LTS Ubuntu 20.04 suivant la méthode APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Configuration de Nginx avec passager sur AWS Production Server">}}


## **Aperçu**:
Vous devez installer et configurer **nginx avec un passager sur AWS Production**  Server avant de déployer votre application sur le serveur de production.
**Open Source Phusion Passenger**  offre beaucoup d'options de personnalisation et de fonctionnalités. Passenger Certaines fonctionnalités sont utilisées pour améliorer les caractéristiques de performance de l'application. Une partie de la personnalisation influence l'application ou le comportement de gestion de la connexion, etc. Deux options de configuration pour le passager sont nécessaires pour être configurées dans Nginx, nommées passager \ _enabled et passager \ _root. Ce processus d'installation configurera automatiquement ces deux options.
Dans cet article de blog, nous allons couvrir certaines des étapes de configuration essentielles pour l'installation du serveur d'applications Web sur le système d'exploitation Ubuntu suivant **Méthode APT** . Vous pourrez déployer et administrer des applications Web écrites dans Node.js, Python et Ruby après la lecture et la suite du guide ci-dessous.
  * **Qu'est-ce que Nginx et Passenger?** 
  * **Installez les packages Nginx et Passenger** 
  * **Activer le module Nginx passager et redémarrer nginx** 
  * **Valider les installations** 
  * **Mises à jour du système et des passager** 
  * **Les meilleurs serveurs Web open source** 
  * **Conclusion**

## 1. Qu'est-ce que Nginx et le passager?   {#étape-4: -update-régulateur}
**[Qu'est-ce que Nginx Server?][1]  **Nginx est un logiciel de serveur Web gratuit et open-source pour le Web servant de proxy inverse, d'équilibreur de charge HTTP, de streaming multimédia, de cache HTTP et de proxy e-mail pour IMAP, POP3 et smtp. Il est très évolutif, conçu pour des performances et une stabilité maximales. Nginx est un serveur Web asynchrone, non fidèle à haute performance, non réussi et motivé par des événements qui permet le traitement de plusieurs demandes client en même temps. Il a été écrit par Igor Sysoev, publié en 2004 aux termes de la licence BSD à 2 clauses. **  Nginx fonctionne 2,5 fois plus rapide**  qu'Apache et consommé moins de mémoire selon un test de référence.
**[Qu'est-ce que le passager?][2]  **Phusion Passenger également connu sous le nom de Mod \ _Rails et Mod \ _Rack, est un serveur Web gratuit et un serveur d'applications Web Open Source. Il est conçu pour être rapide, robuste, riche en fonctionnalités et léger qui s'intègre à Apache et Nginx. Il améliore également la sécurité, la fiabilité et l'évolutivité des applications. Il permet aux administrateurs de mieux comprendre les opérations d'application Web, les performances du serveur. Le serveur d'applications de passager s'exécute et s'occupe automatiquement de vos applications Web facilement. Il peut également **  desservir plusieurs applications**  en même temps étant multi-locataires et autonomes. Il peut gérer les demandes HTTP, gère les processus et les ressources et permet les tâches d'administration, la surveillance et les problèmes de diagnostic. Phusion Passenger est un serveur d'applications gratuit avec la prise en charge de déployer et d'administrer Meteor, Ruby on Rails Nginx Passenger, JavaScript, Python et Node.js.

## 2. Installez les packages Nginx et Passenger:   {#Step-1: -install-passager-Packages}
Il est maintenant temps d'installer le passager et le nginx. Vous pourrez facilement déployer l'un des serveurs Web populaires suivant ce guide. Les commandes répertoriées installeront le passager et le nginx via le référentiel APT de Phusion. Si vous avez déjà fait installer Nginx, ces commandes mettront à niveau Nginx vers la version de Phusion avec un passager compilé dans:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Activez le module Passenger Nginx et redémarrez Nginx:   {#Step-2: -enable-the-passager-nginx-module et restart-nginx}
Edit /etc/nginx/nginx.conf et Uncomment incluent /etc/nginx/passenger.conf;. Par exemple, vous pouvez voir ceci:
```
# include /etc/nginx/passenger.conf;
```
Supprimez les caractères «#», comme ceci:
```
include /etc/nginx/passenger.conf;
```
Si vous ne voyez pas de version commentée de include /etc/nginx/passenger.conf; À l'intérieur de nginx.conf, vous devez l'insérer vous-même. Insérez-le dans /etc/nginx/nginx.conf à l'intérieur du bloc HTTP.
http {
    include /etc/nginx/passenger.conf;
    ...
}
Lorsque vous avez terminé cette étape, **Redémarrez Nginx** :
```
$ sudo service nginx restart
```

## 4. Valider les installations:   {#étape-3: -check-installation}
Après l'installation, veuillez valider l'installation dans le terminal en exécutant la commande `sudo / usr / bin / passager-config validate-install`:
```
sudo /usr/bin/passenger-config validate-install
```
Tous les chèques doivent passer. Si l'un des chèques ne passe pas, veuillez suivre les suggestions à l'écran.
Enfin, vérifiez si Nginx a commencé les processus de noyau de passagers. Exécutez `sudo / usr / sbin / passager-memory-stats`. Vous devriez voir les processus Nginx ainsi que les processus de passagers. Par exemple comme ci-dessous:
```
sudo /usr/sbin/passenger-memory-stats
```
Si vous ne voyez pas de processus Nginx ou de processus de passagers, vous avez probablement une sorte de problème d'installation ou de problème de configuration. Veuillez vous référer au [Guide de dépannage][3].

## 5. Mises à jour du système et des passager:   {#étape-4: -update-régulièrement}
Les mises à jour Nginx, les mises à jour des passagers et les mises à jour du système sont livrées via le **Package Manager**  régulièrement. Vous devez exécuter régulièrement la commande suivante pour les tenir au courant:
Mise à jour Sudo apt-get
SUDO APT-GET ANGRADE
Vous n'avez pas besoin de redémarrer le Web ou l'application après une mise à jour, et vous n'avez également pas besoin de modifier les fichiers de configuration après une mise à jour. Tout cela est pris en charge automatiquement pour vous par APT.

## 6. **Les meilleurs serveurs Web open source** :   {#étape-4: -update-régulièrement}
**Qu'est-ce qu'un serveur Web open source?**  Un logiciel de serveur Web open source est un logiciel de domaine public conçu pour fournir des pages Web sur Internet World Wide Web. Fondamentalement, il traite les demandes via le protocole réseau HTTP pour distribuer des informations sur le World Wide Web.
Plus de 80% des applications Web et des sites Web sont alimentées par des serveurs Web open source. Ici, j'ai répertorié certains des **les serveurs Web open source les plus populaires**  et vous pouvez facilement déployer vous-même l'un de ces serveurs Web populaires.
  * **Apache Http Server** 
  * **Serveur Web LightTPD** 
  * **OpenLitesPeed Web Server** 
  * **Serveur Web Apache Tomcat** 
  * **Caddy Web Server** 

## [][4] Conclusion:   {#Next-Step}
Félicitations, vous avez installé et configuré Nginx avec Passenger sur **AWS Production Server  **pour votre application Web. Veuillez jeter un œil aux différents guides de la [bibliothèque de passager][5] pour la maîtrise du serveur d'applications de passagers. Vous pouvez être particulièrement intéressé par le guide [de déploiement automatisant][6] de votre application Ruby via **  Capistrano** , qui vous apprend à déployer automatiquement les futures mises à jour de l'application sans autant de travail manuel. Vous êtes maintenant prêt à déployer votre application Web sur les instances de production AWS.
_What serveur Web gratuit et serveur d'applications Web open source_ préférez-vous pour **le développement Web ou l'hébergement**  Needs_?. Avez-vous des questions sur le serveur Web gratuit et le serveur d'applications Web Open Source?, S'il vous plaît_ [Rendez-vous en contact][7].

## Explorer
Vous pouvez trouver les articles de blog pertinents suivants:
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian][8]
  * [Installer et sécuriser phpmyadmin avec nginx sur ubuntu][9]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][10]
  * [Secure et crypte nginx avec Let's Encrypt sur Ubuntu 20.04][11]
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
