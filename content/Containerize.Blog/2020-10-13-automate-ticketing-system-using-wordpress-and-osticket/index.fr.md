---
title: "Automatiser le système de billetterie à l'aide de WordPress et d'Osticket" 
seoTitle: "Automatiser le système de billetterie à l'aide de WordPress et d'Osticket" 
description: "L'intégration OSTICKET-WordPress offre aux clients un moyen de générer des billets de support à partir du site WordPress et de les gérer à partir du tableau de bord OSTICKET." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Automatisez le processus d'assistance avec une intégration WordPress et OSTICKET sans couture. Transformez les demandes des clients via des formulaires Web en billets de support." 
url: /fr/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Automatisez le processus d'assistance avec une intégration WordPress et OSTICKET sans couture. Transformez les demandes des clients via des formulaires Web en billets de support.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Intégration OSTICKET-WORDPRESS pour automatiser le système de billetterie">}}

Vos clients peuvent avoir des questions concernant vos produits / services. Ils enverront leurs requêtes via différentes formulaires sur votre site WordPress. L'intégration d'Osticket-WordPress aide à convertir ces requêtes en billets. Il envoie des données via l'API au système d'assistance OSTICKET.
OSTICKET est un système de billetterie d'assistance open-source et gratuit. Les clients peuvent créer des billets concernant leurs requêtes sur OSTICKET. Ce système d'assistance permet à toute organisation de gérer les requêtes provenant de ses clients. L'administrateur peut créer des départements et des équipes et attribuer des billets à différents agents en fonction de la nature des billets créés. Ce système libre open source suivra les problèmes. Il permet aux clients et aux agents de commenter le billet pour discuter des progrès. Nous couvrirons les sections suivantes dans cet article de blog:
  * [Processus d'intégration][1]
  * [Installation du plugin WordPress][2]
  * [Procédure d'authentification][3]
  * [Conclusion][4]

## Processus d'intégration:   {#Integration}
L'intégration OSTICKET et WordPress nécessite un formulaire de contact sur le site WordPress avec les champs suivants
  1. Aidez le sujet
  2. Email
  3. Nom complet
  4.
  5. Message
Le formulaire de contact doit envoyer des e-mails, car ce plugin accroche la fonction WP_Mail pour obtenir les données des formulaires.

## Installation du plugin wordpress:   {#wordpress}
  1. Accédez au tableau de bord Admin de votre site WordPress.
  2. Ensuite, allez à la section Plugins.
  3. Installez ensuite ce [plugin][5].
  4. Après cela, activez le plugin.
  5. et accédez à «Réglage» -> «Connecteur OSTICKET».
  6. Entrez ensuite l'URL de votre site OSTICKET, c'est-à-dire [http: //your.domain/api/tickets.json][6]
  7. Entrez la clé de l'API créée à partir du panneau d'administration OSTICKET (expliqué dans la section suivante).
  8. À la fin, remplissez tous les champs pour cartographier les données de votre formulaire de contact aux champs de billets d'Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Intégration OSTICKET-WORDPRESS pour automatiser le système de billetterie">}}


## Procédure d'authentification:   {#Auth}
L'authentification de l'API est effectuée via des touches API configurées dans le panneau d'administration d'Osticket. Les touches API sont générées et liées à une adresse IP source qui est vérifiée par rapport à l'IP source des demandes d'API HTTP. Pour créer une clé API
  1. Accédez au panneau d'administration d'Osticket.
  2. Cliquez sur «Gérer».
  3. Accédez au sous-menu «Clés API».
  4. Cliquez sur «Ajouter une nouvelle clé API».
  5. Définissez «Statut» sur Active.
  6. Vérifiez la case «peut créer un billet».
  7. Entrez l'adresse IP de votre site WordPress et appuyez sur «Ajouter une clé».

{{< figure align=center src="images/osticket-1024x729.png" alt="Intégration OSTICKET-WORDPRESS pour automatiser le système de billetterie">}}


## Conclusion:   {#conclusion}
L'intégration OSTICKET-WordPress automatisera le processus de billetterie. Par conséquent, cela facilitera la vie de l'équipe de soutien. Les demandes de renseignements sur le site Web WordPress se transformeront automatiquement en billets de support sur OSTICKET. Afin que l'équipe d'assistance puisse gérer toutes les requêtes des clients plus facilement et plus efficacement. Les agents d'assistance seront informés par des notifications par e-mail. Par conséquent, les agents peuvent résoudre les requêtes des clients à temps. La section des commentaires sur OSTICKET aide les clients et les agents de soutien à communiquer efficacement et en temps opportun. Il permet également aux managers de suivre plus facilement les progrès de chaque billet.

## Explorer:
Pour en savoir plus sur OSTICKET et WordPress, veuillez consulter ces pages:
  * [OSTICKET - Système de billetterie Open Source Helpdesk gratuit][7]
  * [WordPress - Open source gratuit et CMS et outil de blogging les plus utilisés][8]
  * [Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
