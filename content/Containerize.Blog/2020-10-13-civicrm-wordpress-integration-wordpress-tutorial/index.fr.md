---
title: "Civicrm WordPress Intégration | Tutoriel WordPress" 
seoTitle: "Civicrm WordPress Intégration | Tutoriel WordPress" 
description: "L'intégration CiviCRM WordPress vous permet de contrôler la gestion des données et des workflows. Meilleur guide sur l'utilisation efficace de la civicrm open source avec WordPress." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "Dans ce tutoriel de plugin WordPress, nous apprendrons à intégrer CiviCRM gratuit à WordPress pour obtenir des avantages compétitifs en termes de gestion des contacts." 
url: /fr/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## Dans ce tutoriel de plugin WordPress, nous apprendrons à intégrer CiviCRM gratuit à WordPress pour obtenir des avantages compétitifs en termes de gestion des contacts.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="civicrm wordpress">}}


## Aperçu:
Bienvenue dans cet article de tutoriel qui concerne ** CiviCRM WordPress Integration **. Le fait est que nous vivons à l'ère de l'information et des données. Certaines choses donnent des fonctionnalités distinctives à votre entreprise telles que l'automatisation de la collecte de données, la communication cohérente, les campagnes de marketing et d'autres flux de travail commerciaux. À cette époque moderne, la quantité de données augmente de jour en jour. Les organisations reçoivent ces données de diverses sources de données. En conséquence, il devient difficile de gérer et de compiler une telle quantité de données. Cependant, il est très important de s'assurer que l'intégrité des données et l'authenticité sont à la base d'une campagne de marketing efficace. De plus, la survenue de données à plusieurs endroits donne naissance aux tracas et à la mauvaise gestion, et les équipes opérationnelles ont du mal à venir sur la même longueur d'onde et à travailler dans une direction unifiée.
D'un autre côté, il existe plusieurs systèmes de gestion de contenu qui ont gagné le puissant soutien des utilisateurs et des communautés de développeurs en raison de la gestion robuste de contenu et des systèmes d'écho conviviaux. Ces systèmes de gestion de contenu open source offrent des développements et des déploiements faciles et rapides pour atteindre des objectifs liés au contenu. Il offre une rentabilité, des fonctionnalités extensibles et des capacités d'auto-hébergement. Ce tutoriel de plugin ** WordPress ** concerne l'intégration de [CiviCrm] [2] avec [WordPress] [3] et nous couvrirons les puces suivantes
  * [Avantages de cette combinaison pour les affaires?] [4]
  * [Comment configurer une structure de répertoire?] [5]
  * [Comment activer et installer la civicrm dans wordpress?] [6]

## Avantages de cette combinaison pour les entreprises? {#avantages}
Dans la section de ce ** Tutorial WordPress **, nous examinerons les avantages principaux de ** CiviCrm WordPress ** Intégration. La popularité de [WordPress] [3] augmente à mesure que la concurrence augmente sur le marché. La communauté WordPress a développé de nouveaux plugins pour améliorer le seau du plugin. Par conséquent, l'ajout de CiviCRM dans le pool de WordPress du plugin a attiré une énorme attention des organisations qui prospèrent pour automatiser et centraliser leurs flux de travail commerciaux.
Cette intégration est importante en raison de certains aspects. Tout d'abord, [Civicrm] [2] supprime les tracas de la gestion des sources de contact de l'utilisateur résidant à différents endroits. Deuxièmement, il assure une sécurité complète en prenant des sauvegardes régulières de vos données. Troisièmement, il est basé sur le Web et open source qui signifie que vous pouvez accéder à vos données de n'importe où. Cet outil d'automatisation du marketing open source est développé pour le secteur civique. Il a supprimé la nécessité d'exporter des données vers diverses feuilles et bases de données en fournissant une solution à guichet unique. Ce logiciel CRM open source stocke toutes les données dans la base de données provenant de diverses sources telles que les newsletters, les sites de gestion d'événements, la gestion des contributions, la gestion des cas, etc. Ensembles de données personnalisés illimités, gestion des tâches, gestion des utilisateurs, suivi des engagements et des abonnements ouverts, et bien d'autres.

