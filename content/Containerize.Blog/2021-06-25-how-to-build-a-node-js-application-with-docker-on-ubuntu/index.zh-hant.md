---
title: "如何在Ubuntu上使用Docker構建Node.js應用程序" 
seoTitle: "如何在Ubuntu上使用Docker構建Node.js應用程序" 
description: "如果您對node.js感興趣，並且想使用docker。本教程將引導您瀏覽，如何使用Docker構建Nodejs應用程序。" 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "本文將向您解釋如何使用Docker容器化構建NodeJS應用程序。 Docker允許將應用程序作為容器包裝並運行。" 
url: /zh-hant/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="如何使用Docker構建Nodejs應用程序">}}


## 本文將向您解釋如何使用Docker容器化構建NodeJS應用程序。 Docker允許將應用程序作為容器包裝並運行。
今天，我們正在啟動有關軟件開發工具的一系列教程。第一篇文章涵蓋瞭如何使用Docker容器化node.js應用程序。 Docker可幫助開發人員打包和運行應用程序作為容器。由於容器是一個孤立的過程，也是虛擬機的輕量級替代品。本文說明瞭如何使用Docker容器化構建NodeJS應用程序。讓我們開始吧！
  *[**什麼是Docker **][1]
  * **[先決條件][2]**
  *[**設置node.js應用程序**][3]
  *[**寫Dockerfile **][4]
  *[**構建圖像並運行Docker容器**][5]
  *[**結論**][6]

## 什麼是docker   {#docker}
Docker是一組平台作為使用OS級虛擬化在稱為容器的軟件包中交付軟件的服務產品。它是開發，運輸和運行應用程序的開放平台。 Docker使您可以將應用程序與基礎架構分開，以便您可以快速提供軟件。
Docker使用客戶端服務器體系結構。 Docker Client與Docker Daemon進行了交談，該守護程序會繁重地建築物，運行和分發您的Docker容器。 Docker Client和Daemon使用REST API，UNIX插座或網絡接口進行通信。這是Docker架構的圖。

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Docker架構">}}


## 先決條件 {#prereq}
  * Ubuntu服務器
  * Docker安裝在服務器上
  * node.js npm已安裝

## setup node.js應用程序 {#setup}
要創建圖像，您首先需要製作應用程序文件，然後您可以將其複製到容器中。這些文件將包括您應用程序的靜態內容，代碼和依賴項。
首先，在非Root用戶的主目錄中為您的項目創建一個目錄。然後，在您創建的新文件夾中執行下面的命令。
```
npm init -y
npm i -s express
```
上面的命令將設置一個node.js應用程序，該應用程序以依賴關係安裝了Express Framework。讓我們將以下代碼添加到**app.js** 文件中。
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
使用Node App.js啟動應用程序
```
node app.js
```
將瀏覽器導航到http：// \ _server \ _ip：3000。您將看到以下著陸頁。
現在，您已經啟動並運行了一個應用程序。現在，我們可以繼續創建Dockerfile，這將使我們能夠重新創建和擴展此應用程序。

## 寫dockerfile   {#dockerfile}
使用DockerFile，您可以在執行程序和容器環境時指定應用程序容器中包含的內容。
首先，創建dockerfile，並在項目的根部使用以下命令。
```
vi Dockerfile
```
從**指令中添加以下**以設置應用程序的基本圖像：
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    您可以添加.dockerignore文件，以刪除不屬於Docker Image的文件。
{{_LINE_46_}}
{{_LINE_47_}}
讓我們創建**node_modules**  subdirectory在 /home /node中以及應用程序目錄。這將確保它們具有所需的權限，當我們使用NPM安裝的容器中創建本地節點模塊時，這將很重要。
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
接下來，將應用程序的工作目錄設置為/home/node/app：
```
...
WORKDIR /home/node/app
```
接下來，複製package.json和package-lock.json，將項目文件分配給非root用戶“ node”，然後運行NPM安裝
```
...
COPY package*.json ./
USER node
RUN npm install
```
將您的應用程序代碼和適當權限複製到容器上的應用程序目錄
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
Dockerfile的最終版本應該像這樣：
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

## 構建圖像並運行容器 {#build}
運行以下命令來生成您的Docker映像
```
docker build -t <<image_name>> .
```
這將生成一個_docker image_，您可以使用Docker Images命令檢查該圖像。現在可以使用以下命令使用以下命令來創建一個使用此圖像的容器：
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
這將啟動可以通過運行Docker PS命令​​來驗證的容器。現在在瀏覽器中，如果訪問http：// localhost：3000，您會看到Node.js應用程序正在運行。但是，這次現在從您的Docker容器中運行。

## 結論 {#conclusion}
使用Docker容器開發非常簡單。 Docker可幫助開發人員打包和運行應用程序作為容器。在本教程中，我們學會瞭如何使用Ubuntu上的Docker容器構建Node.js應用程序。在即將發表的文章中，我們將撰寫有關Docker的更多用途，還將討論其他工具。

## 探索
  * [如何在Ubuntu上使用nginx安裝多個PHP版本][7]
  * [如何設置和配置為反向代理][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
