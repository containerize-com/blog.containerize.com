---
title: "Gitlab ciągłe wdrażanie | Jak to działa?" 
seoTitle: "Gitlab ciągłe wdrażanie | Jak to działa?" 
description: "W tym samouczku zbudujemy rurociąg ciągłego wdrażania z Gitlabem. Ciągłe wdrażanie GITLAB pomaga DevOps przeprowadzić zautomatyzowane wdrożenie." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Zautomatyzowane wdrożenie usprawnia Twój przepływ pracy i wzmacniacz; procesy. Ten samouczek Gitlab pomaga nauczyć się konfigurować rurociąg ciągłego wdrażania przy użyciu Gitlab CI/CD." 
url: /pl/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Zautomatyzowane wdrożenie usprawnia przepływ pracy i procesy. Ten samouczek Gitlab pomaga nauczyć się konfigurować rurociąg ciągłego wdrażania przy użyciu Gitlab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Ciągłe wdrażanie Gitlab">}}


## Przegląd
W ostatnich kilku artykułach dowiedzieliśmy się o [podstawach kontroli wersji][1], a następnie wzmocniliśmy naszą wiedzę, poznając różne [modele rozgałęzienia][2] i przepływy pracy. System kontroli wersji przyniósł wydajność w świecie rozwoju, wdrażania i integracji. Deweloperzy mają bardzo łatwo popełnić kod źródłowy, nie martwiąc się o kompilacje i testy. Branża oprogramowania zyskała zaufanie i przewagę konkurencyjną, ponieważ podejście to uruchomiło wdrożenia.
**Ciągłe wdrażanie GITLAB** i integracja pomaga w łatwym znalezieniu problemów. Ponadto programiści mogą śledzić błędy i inne miss w krótszym czasie. Cały proces automatyzacji daje swobodę od zadań, które odbywają się często i zmniejsza siłę roboczą i szanse na błędy. Dzisiaj w tym poście na blogu zbadamy o ciągłym wdrażaniu rurociągu z Gitlab CI/CD. Zacznijmy więc od pokrycia następujących punktów!
* **[Co to jest CI & CD][3]** 
* **[Co to jest biegacz gitlab][4]** 
* **[. GITLAB-CI.YML Plik][5]** 
* **[Utwórz podstawową przykładową aplikację][6]** 
* **[wniosek][7]** 

## Co to jest CI i CD {#cicd}

Ciągła integracja (CI) jest jedną z najlepszych praktyk DevOps polegających na automatyzacji integracji zmian kodu z wielu autorów do jednego projektu oprogramowania. Umożliwia to programistom często łączenie zmian kodu w centralne repozytorium, w którym następnie uruchamiane są kompilacje i testy. Ciągłe wdrażanie (CD) porusza się o krok dalej, automatycznie wdrażając kod w środowisku docelowym (produkcja lub inscenizacja) po tym, jak każdy kod popełnia i buduje.
Zanim zaczniesz, upewnij się, że masz projekt w Gitlab, do którego chcesz użyć CI/CD. Powinieneś mieć dostęp do opiekuna lub właściciela do projektu.

## Co to jest biegacz gitlab {#runner}

Po zrozumieniu **GITLAB Ciągłe wdrażanie** , Gitlab Runner to mały lekki program napisany w Go, który uruchamia zadania związane z ciągłą integracją (CI) na komputerze lokalnym i wysyła wyniki do Gitlab, aby rozważyć zmiany. Jest to pojedynczy binarny wykonywalny, który można zainstalować na dowolnym głównym systemie operacyjnym.
Zanim przejdziemy do przodu z Gitlab CD / CD, musisz upewnić się, że masz dostępnych biegaczy do uruchamiania swoich zadań. Możesz postępować zgodnie z oficjalnym przewodnikiem [instalacji][8] i [rejestru][9] Gitlab Runner.

## .gitlab-ci.yml {#yml}

