---
title: "Jak zaimplementować buforowanie przeglądarki z konfiguracją Nginx" 
seoTitle: "Jak zaimplementować buforowanie przeglądarki z konfiguracją Nginx" 
description: "Im szybciej ładuje się witryna, tym bardziej prawdopodobne jest, że odwiedzający zostanie. W tym samouczku zaimplementujemy buforowanie przeglądarki z konfiguracją Nginx." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Im szybciej ładuje się witryna, tym bardziej prawdopodobne jest, że odwiedzający zostanie. W tym artykule kieruje Cię, jak wdrożyć buforowanie przeglądarki z konfiguracją Nginx." 
url: /pl/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Im szybciej ładuje witrynę, tym bardziej prawdopodobne jest, że odwiedzający zostanie. W tym artykule kieruje Cię, jak wdrożyć buforowanie przeglądarki z konfiguracją Nginx.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Jak zaimplementować buforowanie Browsr z konfiguracją Nginx">}}

W naszej serii samouczków Nginx omówiliśmy [jak używać Nginx jako równoważenia obciążenia][1], [Konfiguruj Nginx jako odwrotną proxy][2], [Użyj wielu wersji PHP z Nginx][3] i [Konwertuj Htaccess Rewrite Zasady Nginx przepisują dyrektywy][4]. W dzisiejszym artykule omówimy bardzo ważny temat, który pomaga firmom poprawić wrażenia użytkowników poprzez wykorzystanie buforowania przeglądarki. W tym samouczku poprowadzimy Cię, jak zaimplementować buforowanie przeglądarki z konfiguracją Nginx za pomocą modułu nagłówka Nginx. Zacznijmy!
  * **[Buforing przeglądarki dźwigni][5]**
  *[**Moduł nagłówka Nginx** ][6]
  *[**e-teg i if-none-mecz** ][7]
  *[**Buforowanie przeglądarki dźwigni z konfiguracją Nginx** ][8]
  *[**Wniosek** ][9]

## przeglądarka dźwignia buforowanie przeglądarki   {#pobudzenie przeglądarki}
Im szybciej ładuje się witryna, tym bardziej prawdopodobne jest, że odwiedzający pozostanie na stronie internetowej. Witryny z dużą ilością obrazów i interaktywnych treści są ładowane w tle, dzięki czemu strona otwiera złożone zadanie. Polega na żądaniu wielu różnych plików od serwera jeden po drugim. Minimalizacja ilości tych żądań to jeden ze sposobów przyspieszenia Twojej witryny.
Jedną z metod poprawy wydajności witryny jest „przeglądacza buforowanie przeglądarki”. Buforowanie przeglądarki odgrywa ogromną rolę w mechanizmie pamięci podręcznej zwiększania prędkości strony. Pliki statyczne, takie jak CSS, JS, JPEG, PNG itp., Które są używane na stronie internetowej, można zapisać na komputerze dla odwiedzających w celu uzyskania przyszłego dostępu. Ilekroć odwiedzający napotyka nową stronę w Twojej witrynie, powyższe pliki można uzyskać z komputera odwiedzającego zamiast z dostarczonego serwera, co ogromnie zwiększy prędkość ładowania strony.

