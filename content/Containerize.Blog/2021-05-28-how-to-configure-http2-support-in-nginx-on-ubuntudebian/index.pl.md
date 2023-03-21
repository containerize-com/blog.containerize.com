---
title: "Jak skonfigurować obsługę HTTP/2 w Nginx na Ubuntu/Debian" 
seoTitle: "Jak skonfigurować obsługę HTTP/2 w Nginx na Ubuntu/Debian" 
description: "HTTP2 lub H2 jest protokołem binarnym i ulepszoną wersją protokołu HTTP, który umożliwia zwiększenie prędkości stron witryny po niniejszej obsłudze HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 jest solidnym multipleksowanym protokołem do poprawy prędkości i bezpieczeństwa obciążenia strony. W tym samouczku dowiemy się, jak konfigurować Nginx z obsługą HTTP/2." 
url: /pl/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 to solidny multipleksowany protokół poprawy prędkości i bezpieczeństwa obciążenia strony. W tym samouczku dowiemy się, jak konfigurować Nginx z obsługą HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx Włącz obsługę HTTP2 w Ubuntu i Debian">}}


## **Przegląd**
Nginx to szybki i niezawodny serwer WWW open source. Zyskał popularność ze względu na niski ślad pamięci, równoważenie obciążenia, wysoką skalowalność, buforowanie, wsparcie dla większości protokołów i odwrotne proxying. Porozmawiajmy teraz o tym, jak Nginx włączy protokół HTTP2.
Jednym z protokołów obsługiwanych przez Nginx jest HTTP/2, który został opublikowany w maju 2015 r. Główną zaletą HTTP/2 jest duża prędkość transferu witryn bogatych w treść, zmniejsza obciążenie na serwerze WWW i może inicjować wiele równoległych żądań W jednym połączeniu TCP. Nginx Enable HTTP2 to ulepszona wersja protokołu HTTP. Zanim zaczniemy, będziemy potrzebować kilku Ubuntu lub Debian Server z certyfikatem SSL. W tym samouczku poprowadzimy Cię krok po kroku, jak Nginx włączyć HTTP2 na Ubuntu.
  * Aktualizacja pakietów i instalacja Nginx
  * Włączanie obsługi HTTP/2
  * Dodanie nazwy serwera
  * Dodanie certyfikatów SSL
  * Usuwanie szyfrów
  * Przekieruj wszystkie żądania HTTP do HTTPS
  * Uruchom ponownie Nginx
  * Wniosek

