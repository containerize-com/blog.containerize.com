---
title: "So richten Sie den Mailserver mit der Postal auf Ubuntu ein" 
seoTitle: "So richten Sie den Mailserver mit der Postal auf Ubuntu ein" 
description: "Senden Sie E -Mails von Ihren Web -Apps mit dem Open Source Mail -Server. Postal ermöglicht es Ihnen, E -Mails mit SMTP & HTTP -API zu senden und den E -Mail -Datenverkehr zu überwachen." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Senden und empfangen Sie E -Mails mit einem Open -Source -Mail -Server. Dieser Artikel unterstützt Sie bei der Installation und Konfiguration des Post -Mail -Servers für Ihr Unternehmen." 
url: /de/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Senden und empfangen Sie E -Mails mit einem Open Source Mail -Server. Dieser Artikel unterstützt Sie bei der Installation und Konfiguration des Post -Mail -Servers für Ihr Unternehmen.

{{< figure align=center src="images/postal-banner.png" alt="Open Source Mail -Server">}}

Für moderne Anwendungen ist das Senden von E -Mails zu verschiedenen Arten von Veranstaltungen erforderlich. Jedes Unternehmen benötigt einen zuverlässigen **Mailserver  **für ausgehende E -Mails. Darüber hinaus benötigen Unternehmen einen Mailserver für das Senden von Massen -E -Mails für Marketingkampagnen, Newsletter und viele andere Aufgaben. Dafür stehen mehrere **  Open Source Mail -Server  **zur Verfügung. Wir werden jedoch den **  Postserver**  in diesem Beitrag ausführlich diskutieren und die folgenden Themen behandeln.
  * [Was ist Post -Mail -Server?][1]
  * [Merkmale der Post][2]
  * [Postinstallation][3]
  * [Schlussfolgerung][4]

## Was ist Post -Mail -Server?   {#Post}
[**Postal **][5] ist ein kostenloser und  **Open Source Mail -Server ** . Es handelt sich um einen E-Mail-Server mit vollem Funktionsumfang für Websites und Webanwendungen. Postal Mail Server ist eine Alternative zu dem vorhandenen beliebten  **Mailserver **  wie SendGrid und Mailgun.  **Postal **  ist eine robuste, sichere und skalierbare Open -Source -E -Mail -Zustellungsplattform. Alle Quellcode und Dokumentation sind unter [ **Github ** ][6] verfügbar. Sie können herunterladen, auf Ihrem privaten Server installieren und die volle Kontrolle darüber behalten. Sie können es auch nach geschäftlichen Bedürfnissen verbessern und verbessern. Darüber hinaus unterstützt  **Postal -Mailserver**   mehrere Organisationen.
Benutzer können Diagramme und Statistiken anzeigen, die das Volumen der eingehenden und ausgehenden Mails zeigen. Darüber hinaus können Sie auf die vollständige ausgehende und eingehende Nachrichtenwarteschlange zugreifen. Postal Mail Server bietet Funktionen für Webhooks. Sie können Webhooks einrichten, um Live-Informationen zu Lieferinformationen in Echtzeit zu erhalten. Es bietet auch Nachrichtenaufbewahrung, mit denen Sie alle Sende- und Empfangen -Nachrichten speichern und prüfen können. Die E -Mail -Zustellung ist im Unternehmen sehr wichtig, um sicherzustellen, dass Benutzer die E -Mail erhalten. Manchmal liefert E -Mail an den Benutzer und Sie müssen das Problem untersuchen. Der eingehende und ausgehende Mailserver ** bietet auch eine vollständige Protokollierung und Tools, um die Untersuchung durchzuführen.

