---
title: "Jak zainstalować szpital | System zarządzania szpitalem" 
seoTitle: "Jak zainstalować szpital | System zarządzania szpitalem" 
description: "Ten artykuł pomaga zainstalować szpital w LocalHost. Zautomatyzuj procesy medyczne z wykorzystaniem bogatych, open source, bezpłatnego systemu zarządzania szpitalnego." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Samo hostowane rozwiązanie opieki zdrowotnej w celu ułatwienia klinicystów i pacjentów. Nauczmy się wdrażać bezpłatny szpital w lokalnym hostu, wykonując proste kroki." 
url: /pl/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## samozwańcze rozwiązanie opieki zdrowotnej w celu ułatwienia klinicystów i pacjentów. Nauczmy się wdrażać bezpłatny szpital na lokalnym hostu, wykonując proste kroki.

{{< figure align=center src="images/hospitalrun.png" alt="System zarządzania szpitalem">}}


## Przegląd
Niedawno opublikowaliśmy post na blogu na temat [How Online Healthcare Software upoważnia branżę opieki zdrowotnej][1], który opisuje wpływ systemu zarządzania szpitalem open source na branżę opieki zdrowotnej. Globalny przemysł oprogramowania opieki zdrowotnej uzyskuje wartość upływu czasu. Faktycznie jest to, że technologia przekształciła każde dziedzinę życia. Liczba pacjentów i członków personelu zniknęła tak wysoko, że kłopotliwe było zarządzanie tak ogromnymi danymi. Z drugiej strony istnieje wiele czasochłonnych zadań, które odbywają się każdego dnia, a podmioty opieki zdrowotnej wielokrotnie wykonują te zadania. Dlatego społeczność źródłowa typu open source opracowała oprogramowanie medyczne typu open source, które ma wiele przydatnych modułów w celu zaspokojenia potrzeb opieki zdrowotnej.
Oprogramowanie medyczne open source jest opracowywane w celu zarządzania rejestrami pacjentów dotyczących ich historii medycznej, a także przepisów dotyczących zarządzania szpitalami. Ponadto oprogramowanie do opieki zdrowotnej open source wykorzystuje sztuczną inteligencję, aby zapewnić zaawansowane poziomy usług. Większość zabiegów chorób jest obecnie obsługiwana przez oprogramowanie, które nie tylko diagnozuje problemy, ale także zapewnia pomoc w lekarstwie. Istnieje jednak wiele nowych oprogramowania dla szpitali. W tym poście na blogu omówimy następujące punkty.
  *[**Co to jest szpital?** ][2]
  *[**Jakie są cechy szpitala** ][3]
  *[**Kroki instalacyjne szpitala?** ][4]
  *[**Wniosek** ][5]

## Co to jest szpital?   {#intro}
HospitalRun to bezpłatny system zarządzania informacjami o szpitalu typu open source. To bezpłatne rozwiązanie opieki zdrowotnej jest przyjazne dla środowiska, ponieważ użytkownicy mogą w pełni korzystać z tego bezpłatnego oprogramowania, nawet jeśli nie ma łączności internetowej. Zapewnia wiele funkcji, takich jak zarządzanie użytkownikami, rejestracje pacjentów, wizyty, system rozliczeniowy, system wypisu pacjentów i wiele innych. Interfejs użytkownika tego systemu e -zdrowia open source jest logiczna, w której użytkownicy mogą łatwo poruszać się po różnych elementach. Ponadto łatwo jest skonfigurować i oferuje obraz Docker, w którym programiści mogą go wdrożyć za pomocą obrazu Docker.
Ten **System zarządzania szpitalem**  oferuje przepisy dotyczące integracji laboratoriów w celu scentralizowania dokumentacji medycznej pacjenta. Ponadto pozwala użytkownikom prowadzić rejestrację wizyt pacjentów, leków i ocen. Ten system rekordu eHealth jest bezpieczny, elastyczny i oferuje integrację z aplikacjami stron trzecich. Istnieje bardzo tętniąca życiem społeczność, która zapewnia wsparcie dla szpitala. Ponadto istnieje kompletny system wypisu pacjenta. To oprogramowanie medyczne open source jest całkowicie napisane w JavaScript. Ponadto dostępna jest kompleksowa dokumentacja dotycząca rozwoju i wdrażania. W rzeczywistości to oprogramowanie medyczne typu open source zapewnia różne pulpity nawigacyjne dla różnych działów, takich jak dział wsparcia, dział kliniczny i dział administracyjny. Wszystkie te role mają różne poziomy zgody i dostępu.

