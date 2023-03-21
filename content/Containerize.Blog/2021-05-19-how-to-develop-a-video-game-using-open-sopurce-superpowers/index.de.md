---
title: "So entwickeln Sie ein Videospiel mit Open-Sopurce-Supermächten" 
seoTitle: "So entwickeln Sie ein Videospiel mit Open-Sopurce-Supermächten" 
description: "Wie entwickle ich ein Videospiel? Superpowers ist eine Open-Source-HTML5-Spielentwicklung. Es ist Cross -Plattform und ermöglicht es Benutzern, animierte 2D- und 3D -Spiele zu erstellen." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Kostenlose Software für Videospieldesign für Videospielentwicklung mit einem Offline -Modus. Selbsthostern Sie es, erstellen Sie animierte 2D & amp; 3D -Spiele mit Soundeffekten und Schriftarten." 
url: /de/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## kostenlose Software für Videospieldesign für Videospielentwicklung mit einem Offline -Modus. Selbsthostel it, erstellen Sie animierte 2D- und 3D-Spiele mit Soundeffekten und Schriftarten.

{{< figure align=center src="images/superpowers.png" alt="So entwickeln Sie ein Videospiel">}}


## Überblick
In der Vergangenheit wurden einige Artikel in der Kategorie [Game Development Software][1] veröffentlicht, in der die globale Gaming -Branche mit Open -Source -Software und GDevelop -Tutorial für Anfänger mit dem Beginn der Spiele entwickelt wird. Die Entwicklung der Videospiele ist weltweit viel mehr verbreitet mit der zunehmenden Nachfrage nach unterhaltsamen Spielen. Es beinhaltet jedoch die Idee, Entwurfsentwicklung, kontinuierliche Tests, Freisetzungen und Feedback. Mit anderen Worten, es geht darum, Designer, Softwarearchitekten, Programmierer, Tester und Unterstützungsressourcen zu unterstützen. Darüber hinaus gibt es viele Arten von Spielen wie Actionspiele, Puzzlespiele, Rennspiele, kognitive Spiele und einige mehr.
Daher ist ein guter Game Development Guide dringend erforderlich, um mit einem 3D -Spielbauer zu beginnen. Die Open-Source-Community hat viele Spieleentwicklungssoftware entwickelt, die Funktionen und Versorgungsunternehmen auf Unternehmensebene bieten, um 3D- und 2D-Spiele zu entwickeln. In diesem HTML5 -Spielentwicklungs -Tutorial wird untersucht, wie ein Videospiel mit der kostenlosen Software für Videospielentwicklung **Supermächte**  entwickelt werden kann, indem die folgenden Punkte behandelt werden.
  ***[Was ist Supermächte][2]** 
  ***[Wie man sich auf Localhost einrichten?][3]** 
  ***[Dashboard der Supermächte?][4]** 
  ***[Schlussfolgerung][5]** 

## Was ist Supermächte   {#Intro}
[Supermächte][6] ist eine Open -Source -Software für die Entwicklung von Videospielen. Es ist flexibel, robust und erweiterbar. Es bietet jedoch Unterstützung für Animationen, 3D -Modelle und eine breite Palette von Spielbeispielen. Darüber hinaus wird auch eine Offline -Version geliefert, in der Benutzer Spiele ohne Internetkonnektivität erstellen können. Das Veröffentlichen eines Projekts ist erstaunlich einfach und alles, was mit einem einzigen Klick passiert. Es gibt ein intuitives Dashboard für Benutzer, in dem Benutzer einfach durch verschiedene Elemente navigieren können. Vor allem gibt es eine sehr coole Live -Fehlerberichterstattung, bei der der Entwickler den Fehler zeigt, um Unklarheiten oder Fehler zu vermeiden. Supermächte sind einfach einzurichten und erfordert einfache Anforderungen, um auf Servern weiter zu hosten. Dieser 3D -Game -Builder ist in TypeScript geschrieben und verfügt über die gesamte Dokumentation zur Entwicklung und Bereitstellung. Daher ist der gesamte Quellcode unter [Github][7] verfügbar.
Superpowers bietet die folgenden wichtigen Punkte:
  * Live -Fehlerberichterstattung
  * Mehrsprachig
  * Plattformübergreifend
  * Rich Schriftart & Soundeffekte
  * Selbst veranstaltet

## Wie ich auf Localhost einrichten soll?   {#aufstellen}
Wenn Sie sich immer noch fragen, wie Sie ein Videospiel entwickeln, werden wir in diesem Teil des Artikels lernen, wie man Superkräfte auf Localhost einrichtet. In diesem Abschnitt wird dieser **Game Development -Leitfaden**  den Prozess der Einrichtung der Spieleentwicklungsumgebung erläutern.
Stellen Sie zunächst sicher, dass Sie die folgenden Voraussetzungen installiert haben, bevor Sie die Entwicklung der Videospiele beginnen:
  * Git
  * npm
  * Node.js
