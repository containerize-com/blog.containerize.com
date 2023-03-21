---
title: "Intégrons le chatppt dans l'application JavaScript | Tutoriel Chatgpt" 
seoTitle: "Intégrer le chatppt dans l'application JavaScript" 
description: "Exécutez simplement \"NPM I Chatgpt\" et commencez à utiliser Openai Chatbot dans votre application Node.js. Suivez ce guide pour apprendre à intégrer ChatGpt dans l'application JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Exécutez simplement \"NPM I Chatgpt\" et commencez à utiliser Openai Chatbot dans votre application Node.js. Suivez ce guide pour apprendre à intégrer ChatGpt dans l'application JavaScript." 
url: /fr/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## rationalisez votre logiciel commercial en intégrant un chatbot viral basé sur GPT-3. Ce didacticiel Chatgpt montre les étapes d'intégration et l'extrait de code.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Intégrer le chatppt dans l'application JavaScript">}}


## Aperçu
Bonjour les lecteurs! Merci beaucoup pour votre réponse écrasante aux articles de blog que nous avons publiés sur [Chatgpt][1] intégrations. Nous sommes ici avec un autre tutoriel utile**Chatgpt**suivant votre intérêt. De plus, nous serons en boucle pour publier des articles bénéfiques pour vos universitaires et votre carrière. Cependant, nous avons commencé une [série][20] de tutoriels JavaScript, c'est donc le meilleur moment pour écrire un guide qui montre comment**intégrer le chatppt dans javascript aqpp**par programme. De plus, nous écrivons l'extrait de code pour faire de cette fonctionnalité**de chatbot viral basé sur GPT-3**. À cette fin, nous allons permettre la fonctionnalité ChatGpt dans une application Node.js. Par conséquent, un niveau de base de connaissance antérieure de Node.js est un plus tout en passant par ce guide.
Les sections suivantes seront couvertes dans ce tutoriel Chatgpt:
  * **[Pre-Requisites - CHATGPT JavaScript Wrapper][2]**
  * **[CHATGPT Intégration avec l'application Node.js][3]**

## Pre-Requisites - ChatGpt Javascript Wrapper   {# Pre-Requisites --- ChatGpt-Javascript-Wrapper-}
Cette section démontre les exigences nécessaires pour permettre l'intégration de ChatGpt dans une application basée sur Node.js. Les exigences sont simples et faciles à installer sur votre système.
Voici les pré-requises pour pratiquer cette intégration JavaScript Chatgpt:

 * [Nodejs4](>= 18)

 * [npm5](>=9)
Une fois les conditions préalables ci-dessus installées, l'étape suivante consiste à obtenir une clé API OpenAI. Cette clé est utilisée pour faire des demandes d'API au chatppt par programme. Par conséquent, veuillez visiter ce [lien][6] pour apprendre à obtenir la clé API OpenAI au cas où vous ne connaissez pas la procédure.
Veuillez garder votre clé API dans un endroit sûr et c'est tout pour la phase des exigences.

## Intégration ChatGpt avec l'application Node.js   {# ChatGpt-intégration-with-node.js-application}
Maintenant, nous sommes tous définis pour**intégrer le chatppt dans l'application JavaScript par programme.**Tout d'abord, ouvrez le terminal et exécutez la commande suivante:
```
npm i chatgpt
```
Lors de l'exécution réussie, suivez les étapes suivantes et l'extrait de code pour faire une demande au modèle GPT-3 pour interagir avec le chatppt par programme:
 * Importez le chatpptapi.
 * Initialisez le constructeur avec votre clé API OpenAI.
 * Invoquez la méthode SendMessage pour envoyer un message au modèle GPT-3 et recevez la réponse.
 * Affichez la réponse.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Copiez et collez l'extrait de code ci-dessus dans votre fichier de serveur principal et exécutez la commande suivante dans votre terminal:
```
node index.js
```
**Remarque**: veuillez ajouter ("Type": "Module",) dans votre fichier package.json au cas où vous obtenez une erreur "Impossible d'utiliser l'instruction d'importation à l'extérieur d'un module".
Vous pouvez voir la sortie dans l'image ci-dessous:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="tutoriel Chatgpt">}}

De plus, ce wrapper JavaScript Chatgpt vous permet de suivre les conversations et d'envoyer des messages de suivi. La seule chose que vous devez faire est de passer "ParentMessageId" dans le corps de la demande comme indiqué dans l'extrait de code ci-dessous:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
De même, vous pouvez explorer de nombreuses autres méthodes offertes [ici][7]. Cette intégration OpenAI Chatbot peut donner un avantage concurrentiel à votre application de niveau d'entreprise.

## Conclusion
Ce point nous amène à la fin de ce tutoriel**Chatgpt**. Nous espérons que vous avez appris à**intégrer le chatppt dans l'application JavaScript**par programme. De plus, vous avez l'extrait de code de travail que vous pouvez tester sur votre machine locale. Cet article de blog est un atout si vous êtes en plein essor pour apprendre**CHATGPT INTERGATION**Dans votre application Node.js.

## Connecte-toi avec nous
Enfin, [contenerize.com][8] écrit en continu des articles de blog sur différents sujets. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][9], [LinkedIn][10] et [Twitter][11].

## Poser une question
Vous pouvez nous informer de vos questions ou questions sur notre [Forum][12].

## FAQS
**Comment intégrer le chatppt avec JavaScript?**
Veuillez suivre ce chatppt [tutoriel][2] pour apprendre les étapes et l'extrait de code pour intégrer le chatppt dans l'application JavaScript par programme.

## Voir également
  * [Une introduction à l'intelligence artificielle | Qu'est-ce que AI?][13]
  * [Comment intégrer Chatgpt avec Google Sheets][14]
  * [Comment utiliser Chatgpt dans vscode | Le code d'extension VScode GPT][15]
  * [Qu'est-ce que le chatbot openai gpt-3 | Chatgpt une révolution AI][16]
  * [Google Docs Intégration avec Chatgpt | Openai GPT-3][17]
  * [Quels sont les 5 meilleurs cadres d'IA open source][18]
  * [Qu'est-ce que Generative Ai | Intelligence artificielle générative][19]

  
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
