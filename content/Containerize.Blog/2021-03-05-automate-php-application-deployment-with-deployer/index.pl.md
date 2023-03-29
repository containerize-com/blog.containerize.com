---
title: "Zautomatyzuj wdrażanie aplikacji PHP z wdrażającym" 
seoTitle: "Zautomatyzuj wdrażanie aplikacji PHP z wdrażającym" 
description: "Wdrażaj aplikację PHP za pomocą narzędzia wdrażania open source i automatyzuj przepływy pracy wdrażania. Łatwo wydawać funkcje i cofanie się do poprzedniej wersji." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Zautomatyzuj proces wdrażania aplikacji PHP za pomocą narzędzia do wdrażania PHP. Dowiemy się, jak konfigurować wdrażacz i użyć go do wdrażania aplikacji PHP." 
url: /pl/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Zautomatyzuj proces wdrażania aplikacji PHP za pomocą narzędzia do wdrażania PHP. Dowiemy się, jak konfigurować wdrażacz i użyć go do wdrażania aplikacji PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Narzędzie wdrażania PHP">}}

Jest to bardzo krytyczne zadanie do wdrażania aplikacji na serwerze po opracowaniu. Nowe funkcje i poprawki błędów są często wydawane przez zespoły. Dlatego zespoły są lepsze do eliminowania pracy ręcznej i zautomatyzowania procesu  **wdrażania oprogramowania** . Pozwoliłoby to zespołom oprogramowania skoncentrować się na ważniejszych zadaniach. Istnieje kilka **narzędzie wdrażania open source**  , ale w tym samouczku skoncentrujemy się na**PHP. W tym poście omówimy następującą sekcję.
* [  **What Is wdrażający**  ][1]
* [  **Instalowanie wdrażającego**  ][2]
* [  **Wdrażaj aplikację PHP**  ][3]
* [  **Wniosek**  ][4]

## Co to jest wdrażający {#What}

[  **Wdrażnik** ][5] to narzędzie do wdrażania PHP  **wdrażania php**  . Umożliwia zespołom oprogramowania do automatyzacji przepływów pracy wdrażania dla aplikacji opartych na PHP. Jest bardzo prosty w instalacji i łatwy w użyciu. Każdy, kto od początku do początku do ekspertów może szybko wykorzystać go do wdrażania aplikacji PHP. Wdrożenie jest wyposażone w przepisy/scenariusze nie-pudełkowe dla popularnych ram PHP, CMS i oprogramowania do koszyków. Ponadto możesz zrobić  **Laravel wdrożenie**  z tym  **narzędziem wdrażania open source**  . Deweloper może wykorzystać wbudowane przepisy do swoich projektów i korzystać z nich do wdrażania. Ponadto możesz łatwo utworzyć skrypt instalacji/wdrożyć za pomocą kreatora  **PHP**  . Ponadto to **narzędzie do wdrażania bezpłatnego**  oferuje doskonałe funkcje, takie jak wdrożenia zero-downTime, wycofanie w poprzedniej wersji, SSH, równoległe wykonanie i wiele innych.

## Instalowanie wdrażającego {#Installing}

  * Wdrożenie zależy od PHP. Powinieneś upewnić się, że PHP działa na twoim serwerze. Możesz jednak użyć poniższego polecenia do instalacji PHP na Ubuntu.
```
sudo apt-get install php
```
  * Uruchom poniżej polecenia jeden po drugim, aby zainstalować wdrażacz.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Wdrożenie aplikacji PHP {#Deploy}

Postępuj zgodnie z wytycznymi krok po kroku, aby  **wdrożyć aplikację PHP**  z wdrażnikiem.
  * Utwórz katalog dla wdrażającego i przejdź do nowo utworzonego katalogu.
```
sudo mkdir deployer
cd deployer
```
  * Uruchom poniższe polecenie, aby wygenerować skrypt instalacyjny
```
dep init
```
  * Zostaniesz poproszony o poniższy ekran. Jest to kreator wdrażający do tworzenia podstawowego skryptu instalacji.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Po pierwsze, musisz wybrać typ projektu, wprowadzając numer. Możesz wprowadzić 0, jeśli nie jesteś pewien typu projektu lub po prostu zapoznanie się z wdrożeniem.
  * Po drugie, musisz podać ścieżkę repozytorium GIT. To opcjonalny krok, możesz go pominąć i dodać ścieżkę później.
  * W ostatnim etapie możesz udostępniać informacje społeczności Dyploener, wybierając tak lub wprowadzić nie, aby je pominąć.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
Musisz zmienić następujące zmienne w celu wdrożenia aplikacji PHP.
*  **SET („Application”, „my_project”);**  - Ustaw nazwę aplikacji.
*  **set („repozytorium”, ”);**  -Ustaw ścieżkę repozytorium GIT, taką jak„ git@github.com: masood/pierwsza-app-with-dployer.git ”. Musisz ustawić klawisz wdrażania w swoim repozytorium GitHub. Możesz wyszukać, jak utworzyć klucz SSH na serwerze, jeśli nie znasz go.
***Host („Project.com”)
    -> set („wdrażanie_path”, „~/{{Application}}”);**-Ustaw nazwę projektu i zdefiniuj ścieżkę tam, gdzie chcesz przechowywać pliki dla swojej aplikacji. Wyglądałoby to jak/var/www/html/wdrożenie.
Na koniec uruchom poniższe polecenie, aby wdrożyć aplikację PHP.
```
dep deployer
```
Jeśli znajdziesz jakieś problemy z nową wersją i chcesz cofać zmiany. Możesz to zrobić, po prostu uruchamiając poniższe polecenie.
```
dep rollback
```

## Wniosek {#Wniosek}

Omówiliśmy o wdrożeniu i sposobie go zainstalowania w tym samouczku. Ponadto stworzyliśmy pełne wytyczne dotyczące wdrażania aplikacji opartej na PHP z repozytorium GitHub. Mamy nadzieję, że ten post na blogu pomoże Ci uruchomić  **wdrażanie aplikacji PHP** z wdrażnikiem. Ponadto napiszemy więcej o tym **narzędzie do wdrażania PHP**  w nadchodzących samouczkach.
Wreszcie [  **Containerize.com** ][6] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [ **narzędzi wdrażania**  ][7] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
* [  **wdrażacz**  ][8]
* [  **Jenkins**  ][9]
* [  **dron**  ][10]
* [  **Capistrano**  ][11]
* [  **rancher**  ][12]
* [  **Concourse**  ][13]
* [  **ansible**  ][14]
* [  **gocd**  ][15]
* [  **Top 5 Narzędzia do wdrażania open source w 2021**  ][16]
* [  **Ciągłe integracja i ciągłe wdrażanie z serwera kontroli źródła**  ][17]



 [1]: #What
 [2]: #Installing
 [3]: #Deploy
 [4]: #Conclusion
 [5]: https://deployer.org/
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/deployment-tools/
 [8]: https://products.containerize.com/deployment-tools/deployer
 [9]: https://products.containerize.com/deployment-tools/jenkins/
 [10]: https://products.containerize.com/deployment-tools/drone/
 [11]: https://products.containerize.com/deployment-tools/capistrano/
 [12]: https://products.containerize.com/deployment-tools/rancher/
 [13]: https://products.containerize.com/deployment-tools/concourse/
 [14]: https://products.containerize.com/deployment-tools/ansible/
 [15]: https://products.containerize.com/deployment-tools/gocd/
 [16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
 [17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
