---
title: "So einrichten Sie Online -Helpdesk -Software mit Osticket" 
seoTitle: "So einrichten Sie Online -Helpdesk -Software mit Osticket" 
description: "Verwalten Sie alle Ihre Supportanfragen an einem Ort mit Osticket -Helpdesk. Konvertieren Sie Anfragen, die per E-Mail, Telefon und Formulare in webbasierte Tickets erstellt wurden." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Verwalten Sie alle Ihre Supportanfragen an einem Ort mit Osticket. Konvertieren Sie Anfragen, die per E-Mail, Telefon und Formulare in einfache webbasierte Tickets erstellt wurden." 
url: /de/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Verwalten Sie alle Ihre Supportanfragen an einem Ort mit Osticket. Konvertieren Sie Anfragen, die per E-Mail, Telefon und Formulare in einfache webbasierte Tickets erstellt wurden.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="So einrichten Sie Online -Helpdesk -Software mit Osticket">}}

Osticket ist eine Open -Source -Online -Helpdesk -Softwarelösung. Osticket Helpdesk ist eine kostenlose Alternative zu hohen Kosten und komplexen Kundenunterstützungssystemen. Es ist einfach, leicht, zuverlässig, webbasiert und einfach zu erstellen und zu verwenden. Das Beste daran ist, dass es völlig kostenlos ist. Wir werden die folgenden Abschnitte in diesem Tutorial behandeln:
  * [Was ist Osticket?][1]
  * [Vor- und Nachteile von Osticket][2]
  * [Wie man Osticket einrichtet?][3]
  * [Schlussfolgerung][4]

## Was ist Osticket?   {#Osticket}
Osticket bietet ein benutzerfreundliches Bedienfeld und eine Echtzeit-Berichtskomponente. Benutzer können sich einfach anmelden und die Tickets in wenigen einfachen Schritten erstellen. Sie können Tickets über Ihre Website, Ihre E -Mail oder Ihr Telefon erstellen. Eingehende Tickets werden dann gespeichert und den Agenten zugeordnet. Agenten erhalten E -Mail -Benachrichtigungen und antworten auf die Fragen, um ihre Probleme zu lösen. Kunden und Agenten können Details und Fortschritte im Kommentarbereich diskutieren. Kunden können ihre Anfragen und Fortschritte über ein integriertes Kundenportal durch diese Online-Helpdesk-Software verfolgen.

## Vor- und Nachteile von Osticket   {#Pros}

#### Pros
  * Osticket ist sowohl für Endbenutzer als auch für Support -Agenten äußerst benutzerfreundlich.
  * Mit reichhaltigen Merkmalen gebündelt, hat Osticket alles, was Sie brauchen, ohne übermäßig kompliziert zu sein.
  * Osticket ist vollständig kostenlos und Open -Source -Ticket -Management -Software.
  * Es ist leicht, sicher, zuverlässig und einfach zu installieren, um Helpdesk -Management -Software zu installieren.
  * Es ist flexibel, auf allen beliebten Webservern wie Apache, Nginx, LightTPD und IIS usw. auszuführen.

#### cons
  * Osticket bietet keine Details zur Ticketanalyse und Statistiken wie andere bezahlte Helpdesk -Systeme.
  * Die Benutzeroberfläche ist im Vergleich zu anderen Support -Systemen sehr einfach und grundlegend.

## Wie installiere ich Osticket?   {#Wie}
Befolgen Sie diese Schritte, um Osticket mit Nginx auf Ubuntu 18.04 LTS zu installieren.
  * Erstellen Sie ein neues Verzeichnis für Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Laden Sie das neueste Osticket -Setup mit den folgenden Befehlen herunter.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Erstellen Sie anschließend die Konfigurationsdatei mit diesen Befehlen aus der Beispieldatei.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Wechseln Sie dann den Besitz des Osticket-Webverzeichnisses in den Benutzer und die Gruppe "www-data".
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Erstellen Sie danach eine neue virtuelle Host -Konfigurationsdatei.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Fügen Sie dann den Konfigurationscode ein.
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
  * Ändern Sie den Servernamen gemäß Ihrem Domänennamen. Speichern Sie die Datei und beenden Sie.
  * Verknüpfen Sie nun diese virtuelle Hostdatei mit dem Ordner "Sites-fähig" mit dem folgenden Befehl
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Testen Sie auf Konfigurationsfehler mithilfe des folgenden Befehls
```
nginx -t
```
  * Starten Sie nun den Nginx -Dienst mit dem folgenden Befehl neu
```
sudo systemctl restart nginx

```
  * Geben Sie nun Ihren Domänennamen in jedem Webbrowser ein, um den Installationsassistenten zu starten, wie in der folgenden Abbildung gezeigt

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="So einrichten Sie Online -Helpdesk -Software mit Osticket">}}

  * Aktivieren Sie die erforderlichen Erweiterungen von php.ini und klicken Sie auf "Weiter".
  *Füllen Sie alle erforderlichen Informationen aus und klicken Sie jetzt auf "**Installieren" ****  Schaltfläche.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="So einrichten Sie Online -Helpdesk -Software mit Osticket">}}

  * Geben Sie in den Datenbankeinstellungen DBName, Benutzername und Kennwort ein.
  * Klicken Sie schließlich auf die Schaltfläche "Jetzt installieren"
  * Nach Abschluss der Installation wird die Seite mit Erfolgsnachricht angezeigt.
  * Ändern Sie als nächstes die Erlaubnis von ost-config.php, den Schreibzugriff zu entfernen, indem Sie den folgenden Befehl ausführen:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Schlussfolgerung   {#Conclusion}
Osticket eignet sich am besten für Unternehmen mit niedrigem Budget oder für diejenigen, die ein einfaches Helpdesk -System und keine komplexe möchten. Es ist einfach, leicht, zuverlässig, Open Source und völlig kostenlose Online -Helpdesk -Software. Dies macht Osticket zu einer großartigen Alternative zu höher kostengünstigen Kundenunterstützungssystemen. Weitere Informationen zu Osticket -Funktionen und Installationshandbuch finden Sie unter dem folgenden Tutorial.

## Erkunden
[Beste Open Source und kostenlose IT -Helpdesk -Software][5]
[Beliebtes kostenloses Ticketing -basiertes Helpdesk und Kundenbetreuungssystem][6]
[Ein Anfängerleitfaden zur Entwicklung von Ostickets Plugin][7]
[So implementieren Sie Multi-Messen in Osticket][8]
[Automatisieren Sie das Ticketing -System mit WordPress und Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
