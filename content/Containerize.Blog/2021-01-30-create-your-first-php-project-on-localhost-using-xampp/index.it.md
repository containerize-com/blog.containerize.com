---
title: "Crea il tuo primo progetto PHP su LocalHost usando XAMPP '" 
seoTitle: "Crea il tuo primo progetto PHP su LocalHost utilizzando XAMPP" 
description: "Imposta ambiente di sviluppo web utilizzando il server Web gratuito e open source XAMPP. Crea e testare i tuoi progetti PHP su LocalHost seguendo alcuni semplici passaggi." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Imposta l'ambiente di sviluppo web utilizzando il server XAMPP gratuito e open source. Impara, crea e testare i tuoi progetti PHP su LocalHost seguendo alcuni semplici passaggi." 
url: /it/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Imposta ambiente di sviluppo web utilizzando il server XAMPP gratuito e open source. Impara, crea e testare i tuoi progetti PHP su LocalHost seguendo alcuni semplici passaggi.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Crea il tuo primo progetto PHP con il server Web open source XAMPP">}}

XAMPP è un server Web open source che fornisce un ambiente locale per creare, eseguire e testare un progetto PHP prima di distribuirlo su server live. Fornisce un server locale per gli sviluppatori di testare e creare app Web. Tratteremo le seguenti sezioni in questo post sul blog:
  * [Requisiti][2]
  * [Cos'è XAMPP][3]
  * [Crea script PHP][4]
  * [Esegui e test Php Script][5]
  * [Conclusione][6]

Requisiti ##  {#Requirements}
  * Installazione XAMPP
  * Applicazione dell'editor di codice
  * Conoscenza di base PHP
  * Conoscenza di base HTML e JavaScript

## Cos'è XAMPP?   {#XAMPP}
XAMPP è uno stack di soluzione del server Web open source. Contiene Apache, Mysql, MariaDB, PHP e Perl. È estremamente facile da installare e utilizzare. Ecco perché è l'ambiente di sviluppo PHP più popolare. XAMPP Server fornisce un ambiente completo per lo sviluppo di app Web PHP. Se non hai già l'installazione di lavoro XAMPP, segui questa guida per installare XAMPP:
[Setup XAMPP e PhpMyAdmin come LocalHost su Windows][7]

## crea script php   {#php}
  * Supponendo di aver già installato XAMPP seguendo il tutorial sopra, ora creiamo un semplice script PHP e testalo su XAMPP.
  * Prima apri il tuo editor. Se non hai un editor di programmazione, apri semplicemente un blocco note.
  * Immettere il codice seguente
```
<?php
echo "This is my first PHP project";
?>
```
  * Fai clic su "File" nell'angolo in alto a destra.
  * Premi il pulsante "Salva As".
  * Immettere il nome con estensione ".php".
  *Per "Salva come tipo", selezionare l'opzione "All Files (\*. \*)".
  * E infine premi il pulsante "Salva".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Crea il tuo primo progetto PHP con il server Web open source XAMPP">}}


## run and test php script   {#test}
  * Copia questo script PHP nella cartella HTDOCS all'interno dell'installazione XAMPP. Per lo più la cartella HTDOCS risiede qui: C: \ XAMPP \ HTDOCS
  * Apri il browser.
  * Vai a localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Crea il tuo primo progetto PHP con il server Web open source XAMPP">}}

Congratulazioni! Hai appena creato il tuo primo progetto PHP.

## conclusioni   {#conclusion}
La creazione del primo progetto web è sempre molto eccitante per un principiante. È fantastico quando progetti il ​​tuo primo script dinamico, eseguilo e visualizzalo funzionando sul tuo browser. Spero che questa semplice guida ti abbia aiutato a creare ed eseguire il tuo primo progetto PHP con il server Web open source XAMPP.

## Esplorare
Per saperne di più su XAMPP e PhpMyAdmin, checkout segue le guide:
[Setup XAMPP e PhpMyAdmin come LocalHost su Windows][7]
[Soluzione Web Server gratuita Stack per sviluppatori PHP e Perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
