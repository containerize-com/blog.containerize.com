---
title: "Jak skonfigurować rozwiązanie CMDB Ralph na LocalHost" 
seoTitle: "Jak skonfigurować rozwiązanie CMDB Ralph na LocalHost" 
description: "Ten samouczek polega na założeniu Ralpha na LocalHost. Ralph to bezpłatne rozwiązanie CMDB, które zapewnia funkcje śledzenia zasobów i konfiguracji." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "Rozwiązanie zarządzania zasobami IT zmniejsza koszty operacyjne i zwiększa wydajność. Ten artykuł dotyczy skonfigurowania oprogramowania CMDB Ralph na lokalnym komputerze." 
url: /pl/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## Rozwiązanie zarządzania zasobami IT zmniejsza koszty operacyjne i zwiększa wydajność. Ten artykuł dotyczy skonfigurowania oprogramowania CMDB Ralph na lokalnym komputerze.

{{< figure align=center src="images/ralph.png" alt="Rozwiązanie CMDB">}}


##  **Przegląd**  
W obecnym momencie organizacje kwitną, aby spełnić tempo technologii, stosując ogromną infrastrukturę IT. Następnie zarządzanie tak ogromnymi środowiskami jest nie mniej niż wyzwanie. Wymaga siły roboczej i siły technologicznej, aby wykonywać tak krytyczne zadania. Czasami staje się kłopotem ze sformułowaniem procesów i procedur w zakresie obsługi złożonych sieci systemów, które zawierają drukarki, komputery stacjonarne, skanery, telefony i inne akcesoria IT. Podobnie konfiguracje tych węzłów są również ważne, ponieważ istnieją duże szanse na przestoje dowolnego komputera w sieci. Dlatego powinno istnieć spójne sprawdzanie tych konfiguracji.
Istnieje jednak wiele dostępnych oprogramowania typu open source i bezpłatnych, aby śledzić i rejestrować zasoby. To oprogramowanie jest znane jako oprogramowanie do bazy danych zarządzania konfiguracją (CMDB). Niedawno [Containerize.com][1] opublikował rozwiązanie CMDB [Ralph][2], które zapewnia wiele funkcji dla lepszych zasobów i zarządzania konfiguracją. W tym poście na blogu zbadamy Ralpha, obejmując następujące punkty.
*  **[Krótkie wprowadzenie CMDB Software Asset Management Ralph][3]**  
*  **[Funkcje Ralpha][4]**  
*  **[Jak skonfigurować Ralph na LocalHost?][5]**  
*  **[wniosek][6]**  

## Krótkie wprowadzenie CMDB Software Asset Management Ralph {#intro}

Ralph jest bezpłatnym rozwiązaniem do zarządzania zasobami typu open source. Jest wieloplatformowy i ma możliwości samowystarczające. Istnieje pełny ekosystem śledzenia aktywów w czasie rzeczywistym. Dlatego użytkownicy mogą przeprowadzić analizę raportowania. Umożliwia użytkownikom rejestrowanie szczegółów zasobów na temat ich cyklu życia. Ponadto to oprogramowanie do zarządzania zasobami cyfrowymi typu open source zapewnia miejsce do przechowywania informacji o zasobach centrum danych. Z drugiej strony to rozwiązanie CMDB zapewnia również obsługę zarządzania oprogramowaniem, licencją, certyfikatami i innymi umowami. Ralph nie tylko obsługuje zarządzanie zasobami, ale także zapewnia przepisy dotyczące działań na temat tych aktywów. Jednak działania są związane z wdrażaniem hosta, generowaniem faktur, śledzenia domeny lub zarządzania zapasami.
To rozwiązanie do zarządzania zasobami IT wiąże się z interfejsem RESTful. Deweloperzy mogą zintegrować wiele aplikacji stron trzecich przy użyciu punktów końcowych API ujawnionych przez to narzędzie wolne od open source. Ponadto Ralph jest napisany w Pythonie wraz z wejściem HTML, CSS i JavaScript. Dlatego dostępna jest kompleksowa dokumentacja dotycząca rozwoju i wdrażania. Kod źródłowy tego rozwiązania do zarządzania zapasami jest dostępny na [GitHub][7].

## Cechy Ralpha {#features}

