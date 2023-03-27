---
title: "ubuntuでdockerを使用してnode.jsアプリケーションを構築する方法" 
seoTitle: "ubuntuでdockerを使用してnode.jsアプリケーションを構築する方法" 
description: "node.jsに興味があり、Dockerを使用したい場合。このチュートリアルでは、Dockerを使用してnodejsアプリケーションを構築する方法を説明します。" 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "この記事では、Dockerコンテナ化を使用してNodeJSアプリケーションを構築する方法について説明します。 Dockerでは、アプリケーションをコンテナとしてパッケージ化および実行できます。" 
url: /ja/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Dockerでnodejsアプリケーションを構築する方法">}}


## この記事では、Dockerコンテナ化を使用してNodeJSアプリケーションを構築する方法を説明します。 Dockerでは、アプリケーションをコンテナとしてパッケージ化および実行できます。
今日は、ソフトウェア開発ツールに関する一連のチュートリアルを開始しています。また、この最初の記事では、dockerを使用してnode.jsアプリケーションをコンテナ化する方法について説明します。 Dockerは、開発者がコンテナとしてアプリケーションをパッケージ化および実行するのに役立ちます。コンテナは孤立したプロセスであり、仮想マシンの軽量な代替品であるためです。この記事では、Dockerコンテナ化を使用してNodeJSアプリケーションを構築する方法について説明します。始めましょう！
* [ **dockerとは** ][1]
* **[前提条件][2]** 
* [ **node.jsアプリケーションのセットアップ** ][3]
* [ **dockerfileを書きます** ][4]
* [ **画像を構築し、Dockerコンテナを実行** ][5]
* [ **結論** ][6]

## Dockerとは何ですか {#docker}

Dockerは、OSレベルの仮想化を使用してコンテナと呼ばれるパッケージでソフトウェアを配信するサービス製品としてのプラットフォームのセットです。アプリケーションを開発、出荷、および実行するためのオープンプラットフォームです。 Dockerを使用すると、アプリケーションをインフラストラクチャから分離して、ソフトウェアをすばやく配信できます。
Dockerは、クライアントサーバーアーキテクチャを使用しています。 Dockerのクライアントは、Docker Daemonと話し合います。DockerDaemonは、Dockerコンテナの建物、走行、配布の重いものを行います。 Dockerクライアントとデーモンは、REST API、UNIXソケット、またはネットワークインターフェイスを使用して通信します。これがDockerアーキテクチャの図です。

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Dockerアーキテクチャ">}}


## 前提条件 {#prereq}

  * ubuntuサーバー
* サーバーにインストールされているDocker
  * node.js npmインストール

## node.jsアプリケーションをセットアップします {#setup}

画像を作成するには、最初にアプリケーションファイルを作成する必要があります。これをコンテナにコピーできます。これらのファイルには、アプリケーションの静的コンテンツ、コード、依存関係が含まれます。
まず、非ルートユーザーのホームディレクトリにプロジェクトのディレクトリを作成します。次に、作成した新しいフォルダーで以下のコマンドを実行します。
```
npm init -y
npm i -s express
```
上記のコマンドは、依存関係としてインストールされたExpressフレームワークを備えたnode.jsアプリケーションを設定します。次のコードを **app.js** ファイルに追加しましょう。
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
ノードapp.jsでアプリケーションを開始します
```
node app.js
```
ブラウザをhttp：// \ _server \ _ip：3000に移動します。次のランディングページが表示されます。
これで、アプリケーションが稼働しています。次に、このアプリケーションを再作成および拡張できるDockerFileを作成するために進むことができます。

## dockerfileを書きます {#dockerfile}

Dockerfileを使用して、アプリケーションコンテナが実行されたときに何を含めるかとコンテナ環境を指定できます。
まず、プロジェクトのルートで次のコマンドを備えたDockerFileを作成します。
```
vi Dockerfile
```
次の **from** 命令を追加して、アプリケーションのベース画像を設定します。
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Docker画像に属していないファイルを削除するために、.dockerignoreファイルを追加できます。
{{_LINE_46_}}
{{_LINE_47_}}
**node_modules** subdirectory in /home /nodeをApp Directoryとともに作成しましょう。これにより、必要なアクセス許可が確保されます。これは、NPMインストール付きのコンテナにローカルノードモジュールを作成するときに重要になります。
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
次に、アプリケーションの作業ディレクトリを/home/node/appに設定します。
```
...
WORKDIR /home/node/app
```
次に、package.jsonとpackage-lock.jsonをコピーし、プロジェクトファイルを非ルートユーザー「ノード」に割り当ててから、NPMインストールを実行します
```
...
COPY package*.json ./
USER node
RUN npm install
```
コンテナのアプリケーションディレクトリに適切な権限を使用してアプリケーションコードをコピーします
```
...
COPY --chown=node:node . .
```
コマンドを公開するためにポートを公開する：
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
dockerfileの最終バージョンは次のようになります。
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

## 画像を構築し、コンテナを実行します {#build}

次のコマンドを実行して、Docker画像を生成します
```
docker build -t <<image_name>> .
```
これにより、_Docker Image_が生成されます。これは、Docker Imagesコマンドを使用して確認できます。次のコマンドを使用して、この画像でコンテナを作成することが可能になりました。
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
これにより、Docker PSコマンドを実行して確認できるコンテナが起動します。ここでブラウザでhttp：// localhost：3000にアクセスすると、node.jsアプリが実行されています。しかし、今回はDockerコンテナから実行されています。

## 結論 {#conclusion}

Dockerコンテナを使用した開発は非常にシンプルで簡単です。 Dockerは、開発者がコンテナとしてアプリケーションをパッケージ化および実行するのに役立ちます。このチュートリアルでは、ubuntuでdockerコンテナを使用してnode.jsアプリケーションを構築する方法を学びました。今後の記事では、Dockerのより多くの用途について執筆し、他のツールについても説明します。

## 探検
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][7]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][8]



[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
