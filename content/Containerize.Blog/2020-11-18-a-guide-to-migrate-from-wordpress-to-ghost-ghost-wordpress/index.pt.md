---
title: "Um guia para migrar do WordPress para o fantasma | WordPress fantasma" 
seoTitle: "Um guia para migrar do WordPress para o fantasma | WordPress fantasma" 
description: "Este tutorial é sobre como migrar do WordPress para o fantasma. Aprenderemos como migrar suas postagens e páginas para o fantasma do site do WordPress existente." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost e WordPress são duas plataformas principais de publicação de conteúdo de código aberto. Neste tutorial, aprenderemos a migrar o conteúdo do WordPress para o fantasma." 
url: /pt/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost e WordPress são duas plataformas principais de publicação de conteúdo de código aberto. Neste tutorial, aprenderemos a migrar o conteúdo do WordPress para o fantasma.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migrar do WordPress para o fantasma">}}


## Visão geral
No passado, publicamos muitos artigos sobre tópicos, como [aumentar seus leads com integração do WordPress gratuita do Civicrm][1], [como integrar o fórum do discurso com o WordPress][2] e muito mais. O Ghost é uma plataforma emergente de blog de código aberto. É um CMS Node.js para publicação de conteúdo e vem com uma interface simples e limpa que facilita o uso. É uma plataforma maravilhosa para iniciantes, pois se concentra no Markdown, em vez da edição do Wysiwyg. O poder e a velocidade do node.js tornam o fantasma muito rápido. Devido à simplicidade da plataforma, muitos usuários estão mudando de outras plataformas. Como o WordPress é a plataforma número um para gerenciamento de conteúdo.
Portanto, mais usuários **migram do WordPress para o fantasma** . Há muito conteúdo que inclui arquivos de mídia, comentários, postagens e etc. Existem plugins disponíveis que ajudam a migrar o conteúdo do WordPress para o fantasma. O principal benefício de adotar o fantasma é que ele se concentra na otimização de mecanismos de pesquisa. Neste tutorial do WordPress Ghost, passaremos por todas as etapas de migração usando o plug -in oficial de exportação do WordPress.
* **[Uma introdução Briedf do WordPress][3]** 
* **[O que é fantasma?][4]** 
* **[Requisitos][5]** 
* **[Exportar conteúdo do wrodpress usando plug -in][6]** 
* **[Importar conteúdo para o fantasma][7]** 
* **[Conclusão][8]** 

## **Uma introdução briedf de WordPress** {#wp}

[WordPress][9] é uma plataforma líder de blog de código aberto que alimentou um grande número de sites. Este software de blog gratuito é auto-hospedado, multilíngue e fornece suporte para muitos idiomas. Além disso, a comunidade de desenvolvimento do WordPress é altamente vibrante e desenvolveu um pool gigantesco de plugins úteis que estão disponíveis facilmente. Esses plugins abordam quase todos os casos de uso do seu site de negócios. Além disso, está escrito no PHP e vem com documentação abrangente sobre desenvolvimento e implantação. Todo o código -fonte está disponível no GitHub. Além disso, esta plataforma de blogs é altamente extensível, configurável e fornece integrações com aplicativos de terceiros. Há um painel muito lógico e fácil de entender, onde os usuários podem arrastar e soltar elementos para modificar a aparência de seus sites.

## **O que é fantasma?** {#ghost}

[Ghost][10] é outra plataforma popular de blog de código aberto. Esta é uma das plataformas de publicação de conteúdo mais usadas que são altamente adotadas por desenvolvedores e proprietários de sites. Além disso, o Ghost é muito amigável para SEO e vem com temas, formas, boletins de e-mail e assinaturas embutidas. Este software de blog gratuito está escrito no JavaScript e toda a documentação está disponível em relação ao desenvolvimento e implantação.

## Requisitos {#requirements}

Na seção do tutorial do WordPress Ghost, veremos os requisitos necessários para migrar do WordPress para o fantasma. Com o plug -in oficial de exportação do WordPress, você pode migrar facilmente seu conteúdo do WordPress para o Ghost. Neste tutorial, o guiaremos sobre como exportar seu conteúdo do WordPress para um site fantasma. Portanto, você deve ter uma instalação funcional do WordPress e WordPress **Exportar Plugin** instalado.

