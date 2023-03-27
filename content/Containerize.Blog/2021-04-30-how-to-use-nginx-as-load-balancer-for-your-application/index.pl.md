---
title: "Jak używać Nginx jako balansu obciążenia do aplikacji" 
seoTitle: "Jak używać Nginx jako balansu obciążenia do aplikacji" 
description: "Nginx to popularny serwer WWW na open source. Jest dobrze znany z wysokiej wydajności i skalowalności. W tym samouczku nauczymy się używać Nginx jako równoważenia obciążenia" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx jest popularny ze względu na wysoką wydajność i skalowalność. Jest to serwer WWW nr 1. W tym samouczku nauczymy się używać Nginx jako równoważenia obciążenia." 
url: /pl/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx jest popularny ze względu na wysoką wydajność i skalowalność. Jest to serwer WWW nr 1. W tym samouczku nauczymy się używać Nginx jako równoważenia obciążenia.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Jak używać Nginx jako balansu obciążenia">}}

Nowoczesne strony internetowe o wysokim ruchu obsługują setki tysięcy, aw niektórych przypadkach miliony jednoczesnych żądań od klientów lub klientów i zwracają prawidłowe dane, obrazy, wideo lub aplikacje, wszystkie w szybki i niezawodny sposób. Aby zaspokoić potrzeby tych wysokich woluminów i moc obliczeniową, potrzebujesz więcej serwerów. Przy większej liczbie serwerów potrzebujesz sposobu na zrównoważenie ruchu między tymi serwerami. W tym samouczku na blogu zbadamy, czym jest moduł równoważenia obciążenia i jak możemy używać Nginx jako równoważenia obciążenia.
Aby skonfigurować równoważenie obciążenia Nginx jako warunek wstępny, musisz mieć co najmniej dwa hosty z zainstalowanym i skonfigurowanym oprogramowaniem serwera WWW, aby zobaczyć zalety równoważenia obciążenia za pomocą Nginx. Jeśli masz już jeden uruchomiony host internetowy, powiel go, tworząc niestandardowy obraz i wdrażaj go na nowym serwerze WWW. Dowiedzmy się więc, jak skonfigurować konfigurację równoważenia obciążenia nginx krok po kroku dla swoich serwerów chmur.!
* **[Nginx Web Server][1]** 
* **[Ramalancer obciążenia][2]** 
* **[konfiguracja nginx jako równowaga obciążenia (okrągły robin)][3]** 
* **[O różnych dyrektyw upstream][4]** 
* **[wniosek][5]** 

## Serwer WWW Nginx {#webserver}

Nginx to wysokowydajny serwer WWW, open source. Oprócz funkcji serwera HTTP, Nginx może również funkcjonować jako serwer proxy dla wiadomości e -mail (IMAP, POP3 i SMTP) oraz odwrotnego proxy oraz do ładowania bilansu Nginx dla serwerów HTTP, TCP i UDP. Poprawia wydajność, niezawodność i bezpieczeństwo twoich aplikacji. Jest popularny ze względu na bogaty zestaw funkcji, prostą konfigurację i niskie zużycie zasobów.
Jak działa Nginx? Nginx jest powszechnie używany jako równoważenie obciążenia proxy Nginx Reverse jako pojedynczy punkt wejścia do rozproszonej aplikacji internetowej pracującej na wielu oddzielnych serwerach. Wykorzystuje asynchroniczne podejście oparte na zdarzeniach, aby oferować niskie zużycie pamięci i wysoką współbieżność. Możesz przeczytać więcej o Nginx [tutaj][6].

## Balancer obciążenia {#loadbalancer}

Równoważenie obciążenia to proces dystrybucji ruchu sieciowego na wielu serwerach. A „oprogramowanie” lub „sprzęt”, który wykonuje ten proces dystrybucji, nazywa się Balancer Load. Balancer obciążenia jest jak „policjant drogowy” stojący przed serwerami i żądania klienta routingu na wszystkich serwerach. Zapewnia, że ​​aplikacja pozostaje działająca, nawet jeśli jeden z serwerów spadnie.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx jako równowaga obciążenia">}}

Podążają główne funkcje równoważenia obciążenia:
  * Dystrybucja żądań klienta lub obciążenia sieci
  * Zapewnia wysoką dostępność i niezawodność, wysyłając żądania tylko do serwerów, które są online
  * Zapewnia elastyczność w celu dodawania lub odejmowania serwerów w miarę zapotrzebowania

## Konfiguracja nginx jako balansu obciążenia {#setup}

