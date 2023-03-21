---
title: "Skonfiguruj XAMPP i phpMyAdmin jako lokalizację w systemie Windows" 
seoTitle: "Skonfiguruj XAMPP i phpMyAdmin jako lokalizację w systemie Windows" 
description: "Skonfiguruj XAMPP i phpMyAdmin jako lokalne host w systemie Windows. Utwórz własne bezpłatne i open source lokalne środowisko testowe, aby testować i budować aplikacje internetowe." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Skonfiguruj środowisko programistyczne z bezpłatnym i oprogramowaniem do zarządzania serwerami internetowymi (XAMPP) i oprogramowaniem do zarządzania bazami danych (phpMyAdmin)" 
url: /pl/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Konfiguracja środowiska programistycznego z bezpłatnym i oprogramowaniem do rozwiązania serwera WWW (XAMPP) i oprogramowaniem do zarządzania bazami danych (phpMyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP i phpMyAdmin jako lokalny host">}}

XAMPP i PhpMyAdmin jako LocalHost zapewnia lokalny serwer dla programistów do testowania i budowania aplikacji internetowych. XAMPP to lokalny serwer, który jest instalowany na komputerach osobistych/laptopach. Zapewnia lokalne środowisko do tworzenia, uruchamiania i testowania aplikacji PHP przed wdrożeniem ich na serwerach na żywo.
W tym poście na blogu omówimy następujące sekcje:
  * [Opis][1]
  * [Instalacja XAMPP][2]
  * [PhpMyAdmin Dashboard][3]
  * [Final Myśli][4]

## Opis:   {#Description}
XAMPP jest bezpłatny i stos serwera WWW open source. Zawiera Apache, MySQL, Mariadb, PHP i Perl. XAMPP jest dostępny dla systemów operacyjnych Windows. Jest niezwykle łatwy w instalacji i użyciu. Dlatego jest to najpopularniejsze środowisko programistyczne PHP. XAMPP i PhpMyAdmin jako LocalHost zapewnia pełne środowisko do tworzenia i testowania aplikacji internetowych.
Alfabety w XAMPP oznaczają:
***X**-Splatform krzyżowy (obsługuje wiele systemów operacyjnych, w tym Linux, Windows i Mac OS)
***A**- Apache HTTP Server
***M**- Mariadb (baza danych)
***P**- PHP
***P**- Perl

## XAMPP instalacja   {#xampp}
  * Pobierz XAMPP z [tutaj][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP jako Localhost">}}

  * Zainstaluj plik wykonywalny.
  * Następnie kliknij „Dalej”.
  * Wybierz komponenty, które chcesz zainstalować.

{{< figure align=center src="images/xampp2.png" alt="XAMPP jako Localhost Krok 2">}}

  * W przypadku większości aplikacji internetowych potrzebujesz tylko _apache_, _mysql_, _php_ i _phpMyAdmin_.
  * Wybierz katalog instalacyjny, w którym chcesz zainstalować XAMPP.
  * Otrzymasz ostrzeżenie o zabezpieczeniach systemu Windows. Musisz sprawdzić następującą opcję: „_ PRIVATE NETWORKS, takie jak moja sieć domowa lub robocza” _.
  * Wreszcie kliknij „Zakończ”, aby zakończyć instalację.

{{< figure align=center src="images/xampp4.png" alt="XAMPP jako Localhost Krok 3">}}

  * Po udanej instalacji otwórz panelu sterowania XAMPP.
  * Uruchom usługi „Apache” i „MySQL”.

{{< figure align=center src="images/xampp5.png" alt="XAMPP jako Localhost Krok 4">}}


## phpMyAdmin pulpit nawigacyjny:   {#phpMyAdmin}
Aby uzyskać dostęp do pulpitu PhPMyAdmin, kliknij przycisk „Admin” obok usługi MySQL. Możesz również uzyskać dostęp do phpMyAdmin, odwiedzając http: // localhost/phpMyAdmin z przeglądarki. Tutaj możesz tworzyć bazy danych. Wykonaj następujące kroki, aby utworzyć nową bazę danych.
  * Z pulpitu pulpitu kliknij kartę „Bazy danych”.

{{< figure align=center src="images/db1.png" alt="phpMyAdmin w Localhost kroku 1">}}

  * Wprowadź nazwę bazy danych i kliknij przycisk „Utwórz”. To po prostu utworzy nową pustą bazę danych.

{{< figure align=center src="images/db2.png" alt="phpMyAdmin w Localhost kroku 2">}}

  * Następnie możesz tworzyć tabele, wybierając nowo utworzoną bazę danych.
  * Wprowadź nazwę tabeli w „Utwórz tabelę”.

{{< figure align=center src="images/db3-1024x234.png" alt="phpMyAdmin w Localhost kroku 3">}}

  * Wybierz liczbę kolumn.
  * Następnie kliknij przycisk „Go”.
  * Następnie musisz wypełnić formularz na następnej stronie, aby ukończyć tabelę tworzenia.

{{< figure align=center src="images/db4-1024x564.png" alt="phpMyAdmin w Localhost kroku 4">}}


## końcowe myśli:   {#final}
Instalacja XAMPP jest prosta i prosta. Konfiguracja XAMPP zajmuje nie więcej niż 15 minut. Po zainstalowaniu programiści mogą budować i testować swoje aplikacje internetowe oparte na PHP nawet bez połączenia internetowego. Zamiast testować projekty bezpośrednio na serwerze WWW na żywo, przetestowanie ich lokalnie jest proste i oszczędzające czas. Jest to świetna platforma dla początkujących, aby uczyć się, testować i wypolerować swoje umiejętności PHP, Perl i bazy danych.

## Badać:
[Stos rozwiązania serwera WWW dla programistów PHP i Perl][6]
[Najlepsze opcje rozwiązania serwera WWW open source][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
