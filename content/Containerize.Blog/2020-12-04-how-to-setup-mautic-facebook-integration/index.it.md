---
title: "Come configurare Mautic - Integrazione di Facebook" 
seoTitle: "Come configurare Mautic - Integrazione di Facebook" 
description: "Mautic - L'integrazione di Facebook può aiutare a sincronizzare i tuoi conduttori di Facebook nel sistema mautico senza alcuna difficoltà e quindi usarli nelle campagne di marketing." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook porta a Mautic, aggiungi contatti in un segmento ed esegui campagne di posta elettronica. Usa anche questi contatti per creare un pubblico personalizzato per gli annunci di Facebook." 
url: /it/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook porta a Mautic, aggiungi contatti in un segmento ed esegui campagne di posta elettronica. Usa anche questi contatti per creare un pubblico personalizzato per gli annunci di Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Come impostare Mautic - Integrazione di Facebook">}}

Mautic è un software di automazione del marketing e offre un controllo completo su e -mail di marketing, landing page e flussi di lavoro per le attività di marketing. Le campagne di gocciolamento di Mautic aiutano a coinvolgere il pubblico di destinazione e tenerle aggiornate sui tuoi prodotti. L'integrazione di Mautic Facebook fornisce un modo per l'aggiunta di nuovi lead a Mautic. Con questa integrazione mautica - Facebook, i lead della tua campagna Facebook verranno automaticamente aggiunti a Mautic.
Copriremo le seguenti sezioni in questo tutorial:
  * [Configura Account sviluppatore di Facebook][1]
  * [Configura l'app dello sviluppatore di Facebook][2]
  * [Configurazione del plug -in mautico][3]
  * [Conclusione][4]

## Configura account sviluppatore di Facebook   {#Account}
  * Vai su [Facebook per gli sviluppatori][5]
  * Registra il tuo account se non ne hai uno.
  * Per registrare un nuovo account, vai e fai clic su "Inizia" dall'angolo in alto a destra.
  * Dopodiché, seleziona il tuo account Facebook e premi "Continua".
  * Quindi dalla finestra popup, fai clic sul pulsante "Sviluppatore".

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Integrazione di Facebook - Registrati Account sviluppatore">}}


## Configura l'app dello sviluppatore di Facebook   {#app}
  * Fai clic su "Crea la prima app"

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Integrazione di Facebook - Crea prima app">}}

  * Fai clic su "Gestisci integrazioni aziendali" e premi "Continua".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Integrazione di Facebook - Scegli uno scopo">}}

  * Nella finestra Next, immettere il nome dell'app e selezionare lo scopo dell'app. Fai clic sul pulsante "Crea app".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Integrazione di Facebook - Fill Modulo per creare l'app">}}

  * Il prossimo passo è configurare l'accesso a Facebook. Dalla pagina dei prodotti, fare clic sul pulsante "Imposta" nella casella "Accedi Facebook".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Integrazione di Facebook - Imposta login FB">}}

  * Dal menu a sinistra, fare clic su "Impostazioni" in Prodotti -> Accesso a Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Integrazione di Facebook - Configura login FB">}}

  * Inserisci l'URL del tuo sito web mautico. Imposta "Client Oauth Login" e "Web Oauth Login" su "Sì".
  * Ora vai su Impostazioni -> Impostazioni di base. Dalla fine della pagina, fare clic sul pulsante "+ Aggiungi piattaforma". Dopodiché si aprirà una finestra popup. Inserisci l'URL del tuo sito Web e salva le modifiche.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Integrazione di Facebook - Aggiungi il sito Web come piattaforma">}}


## Configurazione del plugin mautico   {#configuration}
  * Vai al cruscotto Mautico.
  * Quindi passare alle "impostazioni" dall'angolo in alto a destra.
  * Fai clic su "Plugin".
  * Successivamente, apri le impostazioni del plug -in "Facebook".
  * Quindi immettere l'ID client e il segreto client. Ottieni queste chiavi dall'app per sviluppatori di Facebook che hai appena creato seguendo i passaggi sopra.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Integrazione di Facebook - Configura il plugin FB su Mautic">}}

  * Premi il pulsante "Autorizza l'app".
  * Successivamente, si aprirà una nuova finestra di autorizzazione di Facebook. Seguire le istruzioni per completare l'autorizzazione dell'app.
  * Dopo l'autorizzazione riuscita, passa alla scheda "Contatta mappatura" dal plug -in Facebook di Mautic.
  * Qui puoi mappare i tuoi campi di contatto sui campi di Facebook.
  * Infine, pubblica le impostazioni e sei a posto.

## conclusioni   {#conclusion}
Mautic - L'integrazione di Facebook può aiutare a sincronizzare i tuoi conduttori di Facebook nel sistema mautico senza alcuna difficoltà. Nell'app mautica, puoi aggiungere tutti questi lead in un segmento. Puoi eseguire campagne di email marketing su di loro. Questo può davvero aiutare la tua azienda a crescere, commercializzare e vendere prodotti/servizi a un pubblico target molto più grande.

## Esplorare
Per saperne di più su Mautic e Facebook, visitare:
  * [Mautico | Piattaforma tecnologica di marketing di contenuti open source][6]
  * [Come impostare campagne mautiche usando la campagna builder][7]
  * [Drupal Mautic Integration per automatizzare la cura dei piombo][8]
  * [Automazione del marketing con integrazione mautica e woocommerce][9]
  * [Integrate Mautic & Joomla per l'automazione del marketing digitale][10]

  
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
