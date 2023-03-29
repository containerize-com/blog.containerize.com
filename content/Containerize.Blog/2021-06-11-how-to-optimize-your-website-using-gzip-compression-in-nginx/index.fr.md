---
title: "Comment optimiser votre site Web à l'aide de la compression GZIP dans Nginx" 
seoTitle: "Comment optimiser votre site Web à l'aide de la compression GZIP dans Nginx" 
description: "Dans cet article, nous discuterons d'une méthode pour optimiser les vitesses de transfert de votre site Web en réduisant les tailles de fichiers via la compression GZIP dans Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Ce tutoriel vous guide sur la façon d'optimiser les performances de votre site Web et de le faire rapidement en réduisant les tailles de fichiers à l'aide de la compression GZIP dans Nginx." 
url: /fr/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Ce tutoriel vous guide sur la façon d'optimiser les performances de votre site Web et de le faire rapidement en réduisant les tailles de fichiers à l'aide de la compression GZIP dans Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Comment activer la compression GZIP dans Nginx">}}

Cet article est dans la poursuite de notre série de tutoriels sur Nginx. Jusqu'à présent, nous avons couvert comment utiliser nginx comme équilibreur de charge, comment utiliser Nginx comme proxy inverse. Et maintenant, ce tutoriel couvre une autre question exigeante «Comment optimiser votre site Web à l'aide de la compression GZIP dans Nginx». Dans ce tutoriel, nous vous guiderons étape par étape sur la façon d'activer la compression GZIP dans Nginx. Alors, commençons!
  * [Optimisation du site Web avec compression][1]
  * [Qu'est-ce que la compression GZIP?][2]
  * [Comment fonctionne la compression GZIP?][3]
  * [Activer la compression GZIP dans Nginx][4]
  * [Vérifiez la compression GZIP][5]
  * [Conclusion][6]

## Optimisation du site Web avec compression {#optimize}

Les performances d'un site Web dépend d'un certain nombre de facteurs. L'un des facteurs dont il dépend partiellement est la taille de tous les fichiers que le navigateur d'un utilisateur doit télécharger depuis votre serveur. La réduction ou la compression de la taille de ces fichiers transmis peut rendre votre site Web à charger plus rapidement pour l'utilisateur. Il peut également réduire la facture de votre site Web au cas où vous payez l'utilisation de la bande passante sur les connexions comptables. La compression peut donc jouer un rôle très vital dans l'optimisation de votre site Web.
Comme Google et d'autres moteurs de recherche envisagent l'expérience utilisateur d'un site Web (UX) un facteur critique dans ses algorithmes de classement. Il est devenu plus important d'améliorer et d'optimiser votre site Web pour les meilleures notes. Parmi les facteurs les plus importants auxquels faire attention figurent, la vitesse de la page et les temps de chargement. Et, le moyen le plus rapide et le plus simple d'améliorer la vitesse et les performances de votre site Web est d'activer la compression GZIP sur votre site Web.

## Qu'est-ce que la compression GZIP? {#what-gzip}

GZIP est un format de fichier **et une application logicielle** utilisée pour la compression et la décompression des fichiers. Des serveurs Web ou d'autres logiciels utilisent la compression GZIP pour compresser les fichiers de données avant d'être envoyés aux navigateurs des utilisateurs. Cela réduit le temps de téléchargement des fichiers qui rend votre site Web plus rapidement. Tous les navigateurs modernes prennent en charge la compression GZIP.
Il est également important de noter que la compression GZIP doit être activée sur votre serveur Web avant de pouvoir activer la compression des fichiers et des dossiers. Peu de temps, nous verrons comment activer la compression GZIP dans Nginx.

## Comment fonctionne la compression GZIP? {#how-gzip}

GZIP, la méthode de compression la plus populaire, est utilisée par les serveurs Web et les navigateurs pour compresser et décompresser le contenu lorsqu'il est transmis sur Internet. Il est utilisé principalement sur le code et les fichiers texte, GZIP peut réduire la taille des fichiers JavaScript, CSS et HTML jusqu'à 90%.
Par défaut, la compression GZIP ne compresse pas des images ou des vidéos. C'est pourquoi la plupart des outils de test de vitesse de site Web comme Google Pagespeed Insights recommandent fortement d'activer la compression GZIP.
Lorsqu'un serveur Web reçoit une demande de page Web, le serveur Web vérifie l'en-tête de la demande pour vérifier si le navigateur prend en charge GZIP. Si c'est le cas, le serveur génère le balisage de la page avant d'appliquer GZIP. GZIP convertit le balisage HTML en une données comprimée qui est ensuite livrée à l'utilisateur final. Lorsque l'utilisateur final reçoit les données compressées, leur navigateur le décompte.

## Activer la compression GZIP dans Nginx {#enable-gzip}

Pour modifier la configuration Nginx GZIP, ouvrez le fichier de configuration Nginx principal dans «_VI_» ou votre éditeur de texte préféré:
```
sudo vi /etc/nginx/nginx.conf
```
Trouvez la section des paramètres _gzip_, qui ressemble à ceci:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Comme vous pouvez le voir, GZIP est activé par défaut avec _GZIP sur; _ mais il existe d'autres paramètres GZIP commentés.
Nous pouvons activer le paramètre _gzip_types_ pour activer la compression sur les types de fichiers que nous voulons compresser. Par exemple
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Redémarrez maintenant Nginx pour prendre en vigueur de nouveaux paramètres.

## Vérifiez la compression GZIP {#verify}

Maintenant que nous avons activé la compression GZIP, vérifions-le.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
La réponse restera la même car la compression a déjà été activée pour ce type de fichier:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Conclusion {#conclusion}

Dans cet article, nous avons appris que vous pouvez utiliser le module Nginx GZIP pour accélérer les transferts de fichiers. Nous vous avons montré étape par étape comment activer la compression GZIP dans Nginx à l'aide du module GZIP. La documentation officielle du [module GZIP][7] répertorie d'autres directives de configuration que vous voudrez peut-être jeter un œil. J'espère que ce tutoriel vous aidera à optimiser les performances et la vitesse de votre site Web.

## Explorer
  * [Comment installer plusieurs versions PHP avec Nginx sur Ubuntu][8]
  * [Comment configurer et configurer Nginx comme proxy inverse][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
