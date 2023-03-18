---
title: "Erste Schritte mit Spielentwicklung mit Supermächten" 
seoTitle: "Erste Schritte mit Spielentwicklung mit Supermächten" 
description: "Superpowers ist ein Open -Source -3D -Spieler mit Echtzeitzusammenarbeit. In diesem Tutorial geht es darum, mit der Spieleentwicklung mit Supermächten zu beginnen." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Das Verhalten und die Bewegung von Spielobjekten werden durch Animationen gesteuert. In diesem Tutorial für Spielentwicklung lernen wir, wie man Spielfiguren animiert." 
url: /de/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Das Verhalten und die Bewegung von Spielobjekten werden durch Animationen gesteuert. In diesem Tutorial für Spielentwicklung lernen wir, wie man Spielfiguren animiert.

{{< figure align=center src="images/super.png" alt="Erste Schritte mit der Spieleentwicklung">}}


## **Überblick**
In unserer Tutorial -Serie der Open -Source -Spieleentwicklung haben wir Blog -Beiträge zu einigen beliebten Themen wie [Game Development Tutorial | veröffentlicht Spielerbewegung in GDevelop] [1], [HTML5 -Spielentwicklungs -Tutorial für Videospielprogrammierer] [2], [wie die globale Spielebranche Open -Source -Software nutzt] [3] und [GDevelop -Tutorial für Anfänger, um die Spielentwicklung zu starten] [4 ]. In diesem Tutorial -Artikel geht es darum, mit der Spieleentwicklung mit kostenlosen Open Source [Supermächten] [5] zu beginnen, indem sie die folgenden Punkte abdecken.
  *** [Arten von Spielanimationen] [6] **
  *** [Wie erstellt man Sprites?] [7] **
  *** [Arbeiten mit Szenen] [8] **
  *** [Starten des Spiels auf Localhost] [9] **
  *** [Fazit] [10] **
Es gibt viele Open-Source-Spieleentwicklungssoftware für Anfänger mit Selbsthostfunktionen. [Supermächte] [5] ist jedoch eine plattformübergreifende 2D- und 3D-Spielerstellungssoftware. Es bietet integrierte Bibliotheken und Spiele, die Spieleentwicklungen für Spieleentwickler erleichtern. Diese kostenlose Spieldesign -App ist in TypeScript geschrieben und die gesamte Dokumentation ist unter [Github] [11] in Bezug auf Entwicklung und Bereitstellung verfügbar. In diesem Blog -Beitrag werden wir Superkräfte bezüglich ihrer Verwendung untersuchen.

## Arten von Spielanimationen {#types}
Animationen sind ein wesentlicher Bestandteil von Videospielen. Charaktere in den Spielen müssen auf die Aktionen des Benutzers reagieren, die Animation sollte reibungslos und abrupt sein. Es geht darum, mehrere Frames und Animatoren zu verwalten, um diese Frames zu verfeinern, um bewegende Effekte zu erzielen. Darüber hinaus gibt es 2D- und 3D-Animationen, bei denen sich Objekte im dreidimensionalen Raum zu bewegen scheinen. Spieleentwickler und Grafikdesigner erstellen 3D -Modelle. Animationen hängen von der Art des Spiels ab und die häufigsten Typen sind wie folgt.
** Walk Animation: ** Walk Animation handelt von der Schaffung eines Geh -Prozesses, bei dem Charaktere jeden Schritt animieren und Wanderleitungen geben.
** Idle Animation: ** Dies ist eine sehr wichtige Art von Animation, bei der das Zeichen nichts tut, da der Benutzer keinen Controller drückt.
** Run Animation **: Run Animation ist Teil jedes Spiels, in dem das Spielobjekt den Laufzyklus ausführt. Dieser Typ ist der häufigste Typ und erfordert mehr Aufmerksamkeit vom Entwickler.
** Kämpfe Animation **: In Kampfspielen kämpfen mehrere Spielcharaktere miteinander.
** Sprunganimation **: Diese Art von Animation erfordert bessere Fähigkeiten und Fachkenntnisse. Charakter komprimiert und freisetzt den Körper, um die Sprungillustration durchzuführen.

## Wie erstellt man Sprites? {#sprites}
In diesem Abschnitt des Leitfadens für das Game Making können Benutzer Projekte erstellen und Sprites für das Spiel erstellen. Sprites sind nicht statische Bilder oder Grafiken, die nicht nur in Spielen, sondern auch Teil des Webdesigns verwendet werden. Diese werden normalerweise über einen Hintergrund gezogen, der ständig aktualisiert wird.
Stellen Sie vor dem weiteren weiterverkehrsberechtigten Supermächten auf Ihrer Maschine ein. Sie können diesen Link folgen [HTML5 Game Development Tutorial für Videospielprogrammierer] [2], um diese kostenlose Plattform für kostenlose Spielerstellung einzurichten.
Öffnen Sie zunächst die Anwendung im Browser und erstellen Sie ein neues leeres Projekt. Wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Erste Schritte mit der Spieleentwicklung">}}

