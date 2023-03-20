---
title: "Integração do Civicrm WordPress | Tutorial do WordPress" 
seoTitle: "Integração do Civicrm WordPress | Tutorial do WordPress" 
description: "A integração do Civicrm WordPress permite controlar o gerenciamento de dados e fluxos de trabalho. Melhor guia sobre o uso efetivo do Civicrm de código aberto com o WordPress." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "Neste tutorial do plug -in do WordPress, aprenderemos a integrar o Civicrm gratuito ao WordPress para obter vantagens competitivas em termos de gerenciamento de contatos." 
url: /pt/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## Neste tutorial do plug -in do WordPress, aprenderemos a integrar o Civicrm gratuito ao WordPress para obter vantagens competitivas em termos de gerenciamento de contatos.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="Civicrm WordPress">}}


## Visão geral:
Bem -vindo a este artigo do tutorial que se trata de ** Integração do WordPress ** **. O fato é que estamos vivendo na era da informação e dados. Certas coisas fornecem recursos distintos à sua empresa, como a automação de coletar dados, comunicação consistente, campanhas de marketing e outros fluxos de trabalho de negócios. Nesta era moderna, a quantidade de dados está aumentando dia a dia. As organizações recebem esses dados de várias fontes de dados. Resultado, fica difícil gerenciar e compilar uma quantidade tão grande de dados. No entanto, é altamente importante garantir que a integridade e a autenticidade dos dados sejam a base de uma campanha de marketing eficaz. Além disso, a ocorrência de dados em vários lugares dá à luz com problemas e má administração, e as equipes operacionais acham difícil entrar na mesma página e trabalhar em uma direção unificada.
Por outro lado, existem vários sistemas de gerenciamento de conteúdo que obtiveram o poderoso suporte das comunidades de usuários e desenvolvedores devido a um gerenciamento robusto de conteúdo e sistemas de eco amigáveis ​​para SEO. Esses sistemas de gerenciamento de conteúdo de código aberto oferecem desenvolvimentos e implantações fáceis e rápidos para atingir metas relacionadas ao conteúdo. Oferece custo-eficiência, funcionalidade extensível e recursos de auto-hospedagem. Este ** tutorial do plug -in do WordPress ** é sobre a integração de [Civicrm][2] com [WordPress][3] e abordaremos os seguintes pontos de bala
  * [Benefícios dessa combinação para negócios?][4]
  * [Como configurar uma estrutura de diretório?][5]
  * [Como ativar e instalar o Civicrm no WordPress?][6]

## benefícios dessa combinação para negócios? {#Benefits}
Na seção deste tutorial ** WordPress **, examinaremos os principais benefícios da integração ** civicrm wordpress **. A popularidade do [WordPress][3] está aumentando à medida que a concorrência está crescendo no mercado. A comunidade do WordPress tem desenvolvido novos plugins para aprimorar o balde do plug -in. Portanto, a adição do CIVICRM no pool de WordPress do plug -in ganhou muita atenção das organizações que prosperam para automatizar e centralizar seus fluxos de trabalho de negócios.
Essa integração é importante devido a certos aspectos. Primeiro, [Civicrm][2] remove o incômodo de gerenciar as fontes de contato do usuário que residem em diferentes locais. Em segundo lugar, fornece segurança completa, obtendo backups regulares de seus dados. Em terceiro lugar, é baseada na Web e de código aberto, que significa que você pode acessar seus dados de qualquer lugar. Esta ferramenta de automação de marketing de código aberto é desenvolvido para o setor cívico. Ele removeu a necessidade de exportar dados para várias folhas e bancos de dados, fornecendo uma solução única. Esse software de CRM de código aberto armazena todos os dados no banco de dados proveniente de várias fontes, como boletins, sites de gerenciamento de eventos, gerenciamento de contribuição, gerenciamento de casos e etc. Esses softwares de gerenciamento de relacionamento com constituintes de código aberto são fáceis de configurar e fornecer muitos recursos, como como Conjuntos de dados personalizados ilimitados, gerenciamento de tarefas, gerenciamento de usuários, rastrear promessas e associações abertas e muito mais.

