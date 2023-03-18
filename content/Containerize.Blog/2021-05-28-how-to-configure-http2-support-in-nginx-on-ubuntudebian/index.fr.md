---
title: "Comment configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian" 
seoTitle: "Comment configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian" 
description: "HTTP2 ou H2 est un protocole binaire et une version améliorée du protocole HTTP qui permet d'augmenter la vitesse des pages du site après que Nginx activait la prise en charge HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP / 2 est un protocole multiplexé robuste pour améliorer la vitesse et la sécurité de chargement de la page. Dans ce tutoriel, nous apprendrons à configurer Nginx avec la prise en charge HTTP / 2." 
url: /fr/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP / 2 est un protocole multiplexé robuste pour améliorer la vitesse et la sécurité de chargement des pages. Dans ce tutoriel, nous apprendrons à configurer Nginx avec la prise en charge HTTP / 2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx activer le support HTTP2 sur Ubuntu et Debian">}}


## **Aperçu**
Nginx est un serveur Web rapide rapide et fiable. Il a gagné en popularité en raison de son empreinte de mémoire faible, de son équilibrage de charge, de sa grande évolutivité, de sa mise en cache, de son support pour la majorité des protocoles et de la proxyme inverse. Parlons maintenant de la façon dont Nginx activait le protocole HTTP2.
L'un des protocoles pris en charge par NGINX est HTTP / 2 qui a été publié en mai 2015. Le principal avantage de HTTP / 2 est sa vitesse de transfert élevée pour les sites Web riche en contenu, réduit la charge sur le serveur Web et peut initier plusieurs demandes parallèles Dans une seule connexion TCP. Nginx Activer HTTP2 est une version améliorée du protocole HTTP. Avant de commencer, nous aurons besoin de quelques serveur Ubuntu ou Debian avec certificat SSL. Dans ce tutoriel, nous vous guiderons étape par étape sur la façon de Nginx activer http2 sur Ubuntu.
  * Mettre à jour les packages et installer nginx
  * Activer le support HTTP / 2
  * Ajout du nom du serveur
  * Ajout des certificats SSL
  * Retirer les chiffres
  * Redirigez toutes les demandes HTTP à HTTPS
  * Redémarrer Nginx
  * Conclusion

