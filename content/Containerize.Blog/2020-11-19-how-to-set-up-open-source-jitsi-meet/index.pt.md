---
title: "Um guia passo a passo para configurar o jitsi de código aberto" 
seoTitle: "Um guia passo a passo para configurar o jitsi de código aberto" 
description: "Aprenda a configurar Jitsi Meet. É um software de videoconferência de código aberto projetado para atender às necessidades de comunicação remota e oferece recursos poderosos" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet reúne pessoas remotas para realizar reuniões eficazes. Vamos aprender a configurar este software de videoconferência e explorar seus recursos" 
url: /pt/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

O Jitsi Meet reúne pessoas remotas para realizar reuniões eficazes. Vamos aprender a configurar este software de videoconferência e explorar seus recursos

{{< figure align=center src="images/jitsi-bannerF.png" alt="Software de videoconferência">}}


## Visão geral
Recentemente, publicamos uma [postagem do blog][1] que fala sobre o impacto do [software de videoconferência][2] no setor corporativo. No entanto, neste artigo, abordaremos os seguintes pontos.
  * [Uma breve introdução de Jitsi Meet][3]
  * [Como configurar Jitsi Meet?][4]
  * [Jitsi atende aos recursos Exploration][5]
  * [Conclusão][6]

## Uma breve introdução de jitsi me encontre   {#intro}
[Jitsi Meet][7] é um software de colaboração de vídeo em código aberto completamente gratuito, seguro e escalável. Ele fornece vários recursos populares, como videoconferência multipartidária com criptografia completa, suporte para Etherpad e gravação de vídeo/áudio. Este software compatível com o WebRTC permite convidar quantos usuários desejar para uma reunião de vídeo.
A ascensão das reuniões virtuais começou nos últimos tempos e as pessoas acreditam que a comunicação por meio de chamadas de vídeo/áudio é mais eficaz e colaborativa. Acima de tudo, essa categoria de software não apenas funciona em laptops/desktops, mas também permite que os participantes participem de reuniões de vídeo seguras de frente para o seu telefone celular.

## Como configurar Jitsi se encontrar?   {#configurar}
Nesta seção, entraremos no processo de instalação do Jitsi Meet. Primeiro, verifique se você instalou o seguinte pré-requisito.
  * [Docker][8]
Quando o Docker estiver instalado, faça o download do arquivo zip do código -fonte deste [link][9].
Abra o terminal e execute o seguinte comando
`CD Docker-jitsi-meet`
Depois disso, execute o seguinte comando para criar um `.env`
`cp Env.Example .env`
Agora, execute o seguinte comando para criar os diretórios necessários.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt, transcrições, prosody/config, prosody/prosody-plugins-custom, jicofo, jvb, jigasi, jibri}`
Por fim, execute este comando para girar a imagem do Docker e acessar o aplicativo neste URL no navegador.
`Docker -compose up -d

## jitsi atende recursos exploração   {#features}
Este software de bate -papo por vídeo gratuito oferece muitos recursos ricos. Esta é a página inicial que será mostrada primeiro.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="vídeo conferência">}}

Digite a legenda da reunião e acesse "Go" e você chegará à seguinte janela do fluxo de vídeo.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="software livre">}}

Você pode convidar as pessoas para a reunião compartilhando o link mostrado na janela pop -up. Além disso, você pode incorporar o fluxo de vídeo em qualquer lugar, obtendo o código.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="software livre">}}

Ele oferece opção para compartilhar sua tela com outros participantes.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Bate -papo por vídeo">}}

No canto superior direito, você pode ver os detalhes da sua conexão de vídeo.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Chat de vídeo grátis">}}

Jitsi Meet Offers Chat integrado com emojis.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Software de reunião de vídeo">}}


## Conclusão   {#con}
Neste artigo, passamos por um impressionante software de comunicação remota e seu processo de instalação. Além disso, é hora de optar pelas melhores soluções para sincronizar as necessidades de negócios com as tecnologias em evolução. No final, [containerize.com][10] está trabalhando para estender a lista de software de videoconferência. Portanto, mantenha -se conectado com a categoria [Software de videoconferência][2] para atualizações regulares.

Páginas de produto relevantes
Você pode encontrar os seguintes links relevantes:
  * [Jitsi Meet][7]
  * [Bigbluebutton][11]
  * [OpenVidu][12]
  * [Elemento][13]
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
