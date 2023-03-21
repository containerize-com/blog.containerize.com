---
title: "In che modo Gatsby si integra con WordPress? | Gatsby WordPress" 
seoTitle: "In che modo Gatsby si integra con WordPress? | Gatsby WordPress" 
description: "Usa Gatsby WordPress insieme per migliorare la velocità, la scalabilità e la sicurezza del tuo sito Web. In questo tutorial, imparerai come utilizzare questi software open source." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Configura Gatsby open source con il tuo WordPress per portare una maggiore esperienza utente e prestazioni complessive. Impariamo come utilizzare questo generatore di siti statico." 
url: /it/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Configura Gatsby open source con il tuo WordPress per portare una maggiore esperienza utente e prestazioni complessive. Impariamo come utilizzare questo generatore di siti statico.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


Panoramica ##
Gatsbyjs è un generatore di siti statico a base di reazione aperta e open source. Utilizza una potente pre-configurazione per creare un sito Web che utilizza solo file statici per carichi di pagina incredibilmente veloci. WordPress è un'ottima piattaforma di blogging open source. Di conseguenza, ci sono molte persone che sanno come capire se un sito è un sito WordPress in modo che possano hackerarlo e rubare informazioni. L'uso di Gatsby WordPress insieme ti darà la stessa potenza della gestione dei contenuti di WordPress e della velocità di Gatsby.
In questo articolo, vedremo cos'è Gatsby e perché devi usarlo con il software CMS. Quindi, andremo nei dettagli su come utilizzare WordPress e Gatsby insieme per costruire una straordinaria esperienza del sito Web. Iniziamo!
* [**Cos'è Gatsby**?][1]
* **[Pro e contro dell'utilizzo di WordPress e Gatsby][2]**
* **[Come usare Gatsby con WordPress][3]**
* **[conclusione][4]**

## cos'è gatsby   {#gatsby}
Gatsby è un generatore di siti statico. Ciò significa che Gatsby genera i file HTML statici che vengono caricati sul server del tuo sito Web. Quando un visitatore atterra sul tuo sito, questi file statici vengono serviti al loro browser, invece del contenuto dinamico che WordPress generalmente serve. È un framework gratuito e open source basato su React che aiuta gli sviluppatori a costruire siti Web e app a fuoco bene.

## Pro e contro dell'utilizzo di WordPress e Gatsby   {#proscons}
Secondo i [documenti ufficiali di Gatsby [5], hanno compilato un tavolo, per il quale la combinazione di Gatsby WordPress è grande e per chi non lo è. Per motivi di facilità, sto elencando quelli qui.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress e Gatsby sono fantastici per
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Team di contenuti che si sentono a proprio agio con l'esperienza di editing di contenuti WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Team di sviluppo che apprezzano l'uso di tecnologie popolari e open source
{{_LINE_34_}}
{{_LINE_35_}}
        Riprogettare i siti con contenuti già archiviati in wordpress
{{_LINE_37_}}
{{_LINE_38_}}
        Team che vogliono possedere il proprio stack di dati e tecnologia
{{_LINE_40_}}
{{_LINE_41_}}
        Flussi di lavoro di controllo degli accessi complessi o restrizioni di modellazione dei contenuti
{{_LINE_43_}}
{{_LINE_44_}}
        Progetti in cui la sicurezza è importante
{{_LINE_46_}}
{{_LINE_47_}}
        Progetti ad alta domanda in cui le prestazioni sono fondamentali
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress e Gatsby non sono fantastici per
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Team che richiedono l'uso dei temi dell'interfaccia utente di WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Coloro che cercano un cloud completamente gestito CMS
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Oltre a questi punti ufficiali, mi piacerebbe elencare alcuni pro e contro dell'uso di Gatsby WordPress insieme
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Professionisti
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Velocità di carico più veloci: siti Web statici si caricano più velocemente della dinamica. Di conseguenza, influisce sulla velocità della tua pagina e la classifica SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Meno costi del server: poiché i file statici non necessitano di software speciali, quindi le pagine HTML statiche possono essere servite anche da server più economici.
{{_LINE_78_}}
{{_LINE_79_}}
        Più sicuro: per i siti statici, non ci sono componenti in movimento di parti, quindi nessuna possibilità per gli hacker di sfruttare il tuo software.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Contro
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Curva di apprendimento: richiede ulteriori competenze per gli sviluppatori. Come imparare reactjs e graphql
{{_LINE_93_}}
{{_LINE_94_}}
        Solo contenuto statico - se è necessario servire qualsiasi contenuto dinamico. Allora Gatsby non fa per te. Può solo server file statici. Pertanto, non è possibile avere alcun sistema di commento che recupera i dati dal database.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## come usare gatsby con wordpress   {#howto}
Prima di poter installare Gatsby, è necessario installare [Nodejs][6] e [NPM][7] nell'ambiente del tuo sito Web.

### Passaggio 1 - Installa Gatsby
```
npm install -g gatsby-cli
```
Questo comando esegue automaticamente l'installatore. Scarica e installa tutte le dipendenze prima di installare Gatsby. Una volta completato, puoi iniziare a creare il tuo primo sito Web Gatsby.
```
gatsby new gatsby-site
```
Questo scaricherà il modello di avviamento di Gatsby e lo posizionerà nella directory/Gatsby-WordPress. Una volta completata l'installazione, è possibile aprire la versione di sviluppo del sito
```
gatsby develop
```
Ora, nel tuo browser Web, immettere _http: // localhost: 8000_ e il modello predefinito dovrebbe aprire.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Modello di avviamento Gatsby">}}


### Passaggio 2 - Collega Gatsby a WordPress
In questa sezione della Guida di Gatsby WordPress, collegheremo questo generatore di siti statico a WordPress. Hai un sito Web statico di base, ma devi integrarlo con WordPress. Questo punta il tuo sito Gatsby all'indirizzo del tuo blog di WordPress, consentendo di estrarre i dati più recenti quando si esegue il server di sviluppo. Una volta connesso, Gatsby costruirà un sito Web statico in base al tuo modello attuale.
Installa il plug -in Gatsby Source WordPress dal repository NPM.
```
npm install gatsby-source-wordpress
```

### Passaggio 3 - Configura Gatsby
Metti il ​​seguente codice nel file _Gatsby-config.js_
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Aggiorna questo codice per indicare il tuo sito Web WordPress. Se il tuo sito Web è ospitato localmente, dopo Baseurl puoi utilizzare _Localhost: 8888/WordPress_ invece dell'URL del tuo sito Web. Dopo aver salvato il file, dovrai creare i modelli di pagina.

### Passaggio 4 - Modelli di pagina Build
I modelli di pagina di costruzione consentono a questo generatore di siti di generare un post per ogni pagina sul sito Web WordPress. Il plug -in sorgente tirerà i dati di cui hai bisogno da WordPress per queste pagine, ma dovrai creare il modello di progettazione.
Nel tuo file _gatsby-node.js_, aggiungi il seguente codice
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Dopo aver chiamato tutti i dati, Gatsby genererà una pagina per ogni post. Utilizzando il comando sviluppa, è possibile navigare su ogni nuova pagina utilizzando l'URL generato.

## conclusioni   {#conclusion}
In questo tutorial di Gatsby WordPress, abbiamo coperto come generare un sito Web Gatsby da WordPress. Abbiamo imparato quali sono i pro e i contro di questi due software open source. Abbiamo anche trattato come installare e iniziare con l'ambiente di sviluppo di Gatsby.
Infine, [containerize.com][8] sta scrivendo articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con la categoria della piattaforma Open Source [Blogging][9] per notizie e aggiornamenti regolari.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
