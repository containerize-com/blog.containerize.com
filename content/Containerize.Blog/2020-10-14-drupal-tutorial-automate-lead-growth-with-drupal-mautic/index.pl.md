---
title: "Samouczek Drupal | Zautomatyzuj wzrost ołowiu z Drupal & Mauutic '" 
seoTitle: "Samouczek Drupal | Zautomatyzuj wzrost ołowiu z Drupal & Mauutic" 
description: "Opracuj i śledź swój przepływ pracy automatyzacji marketingu za pomocą integracji Drupal Mautic. Postępuj zgodnie z tym samouczkiem Drupal, aby poznać kroki integracji." 
date: Wed, 14 Oct 2020 11:01:35 +0000
author: muhammadmustafa
summary: "Pozwól Mautycowi przejąć kontrolę nad przepływami automatyzacji marketingu, aby poprawić odpowiedzi konsumentów. Jest bezpłatny, open source i łatwy do zintegrowania z witryną Drupal." 
url: /pl/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
categories: ['Content Management', 'Marketing Automation']
---

## Niech Mauutic przejąć przepływy pracy w zakresie automatyzacji marketingu, aby poprawić odpowiedzi konsumentów. Jest bezpłatny, open source i łatwy do zintegrowania z witryną Drupal.

{{< figure align=center src="images/integrate-mautic-with-drupal-banner-1024x536.png" alt="Samouczek Drupal">}}


## Przegląd:
W obecnym momencie naprawdę ważne jest, aby mieć solidną i skuteczną strategię marketingową. Twoi potencjalni klienci pozostają zaangażowani z powodu czasu, który spędzasz na głębokiej analizie ich zachowań. Na szczęście społeczność Open Source opracowała wiele **bezpłatnych platform automatyzacji marketingu** Oprogramowanie, które w rezultacie poprawiło mobilność i możliwość zastosowania przepływu pracy w zakresie automatyzacji marketingu. Te rozwiązania open source automatyzują powtarzające się zadania, takie jak wysyłanie wiadomości e -mail, śledzenie i kampanie. Oprogramowanie do automatyzacji marketingu pomaga umieścić skuteczną strategię marketingową, aby interesariusze biznesowi mogli skoncentrować się na innych operacjach generujących przychody. Ponadto rewolucja sztucznej inteligencji i uczenia maszynowego miała ogromny wpływ na branżę automatyki. Firmy zwykle gromadzą dane z różnych źródeł. Następnie krytycznie analizują te dane i rozpoczynają kilka procesów ich zainteresowania. Po wprowadzeniu całej automatyzacji menedżerowie mają tendencję do pracy nad działaniami zaangażowania klientów.
Podobnie istnieje wiele narzędzi open source **CMS** do administrowania platformami internetowymi w szerszym zakresie. Większość firm korzysta z systemów zarządzania treścią do zarządzania treścią. Istnieje ogromna pula wtyczek dla tych rozwiązań do zarządzania treścią. Społeczność open source opracowała szereg rozszerzeń, które zwiększają funkcjonalność tych rozwiązań CMS open source. Udowodniono fakt, że firmy wydają wygląd cyfrowy za pomocą bezpłatnego oprogramowania do zarządzania treścią. Przede wszystkim jest to łatwe dla tych, którzy mają niewielką wiedzę na temat budowania stron internetowych. W tym samouczku Drupala przejdziemy przez wpływ integracji [Drupal][2][Mauutic][1], obejmując następujące punkty:
  * [Plusy tej integracji dla biznesu?][3]
  * [Jak skonfigurować strukturę katalogu?][4]
  * [Jak aktywować i włączyć mautic w Drupal?][5]
  * [Wniosek][6]

## Plusy tej integracji dla biznesu? {#useful}

Mautic to bezpłatne, bogate i zorientowane na jakość **oprogramowanie do automatyzacji e-mail marketingu** . To narzędzie automatyzacji oferuje pełną kontrolę nad marketingowymi wiadomościami e -mail i stronami docelowymi. Integracja CMS z Mautic jest potężna, niezawodna i przyjazna dla biznesu kombinacja. Ponadto to oprogramowanie marketingowe open source zapewnia integrację z prawie wszystkimi popularnymi platformami mediów społecznościowych, takich jak Facebook, Twitter i LinkedIn. Jest łatwy do skonfigurowania i jest wyposażony w zdolności do samodzielnego hostowania. To bezpłatne narzędzie ma wiele funkcji, takich jak budowanie kampanii, segmentacja kontaktów, konstruktor e -maili, śledzenie aktywności użytkowników, zatrzymanie klientów i wiele innych. Jednak Drupal to potężny system zarządzania treścią, który oferuje łatwą instalację kilku wtyczek. Pozwala użytkownikom budować proste dla złożonych stron internetowych ze wszystkimi wymaganymi funkcjami. Ponadto istnieje wbudowane bezpieczeństwo, które zapobiegają systemowi przed hakerami i atakującymi. Jest to opłacalne i eliminuje potrzebę zatrudniania starszego programisty internetowego dla firmy.
Jest napisany w PHP i ma kompleksową dokumentację dotyczącą rozwoju i wdrażania. Jednak Drupal ma bardzo ogromną społeczność programistów, która jest żywa i bardzo szybko rozwiązuje każdy problem. Oferuje również kilka widocznych funkcji, które obejmują edycję treści WYSIWYG, moduły, optymalizację prędkości, niezależność serwera internetowego i niezależność bazy danych. Integracja mautyczna i Drupal może dać wiele korzyści, takich jak formularze budowy, kampanie marketingowe i reakcje kompilowania otrzymywane od konsumentów. Jest to jedno z **najlepszych narzędzi do automatyzacji marketingu** , które pozwalają prowadzić ukierunkowane kampanie marketingowe w oparciu o zachowanie i zainteresowanie klienta. To wszystko dzieje się w jednym miejscu z logicznym interfejsem użytkownika. To oprogramowanie typu open source jest wystarczające do śledzenia działań klientów i zainteresowań. W następnej sekcji tego samouczka Drupal dowiemy się, jak założyć strukturę katalogu.

