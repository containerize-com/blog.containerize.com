---
title: "Comment activer la compression GZIP dans WordPress | Gzip wordpress" 
seoTitle: "Comment activer la compression GZIP dans WordPress | Gzip wordpress" 
description: "Voulez-vous activer la compression GZIP dans WordPress pour accélérer votre site Web? Dans cet article de blog, nous apprendrons à permettre la compression dans WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "La vitesse de la page et les temps de chargement sont les facteurs clés pour un meilleur classement dans les moteurs de recherche. La compression GZIP peut y arriver et fournir un avantage concurrentiel." 
url: /fr/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## La vitesse de la page et les temps de chargement sont les facteurs clés pour un meilleur classement dans les moteurs de recherche. La compression GZIP peut y arriver et fournir un avantage concurrentiel.

{{< figure align=center src="images/Asset-1.png" alt="Activer la compression GZIP">}}


## Aperçu
Comme Google et d'autres moteurs de recherche envisagent l'expérience utilisateur d'un site Web (UX) un facteur critique dans ses algorithmes de classement. Il est devenu plus important d'améliorer et d'optimiser votre site Web pour les meilleures notes. Parmi les facteurs les plus importants auxquels faire attention figurent, la vitesse de la page et les temps de chargement. Et, le moyen le plus rapide et le plus simple d'améliorer la vitesse et les performances du site est d'activer la compression GZIP sur votre site Web. Il y a une chance que votre hébergeur vous permette automatiquement la compression GZIP pour vous. Sinon, vous devez effectuer vous-même cette tâche cruciale.
Dans cet article, nous vous montrerons exactement comment activer facilement la compression GZIP dans WordPress. Commençons!
  * [** Qu'est-ce que la compression GZIP **?] [1]
  * [** Comment fonctionne la compression GZIP? **] [2]
  * ** [Comment vérifier si la compression GZIP est activée?] [3] **
  * ** [Activer la compression GZIP dans WordPress] [4] **
  * ** [Conclusion] [5] **

## Qu'est-ce que la compression GZIP? {#quoi}
GZIP est un format de fichier ** et une application logicielle ** utilisée pour la compression et la décompression des fichiers. Des serveurs Web ou d'autres logiciels utilisent la compression GZIP pour compresser les fichiers de données avant d'être envoyés aux navigateurs des utilisateurs. Cela réduit le temps de téléchargement des fichiers qui rend votre site Web plus rapidement. Tous les navigateurs modernes prennent en charge la compression GZIP.
Il est également important de noter que la compression GZIP doit être activée sur votre serveur Web avant de pouvoir activer la compression des fichiers et des dossiers. Peu de temps, nous verrons comment vérifier si votre serveur Web a activé GZIP.

## Comment fonctionne la compression GZIP? {#travailler}
GZIP, la méthode de compression la plus populaire, est utilisée par les serveurs Web et les navigateurs pour compresser et décompresser le contenu lorsqu'il est transmis sur Internet. Il est utilisé principalement sur le code et les fichiers texte, GZIP peut réduire la taille des fichiers JavaScript, CSS et HTML jusqu'à 90%. Par défaut, la compression GZIP ne compresse pas des images ou des vidéos. Pour cela, vous devrez optimiser les images pour le Web sur votre site WordPress. C'est pourquoi la plupart des outils de test de vitesse de site Web comme Google Pagespeed Insights recommandent fortement d'activer la compression GZIP.
Lorsqu'un serveur Web reçoit une demande de page Web, le serveur Web vérifie l'en-tête de la demande pour vérifier si le navigateur prend en charge GZIP. Si c'est le cas, le serveur génère le balisage de la page avant d'appliquer GZIP. GZIP convertit le balisage HTML en données compressées qui sont ensuite livrées à l'utilisateur final. Lorsque l'utilisateur final reçoit les données compressées, leur navigateur le décompte.

## ** Comment vérifier si la compression GZIP est activée? ** {#verify}
Votre hôte Web peut permettre la compression dans WordPress par défaut. Cependant, ce n'est pas toujours le cas. Vous pouvez déterminer si vous avez déjà activé la compression GZIP à l'aide de Chrome de Devtools.
Ouvrez votre site dans un navigateur Chrome, puis cliquez avec le bouton droit sur la page et sélectionnez ** Inspectez ** pour ** Ouvrez les outils du développeur **.
Ensuite, accédez à l'onglet ** Network ** et cliquez sur l'URL principale du site Web à partir de la section «Nom». Sélectionnez l'onglet ** En-têtes **, puis faites défiler vers le bas pour trouver les en-têtes de réponse ** ** Section:

{{< figure align=center src="images/gzip-determine.gif" alt="Vérifiez le codage du contenu">}}

Là, vous verrez si la compression GZIP est activée ou non.

## Activer la compression GZIP dans WordPress {#Enable}
Si vous avez déterminé que la compression GZIP ** WordPress n'est pas encore activée **, il existe plusieurs méthodes que vous pouvez utiliser pour le faire fonctionner. Le moyen le plus simple consiste à utiliser certains plugins WordPress comme [WP Rocket] [6], [WP Super Cache] [7], ou [Cache total W3] [8]. Cependant, vous pouvez le faire manuellement au niveau du serveur soit par le fichier .htaccess, soit en mettant à jour votre configuration nginx.

### en modifiant le fichier .htaccess
L'une des façons les plus courantes d'activer la compression WordPress GZIP est de modifier votre fichier _.htaccess_ **. Cependant, cela implique le risque de briser quelque chose. Il s'agit d'un fichier de serveur sensible, et une mauvaise décision pourrait causer beaucoup de problèmes.
Pour réduire le risque, assurez-vous de ** Enregistrer une copie du fichier d'origine ** avant d'apporter des modifications. Le fichier _.htaccess_ doit être dans le dossier ** root de votre site Web **. Après avoir ouvert _.htaccess_, ajoutez le code suivant ci-dessous les sections marquées par les balises `` # Begin WordPress` et `# End WordPress '
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
** Enregistrez le fichier ** et téléchargez-le sur le serveur de votre site. Lorsque vous avez terminé, vérifiez si le GZIP est activé à l'aide de Devtools de Chrome comme expliqué ci-dessus.

## Activer la compression GZIP dans Nginx
Pour ** activer la compression **, incluez la directive ** gzip ** avec le paramètre ON. ** gzip ** on; Par défaut, ** nginx ** ne compresse les réponses qu'avec le texte de type MIME / HTML. Pour compresser les réponses avec d'autres types de mime, incluez la directive GZIP_TYPES et répertoriez les types supplémentaires.
Vous pouvez activer la compression GZIP dans WordPress en ouvrant votre fichier _nginx.conf_ ** et en ajoutant le code suivant:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Conclusion {#conclusion}
C'est la fin de ce tutoriel GZIP WordPress. Il existe de nombreuses façons d'optimiser votre site Web pour la vitesse et les performances. Dans ce didacticiel GZIP WordPress, nous avons traversé la compression GZIP, l'importance de la compression GZIP et ses étapes d'installation. De plus, de nombreux liens pertinents sont mentionnés dans la section «Explorer» ci-dessous.
Enfin, [contenerize.com] [9] écrit des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec la catégorie [blogging] [10] pour les nouvelles et les mises à jour régulières.

## Explorer
  * [Matomo] [11]
  * [Plausible] [12]
  * [WordPress] [13]
  * [Jekyll] [14]
  * [Comment docker WordPress avec Docker Compose] [15]
  * [Comment les outils d'analyse commerciale gratuits aident votre entreprise] [16]
  * [Top 5 des outils de renseignement commercial open source de 2021] [17]
  * [Comment installer le plugin dans WordPress | Forum de vanille] [18]
  * [Boostez vos prospects avec l'intégration WordPress CiviCRM gratuite] [19]
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
