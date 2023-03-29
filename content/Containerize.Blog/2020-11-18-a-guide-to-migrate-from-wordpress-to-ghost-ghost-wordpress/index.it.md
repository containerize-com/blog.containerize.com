---
title: "Una guida per migrare da WordPress a Ghost | WordPress Ghost" 
seoTitle: "Una guida per migrare da WordPress a Ghost | WordPress Ghost" 
description: "Questo tutorial riguarda come migrare da WordPress a Ghost. Impareremo come migrare i tuoi post e pagine nel fantasma dal sito Web di WordPress esistente." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost e WordPress sono due principali piattaforme di pubblicazione di contenuti open source. In questo tutorial, impareremo come migrare il contenuto da WordPress a Ghost." 
url: /it/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost e WordPress sono due principali piattaforme di pubblicazione di contenuti open source. In questo tutorial, impareremo come migrare il contenuto da WordPress a Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migrare da WordPress a Ghost">}}


Panoramica ##
In passato, abbiamo pubblicato molti articoli su argomenti come [Aumenta i tuoi lead con l'integrazione gratuita di CivicRM WordPress][1], [come integrare il forum del discorso con WordPress][2] e molti altri. Ghost è una piattaforma di blogging open source emergente. È un CMS Node.js per la pubblicazione di contenuti e viene fornito con un'interfaccia semplice e pulita che lo rende facile da usare. È una piattaforma meravigliosa per i principianti in quanto si concentra su Markdown anziché sul montaggio di Wysiwyg. La potenza e la velocità di Node.js rendono il fantasma molto velocemente. A causa della semplicità della piattaforma, molti utenti passano da altre piattaforme. Poiché WordPress è la piattaforma numero uno per la gestione dei contenuti.
Quindi, più utenti **migrano da WordPress a Ghost** . Ci sono molti contenuti che includono file multimediali, commenti, post, ecc. Ci sono plugin disponibili che ti aiutano a migrare il contenuto da WordPress a Ghost. Il principale vantaggio dell'adozione di Ghost è che si concentra sull'ottimizzazione dei motori di ricerca. In questo tutorial Ghost WordPress, passeremo attraverso tutti i passaggi di migrazione usando il plug -in di esportazione WordPress ufficiale.
* **[un'introduzione di Briedf di WordPress][3]** 
* **[Cos'è Ghost?][4]** 
* **[Requisiti][5]** 
* **[Contenuto di esportazione da WrodPress usando il plugin][6]** 
* **[Importa contenuto in Ghost][7]** 
* **[Conclusione][8]** 

## **Un'intro di Briedf di WordPress** {#wp}

[WordPress][9] è una piattaforma di blogging open source leader che ha alimentato un numero enorme di siti Web. Questo software di blogging gratuito è ospitato da soli, multilingue e fornisce supporto per molte lingue. Inoltre, la comunità di sviluppo di WordPress è altamente vibrante e ha sviluppato un pool gigantesco di plug -in utili che sono facilmente disponibili. Questi plugin affrontano quasi ogni caso d'uso del tuo sito Web aziendale. Inoltre, è scritto in PHP e viene fornito una documentazione completa per quanto riguarda lo sviluppo e la distribuzione. Tutto il codice sorgente è disponibile su GitHub. Inoltre, questa piattaforma di blogging è altamente estensibile, configurabile e fornisce integrazioni con applicazioni di terze parti. Esiste una dashboard molto logica e facile da capire in cui gli utenti possono trascinare elementi per modificare l'aspetto dei loro siti Web.

## **Cos'è Ghost?** {#ghost}

[Ghost][10] è un'altra popolare piattaforma di blog open source. Questa è una delle piattaforme editoriali di contenuti più utilizzate che sono fortemente adottate da sviluppatori e proprietari di siti. Inoltre, Ghost è altamente amichevole e viene fornito con temi, forme, newsletter e-mail e abbonamenti integrati. Questo software di blogging gratuito è scritto in JavaScript e tutta la documentazione è disponibile per quanto riguarda lo sviluppo e la distribuzione.

## Requisiti {#requirements}

Nella sezione del tutorial di Ghost WordPress, vedremo i requisiti necessari per migrare da WordPress a Ghost. Con il plug -in di esportazione WordPress ufficiale, puoi facilmente migrare i tuoi contenuti da WordPress a Ghost. In questo tutorial, ti guideremo su come esportare i tuoi contenuti da WordPress in un sito fantasma. Quindi, è necessario avere un'installazione di funzionamento di WordPress e WordPress **Plugin di esportazione** installato.

## Contenuto di esportazione da WordPress {#export}

Prima di tutto, dovrai installare il plugin. Seguire i seguenti passaggi per installare il plug -in
* Fare clic su **plugins** dal menu della barra laterale
* Fare clic su **Aggiungi nuovo**e usa il campo di ricerca nell'angolo in alto a destra per cercare**Ghost Export** 
* **Installa**e **Attiva** Il plug -in di “**Ghost Foundation** “

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Installa e attiva il plugin fantasma per WordPress">}}

* Una volta attivato il plug -in, vai su **Strumenti** Dal menu laterale
* Fare clic **Esporta su Ghost** con il menu della barra laterale.
  * Ti verrà fornita una guida su come preparare il contenuto di WordPress per Ghost.
  * Poiché Ghost utilizza tag invece di categorie in modo che il plugin ti aiuti a convertire le categorie in tag.
{{_LINE_37_}}
{{_LINE_38_}}
    I seguenti passaggi cambieranno permanentemente la struttura del contenuto del sito WordPress. Se non sei sicuro di apportare questa modifica, utilizza lo strumento di esportazione WordPress standard in Strumenti> Esporta per creare un backup completo di tutti i tuoi contenuti.
{{_LINE_40_}}
{{_LINE_41_}}
* Vai a **Importa** nel menu della barra laterale
* Fare clic su **Esegui l'importatore**sotto il**Convertitore Tassonomio** Articolo di importazione.
  * Usa le caselle di controllo per selezionare le categorie che si desidera importare nei tag e quindi nel tuo sito fantasma.
* Quindi fare clic su **Converti le categorie in tag** .
* Passa di nuovo a **Esporta su Ghost**all'interno di**Strumenti** Nel menu della barra laterale.
* Fare clic sul pulsante **Scarica File Ghost** . Avrai scaricato un file zip contenente tutti i tuoi contenuti.

## Importa contenuto in fantasma {#import}

In questa sezione del tutorial di Ghost WordPress, implementeremo i passaggi per importare i contenuti in Ghost.
* Accedi a Ghost Admin e naviga su **Labs** Vista.
* Fare clic sul pulsante **Scegli file**all'interno dell'opzione**Importa contenuto** e seleziona il file zip esportato
* Fare clic **Importa** . Tutti i tuoi contenuti verranno quindi importati nel tuo sito fantasma.
Al momento, Ghost non ha alcun sistema di commento incorporato. L'alternativa più popolare è Disqus.

## Conclusione {#conclusion}

Questo ci porta alla fine di questo post sul blog. In questo tutorial di Ghost WordPress, abbiamo imparato a preparare il tuo contenuto di WordPress pronto per la migrazione a Ghost. Abbiamo usato il plugin ufficiale di migrazione fantasma dalla Ghost Foundation per eseguire le migrazioni. Inoltre, questo post sul blog ti aiuterà sicuramente se stai cercando di migrare da WordPress a Ghost, poiché abbiamo coperto tutti i passaggi necessari. Inoltre, ci sono molte piattaforme di pubblicazione di contenuti open source e articoli di tutorial menzionati nella sezione "Esplora" di seguito. Tuttavia, entrambe queste piattaforme di blogging open source sono i principali software che offrono funzionalità a livello aziendale per soddisfare le esigenze dei siti Web aziendali.
Infine, [containerize.com][11] ha scritto nuovi post sul blog su ulteriori software open source. Pertanto, rimani in contatto con [questa] piattaforma [12] per aggiornamenti regolari.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [WordPress][9]
  * [Jekyll][13]
  * [Discourse][14]
  * [Ghost][10]
  * [Come dockerare WordPress con Docker Compose][15]
  * [Come abilitare la compressione GZIP in WordPress per una migliore pagpettatura e SEO][16]
  * [Aumenta i tuoi lead con integrazione WordPress gratuita di CivicRM][1]
  * [Automatizza il sistema di biglietteria utilizzando WordPress e Osticket][17]
  * [Come integrare il forum del discorso con WordPress][2]
  * [Aumenta il traffico di ricerca del sito Web seguendo i primi 7 blog SEO][18]
  * [Come costruire il tuo sito Web con WordPress e Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
