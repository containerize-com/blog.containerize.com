---
title: "Integrar Mautic & Joomla para automação de marketing digital '" 
seoTitle: "Integrar Mautic & Joomla para automação de marketing digital" 
description: "A integração mautica e joomla pode ajudar sua empresa com a automação de marketing digital. Ajuda a comercializar produtos por meio de campanhas mautas." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "A integração mautica e joomla pode ajudar sua empresa com a automação de marketing digital. Ajuda a comercializar produtos por meio de campanhas mauticas on -line." 
url: /pt/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

A integração Mautic e Joomla pode ajudar sua empresa com a automação de marketing digital. Ajuda a comercializar produtos por meio de campanhas mauticas on -line.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Integração mautica e joomla">}}


## Como essa integração pode ajudar seu negócio:
A integração Mautic e Joomla permitirá que você comercialize seus produtos/serviços de maneira muito fácil, mas eficiente. Mautic Uma solução de marketing de código aberto gratuito oferece um ótimo controle sobre as campanhas de marketing e é muito simples continuar a campanha de gotejamento de acordo com a situação. Por exemplo: fornece as informações de que, se o cliente leu o email ou visitou suas páginas de produto. Usando essas informações, você pode configurar campanhas para decidir se continuará enviando os próximos e -mails para esse cliente ou não. Essa integração ajudará na automação de marketing digital. Esta postagem do blog o guiará com as seguintes seções:
  * [Visão geral][1]
  * [Instalação do plugin Joomla][2]
  * [Configuração Mautic][3]
  * [Conclusão][4]

## Visão geral: {#overview}
A Mautic é um sistema de automação de marketing de código aberto. É um software de marketing gratuito. Você pode usá -lo para criar campanhas ilimitadas para enviar e -mails de marketing para clientes -alvo.
A Joomla também é um sistema de gerenciamento de conteúdo de código aberto gratuito para o desenvolvimento de sites. É muito fácil configurar seus sites de negócios no Joomla. Possui milhares de extensões que podem ser usadas de acordo com seus requisitos.

## Joomla Plugin Instalação: {#plugin}
  * Faça o download do [plugin][5].
  * Em seguida, vá para extensões -> Gerenciar -> Instalar.
  * Digite URL mautico.
  * Ele inserirá 1 imagem PX GIF carregada na sua instância mautica.
  * Incorporar formulários no conteúdo de joomla usando o seguinte snippet de código: {mautic type = "form" id}
  * Então você pode criar o formulário em seu aplicativo mautico e obter o ID do URL.
  * O conteúdo dinâmico também pode ser adicionado usando o seguinte snipp de código: {mautic type = "content" slot = "slot_name"} conteúdo padrão aqui. {/Mautic}
  * Slot_name é o identificador do slot que você especificou ao adicionar uma decisão de "Conteúdo dinâmico de solicitar" à sua campanha.
Após a instalação, você precisa criar e incorporar formulários no seu site Joomla. Esses formulários enviarão as informações de contatos para a Mautic. Depois de terminar de configurar o plug -in no Joomla, o próximo passo será configurá -lo no Mautic.

## Configuração Mautic: {#Mautic}
  * Vá para o seu site mautico, vá para as configurações.
  * Clique na configuração.
  * A partir de configurações da API, ative a API.
  * Para conectar o Mautic ao Joomla, você deve ter certificado SSL em seus sites.
  * Em seguida, você precisa ir às credenciais da API.
  *Se o seu site não tiver um SSL (então você for para ** http **: //yourjoomlasite.com), selecione OAuth1. Se você possui um SSL no seu site (então você vai para ** https **: //yourjoomlasite.com), selecione OAuth2.
  * Clique em Novo, forneça um nome (pode ser o que você quiser) e o URL completo do seu Joomla! Site ([https://yourjoomlasite.com][6])
  * Clique em Salvar e fechar.
  * Aqui você pode obter chaves públicas e privadas.
  * Vá para o seu site Joomla e encontre o plug -in mautico que você instalou anteriormente.
  * Digite chaves públicas e secretas que você criou no seu site mautico.
  * Selecione OAuth1 ou OAuth2 (o mesmo que você selecionou no Mautic) e defina usuários de envio para sim.
  * Salve e publique o plug -in.
  * Depois disso, você poderá autorizar seu site Joomla.
  * Joomla reaparecerá para a instância mautica para a autorização.
  * Clique em "Autorizar" e é isso.
  * Você começará a obter contatos em seu site mautico.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Integração mautica e joomla">}}


## Conclusão: {#conclusion}
Neste artigo, discutimos como o Mautic e o Joomla juntos podem ajudar na automação de marketing digital. Esta solução de marketing gratuita de código aberto permitirá agrupar todos os contatos provenientes do site da Joomla e criar campanhas de marketing usando-as. A Mautic permite criar segmentos, para que você possa executar campanhas diferentes em diferentes segmentos de acordo com suas necessidades. Por favor, verifique [Joomla][7] e [Mautic][8] Blogs para obter uma visão geral detalhada.

## Explore:
Você pode encontrar links a seguir relevantes:
  * [Joomla][7]
  * [Mautic][8]
  * [Como configurar Mautic - Integração do Facebook][9]
  * [Integração mautica do Drupal para automatizar a nutrição de chumbo][10]
  * [Automação de marketing usando woocommerce mautic e wordpress][11]
  * [Como configurar campanhas de marketing no Mautic][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
