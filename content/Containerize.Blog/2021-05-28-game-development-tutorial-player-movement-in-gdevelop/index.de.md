---
title: "Spielentwicklungs -Tutorial | Spielerbewegung in GDevelop" 
seoTitle: "Spielentwicklungs -Tutorial | Spielerbewegung in GDevelop" 
description: "Folgen Sie diesem Tutorial für Spielentwicklung, um mehr über die grundlegenden Spielfunktionen zu erfahren. GDevelop ist eine kostenlose Software für die Erstellung von Spielen zum Aufbau und Veröffentlichen von Spielen." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Das Bewegen von Objekten auf dem Bildschirm ist ein entscheidender Teil eines jeden Spiels. In diesem Game Development Guide lernen wir, wie man Spielobjekte in GDevelop steuert und verschiebt." 
url: /de/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Das Bewegen von Objekten auf dem Bildschirm ist ein entscheidender Teil eines jeden Spiels. In diesem Game Development Guide lernen wir, wie man Spielobjekte in GDevelop steuert und verschiebt.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Spielentwicklungs -Tutorial">}}


## **Überblick**
Open Source -Community taucht mit dem Durchgang jeder Minute auf. Es gibt plattformübergreifende Spiele, mobile Spiele und Desktop-Spiele. Verschiedene Arten von Spielen umfassen Actionspiele, Abenteuerspiele, Rollenspiele, Sportspiele, Puzzlespiele, Simulationsspiele und viele mehr. Daher haben all diese verschiedenen Spieltypen dem Verkehr einen immensen Schub gegeben, da Benutzer aus allen Altersgruppen dazu neigen, diese Spiele zu spielen.
Darüber hinaus hat die Pandemie eine massive Veränderung des Lebensstils der Menschen auf der ganzen Welt geführt. Die Leute haben jetzt mehr Zeit. Alle Offline -Aktivitäten sind online geworden. Daher neigen sie dazu, sich für Online -Software zu entscheiden, um professionelle Aufgaben und Videospiele im Falle von Unterhaltung auszuführen. Aus all diesen Gründen hat diese Branche Nachhaltigkeit und die Unterstützung der Benutzer und Entwickler erlangt. In der jüngsten Vergangenheit haben wir über Themen wie [HTML5 -Spielentwicklungs -Tutorial für Videospielprogrammierer] [1] [1] [wie die globale Spielebranche Open -Source -Software eingesetzt] [2] und [GDevelop -Tutorial für Anfänger zum Starten der Spielentwicklung] geschrieben. [3]. In diesem Tutorial für Spielentwicklung werden wir die folgenden Punkte behandeln.
  *** [Features Exploration von GDevelop] [4] **
  *** [an einem Spiel arbeiten] [5] **
  *** [Schlussfolgerung] [6] **

## Features Exploration von GDevelop {#Features}
[GDevelop] [7] ist eine Open -Source -Spielerbauplattform. Es ist hoch erweiterbar und bietet eine logische Oberfläche, an der Benutzer problemlos navigieren können. Diese kostenlose Software ist in C ++, TypeScript und JavaScript geschrieben. Darüber hinaus sind umfassende Dokumentationen hinsichtlich Entwicklung und Bereitstellung verfügbar. Der gesamte Quellcode ist bei GitHub verfügbar. Darüber hinaus gibt es viele Funktionen, die dieses Spiel softwarebeihöflich machen. Sehen wir uns einige der wichtigsten Funktionen an.
** plattformübergreifend **: Diese Plattform für Spielerstellung ist multiplattform und kann auf fast allen beliebten Betriebssystemen wie MacOS, Linux und Windows bereitgestellt werden.
** Exportoptionen **: Mit GDevelop können Benutzer mit nur einem Klick für Android, iOS und Web entwickelt werden. Spielbesitzer können Videoanzeigen in ihren Spielen anzeigen und dies kann mit der Unterstützung von Admob möglich sein.
** Reiche Spielobjekte **: Dieser Open -Source -Game -Hersteller bietet eine breite Palette von Spielobjekten wie Sprites mit Animationen, Feuerexplosionen und anderen Effekten mit Hilfe von Partikeln. Formatierter Text, eingebettete Videos und Zeichnen von benutzerdefinierten Formen sind verfügbar, um auffällige Effekte in die Spiele zu bringen.
** Vielseitige Verhaltensweisen **: In diesem grundlegenden Spielentwicklungsartikel zeigen wir Ihnen, wie wir den Spielobjekten unterschiedliche Verhaltensweisen hinzufügen können. Es stehen mehrere Verhaltensweisen zur Verfügung, die zur Verwendung bereit sind, und Benutzer können sich nach Anforderungen weiterentwickeln. Es geschieht alles in wenigen Mausklicks.
** Erweiterte Schnittstelle **: In diesem Tutorial für Spieldesign sehen wir die Benutzeroberfläche dieser 3D -Game -Engine. Benutzer können verschiedene Spielelemente und Objekte ziehen und fallen lassen.

