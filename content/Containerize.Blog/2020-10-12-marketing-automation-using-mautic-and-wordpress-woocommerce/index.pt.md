---
title: "Automação de marketing com integração Mautic e WooCommerce" 
seoTitle: "Automação de marketing com integração Mautic e WooCommerce" 
description: "A integração mautica e wooCommerce permite enviar informações de contato de sites do WordPress para Mautic. Isso ajuda a comercializar produtos através do aplicativo Mautic." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Passar vendas usando o WordPress WooCommerce juntos. Automatize o processo de marketing buscando os dados dos clientes do WordPress para Mautic." 
url: /pt/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## possui vendas usando o WordPress e o WordPress WooCommerce juntos. Automatize o processo de marketing buscando os dados dos clientes do WordPress para Mautic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Automação de marketing usando integração mautic-woocommerce">}}


## Visão geral:
A integração mautic-woocommerce fornece uma maneira fácil de obter todos os contatos no aplicativo Mautic. Em seguida, usando esses contatos, você pode criar campanhas de marketing de acordo com seus requisitos. A Mautic é uma ótima ferramenta de marketing que oferece controle total em suas campanhas de marketing.
A Mautic é uma solução de automação de marketing de código aberto e gratuito. É usado para criar campanhas de marketing, segmentos, formas, relatórios e muito mais.
O WooCommerce é um plugin de comércio eletrônico de código aberto para o WordPress. É a solução de comércio eletrônico principalmente usado em todo o mundo neste momento. Existem centenas de complementos disponíveis para o WooCommerce, que podem ser usados ​​de acordo com suas necessidades.
Existe um plug -in disponível para Mautic e WordPress que fornece solução de automação de marketing. Siga estas etapas para integrar o WooCommerce ao Mautic usando o plug -in [integração com Mautic for WooCommerce - Automation de marketing de código aberto.] [1]
Este blog cobrirá as seguintes seções:
  * [Configuração do plug -in do WordPress] [2]
  * [Configuração Mautic] [3]
  * [Pensamentos finais] [4]

Configuração do plug -in do WordPress {#wordpress}
  1. Vá para plugins.
  2. Clique em "Adicionar novo".
  3. Pesquise "** Integração com Mautic for wooCommerce **".
  4. Depois de encontrar o plug -in, clique em "Instalar agora".
  5. Após a instalação, clique em "Ativar".
  6. Em seguida, vá para WooCommerce -> MAUTIC -> Guia Connect.
  7. Preencha o formulário com os seguintes dados:
      * URL base.
      * ID do Cliente.
      * ID secreto.
  8. Todos esses campos virão após a configuração no aplicativo Mautic, que será explicado na próxima seção.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Integração Mautic e WordPress">}}


## Configuração Mautic: {#Mautic}
  1. No site mautico, vá para configurações.
  2. Vá para as configurações.
  3. Ativar API das configurações da API.
  4. Vá para credenciais da API.
  5. Clique em "Novo", digite qualquer nome que desejar e o URL completo do seu site do WordPress, ou seja, [http://yourwordpressite.com/wp-admin/admin.php-
  6. Pressione salvar e fechar.
  7. Ele criará chaves públicas e privadas.
  8. Vá para o seu site WordPress e encontre o plugin mautico que você instalou anteriormente.
  9. Digite chaves públicas e secretas que você criou no seu site mautico.
 10. Selecione OAuth1 ou OAuth2 (o mesmo que você selecionou no Mautic) e defina usuários de envio para sim.
 11. Salve e publique o plug -in.
 12. Depois disso, você poderá autorizar seu site WordPress.
 13. O WordPress redirecionará a instância mautica para a autorização.
 14. Clique em "Autorizar" e é isso.
 15. Você começará a obter contatos no seu site mautico.

{{< figure align=center src="images/mautic-1024x622.png" alt="Etapas de integração mautic e wordpress">}}


## Pensamentos finais: {#Final}
A integração mautic-woocommerce juntos pode ajudá-lo a atingir seus objetivos de marketing. Essa integração é uma das melhores soluções para a automação de marketing de comércio eletrônico. Com o WordPress, você pode facilmente obter muitos clientes e, com a Mautic, você pode criar campanhas ilimitadas para segmentar esses clientes e mantê -los atualizados sobre seus produtos/serviços, o que definitivamente possuirá as vendas.

## Explore:
Você pode encontrar links a seguir relevantes:
  * [Wodpress] [6]
  * [Mautic] [7]
  * [Como configurar Mautic - Integração do Facebook] [8]
  * [Integração mautica do Drupal para automatizar a nutrição de chumbo] [9]
  * [Automação de marketing usando woocommerce mautic e wordpress] [10]
  * [Como configurar campanhas de marketing no Mautic] [11]
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/pt/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
