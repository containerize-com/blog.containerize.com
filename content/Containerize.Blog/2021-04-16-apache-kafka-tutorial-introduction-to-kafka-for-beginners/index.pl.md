---
title: "Samouczek Apache Kafka -Wprowadzenie do Kafki dla początkujących" 
seoTitle: "Samouczek Apache Kafka -Wprowadzenie do Kafki dla początkujących" 
description: "Apache Kafka to platforma strumieniowa zdarzeń rozproszonych na open source. Ten samouczek jest początkującym przewodnikiem, który rozumie uziemienie Apache Kafka." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka to platforma strumieniowa zdarzeń rozproszonych na open source. Ten samouczek daje wprowadzenie do Kafki z perspektywy początkującego." 
url: /pl/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka to platforma strumieniowa zdarzeń rozproszonych na open source. Ten samouczek daje wprowadzenie do Kafki z perspektywy początkującego.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Samouczek open source Apache Kafka">}}

Niedawno napisaliśmy artykuł o „Kafka vs Redis Pub-Sub”, który wyjaśnia różnice między Kafka i Redis Pub-Sub. W tym artykule wkrótce wyjaśniliśmy sam broker wiadomości Kafka. Tak więc teraz ten artykuł daje więcej wglądu w platformę strumieniową rozproszonego zdarzenia open source Apache Kafka i daje wszystkie niezbędne wprowadzenie do rozpoczęcia Kafka rozproszonej kolejki komunikatów. Więc zacznijmy.
  * [Wprowadzenie do Apache Kafka][1]
  * [Co to jest system przesyłania wiadomości?][2]
  * [Warunki fundamentalne][3]
  * [Kroki instalacji][4]
  * [Utwórz temat][5]
  * [Napisz wiadomość do tematu][6]
  * [Czytaj wiadomości z tematu][7]
  * [Wniosek][8]

## Wprowadzenie do Apache Kafka {#intro}

Apache Kafka Open Source Broker został uruchomiony w LinkedIn, a później stał się projektem Open Source Apache. Oprogramowanie Kafka Message Broker jest opracowywane w Scala i Java. Apache Kafka Broker to system przesyłania wiadomości publicznych, który umożliwia wymianę danych między aplikacjami, serwerami i procesorami. Jest szybki, skalowalny i dystrybuowany według projektu. Jest w stanie obsłużyć miliony danych lub wiadomości na sekundę. Działa jako mediator między systemem źródłowym (producenta) a systemem docelowym (konsumenckim). Organizacje takie jak Netflix, Uber i tysiące takich firm wykorzystują strumieniowanie w czasie rzeczywistym Apache Kafka. W porównaniu z innymi systemami przesyłania wiadomości, oprogramowanie do kolejki komunikatów Kafka ma lepszą przepustowość, wbudowane partycjonowanie, replikację i nieodłączną tolerancję błędów. To sprawia, że ​​dobrze pasuje do aplikacji do przetwarzania wiadomości na dużą skalę.

## Co to jest system przesyłania wiadomości? {#messaging}

System przesyłania wiadomości to prosta wymiana wiadomości między dwiema lub więcej osobami, urządzeniami itp. Jest odpowiedzialny za przesyłanie danych z jednej aplikacji do drugiej, więc aplikacje mogły skupić się na danych, ale nie martwić się, jak je udostępnić.
Jednym typem systemu przesyłania wiadomości jest „System przesyłania wiadomości punktowych”. W tym systemie komunikaty są przechowywane w kolejce po wysłaniu przez producenta. Tylko jeden konsument może spożywać wiadomość w danym momencie. A po zużyciu wiadomości zostanie usunięta z kolejki. Jednym z przykładów tego systemu jest system przetwarzania zamówień. Gdzie tylko jeden proces może wykazać zamówienie.
Innym rodzajem systemu przesyłania wiadomości jest system przesyłania wiadomości pub-sub, który pozwala nadawcy wysłać wiadomość i odbiornik do odczytania tej wiadomości. W Apache Kafka Messaging nadawca jest znany jako producent, który publikuje wiadomości, a odbiorca jest znany jako konsument, który zużywa tę wiadomość, subskrybując ją. Przykładem tego systemu jest telewizja kablowa, która publikuje wiele kanałów, a każdy może subskrybować ich wybór kanałów i zdobyć je za każdym razem, gdy dostępne są ich subskrybowane kanały.

## Podstawowe warunki {#terms}

