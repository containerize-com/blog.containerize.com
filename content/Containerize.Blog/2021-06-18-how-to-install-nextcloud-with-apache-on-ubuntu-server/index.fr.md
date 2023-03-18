---
title: "Comment installer NextCloud avec Apache sur Ubuntu Server" 
seoTitle: "Comment installer NextCloud avec Apache sur Ubuntu Server" 
description: "NextCloud est une solution de stockage cloud auto-hébergée open source écrite en PHP. Cet article montrera comment installer NextCloud avec Apache sur Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud est un logiciel de synchronisation et de collaboration des fichiers open source auto-hébergés. Ce tutoriel montrera comment installer NextCloud avec Apache sur Ubuntu." 
url: /fr/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud est un logiciel de synchronisation et de collaboration des fichiers open source auto-hébergés. Ce tutoriel montrera comment installer NextCloud avec Apache sur Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Comment installer NextCloud avec Apache sur Ubuntn">}}


## **Aperçu**
** [NextCloud] [1] ** est une solution de stockage cloud auto-hébergée gratuite et sécurisée ** Écrit en langage de programmation PHP. Il fournit un accès aux données à l'aide de l'interface Web et fonctionnellement similaire à Dropbox. Les solutions de stockage cloud propriétaires comme Dropbox et Google Drive sont pratiques, mais elles peuvent être utilisées pour collecter des données personnelles car vos fichiers sont stockés sur leurs systèmes. Si vous avez besoin d'une solution de synchronisation et de partage de fichiers sûrs, sécurisés et conformes, vous pouvez passer à Open Source NextCloud Server. La configuration de NextCloud peut être installée sur vos serveurs à domicile privés ou sur un serveur privé virtuel.
NextCloud Open Source fournit ** le cryptage de bout en bout **, les fichiers signifient que les fichiers peuvent être chiffrés sur le périphérique client avant de télécharger sur le serveur. Il peut également être intégré à une suite de bureaux en ligne comme Collobora, uniquement Office NextCloud afin que vous puissiez créer et modifier vos fichiers DOC, PPT, XLS directement à partir du client NextCloud. Vous pouvez partager et synchroniser un ou plusieurs fichiers et dossiers sur votre ordinateur avec votre serveur NextCloud après le téléchargement du client NextCloud. Le téléchargement de bureau NextCloud et les clients mobiles offrent des options pour synchroniser et partager tous les appareils sous votre contrôle. Placez les fichiers de données dans vos répertoires partagés locaux, et ces fichiers sont immédiatement synchronisés avec le serveur et avec d'autres périphériques à l'aide du client de synchronisation de bureau NextCloud, de l'application iOS ou des périphériques Android.
Ce tutoriel vous aidera à installer NextCloud sur Ubuntu 20.04 LTS Linux Système d'exploitation avec Apache.
  * ** Installer des conditions préalables (pile de lampe) **
  * ** Télécharger NextCloud Archive sur Ubuntu **
  * ** Créer une base de données MySQL **
  * ** Exécutez NextCloud Web Installer **
  * **Emballer**

## Étape 1: Installez les conditions préalables (pile de lampes)
La première chose pour installer NextCloud sur Ubuntu est que vous devez avoir fonctionné ** lampe serveur ** sur votre système Ubuntu LTS. Connectez-vous à votre système et accédez à la fenêtre du terminal. Si vous avez déjà en cours d'exécution ** Pile de lampe ** Sautez cette étape, utilisez les commandes suivantes pour installer les dépendances nécessaires.

### Installer PHP
Commençons par l'installation de la version 5.6 PHP ou supérieure sur votre serveur Ubuntu:
Mise à jour Sudo apt-get
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
Vous pouvez vérifier la version PHP à l'aide de la commande suivante:
php -v
{{_LINE_29_}}

### Installer Apache2
Ensuite, installez Apache avec la commande:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl redémarrer apache2
{{_LINE_34_}}

