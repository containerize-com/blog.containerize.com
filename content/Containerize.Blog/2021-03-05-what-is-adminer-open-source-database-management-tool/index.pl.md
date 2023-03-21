---
title: "Co to jest administrator? |. Narzędzie do zarządzania bazą danych typu open source" 
seoTitle: "Co to jest administrator? |. Narzędzie do zarządzania bazą danych typu open source" 
description: "Co to jest administrator? Internetowy system zarządzania bazami danych z interfejsem przyjaznym dla programistów. Omówmy, jak zarządzać bazami danych z administratorem open source." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer to internetowy system zarządzania bazami danych open source do zarządzania bazami danych. Dowiedzmy się, jak skonfigurować administratora w LocalHost i przejrzeć jego kluczowe funkcje." 
url: /pl/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer to internetowy system zarządzania bazą danych open source do zarządzania bazami danych. Dowiedzmy się, jak skonfigurować administratora w LocalHost i przejrzeć jego kluczowe funkcje.
{{_LINE_11_}}

## Przegląd
Zadania związane z danymi są teraz znacznie bardziej krytyczne niż kiedykolwiek. Narzędzie do zarządzania bazami danych stało się integralną częścią każdej firmy. Istnieje jednak wiele internetowych systemów zarządzania bazami danych, które oferują rozwiązania tak trudnych zadań. Przedsiębiorstwa codziennie generują mnóstwo danych i stają się trudne do utrzymania. Ponadto organizacje mają tendencję do uproszczenia dostępu do danych i kontroli danych. Te bezpłatne narzędzia pomagają zmniejszyć redundancję danych, sprawiają, że bazy danych są wydajne i niezawodne. Ponadto opublikowaliśmy posty na blogu na takie tematy, jak [Top Open Source DBMS Tools][1] i jeszcze więcej.
Dlatego społeczność Open Source opracowała administratora, który jest narzędziem do zarządzania bezpłatnym bazą danych na poziomie przedsiębiorstwa. W tym samouczku administracyjnym omówimy następujące punkty.
  * [Co to jest administrator?][2]
  * [Ważne cechy administratora][3]
  * [Administrator vs phpMyAdmin][4]
  * [Zarządzaj bazami danych z administratorem][5]
  * [Wniosek][6]

## Czym jest administrator?   {#Co}
Jeśli chodzi o lekkie, przyjazne dla użytkownika, wysokowydajne narzędzie do zarządzania bazą danych MySQL, Adminer zyskał szeroką popularność i zapewnia wiele ulepszeń w porównaniu z phpMyAdmin. Początkowo to narzędzie do zarządzania bazą danych zostało opracowane przez Jakub Vrana w 2007 roku jako alternatywa dla phpMyAdmin, aby wszystko, co musisz zrobić, to pobrać i zainstalować pojedynczy, lekki plik PHP w bazie danych aplikacji.
Jako narzędzie do zarządzania bazą danych typu open source jest również bezpłatne i jest zapisane w PHP. To, co wyróżnia ten internetowy system zarządzania bazami danych, jest dobry projekt interfejsu użytkownika dla bezproblemowego wrażenia użytkownika, a także silne funkcje bezpieczeństwa, aby zapewnić bezpieczeństwo danych przed wszelkimi atakami lub złośliwymi próbami hakowania. To narzędzie do zarządzania bazą danych jest łatwe do skonfigurowania i wymaga prostych wymagań, takich jak Ubuntu i Lampa. Użytkownicy mogą znaleźć kompleksową dokumentację dotyczącą rozwoju i wdrażania. Dlatego można znaleźć pliki źródłowe tego internetowego systemu zarządzania bazą danych na [GitHub][7].

## Ważne funkcje administratora   {#important}
Niektóre podstawowe, ale ważne funkcje tego narzędzia do zarządzania bazą danych obejmują:
  * Ma wiele funkcji bazy danych, w tym wybierz bazę danych, edytuj tabele, wstaw/edytuj dane w tabelach oraz sortowanie/wyszukiwanie danych w wielu kolumnach
  * Obsługuje wiele bazy danych, w tym: MySQL, PostgreSQL, SQLite, MS SQL, Oracle i SimpledB i inne
  * Jest dostępny w 43 językach, w tym w języku angielskim, arabskim, perskim, polskim, holenderskim itp.
  * Możesz łatwo edytować obiekty bazy danych, takie jak widoki, wyzwalacze, procedury przechowywane, uprawnienia użytkownika i wiele innych.
  * Administrator zapewnia również środki bezpieczeństwa przeciwko wtrysku SQL, kradzieży sesji, atakom oprogramowania skryptowego krzyżowego (XSS) i innych atakach.

