---
title: "Jak stworzyć witrynę e-learningową z Moodle LMS" 
seoTitle: "Jak stworzyć witrynę e-learningową z Moodle LMS" 
description: "Moodle LMS to bezpłatne i open source e-learning do tworzenia internetowej platformy edukacyjnej. Sprawdź przewodnik po zapoznaniu się z tym." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Zbuduj internetową platformę edukacyjną z platformą e-learningową open source. W tym artykule wyjaśniono, jak używać Moodle LMS do tworzenia witryny uczenia się na odległość." 
url: /pl/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Zbuduj internetową platformę edukacyjną z platformą e-learningową open source. W tym artykule wyjaśniono, jak używać Moodle LMS do tworzenia witryny uczenia się na odległość.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Od ponad roku dotknęło nas Covid 19. Każda część świata została zamknięta. Ma to negatywny wpływ na życie ludzi i przedsiębiorstwa na całym świecie. Co ważniejsze, ma to duży wpływ na nasz system edukacyjny. Instytucje edukacyjne muszą przejść do nauki online, aby uczniowie mogli kontynuować edukację z komfortu własnych domów. Bez solidnej i bezpiecznej platformy e-learningowej uczenie się online jest niemożliwe. W tym artykule przyjrzymy się projektowi  **Moodle Open Source** , który umożliwia nauczycielom i uczniom komunikację i uczenie się z dowolnego miejsca.
W tym artykule omówimy następujące sekcje, aby  **utworzyć witrynę e-learning**  za pomocą Moodle.
  * [Wymagania wstępne][1]
  * [Co to jest Moodle?][2]
  * [Funkcje Moodle][3]
  * [Instalacja Moodle][4]
  * [Wniosek][5]

## 
Jeśli jeszcze tego nie zrobiłeś, musisz zainstalować i konfigurować środowisko lamp na swoim serwerze.

## Co to jest Moodle?   {#Co}
[**Moodle **][6] to bezpłatne i open source e-learning. Moodle oznacza modułowe obiektowe środowisko dynamicznego uczenia się. Został stworzony, aby dać nauczycielom, administratorom i uczniom platformę e-learningową do tworzenia i dostarczania zindywidualizowanych środowisk edukacyjnych. Ponadto Moodle jest odpowiednim  **LMS dla szkół ** , uniwersytetów i szkoleń zawodowych w firmach. Jest to jedno z popularnych  **uczenia się na odległość **  do tworzenia strony internetowej LMS. Ponadto Moodle zapewnia nauczycielom i uczniom bogate narzędzia i wspólne środowiska uczenia się. Moodle ma aplikację mobilną na telefony i tablety i tablety z systemem iPhone'a, Androida oraz Windows. Aplikację mobilną może być używana z dowolnej lokalizacji na całym świecie. Ten  **samodzielny LMS **  jest napisany w PHP i przechowuje dane w bazach danych MySQL/PostgreSQL. Jest wyposażony w obszerną dokumentację użytkowników i programistów. Cały kod źródłowy jest dostępny na [ **github ** ][7]. Licencja dla tego open source ** rozwiązanie e-learning**  to GPLV3+.

## funkcje Moodle   {#Features}
Moodle ma wiele funkcji. Jednak w tym artykule omówimy niektóre z następujących kluczowych funkcji.
**Wspólne narzędzia i działania**: Fora, wiki, glosariusze, działania bazy danych i inne narzędzia pozwalają użytkownikom współpracować i uczyć się razem. Grupa elementów w kursie Moodle jest określana jako aktywność. Działanie jest zazwyczaj czymś, co robi uczeń, w którym wchodzi w interakcje z innymi uczniami i/lub nauczycielem.
**Postęp śledzenia**: Nauczyciele i studenci mogą śledzić swoje postępy i ukończenie za pomocą różnych narzędzi do śledzenia określonych działań lub materiałów, a także na poziomie kursu. Istnieje kilka sposobów śledzenia postępów uczniów w Moodle, takich jak oceny, kompetencje, zakończenie aktywności, zakończenie kursu, odznaki, raporty z zakresu i analizy.
**Zarządzanie wtyczkami**: Wtyczki pozwalają rozszerzyć fundamentalną funkcjonalność Moodle, dodając nowe funkcje. Użytkownicy mogą dodawać wtyczki do różnych zadań, takich jak dodatkowe działania, nowe typy pytań quizu, nowe raporty, złącza systemowe i wiele innych. Interfejs administratora może być używany do instalacji i wyłączania wtyczek.
**Zarządzanie kursami**: Utwórz i zarządzaj kursami, które spełniają różne potrzeby. Zajęcia prowadzone przez instruktora, zajęcia z samodzielnego tempa, klasy mieszane i całkowicie klasy online to opcje.
**Peer i samoocena**: Warsztaty i ankiety są wbudowanymi zajęciami, które zachęcają uczniów do oglądania, oceny i przeglądania pracy własnych i innych kolegów z klasy jako grupy.

