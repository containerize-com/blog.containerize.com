---
title: "Jak konfigurować serwer pocztowy za pomocą pocztowej na Ubuntu" 
seoTitle: "Jak konfigurować serwer pocztowy za pomocą pocztowej na Ubuntu" 
description: "Wysyłaj e -maile z aplikacji internetowych z serwerem poczty open source. Postal umożliwia wysyłanie wiadomości e -mail za pomocą interfejsu API SMTP i HTTP, a także monitorowanie ruchu e -mail." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Wysyłaj i odbieraj e -maile z serwerem poczty open source. W tym artykule pomoże Ci instalować i konfigurować serwer poczty pocztowej dla Twojej firmy." 
url: /pl/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Wyślij i odbieraj e -maile z serwerem poczty open source. W tym artykule pomoże Ci instalować i konfigurować serwer poczty pocztowej dla Twojej firmy.

{{< figure align=center src="images/postal-banner.png" alt="Serwer poczty typu open source">}}

Wysyłanie wiadomości e -mail na różne rodzaje zdarzeń jest niezbędne do nowoczesnych aplikacji. Każda firma potrzebuje niezawodnego  **serwera poczty** do wychodzących wiadomości e -mail. Ponadto firmy potrzebują serwera pocztowego do wysyłania masowych wiadomości e -mail do kampanii marketingowych, biuletynów i wielu innych zadań. Dostępnych jest kilka  **serwera poczty open source**  do tego. W tym poście omówimy jednak **serwer pocztowy**  i omówimy następujące tematy.
  * [Co to jest serwer poczty pocztowej?][1]
  * [Funkcje pocztowe][2]
  * [Instalacja pocztowa][3]
  * [Wniosek][4]

## Co to jest serwer poczty pocztowej? {#Postal}

[  **Postal** ][5] to bezpłatny i  **serwer poczty open source**  . Jest to w pełni funkcjonalny serwer pocztowy dla stron internetowych i aplikacji internetowych. Serwer poczty pocztowej jest alternatywą dla istniejącego popularnego  **Server poczty**  , takich jak SendGrid i Mailgun.  **Postal**  to solidna, bezpieczna i skalowalna platforma dostarczania wiadomości e -mail typu open source. Cały kod źródłowy i dokumentacja są dostępne na [  **github**  ][6]. Możesz pobrać, zainstalować go na prywatnym serwerze i zachować pełną kontrolę nad nim. Możesz także poprawić i ulepszyć go zgodnie z potrzebami biznesowymi. Ponadto **Postal Mail Server**  obsługuje wiele organizacji.
Użytkownicy mogą przeglądać wykresy i statystyki pokazujące wolumen maili przychodzących i wychodzących. Ponadto możesz uzyskać dostęp do pełnej kolejki wiadomości wychodzących i przychodzących. Serwer poczty pocztowej zapewnia funkcjonalność dla Webhooks. Możesz skonfigurować WebHooks, aby otrzymywać informacje na żywo o informacji o dostawie w czasie rzeczywistym. Oferuje również retencję wiadomości, która pozwala przechowywać i zbadać wszystkie wysyłanie i odbieranie wiadomości. Dostawa e -maili jest bardzo ważna w firmie, aby upewnić się, że użytkownicy otrzymali wiadomość e -mail. Czasami jednak e -mail dostarcza użytkownikowi i musisz zbadać problem.  **Incoming i wychodzący serwer poczty**  zapewnia również pełne rejestrowanie i narzędzia do przeprowadzenia dochodzenia.

## Cechy pocztowe {#Features}

