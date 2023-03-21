---
title: "Samouczek konfiguracji stosu LEMP na Ubuntu 18.04" 
seoTitle: "Samouczek konfiguracji stosu LEMP na Ubuntu 18.04" 
description: "Stos LEMP to stos oprogramowania, który służy do tworzenia i wdrażania aplikacji internetowych. Dowiedz się, jak zainstalować Nginx, MySQL i PHP na Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Zainstaluj & amp; Skonfiguruj stos LEMP do opracowywania i wdrażania aplikacji internetowych. Ten przewodnik pomoże Ci zainstalować Nginx, MySQL i PHP na Ubuntu 18.04." 
url: /pl/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Zainstaluj i skonfiguruj stos LEMP do opracowywania i wdrażania aplikacji internetowych. Ten przewodnik pomoże Ci zainstalować Nginx, MySQL i PHP na Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Zainstaluj stos Lemp na Ubuntu">}}


## Omówienie   {#Prerequistes}
W tym przewodniku zainstalujemy Nginx, MySQL i PHP (LEMP Stack) do tworzenia i wdrażania aplikacji internetowych. Skonfigurujemy również serwer WWW na serwer aplikacji PHP na serwerze Ubuntu 18.04. Obejmiemy następujące sekcje w tym samouczku.
  *[ **Wymagania wstępne** ][1]
  *[ **Co to jest stos Lemp?** ][2]
  *[ **LEMP instalacja** ][3]
  *[ **Wniosek** ][4]

## 
Przed zainstalowaniem oprogramowania należy spełnić następujące wymagania.
  * Serwer z systemem operacyjnym Ubuntu
  *Użytkownik bez korzeni z  **sudo**  uprawnieniami

## Co to jest stos Lemp?   {#Co}
**LEMP Stack** to zbiór oprogramowania, którego można użyć do uruchamiania aplikacji internetowych opartych na PHP. LEMP oznacza Linux, Nginx, MySQL i PHP. Stos LEMP to wariant stosu lampy. Zarówno lampa, jak i LEMP są popularnymi stosami oprogramowania do tworzenia i wdrażania aplikacji internetowych. Istnieje jedna różnica między tymi dwoma stosami oprogramowania. Lampa korzysta z serwera WWW Apache, podczas gdy LEMP Server korzysta z serwera WWW Nginx.

## LEMP Instalacja   {#Installation}
W tej sekcji skupimy się na tym, jak zainstalować Nginx, MySQL i PHP na Ubuntu 18.04. Przede wszystkim musimy zaktualizować pakiety serwera, uruchamiając poniższe polecenie.
```
$ sudo apt update
```

## # Instalowanie serwera WWW Nginx
  *Uruchom poniższe polecenie, aby  **Zainstaluj Nginx na Ubuntu** .
```
$ sudo apt install nginx
```
  * Po zakończeniu instalacji Nginx otwórz przeglądarkę internetową i wpisz adres IP serwera. Pokazuje Ci domyślną stronę NGINX Web Server.

{{< figure align=center src="images/nginx-home-1.png" alt="Domyślna strona serwera WWW Nginx">}}


## # Instalowanie MySQL
Teraz musisz zainstalować serwer bazy danych MySQL do zarządzania danymi aplikacji.
  *Uruchom poniższe polecenie, aby  **Zainstaluj MySQL na Ubuntu** .
```
$ sudo apt install mysql-server
```
  * Aby zabezpieczyć instalację MySQL, uruchom następujące polecenie.
```
$ sudo mysql_secure_installation
```
  *Zostaniesz zapytany albo chcesz włączyć  **wtyczkę hasła**  lub nie. Lepiej nie umożliwić, więc wpisz N i naciśnij Enter, aby przejść do następnego kroku.
  * Następnie zada ci kilka pytań, jak pokazano poniżej. Musisz odpowiedzieć na wszystkie pytania.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Teraz serwer MySQL jest uruchomiony. Możesz to przetestować za pomocą następującego polecenia. Wprowadź hasło do konta root Ubuntu, a nie MySQL na wypadek, gdyby wyświetlał wniosek o hasło.
```
$ sudo mysql
```
  * Wprowadź poniższe polecenie, aby wyjść z MySQL.
```
mysql> exit
```

