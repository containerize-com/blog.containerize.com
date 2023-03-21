---
title: "Comment installer et sécuriser phpmyadmin avec nginx sur ubuntu" 
seoTitle: "Comment installer et sécuriser phpmyadmin avec nginx sur ubuntu" 
description: "PHPMYADMIN est un logiciel de gestion de base de données open source écrit en PHP. Nous apprendrons comment installer phpmyadmin avec nginx et administrer MySQL via phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMYADMIN est l'outil de gestion de la base de données d'interface Web graphique open source écrit en PHP. Dans ce tutoriel, nous apprendrons à installer phpmyadmin avec nginx." 
url: /fr/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PhpMyAdmin est l'outil de gestion de la base de données d'interface Web graphique open source écrit en PHP. Dans ce tutoriel, nous apprendrons à installer phpmyadmin avec nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Comment installer et sécuriser phpmyadmin avec nginx sur ubuntu">}}


## **Aperçu**
PHPMyAdmin est un outil de gestion de la base de données gratuite et open source qui offre aux utilisateurs une interface Web pour gérer les serveurs MySQL ou MARIADB via une interface intuitive. Il s'agit de l'un des logiciels largement pris en charge proposés par la plupart des fournisseurs d'hébergement populaires pour permettre aux administrateurs Web de créer une base de données dans PhpMyAdmin et de gérer les bases de données, d'exécuter facilement des stades SQL, d'importation et d'exportation. Vous pourrez accéder à vos bases de données MySQL ou MARIADB dans PHPMyAdmin avec Nginx via une interface Web graphique facilement, exécutant à côté d'un environnement de développement PHP.
Dans ce guide, nous allons décrire les étapes comment installer et sécuriser phpmyadmin avec nginx sur Ubuntu 20.04. Vous devrez installer et configurer PhpMyAdmin sur Ubuntu Server pour le laisser fonctionner facilement avec les bases de données et les tables MySQL. Alors, apprenons à installer et à sécuriser le phpmyadmin avec nginx sur Ubuntu 20.04 / 20.10:
  * Conditions préalables
  * Installer PhpmyAdmin
  * Configurer la base de données
  * Créer un lien symbolique
  * Accès à PhpmyAdmin
  * Créer un superutilisateur MySQL
  * Sécuriser Phpmyadmin
  * Conclusion

## Étape 1: Prérequis   {# id-prérequis}
Pour suivre ce guide, vous aurez besoin d'un serveur Ubuntu 20.04 exécuté sur votre ordinateur local ou sur un serveur distant avec des conditions préalables.
  * Vous devez accéder au serveur en tant qu'utilisateur non root avec les privilèges sudo et le pare-feu UFW activé.
  * Il est supposé que vous avez déjà installé Nginx, MySQL et PHP sur Ubuntu.
  * Comme PhpMyAdmin utilise des informations d'identification MySQL pour s'authentifier, vous devez également installer des certificats SSL / TLS pour activer le trafic crypté entre le serveur et le client.
Avec cela à l'écart, commençons à installer et à sécuriser PhpMyAdmin pour vous connecter à MySQL Server pour accéder à la base de données via l'interface Web.

## Étape 2: Installez PhpMyAdmin   {# id-1-stall-phpmyadmin}
Assurez-vous que vous avez installé avec succès toutes les conditions préalables de votre système avant d'installer PHPMYADMIN sur Ubuntu 20.04. Commencez par mettre à jour la liste des packages:
```
sudo apt update 
```
Maintenant, exécutez la commande suivante pour installer le package PhpMyAdmin à partir des référentiels Ubuntu par défaut sur Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Appuyez sur  **y **  et  **Entrez **  Lorsqu'on vous a demandé de continuer. Si vous êtes invité à choisir un serveur Web, car il n'y a pas d'option pour  **nginx **  comme ci-dessous, appuyez sur  **Tab **  pour sélectionner OK puis  **Entrez **  pour continuer sans sélectionner un serveur Web.

