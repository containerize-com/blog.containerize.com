---
title: "So entwickeln Sie Osticket -Plugin | IT Helpdesk -Software" 
seoTitle: "So entwickeln Sie Osticket -Plugin | IT Helpdesk -Software" 
description: "Folgen Sie diesem Tutorial, um zu erfahren, wie Sie das Osticket -Plugin entwickeln. Diese IT -Helpdesk -Software verwaltet die Kundenkommunikation und automatisiert die Problemlösung." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Erstellen Sie ein Osticket -Plugin, um Funktionen in Ihre Osticket -Installation hinzuzufügen. Dieses Open-Source-Ticketing-System hilft Unternehmen, Kunden effizient zu bewältigen." 
url: /de/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Erstellen Sie ein Osticket -Plugin, um Funktionen in Ihre Osticket -Installation hinzuzufügen. Dieses Open-Source-Ticketing-System hilft Unternehmen, Kunden effizient zu bewältigen.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="IT Helpdesk -Software">}}


## Überblick
Willkommen zu einem weiteren interessanten Blog -Beitrag in der Reihe von [Helpdesk -Ticket -Software][1]. Wir haben einige Blog -Beiträge zu Themen wie [beliebte kostenlose Ticketing -basierte Helpdesk und Customer Care System][2], [automatisieren Ticketing -System mit WordPress und Osticket][3] veröffentlicht. Osticket ist jedoch ein Open-Source-Ticketing-basiertes Helpdesk-System, mit dem Kunden ihre Anfragen und Beschwerden für die Unterstützung von Mitarbeitern melden können. Dieses kostenlose Support-System bietet einfach zu verwendende Anfragemanagementmodul, mit dem Anfragen von Telefon, E-Mail und Formularen in webbasierte Tickets umwandelt werden. Es bietet eine breite Palette von Funktionen und Optionen, mit denen Support -Mitarbeiter ein unglaubliches Kunden Support -Erlebnis für Kunden bieten können.
Dieses Open -Source -Ticketing -System (OSTICKET) ist ein völlig flexibles Support -Ticket -Rahmen, das zahlreiche Optionen bietet, um alle Teile des Kundenunterstützungserlebnisses wie Nachrichten, die an Kunden, Seiten und Benachrichtigungen gesendet wurden, zu veranlassen. In seinem Artikel werden wir Osticket -Plugin -Entwicklung lernen, um die Funktionalität entsprechend unseren Bedürfnissen zu verbessern. Dazu werden wir die folgenden Themen behandeln:
  * [Warum Plugins verwenden?][4]
  * [Anforderungen][5]
  * [Wie man Ostickets Plugin entwickelt?][6]
  * [Schlussfolgerung][7]

## Warum Plugins verwenden? {#why}

In diesem Thema lernen wir, wie Sie ein einfaches Plugin erstellen, um die Kernfunktionalität dieser  **IT -Helpdesk -Software**  (Osticket) zu erweitern. Ein Plugin ist eine Software, die die Kernfunktionalität jeder App/Software erweitert. Darüber hinaus gibt es viele Open-Source-Software auf Unternehmensebene mit einem riesigen Stapel Plugins, die die Funktionen erweitern. Darüber hinaus umfassen diese beliebten Open -Source -Software WordPress, Joomla und viele mehr. Vor allem lebendige und lebendige Gemeinschaften unterstützen und entwickeln Plugins nach Bedarf. Frameworks bieten jedoch umfassende Dokumentation zur Entwicklung der Plugins. Im Folgenden finden Sie einige Gründe für Apps zur Unterstützung von Plugins:
  * Es ermöglicht Entwickler von Drittanbietern, Softwarekomponenten zu erstellen, die die Funktionalität einer Anwendung erweitern.
  * Plugins ermöglichen es einfach, neue Funktionen zu integrieren.
  * Außerdem erhöht es nicht die Größe und Komplexität einer Anwendung.
  * Sowie Entwickler können den Code von Plugins getrennt von der Kernanwendung aufbewahren und verwalten.

## Anforderungen {#requirements}

In diesem Abschnitt der Helpdesk -Software**beschreibt die Anforderungen für die Entwicklung des Osticket -Plugins.
  * PHP Version 5.6 oder höher
  * Osticket -Installation
  * Grundlegendes PHP -Wissen

