---
title: "Wprowadzenie do Redis Pub/Sub i jak to działa?" 
seoTitle: "Wprowadzenie do Redis Pub/Sub i jak to działa?" 
description: "Redis Pub/Sub to elastyczna, niezawodna usługa przesyłania wiadomości w czasie rzeczywistym dla niezależnych aplikacji do publikowania i subskrypcji wydarzeń asynchronicznych." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub wdraża system przesyłania wiadomości w czasie rzeczywistym, w którym wydawcy publikują kanał/temat, a kilku klientów może subskrybować ten kanał/temat." 
url: /pl/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub wdraża system przesyłania wiadomości w czasie rzeczywistym, w którym wydawcy publikują kanał/temat, a kilku klientów może subskrybować ten kanał/temat.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

W naszym ostatnim samouczku „ **[Przewodnik dla początkujących o Redis In-Memory][1]** ” Nauczyliśmy się o Redis jako bazie danych w pamięci. I jak konkuruje to z bazami danych NoSQL. Nauczyliśmy się również, gdzie używać Redis i gdzie jego użycie nie jest optymalne. Teraz, budując się na tej bazie wiedzy, w tym samouczku dowiemy się o Redis Pub/Sub, jak to działa i jakie najlepsze wykorzystanie systemu publikacji/subskrypcji Redis. Zacznijmy.
  * **[Co to jest wzorzec publikacji/subskrypcji?][2]**
  * **[Jak działa pub/sub -sub?][3]**
  * **[Kiedy powinieneś używać pub/sub?][4]**
  * **[Jak używać Redis Pub/sub?][5]**
  * **[wniosek][6]**

## Co to jest wzór publikowania/subskrypcji?   {#Co}
Publikuj/subskrypcję lub w Short Pub/Sub to wzorzec przesyłania wiadomości, w którym nadawca i odbiorca wiadomości nie wymieniają bezpośrednich wiadomości. Przeciwnie, nadawca wiadomości publikuje go na kanale/tematyce. I wszyscy ci, którzy chcą otrzymać te wiadomości, subskrybują kanał/temat. To było bardziej techniczne wyjaśnienie. W naszym życiu codziennym używamy tego modelu publikacji subskrypcji dość często podczas korzystania z platform mediów społecznościowych, takich jak YouTube, Twitter, Facebook lub Instagram. Tam, gdzie producenci treści produkują treść, a osoby zainteresowane będą śledzić / subskrybować treść. To właśnie robi również PUB/Sub wzór w architekturze oprogramowania.

## Jak działa pub/sub -sub?   {#Jak}
W opracowywaniu oprogramowania nacisk na ponowne użycie jest bardzo wysoki. Wszystkie wzorce projektowe oparte są na budowaniu komponentów lub modułów wielokrotnego użytku. Aby zrozumieć pub/sub -sub, najpierw musisz spojrzeć na to, skąd pochodzi ten pomysł i jak programiści uważali go za wzór.
W miarę ewolucji architektur oprogramowania i bardziej opartych na modułach stały się większe komunikacje / wiadomości między modułami i komponentami. Na przykład pomyśl o module jako jednostce przetwarzania, który wymaga pewnych danych wejściowych i zapewnia pewne wyjście. I każde dane wejściowe jest w rzeczywistości komunikatem, na którym przetwarza jednostkę przetwarzania i generuje inny komunikat jako wyjście. Który będzie wejściem do innego modułu. Tak więc wzrost wiadomości wymagał szczególnej uwagi, ponieważ posiadania skalowalnych zastosowań istniało, że moduły i komponenty mogą działać niezależnie bez zależności. Stąd pojawił się wzór publikowania/subskrypcji.
W wielu systemach PUB/SUB wydawcy publikują wiadomości do pośredniej brokeru wiadomości lub magistrali wydarzenia, a subskrybenci rejestrują subskrypcje z tym brokerem, pozwalając brokerowi wykonać filtrowanie. Broker zwykle pełni funkcję sklepu i przekazywania, aby prowadzić wiadomości od wydawców do subskrybentów. Ponadto broker może priorytetowo traktować wiadomości w kolejce przed routingiem.

## **Kiedy powinieneś używać pub/sub?**    {#when}
Aplikacje czatu są klasycznym przypadkiem użycia wzoru Pub/Sub. W aplikacji czatu uczestnicy mogą subskrybować pokoje czatowe, które mają wyznaczony temat pub/sub. Kiedy użytkownik wysyła wiadomość do pokoju czatu, jej instancja aplikacji czatu publikuje wiadomość na temat tego pokoju czatu. Subskrybenci tematu otrzymują wiadomość.
Usługa kolejki / komunikatów w kolejce lub przetwarzanie wsadowe mogą również korzystać z wzoru PUB / Sub. Tam, gdzie wszyscy, którzy chcą wykonanego zadania, opublikują wiadomość do kolejki i przetwarzania jednostek, które zasubskrybowały tę kolejkę, otrzymają wiadomość w celu przetworzenia zadania.
Omówmy niektóre zalety PUB/Sub Wzór
  * Luźne połączenie między komponentami systemowymi
  * Lepszy widok przepływu pracy w całym systemie
  * Włącza lepszą i szybszą integrację
  * Zapewnia gładszą skalowalność
  * Gwarantowana spójna niezawodność
  * Buduje elastyczność
  * Modularyzacja oprogramowania
  * Agnostyczne oprogramowanie językowe
  * Jasność logiki biznesowej
  * Poprawia reakcję

## Jak używać Redis Pub/sub   {#Redis-PubSub}
W przypadku instalacji Redis możesz zapoznać się z moim [ostatnim samouczkiem][1]. Ten przykład wyjaśnia, jak działa koncepcja wydawcy i subskrybenta. W poniższym przykładzie jeden klient subskrybuje kanał o nazwie „Redischat”.
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Teraz dwóch klientów publikuje wiadomości na tym samym kanale o nazwie „Redischat”, a najwyższy subskrypcja klienta otrzymuje wiadomości.
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

## Wniosek   {#Conclusion}
W tym samouczku dowiedzieliśmy się o wzorze projektu publikowania/subskrypcji. I zbadał, jak działa Pub/Sub Redis. Zbadaliśmy również, jakie są najlepsze przypadki użycia pub/subs, wiadomości w czasie rzeczywistym. W moim nadchodzącym samouczku zbadamy Redis i wyjaśnimy, w jaki sposób możemy użyć Redis Pub/Sub z Node.js do zbudowania aplikacji czatu w czasie rzeczywistym.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
