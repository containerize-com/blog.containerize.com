---
title: "So erstellen Sie mit Open Source GDevelop ein Spiel bei Open Source" 
seoTitle: "So erstellen Sie mit Open Source GDevelop ein Spiel bei Open Source" 
description: "Wie mache ich ein Spiel von Grund auf neu? GDevelop bietet eine logische Benutzeroberfläche mit vielen Komponenten und Verhaltensweisen, um Videospiele für Web, Desktop, iOS und Android zu erstellen." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "In diesem Tutorial für Spielentwicklung wird die Grundlagen des Baus eines Lkw -Rennspiels erläutert. Sie können es installieren oder ihre Online -App verwenden, um ein aufregendes Videospiel zu erstellen." 
url: /de/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Dieses Tutorial für Spielentwicklung erklärt die Grundlagen eines Lkw -Rennspiels. Sie können es installieren oder ihre Online -App verwenden, um ein aufregendes Videospiel zu erstellen.

{{< figure align=center src="images/gdevelop-game.png" alt="Wie man ein Spiel bei Kratzer macht">}}


## **Überblick**
In der nahen Vergangenheit haben wir viele Blog -Beiträge zu Open -Source -Software für kostenlose Spieleentwicklung wie [Top 5 Free Game Development Software im Jahr 2021][1][1][mit der Spieleentwicklung mit Supermächten][2], [Spiel) veröffentlicht, [Spiel Entwicklungs -Tutorial | Spielerbewegung in GDevelop][3], [HTML5 -Spielentwicklungs -Tutorial für Videospielprogrammierer][4], [wie die globale Spielebranche Open -Source -Software nutzt][5] und [GDevelop -Tutorial für Anfänger, um die Spielentwicklung zu starten][6 ]. Die jüngsten Fortschritte im Zeitalter des Internets haben neue Trends in der Videospielbranche gebracht. Eine Open -Source -Game -Building -Plattform bietet ein komplettes Ökosystem, um Spiele unabhängig voneinander zu entwickeln, und die Entwickler sind dann diese Plattform nach Bedarf ausgereift. In diesem Blog -Beitrag lernen wir mit [GDevelop][7], wie man ein Spiel auf Kratzer macht, indem wir die folgenden Punkte abdecken.
  *** [Warum sollten wir GDevelop verwenden?][8] **
  *** [Einrichten des Projekts][9] **
  *** [Wie kann man Hintergrund und Objekt vorbereiten?][10] **
  *** [Hinzufügen von Behviors zum Objekt][11] **
  *** [Laufen das Spiel][12] **
  *** [Schlussfolgerung][13] **

## Warum sollten wir GDevelop verwenden? {#Warum}
[GDevelop][7] ist eine Open -Source -Gaming -Software. Es kommt mit Selbsthostfunktionen und ist in der Natur plattformübergreifend. Sie können es herunterladen und installieren oder die Online -Version verwenden, um damit zu spielen. Benutzer müssen kein Programmierkenntnis erhalten, um diesen Spielbauer zu nutzen. Vor allem bietet es eine Drag & Drop-Benutzeroberfläche, die vorgefertigtes Spielverhalten, Vorlagen und Objekte entsteht. Diese kostenlose Spieleentwicklungssoftware ist sehr konfigurierbar und bietet Integrationen mit Bibliotheken von Drittanbietern. Für weitere Informationen zu diesem kostenlosen Tool können Sie diesen Link überprüfen, um weitere Informationen zu seinen Funktionen und den Einrichtungsprozess zu erhalten.

## Einrichten des Projekts {#Setting}
In diesem Abschnitt werden wir unser Projekt zum Aufbau eines Lkw -Rennspiels mit einigen grundlegenden Funktionen erstellen. Folgen Sie diesem [Link][6] Wenn Sie auf Ihrem lokalen Computer einrichten möchten oder die Online -Version verwenden können, indem Sie diesen [Link][14] erhalten.
Sie finden also den folgenden Bildschirm, sobald Sie auf "Ein neues Projekt erstellen" klicken und dann auf "Leeres Spiel" klicken.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Wie man ein Spiel bei Kratzer macht">}}

Sie können die Menüleiste auf der linken Seite des Fensters sehen. Klicken Sie nun auf die "Szenen" und doppelklicken Sie dann auf "Klicken, um eine Szene hinzuzufügen". Danach landen Sie auf dem Spielbildschirm, wo Sie Spielobjekte, Hintergründe und Verhaltensweisen erstellen können. Klicken Sie auf dem rechten Seitenfeld auf "Ein neues Objekt hinzufügen" und Sie sehen das folgende Fenster.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="GDevelop -Tutorial">}}


## Wie kann ich Hintergrund und Objekt vorbereiten? {#vorbereiten}
Suchen Sie in der Suchleiste nach dem LKW -Objekt und doppelklicken Sie darauf und drücken Sie auf "Hinzufügen zum Spiel", sobald es in die Ergebnisse geliefert wird. Wiederholen Sie diesen Schritt für die beiden Räder und ein Plattformobjekt. Klicken Sie nun mit der rechten Maustaste auf das Greenfloor-Objekt und bearbeiten.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Spielentwicklungs -Tutorial">}}


