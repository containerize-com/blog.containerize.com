---
title: "Imposta la gestione avanzata del rimbalzo e le regole di rimbalzo in flist" 
seoTitle: "Imposta la gestione avanzata del rimbalzo e le regole di rimbalzo in flist" 
description: "Abilita la gestione avanzata del rimbalzo in flist e gestire le e -mail di rimbalzo. Crea regole di rimbalzo e automatizza il processo per intraprendere varie azioni sui messaggi restituiti." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "A seconda del tipo di codice di errore di rimbalzo che viene restituito da MTA, Advanced Bounce Management consente l'esecuzione automatizzata di diverse azioni." 
url: /it/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## A seconda del tipo di codice di errore di rimbalzo che viene restituito da MTA, Advanced Bounce Management consente l'esecuzione automatizzata di diverse azioni.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Imposta la gestione avanzata del rimbalzo e le regole di rimbalzo in flist">}}

Nel nostro tutorial [precedente [1], avevamo già affrontato **Phlist Bounce Processing **. Se non hai familiarità con l'elaborazione di rimbalzo, puoi leggerlo. Puoi scaricare e -mail non consegnate al tuo progetto Phlist utilizzando l'elaborazione di rimbalzo. Come si tratta di e -mail scaricate? Non ho idea, diamo un'occhiata alla gestione anticipata del rimbalzo che ti consente di risolvere ** e -mail di rimbalzo** . Ogni messaggio di posta elettronica restituito ha un codice di errore che viene restituito dall'MTA (agente di trasferimento di posta). Inoltre, è possibile rivedere l'intestazione e -mail del messaggio restituito e contiene tutte le informazioni lungo il codice di errore.
  * [Abilita la gestione avanzata del rimbalzo][2]
  * [Aggiungi regola di rimbalzo][3]
  * [Elenco Regole di rimbalzo][4]
  * [Conclusione][5]

## Abilita Gestione del rimbalzo avanzata   {#enable}
Per prima cosa, abilita la gestione avanzata  **rimbalzo**  copiando sotto il codice nel file config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Successivamente, vai a  **Sistema> Gestisci rimbalzi> Elenca le regole di rimbalzo**  per la creazione di regole di rimbalzo.
È possibile creare regole di rimbalzo basate su espressioni regolari. Puoi trovare il motivo per cui  **e -mail rimbalza**  nell'intestazione e usarlo per un'espressione regolare. Inoltre, selezionare le azioni appropriate in base al codice di errore o all'espressione regolare. Phplist supporta le seguenti azioni. La dichiarazione di azione è autoesplicativa, quindi non abbiamo bisogno di andare in dettaglio.
  * Elimina abbonato
  * Abbonato non conferma
  * Abbonato nella lista nera
  * Indirizzo email nella lista nera
  * Elimina abbonati e rimbalzo
  * Sottoscrizione non conferma ed elimina il rimbalzo
  * Aggiungi abbonato all'elenco non-non-send ed elimina il rimbalzo
  * Aggiungi indirizzo email all'elenco non-non-send ed elimina il rimbalzo
  * Elimina il rimbalzo

## Aggiungi regola di rimbalzo   {#Add}
Creiamo la nostra prima regola di rimbalzo.
  *Innanzitutto, inserisci un'espressione regolare come  **(l'account è stato sospeso | account non disponibile)** 
  * Successivamente, seleziona Azione appropriata
  * Infine, aggiungi Nota/Memo per la regola

{{< figure align=center src="images/add-bounce-rule.png" alt="Crea la regola di rimbalzo in Phplist">}}

È possibile aggiungere regole di rimbalzo per i seguenti motivi e selezionare le azioni appropriate per la gestione di rimbalzi. Tuttavia, è possibile cercare risposte SMTP e aggiungere più regole all'elenco.
  * Destinatario archiviato
  * type = mx: host non trovato
  * scusa, nessuna cassetta postale qui con quel nome
  * Cassetta postale disabilitata
  * l'account è disabilitato
  * Questa casella di posta è stata bloccata a causa dell'inattività
  * Utente sconosciuto
  * Nessun tale destinatario
  * e così via …
**Nota: **È necessario avvolgere la ragione di rimbalzo tra parentesi e utilizzare il simbolo del tubo  **| **  o ** o** , se si desidera aggiungere più motivi in ​​una regola di rimbalzo.

## Elenco GOUNCE REGOLE   {#List}
Dopo aver creato un numero di regole, l'elenco  **rimbalzo**  sembrerà come nel sotto screenshot. Puoi fare altre azioni come le modifiche agli ordini ed eliminare in questa pagina.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Elenco delle regole di rimbalzo">}}


## conclusioni   {#conclusion}
In questo tutorial, abbiamo appreso di avanzare  **Management di rimbalzo**  e sviluppato le regole di rimbalzo necessarie. Sarebbe bello consentire questa funzione in modo da poter automatizzare il processo di pulizia degli indirizzi e -mail non validi dai tuoi elenchi. Ti consentirebbe anche di mantenere il livello minimo di e -mail restituite. Inoltre, le tue liste avranno abbonati legittimi.
Inoltre, [containerize.com][6] è sulla buona strada per migliorare lo stack di prodotti open source in più lingue e framework. Per aggiornamenti regolari, rimanete sintonizzati nella categoria [newsletter][7] per articoli più interessanti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Phplist - Newsletter open source e software di email marketing][8]
  * [Come creare e inviare newsletter usando phplist][9]
  * [Come configurare ed elaborare i rimbalzi in phplist][1]
  * [Guida per principianti per lo sviluppo del plug -in Phlist][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
