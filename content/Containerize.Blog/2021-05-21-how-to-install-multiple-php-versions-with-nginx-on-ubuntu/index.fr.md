---
title: "Comment installer plusieurs versions PHP avec Nginx sur Ubuntu" 
seoTitle: "Comment installer plusieurs versions PHP avec Nginx sur Ubuntu" 
description: "L'article explique comment installer plusieurs versions de PHP avec Nginx sur Ubuntu. Nous allons passer par des instructions étape par étape sur la façon d'installer PHP avec Nginx." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Si vous cherchez à utiliser plusieurs versions de PHP avec Nginx, dans cet article, nous vous guiderons pas par étape sur la façon d'installer PHP avec Nginx sur Ubuntu." 
url: /fr/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP avec Nginx plusieurs versions PHP">}}


## Si vous cherchez à utiliser plusieurs versions de PHP avec Nginx, alors dans cet article, nous vous guiderons étape par étape sur la façon d'installer PHP avec Nginx sur Ubuntu.
Cet article est dans la continuation de notre série sur les tutoriels sur Nginx. Jusqu'à présent, nous avons couvert comment utiliser nginx comme équilibreur de charge, comment utiliser Nginx comme proxy inverse. Et maintenant, ce tutoriel couvre une autre question exigeante «Comment utiliser plusieurs versions de PHP avec Nginx». Dans ce tutoriel, nous vous guiderons étape par étape sur la façon d'installer PHP sur Ubuntu, comment configurer PHP avec Nginx, et enfin comment installer plusieurs versions de PHP avec Nginx. Alors, commençons!
  * [Installer nginx] [1]
  * [Installez plusieurs versions PHP] [2]
  * [Créez plusieurs sites Web avec PHP] [3]
  * [Configurer nginx pour exécuter différentes versions pour les sites Web] [4]
  * [Conclusion] [5]

## installer nginx {#nginx}
Nginx (prononcé en tant que «Engine-X») est un serveur Web open source qui est souvent utilisé comme proxy inversé ou cache HTTP. Il est disponible gratuitement pour Linux.
Pour installer nginx, utilisez la commande suivante:
```
sudo apt update
sudo apt install nginx
```
Une fois l'installation terminée, vous pouvez ouvrir «http: // localhost» dans votre navigateur et vous avez toute configuration.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Installez PHP avec Nginx">}}


## Installer plusieurs versions PHP {#php}
** PHP ** (Acronyme récursif pour ** PHP: Hypertext Preprocessor **) est un langage de script à usage général populaire et à usage général qui est largement utilisé et le mieux adapté pour développer des sites Web et des applications Web. Il s'agit d'un langage de script côté serveur qui peut être intégré à HTML.
Actuellement, il existe trois versions prises en charge de ** php **, c'est-à-dire ** PHP 5.6 **, ** 7.0, ** et ** 8.0 **. Signification ** PHP 5.3 **, ** 5.4, ** et ** 5.5 ** ont tous atteint la fin de la vie; Ils ne sont plus pris en charge avec des mises à jour de sécurité. Installons donc d'abord PHP 7.0 et PHP 7.2 avec PHP-FPM.
En fait, avant de nous déplacer avec l'installation, nous permet d'abord que ce qui est PHP-FPM. ** PHP-FPM ** (un acronyme de ** FastCGI Process Manager **) est une implémentation FastCGI alternative de PHP (processeur hypertexte) extrêmement populaire. PHP-FPM comprend de nombreuses fonctionnalités qui peuvent s'avérer bénéfiques pour les sites Web recevant fréquemment du trafic en gros volumes.
Pour installer PHP 7.0 et 7.2 d'abord, vous devrez ajouter le référentiel PHP à votre serveur pour installer plusieurs versions de PHP. Vous pouvez ajouter le référentiel php ondrej avec la commande suivante:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Une fois le référentiel à jour, installez PHP 7.0, PHP 7.2 et PHP-FPM avec la commande suivante:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Une fois l'installation terminée, vérifiez l'état de PHP-FPM avec la commande suivante:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Créez plusieurs sites Web avec PHP {#Web}
La page par défaut est placée dans / var / www / html / emplacement. Vous pouvez placer vos pages statiques ici, ou utiliser l'hôte virtuel et le placer un autre emplacement
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Créez ensuite un exemple de fichier index.php pour site1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Créez maintenant un exemple de fichier index.php pour Site2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Ensuite, modifiez la propriété des deux sites Web en www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Configure nginx {#configure}
Ensuite, vous devrez créer un fichier hôte virtuel Nginx pour Domain Site1.Containerise.com qui utilise PHP 7.0. Et un autre pour Site2.ContaineRerise.com qui utilise PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Ajouter les lignes suivantes:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Créez maintenant le deuxième fichier pour Site2.ContaineRise.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Ensuite, activez les deux fichiers hôte virtuels avec la commande suivante:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Enfin, redémarrez le service NGINX et PHP-FPM pour appliquer toutes les modifications de configuration:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Conclusion {#conclusion}
Dans ce tutoriel, nous avons exploré comment plusieurs versions PHP sur Ubuntu. Nous avons appris à installer nginx. Ensuite, nous avons exploré comment configurer deux sites Web différents dans Nginx. Et enfin, nous avons appris à configurer deux sites Web différents avec différentes versions de PHP avec Nginx. J'espère que le tutoriel vous a aidé.

## Explorer
  * [Comment configurer et configurer Nginx comme proxy inverse] [6]
  * [Comment utiliser Nginx comme équilibreur de charge pour votre application] [7]
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
