---
title: "Oprogramowanie do zarządzania kodem źródłowym | Co to jest git?" 
seoTitle: "Oprogramowanie do zarządzania kodem źródłowym | Co to jest git?" 
description: "Co to jest git? GIT to bezpłatne oprogramowanie do zarządzania kodem źródłowym, które pozwala na rejestrować, przeglądać zmiany w plikach źródłowych i wydajne zarządzanie projektami." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "W tym artykule zbadamy, czym jest Git & Amp; Jak działa git? GIT to system kontroli wersji, który jest zaprojektowany do zarządzania kodem źródłowym, ścieżką i wzmacniaczem; Wersje dziennika." 
url: /pl/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## W tym artykule zbadamy, co to jest Git i jak działa GIT? GIT to system kontroli wersji, który jest zaprojektowany do zarządzania kodem źródłowym, wersjami ścieżki i dziennika.

{{< figure align=center src="images/version-control-banner.png" alt="Oprogramowanie do zarządzania kodem źródłowym">}}


## Przegląd
Wyobraź sobie, że jesteś programistą pracującym nad projektem. Masz nad tym więcej niż jedną osobę. I istnieje pojedynczy plik zawierający kod źródłowy. Gdy wszyscy wprowadzają zmiany w kodzie, będą mieli różne wersje pliku za każdym razem, gdy dokonują zmiany. Więc teraz w jaki sposób zarządzać różnymi wersjami tego samego pliku? Właśnie tam rozpoczyna się oprogramowanie do zarządzania kodem źródłowym. Pomaga zarządzać i sclać różne wersje tego samego pliku. I nawet pozwól ci wyśledzić historię zmian. I zawsze możesz być pewien, kto wprowadził zmiany w pliku i jakie są te zmiany.
W tym artykule dowiemy się o systemie kontroli wersji GIT. Jak możesz go używać do zarządzania plikami kodu źródłowego tworzenia oprogramowania lub innych plików. Więc zacznijmy.
  * **[Co to jest system kontroli wersji][1]**
  * **[Co to jest git][2]**
  * **[Jak działa git][3]**
  * **[Zainstaluj git][4]**
  * **[Konfigurowanie repozytorium][5]**
  * **[Zapisz zmiany w repozytorium][6]**
  * **[Sprawdź status repozytorium][7]**
  * **[Cofnij lub cofnij zmiany][8]**
  * **[wniosek][9]**

## Czym jest system kontroli wersji   {#wersja-control}
Kontrola wersji to system, który rejestruje zmiany w pliku lub zestawu plików w czasie, abyś mógł przywołać określone wersje później. Jeśli jesteś programistą i chcesz zachować wersje pliku kodu źródłowego, oprogramowanie do zarządzania kodem źródłowym jest dla Ciebie bardzo przydatne. Umożliwia przywrócenie wybranych plików z powrotem do poprzedniego stanu, powrót całego projektu z powrotem do poprzedniego stanu, porównywać zmiany w czasie, sprawdzić, kto ostatnio zmodyfikował coś, co może powodować problem, który wprowadził problem i kiedy i więcej. Korzystanie z kontroli wersji oznacza, że ​​nigdy nie musisz się martwić o utratę pracy.

## Co to jest git   {#git}
GIT to bezpłatny i open source System kontroli wersji zaprojektowany do obsługi wszystkiego, od małych do bardzo dużych projektów z szybkością i wydajnością. W przeciwieństwie do starszych scentralizowanych systemów sterowania wersją, takimi jak SVN i CVS, GIT Version Control jest rozpowszechniana. Każdy programista ma pełną historię swojego repozytorium kodu lokalnie. Chociaż sprawia, że ​​początkowy klon jest nieco powolny. Ale potem wszystkie zatwierdzenia i inne operacje są bardzo szybkie. GIT pozwala mieć wiele lokalnych gałęzi, które mogą być całkowicie niezależne od siebie.

## Jak git działa   {#how}
Za pomocą GIT możesz wprowadzić zmiany w lokalnym repozytorium i popchnąć je do narzędzia hostingowego. Lub możesz pobrać zmiany innych z narzędzia hostingowego na lokalny komputer. Oto podstawowy przegląd działania oprogramowania do zarządzania kodami źródłowymi (GIT).
  1. Utwórz „repozytorium” za pomocą dowolnego narzędzia hostingowego (takiego jak Github, Gitlab lub Bitbucket)
  2. Sklonuj repozytorium do komputera lokalnego
  3. Dodaj plik do lokalnego repozytorium
  4. Zapisz (zatwierdzenie) zmiany w lokalnym repozytorium
  5. „Pchnij” zmiany w gałęzi głównej na zdalnym hostingu
  6. Zmień swój plik za pomocą narzędzia hostingowego Git i zatwierdź
  7. „Wciągnij” zmiany na maszynie lokalnej
  8. Utwórz „gałąź” (wersja), dokonaj zmiany, popełnij zmianę
  9. Otwórz „żądanie ciągnięcia” (proponuj zmiany w gałęzi głównej)
 10. „Scal” swoją gałąź do gałęzi głównej