## administrator vs phpMyAdmin   {#AdMiner}
Tak więc, kiedy mówimy o tym, co jest administratorem, interesujące byłoby znanie porównania administratora z phpMyAdmin. Jeśli chodzi o wybór między administratorem a phpMyAdmin, administrator wchodzi na wierzch, aby uzyskać elastyczne funkcje i przesyłanie plików światła, które zapewnia. Podobnie, w porównaniu z phpMyAdmin, obsługuje wiele baz danych, w tym MySQL, SQLite i wiele innych. Podobnie jest bardziej intuicyjny i mądrzejszy niż phpMyAdmin, jeśli chodzi o dodanie dodatkowych pól, które administrator wykonuje automatycznie lub manipulację wszystkimi indeksami jednocześnie.

## Zarządzaj bazami danych z administrator   {#Manage}
W sekcji tego samouczka administracyjnego przejdziemy do tego, jak możemy zarządzać bazami danych z administratorem.
**Wymagania systemowe**
Aby administrator działał w systemie, ważne jest, aby mieć już następujące wymagania na serwerze:
  * Wersja PHP 5, 7 lub 8
  * Sterownik bazy danych, taki jak MySQL, SQLite, PostgreSQL itp.
**Instalacja**
Jeśli masz te dwa wymagania systemowe, po prostu pobierz plik z [][8] i zacznij od przesyłania pliku PHP na serwer. W przypadku serwera XAMPP zmień nazwę pobranego pliku na „adminer.php” i umieść ten plik w folderze HTDOCS.
**Dostęp do interfejsu użytkownika**
Po przejrzeniu tego, co to jest administrator? Teraz uzyskaj dostęp do tej aplikacji z HTTP: Your-IP-Address/Adminer.php Jak pokazano:
{{_LINE_42_}}
**Połączyć się z serwerem**
Zaloguj się do tego bezpłatnego narzędzia do zarządzania bazą danych za pomocą nazwy użytkownika i hasła serwera. Teraz, jeśli chcesz uzyskać dostęp tylko do jednej bazy danych, wprowadź jej nazwę. Możesz zostawić to pole puste, aby uzyskać dostęp do wszystkich baz danych, które już istnieją na serwerze.
**Zarządzaj bazami danych**
Po zalogowaniu zobaczysz listę wszystkich bieżących baz danych. Kliknij dowolną bazę danych, aby ją zarządzać.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Zarządzaj bazami danych z narzędziem zarządzania bazą danych administratorów">}}

Na następnym ekranie zobaczysz listę wszystkich tabel wybranych baz danych. Stąd możesz wyeksportować bazę danych lub jej tabele, dodać lub edytować tabelę/kolumny, zmieniać dane za pomocą zapytań SQL i wiele więcej, jak pokazano tutaj:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Narzędzie do zarządzania bazą danych">}}

**Utwórz nową bazę danych**
Aby utworzyć nową bazę danych, kliknij „Utwórz bazę danych”, wprowadź nazwę bazy danych i kliknij „Zapisz”.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Narzędzie do zarządzania bazą danych">}}

**Wstaw/aktualizacja rekordów**
Dodanie nowych rekordów do stołu jest dość proste. Kliknij link do nowego elementu, który przekieruje Cię do ekranu wstawienia. Tutaj będziesz mógł dodać nowe dane dla wszystkich kolumn w tabeli, wraz z typem danych, aby dodanie nowych danych jest szybkim procesem.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Administrator vs PhpMyAdmin">}}


## Wniosek   {#Conclusion}
To prowadzi nas do końca tego samouczka administracyjnego. Przejrzeliśmy kilka ważnych tematów, takich jak administrator, administrator vs phpMyAdmin i inne aspekty tego internetowego systemu zarządzania bazą danych open source. Mamy nadzieję, że ten post na blogu z pewnością pomoże Ci, jeśli chcesz zainstalować narzędzie do zarządzania bazą danych open source. Jest intuicyjny, inteligentny i łatwy w użyciu interfejs sprawia, że ​​jest to bardzo popularne narzędzie do zarządzania bazą danych. Ponadto obsługuje wiele baz danych, w tym MySQL, SQLite, MongoDB i wiele innych, wraz z środkami bezpieczeństwa w celu ochrony i zapobiegania złośliwym zdarzeniom hakowania. Podsumowując, to narzędzie do zarządzania bazą danych jest nie tylko open source, ale także bezpłatne.
Wreszcie [Containerize.com][9] ciągle pisze posty na blogu na temat dalszych produktów i tematów open source. Dlatego prosimy o kontakt z kategorią [narzędzi do zarządzania bazą danych][10] w celu regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][11], [LinkedIn][12] i [Twitter][13].

## Badać
Aby dowiedzieć się więcej o bezpłatnych narzędziach do zarządzania bazami danych, sprawdź następujące strony:
  * [Administrator | Bezpłatny system zarządzania bazą danych internetowych][14]
  * [Narzędzia programowe DBMS open source][1]
  * [Top 5 Narzędzia do zarządzania bazą danych open source w 2021 r.][15]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
