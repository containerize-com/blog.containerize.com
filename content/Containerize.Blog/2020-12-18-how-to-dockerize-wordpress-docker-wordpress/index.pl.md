---
title: "Jak dokeryzować WordPress | Docker WordPress" 
seoTitle: "Jak dokeryzować WordPress | Docker WordPress" 
description: "Co to jest Docker & Docker? W tym artykule dowiemy się, jak zainstalować Docker, Docker Compose i jak dokeryzować WordPress w kontener Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Oprogramowanie kontenerowe pakuje aplikację, jej zależności i sprawia, że ​​aplikacja jest działana w dowolnym środowisku obliczeniowym. Dowiedzmy się, jak dokeryzować WordPress." 
url: /pl/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Oprogramowanie kontenerowe pakuje aplikację, jej zależności i spraw, aby aplikacja działała w dowolnym środowisku obliczeniowym. Dowiedzmy się, jak dokeryzować WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Przegląd
Witamy w innym poście na blogu w kategorii oprogramowania open source oprogramowania [1]. Opublikowaliśmy kilka artykułów na takie tematy, jak [zwiększ swoje potencjalne potencjalne integracja WordPress][2], [Jak zbudować swoją stronę internetową za pomocą WordPress i Gatsby][3] i więcej. Jednak w tym artykule przyniesie dalsze informacje i szczegółowe informacje na temat platform blogowych typu open source i **oprogramowania kontenerowego**. Przejdziemy kilka gorących pytań, takich jak Docker i**Jak zainstalować komponowanie Docker** , i nauczymy się, jak dokeryzować WordPress.
Konteneralizacja stała się głównym trendem w tworzeniu oprogramowania jako alternatywa dla wirtualizacji. Obejmuje to kapsułkowanie lub pakowanie kodu oprogramowania i wszystkich jego zależności, aby mógł konsekwentnie działać na dowolnej infrastrukturze. Konteneralizacja pozwala programistom szybciej i bezpieczniej tworzyć aplikacje i bezpieczniej. Docker jest najpopularniejszą aplikacją kontenerową używaną w społeczności programistów. W tym samouczku nauczymy się, jak dokeryzować WordPress za pomocą Docker Compose. Zacznijmy więc od następujących punktów.
* [ **Co to jest Docker?** ][4]
* [ **Dlaczego musisz dokeryzować WordPress** ?][5]
* **[Jak zainstalować komponuj Docker][6]** 
* **[Dockerize WordPress][7]** 
* **[wniosek][8]** 

## Co to jest Docker? {#docker}

Krótko mówiąc, Docker to oprogramowanie do kontenerów Open-Source**, które szybciej i lżejsze wirtualizację. Jest tak lekki, że pojemnik Docker można uruchomić w ciągu zaledwie kilku sekund. I możesz łatwo uruchomić dziesiątki kontenerów Docker na jednym komputerze. Deweloperzy używają Dockera do tworzenia, wdrażania i uruchamiania aplikacji za pomocą kontenerów. Kontenery pozwalają programistowi pakować aplikację ze wszystkimi potrzebnymi częściami, takimi jak biblioteki i inne zależności, oraz wdrożyć ją jako jeden pakiet. W ten sposób deweloper może mieć pewność, że aplikacja będzie działać na dowolnej infrastrukturze. Ponadto istnieje ogromny programista i społeczność wsparcia, która zawsze żyje, aby zapewnić najwyższą pomoc w każdym znaczeniu. Docker stał się niezbędnym elementem każdego przedsiębiorstwa oprogramowania ze względu na jego potężne funkcje i zastosowania.

## Dlaczego musisz dokeryzować WordPress? {#why}

W tej sekcji dowiemy się o potrzebie dokera WordPress. WordPress to najważniejsze oprogramowanie do blogowania typu open source, które jest wysoko przyjęte przez świat technologii. Jednak aby uruchomić WordPress lokalnie, potrzebujesz Apache/Nginx, MySQL Server, PHP i tony innych zależności. A wdrażanie w środowisku inscenizacji lub produkcji jest koszmarem, jeśli chodzi o zarządzanie tymi zależnościami. Czasami staje się kłopotliwe dla programistów i inżynierów wsparcia wielokrotnie powtarzanie wdrożeń, ponieważ wymaga czasu i siły roboczej.
Tak więc konteneryzacja może ci w tym pomóc. Wszystko, czego potrzebujesz, to Docker - sama instalacja zajmuje kilka sekund i nie jest wymagana żadna dodatkowa konfiguracja
Bez względu na to, czy jest to maszyna, scena lub serwer na żywo i jaki to jest system operacyjny, Docker działa wszędzie tak samo. Oznacza to, że nie będziesz musiał szukać błędów, które, powiedzmy, pojawiają się w jednym środowisku i nie można ich odtworzyć w innym.

