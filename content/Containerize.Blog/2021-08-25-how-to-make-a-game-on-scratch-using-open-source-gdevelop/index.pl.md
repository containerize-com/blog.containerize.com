---
title: "Jak zrobić grę na scratch za pomocą open source GDevel" 
seoTitle: "Jak zrobić grę na scratch za pomocą open source GDevel" 
description: "Jak zrobić grę od zera? GDevelop oferuje logiczny interfejs użytkownika wypełniony wieloma komponentami i zachowaniami do tworzenia gier wideo dla sieci, komputerów stacjonarnych, iOS i Androida." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Ten samouczek rozwoju gry wyjaśnia podstawy budowy gry wyścigowej. Możesz go zainstalować lub użyć aplikacji online, aby zbudować ekscytującą grę wideo." 
url: /pl/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Ten samouczek rozwoju gry wyjaśnia podstawy budowy gry wyścigowej. Możesz go zainstalować lub użyć aplikacji online, aby zbudować ekscytującą grę wideo.

{{< figure align=center src="images/gdevelop-game.png" alt="Jak zrobić grę na zera">}}


## **Przegląd** 
W przeszłości opublikowaliśmy wiele postów na blogu na temat oprogramowania do rozwoju gier open source, takich jak [Top 5 Free Game Development w roku 2021][1], [Pierwsze kroki z tworzeniem gier za pomocą supermocarstw][2], [Gra Samouczek rozwoju | Ruch Player in Gdevelop][3], [samouczek rozwoju gry HTML5 dla programistów gier wideo][4], [Jak globalny przemysł gier wykorzystuje oprogramowanie typu open source][5] oraz [samouczek Gdeveloper dla początkujących, aby rozpocząć rozwój gry][6 ]. Najnowsze postępy w epoce Internetu przyniosły nowe trendy w branży gier wideo. Platforma do budowania gier open source zapewnia kompletny ekosystem do samodzielnego rozwijania gier, a programiści dojrzewają tę platformę zgodnie z potrzebami. W tym poście na blogu nauczymy się, jak zrobić grę w Scratch za pomocą [GDevelop][7], obejmując następujące punkty.
* **[Dlaczego powinniśmy używać gdevelop?][8]** 
* **[Konfiguracja projektu][9]** 
* **[Jak przygotować tło i obiekt?][10]** 
* **[Dodawanie behviorów do obiektu][11]** 
* **[Uruchomienie gry][12]** 
* **[wniosek][13]** 

## Dlaczego powinniśmy korzystać z GDevelop? {#why}

[GDevelop][7] to oprogramowanie do gier typu open source. Ma to możliwości samowystarczające i ma charakter międzyplatformowy. Możesz go pobrać i zainstalować lub użyć jego wersji online do zabawy. Użytkownicy nie muszą zdobywać żadnej wiedzy programowania, aby korzystać z tego konstruktora gier. Przede wszystkim oferuje interfejs użytkownika przeciągania i upuść, który opracowuje gotowe zachowania gry, szablony i obiekty. To bezpłatne oprogramowanie do tworzenia gier jest bardzo konfigurowalne i oferuje integrację z bibliotekami stron trzecich. Aby uzyskać więcej informacji na temat tego bezpłatnego narzędzia, możesz sprawdzić ten link, aby dowiedzieć się dalej o jego funkcjach i procesie konfigurowania.

## Konfiguracja projektu {#setting}

W tej sekcji stworzymy nasz projekt do budowy gry wyścigowej z niektórymi podstawowymi funkcjami. Śledź ten [link][6] Jeśli chcesz skonfigurować na komputerze lokalnym lub możesz użyć wersji online, przechodząc do tego [link][14].
Tak więc znajdziesz następujący ekran po kliknięciu „Utwórz nowy projekt”, a następnie kliknij „Pusta gra”.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Jak zrobić grę na zera">}}

Możesz zobaczyć pasek menu po lewej stronie okna. Teraz kliknij przycisk „Sceny”, a następnie dwukrotnie kliknij przycisk „Kliknij, aby dodać scenę”. Następnie wylądujesz na ekranie gry, gdzie możesz tworzyć obiekty gry, tła i zachowania. Idąc do przodu, kliknij „Dodaj nowy obiekt” umieszczony na prawym panelu bocznym, a zobaczysz następujące okno.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Samouczek Gdevelop">}}


## Jak przygotować tło i obiekt? {#prepare}

Na pasku wyszukiwania poszukaj obiektu ciężarówki i kliknij go dwukrotnie i naciśnij „Dodaj do gry”, gdy pojawi się w wynikach. Powtórz ten krok dla dwóch kół i obiektu platformy. Teraz kliknij prawym przyciskiem myszy obiekt Greenfloor i edytuj.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Samouczek rozwoju gry">}}


## Dodawanie behviorów do obiektu {#add}

