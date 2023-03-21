---
title: "Qu'est-ce que l'administrateur? | Outil de gestion de la base de données open source" 
seoTitle: "Qu'est-ce que l'administrateur? | Outil de gestion de la base de données open source" 
description: "Qu'est-ce que l'administrateur? Un système de gestion de base de données basé sur le Web avec une interface adaptée aux développeurs. Discutons de la façon de gérer les bases de données avec un administrateur open source." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "L'administrateur est un système de gestion de base de données sur le Web open source pour gérer les bases de données. Apprenons comment configurer l'administrateur sur LocalHost et examiner ses principales fonctionnalités." 
url: /fr/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## L'administration est un système de gestion de bases de données basé sur le Web open source pour gérer les bases de données. Apprenons comment configurer l'administrateur sur LocalHost et examiner ses principales fonctionnalités.
{{_LINE_11_}}

## Aperçu
Les tâches liées aux données sont beaucoup plus critiques que jamais. L'outil de gestion de la base de données est devenu une partie intégrante de toute entreprise. Cependant, il existe de nombreux systèmes de gestion de base de données basés sur le Web qui offrent des solutions à des tâches aussi difficiles. Les entreprises génèrent quotidiennement des tonnes de données et deviennent difficiles à maintenir. De plus, les organisations ont tendance à simplifier l'accès aux données et le contrôle des données. Ces outils gratuits aident à réduire la redondance des données, à rendre les bases de données efficaces et fiables. De plus, nous avons publié des articles de blog sur des sujets tels que [les meilleurs outils logiciels Open Source DBMS][1], et quelques autres.
Par conséquent, la communauté open source a développé un administrateur qui est un outil de gestion de la base de données gratuit au niveau de l'entreprise. Dans ce tutoriel d'administration, nous couvrirons les points suivants.
  * [Qu'est-ce que l'administrateur?][2]
  * [Caractéristiques importantes de l'administrateur][3]
  * [Administrer vs phpmyadmin][4]
  * [Gérer les bases de données avec l'administration][5]
  * [Conclusion][6]

## Qu'est-ce que l'administrateur?   {#quoi}
En ce qui concerne l'outil de gestion de la base de données MySQL léger, convivial et très performant, l'administrateur a gagné en popularité et apporte de nombreuses améliorations par rapport à la phpmyadmin. Initialement, cet outil de gestion de la base de données a été développé par Jakub Vrana en 2007 en tant qu'alternative à PhpMyAdmin, afin que tout ce que vous avez à faire soit de télécharger et d'installer un fichier PHP léger et léger dans la base de données de votre application.
En tant qu'outil de gestion de la base de données open source, il est également gratuit et est écrit en PHP. Ce qui distingue ce système de gestion de base de données basé sur le Web, c'est une bonne conception d'interface utilisateur pour une expérience utilisateur transparente, ainsi que de solides fonctionnalités de sécurité pour protéger les données de toute attaque ou tentative de piratage malveillant. Cet outil de gestion de la base de données est facile à configurer et nécessite des exigences simples telles que Ubuntu et Lamp. Les utilisateurs peuvent trouver une documentation complète concernant le développement et le déploiement. Par conséquent, vous pouvez trouver des fichiers source de ce système de gestion de base de données basé sur le Web sur [GitHub][7].

## Caractéristiques importantes de l'administrateur   {#Important}
Certaines fonctionnalités de base mais importantes de cet outil de gestion de la base de données comprennent:
  * Il dispose de nombreuses fonctions de base de données, notamment la base de données de la base de données, la modification des tables, l'insertion / modifier les données dans les tableaux et le tri / recherche de données dans plusieurs colonnes
  * Prend en charge plusieurs bases de données, y compris: MySQL, PostgreSQL, SQLite, MS SQL, Oracle et Bases de données SimpledB et plus encore
  * Il est disponible en 43 langues, y compris l'anglais, l'arabe, le persan, le polonais, le néerlandais, etc.
  * Vous pouvez facilement modifier des objets de base de données tels que des vues, des déclencheurs, des procédures stockées, des autorisations utilisateur et plus encore.
  * L'administration fournit également des mesures de sécurité contre l'injection SQL, le vol de session, les attaques logicielles de script de site transversal (XSS) et d'autres attaques.

## Administrer vs phpmyadmin   {#admin}
Ainsi, lorsque nous parlons de ce qui est l'administrateur, il serait intéressant de connaître la comparaison entre l'administrateur vs phpmyadmin. Lorsqu'il s'agit de choisir entre l'administrateur et PhpMyAdmin, l'administrateur est en haut pour les fonctionnalités flexibles et le téléchargement de fichiers léger qu'il fournit. De même, par rapport à PhpMyAdmin, il prend en charge plusieurs bases de données, notamment MySQL, SQLite et bien d'autres. De même, il est plus intuitif et plus intelligent que le phpmyadmin lorsqu'il s'agit d'ajouter des champs supplémentaires que l'administration fait automatiquement ou de manipulation avec tous les index en même temps.

## Gérer les bases de données avec l'administrateur   {#Manage}
Dans la section de ce didacticiel d'administration, nous allons passer par la façon dont nous pouvons gérer les bases de données avec l'administrateur.
**Configuration requise**
Pour que l'administrateur s'exécute sur votre système, il est important que vous ayez déjà des exigences suivantes sur votre serveur:
  * PHP version 5, 7 ou 8
  * Un pilote de base de données comme MySQL, SQLite, PostgreSQL, etc.
**Installation**
Si vous avez vérifié ces deux exigences système, téléchargez simplement le fichier depuis [][8] et commencez par télécharger le fichier PHP sur votre serveur. Pour le serveur XAMPP, renommez le fichier téléchargé en tant que «Administror.php» et placez ce fichier dans le dossier HTDOCS.
**Accédez à l'interface utilisateur** 
Après avoir traversé cela, qu'est-ce que l'administrateur? Accédez maintenant à cette application à partir de http: your-ip-address / adminer.php comme indiqué:
{{_LINE_42_}}
**Connecter au serveur**
Connectez-vous à cet outil de gestion de base de données gratuit à l'aide du nom d'utilisateur et du mot de passe de votre serveur. Maintenant, si vous souhaitez accéder à une seule base de données, entrez son nom. Vous pouvez laisser ce champ vide pour accéder à toutes les bases de données qui existent déjà sur le serveur.
**Gérer les bases de données** 
Après la connexion, vous verrez une liste de toutes vos bases de données actuelles. Cliquez sur n'importe quelle base de données pour le gérer.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Gérer les bases de données avec l'outil de gestion des bases de données de l'administration">}}

Sur l'écran suivant, vous verrez la liste de toutes les tableaux de bases de données sélectionnées. De là, vous pouvez exporter la base de données ou ses tables, ajouter ou modifier la table / les colonnes, modifier les données via des requêtes SQL, et bien plus encore comme indiqué ici:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="outil de gestion de la base de données">}}

**Créer une nouvelle base de données** 
Pour créer une nouvelle base de données, cliquez sur «Créer une base de données», entrez le nom de la base de données et cliquez sur «Enregistrer».

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="outil de gestion de la base de données">}}

