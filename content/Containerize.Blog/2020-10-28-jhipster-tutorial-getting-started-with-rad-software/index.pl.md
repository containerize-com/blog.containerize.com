---
title: "Samouczek Jhipster | Pierwsze kroki z oprogramowaniem RAD" 
seoTitle: "Samouczek Jhipster | Pierwsze kroki z oprogramowaniem RAD" 
description: "Krok po kroku samouczek jhipster dla początkujących do rozpoczęcia pracy. Postępuj zgodnie z tym artykułem, aby skonfigurować pierwszą aplikację z oprogramowaniem JHipster Rad open source." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Zanurzmy się w generator kodu źródłowego. Oferuje nietypowe funkcje do generowania internetowych responsywnych aplikacji z dobrze udokumentowanym interfejsem API REST." 
url: /pl/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## zanurzmy się w generator kodu źródłowego. Oferuje nietypowe funkcje do generowania internetowych responsywnych aplikacji z dobrze udokumentowanym interfejsem API REST.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Samouczek Jhipster">}}


## Przegląd:
Niedawno opublikowaliśmy [post na blogu][1] na temat znaczenia [oprogramowania RAD][2] w aktualnych czasach. Technologia ewoluuje w bardzo wysokim tempie. Wymagania i potrzeby biznesowe zmieniają się z dnia na dzień. Istnieje wyścig o rozwój rozwiązań w krótszym czasie. Z drugiej strony każda firma chce uchwycić rynek, jak najszybciej wprowadzając produkt. Dlatego społeczność open source opracowała wiele oprogramowania opartych na  **Agile Software Development**  . Te bezpłatne oprogramowanie do szybkiego rozwoju aplikacji ułatwia użytkownikom szybkie możliwości rozwoju prototypowania. Pozwala budować i uruchomić początkową wersję swojego produktu, a tym samym możesz opracować dalsze uwalnianie przy wprowadzeniu informacji zwrotnej użytkownika. Ponadto oprogramowanie te mają na celu pochłanianie wszelkich zmian na każdym etapie projektu.
Tymczasem zespoły programistów przyspieszają swoje procesy rozwojowe i upewniają się, że wcześniejsze dostawy. W rzeczywistości jest to opłacalne, oszczędzanie czasu i daje satysfakcję programistom i użytkownikom. Szybkie opracowywanie aplikacji jest na tyle elastyczne, że nie musisz zaplanować i ścisłych terminów. Budujesz to, czego potrzebują twoi konsumenci końcowi. W tym samouczku Jhipster przyjrzymy się, jak skonfigurować [JHIPSER][3] i utworzyć naszą pierwszą aplikację, obejmując następujące punkty:
  * [Co to jest jhipster i jak go zainstalować?][4]
  * [Jak wygenerować i uruchomić podstawową aplikację?][5]
  * [Zbadaj pulpit pulpitu administratora wygenerowanej aplikacji][6]
  * [Wniosek][7]

## Co to jest jhipster i jak go zainstalować? {#install}

[JHIPSER][3] to oprogramowanie RAD open source, które służy do generowania aplikacji internetowych Enterprise. Ten konstruktor aplikacji typu open source oferuje sprężynowe frameworka oparte na Javie na technologiach po stronie serwera i popularnych technologii front-end, takich jak Angular, Vue.js i React.js. Ten generator kodu źródłowego zawiera solidną architekturę mikrousług z wieloma mechanizmami uwierzytelniania użytkownika, takimi jak uwierzytelnianie sesji OAuth.20, JWTS i HTTP. Ponadto zapewnia wersję online, w której użytkownicy mogą odkrywać wszystkie funkcje. To  **narzędzie prototypowania open source**  jest napisane w JavaScript z niewielkim wejściem TypeScript. Dlatego dostępna jest kompleksowa dokumentacja dotycząca rozwoju i wdrażania. Deweloperzy mogą znaleźć kod źródłowy w repozytorium [GitHub][8]. Istnieje kompletna obsługa przeprowadzania testów przy użyciu popularnych ram testowych, takich jak Gatling i Komustractor. Ponadto jest solidny, bezpieczny, wieloplatformowy i obsługuje integracje stron trzecich.
W tym  **jhipster samouczku**  Zbadamy JHIPSER w odniesieniu do jego konfiguracji i użycia. [JHIPSER][3] jest bezpłatny i zbudowany na modelu szybkiego rozwoju aplikacji. Zapewnia ekosystem przyjazny dla programistów, który jest dość obiecujący i opracowuje potężne narzędzia do tworzenia szybkich aplikacji internetowych.
Zobaczmy, jak możemy zainstalować ten konstruktor aplikacji typu open source. Najpierw zainstalujemy następujące warunki wstępne.
  * [Java 11 jdk][9]
  * [Node.js 10.20.1+][10]