Die oben genannten Anforderungen sind einfach und sehr bekannt, so dass es für Anfänger keine schwierige Aufgabe ist. Öffnen Sie nach der Installation der oben genannten Anforderungen das Terminal und führen Sie den folgenden Befehl aus, um den Quellcode zu klonen:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Gehen Sie nach einem erfolgreichen Klon in das heruntergeladene Verzeichnis, indem Sie den folgenden Befehl ausführen:
```
cd superpowers/core
```
Führen Sie nun den folgenden Befehl aus, um das Superpowers -Spielesystem zu klonen:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Führen Sie danach den folgenden Befehl aus, um den Build zu erstellen:
```
npm run build
```
Starten Sie nach einem erfolgreichen Build den Server, indem Sie den folgenden Befehl ausführen:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5 Game Development Tutorial">}}

Öffnen Sie nun den Browser und greifen Sie unter dem folgenden Link auf die Anwendung zu:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Dashboard der Supermächte?   {#Merkmale}
Wenn Sie die obige URL treffen, sehen Sie die folgende Startseite. Es gibt Optionen zum Ändern oder Erstellen eines neuen leeren oder 2D -Plattformprojekts.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Videospielentwicklung">}}

Wenn Sie sich die Frage zur Entwicklung eines Videospiels entwickeln, werden Sie nach dem Erstellen eines 2D -Plattformers den folgenden Bildschirm angezeigt. Sie können die Optionen auf der linken Seite des Fensters sehen, z. B. das Erstellen von Szenen, das Einstellen der Kachel, die Spielkarte und den Spieler. Es gibt eine Live -Codierungsoption, bei der Sie das Verhalten des Benutzers codieren können.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="Videospielentwicklung">}}

Darüber hinaus befindet sich auf der linken Seite eine Einstellleiste, in der Sie die Animationen festlegen, das Bild rendern, hochladen oder das Bild herunterladen können. Auf der linken Seite gibt es die Möglichkeit, Ihrem Projekt weitere Vermögenswerte hinzuzufügen, wie im Bild unten gezeigt. Es enthält ein 3D -Modellkubikmodell, die FINT -Option, wenn Sie die Schriftart ändern möchten. Darüber hinaus können Benutzer weitere Szenen, Skripte, Shader und Sprites hinzufügen. Darüber hinaus können Sie mit diesem Open -Source -3D -Spielbuilder verschiedene Soundeffekte in die Spiele hinzufügen, um Spieler mit den bestmöglichen Spieleffekten zu gewinnen. Zu guter Letzt können Sie auch Fliesenkarte und Fliesensätze hinzufügen.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="Videospieldesign">}}

Ebenso können Sie nach diesem Spielartikel ihn weiter untersuchen und alle Funktionen nutzen. Darüber hinaus können Sie verstehen, wie Sie Superpowers -Videospielbauer fortsetzen können. Für diese Spieleentwicklungssoftware steht Online -Support zur Verfügung.

## **Fazit** {#Conclusion}
Dies führt zu diesem HTML5 -Game Development Guide. Hoffentlich hilft Ihnen dieser Blog -Beitrag, wenn Sie gerne mit der Entwicklung der Videospiele beginnen möchten. Wir haben untersucht, was Supermächte sind, wie man ein Videospiel entwickelt, bei dem es sich um einen Open -Source -3D -Spielbauer handelt, und wir haben auch seinen Installationsverfahren auf Localhost durchlaufen. Es gibt viele Open Source **Videospieldesign -Apps** , mit denen Benutzer Spiele von Grund auf neu erstellen können. Videospielprogrammierer verwenden wichtige Prinzipien für Spieldesign, um hochwertige Spiele aufzubauen. Weitere Informationen zum Erstellen von 2D- und 3D -Spielen finden Sie in unseren kommenden Artikeln unter [blog.containerize.com][8]. Es gibt andere Open Source, selbst gehostete 3D-Spielerbauer und relevante Artikel, die im Abschnitt „Explore“ unten erwähnt wurden.
Schließlich schreibt Containerize.com ständig Blog-Beiträge zu weiteren Open-Source-Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [Videospiele][9][][10] in Kontakt, um regelmäßig Updates zu erhalten. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][11], [LinkedIn][12] und [Twitter][13] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [][14][GDevelop][14]
  * [][14][Godot][15]
  * [][14][Supermächte][6]
  * [][14][Cocos Creator][16]
  * [][14][Panda3d][17]
  ***[Erste Schritte mit Spielentwicklung mit Supermächten][18]** 
  ***[Tutorial für Spielentwicklung | Spielerbewegung in GDevelop][19]** 
  *[**Wie man mit Open Source GDevelop ein Spiel bei Open -Source -Entwicklungsgruppe erstellt** ][20]
  ***[Wie global Gaming -Branche Open -Source -Software nutzt][21]** 
  ***[GDevelop -Tutorial für Anfänger, um die Spielentwicklung zu starten][22]** 
  *[**Top 5 kostenlose Spieleentwicklungssoftware im Jahr 2021** ][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
