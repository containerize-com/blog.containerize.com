---
title: "Come installare e fissare phpmyadmin con nginx su ubuntu" 
seoTitle: "Come installare e fissare phpmyadmin con nginx su ubuntu" 
description: "PhpMyAdmin è un software di gestione del database open source scritto in PHP. Impareremo come installare phpmyadmin con nginx e amministrare mysql tramite phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpMyAdmin è lo strumento di gestione del database di interfaccia grafica open source scritta in PHP. In questo tutorial, impareremo come installare PhpMyAdmin con Nginx." 
url: /it/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PhpMyAdmin è lo strumento di gestione del database di interfaccia grafica open source scritta in PHP. In questo tutorial, impareremo come installare PhpMyAdmin con Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Come installare e fissare phpmyadmin con nginx su ubuntu">}}


Panoramica ## **** 
PhpMyAdmin è uno strumento di gestione del database gratuito e open source che offre agli utenti un'interfaccia Web per gestire i server MySQL o MARIADB attraverso un'interfaccia intuitiva. Questo è uno dei software ampiamente supportati offerto dalla maggior parte dei popolari provider di hosting per consentire agli amministratori Web per la creazione di database in PhpMyAdmin e gestire i database, eseguire le tenute SQL, importare ed esportare facilmente i dati. Sarai in grado di accedere ai tuoi database MySQL o MARIADB in PhpMyAdmin con Nginx attraverso un'interfaccia web grafica facilmente, in esecuzione insieme a un ambiente di sviluppo PHP.
In questa guida, descriveremo i passaggi su come installare e proteggere PhpMyAdmin con Nginx su Ubuntu 20.04. Dovrai installare e configurare PhpMyAdmin su Ubuntu Server per lasciarlo funzionare con database e tabelle MySQL. Quindi, impariamo a installare e proteggere PhpMyAdmin con Nginx su Ubuntu 20.04 / 20.10:
  * Prerequisiti
  * Installa phpmyadmin
  * Configurare il database
  * Crea un collegamento simbolico
  * Accesso a PhpMyAdmin
  * Crea mysql superuteser
  * Sicuro PhpMyadmin
  * Conclusione

## Passaggio 1: prerequisiti   {#id-prerequisiti}
Per seguire questa guida, avrai bisogno di un server Ubuntu 20.04 in esecuzione sul tuo computer locale o su un server remoto con prerequisiti.
  * Dovresti accedere al server come utente non root con privilegi sudo e firewall UFW abilitato.
  * Si presume che tu abbia già installato Nginx, MySQL e PHP su Ubuntu.
  * Poiché PhpMyAdmin utilizza le credenziali MySQL per autenticarsi, quindi è necessario installare anche i certificati SSL/TLS per abilitare il traffico crittografato tra server e client.
A parte questo, iniziamo a installare e proteggere PhpMyAdmin per connettersi al server MySQL per accedere al database tramite interfaccia Web.

## Passaggio 2: Installa phpmyadmin   {#Id-1-Install-PhpMyAdmin}
Assicurati di aver installato correttamente tutti i prerequisiti sul sistema prima di installare PhpMyAdmin su Ubuntu 20.04. Inizia aggiornando l'elenco dei pacchetti:
```
sudo apt update 
```
Ora, eseguire il seguente comando per l'installazione del pacchetto PhpMyAdmin dai repository di Ubuntu predefiniti su Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Premere  **y **  e  **INVIO **  quando è stato chiesto di continuare. Se viene richiesto di scegliere un server Web, in quanto non esiste una opzione per  **nginx **  come di seguito, premere  **Tab **  per selezionare OK e quindi  **INVIO **  per continuare senza selezionare un server Web.

{{< figure align=center src="images/mysql-setup.png" alt="Installa e fissa PhpMyAdmin per Nginx su Ubuntu 20.04">}}


## Passaggio 2: Configura database   {#Id-1-Install-PhpMyAdmin}
Quindi, selezionare  **Sì **  e premere  **Invio **  per installare e configurare il database utilizzando lo strumento DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Come configre mysql con phpmyadmin">}}

La password dell'applicazione MySQL viene utilizzata internamente da PhpMyAdmin per comunicare con il database MySQL. Immettere una nuova password per PhpMyAdmin DBMS per registrarsi come nuovo database, selezionare OK e premere Invio per continuare.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Come configre mysql per phpmyadmin">}}

Ti verrà richiesto di confermare la password, immettere la stessa password, selezionare  **ok **  e premere  **INVIO ** . Congratulazioni! PhpMyAdmin è stato installato con successo sul tuo sistema.

