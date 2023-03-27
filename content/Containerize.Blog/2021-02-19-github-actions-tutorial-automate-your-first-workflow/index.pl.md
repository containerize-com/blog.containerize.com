---
title: "Samouczek Github Działania | Zautomatyzuj swój pierwszy przepływ pracy" 
seoTitle: "Samouczek Github Działania | Zautomatyzuj swój pierwszy przepływ pracy" 
description: "Postępuj zgodnie z tym samouczkiem GitHub Actions, aby zbadać, w jaki sposób możemy wykorzystać działania GitHub do automatyzacji i realizacji naszych przepływów pracy oprogramowania z naszego repozytorium." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub wprowadził działania GitHub, które pozwalają skonfigurować ciągłą integrację & amp; Ciągłe wdrażanie za pomocą pliku konfiguracyjnego w repozytorium GitHub." 
url: /pl/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub wprowadził działania GitHub, które umożliwiają skonfigurowanie ciągłej integracji i ciągłego wdrażania za pomocą pliku konfiguracyjnego w repozytorium GitHub.

{{< figure align=center src="images/github-actions-workflows.png" alt="Samouczek Github Działania">}}


## Przegląd
Jednym z najlepszych sposobów zwiększenia wydajności w projekcie oprogramowania jest zautomatyzowanie wszystkiego ręcznego lub powtarzalnego. I możesz być zaskoczony, jak łatwa automatyzacja jest wdrożenie, gdy używasz niesamowitego narzędzia, takiego jak **Github Actions** . Od kilku ostatnich artykułów piszę o [git][1], [kontrola wersji][1] i [automatyzacja przepływów pracy oprogramowania][2] oraz o [ciągłej integracji i ciągłej dostarczaniu][3 ]. Mam nadzieję, że już dobrze zdajesz sobie sprawę z repozytoriów i sposobu ich używania.
W dzisiejszym samouczku **Github Actions** będziemy eksplorować działania GitHub i sposób, w jaki możesz je używać do automatyzacji aplikacji, dostosowywania i realizacji przepływów pracy programistycznej w repozytorium. Więc zacznijmy
* **[Przegląd przepływów pracy CI/CD][4]** 
* **[Co to są działania Github][5]** 
* **[Zrozumienie składni YAML][6]** 
* **[Tworzenie pierwszego przepływu pracy][7]** 
* **[wniosek][8]** 

## Przepływy pracy CI/CD {#cicd}

CI/CD jest metodą częstego wdrażania projektów tworzenia oprogramowania dla użytkowników końcowych w różnych etapach za pomocą automatyzacji. **Ciągłe integracja i ciągłe wdrażanie** jest bardziej filozofią i jedną z najlepszych praktyk dla zespołów DevOps, aby wdrożyć zmiany kodu częściej i niezawodnie.
**Ciągła integracja** to zestaw praktyk, które zachęca zespoły programistów do często sprawdzania kodu w celu kontroli wersji repozytoriów. I dla każdego popychania do repozytorium możesz utworzyć zestaw skryptów do automatycznego budowania i testowania aplikacji. Te skrypty pomagają zmniejszyć szanse wprowadzenia błędów w aplikacji.
**Ciągłe wdrażanie** to krok naprzód w przepływie pracy CI/CD. Nie tylko zbuduje i testuje aplikację za każdym razem, gdy zmiana kodu jest przesuwana do bazy kodowej, ale aplikacja jest również wdrażana w sposób ciągły na serwerze.

## Jakie są działania github {#github-actions}

W sekcji tego samouczka Github Actions dowiemy się, czym są **działania Github** . Jednak działania GitHub są interfejsem API przyczyny i wpływu na GitHub. Ułatwia to automatyzację wszystkich przepływów pracy oprogramowania, teraz z CI/CD. Możesz zaprojektować dowolny przepływ pracy, na podstawie każdego zdarzenia, np. (Push do gałęzi, żądanie pociągnięcia itp.), Podczas gdy Github zarządza wykonaniem. Jednak nie musisz samodzielnie pisać działań. Github ma wbudowany rynek, w którym ludzie mogą znaleźć działania stworzone przez innych ludzi, i ponownie je wykorzystać, jeśli spełnia ich potrzeby. Github Actions obsługuje Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET i wiele innych. Buduj, testuj i wdrażaj aplikacje w wybranym języku.

## Składnia YAML {#yaml}

