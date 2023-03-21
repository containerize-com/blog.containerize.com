---
title: "Przewodnik krok po kroku, aby skonfigurować Jitsi Spotkanie" 
seoTitle: "Przewodnik krok po kroku, aby skonfigurować Jitsi Spotkanie" 
description: "Dowiedz się, jak skonfigurować spotkanie Jitsi. Jest to oprogramowanie do wideokonferencji typu open source zaprojektowane w celu zaspokojenia potrzeb zdalnych i oferuje potężne funkcje" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet łączy odległych ludzi, aby przeprowadzić skuteczne spotkania. Dowiedz się, jak skonfigurować to oprogramowanie do konferencji wideo i zbadać jego funkcje" 
url: /pl/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet łączy odległych ludzi, aby przeprowadzić skuteczne spotkania. Nauczmy się skonfigurować oprogramowanie do konferencji wideo i zbadać jego funkcje

{{< figure align=center src="images/jitsi-bannerF.png" alt="Oprogramowanie do konferencji wideo">}}


## Przegląd
Niedawno opublikowaliśmy [post na blogu][1], który mówi o wpływie [oprogramowania do wideokonferencji][2] na sektor korporacyjny. Jednak w tym artykule omówimy następujące punkty.
  * [Krótkie wprowadzenie Jitsi Meet][3]
  * [Jak skonfigurować Jitsi Meet?][4]
  * [Jitsi Meet Features Exploration][5]
  * [Wniosek][6]

## Krótkie wprowadzenie Jitsi Meet   {#intro}
[Jitsi Meet][7] to całkowicie bezpłatne oprogramowanie do współpracy wideo typu open source, bezpieczne i skalowalne. Zapewnia kilka popularnych funkcji, takich jak wielopartyjne wideokonferencje z pełnym szyfrowaniem, obsługą ETHERPAD i nagrywanie wideo/audio. To oprogramowanie kompatybilne WEBRTC pozwala zaprosić tyle użytkowników, ile chcesz na spotkanie wideo.
Wzrost wirtualnych spotkań rozpoczął się w ostatnim czasie, a ludzie uważają, że komunikacja za pośrednictwem połączeń wideo/audio jest bardziej skuteczna i współpracująca. Przede wszystkim ta kategoria oprogramowania działa nie tylko na laptopach/komputerach stacjonarnych, ale także umożliwia uczestnikom uczestnictwo w twarz w obliczu zabezpieczonych spotkań wideo za pośrednictwem telefonu komórkowego.

## Jak skonfigurować spotkanie Jitsi?   {#organizować coś}
W tej sekcji przejdziemy do procesu instalacji Jitsi Meet. Najpierw upewnij się, że zainstalowałeś następujące warunki wstępne.
  * [Docker][8]
Po zainstalowaniu Docker pobierz plik zip kodu źródłowego z tego [link][9].
Otwórz terminal i uruchom następujące polecenie
`CD Docker-jitsi-Meet '
Następnie uruchom następujące polecenie, aby utworzyć „.env”
`cp env.example .env`
Teraz uruchom następujące polecenie, aby utworzyć wymagane katalogi.
`mkdir -p ~/.jitsi-meet-cfg/{Web/LetsEncrypt, transkrypty, prozodia/config, prosody/prosody-plugins-custom, jicofo, jvb, jigasi, jibri}` `
Na koniec uruchom to polecenie, aby zwrócić obraz Docker i uzyskać dostęp do aplikacji w tym adresie URL w przeglądarce.
`` Docker -Compose Up -D '

## Jitsi Meet Features Exploration   {#Features}
To bezpłatne oprogramowanie do czatu wideo oferuje wiele bogatych funkcji. To jest strona główna, która zostanie pokazana jako pierwsza.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="Konferencje wideo">}}

Wpisz podpis spotkania i naciśnij „Go”, a wylądujesz do następującego okna strumienia wideo.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="Oprogramowanie open source">}}

Możesz zaprosić ludzi na spotkanie, udostępniając link pokazany w oknie wyskakującym. Ponadto możesz osadzić strumień wideo w dowolnym miejscu, otrzymując kod.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="Oprogramowanie open source">}}

Daje to możliwość udostępnienia ekranu innym uczestnikom.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Czat wideo">}}

W prawym górnym rogu możesz zobaczyć szczegóły swojego połączenia wideo.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Darmowy czat wideo">}}

Jitsi Meet oferuje zintegrowane czat z emoji.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Oprogramowanie do spotkania wideo">}}


## Wniosek   {#Con}
W tym artykule przeszliśmy oszałamiające oprogramowanie do zdalnej komunikacji i jego proces instalacji. Ponadto najwyższy czas zdecydować o najlepszych rozwiązaniach, aby zsynchronizować potrzeby biznesowe z ewoluującymi technologiami. Ostatecznie [Containerize.com][10] pracuje nad rozszerzeniem listy oprogramowania do konferencji wideo. Dlatego proszę pozostać w kontakcie z kategorią [oprogramowanie do konferencji wideo][2] w celu regularnych aktualizacji.

## odpowiednie strony produktów
Możesz znaleźć istotne następujące linki:
  * [Jitsi Meet][7]
  * [BigBlueButton][11]
  * [Openvidu][12]
  * [Element][13]
  * [Wire][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
