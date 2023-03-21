---
title: "Come configurare il server di posta utilizzando Postal su Ubuntu" 
seoTitle: "Come configurare il server di posta utilizzando Postal su Ubuntu" 
description: "Invia e -mail dalle tue app Web con il server di posta open source. Postal consente di inviare e -mail utilizzando API SMTP e HTTP e monitorare anche il traffico e -mail." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Invia e ricevi e -mail con un server di posta open source. Questo articolo ti assisterà nell'installazione e nella configurazione del server postale per la tua azienda." 
url: /it/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Invia e ricevi e -mail con un server di posta open source. Questo articolo ti assisterà nell'installazione e nella configurazione del server postale per la tua azienda.

{{< figure align=center src="images/postal-banner.png" alt="Server di posta open source">}}

L'invio di e -mail su diversi tipi di eventi è necessaria per le applicazioni moderne. Ogni azienda ha bisogno di un **server di posta affidabile  **per le e -mail in uscita. Inoltre, le aziende hanno bisogno di un server di posta per l'invio di e -mail in blocco per campagne di marketing, newsletter e molte altre attività. Sono disponibili diversi **  Server di posta open source  **per questo. Tuttavia, discuteremo in dettaglio il**   Server postale** in questo post e copriremo i seguenti argomenti.
  * [Che cos'è il server postale?][1]
  * [Caratteristiche di Postal][2]
  * [Installazione postale][3]
  * [Conclusione][4]

## Che cos'è il server postale?   {#Postale}
[**Postal **][5] è un server di posta open source gratuito e  **** . È un server di posta a pieno titolo per siti Web e applicazioni Web. Postal Mail Server è un'alternativa al popolare server di posta  **esistente **  come SendGrid e Mailgun.  **Postal **  è una piattaforma di consegna e -mail open source robusta, sicura e scalabile. Tutto il codice sorgente e la documentazione sono disponibili su [ **github ** ][6]. Puoi scaricarlo, installarlo sul tuo server privato e mantenere il pieno controllo su di esso. Puoi anche migliorarlo e migliorarlo secondo le esigenze aziendali. Inoltre, ** Postal Mail Server**  supporta più organizzazioni.
Gli utenti possono visualizzare grafici e statistiche che mostrano il volume delle posta in arrivo e in uscita. Inoltre, è possibile accedere alla coda di messaggi in uscita e in uscita completa. Postal Mail Server fornisce funzionalità per Webhooks. Puoi impostare Webhooks per ricevere informazioni in diretta sulle informazioni di consegna in tempo reale. Offre anche la fidelizzazione dei messaggi che ti consente di archiviare ed esaminare tutti i messaggi di invio e ricevuto. La consegna della posta elettronica è molto importante nel business per garantire che gli utenti ricevano l'e -mail. Tuttavia, a volte la posta elettronica consegna all'utente e devi indagare sul problema.  **Server di posta in entrata e in uscita**  fornisce anche registrazione e strumenti completi per eseguire l'indagine.

## caratteristiche di postale   {#features}
Postal Mail Server offre molte funzionalità. Tuttavia, discuteremo le seguenti caratteristiche chiave in questo articolo.
**Invio di e -mail**: Postal Mail Server fornisce due tecniche per e -mail in uscita tra cui HTTP API e SMTP. È possibile utilizzare facilmente l'API HTTP per l'integrazione con le app Web. È inoltre possibile utilizzare un server SMTP per l'integrazione con applicazioni e sistemi esistenti.
**E -mail in arrivo **: **Mail in arrivo  **può essere inoltrata all'endpoint HTTP,**   Server SMTP** e altri indirizzi e -mail utilizzando il server postale.
**Controllo spam e virus**: Spamassassin e Clamav possono essere integrati con postale per scansionare automaticamente i messaggi in arrivo e in uscita mentre passano tramite i server di posta. Questa funzione è anche disattivata per impostazione predefinita.
**Fare clic e aprire il monitoraggio**: le aperture e i clic e -mail possono essere tracciati con posta. Postal scansionerà i tuoi messaggi in uscita e sostituirà qualsiasi collegamento con un nuovo link che viaggia attraverso il tuo server Web postale. Quando l'utente fa clic sul collegamento, Postal registra l'azione e le reindirizza istantaneamente all'URL originale. Tuttavia, ciò non è attivato per impostazione predefinita.
**Pool IP**: Postal consente di inviare messaggi da una varietà di indirizzi IP. Ciò consente di assegnare più indirizzi IP a diversi server di posta o di inviare da IP diversi a seconda del mittente o degli indirizzi del destinatario.

## installazione postale   {#installation}
Seguire la guida passo-passo seguente per installare il software postale  **Mail Server**  su Ubuntu 18.04.
  * Innanzitutto, devi connettere il tuo server Vis ssh. Esegui il seguente comando per aggiornare il sistema con gli ultimi pacchetti disponibili.
```
sudo apt-get update
```

### Installa server di database MariaDB
  * Esegui il comando per installare MariaDB.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Una volta fatto con l'installazione. Ora, devi proteggerlo eseguendo il comando seguente.
```
mysql_secure_installation
```
  * Successivamente, ti farà un paio di domande come mostrato di seguito. Devi rispondere a tutte le domande.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Connettiti al server MariaDB con il seguente comando.
```
mysql -u root -p
```
  * Crea un database per la postale.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Successivamente, crea un utente di database chiamato "Postaluser" con nuova password.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Successivamente, concedi all'utente pieno accesso al database "postaluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Successivamente, scaricare i privilegi e uscire dalla shell MariaDB con il seguente comando.
```
FLUSH PRIVILEGES;
EXIT;
```

### Installa Ruby
  * Innanzitutto, aggiungi PPA di terze parti per installare Ruby. Esegui i seguenti comandi.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Aggiorna i pacchetti Ubuntu.
```
sudo apt update
```
  * Installa Ruby eseguendo il comando seguente.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Installa RabbitMQ
  * Erlang è necessario per installare RabbitMQ, quindi è necessario installarlo. Aggiungi la chiave del repository Erlang a Ubuntu con il comando seguente.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Quindi, aggiungi il repository Erlang con il seguente comando.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Esegui i seguenti comandi per installare Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Una volta terminato l'installazione di Erlang, puoi procedere a installare RabbitMQ. Aggiungi il repository RabbitMQ a Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Aggiungi la chiave GPG RabbitMQ con il comando seguente.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Esegui i comandi di seguito per installare il pacchetto RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Esegui il comando sotto per abilitare RabbitMQ, in modo che inizi sempre quando si avvia il sistema.
```
sudo systemctl enable rabbitmq-server
```
  * Successivamente, dovrai creare RabbitMQ Vhost e utente per postale. Esegui il seguente comando su di esso.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Installa Nodejs
  * Aggiungi il repository Nodejs con il seguente comando.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Successivamente, eseguire il comando qui sotto per installare Nodejs.
```
sudo apt-get install nodejs
```

### Installa il server postale postale
  * Innanzitutto, è necessario creare un utente per il server postale. Crea con il seguente comando.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Successivamente, consenti a Ruby di ascoltare le porte Web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Installare tutte le gemme richieste con i seguenti comandi.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Crea una struttura di directory per il postale.
```
sudo mkdir -p /opt/postal/app
```
  * Successivamente, scarica l'ultima versione di Postal.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Estrai il file scaricato con il seguente comando.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Successivamente, modifica la proprietà della directory postale.
```
sudo chown -R postal:postal /opt/postal
```
  * Crea un collegamento simbolico per il binario postale eseguendo il comando seguente.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Installare tutte le dipendenze richieste.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Esegui il comando di seguito per inizializzare le configurazioni postali.
```
sudo postal initialize-config
```
  * Successivamente, eseguire il seguente comando per aprire il file di configurazione postale.
```
sudo nano /opt/postal/config/postal.yml
```
  * Apportare le modifiche indicate in grassetto e salvare il file.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Esegui comando per inizializzare il database.
```
sudo postal initialize
```
  * Crea un utente amministratore per posta.
```
sudo postal make-user
```
  * Successivamente, dovrai fornire i dettagli dell'account utente come mostrato di seguito.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :*********

User has been created with e-mail address admin@example.com
```
  * Infine, eseguire il seguente comando per avviare e controllare lo stato dell'applicazione postale.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Installa nginx
  * Esegui il comando di seguito per installare Nginx Web Server.
```
sudo apt install nginx
```
  * Successivamente, copia la configurazione NGINX postale per usarlo come host virtuale.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Creare un certificato SSL autofirmato.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Dopodiché, dovrai rispondere alle domande.
  * Aprire il file host virtuale predefinito NGINX.
  * Modifica il valore di server_name e salva il file.
  * Infine, riavvia Nginx Web Server eseguendo il comando seguente.
```
sudo systemctl restart nginx
```
  * Infine, apri il browser e digita l'URL https://postal.example.com. Verrai reindirizzato alla pagina di accesso.

## conclusioni   {#conclusion}
Abbiamo superato in profondità l'introduzione e le caratteristiche primarie del server postale. Abbiamo anche incluso le istruzioni passo-passo per l'impostazione di questo  **Mail Transfer Agent** . Inoltre, abbiamo fornito alcune informazioni sulla configurazione. La configurazione di un server postale postale è un processo semplice. Spero che questo articolo sia davvero utile nella configurazione e nella configurazione di un server postale per la tua attività.
Infine, [**Containerize.com **][7] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, resta in contatto con questa categoria [**  Email transazionale**][8] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  *[ **software di posta elettronica transazionale top** ][9]
  *[ **Potal - Open Source Mail Server** ][5]
  *[ **5 Il miglior software per il server di posta open source per le aziende nel 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