## Krok 1: Aktualizacja pakietów i instalacja Nginx   {#4597}
Pierwszym krokiem jest aktualizacja i zaktualizowanie repozytoriów w systemie pakowania Apt. Korzystanie z aktualizacji pobiera najnowsze pakiety wersji, a aktualizacja zainstaluje najnowszą wersję pakietów na liście. Uruchom poniższe polecenie APT, aby zaktualizować i zaktualizować pakiety.
```
sudo apt-get update && apt-get upgrade
```
Następnym krokiem jest zainstalowanie najnowszej wersji pakietu Nginx. Obsługa protokołu HTTP/2 wprowadzono w wersji 1.9.5 i nowszej Nginx. Dlatego będziemy musieli zainstalować najnowszą wersję pakietu Nginx. Uruchom poniższe polecenie instalacji apt, aby zainstalować pakiety Nginx:
```
sudo apt-get install nginx
```
Zostaniesz poproszony o potwierdzenie procesu instalacji krok po kroku. Wybierz opcję Tak i zakończ proces instalacji. Po zakończeniu procesu instalacji następnym krokiem jest sprawdzenie wersji pakietu, czy zainstalowaliśmy odpowiednią wersję, czy nie. Możesz sprawdzić wersję serwera WWW Nginx, wpisując polecenie:
```
sudo nginx -v
```
Wyjście powyższego polecenia sprawdzania wersji powinno być podobne do następujących:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Krok 2: Włączanie obsługi HTTP/2   {#F4D2}
Po zainstalowaniu pakietu Nginx musimy włączyć HTTP2 Nginx. Użytkownik musi zmienić port odsłuchowy z 80 na 443. Otwórzmy plik konfiguracyjny Nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Możesz zobaczyć domyślnie wartość Nginx ustawiona na słuchanie to port 80.
posłuchaj 80 default_server;
Posłuchaj [::]: 80 default_server;
Jak widać, istnieją dwie różne zmienne słuchania. Pierwsza zmienna słuchania dotyczy wszystkich IPv4Connections, a druga dotyczy połączeń IPv6. Włączymy szyfrowanie obu zmiennych. Zmień numer portu słuchania na 443 i dodaj połączenie SSL dla protokołu HTTPS, jak pokazano poniżej:
Posłuchaj 443 SSL http2 default_server;
Posłuchaj [::]: 443 SSL http2 default_server;
Zauważ, że oprócz SSL dodaliśmy również HTTP2. Nginx jest teraz w stanie korzystać z przeglądarek obsługujących protokół HTTP/2.

## Krok 3: Dodanie nazwy serwera   {#A745}
Następnym krokiem jest zmiana serwera \ _name, aby nazwa serwera była powiązana z nazwą domeny. Użytkownik musi tylko zmienić nazwę serwera w pliku konfiguracyjnym. Znajdź pozycję serwera \ _Name w pliku konfiguracyjnym i zmień _ na swoją domenę, jak to:
```
server_name example.com www.example.com;
```
Zapisz plik konfiguracyjny serwera, edytując w edytorze tekstu. Możesz sprawdzić konfigurację Nginx pod kątem błędów składniowych za pomocą polecenia:
```
sudo nginx -t
```
Jeśli składnia jest wolna od błędów, zobaczysz poniższe wyjście:
nginx: Składnia konfiguracyjna /etc/nginx/nginx.conf jest OK
nginx: Plik konfiguracyjny /etc/nginx/nginx.conf Test jest skuteczny

## Krok 4: Dodanie certyfikatów SSL   {#37C0}
Następnym krokiem jest włączenie konfiguracji Nginx HTTPS do użycia certyfikatu SSL. Możesz wygenerować certyfikat podpisany lub [zainstalować bezpłatny certyfikat Let's Encrypt][1]. Jeśli nie masz certyfikatu SSL, postępuj zgodnie z tym samouczkiem. Dodaj certyfikaty SSL w katalogu konfiguracji Nginx podobne do:
```
sudo mkdir /etc/nginx/ssl
```
Skopiuj swój certyfikat i klucz prywatny do tej lokalizacji, a także zastąp przykład.com swoją rzeczywistą nazwą domeny:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Teraz ponownie otwórz plik konfiguracji serwera Nginx. Dodaj i skonfiguruj nowe linie SSL w bloku serwera Nginx z lokalizacją certyfikatów, aby włączyć konfigurację Nginx SSL:
sudo nano /etc/nginx/sites-avaailable/domain-name.com
SSL_Certificate /etc/nginx/ssl/example.com.crt;
SSL_Certificate_Key /etc/nginx/ssl/example.com.key;
Zapisz plik plik nginx i wyjdź z edytora tekstu.

## Krok 5: Usuwanie szyfrów   {#D291}
Cipher jest algorytmem stosowanym w kryptografii do szyfrowania danych i deszyfrowania. Sypita szyfrów to kilka algorytmów kryptograficznych używanych do zabezpieczenia połączeń sieciowych. HTTP/2 ma ogromną czarną listę niepewnych szyfrów, które należy usunąć. Tutaj użyjemy popularnego zestawu szyfrów, zatwierdzonego przez internetowych gigantów Cloudflare.
Otwórz następujący plik konfiguracyjny Nginx /etc/nginx/nginx.conf i dodaj poniższe wiersze tuż po **SSL \ _prefer \ _Server_ciphers ON.**  Linie zawierają listę najnowszych szyfrów, które rozumieją HTTP2.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Możesz ustawić gzip na off i dodać proxy \ _max \ _temp \ _file \ _Size 0; Aby uniknąć ERR \ _HTTP2 \ _PROTOCOL_ERROR NIGENX Błąd.

## Krok 6: Przekieruj wszystkie żądania HTTP do HTTPS   {#B387}
Teraz powinniśmy powiedzieć Nginx HTTP2 Proxy, co powinna obsługiwać treść za pośrednictwem HTTPS tylko wtedy, gdy serwer otrzyma żądanie HTTP. Wreszcie, ignorując skomentowane wiersze, Twój plik konfiguracyjny Nginx /etc/nginx/sites-available/domain-name.com powinien wyglądać podobnie do tego:
serwer {Słuchaj 443 SSL http2 default_server; Posłuchaj [: ; } ssl_certificate /etc/nginx/ssl/example.com.crt ;ssl_certificate_key /etc/nginx/ssl/example.com.key ;ssl_dhparam /etc/nginx/ssl/dhparam.pem; }server {Słuchaj 80; Posłuchaj [::]: 80; server_name example.com; zwróć 301 https: // $ server_name $ request_uri;}
Zapisz plik /etc/nginx/sites-available/domain-name.com, a następnie wyjdź. Sprawdź konfiguracje błędów składniowych:
```
sudo nginx -t
```

## Krok 7: Uruchom ponownie nginx   {#e687}
Aby zastosować wszystkie zmiany, uruchom ponownie Nginx HTTP2 Reverse Server proxy i sprawdź status konfiguracji.
sudo systemctl restart nginx
SUDO Systemctl Status nginx

## **Wniosek:** {#4a1a}
Gratulacje, z powodzeniem nauczyłeś się skonfigurować obsługę Nginx Config HTTP2 na serwerze Ubuntu. Twoje ustawienia Nginx HTTP2 obsługują teraz strony HTTP/2, a także wyczyściły różnicę między protokołami HTTP/1 i HTTP/2. Jeśli nadal napotykasz problemy konfiguracyjne, daj nam znać w sekcji komentarzy.
Czy masz jakieś pytania dotyczące protokołu multipleksowanego HTTP2? _, Proszę [skontaktuj się][2].

## Badać
Możesz także polubić poniżej artykuły:
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][3]
  * [Jak][3][Zainstaluj i zabezpiecz phpMyAdmin z Nginx na Ubuntu][4]
  * [Jak skonfigurować Nginx z pasażerem na serwerze produkcyjnym AWS][5]
  * [Zabezpiecz i szyfruj Nginx za pomocą Let's Encrypt on Ubuntu 20.04][1]
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
