---
title: "Come convertire HTAccess Rewrite le regole alle direttive di riscrittura Nginx" 
seoTitle: "Come convertire HTAccess Rewrite le regole alle direttive di riscrittura Nginx" 
description: "Nginx non supporta. Htaccess REWRITE REGOLE, quindi gli sviluppatori devono convertire tali regole in Direttive di riscrittura NGINX. Impariamo come eseguire questa conversione." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX non supporta le regole di riscrittura di Htaccess e gli sviluppatori richiedono di convertire tali regole in NGINX Riscrivi le direttive. Impariamo come fare questa conversione." 
url: /it/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## NGINX non supporta le regole di riscrittura di HTAccess e gli sviluppatori richiedono di convertire tali regole in NGINX RIPRIME Direttive. Impariamo come fare questa conversione.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Converti .Htaccess Riscrivi le regole in direttive Nginx">}}

Nel nostro ultimo tutorial, abbiamo appreso [come installare più versioni PHP con NGINX su Ubuntu][1]. Apache è uno dei server web più popolari ma ultimamente Nginx si è affermato come concorrente di Apache. Ma Nginx non supporta le regole di riscrittura di Htaccess. Quindi, in questo articolo, impareremo come convertire le regole di riscrivere HTAccess HTAccess alle direttive di riscrivere NGINX. Iniziamo!
*  **[NGINX REWIT REGOLE][2]**  
* [  **. Htaccess Rewrite Regole**  ][3]
* [  **Convert .Htaccess Rewrite le regole alle direttive di riscrittura Nginx**  ][4]
* [  **conclusione**  ][5]

## NGINX REWIT REGOLE {#nginx}

Riscrivi le regole cambia in parte o tutto l'URL in una richiesta del cliente, di solito per informare i clienti che la risorsa che stanno richiedendo ora risiede in una posizione diversa o per controllare il flusso di elaborazione all'interno di NGINX. Ad esempio, per inoltrare le richieste a un server delle applicazioni quando il contenuto deve essere generato in modo dinamico. La direttiva Try_Files viene spesso utilizzata per questo scopo.
Le due direttive per la riscrittura di Nginx generali sono _return_ e _rewrite_ e la direttiva _try_files è un modo utile per dirigere le richieste ai server delle applicazioni.
La direttiva di ritorno è la più semplice delle due direttive generali. Alleghi il reso in un contesto di server o posizione.
Ad esempio, ecco un esempio molto semplice che reindirizza i client a un nuovo nome di dominio usando la direttiva _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Ma cosa succede se devi eseguire distinzioni complicate tra URL, catturare elementi nell'URL originale o cambiare o aggiungere elementi nel percorso? È possibile utilizzare la direttiva _rewrite_ in tali casi.
Ecco una regola di riscrittura NGINX di esempio che utilizza la direttiva di riscrittura. Abbina gli URL che iniziano con la stringa /brani e quindi include /media /o /audio /directory da qualche parte più avanti nel percorso. Sostituisce quegli elementi con / mp3 / e aggiunge l'estensione del file appropriata, .mp3 o .ra. Le variabili da $ 1 e $ 2 catturano gli elementi del percorso che non stanno cambiando. Ad esempio,/Download/CDN-WEST/Media/File1 diventa /wnload/cdn-west/mp3/file1.mp3. Se c'è un'estensione sul nome file (come .flv), l'espressione lo sposta e lo sostituisce con .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .Htaccess REWRETA REGOLE {#apache}

Il file .htaccess controlla una serie di modi in cui è possibile accedere, bloccare e reindirizzare un sito Web. Lo fa usando una serie di una o più regole di riscrittura .htaccess. Queste riscritture sono eseguite dal modulo Mod_Rewrite di Apache.
Mod_Rewrite fornisce un modo per modificare le richieste URL in arrivo, in modo dinamico, in base alle regole di espressione regolari. Ciò ti consente di mappare eventuali URL sulla struttura URL interna in ogni modo che desideri. Questo viene anche usato per rendere i tuoi URL esterni e quindi mapparli su URL interni dall'aspetto brutto.
Ad esempio, seguendo la regola della riscrittura. HTACCESS ridisegna un URL non WWW a un URL WWW.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Converti .Htaccess Riscrivi le regole alle direttive di riscrittura NGINX {#convert}

Come abbiamo dimostrato nel nostro esempio sopra per il reindirizzamento di un URL non WWW a un URL del WWW, convertiamo la stessa regola di riscrittura di Htaccess nella direttiva di riscrittura NGINX.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Quindi qui abbiamo creato due blocchi _server_ separati, uno per _yourdomain.com_ e l'altro per _www.yourdomain.com_. E nel blocco _server_ per _yourdomain.com_ usiamo la direttiva _return_ per reindirizzare l'URL non WWW all'URL WWW.
Lo stesso reindirizzamento che abbiamo eseguito con la direttiva di ritorno, può anche essere fatto con la direttiva di riscrittura ma non è raccomandato.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Per motivi di maggiore chiarezza, convertiamo le regole di WordPress Htaccess nella direttiva nginx try_files.
[WordPress.org distribuisce][6] Un file di base predefinito  **. Htaccess**  con quanto segue. Le regole di riscrittura di Htaccess che consentono di graziose permalink:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Ecco la direttiva NGINX TOY_FILES convertita
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Conclusione {#conclusion}

In questo tutorial, abbiamo esplorato le regole di riscrittura .htaccess di Apache e come possiamo convertire quelle regole di riscrittura .htaccess nelle direttive di riscrittura NGINX. Abbiamo inoltre esplorato diverse direttive Nginx che possono essere utilizzate per riscrivere gli URL. Abbiamo anche dato ad esempio le regole di riscrittura sia per Nginx che per Apache. Spero che il tutorial ti sia utile.

## Esplorare
  * [Come installare più versioni PHP con nginx su Ubuntu][1]
  * [Come configurare e configurare Nginx come proxy inverso][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
