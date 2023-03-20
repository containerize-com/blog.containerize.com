---
title: "Un guide étape par étape pour configurer la rencontre jitsi open source" 
seoTitle: "Un guide étape par étape pour configurer la rencontre jitsi open source" 
description: "Apprenez à mettre en place Jitssi Meet. Il s'agit d'un logiciel de vidéoconférence open source conçu pour répondre aux besoins de communication distante et offre des fonctionnalités puissantes" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet rassemble des personnes éloignées pour mener des réunions efficaces. Apprenons à configurer ce logiciel de conférence vidéo et à explorer ses fonctionnalités" 
url: /fr/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet rassemble des personnes éloignées pour mener des réunions efficaces. Apprenons à configurer ce logiciel de conférence vidéo et à explorer ses fonctionnalités

{{< figure align=center src="images/jitsi-bannerF.png" alt="logiciel de vidéoconférence">}}


## Aperçu
Nous avons récemment publié un [article de blog][1] qui parle de l'impact du [logiciel de vidéoconférence][2] sur le secteur des entreprises. Cependant, dans cet article, nous couvrirons les points suivants.
  * [Une brève introduction de Jitssi Meet][3]
  * [Comment configurer Jitssi Meet?][4]
  * [Jitssi Meet Features Exploration][5]
  * [Conclusion][6]

## Une brève introduction de Jitssi Meet {#intro}
[Jitsi Meet][7] est un logiciel de collaboration vidéo open source, sécurisé et évolutif entièrement gratuit. Il fournit plusieurs fonctionnalités populaires telles que la conférence vidéo multipartite avec un chiffrement complet, une prise en charge de Etherpad et un enregistrement vidéo / audio. Ce logiciel compatible WeBrTC vous permet d'inviter autant d'utilisateurs que vous le souhaitez dans une réunion vidéo.
La montée des réunions virtuelles a commencé ces derniers temps et les gens croient que la communication via des appels vidéo / audio est plus efficace et collaborative. Surtout, cette catégorie de logiciels fonctionne non seulement sur les ordinateurs portables / ordinateurs de bureau, mais permet également aux participants d'assister à des réunions vidéo sécurisées en face à face via leur téléphone mobile.

## Comment configurer Jitssi Meet? {#installation}
Dans cette section, nous allons entrer dans le processus d'installation de Jitssi Meet. Tout d'abord, assurez-vous d'avoir installé la pré-requis suivante.
  * [Docker][8]
Une fois Docker installé, téléchargez le fichier zip du code source à partir de ce [lien][9].
Ouvrez le terminal et exécutez la commande suivante
`cd docker-jitsi-meet`
Après cela, exécutez la commande suivante pour créer un `.env`
`cp env.example .env`
Maintenant, exécutez la commande suivante pour créer les répertoires requis.
`Mkdir -p ~ / .jitsi-meet-cfg / {web / lesencrypt, transcripts, prosody / config, prosody / prosody-Plugins-custom, jicofo, jvb, jigasi, jibri}`
Enfin, exécutez cette commande pour faire tourner l'image Docker et accéder à l'application sur cette URL dans le navigateur.
`docker-compose up -d`

## Jitsi Meet Features Exploration {#Features}
Ce logiciel de chat vidéo gratuit offre de nombreuses fonctionnalités riches. Il s'agit de la page d'accueil qui sera présentée en premier.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="vidéo conférence">}}

Tapez la légende de la réunion et appuyez sur «GO» et vous atterrirez à la fenêtre du flux vidéo suivant.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="logiciels open source">}}

Vous pouvez inviter des gens à la réunion en partageant le lien indiqué dans la fenêtre contextuelle. De plus, vous pouvez intégrer le flux vidéo n'importe où en obtenant le code.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="logiciels open source">}}

Il vous donne une option pour partager votre écran avec d'autres participants.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Chat vidéo">}}

Dans le coin supérieur droit, vous pouvez voir les détails de votre connexion vidéo.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Chat vidéo gratuit">}}

Jitsi Meet propose un chat intégré avec les emojis.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Logiciel de réunion vidéo">}}


## Conclusion {#con}
Dans cet article, nous avons parcouru un superbe logiciel de communication à distance et son processus d'installation. De plus, il est grand temps d'opter pour les meilleures solutions pour synchroniser les besoins de l'entreprise avec l'évolution des technologies. En fin de compte, [contenerize.com][10] a travaillé pour étendre la liste des logiciels de vidéoconférence. Par conséquent, veuillez rester connecté avec la catégorie [logiciel de conférence vidéo][2] pour les mises à jour régulières.

## Pages de produits pertinents
Vous pouvez trouver les liens suivants pertinents:
  * [Jitssi se rencontre][7]
  * [Bigbluebutton][11]
  * [Openvidu][12]
  * [Élément][13]
  * [Fil][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
