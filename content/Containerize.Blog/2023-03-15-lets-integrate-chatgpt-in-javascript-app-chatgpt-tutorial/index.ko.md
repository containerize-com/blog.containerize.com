---
title: "javaScript 앱에서 chatgpt를 통합합시다 chatgpt 튜토리얼" 
seoTitle: "JavaScript 앱에서 Chatgpt를 통합하십시오" 
description: "\"npm i chatgpt\"를 실행하고 node.js 응용 프로그램에서 OpenAi Chatbot을 사용하기 시작하십시오. 이 안내서를 따라 chatgpt를 JavaScript 앱에 통합하는 방법을 알아보십시오." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "\"npm i chatgpt\"를 실행하고 node.js 응용 프로그램에서 OpenAi Chatbot을 사용하기 시작하십시오. 이 안내서를 따라 chatgpt를 JavaScript 앱에 통합하는 방법을 알아보십시오." 
url: /ko/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## GPT-3 기반 바이러스 성 챗봇을 통합하여 비즈니스 소프트웨어를 간소화하십시오. 이 chatgpt 자습서는 통합 단계와 코드 스 니펫을 보여줍니다.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="JavaScript 앱에서 Chatgpt를 통합하십시오">}}


## 개요
안녕하세요 독자! [chatgpt][1] 통합에 게시 한 블로그 게시물에 대한 압도적 인 응답에 감사드립니다. 우리는 당신의 관심에 따른 또 다른 유용한 **chatgpt 튜토리얼 **와 함께 여기에 있습니다. 또한, 우리는 귀하의 학업 및 경력에 유익한 기사를 게시하기 위해 루프에 올 것입니다. 그러나 우리는 JavaScript 자습서의 [시리즈][20]을 시작 했으므로 JavaScript AQPP **에서 ChatGpt를  **통합하는 방법을 보여주는 가이드를 작성하는 것이 가장 좋은시기입니다. 또한이 GPT-3 기반**   바이러스 성 챗봇** 기능을 만들기 위해 코드 스 니펫을 작성합니다. 이를 위해 Node.js 앱에서 ChatGpt 기능을 활성화합니다. 따라서 Node.js에 대한 사전 지식의 기본 수준은이 안내서를 진행하는 동안 플러스입니다.
다음 섹션은이 chatgpt 튜토리얼에서 다루어집니다.
  * **[사전 반품 -CatGpt JavaScript 래퍼][2]**
  * **[node.js 응용 프로그램과의 chatgpt 통합][3]**

## pre-requisites-Chatgpt JavaScript Wrapper   {#pre-refiesites --- chatgpt-javaScript-wrapper-}
이 섹션에서는 Node.js 기반 응용 프로그램에서 ChatGpt 통합을 활성화하는 데 필요한 요구 사항을 보여줍니다. 요구 사항은 간단하고 시스템에 쉽게 설치할 수 있습니다.
다음은이 chatgpt javaScript 통합을 연습하기위한 사전 요청입니다.

 * [nodejs4](>= 18)

 * [NPM5](>=9)
위의 전제 조건이 설치되면 다음 단계는 OpenAI API 키를 얻는 것입니다. 이 키는 API 요청을 프로그래밍 방식으로 ChatGpt에 요청하는 데 사용됩니다. 따라서 절차를 모르는 경우 OpenAI API 키를 얻는 방법을 배우려면이 [링크][6]를 방문하십시오.
API 키를 안전한 장소에 보관하십시오. 요구 사항 단계의 전부입니다.

## chatgpt node.js 응용 프로그램과의 통합   {#hatgpt-integration-with-node.js-application}
이제 우리는 모두 프로그래밍 방식으로 javaScript 앱에서 chatgpt를 통합하도록 설정되었습니다.** 먼저 터미널을 열고 다음 명령을 실행하십시오.
```
npm i chatgpt
```
성공적으로 실행되면 다음 단계와 코드 스 니펫을 따라 GPT-3 모델에 요청하여 프로그래밍 방식으로 ChatGpt와 상호 작용합니다.
 * chatgptapi를 가져옵니다.
 * OpenAI API 키로 생성자를 초기화하십시오.
 * SendMessage 메소드를 호출하여 GPT-3 모델에 메시지를 보내고 응답을받습니다.
 * 응답을 표시합니다.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
위의 코드 스 니펫을 기본 서버 파일에 복사하고 붙여 넣고 다음 명령을 터미널로 실행하십시오.
```
node index.js
```
**참고** : Package.json 파일에 "모듈 외부에서 가져 오기 명령문을 사용할 수 없다"는 경우 ( "type": "module",)를 추가하십시오.
아래 이미지에서 출력을 볼 수 있습니다.

{{< figure align=center src="images/chatgpt_tutorial.png" alt="chatgpt 튜토리얼">}}

또한이 ChatGpt JavaScript 래퍼를 사용하면 대화를 추적하고 후속 메시지를 보낼 수 있습니다. 아래 코드 스 니펫에 표시된대로 요청 본문에서 "ParentMessageId"를 전달하는 것입니다.
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
마찬가지로, 당신은 [여기][7]에 제공된 다른 많은 방법을 탐색 할 수 있습니다. 이 OpenAi 챗봇 통합은 엔터프라이즈 수준 애플리케이션에 경쟁력을 부여 할 수 있습니다.

## 결론
이 시점은이 **chatgpt 튜토리얼 **의 끝까지 우리를 데려옵니다. JavaScript 앱에서 ChatGpt를  **통합하는 방법을 배웠기를 바랍니다. 또한 로컬 컴퓨터에서 테스트 할 수있는 작업 코드 스 니펫이 있습니다. 이 블로그 게시물은 Node.js 응용 프로그램에서**   chatgpt 통합**를 배우기 위해 번성하는 경우 자산입니다.

## 우리와 접촉
마지막으로, [Containerize.com][8]는 다른 주제에 대한 블로그 게시물을 지속적으로 작성합니다. 또한 소셜 미디어 계정 [Facebook][9], [LinkedIn][10] 및 [Twitter][11]에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][12]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
**chatgpt를 JavaScript와 통합하는 방법?**
이 chatgpt [튜토리얼][2]에 따라 Programmatical으로 javaScript 앱에 chatGpt를 통합하기위한 단계와 코드 스 니펫을 알아보십시오.

## 또한보십시오
  * [인공 지능 소개 | AI는 무엇입니까?][13]
  * [Chatgpt를 Google 시트와 통합하는 방법][14]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][15]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][16]
  * [ChatGpt와의 Google Docs 통합 | Openai GPT-3][17]
  * [상위 5 개 오픈 소스 AI 프레임 워크는 무엇입니까][18]
  * [생성 ai | 생성 인공 지능][19]

  
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
