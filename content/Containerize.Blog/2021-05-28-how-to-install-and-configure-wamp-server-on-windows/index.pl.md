---
title: "Jak zainstalować i skonfigurować serwer Wamp w systemie Windows" 
seoTitle: "Jak zainstalować i skonfigurować serwer Wamp w systemie Windows" 
description: "Zainstaluj Wampserver w systemie Windows i szybko rozpocznij opracowywanie aplikacji internetowych opartych na PHP. Serwer WAMP jest dostępny zarówno dla systemu Windows 32, jak i 64 bitów." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Skonfiguruj środowisko programistyczne do tworzenia aplikacji internetowych z Apache2, PHP i MySQL. Ten artykuł pomaga zainstalować serwer WAMP w systemie Windows." 
url: /pl/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Skonfiguruj środowisko programistyczne do tworzenia aplikacji internetowych za pomocą Apache2, PHP i MySQL. Ten artykuł pomaga zainstalować serwer WAMP w systemie Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Serwer Wamp">}}

Każdy programista musi mieć wymagane oprogramowanie zainstalowane na swoim komputerze przed napisaniem programu. Na początku programiści musieli instalować każde oprogramowanie osobno, a następnie skonfigurować je do współpracy.  **Wampserver**  i inne oprogramowanie do stosu rozwiązań internetowych jest już dostępne, które pakuje całe niezbędne oprogramowanie do jednego pakietu. Musisz tylko zainstalować jeden pakiet, aby uruchomić swoje środowisko programistyczne.
W tym poście na blogu omówimy następujące sekcje.
* [  **Co to jest Wampserver?**  ][1]
* [  **instalacja Wamp**  ][2]
* [  **Konfiguracja Wamp**  ][3]
* [  **Access phpMyAdmin**  ][4]

## Co to jest Wampserver? {#What}

Wampserver to bezpłatny stos rozwiązania do konfigurowania środowiska programistycznego dla aplikacji opartych na PHP. Wamp oznacza (W - Windows, A - Apache, M - MySQL i P - PHP). Ponadto jest również wyposażony w phpMyAdmin i administrator do zarządzania bazą danych. Wamp jest jednym z popularnych narzędzi i możesz je szybko skonfigurować. Ponadto możesz skonfigurować serwer Wamp z panelu sterowania. Zapewnia kompletne środowisko programistyczne do tworzenia i testowania aplikacji. Wampserver składa się z kilku komponentów, które można wybrać podczas instalacji zgodnie z Twoimi potrzebami. Wampserver jest wyposażony w wiele wersji PHP. Możesz łatwo zmienić wersję PHP zgodnie z wymaganiami projektu. Możesz także zmienić DBM (system zarządzania bazą danych) z panelu sterowania Wampserver.

## Instalacja Wamp {#Installation}

Postępuj zgodnie z poniższym przewodnikiem krok po kroku, aby zainstalować serwer WAMP w systemie Windows.
*  **Pobierz Wampserver**  z oficjalnej strony internetowej

{{< figure align=center src="images/wamp-download.png" alt="">}}

