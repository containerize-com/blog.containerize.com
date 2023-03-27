---
title: "Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian" 
seoTitle: "Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian" 
description: "Apache Reverse Proxy Configuration krok po kroku umożliwia uruchomienie jednego lub więcej serwerów back end za serwerem proxy z mod_proxy na Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy pozwala uruchomić jeden lub więcej serwerów zaplecza za serwerem proxy. Oto jak skonfigurować proxy Apache Reverse w systemie Ubuntu/Debian." 
url: /pl/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy pozwala uruchomić jeden lub więcej serwerów zaplecza za serwerem proxy. Oto jak skonfigurować proxy Apache Reverse w systemie Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Zainstaluj i skonfiguruj proxy Apache Reverse">}}


##  **Przegląd**  
Apache Reverse Proxy pozwala całego ruchu i przekazać go uruchomić jeden lub więcej serwerów zaplecza lub kontenerów za serwerem proxy, bez publicznego ujawnienia. Back-end Server może być innym Apache2 lub Open Source HTTP Server, taki jak Nginx. Apache2 HTTP Server jest jednym z najpopularniejszych serwerów internetowych open source, który jest używany dzisiaj.
Istnieje wiele powodów instalacji i konfigurowania serwera proxy. Na przykład odwrotny proxy może pomóc w dodaniu bezpieczeństwa, w celu równoważenia obciążenia, ograniczenia dostępu do niektórych lokalizacji, aby zapobiec atakom i wielu innych. W tym artykule wyjaśniono, jak zainstalować i skonfigurować konfigurację proxy Apache Reverse Krok po kroku dla serwera HTTPS na Ubuntu/Debian:
  * Instalowanie Apache2
  * Skonfiguruj Apache2
  * Włącz moduły proxy
  * Włącz SSL
  * Uruchom ponownie Apache2
  * Wniosek

## Krok 1: Zainstaluj Apache2
Instalowanie Apache2 jest bardzo proste i łatwe do uruchomienia. Aby wykonać instalacje, uruchom poniższe polecenia po prostu:
Aktualizacja sudo apt-get
sudo apt-get instaluj apache2
{{_LINE_25_}}
Po zainstalowaniu Apache2 w systemie użyj następujących poleceń SystemCTL w wersji Debian Linux lub Ubuntu Linux Ubuntu, aby zatrzymać, uruchomić, włączyć i ponownie uruchomić Apache2, aby zawsze uruchomić ponowne uruchomienie, gdy serwer się uruchomi.
Sudo Systemctl Stop Apache2.Service
sudo systemctl start apache2.service
sudo systemctl włącz apache2.service
sudo systemctl restart apache2.Service
{{_LINE_31_}}
Możesz wyświetlić status serwera WWW za pomocą następującego polecenia:
SUDO SYSTEMCTL Status Apache2.Service
{{_LINE_34_}}
Aby sprawdzić konfigurację Apache2, otwórz przeglądarkę i przejrzyj się do nazwy hosta serwera lub adresu IP systemu, a należy zobaczyć domyślną stronę testową Apache2, jak pokazano poniżej. Kiedy to zobaczysz, Apache2 działa zgodnie z oczekiwaniami. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Zainstaluj i skonfiguruj proxy proxy Apache Reverse dla Ubuntu">}}