## Arbeiten an einem Spiel {#Working}
In diesem Abschnitt des Tutorial für Spielentwicklung wird die grundlegende Spielentwicklung mit GDevelop erhoben. Bevor Sie weiter gehen, stellen Sie sicher, dass Sie GDevelop lokal auf Ihrem Computer installiert haben.
Sie können dieses Tutorial besuchen [GDevelop -Tutorial für Anfänger, um die Spielentwicklung zu starten] [3], um das Wissen über die Einrichtung dieses Spieleditors auf Localhost zu erhalten.
Öffnen Sie nun den Editor und erstellen Sie ein neues Projekt. In diesem Tutorial erstellen wir einen Ordner auf Google Drive zum Speichern von Spieldateien. Klicken Sie nun auf das "Ein neues Projekt erstellen". Es wird ein neues Dialogfeld geöffnet. Wählen Sie die Option "Leeres Spiel" aus, um ein neues Spiel zu erstellen.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Spielentwicklungs -Tutorial">}}

Klicken Sie auf der Projektmenüleiste der linken Seite auf "Speichern", um das Spiel zu speichern.
Lassen Sie uns zunächst eine Szene hinzufügen. Klicken Sie hierfür auf die Option "Szenen" und benennen Sie sie beispielsweise in diesem Tutorial "Erste Szene" um, das im Bild unten gezeigt ist.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" Spielerbauplattform">}}

Öffnen Sie nach dem Erstellen der Szene sie und fügen Sie ein Objekt hinzu. Klicken Sie zum Hinzufügen eines Objekts auf "Ein neues Objekt hinzufügen", das auf der rechten Seite angezeigt wird. Schließlich wird ein neues Dialogfeld mit unterschiedlichen Vermögenswerten geöffnet. Wählen wir jedoch das Objekt "Red Ship" -Kit "zum Spiel hinzufügen" und schließen Sie das Dialogfeld.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Game Development Guide">}}

Als nächstes sehen Sie ein Objekt, das auf der linken Seite angezeigt wird. Ziehen Sie es auf den Hauptbildschirm und klicken Sie auf die Schaltfläche, die oben links angezeigt wird, um das Spiel zu starten. Daher wird das Spiel in einem neuen Fenster geöffnet, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Spielentwicklungs -Tutorial">}}

Bis jetzt können Sie nicht mit diesem Objekt spielen, da es kein Verhalten hinzugefügt wird. Fügen wir diesem Objekt also ein Verhalten hinzu. Klicken Sie hierfür auf das Schiffsobjekt und klicken Sie auf "Objekt bearbeiten". Es wird ein neues Dialogfeld geöffnet, zur Registerkarte "Verhaltensweisen" navigieren, "Top-Down-Bewegung" auswählen und auf "Anwenden" klicken. Nehmen Sie nun das Spiel vor und Sie werden feststellen, dass Sie das Schiffsobjekt mit Ihren Tastaturpfeiltasten auf dem Bildschirm verschieben können. Jetzt werden Sie feststellen, dass das Schiffsobjekt vom Bildschirm geht. Um dieses Problem zu lösen, bearbeiten Sie daher das Objekt und navigieren Sie zu den Verhaltensweisen. Klicken Sie auf "Fügen Sie dem Objekt ein Verhalten hinzu". Navigieren Sie nun zu „Durchsuchen Sie nach neuen Verhaltensweisen“ und suchen Sie in der Suchleiste nach dem Verhalten „Auf dem Bildschirm“ wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="GDevelop">}}

Wählen Sie es als nächstes aus und installieren Sie es in das Projekt und klicken Sie auf Bewerber. Eine weitere Sache ist, den Mittelpunkt des Objekts anzupassen. Gehen wir also erneut zu den Objekteigenschaften und "Punkte bearbeiten", die unten angezeigt werden. Sie werden auf dem folgenden Bildschirm landen.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Spieldesign -Tutorial">}}

Ziehen Sie also die Marke, die in der linken oberen Ecke in die Mitte des Objekts erscheint, schließen und auftragen. Wenn Sie jetzt das Spiel neu starten, sehen Sie die Änderungen.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Spielentwicklungs -Tutorial">}}


## Schlussfolgerung {#Conclusion}
Dies ist das Ende dieses Tutorial für Spielentwicklung. Hoffentlich wäre dieser Blog -Beitrag für die Spieleentwickler hilfreich. Dieses Tutorial ermöglichte es Ihnen, mit den Spielobjekten zu arbeiten und Verhaltensweisen hinzuzufügen. In Zukunft veröffentlichen Contenterize.com Blog -Beiträge und Tutorial -Artikel zu weiteren Software für Open -Source -Videospieldesign. Bitte bleiben Sie für regelmäßige Updates mit dieser Kategorie [8] in Verbindung mit dieser Kategorie [8] [8] in Verbindung.

## Erkunden
  * [GDevelop] [7]
  * [Godot] [10]
  * [Supermächte] [11]
  * [Cocos Creator] [12]
  * [Panda3d] [13]
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/de/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