* Wybierz  **Wampserver 32 bity** lub **Wampserver 64 bity**  Wersja instalatora zgodnie z systemem operacyjnym.
* Znajdź plik pobierania  **Wamp**  i kliknij go dwukrotnie, aby uruchomić proces instalacji.
  * Wybierz język, a następnie naciśnij przycisk OK.
  * Wybierz pole wyboru Umowa, a następnie kliknij przycisk Dalej.
  * Przeczytaj ważne informacje o instalacji Wampserver i kliknij przycisk Dalej, aby kontynuować.
  * Wybierz folder, w którym chcesz zainstalować serwer WAMP i kliknij przycisk Dalej.
  * Musisz wybrać komponenty, które chcesz zainstalować, jak pokazano na poniższym zrzucie ekranu. Możesz wybrać wszystkie wersje PHP i przełączać się podczas rozwoju. Możesz także zainstalować zarówno MySQL, jak i Mariadb.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Wybierz skrót dla Wampserver i kliknij przycisk Dalej.
  * Kliknij przycisk Instaluj, aby zainstalować Wampserver.
  * Teraz wybierz domyślną przeglądarkę i domyślną edytor tekstu dla serwera WAMP.
  * Twoja instalacja jest zakończona. Kliknij przycisk Zakończ, aby wyjść z kreatora instalacji serwera Wamp.
  * Otwórz przeglądarkę i wpisz LocalHost, aby uzyskać do niej dostęp. Zobaczysz poniższą stronę.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Konfiguracja WAMP {#Configuration}

Teraz zajmiemy się kilkoma konfiguracją, które pomogą Ci podczas tworzenia i testowania aplikacji internetowych. Możesz teraz uruchomić Wampserver, klikając dwukrotnie na skrócie ikonę Wampserver na komputerze.
*  **Usługi**  -Możesz zobaczyć opcje rozpoczęcia, zatrzymania i ponownego uruchomienia wszystkich usług, klikając lewą ikonę Wampserver.
*  **Zmień bazę danych**  -Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz narzędzia i kliknij „Odwróć domyślną DBMS MARIADB MYSQL”. Serwer WAMP ponownie uruchomi się automatycznie i możesz zobaczyć domyślną bazę danych, otwierając LocalHost w przeglądarce.
*  **Zmień wersję PHP**  -Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz narzędzia i zmień wersję PHP CLI i kliknij żądaną wersję PHP.
*  **Wirtualny host**  - Możesz łatwo dodać wirtualny host za pośrednictwem interfejsu internetowego Wampserver. Otwórz LocalHost w przeglądarce i kliknij „Dodaj wirtualny host” w sekcji narzędzi. Wprowadź „Nazwa wirtualnego hosta, takiego jak dev.example.com” i wprowadź bezwzględną ścieżkę projektu. Kliknij przycisk „Rozpocznij tworzenie wirtualHost”. Uruchom ponownie serwer Apache, aby załadować nowo utworzony wirtualny host.
*  **Zmień port Apache**  - Domyślnie serwer WWW Apache działa na porcie 80. Jeśli chcesz użyć innego portu dla Apache, możesz to zrobić z panelu sterowania Wampserver. Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz narzędzia i kliknij „Użyj portu innego niż 80”. Wprowadź nowy numer portu w oknie dialogowym i kliknij przycisk OK.
*  **Zmień port DBMS**  - Domyślnie serwer bazy danych działa na porcie 3306. Jeśli chcesz użyć innego portu dla serwera bazy danych, możesz to zrobić z panelu sterowania Wampserver. Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz narzędzia i kliknij „Użyj portu innego niż 3306”. Wprowadź nowy numer portu w oknie dialogowym i kliknij przycisk OK.
*  **Puste dzienniki**  - Wamserver zapewnia funkcjonalność do wyczyszczenia dzienników z panelu sterowania. Możesz opróżnić dzienniki, takie jak dziennik błędów PHP, dziennik błędów Apache, dziennik dostępu Apache, dziennik MySQL i dziennik mariadb. Nawet Ty możesz wyczyścić wszystkie dzienniki jednocześnie. Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz narzędzia i wybierz puste dzienniki, znajdziesz wszystkie opcje usuwania dzienników.
*  **Zmień język**  - Możesz język panelu sterowania Wampserver. Kliknij prawym przyciskiem myszy ikonę WAMP, aby otworzyć okno dialogowe Narzędzia. Wybierz język i kliknij wymagany język. W nowo wybranym języku zobaczysz panel sterowania.

## Uzyskaj dostęp do phpMyAdmin {#phpMyAdmin}

Możesz uzyskać dostęp do  **phpMyAdmin**  do zarządzania bazami danych, otwierając LocalHost w przeglądarce, a następnie kliknij link phpMyAdmin na stronie Wampserver Welcome. Możesz także uzyskać do niego dostęp, odwiedzając adres URL HTTP: // LocalHost/PhpMyAdmin.

## Wniosek
Omówiliśmy Wampserver i objęliśmy kompletny przewodnik krok po kroku do  **Install Wampserver** w systemie Windows. Możesz łatwo zainstalować i skonfigurować **Wampserver**  , śledząc ten samouczek i od razu rozpocząć kodowanie. Możesz odwiedzić sekcję Links w eksplorowaniu, aby uzyskać więcej opcji na oprogramowaniu do stosu rozwiązań.
Wreszcie [  **Containerize.com** ][5] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [ **Server Server Solut**  ][6] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
* [  **Najlepsze opcje rozwiązania serwera WWW Open Server**  ][7]
* [  **konfiguracja XAMPP i phpMyAdmin jako localhost w systemie Windows**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
