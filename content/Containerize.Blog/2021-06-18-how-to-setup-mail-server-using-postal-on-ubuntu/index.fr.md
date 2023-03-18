---
title: "Comment configurer le serveur de messagerie à l'aide de Postal sur Ubuntu" 
seoTitle: "Comment configurer le serveur de messagerie à l'aide de Postal sur Ubuntu" 
description: "Envoyez des e-mails à partir de vos applications Web avec le serveur de messagerie open source. Postal vous permet d'envoyer des e-mails à l'aide de l'API SMTP & HTTP et de surveiller également le trafic des e-mails." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Envoyer et recevoir des e-mails avec un serveur de messagerie open source. Cet article vous aidera à installer et à configurer le serveur de messagerie postal pour votre entreprise." 
url: /fr/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Envoyer et recevoir des e-mails avec un serveur de messagerie open source. Cet article vous aidera à installer et à configurer le serveur de messagerie postal pour votre entreprise.

{{< figure align=center src="images/postal-banner.png" alt="Serveur de messagerie open source">}}

L'envoi de courriels sur différents types d'événements est nécessaire pour les applications modernes. Chaque entreprise a besoin d'un serveur de messagerie ** fiable ** pour les e-mails sortants. En outre, les entreprises ont besoin d'un serveur de messagerie pour envoyer des e-mails en vrac pour des campagnes marketing, des newsletters et de nombreuses autres tâches. Il y a plusieurs ** Server de messagerie open source ** disponibles pour cela. Cependant, nous discuterons du ** serveur postal ** en détail dans cet article et couvrirons les sujets suivants.
  * [Qu'est-ce que le serveur de messagerie postal?] [1]
  * [Caractéristiques de la postal] [2]
  * [Installation postale] [3]
  * [Conclusion] [4]

## Qu'est-ce que le serveur de messagerie postal? {#Postal}
[** Postal **] [5] est un serveur de messagerie gratuit et ** Open Source **. Il s'agit d'un serveur de messagerie complet pour les sites Web et les applications Web. Le serveur de messagerie postal est une alternative au serveur de courrier populaire ** populaire existant ** comme SendGrid et Mailgun. ** Postal ** est une plate-forme de livraison d'e-mail open source robuste, sécurisée et évolutive. Tout le code source et la documentation sont disponibles sur [** github **] [6]. Vous pouvez télécharger, l'installer sur votre serveur privé et garder le contrôle total dessus. Vous pouvez également l'améliorer et l'améliorer selon les besoins de l'entreprise. De plus, ** Postal Mail Server ** prend en charge plusieurs organisations.
Les utilisateurs peuvent afficher les graphiques et les statistiques montrant le volume des courriers entrants et sortants. De plus, vous pouvez accéder à la file d'attente de messages sortante et entrante. Le serveur de messagerie postal fournit des fonctionnalités pour les webhooks. Vous pouvez configurer des webhooks pour recevoir des informations en direct sur les informations de livraison en temps réel. Il offre également une rétention de messages qui vous permet de stocker et d'examiner tous les messages envoyés et reçus. La livraison des e-mails est très importante dans l'entreprise pour s'assurer que les utilisateurs reçoivent l'e-mail. Cependant, les e-mails sont parfois livrés à l'utilisateur et vous devez enquêter sur le problème. Le ** serveur de messagerie entrant et sortant ** fournit également une journalisation complète et des outils pour effectuer l'enquête.

## Caractéristiques de la postal {#Features}
Le serveur de messagerie postal offre de nombreuses fonctionnalités. Cependant, nous discuterons des caractéristiques clés suivantes de cet article.
** Envoi des e-mails **: le serveur de messagerie postal fournit deux techniques pour les e-mails sortants, y compris l'API HTTP et SMTP. Vous pouvez facilement utiliser l'API HTTP pour l'intégration avec les applications Web. Vous pouvez également utiliser un serveur SMTP pour l'intégration avec les applications et systèmes existants.
** Les e-mails entrants **: ** Mail entrant ** peuvent être transmis à HTTP Endpoint, ** SMTP Server ** et à d'autres adresses e-mail à l'aide du serveur de messagerie postal.
** Vérification du spam et du virus **: Spamassassin et Clamav peuvent être intégrés à la postal pour numériser automatiquement les messages entrants et sortants lorsqu'ils passent par des serveurs de messagerie. Cette fonctionnalité est également désactivée par défaut.
** Cliquez sur et ouvrez le suivi **: les ouvertures et les clics par e-mail peuvent être suivis avec la poste. Postal analysera vos messages sortants et remplacera tous les liens par un nouveau lien qui parcourt votre serveur Web postal. Lorsque l'utilisateur clique sur le lien, la poste enregistre l'action et les redirige instantanément vers l'URL d'origine. Cependant, cela n'est pas activé par défaut.
** Pools IP **: Postal vous permet d'envoyer des messages à partir d'une variété d'adresses IP. Cela vous permet d'attribuer plusieurs adresses IP à différents serveurs de messagerie ou d'envoyer à partir de différents IPS en fonction de l'expéditeur ou des adresses du destinataire.

## Installation postale {#installation}
Suivez le guide étape par étape ci-dessous pour installer le logiciel postal ** Mail Server ** sur Ubuntu 18.04.
  * Tout d'abord, vous devez connecter votre serveur Vis SSH. Exécutez la commande suivante pour mettre à jour le système avec les derniers packages disponibles.
```
sudo apt-get update
```

### Installer le serveur de base de données MARIADB
  * Exécutez la commande pour installer MariaDB.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Une fois que vous avez terminé avec l'installation. Maintenant, vous devez le sécuriser en exécutant la commande ci-dessous.
```
mysql_secure_installation
```
  * Ensuite, il vous posera quelques questions comme indiqué ci-dessous. Vous devez répondre à toutes les questions.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Connectez-vous au serveur MARIADB avec la commande suivante.
```
mysql -u root -p
```
  * Créez une base de données pour le poste.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Ensuite, créez un utilisateur de base de données appelée "postaluser" avec un nouveau mot de passe.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Après cela, accordez l'accès complet à l'utilisateur à la base de données "postAluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Ensuite, rincez les privilèges et sortez de la coque MariaDB avec la commande suivante.
```
FLUSH PRIVILEGES;
EXIT;
```

### Installer Ruby
  * Tout d'abord, ajoutez un PPA tiers pour installer Ruby. Exécutez les commandes suivantes.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Mettre à jour les packages Ubuntu.
```
sudo apt update
```
  * Installez Ruby en exécutant la commande ci-dessous.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Installer Rabbitmq
  * Erlang est nécessaire pour installer RabbitMQ, vous devez donc l'installer également. Ajoutez une touche de référentiel erlang à Ubuntu avec la commande ci-dessous.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Ensuite, ajoutez le référentiel Erlang avec la commande suivante.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Exécutez les commandes suivantes pour installer Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Une fois que vous avez terminé avec l'installation Erlang, vous pouvez procéder à l'installation de RabbitMQ. Ajoutez le référentiel Rabbitmq au Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Ajoutez la touche Rabbitmq GPG avec la commande suivante.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Exécutez les commandes ci-dessous pour installer le package RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Exécutez la commande ci-dessous pour activer RabbitMQ, afin qu'il commence toujours lorsque le démarrage du système.
```
sudo systemctl enable rabbitmq-server
```
  * Ensuite, vous devrez créer RabbitMQ VHOST et utilisateur pour Postal. Exécutez la commande suivante.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Installer NodeJs
  * Ajouter le référentiel NodeJs avec la commande suivante.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Ensuite, exécutez la commande ci-dessous pour installer NodeJS.
```
sudo apt-get install nodejs
```

### Installer le serveur de messagerie postal
  * Tout d'abord, vous devez créer un utilisateur pour le serveur de messagerie postal. Créez-le avec la commande suivante.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Ensuite, permettez à Ruby d'écouter sur les ports Web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Installez tous les gemmes requises avec les commandes suivantes.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Créez une structure de répertoire pour le postal.
```
sudo mkdir -p /opt/postal/app
```
  * Ensuite, téléchargez la dernière version de Postal.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Extraire le fichier téléchargé avec la commande suivante.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Ensuite, changez la propriété du répertoire postal.
```
sudo chown -R postal:postal /opt/postal
```
  * Créez un lien symbolique pour le binaire postal en exécutant la commande ci-dessous.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Installez toutes les dépendances requises.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Exécutez la commande ci-dessous pour initialiser les configurations postales.
```
sudo postal initialize-config
```
  * Ensuite, exécutez la commande suivante pour ouvrir le fichier de configuration postale.
```
sudo nano /opt/postal/config/postal.yml
```
  * Faire les modifications indiquées en gras et enregistrez le fichier.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Exécutez la commande pour initialiser la base de données.
```
sudo postal initialize
```
  * Créez un utilisateur d'administration pour Postal.
```
sudo postal make-user
```
  * Ensuite, vous devrez fournir des détails sur les comptes d'utilisateurs comme indiqué ci-dessous.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Enfin, exécutez la commande suivante pour démarrer et vérifier l'état de l'application postale.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Installer Nginx
  * Exécutez la commande ci-dessous pour installer le serveur Web Nginx.
```
sudo apt install nginx
```
  * Ensuite, copiez la configuration postale nginx pour l'utiliser comme hôte virtuel.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Créez un certificat SSL auto-signé.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Après cela, vous devrez répondre aux questions.
  * Ouvrez le fichier hôte virtuel par défaut de Nginx.
  * Modifiez la valeur de server_name et enregistrez le fichier.
  * Enfin, redémarrez le serveur Web Nginx en exécutant la commande ci-dessous.
```
sudo systemctl restart nginx
```
  * Enfin, ouvrez votre navigateur et saisissez l'URL https://postal.example.com. Vous serez redirigé vers la page de connexion.

## Conclusion {#conclusion}
Nous avons parcouru l'introduction et les principales fonctionnalités du serveur de messagerie postal en profondeur. Nous avons également inclus des instructions étape par étape pour configurer cet agent de transfert de courrier ** **. De plus, nous avons donné un aperçu de la configuration. La configuration d'un serveur de messagerie postal est un processus simple. J'espère que cet article est en effet utile pour configurer et configurer un serveur de messagerie postal pour votre entreprise.
Enfin, [** contenerize.com **] [7] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [** Email transactionnel **] [8] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [** Top Transactional Email Software **] [9]
  * [** Potal - Serveur de messagerie open source **] [5]
  * [** 5 meilleurs logiciels de serveur de messagerie open source pour les entreprises en 2020 **] [10]
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
