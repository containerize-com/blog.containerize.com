---
title: "Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu" 
seoTitle: "Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu" 
description: "OwnCloud to oprogramowanie klientów open source do tworzenia usług hostingowych plików. W tym samouczku dowiemy się, jak instalować i skonfigurować OwnCloud na Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud to open source zbiór oprogramowania klient-serwer do tworzenia serwerów hostingowych plików. Ten samouczek dotyczy tego, jak skonfigurować OwnCloud na Ubuntu." 
url: /pl/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud to open source zbiór oprogramowania klient-serwer do tworzenia serwerów hostingowych plików. Ten samouczek dotyczy tego, jak skonfigurować OwnCloud na Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Przegląd**
OwnCloud jest bezpłatny i popularny solidna aplikacja internetowa przedsiębiorstwa typu open source napisana w PHP, która jest używana do synchronizacji danych i udostępniania plików. Umożliwia także łatwe zarządzanie plikami danych, kontaktami, kalendarzami, do robienia list i wielu innych. Jest to świetna alternatywa dla najpopularniejszych platform chmurowych, takich jak Dysk Google, Dropbox, iCloud i inne usługi przechowywania w chmurze. Ale w przeciwieństwie do innych usług pamięci masowej w chmurze, własny hosted jest bezpłatny do tworzenia własnej chmury hosta.
OwnCloud to oprogramowanie do chmury prywatnej open source, które zapewnia dostęp do danych za pomocą interfejsu internetowego do tworzenia chmury prywatnej. Umożliwia tworzenie własnego serwera udostępniania plików, na którym można łatwo przeglądać i synchronizować zdarzenia kalendarzowe, archiwa, zdjęcia, nagrywania, zadania, książki adresowe z zakładkami, podobne do Dropbox i Google Drive. Zapewnia również opcje synchronizacji i udostępniania danych na wszystkich urządzeniach pod kontrolą. Zainstaluj i skonfiguruj własne, obsługuje Twoje dane synchronizowane dla klientów komputerowych, a także urządzeń aplikacji mobilnych. Ponadto możesz łatwo zaimplementować ograniczenia dostępu użytkowników i grupy na plikach na użytkownika za pomocą OwnCloud na Ubuntu. OwnCloud Open Source Personal Server Storage Server to aplikacja między platformami i może być instalowana we wszystkich popularnych systemach operacyjnych.
Ten samouczek pomoże Ci skonfigurować OwnCloud i skonfigurować OwnCloud w systemach Ubuntu LTS.
  * Zainstaluj serwer lampy
  * Pobierz OwnCloud
  * Utwórz bazę danych i użytkownika MySQL
  * Zainstaluj własne
  * Jakie są najlepsze alternatywy dla OwnCloud?
  * Wniosek

## Krok 1: Zainstaluj serwer LAMP
Aby skonfigurować własny serwer chmurowy i sposób utworzenia prywatnej chmury, najpierw musimy skonfigurować działający serwer lamp. Jeśli już zainstalowałeś i działając stosowanie lampy, pomiń ten krok, a następnie użyj poleceń obserwujących, aby skonfigurować lampę w systemie Ubuntu.

### Zainstaluj php
Możesz zainstalować wersję PHP 5.6 lub wyższą w systemie Ubuntu lub Debian, uruchamiając polecenia:
sudo apt-get instaluj Python-Sofware-Properties
sudo add-apt-repozytory PPA: ondrej/php
Aktualizacja sudo apt-get
sudo apt -get aktualia -y -y
sudo apt-get instaluj -y php php-gd php-curl php-zip php-akt php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Zainstaluj Apache2
Apache to najczęściej używane oprogramowanie serwera internetowego typu open source. Następnie zainstaluj serwer WWW Apache na Ubuntu do konfigurowania własnego serwera w chmurze, uruchamiając:
sudo apt-get install -y Apache2 libapache2-mod-php
{{_LINE_35_}}

### Zainstaluj mysql
MySQL open source relacyjna system zarządzania bazą danych jest składnikiem stosu oprogramowania aplikacji internetowej i innych. Teraz instalowanie MySQL na Ubuntu, działając poniżej:
sudo apt-get instal -y mysql-server php-mysql
{{_LINE_39_}}

## Krok 2: Pobierz OwnCloud na Ubuntu
Po pomyślnej konfiguracji serwera LAMP w systemie Ubuntu, pobierajmy najnowsze rozwiązanie pamięci chmury prywatnej OwnCloud z jej [oficjalnej strony internetowej][1].
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Po zakończeniu oprogramowania do pobrania Serwer OwnCloud, wyodrębnij pobrane archiwum w ramach dokumentu witryny root i skonfiguruj odpowiednie uprawnienia do plików i katalogów, uruchomione w celu instalacji własnego Cloud na Ubuntu.
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data własne
sudo chmod -r 755 OwnCloud
{{_LINE_50_}}
Teraz usuń plik archiwum i uruchom ponownie serwer Apache.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2

