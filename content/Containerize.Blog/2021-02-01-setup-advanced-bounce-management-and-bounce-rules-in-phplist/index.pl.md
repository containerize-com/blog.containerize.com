---
title: "Konfiguracja zaawansowane reguły zarządzania odrzuceniami i odbijaniem w phplist" 
seoTitle: "Konfiguracja zaawansowane reguły zarządzania odrzuceniami i odbijaniem w phplist" 
description: "Włącz Advanced Bounce Management w phplist i obsługa e -maili odbijających. Utwórz reguły odbicia i zautomatyzuj proces podejmowania różnych działań na zwróconych wiadomości." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "W zależności od rodzaju kodu błędu odbicia, który jest zwracany przez MTA, Advanced Bounce Management umożliwia automatyczne wykonywanie różnych działań." 
url: /pl/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## W zależności od rodzaju kodu błędu odbicia, który jest zwracany przez MTA, Advanced Bounce Management umożliwia automatyczne wykonywanie różnych działań.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Konfiguracja zaawansowane reguły zarządzania odrzuceniami i odbijaniem w phplist">}}

W naszym samouczku [poprzednim][1] zwróciliśmy się już do **Phplist Bounce Processing **. Jeśli nie znasz przetwarzania odbicia, możesz to przeczytać. Możesz pobrać niedostarkowe wiadomości e -mail do swojego projektu phplist za pomocą przetwarzania odbicia. Jak radzisz sobie z pobieranymi e -mailami? Nie mam pojęcia, rzućmy okiem na zarządzanie odrzuceniami, które pozwalają uporządkować e -maile** . Każda zwrócona wiadomość e -mail ma kod błędu zwracany przez MTA (agent przesyłania poczty). Ponadto możesz przejrzeć zwrócony nagłówek wiadomości e -mail i zawiera on wszystkie informacje wzdłuż kodu błędu.
  * [Włącz obsługę zaawansowanego odbicia][2]
  * [Dodaj regułę odbicia][3]
  * [Lista reguł odbicia][4]
  * [Wniosek][5]

## Włącz obsługę Advanced Bounce   {#enable}
Po pierwsze, włącz obsługę Advanced  **Bounce**  poprzez kopiowanie poniżej kodu w pliku config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Następnie przejdź do systemu **> Zarządzaj odbiciami> Lista odbija zasady** w celu tworzenia reguł odbicia.
Możesz tworzyć reguły odbicia na podstawie wyrażeń regularnych. Możesz znaleźć powód, dla którego  **e -mail odbijają się**  w nagłówku i użyć go do wyrażenia regularnego. Ponadto wybierz odpowiednie działania na podstawie kodu błędu lub wyrażenia regularnego. Phplist obsługuje następujące działania. Oświadczenie o działaniu jest samoobracze, więc nie musimy szczegółowo omawiać.
  * Usuń subskrybenta
  * Nieprawidłowy subskrybent
  * Subskrybent czarnej listy
  * Blacklist Adres e -mail
  * Usuń subskrybenta i odbijaj
  * Nieprawidłowy subskrybent i usuń odbijanie
  * Dodaj subskrybenta do listy zrób to nie i usuń odbijanie
  * Dodaj adres e-mail do listy zrób to nie i usuń odbijanie
  * Usuń odbicie

## Dodaj regułę odbicia   {#add}
Stwórzmy naszą pierwszą zasadę odbicia.
  *Po pierwsze, wprowadź wyrażenie regularne, takie jak  **(konto zostało zawieszone | Konto niedostępne)** 
  * Następnie wybierz odpowiednie działanie
  * Na koniec dodaj notatkę/notatkę dla reguły

{{< figure align=center src="images/add-bounce-rule.png" alt="Utwórz zasadę odbicia w phplist">}}

Możesz dodać reguły odbicia z następujących powodów i wybrać odpowiednie działanie do obsługi odbicia. Możesz jednak wyszukać odpowiedzi SMTP i dodać więcej reguł do listy.
  * Zarchiwizowany odbiorca
  * typ = mx: host nie znaleziono
  * Przepraszamy, nie ma tutaj skrzynki pocztowej po tym imieniu
  * Wyłączona skrzynka pocztowa
  * konto jest nieaktywne
  * Ta skrzynka pocztowa została zablokowana z powodu bezczynności
  * Nieznany użytkownik
  * Nie ma takiego odbiorcy
  * i tak dalej …
*Gł

## List Rules Regulation   {#List}
Po utworzeniu liczby reguł Twoja lista  **reguł odbicia**  będzie wyglądać jak na poniższym zrzucie ekranu. Możesz wykonać inne działania, takie jak zmiany zamówień i usunięcie na tej stronie.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Lista zasad odbicia">}}


## Wniosek   {#Conclusion}
W tym samouczku dowiedzieliśmy się o zaawansowanym  **zarządzaniu odbiciem**  i opracowaliśmy niezbędne zasady odbicia. Byłoby wspaniale zezwolić na tę funkcję, abyś mógł zautomatyzować proces czyszczenia nieprawidłowych adresów e -mail z twoich list. Umożliwiłoby to również utrzymanie minimalnego poziomu zwróconych wiadomości e -mail. Ponadto twoje listy będą miały uzasadnionych subskrybentów.
Ponadto [Containerize.com][6] jest w drodze do ulepszenia stosu produktów open source w wielu językach i ramach. Aby uzyskać regularne aktualizacje, bądźcie czujni w kategorii [biuletyny][7], aby uzyskać bardziej interesujące artykuły.

## Badać
Możesz znaleźć istotne następujące linki:
  * [phplist - biuletyn open source i oprogramowanie e -mail marketingowe][8]
  * [Jak tworzyć i wysłać biuletyn za pomocą phplist][9]
  * [Jak skonfigurować i przetwarzać odbijanie się w phplist][1]
  * [Przewodnik dla początkujących o opracowaniu wtyczki phplist][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