## Passaggio 4: Crea link simbolico   {#Id-2-Create-Symbolic-Link}
Esistono diversi modi su come configurare NGINX per servire i file PhpMyAdmin. Se il blocco server del tuo dominio è già impostato per servire le richieste PHP, è necessario creare un collegamento simbolico dai file di installazione PhpMyAdmin Nginx/USR/Share/PhpMyAdmin nella directory del root del documento di dominio. La posizione predefinita della radice del documento Nginx in Ubuntu 20.04/20.10 dovrebbe essere/var/www/html/e potrebbe essere diversa a seconda della configurazione INS. La root del documento può essere individuata ad esempio in /var/www/example.com/public_html.
Successivamente, creeremo un legame simbolico dalla directory PhpMyAdmin/USR/Share/PhpMyAdmin alla radice del documento. Qui supponiamo che la root del nostro documento sia/var/www/html/e aggiungeremo semplicemente PhpMyAdmin alla fine di questo. Questo ci consentirà di accedere a PhpMyAdmin su URL Esempio.com/PhpMyAdmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Passaggio 5: accedere a phpmyadmin   {#id-3-test-phpmyadmin}
Ora dovresti essere in grado di accedere all'interfaccia Web PhpMyAdmin visitando il nome host/dominio del tuo server o l'indirizzo IP pubblico seguito da Domain.com/PhpMyAdmin nel tuo browser Web preferito. Ad esempio http://example.com/phpmyadmin o http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Sui server Ubuntu in esecuzione con MySQL 5.7 e successivamente, non sarai in grado di accedere al database PhpMyAdmin gratuito utilizzando l'account root predefinito MySQL e otterrai un errore come _ "Accesso negato per l'utente" root "@" localhost "_. Invece, dovresti creare un nuovo account Superuser solo per PhpMyAdmin. Successivamente, creeremo l'account root MySQL per accedere a PhpMyAdmin.

## Passaggio 6: crea mysql superuser   {#id-4-create-mysql-superuser}
In Terminal, inizia a accedere a MySQL utilizzando la tua password di root MySQL che potresti aver creato una password di root quando hai installato il database MySQL PhpMyAdmin per la prima volta.
```
sudo mysql -u root -p
```
Dopo l'accesso a MySQL, aggiungi un nuovo superutente MySQL con il nome utente di tua scelta. In questo esempio lo chiamiamo yasiradmin. [Fai clic qui per generare una password forte][2] e sostituire il nuovo \ _Password \ _here sotto con essa.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Ora concedi privilegi superuser al nostro nuovo utente Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Ora esci dalla sessione MySQL. Ora dovresti essere in grado di accedere a PhpMyAdmin utilizzando queste nuove credenziali del superutente.

{{< figure align=center src="images/image.png" alt="Come accedere a phpmyadmin su Ubuntu 20.04">}}

Si consiglia vivamente di impostare un ulteriore sicurezza per PhpMyAdmin per proteggere PhpMyAdmin Nginx. Dovresti essere in grado di cambiare e accedere all'URL PHPMYADMIN a qualcosa come l'URL oscuro.

## Passaggio 7: Secure PhpMyAdmin   {#Id-6-Secure-PhpMyAdmin-RECMEDED}
Successivamente, vogliamo impostare l'autenticazione in NGINX per fornire un ulteriore livello di sicurezza. Ora installeremo Apache2-Utils, che può generare il file .htpasswd che funziona con entrambi i server Nginx e Apache2.
```
sudo apt install apache2-utils
```
Una volta installati, possiamo generare il file .htpasswd. Cambia il nome utente di tua scelta. [Genera una password][3] e mantienila al sicuro.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Ora ci sarà un file .htpasswd contenente il nome utente e la password crittografata. Puoi verificarlo con il comando sotto:
```
cat /etc/nginx/.htpasswd
```
Dovresti vedere qualcosa come il nome utente: $ apr1sdfsdf4435sdtsklfwmmg1sfdsdgg4
Ora dobbiamo aggiungere 2 direttive al nostro file di configurazione Nginx. La posizione del file di configurazione può variare in base alle installazioni, sebbene il percorso del file predefinito sia generalmente AT/etc/nginx/siti-disponibile/impostazione predefinita. Se si imposta più domini, il file di configurazione potrebbe trovarsi in un posto come /etc/nginx/sites-available/example.com
In questo esempio, assumeremo che il file di configurazione Nginx sia AT/etc/nginx/siti-disponibile/impostazione predefinita. Apri il file per modificarlo.
```
sudo nano /etc/nginx/sites-available/default
```
Scorri verso il basso e cerca i blocchi di posizione e incolla in un nuovo blocco sotto di loro con il nome della cartella phpmyadmin oscura, in questo esempio Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Salva file ed esci (premere Ctrl + X, premere Y e quindi premere Invio). Verificare che il file di configurazione Nginx sia valido, altrimenti il ​​server potrebbe arrestare il riavvio eseguendo il comando.
```
sudo nginx -t
```
Se valido, ricarica la configurazione nginx.
```
sudo service nginx reload
```
Ora, quando visiti esempio.com/aspose_hidden, dovresti essere presentato con una finestra di autenticazione.

{{< figure align=center src="images/auth3.png" alt="Come proteggere phpmyadmin">}}

Hai finito con le installazioni PhpMyAdmin su Ubuntu Server.

## conclusioni:   {#id-what-next}
Congratulazioni, hai installato con successo PhpMyAdmin con Nginx per Ubuntu 20.04 / 20.10 server e ora puoi amministrare MySQL tramite PhpMyAdmin. Ora, puoi iniziare a creare database MySQL, utenti, tabelle, eseguire query MySQL e varie altre operazioni.
Se hai domande, non esitate a dirmi di seguito nella sezione commenti.

## Esplorare
Potresti anche apprezzare gli articoli più correlati:
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][4]
  * [Come proteggere e crittografare Nginx con let's Crypt su Ubuntu 20.04][5]
  * [Come configurare il supporto HTTP/2 in NGINX su Ubuntu/Debian][6]
  * [Come configurare Nginx con il passeggero sul server di produzione AWS][7]
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