## Comment configurer une structure de répertoire? {#annuaire}
Avant de démarrer ce tutoriel du plugin ** WordPress **, nous supposons que vous avez configuré WordPress et que vous avez une compréhension de base pour installer et activer les plugins. De plus, vous pouvez trouver des informations [ici] [7] sur la configuration de WordPress et ses fonctionnalités.
Tout d'abord, téléchargez la civicrm à partir de ce [site] [8]. Choisissez une option nommée comme «Télécharger Civicrmx.x.x pour WordPress».
Après téléchargement, placez le fichier zip dans cet emplacement / contenu WP / Plugins et extraire. Assurez-vous que ce répertoire a un accès «écrire».
Vous pouvez utiliser cette commande pour donner l'autorisation d'accès «écriture». `sudo chmod 777 server_path / wp-content / plugins / civicrm`
Deuxièmement, créez un dossier vide nommé «CiviCrm» dans cet emplacement / contenu WP / Téléchargements et donnez un accès «écrire» à l'aide de la commande suivante.
`sudo chmod 777 server_path / wp-content / uploads / civicrm`
** Remarque **: N'oubliez pas de changer ces répertoires par défaut. Vous pouvez exécuter les commandes suivantes pour restaurer l'état par défaut de ces répertoires:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r username server_path / wp-content / uploads / civicrmsudo chown -r username server_path / wp-content / plugins / civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
Cette section de l'intégration CiviCRM WordPress est terminée. Passons à la section suivante.

## Comment activer et installer le CiviCRM dans WordPress? {#installer}
Cette section du didacticiel WordPress montre les étapes d'installation et d'activation de l'outil de marketing basé sur le Web ** CiviCRM. Après avoir configuré la structure du répertoire, accédez aux ** plugins ** -> ** Plugins installés ** et vous verrez le CiviCrm dans la liste.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="civicrm wordpress">}}

Frapper «** activer **».

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Guide d'automatisation du marketing">}}

Après avoir activé la CiviCRM, vous trouverez l'option CiviCRM en haut à droite de la page WP-Admin. Appuyez simplement sur cette option et vous atterrirez sur l'écran ** Installation **.
La page suivante sera affichée avec les détails des exigences ainsi que les configurations de base de données.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Guide d'automatisation du marketing">}}

Appuyez sur le bouton «Vérifiez les exigences et installez CiviCRM». CiviCRM sera installé avec succès et un message de réussite apparaîtra si les instructions ci-dessus ont été suivies correctement.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Civicrm WordPress Intégration">}}

Enfin, l'onglet Menu ** CiviCRM WordPress ** apparaîtra en haut du tableau de bord d'administration.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="Tutoriel de développement du plugin WordPress">}}


## Conclusion
L'intégration WordPress ** CiviCRM ** est un complément vraiment utile lorsqu'il s'agit de gérer un énorme stockage d'informations utilisateur dispersées. Il facilite les workflows complexes en offrant un tableau de bord intuitif. Le duo de ces deux logiciels open source fournit une interface conviviale avec d'autres utilitaires où les utilisateurs peuvent naviguer facilement. Heureusement, la communauté open source a développé de nombreux outils d'automatisation du marketing tels que [Mautic] [9], [SaceCrm] [10], [ESPOCRM] [11], et plus encore. Toutes ces solutions sont gratuites et faciles à déployer sur le cloud ou sur localhost. Surtout, ces solutions sont livrées avec une documentation complète concernant le développement et le déploiement. Cependant, ce tutoriel du plugin ** WordPress ** sera très utile si vous cherchez à intégrer le logiciel d'automatisation du marketing avec votre logiciel de gestion de contenu.
Enfin, [contenerize.com] [12] est en cours d'écriture de tutoriels supplémentaires sur l'intégration de certains autres logiciels open source. Pour les mises à jour régulières, restez en contact avec [les catégories de [l'automatisation du marketing] [1] et [blogging] [13].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Un guide des débutants sur l'intégration WordPress du forum Vanilla] [14]
  * [Comment docker WordPress avec Docker Compose] [15]
  * [Migration de WordPress vers Jekyll] [16]
  * [Comment construire votre site Web avec WordPress et Gatsby] [17]
  * [Un guide des débutants pour migrer vers Ghost à partir de WordPress] [18]
  * [Comment mettre en œuvre la multi-tension dans Mautic] [19]
  * [Comment configurer Mautic - Intégration Facebook] [20]
  * [Configuration des campagnes Mautic à l'aide de Campaign Builder] [21]
  * [Drupal Mautic Integration pour automatiser le nourrisson de plomb] [22]
  * [WordPress Messagerie instantanée à l'aide de Rocket.Chat] [23]
  * [Comment intégrer le forum du discours avec WordPress] [24]
  * [Automatiser le système de billetterie à l'aide de WordPress et OSTICKET] [25]
  * [Automatisation du marketing avec l'intégration Mautic et WooCommerce] [26]
  * [Top 5 de la plate-forme de blogging open source en 2020] [27]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source] [28]
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
