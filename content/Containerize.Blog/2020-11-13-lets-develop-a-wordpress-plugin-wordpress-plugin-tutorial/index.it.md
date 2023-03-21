---
title: "Sviluppiamo un plugin WordPress | Tutorial del plug -in WordPress" 
seoTitle: "Sviluppiamo un plugin WordPress | Tutorial del plug -in WordPress" 
description: "Interessato allo sviluppo dei plug -in WordPress? Segui questo tutorial del plug -in WordPress che descrive i passaggi completi per creare un plug -in WordPress di base." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "Il plugin WordPress è un modulo che attivi sul tuo sito Web per fornire una serie di funzionalità o elementi. Questi plugin sono ottimizzati SEO e offrono automazione." 
url: /it/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

Il plugin ## WordPress è un modulo che attivi sul tuo sito Web per fornire una serie di funzionalità o elementi. Questi plugin sono ottimizzati SEO e offrono automazione.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Tutorial del plug -in WordPress">}}


Panoramica ##
WordPress è una piattaforma di blogging open source a livello aziendale. Un plug -in**WordPress**è un set di codice autonomo che migliora ed estende la funzionalità di WordPress. Usando qualsiasi combinazione di PHP, HTML, CSS, JavaScript/JQuery. Un plug -in può aggiungere nuove funzionalità a qualsiasi parte del tuo sito Web.
La funzionalità che puoi aggiungere al tuo sito Web dipende da ciò che ogni plug -in specifico è stato creato per fare. Un plug -in WordPress può essere sviluppato per fare qualsiasi cosa. Da un piccolo compito a un'applicazione a pieno titolo che esegue una serie di operazioni e ha le sue interfacce. I plugin sono diversi dal tema e funzionano in modo indipendente, utilizzando ganci, filtri, cortometraggi, widget e codice personalizzato per eseguire la loro funzionalità.
In questo tutorial del plug -in WordPress, impareremo come creare il nostro primo plug -in WordPress. Il motivo più importante per creare un plug -in è che ti consente di separare il tuo codice dal codice principale di WordPress.
* **[Requisiti][1]**
* **[Nozioni di base sullo sviluppo del plugin][2]**
* **[Come creare il plugin WP?][3]**
* **[conclusione][4]**

Requisiti ##  {#Requirements}
  * Ultima versione di WordPress
  * Comprensione di Php / Mysql
  * Comprensione di HTML / CSS e JavaScript

## Basics of Plugin Development   {#Basics}
Prendiamo un momento per parlare di alcuni aspetti chiave dello sviluppo del plugin. Una solida comprensione di come funzionano questi concetti ti aiuterà a costruire funzionalità facili da usare e mantenebili.

### Azioni
* * I ganci d'azione**sono uno strumento molto utile nel plug -in**wordpress******e vengono utilizzati per eseguire funzioni (**azioni**) in luoghi specifici di un tema o plug -in. WordPress ha dozzine di azioni definite durante la sua funzionalità principale, ogni azione costituita da un nome univoco. Per maggiori dettagli [leggi][5].

Filtri ###
Un filtro WordPress è un gancio che accetta una variabile (o serie di variabili) e le restituisce indietro dopo che sono state modificate. Questi filtri vengono spesso utilizzati in modo da avere un modo per manipolare le informazioni predefinite. Per maggiori dettagli [leggi][6].

Shortcodes ###
I codi di forza sono macro che possono essere utilizzati per eseguire interazioni dinamiche con il contenuto. cioè la creazione di una galleria da immagini allegate al post o rendendo un video. Di conseguenza, sono un modo prezioso per mantenere il contenuto pulito e semantico, consentendo agli utenti finali una certa capacità di alterare a livello di programmazione la presentazione del loro contenuto. Per maggiori dettagli [leggi][7].

Widget ###
I widget sono importanti perché ti danno un altro mezzo per eseguire il codice del plug-in fornendo al contempo un'interfaccia facile da usare. Poiché la maggior parte dei temi supporterà una o più barre laterali; L'aggiunta dei tuoi widget ti darà un rapido accesso per visualizzare le tue informazioni all'interno del tema.

##**Come creare il plugin WP?** {#Create}
In questa sezione del tutorial del plug -in WordPress, tutto ciò che devi fare è creare una cartella e quindi creare un singolo file con una riga di contenuto. Passa alla cartella**WP-Content/Plugins**e crea una nuova cartella denominata**MytestPlugin**. All'interno di questa nuova cartella, crea un file denominato**mytestplugin.php**. Apri il file in un editor di testo e incolla le seguenti informazioni in esso:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Ora puoi andare nel back -end per attivare il plugin. È tutto, anche se questo plugin non fa nulla. Ma è un plug -in attivo e funzionante. La migliore pratica quando si sviluppa un plug -in è separare ordinatamente il codice in file e cartelle appropriate.
Per dimostrare, aggiungiamo funzionalità al nostro plug -in di test che tiene traccia della popolarità dei nostri articoli memorizzando quante volte ogni post è stato visualizzato.

### memorizzazione delle visualizzazioni della pagina
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Finora, tutto bene in questo tutorial del plug -in WordPress. Ma questa funzione non viene mai chiamata, quindi non verrà effettivamente utilizzata. È qui che entrano in gioco. Ma poi perderesti quella funzionalità se mai cambiassi il tema, sconfiggendo così l'intero scopo. Un gancio, chiamato**wp_head**, che funziona poco prima che il tag sia presente nella maggior parte dei temi, quindi possiamo semplicemente impostare la nostra funzione in esecuzione ogni volta che**wp_head**funziona, come: così:
```
add_action("wp_head", "add_page_views");
```

### che mostra le visualizzazioni della pagina
Ora creeremo un'altra funzione che restituisce le visualizzazioni di pagina che abbiamo già archiviato nella funzione sopra. Diamo un'occhiata al codice:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Finora abbiamo appena recuperato il conteggio delle viste. Ora, mostriamolo. Potresti pensare che debba essere complesso. Ma è molto semplice proprio così:
```
echo get_page_views() . “view(s)”
```

## conclusioni   {#conclusion}
Questa è la fine di questo tutorial del plug -in WordPress. Seguendo questo articolo e usando solo una manciata di funzioni, abbiamo creato un plug -in di base per tenere traccia dei nostri post più popolari. Possiamo migliorarlo molto, ma lo scopo era solo quello di metterti a tuo agio con le basi. Inoltre, imparando alcuni schemi di sviluppo di WordPress (plugin, ganci, ecc.), Stai acquisendo abilità che ti serviranno anche in ambienti non wordpress. Ci sono molti altri post sul blog relativi a piattaforme di blogging open source e CMS open source. che puoi trovare nella sezione Explore di seguito. Questo post sul blog può davvero aiutarti se stai cercando di distribuire una piattaforma di blogging open source per la tua attività.
Infine, [containerize.com][8] sta scrivendo articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con le categorie [Blogging][9] e [Business Intelligence Software][10] per notizie e aggiornamenti regolari

## Esplorare
  * [Come installare Matomo per WordPress | Tutorial di WordPress][11]
  * [Aumenta i tuoi lead con integrazione WordPress gratuita di CivicRM][12]
  * [Come installare il plug -in in WordPress | Vanilla Forum][13]
  * [Joomla vs Drupal | Confronto CMS nel 2021][14]
  * [Cose da rivedere prima di optare sul software open source nel 2021][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
