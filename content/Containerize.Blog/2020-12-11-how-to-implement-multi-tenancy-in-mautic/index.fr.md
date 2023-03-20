---
title: "Comment implémenter la multi-location en mautic" 
seoTitle: "Comment implémenter la multi-location en mautic" 
description: "Mautic est une solution d'automatisation du marketing open source. La mise en œuvre de la multi-location dans Mautic réduit les coûts, améliore l'efficacité et la sécurité." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Économisez les coûts et maximisez l'utilisation des ressources en mettant en œuvre une multi-location dans Mautic. La multi-location aide les personnalisations de code, les mises à jour des applications, l'amélioration de la productivité et la maintenance facile." 
url: /fr/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Économisez les coûts et maximiser l'utilisation des ressources en mettant en œuvre la multi-location dans Mautic. La multi-location aide les personnalisations de code, les mises à jour des applications, l'amélioration de la productivité et la maintenance facile.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Comment implémenter la multi-location en mautic">}}

Mautic est une solution d'automatisation marketing gratuite et open source qui vous donne un contrôle complet sur vos e-mails marketing, pages de destination, flux de travail et mesures pour vos activités de marketing. Nous couvrirons les sections suivantes dans ce tutoriel:
  * [Qu'est-ce que la multi-tenue][1]
  * [Qu'est-ce que Mautic][2]
  * [Implémentez la multi-tension dans Mautic][3]
  * [Conclusion][4]

## Qu'est-ce que la multi-tenue {# multi-tenue}
Dans l'architecture logicielle multi-locataires, une seule instance d'une application logicielle sert plusieurs locataires. Chaque données de locataire est isolée des autres locataires partageant la même instance d'application. Ces locataires sont logiquement isolés, mais physiquement intégrés. Cela garantit la sécurité des données et la confidentialité pour tous les locataires. La création de plusieurs locataires à partir d'une seule instance d'application nécessite beaucoup moins de mémoire. Les locataires partagent des ressources et diminuent les coûts de maintenance des logiciels, d'infrastructures et de opérations de centre de données. Les coûts ont tendance à être inférieurs à ceux d'une infrastructure unique.

## Qu'est-ce que Mautic {#moutic}
[Mautic][5] est un logiciel de marketing gratuit et open source. Automatiser les tâches de marketing répétitives telles que les campagnes de marketing, la génération de leads, la segmentation des contacts, etc. en utilisant Mautic. Il a des fonctionnalités surprenantes, notamment la génération de leads, la construction de campagnes, la segmentation des contacts, le constructeur de courriels, les tests A / B, le constructeur de pages, le nurturing en plomb et plus encore. Mautic prend également en charge l'intégration avec toutes les plateformes sociales populaires, par exemple Facebook, Twitter, LinkedIn. Toutes ces fonctionnalités incroyables vous aident à stimuler l'expérience client globale et à améliorer l'automatisation du marketing pour votre entreprise.

## Implémentez la multi-tension dans Mautic {#Implement}
  * Créez une nouvelle base de données vide nommée «main_db».
  * Ensuite, créez une table nommée «locataire» qui tiendra des détails sur tous les locataires.
  * Il aura 3 champs dont le site \ _name, URL et db \ _name comme illustré sur la figure

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Comment implémenter la multi-location en mautic">}}

  * Après cela, ouvrez le fichier Mautic / App / paths.php et ajoutez ce code:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Ceci sélectionnera le fichier de configuration correspondant sur la base du chemin d'accès à l'URL.
  * Copiez ensuite la base de données de l'installation Mautic actuelle et utilisez-les pour le nouveau locataire.
  * Après cela, créez une copie de Mautic / App / Config / Local.php et renommez-la sur [Site_name] .php.
  * Enfin, mettre à jour le nom de la base de données, l'hôte, le mot de passe et l'utilisateur en fonction de la nouvelle base de données.

## Conclusion {#conclusion}
Mautic est une solution d'automatisation marketing gratuite, riche et axée sur la qualité. Il vous permet de créer des campagnes de marketing, des segments, des formulaires, des rapports et bien plus encore. La mise en œuvre de plusieurs tenues dans Mautic réduit les coûts, améliore l'efficacité, l'évolutivité et la sécurité. Créez facilement des centaines de locataires à partir d'une seule installation.

## Explorer
Pour en savoir plus sur Mautic et Facebook, veuillez visiter:
  * [Mautic | Plateforme de technologie de marketing de contenu open source][5]
  * [Comment configurer des campagnes Mautic à l'aide de Campaign Builder][6]
  * [Drupal Mautic Integration pour automatiser le nourrisson de plomb][7]
  * [Automatisation du marketing avec l'intégration Mautic et WooCommerce][8]
  * [Intégrer Mautic & Joomla pour l'automatisation du marketing numérique][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