## Étape 1: mise à jour des packages et installation nginx {# 4597}
La première étape consiste à mettre à jour et à mettre à niveau les référentiels dans le système d'emballage APT. L'utilisation de mise à jour téléchargera les derniers packages de versions et la mise à niveau installera la dernière version des packages dans la liste. Exécutez la commande APT ci-dessous pour mettre à jour et mettre à niveau les packages.
```
sudo apt-get update && apt-get upgrade
```
L'étape suivante consiste à installer la dernière version du package Nginx. La prise en charge du protocole HTTP / 2 a été introduite dans NGINX version 1.9.5 et supérieure. Par conséquent, nous devrons installer la dernière version du package Nginx. Exécutez la commande Utilisez APT APT pour installer les packages Nginx:
```
sudo apt-get install nginx
```
Vous serez invité à confirmer le processus d'installation étape par étape. Sélectionnez Option Oui et terminez le processus d'installation. Une fois le processus d'installation terminé, l'étape suivante consiste à vérifier la version du package, que nous ayons installé la bonne version ou non. Vous pouvez vérifier la version du serveur Web Nginx en tapant la commande:
```
sudo nginx -v
```
La sortie de la commande de vérification de version ci-dessus doit être similaire à ce qui suit:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Étape 2: Activation de la prise en charge HTTP / 2 {# F4D2}
Après avoir installé le package Nginx, nous devons activer http2 nginx. L'utilisateur doit modifier le port d'écoute de 80 à 443. Ouvrez le fichier de configuration Nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Vous pouvez voir que la valeur par défaut de Nginx est définie pour écouter est le port 80.
écouter 80 default_server;
écouter [::]: 80 default_server;
Comme vous pouvez le voir, il y a deux variables d'écoute différentes. La première variable d'écoute est pour toutes les connexions IPv4 et la seconde concerne les connexions IPv6. Nous activerons le cryptage pour les deux variables. Modifiez le numéro de port d'écoute en 443 et ajoutez une connexion SSL pour le protocole HTTPS comme indiqué ci-dessous:
Écoutez 443 ssl http2 default_server;
écouter [::]: 443 ssl http2 default_server;
Notez qu'en plus de SSL, nous avons également ajouté HTTP2. Nginx est désormais en mesure d'utiliser des navigateurs qui prennent en charge le protocole HTTP / 2.

## Étape 3: Ajout du nom du serveur {# A745}
La prochaine étape consiste à modifier le serveur \ _name afin que le nom du serveur soit associé au nom de domaine. L'utilisateur doit simplement modifier le nom du serveur dans le fichier de configuration. Localisez l'entrée Server \ _name dans le fichier de configuration et modifiez _ dans votre domaine réel, comme ceci:
```
server_name example.com www.example.com;
```
Enregistrez le fichier de configuration du serveur en modifiant dans l'éditeur de texte. Vous pouvez vérifier la configuration Nginx pour les erreurs de syntaxe avec la commande:
```
sudo nginx -t
```
Si la syntaxe est sans erreur, vous verrez la sortie ci-dessous:
nginx: la syntaxe de fichier de configuration /etc/nginx/nginx.conf est ok
Nginx: Fichier de configuration /etc/nginx/nginx.conf Le test est réussi

## Étape 4: Ajout des certificats SSL {# 37C0}
La prochaine étape consiste à activer la configuration NGINX HTTPS pour utiliser votre certificat SSL. Vous pouvez générer un certificat auto-signé ou [installer un certificat gratuit à partir de Let’s Encrypt] [1]. Si vous n'avez pas de certificat SSL, veuillez suivre ce tutoriel. Ajoutez vos certificats SSL dans le répertoire de configuration Nginx similaire à:
```
sudo mkdir /etc/nginx/ssl
```
Copiez votre certificat et la clé privée à cet emplacement et remplacez également Example.com par votre nom de domaine réel:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Ouvrez maintenant à nouveau le fichier de configuration du serveur Nginx. Ajouter et configurer de nouvelles lignes SSL à l'intérieur du bloc Nginx Server avec l'emplacement de vos certificats pour activer la configuration NGINX SSL:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Enregistrez le fichier Nginx Fichier et quittez l'éditeur de texte.

## Étape 5: Suppression des chiffres {# D291}
Cipher est un algorithme utilisé dans la cryptographie pour le chiffrement et le déchiffrement des données. Cipher Suites est un tas d'algorithmes cryptographiques utilisés pour sécuriser les connexions réseau. HTTP / 2 a une énorme liste noire de chiffres insécurisés qui doivent être supprimés. Ici, nous utiliserons un chiffre d'affaires populaire, approuvé par les géants d'Internet CloudFlare.
Ouvrez le fichier de configuration Nginx suivant /etc/nginx/nginx.conf et ajoutez les lignes ci-dessous juste après ** SSL \ _PREFER \ _SERVER_CIPHERS ON. ** Ces lignes incluent la liste des derniers chiffres que les navigateurs http2 comprennent.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Vous pouvez définir GZIP sur OFF et ajouter Proxy \ _max \ _Temp \ _file \ _Size 0; Pour éviter ERR \ _HTTP2 \ _protocol_error nginx error.

## Étape 6: Redirigez toutes les demandes HTTP à HTTPS {# B387}
Maintenant, nous devons dire au proxy nginx http2 ce qu'il devrait servir le contenu via HTTPS uniquement si le serveur reçoit une demande HTTP. Enfin, en ignorant les lignes commentées, votre fichier de configuration Nginx /etc/nginx/sites-available/domain-name.com devrait ressembler à ceci:
Server {écouter 443 ssl http2 default_server; écouter [::]: 443 ssl http2 default_server; root / var / www / html; index index.html index.htm index.nginx-debian.html; server_name example; emplacement / {try_files $ uri $ uri / = 404 ; } ssl_certificate /etc/nginx/ssl/example.com.crt ;ssl_certificate_key /etc/nginx/ssl/example.com.key ;ssl_dhparam /etc/nginx/ssl/dhparam.pem; }sever {écouter 80; Écoutez [::]: 80; server_name example.com; retour 301 https: // $ server_name $ request_uri;}
Enregistrez le fichier /etc/nginx/sites-available/domain-name.com, puis sortez. Vérifiez les configurations pour les erreurs de syntaxe:
```
sudo nginx -t
```

## Étape 7: Redémarrez Nginx {# E687}
Pour appliquer toutes les modifications, redémarrez le serveur proxy inversé NGINX HTTP2 et vérifiez l'état de la configuration.
sudo systemctl redémarrer nginx
Sudo Systemctl Status Nginx

## ** Conclusion: ** {# 4A1A}
Félicitations, vous avez réussi à configurer la prise en charge de la prise en charge HTTP2 de la configuration NGINX sur Ubuntu Server. Vos paramètres NGINX HTTP2 servent désormais des pages HTTP / 2 et il a également effacé la différence entre les protocoles HTTP / 1 et HTTP / 2. Si vous êtes toujours confronté à des problèmes de configuration, faites-le nous savoir dans la section des commentaires.
Avez-vous des questions sur le protocole multiplexé http2? _, S'il vous plaît_ [contacter] [2].

## Explorer
Vous pouvez également aimer les articles ci-dessous:
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian] [3]
  * [Comment] [3] [Installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu] [4]
  * [Comment configurer Nginx avec Passenger sur AWS Production Server] [5]
  * [Sécuriser et crypter nginx avec Let's Encrypt sur Ubuntu 20.04] [1]
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu] [6]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
