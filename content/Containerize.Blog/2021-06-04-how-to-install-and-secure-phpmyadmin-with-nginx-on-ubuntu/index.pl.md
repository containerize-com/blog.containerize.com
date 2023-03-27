---
title: "Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu" 
seoTitle: "Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu" 
description: "PhpMyAdmin to oprogramowanie do zarządzania bazą danych open source napisane w PHP. Dowiemy się, jak instalować phpMyAdmin z nginx i administrować mysql przez phpMyAdmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpMyAdmin to open source graficzny narzędzie do zarządzania bazą danych internetowych napisane w PHP. W tym samouczku nauczymy się instalować phpMyAdmin z Nginx." 
url: /pl/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpMyAdmin to open source graficzny narzędzie do zarządzania bazą danych internetowych napisane w PHP. W tym samouczku nauczymy się instalować phpMyAdmin z Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu">}}


## **Przegląd** 
PhpMyAdmin to bezpłatne i open source narzędzie do zarządzania bazą danych, które oferuje użytkownikom interfejs internetowy do zarządzania serwerami MySQL lub MARIADB za pośrednictwem interfejsu intuicyjnego. Jest to jedno z powszechnie obsługiwanych oprogramowania oferowane przez większość popularnych dostawców hostingowych, które umożliwiło administratorom stron internetowych do tworzenia bazy danych w phpMyAdmin i zarządzania bazami danych, łatwym realizację danych SQL, importowanie i eksport. Będziesz mógł uzyskać dostęp do swoich baz danych MySQL lub MariaDB w PhpMyAdmin z Nginx za pośrednictwem graficznego interfejsu internetowego, działającego obok środowiska programistycznego PHP.
W tym przewodniku opiszemy kroki, jak zainstalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu 20.04. Musisz zainstalować i skonfigurować phpMyAdmin na serwerze Ubuntu, aby łatwo działać z bazami danych i tabel MySQL. Nauczmy się więc instalować i zabezpieczyć phpMyAdmin z Nginx na Ubuntu 20.04 / 20.10:
  * Wymagania wstępne
  * Zainstaluj phpMyAdmin
  * Skonfiguruj bazę danych
  * Utwórz symboliczny link
  * Dostęp do phpMyAdmin
  * Utwórz MySQL Superuser
  * Bezpieczny phpMyAdmin
  * Wniosek

## Krok 1: Wymagania wstępne {#id-prerequisites}

Aby śledzić ten przewodnik, potrzebujesz serwera Ubuntu 20.04 działającego na komputerze lokalnym lub na zdalnym serwerze z warunkami wstępnymi.
  * Powinieneś uzyskać dostęp do serwera jako użytkownika nie-root z uprawnieniami Sudo i zaporem UFW.
  * Zakłada się, że zainstalowałeś już Nginx, MySQL i PHP na Ubuntu.
  * Ponieważ PhpMyAdmin używa poświadczeń MySQL do uwierzytelnienia, więc powinieneś również zainstalować certyfikaty SSL/TLS, aby umożliwić zaszyfrowany ruch między serwerem a klientem.
Po tym, zacznijmy instalować i zabezpieczyć PhpMyAdmin, aby połączyć się z MySQL Server w celu uzyskania dostępu do bazy danych za pośrednictwem interfejsu internetowego.

## Krok 2: Zainstaluj phpMyAdmin {#id-1-install-phpmyadmin}

Upewnij się, że pomyślnie zainstalowałeś wszystkie warunki wstępne w swoim systemie przed zainstalowaniem phpMyAdmin na Ubuntu 20.04. Zacznij od aktualizacji listy pakietów:
```
sudo apt update 
```
Teraz uruchom następujące polecenie instalacji pakietu phpMyAdmin z domyślnych repozytoriów Ubuntu na Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Naciśnij **y**i **Wprowadź** , gdy zostanie poproszony o kontynuację. Jeśli masz monit o wybranie serwera WWW, ponieważ nie ma opcji dla **nginx** jak poniżej, naciśnij **Tab** , aby wybrać OK, a następnie**Enter** , aby kontynuować bez wyboru serwera WWW.

