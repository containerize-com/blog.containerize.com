---
title: "Jak włączyć kompresję GZIP w WordPress | GZip WordPress" 
seoTitle: "Jak włączyć kompresję GZIP w WordPress | GZip WordPress" 
description: "Czy chcesz umożliwić kompresję GZIP w WordPress, aby przyspieszyć swoją witrynę? W tym poście na blogu dowiemy się, jak włączyć kompresję w WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Szybkość strony i czas obciążenia są kluczowymi czynnikami lepszego rankingu w wyszukiwarkach. Kompresja GZIP może sprawić, że tak się stało i zapewnić przewagę konkurencyjną." 
url: /pl/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## czasy prędkości i ładowania strony są kluczowymi czynnikami dla lepszego rankingu w wyszukiwarkach. Kompresja GZIP może sprawić, że tak się stało i zapewnić przewagę konkurencyjną.

{{< figure align=center src="images/Asset-1.png" alt="Włącz kompresję GZIP">}}


## Przegląd
Ponieważ Google i inne wyszukiwarki rozważają doświadczenie użytkownika witryny (UX) za kluczowy czynnik w ich algorytmach rankingowych. Ważniejsze stało się ulepszenie i optymalizację Twojej witryny pod kątem najwyższych ocen. Jednym z najważniejszych czynników, na które należy zwrócić uwagę, są prędkość strony i czas ładowania. A najszybszym i najłatwiejszym sposobem na poprawę prędkości i wydajności witryny jest umożliwienie kompresji GZIP na Twojej stronie. Istnieje szansa, że ​​Twój host automatycznie umożliwi ci kompresję GZIP. Jeśli nie, musisz sam wykonać to kluczowe zadanie.
W tym artykule pokażemy dokładnie, jak łatwo włączyć kompresję GZIP w WordPress. Zacznijmy!
* [**Czym jest kompresja GZIP**?][1]
* [**Jak działa kompresja GZIP?**][2]
* **[Jak sprawdzić, czy kompresja GZIP jest włączona?][3]**
* **[Włącz kompresję GZIP w WordPress][4]**
* **[wniosek][5]**

## Co to jest kompresja GZIP?   {#Co}
GZIP to format pliku**i aplikacja**używana do kompresji i dekompresji plików. Serwery internetowe lub inne oprogramowanie używają kompresji GZIP do kompresji plików danych, zanim zostaną wysłane do przeglądarki użytkowników. Skraca to czas pobierania pliku, co sprawia, że ​​Twoja witryna jest szybsza. Wszystkie nowoczesne przeglądarki obsługują kompresję GZIP.
Należy również pamiętać, że kompresja GZIP musi być włączona na serwerze WWW, zanim możesz włączyć kompresję plików i folderów. Wkrótce zobaczymy, jak sprawdzić, czy Twój serwer WWW ma włączony GZIP.

## Jak działa kompresja GZIP?   {#praca}
GZIP, najpopularniejsza metoda kompresji, jest używana przez serwery i przeglądarki do kompresji i dekompresji treści, ponieważ jest przesyłany przez Internet. Jest używany głównie w plikach kodu i tekstu, GZIP może zmniejszyć rozmiar plików JavaScript, CSS i HTML nawet o 90%. Domyślnie kompresja GZIP nie kompresuje obrazów ani filmów. W tym celu musisz zoptymalizować obrazy dla Internetu w swojej witrynie WordPress. Właśnie dlatego większość narzędzi do testowania prędkości witryny, takich jak Google Pagesspeed Insights, zdecydowanie zaleca włączenie kompresji GZIP.
Gdy serwer WWW otrzyma żądanie strony internetowej, WebServer sprawdza nagłówek żądania, aby sprawdzić, czy przeglądarka obsługuje GZIP. Jeśli tak, serwer generuje znacznik dla strony przed zastosowaniem GZIP. GZIP przekształca znaczniki HTML w skompresowane dane, które są następnie dostarczane do użytkownika końcowego. Gdy użytkownik końcowy odbiera skompresowane dane, ich przeglądarka ich dekompresuje.

