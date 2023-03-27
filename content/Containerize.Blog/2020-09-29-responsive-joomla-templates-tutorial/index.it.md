---
title: "Guida allo sviluppo del modello Joomla per i principianti" 
seoTitle: "Guida allo sviluppo del modello Joomla per i principianti" 
description: "Impara lo sviluppo del modello di Joomla, come impostare layout reattivi per vari casi d'uso. Set di file che definiscono il livello di progettazione di un sito Web aziendale." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Costruisci modelli Joomla altamente professionali e personalizzabili che offrono un sacco di funzionalità come schemi di colori multilingue, SEO / user friendly e ricchi." 
url: /it/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Costruisci modelli Joomla altamente professionali e personalizzabili che offrono un sacco di funzionalità come schemi di colori multilingue, SEO / user friendly e ricchi. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Sviluppo del modello Joomla">}}


Panoramica ##
Un sito Web di business ben progettato gioca un ruolo vitale per portare e trattenere i visitatori dando loro la facilità di navigazione. **Full ha caratterizzato Joomla** facilita i suoi utenti con una serie di layout reattivi e lo sviluppo del modello Joomla che controllano l'estetica di un sito Web aziendale.
Durante la fase di sviluppo, il posizionamento degli elementi di progettazione è molto fondamentale per ottenere:
  * Consistenza
  * Navigazione facile
  * Semplicità
  * Compatibilità mobile
  * Leggibilità
Ecco che arrivano i modelli **Joomla** . Questo software open source fornisce disposizione per sviluppare o utilizzare layout reattivi predefiniti per tutte le pagine Web piuttosto che scrivere il codice per ciascuna pagina separatamente.
In questo post sul blog, impareremo le seguenti cose su come creare e configurare un **modello di facile utilizzo** in Joomla.
* [ **Cosa sono i layout Joomla?** ][2]
* [ **Come creare un semplice modello reattivo in Joomla?** ][3]
* [ **Come installare un modello Joomla?** ][4]
* [ **conclusione** ][5]

## Cosa sono i layout di Joomla? {#what}

Joomla fornisce modelli per la parte anteriore e per il back -end. Viene fornito con molti modelli pronti e offre agli sviluppatori di costruire **temi bootstrap reattivi gratuiti** in base ai loro casi d'uso. Esistono due tipi di modelli in Joomla.
**Modelli front-end:**  relativi all'utente che affronta parte di un sito Web aziendale.
**Modelli di back-end:**  Questi modelli sono collegati alla logica aziendale di un sito.

## Come creare un semplice modello reattivo in Joomla? {#how}

In questa sezione, tratteremo i passaggi di questo tutorial del modello Joomla.
Prima di saltare in questa sezione, assicurati di avere una comprensione di quanto segue:
  * Html
  * CSS
  * JavaScript
  * Php
Quindi, creare modelli personalizzati in Joomla non è mai stato così difficile e complesso. Tuttavia, iniziamo a creare il nostro primo modello Joomla.

## **Struttura della directory di configurazione** 
Prima di tutto, crea una cartella chiamata " **MyTemplate**" all'interno della cartella "**Modelli** ".
Crea i seguenti file all'interno della cartella " **MyTemplate** ":
* **INDICE.php** : questo è il file principale che contiene il codice HTML e PHP per le pagine di interi modelli.
* **templatedEtails.xml** : questo file contiene i meta dati del modello ed è obbligatorio per essere notato da Joomla.
Ora, crea tre cartelle all'interno della cartella " **MyTemplate** " con i seguenti nomi:
* **JS** : questa cartella conterrà tutti i file JavaScript necessari per il modello
* **CSS** : tutti i file CSS per lo styling arriveranno in questa cartella
* **Immagini** : le immagini utilizzate dal modello risiederanno in questa cartella
Crea un file CSS chiamato " **template.css**" all'interno della cartella "**CSS** ".
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Alla fine, ecco come sarà la struttura della directory.

## Mettiamo un po 'di codice
Metti questo codice nel file **templateDetails.xml** .
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Come accennato in precedenza, questo file contiene i metadati sui layout reattivi definiti tra i tag di markup. Tuttavia, è possibile modificare le informazioni generali come il nome, l'autore e la descrizione.
Questo file contiene anche informazioni sugli altri file e cartelle utilizzati dal modello.
Ora, apri il file **indice.php** e inizia a mettere il seguente codice:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Questo file inizierà con questa riga che impedisce agli altri di leggere il tuo codice PHP.
```
<!DOCTYPE html>
```
Questo per far conoscere al browser il tipo di documento.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
I documenti HTML iniziano con questa riga e l'attributo **xmlns** indica lo spazio dei nomi XML per il documento.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
La prima riga dopo il tag dice a Joomla di mettere informazioni sull'intestazione come informazioni sui metadati e titolo di pagina.
Esiste un collegamento al foglio di stile esterno nella seconda riga e la terza riga collega il file JavaScript esterno.
Il resto dei file consente il bootstrap nel modello.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
La sezione del corpo inizia dopo che la sezione della testa contiene tutti i dati che verranno riflessi nel modello per l'utente di visualizzare e navigare.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Questa affermazione si chiama istruzione JDOC che viene utilizzata per istruire Joomla ad aggiungere un modulo chiamato "Position-7". Esistono diverse dichiarazioni JDOC che vengono spesso utilizzate nello sviluppo del modello **Joomla** .
Questo è il file Final Complete **Index.php** con tutto il codice richiesto per un modello di Joomla di base.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Tutto è a posto per un modello molto semplice. Ora, è tempo di installarlo sul server Joomla e vedere come va avanti.

## Come installare il modello Joomla? {#install}

Il processo di installazione del modello Joomla è piuttosto dritto e facile. Ci sono i seguenti passaggi da installare:
Vai a “Extensions -> Gestisci -> Installa

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla Installa l'immagine di configurazione">}}

Qui puoi vedere il tuo modello Joomla di recente sviluppo nell'elenco come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Elenco dei modelli di Joomla">}}

Ora, seleziona il modello, premi "Installa" e un messaggio di successo apparirà sull'installazione riuscita.
Dopo aver installato il modello, è possibile accedere e modificare i file del modello all'interno del pannello di controllo di Joomla e visualizzare l'opzione delle modifiche dall'opzione "Anteprima del modello".

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Ora, puoi visualizzare il tuo primo modello Joomla nel browser!

## Conclusione {#Conclusione}

Un modello buono e reattivo è la base per la modellazione complessiva del sito. **Layout reattivo** a Joomla sono multifunzionali e possono essere utilizzati per vari progetti. Dalla scrittura del codice allo sviluppo del modello Joomla diventa molto semplice con l'aiuto di un dashboard di amministrazione intuitivo. Joomla fornisce il controllo completo sullo sviluppo del modello per soddisfare i desideri dell'utente.
Poiché il software **CMS** la categoria è in costante miglioramenti e verranno aggiunti altri tutorial su altri sistemi di gestione dei contenuti all'elenco, rimani in contatto con la sezione [Sistema di gestione dei contenuti][6] per aggiornamenti regolari.

## pagine di prodotto pertinenti
Potresti trovare i seguenti collegamenti pertinenti:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Fork][15]
  * [Refinery CMS][16]
  * [Locomotivecms][17]



[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
