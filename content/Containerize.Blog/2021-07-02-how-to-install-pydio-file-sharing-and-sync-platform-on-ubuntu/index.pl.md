---
title: "Jak zainstalować platformę udostępniania plików Pydio na Ubuntu" 
seoTitle: "Jak zainstalować platformę udostępniania plików Pydio na Ubuntu" 
description: "Pydio to oprogramowanie do udostępniania plików typu open source i samookrytującym współpracą udostępniania dokumentów. Sprawdźmy, jak zainstalować narzędzie udostępniania plików Pydio i synchronizacji." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio to oparta na chmurze platforma udostępniania plików i synchronizacji, aby uzyskać dostęp do wszystkich danych w dowolnym miejscu i na dowolnym urządzeniu. Ten samouczek dotyczy instalacji Pydio na Ubuntu." 
url: /pl/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio to oparta na chmurze platforma udostępniania plików i synchronizacji, aby uzyskać dostęp do wszystkich danych w dowolnym miejscu i na dowolnym urządzeniu. Ten samouczek dotyczy instalacji Pydio na Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Jak zainstalować platformę udostępniania plików Pydio na Ubuntu">}}


##**Przegląd**
Komórki Pydio to oprogramowanie do udostępniania i synchronizacji plików typu open source. Zapewnia jeden punkt dostępu do wszystkich przechowywania danych i jest alternatywą dla OwnCloud i NextCloud, który świadczy usługi pamięci, udostępnianie plików i synchronizację. Pydio to platforma udostępniania plików open source Enterprise podobna do Dropbox i innych platform pamięci. Pomaga bezpiecznie podłączyć wszystkie pliki i urządzenia na jednej platformie.
Pydio Cell to oparta na chmurze platforma synchronizacji plików i współpracy. To oprogramowanie typu open source działa na osobistej infrastrukturze IT i pomaga pracownikom chronić i monitorować dane biznesowe. Możesz zsynchronizować swoje dane i uzyskać do nich dostęp z dowolnego miejsca za pomocą aplikacji mobilnej, oprogramowania komputerowego lub przeglądarki internetowej za pomocą komórek Pydio. Najlepsza aplikacja do udostępniania plików komórek Pydio jest oparta na architekturze mikro-usług i jest napisana przy użyciu języka programowania Golang.
Ten samouczek pomoże Ci zainstalować i skonfigurować oprogramowanie do udostępniania plików Pydio i platformę synchronizującą w systemach Ubuntu LTS.
  * Pierwsze kroki
  * Zainstaluj serwer lampy
  * Zainstaluj Pydio na Ubuntu
  * Utwórz bazę danych i użytkownika Pydio
  * Uzyskaj dostęp do Pydio w przeglądarce
  * Wniosek

## Krok 1: Pierwsze kroki
Przed instalacjami musisz upewnić się, że system działa najnowsze pakiety. Użyj poniższego polecenia, aby zaktualizować serwer Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Po aktualizacji zawsze zaleca się ponowne uruchomienie serwera, aby nowe zmiany zaczęły się obowiązywać.
```
sudo reboot
```

## Krok 2: Zainstaluj serwer LAMP
Aby skonfigurować Pydio Secure Enterprise Plice Server i sposób utworzenia prywatnej chmury open source, najpierw musimy skonfigurować działającą serwer LAMP. Jeśli już zainstalowałeś i działając stosowanie lampy, pomiń ten krok, a następnie użyj poleceń obserwujących, aby skonfigurować lampę w systemie Ubuntu.

### Zainstaluj php
Możesz zainstalować PHP w systemie Ubuntu lub Debian, uruchamiając polecenia:
sudo apt-get instaluj Python-Sofware-Properties
sudo add-apt-repozytory PPA: ondrej/php
sudo apt-get instaluj -y php php-gd php-curl php-zip php-akt php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### Zainstaluj Apache2
Apache to najczęściej używane oprogramowanie serwera internetowego typu open source. Następnie zainstaluj serwer WWW Apache na Ubuntu, uruchamiając:
sudo apt-get install -y Apache2 libapache2-mod-php
{{_LINE_38_}}

### Zainstaluj mysql
MySQL open source relacyjna system zarządzania bazą danych jest składnikiem stosu oprogramowania aplikacji internetowej i innych. Teraz instalowanie MySQL na Ubuntu, działając poniżej:
sudo apt-get instal -y mysql-server php-mysql
{{_LINE_42_}}
Po zakończeniu instalacji otwórz  **plik konfiguracyjny php.ini**  do edycji. Użyj preferowanego edytora plików.
Wprowadź zmiany w pliku php.ini jak poniżej. Otwórz dwa pliki i dokonaj zmian, jak pokazano
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Dokonaj następujących zmian
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Zapisz i zamknij plik i przejdź do edycji drugiego pliku php.ini
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Krok 3: Zainstaluj Pydio na Ubuntu
Najpierw musisz dodać najlepsze bezpłatne repozytorium oprogramowania do udostępniania plików do swojego serwera Ubuntu 20.04, ponieważ nie jest ono jeszcze dostępne. Dodaj także najlepszy system udostępniania plików Pydio dla Business Public Key i kontynuuj aktualizację repozytorium systemu.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Nadszedł czas, aby zainstalować oprogramowanie do udostępniania Pydio EFSS. Uruchom polecenie, jak pokazano
```
sudo apt install -y pydio pydio-all
```
Włącz moduł Apache Rewrite za pomocą poniższych poleceń i uruchom ponownie i włącz apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Potwierdź, że usługa Apache działa za pomocą poniższego polecenia:
```
sudo systemctl status apache2
```
Dane wyjściowe powinno być takie, jeśli instalacja została wykonana poprawnie, pokazując, że usługa Apache2 działa.