Sie werden im Projektbereich landen, nachdem Sie das neue leere Projekt erstellt haben. Es gibt Menüoptionen am linken Seitenfeld. Klicken Sie also auf die Schaltfläche "+", um das Dialogfeld "Asset" zu öffnen. Wählen Sie die Option Sprite -Option und klicken Sie auf Erstellen.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Game Making Guide">}}

Laden Sie nun das Bild hoch, auf dem wir Verhalten hinzufügen. Sie können dies tun, indem Sie auf die Schaltfläche oben rechts klicken. In diesem Bereich geht es um die Konfiguration des Objekts.
Als nächstes können Sie die Gittergröße nach Ihrer Wahl festlegen. Es gibt zwei Teile der Leinwand. Der obere Teil zeigt das vollständige Blatt, in dem der untere Teil den ausgewählten Teil zeigt, auf dem wir Animation anwenden sollen. Sie können dies tun, indem Sie die Taste „Setup“ auf der rechten Seite drücken, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Spielentwicklungs -Tutorial">}}

Lassen Sie uns danach Animationen erstellen. Wir können dies tun, indem wir auf der Registerkarte Animation auf die Schaltfläche „Neu“ klicken. Sie können das Bild unten sehen.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Spieleentwicklungssoftware für Anfänger">}}


## Mit Szenen {#scenes} arbeiten
In diesem Abschnitt werden wir unserem Spiel eine Szene hinzufügen. Öffnen Sie dafür erneut das Dialogfeld Assets und wählen Sie "Szene" und drücken Sie die Taste erstellen. Erstellen Sie nun einen Schauspieler, indem Sie auf die Sternschaltfläche in der oberen rechten Ecke klicken, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="So machen Sie ein Spiel für Anfänger bei Kratzer">}}

Erstellen Sie danach eine neue Komponente, indem Sie auf die Schaltfläche „Neue Komponente“ auf der rechten Seite klicken. Wählen Sie "Sprite Renderer" und klicken Sie auf Erstellen. Ziehen Sie dann das erstellte Sprite aus der linken Seitenplatte und lassen Sie es unter den Abschnitt "Sprite-Renderer" fallen. Erstellen Sie außerdem einen anderen Schauspieler namens „Camera“ und erstellen Sie ebenfalls eine neue Komponente namens Camera.
Sie können den Kamera -Modus ändern. Ändern Sie ihn also in den „Orthografie“ -Modus, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Erste Schritte mit Spielentwicklung,">}}

Navigieren Sie in der unteren linken Ecke zur Option Einstellungen und öffnen Sie sie. Führen Sie unter den Abschnitten „Sprite“ und „Fliesenkarte“ 16 gegen „Pixel pro Einheit“ ein. Wählen Sie im Abschnitt "Szene" im Abschnitt "Szene" im Abschnitt "Szene" 2D aus. Darüber hinaus im Abschnitt „Fliesenkarte“, Standardbreite 36, Standardhöhe 28 und Fliesen -Set -Gittergröße 16. Es besteht keine Notwendigkeit, es zu speichern, sondern alles ist auf Autosave.

## Starten des Spiels auf Localhost {#Local}
Wir stehen also kurz davor, die Supermächte -Animation unseres ersten Spiels zu starten. Gehen Sie jedoch erneut zur Registerkarte Einstellungen und ziehen Sie die Szene aus der linken Seite und lassen Sie sie gegen die Startszene fallen, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="So machen Sie ein Spiel für Anfänger bei Kratzer">}}

Klicken Sie nun auf "Player" und wählen Sie unter der Komponente "Sprite Renderer" die Animation mit dem Attribut "Animation" aus. Starten Sie die Anwendung schließlich, indem Sie auf die Schaltfläche oben links klicken. Auf der neuen Registerkarte werden die sich bewegenden Objekte auf dem Bildschirm angezeigt.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Erste Schritte mit der Spieleentwicklung">}}


## Schlussfolgerung {#Conclusion}
Dies ist das Ende des Tutorials, in dem wir gelernt haben, wie man für Anfänger ein Spiel für Kratzer macht. Daher wird der Beginn der Spieleentwicklung einfach, wenn eine detaillierte Dokumentation der Spieleentwicklungssoftware verfügbar ist. Schließlich befindet sich [** Containerize.com **] [12] in einem konsistenten Prozess, Artikel zu weiteren Open -Source -Themen und -produkten zu schreiben. Bitte bleiben Sie mit dieser Kategorie [13] -Kategorie in Kontakt mit dieser [Spieleentwicklungssoftware] für regelmäßige Updates.

## Erkunden
  * [GDevelop] [14]
  * [Godot] [15]
  * [Supermächte] [5]
  * [Cocos Creator] [16]
  * [Panda3d] [17]
  * [Playcanvas] [18]
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
