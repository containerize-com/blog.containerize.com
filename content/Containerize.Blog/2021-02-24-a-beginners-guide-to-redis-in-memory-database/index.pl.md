---
title: "Przewodnik dla początkujących po bazie danych Redis" 
seoTitle: "Przewodnik dla początkujących po bazie danych Redis" 
description: "Baza danych Redis In-Memory to open source, sklep z kluczową wartością. Nazywa się to również bazą danych NoSQL. Ten samouczek Redis prowadzi Cię o podstawowych koncepcjach Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Ten samouczek pomaga dowiedzieć się o bazie danych w pamięci Redis. Jest to open source, a także nazywa się sklepem kluczowym, który jest rodzajem bazy danych nierealujnych." 
url: /pl/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Ten samouczek pomaga dowiedzieć się o bazie danych Redis In-Memory. Jest to open source, a także nazywa się sklepem kluczowym, który jest rodzajem bazy danych nierealujnych.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Baza danych w pamięci Redis">}}

**Redis **faktycznie oznacza „ **re **  Mote  **di **  ctionary ** s**  erver”. Baza danych Redis to open source, zaawansowany sklep z kluczami kluczowymi. Obsługuje kilka typów danych: ciągi, skróty, listy, zestawy i sortowane zestawy. Właśnie dlatego jest często określany jako serwer struktury danych. Redis jest napisany w C. Ten samouczek Redis zapewnia dobre zrozumienie koncepcji bazy danych Redis.
  * **[Co to jest baza danych NoSQL][1]**
  * **[Czy baza danych NOSQL jest Redis?][2]**
  * **[Kiedy używać Redis?][3]**
  * **[Redis vs inne sklepy z wartością kluczową][4]**
  * **[Zainstaluj Redis na Ubuntu][5]**
  * **[wniosek][6]**

## Czym jest baza danych NoSQL   {#NOSQL}
Bazy danych NoSQL stały się bardzo popularne. Duże firmy polegają na nich, aby przechowywać setki petabajtów danych i działają miliony zapytań na sekundę. Ale czym jest baza danych NoSQL? Jak to działa i dlaczego skaluje się o wiele lepiej niż tradycyjne, relacyjne bazy danych? Zacznijmy od szybkiego wyjaśnienia problemu z relacyjnymi bazami danych, takimi jak MySQL, Mariadb, SQL Server.
Relacyjne bazy danych są zbudowane do przechowywania danych relacyjnych tak wydajnie, jak to możliwe. Możesz mieć tabelę dla klientów, zamówień i produktów, łącząc się logicznie. Ta ścisła organizacja doskonale nadaje się do zarządzania danymi, ale ma koszt niskiej skalowalności. Muszą utrzymać te relacje, a to jest intensywny proces, wymagający dużej pamięci i mocy obliczeniowej.
Podczas gdy bazy danych NoSQL mogą skalować zarówno pionowo, jak i poziomo. Możesz to porównać z budynkiem, skalowanie pionowo oznacza dodanie większej liczby podłóg do istniejącego budynku, a poziome skalowanie oznacza dodanie większej liczby budynków. Modyfikacja schematu jest jednym z największych wyzwań w relacyjnych bazach danych. Bazy danych NoSQL nie wymagają stałego schematu, co oznacza łatwo skalę z dużymi ilością danych i wysokim obciążeniami użytkownika.

## Czy Redis jest bazą danych NoSQL?   {#isnosql}
Jest to jedno z najpopularniejszych pytań zadanych w społeczności programistów w Internecie. Prostą odpowiedzią jest tak. Redis to open source w pamięci sklepu struktury danych.
W rzeczywistości istnieją 4 różne rodzaje typów baz danych NoSQL, które obejmują: bazy danych dokumentów, sklepy z kluczami, sklepy z szerokimi kolumnami i magazyny wykresów. Tak więc, baza danych w pamięci serwera Redis, będąc sklepem z kluczową wartością należą do kategorii bazy danych NoSQL.

## Kiedy używać Redis?   {#Kiedy}
Każda technologia ma swoje zalety i wady. Tak więc, przy tak wielu opcjach dostępnych w bazach danych. Ważne staje się zrozumienie, kiedy i kiedy nie korzystać z określonej technologii. Zawsze wybierz odpowiednie narzędzie do pracy.
W przypadku stabilnych, przewidywalnych i relacyjnych danych wybierz relacyjną bazę danych. W przypadku tymczasowych, wysoce dynamicznych danych wybierz bazę danych NoSQL. Schemat dla bazy danych jest jednym z największych wyzwań w relacyjnych bazach danych i może trwać wiecznie w relacyjnych relacyjnych baz danych.
Jeśli masz bardzo dynamiczne dane, które często się zmieniają, i nie musisz robić złożonych zapytań, a raczej chcesz przechowywać dane jako pary wartości kluczowej, Redis może być potencjalnie dobrym wyborem. Jeśli potrzebujesz bardziej wyróżnionej bazy danych zorientowanej na dokumenty, która pozwala przeprowadzić zapytania zakresu, wyszukiwania wyrażeń regularnych, indeksowanie i mapeduce, powinieneś sprawdzić MongoDB, CouchDB lub podobny.
Niektóre przykładowe przypadki użycia bazy danych Redis w pamięci są następujące:
  * **Loger dostępu** : Kiedy musisz rejestrować wiele czynności w szybkim tempie, Redis jest dobrym rozwiązaniem.
  * **Utrzymanie liczników** : Możesz użyć Redis, aby zachować różne liczby, np. Liczniki pobierania
  * **Obecność użytkownika** : Ze względu na prędkość możesz go użyć do przechowywania statusu „online / offline” użytkownika.
  * **Kolejki** : Możesz użyć Redis, aby utrzymać tymczasowe kolejki do przetwarzania zadań w tle.

## Redis vs inne sklepy z wartością klucza   {#other}
Baza danych w pamięci Redis jest bardzo szybka i może wykonywać około 110000 zestawów na sekundę, około 81000 dostaje na sekundę. Obsługuje kilka typów danych: ciągi, skróty, listy, zestawy i sortowane zestawy. Redis jest jednoosobowy, co pozwala na zgodność z kwasem (atomowość, konsystencja, izolacja i trwałość). Inne bazy danych NoSQL na ogół nie zapewniają zgodności kwasowej lub nie zapewniają go częściowo.

## Zainstaluj Redis na Ubuntu   {#Install}
Aby zainstalować Redis na Ubuntu, przejdź do terminalu i wpisz następujące polecenia
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Następujące polecenie uruchomi serwer Redis
```
$ redis-server
```
Aby sprawdzić, czy serwer Redis działa, możesz użyć polecenia  **REDIS-CLI** , aby się z nim połączyć.
```
$ redis-cli 
```
To polecenie da następujące dane wyjściowe, co oznacza, że ​​serwer jest uruchomiony, a teraz jesteś podłączony.
```
redis 127.0.0.1:6379>
```
Teraz wpisz następujące polecenie **Ping **, a otrzymasz odpowiedź z serwera jako ** pong** .
```
redis 127.0.0.1:6379> ping
PONG
```

## Wniosek   {#Conclusion}
W tym samouczku Redis dowiedzieliśmy się o bazie danych Redis w pamięci. Zbadaliśmy główną różnicę między bazami danych relacyjnych i nierelacyjnych (NOSQL). Nauczyło się również, kiedy powinniśmy korzystać z Redis i jakie są najlepsze przypadki użycia. Ten samouczek jest częścią trwającej serii samouczków. W nadchodzących artykułach dalej zbadamy konkretne przypadki użycia Redisa.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
