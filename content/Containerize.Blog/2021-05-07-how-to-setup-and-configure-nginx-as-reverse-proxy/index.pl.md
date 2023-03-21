---
title: "Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy" 
seoTitle: "Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy" 
description: "Ten samouczek dotyczy konfiguracji i skonfigurowania Nginx jako odwrotnego proxy. NGINX jest uważany za jeden z najpopularniejszych serwerów serwerów WWW z odwrotnością otwartego źródła." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx to serwer WWW open source, który może również działać jako odwrotny proxy. Ten samouczek pomoże Ci dowiedzieć się, jak skonfigurować i skonfigurować Nginx jako odwrotną proxy." 
url: /pl/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx to serwer WWW open source, który może również działać jako odwrotny proxy. Ten samouczek pomoże Ci dowiedzieć się, jak skonfigurować i skonfigurować Nginx jako odwrotną proxy.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Użyj Nginx jako odwrotnego serwera proxy">}}


## Przegląd:
Nginx i Apache to dwa najbardziej **popularne serwery internetowe open source  **często używane z PHP. Odwrotna proxy lub brama działa jako połączenie między klientem a serwerem. Klient i informacje wymieniają ze sobą informacje, aby pracować w sposób ciągły i wydajnie. Najczęstsze odwrotne serweryjnie są**   nginx i apache** i oba można skonfigurować na tej samej maszynie wirtualnej podczas hostowania wielu stron internetowych. Odwrotna proxy chroni serwery internetowe przed atakami, a brama połączenia pojawia się dla klienta jako zwykłego serwera WWW, w którym nie są potrzebne specjalne konfiguracje odwrotnego proxy nginx. Klient wysyła żądanie, podczas gdy odwrotny proxy decyduje, gdzie przekazać żądane informacje, a następnie dostarcza końcowy wynik wyjściowy do klienta.
Po wielu uznaniach za naszą serię o samouczkach Redis otrzymaliśmy wiele próśb o rozpoczęcie serii samouczków Nginx. Tak więc w zeszłym tygodniu zaczęliśmy od samouczka na temat korzystania z [Nginx Reverse Proxy Load Balancer][1] do twoich aplikacji. Ten prosty przykład konfiguracji proxy Nginx Reverse zapewnia wiele niezawodności i korzyści Nginx Reverse Proxy Perxy. Nginx Simple Reverse Proxy jest najbardziej aktywnie używanym serwerem proxy Nginx w Internecie. W tym samouczku  **skonfigurujemy i zbadamy, jak używać Nginx jako odwrotnego proxy**  i jak skonfigurować go jako odwrotne proxy na jednym serwerze. Więc zacznijmy!
  * Co to jest serwer proxy?
  * Przedwucznik vs odwrotny proxy
  * Skonfiguruj odwrotną proxy
  * Jakie są zalety odwrotnego proxy Nginx?
  * Wniosek

## Co to jest serwer proxy?
**Serwer proxy** działa jak brama między tobą a Internetem. Jest to serwer pośredni oddzielający użytkowników końcowych od witryn, które przeglądają. Serwery proxy zapewniają różne poziomy funkcjonalności, bezpieczeństwa i prywatności zgodnie z przypadkiem użycia lub polityki firmy.
Dzięki serwerze proxy ruch internetowy przepływa przez serwer proxy w drodze do żądanego adresu. Następnie żądanie powraca przez ten sam serwer proxy (głównie), a następnie serwer proxy przekazuje dane otrzymane ze strony internetowej do Ciebie.

## do przodu vs do tyłu proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx jako odwrotny serwer proxy">}}

Ogólnie rzecz biorąc, kiedy mówimy o proxy, przez większość czasu mamy na myśli proxy do przodu.  **Proxies do przodu**  świetnie nadają się do unikania ograniczeń krajowych, takich jak wielka zapora Chin. Klient po prostu łączy się z zablokowanymi zasobami za pośrednictwem proxy do przodu. Przedstawione proxy mogą ukryć tożsamość użytkownika, zmieniając adres IP. Zasadniczo Nginx jako proxy napastnika znajduje się między klientem a Internetem, więc serwer końcowy nie jest świadomy rzeczywistego klienta.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx jako odwrotny proxy">}}

**Odwrotne proxy **działają również jako pośredniki, ale siedzą po drugiej stronie połączenia. Odwrotne proxy są doskonałe w ** Balansowanie obciążenia** , optymalizacja sieci i bezpieczeństwo. Odwrotne proxying jest zwykle używane do rozpowszechniania obciążenia między kilkoma serwerami, bezproblemowo wyświetlanie treści z różnych stron internetowych lub przekazanie żądań przetwarzania na serwery aplikacji w stosunku do protokołów innych niż HTTP.

