---
title: "Pierwsze kroki z generatorem formularzy HTML | FormBuilder" 
seoTitle: "Pierwsze kroki z generatorem formularzy HTML | FormBuilder" 
description: "FormBuilder to bezpłatny i wielojęzyczny generator formularzy HTML z interfejsem użytkownika przeciągania i upuść. Postępuj zgodnie z tym samouczkiem, aby dowiedzieć się, jak go skonfigurować na LocalHost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "Edytor formularza open source zasilany JavaScript z wieloma konfiguracjami, konfigurowalnymi szablonami formularzy i niestandardowymi elementami sterującymi. Nauczmy się skonfigurować FormBuilder." 
url: /pl/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript zasilany edytor formularza open source z wieloma konfiguracjami, konfigurowalnymi szablonami formularzy i niestandardowymi elementami sterującymi. Nauczmy się skonfigurować FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="Generator formularzy HTML">}}


## **Przegląd**
Niedawno opublikowaliśmy kilka artykułów na takie tematy, jak [Jak skonfigurować formularz formularza Bootstrap Form.io na LocalHost][1] i [Top 5 Open Source Online Forms Builders w roku 2020][2]. Pierwszy post na blogu to artykuł samouczka, który pokazuje proces konfigurowania i funkcje budowniczego formularza bootstrap [form.io][3]. Drugi artykuł mówi o powszechnie używanych budowniczych formularzy typu open source. W obecnym czasie interakcja dwukierunkowa jest najważniejszą rzeczą między dostawcami usług a konsumentami usług. Organizacje zwykle otrzymują spójne informacje zwrotne na temat swoich usług, a następnie formułują przyszłe strategie biznesowe. Jednak formularze są zbieranie informacji od klientów. Firmy produkują szereg formularzy do gromadzenia danych o różnych bieżących operacjach i istnieje wiele rodzajów formularzy, niektóre z nich są pojedynczymi stronami, a niektóre z nich są formularzami wielu stron. Niektóre firmy osadzą formularze na swoim portalu online lub niektóre z nich używają wiadomości e -mail lub innych rodzajów medium do ujawnienia swoich formularzy do gromadzenia danych.
Dlatego dostępnych jest wiele formularzy open source i oprogramowania do zarządzania danymi z bogatymi funkcjami budowniczymi formularzy. W tym artykule zbadamy bezpłatny generator formularzy HTML  **[FormBuilder][4]** , obejmując następujące punkty.
  * **[Co to jest FormBuilder?][5]**
  *[ **Jak skonfigurować? ** ][6]
  *[ **Jak tworzyć formularze za pomocą FormBuilder? ** ][7]
  * **[wniosek][8]**

## Czym jest formaBuilder?   {#Co}
[FormBuilder][4] to projektant formularzy typu open source, który pozwala użytkownikom tworzyć interaktywne formularze. Jest bezpieczny, rozszerzalny i ma możliwości własne. Ten generator formularzy HTML jest wielojęzyczny i oferuje obsługę wielu języków. Istnieje przyjazny dla użytkownika interfejs użytkownika, w którym użytkownicy mogą przeciągać i upuszczać elementy formularza, aby sformułować wymagany szablon formularza. Ponadto zapewnia bogate elementy sterowania i konfigurowalne szablony formularzy. Ponadto użytkownicy mogą tworzyć wiele kart na interfejsie użytkownika, aby tworzyć formularze wielostronowe. Przede wszystkim użytkownicy mogą dążyć do tego bezpłatnego konstruktora formularzy, opracowując wtyczki. Ma całą dostępną dokumentację dotyczącą rozwoju i wdrażania. Jest napisany w node.js i cały kod źródłowy jest dostępny na [github][9].
Oto najważniejsze atrakcje formy.io
  * I18N zintegrowane
  * Formularze wielu punktów
  * Rozszerzalny
  * Obsługa popularnych frontów JavaScript Front End
  * Przeciągnij i upuść interfejs użytkownika

## Jak skonfigurować?   {#organizować coś}
W tej sekcji samouczka formularzy pokazuje Ci, jak skonfigurować FormBuilder na komputerze lokalnym.
Przed pójściem dalej upewnij się, że zainstalowałeś następujące warunki wstępne.
  * Node.js> = 10.9.0
  * NPM
  * Git