Przed skonfigurowaniem okrągłego bilansowania obciążenia Robin powinieneś zainstalować Nginx na swoim serwerze. Możesz go szybko zainstalować z apt-get:
```
sudo apt-get install nginx
```
Aby skonfigurować równowagę obciążenia okrągłego-robin, będziemy musieli użyć modułu Nginx w górę rzeki. Zaktualizujemy konfigurację modułu równoważenia obciążenia Nginx do ustawień Nginx. Otwórzmy konfigurację Twojej witryny. Ze względu na ten przykład używam domyślnego pliku konfiguracyjnego
```
sudo vi /etc/nginx/sites-available/default
```
Musimy dodać konfigurację równoważenia obciążenia do pliku, aby skonfigurować równoważenie obciążenia z Nginx.
Najpierw musimy dołączyć moduł upstream dla równoważenia obciążenia NGINX, który wygląda tak:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Użyj tego mądrza na górze jako punktu końcowego proxy w bloku serwera:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Uruchom ponownie Nginx
```
sudo service nginx restart
```
Dopóki masz wszystkie serwery, powinieneś teraz stwierdzić, że równowaga obciążenia open source Nginx zacznie równo rozpowszechniać odwiedzających na serwerach. Ten równy rozkład nazywa się równoważeniem obciążenia Round-Robin.

## Dyrektywy w górę {#upstream}

W naszym ostatnim przykładzie wykorzystaliśmy prosty moduł upstream do równoważenia obciążenia okrągłego, aby równo rozpowszechniać ruch między serwerami. Istnieje jednak wiele powodów, dla których może to nie być najbardziej wydajny sposób pracy z ruchem ruchu. Istnieje kilka dyrektyw, które możemy wykorzystać do skuteczniejszego kierowania odwiedzającymi witrynę.

### Waga
Jednym ze sposobów zacząć przydzielić użytkowników z większą precyzją serwerów, jest przydzielenie określonej wagi do niektórych maszyn. Nginx pozwala nam przypisać liczbę określającą odsetek ruchu, który powinien być skierowany do każdego serwera.
Konfiguracja zrównoważona obciążeniem, która zawierała wagę serwera, może wyglądać tak:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Domyślna waga wynosi 1. Przy wadze 2, backend2. Przykład zostanie wysłany dwa razy większy ruch niż Backend1, a backend3, o wadze 4, poradzi sobie z dwukrotnie większym ruchem niż Backend2 i cztery razy więcej niż backend 1.

### Hash
Hash IP pozwala serwerom reagować na klientów zgodnie z ich adresem IP, odsyłając odwiedzającym z powrotem do tych samych VPS za każdym razem, gdy odwiedzają ten serwer). Jeśli wiadomo, że serwer jest nieaktywny, powinien być oznaczony jako w dół. Wszystkie IP, które miały kierować się na serwer Down, są następnie kierowane do alternatywnego.
Poniższa konfiguracja zawiera przykład:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max zawodzi
Zgodnie z domyślnymi ustawieniami Round-Robin, równoważenie ładowania aplikacji Nginx będzie nadal wysyłać dane do wirtualnych serwerów prywatnych, nawet jeśli serwery nie odpowiadają. Max Fails może automatycznie zapobiegać temu, relacjonując niereagujące serwery bezoperacyjne przez określony czas.
Istnieją dwa czynniki związane z maksymalnym niepowodzeniem: Max \ _ Fails i Fall \ _Timeout. Max Fails odnosi się do maksymalnej liczby nieudanych prób połączenia się z serwerem, który powinien wystąpić, zanim zostanie uznany za nieaktywny. Fall_timeout określa długość tego serwera jest uważane za nieoperacyjne. Po upływie czasu nowe próby dotarcia do serwera rozpoczną się ponownie. Domyślna wartość limitu czasu wynosi 10 sekund.
Przykładowa konfiguracja może wyglądać tak:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Wniosek: {#conclusion}

W tym samouczku równoważenia obciążenia NGINX dowiedzieliśmy się o NGNIX, równoważeniu obciążenia i skonfigurowaniu równoważenia obciążenia Nginx, aby rozprowadzić ruch na wielu serwerach. Badaliśmy również różne algorytmy równoważenia obciążenia, takie jak okrągłe robiny, skrót i maksymalnie niepowodzenie. Jeśli uruchamiasz aplikację z dużą ilością i musisz dystrybuować obciążenie na różnych serwerach, Nginx jest jedną z najlepszych wyborów dla Ciebie. A co najważniejsze, jest to w 100% bezpłatny i open source Server.
_Your może dołączyć do nas na [Twitter][7], [LinkedIn][8] i naszej strony [Facebook][9]. Jaki inny potężny równoważenie obciążenia w celu poprawy dostępności zasobów i wydajności serwerów __ Czy używasz? . Jeśli masz jakieś pytania lub opinie, proszę [skontaktuj się][10].

## Badać
Możesz znaleźć bardziej powiązane poniżej artykuły
  * [Jak zabezpieczyć i zaszyfrować Nginx za pomocą Let's Encrypt on Ubuntu 20.04][11]
  * [Apache vs nginx - szczegółowe porównanie w 2021 r.][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
