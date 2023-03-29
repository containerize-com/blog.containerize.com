---
title: "Implantação contínua do GitLab | Como funciona?" 
seoTitle: "Implantação contínua do GitLab | Como funciona?" 
description: "Neste tutorial, criaremos um pipeline de implantação contínua com o GitLab. A implantação contínua do GitLab ajuda o DevOps a executar a implantação automatizada." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "A implantação automatizada simplifica seu fluxo de trabalho & amp; processos. Este tutorial do GitLab ajuda você a aprender a configurar um pipeline de implantação contínua usando o GitLab CI/CD." 
url: /pt/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

A implantação automatizada simplifica seu fluxo de trabalho e processos. Este tutorial do GitLab ajuda você a aprender a configurar um pipeline de implantação contínua usando o GitLab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Implantação contínua do GitLab">}}


## Visão geral
Nos últimos artigos, aprendemos sobre o [básico do controle da versão][1] e, em seguida, aumentamos nosso conhecimento, aprendendo sobre diferentes [modelos ramificados][2] e fluxos de trabalho. O sistema de controle de versão trouxe eficiência no mundo do desenvolvimento, implantação e integração. Os desenvolvedores acham super fácil comprometer o código -fonte sem se preocupar com as compilações e testes. A indústria de software ganhou confiança e uma vantagem competitiva, pois essa abordagem inicializou as implantações.
**Implantação contínua do GitLab** e a integração ajuda a encontrar problemas facilmente. Além disso, os desenvolvedores podem rastrear os bugs e outros lidar com falta em um período mais curto do tempo. Todo esse processo de automação oferece liberdade das tarefas que ocorrem com frequência e reduz a mão de obra e as chances de erros. Hoje, nesta postagem do blog, exploraremos sobre o pipeline de implantação contínua com o Gitlab CI/CD. Então, vamos começar cobrindo os seguintes pontos!
* **[O que é CI & CD][3]** 
* **[O que é Gitlab Runner][4]** 
***[.
* **[Crie aplicativo básico de amostra][6]** 
* **[Conclusão][7]** 

## O que é CI & CD {#cicd}

A integração contínua (IC) é uma das melhores práticas do DevOps para automatizar a integração de alterações de código de vários colaboradores em um único projeto de software. Isso permite que os desenvolvedores mesclem frequentemente alterações de código em um repositório central, onde as compilações e testes são executados. A implantação contínua (CD) se move um passo adiante, implantando automaticamente o código para o ambiente de destino (produção ou estadiamento) após o compromisso de cada código.
Antes de começar, verifique se você tem um projeto no GitLab para o qual gostaria de usar o CI/CD. E você deve ter acesso de mantenedor ou proprietário ao projeto.

## O que é Gitlab Runner {#runner}

Depois de entender **Implantação contínua do GitLab** , o GitLab Runner é um pequeno programa leve escrito em Go que executa trabalhos relacionados à integração contínua (IC) em sua máquina local e envia os resultados ao GitLab para que ele considere as alterações. É um único binário executável que pode ser instalado em qualquer sistema operacional principal.
Antes de avançarmos com o GitLab CI / CD, você precisa ter certeza de ter os corredores disponíveis para executar suas tarefas. Você pode seguir o guia oficial para [instalar][8] e [registrar][9] Gitlab Runner.

## .gitlab-ci.yml Arquivo {#yml}

O**. Ele é colocado na raiz do seu repositório e contém definições de como seu projeto deve ser construído. Toda vez que pressionamos uma instância do GitLab, o GitLab invocava um corredor para construir e testar o projeto, conforme instruído dentro deste arquivo.

## Crie um aplicativo de amostra {#sample}

Na seção deste tutorial **GitLab** , criaremos um aplicativo de amostra. Supondo que você já tenha criado um repositório GitLab, vamos criar um aplicativo de amostra e configuraremos um processo CI / CD para o aplicativo.
Primeiro de tudo, crie o arquivo package.json na raiz do seu projeto
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Agora crie um app.js na raiz do seu projeto
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Na última etapa da implantação contínua **Gitlab,**Crie um**Dockerfile** e adicione o seguinte conteúdo a ele:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile contém o processo de construção deste aplicativo. Envolve a criação de um contêiner de nós e a instalação das dependências.
Agora precisamos criar um**. Este arquivo conteria as instruções para construir nosso projeto. Toda vez que nos comprometemos com o nosso repositório GitLab, o Gitlab invocava um corredor para construir o projeto.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Temos apenas uma compilação de estágio e ela apenas **instala** como um script. Este é um comando que você teria que executar manualmente toda vez que uma mudança chega ao seu projeto. E é aí que entra o Runner Gitlab e faria isso automaticamente toda vez que você se compromete.
Agora, assumindo que você já instalou o GitLab Runner e também o registrou na sua instância do GitLab, podemos testar o GitLab CI / CD em ação, fazendo uma confirmação simples com o aplicativo e empurrando -o para o GitLab.
Em seguida, você pode abrir seu projeto no GitLab, ir ao My-Project → Pipeline e verá uma tag dizendo "Passado" ao lado do Commit que fez. Os compromissos subsequentes também terão tags.

## Conclusão {#conclusion}

Isso nos leva ao final deste tutorial **Gitlab**. Neste artigo, aprendemos sobre o básico da integração contínua do Gitlab, **O que é CI & CD** , **O que é o GitLab Runner** e a implantação contínua. Além disso, estudamos qual é o uso de corredores no fluxo de trabalho geral do CI / CD. Também criamos um projeto de amostra que explica como configurar a implantação contínua usando o GitLab. Este tutorial do GitLab realmente o ajudará se você estiver procurando **Implantação contínua** GitLab**. No entanto, existem muitos outros recursos mencionados na seção "Explorar" abaixo que você pode conferir. Além disso, os artigos são sobre os sistemas de controle de versão****que são de código aberto, auto-hospedados e extensíveis.
Finalmente, [contenderize.com][10] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [][11][Software de controle de versão][12] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Automatize os fluxos de trabalho de desenvolvimento de software com ações do GitHub][16]
  * [Entenda e aprenda ramos e puxe solicitações no Git][2]
  * [Software de gerenciamento de código -fonte | O que é git?][17]
  * [Top 5 sistemas de controle de versão de código aberto em 2021][18]
  * [Automatize operações comerciais usando software de código aberto e gratuito][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
