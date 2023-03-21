---
title: "Kafka vs Redis pub-sub, różnice, które powinieneś wiedzieć" 
seoTitle: "Kafka vs Redis pub-sub, różnice, które powinieneś wiedzieć" 
description: "Jeśli szukasz narzędzi do zarządzania dużą ilością danych i pomylaj między Kafką i Redis. Ten artykuł Kafka vs Redis Pub-Sub Ci pomoże." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis i Kafka to dwa różne narzędzia, które zdarza się wykonywać podobne prace na swój własny sposób. Porównanie Kafka vs Redis daje wgląd, który powinieneś wiedzieć." 
url: /pl/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis i Kafka to dwa różne narzędzia, które zdarza się wykonywać podobne prace na swój własny sposób. Porównanie Kafka vs Redis daje wgląd, który powinieneś wiedzieć.
W naszej serii artykułów o „redis” dowiedzieliśmy się o [podstawach Redis][1], a następnie badaliśmy [Jak Redis Pub/Sub Works][2] i jak to konkuruje z bazami danych NoSQL. Idąc naprzód w naszej dzisiejszej serii, porównamy Redis z Kafką, która jest jednym z jego konkurentów w różnych zadaniach. W tym artykule Kafka vs Redis Pub-Sub zbadamy, czym jest Kafka, jak różni się od Redis i jakie są w nich podobieństwa. Więc zacznijmy.
  * Co to jest Kafka?
  * Co to jest Redis?
  * Jakie są główne różnice?
  * Kiedy z którego użycia?
  * Wniosek

## Co to jest Kafka?
Apache Kafka to platforma rozproszonego strumienia zdarzeń typu open source. Jest używany do wysokowydajnych rurociągów danych i analizy strumieniowych. Kafka działa jako [publikacja systemu przesyłania wiadomości Subskrypcji][3]. Dzięki temu możesz przetwarzać nowe dane, ponieważ są generowane przy dużych prędkościach, a dodatkowo możesz zapisać je również w niektórych bazach danych.
Kafka to system rozproszony składający się z **serwerów  **i **  klientów** . Może być wdrażany na sprzęcie gołym metalowym, maszyn wirtualnych i kontenerach w środowiskach lokalnych i chmurowych.

## Co to jest Redis?
Redis to open source, zaawansowany sklep z kluczową wartością. Obsługuje kilka typów danych: ciągi, skróty, listy, zestawy i sortowane zestawy. Właśnie dlatego jest często określany jako serwer struktury danych.
Redis jest również uważany za bazę danych NoSQL. Szczegółowa dyskusja na temat HE Redis i o tym, jak to działa, możesz odwołać się do naszego artykułu „[Przewodnik dla początkujących po bazie danych Redis w pamięci][1]”.

## Jakie są główne różnice?
**Redis ** Sub pubowy jest głównie jak system ognia i zapłodnienia, w którym wszystkie wyprodukowane wiadomości zostaną dostarczone wszystkim konsumentom, a dane nie są nigdzie przechowywane. Masz ograniczenia w pamięci w odniesieniu do Redis. Również liczba producentów i konsumentów może wpływać na wydajność Redis.
Z drugiej strony **Kafka**  to wysokiej przepustowości, rozproszony dziennik, który może być używany jako kolejka. Zapewnia również wytrwałość wiadomości wysyłanych przez kolejkę.
**Redis **Obsługuje  **oparte na push**   Dostarczanie wiadomości. Oznacza to, że każda wiadomość popchnięta do Redis zostanie dostarczona automatycznie do wszystkich subskrybentów.
**Kafka **jednak obsługuje  **oparte na ciągnięciu**   dostarczanie wiadomości. Znaczące wiadomości opublikowane do Kafki nie są automatycznie dystrybuowane do subskrybentów. Zamiast tego konsumenci proszą o wiadomości, gdy będą gotowi do konsumpcji tych wiadomości.
**Redis **zamiast tego nie przechowuje wiadomości, wiadomości są dostarczane od razu wszystkim konsumentom, a następnie usuwane. Jednak  **Kafka **  Będąc dziennikiem, zawsze masz wiadomości. Możesz to monitorować, ustalając politykę retencyjną, powiedzmy 7 dni  **Zatrzymanie**  .

## Kiedy z którego?

### Redis
  * Jeśli chcesz systemu ognia i zapłodnienia, w którym wszystkie produkowane wiadomości są dostarczane natychmiast do konsumentów.
  *Jeśli **prędkość**  jest najbardziej zaniepokojona.
  *Jeśli **przechowywanie**  nie jest ważne i nie chcesz, aby Twój system utrzymywał wysłaną wiadomość
  * Ilość danych, z którymi będą się rozpatrzyć, nie jest ogromna.

### Kafka
  *Jeśli chcesz **niezawodność** .
  * Jeśli chcesz, aby Twój system miał kopię wiadomości, które zostały wysłane nawet po zużyciu.
  *Jeśli **prędkość**  nie jest dużym problemem.
  * A twój rozmiar danych jest ogromny.

## Wniosek
W tym samouczku Kafka vs Redis Pub-Sub badaliśmy Kafkę i Redis. Jakie są ich różnice i podobieństwa? Nauczyliśmy się również, kiedy powinieneś Redis i kiedy dobrze jest używać Kafki. W naszych nadchodzących samouczkach zbadamy więcej o Kafce i dogłębnej analizie.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Co