## Exportar conteúdo do WordPress {#export}

Primeiro de tudo, você precisará instalar o plug -in. Siga as etapas a seguir para instalar o plug -in
* Clique em **Plugins** do menu da barra lateral
* Clique em **Adicione novo**e use o campo de pesquisa no canto superior direito para procurar**exportação fantasma** 
* **Instale**e **Ative** o plug -in por “**Fundação Ghost** “

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Instale e ative o plug -in fantasma para o WordPress">}}

* Depois que o plug -in é ativado, navegue para **ferramentas** do menu lateral
* Clique em **Exportar para Ghost** com o menu da barra lateral.
  * Você receberá um guia sobre como preparar seu conteúdo do WordPress para o fantasma.
  * Como o Ghost usa tags em vez de categorias, para que o plug -in ajude você a converter categorias em tags.
{{_LINE_37_}}
{{_LINE_38_}}
    As etapas a seguir alterarão permanentemente a estrutura de conteúdo do seu site WordPress. Se você não tiver certeza de fazer essa alteração, use a ferramenta de exportação WordPress padrão em Ferramentas> Exportar para criar um backup completo de todo o seu conteúdo.
{{_LINE_40_}}
{{_LINE_41_}}
* Navegue para **importar** no menu da barra lateral
* Clique em **Execute o importador**sob o**conversor de taxonomia** Importar item.
  * Use as caixas de seleção para selecionar as categorias que você deseja importar para suas tags e, portanto, para o seu site fantasma.
* Em seguida, clique em **Converta categorias em tags** .
* Navegue de volta para **exportar para o fantasma**dentro de**ferramentas** no menu da barra lateral.
* Clique no botão **Baixar Arquivo de Ghost** . Você baixou um arquivo zip contendo todo o seu conteúdo.

## Importar conteúdo para fantasmas {#import}

Nesta seção do tutorial do WordPress Ghost, implementaremos as etapas para importar conteúdo para o fantasma.
* Faça login no Ghost Admin e navegue para **Labs** View.
* Clique no botão **Escolha Arquivo**dentro da opção**Importar conteúdo** e selecione seu arquivo zip exportado
* Clique em **Importar** . Todo o seu conteúdo será importado para o seu site fantasma.
Neste momento, o Ghost não possui nenhum sistema de comentários incorporado. A alternativa mais popular é o Disqus.

## Conclusão {#conclusion}

Isso nos leva ao final deste post do blog. Neste tutorial do WordPress Ghost, aprendemos a preparar seu conteúdo do WordPress pronto para a migração para o fantasma. Utilizamos o plug -in oficial de migração de fantasmas da Fundação Ghost para realizar migrações. Além disso, esta postagem do blog certamente o ajudará se você deseja migrar do WordPress para o Ghost, pois cobrimos todas as etapas necessárias. Além disso, existem muitas plataformas de publicação de conteúdo de código aberto e artigos tutoriais mencionados na seção "Explorar" abaixo. No entanto, ambas as plataformas de blog de código aberto são o principal software líder que oferece recursos de nível corporativo para atender às necessidades de seus sites de negócios.
Finalmente, [contendeRize.com][11] está escrevendo novas postagens no software de código aberto. Portanto, mantenha -se conectado com [esta][12] plataforma para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [WordPress][9]
  * [Jekyll][13]
  * [Discurso][14]
  * [Fantasma][10]
  * [Como dockerize WordPress com Docker Compose][15]
  * [Como ativar a compactação GZIP no WordPress para melhor PagSpeed ​​e SEO][16]
  * [Aumente seus leads com a integração do WordPress de Civicrm gratuita][1]
  * [Automatize o sistema de ticketing usando o WordPress e Osticket][17]
  * [Como integrar o fórum do discurso com o WordPress][2]
  * [Aumente o tráfego de pesquisa de sites seguindo os 7 melhores blogs de SEO][18]
  * [Como construir seu site com WordPress e Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
