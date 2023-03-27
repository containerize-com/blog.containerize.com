---
title: "Guia para iniciantes para criar um modelo básico de joomla" 
seoTitle: "Guia para iniciantes para criar um modelo básico de joomla" 
description: "Joomla é um popular sistema de gerenciamento de conteúdo de código aberto. Neste tutorial, explicaremos passo a passo como criar um modelo Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla é um dos sistemas de gerenciamento de conteúdo de código aberto mais populares. Este tutorial levará você pelas etapas necessárias para criar um modelo Joomla do zero." 
url: /pt/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

O Joomla é um dos sistemas de gerenciamento de conteúdo de código aberto mais populares. Este tutorial levará você pelas etapas necessárias para criar um modelo Joomla do zero.

{{< figure align=center src="images/joomla-templates-2.png" alt="modelo de joomla básico">}}

Nesta era digital, um sistema de gerenciamento de conteúdo é uma necessidade básica de qualquer negócio para todas as suas necessidades de criação de conteúdo. E há vários softwares de código aberto e CMS disponíveis no mercado. Também temos [listados][1] alguns dos principais softwares de gerenciamento de conteúdo de código aberto para empresas. A Joomla é um dos softwares CMS de código aberto mais populares e, neste tutorial, o levaremos a passo a passo e explicaremos como criar um modelo Joomla a partir do zero. Então vamos começar!
 **NOTA: Assumimos que você possui a versão do Joomla 2.5 instalada** 
*  **[Estrutura do diretório de configuração][2]**  
*  **[Crie um modelo básico de modificado.xml][3]**  
*  **[Crie um arquivo básico index.php][4]**  
*  **[Descubra e instale o modelo][5]**  
*  **[Pacote o modelo][6]**  
*  **[Conclusão][7]**  

## Estrutura do diretório de configuração {#setup}

Para criar um modelo Joomla muito básico primeiro, crie uma nova pasta na pasta Modelos. Nomeie a pasta, o que você quiser chamar seu modelo, por exemplo, “  **myNewTemplate**  “.
Usando seu editor de texto favorito, crie os arquivos  **index.php** e  **modetails.xml**  . Para gerenciar suas imagens e folhas de estilo, faça duas novas pastas chamadas  **imagens**  e  **CSS**  . Dentro da pasta  **CSS**  Crie um arquivo chamado **template.css**  .
Sua estrutura de diretório será algo assim

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Estrutura do diretório de modelos joomla">}}


## Crie um arquivo básico de modelo {#xml}

O arquivo  **modetails.xml**  mantém todos os metadados sobre o seu modelo. E esse arquivo é essencial sem ele, seu modelo não será visto por Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
O conteúdo dos templateetails.xml é auto-explicativo. Você pode simplesmente copiar o conteúdo do modificar os bits necessários.
Deixe as posições como elas são - estes são um conjunto comum para que você possa mudar facilmente dos modelos padrão.

## Crie um arquivo básico index.php {#php}

O index.php se torna o principal arquivo de bootstrap de todas as páginas que Joomla! entrega. Esta página mostrará o código nua pronto para você cortar e colar em seu próprio design.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Descubra e instale o modelo {#install}

Você primeiro precisa dizer a Joomla! que você criou um novo modelo. Esse recurso é chamado de extensões de descoberta e pode ser acessado via
```
Extensions -> Extension Manager -> Discover
```
Clique no botão Descubra para descobrir seu modelo e selecione -o e clique em Instalar para instalá -lo. Agora seu modelo deve aparecer no Model Manager (Styles), acessível via
```
Extensions -> Template Manager
```

## Empaco o modelo {#packge}

Um diretório descompactado com vários arquivos não é um bom método para distribuição. Portanto, por uma questão de distribuição, devemos criar um pacote do nosso modelo. O pacote pode estar no formato ZIP (com uma extensão .zip).
Se o seu modelo estiver em um diretório MyTemplate/, para fazer o pacote, você pode se conectar a esse diretório e usar comandos como:
```
zip -r ..\mytemplate.zip .
```

## Conclusão {#conclusion}

Neste artigo, aprendemos sobre o modelo Joomla. Passamos passo a passo sobre como criar um modelo Joomla. Este é apenas um tutorial muito básico para começar com a criação de modelos. Obviamente, você pode criar um modelo muito personalizado e aprimorado com base nessa estrutura de osso nu.

Páginas de produto relevantes
Você pode encontrar os seguintes links relevantes:
  * [Guia de Desenvolvimento de modelo Joomla para os iniciantes][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
