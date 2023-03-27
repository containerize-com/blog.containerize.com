---
title: "Integrate Mautic e Joomla per l'automazione del marketing digitale '" 
seoTitle: "Integrate Mautic e Joomla per l'automazione del marketing digitale" 
description: "L'integrazione Mautic e Joomla può aiutare la tua attività con l'automazione del marketing digitale. Aiuta a commercializzare i prodotti attraverso campagne mautiche." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "L'integrazione Mautic e Joomla può aiutare la tua attività con l'automazione del marketing digitale. Aiuta a commercializzare i prodotti attraverso campagne mautiche online." 
url: /it/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

L'integrazione ## Mautic e Joomla può aiutare la tua attività con l'automazione del marketing digitale. Aiuta a commercializzare i prodotti attraverso campagne mautiche online.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Integrazione mautica e Joomla">}}


## Come questa integrazione può aiutare la tua attività:
L'integrazione Mautic e Joomla ti permetterà di commercializzare i tuoi prodotti/servizi in modo molto semplice ma efficiente. Mautic Una soluzione di marketing open source gratuita ti dà un grande controllo sulle campagne di marketing ed è molto semplice continuare la campagna di gocciolamento in base alla situazione. Ad esempio: ti fornisce le informazioni che se il cliente ha letto l'e -mail o ha visitato le pagine del prodotto. Utilizzando tali informazioni è possibile impostare campagne per decidere se continuare a inviare o meno e -mail per quel cliente. Questa integrazione aiuterà nell'automazione del marketing digitale. Questo post sul blog ti guiderà con le seguenti sezioni:
  * [Panoramica][1]
  * [Installazione del plugin Joomla][2]
  * [Configurazione mautica][3]
  * [Conclusione][4]

## Panoramica: {#overview}

Mautic è un sistema di automazione del marketing open source. È un software di marketing gratuito. Puoi usarlo per creare campagne illimitate per inviare e -mail di marketing ai clienti mirati.
Joomla è anche un sistema di gestione dei contenuti open source gratuito per lo sviluppo di siti Web. È molto facile configurare i siti Web aziendali su Joomla. Ha migliaia di estensioni che possono essere utilizzate in base alle tue esigenze.

## Installazione del plug -in Joomla: {#plugin}

  * Scarica il [plugin][5].
  * Quindi vai su Extensions -> Gestisci -> Installa.
  * Inserisci l'URL mautico.
  * Inserirerà un'immagine GIF 1 px caricata dall'istanza mautica.
  * Incorporare i moduli nel contenuto di Joomla usando il seguente codice Snippet: {mautic type = ”modulo” ID}
  * Quindi puoi creare il modulo nell'app mautica e ottenere l'ID dall'URL.
  * Il contenuto dinamico può anche essere aggiunto utilizzando il seguente codice snipppt: {mautic type = "content" slot = "slot_name"} contenuto predefinito qui. {/Mautic}
  * slot_name è l'identificatore dello slot specificato quando si aggiunge una decisione di "richiesta di contenuto dinamico" alla tua campagna.
Dopo l'installazione è necessario creare e incorporare i moduli sul tuo sito Joomla. Questi moduli invieranno le informazioni sui contatti a Mautic. Una volta che hai finito di configurare il plugin su Joomla, il passo successivo sarà configurarlo su Mautic.

## Configurazione mautica: {#mautic}

  * Vai sul tuo sito mautico, passa alle impostazioni.
  * Fare clic sulla configurazione.
  * Dalle impostazioni API, Abilita API.
  * Per collegare Mautic con Joomla devi avere un certificato SSL sui tuoi siti.
  * Successivamente devi andare alle credenziali API.
* Se il tuo sito Web non ha un SSL (quindi vai a **http**: //yourjoomlasite.com), seleziona oauth1. Se hai un SSL sul tuo sito (quindi vai a**https** : //yourjoomlasite.com), seleziona oauth2.
  * Fai clic su Nuovo, fornisci un nome (può essere tutto ciò che desideri) e l'URL completo del tuo Joomla! Sito ([https://yourjoomlasite.com][6])
  * Fai clic su Salva e Chiudi.
  * Qui puoi ottenere chiavi pubbliche e private.
  * Vai al tuo sito Joomla e trova il plug -in mautico che hai installato in precedenza.
  * Inserisci le chiavi pubbliche e segrete che hai creato dal tuo sito mautico.
  * Selezionare OAuth1 o OAuth2 (lo stesso selezionato in Mautico) e imposta Invia gli utenti registrati su Sì.
  * Salva e pubblica il plugin.
  * Dopodiché sarai in grado di autorizzare il tuo sito Joomla.
  * Joomla reindirirà l'istanza mautica all'autorizzazione.
  * Fai clic su "Autorizza" e basta.
  * Inizierai a ottenere contatti nel tuo sito mautico.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Integrazione mautica e Joomla">}}


## Conclusione: {#conclusion}

In questo articolo abbiamo discusso di come Mautic e Joomla insieme possano aiutare nell'automazione del marketing digitale. Questa soluzione di marketing gratuita open source ti consentirà di raggruppare tutti i contatti provenienti dal sito di Joomla e creare campagne di marketing utilizzandoli. Mautic ti consente di creare segmenti, in modo da poter eseguire diverse campagne su segmenti diversi in base alle tue esigenze. Si prega di controllare [Joomla][7] e [Mautic][8] blog per una panoramica dettagliata.

## Esplorare:
Potresti trovare i seguenti link pertinenti:
  * [Joomla][7]
  * [Mautic][8]
  * [Come configurare Mautic - Integrazione di Facebook][9]
  * [Drupal Mautic Integration per automatizzare la cura dei piombo][10]
  * [Automazione del marketing utilizzando Mautic e WordPress WooCommerce][11]
  * [Come impostare campagne di marketing in Mautic][12]



[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
