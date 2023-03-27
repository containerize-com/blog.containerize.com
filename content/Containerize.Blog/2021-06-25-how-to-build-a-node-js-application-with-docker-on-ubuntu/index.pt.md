---
title: "Como construir um aplicativo Node.js com Docker no Ubuntu" 
seoTitle: "Como construir um aplicativo Node.js com Docker no Ubuntu" 
description: "Se você estiver interessado no Node.js e deseja usar o Docker. Este tutorial irá orientá -lo, como criar um aplicativo NodeJS com o Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Este artigo explicará como criar um aplicativo NodeJS com o Docker Containerization. O Docker permite empacotar e executar aplicativos como contêineres." 
url: /pt/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Como construir o aplicativo NodeJS com o Docker">}}


## Este artigo explicará como criar um aplicativo NodeJS com o Docker Containerization. O Docker permite empacotar e executar aplicativos como contêineres.
Hoje estamos iniciando uma série de tutoriais sobre ferramentas de desenvolvimento de software. E este primeiro artigo aborda como conterize um aplicativo Node.js usando o Docker. O Docker ajuda os desenvolvedores a embalar e executar aplicativos como contêineres. Como o contêiner é um processo isolado e uma alternativa leve às máquinas virtuais. Este artigo explica como criar um aplicativo NodeJS com o Docker Containerization. Vamos começar!
* [ **O que é Docker** ][1]
* **[Pré -requisitos][2]** 
* [ **Setup Node.js Application** ][3]
* [ **Escreva Dockerfile** ][4]
* [ **Construa a imagem e execute o contêiner do docker** ][5]
* [ **Conclusão** ][6]

## O que é Docker {#docker}

O Docker é um conjunto de plataformas como produtos de serviço que usam virtualização no nível do sistema operacional para fornecer software em pacotes chamados contêineres. É uma plataforma aberta para o desenvolvimento, envio e execução de aplicativos. O Docker permite separar seus aplicativos da sua infraestrutura para que você possa fornecer software rapidamente.
O Docker usa uma arquitetura cliente-servidor. O cliente do Docker fala com o Docker Daemon, que faz o levantamento pesado de construção, corrida e distribuição de seus contêineres do Docker. O cliente do Docker e o Daemon se comunicam usando uma API REST, sobre soquetes UNIX ou uma interface de rede. Aqui está o diagrama da arquitetura do Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Arquitetura do Docker">}}


## Pré -requisitos {#prereq}

  * Servidor Ubuntu
  * Docker instalado no servidor
  * Node.js npm instalado

## Setup Node.js Application {#setup}

Para criar sua imagem, você precisará primeiro criar seus arquivos de aplicativo, que você pode copiar para o seu contêiner. Esses arquivos incluirão o conteúdo estático, o código e as dependências do seu aplicativo.
Primeiro, crie um diretório para o seu projeto no diretório inicial do seu usuário que não seja da raiz. Em seguida, execute o comando abaixo em uma nova pasta que você criou.
```
npm init -y
npm i -s express
```
O comando acima configurará um aplicativo Node.js com a estrutura expressa instalada como uma dependência. Vamos adicionar o seguinte código no arquivo **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Inicie o aplicativo com o Node App.js
```
node app.js
```
Navegue pelo navegador para http: // \ _server \ _ip: 3000. Você verá a seguinte página de destino.
Agora você tem um aplicativo em funcionamento. Agora podemos seguir em frente para criar o DockerFile que nos permitirá recriar e escalar esse aplicativo.

## Escreva Dockerfile {#dockerfile}

Usando o Dockerfile, você pode especificar o que será incluído no seu contêiner de aplicativos quando for executado e no ambiente do contêiner.
Antes de tudo, crie o Dockerfile com o seguinte comando na raiz do seu projeto.
```
vi Dockerfile
```
Adicione o seguinte **da instrução** para definir a imagem base do aplicativo:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Você pode adicionar o arquivo .dockerignore para remover arquivos que não pertencem à imagem do docker.
{{_LINE_46_}}
{{_LINE_47_}}
Vamos criar o subdiretório **node_modules** in /home /node junto com o diretório de aplicativos. Isso garantirá que eles tenham as permissões necessárias, o que será importante quando criarmos módulos de nós locais no contêiner com a instalação do NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Em seguida, defina o diretório de trabalho do aplicativo para/home/nó/app:
```
...
WORKDIR /home/node/app
```
Em seguida, copie o package.json e o package-lock.json, atribua o arquivo do projeto a um usuário que não seja do usuário não raiz e, em seguida, execute a instalação do NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Copie o código do seu aplicativo com as permissões apropriadas para o diretório de aplicativos no contêiner
```
...
COPY --chown=node:node . .
```
Exponha o comando para expor a porta:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
A versão final do Dockerfile deve ficar assim:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## Construir imagem e executar o contêiner {#build}

Execute o seguinte comando para gerar sua imagem do Docker
```
docker build -t <<image_name>> .
```
Isso gerará uma imagem _docker que você pode verificar usando o comando Docker Images. Agora é possível criar um contêiner com esta imagem usando o seguinte comando:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Isso iniciará o contêiner que você pode verificar executando o comando Docker PS. Agora, no seu navegador, se você acessar http: // localhost: 3000, verá o aplicativo Node.js em execução. No entanto, desta vez agora está saindo do seu contêiner do Docker.

## Conclusão {#conclusion}

O desenvolvimento com o recipiente do docker é muito simples e fácil. O Docker ajuda os desenvolvedores a embalar e executar aplicativos como contêineres. Neste tutorial, aprendemos a criar um aplicativo Node.js usando o Docker Container no Ubuntu. Nos próximos artigos, escreveremos sobre mais usos do Docker e também discutiremos outras ferramentas.

## Explore
  * [Como instalar várias versões PHP com nginx no Ubuntu][7]
  * [Como configurar e configurar o nginx como proxy reverso][8]



[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
