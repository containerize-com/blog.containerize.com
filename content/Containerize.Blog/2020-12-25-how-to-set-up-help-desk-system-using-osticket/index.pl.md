---
title: "Jak skonfigurować oprogramowanie internetowe działu pomocy technicznej za pomocą Osticket" 
seoTitle: "Jak skonfigurować oprogramowanie internetowe działu pomocy technicznej za pomocą Osticket" 
description: "Zarządzaj wszystkimi żądaniami wsparcia w jednym miejscu za pomocą biurka HELS Osticket. Konwertuj zapytania utworzone za pośrednictwem poczty elektronicznej, telefonu i formularzy na bilety internetowe." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Zarządzaj wszystkimi żądaniami wsparcia w jednym miejscu za pomocą Osticket. Konwertuj zapytania utworzone za pośrednictwem wiadomości e-mail, telefonu i formularzy na proste bilety internetowe." 
url: /pl/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Zarządzaj wszystkimi żądaniami wsparcia w jednym miejscu za pomocą Osticket. Konwertuj zapytania utworzone za pośrednictwem wiadomości e-mail, telefonu i formularzy na proste bilety internetowe.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Jak skonfigurować oprogramowanie internetowe działu pomocy technicznej za pomocą Osticket">}}

Osticket to oprogramowanie internetowe open source online. Osticket Helpdesk to bezpłatna alternatywa dla wysokich kosztów i złożonych systemów obsługi klienta. Jest to proste, lekkie, niezawodne, internetowe i łatwe w konfiguracji i użyciu. Najlepsze jest to, że jest całkowicie bezpłatny. W tym samouczku omówimy następujące sekcje:
  * [Co to jest Osticket?][1]
  * [Plusy i wady Osticket][2]
  * [Jak skonfigurować Osticket?][3]
  * [Wniosek][4]

## Co to jest Osticket?   {#osticket}
Osticket zapewnia przyjazny dla użytkownika panel sterowania i komponent raportowania w czasie rzeczywistym. Użytkownicy mogą po prostu zalogować się i tworzyć bilety w kilku łatwych krokach. Mogą tworzyć bilety za pośrednictwem Twojej witryny, e -maila lub telefonu. Przychodzące bilety zostaną następnie zapisane i przypisane agentom. Agenci otrzymają powiadomienia e -mail i odpowiedzą na zapytania, aby pomóc w rozwiązaniu problemów. Klienci i agenci mogą omawiać szczegóły i postęp w sekcji komentarzy. Klienci mogą śledzić swoje żądania i postępy za pośrednictwem wbudowanego portalu klienta dostarczonego przez to internetowe oprogramowanie do pomocy technicznej.

## Plus i wady Osticket   {#Pros}

## ## Pro
  * Osticket jest niezwykle przyjazny dla użytkowników zarówno dla użytkowników końcowych, jak i agentów wsparcia.
  * W pakiecie z bogatymi funkcjami Osticket ma wszystko, czego potrzebujesz, nie będąc zbyt skomplikowanym.
  * Osticket jest całkowicie bezpłatne i oprogramowanie do zarządzania biletami typu open source.
  * Jest lekki, bezpieczny, niezawodny i łatwy w instalacji oprogramowania do zarządzania biurkami.
  * Elastyczne jest uruchamianie na wszystkich popularnych serwerach internetowych, w tym Apache, Nginx, LightTPD i IIS itp.

## ## Cons
  * Osticket nie podaje szczegółów analizy biletów i statystyk, takich jak inne systemy opłat pomocy technicznej.
  * Jego interfejs użytkownika jest bardzo prosty i podstawowy w porównaniu z innymi systemami wsparcia.

## Jak zainstalować Osticket?   {#Jak}
Wykonaj następujące kroki, aby zainstalować Osticket z Nginx na Ubuntu 18.04 LTS.
  * Utwórz nowy katalog Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Pobierz najnowszą konfigurację Osticket przy użyciu następujących poleceń.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Następnie utwórz plik konfiguracyjny z przykładowego pliku za pomocą tych poleceń.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Następnie zmień własność katalogu Web Osticket na użytkownika i grupę „WWW-DATA”.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Następnie utwórz nowy wirtualny plik konfiguracyjny hosta.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Następnie wklej do niego kod konfiguracji.
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
  * Zmień nazwę serwera zgodnie z nazwą domeny. Zapisz plik i wyjdź.
  * Teraz połącz ten wirtualny plik hosta do folderu obsługującego witryny za pomocą następującego polecenia
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Test dla dowolnych błędów konfiguracji za pomocą następującego polecenia
```
nginx -t
```
  * Teraz uruchom ponownie usługę Nginx za pomocą następującego polecenia
```
sudo systemctl restart nginx

```
  * Teraz wprowadź swoją nazwę domeny w dowolnej przeglądarce internetowej, aby rozpocząć kreator instalacji, jak pokazano na poniższym rysunku

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Jak skonfigurować oprogramowanie internetowe działu pomocy technicznej za pomocą Osticket">}}

  * Włącz wymagane rozszerzenia z php.ini i kliknij „Kontynuuj”.
* Wypełnij wszystkie wymagane informacje i kliknij przycisk „**Zainstaluj teraz”**.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Jak skonfigurować oprogramowanie internetowe działu pomocy technicznej za pomocą Osticket">}}

  * W ustawieniach bazy danych wprowadź nazwę DBName, nazwę użytkownika i hasło.
  * Wreszcie kliknij przycisk „Zainstaluj teraz”
  * Po zakończeniu instalacji wyświetli stronę z komunikatem sukcesu.
  * Następnie zmień uprawnienie OST-config.php, aby usunąć dostęp do zapisu, uruchamiając następujące polecenie:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Wniosek   {#Conclusion}
Osticket najlepiej nadaje się dla firm o niskim budżecie lub tych, którzy chcą prostego systemu pomocy technicznej, a nie złożonego. Jest to proste, lekkie, niezawodne, open source i całkowicie bezpłatne oprogramowanie do pomocy internetowej. Co sprawia, że ​​Osticket jest świetną alternatywą dla droższych systemów obsługi klienta. Aby dowiedzieć się więcej o funkcjach Osticket i przewodnikach instalacyjnych, sprawdź następujący samouczek.

## Badać
[Najlepsze oprogramowanie open source i bezpłatne IT Help Desk][5]
[Popularny bezpłatny system pomocy technicznej i systemu obsługi klienta][6]
[Przewodnik dla początkujących o opracowaniu wtyczki Osticket][7]
[Jak wdrożyć wielozadaniowość w Osticket][8]
[Zautomatyzuj system biletów za pomocą WordPress i Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