## Krok 2: Skonfiguruj Apache2 jako odwrotną proxy
Apache2 jest pomyślnie zainstalowany i gotowy do użycia. Możesz teraz skonfigurować Apache2, aby działał jako odwrotny proxy Ubuntu Apache2. Moduł proxy Apache2  **ProxYpass** i  **Proxypassreverse**  Funkcja zapewnia odwrotną proxy. Aby użyć  **proxypass**  i **proxypassreverse**  , musisz najpierw wiedzieć, gdzie chcesz kierować ruch w witrynie.
Odwrotny serwer proxy Apache2 będzie słuchać całego ruchu w domyślnym porcie HTTP, który jest portem 80 w prostej konfiguracji. Serwer back-end, który obsługuje zawartość witryny, będzie słucha w niestandardowym porcie i najprawdopodobniej jest to port 8080.
W tym artykule na blogu skonfigurujemy Apache2, aby słuchać w porcie 80, a następnie bezpośredni ruch na serwerze zaplecza, który słucha na porcie 8080. Uruchom poniżej polecenie, aby utworzyć plik VirtualHost proxy o nazwie Apache2Proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Następnie dodaj następujący blok kodów w pliku apache2proxy.conf, a następnie zapisz go.
{{_LINE_43_}}
        Servername example.com
        Serveralias www.example.com
        Serveradmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /access.log łącznie
        ProxyRequests
{{_LINE_50_}}
          Zamów odmawianie, pozwól
          Pozwól wszystkim
{{_LINE_53_}}
        ProxYpass/http://127.0.0.1:8080/
        ProxYpassreverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Zamów, pozwól, odmówić
          Pozwól wszystkim
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Apache2proxy.conf Plik zawiera nazwę serwera, a także proxy_pass, w którym ruch będzie kierowany po otrzymaniu przez serwer proxy HTTP.

## Krok 3: Włącz proxy Apache2
Apache2 Web Server jest teraz pomyślnie zainstalowany i konfiguruje. Apache ma wiele dostępnych modułów pakietowych w pakiecie. Moduły te nie są włączone w instalacji Fresh Apache2. Najpierw musimy włączyć moduły, które musimy włączyć wymagany moduł Apache Mod_Proxy i kilka jego modułów dodatkowych do obsługi różnych protokołów sieciowych. Uruchom poniższe polecenia, aby włączyć moduły proxy HTTP.
Sudo a2enmod Proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Teraz włącz witrynę VirtualHost i ponownie uruchom Apache2, aby włączyć ponownie konfigurację modułów Apache2.
sudo a2ensite apache2proxy.conf
sudo systemctl restart apache2.Service
Uruchom wybraną przeglądarkę internetową i przejdź do nazwy hosta serwera, takiej jak example.com. Zostaniesz teraz serwerowy na serwerze Apache2 na domyślnym porcie, tj. 8080.

## Krok 4: Włącz SSL {#block-07b86d83-dca0-4924-b991-206719c342eb}

Jeśli chcesz włączyć moduł SSL odwrotnego Apache Reverse SSL, uruchom poniższe polecenie, aby włączyć APACHE Reverse Proxy HTTPS Proxy Pass:
sudo a2enmod ssl
Zapewni to bezpieczną obsługę HTTP Secure Apache Reverse HTTP HTTP dla serwerów zaplecza.

## Krok 5: Uruchom ponownie Apache2 {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}

Aby wprowadzić te zmiany, uruchom ponownie Apache, uruchamiając poniższe polecenie:
sudo systemctl restart apache2.Service
Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś odwrotny proxy APACHE2 w systemie Linux.

##  **Wniosek:**   {#4a1a}

W tym samouczku zbadaliśmy i omówiliśmy, co to jest serwer proxy i Apache Reverse Proxy Configuration krok po kroku. Nauczyliśmy się również konfiguracji i konfigurowania Apache2 jako odwrotnego proxy w systemie Linux. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy na temat Apache i innych stosów rozwiązań serwera WWW.

## Badać
Możesz także polubić bardziej powiązane artykuły:
  * [Jak][1][Zainstaluj i zabezpiecz phpMyAdmin z Nginx na Ubuntu][2]
  * [Jak skonfigurować Nginx z pasażerem na serwerze produkcyjnym AWS][3]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][4]
  * [Zabezpiecz i szyfruj Nginx z Let's Encrypt on Ubuntu 20.04][5]
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][6]



 [1]: https://blog.containerize.com/web-server-solution-stack/pl/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
 [6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
