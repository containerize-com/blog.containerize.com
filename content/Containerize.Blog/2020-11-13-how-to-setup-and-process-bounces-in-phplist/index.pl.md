---
title: "Jak konfigurować i przetwarzać odbijanie się w phplist" 
seoTitle: "Jak konfigurować i przetwarzać odbijanie się w phplist" 
description: "Phplist jest potężną samozwańczą listą mailingową i menedżerem biuletynu. Pomaga firmom wysyłać kampanie biuletynowe i łatwo się podskakuje." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Wyślij kampanię z biuletynem open source i oprogramowaniem do marketingu e -mailowego. Konfiguracja zarządzania odbijaniem w phplist i automatyzuj przetwarzanie odbicia dla zdrowych list mailingowych." 
url: /pl/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Wyślij kampanię z biuletynem open source i oprogramowaniem e -mail marketingowym. Konfiguracja zarządzania odbijaniem w phplist i automatyzuj przetwarzanie odbicia dla zdrowych list mailingowych.

{{< figure align=center src="images/phplist-2.png" alt="Proces odbija phplist">}}

Napisaliśmy artykuły na temat wdrażania [Multi-to-tourancy][1] i [wysyłanie kampanii biuletynowej][2] w phplist. W tym artykule szczegółowo omówimy te punkty na temat odbicia procesu w phplist.
  * [Co to jest phplist?][3]
  * [Co to jest Bounce?][4]
  * [Zarządzanie odrzuceniem konfiguracji][5]
  * [Jak przetwarzać odbicia?][6]
  * [Wniosek][7]

## Czym jest phplist?   {#phplist}
Phplist jest najpopularniejszym bezpłatnym i open source, wysyłając oprogramowanie. Phplist umożliwia firmom wysyłanie e -maili marketingowych, aktualizacji produktu i ogłoszeń subskrybentom. Pomaga firmom w zarządzaniu listą, projektowania pięknego biuletynu, kampanii harmonogramu i zarządzania odbijaniem. [Czytaj więcej][8]

## Co to jest odbijanie?   {#odbić się}
Bounce to wiadomość e -mail, której nie można dostarczyć z liczby powodów i powrócić do nadawcy. Możemy mieć powody, takie jak skrzynka pocztowa, adres e -mail nie jest już ważny lub nieprawidłowy adres e -mail. Z tego powodu musisz przetwarzać odbicia, aby nie wysyłać wiadomości e -mail na nieprawidłowe adresy e -mail.

## Management Bounce Bounce   {#setUp}
Aby skonfigurować zarządzanie odbiciem, musisz skonfigurować następujące ustawienia w pliku config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="phplist - zarządzanie przetwarzaniem odbicia">}}

Więcej osób wyjaśnimy więcej na temat tych konfiguracji.
  * Po pierwsze, musisz dodać adres e -mail, w którym chcesz otrzymać wiadomości o odbiciu. Możesz znaleźć**Message_envelope**Zmienna i dodać swój adres e -mail.
* Phplist może pobierać e -maile z Bounce Mailbox za pośrednictwem dwóch protokołów,**Mbox i Pop3**. Znajdź więc**BOUNCE_PROTOCOL**Zmienna i zmień ją zgodnie z otoczeniem.
* Jeśli masz ustawę**mbox**prototcol, musisz zdefiniować format pliku. Znajdź więc**BOUNCE_mailbox**i ustaw ścieżkę jak „/var/buol/maila/listBounces”.
* W przypadku użycia protokołu**POP3**musisz skonfigurować**host, nazwę użytkownika i hasło**dla skrzynki pocztowej. Możesz zobaczyć te ustawienie powyżej Sreenshot.
* Oprócz powyższych ustawień dla protokołu**POP3**może być konieczne dodanie portu i szyfrowania.

## Jak przetwarzać odbicia?   {#proces}
Phplist obsługuje dwie metody odbicia procesowego: ręczne i zautomatyzowane. Będziesz musiał stworzyć zadanie CRON, aby zautomatyzować przetwarzanie odbicia. Możesz także ręcznie przetwarzać odbijanie się, odwiedzając**System> Process odbija się**Strona. Dlatego najpierw musisz zmienić**ręcznie \ _process \ _Bounces**Ustawienia zgodnie z twoimi wymaganiami. Możesz odwiedzić [Docs Phplist][9], aby skonfigurować zadanie CRON w celu odbicia procesu.

## Wniosek   {#Conclusion}
W tym poście nauczyliśmy się skonfigurować adres e -mail odrzuceń i odbicia przetwarzania. Możesz łatwo przetwarzać odbicia metodą ręczną, jeśli masz mniej subskrybentów. Musisz jednak użyć procesu obsługi Automate Bounce dla dużych list. Zapisza twój czas i pomoże ci utworzyć czyste i prawidłowe listy subskrybentów.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
