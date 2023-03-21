---
title: "Come configurare e configurare Nginx come proxy inverso" 
seoTitle: "Come configurare e configurare Nginx come proxy inverso" 
description: "Questo tutorial riguarda come impostare e configurare Nginx come proxy inverso. Nginx è considerato uno dei server Web più popolari inversa inversa." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx è un server Web open source che può anche fungere da proxy inverso. Questo tutorial ti aiuterà a imparare a configurare e configurare Nginx come proxy inverso." 
url: /it/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx è un server Web open source che può anche fungere da proxy inverso. Questo tutorial ti aiuterà a imparare a configurare e configurare Nginx come proxy inverso.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Usa Nginx come server proxy inverso">}}


Panoramica ## :
Nginx e Apache sono due server Web open source più **più popolari  **spesso utilizzati con PHP. Un proxy inverso o gateway funge da connessione tra il client e il server. Il client e il server scambiano informazioni tra loro per funzionare in modo continuo ed efficiente. I proxy inversi più comuni sono**   nginx e apache** ed entrambi possono essere configurati sulla stessa macchina virtuale quando si ospitano più siti Web. Un proxy inverso protegge i server Web dagli attacchi e il gateway di connessione appare al client come un normale server Web in cui non sono necessarie configurazioni Nginx proxy inversa speciali. Il client invia la richiesta mentre il proxy inverso decide dove trasmettere le informazioni richieste e quindi consegna del risultato finale di output al client.
Dopo molto apprezzamento per la nostra serie sui tutorial di Redis, abbiamo ricevuto molte richieste per avviare una serie sui tutorial NGINX. Quindi la scorsa settimana abbiamo iniziato con un tutorial su come utilizzare [NGINX Reverse Proxy Caricamento del carico][1] per le tue applicazioni. Questo semplice esempio di configurazione proxy NGINX inversa fornisce molti vantaggi per le prestazioni proxy inversa NGINX. NGINX Simple Reverse Proxy è il server Nginx proxy open source più attivamente utilizzato su Internet. In questo tutorial,  **configureremo ed esploreremo come utilizzare Nginx come proxy inverso**  e come impostarlo come proxy inverso su un singolo server. Quindi iniziamo!
  * Che cos'è un server proxy?
  * Forward vs Reverse Proxy
  * Configurare il proxy inverso
  * Quali sono i vantaggi del proxy inverso Nginx?
  * Conclusione

## Che cos'è un server proxy?
**Un server proxy** funge da gateway tra te e Internet. È un server intermedio che separa gli utenti finali dai siti Web che navigano. I server proxy forniscono diversi livelli di funzionalità, sicurezza e privacy secondo il caso d'uso o la politica aziendale.
Con un server proxy, il traffico Internet scorre attraverso il server proxy nel suo cammino verso l'indirizzo richiesto. La richiesta ritorna quindi attraverso lo stesso server proxy (principalmente), quindi il server proxy inoltra i dati ricevuti dal sito Web.

## Forward vs Inverse Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="Nginx come server proxy inverso">}}

Generalmente quando parliamo del proxy, il più delle volte intendiamo il proxy in avanti.  **I proxy in avanti**  sono ottimi per evitare le restrizioni del paese, come il grande firewall della Cina. Il client si collega semplicemente alle risorse bloccate tramite il proxy in avanti. I proxy in avanti possono nascondere le identità dell'utente modificando il proprio indirizzo IP. Pertanto, fondamentalmente Nginx come proxy in avanti si trova tra il client e Internet, quindi il server end non è a conoscenza del client reale.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="Nginx come proxy inverso">}}

**I proxy inversi **fungono anche da intermediari ma si siedono dall'altra parte della connessione. I proxy inversi sono eccellenti a ** Bilanciamento del carico** , ottimizzazione Web e sicurezza. La proxy inversa viene in genere utilizzata per distribuire il carico tra diversi server, mostrare perfettamente il contenuto da diversi siti Web o passare richieste per l'elaborazione ai server delle applicazioni su protocolli diversi da HTTP.