{{< figure align=center src="images/mysql-setup.png" alt="Installer et sécuriser PhpmyAdmin pour Nginx sur Ubuntu 20.04">}}


## Étape 2: Configurer la base de données   {# id-1-stall-phpmyadmin}
Ensuite, sélectionnez  **Oui **  et appuyez sur  **Entrez **  pour installer et configurer la base de données à l'aide de l'outil DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Comment configrer mysql avec phpmyadmin">}}

Le mot de passe de l'application MySQL est utilisé en interne par PhpMyAdmin pour communiquer avec la base de données MySQL. Entrez un nouveau mot de passe pour les SGBD PHPMyAdmin pour vous inscrire en tant que nouvelle base de données, sélectionnez OK et appuyez sur Entrée pour continuer.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Comment configrer mysql pour phpmyadmin">}}

Vous serez invité à confirmer le mot de passe, à entrer le même mot de passe, à sélectionner  **OK **  et à appuyer sur  **Entrée ** . Toutes nos félicitations! PHPMYADMIN a été installé avec succès sur votre système.

## Étape 4: Créer un lien symbolique   {# id-2-créate-symbolic-link}
Il existe plusieurs façons de configurer le Nginx pour servir les fichiers phpmyadmin. Si le bloc de serveur de votre domaine est déjà configuré pour servir les demandes PHP, vous devez créer un lien symbolique à partir des fichiers d'installation PHPMyAdmin Nginx / USR / Share / PhpMyAdmin vers votre répertoire racine de document de domaine. L'emplacement par défaut de la racine du document Nginx dans Ubuntu 20.04 / 20.10 doit être / var / www / html / et il pourrait être différent en fonction de votre configuration INS. Votre racine de document peut être située par exemple dans /var/www/example.com/public_html.
Ensuite, nous créerons un lien symbolique du répertoire PhpMyAdmin / USR / Share / PhpMyAdmin à votre racine de document. Ici, nous supposerons que notre racine de document est / var / www / html / et nous ajouterons simplement phpmyadmin à la fin de cela. Cela nous permettra d'accéder à phpmyadmin sur URL example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Étape 5: Accès à phpmyadmin   {# id-3-test-phpmyadmin}
Vous devriez maintenant pouvoir accéder à l'interface Web PhpMyAdmin en visitant le nom d'hôte / de domaine de votre serveur ou l'adresse IP publique suivie de domain.com/phpmyadmin dans votre navigateur Web préféré. Par exemple http://example.com/phpmyadmin ou http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Sur les serveurs Ubuntu en cours d'exécution avec MySQL 5.7 et ultérieurement, vous ne pourrez pas vous connecter à la base de données PhpMyAdmin gratuite à l'aide du compte racine par défaut MySQL et obtiendra une erreur comme _ "Accès refusé pour l'utilisateur" root "@" localhost "" _. Au lieu de cela, vous devriez créer un nouveau compte de superutilisateur uniquement pour PhpMyAdmin. Ensuite, nous créerons un compte racine MySQL pour se connecter à PhpMyAdmin.

## Étape 6: Créer un superutiliser MySQL   {# ID-4-CREATE-MYSQL-SUPERUSER}
Dans Terminal, commencez par connecter à MySQL à l'aide de votre mot de passe racine MySQL que vous avez peut-être créé un mot de passe racine lorsque vous avez installé la base de données PHPMyAdmin MySQL pour la toute première fois.
```
sudo mysql -u root -p
```
Après être connecté à MySQL, ajoutez un nouveau superutilisateur MySQL avec le nom d'utilisateur de votre choix. Dans cet exemple, nous l'appelons Yasiradmin. [Cliquez ici pour générer un mot de passe solide][2] et remplacer le nouveau \ _password \ _re ci-dessous.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Accordez maintenant les privilèges des superutilisateurs à notre nouvel utilisateur Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Maintenant, quittez la session MySQL. Vous devriez désormais pouvoir accéder à PhpMyAdmin en utilisant ces nouvelles informations d'identification de superutiliser.

