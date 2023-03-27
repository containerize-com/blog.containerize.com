---
title: "Introdução com um gerador de formulário HTML | FormBuilder" 
seoTitle: "Introdução com um gerador de formulário HTML | FormBuilder" 
description: "O FormBuilder é um gerador de formulários HTML gratuito e multilíngue com interface de usuário de arrastar e soltar. Siga este tutorial para aprender a configurá -lo no host local." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "Editor de formulário de código aberto alimentado por JavaScript com várias configurações, modelos de formulário configuráveis ​​e controles personalizados. Vamos aprender a configurar o FormBuilder." 
url: /pt/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript Powered Open Source Form Editor com várias configurações, modelos de formulário configuráveis ​​e controles personalizados. Vamos aprender a configurar o FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="Gerador de formulário HTML">}}


## **Visão geral** 
Recentemente, publicamos alguns artigos sobre tópicos, como [como configurar o formulário de criador de formulários de bootstrap.io no localHost][1] e [os 5 principais construtores de formulários on -line de código aberto no ano 2020][2]. A primeira postagem do blog é um artigo do tutorial que demonstra o processo de configuração e os recursos de um construtor de formulários de bootstrap [form.io][3]. O segundo artigo fala sobre os construtores de formulários de código aberto amplamente utilizados. No momento atual, a interação bidirecional é a coisa mais importante entre os provedores de serviços e os consumidores de serviços. As organizações tendem a receber feedback consistente sobre seus serviços e depois formulam futuras estratégias de negócios. No entanto, os formulários são os para coletar e armazenar informações dos clientes. As empresas produzem vários formulários para coletar dados sobre várias operações em andamento e existem muitos tipos de formulários que alguns deles são páginas únicas e algumas delas são formulários de várias páginas. Algumas empresas incorporaram formulários em seu portal on -line ou alguns usam e -mails ou outros tipos de meio para expor seus formulários para coleta de dados.
Portanto, existem muitos formulários de código aberto e software de gerenciamento de dados disponíveis com os recursos Rich Form Builder. Neste artigo, exploraremos o gerador de formulários HTML gratuito **[formbuilder][4]** cobrindo os seguintes pontos.
* **[O que é FormBuilder?][5]** 
* [ **Como configurar?** ][6]
* [ **Como criar formulários usando o formbuilder?** ][7]
* **[Conclusão][8]** 

## O que é o FormBuilder? {#what}

[FormBuilder][4] é um designer de formulário de código aberto que permite que os usuários criem formulários interativos. É seguro, extensível e vem com recursos de auto-hospedagem. Este gerador de formulários HTML é multilíngue e oferece suporte para vários idiomas. Existe uma interface de usuário fácil de usar, onde os usuários podem arrastar e soltar elementos de formulário para formular o modelo de formulário necessário. Além disso, fornece controles ricos e modelos de formulário configuráveis. Além disso, os usuários podem criar várias guias na interface do usuário para criar formulários de várias páginas. Acima de tudo, os usuários podem cuidar desse construtor de formulários gratuitos desenvolvendo seus plugins. Possui toda a documentação disponível em relação ao desenvolvimento e implantação. Está escrito no Node.js e todo o código -fonte está disponível no [GitHub][9].
Aqui estão os principais destaques do formulário.io
  * I18n Integrado
  * Formulários de várias páginas
  * Extensível
  * Suporte para estruturas de front -end populares de JavaScript
  * Arraste e solte a interface do usuário

## Como configurar? {#setup}

Esta seção do Tutorial do Builder do Formulário mostrará como configurar o FormBuilder na máquina local.
Antes de ir além, verifique se você instalou os seguintes pré-requisitos.
  * Node.js> = 10.9.0
  * npm
  * Git
