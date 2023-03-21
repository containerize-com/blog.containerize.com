---
title: "Comment faire la surveillance des applications Web avec STATP" 
seoTitle: "Comment faire la surveillance des applications Web avec STATP" 
description: "STATPIN est l'un des meilleurs outils de surveillance du site Web qui vous permet de surveiller tous les services. Rendez la page de statut magnifique pour la disponibilité des services de vitrine." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Surveillez automatiquement vos sites Web, vos applications Web, vos API avec des outils de surveillance gratuits et vos services de présentation de disponibilité avec un système de page d'état open source." 
url: /fr/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Surveillez automatiquement vos sites Web, vos applications Web, vos API avec des outils de surveillance gratuits et la disponibilité des services de présentation avec un système de page d'état open source.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Surveillance des applications Web">}}

Statping est un **logiciel de page d'état open source  **et l'un des **  meilleurs outils de surveillance du site Web** . Il utilise également pour surveiller des services tels que les services HTTP, TCP, UDP, ICMP et GRPC. STATPINE récupère automatiquement les services, les surveillez et rendent la belle page de statut. Il est multiplateforme et vous pouvez l'installer sur les systèmes d'exploitation Liunx, Mac et Windows. En outre, il permet d'utiliser le système de base de données MySQL, Postgres ou SQLite pour stocker des informations. De plus, il est livré avec des applications mobiles hors boîte pour les appareils iPhone et Android.
Jetons un coup d'œil sur les caractéristiques de base de Statping.
  * **Surveillance des services**  - STATPIN vous permet de suivre facilement tous vos services HTTP, TCP, UDP, GRPC et ICMP.
  * **Notifications**  - STATPIN prend en charge la plupart des principales applications tierces pour recevoir des notifications.
  * **Application mobile**  - Utilisez l'application gratuite pour les appareils iPhone et Android et gérez tout en déplacement.
  * **OAuth Authenticatio**  n - prend en charge l'authentification OAuth pour les services populaires tels que GitHub, Google, Slack et le fournisseur OpenID personnalisé. Utilisez cette fonctionnalité et augmentez la sécurité.
Nous couvrirons les sujets suivants dans ce tutoriel.
  * [Installation sur Linux][1]
  * [Configurer le service systemd][2]
  * [Créer un service pour la surveillance][3]
  * [Conclusion][4]

## Installation sur Linux   {#installing}
Exécutez la commande ci-dessous pour l'installation de Statping.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Configurer Systemd Service   {#configure}
La configuration d'un service SystemD est un excellent moyen de s'assurer que votre serveur Statping peut redémarrer automatiquement si nécessaire. Pour créer un service SystemD, suivez les étapes ci-dessous.
  * Tout d'abord, exécutez la commande ci-dessous pour créer un nouveau fichier.
```
sudo nano /etc/systemd/system/statping.service
```
  * Copiez ci-dessous le code et collez-y.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Enfin, utilisez les commandes ci-dessous pour activer et démarrer le service SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Créer un service pour la surveillance   {#create}
  * Ouvrez votre navigateur, entrez URL pour vous connecter à votre installation Statping.
  * Cliquez sur le lien Services dans la navigation supérieure. Il vous montrera la page des services qui ressemble en dessous.

{{< figure align=center src="images/statping-dashboard.png" alt="Liste de surveillance des services Web">}}

  * Cliquez sur le bouton Créer pour ajouter un nouveau service pour la surveillance. Remplissez les champs requis tels que le nom du service, le type de service, le vérification de l'intervalle, le point de terminaison du service (URL), etc.

## Conclusion   {#conclusion}
Nous avons appris sur Statping, comment l'installer sur Linux et comment créer un service SystemD dans ce tutoriel. De plus, nous avons créé un nouveau service pour surveiller et vous présenter les différentes fonctionnalités. Nous espérons que ce guide vous aidera à commencer à utiliser STATPING pour effectuer **la surveillance des services Web  **et **  Suivi des applications Web** .
Enfin, [**contenerize.com **][5] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [ **statut**  ][6] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [**Top 5 du logiciel de page d'état open source pour 2020** ][7]
  * [**statping** ][8]
  * [**cachet** ][9]
  * [**Moniteur** ][10]
  * [**Staytus** ][11]
  * [**Upptime** ][12]
  * [**statusfy** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
