---
title: "Como configurar Mautic - Integração do Facebook" 
seoTitle: "Como configurar Mautic - Integração do Facebook" 
description: "Mautic - A integração do Facebook pode ajudar a sincronizar seus leads do Facebook no sistema mautico sem nenhuma dificuldade e depois usá -los em campanhas de marketing." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "O Fetch Facebook leva ao Mautic, adicione contatos em um segmento e execute campanhas de email. Também use esses contatos para criar público personalizado para anúncios do Facebook." 
url: /pt/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook leva ao Mautic, adicione contatos em um segmento e execute campanhas de e -mail. Também use esses contatos para criar público personalizado para anúncios do Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Como configurar Mautic - Integração do Facebook">}}

A Mautic é um software de automação de marketing e fornece controle total sobre e -mails de marketing, páginas de destino e fluxos de trabalho para atividades de marketing. As campanhas de gotejamento da Mautic ajudam a envolver o público -alvo e mantê -las atualizadas sobre seus produtos. A Mautic Facebook Integration fornece uma maneira de novos leads serem adicionados ao Mautic. Com essa integração mautica - o Facebook, os leads da sua campanha no Facebook serão adicionados automaticamente ao Mautic.
Abordaremos as seguintes seções neste tutorial:
  * [Configurar conta do desenvolvedor do Facebook][1]
  * [Configurar o aplicativo do desenvolvedor do Facebook][2]
  * [Configuração do plug -in mautic][3]
  * [Conclusão][4]

## Configure a conta do desenvolvedor do Facebook {#account}

  * Vá para [Facebook para desenvolvedores][5]
  * Registre sua conta se você não tiver uma.
  * Para registrar uma nova conta, vá e clique em "Comece" no canto superior direito.
  * Depois disso, selecione sua conta do Facebook e pressione "Continue".
  * Então, na janela pop -up, clique no botão "Developer".

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Facebook Integration - Register Developer Conta">}}


## Configure o aplicativo do desenvolvedor do Facebook {#app}

  * Clique em "Criar primeiro aplicativo"

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Integração do Facebook - Crie o primeiro aplicativo">}}

  * Clique em "Gerenciar integrações de negócios" e pressione "Continue".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Integração do Facebook - Escolha propósito">}}

  * Na próxima janela, insira o nome do aplicativo e selecione o APP Foury. Clique no botão "Criar aplicativo".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Facebook Integration - Preencha o formulário para criar aplicativo">}}

  * O próximo passo é configurar o login do Facebook. Na página Produtos, clique no botão "Configurar" na caixa "Login do Facebook".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Integração do Facebook - Configuração do FB Login">}}

  * No menu esquerdo, clique em "Configurações" em Produtos -> Login do Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Integração do Facebook - Configure o login do FB">}}

  * Digite o URL do seu site mautico. Defina o "Client OAuth Login" e "Login do Web Oauth" como "Sim".
  * Agora vá para Configurações -> Configurações básicas. Na parte inferior da página, clique no botão "+ Adicionar plataforma". Depois disso, uma janela pop -up será aberta. Digite o URL do seu site e salve as alterações.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Integração do Facebook - Adicionar site como plataforma">}}


## Configuração do plug -in mautic {#configuration}

  * Vá para o painel mautico.
  * Em seguida, vá para “Configurações” do canto superior direito.
  * Clique em "Plugins".
  * Depois disso, abra as configurações do plug -in "Facebook".
  * Em seguida, digite o ID do cliente e o segredo do cliente. Obtenha essas chaves do aplicativo de desenvolvedores do Facebook que você acabou de criar seguindo as etapas acima.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Integração do Facebook - Configure o plugin FB no Mautic">}}

  * Pressione o botão "Autorize App".
  * Depois disso, uma nova janela de autorização do Facebook será aberta. Siga os avisos para concluir a autorização do aplicativo.
  * Após a autorização bem -sucedida, vá para a guia "Entre em contato com o mapeamento" do plug -in do Facebook da Mautic.
  * Aqui você pode mapear seus campos de contato para os campos do Facebook.
  * Finalmente, publique as configurações e você estará pronto.

## Conclusão {#conclusion}

Mautic - a integração do Facebook pode ajudar a sincronizar seus líderes no Facebook no sistema mautico sem nenhuma dificuldade. No aplicativo Mautic, você pode adicionar todos esses leads a um segmento. Você pode executar campanhas de marketing por e -mail nelas. Isso pode realmente ajudar sua empresa a crescer, comercializar e vender produtos/serviços para um público -alvo muito maior.

## Explore
Para saber mais sobre Mautic e Facebook, visite:
  * [Mautic | Plataforma de tecnologia de marketing de conteúdo de código aberto][6]
  * [Como configurar campanhas mauticas usando o construtor de campanhas][7]
  * [Integração mautica do Drupal para automatizar a nutrição de chumbo][8]
  * [Automação de marketing com integração Mautic e WooCommerce][9]
  * [Integre Mautic & Joomla para Automação de Marketing Digital][10]



[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
