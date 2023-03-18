---
title: "Un guide pour migrer de WordPress vers Ghost | Fantôme WordPress" 
seoTitle: "Un guide pour migrer de WordPress vers Ghost | Fantôme WordPress" 
description: "Ce tutoriel concerne la façon de migrer de WordPress vers Ghost. Nous apprendrons à migrer vos messages et pages vers le fantôme à partir du site Web WordPress existant." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost et WordPress sont deux principales plateformes de publication de contenu open source. Dans ce tutoriel, nous apprendrons à migrer le contenu de WordPress vers Ghost." 
url: /fr/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost et WordPress sont deux principales plateformes de publication de contenu open source. Dans ce tutoriel, nous apprendrons à migrer le contenu de WordPress vers Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migrer de WordPress vers Ghost">}}


## Aperçu
Dans le passé, nous avons publié de nombreux articles sur des sujets tels que [Boost Your Leads avec l'intégration gratuite CivicRM WordPress] [1], [Comment intégrer le forum du discours avec WordPress] [2], et bien d'autres. Ghost est une plate-forme de blogging open source émergente. Il s'agit d'un CMS Node.js pour la publication de contenu et est livré avec une interface simple et propre qui le rend facile à utiliser. C'est une merveilleuse plate-forme pour les débutants car il se concentre sur Markdown au lieu de l'édition Wysiwyg. La puissance et la vitesse de Node.js rendent les fantômes très rapidement. En raison de la simplicité de la plate-forme, de nombreux utilisateurs passent à partir d'autres plates-formes. Étant donné que WordPress est la plate-forme numéro un pour la gestion de contenu.
Par conséquent, plus d'utilisateurs ** migrent de WordPress vers Ghost **. Il y a beaucoup de contenu qui comprend des fichiers multimédias, des commentaires, des publications, etc. Il existe des plugins disponibles qui vous aident à migrer du contenu de WordPress vers Ghost. Le principal avantage de l'adoption des fantômes est qu'il se concentre sur l'optimisation des moteurs de recherche. Dans ce tutoriel Ghost WordPress, nous passerons par toutes les étapes de migration à l'aide du plugin d'exportation WordPress officiel.
  * ** [Une intro de Briedf de WordPress] [3] **
  * ** [Qu'est-ce que Ghost?] [4] **
  * ** [exigences] [5] **
  * ** [Exporter le contenu de WrodPress à l'aide du plugin] [6] **
  * ** [Importez le contenu dans Ghost] [7] **
  * ** [Conclusion] [8] **

## ** Une intro de Briedf de WordPress ** {#wp}
[WordPress] [9] est une principale plate-forme de blogs open source qui a alimenté un grand nombre de sites Web. Ce logiciel de blogging gratuit est auto-hébergé, multilingue et prend en charge de nombreuses langues. De plus, la communauté de développement de WordPress est très dynamique et a développé un gigantesque bassin de plugins utiles qui sont facilement disponibles. Ces plugins abordent presque tous les cas d'utilisation de votre site Web d'entreprise. De plus, il est écrit en PHP et est livré avec une documentation complète concernant le développement et le déploiement. Tout le code source est disponible sur GitHub. De plus, cette plate-forme de blogging est très extensible, configurable et fournit des intégrations avec des applications tierces. Il y a un tableau de bord très logique et facile à comprendre où les utilisateurs peuvent faire glisser et déposer des éléments pour modifier l'apparence de leurs sites Web.

## ** Qu'est-ce que Ghost? ** {#Ghost}
[Ghost] [10] est une autre plate-forme de blogs open source populaire. Il s'agit de l'une des plateformes de publication de contenu les plus utilisées qui sont fortement adoptées par les développeurs et les propriétaires de sites. De plus, Ghost est très adapté à SEO et est livré avec des thèmes, des formulaires, des newsletters et des abonnements intégrés. Ce logiciel de blogging gratuit est écrit en JavaScript et toute la documentation est disponible concernant le développement et le déploiement.

## exigences {#Requirements}
Dans la section du tutoriel Ghost WordPress, nous verrons les exigences nécessaires pour migrer de WordPress vers Ghost. Avec le plugin d'exportation officiel WordPress, vous pouvez facilement migrer votre contenu de WordPress vers Ghost. Dans ce tutoriel, nous vous guiderons sur la façon d'exporter votre contenu de WordPress vers un site fantôme. Ainsi, vous devez avoir une installation de travail de WordPress et WordPress ** Plugin d'exportation ** installé.

## Exportation Contenu de WordPress {#Export}
Tout d'abord, vous devrez installer le plugin. Suivez les étapes suivantes pour installer le plugin
  * Cliquez sur ** Plugins ** dans le menu de la barre latérale
  * Cliquez sur ** Ajouter un nouveau ** et utilisez le champ de recherche dans le coin supérieur droit pour rechercher ** Ghost Export **
  * ** Installer ** et ** Activer ** Le plugin par «** Ghost Foundation **»

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Installer et activer le plugin fantôme pour WordPress">}}

  * Une fois le plugin activé, naviguez vers ** Outils ** du menu latéral
  * Cliquez sur ** Exporter vers Ghost ** avec le menu de la barre latérale.
  * Vous recevrez un guide sur la façon de préparer votre contenu WordPress pour Ghost.
  * Depuis, Ghost utilise des balises au lieu des catégories, donc le plugin vous aidera à convertir les catégories en balises.
{{_LINE_37_}}
{{_LINE_38_}}
    Les étapes suivantes modifieront en permanence la structure de contenu de votre site WordPress. Si vous n'êtes pas sûr de faire ce changement, veuillez utiliser l'outil d'exportation WordPress standard sous Outils> Exporter pour créer une sauvegarde complète de tous vos contenus.
{{_LINE_40_}}
{{_LINE_41_}}
  * Accédez à ** Import ** dans le menu de la barre latérale
  * Cliquez sur ** Exécuter l'importateur ** sous le ** Convertisseur de taxonomie ** Import Item.
  * Utilisez les cases à cocher pour sélectionner les catégories que vous souhaitez importer dans vos balises et donc dans votre site fantôme.
  * Puis cliquez sur ** Convertir les catégories en balises **.
  * Revenez à ** Exporter vers Ghost ** dans ** Outils ** dans le menu de la barre latérale.
  * Cliquez sur le bouton ** Télécharger le fichier fantôme **. Vous aurez téléchargé un fichier zip contenant tout votre contenu.

## Importer des contenus dans Ghost {#import}
Dans cette section du tutoriel WordPress Ghost, nous implémenterons les étapes pour importer le contenu dans Ghost.
  * Connectez-vous à Ghost Admin et accédez à ** Labs ** View.
  * Cliquez sur le bouton ** Choisissez Fichier ** dans l'option ** Importer le contenu ** et sélectionnez votre fichier zip exporté
  * Cliquez sur ** Importer **. Tout votre contenu sera ensuite importé dans votre site fantôme.
Pour le moment, Ghost n'a pas de système de commentaires intégré. L'alternative la plus populaire est Disqus.

## Conclusion {#conclusion}
Cela nous amène à la fin de ce billet de blog. Dans ce tutoriel Ghost WordPress, nous avons appris à préparer votre contenu WordPress prêt pour la migration vers Ghost. Nous avons utilisé le plugin officiel de la migration Ghost par la Ghost Foundation pour effectuer des migrations. De plus, ce billet de blog vous aidera sûrement si vous cherchez à migrer de WordPress vers Ghost car nous avons couvert toutes les étapes nécessaires. De plus, il existe de nombreuses plateformes de publication de contenu open source et articles de tutoriels mentionnés dans la section «Explorer» ci-dessous. Cependant, ces deux plates-formes de blogs open source sont les principaux logiciels qui offrent des fonctionnalités de niveau d'entreprise pour répondre aux besoins de vos sites Web d'entreprise.
Enfin, [contenerize.com] [11] a écrit de nouveaux articles de blog sur d'autres logiciels open source. Par conséquent, veuillez rester connecté avec [cette] plateforme [12] pour les mises à jour régulières.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [WordPress] [9]
  * [Jekyll] [13]
  * [Discours] [14]
  * [Fantôme] [10]
  * [Comment docker WordPress avec Docker Compose] [15]
  * [Comment activer la compression GZIP dans WordPress pour un meilleur PagSpeed ​​et SEO] [16]
  * [Boostez vos prospects avec l'intégration WordPress CiviCRM gratuite] [1]
  * [Automatiser le système de billetterie à l'aide de WordPress et d'Osticket] [17]
  * [Comment intégrer le forum du discours avec WordPress] [2]
  * [Augmenter le trafic de recherche de site Web en suivant les 7 meilleurs blogs de référencement] [18]
  * [Comment construire votre site Web avec WordPress et Gatsby] [19]
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
