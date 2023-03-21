---
title: "Integracja Civicrm WordPress | Samouczek WordPress" 
seoTitle: "Integracja Civicrm WordPress | Samouczek WordPress" 
description: "Integracja Civicrm WordPress pozwala kontrolować zarządzanie danymi i przepływami pracy. Najlepszy przewodnik o efektywnym wykorzystaniu CivicRM z otwartym poziomem z WordPress." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "W tym samouczku wtyczki WordPress dowiemy się, jak zintegrować bezpłatny CivicRM z WordPress, aby uzyskać korzyści konkurencyjne pod względem zarządzania kontaktem." 
url: /pl/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## W tym samouczku wtyczki WordPress dowiemy się, jak zintegrować bezpłatny CivicRM z WordPress, aby uzyskać korzyści konkurencyjne pod względem zarządzania kontaktem.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="Civicrm WordPress">}}


## Przegląd:
Witamy w tym artykule samouczkowym, który dotyczy**Civicrm WordPress Integracja**. Faktem jest, że żyjemy w dobie informacji i danych. Niektóre rzeczy dają charakterystyczne funkcje Twojej firmie, takie jak automatyzacja gromadzenia danych, spójna komunikacja, kampanie marketingowe i inne przepływy pracy biznesowej. W tym współczesnym wieku ilość danych rośnie z dnia na dzień. Organizacje otrzymują te dane z różnych źródeł danych. W rezultacie trudno jest zarządzać i skompilować tak ogromną ilość danych. Jednak bardzo ważne jest, aby upewnić się, że integralność danych i autentyczność są podstawą skutecznej kampanii marketingowej. Ponadto występowanie danych w wielu miejscach rodzi kłopoty i niewłaściwe zarządzanie, a zespoły operacyjne mają trudności z wejściem na tę samą stronę i pracą w jednolitym kierunku.
Z drugiej strony istnieje kilka systemów zarządzania treścią, które zyskały potężne wsparcie społeczności użytkowników i programistów z powodu solidnego zarządzania treścią i systemów ECHO przyjaznych dla SEO. Te systemy zarządzania treścią typu open source oferują łatwe i szybkie osiągnięcia i wdrożenia w celu osiągnięcia celów związanych z treścią. Oferuje opłacalność, rozszerzalną funkcjonalność i możliwości samowystarczające. Ten**WordPress Wtyczek**dotyczy integracji [Civicrm][2] z [WordPress][3] i omówimy następujące punkty pocisków
  * [Korzyści z tej kombinacji dla biznesu?][4]
  * [Jak skonfigurować strukturę katalogu?][5]
  * [Jak aktywować i zainstalować CivicRM w WordPress?][6]

## Korzyści z tej kombinacji dla biznesu?   {#korzyści}
W sekcji tego**WordPress**przyjrzymy się podstawowym korzyściom**CIVICRM WordPress**Integracja. Popularność [WordPress][3] rośnie wraz ze wzrostem konkurencji na rynku. Społeczność WordPress opracowuje nowe wtyczki, aby ulepszyć wiadro wtyczki. Dlatego dodanie CivicRM do puli WordPress wtyczki zyskało ogromną uwagę organizacji, które rozwijają się w celu zautomatyzowania i scentralizowania przepływów pracy.
Ta integracja jest ważna ze względu na niektóre aspekty. Po pierwsze, [CivicRM][2] usuwa kłopot z zarządzaniem źródłami kontaktowymi użytkownika zamieszkałych w różnych miejscach. Po drugie, zapewnia pełne bezpieczeństwo, biorąc regularne kopie zapasowe danych. Po trzecie, jest on internetowy i open source, co oznacza, że ​​możesz uzyskać dostęp do swoich danych z dowolnego miejsca. To narzędzie automatyzacji marketingu open source zostało opracowane dla sektora obywatelskiego. Usunęło to potrzebę eksportowania danych do różnych arkuszy i baz danych poprzez zapewnienie kompleksowego rozwiązania. To oprogramowanie CRM typu open source przechowuje wszystkie dane w bazie danych pochodzących z różnych źródeł, takich jak biuletyny, strony zarządzania wydarzeniami, zarządzanie wkładem, zarządzanie sprawami itp. Te oprogramowanie do zarządzania relacjami typu open source są łatwe do skonfigurowania i dostarczania wielu funkcji, takich jak funkcje, takie jak Nieograniczone niestandardowe zestawy danych, zarządzanie zadaniami, zarządzanie użytkownikami, śledzenie otwartych obietnic i członkostwa oraz wiele innych.

