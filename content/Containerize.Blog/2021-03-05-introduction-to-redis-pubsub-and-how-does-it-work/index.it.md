---
title: "Introduzione a Redis Pub/Sub e come funziona?" 
seoTitle: "Introduzione a Redis Pub/Sub e come funziona?" 
description: "Redis Pub/Sub è un servizio di messaggistica flessibile, affidabile e in tempo reale per applicazioni indipendenti da pubblicare e iscriversi a eventi asincroni." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub implementa un sistema di messaggistica in tempo reale, in cui gli editori, pubblicano su un canale/argomento e diversi clienti possono iscriversi a quel canale/argomento." 
url: /it/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub implementa un sistema di messaggistica in tempo reale, in cui gli editori, pubblicano su un canale/argomento e diversi clienti possono iscriversi a quel canale/argomento.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

Nel nostro ultimo tutorial " **[una guida per principianti al database in memoria Redis][1]** " Abbiamo appreso di Redis come database in memoria. E come questo compete con i database NOSQL. Abbiamo anche imparato dove usare Redis e dove il suo uso non è ottimale. Ora basando su quella base di conoscenza, in questo tutorial impareremo a conoscere Redis Pub/Sub, come funziona e quale sia il miglior uso del sistema di pubblicazione/iscrizione Redis. Iniziamo.
  * **[Che cos'è il modello di pubblicazione/iscrizione?][2]**
  * **[Come funziona il pub/sub?][3]**
  * **[Quando dovresti usare pub/sub?][4]**
  * **[Come usare Redis Pub/Sub?][5]**
  * **[Conclusione][6]**

## Qual è il modello di pubblicazione/iscrizione?   {#Che cosa}
Pubblica/iscriviti o in breve pub/sub è un modello di messaggistica in cui il mittente e il ricevitore dei messaggi non scambiano direttamente tali messaggi. Piuttosto, il mittente del messaggio lo pubblica su un canale/argomento. E tutti coloro che vogliono ricevere quei messaggi si iscriveranno al canale/argomento. Quindi, questa era più una spiegazione tecnica. Nella nostra vita quotidiana, utilizziamo questo modello di iscrizione a pubblicazione abbastanza spesso durante l'utilizzo di piattaforme di social media come YouTube, Twitter, Facebook o Instagram. Laddove i produttori di contenuti producono il contenuto e coloro che sono interessati seguiranno / abbonano al contenuto. Questo è ciò che fa esattamente Pub/Sub Pattern anche nell'architettura del software.

## Come funziona il pub/sub?   {#Come}
Nell'enfasi sullo sviluppo del software sulla riusabilità è molto elevata. E tutti i modelli di progettazione si basano sulla costruzione di componenti o moduli riutilizzabili. Quindi, per capire il pub/sub, devi prima guardare da dove proveniva questa idea e come gli sviluppatori l'hanno trovata come uno schema.
Man mano che le architetture del software si sono evolute e sono diventate più basate su moduli, sono aumentate più comunicazioni / messaggistica tra moduli e componenti. Ad esempio, pensa a un modulo come a un'unità di elaborazione che prende un po 'di input e fornisce un po' di output. E ogni input è in realtà un messaggio su cui l'unità di elaborazione elabora e genera un altro messaggio come output. Che sarà un input per qualche altro modulo. Pertanto, questo aumento della messaggistica ha richiesto un'attenzione speciale, in quanto avere applicazioni scalabili. Quindi, è arrivato il modello di pubblicazione/iscrizione.
In molti pub/secondi secondari, gli editori pubblicano messaggi su un broker di messaggi intermedi o un bus di eventi e gli abbonati registrano abbonamenti con quel broker, lasciando che il broker eseguisse il filtro. Il broker normalmente svolge una funzione Store e Forward per instradare i messaggi dagli editori agli abbonati. Inoltre, il broker può dare la priorità ai messaggi in coda prima del routing.

## **Quando dovresti usare pub/sub?** {#When}
Le applicazioni di chat sono un caso d'uso classico del pattern pub/sub. In un'applicazione di chat, i partecipanti possono iscriversi a chat room che hanno un pub/sottoposto designato. Quando un utente invia un messaggio a una chat room, l'istanza dell'app di chat pubblica il messaggio sull'argomento di quella chat room. Gli abbonati dell'argomento ricevono il messaggio.
Servizio in coda di messaggi / Messages di coda o elaborazione batch Le applicazioni possono anche utilizzare il modello Pub / Sub. Laddove tutti coloro che desiderano svolgere un determinato compito pubblicheranno il messaggio in una coda e unità di elaborazione che si sono iscritte a quella coda riceveranno il messaggio per elaborare il lavoro.
Discutiamo alcuni dei vantaggi del modello pub/sub
  * Accoppiamento sciolto tra i componenti del sistema
  * Migliore visione del flusso di lavoro a livello di sistema
  * Abilita una migliore e più rapida integrazione
  * Garantisce la scalabilità più fluida
  * Affidabilità costante garantita
  * Costruisce elasticità
  * Modularizzazione del software
  * Sviluppo di software agnostico del linguaggio
  * La chiarezza nella logica aziendale
  * Migliora la reattività

## come utilizzare Redis Pub/sub   {#Redis-Pubsub}
Per l'installazione di Redis, puoi fare riferimento al mio [ultimo tutorial][1]. Questo esempio spiega come funziona l'editore e il concetto di abbonati. Nell'esempio seguente, un client si iscrisse a un canale chiamato "Redischat".
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Ora, due client pubblicano i messaggi sullo stesso canale denominato "Redischat" e il client sopra sottoscritto sta ricevendo messaggi.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## conclusioni   {#conclusion}
In questo tutorial, abbiamo appreso il modello di progettazione pubblica/iscrizione. Ed esplorato come funziona il Redis Pub/Sub. Abbiamo anche esplorato quali sono i migliori casi d'uso di Redis Pub/Sub, messaggi in tempo reale. Nel mio prossimo tutorial, esploreremo ulteriormente Redis e spiegheremo come possiamo usare Redis Pub/Sub con Node.js per creare un'applicazione di chat in tempo reale.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
