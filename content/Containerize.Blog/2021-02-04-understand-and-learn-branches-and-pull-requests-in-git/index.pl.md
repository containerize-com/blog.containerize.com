---
title: "Zrozumieć i naucz się gałęzi i ciągnij prośby w Git" 
seoTitle: "Zrozumieć i naucz się gałęzi i ciągnij prośby w Git" 
description: "Git jest jednym z najpopularniejszych systemów kontroli wersji. W tym articl Ewe zrozumie, jak korzystać z gałęzi git i żądania ciągnięcia." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "GIT Branch jest podstawowym elementem systemu sterowania wersją GIT. W tym samouczku zbadamy różne modele rozgałęzione" 
url: /pl/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## GIT Branch jest podstawowym elementem systemu kontroli wersji GIT. W tym samouczku zbadamy różne modele rozgałęzione

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git ciągnie żądania gałęzi">}}

W naszym [ostatnim artykule][1] dowiedzieliśmy się o podstawach systemów kontroli GIT i wersji. Przeszliśmy krok po kroku i nauczyliśmy się ustawić repozytorium GIT. Nauczyliśmy się również, jak dodawać zmiany do gałęzi i przywrócić je do gdybyś chciał cofnąć swoje zmiany. Teraz, gdy rozumiemy podstawy systemów kontroli wersji, w szczególności git. Tak więc w tym poście na blogu przejdziemy do omówienia, jak korzystać z gałęzi git i pobieranie żądań. Dowiemy się o różnych przepływach pracy. Więc zacznijmy!
  * **[Co to są gałęzie git][2]**
  * **[Utwórz / modyfikuj gałęzie git][3]**
  * **[Co to jest żądanie ciągnięcia][4]**
  * **[popularne modele rozgałęzienia git][5]**
  *[ **Wniosek** ][6]

## Co to są gałęzie git   {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="gałki git">}}

Porozmawiajmy o gałęziach i dlaczego potrzebujemy gałęzi i jakie są strategie gałęzi, których możemy wykorzystać do wydajnej pracy z naszym kodem. Jak sama nazwa sugeruje  **gałąź**  reprezentuje niezależną linię rozwoju z korzenia.
Podczas tworzenia repozytorium w zasadzie tworzysz również gałąź, którą możemy wywołać gałąź główną (lub domyślną). Możemy popełnić zmiany w naszym głównym oddziale. Ale jeśli musisz pracować nad funkcją i nie chcesz oddzielić kodu od gałęzi głównej. Więc właśnie tam pomagają gałęzie. Pozwalają ci rozgałęzić się, a następnie połączyć się później.

## Utwórz / zmodyfikuj gałęzie git   {#Create}
```
git branch
```
Polecenie pozwala tworzyć, wymienić, zmieniać nazwy i usuwać gałęzie. Nie pozwala ci przełączać się między gałęziami, w tym celu musimy użyć polecenia git kasy. Lub jeśli chcesz połączyć swoje zmiany z powrotem do gałęzi, musisz użyć polecenia  **git scal** .
Ważne jest, aby zrozumieć, że gałęzie są tylko wskaźnikami do zatwierdzenia. Podczas tworzenia gałęzi, wszystko, co GIT musi zrobić, to utworzyć nowy wskaźnik, nie zmienia repozytorium w żaden inny sposób.
Użyj następującego polecenia, aby utworzyć gałąź
```
git branch <branch-name>
```
Po zakończeniu pracy na oddziale i połączeniu go w główną bazę kodu, możesz swobodnie usunąć gałąź bez utraty historii za pomocą następującego polecenia
```
git branch -d <branch-name>
```

