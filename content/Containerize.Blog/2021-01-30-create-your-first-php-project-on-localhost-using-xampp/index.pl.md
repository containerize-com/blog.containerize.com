---
title: "Utwórz swój pierwszy projekt PHP na LocalHost za pomocą XAMPP '" 
seoTitle: "Utwórz swój pierwszy projekt PHP na LocalHost za pomocą XAMPP" 
description: "Konfiguracja środowiska programistycznego za pomocą bezpłatnego i open source WWW XAMPP. Utwórz i testuj swoje projekty PHP na LocalHost, wykonując kilka łatwych kroków." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Konfiguracja środowiska programistycznego za pomocą bezpłatnego i open source XAMPP Server. Ucz się, twórz i testuj swoje projekty PHP na LocalHost, wykonując kilka łatwych kroków." 
url: /pl/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Konfiguracja środowiska programistycznego za pomocą bezpłatnego i open source XAMPP Server. Ucz się, twórz i testuj swoje projekty PHP na LocalHost, wykonując kilka łatwych kroków.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Utwórz swój pierwszy projekt PHP z serwerem WWW XAMPP Open Source">}}

XAMPP to serwer WWW open source, który zapewnia lokalne środowisko do tworzenia, uruchamiania i testowania projektu PHP przed wdrożeniem go na serwerach na żywo. Zapewnia lokalny serwer dla programistów do testowania i tworzenia aplikacji internetowych. W tym poście na blogu omówimy następujące sekcje:
  * [Wymagania][2]
  * [Co to jest XAMPP][3]
  * [Utwórz skrypt PHP][4]
  * [Uruchom i testuj skrypt php][5]
  * [Wniosek][6]

## Wymagania {#requirements}

  * Instalacja XAMPP
  * Aplikacja edytora kodu
  * Podstawowa wiedza PHP
  * Podstawowa wiedza HTML i JavaScript

## Co to jest XAMPP? {#xampp}

XAMPP to stos serwera WWW open source. Zawiera Apache, MySQL, Mariadb, PHP i Perl. Jest niezwykle łatwy w instalacji i użyciu. Dlatego jest to najpopularniejsze środowisko programistyczne PHP. Serwer XAMPP zapewnia pełne środowisko do tworzenia aplikacji internetowych PHP. Jeśli nie masz jeszcze pracy XAMPP, postępuj zgodnie z tym przewodnikiem, aby zainstalować XAMPP:
[Ustaw XAMPP i PhpMyAdmin jako LocalHost w systemie Windows][7]

## Utwórz skrypt PHP {#php}

  * Zakładając, że zainstalowałeś już XAMPP, śledząc powyższy samouczek, stwórzmy teraz prosty skrypt PHP i przetestuj go na XAMPP.
  * Najpierw otwórz edytor. Jeśli nie masz edytora programowania, po prostu otwórz notatnik.
  * Wprowadź następujący kod
```
<?php
echo "This is my first PHP project";
?>
```
  * Kliknij „Plik” w prawym górnym rogu.
  * Naciśnij przycisk „Zapisz jako”.
  * Wprowadź nazwę z rozszerzeniem „.php”.
* Dla „Zapisz jako typ”, wybierz opcję „Wszystkie pliki (\*. \*)”.
  * I na koniec naciśnij przycisk „Zapisz”.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Utwórz swój pierwszy projekt PHP z serwerem WWW XAMPP Open Source">}}


## Uruchom i testuj skrypt PHP {#test}

  * Skopiuj ten skrypt PHP do folderu HTDOCS w instalacji XAMPP. Głównie folder HTDOCS znajduje się tutaj: C: \ xampp \ htdocs
  * Otwórz swoją przeglądarkę.
  * Przejdź do LocalHost/My \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Utwórz swój pierwszy projekt PHP z serwerem WWW XAMPP Open Source">}}

Gratulacje! Właśnie stworzyłeś swój pierwszy projekt PHP.

## Wniosek {#conclusion}

Tworzenie pierwszego projektu internetowego jest zawsze bardzo ekscytujące dla początkującego. Czuje się świetnie, gdy projektujesz swój pierwszy dynamiczny skrypt, uruchamiasz go i przeglądaj działającą w przeglądarce. Mam nadzieję, że ten prosty przewodnik pomógł ci w tworzeniu i uruchomieniu pierwszego projektu PHP z serwerem WWW XAMPP open source.

## Badać
Aby dowiedzieć się więcej o XAMPP i PhpMyAdmin, sprawdź następujące przewodniki:
[Ustaw XAMPP i PhpMyAdmin jako LocalHost w systemie Windows][7]
[Darmowy stos rozwiązania serwera WWW dla programistów PHP i Perl][1]



[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
