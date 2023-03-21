---
title: "Jak wdrożyć wielozadaniowość w języku mautycznym" 
seoTitle: "Jak wdrożyć wielozadaniowość w języku mautycznym" 
description: "Mautic to rozwiązanie automatyzacji marketingu open source. Wdrożenie wielozadaniowości w mautic zmniejsza koszty, poprawia wydajność i bezpieczeństwo." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Zaoszczędź koszty i zmaksymalizuj wykorzystanie zasobów, wdrażając wielokrotność w Mautic. Wielokrotność pomaga w dostosowaniu kodu, aktualizacji aplikacji, lepszej wydajności i łatwej konserwacji." 
url: /pl/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Zachowaj koszty i zmaksymalizuj wykorzystanie zasobów, wdrażając wielozadaniowość w Maucce. Wielokrotność pomaga w dostosowaniu kodu, aktualizacji aplikacji, lepszej wydajności i łatwej konserwacji.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Jak wdrożyć wielozadaniowość w języku mautycznym">}}

Mautic to bezpłatne i open source marketingowe rozwiązanie automatyzacji, które zapewnia pełną kontrolę nad e -mailem marketingowym, stronami do lądowania, przepływami pracy i środkami działań marketingowych. W tym samouczku omówimy następujące sekcje:
  * [Co to jest wielozadaniowość][1]
  * [Co to jest mautic][2]
  * [Wdrożenie wielozadaniowości w mautic][3]
  * [Wniosek][4]

## Czym jest wielopoziomowy   {#Multi-Denancy}
W architekturze oprogramowania wielozadaniowego pojedyncza instancja aplikacji obsługuje wielu najemców. Każde dane najemcy są odizolowane od innych najemców udostępniających tę samą instancję aplikacji. Ci najemcy są logicznie izolowani, ale fizycznie zintegrowani. Zapewnia to bezpieczeństwo danych i prywatność wszystkim najemcom. Tworzenie wielu najemców z pojedynczej instancji aplikacji wymaga znacznie mniej pamięci. Najemcy dzielą zasoby i obniżają koszty konserwacji oprogramowania, infrastruktury i operacji centrum danych. Koszty są zwykle niższe niż koszty infrastruktury jednolitej.

## Czym jest mautic   {#mautic}
[Mautic][5] to oprogramowanie marketingowe bezpłatne i open source. Zautomatyzuj powtarzające się zadania marketingowe, takie jak kampanie marketingowe, generowanie potencjalnych klientów, segmentacja kontaktów itp. Korzystanie z mautic. Ma zaskakujące funkcje, w tym generowanie potencjalnych klientów, budowanie kampanii, segmentację kontaktów, konstruktor e -maili, testy A/B, budownicza stron, pielęgnowanie ołowiu i wiele innych. Mautic wspiera również integrację ze wszystkimi popularnymi platformami społecznościowymi, np. Facebook, Twitter, LinkedIn. Wszystkie te niesamowite funkcje pomagają zwiększyć ogólną obsługę klienta i poprawić automatyzację marketingu Twojej firmy.

## Wdrożyć wielokrotność w mautic   {#Implement}
  * Utwórz nową pustą bazę danych o nazwie „main_db”.
  * Następnie utwórz tabelę o nazwie „Najemca”, który będzie zawierał szczegóły dotyczące wszystkich najemców.
  * Będzie miał 3 pola, w tym witryna \ _name, URL i db \ _name, jak pokazano na rysunku

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Jak wdrożyć wielozadaniowość w języku mautycznym">}}

  * Następnie otwórz plik mautic/app/paths.php i dodaj ten kod:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * To wybierze odpowiedni plik konfiguracyjny na podstawie ścieżki URL.
  * Następnie skopiuj bazę danych bieżącej instalacji mautycznej i użyj jej dla nowego najemcy.
  * Następnie utwórz kopię mautic/app/config/local.php i zmień nazwę na [Site_name] .php.
  * Wreszcie zaktualizuj nazwę bazy danych, host, hasło i użytkownik zgodnie z nową bazą danych.

## Wniosek   {#Conclusion}
Mautic to bezpłatne, bogate i zorientowane na jakość rozwiązanie automatyzacji marketingu. Pozwala tworzyć kampanie marketingowe, segmenty, formularze, raporty i wiele więcej. Wdrożenie wielozadaniowości w mautic zmniejsza koszty, poprawia wydajność, skalowalność i bezpieczeństwo. Z łatwością stwórz setki najemców tylko z jednej instalacji.

## Badać
Aby dowiedzieć się więcej o Mautic i Facebooku, odwiedź:
  * [Mautic | Platforma technologii content marketingu open source][5]
  * [Jak skonfigurować kampanie mauticowe za pomocą konstruktora kampanii][6]
  * [Integracja Drupal Mautic w celu automatyzacji pielęgnacji ołowiu][7]
  * [Automatyzacja marketingowa z integracją Mautic i WooCommerce][8]
  * [Zintegruj Mautic i Joomla do automatyzacji marketingu cyfrowego][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