## Hinzufügen von Behviors zum Objekt {#Add}
Ziehen Sie das Greenfloor als nächstes auf den Spielbildschirm und stellen Sie seine Höhe und Breite entsprechend Ihrem Wunsch ein. Ziehen Sie das LKW -Objekt und lassen Sie es auf den Spielbildschirm und dann auf die Radobjekte fallen. Klicken Sie mit der rechten Maustaste auf die LKW-Karosserie und klicken Sie auf "Object Truckbody bearbeiten", klicken Sie auf Verhaltensweisen, klicken Sie auf "Ein Verhalten zum Objekt hinzufügen" und klicken Sie auf "Physics Engine 2.0". Sie sehen das folgende Fenster.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Wie man ein Spiel bei Kratzer macht">}}

In diesem Fenster können Sie die Konfigurationen wie Dichte, Breite und Höhe ändern. Wiederholen Sie nun den gleichen Vorgang für das Greenfloor -Objekt, halten Sie jedoch den Typ "statisch" und klicken Sie auf die Schaltfläche „Anmelden“. Bearbeiten Sie das Truckkörper -Objekt erneut, drücken Sie "Punkte bearbeiten", drücken Sie "EDD -Punkte" und fügen Sie dann den Namen Ihres Vorderrads (d. H. FW in diesem Tutorial) ein. Auf dem Objekt wird ein Punkt erstellt. Ziehen Sie diesen Punkt einfach an den Radstandort. Wiederholen Sie diesen Vorgang auch für das Rückrad und machen Sie das X und Y bis 0, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Spielentwicklungs -Tutorial">}}

Bearbeiten Sie danach beide Radobjekte und passen Sie ihre Punkte ein. Wechseln Sie weiter zur Option Bearbeitungsoption der Räder auf die Registerkarte "Verhalten", wählen Sie "Physics Engine 2.0" und stellen Sie die Werte vom Typ, Radius und Dichte fest, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Spieldesign -Software">}}

Klicken Sie nun auf die Registerkarte "Neue Szene", klicken Sie auf "Neue Ereignisse hinzufügen", klicken Sie auf "Bedingung hinzufügen", suchen Sie nach "Am Anfang der Szene" und klicken Sie auf "OK". Klicken Sie dann auf die Suche auf "Action hinzufügen" nach "Camera Center X -Position" und stellen Sie die folgenden Konfigurationen ein.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Kostenlose Spieleentwicklungssoftware">}}

Kopieren Sie nun die Aktion, stellen Sie jedoch sicher, dass die kopierte Aktion auf "Y" festgelegt ist. Fügen Sie eine weitere Aktion mit dem Namen "Camera Zoom" hinzu, setzen Sie sie auf 0,4 und ziehen Sie diese Aktion nach oben. Fügen Sie eine weitere Aktion hinzu, suchen Sie nach der "Radfuge hinzufügen" und setzen Sie die Konfigurationen für beide Räder wie unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Game Development Guide">}}

Fügen Sie danach eine neue Bedingung hinzu, suchen Sie nach „Taste gedrückt“ und stellen Sie sie nach links ein. Fügen Sie nun Aktion hinzu, wählen Sie das erste Rad, suchen Sie nach linearer Geschwindigkeit x ", Modifikationszeichen, um zu" subtrahieren "und den Wert 50 festlegen. Wiederholen Sie diesen Schritt für die rechte Taste, stellen Sie jedoch sicher, dass das Änderungszeichen in Hinzufügen wie unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Spielentwicklungs -Tutorial">}}


## Ausführen des Spiels {#run}
Sobald alle Schritte abgeschlossen sind. Es ist Zeit, das Spiel auszuführen, indem Sie die Taste in der oberen linken Ecke drücken. Es wird das Spiel in das neue Fenster starten.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Wie man ein Spiel bei Kratzer macht">}}


## Schlussfolgerung {#Conclusion}
Dies ist das Ende dieses Blog -Beitrags, und Sie haben sicherlich erfahren, wie man ein Spiel auf Grundstücken macht. Es gibt jedoch viele kostenlose ** Spieledesign -Software ** auf dem Markt, da diese Branche an Popularität und Nachfrage gewinnt. Es gibt mehrere Gründe dafür, wie Open-Source-Software skalierbar, konfigurierbar, kostengünstig und leicht zu warten. Darüber hinaus nimmt die Nachfrage nach plattformübergreifenden Spielbauern zu, da Entwickler es angenehm finden, ein Spiel zu erstellen, das auf allen beliebten Plattformen wie Android, iOS, Web und Desktop ausgeführt wird. Andererseits hat das Aufkommen der Pandemie das Leben der Menschen verändert und sie bevorzugen es jetzt, drinnen zu bleiben. Daher spielen die Leute in ihrer Freizeit Videospiele.
Schließlich ist [Containerize.com][15] bereit, seine Tutorial -Basis mit einigen interessanteren Tutorials für Spielentwicklungen ** zu verbessern. Bitte bleiben Sie für regelmäßige Updates mit dieser Kategorie [16] -Kategorie in Verbindung.

## Erkunden
  *** [gDevelop][7] **
  *** [Godot][17] **
  *** [Supermächte][18] **
  *** [Cocos Creator][19] **
  *** [panda3d][20] **
  *** [Playcanvas][21] **
  *** [Erste Schritte mit Spielentwicklung mit Supermächten][2] **
  *** [Tutorial für Spielentwicklung | Spielerbewegung in GDevelop][3] **
  *** [HTML5 Game Development Tutorial für Videospielprogrammierer][4] **
  *** [Wie global Gaming -Branche Open -Source -Software nutzt][5] **
  *** [GDevelop -Tutorial für Anfänger, um die Spielentwicklung zu starten][6] **
  *[** Top 5 Free Game Development Software im Jahr 2021 **][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
