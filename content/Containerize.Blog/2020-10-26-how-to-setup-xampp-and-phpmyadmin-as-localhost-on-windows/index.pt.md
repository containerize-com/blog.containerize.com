---
title: "Configuração XAMPP e PhpMyadmin como localhost no Windows" 
seoTitle: "Configuração XAMPP e PhpMyadmin como localhost no Windows" 
description: "Configure XAMPP e PhpMyadmin como localhost no Windows. Crie seu próprio ambiente de teste local gratuito e de código aberto para testar e criar aplicativos da Web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Configure um ambiente de desenvolvimento com pilha de soluções de servidor web de código aberto e gratuito (XAMPP) e software de gerenciamento de banco de dados (PhpMyadmin)" 
url: /pt/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Configure um ambiente de desenvolvimento com o Solution Web Server de código aberto (XAMPP) e o software de gerenciamento de banco de dados (PhpMyadmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp e phpmyadmin como localhost">}}

XAMPP e PHPMYADMIN como localhost fornecem a um servidor local para os desenvolvedores testarem e criar aplicativos da Web. O XAMPP é um servidor local instalado em computadores/laptops pessoais. Ele fornece um ambiente local para criar, executar e testar aplicativos PHP antes de implantá -los em servidores ao vivo.
Cobriremos as seguintes seções nesta postagem do blog:
  * [Descrição][1]
  * [Instalação Xampp][2]
  * [painel de phpmyadmin][3]
  * [Pensamentos finais][4]

## Descrição:   {#Description}
O XAMPP é grátis e a pilha de soluções de servidor da web de código aberto. Ele contém Apache, MySQL, Mariadb, PHP e Perl. O XAMPP está disponível para sistemas operacionais do Windows. É extremamente fácil de instalar e usar. É por isso que é o ambiente de desenvolvimento PHP mais popular. XAMPP e PHPMYADMIN como localhost fornecem um ambiente completo para o desenvolvimento e teste de aplicativos da web.
Alfabetos em Xampp representam:
  ***x** -Plataforma cruzada (suporta vários sistemas operacionais, incluindo Linux, Windows e Mac OS)
  ***a**  - servidor http apache
  ***M**  - MARIADB (banco de dados)
  ***p**  - php
  ***p**  - Perl

## XAMPP Instalação   {#xampp}
  * Faça o download do xampp de [aqui][5].

{{< figure align=center src="images/xampp1.png" alt="Xamp como localhost">}}

  * Instale o arquivo executável.
  * Em seguida, clique em "Avançar".
  * Escolha os componentes que deseja instalar.

{{< figure align=center src="images/xampp2.png" alt="Xampp como localhost Etapa 2">}}

  * Para a maioria dos aplicativos da Web, você só precisa _apache_, _mysql_, _php_ e _phpmyadmin_.
  * Selecione o diretório de instalação onde deseja instalar o XAMPP.
  * Você receberá um alerta de segurança do Windows. Você deve verificar a seguinte opção: “_private redes, como minha casa ou rede de trabalho” _.
  * Finalmente, clique em "Concluir" para concluir a instalação.

{{< figure align=center src="images/xampp4.png" alt="Xampp como localhost Etapa 3">}}

  * Após a instalação bem -sucedida, abra o painel de controle XAMPP.
  * Inicie os serviços "Apache" e "MySQL".

{{< figure align=center src="images/xampp5.png" alt="Xampp como localhost Etapa 4">}}


## PhpMyadmin Dashboard:   {#phpmyadmin}
Para acessar o painel PhpMyadmin, clique no botão "Admin" ao lado do serviço MySQL. Você também pode acessar o phpmyadmin visitando http: // localhost/phpmyadmin do seu navegador. Aqui você pode criar bancos de dados. Siga estas etapas para criar um novo banco de dados.
  * No painel, clique na guia "Bancos de dados".

{{< figure align=center src="images/db1.png" alt="phpmyadmin no host localhost 1">}}

  * Digite o nome do banco de dados e clique no botão "Criar". Isso simplesmente criará um novo banco de dados vazio.

{{< figure align=center src="images/db2.png" alt="phpmyadmin no host localhost 2">}}

  * Em seguida, você pode criar tabelas selecionando o banco de dados recém -criado.
  * Digite o nome da tabela em "Criar tabela".

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin no host localhost 3">}}

  * Selecione o número de colunas.
  * Em seguida, clique no botão "Go".
  * Depois disso, você precisa preencher o formulário na próxima página para terminar de criar a tabela.

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin no host localhost Etapa 4">}}


## Pensamentos finais:   {#Final}
A instalação do XAMPP é simples e direta. Não leva mais de 15 minutos para o servidor XAMPP de configuração. Depois de instalado, os desenvolvedores podem criar e testar seus aplicativos da Web baseados em PHP, mesmo sem uma conexão com a Internet. Em vez de testar projetos diretamente em um servidor da Web ao vivo, é simples e economizando tempo para testá-los localmente. É uma ótima plataforma para iniciantes aprender, testar e polir suas habilidades de PHP, Perl e banco de dados.

## Explore:
[Pilha de solução de servidor da web de código aberto para desenvolvedores PHP e Perl][6]
[Melhores opções de pilha de soluções de servidor da web de código aberto][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