## Skonfiguruj Nginx jako odwrotną proxy:
Gdy Nginx jest żądaniem, wysyła żądanie do określonego serwera serwera, pobiera odpowiedź i odsyła go z powrotem do klienta. Możliwe jest proxy żądania do serwera HTTP lub serwera innego niż HTTP za pomocą określonego protokołu. Obsługiwane protokoły obejmują  **FastCGI, UWSGI, SCGI i Memcached** .
Aby przekazać żądanie do serwera serwera serwera HTTP, **PROXY_PASS  **jest określona w**   Lokalizacja**. Na przykład:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Ta przykładowa konfiguracja Proxy Nginx powoduje przekazanie wszystkich żądań przetworzonych w tej lokalizacji do serwera proxied pod określonym adresem. Ten adres można określić jako nazwę domeny lub adres IP. Adres może również zawierać port:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Możesz nawet przekazać zmodyfikowane lub niestandardowe nagłówki do serwera proxied w Nginx  **proxy \ _set \ _header**  Poniżej w przykładzie.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx wspiera również buforowanie, które pomaga poprawić wydajność. Dzięki włączonym buforowaniu Nginx będzie przechowywać odpowiedź, którą otrzymuje z serwera proxied, o ile klient potrzebuje jej do pobrania.
Zamiast przeglądać wszystkie żądania do jednego serwera, możesz również  **skonfigurować wiele serwerów zaplecza**  i pozwolić niniejszowi niniejsze obciążenie między tymi serwerami serwera. Omówiliśmy to już w naszym samouczku na temat [Nginx Balancing obciążenia][1].

## Jakie są zalety odwrotnego proxy Nginx?
Poniżej znajdują się korzyści z konfigurowania Nginx Reverse Proxy Server:
  *Nginx jest jednym z najpopularniejszych  **serwerów internetowych open source** , który jest również najpopularniejszym narzędziem proxy. Nginx Reverse Proxy Config jest bardzo prosty do wdrożenia, ponieważ zapewnia użytkownikowi wysokiej klasy bezpieczeństwo w stosunku do ataków DDOS i DOS Web Server.
  *Pomaga stworzyć zrównoważone obciążenie między stronami internetowymi i serwerami backend, takimi jak  **Dropbox, Netflix i Zynga** .
  * Zapewnia mechanizm buforowania wolniejszego serwera zaplecza i witryn o wysokim ruchu do konfiguracji wirtualnego hosta proxy Nginx Reverse. Nie wymaga skonfigurowania nowego procesu dla każdego żądania sieci od strony klienta.
  * Działa również jako odwrotny serwer proxy dla wielu protokołów, takich jak HTTP, HTTPS, TCP, UDP, SMTP, IMAP i POP3 itd.
  *Nginx może  **obsługiwać ponad 10000 połączeń**  z niskim śladem pamięci i może obsługiwać wiele serwerów sieciowych na jednym adresie IP.
  * Pomaga również w buforowaniu treści i wykonywania szyfrowania SSL w celu obniżenia ładowania z serwera hosta. Nginx jest jednym z najlepszych serwerów sieciowych do poprawy wydajności treści statycznej poprzez kompresję jej i zwiększając czas ładowania.
  * Jest doskonałym narzędziem dla wielu serwerów i może być również przydatne do różnych zadań, takich jak zachowanie anonimowego serwera.

## Wniosek:
W tym samouczku proxy Nginx Reverse **zbadaliśmy, jaki jest serwer proxy Nginx i konfigurujemy proxy Nginx Reverse. Różnica między do przodu vs do tyłu serwer proxy nginx. Na przykład dowiedzieliśmy się również, jak skonfigurować Nginx jako odwrotną proxy. Teraz pełne rozumiesz, jak zainstalować ** Nginx Reverse Proxy Configuration krok po kroku** . Powyższy samouczek pomaga zacząć od konfiguracji odwrotnej proxy. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy na temat Nginx.
_ Jaki jest twój ulubiony serwer _ Reverse Proxy_, który jest łatwy, dynamiczny i pełen funkcjonalny?. Czy masz jakieś pytania dotyczące wiodących_ Źródło Źródło _reverse Prox__y,  **Malancer dla aplikacji opartych na HTTP i TCP** ? Proszę o [skontaktuj się][2].

## Badać
Możesz znaleźć bardziej powiązane poniżej artykuły
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][3]
  * [Bezpieczne nginx z Let's Szyfrowanie na Ubuntu 20.04][4]
  * [Jak używać Nginx jako równoważenia obciążenia do aplikacji][1]
  * [Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu][5]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][6]
  * [Zainstaluj wiele wersji PHP z Nginx na Ubuntu][7]
  * [Ustaw nginx z pasażerem na serwerze produkcyjnym AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
