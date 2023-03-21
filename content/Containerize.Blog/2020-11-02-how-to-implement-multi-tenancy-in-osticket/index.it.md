---
title: "Personalizzazione Osticket-Implementare il multi-tenancy in osticket" 
seoTitle: "Personalizzazione Osticket-Implementare il multi-tenancy in osticket" 
description: "L'implementazione di multi-tenancy in osticket può risparmiare costi e utilizzo delle risorse. In questo articolo, faremo la personalizzazione degli osticchi per raggiungere la multi-tenancy." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Helpdesk multi-tenant Osticket consente di creare più inquilini da una singola installazione. Ciò fa un uso ottimale delle risorse del server Web." 
url: /it/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Helpdesk Multi-tenant Osticket ti consente di creare più inquilini da una singola installazione. Ciò fa un uso ottimale delle risorse del server Web.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Personalizzazione Osticket - Implementare il multi -tenancy in osticket">}}

In questo articolo discuteremo di come effettuare la personalizzazione dell'osticket per implementare la multi-tenancy. Questo post coprirà i seguenti argomenti:
  * [Panoramica dell'osticket][1]
  * [Panoramica multi-tenancy][2]
  * [Vantaggi della multi-tenancy][3]
  * [Implementazione][3]
  * [Conclusione][4]

## panoramica dell'osticket:   {#osticket}
[Osticket][5] è un software di help desk basato sull'assistenza clienti online open source. Fornisce un pannello di controllo intuitivo e un componente di reporting in tempo reale. Ha un modulo di gestione delle informazioni facile da usare. Ciò ti consente di creare richieste dai moduli telefonici, e-mail e basati sul Web. Che offre numerose opzioni per aiutare a personalizzare tutte le parti dell'esperienza di supporto del cliente come commenti e notifiche e -mail.

Panoramica multi-tenancy:  {#multitenancy}
Il multi-tenancy si riferisce all'implementazione, in cui molteplici istanze indipendenti di un'app operano in un ambiente condiviso. Le istanze (inquilini) sono logicamente isolate, ma fisicamente integrate. Un'organizzazione può avere più dipartimenti. Quindi possono creare più inquilini/istanze della stessa app. Ad esempio, nel nostro caso, un sistema di helpdesk può essere configurato per diversi domini della stessa organizzazione. Potrebbero esserci centinaia di inquilini ma utilizzeranno tutti gli stessi file e quindi lo stesso archiviazione. Ciò ridurrà i costi di archiviazione e renderà più facili gli aggiornamenti. Gli sviluppatori devono solo aggiornare i file da un posto invece di apportare modifiche per ciascun sito separatamente.

## Quali sono i vantaggi della multi-tenancy?   {#benefici}
Ecco alcuni vantaggi cruciali della multi-tenancy
***Ottimizzazione delle risorse:**Una macchina riservata a un inquilino non è efficiente. Perché non è probabile che un inquilino utilizzi tutta la potenza di calcolo della macchina. La condivisione di macchine massimizzerà la disponibilità delle risorse.
***Costi inferiori:**Con più inquilini che condividono le stesse risorse costeranno molto più basse rispetto a se ogni inquilino richiedesse la propria infrastruttura dedicata.
***Hosting efficiente:**Anche l'osticket multi-tenant ridurrà al minimo i costi di hosting in un ambiente condiviso.
***Sicurezza:**Con una minore interazione con il mondo esterno, l'esposizione a software dannoso è ridotta.
***Easy Upgrade**: aggiorna i file solo in un posto invece di aggiornarli separatamente. Questo farà risparmiare molto tempo e fatica.

## implementazione di osticket multi-tenant:   {#implementation}
  * Creare un nuovo nome di database vuoto come "main_db".
  * Quindi crea una tabella denominata "inquilino" che conterrà i dettagli su tutti gli inquilini.
  * Avrà seguenti campi:
  1. SITE_NAME
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Personalizzazione Osticket - Implementare il multi -tenancy in osticket">}}

  * Il sito \ _name manterrà il nome dell'inquilino. Il campo URL terrà l'URL completo dell'inquilino. Il campo DB \ _name terrà il nome del database che verrà creato per il nuovo inquilino.
  * Dopo quello aperto /include/ost-config.php e aggiungi il seguente codice
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Questo codice aggiornerà la connettività del database predefinito. Avrà prima l'URL dell'attuale inquilino. Quindi otterrà il nome del database secondo quell'URL. È così che l'app saprà a quale database connettersi. Ogni inquilino avrà un database separato. Il database verrà selezionato sulla base dell'URL degli inquilini.
  * Per la creazione di un nuovo inquilino, è sufficiente impostare il nuovo dominio inquilino sul server Nginx. Successivamente copia semplicemente l'attuale database Osticket e rinominalo. Infine aggiungere la voce nella tabella "inquilino" del database "main_db".

## conclusione:   {#conclusion}
Osticket è un software di gestione dell'help desk IT gratuito e open source. Abbiamo imparato come fare le personalizzazioni degli osticchi per implementare la multi-tenancy in osticket per risparmiare costi, ottimizzare l'app e ridurre i requisiti delle risorse. Renderà la vita più facile per gli sviluppatori creare nuovi inquilini in alcuni semplici passaggi. Quindi crea più inquilini di osticket dalla stessa installazione.

## Esplorare:
Verifica la seguente pagina per saperne di più su Osticket:
  * [Osticket - un software helpdesk open source gratuito][5]
  * [Una guida per principianti per lo sviluppo del plugin Osticket][6]
  * [Come impostare il software di help desk online utilizzando Osticket][7]
  * [Automatizza il sistema di biglietteria utilizzando WordPress e Osticket][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
