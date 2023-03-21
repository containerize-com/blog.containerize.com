---
title: "Come configurare il supporto HTTP/2 in NGINX su Ubuntu/Debian" 
seoTitle: "Come configurare il supporto HTTP/2 in NGINX su Ubuntu/Debian" 
description: "HTTP2 o H2 è un protocollo binario e una versione migliorata del protocollo HTTP che consente di aumentare la velocità delle pagine del sito dopo il supporto NGINX abilitato HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 è un protocollo multiplexd robusto per migliorare la velocità e la sicurezza del carico della pagina. In questo tutorial, impareremo come configurare NGINX con il supporto HTTP/2." 
url: /it/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 è un protocollo multiplexd robusto per migliorare la velocità e la sicurezza del caricamento della pagina. In questo tutorial, impareremo come configurare NGINX con il supporto HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="NGINX Abilita il supporto HTTP2 su Ubuntu e Debian">}}


Panoramica ## **** 
Nginx è un server Web digitale e affidabile open source. Ha guadagnato popolarità a causa della sua bassa impronta di memoria, bilanciamento del carico, elevata scalabilità, memorizzazione nella cache, supporto per la maggior parte dei protocolli e proxy inversa. Ora parliamo di come NGINX abilita il protocollo HTTP2.
Uno dei protocolli supportati da NGINX è HTTP/2 che è stato pubblicato a maggio 2015. Il vantaggio principale di HTTP/2 è la sua alta velocità di trasferimento per i siti Web ricchi di contenuti, riduce il carico sul web server e può avviare più richieste parallele in una singola connessione TCP. Nginx abilita HTTP2 è una versione migliorata del protocollo HTTP. Prima di iniziare, avremo bisogno di alcuni server Ubuntu o Debian con certificato SSL. In questo tutorial, ti guideremo passo dopo passo su come Nginx abilitare HTTP2 su Ubuntu.
  * Aggiornamento dei pacchetti e installazione di NGINX
  * Abilitazione del supporto HTTP/2
  * Aggiunta del nome del server
  * Aggiunta dei certificati SSL
  * Rimozione delle cifre
  * Reindirizza tutte le richieste HTTP a HTTPS
  * Riavvia Nginx
  * Conclusione

## Passaggio 1: aggiornamento dei pacchetti e installazione di nginx   {#4597}
Il primo passo è aggiornare e aggiornare i repository nel sistema di imballaggio APT. L'uso dell'aggiornamento scaricherà gli ultimi pacchetti di versione e l'aggiornamento installerà l'ultima versione dei pacchetti nell'elenco. Esegui il comando APT seguente per aggiornare e aggiornare i pacchetti.
```
sudo apt-get update && apt-get upgrade
```
Il prossimo passo è installare l'ultima versione del pacchetto Nginx. Il supporto per il protocollo HTTP/2 è stato introdotto nella versione NGINX 1.9.5 e superiore. Pertanto, dovremo installare l'ultima versione del pacchetto Nginx. Esegui il comando Usa APT Installa per installare i pacchetti Nginx:
```
sudo apt-get install nginx
```
Ti verrà richiesto di confermare il processo di installazione passo -passo. Seleziona l'opzione Sì e termina il processo di installazione. Al termine del processo di installazione, il passaggio successivo è controllare la versione del pacchetto se abbiamo installato la versione giusta o meno. È possibile controllare la versione del server Web Nginx digitando il comando:
```
sudo nginx -v
```
L'output del comando di controllo versione sopra dovrebbe essere simile a quanto segue:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Passaggio 2: abilitazione HTTP/2 Support   {#f4d2}
Dopo aver installato il pacchetto NGINX, dobbiamo abilitare HTTP2 NGINX. L'utente deve modificare la porta di ascolto da 80 a 443. Apriamo il file di configurazione Nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
È possibile vedere che il valore predefinito di nginx è impostato su ascoltare è la porta 80.
Ascolta 80 Default_Server;
Ascolta [::]: 80 default_server;
Come puoi vedere, ci sono due diverse variabili di ascolto. La prima variabile di ascolto è per tutte le connezioni IPv4 e la seconda è per le connessioni IPv6. Abiliteremo la crittografia per entrambe le variabili. Modificare il numero della porta di ascolto in 443 e aggiungere la connessione SSL per il protocollo HTTPS come mostrato di seguito:
Ascolta 443 SSL http2 default_server;
Ascolta [::]: 443 SSL http2 default_server;
Si noti che oltre a SSL, abbiamo anche aggiunto HTTP2. NGINX è ora in grado di utilizzare i browser che supportano il protocollo HTTP/2.

