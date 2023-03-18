---
title: "Comment configurer le logiciel de sauvegarde open source Resttic sur Ubuntu" 
seoTitle: "Comment configurer le logiciel de sauvegarde open source Resttic sur Ubuntu" 
description: "Resttic est un rapide, un des meilleurs logiciels de sauvegarde open source. Il prend en charge AWS S3, Microsoft Azure, Google Cloud et d'autres options de backend." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Prenez la sauvegarde avec le logiciel de sauvegarde open source et stockez-le localement ou sur des backends externes. Resttic est multiplateforme et prend en charge plusieurs types de stockage." 
url: /fr/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Prenez la sauvegarde avec le logiciel de sauvegarde open source et stockez-le localement ou sur des backends externes. Resttic est multiplateforme et prend en charge plusieurs types de stockage.

{{< figure align=center src="images/restic-post-banner.png" alt="Logiciel de sauvegarde open source">}}

Un système de sauvegarde est vraiment important pour les entreprises et les particuliers. Les données peuvent être perdues pour diverses raisons telles qu'une cyberattaque, une défaillance du système, une élimination accidentelle et bien d'autres. Vous devriez avoir une bonne stratégie de sauvegarde en place afin que vous puissiez restaurer vos données rapidement. Ce guide vous montrera comment installer et utiliser le logiciel de sauvegarde ** Open Source ** RESTIC sur votre serveur Ubuntu.
Nous avons couvert les sections suivantes dans ce tutoriel.
  * [** Prérequis **] [1]
  * [** Qu'est-ce que Resttic? **] [2]
  * [** Installation de restic **] [3]
  * [** Configuration de la restauration **] [4]
  * [** Alternatives au restic **] [5]
  * ** [Conclusion] [6] **

## Prérequis {#prerequisites}
Le logiciel de sauvegarde de Resttic prend en charge les trois principaux systèmes d'exploitation Linux, MacOS et Windows. Avant d'installer ** RESTIC BACKUP **, vous devez répondre aux exigences du système suivantes.
  * Système de machine ou de bureau avec système d'exploitation Ubuntu qui abrite les données à sauvegarder
  * Une dernière instance de serveur Ubuntu
  * Authentification de la clé SSH configurée entre les deux clients et le serveur
  * Utilisateur non racinaire avec privilèges sudo
Avec ces bits à la main, déplacez-vous et mettons au travail.

## Qu'est-ce que Resttic? {#Restic}
[** RESTIC **] [7] est un fantastique ** outil de sauvegarde open source **. Il s'agit d'un ** utilitaire de sauvegarde gratuit ** qui est rapide, sécurisé et efficace. Il s'agit du programme de sauvegarde multiplateforme, il s'exécutera donc sur Linux, BSD, Mac OS X et Windows. RESTIC Le meilleur logiciel de sauvegarde open source est facile à exécuter et ne nécessite pas de serveur ou de configuration compliquée. Il crée une sauvegarde des données modifiées et permet aux utilisateurs de le restaurer si nécessaire. De plus, il offre une variété d'options de stockage, y compris le stockage auto-hébergé et Internet. De plus, le stockage de cloud auto-hébergé Open Source Resttic utilise des techniques cryptographiques robustes pour protéger vos données.
Resttic n'est pas un utilitaire de copie de fichiers simple. Il est principalement construit sur deux concepts: les instantanés et les référentiels. ** RESTIC ** La solution de sauvegarde open source enregistre les informations sous forme d'instantané, qui est ensuite enregistrée dans un référentiel. Il est écrit dans le langage de programmation Go. L'utilitaire de sauvegarde basé sur Restic GO et l'application de sauvegarde open source fonctionnent en douceur avec de nombreux systèmes de stockage de backend cloud et locaux. Le code source du logiciel de sauvegarde du fichier open source Resttic est disponible sur [** github **] [8]. Cependant, vous pouvez trouver un [** documentation **] [*] [9] pour l'installation et l'utilisation.
La sauvegarde du cloud auto-hébergé Resttic prend en charge les backends suivants pour le stockage de sauvegarde.
  * Répertoire local
  * Serveur SFTP (via SSH)
  * Serveur de repos
  * AWS S3
  * Minio Server
  * Wasabi
  * Cloud Alibaba
  * OpenStack Swift
  * Backblaze B2
  * Stockage Microsoft Azure Blob
  * Storage Cloud Google
Vous pouvez utiliser [** rclone **] [10] pour divers backends en plus de ceux énumérés ci-dessus.

## Restic Installation {#installation}
Il existe différentes façons d'installer le meilleur stockage de cloud auto-hébergé RESTIC sur votre système d'exploitation Ubuntu. Nous couvrirons l'installation du stockage de fichiers auto-hébergé Retic à l'aide du package Ubuntu, du Docker et du code source.

### Installation à l'aide du package
  * Exécutez la commande ci-dessous pour installer Resttic Open Source Backup Server sur Ubuntu OS.
```
$ sudo apt-get install restic
```

### Installation à l'aide de Docker
  * Obtenez l'image Resttic de DockerHub.
```
$ docker pull restic/restic
```

### Installation à l'aide de la source
  * Tout d'abord, vous devez installer le langage de programmation GO pour configurer Resttic à partir de la source. Vous pouvez visiter le site officiel de Golang **] [11] pour les instructions à installer Go.
  * Ensuite, exécutez les commandes ci-dessous pour installer une sauvegarde incrémentielle Resttic.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * En spécifiant le système d'exploitation cible dans la commande, vous pouvez rapidement compiler Resttic pour toutes les plates-formes prises en charge. Voici quelques exemples.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Configuration de Resttic {#configuration}
Comme nous l'avons déjà mentionné ci-dessus, le système de sauvegarde Open Source Resttic est basé sur des instantanés et des référentiels pour la sauvegarde. Jetons un coup d'œil à la configuration d'un référentiel, prenons un instantané, puis restaurez la sauvegarde.

### Créer un référentiel
  * Exécutez la commande suivante pour initialiser le référentiel. Vous devez également définir un mot de passe pour le référentiel.
```
$ restic init --repo /tmp/
```

### Données de sauvegarde à un répertoire local
  * Dans la première étape, nous avons créé un référentiel pour stocker les données. Maintenant, nous allons ajouter des données au référentiel pour la sauvegarde. Exécutez la commande suivante.
```
$ restic --repo /tmp/backup backup ~/work
```

### Restaurez la sauvegarde
  * La commande Restore restaure les fichiers et les répertoires. Les fichiers ne sont pas restaurés à leur emplacement d'origine lors de l'utilisation de la sauvegarde du cloud open source Resttic. Vous devez choisir un emplacement cible pour que les fichiers soient restaurés par Resttic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Cependant, vous pouvez restaurer le dernier instantané sans spécifier l'ID instantané. Vous devez ajouter le dernier paramètre de la commande comme ci-dessous.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Travailler avec des instantanés
Dans cette section, nous examinerons certaines des fonctionnalités des instantanés.
  * Exécutez la commande suivante pour indiquer les snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Vous pouvez comparer deux instantanés avec la commande suivante.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Vous devrez peut-être supprimer une ancienne sauvegarde pour libérer l'espace de stockage. Pour supprimer un instantané, exécutez la commande ci-dessous.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Alternatives à Resttic
Resttic est l'application logicielle de sauvegarde open source la plus populaire et garantit la confidentialité et l'intégrité de vos données importantes de fichiers. Voici les alternatives les plus populaires et les meilleurs concurrents de l'outil de sauvegarde de données de Resttic.
  * Glacier Amazon
  * Réplication
  * Runrestic
  * Afi
  * Sauvegarde de la pluie
  * Borg
  * Sauvegarde Veeam
  * Passerelle de stockage AWS
  * Cohésité

## Conclusion
Dans cet article, nous avons couvert le logiciel de sauvegarde Open Source Resttic ** **. Nous avons également discuté de plusieurs techniques d'installation, ainsi que comment créer une sauvegarde et comment restaurer la sauvegarde. Il existe de nombreuses autres formes de stockage de sauvegarde des données, et nous venons d'en aborder une dans cet article. Les types de stockage backend restants seront couverts dans de futures publications. Nous espérons que ce tutoriel servira de point de départ à utiliser le meilleur outil de sauvegarde open source Resttic pour prendre et restaurer les sauvegardes.
Enfin, [** contenerize.com **] [12] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [** logiciel de sauvegarde **] [13] pour les dernières mises à jour.
_ Quel est votre logiciel de sauvegarde gratuit et open source préféré ?. Avez-vous des questions sur le logiciel de sauvegarde open source?, S'il vous plaît_ [contacter] [14].

## Explorer:
Nous avons également plusieurs autres informations connexes de la montre OSS:
  * [Top 5 du logiciel de stockage cloud open source en 2021] [15]
  * [Comment installer NextCloud avec Apache sur Ubuntu Server] [16]
  * [Installez et configurez OwnCloud avec Apache sur Ubuntu] [17]
  * [Comment installer le partage de fichiers Pydio et la plate-forme de synchronisation sur Ubuntu] [18]
  * [NSQ vs Kafka | Quelles sont les principales différences?] [19]
  * [NextCloud vs OwnCloud | Quelles sont les différences?] [20]
  * [Meilleur logiciel de stockage cloud et de partage de fichiers open source] [21]
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
