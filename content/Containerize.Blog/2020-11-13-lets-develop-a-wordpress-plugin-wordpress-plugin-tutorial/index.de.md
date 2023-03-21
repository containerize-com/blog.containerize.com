---
title: "Entwickeln wir ein WordPress -Plugin | WordPress Plugin Tutorial" 
seoTitle: "Entwickeln wir ein WordPress -Plugin | WordPress Plugin Tutorial" 
description: "Interessiert an der Entwicklung von WordPress -Plugins? Befolgen Sie dieses WordPress -Plugin -Tutorial, in dem vollständige Schritte beschrieben werden, um ein grundlegendes WordPress -Plugin zu erstellen." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress Plugin ist ein Modul, das Sie auf Ihrer Website aktivieren, um eine Reihe von Funktionen oder Elementen bereitzustellen. Diese Plugins sind SEO optimiert und bieten Automatisierung." 
url: /de/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress Plugin ist ein Modul, das Sie auf Ihrer Website aktivieren, um eine Reihe von Funktionen oder Elementen bereitzustellen. Diese Plugins sind SEO optimiert und bieten Automatisierung.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPress Plugin Tutorial">}}


## Überblick
WordPress ist eine Open-Source-Blogging-Plattform auf Unternehmensebene. A **WordPress -Plugin**  ist ein eigenständiger Codesatz, der die Funktionalität von WordPress verbessert und erweitert. Durch Verwendung einer beliebigen Kombination von PHP, HTML, CSS, JavaScript/JQuery. Ein Plugin kann jedem Teil Ihrer Website neue Funktionen hinzufügen.
Die Funktionalität, die Sie Ihrer Website hinzufügen können, hängt davon ab, was jedes spezifische Plugin erstellt hat. Ein WordPress -Plugin kann entwickelt werden, um alles zu tun. Von einer kleinen Aufgabe bis zu einer Full-Fleeby-Anwendung, die eine Reihe von Operationen ausführt und über eigene Schnittstellen verfügt. Die Plugins unterscheiden sich von Ihrem Thema und arbeiten unabhängig voneinander, wobei Hooks, Filter, Shortcodes, Widgets und benutzerdefinierte Code verwendet werden, um ihre Funktionalität auszuführen.
In diesem WordPress -Plugin -Tutorial lernen wir, wie Sie unser erstes WordPress -Plugin erstellen. Der wichtigste Grund für das Erstellen eines Plugins ist, dass Sie Ihren eigenen Code vom WordPress -Kerncode trennen können.
  ***[Anforderungen][1]** 
  ***[Grundlagen der Pluginentwicklung][2]** 
  ***[Wie erstelle ich WP -Plugin?][3]** 
  ***[Schlussfolgerung][4]** 

## Anforderungen   {#Requirements}
  * Neueste Version von WordPress
  * Verständnis von PHP / MySQL
  * Verständnis von HTML / CSS und JavaScript

## Grundlagen der Plugin -Entwicklung   {#Basics}
Nehmen wir uns einen Moment Zeit, um über einige wichtige Aspekte der Plugin -Entwicklung zu sprechen. Ein solides Verständnis der Funktionsweise dieser Konzepte hilft Ihnen dabei, einfach zu bedienende und wartbare Funktionen aufzubauen.

### Aktionen
**Action Hooks  **sind ein sehr nützliches Werkzeug in **  WordPress  ****  Plugin  **und sie werden verwendet, um Funktionen (**  Aktionen** ) an bestimmten Stellen eines Themas oder Plugins auszuführen. WordPress hat Dutzende von Aktionen, die während seiner Kernfunktionalität definiert wurden, wobei jede Aktion aus einem eindeutigen Namen besteht. Für weitere Details [lesen][5].

### Filter
Ein WordPress -Filter ist ein Haken, der eine Variable (oder eine Reihe von Variablen) akzeptiert und sie nach dem Änderung zurückgibt. Diese Filter werden häufig verwendet, damit Sie eine Möglichkeit haben, Standardinformationen zu manipulieren. Weitere Details [lesen][6].

### Shortcodes
Shortcodes sind Makros, mit denen dynamische Interaktionen mit dem Inhalt durchgeführt werden können. d.h. Erstellen einer Galerie von Bildern, die an den Beitrag angeschlossen sind oder ein Video rendern. Infolgedessen sind sie eine wertvolle Möglichkeit, Inhalte sauber und semantisch zu halten und gleichzeitig den Endbenutzern eine gewisse Fähigkeit zu ermöglichen, die Darstellung ihrer Inhalte programmatisch zu verändern. Für weitere Details [lesen][7].

