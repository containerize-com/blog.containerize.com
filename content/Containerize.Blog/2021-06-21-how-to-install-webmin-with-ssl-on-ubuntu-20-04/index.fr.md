---
title: "Comment installer Webmin avec SSL sur Ubuntu 20.04" 
seoTitle: "Comment installer Webmin avec SSL sur Ubuntu 20.04" 
description: "Webmin est un outil d'administration système basé sur le Web pour les systèmes de type UNIX. Dans cet article, nous apprendrons à installer Webmin avec SSL sur Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin est un outil d'administration système basé sur le Web qui est une alternative simple à l'administration système de ligne de commande. Cet article guide comment installer webmin" 
url: /fr/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="comment installer webmin">}}


## Webmin est un outil d'administration système basé sur le Web qui est une alternative simple à l'administration système de ligne de commande. Cet article guide comment installer webmin
Avec cet article «Comment installer Webmin avec SSL sur Ubuntu 20.04», nous commençons notre nouvelle série de tutoriels sur les logiciels et outils d'hébergement Web. Avec WebMin, vous pouvez configurer des comptes d'utilisateurs, activer le partage de fichiers, configurer les paramètres Apache et DNS et effectuer de nombreuses autres tâches liées à l'hébergement Web. Il vous permet de gérer l'intégralité du serveur d'hébergement Web. Il élimine manuellement les problèmes de modification des fichiers de configuration Linux. Alors apprenons à installer WebMin avec SSL.
  * ** [Introduction à webmin] [1] **
  * [** Fonctions en surbrillance **] [2]
  * [** Systèmes d'exploitation pris en charge **] [3]
  * [** Installez webmin sur Ubuntu **] [4]
  * [** Installez Apache à l'aide de webmin **] [5]
  * [** Conclusion **] [6]

## Introduction à webmin {#intro}
Webmin est une interface Web pour l'administration système pour Linux. Il vous aide à gérer votre propre serveur d'hébergement à distance à partir de tout navigateur Web moderne. Avec WebMin, vous pouvez configurer les internes du système d'exploitation tels que les comptes d'utilisateurs, Apache, DNS, le partage de fichiers et bien plus encore. WebMin permet également de contrôler de nombreuses machines via une seule interface, ou une connexion transparente sur d'autres hôtes WebMin sur le même sous-réseau ou LAN. Webmin, basé sur Perl, fonctionne comme son propre processus et le serveur Web. Et la meilleure partie de Webmin est son 100% libre et open-source et a une communauté de développeurs très florissante.

## Fonctions en surbrillance {#Features}
  * Vous permet de créer et de modifier des domaines, des enregistrements DNS, des options de liaison et des vues.
  * Aide à configurer un pare-feu en créant et en modifiant des règles à l'aide d'IPFW.
  * Permettez-vous de configurer des scripts à exécuter au démarrage à partir de /etc/init.d ou /etc/rc.local
  * Vous pouvez planifier le transfert de fichier du serveur vers plusieurs serveurs
  * Vous permet d'installer des packages RPMS, Debian et Solaris sur plusieurs serveurs à partir d'une seule source
  * Il donne accès à des rapports tels que l'utilisation de la bande passante, les téléchargements, les téléchargements, les visiteurs, etc.
  * Vous pouvez créer des travaux CRON planifiés qui s'exécutent sur plusieurs serveurs simultanément
  * Vous permet d'exécuter des commandes sur plusieurs serveurs à la fois
  * Vous permet de configurer et de modifier des quotas de disque utilisateur ou de groupe pour les systèmes de fichiers locaux
  * Comprend une sauvegarde et restaurer les systèmes de fichiers à l'aide du vidage et restaurer la famille des commandes
  * À l'aide d'un gestionnaire de fichiers similaire à Windows, vous pouvez afficher, modifier et modifier les autorisations sur les fichiers et les répertoires de votre serveur
  * Vous pouvez configurer le serveur de protocole d'emplacement de service
  * Afficher, modifier et modifier les autorisations sur les fichiers et les répertoires de votre système avec un gestionnaire de fichiers de type Windows
  * Il aide à configurer des tunnels SSL pour crypter des services comme POP3 et IMAP, en utilisant Stunnel exécuté à partir d'INETD.

## Systèmes d'exploitation pris en charge {#Support}
Étant donné que différents systèmes d'exploitation de type UNIX et distributions Linux utilisent différents emplacements pour leurs différents fichiers de configuration, WebMin ne peut prendre en charge que les systèmes pour lesquels il a été configuré. Les systèmes d'exploitation suivants sont pris en charge par la version 1.979 de Webmin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Server Asianux
  * Bigblock
  * Bsdi
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera OpenLinux Eserver
  * Caos Linux
  * Cendio lbs Linux
  * Centos Linux
  * Hyperviseur Citrix
  * Cloudlinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Technologie cohérente Linux
  * CONECTIVA Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * Déc / Compaq OSF / 1
  * Linux Devian
  * Dragonfly BSD
  * Pare-feu endian Linux
  * Fedora Linux
  * FreeBSD
  * Linux générique
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * Hp / ux
  * Ibm Aix
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop / LX
  * Mac OS X
  * MacOS Catalina
  * macOS High Sierra
  * macOS Mojave
  * macOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * Surtoutlinux
  * MSC Linux
  * Neoshine Linux
  * NetBSD
  * OpenBSD
  * OpenDarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus Linux
  * pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Linux scientifique
  * OpenServer SCO
  * SCO Unixware
  * Secure Linux
  * SGI IRIX
  * Slackware Linux
  * SLAMD64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Système de bureau Sun Java
  * Sun Solaris
  * Suse Linux
  * SUSE OpenExchange Linux
  * SUSE SLES Linux
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * Desktop Thizlinux
  * Thizserver
  * Tinysofa Linux
  * Trutix
  * Trutix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Nain blanc linux
  * Whitebox Linux
  * Wind River Linux
  * Les fenêtres
  * X / OS Linux
  * Xandros Linux
  * Xcp-ng Linux
  * Xenserver Linux
  * Chien jaune Linux
  * Yoper Linux
Les systèmes les mieux soutenus en ce moment sont Solaris, Linux (RedHat en particulier) et FreeBSD.

## Installer Webmin sur Ubuntu {#install}
Pour installer Webmin, vous devrez avoir accès à un utilisateur avec des privilèges ** ROOT **. Il est recommandé de configurer un utilisateur non root avec ** sudo ** Access.
D'abord SSH dans votre serveur en utilisant la commande suivante
```
ssh user@server_IP_address
```
Pour installer WebMin via _APT-Get_, vous devez d'abord ajouter le référentiel Webmin à votre fichier _sources.list_. Sur votre serveur, ouvrez le fichier _sources.list_ dans votre éditeur de texte préféré. Nous utiliserons VIM dans ce tutoriel:
```
sudo vi /etc/apt/sources.list
```
Une fois le fichier ouvert, ajoutez les lignes suivantes à la fin du fichier.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Ajoutez maintenant la touche WebMin GPG à APT, afin que le référentiel source que vous avez ajouté sera fiable. Cette commande fera cela:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Avant d'installer Webmin, vous devez mettre à jour les listes de packages d'APT-Get:
```
sudo apt-get update
```
Maintenant, exécutez cette commande apt-get pour installer webmin:
```
sudo apt-get install webmin 
```
Entrez Y pour confirmer l'installation. Une fois l'installation terminée, le service Webmin démarrera automatiquement. Et l'interface Web s'exécutera sur le port 10000. Vous pouvez accéder à l'interface à l'aide de l'URL suivante.
```
https://server_IP_address:10000
```
Vous serez invité avec un avertissement indiquant que le certificat SSL de votre serveur n'est pas fiable. En effet, WebMin génère et installe automatiquement un certificat SSL après l'installation, et le certificat n'a pas été délivré par une autorité de certificat qui est fiable par votre ordinateur. C'est bien de continuer. Demandez à votre navigateur Web de faire confiance au certificat.
À ce stade, vous verrez l'écran de connexion Webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Installer Webmin">}}

Lorsque vous vous connectez pour la première fois à WebMin, vous serez emmené sur la page ** Informations système **. Il vous donne un aperçu des ressources de votre système et d'autres informations diverses.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Installez les informations du système Webmin">}}


## Installer Apache à l'aide de webmin {# install-apache}
Webmin est livré avec une grande variété de modules qui gèrent différents packages de logiciels. Pour installer Apache à l'aide de Webmin, suivez les instructions ci-dessous
** Étape 1 **: Dans le menu de navigation, cliquez sur ** Modules non utilisés ** Pour développer la catégorie, puis cliquez sur ** Apache Webserver **.
Si vous n'avez pas installé Apache sur votre serveur, le module vous informera et vous fournira un moyen d'installer Apache.
** Étape 2 **: Utilisez le lien ** Cliquez ici ** (dans la dernière phrase) pour installer Apache via APT-get via webmin.
Une fois l'installation Apache terminée, votre serveur exécutera le serveur Apache par défaut.

## Conclusion {#conclusion}
Cet article traite brièvement de nombreuses choses que Webmin peut faire, Webmin est l'un des meilleurs outils pour gérer vos serveurs Linux / Unix. Dans ce tutoriel, nous avons également appris à installer Webmin sur Ubuntu, nous avons également discuté de la façon d'installer Apache sur votre serveur à l'aide de Webmin.

## Explorer
  * [Comment installer plusieurs versions PHP avec Nginx sur Ubuntu] [7]
  * [Comment configurer et configurer Nginx comme proxy inverse] [8]
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
