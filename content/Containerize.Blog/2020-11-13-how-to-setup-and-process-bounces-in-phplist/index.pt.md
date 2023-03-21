---
title: "Como configurar e processar saltos em phplist" 
seoTitle: "Como configurar e processar saltos em phplist" 
description: "Phplist é uma poderosa lista de discussão auto-hospedada e gerente de boletim informativo. Ajuda as empresas a enviar campanhas de boletim e processar facilmente." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Envie a campanha com o boletim informativo de código aberto e o software de marketing por email. Configurar gerenciamento de rejeição no Phplist e automatizar o processamento de rejeição para listas de correspondência saudável." 
url: /pt/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Enviar campanha com boletim informativo de código aberto e software de marketing por email. Configurar gerenciamento de rejeição no Phplist e automatizar o processamento de rejeição para listas de correspondência saudável.

{{< figure align=center src="images/phplist-2.png" alt="Processo salta phplist">}}

Escrevemos artigos para implementação [multi-redação][1] e [Enviar campanha de boletim de boletim][2] no phplist. Neste artigo, abordaremos esses pontos em detalhes sobre o processo de reprodução no phplist.
  * [O que é phplist?][3]
  * [O que é salto?][4]
  * [Setup Bounce Management][5]
  * [Como processar saltos?][6]
  * [Conclusão][7]

## O que é phplist?   {#phplist}
O PHPLIST é o software de envio de boletim informativo gratuito e de código aberto mais popular. O PHPLIST permite que as empresas enviem e -mails de marketing, atualizações de produtos e anúncios para os assinantes. Ajuda as empresas para gerenciar a listagem, a projetar belo boletim informativo, agendar a campanha e gerar gerenciamento. [Leia mais][8]

## O que é salto?   {#quicar}
Um salto é uma mensagem de e -mail que não pode ser entregue devido ao número de motivos e ao retorno ao remetente. Podemos ter motivos como a caixa de correio está cheia, o endereço de email não é mais válido ou incorreto endereço de email. Por esse motivo, você deve processar saltos para não enviar e -mails para endereços de email inválidos.

## Setup Bounce Management   {#Setup}
Para configurar o gerenciamento de rejeição, você precisa definir as seguintes configurações no arquivo config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Gerenciamento de processamento de rejeição">}}

Explicaremos as etapas abaixo mais sobre essas configurações.
  * Primeiro, você precisa adicionar endereço de e -mail onde deseja receber mensagens de bounce. Você pode encontrar **Message_envelope**  Variável e adicionar seu endereço de e -mail.
  *O phplist pode buscar e -mails na caixa de correio de rejeição por meio de dois protocolos, **MBOX e POP3 **. Então, encontre  **bounce_protocol**   variável e altere -a de acordo com o seu ambiente.
  *Se você definiu **mBox  **PrototCol, precisará definir o formato do arquivo para ele. Então, encontre **  bounce_mailbox**  e defina o caminho como '/var/spool/Mail/listbousces'.
  *Caso você tenha usado o protocolo **POP3 **, você precisa configurar  **host, nome de usuário e senha**   para caixa de correio. Você pode ver essas configurações acima de Sreenshot.
  *Além das configurações acima para o protocolo **POP3** , pode ser necessário adicionar porta e criptografia.

## Como processar saltos?   {#processo}
O PHPLIST suporta dois métodos para saltos de processo: manual e automatizado. Você precisará criar um trabalho CRON para automatizar o processamento de rejeição. Você também pode processar manualmente saltos visitando **Sistema> Página do processo  **Página. Portanto, primeiro você precisa alterar **  manualmente \ _process \ _bounsces**  Configurações de acordo com seus requisitos. Você pode visitar [Phplist Docs][9] para configurar o trabalho de Cron para saltar de processos.

## Conclusão   {#conclusion}
Nesta postagem, aprendemos a configurar o endereço de e -mail e o processo de reprodução. Você pode processar facilmente saltos com o método manual, se tiver menos quantidade de assinantes. No entanto, você deve usar o processo de manuseio de rejeição automática para grandes listas. Ele economizará seu tempo e o ajudará a criar listas de assinantes limpas e válidas.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