## Funktionen von Postal   {#Features}
Postal Mail Server bietet viele Funktionen. Wir werden jedoch die folgenden Schlüsselmerkmale in diesem Artikel diskutieren.
**Senden von E -Mails** : Postal -Mail -Server bietet zwei Techniken für ausgehende E -Mails, einschließlich HTTP -API und SMTP. Sie können die HTTP -API problemlos zur Integration mit Web -Apps verwenden. Sie können auch einen SMTP -Server zur Integration mit vorhandenen Anwendungen und Systemen verwenden.
**Eingehende E -Mails **:  **Eingehende Mail **  kann an HTTP -Endpunkt,  **SMTP -Server**   und andere E -Mail -Adressen mit dem Post -Mail -Server weitergeleitet werden.
**Spam- und Virusprüfung** : Spamassassin und Clamav können in die Post integriert werden, um eingehende und ausgehende Nachrichten automatisch zu scannen, wenn sie Mail -Server übergeben. Diese Funktion wird ebenfalls standardmäßig ausgeschaltet.
**Klicken und Öffnen von Tracking** : E -Mail -Öffnungen und -klicks können mit Post verfolgt werden. Postal scannt Ihre ausgehenden Nachrichten und ersetzt alle Links durch einen neuen Link, der über Ihren Post -Webserver führt. Wenn der Benutzer auf den Link klickt, zeichnet Postal die Aktion auf und leitet sie sofort in die ursprüngliche URL weiter. Dies wird jedoch standardmäßig nicht aktiviert.
**IP -Pools** : Mit Post können Sie Nachrichten aus einer Vielzahl von IP -Adressen senden. Auf diese Weise können Sie verschiedenen E -Mail -Servern mehrere IP -Adressen zuweisen oder je nach Absender oder Empfängeradressen von verschiedenen IPs senden.

## Postalinstallation   {#installation}
Befolgen Sie die folgende Schritt-für-Schritt-Anleitung, um die Postalserver-Software ** unter Ubuntu 18.04 zu installieren.
  * Zunächst müssen Sie Ihren Server -Vish verbinden. Führen Sie den folgenden Befehl aus, um das System mit den neuesten verfügbaren Paketen zu aktualisieren.
```
sudo apt-get update
```

## # MARIADB -Datenbankserver installieren
  * Führen Sie den Befehl aus, um Mariadb zu installieren.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Sobald Sie mit der Installation fertig sind. Jetzt müssen Sie es sichern, indem Sie den folgenden Befehl ausführen.
```
mysql_secure_installation
```
  * Als nächstes werden Sie einige Fragen stellen, wie unten gezeigt. Sie müssen alle Fragen beantworten.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Stellen Sie mit dem folgenden Befehl eine Verbindung zum MariADB -Server her.
```
mysql -u root -p
```
  * Erstellen Sie eine Datenbank für die Post.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Erstellen Sie als nächstes einen Datenbankbenutzer mit dem Namen "Postaluser" mit neuem Passwort.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Gewähren Sie dem Benutzer danach den vollen Zugriff auf die Datenbank "Postaluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Spülen Sie als nächstes die Privilegien und beenden Sie die Mariadb -Shell mit dem folgenden Befehl.
```
FLUSH PRIVILEGES;
EXIT;
```

## # Ruby installieren
  * Fügen Sie zunächst PPA von Drittanbietern hinzu, um Ruby zu installieren. Führen Sie die folgenden Befehle aus.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Ubuntu -Pakete aktualisieren.
```
sudo apt update
```
  * Installieren Sie Ruby, indem Sie den folgenden Befehl ausführen.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

## # Rabbitmq installieren
  * Erlang muss Rabbitmq installieren, damit Sie es auch installieren müssen. Fügen Sie Ubuntu mit dem folgenden Befehl Erlang Repository -Schlüssel hinzu.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Fügen Sie als nächstes das Erlang -Repository mit dem folgenden Befehl hinzu.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Führen Sie die folgenden Befehle aus, um Erlang zu installieren.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Sobald Sie mit der Erlang -Installation fertig sind, können Sie Rabbitmq installieren. Fügen Sie dem Ubuntu Rabbitmq -Repository hinzu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Fügen Sie den Rabbitmq -GPG -Taste mit dem folgenden Befehl hinzu.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Führen Sie die folgenden Befehle aus, um das Rabbitmq -Paket zu installieren.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Führen Sie den Befehl unten aus, um Rabbitmq zu aktivieren. Daher beginnt es immer, wenn der Systemstart startet.
