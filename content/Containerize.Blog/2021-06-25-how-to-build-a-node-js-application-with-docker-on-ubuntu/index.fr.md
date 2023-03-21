---
title: "Comment construire une application Node.js avec Docker sur Ubuntu" 
seoTitle: "Comment construire une application Node.js avec Docker sur Ubuntu" 
description: "Si vous êtes intéressé par Node.js et que vous souhaitez utiliser Docker. Ce tutoriel vous guidera, comment créer une application NodeJS avec Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Cet article vous expliquera comment créer une application NodeJS avec la conteneurisation Docker. Docker permet d'emballer et d'exécuter des applications sous forme de conteneurs." 
url: /fr/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Comment créer une application Nodejs avec Docker">}}


## Cet article vous expliquera comment créer une application NodeJS avec la contenerisation Docker. Docker permet d'emballer et d'exécuter des applications sous forme de conteneurs.
Aujourd'hui, nous commençons une série de tutoriels sur les outils de développement de logiciels. Et ce premier article couvre comment conteneriser une application Node.js à l'aide de Docker. Docker aide les développeurs à emballer et exécuter des applications en tant que conteneurs. Étant donné que le conteneur est un processus isolé et une alternative légère aux machines virtuelles. Cet article explique comment créer une application NodeJS avec la contenerisation Docker. Commençons!
  * [**Qu'est-ce que Docker** ][1]
  * **[Prérequis][2]** 
  * [**Configuration de l'application Node.js** ][3]
  * [**Écrire dockerfile** ][4]
  * [**Build Image et Exécuter Docker Container** ][5]
  * [**Conclusion** ][6]

## Qu'est-ce que Docker   {#Docker}
Docker est un ensemble de plate-forme en tant que produits de service qui utilisent la virtualisation au niveau OS pour fournir des logiciels dans des packages appelés conteneurs. Il s'agit d'une plate-forme ouverte pour les applications de développement, d'expédition et d'exécution. Docker vous permet de séparer vos applications de votre infrastructure afin que vous puissiez livrer rapidement des logiciels.
Docker utilise une architecture client-serveur. Le client Docker parle au Docker Daemon, qui fait le gros du travail de la construction, de la course et de la distribution de vos conteneurs Docker. Le client Docker et le démon communiquent à l'aide d'une API REST, sur Unix Sockets ou une interface réseau. Voici le diagramme de l'architecture Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="architecture docker">}}


## Prérequis   {#prereq}
  * Serveur Ubuntu
  * Docker installé sur le serveur
  * NODE.JS NPM installé

## Configuration de l'application Node.js   {#SetUp}
Pour créer votre image, vous devrez d'abord créer vos fichiers d'application, que vous pouvez ensuite copier dans votre conteneur. Ces fichiers incluront le contenu statique, le code et les dépendances statiques de votre application.
Tout d'abord, créez un répertoire pour votre projet dans le répertoire domestique de votre utilisateur non-Root. Ensuite, exécutez la commande ci-dessous dans un nouveau dossier que vous avez créé.
```
npm init -y
npm i -s express
```
La commande ci-dessus configurera une application Node.js avec le framework express installé sous forme de dépendance. Ajoutons le code suivant dans le fichier **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Démarrez l'application avec Node app.js
```
node app.js
```
Naviguez sur votre navigateur vers http: // votre \ _Server \ _ip: 3000. Vous verrez la page de destination suivante.
Vous avez maintenant une application opérationnelle. Nous pouvons maintenant passer à la création du Dockerfile qui nous permettra de recréer et de faire évoluer cette application.

## écrire dockerfile   {#dockerfile}
À l'aide de Dockerfile, vous pouvez spécifier ce qui sera inclus dans votre conteneur d'application lors de sa réalisation et l'environnement du conteneur.
Créez tout d'abord dockerfile avec la commande suivante à la racine de votre projet.
```
vi Dockerfile
```
Ajoutez l'instruction **suivante de**  pour définir l'image de base de l'application:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Vous pouvez ajouter un fichier .dockeRgnore afin de supprimer des fichiers qui n'appartiennent pas à l'image docker.
{{_LINE_46_}}
{{_LINE_47_}}
Créons le sous-répertoire **Node_Modules**  dans / home / nœud avec le répertoire de l'APP. Cela garantira qu'ils ont les autorisations nécessaires, qui seront importantes lorsque nous créerons des modules de nœud locaux dans le conteneur avec l'installation de NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Ensuite, définissez le répertoire de travail de l'application sur / home / nœud / application:
```
...
WORKDIR /home/node/app
```
Ensuite, copiez le package.json et le package-lock.json, affectez le fichier du projet à un «nœud» utilisateur non root, puis exécutez l'installation de NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Copiez votre code d'application avec les autorisations appropriées dans le répertoire de l'application sur le conteneur
```
...
COPY --chown=node:node . .
```
Exposer la commande pour exposer le port:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
La version finale de Dockerfile devrait ressembler à ceci:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## Build Image and Run Container   {#Build}
Exécutez la commande suivante pour générer votre image Docker
```
docker build -t <<image_name>> .
```
Cela générera une image _docker que vous pouvez vérifier en utilisant la commande docker images. Il est désormais possible de créer un conteneur avec cette image en utilisant la commande suivante:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Cela démarrera le conteneur que vous pouvez vérifier en exécutant la commande docker ps. Maintenant, dans votre navigateur si vous accédez à http: // localhost: 3000, vous verrez votre application Node.js fonctionner. Cependant, cette fois, il fonctionne maintenant à partir de votre conteneur Docker.

## Conclusion   {#conclusion}
Le développement avec le conteneur Docker est très simple et facile. Docker aide les développeurs à emballer et exécuter des applications en tant que conteneurs. Dans ce didacticiel, nous avons appris à créer une application Node.js à l'aide de Docker Container sur Ubuntu. Dans les prochains articles, nous écrire sur plus d'utilisations de Docker et nous discuterons également d'autres outils.

## Explorer
  * [Comment installer plusieurs versions PHP avec Nginx sur Ubuntu][7]
  * [Comment configurer et configurer Nginx comme proxy inverse][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
