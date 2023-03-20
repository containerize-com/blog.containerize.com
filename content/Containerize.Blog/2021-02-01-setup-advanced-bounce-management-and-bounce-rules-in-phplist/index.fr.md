---
title: "Configurer les règles avancées de gestion et de rebond de rebond dans le phplist" 
seoTitle: "Configurer les règles avancées de gestion et de rebond de rebond dans le phplist" 
description: "Activer la gestion avancée du rebond dans PHPList et gérer les e-mails de rebond. Créez des règles de rebond et automatiser le processus pour prendre diverses mesures sur les messages retournés." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Selon le type de code d'erreur de rebond qui est renvoyé par le MTA, Advanced Bounce Management permet l'exécution automatisée de différentes actions." 
url: /fr/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## Selon le type de code d'erreur de rebond qui est renvoyé par le MTA, Advanced Bounce Management permet l'exécution automatisée de différentes actions.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Configurer les règles avancées de gestion et de rebond de rebond dans le phplist">}}

Dans notre tutoriel [précédent][1], nous avions déjà abordé ** phplist Bounce Traitement **. Si vous n'êtes pas familier avec le traitement du rebond, vous pouvez le lire. Vous pouvez télécharger des e-mails non livrés sur votre projet PHPLIST en utilisant le traitement de Bounce. Comment gérez-vous les e-mails téléchargés? Aucune idée, jetons un coup d'œil à la gestion d'avance du rebond qui vous permet de trier ** Bounce e-mails **. Chaque e-mail retourné a un code d'erreur renvoyé par le MTA (agent de transfert de courrier). De plus, vous pouvez consulter l'en-tête de messagerie du message renvoyé et il contient toutes les informations le long du code d'erreur.
  * [Activer la manipulation avancée du rebond][2]
  * [Ajouter une règle de rebond][3]
  * [Liste des règles de rebond][4]
  * [Conclusion][5]

## Activer la manipulation avancée du rebond {#Enable}
Tout d'abord, activez Advanced ** Bounce Handling ** en copie ci-dessous le code dans le fichier config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Après cela, accédez à ** System> Gérer les rebonds> Règles de rebonds de liste ** pour créer des règles de rebond.
Vous pouvez créer des règles de rebond basées sur des expressions régulières. Vous pouvez trouver la raison pour laquelle ** Bounce e-mail Bounce ** dans l'en-tête et l'utiliser pour une expression régulière. De plus, sélectionnez les actions appropriées en fonction du code d'erreur ou de l'expression régulière. PHPList soutient les actions suivantes. La déclaration d'action est explicite, nous n'avons donc pas besoin d'aller en détail.
  * Supprimer l'abonné
  * Abonné non confirmé
  * Abonné à liste noire
  * Adresse e-mail de liste noire
  * Supprimer l'abonné et rebondir
  * Abonné non confirmé et supprimer le rebond
  * Ajouter l'abonné à la liste Do-Not-Send et supprimer le rebond
  * Ajouter une adresse e-mail à la liste Do-Not-Send et supprimer le rebond
  * Supprimer le rebond

## Ajouter une règle de rebond {#add}
Créons notre première règle de rebond.
  * Tout d'abord, entrez l'expression régulière comme ** (le compte a été suspendu | Compte non disponible) **
  * Après cela, sélectionnez une action appropriée
  * Enfin, ajoutez la note / mémo pour la règle

{{< figure align=center src="images/add-bounce-rule.png" alt="Créer une règle de rebond dans phplist">}}

Vous pouvez ajouter des règles de rebond pour les raisons suivantes et sélectionner l'action appropriée pour gérer les rebonds. Cependant, vous pouvez rechercher des réponses SMTP et ajouter plus de règles à la liste.
  * Récipiendaire archivé
  * type = mx: hôte introuvable
  * Désolé, il n'y a pas de boîte à lettre à ce nom
  * Boîte aux lettres désactivée
  * le compte est désactivé
  * Cette boîte aux lettres a été bloquée en raison de l'inactivité
  * Utilisateur inconnu
  * Aucun récipiendaire de ce type
  * et ainsi de suite …
** Remarque: ** Vous devez envelopper la raison de rebond entre parenthèses et utiliser le symbole de tuyau ** | ** ou ** ou ** instruction, si vous souhaitez ajouter plusieurs raisons dans une règle de rebond.

## Liste des règles de rebond {#List}
Après avoir créé le nombre de règles, vos ** règles de rebond ** Liste ressemblera à la capture d'écran ci-dessous. Vous pouvez effectuer d'autres actions telles que les changements de commande et la suppression sur cette page.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Liste des règles de rebond">}}


## Conclusion {#conclusion}
Dans ce didacticiel, nous avons appris la gestion avancée ** Bounce ** et développé les règles de rebond nécessaires. Ce serait formidable de permettre cette fonctionnalité afin que vous puissiez automatiser le processus de nettoyage des adresses e-mail non valides à partir de vos listes. Cela vous permettrait également de maintenir le niveau minimum des e-mails retournés. De plus, vos listes auront des abonnés légitimes.
De plus, [contenerize.com][6] est en route pour améliorer la pile de produits open source dans plusieurs langues et cadres. Pour les mises à jour régulières, veuillez rester à l'écoute de la catégorie [Newsletters][7] pour des articles plus intéressants.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [PHPLIST - Newsletter open source et logiciel de marketing par e-mail][8]
  * [Comment créer et envoyer une newsletter à l'aide de phplist][9]
  * [Comment configurer et traiter les rebonds dans phplist][1]
  * [Guide des débutants pour développer un plugin phplist][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