## Jak skonfigurować strukturę katalogu?   {#informator}
Przed rozpoczęciem tego**WordPress Wtyczka**zakładamy, że skonfigurowałeś WordPress i masz podstawowe zrozumienie instalacji i aktywowania wtyczek. Ponadto możesz znaleźć informacje [tutaj][7] na temat konfigurowania WordPress i jego funkcji.
Najpierw pobierz CivicRM z tej [witryny][8]. Wybierz opcję o nazwie „Pobierz Civicrmx.x.x dla WordPress”.
Po pobraniu umieść plik ZIP w tej lokalizacji /WP-Content /wtyczkach i wyodrębnij go. Upewnij się, że ten katalog ma dostęp „zapisz”.
Możesz użyć tego polecenia, aby zapewnić pozwolenie na dostęp „zapisz”. `sudo chmod 777 Server_Path/WP-Content/Plugins/Civicrm`
Po drugie, utwórz pusty folder o nazwie „Civicrm” w tej lokalizacji /WP-Content /przesyła i podaj dostęp „zapisz” za pomocą następującego polecenia.
`sudo chmod 777 Server_Path/WP-Content/uploads/Civicrm`
* * Uwaga**: Nie zapomnij zmienić tych katalogów z powrotem na domyślne. Możesz uruchomić następujące polecenia, aby przywrócić domyślny status tych katalogów:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r nazwa użytkownika server_path/WP -content/uploads/CivicrmSudo chown -r nazwa użytkownika server_path/WP -Content/Plugins/Civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
Niniejsza sekcja integracji WordPress Civicrm została zakończona. Przejdźmy do następnej sekcji.

## Jak aktywować i zainstalować CivicRM w WordPress?   {#zainstalować}
W tej sekcji samouczka WordPress pokazuje etapy instalacji i aktywacji**internetowego narzędzia marketingowego**Civicrm. Po skonfigurowaniu struktury katalogu przejdź do**wtyczek**->**Zainstalowane wtyczki**, a zobaczysz CivicRM na liście.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="Civicrm WordPress">}}

Hit „**Aktywuj**”.

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Przewodnik automatyzacji marketingu">}}

Po aktywacji CivicRM znajdziesz opcję CivicRM w prawym górnym rogu strony WP-Admin. Po prostu naciśnij tę opcję, a wylądujesz na ekranie**instalacji**.
Poniższa strona zostanie wyświetlona z szczegółami wymagań wraz z konfiguracją bazy danych.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Przewodnik automatyzacji marketingu">}}

Naciśnij przycisk „Sprawdź wymagania i zainstaluj CivicRM”. CivicRM zostanie pomyślnie zainstalowany, a komunikat o sukcesie pojawi się, jeśli powyższe instrukcje zostaną poprawnie przestrzegane.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Integracja Civicrm WordPress">}}

Wreszcie,**CIVICRM WordPress Integration**Menu pojawi się u góry pulpitu pulpitu administratora.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="Samouczek rozwoju wtyczek WordPress">}}


## Wniosek
* * CIVICRM WordPress Integration**to naprawdę pomocny dodatek, jeśli chodzi o zarządzanie ogromnym przechowywaniem rozproszonych informacji o użytkownikach. Ułatwia to złożone przepływy pracy, oferując intuicyjny pulpit nawigacyjny. Duet tych dwóch oprogramowania open source zapewnia przyjazny interfejs użytkownika wraz z innymi narzędziami, w których użytkownicy mogą łatwo nawigować. Na szczęście społeczność open source opracowała tak wiele narzędzi do automatyzacji marketingu, takich jak [Mauctic][9], [SuiteCrm][10], [Espocrm][11] i wiele innych. Wszystkie te rozwiązania są bezpłatne i łatwe do wdrożenia w chmurze lub na Localhost. Przede wszystkim rozwiązania te zawierają kompleksową dokumentację dotyczącą rozwoju i wdrażania. Jednak ten**WordPress wtyczek**będzie bardzo pomocny, jeśli chcesz zintegrować oprogramowanie do automatyzacji marketingu z oprogramowaniem do zarządzania treścią.
Wreszcie [Containerize.com][12] jest w trakcie pisania dalszych samouczków na temat integracji niektórych innych oprogramowania open source. W przypadku regularnych aktualizacji pozostań w kontakcie z [Automatyzacja marketingu][1] i [blogowanie][13] kategorie.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Przewodnik dla początkujących o waniliowej integracji WordPress][14]
  * [Jak dokeryzować WordPress z Docker Compose][15]
  * [Migracja z WordPress do Jekyll][16]
  * [Jak zbudować swoją stronę internetową za pomocą WordPress i Gatsby][17]
  * [Przewodnik po migracji do Ghost z WordPress][18]
  * [Jak wdrożyć wielozadaniowość w mautic][19]
  * [Jak skonfigurować mautic - integracja na Facebooku][20]
  * [Konfiguruj kampanie mautyczne za pomocą konstruktora kampanii][21]
  * [Integracja Drupal Mautic w celu automatyzacji pielęgnacji ołowiu][22]
  * [WordPress Instant Messaging za pomocą rocket.chat][23]
  * [Jak zintegrować forum dyskursu z WordPress][24]
  * [Zautomatyzuj system biletów za pomocą WordPress i Osticket][25]
  * [Automatyzacja marketingowa z integracją Mautic i WooCommerce][26]
  * [Platforma blogowa typu open source w 2020 r.][27]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][28]

  
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