## Wie entwickle ich das Plugin von Ostickets? {#how}

In diesem Abschnitt werden wir die Schritte der Pluginentwicklung dieses Open -Source -Ticketing -Systems (Osticket) durchlaufen.
  * Erstellen Sie den Ordner von Plugin in /include /plugins verzeichnis. In diesem Tutorial erstellen wir ein Demo -Plugin, das das  **Osticket -System**  in Redmine integriert.
  * Es sollte die folgenden erforderlichen Dateien haben: plugin.php und config.php.
  * Plugin.php -Datei enthält eine allgemeine Beschreibung des Plugins. Verwenden Sie den folgenden Beispielcode in der Plugin.php -Datei:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Ersetzen Sie dann ID-, Name-, Autorenname und Plugin -Klasse -Namen aus dem obigen Code.
  * Danach müssen wir Plugin -Konfigurationsoptionen im Backend von Osticket anzeigen. Fügen Sie den folgenden Beispielcode in die Datei config.php hinzu.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Infolgedessen erstellt dies Benutzername- und Kennwortfelder auf der Konfigurationsseite, wie hier gezeigt:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Ein Anfängerleitfaden zur Entwicklung von Osticket -Plugin">}}

  * Im Folgenden finden Sie eine Liste der verfügbaren Klassenfelder, die in `[install_root]/include/class.forms.php` definiert sind:
      * Textboxfield - Textfeld
      * Textefeld - Textbereich
      * ThreadEntryfield - reicher Textbereich, verwendet für Diskussionsthreads
      * DateTimeField - JQuery DatePicker
      * Telefonfield - Textfeld optimiert für Telefonnummern
      * Booleanfield - Kontrollkästchen
      * ChoiceField-Dropdown-Feld auswählen
      * Abschnitt Breakfield - Horizontale Abschnitt Pause
  * Danach müssen wir die Datei erstellen, in der die Funktionalität von Plugin definiert wird.
  * Der Dateiname sollte wie in Plugin.php -Datei definiert sein. d.h. rotmine.php.
  * Dies muss die Klasse DynabicredMineplugin halten. Schauen Sie sich den folgenden Beispielcode an:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Dieser Code hat die Konfigurationswerte abgerufen und Sie können diese Werte in Ihren Funktionen verwenden. In dieser Datei können Sie die Funktionen Ihres Plugins als Anforderungen hinzufügen.

## Abschluss {#conclusion}

Dies bringt uns zum Ende dieses Blog -Beitrags. Osticket ist eine Ticketing -Management -Software, die die Struktur der Plugins für Entwickler anbietet, damit sie neue Funktionen nach Anforderungen hinzufügen können. Plugins sind die Komponenten, die die Kernfunktionalität jeder App/Software erweitern. In seinem Artikel haben wir die Pluginentwicklung dieses  **Kundenunterstützungssystems** (Osticket) erörtert, mit dem Entwickler benutzerdefinierte Funktionen und Verbesserungen entsprechend ihren Anforderungen hinzufügen können. Daher hilft Ihnen dieser Blog -Beitrag wirklich, wenn Sie eine  **Helpdesk -Software**  für Ihr Unternehmen bereitstellen möchten. Darüber hinaus gibt es andere **Helpdesk -Ticket -Software**  und Artikel im Abschnitt „Explore“ unten.
Schließlich schreibt [Containerize.com][8] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [Helpdesk Ticketing][1] in Kontakt mit der Kategorie [Helpdesk -Ticketing] für regelmäßige Updates. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][9], [LinkedIn][10] und [Twitter][11] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Helpy][15]
  * [Beste Open Source und Free IT Help Desk -Software][16]
  * [Beliebtes freies Ticketing -basiertes Helpdesk und Kundenbetreuungssystem][2]
  * [So einrichten Sie Online -Helpdesk -Software mit Osticket][17]
  * [So implementieren Sie Multi-Messen in Osticket][18]
  * [Automatisieren Sie das Ticketing -System mit WordPress und Osticket][3]
  * [Automatisieren Geschäftsbetriebe mit kostenloser und Open -Source -Software][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
