---
title: "Comment automatiser la surveillance des applications Web dans Cachet" 
seoTitle: "Comment automatiser la surveillance des applications Web dans Cachet" 
description: "Cachet aide à surveiller tous vos services et à informer instantanément les abonnés. Cet article consiste à intégrer un plugin tiers pour automatiser la surveillance." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "La page d'état du cachet permet aux entreprises d'obtenir des notifications instantanées sur les temps d'arrêt du service. Nous apprendrons à automatiser la surveillance des applications Web dans Cachet." 
url: /fr/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## La page d'état du cachet permet aux entreprises d'obtenir des notifications instantanées sur les temps d'arrêt du service. Nous apprendrons à automatiser la surveillance des applications Web dans Cachet.

{{< figure align=center src="images/cachet-monitor.png" alt="Surveillance des applications Web">}}

Le suivi des applications et des services est une partie très importante des activités en ligne. Votre site Web s'exécute 24x7 et vous pouvez vous tromper à tout moment. Vous ne pouvez pas savoir que l'un ou l'autre site fonctionne ou non avant de le visiter. De plus, les clients n'auront aucune information sur le problème. Ils peuvent contacter votre équipe d'assistance pour les temps d'arrêt du service. De plus, cela pourrait conduire à vos clients déçus. Cependant, vous pouvez réduire les temps d'arrêt des services en configurant le système de page d'état. Le système de page d'état surveillera tous vos services 24h / 24 et envoie des notifications à votre équipe et à vos clients immédiatement. Cela vous permettra de prendre des mesures rapides pour résoudre le problème et les clients se tiendront à jour sur les progrès. Dans cet article de blog, vous apprendrez à apprendre à intégrer la bibliothèque tierce avec ** cachet ** pour ** Automatiser la surveillance **.
  * [Exigences] [1]
  * [Plugin de surveillance de configuration] [2]
  * [Création du service Linux] [3]
  * [Conclusion] [4]

## exigences {#Requirements}
  * Installez la dernière version du cachet.
  * Familier avec les services Linux.

## Plugin de surveillance de configuration {#Plugin}
Voici les étapes à installer et à configurer le plugin pour la surveillance sur Ubuntu.
  * Télécharger le binaire depuis [page de version] [5].
  * Renommez le fichier à Cachet-Monitor.
  * Faites le fichier exécutable avec la commande.
```
sudo chmod +x cachet-monitor
```
  * Mettez l'exécutable dans un répertoire de chemin, afin que vous puissiez y accéder directement via le terminal. Donc, je vous suggère de vous déplacer sous ** / usr / local / bin **.
  * Créez un fichier config.json en exécutant la commande suivante.
```
sudo nano config.json
```
  * Copiez le code ci-dessous et enregistrez le fichier.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Maintenant, testez votre configuration avec cette commande.
```
cachet-monitor -c config.json
```
  * Si tout fonctionne bien, passez à la section suivante et créez un service Linux.

## Création du service Linux {#Service}
Voici les étapes pour créer et démarrer un service Linux pour automatiser le processus de surveillance.
  * Créez un service ** Cachet-Monitor.Service ** Fichier.
```
sudo nano cachet-monitor.service
```
  * Copiez le code ci-dessous et enregistrez le fichier.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Mettez à jour la configuration SystemD en exécutant la commande.
```
sudo systemctl daemon-reload
```
  * Activez le service Cachet-Monitor en exécutant la commande, afin qu'il puisse se charger sur le démarrage du système.
```
sudo systemctl enable cachet-monitor.service
```

## Conclusion {#conclusion}
Le cachet A est gratuit et ** Page d'état open source ** Système. Cependant, il ne fournit pas la fonction hors de la boîte pour ** la surveillance des applications Web **. Au lieu de cela, il a une puissante API REST qui peut être utilisée pour effectuer des actions telles que des incidents, des composants, des groupes et bien d'autres. Dans cet article, nous avons utilisé le plugin tiers pour automatiser la surveillance des applications dans Cachet. Surtout, vous pouvez développer votre propre plugin ou utiliser tout autre plugin existant pour faire le travail.
De plus, [contenerize.com] [6] est en route pour améliorer la pile de produits open source dans plusieurs langues et cadres. Pour les mises à jour régulières, veuillez rester à l'écoute de la catégorie [de statut] [7] pour des articles plus intéressants.

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Meilleurs systèmes de page d'état open source] [8]
  * [Cachet - Logiciel de page d'état gratuit et open source] [9]
  * [Top 5 du logiciel d'état open source pour 2020] [10]
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
