---
title: "Comment créer et exécuter un bot en fusée.chat à l'aide de botpress" 
seoTitle: "Comment créer et exécuter un bot en fusée.chat à l'aide de botpress" 
description: "Ce guide vous apprend avec des étapes simples et faciles à créer un bot à l'aide de BotPress et son intégration avec Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "Dans ce tutoriel, nous vous guiderons sur la façon de créer un bot à l'aide de botpress et son intégration avec Rocket.Chat" 
url: /fr/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## Dans ce tutoriel, nous vous guiderons sur la façon de créer un bot à l'aide de botpress et son intégration avec Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Comment créer et exécuter un bot en fusée.chat à l'aide de botpress">}}

Un chatbot est un programme informatique conçu pour simuler la conversation humaine. Vous en avez probablement rencontré un sur Facebook Messenger, un site Web de vente au détail. Techniquement parlant, les robots sont des programmes automatisés conçus pour effectuer une tâche spécifique.
Rocket.Chat encourage les intégrations d'automatisation du chatbot et de la messagerie. Par conséquent, a une documentation complète pour vous guider à travers le processus de fabrication de bot.
Dans cet article, nous vous guiderons sur la façon de créer un bot à l'aide de BotPress. Et, comment configurer Rocket.Chat avec botpress.
  * [Rocket.Chat][1]
  * [Botpress][2]
  * [Créer un utilisateur de bot dans Rocket.Chat][3]
  * [Code votre bot à l'aide de botpress][4]
  * [Conclusion][5]


### Rocket.Chat {#rocketchat}

Rocket.chat fait partie du populaire logiciel de chat en direct en partie un projet de chat en direct open source. Il a une version de chat en direct gratuite en tant qu'édition communautaire. Ainsi, une version de chat en direct hébergée payée pour les grandes entreprises avec des fonctionnalités de chat internes privées. Cette application de chat en direct s'exécute dans le navigateur mais peut également être installée sur votre propre serveur. [Lire la suite][6]


### Botpress {#botpress}

Les chatbots conversationnels ont permis aux entreprises de donner à leurs clients le support tactile élevé toujours disponible qu'ils souhaitent. BotPress est l'un des outils de création de bot open source les plus populaires avec un traitement du langage naturel intégré. La technologie NLU de BotPress fait une longueur d'avance sur ses concurrents dans le domaine comme Botkit, DialogFlow et Microsoft Bot Framework. [Lire la suite][7]


### Créer un utilisateur de bot dans Rocket.Chat {#createbotuser}

Afin de parler à votre chatbot, il doit y avoir un compte utilisateur préconfiguré sur le serveur Rocket.Chat auquel le bot peut se connecter.
Pour créer le compte, vous devez avoir des privilèges d'administration:
  1. Dans la barre supérieure, cliquez sur les trois points (options) puis cliquez sur  **Administration**  
  2. Sélectionnez  **Utilisateurs**  dans la barre latérale gauche
  3. Cliquez sur le bouton `+` (Ajouter l'utilisateur) dans la barre latérale droite
  4. Dans la fenêtre de profil qui apparaît, remplissez _name_, _Username_, _email_ et _password_ champs
  5. Activer _Verified_ Toggle sous le champ _email_
  6. Désactiver _Require Mot de passe Modifier_ Toggle sous le champ _Password_
  7. Sélectionnez `Bot` dans le menu déroulant« Ajouter un rôle »et cliquez sur le bouton _Add Role_ à droite
  88
  9. Cliquez sur _Save_
Une fois enregistré, le bot sera configuré avec le nom d'utilisateur et le mot de passe défini sur l'étape 4. Vous pouvez utiliser les variables environnementales «Rocketchat \ _user» et «Rocketchat \ _password» pour se connecter à Rocket.Chat Server avec cette paire de nom d'utilisateur et de mot de passe.


### Code votre bot à l'aide de botpress {#codebot}

BotPress est un package Node.js et fonctionne avec Node et NPM.
Le moyen le plus rapide de commencer avec BotPress est d'utiliser le référentiel [BotPress-Kick-Starter][8] qui est déjà intégré à Rocket.Chat via [Connecteur de BotPress-Channel][9].
Accédez au dossier où vous souhaitez travailler avec le bot et procédez avec les étapes suivantes:
 **Installez le package BotPress** 
```
npm init -y
npm install botpress@10.40.0
```
 **Créer un bot** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
La commande «BotPress Init» lance un assistant qui vous aidera à créer la configuration initiale. Vous devriez voir quelque chose comme suit:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
** Installez le connecteur BotPress et les dépendances en bot
```
npm install
npm install botpress-channel-rocketchat
```
configurer le bot
Ouvrez le dossier «Config» et créez un fichier «canal-rocketchat.json» avec le contenu suivant:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
 **Exécutez le bot** 
```
npm start
```
 **Parlez à votre bot** 
Sur le serveur, connectez-vous en tant qu'utilisateur ordinaire (pas l'utilisateur de bot), allez dans la salle générale et parlez à votre bot nouvellement créé.


### Conclusion {#conclusion}

Dans cet article, nous avons appris à créer un bot à Botpress. Et, comment le configurer avec Rocket.Chat. BotPress facilite la création de workflows automatisés innovants. Et, l'intégration avec Rocket.Chat vous permet de les contrôler de manière conversationnelle.



 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat
