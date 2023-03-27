---
title: "Przewodnik po migracji z WordPress do Ghost | Duch WordPress" 
seoTitle: "Przewodnik po migracji z WordPress do Ghost | Duch WordPress" 
description: "Ten samouczek dotyczy migracji z WordPress do ducha. Dowiemy się, jak migrować Twoje posty i strony do ducha z istniejącej witryny WordPress." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost i WordPress to dwie wiodące platformy wydawnicze treści open source. W tym samouczku dowiemy się, jak migrować treści z WordPress do ducha." 
url: /pl/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost and WordPress to dwie wiodące platformy publikacji treści open source. W tym samouczku dowiemy się, jak migrować treści z WordPress do ducha.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migruj z WordPress do ducha">}}


## Przegląd
W przeszłości opublikowaliśmy wiele artykułów na takie tematy, jak [zwiększ swoje potencjalne potencjalne integrację WordPress][1], [Jak zintegrować forum dyskursu z WordPress][2] i wiele innych. Ghost to pojawiająca się platforma blogowa typu open source. Jest to CMS Node.js do publikowania treści i jest wyposażony w prosty i czysty interfejs, który ułatwia użycie. To wspaniała platforma dla początkujących, ponieważ koncentruje się na Markdown zamiast edycji Wysiwyg. Moc i prędkość Node.js sprawiają, że duch jest bardzo szybki. Ze względu na prostotę platformy wielu użytkowników przechodzi z innych platform. Ponieważ WordPress jest pierwszą platformą do zarządzania treścią.
Stąd więcej użytkowników **migruje z WordPress do Ghost** . Istnieje wiele treści, które zawiera pliki multimedialne, komentarze, posty itp. Dostępne są wtyczki, które pomogą migrować treści z WordPress do Ghost. Główną zaletą przyjęcia ducha jest to, że koncentruje się on na optymalizacji wyszukiwarek. W tym samouczku WordPress Ghost przejdziemy przez wszystkie kroki migracji za pomocą oficjalnej wtyczki Eksport WordPress.
* **[Briedf Intro of WordPress][3]** 
* **[Co to jest duch?][4]** 
* **[wymagania][5]** 
* **[Eksportuj zawartość WRODPress za pomocą wtyczki][6]** 
* **[importuj zawartość do ducha][7]** 
* **[wniosek][8]** 

## **Briedf Intro of WordPress** {#wp}

[WordPress][9] to wiodąca platforma blogowa typu open source, która napędzała ogromną liczbę stron internetowych. To bezpłatne oprogramowanie do blogowania jest samowystarczalne, wielojęzyczne i zapewnia obsługę wielu języków. Ponadto społeczność programistyczna WordPress jest bardzo żywa i opracowała gigantyczną pulę przydatnych wtyczek, które są łatwo dostępne. Te wtyczki dotyczą prawie każdego przypadku użycia witryny firmy. Ponadto jest napisany w PHP i ma kompleksową dokumentację dotyczącą rozwoju i wdrażania. Cały kod źródłowy jest dostępny na GitHub. Ponadto ta platforma blogowa jest wysoce rozszerzalna, konfigurowalna i zapewnia integrację z aplikacjami innych firm. Istnieje bardzo logiczna i łatwa do zrozumienia pulpit nawigacyjny, w którym użytkownicy mogą przeciągać i upuszczać elementy, aby zmodyfikować wygląd swoich stron internetowych.

## **Co to jest duch? ​​** {#ghost}

[Ghost][10] to kolejna popularna platforma blogowa typu open source. Jest to jedna z najczęściej używanych platform publikowania treści, które są wysoce przyjęte przez programistów i właścicieli witryn. Ponadto Ghost jest bardzo przyjazny dla SEO i ma wbudowane motywy, formularze, biuletyny e-mail i subskrypcje. To bezpłatne oprogramowanie do blogowania zostało zapisane w JavaScript, a cała dokumentacja jest dostępna w odniesieniu do rozwoju i wdrażania.

## Wymagania {#requirements}

W sekcji samouczka Ghost WordPress zobaczymy wymagania potrzebne do migracji z WordPress do ducha. Dzięki oficjalnej wtyczce WordPress Export możesz łatwo migrować swoją treść z WordPress do Ghost. W tym samouczku poprowadzimy Cię, jak wyeksportować treści z WordPress do witryny duchów. Musisz więc zainstalować działającą instalację WordPress i WordPress **Eksport** .

