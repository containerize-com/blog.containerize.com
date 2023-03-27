---
title: "Personnalisation de l'Osticket - Implémentez la multi-location en osticket" 
seoTitle: "Personnalisation de l'Osticket - Implémentez la multi-location en osticket" 
description: "La mise en œuvre de la multi-location dans OSTICKET peut réduire les coûts et l'utilisation des ressources. Dans cet article, nous ferons une personnalisation de l'osticket pour atteindre la multi-location." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "HELPDESK OSTICKET multi-locataire vous permet de créer plusieurs locataires à partir d'une seule installation. Cela fait une utilisation optimale des ressources du serveur Web." 
url: /fr/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## OSTICKET HELPDESK MULTI-TENANT vous permet de créer plusieurs locataires à partir d'une seule installation. Cela fait une utilisation optimale des ressources du serveur Web.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Personnalisation de l'Osticket - Implémentez la multi-tenue en osticket">}}

Dans cet article, nous discuterons de la façon de faire de la personnalisation de l'Osticket pour implémenter la multi-location. Ce message couvrira les sujets suivants:
  * [Présentation de l'osticket][1]
  * [Présentation multi-tension][2]
  * [Avantages de la multi-tension][3]
  * [Implémentation][3]
  * [Conclusion][4]

## Aperçu de l'osticket: {#osticket}

[OSTICKET][5] est un logiciel d'assistance basé sur le support client en ligne open source. Il fournit un panneau de configuration intuitif et un composant de rapport en temps réel. Il a un module de gestion de demandes faciles à utiliser. Cela vous permet de créer des demandes à partir de vos formulaires de téléphone, de courrier électronique et Web. Qui offre de nombreuses options pour aider à adapter toutes les parties de l'expérience du support client comme les commentaires et les notifications par e-mail.

## Présentation multi-tension: {#multitenancy}

La multi-location fait référence à la mise en œuvre, où plusieurs instances indépendantes d'une application fonctionnent dans un environnement partagé. Les instances (locataires) sont logiquement isolées, mais physiquement intégrées. Une organisation peut éventuellement avoir plusieurs départements. Ainsi, ils peuvent créer plusieurs locataires / instances de la même application. Par exemple, dans notre cas, un système d'assistance peut être configuré pour différents domaines de la même organisation. Il pourrait y avoir des centaines de locataires, mais ils utiliseront tous les mêmes fichiers et donc le même stockage. Cela réduira les coûts de stockage et facilitera les mises à niveau. Les développeurs n'ont qu'à mettre à jour les fichiers à partir d'un seul endroit au lieu de modifier séparément chaque site.

## Quels sont les avantages de la multi-location? {#benefits}

Voici quelques avantages cruciaux de la multi-tension
  *  **Optimisation des ressources:**   Une machine réservée à un locataire n'est pas efficace. Parce qu'un locataire est peu susceptible d'utiliser toute la puissance de calcul de la machine. Les machines de partage maximiseront la disponibilité des ressources.
  *  **Coûts inférieurs:**   Avec plusieurs locataires partageant les mêmes ressources coûteront beaucoup plus bas que si chaque locataire avait besoin de sa propre infrastructure dédiée.
  *  **Hébergement efficace:**   Osticket multi-locataire réduira au minimum les coûts d'hébergement dans un environnement partagé.
  *  **Sécurité:**   Avec moins d'interaction avec le monde extérieur, l'exposition aux logiciels malveillants est réduite.
  *  **Mise à niveau facile**  : Mettre à niveau les fichiers uniquement en un seul endroit au lieu de les mettre à jour séparément. Cela permettra d'économiser beaucoup de temps et d'efforts.

## Implémentation de l'osticket multi-locataire: {#implementation}

  * Créez un nouveau nom de base de données vide comme «main_db».
  * Ensuite, créez une table nommée «locataire» qui tiendra des détails sur tous les locataires.
  * Il aura des champs suivants:
  1. Site_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Personnalisation de l'Osticket - Implémentez la multi-tenue en osticket">}}

  * Site \ _Name Field tiendra le nom du locataire. Le champ URL contiendra l'URL complète du locataire. DB \ _name Field tiendra le nom de la base de données qui sera créé pour le nouveau locataire.
  * Après ce fichier ouvert /include/ost-config.php et ajoutez le code suivant
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Ce code mettra à jour la connectivité de la base de données par défaut. Il obtiendra d'abord l'URL du locataire actuel. Ensuite, il obtiendra le nom de la base de données selon cette URL. C’est ainsi que l’application saura à quelle base de données à se connecter. Chaque locataire aura une base de données distincte. La base de données sera sélectionnée sur la base de l'URL du locataire.
  * Pour créer un nouveau locataire, configurez simplement le nouveau domaine du locataire sur le serveur Nginx. Après cela, copiez simplement la base de données OSTICKET actuelle et renommez-la. Enfin, ajoutez l'entrée dans le tableau «locataire» de la base de données «Main_DB».

## Conclusion: {#conclusion}

OSTICKET est un logiciel gratuit et open source de gestion des services d'assistance. Nous avons appris comment faire en sorte que les personnalisations de l'Osticket mettent en œuvre la multi-location en Osticket peuvent réduire les coûts, optimiser l'application et réduire les exigences en matière de ressources. Cela facilitera la vie pour les développeurs de créer de nouveaux locataires en quelques étapes simples. Créez donc plusieurs locataires OSTICKET à partir de la même installation.

## Explorer:
Veuillez vérifier la page suivante pour en savoir plus sur OSTICKET:
  * [OSTICKET - Un logiciel gratuit d'assistance open source][5]
  * [Un guide du débutant pour développer un plugin OSTICKET][6]
  * [Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket][7]
  * [Automatiser le système de billetterie à l'aide de WordPress et OSTICKET][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
