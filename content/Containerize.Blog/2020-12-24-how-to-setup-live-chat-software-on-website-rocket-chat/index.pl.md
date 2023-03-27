---
title: "Jak skonfigurować oprogramowanie do czatu na żywo na stronie internetowej | Rocket.chat" 
seoTitle: "Jak skonfigurować oprogramowanie do czatu na żywo na stronie internetowej | Rocket.chat" 
description: "Rocket.Chat jest łatwy w konfiguracji, pomaga zespołom i klientom skutecznie komunikować się. To oprogramowanie do czatu na żywo jest open source, cross-platform i samodzielnie." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Oprogramowanie do obsługi czatu na żywo zapewnia wygodę i wydajność w zakresie obsługi klienta. Nauczmy się instalować Rocket.chat na stronie internetowej firmy." 
url: /pl/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Oprogramowanie do obsługi czatu na żywo zapewnia wygodę i wydajność w dostarczaniu obsługi klienta. Nauczmy się instalować Rocket.chat na stronie internetowej firmy.

{{< figure align=center src="images/rocketchat-1.png" alt="Oprogramowanie czatu na żywo">}}


## Przegląd
Opublikowaliśmy niektóre posty na blogu związane z oprogramowaniem do czatu na żywo open source, takie jak [najlepsze bezpłatne oprogramowanie do czatu obsługi klienta dla strony internetowej][1], [WordPress Instant Messaging za pomocą rocket.chat][2] i jeszcze więcej. W tym poście na blogu przejdziemy przez najważniejsze oprogramowanie do obsługi klienta Rocket.chat. Ze ogromnym wzrostem ruchu online, firmom trudno jest rozwiązywać dużą liczbę zapytań na czas. Odwiedzający przychodzą na Twoją witrynę, mają tendencję do zdobywania informacji związanych z produktami lub usługami i opuszczają witrynę w przypadku braku odpowiedzi. Dlatego wsparcie czatu na żywo pomaga powitać swoich klientów pro-aktywnie podczas przechodzenia przez Twoją witrynę. Lub, jeśli potrzebują pomocy i wyjaśnień, aby podejmować decyzje dotyczące zakupu.
Wsparcie czatu na żywo zwiększa szansę przekształcenia gościa w klienta. Dostępnych jest wiele oprogramowania do czatu na żywo  **na żywo**  e. Ale Rocket.chat zyskał wiele atrakcji ze względu na swoje cechy. Jest to traktowane jako alternatywa dla wiodącego w branży oprogramowania czatu, takiego jak Slack i Microsoft Team. W tym artykule dowiemy się, jak instalować Rocket.chat na serwerze, a następnie jak skonfigurować go na swojej stronie internetowej. Zacznijmy więc od pokrycia następujących punktów.
* [  **Co to jest Rocket.cha**  t?][3]
*  **[Jak zainstalować Rocket.Chat?anek dotyczącą**  
*  **[Włącz funkcję czatu na żywo][5]**  
*  **[Zainstaluj widżet czatu na żywo na swojej stronie][6]**  
*  **[wniosek][7]**  

## Co to jest rocket.chat {#intro}

[Rocket.chat][8] jest jednym z popularnego  **oprogramowania czatu na żywo** . Ma bezpłatną wersję czatu na żywo jako edycję społeczności, a także płatną hostowaną wersję czatu na żywo dla dużych firm z prywatnymi funkcjami czatu wewnętrznego. Rocket.chat obsługuje obsługę klienta czatu na żywo wraz z funkcją czatu zespołowego. Jest to międzyplatformowe i oferuje obsługę prawie wszystkich popularnych platform, takich jak aplikacje Windows, Mac, Linux i Mobile. To **oprogramowanie do obsługi klienta**  jest bezpieczne, rozszerzalne i oferuje integrację z popularnymi aplikacjami stron trzecich, takimi jak Trello, Google Drive i wiele innych. Istnieje wiele potężnych funkcji, które oferuje Rocket.Chat, takie jak wiele pokoi, prywatne czaty i grupy, powiadomienia, emoji, uwierzytelnianie LDAP i interfejs RESTful. Ponadto to bezpłatne narzędzie jest łatwe do wdrożenia i ma możliwości samodzielne. Ponadto oferuje logiczny i przyjazny dla użytkownika interfejs, w którym użytkownicy mogą modyfikować motywy, takie jak ciemność, światło lub czarny.
To  **oprogramowanie do obsługi czatu**  jest napisane w JavaScript, całą dokumentację jest dostępna w odniesieniu do rozwoju i wdrażania. Dlatego można znaleźć cały kod źródłowy na [github][9]. Aby uzyskać więcej informacji, możesz przeczytać o rocket.chat [tutaj][10].

## Jak zainstalować Rocket.Chat {#install}

Wiemy więc, co to jest rocket.chat i w tej sekcji nauczymy się instalować to oprogramowanie do czatu na żywo. Możesz zainstalować Rocket.Chat z różnych rynków, takich jak Ubuntu Snaps, DockerHub lub zainstalować go na własnym serwerze. W tym artykule skupimy się na instalacji Rocket.Chat za pośrednictwem Snaps na Ubuntu. Co jest najszybszą metodą instalacji.
Zaręcze są bezpieczne. Rocket.chat i wszystkie jego zależności są odizolowane od reszty twojego systemu. Snaps również automatycznie aktualizuje się, gdy pojawia się nowa wersja.
Najpierw na Ubuntu zainstaluj Snap za pomocą następującego polecenia
```
sudo apt-get install snapd
```
Następnie zainstaluj serwer Rocket.Chat za pomocą polecenia SNAP.
```
sudo snap install rocketchat-server
```
Snap jest już uruchomiony. Przejrzyj do http: // localhost: 3000 i skonfiguruj Rocket.Chat. Możesz skonfigurować proxy Nginx do mapowania instancji Rocket.Chat z domeną.

## Włącz funkcję czatu na żywo {#enable}

Po zainstalowaniu i skonfigurowaniu oprogramowania Rocket.Chat następnym krokiem jest włączenie jego funkcji. W tej sekcji postu na blogu opisano, jak włączyć oprogramowanie do obsługi czatu**na swojej stronie internetowej. Aby włączyć funkcję LiveChat na instancji Rocket.Chat:
1. Przejdź do  **Administracja**  

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Administration">}}

2. Wyszukaj „  **Omnichannel** ” w **Ustawienia**  i włącz.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.chat Search Omini">}}

Po włączeniu administrator będzie miał dostęp do ustawień panelu Omnichannel za pomocą nowego menu o nazwie Omnichannel w lewym górnym rogu menu rozwijanym.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini Channel">}}

A następnie skonfiguruj wygląd widżetu czatu na żywo

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.chat LiveChat Widżet">}}


##  **Zainstaluj widżet czatu na żywo na swojej stronie**  {#widget}

W tej sekcji zainstalujemy widżety czatu na żywo na stronie internetowej firmy. Teraz, aby uzyskać dostęp do  **instalacji LiveChat**  Ustawienia:
Przejdź do  **instalacja LiveChat**  w ustawieniach panelu Omnichannel, jak pokazano poniżej, i skopiuj dany kawałek kodu.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Rocket.chat Widżet">}}

I wklej ten kod powyżej ostatniego znacznika na swojej stronie; Widżet czatu na żywo pojawi się w prawym dolnym rogu Twojej strony. Jak pokazano poniżej zgodnie z konfiguracją czatu na żywo.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Oprogramowanie czatu na żywo">}}

{{_LINE_48_}}

## Wniosek {#conclusion}

To prowadzi nas do końca tego postu na blogu. W tym artykule przeszliśmy przez Rocket.chat, jak zainstalować Rocket.chat, a także pokazaliśmy, jak zainstalować go na własnym serwerze za pośrednictwem Ubuntu Snaps. Nauczyliśmy się również, jak włączyć funkcję czatu na żywo i zainstalować widżet na swojej stronie internetowej. Ponadto  **Oprogramowanie do obsługi klienta** stało się obowiązkowym elementem każdej witryny biznesowej ze względu na pewne czynniki, które omówiliśmy powyżej. Jednak ten post na blogu naprawdę pomoże Ci, jeśli chcesz wdrożyć oprogramowanie do czatu na żywo open source na stronie internetowej firmy. Ponadto istnieje wiele innych **oprogramowania do obsługi czatu**  i artykuły dostępne w sekcji „Explore” poniżej, które możesz sprawdzić.
Wreszcie, [  **Containerize.com** ][11] pisze artykuły na temat dalszych aplikacji na czacie open source **Open Source Chat.**  Dlatego pozostań w kontakcie z kategorią [Live Chat][12] w celu regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][13], [LinkedIn][14] i [Twitter][15].

## Badać
Możesz znaleźć istotne następujące linki.
  * [Zulip][16]
  * [Pozwala na to][17]
  * [Botpress][18]
  * [Jak utworzyć bot FAQ oparty na AI dla swojej firmy za pomocą BotPress][19]
  * [Top 5 bezpłatnych oprogramowania do czatu obsługi klienta dla strony internetowej][1]
  * [WordPress Instant Messaging za pomocą rocket.chat][2]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][20]
  * [Jak utworzyć i uruchomić bot w Rocket.Chat za pomocą BotPress][21]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][20]



[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