### Widgets
Widgets sind wichtig, da sie Ihnen ein weiteres Mittel zur Ausführung des Code Ihres Plugins bieten und gleichzeitig eine benutzerfreundliche Oberfläche bereitstellen. Da die meisten Themen eine oder mehrere Seitenleisten unterstützen; Wenn Sie Ihre eigenen Widgets hinzufügen, können Sie schnell zugreifen, um Ihre Informationen im Thema anzuzeigen.

## **Wie erstelle ich WP -Plugin?**    {#create}
In diesem Abschnitt des WordPress -Plugin -Tutorials müssen Sie lediglich einen Ordner erstellen und dann eine einzige Datei mit einer Inhaltszeile erstellen. Navigieren Sie zum Ordner **wp-content/plugins  **und erstellen Sie einen neuen Ordner namens **  myTestPlugin **. Erstellen Sie in diesem neuen Ordner eine Datei namens  **myTestPlugin.php**  . Öffnen Sie die Datei in einem Texteditor und fügen Sie die folgenden Informationen darin ein:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Jetzt können Sie in das hintere Ende gehen, um Ihr Plugin zu aktivieren. Das ist alles, obwohl dieses Plugin nichts tut. Es ist jedoch ein aktives, funktionierendes Plugin. Die beste Praxis bei der Entwicklung eines Plugins besteht darin, Ihren Code in entsprechenden Dateien und Ordnern genau zu trennen.
Um zu demonstrieren, fügen wir unser Test -Plugin Funktionalität hinzu, das die Popularität unserer Artikel verfolgt, indem wir speichern, wie oft jeder Beitrag angezeigt wurde.

### Speicher Seitenansichten
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
So weit, so gut in diesem WordPress -Plugin -Tutorial. Diese Funktion wird jedoch nie aufgerufen, daher wird sie nicht wirklich verwendet. Hier kommen Hooks ins Spiel. Sie können in die Dateien Ihres Themas eingehen und die Funktion von dort aus manuell aufrufen. Aber dann würden Sie diese Funktionalität verlieren, wenn Sie jemals das Thema ändern und so den gesamten Zweck besiegen. Ein Haken mit dem Namen **wp_head **, der kurz bevor das Tag in den meisten Themen vorhanden ist, danach läuft, sodass wir einfach unsere Funktion so einstellen können, wann immer  **wp_head**   läuft, wie SO:
```
add_action("wp_head", "add_page_views");
```

### Die Seitenansichten zeigen
Jetzt erstellen wir eine andere Funktion, die die Seitenansichten zurückgibt, die wir bereits in der obigen Funktion gespeichert haben. Schauen wir uns den Code an:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Bisher haben wir gerade die Ansichtserscheinung abgeholt. Jetzt zeigen wir es. Sie könnten denken, es muss komplex sein. Aber genau so ist es sehr einfach:
```
echo get_page_views() . “view(s)”
```

## Schlussfolgerung   {#Conclusion}
Dies ist das Ende dieses WordPress -Plugin -Tutorials. Indem wir diesen Artikel folgen und nur eine Handvoll Funktionen verwenden, haben wir ein grundlegendes Plugin erstellt, um unsere beliebtesten Beiträge zu verfolgen. Wir können es viel verbessern, aber der Zweck war nur, Sie mit den Grundlagen vertraut zu machen. Darüber hinaus erhalten Sie durch das Erlernen einiger Muster der WordPress-Entwicklung (Plugins, Hooks usw.) Fähigkeiten, die Ihnen auch in Nicht-Wort-Umgebungen dienen. Es gibt viele andere Blog -Beiträge zu Open -Source -Blogging -Plattformen und Open -Source -CMS. das Sie im Abschnitt "Explore" finden können. Dieser Blog -Beitrag kann Ihnen wirklich helfen, wenn Sie eine Open -Source -Blogging -Plattform für Ihr Unternehmen bereitstellen möchten.
Schließlich schreibt [Containerize.com][8] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie in Kontakt mit den Kategorien [Blogging][9] und [Business Intelligence Software][10] für regelmäßige Nachrichten und Updates

## Erkunden
  * [So installieren Sie Matomo für WordPress | WordPress -Tutorial][11]
  * [Steigern Sie Ihre Leads mit kostenloser BürgerwordPress -Integration][12]
  * [So installieren Sie Plugin in WordPress | Vanilla Forum][13]
  * [Joomla vs Drupal | CMS -Vergleich in 2021][14]
  * [Dinge zu überprüfen, bevor die Open -Source -Software im Jahr 2021 entscheidet][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
