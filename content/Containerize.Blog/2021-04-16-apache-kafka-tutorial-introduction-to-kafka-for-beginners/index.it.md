---
title: "Apache Kafka Tutorial -introduzione a Kafka per principianti" 
seoTitle: "Apache Kafka Tutorial -introduzione a Kafka per principianti" 
description: "Apache Kafka è una piattaforma di streaming di eventi distribuiti in open source. Questo tutorial è una guida per principianti per comprendere Apache Kafka." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka è una piattaforma di streaming di eventi distribuiti in open source. Questo tutorial ti dà un'introduzione a Kafka dal punto di vista del principiante." 
url: /it/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka è una piattaforma di streaming di eventi distribuiti in open source. Questo tutorial ti dà un'introduzione a Kafka dal punto di vista del principiante.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Tutorial open source Apache Kafka">}}

Di recente abbiamo scritto un articolo su "Kafka vs Redis Pub-Sub" che spiega le differenze tra Kafka e Redis Pub-Sub. In quell'articolo abbiamo spiegato a breve del broker di messaggi Kafka stesso. Quindi, ora questo articolo ti fornisce ulteriori informazioni sulla piattaforma di streaming di eventi distribuiti a Apache Kafka e ti dà tutto il necessario per iniziare la coda di messaggi distribuiti Kafka. Quindi iniziamo.
  * [Introduzione ad Apache Kafka][1]
  * [Cos'è un sistema di messaggistica?][2]
  * [Termini fondamentali][3]
  * [Passaggi di installazione][4]
  * [Crea un argomento][5]
  * [Scrivi il messaggio nell'argomento][6]
  * [Leggi i messaggi dall'argomento][7]
  * [Conclusione][8]

## Introduzione ad Apache Kafka {#intro}

Il broker di messaggi open source Apache Kafka è stato avviato da LinkedIn e in seguito è diventato un progetto Apache open source. Il software di broker di messaggi Kafka è sviluppato in Scala e Java. Apache Kafka Broker è un sistema di messaggistica a sottoscrizione della pubblicazione che ha permesso allo scambio di dati tra applicazioni, server e processori. È veloce, scalabile e distribuito dal design. È in grado di gestire milioni di dati o messaggi al secondo. Funziona come mediatore tra il sistema di origine (produttore) e il sistema target (consumatore). Organizzazioni come Netflix, Uber e migliaia di tali aziende utilizzano lo streaming in tempo reale di Apache Kafka. Rispetto ad altri sistemi di messaggistica, il software di coda di messaggi Kafka ha un migliore throughput, partizionamento integrato, replica e tolleranza inerente ai guasti. Questo lo rende bene per applicazioni di elaborazione dei messaggi su larga scala.

## Cos'è un sistema di messaggistica? {#messaging}

Un sistema di messaggistica è un semplice scambio di messaggi tra due o più persone, dispositivi, ecc. È responsabile del trasferimento di dati da un'applicazione all'altra, in modo che le applicazioni possano concentrarsi sui dati, ma non preoccuparsi di come condividerli.
Un tipo di sistema di messaggistica è "Sistema di messaggistica puntuale". In questo sistema i messaggi vengono archiviati in coda quando inviati dal produttore. Un solo consumatore può consumare un messaggio in qualsiasi momento. E, una volta consumato il messaggio, verrà rimosso dalla coda. Uno degli esempio di questo sistema è il sistema di elaborazione degli ordini. Dove un solo processo può procurarsi l'ordine.
Un altro tipo di sistema di messaggistica è il sistema di messaggistica pub-sub che consente a un mittente di inviare il messaggio e un ricevitore per leggere quel messaggio. In Apache Kafka Messaging, un mittente è noto come produttore che pubblica messaggi e un ricevitore è noto come un consumatore che consuma quel messaggio sottoscrivendolo. Un esempio di questo sistema è la tua TV via cavo che pubblica molti canali e chiunque può iscriversi alla scelta dei canali e ottenerli ogni volta che i loro canali abbonati sono disponibili.

## Termini fondamentali {#terms}

Prima di parlare di più sulla migliore coda di messaggi Apache Kafka, devi capire alcuni dei termini.
* **Argomenti** : un flusso di messaggi appartenenti a una particolare categoria è chiamato argomento.
* **Partizione** : gli argomenti possono avere molte partizioni, in modo che possano gestire una quantità arbitraria di dati.
* **Offset partizione** : ogni messaggio partizionato ha un ID di sequenza univoco chiamato "offset".
* **Repliche di partizione** : le repliche sono backup di una partizione. Sono usati per prevenire la perdita di dati.
* **broker** : sono responsabili del mantenimento dei dati pubblicati.
* **Cluster Kafka** : Kafka ha più di un broker si chiama cluster Kafka.
* **Produttori** : sono gli editori dei messaggi a uno o più argomenti.
* **Consumatori** : sono il lettore dei dati dei broker. Si iscrivono a più argomenti e consumano ogni volta che c'è un messaggio nell'argomento.
* **Leader** : il nodo è responsabile di tutte le letture e scrive per una data partizione.
* **Follower** : il nodo che segue le istruzioni del leader sono chiamati seguaci.

## Passaggi di installazione {#steps}


### Passaggio 1 - Verifica dell'installazione di Java
Spero che tu abbia già installato Java sulla tua macchina in questo momento, quindi lo verifichi semplicemente utilizzando il seguente comando.
```
$ java -version
```
Se Java è installato correttamente sulla tua macchina, è possibile vedere la versione del Java installato. In caso contrario, dovresti prima installare Java.

### Passaggio 2 - Installazione del framework Zookeeper
Visita il seguente link e scarica l'ultima versione di Zookeeper.
{{_LINE_46_}}
Una volta terminato l'installazione e la configurazione, è possibile avviare lo zookeeper con il comando seguente
```
$ bin/zkServer.sh start
```
E quindi utilizzare il comando seguente per connettersi a Zookeeper dalla CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Una volta connesso dovresti vedere qualcosa come questo
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Passaggio 3 - Installazione Apache Kafka
Scarica l'ultima versione di Kafka Best Message Broker ed estraila dal seguente URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Esegui i seguenti comandi per avviare tutti i servizi nell'ordine corretto:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Apri un'altra sessione di terminale ed esegui:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Crea un argomento {#create}

Per scrivere i tuoi messaggi o eventi in argomenti devi prima creare un argomento. Per creare un argomento Apri il tuo terminale ed esegui il seguente comando:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Ora abbiamo creato un argomento con il nome "Aggiornamenti meteorologici" in cui pubblicheremo informazioni su meteo e i consumatori consumeranno tali messaggi.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Scrivi un messaggio nell'argomento {#write}

Esegui il client produttore della console per scrivere alcuni eventi sul tuo argomento. Per impostazione predefinita, ogni riga che si inserisce si tradurrà in un evento separato che viene scritto sull'argomento.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Leggi i messaggi dall'argomento {#read}

Apri un'altra sessione di terminale ed esegui il client del consumatore console per leggere gli eventi appena creati:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Sentiti libero di sperimentare: ad esempio, torna al terminal del tuo produttore (passaggio precedente) per scrivere eventi aggiuntivi e vedere come gli eventi si presentano immediatamente nel tuo terminale del consumatore.

## Conclusione {#conclusion}

In questo tutorial abbiamo appreso le basi dell'uso di Apache Kafka. Abbiamo installato il servizio di coda Kafka e quindi configurato. Abbiamo anche imparato come creare argomenti in Kafka, inviare messaggi agli argomenti e come leggere i messaggi dagli argomenti. Spero che questo articolo sia stato utile per te. Incontriamoci nel prossimo articolo.
_ Quale piattaforma di streaming di eventi distribuiti open source usi?. Hai qualche domanda?, Per favore [mettiti in contatto][9].

## Esplorare
Potresti trovare i seguenti link pertinenti:
  * [Miglior software di messaggi di messaggi (MQ) gratuita e open source][10]
  * [Kafka vs Redis Pub-Sub, differenze che dovresti sapere][11]
  * [Introduzione a Redis Pub/Sub e come funziona?][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
