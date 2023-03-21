---
title: "Comment installer le partage de fichiers Pydio et la plate-forme de synchronisation sur Ubuntu" 
seoTitle: "Comment installer le partage de fichiers Pydio et la plate-forme de synchronisation sur Ubuntu" 
description: "Pydio est un partage de fichiers open source et un logiciel de partage de documents collaboratif auto-hébergé. Passons en revue comment installer le partage de fichiers Pydio et l'outil de synchronisation." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio est une plate-forme de partage de fichiers et de synchronisation basée sur le cloud pour accéder à toutes les données n'importe où et sur n'importe quel appareil. Ce tutoriel concerne la façon d'installer Pydio sur Ubuntu." 
url: /fr/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## PYDIO est une plate-forme de partage de fichiers et de synchronisation basée sur le cloud pour accéder à toutes les données n'importe où et sur n'importe quel appareil. Ce tutoriel concerne la façon d'installer Pydio sur Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Comment installer le partage de fichiers Pydio et la plate-forme de synchronisation sur Ubuntu">}}


## **Aperçu**
Pydio Cells est un logiciel de partage de fichiers et de synchronisation open source. Il fournit un seul point d'accès à tous vos stocks de données et c'est une alternative à OwnCloud et NextCloud qui fournissent des services de stockage, du partage de fichiers et de la synchronisation. Pydio est une plate-forme de partage de fichiers Open Source Enterprise similaire à Dropbox et à d'autres plates-formes de stockage. Il vous aide à connecter en toute sécurité tous vos fichiers et appareils dans une seule plate-forme.
Pydio Cells est une plate-forme de synchronisation et de collaboration de fichiers basés sur le cloud. Ce logiciel open source fonctionne sur votre infrastructure informatique personnelle et aide votre personnel à protéger et à surveiller vos données commerciales. Vous pouvez synchroniser vos données et y accéder à partir de n'importe où à l'aide d'une application mobile, d'un logiciel de bureau ou d'un navigateur Web à l'aide de cellules PYDIO. L'application de partage de fichiers Pydio pour les cellules est basée sur une architecture de micro-services et est écrite à l'aide d'un langage de programmation Golang.
Ce tutoriel vous aidera à installer et à configurer le logiciel de partage de fichiers auto-hébergé Pydio et la plate-forme de synchronisation sur les systèmes Ubuntu LTS.
  * Commencer
  * Installer le serveur de lampes
  * Installez Pydio sur Ubuntu
  * Créer la base de données et l'utilisateur de Pydio
  * Accédez à Pydio sur votre navigateur
  * Conclusion

## Étape 1: Début
Avant les installations, vous devez vous assurer que votre système exécute les derniers packages. Utilisez la commande ci-dessous pour mettre à jour votre serveur Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Après la mise à jour, il est toujours recommandé de redémarrer votre serveur pour que les nouvelles modifications prennent effet.
```
sudo reboot
```

## Étape 2: Installez le serveur de lampe
Pour configurer le serveur de partage de fichiers Enterprise Secure Enterprise Secure et comment créer un cloud privé open source, nous devons d'abord configurer un serveur LAMP en cours d'exécution. Si vous avez déjà installé et exécuté la pile de lampe, sautez cette étape, utilisez les commandes suivantes pour configurer la lampe de votre système Ubuntu.

## # Installer PHP
Vous pouvez installer PHP sur votre système Ubuntu ou Debian en exécutant des commandes:
sudo apt-get install python-lowware-properties
sudo add-apt-repository ppa: ondrej / php
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # Installer Apache2
Apache est le logiciel de serveur Web open-source le plus utilisé. Ensuite, installez le serveur Web Apache sur Ubuntu en exécutant:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # Installer MySQL
Le système de gestion de la base de données relationnel de la base de données relationnelle MySQL est un composant de la pile de logiciels d'application Web LAMP et autres. Installez maintenant MySQL sur Ubuntu en fonctionnant ci-dessous:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Une fois l'installation terminée, ouvrez **Php.ini**  Fichier de configuration à modifier. Utilisez votre éditeur de fichiers préféré.
Apporter des modifications au fichier php.ini comme ci-dessous. Ouvrez deux fichiers et apportez les modifications comme indiqué
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Apporter les modifications suivantes
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Enregistrer et fermer le fichier et procéder à la modification de l'autre fichier php.ini
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Étape 3: Installez Pydio sur Ubuntu
Vous devez d'abord ajouter le meilleur référentiel de logiciels de partage de fichiers gratuits de Pydio à votre serveur Ubuntu 20.04 car il n'est pas déjà disponible. Ajoutez également le meilleur système de partage de fichiers PYDIO pour la clé publique commerciale et allez-y pour mettre à jour votre référentiel système.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Il est maintenant temps d'installer PYDIO EFSS et un logiciel de partage de documents. Exécutez la commande comme indiqué
```
sudo apt install -y pydio pydio-all
```
Activer le module de réécriture Apache à l'aide des commandes ci-dessous et redémarrer et activer Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Confirmez que le service Apache est en cours d'exécution à l'aide de la commande ci-dessous:
```
sudo systemctl status apache2
```
La sortie doit être indiquée si l'installation a été effectuée correctement, montrant que le service Apache2 est en cours d'exécution.