## Configura Nginx come proxy inverso:
Quando Nginx proxy una richiesta, invia la richiesta a un server proxied specificato, recupera la risposta e la invia al client. È possibile proxy richieste a un server HTTP o a un server non HTTP utilizzando un protocollo specificato. I protocolli supportati includono  **FastCGI, UWSGI, SCGI e Memcached** .
Per passare una richiesta a un server proxied HTTP, la direttiva **Proxy_Pass  **è specificata all'interno di una posizione**  **. Per esempio:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Questa configurazione di esempio proxy inversa Nginx si traduce nel passaggio di tutte le richieste elaborate in questa posizione al server proxied all'indirizzo specificato. Questo indirizzo può essere specificato come nome di dominio o indirizzo IP. L'indirizzo può anche includere una porta:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
È anche possibile passare le intestazioni modificate o personalizzate sul server proxied in nginx  **proxy \ _set \ _header**  host di seguito nell'esempio.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
NGINX supporta anche il buffering che aiuta a migliorare le prestazioni. Con il buffering abilitato NGINX memorizzerà la risposta che riceve dal server proxied purché il client ne abbia bisogno per il download.
Invece di proxe di tutte le richieste a un singolo server, è anche possibile impostare più server back -end** e consentire al bilanciamento NGINX di caricare tra quei server proxy. Abbiamo già trattato questo nel nostro tutorial sul [bilanciamento del carico Nginx][1].

## Quali sono i vantaggi del proxy inverso Nginx?
Di seguito sono riportati i vantaggi della configurazione del server proxy inverso NGINX:
  *Nginx è uno dei server Web open source più popolari** che è anche lo strumento proxy più popolare. La configurazione proxy inversa Nginx è molto semplice da implementare in quanto fornisce all'utente una sicurezza di fascia alta contro gli attacchi DDoS e DOS Web Server.
  *Aiuta a creare un carico bilanciato tra siti Web ad alto traffico e server back -end come  **Dropbox, Netflix e Zynga** .
  * Fornisce un meccanismo di memorizzazione nella cache per un server back-end più lento e siti di traffico elevato per configurare l'host virtuale proxy inverso NGINX. Non richiede la configurazione di un nuovo processo per ogni richiesta Web dal lato client.
  * Agisce anche come server proxy inverso per più protocolli come HTTP, HTTPS, TCP, UDP, SMTP, IMAP e POP3 ecc.
  *Nginx può  **gestire più di 10000 connessioni**  con un'impronta di memoria bassa e può utilizzare più server Web su un singolo indirizzo IP.
  * Aiuta anche a memorizzare nella cache il contenuto ed eseguire la crittografia SSL per ridurre il carico dal server host Web. Nginx è uno dei migliori server Web per migliorare le prestazioni del contenuto statico comprimendolo e aumentando il tempo di caricamento.
  * È uno strumento eccellente per un ambiente di più server e può anche essere utile per diverse attività come mantenere un singolo server anonimo.

## Conclusione:
In questo **tutorial proxy inverso nginx **, abbiamo esplorato ciò che è un server proxy Nginx e la configurazione del proxy inverso Nginx. Differenza tra il server proxy in avanti vs NGINX. Abbiamo anche appreso l'esempio di come configurare NGINX come proxy inverso. Ora capisci completamente come installare ** NGINX Inverse Configurazione proxy passo per passo** . Il tutorial sopra ti aiuta a iniziare con una configurazione del proxy inverso. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti su Nginx.
_ Qual è il tuo server PROXY_ PROVERVEVERSE preferito che è facile, dinamico e completo?. Hai qualche domanda su Leading_ _open sorgente _reverse prox__y,  **Bilanciatore di caricamento per HTTP e TCP**  Based Applications_?, Per favore [mettiti in contatto][2].

## Esplorare
Potresti trovare più articoli di seguito correlati
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][3]
  * [Secure Nginx con Let's Cript su Ubuntu 20.04][4]
  * [Come utilizzare nginx come bilanciamento del carico per l'applicazione][1]
  * [Come installare e fissare PhpMyAdmin con Nginx su Ubuntu][5]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][6]
  * [Installa più versioni PHP con Nginx su Ubuntu][7]
  * [Imposta nginx con il passeggero sul server di produzione AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