{{< figure align=center src="images/mysql-setup.png" alt="Zainstaluj i zabezpiecz phpMyAdmin dla Nginx na Ubuntu 20.04">}}


## Krok 2: Skonfiguruj bazę danych {#id-1-install-phpmyadmin}

Następnie wybierz **Tak**i naciśnij**Wprowadź** , aby zainstalować i skonfiguruj bazę danych za pomocą narzędzia DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Jak konfigurować mysql z phpMyAdmin">}}

Hasło aplikacji MySQL jest używane wewnętrznie przez phpMyAdmin do komunikacji z bazą danych MySQL. Wprowadź nowe hasło dla PhpMyAdmin DBMS do zarejestrowania się jako nowa baza danych, wybierz OK i naciśnij ENTER, aby kontynuować.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Jak konfigurować mysql dla phpMyAdmin">}}

Zostaniesz poproszony o potwierdzenie hasła, wprowadź to samo hasło, wybierz **OK**i naciśnij**Wprowadź** . Gratulacje! PhpMyAdmin został pomyślnie zainstalowany w twoim systemie.

## Krok 4: Utwórz symboliczny link {#id-2-create-symbolic-link}

Istnieje kilka sposobów skonfigurowania Nginx do obsługi plików phpMyAdmin. Jeśli blok serwera Twojej domeny jest już skonfigurowany w celu obsługi żądań PHP, musisz utworzyć link symboliczny z plików instalacyjnych phpMyAdmin Nginx/usr/share/phpMyAdmin w katalogu głównego dokumentu domeny. Domyślna lokalizacja głównego dokumentu Nginx w Ubuntu 20.04/20.10 powinna być/var/www/html/i może być inna w zależności od konfiguracji INS. Korzeń dokumentu może być zlokalizowany na przykład w /var/www/example.com/public_html.
Następnie utworzymy symboliczny link z katalogu phpMyAdmin/usr/share/phpMyAdmin do root dokumentów. Zakładamy tutaj, że nasz root dokumentu jest/var/www/html/i po prostu dodamy phpMyAdmin do końca tego. To pozwoli nam uzyskać dostęp do phpMyAdmin na adres url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Krok 5: Dostęp do phpMyAdmin {#id-3-test-phpmyadmin}

Powinieneś teraz mieć dostęp do interfejsu internetowego PhpMyAdmin, odwiedzając nazwę hosta/domeny swojego serwera lub publiczny adres IP, a następnie domain.com/phpMyAdmin w swojej ulubionej przeglądarce internetowej. Na przykład http://example.com/phpmyadmin lub http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Na serwerach Ubuntu działających z MySQL 5.7 i nowszymi nie będziesz mógł zalogować się do bezpłatnej bazy danych phpMyAdmin za pomocą konta głównego MySQL i otrzymasz błąd takiego jak „Access Access DEMINED dla użytkownika„ root ”@„ localHost ”” _. Zamiast tego powinieneś utworzyć nowe konto Superuser tylko dla phpMyAdmin. Następnie utworzymy konto root MySQL, aby zalogować się do phpMyAdmin.

## Krok 6: Utwórz MySQL Superuser {#id-4-create-mysql-superuser}

W terminalu zacznij od zalogowania się do MySQL przy użyciu hasła root MySQL, które mogłeś utworzyć hasło root po zainstalowaniu bazy danych PhpMyAdmin po raz pierwszy.
```
sudo mysql -u root -p
```
Po zalogowaniu do MySQL dodaj nowy Superuser MySQL z wybraną nazwą użytkownika. W tym przykładzie nazywamy to Yasiradmin. [Kliknij tutaj, aby wygenerować silne hasło][2] i zastąpić nowe \ _password \ _ -harch poniżej.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Teraz daj uprawnienia Superuser naszemu nowemu użytkownikowi Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Teraz wyjdź z sesji mysql. Powinieneś teraz mieć dostęp do phpMyAdmin przy użyciu tych nowych poświadczeń Superuser.

{{< figure align=center src="images/image.png" alt="Jak zalogować się phpMyAdmin na Ubuntu 20.04">}}

Zdecydowanie zaleca się skonfigurowanie dodatkowego bezpieczeństwa dla PhpMyAdmin w celu zabezpieczenia phpMyAdmin nginx. Powinieneś być w stanie zmienić i uzyskać dostęp do URL PhpMyAdmin na coś takiego jak niejasny adres URL.

## Krok 7: bezpieczny phpmyadmin {#id-6-secure-phpmyadmin-recommended}

Następnie chcemy skonfigurować uwierzytelnianie w Nginx, aby zapewnić dodatkową warstwę bezpieczeństwa. Teraz zainstalujemy Apache2-Utils, który może wygenerować plik .htPassWd, który działa zarówno z serwerami Nginx, jak i Apache2.
```
sudo apt install apache2-utils
```
Po zainstalowaniu możemy wygenerować plik .htPassWd. Zmień wybraną nazwę użytkownika. [Wygeneruj hasło][3] i zapewnij je bezpieczeństwo.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Będzie teraz plik .htPassWd zawierający nazwę użytkownika i zaszyfrowane hasło. Możesz to sprawdzić za pomocą poniższego polecenia:
```
cat /etc/nginx/.htpasswd
```
Powinieneś zobaczyć coś takiego jak nazwa użytkownika: $ kwietnia
Musimy teraz dodać 2 dyrektywy do naszego pliku konfiguracyjnego Nginx. Lokalizacja pliku konfiguracyjnego może się różnić w zależności od instalacji, chociaż domyślna ścieżka pliku jest zwykle na/etc/nginx/witryna-dostępna/domyślna. Jeśli skonfigurujesz wiele domen, plik konfiguracyjny może znajdować się w miejscu jak /etc/nginx/sites-available/example.com
W tym przykładzie założymy, że plik konfiguracji Nginx jest AT/ETC/Nginx/Sites-Availlable/Domyślny. Otwórz plik, aby go edytować.
```
sudo nano /etc/nginx/sites-available/default
```
Przewiń w dół i poszukaj bloków lokalizacji i wklej w nowym bloku pod nimi o nazwie twojego zasłoniętego folderu phpMyAdmin, w tym przykładzie aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Zapisz plik i wyjdź (naciśnij Ctrl + X, naciśnij Y, a następnie naciśnij Enter). Sprawdź, czy plik konfiguracji Nginx jest prawidłowy, w przeciwnym razie serwer może zawieść na ponownym uruchomieniu, uruchamiając polecenie.
```
sudo nginx -t
```
Jeśli jest prawidłowy, ponownie załaduj nginx config.
```
sudo service nginx reload
```
Teraz, odwiedzając przykład.com/aspose_hidden, należy przedstawić okno uwierzytelniania.

{{< figure align=center src="images/auth3.png" alt="Jak zabezpieczyć phpMyAdmin">}}

Wszystko skończyłeś z instalacjami phpMyAdmin na serwerze Ubuntu.

## Wniosek: {#id-what-next}

Gratulacje, pomyślnie zainstalowałeś phpMyAdmin z Nginx dla serwera Ubuntu 20.04 / 20.10, a teraz możesz administrować MySQL przez phpMyAdmin. Teraz możesz zacząć tworzyć bazy danych MySQL, użytkowników, tabele, wykonywać zapytania MySQL i różne inne operacje.
Jeśli masz pytania, powiedz mi poniżej w sekcji komentarzy.

## Badać
Możesz także polubić bardziej powiązane artykuły:
  * [Jak skonfigurować Apache jako odwrotną proxy dla Ubuntu/Debian][4]
  * [Jak zabezpieczyć i szyfrować Nginx za pomocą Let's Szyfrowanie na Ubuntu 20.04][5]
  * [Jak skonfigurować obsługę HTTP/2 w Nginx na Ubuntu/Debian][6]
  * [Jak skonfigurować Nginx z pasażerem na serwerze produkcyjnym AWS][7]
  * [Jak zainstalować i skonfigurować OwnCloud z Apache na Ubuntu][8]



[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
