---
title: "Automatyzacja marketingowa z integracją mautic i woocommerce" 
seoTitle: "Automatyzacja marketingowa z integracją mautic i woocommerce" 
description: "Integracja mautic i woocommerce umożliwia wysyłanie danych kontaktowych z witryn WordPress do mautic. Pomaga to sprzedawać produkty za pośrednictwem aplikacji Maucing." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Szczyta się sprzedażą za pomocą mautic i WordPress WooCommerce razem. Zautomatyzuj proces marketingowy, pobierając dane klientów z WordPress do Mautac." 
url: /pl/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## chwalić się sprzedażą za pomocą Mauutic i WordPress WooCommerce razem. Zautomatyzuj proces marketingowy, pobierając dane klientów z WordPress do Mauutic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Automatyzacja marketingowa za pomocą integracji mautic-wookomerce">}}


## Przegląd:
Integracja Mautic-Woocommerce zapewnia łatwy sposób na uzyskanie wszystkich kontaktów w aplikacji Maucing. Następnie korzystając z tych kontaktów, możesz tworzyć kampanie marketingowe zgodnie z Twoimi wymaganiami. Mautic to świetne narzędzie marketingowe, które zapewnia pełną kontrolę nad kampaniami marketingowymi.
Mautic to rozwiązanie do automatyzacji open source i bezpłatnej marketingu. Służy do tworzenia kampanii marketingowych, segmentów, formularzy, raportów i wielu innych.
WooCommerce to wtyczka e-commerce typu open source dla WordPress. W tym momencie jest to najczęściej używane rozwiązanie e-commerce na całym świecie. Istnieją setki dodatków do WooCommerce, które można wykorzystać zgodnie z Twoimi potrzebami.
Dostępna jest wtyczka dla mautic i WordPress, która zapewnia rozwiązanie automatyzacji marketingu. Postępuj zgodnie z tymi krokami, aby zintegrować WooCommerce z Mautic za pomocą wtyczki [integracja z Mautic dla WooCommerce - automatyzacja marketingu open source.][1]
Ten blog obejmie następujące sekcje:
  * [Konfiguracja wtyczki WordPress][2]
  * [Konfiguracja mautyczna][3]
  * [Final Myśli][4]

## Konfiguracja wtyczek WordPress {#wordpress}

  1. Przejdź do wtyczek.
  2. Kliknij „Dodaj nowy”.
  3. Wyszukaj „  **Integracja z mautic dla WooCommerce**  ”.
  4. Po znalezieniu wtyczki kliknij „Zainstaluj teraz”.
  5. Po instalacji kliknij „Aktywuj”.
  6. Następnie przejdź do WooCommerce -> Mautic -> Connect Tab.
  7. Wypełnij formularz następującymi danymi:
      * Baza URL.
      * Identyfikator klienta.
      * Secret Id.
  8. Wszystkie te pola pojawią się po skonfigurowaniu w aplikacji Maucing, która została wyjaśniona w następnej sekcji.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Integracja mautyczna i WordPress">}}


## Konfiguracja mautyczna: {#mautic}

  1. Z swojej witryny mautycznej przejdź do ustawień.
  2. Przejdź do konfiguracji.
  3. Włącz API z ustawień interfejsu API.
  4. Przejdź do poświadczeń API.
  5. Kliknij „NOWOŚĆ”, wprowadź dowolną nazwę, którą lubisz i pełny adres URL witryny WordPress, tj. [Http://yourwordpresssite.com/wp-admin/admin.php]=5]
  6. Naciśnij Zapisz i zamknij.
  7. stworzy klucze publiczne i prywatne.
  8. Przejdź do witryny WordPress i znajdź wtyczkę mautic instalowaną wcześniej.
  9. Wprowadź klucze publiczne i tajne, które utworzyłeś z swojej witryny mautycznej.
 10. Wybierz OAuth1 lub OAuth2 (tak samo, jak wybrano w Mauutic) i ustaw zarejestrowanych użytkowników na tak.
 11. Zapisz i opublikuj wtyczkę.
 12. Następnie będziesz mógł autoryzować swoją witrynę WordPress.
 13. WordPress ponownie przekieruje instancję mautyczną do autoryzacji.
 14. Kliknij „Autoryzuj” i to wszystko.
 15. Zaczniesz otrzymywać kontakty na swojej witrynie mautic.

{{< figure align=center src="images/mautic-1024x622.png" alt="Kroki integracji mautycznej i WordPress">}}


## Końcowe przemyślenia: {#final}

Integracja mautic-woocommerce razem może pomóc w osiągnięciu celów marketingowych. Ta integracja jest jednym z najlepszych rozwiązań w zakresie automatyzacji marketingu e -commerce. Dzięki WordPress możesz łatwo zdobyć wielu klientów, a następnie z Mautycznym, możesz tworzyć nieograniczone kampanie, aby skierować tych klientów i informować ich o swoich produktach/usługach, co z pewnością szczyci się sprzedażą.

## Badać:
Możesz znaleźć istotne następujące linki:
  * [Wodpress][6]
  * [Mautic][7]
  * [Jak skonfigurować mautic - integracja na Facebooku][8]
  * [Integracja Drupal Mautic w celu automatyzacji pielęgnacji ołowiu][9]
  * [Automatyzacja marketingowa za pomocą mautic i WordPress WooCommerce][10]
  * [Jak skonfigurować kampanie marketingowe w Mauutic][11]



[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/pl/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
