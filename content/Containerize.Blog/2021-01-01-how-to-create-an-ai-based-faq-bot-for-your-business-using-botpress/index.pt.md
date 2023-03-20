---
title: "Como criar um Bot de FAQ baseado em IA para o seu negócio usando o Botpress" 
seoTitle: "Como criar um Bot de FAQ baseado em IA para o seu negócio usando o Botpress" 
description: "Nesta postagem do blog, aprenderemos a automatizar as consultas do seu cliente usando um Bot de FAQ baseado em IA usando o Botpress em seu site." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "As empresas precisam de melhores plataformas de suporte ao cliente para resolver com eficiência suas consultas. Neste tutorial, aprenderemos a criar um bot de FAQ baseado em IA usando o Botpress" 
url: /pt/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

As empresas precisam de melhores plataformas de suporte ao cliente para resolver com eficiência suas consultas. Neste tutorial, aprenderemos como criar um bot de FAQ baseado em IA usando o Botpress

{{< figure align=center src="images/botpress-banner.png" alt="Bot de perguntas frequentes para o seu negócio usando o Botpress">}}

A automação de perguntas frequentes consiste em melhorar a experiência do seu cliente on -line usando os chatbots para responder a perguntas frequentes. Com os avanços em inteligência artificial e aprendizado de máquina, a demanda por chatbots de conversação com sede em IA ganhou muita popularidade e demanda. E isso ocorre principalmente porque toda a empresa deseja aprimorar sua experiência com o cliente, mesmo quando a empresa está offline. Os chatbots de conversação tornaram isso possível para as empresas darem a seus clientes o sempre disponível suporte de alto toque que desejarem. O objetivo desta postagem do blog é ajudá-lo a configurar um bot de FAQ baseado em IA usando o Botpress.
Neste artigo, aprenderemos sobre o módulo NLU da Botpress e como o entendimento / processamento da linguagem natural funciona e pode ajudar as empresas a alcançar um alto nível de satisfação do cliente. Vamos começar!
  *** [O que é processamento de linguagem natural][1] **
  *[** Determine seu caso de uso **][2]
  *[** Instale o botPress **][3]
  *[** Crie um novo bot **][4]
  *[** Treine suas perguntas e respostas **][5]
  *[** Conclusão **][6]

## O que é processamento de linguagem natural {#nlu}
O processamento de linguagem natural (PNL) é um ramo da inteligência artificial que ajuda os computadores a entender, interpretar e manipular a linguagem humana. A PNL ajuda os computadores a se comunicarem com os seres humanos em seu próprio idioma. E possibilita que os computadores leiam um texto, ouçam discursos, interpretem, medem o sentimento.
A tarefa básica da PNL inclui tokenização e análise, rastreamento, marcação de parte de fala, detecção de idiomas e identificação de relacionamentos semânticos.
A NLU é o módulo da Botpress que processa todas as mensagens recebidas e executa classificação de intenções, identificação de idiomas, extração de entidades e marcação de slot.

## Determine seu caso de uso {#case}
Se você deseja criar um FAQ AI Chatbot, precisa ter um caso de uso para o seu negócio. Para o bem deste tutorial, queremos que nossos usuários façam qualquer pergunta aleatória relacionada ao preço de nosso produto e nosso tempo de negócios.

## Instale o BotPress {#Install}
Para instalar o Botpress, acesse o [site][7], clique em "Download grátis" e selecione sua plataforma. Para este tutorial, estou usando a versão Mac. Depois que o download estiver concluído, você poderá extrair o arquivo zip e executar o seguinte comando no seu terminal entrando na pasta direita.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Botpress Start">}}


## Crie um novo bot {#Create}
Agora, queremos realmente criar nosso primeiro bot clicando ** Crie Bot ** e, em seguida, selecionando ** novo bot **. Vou ligar para o nosso bot de Bot FAQ e, em seguida, como um modelo de bot, selecionarei ** BOT vazio ** antes de clicar em ** Criar bot **.

{{< figure align=center src="images/create-bot.gif" alt="Criar-New-Bot">}}

Agora, editaremos este bot no editor de estúdios Botpress.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Botpress Editar no estúdio">}}

Agora, no estúdio, você tem vários menus ao longo da barra lateral esquerda. Mas, por uma questão de simplicidade, vamos nos atender à seção de perguntas e respostas.
Clique no ícone "Perguntas e respostas" e adicione perguntas possíveis / freqüentemente feitas e suas respostas apropriadas.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Q&A da Botpress">}}


## Treine seu Bot FAQ {#Train}
Depois de terminar agora, você terá que treinar seu bot das perguntas frequentes clicando no botão "Trem Chatbot" no canto inferior direito da seção de perguntas e respostas.

{{< figure align=center src="images/train-bot.gif" alt="Botpress Trem Bot">}}

Após o treinamento, você pode testar seu bot de FAQ usando a ferramenta de emulador embutida.

{{< figure align=center src="images/test-faq-bot.gif" alt="Teste o seu Bot de FAQ">}}

Agora, que você tem seu Bot FAQ pronto, pode implantar este bot em seu site seguindo o [8] Guia do Botpress.

## Conclusão {#conclusion}
Nesta postagem do blog, aprendemos e entendemos o processamento de linguagem natural. Também recebemos nossas mãos com o processo de criação de bot. Treinamos um simples bot de FAQ que ajuda seus clientes a conhecer os horários e os planos de pagamento de seus negócios. O objetivo do tutorial era ajudar os iniciantes a começar rapidamente com um bot de AI baseado em AI usando o Botpress.

  
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