## Jak zainstalować komponowanie Docker {#install}


### Wymagania wstępne
Możesz użyć Docker Compose, aby łatwo uruchomić WordPress w izolowanym środowisku zbudowanym z kontenerami Docker. Ten przewodnik pokazuje, jak używać Compose do konfigurowania i uruchamiania WordPress.
Docker Compose opiera się na silniku Docker, więc upewnij się, że zainstalowałeś silnik Docker. Na systemach stacjonarnych, takich jak Docker Desktop dla komputerów Mac i Windows, Docker Compose jest zawarty w ramach instalacji komputerów stacjonarnych. Jednak najpierw w systemach Linux zainstaluj silnik Docker, śledząc ich [oficjalny przewodnik][9].

### Zainstaluj kompozycję w Linux
Uruchom to polecenie, aby pobrać bieżącą stabilną wersję Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Zastosuj uprawnienia do wykonywalnego do binarnego:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Instalacja testowa przez uruchamianie polecenia wersji:
```
docker-compose --version
```

### Zdefiniuj plik Docker dla WordPress
Pierwszą rzeczą, którą musimy zrobić, jest zdefiniowanie, jak będzie wyglądał nasz obraz w **_ DockerFile _** . Jest to plik tekstowy dodawany do katalogu ze źródłami aplikacji.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
„ **/var/www/html/WordPress** ” będzie zawierać pełną zawartość WordPress wraz z motywami, wtyczkami i zawartością. Jeśli repozytorium zawiera tylko motyw lub wtyczkę, po prostu dodaj odpowiedni folder.
Utwórz plik Docker-Compose.yml, który uruchamia blog WordPress i osobną instancję MySQL z mocowaniem woluminu dla trwałości danych:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Teraz uruchom polecenie w swoim katalogu projektu
```
docker-compose up -d
```
To działa **_ Docker-Compose Up _** W trybie odłączonym pobiera potrzebne obrazy Docker i uruchamia kontenery WordPress i bazy danych.
Po rozpoczęciu kontenerów możesz otworzyć adres URL w przeglądarce internetowej i zacząć korzystać z aplikacji:
```
http://localhost:8000
```

## Wniosek {#conclusion}

To prowadzi nas do końca tego postu na blogu. W tym artykule dowiedzieliśmy się o tym, co jest Docker, **Jak zainstalować Docker Compose** . Nauczyliśmy się również, jak dokeryzować WordPress za pomocą kompozycji Docker. Ponadto wprowadziliśmy Cię do koncepcji za Dockerem i tym, jak możesz zdefiniować proste aplikacje wielokontainowe. Jednak to oprogramowanie do kontenerów open source**jest wiodącą opcją dla wszystkich organizacji oprogramowania. Dlatego ten artykuł naprawdę pomoże ci, jeśli chcesz zdecydować się na Docker do swoich aplikacji. Istnieje wiele innych istotnych artykułów i oprogramowania do blogowania wymienionych w sekcji „Explore” poniżej.
Wreszcie [Containerize.com][10] pisze artykuły na temat dalszych produktów typu open source. Dlatego prosimy o kontakt z kategorią [blogowania][1] w celu regularnych wiadomości i aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][11], [LinkedIn][12] i [Twitter][13].

## Badać
Możesz znaleźć istotne następujące linki:
  * [WordPress][14]
  * [Jekyll][15]
  * [Dyskurs][16]
  * [Ghost][17]
  * [Jak dokeryzować WordPress z Docker Compose][18]
  * [Zwiększ swoje leady za pomocą bezpłatnej integracji WordPress Civicrm][2]
  * [Zautomatyzuj system biletów za pomocą WordPress i Osticket][19]
  * [Jak zintegrować forum dyskursu z WordPress][20]
  * [Zwiększ ruch wyszukiwania strony internetowej, obserwując 7 najlepszych blogów SEO][21]
  * [Jak zbudować swoją stronę internetową za pomocą WordPress i Gatsby][3]
  * [Jak włączyć kompresję GZIP w WordPress dla lepszej pagspeed i SEO][22]



[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/pl/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
