---
title: "Como configurar o formulário de criador de bootstrap.io no host" 
seoTitle: "Como configurar o formulário de criador de bootstrap.io no host" 
description: "Passe por este artigo e aprenda a configurar o Formio no localhost. Este criador de formulários de bootstrap é gratuito, extensível e oferece integrações de terceiros." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Crie formulários específicos de tarefas e personalizáveis ​​usando um construtor de formas HTML de arrasto e solte. Formio é auto-hospedado, orientado pela API, fornece formulários e gerenciamento de dados." 
url: /pt/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Construa formulários específicos de tarefas e personalizáveis ​​usando um construtor de formulários HTML de arrasto e soltar. Formio é auto-hospedado, orientado pela API, fornece formulários e gerenciamento de dados.

{{< figure align=center src="images/formio-1.png" alt="criador de formulários de bootstrap">}}


## **Visão geral** 
Nas necessidades de negócios em rápido crescimento, existem muitas operações que pertencem diretamente ao tráfico e engajamento público. Esse engajamento pode ser físico ou virtual. Às vezes, trata -se de fornecer serviços e, às vezes, é a coleta de dados ou feedback. Por outro lado, as organizações corporativas tendem a coletar dados do cliente sobre seus produtos e serviços. Portanto, a quantidade de dados depende do alcance para o público relevante. Em seguida, o gerenciamento de dados é outra tarefa crítica e exige imensa atenção.
No entanto, os setores corporativos usam formulários on -line para atender às necessidades relacionadas à coleta de dados. Existem muitos sites que podem conter muitos formulários, como formulário de contato, formulário de reclamação, formulário de feedback do cliente, formulário de admissão e muito mais. Agora, torna -se um aborrecimento construir, gerenciar esses formulários e os dados de envio. Aqui vem [form.io][1]. Form.io é um criador de formulários de bootstrap de código aberto que fornece recursos de formulário e gerenciamento de dados. No passado recente, publicamos um artigo que abrangeu os 5 principais construtores de formulários on -line de código aberto no ano de 2020][2]. Nesta postagem do blog, exploraremos este criador de formulários de bootstrap, juntamente com seu processo de configuração no localhost, cobrindo os seguintes pontos.
***[O que é forma.io?
* **[Como configurar o form.io no localhost?][4]** 
* **[Como o form.io funciona?][5]** 
* **[Conclusão][6]** 

## O que é form.io? {#what}

Form.io é um construtor de formulários de código aberto gratuito. É software auto-hospedado, multilíngue e multi-inquilinos. Este **HTML Form Creator** oferece permissões baseadas em funções para usuários e formulários. O Form.io fornece autenticação OAuth e permite que os usuários efetuem login usando provedores de identidade populares como Google e Facebook. Além disso, esse construtor de formulários HTML é baseado na arquitetura sem servidor, e os usuários podem gerar e incorporar formulários nos outros aplicativos apenas colocando uma única linha de código. No que diz respeito à interface do usuário, ele oferece uma interface de usuário lógica com recursos de arrastar e soltar. Existem vários elementos HTML de um lado que os usuários podem arrastar e soltar para criar o formulário necessário. Os usuários podem injetar JavaScript personalizado para funcionalidade aprimorada. Além disso, os usuários podem modificar a aparência do formulário usando CSS. Existem disposições para controlar o envio e o acesso dos formulários. No entanto, este fabricante de formulário HTML gratuito é escrito em JavaScript e todo o código -fonte está disponível no [Github][7].
Form.io fornece ampla gama de recursos. Os principais recursos estão listados abaixo.
  * Envio de formulário de e -mail
  * Gestão de dados
  * Oauth Provedores
  * Formas incorporáveis
  * Layout amigável

## Como configurar o form.io no localhost? {#localhost}

Nesta seção do tutorial **do Form Builder** , veremos como configurar o form.io no localhost. É fácil de configurar, pois fornece documentação abrangente sobre implantação e desenvolvimento.
Antes de ir além, verifique se você instalou os seguintes pré-requisitos.
  * Git
  * Nodejs
  * MongoDB
Depois que os pré-requisitos acima forem instalados, abra o terminal execute os seguintes comandos:
```
mkdir formio<br>cd formio
```
Agora, execute o seguinte comando para clonar o código -fonte deste aplicativo:
```
git clone https://github.com/formio/formio.git
```
Após um clone de sucesso, execute os seguintes comandos para instalar as dependências:
```
cd formio <br>npm install
```
Depois disso, execute o aplicativo com o seguinte comando:
```
npm start 
```
Este comando mostrará a seguinte saída com alguns avisos de usuário:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Tutorial do construtor de formulários">}}

Você pode acessar o aplicativo no navegador no seguinte endereço.
```
http://localhost:3001 
```
Ele abrirá a página de login. Você pode fazer login com as credenciais que você inseriu durante o processo de instalação.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="criador de formulários de bootstrap">}}