## Jakie są cechy szpitala?   {#cechy}
W tej sekcji przejdziemy przez niektóre z poniższych kluczowych funkcji tego systemu e -Zdrowia.
  ***Samopoziomowane** : Hospitalrun ma możliwości samowystarczające i wymaga mniej wysiłków w celu rozmieszczenia na serwerach.
  ***Planowanie terminów** : Ten system opieki zdrowotnej pozwala użytkownikom zaplanować spotkania. Na desce rozdzielczej znajduje się kompletny moduł na spotkania. Ponadto użytkownicy mogą przeszukiwać spotkania za pomocą filtrów.
  ***System wypisu pacjentów** : Ten system zarządzania szpitalnego utrzymuje zapis pacjentów, którzy zostali wypisani.
  ***Zarządzanie narkotykami** : Ten system e -Zdrowia umożliwia użytkownikom rejestrowanie pełnych danych dotyczących leków konkretnego pacjenta.
  ***Zarządzanie rekordami pacjentów** : Istnieje kompletny moduł do zarządzania rekordami pacjentów. Użytkownicy mogą rejestrować szczegóły nowych pacjentów, przyjmować pacjentów w stosunku do ich pełnej historii medycznej, takiej jak medycyna, raporty i wizyty.
  ***Dostosowany system rozliczeń** : W tym oprogramowaniu do opieki zdrowotnej dostępny jest bogaty system rozliczeniowy. Umożliwia użytkownikom generowanie faktur i zarządzania pełnymi szczegółami, takimi jak ceny laboratoryjne, opłaty oddziałowe, ceny obrazowania i itp.
  ***Elektroniczna dokumentacja medyczna** : To oprogramowanie medyczne typu open source zapewnia wszystkie niezbędne moduły do ​​prowadzenia dokumentacji medycznej i administracyjnej.
  ***Elastyczne** : HospitalRun jest elastyczny i rozszerzalny, aby programiści mogli rozszerzyć swoją funkcjonalność, aby spełnić potrzebne funkcje.

## Kroki instalacji szpitala?   {#kroki}
W tej sekcji postu na blogu opisano etapy instalacji szpitala.
Zanim zaczniemy, najpierw zainstaluj następujące warunki wstępne:
  * [Docker][6]
  * [Kompozycja dokera][7]
Po zainstalowaniu warunków wstępnych pobierz kod źródłowy z tego [link][8].
Następnie otwórz terminal i uruchom następujące polecenia:
CD ogólny
Serwer CD
Teraz zmień hasło w wierszu 8,9 \ `conf/initcouch.sh \` i hasło w wierszu 7 _config-demo.js_.
Następnie uruchom następujące polecenie, aby zbudować i uruchomić aplikację:
_Docker-Compose Build && Docker-Compose Up_
Następnie zakręci pojemnik Docker, jak pokazano na poniższym obrazku:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="System zarządzania szpitalem">}}

Na koniec możesz uzyskać dostęp do tego rozwiązania opieki zdrowotnej w przeglądarce pod adresem http: // localhost/#/login. Pokazuje następujący ekran logowania.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="System zarządzania szpitalem">}}


## Wniosek   {#Conclusion}
To jest koniec tego samouczka. Ten system rekordów pacjentów naprawdę pomaga zautomatyzować **Usługi opieki zdrowotnej** . Nowoczesny system zarządzania szpitalem typu open source jest wyposażony w narzędzia analityczne danych, które pomagają pracownikom opieki zdrowotnej w podjęciu niezbędnych działań dla lepszych placówek opieki zdrowotnej. Ten post na blogu naprawdę pomoże ci, jeśli poważnie chcesz wdrożyć system e -Zdrowia dla swojego szpitala/kliniki. Te rozwiązania typu open source są opłacalne, ponieważ są zintegrowane z laboratoriami i innymi klinikami, a także minimalizują dokumentację poprzez komputerowe każdy proces. Rozwiązanie opieki zdrowotnej open source pozwala użytkownikom mieć wizualizacje wszystkich operacji opieki zdrowotnej, takich jak leki pacjentów, wypisanie, raporty i zarządzanie rozliczeniami. Ponadto możesz skupić się na innych ważnych zadaniach, takich jak planowanie zasobów i ocena ryzyka. Istnieje jednak wiele innych oprogramowania na poziomie przedsiębiorstw dla szpitali, które są wymienione w sekcji „Explore” poniżej.
Ostatecznie  **** [Containerize.com][9]**** ma na celu pisanie na temat dalszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [Technologie opieki zdrowotnej][10] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [OpenEMr][11]
  * [OpenMrs][12]
  * [Szpital][13]
  * [Open Hospital][14]
  * [Solumsed][15]
  * [Rzeczy do przejrzenia przed wyborem oprogramowania open source w 2021 r.][16]
  * [Funkcje eksploracji menedżera menedżera HospitalRun][17]
  * [Top 5 Open Source Patient Record Software][18]
  * [Zawiera eksplorację rozwiązania medycznego OpenEMR][19]
  * [Jak skonfigurować EHealth System HospitalRun na LocalHost][20]
  * [Jak online oprogramowanie opieki zdrowotnej upoważnia branżę opieki zdrowotnej][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/pl/how-to-install-hospitalrun-hospital-management-system/