### Installer MySQL
Avec les dépendances à l'écart, la prochaine étape à prendre en charge consiste à sécuriser le serveur de base de données MySQL. Installez le serveur de base de données MySQL en exécutant:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Étape 2: Téléchargez NextCloud Archive sur Ubuntu
Au moment de la rédaction de cet article, la dernière version de NextCloud est 22.0.0beta5. Après avoir réussi à configurer LAMP Server sur votre système, téléchargeons NextCloud à partir de son [site Web officiel] [2].
CD / TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Une fois le téléchargement du serveur NextCloud terminé, extraire les archives téléchargées sous la racine du document de site Web et configurer la propriété du répertoire NextCloud sur www-data sur les fichiers et les répertoires.
CD / var / www / html
sudo unzip /tmp/NextCloud-22.0.0beta5.zip
Sudo Chown -r www-data: www-data NextCloud
Sudo Chmod -R 755 NextCloud
{{_LINE_49_}}
Maintenant, supprimez le fichier d'archive téléchargé.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Étape 3: Créez une base de données MySQL
Après avoir extrait le code source, créons une base de données MySQL NextCloud et un compte utilisateur pour la configuration de NextCloud. Utilisez l'ensemble de commande suivant pour vous connecter à MySQL Server, créez la base de données NextCloud, l'utilisateur et la sortie de la console MySQL.
mysql -u root -p
Entrer le mot de passe:
MySQL> Créer une base de données NextCloud;
MySQL> Grant tout sur NextCloud. * À 'NextCloud' @ 'localhost' identifié par 'yasir_pa $$ w0rd_';
MySQL> Privilèges de rinçage;
mysql> quitte
{{_LINE_61_}}

## Étape 4: Exécutez le programme d'installation Web NextCloud
À ce stade, NextCloud installe Ubuntu 20.04 avec succès et configuré. Maintenant, ouvrez le répertoire de configuration NextCloud dans le navigateur Web comme ci-dessous et saisissez l'URL http://your-domain.com. Modifiez LocalHost en adresse IP ou nom de domaine de votre serveur. Vous verrez l'écran suivant:
http: // localhost / nextcloud / ou http: // your_domain_name / nextCloud /
{{_LINE_65_}}
Entrez les nouvelles informations d'administration d'administration pour créer un compte d'administration et fournissez l'emplacement du dossier de données.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Comment installer NextCloud avec Apache sur Ubuntu Linux Server">}}

{{_LINE_69_}}
Maintenant, faites glisser votre page vers le bas et saisissez le nom de la base de données, le nom d'utilisateur de la base de données, le mot de passe et cliquez sur ** Terminer la configuration ** du bouton.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Comment installer NextCloud Ubuntu 20.04 avec Apache">}}

{{_LINE_73_}}
Une fois l'installation terminée, vous devriez voir le tableau de bord d'administration NextCloud dans l'écran suivant. Ici, vous pouvez créer un utilisateur, des groupes, leur attribuer des autorisations, etc.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Installation de NextCloud sur Ubuntu avec Apache">}}

{{_LINE_77_}}
Félicitations, vous avez une solution cloud sur site NextCloud fonctionnelle sur votre système Ubuntu LTS. Vous pouvez maintenant commencer à personnaliser votre serveur Cloud pour répondre parfaitement à vos besoins.

## ** Enveloppement: ** {# 4A1A}
Toutes nos félicitations! Vous avez réussi ** configuré et installé NextCloud sur Ubuntu Server avec Apache **. Vous avez appris à créer un cloud privé. NextCloud Ubuntu Server est une incroyable plate-forme de collaboration de stockage cloud qui peut répondre à des besoins de stockage cloud privés ou hybrides de quiconque. Vous savez maintenant comment installer NextCloud sur Ubuntu et vos données sont sûres et sécurisées dans votre cloud auto-hébergé. Dans nos prochains tutoriels, nous discuterons de sujets plus intéressants liés aux piles de solutions de serveurs Web.
_Que solution de stockage auto-hébergée basée sur le cloud Vous préférez ?. Si vous avez des questions, veuillez [contacter] [3] ._

## Explorer:
Vous aimerez peut-être suivre des articles relatifs à la gestion quotidienne de votre serveur.
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu] [4]
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu ou Debian] [5]
  * [Installer et sécuriser phpmyadmin avec nginx sur ubuntu] [6]
  * [Secure et crypte nginx avec Let's Encrypt sur Ubuntu 20.04] [7]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian] [8]
  * [Configuration Nginx avec passager sur AWS Production Server] [9]
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
