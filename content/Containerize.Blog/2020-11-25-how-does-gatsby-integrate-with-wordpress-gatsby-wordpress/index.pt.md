---
title: "Como Gatsby se integra ao WordPress? | Gatsby WordPress" 
seoTitle: "Como Gatsby se integra ao WordPress? | Gatsby WordPress" 
description: "Use Gatsby WordPress juntos para melhorar a velocidade, a escalabilidade e a segurança do seu site. Neste tutorial, você aprenderá a usar esses softwares de código aberto." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Configure Gatsby de código aberto com seu WordPress para trazer maior experiência do usuário e desempenho geral. Vamos aprender a usar este gerador de site estático." 
url: /pt/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Configure Gatsby de código aberto com seu WordPress para trazer maior experiência do usuário e desempenho geral. Vamos aprender a usar este gerador de site estático.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Visão geral
O Gatsbyjs é um gerador de sites estático alimentado por ReacT de código aberto e de código aberto. Ele usa poderoso pré-configuração poderoso para criar um site que usa apenas arquivos estáticos para cargas de página incrivelmente rápidas. O WordPress é uma ótima plataforma de blog de código aberto. Como resultado, muitas pessoas sabem como descobrir se um site é um site do WordPress para que eles possam invadir e roubar informações. O uso de Gatsby WordPress juntos fornecerá o mesmo poder do gerenciamento de conteúdo do WordPress e da velocidade do Gatsby.
Neste artigo, veremos o que é Gatsby e por que você precisa usá -lo com o software CMS. Em seguida, entraremos em detalhes sobre como usar o WordPress e o Gatsby juntos para criar uma incrível experiência no site. Vamos começar!
  *[** O que é Gatsby **?][1]
  *** [Prós e contras de usar o WordPress e Gatsby][2] **
  *** [Como usar Gatsby com WordPress][3] **
  *** [Conclusão][4] **

## o que é gatsby {#gatsby}
Gatsby é um gerador de sites estáticos. Isso significa que Gatsby gera os arquivos HTML estáticos que são carregados no servidor do seu site. Quando um visitante pousa no seu site, esses arquivos estáticos são servidos ao navegador, em vez do conteúdo dinâmico que o WordPress geralmente serve. É uma estrutura gratuita e de código aberto com base no React, que ajuda os desenvolvedores a criar sites e aplicativos em chamas.

## prós e contras de usar o WordPress e Gatsby {#Proscons}
De acordo com os [documentos] oficiais de Gatsby [5], eles compilaram uma mesa, para quem a combinação de Gatsby WordPress é ótima e para quem não é. Por uma questão de facilidade, estou listando -os aqui.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress e Gatsby são ótimos para
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Equipes de conteúdo que se sentem confortáveis ​​com a experiência de edição de conteúdo do WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Equipes de desenvolvimento que valorizam usando tecnologias populares de código aberto
{{_LINE_34_}}
{{_LINE_35_}}
        Redeseações de sites com conteúdo já armazenado no WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Equipes que desejam possuir seus dados e pilha de tecnologia
{{_LINE_40_}}
{{_LINE_41_}}
        Fluxos de trabalho de controle de acesso complexos ou restrições de modelagem de conteúdo
{{_LINE_43_}}
{{_LINE_44_}}
        Projetos onde a segurança é importante
{{_LINE_46_}}
{{_LINE_47_}}
        Projetos de alta demanda onde o desempenho é fundamental
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress e Gatsby não são ótimos para
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Equipes que exigem o uso de temas do WordPress UI
{{_LINE_59_}}
{{_LINE_60_}}
        Aqueles que procuram um CMS em nuvem totalmente gerenciado
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Além desses pontos oficiais, gostaria de listar alguns prós e contras de usar o Gatsby WordPress juntos
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Prós
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Velas de carga mais rápidas - os sites estáticos carregam mais rápido que a dinâmica. Como resultado, isso afeta sua página carrega velocidades e classificação de SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Menos custos do servidor - Como os arquivos estáticos não precisam de softwares especiais, portanto, as páginas HTML estáticas também podem ser servidas a partir de servidores mais baratos.
{{_LINE_78_}}
{{_LINE_79_}}
        Mais seguro - para sites estáticos, não há componentes móveis de peças, portanto, não há chance de os hackers explorarem seu software.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Contras
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Curva de aprendizado - requer habilidades adicionais para os desenvolvedores. Como aprender reactjs e grafql
{{_LINE_93_}}
{{_LINE_94_}}
        Somente conteúdo estático - se você precisar servir a qualquer conteúdo dinâmico. Então Gatsby não é para você. Ele só pode servir arquivos estáticos. Portanto, você não pode ter nenhum sistema de comentário que busque os dados do banco de dados.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Como usar Gatsby com WordPress {#howto}
Antes de instalar o Gatsby, você precisa instalar [Nodejs][6] e [npm][7] no ambiente do seu site.

### Etapa 1 - Instale Gatsby
```
npm install -g gatsby-cli
```
Este comando executa o instalador automaticamente. Ele baixa e instala todas as dependências antes de instalar o Gatsby. Uma vez concluído, você pode começar a criar seu primeiro site Gatsby.
```
gatsby new gatsby-site
```
Isso baixará o modelo de partida do Gatsby e o colocará no diretório/Gatsby-WordPress. Depois que a instalação estiver concluída, você pode abrir a versão de desenvolvimento do site
```
gatsby develop
```
Agora, no seu navegador da web, digite _http: // localhost: 8000_ e seu modelo padrão deve abrir.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsby Starter Modelo">}}


### Etapa 2 - Conecte Gatsby ao WordPress
Nesta seção do guia Gatsby WordPress, conectaremos este gerador de site estático com o WordPress. Você tem um site estático básico, mas precisa integrá -lo ao WordPress. Isso aponta seu site Gatsby para o endereço do seu blog WordPress, permitindo que ele puxe os dados mais recentes ao executar o servidor de desenvolvimento. Uma vez conectado, o Gatsby criará um site estático com base no seu modelo atual.
Instale o plug -in WordPress de origem Gatsby no repositório NPM.
```
npm install gatsby-source-wordpress
```

### Etapa 3 - Configurar Gatsby
Coloque o seguinte código em seu arquivo _gatsby-config.js_
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Atualize este código para apontar para o seu site WordPress. Se o seu site estiver hospedado localmente, após o BaseUrl, você poderá usar _localhost: 8888/wordpress_ em vez do URL do seu site. Depois de salvar o arquivo, você precisará criar seus modelos de página.

### Etapa 4 - modelos de página de construção
Os modelos de página de construção permitem que este gerador de site gere uma postagem para cada página no site do seu WordPress. O plug -in de origem extrairá os dados necessários do WordPress para essas páginas, mas você precisará criar o modelo de design.
No seu arquivo _gatsby-node.js_, adicione o seguinte código
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Depois de chamar todos os dados, Gatsby gerará uma página para cada postagem. Usando o comando desenvolver, você pode navegar para cada nova página usando o URL gerado.

## Conclusão {#conclusion}
Neste tutorial de Gatsby WordPress, abordamos como gerar um site Gatsby a partir do WordPress. Aprendemos quais são os prós e contras desses dois softwares de código aberto. Também abordamos como instalar e começar com o ambiente de desenvolvimento de Gatsby.
Finalmente, [contendeRize.com][8] está escrevendo artigos sobre outros produtos de código aberto. Portanto, mantenha contato com a categoria de plataforma de código aberto [blogs][9] para notícias e atualizações regulares.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
