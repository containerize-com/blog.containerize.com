---
title: "Setup -Tutorial für LEMP Stack auf Ubuntu 18.04" 
seoTitle: "Setup -Tutorial für LEMP Stack auf Ubuntu 18.04" 
description: "Der LEMP Stack ist ein Software -Stack, mit dem Webanwendungen entwickelt und bereitgestellt werden. Erfahren Sie, wie Sie Nginx, MySQL und PHP auf Ubuntu 18.04 installieren." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Install & amp; Konfigurieren Sie den LEMP -Stack für die Entwicklung und Bereitstellung von Webanwendungen. Mit dieser Anleitung können Sie Nginx, MySQL und PHP auf Ubuntu 18.04 installieren." 
url: /de/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Installieren und Konfigurieren von LEMP -Stack für die Entwicklung und Bereitstellung von Webanwendungen. Mit dieser Anleitung können Sie Nginx, MySQL und PHP auf Ubuntu 18.04 installieren.

{{< figure align=center src="images/lemp-banner.png" alt="Installieren Sie Lemp Stack auf Ubuntu">}}


## Überblick {#Prerequisites}

In diesem Handbuch installieren wir Nginx, MySQL und PHP (LEMP Stack) für die Entwicklung und Bereitstellung von Webanwendungen. Wir konfigurieren auch einen Webserver zu Server -PHP -Anwendung auf Ubuntu Server 18.04. Wir werden die folgenden Abschnitte in diesem Tutorial behandeln.
* [  **Voraussetzungen**  ][1]
* [  **Was ist Lemp Stack?**  ][2]
* [  **LEMP -Installation**  ][3]
* [  **Schlussfolgerung**  ][4]

## Voraussetzungen {#Voraussetzungen}

Vor der Installation der Software sollten Sie die folgenden Anforderungen erfüllen.
  * Server mit Ubuntu -Betriebssystem
* Nicht-Root-Benutzer mit  **sudo**  privileges

## Was ist Lemp Stack? {#What}

 **Lemp Stack** ist eine Sammlung von Software, mit der PHP-basierte Webanwendungen ausgeführt werden können. LEMP steht für Linux, Nginx, MySQL und PHP. Der LEMP -Stack ist eine Variante des Lampenstapels. Sowohl LAMP als auch LEMP sind beliebte Software -Stacks für die Entwicklung und Bereitstellung von Webanwendungen. Es gibt einen Unterschied zwischen diesen beiden Software -Stapeln. LAMP nutzt den Apache -Webserver, während der LEMP -Server den NGINX -Webserver verwendet.

## LEMP -Installation {#Installation}

In diesem Abschnitt werden wir uns darauf konzentrieren, wie Nginx, MySQL und PHP auf Ubuntu 18.04 installiert werden. Zunächst müssen wir Serverpakete aktualisieren, indem wir den folgenden Befehl ausführen.
```
$ sudo apt update
```

### Installieren von Nginx Web Server
* Führen Sie den folgenden Befehl aus, um nginx auf Ubuntu zu installieren**.
```
$ sudo apt install nginx
```
  * Wenn Sie mit der Nginx -Installation fertig sind, öffnen Sie Ihren Webbrowser und geben Sie Ihre Server -IP -Adresse ein. Es zeigt Ihnen die Standardseite des NGINX Web Server Standard.

{{< figure align=center src="images/nginx-home-1.png" alt="NGINX Web Server Standardseite">}}


### Installieren von MySQL
Jetzt müssen Sie den MySQL -Datenbankserver für die Verwaltung Ihrer Anwendungsdaten installieren.
* Führen Sie den folgenden Befehl aus, um MySQL auf Ubuntu zu installieren**.
```
$ sudo apt install mysql-server
```
  * Um die MySQL -Installation zu sichern, führen Sie den folgenden Befehl aus.
```
$ sudo mysql_secure_installation
```
* Sie werden gebeten, entweder zu aktivieren  **Passwort -Plugin validieren**  oder nicht. Es ist besser, es nicht zu aktivieren, also geben Sie N ein und drücken Sie die Eingabetaste, um den nächsten Schritt aufzubauen.
  * Als nächstes werden Sie einige Fragen stellen, wie unten gezeigt. Sie müssen alle Fragen beantworten.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Jetzt ist MySQL Server in Betrieb. Sie können es mit dem folgenden Befehl testen. Geben Sie Ihr Ubuntu -Root -Konto -Passwort ein, nicht das MySQL, falls es für ein Passwort aufgefordert wurde.
```
$ sudo mysql
```
  * Geben Sie den folgenden Befehl ein, um aus MySQL zu beenden.
```
mysql> exit
```

