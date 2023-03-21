---
title: "Podręcznik rozwoju szablonów Joomla dla początkujących" 
seoTitle: "Podręcznik rozwoju szablonów Joomla dla początkujących" 
description: "Naucz się opracowywania szablonów Joomla, jak skonfigurować responsywne układy dla różnych przypadków użycia. Zestaw plików, które określają warstwę projektową witryny biznesowej." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Zbuduj wysoce profesjonalne i konfigurowalne szablony Joomla, które oferują kilka funkcji, takich jak wielojęzyczne, przyjazne dla SEO / użytkownika i bogate schematy kolorów." 
url: /pl/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## zbuduj wysoce profesjonalne i konfigurowalne szablony Joomla, które oferują wiele funkcji, takich jak wielojęzyczne, przyjazne SEO / użytkownik i bogate schematy kolorów. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Rozwój szablonu Joomla">}}


## Przegląd
Dobrze zaprojektowana witryna biznesowa odgrywa istotną rolę, aby przynieść i zatrzymać odwiedzających, zapewniając im łatwość nawigacji.**Pełna funkcja Joomla**ułatwia swoim użytkownikom z wieloma responsywnymi układami i opracowywaniem szablonów Joomla, które kontrolują estetykę witryny biznesowej.
Podczas fazy rozwoju umieszczenie elementów projektowych jest bardzo ważne do uzyskania:
  * Konsystencja
  * Łatwa nawigacja
  * Prostota
  * Kompatybilność mobilna
  * Czytelność
Oto**szablony Joomla**. To oprogramowanie typu open source zapewnia opracowywanie lub korzystanie z predefiniowanych układów responsywnych dla wszystkich stron internetowych zamiast pisania kodu dla każdej strony osobno.
W tym poście na blogu dowiemy się następujących rzeczy, jak tworzyć i skonfigurować szablon przyjazny dla użytkownika**w Joomla.
* [**Czym są układy Joomla?**][2]
* [**Jak utworzyć prosty responsywny szablon w Joomla?**][3]
* [**Jak zainstalować szablon Joomla?**][4]
* [**Wniosek**][5]

## Co to są układy Joomla?   {#Co}
Joomla zapewnia szablony przednich, a także na tylnym końcu. Jest wyposażony w wiele gotowych szablonów i oferuje programistom zbudowanie**darmowe responsywne motywy bootstrap**zgodnie z ich przypadkami użycia. Istnieją dwa rodzaje szablonów w Joomla.
* * Szablony front-end:**Związane z użytkownikiem stojącym w obliczu części witryny biznesowej.
* * Szablony zaplecza:**Te szablony są powiązane z logiką biznesową witryny.

## Jak utworzyć prosty responsywny szablon w Joomla?   {#Jak}
W tej sekcji omówimy kroki tego samouczka szablonu Joomla.
Przed wskoczeniem do tej sekcji upewnij się, że rozumiesz następujące czynności:
  * Html
  * CSS
  * JavaScript
  * Php
Tak więc tworzenie niestandardowych szablonów w Joomli nigdy nie było tak twarde i złożone. Zacznijmy jednak tworzyć nasz pierwszy szablon Joomla.

## **Struktura katalogu konfiguracji**
Po pierwsze, utwórz folder o nazwie „**MyTemplate**” wewnątrz folderu „**Szablony**”.
Utwórz następujące pliki w folderze „**MyTemplate**”:
***index.php**: To jest plik podstawowy zawierający kod HTML i PHP dla całej strony szablonów.
***TemplateTetails.xml**: Ten plik zawiera meta dane szablonu i jest obowiązkowy za zauważony przez Joomla.
Teraz utwórz trzy foldery w folderze „**MyTemplate**” z następującymi nazwami:
***JS**: Ten folder będzie zawierał wszystkie pliki JavaScript potrzebne dla szablonu
***CSS**: Wszystkie pliki CSS do stylizacji pojawią się w tym folderze
***Obrazy**: Obrazy użyte przez szablon znajdują się w tym folderze
Utwórz plik CSS o nazwie „**szablon.css**” wewnątrz folderu „**css**”.
```
* mytemplate/
**css/
*** template.css
**images/
**js/
**index.php
**templateDetails.xml
```
W końcu tak będzie wyglądać struktura katalogu.

