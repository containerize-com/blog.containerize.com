---
title: "Comment configurer et traiter les rebonds dans phplist" 
seoTitle: "Comment configurer et traiter les rebonds dans phplist" 
description: "PHPLIST est une puissante liste de diffusion auto-hébergée et le gestionnaire de newsletter. Il aide les entreprises à envoyer facilement des campagnes de newsletter et de traiter les rebonds facilement." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Envoyez une campagne avec un logiciel de newsletter en open source et de marketing par e-mail. Configurer la gestion du rebond dans PHPLIST et Automatiser le traitement du rebond pour les listes de diffusion saines." 
url: /fr/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Envoyer une campagne avec un logiciel de newsletter et de marketing par e-mail. Configurer la gestion du rebond dans PHPLIST et Automatiser le traitement du rebond pour les listes de diffusion saines.

{{< figure align=center src="images/phplist-2.png" alt="Le processus rebondit phplist">}}

Nous avons écrit des articles pour la mise en œuvre de [multi-location] [1] et [la campagne de newsletter] [2] dans PHPList. Dans cet article, nous couvrirons ces points en détail sur les rebonds de processus dans PHPLIST.
  * [Qu'est-ce que Phplist?] [3]
  * [Qu'est-ce que le rebond?] [4]
  * [Configuration de la gestion du rebond] [5]
  * [Comment traiter les rebonds?] [6]
  * [Conclusion] [7]

## Qu'est-ce que Phplist? {#phplist}
PHPLIST est un logiciel d'envoi de newsletter gratuit et open source le plus populaire. PHPLIST permet aux entreprises d'envoyer des e-mails marketing, des mises à jour de produits et des annonces aux abonnés. Il aide les entreprises à gérer la liste, à concevoir une belle newsletter, une campagne de planification et une gestion de rebond. [Lire la suite] [8]

## Qu'est-ce que le rebond? {#rebondir}
Un rebond est un e-mail qui ne peut pas être livré pour le nombre de raisons et le retour à l'expéditeur. Nous pouvons avoir des raisons telles que la boîte aux lettres est complète, l'adresse e-mail n'est plus valide ou une adresse e-mail incorrecte. Pour cette raison, vous devez traiter les rebonds afin que vous n'envoyez pas de courriels à des adresses e-mail non valides.

## Configuration Bounce Management {#SetUp}
Afin de configurer la gestion du rebond, vous devez configurer les paramètres suivants dans le fichier config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="PHPLIST - Gestion du traitement du rebond">}}

Nous expliquerons dans les étapes ci-dessous davantage sur ces configurations.
  * Tout d'abord, vous devez ajouter une adresse e-mail où vous souhaitez recevoir des messages de rebond. Vous pouvez trouver la variable ** Message_envelope ** et ajouter votre adresse e-mail.
  * PHPLIST peut récupérer les e-mails à partir de la boîte aux lettres de rebond via deux protocoles, ** Mbox et POP3 **. Alors, trouvez ** Bounce_protocol ** Variable et modifiez-le selon votre environnement.
  * Si vous avez défini ** Mbox ** PrototCol, vous devez définir le format de fichier pour lui. Donc, recherchez ** Bounce_mailbox ** et définissez le chemin comme «/ var / spool / mail / listbouns».
  * Dans le cas où vous avez utilisé le protocole ** POP3 **, vous devez configurer ** hôte, nom d'utilisateur et mot de passe ** pour la boîte aux lettres. Vous pouvez voir ces réglages ci-dessus Sreenshot.
  * En plus des paramètres ci-dessus du protocole ** POP3 **, vous devrez peut-être ajouter le port et le cryptage.

## Comment traiter les rebonds? {#processus}
PHPLIST prend en charge deux méthodes pour les rebonds de processus: manuelle et automatisée. Vous devrez créer un travail CRON pour automatiser le traitement de rebond. Vous pouvez également traiter manuellement les rebonds en visitant ** Système> Boucles de processus ** Page. Par conséquent, vous devez d'abord modifier ** manuellement \ _process \ _bouces ** Paramètres en fonction de vos exigences. Vous pouvez visiter [PHPLIST DOCS] [9] pour configurer Cron Job pour les rebonds de processus.

## Conclusion {#conclusion}
Dans cet article, nous avons appris à configurer l'adresse e-mail de rebond et les rebonds de processus. Vous pouvez facilement traiter les rebonds avec la méthode manuelle, si vous avez moins de quantité d'abonnés. Cependant, vous devez utiliser le processus de manutention de Bounce pour automatiser pour les grandes listes. Cela gagnera votre temps et vous aidera à créer des listes d'abonnés propres et valides.
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
