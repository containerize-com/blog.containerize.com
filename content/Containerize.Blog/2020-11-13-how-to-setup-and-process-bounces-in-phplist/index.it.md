---
title: "Come configurare ed elaborare i rimbalzi in flist" 
seoTitle: "Come configurare ed elaborare i rimbalzi in flist" 
description: "Phplist è una potente mailing list autonomamente e responsabile della newsletter. Aiuta le aziende a inviare le campagne di newsletter e i processi rimbalzano facilmente." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Invia una campagna con la newsletter open source e il software di email marketing. Imposta la gestione del rimbalzo in phlist e automatizzare l'elaborazione di rimbalzo per mailing list sani." 
url: /it/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Invia una campagna con la newsletter open source e il software di email marketing. Imposta la gestione del rimbalzo in phlist e automatizzare l'elaborazione di rimbalzo per mailing list sani.

{{< figure align=center src="images/phplist-2.png" alt="Il processo rimbalza Phlist">}}

Abbiamo scritto articoli per l'implementazione di [multi-tenancy][1] e [Invio della campagna di newsletter][2] in Phplist. In questo articolo, tratteremo questi punti in dettaglio sui rimbalzi dei processi in Phlist.
  * [Cos'è Phplist?][3]
  * [Cos'è il rimbalzo?][4]
  * [Setup Bounce Management][5]
  * [Come elaborare i rimbalzi?][6]
  * [Conclusione][7]

## Cos'è Phplist? {#phplist}

Phplist è il software di invio di newsletter gratuito e open source più popolare. Phplist consente alle aziende di inviare e -mail di marketing, aggiornamenti del prodotto e annunci agli abbonati. Aiuta le aziende per la gestione della quotazione, progettare una bella newsletter, una campagna di programma e una gestione del rimbalzo. [Leggi di più][8]

## Cos'è il rimbalzo? {#bounce}

Un rimbalzo è un messaggio di posta elettronica che non può essere consegnato a causa di un numero di ragioni e di tornare al mittente. Potremmo avere ragioni come la cassetta postale è piena, l'indirizzo e -mail non è più un indirizzo e -mail valido o errato. Per questo motivo, devi elaborare rimbalzi in modo da non inviare e -mail a indirizzi e -mail non validi.

## Setup Management di rimbalzo {#setup}

Per impostare la gestione del rimbalzo, è necessario configurare le seguenti impostazioni nel file config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Gestione dell'elaborazione di rimbalzo">}}

Spiegheremo in seguito i passaggi di seguito su queste configurazioni.
  * Innanzitutto, devi aggiungere un indirizzo email in cui si desidera ricevere messaggi di rimbalzo. Puoi trovare **Message_Envelope** Variabile e aggiungere il tuo indirizzo email.
* Phplist può recuperare le e -mail dalla cassetta postale di rimbalzo tramite due protocolli, **Mbox e Pop3**. Quindi, trova**Bounce_protocol** Variabile e cambialo secondo il tuo ambiente.
* Se è stato impostato **mbox**prototcol, è necessario definire il formato del file per esso. Quindi, trova**bounce_mailbox** e imposta il percorso come "/var/spool/mail/listbounces".
* Nel caso in cui tu abbia utilizzato il protocollo **POP3**, è necessario configurare**host, nome utente e password** per la casella di posta. Puoi vedere queste impostazioni sopra Sreenshot.
* Oltre alle impostazioni sopra per il protocollo **POP3** , potrebbe essere necessario aggiungere porta e crittografia.

## Come elaborare i rimbalzi? {#process}

Phplist supporta due metodi per rimbalzi di processo: manuale e automatizzato. Dovrai creare un lavoro cron per automatizzare l'elaborazione di rimbalzo. È inoltre possibile elaborare manualmente i rimbalzi visitando **Sistema> Rimbalzi di processo**. Pertanto, prima devi cambiare**manualmente \ _process \ _bounces** Impostazioni in base alle tue esigenze. È possibile visitare [Phlist docs][9] per impostare il lavoro cron per rimbalzi di processo.

## Conclusione {#conclusion}

In questo post, abbiamo imparato a configurare l'indirizzo e -mail di rimbalzo e i rimbalzi di processo. È possibile elaborare facilmente rimbalzi con il metodo manuale, se hai meno quantità di abbonati. Tuttavia, è necessario utilizzare il processo di gestione del rimbalzo automatizzato per elenchi di grandi dimensioni. Salverà il tuo tempo e ti aiuterà a creare elenchi di abbonati puliti e validi.



[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
