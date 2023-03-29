---
title: "Jak skonfigurować aplikację wielozadaniową w phplist" 
seoTitle: "Jak skonfigurować aplikację wielozadaniową w phplist" 
description: "Phplist to bezpłatne i open source Newsletter. Skonfiguruj aplikację wielozadaniową i uruchom kilka instancji aplikacji w wspólnym środowisku." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Samouczek, aby opracować aplikację wielozadaniową w phplist. Funkcja wielopoziomowa wykorzystuje jedną instalację dla wielu hostów w celu obniżenia kosztów hostingu." 
url: /pl/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## samouczek, aby opracować aplikację wielozadaniową w phplist. Funkcja wielopoziomowa wykorzystuje jedną instalację dla wielu hostów w celu obniżenia kosztów hostingu.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Phplist aplikacji wielozadaniowej">}}

W tym artykule omówimy **What Is Multi-to-Toinancy**i jak możemy skonfigurować**aplikację wielozadaniową** w phplist.

## Co to jest phplist?
Przy podejmowaniu decyzji o strategii marketingowej marketing e -mailowy jest kluczową częścią każdej internetowej firmy cyfrowej. Phplist umożliwia firmom dotarcie do dużej publiczności. Phplist jest szeroko używany **Oprogramowanie biuletynu open source** do zarządzania listami i wysyłania biuletynów. Pomaga firmom tworzyć, planować, wysyłać i analizować kampanie biuletynowe. Phplist obsługuje takie funkcje, jak analityka, segmentacja, przetwarzanie odbicia, wtyczki, interfejsy API i wiele innych.

## Co to jest wielozadaniowość?
Wielokrotność to architektura, w której wielu klientów/witryn jest reprezentowanych przez pojedynczy instancję aplikacji. W wielu jedyności strona jest uważana za najemcę. Każdy najemca ma określone funkcje, takie jak konfiguracja, motywy, SMTP.
Głównym aspektem przetwarzania w chmurze jest wielokrotność wielopoziomowa. **architektura wielozadaniowa** pomaga firmom osiągnąć lepszy ROI poprzez obniżenie kosztów konserwacji i szybkich aktualizacji najemców. Również aplikacje zaprojektowane na architekturze multin-tenantów mogą być łatwo skalowalne.
Możemy wdrożyć wielozadaniowość, stosując następujące podejścia.
  * Udostępniona baza danych dla wszystkich najemców.
  * Oddzielna baza danych dla każdego najemcy.
Będziemy używać osobnej bazy danych dla każdego podejścia najemcy do wdrożenia wielokrotności w Phplist.
  * [Przepływ żądania uchwytu][1]
  * [Konfiguracja bazy danych dla najemcy][2]
  * [Skonfiguruj Nginx dla najemcy][3]

## Przepływ żądania obsługi {#request}

  * Weź kopię zapasową pliku config.php, a można go znaleźć w katalogu konfiguracji.
  * Utwórz nowy plik config.php i dodaj w nim następujący kod do obsługi witryn/najemców.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Zamień przykład.com na nazwę domeny. Musisz także utworzyć plik konfiguracyjny dla każdego najemcy. Skopiuj plik kopii zapasowej config.php i zapisz go z nową nazwą, taką jak config.example.com.php.

## Konfiguracja bazy danych dla najemcy {#database}

  * Weź kopię zapasową istniejącej bazy danych phplist. Użyj go, aby utworzyć bazę danych dla nowego najemcy.
  * Otwórz plik config.example.com.php. Zmień poświadczenia bazy danych i wszelkie inne ustawienia zgodnie z twoim środowiskiem.

## Skonfiguruj Nginx dla najemcy {#Nginx}

* Przejdź do katalogu Nginx **CD/etc/nginx/Sites-dostępny** .
  * Skopiuj domyślny plik config.php i zapisz go z nazwą witryny, jak example.com.
* Otwórz konfiguracja przykładowa.com z **sudo nano przykład.com** .
  * Zmień ścieżkę główną, nazwę_ Server i wszelkie inne ustawienia.
* Konfiguracje testowe z **sudo nginx -t** 
* Wreszcie Utwórz SymLink, wykonując **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/Sites-Enabled/** 
* Uruchom ponownie serwer WWW Nginx, uruchamiając **sudo systemctl restart nginx** , aby mógł załadować nowo utworzony plik konfiguracyjny.

## Wniosek
Oprogramowanie wielozadaniowe ma pewne zalety w porównaniu z aplikacją jednorazową, taką jak obniżenie kosztów konserwacji, skuteczne wykorzystanie zasobów i łatwe w instalacji aktualizacje. Jeśli zamierzasz zbudować oprogramowanie SaaS (oprogramowanie jako serwis), możesz śledzić architekturę wielozadaniową i cieszyć się jej prawdziwą mocą.

## Badać
Możesz znaleźć istotne następujące linki:
  * [phplist - biuletyn open source i oprogramowanie e -mail marketingowe][4]
  * [Jak utworzyć i wysłać biuletyn za pomocą phplist][5]
  * [Jak skonfigurować i przetwarzać odbijanie się w phplist][6]
  * [Przewodnik dla początkujących o opracowaniu wtyczki phplist][7]
  * [Konfiguracja zaawansowanych reguł zarządzania odrzuceniami i odbiciem w phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
