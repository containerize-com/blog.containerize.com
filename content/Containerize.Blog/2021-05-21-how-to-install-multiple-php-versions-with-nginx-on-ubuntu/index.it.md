---
title: "Come installare più versioni PHP con Nginx su Ubuntu" 
seoTitle: "Come installare più versioni PHP con Nginx su Ubuntu" 
description: "L'articolo spiega come installare più versioni di PHP con Nginx su Ubuntu. Passeremo le istruzioni dettagliate su come installare PHP con NGINX." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Se stai cercando di utilizzare più versioni di PHP con NGINX, in questo articolo ti guideremo passo dopo passo su come installare PHP con NGINX su Ubuntu." 
url: /it/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP con versioni PHP multipli NGINX">}}


## Se stai cercando di utilizzare più versioni di PHP con NGINX, allora in questo articolo ti guideremo passo dopo passo su come installare PHP con Nginx su Ubuntu.
Questo articolo è in continuazione della nostra serie sui tutorial su Nginx. Finora abbiamo coperto come utilizzare Nginx come bilanciamento del carico, come utilizzare NGINX come proxy inverso. E ora questo tutorial copre un'altra domanda impegnativa "Come utilizzare più versioni di PHP con NGINX". In questo tutorial, ti guideremo passo dopo passo su come installare PHP su Ubuntu, come configurare PHP con NGINX e infine come è possibile installare più versioni di PHP con NGINX. Quindi iniziamo!
  * [Installa nginx][1]
  * [Installa più versioni PHP][2]
  * [Crea più siti Web con PHP][3]
  * [Configura Nginx per eseguire versioni diverse per siti Web][4]
  * [Conclusione][5]

## Installa nginx   {#nginx}
Nginx (pronunciato come "Engine-X") è un server Web open source che viene spesso utilizzato come proxy inverso o cache HTTP. È disponibile per Linux gratuitamente.
Per installare Nginx, utilizzare il comando seguente:
```
sudo apt update
sudo apt install nginx
```
Dopo aver eseguito l'installazione, puoi aprire "http: // localhost" nel browser e hai tutte configurazioni.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Installa PHP con NGINX">}}


## Installa più versioni PHP   {#PHP}
**PHP **(acronimo ricorsivo per ** php: ipertestuale preprocessore** ) è un linguaggio di scripting per uso generale open source e popolare che è ampiamente utilizzato e più adatto per lo sviluppo di siti Web e applicazioni basate sul web. È un linguaggio di scripting lato server che può essere incorporato in HTML.
Attualmente, ci sono tre versioni supportate di **php **, ovvero  **php 5.6 ** ,  **7.0, **  e  **8.0 ** . Significato  **php 5.3 ** ,  **5.4, **  e ** 5.5**  hanno raggiunto tutti la fine della vita; Non sono più supportati con aggiornamenti di sicurezza. Quindi installiamo prima PHP 7.0 e PHP 7.2 con PHP-FPM.
In realtà prima di muoverci con l'installazione consente di sottolineare prima ciò che è PHP-FPM. **Php-fpm  **(un acronimo di**   FastCGI Process Manager**) è un'implementazione FastCGI PHP alternativa estremamente popolare (Processore Hypertext). PHP-FPM include numerose funzionalità che possono rivelarsi utili per i siti Web che ricevono frequentemente traffico in grandi volumi.
Per installare prima PHP 7.0 e 7.2, sarà necessario aggiungere il repository PHP al server per installare più versioni di PHP. È possibile aggiungere il repository Ondrej PHP con il seguente comando:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Una volta aggiornato il repository, installa PHP 7.0, PHP 7.2 e PHP-FPM con il seguente comando:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Una volta completata l'installazione, controlla lo stato di PHP-FPM con il seguente comando:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Crea più siti Web con PHP   {#Web}
La pagina predefinita è posizionata in/var/www/html/posizione. Puoi posizionare qui le tue pagine statiche o utilizzare l'host virtuale e posizionarlo altra posizione
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Quindi creare un file indice.php di esempio per il sito1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Ora crea un file indice.php di esempio per il sito2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Quindi, modifica la proprietà di entrambi i siti Web in WWW-DATA:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## configure nginx   {#configure}
Successivamente, dovrai creare un file host virtuale NGINX per il sito di dominio1.containerize.com che utilizza php 7.0. E un altro per site2.Containerize.com che utilizza PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Aggiungi le seguenti righe:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Ora crea il secondo file per site2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Quindi, abilita entrambi i file host virtuali con il seguente comando:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Infine, riavvia il servizio NGINX e PHP-FPM per applicare tutte le modifiche alla configurazione:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## conclusioni   {#conclusion}
In questo tutorial abbiamo esplorato come più versioni PHP su Ubuntu. Abbiamo imparato come installare Nginx. Quindi abbiamo esplorato come configurare due diversi siti Web in NGINX. E infine abbiamo imparato a configurare due siti Web diversi con diverse versioni di PHP con NGINX. Spero che il tutorial ti abbia aiutato.

## Esplorare
  * [Come configurare e configurare Nginx come proxy inverso][6]
  * [Come utilizzare nginx come bilanciamento del carico per l'applicazione][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
