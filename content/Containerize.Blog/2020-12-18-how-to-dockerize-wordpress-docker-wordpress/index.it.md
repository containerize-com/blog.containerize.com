---
title: "Come dockerizzare WordPress | Docker WordPress" 
seoTitle: "Come dockerizzare WordPress | Docker WordPress" 
description: "Cos'è Docker & Docker Compose? In questo articolo, impareremo come installare Docker, Docker Composi e come dockerizzare WordPress in un contenitore Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Un software di container raggruppa un'applicazione, le sue dipendenze e fa funzionare l'app su qualsiasi ambiente di elaborazione. Impariamo come dockerizzare WordPress." 
url: /it/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Un software di container raggruppa un'applicazione, le sue dipendenze e fa funzionare l'app su qualsiasi ambiente di elaborazione. Impariamo come dockerizzare WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


Panoramica ##
Benvenuti in un altro post sul blog nella categoria [Blogging][1] di software open source. Abbiamo pubblicato alcuni articoli su argomenti come [Boost i tuoi lead con l'integrazione gratuita di CivicRM WordPress][2], [come costruire il tuo sito Web con WordPress e Gatsby][3] e altri. Tuttavia, questo articolo porterà ulteriori approfondimenti e dettagli sulle piattaforme di blogging open source e il software di container **. Passeremo attraverso alcune domande calde come ciò che è Docker e** come installare Docker Compons**e impareremo come dockerare WordPress.
La containerizzazione è diventata una tendenza importante nello sviluppo del software in alternativa alla virtualizzazione. Implica l'incapsulamento o il raggruppamento del codice software e tutte le sue dipendenze in modo che possa essere eseguito in modo coerente su qualsiasi infrastruttura. La containerizzazione consente agli sviluppatori di creare e distribuire applicazioni più velocemente e in modo più sicuro. Docker è l'applicazione di containerizzazione più popolare utilizzata in tutta la comunità degli sviluppatori. In questo tutorial, impareremo come dockerizzare WordPress usando Docker Compose. Quindi, iniziamo con i seguenti punti.
* [ **Cos'è Docker?** ][4]
* [ **Perché è necessario dockerizzare WordPress** ?][5]
* **[Come installare Docker Compose][6]** 
* **[DockKerize WordPress][7]** 
* **[Conclusione][8]** 

## Cos'è Docker? {#docker}

In parole semplici, Docker è un software di contenitore open source**che fa la virtualizzazione più veloce e più leggera. È così leggero che un contenitore Docker può essere lanciato in pochi secondi. E puoi facilmente eseguire dozzine di contenitori Docker su un singolo PC. Gli sviluppatori utilizzano Docker per creare, distribuire ed eseguire applicazioni utilizzando i contenitori. I contenitori consentono a uno sviluppatore di impacchettare un'applicazione con tutte le parti di cui ha bisogno, come librerie e altre dipendenze, e distribuirla come un unico pacchetto. In tal modo, lo sviluppatore può essere certo che l'applicazione verrà eseguita su qualsiasi infrastruttura. Inoltre, esiste un enorme sviluppatore e una comunità di supporto che è sempre viva per fornire la massima assistenza in qualsiasi rilevanza. Docker è diventato un componente indispensabile di qualsiasi impresa software grazie alle sue potenti funzionalità e usi.

## Perché hai bisogno di dockerizzare WordPress? {#why}

In questa sezione, sapremo la necessità di Dockerising WordPress. WordPress è un software di blogging open source leader che è fortemente adottato dal mondo della tecnologia. Tuttavia, per eseguire WordPress a livello locale, è necessario Apache/Nginx, MySQL Server, PHP e tonnellate di altre dipendenze. E l'implementazione dell'ambiente di stadiazione o di produzione è un incubo quando si tratta di gestire tali dipendenze. A volte, diventa una seccatura per gli sviluppatori e gli ingegneri di supporto ripetere ripetutamente le distribuzioni in quanto richiede tempo e forza lavoro.
Quindi, la containerizzazione può aiutarti in questo. Tutto ciò di cui hai bisogno è Docker: l'installazione stessa richiede secondi e non è richiesta alcuna configurazione aggiuntiva
Non importa se si tratta di una macchina per lo sviluppo, una fase o un server live e quale sistema operativo, Docker funziona allo stesso modo ovunque. Ciò significa che non dovrai cercare bug che, per esempio, appaiono in un ambiente e non possono essere riprodotti in un altro.

## Come installare Docker Composition {#install}


### Prerequisiti
È possibile utilizzare Docker Comy per eseguire facilmente WordPress in un ambiente isolato costruito con contenitori Docker. Questa guida dimostra come utilizzare commento per impostare ed eseguire WordPress.
Docker Compose si basa sul motore Docker, quindi assicurati di avere un motore Docker installato. Sui sistemi desktop come Docker Desktop per Mac e Windows, Docker Compose è incluso come parte di tali installazioni desktop. Tuttavia, su Linux Systems prima, installa il motore Docker seguendo la loro [Guida ufficiale][9].

### Installa composizione su Linux
Esegui questo comando per scaricare l'attuale versione stabile di Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Applicare le autorizzazioni eseguibili al binario:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Test Installation mediante comando versione:
```
docker-compose --version
```

### Definisci un file Docker per WordPress
La prima cosa che dobbiamo fare è definire come sarà la nostra immagine in **_ Dockerfile _** . È un file di testo che viene aggiunto alla directory con le fonti dell'applicazione.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“ **/var/www/html/wordpress** ” conterrà il contenuto completo di WordPress insieme a temi, plugin e contenuti. Se il tuo repository contiene solo il tema o il plug -in, aggiungi la cartella pertinente.
Crea un file Docker-compose.yml che avvia il tuo blog WordPress e un'istanza MySQL separata con un monte di volume per la persistenza dei dati:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Ora, esegui il comando nella directory del progetto
```
docker-compose up -d
```
Questo esegue **_ Docker-Opse _** in modalità indipendente, tira le immagini Docker necessarie e avvia i contenitori WordPress e Database.
Una volta avviati i contenitori, è possibile aprire l'URL nel browser Web e iniziare a utilizzare l'applicazione:
```
http://localhost:8000
```

## Conclusione {#conclusion}

Questo ci porta alla fine di questo post sul blog. In questo articolo, abbiamo appreso ciò che è Docker, **Come installare Docker Compose** . Abbiamo anche imparato a dockerizzare WordPress usando Docker-Opse. Inoltre, ti abbiamo introdotto al concetto dietro Docker e come è possibile definire semplici applicazioni multi-container. Tuttavia, questo software di container open source**è un'opzione leader per tutte le organizzazioni software. Pertanto, questo articolo ti aiuterà davvero se stai cercando di optare per Docker per le tue applicazioni. Esistono molti altri articoli pertinenti e software di blog elencati nella sezione "Esplora" di seguito.
Infine, [containerize.com][10] sta scrivendo articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con la categoria [Blogging][1] per notizie e aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][11], [LinkedIn][12] e [Twitter][13].

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [WordPress][14]
  * [Jekyll][15]
  * [Discourse][16]
  * [Ghost][17]
  * [Come dockerare WordPress con Docker Compose][18]
  * [Aumenta i tuoi lead con integrazione WordPress gratuita di CivicRM][2]
  * [Automatizza il sistema di biglietteria utilizzando WordPress e Osticket][19]
  * [Come integrare il forum del discorso con WordPress][20]
  * [Aumenta il traffico di ricerca del sito Web seguendo i primi 7 blog SEO][21]
  * [Come costruire il tuo sito Web con WordPress e Gatsby][3]
  * [Come abilitare la compressione GZIP in WordPress per una migliore pagpettamento e SEO][22]



[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/it/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
