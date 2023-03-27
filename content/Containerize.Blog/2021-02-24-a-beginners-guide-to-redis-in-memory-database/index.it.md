---
title: "Una guida per principianti al database Redis in memoria" 
seoTitle: "Una guida per principianti al database Redis in memoria" 
description: "Il database in memoria Redis è un negozio di valore chiave open source. Si chiama anche un database NoSQL. Questo tutorial di Redis ti guida sui concetti fondamentali di Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Questo tutorial ti aiuta a conoscere il database in memoria Redis. È open-source e chiamato anche un negozio di valore chiave, che è un tipo di database non relazionale." 
url: /it/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Questo tutorial ti aiuta a conoscere il database Redis in memoria. È open-source e chiamato anche un negozio di valore chiave, che è un tipo di database non relazionale.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Database in memoria Redis">}}

 **Redis** in realtà sta per “ **re** mote **di** ctionary** s**erver”. Database Redis è un negozio di valore chiave a sourtraggio aperto. Supporta diversi tipi di dati: stringhe, hash, elenchi, set e set ordinati. Ecco perché viene spesso definito un server della struttura dei dati. Redis è scritto in C. Questo tutorial Redis fornisce una buona comprensione dei concetti di database in memoria Redis.
*  **[Cos'è un database NoSQL][1]**  
*  **[Redis è un database NoSQL?][2]**  
*  **[quando usare Redis?][3]**  
*  **[Redis vs altri negozi di valore chiave][4]**  
*  **[Installa Redis su Ubuntu][5]**  
*  **[Conclusione][6]**  

## Cos'è un database NoSQL {#nosql}

I database NoSQL sono diventati molto popolari. Le grandi aziende si affidano a loro per archiviare centinaia di petabyte di dati e eseguire milioni di domande al secondo. Ma cos'è un database NoSQL? Come funziona e perché si ridimensiona molto meglio dei tradizionali database relazionali? Cominciamo spiegando rapidamente il problema con database relazionali come MySQL, MariaDB, SQL Server.
I database relazionali sono creati per archiviare i dati relazionali nel modo più efficiente possibile. Puoi avere una tabella per clienti, ordini e prodotti, collegandoti insieme. Questa stretta organizzazione è ottima per la gestione dei tuoi dati, ma ha un costo di bassa scalabilità. Devono mantenere queste relazioni e questo è un processo intensivo, che richiede molta memoria e calcola potenza.
Mentre i database NoSQL possono scalare sia in verticale che in orizzontale. Puoi confrontarlo con un edificio, ridimensionamento verticalmente significa aggiungere più piani a un edificio esistente, mentre il ridimensionamento orizzontale significa aggiungere più edifici. La modifica dello schema è una delle maggiori sfide nei database relazionali. I database NOSQL non richiedono uno schema fisso che significa ridimensionare facilmente con grandi quantità di dati e carichi di utente elevati.

## Redis è un database NoSQL? {#isnosql}

Questa è una delle domande più popolari poste in tutta la comunità degli sviluppatori su Internet. La semplice risposta è sì. Redis è un negozio di struttura dati in memoria open source.
Esistono in realtà 4 diversi tipi di tipi di database NoSQL, che includono: database di documenti, negozi di valore chiave, negozi di colonne a grandezza naturale e negozi di grafici. Pertanto, il database del server Redis in memoria, essendo un negozio di valore chiave rientra nella categoria del database NoSQL.

## Quando usare Redis?  {#when}

Ogni tecnologia ha i suoi meriti e demeriti. Quindi, con così tante opzioni disponibili nei database. Diventa importante capire quando e quando non utilizzare una particolare tecnologia. Scegli sempre lo strumento giusto per il lavoro.
Per i dati stabili, prevedibili e relazionali, selezionare un database relazionale. Per dati temporanei e altamente dinamici, selezionare un database NOSQL. Lo schema per il database è una delle maggiori sfide nei database relazionali e può richiedere per sempre in Big Database Relational.
Se hai dati altamente dinamici che cambiano frequentemente e non è necessario effettuare query complesse, piuttosto si desidera archiviare i dati come coppie di valore chiave, Redis può essere una scelta potenzialmente buona. Se hai bisogno di un database orientato al documento più in primo piano che consente di eseguire query di gamma, ricerche di espressione regolari, indicizzazione e mapReduce, è necessario controllare MongoDB, COUCHDB o simili.
Alcuni casi d'uso di esempio del database Redis in memoria sono i seguenti:
*  **Accesso Logger**  : quando è necessario registrare molte attività a ritmo veloce, Redis è una buona soluzione.
*  **Mantenimento di contatori**  : è possibile utilizzare Redis per mantenere conteggi diversi, ad es. Scarica i contatori
*  **Presenza dell'utente**  : a causa della velocità, puoi usarlo per archiviare lo stato "online / offline" dell'utente.
*  **code**  : è possibile utilizzare Redis per mantenere le code temporanee per elaborare i lavori di fondo.

## Redis vs altri negozi di valore chiave {#other}

Il database Redis in memoria è molto veloce e può eseguire circa 110000 set al secondo, circa 81000 ottiene al secondo. Supporta diversi tipi di dati: stringhe, hash, elenchi, set e set ordinati. Redis è singolo che gli consente di essere conforme agli acidi (atomicità, coerenza, isolamento e durata). Altri database NoSQL generalmente non forniscono la conformità acida o lo forniscono parzialmente.

## Installa Redis su Ubuntu {#install}

Per installare Redis su Ubuntu, vai al terminale e digita i seguenti comandi
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Il comando seguente avvierà il server Redis
```
$ redis-server
```
Per verificare se il server Redis è in esecuzione è possibile utilizzare il comando  **Redis-cli**  per connettersi ad esso.
```
$ redis-cli 
```
Questo comando ti darà il seguente output, il che significa che il server è in esecuzione e ora sei connesso.
```
redis 127.0.0.1:6379>
```
Ora digita il seguente comando  **ping** e otterrai una risposta dal server come **pong**  .
```
redis 127.0.0.1:6379> ping
PONG
```

## Conclusione {#conclusion}

In questo tutorial di Redis, abbiamo appreso del database in memoria Redis. Abbiamo esplorato la differenza principale tra i database relazionali e non relazionali (NOSQL). Inoltre, appreso quando dovremmo usare Redis e quali sono i migliori casi d'uso. Questo tutorial fa parte di una serie in corso di tutorial. Nei prossimi articoli, esploreremo ulteriormente i casi d'uso specifici di Redis.



 [1]: #nosql
 [2]: #isnosql
 [3]: #when
 [4]: #other
 [5]: #install
 [6]: #conclusion
