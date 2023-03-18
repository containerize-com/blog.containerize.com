---
title: "Eine Schritt -für -Schritt -Anleitung zum Einrichten von Open Source Jitsi Meet" 
seoTitle: "Eine Schritt -für -Schritt -Anleitung zum Einrichten von Open Source Jitsi Meet" 
description: "Erfahren Sie, wie Sie Jitsi treffen. Es handelt sich um eine Open -Source -Video -Konferenz -Software, die die Remote -Kommunikationsanforderungen entspricht, und bietet leistungsstarke Funktionen" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet bringt abgelegene Personen zusammen, um effektive Besprechungen durchzuführen. Lassen Sie uns lernen, wie Sie diese Videokonferenzsoftware einrichten und ihre Funktionen erkunden" 
url: /de/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet bringt abgelegene Personen zusammen, um effektive Besprechungen durchzuführen. Lassen Sie uns erfahren, wie Sie diese Videokonferenzsoftware einrichten und ihre Funktionen erkunden

{{< figure align=center src="images/jitsi-bannerF.png" alt="Videokonferenzsoftware">}}


## Überblick
Wir haben kürzlich einen [Blog -Beitrag] [1] veröffentlicht, der über die Auswirkungen von [Videokonferenzsoftware] [2] auf den Unternehmenssektor spricht. In diesem Artikel werden wir jedoch die folgenden Punkte behandeln.
  * [Eine kurze Einführung von Jitsi Meet] [3]
  * [Wie man Jitsi treffen?] [4]
  * [Jitsi Meet Features Exploration] [5]
  * [Schlussfolgerung] [6]

## Eine kurze Einführung von Jitsi Meet {#Intro}
[Jitsi Meet] [7] ist eine völlig kostenlose Open -Source -Software für sichere und skalierbare Videokollaboration. Es bietet mehrere beliebte Funktionen, wie z. B. Multiparty -Videokonferenzen mit vollem Verschlüsselung, Unterstützung für EtherPad und Video-/Audioaufzeichnung. Mit dieser WebRTC -kompatiblen Software können Sie so viele Benutzer in ein Video -Meeting einladen.
Der Aufstieg virtueller Meetings begann in jüngster Zeit und die Leute glauben, dass die Kommunikation durch Video-/Audioanrufe effektiver und kollaborativer ist. Vor allem diese Kategorie von Software funktioniert nicht nur auf Laptops/Desktops, sondern ermöglicht es den Teilnehmern auch, sich von der Angesicht zu Angesichtssicherung über ihr Mobiltelefon zu besuchen.

## Wie ich Jitsi treffen kann? {#aufstellen}
In diesem Abschnitt werden wir in den Installationsprozess von Jitsi Meet einsteigen. Stellen Sie zunächst sicher, dass Sie die folgende Voraussetzung installiert haben.
  * [Docker] [8]
Sobald Docker installiert ist, laden Sie die ZIP -Datei des Quellcode aus diesem [Link] [9] herunter.
Öffnen Sie das Terminal und führen Sie den folgenden Befehl aus
`cd docer-jitsi-meet`
Führen Sie danach den folgenden Befehl aus, um ein `.env` zu erstellen
`cp env.example .env`
Führen Sie nun den folgenden Befehl aus, um die erforderlichen Verzeichnisse zu erstellen.
`mkdir -p ~/.jitsi-meet-cfg/{web/letSencrypt, Transkripte, Prosody/Konfiguration, Prosody/Prosody-Plugins-Custom, Jicofo, JVB, Jigasi, Jibri}`
Führen Sie schließlich diesen Befehl aus, um das Docker -Bild zu verbessern und auf die Anwendung in dieser URL im Browser zuzugreifen.
`Docker -compose up -d`

## Jitsi Meet Features Exploration {#Features}
Diese kostenlose Video -Chat -Software bietet viele reichhaltige Funktionen. Dies ist die Startseite, die zuerst angezeigt wird.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="Videokonferenzen">}}

Geben Sie die Überschrift des Meetings ein und klicken Sie auf "Go". Sie werden in das folgende Video -Stream -Fenster landen.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="Quelloffene Software">}}

Sie können Personen in das Meeting einladen, indem Sie den im Popup -Fenster gezeigten Link teilen. Darüber hinaus können Sie den Video -Stream überall einbetten, indem Sie den Code erhalten.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="Quelloffene Software">}}

Es gibt Ihnen die Möglichkeit, Ihren Bildschirm mit anderen Teilnehmern zu teilen.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Video -Chat">}}

In der oberen rechten Ecke können Sie die Details Ihrer Videoverbindung sehen.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Kostenloser Video -Chat">}}

Jitsi Meet bietet einen integrierten Chat mit Emojis an.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Video Meeting -Software">}}


## Fazit {#con}
In diesem Artikel haben wir eine atemberaubende Remote -Kommunikationssoftware und ihren Installationsprozess durchlaufen. Darüber hinaus ist es höchste Zeit, sich für die besten Lösungen zu entscheiden, um die Geschäftsbedürfnisse mit sich entwickelnden Technologien zu synchronisieren. Am Ende hat [Containerize.com] [10] daran gearbeitet, die Liste der Videokonferenzsoftware zu erweitern. Bitte bleiben Sie für regelmäßige Aktualisierungen mit der Kategorie [Videokonferenz] [2] in Verbindung.

## Relevante Produktseiten
Möglicherweise finden Sie die folgenden Links relevant:
  * [Jitsi Meet] [7]
  * [Bigbluebutton] [11]
  * [OpenVIDU] [12]
  * [Element] [13]
  * [Draht] [14]
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
