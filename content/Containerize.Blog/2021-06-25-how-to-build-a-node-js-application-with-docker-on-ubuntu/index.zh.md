---
title: "如何在Ubuntu上使用Docker构建Node.js应用程序" 
seoTitle: "如何在Ubuntu上使用Docker构建Node.js应用程序" 
description: "如果您对node.js感兴趣，并且想使用docker。本教程将引导您浏览，如何使用Docker构建Nodejs应用程序。" 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "本文将向您解释如何使用Docker容器化构建NodeJS应用程序。 Docker允许将应用程序作为容器包装并运行。" 
url: /zh/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="如何使用Docker构建Nodejs应用程序">}}


## 本文将向您解释如何使用Docker容器化构建NodeJS应用程序。 Docker允许将应用程序作为容器包装并运行。
今天，我们正在启动有关软件开发工具的一系列教程。第一篇文章涵盖了如何使用Docker容器化node.js应用程序。 Docker可帮助开发人员打包和运行应用程序作为容器。由于容器是一个孤立的过程，也是虚拟机的轻量级替代品。本文说明了如何使用Docker容器化构建NodeJS应用程序。让我们开始吧！
  *[**什么是Docker **][1]
  *** [先决条件][2] **
  *[**设置node.js应用程序**][3]
  *[**写Dockerfile **][4]
  *[**构建图像并运行Docker容器**][5]
  *[**结论**][6]

## 什么是docker {#docker}
Docker是一组平台作为使用OS级虚拟化在称为容器的软件包中交付软件的服务产品。它是开发，运输和运行应用程序的开放平台。 Docker使您可以将应用程序与基础架构分开，以便您可以快速提供软件。
Docker使用客户端服务器体系结构。 Docker Client与Docker Daemon进行了交谈，该守护程序会繁重地建筑物，运行和分发您的Docker容器。 Docker Client和Daemon使用REST API，UNIX插座或网络接口进行通信。这是Docker架构的图。

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Docker架构">}}


## 先决条件{#prereq}
  * Ubuntu服务器
  * Docker安装在服务器上
  * node.js npm已安装

## setup node.js应用程序{#setup}
要创建图像，您首先需要制作应用程序文件，然后您可以将其复制到容器中。这些文件将包括您应用程序的静态内容，代码和依赖项。
首先，在非Root用户的主目录中为您的项目创建一个目录。然后，在您创建的新文件夹中执行下面的命令。
```
npm init -y
npm i -s express
```
上面的命令将设置一个node.js应用程序，该应用程序以依赖关系安装了Express Framework。让我们将以下代码添加到** app.js **文件中。
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
使用Node App.js启动应用程序
```
node app.js
```
将浏览器导航到http：// \ _server \ _ip：3000。您将看到以下着陆页。
现在，您已经启动并运行了一个应用程序。现在，我们可以继续创建Dockerfile，这将使我们能够重新创建和扩展此应用程序。

## 写dockerfile {#dockerfile}
使用DockerFile，您可以在执行程序和容器环境时指定应用程序容器中包含的内容。
首先，创建dockerfile，并在项目的根部使用以下命令。
```
vi Dockerfile
```
从**指令中添加以下**以设置应用程序的基本图像：
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    您可以添加.dockerignore文件，以删除不属于Docker Image的文件。
{{_LINE_46_}}
{{_LINE_47_}}
让我们创建** node_modules ** subdirectory在 /home /node中以及应用程序目录。这将确保它们具有所需的权限，当我们使用NPM安装的容器中创建本地节点模块时，这将很重要。
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
接下来，将应用程序的工作目录设置为/home/node/app：
```
...
WORKDIR /home/node/app
```
接下来，复制package.json和package-lock.json，将项目文件分配给非root用户“ node”，然后运行NPM安装
```
...
COPY package*.json ./
USER node
RUN npm install
```
将您的应用程序代码和适当权限复制到容器上的应用程序目录
```
...
COPY --chown=node:node . .
```
暴露命令以暴露端口：
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
Dockerfile的最终版本应该像这样：
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

## 构建图像并运行容器{#build}
运行以下命令来生成您的Docker映像
```
docker build -t <<image_name>> .
```
这将生成一个_docker image_，您可以使用Docker Images命令检查该图像。现在可以使用以下命令使用以下命令来创建一个使用此图像的容器：
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
这将启动可以通过运行Docker PS命令​​来验证的容器。现在在浏览器中，如果访问http：// localhost：3000，您会看到Node.js应用程序正在运行。但是，这次现在从您的Docker容器中运行。

## 结论{#conclusion}
使用Docker容器开发非常简单。 Docker可帮助开发人员打包和运行应用程序作为容器。在本教程中，我们学会了如何使用Ubuntu上的Docker容器构建Node.js应用程序。在即将发表的文章中，我们将撰写有关Docker的更多用途，还将讨论其他工具。

## 探索
  * [如何在Ubuntu上使用nginx安装多个PHP版本][7]
  * [如何设置和配置为反向代理][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
