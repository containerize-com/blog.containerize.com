---
title: "Przewodnik dla początkujących, aby stworzyć moduł Prestashop" 
seoTitle: "Przewodnik dla początkujących, aby stworzyć moduł Prestashop" 
description: "Prestashop to wydajne i opłacalne oprogramowanie e -commerce open source do konfiguracji sklepu internetowego. Dodatki Prestashop pomagają właścicielom przechowywania w rozszerzeniu funkcjonalności." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Moduły Prestashop to małe programy, które pozwalają poprawić funkcjonalność sklepu. Dowiemy się, jak zbudować podstawowy moduł w tym samouczku." 
url: /pl/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Moduły Prestashop to małe programy, które pozwalają poprawić funkcjonalność sklepu. Dowiemy się, jak zbudować podstawowy moduł w tym samouczku.

{{< figure align=center src="images/prestashop-module.png" alt="Moduł Prestashop">}}

**Prestashop** to oprogramowanie eCommerce, które jest w 100% bezpłatne i open source. Umożliwia to właścicielom sklepów łatwe skonfigurowanie obecności online i skalowanie działalności na szeroką skalę. Prestashop ma domyślne funkcje i czasami możesz potrzebować więcej funkcjonalności swoich wymagań biznesowych. Rynek Prestashop to fantastyczne miejsce do znalezienia dodatkowych funkcji, które można wykorzystać do rozszerzenia funkcji sklepowych. Ponadto można znaleźć zarówno bezpłatne, jak i płatne moduły na Marketplace. Możesz jednak utworzyć niestandardowy moduł od zera.
Szczegółowo omówimy poniższe tematy, aby **utworzyć moduł Prestashop** .
  * [Wymagania][1]
  * [Podstawy rozwoju modułów][2]
  * [Utwórz nasz moduł Prestashop][3]
  * [Wniosek][4]

## Wymagania {#Req}

  * Zainstaluj Prestashop 1,6 lub więcej.
  * Znajomi Prestashopa.
  * Zrozumienie PHP.

## Podstawy rozwoju modułów {#Basics}

Zanim zaczniesz kodować, naprawdę ważne jest, aby wiedzieć o podstawowych pojęciach dla **Prestashop Module Development** . Pozwoli ci to szybko budować i zarządzać modułem.
**Konfiguracja** - Konfiguracja umożliwia zapisywanie danych w bazie danych sklepu bez wymagania tabeli specyficznej modułu. Tabela konfiguracji zawiera listę właściwości wartości kluczowych, do których można uzyskać dostęp z dowolnego miejsca.
**Haczyki** - Haczyki to sposób na połączenie konkretnych zdarzeń Prestashop z kodem. Możesz użyć haczyków do umieszczania kodu na stronach i dla określonych działań, takich jak wysyłanie wiadomości e -mail w określonym wydarzeniu.
**Widżety** - Twórcy modułów używają widżetów do wyświetlania treści w razie potrzeby.
**Doktryna** - Doktryna IS ORM pozwala zarządzać danymi bazy danych za pośrednictwem obiektów. Zapewnia to abstrakcyjną warstwę, która umożliwia wykonywanie akcji wstawiania/aktualizacji za pomocą prostego połączenia.

## Utwórz nasz moduł Prestashop {#Create}

* Utwórz katalog modułów o nazwie **MyFirstModule**w**modułach** Diatoryat instalacji Prestashop. Umieść wszystkie pliki w katalogu modułu.
* Utwórz plik główny o nazwie **myFirstModule.php** i skopiuj następujący kod w nim.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
* Utwórz **install ()**i **Metody odinstall ()** . Dodaj następujące metody w**MyFirstModule.php** Plik.
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Wywołaj specjalne metody aktywowania naszych zarejestrowanych haczyków. Użyjemy tych metod do wyświetlania „Hello World!” tekst na paski boczne. Dodaj następujący kod w **MyFirstModule.php** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
* Wreszcie, otwórz sekcję administratora, prześlij i **Zainstaluj moduł Prestashop** .

## Wniosek {#Wniosek}

W tym samouczku omówiliśmy podstawowe koncepcje budowania modułu **Prestashop** . Ponadto opracowaliśmy podstawowy moduł, który można wykorzystać jako punkt początkowy dla większej liczby modułów zaawansowanych. [Containerize.com][5] konsekwentnie pracuje nad nowymi postami na blogu samouczka. Aby uzyskać najnowsze aktualizacje, pozostań w kontakcie z kategorią [oprogramowanie do koszyków][6].

## Badać
Poniższe linki można znaleźć, oprócz samouczka tworzenia modułu Prestashop**.
  * [Prestashop - bezpłatne oprogramowanie do koszyka][7]
  * [Top 5 oprogramowanie do koszyka open source w 2020 r.][8]



[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
