---
title: "Tutorial di configurazione per lo stack LEMP su Ubuntu 18.04" 
seoTitle: "Tutorial di configurazione per lo stack LEMP su Ubuntu 18.04" 
description: "Lo stack LEMP è uno stack software utilizzato per sviluppare e distribuire applicazioni Web. Scopri come installare Nginx, Mysql e PHP su Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Installa & amp; Configurare LEMP Stack per lo sviluppo e la distribuzione di applicazioni Web. Questa guida ti aiuterà a installare Nginx, Mysql e PHP su Ubuntu 18.04." 
url: /it/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Installa e configura LEMP Stack per lo sviluppo e la distribuzione di applicazioni Web. Questa guida ti aiuterà a installare Nginx, Mysql e PHP su Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Installa lo stack LEMP su Ubuntu">}}


## Panoramica {#Prerequisites}

In questa guida, installeremo NGINX, MySQL e PHP (LEMP Stack) per le applicazioni Web di sviluppo e distribuzione. Configurare anche l'applicazione PHP Server su server su Ubuntu Server 18.04. Tratteremo le seguenti sezioni in questo tutorial.
* [  **prerequisiti**  ][1]
* [  **Cos'è il lemp stack?**  ][2]
* [  **INSTALLAZIONE LEMP**  ][3]
* [  **conclusione**  ][4]

## Prerequisiti {#Prerequisiti}

Prima di installare il software, è necessario soddisfare i seguenti requisiti.
  * Server con sistema operativo Ubuntu
* Utente non root con  **sudo**  privilegi

## Cos'è il LEMP Stack? {#What}

 **LEMP Stack** è una raccolta di software che può essere utilizzato per eseguire applicazioni Web basate su PHP. LEMP sta per Linux, Nginx, Mysql e PHP. Lo stack LEMP è una variante dello stack della lampada. Sia lampada che LEMP sono popolari stack software per lo sviluppo e la distribuzione di applicazioni Web. C'è una differenza tra questi due stack software. LAMP utilizza il server Web Apache, mentre il server LEMP utilizza il server Web Nginx.

## Installazione LEMP {#Installation}

In questa sezione, ci concentreremo su come installare Nginx, Mysql e PHP su Ubuntu 18.04. Prima di tutto, dobbiamo aggiornare i pacchetti server eseguendo il comando seguente.
```
$ sudo apt update
```

### Installazione del server Web Nginx
* Esegui il comando sotto per  **Installa nginx su Ubuntu**  .
```
$ sudo apt install nginx
```
  * Una volta terminato l'installazione NGINX, apri il browser Web e digita l'indirizzo IP del server. Ti mostrerà la pagina di benvenuto predefinita del server Web Nginx.

{{< figure align=center src="images/nginx-home-1.png" alt="Pagina predefinita del server Web Nginx">}}


### Installazione di mysql
Ora, è necessario installare MySQL Database Server per la gestione dei dati dell'applicazione.
* Esegui il comando di seguito per  **Installa mysql su Ubuntu**  .
```
$ sudo apt install mysql-server
```
  * Per fissare l'installazione di MySQL, eseguire il comando seguente.
```
$ sudo mysql_secure_installation
```
* Ti verrà chiesto che si desidera abilitare  **Validati del plug -in password**  o no. È meglio non abilitarlo, quindi digitare N e premere Invio per spostarsi sul passaggio successivo.
  * Successivamente, ti farà un paio di domande come mostrato di seguito. Devi rispondere a tutte le domande.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Ora, il server MySQL è attivo e in esecuzione. Puoi testarlo con il seguente comando. Inserisci la password dell'account root Ubuntu, non quella mysql nel caso in cui fosse richiesto una password.
```
$ sudo mysql
```
  * Inserisci il comando in basso per uscire da MySQL.
```
mysql> exit
```

### Installazione di PHP
Copriremo l'installazione di PHP-FPM per l'elaborazione di PHP. PHP-FPM sta per FastCGI Process Manager. NGINX Web Server non ha alcuna funzionalità integrata per l'elaborazione di PHP, quindi useremo PHP-FPM per questo. Inoltre, installeremo PHP-Mysql per comunicare PHP con MySQL per la gestione dei dati.
* Esegui il comando sotto per  **Installare PHP su Ubuntu**  .
```
$ sudo apt install php-fpm php-mysql
```
  * Ora, hai finito con l'installazione PHP e tutto il software richiesto di LEMP Stack per eseguire l'applicazione Web.
  * In questo passaggio, creeremo il file di configurazione Nginx per dire a NGINX di utilizzare il processore PHP per il contenuto dinamico. Esegui il comando di seguito per creare il file di configurazione Nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Copia il codice nel file di configurazione Nginx e salvalo.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Diamo un'occhiata a queste direttive e blocco di posizione, in modo da poter avere informazioni di base.
*  **Ascolta**  : puoi definire la porta per Nginx. Utilizzare la porta 80 per HTTP e 443 per i protocolli HTTPS.
*  **root**  : Definire la directory principale per il tuo progetto. Nginx lo utilizzerà per servire il sito Web o l'applicazione Web.
*  **INDICE**  : Definire l'ordine in cui i file devono essere serviti. Quando viene chiamato il file indice, NGINX fornirà il file Index.Php.
*  **Server_name**  : Definire il nome di dominio o l'IP pubblico del tuo server.
*  **Posizione /** : questo blocco di posizione ha **Try_Block**  direttiva e corrisponde all'URI richiesto. Nginx restituisce 404 errori, se non trova il file richiesto.
*  **Posizione ~ .php $**  : questo blocco di posizione gestisce l'elaborazione PHP.
*  **Posizione ~ /.ht** : nginx non elabora  **. File Htaccess**  e questa posizione blocca lo tratta. Nginx non serve il file .Htaccess definendo **Deny All**  Directive.
  * Crea symlink per il file di configurazione Nginx appena creato per abilitarlo.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Esegui il seguente comando per testare il file di configurazione Nginx per errori di sintassi.
```
$ sudo nginx -t
```
  * Riavvia il server Web Nginx.
```
$ sudo systemctl restart nginx
```

### Test PHP
  * Al fine di garantire che NGINX serva correttamente le pagine PHP, creeremo file PHP per testare le configurazioni.
  * Crea file info.php nella directory root del server Web Nginx eseguendo il comando di seguito.
```
$ sudo nano /var/www/html/info.php
```
  * Aggiungi il codice seguente e salva il file.
```
<?php
phpinfo();
```
  * Apri il tuo browser Web e digita il nome di dominio o l'IP pubblico del server seguito dal nome del file PHP come http: // server \ _ip \ _or_domain/info.php. Vedrai la pagina seguente.

{{< figure align=center src="images/info-php.png" alt="Pagina Info PHP">}}


## Conclusione {#Conclusione}

In questo tutorial, abbiamo discusso su come installare e configurare lo stack  **LEMP**  . Come puoi vedere, la configurazione dei componenti dello stack software è davvero facile. Inoltre, puoi iniziare a creare e servire le app Web in pochi minuti.
Infine, [  **Containerize.com** ][5] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, rimani in contatto con questa categoria [ **Web Server Solution Stack**  ][6] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
* [  **Miglior stack di soluzione del server Web open source**  ][7]
*  **[Strumenti forensi digitali open source più popolari][8]**  
*  **[Software Top 5 Open Source Message Code (MQ) nel 2021][9]**  
*  **[Miglior software di archiviazione e condivisione di file open source][10]**  
* [  **Come installare e proteggere phpmyadmin con nginx su ubuntu**  ][11]
* [  **Come installare più versioni PHP con nginx su Ubuntu**  ][12]
* [  **Top 5 licenze open source più famose del 2021**  ][13]



 [1]: #Prerequisites
 [2]: #What
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
 [9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
 [10]: https://products.containerize.com/backup-and-sync/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
