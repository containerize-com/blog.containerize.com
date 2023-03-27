---
title: "Una guida passo passo per impostare il incontro di jitsi open source" 
seoTitle: "Una guida passo passo per impostare il incontro di jitsi open source" 
description: "Scopri come impostare Jitsi Meet. È un software di videoconferenza open source progettato per soddisfare le esigenze di comunicazione remota e offre funzionalità potenti" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet riunisce persone remote per condurre riunioni efficaci. Impariamo come impostare questo software di videoconferenza ed esplora le sue funzionalità" 
url: /it/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## JITSI Meet riunisce persone remote per condurre riunioni efficaci. Impariamo come impostare questo software di videoconferenza ed esplora le sue funzionalità

{{< figure align=center src="images/jitsi-bannerF.png" alt="software di videoconferenza">}}


Panoramica ##
Di recente abbiamo pubblicato un [post sul blog][1] che parla dell'impatto di [software di videoconferenza][2] sul settore aziendale. Tuttavia, in questo articolo, tratteremo i seguenti punti.
  * [Una breve introduzione di Jitsi Meet][3]
  * [Come impostare JITSI MEET?][4]
  * [JITSI METTURA ESPLORAZIONE DI FATTERE][5]
  * [Conclusione][6]

## Una breve introduzione di Jitsi Meet {#intro}

[JITSI MEET][7] è un software di collaborazione video open source, sicuro e scalabile completamente gratuito. Fornisce diverse funzionalità popolari come videoconferenza multiparty con crittografia completa, supporto per EtherPad e registrazione video/audio. Questo software compatibile WebRTC ti consente di invitare tutti gli utenti che desideri in una riunione video.
L'ascesa delle riunioni virtuali è iniziata negli ultimi tempi e le persone credono che la comunicazione attraverso le chiamate video/audio sia più efficace e collaborativa. Soprattutto, questa categoria di software non funziona solo su laptop/desktop, ma consente anche ai partecipanti di partecipare alle riunioni video garantite faccia a faccia tramite il proprio telefono cellulare.

## Come impostare Jitsi Meet? {#setup}

In questa sezione, entreremo nel processo di installazione di JITSI. Innanzitutto, assicurati di aver installato il seguente prerequisito.
  * [Docker][8]
Una volta installato Docker, scarica il file zip del codice sorgente da questo [link][9].
Apri il terminale ed esegui il comando seguente
`CD Docker-Jitsi-Meet`
Dopodiché, esegui il seguente comando per creare un `.env`
`cp env.example .env`
Ora, esegui il comando seguente per creare le directory richieste.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt, trascrizioni, prosody/config, prosody/prosody-plugins-custom, jicofo, jvb, jigasi, jibri}`
Infine, esegui questo comando per far girare l'immagine Docker e accedere all'applicazione su questo URL nel browser.
`Docker -compose -d`

## Jitsi incontra l'esplorazione delle funzionalità {#features}

Questo software di chat video gratuito offre molte funzionalità ricche. Questa è la home page che verrà mostrata per prima.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="videoconferenza">}}

Digita la didascalia dell'incontro e premi "Go" e atterrerai alla seguente finestra del flusso video.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="software open source">}}

Puoi invitare le persone alla riunione condividendo il link mostrato nella finestra popup. Inoltre, puoi incorporare il flusso video ovunque ottenendo il codice.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="software open source">}}

Ti dà la possibilità di condividere lo schermo con altri partecipanti.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Chat video">}}

Dall'angolo in alto a destra, puoi vedere i dettagli della tua connessione video.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Chat video gratuita">}}

JITSI incontra le offerte di chat integrata con gli emoji.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Software di incontro video">}}


## Conclusione {#con}

In questo articolo, abbiamo esaminato uno straordinario software di comunicazione remoto e il suo processo di installazione. Inoltre, è giunto il momento di optare per le migliori soluzioni per sincronizzare le esigenze aziendali con le tecnologie in evoluzione. Alla fine, [containerize.com][10] ha lavorato per estendere l'elenco del software di videoconferenza. Pertanto, rimanete in contatto con la categoria [software di videoconferenza][2] per aggiornamenti regolari.

## pagine di prodotto pertinenti
Potresti trovare i seguenti collegamenti pertinenti:
  * [JITSI MEET][7]
  * [BigblueButton][11]
  * [OpenVidu][12]
  * [Elemento][13]
  * [Filo][14]



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
