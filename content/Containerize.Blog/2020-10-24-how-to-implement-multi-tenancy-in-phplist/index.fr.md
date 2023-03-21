---
title: "Comment configurer l'application multi-locataire dans phplist" 
seoTitle: "Comment configurer l'application multi-locataire dans phplist" 
description: "PHPLIST est un logiciel de newsletter gratuit et open source. Configurez l'application multi-locataire et exécutez plusieurs instances d'une application dans un environnement partagé." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutoriel pour développer une application multi-locataire dans PHPLIST. La fonctionnalité multi-locataire utilise une seule installation pour plusieurs hôtes pour réduire les coûts d'hébergement." 
url: /fr/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Tutoriel pour développer une application multi-locataire dans PHPLIST. La fonctionnalité multi-locataire utilise une seule installation pour plusieurs hôtes pour réduire les coûts d'hébergement.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Application multi-locataire phplist">}}

Dans cet article, nous couvrirons **ce qui est multi-tension  **et comment nous pouvons configurer **  Application multi-locataire**  dans PHPLIST.

## Qu'est-ce que Phplist?
Lors de la décision de la stratégie marketing, le marketing par e-mail est un élément clé de chaque entreprise numérique en ligne. Phplist permet aux entreprises d'atteindre un large public. PHPLIST est largement utilisé **Open Source Newsletter Software**  pour gérer les listes et envoyer des newsletters. Il aide les entreprises à créer, planifier, envoyer et analyser les campagnes de newsletter. PHPLIST prend en charge des fonctionnalités telles que l'analyse, la segmentation, le traitement du rebond, les plugins, les API et bien d'autres.

## Qu'est-ce que la multi-tenue?
La multi-location est une architecture dans laquelle de nombreux clients / sites sont représentés par une seule instance d'une application logicielle. Dans la multi-location, le site est considéré comme un locataire. Chaque locataire a des fonctionnalités spécifiques telles que la configuration, les thèmes, SMTP.
Un aspect majeur du cloud computing est la multi-location. L'architecture **multi-locataires**  aide les entreprises à réaliser un meilleur retour sur investissement en diminuant les coûts de maintenance et les mises à jour rapides des locataires. De plus, les applications conçues sur l'architecture des multi-locataires peuvent être facilement évolutives.
Nous pouvons implémenter la multi-location en utilisant les approches suivantes.
  * Base de données partagée pour tous les locataires.
  * Base de données séparée pour chaque locataire.
Nous utiliserons une base de données distincte pour chaque approche de locataire pour implémenter la multi-location dans PHPLIST.
  * [Gérer le flux de demande][1]
  * [Configuration de la base de données pour le locataire][2]
  * [Configurer nginx pour le locataire][3]

## Gire Demande Flow   {#Request}
  * Prenez une sauvegarde de votre fichier config.php et vous pouvez le trouver sous le répertoire de configuration.
  * Créez un nouveau fichier config.php et ajoutez le code suivant pour gérer les sites / locataires.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Remplacez l'exemple.com par votre nom de domaine. Vous devez également créer un fichier de configuration pour chaque locataire. Copiez le fichier de sauvegarde de config.php et enregistrez-le avec un nouveau nom comme config.example.com.php.

## Configuration de la base de données pour le locataire   {#database}
  * Prenez une sauvegarde de la base de données PHPLIST existante. Utilisez-le pour créer une base de données pour le nouveau locataire.
  * Ouvrir le fichier config.example.com.php. Modifiez les informations d'identification de la base de données et tout autre paramètre selon votre environnement.

## Configure Nginx pour le locataire   {#nginx}
  * Accédez au répertoire Nginx **CD / etc / nginx / sites-disponible** .
  * Copiez le fichier config.php par défaut et enregistrez-le avec le nom de votre site comme Example.com.
  * Open Exemple.com Configuration avec **sudo nano example.com** .
  * Modifiez le chemin racine, le server_name et tout autre paramètre.
  * Tester les configurations avec **sudo nginx -t** 
  * Enfin, créez un lien symbolique en exécutant **sudo ln -s /etc/nginx/sites-available/example.com / etc / nginx / sites-complow /** 
  * Redémarrez le serveur Web Nginx en exécutant **sudo systemctl redémarrer nginx** , afin qu'il puisse charger le fichier de configuration nouvellement créé.

## Conclusion
Les logiciels multi-tenues présentent certains avantages par rapport aux applications à tension unique telles que réduire les coûts de maintenance, une utilisation efficace des ressources et des mises à jour faciles à installer. Si vous allez créer un logiciel SaaS (logiciel en tant que service), vous pouvez suivre l'architecture multi-tension et profiter de sa véritable puissance.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [PHPLIST - Newsletter open source et logiciel de marketing par e-mail][4]
  * [Comment créer et envoyer une newsletter à l'aide de phplist][5]
  * [Comment configurer et traiter les rebonds dans phplist][6]
  * [Guide des débutants pour développer un plugin phplist][7]
  * [Configuration des règles avancées de gestion et de rebond de rebond dans PHPLIST][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
