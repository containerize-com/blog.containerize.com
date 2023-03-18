---
title: "Comment convertir les règles de réécriture de HTACCESS en directives de réécriture Nginx" 
seoTitle: "Comment convertir les règles de réécriture de HTACCESS en directives de réécriture Nginx" 
description: "Nginx ne prend pas en charge les règles de réécriture .htaccess, les développeurs doivent donc convertir ces règles en directives de réécriture de Nginx. Apprenons à effectuer cette conversion." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx ne prend pas en charge les règles de réécriture HTACCESS, et les développeurs exigent de convertir ces règles en directives de réécriture de Nginx. Apprenons à faire cette conversion." 
url: /fr/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx ne prend pas en charge les règles de réécriture HTACCESS, et les développeurs ont besoin de convertir ces règles en directives de réécriture de Nginx. Apprenons à faire cette conversion.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Convertir .htaccess réécrivez les règles en directives de Nginx">}}

Dans notre dernier tutoriel, nous avons appris [comment installer plusieurs versions PHP avec Nginx sur Ubuntu] [1]. Apache est l'un des serveurs les plus populaires, mais ces derniers temps, Nginx s'est imposé comme un concurrent d'Apache. Mais Nginx ne prend pas en charge les règles de réécriture HTACCESS. Ainsi, dans cet article, nous apprendrons à convertir les règles de réécriture de HTACCESS en directives de réécriture de Nginx. Commençons!
  * ** [Nginx Rewrite Rules] [2] **
  * [**. HTACCESS REWRIT RÈGLES **] [3]
  * [** Convertir des règles de réécriture .htaccess en directives de réécriture Nginx **] [4]
  * [** Conclusion **] [5]

## Nginx réécrit les règles {#nginx}
Réécrivez les règles de modification d'une partie ou de la totalité de l'URL dans une demande client, généralement pour informer les clients que la ressource qu'ils demandent réside désormais à un endroit différent, ou pour contrôler le flux de traitement dans Nginx. Par exemple pour transférer les demandes à un serveur d'applications lorsque le contenu doit être généré dynamiquement. La directive Try_Files est souvent utilisée à cet effet.
Les deux directives de réécriture générale de Nginx sont _return_ et _rewrite_, et la directive _try_files est un moyen pratique de diriger les demandes de serveurs d'application.
La directive de retour est la plus simple des deux directives générales. Vous enfermez le retour dans un serveur ou un contexte de localisation.
Par exemple, voici un exemple très simple qui redirige les clients vers un nouveau nom de domaine en utilisant la directive _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Mais que se passe-t-il si vous avez besoin d'effectuer des distinctions compliquées entre les URL, de capturer des éléments dans l'URL d'origine, ou de changer ou d'ajouter des éléments sur le chemin? Vous pouvez utiliser la directive _rewrite_ dans de tels cas.
Voici un exemple de règle de réécriture Nginx qui utilise la directive de réécriture. Il correspond aux URL qui commencent par la chaîne / chansons, puis incluent le répertoire / média / ou / audio / quelque part plus tard dans le chemin. Il remplace ces éléments par / mp3 / et ajoute l'extension de fichier appropriée, .mp3 ou .ra. Les variables à 1 $ et à 2 $ capturent les éléments de chemin qui ne changent pas. À titre d'exemple, / télécharger / cdn-est / media / file1 devient /Download/cdn-west/mp3/file1.mp3. S'il y a une extension sur le nom de fichier (tel que .flv), l'expression le dépouille et le remplace par .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess Rewrite Règles {#apache}
Le fichier .htaccess contrôle un certain nombre de façons dont un site Web peut être accessible, bloqué et redirigé. Il le fait en utilisant une série d'une ou plusieurs règles de réécriture .htaccess. Ces réécritures sont exécutées par le module mod_rewrite d'Apache.
MOD_REWRITE fournit un moyen de modifier les demandes d'URL entrantes, dynamiquement, sur la base de règles d'expression régulières. Cela vous permet de cartographier toutes les URL sur votre structure URL interne de quelque manière que ce soit. Ceci est également utilisé pour faire nettoyer vos URL externes, puis les cartographier sur des URL internes d'aspect laid.
Par exemple, le suivi de la règle de réécriture .htaccess reformit une URL non www à une URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## converti.
Comme nous l'avons montré dans notre exemple ci-dessus pour rediriger une URL non WWW en URL www, convertissons la même règle de réécriture .htaccess en directive de réécriture Nginx.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Nous avons donc créé deux blocs _Server_ séparés, l'un pour _ourdomain.com_ et l'autre pour _www.yourdomain.com_. Et dans le bloc _Server_ pour _ourdomain.com_, nous utilisons la directive _return_ pour rediriger l'URL non www vers l'URL www.
La même redirection que nous avons effectuée avec la directive de retour peut également être effectuée avec la directive de réécriture mais n'est pas recommandée.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Pour plus de clarté, convertissons les règles WordPress htaccess en directive nginx try_files.
[Wordpress.org distribue] [6] Un fichier de base par défaut **. HTACCESS ** avec les suivants. HTACCESS réécrit les règles qui permettent de jolies permaliens:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Voici la directive Nginx Try_Files convertie
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Conclusion {#conclusion}
Dans ce didacticiel, nous avons exploré les règles de réécriture .htaccess d'Apache et comment nous pouvons convertir ces règles de réécriture .htaccess en directives de réécriture Nginx. Nous avons en outre exploré différentes directives Nginx qui peuvent être utilisées pour réécrire les URL. Nous avons également donné des exemples de règles de réécriture pour Nginx et Apache. J'espère que le tutoriel vous est utile.

## Explorer
  * [Comment installer plusieurs versions PHP avec Nginx sur Ubuntu] [1]
  * [Comment configurer et configurer Nginx comme proxy inverse] [7]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
