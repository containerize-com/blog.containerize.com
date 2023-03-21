---
title: "Zintegruj Mautic i Joomla do automatyzacji marketingu cyfrowego " 
seoTitle: "Zintegruj Mautic i Joomla do automatyzacji marketingu cyfrowego" 
description: "Integracja mautic i Joomla może pomóc Twojej firmie z automatyzacją marketingu cyfrowego. Pomaga sprzedawać produkty za pomocą kampanii mautowych." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Integracja mautic i Joomla może pomóc Twojej firmie z automatyzacją marketingu cyfrowego. Pomaga sprzedawać produkty za pośrednictwem internetowych kampanii mautowych." 
url: /pl/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Integracja Mauutic i Joomla może pomóc Twojej firmie w automatyzacji marketingu cyfrowego. Pomaga sprzedawać produkty za pośrednictwem internetowych kampanii mautowych.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Integracja mautyczna i Joomla">}}


## Jak ta integracja może pomóc Twojej firmie:
Integracja mautic i joomla umożliwia sprzedawanie produktów/usług w bardzo łatwy, ale wydajny sposób. Mautic bezpłatne rozwiązanie marketingowe open source daje doskonałą kontrolę nad kampaniami marketingowymi i jest bardzo łatwe do kontynuowania kampanii kroplowej zgodnie z sytuacją. Na przykład: podaje informacje, że jeśli klient przeczytał wiadomość e -mail lub odwiedził strony produktów. Korzystając z tych informacji, możesz skonfigurować kampanie, aby zdecydować, czy nadal wysyłać kolejne wiadomości e -mail dla tego klienta, czy nie. Ta integracja pomoże w automatyzacji marketingu cyfrowego. Ten post na blogu poprowadzi Cię z następującymi sekcjami:
  * [Przegląd][1]
  * [Instalacja wtyczki Joomla][2]
  * [Konfiguracja mautyczna][3]
  * [Wniosek][4]

## Przegląd:   {#overview}
Mautic to open source marketingowy system automatyzacji. To bezpłatne oprogramowanie marketingowe. Możesz go użyć do tworzenia nieograniczonych kampanii, aby wysyłać e -maile marketingowe do ukierunkowanych klientów.
Joomla jest również bezpłatnym systemem zarządzania treścią open source do opracowywania stron internetowych. Bardzo łatwo jest skonfigurować witryny biznesowe na Joomla. Ma tysiące rozszerzeń, które można wykorzystać zgodnie z Twoimi wymaganiami.

## joomla wtyczka instalacja:   {#plugin}
  * Pobierz [wtyczkę][5].
  * Następnie przejdź do rozszerzeń -> Zarządzaj -> Zainstaluj.
  * Wprowadź adres URL mautic.
  * Włoży 1 PX GIF obraz załadowany z instancji mautic.
  * Osadza formularze w treści Joomla za pomocą następującego kodu fragmentu: {mautic type = ”form” id}
  * Następnie możesz utworzyć formularz w swojej aplikacji Maucing i uzyskać identyfikator z adresu URL.
  * Dynamiczna zawartość można również dodać za pomocą następującego kodu snippt: {mautic type = ”content” slot = ”nazwa_nazwa”} Treść domyślna tutaj. {/Mautic}
  * Nazwa slot jest identyfikatorem slotu określonego podczas dodawania decyzji „Dynamic Treść żądania” do kampanii.
Po instalacji musisz utworzyć i osadzić formularze na swojej stronie Joomla. Te formularze wysyłają informacje o kontaktach do Mautic. Po zakończeniu konfiguracji wtyczki na Joomla następnym krokiem będzie skonfigurowanie jej na Mauutic.

## Mauutic Configuration:   {#mautic}
  * Przejdź do swojej witryny mautycznej, przejdź do ustawień.
  * Kliknij konfigurację.
  * Z ustawień API włącz API.
  * Aby połączyć się z JOOMLA, musisz mieć certyfikat SSL na swoich stronach.
  * Następnie musisz przejść do poświadczeń API.
* Jeśli Twoja witryna nie ma SSL (więc przejdź do**http**: //yourjoomLasite.com), wybierz OAuth1. Jeśli masz SSL na swojej stronie (więc przejdź do**https**: //yourjoomLasite.com), wybierz OAuth2.
  * Kliknij nowe, podaj nazwę (może być wszystkim, co chcesz) i pełny adres URL swojej Joomli! strona ([https://yourjoomlasite.com][6])
  * Kliknij Zapisz i zamknij.
  * Tutaj możesz dostać klucze publiczne i prywatne.
  * Przejdź do witryny Joomla i znajdź mautic wtyczkę zainstalowaną wcześniej.
  * Wprowadź klucze publiczne i tajne, które utworzyłeś z swojej witryny mautycznej.
  * Wybierz OAuth1 lub OAuth2 (taki sam, jak wybrany w Mauutic) i ustaw zarejestrowanych użytkowników na tak.
  * Zapisz i opublikuj wtyczkę.
  * Potem będziesz mógł zezwolić na swoją stronę Joomla.
  * Joomla ponownie dostosuje się do instancji Maucing do autoryzacji.
  * Kliknij „Autoryzuj” i to wszystko.
  * Zaczniesz otrzymywać kontakty na swojej witrynie mautic.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Integracja mautyczna i Joomla">}}


## Wniosek:   {#Conclusion}
W tym artykule omówiliśmy, w jaki sposób Mauutic i Joomla razem mogą pomóc w automatyzacji marketingu cyfrowego. To bezpłatne rozwiązanie marketingowe open source pozwoli grupować wszystkie kontakty pochodzące z witryny Joomla i tworzyć ich kampanie marketingowe. Mautic pozwala tworzyć segmenty, abyś mógł prowadzić różne kampanie w różnych segmentach zgodnie z Twoimi potrzebami. Sprawdź blogi [Joomla][7] i [mautic][8], aby uzyskać szczegółowy przegląd.

## Badać:
Możesz znaleźć istotne następujące linki:
  * [Joomla][7]
  * [Mautic][8]
  * [Jak skonfigurować mautic - integracja na Facebooku][9]
  * [Integracja Drupal Mautic w celu automatyzacji pielęgnacji ołowiu][10]
  * [Automatyzacja marketingowa za pomocą mautic i WordPress WooCommerce][11]
  * [Jak skonfigurować kampanie marketingowe w Mautic][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
