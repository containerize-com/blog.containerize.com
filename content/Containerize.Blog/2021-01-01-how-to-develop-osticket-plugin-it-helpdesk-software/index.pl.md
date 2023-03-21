---
title: "Jak opracować wtyczkę Osticket | Oprogramowanie HelpDesk" 
seoTitle: "Jak opracować wtyczkę Osticket | Oprogramowanie HelpDesk" 
description: "Postępuj zgodnie z tym samouczkiem, aby dowiedzieć się, jak opracować wtyczkę Osticket. To oprogramowanie HelpDesk zarządza komunikacją z klientami i automatyzuje rozdzielczość problemów." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Utwórz wtyczkę Osticket, aby dodać funkcje do instalacji Osticket. Ten system biletów na otwartym poziomie pomaga firmom w wydajnym obsłudze klientów." 
url: /pl/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Utwórz wtyczkę Osticket, aby dodać funkcje do instalacji Osticket. Ten system biletów na otwartym poziomie pomaga firmom w wydajnym obsłudze klientów.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="Oprogramowanie HelpDesk">}}


## Przegląd
Witamy w innym interesującym poście na blogu z serii [HelpDesk Ticketing Software][1]. Opublikowaliśmy kilka postów na blogu na takie tematy, jak [popularny bezpłatny system pomocy technicznej i systemu obsługi klienta][2], [Automatyzacja systemu biletów za pomocą WordPress i Osticket][3] i jeszcze więcej. Jednak Osticket jest opartym na oparciu o open source biletowy system HelpDesk przeznaczony dla klientów do zgłaszania zapytania i skarg dla personelu. Ten bezpłatny system wsparcia zapewnia łatwy w użyciu moduł zarządzania zapytań, który przekształca zapytania pochodzące z telefonu, e-maila i formularzy w bilety internetowe. Oferuje szeroką gamę funkcji i opcji, które umożliwiają personelowi wsparcia zapewnianie niesamowitych wrażeń z obsługi klienta dla klientów.
Ten system biletów typu open source (Osticket) to całkowicie elastyczne ramy biletów wsparcia, który oferuje wiele opcji, które pomogą dostosować wszystkie części obsługi klienta, takie jak wiadomości wysyłane do klientów, stron i powiadomień. W jego artykule nauczymy się opracowywania wtyczek Osticket, aby zwiększyć funkcjonalność zgodnie z naszymi potrzebami. Aby to zrobić, omówimy następujące tematy:
  * [Po co używać wtyczek?][4]
  * [Wymagania][5]
  * [Jak opracować wtyczkę Osticket?][6]
  * [Wniosek][7]

## Dlaczego używać wtyczek?   {#Dlaczego}
W tym temacie dowiemy się, jak utworzyć prostą wtyczkę, aby rozszerzyć podstawową funkcjonalność tego  **IT HelpDesk Software**  (Osticket). Wtyczka to oprogramowanie, które rozszerza podstawową funkcjonalność dowolnej aplikacji/oprogramowania. Ponadto istnieje wiele oprogramowania open source na poziomie przedsiębiorstw, które ma ogromny stos wtyczek, które rozszerzają funkcje. Ponadto te popularne oprogramowanie open source obejmują WordPress, Joomla i wiele innych. Przede wszystkim żywe i żywe społeczności obsługują i rozwijają wtyczki zgodnie z potrzebami. Jednak ramy oferują kompleksową dokumentację dotyczącą rozwoju wtyczek. Poniżej znajdują się powody, dla których aplikacje obsługują wtyczki:
  * Pozwala twórcom stron trzecich tworzyć komponenty oprogramowania, które rozszerzają funkcjonalność aplikacji.
  * Wtyczki pozwalają łatwo zintegrować nowe funkcje.
  * Nie zwiększa również wielkości i złożoności aplikacji.
  * Oprócz programistów mogą przechowywać i zarządzać kodem wtyczek osobno od podstawowej aplikacji.

## wymagania   {#Requirements}
W niniejszej sekcji przewodnika  **IT HelpDesk**  opisuje wymagania potrzebne do opracowania wtyczki Osticket.
  * Wersja PHP 5.6 lub nowsza
  * Instalacja Osticket
  * Podstawowa wiedza PHP