**Insérer / mettre à jour les enregistrements** 
L'ajout de nouveaux enregistrements à une table est assez simple. Cliquez sur le nouveau lien d'article qui vous redirigera vers l'écran d'insertion. Ici, vous pourrez ajouter de nouvelles données pour toutes les colonnes du tableau, ainsi que le type de données, donc l'ajout de nouvelles données est un processus rapide.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Administrer vs phpmyadmin">}}


## Conclusion   {#conclusion}
Cela nous amène à la fin de ce tutoriel d'administration. Nous avons parcouru des sujets importants tels que ce qui est l'administrateur, l'administrateur vs phpmyadmin et d'autres aspects de ce système de gestion de la base de données basé sur le Web open source. J'espère que ce billet de blog vous aidera sûrement si vous cherchez à installer un outil de gestion de la base de données open source. Il est intuitif, intelligent et facile à utiliser en fait un outil de gestion de base de données très populaire. En outre, il prend en charge de nombreuses bases de données, notamment MySQL, SQLite, MongoDB et bien plus encore, ainsi que des mesures de sécurité pour protéger et prévenir tout événement de piratage malveillant. Dans l'ensemble, cet outil de gestion de la base de données est non seulement open source, mais aussi gratuit.
Enfin, [contenerize.com][9] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [outils de gestion de la base de données][10] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][11], [LinkedIn][12] et [Twitter][13].

## Explorer
Pour en savoir plus sur les outils gratuits de gestion des bases de données sur le Web, veuillez consulter les pages suivantes:
  * [Administrateur | Système de gestion de la base de données Web gratuit][14]
  * [Top outils logiciels Open Source DBMS][1]
  * [Top 5 des outils de gestion de la base de données open source en 2021][15]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
