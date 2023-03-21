---
title: "Jak zainstalować wiele wersji PHP z Nginx na Ubuntu" 
seoTitle: "Jak zainstalować wiele wersji PHP z Nginx na Ubuntu" 
description: "Artykuł wyjaśnia, jak zainstalować wiele wersji PHP z Nginx na Ubuntu. Przejdziemy instrukcje krok po kroku, jak zainstalować PHP z Nginx." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Jeśli chcesz użyć wielu wersji PHP z Nginx, w tym artykule poprowadzimy Cię krok po kroku, jak zainstalować PHP z Nginx na Ubuntu." 
url: /pl/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP z wieloma wersjami PHP Nginx">}}


## Jeśli chcesz użyć wielu wersji PHP z Nginx, w tym artykule poprowadzimy Cię krok po kroku, jak zainstalować PHP z Nginx na Ubuntu.
Ten artykuł jest kontynuacją naszej serii na temat samouczków na temat Nginx. Do tej pory omówiliśmy, jak używać Nginx jako równoważenia obciążenia, jak używać Nginx jako odwrotnego proxy. A teraz ten samouczek obejmuje kolejne wymagające pytanie „jak korzystać z wielu wersji PHP z Nginx”. W tym samouczku poprowadzimy Cię krok po kroku, jak zainstalować PHP na Ubuntu, jak skonfigurować PHP z Nginx, a na koniec, jak możesz zainstalować wiele wersji PHP z Nginx. Więc zacznijmy!
  * [Zainstaluj Nginx][1]
  * [Zainstaluj wiele wersji PHP][2]
  * [Utwórz wiele stron internetowych z PHP][3]
  * [Konfiguruj Nginx, aby uruchamiać różne wersje dla stron internetowych][4]
  * [Wniosek][5]

## Zainstaluj Nginx   {#nginx}
Nginx (wymawiany jako „Engine-X”) to serwer WWW open source, który jest często używany jako pamięć podręczna proxy lub HTTP. Jest dostępny dla Linux za darmo.
Aby zainstalować Nginx, użyj następującego polecenia:
```
sudo apt update
sudo apt install nginx
```
Po zakończeniu instalacji możesz otworzyć „http: // localhost” w przeglądarce i masz całą konfigurację.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Zainstaluj PHP z Nginx">}}


## Zainstaluj wiele wersji PHP   {#php}
**PHP **(Rekurencyjny akronim dla ** PHP: hipertext preprocesor** ) to open source, popularny język skryptowy ogólnego przeznaczenia, który jest powszechnie używany i najlepiej nadaje się do tworzenia stron internetowych i aplikacji internetowych. Jest to język skryptowy po stronie serwera, który można osadzić w HTML.
Obecnie istnieją trzy obsługiwane wersje **PHP **, tj.  **PHP 5.6 ** ,  **7.0, **  i  **8.0 ** . Znaczenie  **PHP 5.3 ** ,  **5.4, **  i ** 5.5**  osiągnęli koniec życia; Nie są już obsługiwane z aktualizacjami bezpieczeństwa. Najpierw zainstalujmy PHP 7.0 i PHP 7.2 z PHP-FPM.
Właściwie zanim przeprowadzimy się z instalacją, najpierw podkreśla, co jest PHP-FPM. **PHP-FPM  **(akronim**   FASTCGI Process Manager**) to niezwykle popularna alternatywna implementacja PHP (procesor hipertext). PHP-FPM zawiera wiele funkcji, które mogą okazać się korzystne dla stron internetowych, które często odbierają ruch w dużych ilościach.
Aby najpierw zainstalować PHP 7.0 i 7.2, musisz dodać repozytorium PHP do serwera, aby zainstalować wiele wersji PHP. Możesz dodać repozytorium PHP Ondrej za pomocą następującego polecenia:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Po aktualizacji repozytorium zainstaluj PHP 7.0, PHP 7.2 i PHP-FPM za pomocą następującego polecenia:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Po zakończeniu instalacji sprawdź status PHP-FPM za pomocą następującego polecenia:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Utwórz wiele stron internetowych z php   {#Web}
Domyślna strona jest umieszczona w/var/www/html/lokalizacja. Możesz umieścić tutaj swoje strony statyczne lub używać wirtualnego hosta i umieścić go w innej lokalizacji
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Następnie utwórz przykładowy plik index.php dla strony1:
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
Teraz utwórz przykładowy plik index.php dla strony 2:
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
Następnie zmień własność obu stron internetowych na WWW-DATA:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Skonfiguruj Nginx   {#Configure}
Następnie musisz utworzyć wirtualny plik hosta Nginx dla Domena Site1.ContaineRize.com, który używa PHP 7.0. Oraz kolejny dla site2.containerize.com, który używa PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Dodaj następujące wiersze:
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
Teraz utwórz drugi plik dla site2.containerize.com
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
Następnie włącz oba wirtualne pliki hosta za pomocą następującego polecenia:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Wreszcie, uruchom ponownie usługę Nginx i PHP-FPM, aby zastosować wszystkie zmiany konfiguracji:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Wniosek   {#Conclusion}
W tym samouczku badaliśmy wiele wersji PHP na Ubuntu. Nauczyliśmy się instalować Nginx. Następnie zbadaliśmy, jak skonfigurować dwie różne strony internetowe w Nginx. I wreszcie nauczyliśmy się skonfigurować dwie różne witryny z różnymi wersjami PHP z Nginx. Mam nadzieję, że samouczek ci pomógł.

## Badać
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][6]
  * [Jak używać Nginx jako równoważenia obciążenia do swojej aplikacji][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
