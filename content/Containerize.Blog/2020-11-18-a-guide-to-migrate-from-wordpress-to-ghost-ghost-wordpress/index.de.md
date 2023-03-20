---
title: "Eine Anleitung zur Migration von WordPress zu Ghost | WordPress Ghost" 
seoTitle: "Eine Anleitung zur Migration von WordPress zu Ghost | WordPress Ghost" 
description: "In diesem Tutorial geht es darum, wie man von WordPress zu Ghost migriert. Wir lernen, wie Sie Ihre Beiträge und Seiten von der vorhandenen WordPress -Website auf den Geist migrieren." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost und WordPress sind zwei führende Open-Source-Content-Publishing-Plattformen. In diesem Tutorial lernen wir, wie Sie Inhalte von WordPress zu Ghost migrieren." 
url: /de/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost und WordPress sind zwei führende Open-Source-Content-Publishing-Plattformen. In diesem Tutorial lernen wir, wie Sie Inhalte von WordPress zu Ghost migrieren.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migrieren Sie von WordPress zu Ghost">}}


## Überblick
In der Vergangenheit haben wir viele Artikel zu Themen wie [Förderung Ihrer Leads mit kostenloser Civicrm WordPress -Integration][1] veröffentlicht [1], [wie man das Diskursforum in WordPress integriert][2] und vieles mehr. Ghost ist eine aufstrebende Open -Source -Blogging -Plattform. Es handelt sich um ein Node.js -CMS für das Veröffentlichung von Inhalten und verfügt über eine einfache und saubere Schnittstelle, die es einfach zu bedienen macht. Es ist eine wundervolle Plattform für Anfänger, da sie sich auf Markdown anstelle auf die Bearbeitung von Wysiwyg konzentriert. Die Kraft und Geschwindigkeit von Node.js machen Ghost sehr schnell. Aufgrund der Einfachheit der Plattform wechseln viele Benutzer von anderen Plattformen. Da WordPress die Plattform Nummer eins für das Content Management ist.
Daher migrieren mehr Benutzer ** von WordPress zu Ghost **. Es gibt viele Inhalte, die Mediendateien, Kommentare, Beiträge und usw. enthalten. Es stehen Plugins zur Verfügung, mit denen Sie Inhalte von WordPress auf Ghost migrieren können. Der Hauptvorteil der Einführung von Ghost besteht darin, dass es sich auf die Optimierung der Suchmaschinen konzentriert. In diesem WordPress Ghost -Tutorial werden wir alle Migrationsschritte mit dem offiziellen WordPress Export -Plugin durchlaufen.
  *** [Ein WordPress -Intro von WordPress][3] **
  *** [Was ist Ghost?][4] **
  *** [Anforderungen][5] **
  *** [Inhalt von Wrodpress mit Plugin][6] ** exportieren
  *** [Inhalt in den Geist importieren][7] **
  *** [Fazit][8] **

## ** Ein WordPress -Intro ** {#WP}
[WordPress][9] ist eine führende Open -Source -Blogging -Plattform, die eine große Anzahl von Websites betrieben hat. Diese kostenlose Blogging-Software ist selbst gehostet, mehrsprachig und unterstützt viele Sprachen. Darüber hinaus ist die Entwicklungsgemeinschaft von WordPress sehr lebendig und hat einen gigantischen Pool nützlicher Plugins entwickelt, die leicht verfügbar sind. Diese Plugins adressieren fast jeden Anwendungsfall Ihrer Unternehmenswebsite. Darüber hinaus ist es in PHP geschrieben und verfügt über umfassende Dokumentation zu Entwicklung und Bereitstellung. Der gesamte Quellcode ist auf GitHub verfügbar. Darüber hinaus ist diese Blogging-Plattform hoch erweiterbar, konfigurierbar und bietet Integrationen mit Anwendungen von Drittanbietern. Es gibt ein sehr logisches und leicht verständliches Dashboard, in dem Benutzer Elemente ziehen können, um das Erscheinungsbild ihrer Websites zu ändern.

## ** Was ist Ghost? ** {#ghost}
[Ghost][10] ist eine weitere beliebte Open -Source -Blogging -Plattform. Dies ist eine der am häufigsten verwendeten Content -Publishing -Plattformen, die von Entwicklern und Site -Eigentümern stark übernommen werden. Darüber hinaus ist Ghost hochseo-freundlich und verfügt über integrierte Themen, Formulare, E-Mail-Newsletter und Abonnements. Diese kostenlose Blogging -Software ist in JavaScript geschrieben und alle Dokumentationen finden Sie in Bezug auf Entwicklung und Bereitstellung.

## Anforderungen {#Requirements}
Im Abschnitt des WordPress -Ghost -Tutorials werden die Anforderungen angezeigt, die für die Migration von WordPress zu Ghost erforderlich sind. Mit dem offiziellen WordPress Export -Plugin können Sie Ihren Inhalt problemlos von WordPress auf Ghost migrieren. In diesem Tutorial führen wir Sie dazu, wie Sie Ihre Inhalte von WordPress auf eine Ghost -Site exportieren können. Sie müssen also eine funktionierende Installation von WordPress und WordPress ** Export -Plugin ** installiert haben.