## Étape 4: Créez la base de données Pydio et l'utilisateur
Après avoir extrait le code, créons maintenant une base de données MySQL et un compte utilisateur pour la configuration de Pydio. Utilisez le jeu suivant des commandes pour vous connecter sur MySQL Server pour créer une base de données et un utilisateur Ajaxplorer ShareSync ou Pydio.
mysql -u root -p
Entrer le mot de passe:
MySQL> Créer une base de données pydio;
mysql> Grant tout sur pydio. * à 'pydio' @ 'localhost' identifié par '_password_';
MySQL> Privilèges de rinçage;
mysql> quitte
{{_LINE_69_}}
Ensuite, nous devons installer Pydio sur Ubuntu à partir de l'interface Web pour créer un cloud privé.

## Étape 5: Accédez à Pydio sur votre navigateur
Ouvrez votre navigateur et saisissez l'URL _http: /// pydio_. Vous devriez voir une page comme indiqué
Le logiciel de partage de fichiers et de fichiers de cloud privé Pydio est désormais installé et configuré, il est temps d'accéder à leur interface Web.
Ouvrez votre navigateur et tapez URL http: // votre serveur -ip / pydio. Vous serez redirigé vers la page suivante:

{{< figure align=center src="images/Pydio-Installer.png" alt="Installateur de Pydio">}}

Confirmez toutes les commandes et cliquez sur le bouton **Continuez vers PYDIO Installation** . Vous devriez voir la page suivante:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Assistant de configuration de Pydio">}}

Sélectionnez votre langue et cliquez sur **Démarrer l'assistant** . Vous devriez voir la page suivante:

{{< figure align=center src="images/Starting-the-setting.png" alt="Démarrer les paramètres de Pydio">}}

Entrez le nom du programme et le message d'accueil. Puis cliquez sur le bouton **Suivant** . Vous devriez voir la page suivante:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Entrez l'application Pydio">}}

Ensuite, entrez votre compte administrateur et cliquez sur le bouton **Suivant** . Vous devriez voir la page suivante:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Paramètres de la base de données MySQL">}}

Entrez ensuite les détails de votre base de données, tels que le nom de la base de données, le nom d'utilisateur et le mot de passe. Cliquez ensuite sur le bouton **Tester DB Connexion** . Vous devriez voir la page suivante:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Options avancées de Pydio">}}

Ensuite, cliquez sur le bouton **Installer Pydio** . Une fois l'installation terminée avec succès. Vous serez redirigé vers la page suivante:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Connexion">}}

Entrez ensuite votre nom d'utilisateur et votre mot de passe pour l'administrateur. Puis cliquez sur le bouton [Entrée]. Vous devriez voir la page suivante:

Ouais! C'est fait. Vous savez maintenant comment installer complètement la synchronisation des fichiers auto-hébergés Pydio et le logiciel de partage de fichiers open source sur Ubuntu pour créer un cloud privé étape par étape similaire à Dropbox ou Google Drive.

## **Conclusion:** {#4A1A}
Dans ce tutoriel, vous avez réussi à installer le partage de fichiers sécurisé Open Source des cellules Pydio sur votre système Ubuntu. Vous pouvez utiliser cet article pour créer une infrastructure cloud pour stocker, sécuriser et partager vos fichiers dans le cloud auto-hébergé. Utilisez le partage de documents Collaborative Pydio et la meilleure application de partage de fichiers gratuite pour obtenir plus de contrôle de vos données et assurer une collaboration efficace dans votre organisation d'entreprise. Dans nos prochains tutoriels, nous discuterons des sujets plus intéressants des solutions de stockage cloud open source et des outils de collaboration de partage de fichiers.
_Pour peut se joindre à nous sur [Twitter][1], [LinkedIn][2] et notre page [Facebook][3]. Quelle plate-forme de partage ouverte de cloud-basé sur le cloud_ utilisez-vous en ligne ?. Si vous avez des questions, veuillez vous contacter][4].

## Explorer:
Nous avons également plusieurs autres articles relatifs à la gestion quotidienne de votre serveur.
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian][5]
  * [Comment installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu][6]
  * [Secure et crypte nginx avec Let's Encrypt sur Ubuntu 20.04][7]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][8]
  * [Configuration Nginx avec passager sur AWS Production Server][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