Następnie przeciągnij i upuść Greenfloor do ekranu gry i dostosuj jego wysokość i szerokość zgodnie z życzeniem. Przeciągnij obiekt ciężarówki i upuść go na ekran gry, a następnie obiekty koła. Idąc naprzód, kliknij prawym przyciskiem myszy korpus ciężarówki i naciśnij „Edytuj Object Truckbody”, kliknij zachowania, kliknij „Dodaj zachowanie do obiektu” i kliknij „Physics Engine 2.0”, a zobaczysz następujące okno.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Jak zrobić grę na zera">}}

W tym oknie możesz modyfikować konfiguracje, takie jak gęstość, szerokość i wysokość. Teraz powtórz ten sam proces dla obiektu Greenfloor, ale zachowaj typ „statyczny” i naciśnij przycisk „Zastosuj”. Ponownie edytuj obiekt TruckBody, naciśnij „Edytuj punkty”, naciśnij „EDD Points”, a następnie wstaw nazwę swojego przedniego koła (tj. FW w tym samouczku). Na obiekcie zostanie utworzony punkt, po prostu przeciągnij ten punkt do lokalizacji koła. Powtórz ten proces również dla tylnego koła i uczyń X i Y do 0, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Samouczek rozwoju gry">}}

Następnie edytuj oba obiekty kół i dostosuj ich punkty. Ponadto ponownie przejdź do opcji edycji kół, naciśnij kartę „Zachowanie”, wybierz „Physics Engine 2.0” i ustaw wartości typu, promienia i gęstości, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Oprogramowanie do projektowania gier">}}

Teraz kliknij kartę „Nową scenę”, naciśnij „Dodaj nowe wydarzenia”, naciśnij „Dodaj warunek”, wyszukaj „Na początku sceny” i naciśnij „OK”. Następnie naciśnij „Dodaj akcję” Wyszukaj „Camera Center X Pozycja” i ustaw następujące konfiguracje.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Darmowe oprogramowanie do tworzenia gier">}}

Teraz skopiuj akcję, ale upewnij się, że skopiowana akcja jest ustawiona na „Y”. Dodaj kolejną akcję o nazwie „Zmień zoom z kamerą”, ustaw ją na 0,4 i przeciągnij tę akcję na górę. Dodaj kolejną akcję, wyszukaj „Dodaj złącze koła” i ustaw konfiguracje dla obu kół, jak pokazano poniżej.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Przewodnik rozwoju gier">}}

Następnie dodaj nowy warunek, wyszukaj „naciśnięty klawisz” i ustaw go w lewo. Teraz dodaj akcję, wybierz pierwsze koło, wyszukaj prędkość liniową x ”, znak modyfikacji do„ Odejmowania ”i ustaw wartość 50. Powtórz ten krok dla odpowiedniego klucza, ale upewnij się, że znak modyfikacji w dodaniu poniżej.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Samouczek rozwoju gry">}}


## Uruchomienie gry {#run}

Po zakończeniu wszystkich kroków. Czas uruchomić grę, naciskając przycisk umieszczony w lewym górnym rogu. Wprowadzi grę w nowym oknie.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Jak zrobić grę na zera">}}


## Wniosek {#Wniosek}

To jest koniec tego postu na blogu i na pewno dowiedziałeś się, jak zrobić grę z zarysowaniem. Istnieje jednak wiele bezpłatnych oprogramowania do projektowania gier**na rynku, ponieważ ta branża zyskuje popularność i popyt. Istnieje kilka powodów, takich jak oprogramowanie typu open source, są skalowalne, konfigurowalne, opłacalne i łatwe w utrzymaniu. Ponadto zapotrzebowanie na międzyplatformowych konstruktorów gier rośnie, ponieważ programiści uważają, że jest wygodna gra, która działa na wszystkich popularnych platformach, takich jak Android, iOS, Web i Desktop. Z drugiej strony nadejście pandemii zmieniło życie ludzi i teraz wolą pozostać w domu. Tak więc ludzie grają w gry wideo w czasie wolnym.
Wreszcie [Containerize.com][15] jest gotowy na ulepszenie bazy samouczków o bardziej interesujące **samouczki rozwoju gier** . Pozostań w kontakcie z tą kategorią [oprogramowanie do rozwoju gier][16] w celu regularnych aktualizacji.

## Badać
* **[gdevelop][7]** 
* **[Godot][17]** 
* **[supermocarstwa][18]** 
* **[Cocos Creator][19]** 
* **[Panda3d][20]** 
* **[PlayCanvas][21]** 
* **[Rozpoczęcie rozwoju gry za pomocą supermocarstw][2]** 
* **[Samouczek rozwoju gier | Ruch Player in Gdevelop][3]** 
* **[samouczek rozwoju gier HTML5 dla programistów gier wideo][4]** 
* **[Jak globalny przemysł gier wykorzystuje oprogramowanie open source][5]** 
* **[samouczek GDevelop dla początkujących do rozpoczęcia rozwoju gry][6]** 
* [ **5 najlepszych oprogramowania do tworzenia gier w roku 2021** ][1]



[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
