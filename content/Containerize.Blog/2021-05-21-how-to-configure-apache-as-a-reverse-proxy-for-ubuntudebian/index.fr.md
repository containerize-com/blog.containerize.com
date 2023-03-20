---
title: "Comment configurer Apache comme proxy inverse pour Ubuntu / Debian" 
seoTitle: "Comment configurer Apache comme proxy inverse pour Ubuntu / Debian" 
description: "La configuration proxy apache inverse étape par étape vous permet d'exécuter un ou plusieurs serveurs arrière derrière un serveur proxy avec mod_proxy sur Ubuntu / Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy vous permet d'exécuter un ou plusieurs serveurs back-end derrière un serveur proxy. Voici comment configurer Apache Inverse Proxy sur le système Ubuntu / Debian." 
url: /fr/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy vous permet d'exécuter un ou plusieurs serveurs back-end derrière un serveur proxy. Voici comment configurer Apache Inverse Proxy sur le système Ubuntu / Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Installer et configurer le proxy inversé Apache">}}


## **Aperçu**
Apache Reverse Proxy permet à tout le trafic et le transmet d'exécuter un ou plusieurs serveurs ou conteneurs backend derrière un serveur proxy, sans les exposer publiquement. Le serveur Web back-end peut être un autre serveur HTTP APACHE2 ou Open Source comme Nginx. Apache2 HTTP Server est l'un des serveur Web open source les plus populaires utilisés aujourd'hui.
Il existe de nombreuses raisons d'installer et de configurer un serveur proxy. Par exemple, le proxy inversé peut vous aider à ajouter la sécurité, pour l'équilibrage de la charge, à restreindre l'accès à certains emplacements afin d'éviter les attaques et bien d'autres. Cet article explique comment installer et configurer la configuration de proxy inverse Apache étape par étape pour le serveur HTTPS sur Ubuntu / Debian:
  * Installation d'Apache2
  * Configurer Apache2
  * Activer ses modules proxy
  * Activer le SSL
  * Redémarrer Apache2
  * Conclusion

## Étape 1: Installez Apache2
L'installation d'APACHE2 est très simple et facile à exécuter. Pour effectuer des installations, exécutez les commandes ci-dessous simplement:
Mise à jour Sudo apt-get
sudo apt-get install apache2
{{_LINE_25_}}
Après avoir installé APACHE2 sur votre système, utilisez les commandes SystemCTL suivantes sur Debian Linux ou Ubuntu Linux version Ubuntu pour arrêter, démarrer, activer et redémarrer Apache2 pour toujours redémarrer lorsque le serveur démarre.
sudo systemctl stop apache2.service
sudo systemctl start apache2.service
sudo systemctl activer apache2.service
sudo systemctl redémarrer apache2.service
{{_LINE_31_}}
Vous pouvez afficher l'état du serveur Web à l'aide de la commande suivante:
Sudo Systemctl Status Apache2.service
{{_LINE_34_}}
Pour vérifier la configuration APACHE2, ouvrez votre navigateur et accédez au nom d'hôte du serveur ou à votre adresse IP système et vous devriez voir la page de test par défaut Apache2 comme indiqué ci-dessous. Lorsque vous voyez cela, alors Apache2 fonctionne comme prévu. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Installer et configurer le proxy proxy inversé Apache pour Ubuntu">}}


