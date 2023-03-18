---
title: "Um guia para iniciantes para criar o tema WordPress a partir do zero" 
seoTitle: "Um guia para iniciantes para criar o tema WordPress a partir do zero" 
description: "Aprenda a criar o tema WordPress a partir do zero sem dor. Neste tutorial, explicamos o processo em etapas fáceis." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Etapa 5: Arquivo Styles.css" 
url: /pt/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Um guia para iniciantes para criar o tema WordPress a partir do zero">}}

Como criar o tema WordPress está entre as principais consultas na pesquisa do Google. Criar um tema WordPress pode ser simples se você conhece HTML, CSS e JavaScript básicos. No entanto, se você é novo no WordPress, este tutorial é para você. Tudo o que você precisa fazer é seguir as etapas mencionadas. Então, vamos ler este guia e aprender a criar o tema WordPress a partir do zero.
  * [Requisitos] [1]
  * [Guia passo a passo] [2]

### Requisitos {#ReQuirements}
A primeira e mais importante coisa que você precisa fazer é instalar o WordPress. O WordPress é bem conhecido por sua facilidade de instalação. É um processo simples e pode ser feito facilmente sozinho seguindo o [guia] [3].

### como criar tema WordPress; Guia passo a passo {#guide}
Para o tema WordPress, tudo será feito apenas no diretório ** wp_content **. Basta fazer uma nova subpasta tema na pasta ** wp_content → temas.
A segunda coisa é decidir o layout do tema. Aqui, o tutorial está mostrando o layout básico que consiste em ** cabeçalho, área principal, rodapé, barra lateral **.
Basicamente, o WordPress precisa de apenas 2 arquivos, ou seja, estilo.css e index.php. Mas, para este layout, você precisa ** 5 arquivos **, como segue;
  *** header.php - ** contém o código para a seção de cabeçalho do tema.
  *** index.php - ** contém o código da área principal e especificará onde os outros arquivos serão incluídos. Este é o arquivo principal do tema.
  *** Sidebar.php - ** contém as informações sobre a barra lateral.
  ** Footer.php - ** lida com a seção de rodapé.
  *** style.css - ** Responsável pelo estilo do seu tema.
  *** bootstrap.css - ** Nenhum código CSS separado é necessário; altamente responsivo.
  *** bootstrap.js - ** fornece seu próprio JS para a barra de navegação, ou guias, etc.
** bootstrap.js ** e ** bootstrap.css ** precisa ser baixado do pacote Bootstrap e copiado na pasta ** tema **.
Aqui estão as etapas a seguir para o tema de configuração

### Etapa 1: Arquivo Header.php
Coloque o seguinte código no arquivo header.php.
```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```
Este arquivo header.php contém o código para a parte do cabeçalho na qual o JS e o arquivo de estilo estão vinculados. Ele exibe o cabeçalho da página.

### Etapa 2: arquivo index.php
Coloque o seguinte código no índice de arquivo principal.php
```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```
O código acima exibe o conteúdo principal da postagem, barra lateral e rodapé.

### Etapa 3: arquivo lateral.php
Adicione o seguinte código na barra lateral.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
No código acima, as funções internas do WordPress são chamadas para exibir categorias diferentes, arquivos de postagens.

### Etapa 4: FIGO RODO.PHP
Adicione as linhas de código abaixo ao arquivo de rodapé.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Etapa 5: Arquivo Styles.css
Adicione as seguintes linhas ao arquivo style.css
```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```
Depois de seguir todas as etapas acima, você terá um tema básico de trabalho do WordPress. Você pode modificá -lo para torná -lo mais bonito e adequado para seus requisitos.

### Conclusão
Neste tutorial, explicamos como criar tema WordPress em etapas simples e fáceis. Depois de ler e seguir as etapas, a criação de um tema do WordPress não é uma tarefa mais difícil agora. Mas, obviamente, este tutorial se atenha a uma configuração muito básica e, para melhorar, você precisará aprender mais sobre HTML, CSS, JS e PHP.
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