## Krok 3: Utwórz bazę danych i użytkownika OwnCloud
Po wyodrębnianiu kodu utwórzmy teraz bazę danych MySQL i konto użytkownika do konfigurowania OwnCloud Personal Cloud Server. Użyj następującego zestawu poleceń, aby zalogować się do MySQL Server, aby utworzyć bazę danych i użytkownika OwnCloud.
mysql -u root -p
Wprowadź hasło:
MySQL> Utwórz bazę danych OwnCloud;
mysql> daj wszystko na OwnCloud.* Do „OwnCloud”@'localHost' identyfikowany przez „_password_”;
mysql> uprawnienia spłukające;
mysql> rezygnuj
{{_LINE_62_}}
Następnie musimy zainstalować OwnCloud na Ubuntu z interfejsu internetowego, aby utworzyć prywatną chmurę.

## Krok 4: Zainstaluj własny CLOUD NA UBUNTU
Teraz uzyskaj dostęp do katalogu panelu Web Best Personal Server Cloud w przeglądarce internetowej. Zmień LocalHost na adres IP serwera lub nazwę domeny.
http: // localhost/własne.
{{_LINE_67_}}
Powinieneś zobaczyć stronę logowania własnego źródła. Wprowadź nowe poświadczenia nazwy użytkownika i hasła administratora, aby utworzyć konto administratora i podać lokalizację folderu danych. Jeśli wszystko jest w porządku, to powinieneś uzyskać stronę internetową w ten sposób.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Zainstaluj własny CLOUD z Apache na Ubuntu">}}

{{_LINE_71_}}
Teraz zsuń swoją stronę. W poniższym formularzu należy wprowadzić nazwę użytkownika i hasło do najlepszego panelu Personal Personal Personal Server Server. Podaj także bazę danych wraz z nazwą użytkownika i hasłem, aby połączyć własny serwer z serwerem bazy danych, lokalizację folderu danych i kliknij **Konfiguracja zakończ** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Skonfiguruj OwnCloud na Ubuntu">}}

{{_LINE_75_}}
Po zakończeniu konfiguracji otrzymasz deskę rozdzielczą administratora. Gdzie możesz tworzyć użytkowników, grupy i przypisać im uprawnienia itp.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Zainstaluj pulpit pulpitowy OwnCloud">}}

{{_LINE_79_}}
Tak! Skończyliśmy z podręcznikiem instalacji własnej, aby budować osobistą pamięć w chmurze. Teraz wiesz, jak całkowicie zainstalować OwnCloud na Ubuntu do budowy chmury prywatnej krok po kroku podobnie jak Dropbox lub Drive Google.

## **Jakie są najlepsze alternatywy dla OwnCloud?** {#4a1a}
Poniżej przedstawiono własne oprogramowanie do hostingu plików własnych i konkurentów.
  ***Seafile**  to system oprogramowania hostingowego plików typu open source
  ***NextCloud**  jest bezpłatny i platforma pamięci masowej w chmurze typu open source
  ***Resilio Sync**  to aplikacja do synchronizacji plików open source
  ***Komórki Pydio**  to oprogramowanie do udostępniania i synchronizacji plików typu open source
  ***Syncing**  jest bezpłatny i aplikacja synchronizacji plików peer-to-peer typu open source

## **Wniosek:** {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}
Gratulacje! Z powodzeniem zainstalowałeś i skonfigurowałeś OwnCloud, aby budować własną prywatną chmurę z Apache na komputerze Ubuntu. Teraz Twoje dane nigdy nie są w rękach stron trzecich i mogą być zarządzane prywatnie w wirtualnej prywatnej chmurze własnej pamięci serwera Ubuntu Ubuntu. Wiele firm decyduje się na tworzenie własnych serwerów z dużą ilością istotnych informacji ze względu na wiele problemów z prywatnością danych. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy stosów rozwiązań serwera WWW.
_Your może dołączyć do nas na [Twitter][2], [LinkedIn][3] i naszą stronę [Facebook][4]. Jakiego rozwiązania do przechowywania w chmurze używasz online? Jeśli masz jakieś pytania, proszę [skontaktuj się][5].

## Badać:
Mamy również kilka innych artykułów dotyczących codziennego zarządzania twoim serwerem.
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][6]
  * [Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu][7]
  * [Zabezpiecz i szyfruj Nginx za pomocą Let's Encrypt on Ubuntu 20.04][8]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][9]
  * [Ustaw nginx z pasażerem na serwerze produkcyjnym AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
