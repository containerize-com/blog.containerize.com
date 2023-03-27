---
title: "Jak zainstalować Webmin z SSL na Ubuntu 20.04" 
seoTitle: "Jak zainstalować Webmin z SSL na Ubuntu 20.04" 
description: "WebMin to internetowe narzędzie administracyjne systemów dla systemów podobnych do UNIX. W tym artykule dowiemy się, jak instalować Webmin z SSL na Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "WebMin to internetowe narzędzie administracji systemu, które jest prostą alternatywą dla administracji systemu wiersza poleceń. W tym artykule kieruje się, jak zainstalować WebMin" 
url: /pl/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Jak zainstalować WebMin">}}


## WebMin to internetowe narzędzie administracyjne systemu, które jest prostą alternatywą dla administracji systemu wiersza poleceń. W tym artykule kieruje się, jak zainstalować WebMin
W tym artykule „Jak zainstalować WebMin z SSL na Ubuntu 20.04” ”Rozpoczynamy naszą nową serię samouczków w oprogramowaniu i narzędziach hostingowych. Dzięki WebMin możesz skonfigurować konta użytkowników, włączyć udostępnianie plików, konfigurować ustawienia Apache i DNS oraz wykonywać wiele innych zadań związanych z hostingiem. Umożliwia zarządzanie całym serwerem hostingowym. Eliminuje to problem ręcznej edycji plików konfiguracyjnych Linux. Dowiedzmy się więc, jak instalować WebMin z SSL.
* **[Wprowadzenie do WebMin][1]** 
* [ **Podświetlone funkcje** ][2]
* [ **Obsługiwane systemy operacyjne** ][3]
* [ **Zainstaluj Webmin na Ubuntu** ][4]
* [ **Zainstaluj apache za pomocą WebMin** ][5]
* [ **Wniosek** ][6]

## Wprowadzenie do Webmin {#intro}

Webmin to interfejs internetowy do administracji systemu dla Linuksa. Pomaga zdalnie zarządzać własnym serwerem hostingowym z dowolnej nowoczesnej przeglądarki internetowej. Dzięki WebMin możesz skonfigurować elementy wewnętrzne systemu operacyjnego, takie jak konta użytkowników, Apache, DNS, udostępnianie plików i wiele więcej. WebMin pozwala również na kontrolowanie wielu maszyn za pośrednictwem jednego interfejsu lub bezproblemowego logowania na innych hostach Webmin na tej samej podsieci lub sieci LAN. Webmin, oparty na Perl, działa jako własny proces i serwer Web. Najlepsze w WebMin jest jego w 100% bezpłatne i open source i ma bardzo dobrze prosperującą społeczność programistów.

## Podświetlone funkcje {#features}

  * Pozwala tworzyć i edytować domeny, rekordy DNS, opcje powiązania i widoki.
  * Pomaga w skonfigurowaniu zapory, tworząc i edytując reguły za pomocą IPFW.
  * Pozwólmy skonfigurować skrypty do uruchamiania w czasie rozruchu z /etc/init.d lub /etc/rc.local
  * Możesz zaplanować transfer plików z serwera na wiele serwerów
  * Pozwala instalować pakiety RPM, Debian i Solaris na wielu serwerach z jednego źródła
  * Zapewnia dostęp do raportów takich jak użycie przepustowości, przesyłanie, pobierania, odwiedzający itp.
  * Możesz utworzyć zaplanowane zadania CRON, które działają na wielu serwerach jednocześnie
  * Pozwala uruchamiać polecenia na wielu serwerach jednocześnie
  * Umożliwia skonfigurowanie i edytowanie kwot dysku użytkownika lub grupowego dla lokalnych systemów plików
  * Obejmuje kopie zapasowe i przywracanie systemów plików za pomocą zrzutu i przywrócenie rodziny poleceń
  * Korzystając z menedżera plików podobnego do systemu Windows, możesz przeglądać, edytować i zmieniać uprawnienia na plikach i katalogach na serwerze
  * Możesz skonfigurować serwer protokołu lokalizacji usługi
  * Wyświetl, edytuj i zmień uprawnienia do plików i katalogów w systemie z systemem Windows podobnym do menedżera plików
  * Pomaga w skonfigurowaniu tuneli SSL w celu szyfrowania usług takich jak POP3 i IMAP, za pomocą stunnel uruchamianego z INETD.

## Obsługiwane systemy operacyjne {#support}

