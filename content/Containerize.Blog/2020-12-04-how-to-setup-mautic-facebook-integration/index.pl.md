---
title: "Jak skonfigurować mautic - integracja na Facebooku" 
seoTitle: "Jak skonfigurować mautic - integracja na Facebooku" 
description: "MAUTIC - Integracja Facebooka może pomóc zsynchronizować potencjalne potencjalne prowadzenie na Facebooku do systemu mautycznego bez trudności, a następnie wykorzystać je w kampaniach marketingowych." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook prowadzi do mautic, dodaj kontakty do segmentu i prowadzić kampanie e -mailowe. Użyj również tych kontaktów, aby tworzyć niestandardowe odbiorców reklam na Facebooku." 
url: /pl/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook prowadzi do mautic, dodaj kontakty do segmentu i uruchom kampanie e -mailowe. Użyj również tych kontaktów, aby tworzyć niestandardowe odbiorców reklam na Facebooku.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Jak skonfigurować mautic - integracja na Facebooku">}}

Mautic to oprogramowanie do automatyzacji marketingu i zapewnia pełną kontrolę nad e -mailem marketingowym, stronami lądowania i przepływami pracy w zakresie działań marketingowych. Kampanie kroplowe Mautic pomagają zaangażować grupę odbiorców i informować je o swoich produktach. Integracja Mauutic na Facebooku stanowi sposób dodania nowych potencjalnych klientów do Mauutic. Dzięki tej mautycznej integracji na Facebooku Lods z Twojej kampanii na Facebooku zostaną automatycznie dodane do Mautyc.
W tym samouczku omówimy następujące sekcje:
  * [Skonfiguruj konto programisty Facebooka][1]
  * [Skonfiguruj aplikację programisty Facebooka][2]
  * [Konfiguracja wtyczek mautic][3]
  * [Wniosek][4]

## Skonfiguruj konto programisty Facebooka   {#Account}
  * Przejdź do [Facebook dla programistów][5]
  * Zarejestruj swoje konto, jeśli go nie masz.
  * Aby zarejestrować nowe konto, przejdź i kliknij „Zacznij” z prawego górnego rogu.
  * Następnie wybierz swoje konto na Facebooku i naciśnij „Kontynuuj”.
  * Następnie z okna wyskakującego kliknij przycisk „Deweloper”.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="MAUTIC - Integracja Facebooka - rejestracja konta programistów">}}


## Skonfiguruj aplikację programisty Facebooka   {#App}
  * Kliknij „Utwórz pierwszą aplikację”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="MAUTIC - Integracja na Facebooku - Utwórz pierwszą aplikację">}}

  * Kliknij „Zarządzaj integracjami biznesowymi” i uderz „Kontynuuj”.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - integracja na Facebooku - Wybierz cel">}}

  * W następnym oknie wprowadź nazwę aplikacji i wybierz cel aplikacji. Kliknij przycisk „Utwórz aplikację”.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="MAUTIC - Integracja Facebooka - wypełnij formularz, aby utworzyć aplikację">}}

  * Następnym krokiem jest skonfigurowanie logowania na Facebooku. Na stronie produktów kliknij przycisk „Skonfiguruj” w polu „Login na Facebooku”.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="MAUTIC - Integracja na Facebooku - Logowanie FB FB">}}

  * Z lewego menu kliknij „Ustawienia” pod produktami -> Logowanie na Facebooku.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="MAUTIC - Integracja Facebooka - skonfiguruj login FB">}}

  * Wprowadź swój adres URL witryny mautic. Ustaw „Login OAuth” i „Web OAuth Login” na „Tak”.
  * Teraz przejdź do ustawień -> Ustawienia podstawowe. Z dołu strony kliknij przycisk „+ Dodaj platformę”. Następnie otworzy się okno wyskakujące. Wprowadź adres URL swojej witryny i zapisz zmiany.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - integracja na Facebooku - Dodaj stronę internetową jako platformę">}}


## MAUTIC CONDIN CONFIGURACJA   {#Configuration}
  * Idź do Mautic Pulpitboard.
  * Następnie przejdź do „Ustawienia” z prawego górnego rogu.
  * Kliknij „Wtyczki”.
  * Następnie otwórz ustawienia wtyczek „Facebook”.
  * Następnie wprowadź identyfikator klienta i sekret klienta. Uzyskaj te klucze z aplikacji Facebook Developers, którą właśnie utworzyłeś następujące powyższe kroki.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="MAUTIC - Integracja na Facebooku - Skonfiguruj wtyczkę FB na Mautyc">}}

  * Naciśnij przycisk „Autoryzuj aplikację”.
  * Następnie otworzy się nowe okno autoryzacji na Facebooku. Postępuj zgodnie z monitami do wypełnienia autoryzacji aplikacji.
  * Po pomyślnej autoryzacji przejdź do zakładki „Mapowanie kontaktu” z wtyczki na Facebooku Mautica.
  * Tutaj możesz zmapować swoje pola kontaktowe na pola Facebooka.
  * Na koniec opublikuj ustawienia i możesz iść.

## Wniosek   {#Conclusion}
MAUTIC - Integracja na Facebooku może pomóc zsynchronizować Twoje kierunki Facebooka w system mautic bez trudności. W aplikacji Maucing możesz dodać wszystkie te przewody do segmentu. Możesz prowadzić na nich kampanie e -mail marketingowe. Może to naprawdę pomóc Twojej firmie w rozwoju, sprzedaży i sprzedaży produktów/usług dla znacznie większych docelowych odbiorców.

## Badać
Aby dowiedzieć się więcej o Mautic i Facebooku, odwiedź:
  * [Mautic | Platforma technologii content marketingu open source][6]
  * [Jak skonfigurować kampanie mauticowe za pomocą konstruktora kampanii][7]
  * [Integracja Drupal Mautic w celu automatyzacji pielęgnacji ołowiu][8]
  * [Automatyzacja marketingowa z integracją Mautic i WooCommerce][9]
  * [Zintegruj Mautic i Joomla do automatyzacji marketingu cyfrowego][10]

  
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
