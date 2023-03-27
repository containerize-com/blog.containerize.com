---
title: "Come impostare il software di help desk online utilizzando l'osticket" 
seoTitle: "Come impostare il software di help desk online utilizzando l'osticket" 
description: "Gestisci tutte le vostre richieste di supporto in un unico posto utilizzando l'help desk Osticket. Converti le richieste create tramite e-mail, telefono e moduli in biglietti basati sul Web." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Gestisci tutte le tue richieste di supporto in un unico posto utilizzando Osticket. Converti le richieste create tramite e-mail, telefono e moduli in semplici biglietti basati sul Web." 
url: /it/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Gestisci tutte le tue richieste di supporto in un unico posto utilizzando Osticket. Converti le richieste create tramite e-mail, telefono e moduli in semplici biglietti basati sul Web.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Come impostare il software di help desk online utilizzando l'osticket">}}

Osticket è una soluzione software di help desk online open source. Osticket Helpdesk è un'alternativa gratuita ai sistemi di assistenza clienti elevati e complessi. È semplice, leggero, affidabile, basato sul web e facile da configurare e utilizzare. La parte migliore è che è completamente gratuito. Copriremo le seguenti sezioni in questo tutorial:
  * [Cos'è l'osticket?][1]
  * [Pro e contro di Osticket][2]
  * [Come configurare l'osticket?][3]
  * [Conclusione][4]

## Cos'è l'osticket? {#osticket}

Osticket fornisce un pannello di controllo intuitivo e un componente di reporting in tempo reale. Gli utenti possono semplicemente accedere e creare i biglietti in alcuni semplici passaggi. Possono creare biglietti tramite il tuo sito Web, e -mail o telefono. I biglietti in arrivo verranno quindi salvati e assegnati agli agenti. Gli agenti riceveranno notifiche e -mail e risponderanno alle domande per aiutare a risolvere i loro problemi. I clienti e gli agenti possono discutere dettagli e progressi nella sezione commenti. I clienti possono tenere traccia delle loro richieste e progressi tramite il portale dei clienti integrato fornito da questo software di help desk online.

## Pro e contro di osticket {#pros}


#### Professionisti
  * Osticket è estremamente intuitivo sia per gli utenti finali che per gli agenti di supporto.
  * In bundle con caratteristiche ricche, Osticket ha tutto il necessario senza essere eccessivamente complicato.
  * Osticket è completamente gratuito e il software di gestione dei biglietti open source.
  * È leggero, sicuro, affidabile e facile da installare software di gestione dell'help desk.
  * È flessibile da eseguire su tutti i server Web popolari tra cui Apache, Nginx, Lighttpd e IIS, ecc.

#### cons
  * Osticket non fornisce dettagli analisi dei biglietti e statistiche come altri sistemi di help desk retribuiti.
  * La sua interfaccia utente è molto semplice e di base rispetto ad altri sistemi di supporto.

## Come installare l'osticket? {#how}

Segui questi passaggi per installare l'osticket con nginx su Ubuntu 18.04 LTS.
  * Crea una nuova directory per l'osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Scarica l'ultima configurazione di Osticket utilizzando i seguenti comandi.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Successivamente, crea un file di configurazione dal file di esempio utilizzando questi comandi.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Quindi modificare la proprietà della directory Web Osticket nell'utente e nel gruppo "WWW-DATA".
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Successivamente, crea un nuovo file di configurazione dell'host virtuale.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Quindi incollare il codice di configurazione in esso.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Modifica il nome del server secondo il nome di dominio. Salva il file ed esci.
  * Ora collega questo file host virtuale alla cartella abilitata per siti utilizzando il comando seguente
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Test per eventuali errori di configurazione utilizzando il comando seguente
```
nginx -t
```
  * Ora riavvia il servizio Nginx utilizzando il comando seguente
```
sudo systemctl restart nginx

```
  * Ora inserisci il nome di dominio in qualsiasi browser Web per avviare la procedura guidata di installazione come mostrato nella figura seguente

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Come impostare il software di help desk online utilizzando l'osticket">}}

  * Abilita le estensioni richieste da Php.ini e fai clic su "Continua".
* Compila tutte le informazioni richieste e fai clic su "  **Installa ora"**  .

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Come impostare il software di help desk online utilizzando l'osticket">}}

  * Nelle impostazioni del database, immettere dbname, nome utente e password.
  * Finalmente fare clic sul pulsante "Installa ora"
  * Dopo il completamento dell'installazione, mostrerà la pagina con il messaggio di successo.
  * Successivamente, modifica l'autorizzazione di OST-config.php per rimuovere l'accesso alla scrittura eseguendo il seguente comando:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Conclusione {#conclusion}

Osticket è più adatto per le aziende a basso budget o per quelle che desiderano un semplice sistema di help desk e non complesso. È software di help desk online semplice, leggero, affidabile, open source e totalmente gratuito. Il che rende Osticket un'ottima alternativa ai sistemi di assistenza clienti a più costo. Per saperne di più sulle funzionalità e sulla guida di installazione dell'osticket, consulta il seguente tutorial.

## Esplorare
[Miglior open source e software help desk gratuito][5]
[Helpdesk e sistema di assistenza clienti basati su biglietteria gratuita popolare][6]
[Una guida per principianti per sviluppare il plugin di Osticket][7]
[Come implementare la multi-tenancy in osticket][8]
[Automatizza il sistema di biglietteria utilizzando WordPress e Osticket][9]



 [1]: #osticket
 [2]: #pros
 [3]: #how
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/
 [6]: https://products.containerize.com/helpdesk/osticket
 [7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
 [9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