Po zainstalowaniu warunków wstępnych uruchom następujące polecenie, aby sklonować kod źródłowy tej aplikacji:
```
git clone https://github.com/kevinchappell/formBuilder
```
Następnie uruchom następujące polecenia, aby zainstalować zależności:
```
cd form-builder<br>npm install 
```
Następnie możesz uruchomić aplikację, uruchamiając następujące polecenie:
```
npm start
```
Wreszcie powyższe polecenie otworzy aplikację do przeglądarki na następujący adres:
```
http://localhost:8080/
```

## Jak tworzyć formularze za pomocą FormBuilder?   {#Jak}
W tej sekcji zbadamy funkcje tego generatora formularzy HTML i dowiemy się, jak możemy tworzyć formularze.
Po uruchomieniu serwera pojawi się następujący interfejs użytkownika.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Generator formularzy HTML">}}

Idąc naprzód, możesz zobaczyć pasek menu po prawej stronie. Zawiera elementy formularzy, takie jak przyciski, pola wyboru, pola tekstowe, pola danych, nagłówek, akapit i wiele innych. Możesz jednak przeciągnąć te elementy i upuścić w środkowym obszarze (odrzucając) ekranu. W lewym górnym rogu istnieje opcja włączenia wersji aplikacji Bootstrap. W lewym górnym rogu znajduje się rozwijanie, w którym użytkownicy mogą wybrać dowolny dostępny język.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Edytor formularza">}}

Następnie możemy przeciągnąć i upuścić dowolny element formularza do obszaru odrzucanego. Ponadto możemy edytować konfiguracje dowolnego elementu, jak pokazano na powyższym obrazie. Istnieje opcja utworzenia kopii istniejącego elementu. Możemy ze sobą zmienić umieszczenie elementów.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Generator formularzy HTML">}}

Po zakończeniu budynku formularza możesz renderować formularz, naciskając przycisk „Render” umieszczony w górnym środku. Ponadto istnieją różne opcje formularzy, w których użytkownicy mogą wygenerować HTML za formularzami. Istnieją również inne opcje, takie jak Formularz użytkownika ładowania, pokaż dane użytkownika, renderowanie formularza użytkownika i wyczyść formularz użytkownika. Wraz z tymi funkcjami dostępnych jest wiele działań formularzy, takich jak „GetfieldTypes”, które zwraca zarejestrowane typy pola dla formularza. Podobnie istnieje wiele innych działań, takich jak pokazanie danych, Pobierz XML, ustawiaj dane, przełączanie edycji i niektóre więcej. Istnieje jednak wiele innych rzeczy, które możesz sprawdzić. Ponieważ jest to open source, możesz go zmodyfikować zgodnie z wymaganiami.

## Wniosek   {#Conclusion}
To jest koniec postu na blogu. Mamy nadzieję, że ten samouczek naprawdę Ci pomoże, jeśli chcesz wdrożyć generator formularzy HTML open source. Ten artykuł obejmował wiele aspektów FormBuilder, abyś mógł łatwo dokonać wyboru, biorąc pod uwagę potrzeby biznesowe. Te bezpłatne budownicze formularzy typu open source są opłacalne i oszczędzające czas. Te bezpłatne narzędzia zapewniają nie tylko możliwości budowania form, ale także zapewniają formularze i zarządzanie danymi. Możesz skonfigurować formularze z aplikacjami internetowymi stron trzecich. Ponadto usuwa kłopot tworzenia różnych formularzy dla różnych aplikacji biznesowych, a właściciele firm mogą tworzyć dowolną formę za pomocą tych budowniczych formularzy typu open source. Ponadto dla tych edytorów formularzy dostępne są wtyczki, które programiści mogą modyfikować zgodnie z wymaganiami. Dlatego najwyższy czas zautomatyzować takie powtarzające się zadania, stosując dobry generator formularzy HTML.
Wreszcie [Containerize.com][10] pisze artykuły na temat dalszych produktów typu open source. Dlatego prosimy o kontakt z kategorią [formularzy][11] w celu regularnych wiadomości i aktualizacji.

## Badać
  * **[form.io][3]**
  * **[Orbeon][12]**
  * **[OHMYFORM][13]**
  * **[Webiny][14]**
  * **[FormTools][15]**
  * **[FormBuilder][4]**
  * **[Forma alpaca][16]**
  *[ **Jak skonfigurować formularz formularza Bootstrap Form.io na LocalHost ** ][1]
  *[ **Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source ** ][17]
  *[ **Top 5 Open Source Online Builders w roku 2020 ** ][2]

  
[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