**. Gitlab-ci.yml**to plik, w którym konfigurujesz określone instrukcje dla Gitlab CI/CD. Jest umieszczony w korzeni repozytorium i zawiera definicje tego, jak należy budować Twój projekt. Za każdym razem, gdy naciskamy na naszą instancję Gitlab, Gitlab wywołał biegacza do zbudowania i przetestowania projektu zgodnie z instrukcją tego pliku.

## Utwórz przykładową aplikację {#sample}

W sekcji tego samouczka **Gitlab** utworzymy przykładową aplikację. Zakładając, że utworzyłeś już repozytorium GitLab, utwórzmy przykładową aplikację, a my skonfigurujemy proces CI / CD dla aplikacji.
Przede wszystkim utwórz plik pakietu.json u podstaw swojego projektu
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Teraz utwórz app.js u podstaw swojego projektu
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
W ostatnim etapie **gitlab ciągłe wdrażanie**Utwórz**PLIFILE** i dodaj do niego następujące treści:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFile zawiera proces kompilacji tej aplikacji. Polega na tworzeniu kontenera węzłów i instalacji zależności.
Teraz musimy utworzyć plik **. Gitlab-ci.yml** . Ten plik zawierałby instrukcje budowania naszego projektu. Za każdym razem, gdy naciskamy na nasze repozytorium Gitlab, Gitlab wywołał biegacza do zbudowania projektu.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Mamy tylko jedno sceniczne kompilacja i ma on po prostu **instalację NPM** jako skrypt. Jest to polecenie, które musisz ręcznie uruchomić za każdym razem, gdy zmiana wchodzi w Twój projekt. I właśnie tam wchodzi biegacz Gitlab i zrobiłby to dla ciebie automatycznie za każdym razem, gdy się podejmiesz.
Zakładając teraz, że zainstalowałeś już Gitlab Runner, a także zarejestrowałeś go w instancji Gitlab, możemy przetestować Gitlab CI / CD w akcji, podejmując proste zobowiązanie do aplikacji i naciskając ją do Gitlab.
Następnie możesz otworzyć swój projekt w Gitlab, przejść do My-Project → Pipeline, a zobaczysz tag z napisem „przekazany” obok dokonanego zobowiązania. Kolejne zobowiązania będą miały również tagi.

## Wniosek {#conclusion}

To prowadzi nas do końca tego **samouczka Gitlab**. W tym artykule dowiedzieliśmy się o podstawach ciągłej integracji Gitlab, **What Is CI & CD** , **What Is Gitlab Runner** i ciągłe wdrażanie. Ponadto zbadaliśmy, jaki jest wykorzystanie biegaczy w ogólnym przepływie pracy CI / CD. Stworzyliśmy również przykładowy projekt, który wyjaśnia, jak skonfigurować ciągłe wdrażanie za pomocą GitLab. Ten samouczek Gitlab naprawdę ci pomoże, jeśli szukasz**Gitlab Ciągłe wdrażanie** . Istnieje jednak wiele innych zasobów wymienionych w poniższej sekcji „Przeglądaj”, które możesz sprawdzić. Ponadto artykuły dotyczą systemów kontroli wersji****, które są open source, samodzielne i rozszerzalne.
Wreszcie [Containerize.com][10] ciągle pisze posty na blogu na temat dalszych produktów i tematów open source. Dlatego prosimy o kontakt z kategorią [][11][oprogramowanie do kontroli wersji][12] w celu regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][13], [LinkedIn][14] i [Twitter][15].

## Badać
Możesz znaleźć istotne następujące linki:
  * [Zautomatyzuj przepływy tworzenia oprogramowania z działaniami GitHub][16]
  * [Zrozum i poznaj gałęzie i ciągnij prośby w git][2]
  * [Oprogramowanie do zarządzania kodem źródłowym | Co to jest git?][17]
  * [Top 5 systemów sterowania wersją open source w 2021 r.][18]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
