---
title: "Come implementare la memorizzazione nella cache del browser con la configurazione NGINX" 
seoTitle: "Come implementare la memorizzazione nella cache del browser con la configurazione NGINX" 
description: "Più veloce si carica un sito Web, più è probabile che un visitatore sia di rimanere. In questo tutorial, implementeremo la memorizzazione nella cache del browser con la configurazione NGINX." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Più veloce si carica un sito Web, più è probabile che un visitatore sia di rimanere. Questo articolo ti guida su come implementare la memorizzazione nella cache del browser con le configurazioni Nginx." 
url: /it/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## più velocemente si carica un sito Web, più è probabile che un visitatore sia di rimanere. Questo articolo ti guida su come implementare la memorizzazione nella cache del browser con le configurazioni Nginx.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Come implementare la memorizzazione nella cache di browsr con la configurazione NGINX">}}

Nella nostra serie di tutorial di Nginx, abbiamo coperto [come utilizzare nginx come bilanciamento del carico][1], [configurare nginx come proxy inverso][2], [usa più versioni PHP con nginx][3] e [converti HTAccess Rewrite Regole alle direttive di riscrittura NGINX][4]. Nell'articolo di oggi, stiamo coprendo un argomento molto importante che aiuta le aziende a migliorare l'esperienza del proprio utente sfruttando la memorizzazione nella cache del browser. In questo tutorial, ti guideremo su come implementare la memorizzazione nella cache del browser con la configurazione NGINX utilizzando il modulo di intestazione di Nginx. Iniziamo!
* **[Caching del browser levamo][5]** 
* [ **Modulo di intestazione nginx** ][6]
* [ **E-tage e if-none-match** ][7]
* [ **Maggiore al browser leva con la configurazione Nginx** ][8]
* [ **conclusione** ][9]

## Leva la cache del browser {#browser-caching}

Più veloce si carica un sito Web, più è probabile che un visitatore sia di rimanere sul sito Web. I siti Web con molte immagini e contenuti interattivi vengono caricati in background rendono il sito Web aprendo un'attività complessa. Consiste nel richiedere molti file diversi dal server uno per uno. Ridurre al minimo la quantità di queste richieste è un modo per accelerare il tuo sito Web.
Un metodo per migliorare le prestazioni del sito Web è _Leveraging del browser Caching_. La memorizzazione nella cache del browser svolge un ruolo enorme nel meccanismo della cache per aumentare la velocità di pagina. I file statici come CSS, JS, JPEG, PNG, ecc. Che vengono utilizzati per il sito Web possono essere salvati sul computer del visitatore per un accesso futuro. Ogni volta che il visitatore incontra una nuova pagina sul tuo sito Web, è possibile accedere ai file sopra dal computer del visitatore anziché dal server fornito, che aumenterà enormemente la velocità di carico della pagina.

## Modulo di intestazione di Nginx {#header-module}

Il modulo _ngx \ _http \ _headers_module_ consente di aggiungere campi di intestazione "_expires_" e "_cache-confrol_" e campi arbitrari, a un'intestazione di risposta. Possiamo usare il modulo di intestazione per impostare queste intestazioni HTTP. Il modulo di intestazione è un modulo Ninx core, il che significa che non è necessario installare separatamente per essere utilizzato.
La configurazione di esempio sembra così:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## E-tag e IF-None-Match {#etage}

Supponiamo che abbiamo alcuni file di test con diverse estensioni, ad esempio test.html, test.jpg, test.css e test.js. Per impostazione predefinita, tutti i file avranno lo stesso comportamento di cache predefinito. Per controllare le intestazioni di risposta di un file utilizzando il comando seguente per richiedere un file dal nostro server Nginx locale e mostra le intestazioni di risposta:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
Nella seconda a ultima riga, troverai l'intestazione _etag_, che contiene un identificatore univoco per questa particolare revisione del file richiesto. Se esegui ripetutamente l'ultimo comando _curl_, troverai lo stesso valore ETAG.
Quando si utilizza un browser Web, il valore _etag_ viene archiviato e inviato al server con l'intestazione _if-none-match_ quando l'utente aggiorna la pagina o lo stesso file è richiesto dal browser per qualsiasi motivo.
Possiamo simularlo sulla riga di comando con il seguente comando.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Nota l'identificatore univoco, deve corrispondere al valore di risposta che abbiamo ricevuto dalla nostra precedente chiamata _curl_. La risposta sarà diversa questa volta:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Questa volta, Nginx risponderà con **304 non modificato** . Non invierà di nuovo il file sulla rete; Invece, dirà al browser che può riutilizzare il file che ha già scaricato localmente. Questo è utile in quanto riduce il traffico di rete. Ma il browser deve ancora effettuare una chiamata HTTP per ottenere una risposta dal server, che richiede ancora un po 'di tempo.

## Leva la cache del browser con configurazione NGINX {#nginx-configuration}

Nel nostro esempio precedente abbiamo spiegato come l'e-TAG e l'IF-None-Match ti aiutano a ridurre il traffico di rete. Ma il problema con `Etag` è che il browser invia sempre una richiesta al server chiedendo se può riutilizzare il suo file memorizzata nella cache. E questo richiede ancora tempo per fare la richiesta e ricevere la risposta.
Ora con l'aiuto del modulo di intestazione di Nginx, faremo il browser per memorizzare nella cache alcuni file a livello locale senza chiedere esplicitamente il server.
Aggiungi le seguenti 3 righe nel file di configurazione Nginx al contenuto statico nella cache in NGINX
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
La prima riga indica a NGINX di memorizzare nella cache il contenuto nel browser client per 30 giorni (30D). Dopo questo periodo, qualsiasi nuova richiesta da parte dell'utente comporterà la ri-convalida della cache e l'aggiornamento dal browser client.
È possibile posizionare le righe precedenti in _Location_, _Server_ o _http_ blocchi.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Quando li posiziona nel blocco di posizione, solo il contenuto servito da quella posizione verrà memorizzato nella cache. Nel caso sopra, solo le richieste a / statiche / verranno memorizzate nella cache.
Se si desidera memorizzare nella cache tipi di file specifici, puoi farlo utilizzando il blocco di posizione.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Nell'esempio sopra, stiamo memorizzando nella cache vari tipi di file come JS, JPG, CSS, ecc.
Allo stesso modo, è possibile inserire la configurazione della cache in _server_ blocco prima di qualsiasi blocco di posizione. In questo caso, tutte le risposte da questo server verranno memorizzate nella cache. Oppure è possibile inserirlo nel blocco _HTTP_, in questo caso, tutte le richieste del server supportate dal file di configurazione Nginx verranno memorizzate nella cache.

## Conclusione {#conclusion}

Il modulo di intestazioni di Nginx può essere utilizzato per aggiungere eventuali intestazioni arbitrarie alla risposta, ma l'impostazione corretta delle intestazioni di controllo cache è una delle sue applicazioni più utili. Ti aiuta a migliorare le prestazioni del sito Web, in particolare per gli utenti su reti con latenza più elevata, come le reti di vettori mobili. In questo tutorial, abbiamo imparato a sfruttare la memorizzazione nella cache del browser con la configurazione NGINX. Spero che questo ti aiuti a migliorare l'esperienza del tuo utente sul tuo sito Web.

## Esplorare
  * [Come installare più versioni PHP con nginx su Ubuntu][3]
  * [Come configurare e configurare Nginx come proxy inverso][2]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
