---
title: "Jak zabezpieczyć Nginx za pomocą Let's Szyfrowanie na Ubuntu 20.04" 
seoTitle: "Jak zabezpieczyć Nginx za pomocą Let's Szyfrowanie na Ubuntu 20.04" 
description: "Jak skonfigurować, szyfrować i zabezpieczyć Nginx za pomocą Let's Encrypt on Ubuntu. Zaszypujmy klienta, aby generować certyfikaty, aby automatycznie skonfigurować Nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Strony internetowe obejmują szyfrowanie SSL/TLS dla swojej domeny, aby przyciągnąć odwiedzających. W tym artykule wyjaśniono użycie narzędzia CERTBOT do uzyskania certyfikatów TLS/SSL dla Nginx." 
url: /pl/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

Strony ## obejmują szyfrowanie SSL/TLS dla swojej domeny, aby przyciągnąć odwiedzających. W tym artykule wyjaśniono użycie narzędzia CERTBOT do uzyskania certyfikatów TLS/SSL dla Nginx.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Bezpieczne nginx z Let's Szyfrowanie na Ubuntu">}}


##**Przegląd**
Każda strona internetowa, która ma na celu przyciągnięcie odwiedzających, musi zawierać szyfrowanie TLS/SSL do swojej domeny. Bezpłatne certyfikaty SSL zapewniają bezpieczne połączenie między serwerem WWW lubią szyfrować i zabezpieczyć przeglądarki nginx i aplikacji. Let's Encrypt to bezpłatny, zautomatyzowany i otwarty organ certyfikatu, który umożliwia skonfigurowanie takiej ochrony dla Nginx SSL LetsEncrypt. Szyfrowajmy bezpłatne certyfikaty SSL są zaufane przez wszystkie główne przeglądarki i ważne przez następne 90 dni od daty wydania.
Ten post na blogu wyjaśnia najprostszy sposób szyfrowania i zabezpieczenia serwera WWW Nginx na Ubuntu 20.04 / 18.04 poprzez uzyskiwanie certyfikatów Nginx HTTPS LetsCrypt za pomocą narzędzia Nginx CertBot i skonfigurowanie certyfikatów, aby go automatycznie odnowić. Rozpocznijmy i konfigurujmy konfiguracje Ubuntu Nginx.
  * Zależności i warunki wstępne
  * Instalowanie narzędzia CertBot
  * Potwierdzanie konfiguracji Nginx
  * Zezwalanie na HTTPS przez zaporę
  * Uzyskanie certyfikatu SSL
  * Wniosek

## Pierwsze rzeczy Pierwsze: zależności i warunki wstępne   {#Prerequistecites}
Aby śledzić ten artykuł, potrzebujesz następujących zależności i warunków wstępnych do instalacji LetSeCrrypt Ubuntu Nginx Utilities:
  * Użytkownik nie-root lub root z obsługą SUDO na maszynach lokalnych/zdalnych.
  * System z Ubuntu 20.04 lub Ubuntu 18.04
  * Dostęp do terminalu wiersza poleceń
  * Uprawnienia sudo lub root na maszynach lokalnych/zdalnych
  * Zainstalowany i skonfigurowany nginx
  * Zarejestrowana nazwa domeny wskazująca na publiczne IP
  * Blok serwerowy skonfigurowany dla tej nazwy domeny
  * Zapora jest skonfigurowana do akceptowania połączeń na portach 80 i 443.

## Krok 1-Instalowanie certbot   {#krok 1---- instalowanie-Certbot}
Pierwszym krokiem do zabezpieczenia Nginx i szyfrowania Nginx za pomocą Let's Encrypt jest zainstalowanie w pełni funkcjonalnego i łatwego w użyciu pakietu Nginx CertBot w celu uzyskania i odnowienia certyfikatów SSL SSL na serwerze. Aby to zrobić, zacznij od otwarcia terminalu na Ubuntu i aktualizacji lokalnego repozytorium. Wpisz Y i wprowadź, jeśli zostanie wyświetlony.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Teraz sprawdźmy niektóre z bezpiecznych ustawień konfiguracji Nginx.

## Krok 2-Potwierdzenie konfiguracji Nginx   {#krok 2---- Potwierdzenie-Nginx-39-S-Configuation}
Jak wyjaśniono w sekcji Zależności i Warunki wstępne, powinieneś już mieć zarejestrowaną domenę, a CertBot musi być w stanie znaleźć poprawny blok serwera Nginx dla tej domeny, aby automatycznie skonfigurować SSL. Jako przykład ten post na blogu korzysta z blogu domeny
Aby potwierdzić, otwórz plik konfiguracyjny swojej domeny za pomocą Nano lub ulubionego edytora tekstu:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Znajdź istniejącą linię dyrektywy Server_Name w pliku /etc/nginx/sites-available/blog.containeryze.com. To powinno wyglądać tak:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Teraz sprawdź składnię plików konfiguracyjnych Nginx i ponownie załaduj serwer Nginx, aby załadować nowe ustawienia konfiguracji:
```
sudo nginx -t
sudo systemctl reload nginx

```
Narzędzie CertBot może teraz znaleźć poprawną dyrektywę blokową serwera Nginx, aby zabezpieczyć Nginx i automatycznie ją aktualizować. W następnym kroku zaktualizujmy zaporę, aby umożliwić ruch HTTPS.