Najpierw zapoznajmy się z składniami i terminologami **Github Actions** .
* **przepływ pracy:** Ponieważ działanie GitHub zapewnia obiekt do budowy end-to-end**Ciągłe integracja i ciągłe wdrażanie** , termin ten odnosi się do tego punktu, gdy przepływ zaczyna wykonywać przez narzędzie CI.
* **Zadanie** : Ten termin odnosi się do wszystkich zadań w jednym przepływie pracy. Przepływ pracy zawiera więcej niż jedno zadanie i wymagane jest ukończenie ich wykonania, aby zapobiec awarii.
* **Krok:**  Aby zadanie ukończyć wykonanie, musi wykonać wszystkie wbudowane w niego kroki.
* **Działanie:**  Działanie jest głównym podzbiorem kroku i najmniejszym podzbiorem przepływu pracy. Każdy krok składa się z wielu działań, które muszą zostać pomyślnie wykonane.
Jak widać przepływ pracy, zadanie, krok i działanie są współzależne, a pomyślne wykonanie wszystkiego jest konieczne do pomyślnego zakończenia rurociągu CI/CD.

## Utwórz przepływ pracy {#workflow}

W projekcie rozwoju oprogramowania jednym z problemów, przed którymi stoją zespoły programistyczne, jest format kodu źródłowego i egzekwowanie prawa do najlepszych praktyk. Ten problem jest bardziej oczywisty dla większych zespołów. Ponieważ angażują więcej programistów i każdy ma swój własny styl kodów pisania. Tak więc użycie pakietów Linter jest bardzo powszechne w zespołach. Ale teraz dzięki **Github Actions** możesz faktycznie egzekwować Lintera za każdym razem, gdy ktoś popycha kod do repozytorium Github.
W tym samouczku GitHub Actions dodasz przepływ pracy, który kłaży wiele języków kodowania za pomocą akcji [Github Super-Linter][9]. Przepływ pracy używa super-linii do walidacji kodu źródłowego za każdym razem, gdy nowe zatwierdzenie jest przekazywane do repozytorium.
Z repozytorium na GitHub, utwórz nowy plik w **. Github/Workflows**o nazwie**superlinter.yml** i skopiuj do niego następującą zawartość
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Aby uruchomić przepływ pracy, zatwierdź i przesuń zmiany w repozytorium GitHub. To wydarzenie push spowoduje uruchomienie SuperLinter Workflow. A teraz możesz wyświetlić wyniki swojego przepływu pracy, wchodząc do zakładki akcji

{{< figure align=center src="images/actions-tab.png" alt="Samouczek Github Działania">}}

Na lewym pasku bocznym kliknij przepływ pracy, który chcesz zobaczyć.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Github Actions Workflow">}}

Super-lininter Workflow, który właśnie dodałeś, za każdym razem, gdy kod jest przesuwany do repozytorium, aby pomóc znaleźć problemy w kodzie. Twoje repozytorium może mieć wiele przepływów pracy, które uruchamiają różne zadania w oparciu o różne zdarzenia. Działania GitHub mogą pomóc Ci zautomatyzować prawie każdy aspekt procesów tworzenia aplikacji. To było tylko podstawowe wprowadzenie do działań GitHub. Istnieje mnóstwo [zasobów][10] dostępnych dla dogłębnej wiedzy na temat działań GitHub, których można użyć.

## Wniosek {#conclusion}

W tym samouczku **GitHub**dowiedzieliśmy się o **Ciągłe integrację i ciągłe wdrażanie** i **Czym są działania Github** . Zbadaliśmy również, w jaki sposób możemy użyć **Działania GitHub** do zbudowania przepływu pracy CI/CD. Użyliśmy prostego przepływu pracy super-linii z rynku GitHub Actions, aby znaleźć wszelkie niespójności w naszej bazie kodowej. W nadchodzących artykułach bardziej szczegółowo zbadamy działania GitHub. Ponadto można znaleźć inne posty na blogu związane z**System sterowania wersją** wspomniany w sekcji „Explore” poniżej.
Wreszcie [Containerize.com][11] ciągle pisze posty na blogu na temat dalszych produktów i tematów open source. Dlatego prosimy o kontakt z kategorią [oprogramowanie kontroli wersji][12] w celu regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][13], [LinkedIn][14] i [Twitter][15].

## Badać
Możesz znaleźć istotne następujące linki:
  * [Ciągłe wdrażanie Gitlab | Jak to działa?][16]
  * [Zrozum i poznaj gałęzie i ciągnij prośby w git][2]
  * [Oprogramowanie do zarządzania kodem źródłowym | Co to jest git?][17]
  * [Top 5 systemów sterowania wersją open source w 2021 r.][18]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
