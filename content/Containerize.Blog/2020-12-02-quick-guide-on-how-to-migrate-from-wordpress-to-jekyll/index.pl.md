---
title: "Jak migrować z WordPress do Jekyll" 
seoTitle: "Jak migrować z WordPress do Jekyll" 
description: "W tym samouczku dowiemy się, jak migrować witrynę z WordPress do Jekyll w szybkich i łatwych krokach. Zacznijmy!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "W tym samouczku dowiemy się, jak migrować witrynę z WordPress do Jekyll i hostować ją z githubem bezpłatnie" 
url: /pl/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

Is

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress to Jekyll">}}

Jeykll to statyczny generator witryny typu open source. Przekształca twój zwykły tekst w statyczne strony internetowe i blogi. Występuje tekst napisany w twoim ulubionym znaczniku (Markdown, Liquid, HTML / CSS) i używa układów do tworzenia statycznej strony internetowej. Jekyll to blog świadome i permalinki, kategorie, strony, posty i niestandardowe układy to obywatele pierwszej klasy. Jedną z największych zalet Jekyll jest to, że możesz hostować swoją statyczną stronę internetową na stronach GitHub i uruchomić swoją stronę lub blog bezpłatnie. Tak więc WordPress to Jekyll Migracja może pomóc w poprawie wydajności i szybkości witryny.
W tym poście na blogu przejdziemy do migracji istniejącej strony internetowej lub blogu z WordPress do Jekyll, aby uzyskać lepszą szybkość i wydajność. Więc zacznijmy!
*  **[Dlaczego migrować?][1]**  
*  **[instalacja][2]**  
*  **[Importuj posty i strony WordPress do][3]**  
*  **[Wdrożenie ze stronami GitHub][4]**  
*  **[wniosek][5]**  

## Po co migrować? {#why}

W Jekyll możesz uzyskać 100/100 [wynik Lighthouse][6], ponieważ nie ma interakcji z bazą danych. Oraz cała zawartość jest wstępnie przetwarzana i zapisywana jako pliki HTML. I Jekyll będzie wymagał tylko minimalnej liczby żądań HTTP. Dlatego jest super szybki.

## Instalacja i konfiguracja Jekyll {#install}

Jekyll jest napisany w Ruby. Musisz więc zainstalować go najpierw na komputerze. Ten przewodnik zakłada, że ​​masz już zainstalowane Ruby na komputerze. Jeśli nie, możesz śledzić [oficjalny przewodnik][7].
Najpierw „  **JEKYL** ” i „  **Bundler**  ” klejnoty za pomocą polecenia „ **klejnot**  ”, które będą dostępne po zainstalowaniu Ruby. Otwórz wiersz poleceń i uruchom następujący kod.
```
gem install jekyll bundler
```
Następnie uruchom następujące polecenie, aby utworzyć świeżą stronę. To stworzy folder  **Myblog**  .
```
jekyll new myblog
```
Po zainstalowaniu możesz zbudować witrynę i udostępnić ją na serwerze lokalnym.
```
bundle exec jekyll serve
```
Witryna będzie dostępna na stronie http: // localhost: 4000. Generuje również folder „  **_ witryna**  ” w folderze, to to, co jest ostateczne wyjście witryny.

## Zaimportuj strony i posty WordPress {#import}

Dostępna jest również nieoficjalna wtyczka dla WordPress, ale postępujemy zgodnie z oficjalną metodą w tym samouczku. Jeśli chcesz podać wtyczkę Wordpess Exporter, możesz [przejść tutaj][8].
Aby zaimportować swoje posty z samookrytującej witryny WordPress, uruchom następujące polecenie na terminalu.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
To importuje tylko dane i treści Post i strony. Ten importer tylko przekształca twoje posty i tworzy front-matter YAML. Nie importuje żadnych układów, stylizacji ani plików zewnętrznych (obrazy, CSS itp.).

##  **Wdrożenie ze stronami Github**  {#deploy}

Jak dotąd stworzyliśmy nasz blog Jekyll lokalnie. Teraz zamierzamy go wdrożyć na GitHub. Przede wszystkim musimy kontrolować naszą witrynę za pomocą [git][9]. Uruchom następujące polecenia w folderze strony.
```
git init
git add .
git commit -m "Initial Commit"
```
Podczas instalowania Jekyll powinien automatycznie utworzyć plik „  **. Gitignore**  ” w korzeni z przynajmniej następującą zawartością.
Następnie zaloguj się do GitHub i utwórz nowe repozytorium YourName.github.io
Następnie skopiuj adres URL HTTPS repozytorium.

{{< figure align=center src="images/github-img.png" alt="URL Github HTTPS">}}

Następnie dodaj zdalne repozytorium i popchnij kod.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Zrobione! Twoja witryna musi być teraz dostępna na twojej nazwie.github.io

## Wniosek {#conclusion}

W tym artykule nauczyliśmy się budować statyczny blog z witrynami Jekyll. Następnie nauczyliśmy się eksportować swoje posty i strony z WordPress do Jekyll. I wreszcie wdrożyliśmy ostatnią stronę na stronach GitHub.



 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/
