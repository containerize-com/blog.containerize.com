---
title: "Joomla Template Development Development Guide für Anfänger" 
seoTitle: "Joomla Template Development Development Guide für Anfänger" 
description: "Lernen Sie die Entwicklung von Joomla -Vorlagen kennen, wie reaktionsschnelle Layouts für verschiedene Anwendungsfälle eingerichtet werden. Set von Dateien, die die Designebene einer Business -Website definieren." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Erstellen Sie hoch professionelle und anpassbare Joomla -Vorlagen, die eine Reihe von Funktionen wie mehrsprachige, SEO / benutzerfreundliche und reichhaltige Farbschemata bieten." 
url: /de/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Erstellen Sie hoch professionelle und anpassbare Joomla -Vorlagen, die eine Reihe von Funktionen wie mehrsprachige, SEO / benutzerfreundliche und reichhaltige Farbschemata bieten. {.has-text-align-links}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla -Vorlageentwicklung">}}


## Überblick
Eine gut konzipierte Business-Website spielt eine wichtige Rolle, um Besucher zu bringen und zu halten, indem sie ihnen eine einfache Navigation verleihen. **Mit Joomla**  erleichtert seine Benutzer eine Reihe von reaktionsschnellen Layouts und Joomla -Vorlagenentwicklung, die die Ästhetik einer Business -Website kontrollieren.
Während der Entwicklungsphase ist die Platzierung von Designelementen sehr kritisch für die Erlangung:
  * Konsistenz
  * Einfache Navigation
  * Einfachheit
  * Mobile Kompatibilität
  * Lesbarkeit
Hier kommt die **Joomla -Vorlagen** . Diese Open -Source -Software bietet vor, dass vordefinierte Reaktionslayouts für alle Webseiten entwickelt oder verwendet werden, anstatt für jede Seite Code separat zu schreiben.
In diesem Blog -Beitrag lernen wir die folgenden Dinge zum Erstellen und Einrichten einer **benutzerfreundlichen Vorlage**  in Joomla.
  *[**Was sind Joomla -Layouts?** ][2]
  *[**Wie erstelle ich eine einfache reaktionsschnelle Vorlage in Joomla?** ][3]
  *[**Wie installiere ich eine Joomla -Vorlage?** ][4]
  *[**Fazit** ][5]

## Was sind Joomla -Layouts?   {#Was}
Joomla bietet Vorlagen sowohl für das Frontend als auch für das hintere Ende. Es wird mit vielen bereitgestellten Vorlagen geliefert und bietet Entwicklern, **kostenlose Reaktionsbootstrap -Themen**  gemäß ihren Anwendungsfällen zu erstellen. In Joomla gibt es zwei Arten von Vorlagen.
**Front-End-Vorlagen:**  bezieht sich auf den Benutzer, der einen Teil einer Business-Website gegenübersteht.
**Back-End-Vorlagen:**  Diese Vorlagen sind mit der Geschäftslogik einer Website verknüpft.

## Wie erstelle ich eine einfache reaktionsschnelle Vorlage in Joomla?   {#Wie}
In diesem Abschnitt werden wir die Schritte dieses Joomla -Template -Tutorials behandeln.
Stellen Sie vor dem Einstieg in diesen Abschnitt sicher, dass Sie das Folgende verstehen:
  * Html
  * CSS
  * JavaScript
  * Php
Das Erstellen benutzerdefinierter Vorlagen in Joomla war also noch nie so hart und komplex. Lassen Sie uns jedoch anfangen, unsere erste Joomla -Vorlage zu erstellen.

## **Setup -Verzeichnisstruktur** 
Erstellen Sie zunächst einen Ordner mit dem Namen "**mytemplate **" im Ordner " **templates**  ".
Erstellen Sie die folgenden Dateien im Ordner "**mytemplate** ":
  ***index.php** : Dies ist die Kerndatei, die HTML- und PHP -Code für die gesamten Vorlagenseiten enthält.
  ***templatatetails.xml** : Diese Datei enthält die Meta -Daten der Vorlage und ist obligatorisch, dass sie von Joomla bemerkt werden.
Erstellen Sie nun drei Ordner im Ordner "**mytemplate** " mit den folgenden Namen:
  ***JS** : Dieser Ordner enthält alle für die Vorlage benötigten JavaScript -Dateien
  ***CSS** : Alle CSS -Dateien zum Styling kommen in diesen Ordner ein
  ***Bilder** : Die von der Vorlage verwendeten Bilder befinden sich in diesem Ordner
