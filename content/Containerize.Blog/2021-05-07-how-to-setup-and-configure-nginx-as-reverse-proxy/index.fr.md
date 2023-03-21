---
title: "Comment configurer et configurer Nginx comme proxy inverse" 
seoTitle: "Comment configurer et configurer Nginx comme proxy inverse" 
description: "Ce tutoriel concerne la configuration et la configuration de Nginx en tant que proxy inverse. Nginx est considéré comme l'un des serveurs Web proxy inverses open-source les plus populaires." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx est un serveur Web open-source qui peut également agir comme un proxy inversé. Ce tutoriel vous aidera à apprendre à configurer et configurer Nginx en tant que proxy inverse." 
url: /fr/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx est un serveur Web open-source qui peut également agir comme un proxy inverse. Ce tutoriel vous aidera à apprendre à configurer et configurer Nginx en tant que proxy inverse.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Utiliser Nginx comme serveur proxy inversé">}}


## Aperçu:
Nginx et Apache sont deux serveurs Web open source les plus populaires **Souvent utilisé avec PHP. Un proxy inversé ou une passerelle agit comme une connexion entre le client et le serveur. Le client et le serveur échangent des informations entre eux pour travailler en continu et efficacement. Les proxys inverses les plus courants sont  **nginx et apache**   et les deux peuvent être configurés sur la même machine virtuelle lors de l'hébergement de plusieurs sites Web. Un proxy inversé protège les serveurs Web des attaques et de la passerelle de connexion apparaît au client comme un serveur Web ordinaire où aucune configuration de Nginx proxy inverse spéciale n'est nécessaire. Le client envoie une demande tandis que le proxy inversé décide où transmettre les informations demandées, puis fournir le résultat de sortie final au client.
Après beaucoup d'appréciation pour notre série sur les tutoriels Redis, nous avons reçu de nombreuses demandes pour commencer une série sur les tutoriels Nginx. La semaine dernière, nous avons donc commencé avec un tutoriel sur la façon d'utiliser [Nginx Reverse Proxy Load Balancer][1] pour vos applications. Cet exemple de configuration proxy inverse Nginx simple offre de nombreux avantages de performance proxy de la fiabilité et Nginx. Nginx Simple Reverse Proxy est le serveur Open Source Nginx Open Source le plus utilisé sur Internet. Dans ce tutoriel, nous **configurerons et explorerons comment utiliser Nginx comme proxy inverse**  et comment le configurer comme proxy inverse sur un seul serveur. Alors, commençons!
  * Qu'est-ce qu'un serveur proxy?
  * Forward vs Inverse proxy
  * Configurer le proxy inversé
  * Quels sont les avantages du proxy inverse Nginx?
  * Conclusion

## Qu'est-ce qu'un serveur proxy?
**Un serveur proxy**  agit comme une passerelle entre vous et Internet. Il s'agit d'un serveur intermédiaire séparant les utilisateurs finaux des sites Web qu'ils parcourent. Les serveurs proxy fournissent différents niveaux de fonctionnalité, de sécurité et de confidentialité conformément à votre cas d'utilisation ou à la politique de l'entreprise.
Avec un serveur proxy, le trafic Internet traverse le serveur proxy sur son chemin vers l'adresse que vous avez demandée. La demande revient ensuite par le même serveur proxy (principalement), puis le serveur proxy transfère les données reçues du site Web.

## Forward vs Inverse Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx comme serveur proxy inversé">}}

Généralement, lorsque nous parlons du proxy, la plupart du temps, nous entendons le proxy avant. **Les procurations avant**  sont idéales pour éviter les restrictions de pays, comme le grand pare-feu de la Chine. Le client se connecte simplement aux ressources bloquées via le proxy avant. Les proxys à terme peuvent masquer les identités de l'utilisateur en modifiant leur adresse IP. Ainsi, fondamentalement, Nginx en tant que proxy Forward se trouve entre le client et Internet, de sorte que le serveur final n'est pas au courant du client réel.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx comme proxy inversé">}}

**Proxys inversés  **agissent également comme des intermédiaires mais ils sont assis de l'autre côté de la connexion. Les procurations inverses sont excellentes dans le **  équilibrage de charge** , l'optimisation Web et la sécurité. Le proxyage inversé est généralement utilisé pour distribuer la charge entre plusieurs serveurs, afficher de manière transparente le contenu à partir de différents sites Web ou passer les demandes de traitement aux serveurs d'application sur des protocoles autres que HTTP.

