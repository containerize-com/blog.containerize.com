---
title: "Comment utiliser nginx comme équilibreur de charge pour votre application" 
seoTitle: "Comment utiliser nginx comme équilibreur de charge pour votre application" 
description: "Nginx est un serveur Web open source populaire. Il est bien connu pour les performances élevées et l'évolutivité. Dans ce tutoriel, nous apprendrons à utiliser Nginx comme équilibreur de charge" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx est populaire pour ses performances élevées et son évolutivité. Il s'agit du serveur Web open source n ° 1. Dans ce tutoriel, nous apprendrons à utiliser Nginx comme équilibreur de charge." 
url: /fr/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx est populaire pour ses performances élevées et son évolutivité. Il s'agit du serveur Web open source n ° 1. Dans ce tutoriel, nous apprendrons à utiliser Nginx comme équilibreur de charge.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Comment utiliser nginx comme équilibreur de charge">}}

Les sites Web modernes à haut trafic servent des centaines de milliers et, dans certains cas, des millions de demandes simultanées d'utilisateurs ou de clients et renvoient les données de texte, d'images, de vidéo ou d'applications correctes, le tout de manière rapide et fiable. Pour répondre aux besoins de ces volumes élevés et une puissance de calcul, vous avez besoin de plus de serveurs. Avec plus de serveurs, vous avez besoin d'un moyen d'équilibrer le trafic entre ces serveurs. Dans ce didacticiel de blog, nous explorerons ce qu'est un équilibreur de charge et comment nous pouvons utiliser Nginx comme équilibreur de charge.
Pour configurer l'équilibrage de la charge de Nginx en tant que condition préalable, vous devrez avoir au moins deux hôtes avec un logiciel de serveur Web installé et configuré pour voir les avantages de l'équilibrage de charge avec Nginx. Si vous avez déjà une configuration d'hôte Web en cours d'exécution, dupliquez-la en créant une image personnalisée et en le déploie sur un nouveau serveur Web. Alors, apprenons comment configurer l'étape par étape de la configuration d'équilibrage de la charge de charge Nginx pour vos serveurs cloud.!
  * **[Ninx Web Server][1]** 
  * **[Balancer de charge][2]** 
  * **[Configuration nginx comme équilibreur de charge (Round Robin)][3]** 
  * **[sur différentes directives en amont][4]** 
  * **[Conclusion][5]** 

## Serveur Web Nginx {#webserver}

Nginx est un serveur Web open-source haute performance. En plus de ses capacités de serveur HTTP, Nginx peut également fonctionner comme un serveur proxy pour l'e-mail (IMAP, POP3 et SMTP) et un proxy inverse et pour équilibrer le NGINX pour les serveurs HTTP, TCP et UDP. Il améliore les performances, la fiabilité et la sécurité de vos applications. Il est populaire pour son ensemble de fonctionnalités riches, sa configuration simple et sa faible consommation de ressources.
Comment fonctionne Nginx? Nginx est couramment utilisé comme un équilibreur de charge proxy inversé NGINX comme point d'entrée unique à une application Web distribuée fonctionnant sur plusieurs serveurs distincts. Il utilise une approche asynchrone et axée sur des événements pour offrir une faible utilisation de la mémoire et une concurrence élevée. Vous pouvez en savoir plus sur Nginx [ici][6].

## Équilibreur de charge {#loadbalancer}

L'équilibrage de charge est le processus de distribution du trafic réseau sur plusieurs serveurs. Et le «logiciel» ou «matériel» qui effectue ce processus de distribution est appelé équilibreur de chargement. Un équilibreur de charge est comme un «flic de la circulation» devant vos serveurs et les demandes du client de routage sur tous les serveurs. Il garantit que votre demande reste opérationnelle même si l'un des serveurs baisse.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx comme équilibreur de charge">}}

Les fonctions principales d'un équilibreur de charge sont suivantes:
  * Distribue efficacement les demandes des clients ou la charge de réseau sur plusieurs serveurs
  * Assure la haute disponibilité et la fiabilité en envoyant des demandes uniquement aux serveurs en ligne
  * Offre la flexibilité d'ajouter ou de soustraire les serveurs à mesure que la demande dicte

## Configuration de Nginx comme équilibreur de charge {#setup}