## Krok 4: Utwórz bazę danych Pydio i użytkownik
Po wyodrębnianiu kodu utwórzmy teraz bazę danych MySQL i konto użytkownika w celu skonfigurowania Pydio. Użyj następującego zestawu poleceń, aby zalogować się do MySQL Server, aby utworzyć bazę danych i użytkownika Ajaxplorer ShareSync lub Pydio.
mysql -u root -p
Wprowadź hasło:
MySQL> Utwórz bazę danych Pydio;
mysql> dotacja na Pydio.* Do „Pydio”@„localhost” zidentyfikowane przez „_password_”;
mysql> uprawnienia spłukające;
mysql> rezygnuj
{{_LINE_69_}}
Następnie musimy zainstalować Pydio na Ubuntu z interfejsu internetowego, aby utworzyć prywatną chmurę.

## Krok 5: Dostęp do Pydio w Twojej przeglądarce
Otwórz przeglądarkę i wpisz adres URL _http: /// pydio_. Powinieneś zobaczyć stronę, jak pokazano
Oprogramowanie do udostępniania plików prywatnych w chmurze Pydio oraz oprogramowanie do udostępniania plików biznesowych jest teraz zainstalowane i skonfigurowane, nadszedł czas, aby uzyskać dostęp do ich interfejsu internetowego.
Otwórz przeglądarkę i wpisz adres URL http: // Your -Server -ip / Pydio. Zostaniesz przekierowany na następną stronę:

{{< figure align=center src="images/Pydio-Installer.png" alt="Instalator Pydio">}}

Potwierdź wszystkie elementy sterujące i kliknij przycisk  **Kontynuuj instalację Pydio** . Powinieneś zobaczyć następną stronę:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Kreator konfiguracji Pydio">}}

Wybierz swój język i kliknij  **Uruchom Kreatora** . Powinieneś zobaczyć następną stronę:

{{< figure align=center src="images/Starting-the-setting.png" alt="Rozpocznij ustawienia Pydio">}}

Wprowadź nazwę programu i wiadomość powitalną. Następnie kliknij przycisk  **Dalej** . Powinieneś zobaczyć następną stronę:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Wprowadź aplikację Pydio">}}

Następnie wprowadź konto administratora i kliknij przycisk  **Dalej** . Powinieneś zobaczyć następną stronę:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Ustawienia bazy danych mysql">}}

Następnie wprowadź szczegóły swojej bazy danych, takie jak nazwa bazy danych, nazwa użytkownika i hasło. Następnie kliknij przycisk  **TEST DB Połączenie** . Powinieneś zobaczyć następną stronę:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Opcje zaawansowane Pydio">}}

Następnie kliknij przycisk  **Zainstaluj Pydio** . Po pomyślnym zakończeniu instalacji. Zostaniesz przekierowany na następną stronę:

{{< figure align=center src="images/Pydio-Login.png" alt="Login Pydio">}}

Następnie wprowadź nazwę użytkownika i hasło dla administratora. Następnie kliknij przycisk [Enter]. Powinieneś zobaczyć następną stronę:

Tak! Zrobione. Teraz wiesz, jak całkowicie zainstalować oprogramowanie do udostępniania plików Pydio Self Hosted i open source w Ubuntu do budowy chmury prywatnej krok po kroku podobnym do Dropbox lub Dysku Google.

##  **Wniosek:**    {#4a1a}
W tym samouczku z powodzeniem zainstalowałeś bezpieczne udostępnianie plików Pydio Cells w systemie Ubuntu. Możesz użyć tego artykułu, aby stworzyć infrastrukturę chmurową do przechowywania, zabezpieczania i udostępniania plików w chmurze hostowanej. Użyj wspólnego udostępniania dokumentów Pydio i najlepszej bezpłatnej aplikacji udostępniania plików, aby uzyskać większą kontrolę nad danymi i zapewnić skuteczną współpracę w organizacji biznesowej. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy rozwiązań pamięci masowej w chmurze open source i narzędzi do współpracy.
_Your może dołączyć do nas na [Twitter][1], [LinkedIn][2] i naszą stronę [Facebook][3]. Jaką platformę Udostępnianie opartego na chmurze _file używasz online?. Jeśli masz jakieś pytania, proszę [skontaktuj się][4].

## Badać:
Mamy również kilka innych artykułów dotyczących codziennego zarządzania twoim serwerem.
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][5]
  * [Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu][6]
  * [Zabezpiecz i szyfruj Nginx za pomocą Let's Encrypt on Ubuntu 20.04][7]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][8]
  * [Ustaw nginx z pasażerem na serwerze produkcyjnym AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