Moduł nagłówka ## Nginx  {#moduł nagłówka}
Moduł _ngx \ _http \ _headers_module_ umożliwia dodanie pól nagłówka „_expires_” i „_Cache-Control_” i dowolnych pól do nagłówka odpowiedzi. Możemy użyć modułu nagłówka do ustawienia tych nagłówków HTTP. Moduł nagłówka jest podstawowym modułem nginx, co oznacza, że ​​nie należy go instalować osobno.
Przykładowa konfiguracja wygląda tak:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag i if-none-mecz   {#ETAGE}
Załóżmy, że mamy niektóre pliki testowe z różnymi rozszerzeniami, np. Test.html, test.jpg, test.css i test.js. Domyślnie wszystkie pliki będą miały takie samo domyślne zachowanie buforowania. Aby sprawdzić nagłówki odpowiedzi pliku za pomocą następującego polecenia, aby żądać pliku z naszego lokalnego serwera Nginx i pokazuje nagłówki odpowiedzi:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
W drugim do ostatniej linii znajdziesz nagłówek _etag_, który zawiera unikalny identyfikator tej konkretnej wersji żądanego pliku. Jeśli wielokrotnie wykonasz ostatnie polecenie _CURL_, znajdziesz dokładnie taką samą wartość ETAG.
Podczas korzystania z przeglądarki internetowej wartość _etag_ jest przechowywana i wysyłana z powrotem na serwer z nagłówkiem żądania _if-None-Match_, gdy użytkownik odświeża stronę lub ten sam plik jest wymagany przez przeglądarkę z dowolnego powodu.
Możemy to symulować w wierszu polecenia za pomocą następującego polecenia.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Zwróć uwagę na unikalny identyfikator, musi pasować do wartości odpowiedzi, którą otrzymaliśmy z poprzedniego _CURL_ Call. Tym razem odpowiedź będzie inna:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Tym razem Nginx odpowie na **304 nie zmodyfikowane** . Nie wyśle ​​ponownie pliku przez sieć; Zamiast tego poinformuje przeglądarkę, że może ponownie wykorzystać plik, który już pobrał lokalnie. Jest to przydatne, ponieważ zmniejsza ruch sieciowy. Ale przeglądarka nadal musi wykonać wywołanie HTTP, aby uzyskać odpowiedź z serwera, co wciąż zajmuje trochę czasu.

## Buforing przeglądarki dźwigni z konfiguracją nginx   {#nginx-configuration}
W naszym poprzednim przykładzie wyjaśniliśmy, w jaki sposób e-Tag i IF-None-Match pomagają zmniejszyć ruch sieciowy. Ale problem z „etag” polega na tym, że przeglądarka zawsze wysyła żądanie do serwera z pytaniem, czy może ponownie wykorzystać jego plik podręczny. I to wciąż wymaga czasu, aby złożyć wniosek i otrzymać odpowiedź.
Teraz za pomocą modułu nagłówka Nginx zmusimy przeglądarkę do buforowania niektórych plików lokalnie bez wyraźnego pytania serwera.
Dodaj następujące 3 wiersze w swoim pliku konfiguracyjnym Nginx, aby pamięć statyczną pamięci podręcznej w Nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
Pierwszy wiersz instruuje Nginx, aby buforuje zawartość w przeglądarce klienta przez 30 dni (30d). Po tym okresie każde nowe żądanie od użytkownika spowoduje ponowne weryfikację pamięci podręcznej i aktualizację z przeglądarki klienta.
Możesz umieścić powyższe linie w blokach _Location_, _Server_ lub _http_.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Kiedy umieścisz je w bloku lokalizacji, tylko treść obsługiwana przez tę lokalizację zostanie buforowana. W powyższym przypadku tylko żądania / statyczne / zostaną buforowane.
Jeśli chcesz buforować określone typy plików, możesz to zrobić za pomocą bloku lokalizacji.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
W powyższym przykładzie buforujemy różne typy plików, takie jak JS, JPG, CSS itp.
Podobnie możesz umieścić konfigurację pamięci podręcznej w bloku _server_ przed dowolnym blokiem lokalizacji. W takim przypadku wszystkie odpowiedzi z tego serwera zostaną buforowane. Lub możesz umieścić go w bloku _http_, w tym przypadku wszystkie żądania serwera obsługiwane przez plik konfiguracyjny Nginx zostaną buforowane.

## Wniosek   {#Conclusion}
Moduł nagłówków Nginx może być używany do dodania dowolnych nagłówków do odpowiedzi, ale prawidłowe ustawienie nagłówków sterowania pamięcią podręczną jest jedną z najbardziej przydatnych aplikacji. Pomaga poprawić wydajność witryny, szczególnie dla użytkowników w sieciach o wyższym opóźnieniu, takich jak sieci operatorów komórkowych. W tym samouczku nauczyliśmy się wykorzystać buforowanie przeglądarki z konfiguracją Nginx. Mam nadzieję, że pomoże ci to poprawić wrażenia użytkownika w Twojej witrynie.

## Badać
  * [Jak zainstalować wiele wersji PHP z Nginx na Ubuntu][3]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
