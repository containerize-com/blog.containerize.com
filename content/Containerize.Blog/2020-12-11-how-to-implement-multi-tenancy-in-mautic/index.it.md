---
title: "Come implementare la multi-tenancy in mautico" 
seoTitle: "Come implementare la multi-tenancy in mautico" 
description: "Mautic è una soluzione di automazione del marketing open source. L'implementazione della multi-tenancy in Mautic riduce i costi, migliora l'efficienza e la sicurezza." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Risparmia i costi e massimizza l'utilizzo delle risorse implementando la multi-tenancy in Mautic. La multi-tenancy aiuta nelle personalizzazioni del codice, negli aggiornamenti delle app, nella produttività migliorata e nella facile manutenzione." 
url: /it/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Risparmia i costi e massimizza l'utilizzo delle risorse implementando la multi-tenancy in Mautic. La multi-tenancy aiuta nelle personalizzazioni del codice, negli aggiornamenti delle app, nella produttività migliorata e nella facile manutenzione.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Come implementare la multi-tenancy in mautico">}}

Mautic è una soluzione di automazione del marketing gratuita e open source che ti dà il controllo completo delle e -mail di marketing, delle pagine di destinazione, dei flussi di lavoro e delle misure per le tue attività di marketing. Copriremo le seguenti sezioni in questo tutorial:
  * [Cos'è multi-tenancy][1]
  * [Cosa è mautico][2]
  * [Implementa multi-tenancy in mautico][3]
  * [Conclusione][4]

## Cosa è multi-tenancy   {#multi-tenancy}
Nell'architettura software multi-tenant, un'unica istanza di un'applicazione software serve più inquilini. Ogni dati degli inquilini è isolato da altri inquilini che condividono la stessa istanza dell'applicazione. Questi inquilini sono logicamente isolati, ma fisicamente integrati. Ciò garantisce la sicurezza e la privacy dei dati per tutti gli inquilini. La creazione di più inquilini da un'unica istanza dell'applicazione richiede molta meno memoria. Gli inquilini condividono le risorse e riducono i costi per la manutenzione del software, le infrastrutture e le operazioni di data center. I costi tendono ad essere inferiori a quelli di un'infrastruttura a tenant singolo.

## Cosa è mautico   {#mautic}
[Mautic][5] è un software di marketing gratuito e open source. Automatizzare le attività di marketing ripetitive come campagne di marketing, generazione di lead, segmentazione dei contatti, ecc. Utilizzando Mautic. Ha funzionalità sorprendenti tra cui generazione di lead, costruzione di campagne, segmentazione di contatto, costruttore di e -mail, test A/B, costruttore di pagine, nutrimento di lead e altro ancora. Mautic supporta anche l'integrazione con tutte le piattaforme social popolari, ad es. Facebook, Twitter, LinkedIn. Tutte queste incredibili funzionalità ti aiutano a rafforzare l'esperienza complessiva del cliente e migliorare l'automazione del marketing per la tua attività.

## implementa multi-tenancy in mautic   {#implement}
  * Crea un nuovo database vuoto chiamato "Main_DB".
  * Quindi crea una tabella denominata "inquilino" che conterrà i dettagli su tutti gli inquilini.
  * Avrà 3 campi tra cui il sito \ _name, url e db \ _name come mostrato nella figura

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Come implementare la multi-tenancy in mautico">}}

  * Dopo quello aprire il file mautico/app/paths.php e aggiungere questo codice:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Questo selezionerà il file di configurazione corrispondente sulla base del percorso URL.
  * Quindi copiare il database dell'installazione mautica corrente e usarlo per il nuovo inquilino.
  * Successivamente, crea una copia di mautic/app/config/local.php e rinominala in [site_name] .php.
  * Infine aggiornare il nome del database, l'host, la password e l'utente in base al nuovo database.

## conclusioni   {#conclusion}
Mautic è una soluzione di automazione del marketing gratuita, alla preparazione e orientata alla qualità. Ti consente di creare campagne di marketing, segmenti, forme, report e molto altro. L'implementazione della multi-tenancy in Mautic riduce i costi, migliora l'efficienza, la scalabilità e la sicurezza. Crea facilmente centinaia di inquilini da una sola installazione.

## Esplorare
Per saperne di più su Mautic e Facebook, visitare:
  * [Mautico | Piattaforma tecnologica di marketing di contenuti open source][5]
  * [Come configurare campagne mautiche usando la campagna builder][6]
  * [Drupal Mautic Integration per automatizzare il nutrimento dei lead][7]
  * [Automazione del marketing con integrazione mautica e woocommerce][8]
  * [Integrate Mautic & Joomla per l'automazione del marketing digitale][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