## Jak założyć strukturę katalogu? {#setup}

W tej sekcji samouczka Drupal nauczymy się, jak skonfigurować strukturę katalogów dla tej integracji CMS.
**Założenie** : Znasz podstawy narzędzia CMS (tj. Drupal w tym samouczku) i skonfigurowałeś go na swoim komputerze.
Najpierw pobierz wtyczkę mautic dla Drupal z tego [link][7]. Pobierz pierwszą opcję o nazwie „Mauutic 8.x-1.11”.
Po drugie, wyodrębnij i umieść pobrany folder na tym serwerze lokalizacji \ _path/modules/, a ostatecznie kompletna ścieżka będzie serwerowa \ _path/module/mautic.

## Jak aktywować i włączyć mautic w Drupal? {#enable}

Teraz otwórz deskę rozdzielczą Drupal Admin do przeglądarki, przejdź do zarządzania-> rozszerzyć, a zobaczysz wtyczkę mautic na liście.

{{< figure align=center src="images/Screenshot-2020-10-13-at-13.53.23-1024x577.png" alt="Drupal Mautic">}}

Następnie kliknij rozwijanie, aby wyświetlić kolejne opcje.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.00.26-1024x577.png" alt="Oprogramowanie do automatyzacji e -mail marketingu">}}

Teraz, aby wypełnić tę integrację **CMS** Naciśnij opcję „Konfiguruj”, a zostanie wyświetlone to okno.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.02.28-1024x548.png" alt="Integracja Drupal">}}

Wreszcie, aby włączyć mautic JavaScript, umieść adres URL w polu „Mautic URL” (np. Https://yourmautic.com/mtc.js) i naciśnij przycisk „Zapisz konfigurację” pokazany u dołu. Komunikat o sukcesie pojawi się w udanej konfiguracji. Ta sekcja **samouczka Drupal** kończy się tutaj.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.17.39-1024x419.png" alt="Drupal Mautic">}}


## Wniosek  {#final}

Dzięki nowoczesnemu podejściu do **przepływu pracy w zakresie automatyzacji marketingu** , Drupal Mautyc Integracja zapewnia bezproblemową obsługę klienta dla cyfrowych właściwości organizacji. Jest to idealny wybór, jeśli chodzi o przekształcenie świeżych potencjalnych klientów do ekspertów marketingowych. Ta kombinacja może być opłacalnym i oszczędzającym czas czynnikiem dla Twojej firmy. Mautic jest na tyle rozszerzalny, aby programiści mogli dodać niestandardowy kod, aby osiągnąć pożądaną funkcjonalność. Dane są najcenniejszym zasobem każdej organizacji. Dlatego Mautic może wyodrębnić zestawy danych, aby zapewnić szczegółowe informacje, w których najwyższe kierownictwo może wykonywać analizy. Umożliwia śledzenie kontaktów witryny i można to dość łatwo wykonać, umieszczając kod JavaScript Mautyc. Ponadto możesz znaleźć wiele spersonalizowanych szablonów e -mail wraz z wieloma innymi przepisami, aby zwiększyć współczynnik konwersji.
Ten samouczek Drupal będzie bardzo pomocny, jeśli chcesz zainstalować oprogramowanie do automatyzacji e -mail marketingu w swoim systemie zarządzania treścią. Jednak [Containerize.com][8] kwitnie, aby zwiększyć jego **integrację CMS** Tutorial Bucket, które zawiera wiele innych narzędzi CMS open source i wtyczki przyjazne dla biznesu. Pozostań w kontakcie z kategoriami zarządzania treścią i automatyzacji marketingu, aby uzyskać najnowsze aktualizacje.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Drupal][9]
  * [Mautic][10]
  * [Automatyzacja marketingowa z integracją Mautic i WooCommerce][11]
  * [Jak skonfigurować kampanie mautyczne za pomocą konstruktora kampanii][12]
  * [Jak skonfigurować mautic - integracja na Facebooku][13]
  * [Top 5 darmowych responsywnych szablonów Bootstrap Joomla z 2020 r.][14]
  * [Podręcznik rozwoju szablonów Joomla dla początkujących][15]
  * [Jak utworzyć motyw Joomla z ramami bramek][16]
  * [Top 5 oprogramowania CMS open source dla 2020][17]
  * [Zwiększ swoje leady za pomocą bezpłatnej integracji WordPress Civicrm][18]



[1]: https://products.containerize.com/marketing-automation/mautic
[2]: https://products.containerize.com/content-management/drupal
[3]: #useful
[4]: #setup
[5]: #enable
[6]: #final
[7]: https://www.drupal.org/project/mautic/releases
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/content-management/drupal/
[10]: https://products.containerize.com/marketing-automation/mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[13]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[14]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[15]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[16]: https://blog.containerize.com/content-management/how-to-create-joomla-theme-joomla-gantry-framework/
[17]: https://blog.containerize.com/content-management/top-5-open-source-content-management-systems-for-2020/
[18]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
