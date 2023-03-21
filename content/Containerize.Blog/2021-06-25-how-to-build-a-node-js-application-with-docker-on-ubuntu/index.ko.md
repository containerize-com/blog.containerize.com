---
title: "Ubuntu에서 Docker를 사용하여 Node.js 응용 프로그램을 작성하는 방법" 
seoTitle: "Ubuntu에서 Docker를 사용하여 Node.js 응용 프로그램을 작성하는 방법" 
description: "Node.js에 관심이 있고 Docker를 사용하려면. 이 튜토리얼은 Docker를 사용하여 Nodejs 응용 프로그램을 구축하는 방법을 안내합니다." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "이 기사에서는 Docker Containerization을 사용하여 Nodejs 응용 프로그램을 구축하는 방법을 설명합니다. Docker는 응용 프로그램을 컨테이너로 패키지 및 실행할 수 있습니다." 
url: /ko/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Docker를 사용하여 Nodejs 응용 프로그램을 구축하는 방법">}}


##이 기사는 Docker Containerization을 사용하여 Nodejs 응용 프로그램을 구축하는 방법을 설명합니다. Docker는 응용 프로그램을 컨테이너로 패키지 및 실행할 수 있습니다.
오늘 우리는 소프트웨어 개발 도구에 대한 일련의 자습서를 시작하고 있습니다. 이 첫 번째 기사는 Docker를 사용하여 Node.js 응용 프로그램을 컨테이너화하는 방법을 다룹니다. Docker는 개발자가 응용 프로그램을 컨테이너로 패키지 및 실행하도록 도와줍니다. 컨테이너는 고립 된 프로세스이며 가상 머신에 대한 가벼운 대안이기 때문입니다. 이 기사에서는 Docker Containerization을 사용하여 Nodejs 응용 프로그램을 구축하는 방법을 설명합니다. 시작하자!
  *[**Docker 란 무엇입니까** ][1]
  * **[전제 조건][2]**
  *[**설정 node.js 응용 프로그램** ][3]
  *[**Dockerfile 작성** ][4]
  *[**이미지 빌드 및 도커 컨테이너를 실행하십시오** ][5]
  *[**결론** ][6]

## Docker   {#docker}
Docker는 OS 레벨 가상화를 사용하여 컨테이너라는 패키지로 소프트웨어를 제공하는 서비스 제품으로서의 플랫폼 세트입니다. 응용 프로그램을 개발, 배송 및 실행하기위한 개방형 플랫폼입니다. Docker를 사용하면 응용 프로그램을 인프라와 분리하여 소프트웨어를 빠르게 제공 할 수 있습니다.
Docker는 클라이언트 서버 아키텍처를 사용합니다. Docker Client는 Docker Deomon과 대화를 나눕니다. Docker Deomon은 Docker 컨테이너의 건물, 달리기 및 배포를 많이 해제합니다. Docker 클라이언트와 데몬은 REST API, UNIX 소켓 또는 네트워크 인터페이스를 사용하여 통신합니다. Docker Architecture의 다이어그램은 다음과 같습니다.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="도커 아키텍처">}}


## 전제 조건   {#prereq}
  * 우분투 서버
  * Docker는 서버에 설치되었습니다
  * node.js npm 설치

## setup node.js 응용 프로그램   {#setup}
이미지를 만들려면 먼저 응용 프로그램 파일을 만들어 컨테이너에 복사 할 수 있습니다. 이 파일에는 응용 프로그램의 정적 컨텐츠, 코드 및 종속성이 포함됩니다.
먼저, 뿌리가 아닌 사용자의 홈 디렉토리에서 프로젝트에 대한 디렉토리를 만듭니다. 그런 다음 작성한 새 폴더에서 아래 명령을 실행하십시오.
```
npm init -y
npm i -s express
```
위의 명령은 종속성으로 설치된 Express Framework가있는 Node.js 응용 프로그램을 설정합니다. **app.js**  파일에 다음 코드를 추가하겠습니다.
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
Node app.js로 응용 프로그램을 시작하십시오
```
node app.js
```
브라우저를 http : // your \ _server \ _ip : 3000으로 탐색하십시오. 다음 방문 페이지가 표시됩니다.
이제 신청서가 실행 중입니다. 이제이 응용 프로그램을 재현하고 확장 할 수있는 dockerfile을 만들 수 있습니다.

## DockerFile 쓰기   {#DockerFile}
DockerFile을 사용하면 응용 프로그램 컨테이너가 실행될 때 포함 할 내용과 컨테이너 환경을 지정할 수 있습니다.
우선 프로젝트의 루트에서 다음 명령으로 dockerfile을 만듭니다.
```
vi Dockerfile
```
응용 프로그램의 기본 이미지를 설정하려면 **명령어에서 다음** 를 추가하십시오.
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Docker Image에 속하지 않은 파일을 제거하기 위해 .dockerignore 파일을 추가 할 수 있습니다.
{{_LINE_46_}}
{{_LINE_47_}}
앱 디렉토리와 함께 /home /node에서 **node_modules**  서브 디렉토리를 만들어 봅시다. 이렇게하면 필요한 권한이 있으므로 NPM 설치가있는 컨테이너에 로컬 노드 모듈을 만들 때 중요합니다.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
다음으로 응용 프로그램의 작업 디렉토리를/home/node/app로 설정하십시오.
```
...
WORKDIR /home/node/app
```
다음으로 package.json 및 package-lock.json을 복사하고 프로젝트 파일을 뿌리가 아닌 사용자 "노드"에 할당 한 다음 NPM 설치를 실행하십시오.
```
...
COPY package*.json ./
USER node
RUN npm install
```
컨테이너의 응용 프로그램 디렉토리에 적절한 권한과 함께 응용 프로그램 코드를 복사하십시오.
```
...
COPY --chown=node:node . .
```
포트를 노출시키기 위해 명령 노출 :
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
DockerFile의 최종 버전은 다음과 같습니다.
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

## 이미지 빌드 및 실행 컨테이너   {#build}
Docker 이미지를 생성하려면 다음 명령을 실행하십시오
```
docker build -t <<image_name>> .
```
Docker Image 명령을 사용하여 확인할 수있는 _docker image_가 생성됩니다. 이제 다음 명령을 사용 하여이 이미지로 컨테이너를 만들 수 있습니다.
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Docker PS 명령을 실행하여 확인할 수있는 컨테이너가 시작됩니다. 이제 브라우저에서 http : // localhost : 3000에 액세스하면 node.js 앱이 실행됩니다. 그러나 이번에는 이제 Docker 컨테이너에서 실행됩니다.

## 결론   {#conclusion}
Docker 컨테이너의 개발은 매우 간단하고 쉽습니다. Docker는 개발자가 응용 프로그램을 컨테이너로 패키지 및 실행하도록 도와줍니다. 이 튜토리얼에서는 Ubuntu에서 Docker 컨테이너를 사용하여 Node.js 응용 프로그램을 작성하는 방법을 배웠습니다. 다가오는 기사에서는 Docker의 더 많은 사용에 대해 쓸 것입니다. 또한 다른 도구에 대해 논의 할 것입니다.

## 탐구하다
  * [우분투에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][7]
  * [NGINX를 리버스 프록시로 설정하고 구성하는 방법][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
