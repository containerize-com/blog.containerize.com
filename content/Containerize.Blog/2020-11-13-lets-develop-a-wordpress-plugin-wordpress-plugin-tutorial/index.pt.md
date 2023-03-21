---
title: "Vamos desenvolver um plug -in do WordPress | Tutorial do plug -in do WordPress" 
seoTitle: "Vamos desenvolver um plug -in do WordPress | Tutorial do plug -in do WordPress" 
description: "Interessado no desenvolvimento do WordPress Plugins? Siga este tutorial do plug -in do WordPress que descreve etapas completas para criar um plug -in básico do WordPress." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "O plug -in do WordPress é um módulo que você ativa no seu site para fornecer uma série de recursos ou elementos. Esses plugins são otimizados para SEO e oferecem automação." 
url: /pt/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

O plug -in ## WordPress é um módulo que você ativa no seu site para fornecer uma série de recursos ou elementos. Esses plugins são otimizados para SEO e oferecem automação.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Tutorial do plug -in do WordPress">}}


## Visão geral
O WordPress é uma plataforma de blog de código aberto em nível corporativo. Um plug -in **WordPress**  é um conjunto independente de código que aprimora e estende a funcionalidade do WordPress. Usando qualquer combinação de PHP, HTML, CSS, JavaScript/JQuery. Um plug -in pode adicionar novos recursos a qualquer parte do seu site.
A funcionalidade que você pode adicionar ao seu site depende do que cada plug -in específico foi criado para fazer. Um plug -in do WordPress pode ser desenvolvido para fazer qualquer coisa. De uma pequena tarefa a um aplicativo de pleno direito que executa várias operações e possui suas próprias interfaces. Os plug -ins são diferentes do seu tema e trabalho de forma independente, usando ganchos, filtros, códigos de curto, widgets e código personalizado para executar sua funcionalidade.
Neste tutorial do plug -in do WordPress, aprenderemos como criar nosso primeiro plug -in do WordPress. O motivo mais importante para criar um plug -in é que ele permite separar seu próprio código do código principal do WordPress.
  ***[Requisitos][1]** 
  ***[básicos do desenvolvimento do plug -in][2]** 
  ***[Como criar plugin WP?][3]** 
  ***[Conclusão][4]** 

## Requisitos   {#ReQuirements}
  * Versão mais recente do WordPress
  * Compreensão do PHP / MySQL
  * Compreensão de HTML / CSS e JavaScript

## básicos do desenvolvimento do plug -in   {#Basics}
Vamos reservar um momento para falar sobre alguns aspectos -chave do desenvolvimento de plug -in. Um entendimento sólido de como esses conceitos funcionam ajudará você a criar funcionalidade fácil de usar e sustentável.

## # Ações
**Os ganchos de ação  **são uma ferramenta muito útil no **  WordPress  ****  plugin  **e são usados ​​para executar funções (**  ações** ) em locais específicos de um tema ou plug -in. O WordPress possui dezenas de ações definidas ao longo de sua funcionalidade principal, cada ação que consiste em um nome exclusivo. Para mais detalhes [leia][5].

Filtros ## #
Um filtro WordPress é um gancho que aceita uma variável (ou série de variáveis) e as devolve depois que elas foram modificadas. Esses filtros são frequentemente usados ​​para que você tenha uma maneira de manipular informações padrão. Para mais detalhes [leia][6].

## # shortcodes
Os códigos de short são macros que podem ser usados ​​para executar interações dinâmicas com o conteúdo. ou seja, criando uma galeria a partir de imagens anexadas ao post ou renderizando um vídeo. Como resultado, eles são uma maneira valiosa de manter o conteúdo limpo e semântico, permitindo que os usuários finais sejam alguma capacidade de alterar programaticamente a apresentação de seu conteúdo. Para mais detalhes [leia][7].

Widgets ## #
Os widgets são importantes porque fornecem outro meio de executar o código do seu plug-in enquanto fornece uma interface fácil de usar. Como a maioria dos temas apoiará uma ou mais barras laterais; Adicionar seus próprios widgets fornecerá acesso rápido para exibir suas informações dentro do tema.

## **Como criar plugin WP?** {#Create}
Nesta seção do tutorial do plug -in do WordPress, tudo o que você precisa fazer é criar uma pasta e, em seguida, criar um único arquivo com uma linha de conteúdo. Navegue até a pasta **wp-content/plugins  **e crie uma nova pasta chamada **  mytestplugin **. Dentro desta nova pasta, crie um arquivo chamado  **mytestplugin.php**  . Abra o arquivo em um editor de texto e cole as seguintes informações nele:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Agora, você pode entrar no back -end para ativar seu plug -in. Isso é tudo, embora este plugin não faça nada. Mas, é um plug -in ativo e funcionando. A melhor prática ao desenvolver um plug -in é separar seu código em arquivos e pastas apropriadas.
Para demonstrar, vamos adicionar funcionalidade ao nosso plug -in de teste que rastreia a popularidade de nossos artigos, armazenando quantas vezes cada postagem foi vista.

## # armazenando visualizações de página
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Até agora, tão bom neste tutorial do plug -in do WordPress. Mas essa função nunca é chamada, portanto, não será usada. É aqui que os ganchos entram. Você pode entrar nos arquivos do seu tema e chamar a função manualmente a partir daí. Mas então você perderia essa funcionalidade se mudasse o tema, derrotando todo o objetivo. Um gancho, chamado **wp_head **, que funciona logo antes da tag estar presente na maioria dos temas, para que possamos definir nossa função para executar sempre que  **wp_head**   é executado, como assim:
```
add_action("wp_head", "add_page_views");
```

## # mostrando as visualizações da página
Agora, criaremos outra função que retorne as visualizações da página que já armazenamos na função acima. Vamos dar uma olhada no código:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Até agora, acabamos de recuperar a contagem de visualizações. Agora, vamos mostrar. Você pode estar pensando que deve ser complexo. Mas, é muito simples assim:
```
echo get_page_views() . “view(s)”
```

## Conclusão   {#conclusion}
Este é o final deste tutorial do plug -in do WordPress. Seguindo este artigo e usando apenas algumas funções, criamos um plug -in básico para rastrear nossas postagens mais populares. Podemos melhorá -lo muito, mas o objetivo era apenas deixá -lo confortável com o básico. Além disso, ao aprender alguns padrões de desenvolvimento do WordPress (plugins, ganchos, etc.), você também está adquirindo habilidades que o servirão em ambientes sem palavras. Existem muitas outras postagens de blog relacionadas a plataformas de blog de código aberto e CMS de código aberto. que você pode encontrar na seção Explorar abaixo. Esta postagem do blog pode realmente ajudá -lo se você deseja implantar uma plataforma de blog de código aberto para o seu negócio.
Finalmente, [contendeRize.com][8] está escrevendo artigos sobre outros produtos de código aberto. Portanto, mantenha contato com as categorias [Blogging][9] e [software de inteligência de negócios][10] para notícias e atualizações regulares

## Explore
  * [Como instalar Matomo para WordPress | Tutorial do WordPress][11]
  * [Aumente seus leads com a integração do WordPress de Civicrm gratuita][12]
  * [Como instalar o plug -in no WordPress | Fórum de Vanilla][13]
  * [Joomla vs Drupal | Comparação do CMS em 2021][14]
  * [Coisas para revisar antes de optar por software de código aberto em 2021][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