## Czym jest żądanie Pull   {#pull}
Żądanie Pull to sposób na przesłanie wkładu w projekt oprogramowania za pomocą systemu kontroli wersji, takiego jak GIT. Deweloperzy używają żądań Pull, aby zaproponować zmiany w bazie kodowej. Po otwarciu żądania ciągnięcia możesz omówić i przeglądać potencjalne zmiany ze współpracownikami i dodawać zatwierdzenia kontrolne przed połączeniem zmian w gałęzi podstawowej.
Kiedy deweloper otwiera żądanie ciągnięcia, wszystko, co robi, to prośba o innego programistę, wciąga gałąź ze swojego repozytorium do ich repozytorium. Oznacza to, że musi on dostarczyć 4 wartości wejściowe, aby utworzyć żądanie Pull: Repozytorium źródłowe, gałąź źródła, repozytorium docelowe i gałąź docelowa.

## popularne modele rozgałęzienia   {#Model}
Istnieje wiele oddziałowych przepływów pracy, które są używane przez społeczność programistów na całym świecie. Ale omówimy trzy najpopularniejsze modele rozgałęzione jeden po drugim

## # Git Flow
Gitflow Workflow to przepływ pracy GIT, który pomaga w ciągłym tworzeniu oprogramowania i wdrażaniu praktyk DevOps. Git Flow jest najbardziej znanym przepływem pracy na tej liście. Został stworzony przez [Vincent Driessen w 2010 r.][7] i opiera się na dwóch głównych gałęziach z nieskończonym okresem życia, wraz z innymi gałęziami wspierającymi, takimi jak cechy-\*, Hotfixes-\*, które następnie łączą się w gałęzie rozwoju jako indywidualne Przedmioty są zakończone.
  * **Master**  - Ta gałąź zawiera kod produkcyjny. Cały kod rozwoju jest połączony z gałęzią główną, która jest gotowa do wypchnięcia do produkcji.
  * **Opracuj** -Ta gałąź zawiera kod przedprodukcyjny. Po zakończeniu funkcji są one połączone w rozwój.
Gitflow idealnie nadaje się do projektów, które mają zaplanowany cykl wydania. Chociaż historia Git staje się nieczytelna.

## # Github Flow
Flow Github jest lekkim przepływem pracy. Został stworzony przez [Github][8] w 2011 roku i koncentruje się głównie na modelu zwinnym, w którym nie czekasz na cykl wydania. Zamiast tego codziennie przesuwasz zmiany produkcji w miarę zakończenia funkcji.
Github Flow następuje następującym na zasadach:
  * Wszystko w oddziale „Master” można wdrożyć.
  * Aby pracować nad czymś nowym, utwórz osobną gałąź Off Master z pewną nazwą opisu, np. „Wprowadzenie obrazu”
  * Zobowiązaj się do tej gałęzi lokalnie i regularnie przesuń swoją pracę do tej samej nazwy oddziału na serwerze.
  * Gdy potrzebujesz informacji zwrotnej lub pomocy lub uważasz, że gałąź jest gotowa do połączenia, otwórz [żądanie Pull][4]
  * Po recenzji i podpisaniu funkcji możesz połączyć ją z mistrzem
  * Po połączeniu i popchnięciu do „Mistrza” można go wdrożyć do produkcji.

## # Gitlab Flow
GitLab Flow to przepływ pracy stworzony przez GitLab w 2014 roku. Gitlab Flow jest prostszą alternatywą dla Gitflow i łączy opracowane funkcje rozwoju i gałęzi funkcji z śledzeniem problemów. Główną różnicą między przepływem GitLab a przepływem GitHub jest zastosowanie gałęzi środowiska.
Deweloperzy tworzą  **opracuj**  gałąź i sprawiają, że domyślnie, podczas gdy Gitlab Flow działa z oddziałem „głównej”. GitLab Flow zawiera wiele gałęzi przedprodukcyjnych. Można je użyć do testowania rzeczy na różnych poziomach. np. od oddziału testowego do akceptacji, a następnie od akceptacji do produkcji.

## Wniosek   {#Conclusion}
W tym artykule dowiedzieliśmy się o oddziałach GIT i prośbach o ściąganie. Badaliśmy znaczenie żądań ciągnięcia i tego, jak można je wykorzystać w różnych przepływach pracy git. Krótko badaliśmy również różne modele rozgałęzienia GIT.

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