### PHP installieren
Wir werden die Installation von PHP-FPM für die Verarbeitung von PHP abdecken. PHP-FPM steht für FastCGI Process Manager. Der Nginx-Webserver verfügt über keine integrierten Funktionen für die Verarbeitung von PHP. Daher verwenden wir PHP-FPM dafür. Darüber hinaus werden wir PHP-MYSQL für die Kommunikation von PHP mit dem MySQL für die Datenverwaltung installieren.
* Führen Sie den folgenden Befehl aus, um PHP auf Ubuntu zu installieren**.
```
$ sudo apt install php-fpm php-mysql
```
  * Jetzt sind Sie mit der PHP -Installation und der erforderlichen Software von LEMP Stack für die Ausführung von Webanwendungen abgeschlossen.
  * In diesem Schritt erstellen wir die Nginx -Konfigurationsdatei, um NGINX mit dem PHP -Prozessor für dynamische Inhalte zu informieren. Führen Sie den folgenden Befehl aus, um die Nginx -Konfigurationsdatei zu erstellen.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Kopieren Sie den Code in die Nginx -Konfigurationsdatei und speichern Sie ihn.
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
  * Schauen wir uns diese Direktiven und den Standortblock kurz an, damit Sie grundlegende Informationen haben können.
*  **Hören**  : Sie können den Port für Nginx definieren. Verwenden Sie Port 80 für HTTP und 443 für HTTPS -Protokolle.
*  **root**  : Definieren Sie das Stammverzeichnis für Ihr Projekt. NGINX verwendet es, um die Website oder Webanwendung zu bedienen.
*  **INDEX**  : Definieren Sie die Reihenfolge, in der Dateien zugestellt werden sollten. Wenn die Indexdatei aufgerufen wird, liefert NginX die Index.php -Datei.
*  **server_name**  : Definieren Sie den Domänennamen oder die öffentliche IP Ihres Servers.
*  **Standort /** : Dieser Standortblock hat **try_block**  Anweisung und entspricht dem angeforderten URI. Nginx gibt 404 Fehler zurück, wenn die angeforderte Datei nicht gefunden wird.
*  **Standort ~ .php $**  : Dieser Standortblock verarbeitet die PHP -Verarbeitung.
*  **Standort ~ /.ht** : Nginx verarbeitet  **. Htaccess**  Datei und dieser Speicherort blockiert sie. Nginx serviert keine .htaccess -Datei, indem er **alle**  Richtlinie verweigert.
  * Erstellen Sie Symlink für die neu erstellte Nginx -Konfigurationsdatei, um sie zu aktivieren.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Führen Sie den folgenden Befehl aus, um die Nginx -Konfigurationsdatei für Syntaxfehler zu testen.
```
$ sudo nginx -t
```
  * Starten Sie den Nginx -Webserver neu.
```
$ sudo systemctl restart nginx
```

### Test Php
  * Um sicherzustellen, dass Nginx den PHP -Seiten korrekt dient, erstellen wir PHP -Datei zum Testen der Konfigurationen.
  * Erstellen Sie die Datei info.php im Root -Verzeichnis des NGINX -Webservers, indem Sie den folgenden Befehl ausführen.
```
$ sudo nano /var/www/html/info.php
```
  * Fügen Sie den folgenden Code hinzu und speichern Sie die Datei.
```
<?php
phpinfo();
```
  * Öffnen Sie Ihren Webbrowser und geben Sie Domänennamen oder Server öffentlich IP ein, gefolgt vom PHP -Dateinamen wie http: // server \ _ip \ _or_domain/info.php. Sie sehen die folgende Seite.

{{< figure align=center src="images/info-php.png" alt="PHP -Info -Seite">}}


## Abschluss {#Abschluss}

In diesem Tutorial haben wir über die Installation und Konfiguration des  **Lemp -Stacks**  besprochen. Wie Sie sehen können, ist das Konfigurieren von Software -Stack -Komponenten sehr einfach. Darüber hinaus können Sie in wenigen Minuten mit dem Erstellen und Servieren von Web -Apps beginnen.
Schließlich befindet sich [  **containerize.com** ][5] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher finden Sie in Kontakt mit dieser Kategorie [ **Web Server -Lösung**  ][6], um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
* [  **Best Open Source Web Server Solution Stack**  ][7]
*  **[beliebteste Open Source Digital Forensic Tools][8]**  
*  **[Top 5 Open Source Message Queue (MQ) Software in 2021][9]**  
*  **[Beste Open -Source -Cloud -Speicher- und Dateifreigabe -Software][10]**  
* [  **So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu**  ][11]
* [  **So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu**  ][12]
* [  **Top 5 beliebteste Open-Source-Lizenzen von 2021**  ][13]



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
