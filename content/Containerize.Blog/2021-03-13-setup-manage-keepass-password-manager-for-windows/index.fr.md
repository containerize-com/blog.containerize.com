---
title: "Configuration et gérer Keepass Password Manager pour Windows '" 
seoTitle: "Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows" 
description: "Keepass est un gestionnaire de mots de passe populaire, sécurisé, gratuit et open-source. Ce guide aidera les utilisateurs de Windows à configurer et à gérer les mots de passe à l'aide de Keepass." 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass est un gestionnaire de mots de passe populaire, sécurisé, gratuit et open-source. Ce guide aidera les utilisateurs de Windows à configurer et à gérer les mots de passe à l'aide de Keepass." 
url: /fr/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepass est un gestionnaire de mots de passe populaire, sécurisé, gratuit et open source. Ce guide aidera les utilisateurs de Windows à configurer et à gérer les mots de passe à l'aide de Keepass.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}


## Présentation {#Overview}
Se souvenir de toutes les différentes combinaisons de mots de passe pour différents sites Web et applications n'est pas une tâche facile, et bien que les écrire sur un morceau de papier puisse sembler une solution facile. Il n'y a pas beaucoup de sécurité dans cette méthode, car vous pouvez facilement le perdre ou il peut tomber entre les mains de la mauvaise personne. ** Keepass Password Manager ** Pour Windows est l'une des solutions à ces problèmes.
Les gestionnaires de mots de passe, d'autre part, facilitent les utilisateurs de stocker tous leurs mots de passe en un seul endroit et d'y accéder quand ils en ont besoin. Keepass est ** l'un des meilleurs gestionnaires de mot de passe open source ** là-bas, qui non seulement est gratuit, mais portable ainsi que vous pouvez stocker le fichier de mot de passe sur un USB ou le télécharger sur votre Dropbox, Google Drive ou autre Option de stockage cloud. Avec le cryptage de bout en bout, seul le propriétaire des mots de passe peut accéder au fichier de mot de passe avec la clé principale, qui garantit la sécurité. En tant que gestionnaire de mot de passe open source, Keepass permet à l'utilisateur de connaissances techniques d'inspecter également le code source par lui-même pour s'assurer qu'il n'y a pas de fonctionnalités de sécurité manquantes.
  * [Configuration Keepass sur Windows][1]
  * [Gérer les mots de passe à l'aide de Keepass][2]
  * [Conclusion][3]

## Configuration Keepass sur Windows {#SetUp}
** Télécharger et installer **
Avant d'installer le logiciel Keepass, assurez-vous d'utiliser Windows version 7, 8 ou 10 et disposez de la dernière version du gestionnaire de mot de passe Keepass. Vous pouvez télécharger l'installateur Windows en allant à et cliquez sur ** keepass 2.47 ** pour Windows.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

Une fois le téléchargement terminé, exécutez l'installateur et vous serez invité à activer ou à désactiver les vérifications automatiques pour les dernières mises à jour de Keepass Manager. Cela ne signifie pas qu'il téléchargera ou installera automatiquement les dernières versions sans autorisation. Le logiciel Open Source Keepass Server est licencié sous GNU GPL. Après l'installation, vous verrez maintenant une fenêtre vide comme suit:

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

** Créer une nouvelle base de données **
Maintenant, nous allons commencer à créer une base de données pour stocker vos mots de passe, voici les étapes. Cliquez sur ** Fichier **. Sélectionnez ** Nouveau ** à travers lequel une base de données sera créée. Vous verrez l'invite ci-dessous. Cliquez sur ** OK. **

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="Configuration et gérer Keepass Password Manager pour Windows Open New DB">}}

Ici, vous serez invité à enregistrer le fichier **. KDBX ** (qui aura tous vos mots de passe) sur votre ordinateur. Assurez-vous de l'enregistrer dans le même dossier où Keepass for Teams se trouve sur votre ordinateur.

## Gérer les mots de passe à l'aide de Keepass {#Manage}
** Créer un mot de passe maître **
Vous devrez maintenant créer une clé principale qui sera le mot de passe par lequel vous pourrez accéder au fichier .kdbx. Assurez-vous que le mot de passe contient une combinaison de majuscules, d'alphabets en minuscules, de caractères spéciaux, de chiffres, etc. La création d'une clé maître solide et inaccessible est très importante car elle déterminera la sécurité de votre base de données de mot de passe. Keepass Free Motword Manager fournira également un indicateur sur la force ou la faiblesse de votre clé principale.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

