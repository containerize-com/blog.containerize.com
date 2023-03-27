---
title: "Guida per principianti per sviluppare il plug -in Phlist" 
seoTitle: "Guida per principianti per sviluppare il plug -in Phlist" 
description: "Acquisisci familiarità con l'architettura del plug -in Phlist e impara a creare un plug -in Phlist di base. Questa linea guida ti aiuta a personalizzare e migliorare la funzionalità di Phlist." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "I plug -in Phplist consentono agli sviluppatori di personalizzare il prodotto e migliorarne la funzionalità. In questo post, impareremo come creare plug -in di base in Phplist." 
url: /it/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

I plugin ## Phplist consentono agli sviluppatori di personalizzare il prodotto e migliorarne la funzionalità. In questo post, impareremo come creare plug -in di base in Phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="Plug -in Phlist">}}

Il supporto del plug -in è una parte essenziale del software, in particolare per i sistemi open source. Ciò consente agli sviluppatori di creare un nuovo plug -in per espandere le funzionalità. **Phplist** incoraggia lo sviluppo di plugin in modo che gli sviluppatori possano usarli per aggiungere nuove funzionalità in base alle loro esigenze aziendali. Un plug -in Phlist è una raccolta di codice autonoma contenente codice per PHP, HTML, CSS e JavaScript.
Le applicazioni supportano i plug -in per molte ragioni e alcune di esse lo sono:
  * Non modificare la funzionalità di base.
  * Consenti agli sviluppatori di creare nuove funzionalità.
  * Ridurre le dimensioni del software.
Discuteremo in dettaglio gli argomenti seguenti in questo tutorial.
* [ **prerequisiti** ][2]
* [ **Nozioni di base sullo sviluppo del plugin phlist** ][3]
* [ **Crea il nostro plug -in flist** ][4]
* [ **conclusione** ][5]

## Prerequisiti {#Req}

  * Ultima versione di Phplist.
  * Familiare con Phplist e PHP.
  * Comprensione di HTML / CSS e JavaScript.

## Nozioni di base sullo sviluppo del plug -in flist {#Basics}

I seguenti metodi miglioreranno la funzionalità di un plug -in flist.
* **Pagine** - Crea pagine per attività come reporting, statistiche, visualizzare informazioni e molte altre.
* **Hooks** - Ciò consente di invocare funzionalità in luoghi specifici.
Esistono tre tipi di plugin speciali per Phplist. Un plug -in di ogni tipo può essere abilitato.
* **Plug -in editor** - consente l'implementazione dell'editor per la modifica di campagne o modelli.
* **Plug -in di autenticazione** - Ciò consente di aggiungere un nuovo meccanismo per l'autenticazione degli amministratori.
* **Plug-in mittente e-mail** -consente di implementare un nuovo metodo per l'invio e-mail anziché per la funzionalità integrata.

## Crea il nostro plug -in flist {#Create}

Prima di tutto, è necessario estendere la classe principale di Phplistplugin. Per creare un plug -in, è necessario creare una directory denominata "Helloworld" sotto il plugin \ _rootdir e creare un file chiamato Helloworld.php nella directory radice dei plugin. È possibile controllare il file config.php per trovare il valore per la variabile plugin \ _rootdir. Copia di seguito il codice nel file Helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
È necessario impostare $ CODEROOT nella directory del plugin. Per assicurarsi che il plugin sia inizializzato correttamente, è necessario chiamare il costruttore genitore. Crea un file main.php e inseriscilo nella directory del plug -in. Copia il seguente codice in esso.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Posizionare il file di classe Helloworld.php e la directory del plug -in in ROOTDIR per installare il plug -in. Per attivare un plug -in, fare clic sulla scheda Configurazione nella barra dei menu, quindi fare clic sui plugin Gestisci. La pagina del plug -in mostrerà un elenco di plugin disponibili e puoi abilitare/disabilitare il modulo del plug -in lì.
Puoi accedere al tuo plug -in con il seguente URL come http://example.com/admin/?page=main&pi=helloworld. Sostituisci Esempio.com con il tuo nome di dominio.

## Conclusione {#Con}

Abbiamo imparato le basi del plug -in **Phplist** e creato un plug -in campione. Come punto di partenza, è possibile seguire questa linea guida ed esplorare ulteriormente lo sviluppo del plugin per migliorare la funzionalità.
Infine, [ **Containerize.com**][6] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, resta in contatto con questa categoria [**newsletter** ][7] per gli ultimi aggiornamenti.

## Esplorare
È possibile trovare i seguenti collegamenti pertinenti.
* [ **phplist** ][8]
* [ **MailTrain** ][9]
* [ **ListMonk** ][10]
* [ **moonmail** ][11]
* [ **Mailman** ][12]
* [ **Software di newsletter Open Source Top 5 nel 2021** ][13]
* [ **Come configurare l'applicazione multi-tenant in phplist** ][14]
* [ **Come creare e inviare newsletter usando phplist** ][15]



[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
