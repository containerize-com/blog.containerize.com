---
title: "Jak skonfigurować kampanie mautowe za pomocą konstruktora kampanii" 
seoTitle: "Jak skonfigurować kampanie mautowe za pomocą konstruktora kampanii" 
description: "Krok według przewodnika konfiguracyjnego w celu konfiguracji kampanii w Maucing i uzyskania pełnej kontroli nad e -mailami marketingowymi, stronami docelowymi i przepływami pracy w zakresie działań marketingowych." 
date: Fri, 27 Nov 2020 09:46:58 +0000
author: bilalahmed
summary: "Łatwo tworzyć kampanie za pomocą Maucing Campaign Builder. Angażuj docelowych odbiorców, informuj ich o swoich produktach i przekonwertuj je na swoich klientów." 
url: /pl/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
categories: ['Marketing Automation']
---

## Łatwo tworzyć kampanie za pomocą Maucing Campaign Builder. Angażuj docelowych odbiorców, informuj ich o swoich produktach i przekonwertuj je na swoich klientów.

{{< figure align=center src="images/mautic.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

W tym artykule dowiemy się, jak konfigurować kampanie w Mautic. Obejmiemy następujące sekcje:
  * [Co to jest mautic?][1]
  * [Jak tworzyć formy w mautic?][2]
  * [Jak tworzyć kampanie w mautic?][3]
  * [Wniosek][4]

## Co to jest mautyczne?   {#mautic}
Mautic to oprogramowanie do automatyzacji marketingu open source. Zapewnia pełną kontrolę nad e -mailem marketingowym, stronami docelowymi i przepływami pracy w zakresie działań marketingowych. Automatyzuje drogę do tworzenia potencjalnych klientów ze stron do lądowania, form i przekształcania ich w potencjalnych klientów. Wszystko to można osiągnąć, tworząc kampanie Smart Drip, które będą aktualizować potencjalnych klientów w odniesieniu do produktów/usług.

## Jak tworzyć formularze w języku mautic?   {#Forms}
  * Zaloguj się do instalacji MAuitc.
  * Przejdź do zakładki „Komponenty” i kliknij „Formularze”.
  * Uderz „nowy” z prawego górnego rogu.
  * Wybierz opcję „Nowy formularz kampanii”. Otworzy stronę konfiguracji formularza, jak pokazano na tym zrzucie ekranu.

{{< figure align=center src="images/Mautic-Campaign-Create-Form-1024x424.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Wprowadź nazwę formularza pod zakładką „Szczegóły”. Inne pola są opcjonalne.
  * Przejdź do następnej zakładki „Pola”.
  * Tutaj możesz tworzyć pola danych, które chcesz wprowadzić odwiedzających.
  * Utwórz pole, jak pokazano tutaj:

{{< figure align=center src="images/Mautic-Campaign-Forms-Form-fields-1024x525.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Wybierz Typ pola i wprowadź nazwę pola.
  * Po tym kliknij „Dodaj” i naciśnij „Zapisz i zamknij”.
  * To łatwe do tworzenia form w języku mautycznym.

## Jak tworzyć kampanie w języku mautic?   {#Campaigns}
  * Idź do kampanii. Kliknij „Nowy” od prawej górnej części.
  * Wprowadź nazwę i ustaw „opublikowany” na „Tak”.

{{< figure align=center src="images/Create-new-campaign-1024x437.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Następnie kliknij „Uruchom konstruktor kampanii”.
  * Wybierz „Formularze kampanii” jako źródło i wybierz formularz.

{{< figure align=center src="images/Mautic-Select-campaign-source.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Teraz utwórz i „akcja”, która będzie uruchamiana za każdym razem, gdy użytkownik wypełni formularz, który utworzyliśmy w ostatniej sekcji.

{{< figure align=center src="images/Mautic-Campaign-Choose-action.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Możesz wysłać im e -mail, wybierając zdarzenie „Wyślij e -mail” w następujący sposób:

{{< figure align=center src="images/Send-email-to-user-when-form-is-filled.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}

  * Skonfiguruj wiadomość e -mail, wprowadź nazwę e -maila i utwórz „nowy e -mail”, jeśli jeszcze nie ma. Na koniec kliknij „Dodaj”.

{{< figure align=center src="images/Mautic-Campaign-Configure-follow-up-email.png" alt="Jak skonfigurować mautowe kampanie na marketing cyfrowy">}}


## Wniosek:   {#Conclusion}
Nauczyliśmy się konfigurować kampanie marketingowe kroplowe zgodnie z 3 bardzo prostymi krokami. Obejmują to tworzenie formularza wymaganego jako źródło kampanii, tworzenie kampanii i konfigurowanie wiadomości e -mail. W tym samouczku stworzyliśmy bardzo podstawową kampanię. Możesz jednak tworzyć złożone kampanie, korzystając z Mautic Campaign Builder. Jeśli jesteś nowy w Mautic, sprawdź, jak go zainstalować za pomocą następującego przewodnika:
[Mautyczny przegląd i instalacja][5]

## Badać:
Artykuły te mogą być bardzo pomocne, jeśli chcesz zintegrować mautic z WordPress lub Joomla, a także pomóc w wdrożeniu wielozadaniowości w Mautic.
[Automatyzacja marketingowa za pomocą mautic i WordPress WooCommerce][6]
[Zintegruj Mautic z Joomla w celu automatyzacji marketingu][7]
[Jak wdrożyć wielozadaniowość w mautic][8]

  
[1]: #mautic
[2]: #forms
[3]: #campaigns
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/wp-admin/post.php?post=388&action=edit
[7]: https://blog.containerize.com/wp-admin/post.php?post=233&action=edit
[8]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
