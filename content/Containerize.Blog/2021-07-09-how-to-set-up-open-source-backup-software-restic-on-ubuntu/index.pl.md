---
title: "Jak skonfigurować oprogramowanie do tworzenia kopii zapasowych Open Source Restic na Ubuntu" 
seoTitle: "Jak skonfigurować oprogramowanie do tworzenia kopii zapasowych Open Source Restic na Ubuntu" 
description: "Restic jest szybkim, bezpiecznym i jednym z najlepszych oprogramowania do tworzenia kopii zapasowych typu open source. Obsługuje AWS S3, Microsoft Azure, Google Cloud i inne opcje zaplecza." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Weź kopię zapasową oprogramowania do tworzenia kopii zapasowych open source i przechowuj je lokalnie lub na zewnętrznych backendach. Restic jest wieloplatformowy i obsługuje wiele rodzajów pamięci." 
url: /pl/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Weź kopię zapasową za pomocą oprogramowania do tworzenia kopii zapasowych open source i przechowuj je lokalnie lub na zewnętrznych backendach. Restic jest wieloplatformowy i obsługuje wiele rodzajów pamięci.

{{< figure align=center src="images/restic-post-banner.png" alt="Oprogramowanie do tworzenia kopii zapasowych typu open source">}}

System tworzenia kopii zapasowych jest naprawdę ważny zarówno dla firm, jak i osób fizycznych. Dane można utracić z różnych powodów, takich jak cyberatak, awaria systemu, przypadkowe usunięcie i wiele innych. Powinieneś mieć dobrą strategię tworzenia kopii zapasowych, aby szybko przywrócić swoje dane. Ten przewodnik pokaże, jak zainstalować i korzystać z oprogramowania do kopii zapasowej  **Open Source **  Restic na serwerze Ubuntu.
Omówiliśmy następujące sekcje w tym samouczku.
  *[ **Wymagania wstępne ** ][1]
  *[ **Co to jest restryk? ** ][2]
  *[ **Restic Instalacja ** ][3]
  *[ **Restic Configuration ** ][4]
  *[ **Alternatywy dla Restic ** ][5]
  * **[wniosek][6]**

##
Restic Backup Software obsługuje trzy główne systemy operacyjne Linux, macOS i Windows. Przed zainstalowaniem  **Restic Backup **  należy spełnić następujące wymagania systemowe.
  * System maszyny lub komputerów stacjonarnych z systemem operacyjnym Ubuntu, który mieści dane do tworzenia kopii zapasowych
  * Najnowsza instancja serwera Ubuntu
  * Uwierzytelnianie klucza SSH skonfigurowane między dwoma klientami i serwerem
  * Użytkownik bez korzeni z uprawnieniami sudo
Z tymi kawałkami w ręku przeprowadzajmy się i zabierzmy do pracy.

## Co to jest Restic?   {#Restic}
[ **RESTIC ** ][7] to fantastyczne  **narzędzie kopii zapasowej open source ** . Jest to  **bezpłatne narzędzie do tworzenia kopii zapasowych ** , która jest szybka, bezpieczna i wydajna. Jest to program kopii zapasowej międzyplatformowej, więc uruchomi się w Linux, BSD, Mac OS X i Windows. Restic Best Open Source Backup Software jest łatwe do uruchomienia i nie wymaga serwera ani skomplikowanej konfiguracji. Tworzy kopię zapasową zmodyfikowanych danych i pozwala użytkownikom przywrócić je w razie potrzeby. Ponadto zapewnia różnorodne opcje przechowywania, w tym pamięć własną i przechowywanie w Internecie. Ponadto Restic Open Source Self Hosted Surage wykorzystuje solidne techniki kryptograficzne w celu ochrony danych.
Restic nie jest prostym narzędziem do kopiowania plików. Opiera się przede wszystkim na dwóch koncepcjach: migawkach i repozytoriach.  **RESTIC **  Rozwiązanie kopii zapasowej open source zapisuje informacje jako migawkę, która jest następnie zapisywana w repozytorium. Jest napisany w języku programowania Go. Restic GO narzędzie kopii zapasowych i aplikacja kopii zapasowej open source działają płynnie z wieloma systemami pamięci backendowej w chmurze i lokalnych zapleczu. Kod źródłowy oprogramowania do kopii zapasowej plik open source jest dostępny na [ **Github ** ][8]. Można jednak znaleźć szczegółową [ **Dokumentację ** ][9] dla instalacji i użycia.
Restic Self Hosted Cloud Backup obsługuje nietypowe pola następujące podlecie do przechowywania kopii zapasowej.
  * Lokalny katalog
  * SFTP Server (przez SSH)
  * Server REST
  * AWS S3
  * Minio Server
  * Wasabi
  * Cloud Alibaba
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob Storage
  * Google Cloud Storage
Możesz użyć [ **rclone ** ][10] dla różnych backendów oprócz tych wymienionych powyżej.