Ponieważ różne systemy operacyjne podobne do UNIX i Linux używają różnych lokalizacji dla różnych plików konfiguracyjnych, WebMin może obsługiwać tylko systemy, dla których został skonfigurowany. Poniższe systemy operacyjne są obsługiwane przez wersję 1.979 WebMin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Applinux
  * Asianux
  * Serwer Asianux
  * Bigblock
  * BSDI
  * Caixa Magica
  * Caldera Openlinux
  * Caldera Openlinux Eserver
  * Caos Linux
  * Cendio Lbs Linux
  * Centos Linux
  * Hipervisor Citrix
  * Cloudlinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Spójna technologia Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * Dec/compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FreeBSD
  * Generic Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Imunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * MacOS Catalina
  * MacOS High Sierra
  * MacOS Mojave
  * MacOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * MEPIS LINUX
  * Główny LELILELUS
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * Openmamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS x
  * Pardus Linux
  * PcLinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Scientific Linux
  * SCO OpenServer
  * SCO Unixware
  * Bezpieczny Linuks
  * SGI Irix
  * Slackware Linux
  * SLAMD64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * System stacjonarny Sun Java
  * Sun Solaris
  * Suse Linux
  * SUSE OpenExchange Linux
  * SUSE SLES LINUX
  * Synology DSM
  * Tao Linux
  * Serwer Tawie Linux
  * Thizlinux Desktop
  * Thizserver
  * Tinysofa Linux
  * Trustix
  * Trustix se
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Biały karf Linux
  * Whitebox Linux
  * Wind River Linux
  * Windows
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  * Żółty pies Linux
  * Yoper Linux
W tej chwili najlepiej wspierane systemy to Solaris, Linux (w szczególności Redhat) i FreeBSD.

## Zainstaluj Webmin na Ubuntu {#install}

Aby zainstalować WebMin, musisz mieć dostęp do użytkownika z uprawnieniami **root**. Zaleca się skonfigurowanie użytkownika nie-root z**sudo** dostęp.
Najpierw SSH na serwerze za pomocą następującego polecenia
```
ssh user@server_IP_address
```
Aby zainstalować WebMin za pośrednictwem _apt-get_, musisz najpierw dodać repozytorium Webmin do pliku _sources.list_. Na serwerze otwórz plik _sources.list_ w swoim ulubionym edytorze tekstu. W tym samouczku użyjemy VIM:
```
sudo vi /etc/apt/sources.list
```
Po otwarciu pliku dodaj następujące wiersze na końcu pliku.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Teraz dodaj klucz GPG Webmin do APT, aby dodane repozytorium źródłowe zostanie zaufane. To polecenie to zrobi:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Przed zainstalowaniem WebMin musisz zaktualizować listy pakietów Apt-Get:
```
sudo apt-get update
```
Teraz uruchom to polecenie apt-get, aby zainstalować Webmin:
```
sudo apt-get install webmin 
```
Wprowadź Y, aby potwierdzić instalację. Po zakończeniu instalacji usługa internetowa rozpocznie się automatycznie. A interfejs internetowy uruchomi się w porcie 10000. Możesz uzyskać dostęp do interfejsu za pomocą następującego adresu URL.
```
https://server_IP_address:10000
```
Zostaniesz poproszony o ostrzeżenie, które mówi, że certyfikat SSL twojego serwera nie jest zaufany. Wynika to z faktu, że WebMin automatycznie generuje i instaluje certyfikat SSL po instalacji, a certyfikat nie został wydany przez organ certyfikatu, którego komputer jest zaufany. W porządku jest kontynuować. Poinstruuj przeglądarkę internetową, aby zaufała certyfikatowi.
W tym momencie zobaczysz ekran logowania WebMin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Zainstaluj Webmin">}}

Po pierwszym zalogowaniu się do WebMin zostaniesz przeniesiony na stronę **Informacje o systemie** . Daje to przegląd zasobów systemu i innych różnych informacji.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Zainstaluj informacje o systemie internetowym">}}


## Zainstaluj Apache za pomocą WebMin {#install-apache}

Webmin ma wiele różnych modułów, które zarządzają różnymi pakietami oprogramowania. Aby zainstalować Apache za pomocą WebMin, postępuj zgodnie z poniższymi instrukcjami
**Krok 1 **: W menu nawigacyjnym kliknij** Nie używane moduły**Aby rozwinąć kategorię, a następnie kliknij** Apache Webserver**.
Jeśli nie masz zainstalowanego Apache na serwerze, moduł powiadomi Cię i zapewni sposób instalacji Apache.
**Krok 2**: Użyj linku** Kliknij tutaj**(w ostatnim zdaniu), aby zainstalować Apache za pośrednictwem Apt-Get przez WebMin.
Po zakończeniu instalacji Apache serwer będzie uruchamiał domyślny serwer Apache.

## Wniosek {#conclusion}

W tym artykule omówiono krótko wiele rzeczy, które Webmin może zrobić, Webmin jest jednym z najlepszych narzędzi do zarządzania serwerami Linux/UNIX. W tym samouczku nauczyliśmy się również instalować Webmin na Ubuntu, a także omówiliśmy, jak instalować Apache na serwerze za pomocą WebMin.

## Badać
  * [Jak zainstalować wiele wersji PHP z Nginx na Ubuntu][7]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
