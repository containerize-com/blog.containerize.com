---
title: "Samouczek rozwoju gry | Ruch graczy w Gdevelop" 
seoTitle: "Samouczek rozwoju gry | Ruch graczy w Gdevelop" 
description: "Postępuj zgodnie z tym samouczkiem rozwoju gry, aby dowiedzieć się o podstawowych funkcjach gry. Gdevelop to bezpłatne oprogramowanie do tworzenia gier do budowania i publikowania gier." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Poruszające obiekty na ekranie jest kluczową częścią każdej gry. W tym przewodniku rozwoju gier dowiemy się, jak kontrolować i przenosić obiekty gry w GDevelop." 
url: /pl/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Ruszające obiekty na ekranie jest kluczową częścią każdej gry. W tym przewodniku rozwoju gier dowiemy się, jak kontrolować i przenosić obiekty gry w GDevelop.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Samouczek rozwoju gry">}}


## **Przegląd** 
Społeczność open source pojawia się wraz z przejściem każdej minuty. Istnieją gry międzyplatformowe, gry mobilne i gry stacjonarne. Różne rodzaje gier obejmują gry akcji, gry przygodowe, gry rólowe, gry sportowe, gry puzzle, gry symulacyjne i wiele innych. Dlatego wszystkie te różne typy gier przyniosły ogromny wzrost ruchu, ponieważ użytkownicy ze wszystkich grup wiekowych zwykle grają w te gry.
Co więcej, pandemia przyniosła ogromną zmianę w stylu życia ludzi żyjących na całym świecie. Ludzie mają teraz więcej czasu. Wszystkie działania offline stały się online. Dlatego mają tendencję do wybierania oprogramowania online do wykonywania profesjonalnych obowiązków i gier wideo w przypadku rozrywki. Z tych wszystkich powodów branża ta zyskała zrównoważony rozwój i wsparcie użytkowników i programistów. W niedawnej przeszłości napisaliśmy na takie tematy, jak [samouczek rozwoju gier HTML5 dla programistów gier wideo][1], [Jak globalny przemysł gier wykorzystuje oprogramowanie typu open source][2] oraz [samouczek Gdeveloping dla początkujących, aby rozpocząć rozwój gier][3]. W tym samouczku rozwoju gry omówimy następujące punkty.
* **[Funkcje eksploracji GDevelop][4]** 
* **[Praca nad grą][5]** 
* **[wniosek][6]** 

## Zawiera eksplorację GDevelop {#features}

[GDevelop][7] to platforma do budowy gier typu open source. Jest wysoce rozszerzalny i oferuje logiczny interfejs, w którym użytkownicy mogą łatwo nawigować. To bezpłatne oprogramowanie jest napisane w C ++, TypeScript i JavaScript. Ponadto dostępna jest kompleksowa dokumentacja dotycząca rozwoju i wdrażania. Cały kod źródłowy jest dostępny w GitHub. Ponadto istnieje wiele funkcji, które sprawiają, że oprogramowanie jest widoczne. Zobaczmy niektóre z kluczowych funkcji.
**Cross-platform** : Ta platforma tworzenia gry jest multiplatform i może być wdrażana na prawie wszystkich popularnych systemach operacyjnych, takich jak macOS, Linux i Windows.
**Eksportowanie opcji** : GDevelvel pozwala użytkownikom eksportować opracowane gry za pomocą jednego kliknięcia dla Androida, iOS i sieci. Właściciele gier mogą wyświetlać reklamy wideo w swoich grach i może być możliwe przy wsparciu Admob.
**Bogate obiekty gry** : Ten twórca gier open source zapewnia szeroki zakres obiektów gier, takich jak duszki z animacje, eksplozje pożaru i inne efekty za pomocą emiterów cząstek. Sformatowany tekst, wbudowane filmy i rysowanie niestandardowych kształtów są dostępne do wprowadzania efektów przyciągających wzrok do gier.
**Wszechstronne zachowania** : W tym podstawowym artykule rozwoju gry pokażemy, w jaki sposób możemy dodać różne zachowania do obiektów gry. Dostępnych jest wiele zachowań, które są gotowe do użycia, a użytkownicy mogą rozwijać się dalej zgodnie z wymaganiami. Wszystko to dzieje się w kilku kliknięciach myszy.
**Zaawansowany interfejs** : W tym samouczku projektowania gry zobaczymy interfejs użytkownika tego silnika 3D. Użytkownicy mogą przeciągać i upuszczać różne elementy gry i obiekty.

