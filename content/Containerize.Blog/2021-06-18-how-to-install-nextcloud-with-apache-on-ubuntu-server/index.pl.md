---
title: "Jak zainstalować NextCloud z Apache na serwerze Ubuntu" 
seoTitle: "Jak zainstalować NextCloud z Apache na serwerze Ubuntu" 
description: "NextCloud to samooprzeznane rozwiązanie do przechowywania w chmurze open source napisane w PHP. W tym artykule pokaże, jak zainstalować NextCloud z Apache na Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud to samoobsługiwane oprogramowanie do synchronizacji i współpracy plików open source. Ten samouczek pokaże, jak zainstalować NextCloud z Apache na Ubuntu." 
url: /pl/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud to samoobsługiwane pliki typu open source synchronizacja i oprogramowanie do współpracy. Ten samouczek pokaże, jak zainstalować NextCloud z Apache na Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Jak zainstalować NextCloud z Apache na Ubuntn">}}


## **Przegląd** 
**[NextCloud][1] **to bezpłatne i bezpieczne** samoobsługowe rozwiązanie do przechowywania w chmurze**Wpisane w języku programowania PHP. Zapewnia dostęp do danych za pomocą interfejsu internetowego i funkcjonalnie podobnego do Dropbox. Zastrzeżone rozwiązania do przechowywania w chmurze, takie jak Dropbox i Google Drive, są wygodne, ale można je wykorzystać do gromadzenia danych osobowych, ponieważ twoje pliki są przechowywane w ich systemach. Jeśli potrzebujesz bezpiecznego, bezpiecznego i zgodnego rozwiązania synchronizacji i udostępniania plików, możesz przełączyć na Open Source NextCloud Server. Konfiguracja NextCloud może być zainstalowana na prywatnych serwerach domowych lub na wirtualnym serwerze prywatnym.
NextCloud Open Source zapewnia **END-to-end Szyfrowanie** oznacza, że ​​pliki można szyfrować na urządzeniu klienckim przed przesłaniem do serwera. Można go również zintegrować z internetowym pakietem biurowym, takim jak Colobora, OnlyOffice NextCloud, abyś mógł tworzyć i edytować pliki DOC, PPT, XLS bezpośrednio z klienta NextCloud. Możesz udostępniać i synchronizować jeden lub więcej plików i folderów na komputerze z serwerem NextCloud po pobraniu klienta NextCloud. Pobieranie pulpitu NextCloud i klienci mobilni zapewniają opcje synchronizacji i udostępniania wszystkich urządzeń pod kontrolą. Umieść pliki danych w lokalnych katalogach udostępnionych, a pliki te są natychmiast zsynchronizowane z serwerem i innymi urządzeniami za pomocą klienta Sync NextCloud Desktop, aplikacji iOS lub urządzeń z Androidem.
Ten samouczek pomoże Ci zainstalować NextCloud w systemie operacyjnym Ubuntu 20.04 LTS Linux z Apache.
* **Zainstaluj warunki wstępne (stos lampy)** 
* **Pobierz archiwum NextCloud na Ubuntu** 
* **Utwórz bazę danych mysql** 
* **Uruchom instalator Web NextCloud** 
* **Owinięcie** 

## Krok 1: Zainstaluj warunki wstępne (stos lampy)
Pierwszą rzeczą do instalacji NextCloud na Ubuntu jest to, że musisz mieć uruchamianie **serwer lamp**w systemie Ubuntu LTS. Zaloguj się do systemu i dostęp do terminalu. Jeśli masz już uruchamianie**Lampa Stack** Pomiń ten krok, a następnie użyj następujących poleceń, aby zainstalować niezbędne zależności.

### Zainstaluj php
Zacznijmy od instalacji wersji PHP w wersji 5.6 lub wyższej na serwerze Ubuntu:
Aktualizacja sudo apt-get
sudo apt-get install -y PHP php-gd php-curl php-zip php-xml php-mbstring
Możesz zweryfikować wersję PHP za pomocą następującego polecenia:
php -v
{{_LINE_29_}}

### Zainstaluj Apache2
Następnie zainstaluj apache z poleceniem:
sudo apt-get install -y Apache2 libapache2-mod-php
sudo systemctl restart apache2
{{_LINE_34_}}

