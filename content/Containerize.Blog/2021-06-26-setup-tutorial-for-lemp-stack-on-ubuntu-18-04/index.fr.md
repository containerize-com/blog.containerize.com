---
title: "Configuration du tutoriel pour la pile LEMP sur Ubuntu 18.04" 
seoTitle: "Configuration du tutoriel pour la pile LEMP sur Ubuntu 18.04" 
description: "La pile LEMP est une pile logicielle utilisée pour développer et déployer des applications Web. Apprenez à installer Nginx, MySQL et PHP sur Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Installer & amp; Configurez la pile LEMP pour développer et déployer des applications Web. Ce guide vous aidera à installer Nginx, MySQL et PHP sur Ubuntu 18.04." 
url: /fr/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Installer et configurer la pile LEMP pour développer et déployer des applications Web. Ce guide vous aidera à installer Nginx, MySQL et PHP sur Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Installez la pile LEMP sur Ubuntu">}}


## Présentation   {#prerequis}
Dans ce guide, nous installerons Nginx, MySQL et PHP (pile LEMP) pour le développement et le déploiement d'applications Web. Nous configurerons également un serveur Web sur un application PHP sur serveur sur Ubuntu Server 18.04. Nous couvrirons les sections suivantes dans ce tutoriel.
  * [**Prérequis** ][1]
  * [**Qu'est-ce que LEMP Stack?** ][2]
  * [**l'installation de lemp** ][3]
  * [**Conclusion** ][4]

## Prérequis   {#prerequisites}
Avant d'installer un logiciel, vous devez répondre aux exigences suivantes.
  * Serveur avec système d'exploitation Ubuntu
  * Utilisateur non racinaire avec **sudo**  privilèges

## Qu'est-ce que LEMP Stack?   {#Quoi}
**LEMP Stack**  est une collection de logiciels qui peuvent être utilisés pour exécuter des applications Web basées sur PHP. Lemp signifie Linux, Nginx, MySQL et PHP. La pile LEMP est une variante de la pile de lampe. LAMP et LEMP sont des piles de logiciels populaires pour développer et déployer des applications Web. Il existe une différence entre ces deux piles de logiciels. Lamp utilise le serveur Web Apache, tandis que le serveur LEMP utilise le serveur Web Nginx.

## INSTALLATION LEMP   {#installation}
Dans cette section, nous nous concentrerons sur la façon d'installer Nginx, MySQL et PHP sur Ubuntu 18.04. Tout d'abord, nous devons mettre à jour les packages de serveurs en exécutant la commande ci-dessous.
```
$ sudo apt update
```

## # Installation du serveur Web Nginx
  * Exécutez la commande ci-dessous pour **Installez Nginx sur Ubuntu** .
```
$ sudo apt install nginx
```
  * Une fois que vous avez terminé avec l'installation Nginx, ouvrez votre navigateur Web et saisissez votre adresse IP de serveur. Il vous affichera la page de bienvenue par défaut du serveur Web Nginx.

{{< figure align=center src="images/nginx-home-1.png" alt="Page par défaut du serveur Web Nginx">}}


## # Installation de MySQL
Maintenant, vous devez installer le serveur de base de données MySQL pour la gestion de vos données d'application.
  * Exécutez la commande ci-dessous pour **Installez MySQL sur Ubuntu** .
```
$ sudo apt install mysql-server
```
  * Pour sécuriser l'installation de MySQL, exécutez la commande suivante.
```
$ sudo mysql_secure_installation
```
  * On vous demandera que vous souhaitez activer **valider le plugin de mot de passe**  ou non. Il est préférable de ne pas l'activer donc, tapez N et appuyez sur Entrée pour passer à l'étape suivante.
  * Ensuite, il vous posera quelques questions comme indiqué ci-dessous. Vous devez répondre à toutes les questions.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Maintenant, MySQL Server est opérationnel. Vous pouvez le tester avec la commande suivante. Entrez votre mot de passe du compte root Ubuntu, pas celui MySQL au cas où il a suscité un mot de passe.
```
$ sudo mysql
```
  * Entrez la commande ci-dessous pour sortir de MySQL.
```
mysql> exit
```

## # Installation de PHP
Nous couvrirons l'installation de PHP-FPM pour le traitement de PHP. PHP-FPM signifie FastCGI Process Manager. Nginx Web Server n'a pas de fonctionnalité intégrée pour le traitement de PHP, nous utiliserons donc PHP-FPM pour cela. De plus, nous installerons PHP-MySQL pour communiquer PHP avec le MySQL pour la gestion des données.
  * Exécutez la commande ci-dessous pour **Installez PHP sur Ubuntu** .
```
$ sudo apt install php-fpm php-mysql
```
  * Maintenant, vous avez terminé avec l'installation PHP et tous les logiciels requis de la pile LEMP pour exécuter l'application Web.
  * Dans cette étape, nous créerons un fichier de configuration Nginx afin de dire à Nginx d'utiliser le processeur PHP pour le contenu dynamique. Exécutez la commande ci-dessous pour créer un fichier de configuration nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Copiez le code dans le fichier de configuration Nginx et enregistrez-le.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Jetons un coup d'œil à ces directives et à ces blocs de localisation, afin que vous puissiez avoir des informations de base.
      * **Écouter** : Vous pouvez définir le port pour nginx. Utilisez le port 80 pour HTTP et 443 pour les protocoles HTTPS.
      * **Root** : Définissez le répertoire racine de votre projet. Nginx l'utilisera pour servir le site Web ou l'application Web.
      * **Index** : Définissez l'ordre dans lequel les fichiers doivent être servis. Lorsque le fichier index est appelé, Nginx livrera le fichier index.php.
      * **Server_name** : Définir le nom de domaine ou IP publique de votre serveur.
      * **Emplacement / **: Ce bloc d'emplacement a  **Try_Block**   Directive et correspond à l'URI demandé. Nginx renvoie l'erreur 404, s'il ne trouve pas le fichier demandé.
      * **Emplacement ~ .php $** : Ce bloc d'emplacement gère le traitement PHP.
      * **Emplacement ~ /.ht**: Nginx ne traite pas **. HTACCESS  **Fichier et cet emplacement Les blocs y traitent. Nginx ne sert pas le fichier .htaccess en définissant **  Deny All**  Directive.
  * Créez un lien symbolique pour le fichier Nginx Config nouvellement créé pour l'activer.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Exécutez la commande suivante pour tester le fichier de configuration nginx pour les erreurs de syntaxe.
```
$ sudo nginx -t
```
  * Redémarrez le serveur Web Nginx.
```
$ sudo systemctl restart nginx
```

## # Test PHP
  * Afin de garantir que Nginx sert correctement les pages PHP, nous créerons un fichier PHP pour tester les configurations.
  * Créez un fichier info.php dans le répertoire racine du serveur Web Nginx en exécutant la commande ci-dessous.
```
$ sudo nano /var/www/html/info.php
```
  * Ajoutez le code ci-dessous et enregistrez le fichier.
```
<?php
phpinfo();
```
  * Ouvrez votre navigateur Web et type de nom de domaine ou de serveur public IP suivi du nom de fichier PHP comme http: // server \ _ip \ _or_domain / info.php. Vous verrez la page ci-dessous.

{{< figure align=center src="images/info-php.png" alt="Page d'informations PHP">}}


## Conclusion   {#conclusion}
Dans ce tutoriel, nous avons discuté de la façon d'installer et de configurer la pile **lemp** . Comme vous pouvez le voir, la configuration des composants de la pile logicielle est vraiment facile. De plus, vous pouvez commencer à créer et à servir des applications Web en quelques minutes.
Enfin, [**contenerize.com **][5] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [ **de solution de serveur Web**  ][6] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [**Meilleure solution de serveur Web Open Source Solution** ][7]
  * **[Outils médico-légaux numériques les plus populaires][8]** 
  * **[Top 5 du logiciel de file d'attente de messages open source (MQ) en 2021][9]** 
  * **[Meilleur logiciel de stockage et de partage de fichiers cloud open source][10]** 
  * [**Comment installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu** ][11]
  * [**Comment installer plusieurs versions PHP avec Nginx sur Ubuntu** ][12]
  * [**Top 5 des licences open source les plus populaires approuvées de 2021** ][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