Serwer poczty pocztowej oferuje wiele funkcji. Omówimy jednak następujące kluczowe funkcje w tym artykule.
 **Wysyłanie e -maili** : Pocztowy serwer pocztowy zawiera dwie techniki wychodzących e -maili, w tym interfejs API HTTP i SMTP. Możesz łatwo użyć interfejsu API HTTP do integracji z aplikacjami internetowymi. Możesz także użyć serwera SMTP do integracji z istniejącymi aplikacjami i systemami.
 **E -maile przychodzące** : **Point Mocning Mail** można przesłać do punktu końcowego HTTP, **SMTP Server** i innych adresów e -mail za pomocą poczty pocztowej.
 **Sprawdzanie spamu i wirusa** : Spamassassin i CLAMAV można zintegrować z pocztą, aby automatycznie skanować wiadomości przychodzące i wychodzące, gdy przechodzą przez serwery pocztowe. Ta funkcja jest również domyślnie wyłączona.
 **Kliknij i otwórz śledzenie** : Otwarcia e -maila i kliknięcia można śledzić za pomocą poczty. Postal skanuje Twoje wiadomości wychodzące i zastąpi wszelkie linki nowym linkiem, który przechodzi przez pocztą serwer WWW. Gdy użytkownik kliknie link, Postal rejestruje akcję i natychmiast przekierowuje je do oryginalnego adresu URL. Nie jest to jednak domyślnie aktywowane.
 **Pule IP** : Postal umożliwia wysyłanie wiadomości z różnych adresów IP. Umożliwia to przypisanie wielu adresów IP do różnych serwerów poczty lub wysyłanie z różnych adresów IP w zależności od adresów nadawcy lub odbiorcy.

## Instalacja pocztowa {#Installation}

Postępuj zgodnie z poniższym przewodnikiem krok po kroku, aby zainstalować oprogramowanie pocztowe  **serwer pocztowych**  na Ubuntu 18.04.
  * Po pierwsze, musisz podłączyć serwer VIS SSH. Uruchom następujące polecenie, aby zaktualizować system z najnowszymi dostępnymi pakietami.
```
sudo apt-get update
```

### Zainstaluj serwer bazy danych mariadb
  * Uruchom polecenie, aby zainstalować Mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Po zakończeniu instalacji. Teraz musisz go zabezpieczyć, uruchamiając poniższe polecenie.
```
mysql_secure_installation
```
  * Następnie zada ci kilka pytań, jak pokazano poniżej. Musisz odpowiedzieć na wszystkie pytania.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Połącz z serwerem Mariadb za pomocą następującego polecenia.
```
mysql -u root -p
```
  * Utwórz bazę danych dla poczty.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Następnie utwórz użytkownika bazy danych o nazwie „Postaluser” z nowym hasłem.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Następnie udziel pełnego dostępu użytkownika do bazy danych „Postaluser”.
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Następnie spłucz przywileje i wyjdź ze skorupy MariaDB za pomocą następującego polecenia.
```
FLUSH PRIVILEGES;
EXIT;
```

### Zainstaluj Ruby
  * Najpierw dodaj PPA innych firm, aby zainstalować Ruby. Uruchom następujące polecenia.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Zaktualizuj pakiety Ubuntu.
```
sudo apt update
```
  * Zainstaluj Ruby, uruchamiając poniższe polecenie.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Zainstaluj Rabbitmq
  * Erlang jest zobowiązany do zainstalowania RabbitMQ, więc musisz go również zainstalować. Dodaj klucz repozytorium Erlang do Ubuntu za pomocą poniższego polecenia.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Następnie dodaj repozytorium Erlang za pomocą następującego polecenia.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Uruchom następujące polecenia, aby zainstalować Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Po zakończeniu instalacji Erlang możesz kontynuować instalację RabbitMQ. Dodaj repozytorium Rabbitmq do Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Dodaj klawisz GPG Rabbitmq za pomocą następującego polecenia.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Uruchom poniższe polecenia, aby zainstalować pakiet RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Uruchom poniżej polecenie, aby włączyć RabbitMQ, więc zawsze zaczyna się, gdy system uruchamia.
