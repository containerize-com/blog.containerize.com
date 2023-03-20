---
title: "Como dockerize WordPress | Docker WordPress" 
seoTitle: "Como dockerize WordPress | Docker WordPress" 
description: "O que é Docker & Docker compor? Neste artigo, aprenderemos a instalar o Docker, o Docker Compose e como dockerize o WordPress em um contêiner do Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Um software de contêiner aumenta um aplicativo, suas dependências e faz o aplicativo funcionar em qualquer ambiente de computação. Vamos aprender a dockerizar o WordPress." 
url: /pt/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Um software de contêiner aumenta um aplicativo, suas dependências e faça o aplicativo executar em qualquer ambiente de computação. Vamos aprender a dockerizar o WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Visão geral
Bem -vindo a outra postagem no blog na categoria [Blogging][1] de software de código aberto. Publicamos alguns artigos sobre tópicos, como [aumentar seus leads com integração gratuita do WordPress Civicrm][2], [como criar seu site com WordPress e Gatsby][3] e um pouco mais. No entanto, este artigo trará mais informações e detalhes sobre plataformas de blog de código aberto e ** software de contêineres **. Passaremos por algumas perguntas quentes, como o que é o Docker & ** como instalar o Docker compor ** e aprenderemos a diminuir o WordPress.
A contêiner se tornou uma grande tendência no desenvolvimento de software como uma alternativa à virtualização. Envolve encapsular ou agrupar o código de software e todas as suas dependências para que ele possa ser executado em qualquer infraestrutura de forma consistente. A contêiner permitirá que os desenvolvedores criem e implantem aplicativos mais rapidamente e com mais segurança. O Docker é o aplicativo de contêinerização mais popular usado em toda a comunidade de desenvolvedores. Neste tutorial, aprenderemos a diminuir o WordPress usando o Docker Compose. Então, vamos começar com os seguintes pontos.
  *[** O que é Docker? **][4]
  *[** Por que você precisa dockerize WordPress **?][5]
  *** [Como instalar o Docker Compose][6] **
  *** [Dockerize WordPress][7] **
  *** [Conclusão][8] **

## O que é Docker? {#docker}
Em palavras simples, o Docker é o software de contêiner de código aberto ** ** que faz virtualização mais rápido e mais leve. É tão leve que um contêiner do Docker pode ser lançado em apenas alguns segundos. E você pode executar facilmente dezenas de recipientes do Docker em um único PC. Os desenvolvedores usam o Docker para criar, implantar e executar aplicativos usando contêineres. Os contêineres permitem que um desenvolvedor empacote um aplicativo com todas as peças de que precisa, como bibliotecas e outras dependências, e implantá -lo como um pacote. Ao fazer isso, o desenvolvedor pode ter certeza de que o aplicativo será executado em qualquer infraestrutura. Além disso, existe uma enorme comunidade de desenvolvedores e apoio que está sempre viva para fornecer a maior assistência em qualquer relevância. O Docker se tornou um componente obrigatório de qualquer empresa de software devido a seus poderosos recursos e usos.

## por que você precisa dockerize WordPress? {#por que}
Nesta seção, saberemos sobre a necessidade por trás do Dockerizing WordPress. O WordPress é um dos principais softwares de blog de código aberto que é altamente adotado pelo mundo da tecnologia. No entanto, para executar o WordPress localmente, você precisa de Apache/Nginx, MySQL Server, PHP e toneladas de outras dependências. E a implantação no ambiente de preparação ou produção é um pesadelo quando se trata de gerenciar essas dependências. Às vezes, torna -se um aborrecimento para os desenvolvedores e os engenheiros de suporte repetirem as implantações repetidamente, pois exige tempo e mão de obra.
Portanto, a contêinerização pode ajudá -lo com isso. Tudo o que você precisa é do Docker - a própria instalação leva segundos e nenhuma configuração adicional é necessária
Não importa se é uma máquina de desenvolvimento, estágio ou servidor ao vivo e o que é o SO, o Docker funciona da mesma forma em todos os lugares. Isso significa que você não precisará procurar bugs que, digamos, apareçam em um ambiente e não podem ser reproduzidos em outro.

## Como instalar o Docker Compose {#install}

### Pré -requisitos
Você pode usar o Docker Compose para executar facilmente o WordPress em um ambiente isolado construído com contêineres do Docker. Este guia demonstra como usar a Compose para configurar e executar o WordPress.
O Docker Compose depende do mecanismo Docker, portanto, certifique -se de instalar o Docker Engine. Em sistemas de desktop como o Docker Desktop para Mac e Windows, o Docker Compose está incluído como parte dessas instalações de desktop. No entanto, nos sistemas Linux First, instale o mecanismo do Docker seguindo seu [Guia Oficial][9].

### Instale a composição no Linux
Execute este comando para baixar o lançamento estável atual do Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Aplique permissões executáveis ​​ao binário:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Teste a instalação do comando de versão em execução:
```
docker-compose --version
```

### Defina um Dockerfile para WordPress
A primeira coisa que precisamos fazer é definir como nossa imagem será em um ** _ Dockerfile _ **. É um arquivo de texto adicionado ao diretório com as fontes do seu aplicativo.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“**/var/www/html/wordpress **” conterá conteúdo completo do WordPress junto com temas, plugins e conteúdos. Se o seu repositório contiver apenas o tema ou plug -in, basta adicionar a pasta relevante.
Crie um arquivo Docker-comppose.yml que inicie seu blog WordPress e uma instância MySQL separada com uma montagem de volume para persistência de dados:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Agora, execute o comando no diretório do seu projeto
```
docker-compose up -d
```
Isso é executado ** _ Docker-Compose Up _ ** no modo destacado, extrai as imagens do Docker necessário e inicia os contêineres do WordPress e do banco de dados.
Depois que os contêineres começarem, você pode abrir o URL no navegador da web e começar a usar seu aplicativo:
```
http://localhost:8000
```

## Conclusão {#conclusion}
Isso nos leva ao final deste post do blog. Neste artigo, aprendemos sobre o que é o Docker, ** Como instalar o Docker Compose **. Também aprendemos a dockerizar o WordPress usando o Docker-Compose. Além disso, apresentamos você ao conceito por trás do Docker e como você pode definir aplicativos simples multi-containers. No entanto, este software de contêiner de código aberto ** é uma opção líder para todas as organizações de software. Portanto, este artigo realmente o ajudará se você deseja optar pelo Docker para seus aplicativos. Existem muitos outros artigos relevantes e software de blog listados na seção "Explorar" abaixo.
Finalmente, [contenderize.com][10] está escrevendo artigos sobre produtos de código aberto adicionais. Portanto, mantenha contato com a categoria [blogs][1] para notícias e atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][11], [LinkedIn][12] e [Twitter][13].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [WordPress][14]
  * [Jekyll][15]
  * [Discurso][16]
  * [Fantasma][17]
  * [Como dockerize WordPress com Docker Compose][18]
  * [Aumente seus leads com a integração do WordPress de Civicrm gratuita][2]
  * [Automatize o sistema de ticketing usando o WordPress e Osticket][19]
  * [Como integrar o fórum do discurso com o WordPress][20]
  * [Aumente o tráfego de pesquisa do site seguindo os 7 melhores blogs de SEO][21]
  * [Como construir seu site com WordPress e Gatsby][3]
  * [Como ativar a compactação GZIP no WordPress para melhor PagSpeed ​​e SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/pt/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
