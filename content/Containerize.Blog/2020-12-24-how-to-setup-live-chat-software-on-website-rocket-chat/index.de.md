---
title: "So richten Sie Live -Chat -Software auf der Website | Rocket.chat" 
seoTitle: "So richten Sie Live -Chat -Software auf der Website | Rocket.chat" 
description: "Rocket.Chat ist einfach eingerichtet und hilft Teams und Kunden, effizient zu kommunizieren. Diese Live-Chat-Software ist Open-Source, plattformübergreifend und selbstwertig." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Live -Chat -Support -Software bringt Komfort und Effizienz bei der Bereitstellung von Kundensupport. Lassen Sie uns erfahren, wie Sie Rocket.chat auf Ihrer Unternehmenswebsite installieren." 
url: /de/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Live -Chat -Support -Software bringt Komfort und Effizienz bei der Bereitstellung von Kundensupport. Lassen Sie uns erfahren, wie Sie Rocket.chat auf Ihrer Unternehmenswebsite installieren.

{{< figure align=center src="images/rocketchat-1.png" alt="Live -Chat -Software">}}


## Überblick
Wir haben einige Blog -Beiträge zu Open -Source -Live -Chat -Software veröffentlicht, z. B. [Top 5 kostenlose Customer -Support -Chat -Software für Website][1], [WordPress Instant Messaging mit Rocket.chat][2] und einige weitere. In diesem Blog -Beitrag werden wir die führende Customer Support Software Rocket.chat durchlaufen. Mit der enormen Steigerung des Online -Verkehrs fällt es Unternehmen schwer, eine große Anzahl von Anfragen rechtzeitig zu durchführen. Besucher kommen zu Ihrer Website, neigen dazu, einige Informationen zu den Produkten oder Dienstleistungen zu erhalten und Ihre Website zu verlassen, wenn Sie keine Antwort erhalten. Daher hilft Ihnen Live-Chat-Support, Ihre Kunden proaktiv zu begrüßen, während sie Ihre Website durchlaufen. Oder falls sie Hilfe und Klärung benötigen, um ihre Kaufentscheidungen zu treffen.
Der Live -Chat -Support erhöht Ihre Chance, einen Besucher in einen Kunden umzuwandeln. Es gibt viele Open-Source **Live-Chat-Unterstützung Softwar**  e. Aber Rocket.chat hat aufgrund seiner Funktionen viel Attraktion gewonnen. Und es wird als Alternative zu branchenführenden Chat-Software wie Slack und Microsoft Team behandelt. In diesem Artikel erfahren wir, wie Sie Rocket.chat auf einem Server installieren und dann auf Ihrer Website konfigurieren. Beginnen wir also mit den folgenden Punkten.
  *[**Was ist Rocket.cha**  t?][3]
  * **[Wie man Rakete installiert.Chat?][ 4]..** 
  ***[Live -Chat -Funktion aktivieren][5]** 
  ***[Installieren Sie Live -Chat -Widget auf Ihrer Website][6]** 
  ***[Schlussfolgerung][7]** 

## Was ist Rocket.chat   {#Intro}
[Rocket.chat][8] gehört zu der beliebten **Live -Chat -Software **. Es verfügt über eine kostenlose Live -Chat -Version als Community -Ausgabe sowie eine kostenpflichtige Live -Chat -Version für große Unternehmen mit privaten internen Chat -Funktionen. Rocket.Chat unterstützt Live -Chat -Kundensupport zusammen mit der Team -Chat -Funktion. Es ist plattformübergreifend und bietet Unterstützung für fast alle beliebten Plattformen wie Windows, Mac, Linux und Mobile Apps. Diese  **Customer Support-Software**   ist sicher, erweiterbar und bietet Integration in beliebte Apps von Drittanbietern wie Trello, Google Drive und mehr. Es gibt viele leistungsstarke Funktionen, die Rocket.chat wie mehrere Räume, private Chatrooms & -Gruppen, Benachrichtigungen, Emojis, LDAP -Authentifizierung und Rastful -Schnittstelle bietet. Darüber hinaus ist dieses kostenlose Tool einfach zu bereitstellen und verfügt über Selbsthostfunktionen. Darüber hinaus bietet es eine logische und benutzerfreundliche Oberfläche, in der Benutzer die Themen wie Dunkel, Hell oder Schwarz ändern können.
Diese **CHAT -Support -Software**  ist in JavaScript geschrieben. Alle Dokumentationen finden Sie in Bezug auf Entwicklung und Bereitstellung. Daher finden Sie den Quellcode auf [Github][9]. Für weitere Details können Sie über Rocket.chat [hier][10] lesen.

