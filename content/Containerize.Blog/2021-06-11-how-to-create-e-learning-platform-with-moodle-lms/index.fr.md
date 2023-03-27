---
title: "Comment créer un site Web d'apprentissage en ligne avec Moodle LMS" 
seoTitle: "Comment créer un site Web d'apprentissage en ligne avec Moodle LMS" 
description: "Moodle LMS est une solution en ligne gratuite et open source pour créer une plate-forme d'apprentissage en ligne. Consultez le guide pour vous familiariser avec lui." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Créez une plate-forme d'apprentissage en ligne avec une plate-forme d'apprentissage en ligne open source. Cet article explique comment utiliser Moodle LMS pour créer un site d'apprentissage à distance." 
url: /fr/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Créez une plate-forme d'apprentissage en ligne avec une plate-forme d'e-learning open source. Cet article explique comment utiliser Moodle LMS pour créer un site d'apprentissage à distance.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Nous sommes affligés par Covid 19 depuis plus d'un an. Chaque partie du monde a été placée sous location. Cela a un impact négatif sur la vie des gens et les entreprises du monde entier. Plus important encore, cela a un impact majeur sur notre système éducatif. Les établissements d'enseignement doivent faire la transition vers l'apprentissage en ligne afin que les étudiants puissent poursuivre leurs études dans le confort de leur propre maison. Sans une plate-forme d'apprentissage en ligne solide et sûre, l'apprentissage en ligne est impossible. Dans cet article, nous examinerons le projet **Moodle Open Source** , qui permet aux enseignants et aux élèves de communiquer et d'apprendre de n'importe où.
Nous couvrirons les sections suivantes de cet article pour **créer un site Web d'apprentissage en ligne** en utilisant Moodle.
  * [Prérequis][1]
  * [Qu'est-ce que Moodle?][2]
  * [Caractéristiques de Moodle][3]
  * [Moodle Installation][4]
  * [Conclusion][5]

## Conditions préalables {#Conditions préalables}

Si vous ne l'avez pas déjà fait, vous devez installer et configurer un environnement de lampe sur votre serveur.

## Qu'est-ce que Moodle? {#What}

[ **Moodle**][6] est une solution d'e-learning gratuite et open source. Moodle signifie un environnement d'apprentissage dynamique orienté objet modulaire. Il a été créé pour donner aux éducateurs, aux administrateurs et aux apprenants une plate-forme d'apprentissage en ligne pour créer et fournir des environnements d'apprentissage individualisés. De plus, Moodle est un **LMS approprié pour les écoles** , les universités et les cours de formation professionnelle dans les entreprises. C'est l'une des solutions populaires **Distance Learning** pour créer un site Web LMS. De plus, Moodle offre aux enseignants et aux étudiants des outils riches et des environnements d'apprentissage collaboratifs. Moodle a une application mobile pour iPhone, Android et téléphones et tablettes Windows. L'application mobile peut être utilisée à partir de n'importe quel endroit du monde. Ce **LMS HOSTÉ** est écrit en PHP et stocke les données dans les bases de données MySQL / Postgresql. Il est livré avec une vaste documentation utilisateur et développeur. Tout le code source est disponible sur [ **github** ][7]. La licence pour cette solution d'open source**en ligne** est gplv3 +.

## Caractéristiques de Moodle {#Features}

Moodle est livré avec beaucoup de fonctionnalités. Cependant, dans cet article, nous passerons en revue certaines des caractéristiques clés suivantes.
**Outils et activités de collaboration** : les forums, les wikis, les glossaires, les activités de base de données et d'autres outils permettent aux utilisateurs de collaborer et d'apprendre ensemble. Un groupe d'éléments dans un cours Moodle est appelé activité. Une activité est généralement quelque chose qu'un élève fait dans lequel il interagit avec d'autres élèves et / ou l'enseignant.
**Track Progress** : Les éducateurs et les étudiants peuvent garder une trace de leurs progrès et de leur achèvement en utilisant une variété d'outils pour suivre des activités ou du matériel spécifiques ainsi qu'au niveau du cours. Il existe plusieurs façons de suivre les progrès des étudiants dans Moodle tels que les notes, les compétences, l'achèvement des activités, l'achèvement du cours, les badges, les rapports de cours et l'analyse.
**Plugins Management** : Les plugins vous permettent d'étendre les fonctionnalités fondamentales de Moodle en ajoutant de nouvelles fonctionnalités. Les utilisateurs peuvent ajouter des plugins pour une variété de tâches telles que des activités supplémentaires, de nouveaux types de questions de quiz, de nouveaux rapports, des connecteurs système et bien d'autres. Une interface d'administration peut être utilisée pour installer et désactiver les plugins.
**Gestion des cours** : Créez et gérez des cours qui répondent à une variété de besoins. Les cours dirigés par des instructeurs, les classes autoproclamées, les cours mixtes et les cours entièrement en ligne sont toutes des options.
**Peer et auto-évaluation** : Les ateliers et les enquêtes sont des activités intégrées qui encouragent les élèves à voir, à noter et à revoir leur propre travail de camarades de classe et d'autres en tant que groupe.

## Installation de Moodle {#Moodle}

Suivez le guide étape par étape ci-dessous pour installer Moodle LMS sur Ubuntu 18.04.
  * Tout d'abord, exécutez les commandes ci-dessous pour modifier le téléchargement Directlory et télécharger Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Exécutez les commandes suivantes Créez des autorisations de données et définissez les autorisations.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Créer un fichier de configuration Nginx pour le site Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Ajoutez du code ci-dessous et enregistrez le fichier.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Créez SymLink pour activer le site nouvellement créé.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Redémarrez le serveur Web Nginx.
```
sudo systemctl restart nginx
```
  * Ensuite, ouvrez votre navigateur et tapez http://example.com. Remplacez «Example.com» par le nom de domaine ou la propriété intellectuelle réel de votre serveur.
  * Maintenant, vous pouvez voir l'assistant d'installation. Sélectionnez une langue et cliquez sur le bouton Suivant.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Choisissez une langue">}}

  * Vous devez consulter et vous assurer que l'URL du site, le répertoire racine Moodle et les chemins de répertoire de données sont corrects. Vous pouvez également modifier le chemin du «répertoire de données» et il devrait être en dehors du répertoire de code Moodle pour la sécurité. Cliquez sur le bouton Suivant.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Définir le chemin du répertoire de données">}}

  * Choisissez un pilote de base de données dans cette étape. Cependant, vous pouvez utiliser celui déjà sélectionné et cliquer sur le bouton Suivant.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Choisissez le pilote de base de données">}}

  * Fournir des paramètres de base de données tels que l'hôte de la base de données, le nom de la base de données, l'utilisateur de la base de données, le mot de passe de base de données et la préfixe de table. Cliquez sur le bouton Suivant.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Paramètres de base de données">}}

  * Cliquez sur le bouton Confirmer pour être d'accord avec les termes et conditions.
  * Vous pouvez voir une liste des extensions de PHP requises. Cependant, vous devrez installer tous les modules complémentaires manquants. Cliquez sur le bouton Continuer pour déplacer la prochaine étape.
  * À ce stade, vous devez remplir les données de l'administrateur pour créer un compte. Cliquez sur le bouton «Mettre à jour le profil».
  * Fournissez des informations pour votre site telles que le nom complet du site, le nom court pour le site, le résumé de la page FrontPage, le fuseau horaire par défaut et le courrier électronique sans réponse. Cliquez sur le bouton «Enregistrer les modifications».
  * Complétez l'enregistrement de votre site en fournissant des informations telles que le nom du site, la langue, la région, l'adresse e-mail, etc.

## Conclusion {#Conclusion}

Nous avons appris Moodle et ses principales caractéristiques de cet article. Nous avons également passé une approche étape par étape pour mettre en place **Moodle LMS**pour **Créer un site Web-Learning** . Vous pouvez revoir Moodle's [**Documentation officielle** ][8] pour devenir plus à l'aise avec diverses fonctions telles que les cours, l'inscription des étudiants, le suivi des progrès, etc. J'espère que vous avez trouvé cet article utile pour créer un site Web LMS.
Enfin, [ **contenerize.com**][9] est dans un processus cohérent de rédaction de articles de blog sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [**Learning Management System** ][10] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [ **Outils LMS open source** ][11]
  * [ **Moodle - Système d'apprentissage en ligne** ][12]



[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