Zanim porozmawiamy więcej o najlepszej kolejce wiadomości Apache Kafka, musisz zrozumieć niektóre warunki.
* **Tematy** : Strumień wiadomości należących do konkretnej kategorii nazywa się tematem.
* **PARTICJA** : Tematy mogą mieć wiele partycji, dzięki czemu mogą obsługiwać dowolną ilość danych.
* **Przesunięcie partycji** : Każda wiadomość partycjonowana ma unikalny identyfikator sekwencji o nazwie „Offset”.
* **Repliki partycji** : Repliki są kopią zapasową partycji. Służą one do zapobiegania utracie danych.
* **Brokerzy** : są odpowiedzialni za utrzymanie opublikowanych danych.
* **Kafka klaster** : Kafka ma więcej niż jednego brokera, nazywa się Kafka Cluster.
* **Producenci** : są wydawcami wiadomości na jeden lub więcej tematów.
* **Konsumenci** : są czytelnikiem danych od brokerów. Subskrybują wiele tematów i konsumują, gdy w temacie znajduje się wiadomość.
* **Lider** : Czy węzeł jest odpowiedzialny za wszystkie odczyty i pisze dla dowolnej partycji.
* **Zwolennik** : Węzeł, który śledzi instrukcje lidera, nazywane są wyznawcami.

## Kroki instalacji {#steps}


### Krok 1 - Weryfikacja instalacji Java
Mam nadzieję, że już zainstalowałeś Java na swoim komputerze, więc po prostu zweryfikujesz ją za pomocą następującego polecenia.
```
$ java -version
```
Jeśli Java zostanie pomyślnie zainstalowana na twoim komputerze, możesz zobaczyć wersję zainstalowanej Java. Jeśli nie, powinieneś najpierw zainstalować Java.

### Krok 2 - Instalacja Framework Zookeeper
Odwiedź następujący link i pobierz najnowszą wersję Zookeeper.
{{_LINE_46_}}
Po zakończeniu instalacji i konfiguracji możesz uruchomić Zookeeper z następującym poleceniem
```
$ bin/zkServer.sh start
```
A następnie użyj następującego polecenia, aby połączyć się z Zookeeper z CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Po połączeniu powinieneś zobaczyć coś takiego
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Krok 3 - Instalacja Apache Kafka
Pobierz najnowszą wersję Kafka Best Message Broker i wyodrębnij ją z następującego URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Uruchom następujące polecenia, aby rozpocząć wszystkie usługi we właściwej kolejności:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Otwórz kolejną sesję terminalową i uruchom:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Utwórz temat {#create}

Aby napisać swoje wiadomości lub wydarzenia w tematy, musisz najpierw utworzyć temat. Aby utworzyć temat otwórz terminal i uruchom następujące polecenie:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Teraz stworzyliśmy temat o nazwie „UpDate-Updates”, w którym opublikujemy informacje o pogodzie, a konsumenci będą pochłonąć te wiadomości.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Napisz wiadomość do tematu {#write}

Uruchom klienta producenta konsoli, aby napisać kilka wydarzeń w swoim temacie. Domyślnie każdy wprowadzany wiersz spowoduje zapisanie osobnego wydarzenia na temat.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Przeczytaj wiadomości z tematu {#read}

Otwórz kolejną sesję terminalową i uruchom klienta konsoli, aby przeczytać właśnie utworzone wydarzenia:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Zapraszam do eksperymentowania: na przykład wróć do terminalu producenta (poprzedni krok), aby napisać dodatkowe wydarzenia i zobaczyć, jak zdarzenia natychmiast pojawiają się w terminalu konsumenckim.

## Wniosek {#conclusion}

W tym samouczku dowiedzieliśmy się o podstawach używania Apache Kafka. Zainstalowaliśmy usługę Kafka Queuing, a następnie ją skonfigurowaliśmy. Nauczyliśmy się również, jak tworzyć tematy w Kafce, wysyłać wiadomości do tematów i jak czytać wiadomości z tematów. Mam nadzieję, że ten artykuł był dla Ciebie przydatny. Spotkajmy się w następnym artykule.
_ Jakiej rozproszonej platformy strumieniowej zdarzeń typu open source używasz?. Czy masz jakieś pytania?, Proszę [skontaktuj się][9].

## Badać
Możesz znaleźć istotne następujące linki:
  * [Najlepsze bezpłatne i oprogramowanie do wiadomości typu open source (MQ)][10]
  * [Kafka vs Redis Pub-Sub, różnice, które powinieneś wiedzieć][11]
  * [Wprowadzenie do Redis Pub/Sub i jak to działa?][12]



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
