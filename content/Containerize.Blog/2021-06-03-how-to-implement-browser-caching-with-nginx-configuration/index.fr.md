---
title: "Comment implémenter la mise en cache du navigateur avec la configuration Nginx" 
seoTitle: "Comment implémenter la mise en cache du navigateur avec la configuration Nginx" 
description: "Plus un site Web se charge rapidement, plus un visiteur est susceptible de rester. Dans ce tutoriel, nous implémenterons la mise en cache du navigateur avec la configuration Nginx." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Plus un site Web se charge rapidement, plus un visiteur est susceptible de rester. Cet article vous guide sur la façon d'implémenter la mise en cache du navigateur avec les configurations Nginx." 
url: /fr/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Plus un site Web se charge vite, plus un visiteur est susceptible de rester. Cet article vous guide sur la façon d'implémenter la mise en cache du navigateur avec les configurations Nginx.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Comment implémenter la mise en cache Browsr avec la configuration Nginx">}}

Dans la série de didacticiels de notre Nginx, nous avons couvert [comment utiliser Nginx comme équilibreur de charge][1], [Configurer Nginx comme proxy inverse][2], [Utilisez plusieurs versions PHP avec Nginx][3] et [Convertir la réécriture HTACCESS Règles sur les directives de réécriture de Nginx][4]. Dans l'article d'aujourd'hui, nous couvrons un sujet très important qui aide les entreprises à améliorer l'expérience de leur utilisateur en tirant parti de la mise en cache du navigateur. Dans ce tutoriel, nous vous guiderons sur la façon d'implémenter la mise en cache du navigateur avec la configuration Nginx à l'aide du module d'en-tête de Nginx. Commençons!
  * **[Levier Cache de navigateur][5]** 
  * [**Module d'en-tête Nginx** ][6]
  * [**e-tage et if-none-match** ][7]
  * [**Levier de mise en cache du navigateur avec configuration Nginx** ][8]
  * [**Conclusion** ][9]

## Levier Cache de navigateur   {#Browser-caching}
Plus un site Web se charge rapidement, plus un visiteur est susceptible de rester sur le site Web. Les sites Web avec beaucoup d'images et le contenu interactif sont chargés en arrière-plan font que le site Web ouvre une tâche complexe. Il consiste à demander de nombreux fichiers différents du serveur un par un. La minimisation de la quantité de ces demandes est une façon d'accélérer votre site Web.
Une méthode pour améliorer les performances du site Web consiste à rédiger le navigateur Caching_. La mise en cache du navigateur joue un rôle énorme dans le mécanisme de cache pour augmenter la vitesse de la page. Des fichiers statiques comme CSS, JS, JPEG, PNG, etc. qui sont utilisés pour le site Web peuvent être enregistrés sur l'ordinateur du visiteur pour un accès futur. Chaque fois que le visiteur rencontre une nouvelle page sur votre site Web, les fichiers ci-dessus sont accessibles à partir de l'ordinateur du visiteur au lieu de votre serveur fourni, ce qui augmentera considérablement la vitesse de chargement de la page.

## Module d'en-tête de Nginx   {#module d'en-tête}
Le module _ngx \ _http \ _headers_module_ permet d'ajouter les champs d'en-tête «_expires_» et «_cache-control_» et les champs arbitraires, vers un en-tête de réponse. Nous pouvons utiliser le module d'en-tête pour définir ces en-têtes HTTP. Le module d'en-tête est un module Nginx de base, ce qui signifie qu'il n'a pas besoin d'être installé séparément pour être utilisé.
Exemple de configuration ressemble à ceci:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag et if-none-match   {#etage}
Supposons que nous ayons des fichiers de test avec différentes extensions, par exemple Test.html, test.jpg, test.css et test.js. Par défaut, tous les fichiers auront le même comportement de mise en cache par défaut. Pour vérifier les en-têtes de réponse d'un fichier à l'aide de la commande suivante pour demander un fichier à notre serveur Nginx local et affiche les en-têtes de réponse:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
Dans la deuxième ligne, vous trouverez l'en-tête _etag_, qui contient un identifiant unique pour cette révision particulière du fichier demandé. Si vous exécutez la dernière commande _curl_ à plusieurs reprises, vous trouverez exactement la même valeur ETAG.
Lorsque vous utilisez un navigateur Web, la valeur _ETAG_ est stockée et renvoyée au serveur avec l'en-tête de demande _if-none-match_ lorsque l'utilisateur actualise la page ou que le même fichier est requis par le navigateur pour une raison quelconque.
Nous pouvons simuler cela sur la ligne de commande avec la commande suivante.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Remarquez l'identifiant unique, il doit correspondre à la valeur de réponse que nous avons obtenue de notre précédent appel _curl_. La réponse sera différente cette fois:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Cette fois, Nginx répondra avec **304 non modifié** . Il n'enverra plus le fichier sur le réseau; Au lieu de cela, il indiquera au navigateur qu'il peut réutiliser le fichier qu'il a déjà téléchargé localement. Ceci est utile car il réduit le trafic réseau. Mais le navigateur doit toujours passer un appel HTTP pour obtenir une réponse du serveur, ce qui prend toujours un certain temps.

## Levier de mise en cache du navigateur avec configuration nginx   {#nginx-configuration}
Dans notre exemple précédent, nous avons expliqué comment l'e-Tag et le silence de ne pas vous aider à réduire le trafic réseau. Mais le problème avec «Etag» est que le navigateur envoie toujours une demande au serveur en demandant s'il peut réutiliser son fichier en cache. Et cela prend encore du temps pour faire la demande et recevoir la réponse.
Maintenant, avec l'aide du module d'en-tête de Nginx, nous ferons le navigateur pour mettre en cache certains fichiers localement sans demander explicitement au serveur.
Ajoutez les 3 lignes suivantes dans votre fichier de configuration Nginx pour mettre en cache du contenu statique dans Nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
La première ligne demande à Nginx de mettre en cache le contenu du navigateur client pendant 30 jours (30D). Après cette période, toute nouvelle demande de l'utilisateur entraînera la revalidation du cache et la mise à jour du navigateur client.
Vous pouvez placer les lignes ci-dessus dans les blocs _Location_, _Server_ ou _http_.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Lorsque vous les placez dans un bloc d'emplacement, seul le contenu servi par cet emplacement sera mis en cache. Dans le cas ci-dessus, seules les demandes de / statique / seront mises en cache.
Si vous souhaitez mettre en cache des types de fichiers spécifiques, vous pouvez le faire en utilisant le bloc d'emplacement.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Dans l'exemple ci-dessus, nous mettons en cache divers types de fichiers tels que JS, JPG, CSS, etc.
De même, vous pouvez placer la configuration du cache dans le bloc _Server_ avant tout bloc d'emplacement. Dans ce cas, toutes les réponses de ce serveur seront mises en cache. Ou vous pouvez le placer dans le bloc _http_, dans ce cas, toutes les demandes de serveur prises en charge par le fichier de configuration NGINX seront mises en cache.

## Conclusion   {#conclusion}
Le module d'en-têtes de Nginx peut être utilisé pour ajouter tous les en-têtes arbitraires à la réponse, mais la définition correcte des en-têtes de contrôle de cache est l'une de ses applications les plus utiles. Il vous aide à améliorer les performances du site Web, en particulier pour les utilisateurs sur des réseaux avec une latence plus élevée, comme les réseaux de transporteurs mobiles. Dans ce tutoriel, nous avons appris à tirer parti de la mise en cache du navigateur avec la configuration Nginx. J'espère que cela vous aidera à améliorer l'expérience de votre utilisateur sur votre site Web.

## Explorer
  * [Comment installer plusieurs versions PHP avec Nginx sur Ubuntu][3]
  * [Comment configurer et configurer Nginx comme proxy inverse][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
