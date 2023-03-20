---
title: "Como migrar do WordPress para Jekyll" 
seoTitle: "Como migrar do WordPress para Jekyll" 
description: "Neste tutorial, aprenderemos a migrar seu site do WordPress para o Jekyll em etapas rápidas e fáceis. Vamos começar!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "Neste tutorial, aprenderemos a migrar seu site do WordPress para Jekyll e hospedá -lo com o GitHub livre de custo" 
url: /pt/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## Neste tutorial, aprenderemos a migrar seu site do WordPress para Jekyll e hospedá -lo com o GitHub livre de custo

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress para Jekyll">}}

Jeykll é um gerador de local estático de código aberto. Ele transforma seu texto simples em sites e blogs estáticos. É necessário que o texto seja escrito em sua marcação favorita (markdown, líquido, html / css) e usa layouts para criar um site estático. Jekyll está ciente do blog e permalinks, categorias, páginas, postagens e layouts personalizados são todos cidadãos de primeira classe. Um dos maiores benefícios do Jekyll é que você pode hospedar seu site estático nas páginas do Github e executar seu site ou blog gratuitamente. Portanto, a migração do WordPress para Jekyll pode ajudá -lo a melhorar o desempenho e a velocidade do seu site.
Nesta postagem do blog, examinaremos como migrar seu site ou blog existente do WordPress para Jekyll para obter melhor velocidade e desempenho. Então vamos começar!
  *** [Por que migrar?][1] **
  *** [Instalação][2] **
  *** [Importar postagens e páginas do WordPress para][3] **
  *** [Implantação com páginas do github][4] **
  *** [Conclusão][5] **

## Por que migrar? {#por que}
Em Jekyll, você pode obter uma pontuação 100/100 [Lighthouse][6] porque não há interações de banco de dados. E todo o conteúdo é pré -processado e salvo como arquivos HTML. E Jekyll fará apenas uma quantidade mínima de solicitações HTTP. Portanto, é super rápido.

## Instalação e configuração Jekyll {#Install}
Jekyll está escrito em Ruby. Então, você precisa instalá -lo primeiro no seu computador. Este guia pressupõe que você já tenha instalado o Ruby no seu computador. Caso contrário, você pode seguir o [Guia Oficial][7].
Primeiro, vamos "** jekyl **" e "** Bundler **" Gems usando o comando "** gem **" que estará disponível após a instalação do Ruby. Abra a linha de comando e execute o código a seguir.
```
gem install jekyll bundler
```
Em seguida, execute o seguinte comando para criar um novo site. Isso criará uma pasta ** MyBlog **.
```
jekyll new myblog
```
Depois de instalado, você pode criar o site e disponibilizá -lo em um servidor local.
```
bundle exec jekyll serve
```
O site estará disponível em http: // localhost: 4000. Ele também gera uma pasta "** _ site **" em sua pasta é qual é a saída final do site.

## Importar páginas e postagens do WordPress {#import}
Um plug-in não oficial para o WordPress também está disponível, mas seguiremos o método oficial neste tutorial. Se você deseja experimentar o plug -in do Exportador do WordPess, você pode [ir aqui][8].
Para importar suas postagens de um site auto -hospedado, execute o seguinte comando no seu terminal.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Isso importa apenas dados e conteúdo de postagem e página. Esse importador apenas converte suas postagens e cria a primeira matéria da YAML. Ele não importa nenhum layouts, estilo ou arquivos externos (imagens, CSS etc.).

## ** Implantação com páginas do github ** {#Deploy}
Até agora, criamos nosso blog Jekyll localmente. Agora vamos implantá -lo no Github. Primeiro de tudo, precisamos controlar a versão do nosso site usando [Git][9]. Execute os seguintes comandos na pasta do site.
```
git init
git add .
git commit -m "Initial Commit"
```
Ao instalar o Jekyll, ele deve criar automaticamente um arquivo "**. Gitignore **" na raiz com pelo menos o conteúdo a seguir.
Em seguida, faça login no github e crie um novo repositório seu nome.github.io
Em seguida, copie o URL HTTPS do repositório.

{{< figure align=center src="images/github-img.png" alt="URL do GitHub HTTPS">}}

Em seguida, adicione o repositório remoto e pressione o código.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Feito! Seu site agora deve estar disponível em seu nome.github.io

## Conclusão {#conclusion}
Neste artigo, aprendemos a construir um blog estático com sites Jekyll. Em seguida, aprendemos a exportar suas postagens e páginas do WordPress para Jekyll. E, finalmente, implantamos o site final nas páginas do Github.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
