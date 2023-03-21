---
title: "Przewodnik dla początkujących, aby korzystać z aplikacji do fakturowania krateru" 
seoTitle: "Przewodnik dla początkujących, aby korzystać z aplikacji do fakturowania krateru" 
description: "Samouczek do rozpoczęcia pracy z systemem faktury typu open source. Niniejsze wytyczne krateru pomagają zapoznać się z podstawowymi pojęciami i funkcjami." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Ten samouczek pomoże Ci dowiedzieć się o aplikacjach do fakturowania krateru. Jest to bezpłatny i open source faktury dla małych firm." 
url: /pl/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Ten samouczek pomoże Ci dowiedzieć się o aplikacjach do fakturowania krateru. Jest to bezpłatny i open source faktury dla małych firm.

{{< figure align=center src="images/blog-crater.png" alt="System faktury typu open source">}}

Każda firma potrzebuje systemu zarządzania fakturami, wydatkami, płatnościami i wielu innych. Oprogramowanie do fakturowania pomaga w zarządzaniu nim, abyś mógł łatwo wykonywać zadania rozliczeniowe i skupić się na innych ważnych rzeczach. W tym poście dowiemy się, jak skonfigurować krater i wykorzystać go do obsługi operacji księgowych dla firmy.
  * [Wprowadzenie o kraterie][1]
  * [Procedura instalacji krateru][2]
  * [Eksploracja funkcji][3]
  * [Wniosek][4]

## Wprowadzenie o kraterie   {#Introduction}
[Krater][5] to bezpłatne i open source fakturowanie. Jest absolutnie bezpłatny i możesz łatwo zaktualizować go do najnowszych wersji. Jest to bezpłatny system rachunkowości dla małych firm i freelancerów. Jest to również kompletne rozwiązanie fakturowania, umożliwiające śledzenie wydatków i płatności, obliczanie podatków oraz tworzenie szacunków i faktur. Ponadto jest wyposażony w nieruchome aplikacje mobilne na urządzenia iPhone i Android. Pozwoli ci zarządzać nim z dowolnego miejsca. Ponieważ krater jest internetowym oprogramowaniem rozliczeniowym, aplikacja internetowa jest zaprojektowana z Laravel i Vuejs, a aplikacje mobilne są budowane z React Native. Dostępna jest cała dokumentacja związana z rozwojem i wdrażaniem. Pełny kod źródłowy można znaleźć na [Github][6].

## Procedura instalacji krateru   {#Installation}
Omówimy, jak zainstalować krater z metodą ręczną i użyć Dockera w tej sekcji.

## # Instalacja ręczna
  * Pobierz najnowszą wersję z.
  * Prześlij pobrany plik zip na swój serwer i wyodrębnij go.
  * Wskaż swoją domenę na publiczny katalog wewnątrz krateru.
  * Przejdź do korzenia swojego projektu i wykonaj polecenie „sudo chmod -r 775 ./”, aby przypisać odpowiednie uprawnienia.
  * Otwórz witrynę w przeglądarce i śledź kreatora instalacji.

## # Docker Instalation
  * Zainstaluj Docker na swoim serwerze :.
  * Zainstaluj skompozycję Dockera, postępując zgodnie z tym przewodnikiem :.
  * Repozytorium krateru klonów za pomocą tego polecenia.
```
git clone https://github.com/bytefury/crater
```
  * Uruchom poniżej polecenia jeden po drugim, aby zainstalować krater.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Otwórz witrynę krateru w przeglądarce i śledź kreatora instalacyjnego.

## eksploracja funkcji   {#Feature}
W tej sekcji zbadamy podstawowe funkcje tej aplikacji rozliczeniowej typu open source. Po zakończeniu instalacji otwórz witrynę http://example.com i zaloguj się do aplikacji.
  * **Pulpit nawigacyjny**  - Po zalogowaniu się zostanie zabrany na pulpit nawigacyjny, który wyświetla cały widok aplikacji.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  * **Ustawienia**  - Teraz przejdź do strony Ustawienia i dodaj różne ustawienia aplikacji internetowych, takie jak ustawienia konta, informacje o firmie, preferencje, dostosowania, powiadomienia, moduły płatności i tak dalej.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  * **Pozycje**  - Karta elementów jest dostępna z menu paska bocznego. Z tej zakładki możesz zarządzać swoimi przedmiotami. Możesz używać elementów podczas tworzenia szacunków i faktur.
  * **Szacunki**  - Utwórz kompleksową cytat obejmującą stawki, rabaty, zapasy i wiele innych. Do stworzenia oszacowania można użyć jednego z trzech wbudowanych szablonów. Do oszacowania można dodać dodatkowe podatki, a można je również dodać jako złożony podatek.
  * **Faktury**  - Zrób profesjonalne faktury i wyślij je do swoich klientów. Możesz użyć dostępnych szablonów do generowania faktury. Możesz dodać dodatkowe podatki do faktury, a także podatek złożony. Ponadto możesz zapewnić klientom zniżkę procentową lub o stałej wartości. Ponadto możesz zastosować rabaty na poszczególne przedmioty, a także ogólną kwotę faktury.
  * **Płatności**  - Ten moduł pomaga śledzić płatności, które otrzymałeś od swoich klientów.
  * **Wydatki**  - Moduł wydatków pomaga śledzić, ile wydasz na różne usługi.
  * **Podatki**  - Korzystając z tej funkcji, możesz łatwo zarządzać podatkami. Możesz dodać wiele podatków od całkowitej kwoty faktury lub poszczególnych przedmiotów.
  * **Raporty**  - Uzyskaj kompleksowe informacje na temat wszystkich twoich faktur, niezależnie od tego, czy są one dla jednego, czy kilku klientów. Wsparcie kraterowe zawierają cztery rodzaje raportów, takie jak raport sprzedaży, raport zysku i strat, raport z wydatków i raport podatków.

## Wniosek   {#Conclusion}
Dowiedzieliśmy się o kraterie i tym, jak skonfigurować go ręcznie i z Dockerem. Przeanalizowaliśmy również niektóre funkcje, które powinno zapewnić każde oprogramowanie rozliczeniowe. Mamy nadzieję, że ten przewodnik może pomóc w szybkim wdrożeniu systemu faktury typu open source dla Twojej firmy.
Wreszcie [Containerize.com][7] ciągle pisze posty na blogu na temat dalszych produktów i tematów open source. Dlatego prosimy o kontakt z kategorią [fakturowania][8] w celu regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Krater - bezpłatny system księgowy dla małych firm][5]
  * [Top 5 Oprogramowanie rachunkowości typu open source w roku 2021][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