** Enregistrez vos mots de passe **
Après avoir créé une clé principale, la base de données s'ouvrira où vous pouvez commencer à enregistrer les mots de passe. Keepass fournit 2 entrées de mot de passe par défaut, vous pouvez les supprimer et commencer à ajouter la vôtre.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

Pour créer une nouvelle entrée, cliquez sur l'icône de la clé jaune pour générer une nouvelle entrée de mot de passe. Un nouvel écran s'ouvrira où vous devrez saisir votre mot de passe, le répéter, fournir l'URL pour laquelle ce mot de passe sera utilisé, nom d'utilisateur et plus encore. Lors de la saisie du mot de passe, il sera caché par des points et peut être révélé en cliquant sur l'icône ** trois points ** à droite.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

** Connexion en utilisant Keepass **
Pour se connecter avec les mots de passe enregistrés sur la base de données:
  * Faites un clic droit sur l'entrée du mot de passe et sélectionnez ** Copier le nom d'utilisateur ** Collez maintenant ce nom d'utilisateur dans le champ du site Web pour le nom d'utilisateur.
  * Maintenant, faites un clic droit sur la même entrée dans le gestionnaire de mot de passe Keepass, et sélectionnez ** Copiez le mot de passe ** et collez-le dans le site Web où se trouve le champ de mot de passe.
  * Veuillez noter que vous devez être rapide avec votre copie et votre collage, car le mot de passe est supprimé de votre presse-papiers par Keepass après 12 secondes. Cette contrainte de temps peut être modifiée via Keepass Password Safe Manager.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="Configuration et gérer le gestionnaire de mot de passe Keepass pour Windows">}}

** Autres options de gestion de mot de passe à considérer: **
Il existe des dizaines d'autres gestionnaires de mots de passe open source disponibles sur le marché. Vous pouvez protéger vos informations d'identification de comptes en utilisant des gestionnaires de mot de passe sécurisés, populaires, hébergés et open source pour stocker des mots de passe uniques et complexes. Ci-dessous, il y a quelques meilleurs gestionnaires de mots de passe:
  * [** Padloc **][4] est conçu comme un gestionnaire de mot de passe minimaliste simple et sécurisé et la gestion des données pour les familles et les équipes.
  * [** Passbolt **][5] est un gestionnaire de mot de passe d'auto-hébergé facile d'accès conçu pour les besoins des équipes Agile et DevOps.
  * [** Mot de passe Safe **][6] est un programme de gestion de mot de passe open-source avec une interface sécurisée, simple et facile à comprendre.
  * [** Bitwarden **][7] est une solution de gestion de mot de passe intégrée sécurisée, gratuite et gratuite.
  * [** PSONO **][8] est un gestionnaire d'identification et un mot de passe auto-hébergé pour les équipes. Il fournit un chiffrement multicouche pour une sécurité maximale.

## Conclusion {#conclusion}
Keepass est un moyen facile, sécurisé et portable de gérer vos mots de passe. Il vous permet de personnaliser vos mots de passe, de générer des combinaisons sécurisées et d'enregistrer plusieurs entrées de mot de passe pour différents sites Web avec le nom d'utilisateur. L'utilisation de Best Password Manager Keepass est également sécurisée car elle utilise un mécanisme de chiffrement de bout en bout et s'appuie sur la fonction de hachage SH-256 pour une sécurité maximale.
En outre, [** contenerize.com **][9] est en route pour améliorer la pile de produits open source dans plusieurs langues et cadres. Pour les mises à jour régulières, veuillez rester à l'écoute de ** [Gestion de mot de passe][10] ** Catégorie pour des articles plus intéressants.

## Explorer
Dans cet article, nous avons discuté de la façon de configurer et de gérer Keepass Password Manager pour Windows. Vous pouvez trouver des liens suivants pertinents:
  * ** [Top 5 des gestionnaires de mot de passe open source en 2021][11] **
  * ** [Meilleur logiciel de gestion de mot de passe open source][12] **
  * ** [Keepass | Secure, portable et open source Manager Manager][13] **

  
[1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
[2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
[3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
[4]: https://padloc.app/
[5]: https://products.containerize.com/password-management/passbolt/
[6]: https://products.containerize.com/password-management/password-safe/
[7]: https://products.containerize.com/password-management/bitwarden/
[8]: https://products.containerize.com/password-management/psono/
[9]: https://www.containerize.com/
[10]: https://blog.containerize.com/category/password-management/
[11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
[12]: https://products.containerize.com/password-management/
[13]: https://products.containerize.com/password-management/keepass
