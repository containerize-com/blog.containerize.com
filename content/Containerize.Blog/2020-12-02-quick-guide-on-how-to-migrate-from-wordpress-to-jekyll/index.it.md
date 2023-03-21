---
title: "Come migrare da WordPress a Jekyll" 
seoTitle: "Come migrare da WordPress a Jekyll" 
description: "In questo tutorial impareremo come migrare il tuo sito da WordPress a Jekyll in passi facili e veloci. Iniziamo!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "In questo tutorial impareremo come migrare il tuo sito Web da WordPress a Jekyll e ospitarlo con GitHub gratuitamente" 
url: /it/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## In questo tutorial impareremo come migrare il tuo sito Web da WordPress a Jekyll e ospitarlo con Github gratuitamente

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress a Jekyll">}}

Jeykll è un generatore di siti statico open source. Trasforma il tuo testo semplice in siti Web e blog statici. Prende il testo scritto nel tuo linguaggio Markup (Markdown, Liquid, HTML / CSS) preferito e utilizza layout per creare un sito Web statico. Jekyll è consapevole del blog e permalink, categorie, pagine, post e layout personalizzati sono tutti cittadini di prima classe. Uno dei maggiori vantaggi di Jekyll è che puoi ospitare il tuo sito Web statico sulle pagine GitHub ed eseguire il tuo sito Web o blog gratuitamente. Quindi, WordPress a Jekyll Migration può aiutarti a migliorare le prestazioni e la velocità del tuo sito Web.
In questo post sul blog passeremo come migrare il tuo sito Web o blog esistenti da WordPress a Jekyll per una migliore velocità e prestazioni. Quindi iniziamo!
* **[Perché migrare?][1]**
* **[Installazione][2]**
* **[Importa post e pagine WordPress in][3]**
* **[Distribuzione con le pagine GitHub][4]**
* **[conclusione][5]**

## Perché migrare?   {#Perché}
In Jekyll, puoi ottenere un punteggio 100/100 [Lighthouse][6] perché non ci sono interazioni di database. E tutto il contenuto viene preelaborato e salvato come file HTML. E Jekyll farà solo una quantità minima di richieste HTTP. Quindi, è super veloce.

## installazione e impostazione di jekyll   {#install}
Jekyll è scritto in Ruby. Quindi, devi installarlo prima sul tuo computer. Questa guida presuppone che tu abbia già installato Ruby sul tuo computer. In caso contrario, puoi seguire la [Guida ufficiale][7].
Innanzitutto, "**Jekyl**" e "**Bundler**" sono le gemme usando il comando "**gem**" che sarà disponibile dopo aver installato Ruby. Apri la riga di comando ed esegui il seguente codice.
```
gem install jekyll bundler
```
Quindi, eseguire il seguente comando per creare un nuovo sito. Questo creerà una cartella**myblog**.
```
jekyll new myblog
```
Una volta installato, è possibile creare il sito e renderlo disponibile su un server locale.
```
bundle exec jekyll serve
```
Il sito sarà disponibile su http: // localhost: 4000. Genera anche una cartella “**_ sito**” nella cartella, è quello che è l'output finale del sito.

## import wordpress pagine e post   {#import}
È disponibile anche un plug-in non ufficiale per WordPress, ma seguiremo il metodo ufficiale in questo tutorial. Se vuoi provare il plug -in per esportatore Wordpess, puoi [andare qui][8].
Per importare i tuoi post da un sito Web WordPress autonomo, eseguire il seguente comando sul tuo terminale.
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
Questo importa solo dati e contenuti post e pagine. Questo importatore converte solo i tuoi post e crea una ma-matter di Yaml. Non importa i layout, lo styling o i file esterni (immagini, CSS, ecc.).

Distribuzione ## **con pagine GitHub**{#deploy}
Finora abbiamo creato il nostro blog Jekyll a livello locale. Ora lo schiereremo su GitHub. Prima di tutto, dobbiamo controllare la versione il nostro sito usando [git][9]. Esegui i seguenti comandi nella cartella del sito.
```
git init
git add .
git commit -m "Initial Commit"
```
Quando si installa Jekyll, dovrebbe creare automaticamente un file "**. Gitignore**" nella radice con almeno il seguente contenuto.
Quindi, accedi a github e crea un nuovo repository yourname.github.io
Quindi, copiare l'URL HTTPS del repository.

{{< figure align=center src="images/github-img.png" alt="GitHub Https URL">}}

Quindi, aggiungi il repository remoto e spingi il codice.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Fatto! Il tuo sito deve ora essere disponibile su yourname.github.io

## conclusioni   {#conclusion}
In questo articolo, abbiamo imparato a costruire un blog statico con siti Jekyll. Quindi, abbiamo imparato a esportare i tuoi post e pagine da WordPress a Jekyll. E infine, abbiamo distribuito il sito finale alle pagine GitHub.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
