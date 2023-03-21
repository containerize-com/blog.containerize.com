---
title: "So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu" 
seoTitle: "So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu" 
description: "In dem Artikel wird erläutert, wie mehrere Versionen von PHP mit Nginx auf Ubuntu installiert werden. Wir werden Schritt-für-Schritt-Anweisungen zur Installation von PHP mit Nginx durchlaufen." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Wenn Sie mehrere Versionen von PHP mit Nginx verwenden möchten, führen Sie in diesem Artikel Schritt für Schritt an, wie Sie PHP mit Nginx auf Ubuntu installieren." 
url: /de/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP mit Nginx -Mehrfach -PHP -Versionen">}}


## Wenn Sie mehrere Versionen von PHP mit Nginx verwenden möchten, führen Sie in diesem Artikel Schritt für Schritt an, wie Sie PHP mit Nginx auf Ubuntu installieren.
Dieser Artikel befindet sich in Fortsetzung unserer Serie zu Tutorials über Nginx. Bisher haben wir abgedeckt, wie nginx als Lastausgleiche verwendet wird, wie nginx als Reverse -Proxy verwendet wird. Und jetzt deckt dieses Tutorial eine weitere anspruchsvolle Frage „Wie man mehrere Versionen von PHP mit Nginx verwendet“ ab. In diesem Tutorial führen wir Ihnen Schritt für Schritt an, wie Sie PHP auf Ubuntu installieren, wie Sie PHP mit Nginx konfigurieren und schließlich mehrere Versionen von PHP mit Nginx installieren können. Also lasst uns anfangen!
  * [Nginx installieren][1]
  * [Installieren Sie mehrere PHP -Versionen][2]
  * [Erstellen Sie mehrere Websites mit PHP][3]
  * [Konfigurieren Sie Nginx, um verschiedene Versionen für Websites auszuführen][4]
  * [Schlussfolgerung][5]

## Installieren Sie Nginx   {#nginx}
Nginx (ausgesprochen als „Engine-X“) ist ein Open-Source-Webserver, der häufig als Reverse-Proxy oder HTTP-Cache verwendet wird. Es ist für Linux kostenlos erhältlich.
Um NGINX zu installieren, verwenden Sie den folgenden Befehl:
```
sudo apt update
sudo apt install nginx
```
Nach der Installation können Sie "http: // localhost" in Ihrem Browser öffnen und haben alle Setups.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Installieren Sie PHP mit Nginx">}}


## Mehrere PHP -Versionen   {#Php} installieren
**PHP  **(rekursives Akronym für **  PHP: Hypertext-Präprozessor** ) ist eine Open-Source-Sprache, die weit verbreitet ist und am besten für die Entwicklung von Websites und webbasierten Anwendungen geeignet ist. Es handelt sich um eine serverseitige Skriptsprache, die in HTML eingebettet werden kann.
Derzeit gibt es drei unterstützte Versionen von **php **, d. H.  **Php 5.6 ** ,  **7.0, **  und  **8.0 ** . Bedeutung  **Php 5.3 ** ,  **5.4, **  und  **5.5**   haben alle das Ende des Lebens erreicht; Sie werden nicht mehr von Sicherheitsaktualisierungen unterstützt. Installieren wir zuerst PHP 7.0 und PHP 7.2 mit PHP-FPM.
Bevor wir uns mit der Installation bewegen, können Sie zunächst das untersuchen, was PHP-FPM ist. **PHP-FPM  **(Ein Akronym von **  Fastcgi Process Manager** ) ist eine äußerst beliebte alternative PHP-Implementierung (Hypertext-Prozessor). PHP-FPM enthält zahlreiche Funktionen, die sich für Websites als vorteilhaft erweisen können, die häufig in großen Volumina Verkehr erhalten.
Um zuerst PHP 7.0 und 7.2 zu installieren, müssen Sie Ihrem Server PHP -Repository hinzufügen, um mehrere Versionen von PHP zu installieren. Mit dem folgenden Befehl können Sie das Repository von Ondrej -PHP hinzufügen:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Sobald das Repository auf dem neuesten Stand ist, installieren Sie PHP 7.0, PHP 7.2 und PHP-FPM mit dem folgenden Befehl:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Überprüfen Sie nach Abschluss der Installation den Status von PHP-FPM mit dem folgenden Befehl:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Erstellen Sie mehrere Websites mit PHP   {#Web}
Die Standardseite wird in/var/www/html/location platziert. Sie können Ihre statischen Seiten hier platzieren oder einen virtuellen Host verwenden und einen anderen Standort platzieren
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Erstellen Sie als nächstes eine Beispielindex.php -Datei für Site1:
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
Erstellen Sie nun eine Beispielindex.php -Datei für Site2:
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
Ändern Sie dann den Eigentum an beiden Websites auf www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Konfigurieren Sie Nginx   {#Configure}
Als nächstes müssen Sie eine nginx -virtuelle Hostdatei für Domänen Site1.containerize.com erstellen, die PHP 7.0 verwendet. Und eine andere für Site2.Containerize.com, die PHP 7.2 verwendet.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Folgende Zeilen hinzufügen:
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
Erstellen Sie nun die zweite Datei für Site2.Containerize.com
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
Aktivieren Sie dann beide virtuellen Hostdateien mit dem folgenden Befehl:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Starten Sie schließlich den Nginx- und PHP-FPM-Dienst neu, um alle Konfigurationsänderungen anzuwenden:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Schlussfolgerung   {#Conclusion}
In diesem Tutorial haben wir untersucht, wie mehrere PHP -Versionen auf Ubuntu sind. Wir haben gelernt, wie man Nginx installiert. Dann haben wir untersucht, wie Sie zwei verschiedene Websites in Nginx einrichten. Und schließlich haben wir gelernt, wie man zwei verschiedene Websites mit verschiedenen Versionen von PHP mit Nginx konfiguriert. Ich hoffe, das Tutorial hat Ihnen geholfen.

## Erkunden
  * [So richten und konfigurieren Sie Nginx als Reverse -Proxy][6]
  * [So verwenden Sie Nginx als Lastausgleich für Ihre Anwendung][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