## Moodle Instalation   {#Moodle}
Postępuj zgodnie z poniższym przewodnikiem krok po kroku, aby zainstalować Moodle LMS na Ubuntu 18.04.
  * Po pierwsze, uruchom poniższe polecenia, aby zmienić DirectLory Pobierz i pobieranie Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Uruchom następujące polecenia Utwórz katalog danych i ustaw uprawnienia.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Utwórz plik konfiguracji Nginx dla witryny Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Dodaj do niego kod poniżej i zapisz plik.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Utwórz SymLink, aby włączyć nowo utworzoną stronę.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Uruchom ponownie serwer WWW Nginx.
```
sudo systemctl restart nginx
```
  * Następnie otwórz przeglądarkę i wpisz http://example.com. Zastąp „example.com” rzeczywistą nazwą domeny lub IP twojego serwera.
  * Teraz możesz zobaczyć kreatora instalacyjnego. Wybierz język i kliknij następny przycisk.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - wybierz język">}}

  * Musisz przejrzeć i upewnić się, że adres URL witryny, katalogu głównego Moodle i katalogu danych są prawidłowe. Możesz także zmienić ścieżkę „Directory danych” i powinna ona znajdować się poza katalogiem kodu Moodle dla bezpieczeństwa. Kliknij następny przycisk.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Ustaw ścieżkę katalogu danych">}}

  * Wybierz sterownik bazy danych na tym etapie. Możesz jednak użyć już wybranego i kliknąć następny przycisk.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Wybierz sterownik bazy danych">}}

  * Podaj ustawienia bazy danych, takie jak host bazy danych, nazwa bazy danych, użytkownik bazy danych, hasło do bazy danych i prefiks tabeli. Kliknij następny przycisk.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Ustawienia bazy danych">}}

  * Kliknij przycisk potwierdzający, aby zgodzić się z warunkami.
  * Możesz zobaczyć listę wymaganych rozszerzeń PHP. Będziesz jednak musiał zainstalować wszelkie brakujące dodatki. Kliknij przycisk Kontynuuj, aby przenieść następny krok.
  * W tym momencie musisz wypełnić dane administratora, aby utworzyć konto. Kliknij przycisk „Zaktualizuj profil”.
  * Podaj informacje dla Twojej witryny, takie jak pełna nazwa witryny, krótka nazwa witryny, podsumowanie frontPage, domyślna strefa czasowa i e-maila bez odpowiedzi. Kliknij przycisk „Zapisz zmiany”.
  * Wypełnij rejestrację witryny, dostarczając takie informacje, jak nazwa witryny, język, region, adres e -mail itp.

## Wniosek   {#Conclusion}
Dowiedzieliśmy się o Moodle i jego głównych cechach w tym artykule. Przedstawiliśmy również podejście krok po kroku do konfigurowania **Moodle LMS  **do **  Utworzenie strony internetowej e-learning **. Możesz przejrzeć [**  oficjalną dokumentację**][8], aby poczuć się bardziej komfortowo z różnymi funkcjami, takimi jak kursy, rejestracja studentów, postęp śledzenia i tak dalej. Mam nadzieję, że ten post uznałeś za przydatny w tworzeniu strony internetowej LMS.
Wreszcie [**Containerize.com **][9] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tym [**  System zarządzania uczeniem się**][10] kategorii najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  *[ **Narzędzia LMS open source** ][11]
  *[ **Moodle-System e-learning** ][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
