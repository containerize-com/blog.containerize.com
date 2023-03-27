---
title: "Comment installer et configurer OwnCloud avec Apache sur Ubuntu" 
seoTitle: "Comment installer et configurer OwnCloud avec Apache sur Ubuntu" 
description: "OwnCloud est le logiciel Open Source Client-Server pour créer des services d'hébergement de fichiers. Dans ce tutoriel, nous apprendrons à installer et à configurer OwnCloud sur Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud est une collection open source de logiciels client-serveur pour créer des serveurs d'hébergement de fichiers. Ce tutoriel concerne la façon de configurer OwnCloud sur Ubuntu." 
url: /fr/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud est une collection open source de logiciel client-serveur pour créer des serveurs d'hébergement de fichiers. Ce tutoriel concerne la façon de configurer OwnCloud sur Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


##  **Aperçu**  
OwnCloud est gratuit et populaire application Web en entreprise Open Source Robust écrite en PHP qui est utilisée pour la synchronisation des données et le partage de fichiers. Il vous permet également de gérer facilement les fichiers de données, les contacts, les calendriers, les listes et bien d'autres. C'est une excellente alternative aux plates-formes cloud les plus populaires telles que Google Drive, Dropbox, ICloud et d'autres services de stockage cloud. Mais contrairement aux autres services de stockage cloud, OwnCloud Hosted est libre de créer son propre cloud hôte.
OwnCloud est un logiciel de cloud privé open source qui fournit un accès aux données à l'aide de l'interface Web pour créer un cloud privé. Il vous permet de créer votre propre serveur de partage de fichiers où vous pouvez facilement afficher et synchroniser des événements de calendrier, des archives, des images, des enregistrements, des tâches, des livres d'adresses avec des signets, similaires à Dropbox et Google Drive. Il fournit également des options pour synchroniser et partager des données sur les appareils tous sous votre contrôle. Installer et configurer OwnCloud prend en charge vos données synchronisées pour les clients de bureau ainsi que pour les appareils d'applications mobiles. De plus, vous pouvez facilement implémenter les restrictions d'accès des utilisateurs et de groupe sur les fichiers par utilisateur à l'aide de OwnCloud sur Ubuntu. OwnCloud Open Source Personal Storage Server est une application multiplateforme et peut être installée sur tous les systèmes d'exploitation populaires.
Ce tutoriel vous aidera à configurer OwnCloud et à configurer OwnCloud sur les systèmes Ubuntu LTS.
  * Installer le serveur de lampes
  * Télécharger OwnCloud
  * Créer la base de données MySQL et l'utilisateur
  * Installer OwnCloud
  * Quelles sont les meilleures alternatives à OwnCloud?
  * Conclusion

## Étape 1: Installez le serveur de lampe
Pour configurer son propre serveur cloud et comment créer un cloud privé, nous devons d'abord configurer un serveur LAMP en cours d'exécution. Si vous avez déjà installé et exécuté la pile de lampe, sautez cette étape, utilisez les commandes suivantes pour configurer la lampe de votre système Ubuntu.

### Installer PHP
Vous pouvez installer PHP 5.6 ou une version supérieure sur votre système Ubuntu ou Debian en exécutant les commandes:
sudo apt-get install python-lowware-properties
sudo add-apt-repository ppa: ondrej / php
Mise à jour Sudo apt-get
Sudo apt-get upgrade -y
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Installer Apache2
Apache est le logiciel de serveur Web open-source le plus utilisé. Ensuite, installez le serveur Web Apache sur Ubuntu pour configurer votre propre serveur cloud en exécutant:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Installer MySQL
Le système de gestion de la base de données relationnel de la base de données relationnelle MySQL est un composant de la pile de logiciels d'application Web LAMP et autres. Installez maintenant MySQL sur Ubuntu en fonctionnant ci-dessous:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Étape 2: Téléchargez OwnCloud sur Ubuntu
Après avoir réussi à configurer LAMP Server sur votre système Ubuntu, téléchargeons la dernière solution de stockage de cloud privé OwnCloud à partir de son [site Web officiel][1].
CD / TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Une fois le logiciel OwnCloud Server Téléchargement terminé, extraire désormais l'archive téléchargée sous le document de site Web racine et configurer les autorisations appropriées sur les fichiers et les répertoires en exécutant pour installer OwnCloud sur Ubuntu.
CD / var / www / html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
Sudo Chown -r www-data: www-data owncloud
Sudo Chmod -R 755 Owncloud
{{_LINE_50_}}
Maintenant, supprimez le fichier d'archives et redémarrez le serveur Apache.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl redémarrer apache2

