---
title: "Automatizzare il sistema di biglietteria utilizzando WordPress e Osticket" 
seoTitle: "Automatizzare il sistema di biglietteria utilizzando WordPress e Osticket" 
description: "L'integrazione di Osticket-WordPress fornisce ai clienti un modo di generare biglietti di supporto dal sito WordPress e gestirli dalla dashboard Osticket." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Automatizza il processo HelpDesk con integrazione WordPress e Osticket senza soluzione di continuità. Trasforma le richieste dei clienti attraverso i moduli basati sul Web in biglietti di supporto." 
url: /it/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Automatizza il processo HelpDesk con integrazione WordPress e Osticket senza soluzione di continuità. Trasforma le richieste dei clienti attraverso i moduli basati sul Web in biglietti di supporto.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Integrazione Osticket-WordPress per automatizzare il sistema di biglietteria">}}

I tuoi clienti possono avere domande sui tuoi prodotti/servizi. Invieranno le loro domande attraverso diverse forme sul tuo sito WordPress. L'integrazione di Osticket-WordPress aiuta a convertire quelle domande in biglietti. Invia dati tramite API al sistema OSCKET HELLDESK.
Osticket è un sistema di biglietteria Open-Source e HelpDesk. I clienti possono creare biglietti per quanto riguarda le loro domande su Osticket. Questo sistema di helpdesk rende molto facile per qualsiasi organizzazione gestire le domande provenienti dai loro clienti. L'amministratore può creare dipartimenti e squadre e assegnare biglietti a diversi agenti in base alla natura dei biglietti creati. Questo sistema open source gratuito terrà traccia dei problemi. Consente sia ai clienti che agli agenti di commentare il biglietto per discutere dei progressi. Tratteremo le seguenti sezioni in questo post sul blog:
  * [Processo di integrazione][1]
  * [Installazione del plug -in WordPress][2]
  * [Procedura di autenticazione][3]
  * [Conclusione][4]

## Processo di integrazione: {#integration}

L'integrazione Osticket e WordPress richiede un modulo di contatto sul sito WordPress con i seguenti campi
  1. Aiuto argomento
  2. Email
  3. Nome completo
  4. Soggetto
  5. Messaggio
Il modulo di contatto deve inviare e -mail, perché questo plugin aggancia la funzione WP_Mail per ottenere i dati dei moduli.

## Installazione del plug -in WordPress: {#wordpress}

  1. Vai alla dashboard admin del tuo sito WordPress.
  2. Quindi vai alla sezione plugin.
  3. Quindi installa questo [plugin][5].
  4. Dopo questo attiva il plugin.
  5. e andare su "Impostazione" -> "Connettore Osticket".
  6. Quindi inserisci l'URL del tuo sito Osticket, ovvero [http: //your.domain/api/tickets.json][6]
  7. Immettere la chiave API creata dal pannello di amministrazione Osticket (spiegato nella sezione successiva).
  8. Alla fine compila tutti i campi per mappare i dati dal modulo di contatto ai campi di biglietti di Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Integrazione Osticket-WordPress per automatizzare il sistema di biglietteria">}}


## Procedura di autenticazione: {#auth}

L'autenticazione API viene eseguita tramite chiavi API configurate all'interno del pannello di amministrazione di osticket. Le chiavi API vengono generate e collegate a un indirizzo IP di origine che viene verificato rispetto all'IP di origine delle richieste API HTTP. Per creare la chiave API
  1. Vai al pannello di amministratore di osticket.
  2. Fare clic su "Gestisci".
  3. Vai al menu "Key API".
  4. Fare clic su "Aggiungi nuova chiave API".
  5. Imposta "Stato" su Active.
  6. Controllare la casella di controllo "può creare il ticket".
  7. Immettere l'indirizzo IP del tuo sito WordPress e premere "Aggiungi chiave".

{{< figure align=center src="images/osticket-1024x729.png" alt="Integrazione Osticket-WordPress per automatizzare il sistema di biglietteria">}}


## Conclusione: {#conclusion}

L'integrazione di Osticket-WordPress automatizzerà il processo di biglietteria. Quindi renderà la vita più facile per il team di supporto. Le richieste sul sito Web WordPress si converteranno automaticamente in biglietti di supporto su Osticket. In modo che il team di supporto possa gestire tutte le domande dei clienti in modo più semplice ed efficiente. Gli agenti di supporto saranno notificati tramite notifiche e -mail. Pertanto, gli agenti possono risolvere le domande dei clienti in tempo. La sezione commenti su Osticket aiuta sia i clienti che gli agenti di supporto a comunicare in modo efficace e tempestivo. Rende anche più facile per i manager tenere traccia dei progressi per ogni biglietto.

## Esplorare:
Per saperne di più su Osticket e WordPress, controlla queste pagine:
  * [Osticket - Sistema di biglietteria helpdesk di helpdesk gratuita][7]
  * [WordPress - Open Source gratuito e strumento CMS e blogging più utilizzato][8]
  * [Come impostare il software di help desk online utilizzando Osticket][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
