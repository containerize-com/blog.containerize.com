---
title: "Come configurare l'applicazione multi-tenant in phplist" 
seoTitle: "Come configurare l'applicazione multi-tenant in phplist" 
description: "Phplist è un software di newsletter gratuito e open source. Configurare l'applicazione multi-tenant ed eseguire diverse istanze di un'applicazione in un ambiente condiviso." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutorial per sviluppare un'applicazione multi-tenant in flist. La funzione multi-tenant utilizza una singola installazione per più host per ridurre i costi di hosting." 
url: /it/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

Tutorial ## per sviluppare un'applicazione multi-tenant in Phplist. La funzione multi-tenant utilizza una singola installazione per più host per ridurre i costi di hosting.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Phlist di applicazione multi-tenant">}}

In questo articolo, tratteremo **What Is Multi-Tenancy**e come possiamo configurare**Applicazione multi-tenant** in Phplist.

## Cos'è Phplist?
Quando si decide la strategia di marketing, l'email marketing è una parte fondamentale di ogni azienda digitale online. Phplist consente alle aziende di raggiungere un vasto pubblico. Phplist è ampiamente utilizzato **Software di newsletter open source** per la gestione degli elenchi e l'invio di newsletter. Aiuta le aziende a creare, programmare, inviare e analizzare le campagne di newsletter. Phplist supporta funzionalità come analisi, segmentazione, elaborazione di rimbalzo, plugin, API e molti altri.

## Cos'è multi-tenancy?
La multi-tenancy è un'architettura in cui molti clienti/siti sono rappresentati da un'unica istanza di un'applicazione software. In multi-tenancy, il sito è considerato un inquilino. Ogni inquilino ha caratteristiche specifiche come configurazione, temi, SMTP.
Un aspetto importante del cloud computing è multi-tenancy. L'architettura multi-tenant**aiuta le aziende a ottenere un ROI migliore diminuendo i costi di manutenzione e rapidi aggiornamenti degli inquilini. Inoltre, le applicazioni progettate sull'architettura dei multi-inquilini possono essere facilmente scalabili.
Possiamo implementare la multi-tenancy utilizzando i seguenti approcci.
  * Database condiviso per tutti gli inquilini.
  * Database separato per ogni inquilino.
Utilizzeremo un database separato per ogni approccio inquilino per implementare la multi-tenancy in Phplist.
  * [Flusso di richieste maneggere][1]
  * [Setup Database per inquilino][2]
  * [Configura Nginx per l'inquilino][3]

## Flusso di richieste di manette {#request}

  * Prendi un backup del file config.php e puoi trovarlo sotto la directory di configurazione.
  * Crea un nuovo file config.php e aggiungi il seguente codice per la gestione di siti/inquilini.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Sostituisci Esempio.com con il tuo nome di dominio. È inoltre necessario creare un file di configurazione per ogni inquilino. Copia il file di backup di config.php e salvalo con un nuovo nome come config.example.com.php.

## Database di configurazione per l'inquilino {#database}

  * Prendi un backup del database Phlist esistente. Usalo per creare un database per il nuovo inquilino.
  * Apri il file config.example.com.php. Modificare le credenziali del database e qualsiasi altra impostazione secondo l'ambiente.

## Configurare nginx per l'inquilino {#Nginx}

* Vai alla directory Nginx **CD/etc/nginx/siti-disponibile** .
  * Copia il file di config.php predefinito e salvalo con il nome del tuo sito come esempio.com.
* Apri la configurazione di esempio.com con **sudo nano esempio.com** .
  * Modifica il percorso root, Server_name e qualsiasi altra impostazione.
* Test Configurazioni con **SUDO NGINX -T** 
* Infine, crea SymLink eseguendo **Sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-aabled/** 
* Riavvia Nginx Web Server eseguendo **Sudo SystemCtl Riavvia Nginx** , quindi può caricare il file di configurazione appena creato.

## Conclusione
Il software multi-tenancy presenta alcuni vantaggi rispetto alle applicazioni a singola tenuta come ridurre i costi di manutenzione, un utilizzo efficace delle risorse e aggiornamenti facili da installare. Se hai intenzione di costruire software SAAS (software come servizio), puoi seguire l'architettura multi-tenancy e goderti la sua vera potenza.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Phplist - Newsletter open source e software di email marketing][4]
  * [Come creare e inviare newsletter usando phplist][5]
  * [Come configurare ed elaborare i rimbalzi in phplist][6]
  * [Guida per principianti per lo sviluppo del plug -in Phlist][7]
  * [Setup Advanced Bounce Management e Bounce Regole in Phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
