---
title: "Jak przekonwertować reguły przepisywania htaccess na dyrektywy Nginx" 
seoTitle: "Jak przekonwertować reguły przepisywania htaccess na dyrektywy Nginx" 
description: "Nginx nie obsługuje reguł przepisywania .htaccess, więc programiści muszą przekształcić te reguły na dyrektywy przepisywania Nginx. Nauczmy się wykonywać tę konwersję." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx nie obsługuje reguł przepisywania HTACCSS, a programiści muszą przekształcić te reguły na dyrektywy przepisywania Nginx. Dowiedzmy się, jak wykonać tę konwersję." 
url: /pl/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx nie obsługuje reguł przepisywania HTACCSS, a programiści muszą przekonwertować te reguły na dyrektywy Nginx. Dowiedzmy się, jak wykonać tę konwersję.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Konwertuj .htaccess przepisuj reguły na dyrektywy Nginx">}}

W naszym ostatnim samouczku dowiedzieliśmy się [jak instalować wiele wersji PHP z Nginx na Ubuntu][1]. Apache jest jednym z najpopularniejszych serwisów internetowych, ale ostatnio Nginx stał się konkurentem Apache. Ale Nginx nie obsługuje zasad przepisywania HTACCSS. Tak więc w tym artykule dowiemy się, jak konwertować reguły przepisywania Htaccess na Nginx przepisanie dyrektyw. Zacznijmy!
*  **[NGINX przepisuj reguły][2]**  
* [  **. HTACCESS REWRITE RUDY**  ][3]
* [  **Konwertuj .htaccess przepisuj reguły na dyrektywy NGINX**  ][4]
* [  **Wniosek**  ][5]

## Nginx przepisuje zasady {#nginx}

Przepisanie reguł zmienia część lub całość URL w żądaniu klienta, zwykle w celu poinformowania klientów, że zasób, o którym proszą, znajduje się teraz w innej lokalizacji lub do kontrolowania przepływu przetwarzania w Nginx. Na przykład, aby przekazać żądania do serwera aplikacji, gdy treść musi być generowana dynamicznie. Dyrektywa TRY_FILES jest często używana w tym celu.
Dwie dyrektywy dotyczące przepisu Nginx Nginx to _return_ i _rewrite_, a dyrektywa _TRY_FILES jest przydatnym sposobem kierowania żądań do serwerów aplikacji.
Dyrektywa zwrotna jest prostsza z dwóch dyrektyw ogólnych. Zatrzymasz powrót w kontekście serwera lub lokalizacji.
Na przykład oto bardzo prosty przykład, który przekierowuje klientów do nowej nazwy domeny za pomocą dyrektywy _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Ale co, jeśli musisz dokonać skomplikowanych rozróżnień między adresami URL, przechwytywania elementów w oryginalnym adresie URL lub zmiana lub dodanie elementów na ścieżce? W takich przypadkach możesz użyć dyrektywy _rewrite_.
Oto przykładowa reguła przepisywania Nginx, która korzysta z dyrektywy przepisywania. Dopasowuje adresy URL, które zaczynają się od sznurka /utworów, a następnie zawiera katalog /media /lub /audio /katalog gdzieś później na ścieżce. Zastępuje te elementy / mp3 / i dodaje odpowiednie rozszerzenie pliku, .mp3 lub .ra. Zmienne 1 USD i 2 USD przechwytują elementy ścieżki, które się nie zmieniają. Jako przykład/Pobierz/cdn-West/Media/File1 staje się /Download/cdn-west/mp3/file1.mp3. Jeśli istnieje rozszerzenie nazwy pliku (takiego jak .flv), wyrażenie ją usuwa i zastępuje .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess przepisuje zasady {#apache}

Plik .htaccess kontroluje szereg sposobów, w jakie witryna można uzyskać, zablokować i przekierować. Robi to przy użyciu serii jednego lub więcej reguł przepisywania .htaccess. Te przepisania są wykonywane przez moduł Mod_rewrite Apache.
mod_rewrite zapewnia sposób dynamicznego modyfikacji przychodzących żądań URL opartych na regułach wyrażenia regularnego. Pozwala to mapować dowolne adresy URL na wewnętrzną strukturę adresu URL w dowolny sposób. Służy to również do wyczyszczenia zewnętrznych adresów URL, a następnie mapowania ich na brzydko wyglądające wewnętrzne adresy URL.
Na przykład następujące .htaccess przepisanie reguły przekreśla adres URL bez WWW do adresu URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Konwertuj .htaccess przepisuj reguły na dyrektywy Nginx {#convert}

Jak pokazaliśmy w naszym przykładzie powyżej przekierowania adresu URL bez WWW do adresu URL WWW, przekonwertujmy tę samą regułę .htaccess Rewrite w dyrektywę Nginx Rewrite.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Więc tutaj utworzyliśmy dwa osobne bloki _server_, jeden dla _yourdomain.com_, a drugi dla _www.yourdomain.com_. Oraz w bloku _server_ dla _yourdomain.com_ Używamy dyrektywy _return_, aby przekierować URL bez WWW do URL WWW.
To samo przekierowanie, które przeprowadziliśmy z dyrektywą powrotną, można również wykonać za pomocą dyrektywy przepisywania, ale nie jest zalecane.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Ze względu na większą klarowność przekonwertujmy WordPress Htaccess reguły na dyrektywę Nginx TRY_FILES.
[WordPress.org dystrybuuje][6] Plik podstawowy  **. HTACCESS**  Plik z następującymi. HTACCESS przepisuje zasady, które umożliwiają ładne permalinks:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Oto przekonwertowana dyrektywa Nginx TRY_FILES
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Wniosek {#conclusion}

W tym samouczku zbadaliśmy reguły .htaccess Apache Rewrite i sposób, w jaki możemy przekonwertować te .htaccess przepisanie reguł na dyrektywy przepisywania Nginx. Ponadto badaliśmy różne dyrektywy Nginx, które można wykorzystać do przepisywania adresów URL. Podaliśmy również przykładowe reguły zarówno dla Nginx, jak i Apache. Mam nadzieję, że samouczek jest dla ciebie pomocny.

## Badać
  * [Jak zainstalować wiele wersji PHP z Nginx na Ubuntu][1]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
