---
title: "Guia de desenvolvimento de modelos Joomla para iniciantes" 
seoTitle: "Guia de desenvolvimento de modelos Joomla para iniciantes" 
description: "Aprenda o desenvolvimento do modelo Joomla, como configurar layouts responsivos para vários casos de uso. Conjunto de arquivos que definem a camada de design de um site comercial." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Construa modelos de joomla altamente profissionais e personalizáveis ​​que oferecem vários recursos, como esquemas multilíngues, SEO / amigáveis ​​e ricos em cores." 
url: /pt/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Construa modelos de joomla altamente profissionais e personalizáveis ​​que oferecem vários recursos, como esquemas de cores multilíngues, SEO / amigáveis ​​e ricos. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Desenvolvimento de modelos Joomla">}}


## Visão geral
Um site comercial bem projetado desempenha um papel vital para trazer e reter visitantes, dando-lhes facilidade de navegação. **A Full em destaque Joomla**  facilita seus usuários com vários layouts responsivos e desenvolvimento de modelos Joomla que controlam a estética de um site de negócios.
Durante a fase de desenvolvimento, a colocação dos elementos de design é muito crítica para obter:
  * Consistência
  * Navegação fácil
  * Simplicidade
  * Compatibilidade móvel
  * Legibilidade
Aí vem os modelos **joomla** . Este software de código aberto prevê desenvolver ou usar layouts responsivos predefinidos para todas as páginas da web, em vez de escrever código para cada página separadamente.
Nesta postagem do blog, aprenderemos as seguintes coisas sobre como criar e configurar um **modelo amigável**  em Joomla.
  *[**O que são layouts joomla?** ][2]
  *[**Como criar um modelo responsivo simples em Joomla?** ][3]
  *[**Como instalar um modelo Joomla?** ][4]
  *[**Conclusão** ][5]

## O que são layouts joomla?   {#o que}
Joomla fornece modelos para o front -end e para o back -end. Ele vem com muitos modelos prontos e oferece aos desenvolvedores para criar **temas gratuitos de bootstrap**  de acordo com seus casos de uso. Existem dois tipos de modelos em Joomla.
**Modelos de front-end:**  relacionados ao usuário que enfrenta parte de um site comercial.
**Modelos de back-end:**  Esses modelos estão vinculados à lógica de negócios de um site.

## Como criar um modelo responsivo simples em Joomla?   {#como}
Nesta seção, abordaremos as etapas deste tutorial de modelo Joomla.
Antes de entrar nesta seção, verifique se você entende o seguinte:
  * Html
  * CSS
  * JavaScript
  * Php
Portanto, a criação de modelos personalizados em Joomla nunca foi tão difícil e complexa. No entanto, vamos começar a criar nosso primeiro modelo Joomla.

## **Estrutura do diretório de configuração** 
Primeiro de tudo, crie uma pasta chamada "**myTemplate **" dentro da pasta " **modelos**  ".
Crie os seguintes arquivos dentro da pasta “**MyTemplate** ”:
  ***index.php** : Este é o arquivo principal que contém código HTML e PHP para as páginas de modelo inteiro.
  ***modetailetils.xml** : Este arquivo contém os meta -dados do modelo e é obrigatório para ser notado por Joomla.
Agora, crie três pastas dentro da pasta “**MyTemplate** ” com os seguintes nomes:
  ***JS** : Esta pasta conterá todos os arquivos JavaScript necessários para o modelo
  ***CSS** : Todos os arquivos CSS para estilo entrarão nesta pasta
  ***imagens** : As imagens usadas pelo modelo residirão nesta pasta
Crie um arquivo CSS chamado "**modelo.css **" dentro da pasta " **css**  ".
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Eventualmente, é assim que a estrutura do diretório será.

## vamos colocar algum código
Coloque este código no arquivo **modetails.xml** .
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Como mencionado anteriormente, este arquivo contém os metadados sobre os layouts responsivos, definidos entre as tags de marcação. No entanto, você pode alterar as informações gerais como nome, autor e descrição.
Este arquivo também contém informações sobre os outros arquivos e pastas usadas pelo modelo.
Agora, abra o arquivo **index.php**  e comece a colocar o seguinte código:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Este arquivo começará com esta linha que impede que outras pessoas leiam seu código PHP.
```
<!DOCTYPE html>
```
Isso é para informar o navegador sobre o tipo de documento.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Os documentos HTML começam com esta linha e o atributo **xmlns**  informa o espaço de nome XML para o documento.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
A primeira linha após a tag diz ao Joomla para colocar informações sobre o cabeçalho, como informações de metadados e título da página.
Há um link para a folha de estilo externo na segunda linha e a terceira linha vincula o arquivo JavaScript externo.
O restante dos arquivos permite o bootstrap no modelo.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
A seção do corpo começa após a seção da cabeça contém todos os dados que serão refletidos no modelo para o usuário visualizar e navegar.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Esta declaração é chamada de declaração JDOC usada para instruir Joomla a adicionar um módulo chamado "Position-7". Existem várias declarações JDOC que freqüentemente estão sendo usadas no desenvolvimento de modelos **Joomla** .
Este é o arquivo final **index.php**  final com todo o código necessário para um modelo básico de joomla.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Tudo está em vigor para um modelo muito básico. Agora, é hora de instalá -lo no servidor Joomla e ver como ele continua.

## Como instalar o modelo Joomla?   {#instalar}
O processo de instalação do modelo Joomla é bastante reto e fácil. Existem as seguintes etapas a serem instaladas:
Vá para “Extensões -> Gerenciar -> Instalar

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Imagem de instalação de instalação joomla">}}

Aqui você pode ver seu modelo Joomla recém -desenvolvido na lista, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Lista de modelos Joomla">}}

Agora, selecione o modelo, pressione “Instale” e uma mensagem de sucesso aparecerá sobre a instalação bem -sucedida.
Após a instalação do modelo, você pode acessar e modificar os arquivos de modelo no painel de controle do Joomla e visualizar as alterações da opção "Visualização de modelo".

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Agora, você pode ver seu primeiro modelo Joomla no navegador!

## Conclusão   {#conclusion}
Um modelo bom e responsivo é a base para a modelagem geral do site. **Os layouts responsivos**  no Joomla são multifuncionais e podem ser usados ​​para vários projetos. Desde escrever o código até o desenvolvimento do modelo Joomla, torna -se muito simples com a ajuda de um painel de administração intuitivo. A Joomla fornece controle completo sobre o desenvolvimento do modelo para atender aos desejos do usuário.
Como **categoria CMS Software**  está sob melhorias consistentes e mais tutoriais sobre outros sistemas de gerenciamento de conteúdo serão adicionados à lista, mantenha contato com a seção [Sistema de Gerenciamento de Conteúdo][6] para atualizações regulares.

Páginas de produto relevantes
Você pode encontrar os seguintes links relevantes:
  * [Joomla][1]
  * [Drupal][7]
  * [Piro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concreto5][11]
  * [Gravador][12]
  * [Artesanato][13]
  * [Contao][14]
  * [Garfo][15]
  * [Refinaria CMS][16]
  * [Locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
