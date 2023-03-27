---
title: "Come ottimizzare il tuo sito Web utilizzando la compressione GZIP in NGINX" 
seoTitle: "Come ottimizzare il tuo sito Web utilizzando la compressione GZIP in NGINX" 
description: "In questo articolo, discuteremo di un metodo per ottimizzare le velocità di trasferimento del tuo sito Web riducendo le dimensioni dei file attraverso la compressione GZIP in NGINX." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Questo tutorial ti guida su come ottimizzare le prestazioni del tuo sito Web e renderlo veloce riducendo le dimensioni dei file utilizzando la compressione GZIP in NGINX." 
url: /it/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Questo tutorial ti guida su come ottimizzare le prestazioni del tuo sito Web e renderlo veloce riducendo le dimensioni dei file utilizzando la compressione GZIP in NGINX.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Come abilitare la compressione GZIP in nginx">}}

Questo articolo è in continuazione della nostra serie di tutorial su Nginx. Finora abbiamo coperto come utilizzare Nginx come bilanciamento del carico, come utilizzare NGINX come proxy inverso. E ora questo tutorial copre un'altra domanda impegnativa "Come ottimizzare il tuo sito Web utilizzando la compressione GZIP in NGINX". In questo tutorial, ti guideremo passo dopo passo su come abilitare la compressione GZIP in NGINX. Quindi iniziamo!
  * [Ottimizzazione del sito Web con compressione][1]
  * [Cos'è GZIP Compression?][2]
  * [Come funziona la compressione GZIP?][3]
  * [Abilita la compressione GZIP in nginx][4]
  * [Verifica la compressione GZIP][5]
  * [Conclusione][6]

## Ottimizzazione del sito Web con compressione {#optimize}

Le prestazioni di un sito Web dipendono da una serie di fattori. Uno dei fattori da cui dipende in parte è la dimensione di tutti i file che il browser di un utente deve scaricare dal tuo server. Ridurre o comprimere le dimensioni di tali file trasmessi può rendere il tuo sito Web di caricare più velocemente per l'utente. Può anche ridurre la fattura per il tuo sito Web nel caso in cui si paga l'utilizzo della larghezza di banda su connessioni a misura. Quindi la compressione può svolgere un ruolo molto vitale nell'ottimizzazione del tuo sito Web.
Poiché Google e altri motori di ricerca stanno prendendo in considerazione un'esperienza utente di un sito Web (UX) un fattore critico nei loro algoritmi di classificazione. È diventato più importante migliorare e ottimizzare il tuo sito Web per le classifiche migliori. Tra i fattori più importanti a cui prestare attenzione, velocità di pagina e tempi di caricamento. E il modo più veloce e più semplice per migliorare la velocità e le prestazioni del tuo sito Web è consentire la compressione GZIP sul tuo sito web.

## Cos'è la compressione GZIP? {#what-gzip}

GZIP è un formato di file e un'applicazione software**utilizzato per la compressione e la decompressione dei file. I server Web o altri software utilizzano la compressione GZIP per comprimere i file di dati prima di essere inviati ai browser degli utenti. Ciò riduce il tempo di download del file che rende il tuo sito Web più veloce. Tutti i browser moderni supportano la compressione GZIP.
È anche importante notare che la compressione GZIP deve essere abilitata sul tuo server Web prima di poter abilitare la compressione di file e cartelle. Poco, vedremo come abilitare la compressione GZIP in NGINX.

## Come funziona la compressione GZIP? {#how-gzip}

GZIP, il metodo di compressione più popolare, viene utilizzato da server Web e browser per comprimere e decomprimere il contenuto mentre viene trasmesso su Internet. Viene utilizzato principalmente su file di codice e di testo, GZIP può ridurre le dimensioni dei file JavaScript, CSS e HTML fino al 90%.
Per impostazione predefinita, GZIP Compression non comprime immagini o video. Questo è il motivo per cui la maggior parte degli strumenti di test di velocità del sito Web come Google PagesPeed Insights consiglia vivamente di abilitare la compressione GZIP.
Quando un server Web riceve una richiesta per una pagina Web, il Webserver controlla l'intestazione della richiesta per verificare se il browser supporta GZIP. In tal caso, il server genera il markup per la pagina prima di applicare GZIP. GZIP converte il markup HTML in dati compressi che vengono quindi consegnati all'utente finale. Quando l'utente finale riceve i dati compressi, il loro browser lo decomprime.

## Abilita la compressione GZIP in NGINX {#enable-gzip}

Per modificare la configurazione GZIP NGINX, aprire il file di configurazione NGINX principale in "_vi_" o il tuo editor di testo preferito:
```
sudo vi /etc/nginx/nginx.conf
```
Trova la sezione Impostazioni _gzip_, che assomiglia a questa:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Come puoi vedere, GZIP è abilitato per impostazione predefinita con _GZIP ON; _ ma ci sono altre impostazioni GZIP commentate.
Possiamo abilitare _gzip_types_ impostazione per abilitare la compressione sui tipi di file che vogliamo comprimere. Per esempio
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Ora riavvia NGINX per prendere in vigore nuove impostazioni.

## Verifica la compressione GZIP {#verify}

Ora che abbiamo abilitato la compressione GZIP, verifichiamolo.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
La risposta rimarrà la stessa poiché la compressione è già stata abilitata per quel file di file:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Conclusione {#conclusion}

In questo articolo abbiamo appreso che è possibile utilizzare il modulo GZIP NGINX per accelerare i trasferimenti di file. Ti abbiamo mostrato passo dopo passo come abilitare la compressione GZIP in NGINX usando il modulo GZIP. La documentazione ufficiale per [Modulo GZIP][7] elenca altre direttive di configurazione che potresti voler dare un'occhiata. Spero che questo tutorial ti aiuti a ottimizzare le prestazioni e la velocità del tuo sito Web.

## Esplorare
  * [Come installare più versioni PHP con nginx su Ubuntu][8]
  * [Come configurare e configurare Nginx come proxy inverso][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