## Como funciona o form.io? {#work}

Este segmento descreve o mecanismo de trabalho de [form.io][1]. Todo o ecossistema deste designer de formulário é baseado em componentes e adequados para desenvolvedores. É extensível e fornece uma interface RESTful para aplicativos de terceiros. Então, vamos ver como criar formulários neste **Form Builder** .
Após o login, você pousará na página seguinte.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Arraste e solte o construtor de formulários HTML">}}

Agora, clique no botão "Novo formulário" e crie o primeiro formulário. A página a seguir será mostrada. Você pode ver que há um painel no lado esquerdo que contém o elemento HTML para os formulários. Ele contém as quatro seções como "componentes básicos", "componentes especiais" e muito mais.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="criador de forma html">}}

Você pode definir o nome do formulário junto com outros atributos. Agora, se você escolher um elemento de formulário do lado esquerdo e soltá-lo no meio, verá a seguinte caixa de diálogo.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="criador de formulários de bootstrap">}}

Você pode ver que permite modificar o tema do formulário, a validação e outras modificações. Depois de criar seu formulário, pressione o botão "Criar" e você pousará no formulário gerado.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Arraste e solte o construtor de formulários HTML">}}

O formulário gerado vem com várias opções nas quais você pode editar o formulário e visualizar os dados enviados. Na guia "Ações de formulário", você pode definir os ganchos de envio de formulário pré ou post, como email, webhook e muito mais. Acima de tudo, todo formulário gerado vem com uma API e os usuários podem acessá -lo passando o ID do formulário.

## Conclusão {#Conclusão}

Este é o fim deste tutorial de construtor de formulários. Espero que você tenha aprendido sobre esse criador de formulários de bootstrap sobre seus recursos, implantação e uso. Além disso, existem muitos construtores de formulários de código aberto que fornecem uma ampla gama de recursos. No entanto, é altamente importante escolher o melhor produto que atende às suas necessidades de negócios. Portanto, nesta postagem do blog, observamos que o form.io fornece personalizações sobre funcionalidade, layout e estilo. Ele permite gerar formulários multiuso que você pode hospedar em seus sites ao vivo. De fato, você pode coletar dados de maneira bem organizada em seu próprio banco de dados ou em qualquer outra opção de armazenamento.
Finalmente, [ **containerize.com** ][8] está em um processo consistente de escrever artigos sobre tópicos e produtos de código aberto adicionais. Portanto, mantenha contato com esta categoria [9][9] para atualizações regulares.

## Explore
* **[form.io][1]** 
* **[Orbeon][10]** 
* **[Ohmyform][11]** 
* **[webiny][12]** 
* **[FormTools][13]** 
* **[formbuilder][14]** 
* **[Alpaca Forms][15]** 
* [ **Automatize operações comerciais usando software de código aberto e gratuito** ][16]
* [ **Top 5 Builders de formulários on -line de código aberto no ano de 2020** ][2]



[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