## Passaggio 3: aggiunta del nome del server   {#A745}
Il prossimo passo è modificare il server \ _name in modo che il nome del server sia associato al nome di dominio. L'utente deve solo modificare il nome del server nel file di configurazione. Individua la voce Server \ _name nel file di configurazione e cambia _ nel dominio effettivo, in questo modo:
```
server_name example.com www.example.com;
```
Salva il file di configurazione del server modificando nell'editor di testo. È possibile controllare la configurazione Nginx per errori di sintassi con comando:
```
sudo nginx -t
```
Se la sintassi è priva di errori, vedrai l'output seguente:
Nginx: il file di configurazione /etc/nginx/nginx.conf Sintassi è OK
NGINX: File di configurazione /etc/nginx/nginx.conf Test ha esito positivo

## Passaggio 4: aggiunta dei certificati SSL   {#37C0}
Il prossimo passo è abilitare la configurazione HTTPS NGINX di utilizzare il certificato SSL. È possibile generare un certificato autonomo o [installare un certificato gratuito da Let’s Crypt][1]. Se non hai un certificato SSL, segui questo tutorial. Aggiungi i tuoi certificati SSL all'interno della directory di configurazione Nginx Simile a:
```
sudo mkdir /etc/nginx/ssl
```
Copia il tuo certificato e la chiave privata in questa posizione e sostituisci anche Esempio.com con il nome di dominio effettivo:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Ora apri ancora una volta il file di configurazione del server Nginx. Aggiungi e configura nuove linee SSL all'interno del blocco server Nginx con la posizione dei certificati per abilitare la configurazione SSL NGINX:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Salva il file nginx file ed esci dall'editor di testo.

## Passaggio 5: rimozione dei cifre   {#d291}
Cipher è un algoritmo utilizzato nella crittografia per la crittografia e la decrittografia dei dati. Le suite di cifra sono un mucchio di algoritmi crittografici utilizzati per proteggere le connessioni di rete. HTTP/2 ha un'enorme lista nera di cifre non sicure che devono essere rimosse. Qui useremo un set di cifre popolare, approvato da Internet Giants CloudFlare.
Apri il seguente file di configurazione Nginx /etc/nginx/nginx.conf e aggiungi le righe seguenti subito dopo **ssl \ _prefer \ _server_ciphers on.**  Queste righe includono l'elenco degli ultimi cifre che i browser HTTP2 comprendono.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
È possibile impostare GZIP su OFF e aggiungere proxy \ _max \ _temp \ _file \ _size 0; Per evitare err \ _http2 \ _protocol_error nginx Errore.

## Passaggio 6: reindirizzare tutte le richieste HTTP a HTTPS   {#B387}
Ora dovremmo dire al proxy HTTP2 NGINX cosa dovrebbe servire il contenuto tramite HTTPS solo se il server riceve una richiesta HTTP. Infine, ignorando le righe commentate, il file di configurazione Nginx /etc/nginx/sites-available/domain-name.com dovrebbe apparire simile a questo:
Server {Ascolta 443 SSL HTTP2 Default_Server; Ascolta [::]: 443 ssl http2 default_server; root/var/www/html; index index.html index.htm index.nginx-debian.html; server_name Esempio.com; location/{try_files $ Uri $ Uri/= 404 ; } ssl_cerficate /etc/nginx/sssl/example.com.crt;sssl_certificate_key /etc/nginx/sssl/example.com.key ;sssl_dhparam /etc/nginx/sssl/dhparam.pem;) {ascolta 80; Ascolta [::]: 80; Server_name Esempio.com; return 301 https: // $ server_name $ request_uri;}
Salva il file /etc/nginx/sites-available/domain-name.com e quindi esci. Controllare le configurazioni per gli errori di sintassi:
```
sudo nginx -t
```

## Passaggio 7: Riavvia Nginx   {#E687}
Per applicare tutte le modifiche, riavviare il server proxy inverso HTTP2 NGINX e controllare lo stato di configurazione.
sudo systemctl riavvio nginx
sudo systemctl status nginx

## **Conclusione:** {#4a1a}
Congratulazioni, hai imparato correttamente come impostare il supporto Nginx Config HTTP2 sul server Ubuntu. Le impostazioni NGINX HTTP2 ora servono le pagine HTTP/2 e ha anche cancellato la differenza tra i protocolli HTTP/1 e HTTP/2. Se affronti ancora problemi di configurazione, facci sapere nella sezione commenti.
Hai domande sul protocollo multiplexed HTTP2? _, Per favore_ [mettiti in contatto][2].

## Esplorare
Potresti anche apprezzare gli articoli:
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][3]
  * [How to][3][Installa e fissa phpmyadmin con nginx su Ubuntu][4]
  * [Come configurare Nginx con il passeggero sul server di produzione AWS][5]
  * [Secure and Cript nginx con let's Crypt su Ubuntu 20.04][1]
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
