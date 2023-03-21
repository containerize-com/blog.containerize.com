---
title: "Anfängerleitfaden zur Entwicklung des Phplist -Plugins" 
seoTitle: "Anfängerleitfaden zur Entwicklung des Phplist -Plugins" 
description: "Machen Sie sich mit der Phplist -Plugin -Architektur vertraut und lernen Sie, wie Sie ein grundlegendes Phplist -Plugin erstellen. Diese Richtlinie hilft Ihnen, die Phplist -Funktionalität anzupassen und zu verbessern." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Mit Phplist -Plugins können Entwickler das Produkt anpassen und seine Funktionalität verbessern. In diesem Beitrag lernen wir, wie man grundlegendes Plugin in Phplist erstellt." 
url: /de/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## PHLE -Plugins ermöglicht es Entwicklern, das Produkt anzupassen und seine Funktionalität zu verbessern. In diesem Beitrag lernen wir, wie man grundlegendes Plugin in Phplist erstellt.

{{< figure align=center src="images/phplist-plugin.png" alt="PHplist Plugin">}}

Der Plugin -Support ist ein wesentlicher Bestandteil der Software, insbesondere für Open -Source -Systeme. Auf diese Weise können Entwickler ein neues Plugin erstellen, um die Funktionen zu erweitern. **Phplist**  fördert die Entwicklung von Plugins, damit Entwickler sie entsprechend ihren Geschäftsanforderungen neue Funktionen hinzufügen können. Ein Phplist -Plugin ist eine eigenständige Codesammlung, die Code für PHP, HTML, CSS und JavaScript enthält.
Anwendungen unterstützen Plugins aus vielen Gründen und einige davon sind:
  * Ändern Sie keine Kernfunktionalität.
  * Ermöglichen Sie Entwicklern, neue Funktionen zu erstellen.
  * Reduzieren Sie die Größe der Software.
Wir werden die folgenden Themen in diesem Tutorial ausführlich besprechen.
  *[**Voraussetzungen** ][2]
  *[**Grundlagen der Entwicklung von Phplisten -Plugin** ][3]
  *[**Erstellen Sie unser Phplisten -Plugin** ][4]
  *[**Fazit** ][5]

## Voraussetzungen   {#Req}
  * Neueste Version von Phplist.
  * Mit Phplist und PHP vertraut.
  * Verständnis von HTML / CSS und JavaScript.

## Grundlagen des Phplist -Plugin -Entwicklung   {#Basics}
Die folgenden Methoden verbessern die Funktionalität eines Phplisten -Plugins.
  ***Seiten**  - Erstellen Sie Seiten für Aktivitäten wie Berichterstattung, Statistiken, Informationen und vieles mehr.
  ***Haken**  - Auf diese Weise können Sie an bestimmten Stellen Funktionen aufrufen.
Es gibt drei Arten von speziellen Plugins für Phplist. Ein Plugin jedes Typs kann nur aktiviert werden.
  ***Editor -Plugin**  - Ermöglicht die Implementierung von Editors für Bearbeitungskampagnen oder Vorlagen.
  ***Authentifizierungs -Plugin**  - Dies ermöglicht das Hinzufügen eines neuen Mechanismus zur Authentifizierung von Administratoren.
  ***E-Mail-Absender-Plugin** -Ermöglicht die Implementierung einer neuen Methode zum Senden von E-Mails anstelle von integrierten Funktionen.

## Erstellen Sie unser Phplist -Plugin   {#create}
Zunächst müssen Sie die Phplistplugin -Kernklasse erweitern. Um ein Plugin zu erstellen, müssen Sie ein Verzeichnis mit dem Namen "HelloWorld" unter Plugin \ _rootdir erstellen und eine Datei namens HelloWorld.php im Root of Plugins -Verzeichnis erstellen. Sie können die Datei config.php überprüfen, um den Wert für die Variable Plugin \ _rootdir zu ermitteln. Kopieren Sie den folgenden Code in die Datei helloWorld.php.
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
Sie müssen $ codieroot in das Verzeichnis Ihres Plugins einstellen. Um sicherzustellen, dass das Plugin korrekt initialisiert ist, müssen Sie den übergeordneten Konstruktor aufrufen. Erstellen Sie eine Datei main.php und platzieren Sie sie in Ihr Plugin -Verzeichnis. Kopieren Sie den folgenden Code ein.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Platzieren Sie die Klassendatei helloWorld.php und Ihr Plugin -Verzeichnis in Plugin rootdir, um das Plugin zu installieren. Um ein Plugin zu aktivieren, klicken Sie in der Menüleiste auf die Registerkarte "Konfiguration" und klicken Sie dann auf die Plugins verwalten. Auf der Plugin -Seite werden Ihnen eine Liste verfügbarer Plugins angezeigt und dort Ihr Plugin -Formular aktiviert/deaktiviert.
Sie können auf Ihr Plugin mit der folgenden URL wie http://example.com/admin/?page=main&pi=Helloworld zugreifen. Ersetzen Sie example.com durch Ihren Domainnamen.

## Fazit   {#con}
Wir haben die Grundlagen von **Phplist Plugin**  entwickelt und ein Beispiel -Plugin erstellt. Als Ausgangspunkt können Sie diese Richtlinie befolgen und die Plugin -Entwicklung weiter untersuchen, um die Funktionalität zu verbessern.
Schließlich befindet sich [**Containerize.com **][6] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher bleiben Sie mit dieser Kategorie [ **Newsletter**  ][7] in Kontakt, um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant.
  *[**Phplist** ][8]
  *[**mailTrain** ][9]
  *[**LISTMONK** ][10]
  *[**mondmail** ][11]
  *[**Mailman** ][12]
  *[**Top 5 Open -Source -Newsletter -Software in 2021** ][13]
  *[**So konfigurieren Sie die Multi-Mieter-Anwendung in Phplisten** ][14]
  *[**So erstellen und senden Sie Newsletter mit Phplist** ][15]

  
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
