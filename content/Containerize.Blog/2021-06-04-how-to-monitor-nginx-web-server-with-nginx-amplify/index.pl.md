---
title: "Jak monitorować serwer WWW Nginx za pomocą Nginx wzmacnia" 
seoTitle: "Jak monitorować serwer WWW Nginx za pomocą Nginx wzmacnia" 
description: "Nginx Amplify to bezpłatny agent monitorujący dla aplikacji Web Server Nginx i aplikacji PHP. Ten artykuł dotyczy sposobu monitorowania serwera WWW Nginx za pomocą Nginx wzmacniających" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Monitoruj aplikacje Nginx, PHP, system operacyjny z Nginx wzmacnia i popraw konfigurację. W tym artykule prowadzi Cię do konfiguracji i skonfigurowania Nginx Amplify." 
url: /pl/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitorowanie aplikacji Nginx, PHP, system operacyjny z Nginx wzmacnia i popraw konfigurację. W tym artykule prowadzi Cię do konfiguracji i skonfigurowania Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Monitoruj serwer WWW Nginx za pomocą Nginx wzmacnia">}}


## Przegląd   {#install}
**Monitorowanie serwera WWW **jest bardzo ważne dla stron internetowych o wysokim ruchu.  **Agent Monitoring**   regularnie rejestruje niezbędne wskaźniki dotyczące serwera WWW. Te krytyczne wskaźniki można wykorzystać do optymalizacji konfiguracji Nginx. Pomoże ci to poprawić wydajność Twojego serwera internetowego i aplikacji.
W tym poście na blogu omówimy następujące sekcje dla **Nginx Monitoring**  Narzędzie open source.
  * [Nginx Web Server][1]
  * [Nginx amplify][2]
  * [Zainstaluj nginx amplify][3]
  * [Monitorowanie wskaźników][4]

## Nginx Web Server   {#nginx}
[Nginx][5] to bezpłatny i open source serwer WWW. Jest to proste, lekkie i łatwe do skonfigurowania niż Apache. Serwer WWW Nginx działa również jako odwrotny proxy, równoważenie obciążenia, proxy poczty i pamięć podręczna HTTP. Działa dla protokołów HTTP, HTTPS, SMTP, POP3 i IMAP. Nginx jest szybkim, niezawodnym i oszczędnym serwerem WWW, który poprawia wydajność twoich aplikacji. Ponadto zyskał popularność i jest obecnie uważany za najpopularniejszy serwer WWW. Ponadto Nginx jest odpowiedni dla każdego rodzaju witryny, w tym witryn i aplikacji o wysokim ruchu. Można go zainstalować i skonfigurować w prawie wszystkich systemach operacyjnych.

### Zainstaluj Nginx
  * Uruchom poniżej polecenia, aby zainstalować serwer WWW Nginx.
```
sudo apt update
sudo apt install nginx
```
  * Po zakończeniu instalacji otwórz przeglądarkę i wpisz „http: // ip \ _of \ _your_server”. Zobaczysz poniższą stronę powitalną.

{{< figure align=center src="images/nginx-home.png" alt="Witamy w Nginx!">}}


## nginx amplify   {#Amplify}
Nginx Amplify to bezpłatne narzędzie monitorujące dla Nginx Open Source, Nginx Plus i PHP-FPM. Jest to narzędzie oparte na SaaS do monitorowania i aplikacji serwera Nginx. Użytkownicy mogą łatwo śledzić zasoby infrastrukturalne, monitorować wydajność i dostosować konfigurację. Daje kompleksowe informacje, które użytkownicy mogą wykorzystywać do optymalizacji konfiguracji serwera WWW i aplikacji. Działa jako agent na serwerze, który hostuje aplikacje Nginx i PHP. Nginx Amplify to lekka, push dzienników i monitorowanie danych w celu wzmocnienia serwerów bez narażania wydajności. Możesz wyświetlić wskaźniki na desce rozdzielczej Amplify. Agent jest dostępny dla wszystkich podstawowych systemów operacyjnych, takich jak Rhel, Centos, Ubuntu, Debian, Fedora i FreeBSD. NGINX Amplify ma trzy główne komponenty, takie jak Agent wzmacniający Nginx, interfejs internetowy Nginx Amplify Web i nginx Amplify Backend.
  ***Nginx wzmacniają agent**  - Działa w monitorowanym systemie. Cała komunikacja jest szyfrowana za pomocą SSL/TLS.
  ***Nginx wzmacniają interfejs internetowy**  - interfejs internetowy pokazuje wskaźniki serwerów internetowych, aplikacji i systemów operacyjnych.
  ***Nginx wzmacniacz backend**  - Jest to kluczowy komponent, który jest zaimplementowany jako SaaS i jest odpowiedzialny za zbieranie wskaźników, utrzymanie bazy danych, uruchamianie silnika analitycznego i zapewnienie podstawowego interfejsu API.

