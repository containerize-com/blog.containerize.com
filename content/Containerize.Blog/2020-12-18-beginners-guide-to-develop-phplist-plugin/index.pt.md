---
title: "Guia para iniciantes para desenvolver plug -in phplist" 
seoTitle: "Guia para iniciantes para desenvolver plug -in phplist" 
description: "Familiarize -se com a arquitetura do plug -in phplist e aprenda a criar um plug -in phplist básico. Esta diretriz ajuda você a personalizar e aprimorar a funcionalidade phplist." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Os plug -ins Phplist permitem que os desenvolvedores personalizem o produto e aprimorem sua funcionalidade. Nesta postagem, aprenderemos a criar plug -in básico no phplist." 
url: /pt/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

Os plug -ins Phplist permitem que os desenvolvedores personalizem o produto e aprimorem sua funcionalidade. Nesta postagem, aprenderemos a criar plug -in básico no phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="plugin phplist">}}

O suporte ao plug -in é uma parte essencial do software, especialmente para sistemas de código aberto. Isso permite que os desenvolvedores criem um novo plug -in para expandir os recursos. **Phplist**  incentiva o desenvolvimento de plug -ins para que os desenvolvedores possam usá -los para adicionar novos recursos de acordo com seus requisitos de negócios. Um plug -in phplist é uma coleção de código independente que contém código para PHP, HTML, CSS e JavaScript.
Os aplicativos suportam plugins por muitos motivos e alguns deles são:
  * Não modifique a funcionalidade principal.
  * Permitir que os desenvolvedores criem novos recursos.
  * Reduza o tamanho do software.
Discutiremos os tópicos abaixo em detalhes neste tutorial.
  *[**Pré -requisitos** ][2]
  *[**básicos do desenvolvimento de plug -in phplist** ][3]
  *[**Crie nosso plugin phplist** ][4]
  *[**Conclusão** ][5]

## Pré -requisitos   {#Req}
  * Versão mais recente do phplist.
  * Familiarizado com phplist e php.
  * Compreensão de HTML / CSS e JavaScript.

## básicos do desenvolvimento de plug -in phplist   {#basics}
Os métodos a seguir melhorarão a funcionalidade de um plug -in phplist.
  ***Páginas**  - Crie páginas para atividades como relatórios, estatísticas, exibição de informações e muito mais.
  ***GAYS**  - Isso permite que você invoca a funcionalidade em locais específicos.
Existem três tipos de plugins especiais para o phplist. Um plug -in de cada tipo pode ser ativado apenas.
  ***Plugin do editor**  - permite implementar editor para editar campanhas ou modelos.
  ***Plugin de autenticação**  - Isso permite adicionar um novo mecanismo para a autenticação dos administradores.
  ***Plugin de remetente de email** -permite a implementação de um novo método para envio de email em vez de funcionalidade interna.

## Crie nosso plug -in phplist   {#Create}
Primeiro de tudo, você precisa estender a classe Core Phplistplugin. Para criar um plug -in, você precisa criar um diretório chamado "helloworld" no plug -in \ _rootdir e criar um arquivo chamado helloworld.php na raiz do diretório do plugins. Você pode verificar o arquivo config.php para encontrar o valor da variável plugin \ _rootdir. Copie o código abaixo no arquivo helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Você deve definir $ coderoot para o diretório do seu plug -in. Para garantir que o plug -in seja inicializado corretamente, você deve chamar o construtor pai. Crie um arquivo main.php e coloque -o no diretório do plug -in. Copie o seguinte código para ele.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Coloque o arquivo da classe helloworld.php e seu diretório de plug -in no plug -in rootdir para instalar o plug -in. Para ativar um plug -in, clique na guia Config na barra de menus e clique nos plugins gerenciados. A página do plug -in mostrará uma lista de plug -ins disponíveis e você pode ativar/desativar o formulário do plug -in.
Você pode acessar seu plug -in pelo seguinte URL como http://example.com/admin/?page=main&pi=helloworld. Substitua o exemplo.com pelo seu nome de domínio.

## Conclusão   {#con}
Aprendemos o básico do desenvolvimento **phplist plugin**  e criamos um plug -in de amostra. Como ponto de partida, você pode seguir esta diretriz e explorar ainda mais o desenvolvimento de plug -in para aprimorar a funcionalidade.
Finalmente, [**containerize.com **][6] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [ **boletins**  ][7] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes.
  *[**phplist** ][8]
  *[**correio de correio** ][9]
  *[**listmonk** ][10]
  *[**Moonmail** ][11]
  *[**Mailman** ][12]
  *[**Software de boletim informativo de código aberto em 2021** ][13]
  *[**Como configurar o aplicativo multi-inquilino em phplist** ][14]
  *[**Como criar e enviar boletim usando phplist** ][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
