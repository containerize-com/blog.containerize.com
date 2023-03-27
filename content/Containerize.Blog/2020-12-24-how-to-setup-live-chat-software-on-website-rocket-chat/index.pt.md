---
title: "Como configurar o software de bate -papo ao vivo no site | Rocket.Chat" 
seoTitle: "Como configurar o software de bate -papo ao vivo no site | Rocket.Chat" 
description: "O Rocket.Chat é fácil de configurar, ajuda equipes e clientes a se comunicarem com eficiência. Este software de bate-papo ao vivo é de código aberto, de plataforma cruzada e auto-hospedada." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "O software de suporte ao bate -papo ao vivo traz conveniência e eficiência no fornecimento de suporte ao cliente. Vamos aprender a instalar o Rocket.chat no site da sua empresa." 
url: /pt/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

O software de suporte ao bate -papo ao vivo traz conveniência e eficiência no fornecimento de suporte ao cliente. Vamos aprender a instalar o Rocket.Chat no site da sua empresa.

{{< figure align=center src="images/rocketchat-1.png" alt="Software de bate -papo ao vivo">}}


## Visão geral
Publicamos algumas postagens de blog relacionadas ao software de bate -papo ao vivo de código aberto, como [5 principais softwares de chat de suporte ao cliente gratuito para o site][1], [WordPress Instant Messaging usando Rocket.chat][2] e um pouco mais. Nesta postagem do blog, examinaremos o principal software de suporte ao cliente Rocket.Chat. Com o enorme aumento no tráfego on -line, as empresas acham difícil receber um grande número de consultas a tempo. Os visitantes vêm ao seu site, tendem a adquirir algumas informações relacionadas aos produtos ou serviços e deixam seu site em caso de receber resposta. Portanto, o suporte ao bate-papo ao vivo ajuda a cumprimentar seus clientes de maneira providente enquanto eles estão passando pelo seu site. Ou, caso eles precisem de ajuda e esclarecimento para tomar suas decisões de compra.
O suporte ao bate -papo ao vivo aumenta a chance de converter um visitante em um cliente. Existem muitos softwar de suporte ao vivo  **de suporte ao vivo**  e disponíveis. Mas, o Rocket.Chat ganhou muita atração por causa de seus recursos. E está sendo tratado como uma alternativa ao software de bate-papo líder do setor, como o Slack e a Microsoft Team. Neste artigo, aprenderemos a instalar o Rocket.chat em um servidor e depois configurá -lo em seu site. Então, vamos começar cobrindo os seguintes pontos.
* [  **O que é Rocket.cha**  t?][3]
***[Como instalar o Rocket.chat?
*  **[Enable Live Chat Recurso][5]**  
*  **[Instale o widget de bate -papo ao vivo no seu site][6]**  
*  **[Conclusão][7]**  

## O que é Rocket.Chat {#intro}

[Rocket.chat][8] está entre o popular software de bate -papo ao vivo  **. Ele possui uma versão gratuita de bate -papo ao vivo como uma edição da comunidade, bem como uma versão paga de bate -papo ao vivo hospedado para grandes empresas com recursos privados de bate -papo interno. O Rocket.Chat suporta suporte ao cliente de bate -papo ao vivo junto com o recurso de bate -papo da equipe. É uma plataforma cruzada e oferece suporte para quase todas as plataformas populares, como Windows, Mac, Linux e aplicativos móveis. Este**  software de suporte ao cliente**é seguro, extensível e oferece integração com aplicativos populares de terceiros, como Trello, Google Drive e muito mais. Existem muitos recursos poderosos que o Rocket. Além disso, essa ferramenta gratuita é fácil de implantar e vem com recursos de auto-hospedagem. Além disso, oferece uma interface lógica e fácil de usar, onde os usuários podem modificar os temas como escuro, claro ou preto.
Este  **software de suporte de bate -papo**  está escrito no JavaScript, toda a documentação está disponível em relação ao desenvolvimento e implantação. Portanto, você pode encontrar todo o código -fonte no [Github][9]. Para mais detalhes, você pode ler sobre o Rocket.chat [aqui][10].

## Como instalar o Rocket.chat {#install}

Então, sabemos o que é Rocket.Chat e nesta seção, aprenderemos a instalar este software de bate -papo ao vivo. Você pode instalar o Rocket.Chat a partir de uma variedade de mercados, como Snaps Ubuntu, DockerHub ou instalá -lo em seu próprio servidor. Neste artigo, focaremos na instalação do Rocket.Chat via Snaps no Ubuntu. Que é o método mais rápido de instalação.
Snaps são seguros. Rocket.Chat e todas as suas dependências são isoladas do restante do seu sistema. Snaps também atualizam automaticamente quando há uma nova versão.
No Ubuntu primeiro, instale o Snap com o seguinte comando
```
sudo apt-get install snapd
```
Em seguida, instale o servidor Rocket.chat via comando snap.
```
sudo snap install rocketchat-server
```
O Snap já está em funcionamento. Navegue para http: // localhost: 3000 e configure o Rocket.chat. Você pode configurar o proxy nginx para mapear a instância do Rocket.Chat com seu domínio.

## Habilitar recurso de bate -papo ao vivo {#enable}

Depois que o software Rocket.Chat é instalado e configurado, a próxima etapa é ativar seus recursos. Esta seção da postagem do blog descreve como ativar o software de suporte de bate -papo**no seu site. Para habilitar o recurso LiveChat em sua instância Rocket.Chat:
1. Vá para  **Administração**  

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Administration">}}

2. Pesquise ‘  **Omnichannel**  ‘ nas configurações****e habilite.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Search Omini">}}

Uma vez ativado, um administrador terá acesso às configurações do Painel Omnichannel por meio de um novo menu chamado Omnichannel no menu suspenso do canto superior esquerdo.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini Channel">}}

E depois configure a aparência e a sensação do widget de bate -papo ao vivo

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat LiveChat Widget">}}


##  **Instale o widget de bate -papo ao vivo no seu site**  {#widget}

Nesta seção, instalaremos widgets de bate -papo ao vivo no site de negócios. Agora, para acessar  **Instalação do LiveChat**  Configurações:
Vá para  **Instalação do LiveChat**  nas configurações do painel Omnichannel, como mostrado abaixo, e copie a parte do código fornecido.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Widget Rocket.Chat">}}

E cole este código acima da última tag do seu site; O widget de bate -papo ao vivo aparecerá no canto inferior direito da sua página da web. Conforme mostrado abaixo, conforme suas configurações de bate -papo ao vivo.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Software de bate -papo ao vivo">}}

{{_LINE_48_}}

## Conclusão {#conclusion}

Isso nos leva ao final deste post do blog. Neste artigo, passamos pelo que é Rocket.Chat, como instalar o Rocket.Chat e também mostramos como instalá -lo em seu próprio servidor por meio do Ubuntu Snaps. Também aprendemos a ativar o recurso de bate -papo ao vivo e instalar o widget em seu site. Além disso,  **Software de suporte ao cliente**  tornou-se um componente obrigatório de qualquer site de negócios devido a certos fatores que discutimos acima. No entanto, esta postagem do blog realmente o ajudará se você deseja implantar um software de bate -papo ao vivo de código aberto no site da sua empresa. Além disso, existem muitos outros softwares de suporte de bate -papo**e artigos disponíveis na seção "Explorar" abaixo que você pode conferir.
Finalmente, [  **containerize.com**  ][11] está escrevendo artigos sobre aplicativos de bate -papo de código aberto adicionais**. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Explore
Você pode encontrar os seguintes links relevantes.
  * [Zulip][16]
  * [Lets-Chat][17]
  * [Botpress][18]
  * [Como criar um Bot de Perguntas frequentes baseado em IA para o seu negócio usando Botpress][19]
  * [Software de chat de suporte gratuito ao cliente gratuito para o site][1]
  * [Mensagens instantâneas do WordPress usando Rocket.chat][2]
  * [Automatize operações comerciais usando software de código aberto e gratuito][20]
  * [Como criar e executar um bot no Rocket.Chat usando Botpress][21]
  * [Automatize operações comerciais usando software de código aberto e gratuito][20]



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