Depois de instalar os pré-requisitos, execute o seguinte comando para clonar o código-fonte deste aplicativo:
```
git clone https://github.com/kevinchappell/formBuilder
```
Em seguida, execute os seguintes comandos para instalar as dependências:
```
cd form-builder<br>npm install 
```
Depois disso, você pode iniciar o aplicativo executando o seguinte comando:
```
npm start
```
Finalmente, o comando acima abrirá o aplicativo no navegador no seguinte endereço:
```
http://localhost:8080/
```

## Como criar formulários usando o formbuilder? {#how}

Nesta seção, exploraremos os recursos deste gerador de formulários HTML e aprenderemos como podemos criar formulários.
A interface do usuário a seguir aparecerá assim que você iniciar o servidor.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Gerador de formulário HTML">}}

Avançando, você pode ver a barra de menus no lado direito. Ele contém os elementos do formulário, como botões, caixas de seleção, campos de texto, campos de dados, cabeçalho, parágrafo e muito mais. No entanto, você pode arrastar esses elementos e cair na área do meio (droppable) da tela. No canto superior esquerdo, há uma opção para ativar a versão de bootstrap do aplicativo. No canto superior esquerdo, há um suspensão onde os usuários podem selecionar qualquer idioma disponível.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Editor de formulários">}}

Em seguida, podemos arrastar e soltar qualquer elemento de formulário para a área droppable. Além disso, podemos editar as configurações de qualquer elemento, como mostrado na imagem acima. Há uma opção para criar uma cópia do elemento existente. Podemos mudar a colocação dos elementos um com o outro.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Gerador de formulário HTML">}}

Depois de terminar o formulário, você pode renderizar o formulário pressionando o botão "renderizar" colocado no meio superior. Além disso, existem várias opções de formulário em que os usuários podem obter o HTML gerado por trás dos formulários. Também existem outras opções, como o Formulário de Usuário de Carregar, mostrar dados do usuário, renderizar formulário do usuário e Formulário de Usuário Limpa. Juntamente com esses recursos, existem muitas ações de formulário disponíveis, como "GetFieldTypes", que retornam os tipos de campo registrados para o formulário. Da mesma forma, existem muitas outras ações, como mostrar dados, obter xml, definir dados, alternar a edição e um pouco mais. No entanto, existem muitas outras coisas que você pode verificar. Como é de código aberto, você pode modificá -lo de acordo com seus requisitos.

## Conclusão {#Conclusão}

Este é o fim da postagem do blog. Esperamos que este tutorial realmente o ajude se você deseja implantar um gerador de formulário HTML de código aberto. Este artigo abordou muitos aspectos do FormBuilder, para que você possa fazer uma escolha facilmente, considerando suas necessidades de negócios. Esses construtores de formulários de código aberto gratuitos são econômicos e economizam tempo. Essas ferramentas gratuitas não apenas fornecem recursos de construção de formulários, mas também fornecem formulários e gerenciamento de dados. Você pode configurar os formulários com aplicativos da Web de terceiros. Além disso, ele remove o incômodo de criar formas diferentes para diferentes aplicativos de negócios, em vez que os proprietários de empresas podem criar qualquer tipo de formulário usando esses construtores de formulários de código aberto. Além disso, existem plugins disponíveis para esses editores de formulários que os desenvolvedores podem modificar conforme os requisitos. Portanto, é hora de automatizar essas tarefas repetitivas, empregando um bom gerador de formulário HTML gratuito.
Finalmente, [contenderize.com][10] está escrevendo artigos sobre produtos de código aberto adicionais. Portanto, mantenha contato com a categoria [11][11] para notícias e atualizações regulares.

## Explore
* **[form.io][3]** 
* **[Orbeon][12]** 
* **[Ohmyform][13]** 
* **[webiny][14]** 
* **[FormTools][15]** 
* **[formbuilder][4]** 
* **[Alpaca Forms][16]** 
* [ **Como configurar o formulário do criador de bootstrap.io no localHost** ][1]
* [ **Automatize operações comerciais usando software de código aberto e gratuito** ][17]
* [ **Top 5 Builders de formulários on -line de código aberto no ano de 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