## Restic Instalation   {#Installation}
Istnieją różne sposoby instalowania Restic Self Hosted Surage w systemie operacyjnym Ubuntu. Omówimy instalację Restic Hosted Plik pamięci za pomocą pakietu Ubuntu, Docker i kodu źródłowego.

### Instalowanie za pomocą pakietu
  * Uruchom poniższe polecenie, aby zainstalować Restic Open Source Backup Server w systemie OS.
```
$ sudo apt-get install restic
```

### Instalowanie za pomocą Docker
  * Zdobądź Restic Image z DockerHub.
```
$ docker pull restic/restic
```

### Instalowanie za pomocą źródła
  * Po pierwsze, musisz zainstalować język programowania Go, aby skonfigurować Restic ze źródła. Możesz odwiedzić oficjalną stronę [ **golang ** ][11], aby instrukcje instalacyjne Go.
  * Następnie wykonaj poniższe polecenia, aby zainstalować Restic Incremental Backup.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Określając docelowy system operacyjny w poleceniu, możesz szybko skompilować Restic dla wszystkich obsługiwanych platform. Oto kilka przykładów.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Konfiguracja Restic   {#Configuration}
Jak już wspomnieliśmy powyżej, że system kopii zapasowej open source oparty jest na migawkach i repozytoriach do tworzenia kopii zapasowych. Rzućmy okiem, jak skonfigurować repozytorium, zrobić migawkę, a następnie przywróć kopię zapasową.

### Utwórz repozytorium
  * Uruchom następujące polecenie, aby zainicjować repozytorium. Musisz także ustawić hasło do repozytorium.
```
$ restic init --repo /tmp/
```

### Dane tworzenia kopii zapasowych do lokalnego katalogu
  * W pierwszym kroku utworzyliśmy repozytorium do przechowywania danych. Teraz dodamy dane do repozytorium do tworzenia kopii zapasowych. Wykonaj następujące polecenie.
```
$ restic --repo /tmp/backup backup ~/work
```

### Przywróć kopię zapasową
  * Polecenie Przywróć przywraca pliki i katalogi. Pliki nie są przywracane do ich oryginalnej lokalizacji podczas korzystających z kopii zapasowej w chmurze open source. Musisz wybrać docelową lokalizację plików do przywrócenia przez Restic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Jednak możesz przywrócić najnowszą migawkę bez określenia identyfikatora migawki. Musisz dodać najnowszy parametr w poleceniu, jak poniżej.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Praca z migawkami
W tej sekcji przyjrzymy się niektórym funkcjom migawek.
  * Uruchom następujące polecenie, aby wymienić snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Możesz porównać dwie migawki z następującym poleceniem.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Może być konieczne usunięcie starego kopii zapasowej, aby zwolnić miejsce do przechowywania. Aby usunąć migawkę, uruchom polecenie poniżej.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Alternatywy dla Restic
Restic jest najpopularniejszą aplikacją do tworzenia kopii zapasowych typu open source i gwarantuje poufność i integralność danych dotyczących ważnych plików. Poniżej znajdują się najpopularniejsze alternatywy i najlepszych konkurentów w ramach Restic Data Backup Tool.
  * Lodowca Amazon
  * Replikacja
  * Runrestic
  * AFI
  * Backup Dayday
  * Borg
  * Backup Veeam
  * AWS Storage Gateway
  * Spójność

## Wniosek
W tym artykule omówiliśmy Restic  **Darmowe oprogramowanie do tworzenia kopii zapasowych open source ** . Omówiliśmy także kilka technik instalacji, a także sposób utworzenia kopii zapasowej i jak przywrócić kopię zapasową. Istnieje wiele innych form magazynowania tworzenia kopii zapasowych danych, a my właśnie zaadźliliśmy jedną w tym artykule. Pozostałe typy magazynów zaplecza zostaną omówione w przyszłych publikacjach. Mamy nadzieję, że ten samouczek służy jako punkt wyjścia do użycia Restic Best Source Backup Tool do przyjmowania i przywracania kopii zapasowych.
Wreszcie [ **Containerize.com ** ][12] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [ **oprogramowania do tworzenia kopii zapasowych ** ][13] w celu uzyskania najnowszych aktualizacji.
_ Jakie są Twoje ulubione bezpłatne i oprogramowanie do tworzenia kopii zapasowych open source?. Czy masz jakieś pytania dotyczące oprogramowania do tworzenia kopii zapasowych typu open source?, Proszę [skontaktuj się][14].

## Badać:
Mamy również kilka innych powiązanych informacji od OSS Watch:
  * [Top 5 oprogramowania do przechowywania chmury open source w 2021][15]
  * [Jak zainstalować NextCloud z Apache na serwerze Ubuntu][16]
  * [Zainstaluj i skonfiguruj własne CLOUD z Apache na Ubuntu][17]
  * [Jak zainstalować platformę udostępniania plików Pydio i synchronizację na Ubuntu][18]
  * [NSQ vs Kafka | Jakie są kluczowe różnice?][19]
  * [NextCloud vs OwnCloud | Jakie są różnice?][20]
  * [Najlepsze oprogramowanie do przechowywania w chmurze open source i udostępnianie plików][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
