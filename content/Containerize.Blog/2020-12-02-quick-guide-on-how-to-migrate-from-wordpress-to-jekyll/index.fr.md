---
title: "Comment migrer de WordPress vers Jekyll" 
seoTitle: "Comment migrer de WordPress vers Jekyll" 
description: "Dans ce tutoriel, nous apprendrons à migrer votre site de WordPress vers Jekyll en étapes rapides et faciles. Commençons!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "Dans ce tutoriel, nous apprendrons à migrer votre site Web de WordPress vers Jekyll et à l'héberger avec GitHub gratuitement" 
url: /fr/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## Dans ce tutoriel, nous apprendrons comment migrer votre site Web de WordPress à Jekyll et l'héberger gratuitement avec GitHub

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress à Jekyll">}}

Jeykll est un générateur de sites statiques open source. Il transforme votre texte brut en sites Web et blogs statiques. Il faut du texte écrit dans votre langage de balisage préféré (Markdown, Liquid, HTML / CSS) et utilise des mises en page pour créer un site Web statique. Jekyll est un blog au courant et les permaliens, les catégories, les pages, les publications et les dispositions personnalisées sont tous des citoyens de première classe. L'un des plus grands avantages de Jekyll est que vous pouvez héberger votre site Web statique sur les pages GitHub et exécuter votre site Web ou blog gratuitement. Ainsi, WordPress to Jekyll Migration peut vous aider à améliorer les performances et la vitesse de votre site Web.
Dans ce billet de blog, nous allons passer par la façon de migrer votre site Web ou votre blog existant de WordPress à Jekyll pour une meilleure vitesse et des performances. Alors, commençons!
  * ** [Pourquoi migrer?][1] **
  * ** [installation][2] **
  * ** [Importer des messages et des pages WordPress dans][3] **
  * ** [Déploiement avec les pages github][4] **
  * ** [Conclusion][5] **

## Pourquoi migrer? {#pourquoi}
Dans Jekyll, vous pouvez obtenir un 100/100 [score du phare][6] car il n'y a pas d'interactions de base de données. Et, tout le contenu est prétraité et enregistré sous forme de fichiers HTML. Et, Jekyll ne fera qu'une quantité minimale de demandes HTTP. Par conséquent, c'est super rapide.

## Installation et configuration Jekyll {#install}
Jekyll est écrit en Ruby. Vous devez donc l'installer d'abord sur votre ordinateur. Ce guide suppose que Ruby a déjà installé Ruby sur votre ordinateur. Sinon, vous pouvez suivre le [guide officiel][7].
Tout d'abord, nous allons les joyaux «** Jekyl **» et «** bundler **» en utilisant la commande «** gem **» qui sera disponible après avoir installé Ruby. Ouvrez la ligne de commande et exécutez le code suivant.
```
gem install jekyll bundler
```
Ensuite, exécutez la commande suivante pour créer un nouveau site. Cela créera un dossier ** myblog **.
```
jekyll new myblog
```
Une fois installé, vous pouvez créer le site et le rendre disponible sur un serveur local.
```
bundle exec jekyll serve
```
Le site sera disponible sur http: // localhost: 4000. Il génère également un dossier «** _ Site **» dans votre dossier c'est ce qu'est la sortie finale du site.

## Importer WordPress Pages and Posts {#import}
Un plugin non officiel pour le WordPress est également disponible, mais nous suivrons la méthode officielle de ce tutoriel. Si vous souhaitez essayer le plugin d'exportateur Wordpess, vous pouvez [aller ici][8].
Pour importer vos messages à partir d'un site Web WordPress auto-hébergé, exécutez la commande suivante sur votre terminal.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Cela importe uniquement les données et les données et le contenu de la page. Cet importateur ne convertit que vos messages et crée le front YAML. Il n'importe aucune disposition, style ou fichiers externes (images, CSS, etc.).

## ** Déploiement avec les pages GitHub ** {#deploy}
Jusqu'à présent, nous avons créé notre blog Jekyll localement. Maintenant, nous allons le déployer sur github. Tout d'abord, nous devons contrôler notre site à l'aide de [GIT][9]. Exécutez les commandes suivantes dans le dossier du site.
```
git init
git add .
git commit -m "Initial Commit"
```
Lors de l'installation de Jekyll, il doit créer automatiquement un fichier «**. Gitignore **» dans la racine avec au moins le contenu suivant.
Ensuite, connectez-vous à GitHub et créez un nouveau référentiel yourname.github.io
Ensuite, copiez l'URL HTTPS du référentiel.

{{< figure align=center src="images/github-img.png" alt="URL github https">}}

Ensuite, ajoutez le référentiel distant et poussez le code.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Fait! Votre site doit désormais être disponible sur yourname.github.io

## Conclusion {#conclusion}
Dans cet article, nous avons appris à construire un blog statique avec des sites Jekyll. Ensuite, nous avons appris à exporter vos messages et pages de WordPress à Jekyll. Et enfin, nous avons déployé le site final aux pages GitHub.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
