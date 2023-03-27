---
title: "Przewodnik dla początkujących o stworzeniu podstawowego szablonu Joomla" 
seoTitle: "Przewodnik dla początkujących o stworzeniu podstawowego szablonu Joomla" 
description: "Joomla jest popularnym systemem zarządzania treścią typu open source. W tym samouczku wyjaśnimy krok po kroku, jak utworzyć szablon Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla jest jednym z najpopularniejszych systemów zarządzania treścią typu open source. Ten samouczek przeprowadzi Cię przez niezbędne kroki tworzenia szablonu Joomla od zera." 
url: /pl/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla jest jednym z najpopularniejszych systemów zarządzania treścią typu open source. Ten samouczek przeprowadzi Cię przez niezbędne kroki tworzenia szablonu Joomla od zera.

{{< figure align=center src="images/joomla-templates-2.png" alt="Podstawowy szablon Joomla">}}

W tej erze cyfrowej system zarządzania treścią jest podstawową koniecznością każdej firmy dla wszystkich ich potrzeb w zakresie tworzenia treści. I istnieje wiele oprogramowania typu open source, a także płatnego oprogramowania CMS na rynku. Mieliśmy również [wymieniliśmy][1] niektóre z najlepszych oprogramowania do zarządzania treścią dla firm. Joomla jest jednym z najpopularniejszych oprogramowania CMS typu open source, aw tym samouczku przejdziemy cię krok po kroku i wyjaśnimy, jak utworzyć szablon Joomla od zera. Więc zacznijmy!
 **Uwaga: Zakładamy, że masz zainstalowaną wersję Joomla 2.5** 
*  **[Struktura katalogu konfiguracji][2]**  
*  **[Utwórz podstawowy plik TemplateTails.xml][3]**  
*  **[Utwórz podstawowy plik index.php][4]**  
*  **[Odkryj i zainstaluj szablon][5]**  
*  **[pakować szablon][6]**  
*  **[wniosek][7]**  

## Struktura katalogu konfiguracji {#setup}

Aby najpierw utworzyć bardzo podstawowy szablon Joomla, utwórz nowy folder w folderze szablonów. Nazwij folder, bez względu na to, jak chcesz nazwać swój szablon, np. „  **MyNewtemplate**  ”.
Korzystanie z ulubionego edytora tekstu Utwórz pliki  **index.php** i  **TemplateTails.xml**  . Aby zarządzać obrazami i arkuszami stylów, zrób 2 nowe foldery o nazwie  **Images**  i  **css**  . Wewnątrz folderu  **css**  Utwórz plik o nazwie **szablon.css**  .
Twoja struktura katalogu będzie wyglądać mniej więcej tak

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Struktura katalogu szablonów Joomla">}}


## Utwórz podstawowy plik TemplateTails.xml {#xml}

Plik  **TemplateTails.xml**  zawiera wszystkie metadane wokół szablonu. I ten plik jest niezbędny bez niego, twój szablon nie będzie widoczny przez Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
Treść szablonu. Xml jest oczywisty. Możesz po prostu skopiować zawartość modyfikowania niezbędnych bitów.
Pozostaw pozycje, jakie są - są to wspólny zestaw, abyś mógł łatwo przełączyć się ze standardowych szablonów.

## Utwórz podstawowy plik index.php {#php}

Index.php staje się głównym plikami ładowanialnym każdej strony, którą Joomla! dostarcza. Ta strona pokaże kod Bare Bones gotowy do cięcia i wklejenia we własnym projekcie.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Odkryj i zainstaluj szablon {#install}

Najpierw musisz powiedzieć Joomli! że stworzyłeś nowy szablon. Ta funkcja nazywa się rozszerzaniami Discover i można uzyskać do niej dostęp za pośrednictwem
```
Extensions -> Extension Manager -> Discover
```
Kliknij przycisk Odkryj, aby odkryć szablon, a następnie wybierz go i kliknij, aby zainstaluj go, aby go zainstalować. Teraz twój szablon powinien pojawić się w szablonie menedżera (style), dostępny za pośrednictwem
```
Extensions -> Template Manager
```

## Pakować szablon {#packge}

Zakazany katalog z kilkoma plikami nie jest dobrą metodą dystrybucji. Tak więc dla dystrybucji powinniśmy utworzyć pakiet naszego szablonu. Pakiet może być w formacie ZIP (z rozszerzeniem .zip).
Jeśli twój szablon znajduje się w katalogu MyTemplate/, aby stworzyć pakiet, możesz połączyć się z tym katalogiem i użyć poleceń takich jak:
```
zip -r ..\mytemplate.zip .
```

## Wniosek {#conclusion}

W tym artykule dowiedzieliśmy się o szablonie Joomla. Przeszliśmy krok po kroku, jak stworzyć szablon Joomla. To tylko bardzo podstawowy samouczek, aby zacząć od tworzenia szablonów. Oczywiście możesz zbudować bardzo dostosowany i ulepszony szablon na podstawie tej gołej struktury.

## odpowiednie strony produktów
Możesz znaleźć istotne następujące linki:
  * [Podręcznik rozwoju szablonów Joomla dla początkujących][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
