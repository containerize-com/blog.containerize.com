---
title: "Una guida per principianti per creare il modulo Prestashop" 
seoTitle: "Una guida per principianti per creare il modulo Prestashop" 
description: "Prestashop è un software di eCommerce open source efficiente ed economico per configurare il negozio online. I componenti aggiuntivi di prestashop aiutano i proprietari di negozi ad espandere le funzionalità." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "I moduli Prestashop sono piccoli programmi che ti consentono di migliorare la funzionalità del tuo negozio. Impareremo come costruire un modulo di base in questo tutorial." 
url: /it/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## I moduli Prestashop sono piccoli programmi che ti consentono di migliorare la funzionalità del tuo negozio. Impareremo come costruire un modulo di base in questo tutorial.

{{< figure align=center src="images/prestashop-module.png" alt="Modulo Prestashop">}}

**Prestashop ** è un software di e -commerce gratuito al 100% e open source. Ciò consente ai proprietari di negozi di impostare facilmente la loro presenza online e di ampliare le attività su larga scala. Prestashop viene fornito con funzionalità predefinite e puoi aver bisogno di più funzionalità per i requisiti aziendali occasionalmente. Il mercato di Prestashop è un posto fantastico per trovare funzionalità aggiuntive che possono essere utilizzate per espandere la funzionalità del negozio. Inoltre, puoi trovare moduli sia gratuiti che a pagamento sul mercato. Tuttavia, è possibile creare anche un modulo personalizzato da zero.
Discuteremo in dettaglio gli argomenti seguenti per  **Crea il modulo Prestashop ** .
  * [Requisiti][1]
  * [Nozioni di base sullo sviluppo del modulo][2]
  * [Crea il nostro modulo Prestashop][3]
  * [Conclusione][4]

Requisiti ##  {#req}
  * Installa Prestashop 1.6 o superiore.
  * Familiare con Prestashop.
  * Comprensione di PHP.

## basi di sviluppo del modulo   {#basics}
Prima di iniziare a codificare, è davvero importante conoscere i concetti fondamentali per  **Prestashop Module Development ** . Ti permetterà di costruire e gestire rapidamente il tuo modulo.
**Configurazione ** - La configurazione consente di salvare i dati nel database del negozio senza richiedere una tabella specifica del modulo. La tabella di configurazione contiene un elenco di proprietà del valore chiave a cui è possibile accedere da qualsiasi luogo.
**Hooks ** - I ganci sono un modo per collegare eventuali eventi prestashop con il tuo codice. Puoi usare hooks per posizionare il codice in pagine e per azioni specifiche come l'invio di e -mail su un determinato evento.
**Widget ** - Gli sviluppatori di moduli utilizzano widget per visualizzare il contenuto ove richiesto.
**Dottrina ** - La dottrina è ORM consente di gestire i dati del database tramite oggetti. Ciò fornisce un livello astratto che consente di eseguire azioni di inserimento/aggiornamento con una chiamata semplice.

## Crea il nostro modulo Prestashop   {#Create}
  *Crea la directory del modulo denominata  **myfirstmodule **  in  **moduli **  directory dell'installazione di prestashop. Posiziona tutti i file nella directory del modulo.
  *Crea file principale con il nome  **myfirstmodule.php **  e copiare il seguente codice in esso.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  *Crea  **install () **  e  **Uninstall () **  Metodi. Aggiungi i seguenti metodi nel file  **myfirstmodule.php ** .
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Chiama metodi speciali per attivare i nostri ganci registrati. Useremo questi metodi per visualizzare "Hello World!" testo alle barre laterali. Aggiungi il seguente codice nel file  **myfirstmodule.php ** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *Infine, Apri la sezione Amministratore, Carica e  **Installa il modulo Prestashop ** .

## conclusioni   {#conclusion}
Abbiamo discusso di concetti fondamentali per la costruzione del modulo  **Prestashop **  in questo tutorial. Inoltre, abbiamo sviluppato un modulo di base che può essere utilizzato come punto di partenza per moduli più avanzati. [Containerize.com][5] sta lavorando costantemente a nuovi post sul blog di tutorial. Per gli ultimi aggiornamenti, rimani in contatto con la categoria [software carrello della spesa][6].

## Esplorare
È possibile trovare i seguenti collegamenti utili oltre al tutorial di creazione del modulo  **Prestashop ** .
  * [Prestashop - software del carrello per la spesa gratuita][7]
  * [Top 5 software di carrello per la spesa open source nel 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