Avant de configurer l'équilibrage de la charge de Rinx Round Robin, vous devez faire installer Nginx sur votre serveur. Vous pouvez l'installer rapidement avec Apt-get:
```
sudo apt-get install nginx
```
Afin de configurer un équilibreur de charge à rabattement, nous devrons utiliser le module Nginx en amont. Nous mettrons à jour la configuration de l'équilibreur de charge Nginx dans les paramètres NGINX. Ouvrez la configuration de votre site Web. Pour le bien de cet exemple, j'utilise le fichier de configuration par défaut
```
sudo vi /etc/nginx/sites-available/default
```
Nous devons ajouter la configuration d'équilibrage de charge au fichier pour configurer l'équilibreur de charge avec Nginx.
Nous devons d'abord inclure le module en amont pour l'équilibrage de charge en amont de Nginx qui ressemble à ceci:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Utilisez ce backend en amont comme point de terminaison proxy dans votre bloc de serveur:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Redémarrer nginx
```
sudo service nginx restart
```
Tant que vous avez tous les serveurs en place, vous devez maintenant constater que l'équilibreur de charge Open Source Nginx commencera également à distribuer les visiteurs aux serveurs. Cette distribution égale est appelée l'équilibrage de la charge du Round-Robin.

## Directives en amont {#upstream}

Dans notre dernier exemple, nous avons utilisé un module simple en amont pour faire l'équilibrage de la charge du Round-Robin pour distribuer le trafic également entre les serveurs. Cependant, il existe de nombreuses raisons pour lesquelles cela n'est peut-être pas le moyen le plus efficace de travailler avec le trafic. Il existe plusieurs directives que nous pouvons utiliser pour diriger plus efficacement les visiteurs du site.

### Lester
Une façon de commencer à allouer des utilisateurs aux serveurs avec plus de précision est d'allouer un poids spécifique à certaines machines. Nginx nous permet d'attribuer un nombre spécifiant la proportion de trafic qui doit être dirigée vers chaque serveur.
Une configuration équilibrée de charge qui incluait le poids du serveur pourrait ressembler à ceci:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Le poids par défaut est 1. avec un poids de 2, backend2.example sera envoyé deux fois plus de trafic que Backend1, et Backend3, avec un poids de 4, traitera deux fois plus de trafic que Backend2 et quatre fois plus que Backend 1.

### Hash
IP Hash permet aux serveurs de répondre aux clients en fonction de leur adresse IP, renvoyant les visiteurs aux mêmes VP à chaque visite (sauf si ce serveur est en panne). Si un serveur est connu pour être inactif, il doit être marqué comme vers le bas. Tous les IP qui devaient se rendre vers le serveur Down sont ensuite dirigés vers un autre.
La configuration ci-dessous fournit un exemple:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max échoue
Selon les paramètres de la ronde par défaut, l'équilibreur de chargement d'application Nginx continuera d'envoyer des données aux serveurs privés virtuels, même si les serveurs ne répondent pas. MAX échoue peut empêcher cela automatiquement en rendant les serveurs non réactifs inopérants pendant un temps défini.
Il y a deux facteurs associés au maximum d'échec: max \ _fails et chute \ _timeout. Max échoue fait référence au nombre maximum de tentatives infructueuses pour se connecter à un serveur qui devrait se produire avant d'être considéré comme inactif. Fall_timeout spécifie la longueur de ce que le serveur est considéré comme inopérant. Une fois que l'heure expire, de nouvelles tentatives d'atteindre le serveur redémarreront. La valeur de délai d'expiration par défaut est de 10 secondes.
Un exemple de configuration peut ressembler à ceci:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Conclusion: {#conclusion}

Dans ce didacticiel d'équilibrage de charge Nginx, nous avons appris NGIX, l'équilibrage de charge et comment configurer Nginx Load Balancer pour distribuer votre trafic à plusieurs serveurs. Nous avons également exploré différents algorithmes d'équilibrage de charge comme la ronde-robin, le hachage et les échecs Max. Si vous exécutez une application avec un volume élevé et que vous devez distribuer la charge sur différents serveurs, Nginx est l'un des meilleurs choix pour vous. Et surtout, il s'agit du serveur Web 100% gratuit et open source.
_Pour peut se joindre à nous sur [Twitter][7], [LinkedIn][8] et notre page [Facebook][9]. Quel autre équilibreur de charge puissant pour améliorer la disponibilité et l'efficacité des ressources de vos serveurs __ "utilisez-vous? . Si vous avez des questions ou des commentaires, veuillez vous contacter][10].

## Explorer
Vous pouvez trouver les articles ci-dessous les plus liés
  * [Comment sécuriser et crypter Nginx avec Let's Encrypt sur Ubuntu 20.04][11]
  * [Apache vs nginx - comparaison détaillée en 2021][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
