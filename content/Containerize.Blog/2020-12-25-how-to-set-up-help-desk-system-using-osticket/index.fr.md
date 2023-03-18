---
title: "Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket" 
seoTitle: "Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket" 
description: "Gérez toutes vos demandes d'assistance en un seul endroit à l'aide de l'assistance OSTICKET. Convertir les demandes créées par e-mail, téléphone et formulaires en billets en ligne." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Gérez toutes vos demandes d'assistance en un seul endroit à l'aide d'Osticket. Convertir les demandes créées par e-mail, téléphone et formulaires en billets Web simples." 
url: /fr/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Gérez toutes vos demandes de support en un seul endroit à l'aide d'Osticket. Convertir les demandes créées par e-mail, téléphone et formulaires en billets Web simples.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket">}}

OSTICKET est une solution logicielle en ligne open source en ligne. OSTICKET Helpdesk est une alternative gratuite aux systèmes de support client élevé et complexes. Il est simple, léger, fiable, basé sur le Web et facile à configurer et à utiliser. La meilleure partie est que c'est complètement gratuit. Nous couvrirons les sections suivantes dans ce tutoriel:
  * [Qu'est-ce que l'osticket?] [1]
  * [Avantages et inconvénients de l'Osticket] [2]
  * [Comment configurer OSTICKET?] [3]
  * [Conclusion] [4]

## Qu'est-ce que l'osticket? {#osticket}
OSTICKET fournit un panneau de configuration convivial et un composant de rapport en temps réel. Les utilisateurs peuvent simplement se connecter et créer les billets en quelques étapes faciles. Ils peuvent créer des billets via votre site Web, votre e-mail ou votre téléphone. Les billets entrants seront alors enregistrés et affectés aux agents. Les agents recevront des notifications par e-mail et répondront aux requêtes pour aider à résoudre leurs problèmes. Les clients et les agents peuvent discuter des détails et des progrès dans la section des commentaires. Les clients peuvent suivre leurs demandes et progresser via le portail client intégré fourni par ce logiciel de bureau en ligne.

## Avantages et inconvénients d'Osticket {#Pros}

#### Avantages
  * OSTICKET est extrêmement convivial pour les utilisateurs finaux et les agents de support.
  * Fondé avec des fonctionnalités riches, OSTICKET a tout ce dont vous avez besoin sans être trop compliqué.
  * OSTICKET est entièrement gratuit et un logiciel de gestion des billets open source.
  * Il est léger, sécurisé, fiable et facile à installer le logiciel de gestion des services d'assistance.
  * Il est flexible de s'exécuter sur tous les serveurs Web populaires, notamment Apache, Nginx, LightTPD et IIS, etc.

#### Les inconvénients
  * OSTICKET ne fournit pas de détails sur l'analyse des billets et les statistiques comme les autres systèmes d'assistance payants.
  * Son interface utilisateur est très simple et basique par rapport à d'autres systèmes de support.

## Comment installer OSTICKET? {#comment}
Suivez ces étapes pour installer OSTICKET avec Nginx sur Ubuntu 18.04 LTS.
  * Créez un nouveau répertoire pour OSTICKET.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Téléchargez la dernière configuration OSTICKET en utilisant les commandes suivantes.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Après cela, créez un fichier config à partir d'un exemple de fichier à l'aide de ces commandes.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Ensuite, modifiez la propriété du répertoire Web OSTICKET en utilisateur et groupe «www-data».
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Après cela, créez un nouveau fichier de configuration d'hôte virtuel.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Puis collez le code de configuration dedans.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Modifiez le nom du serveur selon votre nom de domaine. Enregistrez le fichier et sortez.
  * Maintenant, liez ce fichier hôte virtuel à un dossier à sites à l'aide de la commande suivante
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Testez pour toutes les erreurs de configuration en utilisant la commande suivante
```
nginx -t
```
  * Redémarrez maintenant le service Nginx en utilisant la commande suivante
```
sudo systemctl restart nginx

```
  * Maintenant, entrez votre nom de domaine dans n'importe quel navigateur Web pour démarrer l'assistant d'installation comme indiqué dans la figure suivante

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket">}}

  * Activer les extensions requises de Php.ini et cliquez sur «Continuer».
  * Remplissez toutes les informations requises et cliquez sur le bouton «Installer maintenant» **.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket">}}

  * Dans les paramètres de la base de données, entrez DBNAME, Nom d'utilisateur et mot de passe.
  * Enfin, cliquez sur le bouton «Installer maintenant»
  * Une fois l'installation terminée, il affichera la page avec un message de réussite.
  * Ensuite, modifiez l'autorisation d'ost-config.php pour supprimer l'accès en écriture en exécutant la commande suivante:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Conclusion {#conclusion}
OSTICKET est le mieux adapté aux entreprises à petit budget ou à celles qui veulent un système d'assistance simple et non complexe. Il est simple, léger, fiable, open source et un logiciel d'assistance en ligne totalement gratuit. Ce qui fait de l'Osticket une excellente alternative aux systèmes de support client plus coûteux. Pour en savoir plus sur les fonctionnalités d'Osticket et le guide d'installation, veuillez consulter le tutoriel suivant.

## Explorer
[MEILLEUR SOFFICATION Open SOURCE ET GRATUIT IT Help Deker] [5]
[Système populaire de service d'assistance basé sur la billetterie et client] [6]
[Un guide du débutant pour développer le plugin d'Osticket] [7]
[Comment mettre en œuvre la multi-tension dans OSTICKET] [8]
[Automatiser le système de billetterie à l'aide de WordPress et d'Osticket] [9]
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
