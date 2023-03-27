---
title: "Anfängerleitfaden zum Erstellen einer grundlegenden Joomla -Vorlage" 
seoTitle: "Anfängerleitfaden zum Erstellen einer grundlegenden Joomla -Vorlage" 
description: "Joomla ist ein beliebtes Open-Source-Content-Management-System. In diesem Tutorial erklären wir Schritt für Schritt, wie Sie eine Joomla -Vorlage erstellen." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla ist eines der beliebtesten Open-Source-Content-Management-Systeme. In diesem Tutorial führt Sie die erforderlichen Schritte zum Erstellen einer Joomla -Vorlage von Grund auf neu." 
url: /de/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla ist eines der beliebtesten Open-Source-Content-Management-Systeme. In diesem Tutorial führt Sie die erforderlichen Schritte zum Erstellen einer Joomla -Vorlage von Grund auf neu.

{{< figure align=center src="images/joomla-templates-2.png" alt="Grundlegende Joomla -Vorlage">}}

In diesem digitalen Zeitalter ist ein Content -Management -System eine grundlegende Notwendigkeit eines Unternehmens für alle Anforderungen an die Erstellung von Inhalten. Und es gibt eine Reihe von Open-Source-CMS-Software auf dem Markt. Wir haben auch [1] einige der besten Open-Source-Content-Management-Software für Unternehmen. Joomla ist eine der beliebtesten Open-Source-CMS-Software. In diesem Tutorial werden Sie Schritt für Schritt durchlaufen und erklären, wie Sie eine Joomla-Vorlage von Grund auf neu erstellen. Also lasst uns anfangen!
 **HINWEIS: Wir gehen davon aus, dass Sie Joomla 2.5 -Version installiert haben** 
*  **[Setup -Verzeichnisstruktur][2]**  
*  **[Erstellen Sie eine grundlegende Vorlagensetails.xml -Datei][3]**  
*  **[Erstellen Sie eine grundlegende Index.php -Datei][4]**  
*  **[Entdecken und installieren Sie Vorlage][5]**  
*  **[Paket die Vorlage][6]**  
*  **[Schlussfolgerung][7]**  

## Setup -Verzeichnisstruktur {#setup}

Erstellen Sie zuerst eine sehr einfache Joomla -Vorlage, erstellen Sie einen neuen Ordner im Ordner Vorlagen. Nennen Sie den Ordner, was auch immer Sie Ihre Vorlage nennen möchten, z. B. "  **myNewTemplate**  ".
Mit Ihrem bevorzugten Texteditor erstellen Sie die Dateien  **INDEX.PHP** und  **templatedetails.xml**  . Um Ihre Bilder und Stilblätter zu verwalten, machen Sie 2 neue Ordner namens  **Bilder**  und  **CSS**  . Im Ordner  **CSS**  Erstellen Sie eine Datei namens **template.css**  .
Ihre Verzeichnisstruktur sieht ungefähr so ​​aus

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomla Template Directory Struktur">}}


## Erstellen Sie eine grundlegende Datei mit Vorlagensetails.xml {#xml}

Die Datei  **templatedetails.xml**  enthält alle Metadaten über Ihre Vorlage. Und diese Datei ist ohne sie unerlässlich, Ihre Vorlage wird von Joomla!
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
Inhalt der templateetails.xml sind selbsterklärend. Sie können einfach den Inhalt kopieren, den die erforderlichen Bits ändern.
Lassen Sie die Positionen so, wie sie sind - dies sind ein üblicher Satz, sodass Sie leicht aus den Standardvorlagen wechseln können.

## Erstellen Sie eine grundlegende Index.php -Datei {#php}

Der Index.php wird zur Haupt -Bootstrap -Datei jeder Seite, die Joomla! liefert. Auf dieser Seite werden der Code aus Bare-Bones bereitgestellt, der Sie zum Ausschneiden und Einfügen in Ihr eigenes Design einfügen.
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

## Template entdecken und installieren {#install}

Sie müssen es zuerst Joomla erzählen! dass Sie eine neue Vorlage erstellt haben. Diese Funktion wird als Discover -Erweiterungen bezeichnet und kann über zugegriffen werden
```
Extensions -> Extension Manager -> Discover
```
Klicken Sie auf die Schaltfläche Discover, um Ihre Vorlage zu ermitteln, und wählen Sie sie dann aus und installieren Sie, um sie zu installieren. Jetzt sollte Ihre Vorlage im Template Manager (Styles) angezeigt werden, die über die Übersicht übertragen werden
```
Extensions -> Template Manager
```

## Verpacken Sie die Vorlage {#packge}

Ein ungebundenes Verzeichnis mit mehreren Dateien ist keine gute Methode für die Verteilung. Aus Verteilung sollten wir also ein Paket unserer Vorlage erstellen. Das Paket kann im ZIP -Format (mit einer .zip -Erweiterung) sein.
Wenn sich Ihre Vorlage in einem Verzeichnis mytemplate/ dann befindet, um das Paket zu erstellen, können Sie eine Verbindung zu diesem Verzeichnis herstellen und Befehle verwenden wie:
```
zip -r ..\mytemplate.zip .
```

## Abschluss {#conclusion}

In diesem Artikel haben wir etwas über die Joomla -Vorlage erfahren. Wir haben Schritt für Schritt durchgesehen, wie man eine Joomla -Vorlage erstellt. Dies ist nur ein sehr einfaches Tutorial, um mit der Erstellung von Vorlagen zu beginnen. Natürlich können Sie eine sehr angepasste und verbesserte Vorlage basierend auf dieser Bare-Knochen-Struktur erstellen.

## Relevante Produktseiten
Möglicherweise finden Sie die folgenden Links relevant:
  * [Joomla Template Development Guide für Anfänger][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