```
sudo systemctl enable rabbitmq-server
```
  * Następnie musisz utworzyć Rabbitmq Vhost i użytkownika dla pocztowej. Uruchom do niego następujące polecenie.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Zainstaluj NodeJS
  * Dodaj repozytorium NodeJS z następującym poleceniem.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Następnie uruchom poniższe polecenie, aby zainstalować NodeJS.
```
sudo apt-get install nodejs
```

### Zainstaluj pocztę pocztową
  * Po pierwsze, musisz utworzyć użytkownika dla pocztowego serwera pocztowego. Utwórz go za pomocą następującego polecenia.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Następnie pozwól Ruby na słuchanie w portach internetowych.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Zainstaluj wszystkie wymagane klejnoty z następującymi poleceniami.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Utwórz strukturę katalogu dla poczty.
```
sudo mkdir -p /opt/postal/app
```
  * Następnie pobierz najnowszą wersję Postal.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Wyodrębnij pobrany plik za pomocą następującego polecenia.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Następnie zmień własność katalogu pocztowego.
```
sudo chown -R postal:postal /opt/postal
```
  * Utwórz symbolizję dla binarnego pocztowego, uruchamiając poniższe polecenie.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Zainstaluj wszystkie wymagane zależności.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Uruchom poniższe polecenie, aby zainicjować konfiguracje pocztowe.
```
sudo postal initialize-config
```
  * Następnie uruchom następujące polecenie, aby otworzyć plik konfiguracyjny pocztowego.
```
sudo nano /opt/postal/config/postal.yml
```
  * Dokonaj zmian wskazanych w Bold i zapisz plik.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Uruchom polecenie, aby zainicjować bazę danych.
```
sudo postal initialize
```
  * Utwórz użytkownika administratora dla poczt.
```
sudo postal make-user
```
  * Następnie musisz podać szczegóły konta użytkownika, jak pokazano poniżej.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :  ****** ***

User has been created with e-mail address admin@example.com
```
  * Na koniec uruchom następujące polecenie, aby uruchomić i sprawdzić status aplikacji pocztowej.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Zainstaluj Nginx
  * Uruchom poniższe polecenie, aby zainstalować serwer WWW Nginx.
```
sudo apt install nginx
```
  * Następnie skopiuj pocztową konfigurację nginx, aby używać go jako wirtualnego hosta.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Utwórz samowystarczalny certyfikat SSL.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Potem będziesz musiał odpowiedzieć na pytania.
  * Otwórz domyślny wirtualny plik hosta Nginx.
  * Zmień wartość nazwy Server_name i zapisz plik.
  * Na koniec ponownie uruchom serwer WWW Nginx, uruchamiając poniższe polecenie.
```
sudo systemctl restart nginx
```
  * Na koniec otwórz przeglądarkę i wpisz adres URL https://postal.example.com. Zostaniesz przekierowany na stronę logowania.

## Wniosek {#Wniosek}

Głęboko omówiliśmy wprowadzenie i podstawowe funkcje serwera pocztowego pocztowego. Dołączyliśmy również instrukcje krok po kroku dotyczące konfigurowania tego  **Agent przesyłania poczty**  . Ponadto daliśmy pewien wgląd w konfigurację. Konfigurowanie serwera poczty pocztowej to prosty proces. Mam nadzieję, że ten artykuł jest rzeczywiście pomocny w konfigurowaniu i konfigurowaniu serwera poczty pocztowej dla Twojej firmy.
Wreszcie [  **Containerize.com** ][7] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą [ **transakcyjną e -mail**  ][8] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
* [  **Najlepsze transakcyjne oprogramowanie do e -mail**  ][9]
* [  **potal - serwer poczty open source**  ][5]
* [  **5 Najlepsze oprogramowanie serwera pocztowego open source dla firm w 2020**  ][10]



 [1]: #Postal
 [2]: #Features
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://products.containerize.com/transactional-email/postal/
 [6]: https://github.com/postalhq/postal
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/transactional-email/
 [9]: https://products.containerize.com/transactional-email/
 [10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
