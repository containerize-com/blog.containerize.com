---
title: "Automazione del marketing con integrazione mautica e wooCommerce" 
seoTitle: "Automazione del marketing con integrazione mautica e wooCommerce" 
description: "L'integrazione mautica e di WooCommerce consente l'invio di informazioni di contatto dai siti WordPress a Mautic. Ciò aiuta a commercializzare i prodotti attraverso l'app mautica." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Vantare le vendite usando insieme Mautic e WordPress WooCommerce. Automatizza il processo di marketing recuperando i dati dei clienti da WordPress a Mautic." 
url: /it/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## Vanta le vendite usando insieme Mautic e WordPress WooCommerce. Automatizza il processo di marketing recuperando i dati dei clienti da WordPress a Mautic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Automazione del marketing utilizzando l'integrazione di WooCommerce Mautic">}}


Panoramica ##:
L'integrazione mautica-woocommerce fornisce un modo semplice per ottenere tutti i contatti nell'app mautica. Quindi utilizzando questi contatti, è possibile creare campagne di marketing in base alle tue esigenze. Mautic è un ottimo strumento di marketing che ti dà il pieno controllo sulle tue campagne di marketing.
Mautic è una soluzione di automazione del marketing open source e gratuita. Viene utilizzato per creare campagne di marketing, segmenti, forme, report e molto altro.
WooCommerce è un plug-in e-commerce open source per WordPress. A questo punto è la soluzione di e-commerce per lo più usata in tutto il mondo. Ci sono centinaia di componenti aggiuntivi disponibili per WooCommerce che possono essere utilizzati in base alle tue esigenze.
C'è un plug -in disponibile per Mautic e WordPress che fornisce una soluzione di automazione del marketing. Segui questi passaggi per integrare WooCommerce con Mautic utilizzando il plug -in [Integrazione con Mautic per WooCommerce - Open Source Marketing Automation.][1]
Questo blog coprirà le seguenti sezioni:
  * [Configurazione del plug -in WordPress][2]
  * [Configurazione mautica][3]
  * [Pensieri finali][4]

## Configurazione del plug -in WordPress {#wordpress}

  1. Vai ai plugin.
  2. Fare clic su "Aggiungi nuovo".
  3. Cerca “  **Integrazione con Mautic per WooCommerce**  “.
  4. Una volta trovato il plugin, fai clic su "Installa ora".
  5. Dopo l'installazione, fare clic su "Attiva".
  6. Quindi andare su WooCommerce -> Mautic -> Connetti la scheda.
  7. Compila il modulo con i seguenti dati:
      * URL di base.
      * Identificativo cliente.
      * ID segreto.
  8. Tutti questi campi arriveranno dopo aver configurato sull'app mautica, che è spiegata nella prossima sezione.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Integrazione mautica e di WordPress">}}


## Configurazione mautica: {#mautic}

  1. Dal tuo sito mautico, vai alle impostazioni.
  2. Vai alle configurazioni.
  3. Abilita API dalle impostazioni API.
  4. Vai alle credenziali API.
  5. Fare clic su "Nuovo", inserisci qualsiasi nome che ti piace e l'URL completo del tuo sito WordPress, ad esempio [http://yourwordpresssite.com/wp-admin/admin.php lastingalo]
  6. Premi Salva e Chiudi.
  7. Creerà chiavi pubbliche e private.
  8. Vai al tuo sito WordPress e trova il plug -in Mautico che hai installato in precedenza.
  9. Inserisci le chiavi pubbliche e segrete che hai creato dal tuo sito mautico.
 10. Selezionare OAuth1 o OAuth2 (lo stesso selezionato in Mautico) e impostare Invia utenti registrati su Sì.
 11. Salva e pubblica il plugin.
 12. Dopodiché sarai in grado di autorizzare il tuo sito WordPress.
 13. WordPress reindirizzarà l'istanza mautica all'autorizzazione.
 14. Fai clic su "Autorizza" e basta.
 15. Inizierai a ottenere contatti nel tuo sito mautico.

{{< figure align=center src="images/mautic-1024x622.png" alt="Passaggi di integrazione mautica e di WordPress">}}


## Pensieri finali: {#final}

L'integrazione mautica-woocommerce può aiutarti a raggiungere i tuoi obiettivi di marketing. Questa integrazione è una delle migliori soluzione per l'automazione del marketing di eCommerce. Con WordPress puoi facilmente ottenere molti clienti e quindi con Mautic puoi creare campagne illimitate per indirizzare tali clienti e tenerli aggiornati riguardo ai tuoi prodotti/servizi, il che vanta sicuramente le vendite.

## Esplorare:
Potresti trovare i seguenti link pertinenti:
  * [Wodpress][6]
  * [Mautic][7]
  * [Come configurare Mautic - Integrazione di Facebook][8]
  * [Integrazione mautica di Drupal per automatizzare la cura dei piombo][9]
  * [Automazione del marketing utilizzando Mautic e WordPress WooCommerce][10]
  * [Come impostare campagne di marketing in Mautic][11]



[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/it/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
