---
title: "So aktivieren Sie die Gzip -Komprimierung in WordPress | Gzip WordPress" 
seoTitle: "So aktivieren Sie die Gzip -Komprimierung in WordPress | Gzip WordPress" 
description: "Möchten Sie die Gzip -Komprimierung in WordPress ermöglichen, Ihre Website zu beschleunigen? In diesem Blog -Beitrag lernen wir, wie man die Komprimierung in WordPress aktiviert." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Seitengeschwindigkeit und Ladezeiten sind die Schlüsselfaktoren für ein besseres Ranking in Suchmaschinen. Die GZIP -Komprimierung kann dazu führen und einen Wettbewerbsvorteil bieten." 
url: /de/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## Seitengeschwindigkeit und Ladezeiten sind die Schlüsselfaktoren für ein besseres Ranking in Suchmaschinen. Die GZIP -Komprimierung kann dazu führen und einen Wettbewerbsvorteil bieten.

{{< figure align=center src="images/Asset-1.png" alt="Aktivieren Sie die Gzip -Kompression">}}


## Überblick
Da Google und andere Suchmaschinen die Benutzererfahrung einer Website (UX) als entscheidende Faktor in ihren Ranking -Algorithmen in Betracht ziehen. Es ist wichtiger geworden, Ihre Website für Top -Bewertungen zu verbessern und zu optimieren. Zu den wichtigsten Faktoren, auf die Sie achten sollten, gehören die Seitengeschwindigkeit und die Ladezeiten. Der schnellste und einfachste Weg, um die Geschwindigkeit und Leistung von Standorten zu verbessern, besteht darin, die Gzip -Komprimierung auf Ihrer Website zu ermöglichen. Es besteht die Möglichkeit, dass Ihr Webhost die Gzip -Komprimierung für Sie automatisch ermöglicht. Wenn nicht, müssen Sie diese entscheidende Aufgabe selbst ausführen.
In diesem Artikel zeigen wir Ihnen genau, wie Sie die Gzip -Komprimierung in WordPress leicht aktivieren können. Lass uns anfangen!
  *[**Was ist Gzip -Komprimierung** ?][1]
  *[**Wie funktioniert die Gzip -Komprimierung?** ][2]
  ***[Wie überprüfen Sie, ob die Gzip -Komprimierung aktiviert ist?][3]** 
  ***[Aktivieren Sie die Gzip -Komprimierung in WordPress][4]** 
  ***[Schlussfolgerung][5]** 

## Was ist GZIP -Komprimierung?   {#Was}
GZIP ist ein **Dateiformat und eine Softwareanwendung**  für Dateikomprimierung und Dekompression. Webserver oder andere Software verwenden die GZIP -Komprimierung, um Datendateien zu komprimieren, bevor sie an die Browser der Benutzer gesendet werden. Dies verkürzt die Download -Zeit für die Datei, die Ihre Website schneller macht. Alle modernen Browser unterstützen die GZIP -Komprimierung.
Es ist auch wichtig zu beachten, dass die GZIP -Komprimierung auf Ihrem Webserver aktiviert werden muss, bevor Sie die Datei- und Ordnerkomprimierung aktivieren können. In Kürze werden wir überprüfen, ob Ihr Webserver Gzip aktiviert hat.

## Wie funktioniert die Gzip -Komprimierung?   {#arbeiten}
GZIP, die beliebteste Komprimierungsmethode, wird von Webservern und Browsern verwendet, um den Inhalt zu komprimieren und zu dekomprimieren, wenn sie über das Internet übertragen werden. Es wird hauptsächlich in Code- und Textdateien verwendet. GZIP kann die Größe von JavaScript-, CSS- und HTML -Dateien um bis zu 90%verringern. Standardmäßig komprimiert die GZIP -Komprimierung keine Bilder oder Videos. Dafür müssen Sie Bilder für das Web auf Ihrer WordPress -Site optimieren. Aus diesem Grund empfehlen die meisten Tools für die Speed ​​-Test -Test -Testtests von Google PageSpeed ​​dringend, die GZIP -Komprimierung zu aktivieren.
Wenn ein Webserver eine Anfrage für eine Webseite erhält, überprüft der Webserver den Kopfzeilen der Anfrage, um zu überprüfen, ob der Browser GZIP unterstützt. In diesem Fall generiert der Server das Markup für die Seite, bevor Sie GZIP anwenden. GZIP wandelt das HTML-Markup in komprimierte Daten um, die dann an den Endbenutzer übermittelt werden. Wenn der Endbenutzer die komprimierten Daten empfängt, dekomprimiert sein Browser sie.