## Umieśćmy jakiś kod
Umieść ten kod w pliku**TemplateTails.xml**.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Jak wspomniano wcześniej, ten plik zawiera metadane dotyczące responsywnych układów zdefiniowanych między znacznikami znaczników. Możesz jednak zmienić ogólne informacje, takie jak nazwa, autor i opis.
Ten plik zawiera również informacje o innych plikach i folderach używanych przez szablon.
Teraz otwórz plik**index.php**i zacznij umieszczać następujący kod:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Ten plik rozpocznie się od tego wiersza, który uniemożliwia innym odczytanie kodu PHP.
```
<!DOCTYPE html>
```
Ma to poinformować przeglądarkę o typu dokumentu.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Dokumenty HTML zaczynają się od tego wiersza, a atrybut**XMLNS**informuje przestrzeń nazw XML dla dokumentu.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Pierwszy wiersz po znaczniku mówi Joomli, aby umieściła informacje nagłówka, takie jak informacje o metadanych i tytuł strony.
W drugim wierszu znajduje się link do zewnętrznego arkusza stylów, a trzeci wiersz łączy zewnętrzny plik JavaScript.
Reszta plików włącza bootstrap do szablonu.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
Sekcja ciała rozpoczyna się po tym, jak sekcja Head zawiera wszystkie dane, które zostaną odzwierciedlone w szablonie, aby użytkownik mógł wyświetlić i nawigować.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
To stwierdzenie nazywa się instrukcja JDOC, która służy do instruowania Joomli do dodania modułu o nazwie „Pozycja-7”. Istnieje kilka instrukcji JDOC, które często są używane w**Joomla Tablate Development**.
Jest to ostateczny kompletny plik**index.php**z całym kodem wymaganym dla podstawowego szablonu Joomla.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Wszystko jest na miejscu dla bardzo podstawowego szablonu. Teraz nadszedł czas, aby zainstalować go na serwerze Joomla i zobaczyć, jak to się dzieje.

## Jak zainstalować szablon Joomla?   {#zainstalować}
Proces instalacji szablonu Joomla jest dość prosty i łatwy. Istnieją następujące kroki do zainstalowania:
Przejdź do „Rozszerzenia -> Zarządzaj -> Zainstaluj

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="JOOMLA Instaluj obraz konfiguracji">}}

Tutaj możesz zobaczyć swój nowo opracowany szablon Joomla na liście, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Lista szablonów Joomla">}}

Teraz wybierz szablon, naciśnij „Zainstaluj”, a komunikat o sukcesie pojawi się na temat udanej instalacji.
Po zainstalowaniu szablonu możesz uzyskać dostęp do i zmodyfikować pliki szablonu w panelu sterowania Joomla i podgląd opcji zmiany z opcji „Podgląd szablonu”.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Teraz możesz wyświetlić swój pierwszy szablon Joomla w przeglądarce!

## Wniosek   {#Conclusion}
Dobry i responsywny szablon jest podstawą ogólnego modelowania witryn.**Responsywne układy**w Joomla są wielofunkcyjne i mogą być używane do różnych projektów. Od pisania kodu po opracowywanie szablonu Joomla staje się bardzo proste za pomocą intuicyjnego pulpitu administratora. Joomla zapewnia pełną kontrolę nad opracowywaniem szablonu, aby sprostać pragnieniu użytkownika.
Ponieważ kategoria oprogramowania**CMS**znajduje się w ramach spójnych ulepszeń, a więcej samouczków na temat innych systemów zarządzania treścią zostanie dodane do listy, pozostań w kontakcie z sekcją [System zarządzania treścią][6] w celu regularnych aktualizacji.

## odpowiednie strony produktów
Możesz znaleźć istotne następujące linki:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Beton5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Widelec][15]
  * [Rafineria CMS][16]
  * [Locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
