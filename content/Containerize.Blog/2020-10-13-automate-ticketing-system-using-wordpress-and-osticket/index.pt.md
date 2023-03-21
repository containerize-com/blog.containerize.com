---
title: "Automatize o sistema de ticketing usando o WordPress e Oticket" 
seoTitle: "Automatize o sistema de ticketing usando o WordPress e Oticket" 
description: "A integração de Osticket-WordPress fornece uma maneira de os clientes gerarem ingressos de suporte no site WordPress e gerenciá-los no painel de osticket." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Automatize o processo helpdesk com integração sem costura WordPress e Osticket. Transforme as perguntas dos clientes por meio de formulários baseados na Web em ingressos de suporte." 
url: /pt/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## automatize o processo helpdesk com a integração contínua do WordPress e Oticket. Transforme as perguntas dos clientes por meio de formulários baseados na Web em ingressos de suporte.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Integração de Osticket-WordPress para automatizar o sistema de emissão de emissão de emissão">}}

Seus clientes podem ter perguntas sobre seus produtos/serviços. Eles enviarão suas consultas através de diferentes formas no seu site WordPress. A integração de Osticket-WordPress ajuda a converter essas consultas em ingressos. Ele envia dados via API para o sistema Helpdesk de Oticket.
OSTICKET é um sistema de ingressos para helpdesk de código aberto e gratuito. Os clientes podem criar ingressos sobre suas consultas no Osticket. Esse sistema helpdesk facilita muito para qualquer organização gerenciar as consultas provenientes de seus clientes. O Admin pode criar departamentos e equipes e atribuir ingressos a diferentes agentes de acordo com a natureza dos ingressos criados. Este sistema de código aberto gratuito acompanhará os problemas. Ele permite que clientes e agentes comentem o ingresso para discutir o progresso. Cobriremos as seguintes seções nesta postagem do blog:
  * [Processo de integração][1]
  * [Instalação do plug -in do WordPress][2]
  * [Procedimento de autenticação][3]
  * [Conclusão][4]

## Processo de integração:   {#Integration}
A integração de Oticket e WordPress requer um formulário de contato no site WordPress com os seguintes campos
  1. Tópico de ajuda
  2. E -mail
  3. Nome completo
  4. Assunto
  5. Mensagem
O formulário de contato deve enviar emails, porque este plug -in conecta a função WP_MAIL para obter os dados dos formulários.

## WordPress Instalação do plug -in:   {#wordpress}
  1. Vá para o painel de administração do seu site WordPress.
  2. Em seguida, vá para a seção Plugins.
  3. Em seguida, instale este [plugin][5].
  4. Depois disso, ative o plug -in.
  5. E vá para "Configuração" -> "OSTICKET CONECTOR".
  6. Em seguida, insira o URL do seu site de osticket, ou seja, [http: //your.domain/api/tickets.json][6]
  7. Digite a tecla API criada no painel de administração de Osticket (explicado na próxima seção).
  8. No final, preencha todos os campos para mapear os dados do seu formulário de contato para os campos de ingresso do Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Integração de Osticket-WordPress para automatizar o sistema de emissão de emissão de emissão">}}


## Procedimento de autenticação:   {#auth}
A autenticação da API é realizada via API Keys configurada no painel de administração do Osticket. As teclas da API são geradas e vinculadas a um endereço IP de origem que é verificado em relação ao IP de origem das solicitações da API HTTP. Para criar a chave da API
  1. Vá para o painel de administração do Osticket.
  2. Clique em "Gerenciar".
  3. Vá para o sub -menu "API Keys".
  4. Clique em "Adicionar nova chave da API".
  5. Defina o "status" como ativo.
  6. Verifique a caixa de seleção "pode ​​criar ticket".
  7. Digite o endereço IP do seu site WordPress e pressione "Adicionar tecla".

{{< figure align=center src="images/osticket-1024x729.png" alt="Integração de Osticket-WordPress para automatizar o sistema de emissão de emissão de emissão">}}


## Conclusão:   {#conclusion}
A integração de Osticket-WordPress automatizará o processo de ticketing. Portanto, facilitará a vida para a equipe de apoio. As consultas no site do WordPress se converterão automaticamente em ingressos de suporte no Osticket. Para que a equipe de suporte possa gerenciar todas as consultas dos clientes com mais facilidade e eficiência. Os agentes de suporte serão notificados por notificações por email. Portanto, os agentes podem resolver as consultas dos clientes a tempo. A seção de comentários sobre o Osticket ajuda os clientes e os agentes de suporte a se comunicarem de maneira eficaz e oportuna. Também facilita para os gerentes acompanhar o progresso de cada bilhete.

## Explore:
Para saber mais sobre Osticket e WordPress, consulte estas páginas:
  * [OSTICKET - Sistema de ingressos para Helpdesk de código aberto gratuito][7]
  * [WordPress - código aberto gratuito e CMS e ferramenta de blog mais amplamente usadas][8]
  * [Como configurar o software de suporte técnico on -line usando osticket][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
