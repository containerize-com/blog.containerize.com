---
title: "Come abilitare la compressione GZIP in WordPress | Gzip wordpress" 
seoTitle: "Come abilitare la compressione GZIP in WordPress | Gzip wordpress" 
description: "Vuoi abilitare la compressione GZIP in WordPress di accelerare il tuo sito web? In questo post sul blog, impareremo come abilitare la compressione in WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "La velocità di pagina e i tempi di caricamento sono i fattori chiave per una migliore classifica nei motori di ricerca. La compressione GZIP può farlo accadere e fornire un vantaggio competitivo." 
url: /it/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

La velocità e i tempi di caricamento della pagina ## sono i fattori chiave per una migliore classifica nei motori di ricerca. La compressione GZIP può farlo accadere e fornire un vantaggio competitivo.

{{< figure align=center src="images/Asset-1.png" alt="Abilita la compressione GZIP">}}


Panoramica ## 
Poiché Google e altri motori di ricerca stanno prendendo in considerazione un'esperienza utente di un sito Web (UX) un fattore critico nei loro algoritmi di classificazione. È diventato più importante migliorare e ottimizzare il tuo sito Web per le classifiche migliori. Tra i fattori più importanti a cui prestare attenzione, velocità di pagina e tempi di caricamento. E il modo più veloce e più semplice per migliorare la velocità e le prestazioni del sito è consentire la compressione GZIP sul tuo sito Web. C'è una possibilità che il tuo host web consenta automaticamente la compressione GZIP per te. In caso contrario, devi eseguire questo compito cruciale da solo.
In questo articolo, ti mostreremo esattamente come abilitare facilmente la compressione GZIP in WordPress. Iniziamo!
* [**Cos'è GZIP Compression**?][1]
* [**Come funziona la compressione GZIP?**][2]
* **[Come verificare se la compressione GZIP è abilitata?][3]**
* **[Abilita la compressione GZIP in WordPress][4]**
* **[conclusione][5]**

## Cos'è la compressione GZIP?   {#Che cosa}
GZIP è un formato di file**e un'applicazione software**utilizzata per la compressione e la decompressione dei file. I server Web o altri software utilizzano la compressione GZIP per comprimere i file di dati prima di essere inviati ai browser degli utenti. Ciò riduce il tempo di download del file che rende il tuo sito Web più veloce. Tutti i browser moderni supportano la compressione GZIP.
È anche importante notare che la compressione GZIP deve essere abilitata sul tuo server Web prima di poter abilitare la compressione di file e cartelle. A poco a poco, vedremo come verificare se il tuo server Web ha abilitato GZIP.

## Come funziona la compressione GZIP?   {#lavoro}
GZIP, il metodo di compressione più popolare, viene utilizzato da server Web e browser per comprimere e decomprimere il contenuto mentre viene trasmesso su Internet. Viene utilizzato principalmente su file di codice e di testo, GZIP può ridurre le dimensioni dei file JavaScript, CSS e HTML fino al 90%. Per impostazione predefinita, GZIP Compression non comprime immagini o video. Per questo, dovrai ottimizzare le immagini per il Web sul tuo sito WordPress. Questo è il motivo per cui la maggior parte degli strumenti di test di velocità del sito Web come Google PagesPeed Insights consiglia vivamente di abilitare la compressione GZIP.
Quando un server Web riceve una richiesta per una pagina Web, il Webserver controlla l'intestazione della richiesta per verificare se il browser supporta GZIP. In tal caso, il server genera il markup per la pagina prima di applicare GZIP. GZIP converte il markup HTML in dati compressi che vengono quindi consegnati all'utente finale. Quando l'utente finale riceve i dati compressi, il loro browser lo decomprime.

## **Come verificare se la compressione gzip è abilitata?** {#verify}
Il tuo host web potrebbe abilitare la compressione in WordPress per impostazione predefinita. Tuttavia, non è sempre così. Puoi determinare se hai già abilitato la compressione GZIP utilizzando Chrome 'DevTools.
Apri il tuo sito in un browser Chrome, quindi fai clic con il pulsante destro del mouse ovunque sulla pagina e seleziona**Ispeziona**per**Apri gli strumenti per sviluppatori**.
Quindi, vai alla scheda**Network**e fai clic sull'URL principale del sito Web dalla sezione "Nome". Seleziona la scheda**intestazioni**, quindi scorri verso il basso per trovare le intestazioni di risposta****:

{{< figure align=center src="images/gzip-determine.gif" alt="Verifica la codifica dei contenuti">}}

Lì vedrai se la compressione GZIP è abilitata o meno.

## Abilita la compressione gzip in wordpress   {#enable}
Se hai stabilito che**la compressione GZIP di WordPress non è ancora abilitata**, ci sono più metodi che puoi usare per farlo funzionare. Il modo più semplice è usare alcuni plug -in WordPress come [WP Rocket][6], [WP Super Cache][7] o [W3 Total Cache][8]. Tuttavia, è possibile farlo manualmente a livello di server tramite il file .htaccess o aggiornando la configurazione Nginx.

## # mediante modifica del file .htaccess
Uno dei modi più comuni per abilitare la compressione GZIP di WordPress è di**modificare il tuo file _.htaccess_**. Tuttavia, ciò comporta il rischio di rompere qualcosa. Questo è un file del server sensibile e una mossa sbagliata potrebbe causare molti problemi.
Per ridurre il rischio, assicurati di**salvare una copia del file originale**prima di apportare eventuali modifiche. Il file _.htaccess_ dovrebbe trovarsi nella cartella**root del tuo sito Web**. Dopo aver aperto _.htaccess_, aggiungi il seguente codice sotto le sezioni contrassegnate dai tag `# inizio wordpress` e`# end wordpress`
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
* * Salva il file**e caricalo sul server del tuo sito. Quando hai finito, controlla se il GZIP è abilitato utilizzando DevTools di Chrome come spiegato sopra.

## Abilita la compressione GZIP in nginx
Per**abilitare la compressione**, includere la direttiva**gzip**con il parametro on.**gzip**On; Per impostazione predefinita,**nginx**comprime le risposte solo con text di tipo mime/html. Per comprimere le risposte con altri tipi MIME, includere la direttiva GZIP_TYPES ed elencare i tipi aggiuntivi.
È possibile abilitare la compressione GZIP in WordPress aprendo il file _nginx.conf_**e aggiungendo il seguente codice:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## conclusioni   {#conclusion}
Questa è la fine di questo tutorial GZIP WordPress. Esistono molti modi per ottimizzare il tuo sito Web per velocità e prestazioni. In questo tutorial GZIP WordPress, abbiamo superato la compressione GZIP, l'importanza della compressione GZIP e le sue fasi di installazione. Inoltre, ci sono molti collegamenti rilevanti menzionati nella sezione "Esplora" di seguito.
Infine, [containerize.com][9] sta scrivendo articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con la categoria [Blogging][10] per notizie e aggiornamenti regolari.

## Esplorare
  * [Matomo][11]
  * [Plausible][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Come dockerare WordPress con Docker Compose][15]
  * [In che modo gli strumenti di analisi aziendale gratuiti assistono la tua attività][16]
  * [Top 5 Strumenti di business intelligence open source del 2021][17]
  * [Come installare il plug -in in WordPress | Vanilla Forum][18]
  * [Aumenta i tuoi lead con integrazione WordPress gratuita di CivicRM][19]

  
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