## Eksportuj zawartość WordPress {#export}

Przede wszystkim musisz zainstalować wtyczkę. Wykonaj następujące kroki, aby zainstalować wtyczkę
* Kliknij wtyczki****Z menu paska bocznego
* Kliknij **Dodaj nowy**i użyj pola wyszukiwania w prawym górnym rogu, aby wyszukać**eksport Ghost** 
* **Zainstaluj**i **Aktywuj** wtyczka „**Ghost Foundation** ”

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Zainstaluj i aktywuj wtyczkę duchów dla WordPress">}}

* Po aktywowaniu wtyczki przejdź do **Narzędzia** Z menu bocznego
* Kliknij **Eksportuj do Ghost** z menu paska bocznego.
  * Otrzymasz przewodnik, jak przygotować treść WordPress dla Ghosta.
  * Ponieważ Ghost używa tagów zamiast kategorii, więc wtyczka pomoże Ci przekonwertować kategorie na tagi.
{{_LINE_37_}}
{{_LINE_38_}}
    Poniższe kroki na stałe zmieni strukturę treści Twojej witryny WordPress. Jeśli nie masz pewności, że dokonasz tej zmiany, użyj standardowego narzędzia WordPress Export w podrzędzi> Eksportuj, aby utworzyć pełną kopię zapasową całej swojej treści.
{{_LINE_40_}}
{{_LINE_41_}}
* Przejdź do **Importuj** w menu paska bocznego
* Kliknij **Uruchom importer**w ramach**Konwerter taksonomii** Import.
  * Użyj skrzynek wyboru, aby wybrać kategorie, które chcesz zaimportować do tagów, a tym samym do witryny duchów.
* Następnie kliknij **Konwertuj kategorie na tagi** .
* Przejdź z powrotem do **Eksportuj do Ghost**w**Narzędzia** W menu paska bocznego.
* Kliknij przycisk **Pobierz plik duchów** . Pobierz plik ZIP zawierający całą Twoją treść.

## Importuj zawartość do ducha {#import}

W tej części samouczka WordPress Ghost zaimplementujemy kroki do importowania treści do ducha.
* Zaloguj się do Ghost Admin i przejdź do **Labs** Widok.
* Kliknij przycisk **Wybierz plik**w opcji**Importuj zawartość** i wybierz eksportowany plik zip
* Kliknij **Importuj** . Wszystkie Twoje treści zostaną następnie zaimportowane na witrynę duchów.
W tej chwili Ghost nie ma wbudowanego systemu komentowania. Najpopularniejszą alternatywą jest Disqus.

## Wniosek {#conclusion}

To prowadzi nas do końca tego postu na blogu. W tym samouczku duchów WordPress nauczyliśmy się, jak przygotować treść WordPress gotową do migracji do ducha. Do wykonywania migracji użyliśmy oficjalnej wtyczki migracji duchów przez Ghost Foundation. Ponadto ten post na blogu z pewnością pomoże ci, jeśli chcesz migrować z WordPress do Ghost, ponieważ omówiliśmy wszystkie potrzebne kroki. Ponadto istnieje wiele platform publikowania treści open source i artykułów samouczkowych wymienionych w sekcji „Explore” poniżej. Jednak obie te platformy blogowe typu open source są najważniejszym oprogramowaniem, które oferują funkcje na poziomie przedsiębiorstwa, które zaspokoi potrzeby stron internetowych.
Wreszcie [Containerize.com][11] pisze nowe posty na blogu na temat dalszego oprogramowania typu open source. Dlatego pozostań w kontakcie z platformą [12] do regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [WordPress][9]
  * [Jekyll][13]
  * [Dyskurs][14]
  * [Ghost][10]
  * [Jak dokeryzować WordPress z Docker Compose][15]
  * [Jak włączyć kompresję GZIP w WordPress dla lepszej pagspeed i SEO][16]
  * [Zwiększ swoje leady za pomocą bezpłatnej integracji Civicrm WordPress][1]
  * [Zautomatyzuj system biletów za pomocą WordPress i Osticket][17]
  * [Jak zintegrować forum dyskursu z WordPress][2]
  * [Zwiększ ruch wyszukiwania stron internetowych, śledząc 7 najlepszych blogów SEO][18]
  * [Jak zbudować swoją stronę internetową za pomocą WordPress i Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