## So installieren Sie Rocket.chat   {#install}
Wir wissen also, was Rocket.chat ist, und in diesem Abschnitt lernen wir, wie Sie diese Live -Chat -Software installieren. Sie können Rocket.chat aus verschiedenen Marktplätzen installieren, wie Ubuntu -Schnappschüsse, DockerHub oder installieren sie auf Ihrem eigenen Server. In diesem Artikel konzentrieren wir uns auf die Installation von Rocket.chat über Schnappschüsse auf Ubuntu. Dies ist die schnellste Installationsmethode.
Schnappschüsse sind sicher. Rocket.chat und alle seine Abhängigkeiten sind vom Rest Ihres Systems isoliert. Snaps auch automatisch, wenn es eine neue Version gibt.
Installieren Sie Snap zuerst auf Ubuntu mit dem folgenden Befehl
```
sudo apt-get install snapd
```
Installieren Sie dann Rocket.chat Server über Snap -Befehl.
```
sudo snap install rocketchat-server
```
Snap ist bereits in Betrieb. Durchsuchen Sie http: // localhost: 3000 und rocke.chat ein. Sie können den Nginx -Proxy so konfigurieren, dass sie Rocket.chat -Instanz mit Ihrer Domäne martieren.

## Live -Chat -Funktion   {#Enable} aktivieren
Sobald Rocket.Chat -Software installiert und konfiguriert ist, wird der nächste Schritt seine Funktionen aktivieren. In diesem Abschnitt des Blog -Beitrags wird beschrieben, wie **Chat -Support -Software**  auf Ihrer Website aktiviert werden kann. So aktivieren Sie die Livechat -Funktion in Ihrer Rocket.chat -Instanz:
1. Gehen Sie zu **Administration** 

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Administration">}}

2. Suchen Sie ’**Omnichannel **‘ in  **Einstellungen**   und aktivieren Sie es.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Search Omini">}}

Nach der Aktivierung hat ein Administrator über ein neues Menü namens Omnichannel im Dropdown -Menü der oberen linken Ecke Zugriff auf Omnichannel -Panel -Einstellungen.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omeri -Kanal">}}

Und dann konfigurieren Sie das Aussehen und Gefühl von Live -Chat -Widgets von Live

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat Livechat Widget">}}


## **Live -Chat -Widget auf Ihrer Website installieren**    {#Widget}
In diesem Abschnitt werden wir Live -Chat -Widgets auf der Business -Website installieren. Nun zugreifen **Livechat Installation**  Einstellungen:
Gehen Sie zu **Livechat Installation**  in den Einstellungen von Omnichannel -Panel, wie unten gezeigt, und kopieren Sie das angegebene Code.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Rocket.Chat Widget">}}

Fügen Sie diesen Code über das letzte Tag auf Ihrer Website ein. Das Live -Chat -Widget wird in der unteren rechten Ecke Ihrer Webseite angezeigt. Wie unten nach Ihren Live -Chat -Konfigurationen gezeigt.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Live -Chat -Software">}}

{{_LINE_48_}}

## Schlussfolgerung   {#Conclusion}
Dies bringt uns zum Ende dieses Blog -Beitrags. In diesem Artikel haben wir das, was Rocket.chat, wie man Rocket.chat ist, durchlaufen und Ihnen auch gezeigt, wie Sie es über Ubuntu -Schnappschüsse auf Ihrem eigenen Server installieren. Wir haben auch gelernt, wie man die Live -Chat -Funktion aktiviert und das Widget auf Ihrer Website installiert. Darüber hinaus ist **Customer Support-Software  **aufgrund bestimmter von uns diskutiertem Faktoren zu einem Must-Have-Bestandteil jeder Geschäftswebsite geworden. Dieser Blog -Beitrag hilft Ihnen jedoch wirklich, wenn Sie eine Open -Source -Live -Chat -Software auf Ihrer Business -Website bereitstellen möchten. Darüber hinaus gibt es viele andere **  Chat -Support -Software**  und Artikel im Abschnitt „Explore“, den Sie auschecken können.
Schließlich schreibt [**containerize.com **][11] Artikel über weitere Open Source**  Open Source -Chat -Apps. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][13], [LinkedIn][14] und [Twitter][15] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant.
  * [Zulip][16]
  * [Lets-chat][17]
  * [Botpress][18]
  * [So erstellen Sie einen AI-basierten FAQ-Bot für Ihr Unternehmen mit BotPress][19]
  * [Top 5 kostenlose Chat -Software für Kundenunterstützung für die Website][1]
  * [WordPress Instant Messaging mit Rocket.chat][2]
  * [Automatisieren Sie den Geschäftsbetrieb mit kostenloser und Open -Source -Software][20]
  * [So erstellen und führen Sie einen Bot in Rocket.chat mit BotPress][21]
  * [Automatisieren Sie den Geschäftsbetrieb mit kostenloser und Open -Source -Software][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