Po zakończeniu instalacji otwórz terminal i uruchom następujące polecenie.
`npm instaluj -g generator -jhipster`
To polecenie może potrwać kilka minut, a po pomyślnym ukończeniu JHIPSER zostanie zainstalowany na twoim komputerze.
Możesz sprawdzić następujące polecenie, aby sprawdzić instalację.
`` JHipster -version '

{{< figure align=center src="images/install-1024x564.png" alt="Instalacja JHIPSTER">}}


## Jak generować i uruchomić podstawową aplikację? {#run}

W sekcji tego  **JHIPSER TUTIURE**  dowiemy się, jak generować naszą pierwszą aplikację za pomocą tego oprogramowania RAD open source.
Wróć do okna terminala, uruchom następujące polecenia:
`mkdir 1stappcd 1stapp/`
Po wykonaniu katalogów uruchom następujące polecenie wspomniane poniżej:
„Jhipster”
To polecenie zainicjuje proces. Odpowiedz na wszystkie pytania dotyczące preferencji technicznych aplikacji, takich jak technologie front end i zaplecza, baza danych, framework testowania i inne, jak widać na poniższym obrazku.

{{< figure align=center src="images/qst-1024x474.png" alt="Samouczek Jhipster">}}

Po udzieleniu odpowiedzi na wszystkie pytania ten generator kodu źródłowego wygeneruje pliki kodu w folderze.
Teraz uruchom wygenerowaną aplikację z następującym poleceniem:
`./mvnw`
Uwaga: To polecenie zadziała, jeśli wybrałeś Maven jako automatyzację kompilacji dla zaplecza.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Samouczek Jhipster">}}

Uzyskaj dostęp do aplikacji do przeglądarki pod adresem http: // localhost: 8080/.

## Przeglądaj pulpit pulpitowy z wygenerowanej aplikacji {#dashboard}

Po naciśnięciu http: // localhost: 8080/w przeglądarce zobaczysz poniższy ekran.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="generator kodów">}}

Możesz użyć wymienionych poświadczeń, aby zalogować się jako admin. JHipster zapewnia dwie domyślne role użytkowników. Po udanym logowaniu będziesz mieć następujące przepisy pokazane na obrazie.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Oprogramowanie RAD open source">}}

JHIPSER zapewnia pełne zarządzanie użytkownikami, w których możesz zarządzać użytkownikami, jak widać na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Zarządzanie użytkownikami JHIPSTER">}}

Opcja zdrowia zawiera informacje o Twojej przestrzeni dysku i bazie danych.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Samouczek Jhipster">}}

Na desce rozdzielczej JHipster administrator dostępny jest kompletny system rejestrowania.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Oprogramowanie RAD open source">}}

Pulpit nawigacyjny administratora tego Builder Application Builder zapewnia również punkty końcowe spoczynku wbudowanych i niestandardowych funkcji.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster open source">}}


## Wniosek {#con}

To koniec tego samouczka JHIPSER. Istnieje wiele platform RAD open source, które zapewniają  **Instant App Development** . Istnieje bardzo tętniąca życiem społeczność, która zawsze żyje, aby reagować na problemy i ich rozwiązania. Metodologia RAD zyskuje sławę z powodu wielu czynników. Po pierwsze, nie ma potrzeby pełnego zrozumienia wymagań. Po drugie, konsument końcowy jest zaangażowany w cyklu życia oprogramowania. Po trzecie, współczynnik ryzyka jest bardzo mniejszy, ponieważ wszyscy interesariusze są na pokładzie. Jednak oprogramowanie RAD jest dostosowalne, przyjazne dla programistów i elastyczne dla zmian. Oszczędza to dużo czasu, ponieważ generatory kodów zapisują ogromny czas przepisywania powtarzających się skryptów. Ten **[JHIPSER][3] Samouczek**  Podkreślił kilka ważnych spostrzeżeń. Jest lekki i łatwy do skonfigurowania z kilkoma prostymi poleceniami Shell.
Zapraszam do zainstalowania tego programu Builder Application Builder, jeśli poważnie szukasz platformy rozwoju szybkiego aplikacji typu open source. Wreszcie [Containerize.com][11] jest gotowy na ulepszenie bazy samouczków o kilka ciekawszych samouczków. Pozostań w kontakcie z tą kategorią [Rapid Application][2] w celu regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Platforma Cuba][12]
  * [QuickApp][13]
  * [JHIPSER][3]
  * [Li3][14]
  * [Apache ISIS][15]
  * [Top 5 bezpłatnych oprogramowania do tworzenia aplikacji szybkiego w 2021 r.][16]
  * [Szybkie oprogramowanie do rozwoju aplikacji dla biznesu | Rad][17]
  * [Rzeczy do przejrzenia przed wyborem oprogramowania open source w 2021 r.][18]



 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
