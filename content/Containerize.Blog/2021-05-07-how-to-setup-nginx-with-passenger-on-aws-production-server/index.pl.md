---
title: "Jak skonfigurować Nginx z pasażerem na serwerze produkcyjnym AWS" 
seoTitle: "Jak skonfigurować Nginx z pasażerem na serwerze produkcyjnym AWS" 
description: "Ten post na blogu opisuje kroki instalacji Nginx z pasażerem za pośrednictwem systemu operacyjnego Ubuntu 20.04 LTS zgodnie z metodą APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "W tym poście na blogu opisano kroki instalacji Nginx z pasażerem za pośrednictwem systemu operacyjnego Ubuntu 20.04 LTS zgodnie z metodą APT." 
url: /pl/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

##

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Skonfiguruj Nginx z pasażerem na serwerze produkcyjnym AWS">}}


## **Przegląd** :
Musisz zainstalować i skonfigurować **nginx z Passenger na serwerze AWS Production** przed wdrożeniem aplikacji na serwerze produkcyjnym.
**Open Source Phusion Passenger** Zapewnia wiele opcji dostosowywania i funkcji. Pasażer niektóre funkcje służą do poprawy charakterystyki wydajności aplikacji. Niektóre z obsługi aplikacji lub obsługi połączeń itp. Potrzebne są dwie opcje konfiguracyjne dla pasażera, aby skonfigurować w Nginx, nazwany pasażerem \ _Enabled i pasażer \ _root. Ten proces instalacji automatycznie konfiguruje obie te opcje.
W tym artykule na blogu omówimy niektóre podstawowe etapy konfiguracji dla instalacji serwera aplikacji Web w systemie operacyjnym Ubuntu po **APT Method** . Będziesz mógł wdrażać i administrować aplikacjami internetowymi napisanymi w Node.js, Python i Ruby po przeczytaniu i przestrzeganiu poniższego przewodnika.
* **Co to jest nginx i pasażer?** 
* **Zainstaluj pakiety Nginx i pasażerki** 
* **Włącz moduł pasażera nginx i uruchom ponownie nginx** 
* **W sprawdzeniu instalacji** 
* **Aktualizacje systemu i pasażerów** 
* **Najlepsze serwery internetowe open source** 
  * **Wniosek** 

## 1. Co to jest nginx i pasażer? {#step-4:-update-regularly}

**[Co to jest serwer Nginx?][1] **Nginx to bezpłatne i open source oprogramowanie do serwera internetowego do serwowania internetowego jako odwrotny proxy, http obciążenia, strumieniowanie multimediów, pamięć podręczna HTTP i serwis e-mail dla IMAP, POP3 i SMTP. Jest wysoce skalowalny, zaprojektowany dla maksymalnej wydajności i stabilności. Nginx to wysokowydajny asynchroniczny, niezmienny i oparty na zdarzenia serwer WWW, który umożliwia przetwarzanie wielu żądań klientów jednocześnie. Został napisany przez Igor Sysoeva, opublikowanego w 2004 r. Zgodnie z warunkami licencji BSD z 2 klauzulami.** Nginx działa 2,5 razy szybciej**niż Apache i zużywa mniej pamięci zgodnie z testem porównawczym.
**[Co to jest pasażer?][2] **Phusion Passenger znany również jako mod \ _rails i mod \ _rack, to bezpłatny serwer aplikacji WWW i serwer aplikacji WWW. Został zaprojektowany tak, aby był szybki, solidny, bogaty w funkcje i lekki, który integruje się z Apache i Nginx. Poprawia także bezpieczeństwo, niezawodność i skalowalność aplikacji. Pozwala administratorom uzyskać wgląd w operacje aplikacji internetowych, wydajność serwera. Serwer aplikacji pasażerskich działa i automatycznie zarządza aplikacjami internetowymi. Może również** obsługiwać wiele aplikacji**jednocześnie być wieloma dziesiątkami i samodzielnymi. Może obsługiwać żądania HTTP, zarządza procesami i zasobami oraz umożliwia zadania administracyjne, monitorowanie i diagnozę problemów. Phusion Passenger to bezpłatny serwer aplikacji z obsługą wdrażania i administrowania Meteor, Ruby on Rails Nginx Passenger, JavaScript, Python i Node.js.

## 2. Zainstaluj pakiety Nginx i pasażerki: {#step-1:-install-passenger-packages}

Teraz nadszedł czas, aby zainstalować pasażera i nginx. Będziesz mógł łatwo wdrożyć jeden z popularnych serwerów internetowych po tym przewodniku. Poniżej wymienione polecenia zainstalują Pasażer i Nginx za pośrednictwem repozytorium Phusion APT. Jeśli już zainstalowałeś Nginx, te polecenia uaktualnią Nginx do wersji Phusion z pasażerem skompilowanym w:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Włącz moduł pasażera Nginx i ponownie uruchom Nginx: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