## Jak opracować wtyczkę Osticket?   {#Jak}
W tej sekcji przejdziemy przez etapy rozwoju wtyczki tego systemu biletów typu open source (Osticket).
  * Utwórz folder wtyczki w katalogu /wtyk /wtyczki. W tym samouczku utworzymy wtyczkę demo, która integruje  **Osticket System**  z Redmine.
  * Powinien mieć następujące niezbędne pliki: plugin.php i config.php.
  * Plik plugin.php zawiera ogólny opis wtyczki. Użyj następującego przykładowego kodu w pliku Plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Następnie wymień identyfikator, nazwę, nazwę autora i nazwy klas wtyczki z powyższego kodu.
  * Następnie musimy wyświetlić opcje konfiguracji wtyczki na backend Osticket. Dodaj następujący przykładowy kod do pliku config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * W rezultacie utworzy to pola nazwy użytkownika i hasła na stronie konfiguracji, jak pokazano tutaj:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Przewodnik dla początkujących o opracowaniu wtyczki Osticket">}}

  * Poniżej znajduje się lista dostępnych pól klasowych, są one zdefiniowane w `[install_root]/cluscled/class.forms.php`:
      * Pole tekstowe - pole tekstowe
      * TextaraeField - obszar tekstu
      * ThreadEntryfield - Rich Tekst obszar, używany do wątków dyskusyjnych
      * DateTimefield - JQuery DatePicker
      * Phonefield - pole tekstowe zoptymalizowane pod kątem numerów telefonów
      * Booleanfield - pole wyboru
      * Choicefield-rozwijane pole wyboru
      * Sectionbreakfield - pozioma przerwa w sekcji
  * Następnie musimy utworzyć plik, w którym zostanie zdefiniowana funkcjonalność wtyczki.
  * Nazwa pliku powinna być taka sama, jak zdefiniowana w pliku Plugin.php. tj. Redmine.php.
  * To musi utrzymywać klasę dynabicredminplugin. Sprawdź następujący przykładowy kod:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Ten kod przyniósł wartości konfiguracji i możesz użyć tych wartości w swoich funkcjach. W tym pliku możesz dodać funkcjonalność wtyczki jako swoje wymagania.

## Wniosek   {#Conclusion}
To prowadzi nas do końca tego postu na blogu. Osticket to oprogramowanie do zarządzania biletami, które oferuje strukturę wtyczek dla programistów, aby mogli dodawać nowe funkcje zgodnie z wymaganiami. Wtyczki to komponenty, które rozszerzają podstawową funkcjonalność dowolnej aplikacji/oprogramowania. W jego artykule omówiliśmy opracowanie wtyczek tego **systemu obsługi klienta  **(Osticket), który pomaga programistom dodawać niestandardowe funkcje i ulepszenia zgodnie z ich wymaganiami. Dlatego ten post na blogu naprawdę pomoże ci, jeśli chcesz wdrożyć oprogramowanie Heldesk **  IT  **dla Twojej firmy. Ponadto istnieją inne**   oprogramowanie do biletowania Heldesk** i artykuły wymienione w sekcji „Explore” poniżej.
Wreszcie [Containerize.com][8] ciągle pisze posty na blogu na temat dalszych produktów i tematów open source. Dlatego prosimy o kontakt z kategorią [oprogramowanie do biletowania Heldesk][1] w celu regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][9], [LinkedIn][10] i [Twitter][11].

## Badać
Możesz znaleźć istotne następujące linki:
  * [UVDesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Helpy][15]
  * [Najlepsze oprogramowanie open source i bezpłatne IT Help Desk][16]
  * [Popularny bezpłatny system pomocy technicznej i systemu obsługi klienta][2]
  * [Jak skonfigurować oprogramowanie do pomocy internetowej za pomocą Osticket][17]
  * [Jak wdrożyć wielozadaniowość w Osticket][18]
  * [Zautomatyzuj system biletów za pomocą WordPress i Osticket][3]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][19]

  
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
