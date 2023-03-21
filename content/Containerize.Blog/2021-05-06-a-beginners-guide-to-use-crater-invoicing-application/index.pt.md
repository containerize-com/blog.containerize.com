---
title: "Um guia para iniciantes para usar o aplicativo de faturamento da cratera" 
seoTitle: "Um guia para iniciantes para usar o aplicativo de faturamento da cratera" 
description: "Um tutorial para começar com um sistema de fatura de código aberto. Esta diretriz da cratera ajuda você a se familiarizar com os principais conceitos e recursos." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Este tutorial ajudará você a aprender sobre os aplicativos de faturamento da cratera. É um sistema de fatura gratuito e de código aberto para as pequenas empresas." 
url: /pt/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Este tutorial ajudará você a aprender sobre aplicativos de faturamento da cratera. É um sistema de fatura gratuito e de código aberto para as pequenas empresas.

{{< figure align=center src="images/blog-crater.png" alt="Sistema de fatura de código aberto">}}

Toda empresa precisa de algum tipo de sistema para o gerenciamento de faturas, despesas, pagamentos e muito mais. O software de faturamento ajuda você a gerenciá -lo para que você possa executar facilmente tarefas de cobrança e manter o foco em outras coisas importantes. Nesta postagem, aprenderemos a configurar a cratera e usá -la para lidar com operações contábeis para os negócios.
  * [Introdução sobre Crater][1]
  * [Procedimento de instalação da cratera][2]
  * [Exploração do recurso][3]
  * [Conclusão][4]

## Introdução sobre cratera   {#introduction}
[Crater][5] é um aplicativo de cobrança gratuito e de código aberto. É absolutamente gratuito e você pode atualizá -lo facilmente para as versões mais recentes. É um sistema de contabilidade gratuito para pequenas empresas e freelancers. É também uma solução completa de faturamento, permitindo acompanhar as despesas e pagamentos, calcular impostos e produzir estimativas e faturas. Além disso, ele vem com os aplicativos móveis prontos para uso para dispositivos para iPhone e Android. Isso permitirá que você o gerencie de qualquer lugar. Como a Crater é um software de cobrança baseado na Web, o aplicativo da Web foi projetado com Laravel e Vuejs, e os aplicativos móveis são construídos com o React Native. Toda a documentação relacionada ao desenvolvimento e implantação está disponível. O código -fonte completo pode ser encontrado em [Github][6].

## Procedimento de instalação da cratera   {#installation}
Discutiremos como instalar a cratera com o método manual e usar o Docker nesta seção.

## # Instalação manual
  * Faça o download da versão mais recente de.
  * Carregue o arquivo zip baixado para o seu servidor e extrai -o.
  * Aponte seu domínio para o diretório público dentro da pasta da cratera.
  * Navegue até a raiz do seu projeto e execute o comando “sudo chmod -r 775 ./” para atribuir privilégios apropriados.
  * Abra seu site no navegador e siga o Assistente de Instalação.

## # Instalação do Docker
  * Instale o docker no seu servidor :.
  * Instale o Docker compor seguindo este guia :.
  * Clone Crater Repository usando este comando.
```
git clone https://github.com/bytefury/crater
```
  * Execute os comandos abaixo um por um para instalar a cratera.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Abra o local da cratera no seu navegador e siga o assistente de instalação.

## Exploration   {#Feature}
Nesta seção, exploraremos os principais recursos deste aplicativo de cobrança de código aberto. Depois de terminar a instalação, abra seu site http://example.com e faça login no aplicativo.
  ***Painel**  - Após o login, você será levado para o painel, que exibe toda a visualização do aplicativo.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  ***Configurações**  - Agora navegue até a página Configurações e adicione várias configurações de aplicativos da Web, como configurações de conta, informações da empresa, preferências, personalizações, notificações, módulos de pagamento e assim por diante.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  ***Itens**  - A guia Itens é acessível no menu da barra lateral. A partir desta guia, você pode gerenciar seus itens. Você pode usar itens ao criar estimativas e faturas.
  ***Estimativas**  - Crie uma cotação abrangente que inclua taxas, descontos, inventário e muito mais. Um dos três modelos construídos pode ser usado para criar uma estimativa. Impostos adicionais podem ser adicionados à estimativa e também podem ser adicionados como um imposto composto.
  ***Faturas**  - Faça faturas profissionais e envie -as para seus clientes. Você pode usar modelos disponíveis para gerar fatura. Você pode adicionar impostos adicionais à fatura, além de um imposto composto. Além disso, você pode fornecer uma porcentagem ou desconto de valor fixo aos seus clientes. Além disso, você pode aplicar descontos a itens individuais, bem como o valor geral da fatura.
  ***Pagamentos**  - Este módulo ajuda você a acompanhar os pagamentos que você recebe de seus clientes.
  ***Despesas**  - O módulo de despesas ajuda você a acompanhar quanto gasta em diferentes serviços.
  ***Impostos**  - Usando esse recurso, você pode gerenciar facilmente seus impostos. Você pode adicionar vários impostos sobre o valor total da fatura ou no item individual.
  ***Relatórios**  - Obtenha informações abrangentes sobre todas as suas faturas, sejam elas para um ou vários clientes. O suporte à cratera vem com quatro tipos de relatórios como relatório de vendas, relatório de lucro e perda, relatório de despesas e relatório de impostos.

## Conclusão   {#conclusion}
Aprendemos sobre a cratera e como configurá -la manualmente e com o Docker. Também analisamos alguns dos recursos que todo software de cobrança contábil deve fornecer. Felizmente, este guia pode ajudá -lo a implementar rapidamente um sistema de fatura de código aberto para o seu negócio.
Finalmente, [contenderize.com][7] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [faturamento][8] para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Cratera - sistema de contabilidade gratuito para pequenas empresas][5]
  * [5 principais softwares de contabilidade de código aberto no ano 2021][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
