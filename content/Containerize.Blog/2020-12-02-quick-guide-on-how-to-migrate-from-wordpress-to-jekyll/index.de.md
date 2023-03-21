---
title: "Wie man von WordPress nach Jekyll migriert" 
seoTitle: "Wie man von WordPress nach Jekyll migriert" 
description: "In diesem Tutorial lernen wir, wie Sie Ihre Website in schnellen und einfachen Schritten von WordPress nach Jekyll migrieren. Lass uns anfangen!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "In diesem Tutorial lernen wir, wie Sie Ihre Website von WordPress nach Jekyll migrieren und sie kostenlos mit GitHub hosten" 
url: /de/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## In diesem Tutorial lernen wir, wie Sie Ihre Website von WordPress nach Jekyll migrieren und sie kostenlos mit GitHub ausführen können

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress zu Jekyll">}}

Jeykll ist ein statischer Open -Source -Generator. Es verwandelt Ihren einfachen Text in statische Websites und Blogs. Es nimmt Text in Ihrem bevorzugten Markup -Sprache (Markus, Flüssigkeit, HTML / CSS) auf und verwendet Layouts, um eine statische Website zu erstellen. Jekyll ist Blog-Awes und Permalinks, Kategorien, Seiten, Beiträge und benutzerdefinierten Layouts sind alle erstklassige Bürger. Einer der größten Vorteile von Jekyll ist, dass Sie Ihre statische Website auf Github -Seiten hosten und Ihre Website oder Ihre Blog kostenlos ausführen können. WordPress to Jekyll Migration kann Ihnen helfen, die Leistung und Geschwindigkeit Ihrer Website zu verbessern.
In diesem Blogbeitrag werden wir Ihre vorhandene Website oder Ihr Blog von WordPress nach Jekyll migrieren, um eine bessere Geschwindigkeit und Leistung zu erzielen. Also lasst uns anfangen!
  ***[Warum migrieren?][1]** 
  ***[Installation][2]** 
  ***[WordPress -Beiträge und Seiten in][3]**  importieren
  ***[Bereitstellung mit Github -Seiten][4]** 
  ***[Schlussfolgerung][5]** 

## Warum migrieren?   {#Warum}
In Jekyll erhalten Sie eine 100/100 [Lighthouse Score][6], da es keine Datenbankinteraktionen gibt. Und alle Inhalte werden vorbereitet und als HTML -Dateien gespeichert. Und Jekyll wird nur eine minimale Menge an HTTP -Anfragen machen. Daher ist es super schnell.

## Installation und Einrichten von Jekyll   {#install}
Jekyll ist in Ruby geschrieben. Sie müssen es also zuerst auf Ihrem Computer installieren. In dieser Anleitung geht davon aus, dass Sie Ruby bereits auf Ihrem Computer installiert haben. Wenn nicht, können Sie dem [offiziellen Leitfaden][7] folgen.
Erstens werden wir "**jekyl **" und " **Bundler ** " Edelsteine ​​mit dem Befehl " **gem**  ", der nach der Installation Ruby verfügbar sein wird, verfügbar sein. Öffnen Sie die Befehlszeile und führen Sie den folgenden Code aus.
```
gem install jekyll bundler
```
Führen Sie dann den folgenden Befehl aus, um eine neue Website zu erstellen. Dies erstellt einen **MyBlog**  Ordner.
```
jekyll new myblog
```
Nach der Installation können Sie die Website erstellen und auf einem lokalen Server verfügbar machen.
```
bundle exec jekyll serve
```
Die Website ist auf http: // localhost: 4000 verfügbar. Es generiert auch einen "**_ Site** " Ordner in Ihrem Ordner Das ist die endgültige Ausgabe der Site.

## WordPress -Seiten und Beiträge   {#import} importieren
Ein nicht offizielles Plugin für die WordPress ist ebenfalls verfügbar, aber wir werden die offizielle Methode in diesem Tutorial verfolgen. Wenn Sie dem Worten -Exporteur -Plugin einen Versuch geben möchten, können Sie [hier][8].
Um Ihre Beiträge von einer selbst gehosteten WordPress -Website zu importieren, führen Sie den folgenden Befehl in Ihrem Terminal aus.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Dies importiert nur Post- und Seitendaten und -inhalt. Dieser Importeur wandelt nur Ihre Beiträge um und erstellt Yaml Front-Materie. Es importiert keine Layouts, Styling oder externe Dateien (Bilder, CSS usw.).

## **Bereitstellung mit Github -Seiten** {#deploy}
Bisher haben wir unseren Jekyll -Blog vor Ort erstellt. Jetzt werden wir es auf Github einsetzen. Zunächst müssen wir unsere Website mit [Git][9] kontrollieren. Führen Sie die folgenden Befehle im Ordner der Website aus.
```
git init
git add .
git commit -m "Initial Commit"
```
Bei der Installation von Jekyll sollte es automatisch eine "**. Gitignore **" -Datei im Root mit mindestens dem folgenden Inhalt erstellen.
Melden Sie sich dann bei GitHub an und erstellen Sie ein neues Repository YourName.github.io
Kopieren Sie als Nächstes die HTTPS -URL des Repositorys.

{{< figure align=center src="images/github-img.png" alt="Github Https URL">}}

Fügen Sie dann das Remote -Repository hinzu und drücken Sie den Code.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Erledigt! Ihre Website muss jetzt auf yourname.github.io verfügbar sein

## Schlussfolgerung   {#Conclusion}
In diesem Artikel haben wir gelernt, wie man einen statischen Blog mit Jekyll -Websites erstellt. Dann haben wir gelernt, wie Sie Ihre Beiträge und Seiten von WordPress nach Jekyll exportieren. Und schließlich haben wir die endgültige Site auf den Github -Seiten eingesetzt.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
