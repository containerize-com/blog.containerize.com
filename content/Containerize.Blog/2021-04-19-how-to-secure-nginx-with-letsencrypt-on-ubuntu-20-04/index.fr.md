---
title: "Comment sécuriser Nginx avec Let's Encrypt sur Ubuntu 20.04" 
seoTitle: "Comment sécuriser Nginx avec Let's Encrypt sur Ubuntu 20.04" 
description: "Comment configurer, crypter et sécuriser Nginx avec Let's Encrypt sur Ubuntu. Cryptons le client pour générer des certificats pour configurer automatiquement Nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Les sites Web incluent le cryptage SSL / TLS pour son domaine pour attirer les visiteurs. Cet article explique l'utilisation de l'utilitaire CERTBOT pour obtenir des certificats TLS / SSL pour Nginx." 
url: /fr/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

Les sites Web ## incluent le cryptage SSL / TLS pour son domaine pour attirer les visiteurs. Cet article explique l'utilisation de l'utilitaire CERTBOT pour obtenir des certificats TLS / SSL pour Nginx.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Sécuriser Nginx avec Let's Encrypt sur Ubuntu">}}


## **Aperçu**
Tout site Web qui cherche à attirer les visiteurs doit inclure le cryptage TLS / SSL pour son domaine. Les certificats gratuits SSL garantissent une connexion sûre entre votre serveur Web comme pour chiffrer et sécuriser Nginx et les navigateurs d'application. Let's Encrypt est une autorité de certificat gratuite, automatisée et ouverte qui vous permet de configurer une telle protection pour Nginx SSL LETSENCYPT. Cryptons les certificats SSL gratuits qui sont fiables par tous les principaux navigateurs et valides pour les 90 prochains jours à compter de la date d'émission.
Ce billet de blog explique le moyen le plus simple de crypter et de sécuriser le serveur Web en cours d'exécution NGINX sur Ubuntu 20.04 / 18.04 en obtenant des certificats Nginx HTTPS LetSencrypt en utilisant l'utilitaire Nginx CERTBOT et configurez vos certificats pour le renouveler automatiquement. Commençons et configurons des configurations Ubuntu nginx de leccrypt.
  * Dépendances et prérequis
  * Installation de l'utilitaire CERTBOT
  * Confirmation de la configuration de Nginx
  * Permettre des HTTPs à travers le pare-feu
  * Obtenir un certificat SSL
  * Conclusion

## Premières choses d'abord: dépendances et prérequis {#prerequis}
Afin de suivre cet article, vous aurez besoin de dépendances et de prérequis suivantes pour installer des utilitaires LETSECCRYPT UBUNTU NGINX:
  * Un utilisateur non root ou racine de Sudo compatible sur les machines locales / distantes.
  * Un système exécutant Ubuntu 20.04 ou Ubuntu 18.04
  * Accès à un terminal de ligne de commande
  * Privilèges sudo ou racine sur les machines locales / distantes
  * Nginx installé et configure
  * Un nom de domaine enregistré pointant vers la propriété intellectuelle publique
  * Un bloc de serveur configuré pour ce nom de domaine
  * Le pare-feu est configuré pour accepter les connexions sur les ports 80 et 443.

# Al
La première étape pour sécuriser Nginx et pour chiffrer Nginx avec Let’s Encrypt consiste à installer Nginx CERTBOT entièrement-fonctionnement et facile à utiliser pour obtenir et renouveler les certificats SSL, Let’s Crypt SSL sur votre serveur. Pour ce faire, commencez par ouvrir un terminal sur Ubuntu et mise à jour du référentiel local. Tapez Y et entrez si vous êtes invité.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Vérinons maintenant certains des paramètres de configuration Secure Nginx.

## Étape 2 - Confirmation de la configuration de Nginx {# Step-2 -—- Confirmation-nginx-39-s-configuration}
Comme expliqué dans la section Dépendances et prérequis, vous devriez déjà avoir un domaine enregistré et CERTBOT doit être en mesure de trouver le bloc de serveur Nginx correct pour ce domaine pour configurer automatiquement SSL. À titre d'exemple, ce billet de blog utilise le domaine blog.conteainerise.com et le bloc Server pour votre domaine sur /etc/nginx/sites-available/blog.contiaterise.com avec la directive Server_name déjà définie correctement.
Pour confirmer, ouvrez le fichier de configuration de votre domaine à l'aide de Nano ou de votre éditeur de texte préféré:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Recherchez la ligne directive SERVER_NAME SERVERSE dans Fichier /etc/nginx/sites-available/blog.connainerise.com. Ça devrait ressembler à ça:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Vérifiez maintenant la syntaxe de vos fichiers de configuration Nginx et rechargez le serveur Nginx pour charger les nouveaux paramètres de configuration:
```
sudo nginx -t
sudo systemctl reload nginx

```
L'utilitaire CERTBOT peut désormais trouver la directive de bloc de serveur NGINX correct pour sécuriser Nginx et la mettre à jour automatiquement. Dans l'étape suivante, mettons à jour le pare-feu pour permettre le trafic HTTPS.