Erstellen Sie eine CSS -Datei mit dem Namen "**template.css **" im Ordner " **CSS**  ".
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Letztendlich wird die Verzeichnisstruktur so aussehen.

## Lassen Sie uns einen Code eingeben
Fügen Sie diesen Code in die Datei **templatetails.xml**  ein.
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
Wie bereits erwähnt, enthält diese Datei die Metadaten über die reaktionsschnellen Layouts, die zwischen Markup -Tags definiert sind. Sie können jedoch die allgemeinen Informationen wie Name, Autor und Beschreibung ändern.
Diese Datei enthält auch Informationen zu den anderen Dateien und Ordnern, die von der Vorlage verwendet werden.
Öffnen Sie nun die Datei **index.php**  und setzen Sie den folgenden Code ein:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Diese Datei beginnt mit dieser Zeile, die verhindert, dass andere Ihren PHP -Code lesen.
```
<!DOCTYPE html>
```
Dies soll den Browser über den Dokumenttyp informieren.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTML -Dokumente beginnen mit dieser Zeile und das Attribut **xmlns**  sagt dem XML -Namespace für das Dokument an.
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
Erste Zeile, nachdem das Tag Joomla angewiesen hat, Headerinformationen wie Metadateninformationen und Seitentitel einzustellen.
In der zweiten Zeile gibt es einen Link zum externen Stilblatt und die dritte Zeile verbindet die externe JavaScript -Datei.
Die restlichen Dateien ermöglichen die Bootstrap in die Vorlage.
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
Der Körperabschnitt beginnt, nachdem der Kopfabschnitt alle Daten enthält, die in der Vorlage reflektiert werden, damit der Benutzer anzeigen und navigieren kann.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Diese Erklärung heißt JDOC-Anweisung, mit der Joomla ein Modul mit dem Namen „Position-7“ hinzufügt. Es gibt mehrere JDOC -Aussagen, die in **Joomla -Vorlagenentwicklung**  häufig verwendet werden.
Dies ist die endgültige vollständige **index.php**  Datei mit allen für eine grundlegenden Joomla -Vorlage erforderlichen Code.
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
Für eine sehr einfache Vorlage ist alles vorhanden. Jetzt ist es Zeit, es auf dem Joomla -Server zu installieren und zu sehen, wie es weitergeht.

## Wie installiere ich Joomla -Vorlage?   {#Installieren}
Der Installationsprozess für Joomla -Vorlage ist ziemlich gerade und einfach. Es sind die folgenden Schritte zu installieren:
Gehen Sie zu „Erweiterungen -> verwalten -> Installieren

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla Installieren Sie das Setup -Bild">}}

Hier sehen Sie Ihre neu entwickelte Joomla -Vorlage in der Liste, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla -Vorlagenliste">}}

Wählen Sie nun die Vorlage aus, klicken Sie auf "Installation" und eine Erfolgsnachricht wird über die erfolgreiche Installation angezeigt.
Nachdem die Vorlage installiert wurde, können Sie auf die Vorlagendateien im Bedienfeld von Joomla zugreifen und diese ändern und die Änderungen der Option „Vorlagevorschau“ vorschauen.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Jetzt können Sie Ihre erste Joomla -Vorlage im Browser anzeigen!

## Schlussfolgerung   {#Conclusion}
Eine gute und reaktionsschnelle Vorlage ist die Grundlage für die Modellierung des Gesamtstandorts. **Responsive Layouts**  Bei Joomla sind multifunktional und können für verschiedene Projekte verwendet werden. Mit der Hilfe eines intuitiven Admin -Dashboards wird das Schreiben von Code in die Entwicklung von Joomla -Vorlagen sehr einfach. Joomla bietet die vollständige Kontrolle über die Vorlageentwicklung, um die Wünsche des Benutzers zu erfüllen.
Da die Kategorie von **CMS -Software**  konsistent verbessert wird und mehr Tutorials zu anderen Content -Management -Systemen zur Liste hinzugefügt werden, bleiben Sie mit dem Abschnitt [Content Management System][6] für regelmäßige Aktualisierungen in Kontakt.

## Relevante Produktseiten
Möglicherweise finden Sie die folgenden Links relevant:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Fork][15]
  * [Raffinerie -CMS][16]
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