## Krok 3-Zezwalanie na HTTPS przez zaporę   {#krok-3 -—- Zezwalanie na https-through-firewall}
Zgodnie z zaleceniami w tym artykule należy dostosować ustawienia, aby umożliwić ruch HTTPS. Aby upewnić się, że zapora jest włączona i aktywna, uruchom poniższe polecenie:
```
sudo ufw status

```
Dane wyjściowe powinny informować, że UFW jest aktywny i podać listę ustalonych reguł. Pokazuje tylko, że ruch HTTP jest dozwolony na serwerze WWW. Aby umożliwić zaszyfrowany ruch, możesz dodać profil Nginx HTTPS lub użyć Nginx pełnej i usunąć istniejącą regułę Nginx HTTP. Zezwalaj na ruch Nginx HTTPS, wpisując polecenie:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Sprawdź regułę HTTPS, która umożliwia ruch HTTPS, wpisując polecenie statusu UFW:
```
sudo ufw status

```
Następnie uruchommy Certbot i pobrajmy nasze certyfikaty.

## Krok 4-Uzyskanie certyfikatu SSL   {#Krok-4---Otrzymanie-certyfikat}}
Wtyczka Nginx dla CertBot zajmie się rekonfiguracją Nginx i przeładuje jego konfigurację w razie potrzeby. Dlatego tylko musisz generować certyfikaty za pomocą wtyczki Nginx, wykonując następujące polecenie:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Jeśli jest to twój pierwszy raz uruchomiony narzędzie CertBot, CertBot prosi Cię o skonfigurowanie ustawień HTTPS. Zostaniesz poproszony o wprowadzenie adresu e -mail i uzgodnienie warunków usługi. Po HIT ENTER konfiguracja zostanie zaktualizowana, a Nginx przeładuje, aby odebrać nowe ustawienia. Wreszcie, CertBot wyświetli się z komunikatem informującym, że certyfikat został pomyślnie wygenerowany i gdzie przechowywane są twoje certyfikaty.
Twoje certyfikaty są pobierane, instalowane i ładowane za pomocą konfiguracji certyfikatu Nginx SSL. Spróbuj ponownie załadować witrynę za pomocą https: // i zauważ wskaźnik bezpieczeństwa przeglądarki. Powinno to wskazywać, że strona jest odpowiednio zabezpieczona, zwykle z ikoną blokady. Jeśli przetestujesz serwer za pomocą testu SSL Labs Server, otrzymasz ocenę A dla Nginx i LetsEncrypt.
Zakończmy, testując proces odnowy.

## Krok 5-Weryfikacja CertBot Auto-Renewal   {#KROP-5---Weryfikacja-CertBot-Auto-Renewal}
Ponieważ zaszyfrowajmy certyfikaty wygaśnięcia co dziewięćdziesiąt (90) dni, a Nginx SSL LetsCrypt Zachęć użytkowników konfigurowania i automatycznego przedłużenia zadania Cron. Najpierw otwórz plik konfiguracyjny Crontab dla bieżącego użytkownika:
```
sudo crontab -e
```
Dodaj zadanie CRON, które uruchamia polecenie CertBot, CertBot Renew Nginx odnawia certyfikat, jeśli wykryje, że certyfikat wygasa w ciągu 30 dni. Zaplanuj go codziennie w określonym czasie, np. 05:00 rano
```
sudo certbot renew --dry-run

```
Zadanie CRON powinno również zawierać atrybut -przykazania, jak w powyższym poleceniu. Instruuje to certyfikat Nginx Renew SSL, aby nie zawierał żadnego wyjścia po wykonaniu zadania. Włącz automatyczne przedłużenie certyfikatu. Po dodaniu zadania CRON zapisz zmiany i wyjdź z pliku.

## Wniosek   {#Conclusion}
W tym artykule dowiedzieliśmy się, jak instalować Nginx instalację litsecrrypt SSL certyfikat. Pobraliśmy certyfikaty SSL dla Twojej domeny i skonfigurowaliśmy Nginx do korzystania z tych certyfikatów. Ponadto powinieneś włączyć CertBot na automatyczne odnawianie certyfikatów dla SSL Nginx LetsEncrypt. W naszych nadchodzących samouczkach omówimy bardziej interesujące tematy na temat zabezpieczenia serwera WWW za pomocą standardowej technologii bezpieczeństwa, która umożliwia zaszyfrowaną komunikację między przeglądarką internetową a serwerem WWW.
_Your może dołączyć do nas na [Twitter][1], [LinkedIn][2] i naszą stronę [Facebook][3]. Jakiego protokołu kryptograficznego używasz do zapewnienia bezpieczeństwa komunikacji w sieci komputerowej?. Jeśli masz jakieś pytania, proszę [skontaktuj się][4].

## Badać
Może znaleźć następujące odpowiednie linki do monitorowania wydajności serwera i zapewnienia jego niezawodności i bezpieczeństwa:
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][5]
  * [Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu][6]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][7]
  * [Ustaw nginx z pasażerem na serwerze produkcyjnym AWS][8]
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
