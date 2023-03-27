---
title: "Come sviluppare il plug -in Osticket | Software di helpdesk" 
seoTitle: "Come sviluppare il plug -in Osticket | Software di helpdesk" 
description: "Segui questo tutorial per imparare a sviluppare il plug -in Osticket. Questo software IT HelpDesk gestisce le comunicazioni dei clienti e automatizza la risoluzione dei problemi." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Crea un plug -in Osticket per aggiungere funzionalità nell'installazione dell'osticket. Questo sistema di biglietteria open source aiuta le aziende a gestire i clienti in modo efficiente." 
url: /it/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Crea un plug -in osticket per aggiungere funzionalità all'installazione di osticket. Questo sistema di biglietteria open source aiuta le aziende a gestire i clienti in modo efficiente.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="software di helpdesk">}}


Panoramica ##
Benvenuti in un altro interessante post sul blog nella serie di [software di biglietteria helpdesk][1]. Abbiamo pubblicato alcuni post sul blog su argomenti come [Helpdesk e sistema di assistenza clienti popolari basati su biglietteria Tuttavia, Osticket è un sistema HelpDesk basato su biglietteria open source progettato per i clienti per segnalare le loro domande e reclami per supportare il personale. Questo sistema di supporto gratuito fornisce un modulo di gestione delle richieste di facile utilizzo che converte le richieste provenienti da telefoni, e-mail e moduli in biglietti basati sul Web. Offre una vasta gamma di funzionalità e opzioni che consentono al personale di supporto di offrire un'incredibile esperienza di supporto ai clienti per i clienti.
Questo sistema di biglietteria open source (OSCKET) è un framework di biglietti di supporto completamente flessibile che offre numerose opzioni per aiutare a personalizzare tutte le parti dell'esperienza di supporto del cliente come messaggi inviati a clienti, pagine e notifiche. Nel suo articolo, impareremo lo sviluppo del plug -in Osticket per migliorare la funzionalità in base alle nostre esigenze. Per fare ciò, copriremo i seguenti argomenti:
  * [Perché usare i plugin?][4]
  * [Requisiti][5]
  * [Come sviluppare il plugin di Osticket?][6]
  * [Conclusione][7]

## Perché usare i plugin? {#why}

In questo argomento, impareremo come creare un plug -in semplice per estendere la funzionalità di base di questo  **software helpdesk**  (osticket). Un plugin è un software, che estende la funzionalità di base di qualsiasi app/software. Inoltre, ci sono molti software open source a livello aziendale che ha un enorme stack di plugin che estendono le funzionalità. Inoltre, questi popolari software open source includono WordPress, Joomla e molti altri. Soprattutto, le comunità vibranti e vive supportano e sviluppano plugin secondo le esigenze. Tuttavia, i framework offrono una documentazione completa sullo sviluppo dei plugin. Di seguito sono riportati alcuni motivi per cui le app per supportare i plugin:
  * Consente agli sviluppatori di terze parti di creare componenti software che estendono la funzionalità di un'applicazione.
  * I plugin consentono di integrare facilmente nuove funzionalità.
  * Inoltre non aumenta le dimensioni e la complessità di un'applicazione.
  * Così come gli sviluppatori possono mantenere e gestire il codice dei plugin separatamente dall'applicazione principale.

## Requisiti {#requirements}

Questa sezione del  **Guida del software di helpdesk**  descrive i requisiti necessari per sviluppare il plug -in Osticket.
  * PHP versione 5.6 o superiore
  * Installazione Osticket
  * Conoscenza di base PHP

## Come sviluppare il plugin di Osticket? {#how}

In questa sezione, passeremo attraverso i passaggi dello sviluppo del plug -in di questo sistema di biglietteria open source (OSCKET).
  * Crea la cartella del plug -in nella directory /include /plugin. In questo tutorial creeremo un plug -in demo che integra  **Sistema Osticket**  con Redmine.
  * Dovrebbe avere i seguenti file necessari: plugin.php e config.php.
  * Il file plugin.php contiene una descrizione generale del plugin. Utilizzare il seguente codice di esempio nel file plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Quindi sostituire ID, nome, nome dell'autore e nomi delle classi di plug -in dal codice sopra.
  * Successivamente, dobbiamo visualizzare le opzioni di configurazione del plug -in nel backend di Osticket. Aggiungi il seguente codice di esempio nel file config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Di conseguenza, questo creerà campi utente e password sulla pagina di configurazione come mostrato qui:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Una guida per principianti per lo sviluppo del plugin Osticket">}}

  * Di seguito è riportato un elenco di campi di classe disponibili, sono definiti in `[Instal_root]/Include/Class.Forms.Php`:
      * TextBoxField - Casella di testo
      * TextAreafield - Area di testo
      * Threadentryfield - Area di testo ricca, utilizzata per i thread di discussione
      * DateTimefield - jQuery DatePicker
      * Campo telefonico - casella di testo ottimizzata per i numeri di telefono
      * Booleanfield - Casella di controllo
      * Choicefield-Campo Seleziona a discesa
      * SectionBreakfield - pausa sezione orizzontale
  * Successivamente, dobbiamo creare il file in cui verrà definita la funzionalità del plugin.
  * Il nome del file dovrebbe essere lo stesso come definito nel file plugin.php. cioè Redmine.php.
  * Questo dovrà contenere la classe DynabicDeMinePlugin. Scopri il seguente codice di esempio:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Questo codice ha recuperato i valori di configurazione e puoi utilizzare questi valori nelle funzioni. In questo file puoi aggiungere la funzionalità del plugin come requisiti.

## Conclusione {#conclusion}

Questo ci porta alla fine di questo post sul blog. Osticket è un software di gestione dei biglietti che offre una struttura plugin per gli sviluppatori in modo che possano aggiungere nuove funzionalità secondo i requisiti. I plugin sono i componenti che estendono la funzionalità di base di qualsiasi app/software. Nel suo articolo, abbiamo discusso dello sviluppo del plug -in di questo  **Sistema di assistenza clienti** (Osticket), che aiuta gli sviluppatori ad aggiungere funzionalità e miglioramenti personalizzati in base alle loro esigenze. Pertanto, questo post sul blog ti aiuterà davvero se stai cercando di distribuire un  **software helpdesk**  per la tua attività. Inoltre, ci sono altri **software di biglietteria di helpdesk**  e articoli menzionati nella sezione "Esplora" di seguito.
Infine, [Containerize.com][8] scrive continuamente post sul blog su ulteriori prodotti e argomenti open source. Pertanto, rimani in contatto con la categoria [HelpDesk Ticketing Software][1] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][9], [LinkedIn][10] e [Twitter][11].

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Helpy][15]
  * [Best open source e software help desk gratuito][16]
  * [Helpdesk e sistema di assistenza clienti basati su biglietteria gratuita popolare][2]
  * [Come impostare il software di help desk online utilizzando Osticket][17]
  * [Come implementare multi-tenancy in osticket][18]
  * [Automatizza il sistema di biglietteria utilizzando WordPress e Osticket][3]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
