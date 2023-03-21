---
title: "Comment surveiller le serveur Web Nginx avec Nginx Amplify" 
seoTitle: "Comment surveiller le serveur Web Nginx avec Nginx Amplify" 
description: "Nginx Amplify est un agent de surveillance gratuit pour le serveur Web Nginx et les applications PHP. Cet article concerne la façon de surveiller le serveur Web Nginx avec Amplify Nginx" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Surveillez Nginx, applications PHP, système d'exploitation avec Nginx Amplify et Améliorer la configuration. Cet article vous guide pour configurer et configurer l'amplification Nginx." 
url: /fr/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor Nginx, applications PHP, système d'exploitation avec Nginx Amplify et Améliorer la configuration. Cet article vous guide pour configurer et configurer l'amplification Nginx.

{{< figure align=center src="images/nginx-post.png" alt="Surveiller le serveur Web Nginx avec Amplify Nginx">}}


## Présentation   {#install}
**La surveillance du serveur Web  **est très importante pour les sites Web à haut trafic. L'agent de surveillance ** **  enregistrera régulièrement des mesures essentielles sur le serveur Web. Ces mesures critiques peuvent être utilisées pour optimiser la configuration de Nginx. Il vous aidera à améliorer les performances de votre serveur Web et de votre application.
Dans cet article de blog, nous couvrirons les sections suivantes pour **Nginx Surveillant**  Open Source Tool.
  * [Serveur Web Nginx][1]
  * [Nginx amplify][2]
  * [Installer Nginx Amplify][3]
  * [Surveillance des mesures][4]

## serveur Web Nginx   {#nginx}
[Nginx][5] est un serveur Web gratuit et open source. Il est simple, léger et facile à configurer qu'Apache. Le serveur Web Nginx fonctionne également comme un proxy inversé, un équilibreur de chargement, un proxy de courrier et un cache HTTP. Il fonctionne pour les protocoles HTTP, HTTPS, SMTP, POP3 et IMAP. Nginx est un serveur Web à grande vitesse, fiable et économe en mémoire qui améliore les performances de vos applications. De plus, il a gagné en popularité et est maintenant considéré comme le serveur Web le plus populaire. De plus, Nginx convient à tout type de site Web, y compris des sites et applications à fort trafic. Il peut être installé et configuré sur presque tous les systèmes d'exploitation.

### Installer Nginx
  * Exécutez les commandes ci-dessous pour installer le serveur Web Nginx.
```
sudo apt update
sudo apt install nginx
```
  * Une fois que vous avez terminé l'installation, ouvrez votre navigateur et tapez «http: // ip \ _of \ _our_server». Vous verrez la page de bienvenue ci-dessous.

{{< figure align=center src="images/nginx-home.png" alt="Bienvenue à Nginx!">}}


## nginx amplify   {#amplify}
Nginx Amplify est un outil de surveillance gratuit pour Nginx Open Source, Nginx Plus et PHP-FPM. Il s'agit d'un outil basé sur le SaaS pour la surveillance et les applications du serveur NGINX. Les utilisateurs peuvent facilement garder une trace des actifs d'infrastructure, surveiller les performances et ajuster la configuration. Il donne des informations complètes que les utilisateurs peuvent utiliser pour optimiser le serveur Web et la configuration des applications. Il agit comme un agent sur le serveur qui héberge les applications Nginx et PHP. Nginx Amplify est un journal léger, pushs et de surveillance des données pour amplifier les serveurs sans compromettre les performances. Vous pouvez afficher les mesures sur le tableau de bord Amplify. L'agent est disponible pour tous les principaux systèmes d'exploitation tels que Rhel, Centos, Ubuntu, Debian, Fedora et FreeBSD. Nginx Amplify a trois composants principaux tels que Nginx Amplify Agent, Nginx Amplify Web UI et Nginx Amplify Backend.
  * **Nginx Amplify Agent**  - il fonctionne sur le système surveillé. Toute communication est chiffrée à l'aide de SSL / TLS.
  * **Nginx Amplify Web UI**  - UI Web affiche les mesures pour les serveurs Web, les applications et les systèmes d'exploitation.
  * **Nginx Amplify Backend**  - C'est un composant clé qui est implémenté en tant que SaaS et est responsable de la collecte de mesures, de la maintenance d'une base de données, de l'exécution d'un moteur d'analyse et de la fourniture d'une API de base.

