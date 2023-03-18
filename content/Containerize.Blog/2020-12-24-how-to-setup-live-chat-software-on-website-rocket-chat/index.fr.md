---
title: "Comment configurer le logiciel de chat en direct sur le site Web | Fusée.Chat" 
seoTitle: "Comment configurer le logiciel de chat en direct sur le site Web | Fusée.Chat" 
description: "Rocket.Chat est facile à installer, aide les équipes et les clients à communiquer efficacement. Ce logiciel de chat en direct est open-source, multiplateforme et auto-hébergé." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Le logiciel de support de chat en direct apporte la commodité et l'efficacité dans la prestation du support client. Apprenons à installer Rocket.Chat sur le site Web de votre entreprise." 
url: /fr/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Le logiciel de support de chat en direct apporte la commodité et l'efficacité dans la fourniture du support client. Apprenons à installer Rocket.Chat sur le site Web de votre entreprise.

{{< figure align=center src="images/rocketchat-1.png" alt="Logiciel de chat en direct">}}


## Aperçu
Nous avons publié quelques articles de blog liés à des logiciels de chat en direct open source tels que [les 5 meilleurs logiciels de chat de support client gratuit pour le site Web] [1], [WordPress Messagerie instantanée à l'aide de Rocket.Chat] [2], et d'autres. Dans cet article de blog, nous passerons par le premier logiciel de support client Rocket.Chat. Avec l'énorme augmentation du trafic en ligne, les entreprises ont du mal à divertir un grand nombre de demandes de renseignements sur les temps. Les visiteurs viennent sur votre site, ont tendance à acquérir des informations relatives aux produits ou services et à quitter votre site en cas de réception sans réponse. Par conséquent, le support de chat en direct vous aide à saluer vos clients de manière proactive pendant qu'ils vivent votre site Web. Ou, au cas où ils ont besoin d'aide et de clarification pour prendre leurs décisions d'achat.
Le support de chat en direct augmente vos chances de convertir un visiteur en client. Il y a beaucoup de softwar de support de chat en direct Open ** disponibles. Mais, Rocket.Chat a gagné beaucoup d'attraction en raison de ses caractéristiques. Et il est traité comme une alternative aux logiciels de chat de pointe comme Slack et Microsoft Team. Dans cet article, nous apprendrons à installer Rocket.Chat sur un serveur, puis à le configurer sur votre site Web. Alors, commençons par couvrir les points suivants.
  * [** Qu'est-ce que Rocket.cha ** t?] [3]
  * ** [Comment installer Rocket.Chat?
  * ** [Activer la fonction de chat en direct] [5] **
  * ** [Installez le widget de chat en direct sur votre site Web] [6] **
  * ** [Conclusion] [7] **

## Qu'est-ce que Rocket.Chat {#intro}
[Rocket.Chat] [8] fait partie du populaire ** Logiciel de chat en direct **. Il a une version de chat en direct gratuite en tant qu'édition communautaire ainsi qu'une version de chat en direct hébergée payée pour les grandes entreprises avec des fonctionnalités de chat internes privées. Rocket.Chat prend en charge le support client de chat en direct avec la fonctionnalité de chat d'équipe. Il est multiplateforme et offre également une prise en charge de presque toutes les plates-formes populaires telles que Windows, Mac, Linux et les applications mobiles. Ce ** logiciel de support client ** est sécurisé, extensible et offre une intégration avec des applications populaires tierces telles que Trello, Google Drive, etc. Il existe de nombreuses fonctionnalités puissantes que Rocket.Chat propose telles que plusieurs chambres, salles de discussion privées et groupes, notifications, emojis, authentification LDAP et interface reposante. De plus, cet outil gratuit est facile à déployer et est livré avec des capacités d'auto-hébergement. De plus, il propose une interface logique et conviviale où les utilisateurs peuvent modifier les thèmes tels que sombre, clair ou noir.
Ce ** logiciel de support de chat ** est écrit en JavaScript, toute la documentation est disponible concernant le développement et le déploiement. Par conséquent, vous pouvez trouver tout le code source sur [github] [9]. Pour plus de détails, vous pouvez lire sur Rocket.Chat [ici] [10].

## Comment installer Rocket.Chat {#install}
Donc, nous savons ce qu'est Rocket.Chat et dans cette section, nous apprendrons à installer ce logiciel de chat en direct. Vous pouvez installer Rocket.Chat à partir d'une variété de marchés, comme les snaps Ubuntu, DockerHub ou l'installer sur votre propre serveur. Dans cet article, nous nous concentrerons sur l'installation de Rocket.Chat via des clichés sur Ubuntu. Qui est la méthode d'installation la plus rapide.
Les clichés sont sécurisés. Rocket.Chat et toutes ses dépendances sont isolées du reste de votre système. Snaps a également automatiquement la mise à jour lorsqu'il y a une nouvelle version.
Sur Ubuntu d'abord, installez Snap avec la commande suivante
```
sudo apt-get install snapd
```
Installez ensuite Rocket.Chat Server via la commande SNAP.
```
sudo snap install rocketchat-server
```
Snap est déjà opérationnel. Parcourez Http: // LocalHost: 3000 et configurez Rocket.Chat. Vous pouvez configurer le proxy Nginx pour mapper l'instance Rocket.chat avec votre domaine.

## Activer la fonction de chat en direct {#Enable}
Une fois que le logiciel Rocket.Chat est installé et configuré, l'étape suivante consiste à activer ses fonctionnalités. Cette section du billet de blog décrit comment activer ** le logiciel de support de chat ** sur votre site Web. Pour activer la fonction LiveChat sur votre fusée.
1. Allez à ** Administration **

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Administration">}}

2. Recherchez ‘** omnicanal **‘ In ** Paramètres ** et activez-le.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Search Omini">}}

Une fois activé, un administrateur aura accès aux paramètres du panneau omnicanal via un nouveau menu appelé omnicanal dans le menu déroulant du coin supérieur gauche.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Channel d'omini rocket.Chat">}}

Puis configurer l'aspect et la sensation du widget de chat en direct

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="widget livechat de fusée.Chat">}}


## ** Installez le widget de chat en direct sur votre site Web ** {#Widget}
Dans cette section, nous installerons des widgets de chat en direct sur le site Web de l'entreprise. Maintenant, pour accéder à ** Installation livechat ** Paramètres:
Accédez à ** Installation LiveChat ** dans les paramètres du panneau omnicanal, comme indiqué ci-dessous, et copiez le morceau de code donné.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="widget de fusée.Chat">}}