{{< figure align=center src="images/image.png" alt="Comment se connecter phpmyadmin sur Ubuntu 20.04">}}

Il est fortement recommandé de configurer une sécurité supplémentaire pour PhpMyAdmin pour sécuriser le phpmyadmin nginx. Vous devriez pouvoir changer et accéder à l'URL phpmyadmin vers quelque chose comme URL obscur.

## Étape 7: sécurisé phpMyAdmin   {# id-6-secu-phpmyadmin-recommated}
Ensuite, nous voulons configurer l'authentification dans Nginx pour fournir une couche de sécurité supplémentaire. Nous allons désormais installer Apache2-Utils, qui peut générer le fichier .htpasswd qui fonctionne avec les serveurs NGINX et APACHE2.
```
sudo apt install apache2-utils
```
Une fois installé, nous pouvons générer le fichier .htpasswd. Changez le nom d'utilisateur de votre choix. [Générez un mot de passe][3] et gardez-le en sécurité.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Il y aura désormais un fichier .htpasswd contenant votre nom d'utilisateur et votre mot de passe chiffré. Vous pouvez vérifier ceci avec la commande ci-dessous:
```
cat /etc/nginx/.htpasswd
```
Vous devriez voir quelque chose comme le nom d'utilisateur: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
Nous devons maintenant ajouter 2 directives à notre fichier de configuration Nginx. L'emplacement du fichier de configuration peut varier en fonction de vos installations, bien que le chemin de fichier par défaut soit généralement à / etc / nginx / sites disponible / par défaut. Si vous configurez plusieurs domaines, votre fichier de configuration peut être situé dans un endroit comme /etc/nginx/sites-available/example.com
Dans cet exemple, nous supposerons que le fichier de configuration Nginx est à / etc / nginx / sites-disponible / par défaut. Ouvrez le fichier pour le modifier.
```
sudo nano /etc/nginx/sites-available/default
```
Faites défiler vers le bas et recherchez les blocs d'emplacement et collez dans un nouveau bloc sous eux avec le nom de votre dossier PHPMYADMIN obscurci, dans cet exemple Aspose_Hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Enregistrer le fichier et quitter (appuyez sur Ctrl + X, appuyez sur Y puis appuyez sur Entrée). Vérifiez que le fichier de configuration Nginx est valide, sinon le serveur pourrait s'écraser sur le redémarrage en exécutant la commande.
```
sudo nginx -t
```
Si valide, rechargez la configuration nginx.
```
sudo service nginx reload
```
Maintenant, lors de la visite de l'exemple.com/aspose_hidden, vous devez être présenté avec une fenêtre d'authentification.

{{< figure align=center src="images/auth3.png" alt="Comment sécuriser phpmyadmin">}}

Vous avez tous terminé avec les installations PhpMyAdmin sur Ubuntu Server.

## Conclusion:   {# id-what-next}
Félicitations, vous avez installé avec succès PhpMyAdmin avec Nginx pour le serveur Ubuntu 20.04 / 20.10 et peut maintenant administrer MySQL via PhpMyAdmin. Maintenant, vous pouvez commencer à créer des bases de données MySQL, des utilisateurs, des tables, effectuer des requêtes MySQL et diverses autres opérations.
Si vous avez des questions, n'hésitez pas à me dire ci-dessous dans la section des commentaires.

## Explorer
Vous pouvez également aimer les articles plus liés: ci-dessous:
  * [Comment configurer Apache en tant que proxy inverse pour Ubuntu / Debian][4]
  * [Comment sécuriser et crypter nginx avec Let's Encrypt sur Ubuntu 20.04][5]
  * [Comment configurer la prise en charge HTTP / 2 dans Nginx sur Ubuntu / Debian][6]
  * [Comment configurer Nginx avec Passenger sur AWS Production Server][7]
  * [Comment installer et configurer OwnCloud avec Apache sur Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
