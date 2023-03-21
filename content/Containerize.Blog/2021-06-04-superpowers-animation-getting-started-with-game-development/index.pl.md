---
title: "Rozpoczęcie rozwoju gry za pomocą supermocarstw" 
seoTitle: "Rozpoczęcie rozwoju gry za pomocą supermocarstw" 
description: "Superpowers to open source 3D producent gier z współpracą w czasie rzeczywistym. Ten samouczek polega na rozpoczęciu rozwoju gier za pomocą supermocarstw." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Zachowanie i ruch obiektów gry są kontrolowane przez animacje. W tym samouczku rozwoju gry nauczymy się, jak animować postacie z gry." 
url: /pl/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Zachowanie i ruch obiektów gry są kontrolowane przez animacje. W tym samouczku rozwoju gry nauczymy się, jak animować postacie z gry.

{{< figure align=center src="images/super.png" alt="Rozpoczęcie rozwoju gry">}}


## **Przegląd**
W naszej serii tworzenia gier typu open source opublikowaliśmy posty na blogu na niektóre popularne tematy, takie jak [samouczek rozwoju gier | Ruch Player in Gdeveloper][1], [samouczek rozwoju gry HTML5 dla programistów gier wideo][2], [Jak globalny przemysł gier wykorzystuje oprogramowanie typu open source][3] oraz [samouczek Gdeveloper dla początkujących, aby rozpocząć rozwój gry][4 ]. Ten artykuł samouczka polega na rozpoczęciu rozwoju gry za pomocą bezpłatnych open source [supermocarstwa][5] poprzez obejmowanie następujących punktów.
  * **[Rodzaje animacji gier][6]**
  * **[Jak tworzyć duszki?][7]**
  * **[Praca ze scenami][8]**
  * **[Uruchomienie gry na LocalHost][9]**
  * **[wniosek][10]**
Dla początkujących dostępnych jest wiele oprogramowania do rozwoju gier open source, które mają możliwości samowystarczające. Jednak [supermocarstwa][5] to oprogramowanie do tworzenia gier 2D i 3D. Zapewnia wbudowane biblioteki i przykłady gier, które ułatwiają tworzenie gier dla twórców gier. Ta bezpłatna aplikacja do projektowania gier jest zapisana w TypeScript, a cała dokumentacja jest dostępna w [Github][11] w odniesieniu do rozwoju i wdrażania. W tym poście na blogu zbadamy supermocarstwa dotyczące ich użycia.

## Rodzaje animacji gier   {#Types}
Animacje są istotną częścią gier wideo. Postacie w grach muszą reagować na działania użytkownika, animacja powinna być płynna i nagła. Chodzi o zarządzanie wieloma ramkami, a animatorzy potrafią nadają się do tworzenia efektów ruchomych. Ponadto istnieją animacje 2D i 3D, w których obiekty wydają się poruszać przez trójwymiarową przestrzeń. Twórcy gier i graficy tworzą modele 3D. Animacje zależą od charakteru gry, a najczęstsze typy są następujące.
**Animacja chodzenia: ** Animacja spaceru dotyczy tworzenia procesu spaceru, w którym postacie animują każdy krok i podają ilustracje chodzące.
**Animacja bezczynna: ** Jest to bardzo ważny rodzaj animacji, w której postać nic nie robi, ponieważ użytkownik nie naciska żadnego kontrolera.
**Uruchom animację **: Run Animation jest częścią każdej gry, w której obiekt gry wykonuje cykl uruchamiania. Ten typ jest najczęstszym typem i wymaga większej uwagi dewelopera.
**Walka animacja **: W grach walki wiele postaci z gier walczy ze sobą.
**Animacja skoku **: Ten rodzaj animacji wymaga lepszych umiejętności i wiedzy specjalistycznej. Postać kompresuje i uwalnia ciało, aby wykonać ilustrację skoków.

## Jak tworzyć duszki?   {#sprites}
Ta sekcja przewodnika do tworzenia gier pozwala użytkownikom tworzyć projekty i rozpocząć tworzenie duszek do gry. Duszki to nietatyczne obrazy lub grafika, które są używane nie tylko w grach, ale także częścią projektowania stron internetowych. Są one zwykle rysowane na tle, które jest stale odświeżane.
Przed przejściem upewnij się, że skonfigurowałeś supermocarstwa na swoim komputerze. Możesz skorzystać z tego linku [samouczek rozwoju gry HTML5 dla programistów gier wideo][2], aby skonfigurować tę bezpłatną platformę tworzenia gier.
Najpierw otwórz aplikację do przeglądarki i stwórzmy nowy pusty projekt. Jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Rozpoczęcie rozwoju gry">}}

