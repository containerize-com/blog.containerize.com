---
title: "Comment installer HospitalRun | Système de gestion hospitalière" 
seoTitle: "Comment installer HospitalRun | Système de gestion hospitalière" 
description: "Cet article vous aide à installer HospitalRun sur localhost. Automatiser les processus médicaux à l'aide d'un système de gestion hospitalier gratuit et open-source." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Solution de santé auto-hébergée pour faciliter les cliniciens et les patients. Apprenons à déployer GRATUIT Hospitalrun sur le localhost en suivant les étapes simples." 
url: /fr/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Solution de santé auto-hébergée pour faciliter les cliniciens et les patients. Apprenons à déployer GRATUIT Hospitalrun sur le localhost en suivant les étapes simples.

{{< figure align=center src="images/hospitalrun.png" alt="Système de gestion hospitalière">}}


## Aperçu
Nous avons récemment publié un article de blog sur [Comment les logiciels de soins de santé en ligne autorisent l'industrie des soins de santé][1] qui décrit l'impact du système de gestion hospitalier open source sur l'industrie des soins de santé. L'industrie mondiale des logiciels de santé gagne en valeur avec le temps. En fait, c'est que la technologie a transformé tous les domaines de la vie. Le nombre de patients et de membres du personnel est devenu si haut qu'il est devenu un problème pour gérer de telles données énormes. D'un autre côté, il existe de nombreuses tâches qui prennent du temps qui ont lieu tous les jours et les entités de santé effectuent à plusieurs reprises ces tâches. Par conséquent, la communauté des sources open source a développé des logiciels médicaux open source qui accompagnent de nombreux modules utiles pour répondre aux besoins en soins de santé.
Des logiciels médicaux open source sont développés pour gérer les dossiers des patients concernant leurs antécédents médicaux ainsi que les dispositions de gestion hospitalière. De plus, les logiciels de santé open source tirent parti de l'intelligence artificielle pour fournir des niveaux avancés de services. La plupart des traitements de la maladie sont désormais gérés par le logiciel qui non seulement diagnostique les problèmes mais fournit également une assistance dans la guérison. Cependant, il existe de nombreux logiciels émergents pour les hôpitaux. Dans cet article de blog, nous couvrirons les points suivants.
  * [**Qu'est-ce que l'hôpital?** ][2]
  * [**Quelles sont les caractéristiques de Hospitalrun** ][3]
  * [**Étapes d'installation de Hospitalrun?** ][4]
  * [**Conclusion** ][5]

## Qu'est-ce que Hospitalrun?   {#intro}
Hospitalrun est un système gratuit de gestion de l'information hospitalière open source. Cette solution de soins de santé gratuite est respectueuse de l'environnement car les utilisateurs peuvent utiliser pleinement ce logiciel libre même s'il n'y a pas de connectivité Internet. Il fournit de nombreuses fonctionnalités telles que la gestion des utilisateurs, les inscriptions des patients, les rendez-vous, le système de facturation, le système de sortie des patients, etc. L'interface utilisateur de ce système eHealth open source est logique où les utilisateurs peuvent facilement parcourir différents éléments. De plus, il est facile à configurer et propose une image Docker où les développeurs peuvent le déployer à l'aide d'une image Docker.
Ce **Système de gestion des hôpitaux**  offre une disposition pour intégrer des laboratoires pour centraliser les dossiers médicaux du patient. De plus, il permet également aux utilisateurs de maintenir des enregistrements sur les visites, les médicaments et les évaluations des patients. Ce système d'enregistrement de la santé est sécurisé, flexible et offre des intégrations avec des applications tierces. Il existe une communauté très dynamique qui fournit un soutien à Hospitalrun. De plus, il existe un système complet de sortie du patient. Ce logiciel médical open source est complètement écrit en JavaScript. De plus, il existe une documentation complète sur le développement et le déploiement. En fait, ce logiciel médical open source fournit différents tableaux de bord pour différents départements tels que le service d'assistance, le service clinique et le service administratif. Tous ces rôles sont livrés avec différents niveaux d'autorisation et d'accès.

## Quelles sont les caractéristiques de Hospitalrun?   {#caractéristiques}
Dans cette section, nous passerons par certaines des caractéristiques clés suivantes de ce système de santé.
  * **auto-hébergé** : HospitalRun est livré avec des capacités d'auto-hébergement et nécessite moins d'efforts pour se déployer sur les serveurs.
  * **Planification des rendez-vous** : Ce système de santé permet aux utilisateurs de planifier des rendez-vous. Il existe un module complet pour les rendez-vous disponibles sur le tableau de bord. De plus, les utilisateurs peuvent rechercher les rendez-vous à l'aide de filtres.
  * **Système de sortie du patient** : Ce système de gestion hospitalier maintient le dossier des patients qui ont été libérés.
  * **Gestion des médicaments** : Ce système d'enregistrement de la santé permet aux utilisateurs d'enregistrer des données complètes de médicaments d'un patient particulier.
  * **Gestion des dossiers des patients** : Il existe un module complet pour la gestion des enregistrements des patients. Les utilisateurs peuvent enregistrer les détails de nouveaux patients, admis aux patients contre leurs antécédents médicaux complets tels que la médecine, les rapports et les visites.
  * **Système de facturation personnalisé** : Il existe un riche système de facturation disponible dans ce logiciel de santé open source. Il permet aux utilisateurs de générer et de gérer les factures avec des détails complets tels que les prix de laboratoire, les frais de service, les prix d'imagerie, etc.
  * **Dossiers médicaux électroniques** : Ce logiciel médical open source fournit tous les modules nécessaires pour maintenir les dossiers médicaux et administratifs.
  * **Flexible** : HospitalRun est suffisamment flexible et suffisamment extensible pour que les développeurs puissent étendre sa fonctionnalité pour répondre aux fonctionnalités nécessaires.

## Étapes d'installation de HospitalRun?   {#pas}
Cette section du billet de blog décrit les étapes d'installation de Hospitalrun.
Avant de commencer, installez d'abord les pré-requis suivants:
  * [Docker][6]
  * [Docker-compose][7]
Une fois les pré-réquisites installées, téléchargez le code source à partir de ce [lien][8].
Après cela, ouvrez le terminal et exécutez les commandes suivantes:
CD générique
serveur de CD
Maintenant, modifiez le mot de passe sur la ligne 8,9 de \ `conf / initCouch.sh \` et le mot de passe de la ligne 7 de _config-demo.js_.
Ensuite, exécutez la commande suivante pour créer et exécuter l'application:
_docker-compose build && docker-compose up_
Après cela, il fera tourner le conteneur Docker comme indiqué dans l'image ci-dessous:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Système de gestion hospitalière">}}

Enfin, vous pouvez accéder à cette solution de soins de santé dans le navigateur de http: // localhost / # / connexion. Il affichera l'écran de connexion suivant.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Système de gestion hospitalière">}}


## Conclusion   {#conclusion}
Ceci est la fin de cet article de tutoriel. Ce système de dossier de patients aide vraiment à automatiser **les services de santé** . Le système de gestion hospitalier open source moderne est livré avec des outils d'analyse de données qui aident les travailleurs de la santé à prendre les mesures nécessaires pour de meilleurs établissements de santé. Ce billet de blog vous aidera vraiment si vous cherchez sérieusement à déployer un système de santé pour votre hôpital / clinique. Ces solutions open source sont rentables car elles sont intégrées aux laboratoires et autres cliniques et minimisent également les documents en informatisant chaque processus. Open Source Healthcare Solution permet aux utilisateurs d'avoir des visuels de toutes les opérations de santé telles que les médicaments, la sortie, les rapports des patients et la gestion de facturation. De plus, vous pouvez vous concentrer sur d'autres tâches importantes telles que la planification des ressources et l'évaluation des risques. Cependant, il existe de nombreux autres logiciels de niveau d'entreprise pour les hôpitaux qui sont mentionnés dans la section «Explorer» ci-dessous.
En fin de compte, ****[contenerize.com][9] ****  est destiné à écrire sur d'autres produits open source. Par conséquent, restez en contact avec cette catégorie [Healthcare Technologies][10] pour les dernières mises à jour.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [OpenEMR][11]
  * [OpenMRS][12]
  * [Hospitalrun][13]
  * [Hôpital ouvert][14]
  * [Solismed][15]
  * [Choses à revoir avant d'opposer un logiciel open source en 2021][16]
  * [Fonctionne l'exploration du gestionnaire de dossiers médicaux Hospitalrun][17]
  * [Top 5 du logiciel de dossier de santé des patients open source][18]
  * [Fonctionne l'exploration de la solution de santé médicale OpenEMR][19]
  * [Comment mettre en place un système de santé hospitalier sur localhost][20]
  * [Comment les logiciels de soins de santé en ligne autorisent l'industrie des soins de santé][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/fr/how-to-install-hospitalrun-hospital-management-system/
