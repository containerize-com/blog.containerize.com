---
title: "Configurar Regras avançadas de gerenciamento de rejeição e rejeição em phplist" 
seoTitle: "Configurar Regras avançadas de gerenciamento de rejeição e rejeição em phplist" 
description: "Ativar gerenciamento avançado de rejeição no phplist e manipular e -mails de rejeição. Crie regras de rejeição e automatize o processo para executar várias ações nas mensagens retornadas." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Dependendo do tipo de código de erro de salto que é retornado pelo MTA, o Advanced Bounce Management permite a execução automatizada de diferentes ações." 
url: /pt/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

Dependendo do tipo de código de erro de salto que é retornado pelo MTA, o Advanced Bounce Management permite a execução automatizada de diferentes ações.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Configurar Regras avançadas de gerenciamento de rejeição e rejeição em phplist">}}

No nosso tutorial [anterior] [1], já tínhamos abordado ** Processamento de salto phplist **. Se você não estiver familiarizado com o processamento de rejeição, pode lê -lo. Você pode baixar e -mails não entregues para o seu projeto phplist usando o processamento de rejeição. Como você lida com e -mails baixados? Não faço ideia, vamos dar uma olhada no gerenciamento de rejeição antecipado que permite que você resolva ** e -mails de salto **. Cada mensagem de email retornada possui código de erro que é retornado pelo MTA (agente de transferência de correio). Além disso, você pode revisar o cabeçalho do email de mensagem retornado e ele contém todas as informações ao longo do código de erro.
  * [Ativar manuseio avançado de salto] [2]
  * [Adicionar regra de salto] [3]
  * [Lista de regulamentos de salto] [4]
  * [Conclusão] [5]

## Ativar manuseio avançado de salto {#enable}
Primeira coisa que primeiro, ative o manuseio avançado ** Bounce ** Copiando o código abaixo no arquivo config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Depois disso, navegue para ** Sistema> Gerenciar saltos> LISTA REGRAS ** para criar regras de rejeição.
Você pode criar regras de rejeição com base em expressões regulares. Você pode encontrar o motivo pelo qual ** e -mail se recuperem ** no cabeçalho e usá -lo para expressão regular. Além disso, selecione ações apropriadas com base no código de erro ou na expressão regular. Phplist suporta as seguintes ações. A declaração de ação é auto -explicativa, por isso não precisamos ir em detalhes.
  * Excluir assinante
  * Assinante não confiante
  * Assinante da lista negra
  * Endereço de e -mail da lista negra
  * Exclua assinante e salto
  * Assinante não conferido e excluir salto
  * Adicione o assinante à lista de não serndos e excluir salto
  * Adicionar endereço de e-mail à lista de não sernd e excluir o salto
  * Exclua salto

## Adicione a regra de salto {#Add}
Vamos criar nossa primeira regra de salto.
  *Primeiro, insira expressão regular como ** (conta foi suspensa | conta não disponível) **
  * Depois disso, selecione Ação apropriada
  * Finalmente, adicione nota/memorando para a regra

{{< figure align=center src="images/add-bounce-rule.png" alt="Crie regra de salto em phplist">}}

Você pode adicionar regras de salto pelos seguintes motivos e selecionar a ação apropriada para lidar com saltos. No entanto, você pode procurar respostas SMTP e adicionar mais regras à lista.
  * Destinatário arquivado
  * tipo = mx: host não encontrado
  * Desculpe, não há caixa de correio aqui por esse nome
  * Caixa de correio desativada
  * conta esta desabilitada
  * Esta caixa de correio foi bloqueada devido à inatividade
  * Usuário desconhecido
  * Nenhum destinatário
  * e assim por diante …
** NOTA: ** Você deve enrolar o motivo do parêntese e usar o símbolo do tubo ** | ** ou ** ou **, se você deseja adicionar vários motivos em uma regra de uma regra.

## Regras de bounce {#List}
Depois de criar o número de regras, sua lista ** de bounce ** parecerá como na captura de tela abaixo. Você pode executar outras ações, como alterações de pedidos e exclusão nesta página.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Lista de regras de salto">}}


## Conclusão {#conclusion}
Neste tutorial, aprendemos sobre o Advanced ** Bounce Management ** e desenvolvemos as regras de rejeição necessárias. Seria ótimo permitir esse recurso para que você possa automatizar o processo de limpeza de endereços de email inválidos de suas listas. Isso também permitiria que você mantenha o nível mínimo de e -mails retornados. Além disso, suas listas terão assinantes legítimos.
Além disso, [contenderize.com] [6] está a caminho de aprimorar a pilha de produtos de código aberto em vários idiomas e estruturas. Para atualizações regulares, fique atento na categoria [Newsletters] [7] para artigos mais interessantes.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Phplist - Newsletter de código aberto e software de marketing por e -mail] [8]
  * [Como criar e enviar boletim informativo usando phplist] [9]
  * [Como configurar e processar saltos no phplist] [1]
  * [Guia para iniciantes para desenvolver plugin phplist] [10]
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