## Inhalt von WordPress {#export} exportieren
Zunächst müssen Sie das Plugin installieren. Befolgen Sie die folgenden Schritte, um das Plugin zu installieren
  *Klicken Sie auf ** Plugins ** Aus dem Seitenleistenmenü
  *Klicken Sie auf ** Neu hinzuzufügen
  *** install ** und ** aktivieren ** das Plugin durch „** Ghost Foundation **“

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Installieren und aktivieren Sie das Ghost -Plugin für WordPress">}}

  *Sobald das Plugin aktiviert ist, navigieren Sie zu ** Tools ** vom Seitenmenü aus
  *Klicken Sie auf ** Exportieren Sie in den Ghost ** mit dem Sidebar -Menü.
  * Sie erhalten eine Anleitung zum Vorbereiten Ihres WordPress -Inhalts für Ghost.
  * Da Ghost Tags anstelle von Kategorien verwendet, hilft das Plugin Ihnen, Kategorien in Tags umzuwandeln.
{{_LINE_37_}}
{{_LINE_38_}}
    Die folgenden Schritte ändern die Inhaltsstruktur Ihrer WordPress -Site dauerhaft. Wenn Sie sich nicht sicher sind, dass Sie diese Änderung vornehmen, verwenden Sie bitte das Standard -WordPress -Export -Tool unter Tools> Export, um eine vollständige Sicherung aller Ihrer Inhalte zu erstellen.
{{_LINE_40_}}
{{_LINE_41_}}
  *Navigieren Sie zu ** Import ** im Sidebarmenü
  *Klicken Sie auf ** Importeur ausführen ** unter dem Taxonomie -Konverter ** Importieren.
  * Verwenden Sie die Kontrollkästchen, um die Kategorien auszuwählen, die Sie in Ihre Tags importieren möchten, und damit in Ihre Ghost -Site.
  *Klicken Sie dann auf ** Konvertieren Sie Kategorien in Tags **.
  *Navigieren Sie zurück zu ** Exportieren Sie in den Ghost ** In ** Tools ** im Sidebar -Menü.
  *Klicken Sie auf die Schaltfläche ** Download Ghost -Datei **. Sie haben eine ZIP -Datei mit allen Ihren Inhalten heruntergeladen.

## Inhalt in Ghost {#import} importieren
In diesem Abschnitt des WordPress Ghost -Tutorials werden wir die Schritte zum Importieren von Inhalten in Ghost implementieren.
  *Melden Sie sich bei Ghost Admin an und navigieren Sie zu ** Labs ** Ansicht.
  *Klicken Sie auf die Schaltfläche ** Datei auswählen ** In der Option ** importieren ** und wählen
  *Klicken Sie auf ** Import **. Alle Ihre Inhalte werden dann in Ihre Ghost -Site importiert.
Zu diesem Zeitpunkt hat Ghost kein integriertes Kommentarsystem. Die beliebteste Alternative ist Disqus.

## Schlussfolgerung {#Conclusion}
Dies bringt uns zum Ende dieses Blog -Beitrags. In diesem WordPress -Ghost -Tutorial haben wir gelernt, wie Sie Ihren WordPress -Inhalt bereitstellen, der für die Migration zum Ghost bereit ist. Wir haben das offizielle Ghost -Migrations -Plugin von der Ghost Foundation verwendet, um Migrationen durchzuführen. Darüber hinaus hilft Ihnen dieser Blog -Beitrag sicherlich, wenn Sie von WordPress zu Ghost migrieren möchten, da wir alle erforderlichen Schritte behandelt haben. Darüber hinaus gibt es viele Open -Source -Inhalte -Veröffentlichungsplattformen und Tutorial -Artikel, die im Abschnitt „Explore“ unten erwähnt werden. Beide Open-Source-Blogging-Plattformen sind jedoch die führende führende Software, die Funktionen auf Unternehmensebene bieten, um die Bedürfnisse Ihrer Unternehmenswebsites zu erfüllen.
Schließlich hat [Containerize.com][11] neue Blog -Beiträge zu weiteren Open -Source -Software geschrieben. Bleiben Sie daher bitte in Verbindung mit [dieser][12] Plattform für regelmäßige Updates.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [WordPress][9]
  * [Jekyll][13]
  * [Diskurs][14]
  * [Ghost][10]
  * [Wie man WordPress mit Docker komponieren][15]
  * [So aktivieren Sie die Gzip -Komprimierung in WordPress für bessere Pagspeed und SEO][16]
  * [Steigern Sie Ihre Leads mit kostenloser BürgerwordPress -Integration][1]
  * [Automatisieren Sie das Ticketing -System mit WordPress und Osticket][17]
  * [So integrieren Sie das Diskursforum in WordPress][2]
  * [Suchverkehr erhöhen, indem Sie Top 7 SEO -Blogs folgen][18]
  * [So erstellen Sie Ihre Website mit WordPress und Gatsby][19]

  
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
