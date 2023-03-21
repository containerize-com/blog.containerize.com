---
title: "Zautomatyzuj system biletów za pomocą WordPress i Osticket" 
seoTitle: "Zautomatyzuj system biletów za pomocą WordPress i Osticket" 
description: "Integracja Osticket-WordPress zapewnia klientom sposób generowania biletów wsparcia z witryny WordPress i zarządzania nimi z deski rozdzielczej Osticket." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Zautomatyzuj proces pomocy z bezproblemową integracją WordPress i Osticket. Przekształć zapytania klientów za pośrednictwem formularzy internetowych w bilety wsparcia." 
url: /pl/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Zautomatyzuj proces HelpDesk z bezproblemową integracją WordPress i Osticket. Przekształć zapytania klientów za pośrednictwem formularzy internetowych w bilety wsparcia.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Integracja Osticket-WordPress w celu automatyzacji systemu biletów">}}

Twoi klienci mogą mieć zapytania dotyczące twoich produktów/usług. Wyślą swoje zapytania za pośrednictwem różnych formularzy na Twojej stronie WordPress. Integracja Osticket-WordPress pomaga przekształcić te zapytania w bilety. Wysyła dane za pośrednictwem API do systemu Osticket HelpDesk.
Osticket to otwarty i bezpłatny system biletów pomocy technicznej. Klienci mogą tworzyć bilety dotyczące swoich pytań na Osticket. Ten system HelpDesk ułatwia każdemu organizacji zarządzanie zapytaniami pochodzącymi od ich klientów. Administrator może tworzyć działy i zespoły oraz przypisywać bilety różnym agentom zgodnie z naturą utworzonych biletów. Ten bezpłatny system open source będzie śledzić problemy. Pozwala zarówno klientom, jak i agentom komentować bilet w celu omówienia postępów. W tym poście na blogu omówimy następujące sekcje:
  * [Proces integracji][1]
  * [Instalacja wtyczki WordPress][2]
  * [Procedura uwierzytelniania][3]
  * [Wniosek][4]

## Proces integracji:   {#integracja}
Integracja Osticket i WordPress wymaga formularza kontaktowego na stronie WordPress z następującymi dziedzinami
  1. Temat pomocy
  2. E -mail
  3. Pełna nazwa
  4. Temat
  5. Wiadomość
Formularz kontaktowy musi wysyłać wiadomości e -mail, ponieważ ta wtyczka zaczepia funkcję WP_mail, aby uzyskać dane formularzy.

## WordPress Plugin Instalacja:   {#WordPress}
  1. Przejdź do pulpitu administratora swojej witryny WordPress.
  2. Następnie przejdź do sekcji wtyczek.
  3. Następnie zainstaluj tę [wtyczkę][5].
  4. Następnie aktywuj wtyczkę.
  5. i przejdź do „Ustawienia” -> „Osticket Connector”.
  6. Następnie wprowadź adres URL swojej witryny Osticket, tj. [Http: //your.domain/api/tickets.json][6]
  7. Wprowadź klucz API utworzony z panelu administracyjnego Osticket (wyjaśniony w następnej sekcji).
  8. Na koniec wypełnij wszystkie pola, aby mapować dane z formularza kontaktowego na pola biletowe Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Integracja Osticket-WordPress w celu automatyzacji systemu biletów">}}


## Procedura uwierzytelniania:   {#Auth}
Uwierzytelnianie API jest wykonywane za pomocą klawiszy API skonfigurowanych w panelu administracyjnym Osticket. Klawisze API są generowane i powiązane z źródłem adresu IP, który jest weryfikowany w stosunku do źródłowego IP żądań API HTTP. Aby utworzyć klucz API
  1. Idź do panelu administracyjnego Osticket.
  2. Kliknij „Zarządzaj”.
  3. Przejdź do menu „Keys API”.
  4. Kliknij „Dodaj nowy klucz API”.
  5. Ustaw „Status” na aktywny.
  6. Sprawdź pole wyboru „Can utworzyć bilet”.
  7. Wprowadź adres IP swojej witryny WordPress i naciśnij „Dodaj klucz”.

{{< figure align=center src="images/osticket-1024x729.png" alt="Integracja Osticket-WordPress w celu automatyzacji systemu biletów">}}


## Wniosek:   {#Conclusion}
Integracja Osticket-WordPress zautomatyzuje proces biletów. Dlatego ułatwi życie zespołowi wsparcia. Zapytania na stronie WordPress automatycznie zamieni się w bilety wsparcia na Osticket. Aby zespół wsparcia mógł łatwiej i wydajniej zarządzać pytaniami klientów. Agenci wsparcia zostaną powiadomieni przez powiadomienia e -mail. Dlatego agenci mogą rozwiązywać zapytania klientów na czas. Sekcja komentarzy na temat Osticket pomaga zarówno klientom, jak i agentom wspierać skuteczną i terminową komunikację. Ułatwia także menedżerom śledzenie postępów każdego biletu.

## Badać:
Aby dowiedzieć się więcej o Osticket i WordPress, sprawdź te strony:
  * [Osticket - bezpłatny system biletów na pomocnika open source][7]
  * [WordPress - bezpłatne open source i najczęściej używane CMS i narzędzie blogowania][8]
  * [Jak skonfigurować oprogramowanie do pomocy internetowej za pomocą Osticket][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
