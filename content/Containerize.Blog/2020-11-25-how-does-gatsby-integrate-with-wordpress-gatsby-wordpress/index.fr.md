---
title: "Comment Gatsby s'intègre-t-il à WordPress? | Gatsby wordpress" 
seoTitle: "Comment Gatsby s'intègre-t-il à WordPress? | Gatsby wordpress" 
description: "Utilisez Gatsby WordPress ensemble pour améliorer la vitesse, l'évolutivité et la sécurité de votre site Web. Dans ce tutoriel, vous apprendrez à utiliser ces logiciels open source." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Configurez Gatsby open source avec votre WordPress pour apporter une plus grande expérience utilisateur et des performances globales. Apprenons à utiliser ce générateur de sites statique." 
url: /fr/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Configurez Gatsby open source avec votre WordPress pour apporter une plus grande expérience utilisateur et des performances globales. Apprenons à utiliser ce générateur de sites statique.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="gatsby wordpress">}}


## Aperçu
GATSBYJS est un générateur de sites statiques à alimentation GraphQL STATIQUE gratuite et open source. Il utilise une préconfiguration puissante pour créer un site Web qui utilise uniquement des fichiers statiques pour des charges de page incroyablement rapides. WordPress est une excellente plate-forme de blogs open source. En conséquence, il y a beaucoup de gens qui savent comment déterminer si un site est un site WordPress afin qu'ils puissent les pirater et voler des informations. L'utilisation de Gatsby WordPress ensemble vous donnera la même puissance de la gestion du contenu WordPress et de la vitesse du GATSBY.
Dans cet article, nous examinerons ce qu'est Gatsby et pourquoi vous devez l'utiliser avec le logiciel CMS. Ensuite, nous allons entrer en détail sur la façon d'utiliser WordPress et Gatsby ensemble pour créer une expérience de site Web incroyable. Commençons!
  * [** Qu'est-ce que Gatsby **?] [1]
  * ** [Avantages et inconvénients de l'utilisation de WordPress et Gatsby] [2] **
  * ** [Comment utiliser Gatsby avec WordPress] [3] **
  * ** [Conclusion] [4] **

## Qu'est-ce que Gatsby {#gatsby}
Gatsby est un générateur de sites statique. Cela signifie que Gatsby génère les fichiers HTML statiques qui sont téléchargés sur le serveur de votre site Web. Lorsqu'un visiteur atterrit sur votre site, ces fichiers statiques sont servis à leur navigateur, au lieu du contenu dynamique que WordPress sert généralement. Il s'agit d'un cadre gratuit et open source basé sur React qui aide les développeurs à créer des sites Web et des applications rapides.

## Avantages et inconvénients de l'utilisation de WordPress et Gatsby {#proscons}
Selon les [documents] officiels de Gatsby [5], ils ont compilé une table, pour laquelle la combinaison de Gatsby WordPress est grande et pour qui ce n'est pas. Par souci de facilité, je les répertorie ici.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress et Gatsby sont parfaits pour
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Les équipes de contenu qui sont à l'aise avec l'expérience d'édition de contenu WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Des équipes de développement qui apprécient l'utilisation de technologies populaires open-source
{{_LINE_34_}}
{{_LINE_35_}}
        Refonte des sites avec du contenu déjà stocké dans WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Équipes qui souhaitent posséder leurs données et leur pile technologique
{{_LINE_40_}}
{{_LINE_41_}}
        Contrôle complexe des workflows ou des restrictions de modélisation de contenu
{{_LINE_43_}}
{{_LINE_44_}}
        Projets où la sécurité est importante
{{_LINE_46_}}
{{_LINE_47_}}
        Projets à forte demande où la performance est primordiale
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress et Gatsby ne sont pas parfaits pour
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Équipes nécessitant l'utilisation de thèmes d'interface utilisateur WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Ceux qui recherchent un CMS cloud entièrement géré
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Outre ces points officiels, je voudrais énumérer certains avantages et inconvénients de l'utilisation de Gatsby WordPress ensemble
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Avantages
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Vitesses de chargement plus rapides - Les sites Web statiques se chargent plus rapidement que dynamique. En conséquence, cela a un impact sur les vitesses de votre page de chargement et le classement SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Moins de coûts de serveur - car les fichiers statiques n'ont pas besoin de logiciels spéciaux, donc les pages HTML statiques peuvent également être servies à partir de serveurs moins chers.
{{_LINE_78_}}
{{_LINE_79_}}
        Plus sécurisé - pour les sites statiques, il n'y a pas de composants mobiles de pièces, donc aucune chance pour les pirates d'exploiter votre logiciel.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Les inconvénients
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Courbe d'apprentissage - Cela nécessite des compétences supplémentaires pour les développeurs. Comme apprendre ReactJS et GraphQL
{{_LINE_93_}}
{{_LINE_94_}}
        Seul le contenu statique - si vous avez besoin de servir un contenu dynamique. Alors Gatsby n'est pas pour vous. Il ne peut servir que des fichiers statiques. Par conséquent, vous ne pouvez pas avoir de système de commentaires qui récupère les données de la base de données.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Comment utiliser Gatsby avec WordPress {#Howto}
Avant de pouvoir installer Gatsby, vous devez installer [NodeJS] [6] et [NPM] [7] dans l'environnement de votre site Web.

### Étape 1 - Installer Gatsby
```
npm install -g gatsby-cli
```
Cette commande exécute automatiquement l'installateur. Il télécharge et installe toutes les dépendances avant d'installer Gatsby. Une fois cela terminé, vous pouvez commencer à créer votre premier site Web Gatsby.
```
gatsby new gatsby-site
```
Cela téléchargera le modèle de démarrage de Gatsby et le placera dans le répertoire / Gatsby-WordPress. Une fois l'installation terminée, vous pouvez ouvrir la version de développement du site
```
gatsby develop
```
Maintenant, dans votre navigateur Web, entrez _http: // localhost: 8000_ et votre modèle par défaut doit s'ouvrir.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Modèle de démarrage de Gatsby">}}


### Étape 2 - Connectez Gatsby à WordPress
Dans cette section du guide Gatsby WordPress, nous connecterons ce générateur de sites statique à WordPress. Vous avez un site Web statique de base, mais vous devez l'intégrer avec WordPress. Cela pointe votre site Gatsby vers l'adresse de votre blog WordPress, en lui permettant de retirer les dernières données lorsque vous exécutez le serveur de développement. Une fois connecté, Gatsby créera un site Web statique en fonction de votre modèle actuel.
Installez le plugin WordPress Gatsby Source à partir du référentiel NPM.
```
npm install gatsby-source-wordpress
```

### Étape 3 - Configurer Gatsby
Mettez le code suivant dans votre fichier _gatsby-config.js_
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Mettez à jour ce code pour pointer vers votre site Web WordPress. Si votre site Web est hébergé localement, après BUSURL, vous pouvez utiliser _Localhost: 8888 / wordpress_ au lieu de l'URL de votre site Web. Après avoir enregistré le fichier, vous devrez créer vos modèles de page.

### Étape 4 - Modèles de page de construction
Les modèles de page de construction permettent à ce générateur de sites de générer une publication pour chaque page de votre site Web WordPress. Le plugin source tirera les données dont vous avez besoin à partir de WordPress pour ces pages, mais vous devrez créer le modèle de conception.
Dans votre fichier _gatsby-node.js_, ajoutez le code suivant
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Après avoir appelé toutes les données, Gatsby générera une page pour chaque message. À l'aide de la commande de développement, vous pouvez accéder à chaque nouvelle page à l'aide de l'URL générée.

## Conclusion {#conclusion}
Dans ce didacticiel Gatsby WordPress, nous avons couvert comment générer un site Web Gatsby à partir de WordPress. Nous avons appris quels sont les avantages et les inconvénients de ces deux logiciels open source. Nous avons également couvert comment installer et commencer par l'environnement de développement de Gatsby.
Enfin, [contenerize.com] [8] écrit des articles sur d'autres produits open source. Par conséquent, veuillez rester en contact avec la catégorie de plate-forme open source [blogging] [9] pour les nouvelles et les mises à jour régulières.
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
