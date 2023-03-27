---
title: "Ciągła integracja i ciągłe wdrażanie z serwera kontroli źródłowej" 
seoTitle: "Ciągła integracja i ciągłe wdrażanie z serwera kontroli źródłowej" 
description: "Bezpłatne narzędzie wdrażania pomaga zespołom programistyczne w automatyzacji przepływów pracy w zakresie dostarczania oprogramowania. Szybko buduj, testuj, wdrażaj oprogramowanie za pomocą repozytorium Jenkins i GitHub." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Zautomatyzuj przepływy pracy za pomocą bezpłatnego narzędzia wdrażania. Dowiemy się, jak konfigurować CI/CD z Jenkins Automation Server i GitHub w celu wdrażania oprogramowania." 
url: /pl/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Zautomatyzuj przepływy pracy za pomocą bezpłatnego narzędzia wdrażania. Dowiemy się, jak konfigurować CI/CD z Jenkins Automation Server i GitHub w celu wdrażania oprogramowania.

{{< figure align=center src="images/ci-cd-post.png" alt="Ciągłe integracja i ciągłe wdrażanie">}}

Zespoły programistów używają różnych metod wdrażania oprogramowania, takich jak FTP, wyciąganie kodu z repozytorium i wiele innych. Wszystkie te metody są wykonywane ręcznie i wymagają dużo wysiłku. Widzimy, że więcej zespołów podąża za zwinną metodologią tworzenia oprogramowania. Tak więc często wydają nowe funkcje i naprawiania błędów. Dlatego automatyzacja przepływów pracy w zakresie dostarczania oprogramowania pomaga zespołom w szybkim i bez błędów wprowadzania nowych wersji. Dowiemy się, jak używać **CI/CD z Jenkins** i GitHub do automatyzacji procesu dostarczania oprogramowania. W tym artykule omówimy następujące sekcje.
* [ **Co to jest Jenkins?** ][1]
* [ **Ciągła integracja** ][2]
* [ **Ciągłe wdrażanie** ][3]
* [ **Skonfiguruj Jenkins** ][4]
* [ **Utwórz Jenkins Job** ][5]

## Co to jest Jenkins? {#Jenkins}

**Jenkins **to potężne** bezpłatne narzędzie wdrażania **do automatyzacji procesu dostarczania oprogramowania. Jest to serwer automatyki typu open source do budowania, testowania i wdrażania. Jenkins używa architektury mistrzów. Pozwala to zespołom oprogramowania na jednoczesne uruchamianie wielu kompilacji i testów oprogramowania. Ponadto dostępnych jest wiele wtyczek, a zespoły mogą je używać w razie potrzeby. Możesz odwiedzić stronę [** Jenkins**][6], aby uzyskać więcej informacji i instalacji. Ponadto można znaleźć kod źródłowy w Jenkins [** github**][7] repozytorium.

## Ciągła integracja {#CI}

**Ciągła integracja** to praktyka programistyczna, która wymaga od programistów często integracji kodu z wspólnym repozytorium. Każda integracja/pchnięcie kodu do repozytorium można zweryfikować za pomocą zautomatyzowanej kompilacji i testów. Umożliwia także programistom łatwą identyfikację problemów w kodzie.

## Ciągłe wdrażanie {#CD}

**Ciągłe wdrażanie** to następny krok po ciągłej integracji. Umożliwiłoby to zespołom ciągłe wdrażanie kodu na serwerze. Ponadto pomaga programistom ograniczyć powtarzające się zadania i zwiększa zwinność.

## Skonfiguruj Jenkins {#Configure}

Postępuj zgodnie z poniższymi wskazówkami dotyczącymi konfiguracji w Jenkins.
  * Otwórz witrynę Jenkins i zaloguj się.
  * Zainstaluj wtyczkę „Publikuj nad SSH”. Możesz go wyszukać, nawigując do „Zarządzaj Jenkins → Zarządzaj wtyczkami → Dostępne”.
  * Wygeneruj klucz SSH na serwerze kompilacji jako „Jenkins”, jak pokazano poniżej.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Połącz się z serwerem docelowym/wdrażania za pomocą SSH. Uruchom poniżej polecenie i wklej zawartość pliku pubu na docelowym serwerze.
```
$ cd .ssh
$ nano authorized_keys
```
  * Przejdź do zarządzania „Jenkins → Konfiguruj system → Publikuj nad SSH”.
  * Dodaj klawisz SSH albo zlokalizując ścieżkę pliku lub wklej tę samą zawartość, co wykonane dla serwera wdrażania.
  * Dodaj serwer SSH, klikając przycisk „Dodaj” obok „serwerów SSH”.
  * Wprowadź nazwę, nazwa hosta, nazwa użytkownika i zdalnego katalogu dla serwera wdrażania/docelowego.
  * Kliknij przycisk Konfiguracji testu, aby upewnić się, że Jenkins może połączyć się z serwerem wdrażania.
  * Na koniec kliknij przycisk Zapisz, aby przechowywać informacje.

## Stwórz pracę Jenkinsa {#Create}

Możesz użyć tych kroków do tworzenia pracy Jenkins.
  * Otwórz pulpit Jenkins i kliknij przycisk „Nowy element”.
  * Wprowadź nazwę projektu i wybierz „zadanie freestyle”.
  * Wprowadź adres URL repozytorium GitHub w „Windows konfiguracji”.
  * W sekcji „Środowisko kompilacji” sprawdź te opcje „Usuń obszar roboczy przed rozpoczęciem kompilacji” i „Wyślij pliki lub wykonaj polecenia nad SSH po uruchomieniu kompilacji”.
  * Wprowadź nazwę, pliki źródłowe i zdalny katalog w środowisku kompilacji.
  * Zapisz pracę i zbuduj go.
  * Podłącz się do serwera wdrażania i upewnij się, że jest tam kod.

## Wniosek
W tym artykule omówiliśmy **Jenkins Server**, **Ciągła integracja** i**Ciągłe wdrażanie** . Nauczyliśmy się również, jak skonfigurować narzędzie do wdrażania****i stworzyliśmy zadanie Jenkins do wdrażania za pomocą GitHub. Bezpłatne narzędzie CI/CD pozwala zespołowi programistów automatyzować przepływy pracy w zakresie dostarczania oprogramowania i koncentrować się na ważnych zadaniach. Będziemy obejmować inne narzędzia wdrażania na nadchodzących postach.
Wreszcie [ **Containerize.com**][8] opublikuje artykuły na temat dalszych narzędzi wdrażania open source. Dlatego prosimy o kontakt z [**narzędziami wdrażania** ][9] kategorii regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
* **[Jenkins][6]** 
* [ **dron** ][10]
* [ **wdrażacz** ][11]
* [ **Capistrano** ][12]
* [ **rancher** ][13]
* [ **Concourse** ][14]
* [ **ansible** ][15]
* [ **gocd** ][16]
* [ **Top 5 Narzędzia do wdrażania open source w 2021** ][17]
* [ **Automatyzuj wdrażanie aplikacji PHP z wdrażającym** ][18]



[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