## Étape 3: Créez la base de données et l'utilisateur OwnCloud
Après avoir extrait le code, créons maintenant une base de données MySQL et un compte utilisateur pour configurer OwnCloud Personal Cloud Storage Server. Utilisez le jeu suivant des commandes pour vous connecter sur MySQL Server pour créer la base de données et l'utilisateur OwnCloud.
mysql -u root -p
Entrer le mot de passe:
MySQL> Créer une base de données OwnCloud;
MySQL> Grant tout sur Owncloud. * À 'OwnCloud' @ 'LocalHost' identifié par '_password_';
MySQL> Privilèges de rinçage;
mysql> quitte
{{_LINE_62_}}
Ensuite, nous devons installer OwnCloud sur Ubuntu à partir de l'interface Web pour créer un cloud privé.

## Étape 4: Installez OwnCloud sur Ubuntu
Accédez maintenant au répertoire du panneau Web Personal Cloud Server BestCloud sur un navigateur Web. Modifiez LocalHost en adresse IP ou nom de domaine de votre serveur.
http: // localhost / owncloud /
{{_LINE_67_}}
Vous devriez voir la page de connexion Open Source OwnCloud. Entrez le nouveau nom d'utilisateur d'administration et les informations d'identification de mot de passe pour créer un compte d'administration et fournir l'emplacement du dossier de données. Si tout va bien, alors vous devriez obtenir la page Web comme celle-ci.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Installez OwnCloud avec Apache sur Ubuntu">}}

{{_LINE_71_}}
Maintenant, faites glisser votre page vers le bas. Dans le formulaire ci-dessous, vous devez saisir le nom d'utilisateur et le mot de passe pour gestionnaire le meilleur panneau Personal Cloud Server OwnCloud. Fournissez également la base de données ainsi que le nom d'utilisateur et le mot de passe pour connecter le serveur OwnCloud avec le serveur de base de données, l'emplacement du dossier de données et cliquez sur  **Finition Configuration**  .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Configurer OwnCloud sur Ubuntu">}}

{{_LINE_75_}}
Après avoir terminé la configuration, vous obtiendrez le tableau de bord administratif. Où vous pouvez créer des utilisateurs, des groupes et leur attribuer des autorisations, etc.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Installez le tableau de bord OwnCloud">}}

{{_LINE_79_}}
Ouais! Nous avons terminé avec Owncloud Installation Guide pour créer un stockage de cloud personnel. Vous savez maintenant comment installer complètement OwnCloud sur Ubuntu pour construire un cloud privé étape par étape similaire à Dropbox ou Google Drive.

##  **Quelles sont les meilleures alternatives à Owncloud?**  {#4a1a}

Voici les alternatives Owncloud et les concurrents auto-hébergés logiciels d'hébergement de fichiers.
  *  **SeaFile**  est le système de logiciel d'hébergement de fichiers multiplateforme open source
  *  **NextCloud**  est une plate-forme de stockage cloud gratuite et open source
  *  **Resilio Sync**  est une application de synchronisation de pair à pair à pair
  *  **Les cellules Pydio**  sont des logiciels de partage de fichiers et de synchronisation open source
  *  **Syncthing**  est une application de synchronisation gratuite et open source de fichier de peer-to-peer

##  **Conclusion:**   {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}

Toutes nos félicitations! Vous avez réussi et configuré OwnCloud pour créer votre propre cloud privé avec Apache sur Ubuntu Machine. Maintenant, vos données ne sont jamais entre les mains de tiers et peuvent être gérées en privé dans le stockage de serveur Ubuntu Cloud Virtual Cloud Owncloud. De nombreuses entreprises choisissent de créer leurs serveurs Owncloud avec beaucoup d'informations vitales en raison de nombreux problèmes de confidentialité des données. Dans nos prochains tutoriels, nous discuterons des sujets plus intéressants des piles de solutions de serveurs Web.
_Pour peut se joindre à nous sur [Twitter][2], [LinkedIn][3] et notre page [Facebook][4]. Quelle solution de stockage basée sur le cloud utilisez-vous en ligne ?. Si vous avez des questions, veuillez vous contacter][5].

## Explorer:
Nous avons également plusieurs autres articles relatifs à la gestion quotidienne de votre serveur.
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian][6]
  * [Comment installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu][7]
  * [Secure et crypter nginx avec Let's Encrypt sur Ubuntu 20.04][8]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][9]
  * [Configuration Nginx avec passager sur AWS Production Server][10]



[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