## **So überprüfen Sie, ob die Gzip -Komprimierung aktiviert ist?** {#Verify}
Ihr Webhost kann standardmäßig Komprimierung in WordPress ermöglichen. Dies ist jedoch nicht immer der Fall. Sie können feststellen, ob Sie bereits die Gzip -Komprimierung mithilfe von Chrome -Devtools aktivieren können.
Öffnen Sie Ihre Website in einem Chrome-Browser, klicken Sie dann mit der rechten Maustaste auf die Seite und wählen Sie **inspizieren **, um die Entwickler-Tools**  zu öffnen.
Navigieren Sie als Nächstes zur Registerkarte **Netzwerk  **und klicken Sie im Abschnitt "Name" auf die Haupt -URL der Website. Wählen Sie die Registerkarte **  Header  **aus und scrollen Sie dann nach unten, um den Abschnitt **  Antwort Header**  zu finden:

{{< figure align=center src="images/gzip-determine.gif" alt="Überprüfen Sie die Inhaltscodierung">}}

Dort sehen Sie, ob die Gzip -Komprimierung aktiviert ist oder nicht.

## Aktivieren Sie die GZIP -Komprimierung in WordPress   {#Enable}
Wenn Sie festgestellt haben, dass **WordPress -GZIP -Komprimierung noch nicht aktiviert ist** , können Sie mehrere Methoden verwenden, um sie zum Laufen zu bringen. Der einfachste Weg ist die Verwendung einiger WordPress -Plugins wie [WP Rocket][6], [WP Super Cache][7] oder [W3 Total Cache][8]. Sie können dies jedoch manuell auf Serverebene entweder nach .htaccess -Datei oder durch Aktualisierung Ihrer Nginx -Konfiguration tun.

## # Durch Bearbeitung von .htaccess -Datei
Eine der häufigsten Möglichkeiten, um die WordPress -GZIP -Komprimierung zu aktivieren, besteht darin, Ihre _.htaccess_ -Datei ** zu bearbeiten. Dies beinhaltet jedoch das Risiko, etwas zu brechen. Dies ist eine sensible Serverdatei, und eine falsche Bewegung kann viele Probleme verursachen.
Um das Risiko zu verringern, speichern Sie eine Kopie der Originaldatei **, bevor Sie Änderungen vornehmen. Die Datei _.htaccess_ sollte sich in dem **Root -Ordner Ihrer Website**  befinden. Nachdem Sie _.htaccess_ geöffnet haben, fügen Sie den folgenden Code unter den Abschnitten hinzu, die von den Tags "# begin WordPress" und "# end WordPress" gekennzeichnet sind
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**Speichern Sie die Datei**  und laden Sie sie auf den Server Ihrer Website hoch. Wenn Sie fertig sind, prüfen Sie, ob der GZIP mit den oben erläuterten Chrome -Devtools aktiviert ist.

## Aktivieren Sie die GZIP -Komprimierung in Nginx
Um die Komprimierung zu aktivieren **, fügen Sie die **gzip  **Anweisung mit dem Ein -Parameter hinzu. **  gzip  **on; Standardmäßig komprimiert **  nginx**  Antworten nur mit MIME -Typ Text/HTML. Um Antworten mit anderen MIME -Typen zu komprimieren, geben Sie die Anweisung GZIP_TYPES ein und listen Sie die zusätzlichen Typen auf.
Sie können die GZIP -Komprimierung in WordPress aktivieren, indem Sie Ihre _nginx.conf_ -Datei ** öffnen und den folgenden Code hinzufügen:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Schlussfolgerung   {#Conclusion}
Dies ist das Ende dieses Gzip -WordPress -Tutorials. Es gibt viele Möglichkeiten, Ihre Website für Geschwindigkeit und Leistung zu optimieren. In diesem GZIP -WordPress -Tutorial haben wir die GZIP -Komprimierung, die Bedeutung der GZIP -Komprimierung und seine Installationsschritte durchlaufen. Darüber hinaus werden im Abschnitt „Explore“ unten viele relevante Links erwähnt.
Schließlich schreibt [Containerize.com][9] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie mit der Kategorie [Blogging][10] in Kontakt, um regelmäßige Nachrichten und Updates zu erhalten.

## Erkunden
  * [Matomo][11]
  * [Plausibel][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Wie man WordPress mit Docker komponieren][15]
  * [Wie kostenlose Business Analytics -Tools Ihr Geschäft unterstützen][16]
  * [Top 5 Open Source Business Intelligence Tools von 2021][17]
  * [So installieren Sie Plugin in WordPress | Vanilla Forum][18]
  * [Steigern Sie Ihre Leads mit kostenloser BürgerwordPress -Integration][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