Wylądujesz w przestrzeni projektu po utworzeniu nowego pustego projektu. Istnieją opcje menu na lewym panelu bocznym. Kliknij przycisk „+”, aby otworzyć okno dialogowe Zasoby. Wybierz opcję Sprite i naciśnij Utwórz.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Przewodnik tworzenia gier">}}

Teraz prześlij obraz, na którym dodamy zachowanie. Możesz to zrobić, klikając przycisk umieszczony w prawym górnym rogu. Ten panel dotyczy konfiguracji obiektu.
Następnie możesz ustawić rozmiar siatki zgodnie z wyborem. Istnieją dwie części płótna. Górna część pokazuje pełny arkusz, w którym dolna część pokazuje wybraną część, na której mamy zastosować animację. Możesz to zrobić, naciskając przycisk „Ustawienie” na prawym panelu bocznym, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Samouczek rozwoju gry">}}

Następnie stwórzmy animacje. Możemy to zrobić, klikając przycisk „Nowy” na karcie animacji. Możesz zobaczyć obraz poniżej.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Oprogramowanie do rozwoju gier dla początkujących">}}


## Praca ze scenami   {#SCenes}
W tej sekcji dodamy scenę do naszej gry. W tym celu ponownie otwórz okno dialogowe Zasoby i wybierz „Scena” i naciśnij przycisk Utwórz. Teraz utwórz aktora, klikając przycisk gwiazdy dostępny w prawym górnym rogu, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Jak zrobić grę z zadrapaniem dla początkujących">}}

Następnie utwórz nowy komponent, klikając przycisk „Nowy komponent” umieszczony na prawym panelu bocznym. Wybierz „Sprite Renderer” i naciśnij Utwórz. Następnie przeciągnij utworzony duszek z lewej strony bocznego i upuść go pod sekcją renderera duszka. Ponadto utwórz innego aktora o imieniu „aparat”, a także utwórz nowy komponent o nazwie Camera.
Możesz zmienić tryb aparatu, aby zmienić go w tryb „ortograficzny”, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Rozpoczęcie rozwoju gry,">}}

W lewym dolnym rogu przejdź do opcji Ustawienia i otwórz ją. W sekcjach „Sprite” i „mapa płytek” wstawiaj 16 przeciwko „Pixel na jednostkę”. Następnie w „Domyślnym trybie kamery” wybierz 2d w sekcji „Scena”. Ponadto, w sekcji „Mapa płytek”, domyślna szerokość 36, domyślna wysokość 28 i zestaw kafelków rozmiar 16. Nie ma potrzeby jej zapisywania, raczej wszystko jest na autosavie.

## Wprowadzenie gry na LocalHost   {#local}
Jesteśmy więc bliscy wprowadzenia animacji supermocarni naszej pierwszej gry. Jednak ponownie przejdź do zakładki Ustawienia i przeciągnij scenę z lewego panelu bocznego i upuść ją do „Sceny Startup”, jak pokazano na poniższym zdjęciu.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Jak zrobić grę z zadrapaniem dla początkujących">}}

Teraz kliknij „Player” i pod komponentem „Sprite Renderer” wybierz Animację w stosunku do atrybutu „Animation”. Na koniec uruchom aplikację, klikając przycisk umieszczony w lewym górnym rogu. Nowa karta wyświetli poruszające się obiekty na ekranie.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Rozpoczęcie rozwoju gry">}}


## Wniosek   {#Conclusion}
To koniec samouczka, w którym nauczyliśmy się, jak zrobić grę dla początkujących. Dlatego rozpoczęcie rozwoju gier staje się łatwe, gdy dostępna jest szczegółowa dokumentacja oprogramowania do tworzenia gier. Wreszcie [**Containerize.com** ][12] jest w spójnym procesie pisania artykułów na dalsze tematy i produkty open source. Dlatego prosimy o kontakt z tą kategorią [oprogramowania do rozwoju gier][13] w celu regularnych aktualizacji.

## Badać
  * [Gdevelop][14]
  * [Godot][15]
  * [Supermocarstwa][5]
  * [Cocos Creator][16]
  * [Panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