## Como configurar uma estrutura de diretório? {#diretório}
Antes de iniciar este ** tutorial do plug -in do WordPress **, assumimos que você configurou o WordPress e tem um entendimento básico para instalar e ativar plugins. Além disso, você pode encontrar informações [aqui][7] sobre a configuração do WordPress e seus recursos.
Primeiro, faça o download do Civicrm deste [site][8]. Escolha uma opção chamada como "Download civicrmx.x.x para o WordPress".
Após o download, coloque o arquivo zip nesse local /conteúdo /plugins wp e extraia-o. Verifique se este diretório tem acesso "gravar".
Você pode usar este comando para fornecer permissão de acesso "gravar". `sudo chmod 777 server_path/wp-content/plugins/civicrm`
Segundo, crie uma pasta vazia chamada "Civicrm" nesse local /wp-content /uploads e forneça acesso "Write" usando o seguinte comando.
`sudo chmod 777 server_path/wp-content/uploads/civicrm`
** Nota **: Não se esqueça de alterar esses diretórios de volta para o padrão. Você pode executar os seguintes comandos para restaurar o status padrão desses diretórios:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r username server_path/wp -content/uploads/civicrmsudo chown -r username server_path/wp -content/plugins/civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
Esta seção da integração do WordPress civicrm é concluída. Vamos passar para a próxima seção.

## Como ativar e instalar o Civicrm no WordPress? {#instalar}
Esta seção do tutorial do WordPress mostra as etapas de instalação e ativação da ferramenta de marketing ** baseada na Web ** Civicrm. Depois de configurar a estrutura do diretório, vá para os plugins ** **-> ** instalados ** e você verá o Civicrm na lista.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="Civicrm WordPress">}}

HAT “** Ative **”.

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Guia de automação de marketing">}}

Depois de ativar o Civicrm, você encontrará a opção Civicrm no canto superior direito da página Admin WP. Basta bater nessa opção e você pousará na tela ** de instalação **.
A página a seguir será mostrada com os detalhes do requisito, juntamente com as configurações do banco de dados.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Guia de automação de marketing">}}

Pressione o botão “Verifique os requisitos e instale o Civicrm”. O CIVICRM será instalado com sucesso e uma mensagem de sucesso aparecerá se as instruções acima forem seguidas corretamente.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Integração do Civicrm WordPress">}}

Finalmente, a guia Menu ** Civicrm WordPress ** aparecerá na parte superior do painel de administração.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="tutorial de desenvolvimento de plug -in do WordPress">}}


## Conclusão
A integração ** civicrm wordpress ** é um complemento verdadeiramente útil quando se trata de gerenciar um enorme armazenamento de informações do usuário dispersas. Isso simplifica os fluxos de trabalho complexos, oferecendo um painel intuitivo. A dupla desses dois softwares de código aberto fornece uma interface amigável, juntamente com outros utilitários, onde os usuários podem navegar facilmente. Felizmente, a comunidade de código aberto desenvolveu tantas ferramentas de automação de marketing como [Mautic][9], [SuperEcrm][10], [espocrm][11] e muito mais. Todas essas soluções são gratuitas e fáceis de implantar na nuvem ou no host local. Acima de tudo, essas soluções vêm com documentação abrangente sobre desenvolvimento e implantação. No entanto, este tutorial ** do Plugin ** WordPress ** será muito útil se você deseja integrar o software de automação de marketing ao seu software de gerenciamento de conteúdo.
Finalmente, [contendeRize.com][12] está em processo de redação de mais tutoriais sobre a integração de algum outro software de código aberto. Para atualizações regulares, mantenha contato com as categorias [Automação de marketing][1] e [blogs][13].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Um guia para iniciantes sobre integração do WordPress do Fórum de Vanilla][14]
  * [Como dockerize WordPress com Docker Compose][15]
  * [Migração do WordPress para Jekyll][16]
  * [Como construir seu site com WordPress e Gatsby][17]
  * [Um guia para iniciantes para migrar para o fantasma do WordPress][18]
  * [Como implementar a multiestância em Mautic][19]
  * [Como configurar Mautic - Integração do Facebook][20]
  * [Configurar campanhas mauticas usando o Campaign Builder][21]
  * [Drupal Mautic Integration para automatizar a nutrição de chumbo][22]
  * [Mensagens instantâneas do WordPress usando Rocket.chat][23]
  * [Como integrar o fórum do discurso com o WordPress][24]
  * [Automatize o sistema de bilhetes usando o WordPress e o Osticket][25]
  * [Automação de marketing com integração Mautic e WooCommerce][26]
  * [Plataforma de blog de código aberto 5 em 2020][27]
  * [Automatize operações comerciais usando software de código aberto e gratuito][28]

  
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
