---
title: "Przewodnik dla początkujących o opracowaniu wtyczki phplist" 
seoTitle: "Przewodnik dla początkujących o opracowaniu wtyczki phplist" 
description: "Zapoznaj się z architekturą wtyczki phplist i dowiedz się, jak utworzyć podstawową wtyczkę phplist. Niniejsze wytyczne pomagają dostosować i ulepszyć funkcjonalność phplist." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Wtyczki phplist pozwalają programistom dostosować produkt i ulepszyć jego funkcjonalność. W tym poście dowiemy się, jak tworzyć podstawową wtyczkę w phplist." 
url: /pl/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## wtyczki phplist umożliwiają programistom dostosowanie produktu i ulepszenie jego funkcjonalności. W tym poście dowiemy się, jak tworzyć podstawową wtyczkę w phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="wtyczka phplist">}}

Obsługa wtyczek jest istotną częścią oprogramowania, szczególnie w systemach open source. Umożliwia to programistom zbudowanie nowej wtyczki do rozszerzenia funkcji.**Phplist**Zachęca do opracowania wtyczek, aby programiści mogli je wykorzystać do dodawania nowych funkcji zgodnie z ich wymaganiami biznesowymi. Wtyczka phplist to samodzielna kolekcja kodu zawierająca kod dla PHP, HTML, CSS i JavaScript.
Aplikacje obsługują wtyczki z wielu powodów, a niektóre z nich to:
  * Nie modyfikuj podstawowej funkcjonalności.
  * Pozwól programistom tworzyć nowe funkcje.
  * Zmniejsz rozmiar oprogramowania.
W tym samouczku omówimy poniższe tematy.
* [**Wymagania wstępne**][2]
* [**Podstawy rozwoju wtyczek phplist**][3]
* [**Utwórz naszą wtyczkę phplist**][4]
* [**Wniosek**][5]

## Wymagania wstępne   {#req}
  * Najnowsza wersja phplist.
  * Znane z phplist i php.
  * Zrozumienie HTML / CSS i JavaScript.

## Podstawy rozwoju wtyczek phplist   {#basics}
Poniższe metody poprawi funkcjonalność wtyczki phplist.
***Strony**- Utwórz strony dla takich działań, jak raportowanie, statystyki, wyświetlanie informacji i wiele innych.
***Haczyki**- pozwala to wywołać funkcjonalność w określonych miejscach.
Istnieją trzy rodzaje specjalnych wtyczek dla phplist. Jedna wtyczka każdego typu można włączyć tylko.
***Wtyczka edytora**- umożliwia edytor edytora do edycji kampanii lub szablonów.
***Wtyczka uwierzytelniania**- To pozwala na dodanie nowego mechanizmu uwierzytelniania administratorów.
***Wtyczka nadawcy e-maila**-umożliwia wdrożenie nowej metody wysyłania wiadomości e-mail zamiast wbudowanej funkcjonalności.

## Utwórz naszą wtyczkę phplist   {#Create}
Przede wszystkim musisz rozszerzyć klasę Core Core. Aby utworzyć wtyczkę, musisz utworzyć katalog o nazwie „Helloworld” pod wtyką \ _rootdir i utworzyć plik o nazwie Helloworld.php w katalogu głównym wtyczki. Możesz sprawdzić plik config.php, aby znaleźć wartość dla zmiennej wtyczki \ _rootdir. Skopiuj poniżej kod do pliku Helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Musisz ustawić $ CODEROOT w katalogu swojej wtyczki. Aby upewnić się, że wtyczka jest prawidłowo zainicjowana, musisz wywołać konstruktor nadrzędny. Utwórz plik main.php i umieść go w katalogu wtyczek. Skopiuj do niego następujący kod.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Umieść plik klasowy Helloworld.php i katalog wtyczki w rootr wtyczki, aby zainstalować wtyczkę. Aby aktywować wtyczkę, kliknij kartę konfiguracyjną na pasku menu, a następnie kliknij wtyczki zarządzania. Strona wtyczki pokaże listę dostępnych wtyczek i możesz tam włączyć/wyłączyć formularz wtyczki.
Możesz uzyskać dostęp do wtyczki według następującego adresu URL, takiego jak http://example.com/admin/?page=main&pi=helloworld. Zamień przykład.com na nazwę domeny.

## Wniosek   {#Con}
Nauczyliśmy się podstaw**wtyczki phplist**i stworzyliśmy próbkę wtyczki. Jako punkt początkowy możesz postępować zgodnie z niniejszymi wytycznymi i dalej zbadać rozwój wtyczek, aby poprawić funkcjonalność.
Wreszcie [**Containerize.com**][6] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [**biuletynów**][7] w celu uzyskania najnowszych aktualizacji.

## Badać
Może się znaleźć następujące linki.
* [**phplist**][8]
* [**Mailtrain**][9]
* [**Listmonk**][10]
* [**Moonmail**][11]
* [**Mailman**][12]
* [**Oprogramowanie biuletynu typu open source w 2021**][13]
* [**Jak skonfigurować aplikację wielozadaniową w phplist**][14]
* [**Jak tworzyć i wysłać biuletyn za pomocą phplist**][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