EDIT /ETC/nginx/nginx.conf i Uzkształcenie obejmują /etc/nginx/passenger.conf;. Na przykład możesz to zobaczyć:
```
# include /etc/nginx/passenger.conf;
```
Usuń znaki „#”, tak:
```
include /etc/nginx/passenger.conf;
```
Jeśli nie widzisz skomentowanej wersji include /etc/nginx/passenger.conf; Wewnątrz nginx.conf musisz sam to wstawić. Włóż go do /etc/nginx/nginx.conf wewnątrz bloku HTTP.
http {
    dołącz /etc/nginx/passenger.conf;
    ...
}
Po zakończeniu tego kroku **Uruchom ponownie nginx** :
```
$ sudo service nginx restart
```

## 4. Walidź instalacje: {#step-3:-check-installation}

Po instalacji prosimy o sprawdzenie instalacji w terminalu, uruchamiając polecenie `sudo/usr/bin/passenger-config validate-install`:
```
sudo /usr/bin/passenger-config validate-install
```
Wszystkie czeki powinny minąć. Jeśli którekolwiek z kontroli nie przejdą, postępuj zgodnie z sugestiami na ekranie.
Na koniec sprawdź, czy Nginx rozpoczął procesy podstawowe pasażera. Uruchom `sudo/usr/sbin/pasażer-pamięć-stats`. Powinieneś zobaczyć procesy Nginx, a także procesy pasażerskie. Na przykład jak poniżej:
```
sudo /usr/sbin/passenger-memory-stats
```
Jeśli nie widzisz żadnych procesów Nginx ani procesów pasażerskich, prawdopodobnie masz problem z problemem instalacyjnym lub problemem konfiguracji. Zapoznaj się z [Przewodnikiem rozwiązywania problemów][3].

## 5. Aktualizacje systemu i pasażerów: {#step-4:-update-regularly}

Aktualizacje Nginx, aktualizacje pasażerów i aktualizacje systemu są regularnie dostarczane za pośrednictwem **Apt Pakiet Manager** . Powinieneś regularnie uruchamiać następujące polecenie, aby być na bieżąco:
Aktualizacja sudo apt-get
Sudo apt-get Aktualizacja
Po aktualizacji nie musisz ponownie uruchomić sieci lub aplikacji, a także nie musisz modyfikować żadnych plików konfiguracyjnych po aktualizacji. Wszystko to jest zaawansowane automatycznie przez APT.

## 6. **Najlepsze serwery sieciowe open source** : {#step-4:-update-regularly}

**Co to jest serwer WWW open source?** Oprogramowanie serwera internetowego Open Source to oprogramowanie publiczne zaprojektowane do dostarczania stron internetowych przez Internet World Wide Web. Zasadniczo przetwarza żądania za pośrednictwem protokołu sieci HTTP w celu dystrybucji informacji w sieci WWW.
Ponad 80% aplikacji internetowych i stron internetowych jest zasilanych serwerami internetowymi open source. Tutaj wymieniłem niektóre z najpopularniejszych serwerów internetowych open source**i możesz łatwo wdrożyć jeden z tych popularnych serwerów sieciowych samodzielnie.
* **Apache HTTP Server** 
* **Lighttpd Web Server** 
* **Server WWW OpenLitespeed** 
* **Apache Tomcat Web Server** 
* **Caddy Web Server** 

## [][4. Wniosek: {#next-step}

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Nginx z Passenger na **AWS Production Server**dla aplikacji internetowej. Spójrz na różne przewodniki w [bibliotece pasażerskiej][5] w celu pełnego opanowania serwera aplikacji pasażerskich. Możesz być szczególnie zainteresowany [automatyzacją wdrażania][6] przewodnika aplikacji Ruby za pośrednictwem**Capistrano** , który uczy, jak automatycznie wdrażać przyszłe aktualizacje aplikacji bez tak dużej pracy ręcznej. Teraz jesteś gotowy do wdrożenia aplikacji internetowej w instancjach produkcyjnych AWS.
_ What Free Web Server i Open Source Web Application Server_ Czy wolisz **Web Development lub Hosting** Needs_?. Czy masz jakieś pytania dotyczące bezpłatnego serwera WWW i serwera aplikacji internetowych open source?, Proszę [skontaktuj się][7].

## Badać
Możesz znaleźć następujące odpowiednie posty na blogu:
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][8]
  * [Zainstaluj i zabezpiecz phpMyAdmin z Nginx na Ubuntu][9]
  * [Konfiguruj obsługę HTTP/2 w Nginx na Ubuntu/Debian][10]
  * [Zabezpiecz i szyfruj Nginx z Let's Encrypt on Ubuntu 20.04][11]
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