## Praca nad grą {#working}

Ta sekcja samouczka rozwoju gry wyjaśnia podstawowy rozwój gry z GDevelop. Przed pójściem dalej upewnij się, że zainstalowałeś GDevel na swoim komputerze.
Możesz odwiedzić ten samouczek [samouczek Gdevelop dla początkujących, aby rozpocząć rozwój gry][3], aby uzyskać wiedzę na temat założenia tego edytora gier w LocalHost.
Teraz otwórz redaktor i utwórz nowy projekt. W tym samouczku utworzymy folder na Dysku Google do zapisywania plików gier. Teraz kliknij „Utwórz nowy projekt”, otworzy nowe okno dialogowe, wybierz opcję „Pusta gra”, aby rozpocząć budowę nowej gry.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Samouczek rozwoju gry">}}

Po lewej stronie paska menu projektu kliknij „Zapisz jako”, aby zapisać grę.
Po pierwsze, dodajmy scenę. W tym celu kliknij opcję „Sceny” i zmień jej nazwę, na przykład „Pierwsza scena” w tym samouczku pokazanym na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" platforma do budowania gier">}}

Po utworzeniu sceny otwórz ją i dodaj obiekt. Aby dodać obiekt, kliknij „Dodaj nowy obiekt” pojawiający się na prawym panelu bocznym. Ostatecznie otworzy nowe okno dialogowe zawierające różne zasoby. Wybierzmy jednak obiekt „czerwony statek” nacisk „Dodaj do gry” i zamknij okno dialogowe.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Przewodnik rozwoju gier">}}

Następnie zobaczysz obiekt pojawiający się na lewym panelu bocznym. Przeciągnij go do ekranu głównego i naciśnij przycisk pojawiający się w lewym górnym rogu, aby uruchomić grę. Dlatego otworzy grę w nowe okno, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Samouczek rozwoju gry">}}

Do tej pory nie możesz grać z tym obiektem, ponieważ nie dodano do niego żadnego zachowania. Dodajmy więc zachowanie do tego obiektu. W tym celu kliknij obiekt statku i naciśnij „Edytuj obiekt”. Otworzy nowe okno dialogowe, przejdź do zakładki zachowania, wybierz „Ruch odgórny” i naciśnij „Zastosuj”. Teraz podgląd grę, a zobaczysz, że możesz przesunąć obiekt statku na ekranie za pomocą klawisze strzałek klawiatury. Teraz zauważysz, że obiekt statku spada z ekranu. Dlatego, aby rozwiązać ten problem, edytujmy obiekt i przejdźmy do zachowań. Kliknij „Dodaj zachowanie do obiektu”. Teraz przejdź do „Wyszukaj nowe zachowania” i poszukaj zachowania „pozostań na ekranie” na pasku wyszukiwania, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gdevel">}}

Następnie wybierz go i zainstaluj w projekcie i naciśnij Zastosuj. Jeszcze jedną rzeczą jest dostosowanie środkowego punktu obiektu. Przejdźmy więc ponownie do właściwości obiektu i „Edytuj punkty” pojawiające się na dole. Wylądujesz na poniższym ekranie.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Samouczek projektowania gry">}}

Więc przeciągnij znak występujący w lewym górnym rogu do środka obiektu, a następnie zamknij i zastosuj. Teraz, jeśli ponowne uruchomienie gry zobaczysz zmiany.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Samouczek rozwoju gry">}}


## Wniosek {#Wniosek}

To koniec tego samouczka rozwoju gry. Mamy nadzieję, że ten post na blogu byłby pomocny dla twórców gier. Ten samouczek umożliwił pracę z obiektami gry i dodawanie zachowań. W przyszłości Conteerize.com opublikuje posty na blogu i artykuły samouczkowe na temat dalszego oprogramowania do projektowania gier open source. Dlatego proszę pozostać w kontakcie z tą kategorią [oprogramowanie do rozwoju gier][8] na [Containerize.com][9] w celu regularnych aktualizacji.

## Badać
  * [Gdevelop][7]
  * [Godot][10]
  * [Supermocarstwa][11]
  * [Cocos Creator][12]
  * [Panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/pl/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
