---
title: "Comment créer un bot FAQ basé sur l'IA pour votre entreprise à l'aide de botpress" 
seoTitle: "Comment créer un bot FAQ basé sur l'IA pour votre entreprise à l'aide de botpress" 
description: "Dans cet article de blog, nous apprendrons à automatiser vos requêtes client à l'aide d'un bot FAQ basé sur l'IA à l'aide de BotPress sur votre site Web." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Les entreprises ont besoin de meilleures plateformes de support client pour résoudre efficacement leurs requêtes. Dans ce tutoriel, nous apprendrons à créer un bot FAQ basé sur l'IA à l'aide de botpress" 
url: /fr/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Les entreprises ont besoin de meilleures plateformes de support client pour résoudre efficacement leurs requêtes. Dans ce tutoriel, nous apprendrons à créer un bot FAQ basé sur l'IA à l'aide de botpress

{{< figure align=center src="images/botpress-banner.png" alt="FAQ BOT pour votre entreprise à l'aide de botpress">}}

L'automatisation de la FAQ consiste à améliorer l'expérience de votre client en ligne en utilisant des chatbots pour répondre aux questions fréquemment posées. Avec les progrès de l'intelligence artificielle et de l'apprentissage automatique, la demande de chatbots conversationnels basée sur l'IA a gagné en popularité et en demande. Et c'est principalement parce que toute l'entreprise veut améliorer son expérience client même lorsque l'entreprise est hors ligne. Les chatbots conversationnels ont permis aux entreprises de donner à leurs clients le support élevé toujours disponible qu'ils souhaitent. Le but de cet article de blog est de vous aider à créer un bot FAQ basé sur l'IA à l'aide de BotPress.
Dans cet article, nous apprendrons le module NLU du Botpress et le fonctionnement de la compréhension / traitement du langage naturel et peut aider les entreprises à atteindre un niveau de satisfaction client élevé. Commençons!
  * ** [Qu'est-ce que le traitement du langage naturel][1] **
  * [** Déterminez votre cas d'utilisation **][2]
  * [** Installer Botpress **][3]
  * [** Créer un nouveau bot **][4]
  * [** Train votre bot de questions / réponses **][5]
  * [** Conclusion **][6]

## Qu'est-ce que le traitement du langage naturel {#nlu}
Le traitement du langage naturel (PNL) est une branche de l'intelligence artificielle qui aide les ordinateurs à comprendre, à interpréter et à manipuler le langage humain. La PNL aide les ordinateurs à communiquer avec les humains dans leur propre langue. Et, permet aux ordinateurs de lire un texte, d'entendre la parole, de l'interpréter, de mesurer le sentiment.
La tâche de base de la PNL comprend la tokenisation et l'analyse, le tige, le marquage d'une partie du discours, la détection du langage et l'identification des relations sémantiques.
NLU est le module de BotPress qui traite chaque message entrant et effectue une classification d'intention, l'identification du langage, l'extraction des entités et le taggage des fentes.

## Déterminez votre cas d'utilisation {#case}
Si vous souhaitez créer un chatbot FAQ AI, vous devez avoir un cas d'utilisation pour votre entreprise. Pour le bien de ce tutoriel, nous voulons que nos utilisateurs posent une question aléatoire liée à la tarification de notre produit et à notre calendrier commercial.

## installer botpress {#install}
Pour installer BotPress, rendez-vous sur leur [site Web][7], cliquez sur «Télécharger gratuitement» et sélectionnez votre plate-forme. Pour ce tutoriel, j'utilise la version Mac. Une fois le téléchargement terminé, vous pouvez extraire le fichier zip et exécuter la commande suivante sur votre terminal en entrant dans le bon dossier.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="botpress start">}}


## Créer un nouveau bot {#create}
Maintenant, nous voulons réellement créer notre premier bot en cliquant sur ** Créer un bot ** puis en sélectionnant ** Nouveau bot **. Je vais appeler notre bot le bot FAQ, puis en tant que modèle de bot, je sélectionnerai ** Bot vide ** avant de cliquer sur ** Créer un bot **.

{{< figure align=center src="images/create-bot.gif" alt="créer un nouveau-petit">}}

Nous allons maintenant modifier ce bot dans BotPress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="BotPress Edit en studio">}}

Maintenant, en studio, vous avez un certain nombre de menus le long de la barre latérale gauche. Mais par souci de simplicité, nous nous en tiendrons simplement à la section des questions et réponses.
Cliquez sur l'icône «Q&A» et ajoutez des questions possibles / fréquemment posées et leurs réponses appropriées.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="BotPress Q&R">}}


## Train votre FAQ BOT {#TRAIN}
Une fois que vous aurez terminé, vous devrez entraîner votre bot FAQ en cliquant sur le bouton «Train Chatbot» dans le coin inférieur droit de la section Q&R.

{{< figure align=center src="images/train-bot.gif" alt="bot de train botpress">}}

Une fois la formation terminée, vous pouvez tester votre bot FAQ en utilisant l'outil d'émulateur intégré.

{{< figure align=center src="images/test-faq-bot.gif" alt="Testez votre FAQ Bot">}}

Maintenant, que votre FAQ BOT est prêt, vous pouvez déployer ce bot sur votre site Web en suivant le [Guide officiel d'intégration][8] de BotPress.

## Conclusion {#conclusion}
Dans cet article de blog, nous avons appris et compris le traitement du langage naturel. Nous obtenons également notre processus de création de bot. Nous avons formé un simple bot FAQ qui aide vos clients à connaître les horaires de votre entreprise et vos plans de paiement. Le but du tutoriel était d'aider les débutants à démarrer rapidement avec un bot FAQ basé sur l'IA utilisant BotPress.

  
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
