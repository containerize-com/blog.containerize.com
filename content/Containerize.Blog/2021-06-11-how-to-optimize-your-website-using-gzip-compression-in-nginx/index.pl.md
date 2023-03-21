---
title: "Jak zoptymalizować witrynę za pomocą kompresji GZIP w Nginx" 
seoTitle: "Jak zoptymalizować witrynę za pomocą kompresji GZIP w Nginx" 
description: "W tym artykule omówimy metodę optymalizacji prędkości transferu witryny poprzez zmniejszenie rozmiarów plików poprzez kompresję GZIP w Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "W tym samouczku prowadzi Cię, jak zoptymalizować wydajność witryny i szybko ją sprawić, zmniejszając rozmiary plików za pomocą kompresji GZIP w Nginx." 
url: /pl/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## W tym samouczku prowadzi Cię do optymalizacji wydajności swojej witryny i szybko, zmniejszając rozmiary plików za pomocą kompresji GZIP w Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Jak włączyć kompresję GZIP w Nginx">}}

Ten artykuł jest kontynuacją naszej serii samouczków na temat Nginx. Do tej pory omówiliśmy, jak używać Nginx jako równoważenia obciążenia, jak używać Nginx jako odwrotnego proxy. A teraz ten samouczek obejmuje kolejne wymagające pytanie „Jak zoptymalizować witrynę za pomocą kompresji GZIP w Nginx”. W tym samouczku poprowadzimy Cię krok po kroku, jak włączyć kompresję GZIP w Nginx. Więc zacznijmy!
  * [Optymalizacja strony internetowej z kompresją][1]
  * [Co to jest kompresja GZIP?][2]
  * [Jak działa kompresja GZIP?][3]
  * [Włącz kompresję GZIP w Nginx][4]
  * [Sprawdź kompresję GZIP][5]
  * [Wniosek][6]

## Optymalizacja witryny z kompresją   {#Optimize}
Wydajność strony internetowej zależy od wielu czynników. Jednym z czynników, które zależy częściowo, jest rozmiar wszystkich plików, które przeglądarka użytkownika musi pobrać z serwera. Zmniejszenie lub kompresowanie rozmiaru przesyłanych plików może zwiększyć ładowanie witryny dla użytkownika. Może to również zmniejszyć rachunek za twoją stronę na wypadek, gdybyś zapłacił za korzystanie z przepustowości w połączeniach z pomiaru. Dlatego kompresja może odgrywać bardzo istotną rolę w optymalizacji witryny.
Ponieważ Google i inne wyszukiwarki rozważają doświadczenie użytkownika witryny (UX) za kluczowy czynnik w ich algorytmach rankingowych. Ważniejsze stało się ulepszenie i optymalizację Twojej witryny pod kątem najwyższych ocen. Jednym z najważniejszych czynników, na które należy zwrócić uwagę, są prędkość strony i czas ładowania. A najszybszym i najłatwiejszym sposobem na poprawę szybkości i wydajności witryny jest umożliwienie kompresji GZIP na Twojej stronie.

## Co to jest kompresja GZIP?   {#co-gzip}
GZIP to format pliku i aplikacja do plik ** używana do kompresji i dekompresji plików. Serwery internetowe lub inne oprogramowanie używają kompresji GZIP do kompresji plików danych, zanim zostaną wysłane do przeglądarki użytkowników. Skraca to czas pobierania pliku, co sprawia, że ​​Twoja witryna jest szybsza. Wszystkie nowoczesne przeglądarki obsługują kompresję GZIP.
Należy również pamiętać, że kompresja GZIP musi być włączona na serwerze WWW, zanim możesz włączyć kompresję plików i folderów. Wkrótce zobaczymy, jak włączyć kompresję GZIP w Nginx.

## Jak działa kompresja GZIP?   {#how-gzip}
GZIP, najpopularniejsza metoda kompresji, jest używana przez serwery i przeglądarki do kompresji i dekompresji treści, ponieważ jest przesyłany przez Internet. Jest używany głównie w plikach kodu i tekstu, GZIP może zmniejszyć rozmiar plików JavaScript, CSS i HTML nawet o 90%.
Domyślnie kompresja GZIP nie kompresuje obrazów ani filmów. Właśnie dlatego większość narzędzi do testowania prędkości witryny, takich jak Google Pagesspeed Insights, zdecydowanie zaleca włączenie kompresji GZIP.
Gdy serwer WWW otrzyma żądanie strony internetowej, WebServer sprawdza nagłówek żądania, aby sprawdzić, czy przeglądarka obsługuje GZIP. Jeśli tak, serwer generuje znacznik dla strony przed zastosowaniem GZIP. GZIP przekształca znaczniki HTML w skompresowane dane, które są następnie dostarczane do użytkownika końcowego. Gdy użytkownik końcowy odbiera skompresowane dane, ich przeglądarka ich dekompresuje.

## Włącz kompresję GZIP w nginx   {#enable-gzip}
Aby zmienić konfigurację Nginx GZIP, otwórz główny plik konfiguracyjny Nginx w „_vi_” lub ulubiony edytor tekstu:
```
sudo vi /etc/nginx/nginx.conf
```
Znajdź sekcję Ustawienia _GZIP_, która wygląda tak:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Jak widać, GZIP jest domyślnie włączony z _ GZIP ON; _, ale są inne skomentowane ustawienia GZIP.
Możemy włączyć ustawienie _GZIP_TYPES_, aby włączyć kompresję w typach plików, które chcemy kompresować. Na przykład
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Teraz uruchom ponownie Nginx, aby przyjąć nowe ustawienia.

## Sprawdź kompresję GZIP   {#verify}
Teraz, gdy włączyliśmy kompresję GZIP, sprawdźmy to.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Odpowiedź pozostanie taka sama, ponieważ kompresja została już włączona dla tego fileType:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Wniosek   {#Conclusion}
W tym artykule dowiedzieliśmy się, że możesz użyć modułu Nginx GZIP, aby przyspieszyć transfery plików. Pokazaliśmy ci krok po kroku, jak włączyć kompresję GZIP w Nginx za pomocą modułu GZIP. Oficjalna dokumentacja [modułu GZIP][7] zawiera listę innych dyrektyw konfiguracji, na które możesz chcieć rzucić okiem. Mam nadzieję, że ten samouczek pomoże Ci zoptymalizować wydajność i szybkość witryny.

## Badać
  * [Jak zainstalować wiele wersji PHP z Nginx na Ubuntu][8]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