## Zainstaluj nginx amplify   {#Install}
Postępuj poniżej Przewodnik krok po kroku, aby zainstalować Nginx Amplify na Ubuntu.
  * Po pierwsze, musisz utworzyć konto na Nginx [strona internetowa][6].
  * Po zalogowaniu zobaczysz poniżej ekran na stronie Nginx Amplify. Teraz połącz się z serwerem za pośrednictwem SSH i użyj poleceń podanych w poniższych krokach.

{{< figure align=center src="images/amplify-1.png" alt="Zainstaluj nginx amplify">}}

  * Uruchom poniższe polecenie, aby pobrać agenta.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Wykonaj następujące polecenie, aby zainstalować nginx wzmacniając na serwerze. Wymień xxxxx faktycznym klawiszem API. Można go znaleźć na desce rozdzielczej Nginx.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Po zakończeniu instalacji możesz sprawdzić status za pomocą następującego polecenia.
```
$ sudo service amplify-agent status
```
  * Teraz musisz skonfigurować agenta Nginx wzmacniających, aby wyświetlić wskaźniki.

{{< figure align=center src="images/amplify-2-1.png" alt="Konfiguracja monitorowania Nginx">}}

  * Utwórz nowy plik z konfiguracją Stub_Status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Skopiuj poniższy kod do niego i zapisz plik.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Uruchom ponownie serwer WWW Nginx, aby aktywować moduł Stub_Status.
```
$ sudo service nginx restart
```
  * Teraz otwórz plik konfiguracyjny Nginx za pomocą następującego polecenia.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Dodaj do niego poniższy kod i zapisz go.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Uruchom ponownie usługę Nginx, aby zastosować wszystkie zmiany.
```
$ sudo service nginx restart
```
  * Następnie przejdź, aby wzmocnić pulpit nawigacyjny i kliknij przycisk „Zakończ”. Powinieneś zobaczyć następną stronę.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Monitorowanie serwera WWW">}}

  *Możesz zobaczyć statystyki w łatwiejszym i czytelnym formacie, klikając na karcie **przegląd** . Będzie wyglądać jak pokazano poniżej.

{{< figure align=center src="images/amplify-overview.png" alt="Statystyki monitorowania Nginx">}}


## Monitorowanie wskaźników   {#monitoring}
Nginx wzmacniają agent zbiera następujące typy danych:
  ***Metryki Nginx** -Zbiera różne wskaźniki związane z NGINX z plików Stub_Status, Logs i ze stanu procesu.
  ***Metryki systemowe**  - Nginx wzmacnia monitoruje różne wskaźniki systemowe, takie jak użycie procesora, zużycie pamięci, ruch sieciowy i wiele innych.
  ***Metryki PHP-FPM** -Jeśli identyfikuje działający proces główny PHP-FPM, otrzymuje wskaźniki ze stanu puli puli PHP-FPM.
  ***MySQL Metryki**  - Globalny zestaw zmiennych MySQL może być używany przez agenta do zbierania wskaźników.
  ***Nginx Metadata**  - agent gromadzi dane o instancjach Nginx, takich jak dane pakietu, informacje o kompilacji, ścieżka binarna, ustawienia konfiguracji kompilacji i wiele innych.
  ***Metadane systemowe**  - Agent zbiera dane w systemie operacyjnym, w tym nazwa hosta, czas uptaksu, smaku systemu operacyjnego i innych szczegółów.

## Wniosek
Szczegółowo omówiliśmy serwer WWW Nginx i Nginx wzmacniają zaawansowany agent monitorowania. Nginx Amplify jest dość prosty w konfiguracji i konfiguracji. Ponadto przeszliśmy przez które krytyczne wskaźniki Nginx wzmocnienie może śledzić **monitorowanie nginx** . Te ważne wskaźniki można wykorzystać do poprawy konfiguracji serwera WWW i aplikacji Nginx.
Wreszcie [Containerize.com][7] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [STOUNKU SERWOWEGO SERWERY][8] w celu uzyskania najnowszych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Jak używać Nginx jako równoważenia obciążenia do aplikacji][9]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