## Zainstaluj git   {#install}
Dostępne są różne metody instalacji GIT na komputerze. Możesz zainstalować go jako pakiet lub za pośrednictwem innego instalatora lub pobrać kod źródłowy i samodzielnie go skompilować.

## # Instalowanie w Linux
Jeśli chcesz zainstalować podstawowe narzędzia git w systemie Linux za pośrednictwem binarnego instalatora, ogólnie możesz to zrobić za pośrednictwem narzędzia do zarządzania pakietami. W przypadku Fedory (lub dowolnej ściśle związanej dystrybucji RPM, takiej jak RHEL lub CENTOS), możesz użyć „DNF”
```
$ sudo dnf install git-all
```
Jeśli jesteś na dystrybucji opartej na debian, takiej jak Ubuntu, spróbuj „apt”
```
$ sudo apt install git-all
```

## # Instalowanie na macOS
Istnieje kilka sposobów instalacji GIT na komputerze Mac. Najłatwiej jest zainstalować narzędzia wiersza poleceń XCode. Na Mavericks (10.9) lub nowszy możesz to zrobić po prostu, próbując uruchomić  **git**  z terminala po raz pierwszy.
```
$ git --version
```
Jeśli jeszcze go nie zainstalował, zachęci do zainstalowania go.

## Konfigurowanie repozytorium   {#init}
Repozytorium GIT to wirtualna pamięć dla plików kodu. Pozwala przechowywać różne wersje kodu, do których można uzyskać dostęp w razie potrzeby.
Aby utworzyć nowe repozytorium, użyjesz polecenia **git init **. GIT INIT to jednorazowe polecenie używane podczas początkowej konfiguracji nowego repozytorium. Wykonanie tego polecenia utworzy nowy podkład. GIT w bieżącym katalogu roboczym. To stworzy także nową gałąź ** Master** .

{{< figure align=center src="images/git-init-2.gif" alt="Co to jest git">}}


## Zapisz zmiany w repozytorium   {#Commit}
Teraz, gdy masz zainicjowane repozytorium, możesz popełnić w nim zmiany wersji pliku.

{{< figure align=center src="images/git-add-commit-1.gif" alt="git zatwierdzić">}}


## Sprawdź status repozytorium   {#status}
Polecenie **GIT  **wyświetla stan katalogu roboczego i obszar inscenizacji. Pozwala zobaczyć, które zmiany zostały zainscenizowane, które nie, a pliki nie są śledzone przez oprogramowanie do zarządzania kodem źródłowym (GIT). Wyjście stanu nie pokazuje żadnych informacji dotyczących zaangażowanej historii projektu. W tym celu musisz użyć dziennika**   git**.

{{< figure align=center src="images/git-status-2.gif" alt="Oprogramowanie do zarządzania kodem źródłowym">}}

Git Log pokaże następujące wyjście
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Odwróć swoje zmiany   {#Revert}
Możesz użyć polecenia GIT Revert, aby cofnąć zmianę, którą już popełniłeś w swoim repozytorium. Najpierw użyj polecenia „Git Log”, aby uzyskać listę zatwierdzeń
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Następnie zdecyduj, które zatwierdzenie chcesz przywrócić. I użyj polecenia Git Revert jak poniżej
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Jak widać, Git Revert stworzył nowy zatwierdzenie, które zniechęca zmiany, które zostały wprowadzone w „drugim zatwierdzeniu”.

## Wniosek
Teraz, gdy przeczytałeś cały artykuł, w którym omówiliśmy, co to jest Git i jak działa GIT, powinieneś być świadomy oprogramowania do zarządzania kodami źródłowymi. Jaki jest cel i dlaczego go potrzebujesz. Badaliśmy, w jaki sposób GIT może pomóc w zarządzaniu kodem źródłowym projektu. Dowiedzieliśmy się również, jak używać różnych poleceń GIT do inicjowania i repozytorium, zapisywanie zmian i jak cofnąć zmiany. W naszych nadchodzących samouczkach będziemy bardziej zbadać git i podzielimy się, w jaki sposób możemy używać różnych poleceń, aby lepiej zarządzać kodem.

## Badać
Możesz znaleźć istotne następujące linki:
  *[ **Zautomatyzuj przepływy tworzenia oprogramowania z działaniami GitHub** ][10]
  * **[Jak skonfigurować rurociąg ciągłego wdrażania z Gitlab CI/CD][11]**
  * **[Zrozum i poznaj gałęzie i ciągnij żądania w git][12]**
  * **[Top 5 systemów sterowania wersją open source w 2021][13]**

  
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