## # Instalowanie PHP
Omówimy instalację PHP-FPM do przetwarzania PHP. PHP-FPM oznacza FastCGI Process Manager. Serwer WWW Nginx nie ma żadnej wbudowanej funkcjonalności do przetwarzania PHP, więc użyjemy do niego PHP-FPM. Ponadto zainstalujemy PHP-MYSQL do komunikowania PHP z MySQL w celu zarządzania danymi.
  *Uruchom poniższe polecenie, aby  **Zainstaluj PHP na Ubuntu** .
```
$ sudo apt install php-fpm php-mysql
```
  * Teraz skończyłeś z instalacją PHP i całym wymaganym oprogramowaniem LEMP Stack do uruchomienia aplikacji internetowej.
  * W tym kroku utworzymy plik konfiguracyjny Nginx, aby poinformować Nginx, aby użył procesora PHP do treści dynamicznej. Uruchom poniższe polecenie, aby utworzyć plik konfiguracji Nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Skopiuj kod do pliku konfiguracji Nginx i zapisz go.
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
  * Spójrzmy krótko nad tymi dyrektywami i blokiem lokalizacji, dzięki czemu możesz mieć podstawowe informacje.
      * **Słuchaj** : Możesz zdefiniować port dla Nginx. Użyj portu 80 dla HTTP i 443 dla protokołów HTTPS.
      * **root** : Zdefiniuj katalog główny dla swojego projektu. Nginx użyje go do obsługi strony internetowej lub aplikacji internetowej.
      * **indeks** : Zdefiniuj kolejność, w jakiej pliki powinny być obsługiwane. Po wywołaniu pliku indeksu Nginx dostarczy plik index.php.
      * **Server_name** : Zdefiniuj nazwę domeny lub publiczne IP swojego serwera.
      ***Lokalizacja /**: Ten blok lokalizacji ma ** try_block**  Dyrektywa i pasuje do żądanego URI. Nginx zwraca błąd 404, jeśli nie znajdzie żądanego pliku.
      * **Lokalizacja ~ .php $** : Ten blok lokalizacji obsługuje przetwarzanie PHP.
      ***Lokalizacja ~ /.ht**: Nginx nie przetwarza **. Plik Htaccess  **i te bloki lokalizacji sobie z tym poradzą. Nginx nie obsługuje pliku .htaccess, definiując**   odmawiając wszystkich** dyrektywy.
  * Utwórz SymLink dla nowo utworzonego pliku konfiguracji Nginx, aby go włączyć.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Uruchom następujące polecenie, aby przetestować plik konfiguracji Nginx pod kątem błędów składniowych.
```
$ sudo nginx -t
```
  * Uruchom ponownie serwer WWW Nginx.
```
$ sudo systemctl restart nginx
```

## # test PHP
  * Aby upewnić się, że Nginx poprawnie obsługuje strony PHP, utworzymy plik PHP do testowania konfiguracji.
  * Utwórz plik info.php w katalogu głównym serwera WWW Nginx, uruchamiając poniższe polecenie.
```
$ sudo nano /var/www/html/info.php
```
  * Dodaj do niego poniższy kod i zapisz plik.
```
<?php
phpinfo();
```
  * Otwórz przeglądarkę internetową i wpisz nazwę domeny lub serwer publiczny IP, a następnie nazwa pliku PHP, taka jak http: // server \ _ip \ _or_domain/info.php. Zobaczysz poniższą stronę.

{{< figure align=center src="images/info-php.png" alt="Strona informacyjna PHP">}}


## Wniosek   {#Conclusion}
W tym samouczku omówiliśmy, jak zainstalować i skonfigurować stos  **LEMP** . Jak widać, konfigurowanie komponentów stosu oprogramowania jest naprawdę łatwe. Ponadto możesz zacząć tworzyć i obsługiwać aplikacje internetowe w ciągu kilku minut.
Wreszcie [**Containerize.com **][5] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [**  Server Server Solut**][6] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  *[ **Najlepsze rozwiązanie serwera internetowego Open Source Stack** ][7]
  * **[najpopularniejsze cyfrowe narzędzia kryminalistyczne open source][8]**
  * **[Oprogramowanie Top 5 Open Source Message (MQ) w 2021][9]**
  * **[Najlepsze oprogramowanie do przechowywania i udostępniania plików w chmurze open source][10]**
  *[ **Jak zainstalować i zabezpieczyć phpMyAdmin za pomocą Nginx na Ubuntu** ][11]
  *[ **Jak zainstalować wiele wersji PHP z Nginx na Ubuntu** ][12]
  *[ **Top 5 najpopularniejszych licencji open source zatwierdzonych OSI-Zatwierdzone w 2021** ][13]

  
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
