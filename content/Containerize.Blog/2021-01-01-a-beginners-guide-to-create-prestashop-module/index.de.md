---
title: "Ein Anfängerleitfaden zum Erstellen von Prestashop -Modul" 
seoTitle: "Ein Anfängerleitfaden zum Erstellen von Prestashop -Modul" 
description: "Prestashop ist eine effiziente und kostengünstige Open -Source -E -Commerce -Software für den Online -Shop. Prestashop -Addons helfen den Geschäftsinhabern bei der Erweiterung der Funktionalität." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Die Prestashop -Module sind kleine Programme, mit denen Sie die Funktionalität Ihres Geschäfts verbessern können. Wir lernen, wie man in diesem Tutorial ein grundlegendes Modul erstellt." 
url: /de/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Die Prestashop -Module sind kleine Programme, mit denen Sie die Funktionalität Ihres Shops verbessern können. Wir lernen, wie Sie in diesem Tutorial ein grundlegendes Modul erstellen.

{{< figure align=center src="images/prestashop-module.png" alt="Prestashop -Modul">}}

**Prestashop** ist E -Commerce -Software, die 100% frei und Open Source ist. Auf diese Weise können Shop -Eigentümer ihre Online -Präsenz einfach einrichten und das Geschäft in einer weiten Ebene skalieren. Prestashop verfügt über Standardfunktionen und Sie benötigen gelegentlich mehr Funktionen für Ihre Geschäftsanforderungen. Der Marktplatz für Prestashop ist ein fantastischer Ort, um Add-On-Funktionen zu finden, mit denen die Speicherfunktionen erweitert werden können. Darüber hinaus finden Sie sowohl kostenlose als auch kostenpflichtige Module auf dem Marktplatz. Sie können jedoch auch benutzerdefiniertes Modul von Grund auf neu erstellen.
Wir werden die folgenden Themen im Detail diskutieren, um das Prestashop -Modul**zu erstellen.
  * [Anforderungen][1]
  * [Grundlagen der Modulentwicklung][2]
  * [Erstellen Sie unser Prestashop -Modul][3]
  * [Schlussfolgerung][4]

## Anforderungen {#Req}

  * Installieren Sie Prestashop 1.6 oder mehr.
  * Mit Prestashop vertraut.
  * Verständnis von PHP.

## Grundlagen der Modulentwicklung {#Basics}

Bevor Sie mit dem Codieren beginnen, ist es wirklich wichtig, über die Kernkonzepte für die Entwicklung des Prestashop -Moduls**zu wissen. Dadurch können Sie Ihr Modul schnell erstellen und verwalten.
**Konfiguration** - Mit der Konfiguration können Sie Daten in der Shop -Datenbank speichern, ohne eine modulspezifische Tabelle zu benötigen. Die Konfigurationstabelle enthält eine Liste der wichtigsten Wertschöpfungseigenschaften, auf die von überall zugegriffen werden kann.
**Haken** - Hooks sind eine Möglichkeit, bestimmte Prestashop -Ereignisse mit Ihrem Code zu verbinden. Sie können Hooks verwenden, um Ihren Code auf Seiten und für bestimmte Aktionen wie das Senden von E -Mails auf einem bestimmten Ereignis zu platzieren.
**Widgets** - Modulentwickler verwenden Widgets, um Inhalte bei Bedarf anzuzeigen.
**Doctrine** - Doctrine Is ORM ermöglicht es Ihnen, Ihre Datenbankdaten über Objekte zu verwalten. Dies bietet eine abstrakte Ebene, mit der Sie Einfüge-/Aktualisierungsaktionen mit einfachem Anruf ausführen können.

## Erstellen Sie unser Prestashop -Modul {#Create}

* Erstellen Sie das Modulverzeichnis mit dem Namen **MyFirstModule**in**Modulen** Verzeichnis Ihrer Prestashop -Installation. Platzieren Sie alle Dateien in Ihrem Modulverzeichnis.
* Erstellen Sie die Hauptdatei mit Namen **MyFirstModule.php** und kopieren Sie den folgenden Code darin.
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
* Erstellen **install ()**und **deinstall ()** Methoden. Fügen Sie die folgenden Methoden in**myfirstmodule.php** FILE hinzu.
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
  * Rufen Sie spezielle Methoden an, um unsere registrierten Hooks zu aktivieren. Wir werden diese Methoden anwenden, um "Hello World!" Anzuzeigen. Text an die Seitenleisten. Fügen Sie den folgenden Code in **myfirstmodule.php** Datei hinzu.
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
* Schließlich öffnen Sie den Abschnitt Administrator, hochladen und **Prestashop -Modul installieren** .

## Abschluss {#Abschluss}

Wir haben Kernkonzepte zum Aufbau des **Prestashop -Moduls** in diesem Tutorial erörtert. Darüber hinaus haben wir ein grundlegendes Modul entwickelt, das als Ausgangspunkt für weitere Vorabmodule verwendet werden kann. [Containerize.com][5] arbeitet konsequent an neuen Tutorial -Blog -Posts. Die neuesten Updates finden Sie in Kontakt mit der Kategorie [6][6].

## Erkunden
Neben dem Tutorial **Prestashop Modul Creation** können Sie die folgenden Links finden.
  * [Prestashop - kostenlose Einkaufswagen -Software][7]
  * [Top 5 Open -Source -Einkaufswagen -Software im Jahr 2020][8]



[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