## Configurer Nginx comme proxy inverse:
Lorsque Nginx indique une demande, il envoie la demande à un serveur proxed spécifié, récupére la réponse et le renvoie au client. Il est possible de proxy les demandes à un serveur HTTP ou à un serveur non-HTTP à l'aide d'un protocole spécifié. Les protocoles pris en charge incluent **FastCGI, UWSGI, SCGI et Memcached** .
Pour transmettre une demande à un serveur proxé HTTP, la directive **proxy_pass  **est spécifiée dans un **  emplacement** . Par exemple:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Cet exemple de configuration de proxy inverse Nginx résulte de la transmission de toutes les demandes traitées dans cet emplacement au serveur proxyé à l'adresse spécifiée. Cette adresse peut être spécifiée sous forme de nom de domaine ou d'une adresse IP. L'adresse peut également inclure un port:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Vous pouvez même transmettre des en-têtes modifiés ou personnalisés au serveur proxé dans Nginx **proxy \ _set \ _header**  hôte ci-dessous dans l'exemple.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx prend également en charge la mise en mémoire tampon, ce qui aide à améliorer les performances. Avec la mise en mémoire tampon, Nginx stockera la réponse qu'il reçoit du serveur proxyé tant que le client en a besoin pour télécharger.
Au lieu de proxyer toutes les demandes à un seul serveur, vous pouvez également **configurer plusieurs serveurs backend**  et laisser le équilibre Nginx se charger entre ces serveurs proxés. Nous avons déjà couvert cela dans notre tutoriel sur [Nginx Load Balancing][1].

## Quels sont les avantages du proxy inverse Nginx?
Voici les avantages de la configuration du serveur proxy inversé Nginx:
  * Nginx est l'un des serveurs Web **open source les plus populaires**  qui est également l'outil proxy le plus populaire. La configuration proxy inversée Nginx est très simple à implémenter car elle offre à l'utilisateur une sécurité haut de gamme par rapport aux attaques de serveur Web DDOS et DOS.
  * Il aide à créer une charge équilibrée parmi les sites Web à haut trafic et les serveurs backend comme **Dropbox, Netflix et Zynga** .
  * Il fournit un mécanisme de mise en cache pour un serveur back-end plus lent et des sites de trafic élevé pour configurer l'hôte virtuel proxy inversé Nginx. Il ne nécessite pas de configurer un nouveau processus pour chaque demande Web du côté client.
  * Il agit également comme un serveur proxy inversé pour plusieurs protocoles tels que HTTP, HTTPS, TCP, UDP, SMTP, IMAP et POP3 etc.
  * Nginx peut **gérer plus de 10000 connexions**  avec une empreinte mémoire faible et peut faire fonctionner plusieurs serveurs Web sur une seule adresse IP.
  * Il aide également à mettre en cache le contenu des pages et à effectuer un chiffrement SSL pour abaisser la charge du serveur d'hôte Web. Nginx est l'un des meilleurs serveurs Web pour améliorer les performances du contenu statique en le compressant et en augmentant le temps de chargement.
  * C'est un excellent outil pour un environnement de serveur multiple et il peut également être utile pour différentes tâches comme garder un seul serveur anonyme.

## Conclusion:
Dans ce didacticiel proxy inversé **Nginx **, nous avons exploré ce qu'est un serveur proxy Nginx et configurer Nginx Inverse Proxy. Différence entre le serveur proxy inversé VS VS Ninx. Nous avons également appris par exemple comment configurer nginx comme proxy inverse. Maintenant, vous comprenez complet comment installer  **Nginx Inverse Proxy Configuration étape par étape**  . Le tutoriel ci-dessus vous aide à commencer avec une configuration proxy inverse. Dans nos prochains tutoriels, nous discuterons de sujets plus intéressants sur Nginx.
_ Quel est votre serveur Proxy_ _reverse le plus préféré qui est facile, dynamique et complet?. Avez-vous des questions sur le leading_ _Open Source _reverse prox__y, **Balancer de chargement pour HTTP et TCP**  Applications_?, S'il vous plaît_ [Rendez-vous en contact][2].

## Explorer
Vous pouvez trouver les articles ci-dessous les plus liés
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian][3]
  * [Secure nginx avec Let's Encrypt sur Ubuntu 20.04][4]
  * [Comment utiliser nginx comme équilibreur de charge pour votre application][1]
  * [Comment installer et sécuriser PhpMyAdmin avec Nginx sur Ubuntu][5]
  * [Configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][6]
  * [Installez plusieurs versions PHP avec Nginx sur Ubuntu][7]
  * [Configuration nginx avec passager sur AWS Production Server][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