## Installer Nginx Amplify   {#install}
Suivez ci-dessous le guide étape par étape pour l'installation de Nginx Amplify sur Ubuntu.
  * Tout d'abord, vous devez créer un compte sur le Nginx [site Web][6].
  * Après la connexion, vous verrez l'écran ci-dessous sur le site Web de Nginx Amplify. Maintenant, connectez-vous à votre serveur via SSH et utilisez les commandes données dans les étapes ci-dessous.

{{< figure align=center src="images/amplify-1.png" alt="Installer Nginx Amplify">}}

  * Exécutez la commande ci-dessous pour télécharger l'agent.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Exécutez la commande suivante pour installer Nginx Amplify sur le serveur. Remplacez XXXXX par la touche API réelle. Vous pouvez le trouver au tableau de bord Nginx Amplify.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Une fois que vous avez terminé l'installation, vous pouvez vérifier l'état avec la commande suivante.
```
$ sudo service amplify-agent status
```
  * Maintenant, vous devez configurer Nginx Amplify Agent pour afficher les mesures.

{{< figure align=center src="images/amplify-2-1.png" alt="Configuration de surveillance Nginx">}}

  * Créez un nouveau fichier avec la configuration Stub_Status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Copiez le code ci-dessous et enregistrez le fichier.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Redémarrez le serveur Web Nginx pour activer le module Stub_Status.
```
$ sudo service nginx restart
```
  * Maintenant, ouvrez le fichier de configuration Nginx avec la commande suivante.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Ajoutez le code ci-dessous et enregistrez-le.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Redémarrez le service NGINX pour appliquer toutes les modifications.
```
$ sudo service nginx restart
```
  * Ensuite, accédez au tableau de bord Amplify et cliquez sur le bouton "Finisser". Vous devriez voir la page suivante.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Surveillance du serveur Web">}}

  * Vous pouvez voir les statistiques au format plus facile et lisible en cliquant sur l'onglet **Présentation** . Cela ressemblera comme indiqué ci-dessous.

{{< figure align=center src="images/amplify-overview.png" alt="Statistiques de surveillance Nginx">}}


## Surveillance des métriques   {#onitoring}
L'agent Amplify Nginx collecte les types de données suivants:
  * **Metrics Nginx**  - Il collecte diverses mesures liées à Nginx à partir de Stub_status, de fichiers de journaux et à partir de l'état de processus.
  * **Metrics système**  - Nginx Amplify surveille une variété de mesures système telles que l'utilisation du processeur, l'utilisation de la mémoire, le trafic réseau et bien d'autres.
  * **PHP-FPM Metrics**  - S'il identifie un processus maître PHP-FPM en cours, il obtient des métriques à partir de l'état du pool PHP-FPM.
  * **MySQL Metrics**  - L'ensemble de statut global MySQL des variables peut être utilisé par l'agent pour collecter des mesures.
  * **Metadata Nginx**  - L'agent rassemble des données sur les instances NGINX telles que les données de package, les informations de construction, le chemin binaire, les paramètres de configuration de construction et bien d'autres.
  * **Metadata du système**  - L'agent collecte des données sur le système d'exploitation, y compris le nom d'hôte, la disponibilité, la saveur du système d'exploitation et d'autres détails.

## Conclusion
Nous avons parcouru le serveur Web Nginx et Nginx Amplify Advanced Monitoring Agent en détail. Nginx Amplify est assez simple à configurer et à configurer. De plus, nous avons parcouru les métriques critiques que Nginx Amplify peut suivre pour **surveiller Nginx** . Ces mesures importantes peuvent être utilisées pour améliorer la configuration de votre serveur Web et applications Nginx.
Enfin, [Containerize.com][7] est dans un processus cohérent d'écriture de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [pile de solutions de serveur Web][8] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Comment utiliser nginx comme équilibreur de charge pour votre application][9]
  * [Comment configurer et configurer Nginx comme proxy inverse][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
