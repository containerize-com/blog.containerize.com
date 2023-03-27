---
title: "Guida per principianti per creare un modello di Joomla di base" 
seoTitle: "Guida per principianti per creare un modello di Joomla di base" 
description: "Joomla è un popolare sistema di gestione dei contenuti open source. In questo tutorial, spiegheremo passo dopo passo come creare un modello Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla è uno dei sistemi di gestione dei contenuti open source più popolari. Questo tutorial ti guiderà attraverso i passaggi necessari per la creazione di un modello Joomla da zero." 
url: /it/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla è uno dei sistemi di gestione dei contenuti open source più popolari. Questo tutorial ti guiderà attraverso i passaggi necessari per la creazione di un modello Joomla da zero.

{{< figure align=center src="images/joomla-templates-2.png" alt="Modello di base Joomla">}}

In questa era digitale, un sistema di gestione dei contenuti è una necessità fondamentale di qualsiasi azienda per tutte le loro esigenze di creazione di contenuti. E ci sono un certo numero di software Open-Source e CMS a pagamento disponibili sul mercato. Abbiamo anche [elencato][1] alcuni dei migliori software di gestione dei contenuti open source per le aziende. Joomla è uno dei più popolari software CMS open source e in questo tutorial ti guideremo attraverso il passo e spiegheremo come creare un modello Joomla da zero. Quindi iniziamo!
 **Nota: supponiamo che tu abbia una versione Joomla 2.5 installata** 
*  **[Struttura della directory di configurazione][2]**  
*  **[Crea un file templatedEtails.xml di base][3]**  
*  **[Crea un file indice.php di base][4]**  
*  **[Modello di scopri e installazione][5]**  
*  **[Pacchetto il modello][6]**  
*  **[Conclusione][7]**  

## Struttura della directory di installazione {#setup}

Per creare prima un modello Joomla molto semplice, crea una nuova cartella nella cartella dei modelli. Dai un nome alla cartella come vuoi chiamare il tuo modello, ad esempio “  **myNewTemplate**  “.
Utilizzando il tuo editor di testo preferito crea i file  **INDICE.php** e  **templateDetails.xml**  . Per gestire le tue immagini e le tue fogli di stile, crea 2 nuove cartelle chiamate  **immagini**  e  **CSS**  . All'interno della cartella  **CSS**  Crea un file chiamato **template.css**  .
La tua struttura di directory sarà simile a questa

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Struttura della directory del modello Joomla">}}


## Crea un file di base TemplateDetails.xml {#xml}

Il file  **templateDetails.xml**  contiene tutti i metadati sul tuo modello. E questo file è essenziale senza di essa, il tuo modello non sarà visto da Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
I contenuti dei templateEtails.xml sono autoesplicativi. È possibile copiare il contenuto IL BIT MODIFICATI.
Lascia le posizioni come sono: queste sono un set comune, quindi sarai in grado di passare facilmente dai modelli standard.

## Crea un file indice.php di base {#php}

L'index.php diventa il file bootstrap principale di ogni pagina che Joomla! consegna. Questa pagina mostrerà il codice Bare Bones pronto per tagliare e incollare nel tuo design.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Scopri e installa il modello {#install}

Per prima cosa hai bisogno di dirlo a Joomla! che hai creato un nuovo modello. Questa funzione si chiama Extensions Discover e è possibile accedere tramite
```
Extensions -> Extension Manager -> Discover
```
Fai clic sul pulsante Scopri per scoprire il modello, quindi selezionalo e fai clic su Installa per installarlo. Ora il tuo modello dovrebbe essere visualizzato in The Template Manager (Styles), accessibile tramite
```
Extensions -> Template Manager
```

## Imballare il modello {#packge}

Una directory decompressa con diversi file non è un buon metodo per la distribuzione. Quindi, per motivi di distribuzione, dovremmo creare un pacchetto del nostro modello. Il pacchetto può essere in formato zip (con un'estensione .zip).
Se il tuo modello è in una directory MyTemplate/ Quindi per creare il pacchetto puoi connetterti a quella directory e utilizzare comandi come:
```
zip -r ..\mytemplate.zip .
```

## Conclusione {#conclusion}

In questo articolo, abbiamo appreso del modello Joomla. Abbiamo attraversato il passo su come creare un modello Joomla. Questo è solo un tutorial molto semplice per iniziare con la creazione di template. Naturalmente, puoi creare un modello molto personalizzato e migliorato basato su questa struttura a osso nudo.

## pagine di prodotto pertinenti
Potresti trovare i seguenti collegamenti pertinenti:
  * [Guida allo sviluppo del modello Joomla per i principianti][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