##**Jak sprawdzić, czy kompresja GZIP jest włączona?** {#Verify}
Twój host internetowy może domyślnie włączyć kompresję w WordPress. Jednak nie zawsze tak jest. Możesz ustalić, czy masz już włączoną kompresję GZIP za pomocą Chrome 'DevTools.
Otwórz witrynę w chromowanej przeglądarce, a następnie kliknij prawym przyciskiem myszy w dowolnym miejscu na stronie i wybierz**Sprawdź**, aby**otwórz narzędzia programistów**.
Następnie przejdź do karty**Sieć**i kliknij główny adres URL strony internetowej z sekcji „Nazwa”. Wybierz kartę****, a następnie przewiń w dół, aby znaleźć sekcję**nagłówki odpowiedzi**:

{{< figure align=center src="images/gzip-determine.gif" alt="Sprawdź kodowanie treści">}}

Tam zobaczysz, czy kompresja GZIP jest włączona.

## Włącz kompresję GZIP w WordPress   {#enable}
Jeśli ustaliłeś, że**WordPress GZIP Compression nie jest jeszcze włączona**, istnieje wiele metod, których można użyć, aby go uruchomić. Najłatwiejszym sposobem jest użycie niektórych wtyczek WordPress, takich jak [WP Rocket][6], [WP Super Cache][7] lub [W3 Total Cache][8]. Możesz jednak zrobić to ręcznie na poziomie serwera według pliku .htaccess lub aktualizując konfigurację Nginx.

### poprzez edytowanie pliku .htaccess
Jednym z najczęstszych sposobów włączenia kompresji WordPress GZIP jest**edycja pliku _.htaccess_**. Obejmuje to jednak ryzyko złamania czegoś. Jest to poufny plik serwerowy, a jeden zły ruch może spowodować wiele problemów.
Aby zmniejszyć ryzyko, przed wprowadzeniem jakichkolwiek zmian zapisz kopię oryginalnego pliku**. Plik _.htaccess_ powinien znajdować się w folderze**w Twojej witrynie**. Po otworze
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
* * Zapisz plik**i prześlij go na serwer witryny. Po zakończeniu sprawdź, czy GZIP jest włączony za pomocą DevTools Chrome, jak wyjaśniono powyżej.

## Włącz kompresję GZIP w Nginx
Do**Włącz kompresję**, dołącz dyrektywę**gzip**z parametrem ON.**gzip**on; Domyślnie**nginx**kompresuje odpowiedzi tylko z tekstem MIME/HTML. Aby kompresować odpowiedzi z innymi typami MIME, dołącz dyrektywę GZIP_TYPES i wymienić dodatkowe typy.
Możesz włączyć kompresję GZIP w WordPress przez**Otwieranie pliku _nginx.conf_**i dodanie następującego kodu:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Wniosek   {#Conclusion}
To jest koniec tego samouczka WordPress GZIP. Istnieje wiele sposobów optymalizacji witryny w celu szybkości i wydajności. W tym samouczku GZIP WordPress przeszliśmy przez kompresję GZIP, znaczenie kompresji GZIP i jego etapów instalacji. Ponadto istnieje wiele istotnych linków wymienionych w poniższej sekcji „Odkryj”.
Wreszcie [Containerize.com][9] pisze artykuły na temat dalszych produktów open source. Dlatego prosimy o kontakt z kategorią [blogowania][10] w celu regularnych wiadomości i aktualizacji.

## Badać
  * [Matomo][11]
  * [Prawdopodobne][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Jak dokeryzować WordPress z Docker Compose][15]
  * [Jak bezpłatne narzędzia analityki biznesowej pomagają Twojej firmie][16]
  * [Top 5 Open Source Business Intelligence Tools z 2021][17]
  * [Jak zainstalować wtyczkę w WordPress | Forum waniliowe][18]
  * [Zwiększ swoje leady za pomocą bezpłatnej integracji WordPress Civicrm][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