### Zainstaluj mysql
Po zależnościach, następnym krokiem, którym należy się zająć, jest zabezpieczenie serwera bazy danych MySQL. Zainstaluj serwer bazy danych MySQL, uruchamiając:
sudo apt-get instal -y mysql-server php-mysql
{{_LINE_38_}}

## Krok 2: Pobierz Archiwum NextCloud na Ubuntu
W momencie pisania tego artykułu najnowsza wersja NextCloud to 22.0.0beta5. Po pomyślnej konfiguracji serwera LAMP w systemie, pobierajmy NextCloud z jego [oficjalnej strony internetowej][2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Po zakończeniu pobierania serwera NextCloud wyodrębnij archiwum pobrane w ramach dokumentu witryny root i skonfiguruj własność katalogu NextCloud na www-data w plikach i katalogach.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data następnycloud
sudo chmod -r 755 NextCloud
{{_LINE_49_}}
Teraz usuń pobrany plik archiwum.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Krok 3: Utwórz bazę danych MySQL
Po wyodrębnianiu kodu źródłowego utwórzmy bazę danych NextCloud MySQL i konto użytkownika do konfigurowania NextCloud. Użyj następującego zestawu polecenia, aby zalogować się do MySQL Server, utwórz bazę danych NextCloud, Użytkownik i wyjdź z konsoli MySQL.
mysql -u root -p
Wprowadź hasło:
mysql> Utwórz bazę danych NextCloud;
mysql> daj wszystko na następnej cloud.* Do „NextCloud”@'localHost' identyfikowany przez „yasir_pa $$ w0rd_”;
mysql> uprawnienia spłukające;
mysql> rezygnuj
{{_LINE_61_}}

## Krok 4: Uruchom instalator Web NextCloud
W tym momencie NextCloud zainstaluj Ubuntu 20.04 pomyślnie i skonfigurowany. Teraz otwórz katalog konfiguracji NextCloud w przeglądarce internetowej, jak poniżej i wpisz adres URL http://your-domain.com. Zmień LocalHost na adres IP serwera lub nazwę domeny. Zobaczysz następujący ekran:
http: // localHost/NextCloud/lub http: // your_domain_name/NextCloud/
{{_LINE_65_}}
Wprowadź nowe poświadczenia administracyjne, aby utworzyć konto administratora i podać lokalizację folderu danych.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Jak zainstalować NextCloud z Apache na serwerze Ubuntu Linux">}}

{{_LINE_69_}}
Teraz zsuń swoją stronę i wprowadzić nazwę bazy danych, nazwę użytkownika bazy danych, hasło i kliknij przycisk **Zakończ konfigurację** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Jak zainstalować NextCloud Ubuntu 20.04 z Apache">}}

{{_LINE_73_}}
Po zakończeniu instalacji powinieneś zobaczyć pulpit nawigacyjny NextCloud na następującym ekranie. Tutaj możesz utworzyć użytkownika, grupy, przypisać im uprawnienia itp.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Instalowanie NextCloud na Ubuntu z Apache">}}

{{_LINE_77_}}
Gratulacje, masz działające rozwiązanie w chmurze NextCloud w systemie Ubuntu LTS. Możesz teraz zacząć dostosowywać swój serwer w chmurze, aby idealnie zaspokoić Twoje potrzeby.

## **Podsumowanie:**  {#4a1a}

Gratulacje! Z powodzeniem **skonfigurowałeś i zainstalowałeś NextCloud na serwerze Ubuntu z Apache** . Nauczyłeś się tworzyć prywatną chmurę. NextCloud Ubuntu Server to niesamowita platforma współpracy w chmurze, która może zaspokoić praktycznie prywatne lub hybrydowe potrzeby przechowywania chmury. Teraz wiesz, jak zainstalować NextCloud na Ubuntu, a Twoje dane są bezpieczne w chmurze hostowanej. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy związane ze stosami rozwiązań serwera WWW.
_ Wolisz oparte na chmurze rozwiązanie pamięci masowej?. Jeśli masz jakieś pytania, skontaktuj się [3] ._

## Badać:
Możesz polubić następujące artykuły dotyczące codziennego zarządzania serwerem.
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][4]
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu lub Debian][5]
  * [Zainstaluj i zabezpiecz phpMyAdmin z Nginx na Ubuntu][6]
  * [Zabezpiecz i szyfruj Nginx z Let's Encrypt on Ubuntu 20.04][7]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][8]
  * [Ustaw nginx z pasażerem na serwerze produkcyjnym AWS][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