## Étape 3 - Autoriser HTTPS à travers le pare-feu {# étape-3 -—- Autoriser-https-through-the-firewall}
Comme recommandé dans cet article, vous devrez régler les paramètres pour permettre le trafic HTTPS. Pour vous assurer que votre pare-feu est activé et actif, exécutez la commande ci-dessous:
```
sudo ufw status

```
La sortie doit vous dire que UFW est actif et vous donne une liste des règles de définition. Il affiche uniquement le trafic HTTP est autorisé au serveur Web. Pour permettre le trafic chiffré, vous pouvez soit ajouter le profil Nginx HTTPS ou utiliser Nginx complet et supprimer la règle NGINX HTTP existante. Autorisez le trafic Nginx HTTPS en tapant la commande:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Vérifiez la règle HTTPS qui permet le trafic HTTPS en tapant la commande d'état UFW:
```
sudo ufw status

```
Ensuite, exécutons CERTBOT et récupérons nos certificats.

## Étape 4 - Obtention d'un certificat SSL {# étape-4 -—- Obtention-an-ssl-certificate}
Le plugin de Nginx pour CERTBOT s'occupera de reconfigurer Nginx et rechargera sa configuration si nécessaire. Par conséquent, vous devez générer des certificats avec le plug-in Nginx en exécutant la commande suivante:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Si c'est la première fois que l'utilitaire CERTBOT est votre première fois, alors CERTBOT vous demande de configurer vos paramètres HTTPS. Vous serez invité à saisir une adresse e-mail et à accepter les conditions d'utilisation. Après avoir appuyé sur Entrée, la configuration sera mise à jour et Nginx se rechargera pour récupérer les nouveaux paramètres. Enfin, CERTBOT s'affichera avec un message vous indiquant qu'un certificat a été généré avec succès et où vos certificats sont stockés.
Vos certificats sont téléchargés, installés et chargés de configurations de certificat SSL Nginx. Essayez de recharger votre site Web à l'aide de https: // et remarquez l'indicateur de sécurité de votre navigateur. Il doit indiquer que le site est correctement sécurisé, généralement avec une icône de verrouillage. Si vous testez votre serveur à l'aide du test SSL Labs Server, il obtiendra une note A pour Nginx et LETSENCYPT.
Termons en testant le processus de renouvellement.

## Étape 5 - Vérification de CERTBOT AUTO-REWEWAL {# Étape-5 -—- Vérification de cerTBOT-Auto-Renewal}
Étant donné que les certificats de Let’s Encrypt expirent tous les quatre-vingt-dix (90) jours et Nginx SSL LetSencrypt encourage les utilisateurs à configurer et à renouveler automatique le travail CRON. Tout d'abord, ouvrez le fichier de configuration Crontab pour l'utilisateur actuel:
```
sudo crontab -e
```
Ajoutez un travail CRON qui exécute la commande certitbot, CERTBOT renouvelle Nginx renouvelle le certificat s'il détecte que le certificat expirera dans les 30 jours. Planifiez-le pour fonctionner quotidiennement à une heure spécifiée, par exemple 05h00.
```
sudo certbot renew --dry-run

```
Le travail cron doit également inclure l'attribut –quiet, comme dans la commande ci-dessus. Cela demande au certificat SSL de renouveler NGINX de ne pas inclure de sortie après avoir effectué la tâche. Activer le renouvellement du certificat automatique. Une fois que vous avez ajouté le travail cron, enregistrez les modifications et quittez le fichier.

## Conclusion {#conclusion}
Dans cet article, nous avons appris à installer Nginx LetSencrypt SSL Certificate. Nous avons téléchargé des certificats SSL pour votre domaine et configuré Nginx pour utiliser ces certificats. De plus, vous devriez avoir permis à CERTBOT de renouveler automatiquement les certificats pour SSL Nginx LetSencrypt. Dans nos prochains tutoriels, nous discuterons de sujets plus intéressants sur la façon de sécuriser un serveur Web avec une technologie de sécurité standard qui permet une communication cryptée entre un navigateur Web et un serveur Web.
_Pour peut se joindre à nous sur [Twitter] [1], [LinkedIn] [2] et notre page [Facebook] [3]. Quel protocole cryptographique utilisez-vous pour assurer la sécurité des communications sur un réseau informatique ?. Si vous avez des questions, veuillez vous contacter] [4].

## Explorer
Vous pouvez trouver les liens pertinents suivants pour surveiller les performances du serveur et assurer sa fiabilité et sa sécurité:
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian] [5]
  * [Comment installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu] [6]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian] [7]
  * [Configuration nginx avec passager sur AWS Production Server] [8]
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu] [9]
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