Ralph oferuje wiele funkcji. Wymienimy jednak niektóre z następujących kluczowych funkcji.
 **Rozszerzalny** : To oprogramowanie do zarządzania zasobami cyfrowymi typu open source jest wysoce rozszerzalne. Deweloperzy mogą wdrażać go na lokalu lub na chmurze zgodnie z ich potrzebami.
 **Obsługa centrów danych:**  Ralph oferuje również obsługę hurtowni danych, pokoi centrów danych, serwerów i stojaków. Użytkownicy mogą śledzić wszystkie komponenty, ich sieć i konfiguracje.
 **API REST** : To bezpłatne oprogramowanie CMDB jest wysoce konfigurowalne. W rzeczywistości zapewnia interfejs API REST dla integracji stron trzecich. Deweloperzy mogą to rozszerzyć zgodnie z ich wymaganiami.
 **Intuicyjny interfejs użytkownika:**  Istnieje logiczny interfejs użytkownika dostępny w tym rozwiązaniu CMDB, w którym użytkownicy mogą łatwo nawigować. Ponadto desca rozdzielcza administratora zapewnia różne widżety, które pokazują dane w czasie rzeczywistym.
 **Interfejs wiersza poleceń** : Ralph wymyśla interfejs wiersza poleceń, który zapewnia obiekt do odkrywania adresów MAC do wdrażania hostów.
 **Wsparcie dla aktywów niefizycznych** : To rozwiązanie zarządzania sprzętem zapewnia nie tylko obsługę aktywów fizycznych, ale także zarządza zasobami niefizycznymi, takimi jak domeny, oprogramowanie i licencje.

## Jak ustawić Ralpha na LocalHost? {#setup}

W tej sekcji przejdziemy proces instalacji oprogramowania do zarządzania zasobami Ralph na komputerze lokalnym. Jest dość łatwy do skonfigurowania i użycia.
Przed przejściem do następnej sekcji upewnij się, że zainstalowałeś następujące warunki wstępne.
  * [Kompozycja dokera][8]
  * [Docker][9]
Większość oprogramowania typu open source oferuje obrazy Docker dla wdrożeń na różnych platformach. Daje to łatwości programistom i przyspiesza proces rozwoju i wdrażania.
Po zainstalowaniu warunków wstępnych włącz Docker. Teraz otwórz terminal i uruchom następujące polecenie, aby stworzyć pusty katalog:
```
mkdir ralph<br>cd ralph
```
Następnie zrób nowy plik o nazwie „Docker-Compose.yml” i wypełnij go następującymi danymi.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Teraz zapisz plik i uruchom następujące polecenie, aby wykonać kompilację:
```
docker-compose build

```
Po udanej kompilacji uruchom następujące polecenie dla bazy danych:
```
docker-compose run –rm web /root/init.sh

```
Jeśli wszystko pójdzie dobrze, uruchom następujące polecenie, aby zakręcić pojemnik dokera:
```
docker-compose up -d
```
Po uruchomieniu tego polecenia kontenery Docker będą uruchomione, jak pokazano na poniższym obrazku:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Rozwiązanie CMDB">}}

Na koniec otwórz przeglądarkę i uzyskaj dostęp do aplikacji pod tym adresem http://127.0.0.1.
Pokazuje stronę logowania, jak pokazano na poniższym obrazku:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Rozwiązanie CMDB">}}


## Wniosek {#Wniosek}

Po przejrzeniu tego postu na blogu CMDB jedno jest jasne, że zarządzanie aktywami jest prawie niemożliwe bez dobrego rozwiązania CMDB. Oprogramowanie do zarządzania zasobami ma specyficzne role w zarządzaniu i śledzeniem zasobów, konfiguracji i ich relacjach. Istnieją przepisy dotyczące śledzenia zmian, które są ledwo dokonywane na zasobach cyfrowych lub fizycznych. Te bezpłatne narzędzia są łatwe do skonfigurowania, korzystania i dostarczania szczegółowej dokumentacji i wskazówek. Wreszcie [  **Containerize.com** ][1] ma na celu pisanie artykułów na temat dalszych produktów open source. Dlatego prosimy o kontakt z tym [][10] **[Oprogramowanie CMDB][11]**  w celu uzyskania najnowszych aktualizacji.

## Badać
*  **[oprogramowanie CMDB][11]**  
*  **[Ralph][2]**  
* [  **Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source**  ][12]
*  **[Trendy rozwoju oprogramowania, na które należy zwrócić uwagę w 2021 r.][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