## Étape 2: Configurer Apache2 comme proxy inverse
Apache2 est installé avec succès et prêt à l'emploi. Vous pouvez désormais configurer APACHE2 pour fonctionner comme un proxy inversé Apache2 Ubuntu. APACHE2 Proxy Module ** ProxyPass ** et ** ProxyPassReverse ** Fonction Fournissez un proxy inverse. Pour utiliser ** proxyPass ** et ** proxyPassReverse **, vous devez d'abord savoir que où vous souhaitez diriger le trafic du site.
Le serveur proxy inversé Apache2 écoutera tout le trafic sur le port HTTP par défaut, qui est le port 80 dans une configuration simple. Le serveur back-end qui héberge le contenu du site Web écoutera sur un port personnalisé et c'est très probablement le port 8080.
Dans cet article de blog, nous allons configurer Apache2 pour écouter sur le port 80, puis diriger le trafic vers le serveur back-end qui écoute le port 8080. Exécutez la commande ci-dessous pour créer un fichier VirtualHost proxy appelé apache2proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Ajoutez ensuite le bloc de codes suivant dans le fichier apache2proxy.conf, puis enregistrez-le.
{{_LINE_43_}}
        SERVERNNAME Exemple.com
        Serveralias www.example.com
        Serveradmin webmaster@example.com
        Errorlog $ {apache_log_dir} /error.log
        Customlog $ {apache_log_dir} /access.log combiné
        Proxyréquest
{{_LINE_50_}}
          Commander nier, permettez
          Autoriser de tous
{{_LINE_53_}}
        Proxypass / http://127.0.0.1:8080/
        Proxypassreverse / http://127.0.0.1:8080/
{{_LINE_56_}}
          Commande permettre, nier
          Autoriser de tous
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Le fichier apache2proxy.conf contient le nom de votre serveur ainsi que le proxy_pass où le trafic sera dirigé lorsqu'il sera reçu par le serveur proxy HTTP.

## Étape 3: Activer le proxy apache2
Le serveur Web Apache2 est désormais installé et configure avec succès. Apache possède de nombreux modules groupés disponibles. Ces modules ne sont pas activés dans l'installation fraîche Apache2. Nous devrons d'abord activer les modules dont nous avons besoin pour activer le module Apache Mod_proxy requis et plusieurs de ses modules complémentaires pour prendre en charge différents protocoles de réseau. Exécutez les commandes répertoriées ci-dessous pour activer ses modules proxy HTTP.
proxy sudo a2enmod
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbMethod_byRequests
{{_LINE_69_}}
Activez maintenant le site VirtualHost et redémarrez Apache2 pour activer la configuration des modules APACHE2.
sudo a2ensite apache2proxy.conf
sudo systemctl redémarrer apache2.service
Lancez un navigateur Web de votre choix et accédez à votre nom d'hôte de serveur comme Example.com. Vous serez désormais proxéré sur votre serveur Apache2 sur le port par défaut, c'est-à-dire 8080.

## Étape 4: Activez le SSL {# Block-07B86D83-DCA0-4924-B991-206719C342EB}
Si vous souhaitez activer le module SSL Proxy Reverse Apache Reverse, puis exécutez la commande ci-dessous pour activer Apache Reverse Proxy HTTPS Proxy Pass:
sudo a2enmod ssl
Cela fournira un proxy inversé APACHE sécurisé HTTP à la prise en charge HTTPS pour backend serveurs.

## Étape 5: Redémarrez Apache2 {# Block-836BB4FF-17AD-4317-8ECB-153104BD28A7}
Pour apporter ces changements en effet, redémarrez Apache en exécutant la commande ci-dessous:
sudo systemctl redémarrer apache2.service
Toutes nos félicitations! Vous avez réussi et configuré le proxy inversé APACHE2 sur votre système Linux.

## ** Conclusion: ** {# 4A1A}
Dans ce didacticiel, nous avons exploré et discuté de ce qui est un serveur proxy et une configuration de la configuration proxy inverse Apache étape par étape. Nous avons également appris à configurer et à configurer APACHE2 comme proxy inverse sur un système Linux. Dans nos prochains tutoriels, nous discuterons de sujets plus intéressants sur Apache et d'autres piles de solutions de serveurs Web.

## Explorer
Vous pouvez également aimer les articles plus liés: ci-dessous:
  * [Comment][1][Installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu][2]
  * [Comment configurer Nginx avec Passenger sur AWS Production Server][3]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][4]
  * [Secure et crypte nginx avec Let's Encrypt sur Ubuntu 20.04][5]
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/fr/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