```
sudo systemctl enable rabbitmq-server
```
  * Als nächstes müssen Sie Rabbitmq Vhost und Benutzer für Post erstellen. Führen Sie den folgenden Befehl darauf aus.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

## # Nodejs installieren
  * Fügen Sie mit dem folgenden Befehl ein NodeJS -Repository hinzu.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Führen Sie als nächstes den Befehl unten aus, um NodeJs zu installieren.
```
sudo apt-get install nodejs
```

## # Postal Mail Server installieren
  * Zunächst müssen Sie einen Benutzer für Post -Mail -Server erstellen. Erstellen Sie es mit dem folgenden Befehl.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Lassen Sie Ruby als nächstes auf Web -Ports zuhören.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Installieren Sie alle erforderlichen Edelsteine ​​mit den folgenden Befehlen.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Erstellen Sie eine Verzeichnisstruktur für die Post.
```
sudo mkdir -p /opt/postal/app
```
  * Laden Sie als nächstes die neueste Version von Postal herunter.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Extrahieren Sie die heruntergeladene Datei mit dem folgenden Befehl.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Als nächstes ändern Sie das Eigentum am Postverzeichnis.
```
sudo chown -R postal:postal /opt/postal
```
  * Erstellen Sie einen Symlink für Post -Binary, indem Sie den folgenden Befehl ausführen.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Installieren Sie alle erforderlichen Abhängigkeiten.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Führen Sie den folgenden Befehl aus, um die Postkonfigurationen zu initialisieren.
```
sudo postal initialize-config
```
  * Führen Sie als nächstes den folgenden Befehl aus, um die Postkonfigurationsdatei zu öffnen.
```
sudo nano /opt/postal/config/postal.yml
```
  * Nehmen Sie die angegebenen Änderungen fett und speichern Sie die Datei.
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
  * Führen Sie den Befehl aus, um die Datenbank zu initialisieren.
```
sudo postal initialize
```
  * Erstellen Sie einen Administratorbenutzer für die Post.
```
sudo postal make-user
```
  * Als nächstes müssen Sie Benutzerkonto -Details wie unten angezeigt angeben.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Führen Sie schließlich den folgenden Befehl aus, um den Status der Postanwendung zu starten und zu überprüfen.
```
sudo -u postal postal start
sudo -u postal postal status
```

## # nginx installieren
  * Führen Sie den folgenden Befehl aus, um den NGINX -Webserver zu installieren.
```
sudo apt install nginx
```
  * Kopieren Sie als nächstes die Postalnginx-Konfiguration, um sie als virtuelles Host zu verwenden.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Erstellen Sie ein selbstsigniertes SSL-Zertifikat.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Danach müssen Sie die Fragen beantworten.
  * Öffnen Sie die nginx -Standard -virtuelle Host -Datei.
  * Ändern Sie den Wert von server_name und speichern Sie die Datei.
  * Starten Sie den Nginx -Webserver schließlich neu, indem Sie den folgenden Befehl ausführen.
```
sudo systemctl restart nginx
```
  * Öffnen Sie schließlich Ihren Browser und geben Sie die URL https://postal.example.com ein. Sie werden auf die Anmeldeseite umgeleitet.

## Schlussfolgerung   {#Conclusion}
Wir haben die Einführung und die primären Funktionen des Post -Mail -Servers in großer Tiefe durchlaufen. Wir haben auch Schritt-für-Schritt-Anweisungen zum Einrichten dieses **Mail-Transferagenten**  aufgenommen. Darüber hinaus haben wir einen Einblick in das Setup gegeben. Das Einrichten eines Post -Mail -Servers ist ein einfacher Prozess. Ich hoffe, dass dieser Artikel tatsächlich hilfreich ist, um einen Post -Mail -Server für Ihr Unternehmen einzurichten und zu konfigurieren.
Schließlich befindet sich [**containerize.com **][7] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher bleiben Sie mit dieser Kategorie [ **Transaktions -E -Mail**  ][8] in Kontakt, um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[**Top Transactional E -Mail -Software** ][9]
  *[**Potal - Open Source Mail Server** ][5]
  *[**5 beste Open -Source -Mail -Server -Software für Unternehmen im Jahr 2020** ][10]

  
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