Et collez ce code au-dessus de la dernière balise de votre site; Le widget de chat en direct apparaîtra dans le coin inférieur droit de votre page Web. Comme indiqué ci-dessous selon vos configurations de chat en direct.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Logiciel de chat en direct">}}

{{_LINE_48_}}

## Conclusion {#conclusion}
Cela nous amène à la fin de ce billet de blog. Dans cet article, nous avons parcouru ce qui est Rocket.Chat, comment installer Rocket.Chat et nous vous avons également montré comment l'installer sur votre propre serveur via des snaps Ubuntu. Nous avons également appris à activer la fonction de chat en direct et à installer le widget sur votre site Web. De plus, ** Le logiciel de support client ** est devenu un composant incontournable de tout site Web d'entreprise en raison de certains facteurs dont nous avons discuté ci-dessus. Cependant, ce billet de blog vous aidera vraiment si vous cherchez à déployer un logiciel de chat en direct open source sur le site Web de votre entreprise. De plus, il existe de nombreux autres logiciels de support de chat ** et des articles disponibles dans la section «Explorer» ci-dessous que vous pouvez consulter.
Enfin, [** contenerize.com **] [11] écrit des articles sur d'autres applications de chat open source **. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook] [13], [LinkedIn] [14] et [Twitter] [15].

## Explorer
Vous pouvez trouver les liens suivants pertinents.
  * [Zulip] [16]
  * [Lets-chat] [17]
  * [Botpress] [18]
  * [Comment créer un bot FAQ basé sur l'IA pour votre entreprise à l'aide de BotPress] [19]
  * [Top 5 du logiciel de chat de support client gratuit pour le site Web] [1]
  * [WordPress Messagerie instantanée à l'aide de Rocket.Chat] [2]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source] [20]
  * [Comment créer et exécuter un bot dans Rocket.Chat à l'aide de BotPress] [21]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source] [20]
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
