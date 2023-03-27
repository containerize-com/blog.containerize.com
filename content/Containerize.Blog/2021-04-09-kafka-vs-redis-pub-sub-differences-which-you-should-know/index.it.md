---
title: "Kafka vs Redis Pub-Sub, differenze che dovresti sapere" 
seoTitle: "Kafka vs Redis Pub-Sub, differenze che dovresti sapere" 
description: "Se stai cercando strumenti per gestire una grande quantità di dati e confondere tra Kafka e Redis. Questo articolo Kafka vs Redis Pub-Sub ti aiuterà." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis e Kafka sono due diversi strumenti che stanno facendo lavori simili a modo loro. Il confronto Kafka vs Redis ti dà un'idea che dovresti sapere." 
url: /it/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis e Kafka sono due diversi strumenti che stanno facendo lavori simili a modo loro. Il confronto Kafka vs Redis ti dà un'idea che dovresti sapere.
Nella nostra serie di articoli su "Redis" abbiamo appreso le [basi di Redis][1], quindi abbiamo esplorato [come Redis Pub/Sub Works][2] e come questo concorre con i database NoSQL. Andando avanti nella nostra serie di oggi, confronteremo Redis con Kafka che è uno dei suoi concorrenti in vari compiti. In questo articolo Kafka vs Redis Pub-Sub, esploreremo ciò che Kafka è come è diverso da Redis e quali sono le somiglianze in essi. Quindi iniziamo.
  * Cos'è Kafka?
  * Cos'è Redis?
  * Quali sono le principali differenze?
  * Quando usare quale?
  * Conclusione

## Cos'è Kafka?
Apache Kafka è una piattaforma di flusso di eventi distribuiti in open source. È utilizzato per pipeline di dati ad alte prestazioni e analisi di streaming. Kafka funge da [pubblicare il sistema di messaggistica-sottoscrizione][3]. Con questo, è possibile elaborare nuovi dati come generato ad alta velocità e inoltre puoi salvarli anche su un database.
Kafka è un sistema distribuito composto da **server**e**client** . Può essere distribuito su hardware a metallo nudo, macchine virtuali e contenitori in ambienti on-premise e cloud.

## Cos'è Redis?
Redis è un negozio di valore chiave a source aperto. Supporta diversi tipi di dati: stringhe, hash, elenchi, set e set ordinati. Ecco perché viene spesso definito un server della struttura dei dati.
Redis è anche considerato un database NOSQL. Per una discussione dettagliata su Hedis e un modo in cui funziona puoi fare riferimento al nostro articolo "[Una guida per principianti al database di Redis in memoria][1]".

## Quali sono le principali differenze?
**Redis** Pub-Sub è per lo più come un sistema di fuoco e forza in cui tutti i messaggi prodotti verranno consegnati a tutti i consumatori contemporaneamente e i dati non saranno archiviati da nessuna parte. Hai limiti in memoria rispetto a Redis. Inoltre, il numero di produttori e consumatori può influire sulle prestazioni di Redis.
D'altra parte, **Kafka** è un registro distribuito di throughput elevato che può essere usato come coda. Fornisce inoltre persistenza per i messaggi inviati attraverso la coda.
**Redis**Supporta** Push-Based Based**Delivery of Message. Ciò significa che ogni messaggio spinto a Redis verrà consegnato automaticamente a tutti gli abbonati.
**Kafka**, tuttavia, supporta** Pullo basato su**consegna di messaggi. Significa i messaggi pubblicati su Kafka non vengono distribuiti automaticamente agli abbonati. Invece, i consumatori chiedono i messaggi quando sono pronti a consumare quei messaggi.
**Redis **non memorizza invece i messaggi, i messaggi vengono consegnati immediatamente a tutti i consumatori e quindi rimossi. Tuttavia,** Kafka**essendo un registro, hai sempre messaggi. È possibile monitorare questo impostando una politica di conservazione, diciamo 7 giorni** di conservazione**.

## quando usare quale?

### Redis
  * Se si desidera un tipo di sistema di fuoco e forget, in cui tutti i messaggi che produci vengono consegnati istantaneamente ai consumatori.
* Se **velocità** è più preoccupato.
* Se **archiviazione** non è importante e non si desidera che il tuo sistema sia invio il messaggio che è stato inviato
  * La quantità di dati che verrà gestita non è enorme.

### Kafka
* Se vuoi **affidabilità** .
  * Se si desidera che il tuo sistema abbia una copia dei messaggi che sono stati inviati anche dopo il consumo.
* Se **velocità** non è una grande preoccupazione.
  * E la dimensione dei tuoi dati è enorme.

## Conclusione
In questo tutorial Kafka vs Redis Pub-Sub, abbiamo esplorato Kafka e Redis. Quali sono le loro differenze e somiglianze? Abbiamo anche imparato quando dovresti Redis e quando è bene usare Kafka. Nei nostri prossimi tutorial, esploreremo di più su Kafka e analisi approfondite.



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Che cosa
